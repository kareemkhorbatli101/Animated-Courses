"""History and Civics, Level 1: ten question sets."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

Q = '«%s»'.__mod__
FIELD, LEVEL = 'HIS', 1

SETS = []

SETS.append(dict(
    id='HIS-S01-L1',
    ar=dict(
        khulasa='اجتمع المؤتمر القاري الثاني في فيلادلفيا صيف عام ألف وسبعمئة وستة وسبعين، '
                'وصوّت المندوبون في الثاني من تموز على الانفصال عن بريطانيا، ثم أقرّوا بعد '
                'يومين النصّ الذي يشرح الأسباب. كتب توماس جيفرسون المسودة الأولى، وحذف '
                'المؤتمر نحو ربعها. وتتألف الوثيقة من ثلاثة أقسام: مقدمة تقرّر مصدر سلطة أي '
                'حكومة، وقسم أوسط يسرد المظالم على الملك جورج الثالث، ثم الخاتمة.',
        maana='المعنى الأساسي أنّ الوثيقة بُنيت مرافعةً قانونية لا بيانَ مبادئ. فالمظالم '
              'تشغل معظم الصفحة لأنّ القضية القانونية تحتاج تفاصيل محدّدة: فعلٌ بعينه، في '
              'تاريخ، وفي مكان. وهذا يفسّر ما يفاجئ من يقرأ السطور الأولى وحدها.',
        ahammiyya='في مجال التاريخ والنظام المدني تمثّل هذه المادة مستوى الظاهرة: واقعة '
                  'مؤرّخة ومسمّاة يُبنى عليها لاحقًا فهم الآلية والدليل والخلاف. ومن دون '
                  'معرفة ما تقوله الوثيقة فعلًا يصعب تقييم أي حجّة تُبنى عليها.',
        sila='في اختبار سات تتكرّر النصوص التأسيسية كثيرًا، ويُسأل عنها عادةً في الفكرة '
             'المركزية والدليل النصّي وبنية المقطع. والفخّ الشائع اختيار تفصيل صحيح لا يجيب '
             'عن السؤال، كذكر طباعة النسخ أو قراءتها في الساحات بدل سبب طول قائمة المظالم. '
             'ويقترن هذا المقطع بالمقطع الحادي والخمسين ليكوّنا نصّين متقابلين.'),
    qs=[
        # 1 central_idea, easy
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Copies of the Declaration were printed and read aloud across the colonies '
                   'within a week of its approval',
                   'Most of the Declaration is a list of particular complaints, because Congress '
                   'was building a legal case against the king',
                   'Thomas Jefferson wrote the Declaration alone, and Congress approved his draft '
                   'without altering it',
                   'The Declaration proves that every government everywhere draws its power from '
                   'the people it rules'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'overreach'},
             why='Most of the document is a list of particular grievances because Congress was '
                 'assembling a legal case against the king, which the third paragraph states '
                 'outright.',
             trap='A is true of the text but reports a detail rather than its main idea.'),
        # 2 detail, easy
        dict(stem='According to the text, what did Congress do with the draft that Jefferson '
                  'produced?',
             opts=['It approved the draft without making changes to it',
                   'It returned the draft to a committee of five to be rewritten',
                   'It added the list of grievances to the draft itself',
                   'It cut about a quarter of what he had written'],
             key='D', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'C': 'imported'},
             why='The second paragraph states that Congress cut about a quarter of what Jefferson '
                 'produced after the other committee members left most of the writing to him.',
             trap='A reverses the record, since the draft was shortened rather than approved '
                  'untouched.'),
        # 3 evidence, medium
        dict(claim='the Declaration was written as a legal argument rather than as a statement '
                   'of principle',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'Declaration was written as a legal argument rather than as a statement of '
                  'principle?',
             opts=[Q('Congress was building a legal case, and a legal case needs particulars'),
                   Q('Thomas Jefferson wrote the first draft in about two weeks'),
                   Q('Copies were read out in public squares within the week'),
                   Q('He had shut down elected assemblies, kept soldiers in the colonies in time '
                     'of peace')],
             key='A', moves={'B': 'true_not_asked', 'C': 'underreach', 'D': 'near_miss'},
             why='The quotation says directly that Congress was assembling a legal case and that '
                 'such a case requires particulars, which is the claim at issue.',
             trap='D quotes the grievances themselves, which show what the case contained rather '
                  'than that it was a legal case.'),
        # 4 inference, medium
        dict(carrier='The Declaration was approved on July 4, 1776, but Congress had no army fund '
                     'and no treasury of its own that July. It established both within the year, '
                     'which suggests that the vote to separate ___',
             stem='Which choice most logically completes the text?',
             opts=['was delayed until the institutions it required already existed',
                   'had little effect on how the Congress afterward spent its time',
                   'created obligations the Congress was not yet equipped to meet',
                   'was carried out by Thomas Jefferson without the other delegates'],
             key='C', moves={'A': 'wrong_direction', 'B': 'underreach', 'D': 'imported'},
             why='Congress voted to separate before it had either an army fund or a treasury and '
                 'then had to build both within the year, so the vote committed it to work it '
                 'could not yet do.',
             trap='A inverts the sequence, since the institutions followed the vote rather than '
                  'preceding it.'),
        # 5 words_in_context, easy
        dict(target='established',
             stem='As used in the text, what does the word %s most nearly mean?'
                  % Q('established'),
             opts=['demonstrated as true', 'brought into being', 'made peace with',
                   'took control of'],
             key='B', moves={'A': 'near_miss', 'C': 'imported', 'D': 'wrong_direction'},
             why='Congress had neither an army fund nor a treasury and then had both, so here the '
                 'word means brought into being rather than proved.',
             trap='A gives the other common sense of the word, as in establishing that something '
                  'is true.'),
        # 6 structure, medium
        dict(stem='Which choice best describes the function of the third paragraph in the text as '
                  'a whole?',
             opts=['It explains why the bulk of the document is taken up by complaints',
                   'It lists the grievances that the second paragraph had only named',
                   'It describes how copies of the document were distributed and read',
                   'It corrects the account of the drafting given in the paragraph before'],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'imported'},
             why='The paragraph opens by noting that the grievances take up most of the page and '
                 'then supplies the reason, which is that a legal case needs particulars.',
             trap='B describes work the second paragraph has already done rather than the third.'),
        # 7 cross_text, hard
        dict(sibling='HIS-S01-L2',
             sibling_gloss='Text 2 is passage 51 of this book. It argues that the second paragraph '
                           'of the Declaration moves from premises to a conclusion in order, and '
                           'that the grievances are offered as evidence for a factual claim '
                           'rather than as argument about principle.',
             stem='Text 1 reports that the grievances take up most of the document. Based on Text '
                  '2, how would its author most likely explain that proportion?',
             opts=['The grievances were the only part of the document Congress could agree on',
                   'The opening principles were added after the complaints had been drafted',
                   'The document was shortened by a quarter, which left mostly complaints',
                   'The premises needed no proof, so the space went to the factual claim'],
             key='D', moves={'A': 'imported', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='Text 2 holds that the premises are offered without proof while the grievances '
                 'are evidence for a factual claim, so the evidence is what needs the space.',
             trap='C uses a real detail, the cut of a quarter, to explain a proportion it did not '
                  'produce.'),
        # 8 transitions, easy
        dict(carrier='Congress had no army fund and no treasury of its own that July. ___ it '
                     'established both within the year.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['For instance,', 'Likewise,', 'Nevertheless,', 'In other words,'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'restatement'},
             why='Congress lacked both an army fund and a treasury and then built both within the '
                 'year, so the two sentences stand in contrast.',
             trap='D would fit if the second sentence restated the first, but it reports a change '
                  'instead.'),
        # 9 boundaries, easy
        dict(carrier='The Declaration of Independence was printed in a shop a few streets from the '
                     'room where Congress had voted ___ copies were read out in public squares '
                     'within the week.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['voted; copies', 'voted, copies', 'voted copies', 'voted: copies'],
             key='A', moves={'B': 'comma_splice', 'C': 'run_on', 'D': 'wrong_mark'},
             why='Both halves are independent clauses, so a semicolon is needed rather than a '
                 'comma, a colon, or no mark at all.',
             trap='B is the comma splice, joining two independent clauses with only a comma.'),
        # 10 synthesis, medium
        dict(goal='explain to an audience unfamiliar with the subject why the document contains '
                  'so many complaints',
             notes=['The grievances take up most of the page.',
                    'Congress was building a legal case, and a legal case needs particulars.',
                    'Each complaint named something the king had actually done, on a date, in a '
                    'place.',
                    'Readers who know only the opening lines are surprised by the proportion.'],
             stem='The student wants to explain to an audience unfamiliar with the subject why the '
                  'document contains so many complaints. Which choice most effectively uses '
                  'relevant information from the notes to accomplish that goal?',
             opts=['The Declaration has three parts, and the middle one is a list of grievances '
                   'against the king',
                   'Readers who know only the opening lines are surprised, although the grievances '
                   'take up most of the page',
                   'The Declaration gives most of its space to grievances because Congress was '
                   'making a legal case, which needs named particulars',
                   'Congress named each complaint on a date and in a place, and the war had '
                   'already run for more than a year'],
             key='C', moves={'A': 'underreach', 'B': 'restatement', 'D': 'true_not_asked'},
             why='Only this choice gives the reason for the proportion, tying the space taken by '
                 'the grievances to the legal case that required named particulars.',
             trap='B repeats two of the notes without explaining the proportion the student set '
                  'out to explain.'),
    ]))


# --- 2 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HIS-S02-L1',
    ar=dict(
        khulasa='تقسم الوثيقة الدستورية المكتوبة في فيلادلفيا عام ألف وسبعمئة وسبعة وثمانين '
                'عمل الحكومة بين ثلاث سلطات: الكونغرس يشرّع، والرئيس ينفّذ، والمحاكم تفسّر '
                'القانون في القضايا. ولكلّ سلطة وسيلة واحدة على الأقل لإيقاف الأخريين: '
                'الكونغرس يملك المال، والرئيس يملك حقّ النقض، والمحاكم تملك مراجعة دستورية '
                'القوانين.',
        maana='المعنى أنّ البطء ليس عيبًا في الصياغة بل قرار مقصود. فواضعو الخطة رأوا ملكًا '
              'يحكم بلا رضى ثم رأوا مجالس ولايات تفعل ما تشاء، فأرادوا سلطة حقيقية لكن '
              'قابلة للمحاسبة، فجعلوا كلّ فرع يقفل جزءًا من عمل الآخر.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الظاهرة: وصف آلة '
                  'الحكم كما كُتبت، قبل الانتقال إلى سبب بنائها هكذا وإلى الخلاف حول '
                  'نتائجها. وفهم الأقفال الثلاثة شرط لقراءة أي نقاش لاحق عن الجمود.',
        sila='في اختبار سات يكثر سؤال الفكرة المركزية حول نصوص تأسيسية كهذه، ويكثر معه فخّ '
             'توقّع تسلسل قيادة بدل توقّع نزاع بين أنداد. وتصلح تفاصيل مثل حقّ النقض '
             'ونسبة الثلثين لأسئلة التفاصيل، كما يصلح المقطع للاقتران بالمقطع الثاني '
             'والخمسين في أسئلة النصوص المتقابلة.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The Constitution was written at Philadelphia in 1787, and its first printing '
                   'ran to four pages',
                   'Federal judges are appointed for life so that unpopular rulings cannot cost '
                   'them their posts',
                   'The Constitution gives each branch a power that can block the others, and the '
                   'resulting slowness is deliberate',
                   'The three branches of the federal government were designed to work as a chain '
                   'of command'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'wrong_direction'},
             why='Each branch holds at least one way of stopping the others, those blocks were put '
                 'in deliberately, and the text calls the resulting slowness a matter of design.',
             trap='D names the arrangement readers expect, which the closing sentences reject '
                  'outright.'),
        dict(stem='According to the text, what must happen before a federal dollar can be spent?',
             opts=['Congress must pass an appropriation',
                   'The Senate must agree to the treaty',
                   'A court must find the spending constitutional',
                   'The President must sign the measure into law'],
             key='A', moves={'B': 'detail_swap', 'C': 'imported', 'D': 'near_miss'},
             why='The text states that no federal dollar may be spent unless Congress has passed '
                 'an appropriation, which it defines as a vote that releases funds.',
             trap='D confuses signing a bill with releasing money, which the text assigns to '
                  'Congress alone.'),
        dict(claim='the slowness of the federal system was intended rather than accidental',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'slowness of the federal system was intended rather than accidental?',
             opts=[Q('The first printing of the finished text ran to four pages'),
                   Q('None of this was an accident of drafting'),
                   Q('The courts decide what the law means in particular cases'),
                   Q('Readers meeting the system for the first time often expect a chain of '
                     'command')],
             key='B', moves={'A': 'true_not_asked', 'C': 'underreach', 'D': 'near_miss'},
             why='The sentence denies directly that the arrangement came about by accident, which '
                 'is exactly what the claim asserts about intention.',
             trap='D reports what readers expect rather than what the drafters intended.'),
        dict(carrier='A measure that two branches want and the third does not will usually fail, '
                     'while a measure all three want can move in a week. A government built this '
                     'way therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['cannot pass any law without wide public support',
                   'places the courts above the other two branches',
                   'was intended to be run by a single executive',
                   'acts quickly only where agreement is already wide'],
             key='D', moves={'A': 'overreach', 'B': 'wrong_direction', 'C': 'imported'},
             why='A measure all three branches want can move in a week while a measure two want '
                 'usually fails, so speed follows from how wide the agreement is.',
             trap='A converts a condition about three branches into one about the whole public.'),
        dict(target='authority',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('authority'),
             opts=['expert opinion', 'written permission', 'power to govern', 'legal custody'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'wrong_direction'},
             why='The men at the convention wanted governing power to be real but answerable, so '
                 'the word names power to govern rather than an opinion or a document.',
             trap='A gives the sense in which a person is an authority on a subject.'),
        dict(stem='Which choice best describes the function of the second paragraph in the text '
                  'as a whole?',
             opts=['It argues that the courts have become the strongest of the three branches',
                   'It gives the particular powers by which each branch can block the others',
                   'It explains why the men at the convention distrusted state assemblies',
                   'It describes how long the finished text was when it was first printed'],
             key='B', moves={'A': 'imported', 'C': 'near_miss', 'D': 'underreach'},
             why='The second paragraph supplies the specific blocks: the appropriation, the veto '
                 'and its override, Senate consent to treaties and appointments, and judicial '
                 'review.',
             trap='C describes the explanation offered in the third paragraph rather than the '
                  'second.'),
        dict(sibling='HIS-S02-L2',
             sibling_gloss='Text 2 is passage 52 of this book. It presents Federalist 10, in which '
                           'Madison treats faction as impossible to prevent and aims instead at '
                           'controlling its effects, using the size of the republic and '
                           'representation as his two mechanisms.',
             stem='Text 1 describes a system that is slow by design. Based on Text 2, how would '
                  'its author most likely justify that slowness?',
             opts=['It forces a majority to persist through more than one season of opinion',
                   'It keeps the courts from reviewing the work of the other two branches',
                   'It ensures that faction is removed from political life altogether',
                   'It lets a single executive act without consulting the other branches'],
             key='A', moves={'B': 'wrong_direction', 'C': 'overreach', 'D': 'imported'},
             why='Text 2 holds that faction cannot be prevented and must instead be slowed, and '
                 'that each device makes a majority persist beyond one season of opinion.',
             trap='C promises the removal of faction, which Text 2 says explicitly cannot be '
                  'done.'),
        dict(carrier='The Senate must agree to treaties and to senior appointments, judges '
                     'included. ___ the courts may hold that a law conflicts with the '
                     'Constitution and refuse to apply it.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['For example,', 'As a result,', 'In other words,', 'In addition,'],
             key='D', moves={'A': 'near_miss', 'B': 'wrong_direction', 'C': 'restatement'},
             why='Senate consent and judicial review are two further items in a list of blocks, so '
                 'the sentence adds to the one before rather than following from it.',
             trap='B asserts that judicial review results from Senate consent, which the text '
                  'never claims.'),
        dict(carrier='The President may veto a bill ___ Congress can then pass it anyway only with '
                     'two thirds of each chamber.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['bill, Congress', 'bill, but Congress', 'bill Congress', 'bill; but Congress'],
             key='B', moves={'A': 'comma_splice', 'C': 'run_on', 'D': 'wrong_mark'},
             why='Two independent clauses need a comma together with a coordinating conjunction, '
                 'and the contrast between the veto and the override calls for but.',
             trap='A is the comma splice, joining two independent clauses with a comma and no '
                  'conjunction.'),
        dict(goal='emphasize why a measure can fail even when much of the government supports it',
             notes=['Congress makes law, the President carries it out, and the courts decide what '
                    'the law means.',
                    'Each branch holds at least one way of stopping the others.',
                    'A measure that two branches want and the third does not will usually fail.',
                    'The first printing of the finished text ran to four pages.'],
             stem='The student wants to emphasize why a measure can fail even when much of the '
                  'government supports it. Which choice most effectively uses relevant information '
                  'from the notes to accomplish that goal?',
             opts=['The Constitution divides the work of government among three branches, each '
                   'with a task of its own',
                   'The finished text of the Constitution ran to four pages when it was first '
                   'printed',
                   'Each branch of the federal government holds at least one way of stopping the '
                   'other two',
                   'Because each branch can block the others, a measure that two branches want '
                   'will usually fail if the third does not'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'restatement'},
             why='Only this choice ties the blocking power to the outcome the student wants '
                 'emphasized, which is the failure of a measure that two branches support.',
             trap='C states the blocking power without drawing the consequence the goal asks for.'),
    ]))

# --- 3 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='HIS-S03-L1',
    ar=dict(
        khulasa='في تموز عام ألف وثمانمئة وثمانية وأربعين اجتمع نحو ثلاثمئة شخص في كنيسة '
                'صغيرة في سينيكا فولز بغرب نيويورك، بدعوة من إليزابيث كادي ستانتون ولوكريشا '
                'موت. وأصدر المؤتمر وثيقة سمّاها إعلان المشاعر، استعارت عن قصد صيغة إعلان '
                'الاستقلال وبدّلت جملته لتقرأ أنّ الرجال والنساء خُلقوا متساوين، ثم سردت '
                'المظالم على المنوال نفسه.',
        maana='المعنى أنّ أشدّ البنود إثارةً للخلاف كان المطالبة بحقّ الانتخاب. فمن أحد عشر '
              'قرارًا مرّت عشرة بسهولة، وكاد قرار الانتخاب يسقط، لأنّ بعض الحاضرين خشي أن '
              'يجعل بقيّة القائمة تبدو سخيفة. وقد تحقّق الحقّ بعد اثنتين وسبعين سنة.',
        ahammiyya='في مجال التاريخ والنظام المدني تقف هذه المادة في مستوى الظاهرة: واقعة '
                  'مؤرّخة ووثيقة محدّدة وقائمة قرارات معروفة، يُبنى عليها لاحقًا تحليل كيف '
                  'اتّسع حقّ الانتخاب فعلًا وما حدود ما يصنعه تعديل دستوري.',
        sila='في اختبار سات يُسأل عن مثل هذه الوثائق في الفكرة المركزية وفي الدليل النصّي '
             'وفي وظيفة جملة بعينها. والفخّ المتوقّع هنا أن يُحسب عداء الصحف على أنّه '
             'المقاومة المقصودة، مع أنّ المقاومة الحقيقية جاءت من داخل المؤتمر نفسه. '
             'ويقترن المقطع بالمقطع الثالث والخمسين لأسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The Seneca Falls convention met in a chapel in a small town in western New '
                   'York',
                   'Frederick Douglass ran an abolitionist newspaper in Rochester and attended '
                   'the convention',
                   'The Declaration of Sentiments was treated as a joke by the newspapers of the '
                   'period',
                   'A convention in 1848 borrowed the form of the Declaration of Independence and '
                   'nearly failed to demand the vote'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'wrong_direction'},
             why='The two chief points of the text are the deliberate borrowing of the 1776 form '
                 'and the near failure of the single resolution that asked for the vote.',
             trap='A reports the setting of the meeting rather than what the meeting did.'),
        dict(stem='According to the text, how many of the eleven resolutions passed easily?',
             opts=['All eleven of them', 'Ten of the eleven', 'Only the one about the vote',
                   'Fewer than half of them'],
             key='B', moves={'A': 'overreach', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The text states that eleven resolutions came before the meeting, that ten '
                 'passed easily, and that the one asking for the vote was argued over.',
             trap='A overstates the record, since one of the eleven nearly failed.'),
        dict(claim="the convention's own supporters resisted the demand for the vote",
             stem='Which quotation from the text most strongly supports the claim that the '
                  "convention's own supporters resisted the demand for the vote?",
             opts=[Q('Newspapers treated the whole affair as a joke for weeks'),
                   Q('Married women could not own property in their own names. They could not '
                     'keep the wages they earned'),
                   Q('a demand to expand the franchise, meaning the right to vote, would make the '
                     'rest of the list look ridiculous'),
                   Q('Sixty-eight women and thirty-two men put their names to it, and some later '
                     'asked for their names to be removed')],
             key='C', moves={'A': 'near_miss', 'B': 'true_not_asked', 'D': 'underreach'},
             why='The quotation reports that people at the convention itself feared the demand for '
                 'the vote would make the other complaints look ridiculous.',
             trap='A describes hostility from outside the convention rather than from within it.'),
        dict(carrier='The vote arrived seventy-two years later, in 1920, by which time only one of '
                     'those who signed was still alive to use it. The work of the convention '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['outlasted almost everyone who had done it',
                   'was abandoned by its organizers within a decade',
                   'secured its full list of demands in 1848',
                   'mattered less than the newspaper coverage it drew'],
             key='A', moves={'B': 'imported', 'C': 'wrong_direction', 'D': 'underreach'},
             why='Seventy-two years passed before the vote arrived and only one signer was still '
                 'alive to use it, so the work outlived nearly all of the people who did it.',
             trap='C confuses the demand made in 1848 with the result secured in 1920.'),
        dict(target='expand',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('expand'),
             opts=['explain in more detail', 'push outward by force', 'do away with entirely',
                   'widen to take in more people'],
             key='D', moves={'A': 'near_miss', 'B': 'wrong_direction', 'C': 'imported'},
             why='The demand was to extend the right to vote to women, so the word means to widen '
                 'the group of people who hold it.',
             trap='A gives the sense in which a speaker expands on a point already made.'),
        dict(stem='Which choice best describes the function of the sentence reporting that the '
                  "document's form was borrowed on purpose?",
             opts=['It concedes that the convention produced nothing original',
                   'It explains why newspapers treated the convention as a joke',
                   'It marks the borrowing as a deliberate argumentative choice',
                   'It introduces the eleven resolutions that came before the meeting'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'near_miss'},
             why='The sentence says the form was borrowed on purpose, presenting the echo of 1776 '
                 'as a chosen argument rather than an accident of style.',
             trap='A reads a deliberate borrowing as an admission of having nothing of its own.'),
        dict(sibling='HIS-S03-L2',
             sibling_gloss='Text 2 is passage 53 of this book. It argues that voting in the United '
                           'States was restricted by four separate barriers, that each came down '
                           'at a different time, and that a constitutional amendment settles the '
                           'rule and settles nothing else.',
             stem='Text 1 ends with the vote arriving in 1920. Based on Text 2, how would its '
                  'author most likely qualify that ending?',
             opts=['The amendment of 1920 removed the other three barriers at the same time',
                   'The amendment settled the rule and left the machinery of exclusion standing',
                   'The vote had in fact been secured by the convention itself in 1848',
                   'Property requirements were the last of the four barriers to fall'],
             key='B', moves={'A': 'overreach', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='Text 2 holds that an amendment settles the rule and nothing else, and that each '
                 'change needed a second round of enforcement machinery afterward.',
             trap='A credits one amendment with work Text 2 assigns to four separate removals.'),
        dict(carrier='Ten of the eleven resolutions passed easily. ___ the one that asked for the '
                     'vote was argued over and nearly lost.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['However,', 'Therefore,', 'For instance,', 'In addition,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'near_miss', 'D': 'restatement'},
             why='Ten resolutions passed easily and one nearly failed, so the second sentence '
                 'stands against the first rather than extending it.',
             trap='B asserts that the near failure followed from the easy passage of the others.'),
        dict(carrier='Frederick Douglass ___ spoke for the resolution that asked for the vote.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['who ran an abolitionist newspaper in Rochester',
                   'who ran an abolitionist newspaper in Rochester;',
                   ', who ran an abolitionist newspaper in Rochester,',
                   ', who ran an abolitionist newspaper in Rochester'],
             key='C', moves={'A': 'run_on', 'B': 'wrong_mark', 'D': 'unpaired'},
             why='The clause is a supplement naming who Douglass was, so it takes a comma at each '
                 'end rather than one comma, a semicolon, or no mark at all.',
             trap='D opens the supplement with a comma and then never closes it.'),
        dict(goal='explain why the demand for the vote was the most contested item at the '
                  'convention',
             notes=['Eleven resolutions came before the meeting, and ten passed easily.',
                    'The one that asked for the vote was argued over and nearly lost.',
                    'Several of those present thought the demand would make the rest of the list '
                    'look ridiculous.',
                    'Newspapers treated the whole affair as a joke for weeks.'],
             stem='The student wants to explain why the demand for the vote was the most contested '
                  'item at the convention. Which choice most effectively uses relevant information '
                  'from the notes to accomplish that goal?',
             opts=['The resolution asking for the vote nearly failed because people at the '
                   'convention feared it would make their other demands look ridiculous',
                   'Eleven resolutions came before the meeting in 1848, and ten of them passed '
                   'easily enough',
                   'Newspapers treated the convention as a joke for weeks after the meeting had '
                   'ended',
                   'The resolution that asked for the vote was argued over and nearly lost at the '
                   'meeting'],
             key='A', moves={'B': 'underreach', 'C': 'true_not_asked', 'D': 'restatement'},
             why='Only this choice supplies the reason the demand was contested, which is the fear '
                 'among those present that it would discredit the other complaints.',
             trap='D restates that the resolution nearly failed without giving the reason the goal '
                  'asks for.'),
    ]))
