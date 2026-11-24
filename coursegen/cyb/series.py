# -*- coding: utf-8 -*-
"""English for Cybersecurity — New Syria Edition — series parameters.

The course is for the people who defend networks and data in Syria and who have
to do it in English: service-desk and first-line staff, security operations
analysts, information security managers in banks, telecommunications and
hospitals, IT directors in ministries and public authorities, information
governance and data protection leads, auditors, and the chief information
security officers who must answer to a board, to a regulator, to a national
incident response centre and to the public in a second language.

It is a government-and-private-sector edition because in this field the two
cannot be taught apart. A ministry depends on a private hosting company; a bank
reports to a public regulator; a water authority and a telecommunications
operator share one fibre route and one set of consequences. The language of the
job crosses that line a dozen times a week, and the units cross it with them.

The edition's spine is the fact that makes security English what it is: you
will have to say it before you are certain. An attacker is already inside your
timeline, and the window in which a sentence still changes the outcome closes
while you are gathering the proof that would have made the sentence
comfortable. So the series is built around the things that must be said early
and in writing: an escalation that asks one question, a declaration made on
partial information, a refusal to restore a system that is not yet clean, a
notification to the people whose data it was, and a record of what was checked
rather than a claim that something is safe.

The books teach professional communication and professional writing. They do
not teach attack and they give no offensive guidance: no exploit, no payload,
no attack tooling, no evasion or bypass technique, no malicious code and no
working indicator of compromise appears anywhere in the series. Every technical
decision in these pages belongs to an engineer who is named as owning it, and
every security judgement belongs to the defender at the keyboard rather than to
a rule printed in a coursebook. Nor do the books give legal or regulatory
advice: every unit that touches data protection, breach notification, lawful
access, procurement, audit, inspection or professional duty says in its own text
that local law and the organisation's own written procedures govern it, and
that the defender's job is to use the route rather than to invent one. All sums
of money are illustrative and belong to invented organisations.

No vendor, product, model, platform, living official or political claim appears
anywhere. Banks, ministries, operators, authorities, suppliers and committees
are invented; cities are real. Nothing in these pages describes the policy,
capability or conduct of any actual government.

The series signature is the moment a defender has to speak before the evidence
is complete: Part 10 of every unit, The Sentence You Must Say Before You Are
Sure.
"""

FIELD = 'Cybersecurity'
SERIES = 'LEDGER  ·  ENGLISH FOR CYBERSECURITY'
STRAP = 'You will have to say it before you are certain: the window closes while you are still gathering the proof'
EDITION = 'New Syria Edition  ·  Government and Private Sector'
TITLE = 'English for Cybersecurity'
FILESTEM = 'English_for_Cybersecurity_New_Syria'
PART10 = 'The Sentence You Must Say Before You Are Sure'

INSIDE = ['Warm-up reading with five kinds of comprehension',
          'Twenty key terms, with gap and matching practice',
          'A grammar point, a loose/precise contrast, and two dialogues',
          'Speaking tasks · extended reading · guided writing',
          'A Working with AI track: one capability per unit, taught with its boundary',
          'A five-stage Decision Room with a full thinking scaffold',
          'A Brief Lab: task it, watch it fail, name the fault, repair it',
          'The Sentence You Must Say Before You Are Sure: said while it still matters',
          'A six-skill review, a Can-Do check and a complete answer key']

CAST = ('Nour Haddad  ·  Lama Khoury  ·  Rama Othman  ·  Hala Jabbour\n'
        'Ziad Mardini  ·  Omar Sayegh  ·  Dr Fadi Barakat  ·  Maya Antoun\n'
        'Karam Ayoub  ·  Rasha Ibrahim  ·  Samer Dalati')

