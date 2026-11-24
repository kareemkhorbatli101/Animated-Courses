# -*- coding: utf-8 -*-
import figs

U = dict(
num=5,
title='Speaking So That You Can Be Interpreted',
gram='subordination in a chair’s text: where, insofar as, to the extent that',
ai='speaking so that an interpreter can carry it',
strap='CEFR B2 · Grammar: subordination in a chair’s text — where, insofar as, to the extent that · '
      'AI: speaking so that an interpreter can carry it',
cando=['use where, insofar as and to the extent that accurately',
       'deliver an intervention an interpreter can carry',
       'prepare a text for the booth rather than for the page',
       'read figures, names and lists so that they survive',
       'write a six-line tasking for a speaking text'],

hero=('A BEAUTIFUL INTERVENTION OF WHICH FOUR MINUTES REACHED THE ROOM',
      ['Six minutes, a hundred and seventy words a minute.',
       'Three delegations heard a summary, and two heard nothing of paragraph four.'],
      [(1100, 'grey', 'long'), (240, 'blue', 'short'), (220, 'teal', 'short')]),
hero_cap='An intervention written for the record and delivered to six interpretation booths.',

warm=['Have you ever spoken through an interpreter?',
      'What made it easy or difficult for them?',
      'What is lost when you speak quickly?'],

read=[
 'The intervention is six minutes long and written with care. It contains three subordinate '
 'clauses in its second sentence, four acronyms, two figures to one decimal place and a list of '
 'five countries.',
 'It is delivered at a hundred and seventy words a minute, which is the speed of a confident '
 'reader and roughly twice the speed at which simultaneous interpretation can carry dense '
 'material faithfully.',
 'What reaches the other booths, insofar as it reaches them at all, is a compressed version in '
 'which the subordinate clauses have been shortened, two of the acronyms expanded wrongly and '
 'one figure rounded.',
 'The delegation that will decide whether to support the proposal hears none of paragraph four, '
 'where the condition on which the support depends was stated.',
 'A text written for the record and a text written to be spoken through interpretation are not '
 'the same document, and the second is the one that affects the outcome.'],

dp1=('Delivery and interpretation', 'Conference practice commonly recommends a delivery rate '
     'in the region of a hundred words a minute for texts to be interpreted, and the provision '
     'of any prepared text to the booths in advance.',
     'Source: general conference interpretation guidance, 2025–2026.'),

c_a=[('How long is the intervention?', 'six minutes'),
     ('At what speed was it delivered?', 'a hundred and seventy words a minute'),
     ('How many acronyms does it contain?', 'four'),
     ('What happened to two of them?', 'they were expanded wrongly'),
     ('Which paragraph was lost?', 'paragraph four'),
     ('What was in paragraph four?', 'the condition on which support depended')],

c_b=[('The intervention was badly written.', 'F'),
     ('A hundred and seventy words a minute is slow.', 'F'),
     ('Interpretation carried everything.', 'F'),
     ('A speaking text differs from a text for the record.', 'T'),
     ('The condition reached every delegation.', 'F'),
     ('Prepared texts may be given to the booths.', 'T')],

c_c=[('____________ a delegation has instructions, it will speak on the item.', 'Where'),
     ('We can support the proposal ____________ as it concerns reporting.', 'insofar'),
     ('The text is acceptable to the ____________ that paragraph four is retained.', 'extent'),
     ('____________ the record is silent, the chair’s summary governs.', 'Where'),
     ('We agree, ____________ as our own instructions permit.', 'insofar'),
     ('____________ the extent that funds allow, the programme will continue.', 'To')],

c_d=[('Where, in this register, means ( in the place in which / in cases in which ).', ['in the place in which', 'in cases in which'], 1),
     ('Insofar as limits ( the degree of a statement / its time ).',
      ['the degree of a statement', 'its time'], 0),
     ('To the extent that is ( a close synonym of insofar as / its opposite ).',
      ['a close synonym of insofar as', 'its opposite'], 0),
     ('These connectives are hard for the booth because they ( delay the main point / are rare ).',
      ['delay the main point', 'are rare'], 0),
     ('A speaking text should carry ( one clause per sentence / three ).',
      ['one clause per sentence', 'three'], 0)],

c_e=('Easy or hard for the booth? Put each feature in the right column.',
     [('one clause per sentence', 'easy'),
      ('three subordinate clauses before the verb', 'hard'),
      ('figures read twice', 'easy'),
      ('four unexpanded acronyms', 'hard'),
      ('a pause at each paragraph', 'easy'),
      ('a list of five names read quickly', 'hard')],
     ['easy', 'hard']),

v_fig_title='THE BOOTH IN SIX WORDS',
v_fig=[('people', 'a simultaneous interpretation'), ('speech', 'a relay language'), ('clock', 'a rate of delivery'),
       ('doc', 'a prepared text handed in'), ('key', 'a glossary for the booth'), ('chart', 'a figure read twice')],
v_fig_cap='Six words for the six booths that decide what the room actually hears.',

vocab=[
 ('a simultaneous interpretation', 'interpretation given as the speaker speaks'),
 ('a booth', 'the enclosed place interpreters work from'),
 ('a relay language', 'a language used as a bridge between two others'),
 ('a pivot interpreter', 'the interpreter others work from'),
 ('a rate of delivery', 'how fast a speaker speaks'),
 ('a prepared text handed in', 'a text given to the booths in advance'),
 ('an acronym spelled out', 'initials given in full'),
 ('a list read aloud', 'items spoken in sequence'),
 ('a figure read twice', 'a number repeated for accuracy'),
 ('a proper name spelled', 'a name given letter by letter'),
 ('a pause at a paragraph', 'a break at the end of a paragraph'),
 ('a lag of interpretation', 'the delay behind the speaker'),
 ('a sequential interpretation', 'interpretation given after the speaker stops'),
 ('a technical term agreed in advance', 'a term settled before the meeting'),
 ('a glossary for the booth', 'a term list given to interpreters'),
 ('a microphone discipline', 'the habits that keep sound usable'),
 ('an aside not interpreted', 'a remark the booth does not carry'),
 ('a joke in one language', 'humour that does not travel'),
 ('a speed of a hundred words', 'the usual workable delivery rate'),
 ('a courtesy to the booth', 'consideration shown to interpreters')],

v_a=[('A language used as a bridge is a ____________ language.', 'relay'),
     ('The interpreter others work from is a ____________ interpreter.', 'pivot'),
     ('A text given to the booths in advance is a prepared text handed ____________.', 'in'),
     ('The delay behind the speaker is a ____________ of interpretation.', 'lag'),
     ('A term list given to interpreters is a ____________ for the booth.', 'glossary'),
     ('The habits that keep sound usable are ____________ discipline.', 'microphone'),
     ('A remark the booth does not carry is an aside not ____________.', 'interpreted'),
     ('Interpretation given after the speaker stops is a ____________ interpretation.', 'sequential')],

v_b=[('A booth is the enclosed place', 'interpreters work from.'),
     ('A figure read twice is a number', 'repeated for accuracy.'),
     ('A proper name spelled is a name', 'given letter by letter.'),
     ('A joke in one language is humour', 'that does not travel.'),
     ('A courtesy to the booth is consideration', 'shown to interpreters.')],

g_title='Grammar: subordination in a chair’s text — where, insofar as, to the extent that',
g_rule=['Where, in formal drafting, means in cases in which: where a delegation has '
        'instructions, it will speak on the item.',
        'Insofar as limits the degree or respect in which a statement holds: we can support the '
        'proposal insofar as it concerns reporting.',
        'To the extent that is a close synonym of insofar as and is used in the same way: the '
        'text is acceptable to the extent that paragraph four is retained.',
        'All three delay the main point, which is why they belong in a written text and are '
        'dangerous in a spoken one. In delivery, state the main proposition first and the '
        'limitation in a separate sentence.'],
g_fig=('LOOSE',
       ['In places where delegations have instructions they speak.',
        'We support it as far as reporting is concerned, sort of.',
        'The text is fine if paragraph four stays, more or less.',
        'As much as money allows, the programme goes on.'],
       'PRECISE',
       ['Where a delegation has instructions, it will speak on the item.',
        'We can support the proposal insofar as it concerns reporting.',
        'The text is acceptable to the extent that paragraph four is retained.',
        'To the extent that funds allow, the programme will continue.'],
       'four limitations expressed loosely',
       'the same four in the register of a chair’s text'),
g_fig_cap='Write them in a text; split them into two sentences when you speak.',

g_a=[('____________ a delegation has instructions, it will speak on the item.', 'Where'),
     ('We can support the proposal ____________ as it concerns reporting.', 'insofar'),
     ('The text is acceptable to the ____________ that paragraph four is retained.', 'extent'),
     ('____________ the record is silent, the chair’s summary governs.', 'Where'),
     ('We agree, ____________ as our own instructions permit.', 'insofar'),
     ('____________ the extent that funds allow, the programme will continue.', 'To'),
     ('____________ no objection is raised, the text will be considered adopted.', 'Where'),
     ('This applies ____________ as the reporting obligation is concerned.', 'insofar'),
     ('____________ the extent that the two texts differ, the original prevails.', 'To')],

g_b=[('( Where a delegation has instructions / In places where a delegation has instructions ) — formal sense.', ['Where a delegation has instructions', 'In places where a delegation has instructions'], 0),
     ('( insofar as it concerns reporting / as far as reporting is concerned, sort of ) — register.',
      ['insofar as it concerns reporting', 'as far as reporting is concerned, sort of'], 0),
     ('( to the extent that paragraph four is retained / if paragraph four stays, more or less ) — register.',
      ['to the extent that paragraph four is retained',
       'if paragraph four stays, more or less'], 0),
     ('( We support the proposal. This applies to reporting only. / We support the proposal insofar as, and to the extent that, reporting is concerned. ) — for delivery.',
      ['We support the proposal. This applies to reporting only.',
       'We support the proposal insofar as, and to the extent that, reporting is concerned.'], 0),
     ('( Where no objection is raised, the text will be considered adopted / Where no objection, adopted ) — complete.',
      ['Where no objection is raised, the text will be considered adopted',
       'Where no objection, adopted'], 0),
     ('( To the extent that the two texts differ, the original prevails / As much as texts differ, original prevails ) — register.',
      ['To the extent that the two texts differ, the original prevails',
       'As much as texts differ, original prevails'], 0)],

d1=dict(
 title='A hundred words a minute',
 fig=(['Six minutes, beautifully written.', 'And four minutes arrived.'],
      ['Which four?', 'Not the one with the condition.']),
 cap='Elena Duarte and Farida Haddad, after the intervention.',
 lines=[('Farida', 'Your intervention was excellent and the booths lost about a third of it.'),
        ('Elena', 'Which third?'),
        ('Farida', 'The dense parts. Your second sentence had three subordinate clauses before the main verb.'),
        ('Elena', 'That sentence was written for the record.'),
        ('Farida', 'And delivered to six booths at a hundred and seventy words a minute.'),
        ('Elena', 'What should the speed have been?'),
        ('Farida', 'About a hundred, and slower for the figures and the list of five countries.'),
        ('Elena', 'Paragraph four carried the condition on which our support depends.'),
        ('Farida', 'Two delegations did not hear a condition at all. They heard support.'),
        ('Elena', 'Then I shall hand the text to the booths in future, and say which paragraph matters most.'),
        ('Farida', 'Hand it in half an hour before, with the acronyms expanded and the names spelled.'),
        ('Elena', 'And deliver the condition in a short sentence of its own, twice if necessary.')],
 a=[('How much was lost?', 'about a third'),
    ('Which parts?', 'the dense ones, with three subordinate clauses'),
    ('What speed is workable?', 'about a hundred words a minute'),
    ('What did two delegations hear?', 'support, with no condition'),
    ('What will Elena do?', 'hand the text in, expanded and spelled, and repeat the condition')],
 b=[('Three subordinate ____________ before the main verb.', 'clauses'),
    ('Written for the ____________.', 'record'),
    ('Half an hour ____________.', 'before'),
    ('Twice if ____________.', 'necessary')]),

d2=dict(
 title='Through a third language',
 fig=(['Two booths work from the English.', 'And one works from them.'],
      ['So three steps.', 'And every step costs something.']),
 cap='Elena and a chief interpreter, before the afternoon session.',
 lines=[('Interpreter', 'You should know that two of our booths take you through relay.'),
        ('Elena', 'Meaning they work from another booth’s version, not from mine.'),
        ('Interpreter', 'Yes. Your English goes into one language, and two booths work from that.'),
        ('Elena', 'So a qualification has to survive two renderings, not one.'),
        ('Interpreter', 'And a joke has to survive three. Please do not make jokes.'),
        ('Elena', 'What else should I avoid?'),
        ('Interpreter', 'Negatives inside subordinate clauses, and figures to one decimal place spoken once.'),
        ('Elena', 'Read figures twice?'),
        ('Interpreter', 'Read them twice, and say the unit after the number both times.'),
        ('Elena', 'And the five country names?'),
        ('Interpreter', 'Slowly, in the order on the paper you will give me, and do not add a sixth from memory.'),
        ('Elena', 'And if the chair interrupts and I must speak without the paper?')],
 unresolved=True,
 a=[('What is relay?', 'a booth working from another booth’s version'),
    ('How many renderings must a qualification survive?', 'two'),
    ('What should not be attempted?', 'jokes'),
    ('How should figures be read?', 'twice, with the unit each time'),
    ('How should the list be read?', 'slowly, in the order on the paper, with nothing added')],
 b=[('They work from another booth’s ____________.', 'version'),
    ('Negatives inside ____________ clauses.', 'subordinate'),
    ('Say the ____________ after the number.', 'unit'),
    ('Do not add a ____________ from memory.', 'sixth')]),

speak=[('Where and insofar as',
        ['Make six limited statements about your own work.',
         'Use where, insofar as and to the extent that twice each.',
         'Your partner recasts each as two short spoken sentences.']),
       ('A hundred words a minute',
        ['Read a paragraph aloud while your partner times a hundred words.',
         'Mark where you exceeded the speed.',
         'Read it again at the right pace and compare the length.']),
       ('Through two renderings',
        ['Say a qualified position to your partner.',
         'They render it in different words; a third person renders that.',
         'Compare the final version with your own.'])],

ext_title='A text for the record and a text for the booth are two documents',
ext_fig=figs.datatable('THE SAME CONTENT, PREPARED TWO WAYS',
                       ['For the record', 'For delivery'],
                       [['three clauses in one sentence', 'three short sentences'],
                        ['acronyms used', 'acronyms expanded at first use'],
                        ['figures to one decimal', 'figures read twice, with the unit'],
                        ['a list of five, embedded', 'a list of five, announced and paused'],
                        ['the condition in paragraph four', 'the condition repeated at the end'],
                        ['a hundred and seventy words a minute', 'about a hundred']]),
ext_fig_cap='Six differences, and none of them changes a single element of the substance.',
ext=[
 'A system will produce an excellent intervention: well ordered, properly subordinated, '
 'economical and in the register of the body addressed. It will be a text for the record, '
 'because that is what good written English is.',
 'The requirement, however, is a text that can be carried by six booths, two of which may be '
 'working through relay from a third, at a delivery rate the interpretation can actually '
 'sustain.',
 'The constraints are specific and can all be specified in advance. One proposition to a '
 'sentence; subordinate clauses after the main verb rather than before it; acronyms expanded at '
 'first use; proper names spelled; figures read twice with the unit attached each time; lists '
 'announced before they are read.',
 'Where a condition carries the whole weight of a position, it is stated in a short sentence of '
 'its own and repeated at the end of the intervention. The alternative is that a delegation '
 'reading its own notes afterwards records support without the condition, and acts on it.',
 'The prepared text is handed to the booths half an hour in advance, which costs nothing and '
 'improves everything, and the paragraph that matters most is identified when it is handed in.',
 'None of this makes an intervention less dignified. It makes it audible, insofar as the '
 'physical arrangements of a multilingual room allow anything to be audible, and an intervention '
 'that is not heard has no effect whatever on the text.'],

dp2=('Relay interpretation', 'Where a language combination requires relay, each additional '
     'rendering increases the loss of qualification and detail, and practice accordingly '
     'recommends simpler syntax and slower delivery in such sessions.',
     'Source: general conference interpretation guidance, 2025–2026.'),

e_a=[('What will a system produce?', 'an excellent text for the record'),
     ('What is actually required?', 'a text six booths can carry'),
     ('How many propositions to a sentence?', 'one'),
     ('How are figures to be read?', 'twice, with the unit each time'),
     ('What happens to the key condition?', 'a short sentence of its own, repeated at the end')],
e_b=[('Good written English is good spoken English.', 'F'),
     ('Relay increases loss of detail.', 'T'),
     ('Subordinate clauses are best before the main verb in delivery.', 'F'),
     ('The prepared text may be handed to the booths.', 'T'),
     ('An unheard intervention still affects the text.', 'F'),
     ('Lists should be announced before they are read.', 'T')],

w_model='Purpose: so that the condition on which our support depends is heard by every '
        'delegation in the room, including those working through relay. Scope: our intervention '
        'on item 6 at tomorrow’s afternoon session; the written statement for the record is a '
        'separate document. Inputs: our instructions of 2 September, the current text of the '
        'draft decision, and the list of five countries as approved. Criteria: no more than one '
        'proposition to a sentence, with subordinate clauses after the main verb; every acronym '
        'expanded at first use; every proper name spelled; figures given twice with the unit; '
        'the condition stated in a sentence of its own and repeated in the closing line; total '
        'length not exceeding four minutes at a hundred words a minute. Done: with me tonight, '
        'for handing to the booths half an hour before we speak. Fallback: where a sentence '
        'cannot be simplified without losing the substance, it is marked for me to read slowly '
        'rather than rewritten.',
w_fig=figs.spec_card('SIX LINES FOR A SPEAKING TEXT',
                     [('Purpose', 'the condition is heard, including through relay'),
                      ('Scope', 'the intervention on item 6; the record text is separate'),
                      ('Inputs', 'instructions, the current text, the approved list'),
                      ('Criteria', 'one proposition a sentence; 100 words a minute; condition twice'),
                      ('Done', 'tonight, for the booths half an hour before'),
                      ('Fallback', 'unsimplifiable sentence: marked to read slowly')]),
w_fig_cap='The length limit is a speaking limit: four minutes at a hundred words, not four hundred words.',
w_task='Write a six-line tasking for a speaking text.',
w_steps=['Line 1: say what must be heard, and by whom.',
         'Line 2: say which intervention, and what is a separate document.',
         'Line 3: say what you are giving it.',
         'Line 4: say the syntax, the acronyms, the figures, the condition and the length.',
         'Line 5: say when you need it and what happens to it.',
         'Line 6: say what happens to a sentence that cannot be simplified.'],
w_bank=['Purpose: so that the condition on which our support depends is heard by every delegation, including those working through relay',
        'Scope: our intervention on item … ; the written statement for the record is a separate document',
        'Inputs: our instructions, the current text, and the approved list',
        'Criteria: one proposition to a sentence, subordinate clauses after the main verb; acronyms expanded at first use; names spelled; figures twice with the unit; the condition in a sentence of its own and repeated in the closing line; length not exceeding … minutes at a hundred words a minute',
        'Done: with me … , for handing to the booths half an hour before. Fallback: an unsimplifiable sentence is marked to be read slowly'],
w_check=['Is there one proposition to a sentence?',
         'Are acronyms and names handled?',
         'Is the condition stated twice?',
         'Is the length set in speaking minutes?'],

t_title='Speaking so that an interpreter can carry it',
t_fig=figs.split('ONE TEXT, TWO PURPOSES',
                 'For the record',
                 ['full subordination',
                  'acronyms in use',
                  'figures to one decimal',
                  'economy of words'],
                 'For the booth',
                 ['one proposition a sentence',
                  'acronyms expanded',
                  'figures read twice',
                  'the condition repeated']),
t_fig_cap='Specify the second document, or you will be handed the first and deliver it.',
t_body=[
 'State in the instruction that the text is to be spoken through interpretation, and give the '
 'constraints as criteria: one proposition to a sentence, subordinate clauses after the main '
 'verb, acronyms expanded at first use, proper names spelled, figures read twice with the unit '
 'attached, and lists announced before they are read.',
 'Set the length in speaking minutes rather than words, at about a hundred words a minute, and '
 'require the condition on which the position depends to appear in a short sentence of its own '
 'and again in the closing line.',
 'Then hand the text to the booths half an hour before you speak, saying which paragraph '
 'matters most, and remember that two booths may be working through relay, so that every '
 'qualification must survive two renderings rather than one.'],
t_say=[('Name the medium: ', 'This text is to be spoken through interpretation into six languages.'),
       ('Set the pace: ', 'Four minutes at a hundred words a minute, not four hundred words.'),
       ('Protect the condition: ', 'The condition in its own sentence, and again in the closing line.')],
t_bound='It writes for a reader, and a reader can go back over a sentence. A booth cannot, and '
        'nothing in a well-written text shows which clause will be the one that is lost.',
t_a=[('One ____________ to a sentence.', 'proposition'),
     ('Subordinate clauses after the main ____________.', 'verb'),
     ('Acronyms ____________ at first use.', 'expanded'),
     ('Figures read ____________.', 'twice'),
     ('The condition again in the ____________ line.', 'closing'),
     ('A booth cannot go ____________ over a sentence.', 'back')],
t_b_rubric='Say whether each belongs in a text for delivery.',
t_b=[('Three subordinate clauses before the main verb.', 'no: split them'),
     ('An acronym expanded at first use.', 'yes'),
     ('A figure given once, to one decimal place.', 'no: twice, with the unit'),
     ('The key condition repeated at the end.', 'yes')],

case=dict(
 title='The Decision Room · Four minutes of six, and not the right four',
 brief=[
  'A delegation delivers a six-minute intervention on an item on which its support is '
  'conditional. The text was written for the record and is admirably economical.',
  'Delivery is at a hundred and seventy words a minute. The second sentence contains three '
  'subordinate clauses before the main verb, four acronyms are used unexpanded, two figures are '
  'given once to one decimal place, and five country names are read in a single breath.',
  'Two of the six booths are working through relay. The delegation whose vote is in question '
  'records the intervention in its own notes as unconditional support, and the condition in '
  'paragraph four does not appear in those notes at all.'],
 exhibit=figs.datatable('WHAT EACH ROOM HEARD',
                        ['Element', 'Direct booths', 'Relay booths'],
                        [['the position', 'carried', 'carried'],
                         ['the three-clause sentence', 'compressed', 'lost'],
                         ['the four acronyms', 'two wrong', 'three wrong'],
                         ['the two figures', 'one rounded', 'both rounded'],
                         ['the five names', 'four carried', 'three carried'],
                         ['the condition in paragraph four', 'carried once', 'not carried']]),
 exhibit_cap='The position survived everywhere. The condition survived nowhere that mattered.',
 exhibit_note='The interpreters performed correctly under the conditions given to them. The '
              'conditions were set by the speaker.',
 voices=[('Farida Haddad', 'protocol and interpreting',
          'A hundred and seventy words a minute is a reading speed, not a speaking speed.'),
         ('Elena Duarte', 'delegate, the Assembly',
          'And the one paragraph I most needed carried was the densest one in the text.'),
         ('Ambassador Clara Mendel', 'head of mission',
          'A position recorded without its condition is worse than no intervention at all.')],
 steps=[('Find it', 'What was delivered, and how?'),
        ('Compare it', 'The text against what arrived.'),
        ('Infer it', 'Why was the condition lost?'),
        ('Weigh it', 'Two minutes longer, and the text handed in.'),
        ('Decide', 'How is an intervention to be prepared?')],
 analysis=[('Find it. What was delivered?', 'six minutes at a hundred and seventy words'),
           ('Compare it. What arrived?', 'the position, without the condition'),
           ('Infer it. Why?', 'density and speed, with relay in two booths'),
           ('Weigh it. What is the cost?', 'a slower, simpler and slightly longer text'),
           ('Decide. How is it prepared?', 'as a speaking text, handed to the booths in advance')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say how a text for delivery is written.',
                 'Say at what rate it is delivered.',
                 'Say what is done with the key condition.',
                 'Say what is given to the booths.'],
 bank=['A text for delivery carries one proposition to a sentence, with subordinate clauses after the main verb.',
       'Delivery is at about a hundred words a minute, and the length of the text is set in speaking minutes.',
       'The condition on which a position depends is stated in a sentence of its own and repeated in the closing line.',
       'The prepared text is handed to the booths half an hour in advance, with the paragraph that matters most identified.'],
 outcome='The intervention is rewritten as four and a half minutes of short sentences, with the '
         'acronyms expanded, the names spelled on a sheet handed to the booths and the condition '
         'stated twice. It is delivered the following day. The delegation in question asks a '
         'question about the condition from the floor, which is the first evidence in three days '
         'that any delegation has heard it, and the condition appears in the chair’s summary '
         'that evening.',
 outcome_q=[('How long was the rewritten text?', 'four and a half minutes'),
            ('What was handed to the booths?', 'the text, with names spelled'),
            ('How often was the condition stated?', 'twice'),
            ('What did the other delegation do?', 'asked a question about the condition'),
            ('Where did the condition appear?', 'in the chair’s summary that evening')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Draft me an intervention',
 task=['A delegate asked for an intervention for a session with six interpretation booths.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Draft me an intervention on item 6.',
        'Six minutes.',
        'Cover our instructions.',
        'The same as the last one.',
        'Include the condition.',
        'Tonight.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them mentions that the text will be interpreted.',
 asked=['Six minutes', 'Cover our instructions', 'The same as the last one'],
 back=['820 words', '4 acronyms', '0 lines written for a booth'],
 gap='Nobody said that the text would be spoken through interpretation, so it was written to be read.',
 back_cap='A dignified text of eight hundred and twenty words, which is six minutes of reading and nine of speaking.',
 back_note='“Six minutes” was read as a quantity of words rather than a duration of speech, and '
           '“dignified” rewards exactly the subordination that a booth cannot carry.',
 diagnosis=[('“an intervention on item 6”', 'unscoped set'),
            ('“six minutes”', 'hidden assumption'),
            ('“cover our instructions”', 'unscoped set'),
            ('“the same as the last one”', 'ambiguous referent'),
            ('“the condition”', 'ambiguous referent'),
            ('“tonight”', 'hidden assumption')],
 rewrite='Rewrite it on the six lines so that the text is written for the booth.',
 scaffold=['what must be heard, and by whom',
           'which intervention, and what is a separate document',
           'what you are giving it',
           'the syntax, the acronyms, the figures, the condition and the length',
           'when you need it and what happens to it',
           'what happens to a sentence that cannot be simplified'],
 bank=['Purpose: so that the condition on which our support depends is heard by every delegation in the room, including those working through relay',
       'Scope: our intervention on item 6 at tomorrow’s afternoon session; the written statement for the record is a separate document',
       'Inputs: our instructions of 2 September, the current text of the draft decision, and the list of five countries as approved',
       'Criteria: no more than one proposition to a sentence, with subordinate clauses after the main verb; every acronym expanded at first use; every proper name spelled; figures given twice with the unit; the condition stated in a sentence of its own and repeated in the closing line; total length not exceeding four minutes at a hundred words a minute',
       'Done: with me tonight, for handing to the booths half an hour before we speak',
       'Fallback: where a sentence cannot be simplified without losing the substance, it is marked for me to read slowly rather than rewritten'],
 check=['Is the medium named?',
        'Is the length in speaking minutes?',
        'Is the condition stated twice?',
        'Are acronyms, names and figures handled?'],
 model=['so that the condition on which our support depends is heard by every delegation in the room, including those working through relay',
        'our intervention on item 6 at tomorrow’s afternoon session; the written statement for the record is a separate document',
        'our instructions of 2 September, the current text of the draft decision, and the list of five countries as approved',
        'no more than one proposition to a sentence, with subordinate clauses after the main verb; every acronym expanded at first use; every proper name spelled; figures given twice with the unit; the condition stated in a sentence of its own and repeated in the closing line; total length not exceeding four minutes at a hundred words a minute',
        'with me tonight, for handing to the booths half an hour before we speak',
        'where a sentence cannot be simplified without losing the substance, it is marked for me to read slowly rather than rewritten'],
 cost='820 words, 0 booth-ready sentences, and a condition that reached nobody who needed it.'),

lang=dict(
 title='Across the Language Line · A proverb that costs the booth eleven seconds',
 setting=[
  'A head of delegation opens with a proverb from his own tradition, warmly meant and perfectly '
  'apt. It has no equivalent in four of the six working languages.',
  'The booths render it literally, which is baffling; two then add a short explanation, which '
  'costs eleven seconds. By the time they rejoin the speech, the first substantive sentence has '
  'gone.'],
 ladder=[('A warm proverb', 'perfectly apt in the original'),
         ('A literal rendering', 'and an explanation of eleven seconds'),
         ('The first substantive sentence', 'spoken into a gap')],
 cap='Eleven seconds of courtesy, paid for with the opening of the argument.',
 turns=[('Turn 1 · The speaker', '(a proverb, followed immediately by the main proposal)'),
        ('Turn 2 · The booths', '(a literal rendering, then an explanation)'),
        ('Turn 3 · A delegate', 'I am sorry — could the delegation repeat its proposal?')],
 holds=['Would it help the booths if I gave the proverb and then paused?',
        'I can hand in the proverb with a line of explanation beforehand.',
        'Shall I put the proposal first and the courtesy at the end?',
        'I do not want to lose the opening sentence to an explanation.',
        'May I ask the booths what they would prefer?',
        'I will keep the proverb and separate it from the substance.'],
 redline='Never let a courtesy swallow the first substantive sentence, and never ask a '
         'delegation to drop a greeting from its own tradition.',
 score=['Offered to pause after the proverb.',
        'Offered the proverb to the booths in advance.',
        'Proposed reordering rather than removing it.',
        'Named the risk to the opening sentence.',
        'Asked the booths for their preference.'],
 a=[('What did the speaker open with?', 'a proverb from his own tradition'),
    ('What did the booths do?', 'rendered it literally, then explained it'),
    ('How long did that cost?', 'eleven seconds'),
    ('What was lost?', 'the first substantive sentence'),
    ('What is the remedy?', 'a pause, advance notice, or reordering'),
    ('What must not be asked?', 'that the greeting be dropped')]),

rev_fig=figs.split('AN INTERVENTION',
                   'Write',
                   ['one proposition a sentence',
                    'clauses after the main verb',
                    'acronyms expanded',
                    'names spelled'],
                   'Do',
                   ['a hundred words a minute',
                    'figures read twice',
                    'the condition twice',
                    'the text to the booths']),
rev_fig_cap='Four things on the page and four in the room, and together they are the whole technique.',
rev=dict(
 read=[('How long was the intervention?',
        ['six minutes', 'four minutes', 'nine minutes', 'two minutes'], 0),
       ('At what speed was it delivered?',
        ['a hundred and seventy words a minute', 'a hundred words a minute',
         'eighty words a minute', 'two hundred words a minute'], 0),
       ('What is relay?',
        ['a booth working from another booth', 'a second speaker',
         'a written translation', 'a recording'], 0),
       ('How should figures be read?',
        ['twice, with the unit', 'once, quickly',
         'rounded', 'in the written text only'], 0)],
 listen_text='Say that the text is to be spoken through interpretation, set the length in '
             'speaking minutes at about a hundred words a minute, keep one proposition to a '
             'sentence, and state the condition twice.',
 listen=[('Say that the text is to be spoken through ____________.', 'interpretation'),
         ('Set the length in speaking ____________.', 'minutes'),
         ('One ____________ to a sentence.', 'proposition'),
         ('And state the ____________ twice.', 'condition')],
 speak=['Make six limited statements with where, insofar as and to the extent that.',
        'Then deliver a qualified position at a hundred words a minute.'],
 write='Write a six-line tasking for a speaking text.',
 vocab=[('A language used as a bridge is a ____________ language.', 'relay'),
        ('The delay behind the speaker is a ____________ of interpretation.', 'lag'),
        ('A term list given to interpreters is a ____________ for the booth.', 'glossary'),
        ('A remark the booth does not carry is an aside not ____________.', 'interpreted')],
 gram=[('____________ no objection is raised, the text will be considered adopted.', 'Where'),
       ('This applies ____________ as the reporting obligation is concerned.', 'insofar'),
       ('____________ the extent that the two texts differ, the original prevails.', 'To'),
       ('____________ a delegation holds instructions, it may speak.', 'Where')]),

found=['Write a separate text for delivery, with one proposition to a sentence.',
       'Set length in speaking minutes at about a hundred words a minute.',
       'Expand acronyms, spell names, read figures twice with the unit.',
       'State the decisive condition in its own sentence and again at the end.'],
end_line='An intervention nobody hears has no effect on the text.',
end_next='Next: The Chair’s Text and Your Instructions')
