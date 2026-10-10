"""Humanities, Level 3: ten question sets."""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import qemit                                                            # noqa: E402

Q = '«%s»'.__mod__
FIELD, LEVEL = 'HUM', 3

SETS = []

# --- 1 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HUM-S01-L3',
    ar=dict(
        khulasa='وصف الراوي بأنّه غير موثوق، أي راوٍ للقارئ سبب في الشكّ في روايته، دعوى يجب أن '
                'تُحاجَج من الصفحة لا أن تُؤكَّد تأكيدًا. وتُقدَّم ثلاثة أنواع من الدليل عادةً، '
                'وهي مختلفة في القوّة.',
        maana='المعنى أنّ أضعفها النبرة: أن يجد القارئ الصوت كريهًا أو متخادمًا، وذلك ردّ فعل لا '
              'برهان، لأنّ الكاتب قد يقصد راويًا كريهًا دقيقًا تمامًا. والثاني التناقض الداخلي، '
              'أي موضع يخالف فيه النصّ نفسه، كتاريخ لا يصحّ وتسلسل لا يتركّب.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الدليل: والثالث والأقوى تفاوت بين ما '
                  'يرويه الراوي وكيف يستجيب غيره من الأشخاص، فإن وصف ملاحظة لطيفة وانكفأ كلّ من '
                  'في الغرفة فقد قدّم النصّ شاهدًا ثانيًا. وقد حجب جيمس الشاهد الثاني في لفّة '
                  'اللولب.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن تُتّخذ النبرة الكريهة برهانًا، مع أنّ '
             'النصّ يسمّيها ردّ فعل. ويقترن المقطع بالمقطع الحادي والثمانين في أسئلة النصّين '
             'المتقابلين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Edmund Wilson changed his mind twice in later editions',
                   'The claim rests on evidence that varies in strength',
                   'An unpleasant narrator is proof of unreliability',
                   'The Turn of the Screw was published in 1898'],
             key='B', moves={'A': 'true_not_asked', 'C': 'wrong_direction', 'D': 'underreach'},
             why='The text says the claim has to be argued from the page, names three kinds of '
                 'evidence, and ranks them from the weakest to the strongest.',
             trap='C takes the kind of evidence the text calls a response rather than a proof.'),
        dict(stem='According to the text, what makes the strongest kind of evidence?',
             opts=['A voice the reader finds self-serving',
                   'A date in the narration that cannot be right',
                   'A century of detailed critical cases',
                   'A gap between a report and how others respond'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'imported'},
             why='The text calls the third and strongest kind a discrepancy between what the '
                 'narrator reports and how other characters respond.',
             trap='B names the second kind, internal contradiction, rather than the strongest.'),
        dict(claim='the errors in The Good Soldier were put there on purpose',
             stem='Which quotation from the text most strongly supports the claim that the errors '
                  'in The Good Soldier were put there on purpose?',
             opts=[Q('a date that cannot be right and a chronology that will not assemble, and '
                     'the errors are too systematic to be accidents of composition'),
                   Q('internal contradiction, meaning a place where the text disagrees with '
                     'itself'),
                   Q('a writer may intend an unpleasant narrator to be entirely accurate'),
                   Q('the one piece of apparent confirmation comes through the governess '
                     'herself')],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation calls the errors too systematic to be accidents of composition, '
                 'which is the deliberateness the claim asserts.',
             trap='B defines the category the errors belong to without calling them '
                  'deliberate.'),
        dict(carrier='The difficulty is that James withheld the second witness, since nobody else '
                     'in the story reports anything in terms that settle it. A critic who argues '
                     'either reading must therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['rely on a second witness the text supplies',
                   'point to a date that cannot be right',
                   'rest on the account of the governess alone',
                   'treat the tone of the voice as decisive'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'near_miss'},
             why='The only apparent confirmation is said to come through the governess herself, '
                 'so both readings are built on the same single source.',
             trap='A supplies a witness the text says James withheld.'),
        dict(target='enigmatic',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('enigmatic'),
             opts=['deliberately hostile', 'resistant to settlement', 'written in a code',
                   'plainly decidable'],
             key='B', moves={'A': 'imported', 'C': 'near_miss', 'D': 'wrong_direction'},
             why='The sentence applies the word to a text whose question the honest conclusion '
                 'calls undecidable on the available evidence.',
             trap='C narrows the word to a cipher rather than an unsettled meaning.'),
        dict(stem='Which choice best describes the function of the sentence about the record of '
                  'revision?',
             opts=["It makes a critic's record into evidence itself",
                   'It defines internal contradiction for a reader',
                   'It dates the publication of the novella',
                   'It settles the argument over the governess'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The last sentence calls the record of revision a useful document about how '
                 'such arguments are made, turning changes of mind into material.',
             trap='D settles a question the text calls undecidable.'),
        dict(sibling='HUM-S01-L2',
             sibling_gloss='Text 2 is passage 81 of this book. It names first person, third '
                           'limited and omniscient as the three standard positions, says a '
                           'first-person narrator reports only what one character perceives, and '
                           'adds that deception works easily inside such a mind.',
             stem='Text 1 argues that unreliability must be shown from the page. Based on Text 2, '
                  'which choice best explains why a first-person account invites the doubt?',
             opts=['An omniscient voice can comment on two minds at once',
                   "Free indirect style borrows a character's vocabulary",
                   'Irony works easily in the omniscient position',
                   'Such a narrator reports only what one character perceives'],
             key='D', moves={'A': 'true_not_asked', 'B': 'true_not_asked', 'C': 'near_miss'},
             why='Text 2 says a first-person narrator reports only what one character perceives, '
                 'remembers or guesses, and that deception works easily inside such a mind.',
             trap='C names an effect of a position the first person does not occupy.'),
        dict(carrier='That is a response and not a proof, since a writer may intend an unpleasant '
                     'narrator to be entirely accurate. ___ the second kind is internal '
                     'contradiction, meaning a place where the text disagrees with itself.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'For example,', 'After that,', 'In other words,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'restatement'},
             why='The second sentence moves from the first kind of evidence to the second, so '
                 'the transition must mark a step in the ranking.',
             trap='A sets the second kind against the first when the text is listing them in '
                  'order.'),
        dict(carrier='Three kinds of evidence are normally offered ___ and they differ in '
                     'strength.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['offered, and', 'offered and', 'offered; and', 'offered and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying they differ in strength is independent, so the conjunction '
                 'joining it to the clause about the three kinds takes a comma.',
             trap='B runs the clause about the three kinds straight into the clause about their '
                  'strength.'),
        dict(goal='explain what an honest critic says when the evidence runs out',
             notes=['Either the governess sees ghosts or she is describing her own mind.',
                    'James withheld the second witness.',
                    'The one apparent confirmation comes through the governess herself.',
                    'A text can be enigmatic by construction rather than by accident.'],
             stem='The student wants to explain what an honest critic says when the evidence runs '
                  'out. Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['Either the governess sees ghosts or she describes her own mind',
                   'James withheld the second witness from the story',
                   'Built to withhold its second witness, the text leaves the question '
                   'undecidable',
                   'A text can be enigmatic by construction rather than by accident'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'restatement'},
             why='Only this choice joins the deliberate withholding to the conclusion the text '
                 'calls honest, which is that the question cannot be decided.',
             trap='B names the withholding without saying what follows from it.'),
    ]))

