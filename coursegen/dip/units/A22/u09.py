# -*- coding: utf-8 -*-
import figs

U = dict(
num=9,
title='What to Wear, What to Ask',
gram='should, must and had better for advice',
ai='cultural questions where a general answer fails',
strap='CEFR A2 · Grammar: should, must and had better for advice · '
      'AI: cultural questions where a general answer fails',
cando=['give advice with should, must and had better',
       'ask about dress and custom without causing offence',
       'explain why a majority custom is not every family’s custom',
       'say which cultural questions need a named local adviser',
       'write five lines of advice for a visiting colleague'],

hero=('A CORRECT ANSWER ABOUT A COUNTRY, AND THE WRONG ONE FOR A FAMILY',
      ['He wore dark clothes and brought flowers, as advised.',
       'In that community flowers are not brought, and everybody saw.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A doorway in a northern town, where a condolence visit began badly and was repaired slowly.',

warm=['How do you find out what to wear at an event abroad?',
      'Who do you ask about a custom you do not understand?',
      'Has a general rule about your own country ever been wrong about you?'],

read=[
 'Dress is the easiest cultural question and the one officers worry about most. The answer '
 'is usually written on the invitation. Lounge suit. Black tie. National dress. Where it is '
 'not written, the host office will say, and asking is normal.',
 'The harder questions are not about clothes. They are about what to bring, what to say, '
 'when to arrive, when to leave, and what not to do with your hands. These are rarely '
 'written anywhere, and they change from region to region.',
 'Ziad must make a condolence visit in a northern town. He asks a system what is '
 'appropriate. The answer is clear, respectful and accurate for most of the country: dark '
 'clothes, a short visit, flowers.',
 'The family belongs to a community in the north where flowers are not brought and where '
 'the visit is made on the third day, not the first. The answer he was given was a correct '
 'description of a majority custom.',
 'Rim could have told him in one minute. He did not ask her, because the answer he had '
 'already looked complete. That is the particular danger of a good general answer: it '
 'removes the feeling that a question is still open.'],

dp1=('Where cultural advice must be local', 'Intercultural guidance commonly warns that '
     'national-level descriptions of custom conceal substantial regional, community and '
     'family variation, and that for acts of condolence or religious observance a named '
     'local adviser should be consulted in every case.',
     'Source: reported practice in intercultural training, 2025–2026.'),

c_a=[('Where is the dress code usually written?', 'on the invitation'),
     ('What are the harder questions about?', 'what to bring, say, and when to arrive and leave'),
     ('What did the system advise?', 'dark clothes, a short visit and flowers'),
     ('What is the custom in that community?', 'no flowers, and a visit on the third day'),
     ('Who could have told him?', 'Rim, in one minute'),
     ('Why did he not ask?', 'the answer he had already looked complete')],

c_b=[('Dress is usually the hardest cultural question.', 'F'),
     ('Asking the host office about dress is normal.', 'T'),
     ('The system’s answer was inaccurate about the country.', 'F'),
     ('Customs can change from region to region.', 'T'),
     ('Rim was asked and gave the wrong advice.', 'F'),
     ('A good general answer can stop you asking.', 'T')],

c_c=[('You ____________ wear dark clothes.', 'should'),
     ('You ____________ not arrive before the family.', 'must'),
     ('We had ____________ ask Rim first.', 'better'),
     ('He ____________ have asked a person.', 'should'),
     ('You ____________ take off your shoes at the door.', 'must'),
     ('We had better ____________ early rather than late.', 'arrive')],

c_d=[('Must is ( weaker / stronger ) than should.', ['weaker', 'stronger'], 1),
     ('Had better suggests ( a warning / a long-term rule ).',
      ['a warning', 'a long-term rule'], 0),
     ('The advice he received was ( right for most of the country / invented ).',
      ['right for most of the country', 'invented'], 0),
     ('The danger of a complete answer is that ( you stop asking / it is false ).',
      ['you stop asking', 'it is false'], 0),
     ('Condolence customs should be checked with ( a named local adviser / a general source ).',
      ['a named local adviser', 'a general source'], 0)],

c_e=('Should, must or had better? Put each sentence in the right column.',
     [('You should wear a dark suit.', 'should'),
      ('You must not photograph the family.', 'must'),
      ('We had better leave before the meal.', 'had better'),
      ('You should arrive a little early.', 'should'),
      ('You must remove your shoes.', 'must'),
      ('We had better ask Rim first.', 'had better')],
     ['should', 'must', 'had better']),

v_fig_title='WHAT TO WEAR AND WHAT TO ASK',
v_fig=[('people', 'national dress'), ('doc', 'an order of dress'), ('key', 'a custom'),
       ('chart', 'a generalisation'), ('clock', 'a fast'), ('speech', 'a courtesy question')],
v_fig_cap='Six words for the part of representation that is not written down.',

vocab=[
 ('formal dress', 'the clothing required at a ceremonial or official occasion'),
 ('national dress', 'the traditional clothing of a country, worn on formal occasions'),
 ('a uniform', 'official clothing showing a service and a rank'),
 ('an accessory', 'a small item worn with clothing, such as a scarf or a pin'),
 ('a head covering', 'a scarf, cap or hat worn for custom, faith or weather'),
 ('mourning dress', 'the clothing worn to mark a death'),
 ('a decoration', 'a medal or order worn on formal occasions'),
 ('an order of dress', 'the stated level of formality for an occasion'),
 ('a custom', 'a way of behaving that a community has long followed'),
 ('etiquette', 'the accepted rules of polite behaviour in a setting'),
 ('a fast', 'a period during which people do not eat, for faith or custom'),
 ('a gesture', 'a movement of the hands or head that carries meaning'),
 ('a norm', 'what people in a place usually do and expect'),
 ('a sensitivity', 'a subject or act about which people in a place feel strongly'),
 ('a misunderstanding', 'a failure to understand something correctly'),
 ('a stereotype', 'a fixed idea about a group that ignores the individuals in it'),
 ('a generalisation', 'a statement about many that may be untrue of any one'),
 ('an exception', 'a case to which the usual rule does not apply'),
 ('a local adviser', 'a person at the post who can answer a question about this place'),
 ('a courtesy question', 'a question asked in advance to avoid giving offence')],

v_a=[('The stated level of formality is an ____________ of dress.', 'order'),
     ('A medal worn on formal occasions is a ____________.', 'decoration'),
     ('A statement about many that may be untrue of one is a ____________.', 'generalisation'),
     ('A fixed idea about a group is a ____________.', 'stereotype'),
     ('A person at the post who can answer is a local ____________.', 'adviser'),
     ('A question asked in advance to avoid offence is a ____________ question.', 'courtesy'),
     ('A period during which people do not eat is a ____________.', 'fast'),
     ('The clothing worn to mark a death is ____________ dress.', 'mourning')],

v_b=[('Etiquette is the accepted rules of polite behaviour', 'in a setting.'),
     ('A gesture is a movement of the hands or head', 'that carries meaning.'),
     ('A sensitivity is a subject about which', 'people in a place feel strongly.'),
     ('An accessory is a small item worn with clothing,', 'such as a scarf or a pin.'),
     ('A norm is what people in a place', 'usually do and expect.')],

g_title='Grammar: should, must and had better for advice',
g_rule=['should = advice: You should wear dark clothes.',
        'must = obligation or a strong rule: You must remove your shoes.',
        'had better = a warning, often with a consequence: We had better ask first.',
        'All three take the bare infinitive: should go, must go, had better go.'],
g_fig=('WRONG',
       ['You should to wear a dark suit.',
        'We had better to ask Rim.',
        'You must not to photograph them.',
        'He should have ask a person.'],
       'RIGHT',
       ['You should wear a dark suit.',
        'We had better ask Rim.',
        'You must not photograph them.',
        'He should have asked a person.'],
       'four pieces of advice with an extra to',
       'the same four, with the bare verb'),
g_fig_cap='No to after should, must or had better. Ever.',

g_a=[('You ____________ (should) wear dark clothes.', 'should'),
     ('You ____________ (must not) arrive before the family.', 'must not'),
     ('We had ____________ ask Rim before we go.', 'better'),
     ('He ____________ (should) have asked a person.', 'should'),
     ('Visitors ____________ (must) remove their shoes at the door.', 'must'),
     ('We had better ____________ (leave) before the meal.', 'leave'),
     ('You ____________ (should not) bring flowers here.', 'should not'),
     ('You ____________ (must) tell the family you are coming.', 'must'),
     ('We ____________ (should) have checked the date.', 'should')],

g_b=[('You ( should wear / should to wear ) a dark suit.', ['should wear', 'should to wear'], 0),
     ('We had ( better ask / better to ask ) Rim.', ['better ask', 'better to ask'], 0),
     ('You ( must not photograph / must not to photograph ) them.',
      ['must not photograph', 'must not to photograph'], 0),
     ('He should ( have asked / have ask ) a person.', ['have asked', 'have ask'], 0),
     ('You ( must / should ) remove your shoes — it is a rule.', ['must', 'should'], 0),
     ('We ( had better / have better ) go now.', ['had better', 'have better'], 0)],

d1=dict(
 title='Ask the invitation, then ask the office',
 fig=(['What should I wear?', 'What does the card say?'],
      ['Lounge suit.', 'Then wear a suit, and stop worrying.']),
 cap='Tarek Sabbagh and Nour, before an evening engagement.',
 lines=[('Nour', 'What should I wear on Thursday?'),
        ('Tarek', 'What does the card say?'),
        ('Nour', 'Lounge suit.'),
        ('Tarek', 'Then wear a suit. Dress is the easy question.'),
        ('Nour', 'And if the card says nothing?'),
        ('Tarek', 'You telephone the host office and ask. Everybody does.'),
        ('Nour', 'It does not look ignorant?'),
        ('Tarek', 'It looks careful. Arriving wrongly dressed looks ignorant.'),
        ('Nour', 'What about national dress?'),
        ('Tarek', 'If the card offers it, you may. If it does not, you had better not.'),
        ('Nour', 'And the questions that are not about clothes?'),
        ('Tarek', 'Those you must ask a person, and you must ask before you need the answer.')],
 a=[('What should Nour wear on Thursday?', 'a suit'),
    ('What should she do if the card says nothing?', 'telephone the host office'),
    ('How does asking look?', 'careful'),
    ('When may she wear national dress?', 'if the card offers it'),
    ('What must she do with non-dress questions?', 'ask a person, before she needs the answer')],
 b=[('What ____________ I wear on Thursday?', 'should'),
    ('Dress is the ____________ question.', 'easy'),
    ('It looks ____________.', 'careful'),
    ('If it does not, you had ____________ not.', 'better')]),

d2=dict(
 title='It was right about the country',
 fig=(['The answer was respectful and clear.', 'And right about most of the country.'],
      ['Not about that family.', 'Families are not countries.']),
 cap='Ziad Mikhail and Rim Haddad, the day after the condolence visit.',
 lines=[('Ziad', 'I asked what was appropriate. The answer was careful and respectful.'),
        ('Rim', 'It usually is.'),
        ('Ziad', 'Dark clothes, a short visit, flowers.'),
        ('Rim', 'True for most of the country.'),
        ('Ziad', 'Not for that town.'),
        ('Rim', 'Not for that community. No flowers, and the visit is on the third day.'),
        ('Ziad', 'Why did I not ask you?'),
        ('Rim', 'Because you had an answer. A complete answer closes a question.'),
        ('Ziad', 'It took me four seconds. You would have taken one minute.'),
        ('Rim', 'And I would have asked you which town, which is the whole thing.'),
        ('Ziad', 'So for condolence, faith and family, I ask a person first.'),
        ('Rim', 'Always. And what do you do in a town where none of us has ever been?')],
 unresolved=True,
 a=[('What advice did Ziad receive?', 'dark clothes, a short visit and flowers'),
    ('Who was it right for?', 'most of the country'),
    ('What is the custom in that community?', 'no flowers, and a visit on the third day'),
    ('Why did he not ask Rim?', 'he already had a complete answer'),
    ('What would Rim have asked him?', 'which town')],
 b=[('A complete answer ____________ a question.', 'closes'),
    ('No flowers, and the visit is on the ____________ day.', 'third'),
    ('I would have asked you which ____________.', 'town'),
    ('For condolence, faith and family, I ask a ____________ first.', 'person')]),

speak=[('Advice with three strengths',
        ['Give your partner six pieces of advice about your own country.',
         'Two with should, two with must, two with had better.',
         'Your partner says which are rules and which are suggestions.']),
       ('What should I wear?',
        ['Describe four occasions in your country and the dress for each.',
         'Say what a visitor should never wear, and why.',
         'Your partner asks who they should telephone to check.']),
       ('A general rule about you',
        ['Say one thing that is generally true of your country.',
         'Then say how it is different in your own family or region.',
         'Your partner says what a visitor should ask instead.'])],

ext_title='A good general answer is accurate about a country and silent about a family',
ext_fig=figs.datatable('ONE CONDOLENCE VISIT',
                       ['Question', 'General answer', 'In that community'],
                       [['what to wear', 'dark clothes', 'the same'],
                        ['what to bring', 'flowers', 'nothing is brought'],
                        ['when to visit', 'the first day', 'the third day'],
                        ['how long to stay', 'a short visit', 'the same'],
                        ['what to say', 'a short formula', 'a different formula'],
                        ['who to ask', 'not addressed', 'any neighbour, in one minute']]),
ext_fig_cap='Three answers matched. Three did not, and two of those were visible to everybody present.',
ext=[
 'Cultural questions divide into two kinds, and officers worry about the wrong one. The '
 'first kind is published: dress codes, forms of address, the hours of an office. These are '
 'written down, and a system answers them quickly and correctly.',
 'The second kind is not published, because the people who need it are born into it. What '
 'is brought to a house of mourning, when a visit is made, what is said at a birth, how a '
 'gift is refused twice and accepted the third time. These vary by region and by family.',
 'A general answer to a question of the second kind is not false. It describes the majority '
 'practice honestly. The trouble is that it arrives looking finished, and a finished answer '
 'stops you asking the person who would have known.',
 'The cost is not embarrassment to you. In matters of death, faith and family, a visitor '
 'who gets it wrong makes a difficult day harder for people who are already having one, and '
 'the memory of it is long.',
 'So keep a short list of questions that are never answered generally: condolence, faith, '
 'birth, marriage, hospitality in a private house. For every one of those, you ask a named '
 'person at the post, and you ask before you need the answer.'],

dp2=('Why a complete answer is risky', 'Training in intercultural practice commonly notes '
     'that the confidence and completeness of an answer reduces the likelihood that a '
     'questioner seeks a second source, which makes fluent general advice more hazardous '
     'than an obviously partial answer.',
     'Source: reported practice in intercultural training, 2025–2026.'),

e_a=[('What are the two kinds of cultural question?', 'the published kind and the unpublished kind'),
     ('Why is the second kind unpublished?', 'the people who need it are born into it'),
     ('Is a general answer false?', 'no, it describes the majority practice'),
     ('What is the trouble with it?', 'it looks finished and stops you asking'),
     ('Which subjects are never answered generally?', 'condolence, faith, birth, marriage and private hospitality')],
e_b=[('Dress codes are usually published.', 'T'),
     ('Mourning customs are the same across a country.', 'F'),
     ('A general answer is usually dishonest.', 'F'),
     ('A complete answer makes people ask more.', 'F'),
     ('Getting it wrong mainly embarrasses the visitor.', 'F'),
     ('Some questions should always go to a person.', 'T')],

w_model='Purpose: so that a visiting colleague knows what to wear and what to ask before '
        'they arrive. Scope: the 3 engagements of 12 to 14 April; private invitations are '
        'not covered. Inputs: the 3 invitation cards and 1 conversation with the consular '
        'assistant. Criteria: 5 lines: dress for each engagement, 1 thing to bring, 1 thing '
        'not to do, the named person to ask, and the questions that must not be answered '
        'from a general source. Done: 5 lines, sent 3 days before arrival. Fallback: where '
        'no local adviser is available, the colleague follows the host office’s own advice '
        'and nothing else.',
w_fig=figs.spec_card('FIVE LINES FOR A VISITING COLLEAGUE',
                     [('Purpose', 'they know what to wear and what to ask'),
                      ('Scope', 'the 3 engagements of 12 to 14 April'),
                      ('Inputs', '3 cards and 1 conversation with Rim'),
                      ('Criteria', 'dress, 1 to bring, 1 not to do, who to ask, what not to look up'),
                      ('Done', '5 lines, 3 days before arrival'),
                      ('Fallback', 'no adviser: follow the host office only')]),
w_fig_cap='The fourth line is a name, because every other line will eventually be wrong.',
w_task='Write five lines of advice for a colleague visiting your post.',
w_steps=['Line 1: the dress for each engagement, taken from the cards.',
         'Line 2: one thing they should bring, and one they should not.',
         'Line 3: one thing they must not do, with the reason in four words.',
         'Line 4: the named person to ask, with a telephone number.',
         'Line 5: the subjects they should never settle from a general source.'],
w_bank=['Thursday: lounge suit. Friday: national dress is offered. Saturday: informal.',
        'You should bring … ; you should not bring … .',
        'You must not … , because … .',
        'Ask … on … about anything you are unsure of.',
        'Do not settle condolence, faith or family questions from a general source.'],
w_check=['Does line 1 cover every engagement?',
         'Does line 3 give a reason as well as a rule?',
         'Is a name and a number given in line 4?',
         'Does line 5 list the subjects, not just the principle?'],

t_title='Cultural questions where a general answer fails',
t_fig=figs.split('TWO KINDS OF QUESTION',
                 'A general answer is fine',
                 ['what lounge suit means here',
                  'office hours and public holidays',
                  'how a minister is addressed',
                  'whether decorations are worn'],
                 'Ask a named person',
                 ['what is brought to a house of mourning',
                  'when a visit is made after a death',
                  'what is said at a birth or a marriage',
                  'how hospitality is refused and accepted']),
t_fig_cap='The left column is published. The right column is inherited, and varies by town.',
t_body=[
 'Use a general source for the published half and you will save real time. Dress codes, '
 'forms of address, office hours, whether decorations are worn: these are written down '
 'somewhere, they are stable, and the answer that comes back will be correct.',
 'For the unpublished half, change the question. Instead of asking what is appropriate, ask '
 'what varies between communities in this country, and what should be checked locally. That '
 'question a general source answers honestly and usefully.',
 'Then take the list of variable things to a named person. Condolence, faith, birth, '
 'marriage and hospitality in a private house belong on that list in every country, and the '
 'person who knows takes about one minute to tell you.'],
t_say=[('Use it for the published: ', 'What does lounge suit mean at an evening event here?'),
       ('Ask what varies: ', 'Which of these customs vary between regions in this country?'),
       ('Then ask a person: ', 'Rim, it is a condolence visit in the north. What should I do?')],
t_bound='A general answer about custom describes the majority practice of a country and '
        'cannot know the community, the town or the family you are about to visit. It will '
        'not tell you that the question has a local answer, because it does not know that it '
        'is missing one.',
t_a=[('What does lounge suit ____________ at an evening event here?', 'mean'),
     ('Which of these customs ____________ between regions?', 'vary'),
     ('It is a ____________ visit in the north.', 'condolence'),
     ('A general answer describes the ____________ practice.', 'majority'),
     ('It cannot know the ____________ you are about to visit.', 'family'),
     ('It does not know that it is ____________ one.', 'missing')],
t_b_rubric='Say whether each question may be settled generally, and who to ask if not.',
t_b=[('What does black tie mean here?', 'generally: it is a published dress code'),
     ('What is brought to a house of mourning?', 'a named local adviser, in every country'),
     ('How is a deputy minister addressed?', 'generally: forms of address are published'),
     ('When is a visit made after a death?', 'a named local adviser; it varies by community')],

case=dict(
 title='The Decision Room · The flowers at the door',
 brief=[
  'A colleague at the ministry dies. The Mission is represented at a condolence visit in a '
  'northern town. Ziad asks a system what is appropriate and receives a careful, respectful '
  'answer: dark clothes, a short visit, flowers.',
  'The family belongs to a community in the north in which nothing is brought to the house '
  'and the visit is made on the third day. Ziad arrives on the first day, carrying flowers, '
  'in front of about thirty people.',
  'The family is gracious. A cousin takes the flowers quietly and nothing is said. Rim, who '
  'grew up forty kilometres from that town, would have told him in one minute, and was in '
  'the office that morning.'],
 exhibit=figs.datatable('SIX QUESTIONS, THREE ANSWERS WRONG',
                        ['Question', 'What he did', 'Local custom', 'Visible?'],
                        [['clothing', 'dark suit', 'correct', 'no'],
                         ['what to bring', 'flowers', 'nothing is brought', 'yes'],
                         ['which day', 'the first', 'the third', 'yes'],
                         ['length of visit', '20 minutes', 'correct', 'no'],
                         ['what to say', 'a general formula', 'a different formula', 'yes'],
                         ['who he asked', 'a general source', 'any local colleague', '—']]),
 exhibit_cap='Three of the six were visible to thirty people on the worst day of a family’s year.',
 exhibit_note='The advice he received was accurate about the country. It was silent about '
              'the fact that the question had a local answer at all.',
 voices=[('Ziad Mikhail', 'commercial attaché',
          'The answer was respectful and complete. That is exactly why I did not ask anybody.'),
         ('Rim Haddad', 'consular assistant',
          'One minute. I was at my desk. He would only have had to say which town.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'We have no list of the questions that must never be settled from a general source. We do now.')],
 steps=[('Find it', 'Which three answers were wrong?'),
        ('Compare it', 'What is the general custom and what is the local one?'),
        ('Infer it', 'Why did a complete answer stop him asking?'),
        ('Weigh it', 'One minute of asking against a difficult day made harder.'),
        ('Decide', 'Which questions are never settled from a general source?')],
 analysis=[('Find it. Which answers were wrong?', 'what to bring, which day and what to say'),
           ('Compare it. What is the local custom?', 'nothing is brought and the visit is on the third day'),
           ('Infer it. Why did he not ask?', 'a complete answer closed the question'),
           ('Weigh it. What would asking have cost?', 'one minute'),
           ('Decide. What belongs on the list?', 'condolence, faith, birth, marriage and private hospitality')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say which subjects must go to a named person.',
                 'Say what the officer asks a general source instead.',
                 'Say who the named advisers are at this post.',
                 'Say what happens when no adviser is available.'],
 bank=['Condolence, faith, birth, marriage and private hospitality go to a named person.',
       'A general source is asked which customs vary by region, not what to do.',
       'The Mission names 2 local advisers and lists them in the registry.',
       'Where no adviser is available, the Mission follows the host office’s advice only.'],
 outcome='Ziad returns on the third day, alone, brings nothing and stays eight minutes, and '
         'the family receives him warmly. The Mission writes down five subjects that are '
         'never settled from a general source. It names Rim and one other colleague as the '
         'advisers. The list goes in the registry, where a new officer will find it in the '
         'first month.',
 outcome_q=[('When did Ziad return?', 'on the third day'),
            ('What did he bring?', 'nothing'),
            ('How many subjects are on the list?', 'five'),
            ('Who are the named advisers?', 'Rim and one other colleague'),
            ('Where is the list kept?', 'in the registry')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Find out what we should wear and do',
 task=['Three colleagues were coming for a week of engagements at an unfamiliar post.',
       'This is the instruction they sent, and what came back the next day.'],
 draft=['Find out what we should wear and do.',
        'Cover the usual cultural things.',
        'Tell us anything we might get wrong.',
        'Keep it brief.',
        'Make sure it is reliable.',
        'Send it before we travel.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says which engagements, which subjects, or who was asked.',
 asked=['What to wear and do', 'The usual cultural things', 'Reliable'],
 back=['4 pages of national custom', 'No engagement named', 'No local person consulted'],
 gap='Nobody said which events, which subjects need a person, or what reliable means here.',
 back_cap='Four pages about a country, and nothing about the three rooms they were going into.',
 back_note='The usual cultural things is a national-level request, and a national-level '
           'request gets a national-level answer, which is what arrived.',
 diagnosis=[('“what we should wear and do”', 'unscoped set'),
            ('“the usual cultural things”', 'unscoped set'),
            ('“anything we might get wrong”', 'unstated criterion'),
            ('“keep it brief”', 'unbounded quantity'),
            ('“make sure it is reliable”', 'unstated criterion'),
            ('“before we travel”', 'unbounded quantity')],
 rewrite='Rewrite it on the six lines so that the answer is about three rooms, not a country.',
 scaffold=['why the advice is needed and for whom',
           'which engagements, with their dates',
           'which sources, and which subjects must come from a person',
           'what the advice must contain for each engagement',
           'how long it is and when it is due',
           'what to do when no local adviser can be reached'],
 bank=['Purpose: so that … colleagues arrive correctly dressed and ask the right questions',
       'Scope: the … engagements of … to …; private invitations excluded',
       'Inputs: the invitation cards, the host offices, and 1 conversation with …',
       'Criteria: per engagement: dress, 1 thing to bring, 1 thing not to do, who to ask',
       'Done: … lines, sent … days before travel',
       'Fallback: where no local adviser is reachable, follow the host office and nothing else'],
 check=['Are the engagements named with dates?',
        'Is a local person named as a source?',
        'Does it say which subjects may not be settled generally?',
        'Is there a deadline relative to travel?'],
 model=['so that 3 colleagues arrive correctly dressed and know what to ask',
        'the 3 engagements of 12 to 14 April; private invitations are excluded',
        'the invitation cards, the host offices, and 1 conversation with the consular assistant',
        'per engagement: dress, 1 thing to bring, 1 thing not to do, and who to ask',
        '5 lines, sent 3 days before they travel',
        'where no local adviser is reachable, follow the host office’s advice and nothing else'],
 cost='4 pages about a country answered none of the 3 questions that actually arose. '
      '5 lines took 1 conversation of 1 minute and 20 minutes of writing.'),

feet=dict(
 title='On Your Feet · A question about your own country',
 setting=[
  'At a reception a guest asks you, pleasantly and in front of three other people, about a '
  'custom of your own country that is frequently described wrongly abroad. He is not '
  'hostile. He has read something and wants to know whether it is true.',
  'You are the only person in the room who can answer. You must not lecture, you must not '
  'be defensive, and you must not pretend that your country is simpler than it is. You have '
  'about ninety seconds.'],
 ladder=[('Is it true?', 'answer the question honestly'),
         ('Everywhere?', 'show the variation without evading'),
         ('Why does it exist?', 'the turn that invites a defence')],
 cap='Three turns in which your country is being described by somebody else.',
 turns=[('Turn 1 · Guest', 'Is it true that in your country people do this at a wedding?'),
        ('Turn 2 · Guest', 'And is that the same everywhere, in every family?'),
        ('Turn 3 · Guest', 'Interesting. And why do you think your country does it that way?')],
 holds=['In many places, yes — and not in all of them.',
        'It is true of where I grew up. It is not true of the north.',
        'A country is not one custom, any more than yours is.',
        'I can tell you what my own family does, which is not the whole answer.',
        'I would not want to speak for everybody, because nobody can.',
        'If it interests you, I will find somebody who knows it far better than I do.'],
 redline='You must not present one region as the whole country, you must not become '
         'defensive about a question asked in good faith, and you must not explain your '
         'country by comparing it unfavourably with his. Do not invent a history you are '
         'not sure of in order to make the custom sound reasonable.',
 score=['Answered the factual question in the first sentence.',
        'Showed the variation instead of defending a single version.',
        'Spoke for a family or a region, not for a nation.',
        'Stayed friendly and unhurried under a question about identity.',
        'Offered a better source rather than inventing an explanation.'],
 a=[('What do you do in the first sentence?', 'answer the factual question honestly'),
    ('How do you handle the second question?', 'show the variation between regions'),
    ('Who may you speak for?', 'your own family or region'),
    ('What must you not do with his country?', 'compare it unfavourably'),
    ('What must you not invent?', 'a history you are not sure of'),
    ('What can you offer instead?', 'a better source')]),

rev_fig=figs.split('A CULTURAL QUESTION',
                   'Settle it generally',
                   ['What does black tie mean here?',
                    'Are decorations worn?',
                    'How is a deputy minister addressed?',
                    'When do offices close?'],
                   'Ask a named person',
                   ['What is brought to a house of mourning?',
                    'Which day is the visit made?',
                    'What is said at a birth?',
                    'How is hospitality refused politely?']),
rev_fig_cap='The right-hand column is inherited knowledge, and it changes from town to town.',
rev=dict(
 read=[('What is the easiest cultural question?', ['dress', 'condolence', 'faith', 'marriage'], 0),
       ('What was wrong with the advice?',
        ['it described the majority custom', 'it was invented', 'it was rude', 'it was late'], 0),
       ('How long would Rim have taken?', ['one minute', 'one hour', 'one day', 'one week'], 0),
       ('How many subjects are on the Mission’s list?', ['five', 'two', 'ten', 'none'], 0)],
 listen_text='Use a general source for the published half: dress codes, forms of address, '
             'office hours. For the rest, ask which customs vary between regions, and then '
             'take that list to a named person at the post.',
 listen=[('Use a general source for the ____________ half.', 'published'),
         ('Ask which customs ____________ between regions.', 'vary'),
         ('Take that list to a ____________ person.', 'named'),
         ('Dress codes, forms of ____________, office hours.', 'address')],
 speak=['Give six pieces of advice to a visitor to your country, using should, must and had better.',
        'Your partner asks for one exception to each piece of advice.'],
 write='Write five lines of advice for a colleague visiting your post.',
 vocab=[('The stated level of formality is an ____________ of dress.', 'order'),
        ('A fixed idea about a group is a ____________.', 'stereotype'),
        ('A person at the post who can answer is a local ____________.', 'adviser'),
        ('A question asked in advance to avoid offence is a ____________ question.', 'courtesy')],
 gram=[('You ____________ wear dark clothes.', 'should'),
       ('You ____________ not photograph the family.', 'must'),
       ('We had ____________ ask Rim first.', 'better'),
       ('He should ____________ asked a person.', 'have')]),

found=['Write the five subjects at your post that must never be settled from a general source.',
       'Name two local advisers and put their numbers in the registry.',
       'Ask a colleague how a custom of your own country varies by region.',
       'Before your next unfamiliar engagement, ask which town or community it is in.'],
end_line='A general answer is true about a country and silent about a family. Ask the family’s neighbour.',
end_next='Next: The Day After: Who Did You Meet?')
