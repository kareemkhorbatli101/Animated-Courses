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

  // How far ahead the spoken lines are fetched before a lesson is declared ready. It is a lesson's
  // length rather than a tuning knob: the voice is what a language lesson is FOR, so all of it is
  // loaded before Play is offered. Named once because the progress denominator has to ask the same
  // question the prefetch answers.
  var VOICE_AHEAD = 45;

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

  // ================================================================= sizes shown to a person
  //
  // A SIZE ON SCREEN IS A DOWNLOAD SIZE, ALWAYS. The host gzips models and JSON and does not touch
  // audio or video, so a lesson's bytes on disk are about 2.2x what the link actually carries. The MP4
  // figures were already correct - video is not compressed further - so labelling the interactive modes
  // in disk bytes put two units in one menu and made the smaller encoding look like an 8.8x saving
  // where the wire says 5.8x. It flattered the very choice it was asking a person to make.
  //
  // The disk figures are still right for what they are FOR: the content address hashes them, and the
  // progress bar divides by them because a gzipped response decodes to its disk size. Those consumers
  // deliberately keep asking for disk. This one asks for wire.
  //
  // wireOf(record, diskKey, wireKey) falls back to disk when a publish predates the wire fields, so an
  // older site degrades to the previous behaviour instead of to a blank - and says which it used.
  function wireOf(rec, diskKey, wireKey) {
    if (!rec) return {bytes: null, exact: false};
    var w = rec[wireKey];
    if (typeof w === 'number' && w > 0) return {bytes: w, exact: true};
    var d = rec[diskKey];
    return {bytes: (typeof d === 'number' ? d : null), exact: false};
  }

  // The ONE formatter every label goes through. It marks a fallback in the DOM rather than rendering a
  // disk figure that is indistinguishable from a wire one - an approximation that cannot be told from a
  // measurement is the defect this whole change is about.
  function sizeLabel(rec, diskKey, wireKey) {
    var r = wireOf(rec, diskKey, wireKey);
    if (r.bytes === null) return '';
    return (r.exact ? '' : '~') + mb(r.bytes);
  }

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
          '<bdi class="vmeta" dir="ltr">' + mmss(dur) + ' · ' +
          sizeLabel(v, 'bytes', 'wireBytes') + '</bdi>';
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
      // All four options in ONE unit. The mp4 record carries its own wire field; the two interactive
      // options read the lesson's two totals.
      var size = a.rec ? sizeLabel(a.rec, 'bytes', 'wire')
        : (m.id === 'interactive.exact' ? sizeLabel(v, 'bytes', 'wireBytes')
          : (m.id === 'interactive.compressed'
             ? sizeLabel(v, 'meshoptBytes', 'meshoptWireBytes') : ''));
      var o = document.createElement('option');
      o.value = m.id;
      o.textContent = m.label + (size ? '  —  ' + size : '  —  unavailable');
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
      dl.textContent = 'Download ' + sizeLabel(a.rec, 'bytes', 'wire');
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

  // THE BAR IS IN DISK BYTES, AND MUST STAY THAT WAY.
  //
  // `got` counts bytes as the stream yields them, and a fetch stream yields DECODED bytes - gzip is
  // undone before the page sees a chunk. So the denominator has to be the decoded size, which is the
  // disk size in the manifest. Converting it to wire bytes to "match the labels" would divide a
  // decoded numerator by a compressed denominator and finish the bar at about 220%.
  //
  // This is the trap the address-completeness rule names: when a key gains a dimension, every consumer
  // must take up the new one DELIBERATELY, asking for the one it means. Two label consumers want wire.
  // This one wants disk. gates/surface_honesty.py fails if this line ever reads a wire field.
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

  // ================================================================= the address bar
  //
  // THE URL DESCRIBES WHAT IS ON SCREEN NOW, not what was on screen when the lesson was opened.
  //
  // It used to be written in exactly one place - inside open_video - and the four selectors changed
  // state without touching it. So the address bar was a snapshot of one instant: choose Arabic
  // subtitles, copy the link, send it, and the recipient got English. The sender never saw it, because
  // their own stored state supplied what the URL had failed to carry. Only the RECIPIENT saw the
  // defect, which is why it survived every test run in a single browser profile.
  //
  // And `mode` was written here and never read at boot - a parameter that travelled and did nothing.
  //
  // URL_PARAMS is the shared contract between this writer and the reader at boot. The two ends are
  // compared by a check that enumerates them, so the next write-only parameter is caught by
  // construction rather than by someone remembering to look.
  // 'cam' is written and read by the same pair as every other parameter, so the symmetry check
  // that guards against a write-only parameter covers it too.
  var URL_PARAMS = ['c', 'v', 'speech', 'subs', 'mode', 'cam'];

  function urlState() {
    if (!current) return null;
    return {c: current.course.id, v: current.video.id, speech: S.lang.speech,
            subs: (S.lang.subtitles || []).join(','), mode: S.mode,
            cam: (S.cam && S.cam.on && camView) ? camView.encode() : ''};
  }

  function syncUrl() {
    var st = urlState();
    if (!st) return;                       // nothing open: the URL is not ours to rewrite
    var q = URL_PARAMS.map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(st[k]);
    }).join('&');
    // replaceState, never pushState: a selector change is not a place to go Back to, and four of them
    // would otherwise bury the page the person actually arrived from.
    history.replaceState(null, '', '?' + q);
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
    // Falling back to the first available track is right when a person's chosen LANGUAGE is missing
    // here - it is wrong when they chose None on purpose. Those two arrive at this line identically
    // (an empty list), so without subsNone a deliberate "no subtitles" was silently overruled, and a
    // link carrying subs= opened with English. Same defect as the stale URL, one layer down: state the
    // page could not tell apart from a default.
    if (!S.lang.subtitles.length && subs.length && !S.lang.subsNone) S.lang.subtitles = [subs[0]];
    save(); syncAxes(); render(); describe();
    syncUrl();
    try { setScript(!!S.script); } catch (e) {}
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
    $('note').textContent = v.files + ' files · ' + sizeLabel(v, 'bytes', 'wireBytes') +
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
      // THE DENOMINATOR COUNTS EVERYTHING THE PAGE WAITS FOR, and the voice is one of those things.
      //
      // It used to count geometry only. The bar therefore reached 100%, the byte counter stopped, and
      // the page then downloaded and decoded the spoken lines - about 0.2 MB of work behind a bar that
      // said there was none left. The words underneath were honest ("Loading the voice..."); the bar
      // was not, and a full bar that is still working is the same kind of statement as a size label in
      // the wrong unit.
      // ONE predicate, shared with the prefetch below. Counting every line here while the prefetch
      // fetched only those starting inside its horizon would leave the bar permanently short of 100% -
      // a denominator and a numerator answering different questions, which is how the bar came to be
      // wrong in the first place.
      var voiceRels = (scene.speech || [])
        .filter(function (ln) { return (ln.start || 0) <= VOICE_AHEAD; })
        .map(function (ln) { return 'lines/' + ln.key + '.mp3'; })
        .filter(function (x, i, arr) { return arr.indexOf(x) === i; });
      totalFiles = rels.length + voiceRels.length;
      var weigh = function (r2) { return (manifest.files[r2] || {}).bytes || 0; };
      // Disk bytes on BOTH sides of the division - see the note on `got` above.
      total = rels.reduce(function (n, r2) { return n + weigh(r2); }, 0) +
              voiceRels.reduce(function (n, r2) { return n + weigh(r2); }, 0);
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
      // Each line reports itself as it lands, so the bar keeps moving through this phase instead of
      // sitting at a number that claimed the work was over.
      return speech ? speech.prefetch(0, VOICE_AHEAD, function (bytes) {
        doneFiles++;
        progressed(got + bytes, 'the voice');
      }).catch(function () { return null; }) : null;
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
      // The viewer's camera, if this person asked for one. A stored view for this lesson, this
      // room or this moment is applied here, in that precedence.
      try { camRestore(); camAttach(); camRender(); camAvail(); } catch (e) {}
      try { askApply(); } catch (e) {}
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
    try { markScript(t); } catch (e) {}
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
    else if (e.key === 's') setScript(!S.script);
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
  // Each of these four changes something the URL describes, so each of them ends by saying so. That is
  // the whole fix for the stale address bar: the writer is called wherever the state moves, not once
  // at the beginning.
  axspeech.onchange = function () {
    S.lang.speech = axspeech.value; save(); syncUrl();
    // In interactive mode a different spoken variant is a different audio index; in MP4 mode it is a
    // different FILE. One handler, because the selector means the same thing in both.
    if (current) applyMode();
  };
  axsub1.onchange = axsub2.onchange = function () {
    S.lang.subtitles = subtitleChoice();
    try { if (S.script) renderScript(); } catch (e) {}
    // Choosing None is a CHOICE and is remembered as one, so that opening the next lesson - or a link
    // to this one - does not helpfully put the subtitles back.
    S.lang.subsNone = S.lang.subtitles.length === 0;
    save(); syncUrl();
    var m = MODES.filter(function (x) { return x.id === S.mode; })[0] || MODES[0];
    if (m.format === 'mp4') {
      applyMode();               // the subtitles are IN the picture, so this selects another file
    } else if (part && part.overlay) {
      part.overlay.setShow(S.lang.subtitles); part.overlay.render(lastT);
      syncModes();               // ...and it changes which MP4 combinations are reachable
    }
  };
  axmode.onchange = function () {
    S.mode = axmode.value; save(); syncUrl(); applyMode();
    try { camAvail(); camRender(); } catch (e) {}
  };
  loadRetry.onclick = function () { if (current) applyMode(); };
  loadCancel.onclick = function () {
    cancelled = true;
    if (aborter) { try { aborter.abort(); } catch (e) {} }
    loadCancelled();
  };

  // ================================================================= the viewer's camera
  //
  // ONE STATE, SEVERAL VIEWS OF IT. The rail panel, the floating panel and the two tabs inside each all
  // render the same CameraView and send every edit to the same place. None of them owns the camera. That
  // is the rule that makes drive() the single interpreter and tools/wire.py the single wire model, and
  // the seam where two copies of one truth are allowed to exist is where this project keeps finding bugs.
  //
  // The authored camera is untouched: the view is applied inside ScenePlayer.seek(), strictly AFTER
  // drive(), and with no view the picture is identical to the MP4's by construction.
  var CAM_STOPS = [
    ['LR', 'Left / Right', 'across the screen, flattened to the floor'],
    ['IO', 'In / Out', 'into the screen, flattened to the floor'],
    ['LR&IO', 'Left/Right and In/Out', 'both floor directions in one stroke'],
    ['UD', 'Up / Down', 'true world-up, whatever the tilt'],
    ['Aim', 'Camera orientation', 'turn and tilt; orbit pins the subject']
  ];
  var CAM_MODES = [['director', 'Director'], ['ride', 'Ride along'], ['free', 'Free look']];
  // Tab 1's rows, in the SAME words as Tab 2's stops. Two vocabularies for one state is the same class
  // of defect as two panels showing different numbers.
  var CAM_ROWS = [
    ['WHERE IT IS', [['off0', 'Left / right', 'm', 0.1], ['off2', 'In / out', 'm', 0.1],
                     ['off1', 'Up / down', 'm', 0.1]]],
    ['WHAT IT LOOKS AT', [['yaw', 'Left / right', 'deg', 1], ['pitch', 'Up / down', 'deg', 1]]],
    ['LENS', [['zoom', 'Zoom', 'x', 0.05], ['roll', 'Roll', 'deg', 1]]]
  ];
  var camView = null, camPads = [];

  function camDefaults() {
    return {on: false, tab: 'pad', stop: 'LR&IO', behav: 'touchpad', mode: 'director',
            sens: {move: 4.0, turn: 90}, split: 300, scope: 'lesson', views: {}};
  }
  if (!S.cam) S.cam = camDefaults();
  if (!S.cam.views) S.cam.views = {};
  if (!S.cam.sens) S.cam.sens = {move: 4.0, turn: 90};

  function camSens() {
    // Stated in the unit a person cares about: one sweep across the circle = N metres, or N degrees when
    // aiming. The pad hands `drag` fractions of a diameter, so this IS the conversion.
    return {move: S.cam.sens.move, turn: S.cam.sens.turn * Math.PI / 180};
  }
  function authoredCam() {
    if (!part || !window.__scene || typeof window.__drive !== 'function') return null;
    try { return window.__drive(part.player.sc, lastT).camera; } catch (e) { return null; }
  }
  function camFov() { return (window.__scene && window.__scene.camera && window.__scene.camera.fov) || 38; }

  // ---- scope: which view applies here, and where a saved one is kept -----------------------------
  function shotIndexAt(t) {
    var sh = (window.__scene && window.__scene.shots) || [];
    var i = -1;
    for (var k = 0; k < sh.length; k++) { if (sh[k].at <= t + 1e-6) i = k; else break; }
    return i;
  }
  function camKeys() {
    if (!current) return {};
    var lesson = current.courseId + '/' + current.video.id;
    var room = (window.__scene && window.__scene.set && window.__scene.set.name) || '';
    return {shot: 'shot:' + lesson + '#' + shotIndexAt(lastT), lesson: 'lesson:' + lesson,
            room: room ? 'room:' + room : null};
  }
  function camStore() {
    // Precedence is shot > lesson > room > director, and it is applied in that order here rather than
    // being asserted somewhere and implemented differently.
    var k = camKeys(), v = S.cam.views;
    var key = (k.shot && v[k.shot]) ? k.shot :
              ((k.lesson && v[k.lesson]) ? k.lesson : ((k.room && v[k.room]) ? k.room : null));
    return key ? {key: key, enc: v[key]} : null;
  }
  function camRemember() {
    if (!camView || !current) return;
    var k = camKeys();
    var key = S.cam.scope === 'shot' ? k.shot : (S.cam.scope === 'room' ? k.room : k.lesson);
    if (!key) return;
    var enc = camView.encode();
    if (enc) S.cam.views[key] = enc; else delete S.cam.views[key];
    save();
  }

  // A LINK WINS over a stored view, because a link is something the person just acted on. Otherwise
  // the stored scopes apply in their precedence: this moment, then this lesson, then this room.
  var camArrived = null, camArrivedUsed = false;
  try { camArrived = new URLSearchParams(location.search).get('cam') || null; } catch (e) {}
  function camRestore() {
    if (typeof CameraView === 'undefined') return;
    var enc = camArrivedUsed ? null : camArrived;
    camArrivedUsed = true;
    var from = null;
    if (enc) from = CameraView.decode(enc);
    if (!from) { var st = camStore(); if (st) from = CameraView.decode(st.enc); }
    if (from) { camView = from; S.cam.mode = from.mode; S.cam.on = true; }
    else if (camView) { camView.reset(); S.cam.mode = 'director'; }
    var cb = $('camon'); if (cb) cb.checked = !!S.cam.on;
  }

  var camUndo = [], camRedo = [], CAM_UNDO_MAX = 30;
  function camPush() {
    if (!camView) return;
    var e = camView.encode();
    if (camUndo.length && camUndo[camUndo.length - 1] === e) return;
    camUndo.push(e);
    if (camUndo.length > CAM_UNDO_MAX) camUndo.shift();
    camRedo.length = 0;
  }
  function camUndoStep(stack, other) {
    if (!stack.length || !camView) return;
    other.push(camView.encode());
    var e = stack.pop();
    var v = e ? CameraView.decode(e) : new CameraView();
    camView = v || new CameraView();
    S.cam.mode = camView.mode;
    camApply(); camRender(); camRemember();
  }

  function camEnsure() {
    if (!camView && typeof CameraView !== 'undefined') camView = new CameraView();
    return camView;
  }
  function camAttach() {
    if (!part || !part.player || typeof part.player.setView !== 'function') return;
    part.player.setView(S.cam.on ? camEnsure() : null);
  }
  var camFields = [];
  function camApply() {
    camAttach();
    seek(lastT);                 // re-runs drive() at the same t and re-renders: no second loop
    camSync();                   // VALUES ONLY - never structure; see camSync
  }
  // camApply must NOT rebuild the DOM. Rebuilding during a drag detaches the very canvas being dragged:
  // its getBoundingClientRect() goes to zero, the pad divides pixel deltas by 1 instead of by the
  // diameter, and the camera flies a thousand times too far. Measured: a 0.3-sweep drag produced an
  // offset of 1190 m instead of 1.2 m. A structural change rebuilds; a value change syncs.
  //
  // It also keeps every surface honest: each field in BOTH panels is refreshed from the one state, so
  // the rail panel and the floating panel cannot show different numbers.
  function camSync() {
    camFields.forEach(function (f) {
      if (document.activeElement !== f.inp) f.inp.value = f.get().toFixed(f.dp);
    });
    camPads.forEach(function (cv) { if (cv.isConnected) padDraw(cv); });
    var live = camLiveText();
    Array.prototype.forEach.call(document.querySelectorAll('.padlive'), function (e) {
      e.textContent = live;
    });
    Array.prototype.forEach.call(document.querySelectorAll('.camsay'), camSayInto);
  }
  function camLiveText() {
    if (!camEnsure()) return '';
    return (S.cam.stop === 'Aim'
      ? ('turn ' + camNum('yaw').toFixed(0) + ' deg')
      : (S.cam.stop + ' ' + camNum(S.cam.stop === 'UD' ? 'off1'
          : (S.cam.stop === 'IO' ? 'off2' : 'off0')).toFixed(2) + ' m')) + '   (live axis only)';
  }

  // ---- the pad ---------------------------------------------------------------------------------
  function padDraw(cv) {
    var g = cv.getContext('2d');
    var w = cv.width, h = cv.height, R = Math.min(w, h) / 2 - 2, cx = w / 2, cy = h / 2;
    g.clearRect(0, 0, w, h);
    g.fillStyle = '#10151B'; g.beginPath(); g.arc(cx, cy, R, 0, 6.2832); g.fill();
    var stop = S.cam.stop, floor = (stop !== 'UD' && stop !== 'Aim');
    if (floor) {
      // A FAINT FLOOR GRID means floor movement. Its ABSENCE means the lift. That is what tells IO from
      // UD - both are vertical drags - and it replaced a trapezoid that meant "depth", which would now
      // mislead because UD is height.
      g.strokeStyle = '#1B2530'; g.lineWidth = 1;
      for (var o = -R; o <= R; o += Math.max(12, R / 6)) {
        var hh = Math.sqrt(Math.max(0, R * R - o * o));
        if (hh < 6) continue;
        g.beginPath(); g.moveTo(cx - hh, cy + o); g.lineTo(cx + hh, cy + o); g.stroke();
        g.beginPath(); g.moveTo(cx + o, cy - hh); g.lineTo(cx + o, cy + hh); g.stroke();
      }
    }
    g.strokeStyle = '#4A5F74'; g.lineWidth = 1.4;
    if (stop === 'LR') { g.strokeRect(cx - R + 10, cy - R * 0.3, (R - 10) * 2, R * 0.6); }
    else if (stop === 'IO') { g.strokeRect(cx - R * 0.3, cy - R + 10, R * 0.6, (R - 10) * 2); }
    else if (stop === 'UD') {
      g.beginPath(); g.moveTo(cx, cy - R + 16); g.lineTo(cx, cy + R - 16); g.stroke();
      [-1, 1].forEach(function (s) {
        g.beginPath(); g.moveTo(cx, cy + s * (R - 12));
        g.lineTo(cx - 7, cy + s * (R - 26)); g.lineTo(cx + 7, cy + s * (R - 26)); g.closePath();
        g.fillStyle = '#4A5F74'; g.fill();
      });
    } else {
      g.beginPath(); g.moveTo(cx - R + 14, cy); g.lineTo(cx + R - 14, cy); g.stroke();
      g.beginPath(); g.moveTo(cx, cy - R + 14); g.lineTo(cx, cy + R - 14); g.stroke();
      if (stop === 'Aim') {
        g.beginPath(); g.arc(cx, cy + R * 0.2, R * 0.7, 3.34, 6.08); g.stroke();
        if (S.cam.orbit) {
          g.fillStyle = '#E8B418'; g.beginPath(); g.arc(cx, cy, 5, 0, 6.2832); g.fill();
        }
      }
    }
    if (S.cam.behav === 'joystick') {
      g.strokeStyle = '#E8B418'; g.lineWidth = 1;
      g.beginPath(); g.arc(cx, cy, R - 6, 0, 6.2832); g.stroke();
      g.strokeStyle = '#2A323C'; g.beginPath(); g.arc(cx, cy, R * 0.16, 0, 6.2832); g.stroke();
    }
  }

  function padBind(cv) {
    var held = false, held0 = false, lastX = 0, lastY = 0, jx = 0, jy = 0,
        timer = null, id = null, needRebuild = false;
    function diam() { return cv.getBoundingClientRect().width || 1; }
    function pos(e) {
      var r = cv.getBoundingClientRect();
      return [e.clientX - r.left - r.width / 2, e.clientY - r.top - r.height / 2];
    }
    function step(dx, dy) {
      var cam = authoredCam();
      if (!cam || !camEnsure()) return;
      if (!held0) { camPush(); held0 = true; }
      if (camView.mode === 'director') { camSetMode('ride'); needRebuild = true; }
      camView.drag(S.cam.stop, dx, dy, camSens(), cam, camFov(), !!S.cam.orbit);
      camApply();
    }
    cv.addEventListener('pointerdown', function (e) {
      held = true; id = e.pointerId; cv.setPointerCapture(id);
      var p = pos(e); lastX = p[0]; lastY = p[1]; jx = p[0]; jy = p[1];
      // Fix the drag axis now, so a straight stroke stays straight instead of curving round the subject.
      var c0 = authoredCam();
      if (c0 && camEnsure()) camView.beginStroke(c0, camFov());
      if (S.cam.behav === 'joystick' && !timer) {
        // JOYSTICK: distance from centre is SPEED, and it keeps moving while held. A dead zone at the
        // centre stops a shaky hand drifting.
        timer = setInterval(function () {
          var d = diam() / 2, r = Math.sqrt(jx * jx + jy * jy) / d;
          if (r < 0.16) return;
          step((jx / d) * 0.035, (jy / d) * 0.035);
        }, 33);
      }
      e.preventDefault();
    });
    cv.addEventListener('pointermove', function (e) {
      if (!held) return;
      var p = pos(e);
      if (S.cam.behav === 'joystick') { jx = p[0]; jy = p[1]; }
      else {
        // TOUCHPAD (the default): the camera moves by the distance travelled WHILE THE BUTTON IS HELD.
        // Release and it stays exactly where it is; move the mouse back with the button up and press
        // again to carry on - the clutch, which is what lets a small circle cross a large room.
        step((p[0] - lastX) / diam(), (p[1] - lastY) / diam());
        lastX = p[0]; lastY = p[1];
      }
      e.preventDefault();
    });
    function up() {
      held = false; held0 = false;
      if (camView) camView.endStroke();
      if (timer) { clearInterval(timer); timer = null; }
      camRemember();
      syncUrl();          // the link carries the view a person just made
      // NO REBUILD MID-STROKE: the first touch switches director -> ride, and rebuilding there
      // detaches the canvas under the finger. Deferred to here.
      if (needRebuild) { needRebuild = false; camRender(); }
    }
    cv.addEventListener('pointerup', up);
    cv.addEventListener('pointercancel', up);
    cv.addEventListener('lostpointercapture', up);
    cv.tabIndex = 0;
    cv.addEventListener('keydown', function (e) {
      var k = {ArrowLeft: [-0.08, 0], ArrowRight: [0.08, 0], ArrowUp: [0, -0.08],
               ArrowDown: [0, 0.08]}[e.key];
      if (!k) return;
      step(k[0], k[1]); camRemember(); e.preventDefault();
    });
  }

  // ---- rendering both surfaces from the one state -----------------------------------------------
  function el(tag, cls, txt) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (txt != null) e.textContent = txt;
    return e;
  }
  function camSetMode(m) {
    var cam = authoredCam();
    if (camEnsure() && cam) camView.setMode(m, cam);
    S.cam.mode = m; save();
  }
  function camNum(field) {
    if (!camEnsure()) return 0;
    if (field === 'off0') return camView.off[0];
    if (field === 'off1') return camView.off[1];
    if (field === 'off2') return camView.off[2];
    if (field === 'yaw') return camView.yaw * 180 / Math.PI;
    if (field === 'pitch') return camView.pitch * 180 / Math.PI;
    if (field === 'zoom') return camView.zoom;
    return camView.roll;
  }
  function camSet(field, v) {
    if (!camEnsure()) return;
    camPush();
    if (camView.mode === 'director') camSetMode('ride');
    if (field === 'off0') camView.off[0] = v;
    else if (field === 'off1') camView.off[1] = v;
    else if (field === 'off2') camView.off[2] = v;
    else if (field === 'yaw') camView.yaw = v * Math.PI / 180;
    else if (field === 'pitch') camView.pitch = Math.max(-83, Math.min(83, v)) * Math.PI / 180;
    else if (field === 'zoom') camView.zoom = Math.max(0.4, Math.min(3, v));
    else camView.roll = Math.max(-30, Math.min(30, v));
    camApply(); camRemember(); syncUrl();
  }

  function buildCamPanel(host, idPrefix) {
    host.innerHTML = '';
    var head = el('div', 'camhead');
    head.appendChild(el('b', null, 'Camera'));
    var rst = el('button', null, 'Reset');
    rst.onclick = function () {
      if (!camEnsure()) return;
      camPush();
      camView.reset(); S.cam.mode = 'director';
      camApply(); camRender(); camRemember();
    };
    head.appendChild(rst);
    host.appendChild(head);

    var seg = el('div', 'seg');
    CAM_MODES.forEach(function (m) {
      var b = el('button', null, m[1]);
      b.setAttribute('aria-pressed', (camEnsure() && camView.mode === m[0]) ? 'true' : 'false');
      b.onclick = function () { camSetMode(m[0]); camApply(); camRender(); camRemember(); };
      seg.appendChild(b);
    });
    host.appendChild(seg);
    host.appendChild(el('div', 'padnote', 'the camera you are driving - shared by both tabs'));

    var tabs = el('div', 'camtabs');
    [['numbers', 'Numbers'], ['pad', 'Pad']].forEach(function (t) {
      var b = el('button', null, t[1]);
      b.setAttribute('aria-selected', S.cam.tab === t[0] ? 'true' : 'false');
      b.onclick = function () { S.cam.tab = t[0]; save(); camRender(); };
      tabs.appendChild(b);
    });
    host.appendChild(tabs);

    if (S.cam.tab === 'pad') {
      var stops = el('div', 'stops');
      CAM_STOPS.forEach(function (st) {
        var b = el('button', null, st[0]);
        b.title = st[1];
        b.setAttribute('aria-pressed', S.cam.stop === st[0] ? 'true' : 'false');
        b.setAttribute('aria-label', st[1]);
        b.onclick = function () { S.cam.stop = st[0]; save(); camRender(); };
        stops.appendChild(b);
      });
      host.appendChild(stops);
      // THE CAPTION, always visible. LR and UD read instantly; IO does not - and a tooltip does not
      // exist on touch and is not reliably announced to a screen reader.
      var cur = CAM_STOPS.filter(function (x) { return x[0] === S.cam.stop; })[0] || CAM_STOPS[0];
      host.appendChild(el('div', 'padcap', cur[1]));
      host.appendChild(el('div', 'padnote', cur[2]));

      var behav = el('div', 'behav');
      if (S.cam.stop === 'Aim') {
        [['place', 'in place'], ['orbit', 'orbit']].forEach(function (o) {
          var b = el('button', null, o[1]);
          b.setAttribute('aria-pressed', ((o[0] === 'orbit') === !!S.cam.orbit) ? 'true' : 'false');
          b.onclick = function () { S.cam.orbit = (o[0] === 'orbit'); save(); camRender(); };
          behav.appendChild(b);
        });
      }
      [['touchpad', 'touchpad'], ['joystick', 'joystick']].forEach(function (o) {
        var b = el('button', null, o[1]);
        b.setAttribute('aria-pressed', S.cam.behav === o[0] ? 'true' : 'false');
        b.onclick = function () { S.cam.behav = o[0]; save(); camRender(); };
        behav.appendChild(b);
      });
      host.appendChild(behav);

      var wrap = el('div', 'padwrap');
      var cv = document.createElement('canvas');
      cv.id = idPrefix + 'pad';
      cv.width = 240; cv.height = 240;
      cv.setAttribute('role', 'application');
      cv.setAttribute('aria-label', 'Camera pad: ' + cur[1]);
      wrap.appendChild(cv);
      host.appendChild(wrap);
      padDraw(cv); padBind(cv); camPads.push(cv);

      host.appendChild(el('div', 'padnote padlive', camLiveText()));

      [['Zoom', 'zoom', 'x', 0.05], ['Roll', 'roll', 'deg', 1],
       ['Sensitivity', 'sens', S.cam.stop === 'Aim' ? 'deg/sweep' : 'm/sweep', 0.5]]
        .forEach(function (r) { host.appendChild(camRowEl(r[0], r[1], r[2], r[3])); });
      host.appendChild(el('div', 'padnote',
        S.cam.stop === 'Aim'
          ? ('one sweep across the circle = ' + S.cam.sens.turn.toFixed(0) + ' deg')
          : ('one sweep across the circle = ' + S.cam.sens.move.toFixed(1) + ' m')));
    } else {
      CAM_ROWS.forEach(function (grp) {
        var lbl = grp[0];
        if (lbl === 'WHERE IT IS' && camEnsure() && camView.mode === 'ride') lbl += '  (offset)';
        host.appendChild(el('div', 'camsect', lbl));
        grp[1].forEach(function (r) { host.appendChild(camRowEl(r[1], r[0], r[2], r[3])); });
      });
    }

    var foot = el('div', 'camfoot');
    foot.appendChild(el('span', 'padnote', 'Remember for'));
    var sel = document.createElement('select');
    [['shot', 'This moment'], ['lesson', 'This lesson'], ['room', 'This room']].forEach(function (o) {
      var op = document.createElement('option');
      op.value = o[0]; op.textContent = o[1];
      if (S.cam.scope === o[0]) op.selected = true;
      sel.appendChild(op);
    });
    sel.onchange = function () { S.cam.scope = sel.value; save(); camRemember(); };
    foot.appendChild(sel);
    var un = el('button', null, 'Undo');
    un.onclick = function () { camUndoStep(camUndo, camRedo); };
    un.disabled = !camUndo.length;
    un.setAttribute('aria-label', 'Undo the last camera change');
    foot.appendChild(un);
    var re = el('button', null, 'Redo');
    re.onclick = function () { camUndoStep(camRedo, camUndo); };
    re.disabled = !camRedo.length;
    foot.appendChild(re);
    var cp = el('button', null, 'Copy link');
    cp.onclick = function () {
      syncUrl();
      try { navigator.clipboard.writeText(location.href); } catch (e) { /* no clipboard: the URL is there */ }
      cp.textContent = 'Copied'; setTimeout(function () { cp.textContent = 'Copy link'; }, 1200);
    };
    foot.appendChild(cp);
    host.appendChild(foot);

    var say = el('div', 'camsay', '');
    say.id = idPrefix + 'say';
    say.style.fontSize = '11.5px'; say.style.marginTop = '6px';
    camSayInto(say);
    host.appendChild(say);
  }

  // Whether this is still the director's view, written into an existing node so it can be refreshed
  // without rebuilding the panel - see camSync.
  function camSayInto(say) {
    say.innerHTML = '';
    if (camEnsure() && !camView.isDirector()) {
      say.appendChild(document.createTextNode('This is your view, not the director\'s.'));
      say.style.color = 'var(--accent)';
      var back = el('button', null, 'Back to the director');
      back.style.cssText = 'background:none;border:0;color:var(--accent);cursor:pointer;' +
                           'text-decoration:underline;font:inherit;padding:0 0 0 4px';
      back.onclick = function () {
        camPush(); camView.reset(); S.cam.mode = 'director'; camApply(); camRender(); camRemember();
      };
      say.appendChild(back);
    } else {
      say.textContent = 'The director\'s view - identical to the video.';
      say.style.color = 'var(--muted)';
    }
  }

  function camRowEl(label, field, unit, step) {
    var row = el('div', 'camrow');
    row.appendChild(el('label', null, label));
    var get = function () { return field === 'sens'
      ? (S.cam.stop === 'Aim' ? S.cam.sens.turn : S.cam.sens.move) : camNum(field); };
    var put = function (v) {
      if (field === 'sens') {
        if (S.cam.stop === 'Aim') S.cam.sens.turn = Math.max(5, Math.min(360, v));
        else S.cam.sens.move = Math.max(0.25, Math.min(20, v));
        save(); camRender();
      } else camSet(field, v);
    };
    var ro = (field !== 'sens') && camEnsure() && camView.mode === 'director';
    var minus = el('button', null, '−');
    var inp = document.createElement('input');
    var plus = el('button', null, '+');
    inp.type = 'text';
    inp.value = get().toFixed(step < 1 ? 2 : 0);
    inp.readOnly = !!ro;
    inp.setAttribute('aria-label', label + (unit ? ' in ' + unit : ''));
    minus.onclick = function () { put(get() - step); };
    plus.onclick = function () { put(get() + step); };
    minus.setAttribute('aria-label', 'decrease ' + label);
    plus.setAttribute('aria-label', 'increase ' + label);
    inp.onchange = function () {
      var v = parseFloat(inp.value);
      // A non-numeric entry is REJECTED without moving the camera, and an empty field restores what was
      // there rather than zeroing it.
      if (!isFinite(v)) { inp.value = get().toFixed(step < 1 ? 2 : 0); return; }
      put(v);
    };
    inp.onkeydown = function (e) {
      if (e.key === 'ArrowUp') { put(get() + step); e.preventDefault(); }
      else if (e.key === 'ArrowDown') { put(get() - step); e.preventDefault(); }
    };
    camFields.push({inp: inp, get: get, dp: step < 1 ? 2 : 0});
    row.appendChild(minus); row.appendChild(inp); row.appendChild(plus);
    row.appendChild(el('span', 'u', unit));
    return row;
  }

  function camRender() {
    camPads = []; camFields = [];
    var railHost = $('railcam'), floatHost = $('campanel');
    var on = !!S.cam.on && !!current;
    var interactive = !vid.classList.contains('on');
    $('browse').classList.toggle('hascam', on && interactive);
    if (on && interactive) buildCamPanel(railHost, 'rail'); else railHost.innerHTML = '';
    if (on && interactive && S.cam.floating) {
      floatHost.hidden = false; floatHost.classList.add('on');
      buildCamPanel(floatHost, 'float');
    } else {
      floatHost.hidden = true; floatHost.classList.remove('on'); floatHost.innerHTML = '';
    }
    document.documentElement.style.setProperty('--camh', (S.cam.split || 300) + 'px');
  }


  // ================================================================= the Ask pane (v27.38)
  //
  // The pane itself lives in player/ask_pane.js. This is only the WIRING: the checkbox, and the context
  // object that hands it MEASURED facts. Everything the model is ever told passes through here, so there
  // is exactly one place to look to see what a question can possibly carry.
  //
  // The index travels inside the bundle (scene.set.objects), so it is fetched from the lesson's own
  // folder exactly like scene.json - no second source of truth and nothing to keep in step by hand.
  var askPane = null, askIndex = null, askScene = null, askIndexFor = null;

  function askLoadIndex() {
    if (!current) return;
    var key = current.courseId + '/' + current.video.id;
    if (askIndexFor === key) return;
    askIndexFor = key; askIndex = null; askScene = null;
    // THE DECLARED PATH IS NOT THE URL. scene.set.objects says 'assets/<set>.objects.json', which is
    // what the BUNDLE contains; the published site serves every file at its content address and maps
    // the two in manifest.json. Fetching the declared path directly works perfectly from a bundle
    // folder on Live Server and is a 404 on the live site - which is precisely the defect class the
    // surface-honesty work exists to catch, so it is resolved here the way every other asset is.
    var base = current.video.dir + '/';
    Promise.all([
      fetch(base + 'manifest.json', {cache: 'no-store'}).then(function (r) { return r.json(); }),
      fetch(base + 'scene.json').then(function (r) { return r.json(); })
    ]).then(function (both) {
      if (askIndexFor !== key) return null;
      var man = both[0], sc = both[1];
      // THE SCENE IS KEPT, not just mined for the index. The transcript is built from it here, so
      // 'Ask about the video' no longer depends on the SCRIPT PANE having been opened - which is how
      // it came to be sending an empty script to anyone who had not opened that pane first.
      askScene = sc;
      var rel = sc && sc.set && sc.set.objects;
      // A lesson whose bundle predates the index simply has none. Say so; do not invent one.
      if (!rel) return null;
      var r = (man.files || {})[rel];
      // A content address is relative to the SITE ROOT ('lib/<sha>.json'), which is why the page's own
      // Fetcher is constructed with base:''. Only the un-published fallback - a bundle folder served
      // directly - is relative to the lesson.
      var url = (r && r.address) ? r.address : (base + rel);
      return fetch(url).then(function (x) {
        if (!x.ok) throw new Error('index -> HTTP ' + x.status);
        return x.json();
      }).then(function (ix) { if (askIndexFor === key) askIndex = ix; });
    }).catch(function () { if (askIndexFor === key) askIndex = null; });
  }

  function askContext() {
    return {
      scene: function () { return window.__scene || null; },
      index: function () { return askIndex; },
      time: function () { return lastT; },
      // The camera the DIRECTOR chose at this instant, from the same interpreter the renderer uses -
      // never a copy, and never the viewer's own overridden view, because a question about "this shot"
      // is a question about the lesson, not about where this particular viewer has dragged the camera.
      cameraAt: function () { return authoredCam(); },
      // Built from the lesson's OWN scene, never from another pane's state.
      transcript: function () {
        try {
          return (askScene && window.Transcript) ? window.Transcript.transcriptText(askScene) : '';
        } catch (e) { return ''; }
      },
      rosterText: function () {
        try {
          return (askScene && window.Transcript) ? window.Transcript.rosterText(askScene) : '';
        } catch (e) { return ''; }
      }
    };
  }

  function askApply() {
    var app = $('app');
    app.classList.toggle('hasask', !!S.ask);
    if (S.ask && !askPane && window.AskPane) {
      askPane = new window.AskPane($('ask'), askContext());
      // The REAL instance, not a test double and not a second one built for the gate. A harness that
      // constructs its own object proves only that the object works; it never exercises the path the
      // person actually takes, which is how a capability can vanish while every check still passes.
      window.__askPaneRef = askPane;
    }
    if (S.ask) askLoadIndex();
  }

  var askon = $('askon');
  if (askon) {
    askon.checked = !!S.ask;
    askon.onchange = function () {
      S.ask = askon.checked;
      save(); askApply();
    };
  }

  // ---- the checkbox, the splitter -----------------------------------------------------------------
  var camon = $('camon'), camonlab = $('camonlab');
  camon.checked = !!S.cam.on;
  camon.onchange = function () {
    S.cam.on = camon.checked;
    // Unchecking HIDES the panel and KEEPS the view: turning a control panel off should not move the
    // camera. Re-checking brings back what you had.
    save(); camApply(); camRender();
  };
  function camAvail() {
    var mp4 = vid.classList.contains('on');
    camonlab.setAttribute('aria-disabled', mp4 ? 'true' : 'false');
    camon.disabled = mp4;
    camonlab.title = mp4 ? 'A finished video has no camera - choose an Interactive mode' : '';
  }

  (function () {
    var sp = $('railsplit'), dragging = false;
    function setSplit(px) {
      S.cam.split = Math.max(160, Math.min(window.innerHeight - 260, px));
      document.documentElement.style.setProperty('--camh', S.cam.split + 'px');
      save();
    }
    sp.addEventListener('pointerdown', function (e) {
      dragging = true; sp.setPointerCapture(e.pointerId); e.preventDefault();
    });
    sp.addEventListener('pointermove', function (e) {
      if (!dragging) return;
      var r = $('browse').getBoundingClientRect();
      setSplit(r.bottom - e.clientY);
    });
    sp.addEventListener('pointerup', function () { dragging = false; });
    sp.addEventListener('dblclick', function () { setSplit(300); });
    sp.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowUp') { setSplit((S.cam.split || 300) + 16); e.preventDefault(); }
      else if (e.key === 'ArrowDown') { setSplit((S.cam.split || 300) - 16); e.preventDefault(); }
    });
  })();

  // ================================================================= the script
  //
  // TRACK A STANDS ALONE, and this is the proof: the lesson's dialogue with speaker names, timings and
  // both languages, rendered from data the scene already holds. No model, no Ollama, nothing to install.
  //
  // It is also MODE-INDEPENDENT. The interactive load path fetches scene.json anyway, but the MP4 modes
  // do not - so the script fetches the lesson's own scene file itself. A student watching the video
  // gets the script too, which is the point.
  //
  // DETERMINISTIC BY CONSTRUCTION: the lines come out in time order, each rendered by one formatter, so
  // the same lesson always produces the same text. The language shown is the SUBTITLE choice already on
  // the page - one setting, not a second one to keep in step.
  var scriptLines = null, scriptFor = null, scriptNow = -1;

  function mmssShort(t) {
    var m = Math.floor(t / 60), s = Math.floor(t % 60);
    return m + ':' + (s < 10 ? '0' : '') + s;
  }
  // A presentable name, not a raw id. 'maher' is data; 'Maher' is what a person reads.
  function speakerName(id) {
    return String(id || '').split(/[_\s-]+/).filter(Boolean)
      .map(function (w) { return w.charAt(0).toUpperCase() + w.slice(1); }).join(' ');
  }
  // 'en-GB-RyanNeural' -> 'en-GB'. The accent is already on every line; showing it costs nothing and
  // tells a learner which English they are hearing.
  function accentOf(voice) {
    var p = String(voice || '').split('-');
    return p.length >= 2 ? p[0] + '-' + p[1] : '';
  }

  function scriptLangs() {
    // The subtitle selectors are the language choice. If a student has turned subtitles off entirely we
    // still have to show something, so fall back to the lesson's first available language.
    var want = (S.lang.subtitles || []).slice();
    if (!want.length && current && current.video) want = (current.video.subtitles || ['en']).slice(0, 1);
    return want;
  }

  function renderScript() {
    var host = $('scriptbody');
    host.innerHTML = '';
    if (!scriptLines) {
      host.appendChild(el('div', 'padnote', 'Loading the script…'));
      return;
    }
    if (!scriptLines.length) {
      host.appendChild(el('div', 'padnote', 'This lesson has no dialogue.'));
      return;
    }
    var langs = scriptLangs();
    scriptLines.forEach(function (ln, i) {
      var row = el('div', 'sline');
      row.setAttribute('role', 'button');
      row.tabIndex = 0;
      row.appendChild(el('div', 't', mmssShort(ln.start)));
      var who = el('div', 'who', speakerName(ln.actor));
      var acc = accentOf(ln.voice);
      if (acc) who.appendChild(el('i', null, acc));
      row.appendChild(who);
      var say = el('div', 'say');
      langs.forEach(function (lg, k) {
        var t = (ln.text || {})[lg];
        if (!t) return;
        var e = el('span', k ? 'alt' : null, t);
        e.setAttribute('dir', 'auto');            // Arabic reads right-to-left; let the browser decide
        say.appendChild(e);
      });
      row.appendChild(say);
      var go = function () {
        pause();
        seek(ln.start + 0.01);
        scrub.value = dur ? Math.round((ln.start / dur) * 1000) : 0;
        markScript(ln.start);
      };
      row.onclick = go;
      row.onkeydown = function (e2) {
        if (e2.key === 'Enter' || e2.key === ' ') { go(); e2.preventDefault(); }
      };
      host.appendChild(row);
    });
    $('scriptnote').textContent = '  ' + scriptLines.length + ' lines · from the lesson itself, '
      + 'no assistant involved';
    $('scriptnote').style.cssText = 'font-weight:400;font-size:11.5px;color:var(--muted)';
    markScript(lastT);
  }

  // The line under the playhead. Marked, never auto-scrolled away from a person's reading position
  // unless it has actually left the box.
  function markScript(t) {
    if (!scriptLines || !scriptLines.length) return;
    var idx = -1;
    for (var i = 0; i < scriptLines.length; i++) {
      if (scriptLines[i].start <= t + 1e-6) idx = i; else break;
    }
    if (idx === scriptNow) return;
    scriptNow = idx;
    var rows = $('scriptbody').children;
    for (var k = 0; k < rows.length; k++) rows[k].classList.toggle('now', k === idx);
    if (idx >= 0 && rows[idx]) {
      var box = $('scriptbody'), r = rows[idx];
      if (r.offsetTop < box.scrollTop || r.offsetTop + r.offsetHeight > box.scrollTop + box.clientHeight) {
        box.scrollTop = r.offsetTop - box.clientHeight / 3;
      }
    }
  }

  function loadScript() {
    if (!current) return;
    var key = current.courseId + '/' + current.video.id;
    if (scriptFor === key) { renderScript(); return; }
    scriptFor = key; scriptLines = null; scriptNow = -1;
    renderScript();
    // Its OWN fetches, so the script does not depend on the interactive player having loaded.
    //
    // TWO files, because the published bundle SPLITS them: scene.json holds what is SHOWN (actor,
    // start, text) and audio/<variant>.json holds what is HEARD (voice, duration). The accent therefore
    // follows the SPOKEN variant, which is right - an Arabic-spoken version of a lesson would carry
    // Arabic voices and the script should say so.
    var lang = S.lang.speech || 'en';
    Promise.all([
      fetch(current.video.dir + '/scene.json').then(function (r) { return r.json(); }),
      fetch(current.video.dir + '/audio/' + lang + '.json')
        .then(function (r) { return r.ok ? r.json() : null; })
        .catch(function () { return null; })
    ]).then(function (both) {
        var sc = both[0], au = both[1];
        if (scriptFor !== key) return;                      // the person moved on
        var voices = (au && au.lines) || {};
        scriptLines = (sc.speech || []).slice().sort(function (a, b) { return a.start - b.start; })
          .map(function (l) {
            var v = voices[l.id] || {};
            return {start: l.start, actor: l.actor, voice: v.voice || l.voice || '',
                    text: l.text || {}};
          });
        renderScript();
      })
      .catch(function (e) {
        if (scriptFor !== key) return;
        $('scriptbody').innerHTML = '';
        $('scriptbody').appendChild(el('div', 'padnote',
          'The script could not be loaded: ' + String((e && e.message) || e)));
      });
  }

  function scriptText() {
    var langs = scriptLangs();
    return (scriptLines || []).map(function (ln) {
      var t = langs.map(function (lg) { return (ln.text || {})[lg]; }).filter(Boolean).join('\n        ');
      return mmssShort(ln.start) + '  ' + speakerName(ln.actor) + ': ' + t;
    }).join('\n');
  }

  function setScript(on) {
    S.script = !!on; save();
    $('script').classList.toggle('on', S.script);
    $('bscript').setAttribute('aria-pressed', S.script ? 'true' : 'false');
    if (S.script) loadScript();
  }
  $('bscript').onclick = function () { setScript(!S.script); };
  $('scriptcopy').onclick = function () {
    try { navigator.clipboard.writeText(scriptText()); } catch (e) { /* no clipboard */ }
    $('scriptcopy').textContent = 'Copied';
    setTimeout(function () { $('scriptcopy').textContent = 'Copy'; }, 1200);
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
      if (q.get('subs') != null) {
        S.lang.subtitles = q.get('subs') ? q.get('subs').split(',') : [];
        // PRESENT-BUT-EMPTY is a statement ("no subtitles"), ABSENT is silence. The link has to be
        // able to say the first one, or a sender who turned subtitles off cannot share that.
        S.lang.subsNone = S.lang.subtitles.length === 0;
      }
      // The URL WINS over stored state when both speak, because a link is something a person just
      // acted on and storage is something they did days ago. An unknown mode is ignored here rather
      // than guessed at; a mode this lesson cannot offer falls through to the fallback syncModes
      // already performs, so that rule has one implementation and not two.
      if (q.get('mode') && MODES.some(function (m) { return m.id === q.get('mode'); })) {
        S.mode = q.get('mode');
      }
      if (q.get('cam')) S.cam.on = true;     // read here; camRestore() decodes it at mount
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
