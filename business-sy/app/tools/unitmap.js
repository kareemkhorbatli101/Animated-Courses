/* unitmap.js — build ../UNIT-MAP.md from book.js and the data files.
 *
 * One page a teacher can read: what each unit teaches, which published
 * task sits on which page, and how many items each one carries. Generated
 * rather than written, for the same reason as the glossary: a hand-kept
 * map of a 84-page book is wrong within a week.
 *
 * Usage: node tools/unitmap.js [--check]
 */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.resolve(__dirname, "..");
const OUT  = path.join(ROOT, "..", "UNIT-MAP.md");

function run(file, pick) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  new vm.Script(fs.readFileSync(file, "utf8"), { filename: file }).runInContext(sandbox);
  return pick(sandbox.window);
}
const B      = run(path.join(ROOT, "assets", "book.js"),   w => w.BOOK);
const SPEC   = run(path.join(ROOT, "assets", "spec.js"),   w => w.SPEC);
const COURSE = run(path.join(ROOT, "assets", "course.js"), w => w.COURSE);

const L = [];
let scenesAll = 0, itemsAll = 0;

const rows = [];
B.UNITS.forEach(u => {
  const pages = [];
  B.BLOCKS.forEach(b => {
    const f = path.join(ROOT, u.id, "data", b.id + ".js");
    if (!fs.existsSync(f)) { pages.push(null); return; }
    const P = run(f, w => w.PAGE);
    const tasks = {};
    let n = 0;
    (P.scenes || []).forEach(s => {
      scenesAll++;
      if (s.task) { tasks[s.task] = (tasks[s.task] || 0) + (s.n || 0); }
      n += (s.n || 0);
    });
    itemsAll += n;
    pages.push({ block: b, objective: P.objective, scenes: (P.scenes || []).length, n: n, tasks: tasks });
  });
  rows.push({ u: u, pages: pages });
});

L.push(`# ${COURSE.title} — unit map`);
L.push("");
L.push(`CEFR band: **${COURSE.cefr.join(" to ")}**. Units: **${B.UNITS.length}**. ` +
       `Pages: **${rows.reduce((a, r) => a + r.pages.filter(Boolean).length, 0)}**. ` +
       `Scenes: **${scenesAll}**. Scored items: **${itemsAll}**.`);
L.push("");
L.push("**This file is generated.** Run `node tools/unitmap.js` from `business-sy/app`.");
L.push("");
L.push("Each unit runs over the same seven pages, and the item budget on each page is");
L.push("fixed by `assets/book.js`, not chosen per unit. The task names in the last");
L.push("column are the Cambridge Business English task types recorded in");
L.push("`assets/spec.js`, except `sentence-build`, `pronounce-pair` and `review`,");
L.push("which that file marks as this course's own.");
L.push("");
L.push("## The seven pages");
L.push("");
L.push("| Code | Page | Kind | Published task budget per unit |");
L.push("| --- | --- | --- | --- |");
B.BLOCKS.forEach(b => {
  const t = B.BUDGET2[b.id];
  const cell = Object.keys(t).map(k => `${k} \u00d7${t[k]}`).join(", ");
  L.push(`| \`${b.id}\` | ${b.name} | ${b.kind} | ${cell} |`);
});
L.push("");
L.push("---");
L.push("");

rows.forEach(r => {
  const u = r.u;
  L.push(`## Unit ${u.n} — ${u.title}`);
  L.push("");
  L.push(`**Field:** ${u.field}`);
  L.push("");
  L.push(`**Grammar:** ${u.grammar.join("; ")}  `);
  L.push(`**Word building:** ${u.affix || "\u2014 (this unit teaches phrasal verbs instead)"}  `);
  L.push(`**Pronunciation:** ${u.pron}  `);
  L.push(`**Chart:** ${u.chart}  `);
  L.push(`**At Work:** ${u.work}`);
  if (u.strategy) {
    L.push("");
    if (u.strategy.writing) L.push(`**Writing strategy:** ${u.strategy.writing}  `);
    if (u.strategy.reading) L.push(`**Reading strategy:** ${u.strategy.reading}`);
  }
  L.push("");
  L.push("| Page | Objective | Scenes | Items | Published tasks |");
  L.push("| --- | --- | --- | --- | --- |");
  r.pages.forEach(p => {
    if (!p) return;
    const t = Object.keys(p.tasks).sort()
      .map(k => `${k} ×${p.tasks[k]}${SPEC.published && SPEC.published(k) ? "" : " *"}`)
      .join(", ");
    L.push(`| \`${p.block.id}\` | ${p.objective} | ${p.scenes} | ${p.n} | ${t || "—"} |`);
  });
  L.push("");
});

L.push("---");
L.push("");
L.push("`*` marks a task type this course invented rather than one Cambridge");
L.push("publishes. `assets/spec.js` is the single place that distinction is recorded,");
L.push("and `tools/check.js` reads it, so a scene cannot quietly claim an authority");
L.push("the handbook does not give it.");
L.push("");

const out = L.join("\n");
if (process.argv.indexOf("--check") >= 0) {
  const have = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8") : "";
  if (have !== out) { console.log("✗ UNIT-MAP.md is stale — run node tools/unitmap.js"); process.exit(1); }
  console.log("UNIT-MAP.md is up to date");
  process.exit(0);
}
fs.writeFileSync(OUT, out);
console.log(`wrote UNIT-MAP.md — ${B.UNITS.length} units, ${scenesAll} scenes, ${itemsAll} items`);
