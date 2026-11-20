# Re-domains a copied planning set (designplan.js, overview.js, scheme.js) for a new series.
# Usage: python3 -I patch_planning.py <series-dir> <config.json>
import io, json, sys, os

d, cfg_path = sys.argv[1], sys.argv[2]
C = json.load(io.open(cfg_path, encoding='utf-8'))
def esc(v):
    if isinstance(v, str): return v.replace("'", "\\'")
    if isinstance(v, list): return [esc(x) for x in v]
    return v
C = {k: esc(v) for k, v in C.items()}
P = os.path.join(d, 'pipeline')

def patch(fn, reps):
    p = os.path.join(P, fn)
    t = io.open(p, encoding='utf-8').read()
    for a, b in reps:
        if t.count(a) != 1:
            raise SystemExit('%s: expected 1 occurrence of %r (found %d)' % (fn, a[:70], t.count(a)))
        t = t.replace(a, b, 1)
    io.open(p, 'w', encoding='utf-8').write(t)
    print('patched', p)

ctx = C['contexts']
ctx_rows = "".join("  ['%s', '%s', '%s'],\n" % tuple(ctx[i:i+3]) for i in range(0, 12, 3))

patch('overview.js', [
 ("'Three courses of **12 two-hour sessions** take a young adult from a first shift on the floor to running a department and answering to owners and inspectors. Each session teaches **one job-shaped skill** through **three short cycles** — a reading, a conversation and a piece of writing — and closes with a **case study** set in a named department or kind of property.",
  "'Three courses of **12 two-hour sessions** take a young adult from %s to %s. Each session teaches **one job-shaped skill** through **three short cycles** — a reading, a conversation and a piece of writing — and closes with a **case study** set in %s." % (C['from'], C['to'], C['case_setting'])),
 ("36 case studies across 12 areas of hospitality.**'", "36 case studies across 12 areas of %s.**'" % C['field']),
 ("'first shift at work → **running a department and speaking for the property**'", "'%s'" % C['series_arc']),
 (" 'They are about to join, or have just joined, a hotel, a restaurant or a guesthouse — where English is the language of the guest and of the paper trail: bookings and rooming lists, handover logs and incident reports, agent contracts, supplier terms, inspection findings and the licensing committee.',",
  " '%s',"%C['learners']),
 (" 'It is **department-neutral within hospitality**. One cohort can contain a receptionist, a housekeeping attendant and a restaurant waiter, and all three practise the same skill in their own department.',",
  " '%s',"%C['neutral']),
 ("out.push(p('The programme assumes learners work in different parts of a property, not one. Twelve hospitality contexts carry the case studies:'));",
  "out.push(p('%s'));"%C['contexts_intro']),
 ("  ['Front desk and reception', 'Housekeeping', 'Security and night duty'],\n  ['Reservations and revenue', 'Maintenance and engineering', 'Concierge and guest services'],\n  ['Restaurant service', 'Bar and café', 'Banqueting and events'],\n  ['Kitchen and food safety', 'Tours and excursions', 'Guesthouses and heritage properties'],\n",
  ctx_rows),
 ("'**Upward and outward paper:** handover notes, incident and maintenance reports, decision papers for an owner, submissions to a licensing committee and responses to an inspection — usually written, usually read by someone who was not there.',",
  "'%s',"%C['upward']),
 ("'The same skill, a second angle and a different department'", "'The same skill, a second angle and a different %s'"%C['unit']),
 ("'One scenario in a named department or property, worked in fours, ending in a decision and a document'",
  "'One scenario in %s, worked in fours, ending in a decision and a document'"%C['case_setting']),
 ("  ['\"My own department keeps coming up.\"', 'Twelve hospitality contexts, each appearing once per course — so a learner meets their own work three times across the series, harder each time.'],",
  "  ['\"My own %s keeps coming up.\"', 'Twelve %s contexts, each appearing once per course — so a learner meets their own work three times across the series, harder each time.'],"%(C['unit'],C['field_adj'])),
 ("  ['**Reading**', 'Boards, notices, booking slips, short profiles — 132–190 words', 'Incident reports, procedures, handover logs, breakdowns — 191–263 words', 'Rules, clauses, submissions, inspection findings — 271–360 words'],",
  "  ['**Reading**', '%s', '%s', '%s'],"%tuple(C['reading_rows'])),
 ("  ['**Writing**', 'Notes, slips, logs, a four-line handover — 37–75 words', 'Reports, explanations, recommendations — 101–163 words', 'Decision notes, rules, appraisals, submissions — 145–202 words'],\n  ['**The move it teaches**', 'Be understood, and be reliable', 'Explain, report and advise — own a section', 'Decide, supervise, and speak for the property'],",
  "  ['**Writing**', '%s', '%s', '%s'],\n  ['**The move it teaches**', 'Be understood, and be reliable', 'Explain, report and advise — own %s', '%s'],"%tuple(C['writing_rows']+[C['own_unit'],C['move3']])),
 ("  ['**Responsibility**', 'Answerable for your own tasks', 'Answerable for a section, a shift and a guest', 'Answerable for other people\\'s work'],",
  "  ['**Responsibility**', 'Answerable for your own tasks', 'Answerable for %s', 'Answerable for other people\\'s work'],"%C['resp2']),
 ("'dependable pair of hands → **someone who owns a section, a shift and a guest**'", "'dependable pair of hands → **%s**'"%C['arc2']),
 ("**being honest about what you did not do and cannot evidence** (Course 1 S9 → Course 2 S14 → Course 3 S28); **giving a number its unit, basis and source** (C1 S4 → C2 S16 and S20 → C3 S27); and **writing so that the reader can act** (C1 S12 → C2 S19 → C3 S25).",
  C['threads']),
 ("out.push(h3('Course 1 · Pre-Intermediate — from your first shift to a colleague the shift depends on'));",
  "out.push(h3('Course 1 · Pre-Intermediate — %s'));"%C['h1']),
 ("out.push(h3('Course 2 · Intermediate — from dependable pair of hands to owning a section and a guest'));",
  "out.push(h3('Course 2 · Intermediate — %s'));"%C['h2']),
 ("out.push(h3('Course 3 · Upper-Intermediate — from owning a section to running a department and answering to owners and inspectors'));",
  "out.push(h3('Course 3 · Upper-Intermediate — %s'));"%C['h3']),
 ("out.push(h2('8 · The context map — every learner meets their own department three times'));\nout.push(p('Each case study is set in one of the twelve hospitality contexts, and **each context appears exactly once per course**. A learner on night duty meets their own work in sessions 3, 24 and 28, each time at a higher level of responsibility.'));",
  "out.push(h2('8 · The context map — every learner meets their own %s three times'));\nout.push(p('Each case study is set in one of the twelve %s contexts, and **each context appears exactly once per course**. %s'));"%(C['unit'],C['field_adj'],C['map_example'])),
 ("out.push(table(['Hospitality context', 'Course 1', 'Course 2', 'Course 3'], CTX, [3.2, 1, 1, 1]));",
  "out.push(table(['%s context', 'Course 1', 'Course 2', 'Course 3'], CTX, [3.2, 1, 1, 1]));"%C['field_title']),
 ("out.push(h2('9 · The hospitality posts each course supports'));", "out.push(h2('9 · The %s posts each course supports'));"%C['field_adj']),
 ("  ['**Course 1**\\nA2', 'Receptionist · housekeeping room attendant · night porter and door security · reservations clerk · restaurant or bar waiter · kitchen porter and commis · banqueting assistant · guesthouse all-rounder', 'Being understood at the desk and on the floor, taking a booking accurately, keeping a board and a log a second person can trust, answering for the property on the telephone, saying no to a guest without losing them, accounting for a shift and handing it on'],",
  "  ['**Course 1**\\nA2', '%s', '%s'],"%(C['posts1'],C['gives1'])),
 ("  ['**Course 2**\\nB1', 'Shift leader on the desk · housekeeping floor supervisor · reservations supervisor · restaurant or bar supervisor · head waiter · events coordinator · duty manager in a small property · guesthouse manager', 'Owning a section and a guest: explaining why occupancy or covers moved, training somebody on the floor, offering options with their cost, recommending with a reservation, and being on the record at the morning meeting'],",
  "  ['**Course 2**\\nB1', '%s', '%s'],"%(C['posts2'],C['gives2'])),
 ("  ['**Course 3**\\nB2', 'Front of house manager · head of housekeeping · food and beverage manager · rooms division manager · deputy general manager · general manager of a guesthouse or small hotel', 'Other people\\'s work and the property\\'s word: delegating, inducting, appraising, chairing the heads of department meeting, writing the standard a department follows, naming risk before it lands, negotiating with agents and suppliers, disagreeing upward, and answering a licensing committee'],",
  "  ['**Course 3**\\nB2', '%s', '%s'],"%(C['posts3'],C['gives3'])),
 ("which is the constraint that usually stops a capable young hotel employee at the supervisor grade.",
  "which is the constraint that usually stops %s."%C['constraint']),
 ("36 case studies · 12 hospitality contexts, each appearing once per course", "36 case studies · 12 %s contexts, each appearing once per course"%C['field_adj']),
 ("'**Guests and trade contact:** guests, travel agents, tour operators, suppliers and contractors, often where neither side is a native speaker.',",
  "'%s',"%C['contact']),
])

