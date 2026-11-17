# -*- coding: utf-8 -*-
"""Unit 17 - Design and How It Is Judged. IELTS Volume 2, band 5.5."""

_DES = dict(kind='process',
            title='How a public building is designed and approved',
            sub='from the written brief to the decision, with the two '
                'outcomes a planning committee can reach',
            stages=[
             ('Brief', 'the council writes down what the building must '
              'do'),
             ('Feasibility', 'architects test whether the site can take '
              'it'),
             ('Design', 'drawings are produced and costed'),
             ('Public comment', 'plans are displayed for six weeks'),
             ('Application', 'the scheme is submitted to the planning '
              'committee'),
             ('Approved', 'work may begin, usually with conditions '
              'attached'),
             ('Referred back', 'the scheme returns to the design stage '
              'with reasons given')],
            phases=[('Before submission', 0, 3),
                    ('Decision', 4, 4),
                    ('Two outcomes', 5, 6)],
            alts=(6,))

UNIT = dict(
 n=17, vol=2, level='B1+', band='5.5',
 theme='Design and How It Is Judged',
 opener=(
   'This unit is about made things and the arguments people have about '
   'them: a painting competition, a sculpture nobody asked for, a public '
   'building working its way through a planning committee, and finally '
   'the oldest question in the subject, which is whether anybody is '
   'entitled to say that one design is better than another. The '
   'technique page is about a process diagram that splits in two.'),

 cycles=[
  dict(
   sub='Entering a competition',
   step=1,
   read=[
    dict(heading='The Marchfield Open: rules of entry',
         kind='Competition notice',
         task='Sentence completion, matching features and multiple choice',
         band='gt_short', qtype='Questions 1-6',
         skill=('A competition notice is read for the limits, because '
                'that is what disqualifies people',
                ['Size, date, number of works and the fee are the four '
                 'limits in almost every notice of this kind, and they '
                 'are what the questions ask about.',
                 'Watch for a rule that applies to only one category. It '
                 'is always there and it is always tested.']),
         paras=[
          'The Open is in four categories: painting, works on paper, '
          'photography and three-dimensional work. An artist may enter up '
          'to three works in total, in any combination of categories.',
          'No work may exceed 1.5 metres in any direction including its '
          'frame. Three-dimensional work may not exceed 40 kilograms, and '
          'work requiring a power supply is not accepted in any '
          'category.',
          'Work must have been completed within the last three years and '
          'must not have been exhibited previously within fifty '
          'kilometres of Marchfield. Work shown elsewhere is '
          'acceptable.',
          'The entry fee is £18 for the first work and £12 for each '
          'additional work. Entrants aged under 25 and full-time students '
          'pay half, on production of evidence at the point of entry '
          'rather than at delivery.',
          'Selected work is subject to a hanging fee of £25, which is '
          'payable only if the work is selected. This is stated clearly '
          'here because it is the commonest complaint the organisers '
          'receive.',
          'Entries close at 17.00 on 14 March. Late entries are not '
          'accepted under any circumstances, and the online system closes '
          'automatically at that time rather than being closed by a '
          'person.'],
         items=[
          ('An artist may enter up to ____________ works in total.', None,
           'three', 'Paragraph 1, in any combination of categories.'),
          ('No work may exceed ____________ metres in any direction.',
           None, '1.5', 'Paragraph 2, including the frame.'),
          ('Which work is not accepted in any category?',
           ['work over 40 kilograms', 'work needing a power supply', 'work shown in another town', 'work on paper'],
           1, 'Paragraph 2, a rule applying across all categories.',
           {0: 'The 40-kilogram limit applies to three-dimensional '
               'work only.', 2: 'Work shown elsewhere is acceptable, outside fifty '
               'kilometres.', 3: 'Works on paper are one of the four categories invited.'}),
          ('Work must not have been exhibited previously within '
           '____________ kilometres of Marchfield.', None, 'fifty',
           'Paragraph 3: work shown elsewhere is acceptable.'),
          ('The hanging fee is payable only if the work is',
           ['delivered', 'selected', 'sold', 'framed'], 1,
           'Paragraph 5, which the organisers say causes most '
           'complaints.',
           {0: 'Delivery is required of selected work but carries no '
               'fee.', 2: 'Sale of the work is not mentioned in the conditions.', 3: 'Framing counts towards the size limit, not towards '
               'this fee.'}),
          ('Entries close at ____________ on 14 March.', None, '17.00',
           'Paragraph 6, when the system closes automatically.')]),
    dict(heading='Delivery and collection of work',
         kind='Procedure notice', task='Sentence completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Deliver selected work on 2 or 3 April between 09.00 and 16.00. '
          'Work delivered on any other day is refused, because the gallery '
          'has no storage before the hanging team arrives. Delivery is at '
          'the rear entrance on Coleridge Lane and not at the main '
          'doors.',
          'Label the back of each work with your name, the title and your '
          'telephone number. Unlabelled work is accepted and is hung last, '
          'after everything labelled has been placed.',
          'Collect unselected work from 8 April. Work not collected within '
          'twenty-eight days is disposed of, and a reminder is sent on day '
          'twenty-one to the telephone number on the label.',
          'Selected work is collected after the closing date, on 2 or 3 '
          'June. The gallery does not post work in either direction and '
          'does not accept delivery by courier. A friend or relative may '
          'collect on your behalf if you tell the office in writing '
          'beforehand.'],
         items=[
          ('Work delivered on any day other than 2 or 3 April is '
           '____________.', None, 'refused',
           'Paragraph 1, because there is no storage.'),
          ('Unlabelled work is hung ____________.', None, 'last',
           'Paragraph 2, after all labelled work has been placed.'),
          ('Uncollected work is disposed of after ____________ days.',
           None, 'twenty-eight',
           'Paragraph 3, with a reminder on day twenty-one.'),
          ('The gallery does not accept delivery by ____________.', None,
           'courier', 'Paragraph 4, and does not post work either.')])],
   listen=[
    dict(heading='Entering a painting', part='Part 1',
         task='A telephone call to a competition office · note completion', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Office', 'Marchfield Open, entries.'),
          ('Artist', 'I would like to check a few things before I '
           'enter.'),
          ('Office', 'Of course.'),
          ('Artist', 'My painting is one metre forty by one metre '
           'twenty.'),
          ('Office', 'Is that with the frame?'),
          ('Artist', 'Without.'),
          ('Office', 'Then measure it with the frame. The limit is one '
           'metre fifty including the frame, and that catches people every '
           'year.'),
          ('Artist', 'The frame adds about four centimetres each side, so '
           'I am fine.'),
          ('Office', 'You are, with six centimetres to spare. Which '
           'category are you entering?'),
          ('Artist', 'Painting.'),
          ('Office', 'And how many works?'),
          ('Artist', 'Two.'),
          ('Office', 'Eighteen pounds for the first and twelve for the '
           'second, so thirty.'),
          ('Artist', 'I am a full-time student.'),
          ('Office', 'Then fifteen, and you need to upload the evidence '
           'when you enter rather than bringing it in April.'),
          ('Artist', 'Noted. One of the paintings was in a show in '
           'Harbury last year.'),
          ('Office', 'How far is Harbury?'),
          ('Artist', 'About seventy kilometres.'),
          ('Office', 'Then it is allowed. The limit is fifty kilometres '
           'and it is measured from the gallery, not from your '
           'address.'),
          ('Artist', 'And if I am selected?'),
          ('Office', 'There is a hanging fee of twenty-five pounds, and '
           'only if you are selected.'),
          ('Artist', 'That is worth knowing, and it is not very '
           'prominent on the form.'),
          ('Office', 'Everybody says that. Your entry reference is M as '
           'in mike, two eight four.'),
          ('Artist', 'M two eight four. Thank you.')],
         items=[
          ('Size of the painting: 1.40m by ____________m', None, '1.20',
           'Measured without the frame, which adds four centimetres a '
           'side.'),
          ('Category entered: ____________', None, 'painting',
           'One of the four categories offered.'),
          ('Total fee payable: £____________', None, '15',
           'Half of thirty, as the artist is a full-time student.'),
          ('Evidence of student status must be uploaded at '
           '____________.', None, 'entry',
           'Rather than brought to the gallery in April.'),
          ('The earlier exhibition was ____________ kilometres away.',
           None, 'seventy',
           'Which is outside the fifty-kilometre limit.'),
          ('Entry reference: M-____________', None, '284',
           'The entry reference is given letter by letter before '
           'goodbye.')])],
   speak=dict(
    part='Part 1', focus='Making things',
    intro=('Two or three sentences each. A specific thing you made is '
           'better than a general answer.'),
    qs=['Do you make anything with your hands?',
        'Did you do art at school?',
        'Would you like to learn a craft?',
        'Are handmade things valued where you live?'],
    shape=[('answer', 'I make furniture, badly, about twice a year.'),
           ('support', 'The last thing was a bookcase that is not '
            'square.'),
           ('follow-up', 'It holds books perfectly well, which I have '
            'decided is the only test that matters.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking the organisers to extend a deadline',
         prompt=('You want to enter a competition but cannot meet the '
                 'deadline. Write a letter to the organisers. In your '
                 'letter: say which competition you are entering; explain '
                 'why you cannot meet the deadline; ask what can be '
                 'done. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about my entry to the Marchfield Open, reference '
          'M-284, for which entries close at 17.00 on 14 March.',
          'I am writing to ask whether the deadline could be extended in '
          'my case, and I appreciate that the notice says late entries '
          'are not accepted. My reason is specific rather than general. '
          'The two works I am entering were damaged in transit from a '
          'show in Harbury on 2 March, and the restorer I have engaged '
          'cannot return them until 19 March. I have her written estimate '
          'and can forward it.',
          'If an extension is not possible, could you tell me whether '
          'either of two alternatives would be acceptable? I could enter '
          'photographs of the works by the deadline and deliver the works '
          'themselves in April, or I could substitute a third work which '
          'is undamaged and ready now.',
          'I realise the online system closes automatically, so I would '
          'be grateful for an answer before 13 March, which would allow '
          'me to enter the substitute work in time if that is the '
          'outcome.',
          'Yours faithfully,',
          'Isolde Varga-Mackenzie'],
         notes=[
          'The letter acknowledges the rule it is asking to be broken, in '
          'the same sentence as the request. A reader who sees that the '
          'writer has read the notice treats the request as a considered '
          'one rather than as carelessness.',
          'Two alternatives are offered. This is the move that makes an '
          'impossible request answerable: the reader can refuse the '
          'extension and still help, which is what usually happens.',
          'The deadline for the reply is justified by what the writer '
          'would do with the answer. "Please reply quickly" is ignored; '
          '"so that I can enter the substitute in time" is acted on.'],
         criterion=[('Acknowledging the rule while asking',
                     'Task Response'),
                    ('Offering alternatives to an impossible request',
                     'Task Achievement'),
                    ('A reply deadline with a reason attached',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Conditional requests and justification',
    explain=('Asking for an exception needs a conditional that offers '
             'the reader a way to say no and still help.'),
    examples=['I am writing to ask whether the deadline could be '
              'extended.',
              'If an extension is not possible, could you tell me whether '
              'either alternative is acceptable?',
              'I appreciate that the notice says late entries are not '
              'accepted.',
              'I would be grateful for an answer before 13 March, which '
              'would allow me to enter in time.'],
    task='Rewrite each demand as a conditional request.',
    items=[('Let me enter late.',
            'I am writing to ask whether the deadline could be extended in '
            'my case.'),
           ('I know the rules say no.',
            'I appreciate that the notice states that late entries are not '
            'accepted.'),
           ('Tell me what else I can do.',
            'If an extension is not possible, could you tell me whether '
            'either of two alternatives would be acceptable?'),
           ('Reply soon.',
            'I would be grateful for a reply before 13 March, which would '
            'allow me to enter a substitute work in time.'),
           ('My paintings were damaged.',
            'The works were damaged in transit on 2 March and the restorer '
            'cannot return them until the nineteenth.')]),
   vocab=[('disqualified', 'ruled out for breaking a rule of entry'),
          ('shortlisted', 'chosen for the final stage'),
          ('hanging fee', 'a charge for displaying selected work'),
          ('class', 'one of the divisions a competition is split '
           'into'),
          ('framed', 'fitted into a frame'),
          ('in transit', 'while being transported'),
          ('restorer', 'a person who repairs damaged work'),
          ('replacement work', 'a work entered in place of another')],
   expr=[('I am writing to ask whether the deadline could be extended',
          'the central sentence of this request'),
         ('I appreciate that the notice says late entries are not '
          'accepted', 'acknowledges the rule'),
         ('if an extension is not possible, could you tell me whether',
          'gives the reader a second way to help'),
         ('which would allow me to enter the substitute in time',
          'justifies a reply deadline')],
   trans=['furthermore', 'in addition', 'alternatively', 'in that '
          'event'],
  ),

  dict(
   sub='Public art',
   step=2,
   read=[
    dict(heading='Four residents on a new sculpture',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Ottoline: I disliked it for about a year and I now meet '
          'people under it. That is not the same as thinking it is good '
          'and I have stopped being able to tell the difference, which I '
          'suspect is what the artist intended.',
          'B  Lysander: Ninety-four thousand pounds while the library '
          'closed on Wednesdays. I have nothing against the sculpture. I '
          'have a great deal against deciding to buy it in the same year '
          'as that, and nobody at the meeting would discuss the two things '
          'together.',
          'C  Ignatia: The consultation was real. Three options, eleven '
          'weeks, a public vote. The winning option got thirty-one per '
          'cent of about four hundred votes in a town of twenty thousand, '
          'and that is what consultation produces everywhere.',
          'D  Phineas: My objection is specific and nobody wants to hear '
          'it. It is in the one spot of the square that got the afternoon '
          'sun, where the old people sat. There was a reason that bench '
          'was there and the designers never asked.'],
         items=[
          (
           'Which resident changed their view through use rather than '
           'judgement?',
           ['Ottoline', 'Lysander', 'Ignatia', 'Phineas'], 0,
           'Meeting people under it rather than deciding it is good.',
           {1: 'Lysander objects to the timing of the decision.', 2: 'Ignatia questions what a consultation actually '
               'measures.', 3: 'Phineas objects to where it was placed.'}),
          ('Which resident objects to the timing of the decision?',
           ['Ottoline', 'Lysander', 'Ignatia', 'Phineas'], 1,
           'The same year the library closed on Wednesdays.',
           {0: 'Ottoline changed their view through use rather than '
               'judgement.', 2: 'Ignatia questions what a consultation actually '
               'measures.', 3: 'Phineas objects to where it was placed.'}),
          (
           'Which resident questions what a consultation actually '
           'measures?',
           ['Ottoline', 'Lysander', 'Ignatia', 'Phineas'], 2,
           'Thirty-one per cent of four hundred votes in a town of '
           'twenty thousand.',
           {0: 'Ottoline changed their view through use rather than '
               'judgement.', 1: 'Lysander objects to the timing of the decision.', 3: 'Phineas objects to where it was placed.'}),
          ('Which resident objects to where it was placed?',
           ['Ottoline', 'Lysander', 'Ignatia', 'Phineas'], 3,
           'The spot with afternoon sun where the old people sat.',
           {0: 'Ottoline changed their view through use rather than '
               'judgement.', 1: 'Lysander objects to the timing of the decision.', 2: 'Ignatia questions what a consultation actually '
               'measures.'}),
          ('Lysander dislikes the sculpture itself.',
           ['Yes', 'No', 'Not Given'], 1,
           'He says he has nothing against the sculpture.',
           {0: 'Yes would need dislike; he says he has nothing against '
               'it.', 2: 'Not Given is wrong because he distinguishes the object '
               'from the process.'}),
          ('Ignatia believes the consultation was dishonest.',
           ['Yes', 'No', 'Not Given'], 1,
           'She calls it real and questions what consultation '
           'produces.',
           {0: 'Yes would need dishonesty; she calls the consultation '
               'real.', 2: 'Not Given is wrong because she judges it directly.'})])],
   listen=[
    dict(heading='A short talk: public art', part='Part 2',
         task='A talk to a town forum · multiple choice and sentence completion', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'I have commissioned public art for eighteen years '
           'and I am going to tell you what the arguments are actually '
           'about, because it is almost never the thing people say.'),
          ('Speaker', 'Objection one is cost, and it is nearly always '
           'comparative. Nobody says ninety thousand pounds is too much '
           'for a sculpture. They say it is too much in the year the '
           'library closed on Wednesdays, and that is a different and much '
           'better argument.'),
          ('Speaker', 'Objection two is process. People object to not '
           'being asked, and when they are asked, about two per cent '
           'reply. A consultation with four hundred responses in a town of '
           'twenty thousand is the normal result, not a failure, and both '
           'sides then quote it as though it settled something.'),
          ('Speaker', 'Objection three is the one I take most seriously '
           'and the one that gets the least attention. It is about place. '
           'The commonest real complaint is that a work occupies somewhere '
           'that was already being used for something, and the designers '
           'did not find out what.'),
          ('Speaker', 'That one is cheap to avoid. Sit in the space at '
           'four different times of day before you draw anything. We do it '
           'now as a matter of course, and it has changed the position of '
           'roughly a third of the works I have commissioned.'),
          ('Speaker', 'And the last thing, which is the most hopeful. '
           'Whether people like a work is a poor predictor of whether they '
           'defend it in ten years. What predicts that is whether they use '
           'it: meet under it, sit on it, tell visitors where it is.')],
         items=[
          ('The objection about cost is nearly always',
           ['exaggerated', 'comparative', 'late', 'anonymous'], 1,
           'Too much in the year the library closed.',
           {0: 'He does not say the figures are overstated.', 2: 'Timing is the subject of his third objection, about '
               'place.', 3: 'Anonymity belongs to the consultation, not the cost '
               'objection.'}),
          ('In a town of twenty thousand, a consultation typically '
           'produces about ____________ responses.', None, 'four '
           'hundred', 'Which he calls normal rather than a failure.'),
          ('The objection he takes most seriously concerns '
           '____________.', None, 'place',
           'A work occupying somewhere already in use.'),
          ('What predicts whether people defend a work in ten years is '
           'whether they ____________ it.', None, 'use',
           'Rather than whether they like it.')]),
    dict(heading='A council meeting on public art', part='Part 3',
         task='A discussion at a council committee · multiple choice and sentence completion', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Lysander', 'I am going to vote against, and I want to say why '
           'it is not about the sculpture.'),
          ('Ignatia', 'Say it, then.'),
          ('Lysander', 'Ninety-four thousand. The library lost Wednesdays '
           'in the same budget round. I cannot defend the first to anybody '
           'who noticed the second.'),
          ('Ignatia', 'The money is not transferable. The art budget '
           'cannot buy library hours; it is a capital grant with '
           'conditions.'),
          ('Lysander', 'Which I know, and which is the single most '
           'useless true sentence in local government.'),
          ('Ignatia', 'Why useless, if it is true?'),
          ('Lysander', 'Because nobody outside this room believes it, and '
           'we never say it until after we have been attacked. If it had '
           'been printed on the consultation leaflet, half the objections '
           'would not exist.'),
          ('Ignatia', 'That is a fair criticism of how we communicate and '
           'it is not an argument against the work.'),
          ('Lysander', 'Agreed. May I raise the thing I actually want '
           'changed?'),
          ('Ignatia', 'Go on.'),
          ('Lysander', 'The site. It goes where the sunny bench is. '
           'Phineas has written to us three times about that and nobody '
           'has replied to him.'),
          ('Ignatia', 'That I did not know, and it is exactly the kind '
           'of thing this committee is supposed to catch before it reaches '
           'a vote.'),
          ('Lysander', 'The designers never visited in the afternoon. '
           'They came in March, in the morning, twice.'),
          ('Ignatia', 'Then I would support moving it eight metres and '
           'keeping the bench, if the artist agrees.'),
          ('Lysander', 'If that is on the table I will vote for the '
           'scheme today and say so publicly.'),
          ('Ignatia', 'And I will write to Phineas myself, before the '
           'meeting rather than after it.')],
         items=[
          ('Lysander says his objection is not about the',
           ['cost', 'sculpture', 'artist', 'process'], 1,
           'But about the year in which the money was spent.',
           {0: 'Cost is exactly what he says the vote is about.', 2: 'The artist is not criticised anywhere in the meeting.', 3: 'Process is his second complaint, about the leaflet.'}),
          ('Ignatia replies that the art budget is a capital grant with '
           '____________.', None, 'conditions',
           'And cannot be used to buy library hours.'),
          (
           'Lysander calls that true sentence useless because it is '
           'never said until after they have been',
           ['funded', 'attacked', 'elected', 'audited'], 1,
           'And would have prevented half the objections.',
           {0: 'Funding is not what the sentence comes after.', 2: 'Elections are not mentioned in the exchange.', 3: 'No audit is referred to by either councillor.'}),
          ('The site he objects to is where the ____________ bench '
           'is.', None, 'sunny',
           'Which a resident has written about three times.'),
          ('The designers visited in March, in the ____________, '
           'twice.', None, 'morning',
           'Twice, and never once in the afternoon.'),
          ('Ignatia proposes moving the work ____________ metres.', None,
           'eight', 'If the artist agrees, which keeps the sunny bench '
           'where it is.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Art in public places',
    longturn=[('The work of art I want to describe is a steel sculpture of a '
               'wave standing on a roundabout at the edge of my home town, '
               'about four metres high.'),
              ('It was put there about twelve years ago, when the road was '
               'rebuilt, and it is the first thing you see arriving from the '
               'south.'),
              ('It is not a realistic wave. It is a single curved sheet of '
               'rusted steel, open at the top, and it changes completely '
               'depending on which way you drive past it, which I think is '
               'deliberate. From one side it is a wave; from the other it '
               'looks like the hull of a boat.'),
              ('What people think of it has changed, and that is the '
               'interesting part. When it went up there was a long argument in '
               'the local paper about the cost, and a petition, and somebody '
               'wrote that it looked like a scrap of metal from a skip. Nobody '
               'mentions it now except to give directions by it. Whether it '
               'belongs there, I think yes, and not because it is good, '
               'although I like it. It belongs because the town has absorbed '
               'it. It has become the place where you turn left, and I suspect '
               'that is the most any public sculpture can hope for.')],
    intro=('Short answers, then the long turn. Describe the thing before '
           'you judge it.'),
    cue=('Describe a work of art in a public place that you know.',
         ['what and where it is', 'what it looks like',
          'what people think of it',
          'and explain whether you think it belongs there']),
    qs=['Is there any public art where you live?',
        'Do people talk about it?',
        'Now look at the card. You have one minute to make notes.',
        'Should the public decide what public art is bought?'],
    shape=[('answer', 'A steel sculpture in our market square, about six '
            'metres high.'),
           ('support', 'It went up about four years ago and cost '
            'ninety-four thousand.'),
           ('follow-up', 'Most people disliked it and most people now '
            'meet under it.'),
           ('support', 'I think it belongs there and the position is '
            'wrong.'),
           ('follow-up', 'It took the one corner that got afternoon sun, '
            'which somebody would have noticed if they had visited after '
            'lunch.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should councils spend money on public art?',
         prompt=('Some people believe local councils should spend money '
                 'on public art. To what extent do you agree? Write at '
                 'least 250 words.'),
         model=[
          'I agree that councils should buy public art, and I think most '
          'of the arguments made in its favour are the wrong ones, which '
          'matters because the wrong arguments are what lose the '
          'vote.',
          'The advantages usually offered are that art improves a place '
          'and attracts visitors. The first is unprovable and the second '
          'is true only of a very small number of works. A six-metre '
          'sculpture in a market town does not bring anybody from '
          'elsewhere, and claiming that it will invites a comparison the '
          'claim cannot survive.',
          'The better argument is about use rather than beauty. In my own '
          'town a sculpture that most people disliked when it was '
          'installed is now the place people arrange to meet. Nobody has '
          'changed their mind about whether it is good; it has simply '
          'become a landmark, which is a function and not an opinion, and '
          'landmarks are useful whatever they look like.',
          'The objection that deserves an answer is about timing rather '
          'than principle. People compare ninety thousand pounds for a '
          'sculpture with a library that closed on Wednesdays in the same '
          'year, and the official reply, that the money came from a '
          'capital grant that could not pay for library hours, is true '
          'and is almost never said until after the argument has '
          'started.',
          'My conclusion is therefore that councils should continue and '
          'should change what they say. Promise a landmark rather than '
          'beauty, print the source of the money on the consultation '
          'leaflet, and visit the site in the afternoon before choosing '
          'where the thing will stand.'],
         notes=[
          'Structure 4: advantages first, then a position. This essay '
          'strengthens it by rejecting the usual advantages and '
          'substituting a better one, which gives the body paragraphs '
          'something to do.',
          'The distinction between a landmark and a judgement of quality '
          'is the idea the essay is built on, and it is carried by one '
          'concrete case from the writer’s own town.',
          'The conclusion is three specific actions rather than a '
          'restatement. At this band, ending with something a reader could '
          'do on Monday is the most reliable way to finish well.'],
         criterion=[('Rejecting the usual advantages for a better one',
                     'Task Response'),
                    ('A distinction carried by one concrete case',
                     'Task Response'),
                    ('A conclusion made of actions',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Evaluating with hedges: arguably, on any reading',
    explain=('Judgements about quality are safer and stronger when the '
             'claim is marked as a judgement rather than stated as a '
             'fact.'),
    examples=['The objection is usually to the cost rather than the '
              'work.',
              'It is arguably the most used corner of the square.',
              'On any reading, the consultation reached very few '
              'people.',
              'Whether it is good is a different question from whether it '
              'is used.'],
    task='Rewrite each flat judgement so that it is marked as one.',
    items=[('The sculpture is ugly.',
            'Most residents disliked it when it was installed, which is a '
            'fact about reception rather than about the work.'),
           ('It was a waste of money.',
            'The objection is usually to the timing of the spending rather '
            'than to the work itself.'),
           ('The consultation was pointless.',
            'On any reading, the consultation reached about two per cent '
            'of the town.'),
           ('People love it now.',
            'People now use it as a meeting place, which is not the same '
            'as having changed their opinion of it.'),
           ('Public art is good for towns.',
            'Public art arguably benefits a place by creating landmarks, '
            'though the claim about visitors is rarely supported.')]),
   vocab=[('commission', 'to order a work from an artist'),
          ('site-specific', 'made for one particular place'),
          ('public consultation', 'asking residents before deciding'),
          ('landmark', 'a thing people navigate and meet by'),
          ('capital grant', 'money given for a thing rather than for '
           'running costs'),
          ('unveiling', 'the ceremony where a work is first shown'),
          ('plinth', 'the base a sculpture stands on'),
          ('vandalism', 'deliberate damage to public property')],
   expr=[('the objection is usually to the cost rather than the work',
          'locates an argument accurately'),
         ('it is a function and not an opinion',
          'the distinction this cycle rests on'),
         ('the most useless true sentence in local government',
          'describes an answer given too late'),
         ('sit in the space at four different times of day',
          'the practical advice from the talk')],
   trans=['whereas', 'even so', 'in fairness', 'that said'],
  ),

  dict(
   sub='How a building is designed',
   step=3,
   read=[
    dict(heading='From brief to planning permission',
         kind='Process article',
         task='Matching information and flow-chart completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_DES,
         paras=[
          'The diagram sets out how a public building reaches the point '
          'at which work can start. Four stages happen before anything is '
          'submitted, one decision is taken, and that decision has two '
          'possible outcomes which are not equally final.',
          'The brief comes first and is written by the client rather than '
          'the architect. It states what the building must do: how many '
          'people, what activities, what budget. A vague brief is the '
          'commonest single cause of an expensive building, because every '
          'question it fails to answer is answered later by somebody at a '
          'higher cost.',
          'Feasibility tests whether the site can take what the brief '
          'asks for. Ground conditions, access, drainage and daylight are '
          'examined, and about one scheme in six is altered substantially '
          'at this stage. It is the cheapest point at which to discover a '
          'problem.',
          'Design then produces drawings and a cost. Public comment '
          'follows: the plans are displayed for six weeks, and anybody may '
          'write in. Comments are published and the planning committee '
          'must have regard to them, which is a weaker requirement than '
          'most people assume.',
          'The application is then decided. If it is approved, work may '
          'begin, usually with conditions attached about hours of work, '
          'materials or landscaping. If it is referred back, the scheme '
          'returns to the design stage with written reasons, and may be '
          'resubmitted as often as the applicant wishes.',
          'That asymmetry is worth noticing. Approval ends the process '
          'and referral does not: a refused scheme is a delayed scheme '
          'rather than a dead one, which is why determined applicants '
          'usually succeed eventually and why objectors who win once '
          'frequently find themselves objecting again.'],
         items=[
          ('Which paragraph explains why a vague brief is expensive?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1,
           'Questions it fails to answer are answered later at higher '
           'cost.',
           {0: 'Paragraph 1 only counts the stages and the outcomes.', 2: 'Paragraph 3 describes the stage at which problems are '
               'cheapest to find.', 3: 'Paragraph 4 covers design, costing and public comment.'}),
          (
           'Which paragraph describes the stage at which problems are '
           'cheapest to find?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1, 'Feasibility, where one scheme in six is altered.',
           {0: 'Paragraph 2 explains why a vague brief is expensive.', 2: 'Paragraph 4 covers design, costing and public comment.', 3: 'Paragraph 5 describes the decision and its two '
               'outcomes.'}),
          (
           'Which paragraph explains why the two outcomes are not '
           'equal?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 3'],
           2, 'Approval ends the process and referral does not.',
           {0: 'Paragraph 4 covers design, costing and public comment.', 1: 'Paragraph 5 names the two outcomes without comparing '
               'them.', 3: 'Paragraph 3 describes the stage at which problems are '
               'cheapest to find.'}),
          ('The ____________ is written by the client rather than the '
           'architect.', None, 'brief',
           'Paragraph 2, stating what the building must do.'),
          ('Plans are displayed for public comment for ____________ '
           'weeks.', None, 'six',
           'Paragraph 4, and comments are published.'),
          ('A scheme that is referred back returns to the ____________ '
           'stage.', None, 'design',
           'Paragraph 5, with written reasons given.')])],
   listen=[
    dict(heading='An architect on the design stages', part='Part 4',
         task='A lecture on how buildings get approved · flow-chart completion and multiple choice', band='l4',
         qtype='Questions 39-44',
         figure=_DES,
         script=[
          ('Architect', 'This diagram has seven boxes and one of them is '
           'worth more than the other six put together, and it is not the '
           'one students pick when I ask them. I am going to keep you '
           'waiting for it until the end.'),
          ('Architect', 'Brief first, and the brief is written by the '
           'client, not by us. What the building must do. Numbers, '
           'activities, money. Every question a brief leaves open gets '
           'answered later by somebody more expensive, and that is where '
           'buildings go wrong, not in the design.'),
          ('Architect', 'Feasibility. Can this site take that? Ground, '
           'access, drainage, light. About one scheme in six changes '
           'substantially here, and this is the cheapest place in the '
           'whole process to find out you were wrong.'),
          ('Architect', 'Design and costing, then public comment: six '
           'weeks on display, anybody may write. The committee must have '
           'regard to the comments. Have regard to. Not follow. People '
           'discover the difference between those two phrases at the '
           'meeting, which is the worst possible moment.'),
          ('Architect', 'Then the decision, and here is the box that '
           'matters. Approved means work can start, with conditions. '
           'Referred back means the scheme goes to design again, with '
           'reasons, and can come back as often as the applicant can '
           'afford.'),
          ('Architect', 'So the two outcomes are not symmetrical at all. '
           'Approval is final. Refusal is a delay. A determined applicant '
           'with money wins eventually in most cases, and the objectors '
           'who celebrated in year one are writing the same letters in '
           'year four with fewer people.'),
          ('Architect', 'Which is why, if you ever object to anything '
           'that is going to be built near you, the stage at which to do it '
           'is the brief. By the time there are '
           'drawings you are arguing about a drawing. At the brief you are '
           'arguing about what the building is for, and almost nobody '
           'turns up.')],
         items=[
          ('The brief is written by the ____________ rather than the '
           'architect.', None, 'client',
           'Stating numbers, activities and money.'),
          ('About one scheme in ____________ changes substantially at '
           'feasibility.', None, 'six',
           'Which he calls the cheapest place to discover an error.'),
          (
           'The committee must have regard to public comments, which '
           'he stresses does not mean',
           ['publish', 'follow', 'record', 'answer'], 1,
           'A distinction people discover at the meeting.',
           {0: 'Publication of the comments happens in any case.', 2: 'Recording the comments is not what the phrase is '
               'confused with.', 3: 'Answering each comment is not required at any stage.'}),
          ('A scheme that is referred back can return as often as the '
           'applicant can ____________.', None, 'afford',
           'Which is why a refusal is a delay rather than an ending.'),
          ('He says the stage at which to object is the',
           ['design', 'brief', 'application', 'appeal'], 1,
           'Because that is where the purpose is decided.',
           {0: 'By the design stage you are arguing about a drawing.', 2: 'At application the drawings already exist.', 3: 'No appeal stage is described in the lecture.'}),
          ('At the brief stage, he says, almost nobody ____________.',
           None, 'turns up',
           'Although that is where the argument can still be won.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Buildings that work and buildings that do not',
    intro=('The long turn first. A minute of notes, then one to two '
           'minutes, and the examiner closes it with a short question or '
           'two. Then the discussion: four or five sentences. Describe the '
           'mechanism, not just the opinion.'),
    cue=('Describe a building you find uncomfortable to be in.',
         ['where it is',
          'what it is used for',
          'what is wrong with it',
          'and explain how you would change it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Do other people say the same?',
        'Has anything been done about it?',
        'What makes a building work well for the people in it?',
        'Should the public be consulted about new buildings?',
        'Why do some new buildings become unpopular?',
        'Who should decide what gets built?'],
    shape=[('answer', 'Mostly whether the brief was written '
            'properly.'),
           ('support', 'The brief says what the building has to do, '
            'before anybody draws anything.'),
           ('follow-up', 'Every question it leaves open is answered '
            'later and costs more.'),
           ('support', 'Consultation happens much too late to fix '
            'that.'),
           ('follow-up', 'By then you are arguing about a drawing rather '
            'than about what the building is for.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='How a public building is designed and approved',
         prompt=('The diagram below shows how a public building is '
                 'designed and approved. Summarise the information by '
                 'selecting and reporting the main features. Write at '
                 'least 150 words.'),
         figure=_DES,
         model=[
          'The diagram shows the seven stages through which a public '
          'building passes between the writing of a brief and the start '
          'of construction. Overall, the process divides into four stages '
          'before submission and a single decision, which produces two '
          'outcomes that are not equivalent: one ends the process and the '
          'other returns it to an earlier stage.',
          'In the first phase the client writes a brief setting out what '
          'the building must do. Architects then test the site in a '
          'feasibility study, after which drawings are produced and '
          'costed, and the plans are displayed for public comment over a '
          'period of six weeks.',
          'The scheme is then submitted to the planning committee, which '
          'reaches one of two decisions.',
          'If the application is approved, work may begin, normally with '
          'conditions attached. If it is referred back, the scheme does '
          'not end: it returns to the design stage with written reasons, '
          'from which it may pass again through the later stages and be '
          'resubmitted.'],
         notes=[
          'The Overall statement names the branch and says the two arms '
          'are not equivalent. A process diagram that ends in two outcomes '
          'is always asking whether the candidate noticed that the '
          'branches differ.',
          'The loop back is reported explicitly: a referred scheme returns '
          'to design and may pass through the later stages again. '
          'Describing a diagram with a loop as though it were a straight '
          'line is the commonest error on this task type.',
          'The verbs are passive and sequential throughout — is written, '
          'are produced, are displayed, is submitted — which is what the '
          'register of a process description requires.'],
         criterion=[('An Overall statement naming the unequal branch',
                     'Task Achievement'),
                    ('The loop back reported, not flattened',
                     'Task Achievement'),
                    ('Passive and sequential throughout',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Passive sequence with a conditional branch',
    fix=dict(
     text=('The glass is first washed and then it is inspecting. If a piece is '
           'cracked, it is removed from the line. Otherwise, the glass is '
           'passing to the furnace, where it is heated to 600 degrees. After '
           'it has cooled, the sheets are cut, and any piece which fails the '
           'second check are returned to the furnace.'),
     faults=[('then it is inspecting',
              'then it is inspected',
              'The glass does not inspect. The passive is it is inspected.'),
             ('the glass is passing to the furnace',
              'the glass is passed to the furnace',
              ('Is passing means it is doing the passing. The passive is is '
               'passed.')),
             ('any piece which fails the second check are returned',
              'any piece which fails the second check is returned',
              ('The subject is any piece, which is singular, so the verb is is '
               'returned.'))]),
    explain=('A process with two outcomes needs the passive for the '
             'sequence and a conditional for the branch, kept in that '
             'order.'),
    examples=['Once the design is costed, the plans are displayed for six '
              'weeks.',
              'If permission is refused, the scheme returns to the design '
              'stage.',
              'The application is then decided, and one of two outcomes '
              'follows.',
              'Only then may work begin, usually with conditions '
              'attached.'],
    task='Join each pair using a passive sequence and a conditional '
         'where needed.',
    items=[('The client writes the brief. Architects test the site.',
            'Once the brief has been written by the client, the site is '
            'tested in a feasibility study.'),
           ('Plans go on display. People comment.',
            'The plans are displayed for six weeks, during which comments '
            'may be submitted by anybody.'),
           ('The committee refuses. The scheme goes back.',
            'If the application is refused, the scheme is returned to the '
            'design stage with written reasons.'),
           ('The committee approves. Work starts.',
            'If the application is approved, work may begin, normally with '
            'conditions attached.'),
           ('They can apply again.',
            'A referred scheme may be resubmitted as often as the '
            'applicant chooses.')]),
   vocab=[('brief', 'a written statement of what is required'),
          ('feasibility study', 'a test of whether something can be '
           'done'),
          ('planning permission', 'official approval to build'),
          ('referred back', 'sent back for further work'),
          ('conditions attached', 'requirements added to an approval'),
          ('scheme', 'a proposed building project'),
          ('drainage', 'how water is carried away from a site'),
          ('resubmit', 'to apply again after a refusal')],
   expr=[('if permission is refused, the scheme returns to the design '
          'stage', 'the conditional branch in one sentence'),
         ('approval is final; refusal is a delay',
          'names the asymmetry'),
         ('have regard to, not follow',
          'a distinction people learn too late'),
         ('the stage to object at is the brief',
          'the practical advice of this cycle')],
   trans=['once', 'if', 'only then', 'at that point'],
  ),

  dict(
   sub='What makes a design good',
   step=3,
   read=[
    dict(heading='Function, cost and the people who use it',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'Asking whether a building is good turns out to be three '
          'questions wearing one coat, and most disagreements about '
          'architecture are disagreements about which of the three is '
          'being asked. Separating them does not settle anything, and it '
          'makes it possible to find out what the argument is actually '
          'about, which is a more useful outcome than it sounds.',
          'The first question is whether the building does what it was '
          'built for. This is answerable, and it is answered far less '
          'often than it could be. Studies that return to a building a '
          'year after opening and ask the people inside are cheap to run '
          'and are commissioned for perhaps one building in twenty. The '
          'proportion is lower still for schools and hospitals, where the '
          'consequences of a poor plan are felt daily by people who have '
          'no choice about being there.',
          'Where they are run, they find the same faults repeatedly: '
          'rooms too hot in summer, nowhere to store anything, corridors '
          'where people cannot pass, and doors that open the wrong way for '
          'a person carrying something. These are design decisions and '
          'they are visible in the drawings to anybody who looks for '
          'them. The consistency of the findings is itself the most '
          'damaging part of the evidence, because it shows that the faults '
          'are not accidents of one project.',
          'The second question is whether the building was worth its '
          'cost, and this is harder, because the cost of a building is '
          'mostly not its construction. A public building typically costs '
          'four to five times its construction price over sixty years, in '
          'heating, cleaning, repair and staff, and a design decision that '
          'saves money at the start frequently raises that figure by more '
          'than it saved.',
          'Glass is the standard example. A heavily glazed building is '
          'cheaper to build than a comparable one in masonry and costs '
          'considerably more to heat, cool and clean for as long as it '
          'stands. The decision is taken by a client with a construction '
          'budget and lived with by a client who has a running budget, '
          'and these are frequently not the same people, nor even in the '
          'same department. Nobody in the sequence has a reason to count '
          'the sixty-year figure.',
          'The third question is whether the building is any good as '
          'architecture, and it differs from the first two in kind rather '
          'than in difficulty. There is no measurement that settles it, '
          'the people who have studied longest disagree about particular '
          'cases, and a judgement that commands agreement in one decade '
          'is routinely reversed in the next. The buildings demolished as '
          'eyesores in one generation are the buildings campaigned for in '
          'the following one.',
          'What follows is not that the third question should be ignored. '
          'It is that it should not be answered first. A building that '
          'fails the first two questions is a bad building whatever its '
          'appearance, and a surprising proportion of celebrated '
          'buildings have never been asked either of them.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['The three questions', 'Does it do its job?', 'What it costs over time', 'Judgement and taste'],
           1, 'Studies commissioned for one building in twenty.',
           {0: 'The three questions are set out in paragraph 1.', 2: 'Cost over time is paragraphs 4 and 5.', 3: 'Judgement and taste are paragraph 6, the third '
               'question.'}),
          ('Choose the best heading for paragraph 5.',
           ['Repeated faults', 'Glass as the standard example', 'Two different clients', 'The third question'],
           1, 'Cheaper to build and more expensive to run.',
           {0: 'The repeated faults are paragraph 3, from the studies.', 2: 'Two clients is part of this paragraph, not its '
               'subject.', 3: 'The third question is paragraph 6, about architecture.'}),
          ('Choose the best heading for paragraph 7.',
           ['Why the third question matters', 'Why it should not be answered first', 'Post-occupancy studies', 'Running costs'],
           1,
           'A building failing the first two is bad whatever it looks '
           'like.',
           {0: 'Paragraph 6 is where the third question is described.', 2: 'The studies are paragraphs 2 and 3.', 3: 'Running costs are paragraphs 4 and 5.'}),
          (
           'The writer believes the question of appearance should be '
           'ignored.', ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph says the opposite, with a '
           'qualification.',
           {0: 'Yes would need dismissal; the final paragraph keeps '
               'it, with a condition.', 2: 'Not Given is wrong because appearance is addressed at '
               'the end.'}),
          (
           'The writer believes studies of buildings in use are '
           'expensive.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 calls them cheap to run.',
           {0: 'Yes would need expense; paragraph 2 calls them cheap.', 2: 'Not Given is wrong because their cost is stated.'}),
          ('Studies returning to a building after opening are '
           'commissioned for about one building in ____________.', None,
           'twenty', 'Paragraph 2, despite being inexpensive.'),
          ('A public building typically costs ____________ to five times '
           'its construction price over sixty years.', None, 'four',
           'Paragraph 4, in heating, cleaning, repair and staff.'),
          ('The decision about glazing is taken by a client with a '
           'construction budget and lived with by one with a '
           '____________ budget.', None, 'running',
           'Paragraph 5, and these are often different people.')])],
   listen=[
    dict(heading='A lecture on design and use', part='Part 4',
         task='A lecture on judging buildings · sentence completion and multiple choice', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'When somebody asks whether a building is good, '
           'they are asking one of three questions and they do not know '
           'which. Most architectural argument is two people answering '
           'different ones at each other.'),
          ('Lecturer', 'Question one: does it do its job? That is '
           'answerable. Go back a year after it opens and ask the people '
           'inside. It costs almost nothing and it is commissioned for '
           'about one building in twenty.'),
          ('Lecturer', 'And when it is done, the same answers come back '
           'every single time, in every country I have seen the figures '
           'for. Too hot in summer. Nowhere to put anything. '
           'Corridors you cannot pass in. Doors that open the wrong way '
           'when your hands are full. Every one of those was visible in '
           'the drawings.'),
          ('Lecturer', 'Question two: was it worth the money? Harder, '
           'because construction is the small part. Over sixty years a '
           'public building costs four to five times its build price in '
           'heat, cleaning, repair and the people who run it.'),
          ('Lecturer', 'Glass is the example I use. Cheaper to build than '
           'masonry, much more expensive to heat, cool and clean, forever. '
           'And the person who chooses it has a construction budget while '
           'the person who pays for it has a running budget, and in most '
           'public bodies those two people have never met.'),
          ('Lecturer', 'Question three: is it good architecture? No '
           'measurement settles that. The people who have looked longest '
           'disagree with one another about particular buildings, and the '
           'judgements reverse every generation or so. What one generation '
           'pulls down as an eyesore, the next one campaigns to '
           'protect.'),
          ('Lecturer', 'My point is not that question three is '
           'worthless. It is that it should be third. A building that '
           'fails one and two is a bad building however it photographs, '
           'and a depressing number of famous buildings have never been '
           'asked either.')],
         items=[
          ('He says most architectural argument is two people answering '
           'different ____________.', None, 'questions',
           'Of the three the word good conceals.'),
          (
           'Studies of buildings in use are commissioned for about one '
           'building in', ['five', 'ten', 'twenty', 'fifty'],
           2, 'Although they cost almost nothing.',
           {0: 'More often than the lecture reports for such studies.', 1: 'Still more often than the figure he gives.', 3: 'Rarer than the proportion he names.'}),
          ('He says every fault those studies find was visible in the '
           '____________.', None, 'drawings',
           'Heat, storage, corridors and doors.'),
          ('Over sixty years a public building costs four to five times '
           'its build price in heat, cleaning, repair and the people who '
           '____________ it.', None, 'run',
           'Which is why construction is the small part.'),
          (
           'In most public bodies, the person who chooses the glazing '
           'and the person who pays to run it have never',
           ['agreed', 'met', 'visited', 'published'], 1,
           'One holds a construction budget and the other a running '
           'budget.',
           {0: 'Agreement is not what he says is missing between them.', 2: 'Visiting the building is not the gap he describes.', 3: 'Publication is not mentioned in connection with the '
               'two budgets.'}),
          ('His conclusion is that the question about architecture should '
           'be ____________.', None, 'third',
           'Asked third rather than ignored altogether.')])],
   speak=dict(
    part='Part 2 into Part 3', focus='Judging a design',
    intro=('Work the card first: a minute of notes, the long turn, then '
           'the one or two questions that round it off. The discussion '
           'after that: four or five sentences. Try once to separate two '
           'questions people run together.'),
    cue=('Describe a new building in your town or city.',
         ['where it is',
          'what it is for',
          'what it looks like',
          'and explain whether you like it']),
    qs=['Now look at the card. You have one minute to make notes.',
        'What was there before?',
        'Who do you think chose the design?',
        'How should we judge whether a building is good?',
        'Do architects listen enough to the people who use buildings?',
        'Is the appearance of a building important?',
        'Should cost decide what gets built?'],
    shape=[('answer', 'By asking three separate questions rather than '
            'one.'),
           ('support', 'Does it do its job, was it worth the money, and '
            'is it good architecture.'),
           ('follow-up', 'The first is answerable and almost nobody '
            'asks it.'),
           ('support', 'A year after opening you can simply ask the '
            'people inside.'),
           ('follow-up', 'And the faults they report were all visible in '
            'the drawings, which is the part I find hard to '
            'forgive.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should the public choose what is built?',
         prompt=('Should the public decide what public buildings look '
                 'like? Brainstorm ten ideas, then write the plan and '
                 'check each heading against the question actually '
                 'asked. Twelve minutes.'),
         plan=('The public should decide what a public building is for '
               'and should not decide what it looks like, because the '
               'first question is one they alone can answer and the '
               'second is one no vote can settle',
               [('The public alone can answer the question about '
                 'purpose',
                 ['the brief states what the building must do and is '
                  'written before any drawing',
                  'faults found after opening are failures of purpose, '
                  'not of appearance']),
                ('A vote cannot settle the question about appearance',
                 ['consultations reach about two per cent of a town',
                  'judgements of appearance reverse within a '
                  'generation'])]),
         notes=[
          'The thesis answers the question by dividing it: yes to one '
          'half, no to the other. On a question containing the word '
          '"should", dividing it is almost always available and almost '
          'always stronger than choosing a side.',
          'Each heading is matched to the question rather than to the '
          'topic. "Architects are well trained" is about the topic and '
          'answers nothing about who should decide.',
          'The supports are evidence from this unit: the brief, the '
          'post-opening studies, the two per cent, the reversal of '
          'judgements. A plan built from four facts is quick to write '
          'from.'],
         criterion=[('A thesis that divides the question',
                     'Task Response'),
                    ('Headings matched to the question, not the topic',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Separating questions that share a word',
    explain=('When one word hides several questions, the sentence has to '
             'name which is being asked and what would answer it.'),
    examples=['Whether it works and whether it is beautiful are different '
              'questions.',
              'The first is answerable by asking the people inside.',
              'No measurement settles the third.',
              'A building that fails the first two is bad whatever it '
              'looks like.'],
    task='Rewrite each sentence so that the question being asked is '
         'named.',
    items=[('It is a bad building.',
            'The building fails the first question: the people inside '
            'report that it does not do what it was built for.'),
           ('It was too expensive.',
            'The building was cheap to construct and expensive to run, '
            'which is a judgement about cost over its life.'),
           ('People do not like it.',
            'Opinion of its appearance is unfavourable, which is the one '
            'question no measurement settles.'),
           ('The architect was wrong.',
            'The faults reported after opening were visible in the '
            'drawings, which is a failure of design rather than of '
            'taste.'),
           ('Both sides disagree.',
            'The two parties are answering different questions, one about '
            'function and one about appearance.')]),
   vocab=[('post-opening study', 'a check on a building once it is in '
           'use'),
          ('fit for purpose', 'doing the job it was built for'),
          ('running cost', 'what it costs to operate a building'),
          ('glazing', 'the glass in a building'),
          ('masonry', 'construction in brick or stone'),
          ('circulation', 'how people move through a building'),
          ('daylight', 'natural light reaching the inside'),
          ('store room', 'a space for keeping things out of the way')],
   expr=[('three questions wearing one coat',
          'names the structure of the argument'),
         ('it should not be answered first',
          'orders the three questions'),
         ('a client with a construction budget and a client with a '
          'running budget', 'explains a recurring bad decision'),
         ('every one of those was visible in the drawings',
          'locates a failure precisely')],
   trans=['in particular', 'more importantly', 'consequently',
          'by comparison'],
  ),

  dict(
   sub='Whether beauty can be judged',
   step=4,
   read=[
    dict(heading='Taste, training and the limits of agreement',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and sentence completion',
         band='acad', qtype='Questions 59-66',
         paras=[
          'If judgements about how a building looks are merely personal, '
          'then an architect’s opinion carries no more weight than '
          'anybody else’s and public buildings should be chosen by vote. '
          'If such judgements can be better or worse, then training '
          'matters and the vote is a poor instrument. Almost everybody '
          'argues as though the answer were obvious, and the evidence is '
          'more interesting than either position.',
          'Start with what experts agree about. Trained architects and '
          'untrained members of the public describe buildings very '
          'similarly: asked what a building is made of, how tall it is, '
          'what it resembles, the two groups give nearly identical '
          'answers. Disagreement appears only at the point of evaluation, '
          'which is a narrower disagreement than the usual argument '
          'suggests, and it means the two sides are at least looking at '
          'the same object.',
          'Where they differ most reliably is in prediction. Architects '
          'asked which of several buildings will be admired in thirty '
          'years agree with each other more than the public does, and the '
          'few studies that have followed this up find that they are also '
          'more often right. The studies are small, there are not many of '
          'them, and they point the same way, which is about as much as '
          'this field has to offer.',
          'That finding is weaker than it sounds, for a reason supporters '
          'of expertise rarely acknowledge. Architects influence which '
          'buildings are admired later, through what they publish, teach '
          'and give awards to. A prediction that helps to bring about its '
          'own fulfilment is not straightforward evidence of insight.',
          'There is also a finding that embarrasses the other side. '
          'Public preference measured by vote and public preference '
          'measured by use frequently disagree. The buildings people say '
          'they dislike are not the buildings they avoid, and in several '
          'documented cases the most disliked building in a town was also '
          'its most used meeting point. The gap between the two measures '
          'is wider for recent buildings than for old ones.',
          'This matters for the policy question, because a vote measures '
          'the first kind of preference and a building has to serve the '
          'second. Asking people which design they prefer and then '
          'building it does not guarantee that they will use it, and in a '
          'few studied cases the design that won the vote was the one that '
          'drew the fewest people once it stood.',
          'The conclusion available from the evidence is narrower than '
          'either camp would like. Expert agreement is not proof, and '
          'public preference is not either, and anybody arguing from one '
          'of them alone is arguing from the weaker half of the record. '
          'What can be said is that the question nobody disputes, whether '
          'a building works for the people in it, is answerable by asking '
          'them, and that it is the question asked least often.'],
         items=[
          (
           'Which paragraph says the two groups describe buildings '
           'similarly?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1, 'Disagreement appears only at evaluation.',
           {0: 'Paragraph 1 sets out the two positions people take.', 2: 'Paragraph 3 is about prediction, where the groups '
               'differ.', 3: 'Paragraph 4 weakens the evidence for expertise.'}),
          ('Which paragraph weakens the evidence for expertise?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           1, 'A prediction that helps bring about its own fulfilment.',
           {0: 'Paragraph 3 reports the finding that favours '
               'expertise.', 2: 'Paragraph 5 reports that stated and actual preference '
               'disagree.', 3: 'Paragraph 6 draws the policy consequence.'}),
          (
           'Which paragraph reports that stated and actual preference '
           'disagree?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'],
           1, 'The most disliked building being the most used.',
           {0: 'Paragraph 4 weakens the evidence for expertise.', 2: 'Paragraph 6 draws the policy consequence from that '
               'finding.', 3: 'Paragraph 7 states the narrow conclusion available.'}),
          (
           'The writer believes expert judgement is proved correct by '
           'the prediction studies.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 explains why the finding is weaker than it '
           'sounds.',
           {0: 'Yes would need proof; paragraph 4 weakens the finding.', 2: 'Not Given is wrong because the studies are '
               'interpreted.'}),
          (
           'The writer believes a public vote is a reliable guide to '
           'how a building will be used.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 says it does not guarantee use.',
           {0: 'Yes would need reliability; paragraph 6 says a vote '
               'guarantees nothing about use.', 2: 'Not Given is wrong because voting is assessed as a '
               'method.'}),
          ('The two groups disagree only at the point of '
           '____________.', None, 'evaluation',
           'Paragraph 2, having described buildings almost '
           'identically.'),
          ('Architects agree with each other more than the public does '
           'when asked to make a ____________.', None, 'prediction',
           'Paragraph 3, about what will be admired in thirty years.'),
          ('The question nobody disputes is whether a building '
           '____________ for the people in it.', None, 'works',
           'The final paragraph, and it is asked least often.')])],
   listen=[
    dict(heading='A critic and an architect disagree', part='Part 4',
         task='A recorded discussion · multiple choice and sentence completion', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Ms Abendroth is an architecture critic. Mr '
           'Oyelaran-Petit designs public buildings. Each begins with '
           'their own weakest point.'),
          ('Abendroth', 'Mine is that I write as though my judgement were '
           'a finding. It is a trained opinion. I can tell you why I think '
           'a building fails and I cannot show you that I am right, and I '
           'use a vocabulary that conceals the difference.'),
          ('Oyelaran-Petit', 'And mine is that I say the public should be '
           'consulted and I do not mean it about appearance. I mean it '
           'about use. When a consultation goes against my scheme I '
           'describe it as a failure of communication, every single '
           'time.'),
          ('Chair', 'Thank you both. So where, after those two '
           'admissions, is the disagreement between you?'),
          ('Oyelaran-Petit', 'On what a vote measures. She thinks a public '
           'vote is a weak instrument for appearance. So do I. She thinks '
           'it should therefore be advisory. I think it should decide the '
           'brief and nothing else.'),
          ('Abendroth', 'Which is a bigger concession than it sounds, '
           'because the brief decides most of the building.'),
          ('Oyelaran-Petit', 'It decides almost all of it, and nobody '
           'comes to that meeting.'),
          ('Abendroth', 'May I put the finding that troubles me most?'),
          ('Oyelaran-Petit', 'Go on.'),
          ('Abendroth', 'What people say they dislike and what they '
           'actually use do not match. In several towns the most disliked '
           'building is the one everybody meets outside. That is '
           'inconvenient for my profession and for yours.'),
          ('Oyelaran-Petit', 'It is inconvenient for the vote, mostly. It '
           'means that asking people which design they prefer does not '
           'tell you which one they will actually walk towards, and a '
           'public building exists to be walked towards.'),
          ('Abendroth', 'And that there is one question neither of us '
           'disputes: does the building work for the people inside it. '
           'Which I almost never write about.'),
          ('Oyelaran-Petit', 'And which I am almost never asked about '
           'after the opening.')],
         items=[
          (
           'The critic\u2019s own weakest point is that she writes as '
           'though her judgement were a',
           ['preference', 'finding', 'rule', 'prediction'], 1,
           'Whereas it is a trained opinion.',
           {0: 'A preference is nearer what she says it really is.', 2: 'She does not claim to state rules about buildings.', 3: 'Prediction is where architects are said to do better.'}),
          ('The architect admits that when a consultation goes against '
           'him he calls it a failure of ____________.', None,
           'communication', 'Which he admits happens every single '
           'time.'),
          ('He argues a public vote should decide the ____________ and '
           'nothing else.', None, 'brief',
           'Which the critic says is a bigger concession than it '
           'sounds.'),
          ('The finding that troubles the critic most is that what people '
           'say they dislike and what they ____________ do not match.',
           None, 'use',
           'In several towns the most disliked building is the meeting '
           'point.'),
          ('The architect says this is mainly inconvenient for the',
           ['critic', 'vote', 'client', 'committee'], 1,
           'Because preference does not predict use.',
           {0: 'She raises the finding herself, against her own '
               'profession.', 2: 'Clients are not mentioned in this exchange.', 3: 'No committee appears in the discussion.'}),
          ('The one question neither disputes is whether the building '
           '____________ for the people inside.', None, 'works',
           'Which she never writes about and he is never asked '
           'about.')])],
   speak=dict(
    part='Part 3', focus='Who decides what is good',
    sounds=[('Word boundaries move in speech, and a listener re-divides what '
             'you say: an aim and a name are the same sounds, and so are ice '
             'cream and I scream. Only rhythm separates them.'),
            ('This is why the pause matters more than the consonant. Say a '
             'design, then a design that works, keeping the a short and '
             'joining it to design, and the boundary stays where you want it.'),
            ('Practise the phrases of this unit: a public building, an urban '
             'space, a judgement about art. Each one has a join that decides '
             'whether the article is heard at all.'),
            ('Where a word ends in t or d and the next begins with y, the '
             'sounds merge: would you becomes wouldja, what you becomes '
             'whatcha. That is normal speech, not slang.'),
            ('Record yourself on who should decide what public buildings look '
             'like. Find one place where two words ran together into a third '
             'thing, and say that phrase again more slowly.')],
    intro=('Five sentences. Try once to say that two kinds of evidence '
           'both fall short.'),
    qs=['Who should decide what public buildings look like?',
        'Is expert opinion worth more than public opinion?',
        'Can taste be taught?',
        'Should buildings be chosen by vote?'],
    shape=[('answer', 'Neither group on its own, which is an unpopular '
            'answer.'),
           ('support', 'Experts agree with each other more and partly '
            'because they influence the result.'),
           ('follow-up', 'And a public vote measures what people say, '
            'not what they use.'),
           ('support', 'In several towns the most disliked building is '
            'the busiest meeting point.'),
           ('follow-up', 'So I would give the public the brief and leave '
            'appearance to people who have to defend it in '
            'writing.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should the public choose how public buildings look?',
         prompt=('Some people say the public should decide what public '
                 'buildings look like. Discuss both views and give your '
                 'own opinion. Write at least 250 words.'),
         model=[
          'The question is usually treated as a contest between expert '
          'taste and popular taste. My own view is that it is really a '
          'question about which decision is being voted on, and that the '
          'public should decide one of them and not the other.',
          'The case for public choice is democratic and practical. A '
          'public building is paid for by residents and looked at by them '
          'every day, and the people who design it mostly do not live '
          'there. Professional judgement is also less securely grounded '
          'than professionals imply: architects agree with each other '
          'about what will be admired in thirty years partly because they '
          'decide, through what they publish and reward, what gets '
          'admired.',
          'The case against is that a vote measures the wrong thing. '
          'Studies comparing what people say about buildings with what '
          'they do find that the two often disagree, and in several towns '
          'the most disliked building is also the most used meeting '
          'place. Asking people which design they prefer therefore does '
          'not tell you which they will use, which is what a public '
          'building is for.',
          'My own position divides the question. The public should decide '
          'the brief: what the building is for, who it must serve, what '
          'it must contain. That is a question only they can answer, it '
          'determines most of the building, and almost nobody attends the '
          'meeting at which it is settled. Appearance should be decided '
          'by people who must give written reasons that can be argued '
          'with.',
          'In conclusion, the vote belongs earlier in the process than '
          'anybody puts it. By the time there are drawings to vote on, '
          'the decisions that matter have already been taken, and the '
          'argument about how the building looks is the only one left.'],
         notes=[
          'Structure 3 with a third position that is a division rather '
          'than a compromise: the public decides one question and not the '
          'other. That is more useful than splitting the difference and '
          'is easier to defend.',
          'The case against the public vote rests on a genuine finding — '
          'stated preference against revealed use — rather than on '
          'distrust of the public, which is what makes it persuasive.',
          'The last paragraph says where the vote belongs rather than '
          'repeating whether there should be one. Moving an argument to a '
          'different stage of a process is a sophisticated close.'],
         model65=[
                  'Some people say the public should decide what '
                  'public buildings look like. I partly agree.',
                  'There are good arguments for this. Public buildings '
                  'are paid for by the public and lived with for '
                  'decades. People who dislike a building cannot avoid '
                  'it. A vote or a consultation also gives a decision '
                  'legitimacy, so that complaints afterwards are '
                  'weaker.',
                  'But there are problems. A public vote tends to '
                  'choose familiar designs, and some buildings that '
                  'were unpopular when built are now admired. More '
                  'importantly, appearance is only one thing a '
                  'building has to do. A building that is beautiful '
                  'but dark, cold or hard to clean will be disliked '
                  'within five years.',
                  'I think the public should be consulted about what a '
                  'building must do rather than about how it should '
                  'look. Questions about light, noise, entrances and '
                  'running costs can be answered by anybody who will '
                  'use the building, and the evidence shows these '
                  'things matter more to satisfaction than style does.',
                  ],
         gap65=[
                'It replaces the question rather than balancing it, '
                'and gives the evidence for the replacement.',
                'It reports what studies of buildings in use measure, '
                'and how cheap that measurement is, instead of '
                'appealing to it in general.',
                'It keeps the appearance question rather than '
                'dismissing it, and says the condition under which it '
                'should be asked.',
                ],
         criterion=[('A third position that divides rather than '
                     'compromises', 'Task Response'),
                    ('An objection resting on evidence, not distrust',
                     'Task Response'),
                    ('A close that relocates the decision',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Subjective and objective claims distinguished',
    explain=('A sentence is stronger when it says what kind of claim it '
             'is making and what would count as evidence for it.'),
    examples=['Expert agreement is not proof, and public preference is '
              'not either.',
              'That is a trained opinion rather than a finding.',
              'What people say they dislike and what they use do not '
              'match.',
              'Whether it works for the people inside is answerable by '
              'asking them.'],
    task='Rewrite each claim so that its kind is explicit.',
    items=[('The architects are right.',
            'Architects agree with one another more than the public does, '
            'which is not the same as being right.'),
           ('People hate it.',
            'People say they dislike it, and the same building is the '
            'town’s busiest meeting point.'),
           ('It is a beautiful building.',
            'I find it beautiful, which is a judgement no measurement '
            'settles.'),
           ('The design failed.',
            'The people who use it report that it does not do what it was '
            'built for, which is answerable evidence.'),
           ('Experts should decide.',
            'Expert judgement is better evidence about prediction and no '
            'better about preference, so what experts should decide '
            'depends on the question.')]),
   vocab=[('taste', 'a personal judgement of what is good'),
          ('trained opinion', 'a judgement formed through study'),
          ('agreement', 'the extent to which judges concur'),
          ('stated preference', 'what people say they prefer'),
          ('revealed use', 'what people actually do'),
          ('written reasons', 'a decision explained in writing'),
          ('prize', 'an honour that influences later reputation'),
          ('reverse', 'to change to the opposite judgement')],
   expr=[('expert agreement is not proof, and public preference is not '
          'either', 'the sentence this cycle is built on'),
         ('a prediction that helps bring about its own fulfilment',
          'why the expert finding is weak'),
         ('what people say they dislike and what they use',
          'names two different measures'),
         ('the vote belongs earlier in the process',
          'relocates an argument')],
   trans=['admittedly', 'and yet', 'on balance', 'in either case'],
  ),
 ],
 technique=dict(
  title='A process with a branch: following both arms',
  body=('Most process diagrams in this exam run in a straight line and '
        'are answered by describing the stages in order. A diagram that '
        'ends in two outcomes is a different task, and candidates lose '
        'marks on it in three predictable ways. The first is failing to '
        'say in the Overall statement that there is a branch at all, so '
        'the answer reads as though the process had one ending. The '
        'second is treating the two arms as equal when they are not: '
        'here, approval ends the process and referral sends the scheme '
        'back to an earlier stage, and an answer that reports both as '
        'simply "two outcomes" has missed what the diagram is for. The '
        'third is flattening a loop into a line, so that the returning '
        'arm is described as a dead end rather than as a return. Do this '
        'instead: name the branch in your Overall statement, describe the '
        'stages before it in the passive and in order, and then give each '
        'arm a sentence, with the loop explicitly reported as going back '
        'to a stage you have already named.'),
  panel=[('Name the branch in the Overall',
          'One sentence saying the process ends in two outcomes and that '
          'they differ.'),
         ('Passive and in order, before the branch',
          'Is written, is tested, are displayed, is submitted.'),
         ('Give each arm a sentence',
          'Not one sentence listing both. One each, with what follows '
          'from it.'),
         ('Report the loop as a loop',
          '"Returns to the design stage" — a stage you have already '
          'named, not a new box.')],
  task='Describe the cycle 3 diagram in 150 words, naming the branch in '
       'the Overall statement and reporting the loop.',
  qs=['Does your Overall statement mention the branch?',
      'Are the pre-branch stages in the passive and in order?',
      'Does each arm have its own sentence?',
      'Did you report the loop as a return to an earlier stage?',
      'Did you say which arm ends the process?']),
 outlining=dict(
  title='Essay to outline, on two models, then compare the plans',
  body=('Reconstructing the outline behind a finished essay is faster '
        'than writing one from scratch and teaches more, and doing it on '
        'two models at once teaches most of all. Take the two Task 2 '
        'models in this unit, from cycles 2 and 5, and write the plan '
        'each one must have had: a thesis in one sentence, two or three '
        'body headings, two supports under each. Then put the two plans '
        'side by side. You will find they share a shape that is worth '
        'noticing: both theses divide a question rather than taking a '
        'side; both have one body paragraph that concedes something; and '
        'both end with a sentence that moves the argument somewhere '
        'rather than summarising it. That shape is not a coincidence and '
        'it is not a formula either. It is what an argument looks like '
        'when the writer has decided something before beginning, and it '
        'is reproducible in twelve minutes of planning.'),
  frame=('The public should decide what a public building is for and '
         'should not decide what it looks like, because the first '
         'question is one they alone can answer and the second is one no '
         'vote can settle',
         [('The public alone can answer the question about purpose',
           ['the brief states what the building must do and is written '
            'before any drawing',
            'faults found after opening are failures of purpose, not of '
            'appearance']),
          ('A vote cannot settle the question about appearance',
           ['consultations reach about two per cent of a town',
            'judgements of appearance reverse within a generation'])]),
  task='Reconstruct the plans behind both Task 2 models in this unit and '
       'compare them.',
  qs=['What is each thesis, in one sentence?',
      'Does each thesis divide the question or take a side?',
      'Which body paragraph in each one concedes something?',
      'What does each final sentence add?',
      'What do the two plans have in common?'],
  answers=['the thesis is usually the last sentence of paragraph one',
           'both divide, which is why both can be answered in 250 words',
           'usually the one immediately before the writer’s own '
           'position',
           'a step, a relocation or a consequence; never a summary',
           'a divided thesis, a concession, and an ending that moves']),
 candos=['I can read a competition notice for the limits that '
         'disqualify',
         'I can ask for an exception while acknowledging the rule',
         'I can describe a process diagram that ends in two outcomes',
         'I can separate three questions hidden in the word good',
         'I can say that two kinds of evidence both fall short'],
 tip=('On a process diagram that branches, say in your first sentence '
      'that there are two outcomes and that they are not the same kind '
      'of ending. One stops the process; the other sends it back.'),
)
