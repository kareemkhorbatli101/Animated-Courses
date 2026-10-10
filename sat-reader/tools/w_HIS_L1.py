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

# --- 4 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='HIS-S04-L1',
    ar=dict(
        khulasa='في الخامس من تموز عام ألف وثمانمئة واثنين وخمسين تحدّث فريدريك دوغلاس في '
                'قاعة كورنثيان في روتشستر بنيويورك، بدعوة من جمعية نسائية مناهضة للعبودية، '
                'أمام نحو ستّمئة شخص دفعوا ليسمعوه. وكان قد وُلد في العبودية في ماريلاند '
                'وفرّ قبل أربعة عشر عامًا، وعلّم نفسه القراءة، وصار يملك صحيفة ويحرّرها.',
        maana='بدأ هادئًا: عشرون دقيقة في الثناء على رجال عام ألف وسبعمئة وستة وسبعين، ثم '
              'انقلب فقال إنّ العيد عيدهم لا عيده، وسأل ما يعنيه الرابع من تموز لعبد '
              'أميركي. والمهمّ أنّه لم يرفض الوثائق التأسيسية، بل قال إنّ البلد يخون كلماته '
              'هو، لا أنّ الكلمات خاطئة.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الظاهرة: خطبة مؤرّخة '
                  'بمكان وجمهور وحجّة واضحة، تُبنى عليها لاحقًا دراسة شكل الحجّة المضادة '
                  'للعبودية والخلاف حول ما أنهاها فعلًا.',
        sila='في اختبار سات تتكرّر الخطب والمقالات، ويُسأل عن الحجّة والجمهور وعن وظيفة جملة '
             'بعينها. والفخّ الشائع هنا أن يُقرأ الخطاب رفضًا للوثائق التأسيسية، وهو عكس ما '
             'يقوله النصّ صراحةً. ويقترن المقطع بالمقطع الرابع والخمسين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Douglass praised the founders and then argued that the country was failing '
                   'its own words',
                   'Douglass was born into slavery in Maryland and escaped fourteen years before '
                   'the speech',
                   'Douglass rejected the founding documents as worthless to an American slave',
                   'The hall in which Douglass spoke was pulled down in 1898'],
             key='A', moves={'B': 'true_not_asked', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The speech opens with twenty minutes of praise and then turns, and the text says '
                 'Douglass held that the country was failing its own words rather than that the '
                 'words were wrong.',
             trap='C states the reading the text calls the part readers miss.'),
        dict(stem='According to the text, how did Douglass begin the speech?',
             opts=['By asking what the Fourth of July meant to an American slave',
                   'By naming the share of the churches and the press in the failure',
                   'By praising the men of 1776 and calling them brave',
                   'By describing his escape from slavery in Maryland'],
             key='C', moves={'A': 'near_miss', 'B': 'detail_swap', 'D': 'imported'},
             why='The text says that for twenty minutes he praised the men of 1776, called them '
                 'brave, and said their work deserved the respect of their children.',
             trap='A names the question he put after the turn rather than how he began.'),
        dict(claim='Douglass treated the founding documents as being on his side',
             stem='Which quotation from the text most strongly supports the claim that Douglass '
                  'treated the founding documents as being on his side?',
             opts=[Q('About six hundred people paid to hear him. Douglass had been born into '
                     'slavery in Maryland'),
                   Q('The speech ran for nearly two hours, and the audience is reported to have '
                     'stood at the end'),
                   Q('Near the end he turned to the churches, the press and the political parties '
                     'in turn'),
                   Q('the Declaration said exactly what he wanted said, and that the country was '
                     'failing its own words rather than keeping them')],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'near_miss'},
             why='The quotation states that Douglass held the Declaration to say exactly what he '
                 'wanted said, and faulted the country for failing its own words.',
             trap='C reports whom he blamed rather than how he treated the documents.'),
        dict(carrier='Douglass was invited by an anti-slavery society, about six hundred people '
                     'paid to hear him, and he spent his first twenty minutes praising the men of '
                     '1776. That opening therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['showed that he had changed his view of the founders',
                   'secured the goodwill that the turn would spend',
                   'was the part of the speech that was later printed',
                   'warned the audience that the speech would be hostile'],
             key='B', moves={'A': 'imported', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='He praised the founders for twenty minutes before turning on the holiday, so the '
                 'opening built the sympathy that the turn then drew on.',
             trap='D has the opening announce the turn, but the text says he began mildly.'),
        dict(target='opposite',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('opposite'),
             opts=['directly contrary', 'facing across from', 'equally weighted',
                   'closely matching'],
             key='A', moves={'B': 'near_miss', 'C': 'imported', 'D': 'wrong_direction'},
             why='Douglass argued the contrary of the case readers expect, holding that the '
                 'country failed its own words rather than that the words were wrong.',
             trap='B gives the spatial sense, as in a seat opposite another.'),
        dict(stem='Which choice best describes the function of the sentence reporting that '
                  'Douglass did not reject the founding documents?',
             opts=['It records a concession he made to the hall that had paid to hear him',
                   'It explains why the address sold widely in the North as a pamphlet',
                   'It reports the title under which the speech is now usually published',
                   'It corrects a misreading that the text expects of its own readers'],
             key='D', moves={'A': 'near_miss', 'B': 'imported', 'C': 'underreach'},
             why='The sentence is followed at once by the remark that this is the part readers '
                 'miss, so it exists to correct an expected misreading.',
             trap='A treats a correction aimed at the reader as a concession made to the '
                  'audience.'),
        dict(sibling='HIS-S04-L2',
             sibling_gloss='Text 2 is passage 54 of this book. It sets out the antislavery case, '
                           'which rests on the claim that a human being is not a kind of property '
                           'and that unalienable rights cannot be transferred by any bill of sale, '
                           'against a defense arguing from order and from the existing '
                           'Constitution.',
             stem='Text 1 says Douglass argued that the country was failing its own words. Based '
                  'on Text 2, what makes that argument more than a complaint?',
             opts=['It shows that the Constitution had recognized slavery in three clauses',
                   'It proves that the southern arrangement was crueler than wage labor',
                   'If rights cannot be transferred, then no statute can make a sale of them '
                   'valid',
                   'It establishes that abolition would destroy a great deal of property'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'near_miss'},
             why='Text 2 holds that unalienable rights cannot be transferred, so a document saying '
                 'so makes slavery void rather than merely wrong.',
             trap='A gives the proslavery argument from the existing Constitution, not the '
                  'antislavery case.'),
        dict(carrier='The address was printed as a pamphlet within a few weeks, and it sold widely '
                     'in the North. ___ it is now usually published under a title that Douglass '
                     'himself never gave it.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Therefore,', 'However,', 'For example,', 'Likewise,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'near_miss', 'D': 'restatement'},
             why='The pamphlet sold widely, and yet the title it now carries is not the one '
                 'Douglass gave it, so the second sentence runs against the first.',
             trap='A makes the misnaming a consequence of the wide sale, which the text does not '
                  'claim.'),
        dict(carrier='He taught himself to read as a boy ___ bought his own freedom with money '
                     'raised in Britain, and by 1852 owned and edited a newspaper.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['boy; bought', 'boy bought', 'boy, and bought', 'boy, bought'],
             key='D', moves={'A': 'wrong_mark', 'B': 'run_on', 'C': 'near_miss'},
             why='The sentence lists three things Douglass did, so the items take commas between '
                 'them with the conjunction standing only before the last.',
             trap='C adds a conjunction in the middle of a three-item series, which leaves the '
                  'last item stranded.'),
        dict(goal='introduce the speech to an audience that has never read it',
             notes=['Frederick Douglass spoke at Corinthian Hall in Rochester on July 5, 1852.',
                    'For twenty minutes he praised the men of 1776.',
                    'He asked what the Fourth of July meant to an American slave.',
                    'He argued that the country was failing its own words rather than that the '
                    'words were wrong.'],
             stem='The student wants to introduce the speech to an audience that has never read '
                  'it. Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['Douglass spoke for nearly two hours, and the audience is reported to have '
                   'stood at the end',
                   'In an 1852 address at Rochester, Douglass praised the founders and then asked '
                   'what their holiday meant to an American slave',
                   'Douglass argued that the country was failing its own words rather than that '
                   'the words were wrong',
                   'Corinthian Hall, where Douglass spoke in 1852, was pulled down in 1898'],
             key='B', moves={'A': 'true_not_asked', 'C': 'restatement', 'D': 'underreach'},
             why='This choice names the occasion and the turn, which is what an audience meeting '
                 'the speech for the first time needs before anything else.',
             trap='C repeats one note without naming the occasion the audience would need.'),
    ]))

