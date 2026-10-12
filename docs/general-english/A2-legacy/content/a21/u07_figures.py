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

 2: lambda: F.word_grid(
        [('Quality', 'star'), ('Value', 'pricetag'), ('Brand', 'star'), ('Battery', 'battery'), ('Deal', 'pricetag')],
        height=460, cols=5,
        alt='The five warm-up words as numbered picture cards: quality, '
            'value, brand, battery, deal.'),

 3: lambda: F.bank_strip(
        [('heavier', 'scales'), ('cheaper', 'pricetag'), ('screen', 'screen'), ('colour', 'palette')],
        height=400,
        alt='The four words of the word bank, in the order the task prints '
            'them, each with a picture: heavier, cheaper, screen, colour.'),

 4: lambda: F.before_after(
        ('The grey coat', ['cheaper', 'lighter', 'the one she likes'], 'cup'),
        ('The green coat', ['warmer', 'deeper pockets', 'lasts ten years'], 'home'),
        height=520,
        alt='Two coats side by side. The grey one is cheaper, lighter and the one '
            'she likes. The green one is warmer, has deeper pockets and lasts ten '
            'years.'),

 5: lambda: F.word_grid(
        [('Quality', 'star'), ('Model', 'mobile'), ('Screen', 'screen'), ('Repair', 'spanner'), ('Offer', 'pricetag'), ('Width', 'ruler'), ('Deal', 'pricetag')],
        height=560, cols=4,
        alt='The seven words of Column A as numbered picture cards: quality, '
            'model, screen, repair, offer, width, deal, each with the thing '
            'it means drawn beside its number.'),

 6: lambda: F.function_map(
        [('cheap', 'cheaper'),
         ('warm', 'warmer'),
         ('heavy', 'heavier'),
         ('good', 'better'),
         ('bad', 'worse'),
         ('expensive', 'more expensive')],
        height=606,
        alt='The six forms this unit drills, each with an arrow from the one '
            'you start with to the one you say: cheap to cheaper, warm to '
            'warmer, heavy to heavier, good to better, bad to worse, '
            'expensive to more expensive.'),

 7: lambda: F.category_set(
        [('Quality', 'book'), ('Value', 'cup'), ('Brand', 'shop'),
         ('Battery', 'clock'), ('Screen', 'home'), ('Deal', 'sun')],
        height=600,
        alt='Six things people weigh up when they choose, each on its own card: '
            'quality, value, brand, battery, screen and deal.'),

 8: lambda: F.label_me(
        [('wider', 0.10, 0.48), ('deeper', 0.32, 0.44), ('thicker', 0.54, 0.52),
         ('lighter', 0.74, 0.46), ('stronger', 0.92, 0.50)],
        height=620, draw=F.compare_pair,
        alt='Two objects drawn side by side so the learner can see which is wider, '
            'which is deeper, which is thicker, which is lighter and which is '
            'stronger. Five numbered lines run to the right for each word.'),

 9: lambda: F.bank_strip(
        [('quality', 'star'), ('battery', 'battery'), ('repair', 'spanner'), ('brand', 'star')],
        height=400,
        alt='The four words of the fill-in word bank, in bank order, each '
            'drawn: quality, battery, repair, brand.'),
 10: lambda: F.writing_frame(
        [('What you chose between', 'Last month I looked at two bicycles.'),
         ('How the two were different', 'The second-hand one was cheaper and heavier.'),
         ('Which you chose, and why', 'I chose the old one, because the quality was better.')],
        height=571,
        alt='The shape of the two or three sentences to write, in three steps '
            '-- what you chose between, how the two were different, and which you '
            'chose and why -- with a line of the model beside each one.'),

 11: lambda: F.annotated_lines(
        [('The grey coat is cheaper.', 'cheaper'),
         ('The green one is warmer and the pockets are deeper.', 'warmer'),
         ('The green one is the most expensive coat in the shop.', 'the most expensive'),
         ('Of the three shops in the street, this one is the best.', 'the best')],
        height=440,
        alt='Four lines from the notice with the comparing word ringed in '
            'each: cheaper, warmer, the most expensive, the best. Two of the '
            'four compare two things and two compare more, which is the '
            'question the task asks.'),

 12: lambda: F.grammar_contrast(
        ('Comparative', '-er than · more … than',
         'The green one is warmer.', [0.30, 0.66]),
        ('Superlative', 'the -est · the most',
         'It is the warmest in the shop.', [0.84]),
        height=640,
        alt='The unit’s grammar as two columns. On the left the comparative, with '
            'two marks, because it compares two things. On the right the '
            'superlative, with one mark at the end, because it picks one out of a '
            'group.'),

 13: lambda: F.timeline(
        [('lightest', 'the grey coat'), ('lighter', 'the thin one'),
         ('heavier', 'the old one'), ('warmer', 'the green coat'),
         ('warmest', 'the best one')],
        height=460,
        alt='Five coats on one line, from the lightest at one end to the warmest at '
            'the other: the grey coat, the thin one, the old one, the green coat '
            'and the best one.'),

        # REVIEW: bins guessed as ['more expensive', 'the most expensive', 'cheaper']; chips are whole sentences, shorten them,
 14: lambda: F.sort_bins(
        ['two things', 'more than two'],
        ['cheaper', 'the cheapest', 'older', 'the lightest', 'worse'],
        height=540,
        alt='The five comparing words of this task as chips above two empty '
            'bins, one for comparing two things and one for comparing more '
            'than two. Which chip goes in which bin is the exercise, so none '
            'of them is placed.'),

 15: lambda: F.error_pairs(
        [('It is more cheaper.', 'It is cheaper.'),
         ('The green coat is more warmer than the grey one.', None),
         ('This is the most cheap shop in the street.', None),
         ('Her telephone is older that mine.', None)],
        height=500,
        alt='One correction worked through -- the wrong form struck out and '
            'the right one beside it -- and then three more sentences with an '
            'empty line for the learner to write the correct form.'),

 16: lambda: F.speakers(
        [('Track 7.2', 'Yuki and Maya', 'person', 'which coat?'),
         ('Track 7.3', 'Dani and the assistant', 'clock', 'in the repair shop'),
         ('Track 7.4', 'Amina', 'shop', 'five people choosing')],
        height=560,
        alt='The three listenings in this unit: Yuki and Maya disagree about a coat, '
            'Dani asks about a repair, and Amina describes five people choosing.'),

 17: lambda: F.dialogue_strip(
        [('Dani', 'book', 'The screen\u2019s broken.'),
         ('Assistant', 'person', 'Thirty, and it takes two days.'),
         ('Dani', 'book', 'And a new one?'),
         ('Assistant', 'person', 'The same model is two hundred.')],
        height=560,
        alt='The second listening as speech bubbles, one speaker on each '
            'side. Dani: The screen\u2019s broken. Assistant: Thirty, and it takes '
            'two days. Dani: And a new one? Assistant: The same model is two '
            'hundred.'),

 18: lambda: F.match_columns(
        [('Maya', 'person'), ('Tomas', 'nurse'), ('Mr Okonkwo', 'home'), ('Yuki', 'computer')],
        ['buys the best one and keeps it fifteen',
         'reads for a week and buys the first one',
         'buys the cheapest and replaces it twice',
         'borrows instead of buying',
         'repairs what he has and buys nothing'],
        height=650,
        alt='Four cards on the left and five on the right for the learner to '
            'join. One of the right-hand options is not wanted, and it is '
            'drawn so the spare one is visible rather than implied.'),

 19: lambda: F.question_cards(
        [('What is the best thing you ever bought?', 'question'),
         ('Do you buy the cheapest or the best?', 'pricetag'),
         ('What is the oldest thing you own that still works?', 'shop')],
        height=480,
        alt='The three discussion questions as numbered cards a pair can put '
            'on the table and take one at a time.'),

 20: lambda: F.info_gap_pair(
        ('Student A', [('two years old', 'notice'), ('the battery lasts', 'sun'), ('two hundred', 'notice'), ('a small screen', 'screen')]),
        ('Student B', [('two years old', 'notice'), ('the battery lasts', 'clock'), ('three hundred', 'notice'), ('a bigger screen', 'screen')]),
        height=560,
        alt='Student A\\u2019s facts on the left and Student B\\u2019s on the '
            'right, with a fold line between them, so each student sees only '
            'their own -- which is what the task has always asked for and a '
            'pair of prose lists on one page cannot give.'),

 21: lambda: F.cue_cards(
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

        # REVIEW: beats split from the task sentence; check they read as labels,
 22: lambda: F.talk_shape(
        [('which two things', 1, 'many_things'),
         ('which is older', 2, 'clock'),
         ('which is better', 2, 'star'),
         ('which you would replace first', 1, 'pricetag')],
        height=420,
        alt='The one-minute talk as four beats on a clock line, each block as '
            'wide as the share of the minute it should take: which two things '
            'you are comparing, which is older, which is better, and which '
            'you would replace first.'),

 23: lambda: F.process_strip(
        [('ten for boots', 'cup'), ('one winter', 'moon'),
         ('ten again', 'cup'), ('ten winters', 'clock'),
         ('a hundred in all', 'shop')],
        height=460,
        alt='The cheap boots over ten years, in five stages, each with an arrow to '
            'the next: ten for boots, one winter, ten again, ten winters, and a '
            'hundred in all at the end.'),

 24: lambda: F.word_grid(
        [('afford', 'coins'), ('sole', 'shoe'), ('cost', 'pricetag'), ('boots', 'shoe')],
        height=440, cols=4,
        alt='The four words from the reading as numbered picture cards: '
            'afford, sole, cost, boots.'),

 25: lambda: F.world_strip(
        [('Nairobi', 'shop', 'streets of workshops that mend anything'),
         ('Japan', 'cup', 'a broken bowl mended with gold'),
         ('Europe', 'home', 'repair cafés on a Saturday')],
        height=460,
        alt='Three places where things get mended: streets of workshops in Nairobi, '
            'a broken bowl mended with gold in Japan, and repair cafés on a Saturday '
            'in parts of Europe.'),

 26: lambda: F.writing_frame(
        [('The first thing', 'The grey coat is cheaper and lighter.'),
         ('The second thing', 'The green one is warmer and lasts ten years.'),
         ('Which is better value', 'The green one is better value over ten years.'),
         ('What you would take', 'I would take the green one.')],
        height=520,
        alt='The shape of the paragraph the learner is about to write, in four '
            'steps: the first thing, the second thing, which is better value, and '
            'which you would take.'),

 27: lambda: F.writing_frame(
        [('a clear opinion', 'I buy the good one when I can.'),
         ('two or three reasons', 'I buy the cheap one when I cannot.')],
        height=408,
        alt='The shape of the opinion paragraph in two steps -- a clear '
            'opinion, two or three reasons -- with a line of the model beside '
            'each one.'),

 28: lambda: F.writing_frame(
        [('a clear recommendation', 'Yuki, take the green one.'),
         ('one point for the other', 'I know it is twice the price and I know.'),
         ('a reason from their life', 'But you walk everywhere and you were cold all.')],
        height=571,
        alt='The shape of the message in three steps -- a clear '
            'recommendation, one point for the other, a reason from their '
            'life -- with a line of the model beside each one.'),

 29: lambda: F.writing_frame(
        [('the thing named', 'The best thing I own is a knife.'),
         ('one superlative', 'It is not the best knife or the most beautiful.'),
         ('why it is the best', 'It is the only thing in my kitchen.')],
        height=571,
        alt='The shape of the reflection in three steps -- the thing named, '
            'one superlative, why it is the best -- with a line of the model '
            'beside each one.'),

 30: lambda: F.function_map(
        [('It stopped working after a week.', 'saying what went wrong and when'),
         ('Can you repair it, or is a new one better?', 'asking which is the better choice'),
         ('I have the receipt here.', 'showing you can prove it'),
         ('What would you do?', 'asking for their honest advice')],
        height=580,
        alt='Four things you say when something is wrong with a thing you bought, '
            'each with an arrow to what it does: saying what went wrong and when, '
            'asking which is the better choice, showing you can prove it, and asking '
            'for their honest advice.'),

 31: lambda: F.dialogue_strip(
        [('Yuki', 'computer', 'I bought these boots three weeks ago.'),
         ('Assistant', 'person', 'Have you got the receipt?'),
         ('Yuki', 'computer', 'Here.'),
         ('Assistant', 'person', 'Then you can have your money back.')],
        height=560,
        alt='The 7B exchange as speech bubbles, one speaker on each side. '
            'Yuki: I bought these boots three weeks ago. Assistant: Have you '
            'got the receipt? Yuki: Here. Assistant: Then you can have your '
            'money back.'),

 32: lambda: F.sequence_steps(
        [('Decide what you want.', 'list'),
         ('Say what went wrong.', 'before_now'),
         ('Ask what they can do.', 'tick'),
         ('Show the receipt.', 'receipt')],
        height=490,
        alt='The four steps still to be numbered, in the order the task '
            'prints them and not in the right order, each with an empty box '
            'at the left for its number.'),

 33: lambda: F.cue_cards(
        ('Card A \u2014 the customer',
         ['say what and when', 'say what went wrong', 'show the receipt', 'ask for advice'], 'person'),
        ('Card B \u2014 the shop',
         ['ask for the receipt', 'offer two things', 'give honest advice', 'say why'], 'shop'),
        height=560,
        alt='The two role-play cards side by side. Card A \u2014 the customer: say '
            'what and when, say what went wrong, show the receipt, ask for '
            'advice. Card B \u2014 the shop: ask for the receipt, offer two '
            'things, give honest advice, say why.'),

 34: lambda: F.writing_frame(
        [('what and when', 'Good morning.'),
         ('what went wrong', 'I bought a pair of boots from you three weeks.'),
         ('what you want', 'I have the receipt and I can bring them.'),
         ('a reasonable tone', 'I am not asking for very much \u2014 a repair.')],
        height=734,
        alt='The shape of the Part 7 writing task in four steps -- what and '
            'when, what went wrong, what you want, a reasonable tone -- with '
            'a line of the model beside each one.'),

 35: lambda: F.before_after(
        ('Thrown away', ['a dead fridge', 'a shoe with no sole',
                         'nothing to be done'], 'moon'),
        ('Repaired', ['the motor goes into a second', 'a new sole from a tyre',
                      'it lasts longer'], 'sun'),
        height=520,
        alt='A broken thing and the two roads out of it. Thrown away: a dead fridge, '
            'a shoe with no sole, nothing to be done. Repaired: the motor goes into '
            'a second fridge, a new sole comes from a tyre, and it lasts longer.'),

 36: lambda: F.word_grid(
        [('skill', 'star'), ('informal', 'speech'), ('tyre', 'tyre'), ('generation', 'crowd')],
        height=440, cols=4,
        alt='The four words from the global story as numbered picture cards: '
            'skill, informal, tyre, generation.'),
 37: lambda: F.close_scene(
        [('the coat', 'coat'), ('the buttons', 'needle'),
         ('a woman two streets away', 'person'), ('a new one', 'pricetag')],
        height=460,
        alt='Mr Okonkwo\'s coat, drawn as the things that kept it going: the '
            'coat itself, older than Dani; the buttons that are not the ones '
            'it came with; the woman two streets away who relined it twice; '
            'and the new one he could buy easily and does not.'),

 38: lambda: F.decision_fork(
        'Something you own is broken. What do you do?',
        [('Mend it',
          ['a tenth of a new one', 'you know this one'], 'spanner'),
         ('Buy the cheapest new one',
          ['you pay less today', 'broken again by the spring'],
          'pricetag'),
         ('Save up and buy the best',
          ['it lasts', 'you wait and you pay more'], 'star')],
        height=620,
        alt='The decision task as one question and three branches, with what '
            'each one costs: mend it for a tenth of a new one; buy the '
            'cheapest, which is broken again by the spring; or save up and '
            'buy the best, which lasts but makes you wait and pay more.'),

 39: lambda: F.bank_strip(
        [('deal', 'pricetag'), ('basket', 'basket'), ('brand', 'star'),
         ('the cheapest', 'pricetag'), ('screen', 'screen'),
         ('battery', 'battery'), ('cheaper', 'pricetag'),
         ('suitcase', 'suitcase')],
        height=560, cols=4,
        alt='The eight words of the spiral review bank, in bank order: deal, '
            'basket, brand, the cheapest, screen, battery, cheaper, suitcase.'),

 40: lambda: F.progress_strip(
        [('I can name the things people compare when they choose', False),
         ('I can use comparatives and superlatives, with than and the', False),
         ('I can understand two people disagreeing about a choice', False),
         ('I can compare two things in 50–70 words', False),
         ('I can take something back to a shop and ask for advice', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),

 41: lambda: F.glossary_grid(
        [('quality', 'star'), ('value', 'pricetag'), ('brand', 'star'), ('battery', 'battery'), ('screen', 'screen'), ('deal', 'pricetag'), ('repair', 'spanner'), ('model', 'mobile'), ('second-hand', 'box'), ('offer', 'pricetag')],
        height=700, cols=5,
        alt='All ten glossary words of Unit 7 as picture cards on one page: '
            'quality, value, brand, battery, screen, deal, repair, model, '
            'second-hand, offer.'),
}
