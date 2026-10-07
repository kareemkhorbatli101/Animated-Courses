"""A negative test for every non-gate check.

Each entry breaks a good unit (or key, or context, or artefact) in exactly the way
its check exists to catch. K15 asserts every non-gate check has one; K14 asserts
every exercisable one is actually caught.

kind:  'unit' | 'key' | 'ctx' | 'fig' | 'docx' | 'cover'
"""
import re

def U(old, new, n=1):
    def f(t):
        assert old in t, f'mutation anchor missing: {old[:50]!r}'
        return t.replace(old, new, n)
    return ('unit', f)

def URE(pat, new, n=1):
    def f(t):
        t2, k = re.subn(pat, new, t, count=n, flags=re.M)
        assert k, f'mutation regex matched nothing: {pat}'
        return t2
    return ('unit', f)

def K(old, new, n=1):
    def f(t):
        assert old in t, f'key anchor missing: {old[:50]!r}'
        return t.replace(old, new, n)
    return ('key', f)

def KRE(pat, new, n=1):
    def f(t):
        t2, k = re.subn(pat, new, t, count=n, flags=re.M)
        assert k, f'key regex matched nothing: {pat}'
        return t2
    return ('key', f)

def CTX(f):
    return ('ctx', f)

def FIG(f):
    return ('fig', f)

def DOCX(f):
    return ('docx', f)

def COVER(f):
    return ('cover', f)

APPEND = lambda s: ('unit', lambda t: t + '\n' + s + '\n')
KAPPEND = lambda s: ('key', lambda t: t + '\n' + s + '\n')

