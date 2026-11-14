# -*- coding: utf-8 -*-
"""Unit 30 — Film and Visual Culture. Volume 3."""
from content._g import gaps

_GT, _GA = gaps(
    'Two shots placed side by side are read as connected, whether or not the filmmaker '
    'intended any connect{ion}. A face, then a bowl of soup: the audience sees '
    'hun{ger}. The same face, then a coffin: the audience sees gr{ief}. The face has not '
    'changed. What has changed is what sits next to it, and the meaning is manufac{tured} '
    'entirely in the viewer. This is the oldest finding in film theory and it remains the '
    'most useful, because it means an editor is not arranging pictures but direct{ing} an '
    'inference that the audience will make without noticing that they have made it.')

_ET, _EA = gaps(
    'Documentary carries an implicit promise that what you are watching happ{ened}, and '
    'almost every technique available to a filmmaker puts pressure on that prom{ise}. Two '
    'interviews recorded on different days can be cut so that one person appears to answer '
    'the other. Archival footage can be laid under a narration describing an event it does '
    'not actually show, and the viewer will assume the picture is evi{dence} for the words. A '
    'reconstruction, shot with actors and graded to look older than it is, can be '
    'indistinguish{able} from the real thing at the speed a television audience '
    'wat{ches}. None of this is necessarily dishonest. A filmmaker who reconstructs a '
    'conversation nobody filmed is doing something a historian does in prose every day, and '
    'the convention that lets a historian do it is well under{stood}. The difficulty is that '
    'film has no equival{ent} of the footnote. Prose can signal its own status in the middle '
    'of a sentence, and an image cann{ot}, which is why the question of what a documentary '
    'owes its audience keeps returning in a form that the written disciplines settled a '
    'century a{go}. Some directors label every reconstruction on screen. Others regard the '
    'label as a failure of n{erve}. The argument is not about honesty but about whether an '
    'audience that has not been told is nevertheless being deceived.')

