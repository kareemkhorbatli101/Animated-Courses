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
