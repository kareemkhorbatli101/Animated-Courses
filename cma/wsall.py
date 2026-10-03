# -*- coding: utf-8 -*-
"""Generate, build, measure and check a run of chapters, end to end."""
import importlib
import os
import shutil
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)

import wsgen            # noqa: E402
import wscheck          # noqa: E402
import wslint           # noqa: E402
import gen              # noqa: E402

# Chapters 1 and 7 keep the figures drawn for them by hand, one idea each.
HAND = {
    1: ('wsfig1', ['quality_tree', 'beam', 'drcr_grid', 'accrual_timeline',
                   'rulemakers', 'articulation']),
    7: ('wsfig7', ['goods_tree', 'cost_split', 'cost_layers', 'rising_effects',
                   'error_years']),
}


def _fresh(mod):
    for m in list(sys.modules):
        if m == mod or m.startswith(mod + '.'):
            del sys.modules[m]
    shutil.rmtree(os.path.join(HERE, mod, '__pycache__'), ignore_errors=True)
    importlib.invalidate_caches()


def run(bk, chapters):
    rows = []
    for n in chapters:
        hand = HAND.get(n)
        mod = 'w%d_ch%02d' % (bk, n)
        hs, specs, cm, om = wsgen.build_chapter(
            bk, n, hand_figs=hand[1] if hand else None)
        wsgen.write_package(bk, n, hs, specs, cm, om,
                            hand=hand[0] if hand else None)
        _fresh(mod)
        import wsbuild
        importlib.reload(wsbuild)
        sp, kp, keys = wsbuild.build_handouts(mod)
        # write the measured page counts back, then build once more so the
        # running header prints the right total
        import wssync
        importlib.reload(wssync)
        wssync.sync(mod)
        _fresh(mod)
        importlib.reload(wsbuild)
        sp, kp, keys = wsbuild.build_handouts(mod)
        fills = [x for x in gen.measure(sp) if x > 0]
        first = [H['pages'] for H, _c in keys]
        bad = wscheck.check_chapter(mod, verbose=False)
        bad += ['layout: ' + x for x in wslint.lint(sp)]
        bad += ['layout(key): ' + x for x in wslint.lint(kp)]
        over = [round(x, 2) for x in fills if x > 0.95]
        bad += ['page fill %.2f is over the 0.95 ceiling' % x for x in over]
        rows.append((n, len(keys), sum(first), sum(c.i for _H, c in keys),
                     max(fills), over, bad))
    return rows


if __name__ == '__main__':
    chs = [int(x) for x in sys.argv[1:]] or [1, 2, 3, 4, 5, 6, 7]
    out = run(1, chs)
    print('%-4s %-9s %-7s %-7s %-7s %s'
          % ('ch', 'handouts', 'pages', 'items', 'worst', 'problems'))
    tot = 0
    for n, nh, pg, it, worst, over, bad in out:
        print('%-4d %-9d %-7d %-7d %-7.2f %s'
              % (n, nh, pg, it, worst,
                 ('%d' % len(bad)) if bad else 'none'))
        tot += len(bad)
        for b in bad[:6]:
            print('        ' + b)
    print('\n%s' % ('every chapter passes' if not tot
                    else '%d problems in all' % tot))
