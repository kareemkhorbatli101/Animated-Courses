"""Social Science, Level 1: ten question sets."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

Q = '«%s»'.__mod__
FIELD, LEVEL = 'SOC', 1

SETS = []

# --- 1 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='SOC-S01-L1',
    ar=dict(
        khulasa='سنة ألف وتسعمئة وأربعين أجرى باحث أمريكي يُسمّى دونالد رَغ اختبارًا بسيطًا على '
                'صياغة الأسئلة. كان بيده صيغتان لسؤال واحد عن حرّية الكلام: إحداهما تسأل هل '
                'تمنع الولايات المتّحدة الخطب العامّة ضدّ الديمقراطية، والأخرى هل تسمح بها.',
        maana='المعنى أنّ الصيغتين سؤال واحد منطقًا، فمن أراد منع شيء لم يُرد السماح به. وذهبت '
              'الصيغتان إلى مجموعتين متماثلتين في المسح نفسه، فلم تتوافق الأجوبة: نحو أربع '
              'وخمسين في المئة قالوا نعم للمنع، ونحو خمس وسبعين قالوا لا للسماح.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الظاهرة: الرقمان يصفان جمهورين '
                  'مختلفين، والفجوة نحو عشرين نقطة، وقد أُعيدت الدراسة مرّات كثيرة في بلدان '
                  'عدّة بالنتيجة نفسها. فالناس أقدر على رفض الإذن من فرض الحظر ولو تساوى الأثر '
                  'العمليّ.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُستنتج أنّ المسوح عديمة النفع، مع أنّ '
             'النصّ ينفي ذلك صريحًا. ويقترن المقطع بالمقطع الحادي والتسعين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Rugg ran his test on free speech in 1940',
                   'A survey figure is a figure about one form of words',
                   'Surveys are useless because wording changes answers',
                   'The two versions of the question produced the same answers'],
             key='B', moves={'A': 'underreach', 'C': 'overreach', 'D': 'wrong_direction'},
             why='The text reports the twenty-point gap, lists a family of similar effects, and '
                 'says a number from a survey is a number about a particular form of words.',
             trap='C pushes the finding past the sentence that denies surveys are useless.'),
        dict(stem='According to the text, what did about fifty-four percent say?',
             opts=['That they would not allow the speeches',
                   'That they had no opinion either way',
                   'That the two questions were the same',
                   'That the speeches should be forbidden'],
             key='D', moves={'A': 'detail_swap', 'B': 'imported', 'C': 'imported'},
             why='The text says about fifty-four percent said yes to forbidding and about '
                 'seventy-five percent said no to allowing.',
             trap='A gives the answer that drew the larger share of the other group.'),
        dict(claim='the effect is not a one-off result',
             stem='Which quotation from the text most strongly supports the claim that the effect '
                  'is not a one-off result?',
             opts=[Q('The study has been repeated many times since, in several countries, with '
                     'the same result'),
                   Q('The two versions went to two matched groups of people in the same survey'),
                   Q('Logically these are the same question. A person who wants to forbid '
                     'something does not want to allow it'),
                   Q('Good polling organizations publish the exact wording alongside the figure '
                     'for this reason')],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation says the study has been repeated many times in several countries '
                 'and reached the same result each time.',
             trap='B names the care taken in one study rather than its repetition elsewhere.'),
        dict(carrier='A reader who is given a percentage without the question is not being given '
                     'much. A report that prints a figure and omits the wording therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['rules out any order effect', 'describes two publics at once',
                   'withholds what the figure is about', 'proves the survey was badly run'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'overreach'},
             why='The text says a number from a survey is a number about a particular form of '
                 'words, so the wording is what the figure is a figure about.',
             trap='D convicts the survey when the text faults only the reporting.'),
        dict(target='influences',
             stem='As used in the text, what does the word %s most nearly mean?'
                  % Q('influences'),
             opts=['has authority over', 'helps to determine', 'leaves unchanged',
                   'persuades by charm'],
             key='B', moves={'A': 'near_miss', 'C': 'wrong_direction', 'D': 'imported'},
             why='The wording is said to influence the result as much as the subject does, so the '
                 'word names a share in producing the figure.',
             trap='C reverses the sentence, which makes the wording a cause of the result.'),
        dict(stem='Which choice best describes the function of the sentence saying the answers '
                  'failed to match?',
             opts=['It marks the result against the expectation just stated',
                   'It defines what a respondent is for a reader',
                   'It reports the year the test was run',
                   'It concludes that surveys cannot be used'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'overreach'},
             why='The sentence follows the statement that the two versions are logically the same '
                 'question and precedes the two percentages that differ by twenty points.',
             trap='D discards an instrument the text goes on to defend.'),
        dict(sibling='SOC-S01-L2',
             sibling_gloss='Text 2 is passage 91 of this book. It separates three ways a survey '
                           'can fail, the sampling frame, nonresponse and the instrument, and '
                           'says the instrument includes the wording effects from the earlier '
                           'passage along with order effects.',
             stem='Text 1 reports an effect of question wording. Based on Text 2, which choice '
                  'best describes where such an effect belongs?',
             opts=['In the sampling frame the names are drawn from',
                   'In the failure of selected people to answer',
                   'In the weighting applied to the answers',
                   'In the instrument that puts the questions'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'near_miss'},
             why='Text 2 names the instrument as the third kind of failure and says it includes '
                 'the wording effects from the earlier passage along with order effects.',
             trap='A names a different one of the three failures Text 2 sets out.'),
        dict(carrier='Logically these are the same question. ___ a person who wants to forbid '
                     'something does not want to allow it.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'As a result,', 'After all,', 'In any case,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'near_miss'},
             why='The second sentence gives the reason the two versions count as the same '
                 'question, so the transition must mark a ground.',
             trap='B makes the reason follow from the claim it supports.'),
        dict(carrier='The order of the items changes answers ___ and offering a middle option '
                     'pulls about a fifth of respondents out of the two sides.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['answers, and', 'answers and', 'answers; and', 'answers and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the middle option is independent, so the conjunction joining '
                 'it to the clause about the order of the items takes a comma.',
             trap='B runs the clause about the order straight into the clause about the middle '
                  'option.'),
        dict(goal='explain what a reader needs besides the percentage',
             notes=['About fifty-four percent would forbid and about seventy-five percent would '
                    'refuse to allow.',
                    'The two figures describe different publics.',
                    'A number from a survey is a number about a particular form of words.',
                    'Good polling organizations publish the exact wording.'],
             stem='The student wants to explain what a reader needs besides the percentage. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['About fifty-four percent would forbid the speeches',
                   'The two figures describe different publics entirely',
                   'The exact wording, since the figure is a figure about those words',
                   'Good polling organizations publish the exact wording'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'restatement'},
             why='Only this choice names the wording and gives the reason the notes supply, that '
                 'the number is about the words used.',
             trap='D reports the practice without saying what makes it necessary.'),
    ]))

# --- 2 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='SOC-S02-L1',
    ar=dict(
        khulasa='أجرت ولاية تينيسي تجربة غير معتادة في مدارسها بين سنة ألف وتسعمئة وخمس وثمانين '
                'وسنة تسع وثمانين، تُعرف باسم مشروع ستار. أرادت الولاية أن تعلم هل تنفع الصفوف '
                'الصغيرة الأطفال الصغار.',
        maana='المعنى أنّ دراسات سابقة قارنت مدارس صادف أنّ فيها صفوفًا صغيرة بمدارس ليس فيها، '
              'وتلك المقارنات صعبة التصديق: فالصفوف الصغيرة شائعة في المناطق الغنيّة وفي '
              'المدارس ذات الغرف الفاضلة، وأيّ فرق قد يأتي من الثراء أو البناء لا من حجم '
              'الصفّ.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الظاهرة: فوزّعت الولاية الأطفال '
                  'بالقرعة، ودخل الدراسة نحو أحد عشر ألفًا وستّمئة تلميذ في تسع وسبعين مدرسة، '
                  'فوُضعوا عشوائيًّا في صفّ صغير من ثلاثة عشر إلى سبعة عشر أو في صفّ عاديّ من '
                  'اثنين وعشرين إلى خمسة وعشرين.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن التفصيل المذكور في النصّ وعن '
             'النصّين المتقابلين. والفخّ المتوقّع هنا أن تُحسب المقارنات السابقة موثوقة، مع '
             'أنّ النصّ يقول إنّها صعبة التصديق. ويقترن المقطع بالمقطع الثاني والتسعين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Tennessee published the data for later reanalysis',
                   'Small classes cost a great deal to provide',
                   'Assigning by lot made a fair comparison possible',
                   'Earlier comparisons of schools were trustworthy'],
             key='C', moves={'A': 'true_not_asked', 'B': 'underreach', 'D': 'wrong_direction'},
             why='The text says earlier comparisons were hard to trust, describes the assignment '
                 'by lot, and ends by saying what the lot made possible was a fair comparison.',
             trap='D trusts the comparisons the text says were hard to trust.'),
        dict(stem='According to the text, how large was a small class in the study?',
             opts=['Thirteen to seventeen children', 'Twenty-two to twenty-five children',
                   'About seventy-nine children', 'Four to eleven children'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says children were put at random into a small class of thirteen to '
                 'seventeen or into a regular class of twenty-two to twenty-five.',
             trap='B gives the size of a regular class instead.'),
        dict(claim='the gain did not depend on staying in a small class',
             stem='Which quotation from the text most strongly supports the claim that the gain '
                  'did not depend on staying in a small class?',
             opts=[Q('About eleven thousand six hundred pupils in seventy-nine schools entered '
                     'the study in kindergarten'),
                   Q('The effect did not vanish when the children returned to ordinary classes, '
                     'and some of it could still be found years later in high school test '
                     'taking'),
                   Q('The gap was clearest in the first two years and in reading, and it was '
                     'larger for children from poorer families'),
                   Q('Within each school, children were put at random into a small class of '
                     'thirteen to seventeen')],
             key='B', moves={'A': 'true_not_asked', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation says the effect survived the return to ordinary classes and could '
                 'still be found years later in high school test taking.',
             trap='C names where the gap was largest rather than how long it lasted.'),
        dict(carrier='Small classes are common in rich districts and in schools with spare rooms. '
                     'Any difference in results might come from the wealth or the building rather '
                     'than the class size. A comparison of schools that happened to differ would '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['balance the two groups at the start',
                   'require teachers assigned by lot',
                   'show a larger gain for poorer children',
                   'leave the cause of the gap unsettled'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'imported'},
             why='The wealth and the building could produce the difference, so a comparison that '
                 'did not control them cannot say which factor acted.',
             trap='A credits an unbalanced comparison with the property only the lot supplies.'),
        dict(target='compared',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('compared'),
             opts=['likened for rhetorical effect', 'ranked above one another',
                   'set side by side to find a difference', 'brought into agreement'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'imported'},
             why='Earlier studies are said to have compared schools with small classes against '
                 'schools without them, so the word names placing two sets beside each other.',
             trap='B adds a ranking the comparison does not make.'),
        dict(stem='Which choice best describes the function of the sentence about rich districts '
                  'and spare rooms?',
             opts=['It defines a randomized trial for a reader',
                   'It explains why the earlier studies were doubted',
                   'It reports the years the experiment ran',
                   'It argues that wealth improves reading'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The sentence follows the statement that earlier comparisons were hard to trust '
                 'and names the wealth and the buildings that could have produced the '
                 'difference.',
             trap='D turns a possible confusion into a finding about wealth.'),
        dict(sibling='SOC-S02-L2',
             sibling_gloss='Text 2 is passage 92 of this book. It contrasts matching with a '
                           'lottery, names the confounder as a difference between groups that '
                           'affects the outcome, and says the fatal property of confounders is '
                           'that the dangerous ones are the ones nobody thought of.',
             stem='Text 1 says the lot made a fair comparison possible. Based on Text 2, which '
                  'choice best explains why matching would have failed?',
             opts=['The dangerous differences are the ones nobody listed',
                   'Groups will differ a little by luck in any trial',
                   'A result may fail to transfer to another decade',
                   'People dropping out unevenly spoils a design'],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='Text 2 says the fatal property of confounders is that the dangerous ones are '
                 'the ones nobody thought of, which matching cannot equalize.',
             trap='B names the known uncertainty randomization carries rather than the failure of '
                  'matching.'),
        dict(carrier='Any difference in results might come from the wealth or the building rather '
                     'than the class size. ___ the state assigned children by lot.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'For example,', 'In other words,', 'For that reason,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'restatement'},
             why='The second sentence gives what the state did because the earlier comparisons '
                 'could not separate the causes, so the transition must mark a consequence.',
             trap='A sets the assignment against the problem that prompted it.'),
        dict(carrier='The small classes did better ___ and the gap was clearest in the first two '
                     'years.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['better and', 'better, and', 'better; and', 'better and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the clearest gap is independent, so the conjunction joining it '
                 'to the clause about the small classes takes a comma.',
             trap='A runs the clause about the classes straight into the clause about the gap.'),
        dict(goal='explain why the policy argument continued after the result',
             notes=['The small classes did better, especially for poorer children.',
                    'Small classes need more teachers and more rooms.',
                    'The experiment cost a great deal.',
                    'The cost is the reason the argument continued.'],
             stem='The student wants to explain why the policy argument continued after the '
                  'result. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['The small classes did better, especially for poorer children',
                   'Small classes need more teachers and more rooms',
                   'The cost is the reason the argument continued after the result',
                   'A finding that works can still be argued over once its price is counted'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'restatement'},
             why='Only this choice joins the established effect to the expense that kept the '
                 'decision open, which is what the notes together support.',
             trap='B names the cost without saying what it did to the argument.'),
    ]))

# --- 3 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='SOC-S03-L1',
    ar=dict(
        khulasa='سنة ألفين واثنتي عشرة نشر طبيب سويسري يُسمّى فرانتس ميسرلي ورقة قصيرة في '
                'مجلّة طبّية معروفة. كان قد رسم رقمين لثلاث وعشرين دولة: على محور كمّية '
                'الشوكولاتة المأكولة للفرد في السنة، وعلى الآخر عدد جوائز نوبل لكلّ مليون '
                'نسمة.',
        maana='المعنى أنّ النقاط اصطفّت اصطفافًا لافتًا: سويسرا في القمّة على المقياسين، والصين '
              'قريبة من الأسفل عليهما. والعلاقة قويّة بما يسمّيه الإحصائيّ مطابقة محكمة، '
              'وميسرلي كان يمزح مزحة ذات مغزى جدّيّ وقال ذلك في الورقة.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الظاهرة: لا أحد يظنّ أنّ أكل '
                  'الشوكولاتة يُنتج علماء، وثمّ تفاسير أخرى حاضرة: فالبلدان الغنيّة تأكل '
                  'شوكولاتة أكثر وتموّل مختبرات أكثر، فقد يُنتج الثراء الوطنيّ الرقمين دون أن '
                  'يمسّ أحدهما الآخر.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن تُقرأ العلاقة سببًا، مع أنّ النصّ يعدّ '
             'أربع علاقات ممكنة. ويقترن المقطع بالمقطع الثالث والتسعين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Switzerland sat at the top on both measures',
                   'The paper is now used in teaching',
                   'Eating chocolate helps produce scientists',
                   'A real and strong pattern can still guide nothing'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'wrong_direction'},
             why='The text calls the case a clean example of a pattern that is real, strong, '
                 'measurable and useless as a guide to action, and then lists the four relations '
                 'two figures may stand in.',
             trap='C accepts a causal story the text says nobody believes.'),
        dict(stem='According to the text, how many countries did the paper cover?',
             opts=['Two of them', 'Twenty-three', 'Two million', 'A dozen'],
             key='B', moves={'A': 'imported', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says the physician had plotted two figures for twenty-three '
                 'countries.',
             trap='C gives a population figure used elsewhere in the text.'),
        dict(claim='national wealth could produce both figures',
             stem='Which quotation from the text most strongly supports the claim that national '
                  'wealth could produce both figures?',
             opts=[Q('The points lined up remarkably well. Switzerland sat at the top on both '
                     'measures'),
                   Q('Prizes are awarded to people who did their work decades earlier, often in '
                     'a different country'),
                   Q('Rich countries eat more chocolate and also fund more laboratories, so '
                     'national wealth could produce both figures without either touching the '
                     'other'),
                   Q('A country of two million people needs only one laureate, meaning one '
                     'person awarded the prize, to lead the table')],
             key='C', moves={'A': 'true_not_asked', 'B': 'near_miss', 'D': 'near_miss'},
             why='The quotation names the wealth that raises both the chocolate and the '
                 'laboratories and says it could produce both figures without either touching '
                 'the other.',
             trap='B names a different weakness, the crudeness of the measure.'),
        dict(carrier='Two figures can rise together because one causes the other, because the '
                     'second causes the first, because a third thing causes both, or because a '
                     'small sample has fallen out that way. A reader who settles on the first '
                     'without asking is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['wrong most of the time', 'reading a tight fit correctly',
                   'studying twenty-three countries', 'making the joke the author made'],
             key='A', moves={'B': 'wrong_direction', 'C': 'near_miss', 'D': 'imported'},
             why='The text says a reader who fails to ask which of the four is in play will '
                 'assume the first and will be wrong most of the time.',
             trap='B calls a mistaken reading a correct one.'),
        dict(target='assume',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('assume'),
             opts=['take on a duty', 'pretend to have', 'prove by testing',
                   'take for granted'],
             key='D', moves={'A': 'imported', 'B': 'imported', 'C': 'wrong_direction'},
             why='The reader in that sentence is said to assume the first of the four relations '
                 'without asking, so the word names accepting it untested.',
             trap='C makes the reader test what the sentence says goes unexamined.'),
        dict(stem='Which choice best describes the function of the sentence about a country of '
                  'two million?',
             opts=['It defines a laureate for the first time',
                   'It reports the year the paper appeared',
                   'It shows how crude the second measure is',
                   'It argues that small countries win more prizes'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'overreach'},
             why='The sentence follows the statement that the measures are crude and shows that '
                 'one prize can put a small population at the head of the table.',
             trap='D turns an arithmetic point into a claim about which countries win.'),
        dict(sibling='SOC-S03-L2',
             sibling_gloss='Text 2 is passage 93 of this book. It sets out four relations two '
                           'correlated measurements may stand in, and names the common cause as '
                           'its third possibility, saying it is what the chocolate and Nobel case '
                           'shows.',
             stem='Text 1 calls national wealth a possible source of both figures. Based on Text '
                  '2, which choice best names that relation?',
             opts=['Reverse causation', 'A common cause', 'A selection effect',
                   'A dose response'],
             key='B', moves={'A': 'near_miss', 'C': 'near_miss', 'D': 'imported'},
             why='Text 2 names the common cause as its third possibility and says it is what the '
                 'chocolate and Nobel case shows.',
             trap='A names the relation in which the outcome produces the supposed cause.'),
        dict(carrier='Nobody thinks that eating chocolate produces scientists. ___ several other '
                     'explanations are available at once.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Besides,', 'By contrast,', 'As a result,', 'In other words,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'restatement'},
             why='The second sentence adds further reasons beyond the one just dismissed, so the '
                 'transition must mark an addition.',
             trap='C makes the other explanations follow from the dismissal.'),
        dict(carrier='Switzerland sat at the top on both measures ___ and China sat near the '
                     'bottom on both.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['measures and', 'measures; and', 'measures, and', 'measures and,'],
             key='C', moves={'A': 'run_on', 'B': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about China is independent, so the conjunction joining it to the '
                 'clause about Switzerland takes a comma.',
             trap='A runs the clause about Switzerland straight into the clause about China.'),
        dict(goal='explain what the habit of asking is for',
             notes=['Two figures can rise together for four different reasons.',
                    'A reader who fails to ask will assume the first.',
                    'That reader will be wrong most of the time.',
                    'The habit of asking is most of what a statistics course is for.'],
             stem='The student wants to explain what the habit of asking is for. Which choice '
                  'most effectively uses relevant information from the notes to accomplish that '
                  'goal?',
             opts=['Asking which of four reasons is in play is what keeps a reader from guessing '
                   'the first',
                   'Two figures can rise together for four different reasons',
                   'A reader who fails to ask will assume the first reason',
                   'The habit of asking is most of what a statistics course is for'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice joins the four possibilities to the default the asking is '
                 'meant to prevent.',
             trap='C names the default without saying what displaces it.'),
    ]))

# --- 4 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='SOC-S04-L1',
    ar=dict(
        khulasa='تسع أُسَر في شارع دخل كلّ واحدة أربعون ألف دولار في السنة، والأسرة العاشرة '
                'دخلها أربعة ملايين. فمتوسّط الدخل في الشارع أربعمئة وأربعة آلاف دولار، وهو '
                'رقم صحيح لا يصف أحدًا: تسع من عشرة بعيدة عنه، والعاشرة عشرة أمثاله.',
        maana='المعنى أنّ الأسرة الوسطى، وهي الوسيط أي القيمة الوسطى حين تُرتَّب الحالات، تكسب '
              'أربعين ألفًا كجيرانها الثمانية. والأرقام الوطنية الحقيقية تسلك السلوك نفسه '
              'للسبب نفسه: فمتوسّط دخل الأسرة في الولايات المتّحدة يزيد على الوسيط بنحو '
              'الثلث.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الظاهرة: كلّ مقياس يجمع ويقسم '
                  'حسّاس لأكبر القيم في المجموعة، وكلّ مقياس يعدّ المواضع ليس كذلك. فاختيار '
                  'الكاتب للرقم هو الذي يقرّر ما تقوله الجملة، وقد يصف تقريرٌ عقدًا خسرت فيه '
                  'كلّ أسرة تقريبًا عقدَ دخولٍ صاعدة.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن التفصيل المذكور في النصّ وعن '
             'النصّين المتقابلين. والفخّ المتوقّع هنا أن يُحسب أحد التقريرين كاذبًا، مع أنّ '
             'النصّ يقول إنّ أيًّا منهما لا يكذب. ويقترن المقطع بالمقطع الرابع والتسعين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The choice between mean and median decides the sentence',
                   'The mean on the street is four hundred and four thousand',
                   'Government offices publish both figures routinely',
                   'A report using the mean is lying about incomes'],
             key='A', moves={'B': 'underreach', 'C': 'true_not_asked', 'D': 'overreach'},
             why='The text contrasts a mean that describes nobody with a median that does, and '
                 'says which figure a writer chooses therefore decides what the sentence says.',
             trap='D calls a report a lie where the text says neither report is lying.'),
        dict(stem='According to the text, how far above the median is the mean in the United '
                  'States?',
             opts=['About ten times', 'By about four hundred thousand',
                   'By something like a third', 'By about one percent'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'imported'},
             why='The text says mean household income in the United States runs well above the '
                 'median, by something like a third.',
             trap='A gives the ratio used of the one rich household on the street.'),
        dict(claim='one figure can report a decade the other denies',
             stem='Which quotation from the text most strongly supports the claim that one figure '
                  'can report a decade the other denies?',
             opts=[Q('That figure is correct and it describes nobody. Nine of the ten families '
                     'are nowhere near it'),
                   Q('Any measure that sums and divides is sensitive to the largest values in '
                     'the set'),
                   Q('Government statistical offices publish both as a matter of routine'),
                   Q('A report that uses the mean can describe a decade in which almost every '
                     'household lost ground as a decade of rising incomes')],
             key='D', moves={'A': 'near_miss', 'B': 'near_miss', 'C': 'true_not_asked'},
             why='The quotation shows the mean describing a decade of rising incomes while almost '
                 'every household lost ground.',
             trap='B states the property of the mean without showing the two reports diverging.'),
        dict(carrier='Any measure that sums and divides is sensitive to the largest values in the '
                     'set. Any measure that counts positions is not. A single enormous income '
                     'added to a street would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['move the median and leave the mean alone',
                   'move the mean and leave the median alone',
                   'change both figures by the same amount',
                   'reduce the spread of the distribution'],
             key='B', moves={'A': 'wrong_direction', 'C': 'wrong_direction', 'D': 'imported'},
             why='The mean sums and divides and so responds to the largest values, while the '
                 'median counts positions and does not.',
             trap='A swaps the two measures the text has just distinguished.'),
        dict(target='trend',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('trend'),
             opts=['direction of change over time', 'a brief fashion', 'a single measurement',
                   'a line on a chart'],
             key='A', moves={'B': 'imported', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The sentence contrasts two reports that show opposite trends from the same data '
                 'over a decade, so the word names which way the figure moved.',
             trap='C makes the word name one reading rather than a movement.'),
        dict(stem='Which choice best describes the function of the sentence about the middle '
                  'household?',
             opts=['It reports the income of the tenth household',
                   'It argues that the mean is always wrong',
                   'It defines the spread of the distribution',
                   'It introduces the measure the mean missed'],
             key='D', moves={'A': 'detail_swap', 'B': 'overreach', 'C': 'detail_swap'},
             why='The sentence follows the mean that describes nobody and names the median, which '
                 'lands on forty thousand like the eight neighbors.',
             trap='B condemns a figure the text calls correct.'),
        dict(sibling='SOC-S04-L2',
             sibling_gloss='Text 2 is passage 94 of this book. It adds the standard deviation and '
                           'the skew to the mean and the median, and says the practical rule is '
                           'to ask for the shape rather than the summary, with a mean and a '
                           'standard deviation as the usual pairing.',
             stem='Text 1 recommends giving both the mean and the median. Based on Text 2, which '
                  'choice best describes what should accompany them?',
             opts=['A second country for comparison',
                   'The number of households on the street',
                   'A measure of the spread, or better a shape',
                   'The year the figures were collected'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'imported'},
             why='Text 2 says the practical rule is to ask for the shape rather than the summary, '
                 'and that a mean with a standard deviation is the usual pairing.',
             trap='B adds a count that neither text treats as the missing piece.'),
        dict(carrier='That figure is correct and it describes nobody. ___ nine of the ten '
                     'families are nowhere near it.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Indeed,', 'As a result,', 'For example,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The second sentence drives home the claim that the figure describes nobody, so '
                 'the transition must mark a confirmation.',
             trap='C makes the families follow from the figure being correct.'),
        dict(carrier='Nine households on a street each have an income of forty thousand dollars a '
                     'year ___ and the tenth household has an income of four million.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['year and', 'year; and', 'year and,', 'year, and'],
             key='D', moves={'A': 'run_on', 'B': 'wrong_mark', 'C': 'misplaced'},
             why='The clause about the tenth household is independent, so the conjunction joining '
                 'it to the clause about the nine takes a comma.',
             trap='A runs the clause about the nine households straight into the clause about the '
                  'tenth.'),
        dict(goal='explain what a reader should ask when only one figure is given',
             notes=['A measure that sums and divides is sensitive to the largest values.',
                    'A measure that counts positions ignores them.',
                    'The responsible practice is to give both.',
                    'The useful questions are which one and why that one was chosen.'],
             stem='The student wants to explain what a reader should ask when only one figure is '
                  'given. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['The responsible practice is to give both of the figures',
                   'Ask which measure it is and why that one was chosen, since the two respond '
                   'to large values differently',
                   'A measure that counts positions ignores the largest values',
                   'The useful question is which one of the two it is'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice puts both questions the notes name and supplies the reason '
                 'they matter, which is the different response to large values.',
             trap='D asks the first question without the second or the reason behind it.'),
    ]))

# --- 5 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='SOC-S05-L1',
    ar=dict(
        khulasa='بدأت سان فرانسيسكو تجربة في عدّادات الركن سنة ألفين وإحدى عشرة. لم تكن المشكلة '
                'قلّة الأماكن بل أنّ السائقين كانوا يدورون باحثين عن مكان، فتملأ الشوارع بمرور '
                'بطيء، وقد وجدت دراسات أنّ حصّة معتبرة من المرور في وسط المدينة سيّارات تطارد '
                'مكانًا.',
        maana='المعنى أنّ المدينة قرّرت أن تهاجم المطاردة لا أن تبني مزيدًا من المواقف، '
              'والوسيلة السعر. فزُوّدت العدّادات في الأحياء المختبَرة بمَجَسّات تُبلّغ أمشغول '
              'المكان أم لا، ثمّ عُدّلت الأسعار مَربَعًا مَربَعًا وساعةً ساعة بهدف ترك مكان '
              'واحد خاليًا في كلّ مَربَع.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الظاهرة: حيث كان المَربَع '
                  'مملوءًا دائمًا رُفع السعر خمسًا وعشرين سنتًا في المراجعة التالية، وحيث كان '
                  'خاليًا كثيرًا نزل. وأبلغت المدينة أنّ زمن البحث عن مكان هبط نحو أربعين في '
                  'المئة، وأنّ متوسّط الأسعار نزل.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن التفصيل المذكور في النصّ وعن '
             'النصّين المتقابلين. والفخّ المتوقّع هنا أن تُحسب الخطّة جمعًا للإيراد، مع أنّ '
             'متوسّط الأسعار نزل. ويقترن المقطع بالمقطع الخامس والتسعين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Rates ranged from twenty-five cents to six dollars',
                   'A moving price cut the hunting that filled the streets',
                   'The city built more parking to end the circling',
                   'Los Angeles and Seattle now run similar schemes'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'true_not_asked'},
             why='The text says the problem was the hunting rather than a shortage, describes the '
                 'block-by-block pricing, and reports that search time fell by about forty '
                 'percent.',
             trap='C builds the parking the city decided against.'),
        dict(stem='According to the text, by how much did search time fall?',
             opts=['By twenty-five cents an hour', 'By about one space a block',
                   'By about six dollars an hour', 'By about forty percent'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'imported'},
             why='The text says the city reported that the time spent searching for a space '
                 'dropped by about forty percent in the test areas.',
             trap='A gives the size of a price step rather than the fall in search time.'),
        dict(claim='the scheme was not a way of raising money',
             stem='Which quotation from the text most strongly supports the claim that the scheme '
                  'was not a way of raising money?',
             opts=[Q('Average rates in those areas went down, which surprised people who had '
                     'expected a revenue grab'),
                   Q('Meters in the test districts were fitted with sensors'),
                   Q('Rates were then adjusted block by block and hour by hour, with a target of '
                     'leaving about one space free on every block'),
                   Q('The main obstacle everywhere has been political rather than technical')],
             key='A', moves={'B': 'true_not_asked', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation reports that average rates fell in the test areas and that this '
                 'surprised people who had expected a revenue grab.',
             trap='C describes the method of adjustment rather than its effect on revenue.'),
        dict(carrier='A campaign asking drivers to circle less would have cost less and done '
                     'nothing. The city therefore chose a measure that ___',
             stem='Which choice most logically completes the text?',
             opts=['reduced the number of spaces', 'relied on the goodwill of drivers',
                   'acted on something a driver notices', 'raised revenue on every block'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'imported'},
             why='The text says the policy works by paying attention to the one thing a driver '
                 'cannot ignore, which a campaign of requests does not touch.',
             trap='B returns to the appeal the sentence says would have done nothing.'),
        dict(target='reward',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('reward'),
             opts=['pay a bounty to', 'give an advantage to', 'punish for delay',
                   'praise in public'],
             key='B', moves={'A': 'near_miss', 'C': 'wrong_direction', 'D': 'imported'},
             why='The price is said to reward whoever is willing to walk two blocks, so the word '
                 'names the benefit a cheaper block gives that driver.',
             trap='A narrows the benefit to a cash payment the scheme does not make.'),
        dict(stem='Which choice best describes the function of the sentence that locates the '
                  'problem in the circling?',
             opts=['It redirects the account from supply to behavior',
                   'It defines what the sensors reported',
                   'It reports the year the experiment began',
                   'It concludes that the scheme failed'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence puts the trouble in the drivers circling rather than in the number '
                 'of spaces, which is what the pricing then addresses.',
             trap='D fails a scheme the text reports as working.'),
        dict(sibling='SOC-S05-L2',
             sibling_gloss='Text 2 is passage 95 of this book. It says an incentive works through '
                           'salience, the availability of a substitute and timing, and calls a '
                           'parking charge paid at a meter before walking away the salient case.',
             stem='Text 1 describes a parking charge that changed behavior. Based on Text 2, '
                  'which choice best explains why it worked?',
             opts=['The sum charged was large enough to deter',
                   'Nobody can substitute for the journey to work',
                   'A cost arriving in three months changes little',
                   'The cost is noticed at the moment of choosing'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'near_miss'},
             why='Text 2 calls a parking charge paid at a meter before walking away salient and '
                 'says salience is the first of the three properties.',
             trap='A rests the effect on the size of the sum, which Text 2 calls the least '
                  'important.'),
        dict(carrier='Where a block was always full, the price went up by twenty-five cents an '
                     'hour at the next review. ___ where a block was often empty, the price came '
                     'down.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['As a result,', 'In other words,', 'By contrast,', 'For example,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'restatement', 'D': 'near_miss'},
             why='The second sentence gives the opposite case with the opposite adjustment, so '
                 'the transition must mark a contrast.',
             trap='A makes the fall in price follow from the rise.'),
        dict(carrier='The method was price ___ and meters in the test districts were fitted with '
                     'sensors.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['price, and', 'price and', 'price; and', 'price and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the meters fitted with sensors is independent, so the '
                 'conjunction joining it to the clause about the method takes a comma.',
             trap='B runs the clause about the method straight into the clause about the '
                  'meters.'),
        dict(goal='explain why a price did what a request could not',
             notes=['Drivers circled looking for a space, which filled the streets.',
                    'Rates were adjusted block by block toward one free space.',
                    'Search time fell by about forty percent.',
                    'A campaign asking drivers to circle less would have done nothing.'],
             stem='The student wants to explain why a price did what a request could not. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['Drivers circled looking for a space, which filled the streets',
                   'A campaign asking drivers to circle less would have done nothing',
                   'A price tuned block by block cut the searching by about forty percent',
                   'Rates were adjusted toward one free space on every block'],
             key='C', moves={'A': 'underreach', 'B': 'restatement', 'D': 'underreach'},
             why='Only this choice joins the method to the measured fall in searching, which is '
                 'what the request could not deliver.',
             trap='B names the failed alternative without the result the price achieved.'),
    ]))

# --- 6 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='SOC-S06-L1',
    ar=dict(
        khulasa='تضع الفنادق بطاقات في الحمّامات تطلب من الضيوف استعمال مناشفهم أكثر من مرّة. '
                'وسنة ألفين وثمانٍ اختبر ثلاثة باحثين، على رأسهم نوا غولدستين، ما ينبغي أن '
                'تقوله تلك البطاقات، فأجروا الاختبار في فندق حقيقيّ عبر مئات الغرف وعلى شهور.',
        maana='المعنى أنّ عاملي الخدمة سجّلوا هل عُلّقت المناشف لإعادة الاستعمال، ولم يعلم '
              'الضيوف أنّ شيئًا يُقاس، وبذلك كانت الدراسة تجربة ميدانية، أي تجربة تُجرى في موضع '
              'حقيقيّ لا في مختبر. وكانت صيغة تطلب المساعدة في إنقاذ البيئة.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الظاهرة: صيغة أخرى أوردت واقعة '
                  'بسيطة عن الضيوف الآخرين: أنّ أكثر النازلين يعيدون استعمال مناشفهم، وثالثة '
                  'سمّت الغرفة نفسها. فارتفعت الإعادة نحو الرُّبع بالثانية مقارنةً بالأولى، '
                  'والتي سمّت الغرفة كانت أفضل.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُنسب النجاح إلى النداء البيئيّ، مع أنّه '
             'كان الأضعف. ويقترن المقطع بالمقطع السادس والتسعين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The hotel saved laundry costs by joining the study',
                   'Three versions of a card were printed for the rooms',
                   'A report of what others do beats an appeal to a value',
                   'The environmental appeal worked best of the three'],
             key='C', moves={'A': 'true_not_asked', 'B': 'underreach', 'D': 'wrong_direction'},
             why='The text reports that reuse rose by roughly a quarter with the card naming what '
                 'other guests do, and says such a statement is a stronger lever than an appeal '
                 'to a value.',
             trap='D awards the result to the card the study found weakest.'),
        dict(stem='According to the text, which card did best of the three?',
             opts=['The one naming the room itself', 'The usual environmental appeal',
                   'The one reporting hotel guests generally',
                   'The one printed on thicker card'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says reuse rose by roughly a quarter with the second card and that the '
                 'version naming the room did better still.',
             trap='C names the card that was beaten by the one naming the room.'),
        dict(claim='the guests were not reacting to being studied',
             stem='Which quotation from the text most strongly supports the claim that the guests '
                  'were not reacting to being studied?',
             opts=[Q('Housekeeping staff recorded whether the towels in each room had been hung '
                     'up for reuse'),
                   Q('The guests did not know that anything was being measured'),
                   Q('The cards were otherwise identical and were assigned to rooms at random'),
                   Q('The hotel saved laundry costs, which is why it agreed to the study')],
             key='B', moves={'A': 'near_miss', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation says the guests did not know that anything was being measured, '
                 'which rules out a reaction to the study itself.',
             trap='C names the safeguard against a difference between cards rather than against '
                  'awareness.'),
        dict(carrier='Nobody in the hotel was arguing about the environment. They were deciding, '
                     'in about four seconds, what a normal guest does with a towel. A card that '
                     'argued at length would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['be read more carefully than a short one',
                   'report what other guests had done',
                   'have cost the hotel less to print',
                   'miss the moment the decision is made'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'imported'},
             why='The decision is said to take about four seconds and to be about what a normal '
                 'guest does, so an argument arrives too late to bear on it.',
             trap='A assumes an attention the four seconds rules out.'),
        dict(target='behave',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('behave'),
             opts=['show good manners', 'obey an instruction', 'act in a situation',
                   'manage a household'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'imported'},
             why='People are said to behave partly by reading the room, so the word names what '
                 'they do in the situation rather than any standard of conduct.',
             trap='A takes the sense used of a child told to be good.'),
        dict(stem='Which choice best describes the function of the sentence saying the finding is '
                  'modest and useful?',
             opts=['It defines a field experiment for a reader',
                   'It sets the size of the claim before stating it',
                   'It reports the year the study was published',
                   'It denies that the cards changed behavior'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence comes just before the comparison between a statement of what '
                 'others do and an appeal to a value, and limits what that comparison claims.',
             trap='D denies an effect the next sentences report.'),
        dict(sibling='SOC-S06-L2',
             sibling_gloss='Text 2 is passage 96 of this book. It sets out the four parts of the '
                           'machinery that enforces an unwritten rule and says a card reporting '
                           'the descriptive norm supplies information that machinery needs and '
                           'cannot otherwise get.',
             stem='Text 1 reports that a card naming other guests raised reuse. Based on Text 2, '
                  'which choice best explains what the card supplied?',
             opts=['Information the enforcement machinery could not otherwise get',
                   'A sanction applied by other people rather than by law',
                   'A rule that governs private behavior only',
                   'A campaign advertising how widespread a problem is'],
             key='A', moves={'B': 'near_miss', 'C': 'wrong_direction', 'D': 'true_not_asked'},
             why='Text 2 says a card reporting the descriptive norm provides the information the '
                 'enforcement machinery needs and cannot otherwise get, since a guest cannot see '
                 'other rooms.',
             trap='B names one part of the machinery rather than what the card contributed.'),
        dict(carrier='The guests did not know that anything was being measured. ___ that is what '
                     'makes the study a field experiment.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'For example,', 'Even so,', 'For that reason,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'wrong_direction'},
             why='The second sentence names the consequence of the guests being unaware, so the '
                 'transition must mark a result.',
             trap='C sets the classification against the fact that produces it.'),
        dict(carrier='The cards were otherwise identical ___ and they were assigned to rooms at '
                     'random.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['identical and', 'identical, and', 'identical; and', 'identical and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the random assignment is independent, so the conjunction '
                 'joining it to the clause about the identical cards takes a comma.',
             trap='A runs the clause about the cards straight into the clause about the '
                  'assignment.'),
        dict(goal='explain why the better card cost the hotel nothing extra',
             notes=['The cards were otherwise identical.',
                    'A statement about what others do is a stronger lever than an appeal.',
                    'It costs the same to print.',
                    'Reuse rose by roughly a quarter.'],
             stem='The student wants to explain why the better card cost the hotel nothing extra. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['The three cards were otherwise identical in the rooms',
                   'A statement about what others do is the stronger lever',
                   'Reuse rose by roughly a quarter with the second card',
                   'The same sheet of card raised reuse a quarter once the sentence changed'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'true_not_asked'},
             why='Only this choice joins the identical printing cost to the gain the new wording '
                 'produced, which is the point the goal asks for.',
             trap='B names the stronger lever without saying what it cost.'),
    ]))

# --- 7 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='SOC-S07-L1',
    ar=dict(
        khulasa='قبل سنة ألف وثمانمئة وخمسين كان أكثر أهل بوسطن يسكنون على مسافة مشي من عملهم، '
                'والمدينة المبنيّة نحو ميلين عرضًا. فالكاتب الذي يجب أن يكون في بيت حساب عند '
                'الثامنة كان يمشي، ولا تكون المدينة أوسع من ساعة على القدمين.',
        maana='المعنى أنّ الأغنياء والفقراء سكنوا متقاربين، في الشارع نفسه غالبًا، لأنّ أحدًا لم '
              'يكن يستطيع أن يبذل الوقت ليسكن بعيدًا. ثمّ جاءت العربة العامّة والسكّة البخارية، '
              'ومن سنة تسع وثمانين الترام الكهربائي الذي يسع أربعين راكبًا ويسير نحو ثمانية '
              'أميال في الساعة.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الظاهرة: اشترى البنّاؤون حقولًا '
                  'على الخطوط الجديدة وأقاموا بيوتًا صفوفًا، فامتدّت بوسطن بين سنة سبعين وسنة '
                  'ألف وتسعمئة من مدينة ميلين إلى مدينة عشرة أميال. ومن انتقل حدّدته الأجرة: '
                  'خمسة سنتات في كلّ اتّجاه.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن النصّين '
             'المتقابلين. والفخّ المتوقّع هنا أن يُحال الفرز إلى الذوق وحده، مع أنّ النصّ يجعل '
             'ثمن السفر هو الحاكم. ويقترن المقطع بالمقطع السابع والتسعين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Boston spread from two miles to ten between 1870 and 1900',
                   'Twenty-three thousand houses went up in three suburbs',
                   'Taste alone decided who moved to the new districts',
                   'Cheaper travel widened the city and the fare sorted it'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'wrong_direction'},
             why='The text traces the widening of the city to the streetcar and then says who '
                 'moved out was decided by the fare, so the price of the travel decides who may '
                 'prefer space.',
             trap='C rests the sorting on taste, which the text says is not the whole of it.'),
        dict(stem='According to the text, how fast did the electric streetcar run?',
             opts=['About two miles an hour', 'About eight miles an hour',
                   'About forty miles an hour', 'About five miles an hour'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says a streetcar held forty people and ran at about eight miles an '
                 'hour.',
             trap='C turns the number of passengers into a speed.'),
        dict(claim='the fare settled who left the center',
             stem='Which quotation from the text most strongly supports the claim that the fare '
                  'settled who left the center?',
             opts=[Q('Builders bought fields along the new lines. They put up houses in rows'),
                   Q('Between 1870 and 1900 Boston spread from a two-mile city to a ten-mile '
                     'one'),
                   Q('That was real money for a laborer earning a dollar and a half a day. It '
                     'was nothing to a clerk earning three'),
                   Q('The same sorting happened later with the automobile, at a larger scale and '
                     'a higher price')],
             key='C', moves={'A': 'true_not_asked', 'B': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation sets the five-cent fare against a laborer and a clerk and shows '
                 'the same price being heavy for one and trivial for the other.',
             trap='B measures the spread of the city rather than who was able to join it.'),
        dict(carrier='A clerk who had to be at a counting house by eight walked there, and a city '
                     'therefore could not be much wider than an hour on foot. A city whose '
                     'workers could travel at eight miles an hour would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['reach several miles further out',
                   'keep rich and poor in the same street',
                   'need more counting houses downtown',
                   'hold its edge at two miles across'],
             key='A', moves={'B': 'wrong_direction', 'C': 'imported', 'D': 'wrong_direction'},
             why='The limit is given as an hour of travel, so raising the speed from walking to '
                 'eight miles an hour extends the edge of the city.',
             trap='D keeps the old edge after the constraint that fixed it has gone.'),
        dict(target='prefer',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('prefer'),
             opts=['put forward formally', 'promote to a higher rank',
                   'tolerate without complaint', 'choose over something else'],
             key='D', moves={'A': 'imported', 'B': 'imported', 'C': 'wrong_direction'},
             why='People are said to prefer space when they can buy the travel time, so the word '
                 'names a choice made between space and nearness.',
             trap='B takes the sense in which a candidate is preferred to an office.'),
        dict(stem='Which choice best describes the function of the sentence about the clerk and '
                  'the counting house?',
             opts=['It defines an omnibus for a reader',
                   'It reports the number of houses built',
                   'It fixes the limit the new transport removed',
                   'It argues that walking was preferred'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'imported'},
             why='The sentence puts the width of the old city at an hour on foot, which is the '
                 'constraint that the omnibus, the railway and the streetcar then loosened.',
             trap='D makes walking a choice when the sentence makes it a necessity.'),
        dict(sibling='SOC-S07-L2',
             sibling_gloss='Text 2 is passage 97 of this book. It describes bid rent as the amount '
                           'paid for land at a given distance from the center, says the slope of '
                           'its fall is set by the cost of travel, and that faster travel flattens '
                           'the slope and spreads the city.',
             stem='Text 1 reports a city that widened as travel improved. Based on Text 2, which '
                  'choice best describes the mechanism behind that widening?',
             opts=['Firms needing many workers cluster together',
                   'Faster travel flattens the fall of land prices',
                   'A new road fills once congestion eases',
                   'Generalized cost adds time and money together'],
             key='B', moves={'A': 'true_not_asked', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='Text 2 says bid rent falls as distance rises, that the slope is set by the cost '
                 'of travel, and that cheaper or faster travel flattens the slope and spreads the '
                 'city.',
             trap='D names the quantity planners calculate rather than the mechanism of the '
                  'spread.'),
        dict(carrier='Rich and poor lived close together, often in the same street. ___ nobody '
                     'could afford the time to live far out.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['After all,', 'By contrast,', 'In other words,', 'For example,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The second sentence gives the reason the two lived close together, so the '
                 'transition must mark a ground.',
             trap='B sets the reason against the arrangement it explains.'),
        dict(carrier='Builders bought fields along the new lines ___ and they put up houses in '
                     'rows.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['lines and', 'lines; and', 'lines, and', 'lines and,'],
             key='C', moves={'A': 'run_on', 'B': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the houses in rows is independent, so the conjunction joining '
                 'it to the clause about the fields takes a comma.',
             trap='A runs the clause about the fields straight into the clause about the '
                  'houses.'),
        dict(goal='explain why the new districts sorted by income',
             notes=['A streetcar ride cost five cents each way.',
                    'That was real money for a laborer earning a dollar and a half a day.',
                    'It was nothing to a clerk earning three.',
                    'Those who could pay moved out and those who could not stayed in the '
                    'center.'],
             stem='The student wants to explain why the new districts sorted by income. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['A fare that was heavy for one wage and trivial for another decided who could '
                   'move',
                   'A streetcar ride cost five cents each way on the new lines',
                   'The fare was nothing to a clerk earning three dollars a day',
                   'Those who could pay the fare moved out of the center'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice puts the one fare against the two wages and draws the sorting '
                 'from the difference.',
             trap='C names one of the two wages without the comparison that produced the '
                  'pattern.'),
    ]))

# --- 8 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='SOC-S08-L1',
    ar=dict(
        khulasa='في أحواض لندن في ثمانينيّات القرن التاسع عشر كان الرجال يُستأجرون مرّتين في '
                'اليوم: يأتي رئيس عمل إلى بوّابة نحو السابعة والنصف، ثمّ بعد الظهر، فيختار من '
                'الحشد المجتمع، والحشد أكبر دائمًا من عدد الأعمال.',
        maana='المعنى أنّ العمل يدوم أربع ساعات ويُدفع بالساعة، ومن لم يُختَر رجع بلا شيء وعاد '
              'لنداء العصر، ومن اختير قد يعمل يومين في الأسبوع أو ستّة بحسب عدد السفن '
              'الحاضرة.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الظاهرة: النظام وافق شركات '
                  'الأحواض موافقة تامّة، فوصول السفن غير منتظم، وشركة تستخدم قوّة عمل ثابتة '
                  'ستدفع للرجال ليقفوا في الأيّام الهادئة. والاستئجار العارض، أي أخذ الرجال '
                  'بنصف اليوم بلا عقد، نقل تلك المخاطرة إلى العمّال.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسب الترتيب نافعًا للطرفين، مع أنّ النصّ '
             'ينسب النفع إلى جانب واحد. ويقترن المقطع بالمقطع الثامن والتسعين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The hiring put the risk of irregular work on the men',
                   'The 1889 strike lasted five weeks and largely won',
                   'Casual hiring ended in Britain in 1967',
                   'The arrangement suited the workers as much as the companies'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'wrong_direction'},
             why='The text says the system suited the companies exactly and that casual hiring '
                 'moved the risk of irregular arrivals onto the workers.',
             trap='D shares a benefit the text assigns to one side.'),
        dict(stem='According to the text, what did the dockers strike for in 1889?',
             opts=['An end to casual hiring altogether',
                   'A shorter working week of four days',
                   'Sixpence an hour and a four-hour call',
                   'The removal of the foreman at the gate'],
             key='C', moves={'A': 'near_miss', 'B': 'imported', 'D': 'imported'},
             why='The text says the dockers struck for a guaranteed minimum call of four hours '
                 'and a rate of sixpence an hour.',
             trap='A names a change the text says took until 1967.'),
        dict(claim='the gate call left the foreman with great power',
             stem='Which quotation from the text most strongly supports the claim that the gate '
                  'call left the foreman with great power?',
             opts=[Q('Ship arrivals were irregular, and a company that employed a steady '
                     'workforce would be paying men to stand about on quiet days'),
                   Q('The strike lasted five weeks, drew financial support from as far away as '
                     'Australia, and largely won'),
                   Q('Casual hiring, meaning taking men on by the half day with no contract, '
                     'moved that risk onto the workers'),
                   Q('he chose faces each morning and could be bought a drink the night before. '
                     'The men who did best were not the strongest but the best known to the man '
                     'at the gate')],
             key='D', moves={'A': 'true_not_asked', 'B': 'true_not_asked', 'C': 'near_miss'},
             why='The quotation names the daily choosing, the drink the night before and the men '
                 'who did best being the best known at the gate.',
             trap='C names what the arrangement did to the workers rather than to the foreman.'),
        dict(carrier='Ship arrivals were irregular, and a company that employed a steady '
                     'workforce would be paying men to stand about on quiet days. A company that '
                     'hired by the half day therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['paid more over the course of a year',
                   'carried none of the quiet days itself',
                   'guaranteed a four-hour call to each man',
                   'drew support from as far away as Australia'],
             key='B', moves={'A': 'wrong_direction', 'C': 'wrong_direction', 'D': 'imported'},
             why='The text says casual hiring moved the risk of irregular arrivals onto the '
                 'workers, so the quiet days cost the company nothing.',
             trap='C grants the men the minimum they had to strike for.'),
        dict(target='benefits',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('benefits'),
             opts=['gains an advantage', 'pays a charity', 'receives a pension',
                   'bears a cost'],
             key='A', moves={'B': 'imported', 'C': 'imported', 'D': 'wrong_direction'},
             why='The sentence names the side that benefits as the one calling the arrangement '
                 'flexibility, so the word marks whoever is better off under it.',
             trap='C takes the sense in which a payment is a benefit.'),
        dict(stem='Which choice best describes the function of the sentence about the men who did '
                  'best?',
             opts=['It defines casual hiring for a reader',
                   'It reports the length of the 1889 strike',
                   'It argues that strength decided the choosing',
                   'It shows where the power of the foreman led'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'wrong_direction'},
             why='The sentence follows the account of the foreman choosing faces and being bought '
                 'a drink, and says the men who did best were the best known to him.',
             trap='C makes strength decisive when the sentence makes acquaintance decisive.'),
        dict(sibling='SOC-S08-L2',
             sibling_gloss='Text 2 is passage 98 of this book. It sets a wage between a ceiling '
                           'and a reservation wage with bargaining power deciding the rest, and '
                           'says hiring at a gate twice a day ensured each man competed against a '
                           'crowd for that day only.',
             stem='Text 1 describes hiring at a gate twice a day. Based on Text 2, which choice '
                  'best names what that arrangement weakened?',
             opts=['The ceiling set by what the work produces',
                   'The floor set by the reservation wage',
                   'The bargaining power of each individual man',
                   'The productivity of the dock trade itself'],
             key='C', moves={'A': 'near_miss', 'B': 'near_miss', 'D': 'wrong_direction'},
             why='Text 2 says the companies ensured each man competed against a crowd for that '
                 'day only, so no individual could threaten to withdraw.',
             trap='A names one of the two limits rather than the thing between them that moved.'),
        dict(carrier='The system suited the dock companies exactly. ___ ship arrivals were '
                     'irregular, and a company that employed a steady workforce would be paying '
                     'men to stand about on quiet days.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'After all,', 'In other words,', 'For example,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The second sentence gives the reason the system suited the companies, so the '
                 'transition must mark a ground.',
             trap='A sets the reason against the claim it supports.'),
        dict(carrier='The crowd was always larger than the number of jobs ___ and a man who was '
                     'not picked went home with nothing.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['jobs and', 'jobs; and', 'jobs and,', 'jobs, and'],
             key='D', moves={'A': 'run_on', 'B': 'wrong_mark', 'C': 'misplaced'},
             why='The clause about the man who went home with nothing is independent, so the '
                 'conjunction joining it to the clause about the crowd takes a comma.',
             trap='A runs the clause about the crowd straight into the clause about the man.'),
        dict(goal='explain what the word flexibility is doing in such an arrangement',
             notes=['Ship arrivals were irregular.',
                    'Casual hiring moved that risk onto the workers.',
                    'A market can be organized so one side carries nearly all the uncertainty.',
                    'The side that benefits describes the arrangement as flexibility.'],
             stem='The student wants to explain what the word flexibility is doing in such an '
                  'arrangement. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Ship arrivals were irregular at the London docks',
                   'The word names, from the gaining side, a risk shifted entirely onto the '
                   'other',
                   'Casual hiring moved the risk onto the workers',
                   'The side that benefits calls the arrangement flexibility'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice joins the transferred uncertainty to the side that names it, '
                 'which is what the notes together establish.',
             trap='D repeats the usage without saying what the word covers.'),
    ]))

# --- 9 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='SOC-S09-L1',
    ar=dict(
        khulasa='ستريترفيل وإنغلوود حيّان من شيكاغو، يبعد أحدهما عن الآخر نحو تسعة أميال، '
                'وتخدمهما الحكومة البلدية نفسها وقوانين الولاية نفسها والمستشفيات نفسها من حيث '
                'المبدأ. وتوقّع الحياة عند الميلاد متوسّط السنين التي يُتوقّع أن يعيشها مولود '
                'الآن.',
        maana='المعنى أنّ الرقم في أرقام نُشرت سنة ألفين وتسع عشرة كان نحو تسعين سنة في '
              'ستريترفيل ونحو ستّين في إنغلوود، والفجوة نحو ثلاثين سنة داخل مدينة واحدة بين '
              'موضعين تفصلهما رحلة قطار قصيرة.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الظاهرة: لا شيء في تلك الأرقام '
                  'عن اختيارات فردية بأيّ معنى بسيط. فالمنطقتان تختلفان في الدخل وفي حصّة '
                  'العاملين، وفي جودة الإسكان وعدد البقالات، وفي جودة الهواء قرب الطرق '
                  'السريعة وفي حضور العنف، وفي التاريخ أيضًا.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن تُحال الفجوة إلى اختيارات الأفراد، مع أنّ '
             'النصّ ينفي ذلك. ويقترن المقطع بالمقطع التاسع والتسعين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Streeterville and Englewood lie about nine miles apart',
                   'A postal code predicts a life better than a personal fact',
                   'Glasgow reported a gap of more than twenty years',
                   'The gap is explained by individual choices'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'wrong_direction'},
             why='The text reports a thirty-year gap inside one city, lists the differences that '
                 'arrive together, and ends by saying a postal code predicts the length of a life '
                 'better than most facts about the person.',
             trap='D assigns the gap to choices the text says it is not simply about.'),
        dict(stem='According to the text, what were the two life expectancy figures?',
             opts=['About sixty and about seventy years',
                   'About twenty and about thirty years',
                   'About nine and about thirty years',
                   'About ninety and about sixty years'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'imported'},
             why='The text says life expectancy was about ninety years in Streeterville and '
                 'about sixty in Englewood.',
             trap='A moves the higher of the two figures far down.'),
        dict(claim='the two figures should be read with care',
             stem='Which quotation from the text most strongly supports the claim that the two '
                  'figures should be read with care?',
             opts=[Q('The exact numbers move when the boundaries or the years change. Some early '
                     'figures were later revised downward'),
                   Q('The boundaries follow lines drawn by lending maps and by covenants'),
                   Q('They differ in air quality near the expressways and in the presence of '
                     'violence'),
                   Q('Figures of this kind are now published for most large American cities')],
             key='A', moves={'B': 'true_not_asked', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation says the exact numbers move with the boundaries or the years and '
                 'that some early figures were revised downward.',
             trap='D reports how widely such figures are published rather than how firm they '
                  'are.'),
        dict(carrier='These things arrive together and are hard to separate. A study that tried '
                     'to credit the gap to one of them would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['find the pattern had moved', 'measure a smaller gap than thirty years',
                   'have the others working alongside it',
                   'need figures from a European city'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'imported'},
             why='The income, the housing, the air and the history are said to arrive together '
                 'and to be hard to separate, so no one of them acts alone.',
             trap='A moves a pattern the text says stays put.'),
        dict(target='predict',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('predict'),
             opts=['announce in advance', 'serve as a guide to', 'cause to happen',
                   'remember accurately'],
             key='B', moves={'A': 'near_miss', 'C': 'wrong_direction', 'D': 'imported'},
             why='A postal code is said to predict the length of a life better than most facts '
                 'about the person, so the word names what a figure lets a reader expect.',
             trap='C turns a statistical guide into a cause.'),
        dict(stem='Which choice best describes the function of the list of differences between '
                  'the areas?',
             opts=['It fills in what arrives alongside the gap',
                   'It defines life expectancy for a reader',
                   'It reports the Glasgow figures for comparison',
                   'It settles which difference causes the gap'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The list follows the statement that the figures are not about individual '
                 'choices and is closed by the remark that these things arrive together.',
             trap='D picks a cause the next sentence says cannot be separated out.'),
        dict(sibling='SOC-S09-L2',
             sibling_gloss='Text 2 is passage 99 of this book. It separates income, wealth and '
                           'mobility and says none of the three captures the experience of being '
                           'poor, where stigma, insecurity and the cost of credit do damage no '
                           'distribution figure records.',
             stem='Text 1 reports a thirty-year gap between two neighborhoods. Based on Text 2, '
                  'which choice best describes what such a figure leaves out?',
             opts=['The share of adults in work in each area',
                   'The boundaries drawn by lending maps',
                   'The number of grocery stores nearby',
                   'The stigma and insecurity of being poor'],
             key='D', moves={'A': 'near_miss', 'B': 'restatement', 'C': 'near_miss'},
             why='Text 2 says none of the three quantities captures the experience of being poor, '
                 'where stigma, insecurity and the cost of credit do damage no distribution '
                 'figure records.',
             trap='A names one of the differences Text 1 already lists.'),
        dict(carrier='The exact numbers move when the boundaries or the years change. ___ the '
                     'pattern does not move.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['As a result,', 'For example,', 'Even so,', 'In other words,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'restatement'},
             why='The second sentence holds the pattern steady against the moving numbers, so the '
                 'transition must mark a concession.',
             trap='A makes the steady pattern follow from the moving figures.'),
        dict(carrier='They lie about nine miles apart ___ and they are served by the same city '
                     'government.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['apart, and', 'apart and', 'apart; and', 'apart and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the same city government is independent, so the conjunction '
                 'joining it to the clause about the distance takes a comma.',
             trap='B runs the clause about the distance straight into the clause about the '
                  'government.'),
        dict(goal='explain why a single pair of numbers should be read carefully',
             notes=['The exact numbers move when the boundaries or the years change.',
                    'Some early figures were later revised downward.',
                    'The pattern does not move.',
                    'Figures of this kind are published by small area.'],
             stem='The student wants to explain why a single pair of numbers should be read '
                  'carefully. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['The numbers move when the boundaries or the years change',
                   'Some early figures were later revised downward',
                   'The exact figures shift with the boundaries, though the pattern behind them '
                   'holds',
                   'Figures of this kind are now published by small area'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice separates the unstable figures from the stable pattern, which '
                 'is what makes care about one pair of numbers reasonable.',
             trap='B names one revision without the pattern that survives it.'),
    ]))

# --- 10 ------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='SOC-S10-L1',
    ar=dict(
        khulasa='سنة ألف وتسعمئة وثمانٍ وسبعين عرض ثلاثة باحثين مسألة قصيرة على ستّين طبيبًا '
                'وطالب طبّ في هارفارد: مرض يصيب شخصًا في الألف، واختبار له لا يفوته حالة قطّ، '
                'لكنّه يعطي نتيجة موجبة كاذبة في خمسة في المئة من الأصحّاء.',
        maana='المعنى أنّ مريضًا جاءت نتيجته موجبة ولا يُعلم عنه شيء آخر، فسُئل الأطبّاء عن '
              'احتمال إصابته. فأجاب أكثر الستّين بخمسة وتسعين في المئة، ولم يقترب من الصواب '
              'إلّا نحو واحد من ستّة، والجواب الصحيح نحو اثنين في المئة.',
        ahammiyya='في مجال العلوم الاجتماعية هذه المادة في مستوى الظاهرة: الحساب قصير: خُذ ألف '
                  'شخص فيهم مصاب واحد، فيُظهر الاختبار إيجابه، ومن التسعمئة وتسعة وتسعين '
                  'الأصحّاء يظهر نحو خمسين موجبين، فيكون الموجبون أحدًا وخمسين وفيهم مريض '
                  'واحد، وواحد من أحد وخمسين نحو اثنين في المئة.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن تُحسب النتيجة الموجبة صحيحة غالبًا، مع أنّ '
             'النصّ يقول إنّها إنذار كاذب في الأغلب. ويقترن المقطع بالمقطع المئة.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Sixty doctors and students were given the problem in 1978',
                   'The arithmetic is short enough to do on a napkin',
                   'The base rate is dropped, and a positive is usually a false alarm',
                   'A positive result on a good test is usually correct'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'wrong_direction'},
             why='The text works the arithmetic to about two percent, names the base rate as the '
                 'figure that gets dropped, and says a positive on a good test for a rare '
                 'condition is usually a false alarm.',
             trap='D reverses the conclusion the arithmetic reaches.'),
        dict(stem='According to the text, what did most of the sixty answer?',
             opts=['Ninety-five percent', 'About two percent', 'One in a thousand',
                   'Fifty-one percent'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says most of the sixty answered ninety-five percent and that only '
                 'about one in six gave an answer near the right one.',
             trap='B gives the correct figure rather than the common answer.'),
        dict(claim='the error lies in the starting point rather than the sums',
             stem='Which quotation from the text most strongly supports the claim that the error '
                  'lies in the starting point rather than the sums?',
             opts=[Q('Of the nine hundred and ninety-nine who do not have it, about fifty also '
                     'test positive'),
                   Q('What goes wrong is not the arithmetic but the starting point. The five '
                     'percent figure is vivid and the one in a thousand figure is not, so the '
                     'second gets dropped'),
                   Q('It matters wherever a rare thing is screened for in a large population. '
                     'That covers cancer screening, airport security, drug testing and fraud '
                     'detection'),
                   Q('Most of the sixty answered ninety-five percent. Only about one in six gave '
                     'an answer near the right one')],
             key='B', moves={'A': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation says what goes wrong is the starting point rather than the '
                 'arithmetic, and names the vivid figure that crowds out the base rate.',
             trap='A gives one step of the sums rather than the source of the mistake.'),
        dict(carrier='A positive result on a good test for a rare condition is usually a false '
                     'alarm. How a doctor or an official should respond to one depends entirely '
                     'on the number that most people forget. A screening program designed without '
                     'that number would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['catch fewer of the real cases', 'reduce the false positive rate',
                   'need sixty doctors to assess it',
                   'treat its alarms as more than they are'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'imported'},
             why='The text makes the response depend on the base rate, so a program that leaves '
                 'it out overvalues the positive results it produces.',
             trap='B improves a figure the missing number has nothing to do with.'),
        dict(target='respond',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('respond'),
             opts=['answer a letter', 'react to a drug', 'act on a result',
                   'ignore a warning'],
             key='C', moves={'A': 'imported', 'B': 'imported', 'D': 'wrong_direction'},
             why='The sentence asks how a doctor or an official should respond to a positive '
                 'result, so the word names what is done about it.',
             trap='B takes the medical sense in which a patient responds to treatment.'),
        dict(stem='Which choice best describes the function of the thousand-person calculation?',
             opts=['It defines a false positive for a reader',
                   'It works the right answer out in full',
                   'It reports what the doctors answered',
                   'It argues that the test is a bad one'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The calculation follows the statement that the right answer is about two '
                 'percent and reaches fifty-one positives of which one is ill.',
             trap='D blames a test the text describes as good.'),
        dict(sibling='SOC-S10-L2',
             sibling_gloss='Text 2 is passage 100 of this book. It names anchoring, availability '
                           'and framing as systematic errors, and defines availability as judging '
                           'how common something is by how easily examples come to mind.',
             stem='Text 1 reports a figure dropped because it is less vivid. Based on Text 2, '
                  'which choice best names the pattern behind that dropping?',
             opts=['Judging how common a thing is by what comes to mind',
                   'The pull of an irrelevant number on an estimate',
                   'The same choice described two ways giving two decisions',
                   'A random error that cancels over many judgments'],
             key='A', moves={'B': 'near_miss', 'C': 'near_miss', 'D': 'wrong_direction'},
             why='Text 2 defines availability as judging how common something is by how easily '
                 'examples come to mind, which is what makes the vivid figure crowd out the rare '
                 'one.',
             trap='B names anchoring, which concerns an irrelevant number rather than a vivid '
                  'one.'),
        dict(carrier='The arithmetic is short enough to do on a napkin. ___ take a thousand '
                     'people, of whom exactly one has the disease.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'As a result,', 'In other words,', 'For example,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'restatement'},
             why='The second sentence begins the short calculation the first sentence promises, '
                 'so the transition must introduce an illustration.',
             trap='B makes the calculation follow from its own brevity.'),
        dict(carrier='A test for it never misses a case ___ and it gives a false positive in five '
                     'percent of healthy people.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['case and', 'case, and', 'case; and', 'case and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the false positives is independent, so the conjunction joining '
                 'it to the clause about the missed cases takes a comma.',
             trap='A runs the clause about the test straight into the clause about the false '
                  'positives.'),
        dict(goal='explain where the error matters most',
             notes=['Ignoring the base rate is among the most reliable errors in judgment.',
                    'It matters wherever a rare thing is screened for in a large population.',
                    'That covers cancer screening, airport security and fraud detection.',
                    'A positive on a good test for a rare condition is usually a false alarm.'],
             stem='The student wants to explain where the error matters most. Which choice most '
                  'effectively uses relevant information from the notes to accomplish that goal?',
             opts=['Ignoring the base rate is a reliable error in human judgment',
                   'That covers cancer screening, airport security and fraud detection',
                   'A positive on a good test is usually a false alarm',
                   'Wherever a rare thing is screened for in millions, most alarms are false'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'restatement'},
             why='Only this choice joins the condition under which the error bites, a rare thing '
                 'in a large population, to the result it produces.',
             trap='B lists the settings without saying what happens in them.'),
    ]))

if __name__ == '__main__':
    qemit.emit(FIELD, LEVEL, SETS)
