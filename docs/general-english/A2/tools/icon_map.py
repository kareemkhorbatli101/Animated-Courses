#!/usr/bin/env python3
"""Label text -> icon name.

Not a convenience. With 41 figures a unit, nine units to go and 140 glyphs to
choose from, choosing by hand is where a wrong picture gets in -- and a wrong
picture in a vocabulary card is worse than no picture, because the learner
believes it. The map is explicit, auditable with `--review`, and every choice
it cannot make it says so rather than guessing.
"""
from __future__ import annotations
import re

# The order matters: the first key found in the label wins, so longer and more
# specific keys come first within each block.
MAP = [
    # grammar terms that appear as word-bank items
    ('there is', 'one_thing'), ('there are', 'many_things'),
    ('present simple', 'home'), ('present continuous', 'bus'),
    ('singular', 'one_thing'), ('plural', 'many_things'),
    ('much', 'bottle'), ('many', 'stones'), ('some', 'stones'),
    ('any', 'question'), ('countable', 'stones'), ('uncountable', 'bottle'),
    ('shade', 'tree'), ('council', 'plaque'), ('permission', 'tick'),
    ('neither', 'cross'), ('both', 'many_things'),
    # people and roles
    ('shop assistant', 'shop'), ('bus driver', 'bus'), ('station staff', 'guard'),
    ('neighbour', 'home'), ('flatmate', 'person'), ('colleague', 'nurse'),
    ('teacher', 'teacher'), ('student', 'book'), ('nurse', 'nurse'),
    ('doctor', 'nurse'), ('guest', 'guest'), ('visitor', 'guest'),
    ('beginner', 'book'), ('driver', 'bus'), ('cook', 'kitchen'),
    ('customer', 'person'), ('somebody', 'person'), ('partner', 'person'),
    ('crowd', 'crowd'), ('people', 'crowd'), ('friend', 'person'),
    ('person', 'person'), ('family', 'crowd'), ('child', 'person'),
    # time
    ('at the moment', 'speech'), ('right now', 'clock'), ('timetable', 'timetable'),
    ('weekday', 'calendar'), ('weekend', 'calendar'), ('calendar', 'calendar'),
    ('morning', 'sun'), ('afternoon', 'sun'), ('evening', 'moon'),
    ('night', 'moon'), ('midnight', 'moon'), ('midday', 'sun'), ('dawn', 'sun'),
    ('usually', 'sun'), ('routine', 'clock'), ('shift', 'moon'),
    ('appointment', 'notebook'), ('delay', 'delay'), ('late', 'delay'),
    ('hour', 'clock'), ('minute', 'clock'), ('clock', 'clock'),
    ('alarm', 'alarm'), ('time', 'clock'), ('day', 'sun'), ('week', 'calendar'),
    ('break', 'cup'), ('rest', 'bench'),
    # home
    ('living room', 'chair'), ('bedroom', 'bed'), ('bathroom', 'water'),
    ('upstairs', 'stairs'), ('downstairs', 'stairs'), ('ground floor', 'home'),
    ('top floor', 'arrow_up'), ('floor', 'stairs'), ('hot water', 'water'),
    ('balcony', 'balcony'), ('cupboard', 'cupboard'), ('shelf', 'shelf'),
    ('shelves', 'shelf'), ('stairs', 'stairs'), ('staircase', 'stairs'),
    ('landing', 'stairs'), ('lift', 'lift'), ('roof', 'roof'),
    ('garden', 'garden'), ('furniture', 'chair'), ('entrance', 'door'),
    ('door', 'door'), ('window', 'window'), ('kitchen', 'kitchen'),
    ('rent', 'coins'), ('flat', 'home'), ('building', 'home'),
    ('block', 'home'), ('house', 'home'), ('home', 'home'), ('room', 'chair'),
    ('recycling', 'recycling'), ('storage', 'box'), ('box', 'box'),
    ('lamp', 'lamp'), ('light', 'lamp'), ('chair', 'chair'), ('table', 'table'),
    ('view', 'window'), ('bed', 'bed'), ('settle', 'home'), ('tidy', 'box'),
    # town, street, directions
    ('bus stop', 'bus'), ('train station', 'tram'), ('post box', 'envelope'),
    ('roundabout', 'roundabout'), ('junction', 'junction'), ('crossing', 'crossing'),
    ('timetable', 'timetable'), ('library', 'library'), ('museum', 'museum'),
    ('market', 'market'), ('bench', 'bench'), ('bridge', 'bridge'),
    ('traffic', 'traffic'), ('square', 'square'), ('lane', 'lane'),
    ('street', 'street'), ('road', 'lane'), ('path', 'path'),
    ('address', 'envelope'), ('towards', 'arrow_right'), ('ahead', 'arrow_up'),
    ('below', 'arrow_down'), ('above', 'arrow_up'), ('far', 'arrow_right'),
    ('left', 'arrow_right'), ('right', 'arrow_right'), ('corner', 'junction'),
    ('map', 'notice'), ('sign', 'sign'), ('notice', 'notice'),
    ('village', 'village'), ('town', 'square'), ('city', 'street'),
    ('beach', 'beach'), ('forest', 'forest'), ('tree', 'tree'),
    ('island', 'island'), ('park', 'bench'),
    # travel
    ('airport', 'airport'), ('suitcase', 'suitcase'), ('luggage', 'luggage'),
    ('wallet', 'wallet'), ('charger', 'charger'), ('taxi', 'taxi'),
    ('coach', 'coach'), ('gate', 'gate'), ('ticket', 'ticket'),
    ('fare', 'coins'), ('plane', 'plane'), ('flight', 'plane'),
    ('train', 'tram'), ('tram', 'tram'), ('bike', 'bicycle'),
    ('bicycle', 'bicycle'), ('bus', 'bus'), ('commute', 'bus'),
    ('journey', 'bus'), ('travel', 'plane'), ('spare', 'key'),
    ('tent', 'tent'), ('camp', 'tent'),
    # food and shopping
    ('corner shop', 'shop'), ('supermarket', 'aisle'), ('receipt', 'receipt'),
    ('basket', 'basket'), ('aisle', 'aisle'), ('fridge', 'fridge'),
    ('weigh', 'scales'), ('scales', 'scales'), ('slice', 'slice'),
    ('bottle', 'bottle'), ('kilo', 'scales'), ('sugar', 'sugar'),
    ('bread', 'bread'), ('fresh', 'apple'), ('fruit', 'apple'),
    ('apple', 'apple'), ('milk', 'bottle'), ('rice', 'bowl'),
    ('bowl', 'bowl'), ('cup', 'cup'), ('tea', 'cup'), ('coffee', 'cup'),
    ('meal', 'bowl'), ('food', 'bowl'), ('picnic', 'picnic'),
    ('shop', 'shop'), ('buy', 'coins'), ('pay', 'coins'), ('money', 'coins'),
    ('price', 'pricetag'), ('cost', 'pricetag'), ('cheap', 'pricetag'),
    ('offer', 'pricetag'), ('deal', 'pricetag'), ('value', 'pricetag'),
    ('bag', 'bag'),
    # things, choosing, repairing
    ('second-hand', 'box'), ('battery', 'battery'), ('screen', 'screen'),
    ('brand', 'star'), ('quality', 'star'), ('model', 'mobile'),
    ('repair', 'spanner'), ('mend', 'needle'), ('broken', 'crack'),
    ('crack', 'crack'), ('glue', 'glue'), ('layer', 'layer'),
    ('brush', 'brush'), ('pour', 'pour'), ('press', 'press'), ('mix', 'mix'),
    ('step', 'stairs'), ('phone', 'mobile'), ('mobile', 'mobile'),
    ('computer', 'computer'), ('camera', 'camera'), ('radio', 'radio'),
    ('coat', 'coat'), ('shoe', 'shoe'), ('cloth', 'cloth'), ('needle', 'needle'),
    ('bin', 'bin'), ('key', 'key'), ('tool', 'spanner'),
    # school, helping, language
    ('course', 'certificate'), ('lesson', 'teacher'), ('class', 'school'),
    ('school', 'school'), ('college', 'school'), ('practise', 'guitar'),
    ('instrument', 'guitar'), ('guitar', 'guitar'), ('music', 'concert'),
    ('concert', 'concert'), ('advice', 'speech'), ('favour', 'hands'),
    ('lend', 'hands'), ('borrow', 'hands'), ('help', 'hands'),
    ('able', 'tick'), ('patient', 'clock'), ('question', 'question'),
    ('answer', 'speech'), ('say', 'speech'), ('talk', 'speech'),
    ('tell', 'speech'), ('ask', 'question'), ('write', 'pencil'),
    ('read', 'book'), ('book', 'book'), ('note', 'envelope'),
    ('message', 'envelope'), ('letter', 'envelope'), ('post', 'envelope'),
    ('newspaper', 'newspaper'), ('list', 'list'), ('plan', 'list'),
    ('check', 'tick'), ('find', 'magnifier'), ('look', 'magnifier'),
    ('watch', 'magnifier'), ('hospital', 'hospital'), ('health', 'hospital'),
    ('pill', 'pill'), ('medicine', 'pill'), ('work', 'shop'),
    ('office', 'computer'), ('job', 'shop'),
    # weather
    ('cloudy', 'cloud'), ('windy', 'wind'), ('rain', 'rain'), ('snow', 'snow'),
    ('cloud', 'cloud'), ('wind', 'wind'), ('sun', 'sun'), ('weather', 'cloud'),
    ('quiet', 'moon'), ('noisy', 'loudspeaker'), ('busy', 'crowd'),
    ('water', 'water'), ('hot', 'thermometer'), ('cold', 'snow'),
]

_INDEX = [(k, v) for k, v in MAP]


def pick(label: str, default: str | None = None) -> str | None:
    """The icon for a label, or `default` if nothing in the map fits.

    Matching is on whole words where the key is one word, and on substring
    where it is a phrase, so `bus stop` beats `bus` and `shelf` does not fire
    on `herself`.
    """
    t = re.sub(r'[^a-z0-9 \-]', ' ', (label or '').lower())
    t = ' ' + re.sub(r'\s+', ' ', t).strip() + ' '
    for key, icon in _INDEX:
        if ' ' in key or '-' in key:
            if key in t:
                return icon
        elif f' {key} ' in t or f' {key}s ' in t or f' {key}ing ' in t:
            return icon
    return default


if __name__ == '__main__':
    import sys
    for a in sys.argv[1:]:
        print(f'{a!r} -> {pick(a)}')
