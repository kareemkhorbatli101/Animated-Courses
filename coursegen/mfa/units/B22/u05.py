# -*- coding: utf-8 -*-
import figs

U = dict(
num=5, title='Positions, Fallbacks, Red Lines',
gram='complex noun phrases and premodification in legal text',
ai='preparing a round: positions, fallbacks and red lines',
strap='CEFR B2 · Grammar: complex noun phrases · AI: positions, fallbacks and red lines',
cando=['build and unpack a complex premodified noun phrase',
       'see where premodification makes a provision ambiguous',
       'set out a position, a fallback and a red line so that each is distinguishable',
       'say what a round brief can be assembled from and what it cannot',
       'write a tasking that forbids the invention of a fallback'],
hero=('THREE COLUMNS, ONE OF THEM EMPTY',
      ['Position and fallback assembled from the file in an afternoon.',
       'The red line is a decision, and there was nobody in the building to take it.'],
      [(730, 'teal', 'long'), (1390, 'orange', 'short'),
       (2050, 'blue', 'long'), (2690, 'purple', 'short')]),
hero_cap='Legal and Treaties, three days before the fifth round.',

warm=['What is the difference between a fallback and a red line?',
      'Who in your organisation can decide where a limit lies?',
      'What happens in a meeting if nobody has decided the limit in advance?'],
read=[
 'A round brief sets out, for each issue, the Ministry’s opening position, the fallback it may '
 'move to, and the red line it will not cross. Samir Haddad’s section prepares them for '
 'twenty-two issues at a time.',
 'Since the summer the first two columns have been assembled from the files. The opening '
 'position is almost always the position stated in the last round, which is on the record. The '
 'fallback is almost always a position the Ministry has accepted somewhere else, which the '
 'precedent collection can find. Two columns of twenty-two issues, assembled in an afternoon, '
 'referenced throughout.',
 'The third column is different in kind. A red line is a statement that the Ministry will '
 'accept no agreement rather than cross a point, and nothing in any file records such a '
 'decision until a person with authority takes it for this round, on this issue, against this '
 'counterpart.',
 'In July Samir instructed that the third column be assembled with the other two, on the '
 'ground that the Ministry’s standing positions imply its limits. The column came back full. '
 'For eleven of the twenty-two issues the red line was expressed as the Ministry cannot accept '
 'any arrangement which prejudices its position, which is a sentence and not a limit.',
 'The delegation went into the round with eleven red lines of that kind. On the second day the '
 'Oristani side proposed a formulation on inspection access that the head of delegation '
 'believed crossed one of them, had no means of testing, and declined. It later proved to be '
 'inside the Ministry’s actual limit by a considerable margin, and the opportunity did not '
 'return.'],
c_a=[('What does a round brief set out?', 'the opening position, the fallback and the red line for each issue'),
     ('How many issues at a time?', 'twenty-two'),
     ('Where does the opening position come from?', 'the position stated in the last round, which is on the record'),
     ('Where does the fallback come from?', 'a position the Ministry has accepted elsewhere, findable in the precedent collection'),
     ('Why is a red line different?', 'because it is a decision nobody has taken until a person with authority takes it'),
     ('What happened in the round?', 'the delegation declined a formulation that was in fact well inside the Ministry’s limit')],
c_b=[('The first two columns are assembled from files.', 'T'),
     ('A red line is recorded in the files.', 'F'),
     ('Eleven of twenty-two red lines were expressed in general terms.', 'T'),
     ('The head of delegation accepted the formulation.', 'F'),
     ('The formulation was outside the Ministry’s actual limit.', 'F'),
     ('The opportunity returned later.', 'F')],
c_c=[('The fallback it may ____________ to.', 'move'),
     ('Two columns of twenty-two issues, ____________ throughout.', 'referenced'),
     ('The Ministry will accept no agreement rather than ____________ a point.', 'cross'),
     ('Which is a sentence and not a ____________.', 'limit'),
     ('Had no means of ____________, and declined.', 'testing'),
     ('Inside the Ministry’s actual limit by a considerable ____________.', 'margin')],
c_d=[('The eleven red lines were ( wrong / not limits at all ).', ['wrong', 'not limits at all'], 1),
     ('How long did the first two columns take?', ['an afternoon', 'a week', 'three days', 'an hour'], 1),
     ('How many issues had general red lines?', ['twenty-two', 'eleven', 'two', 'none'], 1),
     ('On which day did the proposal come?', ['the first', 'the second', 'the last', 'before the round'], 1),
     ('What did the head of delegation lack?', ['authority', 'a means of testing the red line', 'a brief', 'an interpreter'], 1)],
c_e=('Unpack each noun phrase: what is the head noun?',
     [('inspection cost allocation arrangements', 'arrangements'),
      ('the Party paying the inspection costs', 'Party'),
      ('a binding 2027 fee review requirement', 'requirement'),
      ('the review of the fee in 2027', 'review'),
      ('third-party inspection access rights', 'rights'),
      ('rights of access for third-party inspectors', 'rights')],
     ['arrangements', 'Party', 'requirement', 'review', 'rights']),

v_fig_title='THE PARTS OF A ROUND',
v_fig=[('doc', 'a round brief'), ('key', 'an opening position'), ('pin', 'a fallback position'),
       ('shield', 'a walk-away point'), ('people', 'a delegation list'), ('clock', 'a closing session')],
v_fig_cap='Six parts, and only one of them cannot be prepared from a file.',
vocab=[
 ('an opening position', 'the position a side states at the start of a round'),
 ('a fallback position', 'the position a side may move to if pressed'),
 ('a walk-away point', 'the point at which a side would rather have no agreement'),
 ('a bottom line figure', 'the least favourable number a side would accept'),
 ('a negotiating margin', 'the distance between an opening position and a limit'),
 ('an opening bid', 'the first figure or formulation put on the table'),
 ('a reciprocal concession', 'a movement given in exchange for movement received'),
 ('a sequencing of concessions', 'the order in which movements are to be made'),
 ('a round brief', 'the document prepared for one session of a negotiation'),
 ('a delegation list', 'the names and functions of those attending for each side'),
 ('a seating order', 'the arrangement of delegations around a table'),
 ('a bilateral in the margins', 'a meeting of two delegations alongside a larger one'),
 ('a plenary', 'the session at which all delegations sit together'),
 ('a working group', 'a smaller body set up to handle part of the business'),
 ('a drafting group', 'a small group formed to produce text'),
 ('a corridor conversation', 'an exchange outside the formal sessions'),
 ('a closing session', 'the final session, at which results are recorded'),
 ('a report back', 'the account a delegation sends to its capital'),
 ('a mandate check', 'the step of confirming what a delegation is authorised to do'),
 ('an authority to conclude', 'the power to bind the state to a final text')],
v_a=[('The point at which a side would rather have no agreement is a ____________.', 'walk-away point'),
     ('The distance between an opening position and a limit is a ____________.', 'negotiating margin'),
     ('A movement given in exchange for movement received is a ____________.', 'reciprocal concession'),
     ('The step of confirming what a delegation may do is a ____________.', 'mandate check'),
     ('The power to bind the state to a final text is an ____________.', 'authority to conclude'),
     ('A meeting of two delegations alongside a larger one is a ____________.', 'bilateral in the margins'),
     ('The order in which movements are to be made is a ____________.', 'sequencing of concessions'),
     ('The account a delegation sends to its capital is a ____________.', 'report back')],
v_b=[('An opening position is the position a side states', 'at the start of a round.'),
     ('A fallback position is the position a side may move to', 'if pressed.'),
     ('A drafting group is a small group formed', 'to produce text.'),
     ('A corridor conversation is an exchange', 'outside the formal sessions.'),
     ('A closing session is the final session,', 'at which results are recorded.')],

g_title='Grammar: complex noun phrases and premodification',
g_rule=['English piles modifiers before a noun: third-party inspection access rights.',
        'The head noun is the last one; everything before it modifies it.',
        'Beyond three modifiers the phrase becomes ambiguous and should be unpacked with of '
        'and for.',
        'In a red line, unpack always: a limit expressed as a noun phrase is not a limit.'],
g_fig=('LOOSE',
       ['third-party inspection access rights',
        'inspection cost allocation arrangements',
        'binding 2027 fee review requirement',
        'delegation authority limit questions'],
       'PRECISE',
       ['rights of access for inspectors nominated by a third State',
        'the arrangements by which the costs of an inspection are allocated',
        'a requirement that the Parties review the fee in 2027, the review being binding',
        'questions about the limits of the delegation’s authority'],
       'four phrases of four modifiers each, none of them unambiguous',
       'four phrases unpacked, each with one reading'),
g_fig_cap='A stack of modifiers is fast to write and cannot be read twice the same way.',
g_a=[('Rights of access ____________ inspectors nominated by a third State.', 'for'),
     ('The arrangements ____________ which the costs are allocated.', 'by'),
     ('A requirement ____________ the Parties review the fee in 2027.', 'that'),
     ('Questions about the limits ____________ the delegation’s authority.', 'of'),
     ('The head noun in "inspection access rights" is ____________.', 'rights'),
     ('The Party ____________ the inspection costs.', 'paying'),
     ('A review ____________ the fee in 2027.', 'of'),
     ('The allocation ____________ costs between the Parties.', 'of'),
     ('Access ____________ the site for nominated inspectors.', 'to')],
g_b=[('The head noun is the ( last / first ) in the stack.', ['last', 'first'], 0),
     ('Beyond three modifiers a phrase should be', ['shortened', 'unpacked', 'capitalised', 'bracketed'], 1),
     ('In "third-party inspection access rights" the head is', ['inspection', 'rights', 'access', 'third-party'], 1),
     ('A limit expressed as a noun phrase is', ['clearer', 'not a limit', 'binding', 'shorter'], 1),
     ('Unpack with', ['commas', 'of and for', 'brackets', 'capitals'], 1),
     ('Which is unambiguous?', ['inspection cost allocation arrangements', 'the arrangements by which the costs of an inspection are allocated', 'cost arrangements', 'allocation arrangements'], 1)],

d1=dict(title='Which is a sentence and not a limit',
        fig=(['Eleven red lines.', 'Eleven sentences.'],
             ['They are on the brief.', 'They cannot be tested in a room.']),
        cap='Samir Haddad and Ambassador Faris Said, after the round.',
        lines=[('Faris', 'On the second day they put a formulation on inspection access. My red '
                         'line said the Ministry cannot accept any arrangement which prejudices '
                         'its position.'),
               ('Samir', 'And you declined.'),
               ('Faris', 'I declined, because I could not establish whether it prejudiced our '
                         'position or not, and the brief gave me no way to find out. The '
                         'sentence tells me what we will not accept in terms that only make '
                         'sense if I already know what we will not accept.'),
               ('Samir', 'It was inside our limit. Well inside.'),
               ('Faris', 'I know that now. In the room I had ninety seconds and a sentence that '
                         'could mean anything, and declining is the only safe thing to do with a '
                         'red line you cannot measure.'),
               ('Samir', 'That is correct and it is my fault. I instructed in July that the red '
                         'line column be assembled with the other two.'),
               ('Faris', 'Why?'),
               ('Samir', 'Because I reasoned that our standing positions imply our limits, and '
                         'in some sense they do. What they do not do is decide them, and a limit '
                         'that nobody has decided comes out as a form of words with the shape of '
                         'a limit.'),
               ('Faris', 'A limit I can use looks like a figure or a formulation. No access for '
                         'inspectors nominated by a third State. That I can test in four '
                         'seconds.'),
               ('Samir', 'Then the column comes out of the assembly and goes to whoever has '
                         'authority on each issue, and it goes back empty where nobody has '
                         'decided.'),
               ('Faris', 'Empty is better. Empty tells me to telephone. A sentence tells me to '
                         'decline.')],
        a=[('What did Faris’s red line say?', 'that the Ministry cannot accept any arrangement which prejudices its position'),
           ('Why did he decline?', 'because he could not establish whether the formulation prejudiced the position'),
           ('Where was the formulation in fact?', 'well inside the Ministry’s limit'),
           ('What was Samir’s July reasoning?', 'that standing positions imply limits'),
           ('What does Faris prefer to a general sentence?', 'an empty column, which tells him to telephone')],
        b=[('A red line you cannot ____________.', 'measure'),
           ('A limit that nobody has ____________.', 'decided'),
           ('No access for inspectors nominated by a third ____________.', 'State'),
           ('Empty tells me to ____________.', 'telephone')]),
d2=dict(title='Who decides a limit',
        fig=(['Who decides a red line?', 'On this issue, the Deputy Minister.'],
             ['And on the other twenty-one?', 'That is the question nobody asked.']),
        cap='Samir and Dr Hana Mourad.',
        lines=[('Hana', 'If the red line column has to be decided rather than assembled, who '
                        'decides each of the twenty-two?'),
               ('Samir', 'That turns out to be an unanswered question. On three issues it is '
                         'clearly the Deputy Minister. On two it is the Minister. On the other '
                         'seventeen nobody has ever had to say, because nobody has ever been '
                         'asked for a limit in writing.'),
               ('Hana', 'They have had red lines on the briefs for years.'),
               ('Samir', 'They have had sentences on the briefs for years, and the sentences '
                         'were never tested because heads of delegation treated them as general '
                         'guidance and used their judgement. Which worked, because the heads of '
                         'delegation were experienced and the counterparts were familiar.'),
               ('Hana', 'And now?'),
               ('Samir', 'Now I have put the empty column in front of people and they are '
                         'discovering that a limit is a decision somebody has to own.'),
               ('Hana', 'Expect resistance. A named limit can be exceeded and the naming can be '
                        'traced.'),
               ('Samir', 'That is exactly the resistance I am getting, and it is not '
                         'unreasonable. A Deputy Minister who writes no access for third-State '
                         'inspectors has created a document that will be read in two years if '
                         'that line is ever crossed.'),
               ('Hana', 'Whereas a sentence about prejudicing our position cannot be crossed, '
                        'because it cannot be located.'),
               ('Samir', 'Which is why it survived for fifteen years. I am asking people to '
                         'exchange a form of words that protects them for a limit that protects '
                         'the delegation.')],
        a=[('On how many issues was the decider clear?', 'five: three for the Deputy Minister and two for the Minister'),
           ('Why had nobody said for the other seventeen?', 'because nobody had ever been asked for a limit in writing'),
           ('Why did the old sentences work?', 'heads of delegation were experienced and treated them as general guidance'),
           ('Why is there resistance?', 'because a named limit can be exceeded and the naming can be traced'),
           ('What exchange is Samir asking for?', 'a form of words that protects the decider for a limit that protects the delegation')],
        b=[('A limit is a decision somebody has to ____________.', 'own'),
           ('The naming can be ____________.', 'traced'),
           ('It cannot be crossed, because it cannot be ____________.', 'located'),
           ('A limit that protects the ____________.', 'delegation')]),

speak=[('Unpack the stack',
        ['Student A: build a noun phrase of four modifiers from your own field.',
         'Student B: unpack it with of and for.',
         'Say which reading the stacked version allowed that the unpacked one does not.']),
       ('Three columns',
        ['Take an issue you negotiate or discuss.',
         'State your opening position, your fallback and your limit.',
         'Your partner says which of the three you could actually test in a room.']),
       ('Who decides',
        ['Name a limit in your own work.',
         'Say who has authority to set it.',
         'Say what you would do if nobody had set it.'])],

ext_title='Positions and fallbacks are on the record; a red line is a decision nobody has taken yet',
ext_fig=figs.datatable('THE THREE COLUMNS, BY SOURCE',
                       ['Column', 'Comes from', 'Assembled?'],
                       [['opening position', 'the last round’s stated position', 'yes, referenced'],
                        ['fallback', 'positions accepted in other instruments', 'yes, referenced'],
                        ['sequencing of concessions', 'the round brief and reporting', 'partly'],
                        ['red line', 'a decision by somebody with authority', 'no'],
                        ['who decides the red line', 'nowhere, on 17 of 22 issues', 'no'],
                        ['testability in a room', 'depends on the wording', '—']]),
ext_fig_cap='Two columns assemble in an afternoon. The fourth row is a decision and the fifth '
            'is a gap.',
ext=[
 'A round brief has a recognisable shape in every foreign ministry: for each issue, the '
 'position the delegation opens with, the fallback it may move to, and the limit it will not '
 'cross. The first two columns are retrieval work of exactly the kind that has become cheap. '
 'An opening position is almost always the position stated at the end of the last round, which '
 'is on the record; a fallback is almost always something the ministry has accepted somewhere '
 'else, which a precedent collection can find and reference.',
 'Twenty-two issues, two columns, an afternoon, with a file reference against every entry. '
 'That is a serious gain, and the sections that have adopted it report that the referencing '
 'matters as much as the speed, because a fallback with a precedent attached can be defended '
 'in the room.',
 'The third column is not retrieval and cannot be made into retrieval. A red line is a '
 'statement that the ministry would accept no agreement rather than cross a particular point, '
 'and no file contains such a statement until somebody with authority makes it for this round, '
 'this issue and this counterpart. Standing positions imply limits in a loose sense and do not '
 'decide them, which is a distinction that survives being argued about and does not survive '
 'being ignored.',
 'Asked to produce the column anyway, any method will produce the only thing available: a form '
 'of words with the shape of a limit. The ministry cannot accept any arrangement which '
 'prejudices its position is a perfectly good sentence that cannot be applied to a '
 'formulation at ninety seconds’ notice. What a head of delegation does with an untestable '
 'red line is decline, every time, because declining is the only safe response to a limit you '
 'cannot locate, and the cost of that is invisible: an opportunity refused, no error recorded, '
 'nobody at fault.',
 'So leave the column empty where nobody has decided, and send the empty column to the person '
 'with authority on that issue. Two things then surface that a full column concealed. The '
 'first is that on most issues nobody has ever been asked who sets the limit. The second is '
 'that a named limit can be exceeded and traced, while a sentence about prejudicing a position '
 'cannot, which is why such sentences have survived for a generation and why their replacement '
 'is resisted by the people who would have to sign the replacements.'],
dp1=('Round preparation',
     'Treaty sections in several foreign services automated the assembly of positions and '
     'fallbacks with precedent references in 2025, while requiring red lines to be set and '
     'signed by the authority competent for each issue.',
     'Source: reported practice in diplomatic negotiation preparation, 2025–2026.'),
e_a=[('What are the three columns?', 'the opening position, the fallback and the limit'),
     ('Why are the first two retrieval?', 'the opening position is on the record and the fallback has been accepted elsewhere'),
     ('Why does referencing matter?', 'because a fallback with a precedent attached can be defended in the room'),
     ('What does a head of delegation do with an untestable red line?', 'decline, because declining is the only safe response'),
     ('What two things surface when the column is left empty?', 'that nobody has decided who sets the limit, and that a named limit can be traced')],
e_b=[('A fallback is usually unprecedented.', 'F'),
     ('Standing positions decide limits.', 'F'),
     ('An untestable red line produces acceptance.', 'F'),
     ('The cost of declining is visible.', 'F'),
     ('A named limit can be traced.', 'T'),
     ('Replacement is resisted by those who would sign.', 'T')],

w_model=(
 'Purpose: assemble the opening position and the fallback for each of the 22 issues, with '
 'references, so that the delegation can prepare the round and the authorities can set the '
 'limits. Scope: the 22 issues listed for the 5th round; the red line column is out of scope '
 'and is to be left empty. Inputs: the reports of the 4 previous rounds and the Ministry’s '
 'instrument collection. Criteria: for each issue give the position stated at the end of the '
 'last round with its report reference; give 1 fallback that the Ministry has accepted in a '
 'concluded instrument, with the instrument and article; where no such instrument exists, '
 'leave the fallback empty and say so; propose no red line and no form of words for one. Done: '
 '1 table of 22 rows with 2 columns completed and the third empty, within 1 working day. '
 'Fallback: where the position at the end of the last round cannot be established from the '
 'reports, leave the cell empty and name the report that should have recorded it.'),
w_fig=figs.spec_card('THE TASKING FOR A ROUND BRIEF',
                     [('Purpose', 'positions and fallbacks ready; limits left for the authorities'),
                      ('Scope', 'the 22 issues; the red line column excluded'),
                      ('Inputs', 'the 4 round reports and the instrument collection'),
                      ('Criteria', 'last stated position with reference; 1 precedented fallback; no red lines'),
                      ('Done', '22 rows, 2 columns, the third empty, within 1 working day'),
                      ('Fallback', 'position untraceable: empty, and name the report at fault')]),
w_fig_cap='Propose no red line and no form of words for one: the second half of that clause is the one that matters.',
w_task='Write a tasking for preparing a negotiation or meeting in your own work.',
w_steps=['Say what the preparation enables and who completes it.',
         'Name the issues and exclude the decided column.',
         'Require a reference for every position and fallback.',
         'Forbid the proposing of a limit or words for one.',
         'Say what happens where a cell cannot be filled.'],
w_bank=['Assemble … so that … can … and … can …',
        'Cover … ; … is out of scope and is to be …',
        'Work from … and …',
        'For each issue give … with … ; give 1 … that … , with … ; where no … exists, … ; propose no … and no …',
        'Where … cannot be established … , leave the cell empty and name …'],
w_check=['Is the red line column excluded by name?',
         'Is a form of words for a limit also forbidden?',
         'Must every fallback carry an instrument and article?',
         'Is an empty cell required rather than a generalisation?'],

t_title='Positions, fallbacks and red lines',
t_fig=figs.split('A ROUND BRIEF',
                 'Assembles',
                 ['the position stated last round',
                  'a fallback accepted elsewhere',
                  'the reference for each',
                  '22 issues in an afternoon'],
                 'Cannot assemble',
                 ['the limit for this round',
                  'who has authority to set it',
                  'what the limit is worth in this room',
                  'a limit a delegate can test in 90 seconds']),
t_fig_cap='The left column is referenced retrieval. The right column needs a person with authority.',
t_body=[
 'Two of the three columns in a round brief are retrieval and should be treated as such. The '
 'opening position is the position stated at the end of the last round, which is in the '
 'report. The fallback is almost always something the Ministry has accepted in a concluded '
 'instrument, which the collection can find. Twenty-two issues, an afternoon, a reference '
 'against every cell, and a fallback with a precedent attached is a fallback a delegate can '
 'defend aloud.',
 'The third column is a decision and not a record. A red line says the Ministry would accept '
 'no agreement rather than cross a point, and nothing in any file says that until somebody '
 'with authority says it for this round, this issue and this counterpart. Standing positions '
 'imply limits loosely; they do not decide them.',
 'Ask for the column anyway and you will get the only thing available, which is a sentence '
 'shaped like a limit: the Ministry cannot accept any arrangement which prejudices its '
 'position. In a room, at ninety seconds’ notice, that cannot be applied, and a head of '
 'delegation facing an untestable limit declines, every time, at a cost nobody records. So '
 'leave the column empty, send it to whoever has authority on that issue, and expect two '
 'discoveries: that on most issues nobody has ever decided who that is, and that a named limit '
 'can be traced to the person who named it, which is why the vague sentence has lasted a '
 'generation.'],
t_say=[('Exclude the decision: ', 'The red line column is out of scope and is to be left empty.'),
       ('Reference the fallback: ', 'Fallback: the 2018 instrument, article 6, with a cap.'),
       ('Make it testable: ', 'No access for inspectors nominated by a third State.')],
t_bound=('An assembled brief can give what the Ministry has said and what it has accepted '
         'elsewhere. It cannot give a limit, because a limit is a decision rather than a '
         'record, and asked for one it will supply a form of words that a delegate cannot '
         'apply. An untestable red line does not produce a mistake; it produces a refusal, '
         'which costs an opportunity and leaves no trace.'),
t_a=[('The red line column is out of scope and is to be left ____________.', 'empty'),
     ('Fallback: the 2018 instrument, article 6, with a ____________.', 'cap'),
     ('No access for inspectors nominated by a third ____________.', 'State'),
     ('Standing positions imply limits loosely; they do not ____________ them.', 'decide'),
     ('A sentence ____________ like a limit.', 'shaped'),
     ('It produces a ____________, which costs an opportunity.', 'refusal')],
t_b_rubric='Unpack each noun phrase so that it has one reading.',
t_b=[('third-party inspection access rights', 'rights of access for inspectors nominated by a third State'),
     ('inspection cost allocation arrangements', 'the arrangements by which the costs of an inspection are allocated'),
     ('binding 2027 fee review requirement', 'a requirement that the Parties review the fee in 2027, the review being binding'),
     ('delegation authority limit questions', 'questions about the limits of the delegation’s authority')],

case=dict(
 title='The Decision Room · Seventeen empty cells',
 brief=[
  'The red line column has gone out empty on twenty-two issues. Five have come back signed by '
  'the competent authority. Seventeen have not, and the round begins in four days.',
  'On the seventeen, nobody has previously decided who the competent authority is.',
  'Samir wants the seventeen escalated to the Deputy Minister as a block. Faris Said says he '
  'would rather go into the round with seventeen empty cells than with seventeen limits '
  'decided in an afternoon by somebody who has not read the files. Hana points out that empty '
  'cells mean telephoning the capital during sessions.'],
 exhibit=figs.datatable('THE 22 ISSUES, 4 DAYS OUT',
                        ['', 'Figure', 'Note'],
                        [['issues in the round', '22', '—'],
                         ['red lines signed', '5', '3 Deputy Minister, 2 Minister'],
                         ['issues with no identified authority', '17', '—'],
                         ['of those, issues likely to arise', '6', 'delegation’s estimate'],
                         ['time difference with the round', '3 hours', 'telephoning is possible'],
                         ['rounds in which a limit was tested', '2 of the last 9', '—']]),
 exhibit_cap='Seventeen unassigned issues, of which six are expected to arise.',
 exhibit_note='In the last 9 rounds a red line was actually tested twice; on both occasions the '
              'delegation telephoned the capital.',
 voices=[('Samir Haddad', 'Legal and Treaties',
          'Escalate all seventeen to the Deputy Minister now. Four days is enough for six of '
          'them and the other eleven can be assigned without being decided.'),
         ('Ambassador Faris Said', 'Head of Mission, Astrene',
          'Decide the six that will arise and leave eleven empty. A limit decided in a hurry by '
          'somebody who has not read the file is worse than a telephone call, because I will '
          'rely on it.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Then the empty cells need a procedure, not just emptiness. Who answers the telephone '
          'at eleven at night, and what happens if they cannot be reached in the four minutes '
          'the room allows?')],
 steps=[('Find it', 'How many issues have no identified authority?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Faris prefer an empty cell to a hurried limit?'),
        ('Weigh it', 'Coverage against the quality of a limit.'),
        ('Decide', 'What goes into the round, and what procedure covers the gaps?')],
 analysis=[('Find it. How many of the seventeen are expected to arise?', 'six'),
           ('Compare it. What does Samir propose?', 'escalating all seventeen to the Deputy Minister'),
           ('Infer it. What is Faris’s reason?', 'that he would rely on a hurried limit, which is worse than telephoning'),
           ('Weigh it. How often has a red line been tested?', 'twice in the last nine rounds, and both times the capital was telephoned'),
           ('Decide. What would you do?', 'answers vary; deciding the six and writing a reach-back procedure covers both concerns')],
 decision='Write what is decided before the round and what covers the rest.',
 decision_steps=['Say which red lines are decided before the round.',
                 'Say who is named as the authority for each remaining issue.',
                 'Say what the delegation does where a cell is empty.',
                 'Say what happens if the authority cannot be reached in time.'],
 bank=['The red lines for … are decided by … before …',
       'For each remaining issue, the authority is …',
       'Where a cell is empty, the delegation is to …',
       'If the authority cannot be reached within … , the delegation is to …',
       'This is reviewed …'],
 outcome='The six expected issues were decided and signed; the other eleven were assigned to a '
         'named authority without a limit being set; and a reach-back procedure was written: '
         'where a cell is empty the delegation is to seek instructions, and if the authority '
         'cannot be reached within thirty minutes it is to reserve the Ministry’s position and '
         'report. In the round two empty cells arose; one was answered by telephone in eleven '
         'minutes and one was reserved. Samir, who had wanted all seventeen escalated, says '
         'Faris was right about hurried limits and that the reach-back procedure was the part '
         'he had not thought of at all, because he had been treating an empty cell as a failure '
         'rather than as a state the delegation could operate in.',
 outcome_q=[('What covers an empty cell?', 'seeking instructions, and reserving the position if the authority cannot be reached in thirty minutes'),
            ('What had Samir been getting wrong?', 'treating an empty cell as a failure rather than a state the delegation could operate in')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Prepare the round brief',
 task=['This is the instruction Samir gave in July, when he directed that all three columns be '
       'assembled.',
       'It produced eleven red lines that no head of delegation could apply to a formulation.'],
 draft=['Prepare the round brief for the issues in the next round.',
        'Give our position, our fallback and our red line on each.',
        'Draw on the previous rounds and our agreements.',
        'Keep each entry short.',
        'Flag anything difficult.',
        'In time for the delegation to read it.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the second asks for a decision from a set of documents.',
 asked=['Positions and fallbacks with references',
        'The red line column left empty',
        'Empty cells where a source is missing'],
 back=['22 positions and 22 fallbacks, referenced',
       '11 red lines expressed as general sentences',
       'No indication which cells were decided by anybody'],
 gap='"Our red line on each" asks for a decision no file contains, "the issues in the next '
     'round" does not number them, "keep each entry short" favours a sentence over a '
     'formulation, and "anything difficult" sets no test.',
 back_cap='A complete brief in which eleven of twenty-two limits could not be tested in a room.',
 back_note='Line two is the failure, and line four makes it worse: a short entry is where a '
           'general sentence beats a testable formulation.',
 diagnosis=[('[1] "the issues in the next round" — how many, and listed where?', 'unbounded quantity'),
            ('[2] "our red line on each" — decided by whom, and recorded where?', 'undefined done'),
            ('[3] "draw on the previous rounds and our agreements" — how far back, and how many?', 'unbounded quantity'),
            ('[4] "keep each entry short" — and if a limit needs a formulation?', 'missing condition'),
            ('[5] "flag anything difficult" — flagged to whom, and done when?', 'undefined done'),
            ('[6] "in time for the delegation to read it" — and if an authority has not replied?', 'missing condition')],
 rewrite='Rewrite the instruction so that the red line column is excluded and nothing is '
         'invented.',
 scaffold=['What the brief enables and who completes the rest',
           'The issues covered and the column excluded',
           'The round reports and the instrument collection',
           'Last stated position with reference; one precedented fallback; no red line and no words for one',
           'The table, the empty column, and by when',
           'What to do where a position cannot be established'],
 bank=['Assemble … so that … can … and … can …',
       'Cover … ; … is out of scope and is to be left …',
       'Work from … and …',
       'For each issue give … ; give 1 … with … ; where no … exists, … ; propose no … and no …',
       'Return 1 table of … rows with … , within …',
       'Where … cannot be established, leave … and name …'],
 check=['Is the red line column excluded?',
        'Is inventing a form of words for a limit forbidden?',
        'Does every fallback carry a reference?',
        'Is an empty cell required where a source is missing?'],
 model=['Assemble the opening position and the fallback for each of the 22 issues, with references, so that the delegation can prepare the round and the authorities can set the limits',
        'The 22 issues listed for the 5th round; the red line column is out of scope and is to be left empty',
        'The reports of the 4 previous rounds and the Ministry’s instrument collection',
        'For each issue give the position stated at the end of the last round with its report reference; give 1 fallback that the Ministry has accepted in a concluded instrument, with the instrument and article; where no such instrument exists, leave the fallback empty and say so; propose no red line and no form of words for one',
        '1 table of 22 rows with 2 columns completed and the third empty, within 1 working day',
        'Where the position at the end of the last round cannot be established from the reports, leave the cell empty and name the report that should have recorded it'],
 cost='1 formulation on inspection access declined in the room although it was well inside the '
      'Ministry’s limit, with no record of the refusal and no second opportunity.'),

rev_fig=figs.split('NOUN PHRASES',
                   'Stacked',
                   ['third-party inspection access rights',
                    'inspection cost allocation arrangements',
                    'binding 2027 fee review requirement',
                    'delegation authority limit questions'],
                   'Unpacked',
                   ['rights of access for third-State inspectors',
                    'the arrangements by which costs are allocated',
                    'a requirement that the Parties review the fee',
                    'questions about the limits of authority']),
rev_fig_cap='The head noun is last; beyond three modifiers, unpack with of and for.',
rev=dict(
 read=[('Two columns of a round brief are', ['decisions', 'retrieval', 'opinions', 'forecasts'], 1),
       ('A red line is', ['a record', 'a decision', 'a precedent', 'a position'], 1),
       ('A head of delegation with an untestable red line will', ['accept', 'decline', 'telephone', 'ignore it'], 1),
       ('In the Decision Room, what covered the empty cells?', ['nothing', 'a reach-back procedure', 'a new brief', 'a sentence'], 1)],
 listen_text='A red line says the Ministry would accept no agreement rather than cross a '
             'point, and nothing in any file says that until somebody with authority says it '
             'for this round, this issue and this counterpart. Standing positions imply limits '
             'loosely; they do not decide them.',
 listen=[('Accept no agreement rather than ____________ a point.', 'cross'),
         ('Until somebody with ____________ says it.', 'authority'),
         ('This round, this issue and this ____________.', 'counterpart'),
         ('They do not ____________ them.', 'decide')],
 speak=['State a position, a fallback and a limit on one issue in your work.',
        'Say which of the three somebody else must decide.'],
 write='Write one limit that a colleague could test in ninety seconds.',
 vocab=[('The point at which a side would rather have no agreement is a ____________.', 'walk-away point'),
        ('The distance between an opening position and a limit is a ____________.', 'negotiating margin'),
        ('The step of confirming what a delegation may do is a ____________.', 'mandate check'),
        ('The power to bind the state to a final text is an ____________.', 'authority to conclude'),
        ('The order in which movements are to be made is a ____________.', 'sequencing of concessions')],
 gram=[('Rights of access ____________ inspectors nominated by a third State.', 'for'),
       ('The arrangements ____________ which the costs are allocated.', 'by'),
       ('A requirement ____________ the Parties review the fee in 2027.', 'that'),
       ('Questions about the limits ____________ the delegation’s authority.', 'of'),
       ('The allocation ____________ costs between the Parties.', 'of')]),

found=['Write your opening position and fallback on one issue, with a reference for each.',
       'Leave the limit blank and find out who would decide it.',
       'Unpack one stacked noun phrase from a document you use.',
       'Ask what your office does when nobody can be reached.'],
end_line='An untestable limit does not produce a mistake; it produces a refusal.',
end_next='Next: Somebody Else’s Voice',
)