# --- 5 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HIS-S05-L1',
    ar=dict(
        khulasa='انتهت الحرب في نيسان عام ألف وثمانمئة وخمسة وستين، وصار أربعة ملايين إنسان '
                'كانوا يُملكون أحرارًا بلا أرض ولا تعليم ولا صفة قانونية. وفي الاثنتي عشرة '
                'سنة التالية، المسمّاة إعادة الإعمار، أُضيفت ثلاثة تعديلات دستورية، وأنشئ '
                'مكتب المعتوقين، وتولّى أكثر من ألف وخمسمئة رجل أسود مناصب عامة، منها ستة '
                'عشر مقعدًا في الكونغرس.',
        maana='المعنى أنّ ما بُني بسرعة لم يبقَ على صورته. فقد تراجع الاهتمام الشمالي خلال '
              'سبعينيات القرن، وسُحبت القوات عام ألف وثمانمئة وسبعة وسبعين، وكتبت الولايات '
              'قواعد انتخاب جديدة أزالت معظم الناخبين السود دون ذكر العرق أصلًا. وبقيت '
              'التعديلات في الدستور غير ملغاة وغير منفّذة ستّين سنة أخرى.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الظاهرة: جرد لما بُني '
                  'ولما انحلّ، بأرقام ومواعيد، قبل الانتقال إلى آلية التراجع وإلى الخلاف '
                  'حول هل فشلت إعادة الإعمار أم هُزمت.',
        sila='في اختبار سات يكثر هذا النمط: نصّ يقرّر إنجازًا ثم يقرّر انحلاله، ويُسأل عن '
             'الفكرة المركزية وعن استنتاج يكمل النصّ. والفخّ الشائع قراءة عدم التنفيذ على '
             'أنّه إلغاء، وهو ما ينفيه النصّ صراحةً. ويقترن المقطع بالمقطع الخامس والخمسين '
             'في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=["The Freedmen's Bureau set up schools and wrote labor contracts across the "
                   'South',
                   'Reconstruction built a great deal quickly, and almost none of it survived in '
                   'the form it was built',
                   'The three Reconstruction amendments were repealed within thirty years of the '
                   'war',
                   'Black turnout in Louisiana fell from about ninety-five percent to under two '
                   'percent'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'true_not_asked'},
             why='The text sets what was built in twelve years against the sentence saying that '
                 'none of it lasted in the form it was built, which is the shape of the whole '
                 'passage.',
             trap='C is close but false, since the text says the amendments stayed in the '
                  'Constitution, never repealed.'),
        dict(stem='According to the text, what happened to the three Reconstruction amendments '
                  'after 1877?',
             opts=['They were repealed one after another',
                   'They were replaced by new state constitutions',
                   'They were enforced by federal troops until 1890',
                   'They stayed in the Constitution and were largely not enforced'],
             key='D', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'C': 'imported'},
             why='The text says the three amendments stayed in the Constitution, never repealed '
                 'and largely not enforced, for another sixty years.',
             trap='B confuses the new state constitutions with the federal amendments they worked '
                  'around.'),
        dict(claim='the new voting rules were written to exclude Black voters without saying so',
             stem='Which quotation from the text most strongly supports the claim that the new '
                  'voting rules were written to exclude Black voters without saying so?',
             opts=[Q('new voting rules that removed most Black voters from the rolls without '
                     'mentioning race at all'),
                   Q('The last federal troops were pulled out in 1877'),
                   Q('The first public school systems in several southern states date from these '
                     'years'),
                   Q('Mississippi wrote the first of the new constitutions in 1890')],
             key='A', moves={'B': 'underreach', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation names both halves of the claim: the rules removed most Black '
                 'voters, and they did it without mentioning race.',
             trap='D names where the new rules began rather than how they worked.'),
        dict(carrier='The three amendments stayed in the Constitution, never repealed and largely '
                     'not enforced, for another sixty years. A right of that kind therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['ceases to exist as soon as it is ignored',
                   'can be removed only by a further amendment',
                   'depends on something beyond its own wording',
                   'was never written into the Constitution at all'],
             key='C', moves={'A': 'overreach', 'B': 'near_miss', 'D': 'wrong_direction'},
             why='The amendments remained in force on paper while going unenforced for sixty '
                 'years, so the words alone did not secure what they promised.',
             trap='A overstates the case, since the text says the amendments survived while their '
                  'enforcement did not.'),
        dict(target='declined',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('declined'),
             opts=['refused an invitation', 'fell away steadily', 'bent toward the ground',
                   'spread outward quickly'],
             key='B', moves={'A': 'near_miss', 'C': 'wrong_direction', 'D': 'imported'},
             why='Northern interest in Reconstruction fell away through the 1870s as other matters '
                 'took the front page, so the word names a decrease.',
             trap='A gives the sense in which a person declines an offer.'),
        dict(stem='Which choice best describes the function of the sentence reporting that the '
                  'Congress of those years did not expect to keep its majority?',
             opts=['It explains the haste with which Reconstruction was built',
                   'It accounts for the withdrawal of federal troops in 1877',
                   'It introduces the three amendments listed in the next paragraph',
                   'It shows that the Congress of 1865 had no popular support'],
             key='A', moves={'B': 'near_miss', 'C': 'underreach', 'D': 'overreach'},
             why='The sentence follows the remark that a great deal was built in a hurry, and it '
                 'supplies the reason for the hurry.',
             trap='B moves the explanation forward twelve years to the end of Reconstruction.'),
        dict(sibling='HIS-S05-L2',
             sibling_gloss='Text 2 is passage 55 of this book. It argues that Reconstruction was '
                           'reversed by four instruments working together: organized violence, '
                           'narrow court rulings, the national political settlement of 1876, and '
                           'new state law, each covering a weakness in the others.',
             stem='Text 1 says that Northern interest declined through the 1870s. Based on Text 2, '
                  'how would its author place that decline?',
             opts=['It was the single cause of the reversal of Reconstruction',
                   'It followed from the new state constitutions written after 1890',
                   'It made the three amendments legally void in the southern states',
                   'It was one instrument of four, and it removed the political cost of doing '
                   'nothing'],
             key='D', moves={'A': 'overreach', 'B': 'wrong_direction', 'C': 'imported'},
             why='Text 2 counts national indifference as one of four instruments and says it '
                 'removed the political cost of leaving enforcement alone.',
             trap='A makes one instrument the whole cause, where Text 2 insists the four '
                  'reinforced each other.'),
        dict(carrier='More than fifteen hundred held public office, including sixteen seats in '
                     'Congress and two in the Senate. ___ South Carolina had a legislature with a '
                     'Black majority.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Nevertheless,', 'In other words,', 'In addition,', 'By comparison,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'restatement', 'D': 'near_miss'},
             why='The two sentences give further instances of the same fact, so the second adds to '
                 'the first rather than qualifying it.',
             trap='A sets the Black majority against the officeholding, which the text does not '
                  'do.'),
        dict(carrier='The war ended in April 1865 ___ four million people who had been held as '
                     'property were free.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['1865, and', '1865 and', '1865; and', '1865,'],
             key='A', moves={'B': 'near_miss', 'C': 'wrong_mark', 'D': 'comma_splice'},
             why='Both halves are independent clauses, so the coordinating conjunction joining '
                 'them needs a comma before it.',
             trap='D leaves the second clause joined by a comma alone, which is a splice.'),
        dict(goal='stress how quickly the gains of Reconstruction were undone',
             notes=['Three amendments were added to the Constitution between 1865 and 1870.',
                    'More than fifteen hundred Black men held public office.',
                    'The last federal troops were pulled out in 1877.',
                    'Black turnout in Louisiana fell from about ninety-five percent to under two '
                    'percent in eight years.'],
             stem='The student wants to stress how quickly the gains of Reconstruction were '
                  'undone. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['Three amendments were added to the Constitution, and more than fifteen hundred '
                   'Black men held public office',
                   'The last federal troops left the South in 1877, twelve years after the war '
                   'had ended',
                   'Black men held more than fifteen hundred public offices, and within eight '
                   'years Louisiana turnout fell from about ninety-five percent to under two '
                   'percent',
                   'Reconstruction added three amendments to the Constitution between 1865 and '
                   '1870'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'restatement'},
             why='Only this choice sets a measured gain against a measured collapse within eight '
                 'years, which is what stressing the speed of the undoing requires.',
             trap='A gives the gains alone, so nothing in it conveys how quickly they were '
                  'undone.'),
    ]))