# --- 2 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HUM-S02-L3',
    ar=dict(
        khulasa='لم تبق مخطوطة لأيّ رواية أتمّتها جين أوستن، ما يجعل استثناءً واحدًا ثمينًا: '
                'فصلان من الإقناع بخطّ يدها، وهما الفصلان الذين رمتهما. والنسخة المنشورة تحمل '
                'المشهد المشهور الذي يكتب فيه الكابتن ونتورث رسالة وهو يسمع حوارًا ليس طرفًا '
                'فيه.',
        maana='المعنى أنّ الفصل الملغى يعالج المصالحة نفسها بمقابلة متكلّفة يرتّبها طرف ثالث، '
              'ووجود النسختين يُري القارئ قرارًا وهو يُتَّخذ: في المسوّدة يُروى الشعور ثمّ '
              'يتناقش فيه المعنيّون، وفي التنقيح يُؤدّى في غرفة عامّة وحوارَان يجريان في وقت '
              'واحد.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الدليل: المضمون العاطفي واحد والطريقة '
                  'مختلفة تمامًا، والنسخة الثانية تحوّل ونتورث من رجل يشرح نفسه إلى رجل يُسمَع '
                  'عرضًا. وهذا النوع من التحوّل يزعمه النقّاد عن الكتّاب عمومًا، وهنا يمكن '
                  'إظهاره.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن النصّين '
             'المتقابلين. والفخّ المتوقّع هنا أن يُستخرج من المخطوطة قصدٌ مُعلن، مع أنّ النصّ '
             'يقصر ما تُثبته على وجود البديل ورفضه. ويقترن المقطع بالمقطع الثاني والثمانين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Austen died a few months after finishing the novel',
                   'The pages are now in the British Library in facsimile',
                   'Two surviving drafts let a revision be shown rather than asserted',
                   'The manuscript settles what Austen intended by the change'],
             key='C', moves={'A': 'true_not_asked', 'B': 'underreach', 'D': 'overreach'},
             why='The text says having both chapters lets a reader see a decision being made, '
                 'and that what critics usually assert about writers can here be shown.',
             trap='D claims an intention the text says no later statement supplies.'),
        dict(stem='According to the text, how does the canceled chapter handle the '
                  'reconciliation?',
             opts=['Through an interview arranged by a third party',
                   'Through a letter written in a public room',
                   'Through two conversations running at once',
                   'Through a scene the family later edited'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says the canceled chapter handles the same reconciliation through an '
                 'awkward interview arranged by a third party.',
             trap='B gives the method of the published version instead.'),
        dict(claim='the revision changes what kind of man Wentworth is',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'revision changes what kind of man Wentworth is?',
             opts=[Q('Almost no manuscript survives of any completed Jane Austen novel, which '
                     'makes one exception valuable'),
                   Q('the second version turns Wentworth from a man who explains himself into a '
                     'man who is overheard'),
                   Q('The canceled pages are undated and the order of composition has to be '
                     'inferred from the paper and the stitching'),
                   Q('Having both lets a reader see a decision being made')],
             key='B', moves={'A': 'true_not_asked', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation names the change in the man himself, from one who explains '
                 'himself to one who is overheard.',
             trap='D says the comparison is possible without saying what it shows.'),
        dict(carrier='What the evidence establishes is that the alternative existed and was '
                     'rejected, which is a narrower claim than most of what is written about '
                     'authorial intention. A critic who wanted to say why Austen rejected it '
                     'would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['cite the date on the canceled pages',
                   'quote a later statement of intention',
                   'read the facsimile in the British Library',
                   'be going beyond what the pages show'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'near_miss'},
             why='The text limits what the manuscript establishes to the existence and rejection '
                 'of the alternative, and says no later statement of intention survives.',
             trap='B calls for a document the text says does not exist.'),
        dict(target='ambivalent',
             stem='As used in the text, what does the word %s most nearly mean?'
                  % Q('ambivalent'),
             opts=['openly hostile', 'carelessly vague', 'pulled two ways', 'firmly decided'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'wrong_direction'},
             why='The word describes a writer whom the draft shows holding both versions, with '
                 'the draft recording the division but not its reason.',
             trap='D gives the settled state that a surviving alternative rules out.'),
        dict(stem='Which choice best describes the function of the sentence that limits what a '
                  'manuscript can answer?',
             opts=['It dates the composition of the two chapters',
                   'It opens the account of what the pages leave out',
                   'It defines a canceled chapter for a reader',
                   'It abandons the comparison just drawn'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence is followed by the undated pages, the inferred order, the absent '
                 'statement of intention and the family editing, which are the gaps it '
                 'announces.',
             trap='D discards a comparison the text goes on to call firm.'),
        dict(sibling='HUM-S02-L2',
             sibling_gloss='Text 2 is passage 82 of this book. It sets out four kinds of evidence '
                           'for a motive, calls a motive supplied by exposition settled and '
                           'inert, and says a motive built from action and silence stays open.',
             stem='Text 1 contrasts a reported feeling with an enacted one. Based on Text 2, '
                  'which choice best names the change the revision makes?',
             opts=['It trades exposition for action and silence',
                   'It supplies interiority the draft withheld',
                   'It states the motive the reader must infer',
                   'It repeats a gesture often enough to show a shape'],
             key='A', moves={'B': 'wrong_direction', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='Text 2 calls a motive given by exposition settled and inert and one built from '
                 'action and silence open, which is the exchange the revision makes.',
             trap='C moves the revision toward the direct statement it replaces.'),
        dict(carrier='In the draft the feeling is reported and then discussed by the parties '
                     'concerned. ___ in the revision it is enacted in a public room, with two '
                     'conversations running at once.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['As a result,', 'For example,', 'In other words,', 'By contrast,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'restatement'},
             why='The second sentence sets the revision against the draft it replaced, so the '
                 'transition must mark a contrast.',
             trap='C treats the enacted scene as a restatement of the reported one.'),
        dict(carrier='The emotional content is the same ___ and the method is entirely '
                     'different.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['same and', 'same, and', 'same; and', 'same and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the method is independent, so the conjunction joining it to '
                 'the clause about the emotional content takes a comma.',
             trap='A runs the clause about the content straight into the clause about the '
                  'method.'),
        dict(goal='explain what makes the claim about this revision unusually firm',
             notes=["Two chapters of Persuasion survive in Austen's own hand.",
                    'They are the chapters she threw away.',
                    'The shift is the kind of thing critics assert about writers in general.',
                    'What the evidence establishes is that the alternative existed and was '
                    'rejected.'],
             stem='The student wants to explain what makes the claim about this revision '
                  'unusually firm. Which choice most effectively uses relevant information from '
                  'the notes to accomplish that goal?',
             opts=['Two chapters of Persuasion survive in her own hand',
                   'The surviving chapters are the ones she threw away',
                   'Critics assert such shifts about writers in general',
                   'The rejected alternative survives, so the choice is documented rather than '
                   'asserted'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'restatement'},
             why='Only this choice joins the surviving alternative to the difference between a '
                 'documented choice and the usual assertion about a writer.',
             trap='C names what critics usually do without saying what the pages add.'),
    ]))

# --- 3 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='HUM-S03-L3',
    ar=dict(
        khulasa='كانت دعوى أنّ مسرحية مليئة بصور المرض مسألة انطباع، والأداة التي غيّرت ذلك هي '
                'الكشّاف، أي فهرس يُحصي كلّ ورود لكلّ كلمة في نصّ مع سياقها. وقد جُمعت كشّافات '
                'الكتاب المقدّس يدًا في القرون الوسطى.',
        maana='المعنى أنّ من بيده فهرس كهذا يستطيع أن يفحص هل ينجو الانطباع من ملامسة النصّ. وقد '
              'أدّت كارولين سبرجون العمل لشكسبير سنة ألف وتسعمئة وخمس وثلاثين، فصنّفت آلاف '
              'الصور بالموضوع وقارنت الأعداد بين المسرحيّات.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الدليل: بعض النتائج أكّد ما أحسّه '
                  'القرّاء، فهاملت يحمل كثافة غير معتادة من صور السَّقَم والعَطَن، وبعضها صحّح '
                  'الانطباع. وما يُثبته العدّ هو الحضور والتوزيع والمقارنة، وما لا يُثبته هو '
                  'الأثر الجماليّ.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُحسب العدّ بديلًا عن القراءة، مع أنّ '
             'النصّ يقرنهما معًا. ويقترن المقطع بالمقطع الثالث والثمانين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Spurgeon published her classification in 1935',
                   'A concordance to Shakespeare took sixteen years to compile',
                   'Counting has replaced reading in literary study',
                   'Counting locates what reading then has to interpret'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'wrong_direction'},
             why='The text says counting establishes presence, distribution and comparison but '
                 'cannot establish aesthetic effect, and that the two methods have to be used '
                 'together.',
             trap='C replaces reading with counting when the text pairs them.'),
        dict(stem='According to the text, what did the counting confirm about Hamlet?',
             opts=['That its images were classified by subject',
                   'An unusual density of images of sickness',
                   'That a word in it appears forty times',
                   'That its categories reflect a later period'],
             key='B', moves={'A': 'near_miss', 'C': 'imported', 'D': 'detail_swap'},
             why='The text says some results confirmed what readers had felt, and that Hamlet '
                 'does carry an unusual density of images of sickness and rot.',
             trap='D gives the criticism made of the categories rather than a confirmed result.'),
        dict(claim='a count leaves the working of an image unsettled',
             stem='Which quotation from the text most strongly supports the claim that a count '
                  'leaves the working of an image unsettled?',
             opts=[Q('Concordances to the Bible were compiled by hand in the Middle Ages'),
                   Q('Anyone with such an index can check whether an impression survives contact '
                     'with the text'),
                   Q('A count shows that a word appears forty times; it cannot show that the '
                     'forty occurrences work on a reader'),
                   Q("Spurgeon's work has been criticized for categories that reflect her own "
                     'period more than the plays')],
             key='C', moves={'A': 'true_not_asked', 'B': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation grants the count its forty occurrences and denies it any showing '
                 'of how those occurrences work on a reader.',
             trap='B gives what an index can establish rather than what it leaves open.'),
        dict(carrier='What counting establishes is presence, distribution and comparison, and '
                     'those are not small things. A critic who claimed on counts alone that an '
                     'image carries the weight of a scene would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['be asserting what the method cannot show',
                   'have confirmed what readers had felt',
                   'need a concordance compiled by hand',
                   'be searching a corpus printed before 1700'],
             key='A', moves={'B': 'wrong_direction', 'C': 'imported', 'D': 'imported'},
             why='Counting is said to establish presence, distribution and comparison and to be '
                 'unable to show aesthetic effect, which is what weight in a scene is.',
             trap='B treats a confirmed density as a demonstration of effect.'),
        dict(target='aesthetic',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('aesthetic'),
             opts=['relating to a category', 'relating to a count', 'relating to a period',
                   'relating to the effect on a reader'],
             key='D', moves={'A': 'near_miss', 'B': 'wrong_direction', 'C': 'near_miss'},
             why='The text glosses the term in the next sentences as whether the occurrences work '
                 'on a reader and whether a placed image carries more weight.',
             trap='B attaches the word to the counting it is set against.'),
        dict(stem='Which choice best describes the function of the sentence about the Victorian '
                  'clergyman?',
             opts=['It defines a corpus for a reader',
                   'It reports the year Spurgeon published',
                   'It measures the old cost of the tool',
                   'It argues that hand counting was better'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'imported'},
             why='The sixteen years of family labor sit between the medieval concordances and the '
                 'statement that the computer made the method cheap.',
             trap='D prefers the hand method, which the text only dates.'),
        dict(sibling='HUM-S03-L2',
             sibling_gloss='Text 2 is passage 83 of this book. It separates simile, metaphor and '
                           'metonymy by the work each does and says what all three share is '
                           'economy, because a vivid image makes the reader supply the detail.',
             stem='Text 1 limits what counting can establish. Based on Text 2, which choice best '
                  'describes what a reader has to supply instead?',
             opts=['A list of the names of the figures',
                   'The detail that the image leaves to be filled in',
                   'A count of every occurrence of a word',
                   'An index of the words with their contexts'],
             key='B', moves={'A': 'near_miss', 'C': 'restatement', 'D': 'restatement'},
             why='Text 2 says a vivid image makes the reader supply the detail, so that four '
                 'words do the work of a paragraph.',
             trap='C offers the counting that Text 1 has already set aside.'),
        dict(carrier='Some results confirmed what readers had felt. ___ others corrected it.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'As a result,', 'In other words,', 'For example,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The second sentence sets the corrected impressions against the confirmed ones, '
                 'so the transition must mark a contrast.',
             trap='B makes the corrections follow from the confirmations.'),
        dict(carrier='The two methods therefore have to be used together ___ and that is the '
                     'current practice.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['together and', 'together; and', 'together, and', 'together and,'],
             key='C', moves={'A': 'run_on', 'B': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying that is the current practice is independent, so the '
                 'conjunction joining it to the clause about the two methods takes a comma.',
             trap='A runs the clause about the methods straight into the clause about the '
                  'practice.'),
        dict(goal='explain why counting usually comes first',
             notes=['Counting establishes presence, distribution and comparison.',
                    'A count cannot show that the occurrences work on a reader.',
                    'The practice is counting to find where to look and reading to say what is '
                    'there.',
                    'The counting is usually done first because it is cheap.'],
             stem='The student wants to explain why counting usually comes first. Which choice '
                  'most effectively uses relevant information from the notes to accomplish that '
                  'goal?',
             opts=['Cheap counting points to the places that careful reading then has to describe',
                   'Counting establishes presence, distribution and comparison',
                   'The counting is usually done first because it is cheap',
                   'A count leaves the working of the occurrences unshown'],
             key='A', moves={'B': 'underreach', 'C': 'restatement', 'D': 'underreach'},
             why='Only this choice joins the cheapness to the division of labor, in which the '
                 'count finds the place and the reading says what is there.',
             trap='C gives the reason without saying what the counting is for.'),
    ]))

