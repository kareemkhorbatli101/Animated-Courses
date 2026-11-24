# -*- coding: utf-8 -*-
import figs

U = dict(
num=5, title='Which Ones, Exactly',
gram='defining relative clauses',
ai='classifying and routing: which pile does this go in',
strap='CEFR B1 · Grammar: defining relative clauses · AI: classifying and routing',
cando=['define a set precisely using who, which or that',
       'tell the difference between the clients who pay late and the clients, who pay late',
       'write the rules that decide which pile a piece of work goes in',
       'name a default group, so that nothing can fall between the rules',
       'say what classification can be checked and what it cannot'],
hero=('THE INBOX AT HALF PAST EIGHT',
      ['Three hundred and forty messages overnight.',
       'Eleven of them cannot wait until Thursday.'],
      [(850, 'teal', 'long'), (1600, 'orange', 'short'), (2350, 'grey', 'long')]),
hero_cap='Routing work: the difficulty is never the volume, it is the eleven.',

warm=['How do you decide, in the morning, which message to open first?',
      'What is the difference between "the clients who pay late" and "the clients, who pay late"?',
      'Where does a piece of work go when it fits none of your categories?'],
read=[
 'Arclight answers the first line of customer contact for six of its clients, which means '
 'that about three hundred and forty messages arrive overnight into a shared inbox. Most of '
 'them are routine. A delivery date, a password, a copy of an invoice. Thomas Reed used to '
 'open them in the order they arrived, which worked for a year and stopped working on the '
 'morning Arclight took on the fifth client.',
 'The problem with opening messages in order is not speed. It is that the eleven messages '
 'which actually matter are distributed randomly through the three hundred and forty, and '
 'the one that says I am cancelling unless somebody calls me today arrives at four in the '
 'morning between two requests for a delivery note.',
 'So the inbox is now classified before anybody reads it. Six categories, each defined by a '
 'written rule, and a seventh called Unsorted that exists for everything the six rules do '
 'not catch. Thomas opens Unsorted first, then Urgent, then the rest in whatever order he '
 'likes, which is usually the order they arrived in.',
 'The thing that surprised everybody was the seventh category. When the rules were written, '
 'Dalia assumed Unsorted would be a small embarrassment, a handful of odd messages a week. '
 'In the first month it held nine per cent of everything, and reading it turned out to be '
 'the most useful twenty minutes of Thomas’s day.',
 'Unsorted is where the new things arrive. A supplier that has started using a different '
 'word for a delivery note. A client whose customers have begun asking about something '
 'nobody expected. Thomas says that the six categories tell him the business is running, '
 'and the seventh tells him what the business is about to become.'],
c_a=[('How many messages arrive overnight?', 'about three hundred and forty'),
     ('Why did opening messages in order stop working?', 'the eleven that matter are spread randomly through the rest'),
     ('How many categories are there in total?', 'seven, including Unsorted'),
     ('What does Thomas open first?', 'Unsorted, then Urgent'),
     ('What does Thomas say the seventh category tells him?', 'what the business is about to become')],
c_b=[('Arclight answers first-line contact for six clients.', 'T'),
     ('Most of the overnight messages are urgent.', 'F'),
     ('Unsorted turned out to be smaller than expected.', 'F'),
     ('Unsorted held nine per cent of everything in the first month.', 'T'),
     ('Thomas reads the six categories before Unsorted.', 'F'),
     ('New kinds of request show up in Unsorted first.', 'T')],
c_c=[('About three hundred and forty messages arrive into a shared ____________.', 'inbox'),
     ('The eleven that matter are distributed ____________ through the rest.', 'randomly'),
     ('A seventh category called ____________ catches everything else.', 'Unsorted'),
     ('Dalia assumed it would be a small ____________.', 'embarrassment'),
     ('It held nine per ____________ of everything.', 'cent'),
     ('The seventh tells him what the business is about to ____________.', 'become')],
c_d=[('The problem with reading in order was ( speed / distribution ).', ['speed', 'distribution'], 1),
     ('The Unsorted category was created to', ['hold spam', 'catch what the rules miss', 'delay replies', 'store old messages'], 1),
     ('Unsorted proved valuable because', ['it was small', 'new kinds of request appear there first', 'it was easy to read', 'it could be ignored'], 1),
     ('Thomas now reads the ordinary categories', ['first', 'never', 'in whatever order he likes', 'twice'], 2),
     ('The cancelling message is used as an example of', ['a routine request', 'something urgent hidden in volume', 'a classification error', 'a supplier problem'], 1)],
c_e=('Defining or non-defining? Put each sentence in the right column.',
     [('The clients who pay late get a reminder.', 'Defining'),
      ('Our clients, who pay late, are patient.', 'Non-defining'),
      ('Messages which mention cancelling go to Urgent.', 'Defining'),
      ('Thomas, who reads Unsorted first, is rarely surprised.', 'Non-defining'),
      ('The rule that catches cancellations is the newest.', 'Defining'),
      ('Unsorted, which holds nine per cent, is read first.', 'Non-defining')],
     ['Defining', 'Non-defining']),

v_fig_title='SEVEN PILES',
v_fig=[('basket', 'a category'), ('scale', 'a criterion'), ('truck', 'routing'),
       ('doc', 'a label'), ('chart', 'triage'), ('bulb', 'an edge case')],
v_fig_cap='Six rules and one place for everything the six do not catch.',
vocab=[
 ('category', 'one of the named groups a thing can be put into'),
 ('criterion', 'the test used to decide whether something belongs'),
 ('routing', 'sending each item to the person or place that handles it'),
 ('triage', 'sorting by urgency before anything else is decided'),
 ('flag', 'a mark put on an item to say that a person should look at it'),
 ('label', 'a word attached to an item to say what kind of thing it is'),
 ('escalate', 'to pass something upward to somebody with more authority'),
 ('default', 'what happens when no other rule applies'),
 ('edge case', 'an unusual item that the ordinary rules do not fit'),
 ('bucket', 'an informal word for a group things are sorted into'),
 ('filter', 'a rule that lets some items through and holds others back'),
 ('rule set', 'the complete collection of rules used together'),
 ('borderline', 'close to the line between two categories'),
 ('misfile', 'to put something in the wrong place'),
 ('taxonomy', 'an organised system of categories and their relations'),
 ('assign', 'to give a task or an item to a particular person'),
 ('inbound', 'coming in from outside, as opposed to being sent out'),
 ('sender', 'the person or company a message came from'),
 ('subject line', 'the short description at the top of an email'),
 ('urgency', 'how soon something has to be dealt with')],
v_a=[('The test used to decide whether something belongs is the ____________.', 'criterion'),
     ('Sorting by urgency before anything else is ____________.', 'triage'),
     ('What happens when no other rule applies is the ____________.', 'default'),
     ('An unusual item the ordinary rules do not fit is an ____________.', 'edge case'),
     ('Please ____________ it to Marta; it is above my authority.', 'escalate'),
     ('The complete collection of rules used together is the ____________.', 'rule set'),
     ('This one is ____________: it could go in either pile.', 'borderline'),
     ('Messages coming in from outside are ____________ traffic.', 'inbound')],
v_b=[('Routing means sending each item', 'to whoever handles it.'),
     ('A filter is a rule that lets some items', 'through and holds others back.'),
     ('To misfile something is to put it', 'in the wrong place.'),
     ('A taxonomy is an organised system of', 'categories and their relations.'),
     ('Urgency is how soon something', 'has to be dealt with.')],

g_title='Grammar: defining relative clauses',
g_rule=['A defining clause says which ones: the clients who pay late. No commas.',
        'Use who for people, which for things, and that for either.',
        'Commas change the meaning: the clients, who pay late means all of them do.',
        'In a brief, a defining clause is how you draw the edge of a set.'],
g_fig=('LOOSE',
       ['Send a reminder to the late clients.',
        'Flag the difficult messages.',
        'Route the important ones to Thomas.',
        'Deal with the old invoices.'],
       'PRECISE',
       ['Send a reminder to the clients who are over 30 days late.',
        'Flag any message that mentions cancelling.',
        'Route the messages which name a deadline to Thomas.',
        'Deal with the invoices that were issued before January.'],
       'an adjective, which anybody may interpret',
       'a clause, which draws a line'),
g_fig_cap='An adjective describes a set. A defining clause defines one.',
g_a=[('The clients ____________ pay late get a reminder. (who)', 'who'),
     ('Flag any message ____________ mentions cancelling. (that)', 'that'),
     ('The invoices ____________ were issued before January go first. (which)', 'which'),
     ('Thomas is the person ____________ reads Unsorted. (who)', 'who'),
     ('This is the rule ____________ catches cancellations. (that)', 'that'),
     ('Messages ____________ name a deadline are urgent. (which)', 'which'),
     ('The supplier ____________ calls it Position is the oldest. (who)', 'who'),
     ('Any account ____________ has no order since 2024 comes off. (that)', 'that'),
     ('The category ____________ surprised everybody is the seventh. (which)', 'which')],
g_b=[('Send a reminder to the clients ( who / which ) pay late.', ['who', 'which'], 0),
     ('Flag any message ____ mentions cancelling.', ['who', 'that', 'whose', 'where'], 1),
     ('Thomas is the person ____ reads Unsorted first.', ['which', 'who', 'what', 'whom of'], 1),
     ('The invoices ____ were issued before January go first.', ['who', 'whose', 'which', 'what'], 2),
     ('Our clients, ____ all pay late, are patient.', ['that', 'who', 'which', 'whom'], 1),
     ('Any account ____ has no order since 2024 comes off.', ['who', 'what', 'that', 'where'], 2)],

d1=dict(title='A comma and nine hundred clients',
        fig=(['The clients, who pay late, get a letter.', 'Take the commas out.'],
             ['It is only punctuation.', 'It is nine hundred letters.']),
        cap='Fatima and Marta, over a single sentence.',
        lines=[('Fatima', 'The rule says: the clients, who pay late, receive a reminder.'),
               ('Marta', 'Take the commas out.'),
               ('Fatima', 'It is punctuation. Nobody reads a rule that closely.'),
               ('Marta', 'With the commas it says all our clients pay late and all get a letter.'),
               ('Fatima', 'Nobody would read it that way.'),
               ('Marta', 'Something that is not a person read it exactly that way last Tuesday.'),
               ('Fatima', 'How many?'),
               ('Marta', 'Nine hundred and six. Including everybody who has never been late.'),
               ('Fatima', 'That is not a grammar problem, that is a disaster.'),
               ('Marta', 'It is both, and the grammar came first.'),
               ('Fatima', 'I would still say a person would never have done it.'),
               ('Marta', 'A person did do it. A person wrote the commas.')],
        unresolved=True,
        a=[('What does the rule say with the commas in?', 'that all clients pay late and all receive a reminder'),
           ('How many letters went out?', 'nine hundred and six'),
           ('What does Fatima call it?', 'a disaster, not a grammar problem'),
           ('What does Marta say about that?', 'that it is both, and the grammar came first'),
           ('What is Marta’s final point?', 'that a person did make the mistake, by writing the commas')],
        b=[('Take the ____________ out.', 'commas'),
           ('Nobody would read it that ____________.', 'way'),
           ('Nine hundred and ____________.', 'six'),
           ('A person wrote the ____________.', 'commas')]),
d2=dict(title='What goes in Unsorted',
        fig=(['Nine per cent is too much.', 'Nine per cent is the point.'],
             ['Write more rules.', 'Then I stop seeing them.']),
        cap='Dalia and Thomas, a month into the new inbox.',
        lines=[('Dalia', 'Unsorted is nine per cent. That means the rules are not good enough.'),
               ('Thomas', 'It means the rules are good enough and the world keeps moving.'),
               ('Dalia', 'We could write four more rules and get it down to two per cent.'),
               ('Thomas', 'We could. Then I would stop reading it, because it would be boring.'),
               ('Dalia', 'That is an argument for keeping a category deliberately messy.'),
               ('Thomas', 'It is. The messy pile is where I found out about the Tuesday thing.'),
               ('Dalia', 'The deliveries.'),
               ('Thomas', 'Four clients, same week, all asking something nobody had asked before.'),
               ('Dalia', 'Which no rule would have caught, because no rule knew about it.'),
               ('Thomas', 'So the rules handle what we know. Unsorted handles what we do not.'),
               ('Dalia', 'And if it ever drops to nothing, something is wrong.'),
               ('Thomas', 'Something is wrong, or I have stopped looking. Usually the second one.')],
        a=[('What percentage is Unsorted?', 'nine per cent'),
           ('Why does Thomas not want more rules?', 'because he would stop reading the category and it is where new things appear'),
           ('What did he discover in Unsorted?', 'that four clients in one week asked something nobody had asked before'),
           ('What do the six rules handle?', 'what the company already knows'),
           ('What would it mean if Unsorted dropped to nothing?', 'that something is wrong, or that he has stopped looking')],
        b=[('Unsorted is nine per ____________.', 'cent'),
           ('The ____________ pile is where I found out about it.', 'messy'),
           ('No rule would have ____________ it.', 'caught'),
           ('Usually the ____________ one.', 'second')]),

speak=[('Draw the set',
        ['Student A: name a group of people or things at your work, using an adjective.',
         'Student B: rewrite it as a defining clause with a test in it.',
         'Check: could a stranger apply your test without asking anybody?']),
       ('Spoken specification: brief a sort',
        ['Choose something that arrives at you in volume: emails, forms, requests, stock.',
         'Brief your partner aloud: name the categories, the test for each, and the default.',
         'Your partner asks about one item that fits none. If you have no answer, you have no default.']),
       ('Find the edge case',
        ['In pairs, write three rules that sort your own incoming work.',
         'Then invent one item that fits two rules, and one that fits none.',
         'Decide what each rule set should do about them.'])],

ext_title='The pile you cannot define is the one worth reading',
ext_fig=figs.datatable('SIX RULES AND A SEVENTH CATEGORY',
                       ['Category', 'The rule that defines it', 'Share'],
                       [['Urgent', 'mentions cancelling, legal or today', '3%'],
                        ['Invoice copy', 'asks for a document already sent', '22%'],
                        ['Delivery', 'names a shipment or a date', '31%'],
                        ['Access', 'mentions a password or a login', '18%'],
                        ['Complaint', 'expresses dissatisfaction', '9%'],
                        ['Routine other', 'matches none above but is known', '8%'],
                        ['Unsorted', 'matches nothing', '9%']]),
ext_fig_cap='Six rules, one default, and a last row that nobody expected to matter.',
ext=[
 'Classification is the operation most worth automating and the one most often done badly, '
 'and the reason is almost always the same: the categories were written by somebody '
 'describing the work they remember rather than the work that actually arrives. Six '
 'categories feel complete when you write them on a Tuesday afternoon. They are never '
 'complete, because the world does not know they exist.',
 'The fix is not more categories. More categories make the rules harder to apply and do not '
 'solve the problem, because the next unexpected thing is unexpected in a new way. The fix '
 'is a default: one named place where everything that matches no rule goes, and a person who '
 'reads it. Without a default, items that fit nothing get forced into the nearest category, '
 'and that is how a cancellation becomes a delivery query.',
 'What surprises people is how large the default turns out to be and how useful. In a '
 'healthy operation it is rarely under five per cent, and the contents are not junk. They '
 'are the new things: a product nobody has had to explain before, a question four customers '
 'have suddenly started asking, a word a supplier has started using differently.',
 'There is a good argument, which not everybody accepts, that the default should be kept '
 'deliberately wide. A narrow default is efficient and silent. A wide one costs somebody '
 'twenty minutes a day and is the only part of the system that tells you something you did '
 'not already know. Which of those two you want depends on whether your business is stable, '
 'and most small businesses are not.',
 'What classification cannot do is tell you that your categories are the wrong categories. '
 'It will sort faithfully into whatever boxes it is given, including boxes that stopped '
 'describing the business eighteen months ago. That judgement stays with whoever reads the '
 'default, which is the real reason the default needs a reader and not just a name.'],
dp1=('The size of the default',
     'Operational studies of inbound classification generally report unmatched or '
     '"other" categories in the range of several per cent, rising sharply when a product '
     'or process changes.',
     'Source: general operations research, 2026. Highly dependent on how rules are written.'),
e_a=[('Why are six categories never complete?', 'because they describe remembered work, and the world does not know they exist'),
     ('Why is adding more categories not the fix?', 'the next unexpected thing is unexpected in a new way'),
     ('What happens without a default?', 'items that fit nothing get forced into the nearest category'),
     ('What is usually in the default?', 'new things: new questions, new products, new wording'),
     ('What can classification never tell you?', 'that your categories themselves are the wrong ones')],
e_b=[('The writer recommends adding more categories.', 'F'),
     ('A default category should have a named reader.', 'T'),
     ('A healthy default is usually under one per cent.', 'F'),
     ('A wide default costs somebody time every day.', 'T'),
     ('Classification will not question the categories it is given.', 'T'),
     ('Everybody agrees the default should be kept wide.', 'F')],

w_model=(
 'Purpose: make sure that the 11 messages a night which cannot wait are read before the '
 '329 which can. Scope: every message arriving in the shared inbox between 18:00 and 08:00; '
 'exclude internal mail from Arclight addresses. Inputs: the overnight inbox and rule set '
 'version 3 dated 2 April. Criteria: apply the 6 rules in order; any message matching no '
 'rule goes to Unsorted; no message may be placed in 2 categories. Done: 7 labelled folders '
 'and a count for each. Fallback: if a message matches 2 rules, place it in the higher '
 'category and flag it.'),
w_fig=figs.chain('WRITING A RULE SET',
                 ['Name each category', 'Write the test that defines it',
                  'Put the rules in a fixed order', 'Name the default',
                  'Say who reads the default, and when']),
w_fig_cap='Five steps. The last two are what separate a rule set from a wish.',
w_task='Write a rule set for something that arrives at you in volume.',
w_steps=['Name between four and seven categories. Fewer is better than more.',
         'Write each one as a defining clause: the messages which mention a date.',
         'Put the rules in order, so that an item matching two has one home.',
         'Name a default, and say in one sentence who reads it and how often.',
         'Write the rule for an item that matches two categories.'],
w_bank=['Messages which … go to …', 'Any item that … is treated as …',
        'Apply these rules in order: …', 'Anything matching no rule goes to …',
        '… reads the default every …'],
w_check=['Is every category written as a test, not as an adjective?',
         'Is there a default, and does it have a named reader?',
         'Can an item match two rules, and if so, which wins?',
         'Could somebody who has never done this job apply your rules?'],

t_title='Classifying and routing: which pile does this go in',
t_fig=figs.split('ADJECTIVE OR CLAUSE',
                 'Adjective — describes, does not define',
                 ['the urgent messages', 'the difficult cases',
                  'the important clients', 'the old invoices'],
                 'Defining clause — draws the line',
                 ['messages which mention cancelling',
                  'cases that need a second signature',
                  'clients who bought twice in 12 months',
                  'invoices that were issued before January']),
t_fig_cap='Every category in a rule set should be in the right-hand column.',
t_body=[
 'Classification is the operation where grammar does the most visible work, because a '
 'category is a set and a set is defined by a clause. The urgent messages is not a category; '
 'it is an opinion. Messages which mention cancelling, a legal threat or the word today is a '
 'category, and two different people reading it will draw the same line.',
 'Write the rules in a fixed order and say so, because sooner or later an item will match '
 'two of them. A message saying I am cancelling because my invoice is wrong belongs in '
 'Urgent and in Invoice copy, and if nothing says which wins, it will go into whichever rule '
 'happened to run first, which may change next month for reasons nobody can see.',
 'Then name the default and give it an owner. Unsorted with nobody reading it is a bin; '
 'Unsorted that Thomas reads at half past eight is an early warning system. The difference '
 'between those two is one sentence in the brief, and it is the sentence that decides '
 'whether the whole arrangement teaches you anything.'],
t_say=[('Define, do not describe: ', 'Urgent means any message which mentions cancelling or a legal threat.'),
       ('Fix the order: ', 'Apply these six rules in order; the first match wins.'),
       ('Own the default: ', 'Anything matching no rule goes to Unsorted, which Thomas reads at 08:30.')],
t_bound=('Classification does not know that your categories are out of date. It will sort '
         'faithfully into boxes that stopped describing the business a year ago, and it will '
         'never report that nothing fits well any more. Only a person reading the default '
         'will notice that, and only if somebody is actually reading it.'),
t_a=[('Urgent means any message which mentions cancelling or a legal ____________.', 'threat'),
     ('Apply these six rules in order; the first ____________ wins.', 'match'),
     ('Anything matching no rule goes to ____________.', 'Unsorted'),
     ('The urgent messages is not a category; it is an ____________.', 'opinion'),
     ('Unsorted with nobody reading it is a ____________.', 'bin'),
     ('A category is a set, and a set is defined by a ____________.', 'clause')],
t_b_rubric='Rewrite each category as a defining clause a stranger could apply.',
t_b=[('The urgent ones.', 'messages which mention cancelling, a legal threat or the word today'),
     ('The difficult clients.', 'clients who have raised more than two complaints in six months'),
     ('The old stock.', 'items that have not been ordered since 1 January'),
     ('The big accounts.', 'clients who billed more than 20,000 euros in the last 12 months')],

case=dict(
 title='Decision Clinic · Narrow the default, or keep it wide?',
 brief=[
  'The inbox rules have been running for seven months. Unsorted has held between seven and '
  'eleven per cent throughout, and Thomas reads it every morning for about twenty minutes.',
  'Arclight has just taken on two more clients. Thomas’s twenty minutes has become fifty, '
  'and he is no longer finishing Unsorted before the rest of the day starts. Dalia has '
  'drafted four new rules which would take Unsorted down to about three per cent.',
  'Thomas does not want them. He says the four rules would catch exactly the things he '
  'already knows about, and that the twenty minutes was never about efficiency.'],
 exhibit=figs.datatable('WHAT THOMAS FOUND IN UNSORTED, BY QUARTER',
                        ['Quarter', 'Items read', 'Routine after all', 'Genuinely new'],
                        [['Q1', '1,180', '1,046', '12'],
                         ['Q2', '1,310', '1,201', '9'],
                         ['Q3', '1,402', '1,330', '6'],
                         ['Q4 so far', '940', '902', '2']]),
 exhibit_cap='Twenty-nine genuinely new things in a year, out of 4,832 items read.',
 exhibit_note='The last column is Thomas’s own judgement, recorded at the time. Nobody '
              'else has reviewed it, and the number of genuinely new items is falling.',
 voices=[('Dalia Rahman', 'co-founder',
          'Add the four rules. Twenty-nine findings in a year, and the rate is falling. '
          'Fifty minutes a day is a quarter of a person.'),
         ('Thomas Reed', 'service delivery',
          'Two of those twenty-nine were the Tuesday delivery thing, which we now bill '
          'forty thousand a year for. You cannot average a thing like that.'),
         ('Kenji Watanabe', 'finance',
          'Both of you are arguing from the same table and reaching opposite conclusions, '
          'which usually means the table is not the right table.')],
 steps=[('Find it', 'How many genuinely new items were found, and over how many read?'),
        ('Compare it', 'What do four new rules buy, and what do they remove?'),
        ('Infer it', 'Why might the number of new findings be falling?'),
        ('Weigh it', 'Fifty minutes a day against finding the next Tuesday thing.'),
        ('Decide', 'What should happen to the default, and how would you know you were wrong?')],
 analysis=[('Find it. How many genuinely new items in the year?', 'twenty-nine, out of 4,832 read'),
           ('Compare it. What do the four rules remove?', 'the chance of noticing something nobody has thought of yet'),
           ('Infer it. Give one reason the rate might be falling.', 'the business is more stable, or Thomas is reading with less attention as the volume rises'),
           ('Weigh it. What is Thomas’s argument against averaging?', 'that one of the twenty-nine was worth forty thousand a year, so the average hides the value'),
           ('Decide. What test would tell you afterwards whether you chose wrongly?', 'counting how many genuinely new items arrive in the categories the new rules created')],
 decision='Write Dalia’s decision and the test that would show it was wrong.',
 decision_steps=['Say what happens to the four rules, in the first sentence.',
                 'Say how much of Thomas’s time the arrangement is meant to cost.',
                 'Name the measurement that would tell you the decision was wrong.',
                 'Say when you will look at that measurement.'],
 bank=['We will add … of the four rules.', 'The default should cost about … a day.',
       'We will know this was wrong if…', 'This gets reviewed in … , using …',
       'What we are buying with the … minutes is…'],
 outcome='Dalia added two of the four rules, not all four, and capped the default at thirty '
         'minutes rather than a percentage. Unsorted fell to five per cent. Over the next '
         'year Thomas recorded eleven genuinely new items, down from twenty-nine, and two '
         'of the eleven mattered. Kenji’s point proved to be the useful one: the table '
         'counted items read, and nobody had ever counted what the findings were worth.',
 outcome_q=[('What did the cap do that a percentage would not?', 'it limited the cost directly, instead of limiting it indirectly through the rules'),
            ('Why was Kenji right that the table was wrong?', 'because it measured volume read rather than the value of what was found')],
 tags=[]),

lab=dict(
 title='Brief Lab · Sort the overnight inbox',
 task=['Thomas is away for a week and somebody else has to run the morning inbox. Dalia '
       'writes the brief in four minutes on a Sunday, because she has done the job herself '
       'and believes it is simple.',
       'There are six categories, a default, and a rule about what wins when a message '
       'matches two. Dalia knows all of this. Her brief contains none of it, because she '
       'has never had to tell anybody before.'],
 draft=['Please sort the overnight inbox each morning.',
        'Put the urgent ones at the top.',
        'Group the rest sensibly by what they are about.',
        'Anything strange, just use your judgement.',
        'Deal with the important clients first.',
        'Let me know if there is anything I should see.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six categories, a default and a tie-break rule, none of which appear here.',
 asked=['6 fixed categories plus Unsorted',
        'Urgent defined by a written test',
        'A default that somebody reads'],
 back=['Categories invented fresh each day',
       '2 cancellations filed as delivery queries',
       'No default: everything forced somewhere'],
 gap='The urgent ones named no test, sensibly named no categories, and the important clients '
     'named no list, so three different people produced three different inboxes in one week.',
 back_cap='One week, three stand-ins, three completely different filing systems.',
 back_note='The two cancellations were filed as delivery queries because both of them also '
           'mentioned a delivery, and nothing said which rule wins.',
 diagnosis=[('[1] "the overnight inbox" — arriving between what hours?', 'unscoped set'),
            ('[2] "the urgent ones" — urgent by what test?', 'unstated criterion'),
            ('[3] "group the rest sensibly" — into which groups?', 'unscoped set'),
            ('[4] "anything strange, use your judgement" — judged against what?', 'unstated criterion'),
            ('[5] "the important clients first" — first means finished when?', 'undefined done'),
            ('[6] "anything I should see" — seen by when, and how?', 'undefined done')],
 rewrite='Rewrite the brief so that three different stand-ins would produce the same inbox.',
 scaffold=['Why the sorting happens before anybody reads anything',
           'Which messages are in the run, by time and by sender',
           'The inbox itself and the numbered rule set that defines the categories',
           'The categories as tests, the order they run in, and what happens on a double match',
           'The folders and counts that exist by the end of the morning',
           'What to do with a message that matches nothing at all'],
 bank=['Sort every message which arrives between … and …',
       'Treat a message as Urgent if it …', 'Apply the … rules in order; the first match wins.',
       'Anything matching no rule goes to …', 'By … , return … folders and a count of …',
       'If a message matches two rules, …'],
 check=['Is every category a test rather than an adjective?',
        'Does the brief say which rule wins on a double match?',
        'Is there a named default with a named reader and a time?',
        'Is Done a set of counts somebody could read out?'],
 model=['Make sure the few messages that cannot wait are read before the many that can',
        'Every message arriving in the shared inbox between 18:00 and 08:00, excluding internal mail from Arclight addresses',
        'The overnight inbox and rule set version 3 dated 2 April',
        'Apply the 6 rules in order and take the first match; Urgent means any message mentioning cancelling, legal action or the word today; a message matching 2 rules goes to the higher one and is flagged',
        '7 labelled folders with a count for each, and the Unsorted folder read by 08:30',
        'Any message matching no rule goes to Unsorted; do not force it into the nearest category'],
 cost='2 cancellations filed as delivery queries and answered on day 3 instead of day 1, '
      '1 client lost worth 9,000 euros a year, and 3 incompatible filing systems to unpick.'),

rev_fig=figs.split('WITH AND WITHOUT COMMAS', 'Defining — some of them',
                   ['The clients who pay late get a letter.',
                    'Messages which mention cancelling are urgent.',
                    'The invoices that predate January go first.',
                    'Staff who have the training may sign.'],
                   'Non-defining — all of them',
                   ['The clients, who pay late, get a letter.',
                    'Messages, which mention cancelling, are urgent.',
                    'The invoices, which predate January, go first.',
                    'Staff, who have the training, may sign.']),
rev_fig_cap='Two commas. On the right, every client, every message, every invoice, every member of staff.',
rev=dict(
 read=[('The default category exists so that', ['nothing is read', 'items fitting no rule are not forced elsewhere', 'the rules are simpler', 'volume falls'], 1),
       ('"The clients who pay late" refers to', ['all clients', 'only the late ones', 'no clients', 'new clients'], 1),
       ('Classification cannot tell you', ['which pile an item is in', 'how many items there are', 'that your categories are out of date', 'what matched'], 2),
       ('In the Clinic, what did Dalia cap instead of a percentage?', ['the rules', 'the categories', 'the time', 'the clients'], 2)],
 listen_text='Three rules for a rule set. Write each category as a clause, not an adjective, '
             'so that two people draw the same line. Put the rules in a fixed order and say '
             'which wins, because something will match two of them. And name a default with '
             'a person attached, because a default nobody reads is just a bin with a nicer name.',
 listen=[('Write each category as a ____________, not an adjective.', 'clause'),
         ('Put the rules in a fixed ____________.', 'order'),
         ('Name a default with a ____________ attached.', 'person'),
         ('A default nobody reads is just a ____________.', 'bin')],
 speak=['Name four categories for your own incoming work, as adjectives. Your partner rewrites each as a clause.',
        'Then invent an item that matches two of them, and decide which wins.'],
 write='Write four categories as defining clauses, plus a default with a named reader.',
 vocab=[('The test used to decide whether something belongs is the ____________.', 'criterion'),
        ('Sorting by urgency before anything else is ____________.', 'triage'),
        ('What happens when no other rule applies is the ____________.', 'default'),
        ('An item the ordinary rules do not fit is an ____________.', 'edge case'),
        ('To pass something up to higher authority is to ____________ it.', 'escalate')],
 gram=[('The clients ____________ pay late get a reminder.', 'who'),
       ('Flag any message ____________ mentions cancelling.', 'that'),
       ('The invoices ____________ were issued before January go first.', 'which'),
       ('Thomas is the person ____________ reads Unsorted.', 'who'),
       ('Any account ____________ has no order since 2024 comes off.', 'that')]),

found=['Rewrite one category you use at work as a defining clause with a test in it.',
       'Find out where work goes in your organisation when it fits no category.',
       'Ask who reads that place, and how often. If nobody does, you have found something.',
       'Check one written rule in your workplace for a comma that changes its meaning.'],
end_line='Six rules tell you the business is running. The seventh tells you what it is becoming.',
end_next='Next: A Report or The Report',
)
