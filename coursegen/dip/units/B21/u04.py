# -*- coding: utf-8 -*-
import figs

U = dict(
num=4,
title='A Memorandum of Understanding',
gram='cleft sentences for emphasis',
ai='comparing two texts word by word',
strap='CEFR B2 · Grammar: cleft sentences for emphasis · '
      'AI: comparing two texts word by word',
cando=['use what- and it- clefts to put the emphasis where you need it',
       'read the parts of a memorandum of understanding',
       'compare two versions of a text and rank the differences',
       'say why a complete list of differences is not an assessment of them',
       'write a six-line tasking for a text comparison'],

hero=('TWENTY-THREE DIFFERENCES, ALL CORRECT, AND THE ONE THAT MATTERED WAS LISTED NINETEENTH',
      ['Forty seconds to find every change between two versions of a text.',
       'Shall consult became may consult, filed under minor wording.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='Two versions of a memorandum of understanding, eleven pages each, returned after four months.',

warm=['How do you compare two long versions of the same document?',
      'Which single word change could alter an entire agreement?',
      'What is the difference between finding a change and judging it?'],

read=[
 'A memorandum of understanding is not a treaty, which is precisely why it is agreed so '
 'often: it records what two administrations intend to do, it binds nobody in law, and it '
 'can be signed by officials without the procedures that a binding instrument requires.',
 'What that means in practice is that the words still matter enormously, because an '
 'understanding that is not legally binding is enforced entirely by expectation, and an '
 'expectation is created by the verb a drafter chose eleven pages in.',
 'Four months after the Syrian side sent its draft, the other administration returns an '
 'eleven-page text that looks identical, is formatted identically, and is described in the '
 'covering note as containing a small number of drafting improvements.',
 'Ziad Mikhail puts both versions through a comparison, which returns twenty-three '
 'differences in forty seconds, every one of them real, listed in the order in which they '
 'appear in the text with a note on each.',
 'It is the nineteenth item on that list that matters: in paragraph 6, the words the Parties '
 'shall consult have become the Parties may consult, which the comparison describes as a '
 'minor change of wording, and which removes the only obligation in the document.'],

dp1=('What a memorandum of understanding is', 'A memorandum of understanding is commonly '
     'described as an instrument recording the intentions of the parties without creating '
     'obligations enforceable in law, which makes the precise wording of its commitments a '
     'matter of practical rather than legal weight.',
     'Source: general treaty practice literature, 2025–2026.'),

c_a=[('Why are memoranda of understanding agreed so often?', 'they bind nobody in law'),
     ('What enforces an understanding?', 'expectation'),
     ('How long was the returned text?', 'eleven pages'),
     ('How many differences were found, and how fast?', 'twenty-three, in forty seconds'),
     ('Which item mattered?', 'the nineteenth'),
     ('What was the change?', 'shall consult became may consult')],

c_b=[('A memorandum of understanding is a treaty.', 'F'),
     ('The wording of a non-binding text does not matter.', 'F'),
     ('The two versions looked identical.', 'T'),
     ('All twenty-three differences were real.', 'T'),
     ('The important change was listed first.', 'F'),
     ('May consult creates no obligation.', 'T')],

c_c=[('____________ changed was the verb in paragraph 6.', 'What'),
     ('____________ was the verb that changed, not the paragraph.', 'It'),
     ('____________ matters is the obligation, not the wording.', 'What'),
     ('____________ is article 7 that we cannot accept.', 'It'),
     ('____________ they removed was the only commitment.', 'What'),
     ('____________ was in February that the draft was sent.', 'It')],

c_d=[('A cleft sentence is used to ( emphasise one part / shorten a text ).', ['emphasise one part', 'shorten a text'], 0),
     ('What changed was the verb emphasises ( the verb / the change ).',
      ['the verb', 'the change'], 0),
     ('It was in February that we sent it emphasises ( the time / the sending ).',
      ['the time', 'the sending'], 0),
     ('The comparison found ( every difference / the important one ).',
      ['every difference', 'the important one'], 0),
     ('Shall consult is ( an obligation / a possibility ).',
      ['an obligation', 'a possibility'], 0)],

c_e=('Which cleft? Put each sentence in the right column.',
     [('What changed was the verb.', 'what-cleft'),
      ('It was the verb that changed.', 'it-cleft'),
      ('What matters is the obligation.', 'what-cleft'),
      ('It is article 7 that we reject.', 'it-cleft'),
      ('What they removed was the commitment.', 'what-cleft'),
      ('It was in February that we sent it.', 'it-cleft')],
     ['what-cleft', 'it-cleft']),

v_fig_title='THE PARTS OF AN INSTRUMENT',
v_fig=[('doc', 'a preamble'), ('key', 'an operative paragraph'), ('clock', 'an entry into force'),
       ('chart', 'a review clause'), ('people', 'an authentic text'), ('speech', 'a final clause')],
v_fig_cap='Six words for the parts of a document that officials sign and lawyers read.',

vocab=[
 ('a memorandum of understanding', 'an instrument recording intentions without binding in law'),
 ('a preamble', 'the opening recitals that explain why an instrument was made'),
 ('an operative paragraph', 'a numbered paragraph stating what the parties will do'),
 ('a signature page', 'the final page on which representatives sign'),
 ('an entry into force', 'the moment at which an instrument begins to apply'),
 ('a termination clause', 'the provision stating how an instrument may be ended'),
 ('a review clause', 'the provision requiring the parties to look at the text again'),
 ('a dispute settlement clause', 'the provision stating how disagreements are resolved'),
 ('a depositary', 'the party that holds the original text and receives notifications'),
 ('an authentic text', 'a language version that has legal standing'),
 ('a final clause', 'one of the procedural provisions at the end of an instrument'),
 ('a title of the instrument', 'the formal name by which a document is cited'),
 ('a scope provision', 'the paragraph stating what the instrument covers'),
 ('an amendment procedure', 'the method by which the text may be changed'),
 ('a duration', 'the period for which an instrument applies'),
 ('a counterpart copy', 'one of two identical signed originals'),
 ('a clean text', 'a version with all brackets and alternatives removed'),
 ('a bracketed text', 'a version in which unagreed wording is marked'),
 ('an initialling', 'the marking of each page to show agreement on its text'),
 ('a diplomatic note of notification', 'a formal note informing the other party of a step taken')],

v_a=[('The opening recitals are the ____________.', 'preamble'),
     ('A version with all brackets removed is a ____________ text.', 'clean'),
     ('A version in which unagreed wording is marked is a ____________ text.', 'bracketed'),
     ('The party that holds the original is the ____________.', 'depositary'),
     ('A language version with legal standing is an ____________ text.', 'authentic'),
     ('The moment at which an instrument begins to apply is its entry into ____________.', 'force'),
     ('The method by which the text may be changed is the ____________ procedure.', 'amendment'),
     ('One of two identical signed originals is a ____________ copy.', 'counterpart')],

v_b=[('An operative paragraph is a numbered paragraph', 'stating what the parties will do.'),
     ('A termination clause is the provision stating', 'how an instrument may be ended.'),
     ('An initialling is the marking of each page', 'to show agreement on its text.'),
     ('A scope provision is the paragraph stating', 'what the instrument covers.'),
     ('A duration is the period', 'for which an instrument applies.')],

g_title='Grammar: cleft sentences for emphasis',
g_rule=['A cleft sentence splits one clause in two so that one element carries the weight.',
        'What-cleft: What changed was the verb in paragraph 6.',
        'It-cleft: It was the verb in paragraph 6 that changed.',
        'Use a cleft when a plain sentence would let the important element pass unnoticed, '
        'which is exactly the risk in a long list of differences.'],
g_fig=('FLAT',
       ['The verb in paragraph 6 changed.',
        'We cannot accept article 7.',
        'They removed the only commitment.',
        'The draft was sent in February.'],
       'EMPHATIC',
       ['What changed was the verb in paragraph 6.',
        'It is article 7 that we cannot accept.',
        'What they removed was the only commitment in the document.',
        'It was in February that the draft was sent.'],
       'four true sentences in which nothing stands out',
       'the same four, each with the weight on the point at issue'),
g_fig_cap='A cleft tells the reader which word to look at. In a list of twenty-three, that is the whole task.',

g_a=[('____________ changed was the verb in paragraph 6.', 'What'),
     ('____________ was the verb that changed, not the paragraph number.', 'It'),
     ('____________ matters is the obligation, not the wording.', 'What'),
     ('____________ is article 7 that we cannot accept.', 'It'),
     ('____________ they removed was the only commitment.', 'What'),
     ('____________ was in February that the draft was sent.', 'It'),
     ('____________ concerns us is the loss of the review clause.', 'What'),
     ('____________ was the depositary who raised the point.', 'It'),
     ('____________ we are asking for is a return to the original verb.', 'What')],

g_b=[('( The verb changed / What changed was the verb ) — put the weight on the verb.', ['The verb changed', 'What changed was the verb'], 1),
     ('( It is article 7 that we reject / We reject article 7 ) — name the article emphatically.',
      ['It is article 7 that we reject', 'We reject article 7'], 0),
     ('( What they removed was the commitment / They removed the commitment ) — emphasise what was lost.',
      ['What they removed was the commitment', 'They removed the commitment'], 0),
     ('( It was in February that we sent it / We sent it in February ) — emphasise the date.',
      ['It was in February that we sent it', 'We sent it in February'], 0),
     ('( What concerns us is the review clause / The review clause concerns us ) — emphasise the concern.',
      ['What concerns us is the review clause', 'The review clause concerns us'], 0),
     ('( It is the deputy who decides / The deputy decides ) — emphasise the person.',
      ['It is the deputy who decides', 'The deputy decides'], 0)],

d1=dict(
 title='Twenty-three differences',
 fig=(['Twenty-three changes in forty seconds.', 'And which of them is the one?'],
      ['Number nineteen.', 'Then why is it number nineteen?']),
 cap='Ziad Mikhail and Dr Suhair Kanaan, reading the returned text.',
 lines=[('Suhair', 'They say drafting improvements. How many are there?'),
        ('Ziad', 'Twenty-three, found in forty seconds, and every one of them is genuinely there.'),
        ('Suhair', 'Good. Now tell me which one matters.'),
        ('Ziad', 'Paragraph 6. The Parties shall consult has become the Parties may consult.'),
        ('Suhair', 'That is the only obligation in eleven pages. Where is it on the list?'),
        ('Ziad', 'Nineteenth, between a comma and a change of capital letter.'),
        ('Suhair', 'So the list is complete and the order is meaningless.'),
        ('Ziad', 'The order is textual. It lists changes where they occur, not by what they do.'),
        ('Suhair', 'Which is why a person reads the list. What else is on it?'),
        ('Ziad', 'The review clause has gone from three years to five, and the title has changed by one word.'),
        ('Suhair', 'Both of those are real concessions presented as tidying. Write them up as three findings.'),
        ('Ziad', 'Three findings, with the paragraph numbers and the words as they stand.')],
 a=[('How many differences were found?', 'twenty-three, in forty seconds'),
    ('Which paragraph mattered?', 'paragraph 6'),
    ('What was the change there?', 'shall consult became may consult'),
    ('Where was it on the list?', 'nineteenth'),
    ('Why is the order meaningless?', 'it is textual, not by significance')],
 b=[('Every one of them is genuinely ____________.', 'there'),
    ('That is the only ____________ in eleven pages.', 'obligation'),
    ('It lists changes where they ____________.', 'occur'),
    ('Real concessions presented as ____________.', 'tidying')]),

d2=dict(
 title='Which of the three do we fight?',
 fig=(['Three findings. We cannot win all three.', 'Then which?'],
      ['Paragraph 6, obviously.', 'Obviously is doing a lot of work there.']),
 cap='Ziad and Hala Darwish, preparing the delegation’s response.',
 lines=[('Hala', 'Three findings: the verb, the review period and the title.'),
        ('Ziad', 'And we will not get all three back, so paragraph 6 is the one.'),
        ('Hala', 'Say why, in the words you would use to them.'),
        ('Ziad', 'What the change removes is the only commitment either side made in eleven pages.'),
        ('Hala', 'Good. That is the sentence. And the review period?'),
        ('Ziad', 'Three years to five. It costs us two years of leverage.'),
        ('Hala', 'It also costs them two years of exposure, which is why they asked.'),
        ('Ziad', 'So I trade the review period for the verb.'),
        ('Hala', 'Only if you are instructed to. Have you told the capital that any of this exists?'),
        ('Ziad', 'Not yet. I wanted the three findings clean first.'),
        ('Hala', 'Send them this afternoon, with your recommendation and the words as they stand. Then wait.'),
        ('Ziad', 'And if the instruction says accept all three?')],
 unresolved=True,
 a=[('What were the three findings?', 'the verb, the review period and the title'),
    ('Which matters most?', 'the verb in paragraph 6'),
    ('How does Ziad express it?', 'what the change removes is the only commitment'),
    ('What does Hala say about trading?', 'only if instructed'),
    ('What must be sent this afternoon?', 'the findings, the words and a recommendation')],
 b=[('We will not get all three ____________.', 'back'),
    ('It costs us two years of ____________.', 'leverage'),
    ('I wanted the three findings ____________ first.', 'clean'),
    ('With your recommendation and the ____________ as they stand.', 'words')]),

speak=[('Put the weight on it',
        ['Make nine sentences about a document using what- and it-clefts.',
         'Your partner says which element you have emphasised in each.',
         'Rewrite three of them flat and compare the effect.']),
       ('Rank the differences',
        ['List five changes somebody might make to a text you know.',
         'Rank them by consequence, not by where they appear.',
         'Defend your first choice for one minute.']),
       ('Shall, may, will',
        ['Take one commitment and state it three ways: shall, will and may.',
         'Say exactly what each version obliges you to do.',
         'Decide which you would accept and which you would refuse.'])],

ext_title='A comparison finds every difference between two texts, and cannot tell you which one removes the obligation',
ext_fig=figs.datatable('TWENTY-THREE DIFFERENCES, AS LISTED AND AS THEY MATTER',
                       ['Change', 'Position on list', 'Consequence'],
                       [['comma added, para 2', '3rd', 'none'],
                        ['title: one word changed', '1st', 'narrows the subject'],
                        ['review: 3 years to 5', '11th', 'two years of leverage'],
                        ['shall consult to may consult', '19th', 'removes the only obligation'],
                        ['capital letter, para 6', '20th', 'none'],
                        ['18 further changes', 'various', 'none of substance']]),
ext_fig_cap='Complete, accurate, and ordered by where the words sit rather than by what they do.',
ext=[
 'Comparing two versions of a long text is work that a system does better than a tired '
 'official at six in the evening: it will find every insertion, deletion and substitution in '
 'eleven pages in under a minute, and it will not miss the comma, the capital letter or the '
 'word removed from a title.',
 'That completeness is the point. The traditional method is to read both texts twice and hope, '
 'and the traditional result is that one change in twenty is missed, which over four months '
 'of exchanges is how a text drifts away from what either side thought it had agreed.',
 'What a comparison cannot do is weigh. It reports a substitution in paragraph 6 and a comma '
 'in paragraph 2 in the same register and in the order they appear, because significance is '
 'not a property of the text: it is a property of the relationship, the file and the law.',
 'So the list is the beginning of the task. An official reads all twenty-three items, marks '
 'the three that change what either side must do, and writes those three up with the '
 'paragraph numbers and the exact words, flat, without adjectives.',
 'It is the ranking that is the diplomatic work, and it is the ranking that nobody else can '
 'do for you, because it requires knowing what your administration can concede and what it '
 'cannot.'],

dp2=('Shall, will and may', 'Drafting practice commonly treats shall and will as expressing '
     'commitment and may as expressing permission or possibility, so that substituting may '
     'for shall in an operative paragraph removes the commitment while leaving the sentence '
     'grammatically intact.',
     'Source: general drafting practice literature, 2025–2026.'),

e_a=[('What does a comparison do better than a tired official?', 'find every difference'),
     ('What is the traditional result of reading twice?', 'one change in twenty is missed'),
     ('What can a comparison not do?', 'weigh the differences'),
     ('Why not?', 'significance belongs to the file, not the text'),
     ('What does the official write up?', 'the three changes that alter obligations')],
e_b=[('A comparison may miss a comma.', 'F'),
     ('Texts drift over months of exchanges.', 'T'),
     ('Differences are reported in order of importance.', 'F'),
     ('Ranking requires knowing what can be conceded.', 'T'),
     ('May creates the same commitment as shall.', 'F'),
     ('The list is the beginning of the work.', 'T')],

w_model='Purpose: so that the delegation knows which changes in the returned text alter what '
        'either side must do. Scope: the eleven-page memorandum of understanding returned on '
        '14 March; the annexes are compared separately. Inputs: our draft of 2 November and '
        'their returned text of 14 March, both in English. Criteria: every difference listed '
        'with its paragraph number, then the three that change an obligation written up '
        'separately with the words as they stand. Done: the full list and the three findings '
        'with the head of mission by 17:00 on 15 March. Fallback: where a change cannot be '
        'assessed without legal advice, it is listed and flagged rather than argued.',
w_fig=figs.spec_card('SIX LINES FOR A TEXT COMPARISON',
                     [('Purpose', 'know which changes alter obligations'),
                      ('Scope', 'the 11-page text of 14 March; annexes separately'),
                      ('Inputs', 'our draft of 2 November and their text of 14 March'),
                      ('Criteria', 'all differences listed, then 3 written up'),
                      ('Done', 'list and findings by 17:00 on 15 March'),
                      ('Fallback', 'flag what needs legal advice rather than argue it')]),
w_fig_cap='The comparison is line 4’s first half. The second half is the part a person does.',
w_task='Write a six-line tasking for comparing two versions of a text.',
w_steps=['Line 1: what the comparison is for, in terms of obligations.',
         'Line 2: which text, dated, and what is compared separately.',
         'Line 3: both inputs, with dates and language.',
         'Line 4: the full list, and then the ranked write-up.',
         'Line 5: what is delivered, to whom and when.',
         'Line 6: what happens to a change you cannot assess.'],
w_bank=['Purpose: so that … knows which changes alter … ',
        'Scope: the … -page text returned on … ; … compared separately',
        'Inputs: our draft of … and their text of … , both in … ',
        'Criteria: every difference with its paragraph number; then the … that change an obligation',
        'Done: … with … by … . Fallback: where a change cannot be assessed, it is … '],
w_check=['Does line 1 mention obligations rather than wording?',
         'Are both texts dated?',
         'Does line 4 ask for the list and the ranking?',
         'Does line 6 avoid guessing at law?'],

t_title='Comparing two texts word by word',
t_fig=figs.split('TWO VERSIONS, ELEVEN PAGES',
                 'The system does this',
                 ['finds every insertion and deletion',
                  'finds every substituted word',
                  'misses no comma or capital',
                  'lists each change by paragraph'],
                 'You do this',
                 ['decide which change alters an obligation',
                  'decide which is tidying and which is a concession',
                  'decide what you can trade',
                  'write the three findings flat']),
t_fig_cap='Forty seconds for twenty-three differences; an hour for the three that matter.',
t_body=[
 'Give both texts and ask for every difference between them, each with its paragraph number '
 'and the words as they stand in each version, and ask for the list to be complete rather '
 'than summarised, because the item that matters may be the shortest one.',
 'Then read all of it yourself, with one question in mind: does this change what either side '
 'must do? A comma does not. A review period does. A verb almost always does, and a word '
 'removed from a title can narrow an entire instrument without touching an operative '
 'paragraph.',
 'Write up the ones that pass that test, with the paragraph number, the old words, the new '
 'words and one sentence on the consequence, using a cleft where the point would otherwise '
 'pass unnoticed: what the change removes is the only obligation in the document.'],
t_say=[('Ask for completeness: ', 'List every difference, with paragraph numbers and the words as they stand.'),
       ('Ask for the form: ', 'Do not summarise: I need all of them, including punctuation.'),
       ('Ask yourself: ', 'Does this change what either side must do?')],
t_bound='A comparison reports differences; it does not rank them. It has no view on which '
        'concession your administration can afford, what was traded for what in November, or '
        'whether a change of title narrows the instrument, because none of that is in either '
        'text.',
t_a=[('List every difference, with paragraph ____________.', 'numbers'),
     ('And the words as they ____________.', 'stand'),
     ('Do not ____________: I need all of them.', 'summarise'),
     ('Does this change what either side must ____________?', 'do'),
     ('A comparison reports differences; it does not ____________ them.', 'rank'),
     ('Which concession your administration can ____________.', 'afford')],
t_b_rubric='Say whether each belongs to the comparison or to the official.',
t_b=[('Finding a comma added in paragraph 2.', 'the comparison: it is a textual difference'),
     ('Deciding that paragraph 6 is the one to fight.', 'the official: it needs the file'),
     ('Spotting a word removed from the title.', 'the comparison: it is a substitution'),
     ('Judging what can be traded for it.', 'the official: it needs the instruction')],

case=dict(
 title='The Decision Room · Nineteenth on a list of twenty-three',
 brief=[
  'An eleven-page memorandum of understanding is returned after four months with a covering '
  'note describing a small number of drafting improvements. A comparison of the two versions '
  'returns twenty-three differences in forty seconds, all of them real and each with its '
  'paragraph number.',
  'The list is ordered by position in the text. Nineteenth, between a comma and a change of '
  'capitalisation, is the substitution of may consult for shall consult in paragraph 6, which '
  'is the only obligation either side undertook in the whole document.',
  'Also on the list, eleventh, is the extension of the review period from three years to five, '
  'and first, the removal of one word from the title, which narrows the subject matter of the '
  'instrument. Neither is described as significant, because the comparison does not describe '
  'significance at all.'],
 exhibit=figs.datatable('THREE OF TWENTY-THREE',
                        ['Paragraph', 'Was', 'Is now'],
                        [['title', 'cooperation on transit and customs', 'cooperation on transit'],
                         ['para 4', 'review after three years', 'review after five years'],
                         ['para 6', 'the Parties shall consult', 'the Parties may consult'],
                         ['para 2', 'no comma', 'comma'],
                         ['para 6', 'lower case', 'capital'],
                         ['18 others', '—', 'no change of substance']]),
 exhibit_cap='Three changes of consequence and twenty of none, in one undifferentiated list.',
 exhibit_note='Every item is correctly identified. Nothing on the list says which three of '
              'them an official should spend the afternoon on.',
 voices=[('Ziad Mikhail', 'commercial attaché',
          'Forty seconds, twenty-three differences, and I would have missed two of them by hand.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'And it filed the removal of our only obligation between a comma and a capital letter.'),
         ('Hala Darwish', 'delegate to the Regional Council',
          'Both of which are the same point: it finds, we weigh, and the weighing is the job.')],
 steps=[('Find it', 'What did the comparison return?'),
        ('Compare it', 'The order on the list against the order of consequence.'),
        ('Infer it', 'Why can a comparison not rank?'),
        ('Weigh it', 'Two changes missed by hand against one buried at nineteen.'),
        ('Decide', 'What is the standing procedure for a returned text?')],
 analysis=[('Find it. What came back?', 'twenty-three real differences in forty seconds'),
           ('Compare it. List order against consequence?', 'the one that mattered was nineteenth'),
           ('Infer it. Why no ranking?', 'significance lies in the file, not the text'),
           ('Weigh it. What does each side bring?', 'completeness from the system, weight from the official'),
           ('Decide. What is the procedure?', 'compare in full, then rank by obligation changed')],
 decision='Decide the procedure, in four lines.',
 decision_steps=['Say what is done with every returned text.',
                 'Say what question each difference is tested against.',
                 'Say how the significant changes are written up.',
                 'Say what is done with a change you cannot assess.'],
 bank=['Every returned text is compared in full against our last version before it is read.',
       'Each difference is tested against one question: does it change what either side must do?',
       'Those that do are written up with the paragraph, the old words, the new words and the consequence.',
       'A change that cannot be assessed without legal advice is flagged, not argued.'],
 outcome='The three findings go to the capital the same afternoon with the words as they '
         'stand and a recommendation. The instruction comes back to restore shall in paragraph '
         '6 and to accept the five-year review, which is exactly the trade Ziad proposed. The '
         'title is raised separately and the word is restored without argument, because the '
         'other side had not noticed it had gone.',
 outcome_q=[('When were the findings sent?', 'the same afternoon'),
            ('What did the instruction say?', 'restore shall, accept the five-year review'),
            ('Whose recommendation was that?', 'Ziad’s'),
            ('What happened to the title?', 'the word was restored without argument'),
            ('Why?', 'the other side had not noticed it had gone')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Check what they changed',
 task=['An attaché asked for a comparison of two versions of a memorandum of understanding.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Check what they changed.',
        'Tell me if anything important moved.',
        'They say it is just drafting.',
        'Flag anything legal.',
        'Ignore the small stuff.',
        'Quick summary is fine.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and two of them actively prevent the one finding that mattered.',
 asked=['What they changed', 'Anything important', 'Not the small stuff'],
 back=['6 changes summarised', '17 changes omitted as small', '1 obligation removed, unreported'],
 gap='Nobody said that a one-word change can be the largest change in the document.',
 back_cap='A quick summary that left out the only change of substance.',
 back_note='Ignore the small stuff and quick summary is fine both instruct the omission of '
           'exactly the kind of item that turns out to matter: a single verb inside one '
           'operative paragraph.',
 diagnosis=[('“anything important”', 'unstated criterion'),
            ('“the small stuff”', 'unstated criterion'),
            ('“quick summary is fine”', 'unstated exception'),
            ('“flag anything legal”', 'unstated exception'),
            ('“it is just drafting”', 'hidden assumption'),
            ('“what they changed”', 'hidden assumption')],
 rewrite='Rewrite it on the six lines so that nothing is omitted and the weighing is yours.',
 scaffold=['why the comparison is being done, in terms of obligations',
           'which two texts, dated, and what is compared separately',
           'the inputs and their language versions',
           'completeness first, then the ranked write-up and its form',
           'what is delivered, to whom and by when',
           'what is done with a change that needs legal advice'],
 bank=['Purpose: so that … knows which changes alter what either side must do',
       'Scope: the … of … against our draft of … ; annexes compared separately',
       'Inputs: both texts in … ; no summarising',
       'Criteria: every difference with paragraph and words as they stand; then … written up',
       'Done: … with … by … ',
       'Fallback: a change that cannot be assessed without legal advice is flagged, not argued'],
 check=['Does it forbid summarising?',
        'Does it ask for every difference, including punctuation?',
        'Does it name the test for significance?',
        'Does it say who does the ranking?'],
 model=['so that the delegation knows which changes alter what either side must do',
        'their text of 14 March against our draft of 2 November; annexes compared separately',
        'both texts in English, complete, with no summarising at any stage',
        'every difference with its paragraph and the words as they stand; then the 3 that change an obligation',
        'the full list and 3 findings with the head of mission by 17:00 on 15 March',
        'a change that cannot be assessed without legal advice is flagged, not argued'],
 cost='17 changes omitted as small. 1 of them removed the only obligation in 11 pages.'),

feet=dict(
 title='On Your Feet · They ask you to initial the text this afternoon',
 setting=[
  'You have had the returned text for two hours. You have the comparison and you have found '
  'the change in paragraph 6, but you have no instruction from the capital and will not have '
  'one before tomorrow.',
  'Their official telephones. He is pleasant, he is in a hurry, and he would like both sides '
  'to initial the text at four o’clock this afternoon so that it can go to his minister in '
  'the morning.'],
 ladder=[('Can we initial at four?', 'the request you must slow down'),
         ('It is only drafting', 'the characterisation you must not accept'),
         ('Your colleague agreed in November', 'the claim about the past you cannot verify')],
 cap='Three turns on the telephone, and no instruction until tomorrow.',
 turns=[('Turn 1 · Their official', 'Could we initial the text at four this afternoon?'),
        ('Turn 2 · Their official', 'There is nothing in it. The changes are purely drafting.'),
        ('Turn 3 · Their official', 'Your colleague accepted this formulation in November, as I recall.')],
 holds=['Thank you for telephoning rather than sending the pages over unexplained.',
        'I am not in a position to initial anything today, and I would rather say so now than at four.',
        'I have one substantive point, in paragraph 6, where shall consult has become may consult.',
        'I am not going to characterise the change as drafting or as substance until my capital has seen it.',
        'I have no record of November in front of me, and I will not rely on either of our recollections.',
        'May I come back to you tomorrow afternoon, with an answer on paragraph 6 and a date for initialling?'],
 redline='You must not initial or indicate acceptance without an instruction, you must not '
         'accept the description of the change as purely drafting, and you must not agree or '
         'disagree about what a colleague said in November when you have not read the record. '
         'Do not let the deadline make the decision.',
 score=['Thanked him for telephoning.',
        'Refused to initial today, plainly and early.',
        'Named the one substantive point, with the words.',
        'Declined to characterise it as drafting or substance.',
        'Refused to argue about November from memory, and offered a dated answer.'],
 a=[('What do you refuse today?', 'to initial anything'),
    ('When do you say so?', 'at once, not at four o’clock'),
    ('What one point do you name?', 'paragraph 6, shall consult becoming may consult'),
    ('What do you decline to do?', 'characterise the change yourself'),
    ('How do you handle the claim about November?', 'refuse to rely on recollection'),
    ('What do you offer?', 'an answer tomorrow and a date for initialling')]),

rev_fig=figs.split('A RETURNED TEXT',
                   'The comparison gives',
                   ['every difference, complete',
                    'the paragraph number of each',
                    'the words as they stand in both',
                    'punctuation and capitalisation'],
                   'You give',
                   ['the test: does it change an obligation?',
                    'the ranking by consequence',
                    'the three findings, written flat',
                    'the recommendation on what to trade']),
rev_fig_cap='Completeness is theirs. Weight is yours. The order of the list is nobody’s argument.',
rev=dict(
 read=[('How many differences were found?',
        ['twenty-three', 'three', 'eleven', 'nineteen'], 0),
       ('Where was the important change on the list?',
        ['nineteenth', 'first', 'last', 'third'], 0),
       ('What was the change in paragraph 6?',
        ['shall consult became may consult', 'a comma was added',
         'the title changed', 'the review period changed'], 0),
       ('What can a comparison not do?',
        ['rank by consequence', 'find substitutions', 'find deletions', 'count changes'], 0)],
 listen_text='Ask for every difference between the two texts, with paragraph numbers and the '
             'words as they stand, and refuse a summary. Then test each one against a single '
             'question: does it change what either side must do?',
 listen=[('Ask for every ____________ between the two texts.', 'difference'),
         ('With paragraph numbers and the words as they ____________.', 'stand'),
         ('Refuse a ____________.', 'summary'),
         ('Does it change what either side must ____________?', 'do')],
 speak=['Make nine sentences about a document using what-clefts and it-clefts.',
        'Then rank five changes to a text by consequence and defend your first choice.'],
 write='Write a six-line tasking for comparing two versions of a text.',
 vocab=[('A version with all brackets removed is a ____________ text.', 'clean'),
        ('The party that holds the original is the ____________.', 'depositary'),
        ('A language version with legal standing is an ____________ text.', 'authentic'),
        ('The opening recitals are the ____________.', 'preamble')],
 gram=[('____________ worries the capital is the missing date.', 'What'),
       ('____________ was the deputy who noticed it.', 'It'),
       ('____________ we need is the verb as it stood.', 'What'),
       ('____________ is paragraph 6 that we are discussing.', 'It')]),

found=['Compare every returned text in full before you read it, and refuse a summary.',
       'Test each difference with one question: does it change what either side must do?',
       'Write your findings with the paragraph, the old words and the new words.',
       'Use a cleft when the point would otherwise pass unnoticed in a list.'],
end_line='It finds all twenty-three. Only you know which three are worth an afternoon.',
end_next='Next: Counting Votes You Have Not Been Given')
