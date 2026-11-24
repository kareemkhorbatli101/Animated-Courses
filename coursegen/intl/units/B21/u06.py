# -*- coding: utf-8 -*-
import figs

U = dict(
num=6,
title='The Chair’s Text and Your Instructions',
gram='obligation and endeavour: shall, shall endeavour to, may',
ai='a chair’s text compared against your own instructions',
strap='CEFR B2 · Grammar: obligation and endeavour — shall, shall endeavour to, may · '
      'AI: a chair’s text compared against your own instructions',
cando=['distinguish shall, shall endeavour to and may precisely',
       'compare a chair’s text against written instructions',
       'say which of your instructions a text satisfies',
       'identify what you can accept ad referendum',
       'write a six-line tasking for an instruction comparison'],

hero=('THE CHAIR’S TEXT MET FIVE OF OUR SEVEN INSTRUCTIONS',
      ['Four were met in full and one in substance.',
       'The two that were not met were the two we had been told were essential.'],
      [(1080, 'blue', 'long'), (240, 'grey', 'short'), (300, 'teal', 'short')]),
hero_cap='A chair’s compromise text of nineteen paragraphs, against instructions of seven points.',

warm=['What is the difference between what you want and what you are instructed to obtain?',
      'How do you report a text that is nearly acceptable?',
      'Who decides whether nearly is enough?'],

read=[
 'The chair circulates a compromise text at midnight. It runs to nineteen paragraphs and is '
 'plainly intended to close the negotiation on the following afternoon.',
 'Elena holds written instructions of seven points. A comparison is produced which reports, '
 'accurately, that the text is broadly consistent with the delegation’s position.',
 'Broadly consistent is a judgement, and it is not the delegation’s to make. The instructions '
 'distinguish two points described as essential from five described as desirable, and the text '
 'satisfies four of the five and neither of the two.',
 'Paragraph 11 provides that parties shall endeavour to establish a review mechanism, where the '
 'instruction requires that parties shall establish one. Paragraph 14 provides that a party may '
 'submit data, where the instruction requires that it shall.',
 'A text that moves from shall to shall endeavour to, and from shall to may, has not been '
 'weakened in style. It has been emptied in substance, and the comparison must say so in those '
 'terms rather than in the language of broad consistency.'],

dp1=('Instructions and discretion', 'Delegation practice commonly distinguishes points on '
     'which a delegation has no discretion from those on which it may exercise judgement, and '
     'requires that a text failing an essential point be referred rather than accepted.',
     'Source: general conference practice literature, 2025–2026.'),

c_a=[('When was the chair’s text circulated?', 'at midnight'),
     ('How many paragraphs does it contain?', 'nineteen'),
     ('How many points are in the instructions?', 'seven'),
     ('How many are essential?', 'two'),
     ('How many of the desirable points are met?', 'four of five'),
     ('How many essential points are met?', 'neither')],

c_b=[('The comparison was inaccurate.', 'F'),
     ('Broad consistency is a useful finding.', 'F'),
     ('Paragraph 11 requires establishment.', 'F'),
     ('Paragraph 14 makes submission optional.', 'T'),
     ('The essential points were satisfied.', 'F'),
     ('The chair intends to close on the following afternoon.', 'T')],

c_c=[('Parties ____________ establish a review mechanism within two years.', 'shall'),
     ('Parties ____________ endeavour to establish a mechanism.', 'shall'),
     ('A party ____________ submit additional data if it wishes.', 'may'),
     ('The Secretariat ____________ circulate the text in all languages.', 'shall'),
     ('Each party ____________ endeavour to report by 31 January.', 'shall'),
     ('The committee ____________ invite observers at its discretion.', 'may')],

c_d=[('Shall creates ( an obligation / a discretion ).', ['an obligation', 'a discretion'], 0),
     ('Shall endeavour to creates ( an obligation of effort only / a full obligation ).',
      ['an obligation of effort only', 'a full obligation'], 0),
     ('May creates ( a permission / a duty ).', ['a permission', 'a duty'], 0),
     ('Broad consistency is ( a judgement / a finding ).', ['a judgement', 'a finding'], 0),
     ('An essential point not met requires ( referral / acceptance ).',
      ['referral', 'acceptance'], 0)],

c_e=('Obligation, effort or permission? Put each formulation in the right column.',
     [('parties shall establish', 'obligation'),
      ('parties shall endeavour to establish', 'effort'),
      ('a party may submit', 'permission'),
      ('the Secretariat shall circulate', 'obligation'),
      ('each party shall endeavour to report', 'effort'),
      ('the committee may invite', 'permission')],
     ['obligation', 'effort', 'permission']),

v_fig_title='A CHAIR’S TEXT IN SIX WORDS',
v_fig=[('doc', 'a chair’s text'), ('key', 'a bridging formula'), ('chart', 'a package'),
       ('clock', 'a deadline of a session'), ('people', 'an acceptance ad referendum'), ('speech', 'a point of principle')],
v_fig_cap='Six words for the midnight text that is intended to end the negotiation.',

vocab=[
 ('a chair’s text', 'a text put forward by the chair'),
 ('a compromise proposal', 'a proposal designed to bridge positions'),
 ('a package', 'several elements accepted or rejected together'),
 ('a landing zone', 'the area in which agreement is possible'),
 ('a bridging formula', 'wording that allows two positions to coexist'),
 ('an instruction of a delegation', 'what a capital has told a delegation to obtain'),
 ('a margin of discretion', 'the room a delegation has to judge'),
 ('a referral back to a capital', 'sending a question home for decision'),
 ('an acceptance ad referendum', 'acceptance subject to confirmation'),
 ('a breaking point', 'the point at which agreement fails'),
 ('a trade across items', 'conceding on one item to gain on another'),
 ('a linkage', 'a connection made between two matters'),
 ('a sequencing of concessions', 'the order in which concessions are made'),
 ('a final offer', 'the last position a party will take'),
 ('a text taken as a whole', 'a text accepted without separate votes'),
 ('a reservation entered at adoption', 'a position recorded when a text is adopted'),
 ('a point of principle', 'a point not open to trade'),
 ('a fallback instruction', 'what to do if the first instruction fails'),
 ('a deadline of a session', 'the time by which a session must end'),
 ('a consultation of a capital', 'asking the capital before acting')],

v_a=[('Wording that allows two positions to coexist is a ____________ formula.', 'bridging'),
     ('The area in which agreement is possible is a ____________ zone.', 'landing'),
     ('Acceptance subject to confirmation is an acceptance ____________.', 'ad referendum'),
     ('The room a delegation has to judge is a ____________ of discretion.', 'margin'),
     ('Conceding on one item to gain on another is a ____________ across items.', 'trade'),
     ('A point not open to trade is a point of ____________.', 'principle'),
     ('What to do if the first instruction fails is a ____________ instruction.', 'fallback'),
     ('Several elements accepted or rejected together are a ____________.', 'package')],

v_b=[('A chair’s text is a text', 'put forward by the chair.'),
     ('A referral back to a capital is sending a question', 'home for decision.'),
     ('A breaking point is the point', 'at which agreement fails.'),
     ('A text taken as a whole is a text', 'accepted without separate votes.'),
     ('A consultation of a capital is asking the capital', 'before acting.')],

g_title='Grammar: obligation and endeavour — shall, shall endeavour to, may',
g_rule=['Shall creates an obligation: parties shall establish a review mechanism within two '
        'years.',
        'Shall endeavour to creates an obligation of effort only, which is satisfied by trying: '
        'parties shall endeavour to establish a mechanism.',
        'May creates a permission, and imposes nothing at all: a party may submit additional '
        'data.',
        'The three are not degrees of the same thing. A movement from shall to shall endeavour '
        'to removes the result; a movement from shall to may removes the duty. Both are '
        'substantive, and neither is a matter of style.'],
g_fig=('LOOSE',
       ['Parties will try to set up a mechanism.',
        'Parties are expected to establish a mechanism.',
        'Parties can send data if they want to.',
        'The Secretariat is to circulate the text.'],
       'PRECISE',
       ['Parties shall endeavour to establish a review mechanism.',
        'Parties shall establish a review mechanism.',
        'A party may submit additional data.',
        'The Secretariat shall circulate the text in all languages.'],
       'four formulations in loose English',
       'the same four with the operative verb exact'),
g_fig_cap='Shall, shall endeavour to and may are three different instruments. Choose, do not drift.',

g_a=[('Parties ____________ establish a review mechanism within two years.', 'shall'),
     ('Parties ____________ endeavour to establish a mechanism.', 'shall'),
     ('A party ____________ submit additional data if it wishes.', 'may'),
     ('The Secretariat ____________ circulate the text in all languages.', 'shall'),
     ('Each party ____________ endeavour to report by 31 January.', 'shall'),
     ('The committee ____________ invite observers at its discretion.', 'may'),
     ('Nothing in this decision ____________ be construed as creating an obligation.', 'shall'),
     ('The chair ____________ consult delegations informally.', 'may'),
     ('Parties ____________ not withhold data already published.', 'shall')],

g_b=[('( Parties are expected to establish a mechanism / Parties shall establish a mechanism ) — obligation.', ['Parties are expected to establish a mechanism', 'Parties shall establish a mechanism'], 1),
     ('( Parties shall endeavour to establish a mechanism / Parties will try to set one up ) — register.',
      ['Parties shall endeavour to establish a mechanism', 'Parties will try to set one up'], 0),
     ('( A party may submit additional data / A party can send data if it wants ) — register.',
      ['A party may submit additional data', 'A party can send data if it wants'], 0),
     ('( shall endeavour to establish / shall establish, endeavouring ) — fixed form.',
      ['shall endeavour to establish', 'shall establish, endeavouring'], 0),
     ('( Nothing in this decision shall be construed as creating an obligation / Nothing here makes an obligation ) — register.',
      ['Nothing in this decision shall be construed as creating an obligation',
       'Nothing here makes an obligation'], 0),
     ('( Parties shall not withhold data already published / Parties may not want to withhold data ) — prohibition.',
      ['Parties shall not withhold data already published',
       'Parties may not want to withhold data'], 0)],

d1=dict(
 title='Broadly consistent',
 fig=(['Broadly consistent with our position.', 'Which two points are missing?'],
      ['The two marked essential.', 'Then it is not consistent at all.']),
 cap='Elena Duarte and Ambassador Clara Mendel, at one in the morning.',
 lines=[('Mendel', 'Can we accept the chair’s text?'),
        ('Elena', 'The comparison says it is broadly consistent with our position.'),
        ('Mendel', 'That phrase is doing a great deal of work. Which points are met?'),
        ('Elena', 'Four of the five desirable points in full, and the fifth in substance.'),
        ('Mendel', 'And the two essential points?'),
        ('Elena', 'Neither. Paragraph 11 says shall endeavour to establish where we require shall establish.'),
        ('Mendel', 'And the second?'),
        ('Elena', 'Paragraph 14 says a party may submit data. We are instructed to obtain shall.'),
        ('Mendel', 'So the text satisfies everything we could have conceded and nothing we could not.'),
        ('Elena', 'Which is a common shape for a midnight text. It is designed to look like a package.'),
        ('Mendel', 'Then we accept the five ad referendum and refer the two.'),
        ('Elena', 'And say so at the table before the chair declares consensus, not afterwards.')],
 a=[('What did the comparison say?', 'that the text is broadly consistent'),
    ('How many desirable points were met?', 'four in full and one in substance'),
    ('How many essential points were met?', 'neither'),
    ('What does paragraph 11 say?', 'shall endeavour to establish'),
    ('What will the delegation do?', 'accept five ad referendum and refer the two')],
 b=[('That phrase is doing a great deal of ____________.', 'work'),
    ('Everything we could have ____________.', 'conceded'),
    ('Designed to look like a ____________.', 'package'),
    ('Before the chair declares ____________.', 'consensus')]),

d2=dict(
 title='Ad referendum, and what it costs',
 fig=(['We accept ad referendum.', 'And the chair will note it.'],
      ['Is that a concession?', 'It is a position with a date on it.']),
 cap='Elena and Peter Novak, on the line to the capital at two in the morning.',
 lines=[('Peter', 'You propose to accept five points ad referendum. What does that commit us to?'),
        ('Elena', 'Nothing legally. It commits us politically to not reopening them if the capital confirms.'),
        ('Peter', 'And if the capital does not confirm?'),
        ('Elena', 'Then I shall have to withdraw an acceptance, which costs more than never giving it.'),
        ('Peter', 'How long do I have?'),
        ('Elena', 'The chair intends to close at four tomorrow. I would need an answer by two.'),
        ('Peter', 'On the two essential points, what is the fallback?'),
        ('Elena', 'The instruction gives none, which is why I am telephoning at two in the morning.'),
        ('Peter', 'Then I will ask for a fallback on paragraph 11 and nothing on paragraph 14.'),
        ('Elena', 'If there is no fallback on 14, I shall have to break consensus on it alone.'),
        ('Peter', 'Which is a serious thing to do with one delegation’s voice.'),
        ('Elena', 'It is. And what do I say if the chair asks me at the table whether we are alone?')],
 unresolved=True,
 a=[('What does ad referendum commit?', 'nothing legally; politically not to reopen if confirmed'),
    ('What is the cost of withdrawing it?', 'more than never giving it'),
    ('When does the chair intend to close?', 'at four the following afternoon'),
    ('By when does Elena need an answer?', 'by two'),
    ('What does the instruction lack?', 'a fallback on the essential points')],
 b=[('It commits us ____________.', 'politically'),
    ('Withdraw an ____________.', 'acceptance'),
    ('I would need an answer by ____________.', 'two'),
    ('Break ____________ on it alone.', 'consensus')]),

speak=[('Three instruments',
        ['Write six provisions about your own work.',
         'Express each with shall, shall endeavour to and may in turn.',
         'Your partner says what each version actually requires.']),
       ('Essential and desirable',
        ['List five things you want from a negotiation in your work.',
         'Mark two as essential and three as desirable.',
         'Your partner offers you a text meeting the three; refuse it.']),
       ('Ad referendum',
        ['Accept something from your partner subject to confirmation.',
         'State exactly what you are and are not committing to.',
         'They test you by asking what happens if confirmation is refused.'])],

ext_title='A comparison must report against instructions, not against a position',
ext_fig=figs.datatable('SEVEN INSTRUCTIONS AGAINST NINETEEN PARAGRAPHS',
                       ['Instruction', 'Status', 'Text'],
                       [['essential: review mechanism', 'not met', 'shall endeavour to establish'],
                        ['essential: data submission', 'not met', 'a party may submit'],
                        ['desirable: timetable', 'met', 'shall report annually'],
                        ['desirable: transparency', 'met', 'shall publish'],
                        ['desirable: cost ceiling', 'met', 'within existing resources'],
                        ['desirable: observers', 'met in substance', 'the committee may invite']]),
ext_fig_cap='Five met and two not, and the two carry the whole of the delegation’s discretion.',
ext=[
 'Comparing a nineteen-paragraph text against written instructions at one in the morning is '
 'exactly the kind of work that should be delegated, and the comparison will be accurate.',
 'It will nonetheless answer the wrong question unless the question is specified. Asked whether '
 'a text is consistent with a position, a comparison will weigh the whole against the whole and '
 'return a judgement — broadly consistent, largely acceptable, substantially met — which is a '
 'conclusion the delegation alone is entitled to reach.',
 'The instruction must therefore require a point-by-point table: each numbered instruction, the '
 'paragraph that addresses it, the operative verb in that paragraph, and the status met, met in '
 'substance or not met. Judgements of overall acceptability are to be excluded expressly.',
 'The operative verb must be reported as it stands. Shall, shall endeavour to and may are three '
 'instruments rather than three strengths, and a comparison that renders shall endeavour to as '
 'broadly providing for has concealed the only fact that matters.',
 'Where instructions distinguish essential from desirable points, the table is ordered by that '
 'distinction and not by paragraph number, so that the first lines a tired reader sees are the '
 'lines on which no discretion exists.',
 'And the table ends with what is missing from the instructions themselves: the absence of a '
 'fallback on an essential point is a finding, and it is better discovered at one in the '
 'morning than at four in the afternoon.'],

dp2=('Acceptance subject to confirmation', 'Practice permits a delegation to accept an element '
     'ad referendum, which commits it politically to refrain from reopening the element if '
     'confirmation is given, and is customarily recorded by the chair.',
     'Source: general conference practice literature, 2025–2026.'),

e_a=[('What question will a comparison answer?', 'whether the text is consistent with a position'),
     ('Why is that the wrong question?', 'the judgement belongs to the delegation'),
     ('What must the table contain?', 'instruction, paragraph, operative verb and status'),
     ('How must the operative verb be reported?', 'as it stands'),
     ('How is the table ordered?', 'by essential and desirable, not by paragraph number')],
e_b=[('“Broadly consistent” is a finding.', 'F'),
     ('Shall endeavour to may be rendered as providing for.', 'F'),
     ('Essential points come first in the table.', 'T'),
     ('A missing fallback is a finding.', 'T'),
     ('Overall judgements should be requested.', 'F'),
     ('The comparison should be point by point.', 'T')],

w_model='Purpose: so that I can tell the Ambassador, point by point, which of our seven '
        'instructions this text satisfies and which it does not. Scope: the chair’s text of '
        'nineteen paragraphs circulated at midnight, against our instructions of 2 September; '
        'the earlier chair’s text is not covered. Inputs: the chair’s text, our instructions, '
        'and the list of our tabled amendments. Criteria: a table with one line for each '
        'numbered instruction, giving the paragraph that addresses it, the operative verb in '
        'that paragraph quoted exactly, and the status met, met in substance or not met; the two '
        'essential points first; no judgement of overall acceptability; a closing line on any '
        'instruction for which no fallback is given. Done: with me within the hour. Fallback: '
        'where no paragraph addresses an instruction, the line reads not addressed rather than '
        'not met.',
w_fig=figs.spec_card('SIX LINES FOR AN INSTRUCTION COMPARISON',
                     [('Purpose', 'point by point, what is satisfied'),
                      ('Scope', 'the midnight text against our instructions'),
                      ('Inputs', 'the text, the instructions, our amendments'),
                      ('Criteria', 'table; verbs quoted; essentials first; no overall judgement'),
                      ('Done', 'within the hour'),
                      ('Fallback', 'nothing addresses it: not addressed')]),
w_fig_cap='“No judgement of overall acceptability” is the line that keeps the decision where it belongs.',
w_task='Write a six-line tasking for a comparison of a text against instructions.',
w_steps=['Line 1: say what you must be able to tell your head of mission.',
         'Line 2: say which text and instructions, and what is excluded.',
         'Line 3: say what you are giving it.',
         'Line 4: say the table, the quoted verbs, the ordering and the prohibition on judgement.',
         'Line 5: say by when.',
         'Line 6: say what happens where nothing addresses an instruction.'],
w_bank=['Purpose: so that I can tell … , point by point, which of our instructions this text satisfies',
        'Scope: the chair’s text of … paragraphs, against our instructions of … ; … is not covered',
        'Inputs: the chair’s text, our instructions, and our tabled amendments',
        'Criteria: one line per numbered instruction, giving the paragraph, the operative verb quoted exactly, and the status met, met in substance or not met; essential points first; no judgement of overall acceptability; a closing line on any instruction with no fallback',
        'Done: with me within … . Fallback: where no paragraph addresses an instruction, the line reads not addressed'],
w_check=['Is it point by point?',
         'Are operative verbs quoted?',
         'Do the essential points come first?',
         'Is overall judgement excluded?'],

t_title='A chair’s text compared against your own instructions',
t_fig=figs.split('NINETEEN PARAGRAPHS, SEVEN INSTRUCTIONS',
                 'Require',
                 ['one line per instruction',
                  'the paragraph that addresses it',
                  'the operative verb quoted',
                  'met, met in substance, not met'],
                 'Exclude',
                 ['broadly consistent',
                  'largely acceptable',
                  'substantially met',
                  'any overall judgement']),
t_fig_cap='Four columns you can act on, and four phrases that decide for you without authority.',
t_body=[
 'Require a table rather than an assessment: one line for each numbered instruction, the '
 'paragraph that addresses it, the operative verb of that paragraph quoted exactly, and a '
 'status of met, met in substance or not met.',
 'Exclude overall judgements in terms. Broadly consistent, largely acceptable and substantially '
 'met are conclusions that belong to the delegation and its capital, and a comparison that '
 'offers one has taken a decision it was not asked to take.',
 'Order the table by the distinction your instructions draw between essential and desirable, '
 'and end it with the instructions for which no fallback has been given. At one in the morning '
 'the first three lines are all that will be read, and the absence of a fallback is the finding '
 'that determines what you can do at four in the afternoon.'],
t_say=[('Require the table: ', 'One line per instruction: paragraph, operative verb, status.'),
       ('Exclude the judgement: ', 'No assessment of overall acceptability.'),
       ('Order by discretion: ', 'Essential points first, desirable afterwards.')],
t_bound='Asked whether a text is consistent with a position, it will weigh the whole against '
        'the whole and answer. It cannot know that your capital reserved that judgement to '
        'itself, and nothing in the phrase it chooses will warn you that a decision has been '
        'taken for you.',
t_a=[('One line per ____________.', 'instruction'),
     ('The operative verb quoted ____________.', 'exactly'),
     ('A status of met, met in substance or not ____________.', 'met'),
     ('No assessment of overall ____________.', 'acceptability'),
     ('____________ points first.', 'Essential'),
     ('The absence of a ____________ is the finding.', 'fallback')],
t_b_rubric='Say whether each formulation may appear in the comparison.',
t_b=[('Paragraph 11: “shall endeavour to establish”; not met.', 'yes'),
     ('The text is broadly consistent with our position.', 'no: a judgement'),
     ('Instruction 6: not addressed by any paragraph.', 'yes'),
     ('On balance the text is acceptable.', 'no: the capital decides')],

case=dict(
 title='The Decision Room · Everything we could have conceded',
 brief=[
  'A chair circulates a nineteen-paragraph compromise text at midnight, intending to close the '
  'negotiation at four the following afternoon.',
  'The delegation holds written instructions of seven numbered points, two of which are marked '
  'essential. The text meets four of the five desirable points in full and the fifth in '
  'substance. It meets neither essential point: paragraph 11 provides shall endeavour to '
  'establish where the instruction requires shall establish, and paragraph 14 provides that a '
  'party may submit data where the instruction requires shall.',
  'The comparison first produced describes the text as broadly consistent with the delegation’s '
  'position. The instructions contain no fallback for either essential point.'],
 exhibit=figs.datatable('THE TEXT AGAINST THE INSTRUCTIONS',
                        ['Instruction', 'Marked', 'Status'],
                        [['review mechanism', 'essential', 'not met: shall endeavour to'],
                         ['data submission', 'essential', 'not met: may'],
                         ['annual reporting', 'desirable', 'met'],
                         ['publication', 'desirable', 'met'],
                         ['cost ceiling', 'desirable', 'met'],
                         ['observers', 'desirable', 'met in substance']]),
 exhibit_cap='A text that concedes everything tradeable and nothing that was not.',
 exhibit_note='The chair has drafted competently and in good faith. A midnight text is designed '
              'to close, and closing means giving each delegation what it can afford to accept.',
 voices=[('Elena Duarte', 'delegate, the Assembly',
          'Broadly consistent is a conclusion, and it is not mine to reach at one in the morning.'),
         ('Ambassador Clara Mendel', 'head of mission',
          'Five ad referendum and two referred. And we say so before consensus is declared.'),
         ('Peter Novak', 'desk officer, the capital',
          'The instruction gives no fallback on either essential point, which is our failure, not hers.')],
 steps=[('Find it', 'What does the text provide?'),
        ('Compare it', 'Against the seven instructions.'),
        ('Infer it', 'Why is the comparison a judgement?'),
        ('Weigh it', 'An hour’s table against a declared consensus.'),
        ('Decide', 'How is a chair’s text to be reported?')],
 analysis=[('Find it. What is in the text?', 'nineteen paragraphs intended to close'),
           ('Compare it. What is met?', 'five desirable points and neither essential one'),
           ('Infer it. Why the judgement?', 'the comparison weighed whole against whole'),
           ('Weigh it. What is required?', 'a point-by-point table within the hour'),
           ('Decide. How is it reported?', 'instruction by instruction, with the verbs quoted')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what form the comparison takes.',
                 'Say how the operative verb is treated.',
                 'Say what is excluded.',
                 'Say what is done about a missing fallback.'],
 bank=['A chair’s text is reported against instructions in a table of one line per numbered instruction.',
       'The operative verb of the paragraph addressing each instruction is quoted exactly.',
       'No assessment of overall acceptability is given, since that judgement belongs to the delegation and its capital.',
       'Where an essential instruction has no fallback, that absence is reported at once as a finding.'],
 outcome='The table is produced within fifty minutes and telephoned to the capital at two. A '
         'fallback is given on paragraph 11 before midday, authorising acceptance of shall '
         'endeavour to with a review clause after three years. No fallback is given on paragraph '
         '14. The delegation accepts five points ad referendum, states its position on 14 before '
         'consensus is declared, and the chair inserts shall in paragraph 14 with a two-year '
         'transition.',
 outcome_q=[('How long did the table take?', 'fifty minutes'),
            ('When was it telephoned?', 'at two in the morning'),
            ('What fallback was given?', 'acceptance of shall endeavour to with a three-year review'),
            ('What happened on paragraph 14?', 'the position was stated before consensus'),
            ('What did the chair do?', 'inserted shall with a two-year transition')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Is the chair’s text acceptable?',
 task=['A delegate asked, at midnight, whether a compromise text could be accepted.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Is the chair’s text acceptable to us?',
        'Compare it with our instructions.',
        'Give me your view.',
        'Tell me if anything is a problem.',
        'The main points.',
        'Within the hour if possible.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and “give me your view” asked for the one thing that was not available to give.',
 asked=['Compare with our instructions', 'Give me your view', 'The main points'],
 back=['1 overall assessment', '3 paragraphs cited', '0 operative verbs quoted'],
 gap='Nobody required a point-by-point table, so the comparison weighed the whole against the whole and judged.',
 back_cap='A confident assessment of broad consistency, in which two unmet essential points are invisible.',
 back_note='“Give me your view” invites a conclusion. The conclusion was reserved to the '
           'capital, and the words broadly consistent quietly took it.',
 diagnosis=[('“acceptable to us”', 'hidden assumption'),
            ('“give me your view”', 'hidden assumption'),
            ('“the main points”', 'unstated criterion'),
            ('“if anything is a problem”', 'missing condition'),
            ('“compare it with our instructions”', 'unstated criterion'),
            ('“if possible”', 'missing condition')],
 rewrite='Rewrite it on the six lines so that the judgement is left to the delegation.',
 scaffold=['what you must be able to tell your head of mission',
           'which text and instructions, and what is excluded',
           'what you are giving it',
           'the table, the quoted verbs, the ordering and the prohibition on judgement',
           'by when',
           'what happens where nothing addresses an instruction'],
 bank=['Purpose: so that I can tell the Ambassador, point by point, which of our seven instructions this text satisfies and which it does not',
       'Scope: the chair’s text of nineteen paragraphs circulated at midnight, against our instructions of 2 September; the earlier chair’s text is not covered',
       'Inputs: the chair’s text, our instructions, and the list of our tabled amendments',
       'Criteria: a table with one line for each numbered instruction, giving the paragraph that addresses it, the operative verb quoted exactly, and the status met, met in substance or not met; the two essential points first; no judgement of overall acceptability; a closing line on any instruction for which no fallback is given',
       'Done: with me within the hour',
       'Fallback: where no paragraph addresses an instruction, the line reads not addressed rather than not met'],
 check=['Is it a table, point by point?',
        'Are the operative verbs quoted?',
        'Are essential points first?',
        'Is overall judgement excluded?'],
 model=['so that I can tell the Ambassador, point by point, which of our seven instructions this text satisfies and which it does not',
        'the chair’s text of nineteen paragraphs circulated at midnight, against our instructions of 2 September; the earlier chair’s text is not covered',
        'the chair’s text, our instructions, and the list of our tabled amendments',
        'a table with one line for each numbered instruction, giving the paragraph that addresses it, the operative verb in that paragraph quoted exactly, and the status met, met in substance or not met; the two essential points first; no judgement of overall acceptability; a closing line on any instruction for which no fallback is given',
        'with me within the hour',
        'where no paragraph addresses an instruction, the line reads not addressed rather than not met'],
 cost='1 overall assessment, 0 quoted verbs, and two essential instructions reported as broad consistency.'),

lang=dict(
 title='Across the Language Line · A language with one word for shall and should',
 setting=[
  'The chair’s text is drafted in English and will be translated into six languages. In two of '
  'them the ordinary rendering of shall and of should is the same word, and the distinction is '
  'carried, if at all, by an additional phrase.',
  'A delegation working from one of those translations cannot see the difference between '
  'paragraph 11 and paragraph 12, and reports to its capital that both are obligations.'],
 ladder=[('Two English verbs', 'shall and should'),
         ('One word in translation', 'for both'),
         ('A capital', 'told that an aspiration is a duty')],
 cap='A distinction that exists in the authentic text and nowhere else in the room.',
 turns=[('Turn 1 · A delegation', 'Both paragraphs create obligations, as we read them.'),
        ('Turn 2 · Elena', 'In the English, paragraph 11 says shall endeavour to.'),
        ('Turn 3 · The delegation', 'Our text does not distinguish those words at all.')],
 holds=['May I read the English wording of paragraph 11 aloud?',
        'In English, shall endeavour to is an obligation of effort only.',
        'Does your translation distinguish that from shall?',
        'This is not a disagreement between us; it is a feature of the translations.',
        'Would it help if the secretariat were asked to review the renderings?',
        'I will report that two translations do not carry the distinction.'],
 redline='Never rely on another delegation having read the distinction you are relying on, and '
         'never suggest that a translation was altered deliberately.',
 score=['Read the English wording aloud.',
        'Explained the effect of shall endeavour to.',
        'Asked whether the translation distinguishes them.',
        'Framed it as a translation feature.',
        'Proposed a secretariat review.'],
 a=[('What distinction is at issue?', 'between shall and shall endeavour to'),
    ('What happens in two translations?', 'the same word is used for both'),
    ('What did the delegation report?', 'that both paragraphs are obligations'),
    ('What should be done first?', 'read the English wording aloud'),
    ('What should be proposed?', 'a secretariat review of the renderings'),
    ('What must not be suggested?', 'that a translation was altered deliberately')]),

rev_fig=figs.split('A MIDNIGHT TEXT',
                   'Report',
                   ['one line per instruction',
                    'the paragraph cited',
                    'the operative verb quoted',
                    'met / in substance / not met'],
                   'Decide yourself',
                   ['what to accept ad referendum',
                    'what to refer',
                    'where to break consensus',
                    'what to say, and when']),
rev_fig_cap='The left column is work. The right column is why a delegation exists.',
rev=dict(
 read=[('How many paragraphs are in the chair’s text?',
        ['nineteen', 'seven', 'eleven', 'fourteen'], 0),
       ('How many instructions are essential?',
        ['two', 'five', 'seven', 'none'], 0),
       ('What does paragraph 11 provide?',
        ['shall endeavour to establish', 'shall establish',
         'may establish', 'nothing'], 0),
       ('What must be excluded from the comparison?',
        ['any overall judgement', 'the operative verbs',
         'the paragraph numbers', 'the statuses'], 0)],
 listen_text='Require a table of one line per instruction, with the paragraph, the operative '
             'verb quoted exactly and the status; exclude overall judgements; put the essential '
             'points first and end with any instruction lacking a fallback.',
 listen=[('Require a table of one line per ____________.', 'instruction'),
         ('With the operative verb quoted ____________.', 'exactly'),
         ('Exclude overall ____________.', 'judgements'),
         ('End with any instruction lacking a ____________.', 'fallback')],
 speak=['Express six provisions with shall, shall endeavour to and may.',
        'Then refuse a text that meets your desirable points and not your essential ones.'],
 write='Write a six-line tasking for a comparison of a text against instructions.',
 vocab=[('Wording that allows two positions to coexist is a ____________ formula.', 'bridging'),
        ('Acceptance subject to confirmation is an acceptance ____________.', 'ad referendum'),
        ('A point not open to trade is a point of ____________.', 'principle'),
        ('What to do if the first instruction fails is a ____________ instruction.', 'fallback')],
 gram=[('Nothing in this decision ____________ be construed as creating an obligation.', 'shall'),
       ('The chair ____________ consult delegations informally.', 'may'),
       ('Parties ____________ not withhold data already published.', 'shall'),
       ('The depositary ____________ notify all parties of any amendment.', 'shall')]),

found=['Require a point-by-point table, never an assessment.',
       'Quote the operative verb of every paragraph that addresses an instruction.',
       'Put the essential instructions first, because they are read first.',
       'Report a missing fallback as a finding, at one in the morning rather than at four.'],
end_line='Broadly consistent is a decision, and it is not yours to take at midnight.',
end_next='Next: Who Will Vote With You, and Who Says So')
