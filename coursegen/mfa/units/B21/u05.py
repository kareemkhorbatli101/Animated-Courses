# -*- coding: utf-8 -*-
import figs

U = dict(
num=5, title='Who Said What, and When',
gram='verb patterns after reporting verbs',
ai='chronologies, and who said what when',
strap='CEFR B2 · Grammar: verb patterns after reporting verbs · AI: chronologies',
cando=['use the right pattern after said, told, denied, refused, agreed and claimed',
       'report a statement without changing what was claimed',
       'build a chronology in which every entry carries a time and a source',
       'say what a chronology establishes and what it only appears to establish',
       'write a tasking for a chronology that excludes undated material'],
hero=('SEVEN STATEMENTS, FOUR TIME ZONES',
      ['The sequence in the first draft was wrong by eleven hours.',
       'Every entry was correctly dated in the time zone of whoever published it.'],
      [(730, 'blue', 'long'), (1390, 'orange', 'short'),
       (2050, 'purple', 'long'), (2690, 'teal', 'short')]),
hero_cap='Policy Planning, reconstructing a week in which four capitals spoke.',

warm=['How do you record the time of something said in another country?',
      'What could make a correct list of events give a false impression?',
      'When has the order of two statements mattered in your work?'],
read=[
 'In June the Ministry needed to know who had moved first. Four states had made statements '
 'within eleven days on a question of transit fees, and the Ministry’s own position had been '
 'criticised as a response to one of them. Whether it was a response depended entirely on the '
 'order.',
 'A chronology step assembled thirty-one dated entries in two hours: statements, press '
 'conferences, a parliamentary answer, two wire reports and the Ministry’s own note. Each '
 'entry carried a date, a time, a source and a file reference. Dr Hana Mourad called it the '
 'single most useful two hours of the quarter.',
 'The first draft was nevertheless wrong by eleven hours at one point, and the error was '
 'instructive. Each entry had been dated correctly in the time zone of whoever published it. '
 'An Astrene statement timed at 09:00 and a Kavaran one timed at 14:00 had been placed in '
 'that order, and in fact the Kavaran statement came first.',
 'Omar Nasri found it because he had been in Astrene that week and remembered reading the '
 'Kavaran text over breakfast. He said that he had assumed the chronology would convert the '
 'times. It had no instruction to convert anything, and it had not claimed to.',
 'The second lesson arrived later and was harder. Three of the thirty-one entries were '
 'undated: two wire reports giving no time, and a ministry statement with a date and no hour. '
 'In the first draft they had been placed where they seemed to belong, which is to say where '
 'the drafter would have put them, and nothing in the chronology said so.'],
c_a=[('What did the Ministry need to know?', 'who had moved first, among four states within eleven days'),
     ('How many entries were assembled, and how fast?', 'thirty-one dated entries in two hours'),
     ('What did each entry carry?', 'a date, a time, a source and a file reference'),
     ('What was the eleven-hour error?', 'times had been kept in each publisher’s own time zone and not converted'),
     ('Who found it, and how?', 'Omar Nasri, who had been in Astrene and remembered reading the Kavaran text at breakfast'),
     ('What was wrong with three entries?', 'they were undated and had been placed where they seemed to belong')],
c_b=[('The order of statements did not matter.', 'F'),
     ('Each entry carried a source and a file reference.', 'T'),
     ('The chronology had claimed to convert times.', 'F'),
     ('The Kavaran statement came second.', 'F'),
     ('Three entries had no usable time.', 'T'),
     ('The chronology marked the undated entries.', 'F')],
c_c=[('Whether it was a response depended entirely on the ____________.', 'order'),
     ('The single most useful two ____________ of the quarter.', 'hours'),
     ('Dated correctly in the time ____________ of whoever published it.', 'zone'),
     ('He said that he had ____________ the chronology would convert the times.', 'assumed'),
     ('Two wire reports giving no ____________.', 'time'),
     ('Where the drafter would have put ____________.', 'them')],
c_d=[('The first draft was ( inaccurate / correctly dated and wrongly ordered ).', ['inaccurate', 'correctly dated and wrongly ordered'], 1),
     ('How many states had made statements?', ['two', 'four', 'eleven', 'thirty-one'], 1),
     ('How long did the assembly take?', ['two hours', 'eleven hours', 'two days', 'a week'], 1),
     ('How many entries were undated?', ['none', 'three', 'eleven', 'thirty-one'], 1),
     ('What had the chronology been told to do about time zones?', ['convert them', 'nothing', 'ignore them', 'flag them'], 1)],
c_e=('Match each reporting verb to its pattern.',
     [('he said', 'that plus clause'),
      ('he told me', 'object plus that plus clause'),
      ('he denied', 'noun or -ing'),
      ('he refused', 'to plus infinitive'),
      ('he agreed', 'to plus infinitive, or that plus clause'),
      ('he claimed', 'that plus clause, or to plus infinitive')],
     ['that plus clause', 'object plus that plus clause', 'noun or -ing',
      'to plus infinitive', 'to plus infinitive, or that plus clause', 'that plus clause, or to plus infinitive']),

v_fig_title='THE PARTS OF A CHRONOLOGY',
v_fig=[('clock', 'a wire timestamp'), ('doc', 'a dated entry'), ('pin', 'a first mention'),
       ('book', 'a contemporaneous record'), ('bulb', 'a reporting lag'), ('key', 'an undated claim')],
v_fig_cap='Six words for the apparatus of putting events in order.',
vocab=[
 ('a dated entry', 'an item in a chronology whose time is established'),
 ('an undated claim', 'a statement whose time cannot be fixed'),
 ('a time zone', 'the local offset by which a place reckons the hour'),
 ('a local time', 'the hour as it stood where the event occurred'),
 ('a wire timestamp', 'the time an agency marked on its own report'),
 ('a publication time', 'when a text was made public'),
 ('an event time', 'when the thing described actually happened'),
 ('a reporting lag', 'the interval between an event and its first report'),
 ('a first mention', 'the earliest appearance of a claim that can be found'),
 ('an earliest known reference', 'the oldest traceable mention of something'),
 ('a contemporaneous record', 'a record made at the time rather than later'),
 ('a retrospective account', 'an account written after the event, from memory or files'),
 ('a backdated document', 'a document bearing a date earlier than its making'),
 ('an anniversary', 'the yearly recurrence of a date, often used for timing'),
 ('a milestone', 'a point in a sequence treated as significant'),
 ('a turning point', 'the moment after which a sequence runs differently'),
 ('a chain of events', 'a sequence in which each step follows from the last'),
 ('a prior statement', 'something said before the statement under discussion'),
 ('a reversal of position', 'a move from one stated position to its opposite'),
 ('a consistent record', 'a set of statements none of which contradicts another')],
v_a=[('The time an agency marked on its own report is a ____________.', 'wire timestamp'),
     ('The interval between an event and its first report is a ____________.', 'reporting lag'),
     ('A record made at the time rather than later is a ____________.', 'contemporaneous record'),
     ('A document bearing a date earlier than its making is a ____________.', 'backdated document'),
     ('The moment after which a sequence runs differently is a ____________.', 'turning point'),
     ('A move from one stated position to its opposite is a ____________.', 'reversal of position'),
     ('The earliest appearance of a claim that can be found is a ____________.', 'first mention'),
     ('A statement whose time cannot be fixed is an ____________.', 'undated claim')],
v_b=[('A dated entry is an item in a chronology', 'whose time is established.'),
     ('An event time is when the thing described', 'actually happened.'),
     ('A retrospective account is an account written after the event,', 'from memory or files.'),
     ('A chain of events is a sequence in which', 'each step follows from the last.'),
     ('A consistent record is a set of statements', 'none of which contradicts another.')],

g_title='Grammar: verb patterns after reporting verbs',
g_rule=['Say takes that plus a clause and no object: he said that the times were local.',
        'Tell takes an object first: he told me that the times were local.',
        'Deny takes a noun or an -ing form: he denied converting the times.',
        'Refuse and agree take to plus infinitive; claim takes either that or to.'],
g_fig=('LOOSE',
       ['He said me that the times were local.',
        'He denied to convert the times.',
        'He refused that he would answer.',
        'He claimed about the order being wrong.'],
       'PRECISE',
       ['He told me that the times were local.',
        'He denied converting the times.',
        'He refused to answer.',
        'He claimed that the order was wrong.'],
       'four patterns that do not exist in English',
       'four reporting verbs each with its own pattern'),
g_fig_cap='The pattern is not a matter of taste; the wrong one changes what was reported.',
g_a=[('He ____________ me that the times were local.', 'told'),
     ('He ____________ that the times were local.', 'said'),
     ('He ____________ converting the times.', 'denied'),
     ('He ____________ to answer the question.', 'refused'),
     ('He ____________ that the order was wrong.', 'claimed'),
     ('She ____________ to circulate the text by May.', 'agreed'),
     ('They ____________ us that no decision had been taken.', 'assured'),
     ('He ____________ any knowledge of the document.', 'denied'),
     ('She ____________ that the chronology be rebuilt.', 'proposed')],
g_b=[('Say takes ( no object / an object ) before that.', ['no object', 'an object'], 0),
     ('He ____ me that the times were local.', ['said', 'told', 'denied', 'claimed'], 1),
     ('He ____ converting the times.', ['refused', 'denied', 'told', 'said'], 1),
     ('He ____ to answer.', ['denied', 'refused', 'said', 'told'], 1),
     ('Which takes either that or to?', ['tell', 'claim', 'deny', 'say'], 1),
     ('Which is correct?', ['He said me that …', 'He told me that …', 'He denied to …', 'He refused that …'], 1)],

d1=dict(title='Eleven hours',
        fig=(['Astrene at nine, Kavara at two.', 'Kavara was first.'],
             ['The dates are correct.', 'The dates are local.']),
        cap='Omar Nasri and Dr Hana Mourad, over the first draft.',
        lines=[('Omar', 'The order of entries nineteen and twenty is wrong. Kavara spoke first.'),
               ('Hana', 'Astrene is timed at 09:00 and Kavara at 14:00.'),
               ('Omar', 'In their own capitals. I was in Astrene that week and I read the '
                        'Kavaran text at breakfast before the Astrene statement was issued.'),
               ('Hana', 'Then the whole sequence may be wrong in several places.'),
               ('Omar', 'It is wrong in two places and sound in twenty-nine, which I have '
                        'checked. I told the section the chronology would convert the times and '
                        'that was my assumption, not something it claimed.'),
               ('Hana', 'It carried no column for a time zone at all.'),
               ('Omar', 'Which is the point. It did exactly what it was asked: it put the '
                        'published time against each entry. Nobody asked for a common clock '
                        'because nobody thought of it.'),
               ('Hana', 'The Ministry’s whole case is that our note was not a response to '
                        'Kavara.'),
               ('Omar', 'And on the corrected sequence it was not, because our note preceded '
                        'both. The error would have cost us the argument on a point in our '
                        'favour.'),
               ('Hana', 'So every entry carries a time zone and a converted time from now on.'),
               ('Omar', 'A converted time and the local time beside it. If we drop the local '
                        'time, somebody checking against the original will think we have '
                        'misquoted.'),
               ('Hana', 'Both columns, then, and the conversion stated at the head.')],
        a=[('Which entries were out of order?', 'nineteen and twenty'),
           ('How did Omar know?', 'he had been in Astrene and read the Kavaran text at breakfast'),
           ('How many entries were sound?', 'twenty-nine of thirty-one'),
           ('What was the Ministry’s case?', 'that its note was not a response to Kavara'),
           ('What does Omar want kept beside the converted time?', 'the local time, so a checker does not think the Ministry misquoted')],
        b=[('I read the Kavaran text at ____________.', 'breakfast'),
           ('It carried no column for a time ____________ at all.', 'zone'),
           ('Our note ____________ both.', 'preceded'),
           ('The conversion stated at the ____________.', 'head')]),
d2=dict(title='The three that had no hour',
        fig=(['Three entries have no time.', 'Where are they in the list?'],
             ['Where they seemed to belong.', 'By whose judgement?']),
        cap='Hana and Samir Haddad, on the second draft.',
        lines=[('Samir', 'Three of the thirty-one entries have no hour. Where are they in the '
                         'sequence?'),
               ('Hana', 'Placed where they appear to belong.'),
               ('Samir', 'By whom?'),
               ('Hana', 'By the assembly, from context. One is a ministry statement with a date '
                        'and no hour; two are wire reports with no time at all.'),
               ('Samir', 'Then a third of the argument about who moved first rests on three '
                         'placements that are judgements wearing the same typeface as the '
                         'dated entries.'),
               ('Hana', 'That is correct and I want to be careful about the remedy, because the '
                        'obvious one makes the chronology unusable.'),
               ('Samir', 'Which is?'),
               ('Hana', 'Excluding undated material. If I exclude the three, I lose the only '
                        'Kavaran ministry statement in the file, and a chronology of a dispute '
                        'that omits one side’s ministry is worse than one with a marked '
                        'uncertainty in it.'),
               ('Samir', 'So mark them and keep them. In a separate block, dated to the day, '
                         'not placed within the day.'),
               ('Hana', 'That works for the ministry statement. The two wire reports have no day '
                        'either, only a week.'),
               ('Samir', 'Then they sit outside the sequence entirely, in a list headed '
                         'undated, and anybody arguing from them says so out loud. I am not '
                         'satisfied with that and I cannot improve on it.'),
               ('Hana', 'Nor can I. We will write it that way and record that the three are the '
                        'weakest part of the document.')],
        a=[('How many entries have no hour?', 'three of thirty-one'),
           ('Who placed them, and on what basis?', 'the assembly, from context'),
           ('What is Samir’s objection?', 'that judgements appear in the same typeface as dated entries'),
           ('Why not simply exclude them?', 'because that loses the only Kavaran ministry statement in the file'),
           ('How is it resolved?', 'it is not; the three sit in a marked undated block and are recorded as the weakest part')],
        b=[('Judgements wearing the same ____________ as the dated entries.', 'typeface'),
           ('Dated to the ____________, not placed within the day.', 'day'),
           ('In a list headed ____________.', 'undated'),
           ('The weakest ____________ of the document.', 'part')],
        unresolved=True),

speak=[('Report it correctly',
        ['Student A: make six statements about your work.',
         'Student B: report each with said, told, denied, refused, agreed or claimed.',
         'Check that the pattern after each verb is the right one.']),
       ('Build a sequence',
        ['List five things that happened in your office last week.',
         'Give each a day and, where you can, an hour.',
         'Say which of them you could not place exactly, and why.']),
       ('Who moved first',
        ['In pairs, take two events whose order matters.',
         'Say what evidence would settle it.',
         'Say what you would write if the evidence did not exist.'])],

ext_title='A chronology establishes order only where every entry has a time, and a converted one',
ext_fig=figs.datatable('THE JUNE SEQUENCE, AS CORRECTED',
                       ['Entry', 'Local time', 'Common clock'],
                       [['the Ministry’s note', '7 June, 11:20', '7 June, 08:20'],
                        ['Kavaran statement', '8 June, 14:00', '8 June, 10:00'],
                        ['Astrene statement', '8 June, 09:00', '8 June, 21:00'],
                        ['Oristani press conference', '9 June, 16:30', '9 June, 13:30'],
                        ['wire report A', '10 June, no time', 'undated within the day'],
                        ['ministry statement, Kavara', 'week of 8 June', 'outside the sequence']]),
ext_fig_cap='Two entries move when the clock is made common, and two cannot be placed at all.',
ext=[
 'Chronology is one of the oldest instruments of the trade and one of the most laborious. '
 'Establishing who said what in what order used to mean a week of reading in several '
 'languages, and the result was often a sequence a desk officer half remembered. Assembling '
 'thirty entries with dates, sources and references now takes a couple of hours, which means '
 'the question of order can be asked whenever it matters rather than only when somebody has '
 'a week.',
 'The first thing to get right is the clock. Every published statement carries a time in the '
 'time zone of whoever published it, and an assembly that records the published time has done '
 'exactly what was asked and produced a sequence that can be wrong by a working day. The '
 'practice is two columns: the local time as published, and a converted time on a single '
 'stated clock. Dropping the local time looks tidier and causes an officer checking against '
 'the original to believe the Ministry has misquoted.',
 'The second thing is harder and gets less attention. A chronology is a list of lines that '
 'look alike, and some of those lines rest on a timestamp while others rest on somebody’s '
 'judgement about where an undated item belongs. Nothing in the appearance of the document '
 'distinguishes them. A sequence of thirty-one entries in which three are placed by inference '
 'reads as a sequence of thirty-one established facts.',
 'The remedy that offices reach for first is to exclude undated material, and it is usually '
 'wrong. A chronology of a dispute that omits one side’s only ministry statement because the '
 'statement bears no hour is less useful than one that carries it in a marked block. What '
 'works is a separate undated section, items dated to the day and not placed within it, and '
 'an instruction that anybody arguing from an undated entry says so.',
 'And the limit of the whole instrument deserves saying, because its outputs are persuasive. '
 'An order is not a cause. Showing that the Ministry’s note preceded Kavara’s statement '
 'disposes of the claim that the note was a response; it does not show that Kavara’s '
 'statement was a response to the note. A chronology that is used to argue causation is being '
 'used for something it cannot do, however exact its columns.'],
dp1=('Chronology building',
     'Analytical units in several foreign services adopted assisted chronology assembly in '
     '2025, with requirements for a single stated reference clock and separate treatment of '
     'undated material.',
     'Source: reported practice in diplomatic analysis, 2025–2026.'),
e_a=[('What did chronology building used to take?', 'a week of reading in several languages, often remembered imperfectly'),
     ('What is the first thing to get right?', 'the clock: local time as published and a converted time on one stated clock'),
     ('Why keep the local time?', 'because dropping it makes a checker think the Ministry has misquoted'),
     ('What is the second, harder problem?', 'that inferred placements look identical to timestamped entries'),
     ('What is the limit of the instrument?', 'an order is not a cause; it cannot establish causation')],
e_b=[('An assembly that records published times has disobeyed its tasking.', 'F'),
     ('A sequence can be wrong by a working day.', 'T'),
     ('Undated material should always be excluded.', 'F'),
     ('An inferred placement is visible in the document.', 'F'),
     ('A chronology can establish causation.', 'F'),
     ('Items may be dated to the day without being placed within it.', 'T')],

w_model=(
 'Purpose: establish the order of the 4 states’ statements on transit fees so that the '
 'Ministry can say whether its own note of 7 June preceded them. Scope: statements, press '
 'conferences and parliamentary answers between 1 and 14 June; commentary and analysis are out '
 'of scope. Inputs: the published texts, their publication times, and the Ministry’s own file. '
 'Criteria: give every entry a local time as published and a converted time on a single stated '
 'clock; name the source and its file reference; place no entry whose time is not published; '
 'list items dated only to a day or a week in a separate undated block. Done: 1 chronology, '
 'every entry carrying 2 times and a source, with undated items listed separately, within 3 '
 'hours. Fallback: where a published time cannot be established, do not infer it from context; '
 'put the entry in the undated block and say why.'),
w_fig=figs.spec_card('THE TASKING FOR A CHRONOLOGY',
                     [('Purpose', 'did the Ministry’s note of 7 June come first?'),
                      ('Scope', 'statements and answers, 1–14 June; commentary excluded'),
                      ('Inputs', 'published texts, publication times, the Ministry’s file'),
                      ('Criteria', '2 times per entry on one stated clock; no inferred placement'),
                      ('Done', '1 chronology with an undated block, within 3 hours'),
                      ('Fallback', 'no published time: undated block, with the reason')]),
w_fig_cap='Place no entry whose time is not published — the clause that keeps inference out of the sequence.',
w_task='Write a tasking for a chronology in your own work.',
w_steps=['Say what question the order is meant to settle.',
         'Bound the material by date and kind.',
         'Require two times and a stated reference clock.',
         'Forbid the placing of undated items.',
         'Say where undated items go instead.'],
w_bank=['Establish the order of … so that …',
        'Cover … ; … are out of scope.',
        'Work from … , … and …',
        'Give every entry … and … on a single stated clock; name … ; place no entry whose … ; list … separately',
        'Where a published time cannot be established, do not … ; put … and say …'],
w_check=['Does the purpose name the question the order settles?',
         'Are two times required, on one stated clock?',
         'Is inferring a time forbidden?',
         'Is there a destination for undated items?'],

t_title='Chronologies and the common clock',
t_fig=figs.split('A CHRONOLOGY',
                 'Can establish',
                 ['that A preceded B',
                  'the interval between them',
                  'the earliest traceable mention',
                  'a reversal of a stated position'],
                 'Cannot establish',
                 ['that A caused B',
                  'where an undated item belongs',
                  'what was known at the time',
                  'why anybody moved when they did']),
t_fig_cap='The left column is worth two hours. The right column is where chronologies are misused.',
t_body=[
 'Chronology is laborious and it is now cheap, which is the whole of the opportunity. Thirty '
 'entries with dates, sources and file references take a couple of hours instead of a week of '
 'reading, so the question of order can be asked whenever it matters.',
 'Get the clock right first. Every published text carries a time in its publisher’s own zone, '
 'and an assembly recording those times has done what it was asked and can be wrong by a '
 'working day. Require two columns: the local time as published and a converted time on one '
 'stated clock. Keep both, because a checker who finds only the converted time will think the '
 'Ministry has misquoted the original.',
 'Then keep inference out of the sequence. An undated item placed where it seems to belong is '
 'a judgement in the same typeface as a timestamp, and nobody reading the list can tell. Do '
 'not exclude undated material, which loses the other side’s only ministry statement for want '
 'of an hour; put it in a marked block, dated to the day and not within it. And remember what '
 'the instrument cannot do: an order is not a cause, and a chronology used to argue causation '
 'is being used for something no column in it supports.'],
t_say=[('State the clock: ', 'All times converted to a single stated clock; local times beside them.'),
       ('Refuse the inference: ', 'Place no entry whose time is not published.'),
       ('Mark the weakness: ', 'The 3 undated entries are the weakest part of this document.')],
t_bound=('A chronology establishes order where times exist and are converted. It cannot place '
         'an undated item, cannot show what anybody knew at the time, and cannot establish '
         'that one event caused another. Its outputs are persuasive in exactly the places '
         'where it is weakest, which is why the undated block has to be visible.'),
t_a=[('All times converted to a single stated ____________.', 'clock'),
     ('Place no entry whose time is not ____________.', 'published'),
     ('The 3 undated entries are the ____________ part of this document.', 'weakest'),
     ('An assembly recording published times can be wrong by a working ____________.', 'day'),
     ('A judgement in the same ____________ as a timestamp.', 'typeface'),
     ('An order is not a ____________.', 'cause')],
t_b_rubric='Rewrite each report with the correct pattern after the verb.',
t_b=[('He said me that the times were local.', 'he told me that the times were local'),
     ('He denied to convert the times.', 'he denied converting the times'),
     ('He refused that he would answer.', 'he refused to answer'),
     ('He claimed about the order being wrong.', 'he claimed that the order was wrong')],

case=dict(
 title='The Decision Room · What the chronology is used for',
 brief=[
  'The corrected chronology shows that the Ministry’s note of 7 June preceded all four '
  'statements. That disposes of the criticism that the note was a response to Kavara.',
  'The Minister’s office now wants to use the same chronology to argue that the Kavaran '
  'statement was a response to the Ministry’s note, and that Kavara therefore moved under '
  'pressure.',
  'Hana must decide what the document can be used to say. Samir holds that order cannot carry '
  'causation. Yara Ibrahim points out that the press will draw the causal conclusion whether '
  'the Ministry does or not.'],
 exhibit=figs.datatable('WHAT THE SEQUENCE SUPPORTS',
                        ['Claim', 'Supported?', 'Basis'],
                        [['the note preceded all 4 statements', 'yes', '2 times per entry, one clock'],
                         ['the note was not a response to Kavara', 'yes', 'order alone is enough'],
                         ['Kavara responded to the note', 'no', 'order is not cause'],
                         ['Kavara had read the note', 'no', 'nothing establishes receipt'],
                         ['Kavara moved under pressure', 'no', 'no evidence of motive'],
                         ['the interval was 23 hours', 'yes', 'converted times']]),
 exhibit_cap='Three of six claims are supported. The three the Minister’s office wants are not.',
 exhibit_note='The Ministry has no evidence that the Kavaran ministry had seen its note before '
              'the Kavaran statement was issued.',
 voices=[('Samir Haddad', 'Legal and Treaties',
          'The chronology can refute a claim about order and nothing else. Used for causation '
          'it will be taken apart by anybody who looks, and the person who looks will be '
          'Kavara.'),
         ('Yara Ibrahim', 'Press and Public Diplomacy',
          'The press will draw the causal line anyway. If we publish the sequence without '
          'comment the conclusion arrives free, and if we are asked we say only what the '
          'document shows.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Publishing a sequence and relying on the reader to over-read it is the same claim '
          'made deniably. I would rather make a claim we can defend or make none.')],
 steps=[('Find it', 'Which claims does the sequence support?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Samir expect the causal use to fail?'),
        ('Weigh it', 'A free conclusion against a defensible document.'),
        ('Decide', 'What is the chronology used to say?')],
 analysis=[('Find it. How many of the six claims are supported?', 'three'),
           ('Compare it. What does Yara propose?', 'publishing the sequence without comment'),
           ('Infer it. Who will examine a causal claim?', 'Kavara'),
           ('Weigh it. What does the Ministry lack evidence of?', 'that Kavara had seen the note before its statement'),
           ('Decide. What would you do?', 'answers vary; refuting the order claim is defensible and causation is not')],
 decision='Write what the Ministry says, and what it declines to say.',
 decision_steps=['Say what claim the chronology is used to refute.',
                 'Say what claim the Ministry declines to make.',
                 'Say what is published, and with what wording.',
                 'Say what the line to take is if a journalist draws the causal conclusion.'],
 bank=['The chronology establishes that …',
       'The Ministry does not claim that …',
       'What is published is …',
       'If asked whether … , the answer is …',
       'This is reviewed …'],
 outcome='The Ministry published the sequence with one sentence saying that its note of 7 June '
         'preceded all four statements, and a line to take that declined any claim about cause. '
         'Two journalists drew the causal conclusion in print and the Ministry neither '
         'confirmed nor repeated it. Six weeks later Kavara published its own chronology, '
         'which agreed with the Ministry’s on every converted time, and the agreement became '
         'the more useful fact: two foreign ministries with the same sequence on the record. '
         'Yara says she still thinks the free conclusion was worth having and accepts that it '
         'would have cost the agreement.',
 outcome_q=[('What did the Ministry publish?', 'the sequence, with one sentence on order and no claim about cause'),
            ('What became the more useful fact?', 'that Kavara’s own chronology agreed on every converted time')],
 tags=[]),

lab=dict(
 title='Brief Lab · Establish the order',
 task=['This is the tasking that produced the first draft, the one that was wrong by eleven '
       'hours.',
       'Every entry in that draft was correctly dated and the sequence was not.'],
 draft=['Put together a chronology of the statements.',
        'Give the date and time of each.',
        'Include everything relevant.',
        'Note the sources.',
        'Put them in order.',
        'As soon as possible.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and none of them says which clock.',
 asked=['Two times per entry on one stated clock',
        'No entry placed without a published time',
        'An undated block, listed separately'],
 back=['31 entries, each in its publisher’s own zone',
       '2 entries in the wrong order',
       '3 undated entries placed by inference'],
 gap='"The statements" does not say whose or between what dates, "the date and time" does not '
     'say in which zone, "everything relevant" leaves the test unstated, and "put them in '
     'order" does not say what to do with an item that has no time.',
 back_cap='A sequence of thirty-one identical-looking lines, two wrong and three invented.',
 back_note='Line two is the failure. A time with no stated clock is not a time, and the method '
           'had no reason to convert anything.',
 diagnosis=[('[1] "the statements" — whose, and between what dates?', 'unscoped set'),
            ('[2] "the date and time of each" — in which time zone?', 'unstated criterion'),
            ('[3] "everything relevant" — relevant by what test, and how many items?', 'unbounded quantity'),
            ('[4] "note the sources" — with a file reference, or a name?', 'unstated criterion'),
            ('[5] "put them in order" — and items with no time?', 'unscoped set'),
            ('[6] "as soon as possible" — how many entries, by when?', 'unbounded quantity')],
 rewrite='Rewrite the tasking so that one clock is stated and nothing is placed by inference.',
 scaffold=['What question the order settles',
           'The material covered, by date and kind',
           'The texts, their publication times and the file',
           'Two times on one stated clock, sources with references, no inferred placement, an undated block',
           'What is produced and by when',
           'What to do where a published time cannot be established'],
 bank=['Establish the order of … so that …',
       'Cover … ; … are out of scope.',
       'Work from … , … and …',
       'Give every entry … and … ; name … ; place no entry … ; list … separately',
       'Return 1 chronology … , within …',
       'Where a published time cannot be established, … and say …'],
 check=['Is a single reference clock stated?',
        'Is the local time kept beside the converted one?',
        'Is inferring a placement forbidden?',
        'Do undated items have a separate home?'],
 model=['Establish the order of the 4 states’ statements on transit fees so that the Ministry can say whether its own note of 7 June preceded them',
        'Statements, press conferences and parliamentary answers between 1 and 14 June; commentary and analysis are out of scope',
        'The published texts, their publication times, and the Ministry’s own file',
        'Give every entry a local time as published and a converted time on a single stated clock; name the source and its file reference; place no entry whose time is not published; list items dated only to a day or a week in a separate undated block',
        '1 chronology, every entry carrying 2 times and a source, with undated items listed separately, within 3 hours',
        'Where a published time cannot be established, do not infer it from context; put the entry in the undated block and say why'],
 cost='1 draft sequence that would have conceded an argument the Ministry was winning, and 3 '
      'inferred placements indistinguishable from timestamps.'),

rev_fig=figs.split('REPORTING PATTERNS',
                   'Wrong',
                   ['He said me that …',
                    'He denied to convert …',
                    'He refused that he would …',
                    'He claimed about the order …'],
                   'Right',
                   ['He told me that …',
                    'He denied converting …',
                    'He refused to answer.',
                    'He claimed that the order was wrong.']),
rev_fig_cap='Say that; tell somebody that; deny doing; refuse to do; claim that or to.',
rev=dict(
 read=[('The first thing to get right in a chronology is', ['the sources', 'the clock', 'the length', 'the order'], 1),
       ('An undated item should be', ['placed from context', 'listed in a marked block', 'excluded always', 'dated by inference'], 1),
       ('A chronology cannot establish', ['order', 'causation', 'intervals', 'first mentions'], 1),
       ('In the Decision Room, what became the more useful fact?', ['the causal claim', 'Kavara’s chronology agreed', 'the press reports', 'the interval'], 1)],
 listen_text='Every published text carries a time in its publisher’s own zone, and an '
             'assembly recording those times has done what it was asked and can be wrong by a '
             'working day. Require two columns: the local time as published and a converted '
             'time on one stated clock.',
 listen=[('In its publisher’s own ____________.', 'zone'),
         ('Wrong by a working ____________.', 'day'),
         ('Require two ____________.', 'columns'),
         ('A converted time on one stated ____________.', 'clock')],
 speak=['Describe five events of your week with times, and say which you cannot place exactly.',
        'Report three things colleagues said, using three different reporting verbs.'],
 write='Write one line forbidding the placing of undated items.',
 vocab=[('The time an agency marked on its own report is a ____________.', 'wire timestamp'),
        ('The interval between an event and its first report is a ____________.', 'reporting lag'),
        ('A record made at the time rather than later is a ____________.', 'contemporaneous record'),
        ('A document bearing a date earlier than its making is a ____________.', 'backdated document'),
        ('A move from one stated position to its opposite is a ____________.', 'reversal of position')],
 gram=[('He ____________ me that the times were local.', 'told'),
       ('He ____________ converting the times.', 'denied'),
       ('He ____________ to answer the question.', 'refused'),
       ('He ____________ that the order was wrong.', 'claimed'),
       ('She ____________ to circulate the text by May.', 'agreed')]),

found=['Take two events from your work and establish which came first, with evidence.',
       'Check whether a document you use states the time zone of its times.',
       'Find one undated item in a list your office relies on.',
       'Report three statements from this week with the correct verb patterns.'],
end_line='An order is not a cause, however exact the columns.',
end_next='Next: Watching the Narrative',
)
