"""Biology and Earth Science, Level 2: ten question sets."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

Q = '«%s»'.__mod__
FIELD, LEVEL = 'BIO', 2

SETS = []

# --- 1 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='BIO-S01-L2',
    ar=dict(
        khulasa='الانتقاء الطبيعي ليس قوّة ولا نزعة، بل نتيجة تتحقّق كلّما توافرت أربعة شروط '
                'في وقت واحد: أن يوجد تنوّع بين أفراد الجماعة، وأن يكون بعض ذلك التنوّع '
                'موروثًا ينتقل من الوالد إلى الولد عبر الجينات، وأن تختلف الصور في عدد ما '
                'تتركه من نسل، وأن يتوافر الزمن محسوبًا بالأجيال لا بالسنين.',
        maana='المعنى أنّ كلّ شرط من هذه الشروط قابل للفحص، وهذا ما يجعل الآلية قابلة '
              'للاختبار لا حكايةً تُروى. وفي عثّة الفلفل كان التنوّع فرقًا واحدًا في اللون، '
              'وكان موروثًا، واختلف البقاء لأنّ الطيور تأخذ ما تراه، ومدّة الجيل سنة واحدة، '
              'فأتاحت خمسون سنة خمسين دورة.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الآلية: الأفراد لا '
                  'تتكيّف، وإنّما تتغيّر نسبة كلّ صورة في الجماعة، والانتقاء لا يحسّن '
                  'الأشياء عمومًا بل يوفّق الجماعة لما هي فيه فعلًا.',
        sila='في اختبار سات يُسأل كثيرًا عن الفكرة الرئيسة وعن وظيفة الجملة وعن الدليل الذي '
             'يسند دعوى بعينها. والفخّ المتوقّع هنا أن يُقرأ الانتقاء تقدّمًا نحو الأفضل، مع '
             'أنّ النصّ يقول إنّ الآلية بلا ذاكرة ولا هدف. ويقترن المقطع بالمقطع الأول من '
             'المستوى الأول في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Darwin devoted his opening chapter to pigeons and cabbages',
                   'Selection is an outcome that follows whenever four checkable conditions hold '
                   'at once',
                   'A pale moth darkens its color when the bark around it turns sooty',
                   'The peppered moth has a generation time of one year'],
             key='B', moves={'A': 'true_not_asked', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text calls selection an outcome rather than a force and names the four '
                 'conditions, each of which can be checked, as what makes the mechanism testable.',
             trap='C states the first of the two misreadings that the text names and rejects.'),
        dict(stem='According to the text, what changes across the generations of a moth '
                  'population?',
             opts=['The color of an individual moth as the bark around it darkens',
                   'The number of generations that a single year will allow',
                   'The aim that the mechanism of selection is working toward',
                   'The proportion of each form present in the population'],
             key='D', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'C': 'imported'},
             why='The text says individuals do not adapt and that what changes across generations '
                 'is the proportion of each form in the population.',
             trap='A asserts what the text explicitly denies, that a pale moth can darken.'),
        dict(claim='selection fits a population to present conditions rather than improving it '
                   'in general',
             stem='Which quotation from the text most strongly supports the claim that selection '
                  'fits a population to present conditions rather than improving it in general?',
             opts=[Q('It makes a population fit the conditions it is actually in, which is why a '
                     'variant that lets a population thrive under soot becomes a liability once '
                     'the soot is gone'),
                   Q('In the peppered moth the variation was a single difference in color, and it '
                     'was heritable'),
                   Q('Each condition can be checked, and that is what makes the mechanism '
                     'testable rather than a story'),
                   Q('Breeders had been using the same arithmetic deliberately for centuries, '
                     'which is where Darwin got his clearest evidence')],
             key='A', moves={'B': 'underreach', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation states the point directly: fitness is to the conditions at hand, '
                 'and the same variant that helps under soot becomes a liability when the soot '
                 'goes.',
             trap='C supports the claim that the mechanism is testable, not the claim about fit.'),
        dict(carrier='The mechanism has no memory and no aim. It is simply arithmetic applied to '
                     'who leaves offspring. A population that has been shaped by soot therefore '
                     '___',
             stem='Which choice most logically completes the text?',
             opts=['retains an advantage once the soot is gone',
                   'can direct its own change in a new direction',
                   'carries no advantage once the bark is clean again',
                   'must wait fifty generations before anything changes'],
             key='C', moves={'A': 'wrong_direction', 'B': 'overreach', 'D': 'imported'},
             why='Because the mechanism has no memory, nothing about the earlier advantage '
                 'persists, and the population fits only the conditions now in front of it.',
             trap='B gives the mechanism an aim that the text denies it has.'),
        dict(target='thrive',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('thrive'),
             opts=['spread more slowly', 'do well and increase', 'stay the same',
                   'become harder to see'],
             key='B', moves={'A': 'wrong_direction', 'C': 'near_miss', 'D': 'imported'},
             why='A variant that lets a population thrive under soot is one that lets it do well '
                 'and increase there, which is why losing the soot turns it into a liability.',
             trap='A reverses the sense, since the variant was the one succeeding under soot.'),
        dict(stem='Which choice best describes the function of the two misreadings the text names?',
             opts=['They mark off errors the four conditions do not license',
                   'They supply the fourth of the four conditions',
                   'They show that the mechanism cannot be tested',
                   'They introduce the peppered moth for the first time'],
             key='A', moves={'B': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The text turns to the misreadings after setting out the conditions, naming each '
                 'as a conclusion the mechanism does not support.',
             trap='D treats the moths as newly introduced when the text has already used them.'),
        dict(sibling='BIO-S01-L1',
             sibling_gloss='Text 2 is passage 11 of this book. It reports that a nearly black '
                           'peppered moth was recorded near Manchester in 1848, that the black '
                           'form was more than nine in ten of the local catch fifty years later, '
                           'and that it fell below five percent again after the clean air law of '
                           '1956.',
             stem='Text 1 sets out the conditions that produce selection. Based on Text 2, what '
                  'would be added to that account?',
             opts=['Variation in the population must be heritable to count',
                   'The counts were made by biologists who expected the reversal',
                   'Birds take whichever form of the moth stands out',
                   'An actual record of the reversal, counted in both directions'],
             key='D', moves={'A': 'restatement', 'B': 'imported', 'C': 'near_miss'},
             why='Text 2 supplies the counts that run up and then back down again, turning the '
                 'conditions of Text 1 into a measured case rather than a derivation.',
             trap='A repeats a condition Text 1 has already stated rather than adding anything.'),
        dict(carrier='The first misreading is that individuals adapt. They do not. ___ a pale '
                     'moth cannot darken and nothing in its lifetime changes its color.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Even so,', 'For instance,', 'After all,', 'In addition,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'near_miss'},
             why='The second sentence gives the reason the first is true, so the transition must '
                 'introduce a justification rather than a contrast or an added point.',
             trap='A sets the explanation against the claim it supports, which reverses the '
                  'relation.'),
        dict(carrier='Each condition can be checked ___ that is what makes the mechanism testable '
                     'rather than a story.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['checked, and that', 'checked and that', 'checked; and that',
                   'checked and, that'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about what makes the mechanism testable is independent, so the '
                 'conjunction joining it to the checking of each condition takes a comma before '
                 'it.',
             trap='B runs the two independent clauses together with no mark at all.'),
        dict(goal='explain why selection cannot be described as improvement in general',
             notes=['Selection follows whenever four conditions hold: variation, heritability, '
                    'differential reproduction and time.',
                    'It makes a population fit the conditions it is actually in.',
                    'A variant that lets a population thrive under soot becomes a liability once '
                    'the soot is gone.',
                    'The mechanism has no memory and no aim.'],
             stem='The student wants to explain why selection cannot be described as improvement '
                  'in general. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Selection follows whenever variation, heritability, differential reproduction '
                   'and time hold at once',
                   'The mechanism of selection has no memory and no aim to work toward',
                   'Because the mechanism has no aim, it fits a population to the conditions at '
                   'hand, so a variant favored under soot becomes a liability',
                   'Readers who expect progress from selection are reading a story into '
                   'arithmetic'],
             key='C', moves={'A': 'restatement', 'B': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice joins the absence of aim to the reversal of the soot variant, '
                 'which is what shows that fit rather than improvement is what selection '
                 'produces.',
             trap='A restates the four conditions without saying anything about improvement.'),
    ]))

# --- 2 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='BIO-S02-L2',
    ar=dict(
        khulasa='نسبة ثلاثة إلى واحد التي أحصاها مندل تنشأ من ثلاث حقائق لم يكن يراها: أنّ '
                'نبات البازلّاء يحمل نسختين من كلّ جين، واحدة من كلّ والد؛ وأنّ النسختين قد '
                'تختلفان فتُسمّى كلّ صورة أليلًا؛ وأنّ النسختين تنفصلان عند تكوين اللقاح '
                'والبويضة فتأخذ كلّ خلية واحدة منهما بالقرعة.',
        maana='المعنى أنّ الاستدلال يُجرى بالورقة والقلم: نبات طويل صافي النسل يحمل أليلين '
              'طويلين، والقصير يحمل قصيرين، فالجيل الأول يحمل واحدًا من كلّ، وكلّه طويل لأنّ '
              'الأليل الطويل سائد. وإذا تلاقح ذلك الجيل نتجت أربع تراكيب متساوية الاحتمال، '
              'ثلاث منها تحمل أليلًا طويلًا.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الآلية: الاستدلال يتنبّأ '
                  'بأكثر من النسبة، إذ يتنبّأ بأنّ ثلث الطوال يصفّي نسله وثلثيها لا، وقد '
                  'اختبر مندل ذلك وأكّده، ويفشل فشلًا مفيدًا في الصفات المتجاورة على '
                  'كروموسوم واحد.',
        sila='في اختبار سات تتكرّر أسئلة الفكرة الرئيسة ووظيفة الجملة وإكمال النصّ إكمالًا '
             'منطقيًّا. والفخّ المتوقّع هنا أن يُحسب الأليل القصير قد ذاب في الجيل الأول، مع '
             'أنّ النصّ يقول إنّه باقٍ سليم. ويقترن المقطع بالمقطع الثاني من المستوى الأول في '
             'أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Mendel had no word for a gene and no knowledge of chromosomes',
                   'The short allele is diluted away in the first generation',
                   'Three unseen facts about inheritance derive the ratio and predict more '
                   'besides',
                   'Seven features of the pea plant happen to behave simply'],
             key='C', moves={'A': 'true_not_asked', 'B': 'wrong_direction', 'D': 'underreach'},
             why='The text derives the three to one ratio from three facts Mendel could not see '
                 'and then shows that the same derivation predicts breeding behavior and '
                 'two-feature proportions.',
             trap='B contradicts the text, which says the short allele is still there and '
                  'intact.'),
        dict(stem='According to the text, what proportion of the tall plants in the second '
                  'generation will breed true?',
             opts=['About one third of them', 'About three quarters of them',
                   'All of them without exception', 'About two thirds of them'],
             key='A', moves={'B': 'detail_swap', 'C': 'overreach', 'D': 'wrong_direction'},
             why='The text says the derivation predicts that about one third of the tall plants '
                 'in the second generation will breed true and two thirds will not.',
             trap='D names the share that will not breed true rather than the share that will.'),
        dict(claim='the derivation is worth more than the ratio it was built to explain',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'derivation is worth more than the ratio it was built to explain?',
             opts=[Q('A true-breeding tall plant carries two tall alleles and a short plant '
                     'carries two short'),
                   Q('That is the whole derivation, and it predicts more than the ratio'),
                   Q('It fails, usefully, for features carried close together on the same '
                     'chromosome, and that failure is how the first gene maps were later drawn'),
                   Q('Mendel had no word for a gene and no knowledge of chromosomes, both of '
                     'which arrived decades later')],
             key='B', moves={'A': 'underreach', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation says in so many words that the derivation predicts more than the '
                 'ratio, which is the claim being supported.',
             trap='C gives one of the further predictions rather than the statement that there '
                  'are more.'),
        dict(carrier='When that generation breeds among itself, each parent contributes either a '
                     'tall or a short allele with equal chance, which gives four equally likely '
                     'combinations. Three of the four contain at least one tall allele. The ratio '
                     'of three to one is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['a measurement that varies from one cross to another',
                   'a fact about chromosomes that Mendel had observed',
                   'an average that only very large counts can approach',
                   'an arithmetical consequence of how the alleles combine'],
             key='D', moves={'A': 'wrong_direction', 'B': 'imported', 'C': 'near_miss'},
             why='Four equally likely combinations of which three carry a tall allele give the '
                 'ratio directly, so it follows from the arithmetic rather than from any '
                 'observation.',
             trap='B credits Mendel with knowledge of chromosomes that the text says he did not '
                  'have.'),
        dict(target='emerge',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('emerge'),
             opts=['escape notice', 'rise to the surface', 'appear among the offspring',
                   'leave the population'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'wrong_direction'},
             why='The text predicts that two features on different chromosomes will emerge in all '
                 'four combinations in fixed proportions, so the word names their appearing among '
                 'the offspring.',
             trap='B takes a general sense of the word instead of the one the sentence about '
                  'offspring requires.'),
        dict(stem='Which choice best describes the function of the sentence about features '
                  'carried close together?',
             opts=['It restates the three facts from which the ratio follows',
                   'It names a limit of the derivation that later proved useful',
                   'It abandons the derivation as a failed account of inheritance',
                   'It introduces the four equally likely combinations for the first time'],
             key='B', moves={'A': 'detail_swap', 'C': 'overreach', 'D': 'detail_swap'},
             why='The sentence comes after the successful predictions and marks the one case where '
                 'the derivation fails, adding that the failure is how the first gene maps were '
                 'drawn.',
             trap='C turns a stated limit into the collapse of the whole account.'),
        dict(sibling='BIO-S02-L1',
             sibling_gloss='Text 2 is passage 12 of this book. It reports that Mendel grew about '
                           'twenty-eight thousand pea plants between 1856 and 1863, chose seven '
                           'features that came in two clear forms, found a ratio close to three '
                           'to one for all seven, and published in 1866 to almost no readers.',
             stem='Text 1 derives the three to one ratio from three facts. Based on Text 2, what '
                  'would be added to that account?',
             opts=['The scale of the counting on which the ratio actually rests',
                   'Each version of a gene is called an allele',
                   'Three of the four combinations contain a tall allele',
                   'Mendel drew the first gene maps from his own crosses'],
             key='A', moves={'B': 'restatement', 'C': 'restatement', 'D': 'imported'},
             why='Text 2 reports about twenty-eight thousand plants grown by hand over seven '
                 'years, which shows the labor behind a ratio that Text 1 presents as a '
                 'derivation.',
             trap='C repeats a step of the derivation in Text 1 rather than adding anything.'),
        dict(carrier='It predicts that about one third of the tall plants in the second generation '
                     'will breed true and two thirds will not. ___ it predicts that two features '
                     'carried on different chromosomes will emerge in all four combinations in '
                     'fixed proportions.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Therefore,', 'That is,', 'Further,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'restatement'},
             why='The sentence adds a second prediction of the same derivation, so the transition '
                 'must signal addition rather than contrast, consequence or restatement.',
             trap='A puts the second prediction in opposition to the first, though both follow '
                  'from one derivation.'),
        dict(carrier='Mendel had no word for a gene and no knowledge of chromosomes ___ both of '
                     'which arrived decades later.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['chromosomes; both', 'chromosomes, both', 'chromosomes both',
                   'chromosomes: both'],
             key='B', moves={'A': 'wrong_mark', 'C': 'run_on', 'D': 'wrong_mark'},
             why='The phrase about the gene and the chromosomes arriving decades later cannot '
                 'stand as a sentence, so it is attached with a comma rather than a semicolon or '
                 'a colon.',
             trap='A uses a semicolon where what follows cannot stand alone as a sentence.'),
        dict(goal='present the derivation as a test rather than a story',
             notes=['A pea plant carries two copies of each gene, one from each parent.',
                    'Each parent contributes either allele with equal chance, giving four equally '
                    'likely combinations.',
                    'The derivation predicts that about one third of the tall plants will breed '
                    'true.',
                    'Mendel also tested that prediction and confirmed it.'],
             stem='The student wants to present the derivation as a test rather than a story. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['A pea plant carries two copies of each gene, one from each parent',
                   'Four equally likely combinations arise when each parent contributes one '
                   'allele',
                   'The derivation predicts that about one third of the tall plants will breed '
                   'true',
                   'The derivation predicted that one third of the tall plants would breed true, '
                   'and Mendel tested that prediction and confirmed it'],
             key='D', moves={'A': 'restatement', 'B': 'underreach', 'C': 'underreach'},
             why='Only this choice pairs a prediction made in advance with the test that confirmed '
                 'it, which is what distinguishes a tested derivation from a story.',
             trap='C gives the prediction but stops before the test that makes it a test.'),
    ]))

# --- 3 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='BIO-S03-L2',
    ar=dict(
        khulasa='الخلية لا تستعمل السكّر مباشرة، بل تحوّل طاقته إلى جزيء يُعدّ عملة العمل '
                'داخل كلّ كائن حيّ، ثمّ تصرف تلك العملة على ما يلزم. والسؤال في أي خلية هو '
                'كم وحدة من هذه العملة يعطي جزيء سكّر واحد، والجواب متعلّق كلّه بتوافر '
                'الأكسجين أو انعدامه.',
        maana='المعنى أنّ المرحلة الأولى واحدة في الحالين: انحلال السكّر يشطره نصفين في جسم '
              'الخلية ويربح وحدتين. فإذا لم يكن أكسجين توقّف الحساب هناك، وتخلّصت الخميرة من '
              'النصفين كحولًا، وتخلّص العضل العامل منهما لبنًا. وإذا توافر الأكسجين فُكّكت '
              'الأنصاف تفكيكًا تامًّا إلى ماء وغاز، فبلغ الربح نحو ثلاثين وحدة.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الآلية: هذا الفرق يفسّر '
                  'لماذا يعدو العدّاء بأقصى جهده عشرين ثانية لا عشرين دقيقة، ولماذا استطاعت '
                  'الحياة المتنفّسة أن تحمل حيوانات كبيرة نشيطة.',
        sila='في اختبار سات يكثر السؤال عن المقارنة بين مسارين وعن وظيفة التحوّل بين '
             'الجملتين. والفخّ المتوقّع هنا أن يُحسب رقم الثلاثين ثابتًا، مع أنّ النصّ '
             'يسمّيه تقديرًا نُقِّص على السنين. ويقترن المقطع بالمقطع الثالث من المستوى '
             'الأول في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Yeast in a sealed vessel grows slowly for want of oxygen',
                   'Glycolysis happens in the mitochondria rather than the cell body',
                   'The figure of about thirty units has been revised downward over the years',
                   'The yield of energy currency from one sugar depends entirely on whether '
                   'oxygen is available'],
             key='D', moves={'A': 'underreach', 'B': 'wrong_direction', 'C': 'true_not_asked'},
             why='The text asks how many units of currency one sugar yields and answers that '
                 'everything turns on oxygen: two units without it and about thirty with it.',
             trap='C names a revision to the larger figure rather than the comparison the text is '
                  'making.'),
        dict(stem='According to the text, what does a working human muscle do with the '
                  'half-molecules when oxygen is short?',
             opts=['It converts them to alcohol', 'It disposes of them as lactate',
                   'It takes them into the mitochondria', 'It stores them for later use'],
             key='B', moves={'A': 'detail_swap', 'C': 'wrong_direction', 'D': 'imported'},
             why='The text says yeast disposes of the half-molecules as alcohol while a working '
                 'human muscle disposes of them as lactate.',
             trap='A gives what yeast does with them rather than what a muscle does.'),
        dict(claim='the difference in yield has consequences beyond the single cell',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'difference in yield has consequences beyond the single cell?',
             opts=[Q('Glycolysis, which is the step that splits the sugar in half, happens in the '
                     'main body of the cell and nets two units of ATP'),
                   Q('Either way the cell keeps its two units and throws away most of the '
                     'chemical energy it was handed'),
                   Q('fifteen times the yield from the same food is the margin that pays for '
                     'muscle, nerve and a warm body'),
                   Q('It depends on how much energy the cell spends moving materials across the '
                     'mitochondrial membrane')],
             key='C', moves={'A': 'underreach', 'B': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation ties the fifteenfold margin to muscle, nerve and a warm body, '
                 'which are properties of whole animals rather than of a single cell.',
             trap='D explains why the figure is uncertain rather than what the difference makes '
                  'possible.'),
        dict(carrier='It explains why a sprinter can run flat out for twenty seconds and not for '
                     'twenty minutes, since the fast path cannot sustain the pace. A sprinter at '
                     'full effort is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['spending a currency that is being replaced too slowly',
                   'relying on the mitochondria for most of the yield',
                   'producing alcohol in the muscles as yeast does',
                   'working at about thirty units per sugar molecule'],
             key='A', moves={'B': 'wrong_direction', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The fast path nets only two units and cannot sustain the pace, so the sprinter '
                 'is spending the currency faster than that path can replace it.',
             trap='B puts the sprinter on the oxygen path, which is the path that cannot keep up '
                  'at that speed.'),
        dict(target='sustain',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('sustain'),
             opts=['justify by argument', 'suffer or undergo', 'raise still higher',
                   'keep up over time'],
             key='D', moves={'A': 'imported', 'B': 'imported', 'C': 'wrong_direction'},
             why='The fast path cannot sustain the pace for twenty minutes, so the word means to '
                 'keep the pace going rather than to justify it or to raise it.',
             trap='A takes a common sense of the word that has nothing to do with a pace.'),
        dict(stem='Which choice best describes the function of the three consequences listed '
                  'after the yields are compared?',
             opts=['They supply the method by which the yields were measured',
                   'They qualify the figure of about thirty units',
                   'They show how much of biology the difference in yield accounts for',
                   'They introduce glycolysis for the first time'],
             key='C', moves={'A': 'imported', 'B': 'detail_swap', 'D': 'detail_swap'},
             why='Each of the three sentences names something the difference between two units and '
                 'thirty explains, which together show the reach of that one comparison.',
             trap='B describes the closing sentences of the text rather than the three '
                  'consequences.'),
        dict(sibling='BIO-S03-L1',
             sibling_gloss='Text 2 is passage 13 of this book. It reports that yeast stirred into '
                           'warm sugar water foams within ten minutes, that a baker wants the gas '
                           'and a brewer the alcohol, and that Pasteur showed in the 1860s how '
                           'much more energy the cell gets when air is present.',
             stem='Text 1 compares the yields with and without oxygen. Based on Text 2, what '
                  'would be added to that account?',
             opts=['Glycolysis nets two units of the currency either way',
                   'A case in which both products of the fast path are wanted',
                   'The fast path yields far less energy than the slow one',
                   'Brewers measured the yields before Pasteur did'],
             key='B', moves={'A': 'restatement', 'C': 'restatement', 'D': 'imported'},
             why='Text 2 reports that a baker wants the carbon dioxide and a brewer the alcohol, '
                 'so the waste products of the fast path are themselves the point of the process.',
             trap='C repeats the comparison Text 1 has already drawn rather than adding to it.'),
        dict(carrier='Without oxygen that is where the accounting stops. ___ with oxygen the '
                     'halves are taken into the mitochondria and dismantled completely to carbon '
                     'dioxide and water.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Likewise,', 'As a result,', 'In particular,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'near_miss', 'D': 'near_miss'},
             why='The two sentences set the path without oxygen against the path with it, so the '
                 'transition must mark a contrast rather than a likeness or a consequence.',
             trap='B treats the two paths as alike when the text is distinguishing them.'),
        dict(carrier='A cell does not use sugar directly ___ it converts the energy in sugar into '
                     'a molecule that serves as the working currency of energy.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['directly, it', 'directly it', 'directly; it', 'directly, and, it'],
             key='C', moves={'A': 'comma_splice', 'B': 'run_on', 'D': 'misplaced'},
             why='The clause about converting the energy in sugar is a complete sentence, so a '
                 'semicolon must separate it from the clause about not using sugar directly.',
             trap='A joins two complete sentences with a comma, which is a splice.'),
        dict(goal='explain why the fast path limits what an animal can do',
             notes=['Glycolysis nets two units of the energy currency per sugar molecule.',
                    'Complete breakdown with oxygen yields something in the region of thirty '
                    'units.',
                    'A sprinter can run flat out for twenty seconds and not for twenty minutes.',
                    'Fifteen times the yield is the margin that pays for muscle, nerve and a warm '
                    'body.'],
             stem='The student wants to explain why the fast path limits what an animal can do. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['The fast path nets two units rather than about thirty, which is why a '
                   'sprinter can hold full effort for twenty seconds and not twenty minutes',
                   'Glycolysis nets two units of the energy currency per sugar molecule',
                   'Complete breakdown with oxygen yields about thirty units of the currency',
                   'Animals that breathe oxygen can afford muscle, nerve and a warm body'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice puts the two yields beside the twenty-second limit, which is '
                 'what shows the shortfall of the fast path as a limit on performance.',
             trap='C gives the larger yield alone and so names no limit at all.'),
    ]))

# --- 4 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='BIO-S04-L2',
    ar=dict(
        khulasa='لكلّ شبكة غذائية شكل، وشكلها ناتج عن واقعة حسابية واحدة: الطاقة تُفقد في كلّ '
                'انتقال. فالنبات يأسر كسرًا صغيرًا من ضوء الشمس، والحيوان الذي يأكله يصرف '
                'معظم ما يأخذ على الحركة والتنفّس والدفء، ولا يخزّن إلّا كسرًا في نسيجه. '
                'والرقم المستعمل في الكتب نحو عشرة في المئة.',
        maana='المعنى أنّ النتائج صارمة: إن كانت مئة وحدة من النبات تحمل عشر وحدات من '
              'الراعي، فعشر وحدات من الراعي تحمل وحدة واحدة من المفترس. فالكتلة الحيّة تهبط '
              'نحو عشرة أضعاف في كلّ خطوة، ولهذا كان العشب غزيرًا والأيائل كثيرة والذئاب '
              'نادرة، وأربع خطوات أو خمس هي الحدّ العملي.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الآلية: الحساب نفسه يفسّر '
                  'مشاهدات يلوستون بلا دعوى تصميم، ويفسّر أنّ المفترسات العليا أوّل ما '
                  'يُفقد إذا ضاق الموئل.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى بعينها وعن إكمال النصّ. '
             'والفخّ المتوقّع هنا أن يُحسب رقم العشرة في المئة قانونًا، مع أنّ النصّ يقول '
             'إنّ الكفاءات المقيسة تتراوح من واحد في المئة إلى ما فوق الثلاثين. ويقترن '
             'المقطع بالمقطع الرابع من المستوى الأول في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Energy lost at every transfer sets the shape of every food web',
                   'Cold-blooded animals transfer energy better than warm-blooded ones',
                   'Four or five steps is the practical limit for a food chain',
                   'Wolves affect willows because the park service designed the release that way'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'imported'},
             why='The text opens by saying every food web has a shape that follows from one '
                 'arithmetical fact, and the loss of energy at each transfer is that fact.',
             trap='C names a consequence of the arithmetic rather than the arithmetic itself.'),
        dict(stem='According to the text, by roughly what factor does biomass fall at each step '
                  'of a food chain?',
             opts=['By about a third at each step', 'It rises by about a factor of ten',
                   'By about a factor of ten at each step',
                   'By a factor that measurement has never fixed'],
             key='C', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'D': 'overreach'},
             why='The text puts the transfer at about ten percent, so a tenth of the energy at one '
                 'level reaches the next and the biomass falls by roughly a factor of ten.',
             trap='B reverses the direction, since biomass falls rather than rises along the '
                  'chain.'),
        dict(claim='the ten percent figure is a convenience rather than a law',
             stem='Which quotation from the text most strongly supports the claim that the ten '
                  'percent figure is a convenience rather than a law?',
             opts=[Q('An animal that eats the plant uses most of what it takes in on moving, '
                     'breathing and staying warm'),
                   Q('Four or five steps is the practical limit for a food chain anywhere on '
                     'Earth'),
                   Q('A plant captures a small fraction of the sunlight falling on it'),
                   Q('measured transfer efficiencies range from about one percent to over '
                     'thirty')],
             key='D', moves={'A': 'restatement', 'B': 'underreach', 'C': 'true_not_asked'},
             why='A measured range running from about one percent to over thirty shows that ten '
                 'percent is a chosen convenience rather than a fixed quantity.',
             trap='A describes the loss inside one animal rather than the spread of measured '
                  'efficiencies.'),
        dict(carrier='It also explains why top predators are the first species lost when a habitat '
                     'shrinks, since they need the largest area to support the smallest number of '
                     'animals. A reserve drawn too small is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['able to hold a predator population indefinitely',
                   'able to hold the lower levels but not the top one',
                   'unable to support any plants at all',
                   'able to support four or five further steps'],
             key='B', moves={'A': 'wrong_direction', 'C': 'overreach', 'D': 'detail_swap'},
             why='Because the top level needs the largest area for the fewest animals, a small '
                 'reserve loses the predators first while the levels below it remain.',
             trap='C extends the loss to the plants, though the arithmetic bears hardest at the '
                  'top.'),
        dict(target='abundant',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('abundant'),
             opts=['present in great quantity', 'generous with resources', 'rich in nutrients',
                   'spread very thinly'],
             key='A', moves={'B': 'imported', 'C': 'imported', 'D': 'wrong_direction'},
             why='The sentence ranks grass, deer and wolves by how much of each there is, so the '
                 'word names quantity rather than generosity or nutritional value.',
             trap='D reverses the sense, since grass stands at the plentiful end of that ranking.'),
        dict(stem='Which choice best describes the function of the Yellowstone paragraph within '
                  'the text?',
             opts=['It introduces the ten percent figure for the first time',
                   'It concedes that the arithmetic fails in a real food web',
                   'It reports the counts of wolves, elk and beaver in the park',
                   'It applies the arithmetic to a case without appealing to design'],
             key='D', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'C': 'imported'},
             why='The paragraph says the same arithmetic explains the Yellowstone observations '
                 'without any appeal to design, and then traces the leverage downward through the '
                 'chain.',
             trap='C names material about the park that this text does not supply.'),
        dict(sibling='BIO-S04-L1',
             sibling_gloss='Text 2 is passage 14 of this book. It reports that thirty-one wolves '
                           'were released in Yellowstone in 1995 and 1996, that elk numbers on '
                           'the northern range fell by more than half, and that beaver colonies '
                           'rose from one in the early 1990s to nine by 2015.',
             stem='Text 1 explains the leverage a few predators can exert. Based on Text 2, what '
                  'would be added to that account?',
             opts=['Energy is lost at every transfer along the chain',
                   'Top predators are the first species lost when a habitat shrinks',
                   'The counted sizes of the change at each level of the chain',
                   'The park service released the wolves to restore the willows'],
             key='C', moves={'A': 'restatement', 'B': 'restatement', 'D': 'imported'},
             why='Text 2 gives numbers at three levels at once, so the leverage Text 1 derives '
                 'from the arithmetic appears there as a measured change in wolves, elk and '
                 'beaver.',
             trap='D supplies a motive for the release that neither text states.'),
        dict(carrier='The ten percent figure is a convenience rather than a law, and measured '
                     'transfer efficiencies range from about one percent to over thirty. ___ '
                     'cold-blooded animals do better than warm-blooded ones, because they spend '
                     'nothing on holding a temperature.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['All the same,', 'In particular,', 'Therefore,', 'By contrast,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'near_miss', 'D': 'wrong_direction'},
             why='The sentence picks out one part of the range just named, so the transition must '
                 'mark a particular case rather than a contrast or a consequence.',
             trap='D sets the cold-blooded animals against the range they belong inside.'),
        dict(carrier='That is why grass is abundant ___ deer are common, wolves are rare, and '
                     'animals that eat wolves effectively do not exist.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['abundant; deer', 'abundant deer', 'abundant: deer', 'abundant, deer'],
             key='D', moves={'A': 'wrong_mark', 'B': 'run_on', 'C': 'wrong_mark'},
             why='The clauses about grass, deer, wolves and what eats wolves form a single series, '
                 'so commas separate them rather than a semicolon or a colon.',
             trap='B leaves the clause about grass and the clause about deer with no mark between '
                  'them.'),
        dict(goal='explain why no animal eats wolves',
             notes=['About a tenth of the energy at one trophic level becomes available at the '
                    'next.',
                    'Biomass falls by roughly a factor of ten at each step.',
                    'Four or five steps is the practical limit for a food chain anywhere on '
                    'Earth.',
                    'Animals that eat wolves effectively do not exist.'],
             stem='The student wants to explain why no animal eats wolves. Which choice most '
                  'effectively uses relevant information from the notes to accomplish that goal?',
             opts=['Biomass falls by roughly a factor of ten at each step of the chain',
                   'Each step leaves about a tenth of the energy, so by the level above the wolf '
                   'there is too little left to support anything',
                   'Four or five steps is the practical limit for a food chain',
                   'Animals that eat wolves effectively do not exist anywhere on Earth'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice carries the tenfold loss up to the level above the wolf, which '
                 'is what explains the absence rather than merely restating it.',
             trap='D repeats the fact to be explained without giving any reason for it.'),
    ]))

# --- 5 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='BIO-S05-L2',
    ar=dict(
        khulasa='منحنيان يصفان معظم نموّ الجماعات. الأول نموّ أُسّي، أي نموّ تكون الزيادة '
                'فيه متناسبة مع العدد الموجود أصلًا، فثلاثون من الرنة تصير ستّين ثمّ مئة '
                'وعشرين، وتكبر الزيادة المطلقة كلّ سنة وإن لم يتغيّر معدّلها للحيوان الواحد. '
                'والثاني ينثني ويستوي عند حدّ يُسمّى سعة الحمل.',
        maana='المعنى أنّ الصورة المدرسية فيها خلل: فهي تفترض أنّ الجماعة تشعر بالنقص فورًا. '
              'والجماعات الحقيقية تتأخّر في الاستجابة، وهذا التأخّر هو الذي أفنى الرنة في '
              'جزيرة سانت ماثيو، إذ يبقى المولود في سنة طيّبة كبيرًا خصيبًا يتوالد سنوات '
              'بعدها.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الآلية: القطيع يتجاوز '
                  'سقفه ويأكل الرصيد الذي قام عليه السقف، فيهبط الانهيار إلى ما تحت '
                  'المستوى الذي كان سيستقرّ عنده، لأنّ المورد نفسه أُصيب.',
        sila='في اختبار سات يكثر السؤال عن وظيفة الجملة وعن التحوّل المنطقي وعن الاستنتاج '
             'من جملة ناقصة. والفخّ المتوقّع هنا أن يُقرأ المنحنى اللوجستي وصفًا كافيًا، مع '
             'أنّ النصّ يبيّن أنّ التأخّر يجعل الجماعات تتقلّب لا تستقرّ. ويقترن المقطع '
             'بالمقطع الخامس من المستوى الأول في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Fishery managers argue about the lags in their data',
                   'A delayed response to shortage is what turns a ceiling into an overshoot',
                   'Exponential growth continues until the habitat is full',
                   'Water fleas in a tank produce the same pattern'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'true_not_asked'},
             why='The text presents the two curves, names the textbook flaw as the assumption of '
                 'an immediate response, and traces the overshoot and crash to the delay.',
             trap='C states the textbook picture that the text goes on to correct.'),
        dict(stem='According to the text, what makes a reindeer born in a good year keep the herd '
                  'growing?',
             opts=['It leaves the island before the lichen fails',
                   'It eats less lichen than an animal born later',
                   'It responds at once to the shortage of food',
                   'It is large and fertile and breeds for several years afterward'],
             key='D', moves={'A': 'imported', 'B': 'imported', 'C': 'wrong_direction'},
             why='The text says such an animal is large, healthy and fertile and goes on breeding '
                 'for several years on the strength of that start.',
             trap='C names the immediate response that the text says real populations do not '
                  'make.'),
        dict(claim='the crash falls below the level the population would otherwise have held',
             stem='Which quotation from the text most strongly supports the claim that the crash '
                  'falls below the level the population would otherwise have held?',
             opts=[Q('The crash then falls below where the population would have settled, because '
                     'the resource itself has been damaged'),
                   Q('As food gets scarce, births fall or deaths rise, and the population settles '
                     'near that level'),
                   Q('Populations with delays of this kind do not settle. They fluctuate, and the '
                     'longer the delay, the wilder the swing'),
                   Q('Thirty reindeer producing offspring at a steady rate give sixty, then a '
                     'hundred and twenty')],
             key='A', moves={'B': 'near_miss', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation says the crash goes below the settling point and gives the reason, '
                 'which is damage to the resource the ceiling depended on.',
             trap='C describes the size of the swings rather than how far below the ceiling the '
                  'crash goes.'),
        dict(carrier="A quota set from last season's catch data is a quota set on a delay. A "
                     'manager working from such data is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['measuring the carrying capacity directly',
                   'certain to drive the stock to extinction',
                   'at risk of setting it above what the stock can bear',
                   'working from a figure that cannot be collected'],
             key='C', moves={'A': 'near_miss', 'B': 'overreach', 'D': 'wrong_direction'},
             why='The delay means the data describe a stock that has already changed, so a quota '
                 'drawn from them may exceed what the stock can now support.',
             trap='B turns a risk into a certainty that the text does not claim.'),
        dict(target='fluctuate',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('fluctuate'),
             opts=['drift slowly downward', 'swing up and down', 'hold near one level',
                   'grow without limit'],
             key='B', moves={'A': 'near_miss', 'C': 'wrong_direction', 'D': 'overreach'},
             why='The text says such populations do not settle but fluctuate, and that a longer '
                 'delay makes the swing wilder, so the word names movement up and down.',
             trap='C gives the behavior of a population without a delay, which is the opposite '
                  'case.'),
        dict(stem='Which choice best describes the function of the sentence naming a flaw in the '
                  'textbook picture?',
             opts=['It turns from the standard account to the correction the text will develop',
                   'It introduces the logistic curve for the first time',
                   'It abandons both curves as useless descriptions',
                   'It reports the counts taken on St Matthew Island'],
             key='A', moves={'B': 'detail_swap', 'C': 'overreach', 'D': 'imported'},
             why='The sentence comes after both curves have been described and names the '
                 'assumption that fails, which is what the rest of the text sets out to correct.',
             trap='C treats a correction to one curve as the rejection of both.'),
        dict(sibling='BIO-S05-L1',
             sibling_gloss='Text 2 is passage 15 of this book. It reports that twenty-nine reindeer '
                           'were put ashore on St Matthew Island in 1944, that the herd was about '
                           'thirteen hundred in 1957 and six thousand in 1963, that forty-two '
                           'animals were left in 1966, and that lichen grows back over decades.',
             stem='Text 1 explains the overshoot in terms of a delay. Based on Text 2, what would '
                  'be added to that account?',
             opts=['A reindeer born in a good year goes on breeding for years',
                   'Real populations respond late to a shortage of food',
                   'The lichen on the island grew back within a few years',
                   'The counted sizes of the herd before and after the crash'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'wrong_direction'},
             why='Text 2 supplies the numbers at each stage, so the delay that Text 1 describes as '
                 'a mechanism appears there as a measured rise and a measured collapse.',
             trap='C contradicts Text 2, where lichen takes decades rather than years to return.'),
        dict(carrier='Plotted on paper the line curves upward and keeps curving. ___ nothing grows '
                     'that way for long, because something eventually runs short.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['For instance,', 'As a result,', 'In reality,', 'Likewise,'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'wrong_direction'},
             why='The second sentence sets a limit against the unbounded curve just described, so '
                 'the transition must mark a contrast with the picture on paper rather than a '
                 'consequence of it.',
             trap='B reads the limit as following from the curve instead of cutting against it.'),
        dict(carrier='Real populations respond late ___ and the delay is what killed the reindeer '
                     'on St Matthew Island.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['late, and', 'late and', 'late; and', 'late and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the delay that killed the reindeer is independent, so the '
                 'conjunction joining it to the late response takes a comma before it.',
             trap='B leaves the two complete clauses joined with no mark at all.'),
        dict(goal='explain why a population can pass its own ceiling',
             notes=['The logistic curve flattens at the carrying capacity, the number the habitat '
                    'can support indefinitely.',
                    'The textbook picture assumes the population feels the shortage immediately.',
                    'A reindeer born in a good year goes on breeding for several years afterward.',
                    'The herd keeps growing after the lichen has begun to fail.'],
             stem='The student wants to explain why a population can pass its own ceiling. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['The logistic curve flattens at the number the habitat can support '
                   'indefinitely',
                   'The textbook picture assumes that a population feels a shortage immediately',
                   'Because animals born in good years keep breeding, the herd grows on after the '
                   'lichen has begun to fail and so passes the ceiling',
                   'A population that passes its ceiling will crash below where it started'],
             key='C', moves={'A': 'restatement', 'B': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice joins the lasting effect of a good year to the continued growth '
                 'after the food begins to fail, which is how the ceiling is passed.',
             trap='B names the flawed assumption without saying what the delay actually does.'),
    ]))

# --- 6 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='BIO-S06-L2',
    ar=dict(
        khulasa='الوباء تحكمه كمّيات قليلة، وعمل الصحّة العامّة في جُلّه قياسها ثمّ تغيير '
                'واحدة منها. الأولى طريق الانتقال: الكوليرا في الماء، والإنفلونزا في الهواء '
                'وعلى الأيدي، والملاريا في البعوض، وكلّ طريق يقترح تدخّلًا مختلفًا: مقبض '
                'مضخّة، أو كمامة، أو ناموسية.',
        maana='المعنى أنّ الثانية هي الجرعة، إذ تحتاج معظم الإصابات إلى أكثر من كائن واحد '
              'لتستقرّ، ولهذا يهمّ التخفيف. والثالثة عدد التكاثر، أي متوسّط ما يُحدثه المصاب '
              'الواحد من إصابات جديدة في جماعة بلا مناعة؛ فإن زاد على الواحد نما الوباء، وإن '
              'نقص عنه انقرض.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الآلية: الرابعة مدّة '
                  'الحضانة، وهي الفاصل بين الإصابة وأول عَرَض، وهي التي تحدّد هل يصلح '
                  'تتبّع المخالطين أصلًا أو لا يصلح.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة المقارنة بين '
             'حالتين. والفخّ المتوقّع هنا أن تُحسب هذه الأرقام صفاتٍ للكائن نفسه، مع أنّ '
             'النصّ يقول إنّ عدد التكاثر صفة لمرض في جماعة بعينها. ويقترن المقطع بالمقطع '
             'السادس من المستوى الأول في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Measles has a reproduction number of twelve to eighteen',
                   'John Snow could act on a map of Soho in 1854',
                   'Four measurable quantities govern an outbreak and decide what can be done',
                   'Early estimates of these numbers are the most reliable'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'wrong_direction'},
             why='The text says public health work consists largely of measuring a small number of '
                 'quantities and then changing one, and names route, dose, reproduction number '
                 'and incubation.',
             trap='A gives one value of one of the four quantities rather than the point about all '
                  'four.'),
        dict(stem='According to the text, what does a reproduction number below one mean for an '
                  'outbreak?',
             opts=['The outbreak dies out', 'The outbreak grows more slowly',
                   'Contact tracing becomes impossible',
                   'Immunity in the population is complete'],
             key='A', moves={'B': 'near_miss', 'C': 'imported', 'D': 'overreach'},
             why='The text says that if the reproduction number is above one the outbreak grows '
                 'and if it is below one the outbreak dies out, and that nothing else changes that '
                 'threshold.',
             trap='B softens the result to slower growth, though the text says the outbreak ends.'),
        dict(claim='an estimate of these quantities is tied to a particular population',
             stem='Which quotation from the text most strongly supports the claim that an estimate '
                  'of these quantities is tied to a particular population?',
             opts=[Q('Measles has a reproduction number in the range of twelve to eighteen, which '
                     'is why it needs very high vaccination coverage'),
                   Q('a reproduction number is a property of a disease in a particular '
                     'population, not of the organism alone'),
                   Q('Each of these numbers is estimated from data collected during an outbreak, '
                     'which means the early estimates are the worst ones'),
                   Q('A long incubation gives time to find and isolate contacts before they '
                     'infect others')],
             key='B', moves={'A': 'true_not_asked', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation says outright that the number belongs to a disease in a particular '
                 'population rather than to the organism, which is exactly the claim.',
             trap='C supports a different limit, that early estimates are poor, rather than '
                  'locality.'),
        dict(carrier='A short one, or an infection that spreads before symptoms appear, lets cases '
                     'disperse through a population faster than any tracing team can follow. A '
                     'tracing program aimed at such an infection is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['the most reliable tool available',
                   'certain to find every contact in time',
                   'better suited to a waterborne disease',
                   'always working behind the spread it means to stop'],
             key='D', moves={'A': 'wrong_direction', 'B': 'overreach', 'C': 'detail_swap'},
             why='If cases spread faster than a team can follow them, the team is by definition '
                 'arriving after the infections it is trying to prevent.',
             trap='B promises completeness that the stated speed of spread rules out.'),
        dict(target='disperse',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('disperse'),
             opts=['break up and weaken', 'settle in one place', 'scatter widely through it',
                   'be driven away by force'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'imported'},
             why='Cases disperse through a population faster than a team can follow, so the word '
                 'names their scattering widely rather than their weakening or settling.',
             trap='A takes the sense of thinning out, though the sentence is about speed of '
                  'spread.'),
        dict(stem='Which choice best describes the function of the comparison between cholera in '
                  '1854 and an airborne infection?',
             opts=['It introduces the reproduction number for the first time',
                   'It shows that the four quantities decide which methods can work',
                   'It argues that mapping is the best method in every case',
                   'It reports the figure of twelve to eighteen for measles'],
             key='B', moves={'A': 'detail_swap', 'C': 'overreach', 'D': 'detail_swap'},
             why='The text says Snow could act because the route was water and the source was '
                 'fixed, and that an airborne infection with a short incubation offers no '
                 'equivalent handle.',
             trap='C generalizes from one successful map to every outbreak.'),
        dict(sibling='BIO-S06-L1',
             sibling_gloss='Text 2 is passage 16 of this book. It reports that John Snow marked '
                           'every traced death on a street map of Soho in 1854, that the bars '
                           'piled up around one public pump on Broad Street, that brewery workers '
                           'who drank their own well water did not fall ill, and that deaths were '
                           'already falling when the handle came off.',
             stem='Text 1 lists the quantities that govern an outbreak. Based on Text 2, what '
                  'would be added to that account?',
             opts=['A worked case in which the route was established from exceptions',
                   'Cholera travels in water rather than in air',
                   'A short incubation defeats any contact tracing team',
                   'Snow measured the reproduction number of cholera in Soho'],
             key='A', moves={'B': 'restatement', 'C': 'restatement', 'D': 'imported'},
             why='Text 2 reports the brewery workers and the widow in Hampstead, so the route that '
                 'Text 1 names as a quantity was fixed there by chasing exceptions.',
             trap='B repeats a fact Text 1 already gives about the route of cholera.'),
        dict(carrier='The second is dose, since most infections require more than one organism to '
                     'establish, which is why dilution matters. ___ a leaking cesspit beside a '
                     'well is worse than one at a distance.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'All the same,', 'That is to say,',
                   'For the same reason,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'restatement'},
             why='The sentence gives a second thing that follows from the need for more than one '
                 'organism, so the transition must carry the same reason forward rather than '
                 'oppose or restate it.',
             trap='A sets the cesspit example against the point about dilution that it '
                  'illustrates.'),
        dict(carrier='Cholera travels in water, influenza in air and on hands, malaria in '
                     'mosquitoes ___ and each route suggests a different intervention.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['mosquitoes and', 'mosquitoes, and', 'mosquitoes; and', 'mosquitoes and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about each route suggesting a different intervention is independent, '
                 'so the conjunction joining it to the list of routes takes a comma before it.',
             trap='A leaves the list of routes and the clause about interventions with no mark '
                  'between them.'),
        dict(goal='explain why mapping worked in Soho but would not work everywhere',
             notes=['Cholera travels in water and influenza in air and on hands.',
                    'A long incubation gives time to find and isolate contacts before they infect '
                    'others.',
                    'Snow could act on a map in 1854 because cholera is waterborne and the source '
                    'was fixed in one place.',
                    'An airborne infection with a two-day incubation offers no equivalent handle.'],
             stem='The student wants to explain why mapping worked in Soho but would not work '
                  'everywhere. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Cholera travels in water while influenza travels in air and on hands',
                   'A long incubation gives time to find and isolate contacts',
                   'An airborne infection with a two-day incubation offers no equivalent handle',
                   'A map worked because the source was waterborne and fixed in one place, which '
                   'an airborne infection with a two-day incubation never is'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'near_miss'},
             why='Only this choice pairs the fixed waterborne source that made the map work with '
                 'the airborne case that offers no equivalent handle, which is what the goal asks '
                 'for.',
             trap='C names the case where mapping fails without saying why the Soho map '
                  'succeeded.'),
    ]))

# --- 7 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='BIO-S07-L2',
    ar=dict(
        khulasa='النيتروجين أربعة أخماس الهواء وهو في تلك الصورة شبه عديم النفع، لأنّ ذرّتيه '
                'مرتبطتان ارتباطًا شديدًا لا تفكّه إلّا كائنات قليلة جدًّا. فالتثبيت، أي '
                'تحويل غاز النيتروجين إلى صورة تنتفع بها الأحياء، هو الباب الذي لا بدّ أن '
                'يمرّ منه كلّ نيتروجين حيويّ.',
        maana='المعنى أنّ النيتروجين بعد تثبيته يتحرّك: تأخذه النباتات بجذورها نترات أو '
              'أمونيوم فتبنيه بروتينًا، وتأكلها الحيوانات، ثمّ تموت كلّها فتحلّلها بكتيريا '
              'أخرى فتعيده إلى التراب، وتُتمّ طائفة ثالثة الدائرة إذ تردّه غازًا إلى الجوّ.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الآلية: الدائرة مغلقة '
                  'لكنّ الحقل ليس نظامًا مغلقًا، فله ثلاثة منافذ تهمّ كلّ مزارع: الحصاد، '
                  'والغسل تحت منطقة الجذور، والفقد الغازي.',
        sila='في اختبار سات يكثر السؤال عن وظيفة الجملة وعن الدليل وعن إكمال النصّ إكمالًا '
             'منطقيًّا. والفخّ المتوقّع هنا أن يُقرأ غلق الدائرة غلقًا للحقل أيضًا، مع أنّ '
             'النصّ ينصّ على خلاف ذلك. ويقترن المقطع بالمقطع السابع من المستوى الأول في '
             'أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Soil tests now measure what is there before a field is dressed',
                   'Nitrogen gas is directly usable by most living things',
                   'The Haber process has fixed nitrogen industrially since 1913',
                   'A closed cycle runs through a field that leaks nitrogen three ways'],
             key='D', moves={'A': 'underreach', 'B': 'wrong_direction', 'C': 'true_not_asked'},
             why='The text traces the cycle from fixation back to gas and then says a field is not '
                 'a closed system, naming harvest, leaching and gas losses as the three leaks.',
             trap='B reverses the opening claim, which is that nitrogen gas is almost useless in '
                  'that form.'),
        dict(stem='According to the text, which organisms complete the circle by returning '
                  'nitrogen to the air?',
             opts=['The bacteria living in the root nodules of clover',
                   'A third group of bacteria in the soil',
                   'The plants that take up nitrate through their roots',
                   'The animals that eat the plants and then die'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The text says a third group of bacteria completes the circle by turning soil '
                 'nitrogen back into gas, which returns to the atmosphere.',
             trap='A names the bacteria that fix nitrogen rather than those that release it.'),
        dict(claim='the Norfolk rotation worked because the losses could be matched',
             stem='Which quotation from the text most strongly supports the claim that the Norfolk '
                  'rotation worked because the losses could be matched?',
             opts=[Q('Plants take it up through their roots as nitrate or ammonium and build it '
                     'into protein'),
                   Q('Since 1913 the Haber process has fixed nitrogen industrially, using high '
                     'pressure, high temperature and a great deal of gas'),
                   Q('the Norfolk rotation worked because clover and grazing animals put back '
                     'roughly what the wheat took out'),
                   Q('Something close to half the nitrogen in a person alive today passed through '
                     'that process')],
             key='C', moves={'A': 'true_not_asked', 'B': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation names the balance directly: clover and grazing animals returned '
                 'roughly what the wheat removed, which is the matching the claim describes.',
             trap='B names the industrial source of fixed nitrogen rather than the rotation.'),
        dict(carrier='The harvest removes nitrogen in the grain and takes it away in a truck. A '
                     'field cropped year after year without return is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['losing nitrogen at a rate that can be estimated',
                   'closed in the same sense as the cycle itself',
                   'certain to grow nothing at all within a year',
                   'gaining nitrogen from lightning at the same rate'],
             key='A', moves={'B': 'wrong_direction', 'C': 'overreach', 'D': 'detail_swap'},
             why='Three named leaks each remove a measurable amount, and the text says the rate of '
                 'depletion in such a field can be estimated.',
             trap='B calls the field closed although the text has just said it is not.'),
        dict(target='depleted',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('depleted'),
             opts=['made heavier by rain', 'cleared of weeds', 'built up again',
                   'drawn down in supply'],
             key='D', moves={'A': 'imported', 'B': 'imported', 'C': 'wrong_direction'},
             why='A field cropped without return loses nitrogen through harvest, leaching and gas, '
                 'so to be depleted is to have its supply drawn down.',
             trap='C reverses the sense, since the field in question is losing nitrogen rather '
                  'than gaining it.'),
        dict(stem='Which choice best describes the function of the sentence that calls fixation a '
                  'gate?',
             opts=['It introduces the three leaks that matter to a grower',
                   'It concedes that the cycle cannot be traced at all',
                   'It explains why one step controls all the rest of the cycle',
                   'It reports the pressure and temperature the Haber process needs'],
             key='C', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'D': 'imported'},
             why='The sentence follows the statement that very few living things can break the '
                 'molecule apart, and names fixation as the step every biological use of nitrogen '
                 'must pass through.',
             trap='A names material that comes later, after the cycle has been described.'),
        dict(sibling='BIO-S07-L1',
             sibling_gloss='Text 2 is passage 17 of this book. It reports that wheat sown after '
                           'clover beats wheat sown after wheat by a third or more, that the '
                           'Norfolk four-course rotation of turnips, barley, clover and wheat '
                           'became standard in the eighteenth century, and that yields roughly '
                           'doubled over that century.',
             stem='Text 1 sets out the steps and the leaks of the cycle. Based on Text 2, what '
                  'would be added to that account?',
             opts=['Bacteria in the root nodules of clover fix nitrogen from the air',
                   'The measured size of the gain that a rotation produced',
                   'Nitrate is highly soluble and washes below the root zone',
                   'The rotation was adopted because the chemistry was understood'],
             key='B', moves={'A': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 reports a yield advantage of a third or more and a doubling over the '
                 'century, which puts a number on the balance that Text 1 describes as chemistry.',
             trap='A repeats the fixation step that Text 1 has already set out.'),
        dict(carrier='Once fixed, the nitrogen moves. ___ plants take it up through their roots as '
                     'nitrate or ammonium and build it into protein.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['To begin with,', 'By contrast,', 'Even so,', 'As a result,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The sentence opens the account of the nitrogen moving through plants, animals '
                 'and bacteria in order, so the transition must mark the first step rather than a '
                 'contrast.',
             trap='D reads the uptake by plants as caused by the movement rather than as its first '
                  'stage.'),
        dict(carrier='The cycle is closed ___ a field is not a closed system.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['closed, a field', 'closed a field', 'closed, but a field',
                   'closed; but, a field'],
             key='C', moves={'A': 'comma_splice', 'B': 'run_on', 'D': 'misplaced'},
             why='The clause about the field not being a closed system is independent and stands '
                 'against the clause about the cycle, so it needs a comma and a conjunction.',
             trap='A joins the two independent clauses with a comma alone, which is a splice.'),
        dict(goal='explain why a cropped field loses nitrogen although the cycle is closed',
             notes=['Fixation is the gate through which all biological nitrogen must pass.',
                    'The harvest removes nitrogen in the grain and takes it away in a truck.',
                    'Leaching washes dissolved nitrogen below the root zone, and nitrate is '
                    'highly soluble.',
                    'Gas losses take a further share.'],
             stem='The student wants to explain why a cropped field loses nitrogen although the '
                  'cycle is closed. Which choice most effectively uses relevant information from '
                  'the notes to accomplish that goal?',
             opts=['The cycle returns nitrogen to the air, but harvest, leaching and gas losses '
                   'carry it off the field, so what is closed overall is open here',
                   'Fixation is the gate through which all biological nitrogen must pass',
                   'The harvest removes nitrogen in the grain and takes it away in a truck',
                   'Nitrate is highly soluble and washes below the root zone after rain'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice sets the three leaks against the closed cycle, which is what '
                 'the apparent contradiction in the goal requires.',
             trap='C names one leak of the three and so does not answer the question about the '
                  'cycle.'),
    ]))

# --- 8 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='BIO-S08-L2',
    ar=dict(
        khulasa='ضوء الشمس يصل في معظمه ضوءًا مرئيًّا، يمرّ في الجوّ بامتصاص قليل فيسخّن '
                'الأرض، ثمّ تُعيد الأرض إشعاع تلك الطاقة إلى أعلى بأطوال موجية أكبر بكثير، '
                'في المدى تحت الأحمر، وهو المدى الذي يشعّ به كلّ سطح دافئ. والجوّ ليس '
                'شفّافًا لتلك الأطوال.',
        maana='المعنى أنّ الآلية ليست بطّانية ولا مصيدة، بل تأخير. فالطاقة لا تزال تخرج من '
              'الكوكب، ولا بدّ أن تخرج، وإلّا لصعدت الحرارة بلا حدّ. والذي يتغيّر بارتفاع '
              'تركيز الغاز الماصّ هو الارتفاع الذي يفلت منه الإشعاع أخيرًا، ومعه حرارة '
              'السطح اللازمة لتوازن الحساب.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الآلية: أثر كلّ وحدة '
                  'مضافة أصغر من أثر ما قبلها لأنّ أقوى أجزاء المدى مُشبعة، ومدّة البقاء '
                  'والتغذية الراجعة تحدّدان مقدار ما يهمّ.',
        sila='في اختبار سات يكثر السؤال عن الدليل وعن التحوّل المنطقي وعن وظيفة الجملة التي '
             'تنفي صورة شائعة. والفخّ المتوقّع هنا أن يُقال إنّ الطاقة تُحتجز فلا تخرج، مع '
             'أنّ النصّ ينصّ على خروجها. ويقترن المقطع بالمقطع الثامن من المستوى الأول في '
             'أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The effect is a delay in escape, not a blanket or a trap',
                   'Tyndall used a brass tube, a heat source and a thermopile',
                   'Added units of the gas each have a larger effect than the last',
                   'Methane breaks down in about a decade in the atmosphere'],
             key='A', moves={'B': 'true_not_asked', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text says the mechanism is not a blanket and not a trap but a delay, and '
                 'explains that what changes is the height from which radiation finally escapes.',
             trap='C reverses the stated diminishing effect of each added unit of the gas.'),
        dict(stem='According to the text, what changes when the concentration of an absorbing gas '
                  'rises?',
             opts=['The wavelength at which the ground radiates its energy',
                   'The amount of energy that finally leaves the planet',
                   'The height from which the escaping radiation gets away',
                   'The residence time of a molecule in the atmosphere'],
             key='C', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='The text says what changes is the height in the atmosphere from which the '
                 'escaping radiation finally gets away, and therefore the surface temperature '
                 'needed to balance the books.',
             trap='B contradicts the text, which insists that energy still leaves the planet and '
                  'must.'),
        dict(claim='the warming is not a simple matter of adding more gas',
             stem='Which quotation from the text most strongly supports the claim that the warming '
                  'is not a simple matter of adding more gas?',
             opts=[Q('Water vapor and carbon dioxide absorb strongly in parts of the infrared '
                     'band'),
                   Q('Energy still leaves the planet, and must, or the temperature would rise '
                     'without limit'),
                   Q('John Tyndall measured the absorption of several gases in a laboratory in '
                     '1859'),
                   Q('The effect of each added unit is smaller than the last, because the '
                     'strongest parts of the band are already saturated')],
             key='D', moves={'A': 'true_not_asked', 'B': 'near_miss', 'C': 'true_not_asked'},
             why='The quotation says each added unit does less than the one before, because the '
                 'strongest parts of the band are saturated, which is what makes the arithmetic '
                 'not simple.',
             trap='B supports a different point, that energy must still escape, rather than '
                  'diminishing returns.'),
        dict(carrier='The second is feedback: a warmer atmosphere holds more water vapor, and '
                     'water vapor is itself a strong absorber in the infrared. A small warming '
                     'from another gas can therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['be cancelled by the extra water vapor',
                   'be enlarged by the water vapor it brings in',
                   'be measured in a laboratory brass tube',
                   'raise the temperature without any limit'],
             key='B', moves={'A': 'wrong_direction', 'C': 'detail_swap', 'D': 'overreach'},
             why='A warmer atmosphere holds more of a gas that absorbs strongly in the same band, '
                 'so the first warming brings in a second absorber and is amplified.',
             trap='A reverses the feedback, treating added water vapor as a brake rather than an '
                  'amplifier.'),
        dict(target='inhabit',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('inhabit'),
             opts=['remain present in', 'make a home among', 'pass quickly through',
                   'fill completely'],
             key='A', moves={'B': 'near_miss', 'C': 'wrong_direction', 'D': 'overreach'},
             why='Residence time is how long a molecule may inhabit the air before being taken up '
                 'elsewhere, so the word measures how long it remains present.',
             trap='B takes the usual sense of living somewhere, which a molecule cannot do.'),
        dict(stem='Which choice best describes the function of the sentence denying that the '
                  'effect is a blanket?',
             opts=['It introduces the two further quantities that follow',
                   'It concedes that the mechanism cannot be described',
                   'It reports the result of the laboratory work of 1859',
                   'It clears away a familiar image before the real account'],
             key='D', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'C': 'imported'},
             why='The sentence comes after the absorption has been described and rules out two '
                 'common images, which lets the text name the mechanism as a delay instead.',
             trap='C names the historical measurement rather than the correction being made.'),
        dict(sibling='BIO-S08-L1',
             sibling_gloss='Text 2 is passage 18 of this book. It reports that an instrument near '
                           'the top of Mauna Loa has measured carbon dioxide every hour since '
                           '1958, that the readings wobble by about six parts per million each '
                           'year as northern plants grow and die back, and that the level climbed '
                           'from about three hundred and fifteen to over four hundred.',
             stem='Text 1 explains why the gas holds heat. Based on Text 2, what would be added to '
                  'that account?',
             opts=['Carbon dioxide absorbs strongly in parts of the infrared band',
                   'A substantial fraction stays in circulation for centuries',
                   'A continuous record of the rising concentration itself',
                   'The yearly wobble is caused by the absorption of infrared'],
             key='C', moves={'A': 'restatement', 'B': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 supplies an hourly measurement of how much of the gas is actually there, '
                 'which the mechanism in Text 1 explains the consequences of but does not '
                 'measure.',
             trap='D invents a cause for the yearly wobble that Text 2 attributes to growing '
                  'plants.'),
        dict(carrier='Energy still leaves the planet, and must, or the temperature would rise '
                     'without limit. ___ what changes when the concentration of an absorbing gas '
                     'rises is the height from which the escaping radiation finally gets away.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Likewise,', 'Instead,', 'As a result,', 'In short,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'near_miss', 'D': 'restatement'},
             why='The second sentence names what does change in place of what the first says '
                 'cannot, so the transition must mark a substitution rather than a likeness or a '
                 'summary.',
             trap='C reads the change of height as following from the escape of energy rather '
                  'than replacing it.'),
        dict(carrier='The mechanism is therefore not a blanket and not a trap ___ it is a delay.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['trap, it', 'trap it', 'trap, and, it', 'trap. It'],
             key='D', moves={'A': 'comma_splice', 'B': 'run_on', 'C': 'misplaced'},
             why='The clause saying the mechanism is a delay is a complete sentence, so a period '
                 'separates it from the clause denying the blanket and the trap.',
             trap='A splices two complete sentences together with a comma.'),
        dict(goal='explain why the record shows no downward step after a recession',
             notes=['Methane breaks down in about a decade.',
                    'Carbon dioxide is partly absorbed by the ocean within years.',
                    'A substantial fraction of it stays in circulation for centuries.',
                    'The Mauna Loa curve has no downward step after any recession.'],
             stem='The student wants to explain why the record shows no downward step after a '
                  'recession. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Methane breaks down in about a decade in the atmosphere',
                   'Because a substantial fraction stays in circulation for centuries, a few lean '
                   'years leave no mark on the curve',
                   'Carbon dioxide is partly absorbed by the ocean within years',
                   'The Mauna Loa curve has no downward step after any recession'],
             key='B', moves={'A': 'true_not_asked', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice joins the long residence of much of the gas to the absence of a '
                 'step, which is the connection the goal asks for.',
             trap='D repeats the fact to be explained without supplying the reason for it.'),
    ]))

# --- 9 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='BIO-S09-L2',
    ar=dict(
        khulasa='سطح الأرض مكسور إلى نحو اثنتي عشرة صفيحة كبيرة وعشرات صغيرة، وكلّها متحرّكة '
                'بسرعة بين سنتيمتر وعشرة سنتيمترات في السنة. ولأنّ الصفائح لا تتراكب ولا '
                'تترك فراغًا، فكلّ ما يُهمّ يحدث عند حوافّها، والحوافّ ثلاثة أنواع لا أكثر.',
        maana='المعنى أنّ الحافّة التي تتباعد عندها الصفيحتان تصعد فيها الصهارة فتتجمّد على '
              'الجانبين فتبني قشرة جديدة؛ والحافّة التي تتقارب عندها تنزل إحداهما تحت الأخرى '
              'فتحفر خندقًا وتغذّي صفًّا من البراكين؛ والحافّة التي تتزحلق عندها لا يُصنع '
              'فيها شيء ولا يُهدم، وإنّما تتفرّج الحركة زلازل.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الآلية: الأنواع الثلاثة '
                  'تفسّر توزّع كلّ سلسلة جبال وبركان وزلزال كبير، وتُقيم مسابقة بين الرفع '
                  'والتعرية، وارتفاع السلسلة حصيلة المعدّلين.',
        sila='في اختبار سات يكثر السؤال عن التصنيف وعن وظيفة الجملة التي تمهّد له وعن إكمال '
             'النصّ. والفخّ المتوقّع هنا أن يُنسب الارتفاع المستمرّ إلى الأبلاش، مع أنّ '
             'النصّ يقول إنّ الهيمالايا هي التي ما زالت ترتفع. ويقترن المقطع بالمقطع التاسع '
             'من المستوى الأول في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Satellite positioning measures plate motion to about a millimeter a year',
                   'Three kinds of plate edge account for nearly every large feature',
                   'Plates move at between one and ten centimeters a year',
                   'The Appalachians are still rising because their collision continues'],
             key='B', moves={'A': 'true_not_asked', 'C': 'underreach', 'D': 'wrong_direction'},
             why='The text says the plates cannot overlap or leave gaps, so everything happens at '
                 'their edges, and that the three kinds of edge account for nearly every range, '
                 'volcano and major earthquake.',
             trap='D moves the continuing collision to the wrong range, since it is the Himalaya '
                  'that is rising.'),
        dict(stem='According to the text, what happens where two plates slide past one another?',
             opts=['A line of volcanoes is fed from below',
                   'New crust is built from rising magma',
                   'Rock is lifted at a few millimeters a year',
                   'Nothing is made or destroyed and earthquakes release the motion'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'imported'},
             why='The text says that where two plates slide past one another nothing is made or '
                 'destroyed and the motion is released in earthquakes along a fault.',
             trap='B describes a spreading edge rather than one where the plates slide past.'),
        dict(claim='the height of a range is the outcome of a contest between two rates',
             stem='Which quotation from the text most strongly supports the claim that the height '
                  'of a range is the outcome of a contest between two rates?',
             opts=[Q('Collision lifts rock upward at a few millimeters a year, while rain, ice '
                     'and rivers erode it downward'),
                   Q('The Himalaya is still rising because the collision has not finished'),
                   Q('Satellite positioning now measures plate motion directly'),
                   Q('The descending plate drags the sea floor into a deep trench, melts at '
                     'depth, and feeds a line of volcanoes above it')],
             key='A', moves={'B': 'underreach', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation names both rates at once, the lifting by collision and the wearing '
                 'down by rain, ice and rivers, which is the contest the claim describes.',
             trap='B gives one range still winning the contest rather than the contest itself.'),
        dict(carrier='The Appalachians, whose collision ended long ago, are the worn remains of '
                     'something that once stood as high. The difference between the two ranges is '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['a difference in the rate at which rock erodes',
                   'a sign that the Appalachians were never very high',
                   'a difference in whether the lifting is still going on',
                   'a result of measurement to about a millimeter a year'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='Both ranges are worn down by the same agents, so what separates them is that the '
                 'Himalayan collision continues while the Appalachian one ended long ago.',
             trap='B denies the text, which calls the range the remains of something that stood as '
                  'high.'),
        dict(target='erode',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('erode'),
             opts=['weaken a claim', 'wear away over time', 'lift in slow steps',
                   'cover with new rock'],
             key='B', moves={'A': 'imported', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='Rain, ice and rivers erode rock downward against the lifting of collision, so '
                 'the word names the wearing away of the range over time.',
             trap='C reverses the direction, since the eroding works against the lifting.'),
        dict(stem='Which choice best describes the function of the sentence about overlapping and '
                  'gaps?',
             opts=['It explains why the edges are where everything happens',
                   'It introduces the three kinds of edge by name',
                   'It reports the speed at which the plates move',
                   'It concedes that the plates sometimes do overlap'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='Because the plates can neither overlap nor leave gaps, all the motion must be '
                 'taken up at their boundaries, which is what the sentence establishes before the '
                 'three kinds are named.',
             trap='B treats the sentence as the naming that only comes afterward.'),
        dict(sibling='BIO-S09-L1',
             sibling_gloss='Text 2 is passage 19 of this book. It reports that the valley at '
                           'Thingvellir in Iceland lies between the torn edges of a crack in the '
                           'crust, that a visitor can walk along the floor between them, that the '
                           'ground pulls apart at about an inch a year, and that surveyors have '
                           'measured the width since the 1990s.',
             stem='Text 1 classifies the three kinds of plate edge. Based on Text 2, what would be '
                  'added to that account?',
             opts=['Magma rises into the gap and freezes onto both sides',
                   'Plates move at between one and ten centimeters a year',
                   'Iceland lies above a subduction zone rather than a ridge',
                   'A spreading edge seen at one place that a visitor can walk'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'wrong_direction'},
             why='Text 2 puts a reader inside one of the three kinds of edge, where the torn walls '
                 'and the measured rate make the spreading boundary of Text 1 a visible place.',
             trap='C contradicts both texts, which describe Thingvellir as a place where plates '
                  'move apart.'),
        dict(carrier='Where two plates move apart, as at Thingvellir, magma rises into the gap and '
                     'freezes onto both sides. ___ where two plates move toward each other, one '
                     'of them usually goes down beneath the other.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['For that reason,', 'In other words,', 'By contrast,', 'Likewise,'],
             key='C', moves={'A': 'near_miss', 'B': 'restatement', 'D': 'wrong_direction'},
             why='The sentence turns from edges where plates move apart to edges where they move '
                 'together, so the transition must mark the opposition between the two cases.',
             trap='D treats the two kinds of edge as alike when they produce opposite results.'),
        dict(carrier='Where two plates slide past one another, as in California, nothing is made '
                     'or destroyed ___ and the motion is released in earthquakes along a fault.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['destroyed, and', 'destroyed and', 'destroyed; and', 'destroyed and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the motion being released in earthquakes is independent, so the '
                 'conjunction joining it to the clause about nothing being made takes a comma '
                 'before it.',
             trap='B leaves the two complete clauses about California joined with no mark at all.'),
        dict(goal='explain why only three kinds of boundary are needed',
             notes=['About a dozen large plates and several dozen small ones are all moving.',
                    'The plates cannot overlap and cannot leave gaps.',
                    'Everything interesting happens at their edges.',
                    'The three kinds of edge are moving apart, moving together and sliding past.'],
             stem='The student wants to explain why only three kinds of boundary are needed. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['About a dozen large plates and several dozen small ones are all moving',
                   'Everything interesting happens at the edges of the plates',
                   'Since the plates can neither overlap nor leave gaps, two edges can only move '
                   'apart, move together or slide past',
                   'The three kinds of edge are moving apart, moving together and sliding past'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'restatement'},
             why='Only this choice derives the list of three from the constraint that the plates '
                 'can neither overlap nor leave gaps, which is what makes the list complete.',
             trap='D gives the three kinds without saying why there can be no fourth.'),
    ]))

# --- 10 ------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='BIO-S10-L2',
    ar=dict(
        khulasa='الماء ناقل للحرارة أفضل من الهواء بكثير، ولهذا يحسّ السابح بالبرد في درجة '
                'تبدو معتدلة على البرّ. والمقارنة نفسها تفسّر لماذا يُفقد جليد أنتاركتيكا من '
                'أسفل لا من أعلى. والجليد الذائب يمتصّ طاقة كبيرة دون أن تتغيّر درجته، وهي '
                'الحرارة الكامنة.',
        maana='المعنى أنّ كتلة من ماء مالح دافئ نسبيًّا تقبع في العمق حول غرب أنتاركتيكا تحت '
              'طبقة سطحية أبرد وأعذب، وأنماط الريح تحدّد كم يُدفع منها إلى الرفّ القاريّ '
              'وإلى التجاويف تحت الجليد الطافي، فيذيب أسفله، ويصعد ماء الذوبان الأعذب فيجرّ '
              'وراءه ماءً دافئًا جديدًا.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الآلية: قاع البحر هو الذي '
                  'يحدّد النهاية، فسطح الصخر تحت ثوايتس يزداد عمقًا نحو الداخل، وهو ما '
                  'يُسمّى الميل المعاكس، فكلّ تراجع يضع الجبهة في ماء أعمق وجليد أسمك '
                  'فيتسارع التراجع.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة المقارنة '
             'التمهيدية. والفخّ المتوقّع هنا أن يُقال إنّ الفقد من أعلى، مع أنّ النصّ يبيّن '
             'أنّه من أسفل. ويقترن المقطع بالمقطع العاشر من المستوى الأول في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The bed under the ice was mapped by aircraft carrying radar',
                   'Antarctic ice is being lost from above rather than from below',
                   'Warm water and the shape of the bed together drive the retreat',
                   'Melting ice absorbs energy without changing temperature'],
             key='C', moves={'A': 'true_not_asked', 'B': 'wrong_direction', 'D': 'underreach'},
             why='The text explains why water rather than air removes the ice and then says the '
                 'retrograde slope makes each retreat expose thicker ice, so the retreat '
                 'accelerates.',
             trap='B reverses the text, which says the loss happens from below rather than from '
                  'above.'),
        dict(stem='According to the text, what does a retrograde slope mean for the grounding '
                  'line?',
             opts=['Every retreat puts the front into deeper water',
                   'Every retreat slows the following retreat down',
                   'The grounding line cannot move inland at all',
                   'The melt water sinks instead of rising'],
             key='A', moves={'B': 'wrong_direction', 'C': 'overreach', 'D': 'detail_swap'},
             why='The text says the rock surface deepens as it goes inland, so each retreat of the '
                 'grounding line puts the front into deeper water where the ice is thicker.',
             trap='B describes a slope of the opposite sense, which the text says would stop the '
                  'retreat.'),
        dict(claim='the reason Thwaites is watched so closely is a fact about its bed',
             stem='Which quotation from the text most strongly supports the claim that the reason '
                  'Thwaites is watched so closely is a fact about its bed?',
             opts=[Q('Wind patterns determine how much of it is pushed up onto the continental '
                     'shelf'),
                   Q('That single geometrical fact is why Thwaites is studied more closely than '
                     'glaciers that are losing ice faster today'),
                   Q('Water is a far better carrier of heat than air, which is why a swimmer '
                     'feels cold at a temperature that feels mild on land'),
                   Q('Gaps in that map are still the largest source of uncertainty in the '
                     'projections')],
             key='B', moves={'A': 'true_not_asked', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation names the geometry of the bed as the reason the glacier is studied '
                 'more closely than ones losing ice faster, which is the claim.',
             trap='D names the largest uncertainty in the map rather than the reason for the '
                  'attention.'),
        dict(carrier='Once there it melts the underside, and the fresh melt water, being lighter, '
                     'rises along the sloping ice and draws more warm water in behind it. The '
                     'melting therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['stops as soon as the melt water forms',
                   'depends on the air temperature above',
                   'is limited by the strength of the wind alone',
                   'keeps the current that causes it running'],
             key='D', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'C': 'near_miss'},
             why='The rising melt water pulls more warm water into the cavity, so the melting '
                 'sustains the very circulation that produces it.',
             trap='A reverses the described effect, since the melt water draws more warm water '
                  'in.'),
        dict(target='migrate',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('migrate'),
             opts=['travel between seasons', 'settle in a new place', 'move steadily along',
                   'rise toward the surface'],
             key='C', moves={'A': 'imported', 'B': 'imported', 'D': 'wrong_direction'},
             why='The circulation is self-sustaining while the warm water continues to migrate '
                 'shoreward, so the word names its steady movement rather than a seasonal '
                 'journey.',
             trap='A takes the sense used of animals, which the shoreward flow of water does not '
                  'share.'),
        dict(stem='Which choice best describes the function of the comparison with a swimmer?',
             opts=['It introduces the retrograde slope for the first time',
                   'It makes a familiar case of the point about water and air',
                   'It argues that air temperature governs the melting',
                   'It reports the depth to which the aircraft radar reached'],
             key='B', moves={'A': 'detail_swap', 'C': 'wrong_direction', 'D': 'imported'},
             why='The opening sentence uses the swimmer to establish that water carries heat far '
                 'better than air, which is the comparison the rest of the explanation rests on.',
             trap='C reverses the point, since the text uses the comparison to rule air out.'),
        dict(sibling='BIO-S10-L1',
             sibling_gloss='Text 2 is passage 20 of this book. It reports that Thwaites reaches '
                           'the sea along a front about eighty miles wide, that the grounding line '
                           'retreated about nine miles between 1992 and 2011 in one sector, and '
                           'that a team drilled through six hundred meters of ice in 2019 to '
                           'measure the melting directly.',
             stem='Text 1 explains why the water rather than the air does the melting. Based on '
                  'Text 2, what would be added to that account?',
             opts=['A measured retreat and a direct measurement of the melting',
                   'Air temperatures there stay below freezing for most of the year',
                   'The warm water is about two degrees above the freezing point',
                   'The drilling in 2019 measured the shape of the bed'],
             key='A', moves={'B': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 gives nine miles of retreat between two dated years and a hole drilled to '
                 'the cavity, so the mechanism of Text 1 is matched there by numbers taken in the '
                 'field.',
             trap='D misreports Text 2, where the drilling measured melting and aircraft mapped '
                  'the bed.'),
        dict(carrier='Around West Antarctica a mass of relatively warm salty water sits at depth, '
                     'below a colder and fresher surface layer. ___ wind patterns determine how '
                     'much of it is pushed up onto the continental shelf and into the cavities '
                     'beneath the floating ice.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['All the same,', 'In other words,', 'By contrast,', 'From there,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'restatement', 'C': 'wrong_direction'},
             why='The second sentence takes the next step, from where the warm water sits to how '
                 'much of it is pushed onto the shelf, so the transition must carry the sequence '
                 'forward.',
             trap='B treats the step about wind patterns as a restatement of where the water '
                  'lies.'),
        dict(carrier='The sea bed decides how this ends ___ under Thwaites the rock surface '
                     'deepens as it goes inland.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['ends, under', 'ends. Under', 'ends under', 'ends, and, under'],
             key='B', moves={'A': 'comma_splice', 'C': 'run_on', 'D': 'misplaced'},
             why='The clause about the rock surface deepening inland is a complete sentence, so a '
                 'period separates it from the clause about the sea bed deciding the outcome.',
             trap='A splices the two complete sentences together with a comma.'),
        dict(goal='explain why a current only two degrees above freezing matters',
             notes=['Water is a far better carrier of heat than air.',
                    'Melting ice absorbs a great deal of energy without changing temperature, a '
                    'quantity called latent heat.',
                    'A current two degrees above freezing can remove an enormous amount of ice if '
                    'it keeps arriving.',
                    'The fresh melt water rises along the sloping ice and draws more warm water '
                    'in behind it.'],
             stem='The student wants to explain why a current only two degrees above freezing '
                  'matters. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Water is a far better carrier of heat than air, as a swimmer can feel',
                   'Melting ice absorbs a great deal of energy without changing temperature',
                   'The fresh melt water rises along the ice and draws more warm water in behind '
                   'it',
                   'Water carries heat far better than air, and the melting keeps drawing more of '
                   'it in, so a small margin arriving steadily removes a great deal of ice'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'true_not_asked'},
             why='Only this choice combines the carrying power of water with the current that '
                 'renews itself, which is what makes two degrees enough to matter.',
             trap='B names the energy absorbed without saying why a small margin is enough.'),
    ]))

if __name__ == '__main__':
    qemit.emit(FIELD, LEVEL, SETS)
