/* figure.js — the author's figures, as EXHIBITS inside exercises.
 *
 * WHAT CHANGED, AND WHY. This file used to register a "figure" SCENE: a picture on a
 * screen of its own, which returned score 0 of total 0 with the verdict "Looked at".
 * Eleven of them shipped. A scene that cannot be got wrong is a slide, and eleven
 * slides is how a chapter built out of interactive objects still reads as a lecture.
 *
 * So a figure is no longer a scene. It is an exhibit: scene.js folds every figure into
 * the exercise that follows it, and the exercise is what gets marked. No picture is
 * lost — each one now sits inside the task it was always evidence for, which is also
 * where a learner wants it, because the question and the figure are finally on the
 * same screen.
 *
 * The markup keeps the .bookfig class: the render gate counts .bookfig images and
 * requires every one to load, and that check is worth more than a tidier name.
 */
(function (root, doc) {
  "use strict";

  function E(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }

  /* WHERE THE FIGURES ARE SERVED FROM, which is not where the pages are served from.
   *
   * The 372 figures of the four volumes used to sit inside the site's git repository
   * along with every other course's media. Git keeps every version of every file for
   * ever, so that repository reached 1,871 MB — 91% of it media that never changes
   * once extracted — and pushes began to fail. The figures now live in their own
   * repository and reach the browser through jsDelivr, pinned to an exact commit, so a
   * published page can never silently show a different picture.
   *
   * AN EMPTY BASE IS A WORKING ANSWER, not a failure: the page then asks for the folder
   * beside it, which is what a copy of this book on a memory stick does, and what every
   * one of these pages did before this change.
   *
   * ONE FLAT FOLDER FOR ALL FOUR VOLUMES. Book 1's figures are F01-.., Book 2's F201-..,
   * Book 3's F301-.. and Book 4's F401-.., so the 372 names are unique across the set
   * and a volume does not need to be named in the URL. That is an assumption about the
   * author's numbering rather than a rule of nature, so gates/cma_media checks it: if
   * two volumes ever name a figure the same way, the gate fails rather than one picture
   * quietly replacing another. */
  function figureURL(file) {
    var base = root.CMA_MEDIA ? String(root.CMA_MEDIA) : "";
    return base ? base + "assets/figures/" + file : "../assets/figures/" + file;
  }

  /* spec: { file, label, caption } — the figure scene's own fields, unchanged, so the
     data decks remain the book's record and needed no edit when this moved. */
  function fig(spec) {
    var f = E("figure", "bookfig");

    var img = new Image();
    img.src = figureURL(spec.file);
    /* The alt text is the author's caption. A description invented here would be an
       accounting claim the author never made, and the provenance lock would be right
       to refuse it. */
    img.alt = spec.caption || spec.label || "";
    img.loading = "lazy";
    img.decoding = "async";
    f.appendChild(img);

    var cap = E("figcaption");
    cap.appendChild(E("b", null, spec.label || ""));
    if (spec.caption) cap.appendChild(doc.createTextNode(" " + spec.caption));
    f.appendChild(cap);

    /* A picture is worth nothing if it cannot be seen. Clicking opens it full size,
       which matters for the effect grids and the trial balance, where the numbers are
       small on a phone. */
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
      doc.body.appendChild(dlg);
      dlg.addEventListener("close", function () { dlg.remove(); });
      dlg.showModal();
    });
    f.appendChild(zoom);
    return f;
  }

  root.Exhibit = root.Exhibit || {};
  root.Exhibit.fig = fig;
  /* Exported so the gate can check the resolution rule itself rather than infer it from
     a rendered page, and so a QA page can report which commit it is reading. */
  root.Exhibit.figureURL = figureURL;
})(window, document);