# --- 6 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HIS-S06-L1',
    ar=dict(
        khulasa='كان مصنع ترايانغل شيرتويست يشغل الطوابق الثلاثة العليا من مبنى من عشرة '
                'طوابق قرب ساحة واشنطن في نيويورك. وفي السبت الخامس والعشرين من آذار عام '
                'ألف وتسعمئة وأحد عشر، قبل دقائق من انتهاء الورديّة، اشتعلت النار في صندوق '
                'بقايا أقمشة في الطابق الثامن، وانتهى كلّ شيء في ثماني عشرة دقيقة، وقُتل '
                'مئة وستّة وأربعون عاملًا، أكثرهم نساء.',
        maana='المعنى أنّ المبنى لم يكن استثنائيًا في قِدمه ولا في ضيق سلالمه؛ ما قتل الناس '
              'جملة قرارات عادية: باب سلّم مُقفل لفحص الحقائب عند مخرج واحد، وسلّم نجاة '
              'حديدي خفيف انهار، وسلالم إطفاء لا تبلغ إلّا الطابق السادس، ورفض تفتيش عُرض '
              'قبل سنتين.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الظاهرة: حادثة محدّدة '
                  'بأرقامها ونتائجها التشريعية، قبل الانتقال إلى آليات تنظيم المصانع وإلى '
                  'الخلاف حول أثر التنظيم على الأجور وفرص العمل.',
        sila='في اختبار سات يشيع هذا النمط: نصّ يستبعد تفسيرًا متوقّعًا ثم يقدّم تفسيرًا '
             'آخر، ويُسأل عن الفكرة المركزية وعن وظيفة الفقرة. والفخّ الشائع أن يُختار سبب '
             'واحد من عدّة أسباب مذكورة ويُعامل كأنّه السبب الوحيد. ويقترن المقطع بالمقطع '
             'السادس والخمسين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The Triangle factory building still stands and now belongs to a university',
                   'The fire escape was a light iron structure that gave way under the weight of '
                   'workers',
                   'Ordinary decisions rather than an unusual building produced the death toll, '
                   'and a quick wave of law followed',
                   "The fire department's ladders were the single cause of the deaths in the "
                   'factory that day'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'overreach'},
             why='The text says the building was not especially old and that a set of ordinary '
                 'decisions killed people, then reports more than thirty laws within three years.',
             trap='D takes one of several named causes and makes it the only one.'),
        dict(stem='According to the text, why was one of the two stair doors kept locked?',
             opts=['So that bags could be checked at a single exit',
                   'So that the fire escape would carry the whole shift',
                   'Because the stairs beyond it were too narrow to use',
                   'Because an inspection two years earlier had required it'],
             key='A', moves={'B': 'imported', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The text says the door was kept locked because the owners wanted to check bags '
                 'at a single exit to prevent theft.',
             trap='D inverts the inspection, which the company turned down rather than obeyed.'),
        dict(claim='the building itself was not unusually dangerous',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'building itself was unremarkable?',
             opts=[Q('The fire department ladders reached the sixth floor'),
                   Q('The building was not especially old and the stairs were not especially '
                     'narrow'),
                   Q('Two hundred thousand people walked in the funeral march'),
                   Q('The factory building itself still stands and belongs to a university')],
             key='B', moves={'A': 'near_miss', 'C': 'true_not_asked', 'D': 'underreach'},
             why='The sentence states directly that neither the age of the building nor the width '
                 'of its stairs was out of the ordinary.',
             trap='A names a real limit, but it is a limit of the fire service rather than of the '
                  'building.'),
        dict(carrier='The company had turned down an inspection offered two years earlier, and the '
                     'law that followed set up an inspection service with the power to enter '
                     'without warning. That change therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['made inspections cheaper for the state to carry out',
                   'left the choice of inspection with the employer',
                   'applied only to factories above the sixth floor',
                   'removed the power of an employer to refuse one'],
             key='D', moves={'A': 'imported', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='The company had been able to decline an inspection, and the new service could '
                 'enter without warning, so refusal was no longer available to an employer.',
             trap='B keeps the power that the new service was created to remove.'),
        dict(target='reform',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('reform'),
             opts=['a change of personal habits', 'a return to an earlier practice',
                   'a change made in the law', 'a formal public apology'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'imported'},
             why='What followed the fire was more than thirty statutes within three years, so the '
                 'word names change made in the law.',
             trap='A gives the sense in which a person reforms, which is not what a legislature '
                  'does.'),
        dict(stem='Which choice best describes what the second paragraph adds to the account of '
                  'the fire?',
             opts=['It names the people who died and gives their ages',
                   'It replaces an explanation from the building with an explanation from '
                   'decisions',
                   'It reports the size of the funeral march that followed the fire',
                   'It lists the thirty laws passed between 1911 and 1914'],
             key='B', moves={'A': 'near_miss', 'C': 'imported', 'D': 'detail_swap'},
             why='The paragraph sets aside the age of the building and the width of the stairs, '
                 'then attributes the deaths to a set of ordinary decisions.',
             trap='D names the content of the third paragraph rather than the second.'),
        dict(sibling='HIS-S06-L2',
             sibling_gloss='Text 2 is passage 56 of this book. It sets out four instruments a '
                           'state can use to make factories safer, a rule with an inspector behind '
                           'it, liability for injury, insurance pricing and a limit on hours, and '
                           'reports that no single instrument did much on its own.',
             stem='Text 1 reports that more than thirty laws followed the fire. Based on Text 2, '
                  'how should that wave of law be judged?',
             opts=['It worked because several instruments were operating at once',
                   'It worked because liability for injury had at last been established',
                   'It failed because inspection is too expensive to cover a whole city',
                   'It mattered less than the insurance pricing that came after it'],
             key='A', moves={'B': 'underreach', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='Text 2 reports that no single instrument did much alone and that the sharp falls '
                 'came where three or four were working together.',
             trap='B credits one instrument, where Text 2 insists on the combination.'),
        dict(carrier='The building was not especially old and the stairs were not especially '
                     'narrow. ___ what killed people was a set of ordinary decisions.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Accordingly,', 'For example,', 'Similarly,', 'Instead,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'restatement'},
             why='The first sentence rules out the building as the cause and the second supplies a '
                 'different one, so the second replaces rather than extends it.',
             trap='A makes the ordinary decisions follow from the building being unremarkable.'),
        dict(carrier='A fire started in a bin of cloth scraps on the eighth floor ___ within '
                     'eighteen minutes it was over.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['floor within', 'floor; within', 'floor, within', 'floor: within'],
             key='B', moves={'A': 'run_on', 'C': 'comma_splice', 'D': 'wrong_mark'},
             why='Two independent clauses with no conjunction between them need a semicolon rather '
                 'than a comma, a colon, or no mark at all.',
             trap='C joins two independent clauses with a comma alone, which is a splice.'),
        dict(goal='show that the law changed because the deaths were traced to decisions rather '
                  'than to bad luck',
             notes=['One of the two stair doors was kept locked so that bags could be checked at a '
                    'single exit.',
                    'The company had turned down an inspection offered two years earlier.',
                    'Between 1911 and 1914 the legislature passed more than thirty laws.',
                    'The new laws required unlocked exits and set up an inspection service able to '
                    'enter without warning.'],
             stem='The student wants to show that the law changed because the deaths were traced '
                  'to decisions rather than to bad luck. Which choice most effectively uses '
                  'relevant information from the notes to accomplish that goal?',
             opts=['The fire killed one hundred and forty-six workers in about eighteen minutes',
                   'Between 1911 and 1914 the legislature of New York passed more than thirty '
                   'laws',
                   'The company had turned down an inspection that had been offered two years '
                   'earlier',
                   'Because a locked door and a refused inspection had cost lives, the new laws '
                   'required unlocked exits and inspectors able to enter without warning'],
             key='D', moves={'A': 'true_not_asked', 'B': 'restatement', 'C': 'underreach'},
             why='Only this choice ties the two decisions to the two remedies, which is what '
                 'showing that the law answered decisions rather than luck requires.',
             trap='B reports the volume of legislation without naming what it was answering.'),
    ]))

