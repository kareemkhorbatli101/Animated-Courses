// v27.22 (P1) - ONE caching + consent layer, for every kind of byte the player needs.
//
// Fonts, voices, geometry and audio all arrive the same way: by CONTENT ADDRESS, verified against the
// hash the manifest recorded, and kept in a cache that never needs revalidating because the address is
// derived from the bytes. Having one layer rather than three is the point - three would drift, and the
// consent rule below would end up applying to whichever one someone remembered.
//
// CONSENT. Small assets a lesson cannot play without (its models, its subtitles, its per-line audio) are
// fetched as a matter of course. Anything LARGE and optional - a neural voice pack is hundreds of
// megabytes - is never fetched until the person using the page asks for it, and it is fetched by THEM,
// from the public source the spec names, not quietly by us in the background. `budget` is the line
// between the two, and a request over it that has not been consented to is REFUSED rather than delayed.
(function (global) {
  'use strict';

  var CACHE_NAME = 'lesson-blobs-v1';

  function toHex(buf) {
    var v = new Uint8Array(buf), s = '';
    for (var i = 0; i < v.length; i++) s += (v[i] < 16 ? '0' : '') + v[i].toString(16);
    return s;
  }

  // The manifest records the first 16 hex characters of the sha-256, so that is what is compared.
  function sha16(buf) {
    if (!(global.crypto && global.crypto.subtle)) return Promise.resolve(null);
    return global.crypto.subtle.digest('SHA-256', buf).then(function (d) {
      return toHex(d).slice(0, 16);
    });
  }

  function Fetcher(opts) {
    opts = opts || {};
    this.base = opts.base || '';
    this.budget = opts.budget === undefined ? 8 * 1024 * 1024 : opts.budget;  // bytes; above this, ask
    this.consented = {};          // address -> true, once the person has said yes
    this.bytes = 0;               // everything actually pulled over the network
    this.fromCache = 0;           // everything served out of the cache instead
    this.log = [];                // {address, bytes, cached, verified}
    this.onConsent = opts.onConsent || null;   // function(info) -> Promise<bool>
    this._mem = {};
  }

  Fetcher.prototype._cache = function () {
    if (!global.caches) return Promise.resolve(null);
    if (!this._c) this._c = global.caches.open(CACHE_NAME);
    return this._c;
  };

  // rec: {address, sha, bytes, kind}
  Fetcher.prototype.get = function (rec) {
    var self = this, url = this.base + rec.address;
    if (this._mem[url]) return Promise.resolve(this._mem[url]);

    return this._cache().then(function (cache) {
      return cache ? cache.match(url) : null;
    }).then(function (hit) {
      if (hit) {
        return hit.arrayBuffer().then(function (buf) {
          self.fromCache += buf.byteLength;
          self.log.push({address: rec.address, bytes: buf.byteLength, cached: true, verified: true});
          self._mem[url] = buf;
          return buf;
        });
      }
      // not cached: this is a real network request, so the consent rule applies
      var big = (rec.bytes || 0) > self.budget;
      var ask = (big && !self.consented[rec.address])
        ? (self.onConsent
            ? Promise.resolve(self.onConsent({address: rec.address, bytes: rec.bytes, kind: rec.kind}))
            : Promise.resolve(false))
        : Promise.resolve(true);
      return ask.then(function (ok) {
        if (!ok) {
          var e = new Error('not fetched: ' + rec.address + ' is ' + rec.bytes +
                            ' bytes, over the ' + self.budget + ' byte budget, and was not consented to');
          e.needsConsent = true;
          e.record = rec;
          throw e;
        }
        self.consented[rec.address] = true;
        return fetch(url, {cache: 'force-cache'}).then(function (r) {
          if (!r.ok) throw new Error('fetch ' + rec.address + ' -> HTTP ' + r.status);
          return r.arrayBuffer();
        }).then(function (buf) {
          return sha16(buf).then(function (got) {
            // A hash that does not match means the bytes are not the bytes the manifest describes.
            // There is no useful way to continue from that, so it is an error, not a warning.
            if (got && rec.sha && got !== rec.sha) {
              throw new Error('checksum mismatch for ' + rec.address +
                              ': got ' + got + ', manifest says ' + rec.sha);
            }
            self.bytes += buf.byteLength;
            self.log.push({address: rec.address, bytes: buf.byteLength, cached: false,
                           verified: !!(got && rec.sha)});
            self._mem[url] = buf;
            return self._cache().then(function (cache) {
              if (cache) {
                try { cache.put(url, new Response(buf.slice(0))); } catch (e) { /* cache is best-effort */ }
              }
              return buf;
            });
          });
        });
      });
    });
  };

  Fetcher.prototype.getMany = function (recs) {
    var self = this, out = {};
    return recs.reduce(function (p, rec) {
      return p.then(function () {
        return self.get(rec).then(function (buf) { out[rec.rel || rec.address] = buf; });
      });
    }, Promise.resolve()).then(function () { return out; });
  };

  Fetcher.prototype.text = function (rec) {
    return this.get(rec).then(function (buf) { return new TextDecoder('utf-8').decode(buf); });
  };

  Fetcher.prototype.json = function (rec) {
    return this.text(rec).then(function (s) { return JSON.parse(s); });
  };

  // What did this page actually pull? The fetch-budget gate reads exactly this.
  Fetcher.prototype.report = function () {
    return {bytes: this.bytes, fromCache: this.fromCache, requests: this.log.length,
            verified: this.log.filter(function (l) { return l.verified; }).length,
            log: this.log};
  };

  global.Fetcher = Fetcher;
})(typeof window !== 'undefined' ? window : self);
