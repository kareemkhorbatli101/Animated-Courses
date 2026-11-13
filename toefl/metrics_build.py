"""Minimal TrueType reader: per-codepoint advance widths, in units per em."""
import struct

def _tables(b):
    n = struct.unpack('>H', b[4:6])[0]
    t = {}
    for i in range(n):
        off = 12 + 16 * i
        tag = b[off:off+4].decode('latin-1')
        o, l = struct.unpack('>II', b[off+8:off+16])
        t[tag] = (o, l)
    return t

def metrics(path):
    b = open(path, 'rb').read()
    t = _tables(b)
    ho, _ = t['head']; upem = struct.unpack('>H', b[ho+18:ho+20])[0]
    hho, _ = t['hhea']; nhm = struct.unpack('>H', b[hho+34:hho+36])[0]
    hmo, _ = t['hmtx']
    adv = []
    for i in range(nhm):
        adv.append(struct.unpack('>H', b[hmo+4*i:hmo+4*i+2])[0])
    co, _ = t['cmap']
    ntab = struct.unpack('>H', b[co+2:co+4])[0]
    best = None
    for i in range(ntab):
        pid, eid, off = struct.unpack('>HHI', b[co+4+8*i:co+4+8*i+8])
        if (pid, eid) in ((3, 10), (3, 1), (0, 3), (0, 4), (0, 6)):
            best = (pid, eid, co + off)
    pid, eid, so = best
    fmt = struct.unpack('>H', b[so:so+2])[0]
    cmap = {}
    if fmt == 4:
        segX2 = struct.unpack('>H', b[so+6:so+8])[0]
        seg = segX2 // 2
        ends = struct.unpack('>%dH' % seg, b[so+14:so+14+segX2])
        sp = so + 16 + segX2
        starts = struct.unpack('>%dH' % seg, b[sp:sp+segX2])
        dp = sp + segX2
        deltas = struct.unpack('>%dh' % seg, b[dp:dp+segX2])
        rp = dp + segX2
        ranges = struct.unpack('>%dH' % seg, b[rp:rp+segX2])
        for i in range(seg):
            for c in range(starts[i], min(ends[i], 0xFFFF) + 1):
                if ranges[i] == 0:
                    g = (c + deltas[i]) & 0xFFFF
                else:
                    gi = rp + 2*i + ranges[i] + 2*(c - starts[i])
                    if gi + 2 > len(b): continue
                    g = struct.unpack('>H', b[gi:gi+2])[0]
                    if g: g = (g + deltas[i]) & 0xFFFF
                if g: cmap[c] = g
    elif fmt == 12:
        ng = struct.unpack('>I', b[so+12:so+16])[0]
        for i in range(ng):
            s, e, gs = struct.unpack('>III', b[so+16+12*i:so+16+12*i+12])
            for c in range(s, e+1):
                cmap[c] = gs + (c - s)
    w = {}
    for c, g in cmap.items():
        w[c] = adv[g] if g < len(adv) else adv[-1]
    return upem, w

if __name__ == '__main__':
    import json, sys
    out = {}
    for name, path in [('reg','/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf'),
                       ('bold','/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'),
                       ('mono','/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf'),
                       ('monob','/usr/share/fonts/truetype/dejavu/DejaVuSansMono-Bold.ttf')]:
        try:
            upem, w = metrics(path)
            out[name] = dict(upem=upem, w={str(k): v for k, v in w.items()})
            print(name, 'upem', upem, 'glyphs', len(w))
        except Exception as e:
            print(name, 'FAILED', e)
    json.dump(out, open(sys.argv[1], 'w'))
