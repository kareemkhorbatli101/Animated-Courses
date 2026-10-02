# -*- coding: utf-8 -*-
"""Unit 10 · Literature and Storytelling — last unit of Volume 1."""

UNIT = dict(
    n=10, vol=1, title='Literature and Storytelling',
    icons=('book', 'quill', 'note'),
    subs=('What makes a story', 'A student book club', 'The short story'),
    grammar='Past continuous and narrative',
    field='plot, character, theme',
    opener_line='The last unit of Volume 1. Everything from Units 1–10 comes back in Practice '
                'Test 1, which follows the glossary at the end of this book.',

    candos=[
        'complete word endings in a text about how stories are built',
        'read a book club notice and a reading-list email for what I have to do',
        'follow a passage that explains why a form is shaped as it is',
        'understand two people arguing about the ending of a book',
        'retell an event out loud, in order, without preparing',
        'write an email proposing a change, and a post that disagrees carefully',
    ],

    acad=[
        ('theme', 'the main idea running through a work'),
        ('text', 'a piece of writing'),
        ('chapter', 'one main part of a book'),
        ('author', 'the writer of a book'),
        ('publish', 'to produce a book or article for the public'),
        ('paragraph', 'a group of sentences on one point'),
        ('quote', 'to repeat someone’s exact words'),
        ('comment', 'a written or spoken remark'),
        ('imply', 'to suggest without saying directly'),
        ('infer', 'to work out from what is said'),
        ('ambiguous', 'having more than one possible meaning'),
        ('paradigm', 'a typical pattern or model'),
        ('version', 'one form of something that exists in several'),
        ('brief', 'short'),
        ('summary', 'a short account of the main points'),
        ('drama', 'a play, or an exciting series of events'),
        ('analogy', 'a comparison that explains something'),
        ('underlie', 'to be the real cause or basis of'),
        ('appreciate', 'to recognise the value of something'),
        ('clarify', 'to make something clearer'),
        ('contradict', 'to say the opposite of'),
        ('coherent', 'holding together logically'),
        ('abstract', 'about ideas rather than things you can touch'),
        ('resolve', 'to settle or bring to an end'),
    ],
    campus=[
        ('book club', 'a group that meets to discuss a book'),
        ('novel', 'a long story in prose'),
        ('short story', 'a complete story of a few pages'),
        ('reading list', 'a list of books to be read for a course'),
        ('library card', 'a card that lets you borrow books'),
        ('due date', 'the day a borrowed book must be returned'),
        ('renew', 'to extend a loan for longer'),
        ('paperback', 'a book with a soft cover'),
        ('discussion', 'a conversation in which ideas are examined'),
        ('extract', 'a short passage taken from a longer work'),
        ('blurb', 'the short description on the back of a book'),
        ('spine', 'the edge of a book where the pages are joined'),
    ],
    vocab_talk=[
        'Describe a book or film whose ending you found ambiguous. What did you decide it meant?',
        'What theme keeps coming up in the stories you like?',
        'Can you summarise a film you saw recently in three sentences?',
        'Which do you prefer, a novel or a short story, and why?',
    ],
    again=['culture', 'tradition', 'interpret', 'significant', 'contrast', 'perceive', 'context', 'evident'],

    r1=dict(
        sub='What makes a story',
        skill=('Narrative endings are mostly past tense',
               ['In a story-shaped text, two dashes after a verb stem is usually -ed.',
                'Three dashes after a verb stem is usually -ing.',
                'Noun endings common here: -ing, -ion, -ure, -ment.',
                'Say the sentence aloud in your head. Narrative prose has a strong rhythm.']),
        guided_text='Every story needs somebody who wants someth--- and someth--- in the way. '
                    'Remove either one and the story stops. A character who wants noth--- cannot '
                    'be interest---, and a character who gets everything immedi----- is not in '
                    'a story at all. They are in a list.',
        guided_hint='1  someth---  →  ing  (something)',
        guided=['ing', 'ing', 'ing', 'ing', 'ately'],
        exam_text='A story is not a sequence of events. A sequence of events is a list. What '
                  'turns a list into a story is caus-----: this happened, and beca--- it '
                  'happened, that happened next. The novelist E. M. Forster made the point with '
                  'two sent-----. The king died and then the queen died is a list. The king died '
                  'and then the queen died of gr--- is a story, because the second death is '
                  'explain-- by the first. Notice how little it t---- — two words. Everything '
                  'else that we admire in fict---, the characters, the sett---, the sentences '
                  'themselves, sits on top of that one join. Take it away and the most beautiful '
                  'wri---- in the world is still only a list of things that happ----.',
        exam=['ation', 'use', 'ences', 'ief', 'ed', 'akes', 'ion', 'ing', 'ting', 'ened'],
    ),

    r2=dict(
        sub='A student book club',
        skill=('Read the list and the condition together',
               ['A reading list is a set of items with dates. Questions pair an item with its '
                'date.',
                'Note which items are compulsory and which are optional.',
                'An email that changes a list is more recent than the list itself.',
                'If something has moved online, the question is often about who that affects.']),
        docs=[
            ('notice', 'Brookfield Book Club · spring reading list', [
                '# Thursdays, 18.30, Library seminar room (upstairs)',
                '22 Jan  Short stories, chosen by the group. Extracts provided.',
                '5 Feb  A novel in translation. Copies in the library, three-week loan.',
                '19 Feb  A play — we read it aloud, parts assigned on the night.',
                '5 Mar  Anything you like, five minutes each. No preparation required.',
                '# How it works',
                '* Nothing is compulsory. Come to one, come to all.',
                '* Reading everything is not expected. Reading something is.',
                '* We finish at 20.00 sharp because the library closes at 20.15.',
            ], 'notice'),
            ('email', 'bookclub@brookfield.edu', 'r.mehta@brookfield.edu',
             '02/02/2026', 'Next Thursday is online — and a change to the novel', [
                 'Dear all,',
                 '',
                 'Two things about 5 February.',
                 '',
                 'First, the seminar room is being used for an open evening, so we will',
                 'meet online instead. The link is on the noticeboard page. Same time,',
                 'half past six, and we will still finish at eight.',
                 '',
                 'Second, the library has only four copies of the novel and there are',
                 'nineteen of us. I have put a thirty-page extract on the noticeboard',
                 'page as well. Reading the extract is enough — nobody should buy',
                 'anything.',
                 '',
                 'If you have the whole book, please do not spoil the ending. Half the',
                 'room will not have reached it.',
                 '',
                 'Ravi Mehta',
             ]),
        ],
        guided=[
            ('When does the book club meet?',
             ('Thursdays at 18.00', 'Thursdays at 18.30', 'Wednesdays at 18.30',
              'Thursdays at 20.00'), 1,
             'Thursdays, 18.30 — 20.00 is the finishing time.'),
            ('Which session needs no preparation?',
             ('22 January', '5 February', '19 February', '5 March'), 3,
             'Anything you like, five minutes each. No preparation required.'),
            ('What happens on 19 February?',
             ('A novel is discussed', 'A play is read aloud', 'Extracts are provided',
              'Members choose their own book'), 1,
             'Parts are assigned on the night, which is why nothing has to be prepared.'),
            ('Why does the club finish at exactly 20.00?',
             ('People have lectures', 'The library closes at 20.15',
              'The room is booked afterwards', 'The sessions are ninety minutes'), 1,
             'The notice gives that reason with because.'),
        ],
        exam=[
            ('Why is the February meeting online?',
             ('More people have joined', 'The seminar room is being used for an open evening',
              'The library is closed', 'The novel is only available online'), 1,
             'The first of the two things, given with its reason.'),
            ('How many copies of the novel does the library have?',
             ('Four', 'Nineteen', 'Thirty', 'Three'), 0,
             'Four copies and nineteen members — which is why the extract exists.'),
            ('What does Ravi say members should read?',
             ('The whole novel', 'The thirty-page extract', 'Any novel in translation',
              'Nothing before the meeting'), 1,
             'Reading the extract is enough — nobody should buy anything.'),
            ('What does Ravi ask members not to do?',
             ('Buy the book', 'Arrive late', 'Reveal the ending', 'Bring guests'), 2,
             'Please do not spoil the ending — half the room will not have reached it.'),
            ('What has NOT changed about the February meeting?',
             ('The place', 'The format', 'The time', 'The book'), 2,
             'Same time, half past six, and we will still finish at eight.'),
            ('What can be inferred about the club?',
             ('It is compulsory for literature students', 'It tries to keep costs at zero',
              'It is open only to members', 'It has shrunk this year'), 1,
             'Library copies, provided extracts, a free online option and nobody should buy '
             'anything all point the same way.'),
        ],
    ),

    r3=dict(
        sub='The short story',
        title='Why the Short Story Is Shaped as It Is',
        words=275,
        paras=[
            'The short story is not a small novel. It is a different instrument, and the reason '
            'is partly technological. The form took its modern shape in the nineteenth century, '
            'when cheap magazines appeared and needed something that could be read in a single '
            'sitting on a train. A novel can afford to wander for forty pages before it becomes '
            'interesting. A story in a magazine competed with the window.',
            'That pressure produced the rules that writers still work with. A short story '
            'usually begins after the beginning: the situation is already in motion when you '
            'arrive, and you work out the background while the story moves. It tends to have one '
            'main character rather than several, because there is no room to make you care about '
            'a second. And it very often ends a little before you expect it to, leaving the last '
            'step to the reader — a technique that would be infuriating across four hundred '
            'pages and is the whole pleasure across fifteen.',
            'None of this makes the short story easier than the novel. Writers who do both '
            'usually say the opposite, because every sentence has to perform more than one job. '
            'A line of dialogue must reveal a character, advance the plot and set the scene at '
            'the same time, since it will not get a second chance. The novelist has a room to '
            'furnish. The story writer is packing a bag.',
        ],
        skill=('Follow a form explained by its history',
               ['A passage of this type explains a shape by the conditions that produced it. '
                'Link the two.',
                'Rules listed in the middle paragraph will be tested one by one.',
                'A closing analogy (a room, a bag) is the author’s summary. Expect a question '
                'on it.',
                'What the author denies is as important as what the author claims.']),
        guided=[
            ('What is the passage mainly about?',
             ('Why short stories are easier to write', 'Why the short story has the shape it has',
              'The history of magazines', 'How novels are structured'), 1,
             'Technology produced the pressure, the pressure produced the rules, and the last '
             'paragraph denies that this makes it easier.'),
            ('According to paragraph 1, what did cheap magazines need?',
             ('Longer stories', 'Something readable in one sitting',
              'Illustrations', 'Famous authors'), 1,
             'Read in a single sitting on a train, which is the whole explanation of the length.'),
            ('What does "competed with the window" mean?',
             ('It was printed beside advertisements', 'It had to be more interesting than '
              'looking outside', 'It was read in daylight',
              'It was sold at stations'), 1,
             'The comparison is with a novel that can afford to wander for forty pages.'),
            ('Why does a short story usually have one main character?',
             ('Readers prefer it', 'There is no room to make you care about a second',
              'Magazines required it', 'It is easier to write'), 1,
             'The reason is given in the same sentence as the rule.'),
        ],
        exam=[
            ('What does the author say about the beginning of a short story?',
             ('It explains the background first', 'It begins after the situation is already '
              'moving', 'It is usually the longest part',
              'It introduces all the characters'), 1,
             'You work out the background while the story moves.'),
            ('Why can a story end slightly early?',
             ('Magazines limited the length', 'Readers skip endings',
              'It leaves the last step to the reader', 'Writers are paid by the page'), 2,
             'And the author adds that this would be infuriating across four hundred pages.'),
            ('All of the following are given as features of the short story EXCEPT:',
             ('one main character', 'beginning after the beginning',
              'an ending slightly before expected', 'a slow opening section'), 3,
             'A slow opening belongs to the novel, which can afford forty pages.'),
            ('What do writers who do both forms usually say?',
             ('The novel is harder', 'The short story is harder',
              'They are equally hard', 'It depends on the subject'), 1,
             'Writers who do both usually say the opposite — the opposite of the story being '
             'easier.'),
            ('Why must a line of dialogue do several jobs at once?',
             ('Readers are impatient', 'There will not be a second chance',
              'Editors demand it', 'Dialogue is expensive to print'), 1,
             'Since it will not get a second chance — given as the reason in the same sentence.'),
            ('What does the final analogy mean?',
             ('The novelist travels more', 'The story writer must choose what to leave out',
              'Both forms need the same skills', 'A bag is cheaper than a room'), 1,
             'Packing a bag is a matter of selection; furnishing a room is a matter of filling '
             'space.'),
            ('Which best states the main idea of paragraph 1?',
             ('Novels were less popular than stories', 'The form was shaped by where it was '
              'read', 'Nineteenth-century trains were slow',
              'Magazines paid writers badly'), 1,
             'Cheap magazines, a single sitting, a train — the conditions of reading set the '
             'length.'),
        ],
    ),

    l1=dict(
        sub='A student book club',
        caption='Two students argue about an ending',
        skill=('Hear an interpretation, not a fact',
               ['When speakers disagree about a text, each will give evidence. Note whose '
                'evidence is what.',
                'Listen for but that is not what it says — it marks a factual correction '
                'inside an argument.',
                'An agreement at the end may be partial. Note exactly what is agreed.',
                'Attitude questions ask how a speaker feels, which may differ from what they '
                'argue.']),
        warm=[
            ('Woman: Did you finish it?',
             ('About thirty pages.', 'Last night, yes — and I’m still annoyed.',
              'It’s on the reading list.', 'In the library.'), 1,
             'A yes/no question about completion; the reply answers and opens the topic.'),
            ('Man: What did you think of the ending?',
             ('On the last page.', 'Honestly? I’m not sure there was one.',
              'Three weeks.', 'Yes, I read it.'), 1,
             'What did you think wants an opinion.'),
            ('Woman: Don’t tell me what happens.',
             ('All right — I won’t say anything.', 'It happens at the end.',
              'I’ve finished it.', 'Yes, it’s very good.'), 0,
             'A request not to do something is answered by agreeing.'),
        ],
        script=[
            ('Man', 'So she just walks out and we never find out whether she goes back.'),
            ('Woman', 'That’s the ending. She walks out.'),
            ('Man', 'It isn’t an ending. It’s stopping.'),
            ('Woman', 'Those are not the same thing, and I think you know that. We talked about '
                      'this last term — the story ends a step before you expect, and you do the '
                      'last step.'),
            ('Man', 'I don’t want to do the last step. I read four hundred pages.'),
            ('Woman', 'Ah, but that’s the real objection. It’s a short-story ending stuck on '
                      'the end of a novel.'),
            ('Man', 'Yes. Exactly that.'),
            ('Woman', 'All right. I’ll give you that one. In fifteen pages I’d have loved it.'),
            ('Man', 'So we agree it is a bad ending.'),
            ('Woman', 'No. We agree it is the wrong length of book for that ending. Which is a '
                      'completely different complaint and a much more interesting one. Say that '
                      'on Thursday.'),
        ],
        items=[
            ('What are the speakers disagreeing about?',
             ('Whether to read the novel', 'Whether the ending works',
              'When the book club meets', 'Which character is the main one'), 1,
             'He calls it stopping, she calls it an ending, and they argue from there.'),
            ('What is the man’s objection?',
             ('The book is too short', 'Nothing is resolved and he read four hundred pages',
              'The character is unlikeable', 'He did not finish it'), 1,
             'I don’t want to do the last step. I read four hundred pages.'),
            ('How does the woman describe the ending at first?',
             ('As a mistake', 'As a technique that leaves the last step to the reader',
              'As too long', 'As the best part'), 1,
             'She refers back to something the group discussed last term.'),
            ('What does the woman concede?',
             ('That the ending is bad', 'That she did not finish the book',
              'That she would have liked it in a shorter work', 'That the man is usually right'), 2,
             'In fifteen pages I’d have loved it.'),
            ('What does the woman say they actually agree on?',
             ('That it is a bad ending', 'That it is the wrong length of book for that ending',
              'That short stories are better', 'That nobody should finish it'), 1,
             'She corrects his summary in the last line, carefully.'),
            ('What does the woman suggest the man do?',
             ('Read it again', 'Say his point at the book club', 'Choose a different novel',
              'Stop reading novels'), 1,
             'Say that on Thursday — because she thinks the reframed complaint is interesting.'),
        ],
    ),

    l2=dict(
        sub='A student book club',
        caption='The book club moves online',
        poster=['5 February: online, not the seminar room',
                'Read the thirty-page extract — that is enough',
                'Do not reveal the ending'],
        skill=('Note what is enough, not only what is asked',
               ['Announcements often lower a requirement. That is as testable as raising one.',
                'A reason given for a change usually explains a number as well.',
                'A request made politely is still a rule. Listen past the politeness.',
                'The last instruction is nearly always a question.']),
        warm=[
            ('Man: Is it still in the seminar room?',
             ('At half past six.', 'No, it’s online this week.', 'Nineteen of us.',
              'Yes, upstairs.'), 1,
             'A yes/no question about place, answered and corrected.'),
            ('Woman: Do I have to read the whole novel?',
             ('There are four copies.', 'No — the extract is enough.',
              'It’s in translation.', 'By Thursday.'), 1,
             'A do-I-have-to question wants the requirement, and this one lowers it.'),
            ('Man: Where do I find the link?',
             ('On the noticeboard page.', 'At half past six.', 'It’s online.',
              'Yes, there is one.'), 0,
             'Where wants a place, including an online one.'),
        ],
        script=[
            ('Woman', 'Book club, Thursday the fifth, three changes and one request. The seminar '
                      'room has been taken for the open evening, so we are meeting online. The '
                      'link is on the noticeboard page, not in the email, because the email goes '
                      'to people who left the group last year. Same time, half past six, and we '
                      'will still stop at eight, even though the library closing time is no '
                      'longer the reason. Second, the library has four copies of the novel for '
                      'nineteen of us, so I have put a thirty-page extract on the same page. '
                      'Read the extract. That is genuinely enough and nobody should be buying '
                      'anything for a book club. Third, if you do happen to own the whole novel, '
                      'please do not say how it ends. More than half the group will not have got '
                      'there, and the ending is the entire thing we are going to argue about. '
                      'And the request: if you have never said anything at one of these, say one '
                      'sentence this week. Online is actually easier for that.'),
        ],
        items=[
            ('Why is the meeting online?',
             ('More people have joined', 'The seminar room has been taken',
              'The library is closed', 'The weather is poor'), 1,
             'Taken for the open evening, which is the reason given.'),
            ('Why is the link not in the email?',
             ('It is too long', 'The email reaches people who have left the group',
              'The noticeboard page is safer', 'It changes every week'), 1,
             'The speaker explains it with because, in the same sentence.'),
            ('What should members read?',
             ('The whole novel', 'The thirty-page extract', 'Nothing',
              'A short story instead'), 1,
             'Read the extract. That is genuinely enough.'),
            ('Why must nobody reveal the ending?',
             ('It is a rule of the library', 'Over half the group has not reached it',
              'The author asked for it', 'It is in the extract'), 1,
             'And the ending is the entire thing we are going to argue about.'),
            ('What is the speaker’s request?',
             ('Arrive on time', 'Buy the novel', 'Say one sentence if you usually say nothing',
              'Bring a friend'), 2,
             'And she adds that online is actually easier for that.'),
        ],
    ),

    l3=dict(
        sub='What makes a story',
        caption='A talk on building a character',
        board=['What they want', 'What stops them', 'What they do about it',
               'Three lines, not three chapters'],
        skill=('Follow a method taught by example',
               ['A talk that teaches a technique will demonstrate it. Watch for the '
                'demonstration.',
                'A short example repeated with one word changed is always tested.',
                'Listen for and that is all it takes — it marks the point of the example.',
                'The last sentence usually tells you what to do with the lecture.']),
        warm=[
            ('Woman: What are the three things on the board?',
             ('Want, obstacle, action.', 'In the third chapter.', 'Three lines.',
              'Yes, three of them.'), 0,
             'What are they wants the items themselves.'),
            ('Man: Does it work for any character?',
             ('It takes three lines.', 'He says it works for almost any.',
              'In a short story.', 'Yes, three chapters.'), 1,
             'A does-it-work question wants a judgement about scope.'),
            ('Woman: Can we try one in the seminar?',
             ('It is on the board.', 'That is exactly what he suggested.',
              'About five minutes.', 'Yes, three lines.'), 1,
             'A can-we question wants agreement or refusal.'),
        ],
        script=[
            ('Professor', 'People think building a character takes chapters. It does not. It '
                          'takes three lines, and they are on the board: what the person wants, '
                          'what stops them, and what they do about it. Let me show you. A woman '
                          'waits at a bus stop. Nothing. Now: a woman waits at a bus stop, '
                          'holding an envelope she has not opened. Something has started — she '
                          'wants to know, and something is stopping her. Add the third line: she '
                          'opens it, reads one word, and puts it back in her bag. You now have a '
                          'character, a situation and a question, in three sentences, and you '
                          'know nothing about her age, her job or her face. That is the lesson. '
                          'Description is not characterisation. What a person does under '
                          'pressure is characterisation, and pressure only exists when there is '
                          'something they want and something in the way. So when you are stuck '
                          'on a character this week, do not describe them harder. Ask my three '
                          'questions, and if the second one has no answer, that is your problem: '
                          'nothing is stopping them, so nothing is happening.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Characters need detailed description', 'Character is built from want, obstacle '
              'and action', 'Short stories are harder than novels',
              'Writers should plan three chapters'), 1,
             'The three lines on the board are the method, and the demonstration proves it.'),
            ('Why does the speaker mention a woman at a bus stop?',
             ('To describe a scene he once wrote', 'To demonstrate the method step by step',
              'To compare two characters', 'To explain how buses work'), 1,
             'He builds the example in three stages, adding one element at a time.'),
            ('What does the envelope add to the example?',
             ('A description of the character', 'Something she wants and something stopping her',
              'A second character', 'A setting'), 1,
             'She wants to know, and something is stopping her — that is the first two of the '
             'three lines.'),
            ('What does the reader still not know after the three sentences?',
             ('What she does', 'What is in the envelope’s first word',
              'Her age, job or face', 'Where she is'), 2,
             'The speaker lists exactly those three to make his point about description.'),
            ('According to the speaker, what is characterisation?',
             ('Describing a person carefully', 'What a person does under pressure',
              'Explaining a person’s history', 'Giving a person a name'), 1,
             'Description is not characterisation — what a person does under pressure is.'),
            ('What does the speaker say to do if the second question has no answer?',
             ('Describe the character more', 'Recognise that nothing is stopping them, so '
              'nothing is happening', 'Add a second character',
              'Change the setting'), 1,
             'That is your problem — nothing is stopping them, so nothing is happening.'),
        ],
    ),

    sp=[
        dict(sub='What makes a story', focus='intonation in narrative',
             skill=('Let the voice carry the shape',
                    ['A list of events is flat. A story rises at the complication and falls at '
                     'the end.',
                     'Mark the turning point with a slight pause before it.',
                     'Keep the past continuous smooth: she was waiting, not she-was-waiting.',
                     'Finish every sentence you start.']),
             repeat=['She was waiting at the bus stop.',
                     'He was reading when the phone rang.',
                     'They were arguing about the ending all evening.',
                     'While she was waiting, she took out an envelope.',
                     'The king died, and then the queen died of grief.',
                     'She opened the envelope, read a single word and put it back in her bag.',
                     'What turns a sequence of events into a story is causation, and causation is usually carried by two or three very ordinary words.'],
             theme='a book or film you remember',
             qs=['First, is there a book or a film you still think about?',
                 'Stories affect people in different ways. Why do you think that one stayed '
                 'with you?',
                 'Some people say that stories teach us more about other people than facts do. '
                 'Do you agree? Why or why not?',
                 'Finally, should schools let students choose the books they study? Why or why '
                 'not?'],
             model=[(2, 'I think it stayed with me because I read it at the right age. The same '
                        'book now would probably do nothing at all.'),
                    (3, 'I agree, mostly. A fact tells you what happened. A story makes you '
                        'spend three hundred pages inside somebody you would never have met.')],
             selfcheck=['I paused slightly before the turning point',
                        'I kept the past continuous smooth',
                        'I finished every sentence']),
        dict(sub='A student book club', focus='disagreeing politely',
             skill=('Disagree with the point, not the person',
                    ['I see what you mean, but… / That is fair, although… / I would put it '
                     'differently.',
                     'Say what you agree with first. It makes the disagreement land.',
                     'Give one reason. Two weak reasons are worse than one good one.',
                     'A question back is a strong way to finish a turn.']),
             repeat=['I see what you mean.',
                     'That is fair, although I read it differently.',
                     'I agree about the character but not about the ending.',
                     'I would put it differently: it is not bad, it is in the wrong book.',
                     'You are right that nothing is resolved, and I think that is deliberate.',
                     'I take your point about the length, but the same ending in a short story would be admired.',
                     'If the author had explained the last step, would you really have been more satisfied, or only less annoyed?'],
             theme='reading and how people do it',
             qs=['To start, how much do you read that is not for your course?',
                 'People read in very different ways. How do you read — quickly, slowly, '
                 'several books at once — and why?',
                 'Some people argue that reading on a screen is not really reading. Do you '
                 'agree? Why or why not?',
                 'Last question. Should universities include fiction on every reading list, '
                 'whatever the subject? Why or why not?'],
             model=[(2, 'Slowly and only one at a time. If I start a second book I never finish '
                        'the first, which I have learned the expensive way.'),
                    (3, 'I disagree, although I understand the feeling. What people really mean '
                        'is that they are interrupted on a screen, and that is a different '
                        'complaint.')],
             selfcheck=['I agreed with something before disagreeing',
                        'I gave one clear reason',
                        'I was polite without being vague']),
        dict(sub='The short story', focus='academic register',
             skill=('Describe a form in its own terms',
                    ['Use the unit’s words: imply, infer, ambiguous, coherent, underlie.',
                     'Say what a form does, then why it does it: the story ends early, which '
                     'leaves…',
                     'Avoid I like. Say the effect: the reader is left to…',
                     'Mark yourself against the three statements below.']),
             repeat=['The ending is deliberately ambiguous.',
                     'The reader is left to infer the final step.',
                     'A short story usually begins after the situation has started.',
                     'Every sentence has to perform more than one function at a time.',
                     'What underlies the form is the condition in which it was first read.',
                     'The technique would be infuriating across four hundred pages and is the whole pleasure across fifteen.',
                     'A line of dialogue in a short story must reveal character, advance the plot and establish the setting, because it will not be given a second chance.'],
             theme='stories and where they come from',
             qs=['First, what kind of stories were you told as a child?',
                 'Those stories stay with people differently. How do you think yours affected '
                 'you, and why?',
                 'Some people argue that every culture tells essentially the same stories. Do '
                 'you agree? Why or why not?',
                 'Finally, should old stories be rewritten when their values are no longer '
                 'acceptable? Why or why not?'],
             model=[(3, 'Partly. The structures repeat, which is what makes them recognisable, '
                        'but what counts as a happy ending varies enormously and that is the '
                        'interesting part.'),
                    (4, 'I would publish both, with a note. Rewriting quietly removes the '
                        'evidence of what people used to believe, and that evidence is useful.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I described the effect rather than my preference',
                        'My last answer had an opinion, a reason and an example']),
    ],

    w1=dict(
        sub='What makes a story',
        skill=('Past continuous in questions',
               ['What was she doing? — was comes before the subject.',
                'While and when join two past clauses: while she was waiting, the bus came.',
                'An embedded past-continuous question keeps statement order: do you know what '
                'she was doing.',
                'Use every tile exactly once.']),
        guided=[
            ('She was waiting at the bus stop.',
             ['was', 'what', 'she', 'doing'],
             'What was she doing?'),
            ('The phone rang while he was reading.',
             ['happened', 'what', 'while', 'he', 'was', 'reading'],
             'What happened while he was reading?'),
            ('They were arguing about the ending.',
             ['know', 'you', 'do', 'what', 'they', 'were', 'arguing', 'about'],
             'Do you know what they were arguing about?'),
        ],
        exam=[
            ('The queen died of grief.',
             ['did', 'why', 'the', 'queen', 'die'],
             'Why did the queen die?'),
            ('The club is meeting online on 5 February.',
             ['tell', 'can', 'you', 'me', 'whether', 'the', 'club', 'is', 'meeting', 'online'],
             'Can you tell me whether the club is meeting online?'),
            ('There are only four copies in the library.',
             ['copies', 'how', 'many', 'are', 'there'],
             'How many copies are there?'),
            ('She put the envelope back in her bag.',
             ['know', 'do', 'you', 'what', 'she', 'did', 'with', 'it'],
             'Do you know what she did with it?'),
            ('The student who chose the novel is away this week.',
             ['the', 'student', 'who', 'chose', 'the', 'novel', 'is', 'away'],
             'The student who chose the novel is away.'),
            ('The short story took its modern shape in the nineteenth century.',
             ['did', 'when', 'the', 'form', 'take', 'shape'],
             'When did the form take shape?'),
            ('Nobody should buy the book.',
             ['know', 'do', 'you', 'whether', 'I', 'need', 'to', 'buy', 'it'],
             'Do you know whether I need to buy it?'),
        ],
    ),
    w2=dict(
        sub='A student book club',
        to='bookclub@brookfield.edu',
        date='03/02/2026',
        subject='February session — a suggestion about the extract',
        scenario=[
            'The book club is meeting online on 5 February and members have been asked to read a '
            'thirty-page extract rather than the whole novel. You have read the whole book, and '
            'you think the extract stops at a point that will make the discussion of the ending '
            'impossible.',
            'Write an email to Ravi Mehta.',
        ],
        bullets=['Say what the problem with the extract is.',
                 'Suggest something practical.',
                 'Offer to do part of the work yourself.'],
        skill=('Suggest, do not instruct',
               ['Would it be worth…? and Could we perhaps… land better than You should…',
                'Name the problem in one sentence, with the page number or the detail.',
                'A suggestion with an offer attached is far more likely to be taken.',
                'Seven minutes. 110–140 words.']),
        model=[
            'Dear Ravi,',
            'Thank you for putting the extract up — it solves the copies problem completely. '
            'There is one difficulty with where it stops, though. The extract ends on page 212, '
            'just before the chapter in which she leaves, so anybody reading only the extract '
            'will arrive on Thursday without having met the ending at all.',
            'Would it be worth adding the final chapter, which is only nine pages? That would '
            'take the extract to thirty-nine pages, which is still a single evening’s reading.',
            'I have the book, so I am happy to scan those nine pages this afternoon and send '
            'them to you, and you could put them on the noticeboard page tonight if you agree.',
            'Either way, I will not mention the ending before Thursday.',
            'Best wishes,',
            'Sara Lindqvist',
        ],
        notes=['The praise is genuine and one clause long, and the problem follows immediately '
               'with a page number.',
               'The suggestion is costed: nine pages, thirty-nine in total, still one evening.',
               'The offer removes the work from the organiser, which is what makes a suggestion '
               'actionable.',
               'The last line answers the request in Ravi’s own email, which shows it was read.'],
    ),
    w3=dict(
        sub='The short story',
        prof='Dr Lindgren',
        question='Reading lists on most degree courses contain only non-fiction. Some '
                 'universities have begun adding a novel or a short story to courses in '
                 'medicine, law and engineering. Is that a good use of a student’s reading '
                 'time? Why or why not?',
        posts=[('Yusuf', 'm',
                'Yes, in medicine especially. A doctor spends a career listening to people '
                'describe things they cannot describe well. Fiction is practice at that, and '
                'there is no other part of a medical degree that offers it.'),
               ('Clara', 'w',
                'I am sceptical. Not because fiction is useless, but because a compulsory novel '
                'on an engineering course will be read the way compulsory things are read — '
                'quickly, resentfully, and for the seminar. You cannot force the thing that '
                'makes reading valuable.')],
        skill=('Answer the mechanism, not the sentiment',
               ['Both posts here are reasonable. Find the mechanism each depends on.',
                'Yusuf depends on fiction training attention; Clara on compulsion destroying it.',
                'Deciding between them means saying which mechanism is stronger, and why.',
                'At least 100 words in ten minutes.']),
        starters=['Clara’s objection is about compulsion rather than about fiction, which means…',
                  'Yusuf’s case is strongest where… and weakest where…',
                  'Both are right about different courses:…',
                  'What I would change is not whether but how:…'],
        model=[
            'Clara’s objection is not about fiction at all. It is about compulsion, and that '
            'distinction decides the question.',
            'Yusuf is right that medicine is a listening profession and that nothing else on the '
            'degree practises it. But notice that his argument works because the fiction is '
            'doing a job the student can see. Clara’s engineering student cannot see the job, '
            'so the novel becomes one more thing to get through before Thursday.',
            'So I would not argue about whether, but about how. Put the story on the course at '
            'the point where it answers a question the course has already raised — a case the '
            'students have just argued about, a patient they could not agree how to treat. Read '
            'there, fifteen pages will do more than a whole novel read in week one because the '
            'syllabus says so.',
        ],
        model_words=157,
    ),

    gram=dict(
        title='Past continuous and narrative',
        headers=['Form', 'Example'],
        rows=[
            ['was / were + -ing', 'She was waiting at the bus stop.'],
            ['Interrupted action', 'He was reading when the phone rang.'],
            ['Two actions at once', 'While she was waiting, he was parking the car.'],
            ['Background vs event', 'It was raining. She opened the envelope.'],
            ['Question', 'What was she doing?'],
            ['Not with state verbs', 'She was knowing the answer. ✗'],
            ['Past simple for the sequence', 'She opened it, read it and put it back.'],
        ],
        notes=[
            'The past continuous sets the scene; the past simple moves the story. A narrative '
            'that uses only one of them feels either static or breathless.',
            'When joins a short event to a longer background: when the phone rang. While joins '
            'two long actions: while she was waiting.',
            'State verbs (know, want, believe, own, seem) are not normally used in the '
            'continuous, however long the state lasts.',
        ],
        watch='Do not put a whole sequence into the past continuous. She was opening it, was '
              'reading it and was putting it back is wrong: a sequence of completed actions '
              'takes the past simple.',
        ex=[
            ('Put the verb in the past simple or the past continuous.',
             ['She __________ (wait) at the bus stop when the letter __________ (arrive).',
              'While he __________ (read), the phone __________ (ring).',
              'They __________ (argue) about the ending all evening.',
              'It __________ (rain), so we __________ (stay) inside.',
              'She __________ (open) the envelope, __________ (read) one word and '
              '__________ (put) it away.',
              'I __________ (not / know) the answer at the time.'],
             ['was waiting / arrived', 'was reading / rang', 'were arguing',
              'was raining / stayed', 'opened / read / put', 'did not know']),
            ('Join with when or while.',
             ['She was waiting. The bus came. →',
              'He was reading. She was cooking. →',
              'They were arguing. The meeting started. →',
              'It was raining. We arrived. →'],
             ['She was waiting when the bus came.',
              'He was reading while she was cooking.',
              'They were arguing when the meeting started.',
              'It was raining when we arrived.']),
            ('Correct the mistake in each sentence.',
             ['She was knowing the answer.',
              'He was opening the envelope, was reading it and was putting it back.',
              'While the phone rang, he was reading.'],
             ['She knew the answer.',
              'He opened the envelope, read it and put it back.',
              'When the phone rang, he was reading.']),
        ],
        bas='Build a Sentence uses the past continuous mainly in questions: What was she doing? '
            'What happened while he was reading? Keep was and were in front of the subject in a '
            'direct question and behind it in an embedded one.',
    ),

    rev=dict(
        vocab=[
            ('to suggest without saying directly', 'imply'),
            ('to work out from what is said', 'infer'),
            ('having more than one possible meaning', 'ambiguous'),
            ('to be the real cause or basis of', 'underlie'),
            ('holding together logically', 'coherent'),
            ('to say the opposite of', 'contradict'),
            ('a comparison that explains something', 'analogy'),
            ('a short account of the main points', 'summary'),
            ('about ideas rather than things you can touch', 'abstract'),
            ('to settle or bring to an end', 'resolve'),
            ('a short passage taken from a longer work', 'extract'),
            ('the day a borrowed book must be returned', 'due date'),
        ],
        gram=[
            ('She __________ (wait) when the letter arrived.', 'was waiting'),
            ('While he __________ (read), the phone rang.', 'was reading'),
            ('They __________ (argue) about it all evening.', 'were arguing'),
            ('She opened it, __________ (read) one word and put it away.', 'read'),
            ('I __________ (not / know) the answer at the time.', 'did not know'),
            ('It __________ (rain) when we arrived.', 'was raining'),
            ('What __________ she __________ (do) at the bus stop?', 'was / doing'),
            ('He __________ (finish) the novel last night.', 'finished'),
        ],
        mini=[
            ('According to the passage on page 162, the short story was shaped by',
             ('the taste of nineteenth-century readers', 'where and how it was read',
              'the price of paper', 'competition from the novel'), 1,
             'Cheap magazines, a single sitting, a train — the conditions of reading set the form.'),
            ('In the talk, characterisation comes from',
             ('careful description', 'what a person does under pressure',
              'a character’s history', 'dialogue alone'), 1,
             'Description is not characterisation — the speaker makes the contrast explicit.'),
            ('Which sentence is correct?',
             ('She was knowing the answer.', 'While the phone rang, he was reading.',
              'He was reading when the phone rang.',
              'He was opening it, was reading it and was putting it back.'), 2,
             'A long background with a short interrupting event, which is what when is for.'),
            ('Book club members have been asked to read',
             ('the whole novel', 'a thirty-page extract', 'a short story', 'nothing'), 1,
             'Four library copies for nineteen members, so the extract is enough.'),
            ('In Writing, the discussion post should be at least',
             ('fifty words', 'one hundred words', 'two hundred words', 'three hundred words'), 1,
             'An effective response contains at least 100 words, in ten minutes.'),
            ('Volume 1 ends with',
             ('a glossary only', 'Practice Test 1 and the answer key',
              'Unit 11', 'the audio scripts only'), 1,
             'The practice test comes after Unit 10, followed by the key, the scripts and the '
             'glossary.'),
        ],
    ),
    tip='Before you sit Practice Test 1, read the four adaptive tips in Units 1–4 again. They '
        'are about how the test behaves rather than about English, and they are the part most '
        'students discover for the first time on the day. **Volume 1 ends here.**',
)
