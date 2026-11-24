# -*- coding: utf-8 -*-
import figs

U = dict(
num=1, title='Right, Nearly Right, Unverifiable',
gram='hedging and approximation: tends to, broadly, in most cases',
ai='three kinds of error: wrong, plausible, unverifiable',
strap='CEFR B2 · Grammar: hedging and approximation · AI: three kinds of error',
cando=['hedge a claim accurately, so that it says what I actually know',
       'use tends to, broadly and in most cases without sounding evasive',
       'distinguish an output that is wrong from one that cannot be checked at all',
       'say which of the three kinds of error a particular failure belongs to',
       'explain why the unverifiable kind is the one that costs most'],
hero=('VICTOR SANDOVAL, ELEVEN DAYS IN',
      ['He was hired to build quality into work he had never seen done.',
       'On day two he asked how anybody knew it was right.'],
      [(820, 'blue', 'short'), (1540, 'teal', 'long'),
       (2200, 'grey', 'short'), (2740, 'orange', 'long')]),
hero_cap='The question that defines Book 3, asked before anybody had an answer to it.',

warm=['What is the difference between an answer that is wrong and one you cannot check?',
      'When somebody says a process is "broadly reliable", what have they told you?',
      'Which errors at your work would nobody ever discover?'],
read=[
 'Victor Sandoval joined Arclight when it was eleven people, as the first person whose job '
 'was quality rather than delivery, and on his second day he asked a question that nobody '
 'had a satisfactory answer to: how does anybody here know the work is right? The answers he '
 'received were honest, and between them they did not amount to a method.',
 'He spent his first fortnight sorting four hundred outputs into three piles rather than two, '
 'which turned out to be the single most useful thing he did that year. The first pile was '
 'work that was wrong, where a figure or a name or a date did not match the source and '
 'anybody could establish that in under a minute by looking.',
 'The second pile was work that was plausible: output that was not obviously wrong, that read '
 'well, and that would have required somebody to go back to the source document in order to '
 'confirm it. Nobody had gone back. The work had been accepted because it was reasonable, '
 'which is a different standard entirely, and a much weaker one.',
 'The third pile was the one that changed how Arclight thought about the problem. It held '
 'outputs that could not be checked at all, because the thing they asserted was not recorded '
 'anywhere: a summary of what a client had meant, a judgement that a complaint was minor, a '
 'statement that an account looked dormant. These were neither right nor wrong. They were '
 'unverifiable, and there were more of them than anybody had expected.',
 'Victor’s argument, which took him four months to win, is that the three piles need '
 'entirely different treatment. Wrong work needs a check. Plausible work needs a sample, '
 'because checking all of it costs more than it saves. Unverifiable work needs something '
 'harder: either a decision that it is acceptable without evidence, taken deliberately and '
 'in writing, or a change to the work so that it produces something checkable instead.'],
c_a=[('What was Victor’s job at Arclight?', 'quality, as the first person whose job was not delivery'),
     ('What question did he ask on his second day?', 'how anybody knew the work was right'),
     ('What are the three piles?', 'wrong, plausible and unverifiable'),
     ('What is the difference between wrong and plausible work?', 'wrong work can be established in a minute; plausible work requires going back to the source'),
     ('What does unverifiable work need?', 'either a deliberate written decision to accept it without evidence, or a change so that it produces something checkable')],
c_b=[('Victor was hired as a delivery manager.', 'F'),
     ('He sorted outputs into two piles.', 'F'),
     ('Plausible work had been checked against the source.', 'F'),
     ('Unverifiable work is neither right nor wrong.', 'T'),
     ('It took Victor four months to win the argument.', 'T'),
     ('Checking all plausible work costs less than it saves.', 'F')],
c_c=[('He was the first person whose job was quality rather than ____________.', 'delivery'),
     ('The answers did not amount to a ____________.', 'method'),
     ('The work had been accepted because it was ____________.', 'reasonable'),
     ('The thing they asserted was not ____________ anywhere.', 'recorded'),
     ('Plausible work needs a ____________.', 'sample'),
     ('Either a decision taken deliberately and in ____________.', 'writing')],
c_d=[('The third pile was ( smaller / larger ) than expected.', ['smaller', 'larger'], 1),
     ('Work in the second pile had been accepted because it was', ['checked', 'reasonable', 'quick', 'cheap'], 1),
     ('Unverifiable output is best described as', ['always wrong', 'neither right nor wrong', 'always right', 'rare'], 1),
     ('Victor’s central claim is that the three piles need', ['the same treatment', 'entirely different treatment', 'no treatment', 'more staff'], 1),
     ('A wrong output can typically be established in', ['a minute', 'an hour', 'a day', 'never'], 0)],
c_e=('Which pile? Put each output in the right column.',
     [('An invoice total that does not match the invoice', 'Wrong'),
      ('A fluent summary nobody has compared with the call', 'Plausible'),
      ('A statement that a client seemed satisfied', 'Unverifiable'),
      ('A date that contradicts the contract', 'Wrong'),
      ('A judgement that a complaint is minor', 'Unverifiable'),
      ('A well-written letter nobody has read against the notes', 'Plausible')],
     ['Wrong', 'Plausible', 'Unverifiable']),

v_fig_title='THREE KINDS OF ERROR',
v_fig=[('scale', 'verifiable'), ('doc', 'a discrepancy'), ('bulb', 'an anomaly'),
       ('note', 'a hedge'), ('chart', 'margin of error'), ('bank', 'grounds')],
v_fig_cap='Six words you need before you can say what kind of wrong something is.',
vocab=[
 ('error', 'a departure from what is correct, whether or not anybody notices'),
 ('defect', 'a fault in something that makes it fall short of its specification'),
 ('anomaly', 'something that does not fit the expected pattern'),
 ('discrepancy', 'a difference between two records that ought to agree'),
 ('inaccuracy', 'a failure to match the true value closely enough'),
 ('falsifiable', 'capable of being shown to be false, if it is false'),
 ('verifiable', 'capable of being confirmed against something independent'),
 ('corroborate', 'to support a statement with evidence from another source'),
 ('substantiate', 'to provide the evidence that makes a claim stand up'),
 ('hedge', 'to qualify a statement so that it claims no more than you know'),
 ('qualifier', 'a word limiting how strongly a statement is being made'),
 ('approximation', 'a value close enough to the true one for the purpose'),
 ('margin of error', 'the range within which the true value is expected to lie'),
 ('confidence', 'the degree of belief that a result is correct'),
 ('grounds', 'the reasons on which a claim or a decision rests'),
 ('spurious', 'looking genuine but having no real basis'),
 ('specious', 'plausible on the surface and wrong underneath'),
 ('scrutiny', 'close and critical examination'),
 ('benign', 'causing no harm, even though it is a fault'),
 ('systematic', 'occurring in a regular pattern rather than at random')],
v_a=[('A difference between two records that should agree is a ____________.', 'discrepancy'),
     ('A claim capable of being confirmed independently is ____________.', 'verifiable'),
     ('To support a statement with evidence from elsewhere is to ____________ it.', 'corroborate'),
     ('The range within which the true value is expected to lie is the ____________.', 'margin of error'),
     ('A fault that causes no harm is ____________.', 'benign'),
     ('An error occurring in a regular pattern is ____________.', 'systematic'),
     ('Something plausible on the surface and wrong underneath is ____________.', 'specious'),
     ('The reasons on which a decision rests are its ____________.', 'grounds')],
v_b=[('An anomaly is something that does not fit', 'the expected pattern.'),
     ('To hedge a statement is to qualify it so that', 'it claims no more than you know.'),
     ('A defect is a fault that makes something', 'fall short of its specification.'),
     ('Spurious means looking genuine but having', 'no real basis.'),
     ('Scrutiny is close and critical', 'examination.')],

g_title='Grammar: hedging and approximation',
g_rule=['Tends to and generally describe a pattern with exceptions you have not listed.',
        'Broadly, roughly and approximately attach to quantities you have measured imprecisely.',
        'In most cases implies you know what proportion; say the proportion if you do.',
        'A hedge is honest when it reports what you know, and evasive when it hides what you do not.'],
g_fig=('LOOSE',
       ['It is broadly reliable.',
        'Errors tend to be minor.',
        'In most cases it works.',
        'It is roughly right.'],
       'PRECISE',
       ['3 of 60 sampled rows were wrong.',
        'Of 9 errors, 7 were under 5 euros.',
        'It completed 57 of 60 runs.',
        'Within 5 cents on 41 of 60 lines.'],
       'a hedge standing in for a measurement',
       'a measurement, which needs no hedge'),
g_fig_cap='A hedge is only honest once you have tried to measure the thing it is hedging.',
g_a=[('Errors ____________ to cluster in the first week of the month. (tend)', 'tend'),
     ('____________ speaking, the figures agree to within five cents. (broad)', 'Broadly'),
     ('In ____________ cases the file arrives before nine. (most)', 'most'),
     ('The total is ____________ four thousand euros. (approximate)', 'approximately'),
     ('It ____________ be fair to say that nobody checked it. (would)', 'would'),
     ('The result is ____________ consistent with the ledger. (broad)', 'broadly'),
     ('There is a ____________ of error of about two per cent. (margin)', 'margin'),
     ('The evidence ____________ that the fault is systematic. (suggest)', 'suggests'),
     ('____________ all the discrepancies were under five euros. (virtual)', 'Virtually')],
g_b=[('It is ( broadly / exactly ) reliable, though we have not measured it.', ['broadly', 'exactly'], 0),
     ('Errors ____ to cluster at month end.', ['tending', 'tend', 'tends', 'tended to'], 1),
     ('The total is ____ four thousand euros.', ['approximate', 'approximation', 'approximately', 'approximating'], 2),
     ('____ speaking, the figures agree.', ['Broad', 'Broadly', 'Breadth', 'Broader'], 1),
     ('The evidence ____ that the fault is systematic.', ['suggest', 'suggests', 'suggesting', 'is suggest'], 1),
     ('There is a margin ____ error of two per cent.', ['in', 'to', 'of', 'for'], 2)],

d1=dict(title='How do you know it is right?',
        fig=(['How do you know the work is right?', 'Nothing has come back.'],
             ['That is not the same question.', 'No. It is not.']),
        cap='Victor and Dalia, on his second day.',
        lines=[('Victor', 'How does anybody here know the work going out is right?'),
               ('Dalia', 'Very little comes back. In two years we have had four complaints.'),
               ('Victor', 'That tells me what clients noticed. It does not tell me what we sent.'),
               ('Dalia', 'For most of it, those are the same thing.'),
               ('Victor', 'For some of it they are. Which parts, and how do you know which?'),
               ('Dalia', 'I do not have an answer that would satisfy you.'),
               ('Victor', 'You have an answer that has worked. I am not saying it was wrong to rely on it.'),
               ('Dalia', 'But it stops working at some size.'),
               ('Victor', 'It stops working when the volume exceeds what a client would ever read.'),
               ('Dalia', 'We passed that about four months ago, I think.'),
               ('Victor', 'Then the four complaints are the ones that happened to land on something visible.'),
               ('Dalia', 'That is a very uncomfortable sentence and I cannot think of an objection to it.')],
        a=[('What evidence does Dalia offer first?', 'that very little comes back and there have been four complaints in two years'),
           ('Why does Victor say that is insufficient?', 'because it describes what clients noticed, not what was sent'),
           ('When does Victor say the method stops working?', 'when the volume exceeds what a client would ever read'),
           ('When did Arclight pass that point?', 'about four months earlier'),
           ('What does Victor conclude about the four complaints?', 'that they landed on something visible rather than representing the whole')],
        b=[('In two years we have had four ____________.', 'complaints'),
           ('It does not tell me what we ____________.', 'sent'),
           ('It stops working when the ____________ exceeds what a client would read.', 'volume'),
           ('They happened to land on something ____________.', 'visible')]),
d2=dict(title='Neither right nor wrong',
        fig=(['Is it right or wrong?', 'Neither. That is the problem.'],
             ['Then throw it away.', 'We sell it. That is also the problem.']),
        cap='Victor and Marta, over the third pile.',
        lines=[('Marta', 'This pile. Is the work in it right or wrong?'),
               ('Victor', 'Neither. There is nothing it could be checked against.'),
               ('Marta', 'Give me an example.'),
               ('Victor', 'A note saying the client seemed satisfied with the arrangement.'),
               ('Marta', 'You cannot check that even in principle.'),
               ('Victor', 'Not without the client, and even then they may not remember.'),
               ('Marta', 'Then we should not produce it. If it cannot be checked, it is an opinion.'),
               ('Victor', 'It is an opinion, and clients pay us for some of those opinions.'),
               ('Marta', 'Then the opinion should carry a name, so that somebody owns it.'),
               ('Victor', 'That is a good answer and it does not solve the volume problem.'),
               ('Marta', 'I am aware. I would rather have four hundred owned opinions than four hundred anonymous ones.'),
               ('Victor', 'So would I, and I do not think anybody will read the names.')],
        unresolved=True,
        a=[('What is wrong with the third pile?', 'there is nothing the work could be checked against'),
           ('What example does Victor give?', 'a note saying the client seemed satisfied'),
           ('What is Marta’s first position?', 'that work which cannot be checked should not be produced'),
           ('Why does Victor resist that?', 'because clients pay for some of those opinions'),
           ('What do they agree and disagree about at the end?', 'they agree an opinion should carry a name; they disagree about whether anybody will read the names')],
        b=[('There is nothing it could be ____________ against.', 'checked'),
           ('If it cannot be checked, it is an ____________.', 'opinion'),
           ('The opinion should carry a ____________.', 'name'),
           ('It does not solve the ____________ problem.', 'volume')]),

speak=[('Sort it into three',
        ['Student A: describe six outputs your workplace produces.',
         'Student B: sort each into wrong-checkable, plausible or unverifiable.',
         'Argue about the two hardest, and say what would move them to another pile.']),
       ('Spoken specification: brief a check',
        ['Choose work where a wrong result could survive unnoticed.',
         'Brief aloud what would be compared against what, and how many items.',
         'Your partner asks what would happen if the comparison source is itself wrong.']),
       ('Hedge honestly',
        ['One of you makes four claims about your own work, using hedges.',
         'The other asks, for each hedge, what measurement would replace it.',
         'Agree which hedges were honest reports and which were cover.'])],

ext_title='The pile you cannot check is the one that grows',
ext_fig=figs.datatable('FOUR HUNDRED OUTPUTS, SORTED',
                       ['Pile', 'Count', 'Cost to check 1', 'Checked before Victor'],
                       [['wrong, checkable', '19', 'under 1 min', 'occasionally'],
                        ['plausible', '264', '4–6 min', 'almost never'],
                        ['unverifiable', '117', 'impossible', 'never'],
                        ['total', '400', '—', '—'],
                        ['of the 19, found by clients', '4', '—', '—']]),
ext_fig_cap='The middle row is the expensive one and the bottom row is the dangerous one.',
ext=[
 'Most discussions of quality treat error as a single category, which works reasonably well '
 'when a human being is producing the work at human speed, because the person doing it '
 'carries a continuous and largely unconscious sense of how confident they are. When output '
 'arrives at volume, with no accompanying signal of confidence, that single category stops '
 'being useful and has to be broken into at least three.',
 'The first kind is error that can be established cheaply, because the output asserts '
 'something that a source document also asserts, and the two can be set beside each other. '
 'A total that disagrees with its invoice, a date that contradicts a contract, a name that '
 'does not appear in the client’s own file: all of these are settled in under a minute by '
 'anybody at all.',
 'The second kind is output that is plausible, which is to say not obviously wrong, written '
 'well, and unchecked. It may be entirely correct; the point is that nobody knows, and that '
 'finding out would cost several minutes an item. At four hundred items a day the arithmetic '
 'of checking everything stops working, which is why sampling exists and why it is the '
 'subject of a later unit in this book.',
 'The third kind is output nothing could check, because what it asserts is not recorded '
 'anywhere. A judgement that a complaint is minor, a summary of what somebody meant rather '
 'than said, an assessment that an account looks dormant. These are not failures of process. '
 'They are statements of a kind that has no external referent, and no amount of checking '
 'will ever confirm one.',
 'The practical consequence is that the third category has to be managed rather than '
 'verified, and there are only two honest ways to do it. Either somebody decides, in writing, '
 'that an unverifiable output is acceptable for a stated purpose, which is a real decision '
 'with a name on it. Or the work is changed so that it produces something checkable instead: '
 'not "the client seemed satisfied" but "the client said that is fine, leave it with me".'],
dp1=('Unverified output',
     'Quality-assurance surveys in service organisations commonly find that a majority of '
     'outputs are accepted without any comparison against a source, with acceptance resting '
     'on the absence of complaints.',
     'Source: general quality-assurance research, 2026. Practice varies widely by sector.'),
e_a=[('Why does a single category of error stop working at volume?', 'because the human sense of confidence that accompanies hand-produced work is absent'),
     ('What makes the first kind of error cheap to establish?', 'the output asserts something a source document also asserts, so the two can be compared'),
     ('What is the defining feature of plausible output?', 'it may be correct, but nobody knows and finding out costs minutes per item'),
     ('Why can the third kind never be confirmed?', 'because what it asserts has no external referent'),
     ('What are the two honest ways to manage unverifiable output?', 'decide in writing that it is acceptable, or change the work so it produces something checkable')],
e_b=[('Human-produced work carries an unconscious confidence signal.', 'T'),
     ('A total disagreeing with its invoice is expensive to establish.', 'F'),
     ('Plausible output is known to be correct.', 'F'),
     ('Checking everything is arithmetically viable at four hundred items a day.', 'F'),
     ('Unverifiable output represents a failure of process.', 'F'),
     ('"The client said that is fine" is more checkable than "the client seemed satisfied".', 'T')],

w_model=(
 'Purpose: establish what proportion of outbound work is actually checkable, before '
 'designing any checks. Scope: 400 outputs produced in the week of 6 March; internal '
 'reports are excluded. Inputs: the outputs themselves and the source documents each one '
 'was produced from. Criteria: sort every output into exactly 1 of 3 categories — wrong '
 'against a source, plausible but unchecked, or unverifiable; record for each one what it '
 'would have to be compared against. Done: 3 counts, 1 list of comparison sources, and 1 '
 'list of every output with no possible source. Fallback: if an output could be checked '
 'against a source that nobody can locate, record it as plausible and name the missing '
 'source.'),
w_fig=figs.spec_card('SORTING BEFORE CHECKING',
                     [('Wrong', 'A source says otherwise, and anybody can see it'),
                      ('Plausible', 'A source exists; nobody has looked at it'),
                      ('Unverifiable', 'No source exists, even in principle'),
                      ('For each', 'Record what it would be compared against'),
                      ('Output', '3 counts and the list with no source'),
                      ('Fallback', 'Source exists but is missing: plausible, and name it')]),
w_fig_cap='The fourth line is the useful one: naming the comparison source is most of the work.',
w_task='Sort a week of your own outputs into the three categories.',
w_steps=['Take every output of one kind that your team produced in a week.',
         'For each, write down what it would have to be compared against to be checked.',
         'Where there is nothing to compare against, put it in the third pile.',
         'Count the three piles and state each as a proportion.',
         'For the third pile, say who currently decides that it is acceptable.'],
w_bank=['This output would be checked against …',
        'There is no source against which … could be confirmed.',
        'Of … outputs, … were … and … were …',
        'The third category accounts for … per cent.',
        'Responsibility for accepting … currently rests with …'],
w_check=['Have you named a comparison source for every item in the first two piles?',
         'Is the third pile genuinely unverifiable, or merely inconvenient to verify?',
         'Have you stated each pile as a proportion rather than a feeling?',
         'Does somebody own the acceptance of the third pile, by name?'],

t_title='Three kinds of error: wrong, plausible, unverifiable',
t_fig=figs.split('WHAT A CHECK CAN AND CANNOT SETTLE',
                 'Settled by comparison',
                 ['the total against the invoice',
                  'the date against the contract',
                  'the name against the client file',
                  'the count against the ledger'],
                 'Not settled by anything',
                 ['the client seemed satisfied',
                  'this complaint is minor',
                  'the account looks dormant',
                  'the tone is appropriate']),
t_fig_cap='The right-hand column is not badly produced. It is of a kind no check reaches.',
t_body=[
 'Before designing any quality arrangement, sort a week of real output into the three piles, '
 'because the proportions decide everything that follows and almost nobody knows them. The '
 'exercise takes a day and it replaces an argument about how good the work is with an '
 'argument about numbers, which is a much more productive kind of argument to have.',
 'For each output, the operative question is not whether it looks right but what it would '
 'have to be compared against. If you can name a document, the output is checkable, and the '
 'remaining question is only how many you check. If you cannot name one, you have found an '
 'item for the third pile, and the honest response is to notice that rather than to look '
 'harder at the output itself.',
 'Then deal with the third pile explicitly, because it does not shrink on its own and it '
 'tends to grow as more judgement is handed over. Either somebody accepts it with their name '
 'attached, which is a legitimate commercial decision, or the work is redesigned so that it '
 'reports what was said rather than what was meant, which converts an unverifiable output '
 'into a merely plausible one.'],
t_say=[('Name the comparison: ', 'This would be checked against the 14 March ledger.'),
       ('Admit the gap: ', 'There is no document against which that judgement could be confirmed.'),
       ('Convert it: ', 'Report what the client said, not what the client appeared to feel.')],
t_bound=('Sorting outputs into three piles tells you what could be checked, not what is '
         'wrong. A week’s work can be sorted carefully and completely, with every comparison '
         'source named, while every item in the first two piles remains entirely unexamined; '
         'the sorting is preparation for checking and is not itself a check.'),
t_a=[('This would be checked against the 14 March ____________.', 'ledger'),
     ('There is no document against which that ____________ could be confirmed.', 'judgement'),
     ('Report what the client ____________, not what the client appeared to feel.', 'said'),
     ('The operative question is what it would have to be ____________ against.', 'compared'),
     ('The third pile tends to ____________ as more judgement is handed over.', 'grow'),
     ('Either somebody accepts it with their ____________ attached.', 'name')],
t_b_rubric='Name the comparison source, or say that there is none.',
t_b=[('The invoice total in the summary.', 'the invoice itself; checkable in under a minute'),
     ('A note that the client was happy.', 'no source; convert it to what the client actually said'),
     ('The delivery date quoted to a customer.', 'the shipping record; checkable against the booking'),
     ('An assessment that an account is dormant.', 'the order history, if dormant is defined by a date')],

case=dict(
 title='Decision Clinic · What do we do with the third pile?',
 brief=[
  'Victor’s sort found that 117 of 400 weekly outputs are unverifiable. Most of them are '
  'short judgements attached to client records: whether a query was resolved, whether a '
  'complaint was minor, whether an account looks inactive.',
  'Arclight sells these judgements, in the sense that clients buy a service which includes '
  'somebody forming a view. Removing them would change the product and would reduce what '
  'Arclight can charge.',
  'Marta wants every unverifiable judgement to carry the name of a person who stands behind '
  'it. Victor estimates that this would add about ninety seconds per item, or roughly three '
  'hours a week, and doubts that anybody will ever read the names.'],
 exhibit=figs.datatable('THE 117 UNVERIFIABLE OUTPUTS',
                        ['Kind', 'Count', 'Could be converted?', 'Client visible?'],
                        [['query resolved?', '44', 'yes, to a quoted reply', 'no'],
                         ['complaint minor?', '31', 'partly, with a definition', 'yes'],
                         ['account dormant?', '28', 'yes, with a date rule', 'no'],
                         ['tone appropriate?', '9', 'no', 'yes'],
                         ['client satisfied?', '5', 'no', 'yes']]),
 exhibit_cap='Seventy-two of the 117 could be converted into something checkable.',
 exhibit_note='"Converted" means the judgement could be replaced by a statement of fact '
              'that a source supports. The last two rows resist conversion entirely.',
 voices=[('Marta Olsen', 'risk and liability',
          'Put a name on every one. An unverifiable judgement with nobody behind it is a '
          'claim the company has made and cannot defend.'),
         ('Victor Sandoval', 'operations and quality',
          'Seventy-two of the 117 are not judgements at all. They are facts somebody has '
          'written as judgements. Convert those and the problem is a third of the size '
          'before we spend anything on names.'),
         ('Fatima Zahra', 'client manager',
          'The fourteen in the last two rows are the ones clients actually see, and they are '
          'exactly the ones that cannot be converted. I would start there, not with the '
          'easy seventy-two.')],
 steps=[('Find it', 'How many of the 117 could be converted, and how many cannot?'),
        ('Compare it', 'What does naming buy, and what does converting buy?'),
        ('Infer it', 'Why does Fatima want to start with the smallest group?'),
        ('Weigh it', 'Three hours a week of naming against a third of the problem removed free.'),
        ('Decide', 'What happens to the 117, in what order?')],
 analysis=[('Find it. How many could be converted?', 'seventy-two of the hundred and seventeen'),
           ('Compare it. What does conversion achieve that naming does not?', 'it removes the item from the unverifiable category altogether'),
           ('Infer it. Why start with the fourteen?', 'because those are the ones clients see and the ones that cannot be converted'),
           ('Weigh it. What would naming all 117 cost?', 'about three hours a week, for items most of which should not be judgements at all'),
           ('Decide. What is the sensible order?', 'convert the seventy-two, name the fourteen client-visible ones, then decide about the rest')],
 decision='Write the plan Victor takes to Ines.',
 decision_steps=['Say what happens to the convertible group, and by when.',
                 'Say what happens to the group that clients see.',
                 'Put a figure on what remains unverifiable after both steps.',
                 'Say who accepts the remainder, and in what form.'],
 bank=['Of the … , … will be converted into …',
       'The … that clients see will …', 'That leaves approximately … items which …',
       'Responsibility for accepting these rests with …',
       'This will be reviewed when …'],
 outcome='Seventy-two were converted over five weeks, mostly by replacing a judgement with a '
         'quotation or a date rule. The fourteen client-visible ones were given named '
         'signers, which took about twenty minutes a week rather than three hours. In the '
         'first six months two of those names were asked about by a client, which Victor had '
         'predicted would never happen and which Marta had not predicted either; both '
         'occasions involved the same client, and both were resolved in a sentence.',
 outcome_q=[('Why did naming cost far less than Victor estimated?', 'because conversion had removed seventy-two of the items before naming began'),
            ('What did the two client queries show?', 'that the names were occasionally used, though far less than Marta expected and more than Victor did')],
 tags=[]),

lab=dict(
 title='Brief Lab · Find out how good the work is',
 task=['This is the brief Ines gave Victor in his first week, when the company wanted to '
       'know how good its output was and had no idea how to find out.',
       'It is a reasonable request written by somebody who has never done the work. Every '
       'line of it assumes that quality is one thing and that it can be assessed by looking '
       'at the output.'],
 draft=['Have a look at the quality of what we are sending out.',
        'Take a decent sample across the clients.',
        'Tell me roughly how much of it is good.',
        'Flag anything that looks like a serious problem.',
        'Obviously you will need to use your judgement.',
        'Come back with a view by the end of the month.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A quality brief that asks for a verdict and supplies no standard to reach it by.',
 asked=['Every output sorted into 3 categories',
        'A named comparison source for each',
        'Counts, stated as proportions'],
 back=['A single verdict: mostly fine',
       'No comparison sources recorded',
       'The unverifiable category never identified'],
 gap='"How much of it is good" presumes one category of quality, "a decent sample" sets no '
     'size, and judging the output by looking at it cannot distinguish correct work from '
     'work that happens to read well.',
 back_cap='A month of careful reading that could not tell plausible work from verified work.',
 back_note='The first assessment concluded that the work was "broadly sound". Victor says '
           'the sentence was defensible, carried no information, and would have been written '
           'in exactly the same words had the work been poor.',
 diagnosis=[('[1] "the quality of what we are sending" — quality measured how?', 'unstated criterion'),
            ('[2] "a decent sample" — how many, chosen how?', 'unbounded quantity'),
            ('[3] "roughly how much of it is good" — good against what source?', 'unstated criterion'),
            ('[4] "anything that looks like a serious problem" — serious to whom?', 'hidden assumption'),
            ('[5] "use your judgement" — on work that may be unverifiable?', 'hidden assumption'),
            ('[6] "come back with a view" — a view of what size?', 'unbounded quantity')],
 rewrite='Rewrite the brief so that it asks for a sort rather than a verdict, and so that '
         'every output carries the source it would be checked against.',
 scaffold=['Why a verdict is less useful than a set of counts',
           'Which outputs are covered, over what period, and what is excluded',
           'The outputs themselves and the source documents each was produced from',
           'The three categories, and what must be recorded for every item',
           'The counts and lists that come back, and by what date',
           'What to record when a source should exist but cannot be found'],
 bank=['Establish … so that … can be designed afterwards.',
       'Cover all … produced in … ; exclude …',
       'Work from … and the source documents …',
       'Sort every output into exactly 1 of 3 categories: … , … or … ; record …',
       'Return … counts, … and … by …',
       'If a source exists but cannot be located, …'],
 check=['Does the brief ask for counts rather than a verdict?',
        'Must a comparison source be named for every checkable item?',
        'Is the unverifiable category defined, rather than left to emerge?',
        'Does Done carry numbers and a date?'],
 model=['Establish what proportion of outbound work is checkable at all, before any check is designed',
        'All 400 outputs produced in the week of 6 March; internal reports and drafts never sent are excluded',
        'The outputs themselves and the source documents each one was produced from',
        'Sort every output into exactly 1 of 3 categories — wrong against a source, plausible but unchecked, or unverifiable — and record for each one the document it would have to be compared against',
        '3 counts stated as proportions, 1 list of comparison sources, and 1 list of every output with no possible source, by 31 March',
        'If an output could be checked against a source that nobody can locate, record it as plausible and name the missing source rather than calling it unverifiable'],
 cost='1 month of senior time producing the sentence "broadly sound", 0 comparison sources '
      'recorded, and a further 6 weeks before anybody established that 117 of 400 outputs '
      'could not be checked by anybody at all.'),

rev_fig=figs.split('HEDGED AND MEASURED',
                   'Hedged — standing in for a number',
                   ['It is broadly reliable.',
                    'Errors tend to be minor.',
                    'In most cases it works.',
                    'It is roughly right.'],
                   'Measured — no hedge needed',
                   ['3 of 60 sampled rows were wrong.',
                    '7 of 9 errors were under 5 euros.',
                    'It completed 57 of 60 runs.',
                    'Within 5 cents on 41 of 60 lines.']),
rev_fig_cap='Hedge what you have measured imprecisely. Do not hedge what you have not measured.',
rev=dict(
 read=[('The third pile contains work that is', ['always wrong', 'impossible to check against anything', 'rarely produced', 'cheap'], 1),
       ('A hedge is honest when it', ['softens a claim', 'reports what you actually know', 'avoids blame', 'shortens a sentence'], 1),
       ('Plausible output is defined by the fact that', ['it is wrong', 'nobody has compared it with a source', 'it is short', 'clients complained'], 1),
       ('In the Clinic, what reduced the problem fastest?', ['naming signers', 'converting judgements into facts', 'hiring staff', 'sampling'], 1)],
 listen_text='Start by sorting, not by checking. Take a week of real output and put every '
             'item into one of three piles: wrong against a source, plausible but unchecked, '
             'or unverifiable because nothing could ever confirm it. The question for each '
             'item is not whether it looks right. It is what you would have to compare it '
             'against, and if you cannot name a document, you have found the third pile.',
 listen=[('Start by ____________, not by checking.', 'sorting'),
         ('Unverifiable because nothing could ever ____________ it.', 'confirm'),
         ('The question is what you would have to ____________ it against.', 'compare'),
         ('If you cannot name a ____________, you have found the third pile.', 'document')],
 speak=['Name four outputs from your work. Your partner asks what each would be checked against.',
        'Find the one with no possible answer, and decide what it would take to convert it.'],
 write='Sort ten of your own outputs into the three categories, naming the source for each.',
 vocab=[('A difference between two records that should agree is a ____________.', 'discrepancy'),
        ('A claim capable of being confirmed independently is ____________.', 'verifiable'),
        ('The range within which the true value lies is the ____________.', 'margin of error'),
        ('An error occurring in a regular pattern is ____________.', 'systematic'),
        ('Something plausible on the surface and wrong underneath is ____________.', 'specious')],
 gram=[('Errors ____________ to cluster in the first week of the month.', 'tend'),
       ('____________ speaking, the figures agree to within five cents.', 'Broadly'),
       ('The total is ____________ four thousand euros.', 'approximately'),
       ('In ____________ cases the file arrives before nine.', 'most'),
       ('The evidence ____________ that the fault is systematic.', 'suggests')]),

found=['Take ten outputs from your own work and name what each would be checked against.',
       'Count how many of the ten have no possible comparison source.',
       'Find a hedge in your own writing and work out what measurement would replace it.',
       'Ask your team how they currently know that the work going out is right.'],
end_line='Four complaints in two years told them what clients noticed, and nothing about what was sent.',
end_next='Next: It Must Be, It Might Be',
)
