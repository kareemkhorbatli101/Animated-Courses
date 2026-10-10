"""Biology and Earth Science, Level 3: ten question sets."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

Q = '«%s»'.__mod__
FIELD, LEVEL = 'BIO', 3

SETS = []

# --- 1 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='BIO-S01-L3',
    ar=dict(
        khulasa='بدأ بيتر وروزماري غرانت العمل في جزيرة دافني ميجور، وهي مخروط بركاني في '
                'غالاباغوس يبلغ نحو كيلومتر عرضًا، سنة ألف وتسعمئة وثلاث وسبعين، ودأبا عليه '
                'أربعين سنة. وكان منهجهما مستقصيًا لا بارعًا: كلّ عصفور في الجزيرة يُصاد '
                'ويُطوّق ويُوزن ويُقاس.',
        maana='المعنى أنّ تطويق كلّ طائر على حِدة أتاح تتبّع نسلٍ بعينه وإثبات نسبة التوريث '
              'في كلّ صفة على انفراد. ثمّ أجرى الجوّ التجربة: تخلّف المطر سنة ألف وتسعمئة '
              'وسبع وسبعين، فلم تُعقد بذور ثمانية عشر شهرًا، وهلك نحو خمسة وثمانين في المئة '
              'من عصافير الأرض الوسطى.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الدليل: ما تقدّمه هذه '
                  'الدراسة ولا يقدّمه مختبر هو معدّل تغيّر مقيس في جماعة برّية، مع تسمية '
                  'العامل المنتقي وإثبات التوريث على انفراد.',
        sila='في اختبار سات يكثر السؤال عن حدود الدراسة وعن الدليل الذي يسند دعوى وعن وظيفة '
             'الجملة. والفخّ المتوقّع هنا أن تُعمَّم النتائج على كلّ صفة وكلّ جماعة، مع أنّ '
             'النصّ يحصرها في جزيرة واحدة وأنواع قليلة. ويقترن المقطع بالمقطع الحادي '
             'والستّين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The Grants published their measurements in full',
                   'Forty years of banding gave a measured rate of change in the wild',
                   'A laboratory could have produced the same measurements',
                   'Daphne Major is a volcanic cone about a kilometer across'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'true_not_asked'},
             why='The text says what the study provides that no laboratory can is a measured rate '
                 'of change in a wild population, with the agent identified and inheritance '
                 'established separately.',
             trap='C claims for a laboratory exactly what the text says a laboratory cannot '
                  'provide.'),
        dict(stem='According to the text, what happened to mean beak depth after the wet year of '
                  '1983?',
             opts=['It rose further than it had after the drought',
                   'It stayed at the level reached after the drought',
                   'It could no longer be measured in the field',
                   'It moved back as small seeds became abundant'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'imported'},
             why='The text says the exceptional wet year of 1983 reversed the conditions, small '
                 'seeds became abundant, and the trait moved back.',
             trap='A reverses the direction of the change that the wet year produced.'),
        dict(claim='the inheritance of the trait was established independently of the change in it',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'inheritance of the trait was established independently of the change in it?',
             opts=[Q('because the birds were individually marked the team could follow particular '
                     'lineages and establish the heritability of each trait'),
                   Q('Beak length and depth were recorded to a tenth of a millimeter'),
                   Q('In 1977 the rains failed, no seeds were set for eighteen months, and about '
                     'eighty-five percent of the medium ground finches died'),
                   Q('The Grants published the measurements in full, which is why others have '
                     'been able to reanalyze them')],
             key='A', moves={'B': 'underreach', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation ties the individual marking to following lineages and establishing '
                 'heritability, which is a separate determination from the measured change in the '
                 'trait.',
             trap='C describes the selective episode rather than how inheritance was established.'),
        dict(carrier='Its limits are equally clear. One island, a few species, and a trait that '
                     'happens to be easy to measure. A reader who wants a general rate of '
                     'evolutionary change is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['entitled to apply these figures everywhere',
                   'left with no measured rates at all',
                   'obliged to look beyond this one study',
                   'able to use the wet year of 1983 instead'],
             key='C', moves={'A': 'overreach', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='The text names the narrowness of the case and says the work cannot settle '
                 'whether the same rates hold elsewhere, so a general rate must come from '
                 'somewhere else.',
             trap='A generalizes from a case whose limits the text has just set out.'),
        dict(target='viable',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('viable'),
             opts=['able to stay alive', 'practical to carry out', 'worth the expense',
                   'open to dispute'],
             key='B', moves={'A': 'near_miss', 'C': 'near_miss', 'D': 'imported'},
             why='The text asks about traits that are not viable to measure in the field, so the '
                 'word names what can practically be done rather than what can survive.',
             trap='A takes the biological sense of the word, which the phrase about measurement '
                  'rules out.'),
        dict(stem='Which choice best describes the function of the sentence that begins by naming '
                  'the limits?',
             opts=['It turns from what the study settles to what it cannot',
                   'It introduces the drought of 1977 for the first time',
                   'It withdraws the measured rate as unreliable',
                   'It explains why the birds were banded individually'],
             key='A', moves={'B': 'detail_swap', 'C': 'overreach', 'D': 'detail_swap'},
             why='The sentence follows the statement of what no laboratory can provide and opens '
                 'the list of narrow conditions that bound the result.',
             trap='C turns a statement of scope into a retraction of the finding.'),
        dict(sibling='BIO-S01-L2',
             sibling_gloss='Text 2 is passage 61 of this book. It sets out the four conditions '
                           'that produce selection, variation, heritability, differential '
                           'reproduction and time, and says that each one can be checked, which '
                           'is what makes the mechanism testable rather than a story.',
             stem='Text 1 reports a measured change in a wild population. Based on Text 2, what '
                  'would be added to that account?',
             opts=['The beak measurements were recorded to a tenth of a millimeter',
                   'Birds with deeper beaks could crack the large hard fruits',
                   'A wild population can be studied for forty years at a stretch',
                   'The four conditions the measurements can be checked against'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'underreach'},
             why='Text 2 names variation, heritability, differential reproduction and time as the '
                 'conditions to be checked, which is the frame the island measurements fill in '
                 'one by one.',
             trap='A repeats a detail of method that Text 1 has already supplied.'),
        dict(carrier='Then the weather did the experiment. In 1977 the rains failed, no seeds were '
                     'set for eighteen months, and about eighty-five percent of the medium ground '
                     'finches died. ___ the small soft seeds went first, so the survivors were '
                     'disproportionately the birds with deeper beaks.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'In particular,', 'In conclusion,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'restatement'},
             why='The sentence picks out which seeds failed and which birds survived within the '
                 'die-off just reported, so the transition must mark a particular detail of it.',
             trap='B sets the detail of the die-off against the die-off itself.'),
        dict(carrier='Their method was exhaustive rather than clever ___ every finch on the island '
                     'was caught, banded, weighed and measured.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['clever: every', 'clever, every', 'clever every', 'clever; every,'],
             key='A', moves={'B': 'comma_splice', 'C': 'run_on', 'D': 'misplaced'},
             why='A colon introduces the catching, banding, weighing and measuring that spell out '
                 'what the exhaustive method was, which a comma alone could not do.',
             trap='B joins the clause about every finch to the claim with a comma alone.'),
        dict(goal='explain what the island study provides that a laboratory cannot',
             notes=['Every finch was caught, banded, weighed and measured over forty years.',
                    'The rains failed in 1977 and about eighty-five percent of the medium ground '
                    'finches died.',
                    'The mean beak depth of the next generation was measurably greater than that '
                    'of their parents.',
                    'The selective agent was identified and the inheritance established '
                    'separately.'],
             stem='The student wants to explain what the island study provides that a laboratory '
                  'cannot. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['Every finch was caught, banded, weighed and measured over forty years',
                   'The rains failed in 1977 and most of the medium ground finches died',
                   'A wild population was measured through a drought it did not choose, with the '
                   'agent named and the inheritance settled on its own',
                   'Mean beak depth rose in the generation after the drought'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice puts the measurement, the natural selective episode and the '
                 'separate finding about inheritance together, which is what no laboratory '
                 'supplies.',
             trap='A describes the labor without saying what the measurements established.'),
    ]))

# --- 2 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='BIO-S02-L3',
    ar=dict(
        khulasa='ثلاثة أجيال من المناهج استُعملت لمعرفة أين تقع الجينات وما تفعل، وكلّ جيل '
                'يحسم ما لم يقدر عليه الذي قبله. الأول خريطة الارتباط، وهي جدول ترتيب الجينات '
                'مبنيّ على كثرة انفصال صفتين موروثتين في التوالد، وقد رسم أولها ألفرد '
                'سترتيفانت سنة ألف وتسعمئة وثلاث عشرة.',
        maana='المعنى أنّ الجيل الثاني هو التخريط الفيزيائي الذي حدّد مواقع الجينات على '
              'كروموسومات مرئية فأعطى موضعًا حقيقيًّا لا ترتيبًا نسبيًّا؛ والثالث هو قراءة '
              'تتابع الحروف الكيميائية، وقد صار صناعيًّا في التسعينيات، وأُعلنت مسوّدة '
              'التتابع البشري سنة ألفين وواحد.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الدليل: ما لم يتغيّر هو '
                  'الجزء الصعب، فالتتابع يعطي الحروف ولا يعطي الوظيفة، وإثبات الوظيفة ما '
                  'زال يحتاج تجارب التوالد ودراسات الخلايا والتنوّع الطبيعي.',
        sila='في اختبار سات يكثر السؤال عن حدود المنهج وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسب الارتباط بين متغيّر في التتابع '
             'وصفة ما تفسيرًا لها، مع أنّ النصّ ينفي ذلك. ويقترن المقطع بالمقطع الثاني '
             'والستّين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Sturtevant drew the first linkage map as an undergraduate',
                   'A sequence explains what a stretch of DNA does',
                   'Three generations of method each resolve what the last could not',
                   'A draft human sequence was announced in 2001'],
             key='C', moves={'A': 'true_not_asked', 'B': 'wrong_direction', 'D': 'underreach'},
             why='The text opens by saying three generations of method have been used and that '
                 'each resolves something the previous one could not, then traces linkage maps, '
                 'physical mapping and sequencing.',
             trap='B states the error the text names, since a sequence gives letters and not '
                  'function.'),
        dict(stem='According to the text, what did physical mapping give that a linkage map could '
                  'not?',
             opts=['An actual position rather than a relative order',
                   'The order of the chemical letters along the DNA',
                   'The function of each gene that it located',
                   'A distance converted from a frequency of separation'],
             key='A', moves={'B': 'detail_swap', 'C': 'overreach', 'D': 'wrong_direction'},
             why='The text says physical mapping located genes on visible chromosomes and that '
                 'this gave an actual position rather than a relative order.',
             trap='D names what the linkage map itself supplied rather than what physical mapping '
                  'added.'),
        dict(claim='the oldest of the three methods has not been retired',
             stem='Which quotation from the text most strongly supports the claim that the oldest '
                  'of the three methods has not been retired?',
             opts=[Q('A draft of the human sequence was announced in 2001 and completed in stages '
                     'over the following two decades'),
                   Q('Establishing function still requires breeding experiments, cell studies and '
                     'natural variation'),
                   Q('most of the human sequence does not code for protein at all'),
                   Q('linkage maps for several organisms had to be reordered once sequences '
                     'arrived')],
             key='B', moves={'A': 'true_not_asked', 'C': 'near_miss', 'D': 'wrong_direction'},
             why='Breeding experiments are the method of 1913, and the text says establishing '
                 'function still requires them, so the oldest approach remains in use.',
             trap='D shows sequencing correcting the old maps rather than the old method still '
                  'working.'),
        dict(carrier='A sequence tells a reader the letters and nothing about what they do, and '
                     'most of the human sequence does not code for protein at all. A variant '
                     'found by sequencing alone is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['a complete account of the trait it accompanies',
                   'proof that the trait is not inherited',
                   'located only in relative order on the chromosome',
                   'a correlation still waiting for an explanation'],
             key='D', moves={'A': 'overreach', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='The text says a correlation between a variant and a trait is not an explanation '
                 'of it, so sequencing leaves the question of function still open.',
             trap='A commits the characteristic error of the sequencing era that the text names.'),
        dict(target='nascent',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('nascent'),
             opts=['newly fashionable', 'about to disappear', 'early and still forming',
                   'poorly understood'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'imported'},
             why='The phrase names the methods of 1913, which were the first of their kind, so '
                 'the word marks them as early rather than as fading or obscure.',
             trap='B reverses the sense, since the text says those methods are still in use.'),
        dict(stem='Which choice best describes the function of the dictionary comparison in the '
                  'text?',
             opts=['It introduces the third generation of method',
                   'It makes the error about correlation concrete for a reader',
                   'It argues that a sequence is of no value at all',
                   'It reports when sequencing became industrial'],
             key='B', moves={'A': 'detail_swap', 'C': 'overreach', 'D': 'detail_swap'},
             why='The comparison follows the statement that a correlation is not an explanation, '
                 'and gives the point a familiar form by setting a word position against a '
                 'meaning.',
             trap='C turns a limit on what a sequence shows into a claim that it shows nothing.'),
        dict(sibling='BIO-S02-L2',
             sibling_gloss='Text 2 is passage 62 of this book. It derives the three to one ratio '
                           'from two copies of each gene, random separation and dominance, and '
                           'says the derivation fails usefully for features carried close '
                           'together on the same chromosome.',
             stem='Text 1 traces three generations of method. Based on Text 2, what would be added '
                  'to the account of the first of them?',
             opts=['The reason that close-together features break the simple rule',
                   'Traits rarely separated must sit close together on the chromosome',
                   'Sequencing arrived in a usable form in 1977',
                   'Mendel drew the first linkage map from his own peas'],
             key='A', moves={'B': 'restatement', 'C': 'imported', 'D': 'wrong_direction'},
             why='Text 2 shows why linked features do not assort independently, which is the '
                 'failure of the ratio that the linkage map of Text 1 was built to exploit.',
             trap='B repeats the logic of the linkage map that Text 1 has already given.'),
        dict(carrier='The second generation was physical mapping, which located genes on visible '
                     'chromosomes using stains, deletions and later fluorescent probes. ___ the '
                     'third is sequencing, meaning reading the order of the chemical letters '
                     'along a stretch of DNA.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'In other words,', 'As a result,', 'After that,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'restatement', 'C': 'near_miss'},
             why='The sentence names the next generation in a numbered series, so the transition '
                 'must mark succession rather than contrast, restatement or consequence.',
             trap='C reads sequencing as caused by physical mapping rather than as following it.'),
        dict(carrier='A sequence tells a reader the letters and nothing about what they do ___ and '
                     'most of the human sequence does not code for protein at all.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['do and', 'do, and', 'do; and', 'do and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about most of the sequence not coding for protein is independent, so '
                 'the conjunction joining it to the clause about the letters takes a comma before '
                 'it.',
             trap='A leaves the two complete clauses about the sequence joined with no mark at '
                  'all.'),
        dict(goal='explain why a sequence does not settle what a gene does',
             notes=['A sequence tells a reader the letters and nothing about what they do.',
                    'Most of the human sequence does not code for protein at all.',
                    'Establishing function still requires breeding experiments, cell studies and '
                    'natural variation.',
                    'A correlation between a sequence variant and a trait is not an explanation '
                    'of it.'],
             stem='The student wants to explain why a sequence does not settle what a gene does. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['Most of the human sequence does not code for protein at all',
                   'A correlation between a variant and a trait is not an explanation',
                   'Establishing function still requires breeding experiments and cell studies',
                   'Because the letters say nothing about function, a variant correlated with a '
                   'trait still has to be explained by breeding and cell work'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'true_not_asked'},
             why='Only this choice joins the silence of the letters to the methods that are still '
                 'needed, which is what shows why the sequence alone settles nothing.',
             trap='B names the error without saying what work would correct it.'),
    ]))

# --- 3 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='BIO-S03-L3',
    ar=dict(
        khulasa='لم يرَ أحد قطّ جزيء سكّر وهو يُفكّك، وإنّما أُقيم المسار بطرائق غير '
                'مباشرة، وقام بمعظم العمل ثلاث حِيَل. الأولى المثبِّط، أي مادّة تسدّ خطوة '
                'واحدة بعينها، فالسيانيد يوقف تفاعلًا قرب نهاية السلسلة، وما يتراكم في '
                'الخلية المعالَجة به هو ما كان قبل السدّ مباشرة.',
        maana='المعنى أنّ الثانية هي الوسم النظيري، أي ذرّة غير معتادة الوزن تُتبَّع بها '
              'المادّة عبر سلسلة تفاعلات: تُغذّى الخلية سكّرًا ثقيل الكربون، ويُجمع ما '
              'تتنفّسه من غاز، فيدلّ موضع الذرّات الثقيلة على مصير أجزاء الجزيء الأصلي. '
              'والثالثة تفكيك الخلية نفسها بالطرد المتفاوت.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الدليل: لكلّ حيلة حدّ يجب '
                  'تسميته، فقد يُضعف السمّ خطوات عدّة لا واحدة، وقد تُشوّش تفاعلات غير '
                  'متوقّعة الوسمَ، والعُضيّة المعزولة قُطعت عن كلّ ما كانت موصولة به.',
        sila='في اختبار سات يكثر السؤال عن حدود المنهج وعن وظيفة قائمة الجمل وعن التحوّل '
             'الذي يفيد النتيجة. والفخّ المتوقّع هنا أن تُقرأ قائمة الحدود سحبًا للنتيجة، '
             'مع أنّ النصّ يُقيم المسار ويُسمّي حدوده معًا. ويقترن المقطع بالمقطع الثالث '
             'والستّين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Peter Mitchell proposed the last large piece in 1961',
                   'Someone has watched a sugar molecule being dismantled',
                   'Mitochondria were isolated by spinning broken cells',
                   'Three indirect tactics built the pathway, and each has limits'],
             key='D', moves={'A': 'true_not_asked', 'B': 'wrong_direction', 'C': 'underreach'},
             why='The text says nobody has watched the process and that three tactics did most of '
                 'the work, then names the limits of all three.',
             trap='B contradicts the opening sentence of the text.'),
        dict(stem='According to the text, what does a cell treated with cyanide reveal about the '
                  'pathway?',
             opts=['The position of the heavy carbon atoms in the sugar',
                   'The order of steps, from what piles up behind the block',
                   'Which structure in the cell carries out the steps',
                   'That the chain has no end reaction at all'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'overreach'},
             why='The text says the substances that accumulate are the ones immediately before the '
                 'block, so the order of steps can be deduced from what piles up behind each '
                 'poison.',
             trap='A names what the isotope label shows rather than what the inhibitor shows.'),
        dict(claim='an isolated part of a cell may not behave as it did inside one',
             stem='Which quotation from the text most strongly supports the claim that an isolated '
                  'part of a cell may not behave as it did inside one?',
             opts=[Q('mitochondria were separated out by spinning broken cells at carefully '
                     'chosen speeds'),
                   Q('A label may be scrambled by reactions nobody suspected'),
                   Q('An isolated organelle has been removed from everything it was connected '
                     'to'),
                   Q('it turned metabolic chemistry from speculation into bookkeeping')],
             key='C', moves={'A': 'near_miss', 'B': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation says the organelle has been cut off from everything it was '
                 'connected to, which is the reason its behavior inside the cell cannot be '
                 'assumed.',
             trap='A describes how the organelle was obtained rather than the doubt about it.'),
        dict(carrier='A poison may attenuate several steps rather than one. A label may be '
                     'scrambled by reactions nobody suspected. The three tactics taken together '
                     'are therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['stronger than any one of them alone', 'each sufficient on its own',
                   'useless for establishing any pathway',
                   'confined to the oxygen-dependent steps'],
             key='A', moves={'B': 'wrong_direction', 'C': 'overreach', 'D': 'detail_swap'},
             why='Each tactic has a different weakness, so a conclusion that all three support '
                 'does not rest on the flaw of any one of them.',
             trap='C turns the stated limits into a verdict that the methods establish nothing.'),
        dict(target='attenuate',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('attenuate'),
             opts=['make thinner in shape', 'bring to a full stop', 'speed up a little',
                   'weaken the action of'],
             key='D', moves={'A': 'imported', 'B': 'overreach', 'C': 'wrong_direction'},
             why='The sentence warns that a poison may attenuate several steps rather than one, so '
                 'the word names a partial weakening rather than a complete block.',
             trap='B makes the effect total, which is what the warning is distinguishing it from.'),
        dict(stem='Which choice best describes the function of the three sentences naming limits?',
             opts=['They introduce the isotope label for the first time',
                   'They withdraw the pathway as unestablished',
                   'They match one weakness to each tactic in turn',
                   'They explain how mitochondria were separated out'],
             key='C', moves={'A': 'detail_swap', 'B': 'overreach', 'D': 'detail_swap'},
             why='The three sentences come in the same order as the three tactics and give each '
                 'one its own failure, which is what the phrase about naming the limits '
                 'announces.',
             trap='B reads a list of weaknesses as the abandonment of the result.'),
        dict(sibling='BIO-S03-L2',
             sibling_gloss='Text 2 is passage 63 of this book. It explains that a cell converts '
                           'the energy in sugar into a working currency, that the first stage '
                           'nets two units, and that the oxygen path in the mitochondria yields '
                           'something near thirty.',
             stem='Text 1 describes how the pathway was established. Based on Text 2, what would '
                  'be added to that account?',
             opts=['Mitochondria carry out the oxygen-dependent steps',
                   'The accounting that the three tactics were used to settle',
                   'An isolated organelle has lost all its connections',
                   'Cyanide blocks the first step rather than the last'],
             key='B', moves={'A': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 gives the yields the pathway was traced in order to count, so the '
                 'indirect tactics of Text 1 appear there as a settled piece of bookkeeping.',
             trap='A repeats a result that Text 1 already reports from the spinning experiments.'),
        dict(carrier='Cyanide stops one reaction near the end of the chain, and in a cell treated '
                     'with it the substances that accumulate are the ones immediately before the '
                     'block. ___ the order of steps can be deduced from what piles up behind each '
                     'poison.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['As a result,', 'By contrast,', 'Even so,', 'For example,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The second sentence draws a conclusion from what accumulates behind the block, '
                 'so the transition must mark a consequence rather than a contrast or an example.',
             trap='C sets the conclusion against the observation it follows from.'),
        dict(carrier='Nobody has ever watched a sugar molecule being dismantled ___ the pathway '
                     'was established by indirect means.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['dismantled, the', 'dismantled the', 'dismantled. The',
                   'dismantled, and, the'],
             key='C', moves={'A': 'comma_splice', 'B': 'run_on', 'D': 'misplaced'},
             why='The clause saying the pathway was established by indirect means is a complete '
                 'sentence, so a period separates it from the clause about nobody watching.',
             trap='A splices the clause about indirect means onto the clause about nobody '
                  'watching with a comma.'),
        dict(goal='explain why three tactics were needed rather than one',
             notes=['An inhibitor shows the order of steps from what piles up behind the block.',
                    'An isotope label shows which parts of the original molecule ended up where.',
                    'Spinning broken cells located the pathway in a structure.',
                    'A poison may block several steps and a label may be scrambled.'],
             stem='The student wants to explain why three tactics were needed rather than one. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['Each tactic answers a different question and can fail on its own, so order, '
                   'atoms and location had to be settled separately',
                   'An inhibitor shows the order of steps from what piles up behind the block',
                   'Spinning broken cells located the pathway in a structure',
                   'A poison may block several steps and a label may be scrambled'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice pairs the different questions the tactics answer with the fact '
                 'that each can fail, which is what makes one of them insufficient.',
             trap='D names the weaknesses without saying what the other tactics supplied.'),
    ]))

# --- 4 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='BIO-S04-L3',
    ar=dict(
        khulasa='الدعوى بأنّ نوعًا يتحكّم في نوع آخر صعبة الاختبار، لأنّ التجربة البديهية '
                'تقتضي إزالة مفترس من منظر طبيعي كامل والانتظار. وطريقتان تجعلان السؤال '
                'قابلًا للتناول دون ذلك: الأولى المحجر، أي قطعة مسوّرة تمنع حيوانًا بعينه '
                'وتترك كلّ شيء آخر كما هو.',
        maana='المعنى أنّ سياج عشرين قطعة وترك عشرين بجوارها بلا سياج يفصل أثر الرعي عن أثر '
              'الماء والتراب والجوّ، لأنّ هذه تعمل في المجموعتين سواءً. والثانية تقرأ الحيوان '
              'نفسه: نسبة النظائر الثقيلة إلى الخفيفة في النسيج تختلف بالغذاء وترتفع في كلّ '
              'خطوة صعودًا في السلسلة.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الدليل: للطريقتين حدود '
                  'تهمّ في خلاف يلوستون، فالمحجر يختبر الرعي ولا يختبر الخوف، والنظائر '
                  'تعطي الغذاء لا السبب، وإعادة الإطلاق نفسها كانت التجربة وقد جرت بلا '
                  'شاهد ضابط.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الجملة الافتتاحية '
             'وعن حدود المنهج. والفخّ المتوقّع هنا أن يُظنّ أنّ المحاجر تحسم السؤال، مع أنّ '
             'النصّ يقول إنّها لا تبلغ السبب. ويقترن المقطع بالمقطع الرابع والستّين في أسئلة '
             'النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Two indirect methods make the question testable, and both have boundaries',
                   'The Yellowstone reintroduction was carried out with a control area',
                   'Museum specimens can be sampled for isotope ratios',
                   'Fear rather than browsing explains the willow recovery'],
             key='A', moves={'B': 'wrong_direction', 'C': 'underreach', 'D': 'imported'},
             why='The text says the obvious experiment is impossible, names the exclosure and the '
                 'isotope ratio as ways around it, and then names what each cannot do.',
             trap='B reverses the text, which says the reintroduction was performed without a '
                  'control.'),
        dict(stem='According to the text, what does an exclosure hold constant between the fenced '
                  'and unfenced plots?',
             opts=['The number of elk standing in each plot',
                   'The isotope ratios in the willow tissue',
                   'Water, soil and weather, which act on both equally',
                   'The period over which the tissue grew'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'detail_swap'},
             why='The text says the difference in willow growth separates browsing from water, '
                 'soil and weather, because those act on both sets of plots equally.',
             trap='A names the very thing an exclosure changes rather than what it holds '
                  'constant.'),
        dict(claim='the cleanest available design is not available in practice',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'cleanest available design is not available in practice?',
             opts=[Q('Museum specimens can be sampled, which allows comparisons with animals '
                     'that died a century ago'),
                   Q('An exclosure tests browsing and cannot test fear, so it cannot distinguish '
                     'elk eating fewer willows from elk standing in different places'),
                   Q('Isotope ratios give diet, not cause, and the baseline ratios in a river '
                     'valley vary with geology'),
                   Q('is also asking for an experiment at a scale that no institution will fund '
                     'and no regulator will permit')],
             key='D', moves={'A': 'true_not_asked', 'B': 'near_miss', 'C': 'near_miss'},
             why='The quotation says the scale required is one that no funder will pay for and no '
                 'regulator will allow, which is why the clean design is unavailable.',
             trap='B names a limit of the exclosure rather than the reason the clean design cannot '
                  'be run.'),
        dict(carrier='The reintroduction itself was therefore the experiment, and it was performed '
                     'without a control. An argument about its results is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['settled by the exclosure plots alone', 'open in a way the evidence cannot '
                   'close', 'a question about isotope baselines only',
                   'impossible to make at all'],
             key='B', moves={'A': 'overreach', 'C': 'detail_swap', 'D': 'overreach'},
             why='Without a control area there is nothing to compare the park against, and the '
                 'text says that single fact is why the dispute has never been settled on the '
                 'evidence.',
             trap='A credits the exclosures with settling a question the text says they cannot '
                  'reach.'),
        dict(target='perturb',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('perturb'),
             opts=['disturb on purpose', 'worry about greatly', 'measure very closely',
                   'leave entirely alone'],
             key='A', moves={'B': 'imported', 'C': 'near_miss', 'D': 'wrong_direction'},
             why='The sentence describes someone who wishes to perturb a system and watch, which '
                 'is the deliberate disturbance that an experiment makes.',
             trap='B takes the sense of being troubled, which a system cannot be.'),
        dict(stem='Which choice best describes the function of the sentence about the obvious '
                  'experiment?',
             opts=['It introduces the stable isotope ratio by name',
                   'It concedes that the claim cannot be tested at all',
                   'It reports the number of plots along the creek',
                   'It sets up the problem the two methods are meant to solve'],
             key='D', moves={'A': 'detail_swap', 'B': 'overreach', 'C': 'detail_swap'},
             why='The opening sentence says the obvious test would mean removing a predator and '
                 'waiting, which is the difficulty the exclosure and the isotope ratio are '
                 'introduced to get around.',
             trap='B hardens a practical difficulty into the impossibility of any test.'),
        dict(sibling='BIO-S04-L2',
             sibling_gloss='Text 2 is passage 64 of this book. It explains that energy is lost at '
                           'every transfer, that about a tenth of it reaches the next level, and '
                           'that a few wolves can therefore affect a large quantity of willow '
                           'without any appeal to design.',
             stem='Text 1 sets out the methods available. Based on Text 2, what would be added to '
                  'the problem they address?',
             opts=['An exclosure tests browsing and cannot test fear',
                   'Isotope ratios rise at each step up a food chain',
                   'The reason a small number of predators could matter at all',
                   'The reintroduction included twenty fenced control plots'],
             key='C', moves={'A': 'restatement', 'B': 'restatement', 'D': 'imported'},
             why='Text 2 derives the leverage of a few animals from the tenfold loss at each step, '
                 'which is why the claim that Text 1 struggles to test is worth testing.',
             trap='B repeats a property of the isotope method that Text 1 has already given.'),
        dict(carrier='An exclosure tests browsing and cannot test fear, so it cannot distinguish '
                     'elk eating fewer willows from elk standing in different places. ___ isotope '
                     'ratios give diet, not cause, and the baseline ratios in a river valley vary '
                     'with geology.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Similarly,', 'As a result,', 'In short,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'near_miss', 'D': 'restatement'},
             why='The sentence adds a second limitation of the same kind, so the transition must '
                 'mark likeness rather than contrast, consequence or summary.',
             trap='A sets the second limitation against the first, though both point the same '
                  'way.'),
        dict(carrier='Isotope ratios give diet, not cause ___ and the baseline ratios in a river '
                     'valley vary with geology.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['cause; and', 'cause and', 'cause: and', 'cause, and'],
             key='D', moves={'A': 'wrong_mark', 'B': 'run_on', 'C': 'wrong_mark'},
             why='The clause about baseline ratios varying with geology is independent, so the '
                 'conjunction joining it to the clause about diet takes a comma before it.',
             trap='B leaves the clause about diet and the clause about geology with no mark '
                  'between them.'),
        dict(goal='explain why the Yellowstone dispute has not been settled',
             notes=['An exclosure tests browsing and cannot test fear.',
                    'Isotope ratios give diet, not cause.',
                    'The cleanest design would require an experiment at a scale no regulator will '
                    'permit.',
                    'The reintroduction was the experiment, and it was performed without a '
                    'control.'],
             stem='The student wants to explain why the Yellowstone dispute has not been settled. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['An exclosure tests browsing and cannot test the effect of fear',
                   'Neither method reaches cause, and the one experiment that was run had no '
                   'control, so the evidence cannot decide between the readings',
                   'Isotope ratios give diet rather than the cause of a change',
                   'The cleanest design is one no regulator would ever permit'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice joins the limits of both methods to the missing control, which '
                 'together are why the evidence cannot decide the question.',
             trap='D names the design that cannot be run without saying what was run instead.'),
    ]))

# --- 5 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='BIO-S05-L3',
    ar=dict(
        khulasa='شركة خليج هدسن اشترت الفراء في شمال كندا ثلاثة قرون وحفظت حساباتها، ونُشرت '
                'تلك الحسابات في الثلاثينيات مردوداتِ فراء سنوية، أي عدد الجلود المشتراة في '
                'كلّ موسم، وهي للوشق وأرنب الثلج تمتدّ قرنًا كاملًا ونيّفًا.',
        maana='المعنى أنّ السلسلة تُظهر أمرًا لافتًا: الحيوانان يصعدان وينهاران على دورة نحو '
              'عشر سنوات، ويسبق الأرنب الوشق بقليل، ويتكرّر النمط أكثر من قرن. لكنّ مردود '
              'الفراء بديل، أي قياس يقوم مقام كمّية لا تُرى مباشرة، وهو بديل عن أشياء عدّة في '
              'وقت واحد.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الدليل: المردود يتعلّق '
                  'بعدد الحيوان وعدد الصيّادين وأسعار الفراء ومواضع المراكز، ولذلك أمضى '
                  'علماء البيئة عقودًا في فصل الإشارة عن السجلّ، وحلقات الأشجار بديل ثانٍ '
                  'مستقلّ تمامًا يُظهر الدورة نفسها.',
        sila='في اختبار سات يكثر السؤال عن حدود الدليل وعن وظيفة القائمة وعن معنى كلمة في '
             'سياقها. والفخّ المتوقّع هنا أن يُقرأ مردود الفراء عدًّا للحيوان، مع أنّ النصّ '
             'يبيّن أنّه بديل مركّب. ويقترن المقطع بالمقطع الخامس والستّين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The cycle is visible in the memories of trappers',
                   'A century-long proxy had to be corrected before it could be read',
                   'Fur returns count animals rather than pelts bought',
                   'No other wild population record of that length exists'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'true_not_asked'},
             why='The text presents the fur returns, names the several things they depend on, and '
                 'describes the corrections and the second proxy that make the cycle believable.',
             trap='C reverses the definition, since a fur return is the number of pelts bought.'),
        dict(stem='According to the text, what is the strongest argument that the cycle is real?',
             opts=['The series runs for more than a century',
                   'Price series can be used to correct for effort',
                   'The hare peaks slightly before the lynx does',
                   'Tree ring records show the same cycle independently'],
             key='D', moves={'A': 'near_miss', 'B': 'near_miss', 'C': 'true_not_asked'},
             why='The text calls the tree ring records a second and entirely separate proxy and '
                 'says their agreement is the strongest argument that the pattern is real.',
             trap='B names one of the corrections rather than the independent confirmation.'),
        dict(claim='the record measures several things at once',
             stem='Which quotation from the text most strongly supports the claim that the record '
                  'measures several things at once?',
             opts=[Q('It depends on how many animals there were and on how many trappers were '
                     'working'),
                   Q('both animals rise and crash on a cycle of roughly ten years'),
                   Q("The Hudson's Bay Company bought furs across northern Canada for three "
                     "centuries and kept its accounts"),
                   Q('Independent counts from the twentieth century overlap the end of the '
                     'series')],
             key='A', moves={'B': 'true_not_asked', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation names two different quantities that the same figure reflects, '
                 'animal numbers and trapper numbers, which is what makes the return a proxy for '
                 'several things.',
             trap='D names a way of checking the record rather than what the record mixes '
                  'together.'),
        dict(carrier='Each of those varies over a century, and several vary on their own cycles. A '
                     'ten-year rhythm read off the returns alone is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['certain to be an artifact of commerce',
                   'a direct count of the animals present',
                   'open to a second explanation until checked',
                   'confirmed by the tree ring records already'],
             key='C', moves={'A': 'overreach', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='Because the returns also move with prices, effort and post locations, a rhythm '
                 'in them could come from commerce, so the pattern needs an independent check.',
             trap='A settles against the cycle where the text only withholds judgment.'),
        dict(target='precarious',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('precarious'),
             opts=['uncertain in its records', 'always at risk of collapse',
                   'small in average number', 'difficult to count well'],
             key='B', moves={'A': 'imported', 'C': 'near_miss', 'D': 'imported'},
             why='The text says a cyclic population is permanently precarious even when its '
                 'average is healthy, so the word names a standing risk rather than a small '
                 'average.',
             trap='C reads the word as a statement about size, though the sentence allows a '
                  'healthy average.'),
        dict(stem='Which choice best describes the function of the list of things a fur return '
                  'depends on?',
             opts=['It shows why the series cannot be read as a count',
                   'It introduces the tree ring records for the first time',
                   'It argues that the accounts were badly kept',
                   'It reports the period of the cycle in years'],
             key='A', moves={'B': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The list follows the definition of a proxy and names five other influences on '
                 'the same figure, which is why ecologists had to separate the signal from the '
                 'record.',
             trap='C blames the bookkeeping, though the text treats the accounts as sound.'),
        dict(sibling='BIO-S05-L2',
             sibling_gloss='Text 2 is passage 65 of this book. It explains exponential and '
                           'logistic growth, says the textbook picture wrongly assumes an '
                           'immediate response to shortage, and shows that a delayed response '
                           'makes a population overshoot and then fluctuate.',
             stem='Text 1 reports a cycle in the fur returns. Based on Text 2, what would be added '
                  'to that reading?',
             opts=['Tree ring records of browsing show the same cycle',
                   'A fur return depends on how many trappers were working',
                   'The hare and the lynx peak in the same season',
                   'A mechanism that would produce a cycle of that kind'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'wrong_direction'},
             why='Text 2 derives repeated swings from a delayed response to shortage, which '
                 'supplies a reason for the ten-year rhythm that Text 1 can only report.',
             trap='A repeats the independent check that Text 1 has already described.'),
        dict(carrier='Ecologists have therefore spent decades separating the signal from the '
                     'record. ___ price series can be used to correct for effort.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'For instance,', 'In conclusion,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'restatement'},
             why='The second sentence gives one of the corrections just referred to in general, so '
                 'the transition must introduce an example rather than a contrast or a '
                 'conclusion.',
             trap='B sets a method of correcting against the work of correcting it belongs to.'),
        dict(carrier='The series shows something striking ___ both animals rise and crash on a '
                     'cycle of roughly ten years.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['striking: both', 'striking, both', 'striking both', 'striking; both,'],
             key='A', moves={'B': 'comma_splice', 'C': 'run_on', 'D': 'misplaced'},
             why='A colon introduces the striking thing the series shows, which a comma alone '
                 'cannot do between two independent clauses.',
             trap='B joins the clause about the cycle to the announcement with a comma alone.'),
        dict(goal='explain why a second proxy was needed',
             notes=['A fur return depends on animal numbers and on how many trappers were '
                    'working.',
                    'It also depends on fur prices in London and on where the company posts were.',
                    'Tree ring records of hare browsing are a second and entirely separate proxy.',
                    'The tree rings show the same cycle.'],
             stem='The student wants to explain why a second proxy was needed. Which choice most '
                  'effectively uses relevant information from the notes to accomplish that goal?',
             opts=['A fur return depends on animal numbers and on trapper numbers',
                   'Tree ring records of hare browsing are an entirely separate proxy',
                   'Because the returns also move with prices and posts, a proxy with none of '
                   'those influences was needed to show the cycle is real',
                   'The tree rings and the fur returns show the same ten-year cycle'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice names what the returns are contaminated by and why an unrelated '
                 'proxy settles the question, which is what the goal asks for.',
             trap='D reports the agreement without saying why an independent measure was '
                  'required.'),
    ]))

# --- 6 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='BIO-S06-L3',
    ar=dict(
        khulasa='وضع روبرت كوخ شروطًا ينبغي أن تستوفيها الدعوى في سبب مرض، وهي لا تزال نقطة '
                'البداية: أن يوجد الكائن في كلّ حالة من المرض، وأن يُعزل من مريض ويُنمَّى '
                'زرعًا نقيًّا، وأن يُحدث المرض إذا أُدخل في مضيف سليم، وأن يُستخرج من ذلك '
                'المضيف بعدها.',
        maana='المعنى أنّ الشرط الموضوع سلفًا نافع لأنّه قابل للفشل، وقد فشلت هذه الشروط '
              'فشلًا مفيدًا: فالأول ينكسر على الحامل بلا أعراض، والثاني ينكسر على كائنات لا '
              'تُنمَّى خارج خلية حيّة ومنها كلّ فيروس، والثالث ينكسر حيث لا يقع المرض إلّا '
              'في الإنسان.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الدليل: عُدَّت الشروط '
                  'معيارًا يُقارَب لا يُستوفى، وحلّت محلّ الخطوات الناقصة الملازمةُ '
                  'الإحصائية واستجابةُ الجرعة واختبارُ هل يشفي إزالةُ الكائن المرض.',
        sila='في اختبار سات يكثر السؤال عن حدود المعيار وعن وظيفة جملة التعريف وعن الدليل. '
             'والفخّ المتوقّع هنا أن يُقرأ انكسار الشروط إبطالًا لها، مع أنّ النصّ يجعل '
             'قابلية الفشل هي موضع نفعها. ويقترن المقطع بالمقطع السادس والستّين في أسئلة '
             'النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Molecular postulates were proposed in 1988',
                   'Koch required only that the organism be found in every case',
                   'Conditions laid down in advance are useful because they can fail',
                   'Marshall overturned the view that ulcers are caused by bacteria'],
             key='C', moves={'A': 'true_not_asked', 'B': 'underreach', 'D': 'wrong_direction'},
             why='The text says a postulate is useful precisely because it can fail, and then '
                 'shows each of the four conditions failing in an instructive way.',
             trap='D reverses the finding, since Marshall displaced stress in favor of a '
                  'bacterium.'),
        dict(stem='According to the text, what breaks the second of the conditions?',
             opts=['Organisms that cannot be grown outside a living cell',
                   'People who harbor an organism without becoming ill',
                   'Diseases that occur only in human beings',
                   'Researchers who volunteer to swallow a culture'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says the second condition breaks on organisms that cannot be grown '
                 'outside a living cell, which includes every virus and several bacteria.',
             trap='B names what breaks the first condition rather than the second.'),
        dict(claim='the conditions are treated as a standard to approach rather than a test to '
                   'pass',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'conditions are treated as a standard to approach rather than a test to pass?',
             opts=[Q('Koch himself found cholera in people who were perfectly well, and the '
                     'organism that causes diphtheria is ubiquitous in some populations with no '
                     'disease at all'),
                   Q('Modern practice replaces the missing steps with statistical association, '
                     'dose response, and the test of whether removing the organism cures the '
                     'disease'),
                   Q('Barry Marshall drank a culture of Helicobacter pylori in 1984, developed '
                     'gastritis, and recovered the organism from his own stomach'),
                   Q('They substitute the presence of particular genes for the growing of a pure '
                     'culture')],
             key='B', moves={'A': 'near_miss', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation names the substitutes used where the original steps cannot be '
                 'taken, which is what treating the conditions as a standard rather than a test '
                 'means in practice.',
             trap='C gives one case in which a missing step was supplied rather than the general '
                  'practice.'),
        dict(carrier='The third breaks wherever the disease occurs only in humans, since the '
                     'experiment cannot ethically be done. A claim about such a disease must '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['satisfy all four conditions as Koch wrote them',
                   'be abandoned until an animal model appears',
                   'rest on the growing of a pure culture alone',
                   'rest on evidence of some other kind'],
             key='D', moves={'A': 'wrong_direction', 'B': 'overreach', 'C': 'detail_swap'},
             why='If the third condition cannot ethically be met, a claim about a human-only '
                 'disease has to be supported by the substitutes the text goes on to name.',
             trap='B treats an unmeetable condition as a bar to any conclusion at all.'),
        dict(target='ubiquitous',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('ubiquitous'),
             opts=['unusually dangerous', 'easily recognized', 'present nearly everywhere',
                   'confined to one place'],
             key='C', moves={'A': 'imported', 'B': 'imported', 'D': 'wrong_direction'},
             why='The organism that causes diphtheria is said to be ubiquitous in some populations '
                 'with no disease at all, so the word reports how widely it is found.',
             trap='D reverses the sense, since the point is that the organism is found '
                  'throughout.'),
        dict(stem='Which choice best describes the function of the sentence defining a postulate?',
             opts=['It introduces the molecular versions proposed in 1988',
                   'It explains why the failures that follow are worth having',
                   'It concedes that the conditions were badly chosen',
                   'It reports the four conditions in their original order'],
             key='B', moves={'A': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The sentence says a condition laid down in advance is useful precisely because '
                 'it can fail, which is what makes the three breakages that follow informative.',
             trap='C reads the usefulness of failure as a complaint about the conditions.'),
        dict(sibling='BIO-S06-L2',
             sibling_gloss='Text 2 is passage 66 of this book. It argues that an outbreak is '
                           'governed by route, dose, the reproduction number and the incubation '
                           'period, and that a reproduction number below one makes an outbreak '
                           'die out.',
             stem='Text 1 examines the conditions for naming a cause. Based on Text 2, what would '
                  'be added to that examination?',
             opts=['Quantities that can be measured once a cause is granted',
                   'The organism must be found in every case of the disease',
                   'Some carriers harbor an organism without becoming ill',
                   'Koch measured the reproduction number of cholera himself'],
             key='A', moves={'B': 'restatement', 'C': 'restatement', 'D': 'imported'},
             why='Text 2 moves past the question of which organism causes a disease to the numbers '
                 'that govern its spread, which is the work that begins where Text 1 ends.',
             trap='B repeats the first of the conditions that Text 1 has already set out.'),
        dict(carrier='Workers have therefore treated the postulates as a standard to be approached '
                     'rather than met. ___ where an animal model is impossible, the third '
                     'condition has occasionally been satisfied by a researcher who volunteered.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'In short,', 'Even so,', 'For instance,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'restatement', 'C': 'wrong_direction'},
             why='The sentence gives one way the standard has been approached in practice, so the '
                 'transition must introduce an example rather than a contrast or a summary.',
             trap='C sets the volunteer case against the practice it illustrates.'),
        dict(carrier='The organism must be found in every case of the disease ___ and it must be '
                     'isolated from a patient and grown in pure culture.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['disease and', 'disease, and', 'disease; and', 'disease and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about isolating the organism and growing it in pure culture is '
                 'independent, so the conjunction joining it to the clause about every case takes '
                 'a comma.',
             trap='A leaves the clause about every case and the clause about culture with no mark '
                  'between them.'),
        dict(goal='explain why the postulates are still taught although they fail',
             notes=['A postulate is useful precisely because it can fail.',
                    'The first condition breaks on the asymptomatic carrier.',
                    'The second breaks on organisms that cannot be grown outside a living cell.',
                    'Modern practice replaces the missing steps with statistical association and '
                    'dose response.'],
             stem='The student wants to explain why the postulates are still taught although they '
                  'fail. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['The first condition breaks on the asymptomatic carrier',
                   'Some organisms cannot be grown outside a living cell at all',
                   'Modern practice uses statistical association and dose response',
                   'Each failure shows what is missing and what must replace it, which is why a '
                   'condition that can fail is worth laying down'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'true_not_asked'},
             why='Only this choice connects the usefulness of a failure to the substitutes it '
                 'calls for, which is what makes a failed condition worth keeping.',
             trap='C names the replacements without saying why the original conditions remain '
                  'useful.'),
    ]))

# --- 7 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='BIO-S07-L3',
    ar=dict(
        khulasa='في روثامستد بمقاطعة هرتفوردشير حقل يُسمّى برودبالك يزرع القمح تحت معاملات '
                'ثابتة منذ سنة ألف وثمانمئة وثلاث وأربعين. والحقل مقسوم شرائح، شريحة منها لم '
                'تنل شيئًا قطّ مئة وثمانين سنة، وأخرى تنال سماد المزرعة كلّ سنة بلا '
                'استثناء، والباقي ينال خلائط مقيسة.',
        maana='المعنى أنّ التجربة الطويلة تجيب ما لا تجيبه تجربة ثلاث سنوات. فالمادّة العضوية '
              'في التراب تتغيّر على العقود، فلا تظهر إلّا في سلسلة بهذا الطول أنّ الشريحة '
              'المسمّدة تصعد صعودًا مطّردًا وأنّ غير المسمّدة تستقرّ عند نحو ثلث المحصول '
              'وتبقى هناك.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الدليل: والقيمة الثانية '
                  'الأقلّ ظهورًا هي المحفوظات، فعيّنات التراب والحبّ مخزونة في أوعية '
                  'مُحكمة منذ البداية، وتُحلَّل بطرائق لم تكن موجودة يوم جُمعت.',
        sila='في اختبار سات يكثر السؤال عن وظيفة الفقرة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسب طول التجربة وحده هو الفائدة، مع '
             'أنّ النصّ يضيف المحفوظات ونتائج لم يقصدها أحد يوم بدأت. ويقترن المقطع بالمقطع '
             'السابع والستّين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Several other long-term sites exist in Illinois, Sweden and India',
                   'The treatments on Broadbalk have changed many times',
                   'The unfertilized strip yields about a third of the manured one',
                   'A fixed field for a hundred and eighty years answers what short trials '
                   'cannot'],
             key='D', moves={'A': 'true_not_asked', 'B': 'wrong_direction', 'C': 'underreach'},
             why='The text says a long-term experiment answers questions a three-year trial '
                 'cannot, names the slow processes it makes visible, and adds the value of the '
                 'archive.',
             trap='B contradicts the text, which says the treatments have barely changed.'),
        dict(stem='According to the text, what has been stored at Rothamsted since the beginning?',
             opts=['The original notebooks of the Victorian designers',
                   'Soil and grain samples in sealed jars',
                   'Weed populations gathered from each strip',
                   'Yields recorded at every harvest since 1843'],
             key='B', moves={'A': 'imported', 'C': 'detail_swap', 'D': 'near_miss'},
             why='The text says soil and grain samples have been stored since the beginning, in '
                 'sealed jars, and can be analyzed by methods that did not exist when they were '
                 'collected.',
             trap='D names the records kept rather than the physical material stored.'),
        dict(claim='the experiment has produced results nobody set out to obtain',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'experiment has produced results nobody set out to obtain?',
             opts=[Q('one of them has received nothing at all for a hundred and eighty years'),
                   Q('Soil organic matter changes over decades, so only a series of this length '
                     'shows the manured strip climbing steadily'),
                   Q('the rise of radioactive fallout in the 1950s and its decline, and changes '
                     'in soil bacteria, none of which anyone in 1843 could have intended'),
                   Q('One soil, one climate, one rotation, and a set of treatments chosen by '
                     'Victorians')],
             key='C', moves={'A': 'true_not_asked', 'B': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation ends by saying that nobody in 1843 could have intended those '
                 'measurements, which is exactly the unintended yield the claim describes.',
             trap='B names a slow process the design did aim at rather than an unintended '
                  'result.'),
        dict(carrier='Rare events are captured because the experiment happens to be running when '
                     'they occur. A trial that lasts three years is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['unlikely to be running when one arrives',
                   'certain to miss every slow process entirely',
                   'better placed to catch a rare event',
                   'limited by the choice of Victorian treatments'],
             key='A', moves={'B': 'overreach', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='A rare event is caught only by an experiment that happens to be running at the '
                 'time, so a short trial is seldom in place when one occurs.',
             trap='C reverses the comparison, since the long experiment is the one that catches '
                  'them.'),
        dict(target='proliferate',
             stem='As used in the text, what does the word %s most nearly mean?'
                  % Q('proliferate'),
             opts=['change in kind', 'become rarer', 'spread by seed', 'increase in number'],
             key='D', moves={'A': 'near_miss', 'B': 'wrong_direction', 'C': 'imported'},
             why='The sentence says weed populations proliferate and then shift in composition, so '
                 'the word names the growth in number that comes before the change in kind.',
             trap='A takes the shift in composition that the sentence names separately.'),
        dict(stem='Which choice best describes the function of the paragraph about the archive?',
             opts=['It introduces the fixed treatments for the first time',
                   'It concedes that the yields were never recorded',
                   'It adds a second value the design did not plan for',
                   'It reports the yield of the unfertilized strip'],
             key='C', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='The text calls the archive the second, less obvious value, and then lists '
                 'measurements made from the stored jars by methods that did not yet exist.',
             trap='B denies the record that the text says was kept at every harvest.'),
        dict(sibling='BIO-S07-L2',
             sibling_gloss='Text 2 is passage 67 of this book. It sets out fixation, uptake, decay '
                           'and return as the steps of the nitrogen cycle, and names harvest, '
                           'leaching and gas losses as the three ways a cropped field loses '
                           'nitrogen.',
             stem='Text 1 describes a field under fixed treatments. Based on Text 2, what would be '
                  'added to that description?',
             opts=['The unfertilized strip settles at about a third of the yield',
                   'The chemistry that makes the unfertilized strip settle where it does',
                   'Soil and grain samples have been stored in sealed jars',
                   'Rothamsted measured the leaching of nitrate from the start'],
             key='B', moves={'A': 'restatement', 'C': 'restatement', 'D': 'imported'},
             why='Text 2 names the three leaks that drain a cropped field, which is why a strip '
                 'receiving nothing holds at a low yield instead of failing altogether.',
             trap='A repeats the figure that Text 1 has already given for that strip.'),
        dict(carrier='The treatments have barely changed, the plots are in the same places, and '
                     'the yields have been recorded every harvest. ___ this is the longest '
                     'continuous agricultural experiment in the world.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['As a result,', 'By contrast,', 'Even so,', 'For example,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The unchanged treatments, the fixed plots and the unbroken record are what make '
                 'the claim about the longest experiment true, so the transition marks a '
                 'consequence.',
             trap='C sets the conclusion against the three facts that support it.'),
        dict(carrier='Slow processes become visible ___ the accumulation of phosphate, the '
                     'acidification of soil under ammonium fertilizer, and the shifting of weed '
                     'populations.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['visible, the', 'visible the', 'visible: the', 'visible; the,'],
             key='C', moves={'A': 'wrong_mark', 'B': 'run_on', 'D': 'misplaced'},
             why='A colon introduces the list of slow processes that the sentence has just '
                 'announced, which neither a comma nor a bare run of phrases can do.',
             trap='A uses a comma where the list needs the mark that announces it.'),
        dict(goal='explain why the jars matter as much as the yields',
             notes=['Soil and grain samples have been stored since 1843 in sealed jars.',
                    'They can be analyzed by methods that did not exist when they were collected.',
                    'The jars have been used to measure industrial pollution and radioactive '
                    'fallout.',
                    'Nobody in 1843 could have intended those measurements.'],
             stem='The student wants to explain why the jars matter as much as the yields. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['Because the stored samples can be read by methods invented later, the jars '
                   'answer questions the design never asked',
                   'Soil and grain samples have been stored since 1843 in sealed jars',
                   'The jars have been used to measure industrial pollution and fallout',
                   'Nobody in 1843 could have intended those measurements'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice joins the later methods to the questions the design never '
                 'asked, which is what makes the archive worth as much as the yield record.',
             trap='C names two of those later measurements without saying what made them '
                  'possible.'),
    ]))

# --- 8 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='BIO-S08-L3',
    ar=dict(
        khulasa='سجلّ ماونا لوا يبدأ سنة ألف وتسعمئة وثمان وخمسين، وكلّ ما قبله لا بدّ من '
                'إعادة بنائه، وثلاثة بدائل مستقلّة تحمل معظم الثقل. وأقواها قلب الجليد، أي '
                'أسطوانة تُستخرج من نهر جليدي، لأنّ الهواء المحتجز في فقاعاتها عيّنة '
                'فيزيائية من جوّ السنة التي نزل فيها الثلج.',
        maana='المعنى أنّ حلقات الأشجار تعطي ميزًا سنويًّا في ألفي سنة الأخيرة في أنواع '
              'مناسبة، وأنّ المرجان ينمو حِلقًا سنوية تسجّل كيمياؤها حرارة سطح البحر. ولكلّ '
              'بديل ضعف لا يشاركه فيه الآخران: فالقلوب تُملّس السجلّ، والحلقات تستجيب لعوامل '
              'عدّة، والمرجان مداريّ بحريّ.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الدليل: الجمع بين البدائل '
                  'يتوقّف على مدّة المعايرة، وهي التداخل الذي يُقارَن فيه البديل بقياس '
                  'مباشر، وهناك أشدّ ما يُنتقد المنهج، لأنّ علاقةً رُكّبت في مدّة قد لا '
                  'تصحّ في غيرها.',
        sila='في اختبار سات يكثر السؤال عن وظيفة قائمة الأضعاف وعن الدليل الذي يسند دعوى وعن '
             'الاستنتاج من جملة ناقصة. والفخّ المتوقّع هنا أن يُحسب اتّفاق البدائل خلوًّا من '
             'كلّ شكّ، مع أنّ النصّ يقول إنّ حدود الخطأ تتّسع كلّما رجعنا. ويقترن المقطع '
             'بالمقطع الثامن والستّين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Three proxies with unrelated weaknesses agree, and that agreement is the '
                   'argument',
                   'Ice cores measure carbon dioxide by inference rather than directly',
                   'Antarctic cores reach back about eight hundred thousand years',
                   'Error bars narrow as a reconstruction goes further back'],
             key='A', moves={'B': 'wrong_direction', 'C': 'underreach', 'D': 'wrong_direction'},
             why='The text introduces three proxies, gives each one its own weakness, and says the '
                 'agreement between methods with unrelated weaknesses is the real argument.',
             trap='D reverses the text, which says the error bars widen as they go back.'),
        dict(stem='According to the text, why is an ice core the strongest of the three proxies?',
             opts=['It gives annual resolution over two thousand years',
                   'It comes from two polar regions at once',
                   'Its trapped air is a physical sample of the atmosphere',
                   'Its chemistry records sea surface temperature'],
             key='C', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='The text says the air trapped in the bubbles is a physical sample of the '
                 'atmosphere of the year the snow fell, and that the carbon dioxide is measured '
                 'directly.',
             trap='A names the strength of the tree ring record rather than of the core.'),
        dict(claim='the combining of proxies is where the method is most open to challenge',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'combining of proxies is where the method is most open to challenge?',
             opts=[Q('Ice cores smooth the record, because air diffuses in the snow before the '
                     'bubbles close'),
                   Q('Tree rings respond to several variables at once and to the age of the '
                     'tree'),
                   Q('Cores from Antarctica now reach back about eight hundred thousand years'),
                   Q('a relation fitted in one period may not hold in another')],
             key='D', moves={'A': 'near_miss', 'B': 'near_miss', 'C': 'true_not_asked'},
             why='The quotation names the weakness of the calibration step itself, that a relation '
                 'established in the overlap may fail outside it, which is the challenge the '
                 'claim describes.',
             trap='A names a weakness of one proxy rather than of the step that joins them.'),
        dict(carrier='Each proxy has a weakness that the others do not share. Ice cores smooth the '
                     'record, and they come from two polar regions. Tree rings respond to several '
                     'variables at once. A conclusion all three support is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['as weak as the weakest of the three', 'not resting on any one of those flaws',
                   'free of every source of uncertainty',
                   'confined to the last two thousand years'],
             key='B', moves={'A': 'wrong_direction', 'C': 'overreach', 'D': 'detail_swap'},
             why='Because the three weaknesses are unrelated, a result that all three give cannot '
                 'be produced by any single one of them.',
             trap='C turns independence from one flaw into freedom from all uncertainty.'),
        dict(target='dormant',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('dormant'),
             opts=['unused for a long while', 'frozen through and through',
                   'lost beyond recovery', 'growing very slowly'],
             key='A', moves={'B': 'imported', 'C': 'overreach', 'D': 'imported'},
             why='The core lay dormant in a freezer for twenty years before anyone thought to '
                 'measure its bubbles, so the word reports that it sat unused.',
             trap='B takes the literal cold of the freezer rather than the idleness the sentence '
                  'reports.'),
        dict(stem='Which choice best describes the function of the three sentences naming each '
                  'weakness?',
             opts=['They introduce the calibration period for the first time',
                   'They withdraw the reconstruction as unsupported',
                   'They report the resolution each proxy achieves',
                   'They establish that the three failures are unrelated'],
             key='D', moves={'A': 'detail_swap', 'B': 'overreach', 'C': 'detail_swap'},
             why='Each sentence gives a weakness peculiar to one proxy, which is what lets the '
                 'text claim later that the agreement between methods with unrelated weaknesses '
                 'is the real argument.',
             trap='B reads a list of weaknesses as the collapse of the reconstruction.'),
        dict(sibling='BIO-S08-L2',
             sibling_gloss='Text 2 is passage 68 of this book. It explains that water vapor and '
                           'carbon dioxide absorb in the infrared, that the mechanism is a delay '
                           'rather than a trap, and that residence time and feedback decide how '
                           'much it matters.',
             stem='Text 1 describes how earlier concentrations are reconstructed. Based on Text 2, '
                  'what would be added to that account?',
             opts=['Carbon dioxide in ice cores is measured directly',
                   'Error bars widen as a reconstruction goes back',
                   'Why a reconstructed concentration is worth having at all',
                   'Ice cores record the delay in the escape of radiation'],
             key='C', moves={'A': 'restatement', 'B': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 explains what a concentration of the gas does to the energy leaving the '
                 'planet, which is the reason a record of earlier concentrations is worth '
                 'reconstructing.',
             trap='A repeats a strength of the ice core that Text 1 has already named.'),
        dict(carrier='Where instruments and proxies run together for a century, the relation can '
                     'be established and then extended backward. ___ this is also where the '
                     'method is most criticized.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['For instance,', 'At the same time,', 'As a result,', 'In other words,'],
             key='B', moves={'A': 'near_miss', 'C': 'near_miss', 'D': 'restatement'},
             why='The sentence attaches a drawback to the very step just praised, so the '
                 'transition must hold the two together rather than treat one as an example or a '
                 'consequence.',
             trap='C reads the criticism as following from the extension rather than accompanying '
                  'it.'),
        dict(carrier='The Mauna Loa record begins in 1958 ___ everything earlier has to be '
                     'reconstructed.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['in 1958, everything', 'in 1958 everything', 'in 1958, and, everything',
                   'in 1958. Everything'],
             key='D', moves={'A': 'comma_splice', 'B': 'run_on', 'C': 'misplaced'},
             why='The clause saying everything earlier has to be reconstructed is a complete '
                 'sentence, so a period separates it from the clause about when the record '
                 'begins.',
             trap='A splices the two complete sentences together with a comma.'),
        dict(goal='explain why agreement between the proxies carries more weight than any one of '
                  'them',
             notes=['An ice core traps a physical sample of the atmosphere but smooths the '
                    'record.',
                    'Tree rings give annual resolution but respond to several variables at once.',
                    'Corals record sea surface temperature but are tropical and marine.',
                    'Each proxy has a weakness the others do not share.'],
             stem='The student wants to explain why agreement between the proxies carries more '
                  'weight than any one of them. Which choice most effectively uses relevant '
                  'information from the notes to accomplish that goal?',
             opts=['An ice core traps a physical sample of the atmosphere',
                   'The three weaknesses are unrelated, so a result all three give cannot have '
                   'been produced by any of them',
                   'Tree rings give annual resolution over the last two thousand years',
                   'Corals are tropical and marine rather than polar'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice names the independence of the weaknesses and draws the '
                 'conclusion from it, which is what makes the agreement stronger than any single '
                 'record.',
             trap='A gives the strength of one proxy without touching the argument from '
                  'agreement.'),
    ]))

# --- 9 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='BIO-S09-L3',
    ar=dict(
        khulasa='قبل النشاط الإشعاعي لم تكن هناك طريقة لتأريخ صخرة، وتراوحت تقديرات عمر الأرض '
                'على مرتبتين من العِظَم. والتأريخ الإشعاعي، أي تأريخ الصخرة بنسبة ما تحلّل من '
                'عنصر مشعّ، غيّر ذلك، لأنّ العنصر المشعّ يتحلّل بمعدّل لا يغيّره شيء في '
                'الجيولوجيا، فالنسبة الباقية ساعة.',
        maana='المعنى أنّ المشكلة الباقية هي أنّ أقدم صخرة على الأرض أحدث من الأرض، لأنّ '
              'السطح يُصهر ويُدفن ويُعاد تدويره بلا انقطاع. فحلّها كلير باترسون سنة ألف '
              'وتسعمئة وثلاث وخمسين بتأريخ النيازك، بحجّة أنّها تكوّنت من السحابة نفسها في '
              'الوقت نفسه ولم تُضطرب بعدها.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الدليل: المنهج يقوم على '
                  'افتراض يجب فحصه لا تسليمه، وهو أنّ العيّنة نظام مغلق، ويُفحص بتأريخ '
                  'الصخرة نفسها بسلسلتي تحلّل يجب أن تتّفقا، وبتفضيل معادن تصبر على '
                  'التسخين.',
        sila='في اختبار سات يكثر السؤال عن وظيفة الجملة التي تسمّي شرطًا وعن الدليل وعن '
             'إكمال النصّ. والفخّ المتوقّع هنا أن يُقرأ ذكر الافتراض تشكيكًا في المنهج، مع '
             'أنّ النصّ يجعل اختلاف المنهجين نفسه دليلًا. ويقترن المقطع بالمقطع التاسع '
             'والستّين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Patterson had to build a clean laboratory to do the work',
                   'A clock that geology cannot alter settled the age, once the right sample was '
                   'found',
                   'The oldest rock on Earth gives the age of the Earth',
                   'Holmes had the order of magnitude right by the 1920s'],
             key='B', moves={'A': 'true_not_asked', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text says a radioactive element decays at a rate nothing in geology alters, '
                 'and that the remaining problem was solved by dating meteorites rather than '
                 'terrestrial rock.',
             trap='C states the difficulty the text names, since the surface has been melted and '
                  'recycled.'),
        dict(stem='According to the text, why did Patterson date meteorites instead of rocks from '
                  'Earth?',
             opts=['Because meteorites contain more uranium than zircon does',
                   'Because lead isotopes cannot be measured in terrestrial rock',
                   'Because two decay chains must be compared in the same sample',
                   'Because the oldest rock on Earth is younger than the Earth'],
             key='D', moves={'A': 'imported', 'B': 'imported', 'C': 'detail_swap'},
             why='The text says the remaining problem was that the oldest rock is younger than the '
                 'Earth, since the surface has been melted, buried and recycled continuously.',
             trap='C names one of the tests of a closed system rather than the reason for the '
                  'choice.'),
        dict(claim='a disagreement between methods is informative rather than merely awkward',
             stem='Which quotation from the text most strongly supports the claim that a '
                  'disagreement between methods is informative rather than merely awkward?',
             opts=[Q('Where two methods disagree, the rock has been disturbed, and the '
                     'disagreement itself is the evidence'),
                   Q('A radioactive element decays at a rate that nothing in geology alters'),
                   Q('Arthur Holmes spent forty years applying the method to rocks and had the '
                     'order of magnitude right by the 1920s'),
                   Q('they prefer minerals physically resilient enough to survive heating')],
             key='A', moves={'B': 'true_not_asked', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation says that where two methods disagree the rock has been disturbed '
                 'and the disagreement is itself the evidence, which is the claim exactly.',
             trap='D names the other precaution geologists take rather than what a disagreement '
                  'shows.'),
        dict(carrier='Zircon crystals are the favorite, because they hold their uranium and reject '
                     'lead so strongly that grains four billion years old are still usable. A '
                     'mineral that let lead in and out would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['give an age older than the rock around it',
                   'be preferred for its ease of measurement',
                   'fail the test of being a closed system',
                   'agree with both decay chains at once'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'wrong_direction'},
             why='The method assumes that nothing relevant has entered or escaped since the sample '
                 'formed, so a mineral that exchanged lead would break that assumption.',
             trap='D claims agreement between chains, which the text uses as the sign of an '
                  'undisturbed rock.'),
        dict(target='resilient',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('resilient'),
             opts=['quick to recover afterward', 'tough enough to last', 'common in most rocks',
                   'easy to date precisely'],
             key='B', moves={'A': 'near_miss', 'C': 'imported', 'D': 'near_miss'},
             why='The sentence says geologists prefer minerals physically resilient enough to '
                 'survive heating, so the word names durability rather than recovery or '
                 'abundance.',
             trap='A takes the sense of bouncing back, which a crystal surviving heat does not '
                  'do.'),
        dict(stem='Which choice best describes the function of the sentence about the assumption '
                  'to be checked?',
             opts=['It turns from the method to the condition the method needs',
                   'It introduces the meteorite measurement for the first time',
                   'It concedes that radiometric dating cannot be trusted',
                   'It reports the figure Patterson obtained in 1953'],
             key='A', moves={'B': 'detail_swap', 'C': 'overreach', 'D': 'detail_swap'},
             why='The sentence comes after the age has been settled and names the closed system as '
                 'something that has to be checked, which the two tests that follow then do.',
             trap='C turns a condition to be verified into a rejection of the whole method.'),
        dict(sibling='BIO-S09-L2',
             sibling_gloss='Text 2 is passage 69 of this book. It explains that there are only '
                           'three kinds of plate edge, that collision lifts rock while rain, ice '
                           'and rivers wear it down, and that the height of a range is the '
                           'balance between the two rates.',
             stem='Text 1 explains how the age of the Earth was fixed. Based on Text 2, what would '
                  'be added to that explanation?',
             opts=['The surface of the Earth has been melted and recycled',
                   'Zircon crystals hold uranium and reject lead strongly',
                   'Meteorites have been recycled in the same way as rock',
                   'The process that keeps destroying the oldest rock on Earth'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'wrong_direction'},
             why='Text 2 names the moving plates and the wearing down of ranges, which is the '
                 'machinery behind the recycling that forced Text 1 to look at meteorites '
                 'instead.',
             trap='A repeats the difficulty Text 1 has already stated rather than explaining it.'),
        dict(carrier='Geologists test it in two ways. They date the same rock with two different '
                     'decay chains, which must agree. ___ they prefer minerals physically '
                     'resilient enough to survive heating.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'Second,', 'As a result,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'near_miss'},
             why='The sentence gives the second of the two tests just announced, so the transition '
                 'must number it rather than set it against the first or derive it from the '
                 'first.',
             trap='D reads the choice of mineral as following from the comparison of decay '
                  'chains.'),
        dict(carrier='Before radioactivity there was no way to date a rock ___ and estimates for '
                     'the age of the Earth ranged over two orders of magnitude.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['rock, and', 'rock and', 'rock; and', 'rock and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about estimates ranging over two orders of magnitude is independent, '
                 'so the conjunction joining it to the clause about dating a rock takes a comma.',
             trap='B leaves the clause about dating and the clause about the estimates with no '
                  'mark between them.'),
        dict(goal='explain why a meteorite could settle a question about the Earth',
             notes=['The oldest rock on Earth is younger than the Earth, since the surface has '
                    'been recycled.',
                    'Meteorites formed from the same cloud of material at the same time.',
                    'They have been undisturbed since.',
                    'Patterson measured lead isotopes and obtained four and a half billion '
                    'years.'],
             stem='The student wants to explain why a meteorite could settle a question about the '
                  'Earth. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['The oldest rock on Earth is younger than the Earth itself',
                   'Patterson obtained four and a half billion years from lead isotopes',
                   'A meteorite formed with the Earth and has not been disturbed since, so it '
                   'keeps a clock the recycled surface has lost',
                   'Meteorites formed from the same cloud of material at the same time'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'underreach'},
             why='Only this choice joins the common origin and the undisturbed history to the '
                 'recycling that destroyed the terrestrial record, which is the whole argument.',
             trap='D gives the shared origin without the undisturbed history that makes the clock '
                  'readable.'),
    ]))

# --- 10 ------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='BIO-S10-L3',
    ar=dict(
        khulasa='آلتان مختلفتان جدًّا تقيسان ما يجري في أنتاركتيكا. الأولى قياس الجاذبية، أي '
                'قياس الكتلة بجذبها الجاذبي: زوج من الأقمار أُطلق سنة ألفين واثنتين يطير في '
                'المدار نفسه على بعد نحو مئتي كيلومتر، وتُقاس المسافة بينهما باستمرار إلى '
                'حدود ميكرونات قليلة.',
        maana='المعنى أنّ القمر المتقدّم إذا مرّ فوق منطقة أثقل انجذب إلى الأمام قليلًا، '
              'فيدلّ تغيّر الفرجة على الكتلة تحته، وتكرار المدار سنين يعطي تغيّر الكتلة. '
              'والآلة الثانية أقدم وأبسط: مقياس المدّ الثابت الذي يسجّل مستوى البحر إلى '
              'علامة محلّية، وقد تعلو الأرض التي رُكّب عليها أو تهبط.',
        ahammiyya='في مجال الأحياء وعلوم الأرض هذه المادة في مستوى الدليل: الطريقتان تفشلان '
                  'في جهتين متعاكستين، ولهذا تُستعملان معًا؛ فالجاذبية تقيس الكتلة ولا ترى '
                  'إلى أين ذهب الماء، ومقاييس المدّ تقيس ما يهمّ الميناء لكنّها متكتّلة في '
                  'نصف الأرض الشمالي.',
        sila='في اختبار سات يكثر السؤال عن الدليل الذي يسند دعوى وعن وظيفة الفقرة وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُقرأ رقم الكتلة الكلّي مستوى بحر '
             'محلّيًّا، مع أنّ النصّ يفرّق بينهما. ويقترن المقطع بالمقطع السبعين في أسئلة '
             'النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The first satellite pair was replaced in 2018',
                   'A tide gauge measures the whole ocean at once',
                   'Two instruments that fail in opposite directions are used together',
                   'Gravimetry measures the distance between two satellites'],
             key='C', moves={'A': 'true_not_asked', 'B': 'wrong_direction', 'D': 'underreach'},
             why='The text describes gravimetry and the tide gauge, says the two methods fail in '
                 'opposite directions, and names that as the reason they are used together.',
             trap='B reverses the text, which says a gauge measures the sea where it stands.'),
        dict(stem='According to the text, what must each tide gauge record be corrected for?',
             opts=['Movement of the land the gauge is bolted to',
                   'The distance between the two satellites',
                   'Water moving in the rock beneath the ice',
                   'The radar bounced off the sea surface'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says gauges measure the sea where they stand and the land they are '
                 'bolted to may itself be rising or sinking, so each record must be corrected for '
                 'ground movement.',
             trap='C names a limit of gravimetry rather than a correction a gauge needs.'),
        dict(claim='the two methods are kept because their weaknesses do not overlap',
             stem='Which quotation from the text most strongly supports the claim that the two '
                  'methods are kept because their weaknesses do not overlap?',
             opts=[Q('the distance between them was measured continuously to within a few '
                     'microns'),
                   Q('The two methods fail in opposite directions, which is why they are used '
                     'together'),
                   Q('Satellite altimetry, which bounces radar off the sea surface, now provides '
                     'a third series'),
                   Q('a loss of some hundreds of gigatons a year')],
             key='B', moves={'A': 'true_not_asked', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation states the reason outright: the two methods fail in opposite '
                 'directions, and that is why both are used.',
             trap='C names a third series rather than the reason the first two are paired.'),
        dict(carrier='Gravimetry measures mass but cannot see where the water went, and it cannot '
                     'separate ice loss from water moving in the rock beneath. A mass figure on '
                     'its own is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['enough to plan a harbor defense', 'a direct reading of local sea level',
                   'corrected by the movement of the ground',
                   'an amount without a destination'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='The method gives how much mass was lost but not where the water ended up, so the '
                 'figure names a quantity and leaves its destination open.',
             trap='B treats a global mass figure as the local reading that a gauge supplies.'),
        dict(target='mitigate',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('mitigate'),
             opts=['measure with care', 'argue against openly', 'lessen the effect of',
                   'bring about sooner'],
             key='C', moves={'A': 'near_miss', 'B': 'imported', 'D': 'wrong_direction'},
             why='The sentence describes planning that aims to mitigate a rise, so the word names '
                 'the work of reducing its effect rather than measuring or hastening it.',
             trap='D reverses the purpose, since the planning is meant to blunt the rise.'),
        dict(stem='Which choice best describes the function of the paragraph on the tide gauge?',
             opts=['It introduces satellite altimetry for the first time',
                   'It sets an older and simpler method beside the new one',
                   'It argues that gravimetry should be abandoned',
                   'It reports the separation of the two satellites'],
             key='B', moves={'A': 'detail_swap', 'C': 'overreach', 'D': 'detail_swap'},
             why='The paragraph opens by calling the second instrument older and simpler, and '
                 'describes what it measures, which prepares the comparison of how the two '
                 'methods fail.',
             trap='C turns a comparison of two methods into a case against one of them.'),
        dict(sibling='BIO-S10-L2',
             sibling_gloss='Text 2 is passage 70 of this book. It explains that water carries heat '
                           'far better than air, that a current two degrees above freezing melts '
                           'the floating ice from below, and that a retrograde slope makes each '
                           'retreat expose thicker ice.',
             stem='Text 1 describes how the loss is measured. Based on Text 2, what would be added '
                  'to that description?',
             opts=['The process that the measured loss of mass is recording',
                   'Gravimetry cannot say where the lost water went',
                   'A tide gauge measures sea level against a local benchmark',
                   'Gravimetry measured the melting beneath the floating ice'],
             key='A', moves={'B': 'restatement', 'C': 'restatement', 'D': 'wrong_direction'},
             why='Text 2 gives the warm water and the sloping bed that remove the ice, which is '
                 'what the hundreds of gigatons a year in Text 1 are a measurement of.',
             trap='B repeats a limit of gravimetry that Text 1 has already named.'),
        dict(carrier='Gauges measure the sea where they stand, and the land they are bolted to may '
                     'itself be rising or sinking. ___ each record must be corrected using '
                     'independent measurements of ground movement.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'For instance,', 'Even so,', 'For that reason,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'wrong_direction'},
             why='The correction follows from the fact that the land may move, so the transition '
                 'must mark a consequence rather than a contrast or an example.',
             trap='C sets the correction against the reason the correction is needed.'),
        dict(carrier='The second instrument is older and simpler ___ a tide gauge has been '
                     'operating in some harbors since the nineteenth century.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['simpler, a', 'simpler. A', 'simpler a', 'simpler, and, a'],
             key='B', moves={'A': 'comma_splice', 'C': 'run_on', 'D': 'misplaced'},
             why='The clause about the gauge operating in harbors since the nineteenth century is '
                 'a complete sentence, so a period separates it from the clause calling the '
                 'instrument simpler.',
             trap='A splices the clause about the harbors onto the clause about the simpler '
                  'instrument with a comma.'),
        dict(goal='explain why planning needs more than one of the three series',
             notes=['Gravimetry measures mass but cannot see where the water went.',
                    'Tide gauges measure what matters to a harbor but are clustered in rich '
                    'countries.',
                    'Satellite altimetry covers the whole ocean since 1992.',
                    'Local sea level is what floods a street and global mass is what drives it.'],
             stem='The student wants to explain why planning needs more than one of the three '
                  'series. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['Gravimetry measures mass but cannot see where the water went',
                   'Satellite altimetry has covered the whole ocean since 1992',
                   'Tide gauges are clustered in the northern hemisphere and in rich countries',
                   'Local sea level is what floods a street and global mass is what drives it, '
                   'and no single series gives both'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'underreach'},
             why='Only this choice names the two quantities that planning needs and says that no '
                 'one series supplies both, which is why all three are used.',
             trap='A gives one method and one gap without naming what the other series supply.'),
    ]))

if __name__ == '__main__':
    qemit.emit(FIELD, LEVEL, SETS)
