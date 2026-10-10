"""History and Civics, Level 3: ten question sets."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

Q = '«%s»'.__mod__
FIELD, LEVEL = 'HIS', 3
SETS = []

# --- 1 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HIS-S01-L3',
    ar=dict(
        khulasa='يوجد إعلان الاستقلال في أكثر من حالة، والفروق بينها دليل. فالباقي يشمل '
                'مسودة جيفرسون الخشنة بما فيها من شطب وإضافات، ونسخًا نظيفة كتبها '
                'لأصدقائه، والمنشور المطبوع في الرابع من تموز، والرقّ الموقّع في آب. '
                'والفرق الأكثر درسًا حذفٌ: مقطع طويل يحمّل الملك جورج الثالث مسؤولية تجارة '
                'العبيد، شطبه المؤتمر قبل الإقرار.',
        maana='المعنى أنّ المسودة دليل مزدوج على ما جرى: تُظهر ما كان كاتب واحد مستعدًّا '
              'لقوله، وتُظهر ما أمكن حمل ستّة وخمسين رجلًا على التوقيع عليه. لكنّ الحذف '
              'يقول إنّ جملة أُزيلت، ولا يقول بذاته لماذا أُزيلت.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الدليل: كيف يعرف أحد '
                  'شيئًا، وما حدود ما يحمله المصدر. وما تثبته المخطوطة أضيق وأمتن: أنّ '
                  'المسألة أُثيرت عام ألف وسبعمئة وستة وسبعين، كتابةً، من المؤلّف، ثم '
                  'أُخرجت.',
        sila='في اختبار سات يُسأل كثيرًا عن حدود ما يثبته دليل، وعن وظيفة جملة تقرّر تحفّظًا. '
             'والفخّ الشائع أن يُحمّل الحذف معنى كاملًا لا يحمله، أو أن تُقرأ رواية متأخّرة '
             'كأنّها محضر وقتي. ويقترن المقطع بالمقطع الحادي والخمسين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The rough draft is held at the Library of Congress and has been photographed',
                   'The surviving versions are evidence, and the deleted passage establishes '
                   'something narrow but firm',
                   'The deletion proves that the republic repudiated its own stated principle',
                   'Delegates from South Carolina and Georgia objected to a passage'],
             key='B', moves={'A': 'underreach', 'C': 'overreach', 'D': 'true_not_asked'},
             why='The text reads the versions against one another and then states exactly how much '
                 'the deletion establishes and how much it does not.',
             trap='C is the reading the final paragraph refuses, since Virginia planters were '
                  'themselves participants.'),
        dict(stem='According to the text, who recorded the reason for the objection?',
             opts=['A shorthand writer present at the proceedings',
                   'The delegates from South Carolina and Georgia',
                   'A northern member who profited from the trade',
                   'Jefferson himself, decades after the event'],
             key='D', moves={'A': 'imported', 'B': 'near_miss', 'C': 'detail_swap'},
             why='The text says Jefferson himself recorded the objection, and adds that he wrote '
                 'his account decades later when his memory had reasons of its own.',
             trap='B names the people who objected rather than the person who recorded it.'),
        dict(claim='a manuscript deletion establishes less than readers assume',
             stem='Which quotation from the text most strongly supports the claim that a '
                  'manuscript deletion establishes less than readers assume?',
             opts=[Q('A deletion tells us that a sentence was removed and not, by itself, why'),
                   Q('Historians read these against one another in the way a textual critic reads '
                     'the manuscripts of a poem'),
                   Q('Congress struck the whole passage out before approving the text'),
                   Q('The rough draft is held at the Library of Congress and has been '
                     'photographed at high resolution')],
             key='A', moves={'B': 'near_miss', 'C': 'underreach', 'D': 'true_not_asked'},
             why='The sentence states the limit directly: the removal is established and the '
                 'reason for it is not.',
             trap='C reports the removal itself, which is the fact whose meaning is in question.'),
        dict(carrier='The passage also blamed the king for a trade in which Virginia planters were '
                     'participants, so its removal cannot simply be read as the moment when the '
                     'republic repudiated its own stated principle. The deletion therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['shows that Jefferson had no part in the trade',
                   'proves that the objection came from the North',
                   'admits of more than one explanation at once',
                   'was reversed by Congress later that summer'],
             key='C', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'D': 'imported'},
             why='Objections came from two directions and the drafter was himself implicated, so '
                 'the removal cannot be assigned a single motive.',
             trap='B picks one of the two objections the text reports and treats it as the whole '
                  'account.'),
        dict(target='repudiated',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('repudiated'),
             opts=['restated in public', 'disowned as binding',
                   'made law at last', 'argued over in committee'],
             key='B', moves={'A': 'wrong_direction', 'C': 'near_miss', 'D': 'imported'},
             why='The sentence concerns a moment when the republic might have disowned a principle '
                 'it had stated, so the word names a refusal to be bound by it.',
             trap='A reverses the sense, since restating is the opposite of disowning.'),
        dict(stem='Which choice best describes the function of the comparison with a textual '
                  'critic?',
             opts=['It identifies the method by which the versions are read',
                   'It concedes that the manuscripts are literary rather than legal',
                   'It explains why the rough draft was photographed at high resolution',
                   'It introduces the objection from South Carolina and Georgia'],
             key='A', moves={'B': 'near_miss', 'C': 'imported', 'D': 'detail_swap'},
             why='The comparison is made in order to name the procedure, and the text says at once '
                 'that the method is identical.',
             trap='B treats an analogy about method as a claim about what kind of document this '
                  'is.'),
        dict(sibling='HIS-S01-L2',
             sibling_gloss='Text 2 is passage 51 of this book. It analyses the second paragraph of '
                           'the Declaration as a legal brief moving from premises to a conclusion, '
                           'with the grievances offered as evidence for a factual claim rather '
                           'than as argument about principle.',
             stem='Text 1 reports a passage on the slave trade that was struck out. Based on Text '
                  '2, where in the structure would that passage have stood?',
             opts=['Among the premises offered without proof',
                   'In the answer to the objection about light and transient causes',
                   'In the conclusion that a government may be altered',
                   'Among the grievances offered as evidence against the king'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'detail_swap'},
             why='Text 2 assigns everything after the premises to the evidence, and the deleted '
                 'passage blamed George III, which is what a grievance does.',
             trap='A puts a particular charge among the general premises Text 2 describes.'),
        dict(carrier='Jefferson wrote his account of the objection decades later, when his memory '
                     'had reasons of its own. ___ the passage also blamed the king for a trade in '
                     'which Virginia planters were participants.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['In other words,', 'As a result,', 'Beyond that,', 'For instance,'],
             key='C', moves={'A': 'restatement', 'B': 'wrong_direction', 'D': 'near_miss'},
             why='The sentence adds a second reason for caution rather than restating the first or '
                 'following from it.',
             trap='B makes the planters involvement a consequence of the late recollection.'),
        dict(carrier='What the manuscript establishes is narrower and still substantial ___ the '
                     'question was raised in 1776, in writing, by the author, and was taken out.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['substantial: the', 'substantial, the', 'substantial the',
                   'substantial; the,'],
             key='A', moves={'B': 'comma_splice', 'C': 'run_on', 'D': 'unpaired'},
             why='A colon introduces the statement of what the manuscript establishes, which the '
                 'clause before has just announced.',
             trap='B replaces the colon with a comma, leaving two full clauses spliced.'),
        dict(goal='explain to a reader how much the deleted passage proves',
             notes=["Jefferson's draft blamed George III for the slave trade.",
                    'Congress struck the whole passage out before approving the text.',
                    'A deletion tells us that a sentence was removed and not, by itself, why.',
                    'The question was raised in 1776, in writing, by the author, and was taken '
                    'out.'],
             stem='The student wants to explain to a reader how much the deleted passage proves. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=["Jefferson's draft blamed George III for the slave trade and Congress struck "
                   'it out',
                   'A deletion tells a historian that a sentence was removed and nothing further',
                   'The manuscript proves that the question was raised in writing in 1776 and '
                   'then removed, though not why it was removed',
                   'Congress struck the whole passage out before it approved the text of the '
                   'document'],
             key='C', moves={'A': 'underreach', 'B': 'overreach', 'D': 'restatement'},
             why='Only this choice states both halves, what the manuscript establishes and what it '
                 'leaves open, which is what the goal asks for.',
             trap='B states the limit so strongly that it denies the manuscript the narrow finding '
                  'the text grants it.'),
    ]))

# --- 2 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HIS-S02-L3',
    ar=dict(
        khulasa='مجموعة الفيدرالي أكثر المصادر اقتباسًا عن الدستور وأقلّها تمثيلًا: خمسة '
                'وثمانون مقالًا صحفيًّا كُتبت لإقناع نيويورك بالتصديق، بأقلام ثلاثة رجال '
                'لهم مصلحة في النتيجة. وقراءتها تفسيرًا محيّدًا للوثيقة كقراءة منشور '
                'انتخابي وصفًا لسياسة. وبقيّة السجلّ أكبر بكثير وأكثر فوضى.',
        maana='المعنى أنّ لكلّ نوع من المصادر عيبًا يمكن تسميته: المناقشات المنشورة حُرّرت '
              'قبل الطبع، وأقرّ أحد المحرّرين بأنّه حسّن الخطب وهو يكتبها؛ والرسائل '
              'الخاصّة صريحة ومتحيّزة في النفس الواحد؛ وملاحظات ماديسون نقّحها أربعين سنة، '
              'والتنقيحات تُؤرَّخ بالحبر والورق.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الدليل: ليس ما قيل بل '
                  'بأي ثقة نعرف أنّه قيل. ولهذا يستطيع مؤرّخ يريد إثبات أنّ السلطة '
                  'التنفيذية اغتُصبت لاحقًا، أو أنّها قُصدت واسعة من البداية، أن يجد في '
                  'السجلّ سندًا لأيّ الدعويين.',
        sila='في اختبار سات يُسأل عن موثوقية المصدر وعن الفكرة المركزية وعن وظيفة جملة. '
             'والفخّ الشائع أن تُعامل مجموعة الفيدرالي كشرح محيّد، مع أنّ النصّ يسمّيها '
             'دليلًا من الطرف الأول على ما أراد مؤلّفوها أن يُفهم. ويقترن المقطع بالمقطع '
             'الثاني والخمسين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The Documentary History of the Ratification now runs to more than thirty '
                   'volumes',
                   "Madison's notes were not published until 1840, after every participant was "
                   'dead',
                   'Every source on the Constitution carries a defect that can be named, which is '
                   'why the argument persists',
                   'The Federalist is the only reliable guide to what the Constitution means'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'wrong_direction'},
             why='The text names a characteristic defect for each kind of source and then explains '
                 'that this is why either side of the argument can find support.',
             trap='D inverts the opening, which calls the Federalist the least representative '
                  'source.'),
        dict(stem='According to the text, what was The Federalist written to do?',
             opts=['Persuade New York to ratify the Constitution',
                   'Record what was said at the Philadelphia convention',
                   'Answer the dissent published by the Pennsylvania minority',
                   'Explain the document neutrally to later readers'],
             key='A', moves={'B': 'detail_swap', 'C': 'imported', 'D': 'wrong_direction'},
             why='The text says the essays were written to persuade New York to ratify, by three '
                 'men with an interest in the outcome.',
             trap='D names the use the text says is a misreading of the source.'),
        dict(claim='published debates cannot be taken as verbatim records',
             stem='Which quotation from the text most strongly supports the claim that published '
                  'debates cannot be taken as verbatim records?',
             opts=[Q('Private letters are candid and partial in the same breath'),
                   Q('in one well-known case the reporter admitted that he had improved the '
                     'speeches as he set them down'),
                   Q('Essays opposing ratification appeared under names such as Brutus and the '
                     'Federal Farmer'),
                   Q('Modern editions print the sources side by side with notes on their '
                     'reliability')],
             key='B', moves={'A': 'near_miss', 'C': 'true_not_asked', 'D': 'underreach'},
             why='A reporter who admits improving speeches as he wrote them down establishes that '
                 'the printed debate is not a transcript.',
             trap='A names the defect of a different source, which is partiality rather than '
                  'alteration.'),
        dict(carrier='A historian who wants to show that executive power was later usurped, or '
                     'that it was always intended to be large, can find support in the record for '
                     'either claim. The size of the record therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['settles the question in favor of the larger reading',
                   'makes the sources easier to weigh against each other',
                   'shows that none of the surviving sources is reliable',
                   'does not by itself narrow the range of defensible readings'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'overreach'},
             why='The text says either claim can be supported from the record, so volume alone '
                 'leaves the disagreement standing.',
             trap='C turns a statement about ambiguity into a claim that every source is '
                  'worthless.'),
        dict(target='usurped',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('usurped'),
             opts=['delegated by statute', 'argued for in public',
                   'seized without right', 'divided among branches'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'near_miss'},
             why='The historian in question wants to show that executive power was taken rather '
                 'than granted, so the word names a seizure without right.',
             trap='A gives the lawful transfer that the word is set against.'),
        dict(stem='Which choice best describes the function of the comparison with a campaign '
                  'pamphlet?',
             opts=['It concedes that the essays are unreliable on every point',
                   'It states what kind of evidence The Federalist actually is',
                   'It explains why the essays were published under a pen name',
                   'It introduces the shorthand writers of the state conventions'],
             key='B', moves={'A': 'overreach', 'C': 'imported', 'D': 'detail_swap'},
             why='The comparison is followed at once by the sentence calling the essays '
                 'first-class evidence of what their authors wanted understood.',
             trap='A reads a statement about the kind of source as a verdict on its truth.'),
        dict(sibling='HIS-S02-L2',
             sibling_gloss='Text 2 is passage 52 of this book. It presents Federalist 10, in which '
                           'Madison treats faction as impossible to prevent and offers the size of '
                           'the republic and representation as the two mechanisms for controlling '
                           'its effects.',
             stem='Text 1 warns against reading The Federalist as neutral. Based on that warning, '
                  'how should the argument in Text 2 be used?',
             opts=['As evidence of what one advocate wanted the design understood to do',
                   'As the only surviving account of the Philadelphia convention',
                   'As a neutral summary of what the Constitution requires',
                   'As a record of the Pennsylvania minority dissent'],
             key='A', moves={'B': 'detail_swap', 'C': 'wrong_direction', 'D': 'imported'},
             why='Text 1 calls the essays first-class evidence of their authors intentions rather '
                 'than a neutral description, which is how Federalist 10 should be read.',
             trap='C is precisely the use Text 1 compares to reading a campaign pamphlet as '
                  'policy.'),
        dict(carrier='The Federalist is the most quoted source on the Constitution and the least '
                     'representative. ___ it is first-class evidence of what its authors wanted '
                     'understood.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['For example,', 'In short,', 'Therefore,', 'Even so,'],
             key='D', moves={'A': 'near_miss', 'B': 'restatement', 'C': 'wrong_direction'},
             why='The second sentence grants the source a real value in spite of the limitation '
                 'just stated, so the two stand in contrast.',
             trap='C makes the value of the source follow from its unrepresentativeness.'),
        dict(carrier="Madison's notes were revised by him over forty years ___ the revisions can "
                     'be dated by the ink and the paper.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['years the', 'years, and', 'years; and', 'years, the'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'comma_splice'},
             why='The revising and the dating of the revisions are each a complete clause, so the '
                 'conjunction standing between them takes a comma.',
             trap='D drops the conjunction and leaves a comma between two full clauses.'),
        dict(goal='advise a reader how to weigh the sources on the Constitution',
             notes=['The Federalist was written by three men with an interest in the outcome.',
                    'Published state debates were edited before printing.',
                    "Madison's notes were revised over forty years and not published until 1840.",
                    'Modern editions print the sources side by side with notes on their '
                    'reliability.'],
             stem='The student wants to advise a reader how to weigh the sources on the '
                  'Constitution. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['The Federalist was written by three men who had an interest in the outcome',
                   "Madison's notes were revised over forty years and published only in 1840",
                   'Published state debates were edited by their reporters before they were '
                   'printed',
                   'Each source carries a defect that can be named, so they should be read '
                   'against one another with their reliability noted'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'restatement'},
             why='Only this choice gives the method rather than one instance, which is what advice '
                 'to a reader requires.',
             trap='A names one defective source and so offers no way of handling the rest.'),
    ]))

# --- 3 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='HIS-S03-L3',
    ar=dict(
        khulasa='أربعة أنواع من السجلّات تحمل تاريخ حملة حقّ الانتخاب، وكلّ نوع يقيس شيئًا '
                'مختلفًا. العرائض باقية بكثافة بأسماء وعناوين ومهن، وعدد التوقيعات يقيس '
                'القدرة على التنظيم لا الرأي. وسجلّات العضوية تقيس القدرة نفسها بصورة '
                'أوضح. والثالث سجلّ الاقتراع، أي قائمة من صوّت فعلًا، وهو أمتن دليل في '
                'الموضوع كلّه.',
        maana='المعنى أنّ لكلّ سجلّ حدًّا. فالعرائض لا تقول شيئًا عن من رفض التوقيع، '
              'وسجلّات الاقتراع تسجّل من صوّت لا ما كان يفكّر فيه، ومحاضر المحاكم تسجّل ما '
              'قيل في غرفة يؤدّي فيها الجميع أدوارًا من أجل نتيجة. وتغطية الصحف، وهي '
              'الأوفر كمًّا، تقيس ما ظنّ المحرّرون أنّ قرّاءهم سيستمتعون به.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الدليل: ما يقيسه كلّ '
                  'سجلّ وما لا يقيسه. والتركيبة تكفي مع ذلك للإجابة عن أسئلة محدّدة، '
                  'ومنها أنّ الحملة نُظّمت ولايةً ولاية لا من مركز واحد.',
        sila='في اختبار سات يُسأل عن حدود الدليل وعن استنتاج يكمل النصّ. والفخّ الشائع أن '
             'يُقرأ عدد التوقيعات قياسًا للرأي العام، مع أنّ النصّ يسمّيه قياسًا لقدرة '
             'التنظيم. ويقترن المقطع بالمقطع الثالث والخمسين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Digitization has changed the field in twenty years',
                   'Susan Anthony was fined a hundred dollars and never paid it',
                   'Newspaper coverage survives in the greatest quantity of all four records',
                   'Four kinds of record measure different things, and each has a boundary that '
                   'can be stated'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'detail_swap'},
             why='The text takes the four records in turn, says what each measures, and then gives '
                 'the boundary of each.',
             trap='B reports a vivid particular rather than the argument the text is making.'),
        dict(stem='According to the text, what does a signature count measure?',
             opts=['The opinion of those who signed the petition',
                   'The capacity of a campaign to organize',
                   'The number of women who voted in 1872',
                   'The reliability of a published court transcript'],
             key='B', moves={'A': 'wrong_direction', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says a signature count measures organizing capacity rather than '
                 'opinion, because gathering names shows that somebody could pay for canvassers.',
             trap='A gives the reading the sentence explicitly sets aside.'),
        dict(claim='the prosecution of 1873 was arranged rather than stumbled into',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'prosecution was arranged rather than stumbled into?',
             opts=[Q('Petitions survive in bulk, with names, addresses and sometimes occupations'),
                   Q('the judge directed the jury to find her guilty and fined her a hundred '
                     'dollars, which she never paid'),
                   Q('The case had been invited on purpose, and the judge refused to let it go '
                     'further'),
                   Q('Membership rolls of the suffrage associations measure that same capacity '
                     'rather more directly')],
             key='C', moves={'A': 'true_not_asked', 'B': 'near_miss', 'D': 'underreach'},
             why='The sentence says the case had been invited on purpose, which is exactly what '
                 'being arranged means.',
             trap='B reports how the trial was conducted rather than that it was sought.'),
        dict(carrier='Petitions say nothing about those who declined to sign, and poll books '
                     'record who voted rather than what any of them thought. A historian wanting '
                     'to know what people believed therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['must reason from records that measure something else',
                   'can rely on the newspaper coverage of the period',
                   'should prefer membership rolls to all other sources',
                   'has no evidence of any kind to work from'],
             key='A', moves={'B': 'near_miss', 'C': 'wrong_direction', 'D': 'overreach'},
             why='Every one of the four records measures something other than belief, so an '
                 'inference about belief has to be built from proxies.',
             trap='D turns a limitation on the records into the absence of evidence altogether.'),
        dict(target='mandate',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('mandate'),
             opts=['an order from a court', 'a term of elected office',
                   'a duty laid on a citizen', 'an authorization to act'],
             key='D', moves={'A': 'near_miss', 'B': 'imported', 'C': 'wrong_direction'},
             why='The women argued that the Fourteenth Amendment already authorized them to '
                 'register and vote, so the word names a warrant for acting.',
             trap='C turns a permission into an obligation, which reverses the sense.'),
        dict(stem='Which choice best describes the function of the sentence about newspaper '
                  'coverage?',
             opts=['It names the record that survives in the smallest quantity',
                   'It explains why petition signatures can now be matched to censuses',
                   'It identifies what the most plentiful record actually measures',
                   'It adds a fifth record whose boundary is the sharpest of all'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'near_miss'},
             why='The sentence says the coverage survives in the greatest quantity and measures '
                 'mainly what editors thought readers would enjoy.',
             trap='D treats an aside about a further record as the introduction of a fifth '
                  'category.'),
        dict(sibling='HIS-S03-L2',
             sibling_gloss='Text 2 is passage 53 of this book. It argues that voting was '
                           'restricted by four separate barriers coming down at different times, '
                           'and that a constitutional amendment settles the rule and settles '
                           'nothing else.',
             stem='Text 1 reports an attempt to vote in 1872 under the Fourteenth Amendment. Based '
                  'on Text 2, why would that attempt fail?',
             opts=['Because the amendment had not yet been ratified by the states',
                   'Because the rule was settled while the machinery was not',
                   'Because property requirements still stood in New York',
                   'Because poll books were not kept in Rochester that year'],
             key='B', moves={'A': 'imported', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='Text 2 holds that an amendment settles the rule and nothing else, and that each '
                 'change needed enforcement machinery it did not yet have.',
             trap='C borrows a barrier Text 2 says had already fallen by the Civil War.'),
        dict(carrier='In 1872 Susan Anthony and fourteen other women registered and voted in '
                     'Rochester. ___ the poll book records the votes.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Accordingly,', 'Nevertheless,', 'In other words,', 'For instance,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The entry in the poll book is the consequence of the act of voting, so the '
                 'second sentence follows from the first.',
             trap='B sets the record against the voting when the record exists because of it.'),
        dict(carrier='The third record is the poll book ___ the register of who actually voted in '
                     'a given election.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['book the', 'book; the', 'book, the', 'book: the,'],
             key='C', moves={'A': 'run_on', 'B': 'wrong_mark', 'D': 'unpaired'},
             why='The phrase defining the poll book is a supplement to the noun before it, so it '
                 'attaches with a comma rather than a semicolon.',
             trap='B uses a semicolon, which would need a full clause on each side of it.'),
        dict(goal='explain why the campaign is known to have been organized state by state',
             notes=['Petitions survive with names, addresses and sometimes occupations.',
                    'Membership rolls were kept with varying care from one state association to '
                    'the next.',
                    'The combination of records answers specific questions.',
                    'Historians state with confidence that the campaign was organized state by '
                    'state.'],
             stem='The student wants to explain why the campaign is known to have been organized '
                  'state by state. Which choice most effectively uses relevant information from '
                  'the notes to accomplish that goal?',
             opts=['Petitions and state membership rolls, kept with differing care in each state, '
                   'together show organization built locally rather than directed centrally',
                   'Petitions survive with names, addresses and sometimes the occupations of '
                   'signers',
                   'Membership rolls were kept with varying care from one state association to the '
                   'next',
                   'The combination of the four records answers a number of specific questions'],
             key='A', moves={'B': 'underreach', 'C': 'restatement', 'D': 'true_not_asked'},
             why='Only this choice draws the conclusion from the records, which is what explaining '
                 'how the fact is known requires.',
             trap='C gives the record without the inference the goal asks for.'),
    ]))

# --- 4 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='HIS-S04-L3',
    ar=dict(
        khulasa='يُكتب تاريخ العبودية من أربعة أنواع من المصادر، لكلّ منها تشويه يمكن '
                'تحديده بدقّة. فقوائم السفن باقية بأعداد كبيرة لأنّها كانت وثائق تجارية '
                'وقانونية، وقاعدة بيانات بُنيت منها تغطّي أكثر من ستّة وثلاثين ألف رحلة '
                'أطلسية. وما لا تحتويه هو اسم أي إنسان، لأنّ المدرَجين سُجّلوا بضاعةً '
                'بالعمر والجنس.',
        maana='المعنى أنّ سجلّات المزارع تقدّم النوع المقابل من التفصيل: أفرادًا بأسماء '
              'وأسعار ومهامّ وعقوبات، سجّلها من كان يمارس القهر. فهي دقيقة وهي شهادة طرف '
              'ذي مصلحة. أمّا الروايات المنشورة لمن كانوا مستعبدين فتقدّم النظرة من '
              'الداخل، وقد كُتبت للإقناع.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الدليل: كلّ مصدر '
                  'وتشويهه. وأصعب المصادر مقابلات ثلاثينيات القرن العشرين مع من كانوا '
                  'أطفالًا في العبودية: متحدّثون في الثمانينات، ومحاورون بيض في الغالب، '
                  'ومقابلات في ولايات يعتمد فيها المتحدّث على رضى محلّي.',
        sila='في اختبار سات يُسأل عن موثوقية المصدر وعن الاستنتاج. والفخّ الشائع أن تُعامل '
             'الدقّة كأنّها حياد، مع أنّ سجلّ المزرعة دقيق وشهادة متحيّزة في الوقت نفسه. '
             'ويقترن المقطع بالمقطع الرابع والخمسين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Four kinds of source carry the subject, each with a distortion that can be '
                   'stated',
                   'The slave trade database covers more than thirty-six thousand voyages',
                   'The interviews of the 1930s are the most reliable source of the four',
                   'Published narratives were disputed by contemporaries at the time'],
             key='A', moves={'B': 'underreach', 'C': 'wrong_direction', 'D': 'true_not_asked'},
             why='The opening sentence states the plan and the rest carries it out, naming a '
                 'precise distortion for each of the four kinds of source.',
             trap='C reverses the text, which calls the interviews the most difficult of all.'),
        dict(stem='According to the text, what do ships manifests fail to record?',
             opts=['The routes taken by particular voyages',
                   'The mortality suffered on the crossing',
                   'The name of any person carried',
                   'The age and sex of those listed'],
             key='C', moves={'A': 'wrong_direction', 'B': 'underreach', 'D': 'near_miss'},
             why='The text says the database permits estimates of numbers, routes and mortality, '
                 'but cannot contain anyone name because people were entered as cargo.',
             trap='D names what the manifests do record rather than what they omit.'),
        dict(claim='precision in a source is not the same as impartiality',
             stem='Which quotation from the text most strongly supports the claim that precision '
                  'in a source is not the same as impartiality?',
             opts=[Q('There are more than two thousand of them, and they are the most difficult '
                     'of all'),
                   Q('The slave trade database is now public and can be queried by anyone with a '
                     'browser'),
                   Q('Contemporaries disputed their accuracy, and modern historians have since '
                     'verified much of the detail'),
                   Q('They are precise and they are testimony by an interested party')],
             key='D', moves={'A': 'near_miss', 'B': 'true_not_asked', 'C': 'underreach'},
             why='The sentence sets precision and interest side by side in one line, which is the '
                 'distinction the claim draws.',
             trap='A names a different difficulty, which is the age and position of the speakers.'),
        dict(carrier='The speakers were in their eighties and nineties, most interviewers were '
                     'white, and many interviews took place in states where the speaker still '
                     'depended on local goodwill. Reading one such interview alone therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['supplies the inside view that the narratives lack',
                   'risks mistaking a constrained answer for a candid one',
                   'is the method historians have settled on',
                   'removes the dialect spelling imposed by the interviewer'],
             key='B', moves={'A': 'detail_swap', 'C': 'wrong_direction', 'D': 'imported'},
             why='The text says the care consists in reading across many interviews rather than '
                 'quoting one, because of the pressure on each speaker.',
             trap='C states the opposite of the practice the text recommends.'),
        dict(target='coercion',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('coercion'),
             opts=['compulsion by force', 'persuasion by argument',
                   'agreement under contract', 'instruction in a skill'],
             key='A', moves={'B': 'wrong_direction', 'C': 'near_miss', 'D': 'imported'},
             why='The ledgers were kept by the person applying it, and they record tasks and '
                 'punishments, so the word names compulsion by force.',
             trap='B names the opposite of force, which is what the ledgers do not record.'),
        dict(stem='Which choice best describes the function of the sentence about dialect '
                  'spelling?',
             opts=['It explains why the interviews number more than two thousand',
                   'It reports that the interviewers were mostly white',
                   'It shows that the speakers were unwilling to be recorded',
                   'It adds a further distortion introduced after the speaking'],
             key='D', moves={'A': 'imported', 'B': 'restatement', 'C': 'overreach'},
             why='The sentence comes after the difficulties of age and dependence and names one '
                 'more, introduced by the transcriber rather than by the speaker.',
             trap='C turns a problem of transcription into a claim about the willingness of the '
                  'speakers.'),
        dict(sibling='HIS-S04-L2',
             sibling_gloss='Text 2 is passage 54 of this book. It sets out the antislavery case '
                           'from unalienable rights against a defense arguing from social order '
                           'and from constitutional recognition, and says the two sides disagreed '
                           'about what counts as evidence.',
             stem='Text 1 describes four kinds of source. Based on Text 2, which of them would '
                  'each side of that argument have reached for?',
             opts=['Both sides would have used the ships manifests in the same way',
                   'Neither side would have found the ledgers of any use at all',
                   'One side the narratives of the enslaved, the other the ledgers of the owners',
                   'Both sides would have relied on the interviews recorded in the 1930s'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='Text 2 says the parties disagreed about what counts as evidence, and Text 1 '
                 'supplies one source written by the enslaved and one by the owner.',
             trap='D reaches for a source recorded sixty years after the argument ended.'),
        dict(carrier='Published narratives supply the inside view, and they were written to '
                     'persuade. ___ contemporaries disputed their accuracy.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['In other words,', 'Unsurprisingly,', 'By contrast,', 'For instance,'],
             key='B', moves={'A': 'restatement', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='A work written to persuade invites a challenge to its accuracy, so the dispute '
                 'follows naturally from the aim just named.',
             trap='C sets the dispute against the purpose, when the one follows from the other.'),
        dict(carrier='Plantation ledgers supply the opposite kind of detail ___ individuals, with '
                     'names, prices, tasks and punishments.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['detail individuals', 'detail, individuals', 'detail; individuals',
                   'detail: individuals'],
             key='D', moves={'A': 'run_on', 'B': 'comma_splice', 'C': 'wrong_mark'},
             why='A colon introduces the list that specifies the kind of detail the clause before '
                 'has announced.',
             trap='B uses a comma where a colon is needed to present the specification.'),
        dict(goal='explain to a reader why historians read many interviews rather than one',
             notes=['The speakers were in their eighties and nineties.',
                    'Most interviewers were white.',
                    'Many interviews took place where the speaker still depended on local '
                    'goodwill.',
                    'The care consists in reading across many interviews rather than quoting '
                    'one.'],
             stem='The student wants to explain to a reader why historians read many interviews '
                  'rather than one. Which choice most effectively uses relevant information from '
                  'the notes to accomplish that goal?',
             opts=['The speakers in the interviews were in their eighties and nineties by then',
                   'Because each speaker answered under pressures of age and local dependence, '
                   'only the pattern across many interviews can be trusted',
                   'The care consists in reading across many interviews rather than quoting one',
                   'Most of the interviewers who recorded the speakers were white'],
             key='B', moves={'A': 'underreach', 'C': 'restatement', 'D': 'true_not_asked'},
             why='Only this choice gives the reason for the practice rather than naming the '
                 'practice or one of its causes alone.',
             trap='C states the rule without the reason the goal asks for.'),
    ]))

# --- 5 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HIS-S05-L3',
    ar=dict(
        khulasa='في عام ألف وثمانمئة وواحد وسبعين أخذت لجنة مشتركة في الكونغرس شهادات '
                'بالقسم عن العنف في الولايات الجنوبية، وبلغت النتيجة المنشورة ثلاثة عشر '
                'مجلّدًا. ويظهر فيها مئات الشهود: من هُجموا، ومن اتُّهموا بالهجوم، '
                'ومأمورون ومعلّمون ومزارعون وضبّاط سابقون. وهي من أوفى سجلّات العنف '
                'السياسي في القرن التاسع عشر.',
        maana='المعنى أنّ للشهادة استخدامين ومشكلتين. فهي تثبّت وقائع بعينها بأسماء وتواريخ '
              'يمكن مراجعتها، وتحفظ أصوات من لم يتركوا أثرًا مكتوبًا غيرها. والمشكلتان أنّ '
              'الشهود اختارهم أعضاء لجنة لهم أغراض، وأنّ الطرفين عرفا الغرض من الجلسات، '
              'فأنكر المتّهمون وضغطت اللجنة نحو أسوأ الحالات.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الدليل: ما يثبته نوع '
                  'من السجلّات وما يصمت عنه. فسجلّات التسجيل الانتخابي تجيب عن سؤال آخر '
                  'ببرود: كم رجلًا أسود كان مسجّلًا في مقاطعة عام ألف وثمانمئة وسبعة '
                  'وستين وعام ألف وتسعمئة وأربعة.',
        sila='في اختبار سات يُسأل عن حدود الدليل وعن الجمع بين مصدرين. والفخّ الشائع أن '
             'يُطلب من سجلّ غياب أن يفسّر سببه، مع أنّ السجلّ يسجّل الغياب بلا سبب. '
             'ويقترن المقطع بالمقطع الخامس والخمسين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The hearings are now searchable online, which has produced local studies',
                   'Testimony and registration rolls answer different questions, and together '
                   'they make the picture firm',
                   'The thirteen volumes prove that the committee was impartial',
                   'Several local studies have matched named witnesses to census entries'],
             key='B', moves={'A': 'underreach', 'C': 'overreach', 'D': 'true_not_asked'},
             why='The text takes testimony and rolls in turn, names the use and the limit of each, '
                 'and then puts the two together.',
             trap='C claims an impartiality the text denies, since witnesses were selected by '
                  'members with purposes.'),
        dict(stem='According to the text, what can a registration roll not show?',
             opts=['How many Black men were registered in a county',
                   'The change in registration between 1867 and 1904',
                   'The official list of those entitled to vote',
                   'Why any individual stopped registering'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'restatement'},
             why='The text says a roll records an absence without a reason, so it cannot show why '
                 'any particular person stopped registering.',
             trap='B names something the rolls show plainly rather than something they cannot.'),
        dict(claim='both sides of the hearings understood what the record was for',
             stem='Which quotation from the text most strongly supports the claim that both sides '
                  'of the hearings understood what the record was for?',
             opts=[Q('the accused denied and minimized while the committee pressed for the worst '
                     'cases'),
                   Q('It also preserves the voices of people who left no other written trace, '
                     'which is rare'),
                   Q('The hearings are now searchable online, which has produced a series of '
                     'local studies'),
                   Q('They show how many Black men were registered in a county in 1867 and in '
                     '1904')],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'underreach'},
             why='The sentence describes each side shaping its answers to the purpose of the '
                 'hearing, which is what understanding that purpose means.',
             trap='B names a virtue of the testimony rather than the awareness of its purpose.'),
        dict(carrier='A pattern of violence is established by testimony, and an entrenched legal '
                     'exclusion is established by the rolls, with a decade in between where the '
                     'evidence is thinner than historians would like. The combined account is '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['stronger than either source taken alone would be',
                   'no better than the weaker of its two sources',
                   'firm at both ends and weak in the middle',
                   'incapable of establishing any pattern at all'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'overreach'},
             why='The text places firm evidence at the beginning and the end of the period and '
                 'thin evidence in the decade between them.',
             trap='A is true of the account in general but does not describe the shape the '
                  'sentence has just set out.'),
        dict(target='entrenched',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('entrenched'),
             opts=['dug into the ground', 'firmly established',
                   'recently introduced', 'widely resented'],
             key='B', moves={'A': 'near_miss', 'C': 'wrong_direction', 'D': 'imported'},
             why='The exclusion had become settled in law by the time the later rolls were kept, '
                 'so the word names something firmly established.',
             trap='A gives the literal military sense from which the figure comes.'),
        dict(stem='Which choice best describes the function of the sentence saying that a roll '
                  'answers coldly?',
             opts=['It contrasts the reach of a count with the reach of a voice',
                   'It marks the registers as the less valuable of the two sources',
                   'It introduces the hearings described in the first paragraph',
                   'It explains why the rolls survive in such quantity'],
             key='A', moves={'B': 'wrong_direction', 'C': 'detail_swap', 'D': 'imported'},
             why='The sentence follows the account of testimony, which preserves voices, and '
                 'introduces a source that supplies numbers and no motive.',
             trap='B reads a statement about what a source measures as a ranking of its worth.'),
        dict(sibling='HIS-S05-L2',
             sibling_gloss='Text 2 is passage 55 of this book. It argues that Reconstruction was '
                           'reversed by four instruments working together: organized violence, '
                           'narrow court rulings, the national settlement of 1876, and new state '
                           'law.',
             stem='Text 1 describes two kinds of surviving record. Based on Text 2, which '
                  'instruments do those two records document?',
             opts=['The narrow court rulings and the settlement of 1876',
                   'The federal prosecutions and the enforcement acts',
                   'The national indifference and the printed convention debates',
                   'The organized violence and the new state law'],
             key='D', moves={'A': 'near_miss', 'B': 'detail_swap', 'C': 'imported'},
             why='Testimony documents the violence and registration rolls document the exclusion '
                 'written into state law, which are two of the four instruments.',
             trap='A names two instruments that neither testimony nor a roll would record.'),
        dict(carrier='It establishes particular events in detail, with names and dates that can be '
                     'checked against local papers and court files. ___ it preserves the voices of '
                     'people who left no other written trace.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Nevertheless,', 'For instance,', 'Beyond that,', 'In other words,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'restatement'},
             why='The sentence adds a second use of the testimony rather than qualifying or '
                 'restating the first.',
             trap='A sets the preservation of voices against the establishing of events.'),
        dict(carrier='Hundreds of witnesses appear ___ people who had been attacked, sheriffs, '
                     'teachers, planters and former officers.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['appear: people', 'appear, people', 'appear people', 'appear; people,'],
             key='A', moves={'B': 'comma_splice', 'C': 'run_on', 'D': 'unpaired'},
             why='A colon introduces the list that specifies who the hundreds of witnesses were.',
             trap='B leaves a comma to do the work of a colon before a specifying list.'),
        dict(goal='explain why the decade between the two records is the weakest part of the '
                  'account',
             notes=['The hearings took sworn testimony in 1871.',
                    'Registration rolls show the position in 1867 and in 1904.',
                    'A roll records an absence without a reason.',
                    'The evidence for the decade in between is thinner than historians would '
                    'like.'],
             stem='The student wants to explain why the decade between the two records is the '
                  'weakest part of the account. Which choice most effectively uses relevant '
                  'information from the notes to accomplish that goal?',
             opts=['The hearings of 1871 took sworn testimony on violence in the southern states',
                   'Registration rolls show the position in 1867 and again in 1904',
                   'The testimony stops in 1871 and the rolls resume in 1904, and a roll records '
                   'an absence without giving its reason',
                   'A registration roll records an absence without ever supplying a reason'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'restatement'},
             why='Only this choice names the gap between the two records and the reason the rolls '
                 'cannot fill it, which is what the goal requires.',
             trap='D gives the limitation of the rolls without placing the gap it leaves.'),
    ]))

# --- 6 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HIS-S06-L3',
    ar=dict(
        khulasa='نُوقشت تشريعات المصانع في بريطانيا ونيويورك بالأرقام، وجاءت تلك الأرقام من '
                'ثلاثة مصادر: تقارير اللجان وشهاداتها، والعائدات السنوية لمفتّشي المصانع، '
                'وسجلّات الوفيات لدى السلطات المدنية. وكلّها جُمعت لغرض غير البحث، وهذه '
                'هي الحالة المعتادة للإحصاءات التاريخية وأوّل ما ينبغي تذكّره.',
        maana='المعنى أنّ ثلاثة عيوب تتكرّر: المقام الغائب، أي الرقم الذي يجب أن يُقسم عليه '
              'العدد ليعني شيئًا؛ وترميز سبب الوفاة، فالنسّاج الذي مات بالسلّ بعد عشرين سنة '
              'في سقيفة رطبة سُجّل مريضًا بالسلّ ولا تظهر السقيفة في السجلّ؛ وحافز الإبلاغ، '
              'فالحوادث يبلّغ عنها أصحاب العمل لمفتّشين قادرين على مقاضاتهم.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الدليل: كيف تُقرأ سلسلة '
                  'إحصائية جُمعت لغرض آخر. والعلاج النظر إلى سلاسل جمعها من لا مصلحة له، '
                  'كسجلّات الدفن أو مدفوعات صناديق النقابات، ومقارنة مهن شملها القانون '
                  'بمهن لم يشملها.',
        sila='في اختبار سات تتكرّر أسئلة التعليق على بيانات وعلى حدودها. والفخّ الشائع أن '
             'يُقرأ انخفاض الحوادث المسجّلة انخفاضًا في الحوادث، مع أنّه قد يكون زيادة في '
             'الإخفاء. ويقترن المقطع بالمقطع السادس والخمسين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Union sick-pay records have turned out to be among the best series available',
                   'Industrial disease was systematically invisible while accident was not',
                   'Three recurring defects limit the statistics, and a second source can usually '
                   'settle the matter',
                   'Employment figures by trade were poor before the twentieth century'],
             key='C', moves={'A': 'underreach', 'B': 'near_miss', 'D': 'detail_swap'},
             why='The text names three defects in turn and then describes how historians handle '
                 'them, by finding a disinterested series and comparing covered trades with '
                 'uncovered ones.',
             trap='B names the second of the three defects rather than the argument as a whole.'),
        dict(stem='According to the text, who reported accidents to the inspectors?',
             opts=['Employers, who could be prosecuted by them',
                   'The civil authorities who kept the death registers',
                   'The trade unions that paid sick benefit',
                   'The commissions that collected testimony'],
             key='A', moves={'B': 'detail_swap', 'C': 'near_miss', 'D': 'imported'},
             why='The text says accidents were reported by employers to inspectors who could '
                 'prosecute them, which is the reporting incentive it describes.',
             trap='C names the body whose records the text calls disinterested, not the reporter '
                  'of accidents.'),
        dict(claim='a fall in the figures is not by itself a fall in the hazard',
             stem='Which quotation from the text most strongly supports the claim that a fall in '
                  'the figures is not by itself a fall in the hazard?',
             opts=[Q('Each was collected for a purpose other than research'),
                   Q('a fall in recorded accidents after a new law may mean fewer accidents or '
                     'more concealment'),
                   Q('Union sick-pay records have turned out to be among the best series '
                     'available'),
                   Q('employment figures by trade were poor before the twentieth century')],
             key='B', moves={'A': 'near_miss', 'C': 'true_not_asked', 'D': 'underreach'},
             why='The sentence sets out both readings of a fall in the figures and declines to '
                 'choose between them without further evidence.',
             trap='A states the general condition of the statistics rather than this particular '
                  'ambiguity.'),
        dict(carrier='A report that a trade killed four hundred men in a year is uninterpretable '
                     'without knowing how many men worked in it. A count without its denominator '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['understates the danger of the trade in question',
                   'can be compared across years but not across trades',
                   'is contaminated by the willingness of employers to report',
                   'supports no statement about how dangerous the work was'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'detail_swap'},
             why='The text calls such a report uninterpretable, so the count alone licenses no '
                 'claim about the level of risk.',
             trap='C names the third defect rather than the one this sentence concerns.'),
        dict(target='ameliorate',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('ameliorate'),
             opts=['measure accurately', 'conceal from view',
                   'make less bad', 'bring to an end'],
             key='C', moves={'A': 'imported', 'B': 'wrong_direction', 'D': 'overreach'},
             why='Measures that appeared to improve conditions sometimes only improved the '
                 'paperwork, so the word names a partial improvement.',
             trap='D turns an improvement into an abolition, which is stronger than the word '
                  'carries.'),
        dict(stem='Which choice best describes the function of the sentence about the weaver who '
                  'died of tuberculosis?',
             opts=['It explains why employment figures by trade were poor',
                   'It gives a case that shows how a coding rule hides a cause',
                   'It introduces the burial registers used as a check',
                   'It reports the number of deaths in a single trade'],
             key='B', moves={'A': 'imported', 'C': 'near_miss', 'D': 'detail_swap'},
             why='The weaver is an instance of the second defect: the damp shed appears nowhere in '
                 'a record that notes only the disease.',
             trap='C names the remedy described later rather than the defect this sentence '
                  'illustrates.'),
        dict(sibling='HIS-S06-L2',
             sibling_gloss='Text 2 is passage 56 of this book. It sets out four instruments for '
                           'making factories safer, a rule with an inspector behind it, liability, '
                           'insurance pricing and a limit on hours, and reports that no single '
                           'instrument did much alone.',
             stem='Text 1 warns that recorded accidents may fall through concealment. Based on '
                  'Text 2, which instrument produces figures most independent of that problem?',
             opts=['Insurance pricing, since insurers inspected and graded plants themselves',
                   'A rule enforced by inspectors who can prosecute employers',
                   'A commission report collecting testimony from employers',
                   'The hours law, since it depends on employer returns'],
             key='A', moves={'B': 'wrong_direction', 'C': 'imported', 'D': 'near_miss'},
             why='Text 2 says insurers inspected and graded plants for their own reasons, so their '
                 'figures do not depend on an employer choosing to report.',
             trap='B names exactly the relationship Text 1 identifies as the source of the '
                  'distortion.'),
        dict(carrier='Accidents were reported by employers to inspectors who could prosecute '
                     'them. ___ comparisons across years are contaminated by changes in how '
                     'willing employers were to report.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Even so,', 'In other words,', 'For instance,', 'Consequently,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'restatement', 'C': 'near_miss'},
             why='The contamination follows from the fact that the reporter was the party at risk '
                 'of prosecution.',
             trap='A sets the contamination against the reporting arrangement rather than deriving '
                  'it from it.'),
        dict(carrier='Historians handle this by looking for series collected by somebody with no '
                     'stake ___ such as burial registers or union benefit payments.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['stake; such', 'stake, such', 'stake such', 'stake: such,'],
             key='B', moves={'A': 'wrong_mark', 'C': 'run_on', 'D': 'unpaired'},
             why='The examples form a supplement to the noun phrase before them, so a comma '
                 'attaches them rather than a semicolon.',
             trap='A uses a semicolon, which would need an independent clause after it.'),
        dict(goal='advise a reader how to tell a real improvement from a paper one',
             notes=['Accidents were reported by employers to inspectors who could prosecute '
                    'them.',
                    'A fall in recorded accidents may mean fewer accidents or more concealment.',
                    'Burial registers and union benefit payments were collected by people with no '
                    'stake.',
                    'Trades covered by a law can be compared with trades that were not.'],
             stem='The student wants to advise a reader how to tell a real improvement from a '
                  'paper one. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['A fall in recorded accidents may mean fewer accidents or more concealment',
                   'Accidents were reported to inspectors by the employers they could prosecute',
                   'Trades covered by a law can be compared with trades that were not covered',
                   'Check the fall against a series kept by somebody with no stake, and against '
                   'trades the law did not cover'],
             key='D', moves={'A': 'restatement', 'B': 'underreach', 'C': 'true_not_asked'},
             why='Only this choice states the two tests the text recommends rather than the '
                 'problem or one half of the remedy.',
             trap='A names the ambiguity without supplying any way of resolving it.'),
    ]))

# --- 7 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='HIS-S07-L3',
    ar=dict(
        khulasa='فترة الحقوق المدنية موثّقة توثيقًا غير معتاد، وجزء كبير من التوثيق صنعه من '
                'كانوا يحاولون إيقافها. فمحاضر المحاكم ومرافعاتها باقية لآلاف القضايا، '
                'وأرقام التسجيل الانتخابي بحسب المقاطعات جمعتها الحكومة الفدرالية لتقرّر '
                'أي المناطق يشملها قانون عام ألف وتسعمئة وخمسة وستين، ولهذا هي دقيقة '
                'بدرجة غير معتادة.',
        maana='المعنى أنّ ملفّات المراقبة مصدر غريب: تسجّل الاجتماعات بتفصيل لأنّ عميلًا '
              'كان حاضرًا، وتسجّلها عبر عدسة تعامل الموضوع تهديدًا. فتقرير المخبر دليل على '
              'أنّ شيئًا قيل، ولا دليل إطلاقًا على أنّه صحيح، لأنّ المخبرين كانوا يُدفع '
              'لهم ولهم سبب لإنتاج مادّة.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الدليل: ما يسجّله مصدر '
                  'وما يسجّله عنه. ولذلك يعامل المؤرّخون الملفّات سجلًّا لما رُصد لا سجلًّا '
                  'لما كان يحدث، وحيث يمكن مطابقة ملفّ بمحضر أو صحيفة تقارب الوقائع '
                  'وتتباعد المعاني.',
        sila='في اختبار سات يُسأل عن حدود مصدر وعن استنتاج يكمل النصّ. والفخّ الشائع أن '
             'يُقرأ تقرير مخبر إثباتًا لمضمونه، مع أنّ النصّ يفصل بين أنّ شيئًا قيل وأنّه '
             'صحيح. ويقترن المقطع بالمقطع السابع والخمسين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Some files are still closed and several thousand pages remain redacted',
                   'The Bureau tapped telephones under warrants obtained by misrepresentation',
                   'Registration figures by county were collected unusually carefully',
                   'The period is richly documented, much of it by its opponents, and each source '
                   'needs its own discipline'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'near_miss'},
             why='The text opens on documentation created by opponents and closes on the '
                 'discipline that using it requires, taking each kind of source in turn.',
             trap='B reports one striking particular rather than the argument built around it.'),
        dict(stem='According to the text, why were registration figures unusually careful?',
             opts=['Because organizations kept minutes of their own meetings',
                   'Because they were used to decide which areas the 1965 Act would cover',
                   'Because the freedom of information statute required accuracy',
                   'Because an agent was present when they were compiled'],
             key='B', moves={'A': 'imported', 'C': 'detail_swap', 'D': 'near_miss'},
             why='The text says the figures were collected by the federal government in order to '
                 'decide which areas the Act would cover, which is why they are careful.',
             trap='C borrows a statute that gave researchers access rather than one that shaped '
                  'the figures.'),
        dict(claim='a surveillance file records observation rather than events',
             stem='Which quotation from the text most strongly supports the claim that a '
                  'surveillance file records observation rather than events?',
             opts=[Q('Much of this became available after 1974'),
                   Q('An agency summary is a partisan document whose purpose was to justify '
                     'continued attention'),
                   Q('they record them through a lens that treated the subject as a threat'),
                   Q('A standing committee reviews the releases, and material has continued to '
                     'appear')],
             key='C', moves={'A': 'underreach', 'B': 'near_miss', 'D': 'true_not_asked'},
             why='The lens is what makes the file a record of how a thing was seen rather than of '
                 'the thing itself.',
             trap='B describes the purpose of a summary rather than the character of the record.'),
        dict(carrier='An informer report is evidence that something was said and no evidence at '
                     'all that it was true, since informers were paid and had reason to produce '
                     'material. A historian quoting such a report therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['must say who was paid to produce it',
                   'may treat it as a verbatim transcript',
                   'should discard the file as worthless',
                   'has established what the meeting decided'],
             key='A', moves={'B': 'near_miss', 'C': 'overreach', 'D': 'wrong_direction'},
             why='The payment is what limits the report, so the limitation has to travel with the '
                 'quotation for the reader to weigh it.',
             trap='C throws out a source the text says is usable under discipline.'),
        dict(target='partisan',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('partisan'),
             opts=['written in secret', 'incomplete in places',
                   'belonging to a political party', 'serving one side of a dispute'],
             key='D', moves={'A': 'imported', 'B': 'near_miss', 'C': 'wrong_direction'},
             why='The summary existed to justify continued attention, so the word names a document '
                 'that serves one side rather than one that belongs to a party.',
             trap='C narrows the word to party membership, which the agency did not have.'),
        dict(stem='Which choice best describes the function of the sentence about matching a file '
                  'against a minute?',
             opts=['It explains why some files remain closed to readers',
                   'It introduces the amendments to the freedom of information statute',
                   'It states where the files agree with other records and where they do not',
                   'It reports how many pages the files eventually ran to'],
             key='C', moves={'A': 'imported', 'B': 'detail_swap', 'D': 'underreach'},
             why='The sentence says the match is often close on facts and wide apart on meaning, '
                 'which locates the reliability of the files precisely.',
             trap='B names material that comes earlier rather than the work this sentence does.'),
        dict(sibling='HIS-S07-L2',
             sibling_gloss='Text 2 is passage 57 of this book. It argues that Brown created no '
                           'enforcement machinery and so moved at the speed of litigation, while '
                           'the Voting Rights Act of 1965 created machinery that worked without a '
                           'plaintiff.',
             stem='Text 1 says the registration figures were collected to decide coverage. Based '
                  'on Text 2, what does that tell a reader about the 1965 Act?',
             opts=['It relied on the commerce power rather than on the Fourteenth Amendment',
                   'Its machinery needed a measurement before it could be pointed anywhere',
                   'It depended on lawsuits brought district by district',
                   'It was narrowed by the Supreme Court within a decade'],
             key='B', moves={'A': 'detail_swap', 'C': 'wrong_direction', 'D': 'imported'},
             why='Text 2 describes machinery that acts without a plaintiff, and Text 1 shows that '
                 'such machinery had first to be aimed by a count of registration.',
             trap='C assigns to the 1965 Act the property Text 2 gives to Brown.'),
        dict(carrier='The files record meetings in detail because an agent was present. ___ they '
                     'record them through a lens that treated the subject as a threat.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['At the same time,', 'Consequently,', 'In short,', 'For example,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The detail and the distortion are two features of the same record held together, '
                 'so the second sentence stands alongside the first.',
             trap='B makes the distortion a consequence of the detail rather than its companion.'),
        dict(carrier='Much of this became available after 1974 ___ when amendments to the freedom '
                     'of information statute gave researchers a usable instrument.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['1974; when', '1974 when', '1974, when', '1974: when,'],
             key='C', moves={'A': 'wrong_mark', 'B': 'run_on', 'D': 'unpaired'},
             why='The clause adds information about the year rather than restricting it, so it '
                 'attaches with a comma.',
             trap='A uses a semicolon before a subordinate clause, which cannot stand alone.'),
        dict(goal='explain how a hostile record can still be useful to a historian',
             notes=['The files record meetings in detail because an agent was present.',
                    'An informer report is evidence that something was said and not that it was '
                    'true.',
                    'Where a file can be matched against a minute, the match is close on facts and '
                    'wide on meaning.',
                    'Historians treat the files as a record of what was observed.'],
             stem='The student wants to explain how a hostile record can still be useful to a '
                  'historian. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Read as a record of what was observed, the files agree closely with other '
                   'sources on facts even where they differ on meaning',
                   'The files record meetings in detail because an agent was present at them',
                   'An informer report is evidence that something was said and not that it was '
                   'true',
                   'Historians treat the files as a record of what was observed at the time'],
             key='A', moves={'B': 'underreach', 'C': 'true_not_asked', 'D': 'restatement'},
             why='Only this choice gives both the reading that makes the files usable and the '
                 'evidence that the reading works.',
             trap='D names the practice without the finding that justifies it.'),
    ]))

# --- 8 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='HIS-S08-L3',
    ar=dict(
        khulasa='أنتجت الهند البريطانية إحصاءات على نطاق هائل، وكلّها تقريبًا أنتجتها '
                'الإدارة لأغراض إدارية. فتسوية الإيراد، أي التقدير الدوري الذي يحدّد ما '
                'تدفعه كلّ منطقة، اقتضت قياس الأرض والمحاصيل والسكّان، وسلاسلها تمتدّ قرنًا. '
                'فللمؤرّخ بيانات كثيرة ولا تحقّق مستقلّ فيها، وهو موقف محدّد ومحرج.',
        maana='المعنى أنّ المجاعات تجسّد المشكلة: أرقام الوفيات جمعها ضبّاط المناطق أنفسهم '
              'الذين كانت إدارتهم محلّ السؤال، والمقياس المعتاد هو الوفيات الزائدة، أي '
              'الوفيات فوق ما كان متوقّعًا بلا الحادث، وهذا يحتاج خطّ أساس هو نفسه تقدير. '
              'ولذلك تتراوح أرقام مجاعة ستّة وسبعين بين خمسة ملايين وأكثر من ثمانية.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الدليل: مصدر باتّجاه '
                  'خطأ معروف. وثلاث ممارسات تساعد: مقارنة مناطق بأنظمة إيراد مختلفة، '
                  'وسجلّات خاصّة لتجّار ومبشّرين، وقراءة إحصاءات لاحقة إلى الوراء بحثًا عن '
                  'ثقوب في بنية الأعمار.',
        sila='في اختبار سات تتكرّر أسئلة التعليق على بيانات وعلى خطّ الأساس. والفخّ الشائع أن '
             'يُقرأ مدى الأرقام تناقضًا يُسقط المصدر، مع أنّ النصّ يسمّيه اتّجاه خطأ '
             'معروفًا. ويقترن المقطع بالمقطع الثامن والخمسين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The official series has a known direction of error, which is usually the most '
                   'that is available',
                   'The Famine Commission of 1880 collected evidence and made recommendations',
                   'Famine codes written after 1880 did change administrative behavior',
                   'Published figures for the famine of 1876 range widely'],
             key='A', moves={'B': 'true_not_asked', 'C': 'underreach', 'D': 'near_miss'},
             why='The text sets out the problem of a single interested producer of data and ends '
                 'by naming what the series is: neither reliable nor useless.',
             trap='D gives the symptom of the problem rather than the conclusion drawn from it.'),
        dict(stem='According to the text, what does a measure of excess mortality require?',
             opts=['A revenue settlement fixed for each district',
                   'The private records kept by merchants and missionaries',
                   'A baseline that is itself an estimate',
                   'A census taken twenty years after the event'],
             key='C', moves={'A': 'detail_swap', 'B': 'near_miss', 'D': 'imported'},
             why='The text defines excess mortality as deaths above the number expected without '
                 'the event, which requires a baseline that is itself estimated.',
             trap='B names one of the checks on the figures rather than what the measure needs.'),
        dict(claim='the body that investigated the famines had an interest in the answer',
             stem='Which quotation from the text most strongly supports the claim that the body '
                  'that investigated the famines had an interest in the answer?',
             opts=[Q('Comparisons between districts under different revenue systems'),
                   Q('Later census data can be read backward for the holes left in age '
                     'structure'),
                   Q('Private records kept by merchants and missionaries, who had their own '
                     'reasons for accuracy'),
                   Q('it had been appointed by the government whose policy was at issue')],
             key='D', moves={'A': 'underreach', 'B': 'imported', 'C': 'near_miss'},
             why='The clause states the conflict directly: the commission was appointed by the '
                 'government whose policy it was examining.',
             trap='C names a source the text calls disinterested rather than the interested body.'),
        dict(carrier='Published figures for the famine of 1876 to 1878 range from five million to '
                     'over eight million depending on the baseline chosen. The width of that range '
                     'therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['proves that the lower figure is the correct one',
                   'reflects an assumption rather than a disagreement about deaths',
                   'shows that no famine of that scale took place',
                   'was settled by the Famine Commission of 1880'],
             key='B', moves={'A': 'wrong_direction', 'C': 'overreach', 'D': 'detail_swap'},
             why='The text says the figures differ according to the baseline chosen, so the spread '
                 'comes from the assumption rather than from the counting.',
             trap='C treats uncertainty about magnitude as doubt about the event.'),
        dict(target='expedient',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('expedient'),
             opts=['convenient course of action', 'hasty and careless method',
                   'formal official inquiry', 'self-serving excuse'],
             key='A', moves={'B': 'near_miss', 'C': 'imported', 'D': 'wrong_direction'},
             why='The sentence concerns what is available when collecting new data is not open as '
                 'a course, so the word names a practical option.',
             trap='D gives the pejorative sense, which does not fit a sentence about what a '
                  'historian may do.'),
        dict(stem='Which choice best describes the function of the sentence about districts under '
                  'different revenue systems?',
             opts=['It explains why the revenue settlement required measurement',
                   'It reports the range of the published mortality figures',
                   'It concedes that no check on the official series exists',
                   'It gives the first of three practices that supply a check'],
             key='D', moves={'A': 'near_miss', 'B': 'detail_swap', 'C': 'wrong_direction'},
             why='The sentence follows the announcement that three practices help and supplies the '
                 'first of them, a comparison that works like a natural experiment.',
             trap='C states the opposite of what the sentence is doing, which is offering a '
                  'check.'),
        dict(sibling='HIS-S08-L2',
             sibling_gloss='Text 2 is passage 58 of this book. It argues that British India was '
                           'run by about a thousand British officials over three hundred million '
                           'people, that the arrangement required the colony to produce a surplus, '
                           'and that two wars broke the arithmetic.',
             stem='Text 1 says the data were produced for administrative purposes. Based on Text '
                  '2, which administrative purpose produced most of them?',
             opts=['The payment of the Indian officer corps',
                   'The recording of sterling balances held in London',
                   'The assessment of what each district owed in revenue',
                   'The granting of provincial governments in 1935'],
             key='C', moves={'A': 'near_miss', 'B': 'detail_swap', 'D': 'imported'},
             why='Text 2 makes land revenue the tax that funded most of the administration, and '
                 'Text 1 says the revenue settlement required measuring land, crops and people.',
             trap='B names a record from the end of the period rather than the purpose behind the '
                  'series.'),
        dict(carrier='Mortality figures were compiled by the same district officers whose '
                     'management was in question. ___ the usual measure is excess mortality, which '
                     'requires a baseline that is itself an estimate.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Instead,', 'On top of that,', 'In other words,', 'By contrast,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The second sentence adds a second difficulty to the first rather than replacing '
                 'or restating it.',
             trap='A presents the measurement problem as a substitute for the conflict of '
                  'interest.'),
        dict(carrier='None of this makes the official series reliable ___ none makes it useless.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['reliable and', 'reliable; and', 'reliable the', 'reliable, and'],
             key='D', moves={'A': 'run_on', 'B': 'wrong_mark', 'C': 'near_miss'},
             why='Reliable and useless are each asserted in a full clause, so the conjunction '
                 'that balances them needs a comma before it.',
             trap='A omits the comma that two full clauses require before the conjunction.'),
        dict(goal='explain to a reader what a source with a known direction of error is good for',
             notes=['Mortality figures were compiled by the officers whose management was in '
                    'question.',
                    'Comparisons between districts under different revenue systems allow a '
                    'natural experiment.',
                    'Private records kept by merchants and missionaries provide a partial check.',
                    'None of this makes the official series reliable, and none makes it useless.'],
             stem='The student wants to explain to a reader what a source with a known direction '
                  'of error is good for. Which choice most effectively uses relevant information '
                  'from the notes to accomplish that goal?',
             opts=['Mortality figures were compiled by the very officers whose management was in '
                   'question',
                   'A series whose bias runs one way can still be used, so long as it is read '
                   'against comparisons and records kept by outsiders',
                   'Private records kept by merchants and missionaries provide a partial check on '
                   'the series',
                   'Comparisons between districts under different revenue systems allow a natural '
                   'experiment'],
             key='B', moves={'A': 'underreach', 'C': 'restatement', 'D': 'true_not_asked'},
             why='Only this choice states both the limitation and the way of working with it, '
                 'which is what the goal asks for.',
             trap='C offers one of the checks without the principle that makes it necessary.'),
    ]))

# --- 9 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HIS-S09-L3',
    ar=dict(
        khulasa='كان تقييمان لولاء الأميركيين اليابانيين في يد الحكومة قبل أن يُؤمر '
                'بالترحيل. فقد أفاد كيرتس مَنسن، وهو رجل أعمال أرسلته وزارة الخارجية، في '
                'تشرين الثاني عام ألف وتسعمئة وواحد وأربعين بأنّ الجماعة لا تمثّل خطرًا '
                'كبيرًا وأنّ الأغلبية الهائلة موالية. وأفاد كينيث رِنغل، وهو ضابط '
                'استخبارات بحرية يتكلّم اليابانية، في كانون الثاني عام اثنين وأربعين بأنّ '
                'الترحيل الجماعي غير ضروري.',
        maana='المعنى أنّ أيًّا من التقريرين لم يُعرض على المحكمة العليا حين نظرت القضايا، '
              'فاحتجّت الحكومة بالضرورة العسكرية وقبلت المحكمة. والمخالفات تستحقّ القراءة '
              'لأنّها كُتبت بلا الوثائق: كتب القاضي مَرفي أنّ دعوى الضرورة تقوم على معلومات '
              'مغلوطة وأنصاف حقائق، وتبيّن أنّه كان محقًّا تمامًا، ولم يكن يملك دليلًا.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الدليل: ما يظهر بعد '
                  'عقود وما يفعله بالسابقة القضائية. فقد وجد المؤرّخ القانوني بيتر '
                  'أيرونز المادّة المحجوبة في الأرشيف عام ألف وتسعمئة وواحد وثمانين، '
                  'وأُبطلت الأحكام في منتصف الثمانينات.',
        sila='في اختبار سات يُسأل عن الاستنتاج وعن وظيفة جملة وعن الدليل. والفخّ الشائع أن '
             'يُفترض أنّ المخالفين رأوا الوثائق، مع أنّ النصّ يقول إنّهم استدلّوا من شكل '
             'الحجّة لا من شيء رأوه. ويقترن المقطع بالمقطع التاسع والخمسين في أسئلة '
             'النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The National Archives holds the files and they are open to any reader',
                   'Two assessments against removal were held and withheld, and the record was '
                   'corrected only decades later',
                   'The precedent of 1944 was formally overruled in 2018',
                   'A Justice Department lawyer warned that the brief contained false statements'],
             key='B', moves={'A': 'underreach', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The text sets the two reports against the argument made in court and then traces '
                 'the correction that followed in the 1980s.',
             trap='D gives one document from the sequence rather than the shape of the whole.'),
        dict(stem='According to the text, what did Kenneth Ringle report?',
             opts=['That an immense majority of the community were loyal',
                   'That the Court had been given misinformation and half-truths',
                   'That the brief contained statements believed to be false',
                   'That the dangerous individuals were few and already known'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'near_miss'},
             why='The text says Ringle reported in January 1942 that the number of genuinely '
                 'dangerous individuals was small and already known.',
             trap='A gives the finding of the Munson report rather than the Ringle report.'),
        dict(claim='the dissenting justices reasoned without the evidence that would have proved '
                   'them right',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'dissenting justices reasoned without the evidence that would have proved them '
                  'right?',
             opts=[Q('which turned out to be exactly right, and he had no proof'),
                   Q('the convictions of Fred Korematsu, Gordon Hirabayashi and Minoru Yasui were '
                     'vacated'),
                   Q('One memorandum from a Justice Department lawyer warned his superiors'),
                   Q('The National Archives holds the files and they are open to any reader')],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'underreach'},
             why='The clause says in one breath that the dissent was correct and that its author '
                 'had nothing to prove it with.',
             trap='C names a document that existed but was not before the dissenting justices.'),
        dict(carrier='Both were reasoning from the shape of the argument rather than from anything '
                     'they had seen. A dissent of that kind therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['could have been written only after 1981',
                   'rested on documents the majority had read',
                   'can be right about a case without being able to prove it',
                   'was formally overruled in a later decision'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'detail_swap'},
             why='The dissents were correct and unproved at once, which is the possibility the '
                 'sentence has just described.',
             trap='A reverses the point, since the dissents were written in the 1940s without the '
                  'files.'),
        dict(target='precedent',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('precedent'),
             opts=['an earlier example of misconduct', 'a ruling that binds later courts',
                   'a procedure for reopening a case', 'a statement made under oath'],
             key='B', moves={'A': 'near_miss', 'C': 'detail_swap', 'D': 'imported'},
             why='The sentence concerns something set in 1944 and not overruled until 2018, which '
                 'is a ruling that governs later decisions.',
             trap='C names the coram nobis procedure described in the sentence before.'),
        dict(stem='Which choice best describes the function of the final two sentences of the '
                  'text?',
             opts=['They account for a feature of the dissents that would otherwise puzzle a '
                   'reader',
                   'They report where the documents are now held and who may read them',
                   'They explain why the convictions were vacated in the mid-1980s',
                   'They introduce the two reports described in the first paragraph'],
             key='A', moves={'B': 'underreach', 'C': 'near_miss', 'D': 'detail_swap'},
             why='The closing sentences say the documents explain something otherwise puzzling, '
                 'which is how the dissents read as though their authors knew what was missing.',
             trap='C names an earlier consequence rather than the puzzle these sentences solve.'),
        dict(sibling='HIS-S09-L2',
             sibling_gloss='Text 2 is passage 59 of this book. It argues that emergency power '
                           'works through delegation, the suspension of ordinary procedure, and '
                           'the control of information through censorship and classification.',
             stem='Text 1 reports two withheld assessments. Based on Text 2, what makes that '
                  'withholding a predictable feature rather than an accident?',
             opts=['Delegation grants authority without specifying what will be done',
                   'Ordinary procedure is suspended to shorten the path to execution',
                   'Emergency powers are allowed to lapse rather than being repealed',
                   'Classification is one of the standard instruments of emergency power'],
             key='D', moves={'A': 'near_miss', 'B': 'near_miss', 'C': 'detail_swap'},
             why='Text 2 lists the withholding of the government own evidence as one of three '
                 'standard instruments, which makes the suppression a pattern rather than a '
                 'lapse.',
             trap='A names a different instrument of the three, which concerns the grant of '
                  'power.'),
        dict(carrier='Neither report was given to the Supreme Court when it heard the cases. ___ '
                     'the government argued military necessity, and the Court accepted it.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['For instance,', 'In other words,', 'Meanwhile,', 'Instead,'],
             key='C', moves={'A': 'near_miss', 'B': 'restatement', 'D': 'wrong_direction'},
             why='The argument in court and the withholding of the reports were going on together, '
                 'so the second sentence runs alongside the first.',
             trap='D presents the argument as a replacement for the reports rather than as what '
                  'happened while they were held back.'),
        dict(carrier='Lawyers then brought coram nobis petitions ___ a rare procedure for '
                     'reopening a conviction on the ground that the court was misled.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['petitions, a', 'petitions a', 'petitions; a', 'petitions: a,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'unpaired'},
             why='The phrase defining the petitions is a supplement to the noun before it, so a '
                 'comma attaches it.',
             trap='C uses a semicolon, which would need an independent clause after it.'),
        dict(goal='explain why the dissents in Korematsu are worth reading',
             notes=['Neither report was given to the Court when it heard the cases.',
                    'Justice Murphy wrote that the claim of necessity rested on misinformation '
                    'and half-truths.',
                    'He had no proof of it, and it turned out to be exactly right.',
                    'Both dissenters were reasoning from the shape of the argument.'],
             stem='The student wants to explain why the dissents in Korematsu are worth reading. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['Neither of the two reports was given to the Court when it heard the cases',
                   'Justice Murphy wrote that the claim of necessity rested on misinformation and '
                   'half-truths',
                   'They were right about the suppressed evidence while reasoning only from the '
                   'shape of the argument put to them',
                   'Both of the dissenting justices were reasoning from the shape of the '
                   'argument'],
             key='C', moves={'A': 'true_not_asked', 'B': 'underreach', 'D': 'restatement'},
             why='Only this choice joins the correctness of the dissents to the fact that they '
                 'were reached without the documents, which is why they repay reading.',
             trap='B quotes the dissent without saying what makes the quotation remarkable.'),
    ]))

# --- 10 ------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HIS-S10-L3',
    ar=dict(
        khulasa='في عام ألف وتسعمئة وستّة وثلاثين أجرت مجلّة ليتراري دايجست أكبر استطلاع '
                'غير ممثّل عُرف: أرسلت نحو عشرة ملايين بطاقة وتلقّت أكثر من مليونَي ردّ، '
                'أي عيّنة أكبر ألفي مرّة من أي عيّنة يستخدمها مستطلع حديث. وتوقّعت فوز ألف '
                'لاندون على فرانكلين روزفلت بسبعة وخمسين إلى ثلاثة وأربعين، ففاز روزفلت '
                'بواحد وستّين إلى سبعة وثلاثين.',
        maana='المعنى أنّ للفشل سببين وليس الحجم أحدهما. فالعناوين جاءت من دفاتر الهاتف '
              'وتسجيلات السيّارات وقوائم المشتركين، وهي عام ستّة وثلاثين تصف سكّانًا أغنى '
              'من البلد، وهذا خطأ في الإطار. وفوق ذلك ردّ نحو خُمس من اتُّصل بهم فقط، وكان '
              'المعارضون أكثر استعدادًا لدفع ثمن طابع، وهذا تحيّز عدم الاستجابة.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الدليل: كيف تفشل عيّنة '
                  'ضخمة وتنجح عيّنة صغيرة. فقد توقّع جورج غالوب النتيجة صحيحةً من نحو '
                  'خمسين ألف مقابلة، وتوقّع سلفًا ومطبوعًا ما ستقوله المجلّة ولماذا.',
        sila='في اختبار سات تتكرّر أسئلة التعليق على بيانات وعلى أسباب الخطأ. والفخّ الشائع '
             'أن يُنسب الفشل إلى صغر العيّنة، مع أنّ النصّ ينفي ذلك ويسمّي الإطار وعدم '
             'الاستجابة. ويقترن المقطع بالمقطع الستّين في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The magazine was out of business within two years of the election',
                   "Gallup's method failed in its turn in 1948, for a different reason",
                   'An enormous sample failed for two reasons, and neither of them was size',
                   'Gallup predicted the outcome correctly from about fifty thousand interviews'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'near_miss'},
             why='The text gives the failure, states that size was not the cause, and then names '
                 'the frame error and the nonresponse bias that were.',
             trap='D reports the contrast case rather than the lesson the text draws from it.'),
        dict(stem='According to the text, where did the addresses come from?',
             opts=['Telephone directories, automobile registrations and subscription lists',
                   'Interviews filled to match known proportions in the population',
                   'A probability sample drawn from the electoral register',
                   'About fifty thousand interviews conducted in person'],
             key='A', moves={'B': 'detail_swap', 'C': 'imported', 'D': 'detail_swap'},
             why='The text names telephone directories, automobile registrations and the magazine '
                 'own subscription lists as the three sources of the addresses.',
             trap='B describes the quota sampling used by Gallup rather than the Digest frame.'),
        dict(claim='the two errors reinforced rather than offset each other',
             stem='Which quotation from the text most strongly supports the claim that the two '
                  'errors reinforced rather than offset each other?',
             opts=[Q('It mailed about ten million ballots and received more than two million '
                     'replies'),
                   Q('The two pushed in the same direction and the result was wrong by eighteen '
                     'points'),
                   Q('His method was quota sampling, meaning that interviewers were instructed to '
                     'fill a set number'),
                   Q('Each generation of the technique has been broken by a change in how people '
                     'can be reached')],
             key='B', moves={'A': 'underreach', 'C': 'imported', 'D': 'near_miss'},
             why='The sentence says the two errors pushed the same way and gives the size of the '
                 'resulting mistake.',
             trap='D states a general lesson rather than the behavior of these two errors.'),
        dict(carrier='Only about a fifth of those contacted replied, and people who felt strongly '
                     'against the administration were more willing to spend a stamp on saying so. '
                     'A larger mailing would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['have corrected the error in the sampling frame',
                   'have produced a representative set of replies',
                   'have reduced the margin of error proportionally',
                   'have reproduced the same bias on a larger scale'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'near_miss'},
             why='The bias lay in who chose to reply, so adding more of the same mailing multiplies '
                 'the distortion instead of diluting it.',
             trap='C treats a systematic bias as though it were random error, which averaging '
                  'would shrink.'),
        dict(target='factional',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('factional'),
             opts=['divided into equal parts', 'measured as a fraction',
                   'belonging to one partisan group', 'repeated at regular intervals'],
             key='C', moves={'A': 'near_miss', 'B': 'near_miss', 'D': 'imported'},
             why='The sentence describes a self-selected online sample whose enthusiasm belongs to '
                 'one side and is reported as though it spoke for everyone.',
             trap='B hears the arithmetical word inside it rather than the political sense the '
                  'sentence needs.'),
        dict(stem='Which choice best describes the function of the sentence about Gallup '
                  'predicting what the Digest poll would say?',
             opts=['It explains why the magazine went out of business within two years',
                   'It shows that the failure was foreseeable from the method alone',
                   'It introduces the quota sampling described in the next sentence',
                   'It reports the number of interviews on which his forecast rested'],
             key='B', moves={'A': 'near_miss', 'C': 'detail_swap', 'D': 'underreach'},
             why='Gallup predicted the wrong answer in advance and in print, which can only be '
                 'done from the design rather than from the result.',
             trap='C treats a point about foresight as an introduction to the next sentence.'),
        dict(sibling='HIS-S10-L2',
             sibling_gloss='Text 2 is passage 60 of this book. It argues that news is a selection '
                           'from whatever reached a newsroom in usable form before a deadline, and '
                           'that deadline, competition and narrative each favor a particular kind '
                           'of event.',
             stem='Text 1 describes a frame that was richer than the country. Based on Text 2, '
                  'what is the corresponding defect in news?',
             opts=['Events arrive late or never where no reporter is assigned',
                   'Coverage of crime rises and falls with police practice',
                   'Slow processes are underreported for want of an event structure',
                   'A story that takes six hours to confirm has been overtaken'],
             key='A', moves={'B': 'near_miss', 'C': 'near_miss', 'D': 'detail_swap'},
             why='A frame error is a defect in what the instrument can reach at all, and the beat '
                 'system is exactly that: places with no reporter never enter the sample.',
             trap='C names a defect of selection among events reached rather than of reach '
                  'itself.'),
        dict(carrier='The addresses came from telephone directories, automobile registrations and '
                     'subscription lists. ___ only about a fifth of those contacted replied.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['In other words,', 'For instance,', 'Therefore,', 'On top of that,'],
             key='D', moves={'A': 'restatement', 'B': 'near_miss', 'C': 'wrong_direction'},
             why='The nonresponse is a second and separate defect laid on the frame error, so the '
                 'sentence adds rather than follows.',
             trap='C makes the low response rate a consequence of the sources of the addresses.'),
        dict(carrier='Roosevelt won by sixty-one to thirty-seven ___ the largest margin in a '
                     'century.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['thirty-seven the', 'thirty-seven, the', 'thirty-seven; the',
                   'thirty-seven: the,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'unpaired'},
             why='The phrase describing the margin is a supplement to the clause before it, so it '
                 'attaches with a comma.',
             trap='C uses a semicolon, which would need a full clause on the far side of it.'),
        dict(goal='warn a reader that a very large sample can still be wrong',
             notes=['The Digest received more than two million replies.',
                    'The addresses described a population richer than the country.',
                    'Only about a fifth of those contacted replied.',
                    'Gallup predicted the outcome correctly from about fifty thousand '
                    'interviews.'],
             stem='The student wants to warn a reader that a very large sample can still be wrong. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['The Digest received more than two million replies to its mailing',
                   'Only about a fifth of those contacted by the magazine replied at all',
                   'Gallup predicted the outcome correctly from about fifty thousand interviews',
                   'Two million replies drawn from a richer population, with four fifths silent, '
                   'lost to fifty thousand properly chosen interviews'],
             key='D', moves={'A': 'underreach', 'B': 'restatement', 'C': 'true_not_asked'},
             why='Only this choice sets the two samples against each other and names both defects, '
                 'which is what the warning requires.',
             trap='C gives the successful poll without the comparison that carries the point.'),
    ]))
