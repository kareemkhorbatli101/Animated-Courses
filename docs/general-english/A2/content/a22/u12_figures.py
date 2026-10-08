"""Unit 12 figures, in document order. Every label word appears in the unit (G18)."""
import figures as F

FIGURES = {
 1: lambda: F.unit_opener_page(
        12, 'Weather and What Might Happen',
        'Will and might',
        ['I can talk about the weather and say what it will do.',
         'I can use will, won’t and might correctly.',
         'I can write a weather warning in 50–70 words.'],
        ['sun', 'cloud', 'rain', 'snow', 'wind'],
        alt='The opening page of Unit 12, Weather and What Might Happen: the grammar '
            'point is will and might, and three things the learner will be able to do '
            'by the end of the unit.'),

 4: lambda: F.scene(
        [('Amina', 'shop', 'it will rain, her shoulder says'),
         ('Tomas', 'nurse', 'it might snow; he rides in'),
         ('Maya', 'book', 'she will take a coat'),
         ('Dani', 'kitchen', 'it will be fine; he is wrong'),
         ('Mr Okonkwo', 'home', 'says nothing, brings an umbrella'),
         ('Yuki', 'cup', 'reads it twice, then asks Amina')],
        height=560,
        alt='What each of the six people at number 14 thinks the weather will do: '
            'Amina says it will rain because her shoulder says so, Tomas says it '
            'might snow and rides in anyway, Maya will take a coat, Dani says it '
            'will be fine and is wrong, Mr Okonkwo says nothing and brings an '
            'umbrella, and Yuki reads the forecast twice and then asks Amina.'),

 7: lambda: F.category_set(
        [('Heavy rain', 'rain'), ('Ice', 'snow'), ('Fog', 'cloud'),
         ('Thirty degrees', 'sun'), ('A storm', 'wind'), ('A flood', 'bridge')],
        height=600,
        alt='Six kinds of weather, each on its own card: heavy rain, ice, fog, '
            'thirty degrees, a storm and a flood.'),

 8: lambda: F.label_me(
        [('sunny', 0.30, 0.10), ('cloud', 0.36, 0.29),
         ('shower', 0.42, 0.49), ('snow', 0.50, 0.69), ('fog', 0.70, 0.87)],
        height=620, draw=F.sky_strip,
        alt='Five skies in a row above one ground line: a clear sun, a cloud, a '
            'cloud with rain falling from it, a cloud with crossed flakes under it, '
            'and three flat bands low down with nothing visible behind them. Five '
            'numbered lines run to the right for the learner to write each word.'),

 12: lambda: F.grammar_contrast(
        ('will · won’t', 'sure',
         'It will rain. It won’t be warm.', [0.80]),
        ('might', 'possible, not sure',
         'It might snow on Thursday.', [0.36, 0.64]),
        height=640,
        alt='The unit’s grammar as two columns. On the left will and won’t for what '
            'is sure, with one mark close to the certain end. On the right might for '
            'what is possible, with two marks in the middle, because it may go '
            'either way.'),

 13: lambda: F.timeline(
        [('this afternoon', 'it will rain'), ('Thursday', 'it might snow'),
         ('Thursday night', 'ice on the hill'), ('Friday', 'the buses won’t run'),
         ('April', 'warm again')],
        height=460,
        alt='One week of forecasts on a line: rain this afternoon for certain, '
            'possible snow on Thursday, ice on the hill on Thursday night, no buses '
            'on Friday, and warm again in April.'),

 16: lambda: F.speakers(
        [('Track 12.2', 'Yuki and Amina', 'shop', 'the shoulder and the radio'),
         ('Track 12.3', 'Dani and Maya', 'bus', 'a journey that might not happen'),
         ('Track 12.4', 'Amina', 'person', 'six people, six forecasts')],
        height=560,
        alt='The three listenings in this unit: Amina tells Yuki her shoulder beats '
            'the radio, Maya talks Dani out of travelling into ice, and Amina '
            'describes all six forecasts she hears before nine.'),

 21: lambda: F.cue_cards(
        ('Card A — warning', ['say what is coming and when', 'say what will stop',
                              'do not say what to do', 'wait'], 'cloud'),
        ('Card B — deciding', ['say your plan', 'hear the problem',
                               'change one thing', 'say the new plan'], 'person'),
        height=560,
        alt='The two role-play cards side by side. Card A, warning: say what is '
            'coming and when, say what will stop, do not say what to do, wait. Card '
            'B, deciding: say your plan, hear the problem, change one thing, say the '
            'new plan out loud.'),

 23: lambda: F.process_strip(
        [('sixty in a hundred', 'cloud'), ('six wet mornings', 'rain'),
         ('four dry ones', 'sun'), ('the Saturday you remember', 'clock'),
         ('“it is never right”', 'person')],
        height=460,
        alt='Why a forecast is not believed, in five stages with an arrow to the '
            'next: sixty in a hundred means six wet mornings out of ten and four dry '
            'ones, but the one dry Saturday somebody called off is the one they '
            'remember, and so the forecast is never right.'),

 25: lambda: F.world_strip(
        [('the south of Spain', 'home', 'small windows, thick shutters'),
         ('Bergen', 'bridge', 'wooden houses on stone'),
         ('the far north of Japan', 'snow', 'low roofs, doors that open inwards')],
        height=460,
        alt='Three places and what the weather built: small windows and thick '
            'shutters in the south of Spain, wooden houses built on stone in '
            'Bergen, and low roofs with doors that open inwards in the far north of '
            'Japan.'),

 26: lambda: F.writing_frame(
        [('What is coming, and when', 'There is ice coming on Thursday night.'),
         ('What it will stop', 'The buses will not run before nine.'),
         ('One thing to do', 'Go on Thursday, or go late on Friday.'),
         ('What you are doing', 'I will put salt on our steps.')],
        height=520,
        alt='The shape of the warning the learner is about to write, in four steps: '
            'what is coming and when, what it will stop, one thing the reader can '
            'do, and what you are doing yourself.'),

 30: lambda: F.function_map(
        [('Rain will spread from the west by midday.', 'sure, with a time'),
         ('A shower is possible inland.', 'possible, and only somewhere'),
         ('It will not get above four degrees.', 'sure, and it is a limit'),
         ('Conditions may become difficult overnight.', 'possible, warning you quietly')],
        height=580,
        alt='Four lines from a forecast, each with an arrow to how sure it is: sure '
            'with a time, possible and only somewhere, sure and a limit, and '
            'possible with a quiet warning inside it.'),

 35: lambda: F.before_after(
        ('A year of dust', ['a dry country', 'the radio says nothing',
                            'everybody stands outside'], 'sun'),
        ('The week the rain arrives', ['it reaches the south coast', 'six weeks moving north',
                                       'the harvest turns on it'], 'rain'),
        height=520,
        alt='Two halves of one year. A year of dust: a dry country, the radio with '
            'nothing to say, and everybody standing outside. The week the rain '
            'arrives: it reaches the south coast, moves north for six weeks, and the '
            'whole harvest turns on whether it is early, late or thin.'),

 40: lambda: F.progress_strip(
        [('I can talk about the weather and say what it will do', False),
         ('I can use will, won’t and might correctly', False),
         ('I can understand a forecast and a warning', False),
         ('I can write a weather warning in 50–70 words', False),
         ('I can warn somebody who is not worried', True)],
        height=520,
        alt='The five Can-Do lines of the unit as a strip with a box to tick beside '
            'each, the last one marked Plus.'),
}
