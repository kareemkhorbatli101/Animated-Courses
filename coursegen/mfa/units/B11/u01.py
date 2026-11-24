# -*- coding: utf-8 -*-
import figs

U = dict(
num=1, title='Four Verbs, One Desk',
gram='imperatives and infinitives of purpose',
ai='the four verbs: draft, translate, extract, sort',
strap='CEFR B1 · Grammar: imperatives and infinitives of purpose · AI: the four verbs',
cando=['give an instruction as a bare verb, with an object and a reason',
       'say why I want something done, using to + verb',
       'name which of the four operations a piece of work actually is',
       'tell the difference between a request and an instruction',
       'say what these systems do well and what they do not do at all'],
hero=('ONE INSTRUCTION, FOUR DIFFERENT FILES',
      ['Do the Verenia file for the visit, the Director said.',
       'Four officers understood her. Each one did something else.'],
      [(720, 'teal', 'long'), (1380, 'blue', 'short'),
       (2040, 'orange', 'short'), (2680, 'purple', 'long')]),
hero_cap='The Bilateral Affairs corridor, on the Monday of the visit week.',

warm=['What is the difference between asking for something and instructing somebody?',
      'Think of an instruction you followed exactly, and still got wrong.',
      'What work on your desk is done the same way every single time?'],
read=[
 'Lina Khalil joined Bilateral Affairs in March, and her desk covers Verenia, a small state '
 'with a new embassy here and a very old file. In her first week the Director of Policy '
 'Planning, Dr Hana Mourad, stopped at her door to say that the Foreign Minister of Verenia '
 'would be arriving in eleven days.',
 'Dr Mourad then said seven words: do the Verenia file for the visit. She went on to another '
 'meeting, and Lina wrote the words down carefully, because she had been told to write '
 'everything down. She did not ask what they meant, because the instruction seemed perfectly '
 'clear at the time.',
 'By Thursday four people had worked on the Verenia file, each of them doing something '
 'different. Omar Nasri had translated sixty pages of Verenian correspondence into English. '
 'Tarek Zayed had put all the papers into date order and numbered them. Lina had made a list '
 'of every matter still open with Verenia, and a colleague on the next desk had written a '
 'four-page note on the whole relationship.',
 'All four pieces of work were careful and accurate, and none of them was what Dr Mourad had '
 'wanted. What she wanted was a single page carrying three points the Minister could raise '
 'and one that he should not. She had asked for a file, and a file is not an argument.',
 'Dr Mourad was not angry about this, which surprised Lina more than anything else that week. '
 'She explained that in a ministry almost every task is one of four things: you draft '
 'something new, or you translate something that exists, or you pull particular facts out of '
 'something, or you sort things into piles. Her seven words had named none of the four, and '
 'the system Lina had been using would have done any of them exactly and at once.'],
c_a=[('Which country does Lina’s desk cover?', 'Verenia'),
     ('How many words did Dr Mourad say?', 'seven'),
     ('What did Omar Nasri do?', 'translated sixty pages of correspondence into English'),
     ('What did Dr Mourad actually want?', 'one page with three points to raise and one to avoid'),
     ('What are the four things, in her words?', 'draft, translate, pull facts out, or sort into piles'),
     ('Why was Lina surprised?', 'because Dr Mourad was not angry')],
c_b=[('Verenia has a new embassy here.', 'T'),
     ('Lina asked what the instruction meant.', 'F'),
     ('The four pieces of work were poor.', 'F'),
     ('Dr Mourad wanted a long paper.', 'F'),
     ('A file is the same thing as an argument.', 'F'),
     ('The Minister was arriving in eleven days.', 'T')],
c_c=[('Her desk covers Verenia, a small state with an old ____________.', 'file'),
     ('Tarek Zayed put the papers in date ____________.', 'order'),
     ('Lina made a list of every matter still ____________.', 'open'),
     ('She wanted three points the Minister could ____________.', 'raise'),
     ('Almost every task is one of ____________ things.', 'four'),
     ('The system would have done any of them, exactly and at ____________.', 'once')],
c_d=[('Dr Mourad’s instruction named ( one / none ) of the four operations.', ['one', 'none'], 1),
     ('What did Tarek Zayed do?', ['translated the file', 'put the papers in date order', 'wrote a note', 'made a list'], 1),
     ('What is the problem with the word "file"?', ['it is foreign', 'it does not say what to do with it', 'it is too short', 'it is informal'], 1),
     ('How long should the note have been?', ['four pages', 'one page', 'sixty pages', 'eleven pages'], 1),
     ('A system will do what your words', ['suggest', 'mean', 'imply', 'nearly mean'], 1)],
c_e=('Which of the four? Put each task in the right column.',
     [('Put the English text into Arabic.', 'translate'),
      ('Write the reply to the note of 3 May.', 'draft'),
      ('List the dates of every meeting in the file.', 'extract'),
      ('Divide the incoming notes by department.', 'sort'),
      ('Turn these notes into a record of conversation.', 'draft'),
      ('Pull out the name of every official mentioned.', 'extract')],
     ['draft', 'translate', 'extract', 'sort']),

v_fig_title='THE FURNITURE OF A DESK',
v_fig=[('doc', 'a file'), ('envelope', 'a note verbale'), ('flag', 'a post'),
       ('book', 'an agenda'), ('people', 'a delegation'), ('seal', 'protocol')],
v_fig_cap='Six words you will use on your first morning and every morning afterwards.',
vocab=[
 ('a desk', 'the officer or section responsible for one country or subject'),
 ('a file', 'the papers on one matter, kept together'),
 ('a note verbale', 'a formal letter between a ministry and an embassy, in the third person'),
 ('correspondence', 'letters and notes sent and received'),
 ('an instruction', 'a direction from a superior that says what to do'),
 ('a briefing note', 'a short paper written so that somebody can act or speak'),
 ('a counterpart', 'the person in another service who does your job'),
 ('a post', 'an embassy, mission or consulate abroad'),
 ('a mission', 'a country’s diplomatic presence at a state or an organisation'),
 ('an attachment', 'a document sent together with another document'),
 ('a deadline', 'the time by which something must be finished'),
 ('to circulate', 'to send a document to everybody who must see it'),
 ('an outstanding matter', 'something raised and not yet settled'),
 ('a visit', 'a formal journey by a minister or official, with a programme'),
 ('a programme', 'the agreed order of events for a visit'),
 ('a delegation', 'the group travelling together and acting for a state'),
 ('to table', 'to put a document formally before a meeting'),
 ('an agenda', 'the list of items a meeting will take'),
 ('to minute', 'to write the official record of what was said'),
 ('protocol', 'the rules of precedence, form and courtesy between states')],
v_a=[('The papers on one matter, kept together, are a ____________.', 'file'),
     ('A formal letter between a ministry and an embassy is a ____________.', 'note verbale'),
     ('The person in another service who does your job is your ____________.', 'counterpart'),
     ('Something raised and not yet settled is an ____________.', 'outstanding matter'),
     ('The agreed order of events for a visit is the ____________.', 'programme'),
     ('To write the official record of what was said is to ____________.', 'minute'),
     ('The rules of precedence and courtesy between states are ____________.', 'protocol'),
     ('An embassy, mission or consulate abroad is a ____________.', 'post')],
v_b=[('A desk is the officer or section responsible', 'for one country or subject.'),
     ('A briefing note is a short paper written', 'so that somebody can act or speak.'),
     ('To circulate is to send a document', 'to everybody who must see it.'),
     ('To table is to put a document', 'formally before a meeting.'),
     ('A delegation is the group travelling together', 'and acting for a state.')],

g_title='Grammar: imperatives and infinitives of purpose',
g_rule=['An instruction uses the bare verb: draft, translate, list, sort.',
        'Say what to act on: draft the reply, list the open matters.',
        'Say why, with to + verb: list the open matters to brief the Minister.',
        'Negative instructions take do not: do not circulate it before Thursday.'],
g_fig=('LOOSE',
       ['Do the Verenia file.',
        'Can you look at the correspondence?',
        'The note should be dealt with.',
        'Something for the visit, please.'],
       'PRECISE',
       ['List the open matters with Verenia to brief the Minister.',
        'Translate the three notes of May to check the dates.',
        'Draft a reply to the note of 3 May.',
        'Write one page of three points to raise on Tuesday.'],
       'four instructions nobody can follow exactly',
       'four with a verb, an object and a reason'),
g_fig_cap='Verb, object, purpose. Three parts, and the third one is the part people leave out.',
g_a=[('____________ (draft) a reply to the note of 3 May.', 'Draft'),
     ('____________ (list) the open matters to brief the Minister.', 'List'),
     ('____________ (translate) the programme to send it to the post.', 'Translate'),
     ('Sort the incoming notes ____________ (find) the urgent ones.', 'to find'),
     ('____________ (not/circulate) the draft before Thursday.', 'Do not circulate'),
     ('Check the titles ____________ (avoid) a protocol error.', 'to avoid'),
     ('____________ (minute) the meeting to keep a record.', 'Minute'),
     ('Number the pages ____________ (make) the file usable.', 'to make'),
     ('____________ (not/reply) until Legal has answered.', 'Do not reply')],
g_b=[('An instruction begins with the ( bare verb / subject ).', ['bare verb', 'subject'], 0),
     ('____ the open matters to brief the Minister.', ['Listing', 'List', 'To list', 'Lists'], 1),
     ('Sort the notes ____ the urgent ones.', ['for find', 'to find', 'for finding to', 'to finding'], 1),
     ('____ circulate the draft before Thursday.', ['Not', 'Do not', 'No', 'Does not'], 1),
     ('Which instruction has a purpose?', ['Draft the reply.', 'Draft the reply to answer their note.', 'Please draft.', 'The reply, draft it.'], 1),
     ('Check the titles ____ a protocol error.', ['for avoid', 'to avoid', 'avoiding to', 'for avoiding to'], 1)],

d1=dict(title='What did you mean by file?',
        fig=(['I said do the file.', 'We did the file.'],
             ['Four times.', 'Four different times.']),
        cap='Dr Mourad and Lina, Thursday afternoon.',
        lines=[('Dr Mourad', 'Four people worked on this. I asked one person for one page.'),
               ('Lina', 'You said do the Verenia file. I thought that meant get it ready.'),
               ('Dr Mourad', 'And what does ready mean?'),
               ('Lina', 'I did not know, so I made a list of open matters. Omar thought it meant '
                        'translate it. Tarek thought it meant put it in order.'),
               ('Dr Mourad', 'All three of you were reasonable. That is the difficulty.'),
               ('Lina', 'What did you want?'),
               ('Dr Mourad', 'One page. Three points the Minister can raise, and one he must not. '
                             'That is drafting, not listing and not sorting.'),
               ('Lina', 'Then I should have asked.'),
               ('Dr Mourad', 'You should have asked, and I should have said. Write this down: the '
                             'verb, the thing, and the reason.'),
               ('Lina', 'Draft one page of talking points to prepare the Minister.'),
               ('Dr Mourad', 'That is the instruction. Nobody can do anything else with it.'),
               ('Lina', 'It takes four seconds longer to say.')],
        a=[('How many people worked on the file?', 'four'),
           ('What did Lina think the instruction meant?', 'to get the file ready'),
           ('What did Omar think it meant?', 'to translate it'),
           ('What three parts does Dr Mourad want in an instruction?', 'the verb, the thing, and the reason'),
           ('How much longer does the full instruction take to say?', 'about four seconds')],
        b=[('I asked one person for one ____________.', 'page'),
           ('All three of you were ____________.', 'reasonable'),
           ('Three points the Minister can ____________.', 'raise'),
           ('The verb, the thing, and the ____________.', 'reason')]),
d2=dict(title='Which of the four is it?',
        fig=(['Name the operation first.', 'And then the words are easy.'],
             ['Is that always true?', 'No. That is why I said almost.']),
        cap='Omar Nasri and Lina, in the documentation room.',
        lines=[('Omar', 'Twenty-two years here. Almost every task I am given is one of four '
                        'things.'),
               ('Lina', 'Draft, translate, extract, sort.'),
               ('Omar', 'Yes. And when somebody tells me which one, the rest of the instruction '
                        'writes itself.'),
               ('Lina', 'Give me a task that is not one of the four.'),
               ('Omar', 'Deciding whether we reply at all. Deciding what the Minister should say '
                        'about a difficult question.'),
               ('Lina', 'So those are the ones nobody can give to a system.'),
               ('Omar', 'Those are the ones nobody should give to a system, which is a different '
                        'sentence. It will produce something. It always produces something.'),
               ('Lina', 'And it will look like the other four.'),
               ('Omar', 'It will look exactly like the other four. That is the whole problem of '
                        'this year, and I do not have an answer to it.'),
               ('Lina', 'None at all?'),
               ('Omar', 'I name the operation before I start. If I cannot name it, I do not start. '
                        'That rule has protected me and I cannot prove it is enough.')],
        unresolved=True,
        a=[('How long has Omar worked there?', 'twenty-two years'),
           ('What happens when somebody names the operation?', 'the rest of the instruction writes itself'),
           ('Name two tasks that are not one of the four.', 'deciding whether to reply, and deciding what the Minister should say'),
           ('What does Omar say will always happen?', 'the system will produce something'),
           ('What is Omar’s rule?', 'name the operation before starting; if he cannot name it, he does not start')],
        b=[('Almost every task is one of ____________ things.', 'four'),
           ('The rest of the instruction writes ____________.', 'itself'),
           ('It will look exactly like the other ____________.', 'four'),
           ('I cannot ____________ it is enough.', 'prove')]),

speak=[('Say it correctly',
        ['Student A: give six instructions using a bare verb and an object.',
         'Student B: add a purpose to each one with to + verb.',
         'Find the instruction that could still be understood two ways.']),
       ('Spoken tasking',
        ['Choose a task from your own work.',
         'Say it aloud as verb, object, purpose, in one sentence.',
         'Your partner says which of the four operations it is.']),
       ('Name the operation',
        ['In pairs, read out six tasks from a working week.',
         'Decide for each whether it is draft, translate, extract or sort.',
         'Find the one that is none of them, and say what it is instead.'])],

ext_title='Four verbs cover most of a ministry’s paper, and naming the verb is half the instruction',
ext_fig=figs.datatable('ONE WEEK ON A BILATERAL DESK',
                       ['Task', 'Which of the four', 'Times that week'],
                       [['reply to an incoming note', 'draft', '9'],
                        ['put a Verenian note into English', 'translate', '14'],
                        ['list the dates in a file', 'extract', '6'],
                        ['send incoming post to departments', 'sort', '40'],
                        ['decide whether to reply at all', 'none of the four', '3'],
                        ['decide what the Minister says', 'none of the four', '1']]),
ext_fig_cap='Sixty-nine tasks fit the four verbs. Four do not, and those four are the job.',
ext=[
 'Nearly all the written work of a ministry is one of four operations: you draft something '
 'new, you translate something that already exists, you pull particular facts out of a '
 'document, or you sort documents into the right piles. Almost every system now used in a '
 'foreign service does one of these four things, and does it very fast.',
 'This is why naming the operation matters so much. An instruction that says do the file does '
 'not say which of the four it wants, so the reader has to guess, and reasonable people guess '
 'differently from one another. An instruction that says draft one page of talking points '
 'cannot be misunderstood by anybody at all.',
 'A complete instruction has three parts. The verb says which operation is wanted, the object '
 'says what to act on, and the purpose says what the result is for. The purpose is the part '
 'that people leave out, and it is the part that matters most, because a reader who knows '
 'why a thing is wanted can make the small decisions correctly without asking.',
 'The same three parts work whether you are instructing a colleague or a system, and the '
 'difference lies in what happens when you leave a part out. A colleague will usually come '
 'back and ask you. A system will not ask, because it cannot tell that anything is missing, '
 'and it will produce something complete and confident that is built on its own guess.',
 'There is a fifth kind of task, and it is the important one. Deciding whether to reply to a '
 'note at all, or deciding what a Minister should say about a difficult question, is not '
 'drafting or sorting but judgement, and judgement carries responsibility with it. The four '
 'verbs are therefore a useful test: if you cannot name which one a task is, it is probably '
 'the fifth kind.'],
dp1=('Where foreign ministries started',
     'Published accounts of foreign ministries adopting these systems show the first uses '
     'clustering in translation, transcription, document handling and consular triage, rather '
     'than in policy analysis.',
     'Source: reported practice in several foreign ministries, 2025–2026.'),
e_a=[('What are the four operations?', 'draft, translate, extract and sort'),
     ('Why does naming the operation matter?', 'because otherwise the reader must guess, and reasonable people guess differently'),
     ('What are the three parts of an instruction?', 'the verb, the object and the purpose'),
     ('Which part do people leave out?', 'the purpose'),
     ('What is the fifth kind of task?', 'judgement: deciding whether to reply, or what a Minister should say')],
e_b=[('Most ministry paper is one of four operations.', 'T'),
     ('"Do the file" names an operation.', 'F'),
     ('A system will ask when something is missing.', 'F'),
     ('The purpose is the part people usually include.', 'F'),
     ('Judgement is one of the four operations.', 'F'),
     ('The four verbs can be used as a test.', 'T')],

w_model=(
 'Purpose: prepare the Minister to raise 3 matters with the Foreign Minister of Verenia on 14 '
 'May. Scope: the Verenia file from January onwards; consular cases are out of scope. Inputs: '
 'the 11 notes verbales exchanged since January and the record of the last 2 meetings. '
 'Criteria: 3 points to raise, each in 1 sentence, each with the date of the last exchange on '
 'it; 1 matter to avoid, with the reason in 1 sentence. Done: 1 page, by 10 May. Fallback: '
 'where a matter has had no exchange since January, leave it out and list it separately.'),
w_fig=figs.spec_card('THE SAME TASKING, IN SIX LINES',
                     [('Purpose', 'prepare the Minister to raise 3 matters on 14 May'),
                      ('Scope', 'the Verenia file from January; consular cases excluded'),
                      ('Inputs', '11 notes verbales, the record of the last 2 meetings'),
                      ('Criteria', '3 points of 1 sentence each, dated; 1 matter to avoid'),
                      ('Done', '1 page, by 10 May'),
                      ('Fallback', 'nothing since January: leave out, list separately')]),
w_fig_cap='Seven words became six lines, and nobody can now produce the wrong thing.',
w_task='Write a tasking for one piece of work on your own desk.',
w_steps=['Name the operation: draft, translate, extract or sort.',
         'Say what to act on, and what is out of scope.',
         'Say where the material comes from.',
         'Say what the finished thing contains, as a number.',
         'Say what to do with anything that does not fit.'],
w_bank=['Draft / translate / list / sort … to …',
        'Cover … ; … is out of scope.',
        'Work from … and …',
        'Give … points, each …',
        'Where … , leave it out and …'],
w_check=['Does it begin with one of the four verbs?',
         'Is the purpose stated with to + verb?',
         'Is the length or number given as a figure?',
         'Is there a rule for material that does not fit?'],

t_title='The four verbs: draft, translate, extract, sort',
t_fig=figs.split('ONE INSTRUCTION, TWO VERSIONS',
                 'Names no operation',
                 ['do the Verenia file',
                  'look at the correspondence',
                  'get something ready for the visit',
                  'deal with the note'],
                 'Names the operation',
                 ['draft one page of talking points',
                  'translate the three notes of May',
                  'list the matters open since January',
                  'sort the incoming post by department']),
t_fig_cap='The right-hand column can be given to a colleague or to a system. The left cannot.',
t_body=[
 'Begin every instruction with one of the four verbs: draft, translate, extract or sort. If '
 'you cannot choose one of them, you have not yet decided what you want, and neither a system '
 'nor a colleague can decide it for you. Naming the verb takes about a second and removes '
 'most of the risk in the whole exchange.',
 'Then add the object and the purpose, because an instruction with a verb alone is still only '
 'half written. The object says what to act on and what to leave alone, while the purpose '
 'says what the result is for. A reader who knows the purpose can make all the small '
 'decisions correctly without coming back to ask you about each one.',
 'Last, notice when a task is none of the four. Deciding whether to answer a note, or what to '
 'concede in a negotiation, or what a Minister should say in public, is judgement rather than '
 'production. A system will produce a confident answer to those questions as well, and that '
 'answer will look exactly like the other four, which is precisely why the test is worth '
 'making a habit.'],
t_say=[('Name the verb: ', 'Draft, translate, list or sort — which one?'),
       ('Add the purpose: ', '… to prepare the Minister for Tuesday.'),
       ('Test it: ', 'If it is none of the four, who decides it?')],
t_bound=('The four verbs tell you what kind of task you have. They do not tell you whether the '
         'task should be done at all, whether the material may be shown to a system, or '
         'whether the answer is right. A task that is none of the four is not a task to '
         'phrase better; it is a task to take to a person.'),
t_a=[('Draft, translate, list or sort — which ____________?', 'one'),
     ('… to prepare the Minister for ____________.', 'Tuesday'),
     ('If it is none of the four, who ____________ it?', 'decides'),
     ('Naming the verb takes a second and removes most of the ____________.', 'risk'),
     ('The purpose is the part that gets left ____________.', 'out'),
     ('A confident answer will look exactly like the other ____________.', 'four')],
t_b_rubric='Rewrite each instruction so that it names the verb and the purpose.',
t_b=[('Do the Verenia file.', 'draft one page of talking points to prepare the Minister'),
     ('Look at the correspondence.', 'list the matters open since January to see what is outstanding'),
     ('Get something ready for the visit.', 'draft a one-page programme to send to the post'),
     ('Deal with the note of 3 May.', 'draft a reply to the note of 3 May to confirm the dates')],

case=dict(
 title='The Decision Room · The page that went to the Minister',
 brief=[
  'The one-page brief reached the Minister on 10 May. It contained three points to raise, '
  'drafted by Lina from the eleven notes exchanged since January.',
  'Point two concerned a road agreement. The agreement had in fact been settled in February, '
  'in a telephone call that was minuted but filed under a different subject heading and never '
  'added to the Verenia file.',
  'The Minister raised it. The Verenian Foreign Minister replied, courteously, that the matter '
  'had been agreed three months earlier. Dr Mourad must now decide what, if anything, changes.'],
 exhibit=figs.datatable('WHERE THE THREE POINTS CAME FROM',
                        ['Point', 'Source', 'Still open?'],
                        [['visa arrangements', '4 notes, last on 2 April', 'yes'],
                         ['the road agreement', '2 notes, last on 11 January', 'no, settled 6 Feb'],
                         ['the cultural centre', '3 notes, last on 28 March', 'yes'],
                         ['the February call', 'minuted, filed elsewhere', '—'],
                         ['matters checked against the registry', '0 of 3', '—']]),
 exhibit_cap='Every point came from the file. The file was not everything the Ministry knew.',
 exhibit_note='The February minute exists and is correctly written. It was filed under '
              'transport rather than under Verenia.',
 voices=[('Dr Hana Mourad', 'Policy Planning',
          'The brief did what it was asked to do. It drew on the file, and the file was '
          'wrong. I signed it, so the error is mine before it is anybody else’s.'),
         ('Tarek Zayed', 'Protocol',
          'A minute filed under the wrong heading is not a small thing. We have nine '
          'thousand of them. If one can do this, so can the others.'),
         ('Lina Khalil', 'desk officer, Bilateral Affairs',
          'I did not check the registry, because the tasking said work from the file and the '
          'file was the Verenia file. I would not have thought to look anywhere else.')],
 steps=[('Find it', 'What was wrong with point two?'),
        ('Compare it', 'Where was the February minute?'),
        ('Infer it', 'Why does Tarek think the problem is larger?'),
        ('Weigh it', 'A fault in the tasking against a fault in the filing.'),
        ('Decide', 'What changes, and for whom?')],
 analysis=[('Find it. What had happened to the road agreement?', 'it had been settled in February'),
           ('Compare it. Where was the record?', 'minuted but filed under transport, not Verenia'),
           ('Infer it. Why is this bigger than one brief?', 'because there are nine thousand minutes and others may be misfiled'),
           ('Weigh it. Was the tasking at fault?', 'partly: it said work from the file and named no check against the registry'),
           ('Decide. What would you change?', 'answers vary; a defensible answer changes the tasking, the filing rule, or both')],
 decision='Write what the Ministry does after a brief is found to rest on an incomplete file.',
 decision_steps=['Say what is checked before a brief goes to a Minister.',
                 'Say who does the checking, and by when.',
                 'Say what happens to the misfiled minute.',
                 'Say what is said to the post in Astrene.'],
 bank=['Before a brief goes to a Minister, … is checked.',
       '… does this by …',
       'The minute of … is …',
       'The post is told that …',
       'This is reviewed …'],
 outcome='The Ministry now requires every point in a ministerial brief to carry the date of '
         'the last exchange and a note that the registry has been searched by subject as well '
         'as by country. The search takes about twenty minutes. In the first four months it '
         'found three further matters filed under the wrong heading, two of them settled and '
         'one of them urgent. Tarek regards this as the rule working; Dr Mourad notes that the '
         'rule was written by the person who signed the wrong brief, and that she would like '
         'somebody else to test it.',
 outcome_q=[('What does every point in a ministerial brief now carry?', 'the date of the last exchange and a note that the registry has been searched'),
            ('What did the first four months find?', 'three further misfiled matters, two settled and one urgent')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Do the Verenia file',
 task=['This is the tasking as Lina wrote it down, word for word, on the Monday morning.',
       'Four officers worked from it in good faith and produced four different things, all of '
       'them good and none of them wanted.'],
 draft=['Do the Verenia file for the visit.',
        'Pull together the main papers.',
        'Make sure it is up to date.',
        'Include anything important from the recent exchanges.',
        'Leave out whatever is not needed.',
        'Have it ready in good time.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one verb that names an operation.',
 asked=['One page of talking points',
        '3 points to raise, 1 to avoid',
        'Each point dated from the exchanges'],
 back=['60 translated pages',
       '1 numbered file, 1 list, 1 four-page note',
       'Nothing that could go to the Minister'],
 gap='"Do the file" names no operation, "the main papers" names no set, "up to date" states '
     'no test, "recent exchanges" fixes no date, and "whatever is not needed" and '
     '"in good time" settle nothing.',
 back_cap='Four officers, four days, and a brief that still had to be written on Thursday night.',
 back_note='Nobody did anything wrong. Each officer chose a different one of the four '
           'operations, because the tasking chose none.',
 diagnosis=[('[1] "do the file" — draft, translate, extract or sort?', 'undefined done'),
            ('[2] "the main papers" — which papers, from when?', 'unscoped set'),
            ('[3] "make sure it is up to date" — up to date against what?', 'unstated criterion'),
            ('[4] "anything important" — important by what test?', 'unstated criterion'),
            ('[5] "whatever is not needed" — not needed by whom?', 'unscoped set'),
            ('[6] "in good time" — by when, exactly?', 'undefined done')],
 rewrite='Rewrite the tasking so that it names one operation, one period, one length and one '
         'date.',
 scaffold=['What the page is for, and who will use it',
           'Which part of the file is covered, and what is not',
           'Which documents to work from',
           'How many points, how long each is, and what each must carry',
           'How long the finished page is, and when it is due',
           'What to do with a matter that has gone quiet'],
 bank=['Prepare the Minister to raise … on …',
       'Cover … ; … is out of scope.',
       'Work from the … notes and the record of …',
       'Give … points, each in 1 sentence, each with …',
       'Return … page, by …',
       'Where a matter has had no exchange since … , …'],
 check=['Does it name one of the four operations?',
        'Is the period of the file given as a date?',
        'Is the number of points a figure?',
        'Is there a rule for a matter that has gone quiet?'],
 model=['Prepare the Minister to raise 3 matters with the Foreign Minister of Verenia on 14 May',
        'The Verenia file from January onwards; consular cases are out of scope',
        'The 11 notes verbales exchanged since January and the record of the last 2 meetings',
        '3 points to raise, each in 1 sentence, each carrying the date of the last exchange; 1 matter to avoid, with the reason in 1 sentence',
        '1 page, by 10 May',
        'Where a matter has had no exchange since January, leave it out and list it separately'],
 cost='4 officers for 4 days, 60 pages translated that nobody read, and a brief written in one '
      'evening because the week had been spent on the wrong four things.'),

rev_fig=figs.split('INSTRUCTIONS',
                   'Cannot be followed',
                   ['Do the Verenia file.',
                    'Look at the correspondence.',
                    'Something for the visit, please.',
                    'The note should be dealt with.'],
                   'Can be followed exactly',
                   ['Draft one page of talking points.',
                    'List the matters open since January.',
                    'Translate the three notes of May.',
                    'Sort the incoming post by department.']),
rev_fig_cap='Every sentence on the right begins with a verb and says what it is for.',
rev=dict(
 read=[('How many operations cover most ministry paper?', ['two', 'four', 'six', 'ten'], 1),
       ('Which part of an instruction is usually left out?', ['the verb', 'the purpose', 'the object', 'the date'], 1),
       ('What will a system do when something is missing?', ['ask', 'produce something anyway', 'stop', 'warn you'], 1),
       ('In the Decision Room, where was the February minute filed?', ['under Verenia', 'under transport', 'nowhere', 'with the Minister'], 1)],
 listen_text='Begin every instruction with one of the four verbs: draft, translate, extract or '
             'sort. If you cannot choose one, you have not yet decided what you want. Then add '
             'the object and the purpose, because the purpose is the part that gets left out. '
             'And notice when a task is none of the four, because that is judgement.',
 listen=[('Begin with one of the four ____________.', 'verbs'),
         ('You have not yet decided what you ____________.', 'want'),
         ('The purpose is the part that gets left ____________.', 'out'),
         ('That is ____________.', 'judgement')],
 speak=['Give your partner three instructions with a verb, an object and a purpose.',
        'Your partner names which of the four operations each one is.'],
 write='Write one instruction from your own work in the form verb, object, purpose.',
 vocab=[('The papers on one matter, kept together, are a ____________.', 'file'),
        ('A formal letter between a ministry and an embassy is a ____________.', 'note verbale'),
        ('The person in another service who does your job is your ____________.', 'counterpart'),
        ('Something raised and not yet settled is an ____________.', 'outstanding matter'),
        ('To write the official record of what was said is to ____________.', 'minute')],
 gram=[('____________ (draft) a reply to the note of 3 May.', 'Draft'),
       ('____________ (list) the open matters to brief the Minister.', 'List'),
       ('Sort the incoming notes ____________ (find) the urgent ones.', 'to find'),
       ('____________ (not/circulate) the draft before Thursday.', 'Do not circulate'),
       ('Check the titles ____________ (avoid) a protocol error.', 'to avoid')]),

found=['Write down three tasks from your week and name the operation for each.',
       'Find one task that is none of the four, and say who decides it.',
       'Add a purpose to an instruction you gave this week.',
       'Ask a colleague what they thought your last instruction meant.'],
end_line='The verb, the thing, and the reason. It takes four seconds longer to say.',
end_next='Next: From Notes to a Record',
)
