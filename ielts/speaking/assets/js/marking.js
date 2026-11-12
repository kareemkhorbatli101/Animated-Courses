/* THE MARKING PAGE — an examiner's report you can read, or have read to you.
 *
 * "The marking write-ups become text that can also be played as audio with svg animation" — the
 * owner's own sentence, and the order of it is the design. The report is TEXT first: a reader goes
 * back over a reason, re-reads a quotation, compares two criteria. Nobody scrubs an audio track to
 * do that. So the whole write-up is on the page, always, and the narration is an alternative way
 * to take it in rather than the only way.
 *
 * WHAT THE STAGE DOES HERE. It holds the two-shot — the examiner and the candidate still at the
 * table, as at the end of a test — and does not cut. There is nobody to cut to: the report is one
 * voice, the examiner's, about a performance that has finished. Cutting to a single on a candidate
 * who is not speaking would be the fault this course spent a day removing from its videos.
 *
 * THE EVIDENCE IS NOT NARRATED, and that is deliberate. It is a list of fragments quoted out of the
 * transcript, and a voice reading a quotation out of context is harder to follow than the same
 * words sitting on the page beside the band they support. The learner has already heard every one
 * of them in the test itself.
 */
(function (w) {
  'use strict';
  var IELTS = w.IELTS = w.IELTS || {};
  var DATA = null;

  IELTS.marking = function (d) { DATA = d; };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* A band is a number with a half in it, and it should look like one. 7 is not a band; 7.0 is. */
  function band(n) { return Number(n).toFixed(1); }

  IELTS.markingPage = function (host, o) {
    if (!DATA) throw new Error('marking: no data loaded');
    var M = DATA;
    o = o || {};
    var crit = M.criteria.map(function (c) {
      return '<article class="crit" data-crit="' + esc(c.key) + '">' +
        '<p class="qnum">' + esc(c.label) + '</p>' +
        '<p class="bandnum">' + band(c.band) + '</p>' +
        '<ul class="cue">' + c.evidence.map(function (e) {
          return '<li>' + esc(e) + '</li>'; }).join('') + '</ul>' +
        '<p class="critcomment">' + esc(c.comment) + '</p>' +
        '</article>';
    }).join('');

    host.innerHTML =
      '<header class="lesson-head">' +
      '<p class="eyebrow">IELTS Speaking · Test ' + M.test + ' · the marking</p>' +
      '<h1>' + esc(M.headline) + '</h1>' +
      '<p class="overall">Overall <b>' + band(M.overall) + '</b></p>' +
      '</header>' +
      '<section class="theatre"><div class="stagehost"></div>' +
      '<div class="tphost"></div></section>' +
      '<section class="marks"><h2>The four criteria</h2><div class="crits">' + crit + '</div>' +
      '</section>' +
      '<section class="liftbox"><h2>The one change</h2><p>' + esc(M.lift) + '</p></section>' +
      '<p class="small disclaimer">This is how a trained examiner would mark this performance, and ' +
      'it is written to be argued with. The bands are the book’s own judgement, not a score ' +
      'from a machine. Where you disagree, look at the evidence under the band and decide which of ' +
      'you is reading the transcript more carefully.</p>';

    var stage = IELTS.stage(host.querySelector('.stagehost'),
                            { candidate: M.candidate, page: o.page || null });

    /* The narration follows the page: as a block is spoken, its section is marked, so a reader
       listening with the text in front of them knows which paragraph the voice is in. */
    function mark(id) {
      host.querySelectorAll('.crit, .liftbox, .lesson-head').forEach(function (n) {
        n.classList.remove('active');
      });
      if (!id) return;
      var sel = id === 'headline' ? '.lesson-head'
        : id === 'lift' ? '.liftbox' : '.crit[data-crit="' + id + '"]';
      var n = host.querySelector(sel);
      if (n) { n.classList.add('active'); n.scrollIntoView({ block: 'nearest', behavior: 'smooth' }); }
    }

    /* THE SAME TRANSPORT AS THE LESSON PAGES, and the marking page is the one that most needs the
       speed control: it is a single voice reading a judgement, and 0.75× is how a learner at band 6
       gets through a paragraph about their own grammatical range. The step-through is the
       transport's, so the section highlight hangs off stage.onLine rather than a private loop. */
    var baseOnLine = stage.onLine;
    stage.onLine = function (i) {
      baseOnLine(i);
      mark(M.script[i] && M.script[i].id);
    };
    var baseSubs = stage.applySubPrefs;
    stage.applySubPrefs = function () {
      baseSubs();
      host.classList.toggle('no-ar', !(IELTS.prefs && IELTS.prefs.subAr));
    };
    var tp = IELTS.transport(host.querySelector('.tphost'), stage, M.script, { root: host });
    return { stage: stage, data: M, transport: tp };
  };
}(window));
