"""Assembles Al-Hasan International Student Book 2 into a .docx."""
import importlib, sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import art, frames as F
from art import NAVY, BLUE, ORANGE, GREEN, GREEN_D, PURPLE, GREY, NAVY_D, RED
from docxw import Doc

from cast import STRAP, HEAD_OFFICE, SPECIALISTS, PARTNERS, UNIT_TITLES

PART_NAMES = [
    ('Part 1  ·  Vocabulary and Terminology', None),
    ('Part 2  ·  Grammar', None),
    ('Part 3  ·  Listening and Dialogue', None),
    ('Part 4  ·  Speaking and Your Role', None),
    ('Part 5  ·  Extended Reading', None),
    ('Part 6  ·  Writing (a real email)', None),
    ('Part 7  ·  Trade-Skills Track', None),
    ('Part 8  ·  Consolidation', None),
    ('Part 9  ·  Case Studies and Decisions', None),
    ('Part 10  ·  Review and Can-Do', None),
    ('Part 11  ·  Foundations for Further Study', None),
]


# ---------------------------------------------------------------- renderer
def emit(d, blocks):
    for b in blocks:
        k = b[0]
        if k == 'fig':
            png, w, h = b[1]
            d.figure(png, w, h, b[2] if len(b) > 2 else None, half=(w < 900))
        elif k == 'bar':
            d.partbar(b[1], b[2])
        elif k == 'h3':
            d.h3(b[1])
        elif k == 'p':
            d.body_p(b[1])
        elif k == 'ex':
            d.ex(b[1])
        elif k == 'items':
            d.items(b[1], 1)
        elif k == 'items0':
            d.items(b[1], 0)
        elif k == 'lines':
            d.lines(b[1] if len(b) > 1 else 4)
        elif k == 'nlines':
            d.numbered_lines(b[1] if len(b) > 1 else 2)
        elif k == 'bank':
            d.wordbank(b[1], b[2])
        elif k == 'grid':
            d.grid(b[1], b[2] if len(b) > 2 else 4)
        elif k == 'watch':
            d.watchout(b[1])
        elif k == 'check':
            d.checklist(b[1])
        elif k == 'dlg':
            d.dialogue(b[1])
        else:
            raise ValueError('unknown block %r' % (k,))


def render_unit(d, U):
    d.unit_title('Unit %d: %s' % (U['n'], U['title']))
    d.strapline(STRAP)
    d.cefr('CEFR B1   ·   Grammar: %s   ·   Function: %s' % (U['grammar'], U['function']))
    d.cando_box(U['candos'])
    emit(d, U['blocks'])
    # study-terms strip closing Part 11
    terms = [t for t, _ in U['terms']]
    rows = [terms[i:i + 6] for i in range(0, len(terms), 6)]
    d.wordbank('Study terms:', [' · '.join(r) for r in rows])
    # the two closing cards
    nxt = ('Next → Unit %d: %s' % (U['n'] + 1, UNIT_TITLES[U['n']])
           if U['n'] < 10 else 'Next → Answer Keys · Glossary · Irregular Verbs')
    png, w, h = F.end_card(U['n'], U['title'], U['cando_line'], nxt)
    d.figure(png, w, h)
    if U['n'] < 10:
        png, w, h = U['teaser']
        d.figure(png, w, h)
    d.page_break_section()


def render_key(d, U):
    d.keybar('Answer Key — Unit %d' % U['n'])
    for label, text in U['key']:
        d.keyline(label, text)


IRREGULARS = [
    ('be', 'was / were', 'been'), ('become', 'became', 'become'), ('begin', 'began', 'begun'),
    ('break', 'broke', 'broken'), ('bring', 'brought', 'brought'), ('build', 'built', 'built'),
    ('buy', 'bought', 'bought'), ('catch', 'caught', 'caught'), ('choose', 'chose', 'chosen'),
    ('come', 'came', 'come'), ('cost', 'cost', 'cost'), ('cut', 'cut', 'cut'),
    ('deal', 'dealt', 'dealt'), ('do', 'did', 'done'), ('draw', 'drew', 'drawn'),
    ('drive', 'drove', 'driven'), ('fall', 'fell', 'fallen'), ('feel', 'felt', 'felt'),
    ('find', 'found', 'found'), ('forget', 'forgot', 'forgotten'), ('get', 'got', 'got'),
    ('give', 'gave', 'given'), ('go', 'went', 'gone'), ('grow', 'grew', 'grown'),
    ('have', 'had', 'had'), ('hear', 'heard', 'heard'), ('hold', 'held', 'held'),
    ('keep', 'kept', 'kept'), ('know', 'knew', 'known'), ('lead', 'led', 'led'),
    ('leave', 'left', 'left'), ('lend', 'lent', 'lent'), ('let', 'let', 'let'),
    ('lose', 'lost', 'lost'), ('make', 'made', 'made'), ('mean', 'meant', 'meant'),
    ('meet', 'met', 'met'), ('pay', 'paid', 'paid'), ('put', 'put', 'put'),
    ('read', 'read', 'read'), ('rise', 'rose', 'risen'), ('run', 'ran', 'run'),
    ('say', 'said', 'said'), ('see', 'saw', 'seen'), ('sell', 'sold', 'sold'),
    ('send', 'sent', 'sent'), ('set', 'set', 'set'), ('show', 'showed', 'shown'),
    ('sign', 'signed', 'signed'), ('speak', 'spoke', 'spoken'), ('spend', 'spent', 'spent'),
    ('stand', 'stood', 'stood'), ('take', 'took', 'taken'), ('teach', 'taught', 'taught'),
    ('tell', 'told', 'told'), ('think', 'thought', 'thought'), ('understand', 'understood', 'understood'),
    ('win', 'won', 'won'), ('write', 'wrote', 'written'), ('rebuild', 'rebuilt', 'rebuilt'),
]


