/* chrome.js — header, breadcrumb, chapter rail, prev/next, footer.
 * One definition of the navigation, rendered on all thirteen chapter pages,
 * so the site cannot drift page to page. Every path is relative: this runs
 * from file:// at any folder depth.
 */
(function (root, doc) {
  "use strict";

  var P = root.Progress, S = root.Speech;
  function E(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }

  var progressNodes = [];

  function build() {
    var page = root.PAGE || {};
    var up = page.up || "../";        /* path back to the book root */
    var idx = P ? P.pageIndex(page.id) : -1;

    /* ---------------- header ---------------- */
    var header = E("header", "site-head");
    var inner = E("div", "wrap head-inner");
    var brand = E("a", "brand");
    brand.href = up + "index.html";
    brand.appendChild(E("span", "brand-mark", "C1"));
    var bt = E("span", "brand-text");
    bt.appendChild(E("span", "brand-line1", "CMA Part 1 · Book 1"));
    bt.appendChild(E("span", "brand-line2", "External Financial Reporting Decisions"));
    brand.appendChild(bt);
    inner.appendChild(brand);

    var nav = E("nav", "head-nav");
    nav.setAttribute("aria-label", "Book");
    [["index.html", "Contents"], ["how-to-use.html", "How to use"],
     ["glossary.html", "Glossary"], ["term-index.html", "Index"]].forEach(function (p) {
      var a = E("a", null, p[1]);
      a.href = up + p[0];
      nav.appendChild(a);
    });
    inner.appendChild(nav);
    header.appendChild(inner);
    doc.body.insertBefore(header, doc.body.firstChild);

    /* ---------------- title block ---------------- */
    var main = doc.getElementById("main") || doc.body;
    /* A page that writes its own hero (the book home, the appendices) asks for
       the header, footer and nothing else. */
    if (page.noHero) { buildFooter(); return; }
    var topWrap = E("div", "wrap");

    var crumb = E("nav", "crumb");
    crumb.setAttribute("aria-label", "Breadcrumb");
    /* A page may declare its own trail; chapter pages get the default one. */
    var trail = page.crumbs || [[up + "index.html", "Book"],
                                [up + "index.html#part-1", "Part I"],
                                ["index.html", "Chapter 1"]];
    trail.forEach(function (c, i) {
      if (i) crumb.appendChild(E("span", "crumb-sep", "/"));
      crumb.appendChild(link(c[0], c[1]));
    });
    if (page.kind !== "hub") {
      crumb.appendChild(E("span", "crumb-sep", "/"));
      crumb.appendChild(E("span", "crumb-here", page.crumb || page.title));
    }
    topWrap.appendChild(crumb);

    var hero = E("div", "page-hero" + (page.kind === "hub" ? " page-hero-hub" : ""));
    var eyebrow = E("p", "eyebrow");
    eyebrow.textContent = page.eyebrow ||
      (page.n ? "Chapter 1 · Section " + page.n : "Chapter 1");
    hero.appendChild(eyebrow);
    var h1 = E("h1", null, page.title);
    hero.appendChild(h1);
    if (page.titleAr) {
      var ar = E("p", "ar page-title-ar");
      ar.setAttribute("lang", "ar");
      ar.setAttribute("dir", "rtl");
      ar.textContent = page.titleAr;
      hero.appendChild(ar);
      if (S) {
        var sp = S.button(page.titleAr, "ar", "Pronounce in Arabic");
        sp.className = "speak speak-big";
        hero.appendChild(sp);
      }
    }
    if (page.question) {
      var q = E("p", "page-question");
      q.innerHTML = "<strong>This section answers:</strong> " + page.question;
      hero.appendChild(q);
    }
    if (page.los && page.los.length) {
      var losWrap = E("p", "los-tags");
      losWrap.appendChild(E("span", "los-lead", "Learning outcomes"));
      page.los.forEach(function (c) { losWrap.appendChild(E("span", "los-tag", c)); });
      hero.appendChild(losWrap);
    }
    topWrap.appendChild(hero);
    main.insertBefore(topWrap, main.firstChild);

    /* ---------------- chapter rail ---------------- */
    if (P && page.kind !== "hub") {
      var railWrap = E("div", "wrap");
      var rail = E("nav", "rail");
      rail.setAttribute("aria-label", "Chapter 1 contents");
      var det = E("details", "rail-details");
      if (root.innerWidth > 900) det.open = true;
      var sum = E("summary", "rail-summary");
      sum.appendChild(E("span", null, "Chapter 1 · all thirteen pages"));
      var prog = E("span", "rail-progress");
      sum.appendChild(prog);
      progressNodes.push(prog);
      det.appendChild(sum);
      var list = E("ol", "rail-list");
      P.TOC.forEach(function (p) {
        var liEl = E("li", "rail-item rail-" + p.kind);
        var a = E("a", null, "");
        a.href = p.file;
        a.appendChild(E("span", "rail-n", p.n));
        a.appendChild(E("span", "rail-title", p.title));
        var st = P.pageStats(p.id);
        var badge = E("span", "rail-badge");
        if (st.complete) { badge.textContent = "✓"; liEl.classList.add("is-done"); }
        else if (st.done) badge.textContent = st.done + "/" + st.total;
        a.appendChild(badge);
        if (p.id === page.id) { liEl.classList.add("is-current"); a.setAttribute("aria-current", "page"); }
        liEl.appendChild(a);
        list.appendChild(liEl);
      });
      det.appendChild(list);
      rail.appendChild(det);
      railWrap.appendChild(rail);
      main.insertBefore(railWrap, topWrap.nextSibling);
    }

    /* ---------------- prev / next ---------------- */
    if (P && idx >= 0) {
      var pager = E("nav", "pager");
      pager.setAttribute("aria-label", "Page navigation");
      var prev = idx > 0 ? P.TOC[idx - 1] : null;
      var next = idx < P.TOC.length - 1 ? P.TOC[idx + 1] : null;
      var a1 = E("a", "pager-link pager-prev");
      if (prev) { a1.href = prev.file; a1.innerHTML = "<span class=\"pager-dir\">← Previous</span><span class=\"pager-t\">" + prev.title + "</span>"; }
      else { a1.href = "index.html"; a1.innerHTML = "<span class=\"pager-dir\">← Back</span><span class=\"pager-t\">Chapter 1 contents</span>"; }
      var a2 = E("a", "pager-link pager-next");
      if (next) { a2.href = next.file; a2.innerHTML = "<span class=\"pager-dir\">Next →</span><span class=\"pager-t\">" + next.title + "</span>"; }
      else { a2.href = "index.html"; a2.innerHTML = "<span class=\"pager-dir\">Finish →</span><span class=\"pager-t\">Back to Chapter 1 contents</span>"; }
      pager.appendChild(a1);
      pager.appendChild(a2);
      var pw = E("div", "wrap");
      pw.appendChild(pager);
      main.appendChild(pw);

      doc.addEventListener("keydown", function (e) {
        if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
        if (e.altKey || e.ctrlKey || e.metaKey) return;
        if (e.key === "ArrowRight" && next) root.location.href = next.file;
        if (e.key === "ArrowLeft" && prev) root.location.href = prev.file;
      });
    }

    buildFooter();
    function link(href, text) { var a = E("a", null, text); a.href = href; return a; }
    refreshProgress();
  }

  /* ---------------- footer ---------------- */
  function buildFooter() {
    var footer = E("footer", "site-foot");
    var fw = E("div", "wrap");
    var note = E("p", "speech-note");
    note.id = "speech-note";
    note.hidden = true;
    fw.appendChild(note);
    var voices = E("div", "voice-row");
    fw.appendChild(voices);
    if (S) S.picker(voices);

    var tools = E("p", "foot-tools");
    var resetBtn = E("button", "btn btn-ghost btn-small", "Reset my progress for Chapter 1");
    resetBtn.type = "button";
    resetBtn.addEventListener("click", function () {
      if (root.confirm("Clear all saved progress for Chapter 1 on this computer?")) {
        P.reset();
        root.location.reload();
      }
    });
    tools.appendChild(resetBtn);
    if (P && !P.storageWorks) {
      tools.appendChild(E("span", "foot-warn",
        " Progress cannot be saved in this browser window, so it will be lost when you close the page."));
    }
    fw.appendChild(tools);

    fw.appendChild(E("p", "foot-credit",
      "CMA Part 1 · Book 1 — External Financial Reporting Decisions. " +
      "Open these pages straight from the folder: no internet connection and no web server are needed."));
    footer.appendChild(fw);
    doc.body.appendChild(footer);
  }

  function refreshProgress() {
    if (!P) return;
    var page = root.PAGE || {};
    var st = P.pageStats(page.id);
    var ch = P.chapterStats();
    progressNodes.forEach(function (n) {
      n.textContent = ch.done + " of " + ch.items + " exercises done · " +
        ch.pagesComplete + " of " + ch.pages + " pages complete";
    });
    var local = doc.getElementById("page-progress");
    if (local && st.total) {
      local.textContent = st.done + " of " + st.total + " exercises on this page";
      local.className = "page-progress" + (st.complete ? " is-complete" : "");
    }
  }

  root.Chrome = {
    build: build,
    refreshProgress: refreshProgress,
    afterMount: function () { refreshProgress(); }
  };

  doc.addEventListener("DOMContentLoaded", function () {
    build();
    if (root.Engine) root.Engine.mount();
    refreshProgress();
    if (root.location.hash) {
      var t = doc.getElementById(root.location.hash.slice(1));
      if (t) t.scrollIntoView();
    }
  });
})(window, document);
