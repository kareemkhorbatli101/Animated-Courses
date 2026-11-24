# -*- coding: utf-8 -*-
import figs

U = dict(
num=2, title='Putting It First',
gram='fronting and information structure',
ai='records: what you must be able to show afterwards',
strap='CEFR C1 · Grammar: fronting · AI: what you must be able to show afterwards',
cando=['front an element for emphasis and keep the resulting word order correct',
       'use inverted fronting after negative and restrictive adverbials',
       'decide what a record must contain to answer a question asked later',
       'distinguish keeping the output from keeping the reasoning',
       'write a retention rule that covers intermediate material'],
hero=('WHAT WE COULD NOT SHOW',
      ['Fourteen months later they asked what the system had been given.',
       'What we had kept was the answer. What they wanted was the question.'],
      [(800, 'orange', 'long'), (1500, 'purple', 'short'),
       (2180, 'grey', 'long'), (2840, 'teal', 'short')]),
hero_cap='A record is not what you kept; it is what somebody can later establish from it.',

warm=['What could your organisation not show about a decision taken a year ago?',
      'Do you keep the inputs to a process, or only its outputs?',
      'Who decided what is kept, and when was that rule last read?'],
read=[
 'Fourteen months after the work was done, a client’s advisers asked Arclight a question '
 'nobody at the firm had anticipated. They did not dispute the finished mapping sheet. What '
 'they wanted to establish was what the drafting system had been given and what it had '
 'returned before anybody touched it, and this Arclight could not produce, because the '
 'intermediate drafts had never been retained.',
 'The retention schedule, which Marta Olsen had written four years earlier and nobody had '
 'revised, listed nine classes of document and specified how long each was kept. Every class '
 'described something a person had made or received. Not one of them described something a '
 'system had produced on the way to a finished document, for the straightforward reason that '
 'in the year the schedule was written no such material existed.',
 'What Arclight could show was considerable. It could show the final sheet, the source '
 'documents, the covering correspondence, the reviewer’s initials and, after the previous '
 'year’s changes, the correction log with its stated causes. What it could not show was the '
 'draft itself, which meant it could not demonstrate whether the reviewer had made two '
 'changes or twenty, and that distinction was the whole of the advisers’ interest.',
 'Rarely has a gap in a records policy been so cheap to have closed and so expensive to '
 'discover. Keeping the drafts would have cost almost nothing in storage; reconstructing even '
 'a partial picture took three weeks, rested on the correction log rather than on the drafts, '
 'and produced an answer that was accurate, incomplete, and visibly assembled after the '
 'event, which is the least persuasive form in which a true answer can arrive.',
 'The revised schedule now distinguishes three things where it previously distinguished one: '
 'what a system was given, what it returned, and what a person did to it afterwards. Only by '
 'keeping all three, Marta argues, can the firm answer the question that was actually asked, '
 'which is not whether the output was right but how much of it was the system’s and how much '
 'was ours.'],
c_a=[('What did the client’s advisers want to establish?', 'what the system had been given and what it returned before anybody touched it'),
     ('Why could Arclight not produce it?', 'the intermediate drafts had never been retained'),
     ('Why did the retention schedule not cover them?', 'because no such material existed when it was written'),
     ('What distinction mattered to the advisers?', 'whether the reviewer had made two changes or twenty'),
     ('What three things does the revised schedule distinguish?', 'what the system was given, what it returned, and what a person did afterwards')],
c_b=[('The advisers disputed the finished sheet.', 'F'),
     ('The retention schedule listed nine classes of document.', 'T'),
     ('Marta had revised the schedule recently.', 'F'),
     ('Arclight could show the correction log.', 'T'),
     ('Reconstruction took three days.', 'F'),
     ('The reconstructed answer was inaccurate.', 'F')],
c_c=[('A question nobody at the firm had ____________.', 'anticipated'),
     ('Every class described something a person had ____________ or received.', 'made'),
     ('It could not demonstrate whether the reviewer had made two changes or ____________.', 'twenty'),
     ('Visibly assembled after the ____________.', 'event'),
     ('The least persuasive form in which a ____________ answer can arrive.', 'true'),
     ('How much of it was the system’s and how much was ____________.', 'ours')],
c_d=[('The gap existed because the schedule predated the ( material / client ).', ['material', 'client'], 0),
     ('What could Arclight show?', ['the drafts', 'the final sheet and the correction log', 'nothing', 'everything asked for'], 1),
     ('The reconstruction rested on', ['the drafts', 'the correction log', 'memory', 'the client’s records'], 1),
     ('The reconstructed answer was', ['false', 'accurate but visibly assembled afterwards', 'refused', 'incomplete and wrong'], 1),
     ('The real question was', ['whether the output was right', 'how much was the system’s and how much theirs', 'who signed', 'how long it took'], 1)],
c_e=('Fronted with inversion or without? Put each sentence in the right column.',
     [('Rarely has a gap been so cheap to close.', 'inversion'),
      ('What we could not show was the draft.', 'no inversion'),
      ('Not once had anybody asked for it.', 'inversion'),
      ('The draft itself, we had not kept.', 'no inversion'),
      ('Only by keeping all three can we answer it.', 'inversion'),
      ('That distinction was the whole of their interest.', 'no inversion')],
     ['inversion', 'no inversion']),

v_fig_title='WHAT A RECORD HAS TO BE',
v_fig=[('doc', 'a working paper'), ('key', 'tamper-evident'), ('scale', 'admissible'),
       ('bank', 'a retention schedule'), ('chart', 'a version history'), ('bulb', 'contemporaneous')],
v_fig_cap='Six words for the difference between keeping something and being able to show it.',
vocab=[
 ('a record', 'material kept because somebody may later need to establish something from it'),
 ('a retention period', 'the length of time a class of material must be kept'),
 ('production of documents', 'the handing over of material to another party who is entitled to it'),
 ('discoverable', 'liable to be required to be produced in a dispute'),
 ('to reconstruct', 'to assemble afterwards an account of what happened'),
 ('contemporaneous', 'made at the time of the events it describes'),
 ('a version history', 'the kept sequence of successive states of a document'),
 ('record attributes', 'the data about an item: who, when, from what, by what route'),
 ('an attestation', 'a formal statement that something is true, by somebody named'),
 ('a log entry', 'one dated line recording a single act or observation'),
 ('legibility', 'the quality of being readable by somebody who was not there'),
 ('tamper-evident', 'arranged so that later alteration would be apparent'),
 ('a chain of custody', 'the unbroken record of who held material and when'),
 ('immutable', 'incapable of being altered once written'),
 ('to timestamp', 'to attach to a record the moment it was made'),
 ('an exhibit', 'a document produced in support of an account of events'),
 ('a working paper', 'the intermediate material produced on the way to a conclusion'),
 ('to preserve', 'to keep deliberately against a future requirement'),
 ('admissible', 'of a kind that a tribunal will accept as evidence'),
 ('a retention schedule', 'the stated list of what is kept, in what class, for how long')],
v_a=[('Material made at the time of the events it describes is ____________.', 'contemporaneous'),
     ('The intermediate material produced on the way to a conclusion is a ____________.', 'working paper'),
     ('The unbroken record of who held material and when is a ____________.', 'chain of custody'),
     ('Arranged so that later alteration would be apparent is ____________.', 'tamper-evident'),
     ('The stated list of what is kept, and for how long, is a ____________.', 'retention schedule'),
     ('The quality of being readable by somebody who was not there is ____________.', 'legibility'),
     ('A formal statement that something is true, by somebody named, is an ____________.', 'attestation'),
     ('Liable to be required to be produced in a dispute is ____________.', 'discoverable')],
v_b=[('A record is material kept because somebody may later', 'need to establish something from it.'),
     ('Record attributes are the data about an item:', 'who, when, from what, by what route.'),
     ('Immutable means incapable of being altered', 'once written.'),
     ('Admissible means of a kind that a tribunal', 'will accept as evidence.'),
     ('To preserve is to keep deliberately', 'against a future requirement.')],

g_title='Grammar: fronting and information structure',
g_rule=['Fronting moves an element to the front for emphasis: the draft itself, we had not kept.',
        'After a negative or restrictive adverbial, the subject and auxiliary invert: rarely has it been.',
        'What-clauses front information without inversion: what we could not show was the draft.',
        'Fronting signals what the sentence is about; use it to put the point where the reader looks.'],
g_fig=('LOOSE',
       ['Rarely a gap has been so cheap to close.',
        'Only by keeping all three we can answer it.',
        'Not once anybody had asked for it.',
        'What we could not show it was the draft.'],
       'PRECISE',
       ['Rarely has a gap been so cheap to close.',
        'Only by keeping all three can we answer it.',
        'Not once had anybody asked for it.',
        'What we could not show was the draft.'],
       'three missing inversions and one surplus pronoun',
       'four with the structure the fronting requires'),
g_fig_cap='Fronting without the inversion it requires sounds like a translation.',
g_a=[('Rarely ____________ (have) a gap been so cheap to close.', 'has'),
     ('Only by keeping all three ____________ (can) we answer it.', 'can'),
     ('Not once ____________ (have) anybody asked for it.', 'had'),
     ('What we could not show ____________ (be) the draft.', 'was'),
     ('Never before ____________ (have) a client’s advisers asked that question.', 'had'),
     ('Little ____________ (do) we realise how cheap the remedy would have been.', 'did'),
     ('No sooner ____________ (have) the question arrived than the gap was obvious.', 'had'),
     ('Under no circumstances ____________ (may) a working paper be deleted early.', 'may'),
     ('The draft itself, we ____________ (not keep).', 'had not kept')],
g_b=[('After a negative adverbial, the subject and auxiliary ( stay / invert ).', ['stay', 'invert'], 1),
     ('Rarely ____ a gap been so cheap to close.', ['a gap has', 'has', 'have', 'it has'], 1),
     ('Only by keeping all three ____ answer it.', ['we can', 'can we', 'can', 'we could'], 1),
     ('What we could not show ____ the draft.', ['it was', 'was', 'were', 'had'], 1),
     ('No sooner ____ the question arrived than the gap was obvious.', ['has', 'had', 'did', 'was'], 1),
     ('Which needs no inversion?', ['Rarely ...', 'Not once ...', 'What we kept ...', 'Only then ...'], 2)],

d1=dict(title='What were you given?',
        fig=(['They are not disputing the sheet.', 'Then what are they asking?'],
             ['What the system was given.', 'We do not have that.']),
        cap='Marta and Jonas, the week the letter arrived.',
        lines=[('Marta', 'They are not disputing the sheet. They want to know what the system was '
                        'given and what it returned before anybody touched it.'),
               ('Jonas', 'We do not keep that.'),
               ('Marta', 'I know. Tell me why not, because I wrote the schedule and I would like to '
                         'know what I did.'),
               ('Jonas', 'You did nothing. The schedule has nine classes and every one of them is '
                         'something a person makes or receives. A draft that exists for ninety '
                         'seconds between a system and a reviewer is not in any of them.'),
               ('Marta', 'Because in the year I wrote it there was no such thing.'),
               ('Jonas', 'There was no such thing. And nobody has read the schedule since, which is '
                         'the actual failure and it is not a drafting failure.'),
               ('Marta', 'What can we reconstruct?'),
               ('Jonas', 'From the correction log, roughly how many fields were changed and why, for '
                         'the period since the log started. Not the draft itself. And the log began '
                         'nine months after the work they are asking about.'),
               ('Marta', 'So the honest answer is a partial reconstruction, assembled now, about a '
                         'period for which we have less than for later periods.'),
               ('Jonas', 'Which will read as evasive however carefully it is written.'),
               ('Marta', 'It will. Never before have I had to produce a record that is accurate and '
                         'sounds assembled, and I would rather have spent two euros a month on '
                         'storage.'),
               ('Jonas', 'Four euros, as it happens. I costed it this morning out of curiosity and '
                         'then wished I had not.')],
        a=[('What are the advisers asking for?', 'what the system was given and what it returned untouched'),
           ('Why is a short-lived draft not in the schedule?', 'because every class describes something a person makes or receives'),
           ('What does Jonas call the actual failure?', 'that nobody has read the schedule since it was written'),
           ('What can be reconstructed, and from when?', 'roughly how many fields changed, from the correction log, which began nine months later'),
           ('What would retention have cost?', 'about four euros a month')],
        b=[('A draft that exists for ninety ____________.', 'seconds'),
           ('Nobody has ____________ the schedule since.', 'read'),
           ('Accurate and sounds ____________.', 'assembled'),
           ('I costed it out of ____________.', 'curiosity')]),
d2=dict(title='Keep everything?',
        fig=(['Then keep everything.', 'For how long?'],
             ['Forever. Storage is nothing.', 'Storage is nothing. Disclosure is not.']),
        cap='Thomas and Marta.',
        lines=[('Thomas', 'The lesson seems simple. Keep everything, for ever. Storage costs four '
                          'euros a month.'),
               ('Marta', 'Storage costs four euros a month. Disclosure does not.'),
               ('Thomas', 'Explain that.'),
               ('Marta', 'Everything you keep is discoverable. If a dispute arises, we must produce '
                         'what we hold, which means searching it, reading it and handing over the '
                         'parts that are relevant whether they help us or not.'),
               ('Thomas', 'That is an argument for keeping less, which is how we got here.'),
               ('Marta', 'It is an argument for deciding deliberately rather than by accident. What '
                         'we did was keep less by not having thought about it, which gives us the '
                         'disadvantages of both.'),
               ('Thomas', 'So what is the rule?'),
               ('Marta', 'Keep what we would want to be able to show, and keep it for as long as '
                         'somebody could reasonably ask. For the drafts, that is the limitation '
                         'period on the work, which is six years.'),
               ('Thomas', 'And the things we would not want to show?'),
               ('Marta', 'There is no such class. If there were, keeping it or not keeping it would '
                         'both be indefensible, and the question would be why the thing exists.'),
               ('Thomas', 'That is a very clean answer and I do not entirely believe it. A reviewer’s '
                          'working notes while they are thinking are not a record of anything, and '
                          'keeping six years of half-formed opinions would produce exactly the '
                          'disclosure problem you just described.'),
               ('Marta', 'That is a better objection than I expected and I do not have a rule that '
                         'handles it. I can tell you where the line should be for drafts and not '
                         'where it is for notes.')],
        unresolved=True,
        a=[('What is wrong with keeping everything?', 'everything kept is discoverable and must be produced in a dispute'),
           ('What does Marta say Arclight actually did?', 'kept less by not thinking about it, taking the disadvantages of both'),
           ('What is her proposed rule?', 'keep what you would want to show, for as long as somebody could reasonably ask'),
           ('How long is that for the drafts?', 'six years, the limitation period on the work'),
           ('What objection does Thomas raise?', 'that a reviewer’s half-formed working notes are not a record and would create a disclosure problem')],
        b=[('Everything you keep is ____________.', 'discoverable'),
           ('Deciding deliberately rather than by ____________.', 'accident'),
           ('As long as somebody could reasonably ____________.', 'ask'),
           ('Six years of half-formed ____________.', 'opinions')]),

speak=[('Say it correctly',
        ['Student A: front six elements, three after negative adverbials.',
         'Student B: check the inversion in each.',
         'Find the one where fronting changed which point the sentence was making.']),
       ('Spoken specification: what you could not show',
        ['Name a decision your organisation took eighteen months ago.',
         'Brief aloud what you could show about it and what you could not.',
         'Your partner asks what keeping the missing item would have cost.']),
       ('Keep or not keep',
        ['In pairs, name three kinds of material your organisation produces.',
         'Decide for each whether you would want to be able to show it, and for how long.',
         'Find the one where you disagree, and say what the disagreement is about.'])],

ext_title='What you must be able to show afterwards is rarely what you thought to keep',
ext_fig=figs.datatable('WHAT ARCLIGHT COULD AND COULD NOT SHOW',
                       ['Material', 'Kept?', 'Retention class'],
                       [['the final mapping sheet', 'yes', 'client deliverable, 6 years'],
                        ['the source documents', 'yes', 'client material, 6 years'],
                        ['the reviewer’s initials', 'yes', 'within the sheet'],
                        ['the correction log', 'yes, 9 months', 'added last year'],
                        ['what the system was given', 'no', 'no class existed'],
                        ['what the system returned', 'no', 'no class existed']]),
ext_fig_cap='Four rows of evidence about the answer, and none about the question.',
ext=[
 'Records policies are written against the questions of the period in which they were '
 'drafted, and they age in a specific way: they continue to describe correctly everything '
 'that existed when they were written. A schedule listing nine classes of document, each of '
 'them something a person made or received, remains a perfectly good schedule for a firm '
 'where that is all there is, and becomes silently incomplete the moment work begins passing '
 'through a stage that produces material belonging to no person.',
 'The question that exposes the gap is not whether the output was correct. It is how much of '
 'the output was the system’s and how much was the firm’s, and it is asked by advisers, '
 'auditors and regulators because the answer bears on whose judgement was exercised. '
 'Answering it requires three things to have been kept: what the system was given, what it '
 'returned before anybody touched it, and what a person then did. Most organisations keep '
 'only the last, fused into the finished document.',
 'Reconstruction after the fact is possible and is worth much less than it costs. An account '
 'assembled from logs and recollections may be entirely accurate and will read as assembled, '
 'because it was; and a true answer delivered in that form persuades considerably less than '
 'the same answer produced from contemporaneous material. Rarely is the gap between the cost '
 'of keeping something and the cost of reconstructing it so wide as it is here, where storage '
 'is measured in euros a month.',
 'Keeping everything, however, is not the conclusion, and the reason is disclosure rather '
 'than storage. Material held is material that must be produced when somebody is entitled to '
 'it, searched at your expense and handed over whether it assists you or not. The sound '
 'position is to decide deliberately: keep what you would want to be able to show, for as '
 'long as somebody could reasonably ask, which for most professional work means the '
 'limitation period.',
 'Where that formulation runs out is at the boundary between a record and a thought. A '
 'reviewer’s half-formed working notes are not a record of a decision, and six years of them '
 'would create precisely the disclosure burden the policy exists to control. Organisations '
 'that have thought about this carefully tend to draw the line at material a process asked '
 'somebody to produce, and to say openly that the line is a judgement rather than a '
 'principle.'],
dp1=('Records and reconstructed accounts',
     'Dispute-resolution practice generally holds contemporaneous records substantially more '
     'persuasive than accounts reconstructed afterwards, and retention policies are commonly '
     'found not to cover machine-generated intermediate material.',
     'Source: general records-management literature, 2026.'),
e_a=[('How do records policies age?', 'they keep describing correctly everything that existed when written'),
     ('What question exposes the gap?', 'how much of the output was the system’s and how much the firm’s'),
     ('What three things must be kept to answer it?', 'what the system was given, what it returned, and what a person did'),
     ('Why is reconstruction worth less than it costs?', 'because a true answer in assembled form persuades much less'),
     ('Why is keeping everything not the answer?', 'because material held is discoverable and must be produced at your expense')],
e_b=[('An ageing records policy describes new material incorrectly.', 'F'),
     ('The key question is whether the output was correct.', 'F'),
     ('Most organisations keep what the system was given.', 'F'),
     ('A reconstructed account persuades as well as a contemporaneous one.', 'F'),
     ('Disclosure, not storage, limits what should be kept.', 'T'),
     ('The line between a record and a thought is a clear principle.', 'F')],

w_model=(
 'Purpose: revise the retention schedule so that Arclight can show, for any piece of work, '
 'what a system was given, what it returned and what a person then did. Scope: the 9 existing '
 'classes plus system-generated material in the checking and drafting processes; advisory '
 'drafting is out of scope. Inputs: the retention schedule dated 4 April four years ago, the '
 '3 requests for records received since, and the storage cost estimate of 11 September. '
 'Criteria: define 3 new classes covering system input, untouched system output and '
 'subsequent human change; set a retention period for each equal to the limitation period of '
 '6 years; state for each class whether it is tamper-evident and timestamped; state in 1 '
 'sentence which material is deliberately not kept and why. Done: 1 revised schedule of 12 '
 'classes, 1 storage cost figure a month, and 1 statement of what is not kept. Fallback: '
 'where material cannot be timestamped at creation, record it as not contemporaneous in the '
 'schedule rather than keeping it as though it were.'),
w_fig=figs.spec_card('THE RETENTION BRIEF',
                     [('Purpose', 'be able to show what the system was given, returned, and what we changed'),
                      ('Scope', '9 existing classes plus system material; advisory excluded'),
                      ('Inputs', 'schedule of 4 April, 3 records requests, storage estimate'),
                      ('Criteria', '3 new classes, 6-year periods, tamper-evidence stated'),
                      ('Done', '12-class schedule, monthly cost, statement of what is not kept'),
                      ('Fallback', 'no timestamp at creation: record as not contemporaneous')]),
w_fig_cap='The last row is the one that keeps a schedule honest about its own limits.',
w_task='Write a retention specification for your own organisation’s system-generated material.',
w_steps=['Say which existing classes are in scope and what is excluded.',
         'Define the new classes by what question they let you answer.',
         'Set a retention period and justify it by reference to a period, not a guess.',
         'State for each class whether it is timestamped and tamper-evident.',
         'State in one sentence what is deliberately not kept, and why.'],
w_bank=['Revise … so that we can show, for any piece of work, … , … and …',
        'Cover the … existing classes plus … ; … is out of scope.',
        'Work from … dated … , the … requests … , and … of …',
        'Define … new classes covering … ; set a retention period equal to … ; state for each whether …',
        'Where material cannot be timestamped at creation, … rather than …'],
w_check=['Are the new classes defined by the question they answer?',
         'Is the retention period justified by a stated period?',
         'Is tamper-evidence stated per class?',
         'Is what is not kept stated deliberately rather than omitted?'],

t_title='Records: what you must be able to show afterwards',
t_fig=figs.split('ONE DOCUMENT, THREE RECORDS',
                 'Usually kept — the answer',
                 ['the finished sheet',
                  'the source documents',
                  'the reviewer’s initials',
                  'the covering letter'],
                 'Rarely kept — the question',
                 ['what the system was given',
                  'what it returned untouched',
                  'which fields a person changed',
                  'and for what stated reason']),
t_fig_cap='The right-hand column is what a later question is almost always about.',
t_body=[
 'Read your retention schedule and ask what class each piece of system-generated material '
 'falls into. In most organisations the answer is none, not because the schedule was badly '
 'written but because it was written before such material existed, and nobody has read it '
 'since. That reading takes twenty minutes and is the whole of the diagnostic.',
 'Then decide what you would want to be able to show, rather than what you happen to have. '
 'The question asked later is almost never whether the output was right; it is how much of it '
 'was the system’s and how much yours, which requires the input, the untouched output and the '
 'human change to have been kept separately. Fuse them into a finished document and the '
 'question becomes unanswerable, however good your intentions were.',
 'Finally, set the period by reference to something external and say plainly what you do not '
 'keep. Keeping everything is not prudence: material held is discoverable, searchable at your '
 'expense and producible whether it helps you or not. Keep what you would want to show, for '
 'as long as somebody could reasonably ask, and record in one sentence what falls outside '
 'that and why, so that the absence is a decision rather than a discovery.'],
t_say=[('Test the schedule: ', 'Which class does the system’s draft fall into?'),
       ('Separate the three: ', 'What was it given, what did it return, what did we change?'),
       ('State the omission: ', 'We do not keep working notes, and here is why.')],
t_bound=('A retention schedule determines what you can produce. It cannot make a reconstructed '
         'account persuasive, it cannot tell you where the line between a record and a '
         'half-formed thought should fall, and keeping more material increases both what you '
         'can show and what you must hand over.'),
t_a=[('Which ____________ does the system’s draft fall into?', 'class'),
     ('What was it given, what did it return, what did we ____________?', 'change'),
     ('We do not keep working ____________, and here is why.', 'notes'),
     ('The schedule was written before such material ____________.', 'existed'),
     ('Material held is ____________, and producible whether it helps you or not.', 'discoverable'),
     ('So that the absence is a decision rather than a ____________.', 'discovery')],
t_b_rubric='Rewrite each reassurance as a statement about what can be shown.',
t_b=[('We keep full records.', 'we keep the output and the sources; we do not keep what the system was given'),
     ('Our retention policy is comprehensive.', 'our policy has nine classes, all of them material a person made or received'),
     ('We could reconstruct it if asked.', 'we could reconstruct it partially, from a log that began nine months later'),
     ('Storage is cheap, so we keep everything.', 'everything we keep is discoverable and must be searched and produced at our cost')],

case=dict(
 title='Decision Clinic · Six years of working notes',
 brief=[
  'The revised schedule covers system inputs, untouched outputs and human changes, all for '
  'six years. It is silent on one class: the free-text notes reviewers write to themselves '
  'while working, which the system stores and nobody has ever deleted.',
  'There are about four hundred thousand such notes. Marta estimates that in a dispute, '
  'searching and producing them would cost between forty and ninety thousand euros, and that '
  'perhaps one note in two thousand would be helpful to Arclight and one in two thousand '
  'harmful.',
  'Jonas wants them kept, on the grounds that they are the only trace of what a reviewer was '
  'thinking. Marta wants a ninety-day deletion rule. Priya Menon, consulted as the person who '
  'wrote most of the oldest ones, says something neither of them expected.'],
 exhibit=figs.datatable('FOUR HUNDRED THOUSAND NOTES',
                        ['', 'Figure', 'Note'],
                        [['notes held', '~400,000', 'since the system went in'],
                         ['storage cost a year', '~60 EUR', 'negligible'],
                         ['disclosure cost in a dispute', '40,000–90,000 EUR', 'estimate'],
                         ['notes likely to help us', '~1 in 2,000', 'estimate'],
                         ['notes likely to harm us', '~1 in 2,000', 'estimate']]),
 exhibit_cap='Storage is nothing, disclosure is not, and the useful and harmful notes are equally rare.',
 exhibit_note='The one-in-two-thousand figures are Marta’s estimates from reading two hundred '
              'notes and have no statistical standing.',
 voices=[('Jonas Riedel', 'systems and workflows',
          'They are the only record of a reviewer’s reasoning at the time. Delete them and we '
          'are back to being unable to show how much of a judgement was ours, which is the '
          'exact failure the new schedule exists to fix.'),
         ('Marta Olsen', 'risk and liability',
          'They are not a record of reasoning, they are a record of thinking out loud, and the '
          'two read very differently to a stranger. Ninety days, then deletion, stated in the '
          'schedule so that the deletion is policy rather than convenience.'),
         ('Priya Menon', 'client, consultant',
          'I wrote tens of thousands of these. They are not reasoning and they are not quite '
          'nothing: half of them say something like this client always does this, which is the '
          'only place that knowledge was ever written down. Delete them and you lose the '
          'thing you spent last year trying to preserve.')],
 steps=[('Find it', 'What do the notes cost to keep and to produce?'),
        ('Compare it', 'How do the helpful and harmful proportions compare?'),
        ('Infer it', 'Why does Priya’s point cut across both positions?'),
        ('Weigh it', 'A disclosure exposure against an accidental knowledge store.'),
        ('Decide', 'What happens to the four hundred thousand notes?')],
 analysis=[('Find it. What is the disclosure estimate?', 'between forty and ninety thousand euros'),
           ('Compare it. What are the helpful and harmful rates?', 'about one in two thousand each'),
           ('Infer it. What is Priya’s point?', 'that half the notes contain client knowledge recorded nowhere else'),
           ('Weigh it. Why does that complicate deletion?', 'because deleting them destroys the knowledge the firm spent a year trying to preserve'),
           ('Decide. What would you do?', 'answers vary; extracting the client knowledge before deleting is the obvious route and nobody has costed it')],
 decision='Write the schedule entry for reviewer notes.',
 decision_steps=['Say what is kept, for how long, and in what class.',
                 'Say what is extracted before anything is deleted, and by whom.',
                 'Say what the schedule states about the deletion’s purpose.',
                 'Say what would change the rule.'],
 bank=['Reviewer notes are …',
       'Before deletion, … extracts …',
       'The schedule states that deletion is … because …',
       'The rule would change if …',
       'This is reviewed every …'],
 outcome='Arclight adopted a one-year retention for reviewer notes and commissioned an '
         'extraction exercise: every note containing a statement about a client’s habits was '
         'to be copied into the client knowledge record before deletion. The extraction found '
         'eleven thousand such notes, of which the knowledge librarian judged six hundred '
         'worth keeping, and took four months rather than the estimated six weeks. Marta notes '
         'that the firm now holds a curated six hundred instead of four hundred thousand, '
         'which is the outcome she wanted by a route she argued against; Jonas notes that the '
         'six hundred exist only because the four hundred thousand had not been deleted on a '
         'ninety-day rule.',
 outcome_q=[('How many notes were worth keeping?', 'six hundred of the eleven thousand containing client statements'),
            ('What is Jonas’s point about the outcome?', 'that the six hundred exist only because nothing had been deleted on a short rule')],
 tags=[]),

lab=dict(
 title='Brief Lab · Update the retention policy',
 task=['This is the brief that produced the first attempt at the revised schedule, written '
       'the week the advisers’ letter arrived.',
       'It produced a schedule that was longer, better formatted, and still unable to answer '
       'the question that had prompted it.'],
 draft=['Update the retention schedule to cover the new kinds of material.',
        'Make sure we are keeping what we might need.',
        'Set sensible retention periods.',
        'Cover the main systems.',
        'Take account of storage costs.',
        'Finish it in good time for the audit.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions about a schedule, and none about a question it must answer.',
 asked=['Classes defined by the question they answer',
        'Periods justified by the limitation period',
        'A statement of what is deliberately not kept'],
 back=['14 classes, well formatted',
       'Periods of 1, 3 and 7 years, unexplained',
       'No statement of omissions'],
 gap='"The new kinds of material" names no set, "what we might need" supplies no test, '
     '"sensible retention periods" has no external reference, and "the main systems" leaves '
     'the reader to decide which ones matter.',
 back_cap='Fourteen classes, three unexplained periods, and the drafts still uncovered.',
 back_note='The reader covered the systems they knew about. The drafting stage, which produced '
           'the material the advisers asked for, was not among them.',
 diagnosis=[('[1] "the new kinds of material" — which kinds, listed where?', 'unscoped set'),
            ('[2] "what we might need" — need for what, judged how?', 'unstated criterion'),
            ('[3] "sensible retention periods" — sensible against what reference?', 'unstated criterion'),
            ('[4] "the main systems" — which systems, by what test?', 'unscoped set'),
            ('[5] "take account of storage costs" — and the disclosure cost?', 'undefined done'),
            ('[6] "in good time for the audit" — finished meaning what?', 'undefined done')],
 rewrite='Rewrite the brief so that the classes are defined by what they let the firm show, '
         'and the periods by the limitation period.',
 scaffold=['What the firm must be able to show, and for which work',
           'Which classes and systems are covered, and what is excluded',
           'The schedule, requests and cost estimates it is built from',
           'How the new classes are defined, what period applies, and what must be stated per class',
           'What comes back, in how many parts, and by when',
           'What to do where material cannot be timestamped at creation'],
 bank=['Revise … so that we can show, for any piece of work, … , … and …',
       'Cover the … existing classes plus … ; … is out of scope.',
       'Work from … dated … , the … requests received since, and … of …',
       'Define … new classes covering … ; set a retention period for each equal to … ; state for each whether it is … and … ; state in 1 sentence …',
       'Return 1 revised schedule of … classes, … , and …, by …',
       'Where material cannot be timestamped at creation, … rather than …'],
 check=['Are classes defined by the question they answer?',
        'Is the period tied to an external reference?',
        'Is the disclosure cost considered as well as storage?',
        'Must the omissions be stated in the schedule?'],
 model=['Revise the retention schedule so that Arclight can show, for any piece of work, what a system was given, what it returned and what a person then did',
        'The 9 existing classes plus system-generated material in the checking and drafting processes; advisory drafting is out of scope',
        'The retention schedule dated 4 April four years ago, the 3 requests for records received since, and the storage cost estimate of 11 September',
        'Define 3 new classes covering system input, untouched system output and subsequent human change; set a retention period for each equal to the limitation period of 6 years; state for each class whether it is tamper-evident and timestamped; state in 1 sentence which material is deliberately not kept and why',
        '1 revised schedule of 12 classes, 1 storage cost figure a month, and 1 statement of what is not kept, by 31 October',
        'Where material cannot be timestamped at creation, record it as not contemporaneous in the schedule rather than keeping it as though it were'],
 cost='1 schedule of 14 classes that still omitted the drafting stage, 2 weeks of work, and a '
      'partial reconstruction delivered to the advisers 3 weeks later than promised.'),

rev_fig=figs.split('FRONTING',
                   'Inversion required',
                   ['Rarely has a gap been so cheap to close.',
                    'Not once had anybody asked.',
                    'Only by keeping all three can we answer.',
                    'Under no circumstances may it be deleted.'],
                   'No inversion',
                   ['What we could not show was the draft.',
                    'The draft itself, we had not kept.',
                    'That distinction was their whole interest.',
                    'What they wanted was the question.']),
rev_fig_cap='The left column fronts an adverbial; the right fronts a noun phrase or a clause.',
rev=dict(
 read=[('A records policy ages by', ['becoming wrong', 'still describing only what existed when written', 'getting shorter', 'being deleted'], 1),
       ('The question asked later is usually', ['was the output right', 'how much was the system’s and how much yours', 'who paid', 'how long it took'], 1),
       ('Keeping everything is limited by', ['storage', 'production of documents', 'legibility', 'format'], 1),
       ('In the Clinic, what did the extraction find worth keeping?', ['400,000 notes', '600 notes', '11,000 notes', 'none'], 1)],
 listen_text='Read your retention schedule and ask what class each piece of system-generated '
             'material falls into. Then decide what you would want to be able to show, rather '
             'than what you happen to have, because the question asked later is how much of '
             'the output was the system’s and how much yours. Finally, set the period by '
             'reference to something external and say plainly what you do not keep.',
 listen=[('Ask what ____________ each piece of system-generated material falls into.', 'class'),
         ('Rather than what you happen to ____________.', 'have'),
         ('How much of the output was the ____________ and how much yours.', 'system’s'),
         ('Say plainly what you do not ____________.', 'keep')],
 speak=['Name something your organisation could not show about work done two years ago.',
        'Say what keeping it would have cost, and what producing it would cost.'],
 write='Write one fronted sentence with inversion about something you could not show.',
 vocab=[('Material made at the time of the events it describes is ____________.', 'contemporaneous'),
        ('The intermediate material on the way to a conclusion is a ____________.', 'working paper'),
        ('The unbroken record of who held material is a ____________.', 'chain of custody'),
        ('Arranged so later alteration would be apparent is ____________.', 'tamper-evident'),
        ('Liable to be required to be produced in a dispute is ____________.', 'discoverable')],
 gram=[('Rarely ____________ (have) a gap been so cheap to close.', 'has'),
       ('Only by keeping all three ____________ (can) we answer it.', 'can'),
       ('Not once ____________ (have) anybody asked for it.', 'had'),
       ('What we could not show ____________ (be) the draft.', 'was'),
       ('Under no circumstances ____________ (may) a working paper be deleted early.', 'may')]),

found=['Read your retention schedule and find the material it does not cover.',
       'Work out what you could not show about a piece of work from two years ago.',
       'Decide what you would want to be able to show, and for how long.',
       'Write down, in one sentence, what you deliberately do not keep.'],
end_line='What we had kept was the answer. What they wanted was the question.',
end_next='Next: Even If',
)
