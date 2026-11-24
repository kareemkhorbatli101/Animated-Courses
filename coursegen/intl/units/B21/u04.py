# -*- coding: utf-8 -*-
import figs

U = dict(
num=4,
title='Amendments and the Shape of a Text',
gram='the language of amendment: insert, delete, replace, retain',
ai='amendments tracked through five versions of a text',
strap='CEFR B2 · Grammar: the language of amendment — insert, delete, replace, retain · '
      'AI: amendments tracked through five versions of a text',
cando=['draft an amendment in the standard language of amendment',
       'track a provision through five versions of a text',
       'see where an obligation was weakened between revisions',
       'state precisely what you wish to insert, delete, replace or retain',
       'write a six-line tasking for a version comparison'],

hero=('BY THE FIFTH REVISION THE OBLIGATION HAD BECOME AN ASPIRATION',
      ['No single revision weakened it noticeably.',
       'Each weakened it a little, and nobody compared version one with version five.'],
      [(1120, 'grey', 'long'), (200, 'blue', 'short'), (260, 'teal', 'short')]),
hero_cap='Paragraph 9 of a draft decision, traced through five revisions over nine days.',

warm=['How does a text change during a negotiation?',
      'Who keeps the earlier versions?',
      'What happens to a word that disappears gradually?'],

read=[
 'Paragraph 9 of the draft decision has existed in five versions in nine days. In the first it '
 'provided that parties shall submit annual data. In the fifth it provides that parties are '
 'encouraged to submit data periodically where practicable.',
 'No single revision was objectionable. Shall became should in revision two, submit became '
 'endeavour to submit in revision three, annual became periodic in revision four, and the '
 'qualification where practicable was inserted in revision five.',
 'Each change was proposed as a drafting improvement, each was accepted in a room where the '
 'immediately preceding version was the only one on the table, and the whole set has the effect '
 'of removing the obligation altogether.',
 'This is an ordinary feature of negotiation rather than a trick, and the remedy is mechanical. '
 'Every provision that matters is to be compared with version one and not with the version that '
 'has just been superseded.',
 'A delegation that holds instructions on a paragraph is therefore obliged to track that '
 'paragraph through every revision, which is a task of exactly the kind that can be delegated '
 'to a machine and must be specified with care.'],

dp1=('Successive revisions', 'Drafting practice commonly observes that the cumulative effect '
     'of a series of individually minor revisions may alter the legal character of a provision, '
     'and recommends comparison against the original rather than the preceding text.',
     'Source: general drafting practice literature, 2025–2026.'),

c_a=[('How many versions have there been?', 'five'),
     ('Over how many days?', 'nine'),
     ('What did version one provide?', 'that parties shall submit annual data'),
     ('And version five?', 'that parties are encouraged to submit data periodically where practicable'),
     ('What happened in revision two?', 'shall became should'),
     ('What was inserted in revision five?', 'where practicable')],

c_b=[('One revision destroyed the obligation.', 'F'),
     ('Each change looked like an improvement.', 'T'),
     ('The earlier versions were on the table.', 'F'),
     ('The cumulative effect is substantive.', 'T'),
     ('This is an unusual trick.', 'F'),
     ('Comparison should be with version one.', 'T')],

c_c=[('In paragraph 9, ____________ “shall” and insert “should”.', 'delete'),
     ('____________ the words “where practicable” after “periodically”.', 'Insert'),
     ('____________ “periodic” by “annual” throughout the paragraph.', 'Replace'),
     ('____________ the existing wording of subparagraph (b).', 'Retain'),
     ('In the chapeau, ____________ the word “encouraged”.', 'delete'),
     ('____________ a new subparagraph (c) after subparagraph (b).', 'Insert')],

c_d=[('Insert is followed by ( the words and their position / nothing ).', ['the words and their position', 'nothing'], 0),
     ('Replace takes ( X by Y / X to Y ).', ['X by Y', 'X to Y'], 0),
     ('Retain is used to ( resist a proposed change / propose one ).',
      ['resist a proposed change', 'propose one'], 0),
     ('The weakening of paragraph 9 was ( cumulative / sudden ).',
      ['cumulative', 'sudden'], 0),
     ('Comparison should be against ( version one / the preceding version ).',
      ['version one', 'the preceding version'], 0)],

c_e=('Which amendment verb? Put each operation in the right column.',
     [('add “within six months”', 'insert'),
      ('remove “where practicable”', 'delete'),
      ('put “shall” where “should” stands', 'replace'),
      ('keep subparagraph (b) as it is', 'retain'),
      ('add a new subparagraph', 'insert'),
      ('strike out the second sentence', 'delete')],
     ['insert', 'delete', 'replace', 'retain']),

v_fig_title='AN AMENDMENT IN SIX WORDS',
v_fig=[('doc', 'an amendment'), ('key', 'an operative verb'), ('chart', 'a consolidated version'),
       ('clock', 'a revision number'), ('people', 'a sponsor of an amendment'), ('speech', 'a square bracket')],
v_fig_cap='Six words for the operation by which a text is actually changed.',

vocab=[
 ('an amendment', 'a proposed change to a text'),
 ('an insertion', 'words added to a text'),
 ('a deletion', 'words removed from a text'),
 ('a replacement of words', 'words put in place of others'),
 ('a retention of wording', 'keeping the existing words'),
 ('a square bracket', 'a mark showing wording is not agreed'),
 ('a version of a text', 'one state of a text at a time'),
 ('a consolidated version', 'all changes incorporated in one text'),
 ('a track of changes', 'a record of what was altered'),
 ('a sponsor of an amendment', 'the delegation proposing it'),
 ('an order of voting on amendments', 'the sequence in which they are put'),
 ('a friendly amendment', 'a change the sponsor accepts'),
 ('an amendment of substance', 'a change that alters the obligation'),
 ('an amendment of form', 'a change that does not alter the obligation'),
 ('a chapeau', 'the introductory words before a list'),
 ('an operative verb', 'the verb that creates the obligation'),
 ('a preambular paragraph', 'a paragraph before the operative part'),
 ('a saving of position', 'a note that a position is not given up'),
 ('a revision number', 'the number identifying a version'),
 ('a clean text', 'a text with no brackets or marks')],

v_a=[('A mark showing wording is not agreed is a ____________ bracket.', 'square'),
     ('All changes incorporated in one text is a ____________ version.', 'consolidated'),
     ('The introductory words before a list are a ____________.', 'chapeau'),
     ('The verb that creates the obligation is the ____________ verb.', 'operative'),
     ('A change that alters the obligation is an amendment of ____________.', 'substance'),
     ('A note that a position is not given up is a ____________ of position.', 'saving'),
     ('A text with no brackets or marks is a ____________ text.', 'clean'),
     ('The delegation proposing an amendment is its ____________.', 'sponsor')],

v_b=[('An insertion is words', 'added to a text.'),
     ('A retention of wording is keeping', 'the existing words.'),
     ('A friendly amendment is a change', 'the sponsor accepts.'),
     ('A preambular paragraph is a paragraph', 'before the operative part.'),
     ('A revision number is the number', 'identifying a version.')],

g_title='Grammar: the language of amendment — insert, delete, replace, retain',
g_rule=['The four operations are expressed in the imperative, with the location given exactly: '
        'in paragraph 9, delete “shall” and insert “should”.',
        'Insert names the words and their position: insert the words “where practicable” after '
        '“periodically”.',
        'Replace takes the pattern replace X by Y: replace “periodic” by “annual” throughout the '
        'paragraph. Delete takes the words alone.',
        'Retain is used to resist a change rather than to propose one: retain the existing '
        'wording of subparagraph (b). It is the only one of the four that creates no new text.'],
g_fig=('LOOSE',
       ['We would like shall to be should.',
        'Could where practicable go in after periodically?',
        'We prefer annual to periodic.',
        'We like subparagraph (b) as it is.'],
       'PRECISE',
       ['In paragraph 9, delete “shall” and insert “should”.',
        'Insert the words “where practicable” after “periodically”.',
        'Replace “periodic” by “annual” throughout the paragraph.',
        'Retain the existing wording of subparagraph (b).'],
       'four preferences expressed as wishes',
       'the same four as amendments a secretariat can process'),
g_fig_cap='A wish cannot be put to a meeting. An amendment names the operation, the words and the place.',

g_a=[('In paragraph 9, ____________ “shall” and insert “should”.', 'delete'),
     ('____________ the words “where practicable” after “periodically”.', 'Insert'),
     ('____________ “periodic” by “annual” throughout the paragraph.', 'Replace'),
     ('____________ the existing wording of subparagraph (b).', 'Retain'),
     ('In the chapeau, ____________ the word “encouraged”.', 'delete'),
     ('____________ a new subparagraph (c) after subparagraph (b).', 'Insert'),
     ('____________ “endeavour to submit” by “submit”.', 'Replace'),
     ('____________ the second sentence of paragraph 4 in its entirety.', 'Delete'),
     ('____________ the square brackets around “annual”.', 'Delete')],

g_b=[('( We would like shall to be should / In paragraph 9, delete “shall” and insert “should” ) — processable.', ['We would like shall to be should', 'In paragraph 9, delete “shall” and insert “should”'], 1),
     ('( Insert “where practicable” after “periodically” / Could where practicable go in somewhere ) — position given.',
      ['Insert “where practicable” after “periodically”',
       'Could where practicable go in somewhere'], 0),
     ('( Replace “periodic” by “annual” / Replace “periodic” to “annual” ) — pattern.',
      ['Replace “periodic” by “annual”', 'Replace “periodic” to “annual”'], 0),
     ('( Retain the existing wording of subparagraph (b) / Keep (b) nice as it is ) — register.',
      ['Retain the existing wording of subparagraph (b)', 'Keep (b) nice as it is'], 0),
     ('( Delete the second sentence of paragraph 4 / Delete about the second sentence ) — form.',
      ['Delete the second sentence of paragraph 4', 'Delete about the second sentence'], 0),
     ('( Insert a new subparagraph (c) after subparagraph (b) / Insert a new subparagraph somewhere sensible ) — precision.',
      ['Insert a new subparagraph (c) after subparagraph (b)',
       'Insert a new subparagraph somewhere sensible'], 0)],

d1=dict(
 title='Five versions in nine days',
 fig=(['Nothing has changed much.', 'Compare it with version one.'],
      ['Shall became should.', 'And three other things.']),
 cap='Elena Duarte and Ambassador Clara Mendel, on the ninth day.',
 lines=[('Mendel', 'Is paragraph 9 still acceptable to us?'),
        ('Elena', 'Compared with yesterday’s version, yes. Compared with version one, no.'),
        ('Mendel', 'Take me through it.'),
        ('Elena', 'Version one: parties shall submit annual data. Version two: should submit. Version three: should endeavour to submit.'),
        ('Mendel', 'And the data?'),
        ('Elena', 'Annual became periodic in version four, and version five adds where practicable.'),
        ('Mendel', 'So we have moved from an obligation to a suggestion in four steps.'),
        ('Elena', 'Each step was proposed as drafting. Each was accepted against the version before it.'),
        ('Mendel', 'Nobody in the room had version one in front of them.'),
        ('Elena', 'Nobody in the room had seen version one for eight days.'),
        ('Mendel', 'Then our amendment is to version five and our comparison is with version one.'),
        ('Elena', 'Replace “are encouraged to submit data periodically where practicable” by “shall submit annual data”. One line, and the whole history in the explanation.')],
 a=[('How does paragraph 9 compare with yesterday?', 'it is acceptable'),
    ('And with version one?', 'it is not'),
    ('What happened to shall?', 'it became should, then should endeavour to'),
    ('What happened to annual?', 'it became periodic, then periodic where practicable'),
    ('What will the delegation propose?', 'replacing the wording with that of version one')],
 b=[('An obligation to a ____________ in four steps.', 'suggestion'),
    ('Each step was proposed as ____________.', 'drafting'),
    ('Nobody had version one in ____________ of them.', 'front'),
    ('The whole ____________ in the explanation.', 'history')]),

d2=dict(
 title='Substance or form',
 fig=(['It is only drafting.', 'Which verb does it change?'],
      ['The operative one.', 'Then it is not only drafting.']),
 cap='Elena and a delegate from another delegation, in the corridor.',
 lines=[('Delegate', 'Our amendment is purely one of form. It tidies the chapeau.'),
        ('Elena', 'Which words does it touch?'),
        ('Delegate', 'It moves “as appropriate” from the end of the paragraph into the chapeau.'),
        ('Elena', 'Then it applies to all four subparagraphs instead of the last one.'),
        ('Delegate', 'That is a consequence, not an intention.'),
        ('Elena', 'I accept that entirely, and the consequence is still substantive.'),
        ('Delegate', 'Would you oppose it?'),
        ('Elena', 'I would ask the sponsor to say in the record that no change of scope is intended.'),
        ('Delegate', 'That we could accept.'),
        ('Elena', 'An amendment of form is one that leaves every operative verb and every scope untouched.'),
        ('Delegate', 'A narrower definition than most delegations use.'),
        ('Elena', 'It is the only one that can be tested. And where a change touches a chapeau, who decides whether it is form?')],
 unresolved=True,
 a=[('What does the delegate call the amendment?', 'purely one of form'),
    ('What does it do?', 'moves “as appropriate” into the chapeau'),
    ('What is the effect?', 'it applies to all four subparagraphs'),
    ('What does Elena ask for?', 'a statement in the record that no change of scope is intended'),
    ('What is an amendment of form?', 'one leaving every operative verb and scope untouched')],
 b=[('It ____________ the chapeau.', 'tidies'),
    ('That is a ____________, not an intention.', 'consequence'),
    ('No change of ____________ is intended.', 'scope'),
    ('The only one that can be ____________.', 'tested')]),

speak=[('Four operations',
        ['Take any paragraph of a document you know.',
         'Propose eight changes to it using insert, delete, replace and retain.',
         'Your partner rejects any that does not name the words and the place.']),
       ('Against version one',
        ['Describe how a text or a plan in your work has changed over time.',
         'Your partner asks what the first version said.',
         'Say whether the cumulative change is substantive.']),
       ('Form or substance',
        ['Propose four amendments to your partner, calling each one drafting.',
         'They test each against the operative verb and the scope.',
         'Concede the ones that fail the test.'])],

ext_title='The text to compare with is the first one, not the last one',
ext_fig=figs.datatable('PARAGRAPH 9 THROUGH FIVE VERSIONS',
                       ['Version', 'Operative wording', 'Character'],
                       [['1', 'shall submit annual data', 'obligation'],
                        ['2', 'should submit annual data', 'recommendation'],
                        ['3', 'should endeavour to submit annual data', 'weak recommendation'],
                        ['4', 'should endeavour to submit periodic data', 'weaker still'],
                        ['5', 'are encouraged to submit data periodically where practicable', 'aspiration'],
                        ['—', 'change per revision', 'none noticeable']]),
ext_fig_cap='Five versions, each a small step, and a change of legal character over nine days.',
ext=[
 'Tracking a provision through successive revisions is among the most reliable uses of a '
 'machine in a negotiation, and it is also among the easiest to specify badly.',
 'The ordinary request — what has changed since the last version — produces exactly the '
 'comparison that a negotiating room already performs, and a room comparing each text with its '
 'immediate predecessor will accept an unlimited series of small weakenings.',
 'The instruction must therefore name version one as the baseline and require every provision '
 'on which instructions are held to be compared against it, with each intermediate version '
 'listed so that the sequence of changes is visible.',
 'It must also name the elements that matter, since a general comparison returns every '
 'difference with equal weight. The operative verb, the scope, the time limits, the '
 'qualifications and the brackets are what determine the character of a provision; punctuation '
 'and the order of subparagraphs are usually not.',
 'A particular class of change deserves separate treatment. Words moved into or out of a '
 'chapeau change their scope without changing their wording, and a comparison that reports '
 'wording only will record such a move as no change at all.',
 'Where the cumulative effect is substantive, the amendment is drafted against the current text '
 'and the explanation is given against version one. A delegation that says shall was replaced '
 'by four separate dilutions in nine days is making a stronger case than one that objects to '
 'the fifth of them.'],

dp2=('Chapeau and scope', 'Drafting practice recognises that qualifying words transferred '
     'between a chapeau and individual subparagraphs alter the scope of their application '
     'without any change in their wording, and treats such transfers as substantive.',
     'Source: general drafting practice literature, 2025–2026.'),

e_a=[('What does the ordinary request produce?', 'the comparison the room already performs'),
     ('What will a room accept?', 'an unlimited series of small weakenings'),
     ('What must be named as baseline?', 'version one'),
     ('Which elements matter?', 'operative verb, scope, time limits, qualifications, brackets'),
     ('What class of change needs separate treatment?', 'words moved into or out of a chapeau')],
e_b=[('Comparing with the previous version is enough.', 'F'),
     ('Each intermediate version should be listed.', 'T'),
     ('A general comparison weights differences equally.', 'T'),
     ('Punctuation usually changes the character of a provision.', 'F'),
     ('A chapeau move may be reported as no change.', 'T'),
     ('The explanation is given against version one.', 'T')],

w_model='Purpose: so that I can tell the Ambassador whether paragraph 9 still carries the '
        'obligation we were instructed to secure. Scope: paragraphs 4, 9 and 12 of the draft '
        'decision, in all five revisions; the preambular paragraphs are not covered. Inputs: the '
        'five versions as issued, and our instructions of 2 September. Criteria: each of the '
        'three paragraphs compared against version one, not against the preceding revision, with '
        'every intermediate version quoted; the operative verb, the scope, any time limit, any '
        'qualification and any bracket reported for each version; any words moved into or out of '
        'a chapeau identified expressly as a change of scope. Done: with me by seven o’clock '
        'this evening. Fallback: where it is unclear which version a change belongs to, the '
        'change is reported as undated rather than assigned.',
w_fig=figs.spec_card('SIX LINES FOR A VERSION COMPARISON',
                     [('Purpose', 'does paragraph 9 still carry the obligation?'),
                      ('Scope', 'paragraphs 4, 9 and 12, five revisions'),
                      ('Inputs', 'the five versions and our instructions'),
                      ('Criteria', 'baseline version one; verb, scope, limits, brackets; chapeau moves'),
                      ('Done', 'by seven this evening'),
                      ('Fallback', 'unclear provenance: report as undated')]),
w_fig_cap='“Against version one, not the preceding revision” is the whole of the instruction.',
w_task='Write a six-line tasking for a comparison across versions of a text.',
w_steps=['Line 1: say what you must be able to tell your head of mission.',
         'Line 2: say which paragraphs and versions, and what is excluded.',
         'Line 3: say what you are giving it.',
         'Line 4: say the baseline, the elements and the chapeau rule.',
         'Line 5: say by when.',
         'Line 6: say what happens where a change cannot be dated.'],
w_bank=['Purpose: so that I can tell … whether paragraph … still carries the obligation we were instructed to secure',
        'Scope: paragraphs … of the draft decision, in all … revisions; … are not covered',
        'Inputs: the versions as issued, and our instructions of … ',
        'Criteria: each paragraph compared against version one, not the preceding revision, with every intermediate version quoted; the operative verb, the scope, any time limit, any qualification and any bracket reported; words moved into or out of a chapeau identified as a change of scope',
        'Done: with me by … . Fallback: where it is unclear which version a change belongs to, it is reported as undated'],
w_check=['Is version one the baseline?',
         'Are the five elements named?',
         'Are chapeau moves caught?',
         'Are undatable changes labelled?'],

t_title='Amendments tracked through five versions of a text',
t_fig=figs.split('FIVE VERSIONS, NINE DAYS',
                 'Compare against',
                 ['version one, always',
                  'our written instructions',
                  'the operative verb',
                  'the scope and the limits'],
                 'Never against',
                 ['yesterday’s version',
                  'the chair’s latest text',
                  'what the room remembers',
                  'the general sense']),
t_fig_cap='A room compares with yesterday. A delegation with instructions compares with day one.',
t_body=[
 'Name version one as the baseline in the instruction itself, and require each paragraph on '
 'which instructions are held to be compared against it, with every intermediate version quoted '
 'so that the sequence of dilutions is visible as a sequence.',
 'Name the elements that carry legal character, because an unweighted comparison returns every '
 'difference equally: the operative verb, the scope, any time limit, any qualification and any '
 'square bracket.',
 'Require expressly that words moved into or out of a chapeau be reported as a change of scope. '
 'Such a move alters what a qualification applies to without altering a single word of it, and '
 'a comparison of wording will report it as nothing at all.'],
t_say=[('Fix the baseline: ', 'Compare each paragraph against version one, not the preceding revision.'),
       ('Name the elements: ', 'The operative verb, the scope, the time limits, the qualifications, the brackets.'),
       ('Catch the chapeau: ', 'Report any words moved into or out of a chapeau as a change of scope.')],
t_bound='It compares the texts you give it in the way you ask, and it cannot choose a '
        'baseline for you. Asked what has changed since the last version, it will not mention '
        'version one, and that is exactly the comparison that lets an obligation disappear in '
        'four small steps.',
t_a=[('Compare each paragraph against version ____________.', 'one'),
     ('Not against the ____________ revision.', 'preceding'),
     ('Name the ____________ verb.', 'operative'),
     ('And any square ____________.', 'bracket'),
     ('Report any words moved into a ____________.', 'chapeau'),
     ('An obligation can disappear in four small ____________.', 'steps')],
t_b_rubric='Say whether each change is substantive.',
t_b=[('“shall” replaced by “should”.', 'yes: the operative verb'),
     ('A subparagraph renumbered.', 'usually not'),
     ('“as appropriate” moved into the chapeau.', 'yes: a change of scope'),
     ('“annual” replaced by “periodic”.', 'yes: the time limit goes')],

case=dict(
 title='The Decision Room · Four dilutions in nine days',
 brief=[
  'A delegation holds an instruction to secure a binding annual reporting obligation in '
  'paragraph 9 of a draft decision. Version one provides that parties shall submit annual data.',
  'Over nine days the paragraph passes through four further revisions. Shall becomes should; '
  'submit becomes should endeavour to submit; annual becomes periodic; and where practicable is '
  'inserted. Each change was proposed as drafting and accepted against the immediately '
  'preceding text.',
  'The fifth version provides that parties are encouraged to submit data periodically where '
  'practicable. The delegation must decide what to do on the tenth day, with the text going to '
  'adoption on the eleventh.'],
 exhibit=figs.datatable('WHAT EACH REVISION DID',
                        ['Revision', 'Change', 'Objected to?'],
                        [['2', 'shall → should', 'no'],
                         ['3', 'submit → endeavour to submit', 'no'],
                         ['4', 'annual → periodic', 'no'],
                         ['5', '+ where practicable', 'no'],
                         ['total', 'obligation → aspiration', '—'],
                         ['comparison made in room', 'against previous version only', '—']]),
 exhibit_cap='Four unobjectionable steps, and a change of legal character nobody voted for.',
 exhibit_note='No delegation acted improperly. The room compared each text with the one before '
              'it, which is what rooms do.',
 voices=[('Elena Duarte', 'delegate, the Assembly',
          'Compared with yesterday the text is fine. Compared with our instruction it is empty.'),
         ('Ambassador Clara Mendel', 'head of mission',
          'Then the amendment is to version five and the explanation is the history of all five.'),
         ('Farida Haddad', 'protocol and interpreting',
          'And the sequence is more persuasive than the objection, because every delegate in the room agreed to each step.')],
 steps=[('Find it', 'What did version one provide?'),
        ('Compare it', 'Version five against version one.'),
        ('Infer it', 'Why was nothing objected to?'),
        ('Weigh it', 'One amendment with a nine-day history.'),
        ('Decide', 'What is the baseline for comparison?')],
 analysis=[('Find it. What was the obligation?', 'parties shall submit annual data'),
           ('Compare it. What remains?', 'encouragement to submit data where practicable'),
           ('Infer it. Why?', 'each step was measured against the step before'),
           ('Weigh it. What is the remedy?', 'an amendment restoring version one, with the history'),
           ('Decide. What is the baseline?', 'version one, for every provision under instruction')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what every provision under instruction is compared against.',
                 'Say which elements are reported.',
                 'Say how a chapeau move is treated.',
                 'Say how an amendment of this kind is explained.'],
 bank=['Every provision on which instructions are held is compared against version one at each revision.',
       'The operative verb, the scope, the time limits, the qualifications and the brackets are reported for every version.',
       'Words moved into or out of a chapeau are treated as a change of scope and reported as substantive.',
       'An amendment restoring earlier wording is explained by the full sequence of revisions, not by objection to the last of them.'],
 outcome='The delegation proposes, on the tenth day, that the wording of version one be '
         'restored, and circulates a single page setting out the five versions in sequence. Two '
         'other delegations, which had accepted each step individually, support the restoration '
         'on seeing the sequence. The adopted text provides that parties shall submit annual '
         'data, with where practicable retained in a subparagraph of its own, and the sequence '
         'page becomes a standing practice of the mission.',
 outcome_q=[('When was the proposal made?', 'on the tenth day'),
            ('What was circulated?', 'a single page with the five versions in sequence'),
            ('Who supported it?', 'two delegations that had accepted each step'),
            ('What was adopted?', 'shall submit annual data, with a separate qualification'),
            ('What became standing practice?', 'the sequence page')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Tell me what has changed',
 task=['A delegate asked for a comparison of the latest revision of a draft decision.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Tell me what has changed in the new version.',
        'Compare it with the last one.',
        'The important changes.',
        'Flag a change where it matters.',
        'Paragraph 9 especially.',
        'This evening if you can.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and “compare it with the last one” chose the one baseline that hides the dilution.',
 asked=['Compare with the last one', 'The important changes', 'Paragraph 9 especially'],
 back=['1 change in paragraph 9', '1 word: where practicable', '0 earlier versions consulted'],
 gap='Nobody named version one as the baseline, so the fifth dilution appeared as a single small insertion.',
 back_cap='An accurate report of one inserted qualification, in a paragraph that has lost its obligation.',
 back_note='“Compare it with the last one” is the natural instruction and the fatal one: it '
           'reproduces exactly the comparison the negotiating room has already made four times.',
 diagnosis=[('“what has changed”', 'hidden assumption'),
            ('“the last one”', 'hidden assumption'),
            ('“the important changes”', 'unstated criterion'),
            ('“where it matters”', 'missing condition'),
            ('“especially”', 'unstated criterion'),
            ('“if you can”', 'missing condition')],
 rewrite='Rewrite it on the six lines so that the cumulative change is visible.',
 scaffold=['what you must be able to tell your head of mission',
           'which paragraphs and versions, and what is excluded',
           'what you are giving it',
           'the baseline, the elements and the chapeau rule',
           'by when',
           'what happens where a change cannot be dated'],
 bank=['Purpose: so that I can tell the Ambassador whether paragraph 9 still carries the obligation we were instructed to secure',
       'Scope: paragraphs 4, 9 and 12 of the draft decision, in all five revisions; the preambular paragraphs are not covered',
       'Inputs: the five versions as issued, and our instructions of 2 September',
       'Criteria: each paragraph compared against version one, not against the preceding revision, with every intermediate version quoted; the operative verb, the scope, any time limit, any qualification and any bracket reported for each version; any words moved into or out of a chapeau identified expressly as a change of scope',
       'Done: with me by seven o’clock this evening',
       'Fallback: where it is unclear which version a change belongs to, the change is reported as undated rather than assigned'],
 check=['Is version one the baseline?',
        'Are all intermediate versions quoted?',
        'Are the five elements reported?',
        'Are chapeau moves treated as substantive?'],
 model=['so that I can tell the Ambassador whether paragraph 9 still carries the obligation we were instructed to secure',
        'paragraphs 4, 9 and 12 of the draft decision, in all five revisions; the preambular paragraphs are not covered',
        'the five versions as issued, and our instructions of 2 September',
        'each of the three paragraphs compared against version one, not against the preceding revision, with every intermediate version quoted; the operative verb, the scope, any time limit, any qualification and any bracket reported for each version; any words moved into or out of a chapeau identified expressly as a change of scope',
        'with me by seven o’clock this evening',
        'where it is unclear which version a change belongs to, the change is reported as undated rather than assigned'],
 cost='1 change reported, 4 dilutions unreported, 9 days of drafting unexamined, and an '
      'instruction to secure a binding obligation silently abandoned by the delegation itself.'),

lang=dict(
 title='Across the Language Line · An amendment that is clear in one language only',
 setting=[
  'An amendment is tabled in the working language by a delegation drafting in its second. It '
  'reads: replace “shall” by “will”. In English the change is substantive, since will may be '
  'read as prediction rather than obligation.',
  'In the sponsor’s own language the two words are rendered identically, and the delegation '
  'believes it is proposing a change of style. Three other delegations understand it as a '
  'weakening and prepare to oppose.'],
 ladder=[('One word in the original', 'covering shall and will'),
         ('An amendment of style', 'as the sponsor intends it'),
         ('An amendment of substance', 'as the room reads it')],
 cap='The same amendment, stylistic to its sponsor and substantive to everybody else.',
 turns=[('Turn 1 · The sponsor', 'The amendment is purely one of style.'),
        ('Turn 2 · A delegation', 'In English, will may be read as prediction.'),
        ('Turn 3 · The sponsor', 'That is not what we intend at all.')],
 holds=['May I ask what the sponsor intends the amendment to achieve?',
        'In English, shall creates an obligation and will may not.',
        'Is a change in the legal character of the paragraph intended?',
        'I am sure it is not; may the record say so?',
        'Would the sponsor consider withdrawing it and tabling a change of order instead?',
        'I will report that the amendment was offered as stylistic.'],
 redline='Never treat an amendment drafted in a second language as evidence of intent, and '
         'never allow an unintended weakening to be adopted because its sponsor did not mean it.',
 score=['Asked what the amendment is intended to achieve.',
        'Explained the English distinction plainly.',
        'Asked directly about legal character.',
        'Offered the record as a remedy.',
        'Proposed an alternative course.'],
 a=[('What does the amendment propose?', 'replacing shall by will'),
    ('How does the sponsor see it?', 'as a change of style'),
    ('How does the room read it?', 'as a weakening'),
    ('Why?', 'the sponsor’s language renders both words identically'),
    ('What remedy is offered?', 'a statement in the record, or withdrawal'),
    ('What must not be inferred?', 'intent from the drafting')]),

rev_fig=figs.split('TRACKING A PROVISION',
                   'Report for each version',
                   ['the operative verb',
                    'the scope',
                    'the time limits',
                    'the brackets'],
                   'Flag separately',
                   ['chapeau moves',
                    'qualifications inserted',
                    'undatable changes',
                    'the cumulative effect']),
rev_fig_cap='Five elements per version, and one line at the end for what they add up to.',
rev=dict(
 read=[('How many versions were there?',
        ['five', 'nine', 'four', 'two'], 0),
       ('What did version one provide?',
        ['that parties shall submit annual data', 'that parties are encouraged to submit data',
         'nothing', 'that data are periodic'], 0),
       ('What was inserted in revision five?',
        ['where practicable', 'annual', 'shall', 'as appropriate'], 0),
       ('What is the baseline for comparison?',
        ['version one', 'the preceding version',
         'the chair’s text', 'the adopted text'], 0)],
 listen_text='Name version one as the baseline, require every intermediate version to be '
             'quoted, name the operative verb, the scope, the time limits, the qualifications '
             'and the brackets, and require chapeau moves to be reported as changes of scope.',
 listen=[('Name version ____________ as the baseline.', 'one'),
         ('Require every ____________ version to be quoted.', 'intermediate'),
         ('Name the ____________ verb.', 'operative'),
         ('Report ____________ moves as changes of scope.', 'chapeau')],
 speak=['Propose eight amendments using insert, delete, replace and retain.',
        'Then trace a provision in your own work back to its first version.'],
 write='Write a six-line tasking for a comparison across versions of a text.',
 vocab=[('A mark showing wording is not agreed is a ____________ bracket.', 'square'),
        ('The introductory words before a list are a ____________.', 'chapeau'),
        ('A change that alters the obligation is an amendment of ____________.', 'substance'),
        ('A text with no brackets or marks is a ____________ text.', 'clean')],
 gram=[('____________ “endeavour to submit” by “submit”.', 'Replace'),
       ('____________ the second sentence of paragraph 4 in its entirety.', 'Delete'),
       ('____________ the square brackets around “annual”.', 'Delete'),
       ('____________ a new paragraph 9 bis after paragraph 9.', 'Insert')]),

found=['Compare every provision under instruction against version one, at every revision.',
       'Report the operative verb, the scope, the limits, the qualifications and the brackets.',
       'Treat words moved into or out of a chapeau as a change of scope.',
       'Explain a restoring amendment by the whole sequence, not by the last step.'],
end_line='Four small steps and nine days will remove an obligation nobody voted against.',
end_next='Next: Speaking So That You Can Be Interpreted')