CASTLINES = [
 ('Nour Haddad', 'service-desk analyst, then security analyst, Barada Bank'),
 ('Lama Khoury', 'information security manager, Barada Bank'),
 ('Rama Othman', 'director of information technology, Ministry of Public Works'),
 ('Hala Jabbour', 'information governance lead, Zenobia Health Group'),
 ('Ziad Mardini', 'chief information security officer, Qasioun Telecom'),
 ('Omar Sayegh', 'shift lead, Barada Bank security operations centre'),
 ('Dr Fadi Barakat', 'head of the National Cyber Incident Response Centre'),
 ('Maya Antoun', 'internal auditor, Barada Bank'),
 ('Karam Ayoub', 'account manager, Afamia Systems'),
 ('Rasha Ibrahim', 'network engineer, Orontes Water Authority'),
 ('Samer Dalati', 'lay member of the Qasioun Telecom security committee'),
]

CASTBIOS = [
 ('Nour Haddad', 'a service-desk analyst at Barada Bank and the person Books 1 and 2 '
                 'follow. She learns that the first line is where most of a bank’s '
                 'security actually happens, and that a ticket written badly on Tuesday '
                 'is the reason nobody can answer a question in March.'),
 ('Lama Khoury', 'information security manager, and the person Book 3 follows. Explains '
                 'risk to people who have four minutes, says what happens if nothing is '
                 'done, and will not take an approval from somebody who could not '
                 'describe afterwards what they accepted.'),
 ('Rama Othman', 'IT director in a ministry, and the person Book 4 follows. Writes '
                 'escalations that can be acted on, reports that state their own limits, '
                 'and supplier instructions that cannot be read two ways at eight in the '
                 'evening.'),
 ('Hala Jabbour', 'information governance lead, and the person Book 5 follows. Handles the '
                 'breach, the notification, the ransom demand, the inspection, and the '
                 'colleague whose practice is no longer safe.'),
 ('Ziad Mardini', 'chief information security officer, and the person Book 6 follows. '
                 'Writes papers that ask the board for a decision rather than a '
                 'discussion, and puts the unwelcome figure in the first line.'),
 ('Omar Sayegh', 'shift lead in a security operations centre. Runs the queue, trains the '
                 'new analysts, and knows which of an engineer’s habits are controls and '
                 'which are only habit.'),
 ('Dr Fadi Barakat', 'head of the national incident response centre. Owns every national '
                 'escalation decision in these pages, and prefers an escalation that asks '
                 'one question to one that forwards a file.'),
 ('Maya Antoun', 'internal auditor. Counts what the policy says is counted, and asks for '
                 'the document rather than the assurance.'),
 ('Karam Ayoub', 'account manager at a supplier. Works from written instructions he cannot '
                 'query out of hours, and has strong views about adjectives.'),
 ('Rasha Ibrahim', 'network engineer at a water authority. Looks after equipment older than '
                 'she is, on a network that cannot simply be switched off while somebody '
                 'thinks.'),
 ('Samer Dalati', 'lay member of a security committee. Asks the question a paper was '
                 'written to avoid, and is usually right to.'),
]

TEAM = [('people', '%s\nour guide'),
        ('scale', 'Hala Jabbour\nGovernance'),
        ('clock', 'Lama Khoury\nRisk'),
        ('doc', 'Rama Othman\nReporting'),
        ('globe', 'Dr Fadi Barakat\nNational Response'),
        ('book', 'Samer Dalati\nSecurity Committee')]

# Invented banks, ministries, operators, authorities, suppliers and committees,
# and the real cities they stand in.
WORLD = ['Barada Bank', 'Qasioun Telecom', 'Ministry of Public Works',
         'Orontes Water Authority', 'Zenobia Health Group',
         'National Cyber Incident Response Centre', 'Afamia Systems',
         'Cham Logistics', 'Jableh Port Authority', 'Amrit Insurance',
         'the security committee', 'the board’s audit committee',
         'Damascus', 'Aleppo', 'Homs', 'Hama', 'Latakia', 'Tartus',
         'Deir ez-Zor', 'Raqqa', 'Idlib', 'Daraa', 'As-Suwayda',
         'Qamishli', 'Al-Hasakah', 'Jableh', 'Baniyas',
         'Amman', 'Beirut', 'Istanbul', 'Cairo', 'Dubai', 'Doha',
         'Nicosia', 'Athens', 'Vienna', 'Rotterdam', 'Nairobi']