# --- 4 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='HUM-S04-L3',
    ar=dict(
        khulasa='التقطيع، أي تعليم المقاطع المنبورة وغير المنبورة في السطر، يبدو أقلّ المهارات '
                'الأدبية أثرًا، وقد أنتج واحدة من أمتن نتائج المجال. فمسرحيّات شكسبير لا '
                'تُؤرَّخ بصفحات عنوانها، وأكثرها غير موجود، وإنّما أُقيم ترتيب كتابتها بعدّ '
                'ملامح وزنية.',
        maana='المعنى أنّ ثلاثة ملامح قابلة للقياس تتغيّر باطّراد عبر المسيرة: نسبة الأسطر التي '
              'تمضي بلا وقفة في آخرها ترتفع، ونسبة النهايات المؤنّثة، أي أسطر تنتهي بمقطع زائد '
              'غير منبور، ترتفع من أقلّ من عشرة في المئة إلى أكثر من ثلاثين.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الدليل: عدّ هذه الملامح في مسرحيّات '
                  'تواريخها معلومة من دليل خارجيّ يعطي منحنًى تُنزَل عليه مسرحية غير مؤرَّخة، '
                  'والطريقة تضع المسرحيّات في ترتيب يوافق الدليل الخارجي حيث وُجد، وذلك هو '
                  'اختبارها.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن تُنسب إلى الطريقة قدرةٌ على التفريق بين '
             'التشارك والتطوّر، مع أنّ النصّ ينفيها. ويقترن المقطع بالمقطع الرابع والثمانين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Counting the meter buys a chronology and nothing more',
                   'Feminine endings rise across the career',
                   'Scansion can tell collaboration from development',
                   'The late style is better than the early one'],
             key='A', moves={'B': 'underreach', 'C': 'wrong_direction', 'D': 'overreach'},
             why='The text says the counting establishes the order of the plays, lists the limits '
                 'strictly, and ends by saying what scansion buys is a chronology.',
             trap='C grants the method a discrimination the text says it cannot make.'),
        dict(stem='According to the text, how far do feminine endings rise?',
             opts=['From under ten percent to about twenty',
                   'From about thirty percent to over fifty',
                   'From under ten percent to over thirty',
                   'From two or three plays to several more'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'imported'},
             why='The text says the proportion of feminine endings rises from under ten percent '
                 'in the early plays to over thirty in the late ones.',
             trap='A stops the rise well short of the figure the text gives.'),
        dict(claim='the method is tested against evidence from outside the plays',
             stem='Which quotation from the text most strongly supports the claim that the method '
                  'is tested against evidence from outside the plays?',
             opts=[Q('The proportion of lines that run on without a pause at the end rises'),
                   Q('Modern work adds function word frequencies and rare collocations to the '
                     'metrical measures'),
                   Q('The method dates a style, not a manuscript, so a play revised late looks '
                     'late'),
                   Q('The method puts the plays in an order that agrees with external evidence '
                     'wherever external evidence exists, which is the test of it')],
             key='D', moves={'A': 'true_not_asked', 'B': 'true_not_asked', 'C': 'near_miss'},
             why='The quotation says the order agrees with external evidence wherever such '
                 'evidence exists and calls that agreement the test of the method.',
             trap='C names a limit of the method rather than the check on it.'),
        dict(carrier='The method dates a style, not a manuscript, so a play revised late looks '
                     'late. A play written early and reworked in the final years would therefore '
                     '___',
             stem='Which choice most logically completes the text?',
             opts=['fall at the start of the curve', 'be placed later than it was written',
                   'show under ten percent feminine endings',
                   'settle the authorship of its contested scenes'],
             key='B', moves={'A': 'wrong_direction', 'C': 'wrong_direction', 'D': 'imported'},
             why='A late revision carries the late features the counting measures, so the curve '
                 'puts the play where its style sits rather than where its writing began.',
             trap='A puts the play where it was written rather than where its style falls.'),
        dict(target='understated',
             stem='As used in the text, what does the word %s most nearly mean?'
                  % Q('understated'),
             opts=['held back in effect', 'incompletely described', 'stated too briefly',
                   'loudly insistent'],
             key='A', moves={'B': 'imported', 'C': 'near_miss', 'D': 'wrong_direction'},
             why='The word is set against an emphatic early style in a sentence that refuses to '
                 'rank them, so it names restraint rather than a fault.',
             trap='D gives the opposite quality, the one the sentence contrasts it with.'),
        dict(stem='Which choice best describes the function of the sentence saying the limits are '
                  'strict?',
             opts=['It defines a feminine ending for a reader',
                   'It reports what modern work has added',
                   'It abandons the chronology just built',
                   'It opens the account of what the counting misses'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'wrong_direction'},
             why='The sentence is followed by the dating of a style rather than a manuscript, the '
                 'inability to separate collaboration from development, and the silence on '
                 'quality.',
             trap='C discards a chronology the text goes on to call what scansion buys.'),
        dict(sibling='HUM-S04-L2',
             sibling_gloss='Text 2 is passage 84 of this book. It explains that enjambment runs a '
                           'sentence past the end of a line without a pause, setting the grammar '
                           'against the rhythm, and that a caesura stops the voice where the '
                           'meter says to continue.',
             stem='Text 1 counts three metrical features across a career. Based on Text 2, which '
                  'choice best describes what the first of them does in a line?',
             opts=['It stops the voice where the meter says to continue',
                   'It puts a stress where none was expected',
                   'It sets the grammar against the rhythm',
                   'It establishes the pattern inside the poem'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'near_miss'},
             why='Text 2 says enjambment runs a sentence past the end of a line without a pause, '
                 'setting the grammar against the rhythm and producing a small suspension.',
             trap='A describes the caesura, which is the opposite device.'),
        dict(carrier='Scansion looks like the least consequential of literary skills. ___ it has '
                     'produced one of the most solid results in the field.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['As a result,', 'Even so,', 'In other words,', 'For instance,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The second sentence sets a solid result against the appearance of '
                 'inconsequence, so the transition must mark a concession.',
             trap='A makes the result follow from the low opinion of the skill.'),
        dict(carrier='The method dates a style ___ and a play revised late looks late.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['style and', 'style; and', 'style and,', 'style, and'],
             key='D', moves={'A': 'run_on', 'B': 'wrong_mark', 'C': 'misplaced'},
             why='The clause about the play revised late is independent, so the conjunction '
                 'joining it to the clause about dating a style takes a comma.',
             trap='A runs the clause about the style straight into the clause about the '
                  'revision.'),
        dict(goal='explain what every argument about development depends on',
             notes=['The plays are dated by something other than their title pages.',
                    'Three metrical features change steadily across the career.',
                    'Counting them against plays with known dates gives a curve.',
                    'What scansion buys is a chronology.'],
             stem='The student wants to explain what every argument about development depends on. '
                  'Which choice most effectively uses relevant information from the notes to '
                  'accomplish that goal?',
             opts=['Three metrical features change steadily across the career',
                   'Counting the meter supplies the order that every later argument rests on',
                   'The plays are dated by something other than their title pages',
                   'What scansion buys for a reader is a chronology'],
             key='B', moves={'A': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice joins the counting to the chronology and the chronology to the '
                 'arguments the text says depend on it.',
             trap='D names the chronology without saying what rests on it.'),
    ]))

