# -*- coding: utf-8 -*-
import figs

U = dict(
num=7, title='What the File Does Not Say',
gram='the past simple in a record of conversation',
ai='context: what it can see of a file, and what it cannot',
strap='CEFR B1 · Grammar: the past simple in a record · AI: what it can see of a file',
cando=['narrate a past conversation in the past simple, accurately',
       'use said, told, asked and replied correctly',
       'say what a system can see of a file and what it cannot',
       'name the kinds of knowledge that are never written down',
       'write down one unwritten thing before it is needed'],
hero=('NINE YEARS IN A FILE, AND ONE THING NOT IN IT',
      ['Everything the Ministry had written about Verenia was there.',
       'The reason we never raise fisheries in April was not.'],
      [(740, 'purple', 'long'), (1400, 'teal', 'short'),
       (2060, 'blue', 'long'), (2700, 'orange', 'short')]),
hero_cap='The Verenia file, which is nine years deep and still incomplete.',

warm=['What does your office know that is written down nowhere?',
      'Who told you the last unwritten thing you learned?',
      'What would a new officer get wrong on their first day?'],
read=[
 'The Verenia file holds nine years of correspondence, records, programmes and reports. When '
 'Lina asked the drafting system for a note on the state of the relationship, it had all of '
 'that in front of it, and what came back was accurate on every point she could check.',
 'The note proposed raising the fisheries question at the April meeting. On the file, this '
 'looks obvious. The matter has been outstanding since 2021, both sides say they want it '
 'settled, and April is the only meeting before the season begins.',
 'Dr Mourad read the note and asked one question. Why April? Lina said that the file showed '
 'April was the last chance before the season. Dr Mourad said that this was correct, and that '
 'the Ministry had not raised fisheries in April for six years.',
 'The reason is that the Verenian minister responsible is also responsible for the inland '
 'provinces, and April is when their regional assembly sits. Raising fisheries in April asks '
 'him to choose publicly between two constituencies. He has never said this, and nobody has '
 'ever written it down.',
 'Dr Mourad learned it in 2019 from a counterpart over dinner. She told two colleagues at the '
 'time and has told perhaps four since. It has never appeared in a record, a brief or a '
 'handover note, and until that afternoon she had not noticed that it was not written '
 'anywhere at all.'],
c_a=[('What does the Verenia file hold?', 'nine years of correspondence, records, programmes and reports'),
     ('What did the note propose?', 'raising the fisheries question at the April meeting'),
     ('Why does that look obvious on the file?', 'the matter is outstanding, both sides want it settled, and April is the last meeting before the season'),
     ('Why does the Ministry avoid April?', 'because the Verenian minister’s regional assembly sits then'),
     ('How did Dr Mourad learn it?', 'from a counterpart over dinner in 2019'),
     ('Where is it written down?', 'nowhere')],
c_b=[('The note was inaccurate on the facts.', 'F'),
     ('The fisheries matter has been outstanding since 2021.', 'T'),
     ('The Verenian minister has explained his difficulty.', 'F'),
     ('Dr Mourad has told about six people in total.', 'T'),
     ('The reason appears in the handover note.', 'F'),
     ('Dr Mourad had noticed the gap before that afternoon.', 'F')],
c_c=[('It had all of that in front of it, and what came back was ____________.', 'accurate'),
     ('The matter has been ____________ since 2021.', 'outstanding'),
     ('April is the only meeting before the ____________ begins.', 'season'),
     ('April is when their regional ____________ sits.', 'assembly'),
     ('It asks him to choose publicly between two ____________.', 'constituencies'),
     ('She learned it from a counterpart over ____________.', 'dinner')],
c_d=[('The note was wrong because of what the file ( contained / omitted ).', ['contained', 'omitted'], 1),
     ('Since when has the fisheries matter been outstanding?', ['2019', '2021', 'six years', 'nine years'], 1),
     ('What sits in April in Verenia?', ['the parliament', 'the regional assembly', 'the court', 'the cabinet'], 1),
     ('How many people has Dr Mourad told?', ['two', 'about six', 'twelve', 'nobody'], 1),
     ('The knowledge exists in', ['the file', 'a few people’s heads', 'the handover note', 'the system'], 1)],
c_e=('Which reporting verb? Put each sentence in the right column.',
     [('She said that April was difficult.', 'said'),
      ('She told me that April was difficult.', 'told'),
      ('He asked why we had chosen April.', 'asked'),
      ('He replied that the season began in May.', 'replied'),
      ('She said nothing about the assembly.', 'said'),
      ('He told the delegation the dates.', 'told')],
     ['said', 'told', 'asked', 'replied']),

v_fig_title='WHAT IS NOT IN THE FILE',
v_fig=[('book', 'background'), ('key', 'tacit'), ('doc', 'a handover note'),
       ('bulb', 'an assumption'), ('pin', 'a gap'), ('seal', 'a standing instruction')],
v_fig_cap='Six words for the part of a ministry’s knowledge that no system can read.',
vocab=[
 ('background', 'what somebody needs to know before the papers make sense'),
 ('context', 'the circumstances that give a document its meaning'),
 ('a precedent', 'an earlier case that shows how this kind of matter is handled'),
 ('a predecessor', 'the person who held your post before you'),
 ('a successor', 'the person who will hold your post after you'),
 ('a handover note', 'what one officer writes for the next one'),
 ('a standing instruction', 'a direction that applies until it is withdrawn'),
 ('a convention', 'a practice everybody follows that nobody has written down'),
 ('tacit', 'understood without being said'),
 ('unwritten', 'real, followed, and recorded nowhere'),
 ('an assumption', 'something taken as true without being checked'),
 ('a gap', 'a place where information that should exist is missing'),
 ('to infer', 'to work something out from what is there rather than be told'),
 ('to omit', 'to leave something out'),
 ('an omission', 'something left out, whether or not on purpose'),
 ('a silence', 'a deliberate absence of comment, which carries meaning'),
 ('implicit', 'present in the sense but not in the words'),
 ('explicit', 'stated in the words themselves'),
 ('a caveat', 'a warning attached to a statement limiting how far it goes'),
 ('to read between the lines', 'to understand what is meant but not said')],
v_a=[('A practice everybody follows that nobody has written down is a ____________.', 'convention'),
     ('What one officer writes for the next one is a ____________.', 'handover note'),
     ('A direction that applies until it is withdrawn is a ____________.', 'standing instruction'),
     ('Understood without being said is ____________.', 'tacit'),
     ('A warning limiting how far a statement goes is a ____________.', 'caveat'),
     ('A deliberate absence of comment, which carries meaning, is a ____________.', 'silence'),
     ('To work something out from what is there is to ____________ it.', 'infer'),
     ('The person who held your post before you is your ____________.', 'predecessor')],
v_b=[('Background is what somebody needs to know', 'before the papers make sense.'),
     ('A precedent is an earlier case that shows', 'how this kind of matter is handled.'),
     ('An assumption is something taken as true', 'without being checked.'),
     ('Implicit means present in the sense', 'but not in the words.'),
     ('A gap is a place where information', 'that should exist is missing.')],

g_title='Grammar: the past simple in a record',
g_rule=['A record of conversation is written in the past simple throughout.',
        'Say takes no person: she said that. Tell takes one: she told me that.',
        'Ask and reply report questions and answers: he asked why, she replied that.',
        'Keep the reporting verb neutral; the record states what happened, not what you thought.'],
g_fig=('LOOSE',
       ['She said me that April was difficult.',
        'He asked that why we chose April.',
        'She tells that the assembly sits then.',
        'He answered me the season began in May.'],
       'PRECISE',
       ['She told me that April was difficult.',
        'He asked why we had chosen April.',
        'She said that the assembly sits then.',
        'He replied that the season began in May.'],
       'say and tell confused, and two malformed questions',
       'four reporting verbs used correctly'),
g_fig_cap='Say and tell are the two verbs a record uses most, and the two most often swapped.',
g_a=[('She ____________ (tell) me that April was difficult.', 'told'),
     ('She ____________ (say) that the assembly sat in April.', 'said'),
     ('He ____________ (ask) why we had chosen that month.', 'asked'),
     ('She ____________ (reply) that the season began in May.', 'replied'),
     ('The counsellor ____________ (confirm) the dates on 3 May.', 'confirmed'),
     ('I ____________ (not/raise) the fisheries question.', 'did not raise'),
     ('He ____________ (say) nothing about the assembly.', 'said'),
     ('They ____________ (tell) the delegation the programme that morning.', 'told'),
     ('She ____________ (ask) whether the matter ____________ (be) still open.', 'asked / was')],
g_b=[('A record of conversation is written in the ( past simple / present simple ).', ['past simple', 'present simple'], 0),
     ('She ____ me that April was difficult.', ['said', 'told', 'asked', 'replied'], 1),
     ('She ____ that the assembly sat in April.', ['told', 'said', 'told to', 'asked'], 1),
     ('He ____ why we had chosen that month.', ['said', 'asked', 'told', 'replied'], 1),
     ('He ____ that the season began in May.', ['told', 'replied', 'asked', 'said me'], 1),
     ('The reporting verb in a record should be', ['colourful', 'neutral', 'emphatic', 'conditional'], 1)],

d1=dict(title='Why April?',
        fig=(['Why April?', 'The file says April.'],
             ['The file is right.', 'And we have not done it for six years.']),
        cap='Dr Mourad and Lina, over the draft note.',
        lines=[('Dr Mourad', 'Your note proposes fisheries in April. Why April?'),
               ('Lina', 'It is the last meeting before the season. The file is clear about that.'),
               ('Dr Mourad', 'The file is right. We have not raised fisheries in April for six '
                             'years.'),
               ('Lina', 'There is nothing on the file about that.'),
               ('Dr Mourad', 'There is nothing on the file about that. Their minister also holds '
                             'the inland provinces, and their regional assembly sits in April.'),
               ('Lina', 'So raising it then asks him to choose in public.'),
               ('Dr Mourad', 'Between the coast and the interior, in front of both. He has never '
                             'said so and he never will.'),
               ('Lina', 'How do you know it?'),
               ('Dr Mourad', 'A counterpart told me at a dinner in 2019. I told two people then '
                             'and perhaps four since.'),
               ('Lina', 'And it is in no record at all.'),
               ('Dr Mourad', 'In none. I have been in this building for eleven years and I had '
                             'not noticed until you handed me that note.'),
               ('Lina', 'Then I am going to write it down this afternoon.')],
        a=[('What does Lina’s note propose?', 'raising fisheries at the April meeting'),
           ('How long has the Ministry avoided April?', 'six years'),
           ('What else is the Verenian minister responsible for?', 'the inland provinces'),
           ('Why is April difficult for him?', 'his regional assembly sits then, so he must choose publicly between two constituencies'),
           ('How many people has Dr Mourad told?', 'two at the time and perhaps four since')],
        b=[('It is the last meeting before the ____________.', 'season'),
           ('Between the coast and the ____________, in front of both.', 'interior'),
           ('A counterpart told me at a ____________ in 2019.', 'dinner'),
           ('I had not ____________ until you handed me that note.', 'noticed')]),
d2=dict(title='How much else is like this?',
        fig=(['One thing, written down.', 'How many are there?'],
             ['I do not know.', 'That is the answer that worries me.']),
        cap='Lina and Maya Sarkis, at the Diplomatic Institute.',
        lines=[('Maya', 'You wrote the April thing down. Good. How many more are there?'),
               ('Lina', 'On Verenia? I have found three so far by asking people.'),
               ('Maya', 'Across the Ministry?'),
               ('Lina', 'I have no idea. Nobody has any idea, which I think is the real finding.'),
               ('Maya', 'It is. I teach the intake every year, and I teach what is written. The '
                        'rest they learn by being wrong in front of somebody kind.'),
               ('Lina', 'That worked when people stayed twenty years.'),
               ('Maya', 'It worked when the first draft was written by a person who had been '
                        'wrong before. Now the first draft arrives complete, and being wrong in '
                        'front of somebody kind happens at the clearance stage or not at all.'),
               ('Lina', 'So we collect them.'),
               ('Maya', 'We try. I have asked for a page per desk of things not on the file, and '
                        'I have had eleven pages back out of forty desks.'),
               ('Lina', 'Why only eleven?'),
               ('Maya', 'Because you cannot remember what you know without being asked the right '
                        'question. Dr Mourad did not know she knew that about April until a draft '
                        'proposed it.'),
               ('Lina', 'Then the drafts are useful for finding the gaps.'),
               ('Maya', 'That is the one thing this year has given us, and it is not what '
                        'anybody expected it to give us.')],
        a=[('How many unwritten things has Lina found on Verenia?', 'three so far'),
           ('How does the intake learn what is unwritten?', 'by being wrong in front of somebody kind'),
           ('Why does that no longer work?', 'because the first draft now arrives complete, so being wrong happens at clearance or not at all'),
           ('How many desks returned a page?', 'eleven out of forty'),
           ('Why is it hard to remember what you know?', 'because you cannot remember it without being asked the right question')],
        b=[('I teach what is ____________.', 'written'),
           ('The rest they learn by being wrong in front of somebody ____________.', 'kind'),
           ('Now the first draft arrives ____________.', 'complete'),
           ('Until a draft ____________ it.', 'proposed')]),

speak=[('Say it correctly',
        ['Student A: report six things people said to you this week.',
         'Student B: check say, tell, ask and reply in each one.',
         'Find the sentence where tell was needed and say was used.']),
       ('Spoken tasking',
        ['Name one thing your desk knows that is written nowhere.',
         'Say it aloud as a sentence that could go in a handover note.',
         'Your partner asks who else knows it.']),
       ('Finding the gaps',
        ['In pairs, take a routine proposal one of you could make.',
         'Ask what an outsider would get wrong about it.',
         'Find the reason that exists only in somebody’s memory.'])],

ext_title='A system can read everything on the file, which is why it finds what is not there',
ext_fig=figs.datatable('WHAT THE SYSTEM COULD AND COULD NOT SEE',
                       ['', 'On the file?', 'Known in the department?'],
                       [['the fisheries matter is open', 'yes', 'yes'],
                        ['both sides want it settled', 'yes', 'yes'],
                        ['April is the last meeting', 'yes', 'yes'],
                        ['their minister holds two portfolios', 'yes', 'yes'],
                        ['the regional assembly sits in April', 'no', 'yes, by 6 people'],
                        ['we therefore never raise it in April', 'no', 'yes, by 6 people']]),
ext_fig_cap='Four facts on the file, four correct steps, and two facts that live in six heads.',
ext=[
 'A system given a file can read all of it, which is more than any officer does. It will '
 'notice a matter raised in 2021 and never closed, connect it to a meeting date, and propose '
 'the obvious step. Every link in that chain is correct, and the proposal can still be wrong '
 'in a way nobody on the file could see.',
 'The reason is that a ministry runs on two bodies of knowledge. The first is written: notes, '
 'records, instructions, reports. The second is not written at all. It is the set of reasons '
 'why things are done in a particular way here, learned from a predecessor, from a dinner, '
 'from having once got it wrong in front of somebody who explained.',
 'The unwritten body is large and nobody knows how large, because its items are invisible '
 'until something touches them. An officer cannot list what they know in this way, any more '
 'than they can list the words they can spell. It surfaces only when a proposal runs into it, '
 'and before these systems arrived the proposal was usually made by somebody who already knew.',
 'That is the change worth noticing. When the first draft came from a junior officer, the gap '
 'appeared as a question in a corridor and was filled in a sentence. When the first draft '
 'arrives complete, confident and well sourced, it does not look like a question, and it may '
 'reach a Director or a Minister before anybody who holds the unwritten reason reads it.',
 'The use, then, is to treat the proposals as a survey of your own gaps. A confident draft '
 'that is wrong for an unwritten reason has located that reason for you, and the reason can '
 'be written down in one sentence by the person who holds it. Several ministries have found '
 'this to be the most valuable and least expected result of the whole exercise.'],
dp1=('What does not transfer to the file',
     'Services introducing these systems commonly report that drafts expose undocumented '
     'practice, and that the knowledge held by experienced staff has no written form until '
     'something prompts it.',
     'Source: reported experience in foreign services and in organisational research, 2025–2026.'),
e_a=[('What can a system do that an officer does not?', 'read all of a file'),
     ('What are the two bodies of knowledge?', 'the written one and the unwritten one'),
     ('Why is the unwritten body hard to measure?', 'because its items are invisible until something touches them'),
     ('What has changed about how gaps appear?', 'a complete confident draft does not look like a question'),
     ('What is the unexpected use?', 'treating the drafts as a survey of your own gaps')],
e_b=[('A system reads less of the file than an officer does.', 'F'),
     ('Every link in the chain can be correct and the proposal still wrong.', 'T'),
     ('Officers can list what they know tacitly.', 'F'),
     ('A complete draft looks like a question.', 'F'),
     ('A wrong draft can locate an unwritten reason.', 'T'),
     ('The unwritten body of knowledge has been measured.', 'F')],

w_model=(
 'Purpose: record the reasons behind the Verenia desk’s standing practices, so that a '
 'successor does not have to rediscover them. Scope: the Verenia desk; other desks are out of '
 'scope and will be done separately. Inputs: the standing instructions, the last 3 handover '
 'notes, and interviews with the 4 officers who have held the desk since 2017. Criteria: 1 '
 'entry per practice, each in 1 sentence, each saying what we do, why, and who told you; '
 'include only practices that are not already in a standing instruction; mark any entry whose '
 'reason nobody can now give. Done: 1 page of no more than 12 entries, by 30 June. Fallback: '
 'where a practice exists and nobody can give a reason for it, record it as a practice with '
 'no known reason rather than leaving it out.'),
w_fig=figs.spec_card('THE TASKING FOR AN UNWRITTEN PAGE',
                     [('Purpose', 'record the reasons behind the desk’s standing practices'),
                      ('Scope', 'the Verenia desk; other desks separately'),
                      ('Inputs', 'standing instructions, 3 handover notes, 4 interviews'),
                      ('Criteria', '1 sentence per entry: what, why, who told you'),
                      ('Done', '1 page of 12 entries or fewer, by 30 June'),
                      ('Fallback', 'no known reason: record it as such, do not omit')]),
w_fig_cap='The fallback line is what keeps the page honest about what the desk has forgotten.',
w_task='Write a tasking for the unwritten page of your own desk.',
w_steps=['Say what the page is for and who will read it.',
         'Name whose practices are covered.',
         'Say who is to be asked, and what documents to start from.',
         'Fix the form of an entry: what, why, and the source.',
         'Say what to do about a practice whose reason is lost.'],
w_bank=['Record the reasons behind … so that …',
        'Cover … ; … is out of scope.',
        'Work from … , the last … handover notes, and interviews with …',
        '1 entry per practice, each in 1 sentence, each saying … , … and …',
        'Where a practice exists and nobody can give a reason, … rather than …'],
w_check=['Does an entry have to name who told you?',
         'Are practices already in standing instructions excluded?',
         'Is the number of entries capped?',
         'Is a reasonless practice recorded rather than dropped?'],

t_title='Context: what it can see of a file, and what it cannot',
t_fig=figs.split('TWO KINDS OF KNOWLEDGE',
                 'Written — the system has it all',
                 ['the matter is open since 2021',
                  'both sides want it settled',
                  'April is the last meeting',
                  'their minister holds two portfolios'],
                 'Unwritten — the system has none of it',
                 ['their assembly sits in April',
                  'we therefore avoid April',
                  'who may be telephoned directly',
                  'which silences are deliberate']),
t_fig_cap='Both columns are true. Only the left-hand one is on the file.',
t_body=[
 'Expect a draft built from the file to be right about everything the file contains, and to '
 'be right in a way that looks complete. It will read nine years of papers, which you have '
 'not, and connect them correctly. That is a real capability and it should not be talked '
 'down.',
 'Then remember what a ministry keeps outside its files. The reason a matter is never raised '
 'in a particular month, the person who may be telephoned directly, the silence that is '
 'deliberate: none of this is written anywhere, and the officers who hold it cannot tell you '
 'what they hold until something touches it. A complete draft touches it constantly.',
 'So use the drafts as a survey. When a confident, well-sourced proposal turns out to be '
 'wrong for a reason that exists only in somebody’s memory, you have found a gap in the '
 'file, and the person who caught it can close it in one sentence. Write that sentence down '
 'the same afternoon, because the next person to notice may be a Director reading a '
 'submission.'],
t_say=[('Ask the question: ', 'Why do we not do this already?'),
       ('Name the holder: ', 'Who knows why, and who told them?'),
       ('Close the gap: ', 'Write the sentence down this afternoon.')],
t_bound=('A system reads what is on the file. It cannot know what the Ministry has decided '
         'and not recorded, what a counterpart has signalled without saying, or why a '
         'practice exists. It will fill those gaps with the most reasonable reading of the '
         'papers, and a reasonable reading of an incomplete file is a confident mistake.'),
t_a=[('Why do we not do this ____________?', 'already'),
     ('Who knows why, and who ____________ them?', 'told'),
     ('Write the sentence down this ____________.', 'afternoon'),
     ('It will read nine years of papers, which you have ____________.', 'not'),
     ('The officers cannot tell you what they ____________ until something touches it.', 'hold'),
     ('A reasonable reading of an incomplete file is a confident ____________.', 'mistake')],
t_b_rubric='Rewrite each unwritten reason as a sentence for a handover note.',
t_b=[('We never do fisheries in April.', 'we do not raise fisheries in April because their minister’s regional assembly sits then'),
     ('You can ring Haldis directly.', 'the political counsellor may be telephoned directly; she has offered this since 2022'),
     ('They do not answer on Fridays.', 'their ministry does not reply on Fridays; do not read the silence as a refusal'),
     ('That matter is best left alone.', 'the 2018 question is not raised at official level; it is handled by the Ambassador only')],

case=dict(
 title='The Decision Room · Eleven pages out of forty desks',
 brief=[
  'The Diplomatic Institute asked every desk for one page of practices that are followed and '
  'not written down. Eleven desks returned a page. Twenty-nine did not.',
  'Of the eleven pages, four were excellent and specific, five listed things that were in '
  'fact already in standing instructions, and two said that the desk had no such practices, '
  'which Maya Sarkis does not believe.',
  'Maya wants to interview every desk instead, which would take a term. Dr Mourad says the '
  'exercise has already shown that people cannot answer the question cold, and asks what '
  'would make them answer it.'],
 exhibit=figs.datatable('THE RETURNS',
                        ['', 'Count', 'Note'],
                        [['desks asked', '40', '—'],
                         ['pages returned', '11', '—'],
                         ['specific and useful', '4', '—'],
                         ['already in standing instructions', '5', 'no new content'],
                         ['declared no unwritten practice', '2', 'not believed'],
                         ['entries found by a wrong draft instead', '9', 'across 6 desks']]),
 exhibit_cap='Asking people produced four useful pages. A wrong draft produced nine entries without being asked.',
 exhibit_note='The nine were collected informally by officers who noticed a draft proposing '
              'something the desk does not do.',
 voices=[('Maya Sarkis', 'the Diplomatic Institute',
          'Interview every desk. It is a term of my time and it is the only method that has '
          'ever worked for this kind of knowledge.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Nine entries arrived without anybody being interviewed, because a draft proposed '
          'something wrong and somebody said why not. That is a cheaper method and it is '
          'already running.'),
         ('Karim Dalati', 'Information Security and Records',
          'Then it depends on drafts being wrong, which we are trying to reduce, and on '
          'somebody being in the room who knows. Neither of those is a system you can rely '
          'on.')],
 steps=[('Find it', 'What did the forty desks return?'),
        ('Compare it', 'How did the nine entries arrive?'),
        ('Infer it', 'Why does Karim distrust the cheaper method?'),
        ('Weigh it', 'A term of interviews against a method that depends on errors.'),
        ('Decide', 'How does the Ministry collect what is unwritten?')],
 analysis=[('Find it. How many pages were specific and useful?', 'four of eleven'),
           ('Compare it. How did nine further entries arrive?', 'from officers noticing a draft propose something the desk does not do'),
           ('Infer it. What is Karim’s objection?', 'that the method depends on drafts being wrong and on the right person being present'),
           ('Weigh it. What does the interview method cost?', 'a term of Maya’s time'),
           ('Decide. What would you do?', 'answers vary; the two methods find different entries and neither finds all')],
 decision='Write how the Ministry collects practices that are not written down.',
 decision_steps=['Say what is done when a draft proposes something a desk does not do.',
                 'Say who records it and where it goes.',
                 'Say whether desks are interviewed, and at what interval.',
                 'Say what happens to a desk that reports having no such practices.'],
 bank=['When a draft proposes something we do not do, …',
       '… records it in …',
       'Desks are interviewed …',
       'A desk reporting no unwritten practices …',
       'This is reviewed …'],
 outcome='The Ministry did both: a standing instruction requires any officer who stops a '
         'draft for an unwritten reason to record that reason in one sentence on the desk '
         'page, and the Institute interviews ten desks a year in rotation. In the first year '
         'the standing instruction produced thirty-one entries and the interviews produced '
         'nineteen, with an overlap of four. Karim notes that the thirty-one all came from '
         'drafts that were wrong, and that he still regards a collection method that depends '
         'on errors as an odd thing for a ministry to institutionalise.',
 outcome_q=[('How many entries came from each method in the first year?', 'thirty-one from stopped drafts and nineteen from interviews, overlapping by four'),
            ('What does Karim still object to?', 'institutionalising a collection method that depends on drafts being wrong')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Write me a note on the relationship',
 task=['This is the tasking that produced the April proposal, typed by Lina on a Friday '
       'afternoon when Dr Mourad asked for something to read over the weekend.',
       'It is a reasonable request and it produced an accurate note that proposed something '
       'the Ministry has deliberately not done for six years.'],
 draft=['Write me a note on where we are with Verenia.',
        'Use the file.',
        'Cover the main outstanding matters.',
        'Suggest what we should raise next.',
        'Leave out the matters that are not live.',
        'For the weekend.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fourth one asks for a judgement the file cannot support.',
 asked=['The state of play from the file',
        'Options to raise, each with what is not on the file',
        'A note of anything the file cannot settle'],
 back=['An accurate 2-page note',
       'A proposal the Ministry avoids',
       'No mark anywhere that anything was uncertain'],
 gap='"Use the file" limits the source to what is written, "the main outstanding matters" '
     'names no set, "suggest what we should raise" asks for a judgement from written material '
     'alone, and "not live" sets no test.',
 back_cap='Every fact right, every link sound, and a recommendation nobody in the building would make.',
 back_note='Instruction four is the failure. A proposal about what to raise depends on reasons '
           'that are not on the file, and nothing in the tasking said so.',
 diagnosis=[('[1] "where we are with Verenia" — covering what period?', 'unscoped set'),
            ('[2] "use the file" — and what the file does not contain?', 'unscoped set'),
            ('[3] "the main outstanding matters" — how many, chosen how?', 'unstated criterion'),
            ('[4] "suggest what we should raise" — on what basis, from written material alone?', 'unstated criterion'),
            ('[5] "not live" — finished meaning every matter, or the live ones?', 'undefined done'),
            ('[6] "for the weekend" — to be read, or to be acted on?', 'undefined done')],
 rewrite='Rewrite the tasking so that it separates what the file shows from what it cannot '
         'settle.',
 scaffold=['What the note is for and who reads it',
           'Which period and which matters are covered',
           'What the note is built from, and what it is not built from',
           'What each matter carries, and how unwritten reasons are to be handled',
           'How long the note is and when it is wanted',
           'What to do with a matter the file cannot settle'],
 bank=['Set out the state of play on … so that …',
       'Cover … ; … is out of scope.',
       'Work from … ; do not draw on …',
       'For each matter give … and … ; where a recommendation depends on … , …',
       'Return … of no more than … , by …',
       'Where the file cannot settle whether … , … rather than …'],
 check=['Does the tasking say what the file cannot be asked to settle?',
        'Must recommendations be marked where they depend on unwritten reasons?',
        'Is the number of matters fixed?',
        'Is the length a figure?'],
 model=['Set out the state of play on the open matters with Verenia, so that the Director can decide what to raise at the April meeting',
        'Matters open since 2019; consular cases and visa questions are out of scope',
        'The Verenia file only; do not draw on recollection or on other desks',
        'For each matter give the date of the last exchange and what the file shows; mark every matter on which the file does not show why the Ministry has acted as it has',
        '1 note of no more than 2 pages listing no more than 6 matters, by Friday evening',
        'Where the file cannot settle whether a matter should be raised, say that the file cannot settle it rather than recommending'],
 cost='1 note to a Director recommending a step the Ministry has avoided for 6 years, and a '
      'reason that had been in six people’s heads since 2019 and nowhere else.'),

rev_fig=figs.split('SAY, TELL, ASK, REPLY',
                   'Wrong',
                   ['She said me that April was difficult.',
                    'He asked that why we chose April.',
                    'She tells that the assembly sits then.',
                    'He answered me the season began in May.'],
                   'Right',
                   ['She told me that April was difficult.',
                    'He asked why we had chosen April.',
                    'She said that the assembly sits then.',
                    'He replied that the season began in May.']),
rev_fig_cap='Say takes no person. Tell takes one. The other two report questions and answers.',
rev=dict(
 read=[('A system given a file can', ['read some of it', 'read all of it', 'read the summaries', 'read the index'], 1),
       ('Unwritten knowledge is invisible until', ['it is needed', 'something touches it', 'it is taught', 'it is lost'], 1),
       ('A complete confident draft does not look like', ['a document', 'a question', 'a proposal', 'a record'], 1),
       ('In the Decision Room, how many desks returned a page?', ['forty', 'eleven', 'four', 'nine'], 1)],
 listen_text='Expect a draft built from the file to be right about everything the file '
             'contains. Then remember what a ministry keeps outside its files: the reason a '
             'matter is never raised in a particular month, the person who may be telephoned '
             'directly, the silence that is deliberate. Use the drafts as a survey of your own '
             'gaps.',
 listen=[('Right about everything the file ____________.', 'contains'),
         ('What a ministry keeps outside its ____________.', 'files'),
         ('The ____________ that is deliberate.', 'silence'),
         ('A survey of your own ____________.', 'gaps')],
 speak=['Name one thing your desk does for a reason that is written nowhere.',
        'Say it as a sentence that could go in a handover note.'],
 write='Write one unwritten practice as a single sentence, with the reason and the source.',
 vocab=[('A practice everybody follows that nobody has written down is a ____________.', 'convention'),
        ('A direction that applies until it is withdrawn is a ____________.', 'standing instruction'),
        ('Understood without being said is ____________.', 'tacit'),
        ('A warning limiting how far a statement goes is a ____________.', 'caveat'),
        ('The person who held your post before you is your ____________.', 'predecessor')],
 gram=[('She ____________ (tell) me that April was difficult.', 'told'),
       ('She ____________ (say) that the assembly sat in April.', 'said'),
       ('He ____________ (ask) why we had chosen that month.', 'asked'),
       ('She ____________ (reply) that the season began in May.', 'replied'),
       ('They ____________ (tell) the delegation the programme that morning.', 'told')]),

found=['Write down one thing your desk knows that is on no file.',
       'Ask a colleague why a practice exists, and record the answer.',
       'Find a draft that proposed something your office would never do.',
       'Add one sentence to your handover note this week.'],
end_line='I have been in this building for eleven years and I had not noticed.',
end_next='Next: One Instruction, Two Drafts',
)