DEMONYMS = ['Syrian', 'Syrians', 'Damascene', 'Jordanian', 'Lebanese',
            'Turkish', 'Iraqi', 'Egyptian', 'Egyptians', 'Emirati', 'Qatari',
            'Cypriot', 'Greek', 'Austrian', 'Dutch', 'Kenyan', 'Indian',
            'Indians', 'Singaporean', 'Korean', 'Koreans', 'Japanese',
            'Brazilian', 'European', 'Europeans', 'British', 'German',
            'French', 'Damascus', 'Aleppo', 'Homs', 'Hama', 'Latakia',
            'Tartus', 'Raqqa', 'Idlib', 'Daraa', 'Qamishli', 'Jableh',
            'Amman', 'Beirut', 'Istanbul', 'Cairo', 'Dubai', 'Doha',
            'Nicosia', 'Athens', 'Vienna', 'Rotterdam', 'Nairobi',
            'Aleppo’s', 'Damascus’s', 'Latakia’s']

BANDS = {'A2': (8.5, 12.5), 'B1': (11.5, 16.5), 'B2': (15.0, 21.0)}
CAPS = {'A2': 26, 'B1': 34, 'B2': 44}
WORDS = {'A2': (3500, 4700), 'B1': (4000, 5200), 'B2': (4400, 5600)}

ORDER = ['A21', 'A22', 'B11', 'B12', 'B21', 'B22']

