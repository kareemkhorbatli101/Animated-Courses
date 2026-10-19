// Proactive English — shared docx builder library
const fs = require('fs');
const d = require('docx');
const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType, ShadingType,
  HeadingLevel, AlignmentType, LevelFormat, PageBreak, BorderStyle, Footer, Header, PageNumber } = d;

const FONT = 'Calibri';
const W = 9906; // A4 portrait, 1000 DXA margins
const C = { navy: '1F3864', teal: '0F6E6E', orange: 'C55A11', grey: 'F2F2F2', lteal: 'E2F0EF', lorange: 'FBE5D6', lblue: 'DEEAF6', lyellow: 'FFF2CC' };

function runs(t, o = {}) {
  // o.raw: no markup parsing, monospace — for code and for showing the markup itself
  if (o.raw) return [new TextRun({ text: String(t), font: 'Consolas', size: o.size || 18, color: o.color || '1F1F1F' })];
  // **bold**, _italic_
  // nesting-aware: **bold**, _italic_, ~~strike~~ may be nested inside one another
  const out = [];
  const parse = (str, st) => {
    String(str).split(/(\*\*[^*]+\*\*|~~[^~]+~~|`[^`]+`|(?<![_\w])_[^_\s](?:[^_]*[^_\s])?_(?![_\w]))/g).filter(Boolean).forEach(s => {
      if (s.startsWith('`') && s.endsWith('`') && s.length > 2) parse(s.slice(1, -1), { ...st, mono: true });
      else if (s.startsWith('~~') && s.endsWith('~~') && s.length > 4) parse(s.slice(2, -2), { ...st, strike: true });
      else if (s.startsWith('**') && s.endsWith('**') && s.length > 4) parse(s.slice(2, -2), { ...st, bold: true });
      else if (s.startsWith('_') && s.endsWith('_') && s.length > 2) parse(s.slice(1, -1), { ...st, italics: true });
      else out.push(new TextRun({
        text: s,
        font: st.mono ? 'Consolas' : FONT,
        size: st.mono ? (o.size ? o.size - 2 : 20) : (o.size || 22),
        color: o.color, bold: st.bold, italics: st.italics, strike: st.strike
      }));
    });
  };
  parse(t, { bold: o.bold, italics: o.italics });
  return out;
}
const p = (t, o = {}) => new Paragraph({ spacing: { after: o.after ?? 100 }, alignment: o.align, indent: o.indent ? { left: o.indent } : undefined, children: runs(t, o) });
const h1 = t => new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 120, after: 160 }, children: [new TextRun({ text: t, font: FONT })] });
const h2 = t => new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 240, after: 120 }, children: [new TextRun({ text: t, font: FONT })] });
const h3 = t => new Paragraph({ heading: HeadingLevel.HEADING_3, spacing: { before: 200, after: 80 }, children: [new TextRun({ text: t, font: FONT })] });
const pb = () => new Paragraph({ children: [new PageBreak()] });
const sp = (n = 60) => new Paragraph({ spacing: { after: n }, children: [] });

// Stage label: e.g. stage('3R', 'Perform', 5)
const stage = (code, title, min) => new Paragraph({
  spacing: { before: 200, after: 80 }, keepNext: true,
  border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: C.teal, space: 2 } },
  children: [
    new TextRun({ text: ` ${code} `, bold: true, color: 'FFFFFF', shading: { type: ShadingType.CLEAR, fill: C.teal, color: 'auto' }, font: FONT, size: 22 }),
    new TextRun({ text: `  ${title}`, bold: true, color: C.teal, font: FONT, size: 24 }),
    ...(min ? [new TextRun({ text: `   (${min} min)`, color: '7F7F7F', font: FONT, size: 18 })] : [])
  ]
});
// Lesson banner
const lesson = t => new Table({
  width: { size: W, type: WidthType.DXA }, columnWidths: [W],
  rows: [new TableRow({ children: [new TableCell({
    width: { size: W, type: WidthType.DXA }, shading: { type: ShadingType.CLEAR, fill: C.navy, color: 'auto' },
    margins: { top: 60, bottom: 60, left: 120, right: 120 },
    borders: none(),
    children: [new Paragraph({ children: [new TextRun({ text: t, bold: true, color: 'FFFFFF', font: FONT, size: 24 })] })]
  })] })]
});
function none() { const n = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' }; return { top: n, bottom: n, left: n, right: n }; }
const thin = { style: BorderStyle.SINGLE, size: 4, color: 'A6A6A6' };
const all = { top: thin, bottom: thin, left: thin, right: thin };

// Shaded box with title and lines (strings or Paragraph/Table)
function box(title, items, fill = C.lteal, titleColor = C.teal) {
  const kids = [];
  if (title) kids.push(new Paragraph({ spacing: { after: 80 }, children: [new TextRun({ text: title, bold: true, color: titleColor, font: FONT, size: 22 })] }));
  items.forEach(it => kids.push(typeof it === 'string' ? p(it, { after: 60 }) : it));
  return new Table({
    width: { size: W, type: WidthType.DXA }, columnWidths: [W],
    rows: [new TableRow({ cantSplit: true, children: [new TableCell({
      width: { size: W, type: WidthType.DXA }, shading: { type: ShadingType.CLEAR, fill, color: 'auto' },
      margins: { top: 100, bottom: 100, left: 160, right: 160 },
      borders: { top: { style: BorderStyle.SINGLE, size: 6, color: titleColor }, bottom: { style: BorderStyle.SINGLE, size: 6, color: titleColor }, left: { style: BorderStyle.SINGLE, size: 6, color: titleColor }, right: { style: BorderStyle.SINGLE, size: 6, color: titleColor } },
      children: kids
    })] })]
  });
}

// Dialogue / audio script: lines = [[speaker, text], ...]
function dlg(track, lines, note) {
  const sw = 1700, tw = W - sw;
  const rows = [];
  if (track) rows.push(new TableRow({ children: [new TableCell({
    columnSpan: 2, width: { size: W, type: WidthType.DXA }, borders: none(),
    shading: { type: ShadingType.CLEAR, fill: C.lorange, color: 'auto' }, margins: { top: 40, bottom: 40, left: 120, right: 120 },
    children: [new Paragraph({ children: [new TextRun({ text: `🔊 ${track}`, bold: true, color: C.orange, font: FONT, size: 20 }), ...(note ? [new TextRun({ text: `   ${note}`, italics: true, color: '595959', font: FONT, size: 18 })] : [])] })]
  })] }));
  lines.forEach(([s, t]) => rows.push(new TableRow({ children: [
    new TableCell({ width: { size: sw, type: WidthType.DXA }, borders: none(), margins: { top: 30, bottom: 30, left: 120, right: 60 }, children: [new Paragraph({ children: [new TextRun({ text: s, bold: true, font: FONT, size: 22, color: C.navy })] })] }),
    new TableCell({ width: { size: tw, type: WidthType.DXA }, borders: none(), margins: { top: 30, bottom: 30, left: 60, right: 120 }, children: [p(t, { after: 0 })] })
  ] })));
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: [sw, tw], rows });
}

// Grid table
function table(head, rows, weights, o = {}) {
  const tot = weights.reduce((a, b) => a + b, 0);
  const widths = weights.map(w => Math.floor(W * w / tot));
  widths[widths.length - 1] += W - widths.reduce((a, b) => a + b, 0);
  const cell = (t, i, hdr) => new TableCell({
    borders: all, width: { size: widths[i], type: WidthType.DXA },
    shading: hdr ? { type: ShadingType.CLEAR, fill: o.headFill || C.teal, color: 'auto' } : undefined,
    margins: { top: 50, bottom: 50, left: 90, right: 90 },
    children: [new Paragraph({ children: hdr ? [new TextRun({ text: t, bold: true, color: 'FFFFFF', font: FONT, size: 20 })] : runs(t, { size: 20 }) })]
  });
  const r = [];
  if (head) r.push(new TableRow({ tableHeader: true, children: head.map((h, i) => cell(h, i, true)) }));
  rows.forEach(row => r.push(new TableRow({ children: row.map((c, i) => cell(c, i, false)) })));
  return new Table({ width: { size: W, type: WidthType.DXA }, columnWidths: widths, rows: r });
}
// Writing lines
function lines(n) {
  const a = [];
  for (let i = 0; i < n; i++) a.push(new Paragraph({ spacing: { before: 200, after: 0 }, border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'BFBFBF', space: 1 } }, children: [] }));
  return a;
}
const item = (n, t) => p(`**${n}**  ${t}`, { indent: 200, after: 60 });

function build(children, path, title) {
  const doc = new Document({
    creator: 'Mo (Mohamad Khorbatli)', title,
    styles: {
      default: { document: { run: { font: FONT, size: 22 } } },
      paragraphStyles: [
        { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 40, bold: true, color: C.navy, font: FONT }, paragraph: { outlineLevel: 0 } },
        { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 30, bold: true, color: C.orange, font: FONT }, paragraph: { outlineLevel: 1, keepNext: true } },
        { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: C.navy, font: FONT }, paragraph: { outlineLevel: 2, keepNext: true } },
      ]
    },
    numbering: { config: [{ reference: 'bul', levels: [{ level: 0, format: LevelFormat.BULLET, text: '•', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] }] },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1000, bottom: 1000, left: 1000, right: 1000 } } },
      headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [new TextRun({ text: title, size: 16, color: '7F7F7F', font: FONT })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: 'Proactive English · ', size: 16, font: FONT, color: '7F7F7F' }), new TextRun({ children: [PageNumber.CURRENT], size: 16, font: FONT, color: '7F7F7F' })] })] }) },
      children
    }]
  });
  return Packer.toBuffer(doc).then(b => { fs.writeFileSync(path, b); console.log('written', path); });
}
const bullet = t => new Paragraph({ numbering: { reference: 'bul', level: 0 }, spacing: { after: 60 }, children: runs(t) });

module.exports = { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, build, bullet, C, W };
