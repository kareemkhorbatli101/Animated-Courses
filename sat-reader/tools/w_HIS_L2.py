"""History and Civics, Level 2: ten question sets."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

Q = '«%s»'.__mod__
FIELD, LEVEL = 'HIS', 2

SETS = []

# --- 1 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HIS-S01-L2',
    ar=dict(
        khulasa='الفقرة الثانية من إعلان الاستقلال استدلال مرتّب، والترتيب أهمّ من العبارات '
                'المشهورة. تبدأ بمقدّمات تُعرض بلا إثبات لأنّ كاتبها يتوقّع الموافقة: أنّ '
                'الناس خُلقوا متساوين، وأنّ لهم حقوقًا لا تُسلب، وأنّ الحكومات قائمة لحماية '
                'تلك الحقوق. ومن هذه المقدّمات تُستخرج النتيجة فورًا: أنّ حكومة تهدم تلك '
                'الحقوق يحقّ لمن أنشأها تغييرها.',
        maana='المعنى أنّ البنية بنية مرافعة قانونية: هذا هو المعيار، وهذا هو السجلّ، وهذا '
              'هو المطلوب. فالمظالم السبع والعشرون ليست جدلًا في المبادئ بل دليل على واقعة: '
              'أنّ هذه الحكومة بعينها هدمت تلك الحقوق في وجوه مسمّاة وفي مدّة معلومة.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الآلية: كيف تعمل '
                  'الحجّة وبأي ترتيب، لا ما حدث فقط. ولذلك لا تَعِد الوثيقة بشيء عن من '
                  'يحقّ له الانتخاب ولا عن حكم الولايات، لأنّ ذلك خارج القضية الضيّقة '
                  'المطروحة.',
        sila='في اختبار سات يُسأل كثيرًا عن بنية النصّ وعن وظيفة جملة بعينها وعن الدليل '
             'الذي يسند دعوى محدّدة. والفخّ المتوقّع هنا أن تُقرأ الوثيقة كأنّها دستور، '
             'فيُنسب إليها ما تنصّ هي صراحةً على أنّها لا تقرّره. ويقترن المقطع بالمقطع '
             'الأول في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Jefferson owned more than a hundred people at the time he wrote the document',
                   'The second paragraph is a legal brief: a standard, a record, and a remedy',
                   'The Declaration sets out how the new states were to be governed',
                   'The Constitution was written eleven years after the Declaration'],
             key='B', moves={'A': 'true_not_asked', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text names the structure outright, as a standard, a record and a remedy, '
                 'which is the shape of a legal brief rather than of a statement of principle.',
             trap='C names what the text says explicitly that the document does not do.'),
        dict(stem='According to the text, what role do the twenty-seven grievances play?',
             opts=['They state the premises from which the conclusion follows',
                   'They set out the machinery of the government to come',
                   'They close off the objection about light and transient causes',
                   'They are evidence that this government destroyed those rights'],
             key='D', moves={'A': 'wrong_direction', 'B': 'imported', 'C': 'near_miss'},
             why='The text says everything after the premises is evidence for a factual claim, and '
                 'that the grievances show this particular government had in fact destroyed those '
                 'rights.',
             trap='A reverses the structure, since the premises come before the grievances and are '
                  'not them.'),
        dict(claim='the document deliberately leaves some questions unanswered',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'document deliberately leaves some questions unanswered?',
             opts=[Q('It makes no promise about who shall vote, how the new states shall be '
                     'governed, or what equality requires in practice'),
                   Q('From those premises a conclusion follows, and Jefferson draws it '
                     'immediately'),
                   Q('Jefferson owned more than a hundred people at the time of writing, which '
                     'later readers have had to reckon with'),
                   Q('The twenty-seven grievances are offered to show that this particular '
                     'government has in fact destroyed those rights')],
             key='A', moves={'B': 'underreach', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation lists three questions the document declines to settle and says it '
                 'makes no promise about any of them.',
             trap='D describes the work the grievances do rather than what the document leaves '
                  'open.'),
        dict(carrier='The actual machinery was built eleven years later and ratified in 1788, by '
                     'men who had the Declaration in front of them and treated it as settled '
                     'ground rather than as a plan to be carried out. For them the Declaration '
                     'therefore served as ___',
             stem='Which choice most logically completes the text?',
             opts=['a draft constitution still awaiting revision',
                   'a record of grievances still to be answered',
                   'a premise they did not argue about again',
                   'a document none of them had read closely'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'imported'},
             why='The framers treated the Declaration as settled ground rather than as a plan, so '
                 'it served them as something assumed rather than something argued.',
             trap='A reads settled ground as unfinished work, which is the opposite of what the '
                  'sentence says.'),
        dict(target='ratified',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('ratified'),
             opts=['argued over at length', 'formally approved', 'printed and distributed',
                   'set aside for later'],
             key='B', moves={'A': 'near_miss', 'C': 'imported', 'D': 'wrong_direction'},
             why='The machinery was built and then ratified in 1788, so the word names the formal '
                 'act of approval that put it into force.',
             trap='A confuses the ratification debates with the act of ratifying itself.'),
        dict(stem='Which choice best describes the function of the sentence that calls the '
                  'structure a legal brief?',
             opts=['It names the shape that the preceding analysis has established',
                   'It introduces the twenty-seven grievances for the first time',
                   'It concedes that the document is poorly organized',
                   'It explains why Jefferson drew the conclusion immediately'],
             key='A', moves={'B': 'detail_swap', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The sentence comes after the premises, the evidence and the answered objection '
                 'have each been described, and gives the whole arrangement its name.',
             trap='B treats a summarizing sentence as an introduction to material already '
                  'discussed.'),
        dict(sibling='HIS-S01-L1',
             sibling_gloss='Text 2 is passage 1 of this book. It reports that the vote for '
                           'independence and the text explaining it were separate acts two days '
                           'apart, that most of the document is a list of particular complaints, '
                           'and that Congress was building a legal case.',
             stem='Text 1 analyzes the reasoning of the second paragraph. Based on Text 2, what '
                  'would be added to that account?',
             opts=['The conclusion follows immediately from the premises stated',
                   'The grievances were added after the conclusion had been drafted',
                   'The document makes no promise at all about who shall vote',
                   'The proportions matter: the particulars take up most of the page'],
             key='D', moves={'A': 'restatement', 'B': 'imported', 'C': 'near_miss'},
             why='Text 2 reports that the grievances take up most of the document, which gives the '
                 'reasoning a shape on the page that an analysis of its logic alone does not show.',
             trap='A restates a point Text 1 has already made rather than adding anything from '
                  'Text 2.'),
        dict(carrier='Everything after that is evidence for a factual claim rather than argument '
                     'about principle. ___ the document also closes off the obvious objection.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'In other words,', 'Beyond that,', 'For instance,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'restatement', 'D': 'near_miss'},
             why='The sentence adds a second thing the document does, rather than setting itself '
                 'against the first or restating it.',
             trap='A puts the closing off of an objection in opposition to the offering of '
                  'evidence.'),
        dict(carrier='The structure is a legal brief ___ here is the standard, here is the record, '
                     'here is the remedy.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['brief: here', 'brief, here', 'brief here', 'brief; here,'],
             key='A', moves={'B': 'comma_splice', 'C': 'run_on', 'D': 'unpaired'},
             why='A colon introduces the list that spells out what the legal brief consists of, '
                 'which a comma or no mark at all could not do.',
             trap='B joins an independent clause to the list with a comma alone, which is a '
                  'splice.'),
        dict(goal='explain why the Declaration cannot be read as a plan of government',
             notes=['The second paragraph moves from premises to a conclusion in order.',
                    'Everything after the premises is evidence for a factual claim.',
                    'The document makes no promise about who shall vote or how the new states '
                    'shall be governed.',
                    'The actual machinery was built eleven years later and ratified in 1788.'],
             stem='The student wants to explain why the Declaration cannot be read as a plan of '
                  'government. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['The second paragraph of the Declaration moves from premises to a conclusion '
                   'in order',
                   'The machinery of government was built eleven years later and ratified in '
                   '1788',
                   'The Declaration argues one narrow case and makes no promise about voting or '
                   'government, which the machinery of 1788 supplied instead',
                   'Readers who come to the document expecting a constitution find a brief for '
                   'separation'],
             key='C', moves={'A': 'restatement', 'B': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice joins what the document declines to settle with the later '
                 'document that settled it, which is what the goal requires.',
             trap='A repeats a note about the logic without touching the question of government.'),
    ]))

# --- 2 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HIS-S02-L2',
    ar=dict(
        khulasa='لم يكن واضعو الدستور خائفين من الملوك وحدهم، بل كانوا قلقين بالقدر نفسه من '
                'الأغلبيات. ومقالة الفيدرالي العاشرة هي جيمس ماديسون يشرح السبب. ومصطلحه '
                'للخطر هو الفئة: جماعة تجمعها مصلحة أو عاطفة مشتركة تناقض حقوق الآخرين أو '
                'الصالح العامّ. والفئات، كما يحتجّ، لا يمكن منعها، لأنّ أسبابها مزروعة في '
                'طبيعة الإنسان.',
        maana='المعنى أنّ ما لا يُمنع سببه يُضبط أثره، وماديسون يقدّم آليتين. الأولى الحجم: '
              'في جمهورية صغيرة تصير مصلحة واحدة أغلبية بسهولة، أمّا في بلد واسع متنوّع '
              'فتحتاج الفئة إلى تجميع جماعات كثيرة، فتتعدّل مطالبها في التجميع. والثانية '
              'التمثيل: تُوكَل السلطة إلى منتخبين لا تُمارس مباشرة.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الآلية: لماذا بُنيت '
                  'الآلة هكذا، لا وصفها فقط. وكلّ أداة في التصميم تُبطئ الأغلبية وتُلزمها '
                  'بالبقاء أكثر من موسم رأي واحد.',
        sila='في اختبار سات تتكرّر المقالات الحجاجية، ويُسأل عن الاستنتاج وعن وظيفة جملة '
             'تتضمّن تحفّظًا. والفخّ الشائع أن يُقرأ التعديل الجزئي كأنّه تراجع عن الحجّة '
             'كلّها، أو أن يُحوّل الإبطاء إلى منع تامّ. ويقترن المقطع بالمقطع الثاني في '
             'أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Federalist 10 was published in a New York newspaper in November 1787 under a '
                   'pen name',
                   'Madison expected election to filter upward toward people of some judgment',
                   'Faction cannot be prevented, so the Constitution was built to control its '
                   'effects',
                   'The men who wrote the Constitution were afraid of kings above all else'],
             key='C', moves={'A': 'true_not_asked', 'B': 'underreach', 'D': 'wrong_direction'},
             why='Madison holds that the causes of faction cannot be removed without removing '
                 'liberty, so the design aims at the effects, through size and representation.',
             trap='D inverts the opening sentence, which says they were not afraid of kings only.'),
        dict(stem='According to the text, why can faction not be prevented?',
             opts=['Because its causes are sown in the nature of man',
                   'Because a large republic always contains many interests',
                   'Because elected members cannot be trusted to deliberate',
                   'Because the Constitution gives each branch a veto'],
             key='A', moves={'B': 'near_miss', 'C': 'imported', 'D': 'detail_swap'},
             why='The text says factions cannot be prevented because their causes are sown in the '
                 'nature of man, and that removing them would mean removing liberty.',
             trap='B gives one of the remedies Madison offers rather than the reason prevention is '
                  'impossible.'),
        dict(claim='the design slows a majority rather than blocking it',
             stem='Which quotation from the text most strongly supports the claim that the design '
                  'slows a majority rather than blocking it?',
             opts=[Q('Factions, he argues, cannot be prevented, because their causes are sown in '
                     'the nature of man'),
                   Q('Each of these slows a majority down and forces it to persist through more '
                     'than one season of opinion'),
                   Q('Federalist 10 was published in a New York newspaper in November 1787 under '
                     'the name Publius'),
                   Q('Power is delegated to elected members rather than exercised directly')],
             key='B', moves={'A': 'near_miss', 'C': 'true_not_asked', 'D': 'underreach'},
             why='The sentence says each device slows a majority down and forces it to persist, '
                 'which is delay rather than prevention.',
             trap='A explains why prevention is impossible rather than what the design does '
                  'instead.'),
        dict(carrier='In a small republic one interest can easily become a majority, but across a '
                     'large and various country a faction must assemble so many different groups '
                     'that its demands get moderated in the assembling. Size therefore works by '
                     '___',
             stem='Which choice most logically completes the text?',
             opts=['removing the causes of faction from political life',
                   'giving each branch a power to block the others',
                   'ensuring that no majority can ever be assembled',
                   'raising the price of putting a majority together'],
             key='D', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'C': 'overreach'},
             why='A faction in a large country must assemble many groups and is moderated in the '
                 'assembling, so size makes a majority costlier to build.',
             trap='C turns moderation into impossibility, which overstates what Madison claims for '
                  'size.'),
        dict(target='delegated',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('delegated'),
             opts=['argued over in public', 'written down in law',
                   'handed over to be used by others', 'divided into equal shares'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'wrong_direction'},
             why='Power is delegated to elected members rather than exercised directly, so the '
                 'word names power handed to others to use.',
             trap='B treats delegation as a matter of wording rather than of who exercises the '
                  'power.'),
        dict(stem='Which choice best describes the function of the sentence admitting that Madison '
                  'may have been wrong?',
             opts=['It withdraws the argument of the preceding paragraph',
                   'It marks one expectation as having failed while the mechanisms stand',
                   'It introduces the two chambers described in the next paragraph',
                   'It explains why Federalist 10 was published under a pen name'],
             key='B', moves={'A': 'overreach', 'C': 'detail_swap', 'D': 'imported'},
             why='The remark concerns only the expectation that election would filter upward, and '
                 'the two mechanisms it follows are left standing.',
             trap='A reads a limited concession as the abandonment of the whole argument.'),
        dict(sibling='HIS-S02-L1',
             sibling_gloss='Text 2 is passage 2 of this book. It reports that the Constitution '
                           'gives each of three branches at least one power that can stop the '
                           'others, that Congress holds the money and the courts may refuse to '
                           'apply a law, and that the result is slow by design.',
             stem='Text 1 gives Madison two mechanisms, size and representation. Based on Text 2, '
                  'what third mechanism does the finished Constitution add?',
             opts=['Blocks held by each branch against the work of the others',
                   'A requirement that treaties be approved by two thirds of the Senate',
                   'The printing of the finished text in four pages',
                   'A guarantee that every faction is represented in Congress'],
             key='A', moves={'B': 'near_miss', 'C': 'underreach', 'D': 'imported'},
             why='Text 2 describes a lock held by each branch on part of the work of the others, '
                 'which is a device of mutual blocking rather than of size or representation.',
             trap='B names one instance of the blocking power rather than the mechanism itself.'),
        dict(carrier='Any attempt to remove them would require removing liberty or enforcing a '
                     'single opinion on everyone. ___ if the cause cannot be removed, the effects '
                     'must be controlled.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Nevertheless,', 'For example,', 'In other words,', 'Therefore,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'restatement'},
             why='The impossibility of removing the causes is the reason for turning to the '
                 'effects, so the second sentence follows from the first.',
             trap='A sets the turn to effects against the impossibility, when it follows from it.'),
        dict(carrier='Madison expected election to filter upward toward people of some judgment '
                     '___ he may have been wrong about that.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['judgment he', 'judgment, and', 'judgment; and', 'judgment, he'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'comma_splice'},
             why='The two halves are independent clauses, so a coordinating conjunction with a '
                 'comma before it joins them.',
             trap='D joins the two clauses with a comma and no conjunction, which is a splice.'),
        dict(goal='explain to a reader why the Constitution contains so many separate obstacles',
             notes=['Factions cannot be prevented, because their causes are sown in the nature of '
                    'man.',
                    'If the cause cannot be removed, the effects must be controlled.',
                    'Madison offers two mechanisms: the size of the republic and representation.',
                    'Each device slows a majority down and forces it to persist through more than '
                    'one season of opinion.'],
             stem='The student wants to explain to a reader why the Constitution contains so many '
                  'separate obstacles. Which choice most effectively uses relevant information '
                  'from the notes to accomplish that goal?',
             opts=['Madison offers two mechanisms, the size of the republic and representation',
                   'The causes of faction cannot be removed without removing liberty itself',
                   'Each device slows a majority down and forces it to persist over time',
                   'Since faction cannot be prevented, the design multiplies obstacles so that a '
                   'majority must persist beyond one season of opinion'],
             key='D', moves={'A': 'restatement', 'B': 'underreach', 'C': 'true_not_asked'},
             why='Only this choice gives the reason for the number of obstacles, which is that the '
                 'causes of faction cannot be removed and only its effects can be slowed.',
             trap='A names the mechanisms without explaining why obstacles are needed at all.'),
    ]))
