"""Physical Sciences, Level 1: ten question sets."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

Q = '«%s»'.__mod__
FIELD, LEVEL = 'PHY', 1

SETS = []

# --- 1 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='PHY-S01-L1',
    ar=dict(
        khulasa='حجر أملس من قاع نهر إير يُوضع على ميزان مختبري، وهو آلة تقايس وزنًا مجهولًا '
                'بوزن معلوم، فتكون القراءة ثمانية وأربعين غرامًا ومئتين وثلاثة عشر من الألف. '
                'ثمّ يُرفع ويُعاد فتتغيّر القراءة، وإحدى عشرة وزنة متوالية تعطي أحد عشر '
                'رقمًا تختلف في المنزلة الثالثة من الكسر وأحيانًا في الثانية.',
        maana='المعنى أنّ شيئًا لم يُفعل بالحجر بين الوزنات: لم يُكسر ولم يُبلّ ولم يُدفّأ. '
              'فللحجر كتلة واحدة وقد أعطت الآلة أحد عشر جوابًا. ولبعض التبدّد أسبابٌ ظاهرة: '
              'باب يُفتح فيحرّك الهواء، ومنضدة تحمل رجفة من ممرّ، وبصمةُ أصبع تضيف غشاءً من '
              'زيت له وزن، وغرفة تدفأ فيتوسّع معدن الميزان.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الظاهرة: ليست هذه أخطاءً '
                  'بالمعنى المعتاد، ولم يكتب أحد رقمًا خطأً، وإنّما هي حدود الترتيب '
                  'المستعمل، فيُحتفظ بالأرقام كلّها ويؤخذ متوسّطها ويُسجّل تبدّدها.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة القائمة وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن تُختار القراءة الأحسن مظهرًا، مع أنّ '
             'النصّ ينصّ على خلاف ذلك. ويقترن المقطع بالمقطع الحادي والسبعين في أسئلة '
             'النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['A door opening moves the air near the balance',
                   'A measurement is a best figure together with a width',
                   'A careful worker picks the reading that looks best',
                   'The stone was taken from the bed of the river Aire'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'true_not_asked'},
             why='The text shows eleven readings of one unchanged stone and says a result properly '
                 'gives an average and the spread, which is a best figure and a width.',
             trap='C states the course the text says a careful worker does not take.'),
        dict(stem='According to the text, what was the average of the eleven weighings?',
             opts=['It was 48.213 grams, the first reading',
                   'It was 48.209 grams, the second reading',
                   'It was 0.002 grams, the stated spread',
                   'It was 48.211 grams, the average taken'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'near_miss'},
             why='The text says the eleven numbers are kept and their average is taken, which here '
                 'is 48.211 grams.',
             trap='A gives the first of the eleven readings rather than their average.'),
        dict(claim='the spread is not a record of carelessness',
             stem='Which quotation from the text most strongly supports the claim that the spread '
                  'is not a record of carelessness?',
             opts=[Q('Nobody wrote the number down wrong. They are the limits of the '
                     'arrangement being used'),
                   Q('Eleven weighings in a row give eleven numbers. They differ in the third '
                     'decimal place'),
                   Q('A result given as 48.213 grams on its own looks more confident and tells '
                     'the reader less'),
                   Q('Working laboratories record how many repeats were made')],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation says nobody recorded a number wrongly and names the spread as a '
                 'limit of the arrangement rather than an error of record.',
             trap='B reports the spread rather than saying what kind of thing it is.'),
        dict(carrier='They are the limits of the arrangement being used. A worker who wanted a '
                     'narrower spread would therefore have to ___',
             stem='Which choice most logically completes the text?',
             opts=['weigh the stone once and record that',
                   'report the reading without any width',
                   'change the balance, the bench or the room',
                   'warm the stone before each weighing'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'imported'},
             why='The spread comes from the arrangement rather than from errors of record, so '
                 'narrowing it means altering the instrument or the conditions around it.',
             trap='A would hide the spread rather than reduce it.'),
        dict(target='measure',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('measure'),
             opts=['take a careful step', 'determine the size of', 'judge the worth of',
                   'mark out in portions'],
             key='B', moves={'A': 'imported', 'C': 'near_miss', 'D': 'imported'},
             why='The spread is called the honest statement of how well the balance can measure '
                 'the stone, so the word names finding the size of a quantity.',
             trap='C reads the word as an estimate of value rather than of magnitude.'),
        dict(stem='Which choice best describes the function of the list of sources of spread?',
             opts=['It shows that the spread has causes and not blame',
                   'It introduces the average of the eleven readings',
                   'It argues that the balance was badly built',
                   'It reports the mass the stone actually has'],
             key='A', moves={'B': 'detail_swap', 'C': 'wrong_direction', 'D': 'imported'},
             why='The list of the door, the vibration, the oil and the warming room is followed at '
                 'once by the statement that none of these is a mistake in the ordinary sense.',
             trap='C blames the instrument, though the text treats the spread as a limit of the '
                  'arrangement.'),
        dict(sibling='PHY-S01-L2',
             sibling_gloss='Text 2 is passage 71 of this book. It distinguishes random error, '
                           'which falls as the square root of the number of readings, from '
                           'systematic error, which is identical in every reading and survives '
                           'averaging.',
             stem='Text 1 records eleven readings of one stone. Based on Text 2, what would be '
                  'added to that record?',
             opts=['The spread should be reported along with the average',
                   'Air movement and vibration each add to the spread',
                   'Averaging eleven readings removes every kind of error',
                   'A kind of error that averaging would not remove'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'wrong_direction'},
             why='Text 2 names a systematic error that is the same in every reading, which '
                 'averaging cannot touch and which the eleven readings of Text 1 could not '
                 'reveal.',
             trap='A repeats the practice Text 1 already describes rather than adding anything.'),
        dict(carrier='Some of the spread has obvious sources. ___ a door opens and moves the air.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'For example,', 'In conclusion,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'restatement'},
             why='The second sentence gives one of the obvious sources just referred to, so the '
                 'transition must introduce an example rather than a contrast or a conclusion.',
             trap='B sets the opening door against the sentence that promises such sources.'),
        dict(carrier='The stone has one mass ___ and the instrument has given eleven answers.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['mass, and', 'mass and', 'mass; and', 'mass and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the eleven answers is independent, so the conjunction joining '
                 'it to the clause about the single mass takes a comma before it.',
             trap='B leaves the clause about the mass and the clause about the answers unmarked.'),
        dict(goal='explain why a single reading tells a reader less',
             notes=['Eleven weighings of the same stone gave eleven numbers.',
                    'The average of the eleven was 48.211 grams.',
                    'The spread of the eleven is recorded as well.',
                    'A result given as one number alone looks more confident and tells the reader '
                    'less.'],
             stem='The student wants to explain why a single reading tells a reader less. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['Eleven weighings of the same stone gave eleven different numbers',
                   'The average of the eleven weighings was 48.211 grams',
                   'Eleven readings of one stone differ, so a figure without a spread hides how '
                   'well the balance can do',
                   'A result given as one number alone looks more confident'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'restatement'},
             why='Only this choice joins the differing readings to what a bare figure conceals, '
                 'which is why one number carries less information than two.',
             trap='D repeats the claim to be explained without giving the reason behind it.'),
    ]))

# --- 2 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='PHY-S02-L1',
    ar=dict(
        khulasa='في الثاني من آب سنة ألف وتسعمئة وإحدى وسبعين، في ختام آخر مسير لرحلة أبولو '
                'الخامسة عشرة، وقف ديفيد سكوت أمام كاميرا على سطح القمر، وفي يمينه مطرقة '
                'جيولوجيّ تزن نحو رطل ونصف على الأرض، وفي شماله ريشة صقر، فأفلتهما في اللحظة '
                'نفسها فسقطتا معًا وبلغتا الأرض معًا.',
        maana='المعنى أنّ هذا البيان يفشل على الأرض في كلّ مرّة: الريشة تهيم وتدور وتصل '
              'متأخّرة كثيرًا. والسبب ليس الوزن بل الهواء، فللريشة سطح واسع بالنسبة إلى '
              'كتلتها الصغيرة، فالهواء الذي لا بدّ أن تزحزحه يبطّئها كثيرًا، والهواء نفسه لا '
              'يكاد يؤثّر في المطرقة.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الظاهرة: والسقوط يُظهر '
                  'أمرًا ثانيًا أيضًا، فالجسمان بلغا الأرض في نحو ثانية وثلث من علوّ خمسة '
                  'أقدام، وهذا أبطأ من السقوط نفسه على الأرض، لأنّ جذب القمر نحو سدس جذب '
                  'الأرض.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الجملة الممهّدة '
             'وعن إكمال النصّ. والفخّ المتوقّع هنا أن يُنسب الفرق إلى الوزن، مع أنّ النصّ '
             'ينفي ذلك ويسمّي الهواء. ويقترن المقطع بالمقطع الثاني والسبعين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Scott had suggested the demonstration himself',
                   'The hammer fell faster because it weighed more',
                   'Removing the air removes the difference between the two falls',
                   'The film of the drop runs for about a second'],
             key='C', moves={'A': 'true_not_asked', 'B': 'wrong_direction', 'D': 'underreach'},
             why='The text says the reason is not weight but air, and that on the Moon, with no '
                 'air to speak of, the hammer and the feather fell and landed together.',
             trap='B gives the explanation the text rules out in so many words.'),
        dict(stem='According to the text, why does the demonstration fail on Earth?',
             opts=['The feather has a large surface for its small mass',
                   'The hammer weighs about one and a half pounds',
                   'The Earth pulls six times harder than the Moon',
                   'The feather has more mass than the hammer'],
             key='A', moves={'B': 'true_not_asked', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The text says a feather has a large surface for its small mass, so the air it '
                 'must push aside slows it a great deal while the same air barely affects the '
                 'hammer.',
             trap='C names the difference in pull, which the text treats as a separate point.'),
        dict(claim='the demonstration shows two things rather than one',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'demonstration shows two things rather than one?',
             opts=[Q('They fell together and landed together, and the film runs for about one '
                     'and a third seconds'),
                   Q('The fall also shows a second thing. Both objects reached the ground in '
                     'about one and a third seconds from a height of about five feet, which is '
                     'slower than the same drop on Earth'),
                   Q('Galileo had argued for this result in the 1630s without being able to '
                     'produce it cleanly'),
                   Q('A feather has a large surface for its small mass, so the air it must push '
                     'aside slows it a great deal')],
             key='B', moves={'A': 'near_miss', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation announces a second thing and then gives it, the slower fall from '
                 'five feet, which is the two-part reading the claim describes.',
             trap='A reports the first of the two things rather than the presence of a second.'),
        dict(carrier='A sensitive instrument can detect that difference without any dropping at '
                     'all, but a hammer, a feather and a camera make it visible to anyone. The '
                     'value of the demonstration is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['that no instrument could have measured it',
                   'that it took place at the end of the mission',
                   'that it corrected what Galileo had argued',
                   'that it shows rather than reports the result'],
             key='D', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'C': 'wrong_direction'},
             why='The text grants that an instrument could find the difference and credits the '
                 'drop with making it visible to anyone, so the value lies in the showing.',
             trap='A denies the instrument that the same sentence allows.'),
        dict(target='detect',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('detect'),
             opts=['uncover a crime', 'explain the cause of', 'find by measurement',
                   'watch on a screen'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'imported'},
             why='The sentence says a sensitive instrument can detect the difference without any '
                 'dropping, so the word names finding it by measurement.',
             trap='B goes beyond detection to the explanation the instrument does not give.'),
        dict(stem='Which choice best describes the function of the sentence about the same '
                  'demonstration on Earth?',
             opts=['It introduces the pull at the surface of the Moon',
                   'It sets up the question that the air then answers',
                   'It argues that the lunar result was a trick',
                   'It reports the date of the Apollo 15 walk'],
             key='B', moves={'A': 'detail_swap', 'C': 'overreach', 'D': 'detail_swap'},
             why='The sentence says the demonstration fails every time on Earth, which is the '
                 'puzzle the next two sentences resolve by naming air rather than weight.',
             trap='C rejects a result the text treats as genuine.'),
        dict(sibling='PHY-S02-L2',
             sibling_gloss='Text 2 is passage 72 of this book. It explains that braking force from '
                           'friction is roughly proportional to the weight on the tires, and that '
                           'braking distance roughly quadruples when speed doubles because '
                           'kinetic energy rises with the square of speed.',
             stem='Text 1 shows two objects falling alike. Based on Text 2, what would be added to '
                  'that showing?',
             opts=['Where weight does make a difference after all',
                   'Air resistance slows a feather more than a hammer',
                   'The Moon pulls about one sixth as hard as the Earth',
                   'Braking distance rises in proportion to the speed itself'],
             key='A', moves={'B': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 ties the force available for braking to the weight on the tires, so '
                 'weight matters there in a way the falling demonstration of Text 1 rules out.',
             trap='B repeats the explanation Text 1 has already given for the Earth case.'),
        dict(carrier='The reason is not weight. The reason is air. ___ remove the air and the '
                     'difference goes with it.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'In other words,', 'Accordingly,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'restatement'},
             why='The third sentence draws the consequence of naming air as the cause, so the '
                 'transition must mark a result rather than a contrast or a restatement.',
             trap='C treats a conclusion about removing the air as another way of naming the '
                  'cause.'),
        dict(carrier='He let go of both at the same moment ___ they fell together and landed '
                     'together.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['moment, they', 'moment. They', 'moment they', 'moment, and, they'],
             key='B', moves={'A': 'comma_splice', 'C': 'run_on', 'D': 'misplaced'},
             why='The clause saying they fell and landed together is a complete sentence, so a '
                 'period separates it from the clause about letting go.',
             trap='A splices the clause about the fall onto the clause about letting go with a '
                  'comma.'),
        dict(goal='explain why the demonstration had to be done on the Moon',
             notes=['A feather has a large surface for its small mass, so air slows it a great '
                    'deal.',
                    'The Moon has no air to speak of.',
                    'Galileo could not remove the air from a room.',
                    'The hammer and the feather fell together and landed together.'],
             stem='The student wants to explain why the demonstration had to be done on the Moon. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['A feather has a large surface for its small mass',
                   'The hammer and the feather fell together and landed together',
                   'The Moon has no air to speak of anywhere on it',
                   'Air is what separates the two falls, and nobody on Earth could remove it from '
                   'a room'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'underreach'},
             why='Only this choice names air as the cause and the impossibility of removing it on '
                 'Earth, which together are why the Moon was needed.',
             trap='C gives the condition on the Moon without saying why it could not be had on '
                  'Earth.'),
    ]))

# --- 3 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='PHY-S03-L1',
    ar=dict(
        khulasa='فوق بلدة فويرز في مرتفعات إسكتلندا بحيرة، وتحتها محطّة كهرباء. والبحيرة '
                'أعلى من قاعة العنفات بنحو مئة وسبعين مترًا، والماء ينزل في أنبوب فولاذي '
                'بثقله فيصدم عجلة في الأسفل فيديرها، والعجلة تدير مولّدًا، والمولّد يرسل '
                'الكهرباء في أسلاك إلى بيوت بعضها على أربعين ميلًا.',
        maana='المعنى أنّ شيئًا في تلك السلسلة لا يخلق طاقة، بل كلّ خطوة تأخذ طاقة في صورة '
              'وتردّ معظمها في صورة أخرى: فللماء العالي طاقة بموضعه، وللماء الساقط طاقة '
              'بحركته، وللمولّد الدائر طاقة كهربية، والمصباح يحوّل معظمها ضوءًا وحرارة.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الظاهرة: في كلّ خطوة يخرج '
                  'بعض ما دخل في غير الصورة النافعة، وهذه الخسائر ليست كبيرة في محطّة '
                  'حديثة، فالعنفة والمولّد الجيّدان يسلّمان نحو تسعة أعشار ما يحمله الماء '
                  'الساقط.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الجملة وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسب المولّد خالقًا للطاقة، مع أنّ '
             'النصّ ينفي ذلك. ويقترن المقطع بالمقطع الثالث والسبعين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The station at Foyers has worked since 1896',
                   'The generator creates the energy the houses use',
                   'A light-emitting diode turns forty percent into light',
                   'A chain of conversions is held back by its worst step'],
             key='D', moves={'A': 'underreach', 'B': 'wrong_direction', 'C': 'true_not_asked'},
             why='The text traces energy from the lake to the bulb, says nothing in the chain '
                 'creates energy, and ends by naming the worst step as the one that sets the '
                 'efficiency.',
             trap='B contradicts the text, which says nothing in that chain creates energy.'),
        dict(stem='According to the text, how much of the falling energy does a good turbine and '
                  'generator deliver?',
             opts=['About five percent of it', 'About nine tenths of it',
                   'About forty percent of it', 'All of it without loss'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'overreach'},
             why='The text says a good turbine and generator together deliver about nine tenths '
                 'of the energy that the falling water carries.',
             trap='A gives the share an old filament lamp turned into light.'),
        dict(claim='the biggest saving is not made at the power station',
             stem='Which quotation from the text most strongly supports the claim that the biggest '
                  'saving is not made at the power station?',
             opts=[Q('Water high up has energy because of its position'),
                   Q('Those losses are not large in a modern station'),
                   Q('That is why replacing the bulbs in a town saves more energy than improving '
                     'the turbines'),
                   Q('The whole arrangement has been working since 1896')],
             key='C', moves={'A': 'true_not_asked', 'B': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation says in so many words that changing the bulbs saves more than '
                 'improving the turbines, which locates the saving away from the station.',
             trap='B says the station loses little rather than where the saving is to be had.'),
        dict(carrier='The chain is only as efficient as its worst step, and the worst step is '
                     'usually the one closest to the user. A town that improved its turbines '
                     'alone would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['gain very little for the money spent',
                   'remove the losses from the chain entirely',
                   'make the bulbs the strongest step',
                   'raise the energy the falling water carries'],
             key='A', moves={'B': 'overreach', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='If the chain is limited by its worst step and that step is at the user, then '
                 'improving an already efficient step changes the total very little.',
             trap='B promises an end to losses that occur at every step of the chain.'),
        dict(target='converts',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('converts'),
             opts=['persuade to a belief', 'carry from place to place', 'store for later use',
                   'turn into another form'],
             key='D', moves={'A': 'imported', 'B': 'near_miss', 'C': 'wrong_direction'},
             why='The bulb converts most of the electrical energy into light and heat, so the '
                 'word names the change from one form of energy to another.',
             trap='B reads the word as movement, though the sentence is about a change of form.'),
        dict(stem='Which choice best describes the function of the sentence about the old bulb?',
             opts=['It introduces the station at Foyers for the first time',
                   'It concedes that the turbines lose most of the energy',
                   'It identifies the step that limited the whole chain',
                   'It reports the height of the lake above the hall'],
             key='C', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='The sentence calls the filament lamp the weak link for a century and gives the '
                 'five percent figure, which the closing rule about the worst step generalizes.',
             trap='B moves the large loss to the turbines, which the text says lose little.'),
        dict(sibling='PHY-S03-L2',
             sibling_gloss='Text 2 is passage 73 of this book. It reports that a modern '
                           'coal-fired plant turns about forty percent of the energy in its fuel '
                           'into electricity, and that the ceiling for any heat engine is set by '
                           'its hot and cold temperatures.',
             stem='Text 1 follows energy from a lake to a bulb. Based on Text 2, what would be '
                  'added to that account?',
             opts=['A turbine and generator deliver about nine tenths of what reaches them',
                   'A limit that no improvement in engineering can pass',
                   'The chain is only as efficient as its worst step',
                   'Water power is held to forty percent by the same ceiling'],
             key='B', moves={'A': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 reports a ceiling fixed by the hot and cold temperatures of a heat '
                 'engine, which is a kind of limit the water chain in Text 1 never meets.',
             trap='C repeats the rule Text 1 closes with rather than adding anything new.'),
        dict(carrier='Nothing in that chain creates energy. ___ each step takes energy in one form '
                     'and gives most of it back in another.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Instead,', 'By contrast,', 'Even so,', 'For instance,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The second sentence says what the steps do in place of creating energy, so the '
                 'transition must mark a substitution rather than a contrast or an example.',
             trap='D reads the general account of the steps as one example among several.'),
        dict(carrier='Nothing in that chain creates energy ___ each step takes energy in one form '
                     'and gives most of it back in another.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['energy, each', 'energy each', 'energy. Each', 'energy, and, each'],
             key='C', moves={'A': 'comma_splice', 'B': 'run_on', 'D': 'misplaced'},
             why='The clause about what each step does is a complete sentence, so a period '
                 'separates it from the clause denying that energy is created.',
             trap='A splices the clause about the steps onto the clause about creation with a '
                  'comma.'),
        dict(goal='explain why changing the bulbs beats improving the turbines',
             notes=['A good turbine and generator deliver about nine tenths of the energy.',
                    'A filament lamp turned about five percent of its electricity into light.',
                    'The chain is only as efficient as its worst step.',
                    'The worst step is usually the one closest to the user.'],
             stem='The student wants to explain why changing the bulbs beats improving the '
                  'turbines. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['The turbines already pass nine tenths of the energy while the old lamp passed '
                   'five percent, so the chain is limited at the lamp',
                   'A good turbine and generator deliver about nine tenths of the energy',
                   'A filament lamp turned about five percent of its electricity into light',
                   'The worst step in the chain is usually the one closest to the user'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice sets the two figures side by side and names the limiting step, '
                 'which is what shows where an improvement pays.',
             trap='C gives the weak figure alone without the strong one to compare it against.'),
    ]))

# --- 4 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='PHY-S04-L1',
    ar=dict(
        khulasa='وصف روبرت بويل سلوك الهواء المضغوط سنة ألف وستّمئة واثنتين وستّين، وكلّ من '
                'عنده دراجة يقدر على إعادة لبّ ذلك: انفخ إطارًا من الفراغ فتصير أسطوانة '
                'المنفاخ حارّة في اليد بعد نحو ثلاثين كبسة، وأحرّ أجزائها قاعدتها القريبة من '
                'الصمّام.',
        maana='المعنى أنّ لا شيء يحرق ولا شيء يحتكّ احتكاكًا يكفي لتفسير ذلك، وأنّ الحرارة '
              'من الهواء في الداخل. فالهواء فراغ في معظمه، وجزيئاته متباعدة سريعة، والكبسة '
              'تضغط كمًّا ثابتًا منه في حجم أصغر، والمكبس النازل يعمل عملًا على الهواء فيزيد '
              'حركة جزيئاته.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الظاهرة: والعلاقة تعمل في '
                  'الجهة المعاكسة أيضًا، فإخراج الهواء من إطار ممتلئ بسرعة يعطي تيّارًا '
                  'باردًا محسوسًا، لأنّ الهواء يتوسّع وهو يخرج، والثلّاجة تستعمل هذا '
                  'بعينه.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الجمل الختامية '
             'وعن إكمال النصّ. والفخّ المتوقّع هنا أن تُنسب الحرارة إلى الاحتكاك، مع أنّ '
             'النصّ ينفي ذلك. ويقترن المقطع بالمقطع الرابع والسبعين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Work done on a gas raises its temperature',
                   'Friction in the pump explains the heat in the barrel',
                   'Boyle described the behavior of squeezed air in 1662',
                   'A thermometer on the barrel shows a rise of twenty degrees'],
             key='A', moves={'B': 'wrong_direction', 'C': 'underreach', 'D': 'underreach'},
             why='The text says the piston does work on the air, that the work goes into the '
                 'motion of the molecules, and that faster molecules are what a thermometer '
                 'reports as heat.',
             trap='B names a cause the text rules out, since nothing is rubbing hard enough.'),
        dict(stem='According to the text, which part of the pump is hottest?',
             opts=['The handle at the top of the barrel', 'The tire into which the air is pushed',
                   'The base of the pump, nearest the valve',
                   'The thermometer taped to the barrel'],
             key='C', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'D': 'detail_swap'},
             why='The text says the base of the pump, nearest the valve, is the hottest part after '
                 'about thirty strokes.',
             trap='A puts the heat at the opposite end from the one the text names.'),
        dict(claim='the same relation works in the opposite direction',
             stem='Which quotation from the text most strongly supports the claim that the same '
                  'relation works in the opposite direction?',
             opts=[Q('Air is mostly empty space. The molecules in it are far apart and moving '
                     'fast'),
                   Q('The piston moving down does work on the air, and that work goes into the '
                     'motion of the molecules'),
                   Q('A thermometer taped to the barrel will show a rise of twenty degrees or '
                     'more on a cool day'),
                   Q('Let the air out of a full tire quickly and the escaping stream is '
                     'noticeably cold, because the air expands as it leaves')],
             key='D', moves={'A': 'true_not_asked', 'B': 'wrong_direction', 'C': 'near_miss'},
             why='The quotation reports cooling where the gas expands, which is the reverse of the '
                 'heating that squeezing produced and so shows the relation running both ways.',
             trap='B gives the forward case, the squeezing that warms the air.'),
        dict(carrier='Pressure, volume and temperature cannot be changed one at a time. Fix any '
                     'two and the third is decided. A gas held at constant volume and then warmed '
                     'must therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['keep the same pressure as before', 'rise in pressure as it is heated',
                   'expand to twice its former volume', 'cool as the molecules move faster'],
             key='B', moves={'A': 'wrong_direction', 'C': 'overreach', 'D': 'wrong_direction'},
             why='With the volume fixed, only the pressure is left free, so warming the gas must '
                 'show itself as a higher pressure rather than as a change of volume.',
             trap='A leaves all three quantities unchanged, which the stated relation forbids.'),
        dict(target='transfer',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('transfer'),
             opts=['pass from one place to another', 'change into another form',
                   'build up in one spot', 'measure with a thermometer'],
             key='A', moves={'B': 'near_miss', 'C': 'wrong_direction', 'D': 'imported'},
             why='The refrigerator lets the heat transfer to the kitchen through a radiator, so '
                 'the word names its passage from the gas to the room.',
             trap='B reads the word as a change of form rather than a movement of heat.'),
        dict(stem='Which choice best describes the function of the sentences about the '
                  'refrigerator?',
             opts=['They introduce the squeezing of air for the first time',
                   'They concede that the relation fails in a machine',
                   'They report the rise a thermometer shows on the barrel',
                   'They put both directions of the relation to work at once'],
             key='D', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='The refrigerator squeezes the gas until it is hot, sheds that heat, and then '
                 'lets the gas expand inside, which uses the heating and the cooling in turn.',
             trap='B denies the relation that the machine is said to use.'),
        dict(sibling='PHY-S04-L2',
             sibling_gloss='Text 2 is passage 74 of this book. It states the relation between '
                           'pressure, volume and absolute temperature, reports that dry rising '
                           'air cools at about ten degrees per thousand meters, and names the '
                           'laws it was assembled from.',
             stem='Text 1 shows a pump growing hot. Based on Text 2, what would be added to that '
                  'showing?',
             opts=['Squeezing a gas raises the temperature of the gas',
                   'A refrigerator lets a compressed gas expand inside',
                   'The same relation at work in the open air',
                   'Rising air warms at ten degrees per thousand meters'],
             key='C', moves={'A': 'restatement', 'B': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 applies the relation to dry air rising in the atmosphere, which carries '
                 'the pump and the refrigerator of Text 1 out of the workshop.',
             trap='A repeats the very effect Text 1 sets out to explain.'),
        dict(carrier='Nothing is burning and nothing is rubbing hard enough to explain it. ___ the '
                     'heat comes from the air inside.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Likewise,', 'Rather,', 'For instance,', 'In conclusion,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'near_miss', 'D': 'restatement'},
             why='The second sentence names the real source in place of the two the first rules '
                 'out, so the transition must mark a substitution.',
             trap='C treats the real source as one example of the causes just denied.'),
        dict(carrier='Nothing is burning ___ and nothing is rubbing hard enough to explain it.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['burning; and', 'burning and', 'burning: and', 'burning, and'],
             key='D', moves={'A': 'wrong_mark', 'B': 'run_on', 'C': 'wrong_mark'},
             why='The clause about nothing rubbing hard enough is independent, so the conjunction '
                 'joining it to the clause about burning takes a comma before it.',
             trap='B leaves the clause about burning and the clause about rubbing unmarked.'),
        dict(goal='explain why a pump barrel warms without a flame',
             notes=['A pump stroke squeezes a fixed quantity of air into a smaller volume.',
                    'The piston does work on the air.',
                    'That work goes into the motion of the molecules.',
                    'Faster molecules are what a thermometer reports as a higher temperature.'],
             stem='The student wants to explain why a pump barrel warms without a flame. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['A pump stroke squeezes the air into a smaller volume',
                   'The piston does work on the air, so the molecules move faster and a '
                   'thermometer reads the rise',
                   'Faster molecules are what a thermometer reports as a temperature',
                   'The work of the piston goes into the motion of the molecules'],
             key='B', moves={'A': 'underreach', 'C': 'restatement', 'D': 'underreach'},
             why='Only this choice runs the whole chain from the work of the piston to the reading '
                 'on the thermometer, which is what the goal asks for.',
             trap='A names the squeezing without saying how it reaches the thermometer.'),
    ]))

# --- 5 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='PHY-S05-L1',
    ar=dict(
        khulasa='تُشغَّل غلّاية ومحمّصة ومكواة في مطبخ واحد فتنطفئ الأنوار، وفي الخزانة تحت '
                'السلّم مفتاح صغير قد انتقل إلى وضع الإيقاف. لم يُكسر شيء: فالمفتاح قاطع '
                'دارة، أي جهاز يفتح الدارة إذا سرى فيها تيّار أكبر من اللازم، وقد فعل ما '
                'نُصّب له.',
        maana='المعنى أنّ الكهرباء في البيت تشبه الماء في الأنابيب: فالجهد عند المقبس كالضغط '
              'في الأنبوب الرئيس، والتيّار كالجريان بالغالونات في الدقيقة، ومقاومة ما '
              'يُوصَل تحدّد كم يجري عند ضغط معلوم. فللغلّاية مقاومة صغيرة لأنّها تُحوّل '
              'الكهرباء حرارةً سريعًا.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الظاهرة: الخطر ليس في '
                  'الجهاز بل في السلك المدفون في الجبس، فهو لا يُفحص ولا يقدر على طرح '
                  'حرارته، والقاطع مقيس ليحمي ذلك السلك لا الغلّاية، ومضبوط تحت التيّار '
                  'الذي يُحمّيه.',
        sila='في اختبار سات يكثر السؤال عن وظيفة التشبيه وعن الدليل الذي يسند دعوى وعن إكمال '
             'النصّ. والفخّ المتوقّع هنا أن يُقال إنّ القاطع يحمي الجهاز، مع أنّ النصّ يقول '
             'إنّه يحمي السلك. ويقترن المقطع بالمقطع الخامس والسبعين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['A table lamp draws less than half an amp',
                   'The breaker is there to protect the wire in the wall',
                   'The breaker is sized to protect the kettle',
                   'A kettle draws about thirteen amps in a British house'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text says the danger is the wire buried in the plaster and that the breaker '
                 'is sized to protect that wire and not the kettle.',
             trap='C reverses the sentence that names what the breaker protects.'),
        dict(stem='According to the text, why is the buried cable the dangerous part?',
             opts=['Because it draws more current than a kettle does',
                   'Because its resistance is lower than that of a kettle',
                   'Because the breaker is set above its safe current',
                   'Because it cannot be inspected or shed its heat'],
             key='D', moves={'A': 'imported', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='The text says the danger is the wire in the plaster, which cannot be inspected '
                 'and cannot shed its heat, so it warms and ages the insulation around it.',
             trap='C reverses the setting of the breaker, which is placed below that current.'),
        dict(claim='the comparison with water is meant to make the quantities clear',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'comparison with water is meant to make the quantities clear?',
             opts=[Q('The voltage at the socket is like the pressure in a main. The current is '
                     'like the flow in gallons a minute'),
                   Q('A kettle has low resistance because it is supposed to turn electricity '
                     'into heat quickly'),
                   Q('In the cupboard under the stairs a small switch has moved to the off '
                     'position'),
                   Q('A householder who fits a larger breaker to stop the nuisance has removed '
                     'the only thing standing between the kitchen and the timber')],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation matches voltage to pressure and current to flow in gallons a '
                 'minute, which is the comparison being used to make the quantities clear.',
             trap='B uses resistance to explain the kettle rather than drawing the comparison '
                  'itself.'),
        dict(carrier='It is set below the current at which the cable would overheat, so the '
                     'circuit is broken long before the plaster is. A breaker that tripped only '
                     'at the cable limit would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['protect the kitchen just as well',
                   'prevent the kettle from working at all',
                   'leave no margin before the wire was damaged',
                   'be smaller than the one now fitted'],
             key='C', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'D': 'wrong_direction'},
             why='The margin comes from setting the breaker below the overheating current, so a '
                 'breaker at that limit would allow the wire to reach it before cutting off.',
             trap='A denies the margin that the preceding sentence is built to establish.'),
        dict(target='flows',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('flows'),
             opts=['spills over an edge', 'passes along steadily', 'gathers in one place',
                   'rises in pressure'],
             key='B', moves={'A': 'imported', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The breaker opens the circuit when too much current flows through it, so the '
                 'word names the passing of current along the wire.',
             trap='D names the pressure in the comparison rather than the movement itself.'),
        dict(stem='Which choice best describes the function of the comparison with a water main?',
             opts=['It gives a reader a picture of three quantities at once',
                   'It introduces the circuit breaker for the first time',
                   'It argues that electricity is a kind of liquid',
                   'It reports the current a table lamp draws'],
             key='A', moves={'B': 'detail_swap', 'C': 'overreach', 'D': 'detail_swap'},
             why='The text matches voltage to pressure, current to flow and resistance to what '
                 'decides the flow, which puts all three quantities in front of a reader '
                 'together.',
             trap='C turns a comparison into a claim about what electricity is.'),
        dict(sibling='PHY-S05-L2',
             sibling_gloss='Text 2 is passage 75 of this book. It reports that the power lost as '
                           'heat in a conductor is the current squared times the resistance, that '
                           'halving the cross-section of a wire roughly doubles its resistance, '
                           'and that transmission at very high voltage keeps losses low.',
             stem='Text 1 explains what a breaker protects. Based on Text 2, what would be added '
                  'to that explanation?',
             opts=['A kettle has low resistance and draws a large current',
                   'The wire in the wall cannot shed its heat easily',
                   'A thicker wire has a higher resistance than a thin one',
                   'The arithmetic that says how fast the cable heats'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'wrong_direction'},
             why='Text 2 gives the heating as the current squared times the resistance, which puts '
                 'a figure on the warming that Text 1 describes only in words.',
             trap='B repeats the point Text 1 makes about the buried cable.'),
        dict(carrier='The danger is not the appliance. The danger is the wire buried in the '
                     'plaster, which cannot be inspected and cannot shed its heat. ___ push too '
                     'much current through it and it warms.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'As a result,', 'In other words,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'restatement'},
             why='The warming follows from a wire that cannot shed its heat, so the transition '
                 'must mark a consequence rather than a contrast or a restatement.',
             trap='D treats the warming as another way of saying the wire is buried.'),
        dict(carrier='Nothing is broken ___ the switch is a circuit breaker and it has done what '
                     'it was installed to do.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['broken. The', 'broken, the', 'broken the', 'broken, and, the'],
             key='A', moves={'B': 'comma_splice', 'C': 'run_on', 'D': 'misplaced'},
             why='The clause about the switch being a circuit breaker is a complete sentence, so '
                 'a period separates it from the clause saying nothing is broken.',
             trap='B splices the clause about the switch onto the clause about nothing being '
                  'broken.'),
        dict(goal='explain why fitting a larger breaker is dangerous',
             notes=['The breaker is sized to protect the wire and not the kettle.',
                    'It is set below the current at which the cable would overheat.',
                    'The wire in the wall cannot be inspected and cannot shed its heat.',
                    'In the worst case it sets fire to the joists beside it.'],
             stem='The student wants to explain why fitting a larger breaker is dangerous. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['The breaker is sized to protect the wire and not the kettle',
                   'The wire in the wall cannot be inspected or shed its heat',
                   'A larger breaker lets the buried cable reach the current that overheats it, '
                   'and that cable can set fire to the joists',
                   'A kettle, a toaster and an iron on one circuit will trip it'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice joins the raised limit to the overheating cable and the fire it '
                 'can start, which is the danger the goal asks about.',
             trap='B names the weakness of the cable without saying what a larger breaker does to '
                  'it.'),
    ]))

# --- 6 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='PHY-S06-L1',
    ar=dict(
        khulasa='كتب بطليموس في هذا الأثر بالإسكندرية في القرن الثاني. أقِم قشّة في كأس ماء '
                'وانظر إليها من الجانب، فتبدو منكسرة عند السطح: الجزء الغارق على زاوية غير '
                'زاوية الجزء الظاهر، وإذا حُرّك الكأس تحرّك الانكسار معه. والقشّة مستقيمة '
                'تمامًا، ومسطرة تُسنَد إليها تُبيّن أنّ انحناءً ماديًّا لم يقع.',
        maana='المعنى أنّ الضوء يسير في الماء أبطأ منه في الهواء بنحو الربع، فإذا عبر شعاعٌ '
              'السطحَ بزاوية تباطأ الجانب الداخل أوّلًا فانحرف الشعاع كلّه، وذلك هو '
              'الانكسار. فكلّ ما يُرى عبر الماء يُرى في موضع منزاح.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الظاهرة: العين لا تملك آلة '
                  'تكشف أنّ الضوء غيّر اتّجاهه في الطريق، فتُخبر عن القشّة حيث يبدو أنّ '
                  'الضوء جاء منه، والقاعدة نفسها تفسّر قائمة طويلة من الأمور المعتادة.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة القائمة وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُقال إنّ القشّة انحنت فعلًا، مع أنّ '
             'النصّ ينفي ذلك بالمسطرة. ويقترن المقطع بالمقطع السادس والسبعين في أسئلة '
             'النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Ptolemy wrote about the effect in the second century',
                   'The straw bends physically where it meets the water',
                   'Light slowed at a surface is bent, and the eye cannot tell',
                   'A spoon in oil looks more broken than one in water'],
             key='C', moves={'A': 'true_not_asked', 'B': 'wrong_direction', 'D': 'underreach'},
             why='The text says light crosses the surface more slowly, the beam swings, and the '
                 'eye has no mechanism for detecting the change of direction.',
             trap='B states the thing the ruler is used to rule out.'),
        dict(stem='According to the text, why does a spoon look more broken in oil than in water?',
             opts=['Oil slows light more than water does',
                   'Oil reflects more light at its surface',
                   'Oil absorbs more light than water does',
                   'Oil bends the spoon itself a little'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The text says a spoon in oil looks more broken because oil slows light more than '
                 'water does.',
             trap='C names one of the other two things a surface does rather than the slowing.'),
        dict(claim='the eye cannot correct for what happened to the light',
             stem='Which quotation from the text most strongly supports the claim that the eye '
                  'cannot correct for what happened to the light?',
             opts=[Q('A ruler laid against it in the air, and then in the water, demonstrates '
                     'that no physical bending has occurred'),
                   Q('The eye has no mechanism for detecting that the light changed direction '
                     'along the way. It reports the straw where the light appears to have come '
                     'from'),
                   Q('A swimming pool looks shallower than it is, which is why bathers misjudge '
                     'the deep end'),
                   Q('Some light is also reflected at the surface, which is why a window shows a '
                     'faint image of the room')],
             key='B', moves={'A': 'near_miss', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation says the eye has no mechanism for detecting the change of '
                 'direction and reports the straw where the light seems to have come from.',
             trap='C gives one consequence of the shift rather than the limit of the eye itself.'),
        dict(carrier='A lens in a pair of spectacles is a piece of glass ground to a curve, so '
                     'that the bending happens in a chosen direction and brings light to a focus '
                     'on the retina. A lens is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['a surface that does not bend light at all',
                   'the only object that slows light down',
                   'a device that removes the shift entirely',
                   'the same effect put to a chosen use'],
             key='D', moves={'A': 'wrong_direction', 'B': 'overreach', 'C': 'overreach'},
             why='The curve is ground so that the same bending the straw shows happens in a '
                 'direction the maker has chosen, which makes the lens a use of the effect.',
             trap='C promises a correction the text does not claim for the lens.'),
        dict(target='absorbed',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('absorbed'),
             opts=['holds the attention of', 'spreads out widely', 'takes in and keeps',
                   'sends back again'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'wrong_direction'},
             why='The text says some light is absorbed by the water, which is why the deep sea is '
                 'dark, so the word names light taken in rather than sent back.',
             trap='D names reflection, which the same sentence treats as the other thing a surface '
                  'does.'),
        dict(stem='Which choice best describes the function of the list of ordinary things?',
             opts=['It introduces the word refraction for the first time',
                   'It shows how far one rule about light reaches',
                   'It concedes that the rule fails in a swimming pool',
                   'It reports the speed of light through water'],
             key='B', moves={'A': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The text says the same rule explains a long list of ordinary things and then '
                 'gives the pool, the spoon, the oil and the spectacle lens in turn.',
             trap='C denies the rule in a case the text uses to illustrate it.'),
        dict(sibling='PHY-S06-L2',
             sibling_gloss='Text 2 is passage 76 of this book. It reports the principle that each '
                           'point on a wavefront acts as a source, and explains why sound, with '
                           'wavelengths around a meter, bends around a doorway while visible '
                           'light casts sharp shadows.',
             stem='Text 1 explains one thing a surface does to light. Based on Text 2, what would '
                  'be added to that explanation?',
             opts=['Why the same rule gives sound and light different behavior',
                   'Light travels more slowly through water than through air',
                   'A surface reflects some of the light that reaches it',
                   'Visible light bends around a doorway as sound does'],
             key='A', moves={'B': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 ties the bending of a wave to its wavelength, which is why sound turns a '
                 'corner and the light in Text 1 leaves a sharp edge.',
             trap='B repeats the fact about water that Text 1 uses to explain the straw.'),
        dict(carrier='The straw is perfectly straight. ___ a ruler laid against it in the air, and '
                     'then in the water, demonstrates that no physical bending has occurred.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'In conclusion,', 'After all,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'restatement'},
             why='The second sentence gives the test that establishes the claim just made, so the '
                 'transition must introduce a reason rather than a contrast or a conclusion.',
             trap='B sets the ruler test against the claim that it supports.'),
        dict(carrier='The straw appears to break at the surface ___ and if the glass is moved the '
                     'break moves with it.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['surface and', 'surface, and', 'surface; and', 'surface and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the break moving with the glass is independent, so the '
                 'conjunction joining it to the clause about the surface takes a comma.',
             trap='A leaves the clause about the break and the clause about the glass unmarked.'),
        dict(goal='explain why the straw looks broken although it is straight',
             notes=['Light travels through water about a quarter more slowly than through air.',
                    'The side of a beam that enters first is slowed first, so the whole beam '
                    'swings.',
                    'The eye has no mechanism for detecting that the light changed direction.',
                    'It reports the straw where the light appears to have come from.'],
             stem='The student wants to explain why the straw looks broken although it is '
                  'straight. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Light travels through water about a quarter more slowly than through air',
                   'The eye has no mechanism for detecting a change of direction',
                   'The beam swings because one side of it is slowed first',
                   'The beam swings at the surface, and the eye reports the straw where the light '
                   'seems to have come from'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'restatement'},
             why='Only this choice joins the swing of the beam to what the eye then does with it, '
                 'which is the two-part reason the appearance has.',
             trap='B names the limit of the eye without saying what happened to the light.'),
    ]))

# --- 7 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='PHY-S07-L1',
    ar=dict(
        khulasa='أثبت أنطوان لافوازييه في السبعينيات من القرن الثامن عشر أنّ الاحتراق تفاعل '
                'مع الأكسجين. قرِّب عود ثقاب من قضيب فولاذي فلا يحدث شيء؛ وقرّبه من وسادة '
                'صوف فولاذي رقيق فيشتعل الصوف ويتوهّج ويسري في الوسادة في جبهة بطيئة تترك '
                'وراءها رمادًا رماديًّا.',
        maana='المعنى أنّ الجسمين معدن واحد من صنف سبيكة واحد، وأحدهما يحترق، والفارق هو '
              'السطح. فالفولاذ يتفاعل مع أكسجين الهواء فيصير أكسيد حديد، وهذا التفاعل لا يقع '
              'إلّا حيث يلتقي المعدن والهواء. فالقضيب الصلب يقدّم سنتيمترات مربّعة قليلة '
              'لكلّ مئة غرام، والمئة نفسها مسحوبةً خيوطًا تقدّم أمتارًا مربّعة.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الظاهرة: الكيمياء لا '
                  'تتغيّر بشكل المعدن وإنّما يتغيّر المعدّل، ولهذا قد تنفجر مطحنة دقيق '
                  'وكيس الدقيق على الرفّ هادئ تمامًا، ولكلّ مادّة مستوى خطر بحسب كلّ حال '
                  'تُقسَّم إليها.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الأمثلة الختامية '
             'وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُقال إنّ الكيمياء تتغيّر '
             'بالشكل، مع أنّ النصّ ينفي ذلك. ويقترن المقطع بالمقطع السابع والسبعين في أسئلة '
             'النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Lavoisier established that burning is a reaction with oxygen',
                   'The chemistry changes with the shape of the metal',
                   'A nine-volt battery will light a pad of steel wool',
                   'The same metal burns or does not, according to how finely divided it is'],
             key='D', moves={'A': 'true_not_asked', 'B': 'wrong_direction', 'C': 'underreach'},
             why='The text sets the bar against the wool, says what differs is surface, and ends '
                 'by saying a substance has a level of danger for each state it is divided into.',
             trap='B contradicts the text, which says only the rate changes with the shape.'),
        dict(stem='According to the text, what does a hundred grams of steel present when drawn '
                  'into fine threads?',
             opts=['A few square centimeters of surface', 'Several square meters of surface',
                   'A hundredth of a millimeter of surface', 'Less surface than the solid bar'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The text says a solid bar presents a few square centimeters for every hundred '
                 'grams and the same mass drawn into fine threads presents several square meters.',
             trap='A gives the surface of the solid bar rather than of the threads.'),
        dict(claim='the difference is one of rate rather than of chemistry',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'difference is one of rate rather than of chemistry?',
             opts=[Q('Steel reacts with oxygen in the air to make iron oxide, which is rust'),
                   Q('Every thread is also thin enough to be heated right through'),
                   Q('The chemistry does not change with the shape of the metal; only the rate '
                     'does'),
                   Q('Fire crews treat a grain silo and a sack of grain as different problems')],
             key='C', moves={'A': 'true_not_asked', 'B': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation says in so many words that the chemistry is unchanged by shape and '
                 'only the rate differs, which is the claim exactly.',
             trap='B explains why a thread lights rather than distinguishing rate from '
                  'chemistry.'),
        dict(carrier='Rust on a gate is the same reaction running at a crawl. It takes years '
                     'because the surface is small, the heat escapes, and a layer of oxide '
                     'shields what is underneath. A gate stripped to bare metal powder would '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['rust in a very much shorter time',
                   'be protected by the oxide layer still',
                   'undergo an entirely different reaction',
                   'escape the reaction for want of surface'],
             key='A', moves={'B': 'wrong_direction', 'C': 'near_miss', 'D': 'wrong_direction'},
             why='The three reasons the gate rusts slowly are a small surface, escaping heat and a '
                 'shielding oxide, and powdering the metal removes the first and the third.',
             trap='D reverses the relation, since powder has far more surface than a gate.'),
        dict(target='stable',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('stable'),
             opts=['standing level and firm', 'kept in a building', 'measured and recorded',
                   'unlikely to react'],
             key='D', moves={'A': 'near_miss', 'B': 'imported', 'C': 'imported'},
             why='A bag of flour on a shelf is called perfectly stable where a mill can explode, '
                 'so the word names a thing unlikely to react.',
             trap='A takes the sense of resting steadily, which has nothing to do with burning.'),
        dict(stem='Which choice best describes the function of the sentences about the flour mill?',
             opts=['They introduce the reaction with oxygen for the first time',
                   'They concede that fine division has no effect',
                   'They carry the point from steel to any divided solid',
                   'They report the thickness of a steel thread'],
             key='C', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='The mill, the silo, the powdered sugar and the powdered coal follow the rule '
                 'about shape and rate, which extends the steel case to other materials.',
             trap='B denies the effect that the whole passage is built to establish.'),
        dict(sibling='PHY-S07-L2',
             sibling_gloss='Text 2 is passage 77 of this book. It explains that even a reaction '
                           'which releases energy needs an activation barrier crossed first, that '
                           'rates roughly double for every ten degree rise, and that a catalyst '
                           'lowers the barrier without being consumed.',
             stem='Text 1 contrasts a bar with a pad of wool. Based on Text 2, what would be added '
                  'to that contrast?',
             opts=['Surface is what decides whether the metal burns',
                   'The barrier that a match has to get the reaction over',
                   'Rust is the same reaction running at a crawl',
                   'A catalyst is consumed as the reaction proceeds'],
             key='B', moves={'A': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 explains that a reaction needs a barrier crossed before it can run, which '
                 'is what the match supplies and what a thin thread lets the heat sustain.',
             trap='C repeats the comparison Text 1 already draws with a rusting gate.'),
        dict(carrier='The two objects are the same metal, from the same kind of ingot, and one of '
                     'them burns. ___ what differs is surface.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['In fact,', 'By contrast,', 'Even so,', 'For example,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The second sentence answers the puzzle the first sets, so the transition must '
                 'press forward to the explanation rather than oppose or qualify it.',
             trap='C treats the explanation as a concession against the puzzle.'),
        dict(carrier='The chemistry does not change with the shape of the metal ___ only the rate '
                     'does.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['metal, only', 'metal only', 'metal; only', 'metal, and, only'],
             key='C', moves={'A': 'comma_splice', 'B': 'run_on', 'D': 'misplaced'},
             why='The clause saying only the rate changes is a complete sentence, so a semicolon '
                 'separates it from the clause about the chemistry.',
             trap='A splices the clause about the rate onto the clause about the chemistry with a '
                  'comma.'),
        dict(goal='explain why a silo and a sack are different problems',
             notes=['Steel reacts with oxygen only where metal and air meet.',
                    'A hundred grams drawn into fine threads presents several square meters.',
                    'The chemistry does not change with the shape; only the rate does.',
                    'A substance has a level of danger for each state it is divided into.'],
             stem='The student wants to explain why a silo and a sack are different problems. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['The reaction runs only where the material meets air, so dividing it finely '
                   'raises the rate without changing the chemistry',
                   'Steel reacts with oxygen only where metal and air meet',
                   'The chemistry does not change with the shape of the material',
                   'A substance has a level of danger for each state it is in'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice connects the meeting of material and air to the change in rate, '
                 'which is what makes the same grain a different problem in bulk.',
             trap='D states the conclusion to be explained without the reason behind it.'),
    ]))

# --- 8 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='PHY-S08-L1',
    ar=dict(
        khulasa='حمل جسر تاي الأول سكّة حديد واحدة مسافة ميلين فوق الماء عند دندي في '
                'إسكتلندا، وفُتح سنة ألف وثمانمئة وثمان وسبعين وكان أطول جسر في العالم '
                'حينها. وفي ليلة الثامن والعشرين من كانون الأول من السنة التالية، في عاصفة '
                'شتوية، هوت الجيزان الوسطى الثلاث عشرة في النهر والقطار عليها.',
        maana='المعنى أنّ التحقيق وجد سلسلة أسباب لا سببًا واحدًا: فالجيزان العالية كانت على '
              'أعمدة من حديد الزهر، وهو قويّ إذا ضُغط ضعيف إذا شُدّ أو صُدم؛ وبعض المصبوبات '
              'فيها ثقوب من المسبك مُلئت بمعجون نُشارة حديد وشمع فظهرت سليمة وهي لا تحمل '
              'شيئًا.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الظاهرة: ولم يُحسب في '
                  'التصميم دفعُ العاصفة الجانبيُّ على جنب قطار، والرياح المقيسة تلك '
                  'الليلة قاربت ثمانين ميلًا في الساعة، ولم يحسب المهندس قطّ ما يجب أن '
                  'يقاومه البناء من الريح.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الفقرة الختامية '
             'وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُنسب الانهيار إلى سبب واحد، '
             'مع أنّ النصّ يسمّيه سلسلة. ويقترن المقطع بالمقطع الثامن والسبعين في أسئلة '
             'النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['A chain of causes, not one, put the spans in the river',
                   'The inquiry found a single cause for the collapse',
                   'Queen Victoria crossed the bridge in June 1879',
                   'The second bridge used wrought iron and steel'],
             key='A', moves={'B': 'wrong_direction', 'C': 'true_not_asked', 'D': 'underreach'},
             why='The text says the inquiry found a chain of causes rather than one, and then '
                 'names the cast iron, the filled holes, the rough bolt holes and the missing '
                 'wind allowance.',
             trap='B reverses the sentence that opens the account of the inquiry.'),
        dict(stem='According to the text, how had the holes in some castings been treated?',
             opts=['They had been drilled rather than cast',
                   'They had been doubled with a second column',
                   'They had been filled with iron filings and wax',
                   'They had been reported to the foreman'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'near_miss'},
             why='The text says some castings had holes from the foundry that had been filled with '
                 'a paste of iron filings and wax, which looked sound and carried nothing.',
             trap='A describes the bolt holes, which were cast rather than drilled.'),
        dict(claim='the practice changed because of the collapse',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'practice changed because of the collapse?',
             opts=[Q('The first Tay Bridge carried a single railway track two miles across the '
                     'water at Dundee in Scotland'),
                   Q('Workmen had reported loose bolts and rattling joints for months'),
                   Q('the measured winds that night were near eighty miles an hour'),
                   Q('That was not unusual in 1879. It became unusual immediately afterward')],
             key='D', moves={'A': 'true_not_asked', 'B': 'near_miss', 'C': 'true_not_asked'},
             why='The two short sentences say that failing to calculate the wind load was normal '
                 'before the collapse and abnormal straight after it, which is the change the '
                 'claim names.',
             trap='B reports a warning that went unheeded rather than a change in practice.'),
        dict(carrier='The high girders were carried on columns of cast iron, a material that is '
                     'strong when squeezed and weak when pulled or struck. A sideways gale on the '
                     'side of a train would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['press the columns in their strongest direction',
                   'load the columns in the way they bear worst',
                   'be carried entirely by the wrought iron',
                   'make no difference to a bridge of that length'],
             key='B', moves={'A': 'wrong_direction', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='Cast iron is weak when pulled or struck, and a sideways wind pulls and strikes '
                 'rather than squeezes, so it acts where the material is weakest.',
             trap='A puts the wind in the direction the text says cast iron bears well.'),
        dict(target='resist',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('resist'),
             opts=['stand up to', 'refuse to obey', 'measure in advance', 'give way under'],
             key='A', moves={'B': 'imported', 'C': 'near_miss', 'D': 'wrong_direction'},
             why='The engineer had never calculated what the structure must resist from the wind, '
                 'so the word names the load it would have to stand up to.',
             trap='D reverses the sense, since the question was what the bridge could '
                  'withstand.'),
        dict(stem='Which choice best describes the function of the paragraph about the second '
                  'bridge?',
             opts=['It introduces the collapse of the first bridge',
                   'It concedes that the first design was sound',
                   'It reports the number of people who died',
                   'It shows which lessons were built into the replacement'],
             key='D', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='The paragraph names wrought iron and steel, doubled columns and a stated wind '
                 'load, each of which answers one of the faults the inquiry had found.',
             trap='B defends a design the inquiry found at fault in several places.'),
        dict(sibling='PHY-S08-L2',
             sibling_gloss='Text 2 is passage 78 of this book. It sets out stress as force per '
                           'unit area and the yield point as where deformation becomes '
                           'permanent, notes that cast iron has almost no gap between yielding '
                           'and fracture, and reports wartime ships fracturing in cold water.',
             stem='Text 1 reports a chain of causes in one collapse. Based on Text 2, what would '
                  'be added to that report?',
             opts=['Cast iron is weak when pulled or struck',
                   'No allowance had been made for the wind on a train',
                   'The reason cast iron gives no warning before it breaks',
                   'Cast iron yields for a long while before fracturing'],
             key='C', moves={'A': 'restatement', 'B': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 says cast iron has almost no gap between yielding and fracture, which is '
                 'why the columns in Text 1 could fail without bending first.',
             trap='A repeats the property of the material that Text 1 has already given.'),
        dict(carrier='The engineer had never calculated what the structure must resist from the '
                     'wind. ___ that was not unusual in 1879.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Therefore,', 'In fairness,', 'Likewise,', 'For instance,'],
             key='B', moves={'A': 'near_miss', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The sentence excuses the omission by placing it in its period, so the transition '
                 'must mark a concession rather than a consequence or a likeness.',
             trap='A reads the normality of the omission as following from the omission itself.'),
        dict(carrier='The inquiry found a chain of causes rather than one ___ and the castings, '
                     'the bolt holes and the wind each played a part.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['one; and', 'one and', 'one: and', 'one, and'],
             key='D', moves={'A': 'wrong_mark', 'B': 'run_on', 'C': 'wrong_mark'},
             why='The clause about the castings, the bolt holes and the wind is independent, so '
                 'the conjunction joining it to the clause about the chain takes a comma.',
             trap='B leaves the clause about the chain and the clause about the parts unmarked.'),
        dict(goal='explain why no single person can be blamed for the collapse',
             notes=['The inquiry found a chain of causes rather than one.',
                    'Castings with holes had been filled with iron filings and wax.',
                    'No allowance had been made for the sideways push of a gale on a train.',
                    'Workmen had reported loose bolts for months and the reports went no further '
                    'than the foreman.'],
             stem='The student wants to explain why no single person can be blamed for the '
                  'collapse. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['The inquiry found a chain of causes rather than one',
                   'A foundry hid holes, a design left out the wind, and a foreman kept the '
                   'reports, so the failure was shared',
                   'No allowance had been made for the wind on the side of a train',
                   'Workmen had reported loose bolts and rattling joints for months'],
             key='B', moves={'A': 'restatement', 'C': 'underreach', 'D': 'underreach'},
             why='Only this choice names three separate failures in three separate hands, which is '
                 'what shows that the blame cannot rest on one of them.',
             trap='C gives one link of the chain rather than the several the goal requires.'),
    ]))

# --- 9 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='PHY-S09-L1',
    ar=dict(
        khulasa='في سنة ألف وتسعمئة وسبع عشرة بدأ مصنع في أورانج بولاية نيوجيرسي يدهن أقراص '
                'الساعات بدهان يتوهّج في الظلام، وكان توهّجه من الراديوم، وهو عنصر كشفه ماري '
                'وبيير كوري سنة ألف وثمانمئة وثمان وتسعين. وقامت بالدهان نحو سبعين امرأة '
                'شابّة.',
        maana='المعنى أنّ الفُرَش كانت من وبر الجمل الرقيق، وأنّ النساء عُلّمن أن يُسنّن كلّ '
              'فرشة بشفاههنّ بين ضربة وضربة ليبقى لها سنّ. ونُسبت الوفيات الأولى إلى أسباب '
              'أخرى، فقد فقدت مولي ماجيا أسنانها ثمّ قطعًا من فكّها وماتت في أيلول، وسُجّل '
              'السبب داءً في الفم.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الظاهرة: الراديوم يسلك '
                  'كيميائيًّا سلوك الكالسيوم، فيبنيه الجسم في العظم فيبقى بقيّة العمر '
                  'يبعث إشعاعه من مدى قريب، والفكّ والورك موضعا الضرر المعتادان.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الجملة التي '
             'تحوّل السرد وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن تُحسب الوفيات '
             'الأولى منسوبة إلى سببها الصحيح، مع أنّ النصّ ينفي ذلك. ويقترن المقطع بالمقطع '
             'التاسع والسبعين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Radium was discovered by Marie and Pierre Curie in 1898',
                   'A work practice killed, and the case it produced changed the law',
                   'The first deaths were correctly attributed at the time',
                   'The brushes used in the works were of fine camel hair'],
             key='B', moves={'A': 'true_not_asked', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text traces the lip-pointing, the deaths, the lawsuit of 1927 and the rule '
                 'that a company could be liable for a disease contracted years earlier.',
             trap='C contradicts the text, which says the first deaths were put down to other '
                  'causes.'),
        dict(stem='According to the text, why does the body build radium into bone?',
             opts=['Because radium glows in the dark',
                   'Because the jaw and the hip are weakest',
                   'Because the paint was swallowed in quantity',
                   'Because radium behaves chemically much like calcium'],
             key='D', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'C': 'imported'},
             why='The text says radium behaves chemically much like calcium, so a body builds it '
                 'into bone, where it sits for the rest of a life.',
             trap='B names the usual sites of damage rather than the reason for the uptake.'),
        dict(claim='the case mattered beyond the women who brought it',
             stem='Which quotation from the text most strongly supports the claim that the case '
                  'mattered beyond the women who brought it?',
             opts=[Q('the case established that a company could be held liable for a disease '
                     'contracted at work years earlier'),
                   Q('All five were too ill to raise their arms to take the oath'),
                   Q('The settlement was small and they were already dying'),
                   Q('The brushes were fine camel hair, and to keep a point on them the women '
                     'were taught to shape each brush with their lips')],
             key='A', moves={'B': 'true_not_asked', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation names a rule of liability established by the case, which reaches '
                 'far past the five plaintiffs and their small settlement.',
             trap='C describes what the five women got rather than what the case established.'),
        dict(carrier='Radium behaves chemically much like calcium, so a body builds it into bone, '
                     'where it sits for the rest of a life giving out radiation at close range. A '
                     'dose taken in once would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['leave the body within a few weeks',
                   'damage the mouth and nothing further',
                   'go on acting for many years afterward',
                   'be harmless once the painting stopped'],
             key='C', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'D': 'wrong_direction'},
             why='Bone holds the radium for the rest of a life and it radiates at close range '
                 'throughout, so a single intake keeps acting long after it was swallowed.',
             trap='A empties the body of a substance the text says stays in the bone.'),
        dict(target='reduce',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('reduce'),
             opts=['boil down to a paste', 'cut down in amount', 'simplify an argument',
                   'add to a little more'],
             key='B', moves={'A': 'imported', 'C': 'imported', 'D': 'wrong_direction'},
             why='The factories were made to reduce the time any one worker spent at the bench, so '
                 'the word names cutting that time down.',
             trap='D reverses the sense, since the rule shortened the time at the bench.'),
        dict(stem='Which choice best describes the function of the sentence about the dentist in '
                  'the town?',
             opts=['It marks the point at which the cases became a case',
                   'It introduces the lawsuit of 1927 for the first time',
                   'It argues that the deaths had natural causes',
                   'It reports the number of women employed'],
             key='A', moves={'B': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The sentence follows the account of deaths put down to other causes and says a '
                 'dentist had seen enough of them by 1924 to write to the state.',
             trap='C restores the explanation the preceding sentences have displaced.'),
        dict(sibling='PHY-S09-L2',
             sibling_gloss='Text 2 is passage 79 of this book. It reports that radium has a '
                           'half-life of about sixteen hundred years, that alpha particles are '
                           'stopped by paper or the outer layer of skin, and that intensity falls '
                           'with the square of the distance from the source.',
             stem='Text 1 reports what the paint did to the painters. Based on Text 2, what would '
                  'be added to that report?',
             opts=['Radium sits in the bone for the rest of a life',
                   'The jaw and the hip were the usual sites of damage',
                   'Radium outside the body is as dangerous as radium inside',
                   'Why swallowing the paint mattered so much more than handling it'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'wrong_direction'},
             why='Text 2 says alpha particles are stopped by skin and that intensity falls with '
                 'the square of the distance, which is why a source inside the bone is the '
                 'dangerous case.',
             trap='A repeats what Text 1 already says about radium in the bone.'),
        dict(carrier='The first deaths were put down to other causes. ___ by 1924 a dentist in the '
                     'town had seen enough cases to write to the state.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Likewise,', 'For instance,', 'Before long,', 'In other words,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'restatement'},
             why='The second sentence reports the turn from scattered deaths to a pattern someone '
                 'acted on, so the transition must mark the passage of time to that point.',
             trap='A treats the dentist as doing the same thing as the earlier misattribution.'),
        dict(carrier='The brushes were fine camel hair ___ and the women were taught to shape each '
                     'brush with their lips between strokes.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['hair, and', 'hair and', 'hair; and', 'hair and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about shaping each brush with the lips is independent, so the '
                 'conjunction joining it to the clause about the camel hair takes a comma.',
             trap='B leaves the clause about the brushes and the clause about the lips unmarked.'),
        dict(goal='explain why the figures from these patients were used for decades',
             notes=['Radium behaves chemically like calcium and is built into bone.',
                    'Later work on those same patients produced the first serious figures.',
                    'The figures showed what a given amount of radium in the body does to bone.',
                    'They were still being used to set safety limits fifty years afterward.'],
             stem='The student wants to explain why the figures from these patients were used for '
                  'decades. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Radium behaves chemically like calcium and is built into bone',
                   'Later work on those same patients produced the first serious figures',
                   'These were the first figures linking an amount of radium in the body to '
                   'damage in bone, so safety limits rested on them',
                   'The figures were still being used fifty years afterward'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'restatement'},
             why='Only this choice says what the figures measured and why that made them the basis '
                 'of later limits, which is the reason the goal asks for.',
             trap='B names the figures without saying what in them made them useful.'),
    ]))

# --- 10 ------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='PHY-S10-L1',
    ar=dict(
        khulasa='الضوء يسير بسرعة ثابتة نحو ثلاثمئة ألف كيلومتر في الثانية، ولا شيء في الكون '
                'يحمل خبرًا أسرع من ذلك، وقد قاسها ألبرت مايكلسون قياسًا دقيقًا سنة ألف '
                'وثمانمئة وتسع وسبعين. وتلك الواقعة وحدها تحوّل كلّ مسافة في السماء إلى '
                'مدّة زمنية.',
        maana='المعنى أنّ المدد أيسر حفظًا في الرأس من المسافات: فالمسافة تخبر القارئ كم '
              'يبعد الشيء، والمدّة تخبره كم عمر المنظر الذي يراه. فالقمر على نحو أربعمئة ألف '
              'كيلومتر فيبلغ ضوءه الناظر في أكثر من ثانية قليلًا، وضوء الشمس يستغرق ثماني '
              'دقائق وعشرين ثانية.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الظاهرة: ثمّ تتغيّر '
                  'المقادير مقياسًا، فأقرب نجم بعد الشمس على نحو أربع سنوات ضوئية وربع، '
                  'وأقرب مجرّة كبيرة على مليونين ونصف من السنين الضوئية، وهي مع ذلك تُرى '
                  'بالعين المجرّدة.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الجملة الممهّدة '
             'وعن إكمال النصّ. والفخّ المتوقّع هنا أن يُحسب المنظر منظر اللحظة الحاضرة، مع '
             'أنّ النصّ يقول إنّ أحدًا لم يرَ شيئًا من الكون كما هو الآن. ويقترن المقطع '
             'بالمقطع الثمانين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Michelson measured the speed of light in 1879',
                   'Andromeda cannot be seen with the naked eye',
                   'A fixed speed turns every distance in the sky into a date',
                   'Light from the Moon arrives in a little over a second'],
             key='C', moves={'A': 'true_not_asked', 'B': 'wrong_direction', 'D': 'underreach'},
             why='The text says the fixed speed turns every distance into a length of time, and '
                 'that a view of the night sky must therefore contain many different dates at '
                 'once.',
             trap='B denies the text, which says Andromeda is visible as a faint smudge.'),
        dict(stem='According to the text, why do the Apollo recordings have a pause in every '
                  'exchange?',
             opts=['Radio took a little over a second each way',
                   'The Moon is four hundred times further than the Sun',
                   'Light from Jupiter takes up to fifty-three minutes',
                   'The crews spoke slowly on purpose'],
             key='A', moves={'B': 'wrong_direction', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says the Moon is about four hundred thousand kilometers away, its light '
                 'reaches an observer in a little over a second, and radio took the same time.',
             trap='B reverses the comparison, since the Sun is four hundred times further than the '
                  'Moon.'),
        dict(claim='a time is easier to grasp than a distance',
             stem='Which quotation from the text most strongly supports the claim that a time is '
                  'easier to grasp than a distance?',
             opts=[Q('Light moves at a fixed speed, about three hundred thousand kilometers in a '
                     'second'),
                   Q('The times are easier to hold in the head than the distances. A distance '
                     'tells a reader how far away a thing is. A time tells the reader how old the '
                     'view of it is'),
                   Q('Jupiter is between thirty-three and fifty-three minutes away, depending on '
                     'where the two planets stand'),
                   Q('A telescope is a kind of record, and the further it is pointed the older '
                     'the record is')],
             key='B', moves={'A': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation says the times are easier to hold in the head and then contrasts '
                 'what a distance reports with what a time reports.',
             trap='A gives the speed on which the conversion rests rather than the comparison '
                  'itself.'),
        dict(carrier='The nearest large galaxy, Andromeda, lies two and a half million light years '
                     'away. A viewer looking at that smudge tonight is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['seeing the galaxy as it is at this moment',
                   'using an instrument rather than the naked eye',
                   'closer to it than to Proxima Centauri',
                   'seeing light that left two and a half million years ago'],
             key='D', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'C': 'wrong_direction'},
             why='The light has been traveling for two and a half million years, so what reaches '
                 'the eye tonight left the galaxy that long before.',
             trap='A claims the present view that the fixed speed of light rules out.'),
        dict(target='contain',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('contain'),
             opts=['hold back from spreading', 'measure the limits of', 'have within it',
                   'be made up of one'],
             key='C', moves={'A': 'imported', 'B': 'imported', 'D': 'near_miss'},
             why='The text says every view of the night sky must contain many different dates at '
                 'once, so the word names having them within it.',
             trap='A takes the sense of holding something in check, which a view cannot do.'),
        dict(stem='Which choice best describes the function of the sentence about distances and '
                  'times?',
             opts=['It introduces the galaxy Andromeda for the first time',
                   'It says why the text will use times throughout',
                   'It argues that distances cannot be measured at all',
                   'It reports the speed Michelson obtained in 1879'],
             key='B', moves={'A': 'detail_swap', 'C': 'overreach', 'D': 'detail_swap'},
             why='The sentence says times are easier to hold in the head and explains what each '
                 'kind of figure reports, which is why the examples that follow are given in '
                 'time.',
             trap='C denies distances that the text goes on to quote in kilometers.'),
        dict(sibling='PHY-S10-L2',
             sibling_gloss='Text 2 is passage 80 of this book. It describes parallax, which uses '
                           'the width of the orbit of the Earth as a baseline, notes that the '
                           'nearest star shifts by less than one second of arc, and explains '
                           'standard candles.',
             stem='Text 1 converts distances in the sky into times. Based on Text 2, what would be '
                  'added to that conversion?',
             opts=['How the distances being converted were found at all',
                   'Light travels about three hundred thousand kilometers a second',
                   'Andromeda lies two and a half million light years away',
                   'Parallax works best on the most distant galaxies'],
             key='A', moves={'B': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 describes parallax and standard candles, which are how a distance is '
                 'established before Text 1 can turn it into a length of time.',
             trap='B repeats the speed that Text 1 opens with rather than adding anything.'),
        dict(carrier='Beyond that the numbers change scale. ___ the nearest star beyond the Sun, '
                     'Proxima Centauri, is about four and a quarter light years off.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'In short,', 'For instance,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'restatement'},
             why='The second sentence gives the first case at the new scale, so the transition '
                 'must introduce an example rather than a contrast or a summary.',
             trap='B sets the nearest star against the change of scale it illustrates.'),
        dict(carrier='A distance tells a reader how far away a thing is ___ a time tells the '
                     'reader how old the view of it is.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['thing is, a', 'thing is. A', 'thing is a', 'thing is, and, a'],
             key='B', moves={'A': 'comma_splice', 'C': 'run_on', 'D': 'misplaced'},
             why='The clause about what a time tells the reader is a complete sentence, so a '
                 'period separates it from the clause about what a distance tells.',
             trap='A splices the clause about the time onto the clause about the distance with a '
                  'comma.'),
        dict(goal='explain why nobody has seen the universe as it is now',
             notes=['Light moves at a fixed speed of about three hundred thousand kilometers a '
                    'second.',
                    'Sunlight takes eight minutes and twenty seconds to arrive.',
                    'Andromeda lies two and a half million light years away.',
                    'A telescope is a kind of record, and the further it is pointed the older the '
                    'record is.'],
             stem='The student wants to explain why nobody has seen the universe as it is now. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['Light moves at a fixed speed of about three hundred thousand kilometers a '
                   'second',
                   'Sunlight takes eight minutes and twenty seconds to arrive on Earth',
                   'Andromeda lies two and a half million light years away from here',
                   'Because light takes time to arrive, every view is of an earlier date, eight '
                   'minutes for the Sun and millions of years for Andromeda'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'true_not_asked'},
             why='Only this choice states the general reason and gives two of the dates it '
                 'produces, which is what explains the absence of any present view.',
             trap='B gives one of those dates without the general reason behind it.'),
    ]))

if __name__ == '__main__':
    qemit.emit(FIELD, LEVEL, SETS)
