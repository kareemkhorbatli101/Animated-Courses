# -*- coding: utf-8 -*-
"""Unit 56 - Aesthetics and Judgement. IELTS Volume 6, band 7.5."""

_AGREE = dict(kind='bar',
              title='Agreement between judges, four competitions',
              sub='agreement score 0-100 for the least agreeing pair, the '
                  'panel mean, and the most agreeing pair',
              cats=['Photography', 'Short fiction', 'Architecture',
                    'Sculpture'],
              series=[('Lowest pair', [58, 31, 72, 14]),
                      ('Panel mean', [66, 54, 76, 51]),
                      ('Highest pair', [73, 81, 79, 92])])

UNIT = dict(
 n=56, vol=6, level='C1', band='7.5',
 theme='Aesthetics and Judgement',
 opener=(
   'A chart where the averages are almost identical and the ranges are not '
   'remotely, and a Task 1 lesson that applies far beyond this subject: '
   'where a figure comes with a spread, the spread is at least half the '
   'finding. The argument that follows takes the most familiar claim in '
   'the field — that taste is purely personal — and asks what would '
   'actually follow from the disagreement everybody agrees exists.'),

 cycles=[
  dict(
   sub='Entering work for selection',
   step=2,
   read=[
    dict(heading='Open submission — criteria and process',
         kind='Competition notice',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('A competition notice is read for what the panel is '
                'instructed to do',
                ['Published criteria tell you what will be looked at. The '
                 'process section tells you how, and the two together tell '
                 'you what a submission has to survive.',
                 'Find whether judging is blind, how many judges see each '
                 'entry, and whether a single judge can advance or stop '
                 'one. Those three facts shape a submission more than the '
                 'criteria do.']),
         paras=[
          'Entries are judged against four published criteria: execution, '
          'ambition, coherence and fit with the exhibition theme. The '
          'criteria carry equal weight in the first round. In the final '
          'round the panel is instructed to weigh them as it judges '
          'appropriate to each work, and to record how it did so.',
          'All judging in the first round is blind. Entries are '
          'anonymised, stripped of any statement, and circulated with a '
          'reference number only. Judges who recognise a work are required '
          'to say so and to withdraw from scoring it, which happened in '
          'fourteen cases last year.',
          'Each entry is seen by three judges in the first round. An entry '
          'advances if two of the three score it above the threshold. No '
          'single judge can advance a work alone and no single judge can '
          'stop one, which is a change from previous years and was made '
          'after a review of score distributions.',
          'The shortlist is discussed by the full panel with the '
          'anonymisation lifted. The panel is aware that this introduces '
          'the possibility of reputation affecting the decision, and takes '
          'the view that a final judgement about fit with a theme cannot '
          'sensibly be made without knowing what else the artist has '
          'done.',
          'Feedback is provided to unsuccessful entrants on request, in '
          'the form of the scores against each criterion and any comments '
          'recorded. Comments are recorded for about a third of entries. '
          'The panel does not provide a narrative explanation and will not '
          'enter into correspondence about a judgement.',
          'An entrant may query the process but not the decision. A query '
          'about process is answered within twenty working days. The '
          'distinction is strictly applied: whether a judge who should '
          'have withdrawn did so is a process question, and whether the '
          'work deserved a higher score is not.'],
         items=[
          ('How many published criteria are used?',
           ['two', 'three', 'four', 'five'], 2,
           'Paragraph 1, carrying equal weight in the first round.'),
          ('Judges who recognise a work must say so and ____________ from '
           'scoring it.', None, 'withdraw',
           'Paragraph 2, which happened in fourteen cases last year.'),
          ('An entry advances if ____________ of the three judges score it '
           'above the threshold.', None, 'two',
           'Paragraph 3: no single judge can advance or stop a work.'),
          ('Anonymisation is lifted',
           ['never', 'for the shortlist discussion', 'after the '
            'exhibition', 'on request'], 1,
           'Paragraph 4, which the panel justifies by the theme '
           'criterion.'),
          ('Comments are recorded for about a ____________ of entries.',
           None, 'third',
           'Paragraph 5, and are supplied on request with the scores.'),
          ('An entrant may query',
           ['the decision', 'the process', 'both', 'neither'], 1,
           'Paragraph 6, a distinction the notice says is strictly '
           'applied.')]),
    dict(heading='How work is selected',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Submit through the portal with the reference number generated at '
          'registration. Work submitted by any other route is not '
          'circulated, because it cannot be anonymised reliably once it has '
          'passed through a named mailbox, and the office has no way of '
          'correcting that afterwards.',
          'Remove identifying material from the work itself and from file '
          'names, including the studio name many entrants embed in '
          'metadata. The office checks and strips what it finds, and an '
          'entry whose identity cannot be removed is held over to the '
          'non-blind category rather than refused.',
          'Expect first-round results within six weeks. Entries advancing '
          'are notified; entries not advancing are notified on the same '
          'day, which the panel adopted after a year in which unsuccessful '
          'entrants learned the outcome from the published shortlist.',
          'Request feedback within three months of the result. Scores are '
          'retained for that period and destroyed afterwards, so a '
          'request in month four is answered with an apology and nothing '
          'else, which the office regrets and cannot avoid.',
          'Entries not selected may be resubmitted to a later round '
          'without alteration, and roughly one in nine of the works '
          'eventually exhibited was rejected at least once before. The '
          'panel composition changes every two years and the office '
          'mentions the figure because entrants assume a rejection is '
          'permanent and it is not.'],
         items=[
          ('Submit through the portal using the reference number from '
           '____________.', None, 'registration',
           'Paragraph 1: other routes cannot be anonymised reliably.'),
          ('Remove identifying material from the work and from file '
           '____________.', None, 'names',
           'Paragraph 2, including studio names embedded in metadata.'),
          ('First-round results arrive within ____________ weeks.', None,
           'six',
           'Paragraph 3, with both outcomes notified on the same day.'),
          ('Request feedback within ____________ months of the result.',
           None, 'three',
           'Paragraph 4, after which scores are destroyed.')])],
   listen=[
    dict(heading='Querying a selection decision', part='Part 1',
         task='A call to a competition office', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Officer', 'Open submission office, Marguerite speaking.'),
          ('Caller', 'Hello. My entry was not selected and I would like to '
           'query it.'),
          ('Officer', 'I can help with some of that. Do you have your '
           'entry number?'),
          ('Caller', 'Seven two zero four.'),
          ('Officer', 'Seven two zero four, thank you. Now, I should say '
           'at the start that you can query the process but not the '
           'decision, and the distinction is applied strictly.'),
          ('Caller', 'What is the difference?'),
          ('Officer', 'Whether a judge who should have stood down did so '
           'is a process question and I will investigate it. Whether your '
           'work deserved a better score is not, and no amount of '
           'correspondence changes it.'),
          ('Caller', 'I think one of the judges knows my work.'),
          ('Officer', 'Then that is squarely a process question. Which '
           'judge?'),
          ('Caller', 'I would rather not name them without being sure.'),
          ('Officer', 'That is reasonable. I can tell you that first-round '
           'judging was blind and that fourteen judges withdrew from works '
           'they recognised last year, so the mechanism does operate. Can '
           'you tell me what makes you think so?'),
          ('Caller', 'My style is recognisable and I have shown in the '
           'city twice.'),
          ('Officer', 'I will log it as a process query and it will be '
           'answered within twenty working days. I will be honest that '
           '"my work is recognisable" is the commonest query we receive '
           'and the one least often upheld.'),
          ('Caller', 'Can I have feedback as well?'),
          ('Officer', 'Yes, and request it soon. Scores are kept for three '
           'months and then destroyed, so a request in month four gets '
           'nothing.'),
          ('Caller', 'What does the feedback contain?'),
          ('Officer', 'Your score against each of the four criteria, and '
           'any comments the judges recorded, which is about a third of '
           'entries.'),
          ('Caller', 'Not a written explanation?'),
          ('Officer', 'No narrative, and no correspondence about the '
           'judgement afterwards. I would rather tell you that now than '
           'have you expect a letter.'),
          ('Caller', 'Understood. How long for the feedback?'),
          ('Officer', 'Ten working days, and it comes from a different '
           'desk to the process query, so the two arrive separately.')],
         items=[
          ('Entry number: ____________', None, '7204',
           'The entry number is taken before anything else is '
           'discussed.'),
          ('An entrant may query the ____________ but not the decision.',
           None, 'process',
           'A distinction the officer says is applied strictly.'),
          ('Last year ____________ judges withdrew from works they '
           'recognised.', None, 'fourteen',
           'Offered as evidence that the mechanism operates.'),
          ('A process query is answered within ____________ working '
           'days.', None, 'twenty',
           'Logged on the basis the caller gives.'),
          ('Scores are kept for ____________ months before destruction.',
           None, 'three',
           'So a request in month four receives nothing.'),
          ('Feedback arrives within ____________ working days.', None,
           'ten',
           'From a different desk to the process query.')])],
   speak=dict(
    part='Part 1', focus='Things you find beautiful',
    intro=('Two or three sentences each. A specific thing beats a '
           'category.'),
    qs=['What kind of things do you find beautiful?',
        'Do you visit galleries or exhibitions?',
        'Do you and your friends like the same things?',
        'Has your taste changed over time?'],
    shape=[('answer', 'Buildings more than paintings, and mostly ordinary '
            'ones.'),
           ('support', 'There is a 1930s electricity substation near my '
            'flat that I stop at.'),
           ('follow-up', 'Nobody I have mentioned it to has ever noticed '
            'it, which I find reassuring rather than otherwise.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Asking for feedback on a rejected submission',
         prompt=('Your submission to a competition was unsuccessful. Write '
                 'a letter asking for feedback. In your letter: identify '
                 'the submission; say what you are asking for; explain why '
                 'it would be useful. Write at least 150 words.'),
         model=[
          'Dear Selection Office,',
          'I am writing about entry 7204, submitted to the spring open and '
          'notified as unsuccessful on 14 March.',
          'The published criteria list execution, ambition, coherence and '
          'fit with the theme, and I should value an indication of how the '
          'work scored against each of the four rather than an overall '
          'figure. I understand that comments are recorded for a minority '
          'of entries and that I may receive none; the scores alone would '
          'be useful.',
          'My reason for asking is narrow. I submitted two works from the '
          'same series to two competitions this year and they were received '
          'very differently, and I cannot tell from the outcomes whether '
          'the difference lay in the work, the theme or the panel. Four '
          'scores would distinguish between those possibilities in a way '
          'that an overall result cannot.',
          'I am not asking the panel to reconsider the decision and I do '
          'not dispute it. I am aware that the office does not enter into '
          'correspondence about judgements and this letter is not an '
          'attempt to do so.',
          'Yours faithfully,',
          'N. Ferreira-Oyelaran'],
         notes=[
          'The request names the four published criteria and asks for the '
          'breakdown rather than an explanation. Asking for something the '
          'organisation already holds in that form is far more likely to '
          'be granted than asking for something it would have to '
          'compose.',
          'The reason given is specific and diagnostic: two works, two '
          'outcomes, three possible causes. A request that explains what '
          'the information would let the writer do is answered differently '
          'from one that simply wants to know.',
          'The last paragraph closes off the reading the office is braced '
          'for. Saying plainly that this is not an appeal removes the '
          'standard reason for a defensive reply.'],
         criterion=[('Asking for what the organisation already holds',
                     'Task Achievement'),
                    ('A reason that is diagnostic rather than emotional',
                     'Task Response'),
                    ('Closing off the reading the reader is braced for',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Request for reasons with reference to criteria',
    explain=('A request that quotes the published framework is answered '
             'inside that framework. These patterns tie a request to '
             'something the reader has already committed to.'),
    examples=['The published criteria list..., and I should value an '
              'indication of...',
              'I understand that comments are recorded for a minority of '
              'entries.',
              'The scores alone would be useful.',
              'I am not asking the panel to reconsider the decision.'],
    task='Rewrite each request so that it refers to the published '
         'framework.',
    items=[('Please tell me why I was rejected.',
            'I should value the scores recorded against each of the four '
            'published criteria.'),
           ('I want a proper explanation.',
            'I understand that no narrative is provided, and the recorded '
            'scores would answer my question.'),
           ('I think the decision was wrong.',
            'I am not disputing the decision and am asking only for the '
            'information retained about the entry.'),
           ('Can somebody look at it again?',
            'I am asking whether a judge withdrew from scoring the entry, '
            'which the notice treats as a process question.'),
           ('I need this quickly.',
            'I am requesting the feedback within the three-month period '
            'after which the scores are destroyed.')]),
   vocab=[('selection panel', 'the group deciding which entries '
           'succeed'),
          ('blind judging', 'assessing work without knowing whose it is'),
          ('shortlist', 'the entries remaining after a first round'),
          ('qualifying score', 'the mark an entry must exceed to '
           'advance'),
          ('assessment report', 'what an entrant is told about how work '
           'was judged'),
          ('unsuccessful', 'not selected'),
          ('stand down', 'to withdraw from judging a particular work'),
          ('execution', 'how well something has been carried out')],
   expr=[('The published criteria list..., and I should value an '
          'indication of...', 'ties a request to a published framework'),
         ('you can query the process but not the decision',
          'states a distinction that governs what may be asked'),
         ('the commonest query we receive and the one least often upheld',
          'answers honestly without dismissing'),
         ('I would rather tell you that now than have you expect a '
          'letter', 'manages an expectation in advance')],
   trans=['furthermore', 'in this connection', 'my reason for asking',
          'I should value'],
  ),

  dict(
   sub='Agreeing about quality',
   step=4,
   read=[
    dict(heading='Four judges, one shortlist',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Hieronymus: I scored entry 7204 at the top of my list and I '
          'can tell you exactly why: the handling of the edges, which is a '
          'technical matter I could demonstrate to anybody in ten minutes '
          'whether or not they came to like it. People say taste cannot be '
          'argued about. A great deal of what I am doing when I judge is '
          'argument about things that can be pointed at.',
          'B  Perpetua: I put the same entry last and Hieronymus and I '
          'agree about almost everything in it. We both saw the edges, we '
          'both thought the theme was handled thinly, and we disagree about '
          'how much the first should count against the second. That is not '
          'a disagreement about the work. It is a disagreement about '
          'weighting, and we could both write ours down.',
          'C  Thaddeus: I have judged this competition for eleven years and '
          'I have stopped claiming that my agreement with the other judges '
          'means much. We are four people trained in three institutions, '
          'two of us taught by the same person. When we converge I now ask '
          'whether we converged because the work is good or because we '
          'were taught to look at the same things.',
          'D  Winifred, who chairs: What strikes me after thirty panels is '
          'how reliably the disagreements are about weighting rather than '
          'about what is there. In thirty years I can recall four occasions '
          'on which two judges described a work so differently that one of '
          'them must have been mistaken about the object. Four, out of '
          'thousands.'],
         items=[
          ('Which judge argues that judging involves pointing at things '
           'that can be demonstrated?',
           ['Hieronymus', 'Perpetua', 'Thaddeus', 'Winifred'], 0,
           'The handling of edges, demonstrable in ten minutes.'),
          ('Which judge describes their disagreement as being about '
           'weighting?', ['Hieronymus', 'Perpetua', 'Thaddeus',
            'Winifred'], 1,
           'Agreeing about the work and differing on what counts how '
           'much.'),
          ('Which judge questions what convergence between judges shows?',
           ['Hieronymus', 'Perpetua', 'Thaddeus', 'Winifred'], 2,
           'Four people trained in three institutions, two by the same '
           'person.'),
          ('Which judge reports how rarely judges describe a work '
           'incompatibly?',
           ['Hieronymus', 'Perpetua', 'Thaddeus', 'Winifred'], 3,
           'Four occasions in thirty years.'),
          (
           'Hieronymus and Perpetua disagree about what is present in '
           'the work.', ['Yes', 'No', 'Not Given'], 1,
           'Perpetua says they agree about almost everything in it.',
           {0: 'Yes would need disagreement; Perpetua says they agree '
               'about almost everything.', 2: 'Not Given is wrong because the extent of agreement is '
               'stated.'}),
          (
           'Thaddeus believes agreement among the judges is strong '
           'evidence of quality.',
           ['Yes', 'No', 'Not Given'], 1,
           'He says he has stopped claiming it means much.',
           {0: 'Yes would need strength; he says he has stopped '
               'claiming it means much.', 2: 'Not Given is wrong because he rates the agreement.'})])],
   listen=[
    dict(heading='A short talk: agreeing about quality', part='Part 2',
         task='A talk at a cultural policy seminar', band='l2',
         qtype='Questions 23-26',
         script=[
          ('Speaker', 'The claim I want to examine is that there is no such '
           'thing as expertise in matters of taste, and the evidence '
           'usually offered for it is that experts disagree. I think the '
           'evidence is accurate and supports almost none of what is built '
           'on it.'),
          ('Speaker', 'Start with what the disagreement is about. When two '
           'trained judges split over a work, the overwhelmingly common '
           'pattern is that they describe it almost identically and weight '
           'the same features differently. One chair with thirty years of '
           'panels recalls four occasions in her whole career on which two '
           'judges described a work so differently that one must have been '
           'mistaken about the object.'),
          ('Speaker', 'That matters because disagreement about weighting is '
           'not evidence of subjectivity in the sense the argument needs. '
           'Two engineers can agree entirely about a bridge and differ on '
           'how to weigh cost against redundancy, and nobody concludes that '
           'engineering is a matter of personal taste. The inference is '
           'blocked in exactly the same way here.'),
          ('Speaker', 'Now the other side, which I hold as firmly. '
           'Agreement among trained judges is evidence of training, not of '
           'truth. Four judges from three institutions, two of them taught '
           'by the same person, converging on a shortlist tells you '
           'something about what they were all taught to look at before it '
           'tells you anything about the work.'),
          ('Speaker', 'And the two points together produce the awkward '
           'position I actually occupy. Disagreement does not show there is '
           'nothing to know. Agreement does not show that anybody knows '
           'it. What would settle it is evidence of a kind we have very '
           'little of: whether trained judgements predict anything '
           'independent, and in the few fields where that has been tested '
           'the results are mixed.'),
          ('Speaker', 'Which is a less satisfying conclusion than either '
           'camp offers and is, I think, where the evidence actually '
           'leaves us.')],
         items=[
          ('The evidence usually offered against expertise in taste is '
           'that experts', ['are untrained', 'disagree', 'are '
            'biased', 'change their minds'], 1,
           'Which the speaker calls accurate.'),
          ('When trained judges split, they usually',
           ['describe the work differently', 'describe it almost '
            'identically and weight features differently', 'refuse to '
            'score', 'defer to the chair'], 1,
           'Four exceptions in one chair’s thirty-year career.'),
          ('The engineering comparison is used to show that',
           ['taste is like engineering', 'disagreement about weighting '
            'does not establish subjectivity', 'experts are '
            'unreliable', 'criteria are unnecessary'], 1,
           'Nobody concludes engineering is personal taste.'),
          ('He says what would settle the question is evidence about '
           'whether trained judgements',
           ['agree more often', 'predict anything independent',
            'are faster', 'are cheaper'], 1,
           'And that in the few fields tested the results are mixed.')]),
    dict(heading='Two critics disagree about a work', part='Part 3',
         task='A discussion between two critics', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Perpetua', 'You put it first and I put it last, and I want to '
           'find out whether we are disagreeing about anything.'),
          ('Hieronymus', 'Describe it and we will see.'),
          ('Perpetua', 'Technically exceptional, particularly the edges. '
           'Thematically thin — it gestures at the brief and does not '
           'engage it.'),
          ('Hieronymus', 'I would sign both of those sentences without '
           'changing a word.'),
          ('Perpetua', 'Then we agree about the work entirely.'),
          ('Hieronymus', 'We do, and I weight execution above theme and '
           'you weight theme above execution, and that is the whole of '
           'it.'),
          ('Perpetua', 'Before the weightings, one check. Did either of '
           'us see anything the other did not?'),
          ('Hieronymus', 'You noticed the join at the lower left and I '
           'did not until you said it. It did not change my ranking.'),
          ('Perpetua', 'And it did not change mine, which is the useful '
           'part: we now know the disagreement does not depend on '
           'anything either of us failed to see.'),
          ('Hieronymus', 'That is a test worth running every time and we '
           'almost never do.'),
          ('Perpetua', 'Can you defend your weighting?'),
          ('Hieronymus', 'I can give reasons for it. Technical command is '
           'rarer, takes longer to acquire, and a thin response to a theme '
           'can be fixed by a better brief next year. Whether those reasons '
           'are good is a separate question and I am not pretending they '
           'are compelling.'),
          ('Perpetua', 'Mine is that the open exists to produce work about '
           'something, and an exhibition of technically exquisite work '
           'about nothing is a failure of the exhibition even if every '
           'piece is excellent.'),
          ('Hieronymus', 'That is a better reason than mine and it is about '
           'the exhibition rather than the work.'),
          ('Perpetua', 'Which may be exactly what a selection panel should '
           'be weighing, and is not what the published criteria say.'),
          ('Hieronymus', 'Then the criteria are wrong, or at least '
           'incomplete, and we have found something more useful than who '
           'wins.'),
          ('Perpetua', 'I would put that in the panel report. Not "we '
           'disagreed" — that tells the office nothing. "We agreed about '
           'the work and discovered that the criteria do not say how to '
           'weigh execution against theme, and we each supplied a weighting '
           'the document does not authorise."'),
          ('Hieronymus', 'That sentence will annoy somebody and it is the '
           'only useful thing either of us has said today.')],
         items=[
          ('Perpetua begins by asking whether they are',
           ['disagreeing about anything', 'using the same criteria',
            'equally experienced', 'going to compromise'], 0,
           'She asks this before either of them describes the work.'),
          ('Hieronymus’s response to her description is that he',
           ['disputes the second half', 'would sign both sentences '
            'unchanged', 'needs to see it again', 'disagrees about the '
            'edges'], 1,
           'Establishing that they agree about the work.'),
          ('His reasons for weighting execution higher include that '
           'technical command is', ['more teachable', 'rarer and slower '
            'to acquire', 'easier to judge', 'more popular'], 1,
           'Reasons he declines to call compelling.'),
          ('Perpetua’s reason concerns',
           ['the artist', 'the exhibition rather than the work',
            'the public', 'the budget'], 1,
           'Which Hieronymus calls better than his own.'),
          ('They conclude that the published criteria are',
           ['correct', 'wrong or at least incomplete', 'too detailed',
            'irrelevant'], 1,
           'Because they do not say how to weigh execution against '
           'theme.'),
          ('Perpetua wants the panel report to say they',
           ['disagreed', 'agreed about the work and found the criteria '
            'silent on weighting', 'could not decide', 'need more '
            'time'], 1,
           'Because "we disagreed" tells the office nothing.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Judgement',
    longturn=[('The thing I changed my mind about is a building, a concrete '
               'lecture hall at the university where I studied, which I '
               'actively disliked for three years.'),
              ('What I thought originally was that it was ugly and arrogant. '
               'It is a windowless mass of board-marked concrete on a street '
               'of brick terraces, it is darker than everything around it, and '
               'it turns a blank wall to the pavement for about forty metres.'),
              ('What I think now is that it is the best building on that '
               'street and that I would be sorry to see it go. The exterior '
               'has not improved and I would not defend it on its own terms.'),
              ('What changed my view was learning what the inside is for, '
               'which I had used for three years without once asking. The '
               'blank wall is blank because the hall behind it seats four '
               'hundred people and was designed, in 1968, for a lecture to be '
               'audible without amplification, which is why the section is the '
               'shape it is and why there are no windows on that side. Once '
               'somebody had told me that, I could hear it: the room is '
               'extraordinarily quiet and you can speak from the floor without '
               'raising your voice. What I had been judging was the elevation, '
               'and what the building was solving was acoustics, and the '
               'elevation is the price it paid. I am still not sure the trade '
               'was right, and I am sure that I was not in a position to have '
               'an opinion about it, which is the part that has stayed with '
               'me.')],
    intro=('Short answers, then the long turn. The explanation bullet is '
           'where the band is decided.'),
    cue=('Describe something you changed your mind about.',
         ['what it was', 'what you thought originally',
          'what you think now',
          'and explain what changed your view']),
    qs=['Do you often change your opinion about things?',
        'Do other people’s opinions affect yours?',
        'Now look at the card. You have one minute to make notes.',
        'Is changing your mind a sign of weakness?'],
    shape=[('answer', 'A building near my old school that I thought was '
            'ugly.'),
           ('support', 'Concrete, 1960s, and everybody called it an '
            'eyesore.'),
           ('follow-up', 'Somebody showed me how the windows were set to '
            'catch the afternoon light.'),
           ('support', 'I could then see something I had not been able to '
            'see before.'),
           ('follow-up', 'Which makes me think taste is partly a matter of '
            'what you have been shown how to notice.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Can there be expertise in matters of taste?',
         prompt=('Some people believe there can be genuine expertise in '
                 'matters of taste; others believe taste is purely '
                 'personal. To what extent do you agree that expertise in '
                 'taste is possible? Write at least 250 words.'),
         model=[
          'There is expertise in describing a work and in giving reasons '
          'about it, and there is probably no expertise in the final '
          'verdict, and almost every argument on this subject goes wrong '
          'by treating those as one question.',
          'The case against expertise rests on disagreement among experts, '
          'which is real and is the wrong evidence. When two trained '
          'judges split over the same work, the overwhelming pattern is '
          'that they describe it almost identically and weight the same '
          'features differently. One panel chair with thirty years of '
          'experience could recall four occasions in her career on which '
          'two judges described a work so incompatibly that one must have '
          'been mistaken about the object.',
          'Disagreement of that kind does not establish what it is offered '
          'to establish. Two engineers can agree entirely about a bridge '
          'and differ on how to weigh cost against redundancy, and nobody '
          'concludes from this that engineering is a matter of personal '
          'taste. If the inference is blocked there, it is blocked here, '
          'and the blocking has nothing to do with art.',
          'The strongest point on the other side is rarely made by the '
          'people who need it. Agreement among trained judges is evidence '
          'of training before it is evidence of anything else: four judges '
          'from three institutions, two taught by the same person, '
          'converging on a shortlist have demonstrated that they were '
          'taught to look at the same things. Convergence cannot support '
          'the claim unless the judges reached their views independently, '
          'and in a field this small they rarely have.',
          'My position is therefore split along a line the question does '
          'not draw. There is clear expertise in seeing: a trained judge '
          'notices things a novice does not and can demonstrate them in '
          'ten minutes, which is what expertise means everywhere else. '
          'There is expertise in reasoning: a weighting can be defended, '
          'attacked and revised. What I see no evidence for is expertise '
          'in the verdict, because the step from "these are the features '
          'and this is how I weigh them" to "it is better" has never been '
          'shown to be one that training improves.'],
         notes=[
          'The first sentence splits the question into two and says the '
          'standard argument conflates them. Structure 11 is strongest '
          'when the circumstances are not a list of cases but a '
          'distinction the prompt failed to make.',
          'The engineering comparison does real work because the inference '
          'it blocks is formally identical. Choosing a parallel from a '
          'field nobody thinks is subjective is what makes the point hard '
          'to resist.',
          'The essay gives the other side its best argument — '
          'convergence as evidence of training — and notes that its own '
          'holders rarely make it. Supplying your opponent’s best '
          'argument is the clearest signal of a band 9 Task Response.'],
         criterion=[('Splitting a question the prompt treated as one',
                     'Task Response'),
                    ('A parallel that blocks the inference formally',
                     'Task Response'),
                    ('Supplying the opposing side’s best argument',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Qualification and scope: only, even, at least',
    explain=('Scope words decide what a sentence claims and are placed '
             'deliberately at this level. Misplacing "only" is the '
             'commonest single error in band 7 writing about evidence.'),
    examples=['Agreement among trained judges is evidence of training, not '
              'of truth.',
              'Only where judges are independent does convergence '
              'count.',
              'Even the judges who disagreed described the work '
              'identically.',
              'At least four occasions in thirty years, and probably no '
              'more.'],
    task='Rewrite each sentence so that the scope word governs the right '
         'element.',
    items=[('Judges only agree about technique.',
            'Judges agree about what is present in a work; they differ '
            'only in how they weigh it.'),
           ('Convergence only matters sometimes.',
            'Convergence is informative only where the judges reached '
            'their views independently.'),
           ('Even experts disagree.',
            'Disagreement occurs even among judges who describe the work '
            'in identical terms.'),
           ('There were at least four cases.',
            'Four cases arose in thirty years, which is the upper figure '
            'the chair was prepared to give.'),
           ('Only training explains it.',
            'Shared training explains part of the convergence, and nothing '
            'in the data separates that part from the rest.')]),
   vocab=[('convergence', 'independent judges reaching the same view'),
          ('trained eye', 'the capacity to notice what a novice misses'),
          ('relative weight', 'how much each criterion counts against '
           'the others'),
          ('coherence', 'how well the parts of a work hold together'),
          ('ambition', 'the difficulty of what a work attempts'),
          ('house style', 'a way of working characteristic of a school'),
          ('craft', 'the technical skill in how something is made'),
          ('settled view', 'the conclusion a panel finally reaches')],
   expr=[('Agreement among trained judges is evidence of training, not of '
          'truth', 'the cycle’s governing sentence'),
         ('a disagreement about weighting, not about what is there',
          'locates a dispute precisely'),
         ('if the inference is blocked there, it is blocked here',
          'transfers a formal point between fields'),
         ('we agreed about the work and found the criteria silent',
          'converts a disagreement into a useful finding')],
   trans=['whereas', 'that said', 'the strongest point on the other side',
          'my position is therefore'],
  ),

  dict(
   sub='What panels agree on',
   step=5,
   read=[
    dict(heading='Agreement between judges across four competitions',
         kind='Data article',
         task='Matching information and table completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_AGREE,
         paras=[
          'The chart shows agreement between judges in four open '
          'competitions, on a scale from 0 to 100. For each competition '
          'three figures are given: the agreement score of the least '
          'agreeing pair of judges, the mean across all pairs, and the '
          'score of the most agreeing pair.',
          'Read by the means alone, three of the four look broadly similar. '
          'Photography stands at 66, architecture at 76, short fiction at '
          '54 and sculpture at 51. A report quoting only those figures '
          'would describe a field with moderate and fairly consistent '
          'agreement, and such reports are routinely written.',
          'The ranges tell a different story and in two cases a contrary '
          'one. In architecture the lowest pair scored 72 and the highest '
          '79, a spread of seven points: every pair of judges agreed to '
          'much the same degree. In sculpture the lowest pair scored 14 and '
          'the highest 92, a spread of seventy-eight.',
          'Those two competitions have almost the same relationship to '
          'their own means and completely different internal structures. '
          'The architecture panel agreed, in the ordinary sense that any '
          'two of its members would have produced a similar ranking. The '
          'sculpture panel did not agree at all, and its mean of 51 is '
          'produced by averaging one pair who agreed almost perfectly with '
          'one pair who agreed scarcely more than chance.',
          'Short fiction sits between the two, with a lowest pair at 31 and '
          'a highest at 81. Photography is the most evenly distributed '
          'after architecture, running from 58 to 73.',
          'The practical consequence is that the mean alone is close to '
          'useless for the purpose these figures are usually collected '
          'for, which is deciding how many judges a competition needs. A '
          'panel with a narrow range can be reduced in size with little '
          'loss. A panel with a wide range cannot be reduced at all, '
          'because the result then depends on which members happen to be '
          'available.',
          'There is a further point that the chart raises and cannot '
          'settle. A wide spread may mean the judges are applying different '
          'standards, or that they are applying the same standard to work '
          'that genuinely varies more. Nothing in the agreement figures '
          'distinguishes those, and the two call for opposite remedies: '
          'the first for clearer criteria, the second for more judges.'],
         items=[
          ('Which paragraph explains why the mean is nearly useless for '
           'panel sizing?', ['Paragraph 4', 'Paragraph 5',
            'Paragraph 6', 'Paragraph 7'], 2,
           'A wide range means the result depends on who is available.'),
          ('Which paragraph names two explanations the chart cannot '
           'distinguish?', ['Paragraph 5', 'Paragraph 6',
            'Paragraph 7', 'Paragraph 4'], 2,
           'Different standards, or the same standard applied to more '
           'variable work.'),
          ('Which paragraph compares two panels with similar means and '
           'different structures?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 1,
           'Architecture agreeing throughout; sculpture not agreeing at '
           'all.'),
          ('Spread between lowest and highest pair in sculpture: '
           '____________ points', None, 'seventy-eight',
           'Paragraph 3, running from a lowest pair of 14 to a highest '
           'of 92.'),
          ('The lowest pair in short fiction scored ____________.', None,
           '31', 'Paragraph 5, against a highest pair of 81.'),
          ('A panel with a ____________ range cannot be reduced in size.',
           None, 'wide',
           'Paragraph 6, because the outcome then depends on '
           'availability.')])],
   listen=[
    dict(heading='A researcher on inter-rater agreement', part='Part 4',
         task='A lecture on agreement between judges', band='l4',
         qtype='Questions 39-44',
         figure=_AGREE,
         script=[
          ('Researcher', 'Four competitions, three bars each. Lowest '
           'agreeing pair, panel mean, highest agreeing pair. And the point '
           'of the hour is that if you take the middle bar and throw the '
           'other two away, which is what every published report of this '
           'kind does, you will reach the opposite of the right '
           'conclusion.'),
          ('Researcher', 'The means first. Photography sixty-six. '
           'Architecture seventy-six. Short fiction fifty-four. Sculpture '
           'fifty-one. Nothing alarming. A field with moderate agreement, '
           'somewhat better in architecture, and you could write that '
           'paragraph in your sleep.'),
          ('Researcher', 'Now the ranges. Architecture: lowest pair '
           'seventy-two, highest seventy-nine. Seven points apart. Any two '
           'judges on that panel would have given you much the same '
           'ranking, which is what agreement actually means.'),
          ('Researcher', 'Sculpture: lowest pair fourteen, highest '
           'ninety-two. Seventy-eight points apart. The mean of fifty-one '
           'is one pair agreeing almost perfectly averaged with one pair '
           'agreeing barely more than chance. There is no sense in which '
           'that panel agreed about anything.'),
          ('Researcher', 'So two competitions, means fifty-one and '
           'seventy-six, and the thing that distinguishes them is not the '
           'twenty-five points between the means. It is that one is a panel '
           'and the other is four people in a room.'),
          ('Researcher', 'Why does this matter practically? Because these '
           'figures are collected to decide how many judges a competition '
           'needs. Narrow range: you can cut the panel and lose almost '
           'nothing. Wide range: you cannot cut it at all, because your '
           'result starts depending on which two members were free that '
           'week.'),
          ('Researcher', 'Short fiction, thirty-one to eighty-one, sits in '
           'between. Photography, fifty-eight to seventy-three, is the '
           'second tightest. So the ordering by mean and the ordering by '
           'spread are not the same ordering, and the second one is the one '
           'you need.'),
          ('Researcher', 'One honest caveat before you go. A wide spread '
           'might mean the judges are using different standards. It might '
           'equally mean they are using the same standard on work that '
           'genuinely varies more. The agreement figures cannot tell you '
           'which, and the two call for opposite fixes: clearer criteria '
           'for the first, more judges for the second.'),
          ('Researcher', 'And a word about why nobody reports the spread, '
           'because it is not laziness. A mean is one number and goes in '
           'a table. A range is two numbers and a subtraction and needs a '
           'sentence, and the people commissioning these reports ask for '
           'a table.'),
          ('Researcher', 'So the rule, which generalises well beyond '
           'judging panels: when a figure arrives with a spread, report the '
           'spread. The mean of a bimodal distribution describes nobody in '
           'it.')],
         items=[
          ('He says that taking only the middle bar will produce',
           ['a rough answer', 'the opposite of the right conclusion',
            'an unreliable estimate', 'the same answer'], 1,
           'Which is what published reports of this kind do.'),
          ('The spread in architecture is',
           ['seven points', 'twenty-five points', 'fifty points',
            'seventy-eight points'], 0,
           'From a lowest pair of 72 to a highest of 79.'),
          ('The sculpture mean of 51 is produced by',
           ['all pairs scoring near 51', 'one pair agreeing almost '
            'perfectly averaged with one barely above chance',
            'a measurement error', 'two outliers'], 1,
           'Across a spread of seventy-eight points.'),
          ('These figures are collected in order to decide',
           ['who wins', 'how many judges a competition needs',
            'which criteria to publish', 'how to train judges'], 1,
           'A narrow range allowing a smaller panel.'),
          ('His caveat is that a wide spread may mean different standards '
           'or the same standard applied to work that',
           ['is more difficult', 'genuinely varies more', 'is newer',
            'is anonymised'], 1,
           'Calling for opposite remedies.'),
          ('His general rule is that when a figure arrives with a spread, '
           'you should', ['average it', 'report the spread',
            'discard outliers', 'repeat the measurement'], 1,
           'Because the mean of a bimodal distribution describes nobody in '
           'it.')])],
   speak=dict(
    part='Part 3', focus='Judging consistently',
    intro=('Five or six sentences. Try once to say why an average can '
           'mislead.'),
    qs=['How can competitions be judged fairly?',
        'Should the same people judge every year?',
        'Is it better to have more judges or better ones?',
        'Can judging ever be objective?'],
    shape=[('answer', 'By checking how much the judges agree with each '
            'other, not just what they decided.'),
           ('support', 'One competition I read about had an average '
            'agreement of fifty-one.'),
           ('follow-up', 'That came from one pair agreeing almost '
            'perfectly and another barely at all.'),
           ('support', 'So the average described neither pair.'),
           ('follow-up', 'And a panel like that cannot be made smaller, '
            'because the result would depend on who turned up.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Agreement between judges, four competitions',
         prompt=('The chart below shows agreement between judges in four '
                 'competitions, giving the least agreeing pair, the panel '
                 'mean and the most agreeing pair. Summarise the '
                 'information by selecting and reporting the main features, '
                 'and make comparisons where relevant. Write at least 150 '
                 'words.'),
         figure=_AGREE,
         model=[
          'The bar chart shows agreement between judges in four '
          'competitions, on a scale of 0 to 100, with three figures for '
          'each: the lowest agreeing pair, the panel mean and the highest '
          'agreeing pair. Overall, the means fall within a relatively '
          'narrow band of 51 to 76, while the spread between the lowest and '
          'highest pairs varies enormously, from seven points to '
          'seventy-eight.',
          'Architecture shows both the highest mean, at 76, and much the '
          'narrowest spread, with its lowest pair at 72 and its highest at '
          '79. Photography is the next most consistent, running from 58 to '
          '73 around a mean of 66.',
          'Sculpture and short fiction have similar means, of 51 and 54, '
          'but very different internal patterns from the first two. '
          'Sculpture ranges from 14 to 92 and short fiction from 31 to 81, '
          'spreads of 78 and 50 points respectively.',
          'The two orderings therefore differ. Ranked by mean, the four run '
          'architecture, photography, short fiction, sculpture, with only '
          '25 points between the highest and the lowest. Ranked by spread, '
          'the order is architecture, photography, short fiction, '
          'sculpture as well, but the gap between the extremes is more '
          'than ten times as large.'],
         notes=[
          'The Overall statement contrasts the narrow band of means with '
          'the enormous variation in spread. A chart that supplies ranges '
          'supplies them because the ranges are the finding, and an answer '
          'that reports only the middle bars has described the least '
          'informative third of the data.',
          'Every competition is given its spread in points, not just its '
          'two endpoints. "A spread of 78" is a figure the chart does not '
          'print and the reader needs, and calculating it is the kind of '
          'small step that separates band 7 from band 8 on Task '
          'Achievement.',
          'The final paragraph compares the two orderings, which is the '
          'highest-value comparison available here: the order happens to '
          'be the same and the magnitudes are not, and saying so is more '
          'precise than saying the orders agree.'],
         criterion=[('Contrasting narrow means with wide spreads',
                     'Task Achievement'),
                    ('Calculating spreads the chart does not print',
                     'Task Achievement'),
                    ('Comparing the two orderings explicitly',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Describing agreement and its variability',
    explain=('A figure with a spread needs language for both the centre '
             'and the dispersion, and for the relation between them. '
             'These patterns supply all three.'),
    examples=['The mean agreement is respectable and one panel accounts '
              'for most of it.',
              'The spread runs from 14 to 92, a range of seventy-eight '
              'points.',
              'Two panels share a mean and have nothing else in common.',
              'Ranked by spread rather than by mean, the order is '
              'unchanged and the gaps are not.'],
    task='Rewrite each sentence so that it reports spread as well as '
         'centre.',
    items=[('Sculpture judges agreed at 51.',
            'The sculpture panel averaged 51, from pairs scoring between '
            '14 and 92.'),
           ('Architecture had the best agreement.',
            'Architecture had both the highest mean, at 76, and the '
            'narrowest spread, of seven points.'),
           ('Short fiction and sculpture are similar.',
            'Short fiction and sculpture have similar means, of 54 and 51, '
            'with spreads of 50 and 78 points.'),
           ('The averages are all around the same.',
            'The four means fall within 25 points of each other while the '
            'spreads differ by a factor of eleven.'),
           ('Some judges agreed and some did not.',
            'Within the sculpture panel one pair agreed at 92 and another '
            'at 14.')]),
   vocab=[('inter-rater', 'between one judge and another'),
          ('agreement score', 'a measure of how far two judges match'),
          ('the spread', 'the distance between the extremes'),
          ('outlier', 'a value far from the others'),
          ('lowest pair', 'the two judges who agreed least'),
          ('bimodal', 'clustering at two separate values'),
          ('how widely scattered', 'the degree to which values are '
           'spread'),
          ('panel size', 'how many judges assess each entry')],
   expr=[('The mean agreement is respectable and one panel accounts for '
          'most of it', 'reports a centre and its source together'),
         ('one is a panel and the other is four people in a room',
          'distinguishes two things a mean conceals'),
         ('the mean of a bimodal distribution describes nobody in it',
          'states why a centre can mislead'),
         ('the two orderings are not the same ordering',
          'compares two ways of ranking')],
   trans=['while', 'by contrast', 'taken together', 'ranked by'],
  ),

  dict(
   sub='Why disagreement is not proof of subjectivity',
   step=5,
   read=[
    dict(heading='Two judges, one standard, different weightings',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'The inference from disagreement to subjectivity is conducted so '
          'frequently and so rapidly that its structure is seldom examined. '
          'Experts disagree about works of art; therefore nothing exists to '
          'be correct about; therefore judgement constitutes personal '
          'preference. Each transition performs work of which it is '
          'incapable, and the failures belong to distinct categories. '
          'Treating them as a single failure permits the entire inference to '
          'be accomplished in a second and a half, and separating them '
          'constitutes most of the work.',
          'The initial difficulty is that the disagreement does not '
          'ordinarily concern the contents of the work. Panel records, where '
          'they survive, demonstrate two judges generating very nearly '
          'identical descriptions and opposing rankings. One chair of thirty '
          'years’ standing recalled four occasions on which two judges '
          'described a work so incompatibly that one must have been mistaken '
          'about the object, from several thousand assessments. That ratio '
          'constitutes the single most significant figure in this literature '
          'and is scarcely ever quoted, being undramatic and requiring the '
          'consultation of panel records nobody maintains for that purpose.',
          'What they disagree about is weighting: how much technical command '
          'should count against thematic engagement, how far ambition '
          'excuses an uneven result. This is a distinct kind of disagreement '
          'and it has a close analogue in fields nobody calls subjective. '
          'Two engineers may agree wholly about a bridge and differ on how '
          'to weigh initial cost against redundancy. The disagreement may be '
          'severe, sustained and unresolvable by further measurement, and it '
          'remains a disagreement of a distinct kind from one about what the '
          'bridge is made of.',
          'The engineering parallel does the entirety of the work and '
          'merits stating carefully. Nobody concludes from the engineers’ '
          'disagreement that bridges have no properties, or that structural '
          'analysis is a matter of personal preference. The disagreement is '
          'located in a value judgement sitting on top of an agreed '
          'description, and the agreed description is not undermined by the '
          'disagreement above it.',
          'A sceptic may respond that the weighting in the engineering '
          'instance is resolvable by consequences while the weighting in the '
          'aesthetic instance is not. That response is correct and narrows '
          'the claim considerably: it concedes the objectivity of the '
          'description and relocates the dispute to the final transition, '
          'which is precisely where the careful version of the argument '
          'situates it. A sceptic conceding that much has abandoned the '
          'premise on which the popular version operates, and now occupies a '
          'position both defensible and considerably less interesting to '
          'state.',
          'The second difficulty operates in the opposite direction and '
          'constitutes a difficulty for the defenders of expertise rather '
          'than its critics. Where judges do converge, the convergence '
          'constitutes weak evidence of anything, since they are seldom '
          'independent. A panel of four drawn from three institutions, two '
          'of its members instructed by the identical teacher, shares a '
          'training in what merits attention.',
          'This is the same objection that applies to agreement between '
          'related scientific models, and it has the same structure: '
          'agreement is evidence of relatedness before it is evidence of '
          'truth. The defender of expertise who points to high inter-rater '
          'agreement has therefore produced a figure that the critic can '
          'accept without conceding anything. This merits saying plainly '
          'because inter-rater reliability figures are produced by '
          'institutions precisely in order to answer the sceptical '
          'challenge, and they do not touch it.',
          'The two difficulties jointly generate a position that neither '
          'camp occupies and the evidence supports. Disagreement does not '
          'establish that nothing exists to be known, since the disagreement '
          'concerns weighting and the description is shared. Agreement does '
          'not establish that anybody knows it, since the agreement reflects '
          'shared training.',
          'What would resolve the question constitutes a wholly distinct '
          'variety of evidence, and very little of it exists. The question '
          'is whether trained judgement predicts anything independent of '
          'itself — subsequent reputation, durability of interest, the '
          'assessments of judges instructed in another tradition. In the few '
          'domains where this has been investigated the results are mixed '
          'and the studies are small. That constitutes an unsatisfying state '
          'of the evidence and it is the actual state of it, and the '
          'confident positions on both sides are maintained by individuals '
          'who have not examined how little exists.',
          'A reasonable interim position can be stated in three parts. There '
          'is evident expertise in perception: a trained judge notices '
          'features a novice cannot discern and can demonstrate them in '
          'minutes, which is what expertise means in any other domain. There '
          'is expertise in reasoning: a weighting can be stated, defended '
          'and revised in the light of objection.',
          'And there is no established expertise in the verdict. The step '
          'from a shared description plus a defended weighting to the '
          'claim that one work is better has never been shown to be a step '
          'that training improves. That is a narrow conclusion, it is '
          'unsatisfying to both sides, and it is what the evidence '
          'currently supports.',
          'The practical consequence for institutions that must choose is '
          'that panels should be asked to record their weightings rather '
          'than only their rankings. Where two judges differ, the record '
          'then demonstrates whether they saw different things or valued the '
          'same things differently, and the second is a disagreement a '
          'published criterion could resolve while the first is not.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['Disagreement about description',
            'Disagreement about weighting', 'The engineering parallel',
            'Why convergence is weak evidence'], 1,
           'How much technical command counts against thematic '
           'engagement.'),
          ('Choose the best heading for paragraph 6.',
           ['The engineering parallel',
            'Why convergence is weak evidence',
            'What would settle the question',
            'An interim position'], 1,
           'Judges drawn from three institutions and a shared training.'),
          ('Choose the best heading for paragraph 9.',
           ['An interim position', 'What would settle the question',
            'Expertise in perception', 'The practical consequence'], 1,
           'Whether trained judgement predicts anything independent of '
           'itself.'),
          (
           'The writer believes judges usually disagree about what is '
           'present in a work.', ['Yes', 'No', 'Not Given'],
           1,
           'Paragraph 2: four occasions in thirty years out of several '
           'thousand assessments.',
           {0: 'Yes would need usual disagreement; paragraph 2 gives '
               'four occasions in thirty years.', 2: 'Not Given is wrong because the frequency is counted.'}),
          (
           'The writer believes high inter-rater agreement establishes '
           'expertise.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 says the critic can accept the figure without '
           'conceding anything.',
           {0: 'Yes would need establishment; paragraph 7 says the '
               'critic can accept the figure.', 2: 'Not Given is wrong because the inference is examined.'}),
          ('Two engineers may agree about a bridge and differ on weighing '
           'cost against ____________.', None, 'redundancy',
           'Paragraph 3, the parallel the argument turns on.'),
          ('Agreement is evidence of ____________ before it is evidence of '
           'truth.', None, 'relatedness',
           'Paragraph 7, the same objection as for related models.'),
          ('The writer recommends that panels record their ____________ '
           'rather than only their rankings.', None, 'weightings',
           'The final paragraph, so that the kind of disagreement is '
           'visible.')])],
   listen=[
    dict(heading='A lecture on aesthetic judgement', part='Part 4',
         task='A lecture on taste and argument', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'Experts disagree about art, therefore there is '
           'nothing to be right about, therefore taste is personal. Three '
           'steps, made in about a second and a half, and I want to spend '
           'an hour on them because each one fails differently.'),
          ('Lecturer', 'Step one assumes the disagreement is about the '
           'work. It is almost never about the work. Where panel records '
           'survive you find two judges producing nearly identical '
           'descriptions and opposite rankings. One chair with thirty years '
           'behind her could recall four cases, out of several thousand '
           'assessments, where two judges described a work so differently '
           'that one of them had to be mistaken about the object.'),
          ('Lecturer', 'So what do they disagree about? Weighting. How much '
           'technical command counts against thematic engagement. How far '
           'ambition excuses an uneven result. They apply the same criteria '
           'and weight them differently, which is not disagreement about '
           'facts.'),
          ('Lecturer', 'And here is the parallel that does the work. Two '
           'engineers agree entirely about a bridge and differ about '
           'weighing initial cost against redundancy. Nobody says bridges '
           'have no properties. Nobody says structural analysis is personal '
           'taste. If the inference is blocked for the bridge it is blocked '
           'for the painting, and the blocking has nothing to do with '
           'art.'),
          ('Lecturer', 'Now the other side, and I hold this just as '
           'firmly, because my own side uses it badly. People defending '
           'expertise point to high agreement between judges. That figure '
           'is nearly worthless, because the judges are not independent: '
           'four people from three institutions, two taught by the same '
           'person, share a training in what to look at.'),
          ('Lecturer', 'It is exactly the objection you get about related '
           'climate models, and it has the same shape. Agreement is '
           'evidence of relatedness before it is evidence of truth. So the '
           'critic can accept your inter-rater figure cheerfully and concede '
           'nothing at all.'),
          ('Lecturer', 'Put the two together and you get a position nobody '
           'in this argument occupies. Disagreement does not show there is '
           'nothing to know. Agreement does not show anybody knows it. And '
           'what would settle it — whether trained judgement predicts '
           'anything independent of itself — has barely been tested, and '
           'where it has the results are mixed.'),
          ('Lecturer', 'So, three parts, and I would defend each '
           'separately. Expertise in perception: real, demonstrable, a '
           'trained judge shows you something in ten minutes you could not '
           'see. Expertise in reasoning: real, a weighting can be defended '
           'and revised. Expertise in the verdict: no evidence '
           'whatsoever.'),
          ('Lecturer', 'And one practical thing for anybody who runs a '
           'panel. Make judges record their weightings, not just their '
           'rankings. Then when two of them disagree you can see whether '
           'they saw different things or valued the same things '
           'differently, and only the second is something a criterion '
           'could fix.')],
         items=[
          ('Step one of the argument assumes the disagreement is about',
           ['the criteria', 'the work', 'the judges', 'the '
            'process'], 1,
           'Which he says it almost never is.'),
          ('In thirty years the chair recalled how many incompatible '
           'descriptions?', ['none', 'four', 'forty', 'several '
            'hundred'], 1,
           'Out of several thousand assessments.'),
          ('The engineering parallel shows that disagreement about '
           'weighting does not mean',
           ['engineers are unreliable', 'bridges have no properties',
            'costs are subjective', 'analysis is impossible'], 1,
           'And the blocking has nothing to do with art.'),
          ('He says high inter-rater agreement is nearly worthless '
           'because judges are not', ['experienced', 'independent',
            'numerous', 'trained'], 1,
           'Sharing a training in what to look at.'),
          ('Of his three parts, the one with no evidence is expertise in',
           ['perception', 'reasoning', 'the verdict', 'teaching'], 2,
           'Perception and reasoning he calls real.'),
          ('His practical recommendation is that judges record their',
           ['rankings', 'weightings', 'descriptions', 'confidence'], 1,
           'So the kind of disagreement becomes visible.')])],
   speak=dict(
    part='Part 3', focus='Taste and argument',
    followup=[(('You changed your mind when you learned what the building was '
                'for. Can people argue usefully about taste?'),
               ('About judgement, yes; about response, no. Nobody can be '
                'argued into enjoying a thing, and anybody can be shown what a '
                'work is doing, which is what changed my view. The two are '
                'regularly confused, and the confusion is why the argument '
                'feels futile.')),
              (('Is there a difference between liking something and thinking '
                'it good?'),
               ('A clear one, and most people hold both positions at once '
                'without difficulty. I can think a novel accomplished and '
                'never want to read it again, and I can be fond of something I '
                'would not defend. Collapsing them is what makes criticism '
                'look like a claim about what you should enjoy.')),
              ('Should a critic always give reasons for a verdict?',
               ('That is the whole job. A verdict without reasons is a report '
                'of a preference, which is useful only if you already share '
                'it. Reasons can be examined, which means a critic can be '
                'shown to be wrong, and that possibility is what makes the '
                'judgement worth anything.')),
              ('Do reasons ever change what people like?',
               ('Occasionally and indirectly, by changing what they notice. '
                'Nobody is argued into pleasure, and attention is teachable, '
                'and once you can hear the thing somebody has pointed out, the '
                'response often follows without being asked to.'))],
    intro=('Five or six sentences. Try once to say that two people can '
           'agree about a thing and disagree about its value.'),
    qs=['Can people argue usefully about taste?',
        'Is there a difference between liking something and thinking it '
        'good?',
        'Should critics give reasons?',
        'Do reasons ever change what people like?'],
    shape=[('answer', 'Yes, and most of the argument is not where people '
            'think.'),
           ('support', 'Two judges usually describe a work almost '
            'identically.'),
           ('follow-up', 'What they differ about is how much each thing '
            'should count.'),
           ('support', 'Two engineers do the same about cost and '
            'safety.'),
           ('follow-up', 'And nobody concludes that bridges are a matter '
            'of personal taste.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Finding the premise nobody stated',
         prompt=('Should public funding decisions about art be made by '
                 'experts? Brainstorm ten, run the six tests, and for each '
                 'survivor look for a premise that the idea needs and that '
                 'nobody on either side has stated. Twelve minutes.'),
         plan=('Expert panels should make these decisions and should be '
               'required to record their weightings, because the objection '
               'to expert judgement rests on an unstated premise that '
               'disagreement about value is disagreement about fact, and '
               'once weightings are recorded that premise can be tested '
               'case by case',
               [('The case for expert panels rests on an unstated premise '
                 'that perception can be trained, which holds',
                 ['a trained judge demonstrates features a novice cannot '
                  'see, in minutes',
                  'panel records show judges describing works almost '
                  'identically']),
                ('The case against rests on an unstated premise that '
                 'disagreement implies no fact of the matter, which fails '
                 'in every other field',
                 ['two engineers differ on weighing cost against '
                  'redundancy',
                  'nobody concludes from that that bridges have no '
                  'properties'])]),
         notes=[
          'The step this unit adds is looking for a premise nobody has '
          'stated. The premise test so far has worked on what an argument '
          'assumes; here you are looking for what it assumes so deeply '
          'that neither side has noticed it is an assumption.',
          'The giveaway is that the same inference would be rejected '
          'instantly in a neighbouring field. If your opponent’s argument '
          'would be laughed at about bridges and is accepted about '
          'paintings, the unstated premise is something about the '
          'difference, and that something is what the essay should be '
          'about.',
          'Notice that the plan gives the writer’s own side an unstated '
          'premise too, and that one holds. Finding an unstated premise is '
          'not automatically an attack; sometimes it is the strongest part '
          'of your own case, newly visible.'],
         criterion=[('Finding a premise neither side has stated',
                     'Task Response'),
                    ('Testing it by transfer to another field',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this in cycle 5.',
         lines=12)],
   gram=dict(
    point='Metadiscourse and the shape of an argument',
    explain=('A reader at this level is told the shape of an argument '
             'without mechanical signposting. These patterns carry '
             'position and content at once.'),
    examples=['They apply the same criteria and weight them differently, '
              'which is not disagreement about facts.',
              'Each step is doing work that it cannot do.',
              'The second difficulty runs the other way.',
              'That response is correct and narrows the claim '
              'considerably.'],
    task='Rewrite each signpost so that it carries content as well as '
         'position.',
    items=[('There are three steps to this argument.',
            'The argument moves from disagreement to subjectivity in three '
            'steps, each of which fails differently.'),
           ('Now for the other side.',
            'The second difficulty runs the other way and is a problem for '
            'the defenders of expertise rather than its critics.'),
           ('A critic might object here.',
            'A sceptic may respond that the bridge case can be settled by '
            'consequences, which is correct and narrows the claim.'),
           ('In conclusion, both are partly right.',
            'The two difficulties together produce a position neither camp '
            'occupies and the evidence supports.'),
           ('Finally, here is a practical point.',
            'The practical consequence for institutions is that panels '
            'should record weightings rather than only rankings.')]),
   vocab=[('value judgement', 'a claim about worth rather than fact'),
          ('not comparable on one scale', 'unable to be ranked by a '
           'single measure'),
          ('description', 'an account of what is present in a work'),
          ('relatedness', 'sharing an origin or a training'),
          ('spare capacity', 'extra provision built in against '
           'failure'),
          ('independent', 'having reached a view without the others'),
          ('interim position', 'what to hold while evidence is '
           'lacking'),
          ('predictive', 'telling you something about a later outcome')],
   expr=[('They apply the same criteria and weight them differently, which '
          'is not disagreement about facts',
          'the cycle’s governing sentence'),
         ('if the inference is blocked for the bridge it is blocked for '
          'the painting', 'transfers a formal argument'),
         ('the critic can accept your figure and concede nothing',
          'shows why a statistic does not settle a dispute'),
         ('expertise in perception, in reasoning, and not in the verdict',
          'splits a claim into three defensible parts')],
   trans=['consequently', 'which in turn', 'as a result',
          'the second difficulty'],
  ),

  dict(
   sub='Whether the gap can be closed',
   step=5,
   read=[
    dict(heading='The standard that cannot be fully specified',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'If judges apply a standard, it should in principle be possible to '
          'commit that standard to paper. Repeated attempts to do so, in '
          'art, in wine, in medicine and in the assessment of writing, have '
          'generated documents that experienced practitioners characterise '
          'as accurate and incomplete, in a specific manner meriting '
          'examination rather than dismissal. The pattern is excessively '
          'consistent across excessively numerous unrelated fields to '
          'constitute a local failure of drafting, and several of the '
          'documents were drafted by individuals who had consulted the '
          'previous attempts.',
          'The documents are accurate in that practitioners endorse every '
          'criterion enumerated. They are incomplete in that a novice '
          'applying all of them still arrives at conclusions divergent from '
          'an expert’s, and the practitioners cannot specify what is absent. '
          'Requested to supply the missing criterion, they supply a further '
          'one that is equally endorsed and equally insufficient. The '
          'process is indefinitely repeatable without convergence, which is '
          'the observation rendering this more than a complaint about '
          'imprecise drafting.',
          'One interpretation maintains that the residual content is '
          'arbitrary: the experts share a convention, the convention '
          'possesses no further justification, and the residue constitutes '
          'prejudice with a protracted training behind it. This '
          'interpretation is maintained by very few individuals who have '
          'worked closely with experts and by numerous practitioners who '
          'have not, which is suggestive without being decisive. Familiarity '
          'generates both insight and investment, and the distribution of a '
          'belief among those possessing the greatest knowledge of a subject '
          'constitutes evidence of something without constituting evidence '
          'of truth.',
          'The rival interpretation maintains that certain knowledge is '
          'constitutively resistant to articulation. A person capable of '
          'reliably identifying a face cannot specify the method; a '
          'clinician capable of perceiving that a patient is unwell before '
          'any test registers an abnormality cannot state the criteria; a '
          'wine taster identifies a region blind and cannot compose the '
          'instructions. Failure of articulation constitutes no evidence of '
          'absence where the capacity belongs to this category. In each '
          'instance the capacity is demonstrable repeatedly under test '
          'conditions while remaining wholly resistant to formulation as '
          'instructions.',
          'The two interpretations make different predictions and the '
          'predictions have been tested, which is the useful part of '
          'this literature and the part least frequently cited. If the '
          'residue is arbitrary convention, expert judgement should '
          'not predict anything beyond the agreement of other '
          'similarly trained experts; if it tracks something real, it '
          'should.',
          'The results differ by field and the pattern is informative: '
          'clinical intuition predicts outcomes in several '
          'well-documented cases, occasionally outperforming early '
          'test results. Wine expertise predicts blind identification '
          'of region at rates well above chance and fails almost '
          'wholly at predicting price or later critical reputation. '
          'That split within a single field is more informative than '
          'either result alone: the same expertise tracks one external '
          'thing and not another, which no general account of '
          'expertise predicts.',
          'In the arts the evidence is thinnest and most contested. '
          'Selection panels predict subsequent exhibition history more '
          'accurately than chance, which resembles a finding and is heavily '
          'confounded, since selection by one panel generates attention '
          'influencing later selections. Disentangling the prediction from '
          'the self-fulfilment has not been accomplished convincingly, and '
          'may not be. Designs capable of separating them are readily '
          'describable and expensive to execute, which constitutes the '
          'ordinary reason a question of this variety remains open for '
          'decades.',
          'A natural experiment exists and has barely been exploited. '
          'Where two panels independently assess the same body of work '
          'without knowing each other\u2019s results, their agreement can '
          'be compared with their joint prediction of anything '
          'external. Two such studies exist, both small and with '
          'results that point in opposite directions.',
          'What can be said with some confidence is that the arbitrary '
          'interpretation is too strong. It predicts no transfer across '
          'traditions, and judges trained in different traditions do agree '
          'at rates above chance on work from neither, which is a small '
          'finding and is inconsistent with pure convention.',
          'What cannot be said is that the residue is fully reliable or '
          'that more training would make it so. The honest position '
          'distinguishes three things that are routinely run together: '
          'whether a standard exists, whether it can be written down, and '
          'whether applying it well can be taught. The second is probably '
          'no; the first and third are open and are not the same '
          'question.',
          'That distinction carries a consequence for anybody designing an '
          'assessment apparatus. A standard resistant to formulation remains '
          'transmissible, through apprenticeship, through worked examples '
          'and through exposure to a substantial quantity of instances with '
          'feedback. These are expensive and constitute the methods every '
          'field in this literature actually employs, whatever its published '
          'criteria assert. A field whose formal documents describe one '
          'method of transmission while its practice relies upon another has '
          'not been dishonest; it has committed to paper the component '
          'susceptible to being committed to paper.',
          'And it has a consequence for the sceptic, which is the most '
          'useful thing in this passage: a standard that cannot be '
          'written down is not thereby absent. The inference from '
          '"they cannot say what the rule is" to "there is no rule" is '
          'the same inference that would conclude nobody can recognise '
          'faces, and it should be resisted in both places for the '
          'same reason.'],
         items=[
          ('Which paragraph sets out the two rival interpretations’ '
           'different predictions?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'Whether expert judgement predicts anything beyond other '
           'experts.'),
          ('Which paragraph explains why the arts evidence is '
           'confounded?', ['Paragraph 6', 'Paragraph 7', 'Paragraph 8',
            'Paragraph 9'], 1,
           'Selection causes attention that influences later '
           'selections.'),
          ('Which paragraph distinguishes three questions usually run '
           'together?', ['Paragraph 9', 'Paragraph 10', 'Paragraph 11',
            'Paragraph 12'], 1,
           'Whether a standard exists, can be written, and can be '
           'taught.'),
          (
           'The writer believes the arbitrary interpretation is '
           'correct.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 9 says it is too strong.',
           {0: 'Yes would need correctness; paragraph 9 calls it too '
               'strong.', 2: 'Not Given is wrong because the interpretation is '
               'rated.'}),
          (
           'The writer believes a standard that cannot be written down '
           'can still be transmitted.',
           ['Yes', 'No', 'Not Given'], 0,
           'Paragraph 11: by apprenticeship, worked examples and many '
           'cases with feedback.',
           {1: 'No would need transmission to fail; paragraph 11 gives '
               'three ways it succeeds.', 2: 'Not Given is wrong because transmission is described.'}),
          ('Wine expertise predicts region identification above chance and '
           'fails at predicting price or later ____________.', None,
           'reputation',
           'Paragraph 6, where results differ by field.'),
          ('Judges trained in different traditions agree above chance on '
           'work from ____________.', None, 'neither',
           'Paragraph 9, a finding inconsistent with pure convention.'),
          ('The inference the writer says should be resisted is from "they '
           'cannot say what the rule is" to "there is no ____________".',
           None, 'rule',
           'The final paragraph, which compares it to recognising '
           'faces.')])],
   listen=[
    dict(heading='A philosopher and a curator disagree', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Professor Nakamura-Belluomini works on aesthetics. Ms '
           'Thwaite-Oyelaran has selected for open submissions for twenty '
           'years.'),
          ('Nakamura-Belluomini', 'I will begin by conceding the thing my '
           'side is worst at. We say there are reasons in matters of taste '
           'and we are extremely bad at producing them. Every criteria '
           'document I have read is endorsed by practitioners and useless '
           'to a novice, and I have written one of them.'),
          ('Thwaite-Oyelaran', 'Then I will concede mine. I say I know it '
           'when I see it, which is true and is also the sentence that '
           'ends every conversation and protects me from ever being '
           'wrong.'),
          ('Nakamura-Belluomini', 'That is the better confession. Can I ask '
           'the obvious question? When you cannot say why, is there a why?'),
          ('Thwaite-Oyelaran', 'I think so, and here is my evidence and it '
           'is weak. I can take a novice through forty works and by the end '
           'they agree with me on the forty-first, without my having '
           'articulated a single criterion they could not have read in the '
           'document beforehand.'),
          ('Nakamura-Belluomini', 'That is better evidence than you think '
           'and it is not decisive, because I could transmit a pure '
           'convention the same way. Apprenticeship propagates arbitrary '
           'conventions beautifully.'),
          ('Thwaite-Oyelaran', 'Let me push on that, because it is the '
           'answer I always get and it has never satisfied me. If '
           'apprenticeship transmits a pure convention, why do the works '
           'that survive fifty years not track the conventions of the '
           'panels that selected them?'),
          ('Nakamura-Belluomini', 'Because selection causes attention, '
           'and attention causes survival, so you cannot read that '
           'backwards. It is the single most confounded measurement in '
           'the field.'),
          ('Thwaite-Oyelaran', 'Then what would settle it?'),
          ('Nakamura-Belluomini', 'Whether your judgements predict anything '
           'outside your own tradition. And there is a finding, small and '
           'unreplicated: judges trained in genuinely different traditions '
           'agree above chance on work from neither of them.'),
          ('Thwaite-Oyelaran', 'Which would be impossible if I were just '
           'reproducing a convention.'),
          ('Nakamura-Belluomini', 'It would be hard to explain. I would not '
           'put weight on two small studies that point in different '
           'directions, and I would say the arbitrary interpretation is too '
           'strong, which is a smaller claim than you want.'),
          ('Thwaite-Oyelaran', 'It is smaller than I want and it is more '
           'than I expected from a philosopher. What do I do on '
           'Monday?'),
          ('Nakamura-Belluomini', 'Keep the apprenticeship, since it works '
           'whatever the explanation. Record your weightings so the '
           'disagreements become inspectable. And stop saying you know it '
           'when you see it, because it is true and it costs you every '
           'argument you could have won.')],
         items=[
          ('Nakamura-Belluomini concedes that his side is bad at',
           ['reading criteria', 'producing the reasons it claims '
            'exist', 'judging work', 'training novices'], 1,
           'Every criteria document being endorsed and useless to a '
           'novice.'),
          ('Thwaite-Oyelaran says "I know it when I see it" is true and',
           ['unhelpful to funders', 'protects her from ever being '
            'wrong', 'unpopular', 'outdated'], 1,
           'And, she says, ends every conversation she has about it.'),
          ('Her evidence is that a novice taken through forty works',
           ['can state the criteria', 'agrees with her on the '
            'forty-first', 'disagrees more', 'needs the document'], 1,
           'Without her articulating a criterion not already in the '
           'document.'),
          ('He says that evidence is not decisive because apprenticeship '
           'also transmits', ['errors', 'arbitrary conventions',
            'technique', 'reputation'], 1,
           'Beautifully, which is the word he chooses for it.'),
          ('The finding he cites is that judges from different traditions '
           'agree above chance on work from',
           ['one of the traditions', 'neither tradition', 'both '
            'traditions', 'a third tradition'], 1,
           'A finding he describes as small and unreplicated.'),
          ('His advice includes recording weightings and stopping saying',
           ['that taste is personal', '"I know it when I see it"',
            'that criteria matter', 'that training works'], 1,
           'Because it is true and costs her every argument.')])],
   speak=dict(
    part='Part 3', focus='Reasons in matters of taste',
    sounds=[('Aesthetic vocabulary is where candidates most often guess the '
             'stress: AESthetic takes it on the second syllable, CRItical on '
             'the first, acCOMplished on the second, inTEGrity on the second.'),
            ('Decide now how you say each of these four and never hesitate '
             'before them, because hesitation in front of a judgement word '
             'undermines the judgement.'),
            ('The distinction this unit turns on lives in stress: I LIKE it is '
             'a report, I think it is GOOD is a claim, and said flatly the two '
             'sound identical.'),
            ('Practise the concession shape at full range: it is accomplished, '
             'high and open, and I would not read it again, falling.'),
            ('Record yourself on whether critics should give reasons. Listen '
             'for a judgement you delivered with an uncertain contour.')],
    intro=('The hardest turn in the unit. Try once to say that something '
           'can be real and unwritable.'),
    qs=['Can people give reasons for what they find beautiful?',
        'Should art competitions publish their criteria?',
        'Is "I know it when I see it" a reason?',
        'Can taste be taught?'],
    shape=[('answer', 'Some reasons, and never all of them.'),
           ('support', 'Criteria documents are endorsed by experts and '
            'useless to beginners.'),
           ('follow-up', 'Something is left over that nobody can '
            'write.'),
           ('support', 'But people cannot write down how they recognise a '
            'face either.'),
           ('follow-up', 'So not being able to state the rule is not '
            'evidence that there is no rule, which is the step most people '
            'take without noticing.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Are judgements about art purely personal?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some say judgements about art are purely '
                 'personal. To what extent do you agree? Write at least '
                 '250 words.'),
         model=[
          'The claim is true of the verdict and false of almost everything '
          'leading up to it, and since the argument for it depends '
          'entirely on running those together, the distinction is the '
          'whole answer.',
          'The case for the claim is disagreement, and it is real. Experts '
          'split over the same work, panels reach opposite rankings, and '
          'no appeal to the facts settles it. If judgements tracked '
          'something in the object, one would expect trained observers to '
          'converge, and across four documented competitions the agreement '
          'between pairs of judges ranged from 14 to 92 on a hundred-point '
          'scale — a spread that no account of shared expertise comfortably '
          'explains.',
          'The objection to this is that it misidentifies what the '
          'disagreement is about. Where panel records survive, two judges '
          'who rank a work oppositely are usually found to have described '
          'it almost identically; one chair of thirty years could recall '
          'four occasions in several thousand assessments on which two '
          'judges described a work so incompatibly that one must have been '
          'mistaken. They agree about the object and differ on how to weigh '
          'what they both see.',
          'That distinction is decisive because it has an exact parallel '
          'where nobody draws the sceptical conclusion. Two engineers may '
          'agree entirely about a bridge and differ about weighing initial '
          'cost against redundancy, and no one infers that bridges have no '
          'properties or that structural analysis is personal preference. '
          'If the inference is blocked there, it is blocked here, and the '
          'blocking has nothing to do with art.',
          'To the extent that I agree, then, I agree about the last step '
          'only, and I would hold the rest firmly. There is demonstrable '
          'expertise in perception — a trained judge shows a novice '
          'something in ten minutes that the novice could not see — and '
          'in reasoning, since a weighting can be stated, attacked and '
          'revised. What has never been shown is expertise in the verdict '
          'itself. And one practical point follows: panels should record '
          'their weightings, not only their rankings, because the record '
          'then reveals whether two judges saw different things or valued '
          'the same things differently, and only the second is something a '
          'published criterion could ever resolve.'],
         notes=[
          'The first sentence locates the agreement and the disagreement '
          'precisely and names the conflation the whole argument depends '
          'on. A to-what-extent answer is strongest when the extent is a '
          'boundary inside the question rather than a point on a scale.',
          'Paragraph 2 states the opposing case with its best evidence '
          '— the 14 to 92 spread — rather than a weak version. Structure '
          '9 collapses if the objection is not given its strength, and '
          'this one is given a figure that genuinely embarrasses the '
          'writer’s own position.',
          'The recommendation in the last two sentences follows from the '
          'rebuttal rather than being bolted on: because the dispute is '
          'about weighting, recording weightings makes it inspectable. An '
          'essay whose practical proposal is entailed by its argument is '
          'doing what very few do.'],
         model65=[
                  'Some say judgements about art are purely personal. '
                  'In my view taste is personal and judgement is not, and '
                  'the two are regularly confused.',
                  'The personal element is evident. Nobody can be '
                  'argued into enjoying a piece of music, and a work '
                  'that moves one person leaves another unaffected. '
                  'Attempts to legislate taste have always looked '
                  'ridiculous within a generation.',
                  'However, we do not treat all judgements as equal. A '
                  'critic who can show what a painting is doing, and '
                  'how it relates to what came before, is understood '
                  'to know something that an untutored viewer does '
                  'not. Across different cultures and centuries, some '
                  'works are repeatedly revisited, which is hard to '
                  'explain if judgement is merely preference.',
                  'I think the defensible position is that judgements '
                  'of value are arguable while responses are not. A '
                  'judgement can be supported by evidence about the '
                  'work, and can be revised. That is a weaker claim '
                  'than objective beauty, and it is enough to explain '
                  'why the argument continues.',
                  ],
         gap65=[
                'It separates response from judgement and keeps the '
                'distinction doing work in every paragraph.',
                'It uses persistence across cultures as evidence '
                'rather than as an appeal to authority.',
                'It states exactly how strong the conclusion is, which '
                'stops it claiming more than the argument supports.',
                ],
         criterion=[('An extent that is a boundary, not a point on a '
                     'scale', 'Task Response'),
                    ('The opposing case given its strongest evidence',
                     'Task Response'),
                    ('A recommendation entailed by the argument',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Distinguishing unspecifiable from arbitrary',
    explain=('The claim that a standard cannot be written down is '
             'constantly read as the claim that there is no standard. '
             'These patterns keep the two apart.'),
    examples=['A standard that cannot be written down is not thereby '
              'absent.',
              'Failure to articulate is not evidence of absence where the '
              'knowledge is of this kind.',
              'Nobody can specify how they recognise a face, and faces are '
              'recognised.',
              'The residue may be convention, and the prediction evidence '
              'is against it.'],
    task='Rewrite each claim so that unspecifiable and arbitrary stay '
         'distinct.',
    items=[('They cannot say why, so there is no reason.',
            'They cannot articulate the criterion, which is not evidence '
            'that no criterion is operating.'),
           ('It is all just convention.',
            'The convention interpretation predicts no transfer across '
            'traditions, and some transfer is observed.'),
           ('Experts just agree with each other.',
            'Agreement among similarly trained judges would follow from '
            'convention and from a shared standard alike.'),
           ('If it were real they could write it down.',
            'Several kinds of reliable knowledge resist articulation, '
            'including face recognition and clinical intuition.'),
           ('Taste cannot be taught.',
            'Whether a standard can be stated and whether applying it can '
            'be taught are different questions, and apprenticeship '
            'suggests the second is yes.')]),
   vocab=[('tacit knowledge', 'what is known and cannot be stated'),
          ('articulate', 'to put into explicit words'),
          ('arbitrary', 'resting on nothing beyond convention'),
          ('defeasible', 'able to be overturned by further '
           'consideration'),
          ('unspecifiable', 'not able to be set out as a rule'),
          ('apprenticeship', 'learning by working alongside an expert'),
          ('confounded', 'mixed up with another cause'),
          ('transfer', 'holding across a different tradition or '
           'setting')],
   expr=[('A standard that cannot be written down is not thereby absent',
          'the cycle’s governing sentence'),
         ('endorsed by practitioners and useless to a novice',
          'describes what a criteria document achieves'),
         ('apprenticeship propagates arbitrary conventions beautifully',
          'concedes a rival explanation of the same evidence'),
         ('it is true and it costs you every argument you could have won',
          'rejects a defence that works too well')],
   trans=['admittedly', 'nevertheless', 'in short',
          'to the extent that I agree'],
  ),
 ],
 technique=dict(
  title='Ranges on a chart: describing spread as well as centre',
  body=('When a chart supplies a range as well as an average, the range is '
        'there because it is the finding. A candidate who reports the four '
        'means and stops has described the least informative third of what '
        'is on the page, and will frequently describe it in terms the rest '
        'of the chart contradicts: two panels with means of 51 and 76 may '
        'be twenty-five points apart on the figure everybody quotes and '
        'entirely different in kind, one agreeing throughout and the other '
        'not agreeing at all. So report both, and then do the thing almost '
        'nobody does, which is to calculate the spread. The chart prints '
        'the endpoints; the reader needs the distance between them, and '
        'that subtraction is the single cheapest way to raise a Task 1 '
        'answer from competent to precise.'),
  panel=[('The spread is the finding',
          'A range is supplied because it carries information the mean '
          'hides. Report it first or second, never last.'),
         ('Subtract',
          '14 and 92 are on the chart. A spread of 78 is not, and it is '
          'what a reader wants.'),
         ('Two orderings, not one',
          'Rank by mean and rank by spread. Saying whether the orders '
          'agree is a free comparison.'),
         ('Similar means, different shapes',
          'Two categories with the same centre and different ranges are '
          'the point of a chart like this.')],
  task='Describe the cycle 3 chart in 150 words, giving every spread as '
       'a calculated figure.',
  qs=['What are the four spreads, in points?',
      'Which two categories have similar means and different spreads?',
      'Does the ordering by mean match the ordering by spread?',
      'Which figure did you report first, the mean or the range?',
      'How many numbers in your answer are not printed on the chart?']),
 outlining=dict(
  title='The premise test where the premise is unstated',
  body=('The premise test so far has asked what an idea assumes. The '
        'harder version asks what an argument assumes so deeply that '
        'neither side has noticed it is an assumption. These are the '
        'premises that do the most damage, because nobody defends them and '
        'nobody attacks them: they are simply the ground both parties are '
        'standing on. The reliable way to find one is transfer. Take the '
        'inference your opponent is making and run it in a neighbouring '
        'field: if "experts disagree, so there is no fact of the matter" '
        'would be rejected instantly about bridges and is accepted about '
        'paintings, then something is being assumed about the difference '
        'between bridges and paintings, and nobody has said what. That '
        'something is usually the real subject of the essay.'),
  frame=('Expert panels should make these decisions and should be '
         'required to record their weightings, because the objection to '
         'expert judgement rests on an unstated premise that disagreement '
         'about value is disagreement about fact, and once weightings are '
         'recorded that premise can be tested case by case',
         [('The case for expert panels rests on an unstated premise that '
           'perception can be trained, which holds',
           ['a trained judge demonstrates features a novice cannot see, in '
            'minutes',
            'panel records show judges describing works almost '
            'identically']),
          ('The case against rests on an unstated premise that '
           'disagreement implies no fact of the matter, which fails in '
           'every other field',
           ['two engineers differ on weighing cost against redundancy',
            'nobody concludes from that that bridges have no '
            'properties'])]),
  task='Take the main objection to your cycle 4 thesis, transfer it to '
       'another field, and see whether anybody would accept it there.',
  qs=['What is the inference your opponent is making?',
      'In which other field could the same inference be run?',
      'Would anybody accept it there?',
      'If not, what is being assumed about the difference?',
      'Is that assumption stated anywhere by anybody?'],
  answers=['state it as a bare inference, stripped of the subject matter',
           'engineering, medicine and law work for most arguments',
           'surprisingly often, no',
           'that is the unstated premise, and it is now your essay',
           'almost never, which is why it survives']),
 candos=['I can read a competition notice for what the panel is instructed '
         'to do',
         'I can report a spread as well as a mean, and calculate it',
         'I can explain why disagreement does not establish subjectivity',
         'I can explain why agreement among trained judges proves little',
         'I can find a premise neither side of an argument has stated'],
 tip=('Where a chart gives you a range, subtract. The endpoints are '
      'printed and the distance between them is not, and the distance is '
      'almost always the finding the question was set for.'),
)