# --- 5 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HUM-S05-L3',
    ar=dict(
        khulasa='المسرحية المطبوعة نصّ، أمّا العرض فحادثة، والسجلّ الوثائقيّ للحوادث أرقّ وأغرب. '
                'وأنفع وثيقة هو كتاب التلقين، أي نسخة عمل يعلّم عليها مدير المسرح في عرض واحد، '
                'وتحفظ المجموعات الكبرى آلافًا منها.',
        maana='المعنى أنّ كتاب التلقين يحمل الحذوفات، والدخول والخروج كما أُدّي فعلًا، وإشارات '
              'الموسيقى والمؤثّرات، ومواضع الأثاث، وأحيانًا توقيت كلّ فصل بالقلم في الهامش. '
              'وأكثر ما يكشفه هو مدى الحذف.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الدليل: عروض القرن التاسع عشر لشكسبير '
                  'كانت تحذف ثلث الأسطر وتعيد ترتيب المشاهد وتغيّر الخاتمة أحيانًا، وكتب '
                  'التلقين تُظهر بدقّة ما حُذف ومتى عاد. وقد مُثّل هاملت قرنًا في نسخة أقصر من '
                  'المطبوع بساعة.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن النصّين '
             'المتقابلين. والفخّ المتوقّع هنا أن تُحسب المراجعات والمذكّرات موثوقة حيث يسكت '
             'كتاب التلقين، مع أنّ النصّ يسمّيها غير موثوقة. ويقترن المقطع بالمقطع الخامس '
             'والثمانين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Hamlet was performed for a century in a shorter version',
                   'The record establishes what was done and rarely how it felt',
                   'Reviews and memoirs are reliable where promptbooks fail',
                   'Recordings create no new problems for the record'],
             key='B', moves={'A': 'underreach', 'C': 'wrong_direction', 'D': 'wrong_direction'},
             why='The text calls the promptbook the most useful document, lists its gaps, and '
                 'concludes that the record is good enough to establish what was done and almost '
                 'never how it felt.',
             trap='C trusts documents the text calls unreliable in the ordinary ways.'),
        dict(stem='According to the text, what do early theatrical photographs show?',
             opts=['The timings of each act in pencil',
                   'The positions of the furniture on stage',
                   'The delivery of a particular line', 'Poses rather than performances'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'wrong_direction'},
             why='The text says photographs from the later nineteenth century show poses rather '
                 'than performances, because the exposures were too long for movement.',
             trap='B names something the promptbook records rather than the photographs.'),
        dict(claim='the printed play misstates what audiences actually saw',
             stem='Which quotation from the text most strongly supports the claim that the '
                  'printed play misstates what audiences actually saw?',
             opts=[Q('Nineteenth-century productions of Shakespeare routinely removed a third of '
                     'the lines, rearranged scenes and sometimes changed the ending'),
                   Q('A promptbook describes what was planned and revised in rehearsal'),
                   Q('The most useful document is the promptbook, meaning a working copy marked '
                     'up by the stage manager of one production'),
                   Q('Reviews, letters and memoirs fill some of the space, and all three are '
                     'unreliable in the ordinary and familiar ways')],
             key='A', moves={'B': 'near_miss', 'C': 'true_not_asked', 'D': 'true_not_asked'},
             why='The quotation reports a third of the lines removed, scenes rearranged and '
                 'endings changed as routine, which puts the performance at a distance from the '
                 'print.',
             trap='B names what a promptbook describes rather than the gap between print and '
                  'stage.'),
        dict(carrier='It does not record how a line was delivered, since no notation for that '
                     'exists. A historian who wanted the sound of a performance given in the '
                     'eighteen nineties would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['consult the promptbook of that production',
                   'count the timings written in the margin',
                   'be left with reviews, letters and memoirs',
                   'study a photograph of the final scene'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'near_miss'},
             why='The promptbook is said to carry no notation for delivery, and reviews, letters '
                 'and memoirs are the documents the text offers to fill some of that space.',
             trap='A returns to the document the text says is silent on delivery.'),
        dict(target='canonical',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('canonical'),
             opts=['approved by a church', 'standard and received', 'cut for performance',
                   'written by hand'],
             key='B', moves={'A': 'imported', 'C': 'wrong_direction', 'D': 'imported'},
             why='The word marks the printed text a reader is likely to know, against the shorter '
                 'versions the promptbooks show were actually performed.',
             trap='C gives the acting version the canonical text is contrasted with.'),
        dict(stem='Which choice best describes the function of the sentence about Hamlet and the '
                  'hour?',
             opts=['It fixes the size of the cutting in time',
                   'It defines a promptbook for a reader',
                   'It reports what reviews and memoirs add',
                   'It denies that the cuts were ever restored'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence follows the account of a third of the lines removed and turns that '
                 'proportion into an hour of performance.',
             trap='D denies a restoration the previous sentence records.'),
        dict(sibling='HUM-S05-L2',
             sibling_gloss='Text 2 is passage 85 of this book. It treats the habits of '
                           'Elizabethan playwriting as consequences of the building and says that '
                           'cutting an aside, or lighting a soliloquy as private thought, changes '
                           'the relationship the line was written for.',
             stem='Text 1 reports that productions cut a third of the lines. Based on Text 2, '
                  'which choice best explains what such a cut can cost?',
             opts=['A scene had to end with an exit for lack of a curtain',
                   'The discovery space let a sleeper be revealed',
                   'Place had to be established in the dialogue',
                   'Cutting an aside changes the relation the line was written for'],
             key='D', moves={'A': 'true_not_asked', 'B': 'true_not_asked', 'C': 'near_miss'},
             why='Text 2 says cutting an aside, or lighting a soliloquy as private thought, '
                 'changes the relationship the line was written for.',
             trap='C names a condition of the writing rather than a cost of removing a line.'),
        dict(carrier='A promptbook describes what was planned and revised in rehearsal rather '
                     'than what happened on a particular night. ___ it records nothing of how a '
                     'line was delivered.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'As a result,', 'What is more,', 'In other words,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'restatement'},
             why='The second sentence adds a second gap to the one just named, so the transition '
                 'must mark an addition rather than a contrast.',
             trap='B makes the silence on delivery follow from the planning.'),
        dict(carrier='A printed play is a text ___ and a performance is an event.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['text, and', 'text and', 'text; and', 'text and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying a performance is an event is independent, so the conjunction '
                 'joining it to the clause about the printed play takes a comma.',
             trap='B runs the clause about the text straight into the clause about the event.'),
        dict(goal='explain the exact reach of the documentary record of performance',
             notes=['A promptbook carries the cuts, the entrances, the cues and the furniture.',
                    'It describes what was planned and revised in rehearsal.',
                    'No notation exists for how a line was delivered.',
                    'The record is good enough to establish what was done.'],
             stem='The student wants to explain the exact reach of the documentary record of '
                  'performance. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['A promptbook carries the cuts, the entrances, the cues and the furniture',
                   'The record is good enough to establish what was done',
                   'The documents fix the staging exactly and leave the delivery unrecorded',
                   'A promptbook describes what was planned and revised in rehearsal'],
             key='C', moves={'A': 'underreach', 'B': 'restatement', 'D': 'underreach'},
             why='Only this choice states both halves of the reach: the staging the documents fix '
                 'and the delivery for which no notation exists.',
             trap='A lists what one document carries without saying what the record leaves out.'),
    ]))

