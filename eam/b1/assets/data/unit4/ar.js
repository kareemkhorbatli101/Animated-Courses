/* ============================================================
   Unit 4 — the Arabic layer.

   A SCAFFOLD, NOT A TRANSLATION OF THE EXERCISE. Only the DIRECTIONS live here: what the
   learner is being asked to do. The questions, the options, the answers and the worked reasons
   are deliberately absent — a learner who can read the answer in Arabic has not done the
   exercise, and gates/eam_ar.py fails the build if one appears.

   KEYED BY THE ENGLISH SENTENCE, normalised through core.js's arKey(): markup becomes a space,
   curly quotes become straight ones, whitespace collapses. So rewrapping a sentence in a data
   file does not orphan its translation, while rewriting the words does — and
   gates/eam_ar.py B1 and B3 report both. The keys below were taken verbatim from the data
   files rather than retyped, because a key that differs by one space attaches to nothing and
   fails silently.

   NOTE THE SPACE A TAG LEAVES BEHIND. arKey turns `<[^>]+>` into a SPACE, not into nothing, so
   an instruction ending `<b>what they do</b>.` is looked up as `…what they do .` — with a
   space before the full stop. An entry typed without it attaches to no sentence at all and
   says nothing about it. This is why the keys are generated and never retyped.

   FILLED BY tools/eam_ar_pool.py from the Arabic units 1–5 already carry, for every
   direction this unit shares with them — which is most of them, because the directions are
   emitted from the same templates. The unit's own titles and its own words were written for
   this unit.

   NOT NATIVE-REVIEWED. This is a scaffold written for a learner who cannot yet read the
   English direction. It should be read by an Arabic speaker before a classroom relies on it.
   ============================================================ */
