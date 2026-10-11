"""The A1 cast.

New people. None of A2's cast survives, and the course is better for it:
Maya, Tomas, Amina and Dani were four names attached to one drawing.

The design rule for this cast is recognition at one inch. Each person owns a
hair silhouette, a garment colour that nobody else wears, and a prop. No two
share two of the three. The table in VISUAL-SYSTEM.md is the register, and
tools/check_visual.py fails the book if any two characters collide on it.

They live on one street, because an A1 learner needs a world small enough to
hold in their head: six people, one street, one bus route.
"""
from people import Person

HILL_ROAD = {
    'nadia': Person(
        id='nadia', name='Nadia', skin='skin4', hair='curly', hair_col='hair_black',
        top='red', bottom='slate', garment='apron', accessory='earrings',
        build=1.0, height=0.98, prop='tray'),
    'sam': Person(
        id='sam', name='Sam', skin='skin5', hair='buzz', hair_col='hair_black',
        top='navy', bottom='navy', garment='uniform', accessory='',
        build=1.12, height=1.07, prop='timetable'),
    'lili': Person(
        id='lili', name='Lili', skin='skin2', hair='bob', hair_col='hair_black',
        top='yellow', bottom='blue', garment='tee', accessory='',
        build=0.93, height=0.95, prop='backpack'),
    'marek': Person(
        id='marek', name='Marek', skin='skin1', hair='short', hair_col='hair_grey',
        top='lime', bottom='brown', garment='overall', accessory='beard',
        build=1.14, height=1.03, prop='toolbox'),
    'fatima': Person(
        id='fatima', name='Fatima', skin='skin3', hair='hijab', hair_col='hair_dark',
        top='teal', bottom='teal', garment='tunic', accessory='lanyard',
        build=1.0, height=1.0, prop='badge'),
    'ben': Person(
        id='ben', name='Ben', skin='skin1', hair='wavy', hair_col='hair_ginger',
        top='orange', bottom='slate', garment='shirt', accessory='glasses',
        build=0.97, height=1.01, prop='phone'),
    # two more who appear but do not carry the grammar
    'rosa': Person(
        id='rosa', name='Rosa', skin='skin2', hair='bun', hair_col='hair_white',
        top='purple', bottom='plum', garment='cardigan', accessory='glasses',
        build=1.04, height=0.92, prop='basket'),
    'omar': Person(
        id='omar', name='Omar', skin='skin6', hair='afro', hair_col='hair_black',
        top='sky', bottom='indigo', garment='tee', accessory='',
        build=0.90, height=0.86, prop='ball'),
}

# the three identity channels, in strength order; checked for collisions
SIGNATURE = {k: (v.hair, v.top, v.prop) for k, v in HILL_ROAD.items()}


def who(pid: str) -> Person:
    return HILL_ROAD[pid]
