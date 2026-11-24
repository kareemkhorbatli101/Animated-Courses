# -*- coding: utf-8 -*-
import figs

U = dict(
num=1,
title='The Documents Before the Meeting',
gram='formal register: impersonal subjects and nominal style',
ai='a hundred pages reduced to what you must read tonight',
strap='CEFR B2 · Grammar: formal register — impersonal subjects and nominal style · '
      'AI: a hundred pages reduced to what you must read tonight',
cando=['write in the impersonal, nominal register of conference documents',
       'reduce a hundred pages to what must be read before a meeting',
       'identify the documents that carry decisions rather than information',
       'distinguish a summary you may rely on from one you may not',
       'write a six-line tasking for a reading priority'],

hero=('A HUNDRED AND SIX PAGES ON FRIDAY EVENING, AND A MEETING ON MONDAY',
      ['Eleven documents, of which four contain decisions.',
       'Nothing on the covers tells you which four.'],
      [(1080, 'grey', 'long'), (260, 'teal', 'short'), (320, 'blue', 'short')]),
hero_cap='The Friday distribution for a Monday session of the Assembly in Lindhall.',

warm=['How much do you have to read before a typical meeting?',
      'How do you decide what to read first?',
      'What have you ever been caught not having read?'],

read=[
 'The Friday distribution runs to a hundred and six pages in eleven documents. The session '
 'opens at ten on Monday, and Elena has, in practice, one evening.',
 'It is widely assumed that length indicates importance. In this distribution the longest '
 'document, at forty-one pages, is a secretariat compilation of positions already known, while '
 'the shortest, at two pages, contains the only text on which a decision is sought.',
 'A reduction is produced: eleven summaries of a paragraph each, accurately drawn and '
 'uniformly weighted, in which the two-page draft decision and the forty-one-page compilation '
 'occupy the same space.',
 'Uniform weighting is the error. What is required is not a summary of each document but a '
 'ranking of all of them, by whether anything is decided in them and whether the delegation '
 'has an instruction on it.',
 'It is accordingly necessary to supply the ranking criteria oneself, since no property of the '
 'documents themselves will yield them, and no reader of a summary can recover what the '
 'summary has levelled.'],

dp1=('Conference documentation', 'Documentation practice in multilateral bodies commonly '
     'distinguishes documents submitted for decision from those submitted for information, '
     'with the distinction carried in the document symbol rather than in the title or length.',
     'Source: general conference practice literature, 2025–2026.'),

c_a=[('How many pages arrived?', 'a hundred and six'),
     ('In how many documents?', 'eleven'),
     ('How many contain decisions?', 'four'),
     ('How long is the compilation?', 'forty-one pages'),
     ('How long is the draft decision?', 'two pages'),
     ('What is required instead of summaries?', 'a ranking')],

c_b=[('Length indicates importance.', 'F'),
     ('The compilation contains new positions.', 'F'),
     ('The shortest document carries a decision.', 'T'),
     ('Uniform weighting is helpful.', 'F'),
     ('The ranking criteria come from the documents.', 'F'),
     ('Elena has one evening.', 'T')],

c_c=[('It is widely ____________ that length indicates importance.', 'assumed'),
     ('What is ____________ is a ranking rather than a summary.', 'required'),
     ('It is accordingly ____________ to supply the criteria oneself.', 'necessary'),
     ('____________ was noted that no instruction had been received.', 'It'),
     ('Consideration ____________ be given to the shortest document first.', 'should'),
     ('The ____________ of the criteria is a matter for the delegation.', 'choice')],

c_d=[('An impersonal subject avoids ( the verb / naming the actor ).', ['the verb', 'naming the actor'], 1),
     ('“It is assumed that” is ( more formal than “people assume” / less formal ).',
      ['more formal than “people assume”', 'less formal'], 0),
     ('Nominal style prefers ( nouns / verbs ) for the main action.',
      ['nouns', 'verbs'], 0),
     ('The error in the reduction was ( uniform weighting / inaccuracy ).',
      ['uniform weighting', 'inaccuracy'], 0),
     ('The ranking criteria must come from ( the delegation / the documents ).',
      ['the delegation', 'the documents'], 0)],

c_e=('Personal or impersonal? Put each formulation in the right column.',
     [('we think the text is weak', 'personal'),
      ('the text appears weak', 'impersonal'),
      ('I asked for instructions', 'personal'),
      ('instructions were sought', 'impersonal'),
      ('you must read this tonight', 'personal'),
      ('this requires reading tonight', 'impersonal')],
     ['personal', 'impersonal']),

v_fig_title='A DISTRIBUTION IN SIX WORDS',
v_fig=[('doc', 'a document symbol'), ('key', 'a decision point'), ('chart', 'a compilation text'),
       ('clock', 'a deadline of instruction'), ('people', 'a working paper'), ('speech', 'a non-paper')],
v_fig_cap='Six words for the eleven documents that arrive on a Friday evening.',

vocab=[
 ('a document symbol', 'the reference code identifying a document'),
 ('a conference room paper', 'a document circulated during a session'),
 ('a working paper', 'a paper submitted to inform discussion'),
 ('a revision of a text', 'a later version of the same text'),
 ('an advance version', 'a version issued before the final one'),
 ('a provisional agenda', 'the agenda before it is adopted'),
 ('an annotation', 'a note attached to an agenda item'),
 ('a bracketed text', 'wording not yet agreed'),
 ('a footnote of reservation', 'a note recording a disagreement'),
 ('a compilation text', 'a document gathering existing positions'),
 ('a non-paper', 'an informal text with no official status'),
 ('a distribution restriction', 'a limit on who may receive a document'),
 ('a reading of a document', 'the act of going through it'),
 ('a priority of reading', 'the order in which to read'),
 ('a briefing folder', 'the set of papers prepared for a meeting'),
 ('a decision point', 'a place where something must be decided'),
 ('a financial implication', 'what a proposal would cost'),
 ('a procedural history', 'how an item has been handled before'),
 ('a mandate', 'the authority under which a body acts'),
 ('a deadline of instruction', 'when instructions must be requested by')],

v_a=[('The reference code identifying a document is a document ____________.', 'symbol'),
     ('Wording not yet agreed is a ____________ text.', 'bracketed'),
     ('A document gathering existing positions is a ____________ text.', 'compilation'),
     ('An informal text with no official status is a ____________.', 'non-paper'),
     ('A limit on who may receive a document is a ____________ restriction.', 'distribution'),
     ('How an item has been handled before is a ____________ history.', 'procedural'),
     ('The authority under which a body acts is a ____________.', 'mandate'),
     ('What a proposal would cost is a ____________ implication.', 'financial')],

v_b=[('A working paper is a paper submitted', 'to inform discussion.'),
     ('A provisional agenda is the agenda', 'before it is adopted.'),
     ('A footnote of reservation is a note', 'recording a disagreement.'),
     ('A decision point is a place', 'where something must be decided.'),
     ('A deadline of instruction is when instructions', 'must be requested by.')],

g_title='Grammar: formal register — impersonal subjects and nominal style',
g_rule=['Impersonal subjects remove the actor where the actor is not the point: it is widely '
        'assumed that … ; it was noted that … ; consideration should be given to … .',
        'Nominal style carries the action in a noun rather than a verb: the choice of criteria '
        'is a matter for the delegation, rather than the delegation must choose the criteria.',
        'Use the register where the institution uses it — in records, papers and interventions '
        '— and not in instructions to your own staff, where it hides who must act.',
        'The commonest fault is nominal style without an agent anywhere: “a reduction was '
        'produced” leaves the reader unable to ask whom to correct.'],
g_fig=('LOOSE',
       ['Everybody thinks the long document is the important one.',
        'We need a ranking, not summaries.',
        'You must get instructions by Friday.',
        'Somebody made a summary of each document.'],
       'PRECISE',
       ['It is widely assumed that length indicates importance.',
        'What is required is a ranking rather than a set of summaries.',
        'Instructions are to be sought by Friday.',
        'A summary of each document was produced.'],
       'four personal formulations',
       'the same four in impersonal, nominal register'),
g_fig_cap='Impersonal where the actor is not the point; personal wherever somebody must act.',

g_a=[('It is widely ____________ that length indicates importance.', 'assumed'),
     ('What is ____________ is a ranking rather than a summary.', 'required'),
     ('It is accordingly ____________ to supply the criteria oneself.', 'necessary'),
     ('____________ was noted that no instruction had been received.', 'It'),
     ('Consideration ____________ be given to the shortest document first.', 'should'),
     ('The ____________ of criteria is a matter for the delegation.', 'choice'),
     ('It would ____________ that two documents overlap substantially.', 'appear'),
     ('Instructions are to be ____________ by Friday evening.', 'sought'),
     ('No ____________ of the financial implications has been circulated.', 'estimate')],

g_b=[('( It is widely assumed that length indicates importance / Everybody thinks long is important ) — record register.', ['It is widely assumed that length indicates importance', 'Everybody thinks long is important'], 0),
     ('( What is required is a ranking / We need a ranking ) — formal paper.',
      ['What is required is a ranking', 'We need a ranking'], 0),
     ('( Instructions are to be sought by Friday / You must get instructions by Friday ) — for a record.',
      ['Instructions are to be sought by Friday', 'You must get instructions by Friday'], 0),
     ('( Amara, please read the two-page draft tonight / It is considered desirable that the draft be read ) — an instruction to a colleague.',
      ['Amara, please read the two-page draft tonight',
       'It is considered desirable that the draft be read'], 0),
     ('( It would appear that the documents overlap / It appears the documents are overlapping ) — register.',
      ['It would appear that the documents overlap',
       'It appears the documents are overlapping'], 0),
     ('( The choice of criteria is a matter for the delegation / The delegation has to choose criteria, which is its matter ) — nominal style.',
      ['The choice of criteria is a matter for the delegation',
       'The delegation has to choose criteria, which is its matter'], 0)],

d1=dict(
 title='Forty-one pages of what we already know',
 fig=(['A hundred and six pages.', 'And one evening.'],
      ['Which four matter?', 'Nothing on the covers says.']),
 cap='Elena Duarte and Peter Novak, by telephone from Lindhall on the Friday.',
 lines=[('Elena', 'A hundred and six pages arrived at five o’clock. The session opens at ten on Monday.'),
        ('Peter', 'Which is the important one?'),
        ('Elena', 'That is the question. The longest is forty-one pages and is a compilation of positions we already hold.'),
        ('Peter', 'And the shortest?'),
        ('Elena', 'Two pages, and it is the only draft decision in the distribution.'),
        ('Peter', 'So length tells you nothing at all.'),
        ('Elena', 'Length tells me how long the secretariat had. The symbol tells me whether anything is decided.'),
        ('Peter', 'Then rank them by the symbol, not by the title.'),
        ('Elena', 'And by whether I hold an instruction. Two of the four decisions are not covered by anything I have.'),
        ('Peter', 'Send me those two tonight and you will have instructions by Sunday noon.'),
        ('Elena', 'That is the real output of this evening: not a summary, but two questions to the capital.'),
        ('Peter', 'Which is the one thing a reduction of a hundred pages never produces by itself.')],
 a=[('How many pages arrived?', 'a hundred and six'),
    ('What is the longest document?', 'a forty-one page compilation of known positions'),
    ('What is the shortest?', 'a two-page draft decision'),
    ('How should they be ranked?', 'by symbol and by whether an instruction is held'),
    ('What is the evening’s real output?', 'two questions to the capital')],
 b=[('Length tells me how long the ____________ had.', 'secretariat'),
    ('The ____________ tells me whether anything is decided.', 'symbol'),
    ('Two of the four decisions are not ____________.', 'covered'),
    ('Instructions by Sunday ____________.', 'noon')]),

d2=dict(
 title='A summary you may rely on',
 fig=(['The summary is accurate.', 'Accurate at what?'],
      ['At what each paper says.', 'And at what each paper does?']),
 cap='Elena and Farida Haddad, over the reduction on Saturday morning.',
 lines=[('Farida', 'Your eleven summaries are accurate. I have checked three against the originals.'),
        ('Elena', 'They are accurate and they are useless, which took me until midnight to see.'),
        ('Farida', 'Because each is a paragraph.'),
        ('Elena', 'Because each is the same paragraph length as the others. A two-page decision and a forty-one-page compilation look equal on my page.'),
        ('Farida', 'Then weight them. One line for a compilation, a full page for a draft decision.'),
        ('Elena', 'And for a draft decision, the operative paragraphs quoted entire, never summarised.'),
        ('Farida', 'What about the bracketed text?'),
        ('Elena', 'Every bracket reproduced as it stands. A bracket is a disagreement, and a summary closes it without authority.'),
        ('Farida', 'So the rule is: summarise information, quote decisions.'),
        ('Elena', 'And beside each decision, one line saying whether we hold an instruction.'),
        ('Farida', 'That last line is the only one the Ambassador will read on Monday morning.'),
        ('Elena', 'Then it belongs at the top of the page, and what else do we put above the documents themselves?')],
 unresolved=True,
 a=[('Were the summaries accurate?', 'yes'),
    ('Why were they useless?', 'they were uniformly weighted'),
    ('What should be quoted entire?', 'the operative paragraphs of a draft decision'),
    ('Why reproduce brackets?', 'a bracket is a disagreement a summary would close'),
    ('What goes beside each decision?', 'whether an instruction is held')],
 b=[('They are accurate and they are ____________.', 'useless'),
    ('____________ information, quote decisions.', 'Summarise'),
    ('A ____________ is a disagreement.', 'bracket'),
    ('Whether we hold an ____________.', 'instruction')]),

speak=[('Impersonal register',
        ['Make six statements about a meeting you attend.',
         'Recast each in the impersonal, nominal register.',
         'Your partner says which ones lost a necessary actor.']),
       ('Rank, do not summarise',
        ['List six documents from your own work.',
         'Your partner asks which contain decisions.',
         'Rank them for an evening’s reading and justify the first two.']),
       ('Two questions to the capital',
        ['Describe a meeting you must attend without full instructions.',
         'Your partner helps you reduce your gaps to two questions.',
         'Each question must be answerable with a yes or a sentence.'])],

ext_title='A reduction is useful in proportion to the weighting you impose on it',
ext_fig=figs.datatable('ELEVEN DOCUMENTS, RANKED PROPERLY',
                       ['Document', 'Pages', 'Read tonight?'],
                       [['draft decision', '2', 'in full, quoted'],
                        ['draft decision, revision 1', '3', 'in full, quoted'],
                        ['chair’s working paper', '9', 'yes, the operative part'],
                        ['budget implications note', '4', 'yes, the figures'],
                        ['secretariat compilation', '41', 'one line'],
                        ['six information papers', '47', 'titles only']]),
ext_fig_cap='A hundred and six pages reduced to eighteen that must be read, and quoted where they bind.',
ext=[
 'The reduction of a large distribution is among the most valuable operations available, and '
 'it is also the one in which the shape of the request determines almost the whole of the '
 'value obtained.',
 'A request for a summary of each document will be answered with a summary of each document. '
 'Uniform treatment is the natural output of an undifferentiated instruction, and it destroys '
 'exactly the information a delegate needs, which is the difference between the documents.',
 'What must be supplied, therefore, is the weighting. Documents in which something is decided '
 'are treated differently in kind from documents in which something is described, and the '
 'distinction is carried in the document symbol rather than in the title or the length.',
 'For a text on which a decision is sought, summary is not merely insufficient but positively '
 'harmful: operative paragraphs are to be quoted entire, and bracketed wording reproduced as '
 'it stands, since a bracket records a disagreement which no summary has the authority to '
 'resolve.',
 'Information papers, by contrast, may be reduced to a line, and several of them to a list of '
 'titles. It is no disrespect to a forty-one page compilation to record that it compiles '
 'positions already held.',
 'The output of such an evening is not a document but two or three questions to the capital, '
 'put early enough to be answered. A delegate who arrives with an accurate summary and no '
 'instruction has read a hundred pages to no purpose.'],

dp2=('Instructions', 'Delegation practice commonly requires that the absence of an instruction '
     'on a matter before a body be identified and reported in time for instructions to be '
     'sought, rather than resolved by the delegate at the table.',
     'Source: general conference practice literature, 2025–2026.'),

e_a=[('What determines the value of a reduction?', 'the shape of the request'),
     ('What does an undifferentiated instruction produce?', 'uniform treatment'),
     ('Where is the decision distinction carried?', 'in the document symbol'),
     ('How are operative paragraphs to be handled?', 'quoted entire, never summarised'),
     ('What is the real output of the evening?', 'two or three questions to the capital')],
e_b=[('A summary of each document is what a delegate needs.', 'F'),
     ('Uniform treatment destroys the differences.', 'T'),
     ('Brackets may be summarised away.', 'F'),
     ('Information papers may be reduced to a line.', 'T'),
     ('An accurate summary without instructions is sufficient.', 'F'),
     ('The symbol matters more than the title.', 'T')],

w_model='Purpose: so that the evening produces a ranked reading list and the questions on which '
        'instructions must be sought before Sunday noon. Scope: the eleven documents distributed '
        'on Friday for Monday’s session; the previous session’s records are not covered. Inputs: '
        'the distribution as received, our standing instructions of March, and the list of items '
        'on which we hold no instruction. Criteria: documents ranked by whether a decision is '
        'sought in them, as shown by the symbol, and then by whether an instruction is held; '
        'operative paragraphs of any draft decision quoted entire with all brackets reproduced; '
        'information papers reduced to one line each; a closing list of the matters on which '
        'instructions are required. Done: with me by eight o’clock this evening. Fallback: where '
        'the symbol does not show whether a decision is sought, the document is ranked as though '
        'it were.',
w_fig=figs.spec_card('SIX LINES FOR A READING PRIORITY',
                     [('Purpose', 'a ranked list and the questions for the capital'),
                      ('Scope', 'Friday’s eleven documents'),
                      ('Inputs', 'the distribution, standing instructions, the gaps list'),
                      ('Criteria', 'rank by decision and instruction; quote operative text'),
                      ('Done', 'by eight this evening'),
                      ('Fallback', 'unclear symbol: treat as a decision')]),
w_fig_cap='The fallback resolves every doubt in the direction of reading more, not less.',
w_task='Write a six-line tasking for a reading priority before a session.',
w_steps=['Line 1: say what the evening must produce.',
         'Line 2: say which distribution, and what is excluded.',
         'Line 3: say what you are giving it.',
         'Line 4: say the ranking, the quoting and the closing list.',
         'Line 5: say by when.',
         'Line 6: say what happens where the symbol is unclear.'],
w_bank=['Purpose: so that the evening produces a ranked reading list and the questions on which instructions must be sought',
        'Scope: the … documents distributed on … for … ; … is not covered',
        'Inputs: the distribution as received, our standing instructions, and the list of items on which we hold none',
        'Criteria: ranked by whether a decision is sought, then by whether an instruction is held; operative paragraphs quoted entire with brackets reproduced; information papers one line each; a closing list of matters requiring instructions',
        'Done: with me by … . Fallback: where the symbol does not show whether a decision is sought, the document is ranked as though it were'],
w_check=['Is the ranking by decision, not length?',
         'Are operative paragraphs quoted entire?',
         'Are brackets reproduced?',
         'Is there a closing list of instruction gaps?'],

t_title='A hundred pages reduced to what you must read tonight',
t_fig=figs.split('ELEVEN DOCUMENTS',
                 'Summarise',
                 ['compilations',
                  'information papers',
                  'procedural histories',
                  'background annexes'],
                 'Quote entire',
                 ['operative paragraphs',
                  'bracketed wording',
                  'financial implications',
                  'anything on which we are silent']),
t_fig_cap='Summarise what describes. Quote what binds. The symbol tells you which is which.',
t_body=[
 'Supply the weighting in the instruction itself, since no property of a distribution will '
 'supply it: documents are to be ranked by whether a decision is sought in them, as shown by '
 'the symbol, and then by whether the delegation holds an instruction.',
 'For every text on which a decision is sought, the operative paragraphs are to be quoted '
 'entire and every bracket reproduced as it stands. Summary at that point is not economy but '
 'the silent resolution of a disagreement.',
 'Require a closing list of the matters on which no instruction is held, and send those '
 'questions to the capital the same evening. A hundred pages read without instructions is a '
 'hundred pages read to no purpose.'],
t_say=[('Impose the weighting: ', 'Rank by whether a decision is sought, then by instruction held.'),
       ('Forbid the summary: ', 'Operative paragraphs quoted entire, with every bracket reproduced.'),
       ('Require the gaps: ', 'A closing list of matters on which we hold no instruction.')],
t_bound='Asked to summarise eleven documents, it will summarise eleven documents, uniformly '
        'and accurately. Nothing in the texts tells it that two pages outweigh forty-one, and '
        'a levelled summary cannot be un-levelled by its reader.',
t_a=[('Supply the ____________ in the instruction itself.', 'weighting'),
     ('Rank by whether a ____________ is sought.', 'decision'),
     ('Operative paragraphs quoted ____________.', 'entire'),
     ('Every ____________ reproduced as it stands.', 'bracket'),
     ('A closing list of matters on which we hold no ____________.', 'instruction'),
     ('A levelled summary cannot be un-levelled by its ____________.', 'reader')],
t_b_rubric='Say whether each document should be summarised or quoted.',
t_b=[('A forty-one page compilation of known positions.', 'summarised, in one line'),
     ('A two-page draft decision.', 'quoted entire, with brackets'),
     ('An information paper on a regional meeting.', 'summarised, or its title only'),
     ('The financial implications of a proposal.', 'quoted: the figures as they stand')],

case=dict(
 title='The Decision Room · A hundred and six pages and one evening',
 brief=[
  'Eleven documents totalling a hundred and six pages are distributed at five o’clock on '
  'Friday for a session opening at ten on Monday. The delegation consists of one person.',
  'The documents include two revisions of a draft decision at two and three pages, a chair’s '
  'working paper of nine pages, a note on budget implications of four pages, a secretariat '
  'compilation of forty-one pages and six information papers totalling forty-seven.',
  'A reduction is produced overnight: eleven paragraph-length summaries, accurate and '
  'uniformly weighted. The delegation holds no instruction on two of the four matters on which '
  'decisions are sought.'],
 exhibit=figs.datatable('THE DISTRIBUTION, TWO WAYS',
                        ['Document', 'In the summary', 'In a ranking'],
                        [['draft decision', 'one paragraph', 'first, quoted entire'],
                         ['revision 1', 'one paragraph', 'second, quoted entire'],
                         ['chair’s paper', 'one paragraph', 'third, operative part'],
                         ['budget note', 'one paragraph', 'fourth, figures quoted'],
                         ['compilation (41pp)', 'one paragraph', 'one line'],
                         ['six information papers', 'six paragraphs', 'titles only']]),
 exhibit_cap='The same eleven documents, levelled on the left and ranked on the right.',
 exhibit_note='The summaries are accurate. Accuracy about each document in isolation is what '
              'destroys the information about their relative weight.',
 voices=[('Elena Duarte', 'delegate, the Assembly',
          'Eleven accurate paragraphs told me nothing about which two pages decide anything.'),
         ('Farida Haddad', 'protocol and interpreting',
          'Summarise what describes and quote what binds. A bracket is a disagreement, not a detail.'),
         ('Peter Novak', 'desk officer, the capital',
          'And the two questions on which you hold no instruction are worth more to me than the whole summary.')],
 steps=[('Find it', 'What was distributed and what was produced?'),
        ('Compare it', 'Summary against ranking.'),
        ('Infer it', 'Why did uniform weighting appear?'),
        ('Weigh it', 'Eighteen pages read properly.'),
        ('Decide', 'What must a reduction always do?')],
 analysis=[('Find it. What arrived?', 'a hundred and six pages in eleven documents'),
           ('Compare it. What was lost?', 'the difference in weight between documents'),
           ('Infer it. Why?', 'the instruction asked for a summary of each'),
           ('Weigh it. What is gained?', 'eighteen pages read, and two questions sent'),
           ('Decide. What must it do?', 'rank by decision and instruction, and quote operative text')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say how documents are ranked.',
                 'Say what may be summarised and what must be quoted.',
                 'Say what the reduction must end with.',
                 'Say what is done where the symbol is unclear.'],
 bank=['Documents are ranked by whether a decision is sought in them, and then by whether an instruction is held.',
       'Information is summarised; operative paragraphs are quoted entire, with every bracket reproduced as it stands.',
       'Every reduction ends with the list of matters on which the delegation holds no instruction.',
       'Where the symbol does not show whether a decision is sought, the document is treated as though it were.'],
 outcome='The reduction is rebuilt in forty minutes as two pages: eighteen pages of required '
         'reading, the two draft decisions quoted entire, and a closing list of two matters. '
         'The questions reach the capital at nine o’clock on Friday evening and instructions '
         'arrive on Sunday afternoon. At Monday’s session the delegation speaks on both matters '
         'and the two-page form becomes the standing practice of the mission in Lindhall.',
 outcome_q=[('How long did the rebuild take?', 'forty minutes'),
            ('How much required reading was identified?', 'eighteen pages'),
            ('When did the questions reach the capital?', 'nine o’clock Friday evening'),
            ('When did instructions arrive?', 'Sunday afternoon'),
            ('What became standing practice?', 'the two-page ranked form')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Summarise the Friday distribution',
 task=['A delegate asked for help with a hundred and six pages before a Monday session.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Summarise the Friday distribution.',
        'All eleven documents, with no exceptions.',
        'A paragraph each.',
        'Keep it faithful.',
        'Highlight anything important.',
        'Tonight.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and “a paragraph each” decided that two pages and forty-one would weigh the same.',
 asked=['All eleven, no exceptions', 'A paragraph each', 'Highlight anything important'],
 back=['11 summaries', '11 equal paragraphs', '0 operative paragraphs quoted'],
 gap='Nobody imposed a weighting, so the only available weighting — one paragraph each — was applied.',
 back_cap='Eleven accurate paragraphs, in which the only binding text in the distribution is paraphrased.',
 back_note='“Highlight anything important” supplies no test of importance, and in a '
           'distribution the test is not in the documents but in the delegation’s instructions.',
 diagnosis=[('“all eleven documents”', 'unstated exception'),
            ('“with no exceptions”', 'unstated exception'),
            ('“a paragraph each”', 'hidden assumption'),
            ('“keep it faithful”', 'unstated criterion'),
            ('“anything important”', 'unstated criterion'),
            ('“tonight”', 'hidden assumption')],
 rewrite='Rewrite it on the six lines so that the weighting is supplied and the gaps are found.',
 scaffold=['what the evening must produce',
           'which distribution, and what is excluded',
           'what you are giving it',
           'the ranking, the quoting and the closing list',
           'by when',
           'what happens where the symbol is unclear'],
 bank=['Purpose: so that the evening produces a ranked reading list and the questions on which instructions must be sought before Sunday noon',
       'Scope: the eleven documents distributed on Friday for Monday’s session; the previous session’s records are not covered',
       'Inputs: the distribution as received, our standing instructions of March, and the list of items on which we hold no instruction',
       'Criteria: documents ranked by whether a decision is sought, as shown by the symbol, then by whether an instruction is held; operative paragraphs quoted entire with all brackets reproduced; information papers one line each; a closing list of matters requiring instructions',
       'Done: with me by eight o’clock this evening',
       'Fallback: where the symbol does not show whether a decision is sought, the document is ranked as though it were'],
 check=['Is the ranking by decision rather than length?',
        'Are operative paragraphs quoted entire?',
        'Are brackets reproduced?',
        'Is there a list of instruction gaps?'],
 model=['so that the evening produces a ranked reading list and the questions on which instructions must be sought before Sunday noon',
        'the eleven documents distributed on Friday for Monday’s session; the previous session’s records are not covered',
        'the distribution as received, our standing instructions of March, and the list of items on which we hold no instruction',
        'documents ranked by whether a decision is sought in them, as shown by the symbol, and then by whether an instruction is held; operative paragraphs of any draft decision quoted entire with all brackets reproduced; information papers reduced to one line each; a closing list of the matters on which instructions are required',
        'with me by eight o’clock this evening',
        'where the symbol does not show whether a decision is sought, the document is ranked as though it were'],
 cost='11 equal paragraphs, 0 quoted operative text, and two matters reaching the table without instructions.'),

lang=dict(
 title='Across the Language Line · A title that promises a decision and an annex that contains one',
 setting=[
  'The working language of the body is not the first language of the delegation that drafted '
  'document seven. Its title, in translation, announces a recommendation; the body of the text '
  'recommends nothing and the operative wording sits in an unannounced annex.',
  'A reader guided by titles reads the first nine pages, finds nothing operative, and stops '
  'before the annex, in which a decision is in fact sought.'],
 ladder=[('A title drafted in a second language', 'promising a recommendation'),
         ('A body containing none', 'and an unannounced annex'),
         ('A careful reader', 'who stops on page nine')],
 cap='A title and a structure that do not match, in nobody’s first language.',
 turns=[('Turn 1 · The delegate', 'Document seven appears to contain no operative text.'),
        ('Turn 2 · The drafting delegation', 'The recommendation is in the annex.'),
        ('Turn 3 · The delegate', 'Thank you — may I ask whether the annex is to be adopted?')],
 holds=['May I ask where the operative wording in document seven is to be found?',
        'Is the annex intended for adoption, or for information?',
        'In our reading practice the title suggested a recommendation in the body.',
        'I am not criticising the drafting; I want to be sure I read it as you intend.',
        'Would you be content for the secretariat to note the annex in the agenda annotation?',
        'I will flag in our own note that operative text may sit in annexes.'],
 redline='Never assume that operative text appears where your own drafting conventions would '
         'put it, and never suggest that a delegation has concealed a proposal in an annex.',
 score=['Asked where the operative wording is.',
        'Asked whether the annex is for adoption.',
        'Explained the reading expectation plainly.',
        'Made clear no criticism was intended.',
        'Proposed an annotation rather than a complaint.'],
 a=[('What does the title promise?', 'a recommendation'),
    ('Where is the operative wording?', 'in an unannounced annex'),
    ('What does a title-guided reader do?', 'stops on page nine'),
    ('What should be asked?', 'where the operative wording is, and whether the annex is for adoption'),
    ('What should be proposed?', 'an annotation in the agenda'),
    ('What must not be suggested?', 'that the delegation concealed it')]),

rev_fig=figs.split('A FRIDAY DISTRIBUTION',
                   'Rank by',
                   ['whether a decision is sought',
                    'whether an instruction is held',
                    'the financial implications',
                    'the deadline for instructions'],
                   'Never by',
                   ['length',
                    'the title',
                    'the order of distribution',
                    'how interesting it is']),
rev_fig_cap='The two columns are almost independent, and only the left one survives Monday.',
rev=dict(
 read=[('How many pages arrived?',
        ['a hundred and six', 'forty-one', 'eleven', 'eighteen'], 0),
       ('What is in the shortest document?',
        ['the only draft decision', 'a compilation',
         'a procedural history', 'the budget'], 0),
       ('What was wrong with the reduction?',
        ['uniform weighting', 'inaccuracy', 'it was late', 'it was too short'], 0),
       ('What should a reduction end with?',
        ['the matters needing instructions', 'a conclusion',
         'the longest document', 'a list of titles'], 0)],
 listen_text='Supply the weighting in the instruction: rank by whether a decision is sought and '
             'then by whether an instruction is held, quote operative paragraphs entire with '
             'every bracket, and require a closing list of the gaps.',
 listen=[('Supply the ____________ in the instruction.', 'weighting'),
         ('Rank by whether a ____________ is sought.', 'decision'),
         ('Quote operative paragraphs ____________.', 'entire'),
         ('And require a closing list of the ____________.', 'gaps')],
 speak=['Recast six statements about a meeting in the impersonal, nominal register.',
        'Then rank six documents from your own work for one evening’s reading.'],
 write='Write a six-line tasking for a reading priority before a session.',
 vocab=[('Wording not yet agreed is a ____________ text.', 'bracketed'),
        ('An informal text with no official status is a ____________.', 'non-paper'),
        ('How an item has been handled before is a ____________ history.', 'procedural'),
        ('The authority under which a body acts is a ____________.', 'mandate')],
 gram=[('It would ____________ that two documents overlap substantially.', 'appear'),
       ('Instructions are to be ____________ by Friday evening.', 'sought'),
       ('No ____________ of the financial implications has been circulated.', 'estimate'),
       ('____________ was noted that the item had been deferred twice.', 'It')]),

found=['Rank a distribution by decision and instruction, never by length.',
       'Summarise what describes; quote entire what binds, brackets included.',
       'End every reduction with the matters on which you hold no instruction.',
       'Send those questions the same evening, early enough to be answered.'],
end_line='Length tells you how long the drafter had. The symbol tells you what is decided.',
end_next='Next: Reading an Agenda for the Real Decisions')