BOOKS = {
 'A21': dict(code='A21', level='A2', badge='A2', bandge='A2.1', book='BOOK 1',
   title=['English for', 'Cybersecurity'], sub='The First Line',
   emblem='door', protagonist='Nour Haddad',
   blurb=['Book 1 is the first line. Nour Haddad learns who may do what in a',
          'security team, takes a call about a locked account, checks who she',
          'is speaking to before she acts, says what she is going to do, agrees',
          'how a user tells her it is urgent, asks about a suspicious message,',
          'gives advice a user can repeat, and writes the ticket the same day.'],
   units=['Who Does What in a Security Team',
          'A Call About an Account That Will Not Open',
          'Checking Who You Are Speaking To',
          'Saying What You Are Going to Do',
          'Agreeing How the User Tells You It Is Urgent',
          'Asking About a Message That Looks Wrong',
          'Advice the User Can Repeat Back',
          'Booking a Time to Fix It',
          'Writing the Ticket on the Same Day',
          'Closing Your Shift at the End of the Day']),
 'A22': dict(code='A22', level='A2', badge='A2', bandge='A2.2', book='BOOK 2',
   title=['English for', 'Cybersecurity'], sub='The Queue, the Log and the Asset List',
   emblem='clock', protagonist='Nour Haddad',
   blurb=['Book 2 is the week behind the first line: the queue and the ticket',
          'nobody has touched, an asset list that is out of date, access that',
          'should have been removed, the patch log, a record that must be',
          'complete, an analyst’s first day, a problem that comes back, a near',
          'miss written down, and the week on one page.'],
   units=['The Queue and the Ticket Nobody Has Touched',
          'An Asset List That Is Out of Date',
          'A User Who Cannot Wait',
          'Access That Should Have Been Removed',
          'The Patch Log',
          'A Record That Must Be Complete',
          'An Analyst’s First Day',
          'A User Back About the Same Problem',
          'A Near Miss, Written Down',
          'The Week in One Page']),
 'B11': dict(code='B11', level='B1', badge='B1', bandge='B1.1', book='BOOK 3',
   title=['English for', 'Cybersecurity'], sub='Explaining Risk to People Who Are Busy',
   emblem='compass', protagonist='Lama Khoury',
   blurb=['Book 3 is risk as language: options set out so a manager can choose,',
          'what happens if nothing is done, risk said in numbers, cost said',
          'before the work starts, an approval that means something, a user',
          'afraid of being blamed, a director and an engineer in one room, and',
          'a case put to the security committee.'],
   units=['Setting Out Options So a Manager Can Choose',
          'What Happens If Nothing Is Done',
          'Saying a Risk in Numbers',
          'Saying the Cost Before the Work Starts',
          'An Approval That Means Something',
          'A User Who Is Afraid of Being Blamed',
          'A Director and an Engineer in the Same Meeting',
          'Describing What the Log Shows',
          'A Manager Who Refuses the Control You Recommend',
          'Putting a Case to the Security Committee']),
 'B12': dict(code='B12', level='B1', badge='B1', bandge='B1.2', book='BOOK 4',
   title=['English for', 'Cybersecurity'], sub='Reports, Suppliers and the Regulator’s Form',
   emblem='speech', protagonist='Rama Othman',
   blurb=['Book 4 is the written side of defence: an escalation that asks one',
          'question, a remediation plan in writing, a supplier instruction that',
          'cannot be read two ways, a report with its limits, an estimate that',
          'has to change, a request for logs, a vendor’s reply, a compliance',
          'return, an access audit, and a paper for the committee.'],
   units=['An Escalation That Asks One Question',
          'A Remediation Plan in Writing',
          'A Supplier Instruction That Cannot Be Read Two Ways',
          'A Report With Its Limits Stated',
          'An Estimate That Has to Change',
          'A Request for Logs From Another Organisation',
          'A Vendor’s Reply, and What You Do With It',
          'A Compliance Return and Its Evidence',
          'An Audit of Access Rights',
          'A Paper for the Security Committee']),
 'B21': dict(code='B21', level='B2', badge='B2', bandge='B2.1', book='BOOK 5',
   title=['English for', 'Cybersecurity'], sub='When You Are Breached',
   emblem='scale', protagonist='Hala Jabbour',
   blurb=['Book 5 is the language of the worst week: declaring an incident',
          'before you are sure, telling the people whose data it was, the data',
          'that cannot be recalled, refusing to restore too early, a demand and',
          'no time, a complaint about your own control, a colleague, an',
          'inspection, and a decision taken alone at three in the morning.'],
   units=['Declaring an Incident Before You Are Sure',
          'Telling the People Whose Data It Was',
          'The Data That Cannot Be Recalled',
          'Refusing to Restore Too Early',
          'A Demand, and No Time',
          'A Complaint About a Control You Own',
          'A Colleague Whose Practice Is Not Safe',
          'An Inspection of the Organisation',
          'A Breach That Becomes a Case',
          'A Decision Taken Alone at Three in the Morning']),
 'B22': dict(code='B22', level='B2', badge='B2', bandge='B2.2', book='BOOK 6',
   title=['English for', 'Cybersecurity'], sub='The Organisation, the State and the Profession',
   emblem='key', protagonist='Ziad Mardini',
   blurb=['Book 6 is the defender writing for institutions: a case for a',
          'security operations centre, a committee chaired to a decision, a',
          'policy that says what will not be permitted, work with the national',
          'centre, a regulator’s question, an outage explained to the public, a',
          'consultation, a five-year plan — and judgement itself.'],
   units=['A Case for a Security Operations Centre',
          'Chairing the Security Committee',
          'A Policy That Says What Will Not Be Permitted',
          'Working With the National Centre',
          'A Regulator’s Question, Answered Exactly',
          'Explaining an Outage to the Public',
          'A Consultation on Switching Off an Old System',
          'A Five-Year Security Plan',
          'A Figure the Board Will Not Like',
          'What No Tool Can Do for a Defender’s Judgement']),
}