patch('designplan.js', [
 ("  ['**Case study**', '22', 'A document pack in a named department or property, worked in fours, with its own three tasks'],",
  "  ['**Case study**', '22', 'A document pack in %s, worked in fours, with its own three tasks'],"%C['case_setting']),
 ("  ['**True / False**', '5 statements about a short hotel document', 'Whether the learner read the document or guessed from the topic'],",
  "  ['**True / False**', '5 statements about a short %s document', 'Whether the learner read the document or guessed from the topic'],"%C['doc_adj']),
 ("'**Context badges** — twelve small marks, one per hospitality context, on every case study. A learner recognises their own department before they read a word.',",
  "'**Context badges** — twelve small marks, one per %s context, on every case study. A learner recognises their own %s before they read a word.',"%(C['field_adj'],C['unit'])),
 ("'Hotel and restaurant terminology is where an Arabic gloss earns its place.", "'%s terminology is where an Arabic gloss earns its place."%C['terminology']),
 ("  ['8', 'Twelve hospitality contexts, each used exactly once per course', 'yes'],",
  "  ['8', 'Twelve %s contexts, each used exactly once per course', 'yes'],"%C['field_adj']),
 ("The notice is signed by the head of housekeeping.", "The notice is signed by the %s."%C['notice_signer']),
 ("  ['**Reading length**', '132–190 words', '191–263 words', '271–360 words'],\n  ['**Writing length**', '37–75 words', '101–163 words', '145–202 words'],",
  "  ['**Reading length**', '%s words', '%s words', '%s words'],\n  ['**Writing length**', '%s words', '%s words', '%s words'],"%tuple(C['read_bands']+C['write_bands'])),
])

