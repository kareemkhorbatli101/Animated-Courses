# -*- coding: utf-8 -*-
import figs

U = dict(
num=2,
title='Reading an Agenda for the Real Decisions',
gram='inversion after negative adverbials: not only, at no time, only if',
ai='an agenda read for where the decisions actually sit',
strap='CEFR B2 · Grammar: inversion after negative adverbials — not only, at no time, only if · '
      'AI: an agenda read for where the decisions actually sit',
cando=['invert the verb correctly after a negative adverbial',
       'read an agenda for where decisions actually sit',
       'see which items will be taken together',
       'find the decision hidden in the organisation of work',
       'write a six-line tasking for an agenda analysis'],

hero=('ITEM 11 WAS CALLED “ORGANISATION OF WORK”, AND IT DECIDED EVERYTHING',
      ['Not only was the substance in item 11.',
       'At no time was item 11 described as substantive.'],
      [(300, 'teal', 'short'), (1060, 'grey', 'long')]),
hero_cap='A provisional agenda of fourteen items, annotated, for a four-day session.',

warm=['Who writes the agenda for your meetings?',
      'Where do your real decisions get taken?',
      'What is the most boring item that matters?'],

read=[
 'The provisional agenda has fourteen items, with annotations. Items 4 to 9 are substantive '
 'and are where every delegation will prepare to speak.',
 'Item 11 is entitled organisation of work. Its annotation runs to four lines and proposes that '
 'items 6 and 8 be taken together, that item 7 be referred to a drafting group, and that the '
 'session close at one o’clock on the Thursday.',
 'Not only does that annotation decide which proposals can be amended; it decides which cannot '
 'be discussed at all. Items taken together are debated once, and a text referred to a drafting '
 'group leaves the plenary for the rest of the session.',
 'At no time is item 11 described as substantive. It is the organisation of the work, and the '
 'organisation of the work is where the work is actually distributed.',
 'Only if the agenda is read as a set of consequences, rather than a list of subjects, does '
 'the shape of the session become visible before it begins.'],

dp1=('Organisation of work', 'Conference practice commonly places decisions on the joint '
     'consideration of items, referral to subsidiary bodies and the allocation of time under an '
     'organisational item, the effect of which on substantive outcomes is frequently decisive.',
     'Source: general conference practice literature, 2025–2026.'),

c_a=[('How many items are on the agenda?', 'fourteen'),
     ('Which items are substantive?', 'items 4 to 9'),
     ('What is item 11 called?', 'organisation of work'),
     ('What does its annotation propose?', 'joining items 6 and 8, referring item 7, closing early'),
     ('What happens to items taken together?', 'they are debated once'),
     ('What happens to a referred text?', 'it leaves the plenary')],

c_b=[('Item 11 is described as substantive.', 'F'),
     ('Items taken together are debated twice.', 'F'),
     ('Item 11 decides what can be discussed.', 'T'),
     ('The annotation is four lines long.', 'T'),
     ('An agenda is only a list of subjects.', 'F'),
     ('Item 7 would stay in the plenary.', 'F')],

c_c=[('Not only ____________ it decide the order; it decides the outcome.', 'does'),
     ('At no time ____________ the item described as substantive.', 'was'),
     ('Only if the agenda is read closely ____________ the shape visible.', 'does … become'),
     ('Never ____________ a drafting group reported back before Thursday.', 'has'),
     ('Not until the second day ____________ the delegation able to speak.', 'was'),
     ('Under no circumstances ____________ an item be reopened after adoption.', 'may')],

c_d=[('After a negative adverbial at the start, the subject and verb are ( inverted / unchanged ).', ['inverted', 'unchanged'], 0),
     ('With a simple tense, inversion needs ( do, does or did / nothing ).',
      ['do, does or did', 'nothing'], 0),
     ('Only if inverts ( the main clause / the if-clause ).',
      ['the main clause', 'the if-clause'], 0),
     ('Item 11 is ( organisational in name and substantive in effect / purely formal ).',
      ['organisational in name and substantive in effect', 'purely formal'], 0),
     ('An agenda should be read as ( a set of consequences / a list of subjects ).',
      ['a set of consequences', 'a list of subjects'], 0)],

c_e=('Inverted or not? Put each opening in the right column.',
     [('Not only does it decide', 'inverted'),
      ('It not only decides', 'not inverted'),
      ('At no time was it described', 'inverted'),
      ('It was at no time described', 'not inverted'),
      ('Only if we ask will they answer', 'inverted'),
      ('They will answer only if we ask', 'not inverted')],
     ['inverted', 'not inverted']),

v_fig_title='AN AGENDA IN SIX WORDS',
v_fig=[('doc', 'an agenda item'), ('key', 'an item for decision'), ('chart', 'an organisation of work'),
       ('clock', 'a time allocation'), ('people', 'a drafting group'), ('speech', 'an informal consultation')],
v_fig_cap='Six words for the page that determines what may be said in four days.',

vocab=[
 ('an agenda item', 'a numbered subject for a meeting'),
 ('an annotation of an agenda', 'the explanatory note under an item'),
 ('an order of business', 'the sequence in which matters are taken'),
 ('an item for decision', 'an item on which action is sought'),
 ('an item for information', 'an item on which no action is sought'),
 ('a deferral', 'putting an item off to a later session'),
 ('a sub-item', 'a division of an item'),
 ('an organisation of work', 'the arrangement of the session’s business'),
 ('an informal consultation', 'a meeting without records'),
 ('a bureau', 'the small group that manages the session'),
 ('a rapporteur', 'the member who reports on an item'),
 ('an item taken together', 'two items debated as one'),
 ('a time allocation', 'the time given to an item'),
 ('an opening plenary', 'the first full meeting'),
 ('a closing plenary', 'the last full meeting'),
 ('a drafting group', 'a small group that works on text'),
 ('a contact group', 'a group formed to reconcile positions'),
 ('a side meeting', 'a meeting held alongside the session'),
 ('an item reopened', 'an item taken up again after decision'),
 ('a silence procedure', 'approval unless somebody objects by a time')],

v_a=[('The explanatory note under an item is an ____________ of an agenda.', 'annotation'),
     ('The arrangement of the session’s business is an organisation of ____________.', 'work'),
     ('A meeting without records is an ____________ consultation.', 'informal'),
     ('The small group that manages the session is the ____________.', 'bureau'),
     ('The member who reports on an item is the ____________.', 'rapporteur'),
     ('A group formed to reconcile positions is a ____________ group.', 'contact'),
     ('Approval unless somebody objects is a ____________ procedure.', 'silence'),
     ('Putting an item off to a later session is a ____________.', 'deferral')],

v_b=[('An item for decision is an item', 'on which action is sought.'),
     ('An item taken together is two items', 'debated as one.'),
     ('A drafting group is a small group', 'that works on text.'),
     ('A side meeting is a meeting', 'held alongside the session.'),
     ('A time allocation is the time', 'given to an item.')],

g_title='Grammar: inversion after negative adverbials — not only, at no time, only if',
g_rule=['When a negative or restrictive adverbial opens the sentence, the subject and the '
        'auxiliary change places: at no time was the item described as substantive.',
        'With a simple tense and no auxiliary, do, does or did is supplied: not only does it '
        'decide the order; it decides the outcome.',
        'With only if, only when and not until, the inversion falls in the main clause, not the '
        'subordinate one: only if the agenda is read closely does the shape become visible.',
        'The construction belongs to formal written and spoken register. It emphasises the '
        'adverbial, and it is spoiled entirely by using it twice in a paragraph.'],
g_fig=('LOOSE',
       ['It not only decides the order but also the outcome.',
        'The item was at no time described as substantive.',
        'The shape becomes visible only if you read closely.',
        'A drafting group has never reported back before Thursday.'],
       'PRECISE',
       ['Not only does it decide the order; it decides the outcome.',
        'At no time was the item described as substantive.',
        'Only if the agenda is read closely does the shape become visible.',
        'Never has a drafting group reported back before Thursday.'],
       'four sentences with the negative adverbial inside',
       'the same four with the adverbial first and the verb inverted'),
g_fig_cap='Adverbial first, auxiliary second, subject third. Use it once in a paragraph.',

g_a=[('Not only ____________ it decide the order; it decides the outcome.', 'does'),
     ('At no time ____________ the item described as substantive.', 'was'),
     ('Never ____________ a drafting group reported back before Thursday.', 'has'),
     ('Not until the second day ____________ the delegation able to speak.', 'was'),
     ('Under no circumstances ____________ an item be reopened after adoption.', 'may'),
     ('Only when instructions arrive ____________ we take a position.', 'can'),
     ('Rarely ____________ two items been taken together in this committee.', 'have'),
     ('No sooner ____________ the item referred than the plenary moved on.', 'was'),
     ('Only if the chair agrees ____________ the matter be reopened.', 'may')],

g_b=[('( Not only it decides the order / Not only does it decide the order ) — inversion.', ['Not only it decides the order', 'Not only does it decide the order'], 1),
     ('( At no time was the item described / At no time the item was described ) — inversion.',
      ['At no time was the item described', 'At no time the item was described'], 0),
     ('( Only if we ask will they answer / Only if we will ask they answer ) — main clause inverts.',
      ['Only if we ask will they answer', 'Only if we will ask they answer'], 0),
     ('( Never has a group reported before Thursday / Never a group has reported before Thursday ) — form.',
      ['Never has a group reported before Thursday',
       'Never a group has reported before Thursday'], 0),
     ('( No sooner was the item referred than the plenary moved on / No sooner the item was referred than the plenary moved on ) — form.',
      ['No sooner was the item referred than the plenary moved on',
       'No sooner the item was referred than the plenary moved on'], 0),
     ('( Under no circumstances may an item be reopened / Under no circumstances an item may be reopened ) — form.',
      ['Under no circumstances may an item be reopened',
       'Under no circumstances an item may be reopened'], 0)],

d1=dict(
 title='Four lines under item 11',
 fig=(['Items 4 to 9 are the substance.', 'And item 11 is the session.'],
      ['It says organisation of work.', 'Read the four lines under it.']),
 cap='Elena Duarte and Ambassador Clara Mendel, before the opening plenary.',
 lines=[('Mendel', 'Which items should I prepare for?'),
        ('Elena', 'Items 4 to 9 are substantive. Item 11 decides what happens to them.'),
        ('Mendel', 'Item 11 is organisation of work.'),
        ('Elena', 'Its annotation proposes that items 6 and 8 be taken together, that item 7 go to a drafting group, and that we close on Thursday at one.'),
        ('Mendel', 'And the effect of taking 6 and 8 together?'),
        ('Elena', 'One debate instead of two, and our amendment on item 8 becomes an amendment to a joint text.'),
        ('Mendel', 'Which weakens it considerably.'),
        ('Elena', 'And item 7, once referred, will not return to the plenary this session.'),
        ('Mendel', 'Not only is item 11 substantive; it is the most substantive item on the agenda.'),
        ('Elena', 'At no time is it described as such. It is four lines of arrangements.'),
        ('Mendel', 'Then we intervene on item 11, and we intervene first.'),
        ('Elena', 'Two sentences, no argument about substance, and only on the joining of 6 and 8.')],
 a=[('Which items are substantive?', 'items 4 to 9'),
    ('What does item 11 propose?', 'joining 6 and 8, referring 7, closing Thursday'),
    ('What is the effect of joining 6 and 8?', 'one debate, and a weakened amendment'),
    ('What happens to a referred item?', 'it does not return to the plenary this session'),
    ('What will they do?', 'intervene on item 11, first, in two sentences')],
 b=[('One debate instead of ____________.', 'two'),
    ('Which ____________ it considerably.', 'weakens'),
    ('Four lines of ____________.', 'arrangements'),
    ('No argument about ____________.', 'substance')]),

d2=dict(
 title='The hour that decides the text',
 fig=(['Thursday at one.', 'And the group reports Thursday morning.'],
      ['Then there is no time.', 'Which is the point of the hour.']),
 cap='Elena and Farida Haddad, over the time allocation.',
 lines=[('Farida', 'The session closes Thursday at one. Does that matter?'),
        ('Elena', 'The drafting group on item 7 reports Thursday morning.'),
        ('Farida', 'So its text arrives two hours before the close.'),
        ('Elena', 'Two hours, in which it must be read, translated and adopted.'),
        ('Farida', 'Translated into six languages in two hours is not possible.'),
        ('Elena', 'Then either the text is adopted untranslated, or it is not adopted at all.'),
        ('Farida', 'Both of those outcomes suit somebody.'),
        ('Elena', 'Which is why the closing hour is a substantive decision wearing a timetable’s clothes.'),
        ('Farida', 'Can you ask for the group to report on Wednesday?'),
        ('Elena', 'I can, on procedural grounds, and the grounds are real: interpretation and translation.'),
        ('Farida', 'That argument no delegation can object to in public.'),
        ('Elena', 'And if the chair refuses, what do I say then without opening the substance?')],
 unresolved=True,
 a=[('When does the session close?', 'Thursday at one'),
    ('When does the drafting group report?', 'Thursday morning'),
    ('How long is there to adopt the text?', 'two hours'),
    ('What is impossible in two hours?', 'translation into six languages'),
    ('What will Elena ask for?', 'that the group report on Wednesday')],
 b=[('It must be read, ____________ and adopted.', 'translated'),
    ('Both of those outcomes suit ____________.', 'somebody'),
    ('A substantive decision wearing a ____________ clothes.', 'timetable’s'),
    ('On ____________ grounds.', 'procedural')]),

speak=[('Inversion once',
        ['Make six formal statements about a meeting you attend.',
         'Open each with a negative adverbial and invert.',
         'Your partner objects if you use the same adverbial twice.']),
       ('What does this item do',
        ['Take an agenda from your own work.',
         'Your partner asks what each item decides, not what it is about.',
         'Name the item whose effect is largest.']),
       ('Procedural grounds',
        ['Describe a timetable that disadvantages you.',
         'Ask your partner for a change on procedural grounds only.',
         'They refuse once; find a second ground.'])],

ext_title='An agenda is a list of subjects and a schedule of consequences',
ext_fig=figs.datatable('FOURTEEN ITEMS, READ TWO WAYS',
                       ['Item', 'As a subject', 'As a consequence'],
                       [['4–5', 'reports of bodies', 'little at stake'],
                        ['6', 'cooperation framework', 'joined with 8'],
                        ['7', 'draft text', 'referred out of plenary'],
                        ['8', 'financing', 'amendment weakened by joining'],
                        ['9', 'review of implementation', 'no decision sought'],
                        ['11', 'organisation of work', 'decides 6, 7, 8 and the clock']]),
ext_fig_cap='Read as subjects, item 11 is the least interesting. Read as consequences, it is the session.',
ext=[
 'An agenda can be analysed quickly and well: items listed, annotations summarised, documents '
 'matched to items, and the whole set against the previous session’s outcomes.',
 'The analysis will nonetheless mislead, because it answers the question the agenda is written '
 'to answer — what will be discussed — and not the question a delegation needs answered, which '
 'is what each item does to the others.',
 'Three mechanisms deserve particular attention. Items taken together are debated once, which '
 'halves the opportunities to intervene and converts an amendment to one text into an amendment '
 'to a joint one. A referral to a drafting group removes a text from the plenary, often for the '
 'rest of a session. And a closing hour fixes how much time any late text can possibly be '
 'given.',
 'None of the three appears as a substantive proposal. All three appear under an organisational '
 'item, in annotations of three or four lines, and at no time are they described as decisions '
 'about outcomes.',
 'The instruction must therefore ask for effects rather than contents: for each item, what is '
 'decided, what is foreclosed, and which other items are affected. Only if the request is put '
 'in those terms does the analysis become usable at the table.',
 'And where an organisational proposal would disadvantage you, the objection is made on '
 'procedural grounds, which are frequently genuine. A text that reports two hours before the '
 'close cannot be translated, and no delegation will say in public that it should be adopted '
 'untranslated.'],

dp2=('Referral', 'Where an item is referred to a subsidiary or drafting body, conference '
     'practice commonly provides that the plenary resumes consideration only on that body’s '
     'report, which may not be presented within the same session.',
     'Source: general conference practice literature, 2025–2026.'),

e_a=[('What question does an agenda answer?', 'what will be discussed'),
     ('What does a delegation need to know?', 'what each item does to the others'),
     ('What do items taken together do?', 'halve the chances to intervene'),
     ('What does a referral do?', 'removes a text from the plenary'),
     ('On what grounds is an objection made?', 'procedural grounds')],
e_b=[('Items taken together are debated twice.', 'F'),
     ('A referral may last the whole session.', 'T'),
     ('Organisational proposals look substantive.', 'F'),
     ('The instruction should ask for effects.', 'T'),
     ('A late text can always be translated.', 'F'),
     ('Procedural grounds are often genuine.', 'T')],

w_model='Purpose: so that the delegation knows, before the opening plenary, what each item does '
        'to the others and where an intervention is required. Scope: the provisional agenda and '
        'annotations for the September session; the previous session’s report is background only. '
        'Inputs: the annotated agenda, our standing instructions, and the list of our amendments. '
        'Criteria: for each item, what is decided, what is foreclosed and which other items are '
        'affected; every proposal to take items together, to refer a text or to fix a closing '
        'time identified expressly with its effect on our amendments; the interpretation and '
        'translation consequences of each timing proposal stated. Done: with me the day before '
        'the opening plenary. Fallback: where the effect of a proposal is unclear, it is listed '
        'as requiring a question to the secretariat rather than assessed.',
w_fig=figs.spec_card('SIX LINES FOR AN AGENDA ANALYSIS',
                     [('Purpose', 'know what each item does to the others'),
                      ('Scope', 'the September agenda and annotations'),
                      ('Inputs', 'agenda, instructions, our amendments'),
                      ('Criteria', 'effects, foreclosures, joining, referral, the clock'),
                      ('Done', 'the day before the opening plenary'),
                      ('Fallback', 'unclear effect: a question to the secretariat')]),
w_fig_cap='“What is foreclosed” is the phrase that turns an agenda into a map.',
w_task='Write a six-line tasking for an agenda analysis.',
w_steps=['Line 1: say what must be known before the opening plenary.',
         'Line 2: say which agenda, and what is background only.',
         'Line 3: say what you are giving it.',
         'Line 4: say the effects, the foreclosures and the three mechanisms.',
         'Line 5: say when it is needed.',
         'Line 6: say what happens where an effect is unclear.'],
w_bank=['Purpose: so that the delegation knows, before the opening plenary, what each item does to the others',
        'Scope: the provisional agenda and annotations for the … session; … is background only',
        'Inputs: the annotated agenda, our standing instructions, and the list of our amendments',
        'Criteria: for each item, what is decided, what is foreclosed and which other items are affected; every proposal to take items together, to refer a text or to fix a closing time identified with its effect on our amendments; the translation consequences of each timing proposal',
        'Done: with me the day before the opening plenary. Fallback: an unclear effect is listed as requiring a question to the secretariat'],
w_check=['Does it ask what is foreclosed?',
         'Are joining, referral and timing covered expressly?',
         'Is the effect on our amendments stated?',
         'Are unclear effects turned into questions?'],

t_title='An agenda read for where the decisions actually sit',
t_fig=figs.split('FOURTEEN ITEMS',
                 'It will tell you',
                 ['what each item is about',
                  'which documents belong to it',
                  'how it was handled before',
                  'what the annotation says'],
                 'You must ask for',
                 ['what each item forecloses',
                  'which items are joined',
                  'what leaves the plenary',
                  'what the closing hour does']),
t_fig_cap='Contents are in the agenda. Consequences have to be requested.',
t_body=[
 'Ask for the agenda item by item in terms of effect: what is decided under this item, what '
 'becomes impossible once it is decided, and which other items are affected by it.',
 'Require the three mechanisms to be identified expressly, because each is decisive and none '
 'announces itself: proposals to take items together, proposals to refer a text to a drafting '
 'or contact group, and any fixed closing time. For each, the effect on our own amendments is '
 'to be stated.',
 'Add the translation arithmetic yourself. A text reported two hours before the close cannot '
 'be issued in six languages, and that arithmetic is the strongest procedural ground available '
 'for moving a reporting time, since no delegation will argue in public for adopting an '
 'untranslated text.'],
t_say=[('Ask for effects: ', 'For each item: what is decided, what is foreclosed, what else is affected.'),
       ('Name the mechanisms: ', 'Identify every joining, referral and closing time expressly.'),
       ('Do the arithmetic: ', 'State the translation consequence of each reporting time.')],
t_bound='It reads an agenda as a list of subjects, because that is what an agenda is. It '
        'cannot see that item 11 decides item 8: the effect is nowhere stated in the text, and '
        'no summary of four modest lines will ever reveal what they do.',
t_a=[('What is decided, and what is ____________?', 'foreclosed'),
     ('Identify every ____________ expressly.', 'joining'),
     ('Every ____________ to a drafting group.', 'referral'),
     ('And any fixed ____________ time.', 'closing'),
     ('State the ____________ consequence of each reporting time.', 'translation'),
     ('An agenda is a list of ____________.', 'subjects')],
t_b_rubric='Say whether each is a substantive decision in effect.',
t_b=[('Taking items 6 and 8 together.', 'yes: it weakens an amendment'),
     ('Referring item 7 to a drafting group.', 'yes: it leaves the plenary'),
     ('Adopting the agenda as proposed.', 'yes: it adopts all of the above'),
     ('Noting the report of a subsidiary body.', 'usually not: no action is sought')],

case=dict(
 title='The Decision Room · The most substantive item on the agenda',
 brief=[
  'A four-day session opens with a provisional agenda of fourteen items. Items 4 to 9 are '
  'substantive; items 1 to 3 and 12 to 14 are formal; items 10 and 11 are organisational.',
  'The annotation to item 11, four lines long, proposes that items 6 and 8 be taken together, '
  'that item 7 be referred to a drafting group, and that the session close at one o’clock on '
  'the Thursday.',
  'The delegation has an amendment to item 8 and an instruction to resist the text under item '
  '7. The drafting group on item 7, if established, is scheduled to report on Thursday '
  'morning, two hours before the close.'],
 exhibit=figs.datatable('WHAT ADOPTING ITEM 11 WOULD DO',
                        ['Proposal', 'Appearance', 'Effect'],
                        [['items 6 and 8 together', 'saves time', 'our amendment weakened'],
                         ['item 7 to a drafting group', 'technical work', 'leaves the plenary'],
                         ['close Thursday at one', 'a timetable', 'no time to translate'],
                         ['one debate instead of two', 'efficiency', 'one intervention, not two'],
                         ['group reports Thursday a.m.', 'normal', 'adopt untranslated or not at all'],
                         ['agenda adopted as a whole', 'a formality', 'all of the above at once']]),
 exhibit_cap='Six modest-looking arrangements, each of which decides a substantive outcome.',
 exhibit_note='Nothing in the annotation is concealed. It is simply described in the language '
              'of arrangements rather than the language of outcomes.',
 voices=[('Elena Duarte', 'delegate, the Assembly',
          'Not only is item 11 substantive; on this agenda it is the only item that decides anything.'),
         ('Ambassador Clara Mendel', 'head of mission',
          'Then we intervene on item 11, first, and only on the joining of 6 and 8.'),
         ('Farida Haddad', 'protocol and interpreting',
          'And a text reported at eleven cannot be in six languages by one. That argument is unanswerable in public.')],
 steps=[('Find it', 'What does item 11 propose?'),
        ('Compare it', 'Appearance against effect.'),
        ('Infer it', 'Why is it not called substantive?'),
        ('Weigh it', 'Two sentences at the right moment.'),
        ('Decide', 'How is an agenda to be read?')],
 analysis=[('Find it. What is proposed?', 'joining, referral and a closing hour'),
           ('Compare it. What is the effect?', 'a weakened amendment and a text out of plenary'),
           ('Infer it. Why?', 'it is written in the language of arrangements'),
           ('Weigh it. What is required?', 'an early intervention on procedural grounds'),
           ('Decide. How is it read?', 'as a schedule of consequences, item by item')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say how every agenda is to be analysed.',
                 'Say which three mechanisms are always identified.',
                 'Say on what grounds an objection is made.',
                 'Say when the intervention is made.'],
 bank=['Every agenda is analysed item by item for what is decided, what is foreclosed and which other items are affected.',
       'Proposals to take items together, to refer a text and to fix a closing time are identified expressly, with their effect on our own amendments.',
       'Objection to an organisational proposal is made on procedural grounds, including interpretation and translation requirements.',
       'The intervention is made when the agenda is adopted, and not when the substantive item is reached.'],
 outcome='The delegation intervenes on item 11 in two sentences, asking that items 6 and 8 be '
         'taken separately and that any drafting group report by Wednesday afternoon so that '
         'its text may be issued in all languages. Both requests are accepted without debate, '
         'three other delegations supporting the second. The amendment to item 8 is carried on '
         'the Wednesday, and the practice of analysing agendas for effects is adopted by the '
         'mission for every session.',
 outcome_q=[('How long was the intervention?', 'two sentences'),
            ('What was asked?', 'separate debate on 6 and 8, and a Wednesday report'),
            ('How were the requests received?', 'accepted without debate'),
            ('Who supported the second?', 'three other delegations'),
            ('What happened to the amendment?', 'it was carried on the Wednesday')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Go through the agenda',
 task=['A delegate asked for an analysis of an annotated agenda.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Go through the agenda for next week.',
        'Tell me what each item is about.',
        'Match the documents to the items.',
        'Note anything unusual.',
        'The usual length.',
        'By Friday.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines about contents, and not one about consequences.',
 asked=['What each item is about', 'Match the documents', 'Note anything unusual'],
 back=['14 items described', '11 documents matched', '0 effects analysed'],
 gap='Nobody asked what each item forecloses, so item 11 was described in its own four modest lines.',
 back_cap='An accurate description of fourteen subjects, in which the decisive item appears trivial.',
 back_note='“Anything unusual” is answered from the text. An organisational item that decides '
           'three substantive outcomes is entirely usual, and that is precisely the difficulty.',
 diagnosis=[('“go through the agenda”', 'unscoped set'),
            ('“what each item is about”', 'hidden assumption'),
            ('“anything unusual”', 'hidden assumption'),
            ('“the agenda for next week”', 'unscoped set'),
            ('“the usual length”', 'ambiguous referent'),
            ('“by Friday”', 'ambiguous referent')],
 rewrite='Rewrite it on the six lines so that effects, not contents, are returned.',
 scaffold=['what must be known before the opening plenary',
           'which agenda, and what is background only',
           'what you are giving it',
           'the effects, the foreclosures and the three mechanisms',
           'when it is needed',
           'what happens where an effect is unclear'],
 bank=['Purpose: so that the delegation knows, before the opening plenary, what each item does to the others and where an intervention is required',
       'Scope: the provisional agenda and annotations for the September session; the previous session’s report is background only',
       'Inputs: the annotated agenda, our standing instructions, and the list of our amendments',
       'Criteria: for each item, what is decided, what is foreclosed and which other items are affected; every proposal to take items together, to refer a text or to fix a closing time identified expressly with its effect on our amendments; the interpretation and translation consequences of each timing proposal stated',
       'Done: with me the day before the opening plenary',
       'Fallback: where the effect of a proposal is unclear, it is listed as requiring a question to the secretariat rather than assessed'],
 check=['Are effects returned rather than contents?',
        'Are joining, referral and timing named?',
        'Is the effect on our amendments stated?',
        'Are unclear effects turned into questions?'],
 model=['so that the delegation knows, before the opening plenary, what each item does to the others and where an intervention is required',
        'the provisional agenda and annotations for the September session; the previous session’s report is background only',
        'the annotated agenda, our standing instructions, and the list of our amendments',
        'for each item, what is decided, what is foreclosed and which other items are affected; every proposal to take items together, to refer a text or to fix a closing time identified expressly with its effect on our amendments; the interpretation and translation consequences of each timing proposal stated',
        'with me the day before the opening plenary',
        'where the effect of a proposal is unclear, it is listed as requiring a question to the secretariat rather than assessed'],
 cost='14 items described, 0 effects analysed, and an agenda adopted that weakened our own amendment.'),

lang=dict(
 title='Across the Language Line · “Taking note” in two procedural traditions',
 setting=[
  'The chair proposes that the body take note of a report. In the tradition of several '
  'delegations present, taking note is a neutral act with no consequence whatever.',
  'In the tradition of two others, including one that is drafting the next text, taking note is '
  'the first stage of endorsement, and will be cited in six months as acceptance of the '
  'report’s recommendations.'],
 ladder=[('One procedural phrase', 'in two traditions'),
         ('A neutral act', 'and a first endorsement'),
         ('A citation in six months', 'of something nobody decided')],
 cap='A phrase that means nothing in one room and a great deal in the next.',
 turns=[('Turn 1 · The chair', 'May we take note of the report?'),
        ('Turn 2 · A delegation', 'Taking note carries no endorsement, as we understand it.'),
        ('Turn 3 · The chair', 'Shall the record so state?')],
 holds=['With your permission, may I ask what taking note implies here?',
        'In our practice it carries no endorsement of the recommendations.',
        'Could the record state that no endorsement is implied?',
        'I am not opposing the item; I am seeking clarity in the record.',
        'Would other delegations share that understanding?',
        'I will report that the phrase is read differently around this table.'],
 redline='Never let a procedural phrase pass without knowing what it will be cited as, and '
         'never imply that the chair is attempting to obtain an endorsement by stealth.',
 score=['Asked what the phrase implies in this body.',
        'Stated our own understanding plainly.',
        'Sought a statement in the record.',
        'Made clear no opposition was intended.',
        'Reported the divergence of understandings.'],
 a=[('What does the chair propose?', 'taking note of a report'),
    ('What does it mean in some traditions?', 'a neutral act with no consequence'),
    ('And in others?', 'a first stage of endorsement'),
    ('What should be asked?', 'what taking note implies here'),
    ('What should be sought?', 'a statement in the record'),
    ('What must not be implied?', 'that the chair is acting by stealth')]),

rev_fig=figs.split('READING AN AGENDA',
                   'The text gives',
                   ['the subjects',
                    'the annotations',
                    'the documents',
                    'the order'],
                   'You must derive',
                   ['what is foreclosed',
                    'which items are joined',
                    'what leaves the plenary',
                    'what the clock decides']),
rev_fig_cap='Everything on the right is a consequence, and consequences are never printed.',
rev=dict(
 read=[('How many items are on the agenda?',
        ['fourteen', 'eleven', 'nine', 'four'], 0),
       ('What is item 11 called?',
        ['organisation of work', 'financing',
         'review of implementation', 'draft text'], 0),
       ('What happens to items taken together?',
        ['they are debated once', 'they are debated twice',
         'they are deferred', 'they are referred'], 0),
       ('On what grounds is the objection made?',
        ['procedural grounds', 'substantive grounds',
         'financial grounds', 'no grounds'], 0)],
 listen_text='Ask for the agenda item by item in terms of effect: what is decided, what is '
             'foreclosed, and which other items are affected. Require every joining, referral '
             'and closing time to be named expressly.',
 listen=[('Ask for the agenda in terms of ____________.', 'effect'),
         ('What is decided, and what is ____________.', 'foreclosed'),
         ('Which other ____________ are affected.', 'items'),
         ('Name every ____________, referral and closing time.', 'joining')],
 speak=['Make six formal statements opening with negative adverbials, inverted.',
        'Then read an agenda from your own work for what each item forecloses.'],
 write='Write a six-line tasking for an agenda analysis.',
 vocab=[('The explanatory note under an item is an ____________ of an agenda.', 'annotation'),
        ('A meeting without records is an ____________ consultation.', 'informal'),
        ('The member who reports on an item is the ____________.', 'rapporteur'),
        ('Approval unless somebody objects is a ____________ procedure.', 'silence')],
 gram=[('Only when instructions arrive ____________ we take a position.', 'can'),
       ('Rarely ____________ two items been taken together in this committee.', 'have'),
       ('No sooner ____________ the item referred than the plenary moved on.', 'was'),
       ('Not until Thursday ____________ the group report to the plenary.', 'did')]),

found=['Read every agenda item for what it forecloses, not what it is about.',
       'Identify joining, referral and the closing hour expressly, every time.',
       'Intervene when the agenda is adopted, not when the item is reached.',
       'Make the objection on procedural grounds, and do the translation arithmetic.'],
end_line='The item called organisation of work is where the work is distributed.',
end_next='Next: What the Other Delegation Actually Said')