# --- 6 -------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HUM-S06-L3',
    ar=dict(
        khulasa='دعوى أنّ نوعًا أدبيًّا بدأ بكتاب معيّن دعوى ببليوغرافية قبل أن تكون نقديّة، '
                'والببليوغرافيا، أي قائمة منهجيّة بكلّ ما نُشر من نوع في مدّة، هي ما يفحصها. '
                'وفهارس الطبع الإنجليزي المبكّر تُحصي عشرات الآلاف من المواد بتواريخها '
                'وطابعيها وأحجامها.',
        maana='المعنى أنّ فهارس المكتبات المتجوّلة في القرن الثامن عشر تُظهر ما استُعير فعلًا، '
              'وهو سؤال آخر غير ما طُبع. وهذه المصادر تسند الرواية المعتادة عن الرواية القوطية '
              'سندًا حسنًا: ظهر قصر أوترانتو سنة ألف وسبعمئة وأربع وستّين معروضًا ترجمةً من '
              'مخطوط إيطالي.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الدليل: الخطر الدائم هو تحيّز البقاء، '
                  'أي التشويه الناشئ من دراسة ما بقي محفوظًا وحده. فالمطبوع الرخيص يبقى بقاءً '
                  'سيّئًا جدًّا، والكتيّبات والأغاني المفردة والقصص المسلسلة قُرئت حتّى '
                  'تهلّلت.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُتّخذ السجلّ نفسَ الشيء المدروس، مع أنّ '
             'النصّ يسمّيه عيّنة ذات تحيّز معلوم. ويقترن المقطع بالمقطع السادس والثمانين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The Castle of Otranto appeared in 1764 as a translation',
                   'Cheap print from the period survives very badly',
                   'A history of a form is a history of what survived',
                   'The printed record is the thing itself'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'wrong_direction'},
             why='The text tests the usual account against bibliography, names survival bias as '
                 'the hazard throughout, and ends by calling any such history a history of '
                 'surviving instances.',
             trap='D takes the record for the thing, which the text says historians refuse to '
                  'do.'),
        dict(stem='According to the text, what do circulating library catalogues show?',
             opts=['What was actually borrowed', 'What printers charged for a format',
                   'Which first appearances moved earlier',
                   'Which collectors thought a work respectable'],
             key='A', moves={'B': 'imported', 'C': 'detail_swap', 'D': 'detail_swap'},
             why='The text says circulating library catalogues from the eighteenth century show '
                 'what was actually borrowed, a different question from what was printed.',
             trap='C names what newspaper digitization has done rather than what the catalogues '
                  'show.'),
        dict(claim='the dates fit a form being established',
             stem='Which quotation from the text most strongly supports the claim that the dates '
                  'fit a form being established?',
             opts=[Q('Catalogues of early English printing list tens of thousands of items with '
                     'dates, printers and formats'),
                   Q('The pattern of a first instance, a gap, and then a rush of derivative work '
                     'is what one would expect if a form were being established, and it can be '
                     'seen in the dates'),
                   Q('much of what remains survives because a collector thought it respectable'),
                   Q('Newspaper digitization has moved several supposed first appearances earlier '
                     'by decades')],
             key='B', moves={'A': 'true_not_asked', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation names the pattern of a first instance, a gap and a rush of '
                 'imitation and says it can be seen in the dates.',
             trap='D reports a correction to the dates rather than the pattern they show.'),
        dict(carrier='Chapbooks, broadside ballads and the serial fiction of the eighteenth '
                     'century were read to pieces. A claim that a device first appeared in a '
                     'particular novel therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['rests on the whole of what was printed',
                   'can be checked against trade records',
                   'has been confirmed by digitization',
                   'means it appears first in what survives'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'wrong_direction'},
             why='The text draws exactly this conclusion, that such a claim means the device '
                 'first appears in the novels we still have.',
             trap='A claims a completeness the record is said to lack.'),
        dict(target='derivative',
             stem='As used in the text, what does the word %s most nearly mean?'
                  % Q('derivative'),
             opts=['able to be calculated', 'poor in quality', 'modeled on an earlier work',
                   'original in its design'],
             key='C', moves={'A': 'imported', 'B': 'near_miss', 'D': 'wrong_direction'},
             why='The word describes the imitations that follow the first instance within twenty '
                 'years, so it names work taken from a model.',
             trap='B treats the word as a verdict when the text uses it to mark descent.'),
        dict(stem='Which choice best describes the function of the sentence naming survival bias?',
             opts=['It dates the first edition of the novel',
                   'It names the hazard that qualifies the account',
                   'It defines a circulating library catalogue',
                   'It abandons the bibliographic method'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence follows the account the sources support and introduces the badly '
                 'surviving cheap print that limits what the record can show.',
             trap='D discards a method the text goes on to use with a stated correction.'),
        dict(sibling='HUM-S06-L2',
             sibling_gloss='Text 2 is passage 86 of this book. It says a convention tells a '
                           'reader how to read and creates the possibility of significant '
                           'deviation, and that genres drift because every successful breach '
                           'becomes the next convention.',
             stem='Text 1 traces a rush of imitation after one book. Based on Text 2, which '
                  'choice best explains what the imitations were building?',
             opts=['A rule that a later work could break on purpose',
                   'A list of rules drawn up by a London club',
                   'A record of what was actually borrowed',
                   'A set of items with dates, printers and formats'],
             key='A', moves={'B': 'near_miss', 'C': 'restatement', 'D': 'restatement'},
             why='Text 2 says a convention tells a reader how to read and creates the possibility '
                 'of significant deviation, and that every successful breach becomes the next '
                 'convention.',
             trap='B gives one later codification rather than what the imitations established.'),
        dict(carrier='Those sources support the usual account of the gothic novel reasonably '
                     'well. ___ the hazard throughout is survival bias, meaning the distortion '
                     'caused by studying only what happened to be preserved.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['As a result,', 'For example,', 'In other words,', 'Even so,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'restatement'},
             why='The second sentence sets a standing hazard against the support the sources '
                 'give, so the transition must mark a concession.',
             trap='A makes the bias follow from the support the sources provide.'),
        dict(carrier='Catalogues of early English printing list tens of thousands of items ___ '
                     'and trade records survive.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['items and', 'items, and', 'items; and', 'items and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying trade records survive is independent, so the conjunction '
                 'joining it to the clause about the catalogues takes a comma.',
             trap='A runs the clause about the catalogues straight into the clause about trade '
                  'records.'),
        dict(goal='explain why an honest history of a popular form says so at the start',
             notes=['Cheap print survives very badly.',
                    'Much of what remains survives because a collector thought it respectable.',
                    'Historians treat the record as a sample with a known bias.',
                    'Digitization has moved several first appearances earlier by decades.'],
             stem='The student wants to explain why an honest history of a popular form says so '
                  'at the start. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['Cheap print from the period survives very badly',
                   'Much of what remains survives because a collector thought it respectable',
                   'Digitization has moved several first appearances earlier',
                   'Because the surviving print is a biased sample, every first appearance is '
                   'provisional'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'true_not_asked'},
             why='Only this choice joins the bias in what survives to the standing provisionality '
                 'of any claim about a first appearance.',
             trap='C gives one revision without saying why more should be expected.'),
    ]))

