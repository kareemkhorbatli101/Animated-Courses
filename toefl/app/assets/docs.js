/* docs.js — the documents. Real typography, not a grey box with text in it.
   The book's own forms: a reading set as the thing it is, with bold
   sub-headings the preview exercise refers to, line numbers every five lines,
   numbered footnotes and a source attribution; and a mail-client chrome. */
(function (root, doc) {
  "use strict";
  var D = root.Deck, E = D.E, esc = D.esc;

  /* ---- a reading, with line numbers every `every` lines ---- */
  /* spec: {masthead, byline, blocks:[{h, text}], notes:[], source, every} */
  function reading(spec, opts) {
    opts = opts || {};
    var wrap = E("div", "read");
    if (opts.cite) wrap.classList.add("rl-cite");
    if (spec.masthead) {
      var m = E("div", "mast" + (spec.mastColor === "blue" ? " blue" : ""));
      if (spec.icon) {
        var ic = E("span");
        ic.innerHTML = spec.icon;
        m.appendChild(ic);
      }
      m.appendChild(E("b", null, spec.masthead));
      wrap.appendChild(m);
    }
    var cols = E("div", "rbody");
    var every = spec.every || 5, lineNo = 0;

    (spec.blocks || []).forEach(function (b) {
      if (b.h) cols.appendChild(E("h4", null, b.h));
      /* Break the text into visual lines of ~sentence length so the numbering
         is stable and the citation exercise has something real to point at. */
      var units = b.lines || String(b.text).split(/(?<=\.)\s+/);
      units.forEach(function (t) {
        lineNo++;
        /* Capture this line's own number. `lineNo` belongs to the enclosing
           function, so a handler that closes over it reports the LAST line
           however you click — every line said 9 on a nine-line passage. */
        var myLine = lineNo;
        var row = E("div", "ln");
        /* F6: when the exercise asks which line an answer came from, every
           line needs a visible number and a hit area. Otherwise the numbers
           appear every fifth line, which is enough to find your place and
           not enough to cite. */
        var u = E("u", null, (opts.cite || myLine % every === 0) ? String(myLine) : "");
        row.appendChild(u);
        var sp = E("span");
        sp.innerHTML = t;
        row.appendChild(sp);
        row.dataset.line = String(myLine);
        if (opts.cite) {
          row.tabIndex = 0;
          row.setAttribute("role", "button");
          row.setAttribute("aria-label", "Cite line " + myLine);
          var fire = function () { if (opts.onCite) opts.onCite(myLine, row); };
          row.addEventListener("click", fire);
          row.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); fire(); }
          });
        }
        cols.appendChild(row);
      });
    });

    (spec.notes || []).forEach(function (n, i) {
      cols.appendChild(E("p", "fn", "¹²³".charAt(i) + " " + n));
    });
    if (spec.source) cols.appendChild(E("p", "src", "Source: " + spec.source));
    wrap.appendChild(cols);
    /* F7 — open each gloss where its word is, not at the foot of the page */
    if (root.RL && root.RL.glossRail) root.RL.glossRail(wrap, spec.notes, spec.glossary);
    wrap.dataset.lines = lineNo;
    return wrap;
  }

  /* ---- a mail-client chrome ---- */
  /* spec: {to, from, re, body:[paragraphs], editable, placeholder} */
  function email(spec) {
    var m = E("div", "mail");
    var bar = E("div", "bar");
    ["#ff5f57", "#febc2e", "#28c840"].forEach(function (c) {
      var i = doc.createElement("i");
      i.style.background = c;
      bar.appendChild(i);
    });
    m.appendChild(bar);

    var hd = E("div", "hd");
    [["From", spec.from], ["To", spec.to], ["Re", spec.re]].forEach(function (p) {
      if (!p[1] && p[1] !== "") return;
      var r = E("div", "row");
      r.appendChild(E("span", null, p[0]));
      if (spec.editable && p[0] !== "From") {
        var inp = doc.createElement("input");
        inp.className = "abox wide";
        inp.value = p[1] || "";
        inp.setAttribute("aria-label", p[0]);
        r.appendChild(inp);
      } else {
        r.appendChild(E("b", null, p[1]));
      }
      hd.appendChild(r);
    });
    m.appendChild(hd);

    var bd = E("div", "bd");
    if (spec.editable) {
      var ta = doc.createElement("textarea");
      ta.placeholder = spec.placeholder || "";
      ta.setAttribute("aria-label", "Your email");
      if (spec.prefill) ta.value = spec.prefill;
      bd.appendChild(ta);
      m.textarea = ta;
    } else {
      (spec.body || []).forEach(function (p) {
        var el = E("p");
        el.innerHTML = p;
        bd.appendChild(el);
      });
    }
    m.appendChild(bd);
    return m;
  }

  root.Docs = { reading: reading, email: email };

  /* --------- kinds that use them --------- */

  /* A reading plus a cluster of choice items; the text stays on screen while
     the items run, which the spec requires. */
  D.register("read", function (stage, spec, api) {
    var cols = E("div", "cols");
    var left = E("div");
    left.appendChild(reading(spec.text));
    cols.appendChild(left);
    if (spec.note) { var n = api.note(spec.note); if (n) cols.appendChild(n); }
    stage.appendChild(cols);

    var host = E("div");
    host.style.marginTop = "14px";
    stage.appendChild(host);

    var graders = [];
    (spec.items || []).forEach(function (it, i) {
      var h = E("p", "item");
      h.innerHTML = "<span class='n'>" + (i + 1) + ".</span> " + it.q;
      host.appendChild(h);
      var sub = E("div");
      host.appendChild(sub);
      graders.push(D._choiceInto(sub, it.options, api));
    });

    return function () {
      var right = 0, miss = [];
      graders.forEach(function (g, i) {
        var r = g();
        if (r.ok) right++;
        else miss.push("<b>" + (i + 1) + ".</b> " + (r.rightText || "") +
          (r.rightWhy ? " — " + r.rightWhy : ""));
      });
      return {
        score: right, total: graders.length,
        html: miss.length ? "<p>Go back to the text for these:</p>" + api.fbList(miss)
                          : "<p>Every item answered from the text.</p>"
      };
    };
  });

  /* The reading alone, as a preview/read step with no items to grade. */
  D.register("read-only", function (stage, spec, api) {
    var cols = E("div", "cols");
    var left = E("div");
    left.appendChild(reading(spec.text));
    cols.appendChild(left);
    if (spec.note) { var n = api.note(spec.note); if (n) cols.appendChild(n); }
    stage.appendChild(cols);
    return function () {
      return { ok: true, total: 1, verdict: "Read",
               html: spec.after || "<p>Now go on to the questions.</p>" };
    };
  });
})(window, document);
