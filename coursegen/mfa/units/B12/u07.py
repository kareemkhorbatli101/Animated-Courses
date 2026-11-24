# -*- coding: utf-8 -*-
import figs

U = dict(
num=7, title='One Shape for Every Record',
gram='the passive, past and present perfect',
ai='templates: one shape for every record of conversation',
strap='CEFR B1 · Grammar: the passive, past and present perfect · AI: templates',
cando=['form the passive in the past and the present perfect',
       'choose the passive where the actor is unknown or unimportant',
       'say what a template gains and what it quietly forbids',
       'design a template with a field for what does not fit',
       'task a drafting step to fill a template without inventing'],
hero=('EVERY RECORD THE SAME SHAPE',
      ['Nine fields, in the same order, on every record of conversation.',
       'And nowhere to put the thing that mattered.'],
      [(730, 'purple', 'long'), (1390, 'teal', 'short'),
       (2050, 'blue', 'long'), (2690, 'orange', 'short')]),
hero_cap='The Ministry template, as it stood between March and November.',

warm=['Does your office use a standard form for any document? Which?',
      'What does a form make easy, and what does it make hard?',
      'Have you ever left something out of a document because there was no box for it?'],
read=[
 'Until last year the Ministry’s records of conversation were written in whatever shape the '
 'drafter chose. Some ran to four pages and some to four lines. A desk officer reading a '
 'year of them could not tell whether an item had been omitted or had not arisen.',
 'In March a template was approved. Nine fields, in a fixed order: date, place, participants, '
 'subject, what was raised by the other side, what was said by the Ministry, what was agreed, '
 'action, and distribution. A drafting step fills the nine fields from the officer’s notes '
 'and the officer corrects them.',
 'The gain has been large and quick. Records are now comparable, they have been indexed '
 'without difficulty, and a reader can see at once that a field is empty rather than '
 'wondering whether the drafter forgot.',
 'Then in July an officer returned from a meeting in Halmar at which nothing was agreed, '
 'nothing was raised and nothing was said that could be written in field six. What had '
 'happened was that the Halmari side had arrived two hours late, with a delegation of three '
 'rather than the nine notified, and had left after twenty minutes.',
 'None of that fits a field. The officer recorded the date, the place, the participants and '
 'the subject, left five fields empty, and filed it. The record has since been read by four '
 'people, and not one of them understood that something remarkable had occurred.'],
c_a=[('What was the problem before March?', 'records were written in whatever shape the drafter chose'),
     ('How many fields does the template have?', 'nine, in a fixed order'),
     ('What fills the fields?', 'a drafting step, from the officer’s notes, corrected by the officer'),
     ('What has the template gained?', 'records are comparable and have been indexed without difficulty'),
     ('What happened in Halmar?', 'the other side arrived two hours late with three delegates instead of nine, and left after twenty minutes'),
     ('What did four readers not understand?', 'that something remarkable had occurred')],
c_b=[('Some old records ran to four lines.', 'T'),
     ('The template has eleven fields.', 'F'),
     ('The officer fills the fields and the step corrects them.', 'F'),
     ('Nine Halmari delegates had been notified.', 'T'),
     ('The Halmar record was never read.', 'F'),
     ('The empty fields made the lateness clear.', 'F')],
c_c=[('A desk officer could not tell whether an item had been ____________.', 'omitted'),
     ('Nine fields, in a ____________ order.', 'fixed'),
     ('Records have been ____________ without difficulty.', 'indexed'),
     ('The Halmari side arrived two hours ____________.', 'late'),
     ('The officer left five fields ____________.', 'empty'),
     ('Something ____________ had occurred.', 'remarkable')],
c_d=[('The template made records ( complete / comparable ).', ['complete', 'comparable'], 1),
     ('How many Halmari delegates arrived?', ['nine', 'three', 'two', 'twenty'], 1),
     ('How long did the Halmari side stay?', ['two hours', 'twenty minutes', 'a day', 'nine minutes'], 1),
     ('What did the officer do with five fields?', ['invented content', 'left them empty', 'deleted them', 'merged them'], 1),
     ('What does an empty field now tell a reader?', ['the drafter forgot', 'the field is empty', 'nothing happened at all', 'the record is void'], 1)],
c_e=('Active or passive? Put each in the right column.',
     [('A template was approved in March.', 'passive'),
      ('The officer filed the record.', 'active'),
      ('Records have been indexed easily.', 'passive'),
      ('Nine delegates had been notified.', 'passive'),
      ('Four people read it.', 'active'),
      ('Nothing was agreed.', 'passive')],
     ['active', 'passive']),

v_fig_title='THE PARTS OF A FORM',
v_fig=[('doc', 'a template'), ('key', 'a mandatory field'), ('book', 'a rubric'),
       ('pin', 'a placeholder'), ('chart', 'a layout'), ('bulb', 'an exception field')],
v_fig_cap='Six words for the shape a document is poured into.',
vocab=[
 ('a template', 'a fixed shape a document is written into'),
 ('a boilerplate', 'standard wording reused without change'),
 ('a variable', 'the part of a template that differs each time'),
 ('to populate', 'to put content into the parts of a template'),
 ('a placeholder', 'a mark showing where content is still to come'),
 ('uniformity', 'the quality of all examples having the same shape'),
 ('a mandatory field', 'a part that must be completed before filing'),
 ('an optional field', 'a part that may be left empty'),
 ('a free-text box', 'a space in which anything may be written'),
 ('a drop-down list', 'a fixed set of choices offered for one field'),
 ('a form', 'a document whose shape is given and whose content is supplied'),
 ('to standardise', 'to make many things follow one rule'),
 ('a schema', 'the definition of what fields exist and what each holds'),
 ('a layout', 'the arrangement of parts on the page'),
 ('a sequence of headings', 'the order in which the parts appear'),
 ('a rubric', 'the instruction printed beside a field'),
 ('a pro forma', 'a blank document circulated to be completed'),
 ('to pre-fill', 'to supply a field’s content before the drafter starts'),
 ('a default', 'the value a field takes unless it is changed'),
 ('an exception field', 'a part kept for what the other fields cannot hold')],
v_a=[('A part that must be completed before filing is a ____________.', 'mandatory field'),
     ('The definition of what fields exist is a ____________.', 'schema'),
     ('The instruction printed beside a field is a ____________.', 'rubric'),
     ('A blank document circulated to be completed is a ____________.', 'pro forma'),
     ('The value a field takes unless it is changed is a ____________.', 'default'),
     ('A part kept for what the other fields cannot hold is an ____________.', 'exception field'),
     ('Standard wording reused without change is a ____________.', 'boilerplate'),
     ('To supply a field’s content before the drafter starts is to ____________.', 'pre-fill')],
v_b=[('A template is a fixed shape', 'a document is written into.'),
     ('To populate is to put content', 'into the parts of a template.'),
     ('Uniformity is the quality of all examples', 'having the same shape.'),
     ('A drop-down list is a fixed set of choices', 'offered for one field.'),
     ('A layout is the arrangement', 'of parts on the page.')],

g_title='Grammar: the passive, past and present perfect',
g_rule=['Past simple passive: was or were plus the past participle.',
        'Present perfect passive: has or have been plus the past participle.',
        'Use the passive where the actor is unknown, obvious or not the point.',
        'Name the actor with by where the reader needs it: was approved by the Director.'],
g_fig=('LOOSE',
       ['Somebody approved a template in March.',
        'They have indexed the records easily.',
        'Somebody had notified nine delegates.',
        'We agreed nothing.'],
       'PRECISE',
       ['A template was approved in March.',
        'The records have been indexed without difficulty.',
        'Nine delegates had been notified.',
        'Nothing was agreed.'],
       'four actors who are either unknown or not the point',
       'four passives in which the event is the subject'),
g_fig_cap='The passive is not evasion here; in a record the event is the subject.',
g_a=[('A template ____________ (approve) in March.', 'was approved'),
     ('The records ____________ (index) without difficulty.', 'have been indexed'),
     ('Nine delegates ____________ (notify) before the meeting.', 'had been notified'),
     ('Nothing ____________ (agree) at the meeting.', 'was agreed'),
     ('The record ____________ (read) by four people since July.', 'has been read'),
     ('Five fields ____________ (leave) empty.', 'were left'),
     ('The convention ____________ (circulate) to all posts.', 'has been circulated'),
     ('The meeting ____________ (hold) in Halmar.', 'was held'),
     ('An exception field ____________ (add) since November.', 'has been added')],
g_b=[('Use the passive where the actor is ( not the point / the point ).', ['not the point', 'the point'], 0),
     ('A template ____ in March.', ['has approved', 'was approved', 'was approve', 'is approving'], 1),
     ('The records ____ without difficulty.', ['have indexed', 'have been indexed', 'has been indexed', 'were indexing'], 1),
     ('Nine delegates ____ before the meeting.', ['had notified', 'had been notified', 'have notify', 'were notify'], 1),
     ('Name the actor with', ['of', 'by', 'from', 'with'], 1),
     ('Which is present perfect passive?', ['was read', 'has been read', 'had read', 'is reading'], 1)],

d1=dict(title='There is no field for it',
        fig=(['Field six is empty.', 'Because nothing was said.'],
             ['And the two hours?', 'There is no field for the two hours.']),
        cap='Omar Nasri and the officer who returned from Halmar.',
        lines=[('Omar', 'Your Halmar record has five empty fields.'),
               ('Officer', 'Because nothing was raised, nothing was said, nothing was agreed, '
                           'no action follows and there is nothing to distribute.'),
               ('Omar', 'Then what happened?'),
               ('Officer', 'They came two hours late. Three of them came instead of nine. They '
                           'stayed twenty minutes and left.'),
               ('Omar', 'That is the most important thing in the file and it is nowhere in the '
                        'record.'),
               ('Officer', 'There is no field for it. I thought about writing it in the subject '
                           'line and decided that was not what a subject line is.'),
               ('Omar', 'You were right about the subject line and wrong about stopping there.'),
               ('Officer', 'What should I have done? The template was approved in March and '
                           'circulated with an instruction that the fields are not to be '
                           'altered.'),
               ('Omar', 'You should have written a covering minute and attached it.'),
               ('Officer', 'Nobody has ever told me that, and the template has been in use '
                           'since March.'),
               ('Omar', 'I know. Four people have read your record and none of them noticed '
                        'anything, which means the template has now cost us a piece of '
                        'intelligence.'),
               ('Officer', 'Then the template needs a field, not a covering minute that nobody '
                           'will remember to write.')],
        a=[('How many fields were empty?', 'five'),
           ('What actually happened in Halmar?', 'they came two hours late, three instead of nine, and left after twenty minutes'),
           ('Why did the officer not use the subject line?', 'because that is not what a subject line is for'),
           ('What does Omar say should have been done?', 'a covering minute, attached to the record'),
           ('What does the officer propose instead?', 'that the template needs a field')],
        b=[('The template was approved in ____________.', 'March'),
           ('The fields are not to be ____________.', 'altered'),
           ('The template has now cost us a piece of ____________.', 'intelligence'),
           ('A covering minute that nobody will remember to ____________.', 'write')]),
d2=dict(title='Uniformity was the whole point',
        fig=(['Add a tenth field.', 'Then it is not a template.'],
             ['It is a template with ten fields.', 'It is a template with a free-text box.']),
        cap='Tarek Zayed, who owns the template, and Omar Nasri.',
        lines=[('Omar', 'We want a tenth field. Anything the other nine cannot hold.'),
               ('Tarek', 'A free-text box, in other words.'),
               ('Omar', 'Yes.'),
               ('Tarek', 'Then within a year every record will have four lines in fields one to '
                         'nine and two pages in field ten, and we will be back where we were in '
                         'February. Uniformity was the whole point.'),
               ('Omar', 'Uniformity was not the point. Comparability was the point, and '
                        'uniformity was how we got it.'),
               ('Tarek', 'That distinction will not survive contact with four hundred drafters.'),
               ('Omar', 'It will if the field is bounded. Fifty words. Headed: what the other '
                        'nine fields do not record. Mandatory to consider, optional to fill.'),
               ('Tarek', 'Fifty words is a sentence and a half. You cannot put a negotiation in '
                         'fifty words.'),
               ('Omar', 'You are not meant to. You are meant to put in the one fact a reader '
                        'would otherwise miss. The Halmar record needed eleven words.'),
               ('Tarek', 'Show me a year of them and I will believe the fifty holds.'),
               ('Omar', 'I will. And if it does not hold, you cut it and we will have lost a '
                        'year.'),
               ('Tarek', 'That is a fair bet. I still think you are underestimating what a '
                         'free-text box does to a form.')],
        a=[('What does Omar want?', 'a tenth field for anything the other nine cannot hold'),
           ('What is Tarek’s objection?', 'that every record will end up as two pages in field ten'),
           ('What distinction does Omar draw?', 'comparability was the point; uniformity was the means'),
           ('How is the field bounded?', 'fifty words, headed what the other nine do not record'),
           ('How many words did the Halmar record need?', 'eleven')],
        b=[('____________ was the whole point, Tarek says.', 'Uniformity'),
           ('Mandatory to consider, ____________ to fill.', 'optional'),
           ('Fifty words is a sentence and a ____________.', 'half'),
           ('The Halmar record needed ____________ words.', 'eleven')]),

speak=[('Passive practice',
        ['Student A: say six things that were done in your office last year.',
         'Use the past simple passive and the present perfect passive.',
         'Student B: say which ones need by and an actor.']),
       ('Design the field',
        ['In pairs, invent a tenth field for a form you use.',
         'Give it a heading, a word limit and a rubric.',
         'Say what would go wrong without the limit.']),
       ('The thing with no box',
        ['Describe something from your work that no form would hold.',
         'Say where you would record it.',
         'Your partner says whether a reader would find it.'])],

ext_title='A template makes records comparable, and quietly tells a drafter that anything with no field did not happen',
ext_fig=figs.datatable('THE HALMAR RECORD AS FILED',
                       ['Field', 'Content', 'Reader sees'],
                       [['date and place', '14 July, Halmar', 'a meeting took place'],
                        ['participants', '3 Halmari, 2 Ministry', 'a small meeting'],
                        ['subject', 'transit corridors', 'routine'],
                        ['raised by the other side', 'empty', 'nothing arose'],
                        ['said by the Ministry', 'empty', 'nothing said'],
                        ['agreed / action / distribution', 'empty', 'a meeting of no consequence']]),
ext_fig_cap='Six rows, all accurate, and the reader draws exactly the wrong conclusion.',
ext=[
 'Before a template, a ministry’s records of conversation are as various as its drafters. '
 'Some are four pages and some four lines; the headings differ; and a reader who wants to '
 'know whether a question has ever been raised with a particular state must read everything '
 'and still cannot be sure. The fix is a fixed shape, and the fix works.',
 'Several foreign services have put a drafting step behind the template: the officer’s notes '
 'go in, the nine or ten fields come out populated, and the officer corrects them. Records '
 'are produced faster, they have been indexed without special effort, and the empty field '
 'becomes informative, since a reader can now distinguish between an item that did not arise '
 'and an item the drafter did not mention.',
 'The cost arrives later and is easy to miss. A template is a statement about what a meeting '
 'consists of, and a drafter who meets something the template has no field for will usually '
 'not record it. This is not laziness. The instruction says the fields are not to be altered, '
 'the subject line is not the place, and writing a separate covering minute requires a '
 'confidence that a junior officer back from a difficult trip may not have.',
 'What was lost in the case most often cited was not an opinion but a fact: a delegation '
 'arrived two hours late, at a third of its notified strength, and left after twenty minutes. '
 'Every field was answered correctly and four readers concluded that a routine meeting of no '
 'consequence had been held.',
 'The repair is a bounded exception field: a heading that says what the other fields do not '
 'record, a hard word limit, mandatory to consider and optional to fill. It is a compromise '
 'and it is argued about, because a free-text box in a form tends to grow until the form is '
 'gone. The limit is what holds it, and the limit has to be short enough to be unattractive '
 'to anybody who wants to write an essay.'],
dp1=('Templates in record-keeping',
     'Foreign services that standardised records of conversation with assisted drafting in '
     '2025 reported faster production and better retrieval, and several added a bounded free '
     'field after finding that unusual events went unrecorded.',
     'Source: reported practice in diplomatic record management, 2025–2026.'),
e_a=[('What was the problem before templates?', 'records were as various as their drafters and could not be compared'),
     ('What becomes informative under a template?', 'the empty field, which now distinguishes did not arise from not mentioned'),
     ('What is the cost?', 'a drafter who meets something with no field will usually not record it'),
     ('What was lost in the case most cited?', 'that a delegation came late, under strength, and left after twenty minutes'),
     ('What is the repair?', 'a bounded exception field with a hard word limit')],
e_b=[('Templates make records comparable.', 'T'),
     ('Under a template an empty field tells the reader nothing.', 'F'),
     ('Drafters who meet something with no field usually record it anyway.', 'F'),
     ('What was lost in Halmar was an opinion.', 'F'),
     ('A free-text box tends to grow.', 'T'),
     ('The exception field should be unlimited.', 'F')],

w_model=(
 'Purpose: populate the 10 fields of the record of conversation from the officer’s notes so '
 'that the officer can correct a draft rather than write one. Scope: the 1 meeting named in '
 'the notes; no other meeting and no earlier record is to be drawn on. Inputs: the officer’s '
 'notes and the template schema. Criteria: fill each field only from the notes; where the '
 'notes do not cover a field, leave it empty and do not infer; field 10 is for what the other '
 '9 cannot hold and is capped at 50 words; mark any field whose content is uncertain. Done: 1 '
 'populated template, presented for the officer’s correction, within 2 hours of the notes '
 'being submitted. Fallback: where the notes name no participants or no date, return the '
 'template with those fields marked as not supplied and do not proceed to the later fields.'),
w_fig=figs.spec_card('THE TASKING FOR A TEMPLATE FILL',
                     [('Purpose', 'correct a draft rather than write one'),
                      ('Scope', 'the 1 meeting in the notes only'),
                      ('Inputs', 'the officer’s notes and the schema'),
                      ('Criteria', 'only from the notes; empty rather than inferred; field 10 capped at 50 words'),
                      ('Done', '1 populated template for correction, within 2 hours'),
                      ('Fallback', 'no participants or date: mark not supplied and stop')]),
w_fig_cap='Empty rather than inferred is the line that keeps a record a record.',
w_task='Write a tasking for filling a form used in your own office.',
w_steps=['Say what the drafter is left to do.',
         'Limit the sources to what the drafter supplied.',
         'Forbid inference into an empty field.',
         'Put a hard limit on the free field.',
         'Say what happens when a mandatory field is not covered.'],
w_bank=['Populate … so that the officer can … rather than …',
        'Cover … ; no other … is to be drawn on.',
        'Work from … and …',
        'Fill each field only from … ; where … , leave it empty and do not … ; field 10 is capped at …',
        'Where the notes name no … , return … and do not …'],
w_check=['Is inference into an empty field forbidden?',
         'Is the free field capped by a number?',
         'Is the source limited to the officer’s own notes?',
         'Is there a stop rule for a missing mandatory field?'],

t_title='Templates for the record of conversation',
t_fig=figs.split('WHAT A TEMPLATE DOES',
                 'It gives',
                 ['records that can be compared',
                  'an empty field that means something',
                  'fast indexing and retrieval',
                  'a draft to correct, not to write'],
                 'It takes',
                 ['the event with no field',
                  'the drafter’s own shape',
                  'the long explanation',
                  'anything the schema did not foresee']),
t_fig_cap='Both columns are real. The right-hand one is the one nobody notices for a year.',
t_body=[
 'A template was the right decision and should be defended. Before it, records of '
 'conversation were as various as their drafters, and no reader could tell an item that had '
 'not arisen from one the drafter had not mentioned. With it, records are comparable, they '
 'have been indexed without special effort, and an empty field carries information.',
 'Behind the template, a drafting step populates the fields from the officer’s notes and the '
 'officer corrects the result. That is the right division of labour: the step does the '
 'arrangement, the officer does the judgement, and nothing is filled from anywhere but the '
 'notes. Where the notes do not cover a field, the field is left empty and nothing is '
 'inferred.',
 'Now the part that is learned late. A template says what a meeting consists of, and a '
 'drafter who meets something it has no field for tends not to record it at all. A '
 'delegation that arrived two hours late at a third of its notified strength was recorded in '
 'nine correctly answered fields, and four readers concluded that nothing had happened. The '
 'repair is a bounded field for what the others cannot hold: a clear heading, a hard cap of '
 'fifty words, mandatory to consider and optional to fill.'],
t_say=[('Set the division: ', 'The step populates; the officer corrects.'),
       ('Forbid the inference: ', 'Where the notes do not cover a field, leave it empty.'),
       ('Bound the exception: ', 'Field 10: what the other 9 do not record. 50 words.')],
t_bound=('A template cannot hold what its schema did not foresee, and a drafter will usually '
         'not fight it. Nine correct fields can produce a record that misleads every reader. '
         'The bounded exception field is not elegance; it is the only place an unforeseen fact '
         'can go.'),
t_a=[('The step populates; the officer ____________.', 'corrects'),
     ('Where the notes do not cover a field, leave it ____________.', 'empty'),
     ('Field 10: what the other 9 do not ____________.', 'record'),
     ('An empty field carries ____________.', 'information'),
     ('Four readers concluded that nothing had ____________.', 'happened'),
     ('Mandatory to consider, optional to ____________.', 'fill')],
t_b_rubric='Rewrite each line in the passive, keeping the tense.',
t_b=[('Somebody approved the template in March.', 'the template was approved in March'),
     ('They have indexed the records easily.', 'the records have been indexed easily'),
     ('Somebody had notified nine delegates.', 'nine delegates had been notified'),
     ('Four people have read the record.', 'the record has been read by four people')],

case=dict(
 title='The Decision Room · The tenth field',
 brief=[
  'The Halmar record has made the case for a field the other nine cannot hold. Nobody '
  'disputes that something was lost.',
  'Tarek Zayed, who owns the template, holds that uniformity is the whole gain and that a '
  'free-text box will destroy it within a year. He proposes instead a rule that unusual '
  'circumstances are reported in a separate covering minute.',
  'Omar Nasri holds that a rule nobody remembers is not a rule, and proposes a tenth field '
  'capped at fifty words.'],
 exhibit=figs.datatable('RECORDS FILED, MARCH TO NOVEMBER',
                        ['', 'Figure', 'Note'],
                        [['records of conversation filed', '1,180', '—'],
                         ['average length', '0.8 page', 'was 2.1 before March'],
                         ['covering minutes filed alongside', '4', 'of 1,180'],
                         ['records with 4 or more empty fields', '61', '—'],
                         ['of those, cases later found remarkable', '7', 'found by chance'],
                         ['time to index a record', '40 seconds', 'was 6 minutes']]),
 exhibit_cap='Four covering minutes in eight months, against sixty-one records with four '
             'fields empty.',
 exhibit_note='Six of the seven remarkable cases came to light because somebody who had been '
              'present mentioned them in conversation.',
 voices=[('Tarek Zayed', 'Protocol',
          'Keep the nine. Uniformity is what gives us comparability, and a free-text box will '
          'be two pages long by next summer. Unusual circumstances go in a covering minute.'),
         ('Omar Nasri', 'Translation and Documentation',
          'Four covering minutes in eight months. The rule exists and nobody uses it. A '
          'bounded tenth field at fifty words is used because it is there.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Whatever you choose, measure it. Publish how many tenth fields are filled and how '
          'long they run, and cut the field if it passes fifty words on average.')],
 steps=[('Find it', 'How many covering minutes were filed?'),
        ('Compare it', 'What are the two main proposals?'),
        ('Infer it', 'Why does Tarek fear a free-text box?'),
        ('Weigh it', 'Comparability against the unforeseen fact.'),
        ('Decide', 'Nine fields and a rule, or ten fields and a cap?')],
 analysis=[('Find it. How many of 1,180 records had a covering minute?', 'four'),
           ('Compare it. What does Omar propose?', 'a tenth field capped at fifty words'),
           ('Infer it. What is Tarek’s fear?', 'that the box will reach two pages and destroy uniformity'),
           ('Weigh it. How were six of the seven remarkable cases found?', 'by somebody who was present mentioning them in conversation'),
           ('Decide. What would you do?', 'answers vary; a capped field with published measurement tests both claims')],
 decision='Write the rule for the tenth field or for the covering minute.',
 decision_steps=['Say whether a tenth field exists, and what its heading is.',
                 'Put a number on its length.',
                 'Say whether it is mandatory to fill or only to consider.',
                 'Say what is measured, published and reviewed.'],
 bank=['Field 10 is headed …',
       'It is capped at …',
       'It is mandatory to … and optional to …',
       'The number of … and their average length are published …',
       'The field is cut if …'],
 outcome='A tenth field was added in November, headed what the other nine fields do not '
         'record, capped at fifty words and mandatory to consider. Over the following year it '
         'was filled on 214 of 1,640 records and ran to an average of twenty-two words. Tarek, '
         'who had predicted two pages by summer, says the cap did the work and he was wrong '
         'about drafters: given fifty words and a clear heading, they write eleven and stop. He '
         'adds that he would have been right about an uncapped box, which is a different '
         'argument from the one he lost.',
 outcome_q=[('How often was the field filled, and how long did it run?', 'on 214 of 1,640 records, averaging twenty-two words'),
            ('What does Tarek say he was wrong about?', 'about drafters; given a cap and a heading they write eleven words and stop')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Fill the template',
 task=['This is the tasking given to the drafting step when the template was introduced in '
       'March.',
       'It produced records that were complete, uniform and in four cases confidently wrong.'],
 draft=['Fill in the template from the notes.',
        'Make sure nothing is left blank.',
        'Write what was agreed.',
        'Keep to the house style.',
        'Flag anything unusual.',
        'Quickly.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the second one guarantees invention.',
 asked=['Fields filled only from the notes',
        'Empty where the notes do not cover',
        'Uncertain content marked'],
 back=['A full nine fields on every record',
       'Agreements the notes did not mention',
       'No indication of which fields were inferred'],
 gap='"Nothing left blank" forces a guess, "what was agreed" presumes something was, "flag '
     'anything unusual" sets no test and no destination, and "quickly" fixes nothing.',
 back_cap='Nine answered fields, four of which record agreements nobody made.',
 back_note='Line two is the failure. A rule against blank fields is a rule in favour of '
           'invention.',
 diagnosis=[('[1] "from the notes" — only the notes, or earlier records too?', 'unstated criterion'),
            ('[2] "nothing is left blank" — and where the notes say nothing?', 'missing condition'),
            ('[3] "write what was agreed" — and if nothing was?', 'missing condition'),
            ('[4] "keep to the house style" — which, of the two in circulation?', 'unstated criterion'),
            ('[5] "flag anything unusual" — flagged where, for whom?', 'undefined done'),
            ('[6] "quickly" — finished when, and handed to whom?', 'undefined done')],
 rewrite='Rewrite the tasking so that an uncovered field is left empty and nothing is '
         'inferred.',
 scaffold=['What the officer is left to do',
           'Which meeting, and what may not be drawn on',
           'The notes and the schema',
           'Fill only from the notes; empty where uncovered; the cap on field 10; uncertainty marked',
           'One populated template for correction, and by when',
           'What to do where a mandatory field is not covered'],
 bank=['Populate … so that the officer can … rather than …',
       'Cover … ; no other … is to be drawn on.',
       'Work from … and …',
       'Fill each field only from … ; where … , leave it empty and do not infer; field 10 … ; mark …',
       'Return 1 populated template, presented for … , within …',
       'Where the notes name no … , return … and do not …'],
 check=['Is a blank permitted and required where the notes are silent?',
        'Is inference forbidden in words?',
        'Is the free field capped?',
        'Is there a stop rule for a missing mandatory field?'],
 model=['Populate the 10 fields of the record of conversation from the officer’s notes so that the officer can correct a draft rather than write one',
        'The 1 meeting named in the notes; no other meeting and no earlier record is to be drawn on',
        'The officer’s notes and the template schema',
        'Fill each field only from the notes; where the notes do not cover a field, leave it empty and do not infer; field 10 is for what the other 9 cannot hold and is capped at 50 words; mark any field whose content is uncertain',
        '1 populated template, presented for the officer’s correction, within 2 hours of the notes being submitted',
        'Where the notes name no participants or no date, return the template with those fields marked as not supplied and do not proceed to the later fields'],
 cost='4 records stating agreements that were never made, 2 of which were quoted in a later '
      'note to the other side before the error was found.'),

rev_fig=figs.split('ACTIVE AND PASSIVE',
                   'Active',
                   ['Somebody approved the template.',
                    'They have indexed the records.',
                    'Somebody had notified nine delegates.',
                    'Four people read it.'],
                   'Passive',
                   ['The template was approved in March.',
                    'The records have been indexed.',
                    'Nine delegates had been notified.',
                    'It has been read by four people.']),
rev_fig_cap='Was plus participle; has been plus participle.',
rev=dict(
 read=[('A template makes records', ['longer', 'comparable', 'secret', 'optional'], 1),
       ('Under a template, an empty field', ['means nothing', 'carries information', 'is forbidden', 'is filled by default'], 1),
       ('What was lost in the Halmar case was', ['an opinion', 'a fact', 'a date', 'a name'], 1),
       ('In the Decision Room, what was the tenth field capped at?', ['ten words', 'fifty words', 'two pages', 'no cap'], 1)],
 listen_text='A template says what a meeting consists of, and a drafter who meets something '
             'it has no field for tends not to record it. A delegation that arrived two hours '
             'late at a third of its notified strength was recorded in nine correctly answered '
             'fields, and four readers concluded that nothing had happened.',
 listen=[('A template says what a meeting ____________ of.', 'consists'),
         ('A third of its notified ____________.', 'strength'),
         ('Nine correctly answered ____________.', 'fields'),
         ('Four readers concluded that nothing had ____________.', 'happened')],
 speak=['Say three things that were done in your office this year, in the passive.',
        'Describe something a form you use could not hold.'],
 write='Write one rubric for an exception field, with a word limit.',
 vocab=[('A part that must be completed before filing is a ____________.', 'mandatory field'),
        ('The definition of what fields exist is a ____________.', 'schema'),
        ('The instruction printed beside a field is a ____________.', 'rubric'),
        ('The value a field takes unless it is changed is a ____________.', 'default'),
        ('A part kept for what the other fields cannot hold is an ____________.', 'exception field')],
 gram=[('A template ____________ (approve) in March.', 'was approved'),
       ('The records ____________ (index) without difficulty.', 'have been indexed'),
       ('Nine delegates ____________ (notify) before the meeting.', 'had been notified'),
       ('Nothing ____________ (agree) at the meeting.', 'was agreed'),
       ('The record ____________ (read) by four people since July.', 'has been read')]),

found=['Find a form in your office and ask what it has no field for.',
       'Write a fifty-word exception field for it.',
       'Check one record where several fields are empty and ask what happened.',
       'Rewrite one active sentence from a record in the passive.'],
end_line='Nine correct fields can still tell a reader the opposite of the truth.',
end_next='Next: Our Documents, Not the Open Web',
)