# --- 7 -------------------------------------------------------------- DBCADCBACA
SETS.append(dict(
    id='HUM-S07-L3',
    ar=dict(
        khulasa='اللوحة جسم مادّيّ كما هي صورة، والأجسام المادّية تُفحَص، فثلاث تقنيّات مخبريّة '
                'تؤدّي معظم العمل. فالتصوير بالأشعّة السينيّة يُظهر الخُضُب الأكثف وبنية '
                'الحامل، فتظهر صورة طُمست بعد خمسين سنة شبحًا.',
        maana='المعنى أنّ الانعكاسيّة بالأشعّة تحت الحمراء، أي طريقة ترى عبر طبقات الطلاء العليا '
              'إلى الرسم تحتها، تكشف أفكار الفنّان الأولى ومنها تغييرات في المواضع لم يُقصد أن '
              'تُرى. وتحليل الخُضُب يأخذ عيّنة أصغر من نقطة ويعيّن المواد التي صُنع منها '
              'الطلاء.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الدليل: كلّ تقنيّة تسند نوعًا آخر من '
                  'الدعاوى. فتحليل الخُضُب يؤرّخ: الأزرق البروسي لم يُصنَع قبل نحو سنة ألف '
                  'وسبعمئة وستّ، فلوحة تحتويه لم تُرسم قبل ذلك، وقد حُسمت نسبات كثيرة بهذه '
                  'الحقيقة وحدها.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن النصّين '
             'المتقابلين. والفخّ المتوقّع هنا أن تُنسب إلى المخبر قدرةٌ على تعيين اليد التي '
             'رسمت ضربة فرشاة، مع أنّ النصّ ينفيها. ويقترن المقطع بالمقطع السابع والثمانين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Prussian blue was manufactured only after about 1706',
                   'Museums now publish technical reports with catalogue entries',
                   'The laboratory can name the hand behind a brushstroke',
                   'Three techniques settle date and material rather than authorship'],
             key='D', moves={'A': 'underreach', 'B': 'true_not_asked', 'C': 'wrong_direction'},
             why='The text says each technique supports a different kind of claim, then says they '
                 'can show date and consistency of materials and cannot show that a particular '
                 'hand made a brushstroke.',
             trap='C gives the laboratory the one finding the text says it cannot deliver.'),
        dict(stem='According to the text, what does dendrochronology give?',
             opts=['The drawing underneath the upper paint',
                   'The earliest year the panel could carry paint',
                   'The materials from which the paint was made',
                   'A ghost of a figure painted out later'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'near_miss'},
             why='The text says dendrochronology dates a wooden panel by matching its ring '
                 'pattern against a regional record and gives the earliest year it could have '
                 'been painted on.',
             trap='C names what pigment analysis identifies rather than what the rings give.'),
        dict(claim='a single material fact can decide a long-standing question',
             stem='Which quotation from the text most strongly supports the claim that a single '
                  'material fact can decide a long-standing question?',
             opts=[Q('X-radiography shows the denser pigments and the structure of the support, '
                     'so a figure painted out fifty years later appears as a ghost'),
                   Q('Reflectography attributes, because underdrawing habits are personal and '
                     'hard to imitate'),
                   Q('Prussian blue was not manufactured before about 1706, so a picture '
                     'containing it was not painted before then, and a great many attributions '
                     'have been settled by that one fact'),
                   Q('Several paintings have changed status twice in a century as the balance of '
                     'evidence moved')],
             key='C', moves={'A': 'true_not_asked', 'B': 'near_miss', 'D': 'near_miss'},
             why='The quotation names a date for one pigment, draws the consequence for any '
                 'picture containing it, and says a great many attributions were settled by that '
                 'fact.',
             trap='B names the technique that attributes rather than the fact that settles a '
                  'date.'),
        dict(carrier='A skilled forger who uses old panels and correct pigments defeats all '
                     'three, and several have. A laboratory report finding the right date and '
                     'consistent materials therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['leaves the attribution still open', 'proves the picture authentic',
                   'identifies the underdrawing habits', 'overturns the documentary history'],
             key='A', moves={'B': 'wrong_direction', 'C': 'near_miss', 'D': 'imported'},
             why='The forger who satisfies all three techniques shows that passing them leaves '
                 'the question of the hand unsettled.',
             trap='B treats consistency with a date as proof of authorship.'),
        dict(target='reverent',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('reverent'),
             opts=['carefully measured', 'recently published', 'widely disputed',
                   'offered out of respect'],
             key='D', moves={'A': 'wrong_direction', 'B': 'imported', 'C': 'near_miss'},
             why='The word marks an attribution that rests on regard for a name rather than on '
                 'any of the three kinds of physical evidence.',
             trap='A gives the measured quality the sentence says such an attribution lacks.'),
        dict(stem='Which choice best describes the function of the sentence about the skilled '
                  'forger?',
             opts=['It defines infrared reflectography for a reader',
                   'It dates the manufacture of a pigment',
                   'It shows the limit of the three techniques together',
                   'It argues that forgery is easy to detect'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence follows the statement that the methods cannot show which hand made '
                 'a brushstroke and gives the case in which all three are defeated at once.',
             trap='D reverses the point of a sentence about methods being beaten.'),
        dict(sibling='HUM-S07-L2',
             sibling_gloss='Text 2 is passage 87 of this book. It explains how tonal contrast, '
                           'line and position set the order in which a picture is read, and says '
                           'conservators can sometimes show that an artist moved a figure to '
                           'improve that order.',
             stem='Text 1 says radiography shows a figure painted out. Based on Text 2, which '
                  'choice best describes what such a change can reveal?',
             opts=['The pigments from which the paint was made',
                   'A move made to improve the order of looking',
                   'The earliest year the panel could be painted',
                   'The habits of an artist in underdrawing'],
             key='B', moves={'A': 'restatement', 'C': 'restatement', 'D': 'near_miss'},
             why='Text 2 says conservators can sometimes show that an artist moved a figure to '
                 'improve the order in which the picture is read.',
             trap='D names a different thing a laboratory finding can establish.'),
        dict(carrier='They can show that a panel is of the right date and that the materials are '
                     'consistent. ___ they cannot show that a particular hand made a particular '
                     'brushstroke.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['All the same,', 'As a result,', 'In other words,', 'For instance,'],
             key='A', moves={'B': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The second sentence sets a limit against what the techniques can do, so the '
                 'transition must mark a concession rather than a consequence.',
             trap='B makes the limit follow from the findings the techniques deliver.'),
        dict(carrier='A painting is a physical object as well as an image ___ and physical objects '
                     'can be examined.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['image and', 'image; and', 'image, and', 'image and,'],
             key='C', moves={'A': 'run_on', 'B': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying physical objects can be examined is independent, so the '
                 'conjunction joining it to the clause about the painting takes a comma.',
             trap='A runs the clause about the painting straight into the clause about '
                  'examination.'),
        dict(goal='explain why a museum publishes a technical report with its attribution',
             notes=['The methods show date and consistency of materials.',
                    'They cannot show which hand made a brushstroke.',
                    'Several paintings have changed status twice in a century.',
                    'The reports often contain the evidence that will overturn their own '
                    'conclusions.'],
             stem='The student wants to explain why a museum publishes a technical report with '
                  'its attribution. Which choice most effectively uses relevant information from '
                  'the notes to accomplish that goal?',
             opts=['Publishing the physical evidence lets a later reader overturn the attribution '
                   'built on it',
                   'The methods show the date and the consistency of the materials',
                   'Several paintings have changed status twice in a century',
                   'The reports contain evidence that overturns their own conclusions'],
             key='A', moves={'B': 'underreach', 'C': 'underreach', 'D': 'restatement'},
             why='Only this choice joins the publication of the evidence to the revisions the '
                 'text says the reports make possible against themselves.',
             trap='C counts the reversals without saying what the reports contribute to them.'),
    ]))

# --- 8 -------------------------------------------------------------- ACDBADCBDB
SETS.append(dict(
    id='HUM-S08-L3',
    ar=dict(
        khulasa='حفظ بيتهوفن أوراق عمله، وبقي منها نحو ثمانية آلاف صفحة. ودفاتر المسوّدات، أي '
                'دفاتر عمله من الشُّذور والنسخ المرفوضة، تُظهر ألحانًا تَرِد في صور تكاد تُخجل '
                'إلى جانب المنتَج التامّ، ثمّ تُعمَل عليها شهورًا.',
        maana='المعنى أنّ مطلع السيمفونية الخامسة موجود في تجارب عدّة لا يتعرّف السامع في واحدة '
              'منها على الشكل الذي يعرفه الناس اليوم، وأنّ لحنًا من السيمفونية التاسعة يظهر في '
              'أحد الدفاتر قبل كتابة العمل باثنتي عشرة سنة.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الدليل: الدليل يناقض فكرة الإلهام '
                  'الوارد تامًّا، ويفعل ذلك بخطّ يد الشخص الذي يُستشهَد به أكثر من غيره '
                  'برهانًا عليها. والمخطوطات تفرض قرارات على كلّ من يعزف الموسيقى، فالنسخة '
                  'بخطّ المؤلّف تخالف الطبعة الأولى غالبًا.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُنسب إلى الأوراق تسجيلُ الصوت، مع أنّ '
             'النصّ يقول إنّ شيئًا منها لا يسجّله. ويقترن المقطع بالمقطع الثامن والثمانين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['The papers document labor and leave much unrecorded',
                   'About eight thousand pages of sketches survive',
                   'The sketches record the sound the composer wanted',
                   'Facsimiles of the main sketchbooks are now online'],
             key='A', moves={'B': 'underreach', 'C': 'wrong_direction', 'D': 'true_not_asked'},
             why='The text shows melodies worked for months against the idea of whole '
                 'inspiration, then names the limits: a sketch shows what was tried, dating is '
                 'not always decisive, and none of it records sound.',
             trap='C credits the papers with the sound the text says they do not record.'),
        dict(stem='According to the text, how long before the work does a Ninth Symphony theme '
                  'appear?',
             opts=['A few months', 'Twenty years', 'Twelve years', 'A century'],
             key='C', moves={'A': 'detail_swap', 'B': 'detail_swap', 'D': 'imported'},
             why='The text says a theme from the Ninth Symphony appears in one of the notebooks '
                 'fully twelve years before the work itself was written.',
             trap='B stretches the gap well past the figure the text gives.'),
        dict(claim='the papers tell against the idea of inspiration arriving whole',
             stem='Which quotation from the text most strongly supports the claim that the papers '
                  'tell against the idea of inspiration arriving whole?',
             opts=[Q('Beethoven kept his working papers, and about eight thousand pages of them '
                     'survive'),
                   Q('Dating depends on the paper, the watermarks and the ink, which is skilled '
                     'work and not always decisive'),
                   Q("Where they disagree, an editor has to choose, and the choice is published "
                     "as though it were the composer's wish"),
                   Q('show melodies arriving in forms that are almost embarrassing beside the '
                     'finished article, then being worked for months')],
             key='D', moves={'A': 'true_not_asked', 'B': 'true_not_asked', 'C': 'near_miss'},
             why='The quotation shows the melodies arriving in rough forms and then being worked '
                 'for months, which is the opposite of arriving whole.',
             trap='A counts the pages without saying what they show about composition.'),
        dict(carrier='A sketch shows what was tried and not why it was rejected. A scholar who '
                     'wanted the reason behind one rejected trial would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['date the paper by its watermarks', 'find the papers silent on the point',
                   'consult the autograph score instead',
                   'obey the surviving metronome marks'],
             key='B', moves={'A': 'near_miss', 'C': 'near_miss', 'D': 'imported'},
             why='The text states the limit directly: a sketch records the trial and not the '
                 'ground on which it was set aside.',
             trap='C sends the scholar to a document that settles a different question.'),
        dict(target='elegiac',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('elegiac'),
             opts=['slow and mournful', 'written in couplets', 'quick and light',
                   'free of a pulse'],
             key='A', moves={'B': 'imported', 'C': 'wrong_direction', 'D': 'near_miss'},
             why='The word is set against a brisk tempo in the next century, so it names a pace '
                 'heavy enough to sound like mourning.',
             trap='C gives the tempo the sentence contrasts it with.'),
        dict(stem='Which choice best describes the function of the sentence about the metronome '
                  'marks?',
             opts=['It defines the autograph score for a reader',
                   'It reports the number of surviving pages',
                   'It settles how fast the music should go',
                   'It gives a decision the evidence leaves open'],
             key='D', moves={'A': 'detail_swap', 'B': 'detail_swap', 'C': 'wrong_direction'},
             why='The sentence follows the editor choosing between score and printed edition and '
                 'reports an argument the text calls unresolved.',
             trap='C settles a tempo the sentence says is still argued.'),
        dict(sibling='HUM-S08-L2',
             sibling_gloss='Text 2 is passage 88 of this book. It describes music as the '
                           'management of the distance and the delay between leaving a home note '
                           'and returning to it, and says the question to ask is what a passage '
                           'set up and whether it has paid.',
             stem='Text 1 says a score is a set of instructions. Based on Text 2, which choice '
                  'best describes what a performer has to deliver beyond the notes?',
             opts=['A home note the listener can hum',
                   'A cadence that signals an ending',
                   'The timing of an expectation and its payment',
                   'An unresolved chord held under dialogue'],
             key='C', moves={'A': 'near_miss', 'B': 'near_miss', 'D': 'true_not_asked'},
             why='Text 2 says almost everything is management of the distance and the delay '
                 'between leaving the home note and returning, and that the question is whether a '
                 'passage has paid.',
             trap='B names one piece of the machinery rather than the timing a performer '
                  'controls.'),
        dict(carrier='The autograph score often differs from the first printed edition. ___ an '
                     'editor has to choose where they disagree.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'As a result,', 'In other words,', 'For example,'],
             key='B', moves={'A': 'wrong_direction', 'C': 'restatement', 'D': 'near_miss'},
             why='The second sentence gives what follows from the two documents disagreeing, so '
                 'the transition must mark a consequence.',
             trap='A sets the editorial choice against the disagreement that forces it.'),
        dict(carrier='Beethoven kept his working papers ___ and about eight thousand pages of '
                     'them survive.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['papers and', 'papers; and', 'papers and,', 'papers, and'],
             key='D', moves={'A': 'run_on', 'B': 'wrong_mark', 'C': 'misplaced'},
             why='The clause about the eight thousand surviving pages is independent, so the '
                 'conjunction joining it to the clause about the kept papers takes a comma.',
             trap='A runs the clause about the papers straight into the clause about their '
                  'number.'),
        dict(goal='explain why a tempo can change without the score changing',
             notes=['A score is a set of instructions.',
                    'Its conventions of performance were partly unwritten.',
                    'Those conventions are now partly lost.',
                    'An elegiac tempo in one century becomes a brisk one in the next.'],
             stem='The student wants to explain why a tempo can change without the score '
                  'changing. Which choice most effectively uses relevant information from the '
                  'notes to accomplish that goal?',
             opts=['A score is a set of instructions for a performer',
                   'Conventions that were never written down have been lost, so the same notes '
                   'are taken at a new pace',
                   'An elegiac tempo in one century becomes brisk in the next',
                   'The conventions of performance were only partly written'],
             key='B', moves={'A': 'underreach', 'C': 'restatement', 'D': 'underreach'},
             why='Only this choice joins the unwritten and lost conventions to the change in pace '
                 'that the notes themselves do not record.',
             trap='C states the change without saying what allowed it.'),
    ]))