patch('scheme.js', [
 ("  ['**Reading**', '132–190 words', '191–263 words', '271–360 words'],\n  ['**Conversation**', '10–11 turns', '12–13 turns', '14–17 turns'],\n  ['**Writing model**', '37–75 words', '101–163 words', '145–202 words'],\n  ['**What learners write**', '37–75 words', '101–163 words', '145–202 words'],",
  "  ['**Reading**', '%s words', '%s words', '%s words'],\n  ['**Conversation**', '%s turns', '%s turns', '%s turns'],\n  ['**Writing model**', '%s words', '%s words', '%s words'],\n  ['**What learners write**', '%s words', '%s words', '%s words'],"
  %tuple(C['read_bands']+C['turn_bands']+C['write_bands']+C['write_bands'])),
 ("h: 'COURSE 1 · Pre-Intermediate', sub: 'From your first shift to a colleague the shift depends on',", "h: 'COURSE 1 · Pre-Intermediate', sub: '%s',"%C['sub1']),
 ("h: 'COURSE 2 · Intermediate', sub: 'From dependable pair of hands to owning a section and a guest',", "h: 'COURSE 2 · Intermediate', sub: '%s',"%C['sub2']),
 ("h: 'COURSE 3 · Upper-Intermediate', sub: 'From owning a section to running a department and answering to owners and inspectors',", "h: 'COURSE 3 · Upper-Intermediate', sub: '%s',"%C['sub3']),
 ("arc: 'The learner arrives on a first shift unable to operate, and leaves able to be relied on: to take a booking accurately, keep a board and a log a second person can trust, answer for the property on the telephone and at the desk, be trusted with keys and cash, say no to a guest without losing them, account for a shift and hand it on.',",
  "arc: '%s',"%C['arc1_text']),
 ("arc: 'The learner is given something of their own — a section, a shift, a guest, a group — and learns the language that ownership requires: explaining what happened and why, training somebody else on the floor, offering options with their cost, recommending with a reservation, handling a complaint that has already been made worse, and reporting upward including what did not happen.',",
  "arc: '%s',"%C['arc2_text']),
 ("arc: 'The learner becomes answerable for other people\\'s work and for the property\\'s word. Three sessions are given to supervision itself — delegating, inducting, appraising and chairing — and the course runs on through writing the rule a department follows, naming risk before it lands, negotiating with agents and suppliers, answering a licensing committee, and arguing for the learner\\'s own next post.',",
  "arc: '%s',"%C['arc3_text']),
 ("    role: 'Receptionist · housekeeping room attendant · night porter and door security · reservations clerk · restaurant or bar waiter · kitchen porter and commis · banqueting assistant · guesthouse all-rounder' }",
  "    role: '%s' }"%C['posts1']),
 ("    role: 'Shift leader on the desk · housekeeping floor supervisor · reservations supervisor · restaurant or bar supervisor · head waiter · events coordinator · duty manager in a small property · guesthouse manager' }",
  "    role: '%s' }"%C['posts2']),
 ("    role: 'Front of house manager · head of housekeeping · food and beverage manager · rooms division manager · deputy general manager · general manager of a guesthouse or small hotel' }",
  "    role: '%s' }"%C['posts3']),
 ("  ['**Sector colour for case studies**', 'Front desk and reception · Housekeeping · Security and night duty · Reservations and revenue · Maintenance and engineering · Concierge and guest services · Restaurant service · Bar and café · Banqueting and events · Kitchen and food safety · Tours and excursions · Guesthouses and heritage properties'],",
  "  ['**Sector colour for case studies**', '%s'],"%" · ".join(ctx)),
])
print('all three patched for', d)
