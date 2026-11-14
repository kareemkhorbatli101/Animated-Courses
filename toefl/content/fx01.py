# -*- coding: utf-8 -*-
"""Foundation 1, Unit 1 — the two academic cycles.

Field: People and Their Ways (anthropology). Prepares Volume 1 Unit 9.
Written in be and the present simple, which is all Unit 1 has.
"""

SP_EXTRA = [
    dict(sub='Names around the world',
         focus='saying a foreign name carefully',
         skill=('A name is worth slowing down for', [
             'Say a name you do not know slowly, and ask if you have it right.',
             'Sorry, how do you say that? is a polite question, not a rude one.',
             'Most people are pleased that you asked. Nobody is pleased that you guessed.',
             'In the Speaking test, a clear slow answer scores above a fast unclear one.']),
         repeat=['Names are customs.', 'My family name is second.',
                 'Some people have three names.',
                 'In my country the family name is second.',
                 'A name is often the name of a grandfather.',
                 'In some cultures a woman keeps her name.',
                 'Every first son in my family has one name.'],
         theme='names and where they come from',
         frames=['My name is ... . It means ... .',
                 'In my country people usually ... .',
                 'I think it is ... , because ... .',
                 'A good custom is ... , because ... .'],
         qs=['First, what is your name, and does it have a meaning?',
             'How do people choose a name for a child in your country?',
             'Some families give a child the name of an older member of the family. Is that a good custom, '
             'do you think?',
             'Finally, is a family name important? Say why or why not.'],
         model=[(1, 'My name is Ana. It is a very old name and it is short in every '
                    'language, and that helps.'),
                (2, 'In my country the parents usually choose, but a grandmother often '
                    'has an opinion about it.'),
                (3, 'I think it is a good custom, because the name is a line back through '
                    'the family. But a child is not a copy of a an older member of the family.'),
                (4, 'A family name is important, because it tells people where you are '
                    'from. In my country it tells them the part of the country as well.')],
         selfcheck=['I said names slowly and clearly',
                    'I used a field word from this unit',
                    'I gave a reason after my opinion']),
    dict(sub='Who lives in one house',
         focus='the sounds in culture, custom and community',
         skill=('Three long words, one strong part each', [
             'CULture, CUStom, comMUnity, popuLAtion.',
             'The -tion ending always takes the strong part before it.',
             'Say the word three times before you use it in a sentence.',
             'A field word said well is worth two said badly.']),
         repeat=['A household is a group.', 'Every culture has its customs.',
                 'My community is small.',
                 'Three generations live in one house here.',
                 'A relative is a member of your family.',
                 'The population of my town is small.',
                 'A marriage joins two families, not two people.'],
         theme='homes and the people in them',
         frames=['In my country a household is usually ... .',
                 'My own household is ... .',
                 'I think ... , because ... .',
                 'This is different now, because ... .'],
         qs=['First, how many people are there in a normal household in your country?',
             'Tell me about your own household. Who is in it?',
             'In some places three generations live together and in others two. Which is '
             'better for a family, do you think?',
             'Finally, is this different now in your country? Say what you think.'],
         model=[(1, 'In my country a normal household is four or five people, and often a '
                    'grandmother as well.'),
                (2, 'My own household is my parents, my brother and me. My grandmother is '
                    'in the next street.'),
                (3, 'I think three generations is better for small children, because '
                    'somebody is always at home. It is harder for the middle generation.'),
                (4, 'This is different now, because young people move to the city for work and '
                    'a city flat is small.')],
         selfcheck=['I put the strong part in the right place in long words',
                    'I used three or more field words',
                    'I answered all four questions']),
]

