# -*- coding: utf-8 -*-
import figs

U = dict(
num=10,
title='What Consensus Covered',
gram='procedural language: on a point of order, with your permission, if I may',
ai='what consensus actually covered, and what it did not',
strap='CEFR B2 · Grammar: procedural language — on a point of order, with your permission, if I may · '
      'AI: what consensus actually covered, and what it did not',
cando=['intervene correctly on a point of order or with permission',
       'establish what a consensus actually covered',
       'see where an agreement was deliberately ambiguous',
       'record an understanding without reopening a text',
       'write a six-line tasking for a post-adoption note'],

hero=('THE GAVEL FELL ON A TEXT THAT TWO DELEGATIONS READ DIFFERENTLY',
      ['Consensus was declared at four minutes past four.',
       'Paragraph 12 had been left ambiguous on purpose, and nobody said so aloud.'],
      [(1080, 'blue', 'long'), (240, 'grey', 'short'), (280, 'teal', 'short')]),
hero_cap='The adoption of a nineteen-paragraph decision, and the paragraph that made it possible.',

warm=['What does it mean when a meeting agrees without a vote?',
      'Can two parties agree on words and not on meaning?',
      'What do you do when you see it happening?'],

read=[
 'Consensus is declared at four minutes past four and the text is adopted without a vote. '
 'Nineteen paragraphs, three days of drafting, and no delegation objects.',
 'Paragraph 12 provides that parties shall take appropriate measures in accordance with their '
 'national circumstances. Two delegations understand this to require legislation; two others '
 'understand it to require nothing that is not already in place.',
 'The ambiguity was not an accident. It was the formula that made adoption possible, and every '
 'experienced delegation in the room knew what it was for.',
 'What matters afterwards is therefore not the text, which everybody has, but the record of '
 'what each delegation understood itself to be agreeing to. If I may put it plainly: a '
 'consensus covers the words, and only sometimes the meaning.',
 'A delegation that leaves the room without having recorded its own understanding has agreed '
 'to a paragraph that will be interpreted, in three years, by somebody reading somebody else’s '
 'statement.'],

dp1=('Interpretative statements', 'Practice permits a delegation, on or after adoption, to '
     'place on record its understanding of a provision, which does not reopen the text and may '
     'be relied upon in later interpretation.',
     'Source: general conference practice literature, 2025–2026.'),

c_a=[('When was consensus declared?', 'at four minutes past four'),
     ('How many paragraphs were adopted?', 'nineteen'),
     ('What does paragraph 12 provide?', 'that parties shall take appropriate measures in accordance with national circumstances'),
     ('How do two delegations read it?', 'as requiring legislation'),
     ('And two others?', 'as requiring nothing new'),
     ('Was the ambiguity accidental?', 'no')],

c_b=[('A vote was taken.', 'F'),
     ('Paragraph 12 is clear.', 'F'),
     ('The ambiguity made adoption possible.', 'T'),
     ('A consensus always covers the meaning.', 'F'),
     ('An understanding may be recorded after adoption.', 'T'),
     ('Three days were spent drafting.', 'T')],

c_c=[('____________ a point of order, may I ask whether the item is closed?', 'On'),
     ('____________ your permission, I should like to make a short statement.', 'With'),
     ('____________ I may, I will read the wording of our understanding.', 'If'),
     ('____________ a point of order, the speakers’ list was closed yesterday.', 'On'),
     ('____________ your indulgence, I shall be brief.', 'With'),
     ('____________ I might return to paragraph 12 for one moment.', 'If')],

c_d=[('A point of order concerns ( procedure / substance ).', ['procedure', 'substance'], 0),
     ('With your permission asks ( the chair / the room ).', ['the chair', 'the room'], 0),
     ('If I may is ( a softener before proceeding / a question ).',
      ['a softener before proceeding', 'a question'], 0),
     ('A point of order may be raised ( at any time / only when called ).',
      ['at any time', 'only when called'], 0),
     ('An interpretative statement ( does not reopen the text / reopens it ).',
      ['does not reopen the text', 'reopens it'], 0)],

c_e=('Point of order or statement? Put each intervention in the right column.',
     [('the speakers’ list was closed yesterday', 'point of order'),
      ('our understanding of paragraph 12 is as follows', 'statement'),
      ('the item was not on the adopted agenda', 'point of order'),
      ('we wish to record a reservation', 'statement'),
      ('a quorum is not present', 'point of order'),
      ('we interpret appropriate measures to mean legislation', 'statement')],
     ['point of order', 'statement']),

v_fig_title='A CONSENSUS IN SIX WORDS',
v_fig=[('key', 'a consensus'), ('doc', 'an interpretative declaration'), ('chart', 'a scope of agreement'),
       ('clock', 'a reopening at a later session'), ('people', 'a disassociation'), ('speech', 'a deliberate ambiguity')],
v_fig_cap='Six words for the moment at which three days of drafting become binding.',

vocab=[
 ('a consensus', 'agreement without a vote and without objection'),
 ('an absence of objection', 'nobody raising an objection'),
 ('a gavel', 'the chair’s signal that a decision is taken'),
 ('an adoption without a vote', 'approval with no vote recorded'),
 ('a statement after adoption', 'a statement made once a text is adopted'),
 ('an interpretative declaration', 'a recorded understanding of a provision'),
 ('a scope of agreement', 'how far an agreement reaches'),
 ('a matter not covered', 'something the agreement does not address'),
 ('a deliberate ambiguity', 'wording left unclear on purpose'),
 ('a formula that postpones', 'wording that defers a disagreement'),
 ('a reopening at a later session', 'taking a settled matter up again'),
 ('a precedent created', 'a decision others will rely on'),
 ('a record of understandings', 'the collected statements of meaning'),
 ('an objection withheld', 'an objection not made'),
 ('a disassociation', 'a formal distancing from a decision'),
 ('a footnote to a decision', 'a note attached to a decision'),
 ('an unresolved paragraph', 'a paragraph still in dispute'),
 ('a mandate for further work', 'authority to continue the work'),
 ('a reading of a consensus', 'how a party understands what was agreed'),
 ('a question not asked', 'a question deliberately left unput')],

v_a=[('Agreement without a vote is a ____________.', 'consensus'),
     ('A recorded understanding of a provision is an ____________ declaration.', 'interpretative'),
     ('Wording left unclear on purpose is a ____________ ambiguity.', 'deliberate'),
     ('Wording that defers a disagreement is a ____________ that postpones.', 'formula'),
     ('A formal distancing from a decision is a ____________.', 'disassociation'),
     ('Authority to continue the work is a ____________ for further work.', 'mandate'),
     ('A decision others will rely on is a ____________ created.', 'precedent'),
     ('A question deliberately left unput is a question not ____________.', 'asked')],

v_b=[('An absence of objection is nobody', 'raising an objection.'),
     ('A scope of agreement is how far', 'an agreement reaches.'),
     ('A matter not covered is something', 'the agreement does not address.'),
     ('A record of understandings is the collected', 'statements of meaning.'),
     ('A reading of a consensus is how a party', 'understands what was agreed.')],

g_title='Grammar: procedural language — on a point of order, with your permission, if I may',
g_rule=['On a point of order introduces an intervention about procedure and may be made at any '
        'time: on a point of order, may I ask whether the item is closed?',
        'With your permission asks the chair before doing something: with your permission, I '
        'should like to make a short statement.',
        'If I may is a softener immediately before proceeding, and expects no answer: if I may, '
        'I will read the wording of our understanding.',
        'The three are not interchangeable. A point of order raised on a matter of substance '
        'will be ruled out of order, and a statement made without asking the chair may not be '
        'recorded at all.'],
g_fig=('LOOSE',
       ['Sorry, can I say something about procedure?',
        'Can I make a statement now?',
        'Let me read our understanding.',
        'I want to go back to paragraph 12.'],
       'PRECISE',
       ['On a point of order, may I ask whether the item is closed?',
        'With your permission, I should like to make a short statement.',
        'If I may, I will read the wording of our understanding.',
        'With your permission, I should like to return to paragraph 12.'],
       'four interventions in conversational English',
       'the same four in the procedural register of the chamber'),
g_fig_cap='Point of order for procedure, permission for a statement, if I may before proceeding.',

g_a=[('____________ a point of order, may I ask whether the item is closed?', 'On'),
     ('____________ your permission, I should like to make a short statement.', 'With'),
     ('____________ I may, I will read the wording of our understanding.', 'If'),
     ('____________ a point of order, the speakers’ list was closed yesterday.', 'On'),
     ('____________ your indulgence, I shall be brief.', 'With'),
     ('____________ I might return to paragraph 12 for one moment.', 'If'),
     ('____________ a point of order, a quorum does not appear to be present.', 'On'),
     ('____________ your permission, the delegation will circulate its statement.', 'With'),
     ('____________ I may say so, the text does not reflect yesterday’s discussion.', 'If')],

g_b=[('( Sorry, can I say something about procedure? / On a point of order, may I ask whether the item is closed? ) — register.', ['Sorry, can I say something about procedure?', 'On a point of order, may I ask whether the item is closed?'], 1),
     ('( With your permission, I should like to make a short statement / Can I make a statement now? ) — register.',
      ['With your permission, I should like to make a short statement',
       'Can I make a statement now?'], 0),
     ('( If I may, I will read our understanding / If I may read our understanding, please? ) — softener.',
      ['If I may, I will read our understanding',
       'If I may read our understanding, please?'], 0),
     ('( On a point of order, the speakers’ list was closed yesterday / On a point of order, we disagree with paragraph 12 ) — procedure only.',
      ['On a point of order, the speakers’ list was closed yesterday',
       'On a point of order, we disagree with paragraph 12'], 0),
     ('( With your permission, the delegation will circulate its statement / The delegation will circulate its statement, with permission of everybody ) — form.',
      ['With your permission, the delegation will circulate its statement',
       'The delegation will circulate its statement, with permission of everybody'], 0),
     ('( If I may say so, the text does not reflect yesterday’s discussion / If I may saying so, the text is not reflecting ) — form.',
      ['If I may say so, the text does not reflect yesterday’s discussion',
       'If I may saying so, the text is not reflecting'], 0)],

d1=dict(
 title='Four minutes past four',
 fig=(['Adopted without a vote.', 'And paragraph 12?'],
      ['Agreed by everybody.', 'In two different senses.']),
 cap='Elena Duarte and Ambassador Clara Mendel, immediately after adoption.',
 lines=[('Mendel', 'Adopted at four minutes past four, and no objection. A good outcome.'),
        ('Elena', 'On eighteen paragraphs, yes.'),
        ('Mendel', 'And the nineteenth?'),
        ('Elena', 'Paragraph 12. Appropriate measures in accordance with national circumstances.'),
        ('Mendel', 'Which means legislation to us and nothing at all to two others.'),
        ('Elena', 'That ambiguity is why the text was adopted at all.'),
        ('Mendel', 'Then we are content with it?'),
        ('Elena', 'We are content with it, and we must record what we take it to mean.'),
        ('Mendel', 'Without reopening the paragraph.'),
        ('Elena', 'A statement after adoption reopens nothing. It is three sentences and it will be read in three years.'),
        ('Mendel', 'Make it now, before the chair closes the item.'),
        ('Elena', 'With your permission, I shall ask for the floor as soon as the gavel has fallen.')],
 a=[('When was the text adopted?', 'at four minutes past four'),
    ('How many paragraphs are uncontroversial?', 'eighteen'),
    ('What does paragraph 12 provide?', 'appropriate measures in accordance with national circumstances'),
    ('Why was the ambiguity left?', 'it made adoption possible'),
    ('What must the delegation do?', 'record its understanding after adoption')],
 b=[('Adopted without a ____________.', 'vote'),
    ('In two different ____________.', 'senses'),
    ('A statement after adoption reopens ____________.', 'nothing'),
    ('As soon as the ____________ has fallen.', 'gavel')]),

d2=dict(
 title='What was not covered',
 fig=(['Nineteen paragraphs agreed.', 'And one subject absent.'],
      ['Which subject?', 'Funding. Nobody asked.']),
 cap='Elena and Farida Haddad, over the adopted text that evening.',
 lines=[('Farida', 'The decision is nineteen paragraphs and says nothing about funding.'),
        ('Elena', 'Nobody asked about funding, and that was not an oversight either.'),
        ('Farida', 'A question not asked.'),
        ('Elena', 'Three delegations would have objected to any paragraph on funding, so the question stayed unput.'),
        ('Farida', 'Then what did consensus cover?'),
        ('Elena', 'Exactly the nineteen paragraphs, in their words, and nothing outside them.'),
        ('Farida', 'So in March somebody will say that funding was always implied.'),
        ('Elena', 'They will, and our note tonight will say that the decision is silent on funding.'),
        ('Farida', 'Is that worth writing down?'),
        ('Elena', 'A silence that is recorded is a silence somebody has to argue with. An unrecorded silence becomes whatever is convenient.'),
        ('Farida', 'Then the note has three parts: what was agreed, what we understand it to mean, and what it does not cover.'),
        ('Elena', 'And the fourth, which is harder: what precedent this creates for the next decision of this body.')],
 unresolved=True,
 a=[('What does the decision not mention?', 'funding'),
    ('Why?', 'three delegations would have objected to any funding paragraph'),
    ('What did consensus cover?', 'the nineteen paragraphs in their words, and nothing outside'),
    ('What will the note say?', 'that the decision is silent on funding'),
    ('Why record a silence?', 'an unrecorded silence becomes whatever is convenient')],
 b=[('A question not ____________.', 'asked'),
    ('The question stayed ____________.', 'unput'),
    ('Our note will say the decision is ____________ on funding.', 'silent'),
    ('What ____________ this creates.', 'precedent')]),

speak=[('Three procedural forms',
        ['Make six interventions to your partner as chair.',
         'Use on a point of order, with your permission and if I may, twice each.',
         'They rule out of order anything that is really about substance.']),
       ('Two readings',
        ['Write an ambiguous sentence with your partner.',
         'Each of you states what you take it to mean.',
         'Record both understandings in three sentences each.']),
       ('What it does not cover',
        ['Describe an agreement from your own work.',
         'Your partner asks what it is silent on.',
         'List three silences and say which will be disputed first.'])],

ext_title='A consensus covers the words, and the understandings must be recorded separately',
ext_fig=figs.datatable('WHAT WAS AND WAS NOT AGREED',
                       ['Element', 'Covered by consensus?'],
                       [['the nineteen paragraphs as adopted', 'yes'],
                        ['the meaning of “appropriate measures”', 'no: two readings'],
                        ['the timetable in paragraph 7', 'yes'],
                        ['funding of the mechanism', 'no: not mentioned'],
                        ['who chairs the drafting group', 'no: left open'],
                        ['the precedent for future decisions', 'no: unaddressed']]),
ext_fig_cap='One line of agreement, and five of things that will be argued about in March.',
ext=[
 'A note on what a consensus covered can be drafted from the adopted text, the records and the '
 'statements made, and it will be accurate on the first question: what the words say.',
 'The three questions that matter are harder and are not answered by the text. Which provisions '
 'were left ambiguous on purpose; what each delegation understands itself to have agreed to; '
 'and what the decision does not cover at all.',
 'The first requires a judgement about the negotiation, which only somebody who was present can '
 'make: a provision reached after three days of drafting and adopted unchanged in the final '
 'hour was very probably a formula rather than a solution.',
 'The second is established from the statements made at and after adoption, which is why a '
 'delegation makes its own. An interpretative statement reopens nothing, takes three sentences '
 'and will be read, by somebody, in three years.',
 'The third is the hardest to see because nothing records it. A question that was never asked '
 'leaves no trace: no paragraph, no bracket, no reservation. Funding, in this decision, is not a '
 'gap in the drafting; it is the reason the drafting succeeded.',
 'So the post-adoption note has four parts: the text as adopted, our understanding of the '
 'provisions that bear two readings, the matters the decision does not cover, and the precedent '
 'it creates. The first part writes itself, and the other three are the work of a delegation.'],

dp2=('Matters not covered', 'Interpretative practice commonly holds that a decision adopted by '
     'consensus governs only what its text addresses, and that silence on a matter is not an '
     'implied agreement upon it.',
     'Source: general conference practice literature, 2025–2026.'),

e_a=[('What will a note be accurate about?', 'what the words say'),
     ('What three harder questions remain?', 'deliberate ambiguity, each understanding, what is not covered'),
     ('Who can judge deliberate ambiguity?', 'somebody who was present'),
     ('How is an understanding established?', 'from statements made at and after adoption'),
     ('Why is the third question hardest?', 'a question never asked leaves no trace')],
e_b=[('A consensus covers the meaning as well as the words.', 'F'),
     ('An interpretative statement reopens the text.', 'F'),
     ('Silence implies agreement.', 'F'),
     ('A formula adopted unchanged in the final hour is suspicious.', 'T'),
     ('A recorded silence must be argued with.', 'T'),
     ('The post-adoption note has four parts.', 'T')],

w_model='Purpose: so that in three years we can establish what we agreed to and what we did '
        'not. Scope: the decision of nineteen paragraphs adopted this afternoon; the chair’s '
        'procedural rulings are not covered. Inputs: the adopted text, the statements made at '
        'adoption, my notes of the drafting group, and our instructions of 2 September. '
        'Criteria: four numbered parts — the text as adopted; the provisions that bear two '
        'readings, with each reading attributed to the delegation that advanced it; the matters '
        'the decision does not cover, including any question deliberately not put; and the '
        'precedent the decision creates for this body; our own interpretative statement '
        'reproduced in full. Done: with the capital tonight, before anybody else’s account '
        'arrives. Fallback: where I cannot establish whether an ambiguity was deliberate, it is '
        'listed as ambiguous with the question left open.',
w_fig=figs.spec_card('SIX LINES FOR A POST-ADOPTION NOTE',
                     [('Purpose', 'establish in three years what we agreed to'),
                      ('Scope', 'the nineteen-paragraph decision'),
                      ('Inputs', 'text, statements, drafting notes, instructions'),
                      ('Criteria', 'four parts; two readings attributed; silences listed'),
                      ('Done', 'tonight, before other accounts arrive'),
                      ('Fallback', 'cannot establish intent: list as ambiguous')]),
w_fig_cap='The fourth part — the precedent — is the one nobody asks for and everybody later needs.',
w_task='Write a six-line tasking for a post-adoption note.',
w_steps=['Line 1: say what must be establishable, and when.',
         'Line 2: say which decision, and what is excluded.',
         'Line 3: say what you are giving it.',
         'Line 4: say the four parts, the attribution and your own statement.',
         'Line 5: say when it must go, and why then.',
         'Line 6: say what happens where intent cannot be established.'],
w_bank=['Purpose: so that in … years we can establish what we agreed to and what we did not',
        'Scope: the decision of … paragraphs adopted … ; … is not covered',
        'Inputs: the adopted text, the statements made at adoption, my notes, and our instructions',
        'Criteria: four numbered parts — the text as adopted; the provisions bearing two readings, each reading attributed; the matters not covered, including any question deliberately not put; and the precedent created; our own interpretative statement reproduced in full',
        'Done: with the capital … , before anybody else’s account arrives. Fallback: where intent cannot be established, the ambiguity is listed with the question left open'],
w_check=['Are the four parts present?',
         'Is each reading attributed?',
         'Are deliberate silences listed?',
         'Is our own statement reproduced?'],

t_title='What consensus actually covered, and what it did not',
t_fig=figs.split('AFTER THE GAVEL',
                 'The text gives',
                 ['the nineteen paragraphs',
                  'the adopted wording',
                  'the annexes',
                  'the date of effect'],
                 'You must establish',
                 ['which ambiguities were deliberate',
                  'what each party understood',
                  'what is not covered at all',
                  'what precedent is created']),
t_fig_cap='The words are in the document. Everything that will be argued about is not.',
t_body=[
 'To establish what consensus actually covered, require four numbered parts rather than a '
 'narrative: the text as adopted; the provisions that '
 'bear two readings, with each reading attributed to the delegation that advanced it; the '
 'matters the decision does not cover; and the precedent it creates for this body.',
 'Supply the judgement that the documents cannot. A provision drafted for three days and '
 'adopted unchanged in the final hour was in all probability a formula rather than a solution, '
 'and only somebody who was in the room can say so.',
 'Then make your own interpretative statement at the table, before the chair closes the item. '
 'It reopens nothing, takes three sentences, and is the only thing that will prevent paragraph '
 '12 from being interpreted in three years by somebody reading another delegation’s account of '
 'it.'],
t_say=[('Require the parts: ', 'Text; two readings, attributed; what is not covered; the precedent.'),
       ('Supply the judgement: ', 'This formula was adopted to permit agreement, not to settle the question.'),
       ('Record the understanding: ', 'With your permission, I should like to state our understanding of paragraph 12.')],
t_bound='It can read what was adopted and what was said. It cannot know that funding was never '
        'mentioned because three delegations would have objected, and nothing in the record will '
        'ever show a question that was deliberately not put.',
t_a=[('Four numbered ____________ rather than a narrative.', 'parts'),
     ('Each reading ____________ to a delegation.', 'attributed'),
     ('What the decision does not ____________.', 'cover'),
     ('And the ____________ it creates.', 'precedent'),
     ('A formula rather than a ____________.', 'solution'),
     ('A question deliberately not ____________.', 'put')],
t_b_rubric='Say whether each can be established from the documents alone.',
t_b=[('The adopted wording of paragraph 12.', 'yes'),
     ('That its ambiguity was deliberate.', 'no: a judgement from the room'),
     ('That two delegations read it differently.', 'yes, from their statements'),
     ('That funding was never raised on purpose.', 'no: nothing records an unasked question')],

case=dict(
 title='The Decision Room · Agreed in words, and in two meanings',
 brief=[
  'A nineteen-paragraph decision is adopted by consensus at four minutes past four, after three '
  'days of drafting and with no objection.',
  'Paragraph 12 requires parties to take appropriate measures in accordance with their national '
  'circumstances. Two delegations have said in the drafting group that this requires '
  'legislation; two others have said that it requires nothing beyond existing practice. The '
  'formula was adopted unchanged in the final hour.',
  'The decision does not mention funding. No delegation raised funding at any point, and three '
  'would have objected to any paragraph on it. The delegation must decide what to do in the ten '
  'minutes before the chair closes the item.'],
 exhibit=figs.datatable('THE DECISION, FOUR WAYS',
                        ['Question', 'Answer'],
                        [['what was adopted?', 'nineteen paragraphs, as drafted'],
                         ['what does paragraph 12 require?', 'two incompatible readings'],
                         ['was that deliberate?', 'yes, and unstated'],
                         ['what about funding?', 'not mentioned at all'],
                         ['why not?', 'a question deliberately not put'],
                         ['what precedent?', 'unaddressed by anybody']]),
 exhibit_cap='Six questions after the gavel, and one of them answered by the text.',
 exhibit_note='Nothing improper occurred. A deliberate ambiguity is a normal instrument of '
              'agreement, and its cost falls on whoever fails to record their own reading.',
 voices=[('Elena Duarte', 'delegate, the Assembly',
          'We are content with the paragraph and we must record what we take it to mean, tonight.'),
         ('Ambassador Clara Mendel', 'head of mission',
          'A statement after adoption reopens nothing and will be read in three years.'),
         ('Farida Haddad', 'protocol and interpreting',
          'And a silence that is recorded is a silence somebody has to argue with.')],
 steps=[('Find it', 'What was adopted?'),
        ('Compare it', 'Two readings of paragraph 12.'),
        ('Infer it', 'Why was the ambiguity left?'),
        ('Weigh it', 'Three sentences before the item closes.'),
        ('Decide', 'What is done after a consensus?')],
 analysis=[('Find it. What was adopted?', 'nineteen paragraphs by consensus'),
           ('Compare it. What differs?', 'two incompatible readings of paragraph 12'),
           ('Infer it. Why?', 'the ambiguity made adoption possible'),
           ('Weigh it. What is required?', 'an interpretative statement of three sentences'),
           ('Decide. What is done?', 'record the understanding, the silences and the precedent')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what is done before the item is closed.',
                 'Say what the post-adoption note contains.',
                 'Say how a deliberate silence is handled.',
                 'Say what is recorded about precedent.'],
 bank=['Where a provision bears two readings, the delegation states its own understanding on the record before the item is closed.',
       'The post-adoption note sets out the text as adopted, the provisions bearing two readings with each reading attributed, the matters not covered, and the precedent created.',
       'A matter deliberately not raised is recorded as a silence, so that it cannot later be presented as implied agreement.',
       'The note is sent the same evening, before other delegations’ accounts reach the capital.'],
 outcome='Elena asks for the floor as the gavel falls and makes a three-sentence statement of '
         'the delegation’s understanding of paragraph 12, which the secretariat records. The '
         'note goes to the capital at nine that evening in four parts. Two years later paragraph '
         '12 is in dispute; three delegations rely on statements made at adoption, and the two '
         'that made none are obliged to argue from the travaux. The funding silence is cited in '
         'March, when a proposal to treat funding as implied is withdrawn.',
 outcome_q=[('When did Elena speak?', 'as the gavel fell'),
            ('How long was the statement?', 'three sentences'),
            ('When did the note go?', 'at nine that evening'),
            ('What happened two years later?', 'paragraph 12 was disputed'),
            ('What happened in March?', 'the implied-funding proposal was withdrawn')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Write up the outcome',
 task=['A delegate asked for a note on a decision adopted by consensus.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Write up the outcome of the session.',
        'What was agreed.',
        'Summarise the decision.',
        'Every paragraph, with no exceptions.',
        'The main points for the capital.',
        'Tomorrow morning.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and “what was agreed” is answered by the text, which everybody already has.',
 asked=['What was agreed', 'Summarise the decision', 'Every paragraph'],
 back=['2 pages', '19 paragraphs summarised', '0 readings attributed'],
 gap='Nobody asked which provisions bear two readings, what is not covered, or what precedent is created.',
 back_cap='A competent summary of a text the capital already possesses, and nothing it does not.',
 back_note='“What was agreed” has an easy answer and a hard one. The easy answer is the '
           'nineteen paragraphs; the hard one is what each delegation thinks they mean.',
 diagnosis=[('“the outcome of the session”', 'unscoped set'),
            ('“what was agreed”', 'hidden assumption'),
            ('“summarise the decision”', 'hidden assumption'),
            ('“every paragraph”', 'unstated exception'),
            ('“the main points”', 'unscoped set'),
            ('“with no exceptions”', 'unstated exception')],
 rewrite='Rewrite it on the six lines so that the note records what the text cannot.',
 scaffold=['what must be establishable, and when',
           'which decision, and what is excluded',
           'what you are giving it',
           'the four parts, the attribution and your own statement',
           'when it must go, and why then',
           'what happens where intent cannot be established'],
 bank=['Purpose: so that in three years we can establish what we agreed to and what we did not',
       'Scope: the decision of nineteen paragraphs adopted this afternoon; the chair’s procedural rulings are not covered',
       'Inputs: the adopted text, the statements made at adoption, my notes of the drafting group, and our instructions of 2 September',
       'Criteria: four numbered parts — the text as adopted; the provisions that bear two readings, with each reading attributed to the delegation that advanced it; the matters the decision does not cover, including any question deliberately not put; and the precedent the decision creates for this body; our own interpretative statement reproduced in full',
       'Done: with the capital tonight, before anybody else’s account arrives',
       'Fallback: where I cannot establish whether an ambiguity was deliberate, it is listed as ambiguous with the question left open'],
 check=['Are the four parts there?',
        'Is each reading attributed?',
        'Are deliberate silences recorded?',
        'Is our own statement reproduced in full?'],
 model=['so that in three years we can establish what we agreed to and what we did not',
        'the decision of nineteen paragraphs adopted this afternoon; the chair’s procedural rulings are not covered',
        'the adopted text, the statements made at adoption, my notes of the drafting group, and our instructions of 2 September',
        'four numbered parts — the text as adopted; the provisions that bear two readings, with each reading attributed to the delegation that advanced it; the matters the decision does not cover, including any question deliberately not put; and the precedent the decision creates for this body; our own interpretative statement reproduced in full',
        'with the capital tonight, before anybody else’s account arrives',
        'where I cannot establish whether an ambiguity was deliberate, it is listed as ambiguous with the question left open'],
 cost='19 paragraphs summarised, 0 readings attributed, and a silence that becomes implied agreement.'),

lang=dict(
 title='Across the Language Line · A consensus declared in a language some delegations followed in relay',
 setting=[
  'The chair declares consensus in English at four minutes past four. Two delegations are '
  'following through relay, with a lag of some seconds, and hear the declaration after the '
  'gavel has fallen.',
  'One of them had intended to make a short statement before adoption. It now faces the choice '
  'of letting the moment pass or appearing to object after the decision has been taken.'],
 ladder=[('A declaration at four past four', 'in the working language'),
         ('A lag of several seconds', 'in two booths'),
         ('A delegation', 'whose moment has passed')],
 cap='A gavel is instantaneous, and interpretation is not.',
 turns=[('Turn 1 · The chair', 'I see no objection. It is so decided.'),
        ('Turn 2 · A delegation', 'On a point of order, we had asked for the floor before adoption.'),
        ('Turn 3 · The chair', 'The delegation may make its statement after adoption.')],
 holds=['On a point of order, we had asked for the floor before the decision was taken.',
        'We are not objecting to the decision; we wish our statement recorded.',
        'Our booth received the declaration several seconds after the gavel.',
        'Would the chair confirm that a statement after adoption is in order?',
        'With your permission, we shall be brief.',
        'I will record that the delegation’s statement was made after adoption for this reason.'],
 redline='Never let a relay lag cost a delegation its statement, and never let a late statement '
         'appear to be an objection to a decision already taken.',
 score=['Raised it as a point of order, not a substantive objection.',
        'Made clear that the decision was not opposed.',
        'Explained the interpretation lag.',
        'Asked the chair to confirm the position.',
        'Recorded the reason for the late statement.'],
 a=[('When was consensus declared?', 'at four minutes past four'),
    ('What happened in two booths?', 'the declaration arrived after the gavel'),
    ('What had one delegation intended?', 'to make a statement before adoption'),
    ('How should it be raised?', 'on a point of order'),
    ('What must be made clear?', 'that the decision is not opposed'),
    ('What should be recorded?', 'the reason the statement came late')]),

rev_fig=figs.split('AFTER A CONSENSUS',
                   'Covered',
                   ['the adopted paragraphs',
                    'the wording as adopted',
                    'the annexes',
                    'the date of effect'],
                   'Not covered',
                   ['the meaning of a formula',
                    'a matter never raised',
                    'the precedent created',
                    'anything outside the text']),
rev_fig_cap='Four things the gavel settled, and four that will occupy the next three years.',
rev=dict(
 read=[('When was consensus declared?',
        ['at four minutes past four', 'at midnight',
         'on the third day', 'after a vote'], 0),
       ('What does paragraph 12 require?',
        ['appropriate measures in accordance with national circumstances',
         'annual data', 'legislation', 'nothing'], 0),
       ('What does the decision not mention?',
        ['funding', 'reporting', 'the timetable', 'the annexes'], 0),
       ('What does an interpretative statement do?',
        ['records an understanding without reopening the text',
         'reopens the text', 'amends the decision', 'nothing'], 0)],
 listen_text='Require four numbered parts: the text as adopted; the provisions bearing two '
             'readings with each reading attributed; the matters not covered, including any '
             'question deliberately not put; and the precedent created.',
 listen=[('Require four numbered ____________.', 'parts'),
         ('Each reading ____________.', 'attributed'),
         ('The matters not ____________.', 'covered'),
         ('And the ____________ created.', 'precedent')],
 speak=['Make six procedural interventions using the three forms correctly.',
        'Then state your understanding of an ambiguous provision in three sentences.'],
 write='Write a six-line tasking for a post-adoption note.',
 vocab=[('A recorded understanding of a provision is an ____________ declaration.', 'interpretative'),
        ('Wording left unclear on purpose is a ____________ ambiguity.', 'deliberate'),
        ('A formal distancing from a decision is a ____________.', 'disassociation'),
        ('A question deliberately left unput is a question not ____________.', 'asked')],
 gram=[('____________ a point of order, a quorum does not appear to be present.', 'On'),
       ('____________ your permission, the delegation will circulate its statement.', 'With'),
       ('____________ I may say so, the text does not reflect yesterday’s discussion.', 'If'),
       ('____________ a point of order, has the item been formally closed?', 'On')]),

found=['State your own understanding on the record before the item is closed.',
       'Attribute each reading of an ambiguous provision to the delegation that advanced it.',
       'Record what the decision does not cover, including the questions nobody put.',
       'Send the note the same evening, before other accounts reach your capital.'],
end_line='A consensus covers the words. The meanings have to be recorded one by one.',
end_next='Next book: The Public Voice')
