/* exam-set.js — a timed set, drawn to the Institute's own published weights.
 *
 * WHAT IT IS FOR. The published Part 1 paper is, in the Institute's own words, "4 hours – 100
 * questions and 2 essay questions", and its Content Specification Outlines effective
 * September 1, 2024 weight the six areas A 15%, B 20%, C 20%, D 15%, E 15%, F 15%. Nothing on
 * this site had ever put a candidate under those conditions: the course had 1035 pages, 0 items
 * with a scenario stem, and no timer anywhere.
 *
 * This page draws from the chapters' own exam-practice banks, in the Institute's proportions
 * over whatever areas the volume's chapters actually cover, runs a clock, and reports by AREA
 * with every wrong item linked back to the section that teaches it.
 *
 * WHAT IT IS NOT. It is not the exam, it does not predict a score, and it never produces a
 * percentage: the report counts right and wrong per area and names the sections to go back to.
 * A model's or a course's number on a candidate's readiness is a guess wearing a figure, and a
 * candidate plans their revision around it.
 *
 * WHERE THE ITEMS COME FROM. `window.EXAM_DECKS`, pushed by the page's own script tags - one
 * per chapter, exactly as answers.html already collects a chapter's decks. Every item is an
 * authored one under the second provenance class (assets/provenance.js), so every figure,
 * company and term in it is the author's; they carry the same visible mark here as there.
 */