# --- 9 -------------------------------------------------------------- BDACBADCAC
SETS.append(dict(
    id='HUM-S09-L3',
    ar=dict(
        khulasa='بين سنة ألف وثمانمئة وستّ وثمانين وسنة ألف وتسعمئة وثلاث مشى تشارلز بوث وفريق '
                'من الباحثين كلّ شارع في لندن وسجّلوا ما وجدوا. وكانت الحصيلة خرائط فقر، أي '
                'مخطّطات شوارع مُلوّنة دارًا دارًا، بسبع طبقات من الأثرياء إلى أدنى طبقة.',
        maana='المعنى أنّ الخرائط قامت على معرفة زائري مجالس التعليم بالأُسَر، وعلى مرور '
              'الشرطة، وعلى مقابلات، وتبلغ سبعة عشر مجلّدًا من الملاحظات إلى جانب الصحائف. وهي '
              'أوّل قياس منهجيّ لمدينة، وهي تحمل عصرها في داخلها.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الدليل: تصنيفات بوث خلطت الدخل بالحكم '
                  'الأخلاقيّ، وطبّقها مراقبون من الطبقة الوسطى يمشون في شوارع لا يسكنونها. ومع '
                  'ذلك فالخرائط دقيقة بما يكفي في الأجور والحِرَف والتزاحم ليستعملها '
                  'المؤرّخون.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن التفصيل المذكور في النصّ وعن '
             'النصّين المتقابلين. والفخّ المتوقّع هنا أن تُحسب المَجَسّات بديلًا عن الدفاتر، مع '
             'أنّ النصّ يقول إنّ القياس تحسّن والوصف ضعف. ويقترن المقطع بالمقطع التاسع '
             'والثمانين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Booth and his team walked every street in London',
                   'The modern city is measured better and described worse',
                   'The poverty maps have been digitized for a browser',
                   'Modern sensors have replaced what the notebooks gave'],
             key='B', moves={'A': 'underreach', 'C': 'true_not_asked', 'D': 'wrong_direction'},
             why='The text sets seventeen volumes of description against sensors and transport '
                 'cards and says in so many words that the modern city is measured better and '
                 'described worse.',
             trap='D makes the sensors a replacement for a record the text says they lack.'),
        dict(stem='According to the text, how many classes did the poverty maps use?',
             opts=['A full seventeen', 'Only three', 'Twelve or so', 'Seven in all'],
             key='D', moves={'A': 'detail_swap', 'B': 'imported', 'C': 'imported'},
             why='The text says the maps colored street plans house by house with seven classes, '
                 'from the wealthy to the lowest class Booth labeled.',
             trap='A gives the number of volumes of notes rather than of classes.'),
        dict(claim='the maps carry the assumptions of their period',
             stem='Which quotation from the text most strongly supports the claim that the maps '
                  'carry the assumptions of their period?',
             opts=[Q("Booth's classifications mixed income with moral judgment, his categories "
                     'were applied by middle-class observers walking through streets they did not '
                     'live in'),
                   Q('Transport cards record journeys. Satellite images give building footprints '
                     'and tree cover'),
                   Q('A majority of the street classifications still predict present-day '
                     'deprivation measures'),
                   Q("The maps were based on school board visitors' knowledge of individual "
                     'families, on police walks, and on interviews')],
             key='A', moves={'B': 'true_not_asked', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='The quotation names the mixing of income with moral judgment and the '
                 'middle-class observers walking streets they did not live in.',
             trap='C reports how well the classifications still hold rather than what they '
                  'assumed.'),
        dict(carrier='Each series is precise about one thing and silent about the rest, and none '
                     'of them contains anything like the notebooks. A historian who wanted to '
                     'know whether a street felt respectable would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['read a footfall count for that point',
                   'overlay the old map on a modern one',
                   'have to go back to the notebooks',
                   'consult the satellite record of tree cover'],
             key='C', moves={'A': 'wrong_direction', 'B': 'near_miss', 'D': 'wrong_direction'},
             why='The modern series are said to be silent outside their one measure, and the '
                 'notebooks are the only record the text credits with such remarks.',
             trap='A asks a counter for a judgment the text says it cannot carry.'),
        dict(target='whimsical',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('whimsical'),
             opts=['badly maintained', 'oddly fanciful', 'plainly built', 'briefly surveyed'],
             key='B', moves={'A': 'imported', 'C': 'wrong_direction', 'D': 'imported'},
             why='The word appears among an investigator remarks about how a street looks, beside '
                 'quiet and respectable, and describes its decoration.',
             trap='C gives the opposite of the fanciful decoration the word records.'),
        dict(stem='Which choice best describes the function of the sentence about measurement '
                  'today?',
             opts=['It opens the comparison that closes the text',
                   'It defines a poverty map for a reader',
                   'It dates the start of the London survey',
                   'It argues that the old maps are obsolete'],
             key='A', moves={'B': 'detail_swap', 'C': 'detail_swap', 'D': 'wrong_direction'},
             why='The sentence saying measurement today is cheaper, narrower and continuous '
                 'introduces the sensors and cards that the notebooks are then set against.',
             trap='D retires maps the text says historians still use.'),
        dict(sibling='HUM-S09-L2',
             sibling_gloss='Text 2 is passage 89 of this book. It measures a street by active '
                           'frontage, by the proportion of width to height and by permeability, '
                           'and reports that doorways per hundred meters predicts street life '
                           'better than architectural quality does.',
             stem='Text 1 contrasts precise series with thin description. Based on Text 2, which '
                  'choice best names a measure a modern count can supply well?',
             opts=['Whether a street is respectable',
                   'Whether a street is quiet in the evening',
                   'How a street was decorated in 1890',
                   'How many doorways open onto a hundred meters'],
             key='D', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'C': 'imported'},
             why='Text 2 counts active frontage as doorways and windows in use and reports that '
                 'doorways per hundred meters predicts street life.',
             trap='A asks for the judgment the text says only the notebooks carry.'),
        dict(carrier='Measurement today is cheaper, narrower and continuous. ___ footfall counts '
                     'come from sensors and mobile telephone data.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['By contrast,', 'As a result,', 'For instance,', 'In other words,'],
             key='C', moves={'A': 'wrong_direction', 'B': 'wrong_direction', 'D': 'restatement'},
             why='The second sentence gives one of the modern series as an instance of the new '
                 'measurement, so the transition must mark an example.',
             trap='B makes the sensors follow from the description rather than illustrate it.'),
        dict(carrier='They are the first systematic measurement of a city ___ and they carry their '
                     'period inside them.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['city, and', 'city and', 'city; and', 'city and,'],
             key='A', moves={'B': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause saying they carry their period inside them is independent, so the '
                 'conjunction joining it to the clause about the first measurement takes a '
                 'comma.',
             trap='B runs the clause about the measurement straight into the clause about the '
                  'period.'),
        dict(goal='explain why a historian of the city reads two kinds of record',
             notes=['Modern series are precise about one thing and silent about the rest.',
                    'The notebooks record that a street is quiet or respectable.',
                    'Historians have better numbers and thinner description than Booth had.',
                    'The two kinds of evidence answer different questions.'],
             stem='The student wants to explain why a historian of the city reads two kinds of '
                  'record. Which choice most effectively uses relevant information from the notes '
                  'to accomplish that goal?',
             opts=['Modern series are precise about one thing and silent about the rest',
                   'Historians now have better numbers and thinner description',
                   'Numbers answer one question and the notebooks another, so a street needs '
                   'both',
                   'The two kinds of evidence answer different questions entirely'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'restatement'},
             why='Only this choice says what each record answers and draws the conclusion that an '
                 'account of a street requires the pair.',
             trap='B names the trade without saying what a historian does about it.'),
    ]))

