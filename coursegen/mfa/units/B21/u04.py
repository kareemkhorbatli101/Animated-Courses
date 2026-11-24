# -*- coding: utf-8 -*-
import figs

U = dict(
num=4, title='A Country Brief in a Day',
gram='the second conditional',
ai='assembling a country brief in a day',
strap='CEFR B2 · Grammar: the second conditional · AI: a country brief in a day',
cando=['form the second conditional correctly and use it for a hypothetical case',
       'distinguish a hypothetical from a prediction in a brief',
       'say which parts of a country brief can be assembled and which cannot',
       'specify what a country brief must contain to be usable in a meeting',
       'write a tasking that separates assembled background from the line to take'],
hero=('FOURTEEN HOURS, ELEVEN COUNTRIES',
      ['The background assembled itself overnight, and it was accurate.',
       'Every brief said the same thing about what to do: nothing.'],
      [(730, 'orange', 'long'), (1390, 'purple', 'short'),
       (2050, 'teal', 'long'), (2690, 'blue', 'short')]),
hero_cap='Policy Planning, the night before the Minister’s regional tour was announced.',

warm=['What goes into a brief for a meeting with a foreign counterpart?',
      'Which parts of it could be assembled from documents you already hold?',
      'Which parts could only be written by somebody who knows the relationship?'],
read=[
 'On a Tuesday in September the Minister’s office announced a regional tour of eleven '
 'countries beginning in nine days. Policy Planning had produced two country briefs that '
 'year. It now needed eleven.',
 'The assembly worked. By Wednesday evening each brief carried a political overview, a trade '
 'profile with figures from published statistics, a list of outstanding issues drawn from the '
 'Ministry’s own files, personality notes on each key interlocutor, and an annex of previous '
 'commitments with dates and file references. Dr Hana Mourad read all eleven and found two '
 'factual errors, both in trade figures that had been superseded.',
 'If the Ministry had had to write those eleven briefs by hand, it would have needed four '
 'officers for three weeks, and it would not have had them. On that comparison the result was '
 'remarkable, and Hana said so in writing.',
 'What the briefs did not contain was a line to take. Each had a section headed Objectives '
 'which set out, in careful and general terms, that the Ministry sought to strengthen '
 'relations, deepen cooperation and address outstanding issues. Eleven briefs said this. The '
 'sentences were different and the content was identical.',
 'Hana had ruled in advance that objectives should be assembled with the rest, on the ground '
 'that the files contained the Ministry’s positions and the positions were what objectives '
 'are made of. She was wrong, and the reason is worth stating exactly: a position is what the '
 'Ministry holds, and an objective is what the Ministry wants from one meeting with one '
 'person at one moment, which is in nobody’s file.'],
c_a=[('How many briefs were needed, and in how long?', 'eleven, in nine days'),
     ('What did each brief carry?', 'a political overview, a trade profile, outstanding issues, personality notes and an annex of commitments'),
     ('What errors did Hana find?', 'two factual errors, both in superseded trade figures'),
     ('What would hand-writing them have taken?', 'four officers for three weeks'),
     ('What did the briefs lack?', 'a line to take'),
     ('Why was Hana’s ruling wrong?', 'because an objective is what the Ministry wants from one meeting, which is in no file')],
c_b=[('Policy Planning had produced eleven briefs that year.', 'F'),
     ('The annex carried dates and file references.', 'T'),
     ('Hana found no errors.', 'F'),
     ('The objectives sections differed in content.', 'F'),
     ('Hana had ruled that objectives be assembled.', 'T'),
     ('A position and an objective are the same thing.', 'F')],
c_c=[('A trade profile with figures from published ____________.', 'statistics'),
     ('Personality notes on each key ____________.', 'interlocutor'),
     ('Both in trade figures that had been ____________.', 'superseded'),
     ('The sentences were different and the content was ____________.', 'identical'),
     ('A position is what the Ministry ____________.', 'holds'),
     ('An objective is what the Ministry ____________ from one meeting.', 'wants')],
c_d=[('The assembly was ( accurate / complete ).', ['accurate', 'complete'], 0),
     ('How many countries were on the tour?', ['nine', 'eleven', 'two', 'four'], 1),
     ('Where were the two errors?', ['in the annex', 'in superseded trade figures', 'in personality notes', 'in objectives'], 1),
     ('What did all eleven objectives sections say?', ['different things', 'the same thing in different words', 'nothing', 'the line to take'], 1),
     ('Where is an objective found?', ['in the files', 'in nobody’s file', 'in the annex', 'in published statistics'], 1)],
c_e=('Hypothetical or prediction? Put each in the right column.',
     [('If we raised it now, they would refuse.', 'hypothetical'),
      ('If we raise it now, they will refuse.', 'prediction'),
      ('If the figures were current, the brief would be sound.', 'hypothetical'),
      ('If the figures are current, the brief is sound.', 'prediction'),
      ('If I were the Minister, I would not mention it.', 'hypothetical'),
      ('If she mentions it, they will reply in writing.', 'prediction')],
     ['hypothetical', 'prediction']),

v_fig_title='THE PARTS OF A COUNTRY BRIEF',
v_fig=[('doc', 'a scene-setter'), ('chart', 'a trade profile'), ('people', 'a personality note'),
       ('pin', 'an outstanding issue'), ('key', 'a line to take'), ('shield', 'a red line')],
v_fig_cap='Six parts, of which four can be assembled and two cannot.',
vocab=[
 ('a country brief', 'the document prepared for a meeting with one state'),
 ('a bilateral relationship', 'the standing of relations between two states'),
 ('a trade profile', 'a short account of what two states buy and sell from each other'),
 ('a political overview', 'a short account of a state’s internal political position'),
 ('a key interlocutor', 'the person on the other side who matters for this business'),
 ('a personality note', 'a short account of an individual the Minister will meet'),
 ('a line to take', 'the agreed form of words for a particular question'),
 ('a talking point', 'one item the speaker intends to raise'),
 ('a point of difficulty', 'a subject on which the two sides are not aligned'),
 ('a red line', 'a position beyond which the Ministry will not go'),
 ('an outstanding issue', 'a matter raised and not yet settled'),
 ('a pending request', 'something asked for and not yet answered'),
 ('a visit programme', 'the schedule of a visit, meeting by meeting'),
 ('a courtesy call', 'a short meeting whose purpose is the meeting itself'),
 ('a bilateral meeting', 'a meeting between two sides on their own business'),
 ('a scene-setter', 'the opening section saying why this meeting is happening now'),
 ('an objective', 'what this side wants out of this meeting'),
 ('a deliverable outcome', 'something concrete a meeting is meant to produce'),
 ('a background annex', 'the material attached for reference rather than for reading'),
 ('a previous commitment', 'something one side has already undertaken to do')],
v_a=[('The agreed form of words for a particular question is a ____________.', 'line to take'),
     ('A position beyond which the Ministry will not go is a ____________.', 'red line'),
     ('The opening section saying why this meeting is happening now is a ____________.', 'scene-setter'),
     ('What this side wants out of this meeting is an ____________.', 'objective'),
     ('Something concrete a meeting is meant to produce is a ____________.', 'deliverable outcome'),
     ('A short meeting whose purpose is the meeting itself is a ____________.', 'courtesy call'),
     ('Something one side has already undertaken to do is a ____________.', 'previous commitment'),
     ('The person on the other side who matters is a ____________.', 'key interlocutor')],
v_b=[('A country brief is the document prepared', 'for a meeting with one state.'),
     ('A trade profile is a short account of what', 'two states buy and sell from each other.'),
     ('A point of difficulty is a subject on which', 'the two sides are not aligned.'),
     ('A background annex is the material attached', 'for reference rather than for reading.'),
     ('A pending request is something asked for', 'and not yet answered.')],

g_title='Grammar: the second conditional',
g_rule=['If plus past simple, then would plus infinitive: if we raised it, they would refuse.',
        'The past form marks a hypothetical case, not past time.',
        'Were is used for all persons in the formal form: if I were the Minister.',
        'Keep would out of the if-clause: not if we would raise it.'],
g_fig=('LOOSE',
       ['If we would raise it now, they refuse.',
        'If the figures was current, the brief is sound.',
        'If I was the Minister, I will not mention it.',
        'If they ask, we would have no answer.'],
       'PRECISE',
       ['If we raised it now, they would refuse.',
        'If the figures were current, the brief would be sound.',
        'If I were the Minister, I would not mention it.',
        'If they asked, we would have no answer.'],
       'would in the if-clause, two agreement errors and a mixed form',
       'four second conditionals in the correct form'),
g_fig_cap='The hypothetical is a working tool in a brief; the mixed form destroys it.',
g_a=[('If we ____________ (raise) it now, they would refuse.', 'raised'),
     ('If the figures ____________ (be) current, the brief would be sound.', 'were'),
     ('If I ____________ (be) the Minister, I would not mention it.', 'were'),
     ('If they asked, we ____________ (have) no answer.', 'would have'),
     ('If the Ministry ____________ (write) these by hand, it would need four officers.', 'wrote'),
     ('If she raised the review, Kavara ____________ (ask) for a date.', 'would ask'),
     ('If there ____________ (be) a line to take, the brief would be usable.', 'were'),
     ('If we had no annex, the Minister ____________ (be) unable to check.', 'would be'),
     ('If I ____________ (know) their position, I would say so.', 'knew')],
g_b=[('The past form marks a ( past event / hypothetical ).', ['past event', 'hypothetical'], 1),
     ('If we ____ it now, they would refuse.', ['would raise', 'raised', 'raise', 'will raise'], 1),
     ('If I ____ the Minister, I would decline.', ['was', 'were', 'am', 'would be'], 1),
     ('Where does would not go?', ['in the main clause', 'in the if-clause', 'at the end', 'before if'], 1),
     ('If they asked, we ____ no answer.', ['have', 'would have', 'had', 'will have'], 1),
     ('Which is correct?', ['If the figures was current …', 'If the figures were current …', 'If the figures would be current …', 'If the figures are current, it would …'], 1)],

d1=dict(title='Eleven briefs, one objective',
        fig=(['All eleven say strengthen relations.', 'In eleven different sentences.'],
             ['That is not an objective.', 'It is the absence of one, written well.']),
        cap='Dr Hana Mourad and Lina Khalil, reading the set.',
        lines=[('Lina', 'I have read all eleven objectives sections. They say the same thing.'),
               ('Hana', 'They are differently worded.'),
               ('Lina', 'They are differently worded and identical. Strengthen relations, deepen '
                        'cooperation, address outstanding issues. If the Minister read only that '
                        'section, she would learn nothing she did not know before the tour was '
                        'announced.'),
               ('Hana', 'I ruled that objectives be assembled with the rest. The files hold our '
                        'positions and objectives are made of positions.'),
               ('Lina', 'A position is what we hold. An objective is what we want out of ninety '
                        'minutes with one person on the eleventh of October.'),
               ('Hana', 'Which is not in any file.'),
               ('Lina', 'Which is not in any file and could not be, because nobody has decided '
                        'it yet. The brief was asked to retrieve something that does not exist.'),
               ('Hana', 'So the eleven sections are an honest report of an absence, dressed as '
                        'content.'),
               ('Lina', 'That is what worries me most. If they were blank, somebody would fill '
                        'them. Because they are full, nobody will.'),
               ('Hana', 'That is the strongest argument anybody has put to me on this and it is '
                        'against a ruling I made three weeks ago.'),
               ('Lina', 'The ruling was reasonable. It is wrong for one section of six.'),
               ('Hana', 'Then the section comes out of the assembly and goes to a desk officer, '
                        'who writes three sentences and signs them. I will put the correction in '
                        'writing before the briefs go up.')],
        a=[('What do all eleven objectives sections say?', 'strengthen relations, deepen cooperation, address outstanding issues'),
           ('What was Hana’s reasoning for assembling them?', 'that the files hold positions and objectives are made of positions'),
           ('What is the distinction Lina draws?', 'a position is what the Ministry holds; an objective is what it wants from one meeting'),
           ('Why is a full section worse than a blank one?', 'because a blank section would be filled and a full one will not be'),
           ('What does Hana decide?', 'that the section is written by a desk officer in three signed sentences')],
        b=[('They are differently worded and ____________.', 'identical'),
           ('Which is not in any ____________.', 'file'),
           ('An honest report of an ____________, dressed as content.', 'absence'),
           ('Three sentences and ____________ them.', 'signs')]),
d2=dict(title='What a day buys',
        fig=(['Fourteen hours for eleven briefs.', 'Three weeks by hand, and we had nine days.'],
             ['So it was worth it.', 'It was necessary. That is different.']),
        cap='Hana and Ambassador Faris Said, by telephone from Astrene.',
        lines=[('Faris', 'I have read the Astrene brief. The annex is better than anything my '
                         'mission has produced in five years.'),
               ('Hana', 'The annex is the part that worked. Every previous commitment with a '
                        'date and a file reference.'),
               ('Faris', 'Which I did not have, and which I should have had, and which took your '
                         'section a night.'),
               ('Hana', 'If we had written these by hand we would have needed four officers for '
                        'three weeks, and we had nine days.'),
               ('Faris', 'Then this was not a convenience. Without it the Minister would have '
                         'travelled with nothing.'),
               ('Hana', 'That is the comparison I am careful about. The honest comparison is not '
                        'with a perfect brief we never had the resources to write. It is with no '
                        'brief.'),
               ('Faris', 'And against no brief it is a transformation.'),
               ('Hana', 'Against no brief it is a transformation and I have written that down. '
                        'What I will not write down is that the briefs are good, because four '
                        'of the six sections are good and two are not.'),
               ('Faris', 'The objectives and the line to take.'),
               ('Hana', 'Both of which are decisions rather than retrievals, and neither of '
                        'which exists until a person makes it.'),
               ('Faris', 'My mission can write both for Astrene in an hour.'),
               ('Hana', 'Then that is the division: the Ministry assembles, the mission decides. '
                        'And I will say in the covering minute that the two sections came from '
                        'posts, so that nobody in two years thinks the whole brief assembled '
                        'itself.')],
        a=[('What does Faris say about the annex?', 'that it is better than anything his mission has produced in five years'),
           ('What is the honest comparison?', 'not with a perfect brief, but with no brief at all'),
           ('How many of six sections are good?', 'four'),
           ('Which two are not?', 'the objectives and the line to take'),
           ('What division do they agree?', 'the Ministry assembles and the mission decides')],
        b=[('Every previous commitment with a date and a file ____________.', 'reference'),
           ('Against no brief it is a ____________.', 'transformation'),
           ('Both of which are decisions rather than ____________.', 'retrievals'),
           ('The two sections came from ____________.', 'posts')]),

speak=[('Hypothesise',
        ['Student A: describe a situation in your work.',
         'Student B: ask three what-if questions in the second conditional.',
         'Answer each one with would and a reason.']),
       ('Assemble or decide',
        ['List the six parts of a brief you use.',
         'Sort them into what could be assembled and what must be decided.',
         'Say who decides each of the second kind.']),
       ('Three sentences',
        ['Choose a meeting you will attend.',
         'Say aloud what you want out of it in three sentences.',
         'Your partner says whether those are objectives or positions.'])],

ext_title='Assembly produces background in a night; objectives and the line to take are decisions and cannot be retrieved',
ext_fig=figs.datatable('ELEVEN BRIEFS, SECTION BY SECTION',
                       ['Section', 'Assembled from', 'Usable?'],
                       [['political overview', 'published material, dated', 'yes'],
                        ['trade profile', 'official statistics', 'yes, 2 figures superseded'],
                        ['outstanding issues', 'the Ministry’s own files', 'yes'],
                        ['personality notes', 'files and published material', 'yes'],
                        ['objectives', 'the Ministry’s positions', 'no: identical in all 11'],
                        ['line to take', 'previous lines on file', 'no: generic in all 11']]),
ext_fig_cap='Four sections out of six. The two that failed are the two a Minister actually uses.',
ext=[
 'A country brief is among the clearest wins available in this field, and the reason is that '
 'most of it is retrieval. A political overview is a summary of published material. A trade '
 'profile is official statistics arranged. Outstanding issues, previous commitments and '
 'pending requests are in the ministry’s own files with dates and references. Personality '
 'notes are a compilation from both. None of this requires a judgement that has not already '
 'been made, and all of it is tedious, which is exactly the combination the capability suits.',
 'The scale of the gain is easy to understate because the comparison is usually drawn wrongly. '
 'A ministry does not compare an assembled brief with a perfect brief, because it never had '
 'the officers to write a perfect brief for eleven countries in nine days. It compares an '
 'assembled brief with no brief, and against that the result is not a convenience but a '
 'change in what is possible.',
 'Two sections do not assemble, and they are the two a Minister reads in the car. Objectives '
 'and the line to take are not in any file, and the reason is not that the files are '
 'incomplete. A position is what the ministry holds and is therefore recorded. An objective '
 'is what this side wants out of ninety minutes with one person on a particular afternoon, '
 'and nobody has decided it until somebody decides it.',
 'Asked to produce such a section anyway, the method does what it must: it generalises from '
 'positions and produces careful, plausible, interchangeable prose. Eleven briefs will say '
 'strengthen relations, deepen cooperation and address outstanding issues, in eleven sets of '
 'words. If those sections were left blank somebody would fill them. Because they are full, '
 'nobody does, and that is the whole of the harm.',
 'The division that works is simple to state and requires somebody to insist on it: the '
 'ministry assembles the four retrievable sections, and a named officer or the post writes '
 'the two decided ones and signs them. Where the brief does not say which sections were '
 'written by a person, nobody will be able to tell in two years, and the next office to '
 'inherit the system will assume the whole brief assembled itself.'],
dp1=('Country briefs',
     'Foreign services assembling visit and country briefs with retrieval tools in 2025 '
     'reported large gains in background preparation, while requiring objectives and lines to '
     'take to be drafted and signed by a desk officer or post.',
     'Source: reported practice in diplomatic visit preparation, 2025–2026.'),
e_a=[('Why is a country brief a clear win?', 'because most of it is retrieval of already-made judgements, and all of it is tedious'),
     ('What is the wrong comparison?', 'comparing an assembled brief with a perfect brief the ministry never had the officers to write'),
     ('Which two sections do not assemble?', 'objectives and the line to take'),
     ('Why not?', 'because they are decisions about one meeting, not positions on record'),
     ('What is the harm of a full generic section?', 'a blank section would be filled; a full one is not')],
e_b=[('Most of a country brief is judgement.', 'F'),
     ('The right comparison is with no brief.', 'T'),
     ('The files are incomplete, which is why objectives are missing.', 'F'),
     ('Generic objectives sections get rewritten.', 'F'),
     ('A named officer should sign the decided sections.', 'T'),
     ('A brief should record which sections a person wrote.', 'T')],

w_model=(
 'Purpose: assemble the background sections of the 11 country briefs so that a desk officer '
 'has only to write objectives and the line to take. Scope: the 4 background sections only; '
 'objectives and the line to take are out of scope and are not to be drafted. Inputs: the '
 'Ministry’s own files, published official statistics, and the last 3 years of mission '
 'reporting. Criteria: for each of the 4 sections give every figure with its published date; '
 'list outstanding issues and previous commitments with file references; keep each section to '
 '1 page; mark any figure whose published date is more than 12 months old. Done: 11 briefs of '
 '4 sections each, presented to a desk officer for the 2 remaining sections, by 18:00 on '
 'Wednesday. Fallback: where the files hold nothing on a section for a country, leave it blank '
 'and say so rather than generalising from the region.'),
w_fig=figs.spec_card('THE TASKING FOR A COUNTRY BRIEF',
                     [('Purpose', 'background ready so the officer writes only the decisions'),
                      ('Scope', 'the 4 background sections; objectives excluded'),
                      ('Inputs', 'the files, official statistics, 3 years of mission reporting'),
                      ('Criteria', 'dated figures, file references, 1 page a section, stale figures marked'),
                      ('Done', '11 briefs of 4 sections, to a desk officer, by 18:00 Wednesday'),
                      ('Fallback', 'nothing on file: leave blank and say so, never generalise')]),
w_fig_cap='Objectives are out of scope is the line that keeps a blank section blank.',
w_task='Write a tasking for the background of a brief in your own work.',
w_steps=['Say what the human drafter is left to do.',
         'Exclude the decided sections by name.',
         'Name the inputs and bound them by date.',
         'Require dates on figures and references on issues.',
         'Say what happens where the files are silent.'],
w_bank=['Assemble … so that … has only to …',
        'Cover … ; … are out of scope and are not to be …',
        'Work from … , … and …',
        'For each section give … ; list … with … ; keep each to … ; mark …',
        'Where the files hold nothing … , leave it blank and say so rather than …'],
w_check=['Are the decided sections excluded in words?',
         'Must every figure carry its published date?',
         'Is a stale figure marked?',
         'Is generalising from the region forbidden?'],

t_title='Assembling a country brief',
t_fig=figs.split('A BRIEF IN SIX PARTS',
                 'Retrieval',
                 ['political overview',
                  'trade profile',
                  'outstanding issues',
                  'personality notes'],
                 'Decision',
                 ['objectives for this meeting',
                  'the line to take',
                  'what to raise and what to leave',
                  'what would be conceded, and when']),
t_fig_cap='The left column assembles overnight. The right column takes a person an hour and cannot be skipped.',
t_body=[
 'Most of a country brief is retrieval, which is why this is one of the clearest gains '
 'available. The overview summarises published material; the trade profile arranges official '
 'statistics; outstanding issues, previous commitments and pending requests sit in the '
 'Ministry’s own files with dates and references. No new judgement is needed anywhere in that '
 'list, and all of it is work nobody wants.',
 'Draw the comparison honestly, because offices get this wrong in both directions. If the '
 'Ministry had to produce eleven briefs by hand it would need four officers for three weeks, '
 'and in nine days it would have produced none. So the comparison is not with a better brief; '
 'it is with no brief, and against that the change is not convenience.',
 'Then protect the two sections that cannot be retrieved. Objectives and the line to take are '
 'decisions about one meeting with one person on one afternoon, and nothing in any file '
 'contains them. Ask for them anyway and you will get careful interchangeable prose about '
 'strengthening relations in eleven different sets of words, and because the section is full '
 'nobody will replace it. Leave those two out of the assembly, have a named officer write and '
 'sign them, and record in the brief which sections a person wrote.'],
t_say=[('Exclude the decision: ', 'Objectives and the line to take are out of scope.'),
       ('Keep the blank: ', 'Where the files hold nothing, leave it blank and say so.'),
       ('Name the author: ', 'Sections 5 and 6 drafted and signed by the desk officer.')],
t_bound=('Assembly can retrieve what has been decided and recorded. It cannot produce a '
         'decision nobody has taken, and asked for one it will produce prose instead, which '
         'is worse than a gap because a full section does not get filled. Only a person who '
         'will be in the room can write what this side wants from the room.'),
t_a=[('Objectives and the line to take are out of ____________.', 'scope'),
     ('Where the files hold nothing, leave it ____________ and say so.', 'blank'),
     ('Sections 5 and 6 drafted and ____________ by the desk officer.', 'signed'),
     ('The comparison is not with a better brief; it is with ____________ brief.', 'no'),
     ('Careful ____________ prose about strengthening relations.', 'interchangeable'),
     ('A full section does not get ____________.', 'filled')],
t_b_rubric='Rewrite each as a correct second conditional.',
t_b=[('If we would raise it now, they refuse.', 'if we raised it now, they would refuse'),
     ('If the figures was current, the brief is sound.', 'if the figures were current, the brief would be sound'),
     ('If I was the Minister, I will not mention it.', 'if I were the Minister, I would not mention it'),
     ('If they ask, we would have no answer.', 'if they asked, we would have no answer')],

case=dict(
 title='The Decision Room · Who writes the line to take',
 brief=[
  'Four of the six sections of each brief assemble well. The objectives and the line to take '
  'must be written by a person, and there are eleven of each, due in six days.',
  'Policy Planning has two officers. The eleven posts could each write their own in an hour, '
  'but the lines would then differ across the region on three issues the Minister will be '
  'asked about everywhere.',
  'Lina Khalil wants the posts to write them. Hana Mourad wants the Ministry to write the '
  'three cross-regional lines centrally and leave the rest to posts. Faris Said says a line '
  'written in the capital for a conversation in Astrene will not survive the conversation.'],
 exhibit=figs.datatable('WHAT MUST BE WRITTEN',
                        ['', 'Number', 'Note'],
                        [['country briefs', '11', 'four sections assembled'],
                         ['objectives sections to write', '11', '~3 sentences each'],
                         ['lines to take to write', '11', 'up to 6 questions each'],
                         ['issues arising in every country', '3', 'transit, fees, a visa question'],
                         ['officers available in Policy Planning', '2', 'for 6 days'],
                         ['posts able to draft within a day', '11', 'all']]),
 exhibit_cap='Three issues will arise in all eleven capitals; the rest are local.',
 exhibit_note='In 2023 two posts gave different answers on a visa question in the same week, '
              'which was raised with the Ministry by a third state.',
 voices=[('Lina Khalil', 'Bilateral Affairs',
          'Posts write both. They know the interlocutor, they know what was said last time, '
          'and they can do it in an hour. The capital cannot.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Posts write the local lines; we write the three that arise everywhere. Otherwise we '
          'repeat 2023, when two posts answered the same visa question differently and a third '
          'state noticed.'),
         ('Ambassador Faris Said', 'Head of Mission, Astrene',
          'Send me the three central lines and I will use them. Send me a local line written '
          'in the capital and I will have to depart from it in the room, which is worse than '
          'not having one.')],
 steps=[('Find it', 'How many issues arise in every country?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Faris object to centrally written local lines?'),
        ('Weigh it', 'Consistency across the region against usability in the room.'),
        ('Decide', 'Who writes which lines?')],
 analysis=[('Find it. How many officers has Policy Planning for six days?', 'two'),
           ('Compare it. What does Hana propose?', 'central lines on the three cross-regional issues, local lines by posts'),
           ('Infer it. What happened in 2023?', 'two posts answered the same visa question differently and a third state noticed'),
           ('Weigh it. Why can the capital not write local lines?', 'because it does not know the interlocutor or what was said last time'),
           ('Decide. What would you do?', 'answers vary; the split addresses both failures and costs two officers three days')],
 decision='Write who drafts what, and how consistency is kept.',
 decision_steps=['Say who writes the cross-regional lines.',
                 'Say who writes the local lines and objectives.',
                 'Say what happens if a post disagrees with a central line.',
                 'Say what is recorded on the face of each brief.'],
 bank=['The 3 lines arising in every country are written by …',
       'Objectives and local lines are written by …',
       'Where a post disagrees with a central line, …',
       'Each brief states …',
       'This is reviewed …'],
 outcome='Policy Planning wrote the three cross-regional lines; the eleven posts wrote their '
         'own objectives and local lines and signed them, and each brief named the author of '
         'every section. On the tour the three central lines were used in nine capitals '
         'unchanged. In Astrene Faris departed from the transit line in the room and reported '
         'that he had done so and why within the hour, which the Ministry used to rewrite the '
         'line before the last three stops. Lina, who had wanted posts to write everything, '
         'says the three central lines turned out to be the only reason the Ministry knew the '
         'transit line was wrong, because eleven separate local lines would have diverged '
         'without anybody noticing.',
 outcome_q=[('Who wrote what?', 'the Ministry wrote the three cross-regional lines; posts wrote objectives and local lines'),
            ('What did Lina conclude?', 'that the central lines were what revealed the transit line was wrong')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Produce eleven country briefs',
 task=['This is the tasking issued on the Tuesday afternoon, nine days before the tour.',
       'It produced four excellent sections and two that were identical in all eleven '
       'briefs.'],
 draft=['Produce country briefs for the tour.',
        'Include the usual sections.',
        'Use what we have on file.',
        'Give the trade and political background.',
        'Set out our objectives.',
        'In time for the briefing pack.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fifth one asks for a decision nobody has taken.',
 asked=['The 4 background sections only',
        'Figures with published dates',
        'Blanks where the files are silent'],
 back=['Six sections in every brief',
       'Objectives identical in all 11',
       'Two trade figures 3 years out of date'],
 gap='"The tour" does not say which countries, "the usual sections" does not list them, "what '
     'we have on file" admits superseded material, and "set out our objectives" asks for '
     'something no file contains.',
 back_cap='Eleven briefs, four strong sections each, and the two sections the Minister reads '
          'were written by nobody.',
 back_note='Line five is the failure. An objective is a decision, and asked to retrieve one '
           'the method generalises from positions.',
 diagnosis=[('[1] "country briefs for the tour" — which countries, and how many?', 'unscoped set'),
            ('[2] "the usual sections" — which sections, and how many?', 'unscoped set'),
            ('[3] "use what we have on file" — from what date, and how much?', 'unbounded quantity'),
            ('[4] "the trade and political background" — to what length?', 'unbounded quantity'),
            ('[5] "set out our objectives" — produced by whom, and signed by whom?', 'undefined done'),
            ('[6] "in time for the briefing pack" — ready when, and handed to whom?', 'undefined done')],
 rewrite='Rewrite the tasking so that only the retrievable sections are assembled.',
 scaffold=['What the desk officer is left to do',
           'Which sections are covered and which excluded',
           'The files, the statistics and the reporting, bounded',
           'Dated figures, file references, a page a section, stale figures marked',
           'Eleven briefs of four sections, to whom and by when',
           'What to do where the files hold nothing'],
 bank=['Assemble … so that a desk officer has only to …',
       'Cover … ; … are out of scope and are not to be drafted.',
       'Work from … , … and …',
       'For each section give … ; list … ; keep each to … ; mark …',
       'Return … briefs of … sections, presented to … , by …',
       'Where the files hold nothing on a section … , … rather than …'],
 check=['Are the two decided sections excluded by name?',
        'Is the file material bounded by date?',
        'Is each section capped in length?',
        'Is a blank required rather than a generalisation?'],
 model=['Assemble the background sections of the 11 country briefs so that a desk officer has only to write objectives and the line to take',
        'The 4 background sections only; objectives and the line to take are out of scope and are not to be drafted',
        'The Ministry’s own files, published official statistics, and the last 3 years of mission reporting',
        'For each of the 4 sections give every figure with its published date; list outstanding issues and previous commitments with file references; keep each section to 1 page; mark any figure whose published date is more than 12 months old',
        '11 briefs of 4 sections each, presented to a desk officer for the 2 remaining sections, by 18:00 on Wednesday',
        'Where the files hold nothing on a section for a country, leave it blank and say so rather than generalising from the region'],
 cost='11 objectives sections that said nothing, which a Minister carried into 11 capitals, '
      'and 2 trade figures 3 years out of date in briefs used in bilateral meetings.'),

rev_fig=figs.split('SECOND CONDITIONAL',
                   'Wrong',
                   ['If we would raise it, they refuse.',
                    'If the figures was current …',
                    'If I was the Minister, I will …',
                    'If they ask, we would have …'],
                   'Right',
                   ['If we raised it, they would refuse.',
                    'If the figures were current …',
                    'If I were the Minister, I would …',
                    'If they asked, we would have …']),
rev_fig_cap='If plus past simple, would plus infinitive, and were for all persons.',
rev=dict(
 read=[('Most of a country brief is', ['judgement', 'retrieval', 'statistics', 'opinion'], 1),
       ('The right comparison is with', ['a perfect brief', 'no brief', 'last year’s brief', 'a post’s brief'], 1),
       ('Objectives cannot be assembled because they are', ['secret', 'decisions nobody has taken', 'too long', 'in the annex'], 1),
       ('In the Decision Room, who wrote the cross-regional lines?', ['posts', 'Policy Planning', 'the Minister', 'nobody'], 1)],
 listen_text='An objective is what this side wants out of ninety minutes with one person on a '
             'particular afternoon, and nobody has decided it until somebody decides it. Ask '
             'for it anyway and you will get careful interchangeable prose, and because the '
             'section is full nobody will replace it.',
 listen=[('Ninety ____________ with one person.', 'minutes'),
         ('Nobody has decided it until somebody ____________ it.', 'decides'),
         ('Careful ____________ prose.', 'interchangeable'),
         ('Because the section is ____________ nobody will replace it.', 'full')],
 speak=['Say what you want out of your next meeting in three sentences.',
        'Ask three second-conditional questions about a decision in your work.'],
 write='Write one line excluding a decided section from an assembly tasking.',
 vocab=[('The agreed form of words for a particular question is a ____________.', 'line to take'),
        ('A position beyond which the Ministry will not go is a ____________.', 'red line'),
        ('The opening section saying why this meeting is happening now is a ____________.', 'scene-setter'),
        ('Something concrete a meeting is meant to produce is a ____________.', 'deliverable outcome'),
        ('Something one side has already undertaken to do is a ____________.', 'previous commitment')],
 gram=[('If we ____________ (raise) it now, they would refuse.', 'raised'),
       ('If the figures ____________ (be) current, the brief would be sound.', 'were'),
       ('If I ____________ (be) the Minister, I would not mention it.', 'were'),
       ('If they asked, we ____________ (have) no answer.', 'would have'),
       ('If I ____________ (know) their position, I would say so.', 'knew')]),

found=['Take a brief you use and sort its sections into retrieval and decision.',
       'Write the three sentences of an objective for your next meeting.',
       'Find one figure in a brief whose published date you cannot establish.',
       'Ask who signs the line to take in your office.'],
end_line='A full section nobody wrote is worse than a blank one.',
end_next='Next: Who Said What, and When',
)
