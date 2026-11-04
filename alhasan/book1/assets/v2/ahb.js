/* AHB - the namespace every Al-Hasan unit registers onto.

   WHY THIS FILE EXISTS. The first version of this site put its content in `window.UNIT5_DATA` and read it
   from a renderer that also said UNIT5 in nine other places: the progress key, the download filename, the
   unit title, the can-do list. A second unit could not use that renderer at all - it could only be copied
   and edited, which is how two units stop agreeing about how an answer is checked.

   So content registers itself here, keyed by unit number, and the renderer asks the page which unit it is
   showing (`<body data-unit="6">`). One renderer serves units 1 to 10.

   No fetch() and no XHR anywhere in this site: data arrives as <script src> files, which is what lets the
   whole thing run from a file:// URL on a memory stick exactly as it runs over https. */
window.AHB = (function () {
  var A = { units: {}, audioData: {}, castData: {} };

  A.unit = function (d) { A.units[d.unit] = d; return d; };
  A.audio = function (d) { A.audioData[d.unit] = d.groups; return d; };
  A.cast = function (m) { for (var k in m) if (m.hasOwnProperty(k)) A.castData[k] = m[k]; return m; };
  /* The object sprite, handed over as markup for the renderer to inject once. It is a script rather
     than an .svg file because an external <use href="art.svg#id"> does not resolve from file://. */
  A.sprite = function (svg) { A.spriteSVG = svg; return svg; };

  /* The only HTML-escaping in the site. Every string that reaches the page goes through it, because every
     string that reaches the page came out of a book and nobody has checked it for angle brackets. */
  A.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  };

  /* ANSWER COMPARISON, IN ONE PLACE.
     The v1 renderer compared a typed answer to the expected one with a lowercase string equality that
     stripped . ! and ? - so "Yes, I do" failed against "yes I do" on the comma, and nothing else was
     allowed to differ. The book's own answers are written as prose ("Monday.", "By sea.", "a big crane"),
     so the comparison has to ignore what a marker would ignore: case, surrounding punctuation, the
     articles the book sometimes includes and sometimes does not, and curly versus straight apostrophes.
     It must NOT ignore a different word, which is why this normalises rather than fuzzy-matches. */
  A.norm = function (s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .replace(/[’‘]/g, "'")
      .replace(/[–—]/g, '-')
      .replace(/[.,;:!?"()\[\]]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  };

  A.same = function (given, want) {
    var g = A.norm(given), w = A.norm(want);
    if (!g) return false;
    if (g === w) return true;
    var strip = function (x) { return x.replace(/^(a|an|the)\s+/, ''); };
    return strip(g) === strip(w);
  };

  /* A key answer is sometimes a list of equally good answers, and the book separates them with a SPACED
     slash or a middle dot: "on Monday / on Wednesday / in the first week of June." Any one of them
     counts. The spaces are required on purpose - splitting on a bare "/" would cut "and/or" in half. */
  A.anyOf = function (want) {
    return String(want == null ? '' : want).split(/\s+[·\/|]\s+/)
      .map(function (x) { return x.trim(); }).filter(Boolean);
  };

  A.matches = function (given, want) {
    var opts = A.anyOf(want);
    for (var i = 0; i < opts.length; i++) if (A.same(given, opts[i])) return true;
    return false;
  };

  /* Fisher-Yates, with a guard against handing back the order we were given - which a shuffle of two or
     three items does often enough to be noticed, and which makes an ordering task look broken. */
  A.shuffle = function (list) {
    var a = list.slice(), i, j, t;
    for (i = a.length - 1; i > 0; i--) { j = Math.floor(Math.random() * (i + 1)); t = a[i]; a[i] = a[j]; a[j] = t; }
    if (a.length > 1 && a.every(function (x, k) { return x === list[k]; })) a.push(a.shift());
    return a;
  };

  return A;
})();