UNIT = dict(
    n=30, vol=3, level='B2',
    title='Film and Visual Culture',
    icons=['palette', 'speech', 'news'],
    subs=['How an edit makes meaning', 'Documentary and truth', 'Who owns an image'],
    grammar='Concession: while, whereas, albeit',
    field='montage, framing, spectator',
    opener_line='Film is the medium everyone consumes and almost nobody has been taught to '
                'read. This closing unit of Volume 3 teaches the vocabulary for describing '
                'how an image makes its argument — and the structures English uses to grant '
                'a point and keep going.',
    candos=[
        'I can describe how meaning is produced by arrangement rather than content.',
        'I can use while, whereas and albeit accurately and in the right register.',
        'I can concede a point in the middle of a sentence without losing the thread.',
        'I can read an image as a claim and ask what it is evidence for.',
        'I can discuss a contested practice without taking sides prematurely.',
        'I can write an argument whose structure the reader can follow at a glance.',
    ],

    acad=[
        ('montage', 'meaning made by the order of shots'),
        ('framing', 'what is included in the shot and what is left out'),
        ('spectator', 'the viewer, considered as part of the system'),
        ('continuity', 'keeping the fictional world consistent across cuts'),
        ('genre', 'a category with expectations attached'),
        ('narrative', 'the ordering of events into a story'),
        ('protagonist', 'the character whose perspective organises the film'),
        ('juxtapose', 'to place two things side by side'),
        ('aesthetic', 'to do with how something looks and why'),
        ('authorship', 'who is held to have made the work'),
        ('realism', 'the convention of appearing not to be a convention'),
        ('staging', 'arranging what happens in front of the camera'),
        ('pacing', 'how fast information is given to the viewer'),
        ('subtext', 'what a scene is about underneath what it shows'),
        ('archival', 'drawn from existing recorded material'),
        ('reenactment', 'a staged version of something that happened'),
        ('voiceover', 'narration heard over the image'),
        ('footage', 'recorded material, before it is edited'),
    ],
    family=('narrate', [
        ('narrative', 'noun', 'the narrative is told out of order'),
        ('narration', 'noun', 'the narration explains what we see'),
        ('narrator', 'noun', 'an unreliable narrator'),
    ]),
    collocs=[
        ('cut between', 'to alternate two shots'),
        ('read as', 'to be interpreted as'),
        ('stand in for', 'to represent something else'),
        ('take at face value', 'to accept without questioning'),
        ('in the first place', 'before anything else happened'),
        ('bear out', 'to confirm'),
        ('lend itself to', 'to be well suited to'),
        ('call into question', 'to make doubtful'),
        ('on screen', 'visible to the audience'),
        ('a case in point', 'an example that proves the general claim'),
    ],
    stance=[
        ('is well understood', 'the convention is settled and known'),
        ('in many cases', 'often, though not always'),
        ('is routinely assumed', 'taken for granted by most viewers'),
        ('is far from obvious', 'the writer says it needs arguing'),
        ('cannot seriously be maintained', 'the writer rejects it outright'),
    ],
    nuance=[
        ('scene / shot', 'a unit of action / a single run of camera'),
        ('film / footage', 'the finished work / the raw material'),
        ('fiction / fabrication', 'an agreed convention / a deception'),
    ],
    vocab_talk=[
        'Describe a scene where the music changed what you thought you saw.',
        'Should a documentary label every reconstruction? Why?',
        'Who is the author of a film? Defend your answer.',
        'What can an image never tell you on its own?',
    ],
    again=['cut', 'shot length', 'close-up', 'establishing shot',
           'talking head', 'B-roll', 'dramatic irony', 'point of view'],

    r1=dict(
        sub='How an edit makes meaning',
        skill=('Suffixes in critical writing',
               ['Criticism uses abstract nouns heavily: connection, inference, convention, '
                'authorship.',
                'The -ship and -ure endings are more common here than elsewhere.',
                'Decide what the sentence needs grammatically before guessing at the '
                'spelling.']),
        guided_text=_GT, guided=_GA,
        guided_hint='connect{ion} is connection — it follows any and names a thing, so the '
                    'slot is a noun.'.replace('{', '').replace('}', ''),
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='Documentary and truth',
        skill=('Reading a code of practice against a case',
               ['A code states what practitioners agree to do. A case tests whether the '
                'wording covers a situation its authors did not foresee.',
                'Look for the word doing the work — materially, significantly, reasonably '
                '— and ask who decides.',
                'A rule with an undefined threshold is a rule that will be argued about.']),
        docs=[
            ('notice', 'Festival documentary strand · code of practice for entrants', [
                '# What entrants undertake',
                '* Not to present staged material as actuality without disclosure.',
                '* To disclose any reconstruction that a reasonable viewer would otherwise '
                'take for recorded events.',
                '* To retain original footage and an edit log for two years after screening.',
                '# Disclosure',
                '* Disclosure may be on screen, in the closing credits, or in the programme '
                'notes, at the filmmaker’s discretion.',
                '# Not covered',
                '* Compression of a sequence into a shorter running time, where the order of '
                'events is preserved.',
            ], 'notice'),
            ('email', 'p.oyelaran@festival.org', 'entries@festival.org',
             '03/07/2027', 'Query about the disclosure rule', [
                 'Dear Ms Oyelaran,',
                 '',
                 'Thank you for the question, which comes up every year and which the code',
                 'does not fully answer.',
                 '',
                 'Your film cuts between two interviews recorded eight months apart so that',
                 'the subjects appear to be in conversation. Nothing is staged — both',
                 'answers are the real answers to the real questions. So the first',
                 'undertaking does not bite.',
                 '',
                 'The second might. A reasonable viewer would take that sequence for a',
                 'conversation, and it was not one. Whether that is a reconstruction within',
                 'the meaning of the code is genuinely arguable, and our panel has split on',
                 'similar cases before.',
                 '',
                 'My advice, which is advice and not a ruling: disclose it in the programme',
                 'notes. It costs you nothing, it is permitted by the code, and it removes',
                 'the only question anybody is going to ask you in the Q and A.',
                 '',
                 'Festival Office',
             ]),
        ],
        guided=[
            ('For how long must original footage be kept?',
             ('One year', 'Two years after screening', 'Five years', 'Indefinitely'), 1,
             'The code sets two years after screening, together with the edit log.'),
            ('Where may disclosure be made?',
             ('On screen only', 'In the credits only',
              'On screen, in the credits or in the programme notes', 'Nowhere'), 2,
             'All three are permitted at the filmmaker’s discretion, which is what makes the '
             'office’s advice costless.'),
            ('What is explicitly not covered by the code?',
             ('Reconstruction', 'Compressing a sequence while preserving the order',
              'Archival footage', 'Voiceover'), 1,
             'That exclusion is listed separately, which tells you the authors thought about '
             'it and decided to allow it.'),
            ('What triggers the second undertaking?',
             ('Any editing', 'Material a reasonable viewer would take for recorded events',
              'The use of actors', 'A running time over an hour'), 1,
             'The test is the reasonable viewer, which is why the office says the case is '
             'arguable.'),
        ],
        exam=[
            ('Why does the first undertaking not apply to the film?',
             ('The film is too short', 'Nothing was staged',
              'The interviews were disclosed', 'It is an archival film'), 1,
             'Both answers are real answers to real questions, so no material was staged for '
             'the camera.'),
            ('Why might the second undertaking apply?',
             ('Actors were used', 'A reasonable viewer would take the sequence for a conversation',
              'The footage was not retained', 'The film was compressed'), 1,
             'The sequence looks like something that did not happen, which is what the '
             'reasonable-viewer test is aimed at.'),
            ('What does the officer say about the panel?',
             ('It always refuses such films', 'It has split on similar cases',
              'It has never seen one', 'It will rule in advance'), 1,
             'That split is the evidence that the code’s wording does not settle the '
             'question.'),
            ('Why does the officer distinguish advice from a ruling?',
             ('To avoid responsibility', 'Because a ruling would bind the panel',
              'Because the code forbids advice', 'To delay the decision'), 1,
             'Calling it advice keeps the panel free, which is why the email is careful to '
             'mark the difference.'),
            ('What is the practical argument for disclosing?',
             ('It is required', 'It is free, permitted, and removes the obvious question',
              'It improves the film', 'The panel prefers it'), 1,
             'Those three reasons are given together, and none of them is that the code '
             'compels it.'),
            ('What does the exchange reveal about the code?',
             ('It is unusually precise', 'It leaves a genuine gap at the edges',
              'It is rarely enforced', 'It is new this year'), 1,
             'The office says the code does not fully answer the question and that the panel '
             'has split, which is a gap rather than a strictness.'),
            ('What does "the only question anybody is going to ask you in the Q and A" suggest?',
             ('The film is uninteresting', 'The issue is obvious to an audience',
              'Audiences do not ask questions', 'The panel will not notice'), 1,
             'If a reasonable viewer notices, so will an audience, which is the same test '
             'arriving from a different direction.'),
        ],
    ),

    r3=dict(
        sub='Who owns an image',
        title='The Photograph and the Person In It',
        words=287,
        paras=[
            'A photograph has at least three parties with a claim on it: the person who took '
            'it, the person in it, and whoever is paying. Copyright, in most jurisdictions, '
            'goes to the first of these and takes almost no account of the second. The rule is '
            'well understood by practitioners and is '
            'routinely assumed to be an oversight. It is not; it follows from treating a '
            'photograph as an authored work rather than as a record of somebody, and the '
            'choice was deliberate.',

            'The consequences are visible wherever the two claims diverge. A photograph taken '
            'of a stranger in a public place belongs to the photographer, who may sell it, '
            'and the subject has in many cases no say at all. Where the law has intervened it '
            'has done so sideways, through privacy or data protection rather than through '
            'copyright, producing a patchwork in which the same image may be freely '
            'publishable in one country and actionable in the next.',

            'Whether this is the right arrangement is far from obvious, and the arguments cut '
            'across the usual lines. Giving subjects a veto would end street photography as a '
            'form, and most of the twentieth century’s record of ordinary life would have been '
            'impossible under it. Giving photographers an unqualified right produces the '
            'situation in which somebody’s worst moment is a saleable asset belonging to a '
            'stranger. Both of those are real costs, and the claim that one of them is '
            'obviously smaller cannot seriously be maintained by anybody who has looked at '
            'the cases. What can be said is that the current arrangement was designed for a '
            'world in which taking a photograph was difficult and publishing one was '
            'expensive, and neither of those is now true.',
        ],
        skill=('Reading a passage that refuses an easy verdict',
               ['When an author says the arguments cut across the usual lines, expect no '
                'clean answer.',
                'The structure is usually: cost of option A, cost of option B, and then '
                'something both have in common.',
                'The final move is often to point out that the question was framed for '
                'different conditions.']),
        guided=[
            ('Who does copyright in a photograph normally go to?',
             ('The subject', 'The photographer', 'The publisher', 'Nobody'), 1,
             'The first paragraph says it goes to the person who took it and takes almost no '
             'account of the subject.'),
            ('What does the author say about calling this an oversight?',
             ('It is accurate', 'It is wrong — the choice was deliberate',
              'It is a recent view', 'It applies only in some countries'), 1,
             'It follows from treating a photograph as an authored work, which was a '
             'decision rather than an omission.'),
            ('How has the law intervened where it has?',
             ('Through copyright', 'Through privacy or data protection',
              'Through contract', 'Not at all'), 1,
             'The author calls this sideways intervention and says it produces a patchwork.'),
            ('The word "actionable" in the second paragraph means',
             ('newsworthy', 'able to be sued over', 'easily published', 'well composed'), 1,
             'It is contrasted with freely publishable, so it describes an image that could '
             'give rise to a legal claim.'),
        ],
        exam=[
            ('What would giving subjects a veto cost?',
             ('Nothing significant', 'Street photography as a form',
              'Only commercial photography', 'The privacy laws'), 1,
             'Most of the twentieth century’s record of ordinary life would have been '
             'impossible, which the author treats as a real loss.'),
            ('What does an unqualified photographer’s right produce?',
             ('Better photographs', 'Somebody’s worst moment as a stranger’s saleable asset',
              'Lower publishing costs', 'More privacy claims'), 1,
             'That is the cost the author sets against the other, in deliberately concrete '
             'terms.'),
            ('What does the author say about claiming one cost is obviously smaller?',
             ('It is correct', 'It cannot seriously be maintained by anyone who knows the cases',
              'It depends on the country', 'It is the consensus'), 1,
             'That is the strongest rejection in the passage, and it is aimed at both sides '
             'equally.'),
            ('What is the author’s closing observation?',
             ('The law should be unified',
              'The arrangement was designed for conditions that no longer hold',
              'Photographers should be licensed',
              'Subjects should be paid'), 1,
             'Taking a photograph was difficult and publishing one was expensive, and neither '
             'is now true.'),
            ('Why does the author mention the patchwork?',
             ('To praise variation', 'To show the consequence of intervening sideways',
              'To criticise one country', 'To explain copyright'), 1,
             'Privacy and data protection vary by jurisdiction in a way copyright does not, '
             'so the same image has different status.'),
            ('What does "the arguments cut across the usual lines" mean?',
             ('Everyone agrees', 'The positions do not line up with the usual groupings',
              'The arguments are weak', 'The law is unclear'), 1,
             'It signals that the normal political sides do not predict who holds which view '
             'here.'),
            ('All of the following are named as parties with a claim EXCEPT:',
             ('The photographer', 'The subject', 'Whoever is paying', 'The publisher’s lawyer'), 3,
             'Three parties are listed at the start and a lawyer is not among them.'),
            ('What is the author’s attitude to the current arrangement?',
             ('Strongly supportive', 'Neither endorsing nor condemning, but questioning its basis',
              'Strongly opposed', 'Indifferent'), 1,
             'Both options are given real costs, the easy verdict is rejected, and only the '
             'premise is questioned at the end.'),
            ('Which development would most support the author’s closing point?',
             ('A new privacy statute',
              'Evidence that the number of photographs taken has risen by orders of magnitude',
              'A ruling favouring photographers',
              'A fall in camera prices'), 1,
             'The closing point is that the rules were built for difficulty and expense, so '
             'evidence that both have collapsed is exactly what bears on it.'),
        ],
    ),

    l1=dict(
        sub='How an edit makes meaning',
        caption='Two students in an editing suite',
        skill=('Hearing a demonstration described in speech',
               ['When somebody demonstrates something, the items test what the '
                'demonstration showed, not what was said about it.',
                'Listen for the two versions: first I will show you this, now watch the '
                'same shot with.',
                'The difference between the two versions is the finding.']),
        warm=[
            ('Man: Can I see that again with the other shot?',
             ('Watch the face — it has not changed at all.', 'Yes, it is the same shot.',
              'About four seconds.', 'It was filmed last week.'), 0,
             'A request to repeat, answered with the instruction that makes the point of the '
             'repetition.'),
            ('Woman: Did you reshoot anything?',
             ('Nothing. Only the order changed.', 'Yes, twice.',
              'About two hours.', 'It is a short film.'), 0,
             'A yes/no about production, answered with the fact that the point depends on.'),
            ('Man: Is this a famous experiment?',
             ('It is about a century old now.', 'Yes, it is good.',
              'About five shots.', 'In an editing suite.'), 0,
             'A yes/no about status, answered with the age, which is more informative than '
             'agreement.'),
        ],
        script=[
            ('Woman', 'Right, watch this. Face, then soup.'),
            ('Man', 'He looks hungry.'),
            ('Woman', 'Now the same face, then a coffin.'),
            ('Man', 'He looks... sad. Grieving.'),
            ('Woman', 'Did you reshoot anything?'),
            ('Man', 'You said it is the same shot.'),
            ('Woman', 'Identical. Same frames, same length. The only thing I changed is what '
                      'comes after it.'),
            ('Man', 'That is genuinely unsettling. I was reading his face.'),
            ('Woman', 'You were reading your own inference and attributing it to his face. '
                      'That is the whole finding and it is about a century old now.'),
            ('Man', 'So an actor does not have to do very much.'),
            ('Woman', 'That is one conclusion people draw and I think it is the wrong one. '
                      'The actor still has to give you a face that will carry both readings. '
                      'A face doing something specific will not work — if he is obviously '
                      'crying, the soup version fails.'),
            ('Man', 'So the neutral performance is the skilled one.'),
            ('Woman', 'Which is exactly backwards from how people talk about acting, and it '
                      'is why the best screen performances often look like nothing at all on '
                      'set.'),
        ],
        items=[
            ('What did the woman change between the two versions?',
             ('The lighting', 'Only what comes after the face',
              'The length of the shot', 'The actor’s expression'), 1,
             'She is explicit: identical frames and length, with only the following shot '
             'changed.'),
            ('What does the man conclude at first?',
             ('The actor was skilled', 'He was reading the face',
              'The edit was obvious', 'The shots were different'), 1,
             'He says he was reading his face, which she then corrects.'),
            ('How does the woman correct him?',
             ('The face did change', 'He was reading his own inference',
              'The soup was the key', 'He saw it too quickly'), 1,
             'You were reading your own inference and attributing it to his face is the '
             'correction and the finding.'),
            ('What conclusion does she reject?',
             ('That the edit matters', 'That the actor does not have to do much',
              'That the finding is old', 'That the face was neutral'), 1,
             'She calls it one conclusion people draw and the wrong one, then explains why.'),
            ('Why must the face be neutral?',
             ('To save time', 'So it can carry both readings',
              'Because of the lighting', 'To match the soup'), 1,
             'If he is obviously crying, the soup version fails, which sets the requirement '
             'on the performance.'),
            ('What does she say about the best screen performances?',
             ('They are the most expressive', 'They often look like nothing on set',
              'They require reshooting', 'They need no editing'), 1,
             'It follows from the neutral performance being the skilled one, which she calls '
             'backwards from how people talk about acting.'),
            ('What is the woman doing in the conversation?',
             ('Asking for help', 'Demonstrating and then refining the lesson',
              'Disagreeing with the theory', 'Preparing an essay'), 1,
             'She shows the effect, states the finding, and then rejects the wrong inference '
             'from it.'),
        ],
    ),

    l2=dict(
        sub='Documentary and truth',
        caption='A briefing to festival entrants',
        poster=['Documentary strand · entries close Friday',
                'Disclose reconstructions somewhere',
                'Keep original footage for two years'],
        skill=('Hearing where a rule stops',
               ['A briefing on a code will usually say what the code does not cover. That '
                'is where the questions come from.',
                'Listen for: the code is silent on, that is not covered, you are on your '
                'own there.',
                'An uncovered case is not a permitted one; it is an undecided one.']),
        warm=[
            ('Woman: Does compressing a sequence count as reconstruction?',
             ('Not if the order is preserved.', 'Yes, always.',
              'About ninety minutes.', 'It is in the code.'), 0,
             'A does-it-count question answered with the condition that decides it.'),
            ('Man: Where do I have to disclose?',
             ('Anywhere — screen, credits or notes.', 'Yes, you must.',
              'Before Friday.', 'To the panel.'), 0,
             'A where question wants the permitted locations, which the code leaves to the '
             'filmmaker.'),
            ('Woman: What if the code does not cover my case?',
             ('Then it is undecided, not allowed.', 'Then you may do as you like.',
              'About four cases a year.', 'The code covers everything.'), 0,
             'A what-if question about a gap, answered with the distinction that matters '
             'most.'),
        ],
        script=[
            ('Man', 'I want to spend the time on what the code does not say, because that is '
                    'where every dispute we have had has come from. The code is clear on two '
                    'things. Do not present staged material as actuality without disclosing '
                    'it. Keep your original footage and edit log for two years. Fine. Now the '
                    'edges. Compressing three hours of a meeting into four minutes is '
                    'explicitly not covered, provided the order of events is preserved. That '
                    'is a deliberate carve-out; without it nobody could make a documentary at '
                    'all. But notice how much weight the order of events is carrying. If you '
                    'move an exchange from the end of the meeting to the beginning because it '
                    'works better there, you have left the carve-out, and the code does not '
                    'tell you what happens next. It is silent. And I want to be precise about '
                    'what silence means, because people get this wrong every year: a case the '
                    'code does not cover is an undecided case, not a permitted one. Our panel '
                    'will decide it, and the panel has split on cases like this before. So if '
                    'you are near an edge, the sensible move is to disclose in the programme '
                    'notes. It is permitted, it costs you nothing, and it converts a question '
                    'you might lose into a question nobody asks.'),
        ],
        items=[
            ('What is the code clear about?',
             ('Compression and pacing', 'Disclosing staged material and retaining footage',
              'Programme notes', 'Panel procedure'), 1,
             'He names those two as settled before moving to the edges where disputes '
             'arise.'),
            ('What is the carve-out for compression conditional on?',
             ('The running time', 'The order of events being preserved',
              'Panel approval', 'Disclosure in the credits'), 1,
             'He then points out how much weight that condition is carrying.'),
            ('What happens if an exchange is moved for effect?',
             ('It is permitted', 'The case leaves the carve-out and the code is silent',
              'It must be disclosed on screen', 'The entry is refused'), 1,
             'He uses exactly that example to show where the carve-out ends.'),
            ('What does the speaker say silence in the code means?',
             ('The practice is allowed', 'The case is undecided',
              'The code will be amended', 'The panel cannot rule'), 1,
             'He flags that people get this wrong every year and draws the distinction '
             'explicitly.'),
            ('Why does he recommend the programme notes?',
             ('The code requires it', 'It is permitted, free, and removes the question',
              'The panel prefers it', 'It is the only option'), 1,
             'Those three reasons are given together, and none of them is compulsion.'),
            ('Why does the speaker focus on what the code does not say?',
             ('The code is badly written', 'Every dispute has come from there',
              'There is little else to cover', 'The panel asked him to'), 1,
             'That is his opening justification for how he is spending the briefing.'),
        ],
    ),

    l3=dict(
        sub='Who owns an image',
        caption='A lecture on photographs and the people in them',
        board=['Three claims: taker, subject, payer',
               'Copyright serves the first',
               'Privacy law arrives sideways',
               'Designed for scarce, expensive images'],
        skill=('Following a talk that criticises a framing rather than an answer',
               ['The strongest academic move is to show that the question was badly put.',
                'Listen for: the real problem is that we are asking; both answers inherit '
                'the same assumption.',
                'The item about the speaker’s own view will be about the framing, not the '
                'verdict.']),
        warm=[
            ('Man: Who owns a photograph of me?',
             ('In most places, the person who took it.', 'You do, obviously.',
              'About fifty years.', 'It depends on the camera.'), 0,
             'A who-owns question answered with the general rule and a hedge about '
             'jurisdiction.'),
            ('Woman: Why does the subject have no say?',
             ('Because the law treats it as an authored work.', 'Because nobody asked.',
              'About three parties.', 'Yes, that is unfair.'), 0,
             'A why question wants the reason in the law rather than a judgement about it.'),
            ('Man: Has anything changed recently?',
             ('Taking and publishing both became almost free.', 'Yes, the law changed.',
              'About twenty years.', 'Cameras are better.'), 0,
             'A has-anything-changed question answered with the change the lecture turns '
             'on.'),
        ],
        script=[
            ('Woman', 'A photograph of a person has at least three parties with a claim on '
                      'it: whoever pressed the button, whoever is in the frame, and whoever '
                      'paid for the commission. Copyright law, in most places, hands the whole '
                      'thing to the first of those and gives the second almost nothing. '
                      'Students usually assume this is an oversight that nobody has got round '
                      'to fixing. It is not. It follows directly from a decision to treat a '
                      'photograph as an authored work — something somebody made — rather than '
                      'as a record of a person. Once you make that decision, everything else '
                      'is consistent, and the subject drops out because the subject did not '
                      'make anything. Now, where the discomfort with that has produced legal '
                      'change, it has arrived sideways: through privacy, through data '
                      'protection, almost never through copyright itself. Which gives you a '
                      'patchwork where the same image is publishable here and actionable two '
                      'hundred miles away. I am not going to tell you which arrangement is '
                      'right, partly because I do not know and partly because I think the '
                      'question is badly framed. Both of the usual answers inherit the same '
                      'assumption: that a photograph is a scarce object, difficult to make '
                      'and expensive to distribute. That was true when these rules were '
                      'written and it has not been true for about twenty years. Until somebody '
                      'rewrites the question for a world of unlimited images, the two sides '
                      'will keep producing arguments that were both correct in 1960.'),
        ],
        items=[
            ('How many parties does the speaker say have a claim?',
             ('Two', 'Three', 'Four', 'It varies'), 1,
             'The taker, the subject and whoever paid are named at the start.'),
            ('Why does the subject get almost nothing?',
             ('Nobody has fixed it', 'The law treats a photograph as an authored work',
              'Subjects rarely complain', 'Privacy law covers it'), 1,
             'She says it follows directly from that decision rather than from neglect.'),
            ('What does she say students usually assume?',
             ('That the law is correct', 'That it is an unfixed oversight',
              'That subjects are paid', 'That copyright is recent'), 1,
             'She names the assumption and then rejects it with the reason the rule is '
             'consistent.'),
            ('How has legal change arrived?',
             ('Through copyright reform', 'Sideways, through privacy and data protection',
              'Through the courts only', 'It has not'), 1,
             'Almost never through copyright itself, which is why the result is a '
             'patchwork.'),
            ('Why does she decline to say which arrangement is right?',
             ('She has no view', 'She does not know and thinks the question is badly framed',
              'It depends on the country', 'The law is about to change'), 1,
             'She gives both reasons together and the second is the substantive one.'),
            ('What assumption do both usual answers share?',
             ('That photographs are accurate', 'That a photograph is a scarce, costly object',
              'That subjects object', 'That photographers are professionals'), 1,
             'That was true when the rules were written and has not been for about twenty '
             'years.'),
            ('What does she mean by "arguments that were both correct in 1960"?',
             ('The arguments are outdated in their premises',
              'The arguments are historically important',
              'Both sides have won before',
              'The law has not changed since 1960'), 0,
             'The point is that each side reasons well from a condition that no longer '
             'obtains.'),
        ],
    ),

    sp=[
        dict(
            sub='How an edit makes meaning',
            focus='describing a sequence in the present tense',
            skill=('Narrating what a viewer sees',
                   ['Film description uses the present: we see, the camera cuts, the face '
                    'holds.',
                    'Keep the tense consistent. Switching to the past makes it a story '
                    'about filming rather than about watching.',
                    'Stress the verb of perception: we SEE hunger — because the point is '
                    'what the viewer does.']),
            repeat=[
                'We see a face.',
                'The camera cuts to a bowl of soup.',
                'The audience reads hunger into the face.',
                'The same face followed by a coffin reads as grief.',
                'Nothing in the performance has changed between the two versions.',
                'What changes is the shot that follows, and the meaning is made by the viewer.',
                'The actor still has to supply a face neutral enough to carry both readings, which is a harder thing to do than it looks.',
            ],
            theme='watching, noticing and being manipulated',
            qs=[
                'Thanks for joining me. To start, what was the last film or series you '
                'watched, and did anything about how it was made stand out?',
                'Once you know how an effect is produced, does it stop working on you? What '
                'does that suggest?',
                'Now your opinion. Should film be taught in schools the way literature is? '
                'Why or why not?',
                'A final question. Is a technique that works on an audience who do not notice '
                'it manipulation, or simply craft?',
            ],
            model=[(2, 'Mostly it keeps working, which is the interesting part. I can '
                       'identify the music cue that is telling me to feel something and feel '
                       'it anyway.'),
                   (4, 'Craft, as long as the audience has agreed to be moved. We buy a '
                       'ticket precisely so that somebody will do this to us. It becomes '
                       'manipulation when the form promises that it is not doing it.')],
            selfcheck=['I kept the present tense throughout.',
                       'I stressed the verb of perception.',
                       'I described the sequence before interpreting it.'],
        ),
        dict(
            sub='Documentary and truth',
            focus='concessive clauses said in one breath',
            skill=('Conceding in the middle of a sentence',
                   ['While the technique is standard, the promise is still implied — the '
                    'whole thing is one sentence and needs one breath.',
                    'The pause goes at the comma, not inside either clause.',
                    'Drop your pitch slightly on the concession and raise it on the main '
                    'clause. That is how a listener knows which is which.']),
            repeat=[
                'Documentary implies a promise.',
                'Editing puts pressure on it.',
                'While nothing is staged, the sequence is still arranged.',
                'Two interviews recorded months apart can be cut into a conversation.',
                'Although the technique is standard, the audience has not agreed to it.',
                'Prose can mark its own status in mid-sentence, whereas an image cannot.',
                'A filmmaker who reconstructs a conversation nobody recorded is doing what a historian does in prose, albeit without the footnote that makes it visible.',
            ],
            theme='truth, convention and what audiences are owed',
            qs=[
                'Thank you for your time. First, do you watch documentaries? Do you trust '
                'what they show you?',
                'Reconstructions are common and rarely labelled. Does labelling them spoil the '
                'film, or is that a weak objection?',
                'Now an opinion question. Does a documentary owe its audience more than a '
                'drama does? Why or why not?',
                'One last question. If every documentary disclosed every technique, would '
                'audiences read the disclosures? Does that matter?',
            ],
            model=[(2, 'It is a weak objection, though not an empty one. A caption does break '
                       'the spell. But a form that depends on the audience not knowing how it '
                       'works has a problem that a caption did not create.'),
                   (3, 'Yes, because it has made a claim a drama has not. The claim is '
                       'implicit, but an implicit claim is still a claim, and the audience '
                       'has relied on it.')],
            selfcheck=['I said the concession and the main clause in one breath.',
                       'I paused at the comma, not inside a clause.',
                       'I used while, whereas or albeit correctly.'],
        ),
        dict(
            sub='Who owns an image',
            focus='summarising a position you do not hold',
            skill=('Representing both sides before judging',
                   ['At B2 you are often asked about a contested question. Give both '
                    'positions before your own.',
                    'Each should be given its best reason, in one sentence.',
                    'Then say what you think and why, marked as your view.']),
            repeat=[
                'Three parties have a claim.',
                'Copyright serves the photographer.',
                'The subject usually has no say at all.',
                'Giving subjects a veto would end street photography as a form.',
                'Giving photographers an unqualified right makes somebody’s worst moment a saleable asset.',
                'Where the law has intervened it has done so through privacy rather than copyright.',
                'Both of the usual answers assume that a photograph is scarce and expensive, and that has not been true for about twenty years.',
            ],
            theme='images, consent and the people in the frame',
            qs=[
                'Thanks for taking part. To begin, how do you feel about being photographed '
                'by a stranger in public?',
                'Street photography has produced much of our record of ordinary life. Does '
                'that justify taking pictures of people who have not agreed? Why?',
                'Now your opinion. Should somebody be able to demand that a photograph of '
                'them be taken down? Always, sometimes, or never?',
                'And finally. Has the number of cameras in the world changed what the right '
                'answer is? Why or why not?',
            ],
            model=[(2, 'It justifies some of it. The record exists because nobody had to ask, '
                       'and I would not want to lose it. That is a reason, not a permission '
                       'slip for every case.'),
                   (4, 'I think it has. A rule written when a photograph was rare and '
                       'expensive is answering a different question from one written for a '
                       'world where everyone is photographed constantly.')],
            selfcheck=['I gave both positions their best reason.',
                       'I marked my own view as mine.',
                       'I did not pretend the question was easy.'],
        ),
    ],

    w1=dict(
        sub='Questions about images',
        skill=('Build a Sentence with a concessive clause',
               ['The two non-question items in this unit build concessive clauses with '
                'while, whereas or although.',
                'The concessive clause can go first or second; the tiles will tell you '
                'which by where the comma falls.',
                'Albeit is followed by a phrase, never a full clause with its own subject '
                'and verb.']),
        guided=[
            ('The two interviews were recorded eight months apart.',
             ['know', 'do', 'you', 'whether', 'that', 'was', 'anywhere', 'disclosed', 'actually'],
             'Do you know whether that was actually disclosed anywhere?'),
            ('The code says nothing about moving an exchange.',
             ['us', 'told', 'nobody', 'what', 'the panel', 'in', 'does', 'that case', 'actually'],
             'Nobody told us what the panel actually does in that case.'),
            ('My tutor asked about the Kuleshov sequence.',
             ['she', 'whether', 'to know', 'wanted', 'I', 'had', 'it', 'myself', 'tried'],
             'She wanted to know whether I had tried it myself.'),
        ],
        exam=[
            ('The subject of a photograph usually has no say.',
             ['do', 'whether', 'know', 'you', 'that', 'is', 'everywhere', 'true', 'actually'],
             'Do you know whether that is actually true everywhere?'),
            ('The panel has split on similar cases before.',
             ['to know', 'nobody', 'seems', 'how', 'it', 'the last one', 'decided', 'actually', 'in the end'],
             'Nobody seems to know how it actually decided the last one in the end.'),
            ('Nothing in the performance changed between the versions.',
             ['explain', 'can', 'anybody', 'why', 'the face', 'different', 'looks', 'to me', 'then'],
             'Can anybody explain to me why the face looks different then?'),
            ('Disclosure is permitted in the programme notes.',
             ['know', 'does', 'anybody', 'whether', 'anybody', 'the notes', 'reads', 'actually', 'at all'],
             'Does anybody know whether anybody actually reads the notes at all?'),
            ('The rules were written for a different world.',
             ['told', 'he', 'us', 'when', 'they', 'had', 'been', 'drafted', 'originally'],
             'He told us when they had originally been drafted.'),
            ('Nothing was staged in the film.',
             ['while', 'nothing', 'was', 'staged', 'the sequence', 'was', 'still', 'carefully', 'arranged'],
             'While nothing was staged, the sequence was still carefully arranged.'),
            ('Prose can mark its own status in mid-sentence.',
             ['whereas', 'prose', 'can', 'do that', 'an image', 'has', 'no', 'equivalent', 'device'],
             'Prose can do that, whereas an image has no equivalent device.'),
        ],
    ),

    w2=dict(
        sub='Documentary and truth',
        to='entries@festival.org',
        date='10/07/2027',
        subject='Disclosure — my entry, and a suggestion about the code',
        scenario=[
            'The festival office advised you to disclose your cut-between-interviews sequence '
            'in the programme notes, while saying the code does not clearly require it. You '
            'have decided to disclose on screen instead. You also think the code’s gap should '
            'be fixed, and you have a specific suggestion.',
            'Write an email to the festival office.',
        ],
        bullets=['Say what you have decided and why you went further than advised.',
                 'Identify the gap in the code precisely.',
                 'Propose specific wording and acknowledge its cost.'],
        skill=('Proposing a rule change',
               ['A proposal that names only the problem gets filed. One that supplies '
                'wording gets discussed.',
                'Acknowledge what your proposal would cost somebody. A proposal with no '
                'costs is one you have not thought through.',
                'Keep it to one change. A redraft of the whole code will not be read.']),
        model=[
            'Dear Festival Office,',
            '',
            'Thank you for the advice, which I have taken and then gone slightly beyond. The '
            'sequence is now captioned on screen — "interviews recorded eight months apart" — '
            'rather than disclosed only in the programme notes. It cost me four seconds and, '
            'to my surprise, it makes the sequence stronger: the audience now watches the cut '
            'rather than being caught by it.',
            '',
            'On the code itself, I think the gap is narrower than it looks and worth closing. '
            'The compression carve-out turns entirely on "where the order of events is '
            'preserved". That phrase does the work of a whole clause, and it is silent about '
            'the case your panel keeps splitting on, which is not compression at all but '
            'juxtaposition: two true things placed together so that a relationship the viewer '
            'infers was never there.',
            '',
            'Would something like this work? "Where separately recorded material is edited so '
            'as to imply an exchange or a sequence that did not occur, this shall be '
            'disclosed." It is one sentence and it uses the code’s existing vocabulary.',
            '',
            'It would have a cost. It catches some entirely innocent editing, and a few '
            'filmmakers would have to caption things they currently do not think twice about. '
            'I am not sure that is a bad outcome, but it is a real one and the panel should '
            'weigh it rather than discover it.',
            '',
            'With thanks,',
            'Priscilla Oyelaran',
        ],
        notes=['It reports what was decided and why, including a result the writer did not '
               'expect, which is more persuasive than agreement.',
               'The gap is located in one phrase, quoted, rather than described in general '
               'terms.',
               'Draft wording is supplied in the code’s own vocabulary, so adopting it is a '
               'small step.',
               'The cost of the proposal is volunteered, which is what distinguishes a '
               'proposal from a demand.'],
        bandpair=dict(
            mid=[
                'Dear Festival Office,',
                'Thank you for your advice about my entry. I decided to disclose the sequence '
                'on screen rather than just in the programme notes, because I thought it was '
                'the right thing to do and I did not want anyone to feel misled.',
                'I also wanted to say that I think there is a problem with the code. It does '
                'not really say anything about cases like mine, where two separate interviews '
                'are edited together. This is clearly something that should be covered, '
                'especially as you said the panel has split on it before.',
                'I think the code should be updated to make this clearer so that filmmakers '
                'know where they stand. It would be better for everyone if the rules were '
                'more specific about this kind of editing. Thank you for considering my '
                'suggestion.',
                'Best wishes, Priscilla Oyelaran',
            ],
            top=[
                'Dear Festival Office,',
                'Thank you for the advice, which I have taken and then gone slightly beyond. '
                'The sequence is now captioned on screen rather than disclosed only in the '
                'notes. It cost four seconds and makes the sequence stronger: the audience '
                'watches the cut rather than being caught by it.',
                'On the code, the gap is narrower than it looks. The carve-out turns entirely '
                'on "where the order of events is preserved". That phrase is silent about the '
                'case your panel keeps splitting on, which is not compression but '
                'juxtaposition.',
                'Would this work? "Where separately recorded material is edited so as to imply '
                'an exchange that did not occur, this shall be disclosed."',
                'It has a cost: it catches innocent editing, and some filmmakers would have to '
                'caption things they do not think twice about. The panel should weigh that '
                'rather than discover it. Priscilla Oyelaran',
            ],
            diffs=[
                'It reports an unexpected result — the caption improved the film — which is '
                'far more persuasive than stating that disclosure was the right thing to do.',
                'It quotes the exact phrase carrying the weight, so the reader can see the gap '
                'instead of being told one exists.',
                'It names the distinction the code lacks: compression against juxtaposition.',
                'It supplies draft wording, turning a complaint into something a committee can '
                'put on an agenda.',
                'It volunteers the cost of its own proposal, which is what separates a '
                'proposal from a demand and makes the writer credible.',
            ],
        ),
    ),

    w3=dict(
        sub='Who owns an image',
        prof='Dr Ferreira',
        question='In most countries copyright in a photograph belongs to the photographer, '
                 'and the person pictured has no claim over how it is used. Some argue this '
                 'is indefensible now that anyone can be photographed and the image published '
                 'worldwide within seconds. Others argue that giving subjects a veto would '
                 'destroy photojournalism and street photography, and that the record of '
                 'twentieth-century life we value most could not have been made under such a '
                 'rule. Should the person in a photograph have rights over its use? Why?',
        posts=[('Nadia', 'w',
                'Yes. The argument from the historical record is an argument for what was '
                'allowed in the past, not for what should be allowed now. A rule designed '
                'when publishing meant a printing press cannot simply be carried over to a '
                'world where any image reaches everyone instantly.'),
               ('Teodor', 'm',
                'Nadia’s rule would make the photographer liable to somebody who objects '
                'years later, which in practice means nobody photographs a stranger again. '
                'The effect would not be balance; it would be the end of a form. Rights that '
                'can be exercised retrospectively are not rights, they are vetoes.')],
        skill=('Separating a right from its remedy',
               ['Many disputes about rights are really disputes about enforcement. '
                'Distinguishing them often dissolves the problem.',
                'A right with a different remedy can have entirely different effects.',
                'Show the mechanism: here is what changes if the remedy changes.']),
        starters=['Teodor’s objection is about the remedy, not the right.',
                  'Nadia is right that…, though her conclusion needs…',
                  'The distinction that does the work here is between… and…',
                  'With that separated, what follows is…'],
        model=[
            'Teodor’s objection is about the remedy, not the right, and separating the two '
            'dissolves most of the disagreement. What would end street photography is not a '
            'subject having an interest in their image; it is a subject being able to compel '
            'removal years afterwards, which makes every photograph a contingent liability. '
            'Those are different arrangements and only the second has the effect he describes.',
            'Nadia is surely right that an argument from what the past permitted is not an '
            'argument for the present, and her historical point is stronger than she makes it. '
            'The record we value was made under a rule that also produced a great many images '
            'the people in them would have stopped, and we do not have those to weigh against '
            'it. The surviving record is the evidence of a selection we cannot see.',
            'What follows is that the question is which remedy, not whether there is a right. '
            'A right to be informed, exercisable at the point of publication, costs a '
            'photographer almost nothing and gives a subject the one thing they mostly want, '
            'which is not suppression but notice. A right to compel removal is the veto '
            'Teodor describes, and in many cases it would be used against exactly the images '
            'that matter most.',
            'So I would give the subject a right and deliberately give it a weak remedy. That '
            'will satisfy neither post entirely, which is a reasonable sign that it is '
            'located where the actual trade-off is.',
        ],
        model_words=245,
    ),

    gram=dict(
        title='Concession: while, whereas, albeit',
        headers=['Word', 'How it is used'],
        rows=[
            ('although / though', 'grants a point: Although nothing was staged, the sequence was arranged.'),
            ('while', 'grants a point, or marks simultaneous contrast: While the technique is standard, the promise remains.'),
            ('whereas', 'marks a straight contrast between two facts: Prose can signal its status, whereas an image cannot.'),
            ('albeit', 'followed by a phrase, not a clause: effective, albeit expensive'),
            ('even if / even though', 'if = hypothetical; though = actual'),
            ('for all that / notwithstanding', 'formal, placed before a noun phrase'),
            ('nevertheless / even so', 'sentence adverbs, after a full stop or semicolon'),
        ],
        notes=[
            'Whereas contrasts two things that are both true. Although concedes one thing '
            'before asserting another. They are not interchangeable, and the misuse is '
            'conspicuous.',
            'Albeit is followed by an adjective, an adverb or a noun phrase — never by a '
            'subject and a verb. Albeit it was expensive is wrong; albeit expensive is right.',
            'Even if introduces something that may not be true; even though introduces '
            'something that is. Getting this wrong changes the meaning of the sentence.',
        ],
        watch='Do not pair although with but. "Although it was late, but we continued" is a '
              'single concession marked twice, and it is one of the most common errors at '
              'B2. Use one or the other.',
        ex=[
            ('Choose while, whereas or albeit.',
             ['______ nothing was staged, the sequence was arranged.',
              'Prose can mark its status, ______ an image cannot.',
              'The caption was effective, ______ brief.',
              '______ the technique is standard, the audience has not agreed to it.',
              'Copyright serves the photographer, ______ privacy law serves the subject.',
              'The change was useful, ______ expensive to implement.'],
             ['While', 'whereas', 'albeit', 'While', 'whereas', 'albeit']),
            ('Correct the doubled concession.',
             ['Although it was late, but we continued.',
              'Even though the code is silent, however the panel still decides.',
              'While nothing was staged, but the sequence was arranged.',
              'Despite the cost, nevertheless they went ahead.'],
             ['Although it was late, we continued.',
              'Even though the code is silent, the panel still decides.',
              'While nothing was staged, the sequence was arranged.',
              'Despite the cost, they went ahead.']),
            ('Rewrite with the concessive clause second.',
             ['Although the record is valuable, it was made without consent.',
              'While the caption costs four seconds, it strengthens the sequence.',
              'Whereas prose has footnotes, film has none.',
              'Even though the panel split, the entry was accepted.'],
             ['The record was made without consent, although it is valuable.',
              'The caption strengthens the sequence, while costing four seconds.',
              'Film has no footnotes, whereas prose does.',
              'The entry was accepted, even though the panel split.']),
        ],
        bas='Two of the ten Build a Sentence items are not questions, and at B2 they are often '
            'concessive clauses. A tile reading while, whereas or albeit begins its clause, '
            'and the comma in the prompt tells you which half comes first.',
    ),

    fault=dict(
        text='Although the technique is standard, but the audience has not agreed to it. '
             'Prose can signal its status, while an image cannot, which is a straight '
             'contrast. The caption was effective, albeit it was brief. Nobody knows whether '
             'did the panel disclose its reasoning. Having captioned the sequence, the '
             'audience understood the cut.',
        faults=[
            ('Although the technique is standard, but the audience',
             'Although the technique is standard, the audience',
             'Although already concedes; adding but marks the same concession twice.'),
            ('while an image cannot, which is a straight contrast',
             'whereas an image cannot, which is a straight contrast',
             'A straight contrast between two facts takes whereas rather than while.'),
            ('albeit it was brief', 'albeit brief',
             'Albeit is followed by a phrase, never by a subject and a verb.'),
            ('whether did the panel disclose', 'whether the panel disclosed',
             'An embedded question keeps statement order and takes no auxiliary.'),
            ('Having captioned the sequence, the audience',
             'Having captioned the sequence, the director found that the audience',
             'The audience did not caption anything; the participle needs the right subject.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('meaning made by the order of shots', 'montage'),
            ('what is included in the shot and what is left out', 'framing'),
            ('the viewer, considered as part of the system', 'spectator'),
            ('keeping the fictional world consistent across cuts', 'continuity'),
            ('to place two things side by side', 'juxtapose'),
            ('who is held to have made the work', 'authorship'),
            ('the convention of appearing not to be a convention', 'realism'),
            ('how fast information is given to the viewer', 'pacing'),
            ('what a scene is about underneath what it shows', 'subtext'),
            ('drawn from existing recorded material', 'archival'),
            ('a staged version of something that happened', 'reenactment'),
            ('recorded material, before it is edited', 'footage'),
        ],
        gram=[
            ('______ nothing was staged, the sequence was arranged.', 'While'),
            ('Prose can mark its status, ______ an image cannot.', 'whereas'),
            ('The caption was effective, ______ brief.', 'albeit'),
            ('______ the code is silent, the panel still decides.', 'Although'),
            ('The entry was accepted, even ______ the panel split.', 'though'),
            ('______ the cost, they went ahead.', 'Despite'),
            ('The change was useful, ______ expensive.', 'albeit'),
            ('Copyright serves the taker, ______ privacy serves the subject.', 'whereas'),
        ],
        mini=[
            ('The Kuleshov effect shows that',
             ('actors need training', 'meaning is produced by what a shot is placed next to',
              'close-ups are best', 'editing should be invisible'), 1,
             'The same face reads as hunger or grief depending only on the following shot.'),
            ('A case the festival code does not cover is',
             ('permitted', 'undecided', 'automatically refused', 'referred to the courts'), 1,
             'The briefing is explicit that silence means the panel will decide, not that '
             'the practice is allowed.'),
            ('Copyright in a photograph normally belongs to',
             ('the subject', 'the photographer', 'the publisher', 'nobody'), 1,
             'It follows from treating the photograph as an authored work rather than as a '
             'record of a person.'),
            ('Which sentence is correct?',
             ('Although it was late, but we continued.', 'Although it was late, we continued.',
              'Although it was late, however we continued.',
              'Although it was late, nevertheless but we continued.'), 1,
             'One concession needs one marker; although and but together mark it twice.'),
            ('"Is far from obvious" tells you the writer thinks the claim',
             ('is clearly true', 'needs arguing for', 'is false', 'is widely held'), 1,
             'It withholds assent without rejecting, which is why it introduces a passage '
             'weighing both sides.'),
            ('Albeit is followed by',
             ('a full clause', 'a phrase', 'a question', 'a semicolon'), 1,
             'Albeit brief is correct; albeit it was brief adds a subject and verb the word '
             'cannot take.'),
        ],
    ),

    tip='Volume 3 ends here. The three things to carry into Volume 4 are the embedded '
        'question, the passive reporting frame and the hedging scale — Units 21, 26 and 29. '
        'Everything in the next ten units assumes you can produce all three without thinking '
        'about them.',
)


# ---------------------------------------------------------------------------
# The two academic cycles, added by the Volumes 3-6 work.
#
# Unit 30 gains its two academic cycles and closes Volume 3. Cycle 4
# corrects the assumption almost every reader brings: copyright in a
# photograph belongs to the photographer, the subject has no property
# interest at all, and the separate personal claim is narrower in three
# ways and varies between jurisdictions. Cycle 5 argues that the law is
# answering a question nobody is asking, through a case in which the
# signature is valid, the use is lawful, nobody behaved badly, and a
# person has still been placed in a situation that did not exist to be
# consented to.
# ---------------------------------------------------------------------------
UNIT['fieldwords'] = [('copyright', 'the legal right to control copying of a work'),
 ('jurisdictions', 'the different legal systems a rule may differ between'),
 ('likeness', 'a recognisable image of a particular person'),
 ('reproduction', 'the making of a further copy'),
 ('attribution', 'the naming of who made a work'),
 ('photographer', 'the person who takes the photograph'),
 ('dissemination', 'the spreading of something to many people'),
 ('perpetuity', 'for ever, with no end date'),
 ('retrospective', 'applying to things that happened earlier'),
 ('identifiable', 'able to be recognised as a particular person'),
 ('commercial', 'done for profit rather than for record'),
 ('consented', 'agreed to in advance')]
UNIT['r4'] = {'sub': 'Who owns an image',
 'title': 'The Photograph Belongs to the Person Holding the Camera',
 'words': 329,
 'skill': ('Reading a passage about a rule that surprises most readers',
           ['The rule stated here runs against what most people assume, so note the '
            'assumption as well as the rule.',
            'Two separate rights are distinguished and they belong to different people. Keep '
            'them apart.',
            'A question about jurisdictions wants what varies, not what is constant.']),
 'paras': ['Copyright in a photograph belongs to the photographer, and in most systems it '
           'belongs to nobody else at all. The person in the image has no property interest '
           'in it, cannot prevent its reproduction, and cannot require attribution or '
           'payment when it is used. That arrangement surprises almost everybody who hears '
           'it for the first time, and the surprise is itself worth noticing, because an '
           'assumption this widely held produces a great many people relying on the rule '
           'wrongly. A student who treats consent as a condition of publication has the '
           'position exactly the wrong way round.',
           'A second and quite separate right does sometimes protect the subject, and it is '
           'not a property right. Depending on the jurisdiction, an identifiable person may '
           'have a claim where an image is put to commercial use without agreement, or where '
           'its publication is an intrusion on private life. Those claims are narrower than '
           'ownership in three ways that matter, since they usually carry a requirement of '
           'commercial use and a requirement of identification. They also show far more '
           'variation between jurisdictions than copyright does, so the same photograph can '
           'be lawful in one country and actionable in another.',
           'The consequence for anybody working with images is practical rather than '
           'theoretical, and it governs the administration of every archive. A release '
           'signed by a subject is not a transfer of ownership, because the subject never '
           'had any; it is a promise not to bring the second kind of claim. An archive that '
           'holds a photograph therefore holds the copyright and does not hold the subject’s '
           'agreement, which is a gap no amount of care closes. Those two permissions come '
           'from different people, and often from different decades, because the '
           'photographer can be traced through a deposit record while the subject can be '
           'traced through nothing at all. That division of the problem, and not mere '
           'caution, is why the permissions page of a photographic book runs to several '
           'pages of small print.'],
 'guided': [('Who holds copyright in a photograph?',
             ('The person in the image', 'The photographer', 'Both equally', 'The publisher'),
             1,
             'Copyright belongs to the photographer, and in most systems to nobody else at '
             'all.'),
            ('What can the person in the image NOT do?',
             ('Appear in the photograph',
              'Prevent its reproduction',
              'Take a photograph themselves',
              'Sign a release'),
             1,
             'The subject has no property interest, so cannot prevent the reproduction of '
             'the image.'),
            ('Why does the passage say the surprise is worth noticing?',
             ('It makes the rule unfair',
              'An assumption this widely held produces people relying on it wrongly',
              'It shows the law is recent',
              'It explains why archives exist'),
             1,
             'A widely held assumption produces a great many people relying on the rule '
             'wrongly.')],
 'exam': [('What is the second right described in the passage?',
           ('A property right in the image',
            'A claim where an image is used commercially or is an intrusion on private life',
            'A right to attribution',
            'A right to payment'),
           1,
           'Those are the two circumstances given, and the passage is explicit that it is '
           'not a property right.'),
          ('Which is NOT one of the three ways the second right is narrower?',
           ('It usually requires commercial use',
            'It usually requires the person to be identifiable',
            'It varies between jurisdictions',
            'It lasts for only five years'),
           3,
           'The passage names commercial use, identification and variation between '
           'jurisdictions; no term of years is mentioned.'),
          ('What does a release signed by a subject actually do?',
           ('Transfers ownership of the image',
            'Promises not to bring the second kind of claim',
            'Assigns copyright to the archive',
            'Requires attribution'),
           1,
           'The subject never had ownership to transfer, so the release is a promise about '
           'the second claim.'),
          ('Why must an archive obtain two permissions from two people?',
           ('The photographer must be paid twice',
            'It holds the copyright but not the subject’s agreement',
            'Jurisdictions require two signatures',
            'Photographers are hard to find'),
           1,
           'The archive holds copyright and does not hold the subject’s agreement, and those '
           'come from different people.'),
          ('The word actionable in paragraph 2 is closest in meaning to',
           ('worth publishing',
            'able to be sued over',
            'recently taken',
            'commercially valuable'),
           1,
           'Set against lawful in one country, it means giving rise to a legal claim in the '
           'other.')]}
UNIT['r5'] = {'sub': 'Who owns an image',
 'title': 'What Ownership Was Never Going to Settle',
 'words': 326,
 'skill': ('Reading an objection that a legal frame is the wrong frame',
           ['The writer accepts the law as described and argues it is answering a different '
            'question from the one people are asking.',
            'Note what the writer says a signature cannot do, because the whole argument '
            'turns on it.',
            'A question about the recommendation wants a practice, not a legal reform.']),
 'paras': ['The legal position is clear and it answers a question almost nobody is actually '
           'asking. People who object to a photograph of themselves are rarely making a '
           'claim about property, and the objection is not usually that somebody profited. '
           'It is that an image made in one context is now circulating in another, and the '
           'law of ownership has no vocabulary for that complaint at all. Ownership answers '
           'the question of who may make a reproduction and sell it, and the intrusion '
           'people complain of is not a transaction at all.',
           'Consider what a release can and cannot do. A person photographed at a '
           'demonstration in nineteen eighty-four consented to a photograph, in a world '
           'where dissemination meant a print run and a library. The same image is now '
           'searchable, matched to a name by software nobody had then, and durable in '
           'perpetuity. The signature is valid, the use is lawful, and the person has been '
           'placed in a situation they could not have consented to because it did not exist '
           'to be described. Consent given at one moment cannot cover a technology that '
           'arrives afterwards, and no drafting solves this, because the problem is not in '
           'the wording.',
           'The recommendation that follows is a practice rather than a legal reform, which '
           'is fortunate, because retrospective legislation here would be unworkable. '
           'Archives and publishers that treat a lawful right as the beginning of the '
           'question rather than the end of it do ask again before a retrospective reuse, do '
           'remove an image on a reasonable request even where no claim could be brought, '
           'and do record that they were asked. None of that is required of them. The '
           'expense is not the objection either, since a contact address and a record of '
           'requests cost an institution almost nothing. All of it is cheap, and the '
           'institutions that decline to do it are relying on a rule that was written before '
           'the only circumstance that now matters.'],
 'guided': [('What does the passage say the legal position answers?',
             ('The question people are asking',
              'A question almost nobody is asking',
              'No question at all',
              'A question about profit'),
             1,
             'It is clear and it answers a question almost nobody is actually asking.'),
            ('What is the objection usually about?',
             ('Profit',
              'An image made in one context circulating in another',
              'Attribution',
              'Copyright ownership'),
             1,
             'Not usually that somebody profited: that the image has moved from one context '
             'into another.'),
            ('What had changed by the time the old photograph circulated again?',
             ('The law of copyright',
              'Dissemination, searchability and durability',
              'The identity of the photographer',
              'The commercial value'),
             1,
             'Searchable, matched to a name by software nobody had then, and durable in '
             'perpetuity.')],
 'exam': [('What does the passage say about the signature on the release?',
           ('It was invalid',
            'It is valid, and the person was placed in a situation they could not have '
            'consented to',
            'It should be withdrawn',
            'It covered future technologies'),
           1,
           'The signature is valid and the use lawful, and the situation did not exist to be '
           'described when consent was given.'),
          ('Why does the passage say no drafting solves this?',
           ('Lawyers are careless',
            'The problem is not in the wording',
            'Releases are too short',
            'Jurisdictions differ'),
           1,
           'Consent at one moment cannot cover a later technology, and the problem is not in '
           'the wording.'),
          ('Why does the passage call it fortunate that the remedy is a practice?',
           ('Practices are cheaper to teach',
            'Retrospective legislation here would be unworkable',
            'Publishers prefer voluntary rules',
            'Archives are not regulated'),
           1,
           'Retrospective legislation here would be unworkable, which is given as the '
           'reason.'),
          ('Which is NOT one of the three practices the passage names?',
           ('Asking again before a retrospective reuse',
            'Removing an image on reasonable request',
            'Recording that they were asked',
            'Paying the subject a fee'),
           3,
           'The three are asking again, removing on request, and keeping a record; no '
           'payment is proposed.'),
          ('What does the passage say about institutions that decline?',
           ('They are acting unlawfully',
            'They are relying on a rule written before the circumstance that now matters',
            'They will be legislated against',
            'They cannot afford the practice'),
           1,
           'None of it is required and all of it is cheap, so the refusal rests on a rule '
           'that predates the situation.')]}
UNIT['l4'] = {'sub': 'Who owns an image',
 'caption': 'A lecture on two rights that belong to two people',
 'board': ['Copyright: the photographer',
           'Privacy or commercial claim: the subject',
           'A release is not a transfer',
           'Two permissions, two people'],
 'skill': ('A lecture that corrects a widespread assumption',
           ['The lecturer begins from what the class already believes and then contradicts '
            'it, so note the assumption first.',
            'Two rights, two owners. The whole hour depends on not merging them.',
            'A question about the permissions page wants the practical consequence.']),
 'warm': [('Woman: Who owns the copyright?',
           ('The photographer.',
            'The person in the picture.',
            'Yes, somebody owns it.',
            'Two rights.'),
           0,
           'Copyright belongs to whoever made the image, which is the correction the hour is '
           'built on.'),
          ('Woman: What does a release actually do?',
           ('It promises not to bring the second claim.',
            'It transfers ownership of the image.',
            'Yes, it does something.',
            'In two jurisdictions.'),
           0,
           'Since the subject never owned anything, a release cannot be a transfer.'),
          ('Woman: Why is a permissions page so long?',
           ('Two permissions come from two people.',
            'Copyright lasts a long time.',
            'Yes, it is long.',
            'For commercial use.'),
           0,
           'The practical consequence is that an archive must collect two different '
           'agreements from two different parties.')],
 'script': [('Man',
             'Let me start with what almost all of you believe, because it is wrong and it '
             'is wrong in a useful way. You believe that a photograph of you is in some '
             'sense yours. It is not. Copyright in a photograph belongs to the person who '
             'took it, and in most systems the subject has no property interest in the image '
             'whatever: no right to stop a reproduction, no right to be named, no right to a '
             'share of anything it earns. Now, there is a second right, and the mistake '
             'students make is merging it with the first. In many jurisdictions an '
             'identifiable person can object where an image is used commercially without '
             'agreement, or where publishing it intrudes on private life. That is a personal '
             'claim, it is not ownership, and it varies between countries far more than '
             'copyright does. Keep them apart and a lot of confusion disappears. Notice also '
             'which way the variation runs. Copyright is nearly uniform across the '
             'industrialised world, while the personal claim is a patchwork, so the question '
             'for a picture editor is not only what the law says but which law applies. Here '
             'is the practical consequence, and it explains something you have all seen. '
             'When a subject signs a release, they are not transferring the image, because '
             'they never had it. They are promising not to bring the second kind of claim. '
             'So an archive holding a photograph has the copyright and does not have the '
             'subject’s agreement, and the two must be collected from two different people, '
             'often decades apart. That is why the permissions page of a photographic book '
             'runs to four pages of small print.')],
 'items': [('What does the lecturer say most of the class believes?',
            ('That copyright is complicated',
             'That a photograph of them is in some sense theirs',
             'That releases are unnecessary',
             'That jurisdictions agree'),
            1,
            'He opens with the belief and says it is wrong in a useful way.'),
           ('What three things does he say the subject has no right to?',
            ('Payment, attribution and a copy',
             'Stopping a reproduction, being named, and a share of earnings',
             'Privacy, consent and removal',
             'Publication, sale and display'),
            1,
            'No right to stop a reproduction, to be named, or to a share of anything it '
            'earns.'),
           ('What mistake does he say students make?',
            ('Confusing two jurisdictions',
             'Merging the second right with the first',
             'Ignoring commercial use',
             'Assuming releases are invalid'),
            1,
            'The mistake is merging the personal claim with the property right.'),
           ('How does the second right differ between countries?',
            ('It does not vary at all',
             'It varies far more than copyright does',
             'It varies slightly less than copyright',
             'He does not say'),
            1,
            'It varies between countries far more than copyright does.'),
           ('Why does a permissions page run to four pages?',
            ('Copyright terms are long',
             'Two agreements must be collected from two people, often decades apart',
             'Jurisdictions require it',
             'Publishers are cautious'),
            1,
            'The archive has the copyright and not the agreement, so both have to be '
            'gathered separately.')]}
UNIT['l5'] = {'sub': 'Who owns an image',
 'caption': 'A short talk on consent and a technology that arrived later',
 'board': ['Consent in 1984: a print run',
           'Same image: searchable, for ever',
           'Signature valid, situation new',
           'Ask again. It is cheap.'],
 'skill': ('A talk that locates a problem outside the law',
           ['The speaker says a difficulty cannot be fixed by better wording, so identify '
            'where she puts it instead.',
            'Note the three practices she recommends, and that none of them is required.',
            'A question about her argument wants why legislation is not the answer.']),
 'warm': [('Man: Was the signature valid?',
           ('Yes, and the situation is new.',
            'No, it was invalid.',
            'Yes, it was.',
            'In 1984.'),
           0,
           'She is careful that nothing was done wrongly: the consent was good and the world '
           'changed.'),
          ('Man: How many practices does she recommend?',
           ('Three.', 'One.', 'Yes, she recommends some.', 'None at all.'),
           0,
           'Ask again, remove on request, and record the request are the three.'),
          ('Man: Why not legislate?',
           ('Retrospective legislation would be unworkable.',
            'Parliaments are too slow.',
            'Yes, legislation would help.',
            'Because archives object.'),
           0,
           'Her reason is specific: the fix would have to reach backwards, and that cannot '
           'be drafted.')],
 'script': [('Woman',
             'I want to describe a case where everybody behaved properly and the outcome is '
             'still wrong. A woman is photographed at a demonstration in nineteen '
             'eighty-four. She agrees. In nineteen eighty-four agreeing meant a print run of '
             'a few thousand and a copy in a library, and that is the thing she consented '
             'to, because it is the only thing that existed. The archive digitises in two '
             'thousand and ten, the image is searchable by two thousand and fifteen, '
             'software matches it to her name shortly afterwards, and it is now permanent '
             'and findable by anybody who types her name. The photographer did nothing '
             'wrong. The archive did nothing wrong. The signature is valid and the use is '
             'lawful. And she has been put in a position she could not have agreed to, '
             'because it did not exist to be described. Notice too that the objection has '
             'nothing to do with money. Nobody profited from the reuse, nobody published her '
             'for gain, and the complaint is just as strong. Notice that no amount of better '
             'drafting in nineteen eighty-four would have helped, so the problem is not in '
             'the wording and there is nothing to fix there. Legislation will not reach it '
             'either, because the fix would have to be retrospective and that is unworkable. '
             'What is left is practice. Ask again before a reuse. Take an image down on a '
             'reasonable request even when no claim could be brought. Write down that you '
             'were asked. None of that is required of anybody and all of it is nearly '
             'free.')],
 'items': [('What does the speaker say about everybody’s behaviour in the case?',
            ('Somebody acted unlawfully',
             'Everybody behaved properly and the outcome is still wrong',
             'The archive was careless',
             'The photographer broke an agreement'),
            1,
            'She builds the case so that nobody did anything wrong, which is what makes it '
            'interesting.'),
           ('What did consent mean in nineteen eighty-four, by her account?',
            ('Worldwide publication',
             'A print run of a few thousand and a library copy',
             'Permanent searchable availability',
             'Commercial use'),
            1,
            'That is the thing she consented to, because it was the only thing that '
            'existed.'),
           ('Why would better drafting not have helped?',
            ('Lawyers were less skilled then',
             'The situation did not exist to be described',
             'The archive would have refused',
             'Releases were not used'),
            1,
            'No amount of better drafting would have helped, because the problem is not in '
            'the wording.'),
           ('Why does she rule out legislation?',
            ('It would be unpopular',
             'The fix would have to be retrospective, which is unworkable',
             'Archives are exempt',
             'It would cost too much'),
            1,
            'The fix would have to reach backwards, and that is unworkable.'),
           ('What does she say about the three practices?',
            ('They are legally required',
             'None is required and all are nearly free',
             'They are expensive but necessary',
             'They apply only to commercial use'),
            1,
            'None of that is required of anybody and all of it is nearly free.')]}
UNIT['w4'] = {'sub': 'Who owns an image',
 'skill': ('Concession with while, whereas and albeit',
           ['While and whereas set two things against each other without rejecting either: '
            'copyright belongs to the photographer, whereas the claim belongs to the '
            'subject.',
            'Albeit introduces a short qualification, not a clause with its own subject: '
            'lawful, albeit narrow.',
            'While at the start of a sentence can mean although or at the same time, so '
            'place it where only one reading is available.']),
 'guided': [('You want to set the two rights against each other.',
             ['copyright',
              'belongs',
              'to',
              'the photographer',
              'whereas',
              'the',
              'personal',
              'claim',
              'belongs',
              'to',
              'the subject'],
             'Copyright belongs to the photographer, whereas the personal claim belongs to '
             'the subject.'),
            ('You want to concede that a use was lawful.',
             ['the reuse',
              'was',
              'lawful',
              'albeit',
              'in',
              'a',
              'context',
              'nobody',
              'could',
              'have',
              'described'],
             'The reuse was lawful, albeit in a context nobody could have described.'),
            ('You want to concede a right while limiting it.',
             ['while',
              'the claim',
              'exists',
              'in',
              'many',
              'jurisdictions',
              'it',
              'requires',
              'the use',
              'to be',
              'commercial'],
             'While the claim exists in many jurisdictions, it requires the use to be '
             'commercial.')],
 'exam': [('You want to contrast the two kinds of variation.',
           ['the personal',
            'claim',
            'varies',
            'between',
            'jurisdictions',
            'whereas',
            'copyright',
            'varies',
            'hardly',
            'at all'],
           'The personal claim varies between jurisdictions, whereas copyright varies hardly '
           'at all.'),
          ('You want to concede validity and deny sufficiency.',
           ['the signature',
            'is',
            'valid',
            'albeit',
            'given',
            'for',
            'a',
            'world',
            'that',
            'no longer',
            'exists'],
           'The signature is valid, albeit given for a world that no longer exists.'),
          ('You want to concede that nothing was required.',
           ['while',
            'none',
            'of',
            'these',
            'practices',
            'is',
            'required',
            'all',
            'of them',
            'are',
            'cheap'],
           'While none of these practices is required, all of them are cheap.'),
          ('You want to contrast a release with a transfer.',
           ['a release',
            'is',
            'a promise',
            'whereas',
            'a transfer',
            'would',
            'move',
            'something',
            'the subject',
            'never',
            'held'],
           'A release is a promise, whereas a transfer would move something the subject '
           'never held.'),
          ('You want to concede the clarity of the law.',
           ['the law',
            'is',
            'clear',
            'albeit',
            'about',
            'a question',
            'almost',
            'nobody',
            'is',
            'actually',
            'asking'],
           'The law is clear, albeit about a question almost nobody is actually asking.')]}
UNIT['w5'] = {'sub': 'Who owns an image',
 'prof': 'Dr Castellanos',
 'question': 'A photographic archive is putting a collection from the nineteen eighties. It '
             'can publish everything, which is lawful and makes the collection useful, or '
             'publish only images whose subjects it can trace and ask again, which would '
             'mean releasing perhaps a third of it. Which should it do?',
 'posts': [('Hana',
            'w',
            'Publish everything. The releases are valid, the use is lawful, and an archive '
            'that hides two thirds of a collection has destroyed the historical record to '
            'protect people who in most cases would not object.'),
           ('Omar',
            'm',
            'The talk showed exactly why valid and lawful is not the end of it. These people '
            'consented to a print run, not to being findable by name for ever, and treating '
            'a signature from nineteen eighty-four as covering that is using a document for '
            'something it never described.')],
 'skill': ('A question about a lawful act and a new consequence',
           ['Hana argues from the record and the validity of the consent; Omar from what the '
            'consent actually covered.',
            'Use the second passage, which accepts that everybody behaved properly and still '
            'calls the outcome wrong.',
            'A strong answer says what gets published and what gets done about the rest, in '
            'practical terms.']),
 'starters': ['Omar is right that…, although that holds only where…',
              'The distinction I would draw is between… and…',
              'It is doubtful whether…, and the passage suggests…',
              'What the archive should do is not… but…'],
 'model': ['Omar is right about what the signature covered and his conclusion does not '
           'follow, because the remedy he implies is to hide the images and the passage '
           'recommends something else. The practices it names are asking again, removing on '
           'request and recording the request, and none of the three requires an image to be '
           'kept back before anybody has objected. Hiding an image before any objection is '
           'not among them, and none of them implies it.',
           'Hana’s historical argument is the stronger one and she makes too much of the '
           'alternative. Nothing here requires two thirds of a collection to be hidden; it '
           'requires a route by which a person who finds themselves searchable can get the '
           'image taken down without hiring anybody. The distinction worth drawing is '
           'between keeping back an image and keeping back any route by which a subject '
           'could object, and it is only the second that the passage treats as a failure.',
           'So the archive should publish the collection and build that route before it '
           'publishes, with a named contact, a stated undertaking to remove on reasonable '
           'request, and a log of what was asked and what was done. What is given up is the '
           'finality of publication, because the collection will be slightly different in '
           'ten years and the citations will need dates. That is a real cost to scholarship, '
           'and it is smaller than either hiding the record or treating a nineteen '
           'eighty-four signature as consent to something that did not exist.'],
 'model_words': 249}
UNIT['sp'] = list(UNIT['sp']) + [{'sub': 'Who owns an image',
  'focus': 'contrasting two things with whereas',
  'skill': ('Copyright belongs to the photographer, whereas the claim belongs to the subject',
            ['Whereas takes a clear pause before it and none after. The pause is what marks '
             'the contrast.',
             'Give both halves equal weight. Dropping the second half makes it sound like an '
             'afterthought.',
             'Stress the two contrasted items, not whereas itself.']),
  'repeat': ['Copyright belongs to the photographer.',
             'The personal claim belongs to the subject.',
             'The claim varies between jurisdictions, whereas copyright hardly varies.',
             'The signature is valid, albeit given for another world.',
             'A release is a promise, whereas a transfer moves something.',
             'While none of these practices is required, all of them are cheap.',
             'An archive holds the copyright, whereas the subject’s agreement has to be '
             'collected from somebody else entirely.'],
  'theme': 'owning, or not owning, an image of yourself',
  'qs': ['Tell me about a photograph of you that somebody else controls. How do you feel '
         'about that?',
         'Some people say that if you are in a public place you have agreed to be '
         'photographed. How far would you agree?',
         'If an old photograph of you became searchable by name, what would you want to be '
         'able to do?',
         'Finally, describe a case where you think a lawful use of an image would still be '
         'wrong.'],
  'model': [(2,
             'That moves much too fast for me, and the reason is the distinction in this '
             'unit. Being seen in a street and being findable by name for ever are not the '
             'same consent, and treating the first as the second does a lot of work in a '
             'very short sentence.'),
            (3,
             'A way of asking for it to come down that does not involve a lawyer. Not a '
             'right to win, necessarily, but a route to ask and a record that I did.')],
  'selfcheck': ['I paused before whereas and not after',
                'I gave both halves equal weight',
                'I used at least two of the unit’s field words']},
 {'sub': 'Who owns an image',
  'focus': 'saying that everybody acted properly and the outcome is wrong',
  'skill': ('Nobody did anything wrong, and the result is still bad',
            ['Clear the people first, at full length, before you say what is wrong. Rushing '
             'it sounds like an accusation you are hiding.',
             'Mark the turn with and rather than but. But reads as though the clearing was '
             'insincere.',
             'Then put the fault where it belongs, in the situation or the rule, not in a '
             'person.']),
  'repeat': ['Nobody did anything wrong here.',
             'It did not exist to be described.',
             'No amount of better drafting would have helped.',
             'The signature is valid and the use is lawful.',
             'She was put in a position she could not have agreed to.',
             'The problem is not in the wording, so there is nothing to fix there.',
             'Legislation will not reach it either, because the fix would have to be '
             'retrospective.'],
  'theme': 'a bad outcome with no bad actor',
  'qs': ['Tell me about a situation that went wrong although everybody acted reasonably. '
         'What caused it?',
         'Some people think that if nobody is at fault, nothing needs to change. What do you '
         'think?',
         'How should an organisation respond to a harm it caused lawfully?',
         'Finally, describe a rule that made sense when it was written and does not now.'],
  'model': [(2,
             'I think that is exactly backwards, and the reason is practical. If somebody is '
             'at fault you can deal with the person and leave the system alone. If nobody '
             'is, the system is the only thing left to change, so those are the cases where '
             'design actually matters.'),
            (4,
             'A rule at my old job that expenses had to be claimed on paper within a month. '
             'It was written when people worked in one building and nobody had reviewed it '
             'since.')],
  'selfcheck': ['I cleared the people at full length first',
                'I turned with and rather than but',
                'I put the fault in the rule rather than a person']}]
