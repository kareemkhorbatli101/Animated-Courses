"""Unit 9 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        9, 'Finding Your Way',
        'Prepositions of place, time and movement',
        ['I can say where places are, using prepositions of place.',
         'I can give simple directions from one place to another.',
         'I can write directions to my home in 50–70 words.'],
        ['sign', 'bridge', 'shop', 'bus', 'home'],
        alt='The opening page of Unit 9, Finding Your Way: the grammar point is '
            'prepositions of place, time and movement, and three things the learner '
            'will be able to do by the end of the unit.'),

 4: lambda: F.scene(
        [('the junction', 'sign', 'four roads, no sign'),
         ('number 14', 'home', 'halfway along'),
         ('the shop', 'shop', 'on the ground floor'),
         ('the square', 'tree', 'a bench and two trees'),
         ('the health centre', 'hospital', 'behind the square'),
         ('the bridge', 'bridge', 'at the bottom')],
        height=560,
        alt='Alder Street from the junction at the top to the bridge at the bottom: '
            'the junction with four roads and no sign, number 14 halfway along, the '
            'shop on its ground floor, the square with a bench and two trees, the '
            'health centre behind the square, and the bridge at the bottom.'),

 7: lambda: F.category_set(
        [('A junction', 'sign'), ('A square', 'tree'), ('A roundabout', 'bus'),
         ('A lane', 'shop'), ('A bridge', 'bridge'), ('A block', 'school')],
        height=600,
        alt='Six kinds of place, each on its own card: a junction, a square, a '
            'roundabout, a lane, a bridge and a block.'),

 8: lambda: F.label_me(
        [('Between', 0.27, 0.32), ('Opposite', 0.60, 0.32),
         ('Next to', 0.64, 0.48), ('Behind', 0.80, 0.69),
         ('Below', 0.82, 0.90)],
        height=620, draw=F.street_plan,
        alt='A plan of one street seen from above: the road across the middle, '
            'three buildings in a row above it, two below it, a square with a bench, '
            'a low building behind the square, and on the right one building cut '
            'open to show a flat over a shop. Five numbered lines run to the right '
            'for the learner to write each word.'),

 12: lambda: F.grammar_contrast(
        ('at · on · in', 'a point, a line, a space',
         'at the junction, on Alder Street, in the square', [0.50]),
        ('along · towards · past', 'how you move',
         'Walk along the lane, towards the bridge.', [0.14, 0.86]),
        height=640,
        alt='The unit’s grammar as two columns. On the left at, on and in, for a '
            'point, a line and a space, with one mark for the one place they fix. On '
            'the right along, towards and past, for movement, with a mark at each '
            'end of the line somebody walks.'),

 13: lambda: F.timeline(
        [('the stop', 'get off by the bridge'), ('back', 'towards the junction'),
         ('second left', 'a lane with no sign'), ('the corner', 'a green shop'),
         ('above it', 'number 14')],
        height=460,
        alt='One walk as five steps on a line: get off at the stop by the bridge, '
            'walk back towards the junction, take the second road on the left into a '
            'lane with no sign, go on to the green shop on the corner, and number 14 '
            'is above it.'),

 16: lambda: F.speakers(
        [('Track 9.2', 'Yuki and Amina', 'shop', 'asking the way next door'),
         ('Track 9.3', 'Dani and a driver', 'bus', 'a driver who cannot find the door'),
         ('Track 9.4', 'Amina', 'person', 'five people, five ways')],
        height=560,
        alt='The three listenings in this unit: Yuki asks Amina the way to the '
            'health centre, Dani talks a driver down the street by telephone, and '
            'Amina describes five people and five ways of finding the way.'),

 21: lambda: F.cue_cards(
        ('Card A — asking', ['say excuse me', 'name the place',
                             'ask how far', 'repeat the last step back'], 'person'),
        ('Card B — telling', ['ask where they came from', 'give two steps, not six',
                              'name one landmark', 'say how long it takes'], 'sign'),
        height=560,
        alt='The two role-play cards side by side. Card A, asking: say excuse me, '
            'name the place, ask how far, repeat the last step back. Card B, '
            'telling: ask where they came from, give two steps not six, name one '
            'landmark, say how long it takes.'),

 23: lambda: F.process_strip(
        [('the same way', 'home'), ('one draws a line', 'sign'),
         ('one draws the area', 'book'), ('the road is closed', 'bus'),
         ('only one finds a new way', 'sun')],
        height=460,
        alt='Two ways of knowing one walk, in five stages with an arrow to the next: '
            'both people walk the same way home, one draws it as a line of turns, '
            'the other draws the whole area, then the road is closed, and only the '
            'second one finds a new way.'),

 25: lambda: F.world_strip(
        [('Tokyo', 'home', 'no street names; the area, then the block, then the building'),
         ('New York', 'school', 'two numbers fix a place exactly'),
         ('Venice', 'bridge', 'yellow signs, and every one points to the Rialto')],
        height=460,
        alt='Three cities and three ways of saying where you are: Tokyo, where the '
            'streets have no names and an address gives the area then the block then '
            'the building; New York, where two numbers fix a place exactly; and '
            'Venice, where small yellow signs all point to the Rialto.'),

 26: lambda: F.writing_frame(
        [('Where to get off', 'Get off at the stop by the bridge.'),
         ('Which way', 'Walk back towards the junction.'),
         ('One landmark', 'Look for the green shop on the corner.'),
         ('What too far looks like', 'If you reach the square, turn round.')],
        height=520,
        alt='The shape of the directions the learner is about to write, in four '
            'steps: where to get off, which way to walk, one landmark to look for, '
            'and what too far looks like.'),

 30: lambda: F.function_map(
        [('Excuse me, am I anywhere near the square?', 'asking without a map'),
         ('It is the third on your left, after the lights.', 'giving it in one line'),
         ('I am not from here either.', 'saying you cannot help'),
         ('Do you want me to walk you to the corner?', 'offering more than was asked')],
        height=580,
        alt='Four things people say when they ask or give the way, each with an '
            'arrow to what it does: asking without a map, giving it in one line, '
            'saying you cannot help, and offering more than was asked.'),

 35: lambda: F.before_after(
        ('A sign with a name', ['a place name', 'you need the map', 'no use to a stranger'], 'sign'),
        ('A sign with a number', ['a number of two figures', 'the next numbers in each direction',
                                  'anybody able to count'], 'sign_number'),
        height=520,
        alt='Two kinds of sign. One carries a place name, which only helps somebody '
            'who already knows the map. The other carries a number of two figures '
            'and the next numbers in each direction, which helps anybody able to '
            'count.'),

 40: lambda: F.progress_strip(
        [('I can say where places are, using prepositions of place', False),
         ('I can give simple directions from one place to another', False),
         ('I can understand somebody telling me the way', False),
         ('I can write directions to my home in 50–70 words', False),
         ('I can ask the way when I have no map', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