GRAMMAR = {
 'A21': [
  'roles in a security team: who does, who may, who must not',
  'taking a call: what happened, when, which system',
  'identity checks before you act: have you, can you, I cannot',
  'saying what comes next: I am going to, first, then',
  'agreeing a signal: if you, just, and I will',
  'asking while they are on the line: did you, is there, shall I',
  'advice: for the next, do not, and come back if',
  'booking: would, can you, how about',
  'notes for the same day: reported, found, done, told',
  'closing up: has been, has not been, who checked it'],
 'A22': [
  'the queue: is open, was closed, is waiting',
  'the asset list: we have, we no longer have, we never had',
  'a user who cannot wait: you can, you do not have to, we will',
  'access: was granted, was not removed, who approved it',
  'the log: applied, signed, and by whom',
  'a complete record: what was reported, what was found, what was done',
  'instructions for a first day: you will, you should, you must not',
  'a problem that comes back: when did it, does it, let me',
  'a near miss: what happened, what stopped it, what I have changed',
  'a one-page week: this week, compared with, next week'],
 'B11': [
  'options a manager can choose between: either, or, and the difference',
  'doing nothing: if you leave it, it may, it will probably',
  'risk in numbers: in about, roughly, out of every hundred',
  'cost before work: it will be, it could become, if that happens',
  'an approval that means something: you have accepted, you have not',
  'reassurance that is not a promise: I can, I cannot, what I will do',
  'two audiences at once: to the director, and to the engineer',
  'describing what you are looking at, without a verdict in it',
  'a refusal: you have decided, I have recorded, and this remains open',
  'putting a case: the system, the question, the request'],
 'B12': [
  'an escalation: one question, the evidence attached, the urgency stated',
  'a plan: stages, dates, owners and review points',
  'a supplier instruction: must, should, may, and what to query',
  'a report with its limits: this report covers, it does not cover',
  'an estimate that moves: it was, it is now, and why',
  'requesting data: what, for whom, under what authority',
  'reading a reply: what is advised, what is decided, what is mine',
  'a return: what was done, when, and what evidence supports it',
  'method and finding in an access audit',
  'a committee paper: decision sought, background, recommendation'],
 'B21': [
  'declaring on partial information: I, we, and what we know',
  'telling people: what happened, what it means, what now',
  'the irreversible loss: what was taken, what cannot be undone',
  'refusing: I cannot, because, and what I shall do instead',
  'pressure and no time: what I can do now, and by when',
  'answering a complaint about a control you own',
  'raising a concern: what I saw, what I did, what I am asking for',
  'an inspection: what you show, what you say, what you do not say',
  'a breach becoming a case: acknowledgement, scope, timescale',
  'reconstructing a decision taken alone'],
 'B22': [
  'a business case: recommendation first, assurance second',
  'chairing to a decision: the question, the options, the resolution',
  'a policy of refusal: will not be permitted, except where',
  'a shared problem: neither of us alone, both of us together',
  'answering a regulator within the exact scope of the question',
  'a public explanation: plain words and a stated limit',
  'a consultation: the proposal, the alternatives, the deadline',
  'a long plan in conditionals, with its assumptions named',
  'presenting an unwelcome figure: lead, cause, action',
  'judgement, accountability and what cannot be delegated'],
}

