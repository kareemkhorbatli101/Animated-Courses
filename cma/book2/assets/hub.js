/* hub.js — the chapter hub: the contents cards, the progress line and the key-terms cards.
 *
 * Chapter 1 carries this behaviour as an inline script in its own index.html. It stays there:
 * that page is published and gated, and rewriting it to prove a point about sharing code would
 * risk a chapter nobody asked me to touch. Every chapter from 2 on loads this file instead, and
 * reads who it is from Progress — which in turn reads the chapter's data/toc.js.
 */
(function (root, doc) {
  "use strict";
  var P = root.Progress, T = root.TERMS, S = root.Speech, FR = root.TERMS_FR || {};

  function card(t) {
    var st = P.pageStats(t.id);
    var a = doc.createElement("a");
    a.className = "card" + (st.complete ? " done" : "");
    a.href = t.file;
    var n = doc.createElement("span");
    n.className = "card-n";
    n.textContent = t.n;
    var mid = doc.createElement("span");
    mid.className = "card-t";
    mid.appendChild(doc.createTextNode(t.title));
    if (t.blurb) {
      var s = doc.createElement("span");
      s.className = "card-s";
      s.textContent = t.blurb;
      mid.appendChild(s);
    }
    var b = doc.createElement("span");
    b.className = "card-b";
    b.textContent = st.complete ? "✓ done" : (st.done ? st.done + " of " + st.total : "start →");
    a.appendChild(n); a.appendChild(mid); a.appendChild(b);
    return a;
  }

  var secs = doc.getElementById("secs"), back = doc.getElementById("back");
  P.TOC.forEach(function (t) {
    var host = t.kind === "section" ? secs : back;
    if (host) host.appendChild(card(t));
  });

  var s = P.chapterStats(), prog = doc.getElementById("prog");
  if (prog) {
    prog.innerHTML = s.items
      ? "<b>" + s.done + " of " + s.items + "</b> scenes done, <b>" + s.pagesComplete +
        " of " + s.pages + "</b> pages complete."
      : "";
  }

  /* The chapter's own key-terms table: English with a speech button, the Arabic the author
     bridged it to, and the French where the author gives one. Nothing is shown that the term
     bank does not hold. */
  var kt = doc.getElementById("keyterms");
  if (kt && T && T.keys) {
    T.keys().forEach(function (t) {
      var d = doc.createElement("div");
      d.className = "card";
      var w = doc.createElement("span");
      w.className = "card-t";
      w.appendChild(doc.createTextNode(t.en));
      if (S) w.appendChild(S.button(t.en, "en", "Pronounce in English"));
      if (t.ar) {
        var ar = doc.createElement("span");
        ar.className = "ar card-s";
        ar.setAttribute("lang", "ar");
        ar.setAttribute("dir", "rtl");
        ar.textContent = t.ar;
        w.appendChild(ar);
        if (S) w.appendChild(S.button(t.ar, "ar", "Pronounce in Arabic"));
      }
      var fr = FR[String(t.en).toLowerCase()];
      if (fr) {
        var f = doc.createElement("span");
        f.className = "card-s fr";
        f.setAttribute("lang", "fr");
        f.textContent = fr;
        w.appendChild(f);
      }
      d.appendChild(w);
      kt.appendChild(d);
    });
  }

  var reset = doc.getElementById("reset");
  if (reset) {
    reset.addEventListener("click", function () {
      /* Scoped to this chapter: Progress namespaces its keys by chapter id, so clearing
         Chapter 2 leaves Chapter 1 alone. The wording has to say so. */
      if (root.confirm("Clear all saved progress for " + P.label + " on this computer?")) {
        P.reset();
        root.location.reload();
      }
    });
  }
})(window, document);