EXTRA = dict(
    fieldname='People and Their Ways',
    fieldwhy='how people live, and why the same thing is done differently in different '
             'places',
    fieldwords=[
        ('custom', 'a thing people in a place always do'),
        ('tradition', 'a custom that is very old'),
        ('culture', 'the customs and ideas of a group of people'),
        ('nation', 'all the people of one country'),
        ('generation', 'all the people born at about the same time'),
        ('population', 'the number of people in a place'),
        ('member', 'one person in a group'),
        ('community', 'the people who live in one place'),
        ('relative', 'a member of your family: an aunt, a cousin'),
        ('ancestor', 'a member of your family from long ago'),
        ('marriage', 'two people become husband and wife'),
        ('household', 'the people who live in one house')],

    r4=dict(
        sub='Names around the world',
        title='One Person, Three Names',
        words=100,
        paras=[
            'In English a person has a first name and a family name. The first name '
            'comes first. This is not a rule of the world. It is the custom of one part '
            'of it.',
            'In China and in Hungary the family name comes first. In Iceland the second '
            'name is not a family name. It is the name of a mother or a father, and a '
            'word for child.',
            'In Spain a person has two family names. One comes from the mother and one '
            'from the father. The custom is different in every nation. In every nation '
            'it feels normal.'],
        skill=('Three places, one point', [
            'A short academic text often gives three examples of one idea.',
            'The idea is usually in the first or the last sentence.',
            'The examples are there to prove the idea, not to be learned.',
            'A question about all countries wants the idea, not an example.']),
        guided=[
            ('In English, which name comes first?',
             ('the family name', 'the first name', 'the father’s name',
              'the mother’s name'), 1,
             'In English a person has a first name and a family name. The first name '
             'comes first.'),
            ('In China the family name is',
             ('first', 'second', 'not used', 'the same as the first name'), 0,
             'In China and in Hungary the family name comes first.'),
            ('In Iceland the second name is',
             ('a family name', 'the name of a mother or father and a word for child',
              'the name of a town', 'not a name'), 1,
             'It is the name of the father or the mother and a word for child.')],
        exam=[
            ('In Spain a person has',
             ('one family name', 'two family names', 'no family name', 'three first names'), 1,
             'In Spain and in much of Latin America a person has two family names.'),
            ('The two Spanish family names come from',
             ('the two oldest people', 'the mother and the father', 'the father only', 'the town'), 1,
             'Two family names, one from the mother and one from the father.'),
            ('The order of names in English is',
             ('a rule of the world', 'a custom of one part of the world',
              'the oldest custom', 'a new idea'), 1,
             'This is not a rule of the world. It is a custom of one part of it.'),
            ('What is the big idea of the passage?',
             ('English names are correct.', 'The custom is different everywhere and feels '
              'normal everywhere.', 'Iceland is not common.',
              'Two family names are better.'), 1,
             'The last sentence says it in the fewest words.')]),

    r5=dict(
        sub='Who lives in one house',
        title='How Many People Are a Family?',
        words=100,
        paras=[
            'A household is the people in one house. In some nations a household is two '
            'parents and their children. In others it is three generations in one '
            'building, with a grandmother at home all day.',
            'Both work. The small household is easy to move for a job. The large one is '
            'cheap. A member of the family is always at home with the children.',
            'In most nations the household of today is small. The household of a hundred '
            'years ago is not. The reason is work in the cities. It is also a city flat '
            'with two rooms in it.'],
        skill=('Both sides of one fact', [
            'When a text gives two ways of doing something, it usually says both work.',
            'Look for the good thing about each one. There is normally one each.',
            'The last paragraph often says what is changing and why.',
            'A question with why wants the reason, not the change.']),
        guided=[
            ('What is a household?',
             ('a family name', 'the people in one house', 'a town', 'a generation'), 1,
             'A household is the people in one house.'),
            ('In some nations a household is',
             ('one person', 'two parents and their children', 'only older people in the family',
              'a whole village'), 1,
             'In some nations a household is two parents and their children.'),
            ('What is good about a small household?',
             ('it is cheap', 'it is easy to move for a job', 'somebody is always at home',
              'it is an old custom'), 1,
             'The small household is easy to move for a job.')],
        exam=[
            ('What is good about a large household?',
             ('it is easy to move', 'it is cheap and somebody is at home',
              'it is a new custom', 'it is small'), 1,
             'The large one is cheap. A member of the family is always at home.'),
            ('The household of today is',
             ('large', 'small', 'the same as before', 'only in cities'), 1,
             'The household of today is small. The household of a hundred years ago is '
             'not small at all.'),
            ('Why is that?',
             ('people have no children', 'work in the cities and small flats',
              'grandmothers work', 'houses are expensive to build'), 1,
             'The reason is work in the cities, and a city flat with two rooms in it.'),
            ('What does the writer think about the two kinds of household?',
             ('the small one is better', 'the large one is better', 'both work',
              'neither works now'), 2,
             'Both work, at the start of the second paragraph.')]),

    l4=dict(
        sub='Names around the world',
        caption='A short talk about names',
        board=['NAMES', 'first name + family name',
               'not a rule, a custom', 'ask, do not guess'],
        skill=('The talk says the idea twice', [
            'A short academic talk gives its idea, then examples, then the idea again.',
            'If you miss it at the start, wait. It comes back at the end.',
            'Examples are usually marked by in, for example or like.',
            'Write the idea in your own words as soon as you hear it.']),
        warm=[
            ('Is the family name always second?',
             ('No, it is not.', 'In Iceland.', 'Two names.', 'Yes, I am.'), 0,
             'Is it ...? takes Yes, it is or No, it is not.'),
            ('How do you say your name?',
             ('It is A-N-A.', 'In China.', 'Yes, I do.', 'Three generations.'), 0,
             'The question asks for the name itself.')],
        script=[('Woman', 'A name is the first word you give a person, and it is also a '
                          'piece of a culture. In English the first name is first. In '
                          'China it is not. In Iceland the second name is the name of a '
                          'mother or a father. None of these is more correct. They are customs, and '
                          'a custom is normal to its own nation. So in this class, '
                          'ask people how they say their own name.')],
        items=[
            ('What is a name, for this speaker?',
             ('only a word', 'a piece of a culture', 'a family rule', 'a difficult thing'), 1,
             'It is also a piece of a culture.'),
            ('Which country does the speaker say is different?',
             ('England', 'China', 'Spain', 'France'), 1,
             'In English the first name is first. In China it is not.'),
            ('In Iceland the second name is',
             ('a family name', 'the name of a mother or a father', 'a town', 'not used'), 1,
             'In Iceland the second name is the name of a mother or a father.'),
            ('What does the speaker ask the class to do?',
             ('learn the names', 'ask people how they say their own name',
               'write the names down', 'use first names only'), 1,
             'So in this class, ask people how they say their own name.')]),

    l5=dict(
        sub='Who lives in one house',
        caption='A short talk about households',
        board=['HOUSEHOLD', 'two parents + children',
               'or three generations', 'why the difference'],
        skill=('Numbers carry the argument', [
            'In a talk about nation the numbers are the evidence.',
            'Write every number down, even if you do not yet know why.',
            'Here and there mark a difference, and the difference is the point.',
            'The reason for a difference comes after because.']),
        warm=[
            ('Is your household small?',
             ('Yes, it is.', 'In the city.', 'Four people.', 'Yes, I do.'), 0,
             'Is it ...? takes Yes, it is.'),
            ('How many people are in your household?',
             ('Five.', 'In a flat.', 'Yes, there are.', 'My grandmother.'), 0,
             'How many asks for a number.')],
        script=[('Man', 'In this country a household today is about two people. In some '
                        'other nations it is six or seven. That is a very large '
                        'difference, and the reason is not one thing. In a city people '
                        'move for work, city flats are small, and families have fewer '
                        'children. In many other nations the household is three '
                        'generations, and in those places a grandmother is at home with '
                        'the children all day.')],
        items=[
            ('How many people are in a household in this country?',
             ('about two', 'about three', 'about five', 'about ten'), 0,
             'In this country a household today is about two people.'),
            ('How many are there in some other nations?',
             ('about two', 'about four', 'six or seven', 'about ten'), 2,
             'In some other nations it is six or seven.'),
            ('How many reasons does the speaker give?',
             ('one', 'two', 'three', 'four'), 2,
             'Cities for work, small flats, and fewer children.'),
            ('In many other nations the household is',
             ('one person', 'two people', 'three generations', 'getting smaller'), 2,
             'In many other nations the household is still three generations.')]),

    w4=dict(
        sub='Names around the world',
        skill=('The same question order, a new subject', [
            'Nothing changes because the sentence is about a nation.',
            'The question word first, then is or are, then the thing.',
            'A long subject is still one thing: the family name in China is ...',
            'Read the sentence back. If it sounds like a question, it is one.']),
        guided=[
            ('The family name comes first in China.',
             ['which', 'name', 'is', 'first'], 'Which name is first?'),
            ('A household is the people in one house.',
             ['what', 'is', 'a', 'household'], 'What is a household?')],
        exam=[
            ('There are two family names in Spain.',
             ['how many', 'family names', 'are', 'there'],
             'How many family names are there?'),
            ('A custom is normal to its own nation.',
             ['is', 'this', 'custom', 'normal', 'here'],
             'Is this custom normal here?'),
            ('A household today is small.',
             ['is', 'your', 'household', 'small'], 'Is your household small?'),
            ('The population of the town is forty thousand.',
             ['what', 'is', 'the population', 'exactly'],
             'What is the population exactly?')]),

    w5=dict(
        sub='Who lives in one house',
        prof='Dr Patel',
        target=40,
        question='In some nations three generations live in one household. In others a '
                 'household is two parents and their children. Which is better for a '
                 'family? Give one reason.',
        posts=[('Mei', 'w', 'Three generations. My grandmother is at home with my little '
                            'brother every day, and my parents are both at work. Nobody '
                            'pays for that.'),
               ('Yusuf', 'm', 'A small household. My family is in a new city every few years, '
                              'because of my father’s work. With ten people in a household that is '
                              'not possible at all.')],
        skill=('A subject question is still about you', [
            'A question about nation still wants your own example.',
            'Say which one you agree with, then why, then your own case.',
            'Use the field words. That is what they are for.',
            'Forty words is about four short sentences.']),
        starters=['I agree with Mei, because ...',
                  'In my own nation ...',
                  'A large household is ...',
                  'The custom is changing, because ...'],
        model=['I agree with Mei. A large household is better for small children, because '
               'a member of the family is always at home.',
               'In my own nation this is the normal custom.',
               'But Yusuf is right about work. A small household moves and a large one '
               'cannot.'],
        model_words=46,
        frame=['# Who you agree with',
               'I agree with ______________ . I think ______________ .', '',
               '# Your reason — use because and a field word',
               'This is better because ______________ .', '',
               '# Your own nation',
               'In my own nation ______________ .']),
)
