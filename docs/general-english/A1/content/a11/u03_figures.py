"""EFDL A1.1 Unit 3 -- Who's This? Family, possessive 's, plurals, 20-100."""
from _common import make, runner, P, C

UNIT, BOOK = 3, 'a11'
FIGURES, fig = make(UNIT)

TENS = [('20', 'twenty', 2, 'red'), ('30', 'thirty', 3, 'orange'),
        ('40', 'forty', 4, 'amber'), ('50', 'fifty', 5, 'lime'),
        ('60', 'sixty', 6, 'green'), ('70', 'seventy', 7, 'teal'),
        ('80', 'eighty', 8, 'sky'), ('90', 'ninety', 9, 'blue'),
        ('100', 'a hundred', 10, 'purple')]

fig(1, 'W', 'data', "Marek's family",
    lambda: P.family_tree([[('rosa', 'Rosa'), ('marek', 'Marek')],
                           [('nadia', 'Nadia'), ('omar', 'Omar')]]))
fig(2, 'W', 'lexis', 'Twenty to a hundred',
    lambda: P.numbers(TENS))

fig(3, '1', 'lexis', 'Four people in a family',
    lambda: P.people_row([('rosa', 'the grandmother', 'stand', None),
                          ('marek', 'the father', 'stand', None),
                          ('nadia', 'the mother', 'offer', None),
                          ('omar', 'the son', 'stand', 'ball')]))
fig(4, '1', 'contrast', 'One and two',
    lambda: P.sort_two(('one', 'blue'), ('two', 'orange'),
                       [('book', 'purple', 'a book'), ('key', None, 'two keys'),
                        ('cup', None, 'a cup'), ('apple', None, 'two apples'),
                        ('chair', 'green', 'a chair'), ('egg', None, 'two eggs')]))
fig(5, '1', 'data', 'Six things to count',
    lambda: P.object_cards([(1, 'apple', None), (2, 'key', None), (3, 'egg', None),
                            (4, 'book', 'blue'), (5, 'cup', None), (6, 'coin', None)],
                           cols=6, h=320))
fig(6, '1', 'contrast', "The 's of the owner",
    lambda: P.blocks([[('Omar', 'purple'), ("'s", 'red'), ('ball', None)],
                      [('Nadia', 'purple'), ("'s", 'red'), ('cafe', None)],
                      [('my sister', 'purple'), ("'s", 'red'), ('bag', None)]],
                     legend=[('the owner', 'purple'), ('belongs to', 'red')]))

fig(7, '2', 'contrast', 'our and their',
    lambda: P.blocks([[('My', 'teal'), ('mother is Nadia.', None)],
                      [('Our', 'teal'), ('grandmother is Rosa.', None)],
                      [('Their', 'teal'), ('son is Omar.', None)],
                      [('Her', 'teal'), ('father is Marek.', None)]],
                     legend=[('whose?', 'teal')]))
fig(8, '2', 'contrast', 'One book, two books',
    lambda: P.contraction([('book', 'books', 'x'), ('key', 'keys', 'x'),
                           ('watch', 'watches', 'x')]))
fig(9, '2', 'contrast', 'Who and whose',
    lambda: P.qa_pairs([("Who's this?", "It's my brother."),
                        ('Whose bag is this?', "It's Lili's."),
                        ('How old is he?', "He's thirty.")]))

fig(10, '3', 'data', 'Four people talking',
    lambda: P.people_row([('nadia', '1', 'offer', 'tray'), ('marek', '2', 'hold',
                                                            'toolbox'),
                          ('rosa', '3', 'carry', 'basket'), ('ben', '4', 'hold',
                                                             'phone')],
                         label_size=34))
fig(11, '3', 'document', 'A family list',
    lambda: P.register('HILL ROAD · FLAT 12',
                       (['Name', 'In the family', 'Age'], [0.38, 0.38, 0.24]),
                       [('Marek', 'the father', '45'), ('Nadia', 'the mother', '38'),
                        ('Omar', 'the son', '9'), ('Rosa', 'the grandmother', '71')]))
fig(12, '3', 'lexis', 'Ages on three cards',
    lambda: P.badges([('Omar', 'Age 9', 'HILL ROAD SCHOOL', 'blue'),
                      ('Lili', 'Age 19', 'HILL ROAD SCHOOL', 'amber'),
                      ('Rosa', 'Age 71', 'HILL ROAD CLINIC', 'teal')]))

fig(13, '4', 'data', 'Omar meets Lili',
    lambda: P.two_talk('door', 'marek', 'lili', "This is my son. He's Omar.",
                       "Hello, Omar! How old are you?", pose_a='point',
                       pose_b='wave', third='omar'))
fig(14, '4', 'contrast', 'Ask about a family',
    lambda: P.qa_pairs([('Have you got a sister?', 'Yes, one sister.'),
                        ("What's her name?", "She's Lili."),
                        ('How old is she?', "She's nineteen.")]))

fig(15, '5', 'document', 'A note about a photo',
    lambda: P.notice('A PHOTO FROM FLAT 12', [
        ('Marek', 'the father'), ('Nadia', 'the mother'),
        ('Omar', 'their son'), ('Rosa', "Marek's mother"),
        'Omar is nine. He is in Class 1A.']))
fig(16, '5', 'document', 'Messages about a birthday',
    lambda: P.phone('Nadia', [('them', "It's Omar's birthday!"), ('me', 'How old is he?'),
                              ('them', "He's nine today."), ('me', 'Happy birthday, Omar!')]))

fig(17, '6', 'document', 'A card for a family',
    lambda: P.form('HILL ROAD SCHOOL · MY FAMILY',
                   [('My name', None), ("My mother's name", None),
                    ("My father's name", None), ('My age', None)]))
fig(18, '6', 'data', 'Four lines about your family',
    lambda: P.writing_frame('My family', ["My mother's name is ", "My father's name is ",
                                          'I have ', "I'm "]))

fig(19, '7', 'document', 'A list of birthdays',
    lambda: P.register('CLASS 1A · BIRTHDAYS',
                       (['Name', 'Day', 'Age'], [0.40, 0.36, 0.24]),
                       [('Lili Chen', 'Monday', '19'), ('Omar Haddad', 'Friday', '9'),
                        ('Ana Silva', 'Sunday', '24'), ('Jan Kowalski', 'Tuesday', '31')]))
fig(20, '7', 'document', 'Two cards with ages',
    lambda: P.badges([('Ana Silva', 'Age 24', 'CLASS 1A', 'green'),
                      ('Jan Kowalski', 'Age 31', 'CLASS 1A', 'purple')]))

fig(21, '8', 'lexis', 'Six people and things',
    lambda: P.object_cards([(1, 'basket', None), (2, 'ball', None), (3, 'toolbox', None),
                            (4, 'tray', None), (5, 'phone', None), (6, 'coin', None)],
                           cols=6, h=320))
fig(22, '8', 'data', 'What I can do',
    lambda: P.can_do(['I can name the people in a family.',
                      "I can use 's for the owner.",
                      'I can write one book and two books.',
                      'I can count from twenty to a hundred.']))

if __name__ == '__main__':
    runner(UNIT, FIGURES)
