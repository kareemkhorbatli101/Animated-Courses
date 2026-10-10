"""History and Civics, Level 4: ten question sets."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

Q = '«%s»'.__mod__
FIELD, LEVEL = 'HIS', 4
SETS = []

# --- 1 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HIS-S01-L4',
    ar=dict(
        khulasa='قُرئت جملة المساواة قراءتين متعارضتين من أناس اتّفقوا على الكلمات. على '
                'القراءة الأولى يقرّر الإعلان مبدأً كونيًّا تلتزم به الأمة أيًّا كانت '
                'ممارستها، والفجوة بين القول والفعل فشل وطني يُعالج لا دليل على معنى '
                'الكلمات، وهذا موقف دوغلاس عام ألف وثمانمئة واثنين وخمسين ولينكولن في '
                'بيوريا.',
        maana='المعنى أنّ القراءة الثانية ترى أنّ الجملة كتبها رجال يملكون عبيدًا، لجمهور '
              'يملك عبيدًا، في وثيقة غرضها الانفصال عن بريطانيا، فلا يمكن أن تكون قد عنت '
              'ما تقتضيه القراءة الأولى. وقد أدخل القاضي تاني هذه الحجّة في القانون عام '
              'ألف وثمانمئة وسبعة وخمسين، وهذا ما يُسمّى الأصلانية.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الخلاف: كلّ طرف عليه '
                  'أن يتحفّظ في شيء. فالأولى يلزمها تفسير أنّ أحدًا من الموقّعين لم يعمل '
                  'بالمبدأ وقتها، والثانية يلزمها تفسير حذف مقطع تجارة العبيد واستخدام '
                  'الجملة فورًا من المناهضين.',
        sila='في اختبار سات تتكرّر النصوص المتقابلة في مسألة واحدة، ويُسأل عن موقف الكاتب '
             'وعن الحجّة المضادة. والفخّ الشائع أن تُعامل الأصلانية قراءةً متهاونة، مع أنّ '
             'النصّ يقول صراحةً إنّها ليست قراءةً متهاونة. ويقترن المقطع بالمقطع الحادي '
             'بعد المئة في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=["Taney's reasoning has never been formally overruled by a court",
                   'Two readings of one sentence each carry a cost, and the text alone cannot '
                   'settle between them',
                   'The second reading is a careless misuse of the historical record',
                   'Several signers of the Declaration freed people in their wills'],
             key='B', moves={'A': 'true_not_asked', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text sets out both readings, says what each must concede, and ends by saying '
                 'the dispute could not be settled from the text and was settled by amendment.',
             trap='C states the opposite of the sentence calling the second reading not a careless '
                  'one.'),
        dict(stem='According to the text, what must the first reading explain?',
             opts=['Why the slave trade passage was struck from the draft',
                   'Why abolitionists used the sentence within a decade',
                   'Why Taney put his argument into law in 1857',
                   'Why no signer acted on the principle at the time'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'imported'},
             why='The text says the first reading must explain why no signer acted on the '
                 'principle, and that the honest version concedes the words outran their authors.',
             trap='A names one of the things the second reading has to account for.'),
        dict(claim='the author treats both readings as serious',
             stem='Which quotation from the text most strongly supports the claim that the author '
                  'treats both readings as serious?',
             opts=[Q('which is the view that a text means what its authors and first readers '
                     'understood it to mean, and it is not a careless reading'),
                   Q('That was Douglass\'s position in 1852 and Lincoln\'s position at Peoria two '
                     'years later'),
                   Q('the whole subsequent argument about American citizenship ran through it'),
                   Q('which is why it was settled by an amendment that made the first reading law '
                     'in 1868')],
             key='A', moves={'B': 'true_not_asked', 'C': 'underreach', 'D': 'near_miss'},
             why='The clause grants the second reading, the one the author does not adopt, the '
                 'standing of a careful argument.',
             trap='D reports how the matter ended rather than how the author regards the losing '
                  'side.'),
        dict(carrier='The dispute cannot be settled from the text alone, which is why it was '
                     'settled by an amendment that made the first reading law in 1868. A question '
                     'of that kind is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['decided by whichever party controls the courts',
                   'answered by reading the document more carefully',
                   'resolved politically rather than by interpretation',
                   'closed once a court has formally overruled the other side'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='The text says the text alone could not settle it and that an amendment did, '
                 'which is a political act rather than an interpretive one.',
             trap='D is contradicted by the last sentence, which says no court has overruled '
                  'Taney.'),
        dict(target='qualify',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('qualify'),
             opts=['earn a formal credential', 'limit a claim with a concession',
                   'describe in greater detail', 'dismiss as beside the point'],
             key='B', moves={'A': 'near_miss', 'C': 'imported', 'D': 'wrong_direction'},
             why='Each side has to concede something it would rather not, which is what qualifying '
                 'a claim means here.',
             trap='A gives the sense in which a person qualifies as a doctor.'),
        dict(stem='Which choice best describes the function of the sentence defining originalism?',
             opts=['It names the position the second reading rests on and declines to dismiss it',
                   'It explains why the Fourteenth Amendment was needed in 1868',
                   'It reports the holding Taney reached in the case of 1857',
                   'It introduces the concessions each side is obliged to make'],
             key='A', moves={'B': 'near_miss', 'C': 'restatement', 'D': 'detail_swap'},
             why='The sentence supplies the name for the second reading and ends by saying it is '
                 'not a careless reading, which is a refusal to dismiss it.',
             trap='C treats a definition of a general position as a report of the particular '
                  'holding.'),
        dict(sibling='HIS-S01-L3',
             sibling_gloss='Text 2 is passage 101 of this book. It examines the surviving versions '
                           'of the Declaration and argues that the deleted passage on the slave '
                           'trade establishes something narrow but firm, since a deletion shows '
                           'that a sentence was removed and not why.',
             stem='Text 1 says the second reading must explain the deletion. Based on Text 2, how '
                  'strong is that obligation?',
             opts=['Decisive, since the deletion proves the first reading correct',
                   'Nonexistent, since no such passage was ever drafted',
                   'Settled, since Jefferson recorded the reason at the time',
                   'Limited, since the deletion shows a removal without showing a motive'],
             key='D', moves={'A': 'overreach', 'B': 'imported', 'C': 'detail_swap'},
             why='Text 2 insists that a deletion establishes the removal and not the reason, so '
                 'the evidence constrains the second reading without defeating it.',
             trap='C treats a recollection written decades later as a contemporaneous record.'),
        dict(carrier='The first must explain why no signer acted on the principle at the time, and '
                     'the honest version concedes that the words outran their authors. ___ the '
                     'second must explain the deletion of the slave trade passage.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Accordingly,', 'In other words,', 'For its part,', 'For instance,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'restatement', 'D': 'near_miss'},
             why='The sentence turns from the first reading to the obligations of the second, so '
                 'it takes up the other side in its turn.',
             trap='A makes the second obligation follow from the first rather than balance it.'),
        dict(carrier='Taney put that argument into law in 1857 ___ holding that the framers had '
                     'not included Black people in the word men.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['1857, holding', '1857 holding', '1857; holding', '1857: holding,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'unpaired'},
             why='The participial phrase stating what the holding was attaches to the clause about '
                 '1857 with a comma.',
             trap='C puts a semicolon before a phrase that cannot stand as a sentence on its '
                  'own.'),
        dict(goal='explain why an amendment was needed to settle the question',
             notes=['The dispute cannot be settled from the text alone.',
                   'Each side has to qualify something.',
                   'The Fourteenth Amendment made the first reading law in 1868.',
                   "Taney's reasoning has never been formally overruled by a court."],
             stem='The student wants to explain why an amendment was needed to settle the '
                  'question. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Each side of the dispute has to qualify something it would rather not',
                   "Taney's reasoning has never been formally overruled by any court",
                   'Because neither reading could be defeated from the text, the question was '
                   'closed in 1868 by amendment rather than by argument',
                   'The Fourteenth Amendment made the first reading of the sentence law in 1868'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'restatement'},
             why='Only this choice joins the failure of interpretation to the political remedy, '
                 'which is what explaining the need for an amendment requires.',
             trap='D states the remedy without the deadlock that made it necessary.'),
    ]))

# --- 2 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HIS-S02-L4',
    ar=dict(
        khulasa='هل يحمي نظام السلطات المقسّمة الحرّية أم يعطّل الحكم؟ هذا أقدم جدل حيّ في '
                'العلوم السياسية الأميركية، والطرفان يحتجّان بالتصميم نفسه. فالدفاع هو دفاع '
                'ماديسون: سلطة مقسّمة على مؤسّسات بناخبين مختلفين ومدد مختلفة وحوافز مختلفة '
                'لا يمكن الاستيلاء عليها كلّها في وقت واحد.',
        maana='المعنى أنّ النقد يبدأ من نقاط النقض نفسها ويعدّها عدًّا مختلفًا. فنظام فيه '
              'مجلسان وحقّ نقض رئاسي ومراجعة قضائية ومجلس شيوخ يطلب ستّين صوتًا وخمسون حكومة '
              'ولاية فيه نقاط كثيرة جدًّا، والنتيجة عند النقّاد جمود، لا حكم متأنّ، '
              'والبديل حكم بالأزمة والأمر التنفيذي وحكم المحكمة.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الخلاف: الدليل ملتبس '
                  'فعلًا لأنّ الطرفين يعدّان أشياء مختلفة. فالمدافعون يشيرون إلى تدابير '
                  'أُوقفت، والنقّاد يشيرون إلى مشكلات لم تُعالَج، ولا تُجمع أي من '
                  'القائمتين بلا حكم مسبق على ما كان ينبغي أن يحدث.',
        sila='في اختبار سات يُسأل عن موقف الكاتب وعن حدود الدليل. والفخّ الشائع أن يُفترض أنّ '
             'المقارنة الدولية تحسم لأحد الطرفين، مع أنّ النصّ يقول إنّ نتيجتها محرجة '
             'للجميع. ويقترن المقطع بالمقطع الثاني بعد المئة في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Political scientists have counted veto points across democracies since the '
                   '1990s',
                   'The American system was designed to prevent government from acting at all',
                   'Two sides argue from one design and count different things, and the data reach '
                   'only so far',
                   'Gridlock is a condition in which the system cannot act although majorities '
                   'exist'],
             key='C', moves={'A': 'underreach', 'B': 'wrong_direction', 'D': 'near_miss'},
             why='The text presents both readings of the same design, says the evidence is '
                 'ambiguous because each side counts differently, and reports how far comparative '
                 'work goes.',
             trap='D defines a term the critics use rather than stating the argument of the text.'),
        dict(stem='According to the text, what does comparative work show?',
             opts=['Countries with fewer veto points legislate faster in both directions',
                   'Countries with more veto points produce better considered laws',
                   'The number of veto points has no measurable effect at all',
                   'Defenders and critics have each been counting correctly'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The text says the comparative finding is that fewer veto points mean faster '
                 'legislation in both directions, passing reforms both sides feared and wanted.',
             trap='B gives the conclusion a defender would like rather than the finding reported.'),
        dict(claim='the evidence cannot settle the dispute',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'evidence cannot settle the dispute?',
             opts=[Q('Power divided among institutions with different electorates, different '
                     'terms and different incentives'),
                   Q('neither list can be compiled without a judgment about what should have '
                     'happened'),
                   Q('A system with two chambers, a presidential veto, judicial review'),
                   Q('That finding is uncomfortable for everyone and is about as far as the data '
                     'reach')],
             key='B', moves={'A': 'underreach', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The clause says each side must bring a prior judgment to its own list, which is '
                 'why counting cannot decide between them.',
             trap='D reports a limit on the comparative data rather than the reason the two lists '
                  'cannot be compiled neutrally.'),
        dict(carrier='Defenders point to measures blocked; critics point to problems unaddressed, '
                     'and neither list can be compiled without a judgment about what should have '
                     'happened. The disagreement is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['a matter of arithmetic rather than of politics',
                   'certain to be settled by better measurement',
                   'confined to the field of American political science',
                   'about values as much as about the evidence'],
             key='D', moves={'A': 'wrong_direction', 'B': 'overreach', 'C': 'imported'},
             why='Each list requires a prior view of what government ought to have done, so the '
                 'quarrel carries a judgment inside it and not only a count.',
             trap='B promises a resolution the text says the data cannot deliver.'),
        dict(target='checked',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('checked'),
             opts=['verified against a record', 'marked with a symbol',
                   'stopped at several points', 'left in temporary storage'],
             key='C', moves={'A': 'near_miss', 'B': 'imported', 'D': 'imported'},
             why='A majority with a bad idea meets institutions that can block it, so the word '
                 'names being halted rather than being verified.',
             trap='A gives the sense in which a figure is checked against a record.'),
        dict(stem='Which choice best describes the function of the sentence calling the '
                  'comparative finding uncomfortable?',
             opts=['It concedes that the comparative measures disagree with one another',
                   'It marks the evidence as refusing to favor either side',
                   'It explains why political scientists began counting in the 1990s',
                   'It introduces the definition of a veto point'],
             key='B', moves={'A': 'wrong_direction', 'C': 'imported', 'D': 'detail_swap'},
             why='The finding gives each side something it did not want, which is why the text '
                 'calls it uncomfortable for everyone.',
             trap='A says the measures disagree, where the text says they broadly agree.'),
        dict(sibling='HIS-S02-L3',
             sibling_gloss='Text 2 is passage 102 of this book. It argues that The Federalist is '
                           'the most quoted and least representative source on the Constitution, '
                           'and that each kind of surviving source carries a defect that can be '
                           'named.',
             stem='Text 1 says the defense is the one Madison made. Based on Text 2, how should '
                  'that defense be weighed?',
             opts=['As evidence of what an advocate wanted the design understood to do',
                   'As the neutral account of the design that other sources confirm',
                   'As the only surviving record of the Philadelphia convention',
                   'As a dissent published by the Pennsylvania minority'],
             key='A', moves={'B': 'wrong_direction', 'C': 'detail_swap', 'D': 'imported'},
             why='Text 2 calls the essays first-class evidence of their authors intentions rather '
                 'than a neutral description of the document.',
             trap='B is precisely the use Text 2 compares to reading a campaign pamphlet as '
                  'policy.'),
        dict(carrier='The criticism begins from the same veto points and counts them differently. '
                     '___ a system with two chambers, a presidential veto, judicial review and '
                     'fifty state governments has a great many such points.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Nevertheless,', 'In other words,', 'By contrast,', 'After all,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'restatement', 'C': 'wrong_direction'},
             why='The second sentence supplies the ground for the first by listing the points that '
                 'make the count large.',
             trap='A sets the list against the claim it supports.'),
        dict(carrier='Critics argue that the result is gridlock ___ a condition in which the '
                     'system cannot act although majorities exist.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['gridlock a', 'gridlock, a', 'gridlock; a', 'gridlock: a,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'unpaired'},
             why='The phrase defining gridlock is a supplement to the noun it follows, so a comma '
                 'joins it to the clause.',
             trap='C uses a semicolon where the material after it is a phrase rather than a '
                  'clause.'),
        dict(goal='explain to a reader why the two sides cannot be reconciled by counting',
             notes=['Both sides are arguing from the same design.',
                    'Defenders point to measures blocked.',
                    'Critics point to problems unaddressed.',
                    'Neither list can be compiled without a judgment about what should have '
                    'happened.'],
             stem='The student wants to explain to a reader why the two sides cannot be reconciled '
                  'by counting. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Both sides of the argument are reasoning from the very same design',
                   'Defenders of the system point to the measures that were blocked by it',
                   'Critics of the system point to the problems it has left unaddressed',
                   'One side counts measures blocked and the other problems unaddressed, and '
                   'neither list can be made without deciding first what ought to have happened'],
             key='D', moves={'A': 'underreach', 'B': 'restatement', 'C': 'restatement'},
             why='Only this choice sets the two lists beside the judgment each one presupposes, '
                 'which is the reason counting cannot decide.',
             trap='B gives one half of the comparison and so cannot carry the point.'),
    ]))

# --- 3 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='HIS-S03-L4',
    ar=dict(
        khulasa='انقسمت حملة حقّ الانتخاب على الوسائل لا على الغايات، وبلغ الانقسام حدًّا '
                'أنتج منظّمتين وطنيّتين متنافستين عملتا منفصلتين عشرين سنة. فجناح رأى أنّ '
                'الحقّ يُنتزع ولايةً ولاية، بحجّة أنّ تعديلًا فدراليًّا يحتاج ثلاثة أرباع '
                'الولايات ويمكن أن تعطّله أقلّية منها.',
        maana='المعنى أنّ الجناح الآخر رأى أنّ حملات الولايات مصيدة، لأنّ كلّ حملة تُخاض '
              'كاملة ويمكن أن تُنقض، وأنّ التعديل الدستوري وحده يحسم المسألة وطنيًّا. وفي '
              'داخل هذا الجناح انفتح انقسام على التكتيك: كاري تشابمن كات بنت عملية ضغط '
              'منظّمة، وأليس بول والمناضلات الأصغر اعتصمن أمام البيت الأبيض وأُضربن عن '
              'الطعام.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الخلاف: كلّ '
                  'استراتيجية تستطيع أن تدّعي النتيجة، والمؤرّخون ينقسمون تبعًا لذلك. '
                  'والقراءة الأمينة أنّ الاثنتين عملتا على جمهورين مختلفين في الوقت نفسه، '
                  'وأنّ أيًّا من الجناحين ما كان ليقبل هذا الوصف وقتها.',
        sila='في اختبار سات يُسأل عن موقف الكاتب وعن الاستنتاج. والفخّ الشائع أن يُنسب النصر '
             'إلى جناح واحد لأنّ النصّ يذكر دليله، مع أنّ النصّ يعطي كلّ جناح دليلًا ثم '
             'يرفض الحسم. ويقترن المقطع بالمقطع الثالث بعد المئة في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Paul and Catt barely spoke for the rest of their long lives',
                   'Wyoming, Colorado, Utah and Idaho enfranchised women early',
                   'The militant wing was responsible for the passage of the amendment',
                   'Two strategies can each claim the outcome, and the honest reading gives each a '
                   'part'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'overreach'},
             why='The text sets out both strategies, gives the evidence each can claim, and ends '
                 'by saying the two worked on different audiences at once.',
             trap='C picks one wing where the text declines to award the outcome to either.'),
        dict(stem='According to the text, what was the argument for the state-by-state route?',
             opts=['That a state campaign could not be reversed once won',
                   'That a federal amendment could be blocked by a minority of states',
                   'That the parties would not listen to a national campaign',
                   'That wartime administrations should not be embarrassed'],
             key='B', moves={'A': 'wrong_direction', 'C': 'imported', 'D': 'detail_swap'},
             why='The text says the state wing argued that a federal amendment required three '
                 'quarters of the states and could be blocked by a minority of them.',
             trap='A states the opposite of the objection the other wing raised to state '
                  'campaigns.'),
        dict(claim='the question of which wing won is decided outside the evidence',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'question of which wing won is decided outside the evidence?',
             opts=[Q('Wyoming, Colorado, Utah and Idaho did in fact enfranchise women decades '
                     'before the federal amendment passed'),
                   Q('Alice Paul and the younger militants picketed the White House during the '
                     'war, were arrested, went on hunger strike'),
                   Q('the question of which part won is settled afterward, by whoever writes it '
                     'down'),
                   Q('Both organizations published their own histories, and each gives itself the '
                     'leading part')],
             key='C', moves={'A': 'true_not_asked', 'B': 'underreach', 'D': 'near_miss'},
             why='The clause says the answer is settled afterward by whoever writes the account, '
                 'which places it outside the evidence itself.',
             trap='D illustrates the consequence of that fact rather than stating it.'),
        dict(carrier='The amendment passed in 1920 after Catt\'s lobbying had produced the '
                     'congressional votes, which supports her account. It passed after the '
                     'picketing had made the issue impossible to table any longer, which supports '
                     'the other. A sequence of that kind therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['fits either account without choosing between them',
                   'establishes that the militants were decisive',
                   'shows that neither wing had any effect at all',
                   'proves the state-by-state strategy correct'],
             key='A', moves={'B': 'wrong_direction', 'C': 'overreach', 'D': 'detail_swap'},
             why='The same outcome follows both the lobbying and the picketing, so the order of '
                 'events supports each reading equally.',
             trap='C turns an inability to distinguish two causes into the absence of both.'),
        dict(target='table',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('table'),
             opts=['set out for discussion', 'arrange into columns',
                   'provide with a surface', 'put off indefinitely'],
             key='D', moves={'A': 'wrong_direction', 'B': 'imported', 'C': 'imported'},
             why='The picketing made the issue impossible to postpone any longer, so the word names '
                 'a setting aside rather than a bringing forward.',
             trap='A gives the opposite parliamentary sense, in which tabling introduces a '
                  'matter.'),
        dict(stem='Which choice best describes the function of the sentence about the normal '
                  'condition of a successful movement?',
             opts=['It reports that both organizations published their own histories',
                   'It names the tactical split between Catt and Paul',
                   'It generalizes the particular case into a pattern',
                   'It concedes that the state campaigns were a trap'],
             key='C', moves={'A': 'near_miss', 'B': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence lifts the suffrage quarrel into a statement about movements in '
                 'general, which the next sentence then illustrates.',
             trap='A names the illustration that follows rather than the generalization itself.'),
        dict(sibling='HIS-S03-L3',
             sibling_gloss='Text 2 is passage 103 of this book. It describes four kinds of record '
                           'behind the suffrage campaign, and says that signature counts measure '
                           'organizing capacity rather than opinion and that newspaper coverage '
                           'measures what editors thought readers would enjoy.',
             stem='Text 1 reports that the picketing produced considerable publicity. Based on '
                  'Text 2, what should be made of that publicity as evidence?',
             opts=['It measures the opinion of the public on the amendment',
                   'It measures the willingness of editors to print the story',
                   'It measures the organizing capacity of the militant wing',
                   'It measures how many legislators had changed their minds'],
             key='B', moves={'A': 'wrong_direction', 'C': 'near_miss', 'D': 'imported'},
             why='Text 2 says newspaper coverage measures mainly what editors thought their '
                 'readers would enjoy, so publicity records editorial judgment.',
             trap='C borrows the measure Text 2 assigns to petitions and membership rolls.'),
        dict(carrier='Both strategies can claim the outcome. ___ the historians divide '
                     'accordingly.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Accordingly,', 'Nevertheless,', 'For instance,', 'In other words,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'near_miss', 'D': 'restatement'},
             why='The division among historians follows from the fact that both claims remain '
                 'available, so the second sentence states a consequence.',
             trap='B sets the division among historians against the availability of both '
                  'claims.'),
        dict(carrier='Carrie Chapman Catt built a disciplined lobbying operation ___ it worked '
                     'through existing parties and declined to embarrass a wartime '
                     'administration.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['operation it', 'operation, it', 'operation, and it', 'operation; and it'],
             key='C', moves={'A': 'run_on', 'B': 'comma_splice', 'D': 'wrong_mark'},
             why='Building the operation and the working of it are each a full clause, so the '
                 'conjunction between them takes a comma before it.',
             trap='B joins the two clauses with a comma and no conjunction at all.'),
        dict(goal='explain why historians still disagree about which wing succeeded',
             notes=["The amendment passed after Catt's lobbying produced the congressional votes.",
                    'It passed after the picketing had made the issue impossible to table.',
                    'The two wings worked on different audiences at once.',
                    'Both organizations published histories giving themselves the leading part.'],
             stem='The student wants to explain why historians still disagree about which wing '
                  'succeeded. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Both wings acted on different audiences at the same moment, and each left a '
                   'history of its own in which it leads',
                   "The amendment passed after Catt's lobbying had produced the congressional "
                   'votes',
                   'The picketing made the issue impossible to table any longer than it had been',
                   'Both of the organizations involved published histories of their own work'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice gives both the overlap in causes and the partiality of the '
                 'sources, which together keep the disagreement alive.',
             trap='D names the rival histories without the overlapping causation that makes them '
                  'hard to adjudicate.'),
    ]))

# --- 4 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='HIS-S04-L4',
    ar=dict(
        khulasa='اتّفق المناهضون للعبودية على الغاية واختلفوا بشدّة على الوسيلة. فقد رأى '
                'ويليام لويد غاريسون أنّ العبودية خطيئة، وأنّ الدستور يمنحها إقرارًا لا '
                'ينبغي لمصلح أن يقبله، وأنّ واجب المناهض هو الإقناع الأخلاقي، أي حمل '
                'الأفراد على نبذ الممارسة لا السعي إلى قوانين ضدّها. وقد أحرق نسخة من '
                'الدستور علنًا ورفض الاقتراع.',
        maana='المعنى أنّ الجناح المقابل رأى أنّ الحجّة الأخلاقية جُرّبت ثلاثين سنة في بلد '
              'لا يسمع فيه الملّاك، وأنّ الطريق العملي يمرّ بالأصوات والأحزاب والسلطة '
              'الفدرالية على الأقاليم. فبنى حزب الحرّية ثم حزب الأرض الحرّة، وانتهى معظمه '
              'داخل الحزب الجمهوري الذي فاز عام ألف وثمانمئة وستّين ببرنامج يقترح وقف '
              'التوسّع فقط.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الخلاف: النتيجة لا '
                  'تحسم السؤال وإن قيل ذلك كثيرًا. فقد انتهت العبودية بحرب خاضتها حكومة '
                  'وعدت بألّا تلغيها، وهذه حجّة لم يقدّمها أي من الجناحين.',
        sila='في اختبار سات يُسأل عن موقف الكاتب وعن الحجّة المضادة. والفخّ الشائع أن تُقرأ '
             'النتيجة حكمًا لأحد الجناحين، مع أنّ النصّ يقول إنّ الدليل يتوافق مع '
             'الاثنين. ويقترن المقطع بالمقطع الرابع بعد المئة في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Two wings agreed on the end, and the outcome decides between them less than is '
                   'often said',
                   'Garrison dissolved his own society in 1865 over the objections of colleagues',
                   'The political wing was vindicated by the victory of 1860',
                   'The Republican platform of 1860 proposed only to stop the extension of '
                   'slavery'],
             key='A', moves={'B': 'underreach', 'C': 'wrong_direction', 'D': 'true_not_asked'},
             why='The text gives both strategies, states that the outcome does not decide the '
                 'question, and shows how each account can accommodate the war.',
             trap='C awards the argument to one wing where the text explicitly declines to.'),
        dict(stem='According to the text, what did Garrison hold about the Constitution?',
             opts=['That it should be amended to prohibit slavery outright',
                   'That it had been misread by the proslavery writers',
                   'That it gave slavery a sanction no reformer should accept',
                   'That it left the question to the territories to decide'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'imported'},
             why='The text says Garrison held that the Constitution gave slavery a sanction no '
                 'reformer should accept, and that he burned a copy in public.',
             trap='A names the remedy of the opposing wing rather than Garrison position.'),
        dict(claim='the war matched no account that either wing had offered',
             stem='Which quotation from the text most strongly supports the claim that the war '
                  'matched no account either wing had offered?',
             opts=[Q('He burned a copy of the Constitution in public, refused to vote'),
                   Q('That wing built the Liberty Party, then the Free Soil Party'),
                   Q('much of it ended inside the Republican Party, which won the presidency in '
                     '1860'),
                   Q('Slavery ended through a war fought by a government that had promised not to '
                     'abolish it, which is an argument neither wing made')],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'near_miss'},
             why='The sentence states the mismatch directly: the war was fought by a government '
                 'pledged not to abolish, which neither wing had proposed.',
             trap='C names the political success of one wing rather than the mismatch with the '
                  'war.'),
        dict(carrier='The political wing can say that only state power could have done it and that '
                     'they had built the state power. Garrison can say that the war came because '
                     'thirty years of moral argument had made the North unwilling to compromise. '
                     'The outcome therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['vindicates the wing that built the party machinery',
                   'leaves each account with a necessary part to play',
                   'shows that moral argument had no effect on events',
                   'was predicted by both wings in advance of the war'],
             key='B', moves={'A': 'wrong_direction', 'C': 'overreach', 'D': 'imported'},
             why='The text says the evidence is compatible with both and that each requires the '
                 'other to be in the story.',
             trap='A gives one of the two readings as though the text had chosen it.'),
        dict(target='sanction',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('sanction'),
             opts=['official approval', 'penalty for a breach',
                   'ban on a trading partner', 'ceremony of dedication'],
             key='A', moves={'B': 'wrong_direction', 'C': 'imported', 'D': 'imported'},
             why='Garrison objected that the Constitution gave slavery an approval no reformer '
                 'should accept, so the word names authorization rather than punishment.',
             trap='B gives the opposite sense, in which a sanction is imposed against something.'),
        dict(stem='Which choice best describes the function of the sentence about the Republican '
                  'platform?',
             opts=['It explains why Garrison refused to vote in any election',
                   'It reports the year in which the party won the presidency',
                   'It introduces the thirty years of moral argument',
                   'It qualifies the success the political wing can claim'],
             key='D', moves={'A': 'imported', 'B': 'underreach', 'C': 'detail_swap'},
             why='The platform proposed only to stop the extension of slavery, which limits what '
                 'the electoral victory can be said to have achieved.',
             trap='B treats the date as the point of a sentence about the content of the '
                  'platform.'),
        dict(sibling='HIS-S04-L3',
             sibling_gloss='Text 2 is passage 104 of this book. It describes the four kinds of '
                           'source for the history of slavery and says that plantation ledgers are '
                           'precise and are testimony by an interested party, while published '
                           'narratives were written to persuade.',
             stem='Text 1 says Garrison relied on moral suasion. Based on Text 2, which source '
                  'would that strategy have used most?',
             opts=['The ships manifests assembled into a modern database',
                   'The plantation ledgers kept by the owners themselves',
                   'The published narratives of formerly enslaved people',
                   'The interviews recorded with former children in the 1930s'],
             key='C', moves={'A': 'imported', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='Text 2 says the narratives supply the inside view and were written to persuade, '
                 'often with an abolitionist editor involved.',
             trap='B names the source written by the party Garrison was arguing against.'),
        dict(carrier='Moral argument had been tried for thirty years in a country where the owners '
                     'were not listening. ___ the practical route ran through votes, parties and '
                     'federal power over the territories.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Nevertheless,', 'On that view,', 'In other words,', 'For instance,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The second sentence states the conclusion the political wing drew from the '
                 'premise in the first.',
             trap='A sets the practical route against the failure of moral argument rather than '
                  'deriving it from that failure.'),
        dict(carrier='He burned a copy of the Constitution in public, refused to vote ___ argued '
                     'that a compromising party was simply slavery in another dress.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['vote; and', 'vote and', 'vote, it', 'vote, and'],
             key='D', moves={'A': 'wrong_mark', 'B': 'near_miss', 'C': 'comma_splice'},
             why='Three things Garrison did are listed, so the last item takes a comma before the '
                 'conjunction that introduces it.',
             trap='B drops the comma that the third item of a series requires.'),
        dict(goal='explain to a reader why the outcome settles little',
             notes=['Slavery ended through a war fought by a government that had promised not to '
                    'abolish it.',
                    'The political wing can say only state power could have done it.',
                    'Garrison can say the war came because moral argument had hardened the '
                    'North.',
                    'The evidence is compatible with both accounts.'],
             stem='The student wants to explain to a reader why the outcome settles little. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['The political wing can say that only state power could have ended slavery',
                   'Slavery ended in a way neither wing had proposed, and each can claim a '
                   'necessary share of the cause',
                   'Garrison could say that moral argument had hardened the North against '
                   'compromise',
                   'The surviving evidence is compatible with both of the two accounts'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice names the mismatch with both strategies and the way each can '
                 'still claim a part, which is why the result decides nothing.',
             trap='D asserts the compatibility without saying what makes it possible.'),
    ]))

# --- 5 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HIS-S05-L4',
    ar=dict(
        khulasa='خمسين سنة ظلّ السرد المعتاد يقول إنّ إعادة الإعمار فشلت لأنّها كانت غير '
                'قابلة للتطبيق. وهذا هو ما يُسمّى مدرسة دَنِنغ، أي تفسير يعامل إعادة '
                'الإعمار فسادًا وفشلًا، وسُمّيت باسم أستاذ في كولومبيا كتب طلّابه دراسات '
                'الولايات. وكُتب هذا السرد من مصادر رسمية وصحف بيضاء وأوراق من أسقطوا تلك '
                'الحكومات.',
        maana='المعنى أنّ دو بويس هاجم ذلك عام ألف وتسعمئة وخمسة وثلاثين في كتاب من ثمانمئة '
              'صفحة. وكانت حجّته جزئيًّا عن الدليل: أنّ المصادر قُرئت انتقاءً، وأنّ سجلّات '
              'الضرائب والمدارس تُظهر إنجازًا حقيقيًّا، وأنّ شهادة المشاركين السود أُهملت. '
              'وكانت أيضًا عن السؤال نفسه: لم تفشل إعادة الإعمار عنده، بل هُزمت.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الخلاف: كيف يتغيّر علم '
                  'التاريخ. والسبب في التحوّل مفيد لا عاطفي: ليس أنّ المؤرّخين صاروا أكثر '
                  'تعاطفًا، بل أنّ المصادر اتّسعت، فلم يصمد السرد الأقدم على الدليل.',
        sila='في اختبار سات يُسأل عن موقف الكاتب وعن الفرق بين دعويين تبدوان متشابهتين. '
             'والفخّ الشائع أن يُقرأ التحوّل تعاطفًا، مع أنّ النصّ ينفي ذلك ويسمّي اتّساع '
             'المصادر. ويقترن المقطع بالمقطع الخامس بعد المئة في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The book of 1935 ran to eight hundred pages with a closing chapter on '
                   'propaganda',
                   'An account was displaced because the sources widened, not because sympathies '
                   'changed',
                   'The Dunning school is named after a professor at Columbia University',
                   'The tax and school records of the period showed real achievement'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'near_miss'},
             why='The text contrasts failed with defeated and then states explicitly that the '
                 'shift came because the evidence base grew rather than from changed sentiment.',
             trap='D names one piece of the evidence rather than the argument about historiography.'),
        dict(stem='According to the text, from what sources was the earlier account written?',
             opts=['Congressional testimony and the registration rolls',
                   'The records of the Freedmen Bureau and the Black press',
                   'Interviews with surviving participants in the period',
                   'Official sources, white newspapers and the papers of the overthrowers'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'imported'},
             why='The text says the Dunning account was written from official sources, white '
                 'newspapers and the papers of the men who had overthrown the governments.',
             trap='A names the sources whose addition made that account unsustainable.'),
        dict(claim='the two accounts are asking different questions rather than giving different '
                   'answers',
             stem='Which quotation from the text most strongly supports the claim that the two '
                  'accounts ask different questions rather than give different answers?',
             opts=[Q('It was also about the exact question being asked'),
                   Q('a book of eight hundred pages with a closing chapter titled as a propaganda '
                     'of history'),
                   Q('the testimony of Black participants had been ignored because Black '
                     'witnesses were not treated as witnesses'),
                   Q('The book is now the standard starting point for the period')],
             key='A', moves={'B': 'underreach', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The sentence announces that the disagreement is partly about which question is '
                 'before the historian, which is what the claim asserts.',
             trap='C names one of the evidential complaints rather than the difference in the '
                  'question.'),
        dict(carrier='Reconstruction did not fail, in his account. It was defeated, by organized '
                     'violence and federal withdrawal, which is a different claim with different '
                     'evidence behind it. The change of word therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['softens a judgment that had been too harsh',
                   'restates the earlier account in gentler terms',
                   'alters what a historian has to go and find',
                   'settles the question without further research'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'overreach'},
             why='Defeat and failure call for different evidence, so changing the word changes '
                 'what the account must be built from.',
             trap='B treats a change of claim as a change of tone.'),
        dict(target='exact',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('exact'),
             opts=['demanding in its standards', 'precise in its formulation',
                   'extracted under pressure', 'identical to another'],
             key='B', moves={'A': 'near_miss', 'C': 'wrong_direction', 'D': 'imported'},
             why='The dispute concerns how the question is put, so the word names precision in '
                 'the wording rather than severity or extraction.',
             trap='C hears the verb to exact a payment rather than the adjective the sentence '
                  'uses.'),
        dict(stem='Which choice best describes the function of the sentence saying the reason for '
                  'the shift is instructive rather than sentimental?',
             opts=['It rules out one explanation for the change before giving another',
                   'It concedes that modern historians are more sympathetic',
                   'It reports the length of the book published in 1935',
                   'It introduces the closing chapter on the propaganda of history'],
             key='A', moves={'B': 'wrong_direction', 'C': 'underreach', 'D': 'detail_swap'},
             why='The sentence denies that the change came from sympathy and so clears the way for '
                 'the explanation that the sources widened.',
             trap='B states the explanation the sentence exists to reject.'),
        dict(sibling='HIS-S05-L3',
             sibling_gloss='Text 2 is passage 105 of this book. It describes thirteen volumes of '
                           'sworn testimony taken in 1871 and the registration rolls, and says '
                           'that testimony establishes events while a roll records an absence '
                           'without a reason.',
             stem='Text 1 says the account changed when the sources widened. Based on Text 2, '
                  'which two sources did most of that widening?',
             opts=['The white newspapers and the papers of the planters',
                   'The state studies written by the students of one professor',
                   'The official revenue records and the published state debates',
                   'The sworn testimony of 1871 and the registration rolls'],
             key='D', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'C': 'imported'},
             why='Text 2 sets out exactly those two sources and shows what each establishes, which '
                 'is the evidence Text 1 says had been left out.',
             trap='A names the sources the earlier account already relied on.'),
        dict(carrier='His argument was partly about evidence. ___ it was also about the exact '
                     'question being asked.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['For instance,', 'In short,', 'Beyond that,', 'Accordingly,'],
             key='C', moves={'A': 'near_miss', 'B': 'restatement', 'D': 'wrong_direction'},
             why='The second sentence adds a second ground of the argument rather than '
                 'illustrating or summarizing the first.',
             trap='D makes the question about the question follow from the complaint about '
                  'evidence.'),
        dict(carrier='That account was in the textbooks and the films ___ it was written from '
                     'official sources, white newspapers and the papers of the men who had '
                     'overthrown the governments.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['films, and it', 'films and it', 'films it', 'films; and it'],
             key='A', moves={'B': 'run_on', 'C': 'run_on', 'D': 'wrong_mark'},
             why='The textbooks clause and the sources clause are each complete, so the '
                 'conjunction between them needs a comma before it.',
             trap='B omits the comma that two full clauses require before a conjunction.'),
        dict(goal='explain to a reader how a standard account came to be replaced',
             notes=['The earlier account was written from official sources and white newspapers.',
                    'Du Bois argued that the sources had been read selectively.',
                    'Once the testimony, the rolls, the Bureau records and the Black press were '
                    'read alongside the planters papers, the earlier account could not be '
                    'sustained.',
                    'The shift was not that historians became more sympathetic.'],
             stem='The student wants to explain to a reader how a standard account came to be '
                  'replaced. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Du Bois argued in 1935 that the sources had been read selectively',
                   'The earlier account was written from official sources and white newspapers',
                   'The account fell when the evidence base widened to include testimony, rolls '
                   'and the Black press, not because sympathies had changed',
                   'Historians did not simply become more sympathetic to their subjects'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'restatement'},
             why='Only this choice names the mechanism of the replacement and rules out the '
                 'explanation the text rejects.',
             trap='D gives the rejected explanation alone, with nothing in its place.'),
    ]))

# --- 6 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HIS-S06-L4',
    ar=dict(
        khulasa='تُناقش آثار تنظيم المصانع في نيويورك وبريطانيا من السلسلة نفسها بأقلام '
                'تصل إلى نتائج متعاكسة، والجدل يدور كلّه تقريبًا على الفرض المضادّ، أي ما '
                'كان سيحدث بلا التدبير. فقراءة ترى أنّ التنظيم رفع الأجور وخفّض الوفيات '
                'بكلفة امتثال متواضعة، وتشير إلى هبوط الوفيات الصناعية بعد القوانين وإلى '
                'بقاء الصناعات المتأثّرة.',
        maana='المعنى أنّ القراءة الأخرى تقبل هبوط الوفيات وتنسب كثيرًا منه إلى ارتفاع '
              'كثافة رأس المال وتحسّن الآلات والضوء الكهربائي، وكلّها كانت قادمة على أي '
              'حال وكلّها تجعل مكان العمل أأمن بلا نصّ. وعلى هذا الحساب صدّقت القوانين '
              'تغييرًا جاريًا ورفعت الكلفة على الحدّ، والعبء على أصغر الشركات.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الخلاف: ما يهدّئ '
                  'النزاع هو الدليل المقارن. فقد وصل التنظيم في تواريخ مختلفة بولايات '
                  'وبلدان مختلفة، فأمكن فحص الحادثة نفسها مرّات كثيرة، وترجّح حصيلة ذلك '
                  'العمل نسخة متواضعة من القراءة الأولى.',
        sila='في اختبار سات يُسأل عن حدود الدليل وعن ما يفصل بين قراءتين. والفخّ الشائع أن '
             'يُفترض أنّ أثرًا متواضعًا يحسم الجدل، مع أنّ النصّ يقول إنّه يترك مجالًا '
             'لسؤال القيمة. ويقترن المقطع بالمقطع السادس بعد المئة في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Employers who predicted ruin in 1911 were still trading in 1930',
                   'The comparative studies find that enforcement mattered more than the text',
                   'Comparative evidence narrows the dispute without ending it, because the '
                   'remainder is about values',
                   'The laws certified a change that was already under way'],
             key='C', moves={'A': 'underreach', 'B': 'true_not_asked', 'D': 'near_miss'},
             why='The text gives both readings, reports that comparative work supports a modest '
                 'version of one, and says the residue is a question about values.',
             trap='D states one of the two readings as though it were the conclusion.'),
        dict(stem='According to the text, what does the whole argument turn on?',
             opts=['The counterfactual, or what would have happened without the measure',
                   'The compliance cost that a firm incurs in meeting a rule',
                   'The quality of the employment records kept by small firms',
                   'The arrival of electric light in the workplaces concerned'],
             key='A', moves={'B': 'near_miss', 'C': 'detail_swap', 'D': 'detail_swap'},
             why='The second sentence says the argument turns almost entirely on the '
                 'counterfactual and then defines it.',
             trap='B names a term the text defines in passing rather than the hinge of the '
                  'dispute.'),
        dict(claim='the comparative evidence favors one reading without defeating the other',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'comparative evidence favors one reading without defeating the other?',
             opts=[Q('Regulation arrived at different dates in different states and countries'),
                   Q('a modest effect leaves room for argument about whether it was worth its '
                     'cost, which is a question about values and not about the series'),
                   Q('employers who predicted ruin in 1911 were still trading in 1930'),
                   Q('all of which were arriving anyway and all of which make a workplace safer '
                     'without a statute')],
             key='B', moves={'A': 'underreach', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The clause grants the finding and then names the question it leaves open, which '
                 'is exactly the shape the claim describes.',
             trap='D gives the second reading argument rather than the standing of the evidence.'),
        dict(carrier='The weight of that work supports a modest version of the first reading, '
                     'since deaths fell faster where the rules arrived earlier and employment '
                     'effects are small and hard to find. Neither side is therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['able to produce any evidence at all',
                   'free to ignore the comparative studies',
                   'arguing about the same series of figures',
                   'obliged by the finding to give up its position'],
             key='D', moves={'A': 'overreach', 'B': 'near_miss', 'C': 'wrong_direction'},
             why='The text says a modest effect leaves room for argument about cost, so the '
                 'finding does not compel either side to concede.',
             trap='C contradicts the opening, which says both sides argue from the same series.'),
        dict(target='tempers',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('tempers'),
             opts=['hardens by heating', 'loses patience with',
                   'moderates the force of', 'measures the extent of'],
             key='C', moves={'A': 'near_miss', 'B': 'wrong_direction', 'D': 'imported'},
             why='The comparative evidence narrows the disagreement without ending it, so the word '
                 'names a moderating of its force.',
             trap='A gives the metallurgical sense from which the figure comes.'),
        dict(stem='Which choice best describes the function of the sentence about capital '
                  'intensity and electric light?',
             opts=['It reports the compliance cost borne by the smallest firms',
                   'It supplies an alternative cause for a fall both sides accept',
                   'It explains why regulation arrived at different dates',
                   'It introduces the comparative studies of enforcement'],
             key='B', moves={'A': 'detail_swap', 'C': 'imported', 'D': 'near_miss'},
             why='The second reading accepts the fall in deaths and attributes much of it to '
                 'changes that were arriving anyway, which is a rival cause for an agreed fact.',
             trap='D names material that comes later rather than the work this sentence does.'),
        dict(sibling='HIS-S06-L3',
             sibling_gloss='Text 2 is passage 106 of this book. It argues that the statistics '
                           'behind factory law carry three recurring defects, among them a '
                           'reporting incentive, since accidents were reported by employers to '
                           'inspectors who could prosecute them.',
             stem='Text 1 reports that employment effects are small and hard to find. Based on '
                  'Text 2, which defect best explains that difficulty?',
             opts=['The poor employment records kept by the smallest firms',
                   'The missing denominator in a count of deaths by trade',
                   'The coding of cause of death in the civil registers',
                   'The incentive of employers to report accidents selectively'],
             key='A', moves={'B': 'near_miss', 'C': 'near_miss', 'D': 'detail_swap'},
             why='Text 1 locates the losses in the smallest firms, where it says records are '
                 'worst, and Text 2 names poor employment figures as a standing defect.',
             trap='D names a defect that bears on accident counts rather than on employment.'),
        dict(carrier='Both readings are consistent with the published figures. ___ what tempers '
                     'the dispute is the comparative evidence.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Consequently,', 'For instance,', 'In other words,', 'Even so,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'restatement'},
             why='The deadlock in the first sentence is qualified rather than extended by the '
                 'second, so the two stand in contrast.',
             trap='A makes the comparative evidence a consequence of the deadlock.'),
        dict(carrier='One reading holds that regulation raised wages and reduced deaths at a '
                     'modest compliance cost ___ the expense a firm incurs in meeting a rule.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['cost the', 'cost, the', 'cost; the', 'cost: the,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'unpaired'},
             why='The phrase defining the compliance cost is a supplement to the noun before it, '
                 'so a comma attaches it.',
             trap='C uses a semicolon where the material after it is a phrase and not a clause.'),
        dict(goal='explain why the comparative studies do not end the argument',
             notes=['Regulation arrived at different dates in different states and countries.',
                    'Deaths fell faster where the rules arrived earlier.',
                    'Employment effects are small and hard to find.',
                    'A modest effect leaves room for argument about whether it was worth its '
                    'cost.'],
             stem='The student wants to explain why the comparative studies do not end the '
                  'argument. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Regulation arrived at different dates in different states and in different '
                   'countries',
                   'Deaths fell faster in the places where the rules had arrived earlier',
                   'Employment effects turn out to be small and rather hard to find',
                   'The studies find a real but modest effect, and a modest effect still leaves '
                   'the question of whether it was worth its cost'],
             key='D', moves={'A': 'underreach', 'B': 'restatement', 'C': 'restatement'},
             why='Only this choice names both the finding and the question it leaves standing, '
                 'which is why the studies settle less than they might.',
             trap='B reports half of the finding and none of what it fails to settle.'),
    ]))

# --- 7 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='HIS-S07-L4',
    ar=dict(
        khulasa='مكاسب فترة الحقوق المدنية يطالب بها سردان لكليهما دليل قويّ. فالسرد '
                'القانوني يشير إلى استراتيجية تقاضٍ امتدّت عشرين سنة، أي الاستخدام المخطَّط '
                'لقضايا منتقاة لتثبيت مبدأ، أدارها الصندوق القانوني للمنظّمة وتوّجها حكم '
                'براون. ويشير إلى أنّ قانوني أربعة وستين وخمسة وستين صاغهما محامون وأقرّهما '
                'الكونغرس ونفّذهما موظّفون فدراليون.',
        maana='المعنى أنّ سرد الضغط يجيب بأنّ القانون تحرّك حين صارت كلفة عدم التحرّك لا '
              'تُحتمل، وأنّ هذه الكلفة صنعها العمل المباشر، أي الاحتجاج المصمّم لفرض '
              'التفاوض. فبِرمنغهام عام ثلاثة وستين وجسر سلمى عام خمسة وستين تلاهما '
              'القانونان في أشهر، والتسلسل صعب الإنكار.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الخلاف: كِنغ نفسه قدّم '
                  'الحجّتين، ولهذا هو شاهد مفيد. فقد عمل مع المحامين وضغط للتشريع الفدرالي '
                  'وأمضى وقتًا طويلًا في وزارة العدل، وكان الطرفان يعرفان أنّ أيًّا منهما '
                  'لا يكفي وحده.',
        sila='في اختبار سات يُسأل عن موقف الكاتب وعن استخدام شاهد يقدّم الحجّتين. والفخّ '
             'الشائع أن يُقتبس كِنغ لصالح سرد واحد، مع أنّ النصّ يقول إنّه قدّم السردين. '
             'ويقترن المقطع بالمقطع السابع بعد المئة في أسئلة النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The organizations disagreed at the time about where money should go',
                   'Birmingham in 1963 and Selma in 1965 were followed within months by statutes',
                   'The pressure account is the one the evidence finally supports',
                   'Two accounts of the same gains each have strong evidence, and the people '
                   'involved used both'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'wrong_direction'},
             why='The text gives both accounts their evidence and then shows that the strategists '
                 'themselves treated neither as sufficient.',
             trap='C awards the argument to one side where the text keeps the dispute open.'),
        dict(stem='According to the text, what did King argue from a jail cell?',
             opts=['That the litigation strategy had taken twenty years to prepare',
                   'That the moderate who preferred order was the greater obstacle',
                   'That registration figures followed the Act rather than the marches',
                   'That the organizations should settle where their money went'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says King wrote from a jail cell that the moderate who preferred order '
                 'to justice was a greater obstacle than the intransigent opponent.',
             trap='C gives an argument from the legal account rather than what King wrote.'),
        dict(claim='the author treats King as evidence for both accounts',
             stem='Which quotation from the text most strongly supports the claim that the author '
                  'treats King as evidence for both accounts?',
             opts=[Q('Birmingham in 1963 and the bridge at Selma in 1965 were followed within '
                     'months by the two statutes'),
                   Q('Those disagreements are documented in their own minutes, which makes the '
                     'argument unusually well evidenced'),
                   Q('King also made the other case, which is why he is a useful witness'),
                   Q('a court ruling with no constituency behind it had been ignored for a decade '
                     'after Brown')],
             key='C', moves={'A': 'true_not_asked', 'B': 'underreach', 'D': 'near_miss'},
             why='The sentence says in so many words that King made the other case too and that '
                 'this is what makes him useful.',
             trap='D gives one half of the mutual-insufficiency point rather than the remark about '
                  'King.'),
        dict(carrier='A court ruling with no constituency behind it had been ignored for a decade '
                     'after Brown, and a movement with no legal instrument had nothing to enforce. '
                     'The two strategies were therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['dependent on each other for any result at all',
                   'run by people who refused to speak to one another',
                   'alternatives between which a choice had to be made',
                   'equally ineffective throughout the whole period'],
             key='A', moves={'B': 'imported', 'C': 'wrong_direction', 'D': 'overreach'},
             why='Each strategy is shown failing without the other, which is what mutual '
                 'dependence means.',
             trap='C treats complements as alternatives, which the sentence has just ruled out.'),
        dict(target='intransigent',
             stem='As used in the text, what does the word %s most nearly mean?'
                  % Q('intransigent'),
             opts=['open to persuasion', 'moving between positions',
                   'concerned with order', 'refusing to compromise'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'detail_swap'},
             why='The word describes the opponent against whom the moderate is said to be a '
                 'greater obstacle, so it names a refusal to yield.',
             trap='C borrows the description of the moderate rather than of the opponent.'),
        dict(stem='Which choice best describes the function of the sentence about King working '
                  'with the lawyers?',
             opts=['It reports where the organizations spent their money',
                   'It explains why Brown was ignored for a decade',
                   'It shows the same person operating on both strategies',
                   'It introduces the two statutes of 1964 and 1965'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'detail_swap'},
             why='The sentence puts King in the meetings at the Department of Justice as well as '
                 'in the jail cell, which is the point about a witness for both sides.',
             trap='B names a different claim in the text rather than the work of this sentence.'),
        dict(sibling='HIS-S07-L3',
             sibling_gloss='Text 2 is passage 107 of this book. It describes the documentation of '
                           'the period, including surveillance files, and says an informer report '
                           'is evidence that something was said and no evidence that it was true.',
             stem='Text 1 says the disagreements are documented in the minutes of the '
                  'organizations. Based on Text 2, what makes that kind of source valuable?',
             opts=['It was compiled by an agent who attended the meetings',
                   'It is a record kept by the participants rather than by their watchers',
                   'It became available only after the amendments of 1974',
                   'It can be matched against the registration figures by county'],
             key='B', moves={'A': 'wrong_direction', 'C': 'detail_swap', 'D': 'near_miss'},
             why='Text 2 distinguishes what a hostile observer recorded from what the movement '
                 'itself produced, and minutes belong to the second kind.',
             trap='A describes the surveillance file, which Text 2 treats as a record of '
                  'observation.'),
        dict(carrier='The legal account points out that the statutes were drafted by lawyers and '
                     'enacted by Congress. ___ the measurable changes in registration followed the '
                     'Act rather than the marches.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Moreover,', 'Nevertheless,', 'In other words,', 'For example,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The second sentence adds a further point to the same case rather than qualifying '
                 'or restating it.',
             trap='B sets the registration evidence against the legal account it supports.'),
        dict(carrier='The pressure account answers that the law moved when the cost of not moving '
                     'became intolerable ___ that the cost was created by direct action.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['intolerable; and', 'intolerable and', 'intolerable, and', 'intolerable, it'],
             key='C', moves={'A': 'wrong_mark', 'B': 'run_on', 'D': 'comma_splice'},
             why='Two parallel clauses introduced by that are joined, so the conjunction between '
                 'them takes a comma before it.',
             trap='D replaces the conjunction with a comma and a new subject, which splices the '
                  'sentence.'),
        dict(goal='explain to a reader why the two accounts have both survived',
             notes=['The registration changes followed the Act rather than the marches.',
                    'Birmingham and Selma were followed within months by the two statutes.',
                    'A court ruling with no constituency was ignored for a decade after Brown.',
                    'Each side can point to a period in which the other was visibly failing.'],
             stem='The student wants to explain to a reader why the two accounts have both '
                  'survived. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Each account can point to a stretch of years in which the other strategy was '
                   'plainly getting nowhere',
                   'Registration changes followed the Act of 1965 rather than the marches',
                   'Birmingham and Selma were followed within months by the two statutes',
                   'A court ruling with no constituency was ignored for a decade after Brown'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice states the symmetry that keeps both accounts alive rather than '
                 'offering the evidence of one of them.',
             trap='D supplies evidence for one account and so cannot explain why both survive.'),
    ]))

# --- 8 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='HIS-S08-L4',
    ar=dict(
        khulasa='سمّته اللغة الرسمية البريطانية نقلًا للسلطة، وهي عبارة تحمل حجّة داخلها. '
                'فعلى هذا الحساب كان الاستقلال خاتمة مقصودة لتطوّر طويل: مُدّت المؤسّسات '
                'التمثيلية على مراحل من عام ألف وتسعمئة وتسعة، ودخل الهنود الخدمة المدنية '
                'وسلك الضبّاط، ووصل الحكم الذاتي الإقليمي عام خمسة وثلاثين، وكانت خطوة عام '
                'سبعة وأربعين إتمامًا لبرنامج لا استسلامًا.',
        maana='المعنى أنّ السرد الوطني يعامل ذلك حكايةً رواها الطرف الخاسر بعد الحادثة. '
              'فعلى هذه القراءة كلّ تقدّم دستوري مُنح تحت الضغط وبعد رفض، وإصلاحات عام '
              'خمسة وثلاثين لم تُعرض إلّا بعد أن جعل اللاتعاون الأقاليم غير قابلة للحكم، '
              'ولم يستسلم البريطانيون بلطف بل نفد منهم المال والجنود والشرطة.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الخلاف: التوقيت أفضل '
                  'اختبار متاح، وهو يرجّح السرد الثاني ويعقّده. فكلّ تنازل كبير تلا أزمة '
                  'لا سبقها، لكنّ البريطانيين رحلوا بالتفاوض وقد كان بإمكانهم القتال كما '
                  'فعل الفرنسيون في الهند الصينية والجزائر.',
        sila='في اختبار سات يُسأل عن موقف الكاتب وعن الاختبار الذي يفصل بين سردين. والفخّ '
             'الشائع أن يُقرأ ترجيح أحد السردين حسمًا كاملًا، مع أنّ النصّ يعطي كلّ طرف '
             'نصف الحكاية. ويقترن المقطع بالمقطع الثامن بعد المئة في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The movement made continued rule impossible and the government then chose how '
                   'to leave',
                   'Clement Attlee presented independence as a transfer of power in the Commons',
                   'The partition killed hundreds of thousands and displaced millions',
                   'The British ran out of money, soldiers and policemen by 1947'],
             key='A', moves={'B': 'underreach', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The text calls that the most defensible reading and says it gives each side the '
                 'half of the story it claims and neither side the whole.',
             trap='D states one side of the dispute as though the text had simply adopted it.'),
        dict(stem='According to the text, what does the phrase transfer of power contain?',
             opts=['A date on which the final step was taken',
                   'A summary of the Indian Independence Act',
                   'An argument about how independence came',
                   'A reference to the partition that followed'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'detail_swap'},
             why='The first sentence says the official phrase is one containing an argument, which '
                 'the rest of the paragraph then sets out.',
             trap='B treats the phrase as a description of the statute rather than as a claim.'),
        dict(claim='the timing of the concessions favors the nationalist account',
             stem='Which quotation from the text most strongly supports the claim that the timing '
                  'of the concessions favors the nationalist account?',
             opts=[Q('representative institutions were extended in stages from 1909'),
                   Q('the Indian Independence Act reads like administration rather than defeat'),
                   Q('Jawaharlal Nehru made exactly that argument, and the record of mass arrests '
                     'supports it'),
                   Q('Every major concession followed a crisis rather than preceding one')],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'near_miss'},
             why='The sentence states the pattern of timing itself, which is the test the text '
                 'calls the best available.',
             trap='C reports who made the argument rather than the timing that supports it.'),
        dict(carrier='The British did leave by negotiation when they could have fought, as the '
                     'French did in Indochina and Algeria at enormous cost, and that choice needs '
                     'explaining too. The nationalist account therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['collapses under the comparison with France',
                   'accounts for the departure without accounting for its manner',
                   'is confirmed in every particular by the comparison',
                   'applies only to the years before 1935'],
             key='B', moves={'A': 'overreach', 'C': 'wrong_direction', 'D': 'detail_swap'},
             why='The text says the nationalist account is favored and complicated at once, since '
                 'the choice of a negotiated exit still needs explaining.',
             trap='A turns a complication into a refutation, which the text does not.'),
        dict(target='capitulate',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('capitulate'),
             opts=['give way to a demand', 'draw up a formal list',
                   'summarize in a heading', 'withdraw an accusation'],
             key='A', moves={'B': 'imported', 'C': 'imported', 'D': 'near_miss'},
             why='The sentence denies that the British yielded gracefully and says they ran out of '
                 'means, so the word names giving way.',
             trap='D softens the sense to the withdrawal of a charge rather than of a position.'),
        dict(stem='Which choice best describes what the closing sentences about the partition '
                  'contribute?',
             opts=['They report the terms Attlee used in the Commons',
                   'They give the strongest evidence for the nationalist case',
                   'They explain why the 1935 reforms were offered at all',
                   'They name a cost that neither account accommodates'],
             key='D', moves={'A': 'detail_swap', 'B': 'wrong_direction', 'C': 'near_miss'},
             why='The closing sentences say both accounts pass over the partition and that neither '
                 'narrative sits easily beside it.',
             trap='B treats a criticism of both accounts as support for one of them.'),
        dict(sibling='HIS-S08-L3',
             sibling_gloss='Text 2 is passage 108 of this book. It argues that British Indian '
                           'statistics were produced by the administration for administrative '
                           'purposes, so a historian has much data and no independent check on '
                           'it.',
             stem='Text 1 reports that British language called the event a transfer of power. '
                  'Based on Text 2, why would that language be expected?',
             opts=['Because the Famine Commission of 1880 had recommended it',
                   'Because private records kept by merchants contradicted it',
                   'Because the record was generated by the administration describing itself',
                   'Because later census data could be read backward for holes'],
             key='C', moves={'A': 'imported', 'B': 'wrong_direction', 'D': 'detail_swap'},
             why='Text 2 says almost all the surviving material was produced by the administration '
                 'for its own purposes, which is exactly the condition that produces such '
                 'language.',
             trap='B names a check on the record rather than a reason for its tone.'),
        dict(carrier='Each constitutional advance was conceded under pressure and after refusal. '
                     '___ the 1935 reforms were offered only once non-cooperation had made the '
                     'provinces ungovernable.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Nevertheless,', 'For instance,', 'In short,', 'By contrast,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'restatement', 'D': 'wrong_direction'},
             why='The second sentence gives a particular case of the general claim made in the '
                 'first.',
             trap='A sets the example against the claim it illustrates.'),
        dict(carrier='A government confident in its program does not imprison sixty thousand '
                     'people ___ over a salt tax.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['people, over', 'people; over', 'people: over', 'people over'],
             key='D', moves={'A': 'near_miss', 'B': 'wrong_mark', 'C': 'wrong_mark'},
             why='The phrase naming the occasion attaches directly to the verb, so no mark belongs '
                 'between them.',
             trap='A inserts a comma between a verb phrase and the phrase that completes it.'),
        dict(goal='explain to a reader what each account gets right',
             notes=['Representative institutions were extended in stages from 1909.',
                    'Every major concession followed a crisis rather than preceding one.',
                    'The British left by negotiation when they could have fought.',
                    'The movement made continued rule impossible and the government chose the '
                    'manner of its departure.'],
             stem='The student wants to explain to a reader what each account gets right. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['Representative institutions in India were extended in stages from 1909',
                   'The pressure made further rule impossible, and the departing government still '
                   'chose how it would go',
                   'Every major concession followed a crisis rather than coming before one',
                   'The British left India by negotiation when they could have chosen to fight'],
             key='B', moves={'A': 'underreach', 'C': 'restatement', 'D': 'true_not_asked'},
             why='Only this choice holds the nationalist half and the official half together, '
                 'which is what the goal asks for.',
             trap='C states the nationalist half alone and leaves the other unexplained.'),
    ]))

# --- 9 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HIS-S09-L4',
    ar=dict(
        khulasa='رأي الأغلبية في قضية كوريماتسو أقوى بيان متاح لحجّة التعليق، ويستحقّ '
                'القراءة على شروطه. فقد رأى القاضي بلاك أنّ الاستبعاد لم يُبنَ على العرق '
                'بل على الضرورة العسكرية في زمن الحرب، وأنّ المحاكم غير مؤهّلة لمراجعة حكم '
                'قائد في الميدان، وأنّ المشقّات جزء من الحرب.',
        maana='المعنى أنّ الاستدلال يقوم على التنازل القضائي، أي ممارسة قبول حكم السلطة '
              'التنفيذية في مجالها، ولم ينتج أحد قاعدة للطوارئ تستغني عن التنازل كلّيًّا. '
              'والمخالفات الثلاث تهجم من ثلاث جهات، وأصعبها حجّة القاضي جاكسون: أنّ محكمة '
              'لا تستطيع عملًا مراجعة أمر عسكري في حرب، فعليها أن ترفض تصديقه بدل كتابة '
              'التصديق في القانون.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الخلاف: ما صدّقه '
                  'التاريخ اللاحق وما تركه مفتوحًا. فقد أُبطلت الأحكام في الثمانينات '
                  'واعتذر الكونغرس، وقالت المحكمة عام ألفين وثمانية عشر إنّ الحكم كان '
                  'خطأً جسيمًا يوم صدوره، لكنّها لم تستبدل التنازل ببديل عملي.',
        sila='في اختبار سات يُسأل عن موقف الكاتب وعن ما لم يُحسم. والفخّ الشائع أن يُقرأ '
             'الإبطال اللاحق حلًّا للمسألة الدستورية، مع أنّ النصّ يقول إنّ البديل العملي '
             'لم يُوجد. ويقترن المقطع بالمقطع التاسع بعد المئة في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Justice Murphy used the word racism, which was unusual in 1944',
                   'The later history vindicated one dissent and still left deference in place',
                   'Strict scrutiny was announced in the same opinion that upheld the exclusion',
                   'Jackson had prosecuted at Nuremberg by the time compensation was discussed'],
             key='B', moves={'A': 'underreach', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The text takes the majority seriously, sets out three dissents, says Jackson was '
                 'the one history vindicated, and then names what was not replaced.',
             trap='C gives the sharpest particular in the text rather than its argument.'),
        dict(stem='According to the text, what did Justice Roberts say the case was about?',
             opts=['Military necessity in a time of declared war',
                   'Assumptions about racial characteristics',
                   'The standard applied to racial classifications',
                   'Imprisonment for refusing to leave home'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'imported'},
             why='The text says Roberts held that the case was not about curfew but about '
                 'imprisonment for refusing to leave home.',
             trap='B gives the substance of the Murphy dissent rather than the Roberts one.'),
        dict(claim='the later corrections left the constitutional problem unsolved',
             stem='Which quotation from the text most strongly supports the claim that the later '
                  'corrections left the constitutional problem unsolved?',
             opts=[Q('What it did not do was replace deference with a workable alternative'),
                   Q('The convictions were vacated in the 1980s when the suppressed reports '
                     'appeared'),
                   Q('the Court itself stated in 2018 that Korematsu was gravely wrong the day it '
                     'was decided'),
                   Q('Justice Black held that the exclusion was not based on race but on military '
                     'necessity')],
             key='A', moves={'B': 'near_miss', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The sentence states the omission directly: deference was criticized and never '
                 'replaced by a rule that could be used.',
             trap='C reports the strongest of the corrections rather than what the corrections '
                  'failed to do.'),
        dict(carrier='Strict scrutiny, meaning the most demanding standard applied to racial '
                     'classifications, was announced in the same opinion that upheld the '
                     'exclusion. A standard introduced in that way therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['was the first rule for emergencies that dispensed with deference',
                   'had been proposed by Justice Jackson in his dissent',
                   'arrived with a demonstration that it would not bind',
                   'applied only to classifications made during a war'],
             key='C', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'D': 'imported'},
             why='The text calls it a conciliatory formula rather than a constraint, because the '
                 'same opinion that announced it approved the classification before it.',
             trap='A claims for the standard exactly what the text says nobody has produced.'),
        dict(target='conciliatory',
             stem='As used in the text, what does the word %s most nearly mean?'
                  % Q('conciliatory'),
             opts=['harsh in its demands', 'offered to appease',
                   'carefully reasoned', 'left deliberately vague'],
             key='B', moves={'A': 'wrong_direction', 'C': 'imported', 'D': 'near_miss'},
             why='The formula is contrasted with a constraint, so the word names something offered '
                 'to soften rather than to bind.',
             trap='D is close but names obscurity rather than the appeasement the contrast '
                  'requires.'),
        dict(stem='Which choice best describes the function of the sentence about nobody producing '
                  'a rule for emergencies?',
             opts=['It grants the majority reasoning a difficulty that remains unsolved',
                   'It reports the standard that the same opinion announced',
                   'It introduces the three dissents described next',
                   'It explains why the convictions were vacated in the 1980s'],
             key='A', moves={'B': 'detail_swap', 'C': 'near_miss', 'D': 'imported'},
             why='The sentence concedes that deference cannot simply be discarded, which is what '
                 'makes the majority position worth reading on its own terms.',
             trap='C treats a concession to the majority as an introduction to the dissents.'),
        dict(sibling='HIS-S09-L3',
             sibling_gloss='Text 2 is passage 109 of this book. It reports that two assessments '
                           'against removal were in government hands and were never shown to the '
                           'Court, and that Justice Murphy was right about misinformation without '
                           'having any proof.',
             stem='Text 1 says Jackson argued a court cannot review a military order in wartime. '
                  'Based on Text 2, what supports that argument?',
             opts=['The Court applied strict scrutiny to the classification',
                   'Congress apologized and paid compensation in 1988',
                   'Justice Roberts distinguished curfew from imprisonment',
                   'The Court decided the case without the evidence against it'],
             key='D', moves={'A': 'wrong_direction', 'B': 'detail_swap', 'C': 'near_miss'},
             why='Text 2 shows the Court reasoning without the reports in the government '
                 'possession, which is exactly the practical incapacity Jackson described.',
             trap='C names a different dissent rather than evidence for the Jackson position.'),
        dict(carrier='The reasoning rests on judicial deference. ___ nobody has produced a rule '
                     'for emergencies that dispenses with deference altogether.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Instead,', 'In other words,', 'Importantly,', 'For instance,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'restatement', 'D': 'near_miss'},
             why='The second sentence marks the difficulty as weighty rather than replacing or '
                 'restating the first.',
             trap='A presents the absence of a rule as a substitute for deference.'),
        dict(carrier='Justice Murphy wrote that the claim of necessity rested on misinformation '
                     '___ on assumptions about racial characteristics.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['misinformation and', 'misinformation, and', 'misinformation; and',
                   'misinformation: and'],
             key='A', moves={'B': 'near_miss', 'C': 'wrong_mark', 'D': 'wrong_mark'},
             why='Two prepositional phrases are joined, not two clauses, so the conjunction takes '
                 'no mark before it.',
             trap='B inserts a comma before a conjunction joining two phrases rather than two '
                  'clauses.'),
        dict(goal='explain to a reader what the later corrections did and did not achieve',
             notes=['The convictions were vacated in the 1980s when the suppressed reports '
                    'appeared.',
                    'Congress apologized and paid compensation.',
                    'The Court stated in 2018 that Korematsu was gravely wrong.',
                    'Deference was never replaced with a workable alternative.'],
             stem='The student wants to explain to a reader what the later corrections did and did '
                  'not achieve. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['The convictions were vacated in the 1980s when the suppressed reports '
                   'appeared',
                   'The Court stated in 2018 that the decision was gravely wrong when it was '
                   'made',
                   'The convictions fell and the Court recanted, and yet no rule replaced the '
                   'deference the case had relied on',
                   'Congress apologized for the removal and paid compensation to survivors'],
             key='C', moves={'A': 'underreach', 'B': 'restatement', 'D': 'true_not_asked'},
             why='Only this choice sets the corrections beside the gap they left, which is the '
                 'double point the goal asks for.',
             trap='B reports the strongest correction without the omission that followed it.'),
    ]))

# --- 10 ------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HIS-S10-L4',
    ar=dict(
        khulasa='هل تصنع الصحافة الرأي أم تعكسه؟ الجدل قائم منذ باع بنجامين داي أوّل صحيفة '
                'بسنت، والسردان سهلان في القول صعبان في الفصل. فعلى سرد التأثير يقرّر '
                'المحرّرون ما يُغطّى وبأي عبارات، ويأخذ الجمهور إحساسه بما يهمّ من هناك. '
                'وعلى سرد السوق تخسر الصحيفة قرّاءها إن طبعت ما يكرهونه، فتتبع التغطية '
                'الرأي لا تقوده.',
        maana='المعنى أنّ الارتباطات تدعم السردين ولا تثبت أيًّا منهما، لأنّ التغطية والرأي '
              'يتحرّكان معًا على أي من الحسابين. والبحث الذي يفصل بينهما يبحث عن حالات '
              'تغيّرت فيها التغطية لأسباب لا صلة لها بالرأي: إدخال صحيفة إلى بعض البلدات '
              'دون غيرها، أو وصول قناة إلى بعض الشبكات بمحض عقد، أو تغيير مالك خطًّا '
              'تحريريًّا بغتةً.',
        ahammiyya='في مجال التاريخ والنظام المدني هذه المادة في مستوى الخلاف: الخلاصة '
                  'المدفوع عنها أنّ التأثير يسير في الاتّجاهين على مقاييس زمنية مختلفة، '
                  'فالتغطية تشكّل الانتباه في أسابيع، والجماهير تشكّل التغطية في سنوات.',
        sila='في اختبار سات يُسأل عن تصميم البحث الذي يفصل بين فرضيتين وعن موقف الكاتب. '
             'والفخّ الشائع أن يُقرأ الارتباط دليلًا على الاتّجاه، مع أنّ النصّ يقول إنّ '
             'الارتباط يوافق السردين. ويقترن المقطع بالمقطع العاشر بعد المئة في أسئلة '
             'النصّين المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Studies find larger effects on agenda setting than on vote share',
                   'The market account is the one the research finally supports',
                   'Influence runs both ways on different timescales, and neither simple account '
                   'survives',
                   'Selective exposure means the persuadable are the least exposed'],
             key='C', moves={'A': 'underreach', 'B': 'wrong_direction', 'D': 'near_miss'},
             why='The text gives both accounts, describes the designs that separate them, and ends '
                 'on the two-directional conclusion with its two timescales.',
             trap='B picks one account where the text says neither simple version survives.'),
        dict(stem='According to the text, why do correlations fail to settle the question?',
             opts=['Because coverage and opinion move together on either account',
                   'Because the effects on turnout are usually modest in size',
                   'Because outlets move toward their audiences over time',
                   'Because the persuadable are the least exposed to coverage'],
             key='A', moves={'B': 'near_miss', 'C': 'detail_swap', 'D': 'detail_swap'},
             why='The text says both accounts are supported by correlations and neither is '
                 'established by them, since the two series move together either way.',
             trap='C names one of the findings rather than the reason correlation is '
                  'uninformative.'),
        dict(claim='the decisive research depends on coverage changing for reasons outside '
                   'opinion',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'decisive research depends on coverage changing for reasons outside opinion?',
             opts=[Q('an editor who tries to lead will shortly have to retrench'),
                   Q('where a channel reaches some cable systems first by accident of contract'),
                   Q('Outlets move toward their audiences over time'),
                   Q('the largest measured effects appear among people with weak prior views')],
             key='B', moves={'A': 'true_not_asked', 'C': 'near_miss', 'D': 'underreach'},
             why='An accident of contract is a change in coverage with no connection to what '
                 'readers already thought, which is the design the claim describes.',
             trap='C names a finding of that research rather than the condition it requires.'),
        dict(carrier='Coverage and opinion move together on either account, so the research that '
                     'distinguishes them looks for cases where coverage changed for reasons '
                     'unrelated to opinion. Such a case therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['measures the size of the audience rather than its views',
                   'confirms the market account and rules out the other',
                   'is available only where a newspaper has closed',
                   'breaks the tie that a correlation cannot break'],
             key='D', moves={'A': 'near_miss', 'B': 'wrong_direction', 'C': 'detail_swap'},
             why='The design works because the change in coverage has no origin in opinion, which '
                 'is exactly what a correlation cannot establish.',
             trap='B assigns the result to one account where the text reports effects supporting '
                  'both.'),
        dict(target='retrench',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('retrench'),
             opts=['dig in more deeply', 'advertise more widely',
                   'cut back and retreat', 'start again from nothing'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'overreach'},
             why='An editor who loses readers by leading them must pull back, so the word names a '
                 'cutting back rather than a digging in.',
             trap='A hears the trench inside the word and reverses its sense.'),
        dict(stem='Which choice best describes the function of the sentence listing a newspaper '
                  'introduction, a cable contract and an abrupt change of line?',
             opts=['It reports the three findings of the research described',
                   'It names three ways of getting coverage to vary independently',
                   'It explains why selective exposure limits persuasion',
                   'It introduces the two simple accounts of influence'],
             key='B', moves={'A': 'near_miss', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='Each item is a case in which coverage changed for a reason unconnected to '
                 'opinion, which is what the research needs.',
             trap='A confuses the designs with the results they produced.'),
        dict(sibling='HIS-S10-L3',
             sibling_gloss='Text 2 is passage 110 of this book. It describes the Literary Digest '
                           'poll of 1936, which failed through a frame error and nonresponse bias '
                           'rather than through the size of its sample.',
             stem='Text 1 says the persuadable are the ones coverage reaches worst. Based on '
                  'Text 2, what kind of error is that?',
             opts=['A frame error, since the instrument cannot reach them',
                   'A nonresponse bias, since they decline to answer',
                   'A quota failure, since the categories were filled wrongly',
                   'A coding error, since their answers were misrecorded'],
             key='A', moves={'B': 'near_miss', 'C': 'detail_swap', 'D': 'imported'},
             why='Text 2 defines a frame error as a defect in whom the instrument reaches at all, '
                 'and the persuadable are by hypothesis outside the reach of the coverage.',
             trap='B names the other of the two errors in Text 2, which concerns who replies '
                  'rather than who is reached.'),
        dict(carrier='Studies of that kind find real effects on turnout and on vote share, usually '
                     'modest. ___ they also find the market mechanism operating.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['Therefore,', 'In other words,', 'For instance,', 'At the same time,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'restatement', 'C': 'near_miss'},
             why='Both findings come out of the same body of work and stand alongside each other '
                 'rather than one following from the other.',
             trap='A makes the market finding a consequence of the influence finding.'),
        dict(carrier='Neither of the two simple accounts survives the evidence ___ both survive in '
                     'argument.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['evidence; and', 'evidence, and', 'evidence and', 'evidence it'],
             key='B', moves={'A': 'wrong_mark', 'C': 'run_on', 'D': 'run_on'},
             why='The failure and the survival are each a full clause, so the conjunction between '
                 'them takes a comma before it.',
             trap='C omits the comma that two independent clauses require before a '
                  'conjunction.'),
        dict(goal='explain to a reader why both accounts have evidence behind them',
             notes=['Coverage shapes attention in weeks.',
                    'Audiences shape coverage in years.',
                    'Outlets move toward their audiences over time.',
                    'Studies find real but modest effects on turnout and vote share.'],
             stem='The student wants to explain to a reader why both accounts have evidence behind '
                  'them. Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['Outlets have been found to move toward their own audiences over time',
                   'Studies find real but modest effects on turnout and on vote share',
                   'Coverage has been shown to shape public attention within a few weeks',
                   'Coverage shapes attention within weeks while audiences shape coverage over '
                   'years, so each account is right on its own timescale'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'restatement'},
             why='Only this choice names the two timescales that let both accounts hold at once, '
                 'which is the explanation the goal asks for.',
             trap='D gives one direction of influence and leaves the other unaccounted for.'),
    ]))