AI_LADDER = {
 'A21': [
  'a list of who may do what, checked against the ticket queue',
  'a first-line script for an account that will not open',
  'an identity check written as three questions',
  'a plain description of what will happen, in the order it happens',
  'an urgency signal agreed and written into the ticket',
  'yes-or-no checks drafted for a message that looks wrong',
  'advice drafted so that a user can repeat it back',
  'an appointment offer drafted with a date, a length and a reason',
  'same-day ticket notes sorted into reported, found, done and told',
  'an end-of-shift check written as a short list'],
 'A22': [
  'a queue checked for the tickets nobody has touched',
  'an asset list checked against what is actually on the network',
  'a waiting conversation drafted with the options stated',
  'a leavers list checked against the accounts still active',
  'a patch log entry checked against the asset record',
  'a record checked for what was said as well as what was done',
  'an induction list written for an analyst’s first day',
  'a reply about a recurring problem drafted as fact and offer',
  'a near miss written up as event, barrier and change',
  'a week compressed to one page with one comparison'],
 'B11': [
  'options laid out side by side with their differences',
  'the do-nothing option written out as a real option',
  'a risk restated as a number out of a hundred',
  'a cost conversation drafted before the work starts',
  'an approval record drafted as what the manager accepted',
  'reassurance drafted without a promise in it',
  'a briefing addressed to two audiences at once',
  'a description of what the log shows, with no conclusion in it',
  'a refusal recorded without pressure and without a verdict',
  'a case put to the committee as system, question and request'],
 'B12': [
  'an escalation drafted around the one question it asks',
  'a remediation plan drafted as stages, dates, owners and reviews',
  'a supplier instruction drafted so it cannot be read two ways',
  'a report drafted with its scope and its limits stated',
  'a revised estimate drafted as was, is now, and why',
  'a data request drafted with its authority stated',
  'a vendor’s reply sorted into advice, decision and my action',
  'a return drafted as what was done, when, and what supports it',
  'an access audit written up as method, finding and change',
  'a committee paper drafted with the decision sought in the first line'],
 'B21': [
  'an incident declaration sorted into facts, actions and what is not yet known',
  'a notification prepared as act, effect and next step',
  'an irreversible loss written as what happened and what follows',
  'a refusal to restore drafted with its reason and the route that remains',
  'an urgent reply drafted with what is possible today',
  'a complaint about your own control answered from the record',
  'a concern about practice recorded and routed without a verdict in it',
  'an inspection answer drafted from the evidence that exists',
  'a notification acknowledged with its scope and its timescale stated',
  'a decision taken alone reconstructed into a record with its basis'],
 'B22': [
  'a business case drafted with the recommendation in the first line',
  'an agenda built around decisions rather than updates',
  'a policy drafted as what will not be permitted as well as what will',
  'a joint problem stated so that neither body owns it alone',
  'a regulator’s question answered within its exact scope',
  'an outage explained in plain words with a stated limit',
  'a consultation document drafted with alternatives that are real',
  'a five-year plan drafted in conditionals with its assumptions named',
  'an unwelcome figure prepared as lead, cause and action',
  'what no tool can do for a defender’s judgement'],
}

FAULTS = ['unscoped set', 'unbounded quantity', 'unstated criterion',
          'undefined done', 'ambiguous referent', 'missing condition',
          'unstated exception', 'hidden assumption']

FAULT_OK = {
 'A21': set(FAULTS[:3]),
 'A22': set(FAULTS[:5]),
 'B11': set(FAULTS[:6]),
 'B12': set(FAULTS), 'B21': set(FAULTS), 'B22': set(FAULTS),
}

FAULT_GRAMMAR = {
 'unscoped set': 'defining relative clauses and articles',
 'unbounded quantity': 'quantifiers and stated measures',
 'unstated criterion': 'comparatives and superlatives with a stated basis',
 'undefined done': 'modality of requirement: shall, is to, must',
 'ambiguous referent': 'reference, substitution and cohesion',
 'missing condition': 'conditionals; unless, provided that, failing that',
 'unstated exception': 'concession: although, notwithstanding, except where',
 'hidden assumption': 'articles and attribution for given and new information',
}

VAGUE = ['soon', 'asap', 'as soon as possible', 'some', 'a few', 'several',
         'better', 'improve', 'high quality', 'high-quality', 'a lot',
         'quickly', 'promptly', 'shortly', 'a number of', 'various']

SCAFFOLD = ['Purpose', 'Scope', 'Inputs', 'Criteria', 'Done', 'Fallback']
