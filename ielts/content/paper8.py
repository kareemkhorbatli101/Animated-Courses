# -*- coding: utf-8 -*-
"""Foundation 2, Progress Test: Reading.

Not an IELTS Reading paper. It is the real paper's shape at this book's
own length: three passages, twenty-four questions, forty minutes, with
an answer sheet and a clock. The step up from Foundation 1 is deliberate
and measured - passages half again as long, four more questions, ten
more minutes - so that a candidate arrives at Volume 1 having already
felt the paper stretch once.
"""

PAPER = dict(
 vol=8, level='A2-B1', band='4.0-4.5', minutes=40,
 title='Progress Test · Reading',
 intro=(
   'Forty minutes. Twenty-four questions. Three passages. This is not a '
   'full IELTS Reading paper, and it is not meant to be: it is the same '
   'shape at the length you can read now, one step longer than the test '
   'at the end of Foundation 1. Everything it asks of you will still be '
   'asked when the passages are three times longer. Work through the '
   'passages in order, write your answers on the paper, then copy them '
   'onto the answer sheet and time the copying, because nobody gives '
   'you extra minutes for it in the real paper.'),
 instruct=[
   'Write 13, 26 and 40 at the top of the page before you start. Those '
   'are the minute marks by which each passage should be finished.',
   'Read the questions for a passage before you read the passage, and '
   'decide for each one whether its key is rare and unique or common '
   'and paraphrased.',
   'Move on when your time is up, even in the middle of a question.',
   'Predict the grammar of every gap before you write in it: singular '
   'or plural, article or no article, which part of speech.',
   'Answer every question. There is no penalty for a wrong answer, so a '
   'blank is always worse than a guess.'],
 passages=[
  dict(no=1, first=1, heading='Harbour Lane Swimming Pool',
       kind='Information leaflet', qtype='Questions 1-8',
       blurb='A leaflet for a public pool. Read the questions first.',
       paras=[
        'The pool is open from six in the morning until nine at night '
        'on weekdays, and from eight until six at the weekend. The last '
        'admission is forty minutes before closing, which is a rule '
        'about changing rooms rather than about swimming.',
        'Lanes are reserved for clubs on Tuesday and Thursday evenings '
        'from seven until half past eight. At those times two of the '
        'six lanes remain open to the public, and the shallow end is '
        'unaffected.',
        'A single swim costs four pounds sixty for an adult and two '
        'pounds for anybody under sixteen. A monthly pass costs '
        'thirty-two pounds and pays for itself at seven swims, which '
        'the staff will tell you if you ask and will not tell you if '
        'you do not.',
        'Children under eight may not swim unaccompanied, and one adult '
        'may bring no more than two children under eight. This is a '
        'rule we are often asked to bend and cannot: the number comes '
        'from the national guidance our licence depends on.',
        'Lockers take a one-pound coin, which is returned when the '
        'locker is opened. There is a change machine by the entrance '
        'and it is the thing that most often breaks, so bring a coin if '
        'you can.',
        'Swimming lessons for adults run on Monday evenings in blocks '
        'of eight weeks and are taught in the shallow end. About half '
        'the people who book them have never put their face in the '
        'water, and the teachers say that is the ordinary starting '
        'point rather than an unusual one.',
        'The pool closes for two weeks every February for maintenance. '
        'The dates are announced in November, and monthly passes are '
        'extended automatically by the number of days lost.'],
       items=[
        ('The pool opens at ____________ on weekdays.', None, 'six',
         'And at eight at the weekend, the leaflet says.'),
        ('The last admission is ____________ minutes before closing.',
         None, 'forty', 'A rule about changing rooms, not swimming.'),
        ('How many lanes stay open to the public on club evenings?',
         ['two', 'one', 'four', 'six'], 0,
         'Two of the six lanes, with the shallow end unaffected.'),
        ('A monthly pass pays for itself at ____________ swims.',
         None, 'seven', 'Which staff will tell a swimmer who asks.'),
        ('One adult may bring no more than ____________ children '
         'under eight.', None, 'two',
         'A number taken from the national guidance.'),
        ('Lockers take a ____________ coin, which is returned.', None,
         'one-pound', 'And the change machine often breaks.'),
        ('Adult lessons run in blocks of ____________ weeks.', None,
         'eight', 'On Monday evenings, in the shallow end.'),
        ('When are the February closure dates announced?', None,
         'in November',
         'And passes are extended by the days lost.')]),
  dict(no=2, first=9,
       heading='Why bread was baked outside the house',
       kind='Short factual article', qtype='Questions 9-16',
       blurb='A short article about ovens. Read the questions first.',
       paras=[
        'For most of the last thousand years, in most of Europe, bread '
        'was not baked in the house where it was eaten. Dough was mixed '
        'at home and carried to a shared oven, often one owned by the '
        'village or by a landlord who charged for its use. Historians '
        'once explained this as a tax arrangement, and the explanation '
        'is now thought to be mostly wrong.',
        'The better explanation is fuel. A bread oven works by being '
        'heated until the bricks themselves are hot, then swept out and '
        'loaded, and the heat stored in the brick does the baking. '
        'Getting one to that state takes two or three hours of steady '
        'burning, and the quantity of wood involved was beyond what a '
        'single household could spare for a few loaves.',
        'Once an oven is at that temperature, however, it will bake '
        'batch after batch with no further fuel at all. A shared oven '
        'that heats once and bakes for thirty families uses a '
        'thirtieth of the wood per loaf. The saving is not a small '
        'one: in parts of France in the eighteenth century, fuel cost '
        'more than flour.',
        'The pattern held until two things changed. Coal became cheap '
        'enough and concentrated enough to heat a small oven for one '
        'household. The cast iron range brought the oven into the '
        'kitchen wall, where it was heated anyway for cooking and '
        'warmth. Within two generations the village oven was gone from '
        'most places.',
        'Where it survived, it survived for a reason worth noticing. In '
        'villages where the oven building also served as a meeting '
        'place, it was kept and used long after it was no longer the '
        'cheapest way to bake, in some cases into the 1950s. The fuel '
        'argument explains why shared ovens existed; it does not '
        'explain why some of them lasted.'],
       items=[
        ('Dough was mixed at home and carried to a ____________ '
         'oven.', None, 'shared',
         'Paragraph 1, often owned by a village or landlord.'),
        ('What did historians once think explained the practice?',
         None, 'a tax arrangement',
         'Paragraph 1, an explanation now thought mostly wrong.'),
        ('An oven bakes with the heat stored in the ____________.',
         None, 'brick',
         'Paragraph 2: the oven is swept out before loading.'),
        ('Heating an oven takes ____________ or three hours.', None,
         'two', 'Paragraph 2, of steady burning.'),
        ('A shared oven baking for thirty families uses a '
         '____________ of the wood per loaf.', None, 'thirtieth',
         'Paragraph 3, once the oven is already hot.'),
        ('In eighteenth-century France, fuel cost more than '
         '____________.', None, 'flour',
         'Paragraph 3, which is why the saving mattered.'),
        ('What brought the oven into the kitchen wall?',
         ['cheap flour', 'the cast iron range', 'the village oven',
          'the landlord'], 1,
         'Paragraph 4, together with cheaper coal.'),
        ('Some ovens survived where the building also served as a '
         '____________ place.', None, 'meeting',
         'Paragraph 5, in some cases into the 1950s.')]),
  dict(no=3, first=17,
       heading='The cost of a missed appointment',
       kind='Short factual article', qtype='Questions 17-24',
       blurb='A short article about a measured experiment. Read the '
             'questions first.',
       paras=[
        'A group of dental practices in one region measured something '
        'that is usually guessed at: how many patients fail to arrive, '
        'and what makes the number fall. Across eleven practices and '
        'two years, about one appointment in eight was missed without '
        'notice, a figure the practices had previously estimated at one '
        'in twenty.',
        'The first thing they tried was charging for a missed '
        'appointment. It worked, in the narrow sense that missed '
        'appointments fell by about a fifth. It also produced an '
        'effect nobody had asked for. The patients who stopped missing '
        'appointments were not the same people as the patients who '
        'stopped coming at all. Attendance among the poorest patients '
        'fell measurably, and two practices withdrew the charge for '
        'that reason.',
        'The second thing they tried cost almost nothing. A text '
        'message two days before, naming the time and the dentist, cut '
        'missed appointments by about a third, which was more than the '
        'charge had achieved. A second message on the morning itself '
        'added very little, and the practices concluded that the useful '
        'message is the one sent while there is still time to '
        'rearrange.',
        'The third thing was the one the report recommends most '
        'strongly, and it is an alteration to a sentence rather than '
        'to a system. Reception staff stopped telling patients the day '
        'and time of the appointment. They started asking each patient '
        'to say back the day and time they had written down. Missed '
        'appointments among patients who had answered that question '
        'fell by about a quarter, at no cost at all.',
        'The report is careful about what it claims. Eleven practices '
        'in one region is not the country, the three measures were not '
        'tried in isolation from each other, and the practices that '
        'volunteered may be the practices that were already paying '
        'attention. What it does claim is that the cheapest measure was '
        'the most effective, which is the opposite of what the '
        'practices expected when they began.'],
       items=[
        ('About one appointment in ____________ was missed without '
         'notice.', None, 'eight',
         'Paragraph 1, against an estimate of one in twenty.'),
        ('Charging cut missed appointments by about a '
         '____________.', None, 'fifth',
         'Paragraph 2, in the narrow sense that it worked.'),
        ('Whose attendance fell when a charge was introduced?', None,
         'the poorest patients',
         'Paragraph 2, which led two practices to withdraw it.'),
        ('A text message ____________ days before cut misses by a '
         'third.', None, 'two',
         'Paragraph 3, naming the time and the dentist.'),
        ('What did a second message on the morning itself add?',
         ['a third', 'a quarter', 'nothing at all', 'very little'], 3,
         'Paragraph 3: the useful message leaves time to '
         'rearrange.'),
        ('Staff began asking patients to state the day and '
         '____________ they had written down.', None, 'time',
         'Paragraph 4, instead of telling them.'),
        ('That question cut misses by about a ____________.', None,
         'quarter', 'Paragraph 4, at no cost at all.'),
        (
         'The report claims the ____________ measure was the most '
         'effective.', None, 'cheapest',
         'Paragraph 5, the opposite of what was expected.')])])