MUTATIONS = {
# ---------------------------------------------------------------- A structure
'A01': U('**Unit 1: People and Routines**', 'Unit 1 People and Routines'),
'A02': URE(r'^\*English for Daily Life.*$', '*A book*'),
'A03': U('**Warm Up**\n', '**Warm Upp**\n'),
'A04': U('**Warm-up: A Street of Neighbours**', '**Warm-ups: A Street of Neighbours**'),
'A05': U('**Part 3 · Listening**', '**Part 11 · Listening**'),
'A06': U('**Part 4 · Speaking**', '**Part 4 - Speaking**'),
'A07': U('***[CORE] Core track · in-class output***\n', ''),
'A08': U('***[CORE] Core track · in-class output***', '***[CORE] Core track · whenever***'),
'A09': U('**Part 1: Pronunciation**', '**Part 1x: Pronunciation**'),
'A10': U('**Part 2: Notice**', '**Part 2x: Notice**'),
'A11': U('**Part 3: In the Corner Shop**', '**Part 3x: In the Corner Shop**'),
'A12': U('**Part 4: Mini-Presentation**', '**Part 4x: Mini-Presentation**'),
'A13': U('**Part 5: Vocabulary in Context**', '**Part 5x: Vocabulary in Context**'),
'A14': U('**Part 6: Reflection — My Perfect Weekday (40–60 words)**', '**Part 6x: Reflection**'),
'A15': U('**7C: Controlled Practice — Meeting Someone New**', '**7Z: Controlled Practice**'),
'A16': U('**Part 8: Discussion**', '**Part 8: Debate**'),
'A17': U('**Part 9: Decision Task**', '**Part 9: Choice Task**'),
'A18': U('**Part 10: Can-Do**', '**Part 10: Self Check**'),
'A19': APPEND('**An extra heading**'),
'A20': U('**Part 5: Routines Around the World**', '**Part 5: Routines Around the World**\n\n**Part 5: One More**'),
'A21': APPEND('**Part 10: Afterword**'),
'A22': U('**Part 10: Can-Do**', '**Part 10: Zz**'),
'A23': U('**Part 3: In the Corner Shop**', '**Part 3: A Nurse Talks About His Week**'),
'A24': U('**Part 2: Notice**', '**Part 2: Notice**\n\n**A Stray Bold Heading**'),
'A25': U('**Part 6: Why Routines Matter (50–70 words)**', '**Part 5: Why Routines Matter (50–70 words)**'),
'A26': U('| | **Form** | **Use** | **Example** |', '| | **Shape** | **Why** | **Case** |'),
'A27': U('**7A: Phrase Bank**', '**7A: Word List**'),
'A28': URE(r'\(a\) knock on the door with a note, \(b\)', 'knock on the door with a note, or'),
'A29': U('**Part 5: Vocabulary in Context**', '**Part 5: Words**'),
'A30': U('**Part 1: Pronunciation**', '**Part 1: Sounds**'),

# ------------------------------------------------------------- B scaffolding
'B01': URE(r'^0\. ', '1. '),
'B02': U('One meaning is not needed. Write the letter.', 'Write the letter.'),
'B03': U('**Model — read this first:**\n', '', 2),
'B04': URE(r'(\*\*Model — read this first:\*\*\n\n)> .*', r'\1'),
'B05': U('Before you read:', 'Before reading:', 5),
'B06': U('Before you listen:', 'First:', 3),
'B07': U('**Check before you finish:**', '**Check:**', 5),
'B08': URE(r'\*\*Check before you finish:\*\* ☐ .*', '**Check before you finish:** ☐ done?'),
'B09': U('> **Word bank:**', '> Words:', 5),
'B10': U('> **Gloss:**', '> Note:', 4),
'B11': U('Useful language:', 'Language:', 5),
'B12': U('Model exchange:', 'Example:', 2),
'B13': U('*Stretch [PLUS]:', '*Stretch:', 2),
'B14': U('**Remember:**', '**Note:**'),
'B15': URE(r'✗ .*?✓ [^*]*\*[^*]*\*', 'Add -s for he/she/it.', 0),
'B16': U('→ Harvest:', 'Next:'),
'B17': U('Answer frame:', 'Frame:'),
'B18': U('**7A: Phrase Bank**', '**7A: Openers**'),
'B19': U('Discussion frames:', 'Frames:'),
'B20': U('**Plan (fill in, then write):**', '**Outline:**', 2),
'B21': U('**🔊 Audio Track 1.1**\n', ''),
'B22': U('**Model — read this first:**', '**Model - read this first:**', 1),

# -------------------------------------------------------------- C exercises
'C01': U('**Column B**\n\n| | |\n|---|---|\n| **a)** | a person you work with |', '**Column C**'),
'C02': U('| **f)** | a person who shares your home |\n', '', 1),
'C03': U('Match the words with their meanings. One meaning is not needed. Write the letter.',
         'Match the words with their meanings. Write the letter.'),
'C04': K('1. c · 2. f · 3. a · 4. e · 5. b', '1. c · 2. f · 3. a · 4. e · 5. c'),
'C05': K('1. d · 2. a · 3. b · 4. f · 5. e', '1. d · 2. d · 3. b · 4. f · 5. e'),
'C07': U('> ○ D) In six different cities\n', ''),
'C08': U('> ○ C) In a bookshop', '> ○ E) In a bookshop'),
'C09': K('1. **B)** At 14 Alder Street · 2. **A)** Opening her shop',
         '1. **F)** At 14 Alder Street · 2. **A)** Opening her shop'),
'C10': KRE(r'\*\*[A-D]\)\*\*', '**A)**', 40),
'C12': K('1. **B)** neighbour · 2. **C)** commute · 3. **A)** appointment',
         '1. **B)** neighbour · 2. **B)** commute · 3. **A)** appointment'),
'C11': ('needs_units', 2),
'C14': URE(r'> \*\*Word bank:\*\* routine \| shift \| flatmate \| appointment \| present continuous \| present simple \| neighbour \| usually',
           '> **Word bank:** routine | shift | flatmate'),
'C15': U('> **Word bank:** shift | commute | appointment | break',
         '> **Word bank:** shift | commute | appointment | break | holiday'),
'C17': K('Ask one question about them — **3**', 'Ask one question about them — **5**'),
'C18': K('''Give one or two useful local facts — **4**
Say your name and where you live — **2**
Offer help and say when you are usually in — **5**
Ask one question about them — **3**''',
         '''Say your name and where you live — **2**
Ask one question about them — **3**
Give one or two useful local facts — **4**
Offer help and say when you are usually in — **5**'''),
'C19': K('3. **Not Given** — he says where he works, never for how long.',
         '3. **False** — he says where he works, never for how long.'),
'C22': U('0. Routine → the same things you do every day or every week.',
         '0. Weekday → Monday, Tuesday, Wednesday, Thursday or Friday'),
'C24': K('**Part 3: A Morning on Alder Street**', '**Part 3: Something Else**'),
'C25': KAPPEND('**Part 11: Nowhere**\n\n1. a'),
'C26': U('**2. The journey from your home to your work is your…**',
         '**1. A person who lives near you is a…**'),
'C27': ('needs_units', 2),
'C28': URE(r'______________________ \.$', '_____ .'),

# ------------------------------------------------------------- D answer key
'D01': ('key', lambda t: t.replace('**Unit 1: People and Routines — Answer Key**',
                                   '**Unit 2: People and Routines — Answer Key**')),
'D02': ('key', lambda t: '\n'.join(
    (lambda L: L[:1] + L[1:][::-1])(t.split('\n')))),
'D03': K('**Part 1: Vocabulary Fill-in**\n\n1. shift · 2. commute · 3. break · 4. appointment',
         '**Part 1: Vocabulary Fill-in**\n'),
'D04': K('1. g · 2. b · 3. c · 4. d · 5. f · 6. a · 7. e', '1. g · 2. b · 3. c'),
'D05': K('1. c · 2. a · 3. d · 4. b', '1. c · 2. a · 3. z · 4. b'),
'D06': K('1. **B)** Dani is cooking the rice. · 2. **C)** Maya works in a bookshop.',
         '1. Dani is cooking the rice. · 2. Maya works in a bookshop.'),
'D07': K('1. shift · 2. commute · 3. break · 4. appointment',
         '1. holiday · 2. commute · 3. break · 4. appointment'),
'D08': K('Offer help and say when you are usually in — **5**',
         'Offer help and say when you are usually in — **2**'),
'D09': K('2. **True** — “This is my first week.”', '2. **Yes** — “This is my first week.”')
       if False else K('2. **True** — “This week I’m working nights.”',
                       '2. **Yes** — “This week I’m working nights.”'),
'D10': KRE(r'^Marking points: .*$', 'Notes.'),
'D11': KRE(r'^> Sample.*$', '> Example omitted.', 0),
'D12': KRE(r'> Sample \((\d+) words\):', '> Sample (999 words):'),
'D14': U('**Part 2: Freer Practice**', '**Part 2: Freer Practice** *(given)*'),

# ---------------------------------------------------------- E language/level
'E01': URE(r'^> ([A-Z][a-z]+) ', r'> \1 quotidian vicissitudes notwithstanding erstwhile '
           r'consternation inordinate ostensibly bureaucratic inertia progeny acquaintances ', 0),
'E02': U('Every morning the street is busy.', 'Every morning the neighbourhood is enormous and the atmosphere is remarkable.'),
'E03': URE(r'\.\s+(?=[A-Z][a-z])', ' and ', 0),
'E04': U('Every morning the street is busy.',
         'Every morning the street is busy with people who are going to work and to school '
         'and to the shops and to the station before the day has really started at all.'),
'E05': U('Every morning the street is busy.',
         'Every morning the street is busy because people leave when the buses come although '
         'the shops are shut while the light is still low since nobody wants to wait.'),
'E06': U('Right now, Maya is waiting for the bus', 'Yesterday Maya walked to the bus and waited'),
'E07': ('ctx', lambda c: c.grammar.__setitem__(
    'markers', {**c.grammar['markers'], 1: [r'\bzzqq\b']})),
'E08': URE(r'^> routine · shift · flatmate.*$', '> routine · shift · flatmate'),
'E09': U('**Part 10: Glossary**\n\n**Unit 1 glossary (10 words)**\n\n> routine · shift · flatmate · neighbour · colleague · commute · appointment · busy · usually · at the moment',
         '**Part 10: Glossary**\n\n**Unit 1 glossary (10 words)**\n\n> xylophone · ukulele · flatmate · neighbour · colleague · commute · appointment · busy · usually · at the moment'),
'E10': ('needs_units', 2),
'E11': ('ctx', lambda c: c.lexis['units'].__setitem__(
    2, {'book': 'A2.1', 'words': ['routine', 'shift']})),
'E12': ('needs_units', 2),
'E13': U('the number 7 bus goes to the centre', 'the number 7 bus goes to the center'),
'E14': URE(r'’(s|t|re|ve|ll|m|d)\b', r' \1', 0),
'E15': U('Amina’s shop', "Amina's shop", 1),
'E16': U('Every morning the street is busy.', 'Every  morning the street is busy.'),
'E17': U('“What is your secret?”', '"What is your secret?"'),
'E18': U('Every morning the street is busy.', 'Every morning the street - busy - is loud.'),
'E19': U('0. Nurse — a hospital', '0. Nurse at 7:30 — a hospital'),
'E20': U('Every morning the street is busy.', 'Every morning the upholstery showroom is busy.'),
'E21': URE(r'\b(I|you|we)\b', 'one', 0),
'E22': URE(r'^> ([A-Z][a-z]+) ', r'> \1 extraordinarily complicated administration '
           r'systematically reconsidering responsibilities continuously accumulating ', 0),
'E23': URE(r'^> Six people live at 14 Alder Street\.',
           '> And six people live here. But the street is busy. So they hurry. Or they wait.'),
'E24': U('0. Nurse — a hospital', '0. Nurse from 03/04/2026 — a hospital'),
'E25': U('Every morning the street is busy.', 'Every morning the shop is opened by Amina.'),
'E26': ('ctx', lambda c: c.lexis['units'].__setitem__(
    3, {'book': 'A2.1', 'words': ['street', 'morning']})),

# --------------------------------------------------------------- F content
'F01': U('Every morning the street is busy.', 'Every morning the production line is busy.'),
'F03': U('Tomas is a nurse', 'Tomas is a bookshop assistant and Tomas is a nurse'),
'F04': U('Amina: I open every day except Sunday.', 'Amina: I open on Sunday.'),
'F06': ('needs_units', 2),
'F07': U('Maya works in a bookshop.', 'Maya works at Starbucks.'),
'F08': ('needs_check', 'F08 reports proper nouns for adjudication; it has no fail path'),
'F10': URE(r'\bhe\b', 'she', 0),
'F12': ('needs_units', 2),
'F13': URE(r'\b(Yuki|Maya|Amina|Tomas|Dani|Okonkwo|Alder Street)\b', 'Someone', 0),
'F14': ('ctx', lambda c: c.cast['people'].__setitem__(
    'Maya2', {**c.cast['people']['Dani'], 'full': 'Maya Rossi'})),
'F15': U('Every morning the street is busy.', 'Every morning in 2024 the street is busy.'),
'F16': U('Every morning the street is busy.', 'Every morning you should take 500 mg tablets.'),

# --------------------------------------------------------------- G figures
'G01': URE(r'^\*Figure 1\.9 · .*$', ''),
'G02': U('*Figure 1.9 ·', '*Figure 1.19 ·'),
'G03': U('*Figure 1.3 · Six jobs and the places people do them.*\n', ''),
'G04': U('*Figure 1.3 · Six jobs and the places people do them.*',
         '*Figure 1.3 Six jobs and the places people do them.*'),
'G05': U('*Figure 1.3 · Six jobs and the places people do them.*',
         '*Figure 1.3 · Six jobs and the places people do them*'),
'G06': FIG(lambda m: m.update(width=1200) or m),
'G07': FIG(lambda m: m.update(height=200) or m),
'G08': FIG(lambda m: m.update(mode='P') or m),
'G09': FIG(lambda m: m.update(contaminate='#FF00FF') or m),
'G10': FIG(lambda m: m.update(bloat=True) or m),
'G11': FIG(lambda m: m.update(placed_in=[9.9, 9.9]) or m),
# move a figure to the end of its section, where nothing uses it any more
'G12': ('unit', lambda t: t
        .replace('*Figure 1.2 \u00b7 14 Alder Street at eight in the morning.*\n\n', '')
        .replace('**Part 1 \u00b7 Vocabulary and Terminology**',
                 '*Figure 1.2 \u00b7 14 Alder Street at eight in the morning.*\n\n'
                 '**Part 1 \u00b7 Vocabulary and Terminology**')),
'G13': FIG(lambda m: m['texts'][0].update(size=8) or m),
'G14': FIG(lambda m: m['texts'][0].update(bbox=m['texts'][1]['bbox']) or m),
'G15': FIG(lambda m: m.update(leaders=[[0, 0, 100, 100], [0, 100, 100, 0]]) or m),
'G16': FIG(lambda m: m.update(bounds=[-50, -50, 99999, 99999]) or m),
'G17': FIG(lambda m: m.update(bounds=[10, m['canvas'][1] * 0.4, 100, m['canvas'][1] * 0.5]) or m),
'G18': FIG(lambda m: m['texts'].append({'text': 'Quetzalcoatl', 'size': 30,
                                        'bbox': [0, 0, 1, 1], 'fill': '#1F3864', 'on': '#FFFFFF'}) or m),
'G19': FIG(lambda m: m.update(leaders=m.get('leaders', [])[:1]) or m),
'G20': FIG(lambda m: m.update(cards=1) or m),
'G21': FIG(lambda m: m.update(arrows=0) or m),
'G22': FIG(lambda m: m['texts'][0].update(fill='#EEF3F9', on='#FFFFFF') or m),
'G23': FIG(lambda m: m.update(sha256='0' * 64) or m),
'G24': FIG(lambda m: m.update(alt='x') or m),

# ------------------------------------------------------------ H typography
'H01': DOCX(lambda d: d.replace('w:w="11906"', 'w:w="12240"')),
'H02': DOCX(lambda d: d.replace('w:top="1440"', 'w:top="720"')),
'H03': ('styles', lambda d: d.replace('w:ascii="Calibri"', 'w:ascii="Arial"', 1)),
'H04': ('styles', lambda d: re.sub(r'(<w:docDefaults>.*?<w:sz w:val=")22(")',
                                   r'\g<1>24\g<2>', d, count=1, flags=re.S)),
'H05': DOCX(lambda d: d.replace('<w:rPr>', '<w:rPr><w:sz w:val="23"/>', 1)),
'H06': DOCX(lambda d: d.replace('<w:pPr>', '<w:pPr><w:pStyle w:val="Quote"/>', 1)),
'H07': DOCX(lambda d: re.sub(r'<w:insideV w:val="single" w:color="\w+" w:sz="4"/>',
                             '', d, count=1)),
'H08': DOCX(lambda d: re.sub(r'<w:tbl>.*?</w:tbl>', '', d, flags=re.S)),
'H09': DOCX(lambda d: re.sub(r'<w:t[^>]*>[^<]*</w:t>', '<w:t></w:t>', d)),
'H10': DOCX(lambda d: d.replace('<w:cantSplit/>', '', 1)),
'H11': DOCX(lambda d: d.replace('<w:jc w:val="center"/>', '', 1)),
'H12': DOCX(lambda d: re.sub(
        r'(<w:p\b(?:(?!</w:p>).)*?<w:t[^>]*>Figure (?:(?!</w:p>).)*?</w:p>)',
        lambda m: re.sub(r'<w:i\s*/>', '', m.group(1)), d, count=1, flags=re.S)),
'H13': DOCX(lambda d: d.replace('<w:keepNext/>', '', 1)),
'H14': DOCX(lambda d: d.replace('<w:pPr>', '<w:pPr><w:widowControl w:val="0"/>', 1)),
'H15': DOCX(lambda d: re.sub(r'(<w:t[^>]*>)\[CORE\] Core track · in-class starter',
                             r'\g<1>something else', d, count=1)),
'H16': ('ctx', lambda c: c.grammar['book'].__setitem__('A2.1', [11, 20])),
'H17': COVER(lambda side: None if side == 'back' else 'keep'),
'H18': COVER(lambda n: (100, 100)),
'H19': ('core', lambda d: d.replace('<dc:title>', '<dc:title></dc:title><x>', 1)),
'H20': ('zip', lambda z: z),
'H21': ('pdf', 'one_page'),
'H22': ('pdf', 'tofu'),

# ---------------------------------------------------------------- I covers
'I01': ('covermeta', lambda m: m.update(texts=[]) or m),
'I02': ('coverpx', lambda m: m.update(contaminate='#FF00FF') or m),
'I03': ('covermeta', lambda m: m.update(blurb='') or m),
'I04': ('covermeta', lambda m: m.update(blurb='Too short.') or m),
'I05': ('covermeta', lambda m: m.update(blurb=m.get('blurb', '') + ' ISBN 978-0-00-000000-0') or m),
'I06': ('covermeta', lambda m: m.update(blurb=m.get('blurb', '') + ' Alder Press Ltd') or m),
'I07': ('covermeta', lambda m: m.update(units=['Something Else']) or m),
'I08': ('covermeta', lambda m: m.update(unit_count=99) or m),
# only the BACK carries a blurb, so this breaks the pair rather than renaming both
'I09': ('covermeta', lambda m: (m.update(theme='other') if m.get('blurb') else None) or m),
'I10': ('needs_artefact', 'both volumes covers'),
'I11': ('coverpx', lambda m: m.update(resize=(1000, 1414)) or m),
'I12': ('covermeta', lambda m: m['texts'].append(
    {'text': 'edge', 'bbox': [0, 0, 40, 40]}) or m),

# ----------------------------------------------------------------- J build
'J01': DOCX(lambda d: re.sub(r'<w:t[^>]*>[^<]*</w:t>', '', d)),
'J02': DOCX(lambda d: d.replace('Warm Up', 'XX', 1)),
'J03': DOCX(lambda d: re.sub(r'<w:tbl>.*?</w:tbl>', '', d, flags=re.S)),
'J04': DOCX(lambda d: d.replace('r:embed="rId', 'r:embed="rIdBROKEN', 1)),
'J05': ('pdf', 'no_pages'),
'J06': U('Every morning the street is busy.', 'Every morning {{PLACEHOLDER}} is busy.'),
'J07': U('Every morning the street is busy.', 'Every morning the street is busy. TODO'),
'J08': U('Every morning the street is busy.', 'Every morning lorem ipsum dolor sit amet.'),
'J09': U('Every morning the street is busy.', 'Every morning the street is busy. Generated by claude-opus.'),
'J10': U('Every morning the street is busy.', 'Every morning /home/user/secret is busy.'),
'J11': ('ctx', lambda c: c.manifest.__setitem__('a21-u01.docx', 'deadbeef')),
'J12': ('ctx', lambda c: c.manifest.clear()),
'J13': ('needs_artefact', 'pdf/git state'),
'J14': ('needs_artefact', 'pdf/git state'),
'J15': ('needs_artefact', 'pdf/git state'),
'J16': ('rename', lambda n: 'a21-unit1.md'),

# ------------------------------------------------------------ K regression
'K01': ('sha', lambda h: '0' * 64),
'K02': ('ctx', lambda c: setattr(c, 'spec_source', 'somewhere/else.yaml')),
'K03': ('ctx', lambda c: setattr(c, 'unit_executions', 1)),
'K04': ('ctx', lambda c: setattr(c, 'partial', False)),
'K05': U('> **Gloss:**', '> Note:', 4),
'K06': U('**Part 3 · Listening**', '**Part 11 · Listening**'),
'K07': ('ctx', lambda c: c.lexis['units'][1]['words'].pop()),
'K08': U('Tomas is a nurse', 'Tomas is a student'),
'K09': ('ctx', lambda c: c.grammar['spine'][2].__setitem__(
    'point', c.grammar['spine'][1]['point'])),
'K10': ('ctx', lambda c: c.previous_results.__setitem__('A01@u01', 'PASS')
        or c.results.__setitem__('A01@u01', 'FAIL')),
'K11': U('Every morning the street is busy.', 'Busy. ' * 400),
'K12': ('ctx', lambda c: (c.unit_status.__setitem__('u01', 'done'),
                          c.results.__setitem__('A01@u01', 'FAIL'))),
'K13': ('ctx', lambda c: (setattr(c, 'releasing', True),
                          c.results.__setitem__('A01@u01', 'FAIL'))),
'K14': ('ctx', lambda c: setattr(c, 'mutation_report',
                                 {'total': 5, 'caught': 3, 'escaped': ['X01', 'X02']})),
'K15': ('registry', lambda r: r),
'K16': ('registry', lambda r: r),
'K17': ('registry', lambda r: r),
'K18': ('registry', lambda r: r),
}