# --- 7 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='HIS-S07-L1',
    ar=dict(
        khulasa='في الأوّل من كانون الأول عام ألف وتسعمئة وخمسة وخمسين اعتُقلت روزا باركس '
                'في مونتغمري بألاباما لرفضها التخلّي عن مقعدها في حافلة. كانت تخيط الثياب '
                'لكسب عيشها، وكانت أيضًا أمينة سرّ الفرع المحلّي للجمعية الوطنية لتقدّم '
                'الملوّنين، وقضت جزءًا من الصيف السابق في مدرسة تدريب للمنظّمين في تينيسي.',
        maana='المعنى أنّ الاستجابة كانت معدّة سلفًا: خلال ثلاثة أيام وُزّعت أوراق تدعو إلى '
              'مقاطعة يوم واحد، فامتنع نحو أربعين ألف ساكن أسود عن الحافلات، وهم نحو ثلاثة '
              'أرباع الركّاب. ودامت المقاطعة ثلاثمئة وواحدًا وثمانين يومًا، لكن ما أنهى '
              'التمييز في الحافلات كان دعوى قضائية أقرّتها المحكمة العليا.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الظاهرة: حركة مؤرّخة '
                  'بأسمائها وأرقامها، قبل الانتقال إلى آلية تغيّر القانون وإلى الخلاف حول '
                  'مصدر المكاسب: القانون أم الضغط.',
        sila='في اختبار سات يكثر النصّ الذي يصحّح انطباعًا شائعًا، ويُسأل عن الفكرة المركزية '
             'وعن الدليل النصّي وعن وظيفة الجملة. والفخّ هنا أن يُنسب إنهاء التمييز إلى '
             'المقاطعة وحدها، وهو ما ينفيه النصّ. ويقترن المقطع بالمقطع السابع والخمسين في '
             'أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Rosa Parks lost her job at the department store within a month of her arrest',
                   'The bus company lost about two thirds of its income during the boycott year',
                   'The boycott ended segregation on the buses of Montgomery by itself',
                   'A prepared campaign held a city together for a year, and a lawsuit ended the '
                   'segregation'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'wrong_direction'},
             why='The text stresses that the response was ready within three days and ran for a '
                 'year, and that what finally ended segregation was a lawsuit.',
             trap='C is the reading the text corrects, since it names a lawsuit as what finally '
                  'ended segregation.'),
        dict(stem='According to the text, why was Martin Luther King Jr. chosen to speak for the '
                  'campaign?',
             opts=['Because he had organized the one-day boycott himself',
                   'Because he was new in town and had made no enemies',
                   'Because he was the secretary of the local branch',
                   'Because the Holt Street church had just elected him'],
             key='B', moves={'A': 'imported', 'C': 'detail_swap', 'D': 'near_miss'},
             why='The text says a minister of twenty-six was chosen partly because he was new in '
                 'town and had made no enemies in it.',
             trap='C gives the office held by Rosa Parks rather than the reason King was chosen.'),
        dict(claim='the response to the arrest had been prepared in advance',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'response to the arrest had been prepared in advance?',
             opts=[Q('Parks lost her job at the department store within a month of the arrest'),
                   Q('The bus company lost about two thirds of its income in that year'),
                   Q('She had spent part of the previous summer at a training school for '
                     'organizers in Tennessee'),
                   Q('A minister of twenty-six named Martin Luther King Jr. was chosen to speak '
                     'for the campaign')],
             key='C', moves={'A': 'true_not_asked', 'B': 'underreach', 'D': 'near_miss'},
             why='Training at a school for organizers in the previous summer shows preparation '
                 'before the arrest rather than improvisation after it.',
             trap='D shows organization after the arrest rather than preparation before it.'),
        dict(carrier='About forty thousand Black residents stayed off the buses, which was close '
                     'to every one of them, and they made up about three quarters of all riders. '
                     'The boycott therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['could not be absorbed by the accounts of the company',
                   'depended on support from the white riders of the city',
                   'was smaller than the organizers of it had hoped',
                   'ended within a single day, as the sheets had asked'],
             key='A', moves={'B': 'wrong_direction', 'C': 'imported', 'D': 'detail_swap'},
             why='Black riders were about three quarters of all riders and nearly all of them '
                 'stayed off, so the company lost most of its custom at once.',
             trap='B reverses the arithmetic, since those who stayed off were the majority rather '
                  'than a minority needing allies.'),
        dict(target='unite',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('unite'),
             opts=['join in marriage', 'agree in private', 'merge into one body', 'act together'],
             key='D', moves={'A': 'near_miss', 'B': 'underreach', 'C': 'wrong_direction'},
             why='A whole city held together behind one demand for a year, so the word names '
                 'acting together rather than a formal merger.',
             trap='C treats a shared campaign as the forming of a single organization.'),
        dict(stem='Which choice best describes the function of the sentence naming Browder v. '
                  'Gayle?',
             opts=['It gives the date on which the boycott itself began',
                   'It explains why the carpools were run from church basements',
                   'It corrects an account of what ended the segregation',
                   'It reports the cost of the boycott to the bus company'],
             key='C', moves={'A': 'detail_swap', 'B': 'imported', 'D': 'underreach'},
             why='The sentence says that what finally ended segregation on the buses was the '
                 'lawsuit rather than the boycott, which corrects the expected account.',
             trap='D names a real consequence rather than the cause the sentence identifies.'),
        dict(sibling='HIS-S07-L2',
             sibling_gloss='Text 2 is passage 57 of this book. It argues that Brown v. Board of '
                           'Education created no enforcement machinery and so moved at the speed '
                           'of litigation, while the Voting Rights Act of 1965 created machinery '
                           'that worked without a plaintiff, and that a right without an '
                           'administrator is a right that waits.',
             stem='Text 1 reports that a lawsuit ended bus segregation in Montgomery. Based on '
                  'Text 2, what is the limit of a remedy of that kind?',
             opts=['A court ruling cannot reach a private business at all',
                   'It moves only as fast as cases can be brought and argued',
                   'It requires a federal examiner in every covered county',
                   'It is overturned whenever a later court narrows it'],
             key='B', moves={'A': 'overreach', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='Text 2 holds that a ruling needing litigation moves at the speed of litigation, '
                 'and that the speed is set by how many lawyers exist.',
             trap='C borrows the machinery of the 1965 Act and attaches it to a court ruling.'),
        dict(carrier='Printed sheets went out calling for a one-day boycott on the Monday. ___ '
                     'about forty thousand Black residents stayed off the buses.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['As a result,', 'Nevertheless,', 'For example,', 'In other words,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'near_miss', 'D': 'restatement'},
             why='The call went out and the city answered it, so the second sentence reports the '
                 'outcome of the first.',
             trap='B sets the response against the call when in fact it followed from it.'),
        dict(carrier='Rosa Parks sewed clothes for a living ___ she was also the secretary of the '
                     'local branch of the National Association for the Advancement of Colored '
                     'People.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['living she', 'living, she', 'living, and she', 'living: and she'],
             key='C', moves={'A': 'run_on', 'B': 'comma_splice', 'D': 'wrong_mark'},
             why='Two independent clauses need a comma together with a coordinating conjunction '
                 'standing before the second of them.',
             trap='B joins the two clauses with a comma alone, which is a splice.'),
        dict(goal='correct the impression that the boycott alone ended segregation on the buses',
             notes=['The boycott lasted three hundred and eighty-one days.',
                    'Carpools run from church basements moved people to work and back.',
                    'What finally ended segregation on the buses was a lawsuit, Browder v. Gayle.',
                    'The Supreme Court upheld that ruling in November 1956.'],
             stem='The student wants to correct the impression that the boycott alone ended '
                  'segregation on the buses. Which choice most effectively uses relevant '
                  'information from the notes to accomplish that goal?',
             opts=['Although the boycott held for three hundred and eighty-one days, segregation '
                   'on the buses ended with Browder v. Gayle, upheld in November 1956',
                   'The boycott lasted three hundred and eighty-one days and was supported by '
                   'carpools run from church basements',
                   'Carpools run from church basements moved people to work and back throughout '
                   'the boycott',
                   'The Supreme Court upheld a ruling in November 1956 that concerned the city of '
                   'Montgomery'],
             key='A', moves={'B': 'restatement', 'C': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice keeps the length of the boycott and still names the lawsuit as '
                 'what ended segregation, which is the correction the goal asks for.',
             trap='B gives the boycott without the lawsuit, leaving the impression the goal sets '
                  'out to correct.'),
    ]))

