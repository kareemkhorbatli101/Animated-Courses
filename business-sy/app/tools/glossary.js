/* glossary.js — build ../GLOSSARY-AR.md from the course's own scenes.
 *
 * Every Arabic gloss a learner can see comes from one of two places in a
 * data file: a vocabulary card's `ar`, or an `explain.terms` entry's `ar`.
 * Nothing else in the engine renders Arabic for a term. This tool reads
 * both, in unit order, and writes one file.
 *
 * The file is not documentation. tools/check.js reads it back and fails
 * the gate if a scene shows an English term with an Arabic rendering the
 * glossary does not list, or if the same English term is given two
 * different Arabic renderings anywhere in the book. That is the whole
 * reason the file is generated rather than written by hand: a glossary
 * maintained separately from the scenes drifts from them silently, and a
 * learner meeting two Arabic words for one English term learns that the
 * Arabic cannot be trusted.
 *
 * Where one English word genuinely has two senses in this book - the
 * invoice sense of `outstanding` and the delivery-note sense - the entry
 * is split in the data file by naming the sense in the English headword,
 * not by letting one headword carry two glosses.
 *
 * Usage: node tools/glossary.js [--check]
 *   --check  compare with the file on disk and exit 1 if it is stale.
 */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.resolve(__dirname, "..");
const OUT  = path.join(ROOT, "..", "GLOSSARY-AR.md");

function load(file) {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  new vm.Script(fs.readFileSync(file, "utf8"), { filename: file }).runInContext(sandbox);
  return sandbox.window.PAGE;
}

const B = (() => {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  new vm.Script(fs.readFileSync(path.join(ROOT, "assets", "book.js"), "utf8")).runInContext(sandbox);
  return sandbox.window.BOOK;
})();

const COURSE = (() => {
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  new vm.Script(fs.readFileSync(path.join(ROOT, "assets", "course.js"), "utf8")).runInContext(sandbox);
  return sandbox.window.COURSE;
})();

/* en -> { ar, gloss, first, seen } */
const terms = new Map();
let scenes = 0, sightings = 0;
const clash = [];

function add(en, ar, gloss, where) {
  if (!en || !ar) return;
  const k = String(en).trim(), a = String(ar).trim();
  const g = (gloss ? String(gloss) : "").replace(/<[^>]+>/g, "").trim();
  sightings++;
  const prev = terms.get(k);
  if (!prev) { terms.set(k, { ar: a, gloss: g, first: where, seen: 1 }); return; }
  prev.seen++;
  if (prev.ar !== a) clash.push(`${k}: "${prev.ar}" at ${prev.first}, "${a}" at ${where}`);
  if (!prev.gloss && g) prev.gloss = g;
}

B.UNITS.forEach(u => {
  B.BLOCKS.forEach(b => {
    const f = path.join(ROOT, u.id, "data", b.id + ".js");
    if (!fs.existsSync(f)) return;
    const P = load(f);
    (P.scenes || []).forEach(s => {
      scenes++;
      const where = `${u.id}/${b.id}/${s.id}`;
      (s.cards || []).forEach(c => add(c.term, c.ar, c.meaning, where));
      if (s.explain && s.explain.terms)
        s.explain.terms.forEach(t => add(t.en, t.ar, t.gloss, where));
    });
  });
});

if (clash.length) {
  console.log("one English term, two Arabic renderings:");
  clash.forEach(c => console.log("  ✗ " + c));
  console.log("\nFix the data files, or split the headword by sense, then run this again.");
  process.exit(1);
}

/* unit of first appearance, for the column that tells a teacher where a
   word is introduced rather than where it happens to recur. */
function unitOf(where) { return where.split("/")[0]; }

const keys = [...terms.keys()].sort((a, b) =>
  a.toLowerCase().localeCompare(b.toLowerCase(), "en"));

const byUnit = {};
keys.forEach(k => {
  const u = unitOf(terms.get(k).first);
  (byUnit[u] = byUnit[u] || []).push(k);
});

const lines = [];
lines.push(`# ${COURSE.title} — Arabic glossary`);
lines.push("");
lines.push("Every Arabic word a learner can see in this course, in one place.");
lines.push("");
lines.push("**This file is generated.** Run `node tools/glossary.js` from");
lines.push("`business-sy/app` after changing any data file. `tools/check.js` reads it");
lines.push("back, so a scene that shows an Arabic gloss this file does not list fails");
lines.push("the gate. The glossary cannot drift from the course, because the course is");
lines.push("where it comes from.");
lines.push("");
lines.push("Two honest limits on what follows.");
lines.push("");
lines.push("The Arabic is Modern Standard Arabic, written to be read rather than");
lines.push("spoken, because that is what a Syrian learner reads in a contract, an");
lines.push("invoice and a tender document. Several of these terms have a different");
lines.push("everyday Levantine form, and where the business usage really is the");
lines.push("borrowed English word, the gloss says so rather than inventing a");
lines.push("replacement.");
lines.push("");
lines.push("These glosses were written as part of building the course and have **not**");
lines.push("been reviewed by a native-speaker translator or by a terminologist. They");
lines.push("are a working draft to be checked, not an authority to be cited. Where a");
lines.push("term is contested in Arabic business usage, the English gloss beside it is");
lines.push("the definition the course actually teaches.");
lines.push("");
lines.push(`Terms: **${keys.length}**. Sightings across the book: **${sightings}**, in ${scenes} scenes.`);
lines.push("");
lines.push("---");
lines.push("");
lines.push("## By unit of first appearance");
lines.push("");
B.UNITS.forEach(u => {
  const ks = byUnit[u.id];
  if (!ks || !ks.length) return;
  lines.push(`### Unit ${u.n} — ${u.title} (${ks.length} new)`);
  lines.push("");
  lines.push("| English | Arabic | What it means here | First at |");
  lines.push("| --- | --- | --- | --- |");
  ks.forEach(k => {
    const t = terms.get(k);
    lines.push(`| ${k} | ${t.ar} | ${t.gloss.replace(/\|/g, "\\|")} | ${t.first} |`);
  });
  lines.push("");
});
lines.push("---");
lines.push("");
lines.push("## Alphabetical index");
lines.push("");
lines.push("| English | Arabic | First at | Times shown |");
lines.push("| --- | --- | --- | --- |");
keys.forEach(k => {
  const t = terms.get(k);
  lines.push(`| ${k} | ${t.ar} | ${t.first} | ${t.seen} |`);
});
lines.push("");

const out = lines.join("\n");

if (process.argv.indexOf("--check") >= 0) {
  const have = fs.existsSync(OUT) ? fs.readFileSync(OUT, "utf8") : "";
  if (have !== out) { console.log("✗ GLOSSARY-AR.md is stale — run node tools/glossary.js"); process.exit(1); }
  console.log("GLOSSARY-AR.md is up to date (" + keys.length + " terms)");
  process.exit(0);
}

fs.writeFileSync(OUT, out);
console.log(`wrote ${path.relative(path.join(ROOT, ".."), OUT)} — ${keys.length} terms, ` +
            `${sightings} sightings, ${scenes} scenes`);
