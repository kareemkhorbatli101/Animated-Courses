# -*- coding: utf-8 -*-
import figs

U = dict(
num=3, title='What Reaches the Director',
gram='defining relative clauses',
ai='triage: what reaches the Director and what does not',
strap='CEFR B1 · Grammar: defining relative clauses · AI: what reaches the Director',
cando=['use that, which, who and where to define which thing I mean',
       'leave out the relative pronoun where English allows it',
       'write a triage rule that names the cases exactly',
       'say what a filter cannot see, whatever the threshold',
       'decide what is done about the items a filter suppresses'],
hero=('ELEVEN ITEMS, NOT NINETY',
      ['The Director used to receive ninety items a day and read thirty.',
       'Now she receives eleven. The question is what is in the other seventy-nine.'],
      [(740, 'purple', 'short'), (1400, 'orange', 'long'),
       (2060, 'teal', 'short'), (2700, 'blue', 'long')]),
hero_cap='The Director’s tray, which is the narrowest point in the building.',

warm=['How much reaches the most senior person in your section each day?',
      'Who decides what reaches them?',
      'What happens to the items that do not?'],
read=[
 'Dr Mourad used to receive about ninety items a day. She read perhaps thirty of them '
 'properly, skimmed forty and never reached the rest. Everybody knew this, including the '
 'people who sent the items, and some of them wrote headings designed to survive it.',
 'Since April a triage step has ranked the incoming material and sends her eleven items a '
 'day, with the rest held in a second list. She reads all eleven, which is the first time in '
 'nine years that she has read everything that reached her.',
 'The improvement is real and she describes it in those terms. The question she keeps '
 'returning to is a different one: not whether the eleven are the right eleven, but what is '
 'in the seventy-nine, and who is looking.',
 'In May an item that did not reach her was a note from the post in Astrene reporting that a '
 'Verenian official had asked, informally, whether the Ministry would consider a consular '
 'agreement. The note was routine in form, short, and marked for information. The ranking '
 'placed it fifty-first.',
 'Nothing in the note made it look important. It was important because of a conversation Dr '
 'Mourad had had in March, which was not on any file and which nobody who built the ranking '
 'knew about. The item that mattered was the item which nothing in the item marked.'],
c_a=[('How many items did Dr Mourad receive before?', 'about ninety a day'),
     ('How many did she read properly?', 'about thirty'),
     ('How many does she receive now?', 'eleven'),
     ('What question does she keep returning to?', 'what is in the seventy-nine, and who is looking'),
     ('What was the May item?', 'a note reporting an informal Verenian approach about a consular agreement'),
     ('Why was it important?', 'because of a conversation she had had in March, which was on no file')],
c_b=[('She used to read all ninety items.', 'F'),
     ('Some senders wrote headings designed to survive the old system.', 'T'),
     ('She now reads all eleven.', 'T'),
     ('The May note was long and unusual in form.', 'F'),
     ('The ranking placed it in the top ten.', 'F'),
     ('The conversation in March was on the file.', 'F')],
c_c=[('She skimmed forty and never reached the ____________.', 'rest'),
     ('The rest is held in a second ____________.', 'list'),
     ('The first time in nine ____________ that she has read everything.', 'years'),
     ('A Verenian official had asked, ____________, about an agreement.', 'informally'),
     ('The ranking placed it ____________.', 'fifty-first'),
     ('The item that mattered was the item which nothing in the item ____________.', 'marked')],
c_d=[('Dr Mourad’s question is about the ( eleven / seventy-nine ).', ['eleven', 'seventy-nine'], 1),
     ('Why did the May note rank low?', ['it was badly written', 'nothing in it looked important', 'it was late', 'it was long'], 1),
     ('What made it important?', ['its heading', 'a conversation on no file', 'its length', 'its sender'], 1),
     ('How many items does she now read?', ['thirty', 'eleven', 'ninety', 'seventy-nine'], 1),
     ('What did some senders do under the old system?', ['send fewer items', 'write headings to survive it', 'telephone instead', 'write longer notes'], 1)],
c_e=('Can the pronoun be left out? Put each sentence in the right column.',
     [('The note that she read was short.', 'can be left out'),
      ('The officer who wrote it is in Astrene.', 'cannot be left out'),
      ('The item which nothing marked.', 'cannot be left out'),
      ('The conversation she had in March.', 'already left out'),
      ('The list that holds the rest.', 'cannot be left out'),
      ('The eleven items she receives.', 'already left out')],
     ['can be left out', 'cannot be left out', 'already left out']),

v_fig_title='THE NARROW POINT',
v_fig=[('scale', 'a threshold'), ('key', 'a filter'), ('pin', 'a flag'),
       ('chart', 'noise'), ('shield', 'a watchlist'), ('clock', 'a priority')],
v_fig_cap='Six words for the arrangement that decides what a busy person ever sees.',
vocab=[
 ('a threshold', 'the level at which treatment changes'),
 ('a filter', 'an arrangement that lets some things through and holds others'),
 ('a gatekeeper', 'a person or step without which nothing proceeds'),
 ('a shortlist', 'the reduced list from which a choice is made'),
 ('to flag', 'to mark an item for attention'),
 ('a flag', 'the mark put on an item needing attention'),
 ('an alert', 'a warning sent because something has met a condition'),
 ('a false alarm', 'an alert for something that turns out not to matter'),
 ('a miss', 'a case that should have been caught and was not'),
 ('sensitivity', 'how readily a filter catches the cases it is looking for'),
 ('selectivity', 'how well a filter excludes the cases it is not looking for'),
 ('a cut-off', 'the point beyond which items are not passed on'),
 ('a priority', 'the order in which things are to be dealt with'),
 ('to rank', 'to put items in order by some stated measure'),
 ('a watchlist', 'the list of subjects or names given special attention'),
 ('to suppress', 'to hold something back from a list'),
 ('noise', 'material that carries no information for the purpose at hand'),
 ('a signal', 'an observation that carries information about what is true'),
 ('a trigger', 'the condition that causes an action to happen'),
 ('an exception report', 'a report listing only what departed from the expected')],
v_a=[('How readily a filter catches what it looks for is its ____________.', 'sensitivity'),
     ('How well it excludes what it is not looking for is its ____________.', 'selectivity'),
     ('A case that should have been caught and was not is a ____________.', 'miss'),
     ('An alert for something that turns out not to matter is a ____________.', 'false alarm'),
     ('The list of subjects or names given special attention is a ____________.', 'watchlist'),
     ('A report listing only what departed from the expected is an ____________.', 'exception report'),
     ('Material that carries no information for the purpose is ____________.', 'noise'),
     ('The point beyond which items are not passed on is a ____________.', 'cut-off')],
v_b=[('A filter is an arrangement that lets some things through', 'and holds others.'),
     ('To rank is to put items in order', 'by some stated measure.'),
     ('A trigger is the condition', 'that causes an action to happen.'),
     ('A gatekeeper is a person or step', 'without which nothing proceeds.'),
     ('A shortlist is the reduced list', 'from which a choice is made.')],

g_title='Grammar: defining relative clauses',
g_rule=['A defining clause says which one you mean: the note that she read.',
        'Use who for people, which or that for things, where for places.',
        'Leave out the pronoun when it is the object: the note she read.',
        'Never put a comma before a defining clause; a comma makes it non-defining.'],
g_fig=('LOOSE',
       ['The note, that she read, was short.',
        'The officer which wrote it is in Astrene.',
        'The list what holds the rest.',
        'The item that nothing marked it.'],
       'PRECISE',
       ['The note that she read was short.',
        'The officer who wrote it is in Astrene.',
        'The list that holds the rest.',
        'The item that nothing marked.'],
       'a stray comma, a wrong pronoun and a doubled object',
       'four clauses that say which one is meant'),
g_fig_cap='A comma before a defining clause changes what the sentence is about.',
g_a=[('The note ____________ she read was short.', 'that'),
     ('The officer ____________ wrote it is in Astrene.', 'who'),
     ('The list ____________ holds the rest is reviewed weekly.', 'that'),
     ('The item ____________ nothing in it marked.', 'that'),
     ('The room ____________ the files are kept is on the third floor.', 'where'),
     ('The eleven items ____________ she receives are read in full.', '—'),
     ('The conversation ____________ she had in March is on no file.', '—'),
     ('The official ____________ asked the question was junior.', 'who'),
     ('Anything ____________ cites a treaty goes to Legal as well.', 'that')],
g_b=[('A defining clause takes ( no comma / a comma ) before it.', ['no comma', 'a comma'], 0),
     ('The officer ____ wrote it is in Astrene.', ['which', 'who', 'what', 'whose'], 1),
     ('The room ____ the files are kept is upstairs.', ['which', 'where', 'that', 'who'], 1),
     ('Which sentence is correct?', ['The item that nothing marked it.', 'The item that nothing marked.', 'The item what nothing marked.', 'The item, that nothing marked.'], 1),
     ('The pronoun may be left out when it is the', ['subject', 'object', 'verb', 'place'], 1),
     ('Anything ____ cites a treaty goes to Legal.', ['who', 'that', 'where', 'whose'], 1)],

d1=dict(title='What is in the seventy-nine?',
        fig=(['I read all eleven.', 'That is new.'],
             ['It is. And the seventy-nine?', 'Nobody is reading them.']),
        cap='Dr Mourad and Karim Dalati.',
        lines=[('Dr Mourad', 'For nine years I received ninety items a day and read thirty. Now I '
                             'receive eleven and read all of them.'),
               ('Karim', 'That is a better position than the one you were in.'),
               ('Dr Mourad', 'It is, and I do not want to lose it. My question is about the '
                             'seventy-nine.'),
               ('Karim', 'They are held in a second list. Anybody can open it.'),
               ('Dr Mourad', 'Who does?'),
               ('Karim', 'Nobody, as far as I can establish. It has been opened four times since '
                         'April and three of those were me.'),
               ('Dr Mourad', 'Before, I skimmed forty of the ninety. Badly, and late, but I '
                             'skimmed them.'),
               ('Karim', 'So you had a thin layer of attention across sixty items, and now you '
                         'have a thick layer across eleven.'),
               ('Dr Mourad', 'And nothing at all across seventy-nine. Which is better? I do not '
                             'know.'),
               ('Karim', 'Nor do I. The May note would have been in your skimmed forty under the '
                         'old arrangement.'),
               ('Dr Mourad', 'It would, and I might have skimmed past it. I am not claiming the '
                             'old way worked.'),
               ('Karim', 'Then the question is not old against new. It is who reads the second '
                         'list.')],
        a=[('How much did Dr Mourad read before and now?', 'thirty of ninety before; all eleven now'),
           ('How often has the second list been opened?', 'four times since April, three of them by Karim'),
           ('What did she have before?', 'a thin layer of attention across sixty items'),
           ('What does she have now?', 'a thick layer across eleven and nothing across seventy-nine'),
           ('What does Karim say the real question is?', 'who reads the second list')],
        b=[('They are held in a second ____________.', 'list'),
           ('A thin layer of attention across ____________ items.', 'sixty'),
           ('I am not claiming the old way ____________.', 'worked'),
           ('It is who reads the second ____________.', 'list')]),
d2=dict(title='Nothing in it marked it',
        fig=(['Why did it rank fifty-first?', 'Because nothing in it was unusual.'],
             ['It was the most important note that week.', 'Not on its own, it was not.']),
        cap='Lina and Karim, over the May note.',
        lines=[('Lina', 'The May note ranked fifty-first. Can you tell me why?'),
               ('Karim', 'I can. It was short, it was in the standard form, it was marked for '
                         'information, and it used no word on any watchlist.'),
               ('Lina', 'It reported that Verenia had raised a consular agreement.'),
               ('Karim', 'Informally, and in a subordinate clause. Posts report informal '
                         'approaches twice a week.'),
               ('Lina', 'So the item was ordinary.'),
               ('Karim', 'The item was ordinary. What made it matter was a conversation in '
                         'March that is on no file, which means no ranking could have seen it.'),
               ('Lina', 'Could we put the March conversation on a watchlist?'),
               ('Karim', 'We could put consular agreement on a watchlist, and we have. That would '
                         'have caught it.'),
               ('Lina', 'Then the problem is solved.'),
               ('Karim', 'The problem of this item is solved. The next one will matter for a '
                         'reason that is also on no file, and the watchlist will not have that '
                         'word on it either.'),
               ('Lina', 'So the watchlist is always one case behind.'),
               ('Karim', 'Always exactly one case behind, and the only thing that is not one case '
                         'behind is somebody reading the second list.')],
        a=[('Why did the note rank fifty-first?', 'short, standard form, marked for information, no watchlist word'),
           ('How often do posts report informal approaches?', 'about twice a week'),
           ('What made the note matter?', 'a March conversation that is on no file'),
           ('What has been added to the watchlist?', 'consular agreement'),
           ('What is Karim’s point about watchlists?', 'that a watchlist is always exactly one case behind')],
        b=[('It used no word on any ____________.', 'watchlist'),
           ('Informally, and in a subordinate ____________.', 'clause'),
           ('Which means no ranking could have ____________ it.', 'seen'),
           ('Always exactly one case ____________.', 'behind')]),

speak=[('Say it correctly',
        ['Student A: define six things using that, which, who and where.',
         'Student B: say which pronouns could be left out.',
         'Find the sentence where a comma would change the meaning.']),
       ('Spoken tasking',
        ['Describe what reaches the most senior person in your section.',
         'Say what the rule is and who wrote it.',
         'Your partner asks what happens to everything else.']),
       ('One case behind',
        ['In pairs, name a watchlist or alert list your office uses.',
         'Say what it would have missed last year.',
         'Find the case that no list would have caught.'])],

ext_title='Triage makes a senior person better informed about less, and the question is who reads the rest',
ext_fig=figs.datatable('NINETY ITEMS A DAY, BEFORE AND AFTER',
                       ['', 'Before', 'After'],
                       [['items reaching the Director', '90', '11'],
                        ['read properly', '~30', '11'],
                        ['skimmed', '~40', '0'],
                        ['never reached', '~20', '79'],
                        ['second list opened', 'n/a', '4 times in 2 months'],
                        ['the May note', 'in the skimmed 40', 'ranked 51st']]),
ext_fig_cap='Attention has become deeper and narrower, and the skimmed layer has gone entirely.',
ext=[
 'Triage is among the most immediately useful things a ministry can do with these systems, '
 'and the figures are striking. A Director who received ninety items a day and read thirty '
 'now receives eleven and reads all of them. For the first time the senior person is fully '
 'informed about everything that reaches them, which has not been true in most ministries for '
 'a generation.',
 'What has changed, however, is not only the volume. The old arrangement had three layers: '
 'read properly, skimmed, never reached. Skimming is a weak form of attention and it is easy '
 'to disparage, but it catches things, and a filter removes it entirely. Everything is now '
 'either read in full or not seen at all.',
 'The items that fall out are the ones nothing in them marks. A ranking works on what an item '
 'contains: its length, its form, its urgency marking, the words in it. An item is important '
 'when it connects to something the reader knows and the item does not say — a conversation '
 'in March, a hint from a counterpart, a name that means something to one person.',
 'Watchlists help and they are structurally late. Adding consular agreement to the list after '
 'a note about a consular agreement was missed will catch the next note about consular '
 'agreements. It will not catch the next item that matters for a reason nobody has written '
 'down, and that is the category the triage removed.',
 'So the serious question is not the threshold but the second list. In most places nobody has '
 'been given the job of reading what the filter held back, and the list is opened a handful '
 'of times a year by whoever built it. Twenty minutes a day of somebody reading headings is '
 'the only part of the old skimming layer that can be deliberately rebuilt.'],
dp1=('Triage and human review',
     'Services deploying triage report high first-pass accuracy and retain human review of '
     'held or flagged material; published guidance consistently places a person in the loop '
     'rather than relying on the filter alone.',
     'Source: reported practice and guidance in foreign and consular services, 2025–2026.'),
e_a=[('What has triage done for the Director?', 'she now reads everything that reaches her, for the first time'),
     ('What layer has disappeared?', 'skimming'),
     ('What kind of item falls out?', 'one that nothing in it marks as important'),
     ('Why are watchlists structurally late?', 'because they are built from the case that was already missed'),
     ('What is the serious question?', 'who reads the second list')],
e_b=[('Triage reduces how much a senior person reads in full.', 'F'),
     ('Skimming catches nothing.', 'F'),
     ('A ranking can see what an item connects to outside itself.', 'F'),
     ('A watchlist catches the next case of the same kind.', 'T'),
     ('Most ministries have somebody reading the held list.', 'F'),
     ('The threshold is the most serious question.', 'F')],

w_model=(
 'Purpose: decide what reaches the Director each day, and make sure somebody reads what does '
 'not. Scope: items addressed to Policy Planning; consular casework is out of scope. Inputs: '
 'the incoming traffic, the 14 subjects on the watchlist, and the Director’s standing '
 'priorities of 2 April. Criteria: pass no more than 12 items a day; pass every item that '
 'names a subject on the watchlist, comes from a Head of Mission, or reports an approach by a '
 'foreign official, whatever its form; hold the remainder in a second list with a 1-line '
 'heading each. Done: 12 items or fewer by 08:30, and a second list of headings read by the '
 'duty officer before 10:00. Fallback: where an item would be the thirteenth, pass it and '
 'record that the daily limit was exceeded, rather than holding it to keep the figure.'),
w_fig=figs.spec_card('THE TRIAGE RULE',
                     [('Purpose', 'decide what reaches the Director, and who reads the rest'),
                      ('Scope', 'items to Policy Planning; consular casework excluded'),
                      ('Inputs', 'incoming traffic, 14 watchlist subjects, standing priorities'),
                      ('Criteria', 'max 12; always pass 3 named kinds; the rest get a heading'),
                      ('Done', '12 by 08:30; the held list read by 10:00'),
                      ('Fallback', 'a thirteenth: pass it and record the breach')]),
w_fig_cap='The fallback line stops the limit becoming more important than the item.',
w_task='Write a triage rule for the senior person in your own section.',
w_steps=['Say what the rule decides and who reads what is held.',
         'Name the sources the decision is made from.',
         'Set a daily limit as a number.',
         'Name the kinds of item that always pass, whatever their form.',
         'Say what happens when an item would exceed the limit.'],
w_bank=['Decide what reaches … each day, and make sure …',
        'Cover … ; … is out of scope.',
        'Work from … , the … subjects on … , and …',
        'Pass no more than … ; pass every item that … , … or … , whatever its form; hold the remainder …',
        'Where an item would be the … , … rather than …'],
w_check=['Is the daily limit a number?',
         'Are the always-pass kinds named, not described?',
         'Is somebody named to read the held list, by a time?',
         'Does the limit yield to the item rather than the other way round?'],

t_title='Triage: what reaches the Director and what does not',
t_fig=figs.split('THREE LAYERS, THEN TWO',
                 'Before triage',
                 ['read properly: about 30',
                  'skimmed: about 40',
                  'never reached: about 20',
                  'the May note: skimmed'],
                 'After triage',
                 ['read properly: 11',
                  'skimmed: none',
                  'held in a list: 79',
                  'the May note: ranked 51st']),
t_fig_cap='The middle layer was weak and it was not nothing, and it is the layer that vanished.',
t_body=[
 'Use triage, because the gain is one most ministries have wanted for a generation. A senior '
 'person who read a third of what arrived now reads all of it, and the difference in the '
 'quality of their decisions is visible within a month. Nobody who has had this arrangement '
 'wants to go back.',
 'Then notice which layer has disappeared. The old pile had three: read, skimmed, missed. '
 'Skimming is weak attention and it is real attention, and a filter does not produce less '
 'skimming — it produces none. Everything is now read in full or not seen, and the item that '
 'falls out is the item nothing in it marks.',
 'So give the held list a reader. A ranking can only work on what an item contains, and items '
 'matter for reasons that live outside them: a conversation in March, a name that means '
 'something to one person. A watchlist will catch the next case of a kind you have already '
 'missed, which is useful and permanently one case behind. Twenty minutes a day of somebody '
 'reading headings is the only honest replacement for the layer you removed.'],
t_say=[('Set the limit: ', 'No more than twelve items a day.'),
       ('Name the always-pass: ', 'Anything from a Head of Mission, whatever its form.'),
       ('Give the rest a reader: ', 'The duty officer reads the held headings by ten.')],
t_bound=('A triage step ranks items by what they contain. It cannot know what an item '
         'connects to, it cannot see a conversation that is on no file, and a watchlist is '
         'always built from the case that was already missed. A better threshold does not '
         'address any of this.'),
t_a=[('No more than twelve items a ____________.', 'day'),
     ('Anything from a Head of Mission, whatever its ____________.', 'form'),
     ('The duty officer reads the held ____________ by ten.', 'headings'),
     ('A filter does not produce less skimming — it produces ____________.', 'none'),
     ('Items matter for reasons that live ____________ them.', 'outside'),
     ('A watchlist is permanently one case ____________.', 'behind')],
t_b_rubric='Rewrite each triage instruction so that it names the cases exactly.',
t_b=[('Send up the important items.', 'pass no more than twelve a day, and always pass these three kinds'),
     ('Use judgement on the rest.', 'hold the remainder in a list with a one-line heading each'),
     ('Flag anything unusual.', 'pass every item reporting an approach by a foreign official'),
     ('Keep the number down.', 'where an item would be the thirteenth, pass it and record the breach')],

case=dict(
 title='The Decision Room · Four openings in two months',
 brief=[
  'The second list has been opened four times in two months, three of them by the person who '
  'built it. It holds about seventy-nine items a day.',
  'Karim has proposed that the duty officer read the headings of the held list every morning, '
  'which he estimates at twenty minutes. The duty officer post is already carrying the '
  'low-confidence routing list from the registry, which is ten minutes.',
  'Dr Mourad notes that she is asking a junior officer to do, in thirty minutes, the skimming '
  'that she herself used to do badly across sixty items — and that the junior officer does '
  'not have the March conversation either.'],
 exhibit=figs.datatable('THE HELD LIST',
                        ['', 'Figure', 'Note'],
                        [['items held per day', '~79', '—'],
                         ['list opened since April', '4 times', '3 by Karim'],
                         ['items found to matter', '1', 'the May note'],
                         ['time to read the headings', '~20 min', 'estimate'],
                         ['duty officer’s other list', '10 min', 'registry low-confidence'],
                         ['the March conversation', 'on no file', 'held by 1 person']]),
 exhibit_cap='A junior officer is being asked to notice what mattered to a Director for reasons the Director never wrote down.',
 exhibit_note='The May note is the only item so far known to have been wrongly held; there may '
              'be others nobody has looked for.',
 voices=[('Karim Dalati', 'Information Security and Records',
          'Twenty minutes a day. It is the cheapest safeguard in the building and it is the '
          'only one that does not depend on predicting what will matter.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'A duty officer reading headings will not see what I would have seen, because what '
          'I would have seen depends on conversations I have not recorded. I am not arguing '
          'against the twenty minutes; I am saying it is not the thing we lost.'),
         ('Lina Khalil', 'desk officer, Bilateral Affairs',
          'Then the Director should read the headings. Eighty headings is four minutes. It '
          'is her knowledge that does the work, not the reading.')],
 steps=[('Find it', 'How often is the held list read, and by whom?'),
        ('Compare it', 'What does the duty officer already carry?'),
        ('Infer it', 'Why does Dr Mourad say the officer will not see it?'),
        ('Weigh it', 'Twenty minutes of a junior against four minutes of a Director.'),
        ('Decide', 'Who reads the held list?')],
 analysis=[('Find it. How many times has it been opened?', 'four, three of them by Karim'),
           ('Compare it. What else does the duty officer read?', 'the registry low-confidence list, ten minutes'),
           ('Infer it. What does the knowledge depend on?', 'conversations the Director has not recorded'),
           ('Weigh it. What is Lina’s proposal?', 'that the Director reads eighty headings in four minutes'),
           ('Decide. What would you do?', 'answers vary; the reader must be the person whose knowledge does the work')],
 decision='Write who reads the held list and when.',
 decision_steps=['Say who reads it and by what time each day.',
                 'Say what they read: headings, or more.',
                 'Say what they do when something looks wrong.',
                 'Say how the arrangement is reviewed.'],
 bank=['The held list is read by … by … each day.',
       'They read …',
       'Where an item looks wrongly held, …',
       'The arrangement is reviewed …',
       'This is recorded in …'],
 outcome='The Director reads the eighty headings herself each morning, which takes between '
         'four and seven minutes, and the duty officer keeps the registry list. In the first '
         'four months she pulled nine items out of the held list, seven of which she says she '
         'would not have been able to explain to anybody in advance. Karim notes that his '
         'twenty-minute proposal would have cost three times as much and caught fewer, and '
         'that he had proposed the wrong reader for a sound reason, which was that he was '
         'trying not to ask a Director for more work.',
 outcome_q=[('How many items did the Director pull out in four months?', 'nine, seven of which she could not have explained in advance'),
            ('Why had Karim proposed the duty officer?', 'because he was trying not to ask a Director for more work')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Send up what matters',
 task=['This is the tasking that configured the triage step in April, agreed in a meeting and '
       'written down afterwards by somebody who had not been at it.',
       'It produced a filter that works well, and a held list that nobody was told to read.'],
 draft=['Send the Director what matters each day.',
        'Use the usual priorities.',
        'Keep the daily number manageable.',
        'Hold back the routine material.',
        'Make sure nothing important is missed.',
        'Review it if there are problems.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fifth one is an instruction nobody can carry out.',
 asked=['A daily limit as a number',
        'The kinds of item that always pass',
        'A named reader for the held list'],
 back=['11 items a day, well chosen',
       '79 items held, nobody reading',
       '1 note missed and found by accident'],
 gap='"What matters" states no test, "the usual priorities" names no document, "manageable" '
     'is not a number, "make sure nothing important is missed" cannot be done by a filter, '
     'and nothing anywhere says who reads what is held.',
 back_cap='A good filter, an unread list of seventy-nine, and an instruction that was impossible.',
 back_note='Instruction five is the one that mattered and the one that could not be followed: '
           'a filter cannot know what is important for reasons outside the item.',
 diagnosis=[('[1] "what matters" — matters by what test?', 'unstated criterion'),
            ('[2] "the usual priorities" — which document, of what date?', 'unscoped set'),
            ('[3] "a manageable number" — how many a day?', 'unbounded quantity'),
            ('[4] "the routine material" — held where, read by whom?', 'unscoped set'),
            ('[5] "nothing important is missed" — judged against what?', 'unstated criterion'),
            ('[6] "review it if there are problems" — noticed how, by whom?', 'unbounded quantity')],
 rewrite='Rewrite the tasking so that the limit is a number, the always-pass cases are named, '
         'and the held list has a reader.',
 scaffold=['What the rule decides, and what must happen to what it holds',
           'Which items are covered and what is out of scope',
           'The traffic, watchlist and priorities it works from',
           'The daily limit, the always-pass cases, and what the held list carries',
           'What comes back by when, and who reads the rest by when',
           'What to do when an item would exceed the limit'],
 bank=['Decide what reaches … each day, and make sure …',
       'Cover … ; … is out of scope.',
       'Work from … , the … subjects on the watchlist, and … of …',
       'Pass no more than … a day; pass every item that … , … or … ; hold the remainder with …',
       'Return … by … , and a second list read by … before …',
       'Where an item would be the … , … rather than …'],
 check=['Is the daily limit a figure?',
        'Are the always-pass kinds named?',
        'Does the held list have a named reader and a time?',
        'Does the limit yield to the item?'],
 model=['Decide what reaches the Director each day, and make sure somebody reads what does not',
        'Items addressed to Policy Planning; consular casework is out of scope',
        'The incoming traffic, the 14 subjects on the watchlist, and the Director’s standing priorities of 2 April',
        'Pass no more than 12 items a day; pass every item that names a subject on the watchlist, comes from a Head of Mission, or reports an approach by a foreign official, whatever its form; hold the remainder in a second list with a 1-line heading each',
        '12 items or fewer by 08:30, and a second list of headings read by the duty officer before 10:00',
        'Where an item would be the thirteenth, pass it and record that the daily limit was exceeded, rather than holding it to keep the figure'],
 cost='79 items a day held and unread for 2 months, 1 informal approach from a foreign '
      'official ranked fifty-first, and a list opened 4 times by the person who built it.'),

rev_fig=figs.split('DEFINING RELATIVE CLAUSES',
                   'Wrong',
                   ['The note, that she read, was short.',
                    'The officer which wrote it.',
                    'The list what holds the rest.',
                    'The item that nothing marked it.'],
                   'Right',
                   ['The note that she read was short.',
                    'The officer who wrote it.',
                    'The list that holds the rest.',
                    'The item that nothing marked.']),
rev_fig_cap='No comma, the right pronoun, and no doubled object.',
rev=dict(
 read=[('Triage removes which layer of attention?', ['reading in full', 'skimming', 'filing', 'clearance'], 1),
       ('A ranking works on', ['what an item connects to', 'what an item contains', 'who sent it only', 'the date only'], 1),
       ('A watchlist is', ['ahead of the next case', 'one case behind', 'complete', 'unnecessary'], 1),
       ('In the Decision Room, who reads the held list?', ['the duty officer', 'the Director', 'nobody', 'Karim'], 1)],
 listen_text='Use triage, because a senior person who read a third of what arrived now reads '
             'all of it. Then notice which layer has disappeared: the old pile had read, '
             'skimmed and missed, and a filter does not produce less skimming, it produces '
             'none. So give the held list a reader, because the item that falls out is the '
             'item nothing in it marks.',
 listen=[('A senior person who read a ____________ of what arrived.', 'third'),
         ('A filter does not produce less skimming, it produces ____________.', 'none'),
         ('Give the held list a ____________.', 'reader'),
         ('The item nothing in it ____________.', 'marks')],
 speak=['Say what reaches the senior person in your section, and what the rule is.',
        'Say who reads what is held back, and when.'],
 write='Write one triage rule naming the items that always pass.',
 vocab=[('How readily a filter catches what it looks for is its ____________.', 'sensitivity'),
        ('A case that should have been caught and was not is a ____________.', 'miss'),
        ('The list of subjects given special attention is a ____________.', 'watchlist'),
        ('Material carrying no information for the purpose is ____________.', 'noise'),
        ('The point beyond which items are not passed on is a ____________.', 'cut-off')],
 gram=[('The note ____________ she read was short.', 'that'),
       ('The officer ____________ wrote it is in Astrene.', 'who'),
       ('The room ____________ the files are kept is on the third floor.', 'where'),
       ('The eleven items ____________ she receives are read in full.', '—'),
       ('Anything ____________ cites a treaty goes to Legal as well.', 'that')]),

found=['Find out how much reaches the senior person in your section each day.',
       'Ask what happens to everything else, and who reads it.',
       'Name one item that mattered for a reason not written in it.',
       'Add a named reader and a time to your own held list.'],
end_line='The item that mattered was the item which nothing in the item marked.',
end_next='Next: The Transcript Is Not the Meeting',
)