# --- 8 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='HIS-S08-L1',
    ar=dict(
        khulasa='تحت الحكم البريطاني في الهند كان صنع الملح محرّمًا على الهنود، إذ احتكرته '
                'الحكومة وفرضت عليه ضريبة. والملح ليس كماليًّا في بلد حارّ يعمل أهله في '
                'الهواء الطلق، فبلغت الضريبة كلّ بيت حتى أفقره، وجُمعت نحو قرن. وفي الثاني '
                'عشر من آذار عام ألف وتسعمئة وثلاثين خرج موهنداس غاندي مع ثمانية وسبعين '
                'مرافقًا نحو الساحل، فسار أربعة وعشرين يومًا ونحو مئتين وأربعين ميلًا.',
        maana='المعنى أنّ الفعل كان عديم القيمة كتجارة وتامًّا كحجّة. فقد رفع غاندي حفنة طين '
              'مشبعة بالملح في داندي، فخالف قانونًا لا يستطيع أحد الدفاع عنه علنًا دون أن '
              'يبدو سخيفًا. ولم تُرفع الضريبة، ولم يُحقّق السير شيئًا وقتها، لكنّه فرض '
              'خيارًا على حكومة تعتقل رجلًا في الستّين لأنّه رفع طينًا من شاطئ.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الظاهرة: مسيرة مؤرّخة '
                  'بمسافتها وأعداد معتقليها، قبل الانتقال إلى حسابات تمويل الإمبراطورية '
                  'وإلى الخلاف حول هل مُنح الاستقلال أم انتُزع.',
        sila='في اختبار سات يكثر النصّ الذي يفصل بين الأثر المباشر والأثر الرمزي، ويُسأل عن '
             'الفكرة المركزية وعن الدليل النصّي. والفخّ الشائع أن يُقاس نجاح الحدث بما '
             'حقّقه فورًا، مع أنّ النصّ يقرّر أنّه لم يحقّق شيئًا وقتها. ويقترن المقطع '
             'بالمقطع الثامن والخمسين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['A march that won nothing at the time broke a law that could not be defended in '
                   'public',
                   'Salt is not a luxury in a hot country where most people work outdoors',
                   'Photographs of the arrests appeared in newspapers from London to New York',
                   'The salt tax was abolished in 1946, a year before independence'],
             key='A', moves={'B': 'underreach', 'C': 'true_not_asked', 'D': 'detail_swap'},
             why='The text says the act was useless as trade and perfect as argument, that the '
                 'march won nothing at the time, and that the law could not be defended in public.',
             trap='B gives a premise the text uses rather than the point it makes.'),
        dict(stem='According to the text, how long did the walk to the coast take?',
             opts=['Twelve days', 'Seventy-eight days', 'Twenty-four days', 'Most of a century'],
             key='C', moves={'A': 'detail_swap', 'B': 'near_miss', 'D': 'underreach'},
             why='The text states that the walk took twenty-four days and covered about two '
                 'hundred and forty miles.',
             trap='A takes the twelve miles walked each day and turns it into a number of days.'),
        dict(claim='the march was designed as an argument rather than as a way of getting salt',
             stem='Which quotation from the text most strongly supports the claim that the march '
                  'was designed as an argument rather than as a way of getting salt?',
             opts=[Q('Something like sixty thousand were arrested in the months that followed'),
                   Q('Gandhi walked about twelve miles a day and was sixty years old at the time'),
                   Q('All along the coast people began boiling sea water in pans'),
                   Q('The act was useless as trade and perfect as argument')],
             key='D', moves={'A': 'true_not_asked', 'B': 'underreach', 'C': 'near_miss'},
             why='The sentence sets the worthlessness of the salt against the force of the '
                 'gesture, which is exactly the distinction the claim draws.',
             trap='D shows the march being imitated rather than being designed as an argument.'),
        dict(carrier='The tax was not lifted, and the march won nothing at the time. What it did '
                     'was force a choice, because a government that arrests a man of sixty for '
                     'picking up mud ___',
             stem='Which choice most logically completes the text?',
             opts=['has shown that the law was worth enforcing',
                   'has given up its claim to rule by consent',
                   'has lost the support of its own police force',
                   'has abolished the monopoly it had held for a century'],
             key='B', moves={'A': 'wrong_direction', 'C': 'imported', 'D': 'detail_swap'},
             why='The text draws the consequence itself: such a government has rejected its own '
                 'claim to rule by the consent of the governed.',
             trap='A reads the arrest as a vindication of the law rather than as a cost to the '
                  'government.'),
        dict(target='rejected',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('rejected'),
             opts=['given up', 'thrown back', 'refused entry to', 'found fault with'],
             key='A', moves={'B': 'wrong_direction', 'C': 'imported', 'D': 'near_miss'},
             why='A government that arrests a man for picking up mud has abandoned its own claim '
                 'to rule by consent, so the word means given up.',
             trap='D softens the sense to mere criticism, which is weaker than what the sentence '
                  'asserts.'),
        dict(stem='Which choice best describes the function of the first paragraph of the text?',
             opts=['It describes the route that the marchers would later follow',
                   'It gives the number of people arrested in the months that followed',
                   'It reports the year in which the salt tax was finally abolished',
                   'It explains why a tax on salt reached every household in India'],
             key='D', moves={'A': 'near_miss', 'B': 'detail_swap', 'C': 'underreach'},
             why='The paragraph establishes the monopoly, the tax, and the fact that salt is not a '
                 'luxury in a hot country, which is why the tax reached the poorest.',
             trap='B names material from the third paragraph rather than the first.'),
        dict(sibling='HIS-S08-L2',
             sibling_gloss='Text 2 is passage 58 of this book. It argues that British India was '
                           'governed by about a thousand British officials over three hundred '
                           'million people, that the arrangement required the colony to produce a '
                           'surplus, and that by 1945 Britain owed India about thirteen hundred '
                           'million pounds.',
             stem='Text 1 says independence came seventeen years after the march. Based on Text 2, '
                  'what best explains that interval?',
             opts=['The salt tax had to be abolished before independence could be granted',
                   'The march had already removed the legal basis of British rule',
                   'The cost of holding on only later came to exceed any plausible return',
                   'Indian officials had refused to serve in the administration after 1930'],
             key='C', moves={'A': 'detail_swap', 'B': 'overreach', 'D': 'imported'},
             why='Text 2 holds that the arithmetic of empire broke under the cost of two wars, so '
                 'independence came when holding on stopped paying.',
             trap='B credits the march with an effect Text 1 denies it had at the time.'),
        dict(carrier='The tax was not lifted, and the march won nothing at the time. ___ what it '
                     'did was force a choice.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['For example,', 'Still,', 'Therefore,', 'Likewise,'],
             key='B', moves={'A': 'near_miss', 'C': 'wrong_direction', 'D': 'restatement'},
             why='The first sentence concedes that nothing was won and the second names what was '
                 'achieved anyway, so the two stand in contrast.',
             trap='C makes the forced choice follow from the failure rather than stand against '
                  'it.'),
        dict(carrier='The government held a monopoly ___ the sole right to produce and sell ___ '
                     'and it taxed what it sold.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['monopoly, which was the sole right to produce and sell',
                   'monopoly which was the sole right to produce and sell',
                   'monopoly; which was the sole right to produce and sell',
                   'monopoly, which was the sole right to produce and sell,'],
             key='D', moves={'A': 'unpaired', 'B': 'run_on', 'C': 'wrong_mark'},
             why='The clause defining the monopoly interrupts the sentence, so it needs a comma at '
                 'each end rather than one comma, a semicolon, or none.',
             trap='A opens the interrupting clause with a comma and never closes it.'),
        dict(goal='explain to a reader why the march mattered despite winning no concession',
             notes=['The salt tax reached every household, including the poorest.',
                    'Gandhi picked up a handful of salt-crusted mud at Dandi on April 6.',
                    'The act was useless as trade and perfect as argument.',
                    'The tax was not lifted, and the march won nothing at the time.'],
             stem='The student wants to explain to a reader why the march mattered even though it '
                  'won no concession. Which choice most effectively uses relevant information from '
                  'the notes to accomplish that goal?',
             opts=['The salt tax reached every household in India, including the very poorest of '
                   'them',
                   'The march won no concession, yet by breaking an indefensible law in public it '
                   'worked as an argument rather than as trade',
                   'Gandhi picked up a handful of salt-crusted mud at Dandi on the sixth of April',
                   'The tax was not lifted, and the march won nothing at all at the time'],
             key='B', moves={'A': 'underreach', 'C': 'true_not_asked', 'D': 'restatement'},
             why='Only this choice holds the failure and the achievement together, which is what '
                 'explaining why a march without a concession mattered requires.',
             trap='D states the failure alone and so leaves the question the goal poses '
                  'unanswered.'),
    ]))

