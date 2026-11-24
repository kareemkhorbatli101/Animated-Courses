# -*- coding: utf-8 -*-
import figs

U = dict(
num=2, title='One Instruction, One Output',
gram='word order and the placement of only, also, even',
ai='transforming what you already have: notes to letter, call to summary',
strap='CEFR B1 · Grammar: word order and the placement of only, also, even · AI: transforming what you already have',
cando=['put only, also and even next to the word they actually limit',
       'explain how moving one small word changes an entire instruction',
       'describe a transformation task by naming its source and its finished form',
       'check a transformed document against the thing it came from',
       'say what a transformation can and cannot add to the original'],
hero=('THE CALL NOTES ON JONAS RIEDEL’S SCREEN',
      ['Eleven calls on Monday, eleven letters by Tuesday.',
       'The notes already contained everything. That was the point.'],
      [(900, 'blue', 'short'), (1600, 'teal', 'long'), (2400, 'grey', 'short')]),
hero_cap='Transformation work: the answer is already in the room, in the wrong shape.',

warm=['What is the difference between writing something and rewriting something?',
      'Where does the sentence "I only asked for the figures" put its limit?',
      'What records does your workplace keep that nobody can read quickly?'],
read=[
 'Fatima Zahra takes about eleven client calls on a Monday, and she writes notes while she '
 'is talking. Her notes are short, fast and full of abbreviations that only she understands, '
 'which was fine for three years because she was the only person who ever needed them. Then '
 'Arclight took on four more clients and Fatima stopped being able to write the follow-up '
 'letters herself.',
 'Jonas suggested turning the notes into letters automatically. This is transformation work: '
 'the information already exists, and what is wrong with it is only its shape. Nothing new '
 'has to be invented, which makes it the safest kind of work to hand over and much the '
 'easiest kind to check afterwards.',
 'The first batch came back and ten of the eleven letters were usable with small edits. The '
 'eleventh was a disaster, and it was a disaster in an interesting way. Fatima had written '
 'the note "only confirm the March figure", meaning that the March figure was the single '
 'thing to be confirmed, and nothing else should be mentioned.',
 'The letter that came back confirmed the March figure and then discussed four other open '
 'items, because "only confirm" can also be read as a limit on the verb rather than on the '
 'object. Confirm it, do not approve it. Both readings are grammatical. Only one of them '
 'was what Fatima meant, and her note did not say which.',
 'Dalia now writes the word in its proper place and accepts that it looks clumsy. "Confirm '
 'the March figure only" is uglier than "only confirm the March figure", and it cannot be '
 'misread. She says that an instruction is not writing, and does not have to be beautiful. '
 'It has to survive being read by somebody tired, or by something that does not care.'],
c_a=[('How many client calls does Fatima take on a Monday?', 'about eleven'),
     ('Why did her notes stop working?', 'Arclight took on four more clients and she could no longer write all the letters herself'),
     ('Why is transformation the safest work to hand over?', 'the information already exists, so the output can be checked against the source'),
     ('What were the two readings of "only confirm the March figure"?', 'confirm only that figure, or only confirm it rather than approve it'),
     ('What does Dalia now accept about her instructions?', 'that they look clumsy, because they have to survive a tired or indifferent reader')],
c_b=[('Fatima writes her notes after the call has finished.', 'F'),
     ('Transformation work invents new information.', 'F'),
     ('Ten of the eleven letters needed only small edits.', 'T'),
     ('Both readings of Fatima’s note were grammatically possible.', 'T'),
     ('Dalia thinks an instruction should be beautiful.', 'F'),
     ('The eleventh letter discussed items Fatima had not wanted mentioned.', 'T')],
c_c=[('Fatima’s notes are full of ____________ that only she understands.', 'abbreviations'),
     ('What is wrong with the information is only its ____________.', 'shape'),
     ('Ten of the eleven letters were ____________ with small edits.', 'usable'),
     ('Confirm it, do not ____________ it.', 'approve'),
     ('An instruction has to ____________ being read by somebody tired.', 'survive'),
     ('Dalia writes the word in its proper ____________.', 'place')],
c_d=[('Transformation work is safer because the output can be ( checked / generated ).', ['checked', 'generated'], 0),
     ('"Only confirm the March figure" is ambiguous because only can limit', ['the verb or the object', 'the subject only', 'nothing at all', 'the date'], 0),
     ('Fatima’s notes worked for three years because', ['they were well written', 'she was the only reader', 'they were short', 'clients liked them'], 1),
     ('Dalia’s rule is that an instruction must be', ['elegant', 'short', 'impossible to misread', 'formal'], 2),
     ('The eleventh letter went wrong at the stage of', ['extraction', 'classification', 'the instruction', 'the client'], 2)],
c_e=('Where is the limit? Put each sentence under what the word "only" restricts.',
     [('Only Fatima writes the notes.', 'Limits who'),
      ('Fatima only writes the notes.', 'Limits the action'),
      ('Fatima writes only the notes.', 'Limits what'),
      ('Only send the March figure.', 'Limits the action'),
      ('Send only the March figure.', 'Limits what'),
      ('Only Jonas can run it.', 'Limits who')],
     ['Limits who', 'Limits the action', 'Limits what']),

v_fig_title='FROM ONE SHAPE INTO ANOTHER',
v_fig=[('note', 'call notes'), ('doc', 'a letter'), ('chart', 'a summary'),
       ('globe', 'a translation'), ('bank', 'a record'), ('scale', 'a comparison')],
v_fig_cap='Six transformations. In every one, the facts were already there.',
vocab=[
 ('abbreviation', 'a shortened form of a word, used to write faster'),
 ('follow-up', 'the contact that comes after a first conversation'),
 ('source document', 'the original paper or file that other work is based on'),
 ('shorthand', 'a quick private way of writing that others may not follow'),
 ('minutes', 'the written record of what was said and agreed at a meeting'),
 ('transcript', 'a written version of exactly what was spoken'),
 ('summary', 'a short account that keeps the important points and drops the rest'),
 ('correspondence', 'the letters and emails exchanged between two parties'),
 ('reword', 'to say the same thing again using different words'),
 ('tone', 'the attitude a piece of writing shows towards its reader'),
 ('ambiguous', 'able to be understood in more than one way'),
 ('faithful', 'keeping closely to the original, with nothing added or removed'),
 ('omission', 'something left out, whether on purpose or by accident'),
 ('edit', 'to change a text to improve it or correct it'),
 ('proofread', 'to read a finished text looking for mistakes'),
 ('batch', 'a group of items dealt with together in one run'),
 ('legible', 'clear enough to be read without difficulty'),
 ('verbatim', 'in exactly the same words as the original'),
 ('paraphrase', 'to express somebody else’s meaning in your own words'),
 ('register', 'how formal or informal a piece of language is')],
v_a=[('Her notes are written in a private ____________ nobody else can follow.', 'shorthand'),
     ('A ____________ keeps the important points and drops the rest.', 'summary'),
     ('A sentence that can be read two ways is ____________.', 'ambiguous'),
     ('A ____________ translation keeps closely to the original.', 'faithful'),
     ('We deal with eleven letters in one ____________.', 'batch'),
     ('Quoting somebody word for word is quoting them ____________.', 'verbatim'),
     ('Please ____________ it before it goes to the client.', 'proofread'),
     ('The letter was accurate, but the ____________ was far too casual.', 'register')],
v_b=[('A transcript is a written version of', 'exactly what was spoken.'),
     ('Minutes are the record of', 'what a meeting said and agreed.'),
     ('An omission is something', 'left out of the finished text.'),
     ('To paraphrase is to express a meaning', 'in your own words.'),
     ('Correspondence is the letters and emails', 'two parties exchange.')],

g_title='Grammar: word order and the placement of only, also, even',
g_rule=['Only, also and even limit whatever comes immediately after them.',
        'Move the word, and you move the limit: Only send the figure / Send only the figure.',
        'Put only directly before the word it restricts, or directly after it for emphasis.',
        'In an instruction, prefer the clumsy position that has one reading.'],
g_fig=('LOOSE',
       ['Only confirm the March figure.',
        'We also need the April total.',
        'Even send the dormant accounts.',
        'I just want the summary.'],
       'PRECISE',
       ['Confirm the March figure, and nothing else.',
        'Send the April total as well as the March one.',
        'Include dormant accounts in this run.',
        'Return the summary only, not the full notes.'],
       'the small word floats; the limit moves with it',
       'the limit is stated, not positioned'),
g_fig_cap='Four one-word differences, each of which changes what comes back.',
g_a=[('Send ____________ the March figure, not the April one. (only)', 'only'),
     ('____________ Jonas can start a run. Nobody else has access. (only)', 'Only'),
     ('We ____________ need the April total, as well as March. (also)', 'also'),
     ('She ____________ read the notes; she did not rewrite them. (only)', 'only'),
     ('____________ Fatima could not read her own shorthand. (even)', 'Even'),
     ('Confirm the figure ____________, and leave the rest alone. (only)', 'only'),
     ('He ____________ sent the summary, not the transcript. (only)', 'only'),
     ('They ____________ proofread it before it went out. (also)', 'also'),
     ('____________ the shortest letter took forty minutes. (even)', 'Even')],
g_b=[('( Only send / Send only ) the March figure — nothing else.', ['Only send', 'Send only'], 1),
     ('____ Jonas has access to the run.', ['Only', 'Also', 'Even', 'Just'], 0),
     ('We need the April total ____.', ['also', 'as well', 'even', 'only'], 1),
     ('She ____ read it; she did not change it.', ['also', 'even', 'only', 'simply only'], 2),
     ('____ the client noticed the error.', ['Only', 'Even', 'Also', 'Just'], 1),
     ('Return the summary ____, not the notes.', ['only', 'also', 'even', 'alone only'], 0)],

d1=dict(title='One word, two meanings',
        fig=(['Only confirm the March figure.', 'I meant nothing else at all.'],
             ['It read it as confirm, not approve.', 'Both are allowed by the words.']),
        cap='Fatima and Jonas, reading the eleventh letter.',
        lines=[('Fatima', 'I wrote only confirm the March figure. It confirmed four other things.'),
               ('Jonas', 'It read only as a limit on the verb. Confirm, do not approve.'),
               ('Fatima', 'That is not what anybody would mean by it.'),
               ('Jonas', 'It is what quite a lot of people would mean by it, in a different sentence.'),
               ('Fatima', 'Such as?'),
               ('Jonas', 'Only check the figure, do not act on it. Same shape, other reading.'),
               ('Fatima', 'So I have to write it in the ugly place.'),
               ('Jonas', 'Confirm the March figure only. Four words moved, one reading left.'),
               ('Fatima', 'It reads like something from a form.'),
               ('Jonas', 'It is something from a form. Nobody is going to admire it.'),
               ('Fatima', 'Fine. I will be clumsy on purpose.'),
               ('Jonas', 'That is the whole skill, more or less. Clumsy on purpose.')],
        a=[('What did Fatima mean by her note?', 'that the March figure was the only thing to confirm'),
           ('How was it read instead?', 'as a limit on the verb: confirm but do not approve'),
           ('What example does Jonas give of the other reading?', 'only check the figure, do not act on it'),
           ('Where does Fatima have to put the word now?', 'after the object, at the end'),
           ('How does Jonas describe the skill?', 'being clumsy on purpose')],
        b=[('It read only as a limit on the ____________.', 'verb'),
           ('Four words moved, one ____________ left.', 'reading'),
           ('It reads like something from a ____________.', 'form'),
           ('I will be ____________ on purpose.', 'clumsy')]),
d2=dict(title='What a summary is allowed to do',
        fig=(['The summary says he was satisfied.', 'He did not use that word.'],
             ['It is a fair paraphrase.', 'It is also a claim he can deny.']),
        cap='Marta Olsen and Fatima, over a client summary.',
        lines=[('Marta', 'Your summary says Mr Boateng was satisfied with the arrangement.'),
               ('Fatima', 'He was. You can hear it in the recording.'),
               ('Marta', 'Did he say the word satisfied?'),
               ('Fatima', 'No. He said that is fine, leave it with me.'),
               ('Marta', 'Then the summary has added something the source does not contain.'),
               ('Fatima', 'It is a fair paraphrase. Anybody would read it the same way.'),
               ('Marta', 'Anybody who was not arguing with us about it in six months, yes.'),
               ('Fatima', 'You want it verbatim.'),
               ('Marta', 'For anything that could be a commitment, I want it verbatim.'),
               ('Fatima', 'That makes the summaries twice as long and much harder to read.'),
               ('Marta', 'It does. I am not pretending the rule is free.'),
               ('Fatima', 'Then we disagree about where the line is, and we always will.')],
        unresolved=True,
        a=[('What word does Marta object to?', 'satisfied'),
           ('What did the client actually say?', 'that is fine, leave it with me'),
           ('What is Marta’s rule?', 'anything that could be a commitment should be quoted verbatim'),
           ('What does Fatima say the rule costs?', 'longer summaries that are harder to read'),
           ('Is the disagreement settled?', 'no; they agree only that there is a line and not where it is')],
        b=[('The summary has added something the ____________ does not contain.', 'source'),
           ('It is a fair ____________.', 'paraphrase'),
           ('For anything that could be a commitment, I want it ____________.', 'verbatim'),
           ('I am not pretending the ____________ is free.', 'rule')]),

speak=[('Move the word, move the meaning',
        ['Student A: say a sentence with only in three different positions.',
         'Student B: after each one, say exactly what is being limited.',
         'Find one pair where both of you had to stop and think.']),
       ('Spoken specification: brief a transformation',
        ['Choose a document you could have rewritten: notes, a long email, a report.',
         'Brief your partner aloud: name the source, the finished form, and what must not be added.',
         'Your partner repeats the "must not be added" line. If they cannot, you did not say it.']),
       ('Faithful or not?',
        ['One of you reads a short spoken sentence. The other writes a one-line summary.',
         'Compare: name anything in the summary that was not in the sentence.',
         'Decide together whether each addition was fair or a claim.'])],

ext_title='The quiet value is in changing the shape, not making something new',
ext_fig=figs.datatable('WHAT TRANSFORMATION LOOKS LIKE IN A SMALL COMPANY',
                       ['Source', 'Finished form', 'Can you check it?'],
                       [['handwritten call notes', 'a client letter', 'yes, line by line'],
                        ['a recorded meeting', 'minutes with actions', 'yes, against the recording'],
                        ['a 40-page contract', 'a one-page summary', 'yes, clause by clause'],
                        ['an English price list', 'the same list in Portuguese', 'yes, by a speaker'],
                        ['nothing', 'ten new subject lines', 'no']]),
ext_fig_cap='Four transformations and one generation. Notice which row cannot be checked.',
ext=[
 'If you ask people which uses of these systems have been most valuable to them, the answers '
 'that sound impressive are usually about writing something new, and the answers that are '
 'actually worth money are usually about changing the shape of something that already '
 'existed. Notes become a letter. A long contract becomes a summary with the obligations '
 'pulled to the front. A recorded conversation becomes minutes with a list of actions at '
 'the bottom.',
 'The reason transformation is worth more than it sounds is that the checking problem is '
 'already solved. When you generate something new, you can judge whether you like it, but '
 'you cannot compare it with anything. When you transform a source document, every claim in '
 'the output has an address in the input, and anybody can go and look.',
 'That gives a small company something it rarely gets, which is a cheap and honest quality '
 'test. Take the finished letter and the notes it came from, and read them side by side. '
 'Anything in the letter that is not in the notes is either an error or an addition, and '
 'both of those are worth knowing about before a client sees them.',
 'The failures in transformation work are nearly always additions rather than mistakes. The '
 'output is fluent, the facts are mostly right, and somewhere in the third paragraph a '
 'sentence has appeared that nobody said. It is usually reasonable. It is usually the kind '
 'of thing the client probably does think. It is also not in the source, and if it later '
 'matters, that is the sentence that will matter.',
 'So the useful instruction for transformation names three things rather than one: the '
 'source, the finished form, and the limit. Turn these notes into a client letter. Use only '
 'what is in the notes. Where the notes are unclear, write a question instead of a guess. '
 'That third sentence is the one people leave out, and it is the one that does the work.'],
dp1=('What people use it for',
     'Workplace surveys consistently place summarising, rewriting and drafting from existing '
     'material above analysis or decision-making in reported frequency of use.',
     'Source: general workplace technology surveys, 2026. Self-reported, and varies by role.'),
e_a=[('What kind of use does the writer say is actually worth money?', 'changing the shape of something that already exists'),
     ('Why is checking easier for transformation than for generation?', 'every claim in the output has an address in the input'),
     ('Describe the cheap quality test.', 'read the output and the source side by side and look for anything in one that is not in the other'),
     ('What kind of failure is most common in transformation?', 'additions: fluent sentences that nobody actually said'),
     ('What three things should a transformation instruction name?', 'the source, the finished form and the limit')],
e_b=[('The writer thinks generation is more valuable than transformation.', 'F'),
     ('Every claim in a transformed output can be traced to the input.', 'T'),
     ('Most transformation failures are factual mistakes.', 'F'),
     ('Reading output and source side by side is described as expensive.', 'F'),
     ('The limit is the part of the instruction people usually leave out.', 'T'),
     ('A translated price list can be checked by a speaker of the language.', 'T')],

w_model=(
 'Purpose: turn Monday’s call notes into client follow-up letters so that Fatima does not '
 'write 11 letters by hand. Scope: the 11 call notes dated 3 March, excluding the 2 marked '
 'internal. Inputs: the notes file and the standard follow-up template version 4. Criteria: '
 'use only what is in the notes; keep the client’s own words for anything that sounds like '
 'a commitment; match the template’s register. Done: 9 draft letters and a list of every '
 'point the notes left unclear. Fallback: where a note is unclear, write a question in '
 'square brackets instead of a guess.'),
w_fig=figs.chain('A TRANSFORMATION BRIEF',
                 ['Name the source, with its date',
                  'Name the finished form',
                  'State the limit: only what is in the source',
                  'Say what to do with anything unclear',
                  'Say what comes back besides the letters']),
w_fig_cap='Five moves. The third and fourth are the ones most briefs forget.',
w_task='Write a brief for turning one document you own into another form.',
w_steps=['Name a real source document: your own notes, a recording, a long email thread.',
         'Say exactly what shape you want it in, and how long it should be.',
         'Write the limit sentence: use only what is in the source.',
         'Say what should happen where the source is unclear or contradicts itself.',
         'Name one thing that must come back besides the document itself.'],
w_bank=['Turn the … dated … into a …', 'Use only what is in the …',
        'Keep the original wording where …', 'Where the source is unclear, …',
        'Return … as well as the …'],
w_check=['Have you named the source precisely enough that somebody could find it?',
         'Does your brief say what must not be added?',
         'Is there an instruction for the unclear case, or only for the clear one?',
         'Could the output be checked by somebody who was not at the meeting?'],

t_title='Transforming what you already have',
t_fig=figs.split('THE THREE-SENTENCE TRANSFORMATION BRIEF',
                 'What most briefs say',
                 ['Summarise these notes.', 'Write it up as a letter.',
                  'Make it sound professional.', 'Tidy this for the client.'],
                 'What a usable brief says',
                 ['Turn the 3 March notes into a letter.',
                  'Use only what is in the notes.',
                  'Keep his wording for anything he agreed to.',
                  'Flag anything unclear as a question.']),
t_fig_cap='The right-hand column takes about twenty seconds longer to write.',
t_body=[
 'Transformation is the operation most worth learning first, because the input already '
 'exists and so the output can be checked by anybody with two documents and ten minutes. '
 'The whole skill is in writing an instruction that names the source precisely, names the '
 'finished form precisely, and then says the thing almost nobody says, which is what must '
 'not appear in the output that was not in the input.',
 'Give the source a name and a date. The notes is not a source; the call notes dated 3 March '
 'is a source. Give the finished form a shape and a length. A letter is not a shape; a '
 'one-page client letter using template 4 is a shape. These sound pedantic until the day you '
 'have to work out which of three versions came back.',
 'Then handle the unclear case on purpose. Any real source has gaps in it, and the question '
 'is not whether the gap will be filled but by what. Left alone, a gap is filled with '
 'something plausible. Told to flag it, the gap comes back as a question, and a question is '
 'something a person can answer in four seconds.'],
t_say=[('Name the source: ', 'Turn the call notes dated 3 March into a client letter.'),
       ('State the limit: ', 'Use only what is in the notes. Add nothing that is not there.'),
       ('Handle the gap: ', 'Where the notes are unclear, write a question, not a guess.')],
t_bound=('Transformation does not verify the source. If the call notes are wrong, the letter '
         'will be wrong in exactly the same way, written beautifully, and the error will now '
         'look official. Checking the output against the input tells you nothing about '
         'whether the input was true.'),
t_a=[('Turn the call notes dated 3 March into a client ____________.', 'letter'),
     ('Use only what is in the notes. Add ____________ that is not there.', 'nothing'),
     ('Where the notes are unclear, write a ____________, not a guess.', 'question'),
     ('The notes is not a source; the notes dated 3 March is a ____________.', 'source'),
     ('A gap left alone is filled with something ____________.', 'plausible'),
     ('A question is something a person can ____________ in four seconds.', 'answer')],
t_b_rubric='Write the limit sentence this brief is missing.',
t_b=[('Summarise this contract for me.', 'Use only what is in the contract; quote any clause you rely on'),
     ('Write up Thursday’s meeting.', 'Use only what is in the recording; keep people’s own words for commitments'),
     ('Put this price list into Portuguese.', 'Translate only; do not change any figure or add any product'),
     ('Turn these notes into a proposal.', 'Use only what the client said; mark anything you had to assume')],

case=dict(
 title='Decision Clinic · The sentence nobody said',
 brief=[
  'Arclight has been turning call notes into client letters for five weeks, and the clients '
  'like the letters. They arrive the next morning instead of the next week, and they are '
  'better written than the ones Fatima used to produce at seven in the evening.',
  'Last Thursday a letter to a client called Priya Menon contained the sentence: "We '
  'understand you are happy to extend the current arrangement to the end of the year." '
  'Priya had said no such thing. She had said she would think about it over the weekend.',
  'Nobody noticed for four days. Priya noticed, replied to say she had agreed nothing, and '
  'was perfectly pleasant about it. Dalia now has to decide what the rule is, before it '
  'happens with a client who is not pleasant about it.'],
 exhibit=figs.datatable('FIVE WEEKS OF LETTERS: WHAT THE CHECK FOUND',
                        ['', 'Letters', 'Sampled', 'Additions found'],
                        [['week 1', '44', '44', '2'],
                         ['week 2', '51', '20', '1'],
                         ['week 3', '47', '10', '1'],
                         ['week 4', '49', '5', '0'],
                         ['week 5', '52', '0', '1 (by the client)']]),
 exhibit_cap='Sampling fell every week. The additions did not.',
 exhibit_note='Week 5 has a zero in the sampled column and a one in the last column. The one '
              'was found by Priya Menon.',
 voices=[('Fatima Zahra', 'client manager',
          'Keep going and sample ten per cent properly. We found four in five weeks and three '
          'of them were harmless. The letters are better than mine were.'),
         ('Marta Olsen', 'risk and liability',
          'Stop sending anything that contains a commitment until a person has read it against '
          'the notes. Not ten per cent. All of them. The harmless ones are harmless by luck.'),
         ('Kenji Watanabe', 'finance',
          'A full read is six minutes a letter, fifty letters a week, five hours. That is a '
          'day. Tell me what the day buys and I will tell you if we can afford it.')],
 steps=[('Find it', 'How many additions were found, and who found the last one?'),
        ('Compare it', 'What does a full read give that a ten per cent sample does not?'),
        ('Infer it', 'Why did the sampling rate fall every week?'),
        ('Weigh it', 'Five hours a week against one angry client who is not Priya.'),
        ('Decide', 'What rule should Arclight adopt, and what should it apply to?')],
 analysis=[('Find it. How many additions were found in five weeks?', 'four, and the last was found by the client'),
           ('Compare it. What does a full read catch that sampling cannot?', 'the specific letter that contains a commitment, rather than an estimate of how many do'),
           ('Infer it. Why did sampling fall from 100 per cent to nothing?', 'because nothing had gone badly wrong, so the check felt unnecessary'),
           ('Weigh it. What does Kenji want before he agrees?', 'a statement of what the five hours a week actually prevents'),
           ('Decide. Which letters, if any, need a full read?', 'the ones containing anything that could be read as a commitment')],
 decision='Write the rule Dalia sends to the team on Monday morning.',
 decision_steps=['State what the rule applies to, in words somebody could apply without you.',
                 'Say what happens to everything the rule does not cover.',
                 'Put a number on the cost, so nobody has to guess at it.',
                 'Say when the rule will be looked at again, and on what evidence.'],
 bank=['This applies to any letter that…', 'Everything else continues to be…',
       'The cost of this is about … a week.', 'We will review it in … , using …',
       'If you are unsure whether a letter is covered, …'],
 outcome='Dalia split the rule rather than choosing between the two positions. Any letter '
         'containing a date, a figure or the word agree gets a full read against the notes; '
         'everything else gets a 10 per cent sample. That turned out to be 14 letters a week, '
         'not 50, and about 90 minutes. Marta accepted it. In the next eleven weeks the rule '
         'caught three more additions, all three in the full-read group.',
 outcome_q=[('Why was the split rule cheaper than Marta’s proposal?', 'because only 14 of 50 letters contained a date, a figure or the word agree'),
            ('What did the next eleven weeks show about where additions occur?', 'all three found were in the group the rule had selected for full reading')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Turn Monday’s notes into letters',
 task=['Fatima has eleven sets of call notes from Monday and no time to write eleven letters. '
       'She writes a brief at ten to six on a Monday evening, which is the worst possible time '
       'to write anything.',
       'Two of the eleven notes are internal and must not become letters at all. Three of the '
       'notes contain something a client said that could later be read as a commitment. '
       'Fatima knows both of these facts and writes neither of them down.'],
 draft=['Please turn Monday’s notes into client letters.',
        'Use the usual template and keep the tone friendly.',
        'Most of them are straightforward.',
        'Skip the internal ones.',
        'Tidy up anything that does not read well.',
        'Send them back to me when they are ready.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Everything in this brief is true. Nothing in it can be checked.',
 asked=['9 client letters, not 11',
        'Nothing added beyond the notes',
        'Commitments in the client’s own words'],
 back=['11 letters, including 2 internal',
       '1 letter asserting an agreement',
       'Several fluent sentences nobody said'],
 gap='Monday’s notes named no date and no exclusions, the internal ones were never '
     'identified, and tidy up invited exactly the additions that caused the trouble.',
 back_cap='Eleven letters, two of which should never have existed.',
 back_note='The phrase "tidy up anything that does not read well" is the one that did the '
           'damage. It is an instruction to change the source, issued by somebody who meant '
           'the opposite.',
 diagnosis=[('[1] "Monday’s notes" — which notes, from when?', 'unscoped set'),
            ('[2] "keep the tone friendly" — friendly by what test?', 'unstated criterion'),
            ('[3] "most of them are straightforward" — how many is most?', 'unbounded quantity'),
            ('[4] "skip the internal ones" — which ones are internal?', 'unscoped set'),
            ('[5] "tidy up anything that does not read well" — read well to whom?', 'unstated criterion'),
            ('[6] "when they are ready" — ready means what?', 'unbounded quantity')],
 rewrite='Rewrite the brief so that somebody who has never met these clients could run it on '
         'Monday evening without asking Fatima anything.',
 scaffold=['Why eleven letters are being written at all',
           'Which notes are in, which are out, and how to tell them apart',
           'The notes file with its date, and the template with its version',
           'What a good letter contains, and what it must never contain',
           'How many letters come back, and what comes back with them',
           'What to do when a note is unclear or contradicts itself'],
 bank=['Turn the … notes dated … into …', 'Exclude the … marked …',
       'Use only what is in the notes.', 'Keep the client’s own words where …',
       'Return … drafts and a list of …', 'Where a note is unclear, …'],
 check=['Does Scope say how a reader can tell an internal note from a client note?',
        'Is there a sentence saying what must not appear in the output?',
        'Does the brief say what to do with an unclear note?',
        'Is Done a number, or a feeling?'],
 model=['Produce client follow-up letters from Monday’s calls without Fatima writing 11 by hand',
        'The 11 call notes dated 3 March, excluding the 2 whose header line reads INTERNAL',
        'The notes file dated 3 March and the standard follow-up template, version 4',
        'Use only what is in the notes; keep the client’s own words for anything that sounds like a commitment; match the template register',
        '9 draft letters, plus a list of every point the notes left unclear',
        'Where a note is unclear or contradicts itself, write a question in square brackets and do not guess'],
 cost='11 letters instead of 9, 1 asserted agreement the client had not made, 4 days before '
      'anybody noticed, and a client who was pleasant about it and need not have been.'),

rev_fig=figs.split('ONLY, AND WHERE IT GOES', 'Before the verb — limits the action',
                   ['I only read the notes.',
                    'Only confirm the figure.',
                    'She only signed it.',
                    'We only sampled ten per cent.'],
                   'Before the object — limits the thing',
                   ['I read only the notes.',
                    'Confirm the figure only.',
                    'She signed only the cover page.',
                    'We sampled only the long letters.']),
rev_fig_cap='Same four verbs, same four objects, eight different instructions.',
rev=dict(
 read=[('The main argument of this unit is that', ['generation is risky', 'transformation can be checked against its source', 'notes are unreliable', 'letters should be short'], 1),
       ('A "faithful" output is one that', ['is well written', 'adds nothing to the source', 'is short', 'is formal'], 1),
       ('"Send only the figure" limits', ['who sends', 'the action', 'what is sent', 'when'], 2),
       ('Marta’s objection in Dialogue 2 was that', ['the summary was too long', 'a paraphrase had become a claim', 'Fatima was careless', 'the client lied'], 1)],
 listen_text='Three sentences and you are done. Name the source with its date, because the '
             'notes is not a source. Name the finished form, because a letter is not a shape. '
             'Then say what must not appear in the output. That third one is the sentence '
             'people skip, and it is the only sentence that stops an addition.',
 listen=[('Name the source with its ____________.', 'date'),
         ('Name the finished ____________.', 'form'),
         ('Say what must not appear in the ____________.', 'output'),
         ('It is the only sentence that stops an ____________.', 'addition')],
 speak=['Give your partner a one-line transformation instruction with no limit sentence.',
        'They tell you one thing they could legitimately add. Then add the limit and repeat.'],
 write='Write a three-sentence transformation brief for something on your desk right now.',
 vocab=[('A quick private way of writing is ____________.', 'shorthand'),
        ('Something able to be read two ways is ____________.', 'ambiguous'),
        ('Quoting somebody word for word is quoting them ____________.', 'verbatim'),
        ('How formal a piece of language is, is its ____________.', 'register'),
        ('A group of items handled in one run is a ____________.', 'batch')],
 gram=[('Confirm the March figure ____________, and nothing else.', 'only'),
       ('____________ Jonas can start a run.', 'Only'),
       ('We ____________ need the April total.', 'also'),
       ('____________ the shortest letter took forty minutes.', 'Even'),
       ('She ____________ read it; she did not change it.', 'only')]),

found=['Take one document you wrote this month and find the sentence that was not in the source.',
       'Write the limit sentence for a transformation you do every week.',
       'Say a sentence with only in three positions and notice which one you meant.',
       'Ask a colleague what "tidy this up" would license them to change.'],
end_line='The output can be checked against the input. Almost nothing else in this book can.',
end_next='Next: How Many, How Much',
)
