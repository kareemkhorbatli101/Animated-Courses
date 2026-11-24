# -*- coding: utf-8 -*-
import figs

U = dict(
num=9,
title='Asking for Help in a New City',
gram='questions: word order and short answers',
ai='directions, maps and information that is out of date',
strap='CEFR A2 · Grammar: questions: word order and short answers · '
      'AI: directions, maps and information that is out of date',
cando=['ask a clear question with the right word order',
       'give and understand short answers',
       'ask for directions and check that I have understood',
       'say why a map may be wrong and how to test it',
       'write a list of local addresses that a citizen can rely on'],

hero=('A CLOSED DOOR AT MIDNIGHT, AND AN ADDRESS FROM A LIST',
      ['The police station on the Mission’s list closed two years ago.',
       'The man who went there was alone, and it was raining.'],
      [(720, 'grey', 'short'), (720, 'blue', 'short'), (720, 'teal', 'long')]),
hero_cap='A dark doorway in the Rhen district, where a citizen went for help at ten past midnight.',

warm=['What do you do when you are lost in a city and your telephone is dead?',
      'Who do you ask for directions, and who do you not ask?',
      'How do you know whether an address on a list is still correct?'],

read=[
 'Nour has lived in Calmar for six weeks. She knows four streets well and the rest not at '
 'all. On Tuesday she is late for a meeting, her telephone has no power, and she is '
 'standing in a square with four exits and no street signs.',
 'She asks a woman at a flower stall. Excuse me, where is Vermaas Street? The woman points '
 'and speaks for twenty seconds. Nour understands the first three words. She asks again, '
 'differently. Is it left or right? Left, says the woman. Short answers are easier.',
 'Asking well is a skill. A long question invites a long answer. A short question with a '
 'choice in it invites a short one. Left or right. Near or far. Five minutes or twenty. '
 'This is true in every language and it is true under pressure.',
 'She had asked a map system for directions before she left the Mission. The maps were '
 'right and the information about the building was two years out of date, which she only '
 'discovered when she arrived at a door that was locked.',
 'The Mission keeps a list of useful addresses for citizens: hospitals, police stations, '
 'the airport office, a lawyer who speaks English. The list is printed and pinned in the '
 'consular waiting room, and nobody is quite sure when it was last checked.',
 'In November a citizen uses it at midnight. The police station on the list closed two '
 'years ago and the building is empty. He walks forty minutes in the rain to another one. '
 'He telephones the Mission the next morning and is very polite about it.'],

dp1=('Why address lists are checked on a date', 'Consular guidance commonly requires any '
     'public list of local emergency addresses to carry the date on which it was last '
     'verified, because a closed police station or clinic on a published list sends a '
     'person in difficulty to an empty building.',
     'Source: reported consular practice, 2025–2026.'),

c_a=[('How long has Nour lived in Calmar?', 'six weeks'),
     ('Why can she not use her telephone?', 'it has no power'),
     ('What kind of question gets a short answer?', 'a question with a choice in it'),
     ('Where is the list of addresses kept?', 'pinned in the consular waiting room'),
     ('What was wrong with the police station?', 'it closed two years ago'),
     ('How far did the citizen walk?', 'forty minutes')],

c_b=[('Nour knows the city well.', 'F'),
     ('The woman at the stall answered in three words.', 'F'),
     ('A long question invites a long answer.', 'T'),
     ('The list includes a lawyer who speaks English.', 'T'),
     ('The citizen was angry on the telephone.', 'F'),
     ('Nobody knows when the list was checked.', 'T')],

c_c=[('____________ is Vermaas Street?', 'Where'),
     ('____________ it left or right?', 'Is'),
     ('____________ you speak English?', 'Do'),
     ('How ____________ is it from here?', 'far'),
     ('____________ did he walk for forty minutes?', 'Why'),
     ('____________ many exits does the square have?', 'How')],

c_d=[('In a question, the auxiliary comes ( after / before ) the subject.', ['after', 'before'], 1),
     ('A question with a choice gets a ( short / long ) answer.', ['short', 'long'], 0),
     ('The list failed because it was ( out of date / badly printed ).',
      ['out of date', 'badly printed'], 0),
     ('The citizen walked to another station ( in the rain / by taxi ).',
      ['in the rain', 'by taxi'], 0),
     ('A public list should carry ( a verification date / a signature ).',
      ['a verification date', 'a signature'], 0)],

c_e=('What kind of question? Put each one in the right column.',
     [('Is it left or right?', 'choice question'),
      ('Where is the police station?', 'wh- question'),
      ('Do you speak English?', 'yes/no question'),
      ('How far is it?', 'wh- question'),
      ('Five minutes or twenty?', 'choice question'),
      ('Does the clinic open on Sunday?', 'yes/no question')],
     ['yes/no question', 'wh- question', 'choice question']),

v_fig_title='FINDING YOUR WAY AND FINDING HELP',
v_fig=[('map', 'a district'), ('door', 'a landmark'), ('clock', 'an opening time'),
       ('people', 'a help desk'), ('key', 'an emergency number'), ('doc', 'a public notice')],
v_fig_cap='Six words you need when the telephone is dead.',

vocab=[
 ('a district', 'one named part of a city'),
 ('a landmark', 'a building or object that is easy to see and to describe'),
 ('a bus route', 'the fixed path a bus follows, with a number'),
 ('a season ticket', 'a ticket paid for once and used for a period'),
 ('a pharmacy', 'the shop where medicines are sold and advice is given'),
 ('a clinic', 'a place where people are treated without staying overnight'),
 ('a police station', 'the local office of the police'),
 ('a post office', 'the office where letters and parcels are sent'),
 ('a public notice', 'an official announcement displayed where people can read it'),
 ('a street sign', 'the sign giving the name of a street'),
 ('a one-way street', 'a street in which traffic moves in one direction only'),
 ('a diversion', 'a temporary route around a closed road'),
 ('a pedestrian crossing', 'the marked place where people cross a road'),
 ('a taxi rank', 'the place where taxis wait for passengers'),
 ('a fare', 'the money paid for a journey'),
 ('a ticket machine', 'the machine that sells tickets without a person'),
 ('an opening time', 'the hour at which a place begins to serve the public'),
 ('a help desk', 'the place where people go with questions'),
 ('an emergency number', 'the number to call when there is immediate danger'),
 ('a local custom', 'a way of doing things that is usual in one place')],

v_a=[('One named part of a city is a ____________.', 'district'),
     ('A building that is easy to describe is a ____________.', 'landmark'),
     ('The place where taxis wait is a taxi ____________.', 'rank'),
     ('The money paid for a journey is the ____________.', 'fare'),
     ('A temporary route around a closed road is a ____________.', 'diversion'),
     ('The hour a place opens is the ____________ time.', 'opening'),
     ('The number to call in danger is the ____________ number.', 'emergency'),
     ('A way of doing things usual in one place is a local ____________.', 'custom')],

v_b=[('A pharmacy is the shop where medicines are sold', 'and advice is given.'),
     ('A clinic is a place where people are treated', 'without staying overnight.'),
     ('A public notice is an official announcement', 'displayed where people can read it.'),
     ('A one-way street is a street in which traffic', 'moves in one direction only.'),
     ('A season ticket is a ticket paid for once', 'and used for a period.')],

g_title='Grammar: questions: word order and short answers',
g_rule=['Yes/no questions: auxiliary + subject + verb. Does the clinic open on Sunday?',
        'Wh- questions: question word + auxiliary + subject. Where does the bus stop?',
        'With be, no auxiliary is needed: Is it far? Are they open?',
        'Short answers repeat the auxiliary: Yes, it does. No, they are not.'],
g_fig=('WRONG',
       ['Where the police station is?',
        'The clinic opens on Sunday?',
        'How far it is from here?',
        'You can tell me the way?'],
       'RIGHT',
       ['Where is the police station?',
        'Does the clinic open on Sunday?',
        'How far is it from here?',
        'Can you tell me the way?'],
       'four questions that sound like statements',
       'the same four, in question order'),
g_fig_cap='Put the auxiliary before the subject and the question becomes a question.',

g_a=[('____________ is the police station? (where)', 'Where'),
     ('____________ the clinic open on Sunday? (do)', 'Does'),
     ('How far ____________ it from here? (be)', 'is'),
     ('____________ you tell me the way? (can)', 'Can'),
     ('What time ____________ the post office close? (do)', 'does'),
     ('____________ there a pharmacy near here? (be)', 'Is'),
     ('Which bus ____________ I take? (should)', 'should'),
     ('____________ they open on public holidays? (be)', 'Are'),
     ('How much ____________ the fare? (be)', 'is')],

g_b=[('( Where is / Where the ) police station?', ['Where is', 'Where the'], 0),
     ('( Does the clinic open / The clinic opens ) on Sunday?',
      ['Does the clinic open', 'The clinic opens'], 0),
     ('How far ( is it / it is ) from here?', ['is it', 'it is'], 0),
     ('Yes, it ( does / is doing ).', ['does', 'is doing'], 0),
     ('No, they ( are not / do not are ).', ['are not', 'do not are'], 0),
     ('( Can you / You can ) tell me the way?', ['Can you', 'You can'], 0)],

d1=dict(
 title='Left or right?',
 fig=(['Where is Vermaas Street?', 'A long answer in the local language.'],
      ['Is it left or right?', 'Left. Two minutes.']),
 cap='Nour and a woman at a flower stall, in a square with four exits.',
 lines=[('Nour', 'Excuse me. Where is Vermaas Street?'),
        ('Woman', 'It is behind the old bank, past the crossing, then along by the school.'),
        ('Nour', 'I am sorry. My language is not good yet. Is it left or right?'),
        ('Woman', 'Left.'),
        ('Nour', 'Is it far?'),
        ('Woman', 'No. Two minutes.'),
        ('Nour', 'Is there a landmark?'),
        ('Woman', 'The old bank. Big, grey, closed.'),
        ('Nour', 'Thank you. So: left, past the bank, two minutes.'),
        ('Woman', 'Yes. And the street sign is missing, so count the corners.'),
        ('Nour', 'How many corners?'),
        ('Woman', 'Three.')],
 a=[('What does Nour ask first?', 'where Vermaas Street is'),
    ('Why does she ask again?', 'her language is not good enough for the long answer'),
    ('Is the street far?', 'no, two minutes'),
    ('What is the landmark?', 'the old bank, big, grey and closed'),
    ('How many corners must she count?', 'three')],
 b=[('____________ me. Where is Vermaas Street?', 'Excuse'),
    ('Is it ____________ or right?', 'left'),
    ('Is there a ____________?', 'landmark'),
    ('The street sign is ____________.', 'missing')]),

d2=dict(
 title='The map is right and the building is empty',
 fig=(['The address was on our own list.', 'And on the map.'],
      ['Both agreed.', 'Both were copied from the same old page.']),
 cap='Bassel Tannous and Rim Haddad, the morning after a citizen’s bad night.',
 lines=[('Bassel', 'He went to the address on our list at midnight.'),
        ('Rim', 'The Rhen station closed two years ago.'),
        ('Bassel', 'The map showed it too. I checked this morning.'),
        ('Rim', 'The map copied an old public register. Everything copies everything.'),
        ('Bassel', 'So two sources agreed and both were wrong.'),
        ('Rim', 'Agreement is not confirmation. They are the same source twice.'),
        ('Bassel', 'How would we have known?'),
        ('Rim', 'By walking past it, or by telephoning the number on the list.'),
        ('Bassel', 'Nobody has telephoned those numbers since I arrived.'),
        ('Rim', 'Nobody has telephoned them since before I arrived, and that is nineteen years.'),
        ('Bassel', 'And when a number rings but the office has moved to another street?')],
 unresolved=True,
 a=[('When did the citizen go to the address?', 'at midnight'),
    ('How long ago did the station close?', 'two years'),
    ('What did the map do?', 'it copied an old public register'),
    ('What is wrong with two sources agreeing?', 'they may be the same source twice'),
    ('How could the Mission have known?', 'by walking past or telephoning')],
 b=[('Agreement is not ____________.', 'confirmation'),
    ('They are the same ____________ twice.', 'source'),
    ('By walking past it, or by ____________.', 'telephoning'),
    ('Nobody has telephoned those ____________.', 'numbers')]),

speak=[('Question order',
        ['Turn ten statements into questions, aloud, with the right word order.',
         'Your partner answers with a short answer each time.',
         'Any question in statement order is repeated until it is right.']),
       ('Ask for directions',
        ['Student A asks the way to four places.',
         'Student B answers at length, then in a short answer with a choice.',
         'Decide which answer was more useful and say why.']),
       ('Check the list',
        ['Take five addresses you rely on in your own city.',
         'Say how you would check each one is still correct today.',
         'Your partner says which method is strongest.'])],

ext_title='Two sources that agree may be one source, copied twice',
ext_fig=figs.datatable('SIX ADDRESSES ON ONE PUBLIC LIST',
                       ['Entry', 'Last verified', 'Status today'],
                       [['central hospital', 'never', 'correct'],
                        ['Rhen police station', 'never', 'closed 2 years ago'],
                        ['airport consular desk', 'never', 'moved to terminal 2'],
                        ['English-speaking lawyer', 'never', 'retired'],
                        ['emergency number', 'never', 'correct'],
                        ['24-hour pharmacy', 'never', 'now closes at 22:00']]),
ext_fig_cap='Six entries, two still correct, and nobody had ever written a date beside any of them.',
ext=[
 'A new officer needs the city quickly: where things are, how long they take, which door to '
 'use. A map system answers all of this instantly, and most of the time it is right, which '
 'is exactly what makes the occasional wrong answer dangerous.',
 'The weakness is not the map. It is the age of the information behind it. Public registers '
 'are updated slowly. A police station that closed, an office that moved one street, a '
 'clinic that no longer treats foreign patients: these change quietly and nothing announces it.',
 'There is a second trap. When two sources agree, people treat that as confirmation. Often '
 'the two sources are the same source twice, because one copied the other some years ago. '
 'Agreement proves common ancestry, not truth.',
 'For an officer this matters most in the lists a mission publishes. A citizen in trouble '
 'at midnight does not test an address. He walks to it, and if it is an empty building he '
 'is alone, in the dark, in a city he does not know.',
 'So every public list carries a date and a method. Verified by telephone on 4 November. '
 'Verified by visit on 12 January. An entry with no date beside it is not information; it '
 'is a rumour that somebody printed.'],

dp2=('Agreement is not verification', 'Open-source verification guidance commonly warns that '
     'independent-looking sources frequently share a single origin, so agreement between '
     'them is not evidence unless the origins are known to differ.',
     'Source: reported open-source verification practice, 2025–2026.'),

e_a=[('What does a map system do well?', 'it answers instantly and is usually right'),
     ('What is the real weakness?', 'the age of the information behind it'),
     ('What does agreement between two sources prove?', 'common ancestry, not truth'),
     ('Why do published lists matter most?', 'a citizen in trouble walks to the address'),
     ('What must every public list carry?', 'a date and a method of verification')],
e_b=[('The map itself is usually at fault.', 'F'),
     ('Public registers are updated quickly.', 'F'),
     ('Two agreeing sources may share one origin.', 'T'),
     ('A citizen tests an address before going.', 'F'),
     ('An entry with no date is a rumour.', 'T'),
     ('Verification should state its method.', 'T')],

w_model='Purpose: give a citizen in difficulty an address that will be open when they '
        'arrive. Scope: the 6 emergency entries on the consular list; general tourist '
        'information excluded. Inputs: 1 telephone call to each entry and 1 visit to the 2 '
        'police stations. Criteria: 1 line per entry with the name, the street, the hours, '
        'the telephone number and the date it was verified. Done: 6 lines, printed and '
        'pinned, by 17:00 on 8 November. Fallback: an entry that cannot be verified is '
        'removed from the list, not marked unconfirmed.',
w_fig=figs.spec_card('A LIST SOMEBODY CAN WALK TO AT MIDNIGHT',
                     [('Purpose', 'the address is open when the citizen arrives'),
                      ('Scope', 'the 6 emergency entries only'),
                      ('Inputs', '1 call to each, 1 visit to both police stations'),
                      ('Criteria', 'name, street, hours, number, date verified'),
                      ('Done', '6 lines printed and pinned by 17:00 on 8 November'),
                      ('Fallback', 'unverifiable entry is removed, not marked')]),
w_fig_cap='The last column is the one that makes the other five worth printing.',
w_task='Write a six-line list of local addresses a citizen could rely on.',
w_steps=['Line 1: the name of the place, in full and in the local language.',
         'Line 2: the street and the district.',
         'Line 3: the hours, including nights and weekends.',
         'Line 4: the telephone number, and whether it was answered.',
         'Line 5: the date you verified it and how.',
         'Line 6: what a citizen should do if it is closed.'],
w_bank=['… , Rhen district, open … to …',
        'Telephone …, answered on …',
        'Verified by telephone on …',
        'Verified by visit on …',
        'If closed, go to … , which is … minutes away.'],
w_check=['Is there a date beside every entry?',
         'Does each entry say how it was verified?',
         'Are the night and weekend hours given?',
         'Is there a second place for each entry?'],

t_title='Directions, maps and information that is out of date',
t_fig=figs.split('ASKING ABOUT A CITY',
                 'Trust it for this',
                 ['the shape of the streets',
                  'roughly how long a journey takes',
                  'which district a street is in',
                  'where the main stations are'],
                 'Check this with a person',
                 ['whether an office is still at that address',
                  'whether a station is still open at night',
                  'whether a clinic treats foreign nationals',
                  'anything you are about to print for citizens']),
t_fig_cap='Streets change slowly. Institutions change quietly, and nothing announces it.',
t_body=[
 'A map system is excellent for geography and poor for institutions. Streets, distances and '
 'journey times are stable, well recorded and checked by millions of people. Which door of '
 'a government building is open at night is none of those things.',
 'The same is true of any general answer about a service: opening hours, whether a station '
 'still operates, whether a clinic takes foreign patients. These are the facts that change '
 'without publicity, and they are precisely the facts a citizen in trouble needs.',
 'So use it for directions and for maps, and check the destination with a human being. Any '
 'piece of local information that sends a person to a door may be out of date. The test is '
 'simple: '
 'if the answer sends somebody to a door, telephone the door. If you are going to print the '
 'answer and pin it on a wall, walk to the door yourself.'],
t_say=[('Use it for the route: ', 'Show me the way from here to the Rhen district.'),
       ('Check the door: ', 'I will telephone the station before I put it on the list.'),
       ('Record the check: ', 'Verified by telephone on 4 November, answered by the duty desk.')],
t_bound='A map system does not know when an office moved or closed, because that '
        'information often reaches public registers months late or not at all. It will give '
        'a confident route to an empty building and nothing in the answer shows its age.',
t_a=[('Show me the ____________ from here to the Rhen district.', 'way'),
     ('I will ____________ the station before I put it on the list.', 'telephone'),
     ('Verified by telephone on 4 ____________.', 'November'),
     ('Streets change ____________.', 'slowly'),
     ('If the answer sends somebody to a ____________, telephone it.', 'door'),
     ('Nothing in the answer shows its ____________.', 'age')],
t_b_rubric='Say whether you would trust each answer, and what you would check.',
t_b=[('The hospital is 2.4 km north-east.', 'trust the geography; check it still has an emergency department'),
     ('The police station is open twenty-four hours.', 'check by telephone; opening hours change quietly'),
     ('The walk takes eighteen minutes.', 'trust it, allowing for a diversion'),
     ('This lawyer speaks English.', 'check by telephone; people retire and nothing announces it')],

case=dict(
 title='The Decision Room · The address on the wall',
 brief=[
  'The consular section keeps a printed list of emergency addresses on the waiting-room '
  'wall. It was assembled four years ago, partly from public registers and partly from a '
  'general search, and it has been reprinted twice without being checked.',
  'On 3 November a citizen whose bag was stolen uses it at midnight. The Rhen police '
  'station closed two years ago. He walks forty minutes in the rain to another station and '
  'reports the theft at 01:20.',
  'Bassel checks the other five entries the next morning. Two are correct. The airport desk '
  'has moved terminal, the English-speaking lawyer has retired, and the twenty-four-hour '
  'pharmacy now closes at ten.'],
 exhibit=figs.datatable('WHAT THE LIST COST',
                        ['Entry', 'On the list', 'Actually', 'Who found out'],
                        [['Rhen police station', 'open 24 hours', 'closed 2 years ago', 'a citizen, at midnight'],
                         ['airport desk', 'terminal 1', 'terminal 2', 'Bassel, by telephone'],
                         ['lawyer', 'speaks English', 'retired', 'Bassel, by telephone'],
                         ['pharmacy', '24 hours', 'closes 22:00', 'Bassel, by telephone'],
                         ['central hospital', 'correct', 'correct', '—'],
                         ['emergency number', 'correct', 'correct', '—']]),
 exhibit_cap='Four entries wrong, and the only one that was tested in the field was tested by a victim.',
 exhibit_note='Every wrong entry had been correct when the list was written. Nothing on the '
              'wall said when that was, so nobody could tell that it was old.',
 voices=[('Bassel Tannous', 'consul',
          'I telephoned all six in twenty-five minutes. Twenty-five minutes, in four years.'),
         ('Rim Haddad', 'consular assistant',
          'I said in my first year that the list needed dates. I was told it was fine.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'A list without a date is not information. We pinned a rumour to a wall for four years.')],
 steps=[('Find it', 'Which entry failed, and when?'),
        ('Compare it', 'How many entries were wrong, and how were they found?'),
        ('Infer it', 'Why did nobody notice for four years?'),
        ('Weigh it', 'Twenty-five minutes a quarter against one citizen alone at midnight.'),
        ('Decide', 'What must a published list carry, and who checks it?')],
 analysis=[('Find it. Which entry failed first?', 'the Rhen police station'),
           ('Compare it. How many entries were wrong?', 'four'),
           ('Infer it. How long did checking all six take?', 'twenty-five minutes'),
           ('Weigh it. Why did nobody notice?', 'nothing on the list showed its age'),
           ('Decide. Who had raised it before?', 'Rim, in her first year')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what every entry on a public list must carry.',
                 'Say how often the list is verified, and by whom.',
                 'Say what happens to an entry that cannot be verified.',
                 'Say what each entry must offer if the place is closed.'],
 bank=['Every entry carries the date it was last verified and the method used.',
       'The whole list is verified by telephone every quarter by the consular assistant.',
       'Police stations and hospitals are verified by visit once a year.',
       'An entry that cannot be verified is removed from the list the same day.'],
 outcome='Bassel rewrites the list in one afternoon. Every entry carries a date and a '
         'method. Rim verifies the whole list by telephone every quarter, which takes under '
         'half an hour, and the two police stations are visited once a year. An entry that '
         'cannot be verified comes off the wall the same day. The citizen is sent a letter '
         'of apology that names what went wrong, because he is owed the explanation.',
 outcome_q=[('What does every entry now carry?', 'the date and the method of verification'),
            ('How often is the list telephoned?', 'every quarter'),
            ('Who does it?', 'Rim, the consular assistant'),
            ('What happens to an unverifiable entry?', 'it is removed the same day'),
            ('What was sent to the citizen?', 'a letter of apology naming what went wrong')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Put together a list of useful addresses',
 task=['Four years ago somebody was asked to make the list that is now on the wall.',
       'This is the instruction that was given, and what was produced.'],
 draft=['Put together a list of useful addresses for citizens.',
        'The main ones people ask for.',
        'Get the details from a reliable source.',
        'Keep it to one page.',
        'Make sure it is accurate.',
        'We would like it up soon.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says which addresses, which source, or how accuracy is tested.',
 asked=['Useful addresses', 'From a reliable source', 'Accurate'],
 back=['22 entries', 'All from one public register', 'Nothing checked by telephone'],
 gap='Nobody said which addresses, how many, or what accurate means in practice.',
 back_cap='Twenty-two entries, one source, and no test of any kind.',
 back_note='Reliable source was read as an official register, which is reasonable. Nothing '
           'in the instruction said that a register is a record of the past.',
 diagnosis=[('“useful addresses”', 'unscoped set'),
            ('“the main ones people ask for”', 'unstated criterion'),
            ('“a reliable source”', 'unscoped set'),
            ('“one page”', 'unbounded quantity'),
            ('“make sure it is accurate”', 'unstated criterion'),
            ('“soon”', 'unbounded quantity')],
 rewrite='Rewrite it on the six lines so that the list can be relied on at midnight.',
 scaffold=['why the list exists and who uses it',
           'which categories of address, and how many',
           'what counts as a source, and what does not',
           'what each entry must contain, including the check',
           'how long it is and when it is due',
           'what to do with an entry that cannot be verified'],
 bank=['Purpose: so that a citizen in difficulty at night can …',
       'Scope: the … categories listed; tourist information excluded',
       'Inputs: a telephone call to each entry; registers are a starting point only',
       'Criteria: name, street, hours, number, date verified, method, and a second option',
       'Done: … entries on 1 page, by … on …',
       'Fallback: an entry that cannot be verified is removed, not printed with a warning'],
 check=['Are the categories named?',
        'Does it say a register is only a starting point?',
        'Does every entry carry a date and a method?',
        'Does each entry give a second option?'],
 model=['so that a citizen in difficulty at night reaches a door that is open',
        'the 6 categories listed: police, hospital, pharmacy, airport, lawyer, emergency line',
        'a telephone call to each entry; the public register is a starting point only',
        'name, street, hours, number, date verified, method, and 1 alternative place',
        '6 entries on 1 page, by 17:00 on 8 November',
        'an entry that cannot be verified is removed the same day, not printed with a warning'],
 cost='22 unchecked entries took a morning to assemble and stayed on a wall for 4 years. '
      '6 checked entries took 25 minutes and are worth pinning up.'),

feet=dict(
 title='On Your Feet · Lost, late, and nobody speaks your language',
 setting=[
  'You are due at the host ministry at 10:00 for a meeting the Mission waited three weeks '
  'for. It is 09:48. Your telephone is dead. You are in a square with four exits, no street '
  'signs, and the two people nearby have very little English.',
  'You cannot arrive flustered and you cannot arrive late without a message. You need one '
  'direction, one landmark and one estimate of time, from people who are busy. You have '
  'about ninety seconds to get it.'],
 ladder=[('A long answer', 'turn it into a choice question'),
         ('A second opinion', 'two people disagree in front of you'),
         ('No English at all', 'the turn with no shared language')],
 cap='Three turns. The third one has to be solved without words.',
 turns=[('Turn 1 · Passer-by', 'Ah, Vermaas — yes, you go past the old bank, then by the school, then…'),
        ('Turn 2 · Second passer-by', 'No, no. Not that way. The other way, by the market.'),
        ('Turn 3 · Third passer-by', '(shrugs and spreads their hands — no English at all)')],
 holds=['Sorry — my language is poor. Left or right?',
        'Is it near, or far? Five minutes or twenty?',
        'Is there a big building I can see from here?',
        'May I show you the name, written down?',
        'Which way do you go? I will follow that way.',
        'Thank you. Three corners, then left. Is that right?'],
 redline='You must not keep asking the same long question in the hope of a shorter answer, '
         'and you must not walk away in a direction you are not sure of just to end the '
         'conversation. Do not show a stranger your official documents in the street.',
 score=['Replaced the open question with a choice question within one turn.',
        'Asked for a landmark, not a route.',
        'Got an estimate of time as well as a direction.',
        'Repeated the instruction back before moving.',
        'Used writing or pointing when there was no shared language.'],
 a=[('What do you do with a long answer?', 'turn the question into a choice'),
    ('Which three things do you need?', 'a direction, a landmark and a time'),
    ('What do you ask when two people disagree?', 'which way each of them goes'),
    ('What do you do before walking away?', 'repeat the instruction back'),
    ('What works when there is no shared language?', 'showing the name written down'),
    ('What must you never show in the street?', 'your official documents')]),

rev_fig=figs.split('ASKING AND CHECKING',
                   'Gets you a long answer',
                   ['How do I get to Vermaas Street?',
                    'Is there a police station around here?',
                    'What are the opening hours?',
                    'Is this list correct?'],
                   'Gets you an answer you can use',
                   ['Left or right?',
                    'Which station is open at midnight?',
                    'Are you open on Sunday? Yes or no?',
                    'When was each entry last telephoned?']),
rev_fig_cap='The right-hand column can be answered in one or two words.',
rev=dict(
 read=[('What had closed two years ago?',
        ['the Rhen police station', 'the hospital', 'the pharmacy', 'the airport'], 0),
       ('How long did it take to telephone all six entries?',
        ['twenty-five minutes', 'two days', 'four hours', 'a week'], 0),
       ('What does agreement between two sources prove?',
        ['common ancestry', 'truth', 'accuracy', 'nothing at all'], 0),
       ('What happens to an unverifiable entry?',
        ['it is removed', 'it is marked', 'it is kept', 'it is reprinted'], 0)],
 listen_text='A map system is excellent for geography and poor for institutions. Streets '
             'are stable. Whether an office is still at that address is not. If the answer '
             'sends somebody to a door, telephone the door.',
 listen=[('A map system is excellent for ____________.', 'geography'),
         ('It is poor for ____________.', 'institutions'),
         ('Streets are ____________.', 'stable'),
         ('If the answer sends somebody to a door, ____________ the door.', 'telephone')],
 speak=['Ask your partner for directions to four places, using choice questions only.',
        'Your partner may answer in no more than three words each time.'],
 write='Write a six-line list of local addresses a citizen could rely on.',
 vocab=[('One named part of a city is a ____________.', 'district'),
        ('The place where taxis wait is a taxi ____________.', 'rank'),
        ('A temporary route around a closed road is a ____________.', 'diversion'),
        ('The number to call in danger is the ____________ number.', 'emergency')],
 gram=[('____________ is the police station?', 'Where'),
       ('____________ the clinic open on Sunday?', 'Does'),
       ('How far ____________ it from here?', 'is'),
       ('Yes, it ____________.', 'does')]),

found=['Learn ten choice questions in the host language and use one every day this week.',
       'Telephone every address your section publishes, and write the date beside each.',
       'Walk to the two emergency addresses nearest your post, at night, once.',
       'Learn three landmarks in each district you visit, so you can describe where you are.'],
end_line='Ask a question with a choice in it. Then telephone the door before you print it.',
end_next='Next: The First Report Home')
