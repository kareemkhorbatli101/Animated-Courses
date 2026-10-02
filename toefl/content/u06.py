# -*- coding: utf-8 -*-
"""Unit 6 · Art and Design — anchor unit for embedded questions."""

UNIT = dict(
    n=6, vol=1, title='Art and Design',
    icons=('palette', 'city', 'pen'),
    subs=('Colour and the eye', 'A gallery visit', 'How a building is designed'),
    grammar='Defining relative clauses · embedded questions with if and whether',
    field='form, colour, design',
    opener_line='This is the unit the whole Writing section turns on. Eight of the ten Build a '
                'Sentence items in a real test make a question or a question inside another '
                'sentence, and the other two make relative clauses. Both are taught here.',

    candos=[
        'complete word endings in a text about how we see',
        'find one fact in a gallery plan and an email about an exhibition',
        'follow a passage that explains how a decision is made before anything is built',
        'understand two people disagreeing about something they are looking at',
        'describe an object out loud and say what I think of it',
        'write a polite enquiry, and a discussion post that makes a distinction',
    ],

    acad=[
        ('design', 'to plan how something will look and work'),
        ('image', 'a picture or a mental picture'),
        ('visual', 'connected with seeing'),
        ('style', 'a particular way of doing or making something'),
        ('symbol', 'a thing that stands for something else'),
        ('display', 'to put something where it can be seen'),
        ('exhibit', 'to show something publicly'),
        ('contrast', 'a clear difference between two things'),
        ('parallel', 'similar and happening at the same time'),
        ('uniform', 'the same everywhere'),
        ('classic', 'of lasting quality and widely admired'),
        ('contemporary', 'belonging to the present time'),
        ('innovate', 'to introduce something new'),
        ('create', 'to make something that did not exist'),
        ('format', 'the shape and size in which something is presented'),
        ('layer', 'one thickness lying over another'),
        ('medium', 'the material or method an artist uses'),
        ('virtual', 'existing on a computer rather than in reality'),
        ('illustrate', 'to show the meaning of something with a picture or example'),
        ('diverse', 'of many different kinds'),
        ('edit', 'to change a text or image before it is finished'),
        ('unique', 'the only one of its kind'),
        ('intrinsic', 'belonging naturally to something'),
        ('highlight', 'to draw attention to something'),
    ],
    campus=[
        ('gallery', 'a room or building where art is shown'),
        ('frame', 'the border around a picture'),
        ('sketch', 'a quick rough drawing'),
        ('studio', 'a room where an artist works'),
        ('portfolio', 'a collection of work you show to others'),
        ('private view', 'an opening evening for invited guests'),
        ('caption', 'the words printed beside a picture'),
        ('floor plan', 'a drawing of a building seen from above'),
        ('cloakroom', 'a place to leave coats and bags'),
        ('entry fee', 'the money you pay to go in'),
        ('submission', 'work you hand in to be considered'),
        ('easel', 'a stand that holds a canvas while you paint'),
    ],
    vocab_talk=[
        'Describe something you own that you would call well designed. What makes it so?',
        'Which colour would you never paint a room, and why?',
        'Is there a building in your town that people argue about? What is the contrast of opinion?',
        'What is one thing you create, in any medium at all?',
    ],
    again=['structure', 'perceive', 'interpret', 'significant', 'contrast', 'identify', 'vary', 'alternative'],

    r1=dict(
        sub='Colour and the eye',
        skill=('Finish the word your eye already finished',
               ['You recognised the word before you reached the dashes. Write what you '
                'recognised.',
                'Adjective endings to expect here: -ful, -ive, -ous, -able.',
                'If the gap follows a comparative word (more, less), the gap is not a comparative.',
                'Read your answer back inside the sentence before you move on.']),
        guided_text='Colour does not exist in the world. Light has a wavel-----, and the eye '
                    'has three kinds of cell that resp--- to it, but the colour itself is made '
                    'in the brain. That is why the same gr-- square can look blue on one '
                    'backgr---- and yellow on anot---.',
        guided_hint='1  wavel-----  →  ength  (wavelength)',
        guided=['ength', 'ond', 'ey', 'ound', 'her'],
        exam_text='Ask somebody to name a colour and they will point at an obj---. But colour is '
                  'not a property of objects. A ripe tomato is not red; it reflects light of a '
                  'certain wavelength, and your brain does the r---. The proof is easy to '
                  'arrange. Put the same grey patch on a dark backgr---- and on a light one and '
                  'it will look obvi----- lighter on the dark. Nothing about the pa--- has '
                  'changed. What has changed is what surr----- it, and the brain judges '
                  'brightness by compar---- rather than by measuring. Designers have known this '
                  'for cent-----. A pale wall looks pal-- beside a dark floor; a small room '
                  'painted in one uni---- colour looks larger than the same room painted in two.',
        exam=['ect', 'est', 'ound', 'ously', 'tch', 'ounds', 'ison', 'uries', 'er', 'form'],
    ),

    r2=dict(
        sub='A gallery visit',
        skill=('Use the plan as a map, not as a text',
               ['A floor plan answers where questions. Find the room, then read its line.',
                'Captions are short and dense: every word in them can be tested.',
                'In an email about a deadline, note both the date and what happens after it.',
                'When a plan and an email disagree, the email is usually the newer one.']),
        docs=[
            ('notice', 'Fenwick Gallery · floor plan and what is in each room', [
                '# Ground floor',
                'Room 1  Nineteenth-century landscapes. Free.',
                'Room 2  Contemporary photography: Light and Shadow. Entry fee £4, students free.',
                'Room 3  Student submissions, changed every six weeks.',
                '# First floor',
                'Room 4  Design and the everyday object. Free.',
                'Room 5  Closed for rehanging until 3 December.',
                '# Visiting',
                '* Bags larger than A4 go in the cloakroom. There is no charge.',
                '* Photography without flash is allowed everywhere except Room 2.',
                '* Last entry is thirty minutes before closing.',
            ], 'page'),
            ('email', 'art.students@fenwick.edu', 'exhibitions@fenwickgallery.org',
             '21/11/2025', 'Room 3 — submissions for the February hang', [
                 'Dear students,',
                 '',
                 'Room 3 is rehung every six weeks and the February hang is now open',
                 'for submissions. We take eighteen works; last time we received',
                 'ninety-one.',
                 '',
                 'Send three photographs of the work, not the work itself, with its',
                 'dimensions and the medium. Anything larger than 100 x 80 cm cannot',
                 'be hung in Room 3 — the wall between the windows is the limit.',
                 '',
                 'The deadline is 12 December. We do not accept late submissions,',
                 'because the selection meeting is on the thirteenth and there is no',
                 'second one.',
                 '',
                 'Noor Haddad, Exhibitions',
             ]),
        ],
        guided=[
            ('Which room costs money to enter?',
             ('Room 1', 'Room 2', 'Room 3', 'Room 4'), 1,
             'Room 2 has an entry fee of £4, though students go free. The others are marked free '
             'or closed.'),
            ('Where can you not take photographs?',
             ('Room 1', 'Room 2', 'Room 3', 'The cloakroom'), 1,
             'Allowed everywhere except Room 2.'),
            ('Which room is on the first floor and open?',
             ('Room 2', 'Room 3', 'Room 4', 'Room 5'), 2,
             'Rooms 4 and 5 are upstairs, and Room 5 is closed until 3 December.'),
            ('How much does the cloakroom cost?',
             ('£4', '£1', 'Nothing', 'It depends on the bag'), 2,
             'There is no charge, in the same line as the bag rule.'),
        ],
        exam=[
            ('What is the main purpose of the email?',
             ('To announce a closure', 'To invite submissions for February',
              'To change the entry fee', 'To report last year’s figures'), 1,
             'The subject line and the first paragraph both say the hang is open for submissions.'),
            ('What should students send?',
             ('The work itself', 'Three photographs of the work', 'A sketch',
              'A portfolio'), 1,
             'Send three photographs of the work, not the work itself — the email rules out the '
             'obvious wrong answer.'),
            ('What is the largest work Room 3 can take?',
             ('80 x 80 cm', '100 x 80 cm', '100 x 100 cm', 'There is no limit'), 1,
             'Anything larger than 100 x 80 cm cannot be hung, because of the wall between the '
             'windows.'),
            ('Why are late submissions refused?',
             ('There is no storage', 'The selection meeting is the next day and there is no '
              'second one', 'The gallery closes in December', 'Too many were received last time'), 1,
             'The email gives that reason with because.'),
            ('What can be inferred about getting work into Room 3?',
             ('It is easy', 'It is competitive', 'It costs money',
              'It is only for first-year students'), 1,
             'Eighteen places and ninety-one submissions last time — the two numbers are given '
             'together for exactly this reason.'),
            ('A student with a large rucksack visiting on 1 December should',
             ('leave it in the cloakroom', 'carry it in Room 2', 'take it to Room 5',
              'pay £4'), 0,
             'Bags larger than A4 go in the cloakroom, free of charge. Room 5 is closed until '
             '3 December.'),
        ],
    ),

    r3=dict(
        sub='How a building is designed',
        title='How a Building Is Designed Before Anyone Builds It',
        words=270,
        paras=[
            'People imagine that an architect begins with a shape. In practice the shape is '
            'nearly the last thing decided. The first weeks of a project are spent on a document '
            'called the brief, which contains no drawings at all. It lists what the building must '
            'do: how many people, doing what, at which times of day, and what must never happen. '
            'A concert hall and a hospital may end up looking entirely different, but the reason '
            'is in the brief, not in the architect’s taste.',
            'Only then does drawing begin, and it begins small. The first sketches are often no '
            'larger than a hand, because at that size you cannot draw a detail and are forced to '
            'decide the things that matter: where the entrance is, which way the building faces, '
            'how daylight gets in. An architect who starts with a beautiful window has usually '
            'made those decisions by accident.',
            'The last stage reverses the first. Having decided what the building does and roughly '
            'what shape it takes, the team tests the shape back against the brief. Will four '
            'hundred people leave this room in ninety seconds? Does the afternoon sun fall on the '
            'screens? Is the kitchen on the same floor as the dining room, or has a corridor '
            'quietly been added to every meal for the next fifty years? Most of what makes a '
            'building pleasant to use is settled by questions of this kind, asked before any '
            'material is ordered.',
        ],
        skill=('Follow the order of the process',
               ['A passage about a process tells you the stages in order. Number them as you read.',
                'A stage that reverses an earlier one is always tested. Mark it.',
                'Rhetorical questions in a passage are the author’s examples, not the author’s '
                'doubts.',
                'The main idea usually contradicts the belief stated in the first sentence.']),
        guided=[
            ('What is the passage mainly about?',
             ('How architects learn to draw', 'The order in which a building is designed',
              'Why concert halls differ from hospitals', 'How daylight affects a room'), 1,
             'The three paragraphs are three stages, in sequence, and the passage opens by saying '
             'people get the order wrong.'),
            ('According to paragraph 1, what does the brief contain?',
             ('Drawings of the building', 'A list of what the building must do',
              'A budget', 'A list of materials'), 1,
             'It lists how many people, doing what, at which times, and what must never happen — '
             'and contains no drawings at all.'),
            ('Why are the first sketches very small?',
             ('To save paper', 'Because detail is impossible at that size',
              'Because the architect is in a hurry', 'To fit in a notebook'), 1,
             'At that size you cannot draw a detail and are forced to decide what matters.'),
            ('The word "brief" in paragraph 1 refers to',
             ('a short period of time', 'a document setting out requirements',
              'a type of drawing', 'a meeting'), 1,
             'The passage defines it in the same sentence it introduces it.'),
        ],
        exam=[
            ('What does the author say about an architect who starts with a beautiful window?',
             ('They are unusually talented', 'They have decided the important things by accident',
              'They work faster', 'They ignore the brief deliberately'), 1,
             'Paragraph 2 ends on exactly that judgement.'),
            ('What happens at the last stage?',
             ('The brief is rewritten', 'The shape is tested against the brief',
              'Materials are ordered', 'The sketches are enlarged'), 1,
             'The last stage reverses the first: the team tests the shape back against the brief.'),
            ('Why does the author mention a corridor between kitchen and dining room?',
             ('To show how long buildings last', 'To illustrate a cost hidden in a plan',
              'To explain how kitchens are designed', 'To compare two floors'), 1,
             'The corridor is quietly added to every meal for fifty years — it is an example of a '
             'small plan decision with a large permanent cost.'),
            ('All of the following are described as part of the process EXCEPT:',
             ('writing a brief', 'drawing small sketches', 'testing the shape against the brief',
              'choosing the colour of the walls'), 3,
             'Colour is never mentioned; the other three are the three stages.'),
            ('What can be inferred about the architect’s taste?',
             ('It explains most of a building’s shape', 'It matters less than the brief',
              'It is decided at the last stage', 'It is the same for every architect'), 1,
             'The reason is in the brief, not in the architect’s taste — stated at the end of '
             'paragraph 1.'),
            ('The word "settled" in paragraph 3 is closest in meaning to',
             ('decided', 'paid for', 'written down', 'moved'), 0,
             'Most of what makes a building pleasant is decided by questions asked before building '
             'begins.'),
            ('Which best states the main idea of paragraph 2?',
             ('Small drawings force the big decisions', 'Beautiful windows are a mistake',
              'Architects should draw more', 'Daylight is the most important factor'), 0,
             'The paragraph explains why drawing begins small and what that smallness achieves.'),
        ],
    ),

    l1=dict(
        sub='A gallery visit',
        caption='Two students disagree about a painting',
        skill=('Separate what is seen from what is claimed',
               ['In a discussion about art, one speaker describes and the other interprets. '
                'Keep them apart.',
                'An opinion question asks what a speaker thinks; a detail question asks what '
                'they said.',
                'Listen for concession: all right, fair enough, I suppose. It marks a change '
                'of position.',
                'The ending usually says what they will do, not what they believe.']),
        warm=[
            ('Man: Have you been to Room 3 yet?',
             ('It’s on the ground floor.', 'Not yet — is it worth it?',
              'Eighteen works.', 'Yes, it was rehung.'), 1,
             'A yes/no question; the reply answers and asks something useful back.'),
            ('Woman: Why is Room 5 closed?',
             ('Until the third of December.', 'They’re rehanging it.', 'On the first floor.',
              'Yes, it is.'), 1,
             'Why wants a reason; the first option gives a date instead.'),
            ('Man: Do you know if we have to pay?',
             ('Students go in free.', 'It’s Room 2.', 'I went last week.',
              'The cloakroom is free.'), 0,
             'An indirect question about paying; only one option answers the payment question.'),
        ],
        script=[
            ('Woman', 'I don’t get this one. It’s a grey square.'),
            ('Man', 'Look at it next to the dark panel, then look at the one on the white wall.'),
            ('Woman', 'They’re different greys.'),
            ('Man', 'They’re the same grey. Identical. The caption says so.'),
            ('Woman', 'That can’t be right. One is clearly lighter.'),
            ('Man', 'That’s the point of the piece. Your eye measures brightness by comparison, '
                    'not absolutely. The artist is showing you your own eye doing it.'),
            ('Woman', 'All right, that is quite clever. I still think the caption is doing most '
                      'of the work.'),
            ('Man', 'Maybe. Would you have noticed without it?'),
            ('Woman', 'No. But a painting that needs a paragraph to explain it is half a '
                      'painting.'),
            ('Man', 'Write that in the visitors’ book. They read it — there are quotes from it '
                    'in the next room.'),
        ],
        items=[
            ('What are the speakers looking at?',
             ('Two photographs', 'Two grey squares on different backgrounds',
              'A building plan', 'A student submission'), 1,
             'One is beside a dark panel and one on a white wall, and the man says they are the '
             'same grey.'),
            ('What does the man say about the two greys?',
             ('One is darker', 'They are identical', 'They were painted at different times',
              'The caption is wrong'), 1,
             'They’re the same grey. Identical. The caption says so.'),
            ('What is the point of the piece, according to the man?',
             ('That grey is hard to paint', 'That captions should be shorter',
              'That the eye judges brightness by comparison', 'That galleries light rooms badly'), 2,
             'He states it directly and adds that the artist is showing you your own eye doing it.'),
            ('What does the woman mean by "half a painting"?',
             ('It is unfinished', 'It depends too much on its explanation',
              'It is only half the usual size', 'It was painted by two people'), 1,
             'She has just said the caption is doing most of the work.'),
            ('What does the woman concede?',
             ('That she was wrong about the greys', 'That the piece is quite clever',
              'That captions are useful', 'That she would have noticed anyway'), 1,
             'All right, that is quite clever — followed immediately by a continuing objection.'),
            ('What does the man suggest she do?',
             ('Read the caption again', 'Look at the next room first',
              'Write her comment in the visitors’ book', 'Ask a member of staff'), 2,
             'And he gives a reason: they read it, and quotes appear in the next room.'),
        ],
    ),

    l2=dict(
        sub='A gallery visit',
        caption='An announcement about the student exhibition',
        poster=['Submissions close 12 December — no extensions',
                'Three photographs, not the work',
                'Maximum size 100 x 80 cm'],
        skill=('Catch what is refused as well as what is asked',
               ['Announcements about deadlines usually say what will not be accepted. That is a '
                'question.',
                'A reason given with because is nearly always tested.',
                'A number repeated twice is being emphasised for you. Write it down.',
                'The final sentence often tells you where to go for help.']),
        warm=[
            ('Woman: When is the deadline?',
             ('The twelfth of December.', 'Eighteen works.', 'Three photographs.',
              'In Room 3.'), 0,
             'When wants a date, and the others answer how many and where.'),
            ('Man: Can I hand it in late?',
             ('It’s in Room 3.', 'No — the meeting is the next day.',
              'Three photographs.', 'Yes, it’s open now.'), 1,
             'A can-I question wants permission, and the refusal comes with its reason.'),
            ('Woman: What size can they take?',
             ('Eighteen of them.', 'Up to a hundred by eighty.', 'In December.',
              'On the first floor.'), 1,
             'What size wants dimensions.'),
        ],
        script=[
            ('Man', 'For anyone thinking of submitting to the February hang in Room 3, four '
                    'things. First, the deadline is the twelfth of December, and it really is '
                    'the twelfth — the selection meeting is on the thirteenth and there is no '
                    'second meeting, so a late submission is simply not seen by anybody. Second, '
                    'send photographs, not work. Three photographs, with the dimensions and the '
                    'medium written underneath. We have had people carry paintings across the '
                    'city and we cannot store them. Third, size. The wall between the windows is '
                    'the limiting one, so nothing larger than a hundred by eighty centimetres. '
                    'If yours is bigger, submit anyway, but tell us, because occasionally we '
                    'move a piece to Room 4. Fourth, and this is the one people ignore: eighteen '
                    'works are chosen and last time ninety-one were submitted. If you are not '
                    'selected it means very little. Submit again in six weeks. If you want '
                    'someone to look at your photographs before you send them, Noor holds an '
                    'open hour on Wednesdays at two.'),
        ],
        items=[
            ('What is the main purpose of the announcement?',
             ('To open a new gallery', 'To explain how to submit work',
              'To announce the selected works', 'To change a deadline'), 1,
             'Four things, all of them instructions for submitting.'),
            ('Why is a late submission pointless?',
             ('The gallery closes', 'Nobody will see it', 'It costs extra',
              'The wall is full'), 1,
             'There is no second meeting, so it is simply not seen by anybody.'),
            ('What must be written under the photographs?',
             ('The artist’s name', 'The dimensions and the medium', 'The price',
              'The date of the work'), 1,
             'Three photographs, with the dimensions and the medium written underneath.'),
            ('What should a student with an oversized work do?',
             ('Not submit', 'Submit and say so', 'Cut it down', 'Wait six weeks'), 1,
             'Submit anyway, but tell us, because occasionally a piece is moved to Room 4.'),
            ('Why does the speaker give the numbers eighteen and ninety-one?',
             ('To show the gallery is small', 'To show that not being selected means little',
              'To explain the deadline', 'To compare two years'), 1,
             'He says so directly: if you are not selected it means very little.'),
        ],
    ),

    l3=dict(
        sub='How a building is designed',
        caption='A talk on form and function',
        board=['Brief → what it must do', 'Sketch → where and which way',
               'Test → does it still do it?', 'Form follows function (1896)'],
        skill=('Trace a phrase to its meaning',
               ['When a talk quotes a famous phrase, it will go on to say what the phrase does '
                'and does not mean.',
                'Listen for the correction: what he actually meant, that is not what it says.',
                'A date on the board will be used, not just mentioned.',
                'The final example usually carries the main idea.']),
        warm=[
            ('Woman: Who said form follows function?',
             ('In 1896.', 'An American architect called Sullivan.', 'It’s on the board.',
              'Yes, it’s famous.'), 1,
             'Who wants a person; the date answers when.'),
            ('Man: Does that mean beauty doesn’t matter?',
             ('No — it means beauty comes from fitness for purpose.',
              'It was said in 1896.', 'Form and function.', 'Yes, it does.'), 0,
             'A does-that-mean question wants the meaning clarified.'),
            ('Woman: Could you say the last bit again?',
             ('It’s on the board.', 'Of course — the part about the staircase?',
              'The lecture ends at four.', 'Yes, I agree.'), 1,
             'A request to repeat is answered by agreeing and checking which part.'),
        ],
        script=[
            ('Professor', 'You will all have heard the phrase form follows function. It comes '
                          'from an American architect, Louis Sullivan, writing in 1896, and it '
                          'is almost always quoted to mean that a building should be plain. That '
                          'is not what he said. Sullivan’s argument was that the shape of a '
                          'thing should grow out of what it is for, and that when it does, the '
                          'result is beautiful rather than decorated. The difference matters. A '
                          'plain box is not functional if four hundred people cannot leave it in '
                          'ninety seconds. Let me give you the example I always use. A staircase '
                          'in a public building is not sized by how it looks. It is sized by how '
                          'many people must come down it in an emergency, and that number sets '
                          'the width, which sets the depth of the stair hall, which sets the '
                          'proportion of the facade. By the time you have obeyed the fire '
                          'regulations you have designed a large part of the front of the '
                          'building. That is form following function, and nobody standing outside '
                          'it ever knows. The ones we call beautiful are usually the ones where '
                          'the architect let that happen instead of fighting it.'),
        ],
        items=[
            ('What is the main idea of the talk?',
             ('Sullivan’s phrase is usually misunderstood', 'Buildings should be plain',
              'Fire regulations are too strict', 'Staircases are the hardest part to design'), 0,
             'The speaker states the usual reading, rejects it, and spends the talk on what the '
             'phrase actually means.'),
            ('According to the speaker, what did Sullivan mean?',
             ('That decoration should be banned', 'That shape should grow out of purpose',
              'That buildings should be cheap', 'That function is more important than people'), 1,
             'The shape of a thing should grow out of what it is for.'),
            ('Why does the speaker mention four hundred people and ninety seconds?',
             ('To show that a plain box can fail to be functional',
              'To describe a fire', 'To explain how halls are measured',
              'To compare two buildings'), 0,
             'A plain box is not functional if four hundred people cannot leave it in ninety '
             'seconds — the figures exist to make that point.'),
            ('What sets the width of the staircase?',
             ('The architect’s taste', 'The height of the building',
              'The number who must leave in an emergency', 'The size of the facade'), 2,
             'It is sized by how many people must come down it in an emergency.'),
            ('What does the chain in the talk end with?',
             ('The proportion of the facade', 'The cost of the building',
              'The choice of material', 'The position of the entrance'), 0,
             'Width sets the depth of the hall, which sets the proportion of the facade.'),
            ('What does the speaker say about buildings we call beautiful?',
             ('They ignore regulations', 'They are usually old',
              'Their architects let function shape them', 'They are designed by famous people'), 2,
             'The ones we call beautiful are usually the ones where the architect let that happen '
             'instead of fighting it.'),
        ],
    ),

    sp=[
        dict(sub='Colour and the eye', focus='linking inside relative clauses',
             skill=('Do not stop before who or that',
                    ['A relative clause belongs to the noun before it. Say them as one phrase: '
                     'the_painting_that…',
                     'A pause before that makes the sentence sound like two broken ones.',
                     'Keep the voice up until the end of the clause, then let it fall.',
                     'Finish the sentence. An abandoned relative clause scores badly.']),
             repeat=['The square that looks lighter is not.',
                     'The wall that faces north gets no sun.',
                     'The students who submitted early were selected.',
                     'The colour that you see is made inside your brain.',
                     'A room that is painted in one colour looks larger than it is.',
                     'The caption that explains the piece is doing most of the work for the visitor.',
                     'The artist who made these two squares wanted you to notice your own eye measuring brightness by comparison.'],
             theme='art you like',
             qs=['To start, is there a picture or an object you particularly like?',
                 'People react to art in different ways. How do you usually react when you do '
                 'not understand a piece, and why?',
                 'Some people say that art needs no explanation and that a caption spoils it. '
                 'Do you agree? Why or why not?',
                 'Finally, should public money be spent on buying art for galleries? Why or why '
                 'not?'],
             model=[(2, 'I usually read the caption first, which some people think is cheating. '
                        'Without it I just walk past, so for me it is the opposite of spoiling '
                        'it.'),
                    (4, 'I think it should, but on living artists rather than famous dead ones. '
                        'One reason is that the money then does two things at once.')],
             selfcheck=['I said each relative clause without pausing before who or that',
                        'I finished every sentence',
                        'I gave a reason after each opinion']),
        dict(sub='A gallery visit', focus='asking politely with embedded questions',
             skill=('Ask the long way round',
                    ['Could you tell me whether… is politer than Is it…? and the test '
                     'rewards it.',
                     'After tell me / know / wonder the word order is a statement: …whether it '
                     'is free.',
                     'Never invert twice: not *do you know is it free*.',
                     'One question, asked well, is worth more than three asked quickly.']),
             repeat=['Could you tell me where Room 3 is?',
                     'Do you know whether students pay?',
                     'I was wondering if the gallery is open on Mondays.',
                     'Could you tell me whether photographs are allowed in Room 2?',
                     'Do you know how long the exhibition in Room 4 is staying?',
                     'I would like to know whether the deadline for submissions has already passed.',
                     'Could you tell me whether there is anywhere in the building where a group of us could leave our bags?'],
             theme='places you visit'  ,
             qs=['First, do you visit galleries or museums?',
                 'People find some places easy to enter and some intimidating. How do you feel '
                 'walking into a gallery, and why?',
                 'Some people argue that museums should always be free. Do you agree? Why or why '
                 'not?',
                 'Last question. Should a city spend more on a new gallery or on repairing the '
                 'one it has? Why?'],
             model=[(2, 'A little intimidated, honestly, mostly because everyone else looks as '
                        'though they know what they are doing.'),
                    (3, 'I agree, and the reason is practical rather than moral: a free museum is '
                        'somewhere you drop into for twenty minutes, and that is how people learn '
                        'to like them.')],
             selfcheck=['I used statement order after tell me and know',
                        'I did not invert twice in one question',
                        'I asked at least two full indirect questions']),
        dict(sub='How a building is designed', focus='academic register',
             skill=('Explain a consequence chain',
                    ['Use the unit’s words: design, format, contrast, intrinsic, illustrate.',
                     'Say which sets which: the number sets the width, which sets the depth.',
                     'One chain, said clearly, is a complete answer at this level.',
                     'Mark yourself against the three statements below.']),
             repeat=['A brief lists what a building must do.',
                     'The first sketches are deliberately very small.',
                     'The entrance determines how people move through the building.',
                     'Fire regulations set the width of a staircase in a public building.',
                     'The width of the stair hall sets the proportion of the front facade.',
                     'A design is tested back against the brief before any material is ordered.',
                     'Most of what makes a building pleasant to use is settled by questions asked long before anybody begins to build it.'],
             theme='buildings in your town',
             qs=['To begin, is there a building in your town that you like?',
                 'People disagree strongly about new buildings. How did people react to the last '
                 'new building where you live, and why?',
                 'Some people argue that old buildings should never be pulled down. Do you agree? '
                 'Why or why not?',
                 'Finally, who should decide what a new public building looks like — architects, '
                 'politicians, or the people who live there? Why?'],
             model=[(3, 'Not never, no. I would keep any building that still does its job, '
                        'because the alternative is a town that is only ever as old as its '
                        'last decision.'),
                    (4, 'The people who use it should set the brief, and the architect should '
                        'decide the form. That way each group decides what it actually knows '
                        'about.')],
             selfcheck=['I used at least three academic words from this unit',
                        'I explained one chain of consequences',
                        'My last answer gave an opinion, a reason and an example']),
    ],

    w1=dict(
        sub='Colour and the eye',
        skill=('The two shapes the real test uses',
               ['Eight of ten real items make a question. Two make a relative clause. This '
                'exercise is built in that ratio.',
                'Direct question: auxiliary before the subject — Is it free?',
                'Embedded question: statement order after the reporting phrase — Do you know '
                'whether it is free?',
                'Relative clause: the noun, then who or that, then the verb — no second subject.']),
        guided=[
            ('Students go into Room 2 free.',
             ['know', 'you', 'do', 'whether', 'students', 'pay'],
             'Do you know whether students pay?'),
            ('The gallery closes at five.',
             ['tell', 'can', 'you', 'me', 'when', 'the', 'gallery', 'closes'],
             'Can you tell me when the gallery closes?'),
            ('The square beside the dark panel looks lighter.',
             ['the', 'square', 'that', 'looks', 'lighter', 'is', 'not'],
             'The square that looks lighter is not.'),
        ],
        exam=[
            ('Photography is not allowed in Room 2.',
             ['know', 'you', 'do', 'if', 'photography', 'is', 'allowed'],
             'Do you know if photography is allowed?'),
            ('The deadline is the twelfth of December.',
             ['tell', 'could', 'you', 'me', 'whether', 'the', 'deadline', 'has', 'passed'],
             'Could you tell me whether the deadline has passed?'),
            ('Room 5 is closed until 3 December.',
             ['Room', 'why', 'is', '5', 'closed'],
             'Why is Room 5 closed?'),
            ('Eighteen works are chosen each time.',
             ['works', 'how', 'many', 'are', 'chosen'],
             'How many works are chosen?'),
            ('The architect who designed the hall also designed the library.',
             ['the', 'architect', 'who', 'designed', 'the', 'hall', 'designed', 'the', 'library'],
             'The architect who designed the hall designed the library.'),
            ('Students may leave bags in the cloakroom at no charge.',
             ['wondering', 'I', 'was', 'if', 'the', 'cloakroom', 'is', 'free'],
             'I was wondering if the cloakroom is free.'),
            ('The sketches are small so that detail is impossible.',
             ['know', 'do', 'you', 'why', 'the', 'sketches', 'are', 'small'],
             'Do you know why the sketches are small?'),
        ],
    ),
    w2=dict(
        sub='A gallery visit',
        to='exhibitions@fenwickgallery.org',
        date='27/11/2025',
        subject='February hang — two questions before I submit',
        scenario=[
            'You want to submit a piece to Room 3 for the February hang. Your work is 110 x 70 '
            'cm, which is wider than the stated limit of 100 x 80 cm, and it is made of three '
            'separate panels that could be hung slightly apart or close together.',
            'Write an email to the Exhibitions office.',
        ],
        bullets=['Say what you want to submit and give its dimensions.',
                 'Ask whether the size rule can be met in your case.',
                 'Ask one other question about how the work should be hung.'],
        skill=('Ask indirect questions in writing too',
               ['Could you tell me whether… reads better on the page than a bare question.',
                'Give the measurement before you ask about it, so the reader can answer in one '
                'line.',
                'Two questions, clearly separated. Do not bury the second one.',
                'Seven minutes. 110–140 words.']),
        model=[
            'Dear Ms Haddad,',
            'I would like to submit a piece to Room 3 for the February hang. It is a work in '
            'three panels, 110 x 70 cm in total, in oil on board.',
            'I can see that the limit is 100 x 80 cm, so mine is ten centimetres too wide. '
            'However, the three panels are separate, and the work reads equally well with a '
            'small gap between them or with none. Could you tell me whether the limit applies to '
            'the overall width, or to each panel? If it is the overall width, I could hang the '
            'panels touching and bring the total to 102 cm.',
            'I would also like to know whether a three-part work has to be hung on a single '
            'wall, or whether panels may turn a corner.',
            'Many thanks,',
            'Tomás Oliveira',
        ],
        notes=['The dimensions come before the question, so the reader can answer without '
               'asking for them.',
               'The writer has read the rule and says so, which stops the reply being a '
               'restatement of it.',
               'A solution is offered (102 cm, panels touching), which makes a yes easy.',
               'Both questions use the indirect form, which is the register this unit teaches '
               'and the test rewards.'],
    ),
    w3=dict(
        sub='How a building is designed',
        prof='Dr Kowalski',
        question='A city has money for exactly one project: a new public library designed by a '
                 'well-known architect, or the repair and reopening of four small branch '
                 'libraries that closed five years ago. Which should it choose, and why?',
        posts=[('Aisha', 'h',
                'The four branches, without question. A library works because it is near enough '
                'to walk to. One beautiful building in the centre serves the people who were '
                'already going to use a library; four small ones serve the people who stopped.'),
               ('Luis', 'm',
                'I would build the new one. A city needs something that makes people proud of it, '
                'and a small branch library in a shopping street does not do that. The new '
                'building will still be there in a hundred years and will bring people into the '
                'centre who would never otherwise come.')],
        skill=('Make a distinction, then decide',
               ['The two posts usually measure different things. Name what each is measuring.',
                'Then say which measure the question is actually about.',
                'Use something from the unit — here, the idea of a brief.',
                'At least 100 words in ten minutes.']),
        starters=['Aisha and Luis are measuring different things:…',
                  'The question is really about what the building is for, which is…',
                  'Luis is right that…, but that is an argument for…, not for…',
                  'On the brief as I would write it,…'],
        model=[
            'Aisha and Luis are measuring different things, and the disagreement disappears once '
            'you say which one the city is buying.',
            'Luis is measuring civic pride and permanence. Those are real, and he is right that a '
            'branch library in a shopping street will never provide them. Aisha is measuring use '
            '— how many people actually open a door. Her point about walking distance is the '
            'stronger one, because a library that is a bus ride away is a library most people '
            'will visit twice a year.',
            'We spent this unit on the brief: the document that says what a building must do '
            'before anyone draws it. If the brief says make the city proud, Luis wins. If it '
            'says get more people reading, Aisha does. For a city that has had four libraries '
            'shut for five years, the honest brief is the second one, so I would reopen the '
            'four.',
        ],
        model_words=163,
    ),

    gram=dict(
        title='Defining relative clauses · embedded questions',
        headers=['Form', 'Example'],
        rows=[
            ['who for people', 'The architect who designed the hall.'],
            ['that / which for things', 'The square that looks lighter.'],
            ['where for places', 'The room where the work is hung.'],
            ['No second subject', 'The square that it looks lighter. ✗'],
            ['Embedded: if / whether', 'Do you know whether students pay?'],
            ['Embedded: wh- word', 'Could you tell me when it closes?'],
            ['Statement order after the reporting phrase', 'Do you know where it is? (not *where is it*)'],
        ],
        notes=[
            'A defining relative clause says which one. It takes no commas: the square that '
            'looks lighter, not the square, that looks lighter.',
            'The relative pronoun replaces the subject or object, so you never repeat it. '
            'Never *the man who he came*.',
            'In an embedded question the inversion disappears. Where is it? becomes '
            'Do you know where it is?',
            'Use whether, not if, after a preposition and before to: the question of whether to '
            'go.',
        ],
        watch='Do not invert twice. *Do you know where is it?* is the single most common mistake '
              'in this part of the test. After know, tell me and wonder, use statement order.',
        ex=[
            ('Join the two sentences with who, that or where.',
             ['The architect designed the hall. She also designed the library.',
              'This is the square. It looks lighter.',
              'That is the room. The work is hung there.',
              'The students submitted early. They were selected.',
              'This is the wall. It limits the size.',
              'That is the gallery. I told you about it.'],
             ['The architect who designed the hall also designed the library.',
              'This is the square that looks lighter.',
              'That is the room where the work is hung.',
              'The students who submitted early were selected.',
              'This is the wall that limits the size.',
              'That is the gallery that I told you about.']),
            ('Make the direct question indirect.',
             ['Is the cloakroom free?  →  Do you know __________?',
              'When does the gallery close?  →  Could you tell me __________?',
              'Why is Room 5 closed?  →  I was wondering __________.',
              'Has the deadline passed?  →  Could you tell me __________?'],
             ['whether the cloakroom is free', 'when the gallery closes',
              'why Room 5 is closed', 'whether the deadline has passed']),
            ('Correct the mistake in each sentence.',
             ['Do you know where is the cloakroom?',
              'The man who he designed it is Spanish.',
              'Could you tell me does the gallery open on Monday?'],
             ['Do you know where the cloakroom is?',
              'The man who designed it is Spanish.',
              'Could you tell me whether the gallery opens on Monday?']),
        ],
        bas='This is the anchor unit for Build a Sentence. In the official practice test, '
            'Can you tell me whether the cabins will be available? and The tour guides who '
            'showed us around were fantastic are two of the ten items. Both shapes are here.',
    ),

    rev=dict(
        vocab=[
            ('a clear difference between two things', 'contrast'),
            ('belonging to the present time', 'contemporary'),
            ('the material or method an artist uses', 'medium'),
            ('the only one of its kind', 'unique'),
            ('of many different kinds', 'diverse'),
            ('to draw attention to something', 'highlight'),
            ('belonging naturally to something', 'intrinsic'),
            ('the same everywhere', 'uniform'),
            ('to introduce something new', 'innovate'),
            ('one thickness lying over another', 'layer'),
            ('the words printed beside a picture', 'caption'),
            ('a drawing of a building seen from above', 'floor plan'),
        ],
        gram=[
            ('The architect __________ designed the hall is Spanish.', 'who'),
            ('This is the square __________ looks lighter.', 'that'),
            ('That is the room __________ the work is hung.', 'where'),
            ('Do you know __________ (be) the cloakroom?', 'where the cloakroom is'),
            ('Could you tell me __________ students pay?', 'whether'),
            ('I was wondering __________ Room 5 is closed.', 'why'),
            ('The students __________ submitted early were selected.', 'who'),
            ('Could you tell me when the gallery __________ (close)?', 'closes'),
        ],
        mini=[
            ('According to the passage on page 98, the first thing an architect produces is',
             ('a sketch', 'a brief', 'a model', 'a facade'), 1,
             'The first weeks are spent on a document called the brief, which contains no '
             'drawings at all.'),
            ('In the talk, what sets the width of a public staircase?',
             ('the architect’s taste', 'the height of the building',
              'the number who must leave in an emergency', 'the width of the facade'), 2,
             'And that width then sets the depth of the hall and the proportion of the facade.'),
            ('Which sentence is correct?',
             ('Do you know where is the gallery?', 'The man who he designed it is Spanish.',
              'Could you tell me whether the cloakroom is free?',
              'This is the square what looks lighter.'), 2,
             'The others invert twice, repeat the subject, or use what where that is needed.'),
            ('A work larger than the Room 3 limit should be',
             ('not submitted', 'submitted with a note about its size', 'cut down',
              'hung in Room 2'), 1,
             'Submit anyway, but tell us — a piece is occasionally moved to Room 4.'),
            ('In Build a Sentence, the prompt sentence above the gaps',
             ('is one of the answers', 'fixes the tense and the person',
              'is always a question', 'can be ignored'), 1,
             'It is the context, and the tense of your sentence must match it.'),
            ('In a Reading module you can use Back',
             ('never', 'only on the first question', 'freely inside the module',
              'only after finishing'), 2,
             'Back works inside a module; only the move to Module 2 is one-way.'),
        ],
    ),
    tip='In Build a Sentence, read the prompt sentence above the gaps before you touch the '
        'tiles. It fixes the tense and the person, and most wrong answers in this task are '
        'grammatical sentences that simply do not follow from the prompt.',
)
