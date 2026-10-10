"""Biology and Earth Science, Level 1: ten question sets."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

Q = '«%s»'.__mod__
FIELD, LEVEL = 'BIO', 1
SETS = []

# --- 1 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='BIO-S01-L1',
    ar=dict(
        khulasa='تستريح فراشة الفلفل على لحاء الشجر نهارًا وأجنحتها مفتوحة، ومعظمها رمادي '
                'فاتح بنقاط داكنة صغيرة. وسجّل جامع قرب مانشستر فراشة تكاد تكون سوداء عام '
                'ألف وثمانمئة وثمانية وأربعين. وبعد خمسين سنة صار الشكل الأسود أكثر من تسع '
                'من كلّ عشر فراشات تُصاد في تلك المدينة، ولم يتغيّر شيء ظاهر في الفراشات '
                'بل تغيّر اللحاء.',
        maana='المعنى أنّ دخان الفحم قتل الأشنات الفاتحة وترك الجذوع سوداء بالسُخام. فعلى '
              'جذع نظيف تكاد الفراشة الفاتحة تكون غير مرئية والسوداء بارزة، وعلى جذع '
              'مُسخَّم العكس صحيح، والطيور تصطاد بالبصر فتأخذ الشكل الذي تراه. ثم انعكس '
              'الاتّجاه بعد قانون الهواء النقي عام ألف وتسعمئة وستّة وخمسين.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الظاهرة: واقعة مؤرّخة '
                  'بأرقامها قبل الانتقال إلى آلية الانتقاء الطبيعي وإلى الدليل وإلى '
                  'الخلاف. ويمكن قراءة القصّة كلّها من سلسلة عدّات عادية أُجريت بمصيدة '
                  'ضوء ودفتر.',
        sila='في اختبار سات تتكرّر تقارير العلوم: سؤال ومنهج ونتيجة. والفخّ الشائع أن '
             'يُفترض أنّ الفراشات نفسها تغيّرت، مع أنّ النصّ يقول إنّ ما تغيّر هو الخلفية '
             'التي تستريح عليها. ويقترن المقطع بالمقطع الحادي والستّين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Collectors had been keeping light trap records since the 1830s',
                   'A moth population shifted toward the dark form and back again as its '
                   'background changed',
                   'The moths themselves changed in a way that made them harder to see',
                   'Counts in rural Dorset stayed overwhelmingly pale through the same years'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'true_not_asked'},
             why='The text tracks the dark form rising to nine in ten and falling below five '
                 'percent, and says what changed was the bark rather than the moths.',
             trap='C states the reading the text corrects in its fifth sentence.'),
        dict(stem='According to the text, how do birds find these moths?',
             opts=['By the warmth of the trunk they rest on',
                   'By the smell of the lichens that grow there',
                   'By following them in flight at night',
                   'By sight, taking whichever form stands out'],
             key='D', moves={'A': 'imported', 'B': 'imported', 'C': 'near_miss'},
             why='The text says birds hunt these moths by sight and take whichever form they can '
                 'see against the bark.',
             trap='C moves the hunting to the air at night, where the text places the moths at '
                  'rest by day.'),
        dict(claim='the reversal makes the case stronger than a single change would',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'reversal makes the case stronger than a single change would?',
             opts=[Q('The same reversal happened near Detroit, which gives two records rather '
                     'than one'),
                   Q('A collector near Manchester recorded a nearly black one in 1848'),
                   Q('Coal smoke had killed the pale lichens, which are the crusty growths that '
                     'cover healthy bark'),
                   Q('Collectors had been keeping such records since the 1830s, for reasons of '
                     'their own')],
             key='A', moves={'B': 'underreach', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The clause says a second city supplies a second record, which is what makes the '
                 'pattern more than one observation.',
             trap='D explains where the records came from rather than why two of them matter.'),
        dict(carrier='Britain passed a clean air law in 1956, coal smoke fell away over the next '
                     'thirty years, the lichens came back, and the black moths became rare again. '
                     'The direction of change therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['was fixed once the first dark moth appeared',
                   'has never been measured outside Manchester',
                   'depended on the trunks rather than on the moths',
                   'reversed only after the lichens had died'],
             key='C', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'D': 'wrong_direction'},
             why='The dark form rose when the bark blackened and fell when the lichens returned, '
                 'so the background was what set the direction.',
             trap='A treats the first sighting as a turning point rather than as a curiosity.'),
        dict(target='adapted',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('adapted'),
             opts=['altered for a new use', 'come to fit its surroundings',
                   'changed its own appearance', 'moved to a different place'],
             key='B', moves={'A': 'near_miss', 'C': 'wrong_direction', 'D': 'imported'},
             why='The population had come to match one kind of background and swung back when the '
                 'background changed, which is fitting the surroundings.',
             trap='C has an individual moth change color, which the text rules out.'),
        dict(stem='Which choice best describes the function of the sentence about rural Dorset?',
             opts=['It supplies a place where the cause was absent and the effect did not appear',
                   'It explains why collectors kept records from the 1830s onward',
                   'It reports the proportion of dark moths around Manchester',
                   'It introduces the clean air law passed in 1956'],
             key='A', moves={'B': 'imported', 'C': 'detail_swap', 'D': 'near_miss'},
             why='Dorset had clean air and stayed pale, which is a comparison that strengthens the '
                 'claim about soot.',
             trap='C names a figure from the city rather than the work the Dorset sentence does.'),
        dict(sibling='BIO-S01-L2',
             sibling_gloss='Text 2 is passage 61 of this book. It argues that natural selection '
                           'follows whenever four conditions hold at once: variation, heredity, '
                           'differences in offspring left, and time counted in generations.',
             stem='Text 1 reports fifty years of change in a moth population. Based on Text 2, '
                  'which condition does that half century supply?',
             opts=['Variation, since two forms of the moth existed',
                   'Heredity, since dark moths bred dark offspring',
                   'Differential survival, since birds hunted by sight',
                   'Time, since the generation is one year long'],
             key='D', moves={'A': 'near_miss', 'B': 'underreach', 'C': 'detail_swap'},
             why='Text 2 counts time in generations, and the moth generation is one year, so fifty '
                 'years is fifty rounds of selection.',
             trap='C names a condition the text supplies elsewhere rather than the one the half '
                  'century provides.'),
        dict(carrier='On a clean trunk a pale moth is almost invisible and a black one stands out. '
                     '___ on a sooty trunk the reverse is true.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Therefore,', 'For instance,', 'By contrast,', 'In other words,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'restatement'},
             why='The two sentences describe opposite cases, so the second stands against the '
                 'first rather than following from it.',
             trap='A makes the sooty case a consequence of the clean one.'),
        dict(carrier='Coal smoke had killed the pale lichens ___ the crusty growths that cover '
                     'healthy bark.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['lichens, which are', 'lichens which are', 'lichens; which are',
                   'lichens: which are'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'wrong_mark'},
             why='The clause describing the lichens adds information rather than restricting it, '
                 'so a comma attaches it to the noun.',
             trap='B omits the comma a supplementary clause needs.'),
        dict(goal='explain to a reader why the moths are a good test case',
             notes=['The dark form rose to more than nine in ten in Manchester.',
                    'Counts in rural Dorset stayed overwhelmingly pale.',
                    'The dark form fell below five percent by the 1990s.',
                    'The same reversal happened near Detroit.'],
             stem='The student wants to explain to a reader why the moths are a good test case. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['The dark form rose to more than nine in ten of the moths in Manchester',
                   'Counts in rural Dorset stayed overwhelmingly pale across the same years',
                   'The change ran up and then down in two cities while a clean-air area never '
                   'moved at all',
                   'The dark form had fallen below five percent again by the 1990s'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'restatement'},
             why='Only this choice brings the rise, the fall, the second city and the control area '
                 'together, which is what makes the case a test.',
             trap='A gives the rise alone, which any number of explanations would fit.'),
    ]))

# --- 2 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='BIO-S02-L1',
    ar=dict(
        khulasa='كان غريغور مندل راهبًا ومعلّم علوم في برنو، وبين عامي ألف وثمانمئة وستّة '
                'وخمسين وثلاثة وستّين زرع البازلاء في حديقة الدير وعدّها. واختار سبع صفات '
                'تأتي بشكلين واضحين لا ثالث بينهما: بذور مستديرة أو مجعّدة، وقرون خضراء أو '
                'صفراء، ونباتات طويلة أو قصيرة. وعلى سبع سنوات زرع وعدّ نحو ثمانية وعشرين '
                'ألف نبتة بيده.',
        maana='المعنى أنّ منهجه كان بسيطًا ودقيقًا. بدأ بسطور تُورّث بأمانة، ثم هجّن سطرًا '
              'طويلًا بقصير، فكان كلّ نبات الجيل الأول طويلًا، ومع ذلك لم يُخفَّف الشكل '
              'القصير ولم يُفقد. وحين تُرك ذلك الجيل يتناسل عادت النباتات القصيرة بنسبة '
              'ثابتة: لكلّ ثلاث طويلة نحو قصيرة واحدة.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الظاهرة: ما وُجد بالعدّ '
                  'قبل تفسيره. وقد نُشر العمل عام ألف وثمانمئة وستّة وستّين في مجلّة '
                  'جمعية محلّية ولم يقرأه أحد تقريبًا، وبقي ثلاثًا وثلاثين سنة بلا '
                  'استعمال.',
        sila='في اختبار سات يُسأل عن منهج التجربة وعن التفصيل. والفخّ الشائع أن يُفترض أنّ '
             'الشكل القصير اختفى في الجيل الأول، مع أنّ النصّ يقول إنّه لم يُخفَّف ولم '
             'يُفقد. ويقترن المقطع بالمقطع الثاني والستّين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Mendel became an abbot and did no more breeding work',
                   'Peas pollinate themselves unless a breeder interferes',
                   'Careful counting of seven simple features produced a steady three to one '
                   'ratio',
                   'Three researchers in 1900 found the same ratios independently'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'near_miss'},
             why='The text describes the choice of features, the method and the counts, and ends '
                 'on the ratio that came out of all seven.',
             trap='D reports what happened to the work later rather than what the work found.'),
        dict(stem='According to the text, what happened in the first generation of the cross?',
             opts=['Every plant was tall, and the short form was still present',
                   'The plants were of middling height between the two parents',
                   'Three quarters were tall and one quarter short',
                   'The short form was diluted and eventually lost'],
             key='A', moves={'B': 'wrong_direction', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The text says every plant in the first generation was tall and that the short '
                 'form had not been diluted or lost.',
             trap='C gives the proportions of the second generation rather than the first.'),
        dict(claim='the choice of plant was part of the quality of the method',
             stem='Which quotation from the text most strongly supports the claim that the choice '
                  'of plant was part of the quality of the method?',
             opts=[Q('Over seven years he grew and counted something near twenty-eight thousand '
                     'plants'),
                   Q('Peas pollinate themselves unless a breeder interferes, so every cross was '
                     'controlled'),
                   Q('Mendel published the work in 1866 in the journal of a local natural history '
                     'society'),
                   Q('He chose seven features that came in two clear forms and nothing in '
                     'between')],
             key='B', moves={'A': 'near_miss', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='Self-pollination is a property of the plant, and the text says it is what made '
                 'every cross controlled.',
             trap='D names the choice of features, which is a different decision from the choice '
                  'of organism.'),
        dict(carrier='He began with lines that bred true, meaning that tall plants from those '
                     'lines always gave tall offspring. Starting from such lines therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['guaranteed that the first generation would be mixed',
                   'made the second generation unnecessary to count',
                   'required that the plants be crossed by hand',
                   'removed any doubt about what each parent carried'],
             key='D', moves={'A': 'wrong_direction', 'B': 'overreach', 'C': 'near_miss'},
             why='A line that always gives the same offspring tells the breeder exactly what went '
                 'into the cross, which is why true-breeding lines were the starting point.',
             trap='C names something the text says the plant does for itself.'),
        dict(target='depends',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('depends'),
             opts=['hangs down from', 'relies on for support',
                   'is determined by', 'waits upon a decision'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'wrong_direction'},
             why='What an inherited feature looks like in the next generation is settled by rules '
                 'of this kind, so the word names determination.',
             trap='B softens the sense to reliance, which is weaker than the rule the sentence '
                  'describes.'),
        dict(stem='Which choice best describes the function of the sentence about the paper '
                  'sitting unused?',
             opts=['It explains why Mendel chose peas rather than another plant',
                   'It marks the gap between the discovery and its reception',
                   'It reports the size of the plot he worked in',
                   'It introduces the seven features he had selected'],
             key='B', moves={'A': 'imported', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence stands between the publication and the rediscovery of 1900, and '
                 'measures the thirty-four years between them.',
             trap='D names material that comes much earlier in the text.'),
        dict(sibling='BIO-S02-L2',
             sibling_gloss='Text 2 is passage 62 of this book. It derives the three to one ratio '
                           'from three facts: that a plant carries two copies of each gene, that '
                           'the copies may be different versions, and that each sex cell receives '
                           'one of them at random.',
             stem='Text 1 says the short form was not lost in the first generation. Based on Text '
                  '2, why was it still there?',
             opts=['Because each first-generation plant carried one copy of each',
                   'Because the plants were allowed to pollinate themselves',
                   'Because the second generation had not yet been grown',
                   'Because the tall line had bred true for several years'],
             key='A', moves={'B': 'detail_swap', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='Text 2 says every plant in the first generation carries one allele of each, and '
                 'that the short one shows only when no tall one is present.',
             trap='B names a feature of the method rather than the reason the allele '
                  'survived.'),
        dict(carrier='Mendel published the work in 1866 in the journal of a local natural history '
                     'society. ___ almost nobody read it.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['For instance,', 'Even so,', 'In other words,', 'Unsurprisingly,'],
             key='D', moves={'A': 'near_miss', 'B': 'wrong_direction', 'C': 'restatement'},
             why='A paper in the journal of a local society would be expected to go unread, so the '
                 'second sentence follows naturally from the first.',
             trap='B sets the neglect against the publication as though it were a surprise.'),
        dict(carrier='He sent copies to well-known scientists and received little in reply ___ '
                     'became an abbot, and did no more breeding work.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['reply; he', 'reply,', 'reply, he', 'reply he'],
             key='B', moves={'A': 'wrong_mark', 'C': 'comma_splice', 'D': 'run_on'},
             why='Three things Mendel did are listed with one subject, so the middle item takes a '
                 'comma and no new pronoun.',
             trap='C supplies a new subject and joins it with a comma, which splices the '
                  'sentence.'),
        dict(goal='explain why the ratio could be trusted',
             notes=['He chose seven features with two clear forms and nothing in between.',
                    'He began with lines that bred true.',
                    'He counted near twenty-eight thousand plants over seven years.',
                    'Peas pollinate themselves unless a breeder interferes.'],
             stem='The student wants to explain why the ratio could be trusted. Which choice most '
                  'effectively uses relevant information from the notes to accomplish that goal?',
             opts=['He chose seven features that came in two clear forms and nothing between',
                   'He began his work with pea lines that had bred true for years',
                   'Peas pollinate themselves unless a breeder interferes with them',
                   'Clear-cut features, true-breeding parents, controlled crosses and '
                   'twenty-eight thousand plants together leave little room for accident'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'restatement'},
             why='Only this choice assembles the four safeguards, which together are the reason '
                 'the figure can be relied on.',
             trap='C names one safeguard and so accounts for only part of the reliability.'),
    ]))

# --- 3 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='BIO-S03-L1',
    ar=dict(
        khulasa='ملعقة من الخميرة الجافّة تحمل مليارات الخلايا، كلّ واحدة خلية مستديرة '
                'واحدة بقطر نحو خمسة من ألف من الملّيمتر. وإذا حُرّكت في ماء دافئ مع قليل '
                'سكّر بدأ المسحوق يرغو في عشر دقائق، والرغوة غاز. فالخلايا تأخذ السكّر '
                'وتعيد شيئين: ثاني أكسيد الكربون والكحول، والخبّاز والمخمّر يريد كلّ منهما '
                'نصفًا مختلفًا من العملية نفسها.',
        maana='المعنى أنّ الخميرة تعمل مع الهواء وبدونه. فمع توفّر الأكسجين تحرق السكّر حتى '
              'النهاية وتحصل على طاقة أكبر بكثير من كلّ جزيء، وبدون أكسجين تأخذ طريقًا '
              'مختصرًا يُسمّى التخمّر وعليها أن تُطلق الكحول نفايةً لأنّ الكيمياء تتوقّف في '
              'منتصف الطريق، فيكون المردود أقلّ من عُشر.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الظاهرة: ما تفعله الخلية '
                  'فعلًا قبل الانتقال إلى حساب الطاقة وإلى كيف عُرف ذلك وإلى الخلاف. '
                  'وللخلية لا خيار في الأمر، فالكيمياء المتاحة لها يحدّدها ما هو مُذاب في '
                  'السائل حولها.',
        sila='في اختبار سات تتكرّر تقارير العلوم القصيرة ويُسأل عن التفصيل والاستنتاج. '
             'والفخّ الشائع أن يُفترض أنّ الخميرة تختار طريقها، مع أنّ النصّ يقول إنّ '
             'السائل حولها هو الذي يحدّده. ويقترن المقطع بالمقطع الثالث والستّين في أسئلة '
             'النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Pasteur measured sugar and yeast in the 1860s to show the difference',
                   'A brewer keeps air out and holds the temperature near twenty degrees',
                   'The same organism has been used for bread and beer for five thousand years',
                   'One organism gives out gas and alcohol, and what it yields depends on the air '
                   'available'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'near_miss'},
             why='The text sets out the two products, says a baker and a brewer want different '
                 'halves of one process, and then makes the yield turn on oxygen.',
             trap='C reports the long history rather than what the cell is doing.'),
        dict(stem='According to the text, what does the foam in the warm water consist of?',
             opts=['Alcohol rising to the surface', 'Carbon dioxide given off by the cells',
                   'Sugar that has not yet dissolved', 'Dried yeast cells floating upward'],
             key='B', moves={'A': 'detail_swap', 'C': 'imported', 'D': 'near_miss'},
             why='The text says the foam is gas and that the cells give back carbon dioxide and '
                 'alcohol.',
             trap='A names the other product of the process, which stays in the liquid.'),
        dict(claim='the cell does not choose which path it takes',
             stem='Which quotation from the text most strongly supports the claim that the cell '
                  'does not choose which path it takes?',
             opts=[Q('Each bubble of carbon dioxide pushes the stretchy dough outward'),
                   Q('a loaf left in a warm kitchen roughly doubles in ninety minutes'),
                   Q('The chemistry available to it is decided by what is dissolved in the liquid '
                     'around it'),
                   Q('Louis Pasteur showed this difference in the 1860s by measuring how much '
                     'sugar disappeared')],
             key='C', moves={'A': 'near_miss', 'B': 'underreach', 'D': 'true_not_asked'},
             why='The sentence puts the decision in the surrounding liquid rather than in the '
                 'cell, which is what the claim asserts.',
             trap='D names the experiment that measured the difference rather than the absence of '
                  'choice.'),
        dict(carrier='The short cut yields less than a tenth as much energy, which is why yeast '
                     'grows slowly in a sealed vessel and quickly in an open one. A brewer who '
                     'keeps air out therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['accepts slow growth in order to get alcohol',
                   'raises the energy each cell takes from the sugar',
                   'prevents the yeast from producing any gas at all',
                   'makes the dough rise faster than it would in air'],
             key='A', moves={'B': 'wrong_direction', 'C': 'overreach', 'D': 'detail_swap'},
             why='Without air the yield falls and the cell must release alcohol, so excluding air '
                 'trades growth for the product the brewer wants.',
             trap='B reverses the arithmetic, since the sealed vessel yields less rather than '
                  'more.'),
        dict(target='release',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('release'),
             opts=['set free from a duty', 'make available to buyers',
                   'loosen a tight grip', 'give out as waste'],
             key='D', moves={'A': 'imported', 'B': 'imported', 'C': 'near_miss'},
             why='The cell must get rid of alcohol because the chemistry stops halfway, so the '
                 'word names the discharge of a by-product.',
             trap='C hears the physical sense of letting go rather than of giving off.'),
        dict(stem='Which choice best describes the function of the second paragraph of the text?',
             opts=['It explains why the short cut yields less energy than the full path',
                   'It reports the diameter of a single dried yeast cell',
                   'It shows one process serving two different purposes',
                   'It introduces the experiments carried out by Pasteur'],
             key='C', moves={'A': 'near_miss', 'B': 'detail_swap', 'D': 'wrong_direction'},
             why='The paragraph takes the gas for the baker and the alcohol for the brewer, which '
                 'is one process put to two uses.',
             trap='A names the content of the third paragraph rather than the second.'),
        dict(sibling='BIO-S03-L2',
             sibling_gloss='Text 2 is passage 63 of this book. It explains that a cell converts '
                           'sugar into a molecule called ATP, that the first stage nets two units '
                           'with or without oxygen, and that the oxygen path yields something near '
                           'thirty.',
             stem='Text 1 says the short cut yields less than a tenth as much energy. Based on '
                  'Text 2, what are the two figures behind that fraction?',
             opts=['Five thousand years against ninety minutes',
                   'Two units without oxygen against about thirty with it',
                   'Twenty degrees against the temperature of an oven',
                   'Several billion cells against a single teaspoon'],
             key='B', moves={'A': 'imported', 'C': 'detail_swap', 'D': 'detail_swap'},
             why='Text 2 gives two units for the first stage and about thirty for the complete '
                 'path, which is the ratio Text 1 states as a fraction.',
             trap='C offers two temperatures from the texts in place of the two energy yields.'),
        dict(carrier='In beer and wine the alcohol is the point and the gas is allowed to escape. '
                     '___ in bread the gas does the work and the alcohol boils off in the oven.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'In other words,', 'For instance,', 'Accordingly,'],
             key='A', moves={'B': 'restatement', 'C': 'near_miss', 'D': 'wrong_direction'},
             why='The two sentences describe opposite uses of the same products, so the second '
                 'stands against the first.',
             trap='D makes the baking case follow from the brewing case.'),
        dict(carrier='Without oxygen it takes a short cut ___ called fermentation ___ and must '
                     'release alcohol as a waste product.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['cut called fermentation', 'cut; called fermentation;',
                   'cut, called fermentation,', 'cut, called fermentation'],
             key='C', moves={'A': 'run_on', 'B': 'wrong_mark', 'D': 'unpaired'},
             why='The naming phrase interrupts the sentence, so it needs a comma at each end '
                 'rather than one comma or none.',
             trap='D opens the interrupting phrase with a comma and then fails to close it.'),
        dict(goal='explain to a reader why a baker and a brewer treat the same organism '
                  'differently',
             notes=['The cells give back carbon dioxide and alcohol.',
                    'In bread the gas does the work and the alcohol boils off in the oven.',
                    'In beer and wine the alcohol is the point and the gas is allowed to escape.',
                    'The chemistry available is decided by what is dissolved around the cell.'],
             stem='The student wants to explain to a reader why a baker and a brewer treat the '
                  'same organism differently. Which choice most effectively uses relevant '
                  'information from the notes to accomplish that goal?',
             opts=['One process yields two products, and each trade keeps the one it needs and '
                   'lets the other go',
                   'The cells of the yeast give back carbon dioxide and also alcohol',
                   'In bread the gas does the work and the alcohol boils off in the oven',
                   'The chemistry available to a cell is decided by the liquid around it'],
             key='A', moves={'B': 'underreach', 'C': 'restatement', 'D': 'true_not_asked'},
             why='Only this choice states the principle that covers both trades rather than '
                 'describing one of them.',
             trap='C gives the baking half and leaves the brewing half unexplained.'),
    ]))

# --- 4 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='BIO-S04-L1',
    ar=dict(
        khulasa='أُبيدت الذئاب من حديقة يلوستون بالرمي حتى عشرينيات القرن العشرين، وقُتل آخر '
                'زوج معروف عام ألف وتسعمئة وستّة وعشرين. وعلى مدى السبعين سنة التالية لم '
                'يكن في الحديقة ذئاب، وعاش الوَعل بأعداد كبيرة في قيعان الوديان، وأُكلت '
                'أشجار الصفصاف والحور الصغير حتى الجذوع كلّ سنة، وكاد القندس يختفي من شمال '
                'الحديقة.',
        maana='المعنى أنّ خدمة الحديقة أعادت في عامي خمسة وتسعين وستّة وتسعين أحدًا وثلاثين '
              'ذئبًا من كندا، فتكاثرت سريعًا وصارت أكثر من مئة في عشر سنوات، وهبطت أعداد '
              'الوَعل في المدى الشمالي بأكثر من النصف. ثم تغيّرت النباتات: نما الصفصاف إلى '
              'مترين أو ثلاثة، ونجت بادرات الحور، وارتفعت مستعمرات القندس من واحدة إلى '
              'تسع.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الظاهرة: ما تغيّر '
                  'بالقياس، لا سببه. والمتنازع عليه ليس التغيّر بل سببه، وذلك الجدل '
                  'يُتناول لاحقًا في هذا الخطّ، وتحتفظ الحديقة بعدّات سنوية منذ الإعادة.',
        sila='في اختبار سات يُسأل عن التفصيل وعن حدود ما يثبته النصّ. والفخّ الشائع أن '
             'يُقرأ تعاقب الأحداث إثباتًا للسببية، مع أنّ النصّ يقول صراحةً إنّ السبب '
             'متنازع عليه. ويقترن المقطع بالمقطع الرابع والستّين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Wolves came back, elk fell, and the streamside plants recovered, though the '
                   'cause is disputed',
                   'The last known pair of wolves in the park was killed in 1926',
                   'Beaver colonies on the northern range rose from one to nine by 2015',
                   'The wolves brought from Canada were held in pens for ten weeks'],
             key='A', moves={'B': 'underreach', 'C': 'true_not_asked', 'D': 'detail_swap'},
             why='The text runs from the removal of the wolves through the release to the change '
                 'in the plants, and says plainly that the cause is what is in dispute.',
             trap='C gives one of the measured changes rather than the shape of the account.'),
        dict(stem='According to the text, what happened to elk numbers after the release?',
             opts=['They rose as the willows grew taller along the creeks',
                   'They stayed steady while the elk moved more often',
                   'They fell by more than half on the northern range',
                   'They were not counted until the photographs of 2015'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'imported'},
             why='The text says elk numbers on the northern range had fallen by more than half '
                 'within ten years of the release.',
             trap='B keeps the movement of the elk and drops the fall in their numbers.'),
        dict(claim='the text separates what is established from what is argued',
             stem='Which quotation from the text most strongly supports the claim that the text '
                  'separates what is established from what is argued?',
             opts=[Q('The animals were held in pens for ten weeks first, then let out'),
                   Q('Cottonwood seedlings survived their first years for the first time in '
                     'living memory'),
                   Q('Beaver colonies on the northern range rose from one in the early 1990s to '
                     'nine by 2015'),
                   Q('What is in dispute is not the change but its cause')],
             key='D', moves={'A': 'true_not_asked', 'B': 'underreach', 'C': 'near_miss'},
             why='The sentence draws the line itself, placing the change on one side and the cause '
                 'on the other.',
             trap='C gives one measured change rather than the distinction the claim concerns.'),
        dict(carrier='Part of that was hunting by wolves, and part was that the elk now moved more '
                     'and spent less time standing in open valleys. The fall in elk numbers '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['was caused entirely by the wolves killing elk',
                   'had more than one route running through it',
                   'cannot be measured from the annual counts',
                   'began before the wolves were released'],
             key='B', moves={'A': 'overreach', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The text names both direct hunting and changed behavior, so the decline has two '
                 'contributing paths.',
             trap='A assigns the whole fall to hunting, where the text names a second route as '
                  'well.'),
        dict(target='recovered',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('recovered'),
             opts=['returned to former numbers', 'got back something lost',
                   'regained consciousness slowly', 'were collected for study'],
             key='A', moves={'B': 'near_miss', 'C': 'imported', 'D': 'imported'},
             why='The songbirds that nest in streamside bushes increased along with the willows, '
                 'so the word names a return in numbers.',
             trap='B gives the sense of retrieving a lost object rather than of a population '
                  'rising.'),
        dict(stem='Which choice best describes the function of the sentence about the park service '
                  'photographs?',
             opts=['It introduces the counts of wolves, elk and beaver',
                   'It explains why the wolves were held in pens at first',
                   'It reports which creeks the willow measurements cover',
                   'It offers a form of evidence for the change just described'],
             key='D', moves={'A': 'near_miss', 'B': 'imported', 'C': 'detail_swap'},
             why='The photographs of the same stretches in 1996 and 2015 are produced to show that '
                 'the difference is not subtle.',
             trap='C names the measurements described in the last sentence rather than the '
                  'photographs.'),
        dict(sibling='BIO-S04-L2',
             sibling_gloss='Text 2 is passage 64 of this book. It explains that energy is lost at '
                           'every transfer in a food web, that biomass falls by roughly a factor '
                           'of ten at each step, and that a small number of wolves can affect a '
                           'large quantity of plant.',
             stem='Text 1 reports that few wolves changed a great deal of willow. Based on Text 2, '
                  'what makes that possible?',
             opts=['Four or five steps is the practical limit for a food chain',
                   'Cold-blooded animals do better than warm-blooded ones',
                   'Each wolf stands for a great deal of elk and of plant tissue',
                   'Transfer efficiencies range from one percent to over thirty'],
             key='C', moves={'A': 'near_miss', 'B': 'imported', 'D': 'detail_swap'},
             why='Text 2 says leverage runs downward through the chain because each predator '
                 'represents a large quantity of what it eats.',
             trap='D quotes a range from Text 2 rather than the mechanism of leverage.'),
        dict(carrier='Willows along some creeks that had been browsed flat for decades grew to two '
                     'or three meters. ___ cottonwood seedlings survived their first years for the '
                     'first time in living memory.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Nevertheless,', 'Likewise,', 'In other words,', 'Therefore,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'restatement', 'D': 'wrong_direction'},
             why='The second sentence reports a second plant changing in the same direction, so it '
                 'runs parallel to the first.',
             trap='A sets the cottonwoods against the willows rather than beside them.'),
        dict(carrier='The park keeps counts of wolves, elk and beaver every year ___ has done so '
                     'since the release.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['year; and', 'year, it', 'year and', 'year, and'],
             key='D', moves={'A': 'wrong_mark', 'B': 'comma_splice', 'C': 'run_on'},
             why='The keeping of the counts and the length of the record are each a full clause, '
                 'so the conjunction between them takes a comma.',
             trap='B drops the conjunction and leaves a comma between two clauses.'),
        dict(goal='describe the change for a reader without claiming to explain it',
             notes=['Thirty-one wolves were released in 1995 and 1996.',
                    'Elk numbers on the northern range fell by more than half.',
                    'Willows grew to two or three meters and beaver colonies rose to nine.',
                    'What is in dispute is not the change but its cause.'],
             stem='The student wants to describe the change for a reader without claiming to '
                  'explain it. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Thirty-one wolves were released into the park in 1995 and in 1996',
                   'After the release the elk fell by half and the willows and beaver rose, '
                   'though what caused it is still argued',
                   'Elk numbers on the northern range of the park fell by more than half',
                   'What is in dispute about Yellowstone is not the change but its cause'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice reports the measured changes and withholds the causal claim, '
                 'which is exactly what the goal asks for.',
             trap='D states the caution without describing the change it applies to.'),
    ]))

# --- 5 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='BIO-S05-L1',
    ar=dict(
        khulasa='تقع جزيرة سنت ماثيو في بحر بيرنغ على نحو مئتي ميل من أقرب أرض أخرى، '
                'وطولها اثنان وثلاثون ميلًا، بلا أشجار، مغطّاة بالطحالب والعشب المنخفض '
                'والأشنة التي يأكلها الرنّة. ولا يسكنها أحد. وفي عام ألف وتسعمئة وأربعة '
                'وأربعين أنزل خفر السواحل تسعة وعشرين رنّة مخزونًا طارئًا للحم لتسعة عشر '
                'رجلًا، ثم انتهت الحرب وأُغلقت المحطّة ورحل الرجال وبقيت الرنّة.',
        maana='المعنى أنّها لم يكن لها مفترسات من أي نوع، وكانت الأشنة قد نمت دون إزعاج '
              'آلاف السنين. فعُدّ القطيع عام سبعة وخمسين فكان نحو ألف وثلاثمئة، وعُدّ عام '
              'ثلاثة وستّين فكان ستّة آلاف. وفي عام ستّة وستّين بقي اثنان وأربعون، منها '
              'إحدى وأربعون أنثى وذكر واحد ولا صغار لتلك السنة.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الظاهرة: أرقام عُدّت على '
                  'الأرض. وكانت الحقيقة المهمّة تحت الثلج: الأشنة اختفت مرعيّةً حتى الصخر، '
                  'والأشنة تنمو من جديد بمعدّل يُقاس بالعقود لا بالسنوات، فأكل القطيع '
                  'مستقبله.',
        sila='في اختبار سات يُسأل عن التفصيل وعن الاستنتاج من سلسلة أرقام. والفخّ الشائع أن '
             'يُنسب الانهيار إلى شدّة الشتاء وحدها، مع أنّ النصّ يضع السبب المهمّ تحت '
             'الثلج. ويقترن المقطع بالمقطع الخامس والستّين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The island is thirty-two miles long and nobody lives on it',
                   'A herd without predators grew enormously and then collapsed when its food '
                   'was gone',
                   'A severe winter with deep snow killed almost all the reindeer',
                   'By the 1980s there were no reindeer on the island at all'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The text traces twenty-nine animals to six thousand and then to forty-two, and '
                 'puts the cause in the lichen that had been grazed away.',
             trap='C names the winter, which the text says mattered less than what lay under the '
                  'snow.'),
        dict(stem='According to the text, what was found in the count of 1963?',
             opts=['About thirteen hundred animals in good condition',
                   'Twenty-nine animals newly put ashore',
                   'Forty-two animals, almost all of them female',
                   'Six thousand animals on an island of fixed size'],
             key='D', moves={'A': 'detail_swap', 'B': 'near_miss', 'C': 'underreach'},
             why='The text says he counted again in 1963 and found six thousand, which is roughly '
                 'two hundred times the number put ashore.',
             trap='A gives the figure from the count six years earlier.'),
        dict(claim='the collapse was caused by damage the herd had done to its own food supply',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'collapse came from damage the herd had done to its own food supply?',
             opts=[Q('The lichen was gone, grazed down to bare rock and soil across most of the '
                     'island, and lichen grows back at a rate measured in decades'),
                   Q('The winter of 1963 had been severe, with deep snow, but the important '
                     'fact was underneath the snow'),
                   Q('They had no predators of any kind. No wolves, no bears, no hunters. The '
                     'lichen on the island had been growing undisturbed'),
                   Q('every number in it comes from counts made on the ground. A population can '
                     'survive on borrowed capital for a while')],
             key='A', moves={'B': 'near_miss', 'C': 'underreach', 'D': 'true_not_asked'},
             why='The quotation names the grazing, the bare ground and the slow regrowth, which '
                 'together are self-inflicted damage to the food supply.',
             trap='B names the winter, which the text treats as the occasion rather than the '
                  'cause.'),
        dict(carrier='The lichen on the island had been growing undisturbed for thousands of years '
                     'and lay thick on the ground. That stock of food therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['renewed itself as fast as the herd could eat it',
                   'had been maintained by grazing animals before 1944',
                   'could support a herd far above what the island would sustain',
                   'was the reason the station was closed after the war'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'detail_swap'},
             why='Thousands of years of undisturbed growth is a stored surplus, which is why the '
                 'herd could pass the level the island could hold.',
             trap='A reverses the point, since the text says lichen regrows over decades.'),
        dict(target='survive',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('survive'),
             opts=['outlive a particular rival', 'keep going for a time',
                   'escape from an accident', 'remain after a loss'],
             key='B', moves={'A': 'imported', 'C': 'imported', 'D': 'near_miss'},
             why='A population can live on borrowed capital for a while before the bill falls due, '
                 'so the word names continuing for a period.',
             trap='D gives the sense in which a remnant survives a disaster rather than a '
                  'population continuing.'),
        dict(stem='Which choice best describes the function of the final sentence of the text?',
             opts=['It supplies a comparison in which predators were present',
                   'It reports the year in which the last reindeer disappeared',
                   'It explains why the Coast Guard put the animals ashore',
                   'It gives the rate at which the lichen grows back'],
             key='A', moves={'B': 'detail_swap', 'C': 'imported', 'D': 'near_miss'},
             why='Mainland herds hunted by wolves and by people had held steady for centuries, '
                 'which is the contrast the island lacked.',
             trap='D names a fact from the third paragraph rather than the work of the last '
                  'sentence.'),
        dict(sibling='BIO-S05-L2',
             sibling_gloss='Text 2 is passage 65 of this book. It explains exponential and '
                           'logistic growth, says the textbook picture assumes a population feels '
                           'a shortage at once, and argues that a delay lets a population '
                           'overshoot and damage its own ceiling.',
             stem='Text 1 reports a herd of six thousand and then of forty-two. Based on Text 2, '
                  'what feature of the animals explains the overshoot?',
             opts=['Their food regrew at a rate measured in decades',
                   'They had no wolves, bears or hunters on the island',
                   'The winter of 1963 brought unusually deep snow',
                   'A reindeer born in a good year goes on breeding for years'],
             key='D', moves={'A': 'near_miss', 'B': 'near_miss', 'C': 'detail_swap'},
             why='Text 2 locates the delay in the animal: one born in a good year stays large and '
                 'fertile, so the herd keeps growing after the lichen has begun to fail.',
             trap='A names a property of the food rather than of the animals themselves.'),
        dict(carrier='A biologist counted the herd in 1957 and found about thirteen hundred '
                     'animals in good condition. ___ he counted again in 1963 and found six '
                     'thousand.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Nevertheless,', 'In other words,', 'Six years later,', 'For example,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'restatement', 'D': 'near_miss'},
             why='The two counts are given in order, so the second sentence continues a sequence '
                 'rather than qualifying the first.',
             trap='A sets the second count against the first as though it were unexpected.'),
        dict(carrier='It is thirty-two miles long, treeless, and covered in moss, low grass and '
                     'lichen ___ the slow crusty growth that reindeer eat.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['lichen, which is', 'lichen which is', 'lichen; which is', 'lichen: which is'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'wrong_mark'},
             why='The clause describing the lichen adds information about it rather than '
                 'restricting it, so a comma joins the two.',
             trap='B leaves out the comma that a supplementary clause requires.'),
        dict(goal='explain to a reader why the herd collapsed so suddenly',
             notes=['Twenty-nine reindeer were put ashore in 1944 with no predators.',
                    'The count reached six thousand by 1963.',
                    'The lichen was grazed down to bare rock across most of the island.',
                    'Lichen grows back at a rate measured in decades rather than years.'],
             stem='The student wants to explain to a reader why the herd collapsed so suddenly. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['Twenty-nine reindeer were put ashore in 1944 and had no predators at all',
                   'The herd had reached about six thousand animals by the year 1963',
                   'The herd ate a food supply that takes decades to return, so once it was gone '
                   'no number of animals could be fed',
                   'The lichen was grazed down to bare rock across most of the island'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'restatement'},
             why='Only this choice joins the exhaustion of the lichen to its slow regrowth, which '
                 'together make the fall sudden and complete.',
             trap='D names the damage without the regrowth rate that makes it irreversible.'),
    ]))

# --- 6 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='BIO-S06-L1',
    ar=dict(
        khulasa='في أواخر آب عام ألف وثمانمئة وأربعة وخمسين بدأ الناس في سوهو، وهي منطقة '
                'مزدحمة في لندن، يموتون بالكوليرا، وكان المرض يقتل سريعًا في يوم واحد '
                'غالبًا. وفي أسبوع مات أكثر من خمسمئة في شوارع قليلة. وكان معظم الأطبّاء '
                'يعتقدون أنّ الكوليرا تنتقل في الهواء الفاسد الصاعد من المجارير، أمّا جون '
                'سنو فلم يعتقد ذلك وخرج ينظر.',
        maana='المعنى أنّ سنو جمع عنوان كلّ وفاة تمكّن من تتبّعها وعلّمها على خريطة شارع '
              'بشرطة سوداء صغيرة، فتراكمت الشرطات حول مكان واحد: مضخّة ماء عامّة عند ناصية '
              'شارع برود. وتابع الاستثناءات أيضًا: عمّال مصنع جعّة على الشارع نفسه شربوا من '
              'بئر المصنع ولم يمرض منهم أحد، وأرملة في هامبستد ماتت بعد أن جُلب لها قارورة '
              'من ماء برود.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الظاهرة: ما أظهرته '
                  'الخريطة فعلًا. وما فعلته الخريطة هو إظهار أنّ المرض انتشر من مصدر واحد '
                  'يشربه الناس لا من الهواء الذي يتنفّسونه، ولم يُقبل الاحتجاج من مجلس '
                  'الماء إلّا بعد عقد.',
        sila='في اختبار سات يُسأل عن منهج الاستدلال وعن حدود ما يثبته. والفخّ الشائع أن '
             'يُنسب انتهاء الوباء إلى رفع يد المضخّة، مع أنّ النصّ يقول إنّ الوفيات كانت '
             'تهبط أصلًا وأنّ سنو قال ذلك بنفسه. ويقترن المقطع بالمقطع السادس والستّين في '
             'أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The pump site is now marked with a replica on Broadwick Street',
                   'Removing the handle from the pump brought the outbreak to an end',
                   'A map of addresses showed that the disease came from water rather than air',
                   'The water board did not accept the argument for another decade'],
             key='C', moves={'A': 'underreach', 'B': 'wrong_direction', 'D': 'true_not_asked'},
             why='The text says what the map did was show the disease spread from a single source '
                 'that people drank from rather than from the air.',
             trap='B is the reading the text corrects, since Snow himself said the removal did not '
                  'end it.'),
        dict(stem='According to the text, why did the brewery workers escape the outbreak?',
             opts=['They drank beer and water from a well of their own',
                   'They lived a short walk from a different pump',
                   'They had fled the district before the deaths began',
                   'They were given water carried in from Hampstead'],
             key='A', moves={'B': 'near_miss', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The text says workers at the brewery drank beer and water from the brewery own '
                 'well and that none of them fell ill.',
             trap='B gives the explanation for the nearby houses rather than for the brewery.'),
        dict(claim='Snow tested his own explanation rather than only illustrating it',
             stem='Which quotation from the text most strongly supports the claim that Snow tested '
                  'his explanation rather than only illustrating it?',
             opts=[Q('Within a week more than five hundred were dead in a few streets'),
                   Q('He also found exceptions and chased them down'),
                   Q('The map itself is still reprinted in textbooks'),
                   Q('Most doctors believed that cholera traveled in bad air rising from drains '
                     'and rotting matter')],
             key='B', moves={'A': 'true_not_asked', 'C': 'underreach', 'D': 'near_miss'},
             why='Chasing down the cases that did not fit is what distinguishes a test from a '
                 'display of agreeable evidence.',
             trap='D names the belief he was arguing against rather than his method.'),
        dict(carrier='Deaths were already falling, because many residents had fled, so the removal '
                     'did not end the outbreak and Snow said so himself. The handle therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['proves that the pump was not the source at all',
                   'was removed before the first deaths occurred',
                   'had been the only measure the parish board allowed',
                   'cannot be credited with the fall that followed'],
             key='D', moves={'A': 'overreach', 'B': 'wrong_direction', 'C': 'imported'},
             why='The decline had begun before the removal, so the removal cannot be given the '
                 'credit for it.',
             trap='A turns a limit on what the removal shows into a denial of the whole case.'),
        dict(target='spread',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('spread'),
             opts=['laid out across a surface', 'became more widely known',
                   'passed from one place to others', 'opened out to full width'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'imported'},
             why='The disease moved from a single source to the people who drank from it, so '
                 'the word names transmission.',
             trap='B gives the sense in which news spreads rather than a disease.'),
        dict(stem='Which choice best describes the function of the sentence about the widow in '
                  'Hampstead?',
             opts=['It reports the distance from Soho to the nearest clean pump',
                   'It supplies a case far from the pump that still fits the explanation',
                   'It explains why the parish board agreed to remove the handle',
                   'It introduces the leaking cesspit found years afterward'],
             key='B', moves={'A': 'detail_swap', 'C': 'near_miss', 'D': 'wrong_direction'},
             why='The widow lived three miles away and died after drinking water carried from the '
                 'pump, which tests the water explanation against distance.',
             trap='C names a later event rather than the work this sentence does.'),
        dict(sibling='BIO-S06-L2',
             sibling_gloss='Text 2 is passage 66 of this book. It argues that an outbreak is '
                           'governed by route, dose, the reproduction number and the incubation '
                           'period, and that Snow could act on a map because cholera is '
                           'waterborne and the source was fixed in one place.',
             stem='Text 1 shows Snow acting on a map in 1854. Based on Text 2, which property of '
                  'the disease made that possible?',
             opts=['A waterborne route with the source fixed in a single place',
                   'A reproduction number above one in a population with no immunity',
                   'A dose requiring more than one organism to establish infection',
                   'An incubation period long enough for contacts to be traced'],
             key='A', moves={'B': 'near_miss', 'C': 'near_miss', 'D': 'detail_swap'},
             why='Text 2 says Snow could act on a map because cholera is waterborne and the source '
                 'stayed in one place, which is what a map can locate.',
             trap='D names the property that makes contact tracing work rather than mapping.'),
        dict(carrier='Snow collected the address of every death he could trace and marked each one '
                     'on a street map. ___ the bars piled up around one place.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Nevertheless,', 'In other words,', 'For instance,', 'At once,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'restatement', 'C': 'near_miss'},
             why='The pattern appeared as soon as the marks were made, so the second sentence '
                 'reports what the marking immediately revealed.',
             trap='A sets the pattern against the mapping that produced it.'),
        dict(carrier='Years later an inspection found a leaking cesspit ___ a pit for household '
                     'waste ___ less than a meter from the well.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['cesspit a pit for household waste', 'cesspit, which is a pit for household '
                   'waste,', 'cesspit; a pit for household waste;',
                   'cesspit, which is a pit for household waste'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'unpaired'},
             why='The defining clause interrupts the sentence before the measurement, so it takes '
                 'a comma at each end.',
             trap='D opens the interrupting clause and never closes it before the measurement.'),
        dict(goal='explain to a reader what the map did and did not accomplish',
             notes=['The bars piled up around one public water pump.',
                    'Houses closer to a different pump had almost none.',
                    'Deaths were already falling because many residents had fled.',
                    'Snow said himself that the removal did not end the outbreak.'],
             stem='The student wants to explain to a reader what the map did and did not '
                  'accomplish. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['The bars on the map piled up around one public water pump',
                   'Houses that were closer to a different pump had almost no deaths',
                   'Deaths were already falling because many of the residents had fled',
                   'The map located the source in the water, though the removal of the handle '
                   'cannot be credited with ending the outbreak'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'restatement'},
             why='Only this choice states the finding and the limit together, which is the double '
                 'point the goal asks for.',
             trap='C gives the limit alone and so leaves the achievement unstated.'),
    ]))
