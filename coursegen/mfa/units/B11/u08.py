# -*- coding: utf-8 -*-
import figs

U = dict(
num=8, title='One Instruction, Two Drafts',
gram='reported statements',
ai='why one instruction produces two different drafts',
strap='CEFR B1 · Grammar: reported statements · AI: why one instruction gives two drafts',
cando=['report what somebody said, with the tense moved back correctly',
       'report an instruction without changing what it required',
       'explain why the same tasking produces different drafts',
       'say which parts of a document must be identical every time',
       'use a standard form to remove variation that does not help'],
hero=('THE SAME TASKING, TWICE, TWENTY MINUTES APART',
      ['Two drafts of the same note, both correct, neither the same.',
       'One said we would reply in due course. One gave a date.'],
      [(730, 'orange', 'short'), (1390, 'purple', 'long'),
       (2050, 'teal', 'short'), (2690, 'blue', 'long')]),
hero_cap='Two printouts on one desk, which is how the question was noticed at all.',

warm=['Have two colleagues ever produced very different work from one instruction?',
      'Which parts of your documents must be word for word the same every time?',
      'Where is variation useful, and where is it a problem?'],
read=[
 'Lina asked for a draft reply to a Verenian note, read it, went to a meeting, and on her '
 'return asked for the draft again because she had closed the window. The second draft was '
 'not the same as the first. Both were correct, both were in the house form, and they '
 'differed in three places.',
 'The first draft said that the Ministry would revert in due course. The second gave a date. '
 'The first referred to the note by its number; the second referred to it by number and date. '
 'The first used four paragraphs and the second used three.',
 'She showed both to Omar Nasri, who was not surprised. He said that these systems do not '
 'repeat themselves exactly, and that asking the same question twice is a reasonable way of '
 'finding out which parts of an answer are solid and which are not.',
 'The difference that mattered was the date. In due course commits the Ministry to nothing. A '
 'date commits it to something, and no instruction had said whether a date should be given at '
 'all. The system had supplied one in one draft because our notes often contain one.',
 'Omar’s rule is short and he has written it above his desk. Where variation does not matter, '
 'let it vary. Where a sentence creates an obligation, a courtesy or a precedent, it must come '
 'from a standard form and not from a draft, because a draft is a different sentence every '
 'time you ask.'],
c_a=[('Why did Lina ask for the draft twice?', 'she had closed the window after reading it'),
     ('In how many places did the drafts differ?', 'three'),
     ('What did the first draft say about timing?', 'that the Ministry would revert in due course'),
     ('What did the second draft give?', 'a date'),
     ('Why was Omar not surprised?', 'because these systems do not repeat themselves exactly'),
     ('What is Omar’s rule?', 'let variation stand where it does not matter; take obligations from a standard form')],
c_b=[('One of the two drafts was incorrect.', 'F'),
     ('The drafts differed in the number of paragraphs.', 'T'),
     ('"In due course" commits the Ministry to a date.', 'F'),
     ('The instruction had said whether to give a date.', 'F'),
     ('Omar has written his rule down.', 'T'),
     ('Asking twice is a way of finding what is solid.', 'T')],
c_c=[('Both were in the house ____________.', 'form'),
     ('The second referred to it by number and ____________.', 'date'),
     ('These systems do not repeat themselves ____________.', 'exactly'),
     ('A date commits it to ____________.', 'something'),
     ('Where variation does not matter, let it ____________.', 'vary'),
     ('A draft is a different sentence every time you ____________.', 'ask')],
c_d=[('The difference that mattered was the ( date / paragraph count ).', ['date', 'paragraph count'], 0),
     ('Where did the date come from?', ['the instruction', 'the Ministry’s usual notes', 'the Verenian note', 'the file'], 1),
     ('What does "in due course" commit the Ministry to?', ['a week', 'nothing', 'a month', 'a reply'], 1),
     ('Omar suggests asking twice in order to', ['save time', 'find what is solid', 'check spelling', 'compare length'], 1),
     ('Obligations should come from', ['a draft', 'a standard form', 'the file', 'the sender'], 1)],
c_e=('Report each sentence. Put the reported version in the right column.',
     [('"We will reply in May."', 'would + verb'),
      ('"The matter is still open."', 'past simple'),
      ('"We have sent the note."', 'past perfect'),
      ('"We are preparing a reply."', 'past continuous'),
      ('"We can confirm the dates."', 'could + verb'),
      ('"The season begins in May."', 'present kept, a general truth')],
     ['would + verb', 'past simple', 'past perfect', 'past continuous',
      'could + verb', 'present kept, a general truth']),

v_fig_title='THE SAME, AND NOT THE SAME',
v_fig=[('doc', 'a version'), ('chart', 'variation'), ('scale', 'a baseline'),
       ('seal', 'a standard form'), ('key', 'a spot check'), ('book', 'a house style')],
v_fig_cap='Six words for the difference between work that varies and work that must not.',
vocab=[
 ('a version', 'one of several forms the same document has taken'),
 ('a run', 'one occasion on which a task was performed'),
 ('variation', 'difference between things that were meant to be the same'),
 ('consistency', 'the quality of coming out the same each time'),
 ('reproducible', 'able to be produced again with the same result'),
 ('a sample', 'a small number of cases examined to judge the whole'),
 ('a comparison', 'the placing of two things side by side to see the difference'),
 ('a baseline', 'the agreed state against which later changes are measured'),
 ('a standard form', 'a fixed text used unchanged whenever the case arises'),
 ('divergence', 'the growing apart of two things that began the same'),
 ('to differ', 'to be unlike in some respect'),
 ('identical', 'the same in every detail'),
 ('interchangeable', 'able to be used in place of one another'),
 ('a spot check', 'an unannounced check of a few cases'),
 ('a second opinion', 'an independent view sought to test the first'),
 ('to reconcile', 'to find and explain the differences between two records'),
 ('a deviation', 'a departure from what was laid down'),
 ('uniform', 'the same throughout, with nothing varying'),
 ('a house style', 'the way a particular ministry writes, as a matter of practice'),
 ('a yardstick', 'the standard against which something is measured')],
v_a=[('A fixed text used unchanged whenever the case arises is a ____________.', 'standard form'),
     ('The quality of coming out the same each time is ____________.', 'consistency'),
     ('An unannounced check of a few cases is a ____________.', 'spot check'),
     ('To find and explain differences between two records is to ____________ them.', 'reconcile'),
     ('A departure from what was laid down is a ____________.', 'deviation'),
     ('The growing apart of two things that began the same is ____________.', 'divergence'),
     ('The standard against which something is measured is a ____________.', 'yardstick'),
     ('Able to be produced again with the same result is ____________.', 'reproducible')],
v_b=[('A baseline is the agreed state against which', 'later changes are measured.'),
     ('A sample is a small number of cases examined', 'to judge the whole.'),
     ('A house style is the way a particular ministry writes,', 'as a matter of practice.'),
     ('Interchangeable means able to be used', 'in place of one another.'),
     ('A comparison is the placing of two things side by side', 'to see the difference.')],

g_title='Grammar: reported statements',
g_rule=['Move the tense back one step: will becomes would, is becomes was, have becomes had.',
        'Change the person and the time words: tomorrow becomes the next day.',
        'A general truth may keep its present tense: he said the season begins in May.',
        'Report what was required, not what you think was meant.'],
g_fig=('LOOSE',
       ['He said he will reply in May.',
        'She said the matter is still open.',
        'He said they have sent the note yesterday.',
        'She said we must to confirm the dates.'],
       'PRECISE',
       ['He said he would reply in May.',
        'She said the matter was still open.',
        'He said they had sent the note the day before.',
        'She said we had to confirm the dates.'],
       'four reports with the tense or the time word unmoved',
       'four correctly moved back one step'),
g_fig_cap='Reported speech is where a record quietly changes what somebody promised.',
g_a=[('"We will reply in May." → He said that they ____________ reply in May.', 'would'),
     ('"The matter is still open." → She said that the matter ____________ still open.', 'was'),
     ('"We have sent the note." → He said that they ____________ the note.', 'had sent'),
     ('"We are preparing a reply." → She said that they ____________ a reply.', 'were preparing'),
     ('"We can confirm the dates." → He said that they ____________ confirm the dates.', 'could'),
     ('"The season begins in May." → She said that the season ____________ in May.', 'begins'),
     ('"We must consult the capital." → He said that they ____________ consult the capital.', 'had to'),
     ('"We sent it yesterday." → She said that they had sent it ____________.', 'the day before'),
     ('"We may need more time." → He said that they ____________ need more time.', 'might')],
g_b=[('In reported speech the tense usually moves ( forward / back ) one step.', ['forward', 'back'], 1),
     ('"We will reply." → He said that they ____ reply.', ['will', 'would', 'shall', 'had'], 1),
     ('"We have sent it." → He said that they ____ it.', ['have sent', 'had sent', 'sent', 'would send'], 1),
     ('"We must consult." → He said that they ____ consult.', ['must to', 'had to', 'have to', 'would must'], 1),
     ('"We sent it yesterday." → … they had sent it ____.', ['yesterday', 'the day before', 'today', 'then yesterday'], 1),
     ('A general truth in reported speech', ['always moves back', 'may keep the present', 'is omitted', 'becomes a question'], 1)],

d1=dict(title='Two drafts, three differences',
        fig=(['They are not the same.', 'They never are.'],
             ['Is that a fault?', 'Only in one of the three places.']),
        cap='Lina and Omar Nasri, with both printouts.',
        lines=[('Lina', 'I asked for the same draft twice and got two different notes.'),
               ('Omar', 'You will always get two different notes. It does not repeat itself '
                        'exactly, and nothing makes it.'),
               ('Lina', 'Three differences. Four paragraphs or three. Reference by number, or by '
                        'number and date. And in due course, or a date.'),
               ('Omar', 'Rank them.'),
               ('Lina', 'The paragraph count does not matter at all. The reference style I '
                        'mildly care about.'),
               ('Omar', 'And the third?'),
               ('Lina', 'The third is a commitment. In due course binds us to nothing. A date '
                        'binds us.'),
               ('Omar', 'So two of the three differences are free and one is expensive. That is '
                        'the usual proportion.'),
               ('Lina', 'Why did it give a date at all? Nothing told it to.'),
               ('Omar', 'Because our notes often contain one, so a date is part of what one of '
                        'our notes looks like.'),
               ('Lina', 'Then the date must come from somewhere else.'),
               ('Omar', 'From a standard form, or from the instruction. Never from the draft. A '
                        'draft is a different sentence every time you ask.')],
        a=[('How many differences were there?', 'three'),
           ('Which difference did not matter?', 'the number of paragraphs'),
           ('Which difference mattered, and why?', 'the date, because it commits the Ministry'),
           ('Why did a date appear?', 'because the Ministry’s notes often contain one'),
           ('Where must a commitment come from?', 'a standard form or the instruction, never from the draft')],
        b=[('It does not repeat itself ____________.', 'exactly'),
           ('In due course binds us to ____________.', 'nothing'),
           ('Two of the three differences are ____________ and one is expensive.', 'free'),
           ('A draft is a different ____________ every time you ask.', 'sentence')]),
d2=dict(title='Ask it twice',
        fig=(['So ask twice, every time.', 'That doubles the work.'],
             ['It halves the surprises.', 'Does it? Prove that.']),
        cap='Omar and Karim Dalati.',
        lines=[('Omar', 'My practice is to ask twice on anything that goes outside the building, '
                        'and read the two against each other.'),
               ('Karim', 'And where they differ?'),
               ('Omar', 'Where they differ, I know the system was not sure, and I look there '
                        'first.'),
               ('Karim', 'That is a good instinct and I want to test it. Where they agree, does '
                         'that mean the answer is right?'),
               ('Omar', 'No. It means the answer is stable.'),
               ('Karim', 'Stable and wrong is entirely possible.'),
               ('Omar', 'Entirely possible, and I have seen it. Two drafts agreeing on a wrong '
                        'date because the wrong date was in the file.'),
               ('Karim', 'So the method finds uncertainty and tells you nothing about truth.'),
               ('Omar', 'That is a fair statement of it. It is still worth the two minutes, '
                        'because uncertainty is where I would otherwise not have looked.'),
               ('Karim', 'I accept that and I want it written down with the limit attached, or in '
                         'a year somebody will be saying that two matching drafts mean a document '
                         'is checked.'),
               ('Omar', 'They will say that. People already say it about the first draft.'),
               ('Karim', 'Then write the limit in the same sentence as the practice, and I still '
                         'think somebody will separate them.')],
        unresolved=True,
        a=[('What is Omar’s practice?', 'asking twice on anything leaving the building and reading the two against each other'),
           ('What does a difference tell him?', 'that the system was not sure, so he looks there first'),
           ('What does agreement mean?', 'that the answer is stable, not that it is right'),
           ('What example does Omar give?', 'two drafts agreeing on a wrong date because the wrong date was in the file'),
           ('What does Karim want, and what does he expect?', 'the limit written with the practice, and he expects somebody to separate them anyway')],
        b=[('I know the system was not ____________.', 'sure'),
           ('It means the answer is ____________.', 'stable'),
           ('Uncertainty is where I would otherwise not have ____________.', 'looked'),
           ('Write the limit in the same ____________ as the practice.', 'sentence')]),

speak=[('Say it correctly',
        ['Student A: say six sentences in direct speech.',
         'Student B: report each one, moving the tense back.',
         'Find the one that is a general truth and may keep its present tense.']),
       ('Spoken tasking',
        ['Choose a document your office sends out.',
         'Say which sentences in it must be word for word the same every time.',
         'Your partner asks where those sentences come from.']),
       ('Ask it twice',
        ['In pairs, describe a task you would do twice to compare.',
         'Say what a difference between the two would tell you.',
         'Say what an agreement between the two would not tell you.'])],

ext_title='The same instruction gives different drafts, and only some of the differences cost anything',
ext_fig=figs.datatable('TWO DRAFTS OF ONE NOTE',
                       ['Where they differ', 'Does it matter?', 'Where it should come from'],
                       [['four paragraphs or three', 'no', 'let it vary'],
                        ['reference by number, or number and date', 'a little', 'house style'],
                        ['"in due course" or a date', 'yes, it commits us', 'the instruction'],
                        ['order of the two middle points', 'no', 'let it vary'],
                        ['opening and closing formulas', 'identical in both', 'the standard form']]),
ext_fig_cap='Five places, one of which is a commitment and one of which never varied at all.',
ext=[
 'Ask for the same draft twice and you will get two different documents. This surprises '
 'people the first time and it is not a fault: these systems are not built to repeat '
 'themselves, and nothing in them is trying to. Two drafts from one tasking will share their '
 'substance and differ in their wording, their order and their length.',
 'Most of that variation is free. Whether a note runs to three paragraphs or four, whether '
 'two middle points come in one order or the other, whether a sentence begins with the date '
 'or the subject: none of this costs the Ministry anything, and insisting on uniformity would '
 'cost time for no return.',
 'Some of the variation is not free at all. A sentence that gives a date where the last draft '
 'said in due course has created a commitment. A sentence that offers assistance has created '
 'an expectation. A phrase that characterises another state’s position has created a record '
 'of what we think they think. These must be identical every time, because they are not '
 'wording, they are substance.',
 'The practical division is therefore between sentences that carry obligation, courtesy or '
 'characterisation, and everything else. The first group comes from a standard form or '
 'directly from the instruction, and is not drafted at all. The second group may vary freely, '
 'and should, because the time spent making it uniform buys nothing.',
 'There is a second use for the variation, and experienced officers find it quickly. Ask '
 'twice and read the two drafts against each other: where they differ, the system was '
 'uncertain, and that is where to look first. The method finds instability rather than error, '
 'and two drafts that agree may be agreeing on something wrong that was in the file all '
 'along.'],
dp1=('Checking and human oversight',
     'Foreign ministries deploying these systems report that staff are expected to check '
     'generated material before a decision is taken, and that review is retained rather than '
     'reduced where an output leaves the organisation.',
     'Source: reported guidance in several foreign ministries, 2025–2026.'),
e_a=[('Why do two drafts differ?', 'because these systems are not built to repeat themselves'),
     ('What kinds of variation are free?', 'length, order and ordinary wording'),
     ('Which sentences must be identical every time?', 'those carrying obligation, courtesy or characterisation'),
     ('Where should those sentences come from?', 'a standard form or directly from the instruction'),
     ('What does asking twice find?', 'instability, not error')],
e_b=[('Two drafts from one tasking will be identical.', 'F'),
     ('Paragraph count is usually worth standardising.', 'F'),
     ('A date in place of "in due course" is only wording.', 'F'),
     ('Asking twice shows where the system was uncertain.', 'T'),
     ('Two agreeing drafts prove the answer is right.', 'F'),
     ('Review is retained where an output leaves the organisation.', 'T')],

w_model=(
 'Purpose: produce a reply to the Verenian note of 11 May that commits the Ministry to '
 'nothing beyond what has been decided. Scope: the reply only; the substance of the request '
 'is out of scope and is with Legal. Inputs: the Verenian note, the standing form for holding '
 'replies, and the decision minute of 14 May. Criteria: 3 paragraphs; the opening and closing '
 'formulas from the standing form, unchanged; paragraph 2 to say that the matter is under '
 'consideration and to give no date; no offer and no characterisation of the Verenian '
 'position. Done: 1 note for clearance, drafted twice and the two compared before clearance. '
 'Fallback: where the two drafts differ in any sentence carrying an obligation, use the '
 'standing form wording and record that the drafts differed.'),
w_fig=figs.spec_card('THE TASKING FOR A HOLDING REPLY',
                     [('Purpose', 'a reply that commits us to nothing beyond what was decided'),
                      ('Scope', 'the reply only; the substance is with Legal'),
                      ('Inputs', 'their note, the standing form, the minute of 14 May'),
                      ('Criteria', 'no date, no offer, no characterisation; formulas unchanged'),
                      ('Done', '1 note, drafted twice and compared before clearance'),
                      ('Fallback', 'drafts differ on an obligation: use the standing form')]),
w_fig_cap='Drafting twice costs two minutes and is written into the tasking rather than left to habit.',
w_task='Write a tasking for a reply your office sends regularly.',
w_steps=['Say what the reply commits the Ministry to, including nothing.',
         'Name the standing form and the decision it rests on.',
         'List what the reply must not contain.',
         'Require two drafts and a comparison before clearance.',
         'Say what happens where the two differ on an obligation.'],
w_bank=['Produce a reply to … that commits … to …',
        'Cover … only; … is out of scope and is with …',
        'Work from … , the standing form for … , and …',
        '… paragraphs; formulas unchanged; paragraph … to say … and to give … ; no … and no …',
        'Where the two drafts differ in any sentence carrying … , use … and record …'],
w_check=['Does it say what the reply commits the Ministry to?',
         'Is the forbidden content listed?',
         'Is drafting twice required rather than suggested?',
         'Is there a rule for a difference on an obligation?'],

t_title='Why one instruction produces two different drafts',
t_fig=figs.split('TWO KINDS OF DIFFERENCE',
                 'Free — let it vary',
                 ['three paragraphs or four',
                  'the order of two middle points',
                  'ordinary connecting words',
                  'where the date sits in a sentence'],
                 'Not free — fix it in a form',
                 ['a date instead of "in due course"',
                  'an offer of assistance',
                  'how we describe their position',
                  'the opening and closing formulas']),
t_fig_cap='The left-hand column is style. The right-hand column is policy wearing style’s clothes.',
t_body=[
 'Expect two drafts from one tasking to differ, and stop treating that as a defect. These '
 'systems are not built to repeat themselves, and most of what varies between two drafts is '
 'length, order and ordinary wording, none of which costs the Ministry anything. Insisting on '
 'uniformity across all of it would buy nothing and take time.',
 'Then separate the sentences that are not style at all. A date where the other draft said in '
 'due course is a commitment. An offer of help is an expectation. A phrase describing another '
 'state’s position is a record of what we believe they think. These three kinds of sentence '
 'must be identical every time, which means they come from a standard form or straight from '
 'the instruction, and are not drafted.',
 'Finally, use the variation. Ask twice for anything that leaves the building and read the two '
 'against each other: where they differ, the system was unsure, and that is where to look '
 'first. Be careful what you conclude from agreement, though, because two drafts can agree '
 'perfectly on something wrong that was in the file all along.'],
t_say=[('Let it vary: ', 'Three paragraphs or four does not matter.'),
       ('Fix the commitment: ', 'The date comes from the instruction, not the draft.'),
       ('Read the difference: ', 'Where the two drafts differ, look there first.')],
t_bound=('Comparing two drafts shows you where a system was unstable. It does not show you '
         'where it was wrong, it cannot catch an error that is stable because it came from '
         'the file, and two matching drafts are evidence of consistency and of nothing else.'),
t_a=[('Three paragraphs or four does not ____________.', 'matter'),
     ('The date comes from the ____________, not the draft.', 'instruction'),
     ('Where the two drafts differ, look ____________ first.', 'there'),
     ('These systems are not built to ____________ themselves.', 'repeat'),
     ('A phrase describing another state’s position is a ____________.', 'record'),
     ('Two matching drafts are evidence of ____________ and nothing else.', 'consistency')],
t_b_rubric='Decide whether each difference is free or must be fixed, and say where it comes from.',
t_b=[('One draft has four paragraphs, the other three.', 'free; let it vary'),
     ('One draft gives a date, the other says in due course.', 'fixed; the date comes from the instruction'),
     ('One draft offers to assist, the other does not.', 'fixed; offers come from the standing form only'),
     ('One draft calls their position cautious, the other does not.', 'fixed; characterisation comes from the instruction')],

case=dict(
 title='The Decision Room · The date that was never decided',
 brief=[
  'A holding reply to Verenia went out in March with the sentence that the Ministry would '
  'revert by 30 April. No instruction had mentioned a date, and no minute records a decision '
  'to give one.',
  'The Ministry did not revert by 30 April. It reverted on 19 May, after Legal had finished. '
  'The Verenian embassy sent a note on 6 May referring to the undertaking of 30 April and '
  'asking when a reply might be expected.',
  'Samir Haddad regards this as minor. Tarek Zayed does not, because the undertaking is now '
  'in the Verenian file and will be cited the next time the Ministry asks them for time.'],
 exhibit=figs.datatable('THE UNDERTAKING NOBODY MADE',
                        ['', 'Position', 'Note'],
                        [['instruction mentioned a date', 'no', '—'],
                         ['minute recording a decision', 'none', '—'],
                         ['date in the outgoing note', '30 April', 'from the draft'],
                         ['actual reply', '19 May', '19 days late'],
                         ['Verenian note citing it', '6 May', 'courteous'],
                         ['now in their file', 'yes', 'permanently']]),
 exhibit_cap='A date that existed in no decision is now a fact in two ministries’ files.',
 exhibit_note='The Ministry’s own file shows the undertaking only in the outgoing note itself; '
              'there is no covering minute.',
 voices=[('Samir Haddad', 'Legal and Treaties',
          'A holding reply that slips by three weeks is not a breach of anything. They asked '
          'politely and we answered. I would spend the energy on the substance.'),
         ('Tarek Zayed', 'Protocol',
          'It is in their file. The next time we ask Verenia for an extension, somebody will '
          'put a paper in front of their minister that says we missed our own date in March. '
          'That is what files are for.'),
         ('Lina Khalil', 'desk officer, Bilateral Affairs',
          'What troubles me is that nobody decided it. If we had decided 30 April and missed '
          'it, that would be an ordinary failure. We were bound by a sentence.')],
 steps=[('Find it', 'Where did the date come from?'),
        ('Compare it', 'What was promised and what happened?'),
        ('Infer it', 'Why does Tarek care about the Verenian file?'),
        ('Weigh it', 'A small slippage against an undertaking nobody made.'),
        ('Decide', 'What rule follows?')],
 analysis=[('Find it. Where did 30 April come from?', 'the draft, because the Ministry’s notes often contain a date'),
           ('Compare it. How late was the reply?', 'nineteen days'),
           ('Infer it. Why does the Verenian file matter?', 'because the undertaking will be cited the next time the Ministry asks for time'),
           ('Weigh it. What is Lina’s distinction?', 'between missing a decided date and being bound by a sentence nobody decided'),
           ('Decide. What rule would you write?', 'answers vary; any rule must cover dates arriving without a decision')],
 decision='Write the Ministry’s rule on dates in outgoing correspondence.',
 decision_steps=['Say when a date may appear in an outgoing note.',
                 'Say where the date must come from.',
                 'Say who checks for dates before clearance.',
                 'Say what is done when a date has gone out without a decision.'],
 bank=['A date may appear in an outgoing note only where …',
       'The date must come from …',
       '… checks every outgoing note for …',
       'Where a date has gone out without … , …',
       'This is reviewed …'],
 outcome='The rule now reads that a date may appear in an outgoing note only where a minute '
         'records the decision to give it, and clearance includes a check for dates. In the '
         'first three months the check stopped seven dates, five of which were then properly '
         'decided and given, and two of which were removed. Samir, who called the matter '
         'minor, notes that five of the seven were dates the Ministry was happy to give, and '
         'that the rule has mostly produced a minute recording what everybody already '
         'intended.',
 outcome_q=[('How many dates did the check stop in three months?', 'seven: five then decided and given, two removed'),
            ('What is Samir’s observation about the rule?', 'that it has mostly produced minutes recording what everybody already intended')],
 tags=[]),

lab=dict(
 title='Brief Lab · Draft a holding reply',
 task=['This is the tasking that produced the March note with the date in it, written at the '
       'foot of the incoming note in pencil and typed up by somebody else.',
       'It is the most ordinary instruction in the building, and it left the one thing that '
       'mattered entirely open.'],
 draft=['Holding reply to the Verenian note, please.',
        'Say we are looking at it.',
        'Usual form.',
        'Reasonable timescale.',
        'Nothing on the substance.',
        'Out this week.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, one of which invites a commitment without making one.',
 asked=['A holding reply with no date',
        'The standing formulas unchanged',
        'No offer and no characterisation'],
 back=['A correct holding reply',
       'An undertaking to revert by 30 April',
       'No minute recording the date'],
 gap='"Reasonable timescale" is the whole failure: it asks for a timescale without deciding '
     'one, so the drafter supplies the kind of date our notes usually contain. "Usual form" '
     'names no form and "out this week" fixes the wrong deadline, which is the drafter’s and '
     'not the Ministry’s.',
 back_cap='A perfectly ordinary note carrying a date nobody in the Ministry had decided.',
 back_note='The phrase "reasonable timescale" appears in 60 taskings in the file. Most of the '
           'time the drafter wrote in due course. This time it wrote a date.',
 diagnosis=[('[1] "holding reply" — holding for how long, committing to what?', 'undefined done'),
            ('[2] "say we are looking at it" — in what words, with what date?', 'unstated criterion'),
            ('[3] "usual form" — which standing form?', 'unscoped set'),
            ('[4] "reasonable timescale" — decided by whom, and recorded where?', 'unstated criterion'),
            ('[5] "nothing on the substance" — and on their position?', 'unscoped set'),
            ('[6] "out this week" — finished meaning cleared, or sent?', 'undefined done')],
 rewrite='Rewrite the tasking so that the question of a date is decided in the tasking itself.',
 scaffold=['What the reply commits the Ministry to, including nothing',
           'Which part is covered and who holds the rest',
           'The incoming note, the standing form and the decision minute',
           'What each paragraph says, and what is forbidden',
           'What comes back, drafted how many times, cleared by whom',
           'What to do where the two drafts differ on an obligation'],
 bank=['Produce a reply to … that commits the Ministry to …',
       'Cover … only; … is out of scope and is with …',
       'Work from … , the standing form for … , and …',
       '… paragraphs; formulas unchanged; paragraph … to say … and to give … ; no … and no …',
       'Return 1 note for clearance, drafted … and compared …',
       'Where the two drafts differ in any sentence carrying … , … and record …'],
 check=['Is the question of a date decided in the tasking?',
        'Is the standing form named?',
        'Are offers and characterisations forbidden expressly?',
        'Is a comparison of two drafts required before clearance?'],
 model=['Produce a reply to the Verenian note of 11 May that commits the Ministry to nothing beyond what has been decided',
        'The reply only; the substance of the request is out of scope and is with Legal',
        'The Verenian note, the standing form for holding replies, and the decision minute of 14 May',
        '3 paragraphs; the opening and closing formulas from the standing form, unchanged; paragraph 2 to say that the matter is under consideration and to give no date; no offer and no characterisation of the Verenian position',
        '1 note for clearance, drafted twice and the two compared before clearance',
        'Where the two drafts differ in any sentence carrying an obligation, use the standing form wording and record that the drafts differed'],
 cost='1 undertaking to a foreign ministry that nobody in this one had decided, 19 days late, '
      'and a note from their embassy citing it back.'),

rev_fig=figs.split('REPORTED STATEMENTS',
                   'Wrong',
                   ['He said he will reply in May.',
                    'She said the matter is still open.',
                    'He said they have sent it yesterday.',
                    'She said we must to confirm.'],
                   'Right',
                   ['He said he would reply in May.',
                    'She said the matter was still open.',
                    'He said they had sent it the day before.',
                    'She said we had to confirm.']),
rev_fig_cap='Tense back one step, and the time word moved with it.',
rev=dict(
 read=[('Two drafts from one tasking will', ['be identical', 'differ', 'be contradictory', 'be refused'], 1),
       ('Which variation is not free?', ['paragraph count', 'a date in place of "in due course"', 'word order', 'connecting words'], 1),
       ('Asking twice finds', ['error', 'instability', 'omissions', 'style'], 1),
       ('In the Decision Room, where did 30 April come from?', ['a minute', 'the draft', 'the embassy', 'Legal'], 1)],
 listen_text='Expect two drafts from one tasking to differ, and stop treating that as a '
             'defect. Then separate the sentences that are not style at all: a date where the '
             'other draft said in due course is a commitment. Finally use the variation, '
             'because where two drafts differ the system was unsure, and that is where to look '
             'first.',
 listen=[('Stop treating that as a ____________.', 'defect'),
         ('The sentences that are not ____________ at all.', 'style'),
         ('Where the other draft said in due ____________.', 'course'),
         ('That is where to ____________ first.', 'look')],
 speak=['Name three sentences in your documents that must never vary.',
        'Say where each of them comes from.'],
 write='Write one tasking line that decides whether a date may appear.',
 vocab=[('A fixed text used unchanged whenever the case arises is a ____________.', 'standard form'),
        ('An unannounced check of a few cases is a ____________.', 'spot check'),
        ('A departure from what was laid down is a ____________.', 'deviation'),
        ('To find and explain differences between two records is to ____________ them.', 'reconcile'),
        ('The standard against which something is measured is a ____________.', 'yardstick')],
 gram=[('"We will reply in May." → He said that they ____________ reply in May.', 'would'),
       ('"The matter is still open." → She said that the matter ____________ still open.', 'was'),
       ('"We have sent the note." → He said that they ____________ the note.', 'had sent'),
       ('"We must consult the capital." → He said that they ____________ consult.', 'had to'),
       ('"We sent it yesterday." → She said that they had sent it ____________.', 'the day before')]),

found=['Ask for the same draft twice and compare the two.',
       'List the sentences in your outgoing documents that must never vary.',
       'Find out where each of those sentences comes from.',
       'Check one outgoing note for a date nobody decided.'],
end_line='A draft is a different sentence every time you ask.',
end_next='Next: It Never Says It Does Not Know',
)
