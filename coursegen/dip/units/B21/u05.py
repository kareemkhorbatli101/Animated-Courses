# -*- coding: utf-8 -*-
import figs

U = dict(
num=5,
title='Counting Votes You Have Not Been Given',
gram='concession: while, whereas, notwithstanding',
ai='counting votes without pretending to know',
strap='CEFR B2 · Grammar: concession: while, whereas, notwithstanding · '
      'AI: counting votes without pretending to know',
cando=['concede a point in writing without giving it away',
       'use while, whereas and notwithstanding accurately',
       'distinguish a vote you have been given from a vote you have inferred',
       'say what a generated vote estimate is actually made of',
       'write a six-line tasking for a vote count'],

hero=('TWENTY-SEVEN FOR, FOURTEEN AGAINST, AND TEN DELEGATIONS WHO HAVE SAID NOTHING AT ALL',
      ['The estimate was right on the total and wrong on the two that decided it.',
       'Nobody had asked them. Asking takes four days and twenty telephone calls.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A draft resolution before the Regional Council, nine days before the vote.',

warm=['What is the difference between a vote promised and a vote expected?',
      'How would you find out how fifty-one delegations intend to vote?',
      'Why might a delegation refuse to tell you?'],

read=[
 'Nine days before a vote on a draft resolution, a delegation wants to know whether it has '
 'the numbers, which is a question with two quite different answers depending on whether you '
 'count the votes you have been given or the votes you believe you will get.',
 'Hala Darwish asks a system to estimate the outcome among fifty-one delegations, using '
 'everything that has been published: statements in plenary, votes on comparable texts, '
 'national positions set out in the press, and the list of co-sponsors.',
 'It produces a careful answer in minutes: twenty-seven for, fourteen against, ten unknown, '
 'with a line of reasoning for each delegation and an explicit note that the ten have '
 'published nothing on the subject.',
 'That last point is the system behaving well. Whereas a confident projection would have '
 'assigned all fifty-one, this one declines to guess, and the ten unknowns are exactly the '
 'delegations that nobody has telephoned.',
 'What the estimate cannot see is the condition inside two of the twenty-seven. Both have '
 'told the host delegation privately that they will abstain if the amendment on funding is '
 'carried, and that amendment is voted first.'],

dp1=('Inferred and declared positions', 'Multilateral practice commonly distinguishes '
     'between a declared voting intention, communicated by a delegation to another, and an '
     'inferred position derived from public statements or past voting behaviour, the latter '
     'being substantially less reliable in a contested vote.',
     'Source: reported multilateral practice, 2025–2026.'),

c_a=[('How many days before the vote?', 'nine'),
     ('How many delegations are there?', 'fifty-one'),
     ('What did the estimate use?', 'published statements, past votes, press and co-sponsors'),
     ('What was the estimate?', 'twenty-seven for, fourteen against, ten unknown'),
     ('Why were ten unknown?', 'they have published nothing'),
     ('What condition was invisible?', 'two will abstain if the funding amendment passes')],

c_b=[('A vote given and a vote expected are the same thing.', 'F'),
     ('The estimate assigned all fifty-one delegations.', 'F'),
     ('Declining to guess was good practice.', 'T'),
     ('The ten unknowns had been telephoned.', 'F'),
     ('Two delegations had a private condition.', 'T'),
     ('The funding amendment is voted after the resolution.', 'F')],

c_c=[('____________ the estimate was careful, it could not see private conditions.', 'While'),
     ('We have twenty-seven, ____________ they claim thirty-one.', 'whereas'),
     ('____________ the delay, the vote will be taken on Thursday.', 'Notwithstanding'),
     ('____________ we respect their position, we cannot accept the amendment.', 'While'),
     ('Their statement was supportive, ____________ their vote was not.', 'whereas'),
     ('____________ the objections raised, the text was adopted.', 'Notwithstanding')],

c_d=[('While at the start of a sentence introduces ( a time / a concession ).', ['a time', 'a concession'], 1),
     ('Whereas marks ( a contrast between two facts / a condition ).',
      ['a contrast between two facts', 'a condition'], 0),
     ('Notwithstanding is followed by ( a noun / a clause with that ).',
      ['a noun', 'a clause with that'], 0),
     ('The estimate was right about ( the total / the composition ).',
      ['the total', 'the composition'], 0),
     ('A declared vote comes from ( a delegation telling you / a published statement ).',
      ['a delegation telling you', 'a published statement'], 0)],

c_e=('Concession, contrast or despite? Put each in the right column.',
     [('While we respect their position', 'concession'),
      ('whereas they claim thirty-one', 'contrast'),
      ('Notwithstanding the delay', 'despite'),
      ('While the estimate was careful', 'concession'),
      ('whereas their vote was not', 'contrast'),
      ('Notwithstanding the objections raised', 'despite')],
     ['concession', 'contrast', 'despite']),

v_fig_title='HOW A VOTE IS WON',
v_fig=[('chart', 'a vote count'), ('people', 'a co-sponsor'), ('doc', 'a draft resolution'),
       ('key', 'a two-thirds majority'), ('clock', 'a tabling deadline'), ('speech', 'a vote explanation')],
v_fig_cap='Six words for the arithmetic that decides what a long text finally says.',

vocab=[
 ('a vote count', 'a statement of how many delegations will vote each way'),
 ('an abstention', 'a decision to vote neither for nor against'),
 ('a co-sponsor', 'a delegation that formally supports a text before the vote'),
 ('a draft resolution', 'a text put forward for adoption'),
 ('a roll-call vote', 'a vote in which each delegation is named and answers'),
 ('a show of hands', 'a vote taken by raising hands, without a record of names'),
 ('a simple majority', 'more than half of those voting'),
 ('a two-thirds majority', 'two votes in favour for every one against'),
 ('a quorum', 'the minimum attendance required for a decision to be valid'),
 ('a tabling deadline', 'the time by which a text or amendment must be submitted'),
 ('a voting instruction', 'the capital’s direction on how to vote'),
 ('a bloc position', 'a position agreed among a group of delegations'),
 ('a floor manager', 'the delegate responsible for a text during a session'),
 ('a whip', 'a delegate who collects and holds voting commitments'),
 ('a tally sheet', 'the sheet on which a delegation records expected votes'),
 ('a procedural motion', 'a proposal about how business is to be conducted'),
 ('an adoption by consensus', 'adoption without a vote being taken'),
 ('a point of order', 'an intervention about the correctness of procedure'),
 ('a sponsor’s list', 'the list of delegations formally supporting a text'),
 ('a vote explanation', 'a statement given to explain how a delegation voted')],

v_a=[('A vote in which each delegation is named is a ____________ vote.', 'roll-call'),
     ('The time by which an amendment must be submitted is the ____________ deadline.', 'tabling'),
     ('The delegate responsible for a text during a session is the floor ____________.', 'manager'),
     ('Adoption without a vote is adoption by ____________.', 'consensus'),
     ('An intervention about procedure is a point of ____________.', 'order'),
     ('The sheet on which expected votes are recorded is a ____________ sheet.', 'tally'),
     ('A decision to vote neither way is an ____________.', 'abstention'),
     ('The capital’s direction on how to vote is a voting ____________.', 'instruction')],

v_b=[('A co-sponsor is a delegation that formally supports', 'a text before the vote.'),
     ('A quorum is the minimum attendance required', 'for a decision to be valid.'),
     ('A whip is a delegate who collects', 'and holds voting commitments.'),
     ('A two-thirds majority requires two votes in favour', 'for every one against.'),
     ('A vote explanation is a statement given', 'to explain how a delegation voted.')],

g_title='Grammar: concession: while, whereas, notwithstanding',
g_rule=['While + clause concedes: it admits the other side has a point before you make yours.',
        'Whereas + clause contrasts two facts of equal standing, usually in writing.',
        'Notwithstanding + noun means despite: notwithstanding the delay, not notwithstanding that '
        'it was delayed.',
        'A conceded point is not a surrendered point: put your own position in the main clause, '
        'where the reader looks.'],
g_fig=('BLUNT',
       ['We cannot accept the amendment.',
        'We have twenty-seven. They claim thirty-one.',
        'There was a delay. The vote will be on Thursday.',
        'Their statement was supportive. Their vote was not.'],
       'CONCEDING',
       ['While we respect the concern behind the amendment, we cannot accept it.',
        'We count twenty-seven firm votes, whereas the sponsors claim thirty-one.',
        'Notwithstanding the delay, the vote will be taken on Thursday.',
        'Their statement was supportive, whereas their vote was not.'],
       'four positions with nothing conceded',
       'the same four, each conceding something and holding the point'),
g_fig_cap='Concede in the subordinate clause. Keep your position in the main one.',

g_a=[('____________ the estimate was careful, it could not see private conditions.', 'While'),
     ('We count twenty-seven, ____________ the sponsors claim thirty-one.', 'whereas'),
     ('____________ the delay, the vote will be taken on Thursday.', 'Notwithstanding'),
     ('____________ we respect their concern, we cannot accept the amendment.', 'While'),
     ('Their statement was supportive, ____________ their vote was not.', 'whereas'),
     ('____________ the objections raised, the text was adopted.', 'Notwithstanding'),
     ('____________ the hour is late, the delegation will speak.', 'While'),
     ('Two delegations are firm, ____________ ten have said nothing.', 'whereas'),
     ('____________ our reservation, we shall not oppose consensus.', 'Notwithstanding')],

g_b=[('( While we respect the concern / Although we respect the concern ) — either works; choose the formal one for a written position.', ['While we respect the concern', 'Although we respect the concern'], 0),
     ('We count twenty-seven, ( whereas / while ) the sponsors claim thirty-one — written contrast.',
      ['whereas', 'while'], 0),
     ('( Notwithstanding the delay / Notwithstanding it was delayed ) — correct form.',
      ['Notwithstanding the delay', 'Notwithstanding it was delayed'], 0),
     ('( While we cannot accept it, we respect the concern / While we respect the concern, we cannot accept it ) — hold your position.',
      ['While we respect the concern, we cannot accept it',
       'While we cannot accept it, we respect the concern'], 0),
     ('Ten have said nothing, ( whereas / notwithstanding ) two are firm.',
      ['whereas', 'notwithstanding'], 0),
     ('( Notwithstanding our reservation / While our reservation ) , we shall not oppose consensus.',
      ['Notwithstanding our reservation', 'While our reservation'], 0)],

d1=dict(
 title='Twenty-seven, or twenty-five',
 fig=(['Twenty-seven for, it says.', 'And how many of those told you so?'],
      ['Nine told us. Eighteen we inferred.', 'Then we have nine.']),
 cap='Hala Darwish and Ambassador Walid Hourani, nine days before the vote.',
 lines=[('Hourani', 'What is the count?'),
        ('Hala', 'Twenty-seven for, fourteen against, ten who have published nothing at all.'),
        ('Hourani', 'And of the twenty-seven, how many have told us directly?'),
        ('Hala', 'Nine. The other eighteen are inferred from statements and past votes.'),
        ('Hourani', 'So we have nine votes and eighteen expectations. Those are different objects.'),
        ('Hala', 'The reasoning on each of the eighteen is sound, though.'),
        ('Hourani', 'It will be sound and wrong on at least two of them, which is the margin.'),
        ('Hala', 'Then the ten unknowns are where the work is.'),
        ('Hourani', 'The ten unknowns and the eighteen inferred. Twenty-eight telephone calls.'),
        ('Hala', 'In nine days, with two of us.'),
        ('Hourani', 'Start with the eighteen that the resolution would cost something, and ask them plainly.'),
        ('Hala', 'And record who said what, in their words, with the date.')],
 a=[('What was the published count?', 'twenty-seven for, fourteen against, ten unknown'),
    ('How many had told them directly?', 'nine'),
    ('What are the other eighteen?', 'expectations, not votes'),
    ('How many calls are needed?', 'twenty-eight'),
    ('What must be recorded?', 'who said what, in their words, with the date')],
 b=[('Those are different ____________.', 'objects'),
    ('It will be sound and ____________ on at least two.', 'wrong'),
    ('Ask them ____________.', 'plainly'),
    ('The ten ____________ are where the work is.', 'unknowns')]),

d2=dict(
 title='The condition nobody published',
 fig=(['Two of the twenty-seven have a condition.', 'Which two?'],
      ['They will abstain if funding carries.', 'And funding is voted first.']),
 cap='Hala and Hala’s counterpart contact, Dalia Khoury, at the desk in the capital.',
 lines=[('Dalia', 'I have something from a third delegation, informally.'),
        ('Hala', 'Go on.'),
        ('Dalia', 'Two of your twenty-seven have said privately that they will abstain if the funding amendment carries.'),
        ('Hala', 'Which is voted before the resolution itself.'),
        ('Dalia', 'So your twenty-seven is twenty-five in the case that matters most.'),
        ('Hala', 'And there is nothing published anywhere that would have told me that.'),
        ('Dalia', 'Nothing. It was said in a corridor to somebody who told somebody.'),
        ('Hala', 'Then I should be working on the funding amendment, not the resolution.'),
        ('Dalia', 'That is the conclusion, yes. Can you get the amendment withdrawn?'),
        ('Hala', 'Possibly, if I can offer the sponsors something on the review period.'),
        ('Dalia', 'Which you are not instructed to offer.'),
        ('Hala', 'No. So I ask for the instruction tonight and hope it comes before the tabling deadline.')],
 unresolved=True,
 a=[('What did Dalia learn?', 'two delegations will abstain if funding carries'),
    ('When is the funding amendment voted?', 'before the resolution'),
    ('What does that make the count?', 'twenty-five in the case that matters'),
    ('Where did the information come from?', 'a corridor conversation, passed on'),
    ('What does Hala need?', 'an instruction before the tabling deadline')],
 b=[('Said in a ____________ to somebody who told somebody.', 'corridor'),
    ('I should be working on the funding ____________.', 'amendment'),
    ('Offer the sponsors something on the review ____________.', 'period'),
    ('Hope it comes before the tabling ____________.', 'deadline')]),

speak=[('Concede and hold',
        ['Make nine written positions using while, whereas and notwithstanding.',
         'Your partner says what you conceded and what you kept.',
         'Rewrite any in which the concession swallowed the position.']),
       ('Given or inferred?',
        ['List eight supporters of a position you hold.',
         'Say for each whether they told you or you assume it.',
         'Your partner asks how you know, once per name.']),
       ('Twenty-eight calls in nine days',
        ['You have nine days and twenty-eight delegations to ask.',
         'Decide the order and say why each is where it is.',
         'Agree what you will ask them, in one sentence.'])],

ext_title='An estimate built from published positions is honest about what it does not know, and it still cannot hear a corridor',
ext_fig=figs.datatable('FIFTY-ONE DELEGATIONS, THREE KINDS OF KNOWLEDGE',
                       ['Category', 'Number', 'Basis'],
                       [['told us directly', '9', 'a delegate said so to us'],
                        ['inferred as for', '18', 'statements and past votes'],
                        ['inferred as against', '14', 'statements and past votes'],
                        ['published nothing', '10', 'no basis at all'],
                        ['conditional, unpublished', '2', 'a corridor, reported at third hand'],
                        ['total', '51', '—']]),
ext_fig_cap='Nine votes, thirty-two expectations and ten blanks, presented in one table of fifty-one.',
ext=[
 'A vote estimate is the clearest case in this book of a system doing a useful thing well '
 'and labelling its own limits honestly: fifty-one delegations assessed against every '
 'published statement and comparable vote, with the reasoning shown and the ten unknowns '
 'marked as unknown rather than filled in.',
 'That last behaviour is worth noticing, because the temptation it resists is exactly the one '
 'a delegate under pressure feels: to produce a full table of fifty-one, because a full table '
 'looks like knowledge and a table with blanks looks like failure.',
 'While the estimate is sound in its method, it is built from one kind of material only. '
 'Everything in it is public, and a voting intention is not public: it is communicated '
 'privately, conditionally, late, and frequently with an if attached that nobody writes down.',
 'The two delegations that would abstain if the funding amendment carried had said so in a '
 'corridor, to a third delegation, which mentioned it to a desk officer in another capital. '
 'No corpus contains that sentence, and no reasoning could have recovered it.',
 'So keep two columns on your tally sheet, and never let them merge: what we have been told, '
 'with the name and date of who told us, and what we expect, with the reason. The first column '
 'is a count. The second is a hypothesis.'],

dp2=('The conditional vote', 'Negotiating accounts commonly observe that voting commitments '
     'in contested multilateral proceedings are frequently conditional on the fate of prior '
     'amendments, and that such conditions are usually communicated orally rather than in '
     'writing.',
     'Source: reported multilateral practice, 2025–2026.'),

e_a=[('What did the estimate do well?', 'marked the unknowns as unknown'),
     ('What temptation does that resist?', 'filling the table to look complete'),
     ('What is the estimate built from?', 'published material only'),
     ('Why is a voting intention not public?', 'it is communicated privately and conditionally'),
     ('What two columns belong on a tally sheet?', 'what we were told and what we expect')],
e_b=[('A full table always means more knowledge.', 'F'),
     ('Blanks in an estimate can be a sign of good method.', 'T'),
     ('Voting intentions are usually published.', 'F'),
     ('Conditions on votes are often oral.', 'T'),
     ('A hypothesis and a count are the same thing.', 'F'),
     ('The name and date of a commitment should be recorded.', 'T')],

w_model='Purpose: so that the delegation knows how many votes it has been given, and from '
        'whom, before the tabling deadline. Scope: the draft resolution on transit; the '
        'funding amendment is counted separately because it is voted first. Inputs: all '
        'published statements and comparable votes of the 51 delegations, and our own record '
        'of what has been said to us. Criteria: two columns, told and inferred; each told '
        'entry carries the delegate’s name and the date; unknowns are left blank. Done: the '
        'two-column sheet with the floor manager by 10:00 each morning until the vote. '
        'Fallback: where a commitment is conditional, the condition is recorded in the '
        'delegate’s own words.',
w_fig=figs.spec_card('SIX LINES FOR A VOTE COUNT',
                     [('Purpose', 'know what we have been given, and by whom'),
                      ('Scope', 'the resolution; the amendment counted separately'),
                      ('Inputs', 'published material and our own record'),
                      ('Criteria', 'two columns; names and dates; blanks left blank'),
                      ('Done', 'with the floor manager by 10:00 daily'),
                      ('Fallback', 'conditions recorded in the delegate’s own words')]),
w_fig_cap='Line 4 is the whole discipline: two columns that are never allowed to merge.',
w_task='Write a six-line tasking for a vote count.',
w_steps=['Line 1: what the count is for, and by when.',
         'Line 2: which text, and what is counted separately.',
         'Line 3: the published inputs and your own record.',
         'Line 4: the two columns, and what each entry must carry.',
         'Line 5: who receives the sheet and how often.',
         'Line 6: how a conditional commitment is recorded.'],
w_bank=['Purpose: so that … knows how many votes … before … ',
        'Scope: the … ; the … is counted separately because … ',
        'Inputs: all published statements of the … delegations, and our own record of … ',
        'Criteria: two columns, told and inferred; each told entry carries … ; unknowns … ',
        'Done: … with … by … . Fallback: where a commitment is conditional, … '],
w_check=['Does line 4 keep told and inferred apart?',
         'Must each told entry carry a name and date?',
         'Are unknowns left blank rather than estimated?',
         'Does line 6 preserve the delegate’s own words?'],

t_title='Counting votes without pretending to know',
t_fig=figs.split('FIFTY-ONE DELEGATIONS',
                 'The estimate can use',
                 ['statements made in plenary',
                  'votes on comparable texts',
                  'published national positions',
                  'the list of co-sponsors'],
                 'Only a conversation gives',
                 ['a commitment made to you',
                  'the condition attached to it',
                  'the instruction not yet arrived',
                  'the delegation that will not say']),
t_fig_cap='Everything on the left is public. Everything that decides a close vote is not.',
t_body=[
 'Ask for an assessment of every delegation against the published record, and ask explicitly '
 'for the delegations with no published position to be left blank rather than inferred, '
 'because a blank is information and a guess dressed as a count is not.',
 'Ask for the reasoning on each inferred position in one line, so that you can see which '
 'inferences rest on a statement about this text and which rest on a vote taken four years '
 'ago on a different one. Those are not equally strong, and the table will not say so unless '
 'you ask.',
 'Then keep your own two-column sheet, and work the telephones in the order the estimate '
 'suggests: the blanks first, then the inferences that would cost the delegation something. '
 'Counting votes is in the end the work of the telephone: while the estimate tells you where '
 'to spend nine days, only the calls give you a number you can report to a capital, and only a '
 'call tells you what condition somebody has quietly attached to his vote.'],
t_say=[('Ask for the assessment: ', 'Assess all 51 against the published record; leave the silent ones blank.'),
       ('Ask for the reasoning: ', 'One line on each inference, naming what it rests on.'),
       ('Ask yourself: ', 'Which of these votes has somebody actually given me?')],
t_bound='An estimate is built from public material. It cannot contain a commitment made to '
        'you privately, a condition attached in a corridor, a delegation still waiting for '
        'its instruction, or a vote that will change because of what is voted first.',
t_a=[('Assess all fifty-one against the published ____________.', 'record'),
     ('Leave the silent ones ____________.', 'blank'),
     ('One line on each ____________.', 'inference'),
     ('Which of these votes has somebody actually ____________ me?', 'given'),
     ('A condition attached in a ____________.', 'corridor'),
     ('A delegation still waiting for its ____________.', 'instruction')],
t_b_rubric='Say whether each could appear in a published-record estimate.',
t_b=[('A statement in plenary last week.', 'yes: it is published'),
     ('A promise made to you at a reception.', 'no: only your record has it'),
     ('A vote on a comparable text in 2022.', 'yes, with its reasoning shown'),
     ('An abstention conditional on a prior amendment.', 'no: that is said, not written')],

case=dict(
 title='The Decision Room · Twenty-seven on paper, nine in hand',
 brief=[
  'Nine days before a vote among fifty-one delegations, an estimate built from published '
  'statements and comparable votes returns twenty-seven for, fourteen against and ten with no '
  'published position, which it marks as unknown rather than filling in.',
  'Of the twenty-seven, nine have told the delegation directly how they will vote. The other '
  'eighteen are inferences, each with a line of reasoning, some resting on a statement about '
  'this very text and some on a vote taken four years ago on a different one.',
  'A desk officer in the capital then hears, at third hand, that two of the twenty-seven will '
  'abstain if the funding amendment carries, and the funding amendment is voted first. Nothing '
  'published anywhere contains that condition.'],
 exhibit=figs.datatable('THE SAME TWENTY-SEVEN, COUNTED TWICE',
                        ['Basis', 'Count', 'What it is'],
                        [['told us, unconditional', '9', 'a vote'],
                         ['told us, conditional', '0', 'none recorded'],
                         ['inferred from this text', '7', 'a strong hypothesis'],
                         ['inferred from older votes', '11', 'a weak hypothesis'],
                         ['will abstain if funding carries', '2', 'learned at third hand'],
                         ['published nothing', '10', 'unknown']]),
 exhibit_cap='One figure of twenty-seven, made of four different kinds of thing.',
 exhibit_note='The estimate is honest about the ten it cannot see. It is silent about the '
              'difference between a vote given and a vote inferred, because its inputs do '
              'not include what anybody said to us.',
 voices=[('Hala Darwish', 'delegate to the Regional Council',
          'It assessed fifty-one delegations in minutes and refused to invent the ten it could not see.'),
         ('Ambassador Walid Hourani', 'head of mission',
          'And presented nine votes and eighteen hypotheses as a single number, which is where a vote is lost.'),
         ('Dalia Khoury', 'desk officer, the capital',
          'The two that decide it were a corridor remark passed through three people and a telephone.')],
 steps=[('Find it', 'What did the estimate return?'),
        ('Compare it', 'Votes given against votes inferred.'),
        ('Infer it', 'Why is the condition invisible?'),
        ('Weigh it', 'Minutes of assessment against twenty-eight telephone calls.'),
        ('Decide', 'How does the delegation keep its count?')],
 analysis=[('Find it. What came back?', 'twenty-seven, fourteen, ten unknown'),
           ('Compare it. Given against inferred?', 'nine given, eighteen inferred'),
           ('Infer it. Why invisible?', 'the condition was oral and unpublished'),
           ('Weigh it. What does each method buy?', 'the estimate directs the calls; the calls give the number'),
           ('Decide. How is the count kept?', 'two columns, never merged, with names and dates')],
 decision='Decide the method, in four lines.',
 decision_steps=['Say what the estimate is used for.',
                 'Say how told and inferred votes are kept apart.',
                 'Say what every told entry must carry.',
                 'Say what is done with a conditional commitment.'],
 bank=['A published-record estimate is used to decide whom to telephone, not to report a number.',
       'The tally sheet has two columns, told and inferred, and they are never added together.',
       'Every told entry carries the delegate’s name, the date and whether it was conditional.',
       'A conditional commitment is recorded in the delegate’s own words and reported to the capital at once.'],
 outcome='The delegation makes twenty-two of its twenty-eight calls in six days. Four of the '
         'eighteen inferences turn out to be wrong, two in each direction, and three of the ten '
         'blanks declare for the text. The funding amendment is withdrawn after the sponsors are '
         'offered a longer review period, and the resolution carries by a margin of six, which is '
         'larger than the estimate and smaller than the sponsors claimed.',
 outcome_q=[('How many calls were made?', 'twenty-two of twenty-eight'),
            ('How many inferences were wrong?', 'four'),
            ('How many blanks declared for the text?', 'three'),
            ('What happened to the funding amendment?', 'it was withdrawn'),
            ('By what margin did the resolution carry?', 'six')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Tell me if we have the votes',
 task=['A delegate asked for a vote count nine days before a contested vote.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Tell me if we have the votes.',
        'There are fifty-one delegations.',
        'Use whatever you can find.',
        'Give me a number I can report.',
        'Assume the usual groups vote together.',
        'Do not leave gaps.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, two of which require the answer to be more confident than the evidence.',
 asked=['Whether we have the votes', 'A reportable number', 'No gaps'],
 back=['51 delegations assigned', '0 marked unknown', '1 number, reported to the capital'],
 gap='Nobody said that ten delegations had published nothing, or that nine of the twenty-seven were promises and eighteen were guesses.',
 back_cap='A complete table of fifty-one, of which ten entries were invented to fill it.',
 back_note='Do not leave gaps and give me a number I can report together instruct a system '
           'to convert ten blanks into positions, and the capital then receives a count that '
           'contains ten fabrications presented in the same typeface as nine firm promises.',
 diagnosis=[('“do not leave gaps”', 'hidden assumption'),
            ('“the usual groups vote together”', 'hidden assumption'),
            ('“a number I can report”', 'unstated exception'),
            ('“whatever you can find”', 'unstated exception'),
            ('“if we have the votes”', 'unbounded quantity'),
            ('“tell me”', 'unbounded quantity')],
 rewrite='Rewrite it on the six lines so that what is known stays separate from what is expected.',
 scaffold=['why the count is wanted and by when',
           'which text, and what is counted separately',
           'which inputs, including your own record of conversations',
           'the two columns, what each entry carries, and what happens to blanks',
           'who receives it and how often',
           'how a conditional commitment is recorded'],
 bank=['Purpose: so that the delegation knows how many votes it has been given before … ',
       'Scope: the resolution on … ; the … amendment is counted separately',
       'Inputs: all published statements and comparable votes, and our own record of what was said to us',
       'Criteria: two columns, told and inferred; names and dates on told; blanks left blank',
       'Done: the sheet with the floor manager by … each morning until the vote',
       'Fallback: a conditional commitment is recorded in the delegate’s own words'],
 check=['Does it forbid filling the blanks?',
        'Are told and inferred votes kept in separate columns?',
        'Must each told entry carry a name and a date?',
        'Is the prior amendment counted separately?'],
 model=['so that the delegation knows how many votes it has been given before the tabling deadline',
        'the resolution on transit; the funding amendment is counted separately because it is voted first',
        'all published statements and comparable votes of the 51 delegations, and our own record of conversations',
        'two columns, told and inferred; each told entry carries the delegate’s name and the date; unknowns left blank',
        'the two-column sheet with the floor manager by 10:00 each morning until the vote',
        'a conditional commitment is recorded in the delegate’s own words and reported at once'],
 cost='10 blanks were filled to avoid gaps. 2 of the resulting 51 entries were the two that '
      'decided the vote, and both were wrong.'),

feet=dict(
 title='On Your Feet · The floor manager asks for your number in front of the room',
 setting=[
  'Twenty minutes before the session, the floor manager of the draft resolution — not your '
  'delegation, but the one carrying the text — asks you across a table of six delegates how '
  'many votes you have secured for the resolution.',
  'You have nine firm commitments and eighteen inferences. The honest number is nine. The '
  'number that keeps your delegation looking useful is twenty-seven, and everybody at the '
  'table will repeat whatever you say within the hour.'],
 ladder=[('How many have you got?', 'the number you must not inflate'),
         ('Twenty-seven is what we hear', 'the figure already in circulation'),
         ('So we can count on your bloc', 'the commitment you cannot make for others')],
 cap='Three turns at a table of six, twenty minutes before the session.',
 turns=[('Turn 1 · Floor manager', 'How many votes have you secured for the text?'),
        ('Turn 2 · Floor manager', 'We hear twenty-seven. Is that your figure too?'),
        ('Turn 3 · Floor manager', 'Good, so we can count on the whole of your group.')],
 holds=['I will give you a figure, and I will tell you what kind of figure it is.',
        'Nine delegations have told us directly that they will vote for the text.',
        'We expect more, but an expectation is not a vote and I will not report it as one.',
        'I have seen the figure of twenty-seven, and I am not able to stand behind it.',
        'I cannot speak for any delegation other than my own, and I would not want to be quoted doing so.',
        'What I can tell you is which six delegations I am telephoning this afternoon, and why.'],
 redline='You must not inflate the number, you must not let the figure of twenty-seven pass '
         'unchallenged once it has been attributed to you, and you must not speak for any '
         'delegation that has not authorised you to. Nothing said at a table of six stays at '
         'that table.',
 score=['Distinguished the firm number from the expectation, explicitly.',
        'Gave the firm number without hedging it.',
        'Declined to endorse the figure in circulation.',
        'Refused to speak for other delegations.',
        'Offered something genuinely useful instead.'],
 a=[('What figure do you give?', 'nine, the delegations who have told you directly'),
    ('What do you say about expectations?', 'that an expectation is not a vote'),
    ('What do you do with the figure of twenty-seven?', 'decline to stand behind it'),
    ('What can you not do?', 'speak for other delegations'),
    ('What do you offer instead?', 'which delegations you are telephoning, and why'),
    ('Why does the audience matter?', 'anything said there will be repeated within the hour')]),

rev_fig=figs.split('A VOTE COUNT',
                   'Told us',
                   ['9 delegations',
                    'each with a name and a date',
                    'each marked conditional or not',
                    'a number you can report'],
                   'Inferred',
                   ['18 delegations',
                    'each with a line of reasoning',
                    '7 strong, 11 weak',
                    'a hypothesis you must test']),
rev_fig_cap='Two columns on one sheet, added together by nobody.',
rev=dict(
 read=[('How many delegations were there?',
        ['fifty-one', 'twenty-seven', 'fourteen', 'ten'], 0),
       ('How many had published nothing?',
        ['ten', 'two', 'nine', 'eighteen'], 0),
       ('How many had told the delegation directly?',
        ['nine', 'twenty-seven', 'eighteen', 'fourteen'], 0),
       ('What condition was unpublished?',
        ['two would abstain if funding carried', 'three would vote against',
         'the vote would be postponed', 'the text would be withdrawn'], 0)],
 listen_text='Ask for an assessment of every delegation against the published record, and '
             'ask for the silent ones to be left blank. Then keep two columns of your own: '
             'what we were told, with names and dates, and what we expect, with reasons.',
 listen=[('Assess every delegation against the published ____________.', 'record'),
         ('Ask for the silent ones to be left ____________.', 'blank'),
         ('What we were told, with names and ____________.', 'dates'),
         ('And what we expect, with ____________.', 'reasons')],
 speak=['Make nine written positions using while, whereas and notwithstanding.',
        'Then list eight supporters and say for each whether you were told or you assume.'],
 write='Write a six-line tasking for a vote count.',
 vocab=[('A vote in which each delegation is named is a ____________ vote.', 'roll-call'),
        ('Adoption without a vote is adoption by ____________.', 'consensus'),
        ('An intervention about procedure is a point of ____________.', 'order'),
        ('The capital’s direction on how to vote is a voting ____________.', 'instruction')],
 gram=[('____________ we respect their concern, we cannot accept the amendment.', 'While'),
       ('We count twenty-seven, ____________ the sponsors claim thirty-one.', 'whereas'),
       ('____________ the late hour, the vote proceeded.', 'Notwithstanding'),
       ('Two are firm, ____________ ten have said nothing.', 'whereas')]),

found=['Keep two columns on every tally sheet, and never add them together.',
       'Record the name and date of every commitment made to you.',
       'Ask for blanks to be left blank, and treat a blank as information.',
       'Concede in the subordinate clause and keep your position in the main one.'],
end_line='Nine votes you were given beat twenty-seven you worked out.',
end_next='Next: Delivering a Demarche')
