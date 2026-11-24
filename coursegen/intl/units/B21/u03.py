# -*- coding: utf-8 -*-
import figs

U = dict(
num=3,
title='What the Other Delegation Actually Said',
gram='concession: although, even if, while and whilst',
ai='another delegation’s statement, understood exactly',
strap='CEFR B2 · Grammar: concession — although, even if, while and whilst · '
      'AI: another delegation’s statement, understood exactly',
cando=['concede a point precisely with although, even if and while',
       'read another delegation’s statement for what it commits them to',
       'tell a qualification from a refusal',
       'report a statement without strengthening or weakening it',
       'write a six-line tasking for a statement analysis'],

hero=('“WE CAN SUPPORT THE TEXT, ALTHOUGH NOT IN ITS PRESENT FORM”',
      ['Reported in our note as support.',
       'Reported in theirs as a reservation.'],
      [(640, 'blue', 'short'), (980, 'grey', 'long')]),
hero_cap='Eleven minutes of intervention, reduced to one word in two capitals.',

warm=['How do you say no at a meeting without saying no?',
      'Which words signal movement, and which signal none?',
      'How do you record what somebody else said?'],

read=[
 'The delegation of Corvadia speaks for eleven minutes. The summary that reaches the capital '
 'says, accurately, that Corvadia supports the draft text.',
 'What was said was that Corvadia can support the text, although not in its present form; that '
 'while it shares the objective, it has difficulty with the third paragraph; and that even if '
 'the paragraph were redrafted, instructions would be required.',
 'Three qualifications, each of which was clearly expressed and none of which survived the '
 'word support.',
 'The value of such a statement lies almost entirely in its concessive structure. Although the '
 'main clause states a position, it is the subordinate clauses that say how far the position '
 'can move and what would have to happen first.',
 'A report that records the position and discards the conditions tells its reader the one thing '
 'that is least useful: what another delegation said, rather than what it can be brought to '
 'accept.'],

dp1=('Reporting statements', 'Reporting practice in multilateral work commonly requires that '
     'qualifications, conditions and reservations expressed in an intervention be reproduced, '
     'since the negotiating value of a statement resides principally in them.',
     'Source: general conference practice literature, 2025–2026.'),

c_a=[('How long did the delegation speak?', 'eleven minutes'),
     ('What did the summary say?', 'that Corvadia supports the draft text'),
     ('How many qualifications were expressed?', 'three'),
     ('What is the difficulty with?', 'the third paragraph'),
     ('What would be needed even after redrafting?', 'instructions'),
     ('Where does the value of the statement lie?', 'in its concessive structure')],

c_b=[('The summary was inaccurate.', 'F'),
     ('Corvadia supports the text as it stands.', 'F'),
     ('The qualifications were unclear.', 'F'),
     ('Subordinate clauses carried the movement.', 'T'),
     ('A position matters more than its conditions.', 'F'),
     ('Corvadia shares the objective.', 'T')],

c_c=[('____________ it shares the objective, it has difficulty with paragraph three.', 'While'),
     ('We can support the text, ____________ not in its present form.', 'although'),
     ('____________ if the paragraph were redrafted, instructions would be needed.', 'Even'),
     ('____________ we understand the concern, we cannot accept the wording.', 'Whilst'),
     ('____________ the proposal is modest, it has financial implications.', 'Although'),
     ('____________ if the chair agrees, the committee may not.', 'Even')],

c_d=[('Although concedes ( a condition / a fact that stands against your point ).', ['a condition', 'a fact that stands against your point'], 1),
     ('Even if concedes ( a hypothetical / an established fact ).',
      ['a hypothetical', 'an established fact'], 0),
     ('While may mean ( at the same time or although / only although ).',
      ['at the same time or although', 'only although'], 0),
     ('Whilst is ( a more formal variant of while / a different word ).',
      ['a more formal variant of while', 'a different word'], 0),
     ('The useful part of a statement is ( the conditions / the position ).',
      ['the conditions', 'the position'], 0)],

c_e=('Movement or no movement? Put each formulation in the right column.',
     [('we can support the text as it stands', 'movement'),
      ('our position is well known', 'no movement'),
      ('we would be ready to consider a redraft', 'movement'),
      ('we must maintain our reservation', 'no movement'),
      ('subject to instructions, we could accept', 'movement'),
      ('this is a matter of principle for us', 'no movement')],
     ['movement', 'no movement']),

v_fig_title='A STATEMENT IN SIX WORDS',
v_fig=[('speech', 'a statement of position'), ('key', 'a reservation of position'), ('chart', 'a qualification of support'),
       ('clock', 'a holding position'), ('people', 'an alignment with a group'), ('doc', 'a formula of words')],
v_fig_cap='Six words for the eleven minutes you will report in four lines.',

vocab=[
 ('a statement of position', 'a formal expression of what a party holds'),
 ('a national statement', 'a statement made in a country’s own name'),
 ('a reservation of position', 'a refusal to be bound for now'),
 ('a qualification of support', 'support with conditions attached'),
 ('an expression of flexibility', 'a signal that movement is possible'),
 ('a red line declared', 'a limit openly stated'),
 ('a formula of words', 'wording devised to allow agreement'),
 ('a conditional acceptance', 'acceptance if something else happens'),
 ('an abstention explained', 'not voting, with reasons given'),
 ('an alignment with a group', 'speaking with a group of others'),
 ('a statement on behalf of others', 'speaking for several delegations'),
 ('an understanding placed on record', 'a meaning recorded for the future'),
 ('a silence on a point', 'saying nothing about something'),
 ('an emphasis in delivery', 'stress given in the speaking'),
 ('a repetition for effect', 'saying something twice deliberately'),
 ('a phrase of art', 'wording with an established meaning'),
 ('a signal of movement', 'an indication that a position may change'),
 ('a holding position', 'a position taken to gain time'),
 ('a tabled proposal', 'a proposal formally put forward'),
 ('a withdrawal of a proposal', 'taking a proposal back')],

v_a=[('A refusal to be bound for now is a ____________ of position.', 'reservation'),
     ('Wording devised to allow agreement is a ____________ of words.', 'formula'),
     ('Acceptance if something else happens is a ____________ acceptance.', 'conditional'),
     ('A meaning recorded for the future is an understanding placed on ____________.', 'record'),
     ('Wording with an established meaning is a ____________ of art.', 'phrase'),
     ('A position taken to gain time is a ____________ position.', 'holding'),
     ('A proposal formally put forward is a ____________ proposal.', 'tabled'),
     ('A limit openly stated is a ____________ declared.', 'red line')],

v_b=[('A qualification of support is support', 'with conditions attached.'),
     ('An abstention explained is not voting,', 'with reasons given.'),
     ('An alignment with a group is speaking', 'with a group of others.'),
     ('A silence on a point is saying nothing', 'about something.'),
     ('A signal of movement is an indication', 'that a position may change.')],

g_title='Grammar: concession — although, even if, while and whilst',
g_rule=['Although concedes something true that works against your main point: although the '
        'proposal is modest, it has financial implications.',
        'Even if concedes a hypothetical, and does not accept it: even if the paragraph were '
        'redrafted, instructions would be required.',
        'While and whilst may mean at the same time or although; in formal written English they '
        'commonly concede: while it shares the objective, it has difficulty with the paragraph.',
        'The concession carries the negotiating information. In a reported statement the '
        'subordinate clause is to be reproduced, not compressed, because it states the '
        'conditions of movement.'],
g_fig=('LOOSE',
       ['They support the text.',
        'They share the objective but have a problem.',
        'If the paragraph changes they will agree.',
        'The proposal is modest so it is cheap.'],
       'PRECISE',
       ['They can support the text, although not in its present form.',
        'While they share the objective, they have difficulty with paragraph three.',
        'Even if the paragraph were redrafted, instructions would be required.',
        'Although the proposal is modest, it has financial implications.'],

       'four flattened reports of a qualified statement',
       'the same four with the concessions intact'),
g_fig_cap='The main clause gives the position. The concession gives the price of movement.',

g_a=[('____________ it shares the objective, it has difficulty with paragraph three.', 'While'),
     ('We can support the text, ____________ not in its present form.', 'although'),
     ('____________ if the paragraph were redrafted, instructions would be needed.', 'Even'),
     ('____________ we understand the concern, we cannot accept the wording.', 'Whilst'),
     ('____________ the proposal is modest, it has financial implications.', 'Although'),
     ('____________ if the chair agrees, the committee may not.', 'Even'),
     ('____________ noting the explanation, we maintain our reservation.', 'While'),
     ('____________ the deadline has passed, the text may still be amended.', 'Although'),
     ('____________ if we abstain, the decision will be adopted.', 'Even')],

g_b=[('( They can support the text, although not in its present form / They support the text ) — faithful report.', ['They can support the text, although not in its present form', 'They support the text'], 0),
     ('( Even if the paragraph were redrafted, instructions would be required / If the paragraph changes they will agree ) — faithful.',
      ['Even if the paragraph were redrafted, instructions would be required',
       'If the paragraph changes they will agree'], 0),
     ('( While they share the objective, they have difficulty with paragraph three / They share the objective but have a problem ) — precise.',
      ['While they share the objective, they have difficulty with paragraph three',
       'They share the objective but have a problem'], 0),
     ('( Although the proposal is modest, it has financial implications / The proposal is modest so it is cheap ) — concession.',
      ['Although the proposal is modest, it has financial implications',
       'The proposal is modest so it is cheap'], 0),
     ('( Whilst we understand the concern, we cannot accept the wording / We understand but no ) — register.',
      ['Whilst we understand the concern, we cannot accept the wording',
       'We understand but no'], 0),
     ('( Even if we abstain, the decision will be adopted / If we abstain the decision is adopted anyway, even ) — form.',
      ['Even if we abstain, the decision will be adopted',
       'If we abstain the decision is adopted anyway, even'], 0)],

d1=dict(
 title='One word in two capitals',
 fig=(['Corvadia supports the text.', 'Corvadia supports it although not in this form.'],
      ['Is that the same?', 'It is the opposite of the same.']),
 cap='Elena Duarte and Peter Novak, the morning after the intervention.',
 lines=[('Peter', 'Your note says Corvadia supports the draft. Their own readout says they reserved.'),
        ('Elena', 'Both are drawn from the same eleven minutes.'),
        ('Peter', 'Then what did they say?'),
        ('Elena', 'That they can support the text, although not in its present form; that while they share the objective, paragraph three is difficult; and that even if it were redrafted, they would need instructions.'),
        ('Peter', 'That is not support. That is a map of what they would need.'),
        ('Elena', 'It is better than support. It tells us exactly what to redraft and what to expect afterwards.'),
        ('Peter', 'And our note reduced it to one word.'),
        ('Elena', 'Because the summary kept the main clause and dropped three subordinate ones.'),
        ('Peter', 'Which is what a summary is for, in ordinary prose.'),
        ('Elena', 'And exactly wrong here. In an intervention the subordinate clause is the content.'),
        ('Peter', 'Then send me the qualifications verbatim and summarise nothing that begins with although.'),
        ('Elena', 'Or with while, even if, subject to, or at this stage.')],
 a=[('What did our note say?', 'that Corvadia supports the draft'),
    ('What did their readout say?', 'that they reserved'),
    ('How many qualifications were there?', 'three'),
    ('Why is the statement better than support?', 'it says what to redraft and what follows'),
    ('What must not be summarised?', 'anything beginning with although, while, even if, subject to')],
 b=[('A ____________ of what they would need.', 'map'),
    ('The summary kept the ____________ clause.', 'main'),
    ('In an intervention the subordinate clause is the ____________.', 'content'),
    ('Summarise nothing that begins with ____________.', 'although')]),

d2=dict(
 title='Neither stronger nor weaker',
 fig=(['Shall I write “firmly opposed”?', 'Did they say firmly?'],
      ['They sounded firm.', 'Then write what they said.']),
 cap='Elena and Farida Haddad, drafting the report of the session.',
 lines=[('Farida', 'Ilmaria was clearly very unhappy. May I write firmly opposed?'),
        ('Elena', 'What were their words?'),
        ('Farida', 'That they are not in a position to join a consensus at this stage.'),
        ('Elena', 'Then that is what we write. Not in a position, at this stage.'),
        ('Farida', 'It sounds weaker than they sounded.'),
        ('Elena', 'It is weaker than they sounded, and stronger than firmly opposed in one respect.'),
        ('Farida', 'Which respect?'),
        ('Elena', 'At this stage is an invitation. Firmly opposed closes a door they deliberately left open.'),
        ('Farida', 'So we would be reporting a refusal they did not make.'),
        ('Elena', 'And in three weeks somebody in the capital would decide not to approach them.'),
        ('Farida', 'Then tone goes in a separate line, marked as impression.'),
        ('Elena', 'One line, clearly labelled, and never in the same sentence as their words. And how do we record a silence?')],
 unresolved=True,
 a=[('What did Farida want to write?', 'firmly opposed'),
    ('What were Ilmaria’s words?', 'not in a position to join a consensus at this stage'),
    ('What does at this stage do?', 'leaves a door open'),
    ('What would firmly opposed cause?', 'a decision in the capital not to approach them'),
    ('Where does tone belong?', 'in a separate line, marked as impression')],
 b=[('Not in a ____________, at this stage.', 'position'),
    ('At this stage is an ____________.', 'invitation'),
    ('A refusal they did not ____________.', 'make'),
    ('Marked as ____________.', 'impression')]),

speak=[('Concede precisely',
        ['Give your partner six positions from your own work.',
         'Qualify each with although, even if, while or whilst.',
         'They say what would have to change for you to move.']),
       ('Report without improving',
        ['Make a qualified statement to your partner.',
         'They report it back in four lines.',
         'Object to anything stronger or weaker than you said.']),
       ('Movement or none',
        ['Read out eight diplomatic formulations.',
         'Your partner sorts them into movement and no movement.',
         'Argue about any two you disagree on.'])],

ext_title='In an intervention the subordinate clause is the content',
ext_fig=figs.datatable('ELEVEN MINUTES, REPORTED TWO WAYS',
                       ['What was said', 'Flattened', 'Faithful'],
                       [['can support, although not in this form', 'supports', 'conditional support'],
                        ['while sharing the objective', 'agrees', 'objective shared, text not'],
                        ['difficulty with paragraph three', 'minor concerns', 'paragraph three named'],
                        ['even if redrafted, instructions needed', 'will agree', 'two steps required'],
                        ['at this stage', 'omitted', 'a door left open'],
                        ['no mention of paragraph five', 'omitted', 'a silence worth noting']]),
ext_fig_cap='Six elements of one statement, and five of them live in the subordinate clauses.',
ext=[
 'An intervention of eleven minutes can be transcribed, translated and summarised with great '
 'accuracy, and the summary will be useless in proportion to its elegance.',
 'The reason is structural rather than linguistic. Ordinary summary preserves main clauses and '
 'discards subordinate ones, because in ordinary prose the main clause carries the meaning. In '
 'an intervention it carries the position, which everybody already knows, while the subordinate '
 'clauses carry the only new information there is: what the delegation would require in order '
 'to move.',
 'The instruction must therefore reverse the usual priority. Qualifications, conditions and '
 'reservations are to be reproduced verbatim; the position may be given in four words.',
 'Certain formulations are to be quoted and never paraphrased: although, while, even if, '
 'subject to, at this stage, in principle, not in a position to. Each is a phrase of art, and '
 'each has been chosen in preference to a stronger or weaker one.',
 'Two further elements belong in the analysis. The first is silence: what a delegation did not '
 'mention, particularly where it was expected to. The second is what the statement commits them '
 'to if it is quoted back at them in three months, which is the only test of a formulation that '
 'matters.',
 'Impressions of tone are valuable and belong on a separate line, marked as impression. '
 'Firmness heard in a room has a way of becoming firmness recorded in a file, and a capital '
 'reading firmly opposed will not make an approach that at this stage was designed to invite.'],

dp2=('Phrases of art', 'Negotiating practice attaches settled meanings to certain '
     'formulations, including in principle, at this stage and not in a position to, which are '
     'customarily reproduced verbatim in reporting rather than paraphrased.',
     'Source: general conference practice literature, 2025–2026.'),

e_a=[('Why is an elegant summary useless here?', 'it keeps main clauses and drops subordinate ones'),
     ('What does the main clause carry?', 'the position, which is already known'),
     ('What do the subordinate clauses carry?', 'the conditions of movement'),
     ('Which formulations must be quoted?', 'although, while, even if, subject to, at this stage'),
     ('Where do impressions of tone belong?', 'on a separate line, marked as impression')],
e_b=[('An accurate summary is necessarily useful.', 'F'),
     ('The position is usually new information.', 'F'),
     ('Phrases of art are chosen deliberately.', 'T'),
     ('Silence is worth recording.', 'T'),
     ('Tone may be mixed with quoted words.', 'F'),
     ('“At this stage” may be an invitation.', 'T')],

w_model='Purpose: so that we know what Corvadia would require in order to accept, and what we '
        'may quote back to them in three months. Scope: the intervention of 14 September on item '
        '6; their statement on item 4 is covered separately. Inputs: the audio, the '
        'interpretation, and our note of the room. Criteria: every qualification, condition and '
        'reservation reproduced verbatim, with the phrases although, while, even if, subject to, '
        'at this stage and in principle quoted and never paraphrased; the position summarised in '
        'no more than one line; the points on which they were silent listed; any impression of '
        'tone on a separate line marked as impression. Done: with the capital the same evening. '
        'Fallback: where the interpretation and the audio differ, both are given and the '
        'difference is flagged.',
w_fig=figs.spec_card('SIX LINES FOR A STATEMENT ANALYSIS',
                     [('Purpose', 'what they would require, and what we may quote'),
                      ('Scope', 'the intervention of 14 September on item 6'),
                      ('Inputs', 'audio, interpretation, note of the room'),
                      ('Criteria', 'qualifications verbatim; position in one line; silences listed'),
                      ('Done', 'with the capital the same evening'),
                      ('Fallback', 'audio and interpretation differ: give both')]),
w_fig_cap='One line for the position, and everything else for the conditions.',
w_task='Write a six-line tasking for the analysis of another delegation’s statement.',
w_steps=['Line 1: say what the reader must learn from it.',
         'Line 2: say which intervention, and what is covered separately.',
         'Line 3: say what you are giving it.',
         'Line 4: say the verbatim qualifications, the one-line position, the silences and the tone rule.',
         'Line 5: say when it must go.',
         'Line 6: say what happens where sources differ.'],
w_bank=['Purpose: so that we know what … would require in order to accept, and what we may quote back in three months',
        'Scope: the intervention of … on item … ; … is covered separately',
        'Inputs: the audio, the interpretation, and our note of the room',
        'Criteria: every qualification reproduced verbatim, with phrases of art quoted and never paraphrased; the position in no more than one line; the points of silence listed; any impression of tone on a separate line marked as impression',
        'Done: with the capital … . Fallback: where the interpretation and the audio differ, both are given and the difference flagged'],
w_check=['Are qualifications verbatim?',
         'Is the position limited to one line?',
         'Are silences listed?',
         'Is tone separated and labelled?'],

t_title='Another delegation’s statement, understood exactly',
t_fig=figs.split('ELEVEN MINUTES',
                 'One line only',
                 ['the position',
                  'the item and the date',
                  'the speaker',
                  'the language used'],
                 'Verbatim, always',
                 ['although, while, even if',
                  'subject to, at this stage',
                  'in principle, not in a position',
                  'any named paragraph']),
t_fig_cap='The position in a line; the conditions in their own words, every time.',
t_body=[
 'Reverse the usual priority in the instruction. The position is to be given in a single line, '
 'and every qualification, condition and reservation is to be reproduced verbatim, with the '
 'phrases of art quoted rather than paraphrased.',
 'Require a list of silences as well: the matters on which the delegation said nothing, and '
 'particularly those on which it was expected to speak. A silence leaves no trace in a '
 'transcript and none at all in a summary.',
 'Keep impressions of tone on a separate line, marked as impression, and never in the same '
 'sentence as a quotation. Firmness heard in a room becomes firmness recorded in a file, and a '
 'capital that reads firmly opposed will not make the approach that at this stage invited.'],
t_say=[('Reverse the priority: ', 'The position in one line; every qualification verbatim.'),
       ('Protect the phrases: ', 'Quote although, while, even if, subject to and at this stage.'),
       ('Separate the tone: ', 'Impressions on their own line, marked as impression.')],
t_bound='Ordinary summary keeps main clauses and discards subordinate ones, and it cannot do '
        'otherwise. In an intervention that rule throws away the whole of the negotiating '
        'content, accurately and in good prose, and never says that it has done so.',
t_a=[('The position in one ____________.', 'line'),
     ('Every ____________ verbatim.', 'qualification'),
     ('Quote ____________, while and even if.', 'although'),
     ('List the matters of ____________.', 'silence'),
     ('Impressions marked as ____________.', 'impression'),
     ('Summary keeps ____________ clauses.', 'main')],
t_b_rubric='Say whether each element may be summarised.',
t_b=[('That the delegation supports the objective.', 'yes: one line'),
     ('“although not in its present form”', 'no: verbatim'),
     ('That it named paragraph three.', 'no: the paragraph number is the content'),
     ('That the speaker sounded impatient.', 'separately, marked as impression')],

case=dict(
 title='The Decision Room · Support, reported in one word',
 brief=[
  'A delegation speaks for eleven minutes on item 6. The note that reaches the capital reports '
  'that it supports the draft text. The delegation’s own readout reports that it entered a '
  'reservation.',
  'The intervention contained three qualifications: support although not in the present form; '
  'the objective shared while paragraph three is difficult; and instructions required even if '
  'paragraph three were redrafted.',
  'It also made no mention of paragraph five, on which it had spoken at the previous two '
  'sessions. The capital, reading support, removes the item from its list of matters requiring '
  'attention.'],
 exhibit=figs.datatable('WHAT THE CAPITAL WAS AND WAS NOT TOLD',
                        ['Element of the statement', 'In the note'],
                        [['support in principle', 'yes'],
                         ['not in the present form', 'no'],
                         ['difficulty with paragraph three', 'no'],
                         ['instructions required even after redrafting', 'no'],
                         ['silence on paragraph five', 'no'],
                         ['at this stage', 'no']]),
 exhibit_cap='One element reported out of six, and it is the only one that was already known.',
 exhibit_note='The note is accurate. It records the main clause of a statement whose content '
              'was entirely in its subordinate clauses.',
 voices=[('Elena Duarte', 'delegate, the Assembly',
          'They did not tell us their position; they told us their price. We reported the position.'),
         ('Peter Novak', 'desk officer, the capital',
          'And I took the item off my list, which is the most expensive thing a desk officer can do.'),
         ('Farida Haddad', 'protocol and interpreting',
          'Their silence on paragraph five after speaking on it twice is a finding in itself.')],
 steps=[('Find it', 'What was said and what was reported?'),
        ('Compare it', 'Main clause against subordinate clauses.'),
        ('Infer it', 'Why did the qualifications vanish?'),
        ('Weigh it', 'Four lines of verbatim text.'),
        ('Decide', 'How is a statement to be reported?')],
 analysis=[('Find it. What was reported?', 'support'),
           ('Compare it. What was omitted?', 'three qualifications and a silence'),
           ('Infer it. Why?', 'summary preserves main clauses'),
           ('Weigh it. What is the cost?', 'four lines of quotation'),
           ('Decide. How is it reported?', 'position in one line, conditions verbatim, silences listed')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say how much space the position gets.',
                 'Say what is reproduced verbatim.',
                 'Say what else is recorded.',
                 'Say where tone goes.'],
 bank=['The position of another delegation is reported in no more than one line.',
       'Every qualification, condition and reservation is reproduced verbatim, with phrases of art quoted and never paraphrased.',
       'The matters on which the delegation was silent are listed, with a note where it had spoken on them before.',
       'Impressions of tone appear on a separate line, marked as impression, and never within a quotation.'],
 outcome='The note is reissued the same evening in nine lines: one of position, five of '
         'verbatim qualification, two of silence and one of impression. The capital restores the '
         'item to its list, redrafts paragraph three in the terms the qualification implied, and '
         'approaches the delegation three weeks later with the redraft. The delegation accepts '
         'the redraft subject to a footnote, and paragraph five is reopened at its own request.',
 outcome_q=[('How long was the reissued note?', 'nine lines'),
            ('How many were verbatim qualification?', 'five'),
            ('What did the capital do?', 'restored the item and redrafted paragraph three'),
            ('When was the approach made?', 'three weeks later'),
            ('What was the outcome?', 'acceptance subject to a footnote, and paragraph five reopened')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Summarise their intervention',
 task=['A delegate asked for a readout of another delegation’s eleven-minute statement.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Summarise their intervention.',
        'The main points.',
        'Four lines, every point included.',
        'Tell me where they stand.',
        'Nothing left out.',
        'Tonight.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and “where they stand” asked for the one thing already known.',
 asked=['The main points', 'Every point included', 'Where they stand'],
 back=['4 lines', '1 position', '0 qualifications quoted'],
 gap='Nobody asked for the conditions of movement, so the summary kept the position and dropped them.',
 back_cap='A clear four-line readout in which the only new information has been compressed away.',
 back_note='“Where they stand” is a question about position. The negotiating question is what '
           'they would require in order to stand somewhere else.',
 diagnosis=[('“summarise their intervention”', 'unscoped set'),
            ('“the main points”', 'hidden assumption'),
            ('“where they stand”', 'hidden assumption'),
            ('“every point included”', 'unstated exception'),
            ('“nothing left out”', 'unstated exception'),
            ('“tonight”', 'unscoped set')],
 rewrite='Rewrite it on the six lines so that the conditions of movement are returned verbatim.',
 scaffold=['what the reader must learn from it',
           'which intervention, and what is covered separately',
           'what you are giving it',
           'the verbatim qualifications, the one-line position, the silences and the tone rule',
           'when it must go',
           'what happens where sources differ'],
 bank=['Purpose: so that we know what they would require in order to accept, and what we may quote back to them in three months',
       'Scope: the intervention of 14 September on item 6; their statement on item 4 is covered separately',
       'Inputs: the audio, the interpretation, and our note of the room',
       'Criteria: every qualification, condition and reservation reproduced verbatim, with although, while, even if, subject to, at this stage and in principle quoted and never paraphrased; the position in no more than one line; the points of silence listed; any impression of tone on a separate line marked as impression',
       'Done: with the capital the same evening',
       'Fallback: where the interpretation and the audio differ, both are given and the difference is flagged'],
 check=['Are qualifications verbatim?',
        'Is the position one line?',
        'Are silences listed?',
        'Is tone labelled separately?'],
 model=['so that we know what Corvadia would require in order to accept, and what we may quote back to them in three months',
        'the intervention of 14 September on item 6; their statement on item 4 is covered separately',
        'the audio, the interpretation, and our note of the room',
        'every qualification, condition and reservation reproduced verbatim, with the phrases although, while, even if, subject to, at this stage and in principle quoted and never paraphrased; the position summarised in no more than one line; the points on which they were silent listed; any impression of tone on a separate line marked as impression',
        'with the capital the same evening',
        'where the interpretation and the audio differ, both are given and the difference is flagged'],
 cost='1 position, 0 qualifications, and an item removed from the capital’s list of concerns.'),

lang=dict(
 title='Across the Language Line · A politeness that is heard as a concession',
 setting=[
  'A delegation speaking in its second language uses a courteous formula which, rendered '
  'literally, sounds like agreement: we have no objection in principle.',
  'In its own language the phrase is a standard way of declining to take a position at all. The '
  'interpretation is faithful word for word, and the English meaning is nearly the opposite.'],
 ladder=[('A courteous declining formula', 'in the original'),
         ('A literal interpretation', '“no objection in principle”'),
         ('An English listener', 'who records agreement')],
 cap='Faithful word for word, and reversed in effect.',
 turns=[('Turn 1 · The delegation', 'We have no objection in principle.'),
        ('Turn 2 · The chair', 'I take it the delegation can join a consensus.'),
        ('Turn 3 · The delegation', 'We did not say that.')],
 holds=['May I ask whether the delegation is able to join a consensus today?',
        'I understood the phrase as reserving rather than accepting.',
        'Would you be content for the record to say that you are not taking a position today?',
        'I am seeking clarity rather than a commitment.',
        'Perhaps the secretariat could reflect the distinction in the record.',
        'I will note in our report that the phrase was used in its reserving sense.'],
 redline='Never record a courtesy formula as a concession, and never put a delegation in the '
         'position of appearing to retreat from something it did not say.',
 score=['Asked directly whether consensus could be joined.',
        'Stated the alternative reading of the phrase.',
        'Offered a neutral form of words for the record.',
        'Made clear that no commitment was being sought.',
        'Reported the sense in which the phrase was used.'],
 a=[('What formula was used?', 'we have no objection in principle'),
    ('What does it mean in the original?', 'declining to take a position'),
    ('How does it sound in English?', 'like agreement'),
    ('Was the interpretation faithful?', 'yes, word for word'),
    ('What should be asked?', 'whether consensus can be joined today'),
    ('What must be avoided?', 'making them appear to retreat')]),

rev_fig=figs.split('REPORTING A STATEMENT',
                   'One line',
                   ['the position',
                    'the speaker',
                    'the item',
                    'the date'],
                   'Verbatim and listed',
                   ['every qualification',
                    'every phrase of art',
                    'every named paragraph',
                    'every silence']),
rev_fig_cap='The left column is already known in the capital. The right column is the report.',
rev=dict(
 read=[('How long was the intervention?',
        ['eleven minutes', 'four lines', 'three minutes', 'one hour'], 0),
       ('How many qualifications were expressed?',
        ['three', 'one', 'none', 'six'], 0),
       ('Which paragraph was named as difficult?',
        ['paragraph three', 'paragraph five', 'paragraph one', 'none'], 0),
       ('Where do impressions of tone belong?',
        ['on a separate line, marked as impression', 'in the quotation',
         'in the position line', 'nowhere'], 0)],
 listen_text='Reverse the priority: the position in one line, every qualification verbatim, the '
             'phrases of art quoted, the silences listed, and any impression of tone on its own '
             'line, marked as impression.',
 listen=[('The position in one ____________.', 'line'),
         ('Every qualification ____________.', 'verbatim'),
         ('The ____________ listed.', 'silences'),
         ('Any impression of ____________ on its own line.', 'tone')],
 speak=['Qualify six positions with although, even if, while and whilst.',
        'Then report a partner’s qualified statement without strengthening or weakening it.'],
 write='Write a six-line tasking for the analysis of another delegation’s statement.',
 vocab=[('A refusal to be bound for now is a ____________ of position.', 'reservation'),
        ('Wording devised to allow agreement is a ____________ of words.', 'formula'),
        ('Wording with an established meaning is a ____________ of art.', 'phrase'),
        ('A position taken to gain time is a ____________ position.', 'holding')],
 gram=[('____________ noting the explanation, we maintain our reservation.', 'While'),
       ('____________ the deadline has passed, the text may still be amended.', 'Although'),
       ('____________ if we abstain, the decision will be adopted.', 'Even'),
       ('____________ we understand the concern, the wording is unacceptable.', 'Whilst')]),

found=['Give the position one line and the qualifications their own words.',
       'Quote although, while, even if, subject to and at this stage, always.',
       'List the silences, especially where a delegation has spoken before.',
       'Keep tone on a separate line, marked as impression.'],
end_line='They did not tell you their position. They told you their price.',
end_next='Next: Amendments and the Shape of a Text')
