# -*- coding: utf-8 -*-
import figs

U = dict(
num=1, title='What Must Never Be Left Out',
gram='ellipsis: what must never be left out',
ai='judgement under responsibility: who answers for it',
strap='CEFR C1 · Grammar: ellipsis · AI: who answers for it',
cando=['use ellipsis naturally and recognise when it creates ambiguity',
       'restore the element a sentence has omitted, and say why it matters',
       'name the person who answers for a decision a system contributed to',
       'write a chain of responsibility that survives being read in a dispute',
       'state what must never be omitted from a record of a decision'],
hero=('CONFIRMED BY WHOM?',
      ['The draft was produced, reviewed and released.',
       'Three passive verbs, and not one name among them.'],
      [(780, 'grey', 'short'), (1480, 'orange', 'long'),
       (2180, 'teal', 'short'), (2840, 'purple', 'long')]),
hero_cap='Responsibility is the one thing a sentence must never leave out.',

warm=['Who answers for the last significant error your organisation made?',
      'Was that written down before the error, or worked out afterwards?',
      'What does your record of a decision omit that a stranger would need?'],
read=[
 'The filing that went out on the eleventh of March contained a figure that was wrong by a '
 'factor of ten, and was signed, in the sense that somebody’s name appeared on the covering '
 'letter. What it did not contain, and what nobody could afterwards supply, was any record of '
 'who had decided that the figure was right.',
 'The sequence was ordinary. A system drafted the schedule from the client’s own records; a '
 'reviewer in the checking team confirmed it; a client manager assembled the filing; and a '
 'director signed the covering letter without reading the schedule, which is what a covering '
 'letter means in that firm and in most others. Each of those four acts was correct according '
 'to the process as written.',
 'Marta Olsen’s question, put to the board three days later, was not who was to blame. It '
 'was narrower and harder: for each of the four steps, what exactly was the person asserting '
 'when they completed it? The reviewer believed she was confirming that the schedule matched '
 'the source. The client manager believed the schedule had been checked. The director believed '
 'the client manager would not have brought him something unchecked. Nobody believed they were '
 'asserting that the figure was right.',
 'What made this difficult to repair was that the process document was, in the ordinary sense, '
 'complete. It described every step, every input and every output. What it omitted was the one '
 'element that the grammar of the document had quietly dropped: who asserts what. Confirmed, '
 'reviewed, released and signed had all been written as things that happen rather than as '
 'things somebody does.',
 'The rewritten process is barely longer and reads, to several people in the firm, as '
 'pedantic. Each step now names a role and states the assertion in the first person: I have '
 'compared the schedule with the source and the figures agree; I have read the schedule and '
 'the figures are consistent with what I know of this client; I have not read the schedule '
 'and rely on the client manager. The third of those sentences is the one that caused an '
 'argument, and it is the only one that was true before the change.'],
c_a=[('What was wrong with the filing of 11 March?', 'a figure was wrong by a factor of ten'),
     ('What could nobody afterwards supply?', 'any record of who had decided the figure was right'),
     ('What was Marta’s question?', 'what each person was asserting when they completed their step'),
     ('What did the process document omit?', 'who asserts what'),
     ('Which of the new sentences caused an argument?', 'the one admitting the director has not read the schedule')],
c_b=[('Nobody signed the filing.', 'F'),
     ('One of the four steps was performed incorrectly.', 'F'),
     ('The reviewer believed she was confirming that the schedule matched the source.', 'T'),
     ('The process document described every step.', 'T'),
     ('The rewritten process is much longer.', 'F'),
     ('The third sentence was untrue before the change.', 'F')],
c_c=[('Wrong by a factor of ____________.', 'ten'),
     ('Each of those four acts was correct according to the process as ____________.', 'written'),
     ('Nobody believed they were ____________ that the figure was right.', 'asserting'),
     ('Written as things that ____________ rather than as things somebody does.', 'happen'),
     ('Each step now names a ____________ and states the assertion.', 'role'),
     ('It is the only one that was ____________ before the change.', 'true')],
c_d=[('The process document was complete except for ( the outputs / who asserts what ).', ['the outputs', 'who asserts what'], 1),
     ('How many steps were in the sequence?', ['two', 'four', 'six', 'eleven'], 1),
     ('The director signed the covering letter', ['after reading the schedule', 'without reading the schedule', 'twice', 'under protest'], 1),
     ('Marta’s question was about', ['blame', 'what each person was asserting', 'cost', 'the client'], 1),
     ('The argument was caused by', ['the length', 'the admission of non-reading', 'the cost', 'the grammar'], 1)],
c_e=('What has been left out? Put each sentence in the right column.',
     [('The draft was reviewed.', 'the person'),
      ('Confirmed on 11 March.', 'the person and the verb'),
      ('She compared the schedule and agreed.', 'nothing essential'),
      ('Released, as usual.', 'the person and the verb'),
      ('I have read it; he has not.', 'nothing essential'),
      ('Signed without reading.', 'the person')],
     ['the person', 'the person and the verb', 'nothing essential']),

v_fig_title='WHO ANSWERS FOR IT',
v_fig=[('scale', 'accountability'), ('doc', 'an undertaking'), ('key', 'a mandate'),
       ('bank', 'an indemnity'), ('bulb', 'supervision'), ('chart', 'apportionment')],
v_fig_cap='Six words for the question a process document usually leaves out.',
vocab=[
 ('accountability', 'the condition of being the person who must answer for an outcome'),
 ('legal exposure', 'responsibility in law for making good a loss somebody has suffered'),
 ('culpability', 'the degree to which somebody is at fault rather than merely responsible'),
 ('to answer for', 'to be the person required to explain and bear a consequence'),
 ('a duty of care', 'an obligation to take the care a reasonable person would take'),
 ('negligence', 'failure to take that care, where harm follows'),
 ('recourse', 'the remedy available to somebody who has been wronged'),
 ('an indemnity', 'a promise to cover somebody else’s loss if it arises'),
 ('to attribute', 'to assign a result to a particular cause or person'),
 ('a chain of responsibility', 'the ordered list of who answers for what, end to end'),
 ('apportionment', 'the dividing of responsibility between several parties'),
 ('vicarious liability', 'responsibility for what somebody acting for you has done'),
 ('a named officer', 'a specific individual designated to carry a duty'),
 ('to be answerable', 'to be obliged to account for something to somebody'),
 ('supervision', 'the responsibility of watching over work done by others'),
 ('delegation of authority', 'the formal passing of the power to decide'),
 ('ratification', 'the later approval that makes an earlier act binding'),
 ('a mandate', 'the authority to act, with its stated limits'),
 ('an undertaking', 'a promise given formally enough to be relied upon'),
 ('blameworthiness', 'the quality of being the cause in a way that deserves censure')],
v_a=[('The ordered list of who answers for what is a ____________.', 'chain of responsibility'),
     ('Responsibility for what somebody acting for you has done is ____________.', 'vicarious liability'),
     ('The dividing of responsibility between several parties is ____________.', 'apportionment'),
     ('A promise to cover somebody else’s loss is an ____________.', 'indemnity'),
     ('The remedy available to somebody who has been wronged is ____________.', 'recourse'),
     ('The later approval that makes an earlier act binding is ____________.', 'ratification'),
     ('An obligation to take the care a reasonable person would take is a ____________.', 'duty of care'),
     ('The authority to act, with its stated limits, is a ____________.', 'mandate')],
v_b=[('Accountability is the condition of being the person', 'who must answer for an outcome.'),
     ('Culpability is the degree to which somebody is at fault', 'rather than merely responsible.'),
     ('Supervision is the responsibility of watching over', 'work done by others.'),
     ('Delegation of authority is the formal passing', 'of the power to decide.'),
     ('An undertaking is a promise given formally enough', 'to be relied upon.')],

g_title='Grammar: ellipsis, and what must never be left out',
g_rule=['Ellipsis omits what the reader can recover: I have read it; he has not (read it).',
        'It is correct and economical where the omitted element is unambiguous.',
        'The passive is a kind of ellipsis: it was confirmed omits the person entirely.',
        'In any record of responsibility, never omit the actor, even at the cost of elegance.'],
g_fig=('LOOSE',
       ['The schedule was confirmed and released.',
        'Checked, as usual.',
        'It was decided that the figure was right.',
        'Reviewed; no issues found.'],
       'PRECISE',
       ['Priya confirmed the schedule; Fatima released it.',
        'Priya checked it on 9 March.',
        'Priya decided the figure was right.',
        'Priya reviewed it and found no discrepancy.'],
       'four sentences with the actor omitted',
       'four with the actor restored, and a date'),
g_fig_cap='Elegance is a reason to use ellipsis; responsibility is a reason not to.',
g_a=[('I have read the schedule; he ____________.', 'has not'),
     ('She confirmed the figures and Fatima ____________ the filing.', 'released'),
     ('Restore the actor: It was confirmed on Monday. → ____________ confirmed it on Monday.', 'Priya'),
     ('Marta reviewed the clause; Kenji ____________ not.', 'did'),
     ('Restore the actor: The figure was accepted. → ____________ accepted the figure.', 'The reviewer'),
     ('He signed the letter but ____________ read the schedule.', 'did not'),
     ('Some had read it; others ____________.', 'had not'),
     ('Restore the actor: It was decided to release. → ____________ decided to release it.', 'Fatima'),
     ('I compared the schedule with the source; she ____________ the client’s own copy.', 'compared')],
g_b=[('In a record of responsibility, never omit the ( actor / date ).', ['actor', 'date'], 0),
     ('I have read it; he ____.', ['has not read', 'has not', 'not has', 'does not'], 1),
     ('Which sentence names who asserts?', ['It was confirmed.', 'Priya confirmed it.', 'Confirmed, as usual.', 'Confirmation occurred.'], 1),
     ('The passive is a kind of ellipsis because it omits', ['the object', 'the person', 'the date', 'the verb'], 1),
     ('Some had read it; others ____.', ['did not', 'had not', 'have not', 'were not'], 1),
     ('Ellipsis is correct where the omitted element is', ['important', 'unambiguous', 'formal', 'repeated three times'], 1)],

d1=dict(title='Confirmed by whom?',
        fig=(['Every step was completed correctly.', 'I agree.'],
             ['Then who said the figure was right?', 'Nobody did.']),
        cap='Marta and Ines, three days after the filing.',
        lines=[('Marta', 'I have been through the four steps. Each one was performed exactly as the '
                         'process requires.'),
               ('Ines', 'Then where is the error?'),
               ('Marta', 'The error is in the figure. The failure is that nobody in the chain was '
                         'asserting that the figure was right, and all four of them would tell you '
                         'so.'),
               ('Ines', 'The reviewer confirmed it.'),
               ('Marta', 'She confirmed that the schedule matched the source. It did. The source was '
                         'wrong, and nothing in her step asked her to notice that.'),
               ('Ines', 'And Fatima?'),
               ('Marta', 'Assembled a filing from components she had been given as checked. Which '
                         'they were, against the thing they were checked against.'),
               ('Ines', 'And I signed the covering letter.'),
               ('Marta', 'You signed a covering letter without reading the schedule, which is what '
                         'signing a covering letter has always meant here. I am not criticising that; '
                         'I am saying that the document does not say it.'),
               ('Ines', 'So the process has a hole in it that is invisible because every step is '
                        'written in the passive.'),
               ('Marta', 'Confirmed, reviewed, released, signed. Four verbs, no people, and the '
                         'question who decided the figure was right has no answer because nobody was '
                         'ever asked to decide it.'),
               ('Ines', 'Then rewrite it so each step says what the person asserts, in the first '
                        'person, and bring it back to me.'),
               ('Marta', 'I will, and you should know now that one of those sentences says a director '
                         'signs without reading, and several people are going to want it softened.')],
        a=[('What did Marta find about the four steps?', 'each was performed exactly as the process requires'),
           ('What was the reviewer actually confirming?', 'that the schedule matched the source, which it did'),
           ('What was wrong?', 'the source itself'),
           ('What does signing a covering letter mean in the firm?', 'signing without reading the schedule'),
           ('Why is the hole invisible?', 'because every step is written in the passive, naming no person')],
        b=[('Nothing in her step asked her to ____________ that.', 'notice'),
           ('Four verbs, no ____________.', 'people'),
           ('Nobody was ever asked to ____________ it.', 'decide'),
           ('Several people are going to want it ____________.', 'softened')]),
d2=dict(title='The sentence nobody wanted',
        fig=(['I have not read the schedule.', 'You cannot put that in writing.'],
             ['It is what happens.', 'That is why it cannot go in writing.']),
        cap='Marta and Thomas, over the redraft.',
        lines=[('Thomas', 'The third assertion says the director has not read the schedule and relies '
                          'on the client manager. You cannot put that in a process document.'),
               ('Marta', 'It is what happens.'),
               ('Thomas', 'I know it is what happens. That is exactly why it cannot be written down. '
                          'A client’s lawyer reads that sentence and the covering letter is worth '
                          'nothing.'),
               ('Marta', 'A client’s lawyer asks the director under oath whether he read the '
                         'schedule, and he says no, and the document that said he did is worth less '
                         'than nothing.'),
               ('Thomas', 'The document does not say he read it. It says the filing was reviewed.'),
               ('Marta', 'Which a reader takes to mean reviewed by the signatory, because that is '
                         'what a signature on a covering letter normally implies.'),
               ('Thomas', 'Then change what the director does rather than describing what he does '
                          'not.'),
               ('Marta', 'That is a fair answer and I have costed it. Reading every schedule is about '
                         'four hours a week of Ines’s time, and she has none.'),
               ('Thomas', 'So we are choosing between a false impression and an unhelpful admission.'),
               ('Marta', 'We are choosing between a false impression and an accurate description of '
                         'a reliance that is itself perfectly reasonable. A director relying on a '
                         'client manager is not a scandal. Pretending otherwise is.'),
               ('Thomas', 'Put the accurate version in, then, and put the four hours in the paper too, '
                          'so the board is choosing knowingly rather than by default.'),
               ('Marta', 'That is the right amendment and I should have thought of it. The reliance '
                         'is defensible; the reliance nobody has approved is not.')],
        a=[('What does Thomas object to?', 'writing down that the director has not read the schedule'),
           ('What is Marta’s counter-argument?', 'that a document claiming otherwise is worth less than nothing under oath'),
           ('What does a signature on a covering letter normally imply?', 'that the signatory reviewed the filing'),
           ('What would reading every schedule cost?', 'about four hours a week of Ines’s time'),
           ('What amendment does Thomas propose?', 'including the four-hour figure so the board chooses knowingly')],
        b=[('A client’s lawyer asks the director under ____________.', 'oath'),
           ('A false impression or an unhelpful ____________.', 'admission'),
           ('A director relying on a client manager is not a ____________.', 'scandal'),
           ('The reliance nobody has ____________ is not.', 'approved')]),

speak=[('Say it correctly',
        ['Student A: say six sentences using ellipsis to avoid repetition.',
         'Student B: find the one where the omitted element was not recoverable.',
         'Restore the actor in any sentence that describes a decision.']),
       ('Spoken specification: who asserts what',
        ['Choose a document your organisation signs.',
         'Brief aloud each step, naming the role and the assertion in the first person.',
         'Your partner asks which assertion nobody is actually making.']),
       ('The uncomfortable sentence',
        ['In pairs, find a step in your work where somebody relies without checking.',
         'State that reliance accurately in one sentence.',
         'Find the point at which stating it accurately becomes awkward, and say why.'])],

ext_title='A process document that names no actor records a sequence, not a responsibility',
ext_fig=figs.datatable('FOUR STEPS, FOUR BELIEFS',
                       ['Step', 'What the document said', 'What the person believed'],
                       [['draft', 'the schedule is produced', 'I produce from the source'],
                        ['review', 'the schedule is confirmed', 'it matches the source'],
                        ['assemble', 'the filing is compiled', 'the parts are checked'],
                        ['sign', 'the filing is released', 'the manager would have checked'],
                        ['who asserted the figure was right', '—', 'nobody']]),
ext_fig_cap='Four correct steps and one unasserted fact, which is the one that mattered.',
ext=[
 'Where work is produced partly by systems and confirmed partly by people, the question that '
 'decides every subsequent dispute is which named individual asserted which specific fact. '
 'This is not the same as who performed which step, and most process documents answer only '
 'the second question, with the result that an organisation can execute a process perfectly '
 'and discover afterwards that a central fact was never asserted by anybody at all.',
 'The grammatical cause of this is worth stating because it is so easily remedied. Process '
 'documents are written in the passive and the nominal: the schedule is confirmed, review '
 'takes place, the filing is released. Each of those constructions omits the actor, which '
 'reads as neutrality and functions as a gap. A reader cannot tell from such a sentence '
 'whether one person, four people or nobody is asserting the thing, and nor, it turns out, '
 'can the people performing the steps.',
 'The remedy is to write each step as a first-person assertion attached to a role: I have '
 'compared the schedule with the source and the figures agree; I have read the schedule and '
 'it is consistent with what I know of this client. Converting a process into a list of such '
 'sentences takes a morning and reliably exposes one or two facts that everybody assumed '
 'somebody was asserting and nobody was.',
 'Two of those sentences will be uncomfortable. The first is the admission that somebody '
 'signs without reading, which is extremely common, usually defensible, and almost never '
 'written down. The second is the admission that a system’s output is relied upon without '
 'independent verification in a particular class of case. Both are defensible as reliance '
 'and indefensible as concealment, and the difference lies entirely in whether a responsible '
 'body approved the reliance in advance.',
 'The practical test for any such record is to ask what a stranger reading it long afterwards, '
 'in a dispute, would be able to establish. They should be able to say, for every material '
 'fact, which role asserted it, on what basis, and on what date. Where the answer for some '
 'fact is that nobody asserted it, that is the finding, and it is better reached in a '
 'drafting session than in a deposition.'],
dp1=('Accountability in automated processes',
     'Studies of accountability in automated or semi-automated decision processes generally '
     'find diffusion of responsibility, with participants each believing a different party '
     'verified the critical input.',
     'Source: general organisational-accountability literature, 2026.'),
e_a=[('What question decides subsequent disputes?', 'which named individual asserted which specific fact'),
     ('What do most process documents answer instead?', 'who performed which step'),
     ('What is the grammatical cause?', 'the passive and the nominal, which omit the actor'),
     ('What is the remedy?', 'writing each step as a first-person assertion attached to a role'),
     ('What is the practical test?', 'what a stranger in a dispute could establish for every material fact')],
e_b=[('Performing every step correctly guarantees the facts were asserted.', 'F'),
     ('The passive reads as neutrality and functions as a gap.', 'T'),
     ('Converting a process into assertions takes months.', 'F'),
     ('Signing without reading is rare.', 'F'),
     ('Reliance is defensible if approved in advance.', 'T'),
     ('It is better to discover an unasserted fact in a deposition.', 'F')],

w_model=(
 'Purpose: establish, for the 1 filing of 11 March and the 4 process steps behind it, which '
 'role asserted which fact, so that the chain of responsibility can be written down. Scope: '
 'the regulatory filing process; the underlying checking work is out of scope. Inputs: the '
 'process document dated 2 January, the 4 statements taken from those involved, and the '
 'filing itself. Criteria: write each of the 4 steps as 1 first-person assertion naming the '
 'role; list every material fact in the filing and name the role asserting it; identify by '
 'name any fact asserted by nobody; state the cost in hours a week of any additional reading '
 'required. Done: 1 revised process of 4 assertions, 1 table of material facts with a role '
 'against each, and 1 list of unasserted facts. Fallback: where a step is performed in '
 'reliance on another role without verification, write the reliance explicitly and record '
 'that it requires board approval rather than omitting it.'),
w_fig=figs.spec_card('THE CHAIN OF RESPONSIBILITY BRIEF',
                     [('Purpose', 'establish which role asserted which fact in the 11 March filing'),
                      ('Scope', 'the regulatory filing process; checking work excluded'),
                      ('Inputs', 'process document of 2 January, 4 statements, the filing'),
                      ('Criteria', '4 first-person assertions; every material fact given a role'),
                      ('Done', '4 assertions, 1 table of facts, 1 list of unasserted facts'),
                      ('Fallback', 'unverified reliance: write it explicitly and send it for approval')]),
w_fig_cap='The fallback row is where an organisation usually chooses silence instead.',
w_task='Write a chain-of-responsibility specification for a document your organisation signs.',
w_steps=['Say which document and which steps are covered.',
         'Require each step to be written as a first-person assertion with a role.',
         'Require every material fact to be given an asserting role.',
         'Require unasserted facts to be listed by name.',
         'Say what happens where somebody relies without verifying.'],
w_bank=['Establish, for … and the … steps behind it, which role asserted … , so that …',
        'Cover … ; … is out of scope.',
        'Work from … dated … , the … statements … , and …',
        'Write each of the … steps as 1 first-person assertion naming … ; list every material fact and name …',
        'Where a step is performed in reliance on another role without verification, … rather than omitting it.'],
w_check=['Is each step a first-person assertion with a named role?',
         'Must every material fact carry an asserting role?',
         'Are unasserted facts to be listed rather than resolved?',
         'Is unverified reliance written down rather than omitted?'],

t_title='Judgement under responsibility: who answers for it',
t_fig=figs.split('THE SAME PROCESS, TWO GRAMMARS',
                 'Passive — a sequence',
                 ['the schedule is produced',
                  'the schedule is confirmed',
                  'the filing is compiled',
                  'the filing is released'],
                 'First person — a responsibility',
                 ['I produce it from the source',
                  'I confirm it matches the source',
                  'I compile from checked parts',
                  'I have not read the schedule']),
t_fig_cap='Four steps either way. Only the right-hand column can be asked a question.',
t_body=[
 'Rewrite your critical processes in the first person, naming the role that answers for each '
 'step, and do '
 'it before anything goes wrong rather than afterwards. The sentence I have compared the '
 'schedule with the source and the figures agree can be interrogated; the schedule is '
 'confirmed cannot, because there is nobody in it. The exercise takes a morning and its '
 'output is a document that a stranger could use in a dispute.',
 'Then list the material facts separately from the steps, and put a role against each one. '
 'This is the part that produces the finding, because performing every step correctly is '
 'entirely compatible with some central fact having been asserted by nobody, each participant '
 'having reasonably assumed that a different participant was asserting it. Any fact with no '
 'role against it is a hole, and holes are cheap to fix in a drafting session.',
 'Finally, write down the reliances, including the awkward ones. Somebody signs without '
 'reading; some class of system output is accepted without independent check. Both of these '
 'are usually reasonable and both become indefensible the moment they are concealed, because '
 'the question in any dispute is not whether you relied but whether the reliance was known '
 'and approved. An approved reliance is a policy. An unrecorded one is, in the only sense '
 'that matters later, a misrepresentation.'],
t_say=[('Name the asserter: ', 'Which role asserts that this figure is right?'),
       ('Find the hole: ', 'Which material fact has no role against it?'),
       ('State the reliance: ', 'I have not read it and rely on the client manager.')],
t_bound=('A chain of responsibility establishes who asserted what. It does not make the '
         'assertions true, it cannot prevent an error in a source everybody checked against, '
         'and it tells you nothing about whether the person asserting a fact had the time or '
         'knowledge to assert it properly. It makes failures attributable, not less frequent.'),
t_a=[('Which role ____________ that this figure is right?', 'asserts'),
     ('Which material fact has no ____________ against it?', 'role'),
     ('I have not read it and ____________ on the client manager.', 'rely'),
     ('The schedule is confirmed cannot be interrogated, because there is ____________ in it.', 'nobody'),
     ('Any fact with no role against it is a ____________.', 'hole'),
     ('An approved reliance is a ____________.', 'policy')],
t_b_rubric='Rewrite each passive step as a first-person assertion with a role.',
t_b=[('The schedule is confirmed.', 'reviewer: I have compared the schedule with the source and the figures agree'),
     ('The filing is reviewed before release.', 'client manager: I have read the schedule and it is consistent with this client'),
     ('The covering letter is signed.', 'director: I have not read the schedule and rely on the client manager'),
     ('Discrepancies are escalated as appropriate.', 'reviewer: I refer any discrepancy above 20,000 euros to the client manager')],

case=dict(
 title='Decision Clinic · The sentence the board would not approve',
 brief=[
  'Marta’s rewritten process contains the assertion: director: I have not read the schedule '
  'and rely on the client manager. The board was asked to approve it, together with the '
  'alternative of four hours a week of director reading.',
  'The board approved neither. It instructed that the assertion be reworded to the director '
  'reviews the filing on the basis of the client manager’s confirmation, which Marta says '
  'means the same thing to a lawyer and the opposite thing to a reader.',
  'Nine months later a different client’s filing contained an error and their counsel asked, '
  'in correspondence, what the director had personally reviewed. Arclight answered accurately '
  'and the answer and the process document did not sit comfortably together.'],
 exhibit=figs.datatable('THREE VERSIONS OF ONE STEP',
                        ['Version', 'Accurate?', 'How a reader takes it'],
                        [['the filing is released', 'silent', 'somebody checked everything'],
                         ['I have not read the schedule', 'yes', 'the director did not read it'],
                         ['reviews on the basis of confirmation', 'arguably', 'the director reviewed it'],
                         ['director reads every schedule', 'would be', 'costs 4 hours a week'],
                         ['board’s choice', '—', 'the third version']]),
 exhibit_cap='The chosen version is the only one whose accuracy depends on how it is read.',
 exhibit_note='No complaint has been made about the wording itself, and the second client’s '
              'matter was resolved without reference to it.',
 voices=[('Marta Olsen', 'risk and liability',
          'Reviews on the basis of confirmation is a sentence constructed so that two readers '
          'take it two ways. That is not a compromise between the options, it is a third '
          'option with the disadvantages of both.'),
         ('Ines Carvalho', 'managing director',
          'I voted for the board’s wording and I would like to explain why rather than '
          'defend it. The accurate sentence invites a question no client has ever asked, and '
          'answering it honestly in correspondence turned out to be perfectly survivable. The '
          'wording bought us nothing and I supported it.'),
         ('Thomas Reed', 'service delivery',
          'The accurate version would have been quoted back at us in every tender by every '
          'competitor who read it. That is not a legal cost, it is a commercial one, and '
          'nobody in this room has priced it.')],
 steps=[('Find it', 'What are the three candidate wordings?'),
        ('Compare it', 'Which is accurate, and which depends on the reader?'),
        ('Infer it', 'Why does Marta call the chosen version a third option rather than a compromise?'),
        ('Weigh it', 'Legal exposure against a commercial cost nobody has priced.'),
        ('Decide', 'What wording should the process carry?')],
 analysis=[('Find it. What did the board instruct?', 'the wording "reviews the filing on the basis of the client manager’s confirmation"'),
           ('Compare it. Which version is unambiguously accurate?', 'the one stating the director has not read the schedule'),
           ('Infer it. What is Marta’s objection?', 'that a sentence read two ways has the disadvantages of both options'),
           ('Weigh it. What is Thomas’s unpriced cost?', 'competitors quoting the accurate sentence in tenders'),
           ('Decide. What would you carry?', 'answers vary; the accurate version with board approval recorded is the defensible answer')],
 decision='Write the process step and the board minute that accompanies it.',
 decision_steps=['Say what the step asserts, in the first person.',
                 'Say what the board has approved, and on what date.',
                 'Say what is said to a client who asks.',
                 'Say what would cause the step to change.'],
 bank=['The step reads: …',
       'The board approved … on …',
       'A client who asks is told …',
       'The step would change if …',
       'This is reviewed every …'],
 outcome='Arclight restored the accurate wording and recorded the board’s approval of the '
         'reliance in the same minute, with the four-hour alternative and its cost. In the '
         'eighteen months since, the sentence has been raised once by a prospective client, '
         'who said it was the first process document they had read that admitted anything, and '
         'the tender was won. Thomas notes that one tender is not evidence about the '
         'commercial cost he was worried about, and that he remains unable to price it, which '
         'is why he lost the argument rather than why he was wrong.',
 outcome_q=[('What happened when a prospective client raised the sentence?', 'they praised it for admitting something and the tender was won'),
            ('Why does Thomas not accept that as settling the matter?', 'because one tender is not evidence about the cost he could not price')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Find out what went wrong',
 task=['This is the brief Ines issued the day after the filing error, intending to establish '
       'how a figure wrong by a factor of ten had been released.',
       'It produced a reconstruction of the sequence, which everybody already knew, and did '
       'not produce the finding, which nobody did.'],
 draft=['Find out how this got out.',
        'Talk to everybody who touched it.',
        'Establish whether the process was followed.',
        'Identify any gaps.',
        'Do not turn it into a witch hunt.',
        'I need something before the client calls.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions that produce a timeline and cannot produce an attribution.',
 asked=['Which role asserted which material fact',
        'The facts asserted by nobody',
        'The cost of the alternative'],
 back=['A timeline of 4 steps',
       '"Process followed throughout"',
       'No attribution, no gap identified'],
 gap='"How this got out" asks for a sequence rather than an attribution, "whether the process '
     'was followed" is answerable yes while the failure persists, "any gaps" names no kind of '
     'gap, and "before the client calls" fixes a deadline shorter than the work.',
 back_cap='A timeline everybody could already recite, and the question of who asserted the figure unasked.',
 back_note='The report concluded that the process had been followed, which was true, and the '
           'board read that as meaning no change was needed.',
 diagnosis=[('[1] "how this got out" — the sequence, or who asserted what?', 'ambiguous referent'),
            ('[2] "everybody who touched it" — including the signatory?', 'ambiguous referent'),
            ('[3] "whether the process was followed" — and if following it permits this?', 'missing condition'),
            ('[4] "identify any gaps" — gaps in what, tested how?', 'undefined done'),
            ('[5] "not a witch hunt" — and if the finding names a role?', 'missing condition'),
            ('[6] "before the client calls" — and if the work takes longer?', 'undefined done')],
 rewrite='Rewrite the brief so that it asks which role asserted which fact, and requires '
         'unasserted facts to be listed.',
 scaffold=['What must be established, and what it will be used to write',
           'Which process is covered and what is out of scope',
           'The documents and statements it is built from',
           'What each step must be rewritten as, and what every material fact must carry',
           'What comes back, in how many parts, and by when',
           'What to do where a step relies on another role without verifying'],
 bank=['Establish, for … and the … steps behind it, which role asserted … , so that …',
       'Cover … ; … is out of scope.',
       'Work from … dated … , the … statements … , and …',
       'Write each step as 1 first-person assertion naming … ; list every material fact and name the role asserting it; identify any fact asserted by …',
       'Return … assertions, … table and … list, by …',
       'Where a step is performed in reliance without verification, … rather than omitting it.'],
 check=['Does the brief ask who asserted what, rather than what happened?',
        'Must unasserted facts be listed explicitly?',
        'Is the cost of the alternative required?',
        'Is unverified reliance to be written down?'],
 model=['Establish, for the 1 filing of 11 March and the 4 process steps behind it, which role asserted which fact, so that the chain of responsibility can be written down',
        'The regulatory filing process; the underlying checking work is out of scope',
        'The process document dated 2 January, the 4 statements taken from those involved, and the filing itself',
        'Write each of the 4 steps as 1 first-person assertion naming the role; list every material fact in the filing and name the role asserting it; identify by name any fact asserted by nobody; state the cost in hours a week of any additional reading required',
        '1 revised process of 4 assertions, 1 table of material facts with a role against each, and 1 list of unasserted facts, by 25 March',
        'Where a step is performed in reliance on another role without verification, write the reliance explicitly and record that it requires board approval rather than omitting it'],
 cost='1 report concluding the process had been followed, 2 weeks in which no change was '
      'made, and the same gap still open when a second client’s filing was prepared.'),

rev_fig=figs.split('ELLIPSIS AND THE ACTOR',
                   'Correct ellipsis — recoverable',
                   ['I have read it; he has not.',
                    'Some had; others had not.',
                    'She compared; he did not.',
                    'I will if you will.'],
                   'Omitted actor — not recoverable',
                   ['The schedule was confirmed.',
                    'Checked, as usual.',
                    'It was decided to release it.',
                    'Reviewed; no issues found.']),
rev_fig_cap='The left column omits what the reader can restore. The right column omits the person.',
rev=dict(
 read=[('What decides subsequent disputes?', ['who performed each step', 'which role asserted which fact', 'the date', 'the client'], 1),
       ('The passive functions, in a process document, as', ['neutrality', 'a gap', 'emphasis', 'formality'], 1),
       ('An unrecorded reliance is, later, effectively', ['a policy', 'a misrepresentation', 'a courtesy', 'an indemnity'], 1),
       ('In the Clinic, what did Arclight finally carry?', ['the board’s wording', 'the accurate wording with approval minuted', 'nothing', 'four hours of reading'], 1)],
 listen_text='Rewrite your critical processes in the first person, naming a role for every '
             'step. Then list the material facts separately and put a role against each one, '
             'because performing every step correctly is compatible with some central fact '
             'having been asserted by nobody. Finally, write down the reliances, including the '
             'awkward ones, because an approved reliance is a policy and an unrecorded one is '
             'not.',
 listen=[('Naming a ____________ for every step.', 'role'),
         ('Put a role against each material ____________.', 'fact'),
         ('Some central fact having been asserted by ____________.', 'nobody'),
         ('An approved reliance is a ____________.', 'policy')],
 speak=['Take a document your organisation signs and say what each signatory asserts.',
        'Name the fact in it that nobody is actually asserting.'],
 write='Rewrite one passive process step as a first-person assertion with a role.',
 vocab=[('The ordered list of who answers for what is a ____________.', 'chain of responsibility'),
        ('Responsibility for what somebody acting for you has done is ____________.', 'vicarious liability'),
        ('A promise to cover somebody else’s loss is an ____________.', 'indemnity'),
        ('The remedy available to somebody wronged is ____________.', 'recourse'),
        ('The authority to act, with its limits, is a ____________.', 'mandate')],
 gram=[('I have read the schedule; he ____________.', 'has not'),
       ('Marta reviewed the clause; Kenji ____________ not.', 'did'),
       ('Some had read it; others ____________.', 'had not'),
       ('Restore the actor: It was confirmed on Monday. → ____________ confirmed it on Monday.', 'Priya'),
       ('He signed the letter but ____________ read the schedule.', 'did not')]),

found=['Take one process document and count how many steps name a person.',
       'List the material facts in something you sign and name who asserts each.',
       'Find the fact nobody is asserting.',
       'Write down one reliance your organisation has never recorded.'],
end_line='Four verbs, no people, and the question has no answer.',
end_next='Next: Putting It First',
)
