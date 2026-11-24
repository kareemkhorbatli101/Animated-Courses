# -*- coding: utf-8 -*-
import figs

U = dict(
num=9, title='Nuance and the Things That Need a Person',
gram='recording dissent and reservation',
ai='interpretation, nuance and the things that need a person',
strap='CEFR C1 · Grammar: recording dissent · AI: the things that need a person',
cando=['record a dissent so that it survives and can be acted on',
       'enter a reservation without obstructing a decision',
       'say what kind of interpretation requires a person and why',
       'distinguish a judgement that can be shown from one that cannot',
       'write a minute that preserves a disagreement for a successor'],
hero=('I DISAGREE, AND HERE IS WHY',
      ['The assessment was adopted, and the Ministry acted on it.',
       'One paragraph on the file says why one officer thought it wrong.'],
      [(730, 'blue', 'long'), (1390, 'teal', 'short'),
       (2050, 'orange', 'long'), (2690, 'purple', 'short')]),
hero_cap='The file on the Kavaran review, four years after the decision.',

warm=['How does your organisation record a disagreement that does not change a decision?',
      'What do you know about a counterpart that you could not write down?',
      'Who in four years will know that somebody disagreed?'],
read=[
 'An interpretation leaves no trace in a file unless somebody puts it there. In 2022 the Ministry assessed that Kavara would accept a binding review in 2027. The '
 'assessment was reasonable, it was adopted, and the Ministry acted on it for four years.',
 'One officer disagreed. Nadia Barakat, then in Geneva, had sat opposite the Kavaran delegate '
 'for three years and believed that his acceptance in the room had been the acceptance of a man '
 'who expected to be replaced. She could not show this. There was nothing in the record to '
 'point at.',
 'What she did was put a paragraph on the file. It said that she disagreed with the '
 'assessment, that her ground was her reading of one delegate over three years, that she could '
 'not evidence it, and that if Kavara declined the review in 2027 the Ministry should look at '
 'this minute before concluding that it had been misled.',
 'In 2026 Kavara declined. The minute was found by a desk officer who had not been born in the '
 'service when it was written, and it changed what the Ministry concluded: not that Kavara had '
 'broken an undertaking, but that the Ministry had read one delegate wrongly in 2022 and had '
 'been warned.',
 'Karim Dalati uses the minute in training, and not as an example of foresight. He says the '
 'point is the form: it stated the disagreement, the ground, the absence of evidence, and the '
 'circumstance in which it should be re-read. A disagreement recorded without the fourth '
 'element is a disagreement nobody will ever find.'],
c_a=[('What did the Ministry assess in 2022?', 'that Kavara would accept a binding review in 2027'),
     ('Who disagreed, and on what ground?', 'Nadia Barakat, on her reading of one delegate over three years'),
     ('Could she evidence it?', 'no; there was nothing in the record to point at'),
     ('What four things did her minute state?', 'the disagreement, the ground, the absence of evidence, and when it should be re-read'),
     ('What happened in 2026?', 'Kavara declined, and the minute was found by a desk officer'),
     ('What did the minute change?', 'the conclusion: not that Kavara had broken an undertaking but that the Ministry had misread a delegate')],
c_b=[('The 2022 assessment was unreasonable.', 'F'),
     ('Nadia could point to something in the record.', 'F'),
     ('The minute named a circumstance for re-reading.', 'T'),
     ('The desk officer was in the service in 2022.', 'F'),
     ('Karim uses the minute as an example of foresight.', 'F'),
     ('A disagreement without a re-reading circumstance is findable.', 'F')],
c_c=[('The acceptance of a man who expected to be ____________.', 'replaced'),
     ('There was nothing in the record to ____________ at.', 'point'),
     ('Her ground was her ____________ of one delegate over three years.', 'reading'),
     ('Before concluding that it had been ____________.', 'misled'),
     ('A desk officer who had not been ____________ in the service when it was written.', 'born'),
     ('The point is the ____________.', 'form')],
c_d=[('The minute’s value lay in its ( prediction / form ).', ['prediction', 'form'], 1),
     ('How long had Nadia sat opposite the delegate?', ['one year', 'three years', 'four years', 'a month'], 1),
     ('When did Kavara decline?', ['2022', '2026', '2027', 'never'], 1),
     ('What did the Ministry conclude in 2026?', ['that Kavara broke an undertaking', 'that it had misread a delegate', 'nothing', 'that the minute was wrong'], 1),
     ('Which element makes a disagreement findable?', ['the ground', 'the circumstance for re-reading', 'the date', 'the signature'], 1)],
c_e=('Match each form to what it does.',
     [('I disagree with the assessment, for the following reason.', 'records a dissent'),
      ('I agree, subject to one reservation.', 'records a reservation'),
      ('I have nothing to add.', 'records agreement'),
      ('I cannot evidence this.', 'states the limit of the ground'),
      ('This minute should be re-read if X occurs.', 'names the circumstance'),
      ('I do not oppose the decision.', 'declines to obstruct')],
     ['records a dissent', 'records a reservation', 'records agreement',
      'states the limit of the ground', 'names the circumstance', 'declines to obstruct']),

v_fig_title='WHAT ONLY A PERSON HAS',
v_fig=[('people', 'a reading of a counterpart'), ('bulb', 'an experienced judgement'), ('clock', 'a long acquaintance'),
       ('key', 'a tacit understanding'), ('doc', 'a minority minute'), ('shield', 'a reservation on the file')],
v_fig_cap='Six things that exist in one person and vanish with their posting.',
vocab=[
 ('a dissent', 'a recorded disagreement with a decision or assessment'),
 ('a reservation on the file', 'a recorded qualification of one’s agreement'),
 ('a minority minute', 'a note recording the view of one or a few against the rest'),
 ('a note of difference', 'a short record that somebody did not agree'),
 ('an interpretation', 'a reading of what something means rather than what it says'),
 ('a shade of intention', 'a small difference in what somebody meant'),
 ('an implicature', 'what is conveyed without being stated'),
 ('a deniable signal', 'a signal given so that it can be denied'),
 ('a tone of a reply', 'the manner of a reply, carrying part of its meaning'),
 ('a silence as a signal', 'a refusal to speak that conveys something'),
 ('a studied ambiguity', 'an unclarity adopted on purpose'),
 ('a reading of a counterpart', 'a judgement about a particular person formed over time'),
 ('an experienced judgement', 'a judgement resting on long practice rather than evidence'),
 ('a tacit understanding', 'an agreement neither side has stated'),
 ('an unspoken limit', 'a boundary both sides observe without naming'),
 ('a sense of the room', 'an impression of what those present will accept'),
 ('a calibration against a person', 'an adjustment of expectation to one individual'),
 ('a long acquaintance', 'knowledge of somebody built over years of contact'),
 ('an institutional memory of a person', 'what an organisation collectively knows of an individual'),
 ('a judgement that cannot be shown', 'a conclusion for which no evidence can be produced')],
v_a=[('A note recording the view of one against the rest is a ____________.', 'minority minute'),
     ('What is conveyed without being stated is an ____________.', 'implicature'),
     ('An unclarity adopted on purpose is a ____________.', 'studied ambiguity'),
     ('A judgement about a particular person formed over time is a ____________.', 'reading of a counterpart'),
     ('A conclusion for which no evidence can be produced is a ____________.', 'judgement that cannot be shown'),
     ('An agreement neither side has stated is a ____________.', 'tacit understanding'),
     ('A signal given so that it can be denied is a ____________.', 'deniable signal'),
     ('A recorded qualification of one’s agreement is a ____________.', 'reservation on the file')],
v_b=[('A dissent is a recorded disagreement', 'with a decision or assessment.'),
     ('An interpretation is a reading of what something means', 'rather than what it says.'),
     ('A sense of the room is an impression', 'of what those present will accept.'),
     ('A long acquaintance is knowledge of somebody', 'built over years of contact.'),
     ('An unspoken limit is a boundary both sides', 'observe without naming.')],

g_title='Grammar: recording dissent and reservation',
g_rule=['A dissent states the disagreement, the ground, and whether the ground can be '
        'evidenced.',
        'A reservation agrees and qualifies: I agree, subject to one reservation, which is …',
        'Neither obstructs: say expressly that you do not oppose the decision.',
        'A recorded disagreement must name the circumstance in which it should be re-read, or '
        'nobody will find it.'],
g_fig=('LOOSE',
       ['I am not sure about this assessment.',
        'I have some doubts which I have mentioned.',
        'For the record, I was not entirely convinced.',
        'I would have taken a different view.'],
       'PRECISE',
       ['I disagree with the assessment at paragraph 7, on the ground that … ; I cannot '
        'evidence this.',
        'I agree, subject to 1 reservation: the figure at paragraph 9 rests on a single '
        'source.',
        'I do not oppose the decision and ask that this minute be re-read if Kavara declines '
        'the review.',
        'My ground is a reading of 1 delegate over 3 years and cannot be shown.'],
       'four expressions of unease that commit nobody and will be found by nobody',
       'a dissent, a reservation, a non-obstruction and a statement of the ground’s limit'),
g_fig_cap='Unease recorded without a ground and a circumstance is unease that was never '
          'recorded.',
g_a=[('I ____________ with the assessment at paragraph 7.', 'disagree'),
     ('I agree, ____________ to 1 reservation.', 'subject'),
     ('I do not ____________ the decision.', 'oppose'),
     ('I ask that this minute be ____________ if Kavara declines the review.', 're-read'),
     ('My ground is a reading of 1 delegate over 3 years and cannot be ____________.', 'shown'),
     ('I cannot ____________ this.', 'evidence'),
     ('The figure at paragraph 9 ____________ on a single source.', 'rests'),
     ('For the avoidance of doubt, I ____________ no objection to proceeding.', 'raise'),
     ('This minute should be ____________ to my successor.', 'drawn')],
g_b=[('A dissent must state the disagreement, the ground and ( whether it can be evidenced / the date ).', ['whether it can be evidenced', 'the date'], 0),
     ('A reservation', ['opposes', 'agrees and qualifies', 'obstructs', 'withdraws'], 1),
     ('What must a recorded disagreement name?', ['an author', 'the circumstance for re-reading', 'a date', 'a signature'], 1),
     ('Which commits nobody?', ['I disagree, on the ground that …', 'For the record, I was not entirely convinced.', 'I agree, subject to one reservation.', 'I cannot evidence this.'], 1),
     ('Saying you do not oppose the decision', ['withdraws the dissent', 'prevents obstruction', 'deletes the minute', 'is unnecessary'], 1),
     ('Which states the limit of a ground?', ['I am not sure.', 'My ground cannot be shown.', 'I would have taken a different view.', 'I have some doubts.'], 1)],

d1=dict(title='I cannot show it',
        fig=(['You cannot evidence this.', 'No. And I am still right.'],
             ['Then what do you write?', 'All four parts.']),
        cap='Nadia Barakat and Karim Dalati, recalling 2022.',
        lines=[('Karim', 'In 2022 you disagreed with an assessment everybody else accepted, on a '
                         'ground you could not evidence.'),
               ('Nadia', 'I had sat opposite the man for three years. His acceptance in that '
                         'room was the acceptance of somebody who expected to be gone before it '
                         'mattered, and I could not point at a single sentence in the record to '
                         'show it.'),
               ('Karim', 'Most officers in that position say nothing.'),
               ('Nadia', 'Most officers in that position say something in a corridor and nothing '
                         'on a file, which is the same as nothing. I had done that twice before '
                         'and been right once, and nobody ever knew.'),
               ('Karim', 'What made you write it down?'),
               ('Nadia', 'A head of mission told me in my second posting that a judgement you '
                         'cannot evidence is still a judgement, and that the only thing that '
                         'disqualifies it is pretending it is evidence.'),
               ('Karim', 'Your minute says four things. Which of them matters most?'),
               ('Nadia', 'The last one. The disagreement, the ground and the admission that I '
                         'could not prove it are all honest and would have sat on the file '
                         'unread for ever. The sentence that says look at this if Kavara '
                         'declines the review is what made somebody find it in 2026.'),
               ('Karim', 'A desk officer who was not in the service when you wrote it.'),
               ('Nadia', 'Which is the whole point of a file. I was not trying to be '
                         'vindicated. I was trying to make sure that if the Ministry was '
                         'surprised in 2027, it would be surprised accurately.')],
        a=[('What was Nadia’s ground?', 'three years sitting opposite one delegate'),
           ('What do most officers do instead?', 'say something in a corridor and nothing on a file'),
           ('What had a head of mission told her?', 'that a judgement you cannot evidence is still a judgement unless you pretend it is evidence'),
           ('Which of the four elements matters most?', 'the circumstance in which the minute should be re-read'),
           ('What was she trying to achieve?', 'that if the Ministry were surprised, it would be surprised accurately')],
        b=[('Somebody who expected to be ____________ before it mattered.', 'gone'),
           ('The only thing that disqualifies it is pretending it is ____________.', 'evidence'),
           ('Would have sat on the file ____________ for ever.', 'unread'),
           ('It would be surprised ____________.', 'accurately')]),
d2=dict(title='What cannot be written down',
        fig=(['Your reading was right.', 'And I still cannot show it.'],
             ['Could it be recorded better?', 'It could be recorded. Not transferred.']),
        cap='Nadia and Maya Sarkis.',
        lines=[('Maya', 'Your minute worked. Could the reading itself have been recorded, so '
                        'that a successor had it rather than a warning about it?'),
               ('Nadia', 'I have thought about this for four years and I do not think so. What I '
                         'had was three years of watching one man in rooms: when he looked away, '
                         'what he conceded easily, which of his own instructions he plainly did '
                         'not believe.'),
               ('Maya', 'All of which could be written.'),
               ('Nadia', 'Each sentence of it can be written and the whole cannot be '
                         'transferred. If I write he concedes procedural points easily and '
                         'never concedes a date, my successor has a rule and not a reading, and '
                         'when the man behaves differently in the fourth round my successor does '
                         'not know whether the rule is wrong or the behaviour is significant.'),
               ('Maya', 'That is an argument against writing it at all.'),
               ('Nadia', 'It is an argument against believing that writing it is the same as '
                         'having it, which is a different thing. I wrote eleven pages for my '
                         'successor and I believe they were worth writing and that she inherited '
                         'about a tenth of what I had.'),
               ('Maya', 'Does that mean a service loses a reading every time an officer moves?'),
               ('Nadia', 'Every time, and it always has. What has changed is that we now have a '
                         'great deal of material that looks like a reading, and a successor who '
                         'opens eleven pages and a chronology and four summaries may believe she '
                         'has inherited something she has not.'),
               ('Maya', 'Which is worse than knowing you have nothing.'),
               ('Nadia', 'I think it is worse, and I cannot propose a remedy. I have written the '
                         'eleven pages and I have written at the top of them that they are a '
                         'tenth of what I had, which is the most honest sentence in the '
                         'handover and will probably be read as modesty.')],
        a=[('Could the reading itself be recorded?', 'it can be recorded and not transferred'),
           ('What was Nadia’s material?', 'three years of watching one man in rooms'),
           ('What does a successor get from a written rule?', 'a rule and not a reading, with no way to tell a wrong rule from significant behaviour'),
           ('What has changed?', 'that there is now a great deal of material that looks like a reading'),
           ('Is there a remedy?', 'no; she has written at the top that the pages are a tenth of what she had')],
        b=[('Which of his own ____________ he plainly did not believe.', 'instructions'),
           ('A rule and not a ____________.', 'reading'),
           ('She inherited about a ____________ of what I had.', 'tenth'),
           ('Will probably be read as ____________.', 'modesty')],
        unresolved=True),

speak=[('Record a dissent',
        ['Student A: state a decision in your work you would have taken differently.',
         'Student B: help them record it in four parts, including the re-reading circumstance.',
         'Say whether the ground can be evidenced.']),
       ('What you cannot show',
        ['Name something you know about a counterpart or a client that you cannot evidence.',
         'Say how you came to know it.',
         'Say what you would write for a successor.']),
       ('A tenth of what you had',
        ['Describe a handover you have given or received.',
         'Say what proportion was actually transferred.',
         'Say what was lost and whether anybody noticed.'])],

ext_title='A judgement that cannot be evidenced is still a judgement; what disqualifies it is '
          'presenting it as evidence',
ext_fig=figs.datatable('THE 2022 MINUTE, IN FOUR PARTS',
                       ['Element', 'What it said', 'Why it mattered'],
                       [['the disagreement', 'the assessment at paragraph 7 is wrong', 'identifies the target'],
                        ['the ground', 'a reading of 1 delegate over 3 years', 'shows what it rests on'],
                        ['the limit', 'this cannot be evidenced', 'prevents it being taken as proof'],
                        ['the circumstance', 're-read if Kavara declines', 'made somebody find it in 2026'],
                        ['the non-obstruction', 'I do not oppose the decision', 'allowed the Ministry to proceed'],
                        ['the outcome in 2026', 'the conclusion changed', 'not misled, but warned']]),
ext_fig_cap='Four elements and a fifth that kept the dissent from blocking anything.',
ext=[
 'Every ministry contains judgements that cannot be evidenced. An officer who has sat opposite '
 'the same delegate for three years knows things about him that are in no document: what he '
 'concedes easily, which of his own instructions he does not believe, what his acceptance '
 'sounds like when he expects to be replaced before the commitment matters. This knowledge is '
 'real, it is frequently right, and it cannot be shown.',
 'The institutional response to such a judgement has historically been to say it in a corridor '
 'and not on a file, which has exactly the effect of not having it. An officer who was right '
 'in 2022 and said so only in conversation has contributed nothing, and the ministry that acts '
 'on the majority assessment and is surprised in 2026 concludes that it was misled rather '
 'than that it was warned.',
 'What makes such a judgement recordable is a form with four elements. The disagreement, '
 'identified by paragraph. The ground, stated as what it is: a reading of one person over a '
 'period. The limit, stated expressly: this cannot be evidenced. And the circumstance in which '
 'the minute should be re-read, which is the element officers omit and the only one that makes '
 'the minute findable, because nobody reads a file in order to discover a dissent. A fifth '
 'element, that the writer does not oppose the decision, is what prevents the dissent from '
 'being treated as obstruction and quietly discouraged.',
 'This machinery records a disagreement and does not transfer the reading behind it, and that '
 'distinction is worth holding. Each sentence of what an officer knows about a counterpart can '
 'be written down; the whole cannot be handed over. A successor given the rule that he never '
 'concedes a date has a rule, and when the man concedes a date in the fourth round she cannot '
 'tell whether the rule was wrong or the concession is significant, which is precisely the '
 'judgement the original officer would have made in a second.',
 'A service has always lost a reading when an officer moves. What is new is the volume of '
 'material that resembles one: a handover note, a chronology, four summaries and a '
 'well-indexed file can leave a successor believing she has inherited a reading when she has '
 'inherited a tenth of it. The only honest device available is to say so at the top of the '
 'handover, and to expect that sentence to be read as modesty.'],
dp1=('Recording dissent',
     'Several foreign ministries adopted structured dissent minutes in 2025, requiring a stated '
     'ground, an express statement of whether it can be evidenced, and the circumstance in '
     'which the minute is to be re-read.',
     'Source: reported practice in diplomatic analytical governance, 2025–2026.'),
e_a=[('What does an officer know that is in no document?', 'what a delegate concedes easily and which of his instructions he does not believe'),
     ('What has the historical response been?', 'to say it in a corridor and not on a file'),
     ('What are the four elements?', 'the disagreement, the ground, the limit, and the circumstance for re-reading'),
     ('Which element is omitted and why does it matter?', 'the circumstance; nobody reads a file to discover a dissent'),
     ('What does the machinery not do?', 'transfer the reading behind the disagreement')],
e_b=[('An unevidenced judgement is worthless.', 'F'),
     ('A corridor remark contributes as much as a minute.', 'F'),
     ('The circumstance element is the one usually included.', 'F'),
     ('A rule handed to a successor is a reading.', 'F'),
     ('Services have always lost a reading when officers move.', 'T'),
     ('Abundant material can create a false sense of inheritance.', 'T')],

w_model=(
 'Purpose: record a disagreement with an adopted assessment so that it can be found by an '
 'officer who does not know it exists. Scope: assessments adopted by the Ministry on which the '
 'writer holds a different view; disagreements about drafting or presentation are out of scope. '
 'Inputs: the assessment, the writer’s own ground, and the file. Criteria: identify the '
 'paragraph disagreed with; state the ground and what kind of ground it is; state expressly '
 'whether it can be evidenced and, if not, say so; name the circumstance in which the minute '
 'is to be re-read; state whether the writer opposes the decision. Done: 1 minute of no more '
 'than 1 page, placed on the file and drawn to the attention of the writer’s successor. '
 'Fallback: where the writer cannot name a circumstance for re-reading, the minute is to be '
 'reviewed with the head of section before it is filed.'),
w_fig=figs.spec_card('THE TASKING FOR A DISSENT MINUTE',
                     [('Purpose', 'findable by an officer who does not know it exists'),
                      ('Scope', 'adopted assessments; drafting disagreements excluded'),
                      ('Inputs', 'the assessment, the ground, the file'),
                      ('Criteria', 'the paragraph, the ground, the limit, the circumstance, non-obstruction'),
                      ('Done', '1 page on the file, drawn to a successor’s attention'),
                      ('Fallback', 'no circumstance nameable: review with the head of section')]),
w_fig_cap='Name the circumstance: a dissent nobody will look for is a dissent nobody will find.',
w_task='Write a dissent tasking for your own organisation.',
w_steps=['Say who must be able to find the minute.',
         'Name what may be dissented from and what may not.',
         'Require the ground and its kind.',
         'Require an express statement about evidence.',
         'Require the circumstance for re-reading.'],
w_bank=['Record … so that it can be found by …',
        'Cover … ; … are out of scope.',
        'Work from … , … and …',
        'Identify … ; state … and what kind … ; state expressly whether … ; name … ; state whether …',
        'Where the writer cannot name … , the minute is to be …'],
w_check=['Is the circumstance for re-reading required?',
         'Must the writer say whether the ground can be evidenced?',
         'Is non-obstruction stated expressly?',
         'Is the minute drawn to a successor’s attention?'],

t_title='Interpretation, nuance and the things that need a person',
t_fig=figs.split('A DISSENT MINUTE',
                 'Must contain',
                 ['the paragraph disagreed with',
                  'the ground, and its kind',
                  'whether it can be evidenced',
                  'the circumstance for re-reading'],
                 'Cannot contain',
                 ['the reading itself',
                  'three years of watching one man',
                  'a rule that survives new behaviour',
                  'anything a successor can simply inherit']),
t_fig_cap='The left column is a form and can be taught. The right column is why the minute is '
          'needed.',
t_body=[
 'Interpretation of this kind, the nuance a person carries, cannot be evidenced and is frequently right. An officer who has faced the '
 'same delegate for three years knows what his acceptance sounds like when he expects to be '
 'replaced, and can point at nothing. The institutional habit is to say such a thing in a '
 'corridor, which has the same effect as not saying it: the Ministry acts on the majority view '
 'and, when surprised four years later, concludes that it was misled rather than warned.',
 'So record it in a form with four parts: the paragraph, the ground and what kind of ground it '
 'is, an express statement that it cannot be evidenced, and the circumstance in which the '
 'minute should be re-read. Add a fifth — that you do not oppose the decision — so that a '
 'dissent is not treated as obstruction. The fourth is the part officers omit and the only one '
 'that makes the minute findable, because nobody opens a file looking for a disagreement.',
 'Then hold the distinction between recording a judgement and transferring it. Every sentence '
 'of what an officer knows about a counterpart can be written; the whole cannot be handed on. '
 'A successor given he never concedes a date has a rule, and when he concedes one she cannot '
 'tell whether the rule was wrong or the concession matters. Services have always lost a '
 'reading when an officer moves. What is new is the quantity of material that resembles one, '
 'and the only honest device is to write at the top of a handover that it is a tenth of what '
 'you had.'],
t_say=[('Record all four: ', 'The paragraph, the ground, the limit, and when to re-read this.'),
       ('Decline to obstruct: ', 'I do not oppose the decision.'),
       ('Admit the transfer: ', 'These 11 pages are about a tenth of what I had.')],
t_bound=('A minute can record that somebody disagreed and why, and cannot transfer the reading '
         'the disagreement rested on. A rule written for a successor is not the judgement that '
         'produced it, and abundant handover material can leave a successor believing she has '
         'inherited a reading she has not. No form reaches this, and the only available '
         'honesty is to say how much is missing.'),
t_a=[('The paragraph, the ground, the limit, and when to ____________ this.', 're-read'),
     ('The writer states that he does not ____________ the decision.', 'oppose'),
     ('These 11 pages are about a ____________ of what I had.', 'tenth'),
     ('Concludes that it was misled rather than ____________.', 'warned'),
     ('Nobody opens a file looking for a ____________.', 'disagreement'),
     ('A rule written for a successor is not the ____________ that produced it.', 'judgement')],
t_b_rubric='Rewrite each as a recorded dissent or reservation with its ground.',
t_b=[('I am not sure about this assessment.', 'I disagree with the assessment at paragraph 7, on the ground that … ; I cannot evidence this'),
     ('I have some doubts which I have mentioned.', 'I agree, subject to one reservation: the figure at paragraph 9 rests on a single source'),
     ('For the record, I was not entirely convinced.', 'I do not oppose the decision and ask that this minute be re-read if Kavara declines the review'),
     ('I would have taken a different view.', 'my ground is a reading of one delegate over three years and cannot be shown')],

case=dict(
 title='The Decision Room · How many minutes',
 brief=[
  'The dissent minute has been adopted. In its first year 14 were written, of which 9 named a '
  'circumstance for re-reading.',
  'Two heads of section have told Karim privately that officers in their sections are reluctant '
  'to write them, because a recorded disagreement with a head of section’s assessment is '
  'remembered.',
  'Nadia proposes that a minute go to the file without the head of section seeing it. Samir '
  'Haddad says a document on a file that the section head has not seen is a document that will '
  'surprise somebody badly. Hana asks how many minutes a healthy section would produce.'],
 exhibit=figs.datatable('THE FIRST YEAR',
                        ['', 'Figure', 'Note'],
                        [['minutes written', '14', 'across 11 sections'],
                         ['naming a circumstance', '9', '—'],
                         ['written by officers below first secretary', '3', '—'],
                         ['sections producing none', '6 of 11', '—'],
                         ['minutes disagreeing with a head of section', '2', '—'],
                         ['minutes later found useful', 'not yet known', 'too early'],
                         ]),
 exhibit_cap='Six sections produced none, and three of the fourteen came from junior officers.',
 exhibit_note='The 2 minutes disagreeing with a head of section were both written by officers '
              'at or above first secretary.',
 voices=[('Nadia Barakat', 'Multilateral Affairs, Geneva',
          'A minute that has to pass the person it disagrees with is not a dissent. Let it go '
          'to the file directly, with a copy to the head of section after filing.'),
         ('Samir Haddad', 'Legal and Treaties',
          'A document on a file that the head of section has not seen will be produced in four '
          'years against a decision he took, and he will say, correctly, that he was never '
          'shown it. That is a procedural unfairness and it will be the end of the scheme.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Both of those are about the mechanism. I want to know what number is healthy. '
          'Fourteen in a year across eleven sections is either a service that mostly agrees or '
          'a service that mostly keeps quiet, and nothing in the figure tells us which.')],
 steps=[('Find it', 'How many sections produced no minutes?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Samir object to filing without sight?'),
        ('Weigh it', 'A dissent that is seen against a dissent that is written.'),
        ('Decide', 'How does a minute reach the file, and what is measured?')],
 analysis=[('Find it. How many of eleven sections produced none?', 'six'),
           ('Compare it. What does Nadia propose?', 'that a minute go to the file directly, with a copy afterwards'),
           ('Infer it. What is Samir’s objection?', 'that a head of section will rightly say he was never shown it'),
           ('Weigh it. Who wrote the two minutes disagreeing with a head of section?', 'officers at or above first secretary'),
           ('Decide. What would you do?', 'answers vary; simultaneous filing and copying meets both objections')],
 decision='Write how a dissent minute reaches the file.',
 decision_steps=['Say how the minute is filed and who sees it.',
                 'Say whether it may be amended after filing.',
                 'Say what is recorded about sections producing none.',
                 'Say what would indicate that the scheme is not working.'],
 bank=['A minute is filed … and copied …',
       'After filing a minute may …',
       'Where a section produces no minute in a year, …',
       'The scheme is not working if …',
       'This is reviewed …'],
 outcome='A minute is filed and copied to the head of section in the same action, so that '
         'neither can prevent the other, and may not be amended after filing except by a '
         'further minute. Sections producing none in a year are not asked to explain, which '
         'Hana opposed and accepted; what is recorded instead is the number by grade, and the '
         'figure that would indicate failure was stated in advance as fewer than three minutes '
         'from officers below first secretary in any year. In the second year the total rose to '
         'twenty-three, of which seven came from below first secretary. Samir says the '
         'simultaneous copy was the whole answer and that he had been arguing against a '
         'mechanism nobody had actually proposed.',
 outcome_q=[('How is a minute filed?', 'filed and copied to the head of section in the same action, amendable only by a further minute'),
            ('What figure would indicate failure?', 'fewer than three minutes a year from officers below first secretary')],
 tags=[]),

lab=dict(
 title='Brief Lab · Record your disagreement',
 task=['This is the guidance on recording disagreement that stood before 2025, in the Ministry’s '
       'staff instructions.',
       'Under it, officers recorded eleven disagreements in nine years, none of which was ever '
       'found again.'],
 draft=['Officers may record a disagreement with an assessment.',
        'Set out the reasons.',
        'Keep it brief and professional.',
        'Place it on the relevant file.',
        'Inform the head of section.',
        'Avoid repetition of points already made.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and nothing in them tells anybody when to look.',
 asked=['The circumstance in which the minute is to be re-read',
        'An express statement about evidence',
        'A statement of non-obstruction'],
 back=['11 minutes in 9 years',
       'All of them honest and none ever found',
       'No statement of when any of them should be re-read'],
 gap='"May record" makes it optional, "set out the reasons" does not ask what kind of reason, '
     '"brief and professional" invites a shorter minute than the ground requires, and nothing '
     'names a future circumstance or disclaims obstruction.',
 back_cap='Eleven honest minutes, correctly filed, read by nobody in nine years.',
 back_note='Line four is where it ends. A minute placed on a file with no circumstance attached '
           'is a minute that will be found only by somebody reading the file for another '
           'reason.',
 diagnosis=[('[1] "a disagreement with an assessment" — with which paragraph of it?', 'ambiguous referent'),
            ('[2] "set out the reasons" — and whether they can be evidenced?', 'hidden assumption'),
            ('[3] "brief and professional" — brief enough to omit the ground?', 'unstated exception'),
            ('[4] "place it on the relevant file" — assumes somebody will read the file', 'hidden assumption'),
            ('[5] "inform the head of section" — before or after filing?', 'ambiguous referent'),
            ('[6] nothing on obstruction — does a minute delay the decision?', 'unstated exception')],
 rewrite='Rewrite the guidance so that a minute is findable and does not obstruct.',
 scaffold=['Who must be able to find the minute',
           'What may be dissented from and what may not',
           'The assessment, the ground and the file',
           'The paragraph, the ground and its kind, the evidence statement, the circumstance, non-obstruction',
           'One page on the file, drawn to a successor’s attention',
           'What to do where no circumstance can be named'],
 bank=['Record … so that it can be found by …',
       'Cover … ; … are out of scope.',
       'Work from … , … and …',
       'Identify … ; state … ; state expressly whether … ; name … ; state whether …',
       'Return 1 minute of … , placed … and drawn …',
       'Where … cannot name … , the minute is to be …'],
 check=['Is the paragraph identified?',
        'Is an express evidence statement required?',
        'Is a re-reading circumstance required?',
        'Is non-obstruction stated?'],
 model=['Record a disagreement with an adopted assessment so that it can be found by an officer who does not know it exists',
        'Assessments adopted by the Ministry on which the writer holds a different view; disagreements about drafting or presentation are out of scope',
        'The assessment, the writer’s own ground, and the file',
        'Identify the paragraph disagreed with; state the ground and what kind of ground it is; state expressly whether it can be evidenced and, if not, say so; name the circumstance in which the minute is to be re-read; state whether the writer opposes the decision',
        '1 minute of no more than 1 page, placed on the file and drawn to the attention of the writer’s successor',
        'Where the writer cannot name a circumstance for re-reading, the minute is to be reviewed with the head of section before it is filed'],
 cost='11 recorded disagreements in 9 years, every one of them honest, none of them ever read '
      'by the officer who needed it.'),

rev_fig=figs.split('DISSENT',
                   'Unfindable',
                   ['I am not sure about this.',
                    'I have some doubts.',
                    'For the record, I was unconvinced.',
                    'I would have taken a different view.'],
                   'Recorded',
                   ['I disagree with paragraph 7, on the ground that …',
                    'I agree, subject to 1 reservation …',
                    'I do not oppose the decision.',
                    'Re-read this if Kavara declines the review.']),
rev_fig_cap='The disagreement, the ground, the limit, the circumstance, and no obstruction.',
rev=dict(
 read=[('Nadia’s ground was', ['a document', 'three years opposite one delegate', 'a precedent', 'a figure'], 1),
       ('The element officers omit is', ['the ground', 'the circumstance for re-reading', 'the paragraph', 'the signature'], 1),
       ('A rule given to a successor is', ['a reading', 'not a reading', 'evidence', 'a dissent'], 1),
       ('In the Decision Room, how is a minute filed?', ['after the head of section sees it', 'filed and copied in the same action', 'secretly', 'by the Director'], 1)],
 listen_text='A successor given the rule that he never concedes a date has a rule, and when '
             'the man concedes a date in the fourth round she cannot tell whether the rule was '
             'wrong or the concession is significant.',
 listen=[('He never concedes a ____________.', 'date'),
         ('In the fourth ____________.', 'round'),
         ('She cannot ____________ whether the rule was wrong.', 'tell'),
         ('Or the concession is ____________.', 'significant')],
 speak=['Record one disagreement of your own in four parts.',
        'Say what you know that you could not transfer to a successor.'],
 write='Write one line naming the circumstance in which a minute should be re-read.',
 vocab=[('A note recording the view of one against the rest is a ____________.', 'minority minute'),
        ('What is conveyed without being stated is an ____________.', 'implicature'),
        ('A judgement about a particular person formed over time is a ____________.', 'reading of a counterpart'),
        ('A conclusion for which no evidence can be produced is a ____________.', 'judgement that cannot be shown'),
        ('A signal given so that it can be denied is a ____________.', 'deniable signal')],
 gram=[('I ____________ with the assessment at paragraph 7.', 'disagree'),
       ('I agree, ____________ to 1 reservation.', 'subject'),
       ('I do not ____________ the decision.', 'oppose'),
       ('I ask that this minute be ____________ if Kavara declines the review.', 're-read'),
       ('My ground is a reading of 1 delegate over 3 years and cannot be ____________.', 'shown')]),

found=['Record one disagreement you hold, in four parts.',
       'Name the circumstance in which somebody should re-read it.',
       'Write one thing about a counterpart that you could not evidence.',
       'Say what proportion of your knowledge a handover would transfer.'],
end_line='It would have been surprised accurately, which is the most a file can do.',
end_next='Next: The Part That Cannot Be Delegated',
)
