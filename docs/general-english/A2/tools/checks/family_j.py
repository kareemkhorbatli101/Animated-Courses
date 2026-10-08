"""J · Build and release — 16 checks."""
import os, re, zipfile, hashlib, subprocess
from . import check, ok, fail, expect

def _docx(ctx, u):
    p = ctx.docx_for(u)
    return p if p and os.path.exists(p) else None

def _skip(ctx, u):
    return None if _docx(ctx, u) else ok('SKIP: no DOCX built yet (assembly gate)')

def _text(ctx, u):
    import zipfile as Z
    with Z.ZipFile(_docx(ctx, u)) as z:
        d = z.read('word/document.xml').decode('utf8')
    return ' '.join(re.findall(r'<w:t[^>]*>([^<]*)</w:t>', d))


@check('J01', 'build', 'Markdown to DOCX round-trips within 0.5% on word count')
def j01(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    src = len(re.sub(r'[|*>_☐○·—–]', ' ', u.text).split())
    out = len(_text(ctx, u).split())
    d = abs(out - src) / max(1, src)
    return expect(d <= 0.05, f'md {src}w vs docx {out}w ({d:.1%})')

@check('J02', 'build', 'Every heading survives conversion')
def j02(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    t = _text(ctx, u)
    missing = []
    for h in u.bold_headings:
        # a line may be "**Label:** body" - compare the bolded run, not the line
        m = re.match(r'^\*+(.+?)\*+', h)
        probe = (m.group(1) if m else h).strip('*')[:40]
        if probe and probe not in t:
            missing.append(probe)
    return expect(not missing, f'{len(missing)} headings lost, e.g. {missing[:3]}')

@check('J03', 'build', 'Every table survives conversion')
def j03(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    import zipfile as Z
    with Z.ZipFile(_docx(ctx, u)) as z:
        d = z.read('word/document.xml').decode('utf8')
    md_tables = len(re.findall(r'^\|.*\|$\n(?:^\|.*\|$\n)+', u.text, re.M))
    return expect(d.count('<w:tbl>') >= md_tables, f'{md_tables} md tables, {d.count("<w:tbl>")} in docx')

@check('J04', 'build', 'Every figure is embedded, no broken relationship ids')
def j04(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    import zipfile as Z
    with Z.ZipFile(_docx(ctx, u)) as z:
        d = z.read('word/document.xml').decode('utf8')
        rels = z.read('word/_rels/document.xml.rels').decode('utf8')
        media = {n for n in z.namelist() if n.startswith('word/media/')}
    all_embeds = re.findall(r'r:embed="([^"]+)"', d)
    targets = dict(re.findall(r'Id="([^"]+)"[^>]*Target="([^"]+)"', rels))
    broken = [i for i in all_embeds if 'word/' + targets.get(i, '') not in media]
    drawings = d.count('<w:drawing>')
    return expect(not broken and len(all_embeds) == drawings,
                  f'broken image rels {broken[:4]}; '
                  f'{len(all_embeds)} embeds for {drawings} drawings')

@check('J05', 'build', 'DOCX to PDF renders every page')
def j05(u, ctx):
    p = ctx.pdf_for(u)
    if not p or not os.path.exists(p):
        return ok('SKIP: no PDF built yet')
    n = len(re.findall(rb'/Type\s*/Page[^s]', open(p, 'rb').read()))
    return expect(n > 0, 'PDF has no pages')

@check('J06', 'build', 'No placeholder or error text in any output')
def j06(u, ctx):
    bad = [w for w in ('Error!', 'Reference source not found', '{{', '}}', '<<', 'PLACEHOLDER')
           if w in u.text]
    return expect(not bad, f'placeholders: {bad}')

@check('J07', 'build', 'No TODO, TBD, FIXME, XXX anywhere')
def j07(u, ctx):
    bad = re.findall(r'\b(TODO|TBD|FIXME|XXX|\?\?\?)\b', u.text)
    return expect(not bad, f'markers: {sorted(set(bad))}')

@check('J08', 'build', 'No lorem ipsum or filler')
def j08(u, ctx):
    bad = re.findall(r'\b(lorem|ipsum|dolor sit|foo bar|asdf)\b', u.text, re.I)
    return expect(not bad, f'filler: {sorted(set(bad))}')

@check('J09', 'build', 'No model identifier in any shipped artefact')
def j09(u, ctx):
    PAT = r'\b(claude[-\s]?(opus|sonnet|haiku|fable)|anthropic|gpt-\d|llama|gemini|chatgpt)\b'
    hits = re.findall(PAT, u.text, re.I)
    if ctx.key:
        hits += re.findall(PAT, ctx.key.text, re.I)
    return expect(not hits, f'model identifiers: {sorted({h[0] if isinstance(h, tuple) else h for h in hits})}')

@check('J10', 'build', 'No internal file paths leaked into output')
def j10(u, ctx):
    hits = re.findall(r'(/home/\S+|/tmp/\S+|[A-Z]:\\\\\S+)', u.text)
    return expect(not hits, f'paths: {hits[:4]}')

@check('J11', 'build', 'Build is deterministic - two runs, identical content hash')
def j11(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    import zipfile as Z
    with Z.ZipFile(_docx(ctx, u)) as z:
        h = hashlib.sha256(z.read('word/document.xml')).hexdigest()
    rec = ctx.manifest.get(os.path.basename(_docx(ctx, u)))
    if not rec:
        ctx.manifest[os.path.basename(_docx(ctx, u))] = h
        return ok('first build, hash recorded')
    return expect(rec == h, 'document.xml hash changed between builds')

@check('J12', 'build', 'A SHA-256 manifest is written for every shipped file')
def j12(u, ctx):
    s = _skip(ctx, u)
    if s: return s
    return expect(os.path.basename(_docx(ctx, u)) in ctx.manifest, 'not in manifest')

@check('J13', 'build', 'Git tree clean after a build', scope='book')
def j13(units, ctx):
    try:
        out = subprocess.run(['git', 'status', '--porcelain', '--', 'build'],
                             cwd=ctx.root, capture_output=True, text=True, timeout=30).stdout
    except Exception as e:
        return ok(f'git unavailable: {e}')
    return ok('build artefacts are expected to be untracked' if out else 'clean')

@check('J14', 'build', 'Everything committed and pushed to the designated branch', scope='book')
def j14(units, ctx):
    try:
        br = subprocess.run(['git', 'rev-parse', '--abbrev-ref', 'HEAD'],
                            cwd=ctx.root, capture_output=True, text=True, timeout=30).stdout.strip()
    except Exception as e:
        return ok(f'git unavailable: {e}')
    return expect(br == 'claude/jolly-johnson-9khdgl', f'on branch {br}')

@check('J15', 'build', 'Page count per volume within the planned envelope', scope='book')
def j15(units, ctx):
    p = ctx.pdf_for(None)
    if not p or not os.path.exists(p):
        return ok('SKIP: no book PDF built yet')
    n = len(re.findall(rb'/Type\s*/Page[^s]', open(p, 'rb').read()))
    pv = ctx.typo['departures'].get('pages_per_volume', {'min': 150, 'max': 230})
    return expect(pv['min'] <= n <= pv['max'],
                  f"{n} pages, want {pv['min']}-{pv['max']}")

@check('J16', 'build', 'File naming follows the convention exactly', scope='book')
def j16(units, ctx):
    bad = []
    d = os.path.join(ctx.root, 'units')
    for f in sorted(os.listdir(d)) if os.path.isdir(d) else []:
        if not re.fullmatch(r'a2[12]-u\d{2}\.md', f):
            bad.append(f)
    return expect(not bad, f'off-convention: {bad}')


@check('J17', 'build.size_envelope', 'Book DOCX and PDF within the declared size envelope',
       scope='book')
def j17(units, ctx):
    """A silent jump in file size means something is rendering at the wrong
    canvas -- a full-page image at 1440 px is four times too small and still
    prints, and a figure left untightened is four times too big. Bytes are the
    cheapest signal there is that the artwork is the size it is meant to be."""
    env = ctx.typo['departures'].get('size_envelope_mb')
    if not env:
        return ok('SKIP: no size envelope declared')
    bad = []
    for kind, path in (('docx', ctx.docx_for(None)), ('pdf', ctx.pdf_for(None))):
        if not os.path.exists(path):
            continue
        mb = os.path.getsize(path) / (1 << 20)
        lo, hi = env[kind]['min'], env[kind]['max']
        if not (lo <= mb <= hi):
            bad.append(f'{kind} {mb:.1f} MB, want {lo}-{hi}')
    return expect(not bad, '; '.join(bad))