# --- 9 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HIS-S09-L1',
    ar=dict(
        khulasa='في التاسع عشر من شباط عام ألف وتسعمئة واثنين وأربعين، بعد عشرة أسابيع من '
                'الهجوم على بيرل هاربر، وقّع الرئيس فرانكلين روزفلت الأمر التنفيذي رقم تسعة '
                'آلاف وستّة وستين. ولم يسمِّ الأمر أي جماعة، بل أعطى الجيش سلطة إعلان مناطق '
                'عسكرية وتقييد من يسكنها، فأُعلن الساحل الهادئ كلّه منطقة كذلك، وكان '
                'المرحّلون منه من أصل ياباني تقريبًا بالكامل.',
        maana='المعنى أنّ الصياغة المحيّدة أنتجت نتيجة محدّدة جدًّا: نحو مئة وعشرين ألف شخص، '
              'ثلثاهم مواطنون أميركيون بالميلاد، مُنحوا من ستّة أيام إلى أسبوعين لتصفية '
              'شؤونهم، ولم يحملوا إلّا ما استطاعوا حمله. ولم يُتّهم أحد منهم في الولايات '
              'المتحدة بالتجسّس أو التخريب خلال الحرب.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الظاهرة: أمر مؤرّخ '
                  'وأرقام محدّدة ومصير موثّق، قبل الانتقال إلى آلية سلطات الطوارئ وإلى '
                  'الخلاف حول هل يبرّر الأمن تعليق الحقوق.',
        sila='في اختبار سات يكثر النصّ الذي يقابل بين نصّ القانون وتطبيقه، ويُسأل عن '
             'الاستنتاج وعن الدليل النصّي. والفخّ الشائع أن يُفهم أنّ الأمر نصّ على '
             'اليابانيين، مع أنّ النصّ يقول إنّه لم يسمِّ جماعة أصلًا. ويقترن المقطع '
             'بالمقطع التاسع والخمسين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The 442nd Regiment became the most decorated unit of its size in the army',
                   'An order that named no group was used to remove a population that was almost '
                   'entirely of one descent',
                   'Congress apologized in 1988 and paid twenty thousand dollars to each '
                   'survivor',
                   'A piano was sold for five dollars in Seattle during the two weeks allowed'],
             key='B', moves={'A': 'true_not_asked', 'C': 'underreach', 'D': 'detail_swap'},
             why='The text turns on the gap between an order naming no group and a removal that '
                 'fell almost entirely on people of Japanese descent.',
             trap='C reports the much later remedy rather than the subject of the text.'),
        dict(stem='According to the text, what power did the order itself grant?',
             opts=['The power to intern citizens without charge for the duration of the war',
                   'The power to seize farms, shops and boats along the Pacific coast',
                   'The power to try those removed before military rather than civilian courts',
                   'The power to declare military areas and restrict who could live in them'],
             key='D', moves={'A': 'overreach', 'B': 'imported', 'C': 'near_miss'},
             why='The text says the order gave the army power to declare military areas and to '
                 'restrict who could live in them, and that it named no group.',
             trap='A describes what followed in practice rather than what the order granted.'),
        dict(claim='the removal was not supported by the evidence available to the government at '
                   'the time',
             stem='Which quotation from the text most strongly supports the claim that the removal '
                  'was not supported by the evidence the government then held?',
             opts=[Q('The records of the time include two reports to the government saying as '
                     'much, and both were set aside'),
                   Q('They could take only what they could carry. Farms, shops, boats and houses '
                     'were sold for whatever price could be got'),
                   Q('The families were held first at race tracks and fair halls, then moved to '
                     'ten camps built inland'),
                   Q('About one hundred and twenty thousand men, women and children were given '
                     'between six days and two weeks')],
             key='A', moves={'B': 'true_not_asked', 'C': 'underreach', 'D': 'near_miss'},
             why='Two reports already in the hands of the government said that no spying or '
                 'sabotage had occurred, and both were set aside.',
             trap='D is a powerful fact about who was removed rather than about the evidence held.'),
        dict(carrier='The order named no group at all. It gave the army power to declare military '
                     'areas and to restrict who could live in them, and within weeks the whole '
                     'Pacific coast had been declared such an area, which shows that ___',
             stem='Which choice most logically completes the text?',
             opts=['the army had exceeded the authority it was granted',
                   'the order applied equally to every resident of the coast',
                   'a neutral instrument can produce a selective result',
                   'the declaration of military areas was never carried out'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='The order named nobody, and yet those removed were almost entirely of Japanese '
                 'descent, so a general instrument produced a particular result.',
             trap='A reads a selective outcome as proof that the army went beyond its grant, which '
                  'the text does not claim.'),
        dict(target='restrict',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('restrict'),
             opts=['explain narrowly', 'place limits on', 'draw tightly together',
                   'set apart for study'],
             key='B', moves={'A': 'imported', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The army was empowered to say who could live in a declared area, so the word '
                 'means to place limits on something.',
             trap='C gives the physical sense of drawing a thing tight rather than limiting it.'),
        dict(stem='Which choice best describes the function of the sentence reporting that nobody '
                  'of Japanese descent was ever charged with spying?',
             opts=['It removes the justification offered for the removal',
                   'It explains why the last camp did not close until 1946',
                   'It introduces the record of the 442nd Regiment in Italy',
                   'It accounts for the apology that Congress made in 1988'],
             key='A', moves={'B': 'imported', 'C': 'near_miss', 'D': 'underreach'},
             why='The removal was defended as a security measure, and the sentence reports that no '
                 'charge of spying or sabotage was ever brought.',
             trap='D names a consequence that came forty-six years later rather than the work the '
                  'sentence does.'),
        dict(sibling='HIS-S09-L2',
             sibling_gloss='Text 2 is passage 59 of this book. It argues that emergency power in a '
                           'constitutional state works through three standard instruments: a broad '
                           'delegation from the legislature to the executive, the suspension of '
                           'ordinary procedure, and control of information through both censorship '
                           'and classification.',
             stem='Text 1 reports that two reports were set aside. Based on Text 2, which '
                  'instrument does that illustrate?',
             opts=['The delegation of broad authority to the executive branch',
                   'The creation of a criminal offense for violating an order',
                   'The suspension of ordinary procedure before a civilian judge',
                   'The control of information through the withholding of evidence'],
             key='D', moves={'A': 'near_miss', 'B': 'detail_swap', 'C': 'underreach'},
             why='Text 2 names classification, the withholding of the government\'s own evidence '
                 'from examination, as one of the three instruments.',
             trap='A names a different instrument of the three, the grant of authority rather '
                  'than the handling of evidence.'),
        dict(carrier='About one hundred and twenty thousand men, women and children were given '
                     'between six days and two weeks to settle their affairs. ___ they could take '
                     'only what they could carry.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'Moreover,', 'In short,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'restatement'},
             why='The second sentence adds a further constraint to the first rather than setting '
                 'itself against it or summarizing it.',
             trap='B treats the limit on luggage as a concession against the short notice.'),
        dict(carrier='Farms, shops, boats and houses were sold for whatever price could be got in '
                     'two weeks ___ left with neighbors, or simply abandoned.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['weeks, or', 'weeks or', 'weeks; or', 'weeks, or,'],
             key='A', moves={'B': 'near_miss', 'C': 'wrong_mark', 'D': 'unpaired'},
             why='The sentence lists three fates for the property, so a comma stands before the '
                 'conjunction introducing the last of them.',
             trap='C uses a semicolon where the items are phrases rather than independent '
                  'clauses.'),
        dict(goal='emphasize the gap between the wording of the order and its effect',
             notes=['The order named no group at all.',
                    'It gave the army power to declare military areas and to restrict who could '
                    'live in them.',
                    'Within weeks the whole Pacific coast had been declared such an area.',
                    'The people removed from it were almost entirely of Japanese descent.'],
             stem='The student wants to emphasize the gap between the wording of the order and its '
                  'effect. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['The order gave the army power to declare military areas along the Pacific '
                   'coast',
                   'Within weeks the whole of the Pacific coast had been declared a military '
                   'area',
                   'Though the order named no group, those removed under it were almost entirely '
                   'of Japanese descent',
                   'The army was empowered to restrict who could live in the areas it had '
                   'declared'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'restatement'},
             why='Only this choice sets the silence of the wording beside the uniformity of the '
                 'result, which is the gap the student wants emphasized.',
             trap='B reports the scale of the declaration without naming who was removed.'),
    ]))

