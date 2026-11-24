# -*- coding: utf-8 -*-
import figs

U = dict(
num=6, title='Decided Not To, On Purpose',
gram='understatement and degree in assessment',
ai='what the Ministry decides not to automate, on purpose',
strap='CEFR C1 · Grammar: understatement in assessment · AI: decided not to, on purpose',
cando=['use understatement deliberately in a formal assessment',
       'grade a judgement with not altogether, less than and some way short of',
       'state a deliberate exclusion with its reason and its review date',
       'distinguish a refusal of principle from a refusal of convenience',
       'write an exclusion register that survives a change of personnel'],
hero=('FIVE THINGS THE MINISTRY WILL NOT DO',
      ['Each of them could be done tomorrow, and done well.',
       'The register gives the reason for each, and a date to look again.'],
      [(730, 'teal', 'long'), (1390, 'orange', 'short'),
       (2050, 'blue', 'long'), (2690, 'purple', 'short')]),
hero_cap='Information Security and Records, with a one-page register pinned to the wall.',

warm=['What could your organisation do faster that it chooses not to?',
      'Is the reason written down anywhere?',
      'Who will defend it when the people who decided it have gone?'],
read=[
 'The Ministry maintains a register of five things it has decided not to automate. Each entry '
 'names the task, the reason, the officer who decided, the date, and the date on which the '
 'decision is to be looked at again.',
 'The five are the letter of condolence, the acknowledgement of a Ministry error, the final '
 'decision on a visa refusal, the red line column of a round brief, and the assessment '
 'paragraph of a reporting telegram. All five could be done tomorrow, and three of them would '
 'be done well.',
 'The reasons differ in kind, which is the point of writing them down. Two are about what the '
 'document is: a condolence is an act and not a communication. Two are about where '
 'accountability must sit: a refusal and a red line are exercises of authority and somebody '
 'must own them. One is about calibration: an ambassador’s assessment paragraph is the '
 'Ministry’s only check on its own reading of a room, and a drafted assessment would agree '
 'with the Ministry.',
 'Karim Dalati is less than confident about the register’s durability, and says so in the '
 'document. Four of the five entries were written by officers who will by then have moved to '
 'other posts, and an exclusion whose reason is not understood is defended as a habit until somebody '
 'efficient removes it.',
 'The review dates are his answer and he describes them as not altogether satisfactory. Each '
 'entry falls away unless it is renewed in writing with a reason, which means the Ministry '
 'loses an exclusion nobody troubles to defend. He says that is the correct failure, because an '
 'exclusion nobody will defend in writing is an exclusion nobody believes in.'],
c_a=[('What does each register entry name?', 'the task, the reason, the officer, the date and the review date'),
     ('What are the five?', 'the condolence letter, the error acknowledgement, the final visa refusal, the red line column and the assessment paragraph'),
     ('How many could be done well tomorrow?', 'three of the five'),
     ('What are the three kinds of reason?', 'what the document is, where accountability must sit, and calibration'),
     ('What is Karim’s doubt?', 'that four of five entries were written by officers who will have moved within three years'),
     ('What happens to an entry that is not renewed?', 'it falls away')],
c_b=[('All five tasks could be automated.', 'T'),
     ('All five would be done well.', 'F'),
     ('The reasons are of the same kind.', 'F'),
     ('Karim is confident about durability.', 'F'),
     ('An entry survives without renewal.', 'F'),
     ('Karim calls the review dates fully satisfactory.', 'F')],
c_c=[('The date on which the decision is to be looked at ____________.', 'again'),
     ('A condolence is an act and not a ____________.', 'communication'),
     ('Exercises of authority and somebody must ____________ them.', 'own'),
     ('The Ministry’s only check on its own reading of a ____________.', 'room'),
     ('Defended as a ____________ until somebody efficient removes it.', 'habit'),
     ('An exclusion nobody will defend in writing is an exclusion nobody ____________ in.', 'believes')],
c_d=[('The register records exclusions with ( reasons and review dates / costs ).', ['reasons and review dates', 'costs'], 0),
     ('How many entries are in the register?', ['three', 'five', 'four', 'two'], 1),
     ('What is the calibration reason about?', ['the condolence', 'the assessment paragraph', 'the visa refusal', 'the red line'], 1),
     ('How many entries were written by officers who will move?', ['one', 'four', 'all five', 'none'], 1),
     ('What does Karim call the correct failure?', ['renewal', 'losing an undefended exclusion', 'automating everything', 'a habit'], 1)],
c_e=('Match each understatement to what it conveys.',
     [('less than confident', 'doubtful'),
      ('not altogether satisfactory', 'unsatisfactory in part'),
      ('some way short of adequate', 'clearly inadequate'),
      ('not without difficulty', 'difficult'),
      ('other than ideal', 'poor'),
      ('by no means certain', 'uncertain')],
     ['doubtful', 'unsatisfactory in part', 'clearly inadequate', 'difficult', 'poor',
      'uncertain']),

v_fig_title='A DELIBERATE EXCLUSION',
v_fig=[('doc', 'an exclusion register'), ('key', 'a stated reason for exclusion'), ('clock', 'a sunset clause'),
       ('shield', 'a boundary maintained'), ('bulb', 'a drift of scope'), ('pin', 'a documented judgement')],
v_fig_cap='Six words for a decision not to do something, kept alive on purpose.',
vocab=[
 ('a deliberate exclusion', 'a task kept out of a process by decision rather than by accident'),
 ('a reserved decision', 'a decision kept for a person by rule'),
 ('a human-only task', 'a task a body has decided only a person may perform'),
 ('a standing exception', 'an exception that applies until it is withdrawn'),
 ('a conscientious refusal', 'a refusal on grounds of principle rather than cost'),
 ('an efficiency forgone', 'a saving given up on purpose'),
 ('a cost accepted on purpose', 'a cost a body has chosen to bear'),
 ('a principle stated in advance', 'a ground written down before it is tested'),
 ('a reviewable exclusion', 'an exclusion that must be re-examined at a stated time'),
 ('a sunset clause', 'a provision ending a rule unless it is renewed'),
 ('an exclusion register', 'the list of tasks a body has decided not to automate'),
 ('a stated reason for exclusion', 'the written ground on which a task is kept out'),
 ('a slippery slope', 'the argument that one step makes a further step inevitable'),
 ('a creeping extension', 'the gradual widening of a practice beyond its purpose'),
 ('an original purpose', 'the purpose for which something was first established'),
 ('a drift of scope', 'the movement of a practice away from what it was for'),
 ('a boundary maintained', 'a limit that continues to be observed'),
 ('a periodic re-examination', 'a review at stated intervals'),
 ('a documented judgement', 'a judgement recorded with its reasons'),
 ('an unfashionable position', 'a position held against the prevailing view')],
v_a=[('The list of tasks a body has decided not to automate is an ____________.', 'exclusion register'),
     ('A provision ending a rule unless it is renewed is a ____________.', 'sunset clause'),
     ('A refusal on grounds of principle rather than cost is a ____________.', 'conscientious refusal'),
     ('The gradual widening of a practice beyond its purpose is a ____________.', 'creeping extension'),
     ('A saving given up on purpose is an ____________.', 'efficiency forgone'),
     ('A judgement recorded with its reasons is a ____________.', 'documented judgement'),
     ('An exclusion that must be re-examined at a stated time is a ____________.', 'reviewable exclusion'),
     ('A task a body has decided only a person may perform is a ____________.', 'human-only task')],
v_b=[('A deliberate exclusion is a task kept out of a process', 'by decision rather than by accident.'),
     ('A principle stated in advance is a ground written down', 'before it is tested.'),
     ('A slippery slope is the argument that one step', 'makes a further step inevitable.'),
     ('A drift of scope is the movement of a practice', 'away from what it was for.'),
     ('An unfashionable position is a position held', 'against the prevailing view.')],

g_title='Grammar: understatement and degree in assessment',
g_rule=['Understatement is a formal device, not a weakening: less than confident means '
        'doubtful.',
        'Not altogether, not without and by no means grade a negative judgement precisely.',
        'Some way short of and other than set a distance from a standard.',
        'Understatement is permitted in an assessment and never in a warning: say the warning '
        'plainly.'],
g_fig=('LOOSE',
       ['The register is probably not going to work very well.',
        'I have doubts about whether this will last.',
        'The reasons are a bit thin in places.',
        'This may be a problem later.'],
       'PRECISE',
       ['The register’s durability is by no means certain.',
        'I am less than confident that 4 of the 5 entries will be defended in 2030.',
        'Two of the reasons are some way short of the standard the others meet.',
        'Unless an entry is renewed in writing, it will be removed: this is a warning and not '
        'an assessment.'],
       'four hedges that convey only reluctance to commit',
       'three graded assessments and one plain warning'),
g_fig_cap='Understatement in an assessment is precision; understatement in a warning is '
          'negligence.',
g_a=[('The register’s durability is by no ____________ certain.', 'means'),
     ('I am ____________ than confident that the entries will be defended.', 'less'),
     ('Two of the reasons are some way ____________ of the standard the others meet.', 'short'),
     ('The arrangement is not ____________ satisfactory.', 'altogether'),
     ('The outcome was other ____________ ideal.', 'than'),
     ('This was not ____________ difficulty.', 'without'),
     ('I would not go so ____________ as to call it a principle.', 'far'),
     ('The reasoning is ____________ from complete.', 'far'),
     ('It is ____________ unknown whether the practice will survive.', 'not')],
g_b=[('Less than confident means ( confident / doubtful ).', ['confident', 'doubtful'], 1),
     ('By no means certain means', ['certain', 'uncertain', 'probable', 'proved'], 1),
     ('Some way short of adequate means', ['adequate', 'clearly inadequate', 'nearly adequate', 'excellent'], 1),
     ('Where is understatement not permitted?', ['in an assessment', 'in a warning', 'in a minute', 'in a register'], 1),
     ('Not without difficulty means', ['easy', 'difficult', 'impossible', 'routine'], 1),
     ('Understatement in a warning is', ['precision', 'negligence', 'courtesy', 'formality'], 1)],

d1=dict(title='Three of the five would be done well',
        fig=(['All five could be automated.', 'And three would be done well.'],
             ['Then why not?', 'Because quality is not the question.']),
        cap='Karim Dalati and Dr Hana Mourad, on the register.',
        lines=[('Hana', 'Your register lists five tasks the Ministry will not automate. Could '
                        'they be?'),
               ('Karim', 'All five, tomorrow. Three of them would be done well, and I say so in '
                         'the document, because a register that pretends the excluded tasks are '
                         'beyond a system will be dismantled by the first person who tries one.'),
               ('Hana', 'So the reasons are not about quality.'),
               ('Karim', 'Two are about what the document is. A condolence is an act; an '
                         'acknowledgement of our own error has to be made by somebody capable of '
                         'being embarrassed.'),
               ('Hana', 'And the other three?'),
               ('Karim', 'Two are about authority. A visa refusal and a red line are exercises '
                         'of power over somebody, and a person has to own them in a way that '
                         'can be examined. The fifth is different and it is the one I find '
                         'hardest to defend in a meeting.'),
               ('Hana', 'The assessment paragraph.'),
               ('Karim', 'An ambassador’s assessment is the Ministry’s only independent check '
                         'on its own reading of a room. A drafted assessment would be built from '
                         'the Ministry’s own reporting, and it would therefore agree with the '
                         'Ministry, and we would lose the one paragraph in the traffic capable '
                         'of telling us we are wrong.'),
               ('Hana', 'That is a stronger argument than the first two.'),
               ('Karim', 'It is the strongest in the register and it is the one that will go '
                         'first, because it is the only one whose cost is invisible. Nobody '
                         'notices the absence of a disagreement.')],
        a=[('How many of the five could be automated?', 'all five, tomorrow'),
           ('Why does Karim say three would be done well?', 'because a register pretending otherwise will be dismantled by the first person who tries'),
           ('What are the two document reasons?', 'a condolence is an act; an error acknowledgement needs somebody capable of embarrassment'),
           ('What are the two authority reasons?', 'a visa refusal and a red line are exercises of power that a person must own'),
           ('Why is the assessment paragraph the strongest and most fragile?', 'because a drafted assessment would agree with the Ministry and nobody notices a missing disagreement')],
        b=[('Capable of being ____________.', 'embarrassed'),
           ('Exercises of ____________ over somebody.', 'power'),
           ('The one paragraph in the traffic capable of telling us we are ____________.', 'wrong'),
           ('Nobody notices the absence of a ____________.', 'disagreement')]),
d2=dict(title='Unless it is renewed',
        fig=(['Each entry falls away.', 'Unless somebody renews it.'],
             ['And if nobody does?', 'Then we lose it, which is the correct failure.']),
        cap='Karim and Samir Haddad.',
        lines=[('Samir', 'Each entry in your register lapses unless renewed in writing with a '
                         'reason. Why build in the loss?'),
               ('Karim', 'Because the alternative is a register that accumulates. In twenty '
                         'years it will have thirty entries, four of which anybody can explain, '
                         'and the other twenty-six will be defended as the way the Ministry does '
                         'things.'),
               ('Samir', 'And a habit defended as a principle is eventually removed by '
                         'somebody efficient.'),
               ('Karim', 'In one afternoon, with a good argument, and the four real ones go with '
                         'the twenty-six.'),
               ('Samir', 'Your mechanism nevertheless loses an exclusion whenever a section is '
                         'busy in the month it falls due.'),
               ('Karim', 'That is the objection and it is not answerable. A good exclusion can '
                         'lapse because the officer who understood it was on leave, and the '
                         'Ministry will not notice for two years.'),
               ('Samir', 'Could the renewal be made easier?'),
               ('Karim', 'It is three sentences. Making it easier makes it automatic, and an '
                         'automatic renewal is the accumulating register with extra steps.'),
               ('Samir', 'So you are choosing which failure you prefer.'),
               ('Karim', 'I am choosing to lose good exclusions occasionally rather than to '
                         'keep bad ones permanently, and I am not confident it is the right '
                         'choice. I would want it looked at by whoever is in this post in '
                         'five years, and I have written that into the register itself, which '
                         'is the only honest thing I can do about my own uncertainty.')],
        a=[('Why do entries lapse?', 'because a register that accumulates ends with entries nobody can explain'),
           ('What happens to a habit defended as a principle?', 'it is removed in one afternoon, and the real exclusions go with it'),
           ('What is the objection?', 'that a good exclusion can lapse because an officer was on leave'),
           ('Why not make renewal easier?', 'because easier renewal becomes automatic, which is the accumulating register again'),
           ('How is it left?', 'unresolved; Karim records his uncertainty in the register itself')],
        b=[('A register that ____________.', 'accumulates'),
           ('Defended as the way the Ministry does ____________.', 'things'),
           ('An automatic renewal is the accumulating register with extra ____________.', 'steps'),
           ('Looked at by whoever is in this post in five ____________.', 'years')],
        unresolved=True),

speak=[('Grade the judgement',
        ['Student A: make six assessments about your own work.',
         'Student B: restate each with an understatement that is precise.',
         'Say which ones should have been plain warnings instead.']),
       ('Your own register',
        ['Name three tasks your office should not automate.',
         'Give the reason for each, and say which kind it is.',
         'Say who would defend it in five years.']),
       ('The invisible cost',
        ['Name something whose absence nobody would notice.',
         'Say how you would know if it had gone.',
         'Say what you would have to count.'])],

ext_title='An exclusion needs a stated reason and a review date, because a habit cannot be defended and is removed in an afternoon',
ext_fig=figs.datatable('THE REGISTER',
                       ['Task', 'Kind of reason', 'Would it be done well?'],
                       [['the letter of condolence', 'what the document is', 'yes'],
                        ['acknowledging a Ministry error', 'what the document is', 'yes'],
                        ['the final visa refusal', 'where authority sits', 'yes'],
                        ['the red line column', 'where authority sits', 'no'],
                        ['the assessment paragraph', 'calibration', 'no'],
                        ['every other task', '—', 'not excluded']]),
ext_fig_cap='Three of the five would be done well, which is why the reasons cannot be about '
            'quality.',
ext=[
 'A ministry that has adopted this capability across its work arrives at a short list of '
 'things it has decided not to do with it, and the list is worth writing down for a reason '
 'that has nothing to do with sentiment. An exclusion that exists as a practice is defended by '
 'the people who remember why, and those people leave.',
 'The first discipline is to be honest about capability. Of five excluded tasks, three would '
 'be performed well tomorrow. A register that implies otherwise invites the first ambitious '
 'officer to demonstrate the opposite, and when they do the whole register goes, including the '
 'entries that matter. State what could be done and say that the ministry has decided not to.',
 'The second is to give each entry a reason of a stated kind, because the kinds differ and '
 'they are differently durable. Some exclusions are about what a document is: a condolence is '
 'an act rather than a communication, and an acknowledgement of error has to come from '
 'somebody capable of being embarrassed. Some are about authority: a refusal and a limit are '
 'exercises of power, and a person must own them in a way that can be examined. And some are '
 'about calibration, which is the hardest to hold: an ambassador’s assessment paragraph is '
 'often a ministry’s only independent check on its own reading of events, and a drafted '
 'assessment built from the ministry’s own reporting will agree with the ministry.',
 'That third kind deserves particular attention because its cost is invisible. Nobody notices '
 'the absence of a disagreement. A ministry that loses the one paragraph in its traffic capable '
 'of contradicting it will not record a loss, will not receive a complaint, and will discover '
 'the consequence years later in a decision taken on an unchallenged reading.',
 'The third discipline is a review date, and it is not altogether satisfactory. An entry that '
 'lapses unless renewed in writing prevents a register from accumulating entries nobody can '
 'explain, and it loses a good exclusion whenever the officer who understood it is away in the '
 'month it falls due. Making renewal easier makes it automatic, and an automatic renewal is '
 'the accumulating register with extra steps. The choice is between losing good exclusions '
 'occasionally and keeping bad ones permanently, and a ministry that cannot say which it '
 'prefers has chosen the second.'],
dp1=('Deliberate exclusions',
     'Several foreign ministries maintained registers of tasks excluded from automation in '
     '2025, recording a reason and a review date for each, and stating explicitly where the '
     'excluded task could have been performed competently.',
     'Source: reported practice in diplomatic information governance, 2025–2026.'),
e_a=[('Why write the list down?', 'because an exclusion existing as a practice is defended only by people who leave'),
     ('What is the first discipline?', 'honesty about capability: saying what could be done well'),
     ('What are the three kinds of reason?', 'what the document is, where authority sits, and calibration'),
     ('Why is the calibration reason hardest to hold?', 'because its cost is invisible: nobody notices a missing disagreement'),
     ('What is the dilemma of review dates?', 'losing good exclusions occasionally against keeping bad ones permanently')],
e_b=[('All excluded tasks would be done badly.', 'F'),
     ('A register implying incapability is safer.', 'F'),
     ('The kinds of reason are equally durable.', 'F'),
     ('A missing disagreement produces a complaint.', 'F'),
     ('Automatic renewal solves the problem.', 'F'),
     ('A ministry that cannot choose has chosen to keep bad exclusions.', 'T')],

w_model=(
 'Purpose: record each task the Ministry has decided not to automate, with its reason, so that '
 'the decision can be defended by an officer who was not party to it. Scope: tasks currently '
 'excluded by decision; tasks not yet attempted and tasks excluded for want of capability are '
 'out of scope and are not to be entered. Inputs: the decisions taken, the officers who took '
 'them, and the Ministry’s own assessment of what could be done. Criteria: for each entry name '
 'the task, state whether it could be performed competently today, give the reason and say '
 'which kind of reason it is, name the deciding officer and the date, and give a review date '
 'not more than 3 years ahead; enter no task whose reason is that the work would be done badly. '
 'Done: 1 register of no more than 1 page, each entry carrying 6 elements, published to all '
 'sections. Fallback: where an entry is not renewed in writing with a reason by its review '
 'date, it is removed and the removal is recorded.'),
w_fig=figs.spec_card('THE TASKING FOR AN EXCLUSION REGISTER',
                     [('Purpose', 'defensible by an officer who was not party to the decision'),
                      ('Scope', 'tasks excluded by decision; incapability excluded'),
                      ('Inputs', 'the decisions, the officers, the capability assessment'),
                      ('Criteria', '6 elements per entry; a kind of reason; a 3-year review'),
                      ('Done', '1 page, published to all sections'),
                      ('Fallback', 'not renewed: removed, and the removal recorded')]),
w_fig_cap='Enter no task whose reason is that the work would be done badly: that reason expires on its own.',
w_task='Write an exclusion register tasking for your own organisation.',
w_steps=['Say who must be able to defend the decision.',
         'Exclude incapability as a ground.',
         'Require the kind of reason to be stated.',
         'Require a named officer and a review date.',
         'Say what happens where an entry is not renewed.'],
w_bank=['Record … with its reason, so that … who was not party to it.',
        'Cover … ; … are out of scope and are not to be …',
        'Work from … , … and …',
        'For each entry name … , state whether … , give … and say which … , name … , and give … ; enter no task whose reason is …',
        'Where an entry is not renewed … , it is … and …'],
w_check=['Is incapability excluded as a ground?',
         'Must each entry state whether the task could be done competently?',
         'Is the kind of reason required?',
         'Is lapse automatic and recorded?'],

t_title='What the Ministry decides not to automate',
t_fig=figs.split('AN ENTRY IN THE REGISTER',
                 'Must carry',
                 ['the task, named',
                  'whether it could be done well today',
                  'the reason, and its kind',
                  'an officer, a date and a review date'],
                 'Must not carry',
                 ['a claim that the work cannot be done',
                  'a reason of taste',
                  'an exemption with no date',
                  'anything nobody will defend in writing']),
t_fig_cap='The second item in the left column is the one that keeps the register alive.',
t_body=[
 'A ministry that uses this capability properly ends with a short list of things it has '
 'decided not to use it for, and the list has to be written down because an unwritten '
 'exclusion is defended only by people who remember, and they leave.',
 'Be honest about capability first. Three of five excluded tasks would be done well tomorrow, '
 'and a register implying otherwise is dismantled by the first officer who demonstrates it, '
 'taking the entries that matter with it. Then give each entry a reason of a stated kind, '
 'because the kinds are differently durable. What the document is: a condolence is an act. '
 'Where authority sits: a refusal and a limit are exercises of power that a person must own. '
 'And calibration, which is the strongest and the most fragile: an ambassador’s assessment is '
 'often the Ministry’s only independent check on its own reading, and a drafted assessment '
 'would be built from the Ministry’s own reporting and would therefore agree with it.',
 'Attend to that last one, because its cost is invisible: nobody notices the absence of a '
 'disagreement. And give every entry a review date, accepting that the mechanism is not '
 'altogether satisfactory. A lapsing entry prevents a register of thirty exclusions nobody can '
 'explain and loses a good one whenever its author is on leave. Easier renewal becomes '
 'automatic renewal, which is the accumulating register again. Choose, and write down which '
 'failure you chose.'],
t_say=[('Admit the capability: ', 'This could be done competently today; the Ministry has decided not to.'),
       ('Name the kind: ', 'Reason: calibration. The Ministry would lose its only check on its own reading.'),
       ('Set the lapse: ', 'This entry is removed on 1 June 2029 unless renewed in writing.')],
t_bound=('A register records decisions and cannot make them durable. Its entries are defended '
         'by officers who did not take them, its strongest reason protects a cost nobody '
         'measures, and its review mechanism loses good exclusions as reliably as it sheds bad '
         'ones. What it does is make a decision visible to the person who will be asked to '
         'overturn it.'),
t_a=[('This could be done competently today; the Ministry has decided ____________ to.', 'not'),
     ('Reason: ____________. The Ministry would lose its only check.', 'calibration'),
     ('This entry is ____________ on 1 June 2029 unless renewed in writing.', 'removed'),
     ('An unwritten exclusion is defended only by people who ____________.', 'remember'),
     ('Nobody notices the absence of a ____________.', 'disagreement'),
     ('Easier renewal becomes ____________ renewal.', 'automatic')],
t_b_rubric='Rewrite each as a graded assessment, or as a plain warning where that is what it is.',
t_b=[('The register is probably not going to work very well.', 'the register’s durability is by no means certain'),
     ('I have doubts about whether this will last.', 'I am less than confident that four of the five entries will be defended in 2030'),
     ('The reasons are a bit thin in places.', 'two of the reasons are some way short of the standard the others meet'),
     ('This may be a problem later.', 'unless an entry is renewed in writing it will be removed; this is a warning and not an assessment')],

case=dict(
 title='The Decision Room · The assessment paragraph',
 brief=[
  'A proposal has been made to draft the assessment paragraph of a reporting telegram from the '
  'reporting itself, for posts that do not submit one.',
  'Of fifteen posts, four submit no assessment paragraph at all, and their telegrams are '
  'reporting without judgement.',
  'Karim resists, on the calibration ground in the register. Ambassador Faris Said says a '
  'drafted assessment is better than none and that four posts are currently sending nothing. '
  'Maya Sarkis asks why those four posts do not write one.'],
 exhibit=figs.datatable('FIFTEEN POSTS',
                        ['', 'Figure', 'Note'],
                        [['posts submitting an assessment paragraph', '11', '—'],
                         ['posts submitting none', '4', '—'],
                         ['of those 4, headed by first-time heads of mission', '3', '—'],
                         ['assessments disagreeing with the Ministry’s reading', '19 last year', 'of ~600'],
                         ['of those 19, later shown correct', '11', '—'],
                         ['value of a drafted assessment', 'agrees with the Ministry', 'by construction']]),
 exhibit_cap='Nineteen disagreements in six hundred telegrams, eleven of them right, and a '
             'drafted assessment would have produced none of them.',
 exhibit_note='Of the 4 posts submitting none, 3 are headed by officers in their first head of '
              'mission appointment.',
 voices=[('Ambassador Faris Said', 'Head of Mission, Astrene',
          'Four posts send reporting with no judgement in it. A drafted paragraph would at '
          'least force the question of what the reporting means.'),
         ('Karim Dalati', 'Information Security and Records',
          'It would force the question and supply the Ministry’s own answer. Nineteen '
          'assessments disagreed with us last year and eleven of those were right. A drafted '
          'paragraph cannot disagree with the material it was built from.'),
         ('Maya Sarkis', 'the Diplomatic Institute',
          'Three of the four silent posts are first-time heads of mission. They are not '
          'withholding a judgement; they have not been taught that the paragraph is theirs and '
          'that they are expected to contradict the capital in it.')],
 steps=[('Find it', 'How many assessments disagreed, and how many were right?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why can a drafted assessment not disagree?'),
        ('Weigh it', 'Four posts sending nothing against the loss of a check.'),
        ('Decide', 'What is done about the four posts?')],
 analysis=[('Find it. How many disagreements last year, and how many right?', 'nineteen of about six hundred, eleven of them right'),
           ('Compare it. What does Faris say?', 'that a drafted paragraph is better than none'),
           ('Infer it. What is Karim’s construction point?', 'that a paragraph built from the reporting cannot contradict it'),
           ('Weigh it. Who heads three of the four silent posts?', 'first-time heads of mission'),
           ('Decide. What would you do?', 'answers vary; teaching the four is the only option that produces a disagreement')],
 decision='Write what is done about the four posts.',
 decision_steps=['Say whether the assessment paragraph is ever drafted.',
                 'Say what is done about a post that submits none.',
                 'Say what new heads of mission are told about the paragraph.',
                 'Say what is measured.'],
 bank=['The assessment paragraph is …',
       'Where a post submits none, …',
       'New heads of mission are told that …',
       'The number of assessments disagreeing with the Ministry is …',
       'This is reviewed …'],
 outcome='The assessment paragraph remained excluded. A telegram arriving without one is '
         'returned to the post with one line asking for it, which produced an assessment from '
         'all four posts within two months. New heads of mission are told, in writing, that the '
         'paragraph is theirs, that it is expected to disagree with the Ministry where they '
         'disagree, and that a year with no disagreement in it will be asked about. The number '
         'of disagreements rose from nineteen to twenty-six in the following year. Faris, who '
         'had argued for drafting, says the returned telegram did what he wanted and that he '
         'had been proposing to fill a silence rather than to ask why it was there.',
 outcome_q=[('What happens to a telegram with no assessment?', 'it is returned with one line asking for it'),
            ('What are new heads of mission told?', 'that the paragraph is theirs and is expected to disagree where they disagree')],
 tags=[]),

lab=dict(
 title='Brief Lab · Decide what stays human',
 task=['This is the instruction under which the Ministry first recorded its exclusions, in '
       '2024.',
       'By 2026 it had eleven entries, of which four had reasons and seven were listed as '
       'established practice.'],
 draft=['Record the tasks that are to remain with officers.',
        'Include anything requiring judgement.',
        'Note the reason where appropriate.',
        'Review the list from time to time.',
        'Heads of section may add entries.',
        'Circulate the list.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and by the second year seven of eleven entries said established '
           'practice.',
 asked=['A stated reason and its kind for every entry',
        'A review date not more than three years ahead',
        'Incapability excluded as a ground'],
 back=['11 entries, 4 with reasons',
       '7 entries reading established practice',
       'No review dates and no removals'],
 gap='"Anything requiring judgement" admits almost everything, "where appropriate" makes the '
     'reason optional, "from time to time" is not a date, and the power to add has no matching '
     'obligation to justify.',
 back_cap='A register that grew for two years and could be dismantled in an afternoon.',
 back_note='Line three is the failure. A reason that is optional will be omitted by a busy '
           'officer, and an entry with no reason is a habit with a number.',
 diagnosis=[('[1] "tasks that are to remain with officers" — excluded by decision or by incapability?', 'unstated criterion'),
            ('[2] "anything requiring judgement" — judged by whom, and bounded how?', 'unstated criterion'),
            ('[3] "note the reason where appropriate" — and where it is not noted?', 'unstated exception'),
            ('[4] "review from time to time" — at what interval, and with what consequence?', 'missing condition'),
            ('[5] "heads of section may add entries" — with or without a reason?', 'unstated exception'),
            ('[6] "circulate the list" — and if an entry is never renewed?', 'missing condition')],
 rewrite='Rewrite the instruction so that every entry carries a reason, a kind and a review '
         'date.',
 scaffold=['Who must be able to defend the decision',
           'Which exclusions are covered and which grounds are excluded',
           'The decisions, the officers and the capability assessment',
           'Six elements per entry, the kind of reason, no incapability ground',
           'One page, published, each entry complete',
           'What happens where an entry is not renewed'],
 bank=['Record … so that … can defend it.',
       'Cover … ; … are out of scope and are not to be entered.',
       'Work from … , … and …',
       'For each entry name … , state whether … , give … , name … , and give … ; enter no task whose reason is …',
       'Return 1 register of … , each entry carrying … , published to …',
       'Where an entry is not renewed … , it is …'],
 check=['Does every entry require a reason?',
        'Is the kind of reason stated?',
        'Is there a review date with a consequence?',
        'Is incapability excluded as a ground?'],
 model=['Record each task the Ministry has decided not to automate, with its reason, so that the decision can be defended by an officer who was not party to it',
        'Tasks currently excluded by decision; tasks not yet attempted and tasks excluded for want of capability are out of scope and are not to be entered',
        'The decisions taken, the officers who took them, and the Ministry’s own assessment of what could be done',
        'For each entry name the task, state whether it could be performed competently today, give the reason and say which kind of reason it is, name the deciding officer and the date, and give a review date not more than 3 years ahead; enter no task whose reason is that the work would be done badly',
        '1 register of no more than 1 page, each entry carrying 6 elements, published to all sections',
        'Where an entry is not renewed in writing with a reason by its review date, it is removed and the removal is recorded'],
 cost='11 recorded exclusions of which 7 said established practice, any of which could have '
      'been removed in an afternoon by a competent argument.'),

rev_fig=figs.split('UNDERSTATEMENT',
                   'Hedging',
                   ['probably not going to work very well',
                    'I have doubts about whether …',
                    'a bit thin in places',
                    'this may be a problem later'],
                   'Graded',
                   ['by no means certain',
                    'less than confident that …',
                    'some way short of the standard',
                    'it will be removed: this is a warning']),
rev_fig_cap='Less than, not altogether, some way short of, by no means — and never in a warning.',
rev=dict(
 read=[('Of the five excluded tasks, how many would be done well?', ['none', 'three', 'all', 'one'], 1),
       ('The calibration reason protects', ['a document', 'the Ministry’s check on its own reading', 'an authority', 'a cost'], 1),
       ('A lapsing entry prevents', ['good exclusions', 'a register nobody can explain', 'renewal', 'review'], 1),
       ('In the Decision Room, what happens to a telegram with no assessment?', ['it is drafted', 'it is returned with one line', 'it is filed', 'it is rejected'], 1)],
 listen_text='A ministry that loses the one paragraph in its traffic capable of contradicting '
             'it will not record a loss, will not receive a complaint, and will discover the '
             'consequence years later in a decision taken on an unchallenged reading.',
 listen=[('Capable of ____________ it.', 'contradicting'),
         ('Will not record a ____________.', 'loss'),
         ('Will not receive a ____________.', 'complaint'),
         ('A decision taken on an ____________ reading.', 'unchallenged')],
 speak=['Name three tasks your office should not automate, with reasons of different kinds.',
        'Grade one assessment of your own with an understatement.'],
 write='Write one register entry with a task, a capability statement, a reason and a date.',
 vocab=[('The list of tasks a body has decided not to automate is an ____________.', 'exclusion register'),
        ('A provision ending a rule unless it is renewed is a ____________.', 'sunset clause'),
        ('A refusal on grounds of principle rather than cost is a ____________.', 'conscientious refusal'),
        ('The gradual widening of a practice beyond its purpose is a ____________.', 'creeping extension'),
        ('A judgement recorded with its reasons is a ____________.', 'documented judgement')],
 gram=[('The register’s durability is by no ____________ certain.', 'means'),
       ('I am ____________ than confident that the entries will be defended.', 'less'),
       ('Two of the reasons are some way ____________ of the standard the others meet.', 'short'),
       ('The arrangement is not ____________ satisfactory.', 'altogether'),
       ('This was not ____________ difficulty.', 'without')]),

found=['Write down one thing your office has decided not to automate, and why.',
       'Give it a review date and a named officer.',
       'Say which kind of reason it is.',
       'Name one cost in your work that nobody would notice if it disappeared.'],
end_line='Nobody notices the absence of a disagreement.',
end_next='Next: A Service That No Longer Drafts',
)
