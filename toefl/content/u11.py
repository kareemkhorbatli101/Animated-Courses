# -*- coding: utf-8 -*-
"""Unit 11 · Technology and AI — first unit of Volume 2."""

UNIT = dict(
    n=11, vol=2, title='Technology and AI',
    icons=('cpu', 'laptop', 'chart'),
    subs=('What machine learning does', 'Using AI tools honestly', 'Work and automation'),
    grammar='may, might and could',
    field='data, automation, trust',
    opener_line='Volume 2 opens where Volume 1 left you. The vocabulary of Units 1–10 is '
                'assumed from here on and comes back unglossed in the texts.',

    candos=[
        'complete word endings in a text about how a system learns',
        'read a coursework rule and a post about it and find what applies to me',
        'follow an academic passage that distinguishes two things people confuse',
        'understand two students disagreeing about what is allowed',
        'give a careful, hedged opinion out loud without preparing',
        'write an email asking whether something is permitted, and a post that draws a line',
    ],

    acad=[
        ('data', 'facts and figures collected for study'),
        ('automate', 'to make a machine do a job instead of a person'),
        ('compute', 'to calculate using a computer'),
        ('technology', 'machines and methods based on science'),
        ('technique', 'a particular way of doing something'),
        ('intelligent', 'able to learn and understand'),
        ('logic', 'reasoning that follows clear rules'),
        ('simulate', 'to imitate something real'),
        ('input', 'what is put into a system'),
        ('code', 'instructions written for a computer'),
        ('channel', 'a way of sending information'),
        ('secure', 'safe from harm or interference'),
        ('rely', 'to depend on'),
        ('enhance', 'to improve the quality of something'),
        ('facilitate', 'to make something easier'),
        ('implement', 'to put a plan into action'),
        ('incorporate', 'to include as part of something'),
        ('capacity', 'the amount something can hold or do'),
        ('parameter', 'a limit or setting that controls a system'),
        ('protocol', 'an agreed set of rules for doing something'),
        ('manipulate', 'to control or change something skilfully'),
        ('inevitable', 'certain to happen'),
        ('ethic', 'a principle about right and wrong'),
        ('explicit', 'stated clearly and openly'),
    ],
    campus=[
        ('laptop', 'a portable computer'),
        ('password', 'a secret word that lets you in'),
        ('log in', 'to enter a system with your details'),
        ('software', 'programs that run on a computer'),
        ('update', 'a newer version of a program'),
        ('coursework', 'work done during a course and marked'),
        ('plagiarism', 'using someone else’s work as your own'),
        ('citation', 'a reference to a source you used'),
        ('declaration form', 'a form in which you state what you did'),
        ('tutor', 'a teacher responsible for a small group'),
        ('submission portal', 'the website where you hand work in'),
        ('back-up', 'a second copy kept in case of loss'),
    ],
    vocab_talk=[
        'Which technology do you rely on most? What would you do without it?',
        'Name one task you would happily automate and one you would not.',
        'What data about you do you think your phone collects?',
        'Is it inevitable that machines will do your future job? Why or why not?',
    ],
    again=['process', 'significant', 'evaluate', 'estimate', 'predict', 'identify', 'structure', 'component'],

    r1=dict(
        sub='What machine learning does',
        skill=('Technical texts still use ordinary endings',
               ['Do not be put off by the subject. The endings are the same ones: -ing, -ed, '
                '-ion, -ive.',
                'A gap after is or are is usually a participle, exactly as in Unit 3.',
                'Count the dashes before choosing between -ion and -ation.',
                'Read the sentence back. Technical prose repeats its key nouns constantly.']),
        guided_text='A machine does not learn the way a person does. It is sh--- millions of '
                    'examples, and it adjusts itself until its answ--- match them. Nobody writes '
                    'a rule for what a cat looks l---. The system finds a patt--- that works and '
                    'cannot explain it eit---.',
        guided_hint='1  sh---  →  own  (shown)',
        guided=['own', 'ers', 'ike', 'ern', 'her'],
        exam_text='The word learning is doing a lot of work in machine learning, and it is worth '
                  'asking what is actually happ-----. A traditional program follows rules that '
                  'somebody wrote. A learning system is given examples instead, and it adjusts '
                  'thousands of internal numbers until its outputs match them closely en----. '
                  'Nobody decides what those numbers me--. This is why such a system can be '
                  'extremely accu---- and completely unable to explain its---. It is also why '
                  'it fails in ways that look st-----. Change a few pixels in a photograph and '
                  'the system may conf--- a bus with an ostrich, because its patt--- was '
                  'never the pattern a person wo--- have used. The useful rule is simple: these '
                  'systems are confident everywhere and reliable only where their examples '
                  'actually we--.',
        exam=['ening', 'ough', 'an', 'rate', 'elf', 'range', 'use', 'ern', 'uld', 're'],
    ),

    r2=dict(
        sub='Using AI tools honestly',
        skill=('Find the category you are in',
               ['Rules documents divide the world into cases. Decide which case the question '
                'describes.',
                'Allowed, allowed with a declaration, and not allowed are three different '
                'categories.',
                'An example in a rule is usually what the question asks about.',
                'In a post, the writer’s opinion and the rule itself are different things.']),
        docs=[
            ('notice', 'Faculty of Engineering · use of AI tools in assessed work', [
                '# Allowed without declaration',
                '* Spelling and grammar checking, including a tool that suggests rewording.',
                '* Searching for sources, so long as you read and cite the sources themselves.',
                '# Allowed, but must be declared on the submission form',
                '* Generating code you then test, correct and understand.',
                '* Producing a first outline or a summary of material you have read.',
                '# Never allowed',
                '* Submitting generated text as your own prose, declared or not.',
                '* Using any tool at all in a timed, invigilated assessment.',
                '# How to declare',
                '* One sentence on the form: which tool, which part of the work, and what you '
                'changed afterwards.',
                '* A declaration is never a penalty. An undeclared use is academic misconduct.',
            ], 'notice'),
            ('social', 'Theo Brandt', '@theo_eng', [
                'Spent an hour reading the new faculty rules on AI tools so you do not have to.',
                '',
                'The headline everyone is repeating — "AI is banned" — is just wrong. Grammar',
                'checking is fine and needs no declaration. Generated code is fine if you declare',
                'it and actually understand it. What is banned is handing in generated prose as',
                'your own, and using anything at all in a sat exam.',
                '',
                'The sentence that struck me: "A declaration is never a penalty." They are not',
                'trying to catch you. They are trying to find out what people are doing.',
            ], 'm'),
        ],
        guided=[
            ('Which use needs no declaration?',
             ('Generating code', 'Checking spelling and grammar',
              'Producing an outline', 'Summarising a reading'), 1,
             'It sits under Allowed without declaration, together with searching for sources.'),
            ('What must a student do after generating code?',
             ('Nothing', 'Delete it before submitting', 'Declare it and understand it',
              'Ask a tutor first'), 2,
             'Code you then test, correct and understand, declared on the submission form.'),
            ('What is never allowed?',
             ('Searching for sources', 'Declaring a tool',
              'Submitting generated text as your own prose', 'Rewording a sentence'), 2,
             'Listed under Never allowed, and the notice adds declared or not.'),
            ('What must a declaration contain?',
             ('The name of the tutor', 'Which tool, which part, and what you changed',
              'A copy of the output', 'The time you spent'), 1,
             'One sentence on the form with exactly those three things.'),
        ],
        exam=[
            ('What is the main purpose of Theo’s post?',
             ('To complain about the rules', 'To correct what people are saying about them',
              'To ask for advice', 'To advertise a tool'), 1,
             'He opens by saying the headline everyone is repeating is just wrong.'),
            ('According to Theo, what is the rule about grammar checking?',
             ('It is banned', 'It must be declared', 'It is allowed with no declaration',
              'It depends on the module'), 2,
             'He summarises the first category of the notice correctly.'),
            ('Which sentence did Theo find most significant?',
             ('"AI is banned"', '"A declaration is never a penalty"',
              '"Using any tool at all in a timed assessment"',
              '"Searching for sources"'), 1,
             'He quotes it and then explains what he thinks it shows.'),
            ('What does Theo think the faculty is trying to do?',
             ('Catch students out', 'Find out what people are doing',
              'Reduce marking', 'Ban new software'), 1,
             'They are not trying to catch you — they are trying to find out what people are '
             'doing.'),
            ('A student uses a tool to summarise three articles for an essay. They should',
             ('do nothing', 'declare it on the submission form', 'not use it at all',
              'ask the tutor for permission'), 1,
             'Producing a summary of material you have read sits in the declare category.'),
            ('What can be inferred about the invigilated assessment rule?',
             ('It is the strictest of the rules', 'It applies only to engineering',
              'It will be reviewed next year', 'It allows grammar tools'), 0,
             'Every other rule has a declared exception; this one says any tool at all, with no '
             'exception.'),
        ],
    ),

    r3=dict(
        sub='Work and automation',
        title='Which Jobs Automation Changes, and Which It Replaces',
        words=280,
        paras=[
            'Public argument about automation nearly always runs together two different things: '
            'whether a job disappears, and whether a job changes. They have very different '
            'histories. Automation has eliminated remarkably few occupations outright. It has '
            'rewritten the content of almost all of them.',
            'The clearest case is the cash machine. Economists expected it to end the career of '
            'the bank clerk, and for a decade the number of clerks per branch did fall. But '
            'cheaper branches meant more branches, and the clerks who remained spent their time '
            'selling and advising rather than counting notes. The number of bank employees in '
            'the United States was higher thirty years after the cash machine than before it. '
            'The job had not gone. It had been emptied of one task and filled with another.',
            'What this suggests is that the useful question is not which jobs will be automated '
            'but which tasks. A job is a bundle of tasks, and automation takes the ones that are '
            'routine, well-defined and repeated, whatever the status of the job they sit in. '
            'That is why the effect falls so unevenly: a radiologist and a warehouse picker may '
            'lose the same proportion of their working day, while a plumber loses almost none, '
            'because almost nothing a plumber does in an afternoon is the same as what they did '
            'in the morning.',
        ],
        skill=('Separate two questions the public confuses',
               ['A passage of this type names a confusion in its first paragraph. That is the '
                'main idea.',
                'The case study in paragraph 2 exists to prove one half of the distinction.',
                'The last paragraph usually converts the finding into a better question. Note '
                'the new question.',
                'Examples given at the end are tested for what they illustrate, not for '
                'themselves.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why bank clerks lost their jobs', 'The difference between jobs disappearing and '
              'jobs changing', 'Why plumbers are safe',
              'How cash machines work'), 1,
             'The confusion is named in the first paragraph and the rest of the passage unpicks '
             'it.'),
            ('According to paragraph 1, what has automation mostly done?',
             ('Eliminated occupations', 'Changed the content of occupations',
              'Reduced wages', 'Created new industries'), 1,
             'Remarkably few occupations eliminated; almost all rewritten.'),
            ('What happened to the number of bank employees?',
             ('It fell steadily', 'It was higher thirty years later',
              'It stayed exactly the same', 'It is not known'), 1,
             'Cheaper branches meant more branches, and the total was higher.'),
            ('Why does the author mention the cash machine?',
             ('To explain how banking works', 'To give the clearest case of a job changing '
              'rather than vanishing', 'To show that economists are usually wrong',
              'To compare two countries'), 1,
             'It is introduced as the clearest case of the distinction made in paragraph 1.'),
        ],
        exam=[
            ('What does the author say the useful question is?',
             ('Which jobs will be automated', 'Which tasks will be automated',
              'How many jobs will go', 'Which industries will grow'), 1,
             'Not which jobs but which tasks — stated at the start of paragraph 3.'),
            ('Which kind of task does automation take?',
             ('Difficult and skilled', 'Routine, well-defined and repeated',
              'Physical rather than mental', 'Badly paid'), 1,
             'And the author adds whatever the status of the job they sit in.'),
            ('Why is a plumber barely affected?',
             ('The work is physical', 'The work is well paid',
              'Almost nothing repeats within a day', 'There are too few plumbers'), 2,
             'Almost nothing a plumber does in an afternoon is the same as what they did in the '
             'morning.'),
            ('All of the following are stated in the passage EXCEPT:',
             ('Few occupations have disappeared', 'A job is a bundle of tasks',
              'The effect falls unevenly', 'Skilled jobs are always safer'), 3,
             'The radiologist example is given precisely to contradict that.'),
            ('The word "emptied" in paragraph 2 is closest in meaning to',
             ('cleared out', 'abolished', 'expanded', 'divided'), 0,
             'One task was removed and another put in its place, which is emptying and refilling.'),
            ('What can be inferred about the economists mentioned in paragraph 2?',
             ('They predicted the outcome correctly', 'They asked which job rather than which '
              'task', 'They had no data',
              'They worked for banks'), 1,
             'They expected the occupation to end, which is exactly the error paragraph 3 '
             'diagnoses.'),
            ('Which best states the main idea of paragraph 3?',
             ('Automation affects tasks, so its effects are uneven',
              'Radiologists are at risk', 'Routine work is badly paid',
              'Automation will slow down'), 0,
             'The task framing comes first and the uneven effect follows from it.'),
        ],
    ),

    l1=dict(
        sub='Using AI tools honestly',
        caption='Two students disagree about what is allowed',
        skill=('Separate what someone believes from what the rule says',
               ['One speaker is usually wrong about a rule. The correction is a question.',
                'Listen for I thought… and actually — they bracket the error.',
                'An agreement at the end may be only partial. Note what is still disputed.',
                'The audio plays once, so write the rule down as you hear it.']),
        warm=[
            ('Man: Have you declared the tool you used?',
             ('It’s on the submission form.', 'Not yet — do I have to?', 'Last Tuesday.',
              'Yes, it’s very good.'), 1,
             'A yes/no question about an action; the reply answers and asks a useful follow-up.'),
            ('Woman: Is it banned completely?',
             ('In an exam, yes. Otherwise no.', 'On the faculty page.',
              'Three categories.', 'Yes, I read it.'), 0,
             'A yes/no question that needs a qualified answer, which only one option gives.'),
            ('Man: Where do I put the declaration?',
             ('One sentence is enough.', 'On the submission form.',
              'Before the deadline.', 'Yes, you must.'), 1,
             'Where wants a place, even on a document.'),
        ],
        script=[
            ('Woman', 'You used that code generator for the lab, didn’t you?'),
            ('Man', 'For about half of it. I rewrote most of what it gave me because it did not '
                    'work.'),
            ('Woman', 'Have you declared it?'),
            ('Man', 'Declared it? It’s banned, so no, I just did not mention it.'),
            ('Woman', 'It isn’t banned. That’s the thing everyone has got wrong. Generated code '
                      'is allowed if you declare it and you understand it.'),
            ('Man', 'Seriously?'),
            ('Woman', 'One sentence on the form. Which tool, which part, what you changed.'),
            ('Man', 'And nothing happens?'),
            ('Woman', 'Nothing happens. The notice actually says a declaration is never a '
                      'penalty. What is misconduct is using it and not saying so, which is '
                      'exactly what you have just done.'),
            ('Man', 'The portal closed an hour ago.'),
            ('Woman', 'Then email your tutor tonight and say so. Tonight, not Monday. It is a '
                      'very different conversation if you raise it first.'),
        ],
        items=[
            ('What is the man’s mistake?',
             ('He used a tool in an exam', 'He believed generated code was banned',
              'He submitted late', 'He copied another student'), 1,
             'He says it’s banned, so no, and the woman corrects him.'),
            ('What does the woman say the rule actually is?',
             ('Code tools are banned', 'Code tools are allowed if declared and understood',
              'Code tools need a tutor’s permission', 'Code tools are allowed in exams'), 1,
             'She states both conditions in the same sentence.'),
            ('What must a declaration contain?',
             ('The tool, the part and what you changed', 'A copy of the output',
              'The tutor’s signature', 'The time taken'), 0,
             'One sentence on the form: which tool, which part, what you changed.'),
            ('According to the woman, what counts as misconduct?',
             ('Using a tool at all', 'Declaring a tool', 'Using one and not saying so',
              'Rewriting generated code'), 2,
             'And she points out that this is what the man has done.'),
            ('Why can the man not simply add a declaration now?',
             ('He has lost the form', 'The submission portal has closed',
              'His tutor is away', 'The deadline has moved'), 1,
             'The portal closed an hour ago.'),
            ('What does the woman advise?',
             ('Say nothing and hope', 'Email the tutor tonight', 'Wait until Monday',
              'Resubmit the work'), 1,
             'Tonight, not Monday — she stresses the timing and gives the reason.'),
        ],
    ),

    l2=dict(
        sub='Using AI tools honestly',
        caption='An announcement about the new coursework rules',
        poster=['Declare the tool on the submission form',
                'A declaration is never a penalty',
                'No tools at all in invigilated exams'],
        skill=('Catch the exception to the exception',
               ['Rules announcements often qualify twice: allowed, unless, except when.',
                'Note the final condition — it is usually what is tested.',
                'A phrase repeated word for word is being emphasised for you.',
                'The closing sentence usually tells you what to do if you are unsure.']),
        warm=[
            ('Woman: Do I declare a spellchecker?',
             ('No — that one needs no declaration.', 'On the submission form.',
              'It’s in the second category.', 'Yes, everything.'), 0,
             'A do-I question about one specific tool; only one option answers for that tool.'),
            ('Man: What if I am not sure?',
             ('Declare it anyway.', 'It is never a penalty.', 'In the exam hall.',
              'Three categories.'), 0,
             'A what-if question wants an instruction.'),
            ('Woman: Does this apply to exams too?',
             ('It applies to coursework.', 'No tools at all in an exam.',
              'From this term.', 'Yes, declare it.'), 1,
             'A does-it-apply question needs the exam rule itself.'),
        ],
        script=[
            ('Man', 'The faculty has published its rules on AI tools and I want to go through '
                    'them, because the version circulating on social media is wrong. There are '
                    'three categories, not one. First, tools you may use with no declaration at '
                    'all: spelling and grammar checking, including rewording suggestions, and '
                    'searching for sources, provided you then read and cite the actual sources. '
                    'Second, tools you may use but must declare: generating code that you then '
                    'test and understand, and producing an outline or a summary of material you '
                    'have read. The declaration is one sentence on the submission form — which '
                    'tool, which part of the work, what you changed afterwards. I want to say '
                    'this very clearly: a declaration is never a penalty. It has no effect on '
                    'your mark. Third, what is never allowed: submitting generated prose as your '
                    'own writing, whether you declare it or not, and using any tool at all in an '
                    'invigilated assessment — and there is no exception to that one, not even '
                    'a spellchecker. Finally, if you cannot tell which category you are in, '
                    'declare it. Nobody has ever been penalised for over-declaring. Several '
                    'people have been penalised for the opposite.'),
        ],
        items=[
            ('What is the main purpose of the announcement?',
             ('To ban AI tools', 'To explain three categories of use',
              'To change an exam date', 'To introduce new software'), 1,
             'Three categories, not one — and the speaker takes them in order.'),
            ('Why does the speaker mention social media?',
             ('To recommend a page', 'Because the version circulating there is wrong',
              'To ask students to share the rules', 'To explain how the rules were written'), 1,
             'That is given as the reason for going through them.'),
            ('What must accompany a declared use?',
             ('A tutor’s signature', 'A copy of the output',
              'One sentence naming tool, part and changes', 'A citation'), 2,
             'The declaration is one sentence with exactly those three elements.'),
            ('Which rule has no exception at all?',
             ('Declaring an outline', 'Citing sources you have read',
              'Using any tool in an invigilated assessment', 'Using a spellchecker'), 2,
             'The speaker says there is no exception to that one, not even a spellchecker.'),
            ('What should a student do if unsure which category applies?',
             ('Ask another student', 'Avoid the tool', 'Declare it',
              'Submit and explain later'), 2,
             'Nobody has ever been penalised for over-declaring.'),
        ],
    ),

    l3=dict(
        sub='What machine learning does',
        caption='A talk on why a model can be confident and wrong',
        board=['Trained on examples, not rules',
               'Confidence ≠ accuracy',
               'Fails outside its training data',
               'Ask: what was it shown?'],
        skill=('Follow a warning, not a description',
               ['Some talks exist to warn you. The warning is the main idea; the mechanism is '
                'the support.',
                'Listen for the word that signals the turn: but, the trouble is, here is the '
                'problem.',
                'A single striking example is almost always tested.',
                'The final instruction tells you what the speaker wants you to do with the '
                'talk.']),
        warm=[
            ('Woman: Did she say the model explains itself?',
             ('No — the opposite.', 'On the board.', 'Thousands of numbers.',
              'Yes, she did.'), 0,
             'A did-she-say question checks a claim, and the reply corrects it.'),
            ('Man: What is it trained on?',
             ('Examples.', 'Very accurately.', 'Last year.', 'Yes, it is.'), 0,
             'What is it trained on wants the training material.'),
            ('Woman: Could you explain the ostrich example?',
             ('It changed a few pixels.', 'Of course — which part confused you?',
              'In the third slide.', 'Yes, I could.'), 1,
             'A request for explanation is answered by agreeing and narrowing it.'),
        ],
        script=[
            ('Professor', 'I want to give you one habit that will serve you for the rest of your '
                          'career, and it is a question: what was this system shown? A learning '
                          'system is not programmed with rules. It is shown examples and adjusts '
                          'thousands of internal numbers until its answers match them. Nobody '
                          'knows what any individual number means, including the people who '
                          'built it. Now, here is the problem. The system produces a confidence '
                          'figure with every answer, and students read that figure as accuracy. '
                          'It is not accuracy. It is how typical the input looked compared with '
                          'the training examples. Inside that range the two usually agree. '
                          'Outside it they come apart completely, and the system is most '
                          'confident precisely where it has least reason to be. The famous '
                          'demonstration is adversarial images: change a handful of pixels in a '
                          'photograph of a bus, invisible to you and me, and the system will '
                          'report an ostrich with ninety-nine per cent confidence. Nothing has '
                          'gone wrong mechanically. The pattern it learned was never the pattern '
                          'we would have used. So when somebody shows you a system that is '
                          'ninety-nine per cent accurate, do not ask how accurate. Ask what it '
                          'was shown, and then ask whether the case in front of you looks '
                          'anything like that.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Learning systems are usually inaccurate', 'A system’s confidence is not the same '
              'as its accuracy', 'Adversarial images should be banned',
              'Programming by rules is better'), 1,
             'The whole talk builds to the distinction and the question that follows from it.'),
            ('How does a learning system differ from a traditional program?',
             ('It is faster', 'It is shown examples instead of given rules',
              'It uses less data', 'It can explain its answers'), 1,
             'Stated at the start, and the inability to explain follows from it.'),
            ('What does a confidence figure actually measure?',
             ('How accurate the answer is', 'How typical the input looked',
              'How much data was used', 'How long the system took'), 1,
             'The speaker corrects the common reading explicitly.'),
            ('When do confidence and accuracy come apart?',
             ('Inside the training range', 'Outside the training range',
              'Only in images', 'Only with new systems'), 1,
             'Inside that range the two usually agree; outside it they come apart completely.'),
            ('Why does the speaker mention the bus and the ostrich?',
             ('To show a mechanical failure', 'To demonstrate confident and wrong',
              'To explain how photographs are stored', 'To compare two systems'), 1,
             'Ninety-nine per cent confidence on a completely wrong answer, with nothing '
             'mechanically broken.'),
            ('What question does the speaker want students to ask?',
             ('How accurate is it?', 'What was it shown?', 'Who built it?',
              'How fast is it?'), 1,
             'The talk opens and closes on that question.'),
        ],
    ),

    sp=[
        dict(sub='What machine learning does', focus='weak forms in modal verbs',
             skill=('Reduce the modal, not the verb',
                    ['might have sounds like /maɪtəv/. Could have sounds like /kʊdəv/.',
                     'Never say of. It is have, however it sounds.',
                     'Keep the main verb clear and let the modal shrink.',
                     'Finish the sentence even if a word escapes you.']),
             repeat=['It might be wrong.',
                     'The system could have learned a different pattern.',
                     'A few pixels may change the answer completely.',
                     'It might have been trained on photographs taken in daylight.',
                     'The result could be accurate, although we cannot check it directly.',
                     'A model may be extremely confident in exactly the cases where it has least reason to be.',
                     'If the input does not resemble anything the system was shown, the answer might be wrong in a way that nobody will notice until much later.'],
             theme='tools you use',
             qs=['First, do you use any AI tools in your studies?',
                 'People feel very differently about these tools. How do you feel about using '
                 'one, and why?',
                 'Some people say these tools stop students learning to think. Do you agree? '
                 'Why or why not?',
                 'Finally, should universities allow them in assessed work? Why or why not?'],
             model=[(2, 'Slightly guilty, which I think is unreasonable. I use one to check my '
                        'grammar and nobody would call a dictionary cheating.'),
                    (3, 'It might, if you let it write for you. Used to check whether your own '
                        'argument holds, it could do the opposite.')],
             selfcheck=['I reduced the modal and kept the verb clear',
                        'I said have, never of',
                        'I gave a reason after every opinion']),
        dict(sub='Using AI tools honestly', focus='hedged opinion',
             skill=('Say how sure you are',
                    ['It may be…, it might depend on…, I would probably say…',
                     'Hedging is not weakness. It is accuracy, and the test rewards it.',
                     'Still commit at the end: on balance, I think…',
                     'One hedge, one position, one reason.']),
             repeat=['It may depend on the subject.',
                     'That might be true of coursework only.',
                     'I would probably declare it, just in case.',
                     'It could be argued that a spellchecker is no different.',
                     'The rule may be clearer than people think, but nobody has read it.',
                     'On balance I would say that declaring something costs nothing and not declaring it can cost a great deal.',
                     'It might be unfair to compare the two, although I can see why somebody who has read only the headline would do so.'],
             theme='rules about honesty in study',
             qs=['To start, how does your institution define cheating?',
                 'People draw the line in different places. Where would you draw it, and why?',
                 'Some people argue that any rule about these tools is unenforceable. Do you '
                 'agree? Why or why not?',
                 'Last question. Should a student who declares using a tool be marked '
                 'differently? Why or why not?'],
             model=[(2, 'I would draw it at whether the thinking is mine. If a tool corrects my '
                        'sentence, the thought was still mine; if it supplies the thought, it '
                        'is not.'),
                    (4, 'No, and I think that is the whole point of saying a declaration is '
                        'never a penalty. The moment it costs marks, nobody declares anything.')],
             selfcheck=['I used at least two hedging expressions',
                        'I still committed to a position',
                        'I gave one clear reason']),
        dict(sub='Work and automation', focus='academic register',
             skill=('Make a distinction and hold it',
                    ['Use the unit’s words: automate, capacity, inevitable, explicit, '
                     'implement.',
                     'Name the two things you are separating, then keep the labels.',
                     'Not X but Y is the strongest sentence shape here.',
                     'Mark yourself against the three statements below.']),
             repeat=['Automation removes tasks, not jobs.',
                     'A job is a bundle of tasks of different kinds.',
                     'Routine work is automated first, whatever its status.',
                     'The capacity of these systems has increased very quickly.',
                     'It is not inevitable that a job disappears when part of it is automated.',
                     'The number of bank employees was higher thirty years after the cash machine than before it.',
                     'The useful question is not which jobs will be automated but which tasks within them are routine enough to be.'],
             theme='work and machines',
             qs=['First, what job would you like to do?',
                 'People worry about automation in different ways. How much does it concern you, '
                 'and why?',
                 'Some people argue that governments should slow automation down to protect '
                 'jobs. Do you agree? Why or why not?',
                 'Finally, if machines do more of the work, should people work fewer hours for '
                 'the same pay? Why or why not?'],
             model=[(3, 'I disagree, mostly. Slowing it down protects the task, not the person, '
                        'and the task was going to go either way.'),
                    (4, 'In principle yes, and the history is on that side: the working week has '
                        'fallen with every previous wave and nobody now argues we should put it '
                        'back.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I made a distinction and kept it clear',
                        'My last answer had an opinion, a reason and an example']),
    ],

    w1=dict(
        sub='What machine learning does',
        skill=('Modals inside questions',
               ['A modal behaves like any auxiliary: Might it be wrong? Could you tell me…?',
                'In an embedded question the modal stays after the subject: whether it might '
                'be wrong.',
                'Never two modals together. Might can is impossible.',
                'Use every tile exactly once.']),
        guided=[
            ('The answer might be wrong.',
             ['be', 'might', 'the', 'answer', 'wrong'],
             'Might the answer be wrong?'),
            ('Declaring a tool has no effect on your mark.',
             ['know', 'you', 'do', 'whether', 'it', 'affects', 'my', 'mark'],
             'Do you know whether it affects my mark?'),
            ('A few pixels could change the result.',
             ['could', 'what', 'change', 'the', 'result'],
             'What could change the result?'),
        ],
        exam=[
            ('Generated code may be used if it is declared.',
             ['tell', 'can', 'you', 'me', 'whether', 'code', 'may', 'be', 'used'],
             'Can you tell me whether code may be used?'),
            ('The portal closed an hour ago.',
             ['did', 'when', 'the', 'portal', 'close'],
             'When did the portal close?'),
            ('No tools at all are allowed in an exam.',
             ['tools', 'which', 'are', 'allowed', 'in', 'an', 'exam'],
             'Which tools are allowed in an exam?'),
            ('The system might have been trained on daylight photographs.',
             ['know', 'do', 'you', 'what', 'it', 'was', 'trained', 'on'],
             'Do you know what it was trained on?'),
            ('The student who declared the tool was not penalised.',
             ['the', 'student', 'who', 'declared', 'the', 'tool', 'was', 'not', 'penalised'],
             'The student who declared the tool was not penalised.'),
            ('A declaration is one sentence on the form.',
             ['long', 'how', 'should', 'the', 'declaration', 'be'],
             'How long should the declaration be?'),
            ('The model reported an ostrich with high confidence.',
             ['know', 'do', 'you', 'why', 'it', 'reported', 'an', 'ostrich'],
             'Do you know why it reported an ostrich?'),
        ],
    ),
    w2=dict(
        sub='Using AI tools honestly',
        to='a.carrington@northgate.edu',
        date='03/11/2026',
        subject='Lab submission — undeclared use of a code tool',
        scenario=[
            'You used a code-generating tool for part of a laboratory report, rewrote most of '
            'what it produced, and submitted the work without declaring it, because you believed '
            'such tools were banned. You have now learned that they are allowed if declared. The '
            'submission portal has closed.',
            'Write an email to your tutor, Dr Carrington.',
        ],
        bullets=['Say exactly what you used and for which part.',
                 'Explain why you did not declare it.',
                 'Ask what you should do now.'],
        skill=('Say the awkward thing first',
               ['An email that buries the admission reads as an excuse. Put it in sentence one.',
                'Be precise about the scope: which part, how much, what you changed.',
                'Explain without defending. One sentence of reason is enough.',
                'Seven minutes. 110–140 words.']),
        model=[
            'Dear Dr Carrington,',
            'I am writing because I used a code-generating tool for part of my laboratory report '
            'and did not declare it on the submission form. I want to correct that before it is '
            'marked.',
            'Specifically, I used it for the data-plotting section, roughly a third of the code. '
            'Most of what it produced did not run, so I rewrote it and I can explain every line. '
            'The analysis and the discussion are entirely my own.',
            'I did not declare it because I believed such tools were banned outright. I have now '
            'read the faculty notice properly and I understand that this use is permitted if '
            'declared.',
            'The portal closed last night, so I cannot add the declaration myself. Please could '
            'you tell me what you would like me to do?',
            'I am sorry for the trouble.',
            'Rami Haddad',
        ],
        notes=['The admission is the first sentence, which is what makes the rest credible.',
               'The scope is exact: which section, roughly a third, rewritten, and what is '
               'untouched.',
               'The reason is one sentence and is not offered as an excuse.',
               'The question is practical and leaves the decision with the person who has to '
               'make it.'],
    ),
    w3=dict(
        sub='Work and automation',
        prof='Dr Carrington',
        question='If automation removes routine tasks from a job rather than removing the job '
                 'itself, should universities change what they teach — and if so, what should '
                 'go and what should replace it?',
        posts=[('Nadia', 'h',
                'Teach less procedure and more judgement. If a machine can carry out a standard '
                'method faster than any graduate, then drilling students in that method is '
                'training them for the half of the job that is leaving. Spend the time on '
                'deciding which method applies and on noticing when the answer is wrong.'),
               ('Jonas', 'm',
                'You cannot have judgement without procedure. Nobody can tell that an answer is '
                'wrong unless they have done the calculation by hand enough times to have a '
                'feel for the size of it. Cut the drilling and you get graduates who trust '
                'whatever the screen says.')],
        skill=('Find where both are right',
               ['Two reasonable positions usually disagree about order or quantity, not about '
                'direction.',
                'Say what the real disagreement is before you take a side.',
                'Use something from the unit — here, the lecture’s point about confidence.',
                'At least 100 words in ten minutes.']),
        starters=['Jonas and Nadia disagree about sequence rather than about content:…',
                  'The lecture gives Jonas a stronger argument than he makes:…',
                  'What matters is how much procedure, not whether:…',
                  'I would therefore keep… and cut…'],
        model=[
            'Jonas and Nadia are not really disagreeing about what to teach. They are disagreeing '
            'about how much and in what order.',
            'The lecture actually gives Jonas a stronger argument than he makes. A learning '
            'system reports its confidence, and that figure is not accuracy — it is how typical '
            'the input looked. The only person who can catch that is somebody who has an '
            'independent sense of what the answer should be, and you do not acquire that by '
            'being told about it. You acquire it by doing enough examples by hand to be '
            'surprised when one comes out wrong.',
            'But Nadia is right that this does not require years of drilling. It requires enough. '
            'So I would keep the first-year calculations and cut the third-year ones, and spend '
            'the time saved on cases where the standard method quietly does not apply.',
        ],
        model_words=158,
    ),

    gram=dict(
        title='may, might and could',
        headers=['Form', 'Example'],
        rows=[
            ['may / might + infinitive (possibility)', 'The answer might be wrong.'],
            ['could + infinitive (possibility)', 'A few pixels could change the result.'],
            ['may + infinitive (permission)', 'Generated code may be used if declared.'],
            ['might have + past participle', 'It might have been trained on daylight photographs.'],
            ['Negative', 'It may not be accurate outside that range.'],
            ['Question', 'Might the answer be wrong?'],
            ['Never two modals', 'It might can work. ✗'],
        ],
        notes=[
            'May and might are almost interchangeable for possibility. Might is very slightly '
            'less certain, and is the safer choice in academic writing.',
            'Could means possible, not permitted. You could use it says it is possible; you may '
            'use it says it is allowed. The test does distinguish these.',
            'For a past possibility use might have or could have plus the past participle. '
            'Write have, never of, however it sounds when spoken.',
        ],
        watch='Could not have a different meaning from may not. It may not be accurate = perhaps '
              'it is not. It could not be accurate = it is impossible that it is.',
        ex=[
            ('Complete with may, might, could or a negative form.',
             ['The system __________ be wrong, although it reports high confidence.',
              'You __________ use a spellchecker without declaring it.',
              'A few pixels __________ change the answer completely.',
              'It __________ (not) be accurate outside its training range.',
              'The model __________ have been trained on photographs taken in daylight.',
              '__________ the answer be wrong?'],
             ['might', 'may', 'could', 'may not', 'might', 'Might']),
            ('Rewrite with a modal, keeping the meaning.',
             ['Perhaps the data is incomplete. →',
              'It is possible that it was trained on old examples. →',
              'It is permitted to use a grammar checker. →',
              'It is impossible that the figure is accurate. →'],
             ['The data might be incomplete.',
              'It could have been trained on old examples.',
              'You may use a grammar checker.',
              'The figure could not be accurate.']),
            ('Correct the mistake in each sentence.',
             ['It might can be wrong.',
              'The system might of learned a different pattern.',
              'You could use a tool in the exam — the rules allow it.'],
             ['It might be wrong.', 'The system might have learned a different pattern.',
              'You may not use a tool in the exam — the rules forbid it.']),
        ],
        bas='Build a Sentence uses modals inside embedded questions: Do you know whether it '
            'might be wrong? Keep the modal after the subject once the question is embedded.',
    ),

    rev=dict(
        vocab=[
            ('to make a machine do a job instead of a person', 'automate'),
            ('a particular way of doing something', 'technique'),
            ('to imitate something real', 'simulate'),
            ('to depend on', 'rely'),
            ('to make something easier', 'facilitate'),
            ('to put a plan into action', 'implement'),
            ('the amount something can hold or do', 'capacity'),
            ('an agreed set of rules for doing something', 'protocol'),
            ('certain to happen', 'inevitable'),
            ('stated clearly and openly', 'explicit'),
            ('using someone else’s work as your own', 'plagiarism'),
            ('a form in which you state what you did', 'declaration form'),
        ],
        gram=[
            ('The system __________ be wrong, although it is confident.', 'might'),
            ('You __________ use a spellchecker without declaring it.', 'may'),
            ('A few pixels __________ change the answer completely.', 'could'),
            ('It __________ (not) be accurate outside its training range.', 'may not'),
            ('The model __________ (have / train) on daylight photographs.',
             'might have been trained'),
            ('__________ the answer be wrong?', 'Might'),
            ('It is impossible that the figure is accurate. → It __________ be accurate.',
             'could not'),
            ('Do you know whether it __________ (might / be) wrong?', 'might be'),
        ],
        mini=[
            ('According to the passage on page 26, automation mostly',
             ('eliminates occupations', 'changes what an occupation involves',
              'reduces wages', 'creates new industries'), 1,
             'Remarkably few occupations eliminated; almost all rewritten.'),
            ('In the talk, a confidence figure measures',
             ('how accurate the answer is', 'how typical the input looked',
              'how much data was used', 'how long the system took'), 1,
             'That distinction is the whole point of the lecture.'),
            ('Which sentence is correct?',
             ('It might can be wrong.', 'The system might of learned it.',
              'It might have been trained on old examples.',
              'You could use a tool in the exam.'), 2,
             'Might have plus a past participle; the others stack modals, write of for have, or '
             'confuse possible with permitted.'),
            ('A student who is unsure whether to declare a tool should',
             ('not use it', 'declare it', 'ask another student', 'submit and explain later'), 1,
             'Nobody has ever been penalised for over-declaring.'),
            ('In Volume 2 the vocabulary of Units 1–10 is',
             ('retaught from the beginning', 'assumed and recycled unglossed',
              'listed again in the glossary only', 'not used'), 1,
             'Volume 2 assumes Volume 1’s 360 words and recycles them.'),
            ('In an adaptive Listening module you can',
             ('return to any question', 'return within the module',
              'return only in Module 1', 'not return at all'), 3,
             'Listening allows no return of any kind, unlike Reading.'),
        ],
    ),
    tip='Volume 2 opens at the level Volume 1 left you, which is also what the real test does '
        'between Module 1 and Module 2. Do not expect the second half of anything to feel '
        'easier — if it does, something has gone wrong in the first half.',
)
