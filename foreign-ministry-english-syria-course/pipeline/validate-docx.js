// Check #18: open a built .docx as Word would. Usage: node validate-docx.js <file.docx>...
const { execFileSync } = require('child_process');
const fs = require('fs'), os = require('os'), path = require('path');
let faults = 0;
process.argv.slice(2).forEach(file => {
  const base = path.basename(file);
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'dv-'));
  try {
    execFileSync('unzip', ['-qo', file, '-d', dir]);
    const parts = execFileSync('find', [dir, '-type', 'f'], { encoding: 'utf8' }).trim().split('\n');
    const bad = [];
    // 1 · every part that must be XML must parse
    parts.filter(p => /\.(xml|rels)$/.test(p)).forEach(p => {
      try { execFileSync('python3', ['-I', '-c', `import xml.dom.minidom;xml.dom.minidom.parse(${JSON.stringify(p)})`]); }
      catch (e) { bad.push('XML will not parse: ' + p.replace(dir + '/', '')); }
    });
    // 2 · every media part must have a real extension
    const media = parts.filter(p => p.includes('/word/media/'));
    const ct = fs.readFileSync(path.join(dir, '[Content_Types].xml'), 'utf8');
    // ⚠ attribute ORDER is not guaranteed in OOXML: <Default ContentType=".." Extension=".."/>
    // is as legal as the reverse. A regex that assumes one order reports a correct file as broken,
    // which this check did on its first run. Match the attribute wherever it sits in the tag.
    const defaults = [...ct.matchAll(/<Default\b[^>]*>/g)]
      .map(t => (t[0].match(/Extension="([^"]+)"/) || [])[1])
      .filter(Boolean).map(x => x.toLowerCase());
    media.forEach(m => {
      const ext = (m.split('.').pop() || '').toLowerCase();
      if (!ext || ext === 'undefined') bad.push('media part has no extension (Word will refuse the file): ' + path.basename(m));
      else if (!defaults.includes(ext)) bad.push(`media .${ext} has no Default in [Content_Types].xml: ` + path.basename(m));
    });
    // 3 · every r:embed must resolve to a relationship
    const doc = fs.readFileSync(path.join(dir, 'word/document.xml'), 'utf8');
    const rels = fs.readFileSync(path.join(dir, 'word/_rels/document.xml.rels'), 'utf8');
    [...new Set([...doc.matchAll(/r:embed="([^"]+)"/g)].map(m => m[1]))].forEach(id => {
      if (!rels.includes(`Id="${id}"`)) bad.push('image relationship ' + id + ' is not declared');
    });
    // 4 · consecutive paragraphs with IDENTICAL borders.
    // Word and LibreOffice merge these into one bordered block and draw the border once, so a
    // run of five identical ruled lines prints as a single rule under a one-inch gap. This
    // shipped silently through every structural check until a rendered page was looked at.
    const paras = [...doc.matchAll(/<w:p\b[^>]*>[\s\S]*?<\/w:p>/g)].map(m => m[0]);
    let prevBdr = null, runLen = 0, worst = 0;
    paras.forEach(par => {
      const b = (par.match(/<w:pBdr>[\s\S]*?<\/w:pBdr>/) || [null])[0];
      if (b && b === prevBdr) { runLen++; worst = Math.max(worst, runLen); }
      else runLen = b ? 1 : 0;
      prevBdr = b;
    });
    if (worst > 1) bad.push(`${worst + 1} consecutive paragraphs share an identical border — they will print as ONE rule`);

    // 5 · required parts
    ['word/document.xml', 'word/styles.xml', '[Content_Types].xml', '_rels/.rels'].forEach(r => {
      if (!fs.existsSync(path.join(dir, r))) bad.push('missing required part: ' + r);
    });
    if (bad.length) { console.log('  ✗ ' + base); bad.forEach(b => console.log('      ' + b)); faults += bad.length; }
    else console.log(`  ok ${base}  (${media.length} image part(s), all typed and declared)`);
  } finally { fs.rmSync(dir, { recursive: true, force: true }); }
});
console.log(faults ? `${faults} fault(s)` : 'all files would open in Word');
process.exit(faults ? 1 : 0);
