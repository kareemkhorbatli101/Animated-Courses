/* charts.js — the chart component library.
 *
 * Step Forward puts a data visual in every Lesson 5 and changes its FORM every
 * unit: graph, pie, bar, flow and organisational chart, scatter, table, pie with
 * a key, paired pies, comparison table, bubble infographic. The learner has to
 * meet every form, so this is a library, not a style.
 *
 * Colour: categorical slots are the validated set (all six checks pass in both
 * modes, worst adjacent CVD dE 24.7 light / 26.8 dark for the first two). Pies
 * use a single-hue sequential ramp ordered by value instead of categorical hues,
 * because a many-slice pie is an all-pairs comparison that no eight-hue
 * categorical set can clear - and a value-ordered ramp reads as largest-to-
 * smallest for free. Every slice is directly labelled, so identity is never
 * carried by colour alone.
 *
 * Two deliberate departures from the book: its pies are drawn in 3-D, which
 * distorts the very areas its items ask the learner to compare, so ours are
 * flat; and its bubble chart relies on area alone, so ours prints the figure
 * inside each circle.
 */
(function (root, doc) {
  "use strict";

  var SERIES = ["var(--c1)", "var(--c2)", "var(--c3)"];
  function E(t, c, x) { var n = doc.createElement(t); if (c) n.className = c; if (x !== undefined) n.textContent = x; return n; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  /* chrome shared by every figure */
  function frame(spec, svgMarkup, legendHTML) {
    var f = E("div", "fig");
    if (spec.title) f.appendChild(E("h4", null, spec.title));
    if (spec.sub) f.appendChild(E("p", "sub", spec.sub));
    if (legendHTML) { var lg = E("div", "lg"); lg.innerHTML = legendHTML; f.appendChild(lg); }
    var host = E("div");
    host.innerHTML = svgMarkup;
    f.appendChild(host);
    if (spec.source) { var s = E("p", "src", "Source: " + spec.source); f.appendChild(s); }
    if (spec.rows) {
      var d = doc.createElement("details");
      d.innerHTML = "<summary>Table view</summary>";
      var t = E("table", "sf");
      t.innerHTML = "<tr>" + spec.cols.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr>" +
        spec.rows.map(function (r) {
          return "<tr>" + r.map(function (c) { return "<td>" + esc(c) + "</td>"; }).join("") + "</tr>";
        }).join("");
      d.appendChild(t);
      f.appendChild(d);
    }
    return f;
  }

  /* ---------------------------------------------------------------- line --- */
  function line(spec) {
    var W = 660, H = 290, L = 48, R = spec.endLabels === false ? 24 : 128, T = 14, B = 40;
    var pw = W - L - R, ph = H - T - B;
    var xs = spec.x, ymax = spec.ymax || 100;
    function X(i) { return L + (xs.length === 1 ? pw / 2 : i / (xs.length - 1) * pw); }
    function Y(v) { return T + (1 - v / ymax) * ph; }
    var s = [], g;
    for (g = 0; g <= 4; g++) {
      var gv = ymax * g / 4;
      s.push('<line class="gridln" x1="' + L + '" y1="' + Y(gv) + '" x2="' + (L + pw) + '" y2="' + Y(gv) + '"/>');
      s.push('<text class="tk" x="' + (L - 9) + '" y="' + (Y(gv) + 4) + '" text-anchor="end">' + gv + (spec.unit || "") + "</text>");
    }
    s.push('<line class="axln" x1="' + L + '" y1="' + Y(0) + '" x2="' + (L + pw) + '" y2="' + Y(0) + '"/>');
    xs.forEach(function (x, i) {
      s.push('<text class="tk" x="' + X(i) + '" y="' + (Y(0) + 18) + '" text-anchor="middle">' + esc(x) + "</text>");
    });
    if (spec.xlabel) s.push('<text class="tk" x="' + (L + pw / 2) + '" y="' + (H - 4) + '" text-anchor="middle">' + esc(spec.xlabel) + "</text>");
    spec.series.forEach(function (ser, si) {
      var col = SERIES[si % SERIES.length];
      var d = ser.v.map(function (v, i) { return (i ? "L" : "M") + X(i).toFixed(1) + " " + Y(v).toFixed(1); }).join(" ");
      s.push('<path d="' + d + '" fill="none" stroke="' + col + '" stroke-width="2" stroke-linecap="round"/>');
      ser.v.forEach(function (v, i) {
        s.push('<circle class="mk" cx="' + X(i) + '" cy="' + Y(v) + '" r="4" fill="' + col + '"/>');
      });
      if (spec.endLabels !== false) {
        var last = ser.v.length - 1;
        s.push('<text class="dlab" x="' + (L + pw + 9) + '" y="' + (Y(ser.v[last]) + 4) + '" fill="' + col + '">' +
               ser.v[last] + (spec.unit || "") + " · " + esc(ser.name) + "</text>");
      }
    });
    var lg = spec.series.map(function (ser, si) {
      return '<b><i style="background:' + SERIES[si % SERIES.length] + '"></i>' + esc(ser.name) + "</b>";
    }).join("");
    return frame(spec, '<svg viewBox="0 0 ' + W + " " + H + '" width="100%" role="img" aria-label="' +
      esc(spec.alt || spec.title || "line chart") + '">' + s.join("") + "</svg>", spec.series.length > 1 ? lg : "");
  }

  /* ----------------------------------------------------------------- bar --- */
  function bar(spec) {
    var W = 660, H = 290, L = 54, R = 20, T = 14, B = 54;
    var pw = W - L - R, ph = H - T - B;
    var n = spec.bars.length, ymax = spec.ymax || Math.max.apply(null, spec.bars.map(function (b) { return b.v; })) * 1.15;
    var step = pw / n, bw = Math.min(58, step * 0.6);
    var s = [], g;
    for (g = 0; g <= 4; g++) {
      var gv = ymax * g / 4;
      var y = T + (1 - gv / ymax) * ph;
      s.push('<line class="gridln" x1="' + L + '" y1="' + y + '" x2="' + (L + pw) + '" y2="' + y + '"/>');
      s.push('<text class="tk" x="' + (L - 9) + '" y="' + (y + 4) + '" text-anchor="end">' + Math.round(gv * 10) / 10 + "</text>");
    }
    spec.bars.forEach(function (b, i) {
      var cx = L + step * i + step / 2;
      var h = b.v / ymax * ph, y = T + ph - h;
      var col = SERIES[(b.group || 0) % SERIES.length];
      s.push('<rect x="' + (cx - bw / 2) + '" y="' + y + '" width="' + bw + '" height="' + h +
             '" rx="4" fill="' + col + '"/>');
      s.push('<text class="dlab" x="' + cx + '" y="' + (y - 7) + '" text-anchor="middle" fill="var(--ink-2)">' + b.v + "</text>");
      s.push('<text class="tk" x="' + cx + '" y="' + (T + ph + 17) + '" text-anchor="middle">' + esc(b.name) + "</text>");
    });
    s.push('<line class="axln" x1="' + L + '" y1="' + (T + ph) + '" x2="' + (L + pw) + '" y2="' + (T + ph) + '"/>');
    if (spec.ylabel) s.push('<text class="tk" x="12" y="' + (T + ph / 2) + '" transform="rotate(-90 12 ' + (T + ph / 2) + ')" text-anchor="middle">' + esc(spec.ylabel) + "</text>");
    var groups = spec.groups || [];
    var lg = groups.map(function (g2, i) {
      return '<b><i class="sq" style="background:' + SERIES[i % SERIES.length] + '"></i>' + esc(g2) + "</b>";
    }).join("");
    return frame(spec, '<svg viewBox="0 0 ' + W + " " + H + '" width="100%" role="img" aria-label="' +
      esc(spec.alt || spec.title || "bar chart") + '">' + s.join("") + "</svg>", lg);
  }

  /* ----------------------------------------------------------------- pie --- */
  /* Value-ordered single-hue ramp + a key + a direct % on every slice. */
  function pie(spec) {
    var data = spec.slices.slice().sort(function (a, b) { return b.v - a.v; });
    var total = data.reduce(function (a, b) { return a + b.v; }, 0);
    var W = 660, H = 300, cx = 150, cy = 150, r = 112;
    var s = [], ang = -Math.PI / 2;
    var steps = data.length;
    function lightness(i) {
      var t = steps === 1 ? 0.5 : i / (steps - 1);
      return 76 - t * 44;            /* 76% -> 32%, monotonic */
    }
    function ramp(i) { return "hsl(207 68% " + lightness(i).toFixed(1) + "%)"; }
    data.forEach(function (d, i) {
      var frac = d.v / total, a2 = ang + frac * Math.PI * 2;
      var x1 = cx + r * Math.cos(ang), y1 = cy + r * Math.sin(ang);
      var x2 = cx + r * Math.cos(a2), y2 = cy + r * Math.sin(a2);
      var large = frac > 0.5 ? 1 : 0;
      s.push('<path class="slice" d="M' + cx + " " + cy + " L" + x1.toFixed(1) + " " + y1.toFixed(1) +
             " A" + r + " " + r + " 0 " + large + " 1 " + x2.toFixed(1) + " " + y2.toFixed(1) + ' Z" fill="' + ramp(i) + '"/>');
      var mid = ang + frac * Math.PI, lr = r * 0.64;
      if (frac > 0.045) {
        s.push('<text x="' + (cx + lr * Math.cos(mid)).toFixed(1) + '" y="' + (cy + lr * Math.sin(mid) + 4).toFixed(1) +
               '" text-anchor="middle" style="font:700 13px system-ui;fill:' +
               (lightness(i) < 56 ? "#ffffff" : "#10243a") + '">' +
               Math.round(frac * 100) + "%</text>");
      }
      ang = a2;
    });
    /* the key — Unit 7's taught skill is reading it */
    var ky = 26;
    data.forEach(function (d, i) {
      s.push('<rect x="312" y="' + (ky - 10) + '" width="13" height="13" rx="3" fill="' + ramp(i) + '"/>');
      s.push('<text class="tk" x="333" y="' + ky + '" fill="var(--ink)">' + Math.round(d.v / total * 100) + "%  " + esc(d.name) + "</text>");
      ky += 24;
    });
    return frame(spec, '<svg viewBox="0 0 ' + W + " " + Math.max(H, ky + 12) + '" width="100%" role="img" aria-label="' +
      esc(spec.alt || spec.title || "pie chart") + '">' + s.join("") + "</svg>", "");
  }


  /* ------------------------------------------------------------ pie-pair --- */
  /* Two pies compared. The categories are fixed in ONE shared order and the
     colour is assigned by category, not by rank within each pie - otherwise
     the same category takes a different colour in each half and the comparison
     the chart exists for is destroyed. Both pies therefore draw in the same
     sequence, and one key serves both. */
  function piePair(spec) {
    var cats = spec.categories;
    var W = 660, R = 96, H = 2 * R + 128;
    function lightness(i) {
      var t = cats.length === 1 ? 0.5 : i / (cats.length - 1);
      return 76 - t * 44;
    }
    function ramp(i) { return "hsl(207 68% " + lightness(i).toFixed(1) + "%)"; }
    var s = [];
    [spec.left, spec.right].forEach(function (side, k) {
      var cx = k === 0 ? 168 : 492, cy = R + 34;
      var total = cats.reduce(function (acc, c) { return acc + side.values[c]; }, 0);
      var ang = -Math.PI / 2;
      s.push('<text x="' + cx + '" y="20" text-anchor="middle" class="dlab" fill="var(--ink)">' +
             esc(side.label) + "</text>");
      cats.forEach(function (c, i) {
        var frac = side.values[c] / total, a2 = ang + frac * Math.PI * 2;
        var x1 = cx + R * Math.cos(ang), y1 = cy + R * Math.sin(ang);
        var x2 = cx + R * Math.cos(a2), y2 = cy + R * Math.sin(a2);
        s.push('<path class="slice" d="M' + cx + " " + cy + " L" + x1.toFixed(1) + " " + y1.toFixed(1) +
               " A" + R + " " + R + " 0 " + (frac > 0.5 ? 1 : 0) + " 1 " + x2.toFixed(1) + " " + y2.toFixed(1) +
               ' Z" fill="' + ramp(i) + '"/>');
        var mid = ang + frac * Math.PI, lr = R * 0.64;
        /* 4%, not 6%: in a before/after pair the slice that has collapsed is
           usually the whole reason the chart exists, so it must keep its label. */
        if (frac > 0.04) {
          s.push('<text x="' + (cx + lr * Math.cos(mid)).toFixed(1) + '" y="' + (cy + lr * Math.sin(mid) + 4).toFixed(1) +
                 '" text-anchor="middle" style="font:700 12.5px system-ui;fill:' +
                 (lightness(i) < 56 ? "#ffffff" : "#10243a") + '">' + Math.round(frac * 100) + "%</text>");
        }
        ang = a2;
      });
    });
    /* one key, under both */
    var ky = 2 * R + 60, col = 0, kx = 24;
    cats.forEach(function (c, i) {
      s.push('<rect x="' + kx + '" y="' + (ky - 10) + '" width="12" height="12" rx="3" fill="' + ramp(i) + '"/>');
      s.push('<text class="tk" x="' + (kx + 18) + '" y="' + ky + '" fill="var(--ink)">' + esc(c) + "</text>");
      col++;
      if (col % 3 === 0) { kx = 24; ky += 21; } else { kx += 212; }
    });
    return frame(spec, '<svg viewBox="0 0 ' + W + " " + Math.max(H, ky + 16) + '" width="100%" role="img" aria-label="' +
      esc(spec.alt || spec.title || "paired pie charts") + '">' + s.join("") + "</svg>", "");
  }

  /* ------------------------------------------------------------- scatter --- */
  function scatter(spec) {
    var W = 660, H = 300, L = 54, R = 22, T = 14, B = 46;
    var pw = W - L - R, ph = H - T - B;
    var xmax = spec.xmax, ymax = spec.ymax;
    var ylog = !!spec.ylog, ymin = spec.ymin || 0.01;
    function X(v) { return L + v / xmax * pw; }
    function Y(v) {
      if (!ylog) return T + (1 - v / ymax) * ph;
      var lo = Math.log10(ymin), hi = Math.log10(ymax);
      var t = (Math.log10(Math.max(v, ymin)) - lo) / (hi - lo);
      return T + (1 - t) * ph;
    }
    function yTickVals() {
      if (!ylog) { return [0, 1, 2, 3, 4].map(function (g2) { return ymax * g2 / 4; }); }
      var out = [], e;
      for (e = Math.ceil(Math.log10(ymin)); e <= Math.log10(ymax) + 0.001; e++) out.push(Math.pow(10, e));
      return out;
    }
    var s = [], g;
    yTickVals().forEach(function (yv) {
      var y = Y(yv);
      s.push('<line class="gridln" x1="' + L + '" y1="' + y + '" x2="' + (L + pw) + '" y2="' + y + '"/>');
      s.push('<text class="tk" x="' + (L - 9) + '" y="' + (y + 4) + '" text-anchor="end">' +
             (yv >= 1 ? Math.round(yv) : yv) + "</text>");
    });
    for (g = 0; g <= 4; g++) {
      var x = L + pw * g / 4;
      s.push('<text class="tk" x="' + x + '" y="' + (T + ph + 17) + '" text-anchor="middle">' + Math.round(xmax * g / 4) + "</text>");
    }
    s.push('<line class="axln" x1="' + L + '" y1="' + (T + ph) + '" x2="' + (L + pw) + '" y2="' + (T + ph) + '"/>');
    spec.points.forEach(function (p) {
      s.push('<circle class="mk" cx="' + X(p.x) + '" cy="' + Y(p.y) + '" r="6" fill="' + SERIES[0] + '"/>');
      if (p.name) s.push('<text class="tk" x="' + (X(p.x) + 10) + '" y="' + (Y(p.y) + 4) + '">' + esc(p.name) + "</text>");
    });
    if (spec.xlabel) s.push('<text class="tk" x="' + (L + pw / 2) + '" y="' + (H - 4) + '" text-anchor="middle">' + esc(spec.xlabel) + "</text>");
    if (spec.ylabel) s.push('<text class="tk" x="12" y="' + (T + ph / 2) + '" transform="rotate(-90 12 ' + (T + ph / 2) + ')" text-anchor="middle">' + esc(spec.ylabel) + "</text>");
    return frame(spec, '<svg viewBox="0 0 ' + W + " " + H + '" width="100%" role="img" aria-label="' +
      esc(spec.alt || spec.title || "scatter plot") + '">' + s.join("") + "</svg>", "");
  }

  /* -------------------------------------------------------------- bubble --- */
  function bubble(spec) {
    var W = 660, H = 330;
    var max = Math.max.apply(null, spec.bubbles.map(function (b) { return b.v; }));
    var s = [];
    spec.bubbles.forEach(function (b) {
      var r = 16 + Math.sqrt(b.v / max) * 62;       /* area-proportional */
      s.push('<circle cx="' + b.x + '" cy="' + b.y + '" r="' + r.toFixed(1) + '" fill="' + SERIES[(b.g || 0) % 3] + '" opacity=".88"/>');
      s.push('<text x="' + b.x + '" y="' + (b.y - 3) + '" text-anchor="middle" font="600 12.5px system-ui" style="fill:#fff;font:600 12.5px system-ui">' + esc(b.name) + "</text>");
      s.push('<text x="' + b.x + '" y="' + (b.y + 14) + '" text-anchor="middle" style="fill:#fff;font:700 13px system-ui;opacity:.95">' + esc(b.label || b.v) + "</text>");
    });
    return frame(spec, '<svg viewBox="0 0 ' + W + " " + H + '" width="100%" role="img" aria-label="' +
      esc(spec.alt || spec.title || "bubble chart") + '">' + s.join("") + "</svg>", "");
  }


  /* ---------------------------------------------------------------- flow --- */
  /* A staged process, left to right, with arrows. Unit 4's form, and the one
     the book pairs with "reading insets and organisational charts". */
  function flow(spec) {
    var steps = spec.steps, n = steps.length;
    var W = 660, boxH = 62, gap = 20;
    var boxW = (W - gap * (n - 1) - 8) / n;
    var H = boxH + 54;
    var s = [];
    steps.forEach(function (st, i) {
      var x = 4 + i * (boxW + gap), y = 30;
      s.push('<rect x="' + x.toFixed(1) + '" y="' + y + '" width="' + boxW.toFixed(1) + '" height="' + boxH +
             '" rx="8" fill="var(--c1)" opacity="' + (0.35 + 0.65 * (i / Math.max(1, n - 1))).toFixed(2) + '"/>');
      s.push('<text x="' + (x + boxW / 2).toFixed(1) + '" y="' + (y - 9) +
             '" text-anchor="middle" class="tk" style="font-weight:700">' + (i + 1) + "</text>");
      var words = String(st.label).split(/\s+/), lines = [], cur = "";
      words.forEach(function (w) {
        if ((cur + " " + w).trim().length > Math.floor(boxW / 6.6)) { lines.push(cur.trim()); cur = w; }
        else cur += " " + w;
      });
      if (cur.trim()) lines.push(cur.trim());
      lines.slice(0, 3).forEach(function (ln, j) {
        s.push('<text x="' + (x + boxW / 2).toFixed(1) + '" y="' + (y + boxH / 2 - (lines.length - 1) * 7 + j * 14 + 4).toFixed(1) +
               '" text-anchor="middle" style="fill:#fff;font:600 11.5px system-ui">' + esc(ln) + "</text>");
      });
      if (i < n - 1) {
        var ax = x + boxW + 3, ay = y + boxH / 2;
        s.push('<path d="M' + ax + ' ' + ay + ' h' + (gap - 10) + '" stroke="var(--rule-2)" stroke-width="2"/>');
        s.push('<path d="M' + (ax + gap - 10) + ' ' + ay + ' l-6 -4 v8 z" fill="var(--rule-2)"/>');
      }
    });
    return frame(spec, '<svg viewBox="0 0 ' + W + " " + H + '" width="100%" role="img" aria-label="' +
      esc(spec.alt || spec.title || "flow chart") + '">' + s.join("") + "</svg>", "");
  }


  /* -------------------------------------------------------- compare-table --- */
  /* A table built for comparison rather than lookup. `better` says, per column,
     whether a low or a high value wins ("low", "high", or null for columns that
     are not rankable), and the winner in each rankable column is marked. The
     marking is deliberate: an unmarked comparison table asks the reader to do
     arithmetic in their head, and most readers do not. */
  function compareTable(spec) {
    var f = E("div", "fig");
    if (spec.title) f.appendChild(E("h4", null, spec.title));
    if (spec.sub) f.appendChild(E("p", "sub", spec.sub));
    var t = E("table", "sf cmp");
    if (spec.caption) { var cp = doc.createElement("caption"); cp.textContent = spec.caption; t.appendChild(cp); }

    var better = spec.better || [];
    var nums = spec.cols.map(function (_, c) {
      if (!better[c]) return null;
      var vals = spec.rows.map(function (r) {
        var m = String(r[c]).replace(/[^0-9.\-]/g, "");
        return m === "" ? null : parseFloat(m);
      });
      var real = vals.filter(function (v) { return v !== null && !isNaN(v); });
      if (!real.length) return null;
      var win = better[c] === "low" ? Math.min.apply(null, real) : Math.max.apply(null, real);
      return vals.map(function (v) { return v === win; });
    });

    var html = "<tr>" + spec.cols.map(function (c, i) {
      return "<th>" + esc(c) + (better[i] ? ' <span class="arrow">' +
        (better[i] === "low" ? "lower is better" : "higher is better") + "</span>" : "") + "</th>";
    }).join("") + "</tr>";
    html += spec.rows.map(function (r, ri) {
      return "<tr>" + r.map(function (cell, ci) {
        var win = nums[ci] && nums[ci][ri];
        if (ci === 0) return "<td><b>" + esc(cell) + "</b></td>";
        return "<td" + (win ? ' class="win"' : "") + ">" + esc(cell) + (win ? " \u2714" : "") + "</td>";
      }).join("") + "</tr>";
    }).join("");
    t.innerHTML += html;
    f.appendChild(t);
    if (spec.note) f.appendChild(E("p", "src", spec.note));
    if (spec.source) f.appendChild(E("p", "src", "Source: " + spec.source));
    return f;
  }

  /* --------------------------------------------------------------- table --- */
  function table(spec) {
    var f = E("div", "fig");
    if (spec.title) f.appendChild(E("h4", null, spec.title));
    if (spec.sub) f.appendChild(E("p", "sub", spec.sub));
    var t = E("table", "sf");
    if (spec.caption) { var cp = doc.createElement("caption"); cp.textContent = spec.caption; t.appendChild(cp); }
    var h = "<tr>" + spec.cols.map(function (c) { return "<th>" + esc(c) + "</th>"; }).join("") + "</tr>";
    var b = spec.rows.map(function (r) {
      return "<tr>" + r.map(function (c, i) {
        return i === 0 ? "<td><b>" + esc(c) + "</b></td>" : "<td>" + esc(c) + "</td>"; }).join("") + "</tr>";
    }).join("");
    t.innerHTML += h + b;
    f.appendChild(t);
    if (spec.source) f.appendChild(E("p", "src", "Source: " + spec.source));
    return f;
  }

  var KINDS = { line: line, bar: bar, pie: pie, "pie-key": pie, scatter: scatter,
                bubble: bubble, table: table, flow: flow,
                "pie-pair": piePair, "compare-table": compareTable };

  root.Charts = {
    make: function (spec) {
      var fn = KINDS[spec.kind];
      if (!fn) { var e = E("p", null, "Unknown chart kind: " + spec.kind); return e; }
      return fn(spec);
    },
    kinds: Object.keys(KINDS)
  };
})(window, document);

/* chartread — a data visual plus items, at least one of which cannot be
   answered from prose alone. Step Forward's "Talk it over" step. */
(function (root) {
  "use strict";
  var D = root.Deck;
  if (!D) return;
  D.register("chartread", function (stage, spec, api) {
    var cols = D.E("div", "cols");
    var left = D.E("div");
    left.appendChild(root.Charts.make(spec.chart));
    cols.appendChild(left);
    if (spec.note) { var n = api.note(spec.note); if (n) cols.appendChild(n); }
    stage.appendChild(cols);

    var host = D.E("div");
    host.style.marginTop = "14px";
    stage.appendChild(host);

    var graders = [];
    (spec.items || []).forEach(function (it, i) {
      var h = D.E("p", "item");
      h.innerHTML = "<span class='n'>" + (i + 1) + ".</span> " + it.q;
      host.appendChild(h);
      var sub = D.E("div");
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
        html: miss.length ? "<p>Read it off the chart again:</p>" + api.fbList(miss)
                          : "<p>Read straight off the chart.</p>"
      };
    };
  });
})(window);