def build(out):
    d = Doc()
    # front cover
    d.figure(*F.cover_front(), cover=True)
    d.page_break_section(zero=True)
    # opening banner
    d.figure(*F.scene_banner(
        'Welcome back to Al-Hasan Holding Group',
        [('m', BLUE), ('m', GREEN_D)],
        ['“We buy abroad, and we sell', 'here at home in Syria.”'],
        'ONE GROUP, MANY COMPANIES',
        ['Bashak — trade and imports', 'Komosh — freight and customs',
         'Chemco — metals and fuels', 'Alten IL — retail trade',
         'Maham — construction']))
    units = []
    only = os.environ.get('UNITS')
    want = [int(x) for x in only.split(',')] if only else list(range(1, 11))
    for n in want:
        try:
            mod = importlib.import_module('content.u%02d' % n)
        except ModuleNotFoundError:
            print('  unit %d: not written yet, skipped' % n); continue
        units.append(mod.UNIT)
        render_unit(d, mod.UNIT)
        print('  unit %d: ok (%d body elements so far)' % (n, len(d.body)))

    # ---- back matter: irregular verbs
    d.unit_title('Irregular Verbs')
    d.strapline(STRAP)
    d.cefr('The sixty irregular verbs used in this book   ·   base form · past simple · past participle')
    d.figure(*F.icon_row('Three forms you need', 'PRESENT · PAST · PARTICIPLE',
                         [('doc', 'buy'), ('clock', 'bought'), ('tick', 'bought'),
                          ('globe', 'send'), ('truck', 'sent'), ('stamp', 'sent')]),
             caption='The three forms, for the present perfect and the passive.')
    d.body_p('Use the past simple (column 2) for a finished action with a time: '
             'We bought it last week. Use the past participle (column 3) after have / has '
             '(We have bought it) and in the passive (It was bought in May).')
    for i in range(0, len(IRREGULARS), 3):
        row = IRREGULARS[i:i + 3]
        d.keyline('', '      '.join('%s — %s — %s' % t for t in row))
    d.page_break_section()

    # ---- back matter: glossary
    d.unit_title('Glossary')
    d.strapline(STRAP)
    d.cefr('Every target term in Book 2, in alphabetical order, with the unit that teaches it')
    gl = []
    for U in units:
        for term, gloss in U['terms']:
            gl.append((term, gloss, U['n']))
    seen = {}
    for term, gloss, n in gl:
        key = term.lower()
        if key not in seen:
            seen[key] = (term, gloss, n)
    for term, gloss, n in sorted(seen.values(), key=lambda t: t[0].lower()):
        d.keyline('%s' % term, '(U%d)  %s' % (n, gloss))
    d.page_break_section()

    # ---- answer keys
    d.body.append('<w:p><w:pPr><w:spacing w:after="220" w:before="3400"/><w:jc w:val="center"/></w:pPr>'
                  '<w:r><w:rPr><w:b/><w:bCs/><w:color w:val="1A4A63"/><w:sz w:val="76"/>'
                  '<w:szCs w:val="76"/></w:rPr><w:t xml:space="preserve">Answer Keys</w:t></w:r></w:p>')
    d.body.append('<w:p><w:pPr><w:spacing w:after="120"/><w:jc w:val="center"/></w:pPr>'
                  '<w:r><w:rPr><w:i/><w:iCs/><w:color w:val="0F3145"/><w:sz w:val="28"/>'
                  '<w:szCs w:val="28"/></w:rPr><w:t xml:space="preserve">%s</w:t></w:r></w:p>'
                  % STRAP.replace('&', '&amp;'))
    d.body.append('<w:p><w:pPr><w:jc w:val="center"/></w:pPr>'
                  '<w:r><w:rPr><w:b/><w:bCs/><w:color w:val="C67B3A"/><w:sz w:val="26"/>'
                  '<w:szCs w:val="26"/></w:rPr><w:t xml:space="preserve">'
                  'Complete Course · Units 1–10</w:t></w:r></w:p>')
    d.page_break_section()
    for U in units:
        render_key(d, U)
        d.blank()
    d.page_break_section(zero=True)
    d.figure(*F.cover_back(), cover=True)
    d.save(out)
    return d, units


if __name__ == '__main__':
    out = sys.argv[1] if len(sys.argv) > 1 else 'AlHasan_International_StudentBook_2.docx'
    d, units = build(out)
    import zipfile
    z = zipfile.ZipFile(out)
    print('\nwrote %s  (%.1f MB, %d images, %d body elements)'
          % (out, os.path.getsize(out) / 1e6, len(d.images), len(d.body)))
