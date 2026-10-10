"""Prints the passages of one field and level in the compact form authoring needs."""
import os
import sys

import yaml

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def main():
    field, level = sys.argv[1], int(sys.argv[2])
    d = yaml.safe_load(open(os.path.join(ROOT, 'data', 'passages',
                                         '%s-L%d.yaml' % (field, level))))
    only = sys.argv[3:] or None
    for x in d['passages']:
        if only and x['strand'] not in only:
            continue
        print('### %s  n=%s  %r  move=%s' % (x['id'], x.get('_n', ''), x['title'], x['move']))
        print('vocab_link: %s | sat_frame: %s' % (x.get('vocab_link'), x['sat_frame']))
        print('terms: %s' % '; '.join('%s = %s' % (t['term'], t['gloss'])
                                      for t in (x.get('terms') or [])))
        print('facts: %s' % ' | '.join(x.get('facts') or []))
        print(' '.join(x['passage'].split()))
        print()


if __name__ == '__main__':
    main()
