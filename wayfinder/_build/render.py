import sys, os, json, subprocess
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

def render_all(items, outdir, scale=2):
    """items: list of (name, svg_or_html, width, height). Renders to PNG."""
    os.makedirs(outdir, exist_ok=True)
    manifest=[]
    for name, content, w, h in items:
        p=os.path.join(outdir, name+".html")
        open(p,"w",encoding="utf-8").write(
          '<!doctype html><meta charset="utf-8">'
          '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
          'family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,800'
          '&family=Inter:wght@400;500;600;700&display=swap">'
          '<style>html,body{margin:0;padding:0;background:#fff}'
          '#c{width:%dpx;%s}</style><div id="c">%s</div>'%(
             w, ('height:%dpx;overflow:hidden'%h) if h else 'display:inline-block', content))
        manifest.append(dict(name=name, path=p, w=w, h=h or 1400))
    open(os.path.join(outdir,"_manifest.json"),"w").write(json.dumps(manifest))
    js = os.path.join(outdir,"_shot.js")
    open(js,"w").write("""
const { chromium } = require('playwright');
const fs = require('fs');
const dir = process.argv[2], scale = Number(process.argv[3]||2);
(async () => {
  const man = JSON.parse(fs.readFileSync(dir+'/_manifest.json','utf8'));
  const b = await chromium.launch();
  const ctx = await b.newContext({ deviceScaleFactor: scale });
  const p = await ctx.newPage();
  let n=0;
  for (const it of man) {
    await p.setViewportSize({ width: it.w, height: it.h });
    await p.goto('file://'+it.path, { waitUntil:'load' });
    await p.evaluate(() => document.fonts ? document.fonts.ready : null);
    await p.waitForTimeout(90);
    await p.locator('#c').screenshot({ path: dir+'/'+it.name+'.png' });
    n++;
  }
  console.log('rendered '+n);
  await b.close();
})();
""")
    r=subprocess.run(["node", js, outdir, str(scale)], capture_output=True, text=True)
    print(r.stdout.strip() or r.stderr.strip()[:400])
    for it in manifest:
        try: os.remove(it["path"])
        except OSError: pass
    return [os.path.join(outdir, i["name"]+".png") for i in manifest]
