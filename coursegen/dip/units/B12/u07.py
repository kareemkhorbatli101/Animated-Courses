# -*- coding: utf-8 -*-
import figs

U = dict(
num=7,
title='A New Law Nobody Has Read',
gram='contrast: although, however, whereas',
ai='reading legislation you have no time to read',
strap='CEFR B1 · Grammar: contrast: although, however, whereas · '
      'AI: reading legislation you have no time to read',
cando=['express contrast accurately with although, however and whereas',
       'describe how a new law is made and when it takes effect',
       'find the clauses in a long text that affect my work',
       'say why a summary of a law is not a legal opinion',
       'write a six-line note on a new regulation'],

hero=('NINETY-ONE PAGES, ELEVEN MINUTES, AND ONE SUBSECTION THAT MATTERED',
      ['The summary was clear, accurate and arranged by chapter.',
       'The clause that affected our nationals was in a schedule at the back.'],
      [(720, 'grey', 'short'), (720, 'blue', 'short'), (720, 'teal', 'long')]),
hero_cap='A printed act on a desk, with a sticky note on page eighty-seven.',

warm=['How do you find out whether a new law affects you?',
      'Who reads a ninety-page law in your organisation?',
      'What is the difference between a summary and advice?'],

read=[
 'A new law reaches a mission as an announcement, a rumour and then a text. The '
 'announcement is short, the rumour is confident, and the text is ninety-one pages long and '
 'in the host language.',
 'Most of it will not matter to the Mission. Of ninety-one pages, perhaps two paragraphs '
 'will affect the people it serves: a registration requirement, a change to residence '
 'conditions, a fee that applies to foreign nationals.',
 'Finding those two paragraphs used to take a week, or it did not happen. Officers relied '
 'on the announcement, on what a counterpart said, and on finding out when somebody was '
 'refused something at a counter.',
 'Ziad now gives the text to a system and asks a specific question: which provisions apply '
 'to foreign nationals resident in the country? The answer comes back in eleven minutes, '
 'with the section numbers, and it is usually right.',
 'In April it missed one. The provision was not in a chapter about foreigners; it was in a '
 'schedule at the back, amending a different act from 2014. The summary was accurate about '
 'what it had read, and the schedule was not where it looked.'],

dp1=('Why summaries are not opinions', 'Legal practice commonly distinguishes a summary, '
     'which reports what a text appears to say, from an opinion, which states what the law '
     'requires in a given case, and treats only the second as a basis for advising a person.',
     'Source: reported legal practice, 2025–2026.'),

c_a=[('How does a new law reach a mission?', 'as an announcement, a rumour and then a text'),
     ('How long is the act?', 'ninety-one pages'),
     ('How much of it matters to the Mission?', 'perhaps two paragraphs'),
     ('What question does Ziad ask?', 'which provisions apply to foreign residents'),
     ('How long does the answer take?', 'eleven minutes'),
     ('Where was the missed provision?', 'in a schedule at the back, amending a 2014 act')],

c_b=[('Most of a new law affects a mission.', 'F'),
     ('Officers used to learn of changes at a counter.', 'T'),
     ('The summary took a week.', 'F'),
     ('The summary was inaccurate about what it read.', 'F'),
     ('Schedules can amend other acts.', 'T'),
     ('The announcement is usually long.', 'F')],

c_c=[('____________ the summary was accurate, it missed one schedule.', 'Although'),
     ('The chapter was clear. ____________, the schedule was not examined.', 'However'),
     ('The main text concerns residents, ____________ the schedule amends a 2014 act.', 'whereas'),
     ('____________ long, the act affects us in two paragraphs only.', 'Although'),
     ('The fee applies to foreign nationals. ____________, students are exempt.', 'However'),
     ('Chapter 4 is about registration, ____________ chapter 5 is about fees.', 'whereas')],

c_d=[('Although introduces ( a new sentence / a contrast within one sentence ).', ['a new sentence', 'a contrast within one sentence'], 1),
     ('However usually begins ( a new sentence / a subordinate clause ).',
      ['a new sentence', 'a subordinate clause'], 0),
     ('Whereas sets ( two things side by side / a condition ).',
      ['two things side by side', 'a condition'], 0),
     ('The summary was ( accurate about what it read / careless ).',
      ['accurate about what it read', 'careless'], 0),
     ('A summary is ( not a legal opinion / the same as advice ).',
      ['not a legal opinion', 'the same as advice'], 0)],

c_e=('Although, however or whereas? Put each sentence in the right column.',
     [('Although it was accurate, it missed one schedule.', 'although'),
      ('It was accurate. However, it missed one schedule.', 'however'),
      ('Chapter 4 concerns fees, whereas chapter 5 concerns registration.', 'whereas'),
      ('Although the act is long, two paragraphs matter.', 'although'),
      ('The fee applies. However, students are exempt.', 'however'),
      ('Residents must register, whereas visitors need not.', 'whereas')],
     ['although', 'however', 'whereas']),

v_fig_title='HOW A LAW ARRIVES',
v_fig=[('doc', 'a bill'), ('key', 'a commencement date'), ('chart', 'a schedule'),
       ('clock', 'a transitional provision'), ('people', 'a consultation'), ('door', 'a gazette')],
v_fig_cap='Six words for the ninety-one pages that reach a mission as a rumour.',

vocab=[
 ('a bill', 'a proposed law, before it has been passed'),
 ('an act', 'a law that has been passed by a legislature'),
 ('a decree', 'a rule made by an executive authority rather than a legislature'),
 ('a regulation', 'a detailed rule made under the authority of an act'),
 ('a commencement date', 'the date on which a law takes effect'),
 ('a transitional provision', 'a rule governing cases that span the change in the law'),
 ('a repeal', 'the removal of an existing law'),
 ('an amendment', 'a change made to a text, often of another law'),
 ('a schedule', 'a part at the end of an act carrying detail or amendments'),
 ('a subsection', 'a numbered division within a section of a law'),
 ('an explanatory memorandum', 'an official document explaining the purpose of a text'),
 ('a consultation', 'the process of inviting views before a rule is made'),
 ('a gazette', 'the official publication in which laws and notices appear'),
 ('a legal opinion', 'formal advice from a qualified lawyer on what the law requires'),
 ('a precedent', 'an earlier decision used as a guide in later cases'),
 ('a statutory instrument', 'a rule made under a power given by an act'),
 ('an implementing rule', 'a rule setting out how a law is to be applied in practice'),
 ('a grandfather clause', 'a provision allowing existing cases to continue under the old rule'),
 ('a sunset provision', 'a provision under which a rule ends on a stated date'),
 ('a compliance deadline', 'the date by which those affected must comply')],

v_a=[('The date on which a law takes effect is a ____________ date.', 'commencement'),
     ('A rule governing cases that span the change is a ____________ provision.', 'transitional'),
     ('A part at the end of an act carrying amendments is a ____________.', 'schedule'),
     ('The official publication for laws and notices is a ____________.', 'gazette'),
     ('A provision allowing existing cases to continue is a ____________ clause.', 'grandfather'),
     ('A provision under which a rule ends is a ____________ provision.', 'sunset'),
     ('Formal advice on what the law requires is a legal ____________.', 'opinion'),
     ('The date by which people must comply is a ____________ deadline.', 'compliance')],

v_b=[('A bill is a proposed law,', 'before it has been passed.'),
     ('A regulation is a detailed rule made', 'under the authority of an act.'),
     ('An explanatory memorandum is an official document', 'explaining the purpose of a text.'),
     ('A statutory instrument is a rule made', 'under a power given by an act.'),
     ('A precedent is an earlier decision used', 'as a guide in later cases.')],

g_title='Grammar: contrast: although, however, whereas',
g_rule=['Although + clause, in one sentence: Although it was accurate, it missed a schedule.',
        'However begins a new sentence and takes a comma: However, it missed a schedule.',
        'Whereas sets two statements side by side: Chapter 4 concerns fees, whereas 5 concerns registration.',
        'Do not use but and although together in the same sentence.'],
g_fig=('WRONG',
       ['Although it was accurate, but it missed a schedule.',
        'It was accurate, however it missed a schedule.',
        'Although long, however two paragraphs matter.',
        'Residents must register whereas, visitors need not.'],
       'RIGHT',
       ['Although it was accurate, it missed a schedule.',
        'It was accurate. However, it missed a schedule.',
        'Although the act is long, two paragraphs matter.',
        'Residents must register, whereas visitors need not.'],
       'four contrasts with doubled or misplaced connectors',
       'the same four, punctuated as English punctuates them'),
g_fig_cap='However takes a full stop before it. Although takes a comma after its clause.',

g_a=[('____________ the summary was accurate, it missed a schedule.', 'Although'),
     ('It was accurate. ____________, it missed a schedule.', 'However'),
     ('Chapter 4 concerns fees, ____________ chapter 5 concerns registration.', 'whereas'),
     ('____________ the act is long, two paragraphs matter to us.', 'Although'),
     ('The fee applies to foreigners. ____________, students are exempt.', 'However'),
     ('Residents must register, ____________ visitors need not.', 'whereas'),
     ('____________ we asked the right question, we asked it of the wrong part.', 'Although'),
     ('The chapter was examined. ____________, the schedule was not.', 'However'),
     ('Our nationals are affected, ____________ tourists are not.', 'whereas')],

g_b=[('( Although / Although but ) it was accurate, it missed a schedule.', ['Although', 'Although but'], 0),
     ('It was accurate. ( However, / however ) it missed a schedule.',
      ['However,', 'however'], 0),
     ('Chapter 4 concerns fees, ( whereas / however ) chapter 5 concerns registration.',
      ['whereas', 'however'], 0),
     ('( Although the act is long / Although long the act ), two paragraphs matter.',
      ['Although the act is long', 'Although long the act'], 0),
     ('Residents must register, ( whereas visitors need not / whereas, visitors need not ).',
      ['whereas visitors need not', 'whereas, visitors need not'], 0),
     ('( However / Although ), it missed a schedule.', ['However', 'Although'], 0)],

d1=dict(
 title='Eleven minutes and the wrong chapter',
 fig=(['Which provisions apply to our nationals?', 'Eleven minutes, with section numbers.'],
      ['And was it right?', 'About everything it read.']),
 cap='Ziad Mikhail and Rim Haddad, over a ninety-one-page act.',
 lines=[('Ziad', 'I asked which provisions apply to foreign residents.'),
        ('Rim', 'And?'),
        ('Ziad', 'Eleven minutes. Four provisions, with section numbers. All four correct.'),
        ('Rim', 'And the fifth?'),
        ('Ziad', 'There is a fifth?'),
        ('Rim', 'Schedule 3, paragraph 9. It amends the residence act of 2014.'),
        ('Ziad', 'Which is a different law entirely.'),
        ('Rim', 'Which is where governments put the things that affect people like ours.'),
        ('Ziad', 'Not deliberately.'),
        ('Rim', 'Not deliberately. Schedules are where consequential amendments live, and they are at the back.'),
        ('Ziad', 'So I ask the question again, naming the schedules.'),
        ('Rim', 'And the explanatory memorandum, which usually lists what has been amended.')],
 a=[('What did Ziad ask?', 'which provisions apply to foreign residents'),
    ('How many did he get?', 'four, all correct'),
    ('Where was the fifth?', 'in schedule 3, paragraph 9'),
    ('What does that schedule do?', 'it amends the residence act of 2014'),
    ('What else should he ask for?', 'the explanatory memorandum')],
 b=[('All four ____________.', 'correct'),
    ('It ____________ the residence act of 2014.', 'amends'),
    ('Schedules are where consequential ____________ live.', 'amendments'),
    ('Naming the ____________.', 'schedules')]),

d2=dict(
 title='A summary is not an opinion',
 fig=(['Can I tell the family what it means?', 'You can tell them what it says.'],
      ['Is that not the same?', 'No. And a court knows the difference.']),
 cap='Ziad and Dr Suhair Kanaan, about what the Mission may say.',
 lines=[('Ziad', 'May I tell a family what the new law means for them?'),
        ('Dr Kanaan', 'You may tell them what the text says, and where to read it.'),
        ('Ziad', 'That seems a small difference.'),
        ('Dr Kanaan', 'It is the whole difference. One is reporting; the other is advising.'),
        ('Ziad', 'And if the summary is right?'),
        ('Dr Kanaan', 'Then it is a right summary and still not an opinion on their case.'),
        ('Ziad', 'They will ask me what to do.'),
        ('Dr Kanaan', 'They will. You give them the text, the date, and the list of local lawyers.'),
        ('Ziad', 'That feels unhelpful.'),
        ('Dr Kanaan', 'It is far more helpful than a confident sentence that is wrong about their case.'),
        ('Ziad', 'Although the summary is useful to us.'),
        ('Dr Kanaan', 'Extremely. Internally. And what do we do when the lawyers all disagree?')],
 unresolved=True,
 a=[('What may Ziad tell a family?', 'what the text says, and where to read it'),
    ('What is the difference?', 'reporting against advising'),
    ('Is a right summary an opinion?', 'no'),
    ('What does he give them instead?', 'the text, the date and a list of lawyers'),
    ('Where is the summary useful?', 'internally')],
 b=[('One is reporting; the other is ____________.', 'advising'),
    ('Still not an opinion on their ____________.', 'case'),
    ('The text, the ____________, and the list of lawyers.', 'date'),
    ('Extremely. ____________.', 'Internally')]),

speak=[('Contrast it',
        ['Make nine contrasting statements about your work.',
         'Three with although, three with however, three with whereas.',
         'Your partner corrects the punctuation aloud.']),
       ('Find the clause',
        ['Describe a rule that affects your work and where it is written.',
         'Your partner asks which section and which date it took effect.',
         'Say what you would check before relying on it.']),
       ('Says or means',
        ['Read out four statements about a rule.',
         'Your partner sorts them into what it says and what it means.',
         'Decide which you could tell a member of the public.'])],

ext_title='A good summary of a law is accurate about what it read, and schedules are at the back',
ext_fig=figs.datatable('NINETY-ONE PAGES',
                       ['Part', 'Pages', 'Affects our nationals?'],
                       [['chapters 1 to 3, general', '34', 'no'],
                        ['chapter 4, registration', '12', 'yes, 2 provisions'],
                        ['chapter 5, fees', '9', 'yes, 1 provision'],
                        ['chapters 6 to 8', '21', 'no'],
                        ['schedule 1, repeals', '6', 'no'],
                        ['schedule 3, amendments', '9', 'yes, 1 provision, missed']]),
ext_fig_cap='Four provisions found in the chapters, and the fifth in a schedule that amends another act.',
ext=[
 'Nobody at a mission reads a ninety-one-page act. There is no time, it is in the host '
 'language, and ninety of the pages are irrelevant. Before, the Mission learned what a law '
 'required when a national was refused something at a counter.',
 'Asking a system a specific question changes that completely. Which provisions apply to '
 'foreign nationals resident here? Eleven minutes, with section numbers, usually right. '
 'That is a transformation in a part of the work that was simply not being done.',
 'The weakness is structural and worth understanding. A long act has chapters, which are '
 'where the subject matter lives, and schedules at the back, which are where consequential '
 'amendments to other laws are put.',
 'A question about this act may therefore be answered accurately and still miss a provision '
 'that changes a different act. Governments do not do this to hide anything. It is simply '
 'how legislation is assembled, in every country.',
 'So ask the question three times. Once about the chapters, once naming the schedules, and '
 'once about the explanatory memorandum, which usually lists every other law amended. Then '
 'remember that all of this is reporting, and that advice about a person’s case is not '
 'something a mission gives at all.'],

dp2=('Where consequential amendments live', 'Drafting convention commonly places '
     'amendments to other legislation in schedules at the end of an act, so that a reader '
     'examining the substantive chapters alone may not encounter changes that affect them '
     'directly.',
     'Source: reported legislative drafting practice, 2025–2026.'),

e_a=[('Why did nobody read the act before?', 'no time, the host language, and ninety irrelevant pages'),
     ('How did the Mission used to learn?', 'when a national was refused something at a counter'),
     ('What does a specific question produce?', 'provisions with section numbers, in minutes'),
     ('Where do consequential amendments live?', 'in schedules at the back'),
     ('How many times should the question be asked?', 'three: chapters, schedules, memorandum')],
e_b=[('Missions routinely read whole acts.', 'F'),
     ('A specific question gives section numbers.', 'T'),
     ('Schedules hide things deliberately.', 'F'),
     ('An explanatory memorandum lists amended laws.', 'T'),
     ('A summary is advice.', 'F'),
     ('Missions give legal advice on individual cases.', 'F')],

w_model='Purpose: so that the consular section knows what changed for our nationals, and '
        'what it may say about it. Scope: the act of 3 April; the implementing rules are '
        'not yet published and are excluded. Inputs: the text of the act, its schedules and '
        'the explanatory memorandum. Criteria: 6 lines giving each affected provision by '
        'section number, what it changes, the commencement date, any transitional '
        'provision, what the Mission may say, and where a person should go for advice. '
        'Done: 6 lines in the consular file by 10 April. Fallback: where the effect is '
        'unclear, the line says unclear and names the question to be put to a lawyer.',
w_fig=figs.spec_card('SIX LINES ON NINETY-ONE PAGES',
                     [('Purpose', 'what changed, and what we may say about it'),
                      ('Scope', 'the act of 3 April; implementing rules excluded'),
                      ('Inputs', 'the act, its schedules, the explanatory memorandum'),
                      ('Criteria', 'section, change, date, transition, what we may say, where to go'),
                      ('Done', 'in the consular file by 10 April'),
                      ('Fallback', 'unclear: say so and name the question for a lawyer')]),
w_fig_cap='The fifth line is the one that keeps a mission out of the business of giving advice.',
w_task='Write a six-line note on a new rule that affects your work.',
w_steps=['Line 1: the instrument, its date and where it was published.',
         'Line 2: the provision that affects you, by section and subsection.',
         'Line 3: what it changes, in one sentence of plain English.',
         'Line 4: the commencement date and any transitional provision.',
         'Line 5: what your organisation may say about it, and what it may not.',
         'Line 6: where a person should go for advice on their own case.'],
w_bank=['Act … of 3 April, gazette of … .',
        'Section …(2) and schedule 3, paragraph 9.',
        'From 1 July, foreign residents must … .',
        'Those registered before 1 July continue under the old rule until … .',
        'The Mission may state what the text says; it does not advise on individual cases.'],
w_check=['Is every provision identified by number?',
         'Is the commencement date given?',
         'Does line 5 say what may not be said?',
         'Does line 6 name a route, not a person?'],

t_title='Reading legislation you have no time to read',
t_fig=figs.split('A NINETY-ONE-PAGE ACT',
                 'Ask three questions',
                 ['which chapters affect foreign residents',
                  'which schedules amend other acts',
                  'what the explanatory memorandum lists',
                  'what the commencement dates are'],
                 'Then remember',
                 ['this is a summary, not an opinion',
                  'implementing rules may change it',
                  'a transitional provision may apply',
                  'advice on a case comes from a lawyer']),
t_fig_cap='Three questions take about half an hour. Not asking them takes a year and a refusal at a counter.',
t_body=[
 'Reading legislation you have no time to read begins with a specific question, not a summary. Which provisions of this act apply to foreign '
 'nationals resident in the country? Give me the section numbers. That question can be '
 'answered accurately, and it is answerable in minutes rather than a week.',
 'Then ask it twice more. Once naming the schedules, because consequential amendments live '
 'at the back and a question about this act may not reach them. Once about the explanatory '
 'memorandum, which usually lists every other law that has been amended.',
 'And hold the line between reporting and advising. What the text says, with section '
 'numbers and dates, is something a mission may tell anybody. What the law requires in a '
 'particular person’s case is a legal opinion, and that is not a mission’s to give.'],
t_say=[('Ask precisely: ', 'Which provisions apply to foreign residents? Give section numbers.'),
       ('Name the schedules: ', 'Now do the same for schedules 1 to 4.'),
       ('Hold the line: ', 'I can tell you what it says. I cannot tell you what to do.')],
t_bound='A summary of a statute reports what the text it was given appears to say. It does '
        'not know what the implementing rules will provide, how a court has read a similar '
        'provision, or what applies to one person’s circumstances.',
t_a=[('Which provisions apply to foreign ____________?', 'residents'),
     ('Give section ____________.', 'numbers'),
     ('Now do the same for ____________ one to four.', 'schedules'),
     ('I can tell you what it ____________.', 'says'),
     ('It does not know what the ____________ rules will provide.', 'implementing'),
     ('Or what applies to one person’s ____________.', 'circumstances')],
t_b_rubric='Say whether a mission may state each one.',
t_b=[('Section 12(2) requires registration from 1 July.', 'yes: it is what the text says'),
     ('You will have to register by July.', 'no: that is advice on a person’s case'),
     ('Schedule 3 amends the 2014 act.', 'yes: it is what the text says'),
     ('You will probably be exempt.', 'no: that is an opinion, and a prediction')],

case=dict(
 title='The Decision Room · The provision in schedule three',
 brief=[
  'A new act of ninety-one pages is published on 3 April. The Mission asks which provisions '
  'apply to foreign nationals resident in the country. Four are identified, with section '
  'numbers, in eleven minutes, and all four are correct.',
  'A fifth provision exists in schedule 3, paragraph 9, which amends the residence act of '
  '2014 and shortens a notice period from ninety days to thirty. It is not found, because '
  'the question was asked about this act and answered from its chapters.',
  'In June a national of our country gives ninety days’ notice on a residence matter, as '
  'the Mission’s note describes, and is told at a counter that the period is now thirty and '
  'that he is out of time.'],
 exhibit=figs.datatable('FIVE PROVISIONS, FOUR FOUND',
                        ['Provision', 'Where', 'Found?', 'Effect'],
                        [['registration', 'section 12', 'yes', 'new requirement'],
                         ['fee', 'section 31', 'yes', 'new fee'],
                         ['documents', 'section 14', 'yes', 'list changed'],
                         ['appeals', 'section 44', 'yes', 'route changed'],
                         ['notice period', 'schedule 3, para 9', 'no', '90 days becomes 30'],
                         ['consequence', '—', '—', '1 national out of time']]),
 exhibit_cap='Four of five provisions found in eleven minutes, and the fifth was the one with a deadline in it.',
 exhibit_note='The summary did not err. It reported what the chapters contained. The '
              'question had not reached the schedules, and nobody had asked it to.',
 voices=[('Ziad Mikhail', 'commercial attaché',
          'Eleven minutes for four correct provisions with section numbers. Before, we found out at a counter.'),
         ('Rim Haddad', 'consular assistant',
          'And this time we found out at a counter anyway, for the one that had a deadline.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'And a note of ours told him ninety days. We did not summarise badly; we published a summary as a rule.')],
 steps=[('Find it', 'Which provision was missed, and where was it?'),
        ('Compare it', 'What did the Mission publish and what was true?'),
        ('Infer it', 'Why did an accurate summary miss it?'),
        ('Weigh it', 'Two further questions against a national out of time.'),
        ('Decide', 'How is a statute examined, and what may be published?')],
 analysis=[('Find it. Which provision was missed?', 'the notice period, in schedule 3'),
           ('Compare it. What did the Mission publish?', 'that the period was ninety days'),
           ('Infer it. Why was it missed?', 'the question was asked about the chapters, not the schedules'),
           ('Weigh it. What did it cost?', 'a national lost his notice period'),
           ('Decide. What may be published?', 'what the text says, with section numbers, not what to do')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say how a new statute is examined.',
                 'Say what sources are used besides the chapters.',
                 'Say what may be published to the public.',
                 'Say what is said to a person asking about their own case.'],
 bank=['A new statute is examined by 3 separate questions: chapters, schedules, memorandum.',
       'The explanatory memorandum and the gazette notice are read in every case.',
       'The Mission publishes what the text says, with section numbers and dates.',
       'A person asking about their own case is given the text and a list of lawyers.'],
 outcome='The Mission writes to the host ministry about the individual case, which is '
         'resolved on its merits. Its own note is corrected and now carries section numbers '
         'and the words this is what the text says, not advice. Every new statute is now '
         'examined with three questions rather than one, which takes about half an hour, and '
         'the schedules have produced a relevant provision twice since.',
 outcome_q=[('What did the Mission do about the case?', 'wrote to the host ministry'),
            ('What does its note now carry?', 'section numbers and a statement that it is not advice'),
            ('How many questions are asked of a new statute?', 'three'),
            ('How long does that take?', 'about half an hour'),
            ('How often have schedules mattered since?', 'twice')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Find out what the new law means for us',
 task=['A new act was published and somebody had to say what it changed.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Find out what the new law means for us.',
        'Go through it properly.',
        'Summarise the relevant parts.',
        'Tell me what our people need to do.',
        'Keep it brief.',
        'I need it fairly soon.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and one of them asks an officer to give legal advice to the public.',
 asked=['What the law means', 'The relevant parts', 'What our people need to do'],
 back=['4 provisions', '1 missed in a schedule', '1 note published as guidance'],
 gap='Nobody said which parts to search, or that the Mission may not advise on cases.',
 back_cap='Four provisions found, one missed, and a summary published as if it were guidance.',
 back_note='Tell me what our people need to do converts a summary into advice in nine '
           'words, and a note written to answer it will be relied on as advice.',
 diagnosis=[('“what the new law means”', 'unstated exception'),
            ('“the relevant parts”', 'unstated exception'),
            ('“go through it properly”', 'undefined done'),
            ('“what our people need to do”', 'undefined done'),
            ('“keep it brief”', 'unbounded quantity'),
            ('“fairly soon”', 'unbounded quantity')],
 rewrite='Rewrite it on the six lines so that nothing is missed and nothing becomes advice.',
 scaffold=['why the Mission needs to know and who will rely on it',
           'which instrument, and what is excluded',
           'which parts of the text are searched, named',
           'what each entry must contain',
           'how long it is and when it is due',
           'what may be said to a person asking about their own case'],
 bank=['Purpose: so that the section knows what changed and what it may say',
       'Scope: the act of … ; implementing rules not yet published are excluded',
       'Inputs: the chapters, all schedules, and the explanatory memorandum',
       'Criteria: each provision by section number, with the change and the commencement date',
       'Done: … lines in the consular file by … ',
       'Fallback: a person asking about their own case is given the text and a list of lawyers'],
 check=['Are the schedules named as a source?',
        'Is the memorandum named as a source?',
        'Does every entry carry a section number?',
        'Does it say what may not be said?'],
 model=['so that the consular section knows what changed and what it may say about it',
        'the act of 3 April; the implementing rules are not yet published and are excluded',
        'the chapters, all 4 schedules, and the explanatory memorandum',
        'each affected provision by section number, with the change and the commencement date',
        '6 lines in the consular file by 10 April',
        'a person asking about their own case is given the text, the date and a list of lawyers'],
 cost='1 missed schedule cost 1 national his notice period and 1 correction to a published '
      'note. 2 further questions would have taken 20 minutes.'),

feet=dict(
 title='On Your Feet · A man who relied on your note',
 setting=[
  'A man is at the counter with a printout of the Mission’s note, which says the notice '
  'period is ninety days. He has given ninety days. He has been told at a government office '
  'that the period is now thirty and that he is too late.',
  'The note was the Mission’s, it was wrong, and he relied on it. You cannot give him legal '
  'advice, you cannot promise a remedy, and you cannot pretend the note was somebody else’s. '
  'You have about ninety seconds.'],
 ladder=[('Your note said ninety', 'accept the error at once'),
         ('So what do I do now?', 'the question you may not answer as advice'),
         ('You must fix this', 'the turn where he asks for the impossible')],
 cap='Three turns, and the first word has to be an admission.',
 turns=[('Turn 1 · Man', 'Your own note said ninety days. I have it here, printed from your page.'),
        ('Turn 2 · Man', 'So what am I supposed to do now?'),
        ('Turn 3 · Man', 'You caused this. You must fix it.')],
 holds=['The note is ours and it was wrong, and I am not going to argue about that.',
        'I cannot advise you on your case, and I will explain why that is not an excuse.',
        'What I can do is write to the department today, setting out what our note said.',
        'That letter is evidence you can use, and it is the most useful thing I have.',
        'Here is the list of lawyers, and here is the legal aid number, which works.',
        'And I will give you the corrected text, with the section number, so you have it in writing.'],
 redline='You must not advise him what to do, you must not promise that the department will '
         'accept anything, and you must not blame the drafting process or a system. Do not '
         'let him leave without the letter being promised with a time.',
 score=['Admitted the error in the first sentence, without qualification.',
        'Distinguished between advising and acting, and explained the limit once.',
        'Offered the one thing of real value: a letter stating what the note said.',
        'Gave two routes to actual advice.',
        'Put a time on the letter.'],
 a=[('What do you admit first?', 'that the note was the Mission’s and was wrong'),
    ('What may you not do?', 'advise him on his case'),
    ('What is the most useful thing you can offer?', 'a letter setting out what the note said'),
    ('What two routes do you give?', 'a list of lawyers and the legal aid number'),
    ('What must you not promise?', 'that the department will accept anything'),
    ('What must the letter carry?', 'a time')]),

rev_fig=figs.split('A NEW ACT',
                   'A note that will be relied on wrongly',
                   ['The new law means you must register.',
                    'You will need to act by July.',
                    'Most people will be exempt.',
                    'The notice period is ninety days.'],
                   'A note that reports',
                   ['Section 12(2) requires registration from 1 July.',
                    'Schedule 3, para 9, amends the 2014 act.',
                    'The notice period becomes 30 days on 1 July.',
                    'This states what the text says; it is not advice.']),
rev_fig_cap='Every line on the right carries a number and does not tell anybody what to do.',
rev=dict(
 read=[('How long is the act?', ['ninety-one pages', 'eleven pages', 'nine pages', 'four pages'], 0),
       ('Where was the missed provision?',
        ['in a schedule', 'in chapter 4', 'in the memorandum', 'in the gazette'], 0),
       ('How many questions are now asked of a statute?', ['three', 'one', 'five', 'none'], 0),
       ('What does a mission not give?',
        ['advice on an individual case', 'section numbers', 'dates', 'the text'], 0)],
 listen_text='Ask a specific question, not for a summary. Which provisions apply to foreign '
             'residents, with section numbers? Then ask it again naming the schedules, and '
             'again about the explanatory memorandum.',
 listen=[('Ask a ____________ question.', 'specific'),
         ('Which provisions apply to foreign ____________?', 'residents'),
         ('Ask it again naming the ____________.', 'schedules'),
         ('And again about the explanatory ____________.', 'memorandum')],
 speak=['Make nine contrasting statements with although, however and whereas.',
        'Then separate four statements into what a rule says and what it means.'],
 write='Write a six-line note on a new rule that affects your work.',
 vocab=[('The date a law takes effect is a ____________ date.', 'commencement'),
        ('A part at the end carrying amendments is a ____________.', 'schedule'),
        ('A provision under which a rule ends is a ____________ provision.', 'sunset'),
        ('Formal advice on what the law requires is a legal ____________.', 'opinion')],
 gram=[('____________ the summary was accurate, it missed a schedule.', 'Although'),
       ('It was accurate. ____________, it missed a schedule.', 'However'),
       ('Chapter 4 concerns fees, ____________ chapter 5 concerns registration.', 'whereas'),
       ('____________ the act is long, two paragraphs matter.', 'Although')]),

found=['Ask three questions of the next statute you need: chapters, schedules, memorandum.',
       'Put a section number beside every statement of law your section publishes.',
       'Add the words this is not advice to any note your organisation issues about a rule.',
       'Find out where consequential amendments are placed in your host country’s acts.'],
end_line='Ask three questions, not one. Report what the text says, and never what to do.',
end_next='Next: A Question Beyond Your Mandate')