(function (root, doc) {
  "use strict";

  /* The Institute's own weights, effective September 1, 2024, parsed from the Content
     Specification Outlines by tools/cma_sweep/icma_outline.py and not typed from memory. */
  var WEIGHT = { A: 15, B: 20, C: 20, D: 15, E: 15, F: 15 };
  var AREA_NAME = {
    A: "External Financial Reporting Decisions",
    B: "Planning, Budgeting, and Forecasting",
    C: "Performance Management",
    D: "Cost Management",
    E: "Internal Controls",
    F: "Technology and Analytics"
  };
  var N_ITEMS = 100;
  var MINUTES = 180;

  function E(tag, cls, text) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  }
  function esc(s) {
    return String(s === null || s === undefined ? "" : s)
      .replace(/[&<>"]/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
      });
  }

  /* a deterministic shuffle so a set can be reproduced from its seed */
  function rnd(seed) {
    var s = seed % 2147483647;
    if (s <= 0) s += 2147483646;
    return function () { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  }
  function shuffle(a, r) {
    var x = a.slice();
    for (var i = x.length - 1; i > 0; i--) {
      var j = Math.floor(r() * (i + 1)), t = x[i]; x[i] = x[j]; x[j] = t;
    }
    return x;
  }

  function pool() {
    var out = [];
    (root.EXAM_DECKS || []).forEach(function (d) {
      (d.page && d.page.scenes || []).forEach(function (s) {
        if (!s || !s.authored) return;
        out.push({ ch: d.ch, sec: s.sec || "", area: s.area || "?", sc: s });
      });
    });
    return out;
  }

  /* DRAWN TO THE WEIGHTS, AND SHORT WHERE THE BANK IS SHORT - never padded from another area.
     A volume covers the areas its chapters cover; asking for 20 items of area C from a volume
     that teaches none would either fail or quietly substitute, and a substituted item is a
     report about the wrong thing. The shortfall is reported instead. */
  function draw(all, seed) {
    var r = rnd(seed);
    var byArea = {};
    all.forEach(function (x) { (byArea[x.area] = byArea[x.area] || []).push(x); });
    var present = Object.keys(byArea).filter(function (a) { return WEIGHT[a]; });
    var totalW = present.reduce(function (t, a) { return t + WEIGHT[a]; }, 0) || 1;
    var picked = [], short = [];
    present.sort().forEach(function (a) {
      var want = Math.round(N_ITEMS * WEIGHT[a] / totalW);
      var got = shuffle(byArea[a], r).slice(0, want);
      picked = picked.concat(got);
      if (got.length < want) short.push(a + " " + got.length + " of " + want);
    });
    return { items: shuffle(picked, r), short: short, present: present, totalW: totalW };
  }

  function build() {
    var host = doc.getElementById("exam-set");
    if (!host) return;
    var all = pool();
    var seed = Number(new URLSearchParams(root.location.search).get("seed"))
               || (Date.now() % 100000);
    var set = draw(all, seed);

    host.innerHTML = "";
    var head = E("div", "xs-head");
    head.appendChild(E("h2", null, "A timed set, drawn to the Institute's weights"));
    var p = E("p", "note");
    p.innerHTML = "The published Part 1 paper is <b>4 hours &mdash; 100 questions and 2 essay "
      + "questions</b>, and the Institute's Content Specification Outlines effective "
      + "September 1, 2024 weight the areas "
      + Object.keys(WEIGHT).map(function (a) { return a + " " + WEIGHT[a] + "%"; }).join(", ")
      + ". This set draws " + set.items.length + " item(s) from this book's own exam practice "
      + "in those proportions over the areas this book covers ("
      + (set.present.join(", ") || "none") + "), and gives you "
      + MINUTES + " minutes. It is practice, not a prediction: there is no score at the end, "
      + "only what you got wrong and where it is taught.";
    head.appendChild(p);
    if (set.short.length) {
      head.appendChild(E("p", "note", "Short where this book's bank is short: "
                                      + set.short.join("; ") + "."));
    }
    head.appendChild(E("p", "note", "Set " + seed
                                    + ". The same number draws the same set again."));
    host.appendChild(head);

    if (!set.items.length) {
      host.appendChild(E("p", "note", "This book has no exam-practice items yet."));
      return;
    }

    var start = E("button", "btn btn-primary", "Start the " + MINUTES + " minutes");
    start.type = "button";
    host.appendChild(start);
    var clock = E("div", "xs-clock");
    host.appendChild(clock);
    var form = E("div", "xs-items");
    host.appendChild(form);
    var finish = E("button", "btn btn-primary", "Finish and show what I missed");
    finish.type = "button";
    finish.style.display = "none";
    host.appendChild(finish);
    var report = E("div", "xs-report");
    host.appendChild(report);

    var picks = {};
    set.items.forEach(function (x, i) {
      var box = E("div", "xs-item");
      box.appendChild(E("p", "scene-kicker",
                        "Item " + (i + 1) + " of " + set.items.length
                        + " · area " + x.area + " · chapter " + x.ch
                        + " · section " + x.sec));
      var mk = E("p", "scene-authored");
      mk.appendChild(E("span", "authored-chip", "Course-written"));
      mk.appendChild(E("span", null,
        " The facts, figures and categories are the book's; the scenario is this course's."));
      box.appendChild(mk);
      if (x.sc.exhibit) {
        var ex = E("p", "note");
        ex.textContent = x.sc.exhibit;
        box.appendChild(ex);
      }
      box.appendChild(E("h3", null, x.sc.title || ""));
      if ((x.sc.options || []).length) {
        var wrap = E("div", "choices");
        (x.sc.options || []).forEach(function (o, j) {
          var lab = E("label", "choice");
          var inp = doc.createElement("input");
          inp.type = "radio";
          inp.name = "xs" + i;
          inp.value = String(j);
          inp.addEventListener("change", function () { picks[i] = j; });
          lab.appendChild(inp);
          var sp = E("span");
          sp.innerHTML = o.text;
          lab.appendChild(sp);
          wrap.appendChild(lab);
        });
        box.appendChild(wrap);
      } else if ((x.sc.fields || []).length) {
        var f = x.sc.fields[0];
        box.appendChild(E("p", "note", f.label || ""));
        var inp2 = doc.createElement("input");
        inp2.type = "text";
        inp2.inputMode = "decimal";
        inp2.className = "yt-in";
        inp2.setAttribute("aria-label", f.label || "amount");
        inp2.addEventListener("input", function () { picks[i] = inp2.value; });
        box.appendChild(inp2);
      }
      form.appendChild(box);
    });
    form.style.display = "none";

    function right(x, got) {
      if ((x.sc.options || []).length) {
        return got !== undefined && !!(x.sc.options[got] || {}).correct;
      }
      var f = (x.sc.fields || [])[0] || {};
      var v = String(got === undefined ? "" : got).replace(/[,\s$%]/g, "")
        .replace(/^\((.*)\)$/, "-$1");
      if (v === "" || !/^-?\d+(\.\d+)?$/.test(v)) return false;
      return Math.abs(Number(v) - Number(f.answer)) < 0.001;
    }

    var left = MINUTES * 60, tick = null;
    function show() {
      var m = Math.floor(left / 60), s = left % 60;
      clock.textContent = m + "m " + (s < 10 ? "0" : "") + s + "s left";
      if (left <= 0) { clearInterval(tick); done(true); }
      left--;
    }
    start.addEventListener("click", function () {
      start.style.display = "none";
      form.style.display = "";
      finish.style.display = "";
      show();
      tick = setInterval(show, 1000);
    });
    finish.addEventListener("click", function () { clearInterval(tick); done(false); });

    function done(ranOut) {
      finish.style.display = "none";
      clock.textContent = ranOut ? "Time." : "Stopped with " + Math.max(0, left) + "s left.";
      var byArea = {};
      var wrong = [];
      set.items.forEach(function (x, i) {
        var a = byArea[x.area] = byArea[x.area] || { right: 0, wrong: 0, blank: 0 };
        var got = picks[i];
        if (got === undefined || got === "") { a.blank++; wrong.push(x); return; }
        if (right(x, got)) a.right++;
        else { a.wrong++; wrong.push(x); }
      });
      report.innerHTML = "";
      report.appendChild(E("h3", null, "By area"));
      var tbl = E("table", "tbl");
      var th = E("tr");
      ["Area", "", "Right", "Wrong", "Not answered"].forEach(function (h) {
        th.appendChild(E("th", null, h));
      });
      tbl.appendChild(th);
      Object.keys(byArea).sort().forEach(function (k) {
        var a = byArea[k], tr = E("tr");
        tr.appendChild(E("td", null, k));
        tr.appendChild(E("td", null, AREA_NAME[k] || ""));
        tr.appendChild(E("td", null, String(a.right)));
        tr.appendChild(E("td", null, String(a.wrong)));
        tr.appendChild(E("td", null, String(a.blank)));
        tbl.appendChild(tr);
      });
      report.appendChild(tbl);
      report.appendChild(E("p", "note",
        "No score and no percentage: this is practice, and a number here would be a guess you "
        + "would plan your revision around."));
      if (wrong.length) {
        report.appendChild(E("h3", null, "Go back to these sections"));
        var ul = E("ul");
        var seen = {};
        wrong.forEach(function (x) {
          var key = x.ch + "/" + x.sec;
          if (seen[key]) return;
          seen[key] = 1;
          var li = E("li");
          var a = doc.createElement("a");
          a.href = "ch" + (x.ch < 10 ? "0" : "") + x.ch + "/s" + x.ch + "-"
                   + String(x.sec).split(".")[1] + ".html";
          a.textContent = "Chapter " + x.ch + ", section " + x.sec;
          li.appendChild(a);
          var ex = doc.createElement("a");
          ex.href = "ch" + (x.ch < 10 ? "0" : "") + x.ch + "/exam.html";
          ex.textContent = " · its exam practice";
          li.appendChild(ex);
          ul.appendChild(li);
        });
        report.appendChild(ul);
      }
      report.appendChild(E("h3", null, "Every item, with the book's reasons"));
      set.items.forEach(function (x, i) {
        var d = E("details", "ans");
        var sm = E("summary", null,
                   "Item " + (i + 1) + " · " + (x.sc.title || "") + " · "
                   + (right(x, picks[i]) ? "right" : "not right"));
        d.appendChild(sm);
        var body = E("div");
        if (x.sc.exhibit) body.appendChild(E("p", "note", x.sc.exhibit));
        var ul2 = E("ul");
        (x.sc.options || []).forEach(function (o) {
          var li = E("li", o.correct ? "y" : "n");
          li.innerHTML = "<b>" + esc(String(o.text).replace(/<[^>]*>/g, "")) + "</b> "
                         + esc(o.why || "");
          ul2.appendChild(li);
        });
        (x.sc.fields || []).forEach(function (f) {
          var li = E("li", "y");
          li.innerHTML = "<b>" + esc(f.label) + " = " + esc(String(f.answer)) + "</b> "
                         + esc(f.why || "");
          ul2.appendChild(li);
        });
        body.appendChild(ul2);
        d.appendChild(body);
        report.appendChild(d);
      });
      report.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  doc.addEventListener("DOMContentLoaded", build);
}(window, document));