# --- 10 ------------------------------------------------------------- CABDCBADBD
SETS.append(dict(
    id='HUM-S10-L3',
    ar=dict(
        khulasa='يمكن فحص الأحكام النقدية بسجلّ ما جرى لها، والتخصّص الذي يفعل ذلك هو تاريخ '
                'التلقّي، أي سجلّ كيف قُرئ العمل وكيف قُدّر عبر الزمن. ومادّته المراجعات '
                'وأرقام البيع واستعارات المكتبات والمناهج المدرسية والطبعات المتوفّرة وتواتر '
                'الاقتباس.',
        maana='المعنى أنّ حالتين قياسيّتان: مات هرمان ملفل سنة ألف وثمانمئة وإحدى وتسعين وروايته '
              'الكبرى غير مطبوعة ونعيُه يُخطئ هجاء اسمه، ثمّ نصّبته حملة إعادة اكتشاف مقصودة في '
              'العشرينيّات كاتبًا أمريكيًّا مركزيًّا في عشرين سنة.',
        ahammiyya='في مجال الإنسانيات هذه المادة في مستوى الدليل: في الحالتين لم تتغيّر '
                  'النصوص، بل تغيّرت المعايير. وهذا دليل على النقد لا على الأعمال، ويجب '
                  'التعامل معه بحذر: فتغيّر الحكم لا يُظهر أنّ إحدى النسختين كانت خاطئة، '
                  'وارتفاع السمعة لا يعني أنّ رافعيها كانوا على حقّ.',
        sila='في اختبار سات يكثر السؤال عن الفكرة الرئيسة وعن الدليل الذي يسند دعوى وعن معنى '
             'كلمة في سياقها. والفخّ المتوقّع هنا أن يُستنتج من ارتفاع السمعة صوابُ النقّاد، مع '
             'أنّ النصّ ينفي ذلك صريحًا. ويقترن المقطع بالمقطع التسعين.'),
    qs=[
        dict(stem='Which choice best states the main idea of the text?',
             opts=['Melville died in 1891 with his major novel out of print',
                   'Databases have demolished several reputational stories',
                   'The record shows standards to be datable rather than self-evident',
                   'A risen reputation shows the critics who raised it were right'],
             key='C', moves={'A': 'underreach', 'B': 'underreach', 'D': 'wrong_direction'},
             why='The text says what the record establishes is that standards are historical '
                 'objects with datable origins, which rules out the claim that a standard is '
                 'simply self-evident.',
             trap='D draws the inference the text expressly refuses.'),
        dict(stem='According to the text, what had changed in the two cases?',
             opts=['The criteria rather than the texts', 'The texts rather than the criteria',
                   'The spelling of a name in an obituary',
                   'The number of editions then in print'],
             key='A', moves={'B': 'wrong_direction', 'C': 'detail_swap', 'D': 'imported'},
             why='The text says that in both cases the texts had not changed and the criteria '
                 'had.',
             trap='B reverses the two terms the text sets side by side.'),
        dict(claim='a change of judgment settles nothing about the work',
             stem='Which quotation from the text most strongly supports the claim that a change '
                  'of judgment settles nothing about the work?',
             opts=[Q('Herman Melville died in 1891 with his major novel out of print and his '
                     'obituary in the New York Times misspelling his name'),
                   Q('That a judgment changed does not show that either version was wrong, and '
                     'the fact that a reputation rose does not mean the critics who raised it '
                     'were right'),
                   Q('John Donne was held in low regard for most of the eighteenth and '
                     'nineteenth centuries'),
                   Q('Anyone who wants to make that claim has to explain the record of its '
                     'absence')],
             key='B', moves={'A': 'true_not_asked', 'C': 'true_not_asked', 'D': 'near_miss'},
             why='The quotation denies both inferences in turn: that a change shows one version '
                 'wrong, and that a rise shows the critics right.',
             trap='D names the burden on one kind of claim rather than the limit on inference.'),
        dict(carrier='What the record does establish is that standards are historical objects '
                     'with datable origins. A critic who called a particular standard '
                     'self-evident would therefore ___',
             stem='Which choice most logically completes the text?',
             opts=['be supported by the reception record',
                   'have demolished a reputational story',
                   'be quoting a polemic from after 1920',
                   'owe an account of its long absence'],
             key='D', moves={'A': 'wrong_direction', 'B': 'imported', 'C': 'imported'},
             why='The text says such a claim is made impossible by the datable origins and that '
                 'anyone making it has to explain the record of its absence.',
             trap='A enlists a record the text says tells against the claim.'),
        dict(target='polemic',
             stem='As used in the text, what does the word %s most nearly mean?' % Q('polemic'),
             opts=['a neutral survey', 'a sales figure', 'a forceful argument',
                   'a school syllabus'],
             key='C', moves={'A': 'wrong_direction', 'B': 'imported', 'D': 'imported'},
             why='The word names what raised Donne from low regard after 1920, so it marks a '
                 'piece of writing that argued a case hard.',
             trap='A makes the word neutral when the text credits it with moving a reputation.'),
        dict(stem='Which choice best describes the function of the sentence about the misspelled '
                  'obituary?',
             opts=['It defines reception history for a reader',
                   'It measures how low the standing had fallen',
                   'It reports the date of the rediscovery campaign',
                   'It argues that the novel deserved neglect'],
             key='B', moves={'A': 'detail_swap', 'C': 'detail_swap', 'D': 'imported'},
             why='The misspelling sits beside the novel being out of print and gives the size of '
                 'the obscurity that the campaign of the 1920s reversed.',
             trap='D supplies a verdict the text does not offer.'),
        dict(sibling='HUM-S10-L2',
             sibling_gloss='Text 2 is passage 90 of this book. It divides a critical judgment '
                           'into a claim, evidence and a criterion, and calls the criterion the '
                           'standard against which a work is being judged and the part most '
                           'often left out.',
             stem='Text 1 reports two reputations that moved while the texts stayed put. Based on '
                  'Text 2, which choice best names what moved instead?',
             opts=['The criterion against which the work was judged',
                   'The evidence drawn from the work itself',
                   'The claim that could be shown false',
                   'The convention of academic criticism'],
             key='A', moves={'B': 'near_miss', 'C': 'near_miss', 'D': 'true_not_asked'},
             why='Text 2 names the criterion as the standard a work is judged against and the '
                 'part most often left out, which is what Text 1 says changed.',
             trap='B names a different one of the three parts Text 2 sets out.'),
        dict(carrier='In both cases the texts had not changed. ___ the criteria had.',
             stem='Which choice completes the text with the most logical transition?',
             opts=['As a result,', 'For example,', 'In other words,', 'By contrast,'],
             key='D', moves={'A': 'wrong_direction', 'B': 'near_miss', 'C': 'restatement'},
             why='The second sentence sets what did change against what did not, so the '
                 'transition must mark a contrast.',
             trap='C treats the change in criteria as a restatement of the unchanged texts.'),
        dict(carrier='Databases of library borrowings and school curricula now make such '
                     'histories quantitative ___ and they have confirmed several reputational '
                     'stories.',
             stem='Which choice completes the text so that it conforms to the conventions of '
                  'Standard English?',
             opts=['quantitative and', 'quantitative, and', 'quantitative; and',
                   'quantitative and,'],
             key='B', moves={'A': 'run_on', 'C': 'wrong_mark', 'D': 'misplaced'},
             why='The clause about the confirmed stories is independent, so the conjunction '
                 'joining it to the clause about the databases takes a comma.',
             trap='A runs the clause about the databases straight into the clause about the '
                  'confirmations.'),
        dict(goal='explain what a reputation study is evidence about',
             notes=['Reception history records how a work was read and valued over time.',
                    'In both cases the texts had not changed and the criteria had.',
                    'This is evidence about criticism rather than about the works.',
                    'Standards are historical objects with datable origins.'],
             stem='The student wants to explain what a reputation study is evidence about. Which '
                  'choice most effectively uses relevant information from the notes to accomplish '
                  'that goal?',
             opts=['Reception history records how a work was read and valued over time',
                   'In the two cases the criteria changed and the texts stayed put',
                   'The evidence is about criticism rather than about the works',
                   'Since the criteria moved and the texts stayed put, the record dates the '
                   'standards themselves'],
             key='D', moves={'A': 'underreach', 'B': 'underreach', 'C': 'restatement'},
             why='Only this choice joins the unchanged texts and the moving criteria to the '
                 'conclusion that the record dates the standards.',
             trap='C names the object of the evidence without saying what it establishes.'),
    ]))

if __name__ == '__main__':
    qemit.emit(FIELD, LEVEL, SETS)
