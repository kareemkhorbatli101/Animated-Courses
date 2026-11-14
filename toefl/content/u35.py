# -*- coding: utf-8 -*-
"""Unit 35 — Rhetoric and Persuasion. Volume 4. Anchor unit: cleft and fronting."""
from content._g import gaps

_GT, _GA = gaps(
    'What persuades people is almost never the strongest argument, and anybody who has '
    'watched an audience knows it. It is the ord{ering} that does the work: a claim placed '
    'first is judged by different standards from the same claim placed th{ird}. It is also '
    'the concess{ion} — an argument that grants nothing is heard as an advertis{ement}, '
    'while one that gives something away is heard as an attempt at the tr{uth}. Neither of '
    'these is a trick. They are facts about listeners, and ignoring them is not integrity '
    'but incompetence.')

_ET, _EA = gaps(
    'What makes an argument persuasive and what makes it sound are different questions, and '
    'treating them as one has produced two opposite kinds of fail{ure}. The first is the '
    'writer who believes that if a case is valid it needs no presenta{tion}, and whose '
    'correct papers are read by nob{ody}. The second is the writer who has learned the '
    'devices and uses them on a case that will not bear the we{ight}, which works once and '
    'then destroys the writer’s credibil{ity} permanently. What the rhetorical tradition '
    'actually taught was that the two questions have to be answered separ{ately} and in '
    'order: establish that the claim is true, then decide how a particular audience can be '
    'brought to see it. It is the second step that modern education has qui{etly} dropped, '
    'on the assumption that it is either unnecessary or slightly dishonest. The result is '
    'not a more honest public argu{ment}. It is a public argument in which the only people '
    'who have studied persuasion are the ones selling something, and the people with the '
    'better case keep losing and concl{uding} that audiences are stupid. Never has that '
    'conclusion been less useful than it is n{ow}.')

