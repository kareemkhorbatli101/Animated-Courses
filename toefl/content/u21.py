# -*- coding: utf-8 -*-
"""Unit 21 — Language and the Mind. Volume 3, the B2 reference unit."""

UNIT = dict(
    n=21, vol=3, level='B2',
    title='Language and the Mind',
    icons=['brain', 'speech', 'book'],
    subs=['How children acquire grammar', 'Languages in contact',
          'What a dictionary decides'],
    grammar='Noun clauses and embedded questions',
    field='innate, utterance, convention',
    opener_line='You already speak one language without being able to say how. This unit is '
                'about what that fact tells us, and about the structures English uses to '
                'package a whole idea inside a sentence — which is the single most useful '
                'thing a B2 writer can learn to do.',
    candos=[
        'I can follow an academic argument that runs across several paragraphs.',
        'I can put a whole clause in the subject position without losing the sentence.',
        'I can form an embedded question with statement word order, every time.',
        'I can tell a describing claim from a prescribing one in a text.',
        'I can hedge a claim to the strength the evidence actually supports.',
        'I can concede a point in a discussion post and still make my own.',
    ],

    # ------------------------------------------------------------ vocabulary --
    acad=[
        ('innate', 'present from birth, not learned'),
        ('utterance', 'anything a person actually says'),
        ('arbitrary', 'decided by agreement, not by reason'),
        ('convention', 'what a community has agreed to do'),
        ('syntax', 'the rules for putting words in order'),
        ('lexicon', 'the whole stock of words a language has'),
        ('dialect', 'a regional or social variety of a language'),
        ('fluent', 'speaking smoothly and without effort'),
        ('bilingual', 'using two languages well'),
        ('intuition', 'a judgement you can make but not explain'),
        ('competence', 'what a speaker knows, as against what they say'),
        ('universal', 'found in every language examined so far'),
        ('systematic', 'following a rule, even an unstated one'),
        ('plausible', 'believable, though not yet proved'),
        ('spontaneous', 'produced without planning or prompting'),
        ('prescriptive', 'saying what people ought to say'),
        ('descriptive', 'recording what people actually say'),
        ('threshold', 'the point at which something starts to count'),
    ],
    family=('convention', [
        ('conventional', 'adjective', 'the conventional spelling of a word'),
        ('conventionally', 'adverb', 'conventionally written as one word'),
        ('unconventional', 'adjective', 'an unconventional but clear usage'),
    ]),
    collocs=[
        ('acquire a language', 'children do this without being taught'),
        ('draw a distinction', 'to say that two things are different'),
        ('a body of evidence', 'all the evidence taken together'),
        ('hold true', 'to stay correct across many cases'),
        ('a working definition', 'one good enough to go on with'),
        ('bear no relation to', 'to have nothing to do with'),
        ('in practice', 'what actually happens, not what the rule says'),
        ('by and large', 'mostly, with some exceptions'),
        ('a matter of convention', 'agreed rather than necessary'),
        ('run counter to', 'to go against'),
    ],
    stance=[
        ('is bound to', 'the writer treats it as certain'),
        ('is likely to', 'strong, but short of certain'),
        ('may well', 'possible, and the writer leans to it'),
        ('it is doubtful whether', 'the writer leans against it'),
        ('there is little evidence that', 'the writer rejects it'),
    ],
    nuance=[
        ('imply / infer', 'a speaker implies; a listener infers'),
        ('prescriptive / descriptive', 'what should be said / what is said'),
        ('fluent / accurate', 'smooth / correct — not the same thing'),
    ],
    vocab_talk=[
        'Which of your languages do you think in? Does it change with the topic?',
        'Name one rule of your first language you follow but cannot state.',
        'Is a dictionary an authority, or a record? Argue for one.',
        'What would be lost if everyone spoke the same dialect?',
    ],
    again=['poverty of the stimulus', 'word order', 'usage note', 'native speaker',
           'language partner', 'corpus', 'register', 'coinage'],

    # --------------------------------------------------------------- reading --
    r1=dict(
        sub='How children acquire grammar',
        skill=('Complete the Words at B2',
               ['The gap is no longer the end of an everyday word. It is usually a suffix '
                'that changes the part of speech: system + atic, compet + ence.',
                'Read the whole sentence first and decide what part of speech the gap '
                'needs. Then the letters follow.',
                'A gap near the end of a long abstract noun is almost always -ion, -ence, '
                '-ity or -ings.']),
        guided_text='No child is taught the rule for word order, and yet almost every child '
                    'has it right by the age of four. What they hear is a stream of speech '
                    'full of false starts and half sentences. What they produce, after a '
                    'short period of error, is system----. The errors themselves are the '
                    'clue: a child who says goed has never heard the form, so it cannot be '
                    'copi--. It has been built from a rule the child extract-- without being '
                    'told. Linguists call the knowledge that results compet----, and they '
                    'separate it from what a speaker happens to say on any one occas---.',
        guided_hint='system---- is systematic — the output follows a rule, even when the '
                    'rule produces a form no adult uses.',
        guided=['atic', 'ed', 'ed', 'ence', 'ion'],
        exam_text='The argument from the poverty of the stimulus runs like this. The speech a '
                  'child hears is finite, and much of it is ungrammat----. The sentences a '
                  'child can later produce are infin---. Something must bridge the gap, and '
                  'the proposal is that part of the structure is inn---, present before any '
                  'English is heard. The claim is not that grammar is inherited the way eye '
                  'colour is. It is that the mind arrives with a narrow set of opti---, and '
                  'that exposure to one language selects among th--. Critics answer that the '
                  'stimulus is richer than the argument allows, and that general learning can '
                  'do the work without a dedicated facul--. The debate has run for sixty years '
                  'because both sides point to real data. What has changed is the evidence: '
                  'large record---- of what children actually hear, rather than what adults '
                  'remember saying. On that evidence the input is less degraded than the early '
                  'argument assum--, which weakens one premise without settling the quest---. '
                  'Nobody now doubts that children bring something to the task. The argument '
                  'is about how much of it is specific to langu---.',
        exam=['ical', 'ite', 'ate', 'ons', 'em', 'ty', 'ings', 'ed', 'ion', 'age'],
    ),

    r2=dict(
        sub='Languages in contact',
        skill=('Reading two documents that do not agree',
               ['At B2 the two documents no longer simply add up. One of them qualifies, '
                'limits or contradicts the other.',
                'When a question could be answered from either document, check both — the '
                'later one usually wins.',
                'Watch for the word that limits a promise: normally, up to, subject to, '
                'where places remain.']),
        docs=[
            ('notice', 'Language Partner Scheme · how the pairing works', [
                '# What you get',
                '* One partner, matched on your target language and your level.',
                '* A log sheet. Ten contact hours a term count towards the certificate.',
                '* Three group sessions a term, normally in week 3, 7 and 11.',
                '# What we ask',
                '* Meet at least fortnightly. Half of the time in each language.',
                '* Log the hours within seven days. Hours logged later are not counted.',
                '# If it is not working',
                '* Tell the coordinator by week 6. Re-pairing after week 6 is possible '
                'only where places remain.',
            ], 'notice'),
            ('email', 'coordinator@northgate.edu', 'r.delgado@northgate.edu',
             '28/10/2026', 'Your partner — and the week 6 deadline', [
                 'Dear Ms Delgado,',
                 '',
                 'Thank you for letting me know. Three weeks without a reply is well',
                 'outside what the scheme expects, and I am sorry it has taken this long',
                 'to reach me.',
                 '',
                 'I can re-pair you, but I should be straight about the timing: we are',
                 'now in week 7, and after week 6 that depends on a place being free.',
                 'One has just come up, so I am holding it for you until Friday.',
                 '',
                 'Your four logged hours stay on your record. The ten-hour threshold is',
                 'for the certificate, not for the module, so nothing is at risk either way.',
                 '',
                 'Northgate Language Centre',
             ]),
        ],
        guided=[
            ('How many contact hours a term count towards the certificate?',
             ('Four', 'Seven', 'Ten', 'Eleven'), 2,
             'The notice sets the threshold at ten; four is what this student has logged so far.'),
            ('How often are partners asked to meet?',
             ('Weekly', 'At least fortnightly', 'Three times a term', 'Once a month'), 1,
             'At least fortnightly, with the three group sessions as a separate commitment.'),
            ('What happens to hours logged after seven days?',
             ('They count at half', 'They count towards the module only',
              'They are not counted', 'They need the coordinator to approve them'), 2,
             'The notice is flat about it: hours logged later are not counted at all.'),
            ('Why does the coordinator mention week 6?',
             ('The scheme closes then', 'Re-pairing after it depends on a free place',
              'The log sheet is collected then', 'Group sessions stop then'), 1,
             'After week 6 re-pairing is possible only where places remain, which is the '
             'limit the email then works around.'),
        ],
        exam=[
            ('What is the main purpose of the coordinator’s email?',
             ('To refuse a request', 'To explain a rule and offer a way round it',
              'To remind the student of the log deadline',
              'To arrange a group session'), 1,
             'It states the week 6 limit and then says a place has come up, which is the '
             'offer the rest of the message depends on.'),
            ('What is the student at risk of losing?',
             ('Her place on the module', 'Her four logged hours',
              'Nothing — only the certificate is affected', 'Her partner’s contact details'), 2,
             'The last paragraph separates the two: the threshold is for the certificate, '
             'and the module is not affected either way.'),
            ('By when must the student reply?',
             ('Week 6', 'Within seven days', 'Friday', 'The next group session'), 2,
             'The coordinator says the free place is being held until Friday, which is the '
             'only deadline the email itself sets.'),
            ('What does the notice say about which language to use?',
             ('The target language throughout', 'Half the time in each',
              'Whichever the partner prefers', 'It does not say'), 1,
             'Half of the time in each language, which is the point of pairing rather than '
             'simply providing a tutor.'),
            ('Which statement is supported by BOTH documents?',
             ('Re-pairing is automatic', 'Ten hours is a threshold for the certificate',
              'Group sessions are compulsory', 'Partners are matched by subject'), 1,
             'The notice sets the ten hours and the email calls it the threshold for the '
             'certificate; nothing else appears in both.'),
            ('What does "where places remain" limit?',
             ('The number of group sessions', 'Re-pairing after week 6',
              'The hours that can be logged', 'Who may join the scheme'), 1,
             'It is the qualifier attached to re-pairing after week 6, and it is why the '
             'coordinator has to hold a place rather than simply allocate one.'),
            ('What can be inferred about the coordinator’s view of the partner?',
             ('That the partner has left the university',
              'That three weeks of silence is not acceptable',
              'That the student contacted her too late',
              'That the partner was wrongly matched'), 1,
             'Well outside what the scheme expects is a judgement on the partner, not on '
             'the student, and it is followed by an apology rather than a reproach.'),
        ],
    ),

    r3=dict(
        sub='What a dictionary decides',
        title='Who Decides What a Word Means',
        words=271,
        paras=[
            'A dictionary looks like an authority, and most readers treat it as one. '
            'Lexicographers describe their work differently. They do not decide that a word '
            'means something; they record that a community of speakers uses it that way, and '
            'they record it only once the usage is established enough to be worth recording. '
            'The authority is borrowed from the speakers, and it is returned to them whenever '
            'they change their minds.',

            'The distinction is prescriptive against descriptive, and it is older than any '
            'modern dictionary. A prescriptive editor asks what a careful writer should do. A '
            'descriptive editor asks what careful writers in practice do, and reports it. No '
            'dictionary is purely one or the other: a usage note calling something disputed is '
            'doing prescriptive work inside a descriptive frame. But the direction of travel '
            'is clear. Entries that once carried a warning now carry a date, and the warning '
            'is likely to have been dropped rather than softened.',

            'What makes the question sharp is timing. A new sense may well be current among a '
            'million speakers and still be absent from every dictionary, because the editors '
            'are waiting to see whether it survives. There is little evidence that early '
            'recording changes how a word spreads, but editors are cautious anyway, and the '
            'lag can run to a decade. The cost of waiting is that the dictionary describes a '
            'slightly older language than the one being spoken. The cost of not waiting is a '
            'book full of words nobody kept. Neither cost can be avoided, which is why where '
            'the line falls is a matter of convention rather than of principle.',
        ],
        skill=('Reading an argument that concedes',
               ['A B2 passage rarely argues one side. It makes a claim, grants what the other '
                'side has right, and then says why the claim survives anyway.',
                'The concession is usually marked: no dictionary is purely one or the other, '
                'but the direction of travel is clear.',
                'At least one question will ask what the author concedes. Find the but, and '
                'the concession is the clause before it.']),
        guided=[
            ('What is the passage mainly about?',
             ('How new words are invented', 'Whether a dictionary records usage or rules on it',
              'Why dictionaries take so long to publish',
              'The history of English lexicography'), 1,
             'All three paragraphs turn on the same question: whether the editor describes '
             'what speakers do or prescribes what they should do.'),
            ('According to the passage, where does a dictionary’s authority come from?',
             ('Its editors', 'Its age', 'The speakers whose usage it records',
              'The publisher'), 2,
             'The authority is borrowed from the speakers and returned to them when usage '
             'changes, which is the opposite of the editors holding it.'),
            ('What does the author concede about dictionaries?',
             ('That they are often inaccurate', 'That none is purely descriptive',
              'That they are no longer read', 'That editors disagree with each other'), 1,
             'No dictionary is purely one or the other is granted before the author goes on '
             'to insist that the direction of travel is still clear.'),
            ('The word "lag" in the last paragraph is closest in meaning to',
             ('mistake', 'delay', 'increase', 'warning'), 1,
             'It is the gap between a sense becoming current and the editors recording it, '
             'so it is a delay.'),
        ],
        exam=[
            ('Why does the author mention usage notes?',
             ('To show that no dictionary is purely descriptive',
              'To explain how entries are ordered',
              'To criticise prescriptive editors',
              'To date the earliest dictionaries'), 0,
             'The usage note is offered as prescriptive work inside a descriptive frame, '
             'which is the evidence for the concession.'),
            ('What does the change from a warning to a date suggest?',
             ('That editors have become stricter', 'That dictionaries are now shorter',
              'That practice has moved towards describing rather than ruling',
              'That dates are easier to verify'), 2,
             'A warning tells the reader what to do; a date simply records. Replacing one '
             'with the other is the direction of travel the author names.'),
            ('Why do editors wait before recording a new sense?',
             ('To avoid legal difficulty', 'To see whether the sense survives',
              'To allow the publisher to approve it',
              'Because speakers object to early recording'), 1,
             'Waiting to see whether it survives is given as the reason, and the risk of not '
             'waiting is a book full of words nobody kept.'),
            ('What is the author’s view of early recording?',
             ('It makes a word spread faster', 'It has little demonstrated effect on spread',
              'It should be avoided entirely', 'It is now standard practice'), 1,
             'There is little evidence that early recording changes how a word spreads is a '
             'rejection, not a doubt, and it is the author’s own position.'),
            ('All of the following are stated about the lag EXCEPT:',
             ('It can run to a decade', 'It makes the dictionary slightly out of date',
              'It is caused by editorial caution', 'It is shrinking as corpora grow'), 3,
             'The passage never claims the lag is shrinking; the other three are all stated '
             'in the last paragraph.'),
            ('What does the author mean by "neither cost can be avoided"?',
             ('Both waiting and not waiting have a price',
              'Dictionaries are too expensive to produce',
              'Editors are not paid enough',
              'The two costs cancel each other out'), 0,
             'The two costs named are describing an older language and recording words that '
             'did not last, and the sentence says there is no option without one of them.'),
            ('A "matter of convention" in the last line means that the choice is',
             ('determined by evidence', 'agreed rather than forced by the facts',
              'made by the publisher alone', 'different in every language'), 1,
             'Convention is contrasted with principle, so the point is that the line is '
             'settled by agreement rather than derived from anything necessary.'),
            ('Which best describes the structure of the passage?',
             ('A problem followed by a solution',
              'A claim, a concession, and the reason the claim survives',
              'Two opposed views left unresolved',
              'A history followed by a prediction'), 1,
             'The first two paragraphs make and qualify the claim, and the third explains why '
             'the difficulty does not overturn it.'),
            ('What would most weaken the author’s position?',
             ('Evidence that dictionaries sell fewer copies than before',
              'Evidence that recording a new sense measurably speeds its spread',
              'Evidence that editors disagree about usage notes',
              'Evidence that the lag varies between languages'), 1,
             'The author rests on there being little evidence that recording changes spread, '
             'so a demonstrated effect would remove the support for editorial caution.'),
        ],
    ),

    # ------------------------------------------------------------- listening --
    l1=dict(
        sub='How children acquire grammar',
        caption='Two students after a lecture on first-language acquisition',
        skill=('Hearing the speaker who is not convinced',
               ['At B2 one speaker usually holds back. Listen for the hedge: I suppose, '
                'up to a point, that is one reading.',
                'The disagreement is rarely stated. It arrives as a question that reframes '
                'what the other person just said.',
                'An item asking what one speaker implies is asking you to hear the hedge, '
                'not the words.']),
        warm=[
            ('Woman: Did you follow the part about the poverty of the stimulus?',
             ('I sat near the front.', 'Up to a point — I lost it at the counter-argument.',
              'The lecture was at four.', 'Yes, it was poor.'), 1,
             'A yes/no question about understanding, answered with a qualified yes and the '
             'place where understanding stopped.'),
            ('Man: So you think the whole argument falls apart?',
             ('No — I think one premise does.', 'Yes, I attended.',
              'It was about two hours.', 'The argument is on page four.'), 0,
             'A checking question that overstates the other speaker, so the useful reply '
             'corrects the scope rather than agreeing or refusing.'),
            ('Woman: Have you ever heard a child say "goed"?',
             ('My niece said it for about a year.', 'It is not a real word.',
              'Children learn quickly.', 'No, I have not read it.'), 0,
             'A question about personal experience wants an instance, not a judgement on '
             'whether the form is correct.'),
        ],
        script=[
            ('Woman', 'Did you follow the part about the poverty of the stimulus?'),
            ('Man', 'I think so. The input is too thin to explain the output, so something '
                    'must already be there.'),
            ('Woman', 'That is the claim. Did you find it convincing?'),
            ('Man', 'Up to a point. The bit I could not get past was the evidence. He said '
                    'the input is degraded, and then the slide showed recordings that looked '
                    'perfectly well formed to me.'),
            ('Woman', 'He did say the corpus work had changed the picture.'),
            ('Man', 'He said it in one sentence and moved on. If the input turns out to be '
                    'rich, the argument loses a premise, and that is not a footnote.'),
            ('Woman', 'So you think the whole argument falls apart?'),
            ('Man', 'No — I think one premise does. The other half, that children produce '
                    'forms they have never heard, is not touched by any of it.'),
            ('Woman', 'That is fair. Goed, and so on.'),
            ('Man', 'Exactly. Nobody says goed to a child. The child builds it.'),
            ('Woman', 'Are you going to put that in the essay?'),
            ('Man', 'I was going to ask you the same thing. It feels like the interesting '
                    'question, but I cannot tell whether he wants an argument or a summary.'),
        ],
        items=[
            ('What does the man say he could not get past?',
             ('The lecturer’s delivery', 'The evidence for degraded input',
              'The length of the lecture', 'The reading list'), 1,
             'He names the slide showing recordings that looked well formed as the thing that '
             'stopped him accepting the premise.'),
            ('What does the woman imply when she says the lecturer mentioned corpus work?',
             ('That the man was not listening', 'That the point was already addressed',
              'That the corpus work is unreliable', 'That she disagrees with the lecturer'), 1,
             'She offers it as a defence of the lecturer, which the man then rejects on the '
             'grounds that one sentence is not enough.'),
            ('Why does the man mention a footnote?',
             ('To cite a source', 'To say the problem is too important to pass over quickly',
              'To recommend further reading', 'To criticise the slides'), 1,
             'Calling something not a footnote is a way of saying it deserved more than the '
             'single sentence it got.'),
            ('What is the man’s actual position?',
             ('The whole argument fails', 'One premise fails and the rest survives',
              'The argument is proved', 'The question cannot be settled'), 1,
             'He corrects the woman explicitly: one premise does, and the other half is not '
             'touched by the objection.'),
            ('Why do both speakers mention "goed"?',
             ('It is on the reading list', 'It is a form no adult supplies',
              'It is the lecturer’s example', 'It shows children copy adults'), 1,
             'Nobody says goed to a child, so producing it is evidence the child built a rule '
             'rather than copied a form.'),
            ('What does the man want to know?',
             ('When the essay is due', 'Whether the essay should argue or summarise',
              'Which corpus to use', 'Whether the woman attended'), 1,
             'His last line says he cannot tell whether the lecturer wants an argument or a '
             'summary, which is the question he puts to her.'),
            ('What is the relationship between the two speakers?',
             ('Tutor and student', 'Students on the same course',
              'Researcher and interviewer', 'Strangers at a public lecture'), 1,
             'They attended the same lecture and are writing the same essay, which places '
             'them on the same course rather than in any teaching relationship.'),
        ],
    ),

    l2=dict(
        sub='Languages in contact',
        caption='An announcement at the Language Centre',
        poster=['Language Partner Scheme · re-pairing closes Friday',
                'Group session moved to Room 2.14',
                'Log your hours within seven days'],
        skill=('Hearing a condition inside an announcement',
               ['A B2 announcement rarely says only what is happening. It attaches a '
                'condition: provided that, as long as, unless you have already.',
                'The condition is the part that gets tested, because it is the part that '
                'decides whether the news applies to you.',
                'Listen for the turn: that said, however, one exception.']),
        warm=[
            ('Man: Is the group session still in the usual room?',
             ('It moved to 2.14 this week.', 'Yes, it was useful.',
              'About fifteen people.', 'I have not logged my hours.'), 0,
             'A yes/no question about a room is answered with the change, which is more '
             'useful than a bare no.'),
            ('Woman: I have not logged last week’s hours yet.',
             ('You have until Tuesday, then they stop counting.', 'The room has moved.',
              'There were four of us.', 'Yes, I enjoyed it.'), 0,
             'An admission of something undone invites the deadline that applies to it.'),
            ('Man: Does re-pairing still close on Friday?',
             ('Yes, unless the coordinator has already held a place for you.',
              'The scheme started in week 1.', 'No, I am not re-paired.',
              'It is a good scheme.'), 0,
             'A checking question about a deadline is answered by confirming it and naming '
             'the one exception that matters.'),
        ],
        script=[
            ('Woman', 'Two things from the Language Centre before you go. First, the group '
                      'session has moved from the seminar room to Room 2.14, from this week '
                      'onwards, not just for one week. Second, and more importantly: '
                      're-pairing for the partner scheme closes on Friday at five. If your '
                      'partner has stopped replying, tell the coordinator before then, '
                      'because after Friday nothing can be done until next term. That said, '
                      'there is one exception. If the coordinator has already written to you '
                      'holding a place, that place is yours whether or not you confirm it by '
                      'Friday — you simply need to take it up within two weeks. Finally, a '
                      'reminder that hours are logged within seven days of the meeting. We '
                      'have had a run of claims for hours from early October, and I am sorry, '
                      'but those cannot be counted. The seven days is not a guideline.'),
        ],
        items=[
            ('What is the main purpose of the announcement?',
             ('To advertise the partner scheme', 'To give a deadline and the exception to it',
              'To report on attendance', 'To introduce a new coordinator'), 1,
             'Most of the announcement sets the Friday deadline and then names the one case '
             'in which it does not bite.'),
            ('What has changed about the group session?',
             ('Its time', 'Its room, permanently', 'Its room, for one week only',
              'It has been cancelled'), 1,
             'The speaker is explicit: from this week onwards, not just for one week.'),
            ('Who is not bound by the Friday deadline?',
             ('Anyone who has logged ten hours',
              'Anyone the coordinator has already written to holding a place',
              'Anyone whose partner has left', 'First-year students'), 1,
             'That is the stated exception, and it comes with its own two-week limit instead.'),
            ('What happens to hours from early October?',
             ('They count at half', 'They need the coordinator’s approval',
              'They cannot be counted', 'They count towards next term'), 2,
             'The speaker apologises but is flat about it, and adds that the seven days is '
             'not a guideline.'),
            ('Why does the speaker say "the seven days is not a guideline"?',
             ('To soften the refusal', 'To make clear the rule will not be bent',
              'To correct an earlier announcement', 'To explain how to log hours'), 1,
             'It follows an apology, which would otherwise read as an invitation to ask for '
             'an exception, and closes that off.'),
            ('What must someone holding a place do?',
             ('Confirm it by Friday', 'Take it up within two weeks',
              'Log ten hours first', 'Attend the group session'), 1,
             'The place is theirs whether or not they confirm by Friday, but it has to be '
             'taken up within two weeks.'),
        ],
    ),

    l3=dict(
        sub='What a dictionary decides',
        caption='A talk on how new words enter a dictionary',
        board=['Coinage → circulation → record',
               'Editors wait: will it survive?',
               'Corpus evidence, not editorial taste',
               'The lag is a choice, not a failure'],
        skill=('Following a talk that answers its own objection',
               ['A B2 academic talk usually raises the obvious objection itself, then '
                'answers it. Both halves get tested.',
                'The signal is a rhetorical question: so why not simply record everything?',
                'The answer that follows is the speaker’s real position, not the question.']),
        warm=[
            ('Woman: How long does a word wait before it goes in?',
             ('About thirty entries a year.', 'Typically five to ten years.',
              'Yes, quite a long time.', 'In the online edition.'), 1,
             'How long wants a span of time; a count of entries and a yes answer a different '
             'question entirely.'),
            ('Man: So the editors decide what counts as a word?',
             ('No — the evidence does, and they read it.', 'Yes, there are about twenty.',
              'The dictionary is updated quarterly.', 'I have a copy at home.'), 0,
             'A checking question that misstates the position, so the reply corrects it and '
             'says where the authority actually sits.'),
            ('Woman: What happens to a word that stops being used?',
             ('It is marked, not deleted.', 'It was coined in 1critical.',
              'About four a year.', 'Yes, that happens.'), 0,
             'A what-happens question wants the procedure, and the answer draws the '
             'distinction between marking and removing.'),
        ],
        script=[
            ('Man', 'A word does not enter a dictionary when it is invented. It enters when '
                    'enough people have used it, in enough different places, for long enough '
                    'that an editor is confident it will still be there in ten years. That '
                    'confidence is the whole job. Now, the obvious objection: so why not '
                    'simply record everything, and mark what is rare? Storage costs nothing '
                    'online, and the lag frustrates everybody. It is a fair question, and the '
                    'answer is not sentimental. A dictionary that records everything stops '
                    'being evidence of anything. The reason a lexicographer can tell you that '
                    'a sense is established is precisely that it cleared a threshold. Remove '
                    'the threshold and the entry carries no information: it tells you somebody '
                    'once used the word, which you already knew, because you are looking it '
                    'up. So the lag is not a failure of the method. It is the method. What has '
                    'genuinely changed is the evidence base. Editors used to rely on reading '
                    'programmes — staff and volunteers sending in slips. Now a corpus of '
                    'billions of words answers in seconds the question that used to take a '
                    'decade of slips. The threshold has not moved. What has moved is how fast '
                    'we can see it being crossed, and any editor who ignores that evidence '
                    'is bound to be overtaken by one who does not.'),
        ],
        items=[
            ('What is the main point of the talk?',
             ('Dictionaries are too slow', 'The waiting period is what makes an entry informative',
              'Corpora have replaced editors', 'New words are invented faster than before'), 1,
             'The speaker argues that the threshold is what gives an entry its meaning, so '
             'the lag is the method rather than a fault in it.'),
            ('What objection does the speaker raise?',
             ('That corpora are unreliable', 'That everything could simply be recorded and marked',
              'That editors are too few', 'That readers do not use dictionaries'), 1,
             'He puts it as a rhetorical question — why not record everything and mark what '
             'is rare — before answering it.'),
            ('Why does the speaker say an entry would carry no information?',
             ('Because nobody reads usage notes',
              'Because recording everything removes the threshold that made it meaningful',
              'Because corpora are too large', 'Because rare words change meaning'), 1,
             'Without a threshold the entry only shows that someone once used the word, which '
             'the reader knew by looking it up.'),
            ('What does the speaker say has changed?',
             ('The threshold', 'The evidence base, not the threshold',
              'The number of editors', 'The definition of a word'), 1,
             'He is explicit: the threshold has not moved, only how fast we can see it being '
             'crossed.'),
            ('What were reading programmes?',
             ('Courses for lexicographers', 'Staff and volunteers sending in slips',
              'Published lists of new words', 'Automatic corpus searches'), 1,
             'That is the definition given, and it is contrasted with the corpus that now '
             'answers the same question in seconds.'),
            ('What does the speaker mean by "the lag is not a failure of the method — it is the method"?',
             ('The delay should be made longer', 'The delay is what the method consists of',
              'The method has failed', 'The delay is caused by staffing'), 1,
             'He is restating that waiting to clear a threshold is the procedure itself, not '
             'an unwanted side effect of it.'),
            ('What does the speaker predict about editors who ignore corpus evidence?',
             ('They will be more accurate', 'They will be overtaken',
              'They will work more slowly', 'They will record fewer words'), 1,
             'Is bound to be overtaken is the strongest commitment in the talk, and he uses '
             'it for exactly this claim.'),
        ],
    ),

    # -------------------------------------------------------------- speaking --
    sp=[
        dict(
            sub='How children acquire grammar',
            focus='keeping a long noun clause intact to the end of the sentence',
            skill=('Listen and Repeat with an embedded clause',
                   ['The sentences now carry a clause inside a clause. If you drop the first '
                    'half, the second half makes no sense.',
                    'Breathe before the clause, not inside it.',
                    'Keep statement word order after where, what and whether — this is the '
                    'single most common slip at B2.']),
            repeat=[
                'Children acquire grammar early.',
                'Nobody teaches them the rules.',
                'What they produce is systematic.',
                'A child who says goed has never heard the form.',
                'Linguists ask what the child must already know.',
                'The question is whether the input alone can explain the output.',
                'Nobody doubts that children bring something to the task, and the argument is about how much.',
            ],
            theme='learning a language as a child and as an adult',
            qs=[
                'Thank you for taking part. To begin with, how many languages were spoken '
                'around you when you were small?',
                'People often say children learn languages effortlessly and adults do not. '
                'From what you have seen, is that fair? What do adults find hardest?',
                'Now your opinion. Some argue that a child who grows up with two languages '
                'ends up weaker in both. Do you agree? Why or why not?',
                'One last question. If a government could fund only one, should it fund '
                'language teaching for young children or for adults arriving in the country? '
                'Why?',
            ],
            model=[(2, 'Up to a point. Children do pick up the sound system in a way adults '
                       'rarely manage. But adults learn the grammar faster, because they can '
                       'use a rule once they are told it, and a child cannot.'),
                   (3, 'I do not agree, although I understand where it comes from. The '
                       'evidence I have seen suggests the vocabulary is split across two '
                       'languages early on and then catches up. What looks like a deficit at '
                       'five is usually gone by ten.')],
            selfcheck=['I kept statement word order inside what, where and whether.',
                       'I conceded a point before disagreeing.',
                       'I finished the long sentence without restarting it.'],
        ),
        dict(
            sub='Languages in contact',
            focus='linking across a clause boundary without pausing',
            skill=('Taking an Interview on an unfamiliar angle',
                   ['At B2 one of the four questions will be about something you have no '
                    'experience of. You are not being tested on experience.',
                    'Say so, then reason: I have not come across that myself, but I would '
                    'expect that…',
                    'An honest hypothesis in good English scores far above a confident '
                    'invention.']),
            repeat=[
                'Two languages meet in a city.',
                'Speakers borrow what they need.',
                'A borrowed word changes shape to fit.',
                'Nobody decides which words will be borrowed.',
                'The borrowing runs in both directions, though rarely at the same rate.',
                'What gets borrowed first is usually what the other language has a name for.',
                'A language that borrows heavily is not weakening, whatever its speakers may be told about it.',
            ],
            theme='living between two languages',
            qs=[
                'Thanks for joining me. First, in your daily life, do you move between '
                'languages? When does that happen most?',
                'Some people switch language in the middle of a sentence. Others find that '
                'uncomfortable. How do you react to it, and why do you think that is?',
                'Here is an opinion to respond to. Some argue that borrowing words from '
                'English damages a language. Do you agree? Why or why not?',
                'Finally, should a country require official documents to be published in '
                'every language widely spoken there, whatever the cost? Why?',
            ],
            model=[(2, 'It does not bother me at all, probably because I grew up hearing it. '
                       'When people switch, they usually switch for a reason — a word that '
                       'is sharper in the other language, or a person joining the group.'),
                   (4, 'I would support it up to a threshold — say, any language spoken by '
                       'more than a small percentage. Below that the cost per reader becomes '
                       'very hard to defend against, say, interpreting services.')],
            selfcheck=['I answered the question I was asked, not the one I expected.',
                       'I gave a reason, not only a position.',
                       'I used at least one hedge where I was not certain.'],
        ),
        dict(
            sub='What a dictionary decides',
            focus='stress on the word that carries the contrast',
            skill=('Making a concession out loud',
                   ['The highest-scoring move in the interview is to grant the other side '
                    'something real and then say why you still disagree.',
                    'It needs two stresses: that is TRUE of formal writing, but MOST writing '
                    'is not formal.',
                    'Without the stress the concession sounds like agreement and the examiner '
                    'hears no argument.']),
            repeat=[
                'A dictionary records usage.',
                'It does not invent meanings.',
                'Editors wait before adding a sense.',
                'The waiting is deliberate, not slow.',
                'What they are waiting for is evidence that the sense will last.',
                'A dictionary that recorded everything would tell you nothing you did not know.',
                'That is true of the printed edition, but the online one is updated far more often than most readers realise.',
            ],
            theme='authority, correctness and who owns a language',
            qs=[
                'Thank you for your time. To start, when you are unsure about a word, where '
                'do you look it up, and do you trust what you find?',
                'Some people say that a word is not real until it is in a dictionary. Others '
                'say the dictionary is simply a record. Which is closer to your view, and why?',
                'Now an opinion question. Should schools teach students that some common '
                'usages are simply wrong, even when millions of people use them? Why or why '
                'not?',
                'And lastly. If a language is spoken by very few people, should public money '
                'be spent recording and teaching it? Why?',
            ],
            model=[(2, 'The second, clearly. A word is real the moment people use it and are '
                       'understood. The dictionary is useful precisely because it comes '
                       'afterwards, not because it grants permission.'),
                   (3, 'I would teach the difference rather than the verdict. Students need '
                       'to know which forms are expected in an examination, and that is not '
                       'the same as saying the other form is wrong.')],
            selfcheck=['I stressed the contrasting word, not the whole clause.',
                       'I granted something before disagreeing.',
                       'I kept going for the full answer without a long pause.'],
        ),
    ],

    # --------------------------------------------------------------- writing --
    w1=dict(
        sub='Questions inside sentences',
        skill=('Build a Sentence at B2',
               ['The tiles are longer now, and more of them carry a whole phrase rather than '
                'one word.',
                'Almost every item still builds a question or a question inside another '
                'sentence. Find the question word first and decide whether it starts the '
                'sentence or sits inside it.',
                'Inside another clause, the word order is a statement: I do not know where '
                'it is, never where is it.']),
        guided=[
            ('A friend says her two-year-old has started saying "goed".',
             ['whether', 'know', 'do', 'that', 'is', 'you', 'a mistake', 'really', 'or a rule'],
             'Do you know whether that is really a mistake or a rule?'),
            ('The department is advertising a place on the fieldwork trip.',
             ['me', 'can', 'tell', 'the deadline', 'you', 'what', 'for applying', 'is', 'exactly'],
             'Can you tell me exactly what the deadline for applying is?'),
            ('My supervisor asked about my data.',
             ['she', 'how many', 'wanted', 'recordings', 'to know', 'I', 'had', 'already', 'transcribed'],
             'She wanted to know how many recordings I had already transcribed.'),
        ],
        exam=[
            ('The lecture on bilingualism is on Thursday.',
             ['is', 'what', 'the talk', 'exactly', 'about', 'do', 'you', 'happen to', 'know'],
             'Do you happen to know exactly what the talk is about?'),
            ('Two of the recordings are missing from the archive.',
             ['to know', 'nobody', 'where', 'seems', 'they', 'have', 'gone', 'in the end', 'actually'],
             'Nobody seems to know where they have actually gone in the end.'),
            ('The dictionary added forty new senses this year.',
             ['decides', 'what', 'which', 'I wonder', 'ones', 'go in', 'and', 'which', 'do not'],
             'I wonder what decides which ones go in and which do not.'),
            ('I have to choose a dissertation topic by Friday.',
             ['whether', 'know', 'I', 'do not', 'my topic', 'is', 'narrow enough', 'really', 'yet'],
             'I do not know yet whether my topic is really narrow enough.'),
            ('A speaker from Lagos and a speaker from Leeds understand each other.',
             ['exactly', 'can', 'anybody', 'how', 'explain', 'that', 'works', 'it', 'at all'],
             'Can anybody explain exactly how it works at all?'),
            ('The seminar room has been changed again.',
             ['told', 'nobody', 'us', 'which', 'we', 'room', 'are', 'in', 'now'],
             'Nobody told us which room we are in now.'),
            ('I read that no language has more than about fifty sounds.',
             ['true', 'do', 'whether', 'know', 'you', 'that', 'is', 'actually', 'of every language'],
             'Do you know whether that is actually true of every language?'),
        ],
    ),

    w2=dict(
        sub='Languages in contact',
        to='coordinator@northgate.edu',
        date='29/10/2026',
        subject='Partner scheme — no contact since 6 October',
        scenario=[
            'You joined the Language Partner Scheme and were paired in week 2. Your partner '
            'replied twice and has not answered since 6 October, three weeks ago. You have '
            'four hours logged out of the ten the certificate needs, and the notice says '
            're-pairing after week 6 depends on a free place. It is now week 7.',
            'Write an email to the scheme coordinator.',
        ],
        bullets=['Explain what has happened and when the contact stopped.',
                 'Say what you have already tried.',
                 'Ask what can be done about the hours and about a new partner.'],
        skill=('Writing a complaint that is easy to say yes to',
               ['A B2 email about a problem does three things a B1 email does not: it dates '
                'the facts, it shows what you already tried, and it names the outcome you '
                'want.',
                'Hedge the blame, not the facts. Something may have come up at her end is '
                'generous; I have had no reply since 6 October is not negotiable.',
                'Ask one clear question. A coordinator who can answer in one line usually '
                'answers the same day.']),
        model=[
            'Dear Coordinator,',
            '',
            'I am writing about my language partner pairing, which I think may have stalled.',
            '',
            'We were paired in week 2 and met twice, on 22 and 29 September. Since my message '
            'of 6 October I have had no reply, although I have written twice more, on 13 and '
            '21 October, and left a note at the Centre desk last week. Something may well '
            'have come up at her end, and I would not want to assume otherwise.',
            '',
            'Two things follow from it, and I would be grateful for a line on each. First, I '
            'have four hours logged of the ten the certificate needs, and I am not sure '
            'whether those hours stand if the pairing ends. Second, I know re-pairing after '
            'week 6 depends on a free place, and we are now in week 7 — is there anything '
            'still available?',
            '',
            'I am free to meet any afternoon this week if that is easier than writing.',
            '',
            'With thanks,',
            'Rafael Delgado',
        ],
        notes=['Every fact carries a date, so the coordinator can check it without asking.',
               'Three attempts are listed before any request is made.',
               'The blame is hedged — may well have come up — while the facts are not.',
               'Two numbered questions, each answerable in one line.'],
        bandpair=dict(
            mid=[
                'Dear Coordinator,',
                'I am writing because my language partner is not replying to me. We were '
                'paired at the start of term and met a couple of times, but since the '
                'beginning of October I have not heard anything from her at all.',
                'I have sent her several messages and she has not answered any of them. I do '
                'not know what has happened. This is a problem because I need ten hours for '
                'the certificate and I only have four.',
                'Could you please tell me what I should do? I would like a new partner if '
                'that is possible. Thank you for your help with this matter.',
                'Best regards, Rafael Delgado',
            ],
            top=[
                'Dear Coordinator,',
                'I am writing about my language partner pairing, which I think may have '
                'stalled. We were paired in week 2 and met twice, on 22 and 29 September. '
                'Since my message of 6 October I have had no reply, although I have written '
                'twice more and left a note at the Centre desk.',
                'Something may well have come up at her end, and I would not want to assume '
                'otherwise. Two things follow, and I would be grateful for a line on each.',
                'First, I have four of the ten hours the certificate needs, and I am not sure '
                'whether those stand if the pairing ends. Second, re-pairing after week 6 '
                'depends on a free place — is there anything still available?',
                'I am free any afternoon this week. With thanks, Rafael Delgado',
            ],
            diffs=[
                'It dates every fact. "Since my message of 6 October" can be checked; "since '
                'the beginning of October" cannot.',
                'It separates the two requests and numbers them, so each can be answered in '
                'one line rather than in a paragraph.',
                'It hedges the blame and not the facts: "may well have come up at her end" '
                'beside "I have had no reply".',
                'It shows the rule has been read — re-pairing after week 6 — which turns a '
                'complaint into a question the coordinator can simply answer.',
                'It offers something: an afternoon this week, rather than only asking.',
            ],
        ),
    ),

    w3=dict(
        sub='What a dictionary decides',
        prof='Dr Okonjo',
        question='Dictionaries are often described as authorities on a language, but most '
                 'lexicographers say they only record what speakers already do. Some argue '
                 'that schools should teach the forms a dictionary records as correct, and '
                 'that anything else is simply error. Others argue that treating any usage as '
                 'error misunderstands how language works. Should schools teach that some '
                 'common usages are wrong? Why or why not?',
        posts=[('Hana', 'w',
                'I think schools have to teach a standard, whatever its origins. Students are '
                'examined in it, employers expect it, and pretending otherwise leaves them to '
                'discover the cost on their own. Calling a form non-standard is not a claim '
                'about its logic, only about where it is accepted.'),
               ('Luka', 'm',
                'I would go further than Hana and say the standard is worth defending on its '
                'own terms. If every usage is equally good, the word correct stops meaning '
                'anything, and a shared written language is harder to maintain than people '
                'assume. Someone has to hold the line.')],
        skill=('Engaging with the other posts, not writing past them',
               ['At B2 a top answer names one of the posts and does something to it: extends '
                'it, limits it, or turns it round.',
                'The move that scores is agree-with-reservation. Hana is right that X, but '
                'that argument supports Y rather than Z.',
                'Do not agree with both posts. If they disagree with each other, agreeing '
                'with both means you have not read them.']),
        starters=['Hana is right that…, although that argument supports… rather than…',
                  'Luka assumes that…, and it is doubtful whether that holds.',
                  'The distinction I would draw is between… and…',
                  'What follows from this is not… but…'],
        model=[
            'Hana is right that students are examined in a standard and pay a price for not '
            'having it. But that argument supports teaching where a form is accepted, not '
            'teaching that it is wrong, and the two are easy to confuse in a classroom.',
            'Luka goes further and says the standard is worth defending on its own terms. It '
            'is doubtful whether that holds. The forms we now call correct were, by and large, '
            'somebody else’s error two hundred years ago, and the ones that survived did so '
            'because enough people used them, not because they were better built. A rule that '
            'has that history cannot easily be defended as logic.',
            'The distinction I would draw is between accuracy and acceptability. A student who '
            'writes a non-standard form has not failed to think; they have used a form that '
            'the examiner will not accept. Telling them that plainly is more useful than '
            'telling them it is wrong, because it tells them what to do about it.',
            'So I would teach the standard hard, and teach it as a convention. That is not a '
            'weaker position than Luka’s. It is the same lesson with an honest reason behind '
            'it, and students can tell the difference.',
        ],
        model_words=204,
    ),

    # --------------------------------------------------------------- grammar --
    gram=dict(
        title='Noun clauses and embedded questions',
        headers=['Structure', 'Example'],
        rows=[
            ('that-clause as object', 'Researchers argue that the input is richer than was assumed.'),
            ('that-clause as subject', 'That children invent rules is not in dispute.'),
            ('the fact that', 'The fact that she says goed shows she has built a rule.'),
            ('wh- clause as object', 'Nobody knows exactly what decides the order.'),
            ('whether / if clause', 'Editors are waiting to see whether the sense survives.'),
            ('embedded question, statement order',
             'Do you know where the recordings are?  NOT  where are the recordings'),
            ('a question as the subject', 'How much of it is innate is still argued over.'),
        ],
        notes=[
            'A noun clause does the job of a noun. If you can replace the whole clause with '
            'the word "something", it is a noun clause.',
            'That can be left out after common verbs (I think he knows) but not when the '
            'clause is the subject (That he knows is obvious).',
            'Whether and if are interchangeable after most verbs, but only whether can come '
            'before an infinitive or after a preposition: the question of whether, not the '
            'question of if.',
        ],
        watch='The commonest B2 error in the whole course: keeping question word order inside '
              'another clause. "I do not know where is it" is wrong in every register. Once '
              'the question is embedded, it is a statement.',
        ex=[
            ('Rewrite as an embedded question beginning with the words given.',
             ['Where are the recordings kept?  →  Do you know ______',
              'What does the editor decide?  →  Nobody is sure ______',
              'Has the sense survived?  →  The editors are waiting to see ______',
              'How much is innate?  →  ______ is still argued over.',
              'Why did she say goed?  →  Can you explain ______',
              'When will the entry appear?  →  I have no idea ______'],
             ['where the recordings are kept', 'what the editor decides',
              'whether the sense has survived', 'How much is innate',
              'why she said goed', 'when the entry will appear']),
            ('Join the two sentences using "the fact that".',
             ['She says goed. This shows she has a rule.',
              'The input is rich. This weakens the argument.',
              'No adult supplies the form. This is the key point.',
              'The lag runs to a decade. Editors accept this.'],
             ['The fact that she says goed shows she has a rule.',
              'The fact that the input is rich weakens the argument.',
              'The fact that no adult supplies the form is the key point.',
              'Editors accept the fact that the lag runs to a decade.']),
            ('Choose that, whether or what.',
             ['Nobody doubts ______ children bring something to the task.',
              'The question is ______ the input alone can explain the output.',
              '______ the child produces is systematic.',
              'Editors must decide ______ a sense will last.',
              'It is clear ______ the threshold has not moved.'],
             ['that', 'whether', 'What', 'whether', 'that']),
        ],
        bas='Almost every Build a Sentence item in the real test is one of these structures. '
            'Eight of the ten in the official paper build a direct or an embedded question; '
            'the other two build a relative clause. If you can produce the seven rows above '
            'without thinking, you can produce the whole task.',
    ),

    fault=dict(
        text='In this essay I will discuss that how children learn grammar. The researchers '
             'asked that whether the input was rich enough for the task. Many linguists '
             'believes that the stimulus is poorer than it looks. The fact of that a child '
             'says goed is strong evidence for a rule. Nobody knows exactly where does the '
             'boundary lie.',
        faults=[
            ('discuss that how', 'discuss how',
             'A wh- clause needs no that in front of it; one of the two has to go.'),
            ('asked that whether', 'asked whether',
             'Whether already introduces the clause, so that is not added as well.'),
            ('linguists believes', 'linguists believe',
             'The subject is plural, so the verb takes no s. Long subjects hide this.'),
            ('The fact of that', 'The fact that',
             'The fixed phrase is the fact that; there is no of in it.'),
            ('where does the boundary lie', 'where the boundary lies',
             'An embedded question keeps statement word order: no does, and the verb agrees.'),
        ],
    ),

    # ---------------------------------------------------------------- review --
    rev=dict(
        vocab=[
            ('present from birth, not learned', 'innate'),
            ('anything a person actually says', 'utterance'),
            ('decided by agreement, not by reason', 'arbitrary'),
            ('the rules for putting words in order', 'syntax'),
            ('the whole stock of words a language has', 'lexicon'),
            ('a judgement you can make but not explain', 'intuition'),
            ('what a speaker knows, as against what they say', 'competence'),
            ('found in every language examined so far', 'universal'),
            ('believable, though not yet proved', 'plausible'),
            ('produced without planning', 'spontaneous'),
            ('recording what people actually say', 'descriptive'),
            ('the point at which something starts to count', 'threshold'),
        ],
        gram=[
            ('Do you know ______ the recordings are kept?', 'where'),
            ('______ children invent rules is not in dispute.', 'That'),
            ('The editors are waiting to see ______ the sense survives.', 'whether'),
            ('The fact ______ she says goed shows she has a rule.', 'that'),
            ('Nobody is sure ______ the editor decides.', 'what'),
            ('I have no idea ______ the entry will appear.', 'when'),
            ('It is doubtful ______ that argument holds.', 'whether'),
            ('______ much of it is innate is still argued over.', 'How'),
        ],
        mini=[
            ('A dictionary entry is added once a sense has',
             ('been approved by an editor', 'cleared a threshold of evidence',
              'appeared in print', 'been used by a famous writer'), 1,
             'The talk makes the threshold the whole point: without it the entry carries no '
             'information at all.'),
            ('"Goed" is evidence of a rule because',
             ('children hear it from adults', 'no adult supplies the form',
              'it appears in dictionaries', 'it is grammatically correct'), 1,
             'Nobody says goed to a child, so the child must have built it from a rule rather '
             'than copied it.'),
            ('A prescriptive editor asks',
             ('what careful writers do', 'what a careful writer should do',
              'how often a word appears', 'when a word was coined'), 1,
             'Prescribing is saying what ought to be said; describing is reporting what is '
             'said, and the passage contrasts the two directly.'),
            ('Which sentence is correct?',
             ('I do not know where is the room.', 'I do not know where the room is.',
              'I do not know where does the room be.', 'I do not know where is it the room.'), 1,
             'Once the question is embedded it takes statement word order, which rules out '
             'every version with an inverted verb.'),
            ('"It is doubtful whether that holds" means the writer',
             ('is certain it holds', 'leans against it holding',
              'has no view', 'is certain it does not hold'), 1,
             'Doubtful whether sits between possible and rejected: the writer leans against '
             'the claim without ruling it out.'),
            ('The lag between coinage and entry exists because',
             ('editors work slowly', 'editors wait to see whether a sense survives',
              'printing takes time', 'speakers object to new entries'), 1,
             'The talk calls the waiting deliberate and says the lag is the method rather '
             'than a failure of it.'),
        ],
    ),

    tip='The embedded question is the single highest-value structure in this volume. It '
        'appears in Build a Sentence, in almost every email you will write, and in the '
        'interview whenever you say you are not sure of something. Get the word order '
        'automatic now and you stop losing marks for it in three skills at once.',
)
