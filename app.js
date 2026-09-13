// AnimatedEverything - the catalogue page. Engineered by Mohamad Khorbatli.
//
// This file implements what tools/frontend_checks.py specifies. The reference functions there are the
// specification; these are the same rules in the language the page speaks. Where a name matches
// (fold, ordered, filterTree, directionOf, resolvesTo, sizeReduce), it is deliberate: the two must agree,
// and a disagreement is a defect in one of them rather than a difference of opinion.
(function () {
  'use strict';

  // ================================================================= the three axes, and direction
  var RTL = {ar: 1, he: 1, fa: 1, ur: 1, ps: 1, sd: 1, ug: 1, yi: 1};
  function baseLang(v) { return String(v || '').split('-')[0].toLowerCase(); }
  function directionOf(v) { return RTL[baseLang(v)] ? 'rtl' : 'ltr'; }

  // One resolution rule (v4 s5a.1). A refinement falls back to its base; a base NEVER widens to a
  // dialect, because asking for Arabic must not silently get one particular Levantine reading.
  function resolvesTo(variant, available) {
    if (available.indexOf(variant) >= 0) return variant;
    var parts = String(variant || '').split('-');
    while (parts.length > 1) {
      parts.pop();
      var cand = parts.join('-');
      if (available.indexOf(cand) >= 0) return cand;
    }
    return null;
  }

  var LANG_NAME = {en: 'English', ar: 'Arabic', fr: 'French'};
  function langName(v) { return LANG_NAME[v] || v; }

  // ================================================================= folding, for the filters
  // Arabic is typed without harakat far more often than with them, so a filter that fails on a vocalised
  // title looks broken. Both directions are checked in the spec.
  var HARAKAT = /[ً-ْٰـ]/g;
  function fold(s) {
    s = String(s == null ? '' : s);
    try { s = s.normalize('NFKD').replace(/[̀-ͯ]/g, ''); } catch (e) { /* older engines */ }
    return s.replace(HARAKAT, '')
      .replace(/[آأإٱ]/g, 'ا')
      .replace(/ى/g, 'ي').replace(/ة/g, 'ه')
      .replace(/\s+/g, ' ').trim().toLowerCase();
  }

  // ================================================================= ordering
  // Explicit order decides; absent, the authored position holds. NEVER alphabetical - it would reorder a
  // course when a lesson is retitled, and differently in each language.
  function ordered(nodes) {
    return (nodes || []).map(function (n, i) { return [n, i]; })
      .sort(function (a, b) {
        var ao = a[0].order == null ? 1e6 : a[0].order, bo = b[0].order == null ? 1e6 : b[0].order;
        return ao - bo || a[1] - b[1];
      }).map(function (p) { return p[0]; });
  }

  function titleOf(node, variant) {
    var t = node.title || {};
    if (t[variant] != null) return {text: t[variant], how: 'exact'};
    var r = resolvesTo(variant, Object.keys(t));
    if (r) return {text: t[r], how: 'resolved'};
    return {text: node.id, how: 'id-only'};   // shown, marked - never a silent blank row
  }
  function descOf(node, variant) {
    var d = node.description || {};
    if (d[variant] != null) return d[variant];
    var r = resolvesTo(variant, Object.keys(d));
    return r ? d[r] : '';
  }

  // ================================================================= the two filter boxes
  function filterTree(courses, cq, vq, variant) {
    cq = fold(cq); vq = fold(vq);
    var out = [];
    ordered(courses).forEach(function (c) {
      var ct = titleOf(c, variant).text;
      if (cq && (fold(ct) + ' ' + fold(c.id)).indexOf(cq) < 0) return;
      var vids = ordered(c.videos);
      if (vq) {
        vids = vids.filter(function (v) {
          return (fold(titleOf(v, variant).text) + ' ' + fold(v.id)).indexOf(vq) >= 0;
        });
        if (!vids.length) return;          // conjunctive: a course with no matching video is dropped
      }
      out.push({course: c, videos: vids, expanded: !!vq});
    });
    return out;
  }

  // ================================================================= the four display modes
  //
  // Two independent choices - FORMAT (mp4 | interactive) and ENCODING (exact | compressed) - and one
  // rule the owner set, which is what makes them coherent:
  //
  //   In MP4 mode the Speech and Subtitle selectors CHOOSE THE FILE. They do not stop meaning something
  //   because a finished video has its languages baked in; they select WHICH finished video. A
  //   combination nobody rendered is refused BY NAME and never replaced by a neighbouring file.
  //
  // Availability is computed the same way in both formats - ask the index, offer what exists, say why
  // the rest is missing. The interactive index simply happens to be fuller. The control shows the SIZE
  // rather than an adjective, because "Quality" would imply the exact file is better and push everyone
  // toward the slowest option.
  var MODES = [
    {id: 'interactive.exact', format: 'interactive', encoding: 'exact', label: 'Interactive'},
    {id: 'interactive.compressed', format: 'interactive', encoding: 'compressed',
     label: 'Interactive, smaller'},
    {id: 'mp4.exact', format: 'mp4', encoding: 'exact', label: 'Video'},
    {id: 'mp4.compressed', format: 'mp4', encoding: 'compressed', label: 'Video, smaller'}
  ];

  function variantKey(speech, subs) {
    var s = (subs || []).filter(Boolean).slice().sort();
    return speech + '.' + (s.length ? s.join('+') : 'none');
  }

  // The ONE resolver. Returns {rec} or {why} - never a nearest match, never a fallback to the default
  // language. Someone who asked for Arabic and silently got English would have no way to know.
  function resolveMp4(index, speech, subs, encoding) {
    if (!index || !index.combinations) return {why: 'this lesson has no video file'};
    var key = variantKey(speech, subs);
    var byKey = index.combinations[key];
    if (!byKey) {
      return {why: 'No video has been made for ' + langName(speech) + ' speech with ' +
                   ((subs && subs.length) ? subs.map(langName).join(' + ') + ' subtitles'
                                          : 'no subtitles') + '.'};
    }
    var rec = byKey[encoding];
    if (!rec) {
      return {why: 'That combination exists, but not in the smaller encoding — only ' +
                   Object.keys(byKey).join(', ') + '.'};
    }
    return {rec: rec};
  }

  function modeAvailable(m, v, mp4index) {
    if (m.format === 'interactive') {
      if (m.encoding === 'compressed') {
        return v.meshopt
          ? {ok: true}
          : {ok: false, why: 'not published in the smaller encoding yet'};
      }
      return {ok: true};
    }
    var r = resolveMp4(mp4index, S.lang.speech, S.lang.subtitles, m.encoding);
    return r.rec ? {ok: true, rec: r.rec} : {ok: false, why: r.why};
  }

  // ================================================================= size modes
  function sizeReduce(state, action) {
    if (action === 'escape') return 'default';
    if (action === 'toggle_theatre') return state === 'theatre' ? 'default' : 'theatre';
    if (action === 'toggle_full') return state === 'full' ? 'default' : 'full';
    return state;
  }

  // ================================================================= browser state: ONE versioned key
  var SKEY = 'animatedeverything:state', SVER = 1;
  var S = {v: SVER, expanded: [], resume: {}, mode: 'interactive.exact',
           lang: {catalogue: 'en', speech: 'en', subtitles: ['en']}};
  try {
    var raw = JSON.parse(localStorage.getItem(SKEY) || 'null');
    // An unrecognised version is DISCARDED, not hopefully migrated. Nothing here is irreplaceable.
    if (raw && raw.v === SVER) S = raw;
  } catch (e) { /* private mode, or a corrupt value: start fresh */ }
  function save() { try { localStorage.setItem(SKEY, JSON.stringify(S)); } catch (e) {} }

  // ================================================================= feedback thresholds
  // The LENGTH of the wait decides which feedback is honest (v4 s5c).
  var T_FLOW = 1000, T_ATTENTION = 10000;
  function feedbackFor(ms) { return ms < T_FLOW ? 'none' : (ms < T_ATTENTION ? 'indeterminate' : 'determinate'); }

  // ================================================================= DOM
  var $ = function (id) { return document.getElementById(id); };
  var app = $('app'), tree = $('tree'), browse = $('browse');
  var fcourse = $('fcourse'), fvideo = $('fvideo'), fclear = $('fclear');
  var axcat = $('axcat'), axspeech = $('axspeech'), axsub1 = $('axsub1'), axsub2 = $('axsub2');
  var loadEl = $('load'), loadWhat = $('loadwhat'), loadBar = $('loadbar'), loadNums = $('loadnums'),
      loadStall = $('loadstall'), loadRetry = $('loadretry'), loadCancel = $('loadcancel');
  var playBtn = $('play'), scrub = $('scrub'), timeEl = $('time'), poster = $('poster');
  var axmode = $('axmode'), dl = $('dl'), vid = $('vid');

  var CAT = null, COURSES = [], current = null, size = 'default';

  function mmss(t) { t = Math.max(0, t | 0); return (t / 60 | 0) + ':' + ('0' + (t % 60)).slice(-2); }
  function mb(b) { return (b / 1e6).toFixed(1) + ' MB'; }

  // ================================================================= the tree
  function render() {
    var variant = S.lang.catalogue;
    var dir = directionOf(variant);
    browse.setAttribute('dir', dir);                 // the LAYOUT mirrors; the labels stay English
    var rows = filterTree(COURSES, fcourse.value, fvideo.value, variant);
    fclear.hidden = !(fcourse.value || fvideo.value);
    tree.innerHTML = '';

    if (!rows.length) {
      var e = document.createElement('div');
      e.className = 'empty';
      var both = fcourse.value && fvideo.value;
      e.innerHTML = both
        ? 'No course matches <b>' + esc(fcourse.value) + '</b> with a video matching <b>' +
          esc(fvideo.value) + '</b>.'
        : 'Nothing matches <b>' + esc(fcourse.value || fvideo.value) + '</b>.';
      tree.appendChild(e);
      // Zero results OFFER to widen, naming the count. One click, never automatic.
      var others = (CAT.catalogueVariants || []).filter(function (v) { return v !== variant; });
      var n = 0;
      others.forEach(function (o) { n += filterTree(COURSES, fcourse.value, fvideo.value, o).length; });
      if (n) {
        var b = document.createElement('button');
        b.className = 'widen';
        b.textContent = 'No matches in ' + langName(variant) + ' — ' + n +
          ' in other languages. Search those?';
        b.onclick = function () {
          for (var i = 0; i < others.length; i++) {
            if (filterTree(COURSES, fcourse.value, fvideo.value, others[i]).length) {
              S.lang.catalogue = others[i]; save(); syncAxes(); render(); return;
            }
          }
        };
        tree.appendChild(b);
      }
      return;
    }

    rows.forEach(function (row) {
      var c = row.course;
      var open = row.expanded || S.expanded.indexOf(c.id) >= 0 ||
                 (current && current.courseId === c.id);
      var wrap = document.createElement('div');
      wrap.className = 'course' + (open ? ' open' : '');

      var t = titleOf(c, variant);
      var crow = document.createElement('button');
      crow.className = 'crow';
      crow.setAttribute('aria-expanded', open ? 'true' : 'false');
      crow.innerHTML = '<span class="tw">▶</span>' +
        '<span class="ctitle' + (t.how === 'id-only' ? ' idonly' : '') + '" dir="auto">' +
        esc(t.text) + '</span><span class="count">' + row.videos.length + '</span>';
      crow.onclick = function () {
        var i = S.expanded.indexOf(c.id);
        if (i >= 0) S.expanded.splice(i, 1); else S.expanded.push(c.id);
        save(); render();
      };
      wrap.appendChild(crow);

      var vs = document.createElement('div');
      vs.className = 'videos';
      row.videos.forEach(function (v) {
        var vt = titleOf(v, variant);
        var vrow = document.createElement('button');
        vrow.className = 'vrow' + (current && current.video.id === v.id &&
                                   current.courseId === c.id ? ' active' : '');
        var dur = (v.duration && (v.duration[S.lang.speech] != null ? v.duration[S.lang.speech]
                                  : v.duration[Object.keys(v.duration)[0]])) || 0;
        vrow.innerHTML = '<span class="vtitle' + (vt.how === 'id-only' ? ' idonly' : '') +
          '" dir="auto">' + esc(vt.text) + '</span>' +
          // BIDI ISOLATION. '0:45 · 46.1 MB' inside an RTL tree renders as 'MB 46.1 · 0:45' without it:
          // the neutral separators take the container's direction and the run order flips. This is the
          // exact defect v4 §3.2 predicted, and it duly appeared on the first Arabic screenshot.
          '<bdi class="vmeta" dir="ltr">' + mmss(dur) + ' · ' + mb(v.bytes) + '</bdi>';
        vrow.onclick = function () { open_video(c, v); };
        vs.appendChild(vrow);
      });
      wrap.appendChild(vs);
      tree.appendChild(wrap);
    });
  }

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (m) {
      return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[m];
    });
  }

  // ================================================================= the three menus
  // Three DIFFERENT lists, each built by asking the data. A variant is offered for SPEECH when any
  // lesson in the COURSE has it, and disabled on the ones that do not (v4 s3.1) - so a menu is never
  // a column of permanently greyed entries, and the author's full gap lives on a different page.
  function courseSpeechVariants(c) {
    var s = {};
    (c.videos || []).forEach(function (v) { (v.speech || []).forEach(function (x) { s[x] = 1; }); });
    return Object.keys(s).sort();
  }

  function syncAxes() {
    fill(axcat, (CAT.catalogueVariants || []).map(function (v) {
      return {value: v, label: langName(v), enabled: true};
    }), S.lang.catalogue);

    var c = current && current.course, v = current && current.video;
    var speech = c ? courseSpeechVariants(c) : ['en'];
    fill(axspeech, speech.map(function (x) {
      var has = !v || (v.speech || []).indexOf(x) >= 0;
      return {value: x, label: langName(x) + (has ? '' : ' — no audio for this lesson'),
              enabled: has};
    }), S.lang.speech);

    var subs = v ? (v.subtitles || []) : ['en'];
    var pick = S.lang.subtitles || [];
    fill(axsub1, [{value: '', label: 'None', enabled: true}].concat(subs.map(function (x) {
      return {value: x, label: langName(x), enabled: true};
    })), pick[0] || '');
    fill(axsub2, [{value: '', label: 'None', enabled: true}].concat(subs.map(function (x) {
      return {value: x, label: langName(x), enabled: true};
    })), pick[1] || '');
  }

  function fill(sel, items, chosen) {
    sel.innerHTML = '';
    items.forEach(function (it) {
      var o = document.createElement('option');
      o.value = it.value; o.textContent = it.label; o.disabled = !it.enabled;
      if (it.value === chosen) o.selected = true;
      sel.appendChild(o);
    });
  }

  // The mode control. Every option carries its SIZE; unavailable ones are disabled and say why, which
  // is the same rule the speech menu uses - one behaviour to learn, not two.
  function syncModes() {
    var v = current && current.video;
    if (!v) { axmode.innerHTML = ''; dl.hidden = true; return; }
    axmode.innerHTML = '';
    var anyOk = false;
    MODES.forEach(function (m) {
      var a = modeAvailable(m, v, current.mp4);
      var bytes = a.rec ? a.rec.bytes
        : (m.id === 'interactive.exact' ? v.bytes
          : (m.id === 'interactive.compressed' ? v.meshoptBytes : null));
      var o = document.createElement('option');
      o.value = m.id;
      o.textContent = m.label + (bytes ? '  —  ' + mb(bytes) : '  —  unavailable');
      o.disabled = !a.ok;
      if (!a.ok) o.title = a.why || '';
      if (m.id === S.mode && a.ok) { o.selected = true; anyOk = true; }
      axmode.appendChild(o);
    });
    if (!anyOk) {
      // The chosen mode is not available for THIS lesson in THIS combination. Fall back to the one mode
      // that always exists, and say so - rather than leaving a control pointing at nothing.
      S.mode = 'interactive.exact';
      save();
      Array.prototype.forEach.call(axmode.options, function (o) {
        o.selected = (o.value === S.mode);
      });
    }
    var m = MODES.filter(function (x) { return x.id === S.mode; })[0] || MODES[0];
    var a = modeAvailable(m, v, current.mp4);
    if (m.format === 'mp4' && a.rec) {
      dl.hidden = false;
      dl.href = a.rec.address;
      dl.setAttribute('download', (titleOf(v, 'en').text + '.mp4').replace(/[\\/:*?"<>|]/g, '-'));
      dl.textContent = 'Download ' + mb(a.rec.bytes);
    } else {
      dl.hidden = true;
    }
  }

  function subtitleChoice() {
    var a = axsub1.value, b = axsub2.value, out = [];
    if (a) out.push(a);
    if (b && b !== a) out.push(b);
    return out;                      // [] means NONE, said explicitly - never inferred
  }

  // ================================================================= loading, with honest feedback
  var loadT0 = 0, loadTimer = null, lastProgress = 0, rate = [];
  function loadShow(what) {
    cancelled = false; aborter = null;
    loadT0 = Date.now(); lastProgress = Date.now(); rate = [];
    loadWhat.textContent = what; loadNums.textContent = ''; loadStall.textContent = '';
    loadRetry.hidden = true; loadCancel.hidden = false; loadBar.classList.add('indet');
    loadBar.firstChild.style.width = '0%';
    loadEl.classList.add('on');
    clearInterval(loadTimer);
    loadTimer = setInterval(tick, 1000);        // updated every second, as asked
  }
  function loadHide() {
    loadEl.classList.remove('on'); clearInterval(loadTimer); loadTimer = null;
    loadCancel.hidden = true;
  }
  function loadFail(msg) {
    loadBar.classList.remove('indet');
    loadWhat.innerHTML = '<span class="err">' + esc(msg) + '</span>';
    loadRetry.hidden = false; loadCancel.hidden = true; clearInterval(loadTimer);
  }
  // Cancelling is a CHOICE, not a fault. It reads as one: no red, no apology, and the same button
  // that stopped it offers to start again.
  function loadCancelled() {
    loadBar.classList.remove('indet');
    loadWhat.textContent = 'Download cancelled — ' + mb(got) +
      (total ? ' of ' + mb(total) : '') + ' had arrived.';
    loadNums.textContent = ''; loadStall.textContent = '';
    loadRetry.hidden = false; loadCancel.hidden = true; clearInterval(loadTimer);
  }

  var got = 0, total = 0, doneFiles = 0, totalFiles = 0, curName = '';
  function tick() {
    var el = Date.now() - loadT0;
    var mode = feedbackFor(Math.max(el, total ? estTotalMs() : 0));
    if (mode === 'determinate' && total) {
      loadBar.classList.remove('indet');
      loadBar.firstChild.style.width = Math.min(100, 100 * got / total).toFixed(1) + '%';
      var parts = [mb(got) + ' of ' + mb(total),
                   doneFiles + '/' + totalFiles + ' files',
                   'elapsed ' + mmss(el / 1000)];
      var r = rollingRate();
      // No estimate until enough has arrived to make one honest.
      if (r > 0 && got > total * 0.05) parts.push('about ' + mmss((total - got) / r) + ' left');
      loadNums.textContent = parts.join('  ·  ');
    }
    // SLOW IS NOT STALLED, and the page must not confuse them.
    //
    // The first version measured progress per COMPLETED FILE. On a 4.6 MB model at the 34 KB/s this
    // connection sometimes gives, that is 134 SECONDS of silence - during which the page showed a
    // warning about a download that was working perfectly. Progress is now counted in BYTES as they
    // arrive, so "quiet" means genuinely nothing moving, not "a big file is in flight".
    var quiet = Date.now() - lastProgress;
    if (quiet > 20000) {
      loadStall.textContent = 'nothing has arrived for ' + mmss(quiet / 1000) +
        '. It may still be working — you can keep waiting, or cancel.';
    } else if (rollingRate() > 0 && rollingRate() < 60 * 1024) {
      loadStall.textContent = 'This is a slow connection. It is still downloading — ' +
        'you can wait as long as you like, or cancel.';
    } else {
      loadStall.textContent = '';
    }
  }
  function estTotalMs() { var r = rollingRate(); return r > 0 ? (total - got) / r * 1000 : 1e9; }
  function rollingRate() {          // bytes/sec over the last few seconds, not the average since start
    if (rate.length < 2) return 0;
    var a = rate[0], b = rate[rate.length - 1];
    return b[1] > a[1] ? (b[0] - a[0]) / ((b[1] - a[1]) / 1000) : 0;
  }
  function progressed(bytes, name) {
    got = bytes; curName = name || curName; lastProgress = Date.now();
    rate.push([got, Date.now()]);
    if (rate.length > 8) rate.shift();
    tick();
  }

  // ================================================================= opening a video
  function open_video(c, v) {
    // The PREVIOUS lesson stops being playable SYNCHRONOUSLY, with the click - not when some fetch
    // resolves. Introducing the mp4.json lookup made the load path asynchronous and quietly brought
    // back a defect already fixed once: Play stayed enabled from the lesson before, so a person could
    // press it on a lesson that was no longer loaded, and an automated wait returned instantly on a
    // stale button. Whatever else happens later, this happens now.
    teardown();
    current = {course: c, courseId: c.id, video: v};
    if (S.expanded.indexOf(c.id) < 0) S.expanded.push(c.id);
    // A speech variant this lesson lacks is never silently substituted: fall to what it HAS.
    if ((v.speech || []).indexOf(S.lang.speech) < 0) S.lang.speech = (v.speech || ['en'])[0];
    var subs = v.subtitles || [];
    S.lang.subtitles = (S.lang.subtitles || []).filter(function (x) { return subs.indexOf(x) >= 0; });
    if (!S.lang.subtitles.length && subs.length) S.lang.subtitles = [subs[0]];
    save(); syncAxes(); render(); describe();
    history.replaceState(null, '', '?c=' + encodeURIComponent(c.id) + '&v=' + encodeURIComponent(v.id) +
      '&speech=' + encodeURIComponent(S.lang.speech) +
      '&subs=' + encodeURIComponent(S.lang.subtitles.join(',')) +
      '&mode=' + encodeURIComponent(S.mode));
    // The MP4 index for THIS lesson, so the mode control knows what exists before it is drawn. A lesson
    // with no MP4 at all is not an error: the index is simply absent and those modes say so.
    fetch(v.dir + '/mp4.json').then(function (r) { return r.ok ? r.json() : null; })
      .catch(function () { return null; })
      .then(function (idx) {
        if (!current || current.video !== v) return;   // the person moved on while this was in flight
        current.mp4 = idx;
        applyMode();
      });
  }

  function describe() {
    var variant = S.lang.catalogue, c = current.course, v = current.video;
    var d = directionOf(variant);
    $('about').innerHTML =
      '<h2 dir="auto">' + esc(titleOf(v, variant).text) + '</h2>' +
      '<p class="desc" dir="auto">' + esc(descOf(v, variant)) + '</p>' +
      '<p class="desc" dir="auto">' + esc(titleOf(c, variant).text) + ' · ' +
      esc(descOf(c, variant)) + '</p>';
    $('about').setAttribute('dir', d);
    $('note').textContent = v.files + ' files · ' + mb(v.bytes) +
      ' · spoken in ' + (v.speech || []).map(langName).join(', ') +
      ' · subtitles available in ' + (v.subtitles || []).map(langName).join(', ');
  }

  var fetcher = new Fetcher({
    base: '',
    onConsent: function () { return true; }     // nothing optional is fetched by this page
  });

  function rec(manifest, rel) {
    var r = manifest.files[rel];
    if (!r) throw new Error('the manifest does not list ' + rel);
    // The chosen ENCODING decides which bytes are fetched. Resolution degrades TOWARDS exactness and
    // never away from it: if a compressed sibling is missing, the exact one is used, because a caller
    // who ends up with the guaranteed bytes has lost nothing. The reverse - quietly serving lossy
    // geometry to someone who asked for the exact file - is the substitution this project refuses.
    var m = MODES.filter(function (x) { return x.id === S.mode; })[0];
    if (m && m.encoding === 'compressed' && r.meshopt) {
      return {address: r.meshopt.address, sha: r.meshopt.sha, bytes: r.meshopt.bytes,
              rel: rel, kind: rel};
    }
    return {address: r.address, sha: r.sha, bytes: r.bytes, rel: rel, kind: rel};
  }

  // ---- one file, streamed, cancellable, checksum-verified ----------------------------------------
  var cancelled = false, aborter = null;

  // The persistent store. A content address is IMMUTABLE by construction - the name is the hash of the
  // bytes - so a blob can be kept forever with no revalidation, and that is the entire reason the second
  // lesson of a course is nearly free. Relying on HTTP cache headers instead would make the property
  // depend on how the host is configured; the Cache API makes it a property of the page.
  var CACHE = 'animatedeverything/lib/2';   // the address space changed with lib/
  function cacheOpen() {
    if (!window.caches) return Promise.resolve(null);
    return caches.open(CACHE).catch(function () { return null; });
  }

  function streamOne(manifest, rel, alreadyGot) {
    var r = rec(manifest, rel);
    var url = r.address;
    return cacheOpen().then(function (cache) {
      if (!cache) return null;
      return cache.match(url).then(function (hit) {
        return hit ? hit.arrayBuffer() : null;
      }).catch(function () { return null; });
    }).then(function (cached) {
      if (cached) {
        // Counted as progress so the bar still moves, and named so a cached lesson is visibly cached.
        progressed(alreadyGot + cached.byteLength, curName);
        return cached;
      }
      return fetchOne(r, url, alreadyGot).then(function (buf) {
        return cacheOpen().then(function (cache) {
          if (cache) {
            try { cache.put(url, new Response(buf.slice(0))); } catch (e) { /* best effort */ }
          }
          return buf;
        });
      });
    });
  }

  function fetchOne(r, url, alreadyGot) {
    aborter = ('AbortController' in window) ? new AbortController() : null;
    return fetch(url, aborter ? {signal: aborter.signal} : {}).then(function (resp) {
      if (!resp.ok) throw new Error(rel + ' -> HTTP ' + resp.status);
      // A body without a reader (very old browsers) still works; it just cannot report mid-file.
      if (!resp.body || !resp.body.getReader) return resp.arrayBuffer();
      var reader = resp.body.getReader();
      var chunks = [], got = 0;
      return (function pump() {
        return reader.read().then(function (res) {
          if (cancelled) { try { reader.cancel(); } catch (e) {} throw new Error('__cancelled'); }
          if (res.done) {
            var out = new Uint8Array(got), at = 0;
            for (var i = 0; i < chunks.length; i++) { out.set(chunks[i], at); at += chunks[i].length; }
            return out.buffer;
          }
          chunks.push(res.value);
          got += res.value.length;
          progressed(alreadyGot + got, curName);    // <- every chunk, not every file
          return pump();
        });
      })();
    }).then(function (buf) {
      // The address is the hash, so verifying is not optional politeness - it is what makes a blob
      // safe to cache forever. It costs 0.05 s on 4.6 MB, measured.
      if (!window.crypto || !crypto.subtle) return buf;
      return crypto.subtle.digest('SHA-256', buf).then(function (d) {
        var hex = Array.prototype.map.call(new Uint8Array(d), function (b) {
          return ('0' + b.toString(16)).slice(-2);
        }).join('').slice(0, 16);
        if (r.sha && hex !== r.sha) {
          throw new Error('checksum mismatch for ' + r.address + ': got ' + hex +
                          ', manifest says ' + r.sha);
        }
        return buf;
      });
    });
  }

  // ---- MP4 mode: a finished video, played in the page and downloadable ---------------------------
  function showMp4(rec) {
    pause();
    if (part) { part = null; window.__part = null; }
    vid.classList.add('on');
    vid.hidden = false;
    poster.style.display = 'none';
    // The video element IS the transport in this mode: it has its own clock, its own buffering and its
    // own controls. Driving it from the page's scrubber would be a second authority on time.
    playBtn.disabled = true;
    scrub.disabled = true;
    vid.src = rec.address;
    vid.load();
    loadShow('Loading the video…');
    vid.oncanplay = function () {
      loadHide();
      timeEl.textContent = '0:00 / ' + mmss(rec.dur || 0);
    };
    vid.onerror = function () {
      loadFail('the browser could not play this file (' +
               ((vid.error && vid.error.message) || 'decode error') + ')');
    };
    vid.ontimeupdate = function () {
      timeEl.textContent = mmss(vid.currentTime) + ' / ' + mmss(vid.duration || rec.dur || 0);
    };
  }

  function hideMp4() {
    vid.classList.remove('on');
    vid.hidden = true;
    try { vid.pause(); } catch (e) {}
    vid.removeAttribute('src');
    scrub.disabled = false;
  }

  function applyMode() {
    var v = current && current.video;
    if (!v) return;
    var m = MODES.filter(function (x) { return x.id === S.mode; })[0] || MODES[0];
    var a = modeAvailable(m, v, current.mp4);
    syncModes();
    if (!a.ok) {
      hideMp4();
      loadFail(a.why || 'that combination is not available');
      return;
    }
    if (m.format === 'mp4') {
      showMp4(a.rec);
    } else {
      hideMp4();
      loadLesson(v);
    }
  }

  // Everything that must stop being true the moment another lesson, or another mode, is chosen.
  // Called synchronously from both, so no asynchronous step can leave a stale control behind.
  function teardown() {
    pause();
    playBtn.disabled = true;
    part = null;
    window.__part = null;
    window.__scene = null;
    dur = 0;
    timeEl.textContent = '0:00';
    scrub.value = 0;
  }

  function loadLesson(v) {
    teardown();
    loadShow('Loading ' + titleOf(v, S.lang.catalogue).text);
    got = 0; total = 0; doneFiles = 0; totalFiles = 0;
    var base = v.dir + '/';
    var manifest, scene, audio;
    fetch(base + 'manifest.json', {cache: 'no-store'}).then(function (r) {
      if (!r.ok) throw new Error('manifest -> HTTP ' + r.status);
      return r.json();
    }).then(function (m) {
      manifest = m;
      return fetch(base + 'scene.json').then(function (r) { return r.json(); });
    }).then(function (s) {
      scene = s;
      // THE AUDIO SPLIT, rejoined here. The published scene holds what is SHOWN; the per-variant index
      // holds what is HEARD. The player is handed the two merged and never learns they were apart.
      return fetch(base + 'audio/' + S.lang.speech + '.json').then(function (r) {
        if (!r.ok) throw new Error('no audio index for ' + S.lang.speech);
        return r.json();
      });
    }).then(function (a) {
      audio = a;
      var missing = [];
      scene.speech = (scene.speech || []).map(function (ln) {
        var e = audio.lines[ln.id];
        if (!e) { missing.push(ln.id); return ln; }
        return Object.assign({}, ln, e);
      });
      // A missing entry is a NAMED failure, never a silently closed mouth.
      if (missing.length) throw new Error('the ' + langName(audio.variant) +
        ' audio index is missing ' + missing.length + ' line(s): ' + missing.slice(0, 3).join(', '));

      // Fetch in SHOT order - the opening shot needs one actor and the set, not nine models.
      var rels = [];
      if (scene.set && scene.set.glb) rels.push(scene.set.glb);
      if (scene.set && scene.set.noceil_glb) rels.push(scene.set.noceil_glb);
      (scene.actors || []).forEach(function (a2) { rels.push(a2.model_glb); });
      rels = rels.filter(function (x, i, arr) { return x && arr.indexOf(x) === i; });
      totalFiles = rels.length;
      total = rels.reduce(function (n, r2) { return n + (manifest.files[r2] || {}).bytes || 0; }, 0);
      tick();

      // Fetched in SHOT order, one at a time, with progress counted in BYTES AS THEY ARRIVE.
      //
      // Why not fetcher.get(): it returns one promise per file and says nothing until the file is
      // complete. That is what made a 134-second download look like a hang. This streams the body and
      // reports every chunk, so the bar moves continuously even on a 34 KB/s link - and it is
      // cancellable, because a person who cannot wait should be able to stop rather than close the tab.
      var buffers = {}, acc = 0;
      var chain = Promise.resolve();
      rels.forEach(function (r2) {
        chain = chain.then(function () {
          if (cancelled) throw new Error('__cancelled');
          curName = r2.split('/').pop();
          return streamOne(manifest, r2, acc).then(function (buf) {
            buffers[r2] = buf;
            doneFiles++;
            acc += buf.byteLength;
            progressed(acc, curName);
          });
        });
      });
      return chain.then(function () { return buffers; });
    }).then(function (buffers) {
      return fetcher.json(rec(manifest, 'timeline.json')).then(function (tl) {
        return mount({manifest: manifest, scene: scene, buffers: buffers, timeline: tl});
      });
    }).catch(function (e) {
      var msg = String((e && e.message) || e);
      // Cancelling is not a failure, and slowness is not an error. Only a real fault gets red text.
      if (msg === '__cancelled' || (e && e.name === 'AbortError')) {
        loadCancelled();
      } else {
        loadFail(msg);
      }
    });
  }

  // ================================================================= mounting and playing
  var renderer = null, part = null, playing = false, dur = 0, lastT = 0;
  function mount(pack) {
    loadWhat.textContent = 'Preparing…';
    var scene = pack.scene;
    var aspect = ((scene.size && scene.size[0]) || 1920) / ((scene.size && scene.size[1]) || 1080);
    if (!renderer) {
      renderer = new THREE.WebGLRenderer({antialias: true, preserveDrawingBuffer: true});
      renderer.setPixelRatio(1);
      renderer.outputEncoding = THREE.sRGBEncoding;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.78;
      renderer.setClearColor(0x000000, 1);
      $('stage').appendChild(renderer.domElement);
      renderer.domElement.addEventListener('webglcontextlost', function (e) {
        e.preventDefault(); loadShow('The graphics context was lost; waiting for the browser…');
      }, false);
    }
    sizeCanvas(aspect);
    var player = new ScenePlayer(THREE, renderer);
    var ov = new Overlay($('overlay'), scene, pack.timeline || {});
    // The overlay's own API: setShow takes the language codes to display, render(t) draws the cue.
    ov.setShow(subtitleChoice());
    // The spoken audio, per line, each verified against its own hash (P6). It reads scene.speech, which
    // is why the audio index had to be rejoined before we get here.
    var speech = null;
    if ((scene.speech || []).length && typeof SpeechAudio !== 'undefined') {
      speech = new SpeechAudio(scene.speech, fetcher, pack.manifest);
    }
    // load()'s third argument is an onReady CALLBACK, not the timeline. Passing the timeline there is
    // what made the first build draw a perfectly sized, perfectly black canvas: the models never loaded
    // and nothing in the page said so, because the failure was 'onReady is not a function' in a console
    // nobody was reading. The gate that caught it reads the PIXELS.
    return new Promise(function (resolve) {
      player.load(scene, pack.buffers, resolve);
    }).then(function () {
      // THE VOICE IS PART OF LOADING, not something that happens after it.
      //
      // Measured on the live site: at the moment Play became enabled, SpeechAudio held ZERO decoded
      // buffers. playFrom() then had to fetch them itself, so pressing Play gave 4.5 to 7.5 seconds of
      // silence - and on one lesson, none at all within fifteen. The page had declared itself ready
      // while the thing a language lesson is FOR had not been downloaded.
      //
      // It is about 0.2 MB. Waiting for it costs a moment on a load already measured in minutes, and it
      // is the difference between pressing Play and hearing the lesson.
      loadWhat.textContent = 'Loading the voice…';
      return speech ? speech.prefetch(0, 45).catch(function () { return null; }) : null;
    }).then(function () {
      var ds = [renderer.domElement.width, renderer.domElement.height];
      ov.layout(ds[0], ds[1]);
      if (pack.badgeUrl) ov.setBadgeSrc(pack.badgeUrl);
      part = {player: player, overlay: ov, speech: speech};
      dur = scene.duration || (pack.timeline && pack.timeline.duration) || 0;
      window.__part = part; window.__scene = scene;
      poster.style.display = 'none';
      loadHide();
      playBtn.disabled = false;
      seek(0);
      return part;
    });
  }

  function sizeCanvas(aspect) {
    var w = $('stagewrap').clientWidth, h = $('stagewrap').clientHeight;
    var ww = Math.min(w, h * (aspect || 16 / 9));
    if (renderer) renderer.setSize(Math.round(ww), Math.round(ww / (aspect || 16 / 9)));
  }

  function seek(t) {
    if (!part) return;
    t = Math.max(0, Math.min(dur || 0, t)); lastT = t;
    try { part.player.seek(t); } catch (e) {}
    if (part.overlay && part.overlay.render) part.overlay.render(t);
    timeEl.textContent = mmss(t) + ' / ' + mmss(dur);
    scrub.value = dur ? Math.round(1000 * t / dur) : 0;
    if (current) { S.resume[current.courseId + '/' + current.video.id] = t; save(); }
  }

  var raf = null, t0 = 0, base0 = 0;
  function loop() {
    if (!playing) return;
    var t = base0 + (performance.now() - t0) / 1000;
    if (t >= dur) { t = dur; pause(); }
    seek(t);
    if (playing) raf = requestAnimationFrame(loop);
  }
  function play() {
    if (!part) return;
    playing = true; playBtn.textContent = 'Pause';
    base0 = dur ? (scrub.value / 1000) * dur : 0; t0 = performance.now();
    // THE VOICE. This page created SpeechAudio, prefetched its lines, and then never told it to play -
    // so every lesson ran silently, and nothing noticed because the checks asserted that pixels changed
    // and the clock advanced. Neither of those is sound. boot.js had it right: the spoken lines start
    // WITH the clock, each scheduled at its declared offset, so the timing is the spec's rather than an
    // accumulation of when things happened to finish decoding.
    if (part.speech) part.speech.playFrom(base0);
    raf = requestAnimationFrame(loop);
  }
  function pause() {
    playing = false; playBtn.textContent = 'Play';
    if (part && part.speech) part.speech.stop();
    if (raf) cancelAnimationFrame(raf);
  }
  playBtn.onclick = function () { playing ? pause() : play(); };
  // Dragging the scrubber STOPS the voice. Without this, seeking leaves the previously scheduled lines
  // playing at their old times, so the picture jumps and the audio carries on from where it was - the
  // two drift apart and never recover.
  scrub.oninput = function () { pause(); seek(dur * scrub.value / 1000); };

  // ================================================================= size modes
  function setSize(s) {
    size = s;
    app.className = s === 'default' ? '' : s;
    $('btheatre').setAttribute('aria-pressed', s === 'theatre' ? 'true' : 'false');
    $('bfull').setAttribute('aria-pressed', s === 'full' ? 'true' : 'false');
    setTimeout(function () { if (window.__scene) sizeCanvas(
      ((window.__scene.size || [16])[0]) / ((window.__scene.size || [0, 9])[1])); }, 30);
  }
  $('btheatre').onclick = function () { setSize(sizeReduce(size, 'toggle_theatre')); };
  $('bfull').onclick = function () { setSize(sizeReduce(size, 'toggle_full')); };
  document.addEventListener('keydown', function (e) {
    if (e.target && /input|select|textarea/i.test(e.target.tagName)) {
      if (e.key === 'Escape') { e.target.value = ''; render(); }
      return;
    }
    if (e.key === 'Escape') setSize(sizeReduce(size, 'escape'));
    else if (e.key === 't') setSize(sizeReduce(size, 'toggle_theatre'));
    else if (e.key === 'f') setSize(sizeReduce(size, 'toggle_full'));
    else if (e.key === '/') { e.preventDefault(); fcourse.focus(); }
    else if (e.key === ' ' && part) { e.preventDefault(); playing ? pause() : play(); }
  });
  window.addEventListener('resize', function () {
    if (window.__scene) sizeCanvas(((window.__scene.size || [16])[0]) /
                                   ((window.__scene.size || [0, 9])[1]));
  });

  // ================================================================= wiring
  fcourse.oninput = render;
  fvideo.oninput = render;
  fclear.onclick = function () { fcourse.value = ''; fvideo.value = ''; render(); };
  axcat.onchange = function () { S.lang.catalogue = axcat.value; save(); render(); if (current) describe(); };
  axspeech.onchange = function () {
    S.lang.speech = axspeech.value; save();
    // In interactive mode a different spoken variant is a different audio index; in MP4 mode it is a
    // different FILE. One handler, because the selector means the same thing in both.
    if (current) applyMode();
  };
  axsub1.onchange = axsub2.onchange = function () {
    S.lang.subtitles = subtitleChoice(); save();
    var m = MODES.filter(function (x) { return x.id === S.mode; })[0] || MODES[0];
    if (m.format === 'mp4') {
      applyMode();               // the subtitles are IN the picture, so this selects another file
    } else if (part && part.overlay) {
      part.overlay.setShow(S.lang.subtitles); part.overlay.render(lastT);
      syncModes();               // ...and it changes which MP4 combinations are reachable
    }
  };
  axmode.onchange = function () { S.mode = axmode.value; save(); applyMode(); };
  loadRetry.onclick = function () { if (current) applyMode(); };
  loadCancel.onclick = function () {
    cancelled = true;
    if (aborter) { try { aborter.abort(); } catch (e) {} }
    loadCancelled();
  };

  // ================================================================= boot
  fetch('catalogue.json', {cache: 'no-store'}).then(function (r) { return r.json(); })
    .then(function (cat) {
      CAT = cat;
      document.title = cat.title || 'AnimatedEverything';
      return Promise.all(ordered(cat.courses).map(function (c) {
        return fetch(c.dir + '/course.json').then(function (r) { return r.json(); });
      }));
    }).then(function (courses) {
      COURSES = courses;
      var n = courses.reduce(function (a, c) { return a + (c.videos || []).length; }, 0);
      $('tally').textContent = courses.length + ' courses · ' + n + ' videos';
      syncAxes(); render();
      // A shareable URL is the source of truth for what opens.
      var q = new URLSearchParams(location.search);
      if (q.get('speech')) S.lang.speech = q.get('speech');
      if (q.get('subs') != null) S.lang.subtitles = q.get('subs') ? q.get('subs').split(',') : [];
      var c = courses.filter(function (x) { return x.id === q.get('c'); })[0];
      var v = c && (c.videos || []).filter(function (x) { return x.id === q.get('v'); })[0];
      if (c && v) open_video(c, v);
      else { $('about').innerHTML = '<h2>Choose a lesson</h2><p class="desc">Pick a course on the ' +
             'left, then a video inside it.</p>'; }
    }).catch(function (e) {
      $('about').innerHTML = '<h2>Could not load the catalogue</h2><p class="desc">' +
        esc(String(e && e.message || e)) + '</p>';
    });
})();
