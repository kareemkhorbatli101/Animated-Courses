# -*- coding: utf-8 -*-
import figs

U = dict(
num=5,
title='A Flat, a Bank and a Signature',
gram='countable and uncountable: some, any, a few, a little',
ai='practical local information, and how to check it',
strap='CEFR A2 · Grammar: countable and uncountable: some, any, a few, a little · '
      'AI: practical local information, and how to check it',
cando=['use some, any, a few and a little correctly',
       'ask about the cost and the conditions of a flat',
       'explain what a deposit and a notice period are',
       'check a piece of local information before I rely on it',
       'write five lines reporting a local rule to a colleague'],

hero=('THREE SIGNATURES IN ONE WEEK, AND NOT ONE OF THEM IN HER LANGUAGE',
      ['A lease, a bank form and an inventory.',
       'Each is correct. None of them says the same thing twice.'],
      [(720, 'purple', 'long'), (720, 'grey', 'short'), (720, 'blue', 'short')]),
hero_cap='A kitchen table in Calmar, on a Saturday, with three documents and one pen.',

warm=['What do you have to sign when you rent a flat in your country?',
      'How much money do you normally pay before you move in?',
      'Where do you check a rule about money that you have just been told?'],

read=[
 'Nour has three weeks of hotel and then she must live somewhere. There are a few flats near '
 'the Mission and a little money in the allowance. The agent shows her four. Two have no '
 'heating in the second bedroom and one has no lift.',
 'The fourth flat is good. The rent is 1,100 a month. The agent says the deposit is three '
 'months, which is normal here. Nour asks a system what the usual deposit is in this '
 'country. It answers at once: two months, and in some cases one.',
 'So somebody is wrong. The system is confident. The agent is confident. Rim Haddad, who has '
 'lived in Ostport for nineteen years, is not confident at all. She says the law changed '
 'eighteen months ago and that agents in the capital still quote the old figure.',
 'There is also the lease itself. It is in the local language, with an English version '
 'attached. The notice period in the English is two months. Tarek reads the original and '
 'finds three months, with a clause that nobody translated.',
 'At the bank it is simpler and slower. Nour may open an account with her passport and a '
 'letter from the Mission. She may not have a card until the accreditation card exists. The '
 'clerk is sorry. The rule is not his, and it has no exceptions this month.'],

dp1=('Where new arrivals lose money', 'Administrative reports from missions commonly '
     'identify housing deposits, notice periods and utility transfer charges as the three '
     'places where arriving officers most often pay more than the local rule requires.',
     'Source: reported practice in diplomatic administration, 2025–2026.'),

c_a=[('How many flats does the agent show?', 'four'),
     ('What is the rent of the fourth flat?', '1,100 a month'),
     ('What deposit does the agent ask for?', 'three months'),
     ('What does the system say the usual deposit is?', 'two months, sometimes one'),
     ('What is the notice period in the original lease?', 'three months'),
     ('What may Nour not have until accreditation?', 'a bank card')],

c_b=[('Nour has four weeks of hotel.', 'F'),
     ('Two of the flats have no heating in one bedroom.', 'T'),
     ('Rim is confident about the deposit.', 'F'),
     ('The law on deposits changed eighteen months ago.', 'T'),
     ('The English version of the lease is complete.', 'F'),
     ('The bank clerk can make an exception.', 'F')],

c_c=[('There are a ____________ flats near the Mission.', 'few'),
     ('There is a ____________ money in the allowance.', 'little'),
     ('One flat has ____________ lift.', 'no'),
     ('Is there ____________ heating in the second bedroom?', 'any'),
     ('The agent quotes ____________ old figure.', 'the'),
     ('The clerk has ____________ exceptions this month.', 'no')],

c_d=[('Use a few with ( uncountable / countable ) nouns.', ['uncountable', 'countable'], 1),
     ('Use a little with ( uncountable / countable ) nouns.',
      ['uncountable', 'countable'], 0),
     ('The agent’s figure is ( out of date / illegal ).', ['out of date', 'illegal'], 0),
     ('The English lease is ( incomplete / forged ).', ['incomplete', 'forged'], 0),
     ('The bank rule depends on ( accreditation / the clerk ).', ['accreditation', 'the clerk'], 0)],

c_e=('Countable or uncountable? Put each word in the right column.',
     [('flats', 'countable'),
      ('money', 'uncountable'),
      ('furniture', 'uncountable'),
      ('rooms', 'countable'),
      ('advice', 'uncountable'),
      ('receipts', 'countable')],
     ['countable', 'uncountable']),

v_fig_title='SIGNING FOR A PLACE TO LIVE',
v_fig=[('doc', 'a lease'), ('key', 'a deposit'), ('people', 'a landlord'),
       ('clock', 'a notice period'), ('chart', 'an inventory'), ('bank', 'a standing order')],
v_fig_cap='Six words that decide what a signature costs you.',

vocab=[
 ('a lease', 'the written agreement under which a person rents a property'),
 ('a landlord', 'the owner who lets a property to somebody else'),
 ('a deposit', 'money held by a landlord against damage and unpaid rent'),
 ('an estate agent', 'the business that finds and lets property for a fee'),
 ('a notice period', 'the warning a party must give before ending an agreement'),
 ('an inventory', 'the list of what is in a property, agreed at the start'),
 ('a utility bill', 'a bill for electricity, water, gas or heating'),
 ('a standing order', 'an instruction to a bank to pay the same amount regularly'),
 ('a bank transfer', 'the movement of money from one account to another'),
 ('a branch', 'one office of a bank, in one place'),
 ('an identity check', 'the confirmation that a person is who they say they are'),
 ('a guarantor', 'a person who promises to pay if somebody else does not'),
 ('an exchange rate', 'the value of one currency in another'),
 ('a receipt', 'the written proof that a payment was made'),
 ('a furnished flat', 'a flat let with its furniture included'),
 ('a commute', 'the daily journey between home and work'),
 ('a neighbourhood', 'the area immediately around a place'),
 ('a service charge', 'a regular payment for the upkeep of a shared building'),
 ('a meter reading', 'the number shown on a utility meter on a given date'),
 ('a clause', 'one numbered part of a written agreement')],

v_a=[('The written agreement for renting is a ____________.', 'lease'),
     ('Money held against damage is a ____________.', 'deposit'),
     ('The warning before ending an agreement is a ____________ period.', 'notice'),
     ('The list of what is in a property is an ____________.', 'inventory'),
     ('A regular automatic payment is a ____________ order.', 'standing'),
     ('Written proof of payment is a ____________.', 'receipt'),
     ('The number on a utility meter is a meter ____________.', 'reading'),
     ('One numbered part of an agreement is a ____________.', 'clause')],

v_b=[('A guarantor is a person who promises to pay', 'if somebody else does not.'),
     ('An exchange rate is the value of one currency', 'in another.'),
     ('A service charge is a regular payment for the upkeep', 'of a shared building.'),
     ('An estate agent is the business that finds and lets property', 'for a fee.'),
     ('A commute is the daily journey', 'between home and work.')],

g_title='Grammar: countable and uncountable: some, any, a few, a little',
g_rule=['Countable nouns have a plural: a flat, two flats. Use a few, many, how many.',
        'Uncountable nouns have no plural: money, furniture, advice. Use a little, much, how much.',
        'Use some in positive sentences and offers: I have some receipts.',
        'Use any in questions and negatives: Is there any heating? There is not any lift.'],
g_fig=('WRONG',
       ['I have a few money.',
        'There are some furnitures.',
        'How many advice did she give?',
        'Is there some lift in the building?'],
       'RIGHT',
       ['I have a little money.',
        'There is some furniture.',
        'How much advice did she give?',
        'Is there a lift in the building?'],
       'four sentences with the wrong kind of noun',
       'the same four, counted correctly'),
g_fig_cap='If you can say two of them, it is countable. If you cannot, it is not.',

g_a=[('There are a ____________ flats near the Mission.', 'few'),
     ('There is a ____________ money left in the allowance.', 'little'),
     ('____________ many rooms does it have?', 'How'),
     ('____________ much is the service charge?', 'How'),
     ('Is there ____________ heating in the bedroom?', 'any'),
     ('She gave me ____________ advice about the deposit.', 'some'),
     ('There are not ____________ receipts in the file.', 'any'),
     ('We need ____________ furniture for the second room.', 'some'),
     ('There is ____________ lift, so we use the stairs.', 'no')],

g_b=[('I have ( a little / a few ) money.', ['a little', 'a few'], 0),
     ('There is ( some furniture / some furnitures ).', ['some furniture', 'some furnitures'], 0),
     ('( How much / How many ) is the deposit?', ['How much', 'How many'], 0),
     ('Is there ( any / some ) heating upstairs?', ['any', 'some'], 0),
     ('She gave me ( a few / a little ) receipts.', ['a few', 'a little'], 0),
     ('There are not ( any / some ) flats in that street.', ['any', 'some'], 0)],

d1=dict(
 title='Three months is normal, says the agent',
 fig=(['Three months deposit is normal here.', 'Normal when?'],
      ['Normal always.', 'The law changed eighteen months ago.']),
 cap='Nour, the estate agent and Rim Haddad, by telephone, on a Friday.',
 lines=[('Agent', 'The deposit is three months. That is normal in this city.'),
        ('Nour', 'A system told me two months, and sometimes one.'),
        ('Agent', 'Systems are not landlords. Three months is what everybody asks.'),
        ('Nour', 'May I check with a colleague before I sign?'),
        ('Agent', 'Of course. The flat is popular, so I cannot hold it for long.'),
        ('Rim', 'Do not sign today. The law changed eighteen months ago.'),
        ('Nour', 'To what?'),
        ('Rim', 'Two months, unless the flat is furnished and let for under a year.'),
        ('Nour', 'It is furnished, and the lease is two years.'),
        ('Rim', 'Then it is two months. Ask him to show you the article number.'),
        ('Nour', 'And if he will not?'),
        ('Rim', 'Then he is not sure either, and you have learned something useful.')],
 a=[('What deposit does the agent ask for?', 'three months'),
    ('What did the system say?', 'two months, sometimes one'),
    ('When did the law change?', 'eighteen months ago'),
    ('What is the exception?', 'a furnished flat let for under a year'),
    ('What should Nour ask the agent to show?', 'the article number')],
 b=[('Three months is ____________ in this city.', 'normal'),
    ('May I ____________ with a colleague?', 'check'),
    ('Ask him to show you the ____________ number.', 'article'),
    ('Then he is not ____________ either.', 'sure')]),

d2=dict(
 title='Confident, fast and eighteen months out of date',
 fig=(['It gave me a figure in two seconds.', 'From when?'],
      ['It did not say.', 'That is the part you needed.']),
 cap='Nour and Firas Obeid, over the lease, on Monday morning.',
 lines=[('Nour', 'The system gave me the deposit rule in two seconds.'),
        ('Firas', 'Was it right?'),
        ('Nour', 'It was right for the law before the change.'),
        ('Firas', 'So it was right in the past and wrong on Friday.'),
        ('Nour', 'Yes. And it did not say which year it was describing.'),
        ('Firas', 'That is the whole problem with local rules.'),
        ('Nour', 'But it was still useful. It told me three months was unusual.'),
        ('Firas', 'Good. That is the right use. It gave you a reason to ask.'),
        ('Nour', 'And Rim gave me the exception and the article number.'),
        ('Firas', 'Rim has lived here nineteen years. That is not a search result.'),
        ('Nour', 'So what do I do in a city where we have no Rim?')],
 unresolved=True,
 a=[('How fast was the system’s answer?', 'two seconds'),
    ('Was the answer right?', 'right for the old law, wrong on Friday'),
    ('What did it not say?', 'which year it was describing'),
    ('What was the answer still useful for?', 'showing that three months was unusual'),
    ('What did Rim add?', 'the exception and the article number')],
 b=[('It was right in the past and ____________ on Friday.', 'wrong'),
    ('It gave you a reason to ____________.', 'ask'),
    ('Rim has lived here ____________ years.', 'nineteen'),
    ('That is not a ____________ result.', 'search')]),

speak=[('How much and how many',
        ['Ask your partner ten questions about a flat.',
         'Five with how many and five with how much.',
         'Your partner answers with a few, a little, some or any.']),
       ('The conditions',
        ['Describe a flat you have rented, in eight sentences.',
         'Say the rent, the deposit, the notice period and one problem.',
         'Your partner asks three questions about money.']),
       ('Check it',
        ['Student A states a local rule confidently.',
         'Student B asks three questions that test where it came from.',
         'Decide together whether the rule is safe to act on today.'])],

ext_title='Local rules are the fastest thing to ask about and the easiest thing to get wrong',
ext_fig=figs.datatable('FOUR ANSWERS ABOUT ONE DEPOSIT',
                       ['Source', 'The answer', 'As at', 'Useful for'],
                       [['the estate agent', '3 months', 'practice in the city', 'knowing the ask'],
                        ['a general system', '2 months, sometimes 1', 'unclear year', 'knowing it is odd'],
                        ['Rim Haddad', '2 months, with 1 exception', 'current law', 'deciding'],
                        ['the law itself', 'article 41, as amended', '18 months ago', 'proving'],
                        ['another officer', '3 months, he paid it', 'two years ago', 'nothing'],
                        ['the landlord', '3 months, firmly', 'today', 'negotiating']]),
ext_fig_cap='Six answers, four of them honest, and only two of them worth acting on.',
ext=[
 'A new officer needs a hundred small local facts in the first month. How much is a deposit? '
 'Is a guarantor normal? What notice must you give? How is a utility account transferred? '
 'These are not diplomatic questions, but they cost real money and real weeks.',
 'A system answers all of them immediately, and the answers are usually of the right shape. '
 'That shape is the useful part. It tells you what the normal range is, so that you can '
 'notice when somebody is asking for something outside it.',
 'What a system cannot give you is the date. Local administrative rules change often and '
 'quietly, and a confident answer may describe the position two years ago. Nothing in the '
 'reply marks it as old, because the reply has no idea that it is old.',
 'So treat the answer as a reason to ask, never as a basis to sign. Ask one person who '
 'lives under the rule, and ask for the thing a system cannot produce: an article number, a '
 'form name, a page, a dated notice on an office wall.',
 'This habit has a second benefit. It gives you something to say at the counter that is not '
 'an argument. Asking which article applies is polite, specific and hard to refuse, and it '
 'turns a disagreement about confidence into a question about a document.'],

dp2=('Why dates matter more than answers', 'Guidance to officers posted abroad commonly '
     'stresses that a general answer about a local rule should be verified against a dated '
     'source before any payment or signature, because administrative rules are amended '
     'frequently and without publicity.',
     'Source: reported practice in diplomatic administration, 2025–2026.'),

e_a=[('How many small local facts does an officer need?', 'about a hundred in the first month'),
     ('What is the useful part of a general answer?', 'the normal range, so you can notice something odd'),
     ('What can a system not give you?', 'the date the rule applied'),
     ('What should you ask a local person for?', 'an article number, a form name or a dated notice'),
     ('What is the second benefit of asking about an article?', 'it turns a disagreement into a question about a document')],
e_b=[('Local facts are diplomatic questions.', 'F'),
     ('A general answer shows the normal range.', 'T'),
     ('A confident answer is always current.', 'F'),
     ('A reply marks itself as out of date.', 'F'),
     ('An article number is a dated source.', 'T'),
     ('Asking which article applies is impolite.', 'F')],

w_model='Purpose: tell arriving officers what the deposit rule is, so that nobody pays more '
        'than the law requires. Scope: residential leases in this host state; vehicles and '
        'offices excluded. Inputs: article 41 as amended, and 1 conversation with the '
        'consular assistant in Ostport. Criteria: 5 lines giving the rule, the exception, '
        'the date of the amendment, the article number and what to ask an agent for. Done: '
        '5 lines in the arrivals file, by 17:00 on Friday. Fallback: where an agent refuses '
        'to give an article number, report it and do not sign.',
w_fig=figs.spec_card('FIVE LINES THAT SAVE A MONTH’S RENT',
                     [('Purpose', 'nobody pays more deposit than the law requires'),
                      ('Scope', 'residential leases only'),
                      ('Inputs', 'article 41 as amended, 1 local conversation'),
                      ('Criteria', '5 lines: rule, exception, date, article, what to ask'),
                      ('Done', '5 lines in the arrivals file by 17:00 Friday'),
                      ('Fallback', 'no article number given: report it, do not sign')]),
w_fig_cap='Local knowledge is only useful to the Mission once somebody writes it down.',
w_task='Write five lines telling a new colleague one local rule about money.',
w_steps=['Line 1: the rule, in one sentence, with a number.',
         'Line 2: the exception, if there is one.',
         'Line 3: where the rule comes from, with a date.',
         'Line 4: what to ask for before paying.',
         'Line 5: who at the post knows more about it.'],
w_bank=['The deposit is … months, except where …',
        'The rule changed on … and agents still quote the old figure.',
        'Before paying, ask the agent for …',
        'Do not sign if … is refused.',
        'The person here who knows this best is …'],
w_check=['Is there a number in line 1?',
         'Is there a date in line 3?',
         'Does line 4 say exactly what to ask for?',
         'Is a named person given in line 5?'],

t_title='Practical local information, and how to check it',
t_fig=figs.split('TWO WAYS TO USE A FAST ANSWER',
                 'Dangerous',
                 ['It says two months, so I will pay two.',
                  'It says a guarantor is not needed.',
                  'It says the notice is one month.',
                  'It did not mention a service charge.'],
                 'Safe',
                 ['It says two months, so three is worth questioning.',
                  'Ask the agent whether a guarantor is required, and why.',
                  'Ask which clause of this lease sets the notice period.',
                  'Ask what else is payable that is not the rent.']),
t_fig_cap='The left column acts on an answer. The right column uses it to make a question.',
t_body=[
 'Local administrative information is the easiest thing to ask a system for and the hardest '
 'kind of answer to rely on. It is easy because the question is short and common. It is '
 'hard because the right answer depends on where you are and on what month it is.',
 'So take the answer as a shape, not as a fact. If a system says the usual deposit is two '
 'months, you have learned that three is above the normal range. That is genuinely useful '
 'at a kitchen table with an agent, and it costs four seconds.',
 'Then check it against something with a date on it. An article number, a form, a notice on '
 'an office wall, a colleague who pays this rule every month. Ask for the dated thing '
 'before you sign, and ask for it politely, because you will meet the same agent again.'],
t_say=[('Take the shape: ', 'What is the usual range, so I know what is unusual?'),
       ('Ask for the date: ', 'Which article sets this, and when was it last amended?'),
       ('Check with a person: ', 'Rim, you pay this rule. What does it say this year?')],
t_bound='A general answer about a local rule does not know which year it is describing and '
        'does not know which city you are in. It cannot tell you that the rule changed '
        'eighteen months ago, because nothing in its answer carries a date at all.',
t_a=[('What is the usual ____________, so I know what is unusual?', 'range'),
     ('Which ____________ sets this rule?', 'article'),
     ('When was it last ____________?', 'amended'),
     ('Take the answer as a ____________, not as a fact.', 'shape'),
     ('Ask for the dated thing before you ____________.', 'sign'),
     ('Nothing in its answer carries a ____________.', 'date')],
t_b_rubric='Turn each confident answer into a question you can ask a person.',
t_b=[('The deposit is two months.', 'which article sets the deposit, and when was it amended'),
     ('No guarantor is needed.', 'is a guarantor required here, and in what cases'),
     ('Notice is one month.', 'which clause of this lease sets the notice period'),
     ('Utilities are included.', 'what is payable besides the rent, and to whom')],

case=dict(
 title='The Decision Room · The clause nobody translated',
 brief=[
  'An officer signs a two-year lease in Calmar. The agent supplies an English version. The '
  'English says the notice period is two months. The officer is posted onward after '
  'fourteen months and gives two months’ notice in writing.',
  'The landlord replies that the original lease says three months, and that clause 19, '
  'which does not appear in the English version at all, requires the tenant to pay the '
  'service charge for the whole remaining year if the lease ends early.',
  'The Mission must decide what it does about this lease, and what it does about every '
  'other lease its officers sign. Four officers are currently house-hunting.'],
 exhibit=figs.datatable('TWO VERSIONS OF ONE LEASE',
                        ['Item', 'English version', 'Original', 'Effect'],
                        [['rent', '1,100', '1,100', 'the same'],
                         ['deposit', '2 months', '2 months', 'the same'],
                         ['notice period', '2 months', '3 months', '1 month of rent'],
                         ['clause 19', 'absent', 'service charge to year end', '9 months of charge'],
                         ['inventory', 'attached', 'attached', 'the same'],
                         ['signature page', 'both', 'both', 'the officer signed both']]),
 exhibit_cap='Four rows are identical. The two that differ are the two that cost money.',
 exhibit_note='The English version was not dishonest. It was a summary made for convenience, '
              'and nobody at the Mission ever asked what it was.',
 voices=[('Firas Obeid', 'administration',
          'We have used that agent for six years. Nobody ever read the original.'),
         ('Rim Haddad', 'consular assistant',
          'I would have read it in twenty minutes. Nobody asked me, because I am not in Calmar.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'The officer signed a document he could not read. We let him, and we told him it was normal.')],
 steps=[('Find it', 'Which two items differ between the versions?'),
        ('Compare it', 'What does each difference cost?'),
        ('Infer it', 'Why did nobody read the original in six years?'),
        ('Weigh it', 'Twenty minutes of reading against ten months of charges.'),
        ('Decide', 'What must happen before any officer signs a lease?')],
 analysis=[('Find it. Which two items differ?', 'the notice period and clause 19'),
           ('Compare it. What does the notice difference cost?', 'one month of rent'),
           ('Infer it. What does clause 19 cost?', 'nine months of service charge'),
           ('Weigh it. Why was the English version produced?', 'for convenience, as a summary'),
           ('Decide. Why did Rim not read it?', 'nobody asked her; she is in Ostport')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say what the Mission requires before a lease is signed.',
                 'Say who reads the original, and by when.',
                 'Say what happens when no reader is available at the post.',
                 'Say what the Mission tells an officer about an English version.'],
 bank=['No lease is signed until a named reader has read the original.',
       'The reader lists every clause that is not in the English version.',
       'Where no reader is at the post, the Mission pays for a certified translation.',
       'An English version supplied by an agent is a summary and has no standing.'],
 outcome='Dr Kanaan settles the notice at two and a half months and pays four months of '
         'service charge, because the Mission’s own carelessness was part of the cause. She '
         'writes four lines: no lease is signed until a named reader has read the original '
         'and listed the clauses missing from the English. Where nobody at the post can '
         'read it, the Mission pays for a certified translation, which costs less than one '
         'month of anything.',
 outcome_q=[('What notice was finally agreed?', 'two and a half months'),
            ('How many months of service charge were paid?', 'four'),
            ('What must happen before a lease is signed?', 'a named reader reads the original'),
            ('What does the reader list?', 'clauses missing from the English version'),
            ('What standing does an agent’s English version have?', 'none')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Find me a flat',
 task=['An arriving officer asked the administration section to find him somewhere to live.',
       'This is the instruction as it was sent, and the list that came back.'],
 draft=['Find me a flat.',
        'Something near the Mission.',
        'Not too expensive.',
        'A couple of bedrooms.',
        'Decent condition.',
        'Fairly soon, if you can.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them has a number in it anywhere.',
 asked=['A flat near the Mission', 'Not too expensive', 'Decent condition'],
 back=['26 flats across the city', 'From 600 to 3,400', '4 of them unfurnished'],
 gap='Nobody said how near, how much, how many bedrooms, or by when.',
 back_cap='Twenty-six flats came back, and nineteen of them were impossible on the allowance.',
 back_note='Near the Mission was read as the city, because no distance was given and the '
           'city is not large. Nothing in the instruction was unreasonable; it was simply '
           'not a specification.',
 diagnosis=[('“a flat”', 'unscoped set'),
            ('“near the Mission”', 'unstated criterion'),
            ('“not too expensive”', 'unbounded quantity'),
            ('“a couple of bedrooms”', 'unbounded quantity'),
            ('“decent condition”', 'unstated criterion'),
            ('“fairly soon”', 'unscoped set')],
 rewrite='Rewrite it on the six lines so that only one short list can come back.',
 scaffold=['why the flat is needed and by when the officer must move in',
           'the area, as a distance or named districts',
           'where the listings come from',
           'the rent ceiling, the bedrooms and the condition, as numbers',
           'how many options, and the day they are due',
           'what to do if nothing meets the criteria'],
 bank=['Purpose: so that … can move out of the hotel by …',
       'Scope: flats within … of the Mission, in the districts of …',
       'Inputs: the agents the Mission has used in the last … years',
       'Criteria: … bedrooms, rent not above …, furnished, lift, heating in every room',
       'Done: … options with photographs and leases, by … on …',
       'Fallback: if fewer than … meet the criteria, send what there is and say which criterion failed'],
 check=['Is there a distance or a list of districts?',
        'Is there a rent ceiling?',
        'Is there a number of bedrooms?',
        'Is there a date for moving in?'],
 model=['so that the arriving officer can leave the hotel by 30 October',
        'flats within 3 km of the Mission, in the districts of Ostveld and Rhen',
        'the 4 agents the Mission has used in the last 3 years',
        '2 bedrooms, rent not above 1,300, furnished, with heating in every room',
        '5 options with photographs and draft leases, by 16:00 on Thursday',
        'if fewer than 5 qualify, send what there is and name the criterion that failed'],
 cost='26 flats took 2 days to assemble and 2 hours to reject. The officer stayed in the '
      'hotel for 11 extra nights, which cost more than the whole search.'),

feet=dict(
 title='On Your Feet · The bank will not open the account',
 setting=[
  'You are at a bank branch at 14:10. You have your passport, a letter from the Mission and '
  'the hotel address. The clerk tells you that an account for a diplomatic officer needs the '
  'accreditation card, and that yours does not exist yet. Your salary arrives in nine days.',
  'The clerk is not being difficult. He is reading a rule on a screen. Behind him there is a '
  'manager who is not looking at you. You want an account, or a date, or a different '
  'product. You have about ninety seconds before he suggests you come back.'],
 ladder=[('No card, no account', 'ask what the rule actually requires'),
         ('What about a basic account?', 'look for the category that fits what you do have'),
         ('Come back when you have it', 'the turn where you need a person, not a product')],
 cap='Three turns. The third one is where most officers give up and lose nine days.',
 turns=[('Turn 1 · Clerk', 'I am sorry. For this type of account we need your accreditation card.'),
        ('Turn 2 · Clerk', 'A basic account also needs proof of address, and a hotel is not an address.'),
        ('Turn 3 · Clerk', 'The best thing is to come back when the card is issued.')],
 holds=['May I ask what the rule requires exactly: the card, or proof of status?',
        'Could the Mission’s letter serve as proof of status while the card is issued?',
        'Is there an account type that does not require proof of a permanent address?',
        'I am not asking you to break the rule. I am asking which rule applies.',
        'Could you ask your colleague whether there is a procedure for arriving officers?',
        'May I have your name and the branch reference, so the Mission can write to you?'],
 redline='You must not say that other officers were given accounts without a card, because '
         'you do not know that and it accuses the branch of inconsistency. You must not '
         'offer anything in exchange, and you must not ask the clerk to use his own '
         'discretion against a rule on his screen.',
 score=['Asked what the rule requires rather than arguing that it should not apply.',
        'Offered an alternative document instead of repeating the same one.',
        'Asked about a different product, not a different answer on the same product.',
        'Got a name and a reference, so the Mission can write formally.',
        'Left without accusing anybody of anything.'],
 a=[('What does the clerk say is needed?', 'the accreditation card'),
    ('Why is the hotel a problem?', 'a hotel is not proof of address'),
    ('What alternative document can you offer?', 'the Mission’s letter as proof of status'),
    ('What different product can you ask about?', 'an account type with no permanent address requirement'),
    ('What must you not claim about other officers?', 'that they were given accounts without a card'),
    ('What do you take away if nothing works?', 'a name and the branch reference')]),

rev_fig=figs.split('A LOCAL RULE',
                   'An answer you cannot use',
                   ['The deposit is usually two months.',
                    'A guarantor is not normally needed.',
                    'Notice is one month.',
                    'Utilities are often included.'],
                   'An answer you can use',
                   ['Article 41, amended 18 months ago: 2 months.',
                    'Clause 7 of this lease: no guarantor.',
                    'Clause 12 of this lease: 3 months.',
                    'Schedule B: service charge payable monthly.']),
rev_fig_cap='The right-hand column names a document. The left-hand column names nothing.',
rev=dict(
 read=[('What deposit did the agent ask for?', ['three months', 'two months', 'one month', 'none'], 0),
       ('When did the deposit law change?',
        ['eighteen months ago', 'last week', 'five years ago', 'it did not'], 0),
       ('What was missing from the English lease?',
        ['clause 19', 'the rent', 'the deposit', 'the inventory'], 0),
       ('What does an agent’s English version have?',
        ['no standing', 'equal standing', 'more standing', 'legal force'], 0)],
 listen_text='Take a fast answer as a shape, not as a fact. If a system says the usual '
             'deposit is two months, you know that three is above the normal range. Then '
             'ask for something with a date: an article number, a clause, a dated notice.',
 listen=[('Take a fast answer as a ____________.', 'shape'),
         ('Three is above the normal ____________.', 'range'),
         ('Ask for something with a ____________.', 'date'),
         ('An article number or a ____________.', 'clause')],
 speak=['Tell your partner three local rules about money in your own country.',
        'Your partner asks for the date and the source of each one.'],
 write='Write five lines telling a new colleague one local rule about money.',
 vocab=[('Money held against damage is a ____________.', 'deposit'),
        ('The warning before ending an agreement is a ____________ period.', 'notice'),
        ('The list of what is in a property is an ____________.', 'inventory'),
        ('One numbered part of an agreement is a ____________.', 'clause')],
 gram=[('There is a ____________ money left.', 'little'),
       ('We saw a ____________ places in two days.', 'few'),
       ('____________ much is the service charge?', 'How'),
       ('Is there ____________ heating upstairs?', 'any')]),

found=['Write down five local rules about money, each with a date and a source.',
       'Ask one long-serving local colleague which rule changed most recently.',
       'Practise asking for an article number politely, in three different ways.',
       'Before your next signature, list every clause you have not read in the original.'],
end_line='A fast answer tells you what is unusual. A dated document tells you what is true.',
end_next='Next: The Front Desk and the Telephone')
