"""Records a hash of every passage, so that drift can be proved absent."""
import glob
import hashlib
import json
import os
import re
import sys

import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, 'data', 'manifest.json')


def fingerprint():
    out = {}
    for p in sorted(glob.glob(os.path.join(ROOT, 'data', 'passages', '*.yaml'))):
        for x in yaml.safe_load(open(p))['passages']:
            flat = re.sub(r'\s+', ' ', x['passage']).strip()
            out[x['id']] = {
                'passage': hashlib.sha256(flat.encode()).hexdigest()[:16],
                'title': x['title'],
                'vocab_link': sorted(x.get('vocab_link') or []),
                'words': len(flat.split()),
            }
    return out


def main():
    cur = fingerprint()
    if len(sys.argv) > 1 and sys.argv[1] == 'write':
        json.dump(cur, open(PATH, 'w'), indent=1, sort_keys=True)
        print('wrote %s, %d passages' % (PATH, len(cur)))
        return
    if not os.path.exists(PATH):
        print('no manifest; run: python3 tools/manifest.py write')
        sys.exit(1)
    old = json.load(open(PATH))
    bad = []
    for k in sorted(set(old) | set(cur)):
        if k not in old:
            bad.append('%s added' % k)
        elif k not in cur:
            bad.append('%s removed' % k)
        else:
            for f in ('passage', 'title', 'vocab_link', 'words'):
                if old[k][f] != cur[k][f]:
                    bad.append('%s %s changed' % (k, f))
    print('manifest: %d passages, %d differences' % (len(cur), len(bad)))
    for b in bad:
        print('  ' + b)
    sys.exit(1 if bad else 0)


if __name__ == '__main__':
    main()