UNIT = dict(
    n=35, vol=4, level='B2',
    title='Rhetoric and Persuasion',
    icons=['speech', 'news', 'chart'],
    subs=['How an argument is built', 'Evidence and audience', 'The ethics of persuasion'],
    grammar='Cleft sentences and fronting',
    field='rhetoric, warrant, audience',
    opener_line='This is the third anchor unit of the course, and the most immediately '
                'useful. Cleft sentences and fronting are how English writers put emphasis '
                'where they want it. Every high-scoring writing answer uses them; almost no '
                'B1 answer does.',
    candos=[
        'I can emphasise any part of a sentence without changing its content.',
        'I can use it-clefts, what-clefts and fronting accurately and sparingly.',
        'I can distinguish the validity of an argument from its persuasiveness.',
        'I can identify the unstated assumption that an argument needs.',
        'I can follow a talk that analyses the structure of a persuasive text.',
        'I can write an argument whose emphasis a reader cannot mistake.',
    ],

    acad=[
        ('rhetoric', 'the study of how language persuades'),
        ('caveat', 'a warning that limits what has just been said'),
        ('rebuttal', 'an answer to an objection'),
        ('concede', 'to grant a point to the other side'),
        ('equivocate', 'to use language that can be read two ways'),
        ('fallacy', 'a form of reasoning that does not work'),
        ('analogy', 'an argument from similarity'),
        ('anecdote', 'a single story used as evidence'),
        ('emphasis', 'the weight given to one part of a message'),
        ('connotation', 'the associations a word carries'),
        ('audience', 'the people an argument is aimed at'),
        ('credibility', 'the degree to which a speaker is believed'),
        ('overstate', 'to claim more than the evidence allows'),
        ('qualifier', 'a word that limits the strength of a claim'),
        ('syllogism', 'an argument in two premises and a conclusion'),
        ('assertion', 'a claim made without support'),
        ('inference', 'the step from evidence to conclusion'),
        ('persuasion', 'bringing somebody to accept a position'),
    ],
    family=('persuade', [
        ('persuasion', 'noun', 'the study of persuasion is ancient'),
        ('persuasive', 'adjective', 'a persuasive but invalid argument'),
        ('unpersuaded', 'adjective', 'the committee remained unpersuaded'),
    ]),
    collocs=[
        ('make a case', 'to argue for something'),
        ('carry weight', 'to be influential'),
        ('win over', 'to persuade somebody who was opposed'),
        ('talk past', 'to argue without addressing the other person'),
        ('bear the weight', 'to be strong enough to support something'),
        ('beg the question', 'to assume what you are trying to prove'),
        ('on the face of it', 'judging by appearance alone'),
        ('cut both ways', 'to support each side equally'),
        ('stand or fall on', 'to depend entirely on'),
        ('give ground', 'to concede part of a position'),
    ],
    stance=[
        ('on the face of it', 'at first appearance only'),
        ('it would be wrong to', 'the writer blocks a conclusion'),
        ('what is striking is', 'the writer marks the key point'),
        ('to put it bluntly', 'the writer drops the hedging'),
        ('for the most part', 'generally, with exceptions'),
    ],
    nuance=[
        ('valid / persuasive', 'the reasoning works / the audience agrees'),
        ('refute / deny', 'to disprove / merely to reject'),
        ('premise / warrant', 'a stated start / the unstated link'),
    ],
    vocab_talk=[
        'Describe an argument that convinced you and should not have.',
        'What is the unstated assumption in "it worked for me, so it works"?',
        'Is studying persuasion a way of learning to manipulate people?',
        'Name a word whose connotation does more work than its meaning.',
    ],
    again=['thesis statement', 'topic sentence', 'counterargument', 'hedge',
           'signpost', 'straw man', 'burden of proof', 'rhetorical question'],

    r1=dict(
        sub='How an argument is built',
        skill=('Completing nouns and adverbs in argumentative prose',
               ['Argument writing is built on -ment, -ion and -ity nouns: argument, '
                'concession, credibility.',
                'The -ly adverbs carry the writer’s attitude: quietly, separately, '
                'conspicuously.',
                'If the gap follows a verb and ends the clause, suspect an adverb rather '
                'than a noun.']),
        guided_text=_GT, guided=_GA,
        guided_hint='ord---- is ordering — it follows the and does the work, so the slot is a '
                    'noun acting as a subject.',
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='Evidence and audience',
        skill=('Reading a submission rule against a draft',
               ['A competition or journal rule sets limits on form. A draft tests whether a '
                'particular device is inside them.',
                'Where a rule bans a technique, ask what it is actually protecting.',
                'An adjudicator who explains the purpose is telling you how to comply '
                'without obeying literally.']),
        docs=[
            ('notice', 'University debating union · rules for the written submission round', [
                '# What must be submitted',
                '* A case of not more than 1,200 words, with every factual claim sourced.',
                '* One named warrant for the central inference, stated explicitly.',
                '# Not permitted',
                '* A single anecdote offered as evidence for a general claim.',
                '* Appeals to the adjudicators’ personal circumstances.',
                '# Permitted but weighted',
                '* An anecdote used to illustrate a claim evidenced elsewhere, which is '
                'neither penalised nor credited.',
                '* Rhetorical questions, provided they are answered in the submission.',
            ], 'notice'),
            ('email', 'r.delacroix@debating.uni', 'o.nakamura@student.uni.ac.uk',
             '12/06/2028', 'Your draft — the opening anecdote', [
                 'Dear Mr Nakamura,',
                 '',
                 'Strong case and the warrant is the clearest I have read this round. One',
                 'problem, and it is fixable in about forty words.',
                 '',
                 'Your opening is the story of your grandmother and the licensing board. On',
                 'the face of it that is exactly what rule two forbids: a single anecdote',
                 'carrying a general claim. And as drafted it is doing that — the next',
                 'paragraph begins "so the system fails people like her", which is the',
                 'general claim resting on the story alone.',
                 '',
                 'But the rule is not aimed at anecdotes. It is aimed at an anecdote being',
                 'the evidence. You have the national figures in your fourth paragraph and',
                 'they are better than the story. Move them to paragraph two, let the',
                 'anecdote illustrate what the figures establish, and the submission',
                 'complies and reads better.',
                 '',
                 'Also: your second rhetorical question is never answered. The rule permits',
                 'them only if answered, so either answer it or cut it. I would cut it —',
                 'the first one is doing the work and two in a short case is one too many.',
                 '',
                 'Ms Delacroix, Chief Adjudicator',
             ]),
        ],
        guided=[
            ('What must be stated explicitly in a submission?',
             ('Every source', 'One named warrant for the central inference',
              'The word count', 'The opposing case'), 1,
             'The rule requires the unstated link to be made explicit, which is unusual and '
             'deliberate.'),
            ('What is not permitted?',
             ('Any anecdote', 'A single anecdote offered as evidence for a general claim',
              'Rhetorical questions', 'Statistics'), 1,
             'The prohibition turns on the anecdote carrying the claim rather than on '
             'anecdotes as such.'),
            ('How is an illustrative anecdote treated?',
             ('Penalised', 'Neither penalised nor credited',
              'Credited', 'Forbidden'), 1,
             'It is listed under permitted but weighted, with no effect either way.'),
            ('When is a rhetorical question permitted?',
             ('Always', 'If it is answered in the submission', 'Never', 'Once only'), 1,
             'That condition is what the adjudicator applies to the second question in the '
             'draft.'),
        ],
        exam=[
            ('What does the adjudicator praise?',
             ('The word count', 'The clarity of the warrant',
              'The opening anecdote', 'The sources'), 1,
             'She calls it the clearest she has read this round, which is why the rest is '
             'framed as a small fix.'),
            ('Why is the opening a problem as drafted?',
             ('It is too long', 'The following paragraph rests a general claim on the story alone',
              'It is unsourced', 'It appeals to the adjudicators'), 1,
             'She quotes the sentence that makes the anecdote carry the claim.'),
            ('What does she say the rule is actually aimed at?',
             ('Anecdotes', 'An anecdote being the evidence',
              'Personal stories', 'Weak sources'), 1,
             'That distinction is what allows the anecdote to stay once the figures do the '
             'evidential work.'),
            ('What is her suggested fix?',
             ('Cut the anecdote', 'Move the national figures earlier and let the anecdote illustrate them',
              'Add more sources', 'Rewrite the warrant'), 1,
             'She says the submission then complies and reads better, which is the point of '
             'the suggestion.'),
            ('Why does she say the figures are better than the story?',
             ('They are shorter', 'They can carry the general claim',
              'They are more recent', 'They are easier to source'), 1,
             'The whole problem is that the general claim needs evidence the anecdote cannot '
             'supply.'),
            ('What is wrong with the second rhetorical question?',
             ('It is unclear', 'It is never answered', 'It repeats the first', 'It is too long'), 1,
             'The rule permits them only if answered, so an unanswered one breaches it.'),
            ('Why does she recommend cutting rather than answering it?',
             ('The rule prefers it', 'The first question already does the work',
              'There is no space', 'It weakens the warrant'), 1,
             'She says two in a short case is one too many, which is advice about effect '
             'rather than compliance.'),
        ],
    ),

    r3=dict(
        sub='The ethics of persuasion',
        title='Is Learning to Persuade Learning to Manipulate?',
        words=300,
        paras=[
            'Suspicion of rhetoric is as old as the subject and has never been '
            'adequately answered, partly because the people best placed to answer it have an '
            'obvious interest in doing so. The objection is simple: if a device makes a '
            'weak case sound strong, then teaching the technique is teaching deception, '
            'whatever the intentions of the teacher. On the face of it this is unanswerable, '
            'and it would be wrong to pretend that the standard reply — that rhetoric is '
            'merely a tool, like a knife — does any work, since the question is precisely '
            'what the tool is for.',

            'What is striking is how little the objection accounts for. The techniques are '
            'not in practice neutral between cases, because most of them require something a '
            'weak case cannot supply. Conceding a real point weakens a bad argument and '
            'strengthens a good one. Naming your warrant exposes a bad inference and '
            'reinforces a sound one. For the most part, the devices that '
            'actually persuade an attentive audience are devices that a weak case fails at, '
            'which is not an accident but a consequence of audiences having encountered '
            'persuasion before.',

            'That leaves a narrower and harder version of the objection, which is about '
            'inattentive audiences, and here the defence largely collapses. To put it '
            'bluntly, against a hurried reader the cheap devices work and the expensive ones '
            'do not, and anybody who has written for a newspaper knows which they are. The '
            'honest position is therefore not that rhetoric is innocent but that its abuse '
            'depends on conditions — haste, volume, the absence of any reply — and that those '
            'conditions are themselves things societies can change. Refusing to teach '
            'persuasion alters none of them. It ensures only that the fluent speakers are '
            'those who had a commercial reason to learn.',
        ],
        skill=('Reading a passage that concedes most of an objection',
               ['The strongest defences grant the objection in general and then narrow it.',
                'Look for the sentence that says where the defence fails: here the defence '
                'largely collapses.',
                'The conclusion is usually about conditions rather than about the thing '
                'itself.']),
        guided=[
            ('What does the author say about the standard reply to the objection?',
             ('It is decisive', 'It does no real work',
              'It is widely accepted', 'It is new'), 1,
             'The tool-like-a-knife answer begs the question, since what the tool is for is '
             'exactly what is at issue.'),
            ('What is the objection to rhetoric, as stated?',
             ('It is difficult', 'Teaching a technique that makes a weak case sound strong is teaching deception',
              'It is outdated', 'It serves only the powerful'), 1,
             'The author states it in its strongest form before beginning to answer it.'),
            ('Why are the techniques not neutral between cases?',
             ('They are hard to learn', 'Most require something a weak case cannot supply',
              'They are regulated', 'They work only in writing'), 1,
             'Conceding a real point and naming a warrant both expose a bad argument.'),
            ('What does naming your warrant do to a bad inference?',
             ('Hides it', 'Exposes it', 'Strengthens it', 'Has no effect'), 1,
             'It is given as a parallel to conceding, which also cuts against the weaker '
             'case.'),
        ],
        exam=[
            ('Why does the author say audiences are not neutral ground?',
             ('They are poorly educated', 'They have encountered persuasion before',
              'They prefer anecdotes', 'They are inattentive'), 1,
             'That prior experience is what makes the expensive devices work and the cheap '
             'ones fail.'),
            ('Where does the author say the defence largely collapses?',
             ('With expert audiences', 'With inattentive audiences',
              'In writing', 'In formal debate'), 1,
             'Against a hurried reader the cheap devices work and the expensive ones do '
             'not.'),
            ('What does "to put it bluntly" signal?',
             ('A change of topic', 'That the hedging is being dropped',
              'A quotation', 'Uncertainty'), 1,
             'It introduces the least comfortable sentence in the passage.'),
            ('What is the author’s honest position?',
             ('Rhetoric is innocent', 'Its abuse depends on changeable conditions',
              'Rhetoric should not be taught', 'The objection fails entirely'), 1,
             'Haste, volume and the absence of a reply are named as the conditions.'),
            ('What does the author say refusing to teach persuasion achieves?',
             ('A more honest public argument', 'Fluency confined to those with a commercial reason to learn',
              'Better education', 'Nothing at all'), 1,
             'That consequence is the closing argument against the position the passage has '
             'taken seriously.'),
            ('Why does the author mention the interests of rhetoric’s defenders?',
             ('To discredit them', 'To explain why the objection has not been well answered',
              'To praise their honesty', 'To introduce a source'), 1,
             'It appears as part of the reason the question has stayed open, not as an '
             'attack.'),
            ('Which would most weaken the second paragraph?',
             ('Evidence that audiences dislike concession',
              'Evidence that conceding a point strengthens weak arguments as much as strong ones',
              'Evidence that warrants are rarely stated',
              'Evidence that rhetoric is widely taught'), 1,
             'The paragraph depends entirely on the devices not being neutral between '
             'cases.'),
            ('All of the following are stated EXCEPT:',
             ('The standard reply does no real work',
              'Conceding a real point strengthens a good argument',
              'Against hurried readers the cheap devices work',
              'Teaching rhetoric reliably improves public argument'), 3,
             'The passage argues only that refusing to teach it makes things worse, which is '
             'a weaker claim.'),
            ('What is the overall movement of the passage?',
             ('Rejecting the objection', 'Granting it, narrowing it, and relocating it to conditions',
              'Defending rhetoric unconditionally', 'Comparing two traditions'), 1,
             'Each paragraph performs one of those three moves in sequence.'),
        ],
    ),

    l1=dict(
        sub='How an argument is built',
        caption='Two students preparing a debate case',
        skill=('Hearing a structural criticism',
               ['A criticism of structure is not a criticism of content. The items will keep '
                'them apart.',
                'Listen for: the claim is fine, it is where you have put it.',
                'The fix is usually a move rather than a cut.']),
        warm=[
            ('Man: Is my evidence not strong enough?',
             ('The evidence is fine — it is in the wrong place.', 'Yes, it is weak.',
              'About four sources.', 'In paragraph four.'), 0,
             'A question about strength answered by relocating the problem to structure.'),
            ('Woman: Should I cut the story about my grandmother?',
             ('No — move the figures in front of it.', 'Yes, cut it.',
              'About eighty words.', 'It is a good story.'), 0,
             'A should-I-cut question answered with a move rather than a deletion.'),
            ('Man: Do I have to state the warrant?',
             ('The rules require it, and it helps you.', 'No, nobody does.',
              'About one sentence.', 'In the introduction.'), 0,
             'A do-I-have-to question answered with the requirement and a reason.'),
        ],
        script=[
            ('Woman', 'The case is good. The problem is the first two paragraphs and it is '
                      'not a problem with the content.'),
            ('Man', 'Is my evidence not strong enough?'),
            ('Woman', 'The evidence is excellent. It is in paragraph four. What you have in '
                      'paragraph one is your grandmother and the licensing board, and in '
                      'paragraph two you write "so the system fails people like her".'),
            ('Man', 'Which is the general claim.'),
            ('Woman', 'Resting on one story. That is the thing the rules forbid, and more to '
                      'the point it is the thing an adjudicator will not believe.'),
            ('Man', 'So I cut the grandmother.'),
            ('Woman', 'No. Move the national figures to paragraph two and let the grandmother '
                      'illustrate them. Same words, different order, and suddenly the story is '
                      'doing the job stories are good at instead of the job they are bad at.'),
            ('Man', 'That is a forty-word change.'),
            ('Woman', 'It is a forty-word change that moves you from non-compliant to the '
                      'strongest submission in the round. And it is why I keep telling you '
                      'that ordering is not presentation. Ordering is argument.'),
        ],
        items=[
            ('What does she say the problem is not?',
             ('The length', 'The content', 'The sources', 'The warrant'), 1,
             'She opens by separating a structural problem from a content problem.'),
            ('Where is the strong evidence?',
             ('Paragraph one', 'Paragraph four', 'The conclusion', 'A footnote'), 1,
             'That misplacement is the entire criticism she is making.'),
            ('What is wrong with paragraph two as drafted?',
             ('It is too short', 'It rests a general claim on one story',
              'It repeats paragraph one', 'It has no source'), 1,
             'She quotes the sentence and names the general claim resting on the anecdote.'),
            ('Why does she say an adjudicator will not believe it?',
             ('The story is implausible', 'A general claim resting on one story is not evidence',
              'The rules are strict', 'The figures contradict it'), 1,
             'She adds this as the substantive reason, beyond the rule.'),
            ('What does she recommend?',
             ('Cutting the anecdote', 'Moving the figures earlier so the anecdote illustrates them',
              'Adding sources', 'Rewriting the claim'), 1,
             'Same words in a different order is how she describes the change.'),
            ('What does she say the anecdote then does?',
             ('Nothing', 'The job stories are good at', 'Carries the claim', 'Replaces the figures'), 1,
             'She contrasts that with the job they are bad at, which is supplying evidence.'),
            ('What is her closing point about ordering?',
             ('It is presentation', 'It is argument',
              'It matters only in competitions', 'It should come last'), 1,
             'The whole conversation is an illustration of a reordering that changes what the '
             'case proves.'),
        ],
    ),

    l2=dict(
        sub='Evidence and audience',
        caption='A debating union workshop on evidence',
        poster=['Debating union · submission round closes Friday',
                'Every factual claim sourced',
                'State your warrant'],
        skill=('Hearing a rule distinguished from its purpose',
               ['When a speaker separates what a rule says from what it is for, both are '
                'examinable.',
                'Listen for: the rule says X, the rule is aimed at Y, so Z is fine.',
                'Compliance and purpose can come apart, and the speaker will say so.']),
        warm=[
            ('Woman: Are anecdotes banned?',
             ('Only as evidence, not as illustration.', 'Yes, completely.',
              'About one per case.', 'In the rules.'), 0,
             'An are-they-banned question answered with the distinction that decides it.'),
            ('Man: Why must I state the warrant?',
             ('Because a bad inference shows once you do.', 'Because the rules say so.',
              'About one sentence.', 'In the introduction.'), 0,
             'A why-must question answered with the purpose rather than the authority.'),
            ('Woman: Can I use a rhetorical question?',
             ('If you answer it, yes.', 'No, never.',
              'About two of them.', 'At the start.'), 0,
             'A can-I question answered with the condition the rule attaches.'),
        ],
        script=[
            ('Man', 'I want to talk about the warrant rule, because it is the one nobody '
                    'likes and it is the most useful thing this union does. The rule is: name '
                    'the unstated principle that gets you from your evidence to your claim. '
                    'Most people have never written one down. You have figures showing that '
                    'licensing delays average eleven months, and you conclude that the system '
                    'fails applicants. Between those two sentences there is a principle: that '
                    'a delay of that length constitutes failure. State it and three things '
                    'happen. First, you find out whether you believe it. A surprising number '
                    'of people do not, once it is on the page. Second, your opponent has to '
                    'attack the principle rather than your figures, which is a much harder '
                    'target if the principle is sound. Third — and this is the part that '
                    'sounds like rhetoric and is actually honesty — the adjudicator can see '
                    'what you are claiming. Now the anecdote rule. People think we have '
                    'banned anecdotes. We have not. We have banned an anecdote being the '
                    'evidence for a general claim. Use your grandmother all you like, after '
                    'the figures, to show what eleven months looks like to one person. That is '
                    'what a story is for. What it is not for is proving that the average is '
                    'eleven months.'),
        ],
        items=[
            ('What does the warrant rule require?',
             ('A source for every claim', 'Naming the unstated principle linking evidence to claim',
              'A counterargument', 'A word limit'), 1,
             'He gives the licensing example precisely to show where that principle hides.'),
            ('What is the first effect of stating a warrant?',
             ('It shortens the case', 'You find out whether you believe it',
              'It satisfies the adjudicator', 'It weakens the opponent'), 1,
             'He says a surprising number of people do not, once it is on the page.'),
            ('What does it force an opponent to do?',
             ('Find better figures', 'Attack the principle rather than the figures',
              'Concede', 'Change the subject'), 1,
             'He adds that this is a harder target if the principle is sound.'),
            ('What does he call the third effect?',
             ('A rhetorical advantage', 'Honesty rather than rhetoric',
              'A formality', 'A risk'), 1,
             'The adjudicator can see what is being claimed, which he distinguishes from '
             'presentation.'),
            ('What has the union actually banned?',
             ('Anecdotes', 'An anecdote being the evidence for a general claim',
              'Personal stories', 'Rhetorical questions'), 1,
             'He says people think anecdotes are banned and they are not.'),
            ('What is a story for, in his account?',
             ('Proving an average', 'Showing what a figure looks like to one person',
              'Opening a case', 'Winning sympathy'), 1,
             'He contrasts that directly with what it cannot do, which is establish the '
             'average.'),
        ],
    ),

    l3=dict(
        sub='The ethics of persuasion',
        caption='A lecture on rhetoric and its critics',
        board=['Objection: technique makes weak cases sound strong',
               'Standard reply begs the question',
               'Good devices cost more for a weak case',
               'Abuse depends on haste and volume'],
        skill=('Following a talk that concedes then narrows',
               ['A lecturer who grants an objection at the start is going to narrow it, not '
                'reject it.',
                'Listen for where the defence is admitted to fail. That admission is the '
                'most examinable sentence.',
                'The conclusion will usually be about circumstances rather than about the '
                'thing itself.']),
        warm=[
            ('Man: Is teaching persuasion teaching manipulation?',
             ('That is the objection and it is a good one.', 'No, not at all.',
              'About two thousand years.', 'In the lecture.'), 0,
             'An is-it question answered by conceding the force of the objection first.'),
            ('Woman: Does the tool argument work?',
             ('No — it assumes what it has to prove.', 'Yes, it settles it.',
              'About one paragraph.', 'Like a knife.'), 0,
             'A does-it-work question answered with the reason the reply fails.'),
            ('Man: When does the defence break down?',
             ('With a hurried audience.', 'It never does.',
              'About half the time.', 'In newspapers.'), 0,
             'A when question answered with the condition the lecture turns on.'),
        ],
        script=[
            ('Woman', 'I am going to start by agreeing with the people who distrust my '
                      'subject, because the objection is good and the usual answer to it is '
                      'not. The objection is that if a technique can make a weak case sound '
                      'strong, then teaching it is teaching deception, whatever anyone '
                      'intends. The usual answer is that rhetoric is a tool, like a knife. '
                      'That answer begs the question, because what is at issue is exactly '
                      'what the tool is for. So let me give you a better one, and then tell '
                      'you where it fails. Here it is: the devices that actually persuade an '
                      'attentive audience are not neutral between cases, because most of them '
                      'demand something a weak case has not got. Conceding a real point '
                      'strengthens a sound argument and destroys a bad one. Stating your '
                      'warrant exposes a bad inference and fortifies a good one. That is not '
                      'a coincidence. It is what you would expect from audiences who have '
                      'been persuaded before and remember it. Now the failure. All of that '
                      'assumes an audience that is paying attention. Against a hurried '
                      'reader, the cheap devices work and the expensive ones do not, and '
                      'anybody who has written for a newspaper knows precisely which is '
                      'which. So the honest conclusion is not that rhetoric is innocent. It is '
                      'that its abuse depends on conditions — speed, volume, nobody answering '
                      'back — and those are conditions a society can do something about. '
                      'Refusing to teach the subject changes none of them. It only guarantees '
                      'that the fluent people are the ones who were paid to learn.'),
        ],
        items=[
            ('Why does she begin by agreeing with critics?',
             ('To be polite', 'Because the objection is good and the usual answer is not',
              'To introduce her sources', 'Because she shares their view entirely'), 1,
             'She says both halves explicitly and builds the whole lecture on the second.'),
            ('What is wrong with the tool argument?',
             ('It is unpopular', 'It assumes what is at issue',
              'It is too abstract', 'It is recent'), 1,
             'What the tool is for is precisely the question, so the reply begs it.'),
            ('What does she say about the devices that persuade attentive audiences?',
             ('They are neutral', 'They demand something a weak case has not got',
              'They are easy to learn', 'They are rarely taught'), 1,
             'Conceding and naming a warrant are both given as examples that cut against the '
             'weaker case.'),
            ('Why does she say that is not a coincidence?',
             ('The devices were designed that way', 'Audiences have been persuaded before and remember it',
              'Critics chose the examples', 'Weak cases are rare'), 1,
             'The explanation is about the audience rather than about the techniques.'),
            ('Where does her defence fail?',
             ('In writing', 'With a hurried reader', 'In formal debate', 'With experts'), 1,
             'She says the cheap devices work there and the expensive ones do not.'),
            ('What is her honest conclusion?',
             ('Rhetoric is innocent', 'Its abuse depends on conditions a society can change',
              'Rhetoric should not be taught', 'The objection is decisive'), 1,
             'Speed, volume and nobody answering back are the conditions she names.'),
            ('What does she say refusing to teach it guarantees?',
             ('A fairer debate', 'That the fluent people are the ones who were paid to learn',
              'Nothing', 'Better education'), 1,
             'It is her closing line and the practical argument for the subject.'),
        ],
    ),

    sp=[
        dict(
            sub='How an argument is built',
            focus='putting the emphasis where you want it',
            skill=('Saying a cleft sentence out loud',
                   ['An it-cleft puts the stress on the element after it is: it is the '
                    'ordering that does the work.',
                    'A what-cleft puts it at the end: what does the work is the ordering.',
                    'Stress the clefted element and keep the rest flat. A cleft said evenly '
                    'is wasted.']),
            repeat=[
                'Ordering is not presentation.',
                'It is the ordering that does the work.',
                'What persuades people is rarely the strongest argument.',
                'It is the concession that makes an argument sound honest.',
                'What an anecdote cannot do is establish an average.',
                'It was the figures, not the story, that the adjudicator wanted first.',
                'What a story is for is showing what eleven months looks like to one person, and that is a job no table of figures can do.',
            ],
            theme='argument, emphasis and being understood',
            qs=[
                'Thanks for joining me. To begin, do you enjoy arguing? Why or why not?',
                'Some people say a good argument should need no presentation. Do you agree?',
                'Now your opinion. Should schools teach debating? Why or why not?',
                'A final question. Is there a difference between winning an argument and '
                'being right?',
            ],
            model=[(2, 'No, and the people who say it have usually never had to be read by a '
                       'stranger. An argument nobody finishes has not been made.'),
                   (4, 'Obviously, and the interesting case is the other way round: being '
                       'right and losing, which happens constantly and teaches you more.')],
            selfcheck=['I stressed the clefted element.',
                       'I kept the rest of the sentence flat.',
                       'I used both it-clefts and what-clefts.'],
        ),
        dict(
            sub='Evidence and audience',
            focus='stating a warrant aloud',
            skill=('Saying the step between evidence and claim',
                   ['A warrant is one sentence and it begins with a principle: that a delay '
                    'of that length constitutes failure.',
                    'Say the evidence, pause, say the warrant, pause, say the claim. Three '
                    'beats.',
                    'If you cannot say the warrant in one sentence, you do not yet have the '
                    'argument.']),
            repeat=[
                'Licensing delays average eleven months.',
                'The system fails applicants.',
                'Between those two sentences there is a principle.',
                'The principle is that a delay of that length constitutes failure.',
                'Stating it tells you whether you actually believe it.',
                'It also forces your opponent to attack the principle rather than the figures.',
                'What sounds like rhetoric is in fact honesty, because the adjudicator can finally see what is being claimed.',
            ],
            theme='evidence, reasoning and what gets left unsaid',
            qs=[
                'Thank you for your time. First, do you usually check the evidence behind a '
                'claim you agree with?',
                'Most arguments hide a principle nobody has stated. Why does that happen?',
                'Now an opinion question. Should journalists be required to state the '
                'reasoning behind a conclusion? Why?',
                'One last question. Have you ever stopped believing something because you '
                'wrote it down?',
            ],
            model=[(2, 'Because the principle usually feels too obvious to say, and the ones '
                       'that feel obvious are the ones that turn out to be doing all the '
                       'work.'),
                   (4, 'Once, about a policy I had defended for years. Written out as a '
                       'syllogism it had a premise I would not have signed.')],
            selfcheck=['I said the warrant as one sentence.',
                       'I used three beats: evidence, warrant, claim.',
                       'I did not skip the principle.'],
        ),
        dict(
            sub='The ethics of persuasion',
            focus='conceding before narrowing',
            skill=('Granting an objection out loud',
                   ['Say the objection in its strongest form, not a weak version. A '
                    'weakened objection is heard immediately.',
                    'Then narrow: that holds where, and it does not hold where.',
                    'Mark your own concession with stress: that is TRUE of a hurried '
                    'reader.']),
            repeat=[
                'The objection is a good one.',
                'The usual answer begs the question.',
                'What is at issue is exactly what the tool is for.',
                'Conceding a real point destroys a bad argument.',
                'It is attentive audiences that the defence depends on.',
                'Against a hurried reader the cheap devices work and the expensive ones do not.',
                'What societies can change is not the techniques but the conditions — speed, volume and nobody answering back.',
            ],
            theme='honesty, influence and public argument',
            qs=[
                'Thanks for taking part. To start, do you trust advertising? Does knowing how '
                'it works help?',
                'People who distrust persuasion are often the easiest to persuade. Why might '
                'that be?',
                'Now your opinion. Should political advertising be regulated differently from '
                'commercial advertising? Why?',
                'And finally. Is there an argument you would refuse to make even if it would '
                'work?',
            ],
            model=[(2, 'Because distrust is aimed at a style rather than a method. Anything '
                       'that does not look like advertising gets through unexamined.'),
                   (4, 'Yes — anything that depends on the audience not having time. If my '
                       'case only works on somebody in a hurry, it is not my case that is '
                       'working.')],
            selfcheck=['I stated the objection in its strongest form.',
                       'I narrowed rather than rejected it.',
                       'I stressed my own concession.'],
        ),
    ],

    w1=dict(
        sub='Questions about argument',
        skill=('Build a Sentence with a cleft or a fronted element',
               ['The two non-question items in this unit build an it-cleft, a what-cleft or '
                'a fronted phrase.',
                'An it-cleft is it + be + the emphasised element + that: it is the ordering '
                'that matters.',
                'A fronted negative adverbial inverts the verb: never has that conclusion '
                'been less useful.']),
        guided=[
            ('The anecdote comes before the figures.',
             ['know', 'do', 'you', 'whether', 'that', 'breaches', 'the rule', 'as', 'drafted'],
             'Do you know whether that breaches the rule as drafted?'),
            ('My second rhetorical question is never answered.',
             ['to know', 'nobody', 'seems', 'whether', 'that', 'on', 'its own', 'matters', 'actually'],
             'Nobody seems to know whether that actually matters on its own.'),
            ('My partner asked about the warrant.',
             ['she', 'whether', 'to know', 'wanted', 'I', 'had', 'it', 'down', 'written'],
             'She wanted to know whether I had written it down.'),
        ],
        exam=[
            ('Anecdotes are permitted as illustration.',
             ['do', 'whether', 'know', 'you', 'that', 'the opening', 'covers', 'as well', 'actually'],
             'Do you know whether that actually covers the opening as well?'),
            ('The standard reply to the objection begs the question.',
             ['explain', 'can', 'anybody', 'why', 'the knife', 'to me', 'not', 'does', 'analogy work'],
             'Can anybody explain to me why the knife analogy does not work?'),
            ('The defence fails with hurried readers.',
             ['know', 'does', 'anybody', 'which', 'devices', 'on', 'work', 'actually', 'them'],
             'Does anybody know which devices actually work on them?'),
            ('The figures are in paragraph four.',
             ['us', 'told', 'nobody', 'where', 'the evidence', 'to', 'was', 'supposed', 'go'],
             'Nobody told us where the evidence was supposed to go.'),
            ('Stating the warrant changed his mind.',
             ['told', 'he', 'me', 'which', 'premise', 'he', 'no longer', 'believed', 'actually'],
             'He told me which premise he no longer actually believed.'),
            ('Ordering does the work, not evidence.',
             ['it', 'is', 'the ordering', 'that', 'does', 'the work', 'and', 'the evidence', 'not'],
             'It is the ordering that does the work, and not the evidence.'),
            ('An anecdote cannot establish an average.',
             ['what', 'an anecdote', 'cannot', 'do', 'is', 'establish', 'an average', 'at', 'all'],
             'What an anecdote cannot do is establish an average at all.'),
        ],
    ),

    w2=dict(
        sub='Evidence and audience',
        to='adjudication@debating.uni',
        date='19/06/2028',
        subject='Submission 2028-R3-41 — revised, and one disagreement',
        scenario=[
            'The chief adjudicator told you to move your national figures ahead of the '
            'anecdote and to cut your second rhetorical question. You have done the first and '
            'you think she is wrong about the second: your second question is answered, but '
            'three paragraphs later. You are resubmitting.',
            'Write an email to the adjudication office.',
        ],
        bullets=['Confirm the change you made and what it did to the case.',
                 'Disagree about the second point, with the evidence from your own text.',
                 'Say what you will do if the adjudicator still disagrees.'],
        skill=('Disagreeing with somebody who has authority over you',
               ['Accept the part you accept, fully and first. A disagreement that arrives '
                'before any agreement reads as resistance.',
                'Quote your own text. A disagreement about what a document says is settled '
                'by the document.',
                'Say in advance what you will do if you lose the point. That makes the '
                'disagreement safe to have.']),
        model=[
            'Dear Ms Delacroix,',
            '',
            'Thank you — the reordering works and it was about forty words, as you said. The '
            'national figures are now paragraph two and the licensing story follows them as '
            'illustration. What it changed was not the compliance but the reading: the story '
            'is doing something it is actually good at.',
            '',
            'On the second rhetorical question I think you may have missed the answer rather '
            'than that it is absent. The question is at the end of paragraph three — "so what '
            'would an acceptable delay look like?" — and it is answered at the start of '
            'paragraph six: "an acceptable delay is one shorter than the applicant’s own '
            'planning horizon, which in this sector is about four months." Three paragraphs '
            'is a long gap and I take the point that it reads as unanswered.',
            '',
            'So rather than argue about whether it complies, I have moved the answer to '
            'paragraph four, immediately after the evidence it depends on. The question is '
            'now answered two sentences later and nobody has to hold it in mind.',
            '',
            'If you still think two rhetorical questions is one too many in a case this '
            'short, say so and I will cut it before Friday. That is a judgement about effect '
            'and it is yours to make, not mine.',
            '',
            'With thanks,',
            'Osamu Nakamura',
        ],
        notes=['The accepted point is dealt with first and in full, including what the change '
               'achieved.',
               'The disagreement is settled by quotation from the writer’s own text, so '
               'nobody has to go and check.',
               'The writer concedes the reasonable version of the criticism — three '
               'paragraphs is too far — and fixes that instead of winning the argument.',
               'The last paragraph hands the remaining judgement back to the person whose '
               'judgement it is, with a deadline attached.'],
        bandpair=dict(
            mid=[
                'Dear Ms Delacroix,',
                'Thank you very much for your feedback on my submission. I have made the '
                'change you suggested and moved the national figures before the anecdote, and '
                'I agree that it reads much better now.',
                'About the second rhetorical question, I am afraid I do not quite agree with '
                'you. I did actually answer it, although I can see that it comes rather later '
                'in the case, so perhaps it was easy to miss. I have now moved the answer '
                'closer to the question so that it should be much clearer.',
                'I hope this is acceptable. If you still feel that the question should be cut '
                'then of course I will do that, as I understand that you have more experience '
                'of judging these submissions than I do. Please let me know what you think '
                'before Friday.',
                'Thank you again for taking the time to read it. Best wishes, Osamu Nakamura',
            ],
            top=[
                'Dear Ms Delacroix,',
                'Thank you — the reordering works and it was about forty words. The figures '
                'are paragraph two and the story follows as illustration. What it changed was '
                'not the compliance but the reading.',
                'On the second rhetorical question I think the answer was missed rather than '
                'absent. The question ends paragraph three — "so what would an acceptable '
                'delay look like?" — and paragraph six answers it: "one shorter than the '
                'applicant’s planning horizon, about four months in this sector." Three '
                'paragraphs is too far, and I take the point that it reads as unanswered.',
                'So rather than argue about compliance I have moved the answer to paragraph '
                'four, immediately after the evidence it rests on.',
                'If you still think two rhetorical questions is one too many in a case this '
                'short, say so and I will cut it before Friday. That is a judgement about '
                'effect and it is yours. Osamu Nakamura',
            ],
            diffs=[
                'It quotes both the question and the answer, so the factual disagreement is '
                'settled on the page rather than asserted.',
                'It concedes the defensible version of the criticism — three paragraphs is '
                'too far — instead of defending the draft as it stood.',
                'It acts rather than asks: the answer has already been moved, so the reader '
                'has nothing to arbitrate.',
                'It separates the factual point from the judgement point and hands only the '
                'judgement back, which is the one that genuinely belongs to the adjudicator.',
                'It drops the appeal to the reader’s greater experience, which in the middle '
                'answer quietly withdraws the disagreement it has just made.',
            ],
        ),
    ),

    w3=dict(
        sub='The ethics of persuasion',
        prof='Dr Sarpong',
        question='Rhetoric has been taught for two and a half thousand years and distrusted '
                 'for just as long. The objection is that a technique capable of making a '
                 'weak case sound strong is a technique for deception, whoever teaches it. '
                 'Some argue that persuasion should therefore be taught universally, so that '
                 'audiences can recognise it and the advantage disappears. Others argue that '
                 'teaching it universally simply raises the general level of manipulation and '
                 'that the asymmetry returns at a higher intensity. Which view is better '
                 'founded?',
        posts=[('Beatriz', 'w',
                'Teach it to everybody. An audience that can name a device is immune to it, '
                'and the only reason the devices work at all is that they are a specialism. '
                'Universal literacy in persuasion ends the advantage the way universal '
                'literacy ended the advantage of being able to read.'),
               ('Hamid', 'm',
                'Beatriz is assuming recognition equals immunity, and the research does not '
                'support that. People who can name a technique are measurably still moved by '
                'it. What universal teaching produces is not immune audiences; it is better '
                'manipulators with the same audiences.')],
        skill=('Answering a claim about what education achieves',
               ['An argument that teaching X removes the advantage of X needs an account of '
                'the mechanism.',
                'Distinguish recognition from resistance. They are different capacities and '
                'they are taught differently.',
                'Then say what would have to be taught for the claim to hold.']),
        starters=['Hamid is right about the evidence and wrong about what follows.',
                  'Beatriz’s analogy with literacy is doing more work than it can bear.',
                  'The distinction that matters here is between…',
                  'What would actually have to be taught is…'],
        model=[
            'Hamid is right about the evidence and wrong about what follows from it. '
            'Recognition does not confer immunity; people who can name a device are still '
            'moved by it, and this is one of the better established findings in the area. But '
            'his conclusion treats that as settling the question, when what it settles is only '
            'that recognition is the wrong thing to teach. It is resistance that would have '
            'to be taught, and resistance is a different capacity: not knowing that a '
            'concession is a device, but having the habit of asking what the concession cost '
            'the person making it.',
            'Beatriz’s analogy with literacy is doing more work than it can bear. Reading is a '
            'capacity you either have or lack, and persuasion is a contest in which both '
            'sides improve. If everyone learns, the advantage does not vanish; it moves to '
            'whoever has more time, which is Hamid’s point and it is a good one. What is '
            'striking is that she has the better instinct and the worse argument. The reason '
            'to teach it universally is not symmetry but that the alternative is a population '
            'with no defences at all facing people who are paid to practise.',
            'What would actually have to be taught is the slow part: demanding the warrant, '
            'checking whether an anecdote is carrying a general claim, noticing that a '
            'question was never answered. Those are habits rather than knowledge, they '
            'survive being named, and they are expensive to teach because they take time '
            'rather than a lecture.',
            'So neither post has the remedy. The defensible position is that recognition is '
            'worthless, resistance is teachable, and the thing standing in the way is not the '
            'ethics of rhetoric but the number of hours in a curriculum.',
        ],
        model_words=291,
    ),

    gram=dict(
        title='Cleft sentences and fronting',
        headers=['Structure', 'What it emphasises'],
        rows=[
            ('it + be + X + that/who', 'X: it is the ordering that does the work'),
            ('what + clause + be + X', 'X, placed last: what persuades people is the ordering'),
            ('all + clause + be + X', 'X, with a sense of only: all I did was move a paragraph'),
            ('the reason … is that', 'the explanation: the reason it fails is that readers hurry'),
            ('fronted object', 'that argument I can answer'),
            ('fronted negative adverbial + inversion', 'never has the conclusion been less useful'),
            ('fronted prepositional phrase + inversion', 'in paragraph four lay the evidence'),
        ],
        notes=[
            'A what-cleft puts the emphasised element at the end, and an it-cleft puts it in '
            'the middle. Choose by where you want the reader to arrive: end position is '
            'heavier.',
            'A fronted negative adverbial forces inversion: never has, rarely do, not once '
            'did. Never the conclusion has been is wrong, and the error is conspicuous.',
            'Clefts are for emphasis and emphasis is a scarce resource. Two clefts in a '
            'paragraph cancel each other out. One per paragraph is plenty, and most '
            'paragraphs need none.',
        ],
        watch='A cleft does not take an extra that: "It is the ordering that it does the '
              'work" is wrong. And after a fronted negative adverbial you must invert: '
              '"Never has that conclusion been less useful", not "Never that conclusion has '
              'been".',
        ex=[
            ('Rewrite as an it-cleft, emphasising the underlined idea in brackets.',
             ['The ordering does the work. (the ordering)',
              'The concession makes it sound honest. (the concession)',
              'The figures persuaded the adjudicator. (the figures)',
              'A hurried reader is the problem. (a hurried reader)',
              'The warrant decides the case. (the warrant)',
              'The second question was never answered. (the second question)'],
             ['It is the ordering that does the work.',
              'It is the concession that makes it sound honest.',
              'It was the figures that persuaded the adjudicator.',
              'It is a hurried reader that is the problem.',
              'It is the warrant that decides the case.',
              'It was the second question that was never answered.']),
            ('Correct the cleft or the inversion.',
             ['It is the ordering that it does the work.',
              'Never that conclusion has been less useful.',
              'What persuades people are the ordering.',
              'Rarely a cleft is needed twice in a paragraph.'],
             ['It is the ordering that does the work.',
              'Never has that conclusion been less useful.',
              'What persuades people is the ordering.',
              'Rarely is a cleft needed twice in a paragraph.']),
            ('Rewrite as a what-cleft.',
             ['An anecdote cannot establish an average.',
              'I moved one paragraph.',
              'The rule protects against the anecdote being the evidence.',
              'A story shows what a figure looks like to one person.'],
             ['What an anecdote cannot do is establish an average.',
              'What I did was move one paragraph.',
              'What the rule protects against is the anecdote being the evidence.',
              'What a story does is show what a figure looks like to one person.']),
        ],
        bas='Two of the ten Build a Sentence items in this unit build a cleft. A tile reading '
            'it opening the sentence with is and that later signals an it-cleft; a tile '
            'reading what opening the sentence signals a what-cleft, whose verb is is and '
            'comes late.',
    ),

    fault=dict(
        text='It is the ordering that it does the work. Never that conclusion has been less '
             'useful. What persuades people are the ordering and the concession. Nobody knows '
             'whether was the question answered. Having stated the warrant, the argument '
             'became uncomfortable for the author.',
        faults=[
            ('It is the ordering that it does the work',
             'It is the ordering that does the work',
             'The that-clause of a cleft already has its subject, so the extra pronoun is one '
             'subject too many.'),
            ('Never that conclusion has been less useful',
             'Never has that conclusion been less useful',
             'A fronted negative adverbial forces inversion of the auxiliary and the '
             'subject.'),
            ('What persuades people are the ordering',
             'What persuades people is the ordering',
             'A what-clause as subject is singular, whatever follows the verb.'),
            ('whether was the question answered', 'whether the question was answered',
             'An embedded question keeps statement order and does not invert the verb.'),
            ('Having stated the warrant, the argument became uncomfortable for the author',
             'Having stated the warrant, the author found the argument uncomfortable',
             'The argument did not state anything; the participle needs the subject that '
             'acted.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('a warning that limits what has just been said', 'caveat'),
            ('an answer to an objection', 'rebuttal'),
            ('to grant a point to the other side', 'concede'),
            ('a form of reasoning that does not work', 'fallacy'),
            ('a single story used as evidence', 'anecdote'),
            ('the associations a word carries', 'connotation'),
            ('the degree to which a speaker is believed', 'credibility'),
            ('a word that limits the strength of a claim', 'qualifier'),
            ('a claim made without support', 'assertion'),
            ('the step from evidence to conclusion', 'inference'),
            ('the study of how language persuades', 'rhetoric'),
            ('to use language that can be read two ways', 'equivocate'),
        ],
        gram=[
            ('______ is the ordering that does the work.', 'It'),
            ('______ persuades people is rarely the strongest argument.', 'What'),
            ('Never ______ that conclusion been less useful.', 'has'),
            ('______ I did was move one paragraph.', 'All'),
            ('The reason it fails ______ that readers hurry.', 'is'),
            ('Rarely ______ a cleft needed twice in a paragraph.', 'is'),
            ('______ an anecdote cannot do is establish an average.', 'What'),
            ('______ was the second question that went unanswered.', 'It'),
        ],
        mini=[
            ('A warrant is',
             ('a source', 'the unstated principle linking evidence to a claim',
              'a counterargument', 'a qualifier'), 1,
             'Stating it reveals whether the writer believes the step the argument depends '
             'on.'),
            ('The debating rule forbids',
             ('all anecdotes', 'an anecdote being the evidence for a general claim',
              'rhetorical questions', 'personal stories'), 1,
             'An anecdote illustrating a claim evidenced elsewhere is permitted and neither '
             'penalised nor credited.'),
            ('The passage says the devices that persuade attentive audiences',
             ('work equally for any case', 'demand something a weak case has not got',
              'are easy to learn', 'are rarely effective'), 1,
             'Conceding and naming a warrant both expose a bad argument while reinforcing a '
             'sound one.'),
            ('Which sentence is correct?',
             ('Never that conclusion has been less useful.',
              'Never has that conclusion been less useful.',
              'Never that conclusion had been less useful.',
              'Never been has that conclusion less useful.'), 1,
             'A fronted negative adverbial requires the auxiliary before the subject.'),
            ('"On the face of it" tells you the writer',
             ('agrees', 'is about to qualify or reverse the appearance',
              'is quoting', 'is uncertain of the facts'), 1,
             'It marks a first impression that the next clause will complicate.'),
            ('A what-cleft places the emphasised element',
             ('in the middle', 'at the end', 'at the start', 'nowhere in particular'), 1,
             'That end position is heavier, which is why the choice between cleft types '
             'matters.'),
        ],
    ),

    tip='This is the structure that most visibly separates a B2 writer from a B1 one. Use '
        'one cleft where you most want the reader to stop, and none anywhere else. Emphasis '
        'applied everywhere is emphasis nowhere, and an examiner can tell the difference '
        'between a writer who chose and a writer who sprinkled.',
)




# ---------------------------------------------------------------------------
# The two academic cycles, added by the Volumes 3-6 work.
#
# Unit 35 gains its two academic cycles. Cycle 4 sets out the
# three-part model of an argument and the practical result that follows
# from it: the warrant is normally unstated for reasons of economy, and
# a disagreement that presents itself as a dispute about evidence is
# very often a dispute about the sentence nobody said. Cycle 5 objects
# that the model is normative rather than descriptive, gives three
# measured findings about repetition, group membership and insinuation
# that no feature of the argument explains, and then keeps the model on
# the ground that all three operate by making a sentence feel
# unnecessary to state.
# ---------------------------------------------------------------------------
UNIT['fieldwords'] = [('suspicion', 'a feeling that something is wrong, short of proof'),
 ('deception', 'the deliberate creating of a false belief'),
 ('implicit', 'present in an argument without being stated'),
 ('unstated', 'left unsaid, whether by accident or on purpose'),
 ('grounds', 'the evidence an argument is built on'),
 ('repetition', 'the saying of the same thing again and again'),
 ('familiarity', 'the sense that something has been met before'),
 ('insinuation', 'a suggestion made without being said outright'),
 ('concession', 'a point granted to the other side'),
 ('persuasive', 'likely to move an audience, whether or not sound'),
 ('normative', 'about how something ought to be done'),
 ('observational', 'resting on what is measured rather than on principle')]
UNIT['r4'] = {'sub': 'How an argument is built',
 'title': 'The Part of an Argument Nobody Says Out Loud',
 'words': 350,
 'skill': ('Reading a three-part model of argument',
           ['Three parts are named. Two of them are usually visible and one is usually not.',
            'The worked example is the centre of the passage. Identify the part that is '
            'missing from it.',
            'A question about disagreement wants where the passage locates it.']),
 'paras': ['An argument in ordinary speech has three parts and only two of them are usually '
           'said aloud. There are the grounds, which are the facts offered; there is the '
           'claim, which is the proposition the speaker wants accepted; and there is the '
           'warrant, which is the general principle that permits the one to support the '
           'other. The distinction between the three is not a classification for its own '
           'sake: a reader with no separate word for the warrant has no way of asking '
           'whether the connection between the grounds and the claim holds. The grounds and '
           'the claim are spoken because an argument without them is not an argument at all, '
           'while the warrant is normally implicit, and the reason for its omission is not '
           'concealment but economy, since an argument that stated every warrant would be '
           'unbearable to listen to.',
           'Consider a sentence of the ordinary kind: the applicant was late for the '
           'interview, so she should not be appointed. The grounds and the claim are both '
           'present and the warrant is not. The unstated principle is something like a '
           'candidate who is late for an interview will be unreliable in the post, and the '
           'moment it is written down two things happen that do not happen while it stays '
           'implicit. It becomes a general claim about human behaviour; a general claim '
           'admits of examination, and this one is fairly weak. It also becomes clear that '
           'the disagreement was never about the facts at all, since nobody disputes that '
           'the applicant was late.',
           'This is the chief practical result of the model, and it holds across subjects. '
           'Disagreements that present themselves as disagreements about evidence are very '
           'often disagreements about warrants, with both sides accepting the same grounds '
           'and drawing incompatible conclusions because each is applying a different '
           'implicit principle. The instruction that follows is simple to state and hard to '
           'carry out. When an argument resists you and you cannot say why, write down the '
           'sentence the speaker did not say, and examine that instead of the evidence, '
           'because the examination of grounds everybody accepts is wasted effort.'],
 'guided': [('Which two parts of an argument are usually said aloud?',
             ('The grounds and the warrant',
              'The grounds and the claim',
              'The claim and the warrant',
              'All three'),
             1,
             'An argument without the grounds and the claim is not an argument at all.'),
            ('What is the warrant?',
             ('The facts offered',
              'The general principle that lets the grounds support the claim',
              'The conclusion',
              'The speaker’s motive'),
             1,
             'That is the definition the passage gives it.'),
            ('Why is the warrant normally left implicit?',
             ('To conceal a weakness',
              'For economy, because stating every warrant would be unbearable',
              'Because audiences cannot follow it',
              'Because it is usually false'),
             1,
             'The passage says the reason is not concealment but economy.')],
 'exam': [('In the example, what is the unstated principle?',
           ('That interviews should start on time',
            'That a candidate late for an interview will be unreliable in the post',
            'That the applicant was late',
            'That appointments should be fair'),
           1,
           'That is the warrant the example leaves out.'),
          ('What happens when the warrant is written down?',
           ('The grounds become disputed',
            'It becomes a general claim that can be tested',
            'The claim becomes stronger',
            'The argument becomes shorter'),
           1,
           'And in this case the passage says the general claim is fairly weak.'),
          ('What does the example show about the disagreement?',
           ('It was about the facts',
            'It was never about the facts, since nobody disputes the lateness',
            'It was about the interview procedure',
            'It cannot be resolved'),
           1,
           'Both sides accept the grounds, so the dispute lies elsewhere.'),
          ('What does the passage say about disagreements that look like disputes over '
           'evidence?',
           ('They usually are',
            'They are very often disagreements about warrants',
            'They are rare outside politics',
            'They cannot be analysed'),
           1,
           'Both sides accept the same grounds and apply different implicit principles.'),
          ('What instruction does the passage end with?',
           ('Check the evidence again',
            'Write down the sentence the speaker did not say',
            'Ask the speaker to clarify',
            'Set out your own warrant first'),
           1,
           'And examine that instead of the evidence, which is the practical result.')]}
UNIT['r5'] = {'sub': 'How an argument is built',
 'title': 'A Model of How We Ought to Be Persuaded',
 'words': 346,
 'skill': ('Reading an objection that a model is an ideal rather than a report',
           ['The writer accepts that the model is useful and denies that it describes '
            'anything. Note the word for each.',
            'Measured findings follow. Hold what each of them says moves an audience.',
            'A question about the conclusion wants why the writer still teaches the model.']),
 'paras': ['Everything in the previous passage is worth learning and almost none of it is a '
           'description of how persuasion works. The model is normative: it sets out what an '
           'argument would consist of if audiences were moved by reasons. The experimental '
           'literature on what actually moves audiences is large, consistent and '
           'unflattering, and the quantities that predict agreement best are not features of '
           'the argument at all, which is an awkward result for a subject that teaches '
           'argument.',
           'Three findings give the shape of it. Repetition raises acceptance of a statement '
           'whether or not any evidence accompanies it, and the effect survives in people '
           'who can remember being told that the statement was false, which means that '
           'familiarity is doing work that has nothing to do with grounds. Agreement rises '
           'sharply when the audience takes the speaker to belong to its own group, and the '
           'same argument in the mouth of an outsider moves the same audience much less, so '
           'the warrant is not what is being examined. And insinuation performs better than '
           'assertion for anything the audience is reluctant to hear, because a suggestion '
           'the listener completes for themselves is not available to be checked. None of '
           'these three is a kind of argument. Each is a kind of deception, or close enough '
           'to one that the distinction needs an argument of its own, and that argument is '
           'never supplied by the people who use them.',
           'Why then teach the model at all? Because the three findings describe what cannot '
           'be defended against from the inside, and the warrant is the only part of a '
           'persuasion that a listener can examine without trusting the speaker. A reader '
           'who writes down the unstated principle has the one tool that works on '
           'familiarity, on group membership and on insinuation alike, since all three '
           'operate by making a sentence feel unnecessary to state. The model is a poor '
           'account of how we are persuaded and the best available account of how to notice '
           'it happening, and the suspicion it teaches is worth more than the elegance it '
           'claims.'],
 'guided': [('What does the writer say the model is?',
             ('Observational', 'Normative', 'Mistaken', 'Out of date'),
             1,
             'It sets out what an argument would consist of if audiences were moved by '
             'reasons.'),
            ('What does the writer say about the experimental literature?',
             ('It is thin and contested',
              'It is large, consistent and unflattering',
              'It supports the model',
              'It is mostly recent'),
             1,
             'And the quantities that predict agreement best are not features of the '
             'argument.'),
            ('What does repetition do?',
             ('Raises acceptance whether or not evidence accompanies it',
              'Raises acceptance only with evidence',
              'Lowers acceptance over time',
              'Has no measurable effect'),
             0,
             'And it survives in people who remember being told the statement was false.')],
 'exam': [('What does the finding about repetition show?',
           ('That evidence is unnecessary',
            'That familiarity does work unrelated to grounds',
            'That audiences forget corrections',
            'That statements should be repeated'),
           1,
           'The survival of the effect after a correction is what makes the point.'),
          ('What happens when the audience takes the speaker to be an outsider?',
           ('The argument is rejected outright',
            'The same argument moves the same audience much less',
            'The grounds are examined more closely',
            'Agreement is unaffected'),
           1,
           'Which is why the writer says the warrant is not what is being examined.'),
          ('Why does insinuation work better than assertion?',
           ('It is shorter',
            'A suggestion the listener completes is not available to be checked',
            'It is harder to remember',
            'It flatters the audience'),
           1,
           'Nothing was said, so there is nothing to examine.'),
          ('Why does the writer still teach the model?',
           ('Because the findings may be wrong',
            'Because the warrant is the only part a listener can examine without trusting '
            'the speaker',
            'Because it is traditional',
            'Because it describes persuasion accurately'),
           1,
           'It is the one tool that works on all three of the measured effects.'),
          ('What do all three effects have in common, according to the passage?',
           ('They require a hostile audience',
            'They operate by making a sentence feel unnecessary to state',
            'They work only in writing',
            'They can be measured only in groups'),
           1,
           'That is why writing the sentence down is the defence against all three.')]}
UNIT['l4'] = {'sub': 'How an argument is built',
 'caption': 'A lecture on grounds, claim and the sentence nobody says',
 'board': ['Grounds: the facts offered',
           'Claim: what you are asked to accept',
           'Warrant: the principle joining them',
           'Write down what was not said'],
 'skill': ('A lecture that gives a method and one example',
           ['Three terms first, then one example worked slowly. The example carries the '
            'method.',
            'Note what the lecturer says happens as soon as the warrant is written down.',
            'A question about the assignment wants what the students must produce.']),
 'warm': [('Woman: What is a warrant?',
           ('The principle joining the facts to the claim.',
            'The facts offered.',
            'Yes, there is one.',
            'Three parts.'),
           0,
           'That is the term the whole lecture turns on.'),
          ('Woman: Why is the warrant usually unstated?',
           ('Because stating all of them would be unbearable.',
            'Because speakers are hiding something.',
            'Yes, it is unstated.',
            'In an interview.'),
           0,
           'He is careful that economy, not concealment, is the usual reason.'),
          ('Woman: What must the students hand in?',
           ('The warrant, written as a sentence.',
            'A summary of the argument.',
            'Yes, an assignment.',
            'Next week.'),
           0,
           'He asks for the unstated sentence, and nothing else.')],
 'script': [('Man',
             'Three words, and then one example, and the example is the lecture. Grounds: '
             'the facts a speaker offers. Claim: what the speaker wants you to accept. '
             'Warrant: the general principle that allows the first to support the second. '
             'Now notice that in ordinary speech you hear the grounds and the claim and '
             'almost never the warrant, and before anybody suggests that this is sinister, '
             'it is not. It is economy. You do it yourself a hundred times a day, and so do '
             'I, and so does every judge and every doctor. An argument that spelled out '
             'every warrant would be intolerable to sit through. Here is the example. She '
             'was late for the interview, so she should not be appointed. Grounds, claim, '
             'and no warrant. Write the warrant down for me. Something like: a candidate who '
             'arrives late for an interview will be unreliable in the job. Now look what has '
             'just happened, twice. First, that is a general claim about people, and general '
             'claims can be tested, and this one is weak. Second, and this is the useful '
             'part, we have discovered that the argument was never about the facts. Nobody '
             'disputes that she was late. Not the candidate, not the panel, nobody. The '
             'whole disagreement was living in a sentence nobody said. So, the assignment. '
             'Bring me four arguments from this week’s newspapers, and for each one bring me '
             'the warrant, written out as a full sentence. Not a summary of the article. The '
             'sentence the writer did not put in it. And if you cannot find one, bring me '
             'the argument and say so, because an argument with no warrant at all is a '
             'different and far more interesting problem.')],
 'items': [('What does the lecturer say the example is?',
            ('An illustration of the grounds',
             'The lecture itself',
             'A test of the students',
             'An unusual case'),
            1,
            'He says three words, then one example, and the example is the lecture.'),
           ('What does he say about the warrant being unstated?',
            ('It is usually sinister',
             'It is economy, not concealment',
             'It happens only in speech',
             'It is a recent development'),
            1,
            'He heads off the suspicion before anybody raises it.'),
           ('What is the warrant in his example?',
            ('That she was late',
             'That a candidate late for an interview will be unreliable in the job',
             'That she should not be appointed',
             'That interviews matter'),
            1,
            'That is the sentence he asks the class to write down.'),
           ('What is the first thing that happens when it is written down?',
            ('The claim collapses',
             'It becomes a general claim about people, which can be tested',
             'The grounds are disputed',
             'The speaker objects'),
            1,
            'And he adds that this particular general claim is weak.'),
           ('What must the students bring?',
            ('Four summaries of articles',
             'Four arguments and the warrant of each, written as a full sentence',
             'Four examples of weak grounds',
             'One argument with its claim removed'),
            1,
            'He is explicit that a summary is not what he wants.')]}
UNIT['l5'] = {'sub': 'How an argument is built',
 'caption': 'A short talk on what actually moves an audience',
 'board': ['Repetition: works without evidence',
           'Group membership: works on the same words',
           'Insinuation: nothing to check',
           'Still teach the warrant'],
 'skill': ('A talk that undercuts a model and keeps it',
           ['The speaker separates what a model is for from what it describes. Note both.',
            'Three findings, each with the reason it embarrasses the model.',
            'A question about her ending wants why the model survives.']),
 'warm': [('Man: Does she think the model describes persuasion?',
           ('No, she thinks it describes an ideal.',
            'Yes, she thinks it is accurate.',
            'Yes, she does.',
            'Three findings.'),
           0,
           'She calls it normative and denies that it is observational.'),
          ('Man: Why does insinuation work so well?',
           ('There is nothing to check.',
            'It is repeated more often.',
            'Yes, it works.',
            'On a reluctant audience.'),
           0,
           'The listener supplies the claim, so no claim was made.'),
          ('Man: Why keep the model?',
           ('The warrant is the only part a listener can check.',
            'Because it is traditional.',
            'Yes, she keeps it.',
            'For examinations.'),
           0,
           'It is the one defence that works on all three findings.')],
 'script': [('Woman',
             'I want to take the model apart and then hand it back to you, because both '
             'halves of that matter. The model tells you what an argument would be made of '
             'if people were moved by reasons. Whether people are moved by reasons is a '
             'separate question, and the experiments on it are numerous, boringly '
             'consistent, and not flattering to anybody. I am going to give you three, and '
             'you should assume there are forty more. Three of them. One: repeat a statement '
             'and agreement with it rises, with no evidence attached, and the effect is '
             'still there in people who remember being told the statement was false. So '
             'familiarity is doing something, and it is nothing to do with grounds. Two: the '
             'same sentence, word for word, persuades an audience considerably more when the '
             'audience takes the speaker to be one of them. So the warrant is not what is '
             'under examination. Three: for anything an audience does not want to hear, hint '
             'rather than assert, because a thought the listener finishes themselves cannot '
             'be checked by them. That is why the method is used by people who would never '
             'tell an outright lie. Now, why have I spent a term teaching you a model that '
             'does not describe the thing it is about? Because all three of those tricks '
             'work by making a sentence feel unnecessary to say, and writing that sentence '
             'down is the only move available to a listener who does not want to trust the '
             'speaker. The model is a bad description and the best defence we have, and I '
             'would rather hand you a bad description with a use than an accurate one with '
             'none.')],
 'items': [('What does the speaker say she will do?',
            ('Replace the model',
             'Take the model apart and hand it back',
             'Defend the model against the experiments',
             'Compare two models'),
            1,
            'She says both halves of that matter.'),
           ('What does she say about the experiments?',
            ('They are few and contested',
             'They are numerous, consistent and unflattering',
             'They support the model',
             'They are hard to interpret'),
            1,
            'That is her summary of the literature before she gives three of it.'),
           ('What is still present in people who remember the correction?',
            ('The evidence', 'The effect of repetition', 'The warrant', 'The claim'),
            1,
            'Which is how she shows familiarity is doing the work.'),
           ('What does the second finding show about the warrant?',
            ('That it must be stated',
             'That it is not what is under examination',
             'That outsiders argue badly',
             'That audiences prefer evidence'),
            1,
            'The same words move the same audience differently by speaker, so the argument '
            'is not what is being weighed.'),
           ('Why has she taught the model for a term?',
            ('Because it is examinable',
             'Because writing the unstated sentence down is the only move a listener has',
             'Because the experiments may be wrong',
             'Because it describes argument accurately'),
            1,
            'She calls it a bad description and the best defence we have.')]}
UNIT['w4'] = {'sub': 'How an argument is built',
 'skill': ('Cleft sentences and fronting: what… is, it is… that',
           ['A what-cleft moves the important part to the end: what nobody says is the '
            'warrant.',
            'An it-cleft puts the emphasis in the middle: it is the warrant that carries the '
            'disagreement.',
            'Front a phrase for contrast, and keep the rest of the clause in order: about '
            'the facts there was never any dispute.']),
 'guided': [('You want to emphasise the missing part.',
             ['what',
              'nobody',
              'states',
              'is',
              'the warrant',
              'that',
              'joins',
              'the grounds',
              'to',
              'the claim'],
             'What nobody states is the warrant that joins the grounds to the claim.'),
            ('You want an it-cleft on the warrant.',
             ['it',
              'is',
              'the warrant',
              'that',
              'carries',
              'the',
              'disagreement',
              'and',
              'not',
              'the grounds'],
             'It is the warrant that carries the disagreement, and not the grounds.'),
            ('You want to front a phrase for contrast.',
             ['about', 'the facts', 'there', 'was', 'never', 'any', 'dispute', 'at', 'all'],
             'About the facts there was never any dispute at all.')],
 'exam': [('You want a what-cleft on the method.',
           ['what',
            'the method',
            'asks',
            'you',
            'to',
            'do',
            'is',
            'write',
            'the unstated',
            'sentence',
            'down'],
           'What the method asks you to do is write the unstated sentence down.'),
          ('You want an it-cleft on familiarity.',
           ['it',
            'is',
            'familiarity',
            'rather than',
            'evidence',
            'that',
            'raises',
            'agreement',
            'with',
            'a repeated',
            'statement'],
           'It is familiarity rather than evidence that raises agreement with a repeated '
           'statement.'),
          ('You want to front a concession.',
           ['useful',
            'the model',
            'certainly',
            'is',
            'but',
            'it',
            'describes',
            'nothing',
            'anybody',
            'does'],
           'Useful the model certainly is, but it describes nothing anybody does.'),
          ('You want a what-cleft on the defence.',
           ['what',
            'protects',
            'a listener',
            'is',
            'the',
            'habit',
            'of',
            'stating',
            'the',
            'principle',
            'aloud'],
           'What protects a listener is the habit of stating the principle aloud.'),
          ('You want an it-cleft with a negative.',
           ['it',
            'was',
            'not',
            'the grounds',
            'that',
            'the two sides',
            'disagreed',
            'about',
            'in',
            'the end'],
           'It was not the grounds that the two sides disagreed about in the end.')]}
UNIT['w5'] = {'sub': 'How an argument is built',
 'prof': 'Dr Nwosu',
 'question': 'A university course in rhetoric teaches students to identify unstated '
             'warrants, and the same analysis tells a speaker how to leave a weak warrant '
             'unstated. A colleague argues that the course should be taught only to students '
             'who will not go into political work. Should the course change?',
 'posts': [('Esther',
            'w',
            'No, and the proposal is worse than useless, because the people who go into '
            'political work will learn these techniques anyway and the only students you '
            'have excluded are the ones who would have been able to see through them.'),
           ('Rafi',
            'm',
            'Esther assumes detection and concealment are equally easy to teach, and the '
            'second passage suggests they are not. Three of the most effective techniques '
            'work by not being stated, which is a gift to anybody who wants to use them.')],
 'skill': ('A question about teaching something that can be misused',
           ['Esther argues from who ends up untrained; Rafi from the asymmetry between using '
            'and detecting.',
            'The second passage says all three effects operate by making a sentence feel '
            'unnecessary, which cuts against Rafi more than he notices.',
            'A strong answer says what the course should contain, not only whether it should '
            'run.']),
 'starters': ['Rafi is right that…, although the passage he cites…',
              'The distinction worth drawing is between… and…',
              'What the asymmetry actually favours is…',
              'So the course should keep…, and add…'],
 'model': ['Rafi is right that detection and concealment are not symmetrical, and the '
           'passage he cites puts the asymmetry the other way round. All three of the '
           'measured effects work by making a sentence feel unnecessary to state, so each of '
           'them is defeated by the single habit of writing that sentence down, while none '
           'of them is made easier by learning the habit. The technique is cheap to use and '
           'cheap to detect, and what the course teaches is the detection.',
           'Esther is right about who would be left untrained and she states it as though '
           'the misuse were imaginary. It is not. A student who can find a warrant can also '
           'notice which of their own warrants will not survive being said aloud, and some '
           'of them will act on that, without any further instruction from anybody, which is '
           'a cost of the course and not a reason against it.',
           'So the course should keep its method and add the part it is currently missing, '
           'which is the measured literature on what moves audiences. A student who has been '
           'taught the three-part model alone leaves believing that persuasion runs on '
           'reasons, and that belief is itself a vulnerability. What the addition costs is '
           'the clean shape of the course, because the findings do not fit the model and '
           'cannot be made to. That is the smaller price. A graduate who knows the model and '
           'not the findings has been equipped for an argument nobody is having, against '
           'opponents who have read the findings.'],
 'model_words': 254}
UNIT['sp'] = list(UNIT['sp']) + [{'sub': 'How an argument is built',
  'focus': 'stating the principle somebody left unsaid',
  'skill': ('The sentence nobody said was: a candidate who is late will be unreliable',
            ['Introduce the sentence as a sentence, then say it at full length. Rushing it '
             'loses the point.',
             'Keep your tone neutral while you say it. Mockery makes it sound like a straw '
             'man.',
             'Then pause before you comment on it.']),
  'repeat': ['The warrant joins the two.',
             'The grounds are the facts offered.',
             'Nobody disputes that she was late.',
             'The claim is what you are asked to accept.',
             'The disagreement was living in a sentence nobody said.',
             'Write down the sentence the speaker did not say.',
             'A general claim about people can be tested, and this one turns out to be '
             'weak.'],
  'theme': 'an argument with something missing from it',
  'qs': ['Tell me about a disagreement where you and the other person agreed on the facts. '
         'What were you really disagreeing about?',
         'Some people say that if two people have the same information they should reach the '
         'same conclusion. How far would you agree?',
         'How would you explain to a friend what a warrant is?',
         'Finally, describe an argument you heard recently that you could not answer.'],
  'model': [(2,
             'I would disagree, and this unit gives me the reason. The same information '
             'supports different conclusions depending on the principle you bring to it, and '
             'that principle is usually the thing that is never stated.'),
            (3,
             'I would say it is the sentence that has to be true for the facts to count as a '
             'reason. If somebody says it is raining so take a coat, the warrant is that you '
             'mind getting wet.')],
  'selfcheck': ['I said the unstated sentence at full length',
                'I kept my tone neutral while saying it',
                'I used at least two of the unit’s field words']},
 {'sub': 'How an argument is built',
  'focus': 'keeping something while admitting it is wrong',
  'skill': ('It is a bad description and the best defence we have',
            ['Give the concession first and completely. A short concession sounds like a '
             'trick.',
             'Then say what the thing is for, which is a different question from whether it '
             'is true.',
             'Stress for, because the whole move is about purpose.']),
  'repeat': ['The model is normative.',
             'It is not a description.',
             'Repetition works with no evidence at all.',
             'The same sentence persuades more from an insider.',
             'All three work by making a sentence feel unnecessary.',
             'A hint cannot be checked by the person who finishes it.',
             'It is a bad description of how we are persuaded and the best account we have '
             'of how to notice it.'],
  'theme': 'a tool worth keeping for a reason other than accuracy',
  'qs': ['Tell me about something you use that you know is not accurate. Why do you keep '
         'using it?',
         'Some people think a model that does not describe reality should be thrown out. '
         'What do you think?',
         'How do you protect yourself against an argument you find persuasive?',
         'Finally, describe a time repetition changed your mind without any new evidence.'],
  'model': [(2,
             'I think that confuses two tests. A model can be judged by whether it describes '
             'something or by what it lets you do, and the second test is the one that '
             'matters for a tool.'),
            (3,
             'I try to write down the principle the argument needs, in a full sentence, '
             'because once it is on the page I am looking at a claim rather than feeling a '
             'pull.')],
  'selfcheck': ['I gave the concession completely first',
                'I separated what it is for from whether it is true',
                'I stressed the purpose']}]
