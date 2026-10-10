"""Physical Sciences, Level 3: ten question sets."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

Q = '«%s»'.__mod__
FIELD, LEVEL = 'PHY', 3

SETS = []

# --- 1 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='PHY-S01-L3',
    ar=dict(
        khulasa='القراءة على ميزان مختبري لا تعني شيئًا بذاتها، والذي يجعلها تعني شيئًا هو '
                'قابلية التتبّع، أي سلسلة مقايسات غير مقطوعة تربط الآلة بمعيار وطني. '
                'فالميزان يُقاس إلى كتلة مرجعية مُصدَّقة بمقايسة بمعيار أعلى، وتلك صُدّقت '
                'بأحسن منها عند خدمة معايرة.',
        maana='المعنى أنّ كلّ حلقة في تلك السلسلة تضيف قدرًا من الارتياب، وأنّ مغزى الترتيب '
              'كلّه هو أن تكون الإضافات معلومة مسجّلة. فشهادة الكتلة المرجعية تذكر قيمتها '
              'وارتيابها، ومن أراد أن يعاير آلة بها ورث الأمرين معًا.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الدليل: أسطوانة البلاتين '
                  'كشفت ضعف تعريف الوحدة بجسم، فقد أظهرت مقايسات قرن كامل أنّ الكيلوغرام '
                  'الرسميّ ونسخه يتباعد بعضها عن بعض بعشرات الميكروغرامات، ولم يقدر أحد '
                  'على تحديد أيّها تغيّر.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الفقرة وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن تُحسب القراءة معنى قائمًا بذاته، مع '
             'أنّ النصّ ينفي ذلك في أوّل جملة. ويقترن المقطع بالمقطع الحادي والسبعين في '
             'أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Four of the seven base units were redefined on one day',
                   'A reading means something only through a chain of comparisons',
                   'A laboratory balance means something by itself',
                   'Reference masses must be cleaned by a prescribed method'],
             key='B', moves={'A': 'true_not_asked', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text says a reading means nothing by itself and that traceability, an '
                 'unbroken chain of comparisons back to a national standard, is what makes it '
                 'mean something.',
             trap='C denies the opening sentence of the text.'),
        dict(stem='According to the text, what does a certificate for a reference mass state?',
             opts=['The method by which it must be cleaned',
                   'The vault in Paris where it is kept',
                   'The constant of nature that defines it',
                   'Its value and its uncertainty together'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'near_miss'},
             why='The text says a certificate states the value of the mass and its uncertainty, '
                 'and that anyone calibrating an instrument against it inherits both.',
             trap='A names part of the standard rather than what the certificate reports.'),
        dict(claim='defining a unit by an object has a weakness',
             stem='Which quotation from the text most strongly supports the claim that defining a '
                  'unit by an object has a weakness?',
             opts=[Q('the official kilogram and its official copies were drifting apart by tens '
                     'of micrograms, and nobody could say which had changed'),
                   Q('Every link in that chain adds a little uncertainty, and the whole point of '
                     'the arrangement is that the additions are known and recorded'),
                   Q('Four of the seven base units were redefined on the same day for the same '
                     'reason'),
                   Q('The arrangement is less convenient and very much harder to lose')],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation reports the official kilogram and its copies drifting apart with '
                 'no way to say which had moved, which is the weakness of an object as a '
                 'definition.',
             trap='D praises the replacement rather than naming the fault in the old scheme.'),
        dict(carrier='A certificate for a reference mass states its value and its uncertainty, and '
                     'anyone who wants to calibrate an instrument against it inherits both. A '
                     'result from that instrument is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['free of the uncertainty of the chain above it',
                   'certified by the vault in Paris directly',
                   'no better than the chain behind it',
                   'exact once the balance has been cleaned'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'overreach'},
             why='Each link adds uncertainty and the user inherits what the certificate states, so '
                 'a reading carries the accumulated uncertainty of everything above it.',
             trap='A discards the inherited uncertainty that the same sentence hands over.'),
        dict(target='calibrate',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('calibrate'),
             opts=['adjust for comfort', 'set against a known standard', 'read with great care',
                   'certify as exact'],
             key='B', moves={'A': 'imported', 'C': 'near_miss', 'D': 'overreach'},
             why='The sentence speaks of calibrating an instrument against a certified reference '
                 'mass, so the word names setting it by a known standard.',
             trap='D promises exactness where the certificate supplies an uncertainty.'),
        dict(stem='Which choice best describes the function of the paragraph about the platinum '
                  'cylinder?',
             opts=['It shows the chain failing at its highest link',
                   'It introduces the reference mass for the first time',
                   'It concedes that traceability is of no use',
                   'It reports the method by which masses are cleaned'],
             key='A', moves={'B': 'detail_swap', 'C': 'overreach', 'D': 'detail_swap'},
             why='The cylinder sat at the top of the chain, and the text reports the official '
                 'kilogram and its copies drifting apart with nobody able to say which had '
                 'changed.',
             trap='C discards the whole arrangement over a fault in one of its parts.'),
        dict(sibling='PHY-S01-L2',
             sibling_gloss='Text 2 is passage 71 of this book. It distinguishes random error, '
                           'which averaging reduces, from systematic error, which is identical in '
                           'every reading and is found only by comparison with something '
                           'independent.',
             stem='Text 1 describes a chain of comparisons. Based on Text 2, what would be added '
                  'to that description?',
             opts=['A certificate states a value and an uncertainty',
                   'Every link in the chain adds a little uncertainty',
                   'Averaging many readings would remove the chain entirely',
                   'The name for the error the chain is built to catch'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'wrong_direction'},
             why='Text 2 says a systematic error is found only by comparison with something '
                 'independent, which is exactly what each link of the chain in Text 1 supplies.',
             trap='B repeats a feature of the chain that Text 1 has already stated.'),
        dict(carrier='The chain also has to be maintained, because masses change. ___ they gain a '
                     'film of contamination, lose material to handling, and must be cleaned by a '
                     'prescribed method.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'In particular,', 'In conclusion,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'restatement'},
             why='The second sentence names the ways masses change that the first refers to in '
                 'general, so the transition must point to particulars.',
             trap='B sets the contamination against the claim that masses change.'),
        dict(carrier='A reading on a laboratory balance means nothing by itself ___ and what makes '
                     'it mean something is an unbroken chain of comparisons.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['itself, and', 'itself and', 'itself; and', 'itself and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about what gives the reading meaning is independent, so the '
                 'conjunction joining it to the clause about meaning nothing takes a comma.',
             trap='B leaves the clause about the reading and the clause about the chain '
                  'unmarked.'),
        dict(goal='explain why the kilogram was redefined',
             notes=['The national standard was compared against a platinum cylinder kept in a '
                    'vault.',
                    'Comparisons across a century showed the official kilogram and its copies '
                    'drifting apart.',
                    'Nobody could say which of them had changed.',
                    'The unit is now fixed by assigning an exact value to a constant of nature.'],
             stem='The student wants to explain why the kilogram was redefined. Which choice most '
                  'effectively uses relevant information from the notes to accomplish that goal?',
             opts=['The national standard was compared against a cylinder kept in a vault',
                   'The unit is now fixed by assigning a value to a constant of nature',
                   'The cylinder and its copies drifted apart with no way to tell which had '
                   'moved, so the unit was tied to a constant instead',
                   'Comparisons across a century showed a drift of tens of micrograms'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'underreach'},
             why='Only this choice joins the drift and the impossibility of attributing it to the '
                 'change of definition, which is the reason the goal asks for.',
             trap='D reports the drift without saying why it forced a new definition.'),
    ]))

# --- 2 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='PHY-S02-L3',
    ar=dict(
        khulasa='الجاذبية أضعف القوى بفارق هائل، وقياس شدّتها بين جسمين عاديين صعب بقدر ذلك. '
                'وقد فعله هنري كافندش سنة ألف وسبعمئة وثمان وتسعين بميزان الفتل، أي عارضة '
                'معلّقة على ليف رقيق يلتوي بمقدار يُقاس تحت قوّة ضئيلة.',
        maana='المعنى أنّ كرتين صغيرتين من الرصاص عُلّقتا من طرفي عارضة خشبية طولها ستّ '
              'أقدام، وقُرّبت منهما كرتان كبيرتان وزن كلّ منهما نحو ثلاثمئة وخمسين رطلًا، '
              'فدارت العارضة كسرًا من الدرجة. والتجربة كلّها درس في ضبط الخطأ.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الدليل: أُغلق الجهاز في '
                  'صندوق في غرفة مُوصدة، ورصد كافندش العارضة بمنظار من الخارج لئلّا تُحدث '
                  'حرارة بدنه تيّارات هواء، وعُوّلت استدارة الليف بتوقيت تذبذب العارضة '
                  'الحرّ، ونُقلت الكرتان الكبيرتان إلى الجهة الأخرى ليتقاصّ أيّ تحيّز '
                  'ثابت.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الجملة التي '
             'تمهّد لقائمة وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُنسب إلى كافندش '
             'إبلاغُ الثابت، مع أنّ النصّ ينفي ذلك. ويقترن المقطع بالمقطع الثاني والسبعين في '
             'أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Cavendish reported the gravitational constant in his paper',
                   'Modern versions use laser readout and better fibers',
                   'The experiment is remembered for its control of error',
                   'Gravity is the weakest force by an enormous margin'],
             key='C', moves={'A': 'wrong_direction', 'B': 'underreach', 'D': 'underreach'},
             why='The text calls the whole experiment a study in the control of error and then '
                 'lists the shutters, the telescope, the timed oscillation and the reversal of '
                 'the spheres.',
             trap='A contradicts the text, which says he did not report the constant.'),
        dict(stem='According to the text, why did Cavendish observe from outside the room?',
             opts=['So that his body heat would not stir the air',
                   'So that the fiber would twist more freely',
                   'So that the large spheres could be moved',
                   'So that the telescope could be calibrated'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says the apparatus was enclosed in a shuttered room and Cavendish '
                 'observed through a telescope from outside so that his body heat would not set '
                 'up air currents.',
             trap='C names a separate step of the method rather than the reason for the '
                  'telescope.'),
        dict(claim='the difficulty has not been removed by better equipment',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'difficulty has not been removed by better equipment?',
             opts=[Q('The twisting of the fiber was calibrated by timing the free oscillation of '
                     'the beam'),
                   Q('Published values still disagree with one another by more than their stated '
                     'uncertainties, which means somebody has an error nobody has found'),
                   Q('The result gave the density of the Earth to within about one percent of the '
                     'modern figure'),
                   Q('The measurement remained the most accurate for about a century')],
             key='B', moves={'A': 'true_not_asked', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation says published values still disagree by more than their '
                 'uncertainties, which means the trouble persists in the modern apparatus as '
                 'well.',
             trap='D reports how long his figure stood rather than the state of the measurement '
                  'now.'),
        dict(carrier='The large spheres were moved from one side to the other and the deflection '
                     'measured in both directions, so that any constant bias canceled. A bias '
                     'present in only one direction would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['cancel in the same way as a constant one',
                   'be removed by timing the free oscillation',
                   'make no difference to the final figure',
                   'survive the reversal and stay in the result'],
             key='D', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'C': 'wrong_direction'},
             why='The reversal removes a bias that is the same in both positions, so one that acts '
                 'in a single direction is not canceled by the procedure.',
             trap='A grants the reversal a power the text limits to a constant bias.'),
        dict(target='empirical',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('empirical'),
             opts=['imperial in scale', 'approximate rather than exact',
                   'belonging to measurement itself', 'left over from an earlier age'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'imported'},
             why='The text speaks of the empirical difficulty Cavendish faced, that the force is '
                 'tiny and everything in the room pulls, so the word names a difficulty of '
                 'measuring.',
             trap='B reads the word as a comment on precision rather than on the kind of '
                  'difficulty.'),
        dict(stem='Which choice best describes the function of the sentence calling the work a '
                  'study in error?',
             opts=['It introduces the torsion balance for the first time',
                   'It announces what the following sentences will list',
                   'It concedes that the result was never trustworthy',
                   'It reports the weight of the large lead spheres'],
             key='B', moves={'A': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The sentence comes before the shutters, the telescope, the timing and the '
                 'reversal, each of which is one of the controls it promises.',
             trap='C denies a figure the text says stood for a century.'),
        dict(sibling='PHY-S02-L2',
             sibling_gloss='Text 2 is passage 72 of this book. It explains that braking force is '
                           'roughly proportional to the weight on the tires, that kinetic energy '
                           'rises with the square of speed, and that reaction distance is '
                           'proportional to speed alone.',
             stem='Text 1 reports a measurement of the weakest force. Based on Text 2, what would '
                  'be added to that report?',
             opts=['What the same force does at the scale of a road',
                   'The experiment used a beam hung on a thin fiber',
                   'Gravity is the weakest of the forces by a margin',
                   'A torsion balance measures the stopping distance of a truck'],
             key='A', moves={'B': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 works with the weight pressing a tire onto a road, which is the same pull '
                 'that Text 1 has to shield from air currents to detect at all.',
             trap='B repeats the apparatus that Text 1 has already described.'),
        dict(carrier='Cavendish did not report the constant, which was not a quantity anyone used '
                     'at the time. ___ his paper is titled as an experiment to determine the '
                     'density of the Earth.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'For example,', 'Accordingly,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'near_miss'},
             why='The title follows from his not treating the constant as his subject, so the '
                 'transition must mark a consequence rather than a contrast or an example.',
             trap='B sets the title against the omission that explains it.'),
        dict(carrier='Two small lead spheres hung from the ends of a six-foot wooden beam ___ two '
                     'large lead spheres were brought up beside them.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['beam, two', 'beam. Two', 'beam two', 'beam, and, two'],
             key='B', moves={'A': 'comma_splice', 'C': 'run_on', 'D': 'misplaced'},
             why='The clause about the large spheres being brought up is a complete sentence, so a '
                 'period separates it from the clause about the small ones.',
             trap='A splices the clause about the large spheres onto the clause about the beam.'),
        dict(goal='explain why the constant is still poorly known',
             notes=['Gravity is the weakest force by an enormous margin.',
                    'The force is tiny, and everything in the room pulls.',
                    'Modern versions use the same principle with better fibers and laser readout.',
                    'Published values still disagree by more than their stated uncertainties.'],
             stem='The student wants to explain why the constant is still poorly known. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['Gravity is the weakest of the forces by an enormous margin',
                   'Modern versions use better fibers and a laser readout',
                   'The force is tiny, and everything in the room pulls on it',
                   'The pull is tiny and everything nearby adds to it, so modern values still '
                   'disagree by more than they claim'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'underreach'},
             why='Only this choice joins the difficulty of the measurement to the present '
                 'disagreement among published figures, which together answer the goal.',
             trap='C names the difficulty without reporting what it still does to the numbers.'),
    ]))

# --- 3 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='PHY-S03-L3',
    ar=dict(
        khulasa='رقم المردود لا يمكن ذكره قبل أن يختار أحد حدًّا للنظام، أي الخطّ المرسوم '
                'حول ما يُقاس، فيُحسب كلّ ما يعبره. ضع الحدّ عند أطراف محرّك كهربي فالمردود '
                'نحو خمسة وتسعين في المئة؛ وضعه عند سور محطّة التوليد فالرقم للمحرّك نفسه '
                'وللعمل نفسه يهبط إلى نحو أربعين.',
        maana='المعنى أنّ وضعه عند منجم الفحم يهبط به مرّة أخرى، وليس واحد من هذه الأرقام '
              'خاطئًا، بل تجيب أسئلة مختلفة، والخلاف المعتاد في أيّ تقنية للطاقة خلافٌ في '
              'موضع الخطّ. فالسيّارة الكهربية لا عادم لها، فداخل حدّ مرسوم عند السيّارة لا '
              'تُطلق شيئًا.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الدليل: والعلم الذي يأخذ '
                  'هذا بجدّية هو تحليل دورة الحياة، أي حساب يتبع الطاقة والموادّ من '
                  'الاستخراج إلى الصنع إلى الاستعمال إلى التخلّص، وضعفه أنّ نتيجته '
                  'متعلّقة بافتراضات غير قابلة للقياس.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الحالات الثلاث '
             'وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسب أحد الأرقام خاطئًا، مع '
             'أنّ النصّ يقول إنّ أيًّا منها ليس خاطئًا. ويقترن المقطع بالمقطع الثالث '
             'والسبعين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Standards bodies publish rules for drawing the boundary',
                   'One of the three efficiency figures for a motor is wrong',
                   'An electric vehicle emits nothing at all',
                   'An efficiency figure depends on where the line is drawn'],
             key='D', moves={'A': 'underreach', 'B': 'wrong_direction', 'C': 'wrong_direction'},
             why='The text says a figure cannot be stated until somebody chooses a boundary, gives '
                 'three figures for one motor, and says none of them is wrong.',
             trap='B denies the text, which says not one of those numbers is wrong.'),
        dict(stem='According to the text, what is the weakness of a life cycle analysis?',
             opts=['It cannot follow a product as far as disposal',
                   'It rests on assumptions that cannot be measured',
                   'It draws the boundary at the terminals of a motor',
                   'It is forbidden by the standards bodies'],
             key='B', moves={'A': 'wrong_direction', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says its weakness is that the result depends on assumptions that are '
                 'not themselves measurable, such as how long the product lasts.',
             trap='A denies the reach that the definition of the method claims.'),
        dict(claim='a small-looking choice can decide the whole result',
             stem='Which quotation from the text most strongly supports the claim that a '
                  'small-looking choice can decide the whole result?',
             opts=[Q('Put it at the power station fence and the figure for the same motor doing '
                     'the same work falls to around forty'),
                   Q('An electric vehicle has no tailpipe, so inside a boundary drawn at the car '
                     'it emits nothing at all'),
                   Q('a difference between them that looks negligible in the summary can turn out '
                     'to be the whole argument once the assumptions are printed'),
                   Q('The rules make studies comparable with each other without making any of '
                     'them true')],
             key='C', moves={'A': 'near_miss', 'B': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation says a difference that looks negligible in a summary can turn out '
                 'to be the whole argument once the assumptions are printed.',
             trap='A shows the boundary changing a number rather than a small choice deciding an '
                  'argument.'),
        dict(carrier='Drawn wider still, to include the mining of lithium and the manufacture of '
                     'the battery, it acquires a debt before it has moved, and that debt is '
                     'repaid over some number of miles. A comparison of two vehicles therefore '
                     '___',
             stem='Which choice most logically completes the text?',
             opts=['has to state the mileage it assumes',
                   'is settled by the absence of a tailpipe',
                   'is independent of where the boundary sits',
                   'depends only on the mining of the lithium'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The debt is repaid over a number of miles that depends on everything inside the '
                 'boundary, so a comparison means nothing until that distance is declared.',
             trap='C denies the dependence on the boundary that the whole text establishes.'),
        dict(target='negligible',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('negligible'),
             opts=['careless in its method', 'left out on purpose', 'open to challenge',
                   'too small to matter'],
             key='D', moves={'A': 'imported', 'B': 'near_miss', 'C': 'imported'},
             why='The text says a difference that looks negligible in the summary can turn out to '
                 'be the whole argument, so the word names one that appears too small to matter.',
             trap='B reads the word as a deliberate omission rather than an apparent smallness.'),
        dict(stem='Which choice best describes the function of the three boundaries drawn around a '
                  'motor?',
             opts=['They introduce the electric vehicle for the first time',
                   'They concede that efficiency cannot be measured at all',
                   'They show one object carrying three different figures',
                   'They report the rules the standards bodies publish'],
             key='C', moves={'A': 'detail_swap', 'B': 'overreach', 'D': 'detail_swap'},
             why='The terminals, the station fence and the coal mine each give a different number '
                 'for the same motor doing the same work, and the text says not one is wrong.',
             trap='B denies the measurement that each of the three boundaries supplies.'),
        dict(sibling='PHY-S03-L2',
             sibling_gloss='Text 2 is passage 73 of this book. It explains that efficiencies '
                           'multiply along a chain, reports that a modern coal plant turns about '
                           'forty percent of its fuel into electricity, and warns against judging '
                           'a technology by its last step.',
             stem='Text 1 argues about where the boundary belongs. Based on Text 2, what would be '
                  'added to that argument?',
             opts=['A figure at the terminals is higher than one at the fence',
                   'The arithmetic that makes the wider boundary so much worse',
                   'Not one of the three figures for the motor is wrong',
                   'A coal plant turns ninety-five percent of its fuel into power'],
             key='B', moves={'A': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 shows the efficiencies of the stages multiplying rather than adding, '
                 'which is why the figure falls so sharply as the boundary widens in Text 1.',
             trap='A repeats the comparison Text 1 draws between two of its own boundaries.'),
        dict(carrier='Not one of those numbers is wrong. ___ they answer different questions, and '
                     'the usual dispute about any energy technology is a dispute about where the '
                     'line should sit.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Rather,', 'Likewise,', 'For instance,', 'In conclusion,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'near_miss', 'D': 'restatement'},
             why='The second sentence says what the three figures do in place of being wrong, so '
                 'the transition must mark a substitution rather than a likeness.',
             trap='C treats the general account of the figures as one example among others.'),
        dict(carrier='Put it at the power station fence and the figure falls to around forty ___ '
                     'put it at the coal mine and it falls again.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['forty, put', 'forty put', 'forty. Put', 'forty, and, put'],
             key='C', moves={'A': 'comma_splice', 'B': 'run_on', 'D': 'misplaced'},
             why='The clause about the coal mine is a complete sentence, so a period separates it '
                 'from the clause about the power station fence.',
             trap='A splices the clause about the mine onto the clause about the fence with a '
                  'comma.'),
        dict(goal='explain why two careful studies can disagree by a factor of two',
             notes=['Life cycle analysis follows energy and materials from extraction to '
                    'disposal.',
                    'Its result depends on assumptions that are not themselves measurable.',
                    'Those assumptions include how long the product lasts and what it displaces.',
                    'Two careful studies of the same object can differ by a factor of two.'],
             stem='The student wants to explain why two careful studies can disagree by a factor '
                  'of two. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['The method follows the whole chain but rests on unmeasurable assumptions about '
                   'lifetime and displacement, which two teams may set differently',
                   'Life cycle analysis follows energy and materials from extraction to disposal',
                   'Its result depends on assumptions that are not themselves measurable',
                   'Two careful studies of the same object can differ by a factor of two'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice names the unmeasurable assumptions and the freedom two teams '
                 'have in setting them, which is what opens the gap the goal asks about.',
             trap='C names the dependence without saying which assumptions two teams could differ '
                  'over.'),
    ]))

# --- 4 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='PHY-S04-L3',
    ar=dict(
        khulasa='في الأربعينيات من القرن التاسع عشر مضى جيمس جول يبيّن أنّ العمل والحرارة '
                'صورتان لشيء واحد، والتجربة التي يُذكر بها بسيطة التصوّر بسطًا يقارب العبث: '
                'ثقل ساقط يدير دولاب تجديف داخل وعاء نحاسي محكم فيه ماء، فيُحرَّك الماء '
                'ويدفأ، وقاس جول كم دفئ.',
        maana='المعنى أنّ معرفة الثقل والمسافة التي سقطها تعطي العمل المبذول، ومعرفة كتلة '
              'الماء وارتفاع حرارته تعطي الحرارة المنتجة، والنسبة بينهما هي المكافئ '
              'الميكانيكي للحرارة. والصعوبة كانت كلّها في الدقّة، فارتفاع الحرارة في الجرية '
              'الواحدة كسر من الدرجة.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الدليل: أعاد جول التجربة '
                  'بالزئبق بدل الماء، وبدفع الماء في أنابيب، وبضغط الهواء، فحصل على أرقام '
                  'متقاربة بثلاث طرائق غير مترابطة، والمغزى الأوسع أنّها أسقطت صنفًا '
                  'كاملًا.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الفقرة الختامية '
             'وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُقال إنّ ارتفاع الحرارة كان '
             'درجة كاملة، مع أنّ النصّ يقول إنّه كسر من الدرجة. ويقترن المقطع بالمقطع الرابع '
             'والسبعين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['A simple experiment pressed to high precision removed a category',
                   'Joule measured the rise in temperature to a whole degree',
                   'He attempted the measurement on his honeymoon with a waterfall',
                   'Thermometers could be read to a two-hundredth of a degree'],
             key='A', moves={'B': 'wrong_direction', 'C': 'true_not_asked', 'D': 'underreach'},
             why='The text calls the conception absurdly simple, says the difficulty was entirely '
                 'in the precision, and reports that the work left one quantity where there had '
                 'been two.',
             trap='B contradicts the text, which says the rise was a fraction of a degree.'),
        dict(stem='According to the text, what three further routes did Joule take to the same '
                  'figure?',
             opts=['Water, a waterfall and a steam engine',
                   'Mercury, a paddle wheel and a sealed vessel',
                   'Mercury, water forced through tubes and compressed air',
                   'Water, a falling weight and a thermometer'],
             key='C', moves={'A': 'imported', 'B': 'detail_swap', 'D': 'detail_swap'},
             why='The text says he repeated the experiment with mercury instead of water, by '
                 'forcing water through tubes, and by compressing air, and obtained close figures '
                 'by three unrelated routes.',
             trap='B names parts of the original apparatus rather than the later routes.'),
        dict(claim='the result changed the way a quantity was counted',
             stem='Which quotation from the text most strongly supports the claim that the result '
                  'changed the way a quantity was counted?',
             opts=[Q('A falling weight turned a paddle wheel inside a sealed copper vessel of '
                     'water'),
                   Q('He corrected for the heat the vessel itself absorbed, for the heat leaking '
                     'through the walls'),
                   Q('Joule reported the figure to four significant digits in 1850, and the '
                     'modern value differs from it by less than one percent'),
                   Q('Afterward there was one quantity, energy, measured in one unit, and a '
                     'bookkeeping rule that applies to a steam engine and a stirred bucket '
                     'alike')],
             key='D', moves={'A': 'true_not_asked', 'B': 'true_not_asked', 'C': 'near_miss'},
             why='The quotation says that afterward there was one quantity in one unit with one '
                 'bookkeeping rule, which is the change in counting that the claim names.',
             trap='C reports how accurate the figure was rather than what it altered.'),
        dict(carrier='Before Joule, heat was widely treated as a substance that could be '
                     'transferred but not created, and any amount produced by rubbing had to be '
                     'attributed to something being squeezed out. A paddle wheel warming water '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['confirmed that heat is a substance after all',
                   'left the older account with nothing to squeeze',
                   'measured the heat leaking through the walls',
                   'produced too little warming to be measured'],
             key='B', moves={'A': 'wrong_direction', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The older account needed a store of heat to be pressed out of something, and '
                 'stirring water supplies no such store, so the account has nothing left to draw '
                 'on.',
             trap='A reads the stirred water as evidence for the view it undermines.'),
        dict(target='attributed',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('attributed'),
             opts=['explained as coming from', 'credited to a person',
                   'measured against a scale', 'given as a property'],
             key='A', moves={'B': 'imported', 'C': 'near_miss', 'D': 'near_miss'},
             why='Heat produced by rubbing had to be attributed to something being squeezed out, '
                 'so the word names assigning it a source.',
             trap='B takes the sense used of an author rather than of a cause.'),
        dict(stem='Which choice best describes the function of the paragraph on the wider '
                  'significance?',
             opts=['It introduces the mechanical equivalent of heat',
                   'It concedes that the ratio was never established',
                   'It reports the precision of the thermometers used',
                   'It says what the measurement cost the older account'],
             key='D', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='The paragraph reports that heat had been treated as a substance and that '
                 'afterward there was one quantity, energy, with a single bookkeeping rule.',
             trap='C names the apparatus rather than the change in the account of heat.'),
        dict(sibling='PHY-S04-L2',
             sibling_gloss='Text 2 is passage 74 of this book. It states the relation among '
                           'pressure, volume and absolute temperature, works through four cases, '
                           'and explains why dry rising air cools about ten degrees for every '
                           'thousand meters.',
             stem='Text 1 reports a measurement that joined work and heat. Based on Text 2, what '
                  'would be added to that report?',
             opts=['Work and heat are two forms of the same thing',
                   'Joule corrected for the heat leaking through the walls',
                   'A case where the work shows up as cooling instead',
                   'The gas relation was established by the paddle wheel'],
             key='C', moves={'A': 'restatement', 'B': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 has rising air cooling because it does work on the air around it, which '
                 'is the same equivalence that Text 1 measures running the other way.',
             trap='A repeats the conclusion Text 1 sets out to establish.'),
        dict(carrier='The temperature rise in a single run was a fraction of a degree. ___ Joule '
                     'had thermometers made that could be read to a two-hundredth.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Even so,', 'For that reason,', 'By contrast,', 'In other words,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'wrong_direction', 'D': 'restatement'},
             why='The special thermometers follow from the smallness of the rise, so the '
                 'transition must mark a consequence rather than a contrast or a concession.',
             trap='A sets the thermometers against the smallness that called for them.'),
        dict(carrier='The water was stirred, it warmed ___ and Joule measured how much.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['warmed; and', 'warmed and', 'warmed: and', 'warmed, and'],
             key='D', moves={'A': 'wrong_mark', 'B': 'run_on', 'C': 'wrong_mark'},
             why='The clause about Joule measuring the rise is independent, so the conjunction '
                 'joining it to the clause about the warming takes a comma before it.',
             trap='B leaves the clause about the warming and the clause about the measuring '
                  'unmarked.'),
        dict(goal='explain why three further routes mattered',
             notes=['A falling weight turned a paddle wheel in a sealed vessel of water.',
                    'He repeated the work with mercury, with water forced through tubes and by '
                    'compressing air.',
                    'The three routes gave figures close to one another.',
                    'The difficulty was entirely in the precision.'],
             stem='The student wants to explain why three further routes mattered. Which choice '
                  'most effectively uses relevant information from the notes to accomplish that '
                  'goal?',
             opts=['A falling weight turned a paddle wheel in a sealed vessel',
                   'Three unrelated arrangements gave figures close to each other, so the number '
                   'did not belong to one apparatus',
                   'He repeated the work with mercury and with compressed air',
                   'The difficulty of the experiment was entirely in the precision'],
             key='B', moves={'A': 'true_not_asked', 'C': 'underreach', 'D': 'underreach'},
             why='Only this choice says the agreement among unrelated arrangements is what frees '
                 'the figure from the particular apparatus that produced it.',
             trap='C lists two of the routes without saying what their agreement establishes.'),
    ]))

# --- 5 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='PHY-S05-L3',
    ar=dict(
        khulasa='شبكة الكهرباء لا تقدر على تخزين ما يُذكر، فلا بدّ أن يطابق التوليدُ '
                'الاستهلاكَ على الدوام. والقياس الذي يكشف أيّ اختلال هو ترداد الشبكة، أي '
                'معدّل انعكاس التيّار المتردّد، وكلّ مولّد كبير على الشبكة يدور متساوقًا مع '
                'غيره.',
        maana='المعنى أنّ الطلب إذا زاد على العرض طُلب من المولّدات أكثر مما تناله من بخار أو '
              'ماء، فتبطئ قليلًا جدًّا، فيهبط التردادُ تحت قيمته المقرّرة. فذلك الرقم الواحد '
              'قراءة متّصلة لتوازن قُطر كامل، وغرف التحكّم تتصرّف عند انحرافات من مئات '
              'الدورة.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الدليل: سرعة حركة الترداد '
                  'تحكمها القصورية، أي الطاقة الدورانية المخزونة في الآلات الكبيرة، فتعمل '
                  'عمل دولاب الموازنة وتبطئ أيّ تغيّر؛ وشبكة ممدودة بالإلكترونيات أقلّ '
                  'خزنًا لتلك الحركة.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الفقرة وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُقال إنّ الشبكة تخزّن ما يكفي لتغطية '
             'الاختلال، مع أنّ النصّ ينفي ذلك. ويقترن المقطع بالمقطع الخامس والسبعين في '
             'أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The frequency archive for several grids is published',
                   'One number reports the balance of a whole country at once',
                   'A grid can store enough electricity to cover a mismatch',
                   'Laboratories have used the method in criminal cases'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text says a grid can store nothing worth mentioning, that the frequency '
                 'falls when demand exceeds supply, and that the number is a continuous readout '
                 'of the balance.',
             trap='C denies the opening sentence about what a grid can store.'),
        dict(stem='According to the text, what governs how fast the frequency moves?',
             opts=['The deviation the control room will accept',
                   'The number of cycles a second in the country',
                   'The completeness of the published archive',
                   'The stored rotational energy of the large machines'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'imported'},
             why='The text says the rate at which the frequency moves is governed by inertia, the '
                 'stored rotational energy of the large spinning machines.',
             trap='A names what a control room acts on rather than what sets the rate.'),
        dict(claim='a measurement can acquire a use nobody intended',
             stem='Which quotation from the text most strongly supports the claim that a '
                  'measurement can acquire a use nobody intended?',
             opts=[Q('A measurement maintained for the purpose of keeping lights on turns out to '
                     'double as a clock that nobody designed'),
                   Q('Because frequency wanders by tiny amounts in a pattern that is the same '
                     'everywhere on a synchronous network'),
                   Q('Laboratories have used the method in criminal cases'),
                   Q('Its forensic use has been challenged on the ground that the archives '
                     'themselves are not always complete')],
             key='A', moves={'B': 'true_not_asked', 'C': 'near_miss', 'D': 'near_miss'},
             why='The quotation says a measurement kept for the sake of the lights doubles as a '
                 'clock that nobody designed, which is the unintended use the claim names.',
             trap='D reports an objection to that use rather than the use itself.'),
        dict(carrier='A grid supplied largely through electronics, as solar and wind are, has less '
                     'of this stored motion, and the frequency can move faster than human '
                     'operators can respond. Such a grid therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['needs no reserves of any kind', 'cannot be balanced at all',
                   'has to be balanced by automatic means',
                   'runs at a lower nominal frequency'],
             key='C', moves={'A': 'wrong_direction', 'B': 'overreach', 'D': 'detail_swap'},
             why='If the frequency can move faster than an operator can respond, the correction '
                 'has to be made by something that does not wait for a person.',
             trap='B turns a need for faster reserves into an impossibility.'),
        dict(target='salient',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('salient'),
             opts=['projecting outward', 'prominent and central', 'recently invented',
                   'easily overlooked'],
             key='B', moves={'A': 'imported', 'C': 'near_miss', 'D': 'wrong_direction'},
             why='Fast automatic reserves are said to have become a salient part of system design, '
                 'so the word names a part that now stands out as central.',
             trap='D reverses the sense, since the reserves have come to the front of the '
                  'design.'),
        dict(stem='Which choice best describes the function of the paragraph on mains hum?',
             opts=['It turns from the designed use to an accidental one',
                   'It introduces the idea of inertia for the first time',
                   'It argues that the frequency record is unreliable',
                   'It reports the deviations a control room acts on'],
             key='A', moves={'B': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The paragraph follows the account of balancing a grid and describes dating an '
                 'audio file against the archive, which is a use the measurement was not kept '
                 'for.',
             trap='C states the objection that only the closing sentence raises.'),
        dict(sibling='PHY-S05-L2',
             sibling_gloss='Text 2 is passage 75 of this book. It derives the heating in a '
                           'conductor as the current squared times the resistance and explains '
                           'why electricity is sent across country at very high voltage.',
             stem='Text 1 reads the balance of a grid from one number. Based on Text 2, what would '
                  'be added to that reading?',
             opts=['The frequency falls when demand exceeds supply',
                   'Control rooms act on deviations of a few hundredths',
                   'Frequency decides how much power a line can lose',
                   'What happens to the power between generator and user'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'wrong_direction'},
             why='Text 2 accounts for the losses in the lines that carry the power, which is the '
                 'part of the system that the frequency in Text 1 says nothing about.',
             trap='A repeats the central fact Text 1 is built on rather than adding to it.'),
        dict(carrier='A grid with many heavy turbines is forgiving. ___ a grid supplied largely '
                     'through electronics has less of this stored motion.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Likewise,', 'As a result,', 'By contrast,', 'In short,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'restatement'},
             why='The second sentence sets the electronic grid against the forgiving one just '
                 'described, so the transition must mark the opposition between them.',
             trap='A treats the two kinds of grid as behaving alike.'),
        dict(carrier='An electricity grid cannot store anything worth mentioning ___ so generation '
                     'must match consumption continuously.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['mentioning, so', 'mentioning so', 'mentioning; so', 'mentioning so,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about generation matching consumption is independent, so the '
                 'conjunction joining it to the clause about storage takes a comma before it.',
             trap='B leaves the clause about storage and the clause about generation unmarked.'),
        dict(goal='explain why a change in the mix of generators changes the design',
             notes=['The rate at which the frequency moves is governed by stored rotational '
                    'energy.',
                    'A grid with many heavy turbines is forgiving.',
                    'A grid supplied through electronics has less of that stored motion.',
                    'The frequency can then move faster than human operators can respond.'],
             stem='The student wants to explain why a change in the mix of generators changes the '
                  'design. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['A grid with many heavy turbines is a forgiving one to run',
                   'The rate of change is governed by stored rotational energy',
                   'Electronics carry less stored motion, so the frequency can move faster than '
                   'an operator and the reserves must be automatic',
                   'The frequency can move faster than human operators can respond'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'restatement'},
             why='Only this choice runs from the missing stored motion to the speed of the change '
                 'and on to the kind of reserve a design now needs.',
             trap='B names the governing quantity without saying what a change in it requires.'),
    ]))

# --- 6 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='PHY-S06-L3',
    ar=dict(
        khulasa='أنّ الضوء يستغرق وقتًا في السير ثبت قبل أن يقدر أحد على قياس ذلك الوقت. فقد '
                'لاحظ أوله رومر سنة ألف وستّمئة وستّ وسبعين أنّ خسوف قمر من أقمار المشتري '
                'يتأخّر إذا بعدت الأرض، فاستنتج أنّ للضوء سرعة منتهية، وذلك خلاف الرأي '
                'العامّ حينها.',
        maana='المعنى أنّ أوّل قياس أرضي كان سنة ألف وثمانمئة وتسع وأربعين، حين أرسل هيبوليت '
              'فيزو شعاعًا في فُرَج دولاب مسنّن سريع الدوران إلى مرآة على خمسة أميال ورجع، '
              'فعند السرعة المناسبة ارتدّ الضوء على السنّ التالي فاختفى، فأعطى زمن طيران من '
              'قياس دوران فحسب.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الدليل: صار الحدّ بحلول '
                  'العشرينيات لا في التوقيت بل في المسافة، لأنّ طول خطّ الأساس الطويل لا '
                  'يُقاس بدقّة التوقيت، ولذلك حُلّت المسألة بالإذابة لا بالحلّ، فأُعيد '
                  'تعريف المتر.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الجملة التي '
             'تسمّي الحدّ وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُقال إنّ '
             'المختبرات ما زالت تقيس سرعة الضوء، مع أنّ النصّ ينفي ذلك. ويقترن المقطع '
             'بالمقطع السادس والسبعين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Romer inferred a finite speed from eclipses in 1676',
                   'Laboratories still measure the speed of light directly',
                   'A measured constant was turned into the standard for measuring',
                   'Fizeau used a toothed wheel and a mirror five miles away'],
             key='C', moves={'A': 'underreach', 'B': 'wrong_direction', 'D': 'underreach'},
             why='The text traces the measurement from Romer to Michelson and then says the '
                 'problem was dissolved in 1983 by making the speed exact and the meter depend on '
                 'it.',
             trap='B denies the text, which says the question of measuring it does not arise.'),
        dict(stem='According to the text, what became the limiting factor by the 1920s?',
             opts=['The length of the long baseline', 'The timing of the returning light',
                   'The speed of the rotating mirror', 'The fraction of a second chosen'],
             key='A', moves={'B': 'wrong_direction', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says the limit was no longer the timing but the distance, because the '
                 'length of a long baseline could not be measured as precisely as the time.',
             trap='B names the thing the text says had stopped being the limit.'),
        dict(claim='the trouble was removed by a decision rather than an experiment',
             stem='Which quotation from the text most strongly supports the claim that the trouble '
                  'was removed by a decision rather than an experiment?',
             opts=[Q('Albert Michelson spent decades on it, using rotating mirrors over longer '
                     'baselines'),
                   Q('That is why the problem was eventually dissolved rather than solved'),
                   Q('What laboratories measure instead is length, by timing light, which is the '
                     'same experiment read backward'),
                   Q('Each redefinition takes a quantity that had been measured and makes it the '
                     'thing against which measurements are made')],
             key='B', moves={'A': 'true_not_asked', 'C': 'near_miss', 'D': 'near_miss'},
             why='The quotation says the problem was dissolved rather than solved, which is '
                 'exactly the difference between a decision and a measurement.',
             trap='C describes what laboratories do now rather than how the trouble was removed.'),
        dict(carrier='A constant of nature became a unit conversion, and the uncertainty moved '
                     'from the speed to the ruler. A laboratory that wants a more precise length '
                     'must therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['measure the speed of light more carefully',
                   'wait for the meter to be redefined again',
                   'use a longer baseline than Michelson did',
                   'time the light over its path more closely'],
             key='D', moves={'A': 'wrong_direction', 'B': 'imported', 'C': 'detail_swap'},
             why='Once the speed is exact by definition, a length is obtained by timing light, so '
                 'improving a length means improving the timing rather than the speed.',
             trap='A tries to refine a quantity the text says is now fixed by definition.'),
        dict(target='finite',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('finite'),
             opts=['very small indeed', 'fixed once and for all', 'limited rather than instant',
                   'able to be measured'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'near_miss'},
             why='Romer concluded that light has a finite speed because the eclipses ran late, so '
                 'the word marks the speed as limited rather than instantaneous.',
             trap='D reads the word as a claim about measurability, which the text says came '
                  'later.'),
        dict(stem='Which choice best describes the function of the sentence about the limit no '
                  'longer being the timing?',
             opts=['It introduces the toothed wheel for the first time',
                   'It explains why a new definition became attractive',
                   'It concedes that the speed was never measured',
                   'It reports the figure reached by the 1920s'],
             key='B', moves={'A': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The sentence names the baseline as the new bottleneck, and the next sentence '
                 'says that is why the problem was dissolved rather than solved.',
             trap='C denies measurements the text traces across three centuries.'),
        dict(sibling='PHY-S06-L2',
             sibling_gloss='Text 2 is passage 76 of this book. It derives reflection, refraction '
                           'and diffraction from the rule that every point on a wavefront acts as '
                           'a source, and ties the spreading of a wave to the size of the gap '
                           'compared with its wavelength.',
             stem='Text 1 reports how the speed of light was pinned down. Based on Text 2, what '
                  'would be added to that report?',
             opts=['What the light does on its way along the baseline',
                   'Fizeau timed a beam over a known distance and back',
                   'The meter is now defined in terms of the speed',
                   'Diffraction fixed the speed of light in 1983'],
             key='A', moves={'B': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 explains what a beam does at a surface and at an edge, which is the '
                 'behavior of the light that Text 1 only times from one end of its path to the '
                 'other.',
             trap='B repeats the method that Text 1 has already described.'),
        dict(carrier='The limit was no longer the timing but the distance, because the length of a '
                     'long baseline could not be measured as precisely as the time could. ___ the '
                     'problem was eventually dissolved rather than solved.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'For instance,', 'For that reason,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'near_miss'},
             why='The dissolving of the problem follows from the baseline being the weaker '
                 'measurement, so the transition must mark a consequence rather than a contrast.',
             trap='B sets the new definition against the difficulty that produced it.'),
        dict(carrier='That light takes time to travel was established before anyone could measure '
                     'the time ___ and Romer argued it from the eclipses of a moon of Jupiter.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['time and', 'time, and', 'time; and', 'time and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about Romer arguing it from the eclipses is independent, so the '
                 'conjunction joining it to the clause about the time takes a comma.',
             trap='A leaves the clause about the time and the clause about Romer unmarked.'),
        dict(goal='explain why nobody measures the speed of light now',
             notes=['By the 1920s the figure was known to a few parts in a hundred thousand.',
                    'The limit was no longer the timing but the length of the baseline.',
                    'In 1983 the meter was redefined as the distance light travels in a stated '
                    'fraction of a second.',
                    'The speed is now exact by definition.'],
             stem='The student wants to explain why nobody measures the speed of light now. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['By the 1920s the figure was known to a few parts in a hundred thousand',
                   'The limit was no longer the timing but the length of the baseline',
                   'The meter was redefined in 1983 in terms of the speed of light',
                   'The baseline had become the weaker measurement, so the speed was fixed by '
                   'definition and the meter defined from it'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'restatement'},
             why='Only this choice joins the failing baseline to the decision that made the speed '
                 'exact, which is why the measurement is no longer attempted.',
             trap='B names the bottleneck without saying what was done about it.'),
    ]))

# --- 7 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='PHY-S07-L3',
    ar=dict(
        khulasa='التصنيف ليس كشفًا، والجدول الدوريّ، وهو ترتيب للعناصر يضع المتشابهة '
                'كيميائيًّا في عمود واحد، كان يمكن أن يكون مجرّد نظام حفظ. والذي جعله شيئًا '
                'آخر أنّ دمتري مندلييف، إذ نشره سنة ألف وثمانمئة وتسع وستّين، ترك فيه '
                'ثقوبًا.',
        maana='المعنى أنّ ترتيبه رتّب العناصر المعروفة بالوزن الذرّي ووضع المتشابهة في عمود '
              'واحد، فاحتاج لإبقاء الأعمدة متّسقة أن يترك ثلاث فُرَج ويُثبت أنّ عناصر توجد '
              'لتشغلها. ثمّ فعل ما لا يقدر عليه كاتب حفظ: تنبّأ بخصائص العناصر الغائبة من '
              'مواضعها.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الدليل: عُزل الغاليوم سنة '
                  'ألف وثمانمئة وخمس وسبعين والسكانديوم سنة تسع وسبعين، وطابق الجرمانيوم '
                  'سنة ستّ وثمانين تنبّؤه للفرجة تحت السيليكون مطابقة أعلنها مكتشفه '
                  'مطبوعة، والجدول الذي يقبل الخطأ يعمل عملًا آخر.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الفقرة التي تذكر '
             'العيوب وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسب الجدول حفظًا لما '
             'عُرف فقط، مع أنّ النصّ يميّزه بالتنبّؤ. ويقترن المقطع بالمقطع السابع والسبعين '
             'في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Atomic number replaced atomic weight in the 1910s',
                   'Mendeleev filed what was known and nothing more',
                   'Germanium was isolated in 1886 below silicon',
                   'A table that risked being wrong did more than file'],
             key='D', moves={'A': 'underreach', 'B': 'wrong_direction', 'C': 'underreach'},
             why='The text says the holes and the predictions are what made the table more than a '
                 'filing system, and that a table able to be wrong does different work.',
             trap='B states the thing the text contrasts his table with.'),
        dict(stem='According to the text, what did Mendeleev predict for the missing elements?',
             opts=['The count of protons in each nucleus',
                   'Weight, density, the oxide formula and the look of the metal',
                   'The year each of them would be isolated',
                   'The column in which the rare earths belong'],
             key='B', moves={'A': 'imported', 'C': 'imported', 'D': 'detail_swap'},
             why='The text says he gave estimates for atomic weight, density, the formula of the '
                 'oxide and the appearance of the metal.',
             trap='A names the ordering principle that only arrived decades later.'),
        dict(claim='the table was capable of being tested',
             stem='Which quotation from the text most strongly supports the claim that the table '
                  'was capable of being tested?',
             opts=[Q('His arrangement put the known elements in order of atomic weight and placed '
                     'chemically similar ones in the same column'),
                   Q('He had a pattern and a nerve, and the explanation arrived half a century '
                     'later'),
                   Q('A table that can be wrong, and is then found to be right, is doing '
                     'different work from one that merely files what is known'),
                   Q('He also predicted elements that do not exist, and insisted for years on an '
                     'error about the position of the rare earths')],
             key='C', moves={'A': 'near_miss', 'B': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation sets a table that can be wrong against one that merely files, '
                 'which is what being capable of a test amounts to.',
             trap='D shows the table producing wrong claims rather than the capacity that makes '
                  'testing possible.'),
        dict(carrier='He then did something a filing clerk could not. He predicted the properties '
                     'of the missing elements from their positions, giving estimates for atomic '
                     'weight, density, the formula of the oxide and the appearance of the metal. A '
                     'gap in his table was therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['a claim that the next chemist could check',
                   'a space left for convenience in printing',
                   'an admission that the columns did not work',
                   'a prediction about the count of protons'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='Each hole came with estimated properties, so the gap carried a statement that an '
                 'isolated element could either match or fail to match.',
             trap='C reads the holes as a failure of the arrangement that produced them.'),
        dict(target='discrete',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('discrete'),
             opts=['quiet and tactful', 'spread out evenly', 'very small in size',
                   'separate and countable'],
             key='D', moves={'A': 'imported', 'B': 'wrong_direction', 'C': 'imported'},
             why='The text says electrons occupy discrete shells with room for fixed numbers, so '
                 'the word names shells that are separate and can be counted.',
             trap='A takes the similar-sounding word about tact rather than the one about '
                  'separateness.'),
        dict(stem='Which choice best describes the function of the paragraph on the defects of the '
                  'table?',
             opts=['It introduces the three gaps for the first time',
                   'It withdraws the predictions as worthless',
                   'It balances the successes with what the table got wrong',
                   'It reports the year germanium was isolated'],
             key='C', moves={'A': 'detail_swap', 'B': 'overreach', 'D': 'detail_swap'},
             why='The paragraph follows the three filled gaps and names the misplaced elements, '
                 'the missing explanation and the predictions that came to nothing.',
             trap='B discards the predictions that the preceding paragraph reports as confirmed.'),
        dict(sibling='PHY-S07-L2',
             sibling_gloss='Text 2 is passage 77 of this book. It explains that a reaction needs '
                           'an activation barrier crossed first, that heat, concentration, '
                           'surface area and a catalyst each change a rate, and that rate and '
                           'extent are separate questions.',
             stem='Text 1 reports a table that made predictions. Based on Text 2, what would be '
                  'added to that report?',
             opts=['Similar elements fall in the same column of the table',
                   'The chemistry that the arrangement was built to organize',
                   'Three gaps were left and later filled by discovery',
                   'The table predicted the activation energy of a reaction'],
             key='B', moves={'A': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 works with the reactions whose similarities put the elements in columns, '
                 'which is the behavior the table in Text 1 arranges without explaining.',
             trap='A repeats the principle of the arrangement as Text 1 already states it.'),
        dict(carrier='A classification is not a discovery, and the periodic table could have been '
                     'no more than a filing system. ___ what made it something else was that '
                     'Mendeleev left holes in it.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['In the event,', 'Likewise,', 'As a result,', 'In conclusion,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'near_miss', 'D': 'restatement'},
             why='The second sentence reports what actually happened in place of the mere filing '
                 'system just entertained, so the transition must mark that turn.',
             trap='C reads the holes as following from the possibility just raised.'),
        dict(carrier='He then did something a filing clerk could not ___ he predicted the '
                     'properties of the missing elements from their positions.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['not, he', 'not he', 'not. He', 'not, and, he'],
             key='C', moves={'A': 'comma_splice', 'B': 'run_on', 'D': 'misplaced'},
             why='The clause about predicting the properties is a complete sentence, so a period '
                 'separates it from the clause about the filing clerk.',
             trap='A splices the clause about the prediction onto the clause about the clerk with '
                  'a comma.'),
        dict(goal='explain why a classification can be more than a filing system',
             notes=['Mendeleev left three gaps to keep the columns consistent.',
                    'He predicted the weight, density, oxide and appearance of the missing '
                    'elements.',
                    'Germanium matched his prediction for the gap below silicon.',
                    'A table that can be wrong and is then found right does different work.'],
             stem='The student wants to explain why a classification can be more than a filing '
                  'system. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['By leaving gaps with predicted properties, the table made claims that a later '
                   'discovery could confirm or refute',
                   'Mendeleev left three gaps to keep the columns consistent',
                   'Germanium matched his prediction for the gap below silicon',
                   'A table that can be wrong does different work from one that files'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice names the gaps, the predicted properties and the possibility of '
                 'refutation together, which is what lifts the table above a filing system.',
             trap='C gives one confirmation without the structure that made it a test.'),
    ]))

# --- 8 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='PHY-S08-L3',
    ar=dict(
        khulasa='المادّة ليس لها متانة واحدة: اختبر مئة مكعّب خرسانة متماثلة في الظاهر '
                'فتنكسر على مدى، لأنّ المتانة متعلّقة بعيوب موزّعة بالقَرعة في المادّة. '
                'ولذلك لا يصمّم المهندسون على المتوسّط، بل يستعملون المتانة المميّزة، أي '
                'قيمة لا يهبط دونها إلّا كسر صغير مذكور من العيّنات.',
        maana='المعنى أنّ رقم التصميم يُنقَص بعد ذلك بمعامل سلامة، أي النسبة بين ما يُبنى '
              'البناء ليتحمّله وما يُتوقّع أن يحمله. وذلك المعامل ليس بدلًا واحدًا عن '
              'الجهل، بل يغطّي أمورًا متمايزة: تبدّد المادّة، والفرق بين عيّنة مختبر وجدار '
              'مصبوب، وارتياب الأحمال، واحتمال صناعة دون المواصفة، وتبعات الانهيار.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الدليل: الحدّ الذاتي '
                  'للمنهج أنّه لا يعالج إلّا الأخطار المدرَجة، فمعامل اثنين على المتانة لا '
                  'يحمي من حمل لم يحسبه أحد، ولا من آلية لم يعرفها أحد.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة القائمة وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُقال إنّ الانهيارات صُحّحت برفع '
             'المعامل، مع أنّ النصّ ينفي ذلك. ويقترن المقطع بالمقطع الثامن والسبعين في '
             'أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['A factor covers listed hazards and nothing else',
                   'Engineers design to the average strength of a material',
                   'Characteristic strength is commonly set at five percent',
                   'The failures were corrected by raising the factor'],
             key='A', moves={'B': 'wrong_direction', 'C': 'underreach', 'D': 'wrong_direction'},
             why='The text explains how the factor is built and then says its inherent limit is '
                 'that it handles only the hazards that have been listed.',
             trap='B contradicts the text, which says engineers do not design to the average.'),
        dict(stem='According to the text, how were the two famous failures corrected?',
             opts=['By raising the safety factor on strength',
                   'By crushing a hundred more concrete cubes',
                   'By adding the missing case to the codes',
                   'By splitting the factor between load and material'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'detail_swap'},
             why='The text says those failures were not corrected by raising the factor but by '
                 'adding the missing load case and the missing material property to the codes.',
             trap='A names the remedy the text explicitly says was not the one used.'),
        dict(claim='the method is blind in a way a larger margin cannot repair',
             stem='Which quotation from the text most strongly supports the claim that the method '
                  'is blind in a way a larger margin cannot repair?',
             opts=[Q('Test a hundred nominally identical concrete cubes and they break over a '
                     'range'),
                   Q('Modern codes split it into separate factors applied to the load and to the '
                     'material'),
                   Q('Codes are therefore revised after failures rather than before them'),
                   Q('A factor of two on strength is no protection against a load nobody '
                     'considered')],
             key='D', moves={'A': 'true_not_asked', 'B': 'true_not_asked', 'C': 'near_miss'},
             why='The quotation says a factor of two gives no protection against an unconsidered '
                 'load, which is the blindness the claim describes.',
             trap='C reports when codes change rather than what a margin cannot do.'),
        dict(carrier='Those failures were not corrected by raising the factor. They were corrected '
                     'by adding the missing load case and the missing material property to the '
                     'codes, after which the old factor was adequate. The original factor was '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['too small for the loads it did cover',
                   'large enough once the list was complete',
                   'the cause of both of the failures',
                   'applied to the load and the material separately'],
             key='B', moves={'A': 'wrong_direction', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The text says the old factor was adequate once the missing case and property '
                 'were added, so the shortfall lay in the list rather than in the margin.',
             trap='A blames the size of the factor, which the text says needed no change.'),
        dict(target='inherent',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('inherent'),
             opts=['belonging to it by nature', 'inherited from an earlier code',
                   'agreed by the standards bodies', 'easily removed by revision'],
             key='A', moves={'B': 'imported', 'C': 'imported', 'D': 'wrong_direction'},
             why='The text calls it the inherent limit of the method, so the word marks the limit '
                 'as belonging to the method itself rather than to a particular code.',
             trap='D reverses the sense, since the limit is not something a revision takes away.'),
        dict(stem='Which choice best describes the function of the list of things a factor covers?',
             opts=['It introduces the characteristic strength by name',
                   'It concedes that the factor covers nothing at all',
                   'It reports the figure used for concrete cubes',
                   'It shows that the factor is not one allowance'],
             key='D', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='The text says the factor is not a single allowance for ignorance and then names '
                 'variability, the laboratory specimen, the loads, workmanship and consequences.',
             trap='B denies the coverage that the list is there to set out.'),
        dict(sibling='PHY-S08-L2',
             sibling_gloss='Text 2 is passage 78 of this book. It sets out stress, the yield '
                           'point, the ultimate strength and toughness as four numbers a designer '
                           'needs, and says the choice of material is a choice about what kind of '
                           'failure is acceptable.',
             stem='Text 1 explains how a margin is chosen. Based on Text 2, what would be added to '
                  'that explanation?',
             opts=['A factor covers the variability of the material',
                   'Codes are revised after failures rather than before',
                   'Which kind of failure the margin is meant to avert',
                   'A safety factor replaces the four numbers entirely'],
             key='C', moves={'A': 'restatement', 'B': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 distinguishes a material that sags and warns from one that shatters, '
                 'which decides what the margin in Text 1 is actually buying.',
             trap='A repeats one item from the list that Text 1 has already given.'),
        dict(carrier='That factor is not a single allowance for ignorance. ___ it covers several '
                     'distinct things: the variability of the material, the difference between a '
                     'laboratory specimen and a cast wall, and uncertainty in the loads.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Likewise,', 'Instead,', 'As a result,', 'For example,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'near_miss', 'D': 'near_miss'},
             why='The second sentence says what the factor does cover in place of the single '
                 'allowance just denied, so the transition must mark a substitution.',
             trap='D treats the whole list as one example among others.'),
        dict(carrier='A material does not have one strength ___ and a hundred nominally identical '
                     'cubes break over a range.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['strength; and', 'strength and', 'strength: and', 'strength, and'],
             key='D', moves={'A': 'wrong_mark', 'B': 'run_on', 'C': 'wrong_mark'},
             why='The clause about a hundred cubes breaking over a range is independent, so the '
                 'conjunction joining it to the clause about one strength takes a comma.',
             trap='B leaves the clause about one strength and the clause about the cubes '
                  'unmarked.'),
        dict(goal='explain why codes are revised after failures',
             notes=['The factor handles only the hazards that have been listed.',
                    'A factor of two is no protection against a load nobody considered.',
                    'The failures were corrected by adding the missing case to the codes.',
                    'After that the old factor was adequate.'],
             stem='The student wants to explain why codes are revised after failures. Which choice '
                  'most effectively uses relevant information from the notes to accomplish that '
                  'goal?',
             opts=['The factor handles only the hazards that have been listed',
                   'A margin protects against listed hazards alone, so a failure is what reveals '
                   'the item the list was missing',
                   'A factor of two is no protection against an unconsidered load',
                   'After the addition the old factor turned out to be adequate'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice joins the limit of a margin to the role a failure plays in '
                 'completing the list, which is the sequence the goal asks about.',
             trap='C names the limit without saying how the missing item comes to light.'),
    ]))

# --- 9 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='PHY-S09-L3',
    ar=dict(
        khulasa='الكربون المشعّ، أي الصورة الثقيلة من الكربون المتكوّنة باستمرار في أعلى '
                'الجوّ، تأخذه كلّ كائن حيّ بالغذاء أو بالتمثيل الضوئي. وما دام الكائن حيًّا '
                'كانت نسبته فيه مطابقة لنسبة الجوّ، وإذا مات توقّف الأخذ وتحلّل ما فيه بعمر '
                'نصف نحو خمسة آلاف وسبعمئة سنة.',
        maana='المعنى أنّ أربعة شروط لا بدّ أن تتحقّق قبل أن يعني التأريخ شيئًا: أن تكون '
              'العيّنة عضوية وأن تكون قد توقّفت عن تبادل الكربون في اللحظة المقصودة، ولذلك '
              'يؤرّخ المنهج موت الشجرة لا بناء البيت؛ وألّا تكون ملوّثة، فأثر من كربون حديث '
              'يُظهر عيّنة قديمة أحدث بكثير.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الدليل: والشرط الرابع أن '
                  'تكون نسبة الجوّ وقتها معلومة، وهي ليست كذلك، فيُعالَج ذلك بمنحنى معايرة '
                  'يحوّل القياس إلى سنين تقويمية بعيّنات معلومة العمر، وحلقات الأشجار '
                  'تعطي ذلك العمر لآخر اثني عشر ألف سنة.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الشروط الأربعة '
             'وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُقال إنّ المنهج يؤرّخ بناء '
             'البيت، مع أنّ النصّ يقول إنّه يؤرّخ موت الشجرة. ويقترن المقطع بالمقطع التاسع '
             'والسبعين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The curve is revised every few years',
                   'Four conditions must hold before a date means anything',
                   'The method dates the building of a house',
                   'Tree rings supply ages for the last twelve thousand years'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text explains the decay, then says four conditions have to hold before a '
                 'date means anything, and works through each of them in turn.',
             trap='C reverses the example, since the method dates the death of the tree.'),
        dict(stem='According to the text, what does a trace of modern carbon do to an old sample?',
             opts=['It makes the sample impossible to measure',
                   'It makes the sample look much older',
                   'It shifts the calibration curve itself',
                   'It makes the sample look much younger'],
             key='D', moves={'A': 'overreach', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='The text says the sample must not be contaminated and that a trace of modern '
                 'carbon makes an old sample look much younger.',
             trap='B reverses the direction of the error that contamination produces.'),
        dict(claim='one measurement need not pick out one date',
             stem='Which quotation from the text most strongly supports the claim that one '
                  'measurement need not pick out one date?',
             opts=[Q('in some periods it doubles back, so a single measurement can correspond to '
                     'two or three possible calendar ranges'),
                   Q('Tree rings supply that independent age for the last twelve thousand years, '
                     'one ring at a time'),
                   Q('It must be young enough to measure, which in practice means under about '
                     'fifty thousand years'),
                   Q('Published dates from the 1950s and 1960s often have to be recalculated')],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation says the curve doubles back in some periods, so one measurement '
                 'can answer to two or three possible calendar ranges.',
             trap='B describes how the curve is built rather than what it does to a single '
                  'reading.'),
        dict(carrier='The sample must be organic and must have stopped exchanging carbon at the '
                     'moment of interest, which is why the method dates the death of a tree '
                     'rather than the building of the house. A beam reused from an older building '
                     'would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['date the second building accurately', 'be impossible to measure at all',
                   'give a date older than the house', 'need no calibration curve at all'],
             key='C', moves={'A': 'wrong_direction', 'B': 'overreach', 'D': 'detail_swap'},
             why='The clock stops when the tree dies, so a beam cut long before the house was '
                 'built carries the earlier date rather than the later one.',
             trap='A credits the method with a date it cannot reach from a reused timber.'),
        dict(target='anomalous',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('anomalous'),
             opts=['reported without a range', 'out of keeping with the rest',
                   'measured a second time', 'older than expected'],
             key='B', moves={'A': 'imported', 'C': 'imported', 'D': 'near_miss'},
             why='The text says an anomalous result is more often a contaminated sample than a '
                 'surprise, so the word names a figure that does not fit the rest.',
             trap='D fixes the direction, though such a result could fall either way.'),
        dict(stem='Which choice best describes the function of the four conditions in the text?',
             opts=['They set out what a date has to satisfy',
                   'They introduce the half-life of radiocarbon',
                   'They argue that the method cannot be used',
                   'They report the revisions made to the curve'],
             key='A', moves={'B': 'detail_swap', 'C': 'overreach', 'D': 'detail_swap'},
             why='The text says four conditions have to hold before a date means anything and '
                 'then names the organic sample, the contamination, the age limit and the '
                 'atmosphere.',
             trap='C turns a list of conditions into a case against the method.'),
        dict(sibling='PHY-S09-L2',
             sibling_gloss='Text 2 is passage 79 of this book. It explains that half-life, the '
                           'kind of radiation and the dose govern exposure, and that an alpha '
                           'emitter is almost harmless outside the body and the worst case inside '
                           'it.',
             stem='Text 1 lists the conditions a radiocarbon date needs. Based on Text 2, what '
                  'would be added to that list?',
             opts=['Radiocarbon decays with a half-life of some thousands of years',
                   'A contaminated sample looks younger than it is',
                   'Radiocarbon in a sample is an alpha emitter in bone',
                   'What the same decay does when it happens in a body'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'imported'},
             why='Text 2 treats decay inside living tissue as a hazard rather than a clock, which '
                 'is the other thing the same process does.',
             trap='B repeats the contamination condition that Text 1 has already set out.'),
        dict(carrier='And the atmospheric proportion at the time must be known, which it is not, '
                     'because it has varied with solar activity and with nuclear testing. ___ the '
                     'last condition is handled by a calibration curve.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'In practice,', 'In other words,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'restatement'},
             why='The sentence reports how the difficulty just named is dealt with, so the '
                 'transition must mark the turn to practice rather than a contrast.',
             trap='B sets the curve against the problem it is used to solve.'),
        dict(carrier='While an organism is alive its proportion of radiocarbon matches the '
                     'atmosphere ___ when it dies the intake stops.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['atmosphere. When', 'atmosphere, when', 'atmosphere when',
                   'atmosphere, and, when'],
             key='A', moves={'B': 'comma_splice', 'C': 'run_on', 'D': 'misplaced'},
             why='The clause about the intake stopping at death is a complete sentence, so a '
                 'period separates it from the clause about the living organism.',
             trap='B splices the clause about death onto the clause about the living organism.'),
        dict(goal='explain why a date without a range is not a date',
             notes=['The atmospheric proportion has varied with solar activity and nuclear '
                    'testing.',
                    'A calibration curve converts a measurement into calendar years.',
                    'The curve is not a straight line and in some periods doubles back.',
                    'A single measurement can correspond to two or three calendar ranges.'],
             stem='The student wants to explain why a date without a range is not a date. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['The atmospheric proportion has varied with solar activity and testing',
                   'A calibration curve converts a measurement into calendar years',
                   'Because the curve doubles back, one measurement can answer to two or three '
                   'calendar ranges, and a bare figure hides them',
                   'The curve is not a straight line at any point along it'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'restatement'},
             why='Only this choice joins the shape of the curve to the several ranges one reading '
                 'allows, which is what a bare figure conceals.',
             trap='B names the conversion without saying why it yields more than one answer.'),
    ]))

# --- 10 ------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='PHY-S10-L3',
    ar=dict(
        khulasa='عُيّنت هنريتا ليفيت في مرصد كلّية هارفرد لتقيس سطوع النجوم على ألواح '
                'فوتوغرافية، أي ألواح زجاج مكسوّة بمستحلب سُجّلت عليه صور السماء. وكان العمل '
                'يُدفع بالساعة، والنساء اللاتي قمن به كُنّ يُسمّين الحاسبات.',
        maana='المعنى أنّها كُلّفت سحابتي ماجلان، فعملت في آلاف الألواح تتبيّن النجوم '
              'المتغيّرة السطوع وتقيس مدّة الدورة في كلّ منها. وبحلول سنة ألف وتسعمئة وثمان '
              'كانت قد وجدت مئات منها، ولاحظت أنّ الأسطع يستغرق أطول، ثمّ أعلنت العلاقة '
              'دقيقة في خمسة وعشرين نجمًا.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الدليل: لأنّ النجوم كلّها '
                  'في السحابة نفسها كانت على البعد نفسه تقريبًا، فصار فرق السطوع الظاهر '
                  'بالضرورة فرقًا في الخرج الحقيقي، وذلك ما جعل العلاقة مرئية هناك ولا '
                  'مكان غيره.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الجملة التي '
             'تفسّر الشرط وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُقال إنّ العلاقة '
             'كان يمكن إيجادها في أيّ موضع من السماء، مع أنّ النصّ ينفي ذلك. ويقترن المقطع '
             'بالمقطع الثمانين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The plates she used are still held at Harvard',
                   'The relation could have been found anywhere in the sky',
                   'Systematic measurement in one place yielded a universal tool',
                   'Leavitt stated the relation for twenty-five stars in 1912'],
             key='C', moves={'A': 'underreach', 'B': 'wrong_direction', 'D': 'underreach'},
             why='The text says she worked through thousands of plates, that the common distance '
                 'of the cloud is what made the relation visible there, and that it became the '
                 'most useful tool for distance.',
             trap='B denies the point that the relation was visible there and nowhere else.'),
        dict(stem='According to the text, why was the relation visible in the Magellanic Clouds?',
             opts=['The stars there lay at roughly the same distance',
                   'The plates from the clouds were of better quality',
                   'The periods there were longer than elsewhere',
                   'Hubble had already measured the distance to them'],
             key='A', moves={'B': 'imported', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says all the stars lay in the same cloud and so at roughly the same '
                 'distance, which turned differences in apparent brightness into differences in '
                 'real output.',
             trap='C invents a property of the periods that the text does not report.'),
        dict(claim='the relation is what turns a timing into a distance',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'relation is what turns a timing into a distance?',
             opts=[Q('The work was paid by the hour and the women who did it were called '
                     'computers'),
                   Q('Find such a star anywhere, time its cycle, and its true brightness follows '
                     'from the relation; compare that with how bright it looks and the distance '
                     'follows'),
                   Q('the logarithm of the period varies with the brightness along a straight '
                     'line'),
                   Q("Different calibrations of Leavitt's law converge now within a few percent")],
             key='B', moves={'A': 'true_not_asked', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation runs the whole procedure, from timing a cycle to the true '
                 'brightness and on to the distance, which is the conversion the claim names.',
             trap='C states the relation without the steps that turn it into a distance.'),
        dict(carrier='Because all the stars in question lay in the same cloud, they were all at '
                     'roughly the same distance, so differences in their apparent brightness had '
                     'to be differences in their real output. That is what made the relation '
                     'visible there and nowhere else. A survey of the whole sky would therefore '
                     '___',
             stem='Which choice most logically completes the text?',
             opts=['have shown the relation more clearly still',
                   'have measured the periods more accurately',
                   'have required no photographic plates at all',
                   'have mixed near stars with far ones'],
             key='D', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'C': 'imported'},
             why='The common distance of the cloud is what let apparent brightness stand for real '
                 'output, and a survey of the whole sky would lose that condition.',
             trap='A reverses the advantage the single cloud is said to supply.'),
        dict(target='converge',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('converge'),
             opts=['meet at one point', 'gather for a meeting', 'come close in value',
                   'move further apart'],
             key='C', moves={'A': 'near_miss', 'B': 'imported', 'D': 'wrong_direction'},
             why='Different calibrations of the law are said to converge within a few percent, so '
                 'the word names figures coming close to one another in value.',
             trap='D reverses the sense, since the calibrations are drawing together.'),
        dict(stem='Which choice best describes the function of the sentence about the same cloud?',
             opts=['It introduces the photographic plates for the first time',
                   'It explains why the pattern could be seen at all',
                   'It concedes that the relation is only local',
                   'It reports the year Hubble used the relation'],
             key='B', moves={'A': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The sentence says the common distance turned apparent brightness into real '
                 'output, and the next sentence says that is what made the relation visible there '
                 'and nowhere else.',
             trap='C confines the relation itself, though the text calls it the most useful tool '
                  'anywhere.'),
        dict(sibling='PHY-S10-L2',
             sibling_gloss='Text 2 is passage 80 of this book. It describes a ladder of distance '
                           'methods, with parallax as the lowest rung and standard candles above '
                           'it, and says an error low on the ladder moves every distance above '
                           'it.',
             stem='Text 1 reports the discovery of a relation. Based on Text 2, what would be '
                  'added to that report?',
             opts=['Where the relation sits among the other methods',
                   'The brighter of the variable stars took longer to cycle',
                   'Timing a cycle gives the true brightness of a star',
                   'The lowest rung is calibrated by the relation'],
             key='A', moves={'B': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 puts standard candles on a rung above the geometry that calibrates them, '
                 'which is where the relation of Text 1 does its work.',
             trap='C repeats the procedure that Text 1 has already described.'),
        dict(carrier='By 1908 she had found hundreds of them, and she noticed that the brighter '
                     'ones took longer. ___ in 1912 she stated the relation precisely for '
                     'twenty-five stars.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'In other words,', 'Four years later,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'restatement'},
             why='The sentence moves from the first noticing to the exact statement, so the '
                 'transition must mark the passage of time rather than a contrast.',
             trap='C treats the precise statement as another way of putting the first '
                  'observation.'),
        dict(carrier='The work was paid by the hour ___ and the women who did it were called '
                     'computers.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['hour and', 'hour, and', 'hour; and', 'hour and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about what the women were called is independent, so the conjunction '
                 'joining it to the clause about the hourly pay takes a comma.',
             trap='A leaves the clause about the pay and the clause about the name unmarked.'),
        dict(goal='explain why the relation could be found only in that place',
             notes=['Leavitt was assigned the Magellanic Clouds and worked through thousands of '
                    'plates.',
                    'All the stars in question lay in the same cloud.',
                    'They were therefore at roughly the same distance.',
                    'Differences in apparent brightness had to be differences in real output.'],
             stem='The student wants to explain why the relation could be found only in that '
                  'place. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['Leavitt worked through thousands of photographic plates by hand',
                   'All the stars in question lay in the same cloud of stars',
                   'Differences in apparent brightness had to be differences in output',
                   'Stars in one cloud share a distance, so how bright they look reports how '
                   'bright they are'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'restatement'},
             why='Only this choice joins the shared distance to the reading of apparent brightness '
                 'as real output, which is the condition the place supplied.',
             trap='B names the shared cloud without saying what the shared distance makes '
                  'possible.'),
    ]))

if __name__ == '__main__':
    qemit.emit(FIELD, LEVEL, SETS)
