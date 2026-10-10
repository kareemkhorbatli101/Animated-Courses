"""Social Science, Level 4: ten question sets."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

Q = '«%s»'.__mod__
FIELD, LEVEL = 'SOC', 4

SETS = []

# --- 1 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='SOC-S01-L4',
    ar=dict(
        khulasa='كانت المسوح الوطنية في الولايات المتّحدة قريبة من التصويت الشعبيّ سنة ألفين '
                'وستّ عشرة ومخطئة خطأً بالغًا في عدّة ولايات، وسنة ألفين وعشرين كان الخطأ أكبر '
                'وفي الجهة نفسها. وقُدّم تشخيصان.',
        maana='المعنى أنّ التشخيص الأوّل فنّيّ قابل للإصلاح: أنّ المسوح رجّحت بأقلّ ممّا ينبغي '
              'الناخبين بلا شهادات جامعية، وهم كثيرون ويميلون إلى مرشّح بعينه، والعلاج الترجيح '
              'على التعليم، وقد فعلته أكثر الشركات سريعًا، ولم يكفِ سنة عشرين.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الخلاف: والثاني عدم الاستجابة '
                  'التفاضليّ، أي أن تجيب جماعة عن المسوح بنسبة تخالف نسبة غيرها على نحو يقترن '
                  'بكيفية تصويتها، فلا ترجيح على الخصائص يُصلح العيّنة، لأنّ الغائبين ليسوا '
                  'غائبين عشوائيًّا داخل فئاتهم.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن النصّين '
             'المتقابلين. والفخّ المتوقّع هنا أن يُحسب مزيد المقابلات علاجًا، مع أنّ النصّ ينفي '
             'ذلك. ويقترن المقطع بالمقطع الحادي والأربعين بعد المئة.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Weighting on education was widely adopted after 2016',
                   'The weakness is structural, so the stated uncertainty should widen',
                   'More interviews would repair the sample',
                   'Polls have been shown to be useless between elections'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'wrong_direction'},
             why='The text calls differential nonresponse a structural problem that more '
                 'interviews cannot fix and says the appropriate response is to widen the stated '
                 'uncertainty.',
             trap='C offers the remedy the text says cannot work.'),
        dict(stem='According to the text, what does recalled past vote introduce?',
             opts=['A verified voter file', 'A weighting on education',
                   'An exclusion of the unregistered',
                   'An error that drifts toward the winner'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'near_miss'},
             why='The text says weighting on recalled past vote helps and introduces its own '
                 'error, because recall is unreliable and drifts toward the winner.',
             trap='C names the cost of registration-based sampling instead.'),
        dict(claim='the trouble lies outside the reach of demographic weighting',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'trouble lies outside the reach of demographic weighting?',
             opts=[Q('no weighting on demographics can repair the sample, because the people '
                     'missing are not missing at random within their categories'),
                   Q('polls had underweighted voters without college degrees, who were numerous '
                     'and disproportionately supporting one candidate'),
                   Q('Registration-based sampling allows respondents to be verified against the '
                     'voter files'),
                   Q('the 2020 report concluded that the cause could not be identified from the '
                     'data available to it')],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation denies that any weighting on demographics can repair the sample '
                 'and gives the reason, that the missing people are absent in a way tied to how '
                 'they vote.',
             trap='B states the first diagnosis, which weighting was supposed to fix.'),
        dict(carrier='If people who distrust institutions are both less likely to answer a '
                     'pollster and more likely to support a particular candidate, then no '
                     'weighting on demographics can repair the sample. A poll that added '
                     'thousands of interviews would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['remove the error from its estimate',
                   'verify respondents against the files',
                   'repeat the same gap on a larger scale',
                   'drift toward the winner in recall'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'near_miss'},
             why='The missing people are said to be absent in a way that correlates with their '
                 'vote, so adding interviews from the same frame reproduces the gap.',
             trap='A expects size to cure a fault the text calls structural.'),
        dict(target='obtaining',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('obtaining'),
             opts=['holding good as a rule', 'getting hold of', 'giving away freely',
                   'asking politely for'],
             key='B', moves={'A': 'imported', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The text says the structural problem cannot be fixed by obtaining more '
                 'interviews, so the word names the acquiring of them.',
             trap='A takes the sense in which a custom obtains in a place.'),
        dict(stem='Which choice best describes the function of the sentence about the 2020 '
                  'correction?',
             opts=['It shows the first diagnosis falling short',
                   'It defines differential nonresponse for a reader',
                   'It reports what the associations published',
                   'It argues that education never mattered'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence follows the adoption of weighting on education and says the '
                 'correction was not enough in 2020, with the error running the same way again.',
             trap='D denies a factor the first diagnosis is said to have identified.'),
        dict(sibling='SOC-S01-L3',
             sibling_gloss='Text 2 is passage 141 of this book. It sets out the four stages of a '
                           'serious poll and says the reported margin is a statement about '
                           'sampling variation under the assumption that the frame is right and '
                           'the weights are right.',
             stem='Text 1 recommends widening the stated uncertainty. Based on Text 2, which '
                  'choice best explains why the usual figure is too narrow?',
             opts=['A probability sample licenses the arithmetic',
                   'Address-based sampling covers almost every household',
                   'A methodical firm publishes its weighting targets',
                   'The margin assumes the frame and the weights are right'],
             key='D', moves={'A': 'near_miss', 'B': 'true_not_asked', 'C': 'true_not_asked'},
             why='Text 2 says a reported margin is a statement about sampling variation under the '
                 'assumption that the frame is right and the weights are right.',
             trap='A names what the known chance permits rather than what the margin leaves '
                  'out.'),
        dict(carrier='The first diagnosis is technical and fixable. ___ it holds that polls had '
                     'underweighted voters without college degrees.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'Specifically,', 'For all that,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'near_miss'},
             why='The second sentence states what the first diagnosis says, so the transition '
                 'must mark a specification.',
             trap='B sets the content of the diagnosis against its description.'),
        dict(carrier='That correction was not enough in 2020 ___ and the error in several states '
                     'ran the same way again.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['2020, and', '2020 and', '2020; and', '2020 and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the error running the same way is independent, so the '
                 'conjunction joining it to the clause about the correction takes a comma.',
             trap='B runs the clause about the correction straight into the clause about the '
                  'error.'),
        dict(goal='explain the most honest position available',
             notes=['Polls remain the best instrument for measuring opinion between elections.',
                    'The weakness in forecasting close elections is known and unrepaired.',
                    'The appropriate response is to widen the stated uncertainty.',
                    'The 2020 report could not identify the cause from its data.'],
             stem='The student wants to explain the most honest position available. Which choice '
                  'most effectively uses relevant information from the notes to accomplish that '
                  'goal?',
             opts=['Polls remain the best instrument for measuring opinion',
                   'The 2020 report could not identify the cause from its data',
                   'Keep the instrument, name the unrepaired weakness, and widen the uncertainty',
                   'The weakness in forecasting close elections is unrepaired'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'underreach'},
             why='Only this choice holds the three parts of the position the notes give: the '
                 'instrument kept, the fault named, and the uncertainty widened.',
             trap='D names the fault without the instrument or the remedy.'),
    ]))

# --- 2 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='SOC-S02-L4',
    ar=dict(
        khulasa='التجربة العشوائية تُثبت أنّ العلاج عمل في الموضع الذي أُجريت فيه، مع من شاركوا، '
                'في الظروف السائدة. أمّا دعوى أنّها المعيار الذهبيّ فتزعم أكثر: أنّ هذا التصميم '
                'يعلو غيره في مراتب الدليل أيًّا كان السؤال.',
        maana='المعنى أنّ أنغوس ديتون ونانسي كارترايت ضغطا الاعتراض أشدّ الضغط، وهو يتعلّق '
              'بالصلاحية الخارجية، أي هل تثبت نتيجة نُيلت في موضع في موضع آخر. وحجّتهما أنّ نقل '
              'نتيجة التجربة يقتضي معرفة لا تقدّمها التجربة.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الخلاف: فبرنامج لمكافحة الدود '
                  'رفع الحضور المدرسيّ في منطقة كينية قد لا يفعل شيئًا في منطقة فيها أنواع دود '
                  'أخرى ومدارس أخرى ومسافات أخرى إلى العيادة، ومعرفة الملامح المهمّة تقتضي '
                  'آلية لا تجربة أخرى.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن تُقدَّم الآلية والمشاهدة على التجربة، مع '
             'أنّ النصّ يذكر سجلّ العلاجات التي أقرّتهما وهدمتها التجارب. ويقترن المقطع بالمقطع '
             'الثاني والأربعين بعد المئة.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Multi-site trials are expensive and few',
                   'A trial establishes that a treatment worked where it was run',
                   'A trial answers a narrow question and the hierarchy was a slogan',
                   'Mechanism and observation are the more reliable guides'],
             key='C', moves={'A': 'true_not_asked', 'B': 'underreach', 'D': 'wrong_direction'},
             why='The text reports the objection about transfer and the defense, and says most '
                 'practitioners now hold that a trial is the best instrument for a narrow '
                 'question and the hierarchy was always a slogan.',
             trap='D prefers the evidence the text says trials have repeatedly destroyed.'),
        dict(stem='According to the text, what does transferring a trial result require?',
             opts=['Knowledge of which features matter', 'Another trial in the same district',
                   'A hierarchy that ranks the designs',
                   'A pre-specified comparison across sites'],
             key='A', moves={'B': 'wrong_direction', 'C': 'detail_swap', 'D': 'near_miss'},
             why='The text says transferring a trial result requires knowledge the trial does not '
                 'supply, and that knowing which features matter requires a mechanism.',
             trap='B offers a second trial where the text calls for a mechanism.'),
        dict(claim='the defense grants the objection and still keeps the trial',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'defense grants the objection and still keeps the trial?',
             opts=[Q('A deworming program that raised school attendance in one Kenyan district '
                     'may do nothing in a district with different worm species'),
                   Q('The defense concedes the point about transfer and denies the conclusion. '
                     'Trials settle the one thing other designs cannot, which is whether the '
                     'effect exists at all in a known population'),
                   Q('Multi-site trials with pre-specified comparisons across sites are one '
                     'response to the objection'),
                   Q('Replication across settings, with the mechanism investigated in each, is '
                     'what makes a finding usable')],
             key='B', moves={'A': 'near_miss', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation concedes the point about transfer in one sentence and names what '
                 'trials alone settle in the next.',
             trap='A gives the objection rather than the answer to it.'),
        dict(carrier='A deworming program that raised school attendance in one Kenyan district '
                     'may do nothing in a district with different worm species, different schools '
                     'or different distances to a clinic. A planner who applied the result '
                     'elsewhere without that knowledge would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['be following the mechanism closely', 'have run a multi-site trial',
                   'have settled whether the effect exists',
                   'be resting the claim on very little'],
             key='D', moves={'A': 'wrong_direction', 'B': 'imported', 'C': 'near_miss'},
             why='The text says that without the mechanistic knowledge the basis for applying a '
                 'finding anywhere else is tenuous.',
             trap='A credits the planner with the mechanism the case stipulates is absent.'),
        dict(target='tenuous',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('tenuous'),
             opts=['held for a long time', 'stretched over many sites', 'resting on very little',
                   'supported beyond doubt'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'wrong_direction'},
             why='The word describes the basis for applying a finding elsewhere without knowing '
                 'which features matter, so it names a support that is thin.',
             trap='D gives the opposite of the weakness the sentence names.'),
        dict(stem='Which choice best describes the function of the sentence about the history of '
                  'medicine?',
             opts=['It defines external validity for a reader',
                   'It gives the defense its strongest ground',
                   'It reports the cost of multi-site trials',
                   'It concedes that the hierarchy was right'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence follows the claim that trials settle whether the effect exists and '
                 'names the record of treatments that mechanism endorsed and trials destroyed.',
             trap='D restores a hierarchy the next sentence calls a slogan.'),
        dict(sibling='SOC-S02-L3',
             sibling_gloss='Text 2 is passage 142 of this book. It reports an Oregon coverage '
                           'lottery and a preschool trial of a hundred and twenty-three children '
                           'in one town, and calls the second a slender base for a national '
                           'argument.',
             stem='Text 1 presses the objection about transfer. Based on Text 2, which choice '
                  'best shows a study with exactly that limitation?',
             opts=['A preschool trial of a hundred and twenty-three children in one town',
                   'A lottery among ninety thousand applicants for coverage',
                   'A blood pressure result with no significant difference',
                   'A follow-up that ran to the age of forty'],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='Text 2 calls a hundred and twenty-three children in a single town in the 1960s '
                 'a slender base for a national argument.',
             trap='B names the larger of the two studies, whose size is not the limitation at '
                  'issue.'),
        dict(carrier='Their argument is that transferring a trial result requires knowledge the '
                     'trial does not supply. ___ a deworming program that raised school '
                     'attendance in one Kenyan district may do nothing elsewhere.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'As a result,', 'In other words,', 'For instance,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'restatement'},
             why='The second sentence supplies the deworming district as an instance of the '
                 'claim about transfer, so the transition must mark an example.',
             trap='B makes the deworming case follow from the claim rather than illustrate it.'),
        dict(carrier='Multi-site trials are one response to the objection ___ and they are '
                     'expensive.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['objection and', 'objection, and', 'objection; and', 'objection and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying they are expensive is independent, so the conjunction joining '
                 'it to the clause about the response takes a comma.',
             trap='A runs the clause about the response straight into the clause about the cost.'),
        dict(goal='explain what makes a finding usable in a new place',
             notes=['A trial establishes that a treatment worked where it was run.',
                    'Transferring it requires knowing which features matter.',
                    'Replication across settings, with the mechanism investigated in each, makes '
                    'a finding usable.',
                    'That program is slower and less quotable than a single result.'],
             stem='The student wants to explain what makes a finding usable in a new place. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['A trial establishes that a treatment worked where it was run',
                   'Transferring a result requires knowing which features matter',
                   'The program is slower and less quotable than one result',
                   'Repetition in new settings with the mechanism studied each time'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'true_not_asked'},
             why='Only this choice names the program the notes call what makes a finding usable, '
                 'which is repetition with the mechanism examined in each place.',
             trap='B names the requirement without the program that meets it.'),
    ]))

# --- 3 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='SOC-S03-L4',
    ar=dict(
        khulasa='حاجّ رونالد فيشر، أعظم إحصائيّي جيله، حتّى وفاته سنة ألف وتسعمئة واثنتين وستّين '
                'بأنّ الصلة بين التدخين وسرطان الرئة لم يَثبت أنّها سببية. ولم يكن اعتراضه '
                'سخيفًا، وهو ما زال يُدرَّس في مقرّرات الاستدلال السببيّ.',
        maana='المعنى أنّه اقترح الفرضية البنيوية، أي أنّ عاملًا ثالثًا، وهو هنا استعداد موروث، '
              'قد يُحدث ميل الذوق إلى التبغ والقابلية للمرض كليهما، فيُنتج الاقتران الملحوظ بلا '
              'سهم سببيّ بينهما.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الخلاف: أجاب أوستن برادفورد هيل '
                  'لا بدراسة واحدة بل بقائمة: حجم الاقتران، وثباته عبر السكّان والتصاميم، '
                  'واستجابة الجرعة، وترتيب الزمن الصحيح، وآلية معقولة، وما يجري عند إزالة '
                  'التعرّض.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسب الاعتراض باقيًا بلا جواب، مع أنّ '
             'النصّ يقول إنّه أُجيب في خمس عشرة سنة. ويقترن المقطع بالمقطع الثالث والأربعين بعد '
             'المئة.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Fisher had been a paid consultant to the industry',
                   'Heavy smokers had about twenty times the risk',
                   'Nobody could run the experiment that would settle it',
                   'Observational evidence can carry a causal claim'],
             key='D', moves={'A': 'true_not_asked', 'B': 'underreach', 'C': 'underreach'},
             why='The text says what the episode establishes is that observational evidence can '
                 'carry a causal claim, provided many independent lines are brought rather than '
                 'one correlation.',
             trap='C stops at the objection the answer took fifteen years to meet.'),
        dict(stem='According to the text, what did Fisher propose as an alternative?',
             opts=['A dose response across populations', 'An inherited disposition behind both',
                   'A twin study of smoking habits', 'A list of strengthening considerations'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'near_miss'},
             why='The text says Fisher proposed the constitutional hypothesis, that a third '
                 'factor and in this case an inherited disposition might cause both.',
             trap='C names the design that later addressed his hypothesis.'),
        dict(claim='the agreement between the lines of evidence was unusually complete',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'agreement between the lines of evidence was unusually complete?',
             opts=[Q('He also pointed out, entirely correctly, that nobody could run the '
                     'experiment that would settle the question directly'),
                   Q('Fisher had been a paid consultant to the tobacco industry, which is often '
                     'mentioned and does not dispose of his argument'),
                   Q('Heavy smokers had about twenty times the risk, the finding appeared in '
                     'every country examined, risk rose with consumption and fell after '
                     'quitting, and lung tissue from smokers showed the damage directly'),
                   Q('Twin studies addressed the constitutional hypothesis directly, animal '
                     'experiments supplied the mechanism')],
             key='C', moves={'A': 'true_not_asked', 'B': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation runs through the size, the consistency, the dose response, the '
                 'reversibility and the tissue evidence in one sentence.',
             trap='D names two of the later lines rather than the completeness of the '
                  'agreement.'),
        dict(carrier='Risk rose with consumption and fell after quitting. A reader who asked '
                     'which of the considerations those two facts satisfy would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['name the dose response and the reversibility',
                   'name the time order and the mechanism',
                   'find the constitutional hypothesis confirmed',
                   'need an experiment nobody could run'],
             key='A', moves={'B': 'near_miss', 'C': 'wrong_direction', 'D': 'imported'},
             why='The list includes a dose response and what happens when the exposure is '
                 'removed, which are exactly the rise with consumption and the fall after '
                 'quitting.',
             trap='B names two other items on the same list.'),
        dict(target='sound',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('sound'),
             opts=['audible to a listener', 'measured by a device', 'easily refuted',
                   'free of a flaw'],
             key='D', moves={'A': 'imported', 'B': 'imported', 'C': 'wrong_direction'},
             why='The text calls a sound objection from a serious opponent the most useful thing '
                 'a field can be given, so the word names an objection without a defect in it.',
             trap='C gives the opposite of the quality the sentence praises.'),
        dict(stem='Which choice best describes the function of the sentence about the fifteen '
                  'years?',
             opts=['It defines the constitutional hypothesis',
                   'It reports what Fisher was paid to do',
                   'It marks the objection as met rather than waved away',
                   'It argues that Fisher was never answered'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence says the objection was answered rather than dismissed and puts '
                 'fifteen years on the work of answering it.',
             trap='D leaves unanswered an objection the sentence says was met.'),
        dict(sibling='SOC-S03-L3',
             sibling_gloss='Text 2 is passage 143 of this book. It defines a natural experiment '
                           'as a situation in which something outside the researchers has '
                           'allocated people almost at random, and calls it the main instrument '
                           'of modern social science.',
             stem='Text 1 says nobody could run the experiment that would settle the question. '
                  'Based on Text 2, which choice best describes the usual substitute?',
             opts=['A list of considerations drawn up by a statistician',
                   'A situation that allocated people almost at random',
                   'A twin study of an inherited disposition',
                   'An animal experiment supplying a mechanism'],
             key='B', moves={'A': 'near_miss', 'C': 'imported', 'D': 'imported'},
             why='Text 2 defines a natural experiment as a situation in which something outside '
                 'the researchers has allocated people almost at random, and calls it the main '
                 'instrument of the field.',
             trap='A names the method Text 1 supplies rather than the substitute Text 2 '
                  'describes.'),
        dict(carrier='Smoking satisfied all of them, and the agreement was unusually complete. '
                     '___ heavy smokers had about twenty times the risk.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Indeed,', 'By contrast,', 'As a result,', 'In other words,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'restatement'},
             why='The second sentence begins the evidence that bears out the claim of complete '
                 'agreement, so the transition must mark a confirmation.',
             trap='C makes the twentyfold risk follow from the agreement rather than support '
                  'it.'),
        dict(carrier='His objection was not foolish ___ and it is still taught in courses on '
                     'causal inference.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['foolish and', 'foolish; and', 'foolish, and', 'foolish and,'],
             key='C', moves={'A': 'run_on', 'B': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying it is still taught is independent, so the conjunction joining '
                 'it to the clause about the objection takes a comma.',
             trap='A runs the clause about the objection straight into the clause about the '
                  'teaching.'),
        dict(goal='explain what a serious objection did for the field',
             notes=['Fisher proposed that an inherited disposition caused both.',
                    'Twin studies addressed that hypothesis directly.',
                    'Animal experiments supplied the mechanism.',
                    'A sound objection from a serious opponent is the most useful thing a field '
                    'can be given.'],
             stem='The student wants to explain what a serious objection did for the field. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['It named the alternative that twin studies and animals then had to rule out',
                   'Fisher proposed that an inherited disposition caused both',
                   'Twin studies addressed that hypothesis directly',
                   'A sound objection is the most useful thing a field can get'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice joins the objection to the work it forced, which is what the '
                 'notes say a serious opponent gives a field.',
             trap='C names one of the answering studies without the objection that prompted it.'),
    ]))

# --- 4 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='SOC-S04-L4',
    ar=dict(
        khulasa='سنة ألف وتسعمئة واثنتين وثمانين قيل لستيفن جاي غولد إنّ به سرطانًا بقاؤه '
                'الوسيط، أي الزمن الذي يموت بحلوله نصف المرضى، ثمانية أشهر. وكان إحصائيًّا '
                'بتدريبه فقرأ الجملة قراءة صحيحة.',
        maana='المعنى أنّ الوسيط موضع، وأنّ للتوزيع ذيلًا أيمن طويلًا، وأنّه كان شابًّا حسن '
              'المعالجة سليمًا من غير ذلك، وله سبب أن يظنّ نفسه في ذلك الذيل. وقد عاش عشرين '
              'سنة، ومقالته في الموضوع أصرح بيان لحجّة ضدّ اتّخاذ المعدّل وصفًا لشخص.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الخلاف: والمشكلة العامّة هي '
                  'الأثر العلاجيّ غير المتجانس، أي حال ينفع فيها العلاج قومًا ويضرّ آخرين '
                  'والمعدّل يبدو صغيرًا. فدواء ينجّي مريضًا من عشرة ويقتل واحدًا من عشرين '
                  'يُبلّغ عن نفع صافٍ متواضع، والرقم صحيح وعديم النفع للقرار.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن تُقدَّم التنبّؤات الشخصية على المعدّل، مع '
             'أنّ النصّ يقول إنّها تؤدّي أداءً سيّئًا في الاختبارات. ويقترن المقطع بالمقطع '
             'الرابع والأربعين بعد المئة.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The answer is a sequence rather than a choice',
                   'Gould lived twenty years after an eight-month median',
                   'A personalized prediction beats an average',
                   'Subgroup analysis should never be registered'],
             key='A', moves={'B': 'underreach', 'C': 'wrong_direction', 'D': 'wrong_direction'},
             why='The text sets the case against the average beside the practical defense of it '
                 'and says the position that has emerged is not a choice but a sequence.',
             trap='C prefers a prediction the text says performs badly in tests.'),
        dict(stem='According to the text, what is a median survival?',
             opts=['The longest time any patient survived',
                   'The average of all the survival times',
                   'The time by which half have died',
                   'The share of patients in the right tail'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'imported'},
             why='The text defines median survival as the time by which half of patients have '
                 'died.',
             trap='B gives the mean rather than the middle value.'),
        dict(claim='a correct average can be useless for one decision',
             stem='Which quotation from the text most strongly supports the claim that a correct '
                  'average can be useless for one decision?',
             opts=[Q('His essay on the subject is the clearest statement of the case against '
                     'taking an average as a description of a person'),
                   Q('It is the only quantity that can be estimated reliably from a feasible '
                     'sample'),
                   Q('subgroup claims have a poor record, and personalized predictions from '
                     'small data perform badly in tests'),
                   Q('A drug that saves one patient in ten and kills one in twenty reports a '
                     'modest net benefit, and the figure is correct and useless for the decision '
                     'in front of a doctor')],
             key='D', moves={'A': 'near_miss', 'B': 'true_not_asked', 'C': 'true_not_asked'},
             why='The quotation names a drug with large opposite effects, calls the net figure '
                 'correct, and says it is useless for the decision in front of a doctor.',
             trap='A praises the essay rather than giving the case it makes.'),
        dict(carrier='A drug that saves one patient in ten and kills one in twenty reports a '
                     'modest net benefit. A doctor reading only that net figure would therefore '
                     '___',
             stem='Which choice most logically completes the text?',
             opts=['know which patients it would save', 'miss the two effects behind it',
                   'have a registered subgroup analysis', 'be predicting from small data'],
             key='B', moves={'A': 'wrong_direction', 'C': 'imported', 'D': 'near_miss'},
             why='The modest net benefit is said to come from saving one in ten and killing one '
                 'in twenty, which the single figure conceals.',
             trap='A credits the net figure with the individual knowledge it lacks.'),
        dict(target='want',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('want'),
             opts=['lack of a thing needed', 'a wish for something',
                   'a search for a fugitive', 'an excess of a thing'],
             key='A', moves={'B': 'near_miss', 'C': 'imported', 'D': 'wrong_direction'},
             why='The text speaks of the want of good individual-level evidence as a real '
                 'limitation, so the word names an absence rather than a desire.',
             trap='B takes the commoner modern sense of a wish.'),
        dict(stem='Which choice best describes the function of the sentence about Gould reading '
                  'correctly?',
             opts=['It defines a heterogeneous treatment effect',
                   'It reports how long he actually lived',
                   'It argues that his doctors were careless',
                   'It shows what the figure left open for him'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'imported'},
             why='The sentence lists the location of the median, the long right tail and his own '
                 'circumstances, which together gave him reason to expect the tail.',
             trap='C blames the doctors, whom the text does not mention at all.'),
        dict(sibling='SOC-S04-L3',
             sibling_gloss='Text 2 is passage 144 of this book. It explains what a confidence '
                           'interval states and warns that if twenty subgroups are examined, one '
                           'significant difference is what twenty tests produce by chance about '
                           'once in every set.',
             stem='Text 1 says subgroups produce false positives without discipline. Based on '
                  'Text 2, which choice best explains that danger?',
             opts=['A trivial difference becomes significant in a large study',
                   'Two overlapping intervals need their own test',
                   'One result in twenty is what chance alone produces',
                   'A journal now names the main comparison in the abstract'],
             key='C', moves={'A': 'near_miss', 'B': 'near_miss', 'D': 'true_not_asked'},
             why='Text 2 says that if twenty subgroups are examined and one shows a significant '
                 'difference, that is what twenty tests produce by chance about once in every '
                 'set.',
             trap='A names a different misuse of significance.'),
        dict(carrier='The defense of the average is practical and strong. ___ it is the only '
                     'quantity that can be estimated reliably from a feasible sample.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'After all,', 'In other words,', 'Even so,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'restatement', 'D': 'wrong_direction'},
             why='The second sentence gives the reason the defense is strong, so the transition '
                 'must mark a ground.',
             trap='D sets the reason against the claim it supports.'),
        dict(carrier='He was a statistician by training ___ and he read the sentence correctly.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['training and', 'training; and', 'training and,', 'training, and'],
             key='D', moves={'A': 'run_on', 'B': 'wrong_mark', 'C': 'misplaced'},
             why='The clause saying he read the sentence correctly is independent, so the '
                 'conjunction joining it to the clause about his training takes a comma.',
             trap='A runs the clause about the training straight into the clause about the '
                  'reading.'),
        dict(goal='explain the sequence the field has settled on',
             notes=['Estimate the average first.',
                    'Pre-specify a small number of subgroups on mechanistic grounds.',
                    'Treat anything else as a hypothesis.',
                    'Protocols register the subgroup analyses in advance.'],
             stem='The student wants to explain the sequence the field has settled on. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['Estimate the average before anything else is done',
                   'Average first, a few subgroups named in advance, and the rest only a '
                   'hypothesis',
                   'Protocols register the subgroup analyses in advance',
                   'Treat anything beyond those subgroups as a hypothesis'],
             key='B', moves={'A': 'underreach', 'C': 'true_not_asked', 'D': 'underreach'},
             why='Only this choice puts the three steps of the sequence in the order the notes '
                 'give them.',
             trap='D gives the last step without the two that precede it.'),
    ]))

# --- 5 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='SOC-S05-L4',
    ar=dict(
        khulasa='حاجّ ريتشارد تيتموس سنة ألف وتسعمئة وسبعين بأنّ الدفع مقابل الدم يُنتج دمًا '
                'أقلّ وأسوأ من طلبه هِبةً. وحجّته أنّ الدفع يغيّر معنى الفعل، فيُخرج '
                'المتبرّعين الذين يعطون عن واجب ويجذب من لهم أكبر سبب في إخفاء عدوى.',
        maana='المعنى أنّ كينيث آرو ردّ بأنّ الحجّة تخلط دعويين وأنّ السوق ونظام الهبة يمكن أن '
              'يتعايشا. ولم تكن البيانات في ذلك الوقت كافية للحسم، وصار الخلاف الحالة القياسية '
              'للإزاحة، أي إزاحة دافع داخليّ بمكافأة خارجية.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الخلاف: والتجربة التي تُذكَر '
                  'عادةً ضدّ المُحَفِّزات أصغر وأنقى: أدخلت عشر حضانات إسرائيلية غرامة على '
                  'الآباء الذين يتأخّرون في أخذ أطفالهم، فزاد التأخّر زيادة معتبرة دائمة ولم '
                  'يعد إلى ما كان حين أُزيلت الغرامة.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن تُحسب المُحَفِّزات فاشلة في عمومها، مع أنّ '
             'النصّ يقول إنّ أكثرها يعمل في الجهة المعتادة. ويقترن المقطع بالمقطع الخامس '
             'والأربعين بعد المئة.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Titmuss argued in 1970 that paying for blood produces less',
                   'Crowding out is real, limited, and depends on what a payment signals',
                   'Most incentives in most places fail to work',
                   'Blood systems in rich countries demonstrate Titmuss'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'wrong_direction'},
             why='The text calls the honest reading narrower than either slogan: crowding out is '
                 'real, documented in a modest number of settings, and dependent on what the '
                 'payment signals.',
             trap='C reverses the sentence saying most incentives work in the ordinary '
                  'direction.'),
        dict(stem='According to the text, what happened when the day care fine was removed?',
             opts=['Lateness fell back to its old level',
                   'The centers introduced a larger fine',
                   'Parents began arriving early instead',
                   'Lateness stayed where the fine had put it'],
             key='D', moves={'A': 'wrong_direction', 'B': 'imported', 'C': 'imported'},
             why='The text says lateness increased substantially and permanently and did not fall '
                 'back when the fine was removed.',
             trap='A restores a level the text says did not return.'),
        dict(claim='the fine changed what the lateness meant',
             stem='Which quotation from the text most strongly supports the claim that the fine '
                  'changed what the lateness meant?',
             opts=[Q('the fine converted a social obligation into a price, and once a parent '
                     'could buy an extra twenty minutes the obligation was gone and did not '
                     'return'),
                   Q('Ten Israeli day care centers introduced a fine for parents who collected '
                     'their children late'),
                   Q('Kenneth Arrow replied that the argument confused two claims and that a '
                     'market and a gift system could coexist'),
                   Q('Blood systems in most rich countries are unpaid, which is consistent with '
                     'Titmuss and does not demonstrate him')],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation names the conversion of an obligation into a price and says the '
                 'obligation did not return once the twenty minutes could be bought.',
             trap='B reports the intervention without the change in meaning it produced.'),
        dict(carrier='A payment that reads as recognition does not displace the motive, while one '
                     'that reads as a transaction does. A scheme designed to avoid crowding out '
                     'would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['set the largest sum it can afford',
                   'convert the obligation into a price',
                   'make the payment read as thanks',
                   'remove the payment after a month'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'imported'},
             why='The text says a payment reading as recognition leaves the motive in place while '
                 'one reading as a transaction displaces it.',
             trap='B builds in the conversion the design is meant to avoid.'),
        dict(target='pernicious',
             stem='As used in the text, what does the word %s most nearly mean?'
                  % Q('pernicious'),
             opts=['persistent over time', 'quietly damaging', 'widely documented',
                   'plainly beneficial'],
             key='B', moves={'A': 'near_miss', 'C': 'imported', 'D': 'wrong_direction'},
             why='The text speaks of the pernicious cases sharing a feature, and those are the '
                 'cases in which a payment destroyed a meaning, so the word marks harm done.',
             trap='D gives the opposite of the harm the word names.'),
        dict(stem='Which choice best describes the function of the sentence about the reply from '
                  'Arrow?',
             opts=['It puts a second position against the first',
                   'It defines crowding out for a reader',
                   'It reports the day care finding',
                   'It settles the dispute about blood'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence follows the argument from Titmuss and reports the objection that '
                 'the argument confused two claims and that both systems could coexist.',
             trap='D settles a dispute the next sentence says the data could not.'),
        dict(sibling='SOC-S05-L3',
             sibling_gloss='Text 2 is passage 145 of this book. It says the standard remedy for a '
                           'before-and-after figure is difference in differences, comparing the '
                           'change in a treated place with the change in an untreated one over '
                           'the same period.',
             stem='Text 1 reports lateness rising after a fine. Based on Text 2, which choice '
                  'best describes what the study of ten centers still needs?',
             opts=['An elasticity of lateness with respect to price',
                   'A record of the weather in the same period',
                   'A spillover of parents to other centers',
                   'Centers without a fine measured over the same weeks'],
             key='D', moves={'A': 'near_miss', 'B': 'imported', 'C': 'near_miss'},
             why='Text 2 says the remedy is to compare the change in a treated place with the '
                 'change in an untreated one over the same period.',
             trap='A names the quantity usually reported rather than the comparison the design '
                  'needs.'),
        dict(carrier='Crowding out is real, is documented in a modest number of settings, and '
                     'depends on what the payment signals. ___ most incentives in most places '
                     'work in the ordinary direction.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['As a result,', 'For instance,', 'All the same,', 'In other words,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'restatement'},
             why='The second sentence limits the scope of the effect just granted, so the '
                 'transition must mark a concession.',
             trap='A makes the ordinary cases follow from the crowding out.'),
        dict(carrier='The data at the time were not good enough to settle it ___ and the dispute '
                     'became the standard case for crowding out.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['it, and', 'it and', 'it; and', 'it and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the dispute becoming the standard case is independent, so the '
                 'conjunction joining it to the clause about the data takes a comma.',
             trap='B runs the clause about the data straight into the clause about the dispute.'),
        dict(goal='explain what the damaging cases have in common',
             notes=['The pernicious cases share a feature worth remembering.',
                    'The activity already carried a meaning that the payment replaced.',
                    'Meanings are harder to restore than prices.',
                    'Lateness did not fall back when the fine was removed.'],
             stem='The student wants to explain what the damaging cases have in common. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['The pernicious cases share one feature worth remembering',
                   'Lateness did not fall back when the fine was removed',
                   'A payment replaced a meaning, and a meaning is harder to put back than a '
                   'price',
                   'Meanings are harder to restore than prices are'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'restatement'},
             why='Only this choice names the replaced meaning and the difficulty of restoring it, '
                 'which is the shared feature the notes identify.',
             trap='B gives one instance without the feature the cases share.'),
    ]))

# --- 6 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='SOC-S06-L4',
    ar=dict(
        khulasa='حسابان للأعراف شائعان، أحدهما من نظرية الألعاب والآخر من الأنثروبولوجيا، وهما '
                'يتنبّآن تنبّؤين مختلفين. فحساب التوازن يقول إنّ العُرف يبقى لأنّ اتّباعه في '
                'مصلحة كلّ شخص متى اتّبعه غيره، والسير على جهة من الطريق هو الحالة الواضحة.',
        maana='المعنى أنّ مضمون القاعدة تعسّفيّ والتناسق ليس كذلك، وعلى هذا الرأي تُختار '
              'الأعراف بمعنى ضعيف، إذ يختارها كلّ أحد بالنظر إلى ما يفعله غيره، وتتغيّر سريعًا '
              'متى تغيّرت الحوافز.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الخلاف: وحساب النقل، أي الرأي '
                  'بأنّ الأعراف تُتعلَّم في الطفولة وتُعاد بلا تمحيص، يقول إنّ من يحملها لا '
                  'يستطيع أن يقول لماذا يحملها، فالعُرف مُوَرَّث لا مُختار، ودليله أنّ الأعراف '
                  'تنجو من الظروف التي أنشأتها.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُطلَب اختيار أحد الحسابين، مع أنّ النصّ '
             'يقول إنّ الآليّتين موجودتان. ويقترن المقطع بالمقطع السادس والأربعين بعد المئة.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Driving on one side of the road is a coordination norm',
                   'Attitudes to marriage track birth cohort closely',
                   'The speed of change identifies which mechanism is at work',
                   'Only one of the two accounts can be correct'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'wrong_direction'},
             why='The text says both mechanisms exist and that the observed speed of change is '
                 'the evidence that identifies which one is operating.',
             trap='D forces a choice the text says the evidence does not require.'),
        dict(stem='According to the text, how fast did indoor smoking become unacceptable?',
             opts=['Within about fifteen years', 'At the speed of generations',
                   'Within about fifty years', 'Only after migration'],
             key='A', moves={'B': 'detail_swap', 'C': 'imported', 'D': 'detail_swap'},
             why='The text says smoking indoors became unacceptable in many countries within '
                 'about fifteen years, as did seat belt use.',
             trap='B gives the pace the text assigns to transmitted norms.'),
        dict(claim='some norms outlast the conditions that produced them',
             stem='Which quotation from the text most strongly supports the claim that some norms '
                  'outlast the conditions that produced them?',
             opts=[Q('driving on one side of the road is the clear case, and the content of the '
                     'rule is arbitrary while the coordination is not'),
                   Q('Rules about food, cleanliness and family obligation persist for '
                     'generations after migration, and differences between neighboring and '
                     'insular communities with identical economic conditions can be large and '
                     'stable'),
                   Q('Studies of migrant communities in Toronto and elsewhere are the standard '
                     'testing ground for the second account'),
                   Q('Equilibrium norms should change fast when the payoffs do, and several '
                     'have: smoking indoors became unacceptable in many countries within about '
                     'fifteen years')],
             key='B', moves={'A': 'true_not_asked', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation reports rules persisting for generations after migration and '
                 'stable differences between communities with identical economic conditions.',
             trap='D gives the behavior of the other kind of norm.'),
        dict(carrier='Equilibrium norms should change fast when the payoffs do, and transmitted '
                     'norms should change at the speed of generations. A norm that moved sharply '
                     'within a decade would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['be carried by people who could not say why',
                   'track birth cohort rather than conditions',
                   'require a study of migrant communities',
                   'look like the first kind rather than the second'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'imported'},
             why='The text makes the speed of change the evidence that identifies the mechanism, '
                 'and the fast case is the equilibrium one.',
             trap='B gives the signature of the transmitted kind.'),
        dict(target='insular',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('insular'),
             opts=['built on an island', 'wealthy and settled', 'closed to outsiders',
                   'open to every comer'],
             key='C', moves={'A': 'near_miss', 'B': 'imported', 'D': 'wrong_direction'},
             why='The word describes communities whose differences from their neighbors stay '
                 'large and stable, so it names a group that keeps to itself.',
             trap='A takes the literal geographical sense.'),
        dict(stem='Which choice best describes the function of the sentence about the '
                  'distinguishing prediction?',
             opts=['It defines the equilibrium account for a reader',
                   'It names the test that separates the two accounts',
                   'It reports the Toronto studies and their flaw',
                   'It argues that the accounts make the same forecast'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence saying the distinguishing prediction concerns speed is followed by '
                 'the fast cases and then the generational ones.',
             trap='D merges two predictions the sentence is there to separate.'),
        dict(sibling='SOC-S06-L3',
             sibling_gloss='Text 2 is passage 146 of this book. It reports that conformity '
                           'collapsed when one confederate gave the correct answer and concludes '
                           'that what survives is a mechanism whose size depends on who is in the '
                           'room.',
             stem='Text 1 sets a transmitted norm against an equilibrium one. Based on Text 2, '
                  'which choice best describes an effect that tracks the room?',
             opts=['Conformity collapsing when one ally speaks up',
                   'A rate that stayed the same in every country',
                   'Rules about food persisting after migration',
                   'A task easy to the point of being insulting'],
             key='A', moves={'B': 'wrong_direction', 'C': 'imported', 'D': 'true_not_asked'},
             why='Text 2 says conformity collapsed when one confederate gave the correct answer '
                 'and that the size of the effect depends on who is in the room.',
             trap='B denies the variation Text 2 reports across countries and decades.'),
        dict(carrier='Transmitted norms should change at the speed of generations. ___ several '
                     'have done that instead, including attitudes to marriage and to authority.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'As a result,', 'In other words,', 'Indeed,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'restatement'},
             why='The second sentence bears out the prediction just made, so the transition must '
                 'mark a confirmation.',
             trap='A sets the cases against the prediction they satisfy.'),
        dict(carrier='Two accounts of norms are current ___ and they make different predictions.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['current and', 'current, and', 'current; and', 'current and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying they make different predictions is independent, so the '
                 'conjunction joining it to the clause about the two accounts takes a comma.',
             trap='A runs the clause about the accounts straight into the clause about the '
                  'predictions.'),
        dict(goal='explain why the choice of account matters for policy',
             notes=['Equilibrium norms change fast when the payoffs change.',
                    'Transmitted norms change at the speed of generations.',
                    'The speed of change identifies which mechanism is operating.',
                    'A policy working on one of them will not work on the other.'],
             stem='The student wants to explain why the choice of account matters for policy. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['Equilibrium norms change fast when the payoffs change',
                   'Transmitted norms change at the speed of generations',
                   'The speed of change identifies the mechanism at work',
                   'A lever that moves payoffs does nothing to a norm carried unexamined'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'restatement'},
             why='Only this choice states the practical consequence the notes name, that a policy '
                 'aimed at one mechanism leaves the other untouched.',
             trap='C names the diagnostic without the consequence for policy.'),
    ]))

# --- 7 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='SOC-S07-L4',
    ar=dict(
        khulasa='الموقف المدرسيّ أنّ الأجور السكنية عالية حيث يشحّ الإسكان، فبناء إسكان أكثر '
                'يخفض الأجور. والردّ المتشكّك، وهو شائع في منظّمات المستأجرين في المدن '
                'الغالية، أنّ الأبنية الجديدة أبنية فارهة تأتي بمقاهٍ وأجور صاعدة حولها.',
        maana='المعنى أنّ العرض يُنتج عمليًّا طلبًا مُستحثًّا، أي أنّ الوحدات الجديدة تجذب ناسًا '
              'إضافيّين فلا يهبط السعر. وللدعويين دليل، والدليل يعمل في مقياسين مختلفين: '
              'فدراسات الأبنية الفردية في سان فرانسيسكو وهلسنكي ونيويورك تجد أنّ الأجور في '
              'المَربَعات المجاورة ترتفع.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الخلاف: ودراسات المناطق '
                  'الحضرية تجد أنّ المواضع التي بنت أكثر فيها نموّ أجور أقلّ. والآلية '
                  'الموفّقة هي الترشيح، أي أنّ الإسكان الجديد الغالي يُفرِج إسكانًا أقدم '
                  'أرخص لغيرهم، وتتبّع الانتقالات يُظهر سلاسل من ستّة أو سبعة إخلاءات.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسب الدليلان متناقضين، مع أنّ النصّ يقول '
             'إنّهما لا يتعارضان. ويقترن المقطع بالمقطع السابع والأربعين بعد المئة.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Studies find rents rise in the blocks around new buildings',
                   'Tracking moves shows chains of six or seven vacancies',
                   'Supply and the local rise are in direct conflict',
                   'Supply works at the regional scale and leaves neighbors exposed'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'wrong_direction'},
             why='The text says supply does reduce rents at the scale of a region, that it does '
                 'not protect the people nearest the construction, and that the two facts are not '
                 'in conflict.',
             trap='C sets in conflict two findings the text says agree.'),
        dict(stem='According to the text, what does filtering describe?',
             opts=['New units attracting additional people',
                   'New expensive housing freeing older cheaper housing',
                   'Cafes arriving with the new buildings',
                   'Rents rising in the surrounding blocks'],
             key='B', moves={'A': 'detail_swap', 'C': 'imported', 'D': 'detail_swap'},
             why='The text says filtering is the process by which new expensive housing frees '
                 'older cheaper housing for others.',
             trap='A gives induced demand rather than filtering.'),
        dict(claim='the two bodies of evidence answer at different scales',
             stem='Which quotation from the text most strongly supports the claim that the two '
                  'bodies of evidence answer at different scales?',
             opts=[Q('new buildings are luxury buildings, that they arrive with cafes and rising '
                     'rents around them'),
                   Q('Both literatures have grown quickly since administrative rent data became '
                     'available'),
                   Q('which supports the skeptics on the thing residents actually observe. '
                     'Studies of metropolitan areas find that places which built more have lower '
                     'rent growth'),
                   Q('A tenant displaced this year is not compensated by lower regional rents in '
                     'five years')],
             key='C', moves={'A': 'near_miss', 'B': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation sets the block-level finding that supports the skeptics beside '
                 'the metropolitan finding that supports the textbook.',
             trap='D names the fairness problem rather than the difference in scale.'),
        dict(carrier='A tenant displaced this year is not compensated by lower regional rents in '
                     'five years, and the chains work through a market in which the first '
                     'beneficiaries are better off than the last. A policy resting on filtering '
                     'alone would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['leave the nearest tenants unhelped',
                   'raise rents across the whole region',
                   'stop the chains of vacancies forming',
                   'need administrative rent data first'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'imported'},
             why='The chains are said to reach down the distribution only over years, and a '
                 'displaced tenant is not compensated by a later regional fall.',
             trap='B reverses the regional effect the text reports.'),
        dict(target='bears',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('bears'),
             opts=['carries in the arms', 'gives birth to', 'turns toward', 'is left paying'],
             key='D', moves={'A': 'near_miss', 'B': 'imported', 'C': 'imported'},
             why='The dispute is said to be about who bears the costs and over what period, so '
                 'the word names whoever ends up paying them.',
             trap='A takes the physical sense of carrying a load.'),
        dict(stem='Which choice best describes the function of the sentence about the reconciling '
                  'mechanism?',
             opts=['It defines induced demand for a reader',
                   'It reports the cities where rents were studied',
                   'It shows how both findings can hold at once',
                   'It denies that the local rents ever rise'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence names filtering and the chains of vacancies, which link the local '
                 'rise to the regional fall the two literatures report.',
             trap='D denies a rise the text treats as observed.'),
        dict(sibling='SOC-S07-L3',
             sibling_gloss='Text 2 is passage 147 of this book. It warns that census tracts are '
                           'split as they grow and merged as they shrink, so a table comparing a '
                           'neighborhood in two censuses may be comparing two different pieces of '
                           'ground.',
             stem='Text 1 compares findings at the block and the metropolitan scale. Based on '
                  'Text 2, which choice best describes a hazard in that comparison?',
             opts=['A category rewritten between two censuses',
                   'Tracts split and merged between the two dates',
                   'An undercount of about one percent in total',
                   'A conversion table published by an agency'],
             key='B', moves={'A': 'near_miss', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='Text 2 says tracts are split as they grow and merged as they shrink, so a '
                 'comparison of the same neighborhood may cover different ground.',
             trap='A names the third complication rather than the one about areas.'),
        dict(carrier='Both claims have evidence and the evidence operates at different scales. '
                     '___ studies of individual new buildings find that rents in the immediately '
                     'surrounding blocks rise.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['For instance,', 'By contrast,', 'As a result,', 'In other words,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'restatement'},
             why='The second sentence gives the first of the two bodies of evidence just '
                 'announced, so the transition must mark an example.',
             trap='C makes the block-level finding follow from the claim rather than illustrate '
                  'it.'),
        dict(carrier='Both claims have evidence ___ and the evidence operates at different '
                     'scales.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['evidence and', 'evidence; and', 'evidence, and', 'evidence and,'],
             key='C', moves={'A': 'run_on', 'B': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the scales is independent, so the conjunction joining it to '
                 'the clause about the two claims takes a comma.',
             trap='A runs the clause about the claims straight into the clause about the '
                  'scales.'),
        dict(goal='explain why the argument is about compensation rather than economics',
             notes=['Supply reduces rents at the scale of a region.',
                    'It does not protect the people nearest the construction.',
                    'A tenant displaced this year is not compensated by a later fall.',
                    'The first beneficiaries of the chains are better off than the last.'],
             stem='The student wants to explain why the argument is about compensation rather '
                  'than economics. Which choice most effectively uses relevant information from '
                  'the notes to accomplish that goal?',
             opts=['The regional gain is real and arrives too late for the tenant nearest the '
                   'site',
                   'Supply reduces rents at the scale of a whole region',
                   'It fails to protect the people nearest the construction',
                   'The first beneficiaries are better off than the last'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice holds the regional gain and the timing together, which is what '
                 'turns the question into one about compensation.',
             trap='C names the gap in protection without the gain it sits beside.'),
    ]))

# --- 8 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='SOC-S08-L4',
    ar=dict(
        khulasa='تحوي أدبيّات الحدّ الأدنى للأجر اليوم مئات التقديرات، والنتيجة المركزية أنّ '
                'الرفوع المتواضعة لها آثار تشغيل صغيرة. وتلك الجملة تُخفي ثلاثين سنة من '
                'الجدال، والجدال مُعلِّم في كيف تُحسَم مسألة تجريبية متنازَعة أو تُعجِز.',
        maana='المعنى أنّ ثلاثة أمور غيّرت المجال: الأوّل البيانات، فسجلّات التشغيل الإدارية '
              'حلّت محلّ المسوح، وارتفع عدد تغييرات الحدّ الأدنى المتاحة للدرس إلى المئات مع '
              'تحديد الولايات والمدن أسعارها.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الخلاف: والثاني المنهج، فصارت '
                  'المقارنات تستعمل المناطق المجاورة وحدها، أو الصناعة نفسها وحدها، أو توزيع '
                  'الأجور بدل التشغيل الكلّيّ. والثالث التحليل البعديّ، الذي كشف رسمًا '
                  'قمعيًّا يتّفق مع بقاء نتائج صفرية صغيرة غير منشورة.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسب الحدّ الأعلى معلومًا، مع أنّ النصّ '
             'يقول إنّ أحدًا لم يُثبته. ويقترن المقطع بالمقطع الثامن والأربعين بعد المئة.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The simple prediction failed and the boundary stays unknown',
                   'The literature now contains hundreds of estimates',
                   'A very high minimum would cost no jobs',
                   'Meta-analysis found no publication bias'],
             key='A', moves={'B': 'underreach', 'C': 'wrong_direction', 'D': 'wrong_direction'},
             why='The text says the simple textbook prediction was wrong about the range actually '
                 'legislated and that nobody has established the upper boundary.',
             trap='C denies a cost the text says everyone agrees a very high minimum carries.'),
        dict(stem='According to the text, what did meta-analysis reveal?',
             opts=['That administrative records replaced surveys',
                   'That comparisons used only nearby areas',
                   'A funnel plot consistent with missing nulls',
                   'That monopsony explains the small effects'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'near_miss'},
             why='The text says meta-analysis revealed that the literature had a funnel plot '
                 'consistent with small null results going unpublished.',
             trap='A names the first of the three changes rather than the third.'),
        dict(claim='the open question is where the turn comes',
             stem='Which quotation from the text most strongly supports the claim that the open '
                  'question is where the turn comes?',
             opts=[Q('administrative employment records replaced surveys, and the number of '
                     'separate minimum wage changes available for study rose into the hundreds'),
                   Q('Monopsony provides the theory for why small increases may not cost jobs'),
                   Q('Several cities have raised minimum wages above half the local median wage, '
                     'which is beyond the range previously studied'),
                   Q('the argument is about where the turn comes, which depends on the local wage '
                     'distribution and cannot be answered in general')],
             key='D', moves={'A': 'true_not_asked', 'B': 'near_miss', 'C': 'near_miss'},
             why='The quotation names the location of the turn as the thing argued about and says '
                 'it depends on the local wage distribution.',
             trap='B supplies the theory for the small effects rather than the open question.'),
        dict(carrier='Everyone agrees that a very high minimum would cost jobs and that a very '
                     'low one would not bind at all. A dispute about a minimum in between would '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['be settled by the textbook model', 'turn on the local wage distribution',
                   'need no empirical evidence at all', 'be answered in general by theory'],
             key='B', moves={'A': 'wrong_direction', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The text says the argument is about where the turn comes, which depends on the '
                 'local wage distribution and cannot be answered in general.',
             trap='D asks for a general answer the text says is unavailable.'),
        dict(target='discriminate',
             stem='As used in the text, what does the word %s most nearly mean?'
                  % Q('discriminate'),
             opts=['tell two things apart', 'treat a group unfairly', 'combine many studies',
                   'select the best estimate'],
             key='A', moves={'B': 'imported', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The text says the new comparisons can discriminate between a job lost and a job '
                 'that simply pays more, so the word names the drawing of a distinction.',
             trap='B takes the social sense of unequal treatment.'),
        dict(stem='Which choice best describes the function of the sentence about monopsony?',
             opts=['It defines meta-analysis for a reader',
                   'It reports the number of estimates now available',
                   'It argues that employers pay above the market',
                   'It supplies the theory the findings had lacked'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'wrong_direction'},
             why='The sentence follows the account of what is still disputed and says monopsony '
                 'explains why small increases may not cost jobs.',
             trap='C reverses the position of the employer the sentence describes.'),
        dict(sibling='SOC-S08-L3',
             sibling_gloss='Text 2 is passage 148 of this book. It reports a survey and a payroll '
                           'study of the same restaurants reaching opposite conclusions, and says '
                           'the exchange drove a generation of work using administrative data and '
                           'borders.',
             stem='Text 1 says administrative records replaced surveys. Based on Text 2, which '
                  'choice best explains what prompted that change?',
             opts=['A Nobel prize shared in 2021',
                   'A restaurant trade association helping with a sample',
                   'A dispute in which two data sources disagreed',
                   'A textbook model predicting a fall in employment'],
             key='C', moves={'A': 'true_not_asked', 'B': 'near_miss', 'D': 'true_not_asked'},
             why='Text 2 says the exchange drove a generation of work using administrative data, '
                 'borders and hundreds of separate minimum wage changes.',
             trap='B names one detail of the dispute rather than the dispute itself.'),
        dict(carrier='That sentence conceals thirty years of argument. ___ few empirical '
                     'questions in economics have been fought over for as long or with as much '
                     'data.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Indeed,', 'In other words,', 'For instance,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The second sentence bears out the claim about the length of the argument, so '
                 'the transition must mark a confirmation.',
             trap='A sets the second sentence against the claim it supports.'),
        dict(carrier='The minimum wage literature now contains hundreds of estimates ___ and the '
                     'central finding is that modest increases have small employment effects.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['estimates and', 'estimates; and', 'estimates and,', 'estimates, and'],
             key='D', moves={'A': 'run_on', 'B': 'wrong_mark', 'C': 'misplaced'},
             why='The clause about the central finding is independent, so the conjunction joining '
                 'it to the clause about the hundreds of estimates takes a comma.',
             trap='A runs the clause about the estimates straight into the clause about the '
                  'finding.'),
        dict(goal='explain the exact standing of the question after thirty years',
             notes=['The simple textbook prediction was wrong about the legislated range.',
                    'Nobody has established the upper boundary.',
                    'Recent increases in some cities are the largest natural experiment yet.',
                    'Results from those cases are not yet consistent.'],
             stem='The student wants to explain the exact standing of the question after thirty '
                  'years. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['The simple textbook prediction was wrong about the legislated range',
                   'The low range is settled, the boundary is open, and the new cases are still '
                   'arriving',
                   'Nobody has yet established the upper boundary',
                   'Results from the recent cases are not yet consistent'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice states all three parts of the standing the notes give: what is '
                 'settled, what is open, and what is still coming in.',
             trap='C names the open part without the settled part or the new evidence.'),
    ]))

# --- 9 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='SOC-S09-L4',
    ar=dict(
        khulasa='هدفان متاحان لمن يريد أن يعمل في توزيع الدخل، وليسا الهدف نفسه. أحدهما الفقر '
                'المطلق، أي معيار مثبَّت على مستوى من السلع والخدمات لا نسبةً إلى غيرك، وعلى '
                'هذا المقياس تحسّن العالم تحسّنًا هائلًا في أربعين سنة.',
        maana='المعنى أنّ حصّة من هم تحت الخطّ الدوليّ هبطت من قريب أربعة من عشرة إلى أقلّ من '
              'واحد من عشرة، وأنّ الآخر هو عدم المساواة مقيسًا بالفجوة بين القمّة والبقيّة، '
              'وعلى هذا المقياس تحرّكت بلدان غنيّة كثيرة في الجهة الأخرى بحدّة.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الخلاف: فيقول أحد الطرفين إنّ '
                  'الفقر هو المهمّ، وإنّ الفجوة لا تَسوء إلّا إن أسوأت حال أحد، وإنّ القلق '
                  'المُعلَن على عدم المساواة حسد بنظرية ملحقة. ويقول الآخر إنّ عدم المساواة '
                  'يُسيء بآليّات يمكن تعيينها.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسم الخلاف لأحد الطرفين، مع أنّ النصّ '
             'يقول إنّ الدليل مختلط. ويقترن المقطع بالمقطع التاسع والأربعين بعد المئة.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The share below the international line fell sharply',
                   'The two targets differ and sometimes conflict in policy',
                   'The evidence favors one side of the dispute decisively',
                   'Inequality has no mechanism that can be specified'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'wrong_direction'},
             why='The text names absolute poverty and inequality as two different targets, calls '
                 'the evidence mixed, and says the two targets sometimes conflict in policy.',
             trap='C settles a dispute the text calls undecided.'),
        dict(stem='According to the text, what happens to the health correlations under control?',
             opts=['They disappear entirely', 'They grow much larger',
                   'They stay exactly as they were', 'They shrink substantially'],
             key='D', moves={'A': 'overreach', 'B': 'wrong_direction', 'C': 'wrong_direction'},
             why='The text says correlations between inequality and poor health across countries '
                 'are real and shrink substantially when income levels are controlled for.',
             trap='A removes a correlation the text says is real.'),
        dict(claim='the mechanisms can be named rather than merely asserted',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'mechanisms can be named rather than merely asserted?',
             opts=[Q('Political influence buys rules, and high inequality raises the price of '
                     'positional goods such as housing near good schools'),
                   Q('On that measure the world has improved enormously in forty years'),
                   Q('The political mechanism is the best supported of the three and is hard to '
                     'quantify'),
                   Q('Both measures depend on choices about price indices and household size')],
             key='A', moves={'B': 'true_not_asked', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation names two specific mechanisms, the buying of rules and the price '
                 'of positional goods, where the claim asks for named mechanisms.',
             trap='C grades one mechanism rather than naming any.'),
        dict(carrier='Growth has reduced poverty in several countries while increasing '
                     'inequality. Anyone who declines to choose between the two targets would '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['have both measures moving together', 'be controlling for income levels',
                   'be avoiding the arithmetic', 'have specified a mechanism first'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'near_miss'},
             why='The text says anyone who declines to choose between the two targets is not '
                 'facing the arithmetic, given that growth has moved them in opposite '
                 'directions.',
             trap='A assumes the two measures agree, which the same sentence denies.'),
        dict(target='ostensible',
             stem='As used in the text, what does the word %s most nearly mean?'
                  % Q('ostensible'),
             opts=['openly measured', 'professed rather than real', 'widely shared',
                   'proved beyond doubt'],
             key='B', moves={'A': 'imported', 'C': 'imported', 'D': 'wrong_direction'},
             why='The word qualifies a concern that one side calls envy with a theory attached, '
                 'so it marks a stated motive the speaker doubts.',
             trap='D treats the concern as established when the word casts doubt on it.'),
        dict(stem='Which choice best describes the function of the sentence calling the evidence '
                  'mixed?',
             opts=['It refuses to award the dispute to either side',
                   'It defines a positional good for a reader',
                   'It reports the fall in absolute poverty',
                   'It argues that inequality does no harm'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence says the empirical question is whether the mechanisms are large '
                 'and that the evidence is mixed in a way that does not favor either side '
                 'decisively.',
             trap='D takes one side of a dispute the sentence leaves open.'),
        dict(sibling='SOC-S09-L3',
             sibling_gloss='Text 2 is passage 149 of this book. It describes the Lorenz curve and '
                           'the Gini coefficient and names the Palma ratio, which compares the '
                           'top tenth with the bottom four tenths, among the alternatives chosen '
                           'for what they expose.',
             stem='Text 1 measures inequality as the gap between the top and the rest. Based on '
                  'Text 2, which choice best names a figure built for that gap?',
             opts=['The Lorenz curve of cumulative shares',
                   'The area between the curve and the diagonal',
                   'The Theil index decomposed by region',
                   'The Palma ratio of the top tenth'],
             key='D', moves={'A': 'near_miss', 'B': 'near_miss', 'C': 'true_not_asked'},
             why='Text 2 says the Palma ratio compares the top tenth with the bottom four tenths, '
                 'on the argument that the middle half changes little.',
             trap='B names the Gini, which Text 2 calls least sensitive at the ends.'),
        dict(carrier='One side holds that poverty is what matters. ___ the other side holds that '
                     'inequality does make people worse off.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['As a result,', 'For instance,', 'By contrast,', 'In other words,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'restatement'},
             why='The second sentence states the opposing position, so the transition must mark a '
                 'contrast.',
             trap='A makes the second position follow from the first.'),
        dict(carrier='Two targets are available to anyone who wants to act on the distribution of '
                     'income ___ and they are not the same target.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['income, and', 'income and', 'income; and', 'income and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying they are not the same target is independent, so the '
                 'conjunction joining it to the clause about the two targets takes a comma.',
             trap='B runs the clause about the targets straight into the clause about their '
                  'difference.'),
        dict(goal='explain why the two targets force a choice',
             notes=['Absolute poverty is fixed at a level of goods and services.',
                    'Inequality is the gap between the top and the rest.',
                    'Growth has reduced poverty while increasing inequality.',
                    'Anyone who declines to choose is not facing the arithmetic.'],
             stem='The student wants to explain why the two targets force a choice. Which choice '
                  'most effectively uses relevant information from the notes to accomplish that '
                  'goal?',
             opts=['Absolute poverty is fixed at a level of goods and services',
                   'Inequality is measured as the gap between the top and the rest',
                   'Growth has moved the two measures in opposite directions at once',
                   'Anyone who declines to choose is not facing the arithmetic'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'restatement'},
             why='Only this choice gives the fact that makes the choice unavoidable, which is one '
                 'process moving the two measures the other way.',
             trap='D states the verdict without the fact that forces it.'),
    ]))

# --- 10 ------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='SOC-S10-L4',
    ar=dict(
        khulasa='يمكن قراءة أدبيّات الاستدلالات المختصرة قراءتين، والقراءة المختارة تقرّر ما '
                'يلزم عنها. فالأولى تعدّ كلّ انحراف موثَّق عن نموذج صوريّ تحيّزًا، أي خطأً، '
                'وتخلص إلى أنّ الحكم البشريّ معيب بانتظام ويحتاج إلى تصحيح من المؤسّسات '
                'والخبراء.',
        maana='المعنى أنّ الثانية ترى أنّ القواعد التي يستعملها الناس متكيّفة مع البيئات التي '
              'يعملون فيها عادةً، وهو موقف يُسمّى العقلانية البيئية، وأنّ الأداء في مسألة '
              'مصطنعة ليس دليلًا على الأداء في الحياة.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الخلاف: وللقراءة الثانية سند '
                  'تجريبيّ يسهل بيانه: فعدّة أخطاء مشهورة تتقلّص أو تزول إذا وُضعت المسألة '
                  'نفسها في تكرارات لا في احتمالات حدث واحد، وهكذا تَرِد المعلومات في '
                  'الخبرة.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُقدَّم تدريب الناس على تجاوز الأخطاء على '
             'إعادة تصميم العرض، مع أنّ النصّ يقول عكسه. ويقترن المقطع بالمقطع الخمسين بعد '
             'المئة.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Anchoring is robust across presentation formats',
                   'Gigerenzer and Kahneman debated for two decades',
                   'The camps converged on practice without settling the theory',
                   'Training people out of errors works better than redesign'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'wrong_direction'},
             why='The text says the two camps have converged on practice while continuing to '
                 'disagree about what the practice shows, and calls that convergence the most '
                 'useful product of the argument.',
             trap='D reverses the comparison the text draws between the two remedies.'),
        dict(stem='According to the text, when do doctors mostly succeed?',
             opts=['When the problem is posed as counts',
                   'When the problem is posed in percentages',
                   'When they are trained out of the error',
                   'When the problem is framed two ways'],
             key='A', moves={'B': 'wrong_direction', 'C': 'imported', 'D': 'imported'},
             why='The text says doctors who fail the base rate problem in percentages mostly '
                 'succeed when it is posed as counts out of a thousand.',
             trap='B gives the presentation in which they fail.'),
        dict(claim='the second reading has results a defect account would not predict',
             stem='Which quotation from the text most strongly supports the claim that the second '
                  'reading has results a defect account would not predict?',
             opts=[Q('Neither reading explains everything. Anchoring is robust across formats '
                     'and is hard to call adaptive'),
                   Q('Simple rules that ignore most of the available information outperform '
                     'complex models in some forecasting tasks, which is not what a defect '
                     'account predicts'),
                   Q('Gigerenzer and Kahneman debated the question in print for two decades'),
                   Q('redesigning the presentation of information works better and more reliably '
                     'than training people out of errors')],
             key='B', moves={'A': 'wrong_direction', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation reports simple rules beating complex models and says in so many '
                 'words that this is not what a defect account predicts.',
             trap='D names the practical lesson rather than a result that embarrasses the first '
                  'reading.'),
        dict(carrier='Several famous errors shrink or vanish when the same problem is posed in '
                     'frequencies rather than in single-event probabilities, which is how '
                     'information arrives in experience. A test posed only in percentages would '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['measure performance in ordinary life',
                   'remove the anchoring effect as well',
                   'show simple rules beating complex ones',
                   'report a failure the format produced'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'imported'},
             why='The errors are said to shrink when the problem is put in the frequencies of '
                 'experience, so a percentage format manufactures part of the failure.',
             trap='A credits the artificial format with the ordinary setting the text contrasts '
                  'it with.'),
        dict(target='telling',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('telling'),
             opts=['speaking at length', 'counting one by one', 'carrying real weight',
                   'easy to overlook'],
             key='C', moves={'A': 'imported', 'B': 'imported', 'D': 'wrong_direction'},
             why='The text calls the evidence about remedies the most telling, so the word names '
                 'evidence that weighs most in the argument.',
             trap='D reverses the force the word gives the evidence.'),
        dict(stem='Which choice best describes the function of the sentence that limits both '
                  'readings?',
             opts=['It defines ecological rationality for a reader',
                   'It opens the case against each side in turn',
                   'It reports what the two men endorsed',
                   'It awards the argument to the second reading'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence is followed by anchoring resisting the adaptive account and '
                 'framing surviving the frequency presentation, one difficulty for each side.',
             trap='D hands the argument to a side the text says has not won it.'),
        dict(sibling='SOC-S10-L3',
             sibling_gloss='Text 2 is passage 150 of this book. It reports the systematic '
                           'replications begun around 2011 and says anchoring survived robustly, '
                           'framing survived, and loss aversion survived with its size '
                           'disputed.',
             stem='Text 1 calls anchoring hard to describe as adaptive. Based on Text 2, which '
                  'choice best describes how firm that effect is?',
             opts=['It survived the systematic replications robustly',
                   'It was among the results that did not survive',
                   'It was confirmed with its size disputed',
                   'It was removed by preregistration'],
             key='A', moves={'B': 'wrong_direction', 'C': 'near_miss', 'D': 'imported'},
             why='Text 2 says anchoring survived robustly, while loss aversion survived with its '
                 'size disputed and several taught results did not survive at all.',
             trap='C gives the status Text 2 assigns to loss aversion.'),
        dict(carrier='The second reading has experimental support that is easy to state. ___ '
                     'several famous errors shrink or vanish when the same problem is posed in '
                     'frequencies.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'In other words,', 'For instance,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'restatement'},
             why='The second sentence gives the first piece of the support just announced, so the '
                 'transition must mark an example.',
             trap='B sets the support against the sentence that introduces it.'),
        dict(carrier='The heuristics literature can be read in two ways ___ and the reading '
                     'chosen decides what follows from it.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['ways and', 'ways, and', 'ways; and', 'ways and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the reading chosen is independent, so the conjunction joining '
                 'it to the clause about the two ways takes a comma.',
             trap='A runs the clause about the two readings straight into the clause about the '
                  'choice.'),
        dict(goal='explain what the argument actually produced',
             notes=['Redesigning the presentation works better than training people out of '
                    'errors.',
                    'The two camps converged on practice while disagreeing about theory.',
                    'Both men endorsed the frequency presentation of medical risk.',
                    'The convergence arrived without either side conceding the point at issue.'],
             stem='The student wants to explain what the argument actually produced. Which choice '
                  'most effectively uses relevant information from the notes to accomplish that '
                  'goal?',
             opts=['Redesigning the presentation beats training people out of errors',
                   'Both men endorsed the frequency presentation of medical risk',
                   'The two camps converged on practice while disagreeing on theory',
                   'A shared way of presenting risk, reached with the theory still unsettled'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'restatement'},
             why='Only this choice names the product the notes point to, a common practice '
                 'arrived at without a theoretical concession.',
             trap='B names the agreement of two people without what it amounted to.'),
    ]))

if __name__ == '__main__':
    qemit.emit(FIELD, LEVEL, SETS)