# --- 10 ------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HIS-S10-L1',
    ar=dict(
        khulasa='قبل عام ألف وثمانمئة وثلاثة وثلاثين كانت صحيفة نيويورك تُكلّف ستّة سنتات '
                'وتُباع بالاشتراك السنوي، أي بأجر يوم عمل كامل تقريبًا، وكانت أربع صفحات من '
                'قوائم الشحن والأسعار والإعلانات السياسية، مكتوبة للتجّار ورجال الأحزاب. وفي '
                'أيلول من ذلك العام بدأ الطبّاع بنجامين داي بيع صحيفة ذا صن في الشارع بسنت '
                'واحد.',
        maana='المعنى أنّ مصدر المال غيّر المحتوى. فالصحيفة التي يدفع ثمنها قارئها تُحاسب '
              'أمامه، أمّا التي يدفع ثمنها المعلن فتحتاج أكبر جمهور ممكن، والجمهور الكبير '
              'يُجمع بقصص يفهمها أي أحد. ومن هنا جاء توظيف المراسلين وإرسالهم إلى المحاكم '
              'والأرصفة ومراكز الشرطة.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الظاهرة: تحوّل مؤرّخ '
                  'بسعره وأرقام توزيعه، قبل الانتقال إلى آلية صناعة الخبر وإلى الخلاف حول '
                  'هل تقود الصحافة الرأي العام أم تتبعه.',
        sila='في اختبار سات يكثر النصّ الذي يربط حافزًا اقتصاديًّا بسلوك مؤسّسة، ويُسأل عن '
             'الاستنتاج وعن معنى كلمة في سياقها. والفخّ الشائع هنا قراءة كلمة الخلاف على '
             'أنّها الحرب، مع أنّ القائمة المحيطة بها حوادث يومية. ويقترن المقطع بالمقطع '
             'الستّين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['A New York newspaper cost six cents before 1833 and arrived by subscription',
                   'The Sun printed a series of invented reports about life on the moon in 1835',
                   'A cheap paper paid for by advertising changed both who read the news and what '
                   'counted as news',
                   'Advertising revenue was what allowed the Sun to lower its price to one cent'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'wrong_direction'},
             why='The text traces the penny paper from its price to its crowd to its advertising '
                 'revenue, and then to reporters gathering news in place of friends supplying '
                 'opinion.',
             trap='A describes the papers the Sun displaced rather than the change the text is '
                  'about.'),
        dict(stem='According to the text, how were the boys who sold the Sun paid?',
             opts=['In bundles of papers that they then sold at a profit',
                   'At one cent for every copy that they managed to sell',
                   "By the hour, out of the printer's own counting house",
                   'From the advertising the paper had already sold'],
             key='A', moves={'B': 'near_miss', 'C': 'imported', 'D': 'wrong_direction'},
             why='The text says Day hired boys to shout the headlines and that they were paid in '
                 'bundles of papers, which they then sold at a profit.',
             trap='B assumes a commission on each copy, where the text describes a wholesale '
                  'arrangement.'),
        dict(claim="the source of a paper's revenue shapes what it prints",
             stem='Which quotation from the text most strongly supports the claim that the source '
                  "of a paper's revenue shapes what it prints?",
             opts=[Q('Perhaps one household in fifty took one, and a single copy was often read '
                     'by a dozen people in a coffee house'),
                   Q('A paper paid for by advertising needs the largest crowd it can gather. '
                     'Crowds are gathered by stories that anyone can follow'),
                   Q('He hired boys to shout the headlines. They were paid in bundles of papers, '
                     'which they then sold at a profit'),
                   Q('Within two years the Sun was selling about fifteen thousand copies a day')],
             key='B', moves={'A': 'true_not_asked', 'C': 'underreach', 'D': 'near_miss'},
             why='The quotation moves from the need for a large crowd to the kind of story that '
                 'gathers one, which is the shaping the claim describes.',
             trap='D gives the size of the crowd without naming what was printed to gather it.'),
        dict(carrier='A paper paid for by the people who take it answers to them. A paper paid for '
                     'by advertising needs the largest crowd it can gather. The shift to '
                     'advertising therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['made newspapers cheaper to produce than they had been',
                   'returned control of the paper to its own readers',
                   'reduced the number of papers printed in the city',
                   'changed whom the paper had to satisfy'],
             key='D', moves={'A': 'imported', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='A subscription paper answers to its subscribers while an advertising paper needs '
                 'the largest crowd it can gather, so the audience it must please changes.',
             trap='B reverses the direction of the change that the two sentences describe.'),
        dict(target='conflict',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('conflict'),
             opts=['armed warfare between states', 'a clash of professional duties',
                   'quarrels and disputes', 'a contradiction in the evidence'],
             key='C', moves={'A': 'near_miss', 'B': 'imported', 'D': 'wrong_direction'},
             why='The word stands in a list with police court reports, fires, accidents and '
                 'crimes, so it names the ordinary quarrels that fill a cheap paper.',
             trap='A reads the word as war, which the surrounding list of everyday incidents rules '
                  'out.'),
        dict(stem='Which choice best describes the function of the third paragraph of the text?',
             opts=['It lists the kinds of story that filled the new cheap papers',
                   'It explains how the source of revenue altered the content',
                   'It reports the price at which the Sun was first sold',
                   'It describes the invented reports about life on the moon'],
             key='B', moves={'A': 'detail_swap', 'C': 'underreach', 'D': 'true_not_asked'},
             why='The paragraph begins with the shift to advertising revenue and then draws out '
                 'what that shift did to what the papers printed.',
             trap='A names the content of the second paragraph rather than the third.'),
        dict(sibling='HIS-S10-L2',
             sibling_gloss='Text 2 is passage 60 of this book. It argues that news is a selection '
                           'from whatever reached a newsroom in usable form before a deadline, and '
                           'that deadline, competition and the need for a narrative each favor a '
                           'particular kind of event, so that slow processes go systematically '
                           'underreported.',
             stem='Text 1 reports that the penny papers sent reporters out to gather news. Based '
                  'on Text 2, what limit would remain on what those reporters found?',
             opts=['Events in places where no reporter was assigned would still arrive late or '
                   'never',
                   'Advertising revenue would have to be replaced by subscription income again',
                   'Reporters would be unable to reach the courts, the docks and police stations',
                   'Crime coverage would fall as police practice became more regular'],
             key='A', moves={'B': 'wrong_direction', 'C': 'detail_swap', 'D': 'near_miss'},
             why='Text 2 holds that a reporter has a beat supplying a steady flow from official '
                 'sources, and that events where no reporter is assigned arrive late or never.',
             trap='C contradicts Text 1, which says reporters were sent to exactly those places.'),
        dict(carrier='The new papers also hired reporters, which the old ones had barely done. ___ '
                     'they sent them out to courts, docks and police stations to look for '
                     'material.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Nevertheless,', 'In short,', 'For instance,', 'In turn,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'restatement', 'C': 'near_miss'},
             why='Having hired reporters, the papers then deployed them, so the second sentence '
                 'reports the next step rather than a contrast.',
             trap='A sets the deployment against the hiring, when in fact it followed from it.'),
        dict(carrier='Before 1833 a New York newspaper cost six cents ___ arrived by subscription, '
                     'meaning payment in advance for a year of issues.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['cents it', 'cents and', 'cents; and', 'cents, it'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'comma_splice'},
             why='The sentence has one subject and two verbs, so the second verb joins the first '
                 'with a conjunction and needs no comma.',
             trap='D supplies a new subject and joins it with a comma alone, which is a splice.'),
        dict(goal='explain to a reader why the penny press changed what counted as news',
             notes=['Before 1833 a New York newspaper cost six cents and was sold by subscription.',
                    'The Sun sold for one cent on the street and reached about fifteen thousand '
                    'buyers a day.',
                    'The penny papers made their money from advertising rather than from readers.',
                    'A paper paid for by advertising needs the largest crowd it can gather.'],
             stem='The student wants to explain to a reader why the penny press changed what '
                  'counted as news. Which choice most effectively uses relevant information from '
                  'the notes to accomplish that goal?',
             opts=['Before 1833 a New York newspaper cost six cents and was sold by subscription '
                   'only',
                   'The Sun sold about fifteen thousand copies a day within two years of its '
                   'founding',
                   'The penny papers made their money from advertising rather than from their own '
                   'readers',
                   'Because the penny papers lived on advertising they needed the largest crowd '
                   'they could gather, and news came to mean whatever a crowd would follow'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'restatement'},
             why='Only this choice carries the chain from the source of revenue to the size of the '
                 'crowd to the kind of story that counted as news.',
             trap='C names the change in revenue without saying what it did to the content.'),
    ]))