EAM.arabic({
  /* ---- s01-warm-up ---- */
  'Match the words with their meanings. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة بمعناها. هناك معنى واحد زائد لا يُستخدم. في الكتاب تُكتب الحروف؛ هنا اسحب المعنى إلى الكلمة.',
  'Complete the sentences using the words in the word bank.':
    'أكمل الجمل بالكلمات الموجودة في بنك الكلمات.',
  'Press a paragraph button to hear it read.':
    'اضغط زر الفقرة لتسمعها مقروءة.',
  'Read the text and choose the correct answer. Every answer is in the text above — look back at it rather than answering from what you already know.':
    'اقرأ النص ثم اختر الإجابة الصحيحة. كل إجابة موجودة في النص أعلاه، فارجع إليه بدل الإجابة من معلوماتك السابقة.',

  /* ---- s02-vocabulary ---- */
  'Match the words with their meanings. One meaning is not needed. (0. is done for you.) Column A Column B':
    'صِلْ كل كلمة بمعناها. هناك معنى واحد زائد لا يُستخدم. (البند 0 محلول كمثال.)',
  'The book prints a table here and asks you to complete it. Read the worked row, then do the two cards on this screen — they practise the same words.':
    'يطبع الكتاب هنا جدولًا ويطلب منك إكماله. اقرأ الصف المحلول، ثم أنجز البطاقتين الأخريين في هذه الصفحة؛ فهما تتدربان على الكلمات نفسها.',
  'Match each reading with what it tells you. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل قراءة بما تدل عليه. هناك معنى واحد زائد لا يُستخدم.',

  /* ---- s03-pronunciation ---- */
  'Play each word, then put it in the column that matches where you hear the beat.':
    'شغِّل كل كلمة، ثم ضعها في العمود الذي يوافق موضع النبرة التي تسمعها.',

  /* ---- s04-check ---- */
  'Read and choose the correct answer.':
    'اقرأ ثم اختر الإجابة الصحيحة.',
  'Complete the sentences with the correct word.':
    'أكمل الجمل بالكلمة الصحيحة.',
  'Write two or three sentences about what you measure on a car and the tools you use. Use three words from this unit.':
    'اكتب جملتين أو ثلاثًا عمّا تقيسه في السيارة والأدوات التي تستعملها. استعمل ثلاث كلمات من هذه الوحدة.',

  /* ---- s05-grammar-notice ---- */
  'Read these lines from a tyre check. Underline the comparative and superlative forms.':
    'اقرأ هذه الجمل من فحص الإطارات، وحدِّد صيغ المقارنة والتفضيل.',
  'The book\'s own box. Read it once now; the practice that follows comes straight out of it.':
    'صندوق الكتاب نفسه. اقرأه مرة الآن؛ فالتمارين التالية تخرج منه مباشرة.',

  /* ---- s06-grammar-practice ---- */
  'Write the comparative form. (0. is done.)':
    'اكتب صيغة المقارنة. (البند 0 محلول.)',
  'Write the superlative form. (0. is done.)':
    'اكتب صيغة التفضيل. (البند 0 محلول.)',

  /* ---- s07-grammar-review ---- */
  'Each sentence has one grammar mistake. Write the correct sentence.':
    'في كل جملة خطأ نحوي واحد. اكتب الجملة صحيحة.',
  'Compare two tyres or two batteries you know. Write one comparative and one superlative sentence.':
    'قارن بين إطارين أو بطاريتين تعرفهما. اكتب جملة مقارنة وجملة تفضيل.',
  'Choose the correct sentence.':
    'اختر الجملة الصحيحة.',

  /* ---- s08-listening-1 ---- */
  'Before you listen: how does a mechanic know a tyre is too worn? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: كيف يعرف الميكانيكي أن الإطار قد تآكل أكثر من اللازم؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: write True, False, or Not Given. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'أثناء الاستماع: اكتب True أو False أو Not Given. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s09-listening-2 ---- */
  'Before you listen: what numbers does a diagnostic report show? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: ما الأرقام التي يُظهرها تقرير التشخيص؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: answer the questions. (0. is done.)':
    'أثناء الاستماع: أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s10-listening-3 ---- */
  'Before you listen: how does a manager decide which car needs the most work? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: كيف يقرر المدير أي سيارة تحتاج إلى أكبر قدر من العمل؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'While you listen: match each car with its condition. One is not needed. (0. is done.) Column A Column B':
    'أثناء الاستماع: صِلْ كل سيارة بحالتها. هناك واحدة زائدة لا تُستخدم. (البند 0 محلول.)',

  /* ---- s11-speaking-model ---- */
  'Work with a partner. Ask and answer these questions. What things does a mechanic measure on a car? Why is it important to compare all four tyres? Why must a reading be within the tolerance?':
    'اعمل مع زميل: اسأل وأجب عن هذه الأسئلة.',
  'Work in pairs. Student A looks at Car A; Student B looks at Car B. Ask and answer to find three differences. Do not show your card.':
    'اعملا ثنائيًّا: الطالب (أ) ينظر إلى السيارة A، والطالب (ب) إلى السيارة B. تبادلا الأسئلة لإيجاد ثلاثة فروق. لا تُرِ زميلك بطاقتك.',

  /* ---- s12-role-play ---- */
  'Work in pairs. Read the model, then use the cards.':
    'اعملا ثنائيًّا: اقرآ النموذج ثم استعملا البطاقتين.',
  'Prepare a short talk (about one minute). Compare two cars or two tyres, and say which is in better condition and why.':
    'حضِّر كلمة قصيرة (نحو دقيقة): قارن بين سيارتين أو إطارين، وقل أيهما في حالة أفضل ولماذا.',

  /* ---- s13-reading-text ---- */
  'Before you read: is measuring better than guessing? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل القراءة: هل القياس أفضل من التخمين؟ قل تخمينك، ثم اقرأ وتحقق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Why? Answer the multiple-choice questions. (0. is done.) Every answer is in the text above — look back at it rather than answering from what you already know.':
    'ولماذا؟ أجب عن أسئلة الاختيار من متعدد. (البند 0 محلول.) كل إجابة موجودة في النص أعلاه، فارجع إليه بدل الإجابة من معلوماتك السابقة.',

  /* ---- s14-reading-comprehension ---- */
  'Match each word from the text with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة من النص بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Before you read: why might a car in Syria need servicing more often? Say your guess, then read and see. Press a paragraph button to hear it read.':
    'قبل القراءة: لماذا قد تحتاج سيارة في سوريا إلى صيانة أكثر تكرارًا؟ قل تخمينك، ثم اقرأ وتحقق. اضغط زر الفقرة لتسمعها مقروءة.',
  'Write True or False. (0. is done.) Every statement is settled by the text: read it again rather than answering from what you already know.':
    'اكتب True أو False. (البند 0 محلول.) كل عبارة يحسمها النص: أعِد قراءته بدل الإجابة من معلوماتك السابقة.',

  /* ---- s15-writing-model ---- */
  'Compare two cars, or two sets of tyres. Use comparatives and superlatives.':
    'قارن بين سيارتين أو طقمَي إطارات. استعمل صيغ المقارنة والتفضيل.',
  'Write why careful measuring is important in car maintenance. Give reasons.':
    'اكتب لماذا يُعدّ القياس الدقيق مهمًّا في صيانة السيارات. اذكر الأسباب.',
  'Write a short note from Lina (technician) to Maher (manager) with a car\'s readings.':
    'اكتب رسالة قصيرة من لينا (الفنية) إلى ماهر (المدير) تتضمن قراءات سيارة.',
  'Write about two things you know well and compare them (for example, two cars, two roads, or two tools).':
    'اكتب عن شيئين تعرفهما جيدًا وقارن بينهما (مثلًا سيارتين أو طريقين أو أداتين).',

  /* ---- s16-management-file-dialogue ---- */
  'Match what a manager says with its purpose. One purpose is not needed. Write the letter. Column A Column B':
    'صِلْ ما يقوله المدير بالغرض منه. هناك غرض واحد زائد لا يُستخدم.',
  'Before you listen: what does a manager check on a diagnostic report? Press play. You can slow it down, loop a line, and turn the Arabic on.':
    'قبل الاستماع: ماذا يفحص المدير في تقرير التشخيص؟ اضغط تشغيل. يمكنك إبطاء الصوت، وتكرار سطر واحد، وإظهار الترجمة العربية.',
  'Answer the questions. (0. is done.)':
    'أجب عن الأسئلة. (البند 0 محلول.)',

  /* ---- s17-management-file-practice ---- */
  'The tread readings are: front left 6 mm, front right 5 mm, rear left 2 mm, rear right 3 mm. Complete with the correct word.':
    'قراءات عمق المداس هي: الأمامي الأيسر 6 مم، الأمامي الأيمن 5 مم، الخلفي الأيسر 2 مم، الخلفي الأيمن 3 مم. أكمل بالكلمة الصحيحة.',
  'In pairs. One is the manager (Maher); one is the technician (Lina). Use the model and cards.':
    'ثنائيًّا: أحدكما المدير (ماهر) والأخرى الفنية (لينا). استعملا النموذج والبطاقتين.',
  'You are Maher. Write a short summary of a car\'s readings for the customer\'s file. Say what is within and what is below the tolerance, and what you will do.':
    'أنت ماهر: اكتب ملخصًا قصيرًا لقراءات سيارة لملف الزبون. قل ما هو ضمن الحد المسموح وما هو دونه، وماذا ستفعل.',

  /* ---- s18-global-case-study ---- */
  'Answer in a few words each.':
    'أجب بكلمات قليلة عن كل سؤال.',
  'Match each word with its meaning. One meaning is not needed. Write the letter. Column A Column B':
    'صِلْ كل كلمة بمعناها. هناك معنى واحد زائد لا يُستخدم.',
  'Talk with a partner. Use the frames.':
    'تحدَّث مع زميل مستعينًا بالعبارات الجاهزة.',

  /* ---- s19-local-case-study ---- */
  'A customer drives every day on rough, dusty roads. Should the service centre (a) follow the book\'s interval exactly, (b) shorten the interval and check more often, or (c) never service the car? Decide and explain. Use the frame.':
    'زبون يقود يوميًّا على طرق وعرة مليئة بالغبار. هل ينبغي لمركز الخدمة (أ) أن يتبع الفترة التي يحددها الكتاب تمامًا، أم (ب) أن يقصّر الفترة ويفحص السيارة أكثر، أم (ج) ألّا يصونها أبدًا؟ قرِّر واشرح، مستعينًا بالعبارات الجاهزة.',

  /* ---- s20-spiral-review ---- */
  'Complete the review. (0. is done.)':
    'أكمل المراجعة. (البند 0 محلول.)',

  /* ---- s21-can-do-glossary ---- */
  'Can-Do checklist — tick what you can do. Each row is checked against what you actually did on this unit\'s writing screen, so a tick you have not earned says so rather than being taken on trust.':
    'قائمة «أستطيع أن» — ضع علامة أمام ما تستطيع فعله. كل سطر يُقابَل بما فعلته بالفعل في صفحة الكتابة في هذه الوحدة، فالعلامة التي لم تستحقها تُقال لك بدل أن تُقبل على عِلّاتها.',
  'Unit 4 glossary (10 words)':
    'مفردات الوحدة الرابعة (عشر كلمات)'
});
