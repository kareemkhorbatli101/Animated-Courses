# -*- coding: utf-8 -*-
import figs

U = dict(
num=1, title='What You Actually Want',
gram='imperatives and infinitives of purpose',
ai='the four things it does well: generate, transform, extract, classify',
strap='CEFR B1 · Grammar: imperatives and infinitives of purpose · AI: the four things it does well',
cando=['give an instruction as a bare verb, with an object and a reason',
       'say why I want something done, using to + verb',
       'name which of the four operations a piece of work actually is',
       'tell the difference between a request and a specification',
       'explain what a system does well and what it does not do at all'],
hero=('ARCLIGHT · FOUR PEOPLE AND FOUR HUNDRED INVOICES',
      ['Dalia asked for the Boateng account to be sorted out.',
       'Everybody understood her. Nobody agreed on what she meant.'],
      [(700, 'teal', 'long'), (1360, 'blue', 'short'),
       (2020, 'orange', 'short'), (2660, 'purple', 'long')]),
hero_cap='The whole company, on the morning the instruction went out.',

warm=['What is the difference between asking for something and specifying it?',
      'Think of an instruction you were given that you followed exactly, and still got wrong.',
      'What kinds of work in a small company are done the same way every single time?'],
read=[
 'Arclight is four people. Dalia Rahman started it with Jonas Riedel two years ago, and they '
 'now do back-office work for eleven small companies. They send invoices, chase payment, '
 'answer simple questions and keep records in order. It is not glamorous work. It is work '
 'that every small company needs and almost nobody wants to do.',
 'On a Tuesday in March, Dalia wrote six words to Jonas. Sort out the Boateng invoices. '
 'Samuel Boateng runs a logistics brokerage with one other person, and his paperwork had '
 'been getting worse for a month. Dalia knew exactly what she wanted. She did not write '
 'it down, because she believed it was obvious.',
 'Jonas set up a run that evening. By Wednesday morning, four hundred and twelve reminder '
 'letters had gone out. Every letter was polite. Every letter was correct. Three of them '
 'went to companies that were already in a formal dispute with Samuel, and that he had '
 'agreed in writing not to chase until April.',
 'Dalia had not meant those three. She had meant the ordinary overdue accounts, the ones '
 'with nothing complicated about them. But she had written sort out, and sort out has no '
 'end point. She had written the Boateng invoices, and that set contains every invoice '
 'he has ever issued. Jonas did what she asked.',
 'The lesson cost Arclight a client meeting, an apology and about nine hundred euros of '
 'unbilled time. It also taught Dalia something she now says to every new member of staff. '
 'Almost everything they do for a client is one of four operations — generate, transform, extract or classify — and her six words named none of them. A system will do exactly what your words mean. A colleague will do roughly what you '
 'meant. Neither of them can read your mind, and only one of them will ask.'],
c_a=[('What kind of work does Arclight do?', 'back-office work for small companies'),
     ('How many words did Dalia write to Jonas?', 'six'),
     ('How many reminder letters went out?', 'four hundred and twelve'),
     ('Why were three of those letters a problem?', 'those companies were in a formal dispute and had been promised no chasing until April'),
     ('What did Dalia believe about her instruction?', 'that what she wanted was obvious'),
     ('What is the difference between a colleague and a system, in her words?', 'a colleague does roughly what you meant and will ask; a system does exactly what your words mean')],
c_b=[('Arclight has eleven members of staff.', 'F'),
     ('Dalia wrote her instruction down.', 'T'),
     ('Every letter that went out was impolite.', 'F'),
     ('Samuel Boateng had agreed not to chase three accounts until April.', 'T'),
     ('Jonas did something different from what Dalia asked.', 'F'),
     ('The mistake cost Arclight money as well as goodwill.', 'T')],
c_c=[('Arclight does ____________ work for eleven small companies.', 'back-office'),
     ('Samuel Boateng runs a logistics ____________.', 'brokerage'),
     ('Four hundred and twelve ____________ letters went out.', 'reminder'),
     ('Three companies were in a formal ____________ with Samuel.', 'dispute'),
     ('The phrase sort out has no end ____________.', 'point'),
     ('A system will do exactly what your words ____________.', 'mean')],
c_d=[('Dalia’s instruction failed because it was ( short / unbounded ).', ['short', 'unbounded'], 1),
     ('The set "the Boateng invoices" included', ['only the overdue ones', 'only the disputed ones', 'every invoice he had issued', 'none of them'], 2),
     ('Jonas can best be described as', ['careless', 'obedient', 'dishonest', 'slow'], 1),
     ('The real cost of the mistake was', ['only the nine hundred euros', 'only the apology', 'time, money and a client relationship', 'nothing at all'], 2),
     ('Dalia now tells new staff that a system', ['guesses well', 'does what your words mean', 'asks before acting', 'refuses vague work'], 1)],
c_e=('Instruction, or specification? Put each one in the right column.',
     [('Sort out the invoices.', 'Instruction'),
      ('List every invoice over 30 days old, excluding disputed accounts.', 'Specification'),
      ('Chase the usual ones.', 'Instruction'),
      ('Send one reminder per account, using the standard wording.', 'Specification'),
      ('Deal with Boateng.', 'Instruction'),
      ('Return a count of letters sent and a list of accounts skipped.', 'Specification')],
     ['Instruction', 'Specification']),

v_fig_title='THE FOUR OPERATIONS',
v_fig=[('bulb', 'generate'), ('factory', 'transform'), ('doc', 'extract'),
       ('scale', 'classify'), ('note', 'brief'), ('chart', 'output')],
v_fig_cap='Almost all routine work is one of the first four, or a chain of them.',
vocab=[
 ('brief', 'a short written instruction saying what work is wanted'),
 ('output', 'whatever a person or a system produces when it is asked to work'),
 ('draft', 'a first version of something, written so that it can be changed'),
 ('generate', 'to make something new that was not there before'),
 ('transform', 'to change something from one form into another'),
 ('extract', 'to take particular facts out of a longer document'),
 ('classify', 'to decide which group each thing belongs to'),
 ('back-office', 'the work a company does that its customers never see'),
 ('turnaround', 'the time between receiving work and returning it finished'),
 ('deliverable', 'the thing you have promised to hand over'),
 ('workload', 'the total amount of work one person or team has to do'),
 ('routine', 'done the same way every time, with no decision needed'),
 ('volume', 'the number of items of work, counted together'),
 ('ledger', 'the record of money owed to a business and money paid to it'),
 ('invoice', 'a document asking a customer to pay for work already done'),
 ('supplier', 'a company that sells goods or services to another company'),
 ('remit', 'the area of work a person is responsible for'),
 ('brokerage', 'a business that arranges deals between two other parties'),
 ('onboarding', 'the work of taking on a new client or a new member of staff'),
 ('margin', 'what is left of a price once the cost of the work is paid')],
v_a=[('A ____________ is a short written instruction saying what work is wanted.', 'brief'),
     ('Chasing payment is ____________ work: the customer never sees it.', 'back-office'),
     ('Our ____________ on this job is forty-eight hours from receipt.', 'turnaround'),
     ('The ____________ is a sent count and a list of exclusions.', 'deliverable'),
     ('Reading four hundred letters is a question of ____________, not difficulty.', 'volume'),
     ('Pulling the date and the amount out of a document is to ____________ them.', 'extract'),
     ('Deciding which pile each email belongs in is to ____________ it.', 'classify'),
     ('If the price barely covers the work, the ____________ is too thin.', 'margin')],
v_b=[('A routine task is one that', 'needs no decision each time.'),
     ('An invoice is a document that', 'asks a customer to pay.'),
     ('To transform something is to', 'change it from one form into another.'),
     ('Your remit is the part of the work', 'you are responsible for.'),
     ('Onboarding is what happens when', 'a new client or colleague arrives.')],

g_title='Grammar: imperatives and infinitives of purpose',
g_rule=['An instruction is the bare verb, with no subject: Send the list. Check the dates.',
        'Say why with to + verb: Send the list to show what is still outstanding.',
        'The negative is Do not + verb. For a standing rule, use Never + verb.',
        'An instruction with no purpose can be obeyed exactly and still be wrong.'],
g_fig=('LOOSE',
       ['Have a look at the invoices.',
        'Sort out the Boateng account.',
        'Tidy up the client list.',
        'Deal with the backlog.'],
       'PRECISE',
       ['List every invoice over 30 days old.',
        'Email Samuel to confirm the 14 March total.',
        'Remove any client with no order since 2024.',
        'Clear the 61 items queued before 1 March.'],
       'obeyed many ways, all of them defensible',
       'bare verb, named object, one reading only'),
g_fig_cap='The same four jobs, written so a colleague will tolerate them and written so a system will execute them.',
g_a=[('____________ the list to Samuel before five. (send)', 'Send'),
     ('____________ the dates against the ledger. (check)', 'Check'),
     ('____________ reply to anything marked disputed. (not)', 'Do not'),
     ('I am sending the figures ____________ show where the gap is. (to)', 'to'),
     ('____________ the amounts out of the three attachments. (extract)', 'Extract'),
     ('We classify them ____________ keep the queue short. (purpose)', 'to'),
     ('____________ send a reminder to an account in dispute. (never)', 'Never'),
     ('____________ Jonas the wording before it goes out. (show)', 'Show'),
     ('He wrote it down ____________ avoid another Tuesday. (purpose)', 'to')],
g_b=[('( Send / Sending ) the list before five.', ['Send', 'Sending'], 0),
     ('Do not ____ anything marked disputed.', ['touching', 'touch', 'to touch', 'touched'], 1),
     ('I am writing it down ____ nobody has to guess.', ['for', 'so that', 'to', 'because of'], 1),
     ('____ the amounts out of the attachments.', ['Extracting', 'Extracted', 'Extract', 'To extract'], 2),
     ('She sent the brief ____ the gap.', ['for closing', 'close', 'to close', 'closing'], 2),
     ('____ reply to a disputed account.', ['Not', 'No', 'Never', 'Nothing'], 2)],

d1=dict(title='Six words, and what they cost',
        fig=(['Four hundred and twelve went out.', 'Three of them should not have.'],
             ['I did what the brief said.', 'I know. That is the problem.']),
        cap='Dalia and Jonas, the morning after the run.',
        lines=[('Dalia', 'Four hundred and twelve went out. Three of them should not have.'),
               ('Jonas', 'I did what the brief said. Sort out the Boateng invoices.'),
               ('Dalia', 'I know. That is the problem. You did exactly what I wrote.'),
               ('Jonas', 'Tell me what you meant and I will tell you what was missing.'),
               ('Dalia', 'I meant the ordinary overdue ones. Not the three in dispute.'),
               ('Jonas', 'Then the brief needed to say which invoices, and which to leave alone.'),
               ('Dalia', 'It needed to say when to stop as well. Sort out has no end.'),
               ('Jonas', 'Write me the six lines and I will rerun it this afternoon.'),
               ('Dalia', 'Six lines for a six-word instruction. That feels like a lot.'),
               ('Jonas', 'It took four minutes. The apology took an hour and a half.'),
               ('Dalia', 'Fair. Give me ten minutes and do not start anything until I send it.'),
               ('Jonas', 'Nothing runs until it is signed. That is the new rule, then.')],
        a=[('How many letters should not have gone out?', 'three'),
           ('Whose fault does Jonas think it is?', 'neither of theirs exactly; the brief was incomplete'),
           ('What two things does Dalia say the brief needed?', 'which invoices to include, which to leave alone, and when to stop'),
           ('How long did the apology take?', 'an hour and a half'),
           ('What rule do they agree at the end?', 'nothing runs until the brief is signed')],
        b=[('I did what the ____________ said.', 'brief'),
           ('Then the brief needed to say which ____________.', 'invoices'),
           ('Sort out has no ____________.', 'end'),
           ('Nothing ____________ until it is signed.', 'runs')]),
d2=dict(title='The client asks a fair question',
        fig=(['Did a person write this, or not?', 'Does it matter to you?'],
             ['It matters if it was wrong.', 'Then we agree on something.']),
        cap='Samuel Boateng on the phone, two days later.',
        lines=[('Samuel', 'Three of my clients got chased for money I told you to leave.'),
               ('Dalia', 'I know. It was our instruction, not our system. I am sorry.'),
               ('Samuel', 'Did a person write those letters, or not?'),
               ('Dalia', 'A system generated them. A person wrote the instruction badly.'),
               ('Samuel', 'Does that distinction help me?'),
               ('Dalia', 'No. It helps me fix it, which is a different thing.'),
               ('Samuel', 'It matters to me if it was wrong. Not how it was made.'),
               ('Dalia', 'Then we agree on something. The output is ours either way.'),
               ('Samuel', 'What stops it next month?'),
               ('Dalia', 'Every run gets a written brief and a named person signing it.'),
               ('Samuel', 'That is a process. I asked what stops it.'),
               ('Dalia', 'It is the best answer I have today. I will take the question away.')],
        unresolved=True,
        a=[('What does Samuel want to know first?', 'whether a person wrote the letters'),
           ('Who does Dalia say is responsible?', 'Arclight, because the instruction was theirs'),
           ('Why does Samuel say the distinction does not help him?', 'because what matters to him is that it was wrong, not how it was made'),
           ('What does Dalia promise?', 'a written brief and a named person signing every run'),
           ('Is Samuel satisfied at the end?', 'no; he says a process is not the same as an answer')],
        b=[('A system ____________ them.', 'generated'),
           ('The ____________ is ours either way.', 'output'),
           ('Every run gets a written ____________.', 'brief'),
           ('I will take the ____________ away.', 'question')]),

speak=[('Instruction into specification',
        ['Student A: give your partner a six-word instruction about office work.',
         'Student B: ask three questions that the instruction does not answer.',
         'Then rewrite it together as one sentence that answers all three.']),
       ('Spoken specification: brief it aloud',
        ['Take one of these jobs: chasing late payers, sorting an inbox, writing a price list.',
         'Brief your partner aloud in under forty seconds. Name the object and the reason.',
         'Your partner repeats it back. Anything they get wrong was missing from your brief.']),
       ('Which operation is it?',
        ['List six tasks you did at work or at home last week.',
         'Label each one generate, transform, extract or classify.',
         'Find the one that is really two operations wearing one name.'])],

ext_title='Four things, and almost everything is one of them',
ext_fig=figs.cards('WHAT THE WORK ACTUALLY IS',
                   [('bulb', 'GENERATE\nmake something new'),
                    ('factory', 'TRANSFORM\nchange its form'),
                    ('doc', 'EXTRACT\npull facts out'),
                    ('scale', 'CLASSIFY\nsort into groups')], cols=4),
ext_fig_cap='Four operations. Most office jobs are one of them, or a short chain.',
ext=[
 'People who are new to these systems usually ask what they can do, which is the wrong '
 'question. It is too big to answer. A better question is narrower: what kind of operation '
 'is this piece of work? Almost all routine office work turns out to be one of four things, '
 'or a short chain of them, and naming the operation first makes the instruction easier to '
 'write and much easier to check.',
 'The first is to generate. You have nothing, and you want something: a first draft of a '
 'letter, ten subject lines, a list of questions to ask a new supplier. Generation is cheap '
 'and fast, and it is the operation people notice first. It is also the one where the output '
 'is hardest to check, because there was nothing there before to compare it with.',
 'The second is to transform. You have something already, and you want it in another form. '
 'Notes become a letter. A recorded call becomes a summary. A long report becomes six '
 'bullet points. Transformation is where most of the quiet value sits in a small company, '
 'because the input exists, so the output can be checked against it.',
 'The third is to extract. A document contains facts you need, and you want them pulled out '
 'and put in order: the amount, the date, the account number, the name of the person who '
 'signed. The fourth is to classify, which is to decide which group a thing belongs to. '
 'Is this an invoice or a receipt? Urgent or not? A complaint or a question?',
 'The reason this matters is practical. Extraction and classification can be checked almost '
 'mechanically, because there is a right answer sitting in the source document. Generation '
 'cannot. So a company that starts with extraction and classification gets reliable value '
 'quickly, and a company that starts by generating a great deal of text often gets volume '
 'it then has to read.'],
dp1=('Where small firms start',
     'Surveys of small-business adoption generally report document handling and routine '
     'correspondence as the first uses, ahead of analysis or decision support.',
     'Source: general small-business technology adoption research, 2026. Varies widely by sector and by country.'),
e_a=[('What does the writer say is the wrong question to ask?', 'what these systems can do'),
     ('Which operation produces output that is hardest to check?', 'generate, because there is nothing to compare it with'),
     ('Why is transformation valuable in a small company?', 'the input already exists, so the output can be checked against it'),
     ('Give two examples of extraction from the text.', 'pulling out an amount, a date, an account number or a signature'),
     ('Why can classification be checked mechanically?', 'because the right answer is in the source document')],
e_b=[('The writer says all office work is one of four operations.', 'F'),
     ('Generation is described as cheap and fast.', 'T'),
     ('A recorded call becoming a summary is an example of transformation.', 'T'),
     ('The writer recommends starting with generation.', 'F'),
     ('Classifying means deciding which group something belongs to.', 'T'),
     ('Volume of text is always an advantage.', 'F')],

w_model=(
 'Purpose: recover payment on ordinary overdue accounts without damaging any client '
 'relationship. Scope: Boateng invoices more than 30 days past due on the 14 March ledger, '
 'excluding the 3 accounts marked in dispute. Inputs: the 14 March ledger export and the '
 'standard first-reminder template. Criteria: one letter per account, amount and due date '
 'stated, no mention of legal action. Done: a count of letters sent, a list of accounts '
 'excluded, and 1 sample letter for me to read. Fallback: if an account has no email '
 'address on file, add it to the exclusions list and send nothing.'),
w_fig=figs.spec_card('THE SIX LINES OF A BRIEF',
                     [('Purpose', 'Why this work is being done at all'),
                      ('Scope', 'Exactly which items are in, and which are out'),
                      ('Inputs', 'The documents and data to work from, named and dated'),
                      ('Criteria', 'What a good output looks like, in checkable terms'),
                      ('Done', 'What must come back before the job counts as finished'),
                      ('Fallback', 'What to do when the expected case does not hold')]),
w_fig_cap='Six lines. Four minutes to write, and they are the whole of this book in one shape.',
w_task='Write a six-line brief for a routine job you know well.',
w_steps=['Choose a job somebody could do for you: sorting an inbox, chasing a payment, booking travel.',
         'Write the six lines in order. Purpose first, because it changes everything below it.',
         'Put a number or a date on every line that could take one.',
         'Write the Fallback line last and make it specific: name the case, then the action.',
         'Read Scope again and ask what it accidentally includes.'],
w_bank=['The purpose of this is to…', 'Include every … that …', 'Exclude any … marked …',
        'Work from the … dated …', 'Return … and … before this counts as done.',
        'If … , then … and send nothing.'],
w_check=['Does every line that could carry a number carry one?',
         'Does Scope say what is out as well as what is in?',
         'Could somebody who dislikes you follow this brief and still produce the wrong thing?',
         'Is Done something you could tick, or just a feeling?'],

t_title='Naming the operation before you ask',
t_fig=figs.datatable('THE SAME JOB, NAMED FOUR WAYS',
                     ['The work', 'The operation', 'Can it be checked against a source?'],
                     [['write a first reminder letter', 'generate', 'no'],
                      ['turn the call notes into a letter', 'transform', 'yes'],
                      ['pull the amount and date out', 'extract', 'yes'],
                      ['decide which are in dispute', 'classify', 'yes'],
                      ['draft ten subject lines', 'generate', 'no']]),
t_fig_cap='Name the operation first. It tells you immediately how hard the checking will be.',
t_body=[
 'Before you write a brief, say out loud which of the four operations you are asking for. '
 'It takes two seconds and it changes the instruction. If you are asking it to extract, you '
 'name the source document and the fields. If you are asking it to classify, you name the '
 'groups and what to do with anything that fits none of them. If you are asking it to '
 'generate, you name the standard the output has to meet, because nothing else will.',
 'Most failed instructions are failed because two operations were hidden inside one word. '
 'Sort out the invoices is really classify them, then extract the amounts, then generate a '
 'letter for each. Three operations, three sets of criteria, three places to go wrong. '
 'Written as one word, there is nowhere to put the criteria at all.',
 'When you split the job into its operations, something useful happens to the cost of '
 'mistakes. You find out which step failed. A letter that chased the wrong client is not a '
 'writing failure; it is a classification failure, and classification is the cheapest of '
 'the four to fix. You cannot repair a step you have not named.'],
t_say=[('Name the operation: ', 'I need you to classify these, not summarise them.'),
       ('Name the source: ', 'Extract the amount and the due date from the 14 March export.'),
       ('Name the standard: ', 'Generate a draft that a client could read without editing.')],
t_bound=('Naming the operation does not make the output correct. It tells you how the output '
         'can be checked, and nothing more. A classification can be named perfectly and still '
         'be wrong on every row, and no amount of precise wording will tell you that. Only '
         'looking at the rows will.'),
t_a=[('I need you to ____________ these, not summarise them.', 'classify'),
     ('____________ the amount and the due date from the March export.', 'Extract'),
     ('____________ a draft a client could read without editing.', 'Generate'),
     ('Turn the notes into a letter: that is a ____________.', 'transform'),
     ('Name the groups, and say what to do with anything that fits ____________.', 'none'),
     ('You cannot repair a step you have not ____________.', 'named')],
t_b_rubric='Name the operation, then write the one thing the brief must say.',
t_b=[('Deciding which emails are complaints.', 'classify; name the groups and the default group'),
     ('Turning a recorded call into a written summary.', 'transform; name the source recording and the length wanted'),
     ('Writing ten questions for a new supplier.', 'generate; name the standard the questions must meet'),
     ('Pulling every due date out of forty contracts.', 'extract; name the document set and the exact fields')],

case=dict(
 title='Decision Clinic · Redo it, or respecify it?',
 brief=[
  'It is Thursday. The 412 letters went out on Wednesday morning, and three of them went to '
  'clients Samuel Boateng had promised not to chase. He has asked Arclight to make it right. '
  'Dalia has until Monday.',
  'Jonas can rerun the whole job in about forty minutes if Dalia writes a proper brief. '
  'Thomas Reed, who does the manual work, says he can go through the Boateng ledger by hand '
  'in two days and be certain. Two days is all of Thursday and all of Friday, and there are '
  'ten other clients.',
  'Marta Olsen, who handles anything that might become a liability, points out that nobody '
  'has yet established how many of the 412 were wrong. Three are known. Nobody has checked '
  'the other 409.'],
 exhibit=figs.datatable('THURSDAY MORNING: WHAT IS ACTUALLY KNOWN',
                        ['', 'Letters', 'Checked?', 'Known wrong'],
                        [['in dispute, flagged', '3', 'yes', '3'],
                         ['over 30 days, ordinary', '338', 'no', 'unknown'],
                         ['under 30 days', '54', 'no', 'unknown'],
                         ['no email on file', '17', 'no', 'unknown'],
                         ['total sent', '412', '3 of 412', 'at least 3']]),
 exhibit_cap='What Arclight knows on Thursday morning, which is less than it feels.',
 exhibit_note='The last row is the one that matters. Three errors are confirmed; 409 letters '
              'have never been looked at by anybody.',
 voices=[('Dalia Rahman', 'co-founder',
          'Rerun it properly. I write the brief this morning, Jonas runs it this afternoon, '
          'and we send Samuel a corrected position before he leaves on Friday.'),
         ('Thomas Reed', 'service delivery',
          'Do it by hand. We got here by trusting a run nobody checked. Doing the same thing '
          'faster is not an apology, it is a repetition.'),
         ('Marta Olsen', 'risk and liability',
          'Neither, yet. You are both proposing a cure for a problem whose size you have not '
          'measured. Sample fifty of the 409 this morning. Then choose.')],
 steps=[('Find it', 'How many of the 412 letters has anybody actually looked at?'),
        ('Compare it', 'What does a rerun give you that the manual check does not, and the reverse?'),
        ('Infer it', 'Why does Marta say the size of the problem is unknown?'),
        ('Weigh it', 'Speed against certainty, with ten other clients waiting.'),
        ('Decide', 'What should Arclight do before Friday, and in what order?')],
 analysis=[('Find it. How many letters have been checked?', 'three of four hundred and twelve'),
           ('Compare it. What does the manual check give that the rerun does not?', 'certainty about what actually went out, rather than a corrected version of the same guess'),
           ('Infer it. Why is the size of the problem unknown?', 'because 409 letters have never been examined, so the known three may not be the only errors'),
           ('Weigh it. What does two days of Thomas cost?', 'all of Thursday and Friday for ten other clients'),
           ('Decide. What is the first action, and why that one?', 'sample the 409, because neither remedy can be chosen without knowing the error rate')],
 decision='Write Dalia’s note to Samuel, setting out what Arclight will do and by when.',
 decision_steps=['Say plainly what is known and what is not. Do not round the uncertainty away.',
                 'Give the first action and the time it takes, not the whole plan.',
                 'Say what will be different next month, in one sentence.',
                 'Offer the thing he can check, not the thing that sounds best.'],
 bank=['What we know so far is…', 'What we have not yet established is…',
       'The first thing we will do is…', 'You will have … from me by …',
       'What changes from now on is…'],
 outcome='Dalia took Marta’s advice and sampled fifty of the 409 on Thursday morning. Two '
         'more were wrong, both for the same reason: a dormant account with no order since '
         '2023. That projected to roughly sixteen bad letters, not three. The manual check '
         'would have found them; the rerun would have reproduced them, because the brief she '
         'was about to write still said nothing about dormant accounts. She told Samuel '
         'sixteen, not three, and he renewed in June.',
 outcome_q=[('Why did the sample change the decision?', 'it showed the known errors were not the whole problem, and that a rerun would have repeated them'),
            ('What was wrong with Dalia’s original plan?', 'it was a confident remedy for a problem she had not measured')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Sort out the Boateng invoices',
 task=['This is the instruction that started the whole week. Samuel Boateng’s paperwork has '
       'been getting worse for a month and Dalia wants it dealt with before he notices. She '
       'writes to Jonas on a Tuesday afternoon, between two other things.',
       'She knows exactly what she wants: the ordinary overdue accounts chased politely, '
       'nothing touched that is already in dispute, and a number back so she can tell Samuel '
       'something concrete. None of that reaches the page.'],
 draft=['Jonas — can you sort out the Boateng invoices.',
        'Chase the overdue ones with the usual wording.',
        'Keep it polite, we want to keep him happy.',
        'Leave anything that looks complicated.',
        'Let me know how it went when it is done.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5},
 draft_cap='Five lines, five faults. Every one of them is a grammar point from this book.',
 asked=['The ordinary overdue accounts chased',
        'Nothing touched that is in dispute',
        'A number back for the client'],
 back=['All 412 invoices treated as one set',
       '3 disputed accounts chased anyway',
       'No count and no exclusions list'],
 gap='Sort out named no finished state, the Boateng invoices named no subset, and looks '
     'complicated named no test anybody else could apply.',
 back_cap='What Dalia wanted, beside what four hundred and twelve letters actually did.',
 back_note='Jonas did not misread the brief. There was nothing in it to misread: every line '
           'is true, and no line is checkable.',
 diagnosis=[('[1] "the Boateng invoices" \u2014 which invoices?', 'unscoped set'),
            ('[2] "the overdue ones" \u2014 overdue by how long?', 'unscoped set'),
            ('[3] "keep it polite" \u2014 polite by whose test?', 'unstated criterion'),
            ('[4] "anything that looks complicated" \u2014 looks how, to whom?', 'unstated criterion'),
            ('[5] "let me know how it went" \u2014 know what, exactly?', 'undefined done'),
            ('[6] "get it finished" \u2014 finished means what here?', 'undefined done')],
 rewrite='Rewrite Dalia’s instruction on the six lines below, so that Jonas could run it '
         'without asking a single question.',
 scaffold=['Why the chasing is being done at all, in one clause',
           'Which invoices are in, and which are explicitly out',
           'The ledger file and the letter template, both named and dated',
           'What a good letter contains, in terms somebody could tick',
           'What must come back before this is finished',
           'What to do with an account that does not fit the normal case'],
 bank=['The purpose of this run is to…', 'Include every invoice that…',
       'Exclude any account marked…', 'Work from the … export dated …',
       'Return … before this counts as done.', 'If an account … , then … and send nothing.'],
 check=['Every line that could carry a number carries one.',
        'Scope says what is excluded, not only what is included.',
        'Done is something Dalia could tick, not something she would feel.',
        'The fallback names a specific case and a specific action.'],
 model=['Recover payment on ordinary overdue accounts without damaging the client relationship',
        'Boateng invoices more than 30 days past due on the 14 March ledger, excluding the 3 accounts marked in dispute and any account dormant since 2023',
        'The 14 March ledger export and the standard first-reminder template',
        'One letter per account, amount and due date stated, no mention of legal action',
        'A count of letters sent, a list of every account excluded and why, and 1 sample letter',
        'If an account has no email address on file, add it to the exclusions list and send nothing'],
 cost='412 letters, 3 confirmed wrong and about 16 probable, one client meeting, a written '
      'apology and roughly 900 euros of unbilled time, for 4 minutes not spent on the brief.'),

rev_fig=figs.split('INSTRUCTION OR SPECIFICATION', 'Instruction — obeyed many ways',
                   ['Sort out the invoices.', 'Chase the usual ones.',
                    'Keep it polite.', 'Let me know how it went.'],
                   'Specification — obeyed one way',
                   ['List every invoice over 30 days old.',
                    'Exclude the 3 accounts marked in dispute.',
                    'State the amount and the due date.',
                    'Return a sent count and an exclusions list.']),
rev_fig_cap='The unit in one picture: the left column is honest, friendly and unusable.',
rev=dict(
 read=[('The main point of this unit is that', ['systems are unreliable', 'words with no end point produce work with no end point', 'instructions should be long', 'clients are difficult'], 1),
       ('"Extract" means', ['make something new', 'pull named facts out of a source', 'decide which group something is in', 'change the form of something'], 1),
       ('An infinitive of purpose answers the question', ['who', 'when', 'why', 'how many'], 2),
       ('Marta Olsen’s objection in the Clinic was that', ['the rerun was too slow', 'nobody had measured the problem', 'Thomas was wrong', 'Samuel was unreasonable'], 1)],
 listen_text='Right. Before anybody runs anything, say which of the four it is. If it is '
             'extraction, name the file and the fields. If it is classification, name the '
             'groups and what happens to whatever fits none of them. If it is generation, '
             'name the standard, because nothing else will. And write it down, because four '
             'minutes on the brief is cheaper than an hour and a half of apology.',
 listen=[('Say which of the ____________ it is.', 'four'),
         ('If it is extraction, name the file and the ____________.', 'fields'),
         ('If it is generation, name the ____________.', 'standard'),
         ('Four minutes on the ____________ is cheaper than an apology.', 'brief')],
 speak=['Give your partner an instruction with no purpose. Ask them to say three different things it could mean.',
        'Then add to + verb, and ask them again.'],
 write='Write the six-line brief for a job you will actually delegate this month. Name the operation in the Purpose line.',
 vocab=[('A short written instruction saying what work is wanted is a ____________.', 'brief'),
        ('The thing you promised to hand over is the ____________.', 'deliverable'),
        ('Work the customer never sees is ____________ work.', 'back-office'),
        ('A task that needs no decision each time is ____________.', 'routine'),
        ('The time from receiving work to returning it is the ____________.', 'turnaround')],
 gram=[('____________ the dates against the ledger.', 'Check'),
       ('I am sending it ____________ show where the gap is.', 'to'),
       ('____________ not reply to anything marked disputed.', 'Do'),
       ('____________ send a reminder to a disputed account.', 'Never'),
       ('She wrote it down ____________ avoid another Tuesday.', 'to')]),

found=['Write the six lines for one job this week, even a small one, and time yourself.',
       'Take an instruction somebody gave you and find the word with no end point in it.',
       'Label five things on your desk generate, transform, extract or classify.',
       'Ask one colleague what they thought your last instruction meant.'],
end_line='Six words cost nine hundred euros. Six lines would have cost four minutes.',
end_next='Next: One Instruction, One Output',
)
