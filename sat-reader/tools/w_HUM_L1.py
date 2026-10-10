"""Humanities, Level 1: ten question sets."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

Q = '«%s»'.__mod__
FIELD, LEVEL = 'HUM', 1

SETS = []

# --- 1 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HUM-S01-L1',
    ar=dict(
        khulasa='نشرت شارلوت برونتي جين إير سنة ألف وثمانمئة وسبع وأربعين، وجين تروي قصّتها '
                'بنفسها، فالقارئ داخل رأسها حين يعرض عليها روتشستر الزواج: يعلم أنّ قلبها '
                'يخفق وأنّها تشكّ في خدعة، ولا يُروى شيء لا تعلمه جين، وأفكار روتشستر باب '
                'مغلق.',
        maana='المعنى أنّ جين أوستن نشرت كبرياء وهوى سنة ألف وثمانمئة وثلاث عشرة، وأنّ دارسي '
              'يعرض على إليزابيث في غرفة في هنسفورد والراوي واقف خارجهما كليهما: يُخبر '
              'القارئ بما تقول إليزابيث وكيف يحتمر دارسي وهو يسمع، ويعلّق الصوت أيضًا.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الظاهرة: لا أحد الاختيارين أفضل، '
                  'بل كلّ منهما يكسب شيئًا ويتنازل عن شيء: فالمتكلّم يحبس القارئ في عقل '
                  'واحد فيصنع التشويق والتعاطف ويُسهّل الخديعة، والصوت الخارجي ينتقل بين '
                  'الغرف والسنين ويحكم على الاثنين.',
        sila='في اختبار سات يكثر السؤال عن موضع الراوي وعن وظيفة الجملة وعن معنى كلمة في '
             'سياقها. والفخّ المتوقّع هنا أن يُفضَّل أحد الموضعين على الآخر، مع أنّ النصّ '
             'يأبى ذلك. ويقترن المقطع بالمقطع الحادي والثمانين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Austen left her name off her books in her lifetime',
                   'Each narrative position buys something and gives something up',
                   'The first person is the better of the two choices',
                   'Darcy proposes to Elizabeth in a room at Hunsford'],
             key='B', moves={'A': 'true_not_asked', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text says neither choice is better and then lists what the first person '
                 'gains and loses against what the outside voice gains and loses.',
             trap='C ranks the two positions, which the text explicitly declines to do.'),
        dict(stem='According to the text, what can the outside voice not do?',
             opts=['Move between rooms and years', 'Judge two characters at once',
                   'Report what two people are thinking', 'Surprise a reader by not knowing'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='The text says what the outside voice cannot do is surprise the reader by not '
                 'knowing something, after listing what it can do.',
             trap='A names one of the freedoms the text grants that voice.'),
        dict(claim='the narrator of Pride and Prejudice does more than report',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'narrator of Pride and Prejudice does more than report?',
             opts=[Q('It can say that Darcy spoke with little attempt at civility, which is a '
                     'judgment Elizabeth would not have phrased that way'),
                   Q('The reader is told what Elizabeth says and how Darcy colors as he listens'),
                   Q('Darcy proposes to Elizabeth in a room at Hunsford, and the teller stands '
                     'outside both of them'),
                   Q('Austen left her name off her books entirely in her lifetime')],
             key='A', moves={'B': 'near_miss', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation names a phrase the narrator supplies and says Elizabeth would not '
                 'have put it that way, which marks it as the voice judging rather than '
                 'reporting.',
             trap='B gives what the narrator reports rather than the comment it adds.'),
        dict(carrier='Nothing is reported that Jane does not know. When he lies to her, the reader '
                     'is deceived at the same moment she is, and finds out when she finds out. A '
                     'reader of that novel is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['told more than Jane is told', 'able to see inside Rochester as well',
                   'held to the limits of one mind',
                   'given the narrator comments on both'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='The novel reports only what Jane knows and times every discovery to hers, so the '
                 'reader has access to nothing she lacks.',
             trap='B opens a mind the text calls a closed door.'),
        dict(target='reveals',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('reveals'),
             opts=['uncovers a secret', 'presents to a reader', 'admits a fault',
                   'hides from view'],
             key='B', moves={'A': 'near_miss', 'C': 'imported', 'D': 'wrong_direction'},
             why='Every novel is said to reveal its world through a particular position, so the '
                 'word names how the world is presented rather than a secret disclosed.',
             trap='A takes the sense of a disclosure, which a whole world is not.'),
        dict(stem='Which choice best describes the function of the sentence that declines to rank '
                  'the two positions?',
             opts=['It stops the comparison from becoming a ranking',
                   'It introduces the sonnet form for the first time',
                   'It reports the year Jane Eyre was published',
                   'It argues that the outside voice always wins'],
             key='A', moves={'B': 'imported', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence sits between the two examples and the account of what each gains '
                 'and loses, and it rules out a verdict in favor of either.',
             trap='D supplies the ranking that the sentence is there to prevent.'),
        dict(sibling='HUM-S01-L2',
             sibling_gloss='Text 2 is passage 81 of this book. It names first person, third '
                           'limited and omniscient as the three standard positions, explains what '
                           'each can report, and describes a third-person voice that carries the '
                           'vocabulary of the character it follows.',
             stem='Text 1 compares two narrative positions. Based on Text 2, what would be added '
                  'to that comparison?',
             opts=['A first-person narrator cannot report what it does not know',
                   'The outside voice can move between rooms and years',
                   'Jane Eyre uses an outside voice throughout',
                   'A third position that lies between the two'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'wrong_direction'},
             why='Text 2 names third limited as a standard position alongside the two in Text 1, '
                 'and a voice that stays outside while borrowing the words of the character it '
                 'follows.',
             trap='A repeats the limit Text 1 has already drawn on the first person.'),
        dict(carrier='Neither choice is better. ___ each buys something and gives something up.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'Even so,', 'Instead,', 'For example,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'near_miss'},
             why='The second sentence says what is true of each position in place of ranking them, '
                 'so the transition must mark a substitution rather than a contrast.',
             trap='D treats the general statement about both as one example among several.'),
        dict(carrier='Jane tells her own story ___ and when Rochester proposes to her the reader '
                     'is inside her head.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['story, and', 'story and', 'story; and', 'story and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the reader being inside her head is independent, so the '
                 'conjunction joining it to the clause about Jane telling her story takes a '
                 'comma.',
             trap='B leaves the clause about the story and the clause about the proposal '
                  'unmarked.'),
        dict(goal='explain why a reader should first ask who is standing where',
             notes=['Nothing is reported in Jane Eyre that Jane does not know.',
                    'The narrator of Pride and Prejudice stands outside both characters and '
                    'comments.',
                    'Each position buys something and gives something up.',
                    'The answer is usually settled in the opening sentences and holds for the '
                    'book.'],
             stem='The student wants to explain why a reader should first ask who is standing '
                  'where. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['Nothing is reported in one novel that its narrator does not know',
                   'Each position buys something and gives something up in turn',
                   'The position is fixed in the opening sentences and decides what the whole '
                   'book can report',
                   'The narrator of the other novel comments on both characters'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice joins the early settling of the position to its hold over '
                 'everything the book can report, which is why the question comes first.',
             trap='B names the trade without saying why it must be identified at the start.'),
    ]))

# --- 2 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HUM-S02-L1',
    ar=dict(
        khulasa='نشر هرمان ملفل بارتلبي الكاتب سنة ألف وثمانمئة وثلاث وخمسين. يستأجر محامٍ في '
                'وول ستريت ناسخًا يُسمّى بارتلبي، فيعمل بانتظام أيّامًا، ثمّ يطلب منه '
                'المحامي أن يقايس وثيقة بأصلها، فيجيب بارتلبي أنّه يفضّل ألّا يفعل، لا غاضبًا '
                'ولا مفسّرًا.',
        maana='المعنى أنّ القصّة لا تقول قطّ لماذا. يجرّب المحامي كلّ تفسير متاح له: أهو '
              'مريض؟ أمجنون؟ أأفسده عمل سابق في مكتب الرسائل الميتة؟ وذلك الحدس الأخير '
              'يُعرض في الفقرة الختامية إشاعةً لا واقعة. ويُعطى القارئ ما أُعطي المحامي '
              'بالضبط: جملة من خمس كلمات مُعادة.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الظاهرة: هذا الحجب هو تصميم القصّة '
                  'لا ثغرة فيها، فملفل يرسم رجلًا كلّه بما يأبى فعله، ويقع ثقل الحكاية على '
                  'الراوي عوضًا عنه، فيتعلّم القارئ كثيرًا عن المحامي: راحته، وخوفه من '
                  'المشاهد، ورغبته أن يُحسب كريمًا.',
        sila='في اختبار سات يكثر السؤال عن الحجب وعن الدليل الذي يسند دعوى وعن معنى كلمة في '
             'سياقها. والفخّ المتوقّع هنا أن تُتّخذ الإشاعة الختامية تفسيرًا، مع أنّ النصّ '
             'يسمّيها إشاعة. ويقترن المقطع بالمقطع الثاني والثمانين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Melville had published Moby-Dick two years earlier',
                   'The dead letter office explains the refusal',
                   'A withheld motive turns the pressure onto the narrator',
                   'Bartleby works steadily for a few days'],
             key='C', moves={'A': 'true_not_asked', 'B': 'wrong_direction', 'D': 'underreach'},
             why='The text says the withholding is the design of the story, that the pressure '
                 'falls on the narrator instead, and that the reader learns a great deal about '
                 'the lawyer.',
             trap='B accepts as fact what the text calls a rumor in the final paragraph.'),
        dict(stem='According to the text, how is the dead letter office offered?',
             opts=['As a rumor rather than a fact',
                   'As the explanation the lawyer accepts',
                   'As the opening sentence of the story',
                   'As the reason Bartleby was hired'],
             key='A', moves={'B': 'wrong_direction', 'C': 'detail_swap', 'D': 'detail_swap'},
             why='The text says that last guess is offered in the final paragraph as a rumor '
                 'rather than a fact.',
             trap='B treats a rumor as the account the narrator settles on.'),
        dict(claim='the story is more about the lawyer than about the clerk',
             stem='Which quotation from the text most strongly supports the claim that the story '
                  'is more about the lawyer than about the clerk?',
             opts=[Q('Asked again, he gives the same answer in the same mild voice, and over the '
                     'following weeks he stops doing anything at all'),
                   Q('What the reader learns a great deal about is the lawyer: his comfort, his '
                     'fear of scenes, his wish to be thought kind, and the exact point at which '
                     'his patience runs out'),
                   Q('He wonders whether Bartleby is ill, or mad, or ruined by earlier work in a '
                     'dead letter office'),
                   Q('He was working as a customs inspector in New York within a few years of '
                     'writing this story')],
             key='B', moves={'A': 'near_miss', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation lists four things the reader learns about the lawyer and says that '
                 'is where a great deal of the knowledge goes.',
             trap='C shows the lawyer guessing about Bartleby rather than what the reader learns '
                  'of him.'),
        dict(carrier='The reader is given exactly what the lawyer is given, which is a sentence of '
                     'five words repeated, and no access to the mind behind it. A reader who looks '
                     'for a motive is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['told the motive in the final paragraph',
                   'given more than the lawyer has',
                   'reading the opening pages too quickly',
                   'looking for what the story withholds'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'imported'},
             why='The reader has only the repeated sentence and no access to the mind behind it, '
                 'so a motive is precisely what the design keeps back.',
             trap='A takes the rumor at the end for the explanation it is not.'),
        dict(target='portrays',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('portrays'),
             opts=['paints a likeness of', 'speaks on behalf of', 'presents as a character',
                   'betrays a confidence'],
             key='C', moves={'A': 'near_miss', 'B': 'imported', 'D': 'imported'},
             why='Melville is said to portray a man entirely through what he refuses to do, so '
                 'the word names building him as a character on the page.',
             trap='A takes the sense used of a painter rather than of a writer.'),
        dict(stem='Which choice best describes the function of the sentence calling the '
                  'withholding a design?',
             opts=['It introduces the lawyer on Wall Street',
                   'It tells a reader the gap is deliberate',
                   'It concedes that the story is incomplete',
                   'It reports the five words Bartleby repeats'],
             key='B', moves={'A': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The sentence follows the account of what the reader is not given and says the '
                 'withholding is the design of the story and not a gap in it.',
             trap='C calls the story incomplete, which the same sentence denies.'),
        dict(sibling='HUM-S02-L2',
             sibling_gloss='Text 2 is passage 82 of this book. It sets out four ways a writer can '
                           'build a motive, notes that stated motive leaves nothing to infer, '
                           'warns that characters lie, and observes that Melville gives Bartleby '
                           'action and speech but no interiority.',
             stem='Text 1 reports a story that withholds a motive. Based on Text 2, what would be '
                  'added to that report?',
             opts=['The other ways a motive could have been built',
                   'Bartleby is given no access to his own mind',
                   'The reader is given exactly what the lawyer is given',
                   'The lawyer tries every explanation available to him'],
             key='A', moves={'B': 'wrong_direction', 'C': 'restatement', 'D': 'restatement'},
             why='Text 2 lists exposition, action, speech and the report of others as the means '
                 'available, which is the set from which Melville took only two.',
             trap='C repeats the point Text 1 makes about the reader rather than adding to it.'),
        dict(carrier='He is not angry and he does not explain. ___ asked again, he gives the same '
                     'answer in the same mild voice.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'In other words,', 'As a result,', 'What is more,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'restatement', 'C': 'near_miss'},
             why='The second sentence adds a further instance of the same mildness, so the '
                 'transition must mark an addition rather than a contrast or a consequence.',
             trap='B treats the repeated answer as another way of saying he does not explain.'),
        dict(carrier='He is not angry ___ and he does not explain.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['angry and', 'angry, and', 'angry; and', 'angry and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying he does not explain is independent, so the conjunction joining '
                 'it to the clause about his not being angry takes a comma.',
             trap='A leaves the clause about anger and the clause about explaining unmarked.'),
        dict(goal='explain how a character can be built out of a refusal',
             notes=['Bartleby answers requests with a sentence of five words.',
                    'He is not angry and he does not explain.',
                    'The reader has no access to the mind behind the sentence.',
                    'Melville portrays a man entirely through what he refuses to do.'],
             stem='The student wants to explain how a character can be built out of a refusal. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['Bartleby answers every request with a sentence of five words',
                   'He is not angry about the requests and he does not explain',
                   'The reader has no access to the mind behind the sentence',
                   'A repeated refusal with no anger and no reason behind it leaves the man '
                   'entirely in what he will not do'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'restatement'},
             why='Only this choice joins the repetition, the absence of feeling and the absence of '
                 'a reason, which together make the refusal the whole portrait.',
             trap='B names two of the absences without saying what they amount to.'),
    ]))

# --- 3 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='HUM-S03-L1',
    ar=dict(
        khulasa='نشر وليام كارلوس ويليامز سنة ألف وتسعمئة وثلاث وعشرين قصيدة من ستّ عشرة كلمة '
                'تسمّي عربة يدٍ حمراء وماء مطر ودجاجًا أبيض وتقول إنّ شيئًا كثيرًا يتوقّف '
                'عليها. لا حكاية فيها، ولا متكلّم، ولا يُسمّى فيها شعور قطّ.',
        maana='المعنى أنّ ويليامز كان طبيبًا في رذرفورد بنيوجيرسي، وأنّه دعا سنين إلى شعر يعمل '
              'بالأشياء لا بالأقوال عنها، فصاغ المبدأ سطرًا: لا أفكار إلّا في الأشياء. والعربة '
              'هي الحجّة مطبَّقة: يُسلَّم القارئ ثلاثة أشياء، ويُقال له إنّ شيئًا يتوقّف عليها، '
              'ويُترك ليكمل الباقي.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الظاهرة: الاختبار سهل، فإن أُبدلت '
                  'الأشياء بمجرّدات ماتت القصيدة في الحال، وسطر عن إحساس ببساطة ريفيّة ليس '
                  'قصيدة ويقول أقلّ لا أكثر. وويليامز لم يبتكر الطريقة، لكنّه بيّنها بيانًا '
                  'كافيًا لتعليمها فأخذ جيل من الشعراء الدرس.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسب ويليامز مبتكرًا للطريقة، مع أنّ '
             'النصّ ينفي ذلك صريحًا. ويقترن المقطع بالمقطع الثالث والثمانين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Williams worked as a doctor in Rutherford, New Jersey',
                   'The poem names a wheelbarrow, rain water and white chickens',
                   'Williams invented the method of writing through objects',
                   'A poem of objects does what a statement about them cannot'],
             key='D', moves={'A': 'true_not_asked', 'B': 'underreach', 'C': 'wrong_direction'},
             why='The text argues that poetry should work through things rather than statements '
                 'about things, and ends by saying a thing on the page can express what a '
                 'statement about it cannot.',
             trap='C credits Williams with inventing a method the text says he did not invent.'),
        dict(stem='According to the text, what did Williams not do?',
             opts=['State the method plainly enough to teach it',
                   'Invent the method of writing through objects',
                   'Publish the poem in Spring and All',
                   'Work as a doctor in Rutherford, New Jersey'],
             key='B', moves={'A': 'wrong_direction', 'C': 'detail_swap', 'D': 'true_not_asked'},
             why='The text says plainly that Williams did not invent the method, and then says '
                 'what he did do with it.',
             trap='A names the thing the text credits him with doing.'),
        dict(claim='the objects in the poem leave work for the reader',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'objects in the poem leave work for the reader?',
             opts=[Q('There is no story. Nobody speaks. No feeling is named at any point'),
                   Q('Williams published the poem in a collection called Spring and All'),
                   Q('A reader is handed three objects, told that something rests on them, and '
                     'left to supply the rest'),
                   Q('He argued for years that poetry should work through things rather than '
                     'through statements about things')],
             key='C', moves={'A': 'near_miss', 'B': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation says the reader is handed the objects and then left to supply the '
                 'rest, which is the work the claim names.',
             trap='A lists what the poem leaves out without saying who makes up the difference.'),
        dict(carrier='Replace the objects with abstractions and the poem dies at once. A line about '
                     'a feeling of rural simplicity is not a poem at all. The test therefore '
                     'shows that the force of the poem comes from ___',
             stem='Which choice most logically completes the text?',
             opts=['what the reader can see on the page',
                   'the abstract claim that so much depends',
                   'the number of words Williams used',
                   'the prose passages printed around it'],
             key='A', moves={'B': 'wrong_direction', 'C': 'underreach', 'D': 'imported'},
             why='The concrete version is said to work because rain water on red paint can be '
                 'seen, and the abstract version dies, so the force lies in the visible thing.',
             trap='B rests the poem on the one abstract word the text sets aside.'),
        dict(target='express',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('express'),
             opts=['send on quickly', 'state outright', 'squeeze out of',
                   'convey to a reader'],
             key='D', moves={'A': 'imported', 'B': 'wrong_direction', 'C': 'imported'},
             why='A thing on the page is said to express what a statement about it cannot, so the '
                 'word names what the object carries across to a reader.',
             trap='B gives the sense of a plain statement, which the text contrasts with a '
                  'thing.'),
        dict(stem='Which choice best describes the function of the sentence saying the effect is '
                  'easy to test?',
             opts=['It names the collection the poem appeared in',
                   'It reports how many words the poem contains',
                   'It opens a demonstration of the principle just stated',
                   'It concedes that the principle cannot be checked'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence comes after the principle and is followed at once by the '
                 'substitution of abstractions for objects, which is the test being run.',
             trap='D denies a test the sentence is there to announce.'),
        dict(sibling='HUM-S03-L2',
             sibling_gloss='Text 2 is passage 83 of this book. It separates simile, metaphor and '
                           'metonymy by the work each does, says that what all three share is '
                           'economy because a vivid image makes the reader supply the detail, and '
                           'calls a worn-out figure a dead metaphor.',
             stem='Text 1 praises a poem built from objects. Based on Text 2, which choice best '
                  'explains why such a poem can work in sixteen words?',
             opts=['Metonymy names a thing by something associated with it',
                   'A vivid image makes the reader supply the detail',
                   'The poem has outlived the argument around it',
                   'A dead metaphor has stopped doing any work at all'],
             key='B', moves={'A': 'near_miss', 'C': 'restatement', 'D': 'true_not_asked'},
             why='Text 2 says the economy of a figure comes from the reader supplying the detail, '
                 'so four words can do the work of a paragraph.',
             trap='A names a figure from Text 2 that the poem in Text 1 does not use.'),
        dict(carrier='Williams did not invent the method. ___ he stated it plainly enough to '
                     'teach it, and a generation of poets took the lesson.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Instead,', 'For example,', 'As a result,', 'In addition,'],
             key='A', moves={'B': 'near_miss', 'C': 'wrong_direction', 'D': 'wrong_direction'},
             why='The second sentence says what Williams did do in place of inventing the method, '
                 'so the transition must mark a substitution.',
             trap='C makes the teaching follow from the failure to invent.'),
        dict(carrier='The poem has outlived the argument around it ___ and it is now one of the '
                     'most anthologized short poems in English.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['it and', 'it; and', 'it, and', 'it and,'],
             key='C', moves={'A': 'run_on', 'B': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying the poem is now among the most anthologized in English is '
                 'independent, so the conjunction joining it to the clause about outliving the '
                 'argument takes a comma.',
             trap='A runs the clause about the argument straight into the clause about '
                  'anthologies.'),
        dict(goal='emphasize what a reader has to do with the poem',
             notes=['The poem names a red wheelbarrow, rain water and white chickens.',
                    'No feeling is named at any point.',
                    "The reader's own eye connects the glaze to the chickens.",
                    'A reader is handed three objects and left to supply the rest.'],
             stem='The student wants to emphasize what a reader has to do with the poem. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['With no feeling named, the reader must connect the glaze to the chickens '
                   'alone',
                   'The poem names a red wheelbarrow, rain water and white chickens',
                   'No feeling is named at any point in the poem itself',
                   "The reader's own eye connects the glaze to the chickens"],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice joins the absence of any named feeling to the connection the '
                 'reader is left to make, which is the work the goal asks about.',
             trap='D names the work without saying what in the poem makes it necessary.'),
    ]))

# --- 4 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='HUM-S04-L1',
    ar=dict(
        khulasa='السوناتة أربعة عشر سطرًا. وصل الشكل إنجلترا من إيطاليا في القرن السادس عشر، '
                'ونظم شكسبير مئة وأربعًا وخمسين منها. وكلّ سطر عشرة مقاطع يقع النبر على كلّ '
                'ثانٍ منها، وهو وزن يُسمّى البنتامتر اليامبي.',
        maana='المعنى أنّ المهمّ ليس العدّ بل المَفصِل. فالسوناتة الإيطالية تقسم ثمانية أسطر في '
              'مقابل ستّة، والالتفاتة تأتي بعد السطر الثامن. والشكل الإنجليزي يحفظ التفاتة قرب '
              'السطر التاسع ثمّ يضيف ثانية، لأنّ البيتين الختاميّين قد يؤكّدان ما سبق أو '
              'ينقضانه.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الظاهرة: السوناتة الثلاثون بعد المئة '
                  'تنفق اثني عشر سطرًا في تعداد ما ليست عليه محبوبة المتكلّم، ثمّ يقول '
                  'البيتان الختاميّان إنّه يحبّها على كلّ حال، ولا تنجح الطرفة إلّا لأنّ '
                  'القارئ كان يعدّ. فمن عدّ إلى أربعة عشر صار بيده خريطة.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن وظيفة جزء من النصّ وعن إكمال '
             'النصّ إكمالًا منطقيًّا. والفخّ المتوقّع هنا أن يُحسب العدّ هو المقصود، مع أنّ '
             'النصّ يضعه جانبًا لصالح المَفصِل. ويقترن المقطع بالمقطع الرابع والثمانين في '
             'أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The turn, not the count, is what makes the form useful',
                   'Shakespeare composed a hundred and fifty-four sonnets',
                   'The rules of the form are simple and written down',
                   'The counting is the interesting part of the form'],
             key='A', moves={'B': 'true_not_asked', 'C': 'underreach', 'D': 'wrong_direction'},
             why='The text says the interesting part is not the counting but the hinge, and then '
                 'says that finding the turn is usually enough to find the argument.',
             trap='D reverses the sentence that sets the counting aside in favor of the hinge.'),
        dict(stem='According to the text, where does the turn come in an Italian sonnet?',
             opts=['Near line nine', 'In the closing pair', 'After line eight',
                   'At line fourteen'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'imported'},
             why='The text says an Italian sonnet divides eight lines against six and that the '
                 'turn comes after line eight.',
             trap='A gives the place of the turn in the English form instead.'),
        dict(claim='the closing pair can work against the lines before it',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'closing pair can work against the lines before it?',
             opts=[Q('The reader is given a situation, a problem or a picture, and then the poem '
                     'changes direction'),
                   Q('Each line runs to ten syllables with the stress falling on every second '
                     'one, a pattern called iambic pentameter'),
                   Q('An Italian sonnet divides eight lines against six, and the turn comes after '
                     'line eight'),
                   Q("Sonnet 130 spends twelve lines listing everything the speaker's mistress is "
                     'not. The closing pair then says that he loves her all the same')],
             key='D', moves={'A': 'near_miss', 'B': 'true_not_asked', 'C': 'near_miss'},
             why='The quotation gives twelve lines of denial followed by a closing pair that says '
                 'the opposite, which is the pair working against what came before.',
             trap='A gives a change of direction that happens before the closing pair.'),
        dict(carrier='Finding the turn is usually enough to find the argument, and the argument is '
                     'what examiners ask about. A reader who locates the hinge is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['counting syllables rather than reading',
                   'most of the way to the question asked',
                   'certain to identify every rhyme in the poem',
                   'reading an Italian sonnet rather than an English one'],
             key='B', moves={'A': 'wrong_direction', 'C': 'overreach', 'D': 'imported'},
             why='The text says finding the turn is usually enough to find the argument and that '
                 'the argument is what examiners ask about.',
             trap='C turns a reliable route to the argument into a guarantee about rhyme.'),
        dict(target='composed',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('composed'),
             opts=['wrote in full', 'kept himself calm', 'was made up of', 'put into order'],
             key='A', moves={'B': 'imported', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='Shakespeare is said to have composed a hundred and fifty-four sonnets, so the '
                 'word names the act of writing them.',
             trap='C takes the passive sense in which a thing is composed of parts.'),
        dict(stem='Which choice best describes the function of the reference to Sonnet 130?',
             opts=['It dates the arrival of the form in England',
                   'It defines the pattern called iambic pentameter',
                   'It argues that the closing pair always confirms',
                   'It shows the second turn doing its work'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'overreach'},
             why='The reference follows the claim that the closing pair can confirm or undercut, '
                 'and it gives an instance in which the pair reverses twelve lines.',
             trap='C hardens a pair that can confirm or undercut into one that always confirms.'),
        dict(sibling='HUM-S04-L2',
             sibling_gloss='Text 2 is passage 84 of this book. It explains that enjambment, '
                           'caesura and metrical substitution all work by setting something '
                           'against an expectation, and says they do so only because the '
                           'underlying pattern is regular enough to be felt.',
             stem='Text 1 describes the fourteen-line form and its turn. Based on Text 2, which '
                  'choice best explains why the regularity of the lines matters?',
             opts=['A sonnet has fourteen lines and a closing pair',
                   'Free verse makes the poet establish the pattern inside the poem',
                   'A pattern regular enough to be felt lets a break carry weight',
                   'A caesura stops the voice where the meter says to continue'],
             key='C', moves={'A': 'restatement', 'B': 'true_not_asked', 'D': 'near_miss'},
             why='Text 2 says enjambment, caesura and substitution only work because the '
                 'underlying pattern is regular enough to be felt.',
             trap='D names one of the devices without saying what makes it work.'),
        dict(carrier='The English form keeps a turn near line nine as well. ___ it adds a second '
                     'one, because the closing pair can confirm or undercut what came before.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'In addition,', 'As a result,', 'In other words,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'near_miss', 'D': 'restatement'},
             why='The second sentence adds a further turn to the one already named, so the '
                 'transition must mark an addition rather than a contrast.',
             trap='A sets the second turn against the first when the text is adding it.'),
        dict(carrier='A reader who can count to fourteen therefore has a map ___ and finding the '
                     'turn is usually enough to find the argument.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['map and', 'map; and', 'map and,', 'map, and'],
             key='D', moves={'A': 'run_on', 'B': 'wrong_mark', 'C': 'misplaced'},
             why='The clause saying that finding the turn is enough to find the argument is '
                 'independent, so the conjunction joining it to the clause about the map takes a '
                 'comma.',
             trap='A runs the clause about the map straight into the clause about the turn.'),
        dict(goal='explain why counting the lines helps a reader answer a question',
             notes=['The interesting part is not the counting but the hinge.',
                    'An Italian sonnet turns after line eight and the English form near line '
                    'nine.',
                    'Finding the turn is usually enough to find the argument.',
                    'The argument is what examiners ask about.'],
             stem='The student wants to explain why counting the lines helps a reader answer a '
                  'question. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['The interesting part of the form is not the counting but the hinge',
                   'Counting to the turn finds the argument, and the argument is what examiners '
                   'ask about',
                   'An Italian sonnet turns after line eight and the English form near line nine',
                   'The argument of a sonnet is what examiners ask about'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice carries the counting through to the turn and the turn through '
                 'to the argument that is actually asked about.',
             trap='C gives the places of the turns without saying what finding one is for.'),
    ]))

# --- 5 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HUM-S05-L1',
    ar=dict(
        khulasa='بُني مسرح الغلوب على الضفّة الجنوبية لنهر التايمز سنة ألف وخمسمئة وتسع وتسعين '
                'من أخشاب مسرح أقدم. حلقة من الشُّرَف نحو مئة قدم عرضًا، مكشوفة للسماء في '
                'وسطها، ومنصّة مدفوعة إلى الساحة. يدخله ألفا شخص، وتبدأ المسرحيّات بعد الظهر '
                'لانعدام الضوء الصناعي.',
        maana='المعنى أنّ البناء قدّم للفرقة ثلاثة أشياء نافعة: باب سفليّ في المنصّة يُحفَر منه '
              'قبر أو يصعد منه شيطان، وشُرفة فوق المنصّة تصلح لشرفة أو سور مدينة أو سطح سفينة، '
              'وفضاء مستور في الخلف يُخفى فيه ممثّل ثمّ يُكشَف.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الظاهرة: تلك الترتيبات صاغت الكتابة. '
                  'فالخطبة تُوجَّه إلى ألفَي واقف في ضوء النهار، ولهذا يعمل الهمس الجانبي '
                  'والمنولوج هناك، ويُسمّى المكان ليُثبَت لأنّ لا شيء على المنصّة يُظهره، '
                  'وتتوالى المشاهد بلا وقفة.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن السبب المذكور في النصّ وعن '
             'الانتقال الأكثر منطقيّة. والفخّ المتوقّع هنا أن يُقلب الاتّجاه فتُحسب '
             'المسرحيّات هي التي صاغت البناء. ويقترن المقطع بالمقطع الخامس والثمانين في أسئلة '
             'النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The Globe burned down in 1613 after a cannon set the roof alight',
                   'The features of the building shaped the plays written for it',
                   'Two thousand people could get into the playhouse at once',
                   'The plays written decided how the playhouse was built'],
             key='B', moves={'A': 'true_not_asked', 'C': 'underreach', 'D': 'wrong_direction'},
             why='The text lists the trap door, the gallery and the curtained space, then says '
                 'those arrangements shaped the writing and gives three consequences for the '
                 'plays.',
             trap='D reverses the direction the text gives, in which the building shapes the '
                  'writing.'),
        dict(stem='According to the text, why did plays begin in the early afternoon?',
             opts=['Because the cheapest seats cost a penny',
                   'Because the stage had no front curtain',
                   'Because two thousand people had to get in',
                   'Because there was no artificial light'],
             key='D', moves={'A': 'imported', 'B': 'detail_swap', 'C': 'imported'},
             why='The text says plays began in the early afternoon because there was no '
                 'artificial light.',
             trap='B names another absence in the building that the text links to something '
                  'else.'),
        dict(claim='a scene could change without any pause',
             stem='Which quotation from the text most strongly supports the claim that a scene '
                  'could change without any pause?',
             opts=[Q('There was no front curtain and almost no scenery, so a scene ended when the '
                     'actors walked off and the next began when others walked on'),
                   Q('Above the stage was a gallery, which could serve as a balcony, a city wall '
                     'or the deck of a ship'),
                   Q('At the back were two doors and a curtained space, which let an actor be '
                     'hidden and then discovered'),
                   Q('The cheapest paid a penny and stood in the open around three sides of the '
                     'stage')],
             key='A', moves={'B': 'near_miss', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation names the absence of a curtain and of scenery and then says a '
                 'scene ended with an exit and the next began with an entrance.',
             trap='B names a feature that changes what a scene can show rather than how fast it '
                  'can change.'),
        dict(carrier='Place is established by being named, because nothing on stage can show it. A '
                     'playwright working in that building therefore had to ___',
             stem='Which choice most logically completes the text?',
             opts=['build scenery for every new location',
                   'avoid moving the action between countries',
                   'put the setting into the dialogue itself',
                   'write for a dark room and a lit stage'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'imported'},
             why='Nothing on the stage could show a place and place was established by being '
                 'named, so the naming had to be done in the words spoken.',
             trap='B rules out the quick movement between Rome and Egypt that the text reports.'),
        dict(target='shaped',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('shaped'),
             opts=['carved into a form', 'influenced the form of', 'limited the amount of',
                   'was modeled on'],
             key='B', moves={'A': 'near_miss', 'C': 'near_miss', 'D': 'wrong_direction'},
             why='The arrangements of the building are said to have shaped the writing, and the '
                 'text then lists the features of the plays that followed from them.',
             trap='D reverses the direction, making the building follow the writing.'),
        dict(stem='Which choice best describes the function of the sentence announcing three '
                  'useful things?',
             opts=['It sets up the list of features that follows',
                   'It reports the year the playhouse was built',
                   'It explains why the modern copy uses no microphones',
                   'It concedes that the building limited the plays'],
             key='A', moves={'B': 'detail_swap', 'C': 'imported', 'D': 'near_miss'},
             why='The sentence saying the building offered a company three useful things is '
                 'followed at once by the trap door, the gallery and the curtained space.',
             trap='C points to the modern copy, which the text reaches only at the end.'),
        dict(sibling='HUM-S05-L2',
             sibling_gloss='Text 2 is passage 85 of this book. It treats several habits of '
                           'Elizabethan playwriting as consequences of the building, and notes '
                           'that because there was no front curtain a scene had to end with an '
                           'exit, which is why so many finish on a rhyming couplet.',
             stem='Text 1 says the arrangements of the building shaped the writing. Based on Text '
                  '2, which choice best describes a further consequence of those arrangements?',
             opts=['Place had to be established in the dialogue',
                   'The stage had a trap door for a grave',
                   'The aside became awkward in a dark auditorium',
                   'Many scenes finish on a couplet that clears the stage'],
             key='D', moves={'A': 'restatement', 'B': 'restatement', 'C': 'near_miss'},
             why='Text 2 says a scene had to end with an exit because there was no front curtain, '
                 'which is why so many scenes finish on a rhyming couplet.',
             trap='C reports what happened in later playhouses rather than a consequence in this '
                  'one.'),
        dict(carrier='There was no front curtain and almost no scenery. ___ a scene ended when the '
                     'actors walked off and the next began when others walked on.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'For example,', 'As a result,', 'In other words,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'restatement'},
             why='The second sentence gives what followed from the absence of a curtain and of '
                 'scenery, so the transition must mark a consequence.',
             trap='A sets the two sentences against each other when one follows from the other.'),
        dict(carrier='Two thousand people could get in ___ and the cheapest paid a penny and stood '
                     'in the open around three sides of the stage.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['in, and', 'in and', 'in; and', 'in and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the penny and the standing is independent, so the conjunction '
                 'joining it to the clause about the two thousand people takes a comma.',
             trap='B runs the clause about the capacity straight into the clause about the '
                  'penny.'),
        dict(goal='explain why the plays move so quickly between places',
             notes=['There was no front curtain and almost no scenery.',
                    'A scene ended when the actors walked off and the next began when others '
                    'walked on.',
                    'Place is established by being named.',
                    'The plays move quickly between Rome and Egypt or between a court and a '
                    'field.'],
             stem='The student wants to explain why the plays move so quickly between places. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['The playhouse had no front curtain and almost no scenery',
                   'The plays move quickly between Rome and Egypt',
                   'With no curtain to close and place named in the words, one exit was the whole '
                   'scene change',
                   'Place in these plays is established by being named'],
             key='C', moves={'A': 'underreach', 'B': 'restatement', 'D': 'underreach'},
             why='Only this choice joins the absence of a curtain to the naming of place and '
                 'shows that the two together reduce a scene change to an exit.',
             trap='A names one condition without saying what it makes possible.'),
    ]))

# --- 6 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HUM-S06-L1',
    ar=dict(
        khulasa='نشر إدغار آلن بو جرائم شارع المشرحة سنة ألف وثمانمئة وإحدى وأربعين. تُقتل '
                'امرأتان في غرفة بالطابق الرابع من دار باريسية، والباب مُقفل من داخله والمفتاح '
                'في القفل، والنوافذ تبدو مسمَّرة، وتقبض الشرطة على الرجل الخطأ في الحال.',
        maana='المعنى أنّ القصّة قدّمت أجزاءً ما زالت تُستعمل: محقّق خاصّ لامع ليس شرطيًّا يحلّ '
              'القضيّة بالاستدلال من التفصيل المادّيّ، ورفيق أبطأ يروي ويسأل ما يسأله القارئ، '
              'وجهاز رسميّ كفؤ ومخطئ، وحلّ غريب لكنّه ميكانيكيّ، وتفسير يأتي في الصفحات '
              'الأخيرة وقد ظهر كلّ دليل له قبلها.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الظاهرة: الكتّاب اللاحقون لم يحاكوا '
                  'النمط محاكاةً مجرّدة، بل عوّلوا على معرفة القارئ به، وهذا أمر آخر وأنفع، '
                  'ومنه تبدأ لذّة الشكل الحديث. فأغاثا كريستي بنت مسيرتها على نقض القواعد '
                  'التي أقامها النمط.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسب اللاحقون ناسخين للنمط، مع أنّ النصّ '
             'ينفي ذلك. ويقترن المقطع بالمقطع السادس والثمانين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Poe wrote only three Dupin stories and thought little of them',
                   'The windows in the room appear to be nailed shut',
                   'One story supplied parts that later writers rely on a reader knowing',
                   'Later writers simply copied the pattern Poe set down'],
             key='C', moves={'A': 'true_not_asked', 'B': 'underreach', 'D': 'wrong_direction'},
             why='The text says the story introduced a set of parts still in use, and that later '
                 'writers counted on a reader knowing the pattern rather than merely copying it.',
             trap='D makes the later writers copyists, which the text expressly denies.'),
        dict(stem='According to the text, what could the crowd of neighbors not agree on?',
             opts=['What language the second voice was speaking',
                   'Whether the door was locked from the inside',
                   'Which of the two women had been killed first',
                   'Whether the police had arrested the wrong man'],
             key='A', moves={'B': 'detail_swap', 'C': 'imported', 'D': 'detail_swap'},
             why='The text says the crowd hears voices on the stairs but cannot agree on what '
                 'language the second voice was speaking.',
             trap='B names a fact the text reports without any disagreement.'),
        dict(claim='the solution is prepared rather than sprung on the reader',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'solution is prepared rather than sprung on the reader?',
             opts=[Q('There is a solution that is strange but mechanical'),
                   Q('The explanation is given in the last pages, and every clue needed for it '
                     'has already appeared'),
                   Q('The police arrest the wrong man almost at once'),
                   Q('Two women are killed in a room on the fourth floor of a Paris house')],
             key='B', moves={'A': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation says every clue needed for the explanation has already appeared '
                 'before the last pages, which is preparation.',
             trap='A calls the solution mechanical without saying when the reader saw its '
                  'parts.'),
        dict(carrier='Agatha Christie built a career on breaking the rules the pattern had '
                     'established, and her readers could only be shocked because they knew them. '
                     'A reader who had never met the pattern would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['find the broken rules more shocking still',
                   'be unable to follow a Dupin story at all',
                   'prefer the official force to the private reasoner',
                   'miss the point of the rule being broken'],
             key='D', moves={'A': 'wrong_direction', 'B': 'overreach', 'C': 'imported'},
             why='The shock is said to depend on the readers knowing the rules, so a reader '
                 'without them has nothing for the breach to work against.',
             trap='B turns a lost effect into an inability to read the story.'),
        dict(target='imitate',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('imitate'),
             opts=['make fun of', 'stand in for', 'reproduce closely', 'improve upon'],
             key='C', moves={'A': 'imported', 'B': 'imported', 'D': 'wrong_direction'},
             why='The text contrasts not simply imitating the pattern with counting on a reader '
                 'to know it, so the word names a straight copying of it.',
             trap='D makes the word name an advance on the pattern rather than a copy of it.'),
        dict(stem='Which choice best describes the function of the list of four parts in the '
                  'text?',
             opts=['It dates the arrival of Sherlock Holmes',
                   'It sets out what the story left for later writers',
                   'It explains why the police arrest the wrong man',
                   'It argues that Christie broke every one of the rules'],
             key='B', moves={'A': 'detail_swap', 'C': 'near_miss', 'D': 'overreach'},
             why='The list follows the sentence saying the story introduced a set of parts still '
                 'in use, and it names them one by one.',
             trap='D pushes a career built on breaking rules into breaking all of them.'),
        dict(sibling='HUM-S06-L2',
             sibling_gloss='Text 2 is passage 86 of this book. It says a convention both tells a '
                           'reader how to read and creates the possibility of significant '
                           'deviation, because a rule everybody knows can be broken on purpose '
                           'and the breaking will be noticed.',
             stem='Text 1 reports that later writers counted on a reader knowing the pattern. '
                  'Based on Text 2, which choice best explains what that knowledge makes '
                  'possible?',
             opts=['A rule everybody knows can be broken on purpose and noticed',
                   'Every clue must be shown to the reader before the solution',
                   'The story introduced a set of parts that are still in use',
                   'A western hero walking down a street borrows earlier walks'],
             key='A', moves={'B': 'true_not_asked', 'C': 'restatement', 'D': 'near_miss'},
             why='Text 2 says a convention creates the possibility of significant deviation, '
                 'because a rule that everybody knows can be broken on purpose and the breaking '
                 'will be noticed.',
             trap='B names one written rule rather than what knowing a rule makes possible.'),
        dict(carrier='Later writers did not simply imitate the pattern. ___ they counted on a '
                     'reader knowing it, which is a different and more useful thing.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['For example,', 'As a result,', 'Even so,', 'Instead,'],
             key='D', moves={'A': 'near_miss', 'B': 'wrong_direction', 'C': 'wrong_direction'},
             why='The second sentence gives what the later writers did in place of imitating, so '
                 'the transition must mark a substitution.',
             trap='B makes the counting follow from the refusal to imitate.'),
        dict(carrier='The door is locked from the inside ___ and the key is in the lock.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['inside and', 'inside, and', 'inside; and', 'inside and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying the key is in the lock is independent, so the conjunction '
                 'joining it to the clause about the locked door takes a comma.',
             trap='A runs the clause about the door straight into the clause about the key.'),
        dict(goal='explain why a modern reader enjoys a detective story',
             notes=['The story introduced a set of parts that are still in use.',
                    'Later writers did not simply imitate the pattern.',
                    'They counted on a reader knowing it.',
                    'Christie built a career on breaking rules her readers knew.'],
             stem='The student wants to explain why a modern reader enjoys a detective story. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['The story introduced a set of parts that are still in use',
                   'Later writers did not simply imitate the pattern Poe set',
                   'Christie built a career on breaking rules her readers knew',
                   'Because the reader knows the pattern, a writer can break it and be felt to '
                   'have done so'],
             key='D', moves={'A': 'underreach', 'B': 'restatement', 'C': 'underreach'},
             why="Only this choice joins the reader's knowledge of the pattern to the effect a "
                 'writer gets by breaking it, which is where the pleasure is said to begin.',
             trap="C names the career without saying what the readers' knowledge contributes."),
    ]))

# --- 7 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='HUM-S07-L1',
    ar=dict(
        khulasa='رسم يوهانس فرمير حالبة اللبن في دلفت قرب نهاية خمسينيّات القرن السابع عشر. '
                'واللوحة صغيرة، نحو ثماني عشرة بوصة ارتفاعًا، وفيها خادمة واقفة عند مائدة تصبّ '
                'لبنًا من جرّة خزفية في قصعة، وذلك هو الحدث كلّه.',
        maana='المعنى أنّ أشياء الغرفة مرسومة بعناية بالغة: خبز مكسور خَشِن، وقماش أزرق، وقِدر '
              'نحاسيّة، وسلّة، وجرّة مصقولة معلّقة، ودفّاءة قدمين في اليمين الأسفل، وصفّ من '
              'القرميد الأزرق. واللبن هو الشيء المتحرّك الوحيد، رسمه فرمير خيطًا أبيض رقيقًا له '
              'حرف غليظ عند القصعة.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الظاهرة: كلّ سطح يردّ الضوء ردًّا '
                  'مختلفًا، والرسّام سجّل كلّ واحد منها: الطلاء على الجرّة يحمل وميضًا قاسيًا، '
                  'وقشرة الخبز فيها نقط من طلاء غليظ تلتقط الضوء كالكِسَر الحقيقية، والجدار '
                  'دافئ حيث تقع الشمس وبارد في الظلّ.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن التفصيل المذكور في النصّ وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُطلب حدث درامي في اللوحة، مع أنّ النصّ '
             'يقول إنّ لا شيء يحدث. ويقترن المقطع بالمقطع السابع والثمانين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Vermeer left about thirty-five paintings in all',
                   'The painting is small, roughly eighteen inches high',
                   'The painting records a dramatic event in a kitchen',
                   'A picture in which nothing happens is dense with recorded surfaces'],
             key='D', moves={'A': 'true_not_asked', 'B': 'underreach', 'C': 'wrong_direction'},
             why='The text says the pouring of milk is the whole event and then lists the '
                 'surfaces the painter has recorded one by one, ending with a picture that has '
                 'held visitors for three hundred years.',
             trap='C supplies a drama that the text says is absent.'),
        dict(stem='According to the text, what is the only moving thing in the painting?',
             opts=['The light through the window on the left',
                   'The milk being poured into the bowl',
                   'The servant standing at the table',
                   'The jug hanging on the wall'],
             key='B', moves={'A': 'near_miss', 'C': 'detail_swap', 'D': 'detail_swap'},
             why='The text says the milk is the only moving thing in the painting and describes '
                 'it as a thin white thread.',
             trap='A names the light, which the text treats as falling rather than moving.'),
        dict(claim='the painter recorded how each surface takes light differently',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'painter recorded how each surface takes light differently?',
             opts=[Q('A servant stands at a table pouring milk from an earthenware jug into a '
                     'bowl'),
                   Q('Low down on the right there is a foot warmer, a small wooden box for hot '
                     'coals'),
                   Q('The bread crust holds small dots of thick paint that catch light like real '
                     'crumbs'),
                   Q('The things in the room are painted with great care')],
             key='C', moves={'A': 'true_not_asked', 'B': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation describes paint laid on so that the crust catches light as real '
                 'crumbs would, which is one surface recorded for the way it takes light.',
             trap='D says the things are painted with care without naming anything about light.'),
        dict(carrier='Nothing is happening, and yet the picture has held visitors in front of it '
                     'for three hundred years. A viewer who finds the painting empty has '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['not yet noticed how much is there',
                   "understood the painter's intention exactly",
                   'confused this picture with a later one',
                   'measured the panel at eighteen inches'],
             key='A', moves={'B': 'wrong_direction', 'C': 'imported', 'D': 'true_not_asked'},
             why='The text says the first step is noticing how much is actually there, which '
                 'sets emptiness down to the viewer rather than to the picture.',
             trap='B credits the painter with the emptiness the text says is only apparent.'),
        dict(target='reflects',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('reflects'),
             opts=['thinks carefully about', 'stands as a sign of', 'mirrors an exact image',
                   'throws back'],
             key='D', moves={'A': 'imported', 'B': 'near_miss', 'C': 'near_miss'},
             why='Each surface is said to reflect light differently and the painter to have '
                 'recorded each, so the word names what a surface does with light that falls on '
                 'it.',
             trap='C narrows throwing light back to producing a mirror image.'),
        dict(stem='Which choice best describes the function of the sentence about a later passage '
                  'in this strand?',
             opts=['It names the owner of the painting today',
                   'It reports the year Vermeer died in Delft',
                   'It points forward to a question this text does not take up',
                   'It concludes that the arrangement cannot be described'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence says a later passage asks how a painter arranges a scene, and the '
                 'text then returns to noticing how much is there.',
             trap='D rules out a description that the later passage is said to attempt.'),
        dict(sibling='HUM-S07-L2',
             sibling_gloss='Text 2 is passage 87 of this book. It names tonal contrast, line, and '
                           'scale and position as the three devices that carry a composition, and '
                           'says the eye goes to the strongest contrast first, which is why '
                           'Vermeer puts his brightest white on the milk and the cap.',
             stem='Text 1 lists the surfaces Vermeer recorded. Based on Text 2, which choice best '
                  'explains why the milk draws the eye first?',
             opts=['Edges that run diagonally lead the eye along them',
                   'The brightest white sits against a wall kept in a narrow range',
                   'The milk is the only moving thing in the painting',
                   'An object cut by the frame reads as continuing beyond it'],
             key='B', moves={'A': 'near_miss', 'C': 'restatement', 'D': 'true_not_asked'},
             why='Text 2 says the eye goes to the strongest tonal contrast first, and that '
                 'Vermeer puts his brightest white on the milk while leaving the wall in a narrow '
                 'range.',
             trap='A names a different compositional device from the three in Text 2.'),
        dict(carrier='Nothing is happening in the picture. ___ it has held visitors in front of it '
                     'for three hundred years.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Even so,', 'As a result,', 'In other words,', 'For instance,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The second sentence sets the three hundred years of attention against the '
                 'absence of any event, so the transition must mark a concession.',
             trap='B makes the long attention follow from nothing happening.'),
        dict(carrier='The things in the room are painted with great care ___ and there is bread on '
                     'the table, broken and rough.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['care and', 'care; and', 'care, and', 'care and,'],
             key='C', moves={'A': 'run_on', 'B': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the bread on the table is independent, so the conjunction '
                 'joining it to the clause about the care taken takes a comma.',
             trap='A runs the clause about the care straight into the clause about the bread.'),
        dict(goal='emphasize how much detail a quiet picture holds',
             notes=['The whole event is a servant pouring milk into a bowl.',
                    'Bread, a blue cloth, a brass pot, a basket and a jug are all recorded.',
                    'Every surface reflects light differently.',
                    'The picture has held visitors for three hundred years.'],
             stem='The student wants to emphasize how much detail a quiet picture holds. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['One pouring of milk is surrounded by a dozen surfaces, each recorded for the '
                   'light it takes',
                   'The whole event in the painting is a servant pouring milk',
                   'Bread, a cloth, a pot, a basket and a jug are recorded',
                   'The picture has held visitors for three hundred years'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'true_not_asked'},
             why='Only this choice sets the single event beside the number of surfaces recorded, '
                 'which is what makes the quiet picture full.',
             trap='C lists the objects without saying what their recording amounts to.'),
    ]))

# --- 8 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='HUM-S08-L1',
    ar=dict(
        khulasa='كتب موتسارت اثنتي عشرة تنويعة للآلة ذات المفاتيح على أغنية فرنسية يعرفها '
                'متكلّمو الإنجليزية لحنًا لأغنية النجمة الصغيرة. واللحن نفسه ثمانية موازير ولا '
                'يستعمل إلّا حفنة من النغمات، ويعرضه موتسارت صريحًا أوّلًا ليعلم كلّ مستمع ما '
                'سيُعمل عليه.',
        maana='المعنى أنّ الطرائق مسموعة بيسر: في تنويعة تجري اليمنى بنغمات سريعة متساوية واللحن '
              'مستخفٍ داخل الجريان، وفي أخرى ينتقل اللحن إلى اليسرى تحته، وواحدة تحوّل المقام من '
              'كبير إلى صغير فيُعتم الطابع كلّه وشكل اللحن باقٍ، وواحدة تبطئ حتّى الوقوف.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الظاهرة: الشكل قديم ولم يكن ابتكارًا '
                  'لموتسارت، فالمؤلّف يأخذ شيئًا معروفًا، أغنية شائعة أو رقصة، ويُظهر ما يمكن '
                  'عمله به. وقد كتب باخ وبيتهوفن وبرامز ورخمانينوف مجموعات كبيرة من هذا النوع، '
                  'ويعمل عازفو الجاز كذلك كلّ ليلة.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن وظيفة جزء من النصّ وعن إكمال '
             'النصّ إكمالًا منطقيًّا. والفخّ المتوقّع هنا أن يُنسب ابتكار الشكل إلى موتسارت، مع '
             'أنّ النصّ يسمّيه قديمًا. ويقترن المقطع بالمقطع الثامن والثمانين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['A known tune is changed repeatedly and still followed',
                   'Mozart published the set in Paris in 1785',
                   'The variation form was invented by Mozart himself',
                   'One variation turns the key from major to minor'],
             key='A', moves={'B': 'true_not_asked', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text says Mozart states the tune plainly, changes it twelve times without '
                 'quite losing it, and that the pleasure comes from hearing the original '
                 'survive.',
             trap='C credits Mozart with a form the text calls old.'),
        dict(stem='According to the text, how long is the tune Mozart works on?',
             opts=['Twelve bars', 'Thirty-three bars', 'Eight bars', 'Two bars'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'imported'},
             why='The text says the tune itself is eight bars long and uses only a handful of '
                 'notes.',
             trap='A gives the number of variations rather than the length of the tune.'),
        dict(claim='a listener can follow the tune through every change',
             stem='Which quotation from the text most strongly supports the claim that a listener '
                  'can follow the tune through every change?',
             opts=[Q('The tune itself is eight bars long and uses only a handful of notes'),
                   Q('One variation turns the key from major to minor, which darkens the whole '
                     'character'),
                   Q('Mozart wrote his set in his twenties, probably in Paris, and it was '
                     'published in 1785'),
                   Q('In every case a listener can still follow the original, and the pleasure '
                     'comes from hearing it survive')],
             key='D', moves={'A': 'near_miss', 'B': 'near_miss', 'C': 'true_not_asked'},
             why='The quotation says that in every case the listener can still follow the '
                 'original and locates the pleasure in hearing it survive.',
             trap='B names one of the changes without saying what survives it.'),
        dict(carrier='The theme is stated, and then it is taken apart in front of the audience. '
                     'That only works if everyone in the room remembers the theme. A performance '
                     'that opened with the variations instead would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['be easier for the audience to follow',
                   'leave the audience with nothing to measure against',
                   'turn the key from major to minor at once',
                   'last longer than a performance in the usual order'],
             key='B', moves={'A': 'wrong_direction', 'C': 'true_not_asked', 'D': 'imported'},
             why='The taking apart is said to work only if everyone in the room remembers the '
                 'theme, which the plain statement of it supplies.',
             trap='A makes the loss of the stated theme a help to the listener.'),
        dict(target='inspired',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('inspired'),
             opts=['moved to act', 'breathed in', 'made holy', 'given the idea by'],
             key='A', moves={'B': 'imported', 'C': 'imported', 'D': 'near_miss'},
             why='Beethoven is said to have been inspired to write thirty-three variations, so '
                 'the word names what set him to writing them.',
             trap='D makes the publisher the source of the idea rather than the occasion for '
                  'it.'),
        dict(stem='Which choice best describes the function of the reference to jazz musicians?',
             opts=["It dates the publication of Mozart's set",
                   'It names the French song behind the tune',
                   'It argues that jazz invented the procedure',
                   'It shows the same procedure still in use'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'overreach'},
             why='The reference follows the list of composers who wrote such sets and says jazz '
                 'musicians work the same way nightly, stating the theme and taking it apart.',
             trap='C turns a present-day instance of the procedure into its origin.'),
        dict(sibling='HUM-S08-L2',
             sibling_gloss='Text 2 is passage 88 of this book. It describes music as the '
                           'management of tension and release around a home note, says a cadence '
                           'is the machinery of arrival, and tells a listener to ask what a '
                           'passage has set up and whether it has paid.',
             stem='Text 1 says the pleasure comes from hearing the tune survive. Based on Text 2, '
                  'which choice best explains why a stated theme matters?',
             opts=['A cadence is the standard machinery of arrival',
                   'A strong beat left silent is louder than any note',
                   'An effect depends on something being set up first',
                   'Film composers work with very simple material'],
             key='C', moves={'A': 'true_not_asked', 'B': 'near_miss', 'D': 'true_not_asked'},
             why='Text 2 says the question to ask of a passage is what it has set up and whether '
                 'it has paid, and that an effect comes from establishing something and then '
                 'withholding it.',
             trap='B names one such effect rather than the condition every one of them needs.'),
        dict(carrier='He states it plainly first, so that every listener knows exactly what will '
                     'be worked on. ___ he changes it twelve times without ever quite losing it.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'After that,', 'In other words,', 'For example,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The second sentence gives what Mozart does after stating the tune, so the '
                 'transition must mark a step in sequence.',
             trap='C treats the twelve changes as a restatement of the plain statement.'),
        dict(carrier='The theme is stated ___ and then it is taken apart in front of the '
                     'audience.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['stated and', 'stated; and', 'stated and,', 'stated, and'],
             key='D', moves={'A': 'run_on', 'B': 'wrong_mark', 'C': 'misplaced'},
             why='The clause about the theme being taken apart is independent, so the conjunction '
                 'joining it to the clause stating the theme takes a comma.',
             trap='A runs the clause about the statement straight into the clause about the '
                  'taking apart.'),
        dict(goal='explain what a listener needs in order to enjoy a set of variations',
             notes=['Mozart states the tune plainly before the variations.',
                    'The tune is eight bars long and uses few notes.',
                    'A listener can still follow the original in every case.',
                    'Taking a theme apart only works if the room remembers it.'],
             stem='The student wants to explain what a listener needs in order to enjoy a set of '
                  'variations. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['The tune is eight bars long and uses only a few notes',
                   'A plainly stated tune gives the listener the original to follow through every '
                   'change',
                   'Mozart states the tune plainly before the variations begin',
                   'Taking a theme apart only works if the room remembers it'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice joins the plain statement of the tune to the following that '
                 'the listener is then able to do.',
             trap='C names the plain statement without saying what it gives the listener.'),
    ]))

# --- 9 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HUM-S09-L1',
    ar=dict(
        khulasa='افتُتح رواق برلنغتون قبالة بيكاديلي في لندن سنة ألف وثمانمئة وتسع عشرة. وهو '
                'زقاق مغطّى مستقيم نحو ستّمئة قدم طولًا، مصطفّة على جانبيه دكاكين صغيرة ومسقوف '
                'بالزجاج، وكان يطوف فيه حَجَبة بقبّعات عالية، ومُنع الرَّكض والغناء والصفير وما '
                'زال ممنوعًا.',
        maana='المعنى أنّ الفكرة انتشرت سريعًا لأنّها حلّت مشكلات عدّة في وقت واحد: فمطر لندن كان '
              'يُنكّد التسوّق في الشارع، والأرصفة ضيّقة قذرة تُشارَك مع العربات. أمّا تحت الزجاج '
              'فيمشي المتسوّق الطول كلّه جافًّا، وينظر في أربعين واجهة، ويلقى الناس.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الظاهرة: الدكاكين صغيرة والأجرة '
                  'عالية، وهذا يوافق تجارات تبيع سلعًا خفيفة غالية من قفازات وحُليّ ومطبوعات '
                  'وساعات. وتبعت نسخ أكبر في أوروبا، ورواق فيتوريو إيمانويلي الثاني في ميلانو '
                  'بُني بين سنة خمس وستّين وسنة سبع وسبعين من القرن التاسع عشر.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن التفصيل المذكور في النصّ وعن '
             'النصّين المتقابلين. والفخّ المتوقّع هنا أن يُسوّى الرواق بالمركز التجاري، مع أنّ '
             'النصّ يفرّق بينهما: الرواق شارع عامّ مسقوف له بابان يفتحان على المدينة. ويقترن '
             'المقطع بالمقطع التاسع والثمانين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Burlington Arcade still employs beadles in top hats',
                   'A roofed public lane solved several problems of street shopping',
                   'The Milan galleria has a dome a hundred and fifty feet high',
                   'An arcade and a shopping mall are the same thing'],
             key='B', moves={'A': 'true_not_asked', 'C': 'underreach', 'D': 'wrong_direction'},
             why='The text says the idea spread because it solved several problems at once, and '
                 'then names the rain, the narrow pavements and the shelter a shopper gained.',
             trap='D erases the difference the text says matters between an arcade and a mall.'),
        dict(stem='According to the text, which trades suited the shops in the arcade?',
             opts=['Those selling heavy goods cheaply', 'Those needing a car park nearby',
                   'Those open only in daylight hours', 'Those selling expensive light goods'],
             key='D', moves={'A': 'wrong_direction', 'B': 'imported', 'C': 'wrong_direction'},
             why='The text says the shops were small and the rents high, which suited trades '
                 'selling expensive light goods such as gloves and watches.',
             trap='A reverses both terms the text gives for the goods.'),
        dict(claim='the arcade belongs to the city in a way a mall does not',
             stem='Which quotation from the text most strongly supports the claim that the arcade '
                  'belongs to the city in a way a mall does not?',
             opts=[Q('An arcade is a public street with a roof on it, and it has doors at both '
                     'ends that open onto the city'),
                   Q('A mall has one owner, one set of opening hours and a car park'),
                   Q('Gas lighting, and then electric lighting, let the arcade stay open into the '
                     'evening'),
                   Q('It is a straight covered lane, about six hundred feet long, lined on both '
                     'sides with small shops')],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation calls the arcade a public street with a roof and names the doors '
                 'at both ends that open onto the city.',
             trap='B describes the mall rather than what makes the arcade part of the city.'),
        dict(carrier='London rain made street shopping miserable, and pavements were narrow, '
                     'filthy and shared with carriages. A shopper who went under glass instead '
                     'was therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['paying higher rents than before', 'confined to a single row of shops',
                   'out of the rain and off the carriage way',
                   'forbidden to meet anyone on the way'],
             key='C', moves={'A': 'imported', 'B': 'wrong_direction', 'D': 'wrong_direction'},
             why='The problems named are the rain and the pavements shared with carriages, and '
                 'the arcade is said to let a shopper walk the whole length dry.',
             trap='B shuts in a shopper the text says could look in forty windows.'),
        dict(target='admired',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('admired'),
             opts=['looked at longingly', 'held in high regard', 'copied in other cities',
                   'inspected for faults'],
             key='B', moves={'A': 'near_miss', 'C': 'imported', 'D': 'wrong_direction'},
             why='The arcades are said to have been admired as engineering as much as '
                 'architecture, so the word names the regard in which the work was held.',
             trap='C takes the copying the text reports elsewhere for the regard itself.'),
        dict(stem='Which choice best describes the function of the sentence saying one difference '
                  'matters?',
             opts=['It marks the arcade off from its descendant',
                   'It reports the length of Burlington Arcade',
                   'It explains why running and singing were forbidden',
                   'It claims the mall improved on the arcade'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The sentence follows the claim that the arcade is the ancestor of the mall and '
                 'is followed by the public street and the single owner set against each other.',
             trap='D supplies a verdict on the mall that the text does not give.'),
        dict(sibling='HUM-S09-L2',
             sibling_gloss='Text 2 is passage 89 of this book. It measures a street by active '
                           'frontage, by the proportion of width to height and by permeability, '
                           'and reports that doorways per hundred meters predicts street life '
                           'better than architectural quality does.',
             stem='Text 1 describes a lane lined on both sides with small shops. Based on Text 2, '
                  'which choice best explains why such a lane feels busy?',
             opts=['A long glass roof carried on iron was a new thing',
                   'A tower set back in open ground leaves the pavement dead',
                   'Older European streets run between one to one and one to two',
                   'Many doorways along a short length predict street life'],
             key='D', moves={'A': 'restatement', 'B': 'near_miss', 'C': 'true_not_asked'},
             why='Text 2 says active frontage counts doorways in use and that doorways per '
                 'hundred meters predicts street life better than architectural quality does.',
             trap='B names the opposite case rather than what makes the lane work.'),
        dict(carrier='The shops were small and the rents were high. ___ the arcade suited trades '
                     'selling expensive light goods.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Nevertheless,', 'For instance,', 'Accordingly,', 'That is to say,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'restatement'},
             why='The second sentence gives what followed from the small shops and the high '
                 'rents, so the transition must mark a consequence.',
             trap='A sets the trades against the rents when one follows from the other.'),
        dict(carrier='Running, singing and whistling were forbidden ___ and they still are.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['forbidden, and', 'forbidden and', 'forbidden; and', 'forbidden and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying they still are is independent, so the conjunction joining it '
                 'to the clause about the prohibition takes a comma.',
             trap='B runs the clause about the prohibition straight into the clause about the '
                  'present day.'),
        dict(goal='explain why the arcade is not simply an early mall',
             notes=['An arcade is a public street with a roof on it.',
                    'It has doors at both ends that open onto the city.',
                    'A mall has one owner and one set of opening hours.',
                    'The arcade is the direct ancestor of the shopping mall.'],
             stem='The student wants to explain why the arcade is not simply an early mall. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['The arcade is the direct ancestor of the shopping mall',
                   'A mall has one owner and one set of opening hours',
                   'The arcade stays a public street, open at both ends, while the mall has one '
                   'owner',
                   'An arcade is a public street with a roof on it'],
             key='C', moves={'A': 'true_not_asked', 'B': 'underreach', 'D': 'underreach'},
             why='Only this choice sets the public street open at both ends against the single '
                 'ownership, which is the difference the notes make available.',
             trap='B describes the mall without saying what the arcade is unlike.'),
    ]))

# --- 10 ------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HUM-S10-L1',
    ar=dict(
        khulasa='عُرض ربيع التقديس أوّل مرّة في باريس في التاسع والعشرين من مايو سنة ألف وتسعمئة '
                'وثلاث عشرة. وضع إيغور سترافنسكي الموسيقى ورتّب فاسلاف نيجينسكي الرقص، وبدأ '
                'الجمهور يعترض في الدقائق الأولى، فكان ضحك ثمّ صياح ثمّ عراك في الممرّات.',
        maana='المعنى أنّ مراجعات الصباح التالي لم تتّفق على ما حدث: فناقد باريسي سمّى العمل '
              'بربريّة متكلّفة صبيانيّة وقال إنّ على المسرح أن يخجل، وآخر أثنى عليه عملًا نادر '
              'القوّة وكتب إنّ الهسهسة جاءت من مدافعين عن عاداتهم، وثالث أنفق عموده على ثياب '
              'الجمهور.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الظاهرة: ثلاثتهم جلسوا في الغرفة '
                  'نفسها ثلاثًا وثلاثين دقيقة، وذلك الخلاف حال النقد المعتادة لا مَفضَحة. '
                  'فلكلّ واحد معيار في ذهنه والمعايير مختلفة: الأوّل أراد لحنًا ورشاقة، '
                  'والثاني أراد عملًا يفعل شيئًا جديدًا، والثالث أراد مناسبة اجتماعية.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن '
             'الانتقال الأكثر منطقيّة. والفخّ المتوقّع هنا أن يُختار ناقد واحد صائبًا، مع أنّ '
             'النصّ يطلب من القارئ أن يستخرج المعيار الكامن خلف كلّ مراجعة. ويقترن المقطع '
             'بالمقطع التسعين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The Rite of Spring was first performed in Paris in 1913',
                   'The audience fought in the aisles during the performance',
                   'Reviews differ because the standards behind them differ',
                   'One of the three critics judged the work correctly'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'wrong_direction'},
             why='The text calls the disagreement the ordinary condition of criticism, says each '
                 'critic had a different standard in mind, and tells a reader to find the '
                 'standard behind a review.',
             trap='D picks a winner among the three, which the text does not do.'),
        dict(stem='According to the text, what did the third critic write about?',
             opts=['The clothes worn by the audience', 'The strength of the new work',
                   'The shame of the theater', 'The counts called from the wings'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says a third critic spent most of his column on the clothes in the '
                 'audience.',
             trap="B gives what the second critic praised rather than the third critic's "
                  'subject.'),
        dict(claim='the disagreement cannot be put down to what the critics saw',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'disagreement cannot be put down to what the critics saw?',
             opts=[Q('The audience began to object within the first minutes'),
                   Q('All three had sat in the same room for the same thirty-three minutes'),
                   Q('Nijinsky stood in the wings calling out the counts'),
                   Q('The reviews the next morning did not agree about what had happened')],
             key='B', moves={'A': 'true_not_asked', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation says the three critics sat in the same room for the same length '
                 'of time, which rules out a difference in what was in front of them.',
             trap='D states the disagreement without ruling out a difference in what each saw.'),
        dict(carrier='Each of the three had a standard in mind and the standards were different. '
                     'A reader who wants to use any review must therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['count the minutes the performance lasted',
                   'accept the verdict of the strongest writer',
                   'read only the reviews that agree with one another',
                   'work out the standard the review is using'],
             key='D', moves={'A': 'imported', 'B': 'wrong_direction', 'C': 'wrong_direction'},
             why='The text says a reader who wants to use a review must find the standard behind '
                 'it, and that the standard is often unstated.',
             trap='B settles the matter by force of writing rather than by the standard in use.'),
        dict(target='praised',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('praised'),
             opts=['raised up high', 'prayed over', 'commended warmly', 'appraised coolly'],
             key='C', moves={'A': 'imported', 'B': 'imported', 'D': 'near_miss'},
             why='The second critic is said to have praised the work as one of rare strength, so '
                 'the word names approval expressed in print.',
             trap='D makes the word name a neutral valuation rather than approval.'),
        dict(stem='Which choice best describes the function of the three sentences naming what '
                  'each critic wanted?',
             opts=['They date the first performance of the work',
                   'They supply the standards behind the three reviews',
                   'They rank the three reviews against one another',
                   'They report how long the performance lasted'],
             key='B', moves={'A': 'detail_swap', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The three sentences follow the claim that each critic had a different standard '
                 'in mind and say what each of those standards was.',
             trap='C ranks reviews that the text sets side by side without a verdict.'),
        dict(sibling='HUM-S10-L2',
             sibling_gloss='Text 2 is passage 90 of this book. It divides a critical judgment into '
                           'a claim, evidence and a criterion, and says the criterion fails by '
                           'staying hidden, which produces a disagreement in which two people '
                           'measure a work against different things.',
             stem='Text 1 reports three reviews that do not agree. Based on Text 2, which choice '
                  'best accounts for that disagreement?',
             opts=['Two people measuring against different hidden standards cannot settle it',
                   'A claim fails when nothing could count against it',
                   'All three critics sat in the same room for the same minutes',
                   'Evidence fails when it is about the author rather than the work'],
             key='A', moves={'B': 'true_not_asked', 'C': 'restatement', 'D': 'near_miss'},
             why='Text 2 says a hidden criterion produces the commonest kind of useless '
                 'disagreement, in which two people argue while measuring against different '
                 'things.',
             trap='D names a different one of the three failures Text 2 sets out.'),
        dict(carrier='All three had sat in the same room for the same thirty-three minutes. ___ '
                     'that disagreement is the ordinary condition of criticism rather than a '
                     'scandal.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['As a result,', 'For example,', 'In other words,', 'Even so,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'restatement'},
             why='The second sentence concedes the shared experience and still calls the '
                 'disagreement ordinary, so the transition must mark a concession rather than a '
                 'consequence.',
             trap='A makes the ordinariness of the disagreement follow from the shared room.'),
        dict(carrier='Igor Stravinsky wrote the music ___ and Vaslav Nijinsky arranged the '
                     'dancing.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['music and', 'music, and', 'music; and', 'music and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying Nijinsky arranged the dancing is independent, so the '
                 'conjunction joining it to the clause about the music takes a comma.',
             trap='A runs the clause about the music straight into the clause about the '
                  'dancing.'),
        dict(goal='explain how a reader should handle two opposed reviews',
             notes=['Three critics sat in the same room for the same thirty-three minutes.',
                    'One wanted melody and grace and another wanted something new.',
                    'The standard behind a review is often unstated.',
                    'Disagreement is the ordinary condition of criticism.'],
             stem='The student wants to explain how a reader should handle two opposed reviews. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['Three critics sat in the same room for the same thirty-three minutes',
                   'Disagreement is the ordinary condition of criticism rather than a scandal',
                   'One critic wanted melody and grace and another wanted something new',
                   'Since each review hides a standard, the reader recovers the standard before '
                   'weighing the verdict'],
             key='D', moves={'A': 'underreach', 'B': 'restatement', 'C': 'underreach'},
             why='Only this choice turns the unstated standard into a step the reader takes '
                 'before judging between the verdicts.',
             trap='C names two of the standards without saying what a reader does with them.'),
    ]))
