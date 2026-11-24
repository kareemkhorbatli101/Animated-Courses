# -*- coding: utf-8 -*-
import figs

U = dict(
num=6, title='A Report or The Report',
gram='articles: a, the and zero',
ai='context: what it can see, and what it cannot',
strap='CEFR B1 · Grammar: articles: a, the and zero · AI: context — what it can see, and what it cannot',
cando=['choose between a, the and no article according to what my reader already knows',
       'spot the moment I say "the report" to somebody who has never seen it',
       'list what a system can and cannot see when I ask it something',
       'write down the background a task needs instead of assuming it',
       'explain why a correct answer to a badly framed question is still useless'],
hero=('THE SECOND FLOOR, WHERE EVERYBODY KNOWS WHAT THE FILE IS',
      ['Four people who share six years of context.',
       'None of it is written anywhere at all.'],
      [(760, 'purple', 'long'), (1460, 'blue', 'short'),
       (2160, 'teal', 'long'), (2720, 'grey', 'short')]),
hero_cap='Everything in this room is "the" something. Nobody outside it knows which.',

warm=['When did somebody last say "the file" to you and you had no idea which file?',
      'What does your team know that a new colleague would have to be told?',
      'What can a person see when you email them a question? What cannot they see?'],
read=[
 'Jonas asked a simple question one Thursday: produce a one-page summary of the position for '
 'the meeting. Everybody in the room knew what he meant. The position means the cash '
 'position, because that is the only position anybody at Arclight discusses on a Thursday, '
 'and the meeting means the Friday client review, because there is only one meeting with a '
 'capital letter in it.',
 'He wrote the same sentence down and sent it out. What came back was a summary of Arclight’s '
 'market position, three paragraphs about competitors, and a note about a meeting in '
 'September. Every word of it was reasonable. Not one word of it was what he wanted, and '
 'the fault was entirely in the word "the".',
 'English uses "the" to mean we both already know which one. It is a signal between people '
 'who share a history. When Dalia says the ledger, four people know she means the client '
 'ledger and not the supplier one, because they have all been in the room for the two years '
 'in which that became obvious.',
 'Anybody outside the room is in a different position, and so is any system. It does not '
 'have the two years. It has whatever is in front of it, which on that Thursday was one '
 'sentence containing three definite articles and no nouns that would mean anything to a '
 'stranger.',
 'Dalia now has a rule she applies when she is writing anything that will be read by '
 'somebody who was not there. Read it back and stop at every "the". For each one, ask: have '
 'I told this reader which one? If not, either tell them, or change it to "a". It takes '
 'about twenty seconds and it has saved her more rework than any other habit she has.'],
c_a=[('What did Jonas ask for?', 'a one-page summary of the position for the meeting'),
     ('What did "the position" mean inside the room?', 'the cash position'),
     ('What came back instead?', 'a summary of market position, competitors and a September meeting'),
     ('What does "the" signal in English?', 'that writer and reader both already know which one'),
     ('What is Dalia’s rule?', 'read it back, stop at every "the", and ask whether the reader has been told which one')],
c_b=[('Everybody in the room understood Jonas’s question.', 'T'),
     ('What came back was unreasonable.', 'F'),
     ('"The" signals shared knowledge between writer and reader.', 'T'),
     ('A system at Arclight has the same two years of history as the staff.', 'F'),
     ('Dalia’s rule takes about twenty minutes.', 'F'),
     ('The fault was in the word "the".', 'T')],
c_c=[('There is only one meeting with a capital ____________ in it.', 'letter'),
     ('Not one word of it was what he ____________.', 'wanted'),
     ('"The" is a signal between people who share a ____________.', 'history'),
     ('It has whatever is in ____________ of it.', 'front'),
     ('Read it back and stop at every ____________.', 'the'),
     ('It has saved her more ____________ than any other habit.', 'rework')],
c_d=[('The failure was caused by ( ambiguity / inaccuracy ).', ['ambiguity', 'inaccuracy'], 0),
     ('"The ledger" works inside Arclight because', ['it is written down', 'four people share the history', 'there is only one ledger', 'it is in the rules'], 1),
     ('Dalia’s rule asks her to check', ['every noun', 'every definite article', 'every verb', 'every number'], 1),
     ('The alternative to telling the reader which one is to', ['delete the sentence', 'use "a" instead', 'add a comma', 'use capitals'], 1),
     ('A system has, in place of history,', ['nothing at all', 'whatever is in front of it', 'the full record', 'a summary'], 1)],
c_e=('A, the or zero? Put each phrase in the right column.',
     [('Send me a summary.', 'a — any one'),
      ('Send me the summary.', 'the — the one we both know'),
      ('We need advice.', 'zero — in general'),
      ('Open a new account.', 'a — any one'),
      ('Close the account we discussed.', 'the — the one we both know'),
      ('Clients expect speed.', 'zero — in general')],
     ['a — any one', 'the — the one we both know', 'zero — in general']),

v_fig_title='WHAT IS IN THE ROOM, AND WHAT IS ON THE PAGE',
v_fig=[('bulb', 'context'), ('doc', 'a briefing note'), ('globe', 'a blind spot'),
       ('bank', 'institutional memory'), ('note', 'a caveat'), ('scale', 'a premise')],
v_fig_cap='Six words for the things everybody in a room knows and nobody has written down.',
vocab=[
 ('context', 'the surrounding facts that make a statement mean what it means'),
 ('background', 'what somebody needs to know before the main point makes sense'),
 ('blind spot', 'an area somebody consistently fails to notice'),
 ('visibility', 'how much of a situation somebody is able to see'),
 ('attachment', 'a file sent together with a message'),
 ('thread', 'a chain of messages on one subject'),
 ('briefing note', 'a short document written to bring somebody up to date'),
 ('orientation', 'the process of helping somebody find their way in a new situation'),
 ('institutional memory', 'what an organisation knows because its people remember it'),
 ('silo', 'a part of an organisation that does not share what it knows'),
 ('overlook', 'to fail to notice something that was there to be noticed'),
 ('presume', 'to take something as true without being told it'),
 ('infer', 'to work something out from evidence rather than being told'),
 ('implicit', 'understood without being said'),
 ('explicit', 'said openly and in full'),
 ('recap', 'a short repetition of what has been said so far'),
 ('caveat', 'a warning that limits how a statement should be taken'),
 ('premise', 'a statement that an argument is built on'),
 ('familiarity', 'the state of knowing something well through experience'),
 ('hindsight', 'understanding of an event that only comes afterwards')],
v_a=[('What an organisation knows because its people remember it is its ____________.', 'institutional memory'),
     ('A short document written to bring somebody up to date is a ____________.', 'briefing note'),
     ('Something understood without being said is ____________.', 'implicit'),
     ('A warning that limits how a statement should be taken is a ____________.', 'caveat'),
     ('A department that shares nothing with the others is a ____________.', 'silo'),
     ('To work something out from evidence is to ____________ it.', 'infer'),
     ('In ____________, the warning signs were obvious.', 'hindsight'),
     ('The statement an argument is built on is its ____________.', 'premise')],
v_b=[('A blind spot is an area somebody', 'consistently fails to notice.'),
     ('To presume something is to take it as true', 'without being told it.'),
     ('Visibility is how much of a situation', 'somebody is able to see.'),
     ('A recap is a short repetition of', 'what has been said so far.'),
     ('Orientation is the process of helping somebody', 'find their way in a new situation.')],

g_title='Grammar: articles — a, the and zero',
g_rule=['Use a to introduce something new: I have written a brief.',
        'Use the when the reader already knows which one: Have you read the brief?',
        'Use no article for things in general: Clients expect speed. Advice is free.',
        'A "the" your reader cannot resolve is a question you have not answered.'],
g_fig=('LOOSE',
       ['Send me the summary.',
        'Check the figure against the file.',
        'Add it to the list.',
        'Use the template.'],
       'PRECISE',
       ['Send me a one-page cash summary.',
        'Check the March total against the 14 March ledger.',
        'Add it to the exclusions list in the same run.',
        'Use follow-up template version 4.'],
       'every "the" assumes a shared history',
       'the first mention names the thing'),
g_fig_cap='Four sentences that work perfectly in one room and nowhere else.',
g_a=[('I have written ____________ brief; it is on your desk. (a/the)', 'a'),
     ('Have you read ____________ brief I sent on Tuesday? (a/the)', 'the'),
     ('____________ clients expect a reply within a day. (zero)', 'Clients'),
     ('She asked for ____________ one-page summary. (a/the)', 'a'),
     ('Check it against ____________ 14 March ledger. (a/the)', 'the'),
     ('____________ advice is easy to give and hard to take. (zero)', 'Advice'),
     ('We need ____________ rule for invoices with two dates. (a/the)', 'a'),
     ('____________ rule we agreed on Monday is in version 3. (a/the)', 'The'),
     ('____________ information is uncountable in English. (zero)', 'Information')],
g_b=[('I have written ( the / a ) brief; it is on your desk.', ['the', 'a'], 1),
     ('Have you read ____ brief I sent on Tuesday?', ['a', 'the', 'one', 'some'], 1),
     ('____ clients expect a reply within a day.', ['A', 'The', 'Clients', 'Any client'], 2),
     ('Check it against ____ 14 March ledger.', ['a', 'the', 'one', 'that a'], 1),
     ('We need ____ rule for invoices with two dates.', ['the', 'a', 'some', 'any of'], 1),
     ('____ advice is easy to give.', ['An', 'The', 'Advice', 'Some an'], 2)],

d1=dict(title='Which position?',
        fig=(['A summary of the position, please.', 'Which position?'],
             ['The position. The usual one.', 'I have never seen a usual one.']),
        cap='Jonas and a new colleague, on a Thursday.',
        lines=[('Jonas', 'Can you do me a one-page summary of the position for the meeting?'),
               ('Thomas', 'Which position, and which meeting?'),
               ('Jonas', 'The position. The one we always look at.'),
               ('Thomas', 'I have been here nine days. I have never looked at it once.'),
               ('Jonas', 'Cash. The cash position. And the Friday client review.'),
               ('Thomas', 'Then that is what the sentence should have said.'),
               ('Jonas', 'Everybody here would have known.'),
               ('Thomas', 'Everybody here has been here two years. That is not a plan.'),
               ('Jonas', 'Fair. A one-page summary of the cash position for Friday.'),
               ('Thomas', 'Now I can do it without guessing which of three things you meant.'),
               ('Jonas', 'There are three?'),
               ('Thomas', 'Cash, market and the thing Kenji calls the position. That is three.')],
        a=[('What does Jonas ask for?', 'a one-page summary of the position for the meeting'),
           ('How long has Thomas been at Arclight?', 'nine days'),
           ('Which position did Jonas mean?', 'the cash position'),
           ('What does Thomas say about everybody knowing?', 'that everybody there has two years of history, and that is not a plan'),
           ('How many things could "the position" have meant?', 'three')],
        b=[('A one-page summary of the ____________ position.', 'cash'),
           ('I have been here nine ____________.', 'days'),
           ('That is not a ____________.', 'plan'),
           ('Now I can do it without ____________.', 'guessing')]),
d2=dict(title='What it could and could not see',
        fig=(['It did not know about the call.', 'How would it?'],
             ['I assumed it had the thread.', 'It had one message of it.']),
        cap='Fatima and Jonas, after an answer that was confidently wrong.',
        lines=[('Fatima', 'It told the client the order was still open. The order was cancelled on Monday.'),
               ('Jonas', 'Cancelled where?'),
               ('Fatima', 'On the phone. Nora rang and cancelled it.'),
               ('Jonas', 'Then nothing it could see said the order was cancelled.'),
               ('Fatima', 'I assumed it had the whole thread.'),
               ('Jonas', 'It had the message you forwarded. One message, not the thread.'),
               ('Fatima', 'So it answered correctly on the information it had.'),
               ('Jonas', 'It answered correctly on a false picture, which looks the same from outside.'),
               ('Fatima', 'That is the part I find difficult. It sounded completely certain.'),
               ('Jonas', 'It is always completely certain. That is a separate problem for unit nine.'),
               ('Fatima', 'So before I ask anything, I check what I have actually given it.'),
               ('Jonas', 'What you have given it, and what only exists in a phone call.')],
        a=[('What did the system tell the client?', 'that the order was still open'),
           ('Where had the order been cancelled?', 'on the phone, by Nora'),
           ('What did Fatima assume?', 'that it had the whole message thread'),
           ('What did it actually have?', 'one forwarded message'),
           ('What does Jonas say Fatima should check first?', 'what she has actually given it, and what exists only in a phone call')],
        b=[('The order was ____________ on Monday.', 'cancelled'),
           ('One message, not the ____________.', 'thread'),
           ('It answered correctly on a ____________ picture.', 'false'),
           ('It is always completely ____________.', 'certain')]),

speak=[('Stop at every "the"',
        ['Student A: read out four sentences from a real work email you have sent.',
         'Student B: stop at every "the" and ask which one.',
         'Count how many you could not answer without extra explanation.']),
       ('Spoken specification: brief with the background',
        ['Choose a task that needs background a stranger would not have.',
         'Brief your partner aloud, giving the background before the instruction.',
         'They tell you one thing they still had to guess. That is your blind spot.']),
       ('What can it see?',
        ['In pairs, pick a request you might send to a colleague by email.',
         'List everything they can see. Then list three things they cannot.',
         'Decide which of the three would change their answer.'])],

ext_title='What is in front of it, and nothing else',
ext_fig=figs.datatable('WHAT A REQUEST CARRIES, AND WHAT IT LEAVES BEHIND',
                       ['In front of it', 'Not in front of it', 'Who knows the difference?'],
                       [['the message you sent', 'the phone call on Monday', 'you'],
                        ['the file you attached', 'the other six in the folder', 'you'],
                        ['the words of the question', 'what you meant by "the position"', 'you'],
                        ['general knowledge', 'how your company does it', 'you'],
                        ['what you wrote today', 'what you agreed in March', 'you']]),
ext_fig_cap='Every row has the same answer in the third column.',
ext=[
 'The single most common reason a reasonable question produces an unreasonable answer has '
 'nothing to do with capability. It is that the question was framed by somebody standing '
 'inside a situation, and answered by something standing outside it. The information that '
 'would have made the question clear was never in the message, because to the person writing '
 'it, that information was not information. It was just how things are.',
 'This is worth being precise about, because it is easy to overcorrect. A system is not '
 'ignorant in general. It will often know a great deal about invoices, logistics, contract '
 'law and the usual shape of a reminder letter. What it cannot know is anything particular '
 'to you: which ledger you mean, what you agreed with Nora in March, that Thursday means '
 'cash and Friday means clients.',
 'The practical consequence is that the useful part of a brief is usually the part that '
 'feels unnecessary. Nobody enjoys writing down that the client ledger is the one in the '
 'shared folder and the supplier ledger is the one Kenji keeps. It feels like explaining '
 'something everybody knows. Everybody in the room knows it. The room is not where the work '
 'is being done any more.',
 'There is a cheap test for this and it is worth doing once on anything important. Read your '
 'own request as though you had joined the company last week. Every time you hit a word that '
 'would make you ask a question, you have found a piece of context that has to be either '
 'supplied or removed. Most people find between three and six on their first attempt.',
 'The deeper point is that a confident answer tells you nothing about whether the picture '
 'was complete. An answer built on a missing phone call sounds exactly like an answer built '
 'on everything. There is no tone of voice for I did not know about Monday, which is why '
 'checking what was supplied has to happen before the answer arrives, not after.'],
dp1=('Where rework comes from',
     'Studies of knowledge work commonly attribute a substantial share of rework to '
     'incomplete or ambiguous initial requests rather than to execution errors.',
     'Source: general knowledge-work and project research, 2026. Proportions vary by discipline.'),
e_a=[('What is the most common reason a reasonable question fails?', 'the question was framed inside a situation and answered from outside it'),
     ('Why does the writer warn against overcorrecting?', 'because a system is not ignorant in general, only about what is particular to you'),
     ('Give two examples of what it cannot know.', 'which ledger you mean, and what you agreed with Nora in March'),
     ('Describe the cheap test.', 'read your own request as though you joined last week, and note every word that would make you ask a question'),
     ('Why is a confident answer not reassuring?', 'because an answer built on a missing fact sounds exactly like one built on everything')],
e_b=[('The writer blames capability for most failed requests.', 'F'),
     ('A system may know a lot about invoices in general.', 'T'),
     ('The useful part of a brief usually feels unnecessary to write.', 'T'),
     ('Most people find one missing piece of context on their first try.', 'F'),
     ('There is a recognisable tone for an incomplete picture.', 'F'),
     ('Checking what was supplied should happen before the answer.', 'T')],

w_model=(
 'Purpose: give the Friday client review a single page it can actually use. Background: the '
 'cash position means money in the client account only, not the supplier account Kenji '
 'keeps. Scope: the 11 active clients on the 2 April list; exclude the 2 clients in '
 'onboarding. Inputs: the client ledger in the shared folder, dated 2 April, and nothing '
 'else. Criteria: 1 page; a figure for each client; the 3 largest movements since March '
 'named. Done: 1 page and a list of any client whose figure could not be produced. '
 'Fallback: if a client figure is missing from the ledger, leave it blank and name the '
 'client; do not estimate.'),
w_fig=figs.spec_card('THE BACKGROUND LINE',
                     [('Purpose', 'What the page is for, and who reads it'),
                      ('Background', 'What "the cash position" means here'),
                      ('Scope', '11 active clients, 2 excluded'),
                      ('Inputs', 'The client ledger dated 2 April, and nothing else'),
                      ('Criteria', '1 page, a figure each, 3 largest movements named'),
                      ('Fallback', 'Missing figure: blank and named, never estimated')]),
w_fig_cap='The second line is the one this unit is about, and the one most briefs do not have.',
w_task='Write a brief for a task that needs background a stranger would not have.',
w_steps=['Choose something you would normally ask a colleague in one sentence.',
         'Write the one sentence. Then underline every "the" in it.',
         'For each underlined word, write the background line that explains which one.',
         'Name your input source so precisely that there is only one file it could be.',
         'Read the whole thing as somebody who joined last week.'],
w_bank=['In this company, … means …', 'The … referred to here is the one …',
        'Work only from … , dated …', 'Do not use … , which is a different …',
        'If … is missing, …'],
w_check=['Can every "the" in your brief be resolved by the reader?',
         'Have you named the input precisely enough that only one file matches?',
         'Is there a Background line, and does it define at least one term?',
         'Would somebody in their second week have to ask you anything?'],

t_title='Context: what it can see, and what it cannot',
t_fig=figs.split('THE TWO KINDS OF KNOWING',
                 'General — usually available',
                 ['what an invoice normally contains',
                  'how a reminder letter is usually worded',
                  'what a credit note is',
                  'how a delivery note differs from an invoice'],
                 'Particular — only if you supply it',
                 ['which ledger you mean',
                  'what you agreed with Nora in March',
                  'that Thursday means cash here',
                  'that this client is in dispute']),
t_fig_cap='The left column comes free. The right column is entirely your responsibility.',
t_body=[
 'The most useful mental model is a simple one. Assume that whatever you are asking carries no context about you at all, and has '
 'read a great deal about the world in general and has never heard of your company. It knows '
 'what an invoice is. It does not know that your invoices come in two folders and only one '
 'of them counts. Those two facts are not on the same shelf, and treating them as though '
 'they were is where most of the trouble comes from.',
 'In practice this means writing a background line, which feels redundant and is not. One '
 'or two sentences, before the instruction, saying what the terms mean in your company and '
 'which of several possible things is being referred to. The test of a good background line '
 'is that a competent stranger could use it, and the test of a bad one is that it says '
 'things only you would think to say.',
 'The second habit is naming your inputs exactly. Not the ledger but the client ledger in '
 'the shared folder dated 2 April. Not the usual template but follow-up template version 4. '
 'This is tedious to write and it removes an entire category of failure, which is the one '
 'where everything works perfectly against the wrong document.'],
t_say=[('Define the term: ', 'In this company, the cash position means the client account only.'),
       ('Name the file: ', 'Work only from the client ledger dated 2 April, not the supplier one.'),
       ('Supply the history: ', 'This client has been in dispute since February, which is why the account is frozen.')],
t_bound=('Supplying context does not make the answer correct; it only removes one reason for '
         'it to be wrong. A full and accurate background will not stop a confident answer '
         'built on a misreading of the data you supplied, and nothing in the reply will tell '
         'you which kind of failure you are looking at.'),
t_a=[('In this company, the cash position means the client ____________ only.', 'account'),
     ('Work only from the client ledger dated 2 ____________.', 'April'),
     ('This client has been in ____________ since February.', 'dispute'),
     ('It knows what an invoice is; it does not know your ____________.', 'folders'),
     ('A background line feels ____________ and is not.', 'redundant'),
     ('Everything works perfectly against the ____________ document.', 'wrong')],
t_b_rubric='Write the background line each request is missing.',
t_b=[('Summarise the position for Friday.', 'the cash position means the client account only, and Friday is the client review'),
     ('Check it against the ledger.', 'the ledger means the client ledger in the shared folder, dated 2 April'),
     ('Use the usual wording.', 'the usual wording is follow-up template version 4, not version 3'),
     ('Chase the client who has not paid.', 'the client is Boateng, and three of his accounts are in dispute until April')],

case=dict(
 title='Decision Clinic · Write the handbook, or answer the questions?',
 brief=[
  'Arclight has taken on three people in six weeks, which is more than it took on in its '
  'first two years. All three are capable. All three spend about a third of their day '
  'asking questions that begin with the words "which one".',
  'Dalia proposes writing everything down: a handbook defining every term, every file, '
  'every client convention. She estimates four days of her own time. Marta points out that '
  'Dalia is the only person who can write it, and that four days of Dalia is the one thing '
  'the company cannot currently spare.',
  'Thomas suggests something else: write nothing, but require every new person to log every '
  '"which one" question they ask for a fortnight. Then write only what the log contains.'],
 exhibit=figs.datatable('TWO WEEKS OF QUESTIONS, FROM THREE NEW STARTERS',
                        ['Question type', 'Times asked', 'Distinct answers', 'Written anywhere?'],
                        [['which ledger / file', '61', '4', 'no'],
                         ['which client is meant', '44', '11', 'partly'],
                         ['what a term means here', '38', '19', 'no'],
                         ['which template version', '27', '3', 'no'],
                         ['everything else', '52', 'many', 'mostly']]),
 exhibit_cap='222 questions in a fortnight. The second column is smaller than it looks.',
 exhibit_note='Four distinct answers cover sixty-one questions. Nineteen distinct answers '
              'cover thirty-eight. The two rows are not the same kind of problem.',
 voices=[('Dalia Rahman', 'co-founder',
          'Write the handbook properly. Four days now against a third of three people’s '
          'time for the next year. The arithmetic is not close.'),
         ('Marta Olsen', 'risk and liability',
          'You will write forty pages, eleven of which will be wrong within a quarter, and '
          'nobody will ever read page twelve. I have seen this done three times.'),
         ('Thomas Reed', 'service delivery',
          'Write only what was actually asked. The log says four answers remove sixty-one '
          'questions. Start there and see what is left.')],
 steps=[('Find it', 'How many questions, and how many distinct answers would cover them?'),
        ('Compare it', 'What does a full handbook give that a question log does not?'),
        ('Infer it', 'Why are "which ledger" and "what does this term mean" different problems?'),
        ('Weigh it', 'Four days of Dalia against a year of three people asking.'),
        ('Decide', 'What should be written, by whom, and in what order?')],
 analysis=[('Find it. How many questions were logged in a fortnight?', 'two hundred and twenty-two'),
           ('Compare it. What does the log give that a handbook does not?', 'evidence of what people actually need, rather than what the author remembers'),
           ('Infer it. Why are the two rows different?', 'four answers cover sixty-one questions, but nineteen answers cover only thirty-eight, so one is a cheap fix and one is not'),
           ('Weigh it. What is Marta’s objection really about?', 'not the cost of writing but the cost of maintaining something nobody reads'),
           ('Decide. Where would you start, and why there?', 'with the four answers that remove sixty-one questions, because the return is immediate and the content cannot go stale quickly')],
 decision='Write the one page Dalia should produce first.',
 decision_steps=['Start with the four answers that remove the most questions.',
                 'Write each definition so that a stranger can act on it, not admire it.',
                 'Say what is deliberately not in the page, and where that goes instead.',
                 'Say who updates it and what event triggers an update.'],
 bank=['In this company, … means …', 'The … is the one in … , dated …',
       'This page does not cover … ; for that, ask …',
       '… updates this page whenever …', 'If you cannot find an answer here, …'],
 outcome='Dalia wrote one page in ninety minutes, covering the four file questions and the '
         'three template versions. Questions from new starters fell by about half in the '
         'first week. She then wrote the second page and it made almost no difference, '
         'because the remaining questions had nineteen different answers and no two people '
         'needed the same one. Marta was right about the handbook and wrong about the page.',
 outcome_q=[('Why did the second page help so much less than the first?', 'because the remaining questions had many different answers, so no single page covered many of them'),
            ('In what way was Marta both right and wrong?', 'right that a forty-page handbook would fail, wrong that writing anything down was pointless')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · The one-page summary for Friday',
 task=['This is Jonas’s Thursday sentence, written out as a brief. He is a founder, he has '
       'been in every meeting since the company started, and every term in his head has '
       'exactly one meaning.',
       'The person reading it joined nine days ago. Four of the words in it have more than '
       'one possible referent, and two of them have three.'],
 draft=['Can you do a one-page summary of the position for the meeting.',
        'Pull the numbers from the ledger.',
        'Tidy the numbers up so that they make sense on the page.',
        'Cover the main clients and leave out the small stuff.',
        'Make it short enough that people will read it.',
        'I need it before the meeting.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines containing seven definite articles and no definitions.',
 asked=['Cash position, client account only',
        '11 active clients, 2 excluded',
        'One page, before Friday 09:00'],
 back=['Market position and competitors',
       'All 13 clients including onboarding',
       'Three pages, delivered Friday 16:00'],
 gap='"The position" could mean three things here, "the ledger" two, and "the meeting" two, '
     'and nothing in the brief chose between them.',
 back_cap='Three pages about competitors, arriving after the meeting had finished.',
 back_note='Every definite article in this brief points at something that exists only in '
           'Jonas’s head. The output was a correct answer to a question nobody asked.',
 diagnosis=[('[1] "the position" — cash, market, or Kenji’s?', 'unscoped set'),
            ('[2] "the ledger" — client or supplier?', 'unscoped set'),
            ('[3] "tidy the numbers up" — tidy until when?', 'undefined done'),
            ('[4] "the main clients, not the small stuff" — main by what measure?', 'unbounded quantity'),
            ('[5] "short enough that people will read it" — how short?', 'unbounded quantity'),
            ('[6] "before the meeting" — delivered by what time?', 'undefined done')],
 rewrite='Rewrite the brief so that somebody in their second week could produce the right '
         'page without asking a single question.',
 scaffold=['Who reads the page, and what they do with it',
           'Which clients are in, which are out, and what "the position" means here',
           'The exact ledger file with its date, and the template with its version',
           'Page length, what each client row contains, and what must be named',
           'What arrives, and by what time on what day',
           'What to do when a client figure is not in the ledger'],
 bank=['In this company, … means …', 'Include the … active clients listed in … ; exclude …',
       'Work only from … , dated … , not from …', 'One page, with … for each … , and the … named.',
       'Deliver by … on …', 'If a figure is missing, …'],
 check=['Can every "the" in your brief be resolved by a new starter?',
        'Does the brief define at least one term that only means something here?',
        'Is the input file named so precisely that only one file matches?',
        'Does Done carry a time as well as a thing?'],
 model=['Give the Friday client review one page it can act on in the first ten minutes',
        'The 11 active clients on the 2 April list, excluding the 2 clients still in onboarding; the position here means the client cash account only, not the supplier account',
        'The client ledger in the shared folder dated 2 April, and nothing else; summary template version 2',
        '1 page; 1 figure for each of the 11 clients; the 3 largest movements since March named in a line each',
        '1 page delivered by 09:00 on Friday, plus a list of any client whose figure was not available',
        'If a client figure is missing from the ledger, leave the row blank, name the client and do not estimate it'],
 cost='3 pages about competitors instead of 1 page about cash, delivered 7 hours after the '
      'meeting it was for, and a 40-minute meeting run from memory with no numbers in front '
      'of anybody.'),

rev_fig=figs.split('FIRST MENTION AND AFTER', 'First mention — a',
                   ['I have written a brief.',
                    'We need a rule for two dates.',
                    'She asked for a one-page summary.',
                    'There is a client in dispute.'],
                   'Already known — the',
                   ['Have you read the brief?',
                    'The rule is in version 3.',
                    'The summary is on your desk.',
                    'The client is Boateng.']),
rev_fig_cap='Introduce with a. Refer back with the. Never start at the right-hand column.',
rev=dict(
 read=[('"The" signals that', ['something is important', 'writer and reader both know which one', 'there is only one', 'it is formal'], 1),
       ('What a system cannot know is', ['what an invoice is', 'how letters are usually worded', 'which of your two ledgers you mean', 'general facts'], 2),
       ('A background line should be written so that', ['it sounds professional', 'a competent stranger could use it', 'it is short', 'it flatters the reader'], 1),
       ('In the Clinic, the first page worked because', ['it was long', 'four answers removed sixty-one questions', 'Marta wrote it', 'it was formal'], 1)],
 listen_text='Here is the twenty-second habit. Read your own request back and stop at every '
             'the. For each one, ask whether you have told this reader which one. If you '
             'have, carry on. If you have not, either tell them or change it to a. Most '
             'people find three to six on a first attempt, and every one of them was a '
             'question somebody would have had to ask you.',
 listen=[('Stop at every ____________.', 'the'),
         ('Ask whether you have told this reader ____________ one.', 'which'),
         ('Either tell them or change it to ____________.', 'a'),
         ('Most people find ____________ to six on a first attempt.', 'three')],
 speak=['Read a short work email aloud. Your partner stops you at every "the" and asks which one.',
        'Count the ones you could not answer in four words.'],
 write='Write the Background line for a task somebody in their first month would be given.',
 vocab=[('What an organisation knows because its people remember it is its ____________.', 'institutional memory'),
        ('Something understood without being said is ____________.', 'implicit'),
        ('A warning that limits a statement is a ____________.', 'caveat'),
        ('An area somebody fails to notice is a ____________.', 'blind spot'),
        ('To take something as true without being told is to ____________.', 'presume')],
 gram=[('I have written ____________ brief; it is on your desk.', 'a'),
       ('Have you read ____________ brief I sent on Tuesday?', 'the'),
       ('____________ advice is easy to give and hard to take.', 'Advice'),
       ('Check it against ____________ 14 March ledger.', 'the'),
       ('We need ____________ rule for invoices with two dates.', 'a')]),

found=['Take an email you sent this week and underline every "the". Answer each one.',
       'Write the background line for the task you delegate most often.',
       'Ask a new colleague which word they had to look up or ask about first.',
       'Name one thing your team knows that exists only in conversation.'],
end_line='Everybody in the room knew which one. The room is not where the work happens now.',
end_next='Next: Better Than What',
)
