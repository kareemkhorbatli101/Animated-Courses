#!/usr/bin/env python3
"""Label text -> icon name.

Not a convenience. With 41 figures a unit, nine units to go and 140 glyphs to
choose from, choosing by hand is where a wrong picture gets in -- and a wrong
picture in a vocabulary card is worse than no picture, because the learner
believes it. The map is explicit, auditable with `--review`, and every choice
it cannot make it says so rather than guessing.
"""
from __future__ import annotations
import os, re

# The order matters: the first key found in the label wins, so longer and more
# specific keys come first within each block.
MAP = [
    # ----------------------------------------------- B1 vocabulary (Units 1-20)
    # Added for B1 Unit 1. A label that IS an icon name needs no entry (switch,
    # meter, bulb, cable, stairs, road, laptop, ear, spark are drawn glyphs), so
    # these are the synonyms only.
    ('power cut', 'spark'), ('electricity', 'spark'), ('candle', 'lamp'),
    ('darkness', 'moon'), ('freezer', 'fridge'), ('supply', 'cable'),
    ('basement', 'stairs'), ('plug', 'cable'), ('kettle', 'cup'),
    ('silence', 'ear'), ('grid', 'network'), ('substation', 'meter'),
    ('demand', 'scales'), ('fault', 'warning'), ('heatwave', 'sun'),
    ('transformer', 'meter'), ('saucer', 'cup'), ('queue', 'crowd'),
    ('generator', 'factory'), ('ward', 'hospital'), ('backup', 'battery'),
    ('while', 'clock'), ('was serving', 'shop'), ('staircase', 'stairs'),
    ('fund', 'coins'), ('job number', 'sign_number'), ('reach', 'hands'),
    ('agree', 'tick'), ('decide', 'list'), ('prepare', 'list'),
    ('accident', 'warning'), ('interrupted', 'zigzag'),
    ('careful', 'magnifier'), ('might', 'question'), ('reason', 'question'),
    ('should', 'list'), ('where', 'pin'), ('who', 'person'),
    ('will', 'arrow_right'), ('habit', 'cup'), ('opened', 'door'),
    # A2.2 vocabulary (Units 11-20), mapped once for the whole volume
    ('second-hand', 'box'), ('hand-made', 'hands'), ('has never', 'before_now'),
    ('has not changed', 'before_now'), ('have been', 'before_now'),
    ('am going to', 'arrow_right'), ('am meeting', 'calendar'),
    ('is produced', 'factory'), ('will stay', 'arrow_right'),
    ('don\u2019t have to', 'cross'), ('do not have to', 'cross'),
    ('mustn\u2019t', 'cross'), ('shouldn\u2019t', 'cross'), ('must not', 'cross'),
    ('actor', 'mask'), ('athlete', 'runner'), ('builder', 'hammer'),
    ('singer', 'microphone'), ('waiter', 'tray'), ('tailor', 'needle'),
    ('artist', 'palette'), ('painter', 'brush'), ('author', 'pencil'),
    ('farmer', 'vegetable'), ('dentist', 'tooth'), ('pharmacist', 'pill'),
    ('reporter', 'newspaper'), ('guide', 'notice'), ('host', 'guest'),
    ('member', 'certificate'), ('witness', 'magnifier'),
    ('warning', 'warning'), ('danger', 'warning'), ('risk', 'warning'),
    ('emergency', 'siren'), ('urgent', 'siren'), ('accident', 'siren'),
    ('ancient', 'temple'), ('temple', 'temple'), ('century', 'calendar'),
    ('period', 'calendar'), ('custom', 'calendar'), ('dated', 'calendar'),
    ('nowadays', 'screen'), ('modern', 'screen'), ('sensor', 'screen'),
    ('abroad', 'plane'), ('adventure', 'mountain'), ('peak', 'mountain'),
    ('tour', 'path'), ('holiday', 'tent'), ('shelter', 'tent'),
    ('hotel', 'home'), ('indoors', 'home'), ('desert', 'sun'),
    ('monsoon', 'rain'), ('storm', 'rain'), ('shower', 'rain'),
    ('flood', 'water'), ('reservoir', 'water'), ('sewage', 'water'),
    ('dam', 'bridge'), ('fog', 'cloud'), ('forecast', 'cloud'),
    ('freeze', 'snow'), ('ice', 'snow'), ('earthquake', 'crack'),
    ('fever', 'thermometer'), ('temperature', 'thermometer'),
    ('degree', 'thermometer'), ('symptom', 'thermometer'),
    ('headache', 'pill'), ('pain', 'pill'), ('sick', 'bed'), ('ward', 'bed'),
    ('healthy', 'apple'), ('throat', 'person'), ('triage', 'list'),
    ('article', 'newspaper'), ('news', 'newspaper'), ('diary', 'notebook'),
    ('announcement', 'loudspeaker'), ('rumour', 'speech'),
    ('compliment', 'speech'), ('nickname', 'speech'), ('excuse', 'speech'),
    ('description', 'speech'), ('promised', 'speech'), ('told', 'speech'),
    ('said', 'speech'), ('interview', 'speech'), ('silence', 'moon'),
    ('calm', 'moon'), ('reply', 'envelope'), ('invite', 'envelope'),
    ('law', 'plaque'), ('licence', 'certificate'), ('fee', 'coins'),
    ('luck', 'star'), ('experience', 'star'), ('spontaneous', 'star'),
    ('exhibition', 'museum'), ('festival', 'concert'), ('party', 'concert'),
    ('stage', 'concert'), ('rehearse', 'concert'), ('material', 'cloth'),
    ('wool', 'cloth'), ('pattern', 'cloth'), ('membrane', 'cloth'),
    ('smooth', 'cloth'), ('weave', 'loom'), ('metal', 'chain'),
    ('plastic', 'bottle'), ('glass', 'bottle'), ('gas', 'factory'),
    ('engine', 'factory'), ('machine', 'factory'), ('produce', 'factory'),
    ('waste', 'bin'), ('recycle', 'recycling'), ('drill', 'spanner'),
    ('rebuild', 'hammer'), ('memory', 'before_now'), ('childhood', 'person'),
    ('meeting', 'crowd'), ('prepare', 'list'), ('private', 'key'),
    ('remind', 'alarm'), ('jam', 'traffic'), ('centre', 'pin'),
    ('fairness', 'scales'), ('trust', 'hands'), ('reassure', 'hands'),
    ('obey', 'tick'), ('allowed', 'tick'), ('safe', 'tick'),
    ('harmless', 'tick'), ('certainty', 'tick'), ('false', 'cross'),
    ('smoking', 'cross'), ('chance', 'question'), ('probably', 'question'),
    ('unless', 'question'), ('version', 'many_things'), ('minor', 'stones'),
    ('strip', 'ruler'), ('straight', 'arrow_up'), ('ending', 'arrow_right'),
    ('arrival', 'airport'), ('text', 'mobile'), ('taste', 'cup'),
    ('harvest', 'vegetable'), ('plant', 'garden'), ('uniform', 'guard'),
    ('fashion', 'coat'), ('detail', 'magnifier'),
    # grammar terms that appear as word-bank items
    ('there is', 'one_thing'), ('there are', 'many_things'),
    ('present simple', 'home'), ('present continuous', 'bus'),
    ('singular', 'one_thing'), ('plural', 'many_things'),
    ('much', 'bottle'), ('many', 'stones'), ('some', 'stones'),
    ('any', 'question'), ('countable', 'stones'), ('uncountable', 'bottle'),
    ('shade', 'tree'), ('council', 'plaque'), ('permission', 'tick'),
    ('neither', 'cross'), ('both', 'many_things'),
    # Units 3-10 vocabulary, mapped once rather than unit by unit
    ('the cheapest', 'pricetag'), ('a few', 'stones'), ('a little', 'bottle'),
    ('is opening', 'door'), ('opens', 'calendar'), ('do not', 'cross'), ('switchback', 'zigzag'),
    ('second-hand', 'box'),
    ('escalator', 'escalator'), ('underground', 'network'),
    ('network', 'network'), ('connection', 'chain'), ('link', 'chain'),
    ('chain', 'chain'), ('diagram', 'network'), ('route', 'path'),
    ('carriage', 'tram'), ('passenger', 'guest'), ('queue', 'crowd'),
    ('platform', 'tram'), ('landmark', 'bridge'), ('pole', 'sign'),
    ('width', 'ruler'), ('scale', 'scales'), ('level', 'stairs'),
    ('ladder', 'ladder'), ('summit', 'mountain'), ('mountain', 'mountain'),
    ('zigzag', 'zigzag'), ('lake', 'water'), ('umbrella', 'umbrella'),
    ('sunny', 'sun'), ('boots', 'shoe'), ('sole', 'shoe'),
    ('tyre', 'tyre'), ('cinema', 'screen'), ('audience', 'crowd'),
    ('generation', 'crowd'), ('union', 'crowd'), ('stranger', 'person'),
    ('owner', 'person'), ('expert', 'teacher'), ('membership', 'certificate'),
    ('survey', 'list'), ('campaign', 'loudspeaker'), ('trade', 'hands'),
    ('agreement', 'hands'), ('haggle', 'speech'), ('informal', 'speech'),
    ('explanation', 'speech'), ('assume', 'question'), ('obvious', 'magnifier'),
    ('trial', 'magnifier'), ('carefully', 'magnifier'), ('avoid', 'cross'),
    ('missed', 'cross'), ('caught', 'bus'), ('rested', 'bed'),
    ('burnout', 'bed'), ('productivity', 'arrow_up'), ('progress', 'arrow_up'),
    ('finally', 'tick'), ('could', 'tick'), ('can', 'tick'), ('skill', 'star'),
    ('craft', 'needle'), ('design', 'pencil'), ('draft', 'pencil'),
    ('colour', 'palette'), ('label', 'plaque'), ('stock', 'box'),
    ('credit', 'wallet'), ('afford', 'coins'), ('margin', 'coins'),
    ('change', 'coins'), ('cheaper', 'pricetag'), ('choice', 'question'),
    ('deliver', 'envelope'), ('flour', 'sugar'), ('vegetable', 'vegetable'),
    ('dish', 'bowl'), ('heavier', 'scales'), ('trip', 'suitcase'),
    ('factory', 'factory'), ('facing', 'arrow_right'),
    ('was', 'before_now'), ('were', 'before_now'), ('went', 'before_now'),
    ('did', 'before_now'), ('yesterday', 'before_now'), ('ago', 'before_now'),
    ('last night', 'before_now'), ('past', 'before_now'),
    ('at', 'pin'), ('in', 'pin'), ('on', 'pin'),
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

def _norm(t):
    """One normalisation, used on the label AND on every key.

    The label was normalised and the keys were not, so `don\u2019t have to`
    could never match its own entry: the label became "don t have to" and the
    key still carried the apostrophe.
    """
    t = re.sub(r"[^a-z0-9 -]", ' ', (t or '').lower())
    return ' ' + re.sub(r'\s+', ' ', t).strip() + ' '


_INDEX = [(_norm(k).strip(), v) for k, v in MAP]


ICON_NAMES = set(re.findall(r"name == '([a-z_]+)'", open(
    os.path.join(os.path.dirname(os.path.abspath(__file__)), 'figures.py'),
    encoding='utf-8').read()))


def pick(label: str, default: str | None = None) -> str | None:
    """The icon for a label, or `default` if nothing in the map fits.

    Matching is on whole words where the key is one word, and on substring
    where it is a phrase, so `bus stop` beats `bus` and `shelf` does not fire
    on `herself`.
    """
    t = _norm(label)
    for key, icon in _INDEX:
        if ' ' in key or '-' in key:
            if key in t:
                return icon
        elif f' {key} ' in t or f' {key}s ' in t or f' {key}ing ' in t:
            return icon
    # A label that IS an icon name needs no map entry. Eight words of A2.2
    # vocabulary -- envelope, guard, record, stamp, loom, loudspeaker,
    # painting, lamp -- had a glyph drawn for them already and were still
    # reported as unmapped, because the map only knew about synonyms.
    for w in (t.strip(), t.strip().replace(' ', '_'), t.strip().rstrip('s')):
        if w in ICON_NAMES:
            return w
    return default


if __name__ == '__main__':
    import sys
    for a in sys.argv[1:]:
        print(f'{a!r} -> {pick(a)}')
