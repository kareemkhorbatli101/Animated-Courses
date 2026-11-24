# -*- coding: utf-8 -*-
import figs

U = dict(
num=10, title='What Scale Does to a Mistake',
gram='rhetorical structure: parallelism, tricolon and restraint',
ai='what scale does to a single mistake',
strap='CEFR C1 · Grammar: parallelism and restraint · AI: what scale does to a mistake',
cando=['build parallel structures and a tricolon that carries weight',
       'use restraint deliberately, so that one plain sentence lands',
       'say how scale changes the character of a single error',
       'design a release so that an error reaches a hundred people before four thousand',
       'write a tasking that requires every recipient of an error to be traceable'],
hero=('FOUR THOUSAND ONE HUNDRED AND SIX',
      ['One sentence was wrong, in one of nine standard answers.',
       'By the time it was found, four thousand one hundred and six people had been told it.'],
      [(730, 'orange', 'long'), (1390, 'blue', 'short'),
       (2050, 'purple', 'long'), (2690, 'teal', 'short')]),
hero_cap='Consular Affairs, the morning the wording was checked against the regulation.',

warm=['How many people could receive a mistake of yours before anybody noticed?',
      'What would you need in order to write to all of them?',
      'What is the difference between an error and a systematic error?'],
read=[
 'In May the published requirement for registering a birth abroad changed in one respect: the '
 'period within which a registration must be made was extended from three months to one year. '
 'Standard answer six was updated the same week, correctly, except that the sentence giving '
 'the period was not changed.',
 'Standard answer six was sent, unaltered and in eleven languages, to four thousand one hundred '
 'and six people over nine weeks, each of whom was told that they had three months to register '
 'a birth when in fact they had a year.',
 'The error was not serious in most of those cases and was serious in a few: an unknown number '
 'of families made journeys they need not have made, and at least two paid for documents they '
 'did not require.',
 'What made the case instructive was not the error, which was one sentence and is the kind of '
 'thing a section makes every month. It was that the section could say exactly how many people '
 'had received it, exactly who they were, and in which language each had been written to, and '
 'could therefore write to all of them in two days.',
 'Rana Deeb’s view is that this is the whole of the argument about scale. A section answering '
 'by hand makes the same error and tells forty people, and cannot say which forty. A section '
 'answering at volume tells four thousand and can name them. The first is a smaller mistake '
 'and a worse position, because nothing can be repaired and nobody can be told.'],
c_a=[('What changed in May?', 'the period for registering a birth abroad, from three months to one year'),
     ('What was wrong with standard answer six?', 'the sentence giving the period was not changed'),
     ('How many people received it, and over how long?', 'four thousand one hundred and six, over nine weeks'),
     ('What was the consequence in a few cases?', 'unnecessary journeys, and at least two people paid for documents they did not need'),
     ('What made the case instructive?', 'that the section could name every recipient and write to all of them in two days'),
     ('What is Rana’s view of a hand-answering section?', 'that it makes the same error, tells forty people, and cannot say which forty')],
c_b=[('The error was in nine standard answers.', 'F'),
     ('The error was sent in eleven languages.', 'T'),
     ('The error was serious in most cases.', 'F'),
     ('The section could identify every recipient.', 'T'),
     ('Writing to all of them took two weeks.', 'F'),
     ('Rana regards the hand-answering position as better.', 'F')],
c_c=[('Extended from three months to one ____________.', 'year'),
     ('Sent, unaltered and in eleven ____________.', 'languages'),
     ('Journeys they need not have ____________.', 'made'),
     ('The kind of thing a section makes every ____________.', 'month'),
     ('Could therefore write to all of them in two ____________.', 'days'),
     ('A smaller mistake and a worse ____________.', 'position')],
c_d=[('The lesson is about ( traceability / the error ).', ['traceability', 'the error'], 0),
     ('How many people received the wrong period?', ['forty', '4,106', '900', 'eleven'], 1),
     ('How long did the error run?', ['two days', 'nine weeks', 'one year', 'three months'], 1),
     ('What could the section name?', ['nothing', 'every recipient and their language', 'the error only', 'the regulation'], 1),
     ('What is the hand-answering section unable to do?', ['make errors', 'say which forty', 'answer quickly', 'translate'], 1)],
c_e=('Match each device to what it does.',
     [('read it, check it, send it', 'a tricolon of actions'),
      ('not the error but the reach', 'a contrast in parallel'),
      ('four thousand one hundred and six', 'a figure given exactly'),
      ('we were wrong. We have written to all of them.', 'restraint'),
      ('smaller mistake, worse position', 'parallel contrast'),
      ('one sentence, nine weeks, eleven languages', 'a tricolon of scale')],
     ['a tricolon of actions', 'a contrast in parallel', 'a figure given exactly',
      'restraint', 'parallel contrast', 'a tricolon of scale']),

v_fig_title='WHEN AN ERROR SCALES',
v_fig=[('chart', 'a blast radius'), ('people', 'an affected cohort'), ('doc', 'a mass correction'),
       ('key', 'a traceability of recipients'), ('clock', 'a staged release'), ('shield', 'a rollback')],
v_fig_cap='Six words for the difference between a mistake and an incident.',
vocab=[
 ('a scale of operation', 'the volume at which a service works'),
 ('a single mistake', 'an error occurring once'),
 ('a systematic mistake', 'an error repeated wherever a rule applies'),
 ('a repeated error', 'the same error occurring many times'),
 ('a recall', 'the calling back of something already issued'),
 ('a published correction', 'a statement issued to correct what was sent'),
 ('a mass correction', 'the correction of many communications at once'),
 ('an affected cohort', 'the identified set of people an error reached'),
 ('a traceability of recipients', 'the ability to say exactly who received what'),
 ('a rollback', 'the reversal of a change already made'),
 ('a stop control', 'a means of halting a process immediately'),
 ('a staged release', 'the issuing of a change to a small group before all'),
 ('a first batch', 'the small group a change is issued to first'),
 ('a blast radius', 'the extent of what an error reaches before it is stopped'),
 ('an incident report', 'the written account of what went wrong and when'),
 ('a root cause', 'the condition that allowed the error to occur'),
 ('a remediation', 'the work of putting right what was done wrong'),
 ('a lesson learned', 'a change made because of an error'),
 ('an error tolerance', 'the rate of error a process is designed to accept'),
 ('a reputational cost', 'the loss of standing an error causes')],
v_a=[('The ability to say exactly who received what is a ____________.', 'traceability of recipients'),
     ('The extent of what an error reaches before it is stopped is a ____________.', 'blast radius'),
     ('The issuing of a change to a small group before all is a ____________.', 'staged release'),
     ('The identified set of people an error reached is an ____________.', 'affected cohort'),
     ('The condition that allowed the error to occur is a ____________.', 'root cause'),
     ('An error repeated wherever a rule applies is a ____________.', 'systematic mistake'),
     ('A means of halting a process immediately is a ____________.', 'stop control'),
     ('The rate of error a process is designed to accept is an ____________.', 'error tolerance')],
v_b=[('A scale of operation is the volume', 'at which a service works.'),
     ('A recall is the calling back', 'of something already issued.'),
     ('A rollback is the reversal', 'of a change already made.'),
     ('A remediation is the work of putting right', 'what was done wrong.'),
     ('A reputational cost is the loss of standing', 'an error causes.')],

g_title='Grammar: parallelism, tricolon and restraint',
g_rule=['Parallel elements must take the same grammatical form: read it, check it, send it.',
        'A tricolon groups three parallel elements and gives the third the weight.',
        'A contrast in parallel sharpens: a smaller mistake and a worse position.',
        'Restraint is a device: after a figure, one plain short sentence lands harder than an '
        'adjective.'],
g_fig=('LOOSE',
       ['This was a very regrettable and serious incident with wide-ranging consequences.',
        'The section checked, was reviewing and has corrected the answers.',
        'It was bad, and also it was quite extensive, and the reach was large.',
        'We deeply apologise most sincerely for this unfortunate matter.'],
       'PRECISE',
       ['One sentence was wrong. It was sent to 4,106 people. We have written to all of them.',
        'The section checked the wording, found the error and corrected the answer.',
        'A smaller mistake, and a worse position.',
        'We were wrong, and we are sorry.'],
       'four sentences in which intensity replaces structure',
       'a tricolon, a parallel triple, a parallel contrast and a plain apology'),
g_fig_cap='After an exact figure, every adjective weakens the sentence.',
g_a=[('The section checked the wording, ____________ the error and corrected the answer.', 'found'),
     ('A smaller mistake, and a ____________ position.', 'worse'),
     ('One sentence was wrong. It was sent to 4,106 people. We have ____________ to all of them.', 'written'),
     ('We were wrong, and we ____________ sorry.', 'are'),
     ('Read it, check it, ____________ it.', 'send'),
     ('One sentence, nine weeks, eleven ____________.', 'languages'),
     ('Not the error but the ____________.', 'reach'),
     ('We can name them, we can write to them, and we ____________.', 'have'),
     ('Four thousand one hundred and ____________.', 'six')],
g_b=[('Parallel elements must take the same ( length / grammatical form ).', ['length', 'grammatical form'], 1),
     ('A tricolon gives the weight to the', ['first element', 'third element', 'second element', 'adjective'], 1),
     ('After an exact figure, an adjective', ['strengthens', 'weakens', 'clarifies', 'is required'], 1),
     ('Which is parallel?', ['checked, was reviewing and has corrected', 'checked the wording, found the error and corrected the answer', 'checking and correction', 'to check and correcting'], 1),
     ('Restraint means', ['saying less than you feel', 'omitting the figure', 'using no verbs', 'avoiding apology'], 1),
     ('Which lands hardest after a figure?', ['It was deeply regrettable.', 'We were wrong.', 'This was most unfortunate.', 'Lessons have been learned.'], 1)],

d1=dict(title='Four thousand, and we can name them',
        fig=(['Four thousand one hundred and six.', 'And we know who they are.'],
             ['Which is the bad news.', 'Which is the only good news.']),
        cap='Rana Deeb and Karim Dalati, the morning the error was found.',
        lines=[('Karim', 'Four thousand one hundred and six people have been told they have '
                         'three months when they have a year.'),
               ('Rana', 'And we can name every one of them, in the language we wrote to them '
                        'in.'),
               ('Karim', 'I expected you to be describing a catastrophe.'),
               ('Rana', 'It is a bad week. It is not a catastrophe, and the reason is the second '
                        'sentence rather than the first. Two years ago my officers answered that '
                        'question by hand about forty times a month. The same error would have '
                        'gone to perhaps a hundred people over nine weeks.'),
               ('Karim', 'A smaller error.'),
               ('Rana', 'A smaller error and an unrepairable one. I could not have told you '
                        'which hundred. There was no record of which answer any officer had '
                        'given, in which words, on which day. I would have corrected the '
                        'guidance and written to nobody.'),
               ('Karim', 'So the position is worse at forty a month.'),
               ('Rana', 'The position is worse because the people affected are unreachable. '
                        'This week I will write to four thousand one hundred and six people, in '
                        'eleven languages, in two days, and most of them will never have acted '
                        'on the wrong period at all.'),
               ('Karim', 'And the two who paid for documents they did not need?'),
               ('Rana', 'We will reimburse them, because we know who they are. That sentence is '
                        'the entire argument for doing this work at volume, and it is not the '
                        'argument anybody makes for it.')],
        a=[('How many people were told the wrong period?', 'four thousand one hundred and six'),
           ('What could the section do that a hand-answering section could not?', 'name every recipient and the language used'),
           ('How many would a hand-answering section have told?', 'perhaps a hundred over nine weeks'),
           ('Why is that position worse?', 'because the people affected are unreachable'),
           ('What happens to the two who paid unnecessarily?', 'they are reimbursed, because the section knows who they are')],
        b=[('A smaller error and an ____________ one.', 'unrepairable'),
           ('There was no ____________ of which answer any officer had given.', 'record'),
           ('I would have corrected the guidance and written to ____________.', 'nobody'),
           ('The entire argument for doing this work at ____________.', 'volume')]),
d2=dict(title='A hundred before four thousand',
        fig=(['Nine weeks before anybody checked.', 'And a first batch of a hundred?'],
             ['Would have caught it in a day.', 'If anybody had read the hundred.']),
        cap='Rana and Dr Hana Mourad.',
        lines=[('Hana', 'The error ran for nine weeks. What found it?'),
               ('Rana', 'An officer answering a routed case read standard answer six because it '
                        'was attached to the file, and recognised the period.'),
               ('Hana', 'By chance, then.'),
               ('Rana', 'Entirely by chance, and that is the part I have changed. When a '
                        'standard answer is altered, the new version now goes to the first '
                        'hundred recipients and is then held for twenty-four hours, during '
                        'which an officer reads it against the published requirement.'),
               ('Hana', 'A hundred people still receive the error.'),
               ('Rana', 'A hundred rather than four thousand, and we can write to the hundred.'),
               ('Hana', 'Why not hold it before anybody receives it?'),
               ('Rana', 'Because a wording read in the section and never sent is read in the '
                        'section’s own frame. The nine officers who cleared standard answer six '
                        'all read the period and none of them saw it, because they were checking '
                        'the sentence that had changed.'),
               ('Hana', 'And the hundredth recipient sees it with fresh eyes.'),
               ('Rana', 'Sometimes. That is my honest position: a first batch gives a chance of '
                        'catching an error, bounds the damage, and does not guarantee anything. '
                        'What I cannot tell you is why no officer reading it in May saw a '
                        'three-month period in a text about a one-year rule.'),
               ('Hana', 'That is the thing I would want to understand before relying on any of '
                        'this.'),
               ('Rana', 'So would I, and I have asked four of the nine and had four different '
                        'answers, none of which I believe. I have bounded the damage and I have '
                        'not understood the failure.')],
        a=[('What found the error?', 'an officer who read the standard answer attached to a routed case'),
           ('What has Rana changed?', 'a new version goes to a first hundred and is held for twenty-four hours'),
           ('Why not hold it before anybody receives it?', 'because a wording read only in the section is read in the section’s own frame'),
           ('What did the nine clearing officers do?', 'read the period and did not see it, because they were checking the changed sentence'),
           ('What has Rana not understood?', 'why no officer saw a three-month period in a text about a one-year rule')],
        b=[('Entirely by ____________.', 'chance'),
           ('Held for twenty-four ____________.', 'hours'),
           ('Read in the section’s own ____________.', 'frame'),
           ('I have bounded the damage and I have not understood the ____________.', 'failure')],
        unresolved=True),

speak=[('Three in parallel',
        ['Student A: describe a process in three steps, in parallel grammatical form.',
         'Student B: check the forms and put the weight on the third.',
         'Then say the same thing with one adjective and compare.']),
       ('Exactly how many',
        ['Describe a mistake your office could make.',
         'Say exactly how many people would receive it before anybody noticed.',
         'Say whether you could name them.']),
       ('The first hundred',
        ['Take a change your office might publish.',
         'Say who the first hundred recipients would be.',
         'Say who would read it against the source, and when.'])],

ext_title='Scale makes an error reach further and makes its recipients nameable, and only the second is new',
ext_fig=figs.datatable('THE SAME ERROR, TWO SCALES',
                       ['', 'Answered by hand', 'Answered at volume'],
                       [['people told the wrong period', '~100', '4,106'],
                        ['time before discovery', '9 weeks', '9 weeks'],
                        ['recipients identifiable', 'no', 'yes, all'],
                        ['language of each reply known', 'no', 'yes'],
                        ['corrections sent', '0', '4,106, in 2 days'],
                        ['people reimbursed', '0', '2']]),
ext_fig_cap='The first row is worse at volume. Every other row is better, and the last row '
            'could not exist at all by hand.',
ext=[
 'The objection most often made to answering at volume is that an error is multiplied, and it '
 'is true. One wrong sentence in one standard answer reached four thousand one hundred and six '
 'people in nine weeks and in eleven languages, which no section answering by hand could '
 'achieve.',
 'The objection is nevertheless incomplete, and the missing half is the more important. The '
 'same error, in a section answering the same question forty times a month by hand, reaches '
 'perhaps a hundred people in the same nine weeks, and reaches them untraceably. There is no '
 'record of which officer said what to whom in which words, so the guidance is corrected and '
 'nobody is written to. A hundred people continue to believe a wrong thing indefinitely, and '
 'the section does not know their names.',
 'That is the trade and it should be stated in both directions: at volume an error reaches '
 'forty times as many people and every one of them can be named, written to in the language '
 'they were written to in, and in a few cases reimbursed. A smaller mistake and a worse '
 'position is the honest summary, and the figure that matters is not the reach but the '
 'proportion of the reach that is repairable, which by hand is nil.',
 'Two practices follow and neither is elaborate. Every outgoing communication must be '
 'recorded with its exact wording, its recipient and its language, which is what makes a mass '
 'correction possible at all. And a changed standard answer should go to a bounded first batch '
 'and then hold, for a day, while somebody reads it against the published source: the first '
 'hundred receive the error, the next four thousand do not.',
 'What neither practice reaches is the failure that produced the error, and it is worth '
 'admitting that it is not understood. Nine officers cleared the amended answer. All nine read '
 'the sentence stating three months, in a document whose whole purpose was to implement a '
 'one-year rule, and none of them saw it, because each was checking the sentence that had '
 'changed. A first batch bounds such a failure; it does not explain it, and a section that '
 'tells itself the bounding is a solution will be surprised again.'],
dp1=('Scale and correction',
     'Consular services operating automated reply at volume in 2025 recorded the exact wording, '
     'recipient and language of every outgoing communication, enabling full cohort correction '
     'within days of an error being identified.',
     'Source: reported practice in consular services, 2025–2026.'),
e_a=[('What is the usual objection to volume?', 'that an error is multiplied, which is true'),
     ('What is the missing half?', 'that a hand-answering section reaches fewer people untraceably'),
     ('What is the honest summary?', 'a smaller mistake and a worse position'),
     ('What figure matters?', 'the proportion of the reach that is repairable, which by hand is nil'),
     ('What do the two practices consist of?', 'recording wording, recipient and language; and a bounded first batch with a hold')],
e_b=[('An error at volume reaches fewer people.', 'F'),
     ('By hand, recipients of an error can be identified.', 'F'),
     ('The repairable proportion by hand is nil.', 'T'),
     ('The first batch prevents all errors.', 'F'),
     ('The nine clearing officers read the sentence.', 'T'),
     ('The failure that produced the error is understood.', 'F')],

w_model=(
 'Purpose: release a changed standard answer so that an error in it reaches 100 people rather '
 'than 4,000. Scope: amendments to the 9 published standard answers; amendments to welfare '
 'correspondence are out of scope and go to the duty officer. Inputs: the amended answer, the '
 'published requirement it implements, and the record of outgoing communications. Criteria: '
 'send the amended answer to the first 100 recipients only and then hold it for 24 hours; '
 'during the hold, have 1 officer read the whole answer against the published requirement and '
 'not only the amended sentence; record for every recipient the exact wording sent, the date '
 'and the language; release to the remainder only on that officer’s written clearance. Done: '
 '100 sent, 1 clearance recorded, and the remainder released or held, within 48 hours of '
 'amendment. Fallback: where the officer cannot clear the answer within the hold, continue '
 'sending the previous version rather than the amended one.'),
w_fig=figs.spec_card('THE TASKING FOR A STAGED RELEASE',
                     [('Purpose', 'an error reaches 100 rather than 4,000'),
                      ('Scope', 'the 9 standard answers; welfare correspondence excluded'),
                      ('Inputs', 'the amended answer, the requirement, the outgoing record'),
                      ('Criteria', '100 then hold 24 hours; the whole answer read; everything recorded'),
                      ('Done', '100 sent, 1 clearance, remainder released or held, in 48 hours'),
                      ('Fallback', 'not cleared in time: keep sending the previous version')]),
w_fig_cap='Read the whole answer and not only the amended sentence: that is where nine officers failed.',
w_task='Write a release tasking for a change your own office publishes.',
w_steps=['Say what the staging is to bound.',
         'Name what is covered and what is excluded.',
         'Set the batch size and the hold.',
         'Require the whole document to be read, not the change.',
         'Say what happens if clearance does not come in time.'],
w_bank=['Release … so that an error in it reaches … rather than …',
        'Cover … ; … are out of scope and …',
        'Work from … , … and …',
        'Send … only and then hold … ; during the hold, have … read … and not only … ; record … ; release … only on …',
        'Where … cannot clear … , continue … rather than …'],
w_check=['Is the batch size a number?',
         'Is the hold a stated period?',
         'Must the whole document be read?',
         'Is the fallback the previous version rather than the new one?'],

t_title='What scale does to a mistake',
t_fig=figs.split('AN ERROR AT VOLUME',
                 'Worse',
                 ['it reaches 40 times as many people',
                  'it reaches them in 11 languages',
                  'it runs until somebody checks',
                  'the figure is quotable against you'],
                 'Better',
                 ['every recipient can be named',
                  'every language is known',
                  'a correction can be sent in 2 days',
                  'the few who acted can be reimbursed']),
t_fig_cap='Both columns are true. Only the left one is ever used in the argument.',
t_body=[
 'The standard objection to answering at volume is that it multiplies an error, and it does: '
 'one wrong sentence reached four thousand one hundred and six people in nine weeks and in '
 'eleven languages. State that plainly and give the exact figure, because a rounded figure '
 'reads as an estimate and an estimate reads as a concealment.',
 'Then state the half nobody states. By hand, the same error reaches perhaps a hundred people '
 'in the same nine weeks, and reaches them untraceably: no record of which officer said what, '
 'to whom, in what words. The guidance is corrected, nobody is written to, and a hundred '
 'people go on believing a wrong thing for ever. A smaller mistake, and a worse position.',
 'So build for repair rather than for perfection. Record the exact wording, the recipient and '
 'the language of every outgoing communication, which is what makes a mass correction possible '
 'at all. Release an amended answer to a bounded first batch and hold it for a day while '
 'somebody reads the whole answer against the published source rather than the sentence that '
 'changed. And do not tell yourself that this explains the failure: nine officers read a '
 'three-month period in a document implementing a one-year rule and none of them saw it, and '
 'bounding the damage is not the same as understanding why.'],
t_say=[('Give the exact figure: ', '4,106 people were told the wrong period.'),
       ('State the trade: ', 'A smaller mistake, and a worse position.'),
       ('Bound the next one: ', 'The first 100 receive it; the rest wait 24 hours.')],
t_bound=('Scale does not make errors more likely; it makes them wider and traceable, and only '
         'the second is new. Nothing in a staged release explains why nine officers failed to '
         'see a wrong figure in a document whose purpose was to change it, so the bounding is '
         'a limit on damage and not a correction of the cause, and a section that confuses the '
         'two will be surprised by the same kind of failure.'),
t_a=[('4,106 people were told the wrong ____________.', 'period'),
     ('A smaller mistake, and a worse ____________.', 'position'),
     ('The first 100 receive it; the rest wait 24 ____________.', 'hours'),
     ('A rounded figure reads as an ____________.', 'estimate'),
     ('Reaches them ____________.', 'untraceably'),
     ('Bounding the damage is not the same as understanding ____________.', 'why')],
t_b_rubric='Rewrite each with parallel structure and restraint.',
t_b=[('This was a very regrettable and serious incident with wide-ranging consequences.', 'one sentence was wrong; it was sent to 4,106 people; we have written to all of them'),
     ('The section checked, was reviewing and has corrected the answers.', 'the section checked the wording, found the error and corrected the answer'),
     ('It was bad, and also quite extensive, and the reach was large.', 'a smaller mistake, and a worse position'),
     ('We deeply apologise most sincerely for this unfortunate matter.', 'we were wrong, and we are sorry')],

case=dict(
 title='The Decision Room · What the correction letter says',
 brief=[
  'Four thousand one hundred and six people must be written to. The section can do it in two '
  'days, in eleven languages.',
  'Yara Ibrahim has drafted the correction. It explains the regulatory change, sets out the '
  'Ministry’s procedures for updating published guidance, and apologises for any inconvenience.',
  'Rana wants four sentences: we told you three months, the period is one year, here is what to '
  'do if you acted on what we said, and we are sorry. Karim asks whether the Ministry should '
  'say how many people were affected.'],
 exhibit=figs.datatable('THE CORRECTION',
                        ['', 'Yara’s draft', 'Rana’s draft'],
                        [['words', '310', '61'],
                         ['explains the regulatory change', 'yes', 'no'],
                         ['states what we told you', 'in paragraph 3', 'first sentence'],
                         ['states the correct period', 'in paragraph 4', 'second sentence'],
                         ['says what to do if you acted on it', 'no', 'third sentence'],
                         ['apologises', 'for any inconvenience', 'we were wrong, and we are sorry']]),
 exhibit_cap='Three hundred and ten words against sixty-one, and the shorter one contains one '
             'thing the longer one does not.',
 exhibit_note='Of the 4,106, an unknown number acted on the wrong period; 2 are known to have '
              'paid for unnecessary documents.',
 voices=[('Yara Ibrahim', 'Press and Public Diplomacy',
          'The longer version protects the Ministry. It shows that guidance is updated '
          'systematically and that this was a clerical slip rather than negligence.'),
         ('Rana Deeb', 'Consular Affairs',
          'It protects the Ministry from a reader who finishes it. Four in five will read the '
          'first thirty words, which in your draft are about our procedures. Mine are about '
          'what we told them.'),
         ('Karim Dalati', 'Information Security and Records',
          'Say the number. Four thousand one hundred and six is going to be known, and a '
          'ministry that states its own figure is in a different position from one whose '
          'figure is calculated by somebody else.')],
 steps=[('Find it', 'What is in the first thirty words of each draft?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Rana think the long version protects nobody?'),
        ('Weigh it', 'Institutional protection against the reader’s first thirty words.'),
        ('Decide', 'What does the correction say, and does it give the number?')],
 analysis=[('Find it. What do Yara’s first thirty words cover?', 'the Ministry’s procedures for updating guidance'),
           ('Compare it. What four things does Rana want?', 'what we said, the correct period, what to do if you acted, and an apology'),
           ('Infer it. Why does the long version fail?', 'because four in five readers never reach the correction'),
           ('Weigh it. What is known about those who acted?', 'that two paid for unnecessary documents and the rest is unknown'),
           ('Decide. What would you do?', 'answers vary; the short version with the figure stated is the one that cannot be improved on later')],
 decision='Write the correction.',
 decision_steps=['Say what the first sentence is.',
                 'Say whether the number is given.',
                 'Say what is offered to somebody who acted on the error.',
                 'Say what the Ministry publishes, if anything.'],
 bank=['The first sentence states …',
       'The number …',
       'Anybody who acted on the wrong period is …',
       'The Ministry publishes …',
       'This is reviewed …'],
 outcome='The correction ran to sixty-one words and began with what the Ministry had said. It '
         'gave the figure. It invited anybody who had acted on the wrong period to write, and '
         'eleven did, of whom four were reimbursed. Nothing was published beyond the letters, '
         'and no journalist asked. Yara, who had drafted the long version, says she would write '
         'the short one now, and adds that she had been drafting for a reader who does not '
         'exist: the reader who finishes a letter from a ministry and judges it as a whole.',
 outcome_q=[('How long was the correction, and how did it begin?', 'sixty-one words, beginning with what the Ministry had said'),
            ('What does Yara say she had been doing?', 'drafting for a reader who finishes a ministry letter and judges it as a whole')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Update the standard answer',
 task=['This is the instruction under which standard answer six was amended in May.',
       'Nine officers cleared the amendment and none of them saw the three-month period.'],
 draft=['Update the standard answers when a requirement changes.',
        'Amend the relevant sentence.',
        'Have the amendment checked.',
        'Bring it into use promptly.',
        'Keep the previous version on file.',
        'Note the change in the log.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the second one tells nine officers which sentence to look at.',
 asked=['The whole answer read against the requirement',
        'A bounded first batch and a hold',
        'Every recipient, wording and language recorded'],
 back=['A correctly amended sentence',
       '9 clearances, none of which read the rest',
       '4,106 recipients over 9 weeks'],
 gap='"Amend the relevant sentence" directs attention to one sentence, "have it checked" '
     'names no scope for the check, "promptly" invites immediate full release, and nothing '
     'requires a record of who received which wording.',
 back_cap='An amendment that was correct in the sentence it changed and wrong in the sentence '
          'it did not.',
 back_note='Line two is the failure. A check scoped to the amendment cannot see an error '
           'anywhere else, and nine careful readings of the wrong scope produce nine '
           'clearances.',
 diagnosis=[('[1] "the standard answers" — which, and who decides a change is relevant?', 'unscoped set'),
            ('[2] "amend the relevant sentence" — and the rest of the answer?', 'unscoped set'),
            ('[3] "have the amendment checked" — checked against what, by whom?', 'unstated criterion'),
            ('[4] "bring it into use promptly" — to how many recipients, how fast?', 'undefined done'),
            ('[5] "keep the previous version on file" — usable as a fallback or not?', 'unstated criterion'),
            ('[6] "note the change in the log" — recording what, per recipient or per change?', 'undefined done')],
 rewrite='Rewrite the instruction so that the whole answer is read and the first release is '
         'bounded.',
 scaffold=['What the staging is to bound',
           'The answers covered and what is excluded',
           'The amended answer, the requirement and the outgoing record',
           'A bounded batch, a hold, the whole answer read, full recording, clearance before release',
           'What is sent, cleared and released, and by when',
           'What to do where clearance does not come in time'],
 bank=['Release … so that an error reaches … rather than …',
       'Cover … ; … are out of scope …',
       'Work from … , … and …',
       'Send … and then hold … ; have … read … and not only … ; record … ; release … only on …',
       'Return … sent, … recorded, and … , within …',
       'Where … , continue … rather than …'],
 check=['Is the check scoped to the whole answer?',
        'Is the first batch bounded by a number?',
        'Is a hold period stated?',
        'Is every recipient and wording recorded?'],
 model=['Release a changed standard answer so that an error in it reaches 100 people rather than 4,000',
        'Amendments to the 9 published standard answers; amendments to welfare correspondence are out of scope and go to the duty officer',
        'The amended answer, the published requirement it implements, and the record of outgoing communications',
        'Send the amended answer to the first 100 recipients only and then hold it for 24 hours; during the hold, have 1 officer read the whole answer against the published requirement and not only the amended sentence; record for every recipient the exact wording sent, the date and the language; release to the remainder only on that officer’s written clearance',
        '100 sent, 1 clearance recorded, and the remainder released or held, within 48 hours of amendment',
        'Where the officer cannot clear the answer within the hold, continue sending the previous version rather than the amended one'],
 cost='4,106 people told that they had 3 months to register a birth when they had a year, over '
      '9 weeks, in 11 languages, found by chance.'),

rev_fig=figs.split('STRUCTURE',
                   'Intensity',
                   ['a very regrettable and serious incident',
                    'checked, was reviewing and has corrected',
                    'bad, and quite extensive, and large',
                    'we deeply apologise most sincerely'],
                   'Parallelism and restraint',
                   ['One sentence was wrong. It went to 4,106 people.',
                    'checked the wording, found the error, corrected the answer',
                    'a smaller mistake, and a worse position',
                    'we were wrong, and we are sorry']),
rev_fig_cap='Same form in parallel; weight on the third; after a figure, no adjectives.',
rev=dict(
 read=[('At volume an error reaches', ['fewer people', 'more people, nameably', 'the same people', 'nobody'], 1),
       ('By hand the repairable proportion is', ['high', 'nil', 'half', 'unknown'], 1),
       ('The first batch', ['prevents errors', 'bounds the damage', 'explains the failure', 'replaces the check'], 1),
       ('In the Decision Room, how long was the correction?', ['310 words', '61 words', '4 pages', 'unpublished'], 1)],
 listen_text='Nine officers cleared the amended answer. All nine read the sentence stating '
             'three months, in a document whose whole purpose was to implement a one-year '
             'rule, and none of them saw it, because each was checking the sentence that had '
             'changed.',
 listen=[('Nine officers ____________ the amended answer.', 'cleared'),
         ('A document whose whole ____________ was to implement a one-year rule.', 'purpose'),
         ('None of them ____________ it.', 'saw'),
         ('Each was checking the sentence that had ____________.', 'changed')],
 speak=['Describe a process in three parallel steps.',
        'Say exactly how many people a mistake of yours could reach.'],
 write='Write a four-sentence correction with no adjectives in it.',
 vocab=[('The ability to say exactly who received what is a ____________.', 'traceability of recipients'),
        ('The extent of what an error reaches before it is stopped is a ____________.', 'blast radius'),
        ('The issuing of a change to a small group before all is a ____________.', 'staged release'),
        ('The condition that allowed the error to occur is a ____________.', 'root cause'),
        ('An error repeated wherever a rule applies is a ____________.', 'systematic mistake')],
 gram=[('The section checked the wording, ____________ the error and corrected the answer.', 'found'),
       ('A smaller mistake, and a ____________ position.', 'worse'),
       ('We were wrong, and we ____________ sorry.', 'are'),
       ('Read it, check it, ____________ it.', 'send'),
       ('Not the error but the ____________.', 'reach')]),

found=['Work out how many people a mistake in your work could reach before anybody noticed.',
       'Find out whether your office records the exact wording it sent to each person.',
       'Propose a first batch and a hold for one change.',
       'Write one four-sentence correction with no adjectives.'],
end_line='A smaller mistake, and a worse position.',
end_next='Book 6: What Must Not Leave the Building',
)
