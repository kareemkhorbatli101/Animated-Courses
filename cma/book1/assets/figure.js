/* figure.js — the author's own artwork, on the page where the author put it.
 *
 * WHY THIS IS NEW. The chapter has thirteen numbered figures. Nine of them are drawings the author
 * made; four (F01-02, F01-10, F01-11, F01-12) are tables, and the engine already builds those live as
 * interactive scenes, which is better than a picture of them. The nine drawings were in the book and
 * nowhere on the site: one `{ type: "figure", figure: "roadmap" }` block existed, in ch01/data/index.js
 * — a file that nothing loads — and no renderer for it existed at all. So the chapter's visual spine
 * was simply missing, and nothing said so.
 *
 * They are now extracted straight from the .docx by tools/cma_book --figures, named by the caption that
 * follows them in the document (NOT by their order among the images: four captions have no picture, so
 * counting put eight of the nine under the wrong number), and shown here with the author's own caption
 * text — which is what keeps them inside the provenance lock.
 *
 * A figure is a STUDY scene, not a question. It reports total 0, so it never pretends to mark anybody,
 * but it still counts as a scene you have seen.
 */
(function () {
  var D = window.Deck || window.SCENE || window.Scene;
  if (!D || !D.register) return;

  function E(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  D.register("figure", function (stage, spec) {
    var fig = E("figure", "bookfig");

    var img = new Image();
    img.src = "../assets/figures/" + spec.file;
    /* The alt text is the author's caption. A description invented here would be an accounting
       claim the author never made, and the provenance lock would be right to refuse it. */
    img.alt = spec.caption || spec.label || "";
    img.loading = "lazy";
    img.decoding = "async";
    fig.appendChild(img);

    var cap = E("figcaption");
    cap.appendChild(E("b", null, spec.label || ""));
    if (spec.caption) cap.appendChild(document.createTextNode(" " + spec.caption));
    fig.appendChild(cap);

    /* A picture is worth nothing if it cannot be seen. Clicking opens it full size, which matters for
       the effect grids and the trial balance, where the numbers are small on a phone. */
    var zoom = E("button", "ghost small", "View full size");
    zoom.type = "button";
    zoom.addEventListener("click", function () {
      var dlg = E("dialog", "figzoom");
      var big = new Image();
      big.src = img.src;
      big.alt = img.alt;
      var close = E("button", "ghost small", "Close");
      close.type = "button";
      close.addEventListener("click", function () { dlg.close(); });
      dlg.appendChild(close);
      dlg.appendChild(big);
      document.body.appendChild(dlg);
      dlg.addEventListener("close", function () { dlg.remove(); });
      dlg.showModal();
    });
    fig.appendChild(zoom);

    stage.appendChild(fig);

    return function () {
      return {
        score: 0, total: 0, ok: true,
        verdict: "Looked at",
        html: '<div class="fb o"><p>' + (spec.read || "Read the figure, then carry on.") + "</p></div>"
      };
    };
  });
})();
