"""Unit 7 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        7, 'Choosing and Comparing',
        'Comparatives and superlatives',
        ['I can name the things people compare when they choose.',
         'I can use comparatives and superlatives, with than and the.',
         'I can compare two things in 50–70 words.'],
        ['shop', 'cup', 'book', 'clock', 'home'],
        alt='The opening page of Unit 7, Choosing and Comparing: the grammar point '
            'is comparatives and superlatives, and three things the learner will be '
            'able to do by the end of the unit.'),

 2: lambda: F.before_after(
        ('The grey coat', ['cheaper', 'lighter', 'the one she likes'], 'cup'),
        ('The green coat', ['warmer', 'deeper pockets', 'lasts ten years'], 'home'),
        height=520,
        alt='Two coats side by side. The grey one is cheaper, lighter and the one '
            'she likes. The green one is warmer, has deeper pockets and lasts ten '
            'years.'),

 3: lambda: F.category_set(
        [('Quality', 'book'), ('Value', 'cup'), ('Brand', 'shop'),
         ('Battery', 'clock'), ('Screen', 'home'), ('Deal', 'sun')],
        height=600,
        alt='Six things people weigh up when they choose, each on its own card: '
            'quality, value, brand, battery, screen and deal.'),

 4: lambda: F.label_me(
        [('wider', 0.10, 0.48), ('deeper', 0.32, 0.44), ('thicker', 0.54, 0.52),
         ('lighter', 0.74, 0.46), ('stronger', 0.92, 0.50)],
        height=620, draw=F.compare_pair,
        alt='Two objects drawn side by side so the learner can see which is wider, '
            'which is deeper, which is thicker, which is lighter and which is '
            'stronger. Five numbered lines run to the right for each word.'),

 5: lambda: F.grammar_contrast(
        ('Comparative', '-er than · more … than',
         'The green one is warmer.', [0.30, 0.66]),
        ('Superlative', 'the -est · the most',
         'It is the warmest in the shop.', [0.84]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the comparative, with '
            'two marks, because it compares two things. On the right the '
            'superlative, with one mark at the end, because it picks one out of a '
            'group.'),

 6: lambda: F.timeline(
        [('lightest', 'the grey coat'), ('lighter', 'the thin one'),
         ('heavier', 'the old one'), ('warmer', 'the green coat'),
         ('warmest', 'the best one')],
        height=460,
        alt='Five coats on one line, from the lightest at one end to the warmest at '
            'the other: the grey coat, the thin one, the old one, the green coat '
            'and the best one.'),

 7: lambda: F.speakers(
        [('Track 7.2', 'Yuki and Maya', 'person', 'which coat?'),
         ('Track 7.3', 'Dani and the assistant', 'clock', 'in the repair shop'),
         ('Track 7.4', 'Amina', 'shop', 'five people choosing')],
        height=560,
        alt='The three listenings in this unit: Yuki and Maya disagree about a coat, '
            'Dani asks about a repair, and Amina describes five people choosing.'),

 8: lambda: F.cue_cards(
        ('Card A — choosing', ['say the two things', 'say what is better about each',
                               'say why you cannot decide'], 'cup'),
        ('Card B — the friend', ['ask how much', 'compare the two out loud',
                                 'say which you would take', 'give one reason'],
         'person'),
        height=560,
        alt='The two role-play cards side by side. Card A, the person choosing: say '
            'the two things, say what is better about each, say why you cannot '
            'decide. Card B, the friend: ask how much, compare the two out loud, say '
            'which you would take, give one reason.'),

 9: lambda: F.process_strip(
        [('ten for boots', 'cup'), ('one winter', 'moon'),
         ('ten again', 'cup'), ('ten winters', 'clock'),
         ('a hundred in all', 'shop')],
        height=460,
        alt='The cheap boots over ten years, in five stages, each with an arrow to '
            'the next: ten for boots, one winter, ten again, ten winters, and a '
            'hundred in all at the end.'),

 10: lambda: F.world_strip(
        [('Nairobi', 'shop', 'streets of workshops that mend anything'),
         ('Japan', 'cup', 'a broken bowl mended with gold'),
         ('Europe', 'home', 'repair cafés on a Saturday')],
        height=460,
        alt='Three places where things get mended: streets of workshops in Nairobi, '
            'a broken bowl mended with gold in Japan, and repair cafés on a Saturday '
            'in parts of Europe.'),

 11: lambda: F.writing_frame(
        [('The first thing', 'The grey coat is cheaper and lighter.'),
         ('The second thing', 'The green one is warmer and lasts ten years.'),
         ('Which is better value', 'The green one is better value over ten years.'),
         ('What you would take', 'I would take the green one.')],
        height=520,
        alt='The shape of the paragraph the learner is about to write, in four '
            'steps: the first thing, the second thing, which is better value, and '
            'which you would take.'),

 12: lambda: F.function_map(
        [('It stopped working after a week.', 'saying what went wrong and when'),
         ('Can you repair it, or is a new one better?', 'asking which is the better choice'),
         ('I have the receipt here.', 'showing you can prove it'),
         ('What would you do?', 'asking for their honest advice')],
        height=580,
        alt='Four things you say when something is wrong with a thing you bought, '
            'each with an arrow to what it does: saying what went wrong and when, '
            'asking which is the better choice, showing you can prove it, and asking '
            'for their honest advice.'),

 13: lambda: F.before_after(
        ('Thrown away', ['a dead fridge', 'a shoe with no sole',
                         'nothing to be done'], 'moon'),
        ('Repaired', ['the motor goes into a second', 'a new sole from a tyre',
                      'it lasts longer'], 'sun'),
        height=520,
        alt='A broken thing and the two roads out of it. Thrown away: a dead fridge, '
            'a shoe with no sole, nothing to be done. Repaired: the motor goes into '
            'a second fridge, a new sole comes from a tyre, and it lasts longer.'),

 14: lambda: F.progress_strip(
        [('I can name the things people compare when they choose', False),
         ('I can use comparatives and superlatives, with than and the', False),
         ('I can understand two people disagreeing about a choice', False),
         ('I can compare two things in 50–70 words', False),
         ('I can take something back to a shop and ask for advice', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
