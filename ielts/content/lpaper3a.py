# -*- coding: utf-8 -*-
"""Volume 3 second timed Listening paper: four parts, 40 questions."""

LPAPER = dict(
 vol=3, level='B2', band='6.0', form='a',
 title='Listening Paper 2',
 intro=(
   'Four parts, forty questions, one hearing of each recording. Sit this '
   'paper at least a week after the first, and only once you have read '
   'the whole of the first key and the scripts at the back.'),
 instruct=[
  'Read the questions for each part before the recording starts, and '
  'read the last one first.',
  'Name the two kinds of answer you got wrong last time: spellings, '
  'plurals, numbers, or distraction. Watch for those here.',
  'Predict the form of each answer before you hear it. Knowing you are '
  'waiting for a day, a figure or a plural noun is most of the work.',
  'If you miss one, put a dash and move on within four seconds.',
  'Spelling and plurals count. A right answer written wrongly is '
  'marked wrong.'],

 parts=[

  dict(no=1, first=1, part='Part 1', band='l1',
       heading='Arranging a house survey',
       task='A telephone call to a surveyor · note completion',
       qtype='Questions 1-10',
       blurb='Questions 1–10. Complete the notes. Write ONE WORD '
             'AND/OR A NUMBER for each answer.',
       script=[
        ('Surveyor', 'Lowry and Patel, surveying. How can I help?'),
        ('Caller', 'I am buying a house and the lender wants a survey. I '
         'do not know which kind.'),
        ('Surveyor', 'There are three. A valuation, which is for the '
         'lender and tells you almost nothing. A homebuyer report, which '
         'is a visual inspection. And a building survey, which is the full '
         'one, where we open things up.'),
        ('Caller', 'The house was built in 1904 and has had an '
         'extension.'),
        ('Surveyor', 'Then I would take the building survey. On anything '
         'before the nineteen-twenties the homebuyer report tends to end '
         'in a list of things we recommend investigating, and you pay '
         'twice.'),
        ('Caller', 'What does it cost?'),
        ('Surveyor', 'For a three-bedroom house at that age, eight hundred '
         'and sixty pounds including the report. The homebuyer would be '
         'four hundred and ninety.'),
        ('Caller', 'How long does it take?'),
        ('Surveyor', 'On site, about four hours. The written report '
         'follows within five working days, and it runs to perhaps forty '
         'pages, of which the first two are the part you must read.'),
        ('Caller', 'Do I need to be there?'),
        ('Surveyor', 'You do not, and I would rather you were, for the '
         'last half hour. People understand a crack they have been shown '
         'and they argue with a photograph.'),
        ('Caller', 'Is there anything you cannot check?'),
        ('Surveyor', 'Drains, unless you pay for a camera survey, which is '
         'a different company. Anything under a fitted floor. And we '
         'cannot test the electrics; we can only say whether they look '
         'their age.'),
        ('Caller', 'When could you come?'),
        ('Surveyor', 'The twenty-second, which is a Tuesday, at half past '
         'nine. I need the vendor to confirm access, and I need the '
         'estate agent to tell me whether the loft has a ladder.'),
        ('Caller', 'My name is Celestine Aboubakar-Reid.'),
        ('Surveyor', 'Could you spell the first part of the surname?'),
        ('Caller', 'A-B-O-U-B-A-K-A-R, then Reid, R-E-I-D.'),
        ('Surveyor', 'I will email a quotation today. It is valid for '
         'thirty days and the fee is payable before we attend.')],
       items=[
        ('Survey recommended: ____________ survey', None, 'building',
         'Because the house dates from before the nineteen-twenties.'),
        ('Year the house was built: ____________', None, '1904',
         'The caller gives it, and it decides the recommendation.'),
        ('Cost of the recommended survey: £____________',
         None, '860', 'Against four hundred and ninety for the homebuyer '
         'report.'),
        ('Time on site: about ____________ hours', None, 'four',
         'With the report following within five working days.'),
        ('Length of report: about ____________ pages', None, 'forty',
         'Of which the surveyor says the first two must be read.'),
        ('The caller should attend for the last ____________',
         None, 'half hour',
         'Because people argue with a photograph and accept what they '
         'have been shown.'),
        ('Drains need a separate ____________ survey', None, 'camera',
         'Carried out by a different company.'),
        ('The electrics can only be judged by whether they look their '
         '____________', None, 'age',
         'The surveyor is explicit that they cannot be tested.'),
        ('Appointment: the ____________ at 9.30', None, 'twenty-second',
         'A Tuesday, subject to the vendor confirming access.'),
        ('The quotation is valid for ____________ days', None, 'thirty',
         'And the fee is payable before the visit.')]),

  dict(no=2, first=11, part='Part 2', band='l2',
       heading='A talk about a cycle hire scheme',
       task='A talk to a transport committee · short answer, multiple choice and note completion',
       qtype='Questions 11-20',
       blurb='Questions 11–20. Choose the correct letter, A, B or C, '
             'or write NO MORE THAN TWO WORDS for each answer.',
       script=[
        ('Speaker', 'I am reporting on the first year of the cycle hire '
         'scheme, and I want to be straightforward about it.'),
        ('Speaker', 'The scheme began in April with four hundred bicycles '
         'at forty-two docking stations. We now have five hundred and '
         'twenty bicycles at fifty-one stations, and the expansion was '
         'funded from revenue rather than from the council.'),
        ('Speaker', 'Usage: three hundred and ten thousand hires in the '
         'year, about twenty per cent above the business case. The '
         'average hire lasted eighteen minutes and covered two point '
         'four kilometres.'),
        ('Speaker', 'The interesting figure is who used it. Our survey '
         'found that sixty-one per cent of hires replaced a journey '
         'previously made by bus, and only nine per cent replaced a car '
         'journey. That is the opposite of what the business case assumed, '
         'and it matters, because the environmental case rested on the '
         'car figure.'),
        ('Speaker', 'Now the problems. The first is redistribution. '
         'Bicycles accumulate downhill and at the station, and we move '
         'about ninety a day by van. That is the single largest operating '
         'cost, larger than maintenance, and nobody had budgeted for '
         'it.'),
        ('Speaker', 'The second is theft and damage, which came in below '
         'what we feared. We lost eleven bicycles in the year. Vandalism '
         'cost more than theft, and almost all of it was to the docking '
         'stations rather than to the bicycles.'),
        ('Speaker', 'Third, membership. An annual member pays thirty '
         'pounds and rides free for half an hour; a casual user pays two '
         'pounds. Annual members make eighty-four per cent of hires, so '
         'a few people use it heavily and visitors hardly at all.'),
        ('Speaker', 'Two recommendations. Move eight stations uphill, '
         'which will cut the van work. And drop the casual price to one '
         'pound for a year as an experiment, because if the scheme is only '
         'serving regular commuters it is not doing the job it was funded '
         'to do.')],
       items=[
        ('How many bicycles does the scheme have now?',
         None, '520', 'Up from four hundred at the start.'),
        ('The expansion was funded from',
         ['the council', 'revenue', 'a government grant'], 1,
         'The speaker makes the point explicitly.'),
        ('Number of hires in the year: ____________ thousand',
         None, '310', 'About twenty per cent above the business case.'),
        ('Average hire duration: ____________ minutes', None, '18',
         'Covering two point four kilometres.'),
        ('What proportion of hires replaced a bus journey?',
         ['nine per cent', 'twenty per cent', 'sixty-one per cent'], 2,
         'Against nine per cent that replaced a car journey.'),
        ('The environmental case rested on the ____________ figure',
         None, 'car',
         'Which is why the survey result matters so much.'),
        ('The largest operating cost is',
         ['maintenance', 'redistribution', 'vandalism'], 1,
         'About ninety bicycles a day are moved by van.'),
        ('How many bicycles were lost in the year?',
         None, 'eleven', 'Fewer than the scheme had feared, and vandalism '
         'cost more than theft.'),
        ('Most vandalism was to the ____________ stations',
         None, 'docking', 'Rather than to the bicycles themselves.'),
        ('Annual members make what proportion of hires?',
         None, '84 per cent', 'Which is why the speaker recommends '
         'changing the casual price.')]),

  dict(no=3, first=21, part='Part 3', band='l3',
       heading='Two students discuss a questionnaire',
       task='A supervision meeting · short answer, multiple choice and note completion',
       qtype='Questions 21-30',
       blurb='Questions 21–30. Choose the correct letter, A, B or C, '
             'or write NO MORE THAN TWO WORDS for each answer.',
       script=[
        ('Supervisor', 'You have brought me a questionnaire. How many '
         'questions?'),
        ('Rafferty', 'Thirty-one, although four of them were in the '
         'pilot and nobody answered those.'),
        ('Supervisor', 'And how long will somebody spend on it?'),
        ('Imogen', 'We thought ten minutes.'),
        ('Supervisor', 'Then you have about twelve questions, because '
         'people abandon an online form at around four minutes and the '
         'ones who finish a long one are not like the ones who do not.'),
        ('Rafferty', 'So we cut nineteen questions.'),
        ('Supervisor', 'You cut the ones you cannot say what you would do '
         'with. Go through it and write, beside each question, the '
         'sentence it will let you write in the dissertation. Anything '
         'with no sentence goes.'),
        ('Imogen', 'Several of them are demographic questions, which we '
         'put in because every example we looked at had them.'),
        ('Supervisor', 'Keep the ones your analysis needs and drop the '
         'rest. Age, if you are comparing age groups. Not gender, unless '
         'you have a reason, because asking it and not using it is the '
         'commonest fault in student work.'),
        ('Rafferty', 'We have four questions with a five-point scale.'),
        ('Supervisor', 'Use the same scale for all four, with the same '
         'labels in the same direction. Changing direction to catch '
         'inattentive respondents is a technique, and in a sample of your '
         'size it costs more than it finds.'),
        ('Imogen', 'What about the open question at the end?'),
        ('Supervisor', 'Keep exactly one. It is the only part anybody will '
         'quote and it takes four hours to code for every hundred '
         'responses, so one is affordable and two are not.'),
        ('Rafferty', 'How many responses do we need?'),
        ('Supervisor', 'For the comparison you want, about a hundred and '
         'twenty, and expect a response rate of eleven per cent, which is '
         'what the department has been getting. Work backwards from '
         'that.'),
        ('Imogen', 'And when do we have to submit the ethics form for '
         'all of this?'),
        ('Supervisor', 'Before you send anything, not before you analyse '
         'it. Submit it by the end of week four, because the committee '
         'meets fortnightly and a rejection costs you a month.')],
       items=[
        ('How many questions does the questionnaire currently have?',
         None, '31', 'Rafferty gives the figure at the start.'),
        ('The supervisor says the questionnaire should have about',
         ['twelve questions', 'twenty questions',
          'thirty-one questions'], 0,
         'Because people abandon an online form at around four minutes.'),
        ('Beside each question the students should write the ____________ '
         'it will let them write.', None, 'sentence',
         'Anything with no sentence attached to it is to be cut.'),
        ('The supervisor says not to ask about gender unless',
         ['the sample is large', 'there is a reason',
          'the committee requires it'], 1,
         'Asking it and not using it is called the commonest fault in '
         'student work.'),
        ('All four scale questions should use the same labels in the same '
         '____________.', None, 'direction',
         'Reversing a scale to catch inattentive respondents costs more '
         'than it finds.'),
        ('How many open questions should there be?',
         None, 'one', 'It is the only part anybody will quote.'),
        ('Coding an open question takes four hours per ____________ '
         'responses.', None, 'hundred',
         'Which is why one is affordable and two are not.'),
        ('How many responses are needed?',
         None, '120', 'For the comparison the students want to make.'),
        ('The expected response rate is ____________ per cent',
         None, '11', 'Which is what the department has been getting.'),
        ('The ethics form must be submitted by the end of week '
         '____________', None, 'four',
         'The committee meets fortnightly and a rejection costs a '
         'month.')]),

  dict(no=4, first=31, part='Part 4', band='l4',
       heading='A lecture on how a standard gets chosen',
       task='A lecture on technical standards · note completion',
       qtype='Questions 31-40',
       blurb='Questions 31–40. Complete the notes. Write NO MORE '
             'THAN TWO WORDS AND/OR A NUMBER for each answer.',
       script=[
        ('Lecturer', 'I want to look at how a technical standard gets '
         'chosen, because the answer is almost never that it was the best '
         'one.'),
        ('Lecturer', 'Start with the general mechanism. Where a technology '
         'is more useful the more people use it, the advantage of being '
         'slightly ahead compounds. Economists call this a network effect, '
         'and its consequence is that an early lead can become permanent '
         'even if a better design appears two years later.'),
        ('Lecturer', 'The familiar example is the keyboard. The layout '
         'most of us use was patented in 1878, and it was not designed for '
         'speed. Alternative layouts exist and the experimental evidence '
         'for them is weaker than their advocates claim, but the point '
         'stands: nobody today would design that arrangement, and nobody '
         'can change it, because the cost of change falls on every typist '
         'at once and the benefit arrives slowly.'),
        ('Lecturer', 'A cleaner case is the railway gauge. In the '
         'eighteen-forties Britain had two gauges in use, and one of them, '
         'the broader, was by most engineering measures better: it was '
         'more stable and allowed higher speeds. The narrower had been '
         'laid over a greater distance first. Parliament settled it in '
         '1846 by choosing the one with more track, and the better design '
         'was converted out of existence over the next forty years.'),
        ('Lecturer', 'Notice what decided it. Not a test, not a '
         'calculation, but the quantity already installed, and that is '
         'the general rule rather than the exception.'),
        ('Lecturer', 'There are cases that went the other way, and they '
         'tell us when intervention works. Shipping containers were '
         'standardised in the nineteen-sixties, at a moment when every '
         'company used its own dimensions and none had a decisive lead. '
         'The standard chosen was not anybody’s favourite, and '
         'because no incumbent had a large advantage to defend, it was '
         'accepted within about five years.'),
        ('Lecturer', 'So the practical question for anybody writing a '
         'standard is one of timing. Early, while installed quantities are '
         'small, a committee can choose on the merits. Late, it can only '
         'ratify whatever won, and a committee that ratifies is often '
         'accused of having chosen.'),
        ('Lecturer', 'One final warning. The claim that the market picks '
         'the inferior standard has been overstated in popular writing, '
         'and several of the famous examples do not survive examination. '
         'What survives is weaker and still important: where network '
         'effects are strong, the winner is decided by the order of '
         'arrival as much as by quality, and the order of arrival is '
         'largely an accident.')],
       items=[
        ('Where a technology is more useful the more people use it, the '
         'effect is called a ____________ effect', None, 'network',
         'The lecturer gives the economists’ term.'),
        ('An early lead can become ____________ even if a better design '
         'appears later', None, 'permanent',
         'Which is the consequence the whole lecture turns on.'),
        ('Year the common keyboard layout was patented: ____________',
         None, '1878', 'And it was not designed for speed.'),
        ('The evidence for alternative layouts is ____________ than '
         'advocates claim', None, 'weaker',
         'The lecturer concedes the point and keeps the general argument '
         'about installed quantity.'),
        ('In the eighteen-forties Britain had ____________ railway gauges '
         'in use', None, 'two',
         'One broader and one narrower, and the narrower had been laid '
         'over a greater distance first.'),
        ('By engineering measures the ____________ gauge was better',
         None, 'broader',
         'It was more stable and allowed higher speeds.'),
        ('Year Parliament settled the gauge question: ____________',
         None, '1846', 'It chose the gauge with more track already '
         'laid.'),
        ('What decided the gauge was the quantity already ____________',
         None, 'installed',
         'Not a test and not a calculation.'),
        ('Shipping containers were standardised in the ____________',
         None, 'nineteen-sixties',
         'When no company had a decisive lead to defend.'),
        ('The container standard was accepted within about ____________ '
         'years', None, 'five',
         'Which the lecturer attributes to the absence of an '
         'incumbent.')]),
 ])
