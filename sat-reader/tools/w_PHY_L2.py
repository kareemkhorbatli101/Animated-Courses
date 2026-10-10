"""Physical Sciences, Level 2: ten question sets."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

Q = '«%s»'.__mod__
FIELD, LEVEL = 'PHY', 2

SETS = []

# --- 1 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='PHY-S01-L2',
    ar=dict(
        khulasa='التبدّد في إحدى عشرة وزنة يأتي من مصدرين مختلفين اختلافًا تامًّا، وخلطهما '
                'أشيع الأخطاء في معالجة البيانات. فالخطأ العشوائي تبدّد يقع على جانبي القيمة '
                'الحقيقية، سببه حركة الهواء والرجفة وحدود الآلة. والخطأ المنهجي خطأ يدفع كلّ '
                'قراءة في جهة واحدة، سببه ميزان يقرأ زائدًا أو مسطرة تقلّصت.',
        maana='المعنى أنّ المتوسّط يصلح الأول ولا يملك شيئًا تجاه الثاني. فإذا أكثرتَ '
              'القراءات تقلّص الجزء العشوائي بنسبة الجذر التربيعي لعددها، فمئة وزنة أحسن من '
              'واحدة عشر مرّات. ولا يمسّ التكرارُ ميزانًا يقرأ ملّيغرامين زائدًا، لأنّ ذلك '
              'الخطأ حاضر بعينه في كلّ قراءة وفي المتوسّط.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الآلية: لكلّ خطأ دواؤه، '
                  'فالعشوائي يُقلَّل بالتكرار وبتثبيت الجهاز وبآلة أدقّ، والمنهجي لا '
                  'يُكشف إلّا بمقارنة بشيء مستقلّ، كميزان ثانٍ أو كتلة مُصدَّقة أو منهج '
                  'آخر كلّه.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الجملة المفسّرة '
             'وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسب التكرار كافيًا لكلّ '
             'خطأ، مع أنّ النصّ ينفي ذلك. ويقترن المقطع بالمقطع الحادي والعشرين في أسئلة '
             'النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Measurements of the speed of light drifted between 1900 and 1950',
                   'Two kinds of error need two different remedies',
                   'Repetition removes every kind of error from a result',
                   'Random error falls as the square root of the number of readings'],
             key='B', moves={'A': 'true_not_asked', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text separates random scatter from a bias that pushes every reading the same '
                 'way and says averaging repairs the first and is helpless against the second.',
             trap='C states exactly what the text denies about a balance that reads high.'),
        dict(stem='According to the text, how is a systematic error found?',
             opts=['By taking a hundred readings instead of one',
                   'By steadying the apparatus on a firmer bench',
                   'By reporting it alongside the statistical figure',
                   'By comparison with something independent'],
             key='D', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'C': 'near_miss'},
             why='The text says systematic error is found only by comparison with something '
                 'independent, such as a second balance, a certified mass or a different method.',
             trap='A names the remedy for random error, which the text says cannot touch a bias.'),
        dict(claim='precision and correctness are different things',
             stem='Which quotation from the text most strongly supports the claim that precision '
                  'and correctness are different things?',
             opts=[Q('A thousand careful measurements of the wrong thing give a very precise '
                     'wrong answer'),
                   Q('Random error is reduced by repeating, by steadying the apparatus, and by '
                     'using a finer instrument'),
                   Q('a hundred weighings are ten times better than one'),
                   Q('Later workers concluded that experimenters had unconsciously weighted '
                     'their results toward the accepted figure')],
             key='A', moves={'B': 'true_not_asked', 'C': 'near_miss', 'D': 'near_miss'},
             why='The quotation sets a thousand careful readings against the wrongness of the '
                 'answer, which separates how tightly a result clusters from whether it is '
                 'right.',
             trap='C gives the gain from repeating rather than the limit of that gain.'),
        dict(carrier='When two laboratories disagree by more than their stated uncertainties, at '
                     'least one of them has a systematic error it has not found. A pair of '
                     'laboratories that agreed closely would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['have shown that neither has a bias',
                   'have reduced their random error to zero',
                   'still be able to share the same bias',
                   'have used two independent methods by definition'],
             key='C', moves={'A': 'overreach', 'B': 'overreach', 'D': 'imported'},
             why='A bias is found only by comparison with something independent, so two '
                 'laboratories using the same arrangement could agree and be wrong together.',
             trap='A reads agreement as proof of correctness, which the speed of light example '
                  'contradicts.'),
        dict(target='refine',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('refine'),
             opts=['purify a raw material', 'improve by correction', 'state more politely',
                   'reduce to a single figure'],
             key='B', moves={'A': 'imported', 'C': 'imported', 'D': 'near_miss'},
             why='Experimenters are said to refine a result by attacking both kinds of error, so '
                 'the word names improving it by correction.',
             trap='A takes the industrial sense of the word, which has nothing to do with a '
                  'reading.'),
        dict(stem='Which choice best describes the function of the sentence about the balance '
                  'reading two milligrams high?',
             opts=['It shows why repetition cannot reach the second kind of error',
                   'It introduces the square root rule for the first time',
                   'It concedes that averaging is of no use at all',
                   'It reports the figure a certified mass carries'],
             key='A', moves={'B': 'detail_swap', 'C': 'overreach', 'D': 'imported'},
             why='The sentence says the error is present and identical in every reading, including '
                 'the average, which is why nothing about repetition touches it.',
             trap='C extends the limit to averaging in general, though averaging repairs random '
                  'error.'),
        dict(sibling='PHY-S01-L1',
             sibling_gloss='Text 2 is passage 21 of this book. It reports eleven weighings of one '
                           'stone on a laboratory balance, names the door, the vibration, the oil '
                           'and the warming room as sources of the spread, and gives the average '
                           'with the spread beside it.',
             stem='Text 1 separates two kinds of error. Based on Text 2, what would be added to '
                  'that separation?',
             opts=['Averaging is helpless against a balance that reads high',
                   'Random scatter falls on both sides of the true value',
                   'The eleven readings revealed a bias in the balance',
                   'A worked case of the first kind of error alone'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'wrong_direction'},
             why='The sources in Text 2, the air, the bench and the warming metal, all scatter the '
                 'readings both ways, so it supplies an instance of random error and no bias.',
             trap='A repeats the point Text 1 makes about averaging rather than adding anything.'),
        dict(carrier='Averaging repairs the first and is helpless against the second. ___ take '
                     'enough readings and the random part shrinks in proportion to the square '
                     'root of the number of readings.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'In the first case,', 'In conclusion,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'restatement'},
             why='The sentence develops the first half of the claim just made, so the transition '
                 'must point back to that half rather than set itself against it.',
             trap='B treats the shrinking of the random part as a qualification of the repair.'),
        dict(carrier='Random error is scatter that falls on both sides of the true value ___ and '
                     'systematic error pushes every reading the same way.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['value, and', 'value and', 'value; and', 'value and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about systematic error pushing every reading one way is independent, '
                 'so the conjunction joining it to the clause about scatter takes a comma.',
             trap='B leaves the clause about scatter and the clause about pushing unmarked.'),
        dict(goal='explain why agreement between laboratories is not proof',
             notes=['A systematic error is identical in every reading and survives averaging.',
                    'It is found only by comparison with something independent.',
                    'Measurements of the speed of light drifted steadily between 1900 and 1950.',
                    'Each new value sat inside the error bars of the last and all were wrong the '
                    'same way.'],
             stem='The student wants to explain why agreement between laboratories is not proof. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['A systematic error survives averaging in every reading taken',
                   'A bias is found only by comparison with something independent',
                   'The published speeds of light agreed with each other for fifty years and were '
                   'all wrong in the same direction',
                   'Measurements of the speed of light drifted steadily for fifty years'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice reports agreement and shared wrongness together, which is what '
                 'shows that agreeing results can still be mistaken.',
             trap='B names the remedy without showing a case where agreement misled anyone.'),
    ]))

# --- 2 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='PHY-S02-L2',
    ar=dict(
        khulasa='شاحنة محمّلة وسيّارة صغيرة تسيران بالسرعة نفسها على الطريق نفسه لا تقفان في '
                'مسافة واحدة، والسبب سلسلة ثلاث خطوات لا واقعة واحدة. فالخطوة الأولى أنّ '
                'الوقوف يحتاج قوّة، والقوّة المتاحة وحيدة هي الاحتكاك، وهي تتناسب تقريبًا مع '
                'الوزن الضاغط.',
        maana='المعنى أنّ الخطوة الثانية تنقض الأولى: فالمركبة الأثقل تحمل طاقة حركة أكبر، '
              'ولا بدّ أن تُزال كلّها حرارةً في المكابح والإطارات، فتظهر الكتلة في طرفي '
              'المسألة وتتقاصّ في معظمها. والذي لا يتقاصّ هو السرعة، لأنّ طاقة الحركة ترتفع '
              'بمربّعها.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الآلية: والخطوة الثالثة هي '
                  'التي ينساها السائقون، فالمركبة تسير قبل الكبح مدّة الانتباه '
                  'والاستجابة، نحو ثلاثة أرباع الثانية، وتقطع في تلك المدّة مسافة تتناسب '
                  'مع السرعة لا مع مربّعها، والجزءان يُجمعان.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الجملة التي تنقض '
             'ما قبلها وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُقال إنّ الأثقل يقف '
             'في مسافة أقصر، مع أنّ النصّ يبيّن التقاصّ. ويقترن المقطع بالمقطع الثاني '
             'والعشرين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Driving manuals round their stopping distance tables',
                   'A heavy vehicle stops in a shorter distance than a light one',
                   'Mass largely cancels, and speed is what decides the distance',
                   'Reaction time is usually near three quarters of a second'],
             key='C', moves={'A': 'underreach', 'B': 'wrong_direction', 'D': 'underreach'},
             why='The text says mass appears on both sides of the problem and largely cancels, and '
                 'that what does not cancel is speed, whose square sets the braking distance.',
             trap='B reverses the outcome of the first two steps of the chain.'),
        dict(stem='According to the text, how does reaction distance depend on speed?',
             opts=['It is proportional to the speed itself',
                   'It rises with the square of the speed',
                   'It is fixed at three quarters of a second',
                   'It falls as the speed rises'],
             key='A', moves={'B': 'detail_swap', 'C': 'near_miss', 'D': 'wrong_direction'},
             why='The text says that in the reaction time the vehicle covers a distance '
                 'proportional to the speed, not to its square.',
             trap='B gives the dependence of the braking part rather than of the reaction part.'),
        dict(claim='the heavier vehicle gains and loses at the same time',
             stem='Which quotation from the text most strongly supports the claim that the heavier '
                  'vehicle gains and loses at the same time?',
             opts=[Q('the only force available is friction, which is the force between the tires '
                     'and the road surface'),
                   Q('Mass appears on both sides of the problem and largely cancels'),
                   Q('Double the speed and the stopping distance roughly quadruples'),
                   Q('They assume a dry road and a fit driver, and both assumptions fail '
                     'regularly')],
             key='B', moves={'A': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation says mass enters the problem twice and cancels, which is the gain '
                 'in braking force set against the extra energy to be removed.',
             trap='A names only the force side of the pair rather than both sides.'),
        dict(carrier='Before any braking happens the vehicle travels for the time it takes to '
                     'notice and react, usually near three quarters of a second. In that time it '
                     'covers a distance proportional to the speed, not to its square. A tired '
                     'driver therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['quadruples the braking part of the distance',
                   'removes the reaction part altogether',
                   'changes the friction between tire and road',
                   'adds to the part that rises with speed alone'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='A longer reaction time lengthens the first part of the distance, and that part '
                 'is proportional to the speed rather than to its square.',
             trap='A moves the effect to the braking part, which the reaction time does not '
                  'touch.'),
        dict(target='accelerate',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('accelerate'),
             opts=['hurry a process along', 'gain in speed', 'change direction of motion',
                   'press harder on the road'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'near_miss'},
             why='The text says tires cannot accelerate sideways while already working hard to '
                 'slow down, so the word names a change of motion sideways rather than a gain in '
                 'speed.',
             trap='B takes the everyday sense, which the word sideways in the same phrase rules '
                  'out.'),
        dict(stem='Which choice best describes the function of the sentence saying the second step '
                  'undoes the first?',
             opts=['It introduces the reaction time for the first time',
                   'It warns a reader that the chain is not cumulative',
                   'It concedes that friction plays no part at all',
                   'It reports the figure for stopping at seventy miles'],
             key='B', moves={'A': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The sentence comes between the gain in braking force and the extra energy to be '
                 'removed, and tells a reader that the second cancels the first.',
             trap='C denies the friction that the first step is built on.'),
        dict(sibling='PHY-S02-L1',
             sibling_gloss='Text 2 is passage 22 of this book. It reports that a hammer and a '
                           'feather dropped on the Moon in 1971 landed together, and that the '
                           'difference on Earth comes from air rather than from weight.',
             stem='Text 1 explains why mass cancels in stopping. Based on Text 2, what would be '
                  'added to that explanation?',
             opts=['A case in which mass makes no difference at all',
                   'A heavy vehicle gets more braking force than a light one',
                   'Kinetic energy rises with the square of the speed',
                   'Air resistance is what makes a truck stop slowly'],
             key='A', moves={'B': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 shows two very different masses falling alike once the air is gone, which '
                 'is the clean version of the canceling that Text 1 derives in two steps.',
             trap='B repeats the first step of the chain that Text 1 has already given.'),
        dict(carrier='That force is roughly proportional to the weight pressing down, so a heavy '
                     'vehicle does get more braking force than a light one. ___ the second step '
                     'undoes the first.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Likewise,', 'For instance,', 'In other words,', 'All the same,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'restatement'},
             why='The sentence turns against the advantage just granted to the heavy vehicle, so '
                 'the transition must mark a concession rather than a likeness or a restatement.',
             trap='A treats the undoing of the first step as another instance of it.'),
        dict(carrier='Mass appears on both sides of the problem and largely cancels ___ and what '
                     'does not cancel is speed.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['cancels and', 'cancels, and', 'cancels; and', 'cancels and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about what does not cancel is independent, so the conjunction joining '
                 'it to the clause about mass takes a comma before it.',
             trap='A leaves the clause about mass and the clause about speed unmarked.'),
        dict(goal='explain why doubling the speed does more than double the distance',
             notes=['Kinetic energy rises with the square of the speed.',
                    'That energy must all be removed as heat in the brakes and tires.',
                    'Double the speed and the stopping distance roughly quadruples.',
                    'Reaction distance is proportional to the speed rather than to its square.'],
             stem='The student wants to explain why doubling the speed does more than double the '
                  'distance. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Kinetic energy rises with the square of the speed of the vehicle',
                   'Reaction distance is proportional to the speed rather than its square',
                   'That energy must all be removed as heat in the brakes and tires',
                   'The energy to be removed goes up with the square of the speed, so twice the '
                   'speed takes roughly four times the braking distance'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'underreach'},
             why='Only this choice carries the square in the energy through to the distance, which '
                 'is what explains the fourfold rise the goal asks about.',
             trap='C names what must be removed without saying how much of it there is.'),
    ]))

# --- 3 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='PHY-S03-L2',
    ar=dict(
        khulasa='حساب الطاقة يقوم على قاعدة واحدة، وهي حفظ الطاقة: أنّ الطاقة لا تُخلق ولا '
                'تُفنى وإنّما تُنقل أو تُحوَّل. وتلك القاعدة تجعل كلّ آلة قابلة للمراجعة، '
                'فما دخل لا بدّ أن يخرج في مكان، والسؤال الوحيد كم يخرج منه في الصورة '
                'المطلوبة.',
        maana='المعنى أنّ الحصّة الخارجة في الصورة المطلوبة هي المردود، وأنّ الخسائر تتراكم '
              'بتعدّد الخطوات. ففي محطّة الفحم تصير طاقة الوقود الكيميائية حرارةً، والحرارة '
              'بخارًا، والبخار يدير عنفة، والعنفة تدير مولّدًا، ولكلّ مرحلة مردودها، وأكبر '
              'الخسائر لا مهرب منه.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الآلية: الآلة الحرارية بين '
                  'مرجل وبرج تبريد لا تحوّل من حرارتها إلى حركة إلّا حصّة محدودة، وذلك '
                  'الحدّ متعلّق بالدرجتين وحدهما، فتعطي محطّات الفحم الحديثة نحو أربعين '
                  'في المئة كهرباءً.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة المثال وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن تُقايس تقنيتان بخطوتهما الأخيرة '
             'وحدها، مع أنّ النصّ يسمّي ذلك أشيع طرق الخطأ. ويقترن المقطع بالمقطع الثالث '
             'والعشرين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Carnot worked out the limit in 1824',
                   'An electric heater wastes most of the electricity it uses',
                   'Transmission loses about forty percent of the power',
                   'Efficiencies multiply along a chain, so the last step misleads'],
             key='D', moves={'A': 'underreach', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='The text says the whole chain multiplies rather than adds and that comparing two '
                 'technologies by their last step alone is the standard way of getting this '
                 'wrong.',
             trap='B denies the text, which calls the heater close to perfect at its own step.'),
        dict(stem='According to the text, what does the ceiling on a heat engine depend on?',
             opts=['On the chemical energy of the fuel burned',
                   'On its hot and its cold temperatures',
                   'On the efficiency of the generator it drives',
                   'On the share lost in transmission'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says a heat engine cannot convert more than a limited share of its heat '
                 'into motion and that the limit depends only on the two temperatures.',
             trap='A names what the fuel supplies rather than what sets the ceiling.'),
        dict(claim='a judgment about one step can mislead about the whole',
             stem='Which quotation from the text most strongly supports the claim that a judgment '
                  'about one step can mislead about the whole?',
             opts=[Q('Whatever goes in must come out somewhere, and the only question is how much '
                     'of it comes out in the form that was wanted'),
                   Q('Modern coal plants yield about forty percent of the fuel energy as '
                     'electricity'),
                   Q('Comparing two technologies by their last step alone is the standard way of '
                     'getting this wrong'),
                   Q('The theoretical limit on a heat engine was worked out by Sadi Carnot in '
                     '1824, before anyone had a clear idea of what heat was')],
             key='C', moves={'A': 'near_miss', 'B': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation names the error directly: judging a technology by its final step '
                 'is said to be the standard way of getting the comparison wrong.',
             trap='B gives the figure for one stage rather than the warning about judging by '
                  'one.'),
        dict(carrier='But if that electricity came from a coal station, it represents more than '
                     'twice the fuel that burning the coal in the room would have needed. An '
                     'electric heater is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['efficient at its step and wasteful overall',
                   'the most efficient way to warm a room',
                   'inefficient at its own step as well',
                   'limited by the temperatures of the boiler'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='All the electricity becomes heat at the heater, but the station behind it '
                 'discarded most of the fuel energy, so the two verdicts point in opposite '
                 'directions.',
             trap='C denies the near perfection that the same sentence grants the heater.'),
        dict(target='yield',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('yield'),
             opts=['give way to pressure', 'bend without breaking', 'surrender a claim',
                   'deliver as output'],
             key='D', moves={'A': 'near_miss', 'B': 'imported', 'C': 'imported'},
             why='The text says modern coal plants yield about forty percent of the fuel energy as '
                 'electricity, so the word names what the plant delivers.',
             trap='A takes the sense of giving way, which a power station does not do.'),
        dict(stem='Which choice best describes the function of the sentence about the heater and '
                  'the coal?',
             opts=['It introduces the conservation of energy for the first time',
                   'It concedes that the chain of steps cannot be audited',
                   'It gives a case where one step flatters the whole',
                   'It reports the year Carnot published his result'],
             key='C', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='The heater is granted near perfection at its own step and then charged with more '
                 'than twice the fuel once the station is counted, which is the case the warning '
                 'rests on.',
             trap='B denies the auditing that the opening rule makes possible.'),
        dict(sibling='PHY-S03-L1',
             sibling_gloss='Text 2 is passage 23 of this book. It follows energy from a Scottish '
                           'lake down a pipe to a turbine, a generator and a kitchen bulb, and '
                           'says the chain is only as efficient as its worst step.',
             stem='Text 1 explains how efficiencies multiply. Based on Text 2, what would be added '
                  'to that explanation?',
             opts=['Each stage of the chain has its own efficiency',
                   'A chain whose worst step is at the user, not the plant',
                   'The whole chain multiplies rather than adds',
                   'A water turbine is bound by the same temperature ceiling'],
             key='B', moves={'A': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 puts the weak link in the kitchen rather than in the generating hall, '
                 'which is the opposite arrangement from the coal station of Text 1.',
             trap='C repeats the rule Text 1 states about the chain rather than adding to it.'),
        dict(carrier='Each stage has its own efficiency, and the biggest loss is unavoidable. ___ '
                     'a heat engine working between a boiler and a cooling tower cannot convert '
                     'more than a limited share of its heat into motion.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['In particular,', 'By contrast,', 'Even so,', 'In conclusion,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'restatement'},
             why='The second sentence names the unavoidable loss just referred to, so the '
                 'transition must point to a particular case rather than a contrast or a '
                 'conclusion.',
             trap='C sets the heat engine limit against the claim that the loss is unavoidable.'),
        dict(carrier='That rule makes every machine auditable ___ whatever goes in must come out '
                     'somewhere.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['auditable, whatever', 'auditable whatever', 'auditable. Whatever',
                   'auditable, and, whatever'],
             key='C', moves={'A': 'comma_splice', 'B': 'run_on', 'D': 'misplaced'},
             why='The clause saying whatever goes in must come out is a complete sentence, so a '
                 'period separates it from the clause about the machine being auditable.',
             trap='A splices the clause about coming out onto the clause about auditing with a '
                  'comma.'),
        dict(goal='explain why a technology cannot be judged by its last step',
             notes=['Energy is never created or destroyed but only moved or converted.',
                    'Each stage of the chain has its own efficiency, and the losses compound.',
                    'An electric heater turns all the electricity it uses into heat.',
                    'Electricity from a coal station represents more than twice the fuel burned '
                    'in the room.'],
             stem='The student wants to explain why a technology cannot be judged by its last '
                  'step. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['The heater is perfect at its own step, but the station behind it burned twice '
                   'the fuel, so the chain settles the question',
                   'Each stage of the chain has its own efficiency and the losses compound',
                   'An electric heater turns all the electricity it uses into heat',
                   'Energy is never created or destroyed but only moved or converted'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice sets the perfect last step against the fuel spent behind it, '
                 'which is what shows a single step cannot settle the comparison.',
             trap='C gives the flattering step alone and so makes the very mistake in question.'),
    ]))

# --- 4 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='PHY-S04-L2',
    ar=dict(
        khulasa='سلوك الغاز تحكمه علاقة واحدة بين ثلاث كمّيات: الضغط مضروبًا في الحجم '
                'يتناسب مع الحرارة المطلقة، وهي الحرارة محسوبة من أبرد نقطة ممكنة لا من نقطة '
                'تجمّد الماء. فثبّت أيّتين من الثلاث يتبعْ الثالثُ، وتلك الجملة الواحدة '
                'تتنبّأ بقدر مُدهش.',
        maana='المعنى أنّ الحالات تُستعرض واحدة واحدة: ثبّت الحرارة واضغط الغاز في نصف الحجم '
              'فيتضاعف الضغط، وذلك منفاخ دراجة بصمّامه مغلق؛ وثبّت الحجم وسخّن الغاز فيرتفع '
              'الضغط، ولهذا ينفجر وعاء محكم في حريق؛ وثبّت الضغط وسخّن الغاز فيتوسّع، وذلك '
              'منطاد الهواء الحارّ.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الآلية: والحالة الرابعة هي '
                  'النافعة للجوّ، فالهواء المدفوع على سفح جبل يبلغ علوًّا ضغطُ ما حوله فيه '
                  'أقلّ، فيتوسّع ويعمل عملًا على ما حوله ويبرد دون أن يفقد حرارة إلى شيء، '
                  'بنحو عشر درجات لكلّ ألف متر.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة سلسلة الحالات وعن '
             'معنى كلمة في سياقها. والفخّ المتوقّع هنا أن تُحسب العلاقة صالحة في كلّ حال، مع '
             'أنّ النصّ يقول إنّها تفشل فشلًا شديدًا في البخار قرب غليانه. ويقترن المقطع '
             'بالمقطع الرابع والعشرين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['One relation among three quantities predicts a great deal',
                   'The relation holds well for steam near its boiling point',
                   'Warming the air in a balloon by eighty degrees lifts a basket',
                   'Forecasters apply the relation several million times a day'],
             key='A', moves={'B': 'wrong_direction', 'C': 'underreach', 'D': 'true_not_asked'},
             why='The text states the relation, says fixing any two quantities settles the third, '
                 'and then works through four cases from a bicycle pump to a mountain slope.',
             trap='B reverses the limit, since the text says the relation fails badly for steam.'),
        dict(stem='According to the text, at what rate does dry rising air cool?',
             opts=['About eighty degrees in a balloon', 'About one degree per thousand meters',
                   'About ten degrees per thousand meters',
                   'It warms rather than cools as it rises'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'wrong_direction'},
             why='The text says the rate is about ten degrees for every thousand meters of dry '
                 'ascent, which is why mountain tops are cold.',
             trap='D reverses the direction, since the rising air expands and cools.'),
        dict(claim='the relation has a boundary beyond which it fails',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'relation has a boundary beyond which it fails?',
             opts=[Q('Pressure multiplied by volume is proportional to the absolute temperature'),
                   Q('Hold the temperature steady and compress the gas into half the volume, and '
                     'the pressure doubles'),
                   Q('The relation was assembled from three separate laws found by Boyle, '
                     'Charles and Gay-Lussac over about a century and a half'),
                   Q('It holds well for air at ordinary pressures and fails badly for steam near '
                     'its boiling point')],
             key='D', moves={'A': 'near_miss', 'B': 'true_not_asked', 'C': 'true_not_asked'},
             why='The quotation names the range where the relation works and the case where it '
                 'fails badly, which is the boundary the claim describes.',
             trap='A states the relation rather than saying where it stops holding.'),
        dict(carrier='Air pushed up a mountainside arrives at a height where the surrounding '
                     'pressure is lower, expands, does work on the air around it, and cools '
                     'without losing any heat to anything. The cooling is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['caused by heat passing to the surrounding air',
                   'the price of the work the air has done',
                   'the result of the mountain being cold',
                   'about one degree per thousand meters'],
             key='B', moves={'A': 'wrong_direction', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The air loses no heat to anything, so the only account of the drop in '
                 'temperature is the work it does in pushing the surrounding air aside.',
             trap='A supplies a transfer of heat that the sentence rules out.'),
        dict(target='compress',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('compress'),
             opts=['squeeze into less room', 'shorten an account', 'press down upon',
                   'cool by expansion'],
             key='A', moves={'B': 'imported', 'C': 'near_miss', 'D': 'wrong_direction'},
             why='The sentence says to compress the gas into half the volume so that the pressure '
                 'doubles, so the word names squeezing it into less room.',
             trap='B takes the sense used of a piece of writing rather than of a gas.'),
        dict(stem='Which choice best describes the function of the three cases before the weather '
                  'case?',
             opts=['They introduce the absolute temperature for the first time',
                   'They concede that the relation predicts very little',
                   'They report the rate at which dry air cools',
                   'They hold each quantity still in turn to show the rest'],
             key='D', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='Each case fixes one of the three quantities and reads off what the others do, '
                 'which is the instruction the opening relation gives.',
             trap='B denies the predictive reach the cases are there to show.'),
        dict(sibling='PHY-S04-L1',
             sibling_gloss='Text 2 is passage 24 of this book. It reports that the barrel of a '
                           'bicycle pump grows hot within thirty strokes, that the work of the '
                           'piston goes into the motion of the molecules, and that a refrigerator '
                           'uses the same relation in reverse.',
             stem='Text 1 states one relation among three quantities. Based on Text 2, what would '
                  'be added to that statement?',
             opts=['Fixing any two of the three quantities settles the third',
                   'Compressing a gas at fixed temperature doubles the pressure',
                   'What the squeezing does to the molecules themselves',
                   'A refrigerator warms the gas by letting it expand'],
             key='C', moves={'A': 'restatement', 'B': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 explains the heating in terms of work done on fast-moving molecules, '
                 'which is the account behind the relation that Text 1 only states.',
             trap='B repeats the first of the cases that Text 1 works through.'),
        dict(carrier='Hold the pressure steady and warm the gas, and it expands: that is a hot air '
                     'balloon. ___ the fourth case is the useful one for weather.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Finally,', 'In other words,', 'For instance,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The sentence introduces the last of four cases in a numbered run, so the '
                 'transition must mark the end of the sequence rather than a contrast.',
             trap='D treats the weather case as one instance of the balloon case.'),
        dict(carrier='Hold the volume steady and warm the gas ___ and the pressure rises.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['gas; and', 'gas and', 'gas: and', 'gas, and'],
             key='D', moves={'A': 'wrong_mark', 'B': 'run_on', 'C': 'wrong_mark'},
             why='The clause about the pressure rising is independent, so the conjunction joining '
                 'it to the instruction about the volume takes a comma before it.',
             trap='B leaves the clause about the gas and the clause about the pressure unmarked.'),
        dict(goal='explain why a mountain top is cold',
             notes=['Pressure multiplied by volume is proportional to the absolute temperature.',
                    'Air pushed up a mountainside arrives where the surrounding pressure is '
                    'lower.',
                    'It expands, does work on the air around it, and cools without losing heat.',
                    'The rate is about ten degrees for every thousand meters of dry ascent.'],
             stem='The student wants to explain why a mountain top is cold. Which choice most '
                  'effectively uses relevant information from the notes to accomplish that goal?',
             opts=['Pressure multiplied by volume is proportional to the absolute temperature',
                   'Air rising up a slope expands into lower pressure and cools about ten degrees '
                   'for every thousand meters',
                   'Air pushed up a mountainside arrives where the pressure is lower',
                   'The rate is about ten degrees for every thousand meters of ascent'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice joins the expansion into lower pressure to the measured rate of '
                 'cooling, which together give the reason the summit is cold.',
             trap='C names the rise without saying what the lower pressure does to the air.'),
    ]))

# --- 5 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='PHY-S05-L2',
    ar=dict(
        khulasa='أربع كمّيات تصف أيّ دارة، وعلاقتان تربطانها: الجهد هو الدفع، والتيّار هو '
                'معدّل الجريان، والمقاومة هي ما يعارض به الموصل ذلك الجريان، وهي متعلّقة '
                'بالمادّة وبالطول وبالسمك. والأولى أنّ التيّار يساوي الجهد مقسومًا على '
                'المقاومة، والثانية أنّ القدرة تساوي التيّار مضروبًا في الجهد.',
        maana='المعنى أنّ جمع العلاقتين يعطي ما يهمّ في الحائط: القدرة المفقودة حرارةً في سلك '
              'هي مربّع التيّار مضروبًا في مقاومة ذلك السلك. ومربّع التيّار هو الحدّ القاسي: '
              'ضاعف التيّار فيصعد التسخين أربعة أضعاف، ولهذا لا تدفأ الدارة المحمّلة فوق '
              'طاقتها دفئًا لطيفًا بل تجمح.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الآلية: والحساب نفسه يفسّر '
                  'إرسال الكهرباء على جهد عال، فإيصال قدرة معلومة بجهد أعلى يحتاج تيّارًا '
                  'أصغر، والتيّار الأصغر يفقد في الخطّ أقلّ بكثير.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الجملة التي '
             'تُبرز حدًّا وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُقال إنّ النحاس '
             'السميك يكفي، مع أنّ النصّ ينفي ذلك. ويقترن المقطع بالمقطع الخامس والعشرين في '
             'أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Transformers work only with alternating current',
                   'A squared term in the current decides how a wire heats',
                   'Thick copper can beat the arithmetic of high voltage',
                   'Household wiring is sized by law in a table'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text derives the heating as the current squared times the resistance and '
                 'calls the squared term the harsh one, then uses it to explain thin wires and '
                 'high voltage lines.',
             trap='C contradicts the text, which says no practical thickness of copper can do '
                  'that.'),
        dict(stem='According to the text, what does halving the cross-section of a wire do?',
             opts=['It halves the resistance of the wire',
                   'It quadruples the current in the wire',
                   'It lowers the voltage across the wire',
                   'It roughly doubles the resistance'],
             key='D', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'C': 'detail_swap'},
             why='The text says a thin wire makes the heating worse twice over, because halving '
                 'the cross-section roughly doubles the resistance.',
             trap='A reverses the effect, since a thinner wire resists more rather than less.'),
        dict(claim='the gain from high voltage cannot be had any other way',
             stem='Which quotation from the text most strongly supports the claim that the gain '
                  'from high voltage cannot be had any other way?',
             opts=[Q('no practical thickness of copper can beat the arithmetic of raising the '
                     'voltage and lowering the current'),
                   Q('Double the current and the heating in the cable goes up fourfold'),
                   Q('Transformers make the voltage changes possible, and they work only with '
                     'alternating current'),
                   Q('Household wiring is therefore sized by the current it must carry')],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation rules out the one obvious alternative, thicker copper, which is '
                 'what makes the voltage route the only practical one.',
             trap='B gives the reason the heating matters rather than the uniqueness of the '
                  'remedy.'),
        dict(carrier='To deliver a given amount of power, a higher voltage needs a smaller '
                     'current, and a smaller current loses far less in the line. A line carrying '
                     'power at household voltage would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['lose about the same as a high voltage line',
                   'need a transformer at each end of the run',
                   'lose its power within a short distance',
                   'carry a smaller current than before'],
             key='C', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'D': 'wrong_direction'},
             why='The same power at household voltage needs a far larger current, and the heating '
                 'rises with its square, so the line loses the power quickly.',
             trap='A denies the comparison the text draws between the two voltages.'),
        dict(target='conducts',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('conducts'),
             opts=['direct an orchestra', 'carry a current well', 'behave in a manner',
                   'resist a flow'],
             key='B', moves={'A': 'imported', 'C': 'imported', 'D': 'wrong_direction'},
             why='The text says thick copper conducts well, so the word names how readily the '
                 'metal carries a current.',
             trap='D reverses the sense, since resistance is the opposite of conducting well.'),
        dict(stem='Which choice best describes the function of the sentence calling the squared '
                  'term harsh?',
             opts=['It marks the step that the rest of the text uses',
                   'It introduces the four quantities for the first time',
                   'It concedes that the heating is gentle after all',
                   'It reports the voltage on a transmission line'],
             key='A', moves={'B': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The sentence picks out the squared current from the formula just derived, and '
                 'the thin wire, the overloaded circuit and the transmission line all follow from '
                 'it.',
             trap='C denies the runaway heating that the sentence is there to stress.'),
        dict(sibling='PHY-S05-L1',
             sibling_gloss='Text 2 is passage 25 of this book. It reports a kitchen where three '
                           'appliances trip a breaker, compares voltage to pressure and current '
                           'to flow, and says the breaker is sized to protect the buried cable '
                           'rather than the kettle.',
             stem='Text 1 derives the heating in a conductor. Based on Text 2, what would be added '
                  'to that derivation?',
             opts=['A thin wire has more resistance than a thick one',
                   'Power lost as heat is the current squared times the resistance',
                   'A breaker is sized to protect the kettle it feeds',
                   'The device that acts before the arithmetic does harm'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'wrong_direction'},
             why='Text 2 describes a breaker set below the current at which the cable overheats, '
                 'which is how the heating derived in Text 1 is kept from reaching the plaster.',
             trap='B repeats the relation Text 1 derives rather than adding anything to it.'),
        dict(carrier='Current squared is the harsh term. ___ double the current and the heating in '
                     'the cable goes up fourfold.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'That is to say,', 'In conclusion,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'near_miss'},
             why='The second sentence spells out what the squared term means in numbers, so the '
                 'transition must mark a restatement in plainer terms rather than a contrast.',
             trap='B sets the fourfold rise against the claim it is explaining.'),
        dict(carrier='Voltage is the push ___ current is the rate of flow.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['push. Current', 'push, current', 'push current', 'push, and, current'],
             key='A', moves={'B': 'comma_splice', 'C': 'run_on', 'D': 'misplaced'},
             why='The clause naming the current as the rate of flow is a complete sentence, so a '
                 'period separates it from the clause naming the voltage.',
             trap='B splices the clause about the current onto the clause about the voltage with a '
                  'comma.'),
        dict(goal='explain why an overloaded circuit does not warm gently',
             notes=['The power lost as heat in a wire is the current squared times the '
                    'resistance.',
                    'Double the current and the heating in the cable goes up fourfold.',
                    'Halving the cross-section roughly doubles the resistance.',
                    'A thin wire makes this worse twice over.'],
             stem='The student wants to explain why an overloaded circuit does not warm gently. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['The power lost as heat is the current squared times the resistance',
                   'Halving the cross-section of a wire roughly doubles its resistance',
                   'Because the heating goes with the square of the current, a doubled load heats '
                   'the cable four times as hard',
                   'A thin wire makes the heating worse twice over in a wall'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'underreach'},
             why='Only this choice carries the squared term into a number, which is what shows the '
                 'heating running away rather than rising gently.',
             trap='A gives the formula without turning it into the fourfold rise it implies.'),
    ]))

# --- 6 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='PHY-S06-L2',
    ar=dict(
        khulasa='الانعكاس والانكسار والانعراج تبدو ثلاثة موضوعات وهي موضوع واحد، فكلّ منها '
                'يتبع سلوك جبهة الموجة، وهي الخطّ المتحرّك الذي للموجة عليه طور واحد. وقاعدة '
                'واحدة بسيطة تفعل كلّ شيء: كلّ نقطة على ذلك الخطّ تعمل مصدرًا للتموّج '
                'التالي.',
        maana='المعنى أنّ الجبهة إذا لاقت حاجزًا مستويًا تجمّعت التموّجات على مسار يخرج '
              'بالزاوية التي دخل بها، وذلك الانعكاس؛ وإذا عبرت إلى مادّة تبطئ الموجة تأخّر '
              'الجانب الداخل أوّلًا فانحرفت الجبهة كلّها، وذلك الانكسار؛ وإذا لاقت حدًّا أو '
              'فتحة ضيّقة انتشرت التموّجات في الفراغ خلفها، وذلك الانعراج.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الآلية: مقدار الانتشار '
                  'متعلّق بحجم الفتحة مقيسًا بطول الموجة، وهذه المقايسة تفسّر تفاوتًا '
                  'مألوفًا: فالصوت أطواله نحو متر فيلتفّ حول باب، والضوء المرئي أطواله '
                  'أقلّ من ألف من الملّيمتر فيرسم ظلالًا حادّة.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة سلسلة الجمل وعن '
             'معنى كلمة في سياقها. والفخّ المتوقّع هنا أن تُحسب الآثار الثلاثة موضوعات '
             'مستقلّة، مع أنّ النصّ يردّها إلى قاعدة واحدة. ويقترن المقطع بالمقطع السادس '
             'والعشرين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Huygens published the rule in 1690',
                   'Reflection, refraction and diffraction are three separate subjects',
                   'One rule about wavefronts yields all three effects',
                   'Sound has wavelengths of about a meter'],
             key='C', moves={'A': 'underreach', 'B': 'wrong_direction', 'D': 'underreach'},
             why='The text says the three look like three subjects and are one, and that each '
                 'follows from the rule that every point on a wavefront acts as a source.',
             trap='B states the appearance that the opening sentence immediately corrects.'),
        dict(stem='According to the text, what does the amount of spreading depend on?',
             opts=['The size of the gap compared with the wavelength',
                   'The angle at which the front arrives',
                   'The quality of the glass in the mirror',
                   'The speed of the wave in the second material'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'near_miss'},
             why='The text says the amount of spreading depends on the size of the gap compared '
                 'with the wavelength, and that this explains a familiar asymmetry.',
             trap='B names the quantity that governs reflection rather than diffraction.'),
        dict(claim='the limit on a telescope is not a matter of workmanship',
             stem='Which quotation from the text most strongly supports the claim that the limit '
                  'on a telescope is not a matter of workmanship?',
             opts=[Q('every point on such a line acts as a source of the next ripple'),
                   Q('that limit, not the quality of the glass, is what eventually distorts the '
                     'image of a distant star into a small disc'),
                   Q('Sound has wavelengths of about a meter, so it bends round a doorway'),
                   Q('It was ignored for a century in favor of a particle account')],
             key='B', moves={'A': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation names the diffraction limit rather than the glass as what spreads '
                 'a star into a disc, which is the claim about workmanship exactly.',
             trap='A gives the rule the limit follows from rather than the limit itself.'),
        dict(carrier='Sound has wavelengths of about a meter, so it bends round a doorway and a '
                     'voice can be heard from the next room. Visible light has wavelengths under '
                     'a thousandth of a millimeter, so it casts sharp shadows instead. The '
                     'difference between them is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['a difference in the speed of the two waves',
                   'proof that light is not a wave at all',
                   'caused by the width of the doorway alone',
                   'a difference of scale, not of rule'],
             key='D', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'C': 'near_miss'},
             why='Both cases follow from the same comparison of gap and wavelength, so what '
                 'separates sound from light is the size of the wavelength rather than a '
                 'different law.',
             trap='B reads the sharp shadow as evidence against the wave account it comes from.'),
        dict(target='distorts',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('distorts'),
             opts=['misreports a fact', 'enlarges greatly', 'alters the shape of',
                   'blocks from view'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'wrong_direction'},
             why='The limit is said to distort the image of a star into a small disc, so the word '
                 'names the change of shape that the spreading produces.',
             trap='A takes the sense used of a claim rather than of an image.'),
        dict(stem='Which choice best describes the function of the three sentences that each begin '
                  'with the word where?',
             opts=['They introduce the rule about wavefronts for the first time',
                   'They derive each of the three effects from the one rule',
                   'They concede that the three effects are unrelated',
                   'They report the year Huygens published his principle'],
             key='B', moves={'A': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='Each of the three sentences takes a wavefront meeting a barrier, a slower '
                 'material or an edge, and reads off reflection, refraction or diffraction in '
                 'turn.',
             trap='C denies the unity that the three sentences are there to establish.'),
        dict(sibling='PHY-S06-L1',
             sibling_gloss='Text 2 is passage 26 of this book. It reports that a straw in a glass '
                           'of water appears to break at the surface, explains that light crosses '
                           'the surface more slowly and the beam swings, and says the eye cannot '
                           'detect the change of direction.',
             stem='Text 1 derives three effects from one rule. Based on Text 2, what would be '
                  'added to that derivation?',
             opts=['What the second of the three effects looks like to an eye',
                   'A front crossing into a slower material swings as a whole',
                   'Diffraction is the spreading of a wave past an edge',
                   'The eye corrects for the bending of the light'],
             key='A', moves={'B': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 reports what refraction does to an observer looking at a straw, which is '
                 'the human side of the effect that Text 1 derives from the wavefront rule.',
             trap='B repeats the derivation of refraction that Text 1 has already given.'),
        dict(carrier='The amount of spreading depends on the size of the gap compared with the '
                     'wavelength, and that comparison explains a familiar asymmetry. ___ sound '
                     'has wavelengths of about a meter, so it bends round a doorway.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'In conclusion,', 'For example,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'restatement'},
             why='The second sentence gives the first half of the asymmetry just announced, so the '
                 'transition must introduce an example rather than a contrast or a conclusion.',
             trap='B sets the case of sound against the comparison that explains it.'),
        dict(carrier='Reflection, refraction and diffraction look like three subjects ___ and they '
                     'are one.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['subjects and', 'subjects, and', 'subjects; and', 'subjects and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying the three are one is independent, so the conjunction joining '
                 'it to the clause about three subjects takes a comma before it.',
             trap='A leaves the clause about three subjects and the clause about one unmarked.'),
        dict(goal='explain why a voice carries round a corner and a shadow does not',
             notes=['Every point on a wavefront acts as a source of the next ripple.',
                    'The amount of spreading depends on the size of the gap compared with the '
                    'wavelength.',
                    'Sound has wavelengths of about a meter.',
                    'Visible light has wavelengths under a thousandth of a millimeter.'],
             stem='The student wants to explain why a voice carries round a corner and a shadow '
                  'does not. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Every point on a wavefront acts as a source of the next ripple',
                   'Sound has wavelengths of about a meter in ordinary air',
                   'Visible light has wavelengths under a thousandth of a millimeter',
                   'A wave spreads past a gap of its own size, so a meter of sound turns a '
                   'doorway and a wavelength of light cannot'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'true_not_asked'},
             why='Only this choice states the comparison that governs the spreading and then '
                 'applies it to both wavelengths, which is what the goal asks for.',
             trap='B gives one of the two wavelengths without the comparison that makes it '
                  'matter.'),
    ]))

# --- 7 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='PHY-S07-L2',
    ar=dict(
        khulasa='التفاعل الذي يُطلق طاقة في جملته لا يقع بالضرورة: فالورق في الهواء في حرارة '
                'الغرفة مجاور لتفاعل يُطلق حرارة كثيرة، ويبقى هناك قرونًا. والسبب طاقة '
                'التنشيط، أي الدفعة التي يحتاجها التفاعل ليبدأ وإن كان ميزانه العامّ '
                'مواتيًا، لأنّ الروابط لا بدّ أن تُكسر قبل أن تُعقد غيرها.',
        maana='المعنى أنّ تلك الفكرة الواحدة تفسّر كلّ ما في اليد من عتلات لتغيير المعدّل: '
              'فالحرارة تعطي الدفعة، فرفعها يزيد نسبة الجزيئات الحاملة طاقة تكفي لتجاوز '
              'الحاجز، والتركيز يزيد عدد التصادمات، ومساحة السطح تزيد مواضع التصادم، والعامل '
              'الحافز يفتح طريقًا أسهل فوقه بلا استهلاك.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الآلية: الذوبان حالة نافعة '
                  'للتفكّر، فمكعّب السكّر والسكّر نفسه مسحوقًا يذوبان بمعدّلين مختلفين '
                  'جدًّا ويبلغان الغاية نفسها، إذ لا يغيّر شيء من ذلك مقدار ما سيذوب، وهو '
                  'مقرّر بالحرارة وحدها.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة المثال الختامي '
             'وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُخلط المعدّل بالمقدار، والنصّ '
             'يسمّي ذلك الخطأ المعتاد. ويقترن المقطع بالمقطع السابع والعشرين في أسئلة '
             'النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Arrhenius put the matter on a quantitative footing in 1889',
                   'A catalyst is consumed in the reaction it speeds up',
                   'Stirring changes how much sugar will eventually dissolve',
                   'One barrier explains every lever available for changing a rate'],
             key='D', moves={'A': 'true_not_asked', 'B': 'wrong_direction', 'C': 'wrong_direction'},
             why='The text names the activation energy and says that single idea explains the '
                 'whole set of levers: heat, concentration, surface area and a catalyst.',
             trap='C contradicts the text, which says none of these changes the end point.'),
        dict(stem='According to the text, what sets how much sugar will eventually dissolve?',
             opts=['The surface area of the solid', 'The temperature of the water alone',
                   'The amount of stirring applied', 'The size of the activation barrier'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'near_miss'},
             why='The text says none of the levers change how much sugar will eventually dissolve, '
                 'which is set by temperature alone.',
             trap='A names something that changes the rate rather than the end point.'),
        dict(claim='a favorable balance does not make a reaction happen',
             stem='Which quotation from the text most strongly supports the claim that a favorable '
                  'balance does not make a reaction happen?',
             opts=[Q('Heat supplies the push, so raising the temperature increases the proportion '
                     'of molecules carrying enough energy'),
                   Q('Stirring removes the saturated layer at the surface and lets fresh water '
                     'reach the solid'),
                   Q('Paper in air at room temperature sits next to a reaction that would '
                     'release a great deal of heat, and it sits there for centuries'),
                   Q('Catalysts are the reason modern chemical industry exists at all')],
             key='C', moves={'A': 'near_miss', 'B': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation names a reaction that would release a great deal of heat and '
                 'reports that it does not happen for centuries, which is the claim exactly.',
             trap='A explains how a reaction is started rather than why it waits.'),
        dict(carrier='Surface area raises the number of places where collisions can happen, which '
                     'is the whole difference between steel wool and a steel bar. Grinding a '
                     'solid finer therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['raises the rate without lowering the barrier',
                   'lowers the barrier as a catalyst does',
                   'raises how much of it will dissolve',
                   'doubles the rate for every ten degrees'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='Grinding adds places for collisions rather than easing the climb, so it changes '
                 'the rate while the activation energy stays where it was.',
             trap='B gives the grinding the work the text assigns to a catalyst.'),
        dict(target='dissolve',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('dissolve'),
             opts=['break up a meeting', 'melt under heat', 'fade from sight',
                   'pass into a liquid'],
             key='D', moves={'A': 'imported', 'B': 'near_miss', 'C': 'imported'},
             why='The text compares a sugar cube and the same sugar as powder dissolving at '
                 'different rates in water, so the word names passing into the liquid.',
             trap='B names melting, which needs no liquid to pass into.'),
        dict(stem='Which choice best describes the function of the sugar example near the end?',
             opts=['It introduces the activation energy for the first time',
                   'It concedes that the levers do not work on a solid',
                   'It separates the rate of a change from its extent',
                   'It reports the year Arrhenius published his account'],
             key='C', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='The cube and the powder are said to dissolve at very different rates and reach '
                 'the same end point, which is the distinction the text closes on.',
             trap='B denies the levers that the sugar case is used to illustrate.'),
        dict(sibling='PHY-S07-L1',
             sibling_gloss='Text 2 is passage 27 of this book. It reports that a match lights a '
                           'pad of fine steel wool and not a steel bar, says what differs is '
                           'surface, and extends the point to flour mills and grain silos.',
             stem='Text 1 lists the levers that change a rate. Based on Text 2, what would be '
                  'added to that list?',
             opts=['Surface area raises the number of places collisions can happen',
                   'How large one of those levers can be in practice',
                   'A catalyst lowers the barrier without being consumed',
                   'A steel bar burns more readily than fine steel wool'],
             key='B', moves={'A': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 reports that the same metal burns or does not according to its surface, '
                 'which shows the surface lever carrying a case from inert to burning.',
             trap='A repeats the lever as Text 1 already states it rather than adding to it.'),
        dict(carrier='That single idea explains the whole set of levers available for changing a '
                     'rate. ___ heat supplies the push, so raising the temperature increases the '
                     'proportion of molecules carrying enough energy to get over the barrier.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['To begin with,', 'By contrast,', 'Even so,', 'In conclusion,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'restatement'},
             why='The sentence opens the list of levers just promised, so the transition must mark '
                 'the first item rather than a contrast or a conclusion.',
             trap='C sets the first lever against the claim that there is a set of them.'),
        dict(carrier='A reaction that releases energy overall does not necessarily happen ___ '
                     'paper in air at room temperature sits there for centuries.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['happen, paper', 'happen paper', 'happen. Paper', 'happen, and, paper'],
             key='C', moves={'A': 'comma_splice', 'B': 'run_on', 'D': 'misplaced'},
             why='The clause about the paper sitting for centuries is a complete sentence, so a '
                 'period separates it from the clause about a reaction not happening.',
             trap='A splices the clause about the paper onto the clause about the reaction with a '
                  'comma.'),
        dict(goal='explain why rate and extent must be kept apart',
             notes=['A sugar cube and the same sugar as powder dissolve at very different rates.',
                    'They reach the same end point.',
                    'Stirring and hot water both speed the dissolving.',
                    'How much sugar will dissolve is set by temperature alone.'],
             stem='The student wants to explain why rate and extent must be kept apart. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['Powder dissolves faster than a cube and no more of it dissolves, so speed and '
                   'amount answer different questions',
                   'A sugar cube and the same sugar as powder dissolve at different rates',
                   'Stirring and hot water both speed the dissolving of the sugar',
                   'How much sugar will dissolve is set by temperature alone'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice puts the faster rate beside the unchanged amount, which is what '
                 'shows the two quantities to be separate.',
             trap='C names two things that change the rate without saying what they leave alone.'),
    ]))

# --- 8 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='PHY-S08-L2',
    ar=dict(
        khulasa='المهندس الذي يختار مادّة يحتاج أربعة أرقام، وقد سقط جسر تاي لأنّ اثنين منها '
                'لم يُنظر فيهما. الأول الإجهاد، وهو القوّة التي يحملها كلّ وحدة مساحة، وهو '
                'سبب اختلاف سلوك قضيب رقيق وقضيب غليظ من الفولاذ نفسه تحت الحمل نفسه.',
        maana='المعنى أنّ الثاني هو نقطة الخضوع، أي الحمل الذي يبقى بعده الشكل الذي انحنت '
              'إليه المادّة بدل أن ترجع؛ والثالث هو المتانة النهائية، أي الإجهاد الذي '
              'تتفارق عنده المادّة؛ والفرجة بين النقطتين هي موضع سلامة البناء فعلًا.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الآلية: المادّة واسعة '
                  'الفرجة تنحني وتتهدّل ظاهرًا فتُنذر قبل أن تنكسر، والمادّة التي لا فرجة '
                  'لها تقريبًا كحديد الزهر تُمسك شكلها إلى لحظة تشظّيها ولا تُنذر بشيء، '
                  'والرابع هو الصلادة.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الجملة الافتتاحية '
             'وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُقال إنّ حديد الزهر يُنذر قبل '
             'كسره، مع أنّ النصّ ينفي ذلك. ويقترن المقطع بالمقطع الثامن والعشرين في أسئلة '
             'النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Four numbers decide what kind of failure a design allows',
                   'Cast iron gives ample warning before it breaks',
                   'Toughness measures the energy absorbed before fracture',
                   'Wartime cargo ships broke in half in warm water'],
             key='A', moves={'B': 'wrong_direction', 'C': 'underreach', 'D': 'wrong_direction'},
             why='The text names stress, the yield point, the ultimate strength and toughness, and '
                 'says the choice of material is a choice about what kind of failure is '
                 'acceptable.',
             trap='B reverses the text, which says cast iron offers no warning at all.'),
        dict(stem='According to the text, where does the safety of a structure actually live?',
             opts=['In the stress carried by each unit of area',
                   'In the toughness of the steel at low temperature',
                   'In the gap between yielding and final fracture',
                   'In the single critical member of the design'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'wrong_direction'},
             why='The text says the gap between the yield point and the ultimate strength is where '
                 'the safety of a structure actually lives.',
             trap='A names the first of the four numbers rather than the gap between two of '
                  'them.'),
        dict(claim='a material can fail without giving any sign beforehand',
             stem='Which quotation from the text most strongly supports the claim that a material '
                  'can fail without giving any sign beforehand?',
             opts=[Q('it is the reason a thin rod and a thick one made of the same steel behave '
                     'differently under the same load'),
                   Q('A material with a wide gap bends, sags visibly, and gives warning before it '
                     'breaks'),
                   Q('Modern practice therefore prefers materials that give warning, and designs '
                     'load paths with more than one route'),
                   Q('A material with almost no gap, such as cast iron, holds its shape until the '
                     'moment it shatters, and offers no warning at all')],
             key='D', moves={'A': 'true_not_asked', 'B': 'wrong_direction', 'C': 'near_miss'},
             why='The quotation says a material with almost no gap holds its shape until it '
                 'shatters and gives no warning, which is the failure the claim describes.',
             trap='B describes the opposite case, a material that does give warning.'),
        dict(carrier='Cold makes some steels brittle, which is why several wartime cargo ships '
                     'broke in half in the North Atlantic while sister ships in warm water did '
                     'not. A design proved in warm water is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['proved for any water it will meet',
                   'untested where the steel turns brittle',
                   'bound to break in half within a year',
                   'limited by the stress on each unit of area'],
             key='B', moves={'A': 'overreach', 'C': 'overreach', 'D': 'detail_swap'},
             why='Toughness falls sharply in some steels as the temperature drops, so a trial in '
                 'warm water says nothing about the condition in which those ships failed.',
             trap='A extends a warm water trial to conditions the sister ships never met.'),
        dict(target='collapse',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('collapse'),
             opts=['fall down suddenly', 'fold up for storage', 'lose value over time',
                   'bend and stay bent'],
             key='A', moves={'B': 'imported', 'C': 'imported', 'D': 'wrong_direction'},
             why='The sentence says a brittle structure under a sudden sideways load can collapse '
                 'in seconds from an unseen crack, so the word names a sudden fall.',
             trap='D names yielding, which the text treats as the opposite kind of failure.'),
        dict(stem='Which choice best describes the function of the sentence about the Tay Bridge?',
             opts=['It introduces the four numbers by name',
                   'It concedes that the four numbers are not useful',
                   'It reports the cause of the cargo ship failures',
                   'It ties the four numbers to a failure a reader knows'],
             key='D', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='The opening sentence says an engineer needs four numbers and that the bridge '
                 'failed because two of them were not considered, which anchors the list in a '
                 'case.',
             trap='B denies the usefulness the rest of the text sets out to show.'),
        dict(sibling='PHY-S08-L1',
             sibling_gloss='Text 2 is passage 28 of this book. It reports that the first Tay '
                           'Bridge fell in a gale in 1879, that the inquiry found a chain of '
                           'causes including cast iron columns and holes filled with wax, and '
                           'that the replacement was designed against a stated wind load.',
             stem='Text 1 names four numbers a designer needs. Based on Text 2, what would be '
                  'added to that naming?',
             opts=['Cast iron holds its shape until the moment it shatters',
                   'The gap between yielding and fracture carries the safety',
                   'What the missing numbers cost on a particular night',
                   'The second bridge used cast iron columns throughout'],
             key='C', moves={'A': 'restatement', 'B': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 reports the thirteen spans in the river and the inquiry that followed, '
                 'which is the price of the two numbers that Text 1 says were not considered.',
             trap='A repeats the property of cast iron that Text 1 has already stated.'),
        dict(carrier='A material with a wide gap bends, sags visibly, and gives warning before it '
                     'breaks. ___ a material with almost no gap, such as cast iron, holds its '
                     'shape until the moment it shatters.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Likewise,', 'By contrast,', 'As a result,', 'In other words,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'near_miss', 'D': 'restatement'},
             why='The second sentence sets the brittle case against the ductile one just '
                 'described, so the transition must mark a contrast rather than a likeness or a '
                 'result.',
             trap='A treats the two kinds of material as behaving alike.'),
        dict(carrier='A structure that bends and stays bent has yielded ___ and it can often be '
                     'repaired.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['yielded; and', 'yielded and', 'yielded: and', 'yielded, and'],
             key='D', moves={'A': 'wrong_mark', 'B': 'run_on', 'C': 'wrong_mark'},
             why='The clause about the structure often being repairable is independent, so the '
                 'conjunction joining it to the clause about yielding takes a comma.',
             trap='B leaves the clause about yielding and the clause about repair unmarked.'),
        dict(goal='explain why modern practice prefers a material that bends',
             notes=['A material with a wide gap bends, sags visibly, and gives warning before it '
                    'breaks.',
                    'Cast iron holds its shape until the moment it shatters.',
                    'A structure that has yielded can often be repaired.',
                    'Modern practice prefers materials that give warning.'],
             stem='The student wants to explain why modern practice prefers a material that bends. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['Cast iron holds its shape until the moment that it shatters',
                   'A material that sags gives warning and can often be repaired, where a brittle '
                   'one goes without notice',
                   'A structure that has yielded can often be repaired afterward',
                   'Modern practice prefers materials that give warning in service'],
             key='B', moves={'A': 'true_not_asked', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice names both advantages of a bending material and sets them '
                 'against the brittle case, which is the comparison the goal needs.',
             trap='C gives one advantage without the contrast that makes it decisive.'),
    ]))

# --- 9 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='PHY-S09-L2',
    ar=dict(
        khulasa='التعرّض للإشعاع تحكمه ثلاثة أرقام، وقد كان حظّ نساء مصنع أورانج سيّئًا في '
                'الثلاثة جميعًا. الأول عمر النصف، أي المدّة التي يتحلّل فيها نصف كمّية من '
                'عنصر مشعّ، وعمر نصف الراديوم نحو ألف وستّمئة سنة، فكمّية منه في جسم تبعث '
                'إشعاعها بمعدّل شبه ثابت طول عمر إنسان.',
        maana='المعنى أنّ الثاني هو نوع الإشعاع: فجُسيمات ألفا ثقيلة توقفها ورقة أو طبقة '
              'الجلد الخارجية، فباعث ألفا خارج الجسم شبه غير مؤذٍ؛ وداخل الجسم، بلا حاجز بين '
              'المصدر والنسيج الحيّ، تودع الجسيمات نفسها طاقتها كلّها في كسر من الملّيمتر، '
              'والراديوم باعث ألفا.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الآلية: والثالث هو الجرعة، '
                  'أي الطاقة الممتصّة لكلّ وحدة من كتلة الجسم، وهي تهبط بالمسافة '
                  'وبالتدريع، فمن يقف على مترين ينال ربع ما يُنال على متر، لأنّ الشدّة '
                  'تهبط بمربّع المسافة.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة التحوّل بين '
             'حالتين وعن معنى كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسب باعث ألفا خارج '
             'الجسم أشدّ الحالات، مع أنّ النصّ يقول عكس ذلك. ويقترن المقطع بالمقطع التاسع '
             'والعشرين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The modern unit of dose is the sievert',
                   'Three numbers govern exposure, and none of them helps inside bone',
                   'An alpha emitter outside the body is the worst case',
                   'Radium has a half-life of about sixteen hundred years'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text names half-life, the kind of radiation and dose, and says no one of the '
                 'three remedies is available for a source the body has built into bone.',
             trap='C reverses the text, which calls an alpha emitter outside the body almost '
                  'harmless.'),
        dict(stem='According to the text, what dose does a technician two meters away receive?',
             opts=['Half of the dose received at one meter',
                   'Twice the dose received at one meter', 'The same dose as at one meter',
                   'A quarter of the dose received at one meter'],
             key='D', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'C': 'wrong_direction'},
             why='The text says a technician standing two meters from a source receives a quarter '
                 'of the dose received at one meter, because intensity falls with the square of '
                 'distance.',
             trap='A halves the dose where the square of the distance quarters it.'),
        dict(claim='the same particle can be harmless or the worst case',
             stem='Which quotation from the text most strongly supports the claim that the same '
                  'particle can be harmless or the worst case?',
             opts=[Q('an alpha emitter outside the body is almost harmless. Inside the body, with '
                     'no barrier at all between the source and living tissue, the same particles '
                     'deposit all their energy within a fraction of a millimeter'),
                   Q('Elements with short half-lives are intensely active and gone quickly, which '
                     'is a different and often more manageable problem'),
                   Q('The third is dose, meaning the energy absorbed per unit of body mass, and '
                     'it falls off with distance and with shielding'),
                   Q('which is why internal emitters are treated as a separate class of hazard '
                     'with its own limits')],
             key='A', moves={'B': 'true_not_asked', 'C': 'near_miss', 'D': 'near_miss'},
             why='The quotation puts the same alpha particles outside the body, where skin stops '
                 'them, and inside it, where they deposit all their energy in tissue.',
             trap='D names what cannot be done about an internal source rather than the contrast '
                  'itself.'),
        dict(carrier='Paint on a brush that is shaped with the lips crosses from the harmless case '
                     'to the worst one. The lip-pointing was therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['a matter of hygiene rather than of radiation',
                   'safe because alpha particles are easily stopped',
                   'the step that mattered most of all',
                   'a way of reducing the dose received'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'wrong_direction'},
             why='The text says that habit moved the paint from outside the body to inside it, '
                 'which is the move from almost harmless to the worst case.',
             trap='B invokes the stopping of alpha particles, which protects only from outside.'),
        dict(target='emit',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('emit'),
             opts=['let out a sound', 'give off from itself', 'take in from outside',
                   'decay into another element'],
             key='B', moves={'A': 'imported', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The text says a quantity of radium in a body will emit radiation at a nearly '
                 'constant rate, so the word names giving the radiation off.',
             trap='C reverses the direction, since the source sends radiation out rather than '
                  'taking it in.'),
        dict(stem='Which choice best describes the function of the sentence about short '
                  'half-lives?',
             opts=['It sets the long case against a different problem',
                   'It introduces the kind of radiation for the first time',
                   'It concedes that half-life does not matter',
                   'It reports the half-life of radium in years'],
             key='A', moves={'B': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The sentence follows the sixteen hundred year figure and calls a short half-life '
                 'a different and often more manageable problem, which marks the long case as the '
                 'hard one.',
             trap='C denies the quantity the sentence is drawing a distinction within.'),
        dict(sibling='PHY-S09-L1',
             sibling_gloss='Text 2 is passage 29 of this book. It reports the dial painting works '
                           'at Orange, the shaping of brushes with the lips, the death of Mollie '
                           'Maggia in 1922 and the lawsuit of 1927 that established liability for '
                           'a delayed disease.',
             stem='Text 1 sets out three quantities that govern exposure. Based on Text 2, what '
                  'would be added to that account?',
             opts=['Radium is an alpha emitter with a long half-life',
                   'Dose falls off with distance and with shielding',
                   'Alpha particles pass easily through the outer skin',
                   'What the three quantities together did to seventy women'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'wrong_direction'},
             why='Text 2 reports the deaths, the jaws and the lawsuit, which is the human cost of '
                 'the three conditions that Text 1 describes only as quantities.',
             trap='A repeats two of the facts that Text 1 supplies about radium.'),
        dict(carrier='Alpha particles are heavy and stopped by a sheet of paper or the outer layer '
                     'of skin, so an alpha emitter outside the body is almost harmless. ___ '
                     'inside the body, with no barrier at all between the source and living '
                     'tissue, the same particles deposit all their energy within a fraction of a '
                     'millimeter.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Likewise,', 'As a result,', 'By contrast,', 'In short,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'restatement'},
             why='The second sentence sets the inside case against the outside one just described, '
                 'so the transition must mark the opposition between them.',
             trap='B reads the danger inside the body as following from the safety outside it.'),
        dict(carrier='Radium is an alpha emitter ___ paint on a brush shaped with the lips crosses '
                     'from the harmless case to the worst one.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['emitter. Paint', 'emitter, paint', 'emitter paint', 'emitter, and, paint'],
             key='A', moves={'B': 'comma_splice', 'C': 'run_on', 'D': 'misplaced'},
             why='The clause about the paint crossing to the worst case is a complete sentence, so '
                 'a period separates it from the clause naming radium an alpha emitter.',
             trap='B splices the clause about the paint onto the clause about the emitter with a '
                  'comma.'),
        dict(goal='explain why an internal source is treated as its own class',
             notes=['Radium has a half-life of about sixteen hundred years.',
                    'Alpha particles are stopped by paper or the outer layer of skin.',
                    'Dose falls off with distance and with shielding.',
                    'No one of those three remedies reaches a source built into bone.'],
             stem='The student wants to explain why an internal source is treated as its own '
                  'class. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['Radium has a half-life of about sixteen hundred years in all',
                   'Alpha particles are stopped by paper or the outer layer of skin',
                   'Distance, shielding and a short life are all unavailable once the source sits '
                   'inside the bone',
                   'Dose falls off with distance and with shielding from lead'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice names all three remedies and says the internal case removes '
                 'every one of them, which is what puts it in a class apart.',
             trap='B gives one remedy and so leaves the other two unaccounted for.'),
    ]))

# --- 10 ------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='PHY-S10-L2',
    ar=dict(
        khulasa='لم يقِس أحد قطّ المسافة إلى نجم قياسًا مباشرًا بأيّ وسيلة، فلا شريط يبلغ '
                'ذلك البعد. والمسافات الفلكية تأتي عوضًا عن ذلك من سُلّم مناهج، كلّ درجة فيه '
                'مُعايَرة بالتي تحتها، والبناء كلّه ليس أصلب من أدنى درجاته.',
        maana='المعنى أنّ الدرجة الأولى هندسة: فالتزيّح، وهو انزياح موضع النجم مع انتقال '
              'الأرض من جانب مدارها إلى الجانب الآخر، يعطي المسافة بالتثليث كما يفعل المسّاح '
              'بخطّ أساس. وخطّ الأساس هو عرض مدار الأرض، نحو ثلاثمئة مليون كيلومتر، ومع ذلك '
              'فالزوايا دقيقة جدًّا.',
        ahammiyya='في مجال العلوم الفيزيائية هذه المادة في مستوى الآلية: ثمّ يتولّى السطوع، '
                  'فإذا عُرف سطوع جسم الحقيقي دلّ خفوته الظاهر على بعده، لأنّ الضوء ينتشر '
                  'بمربّع المسافة، ويُسمّى ذلك الجسم شمعة معيارية، ويُعاير سطوعه بأمثلة '
                  'قريبة لها تزيّح.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة التشبيه وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن تُحسب المسافات الفلكية مقيسة قياسًا '
             'مباشرًا، مع أنّ النصّ ينفي ذلك في أوّل جملة. ويقترن المقطع بالمقطع الثلاثين في '
             'أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Hubble used the chain in 1924',
                   'The distance to a star has been measured directly with a tape',
                   'Every distance in the sky rests on a ladder of calibrated steps',
                   'The nearest star shifts by less than one second of arc'],
             key='C', moves={'A': 'underreach', 'B': 'wrong_direction', 'D': 'underreach'},
             why='The text says no tape reaches a star, that distances come from a ladder of '
                 'methods each calibrated by the one below, and that every printed figure rests '
                 'on that chain.',
             trap='B contradicts the opening sentence, which denies any direct measurement.'),
        dict(stem='According to the text, what serves as the baseline for parallax?',
             opts=['The width of the orbit of the Earth',
                   'The width of a coin seen from three miles',
                   'A few hundred light years of distance',
                   'The true brightness of a pulsating star'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'near_miss'},
             why='The text says the baseline is the width of the orbit of the Earth, about three '
                 'hundred million kilometers, and that even so the angles are tiny.',
             trap='B gives the comparison used for the size of the angle, not the baseline.'),
        dict(claim='a mistake low on the ladder is not a local mistake',
             stem='Which quotation from the text most strongly supports the claim that a mistake '
                  'low on the ladder is not a local mistake?',
             opts=[Q('Ground telescopes manage parallax out to a few hundred light years'),
                   Q('Each rung is tied to the one below, so an error low on the ladder moves '
                     'every distance in the universe above it'),
                   Q("If an object's true brightness is known, its apparent dimness gives its "
                     "distance"),
                   Q('Edwin Hubble used that chain in 1924 to establish that other galaxies lie '
                     'outside our own')],
             key='B', moves={'A': 'true_not_asked', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation says an error low on the ladder moves every distance above it, '
                 'which is the reach the claim describes.',
             trap='C explains how the upper rungs work rather than how an error travels.'),
        dict(carrier='Their true brightness is fixed by finding examples close enough to have a '
                     'parallax, or in clusters densely enough populated to be measured another '
                     'way. A standard candle is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['independent of the geometry below it',
                   'measured directly with a tape at last',
                   'only useful inside a few hundred light years',
                   'as sound as the parallax that calibrated it'],
             key='D', moves={'A': 'wrong_direction', 'B': 'overreach', 'C': 'detail_swap'},
             why='The true brightness of such an object is set by nearby examples whose distance '
                 'comes from geometry, so the candle inherits whatever the geometry is worth.',
             trap='A cuts the candle loose from the rung the text says calibrates it.'),
        dict(target='densely',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('densely'),
             opts=['heavily for its size', 'slowly and dimly', 'closely crowded together',
                   'hard to understand'],
             key='C', moves={'A': 'near_miss', 'B': 'imported', 'D': 'imported'},
             why='The text speaks of clusters densely enough populated to be measured another way, '
                 'so the word names how closely the stars are crowded.',
             trap='A takes the sense used of a material rather than of a population.'),
        dict(stem='Which choice best describes the function of the surveyor comparison in the '
                  'text?',
             opts=['It introduces the standard candle for the first time',
                   'It places the lowest rung in familiar ground',
                   'It argues that astronomy is the same as surveying',
                   'It reports the reach of a satellite measurement'],
             key='B', moves={'A': 'detail_swap', 'C': 'overreach', 'D': 'detail_swap'},
             why='The text calls the lowest steps plain geometry that any surveyor would recognize '
                 'and says parallax gives a distance by triangulation from a baseline.',
             trap='C turns a comparison into a claim that the two fields are one.'),
        dict(sibling='PHY-S10-L1',
             sibling_gloss='Text 2 is passage 30 of this book. It turns distances in the sky into '
                           'times, reporting eight minutes and twenty seconds for sunlight and '
                           'two and a half million years for Andromeda, and says no view of the '
                           'sky is of the present.',
             stem='Text 1 describes how a distance is established. Based on Text 2, what would be '
                  'added to that description?',
             opts=['What those distances mean once they are converted',
                   'Parallax gives a distance by triangulation from a baseline',
                   'Each rung of the ladder is tied to the one below',
                   'Light years are measured directly rather than inferred'],
             key='A', moves={'B': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 reads each distance as a length of time, which is what the figures from '
                 'the ladder in Text 1 become once a reader has them.',
             trap='B repeats the lowest rung as Text 1 has already described it.'),
        dict(carrier='Ground telescopes manage parallax out to a few hundred light years, and a '
                     'satellite has now pushed it to tens of thousands. ___ brightness takes '
                     'over.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Likewise,', 'In other words,', 'For instance,', 'Past that point,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'restatement', 'C': 'near_miss'},
             why='The sentence names what happens where the geometry runs out, so the transition '
                 'must mark the boundary rather than a likeness or a restatement.',
             trap='B treats the brightness method as another way of stating the reach of '
                  'parallax.'),
        dict(carrier='The first rung is geometry ___ parallax gives a distance by triangulation, '
                     'exactly as a surveyor uses a baseline.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['geometry, parallax', 'geometry. Parallax', 'geometry parallax',
                   'geometry, and, parallax'],
             key='B', moves={'A': 'comma_splice', 'C': 'run_on', 'D': 'misplaced'},
             why='The clause about parallax giving a distance by triangulation is a complete '
                 'sentence, so a period separates it from the clause naming geometry.',
             trap='A splices the clause about parallax onto the clause about geometry with a '
                  'comma.'),
        dict(goal='explain why the lowest steps matter most',
             notes=['No tape reaches a star, so distances come from a ladder of methods.',
                    'The lowest steps are plain geometry of the kind a surveyor would recognize.',
                    'Each rung is calibrated by the one below it.',
                    'An error low on the ladder moves every distance above it.'],
             stem='The student wants to explain why the lowest steps matter most. Which choice '
                  'most effectively uses relevant information from the notes to accomplish that '
                  'goal?',
             opts=['No tape reaches a star, so distances come from a ladder of methods',
                   'The lowest steps are plain geometry a surveyor would recognize',
                   'Each rung of the ladder is calibrated by the one below it',
                   'Because every rung is calibrated by the one beneath it, an error in the '
                   'geometry shifts every distance above'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'restatement'},
             why='Only this choice joins the calibration of each rung to the spread of an error '
                 'upward, which is what makes the bottom of the ladder decisive.',
             trap='B names the lowest steps without saying what depends on them.'),
    ]))

if __name__ == '__main__':
    qemit.emit(FIELD, LEVEL, SETS)
