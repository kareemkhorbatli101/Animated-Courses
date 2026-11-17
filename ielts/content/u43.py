# -*- coding: utf-8 -*-
"""Unit 43 - Inequality and Opportunity. IELTS Volume 5, band 7.0."""

_DEC = dict(kind='bar',
            title='Share of total income by decile group',
            sub='per cent of all household income, two countries, 2003 and '
                '2023',
            cats=['Bottom 3\ndeciles', 'Deciles 4–6', 'Deciles 7–9',
                  'Top decile'],
            series=[('Aldoria 2003', [12, 24, 36, 28]),
                    ('Aldoria 2023', [10, 21, 35, 34]),
                    ('Brevanne 2003', [15, 27, 37, 21]),
                    ('Brevanne 2023', [14, 26, 37, 23])])

_GINI = dict(kind='line',
             title='Three measures of the same distribution',
             sub='Aldoria, indexed to 2003 = 100',
             ylab='',
             x=['2003', '2008', '2013', '2018', '2023'],
             series=[('Gini coefficient', [100, 102, 103, 104, 106]),
                     ('Ratio of top decile to bottom decile',
                      [100, 108, 117, 126, 138]),
                     ('Share below 60% of median income',
                      [100, 99, 97, 96, 94])])

UNIT = dict(
 n=43, vol=5, level='B2+/C1', band='7.0',
 theme='Inequality and Opportunity',
 opener=(
   'Three measures of one distribution, moving in three directions, all of '
   'them correctly computed. That is the Task 1 problem in this unit and it '
   'is also the argument: a great deal of what looks like disagreement '
   'about inequality is disagreement about which measure answers the '
   'question being asked. The unit ends on the finding that does most to '
   'complicate the subject, which is that everybody can rise relative to '
   'their parents while nobody rises relative to anybody else.'),

 cycles=[
  dict(
   sub='Applying for support',
   step=1,
   read=[
    dict(heading='Hardship funds — eligibility and evidence',
         kind='Guidance', task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('Eligibility guidance is read for the word "normally"',
                ['Guidance about money almost always distinguishes a rule '
                 'from a presumption, and it does it with one word: '
                 'normally, ordinarily, as a rule, generally.',
                 'Every sentence containing one of those is a sentence you '
                 'can argue with. Mark them, because the questions and the '
                 'appeals both come from exactly those sentences.']),
         paras=[
          'The fund exists to meet a specific need that cannot be met from '
          'income or savings, and it is not an income supplement. An '
          'application must therefore identify what the money would be spent '
          'on, and applications describing a general shortage of money are '
          'refused at the first stage without being assessed on their '
          'merits.',
          'Applicants are normally expected to have savings below £1,200. '
          'The word normally carries weight here: the limit may be '
          'disregarded where savings are committed to a specific purpose '
          'that is itself a need, such as a tenancy deposit already agreed, '
          'and an application that explains such a commitment is assessed '
          'rather than refused.',
          'Evidence of need is what distinguishes a strong application from '
          'a weak one, and the required standard is lower than most '
          'applicants assume. A photograph of a broken appliance, a repair '
          'quotation, a letter from a school: any of these is sufficient. '
          'What is not sufficient is a description of the need in the '
          'applicant’s own words with nothing attached.',
          'Awards are discretionary and are made in kind wherever the need '
          'can be met in kind. A cooker is bought and delivered rather than '
          'funded, which some applicants experience as distrust and which '
          'exists because an award in kind is not counted as income by other '
          'bodies and a cash payment sometimes is.',
          'A refusal may be reviewed once, within twenty-eight days, by a '
          'panel that did not take the original decision. Roughly a quarter '
          'of reviews succeed, and the great majority of those succeed '
          'because evidence was supplied at the review stage that was '
          'available at the application stage and was not sent.'],
         items=[
          ('An application describing a general shortage of money is',
           ['assessed on its merits', 'refused at the first stage',
            'referred elsewhere', 'put on a waiting list'], 1,
           'Paragraph 1: the fund is not an income supplement.'),
          ('The savings limit may be disregarded where savings are',
           ['below £600', 'committed to a specific need',
            'held jointly', 'recently received'], 1,
           'Paragraph 2, which gives an agreed tenancy deposit as the '
           'example.'),
          ('Awards are made in kind because an award in kind',
           ['is cheaper', 'is not counted as income by other bodies',
            'arrives faster', 'can be recovered'], 1,
           'Paragraph 4, where a cash payment sometimes is counted.'),
          ('The normal savings limit is £____________.', None, '1,200',
           'Paragraph 2, qualified by the word "normally".'),
          ('Roughly ____________ of reviews succeed.', None, 'a quarter',
           'Paragraph 5, within a twenty-eight day window.'),
          ('Most successful reviews succeed because of ____________ that '
           'was available earlier.', None, 'evidence',
           'Paragraph 5, which was not sent with the original '
           'application.')]),
    dict(heading='How applications are assessed',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Applications are checked first for completeness. An incomplete '
          'application is held for fourteen days and the applicant is '
          'telephoned once; if nothing arrives it is closed rather than '
          'refused, which matters because a closure does not count as the '
          'one application permitted in a six-month period.',
          'A complete application is scored against three criteria: the '
          'immediacy of the need, whether the need can be met from another '
          'source, and whether an award would resolve the situation or '
          'merely postpone it. The third criterion does most of the work and '
          'is the one applicants least often address.',
          'Applications scoring above the threshold are awarded by an '
          'officer. Those scoring within two points of it go to the weekly '
          'panel, which has the discretion the officer does not, and which '
          'awards in roughly half of the cases it sees.',
          'Decisions are sent in writing within ten working days and '
          'state, in a single sentence near the end, which criterion was '
          'decisive and why the application did not meet it. That sentence is the one to read '
          'before deciding whether to seek a review, because a refusal on '
          'the second criterion is answered with evidence and a refusal on '
          'the third rarely is.'],
         items=[
          ('An incomplete application is held for ____________ days.',
           None, 'fourteen',
           'Paragraph 1, after which it is closed rather than refused.'),
          ('A complete application is scored against ____________ '
           'criteria.', None, 'three',
           'Paragraph 2: immediacy, other sources, and whether it '
           'resolves.'),
          ('Applications within two points of the threshold go to the '
           'weekly ____________.', None, 'panel',
           'Paragraph 3, which awards in about half the cases it sees.'),
          ('The decision letter states which ____________ was decisive.',
           None, 'criterion',
           'Paragraph 4, which determines whether a review is worth '
           'seeking.')])],
   listen=[
    dict(heading='Applying to a hardship fund', part='Part 1',
         task='A call to a welfare office', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Adviser', 'Hardship fund, Celestine speaking.'),
          ('Caller', 'Hello. I was refused last month and somebody told me I '
           'could ask for it to be looked at again.'),
          ('Adviser', 'You can, within twenty-eight days. Do you have the '
           'decision letter in front of you?'),
          ('Caller', 'I do.'),
          ('Adviser', 'There is a sentence near the end saying which '
           'criterion was decisive. Can you find it?'),
          ('Caller', 'It says the need could reasonably have been met from '
           'another source.'),
          ('Adviser', 'Then that is the second criterion, and that is the '
           'one that is answered with evidence. What was the need?'),
          ('Caller', 'A cooker. Ours stopped working in October.'),
          ('Adviser', 'And what other source did they think you had?'),
          ('Caller', 'I assume they meant my sister. I mentioned her in the '
           'form.'),
          ('Adviser', 'That will be it. A mention of family in the form is '
           'read as an available source unless you say otherwise, which is '
           'unfair and is how the scoring works. Can your sister help?'),
          ('Caller', 'She is on the same income as me and has two '
           'children.'),
          ('Adviser', 'Then write exactly that, in one sentence, and the '
           'review has a good chance. Roughly a quarter succeed and most of '
           'those are this situation.'),
          ('Caller', 'Do I need anything else?'),
          ('Adviser', 'A photograph of the cooker and a quotation for a '
           'replacement if you can get one. The standard of evidence is much '
           'lower than people think — a photograph is genuinely enough — '
           'and an application with nothing attached is the commonest reason '
           'for a refusal.'),
          ('Caller', 'And if they say yes, do I get the money?'),
          ('Adviser', 'You get a cooker. Awards are made in kind where they '
           'can be, and I will tell you why, because people find it '
           'insulting. A cooker is not counted as income by anybody else. '
           'Cash sometimes is, and it can reduce another payment you '
           'receive.'),
          ('Caller', 'That had not occurred to me.'),
          ('Adviser', 'It occurs to nobody and it is the reason for the '
           'rule. Send the review to the address on the letter and put the '
           'reference at the top — what is the reference?'),
          ('Caller', 'H-F, then four-one-five-two.'),
          ('Adviser', 'HF4152. I will note that you are sending it, which '
           'stops the file being archived in the meantime.')],
         items=[
          ('Time limit for a review: ____________ days', None,
           'twenty-eight', 'From the date of the decision letter.'),
          ('The decisive criterion was that the need could be met from '
           'another ____________.', None, 'source',
           'Which the adviser says is the criterion answered with '
           'evidence.'),
          ('The need: a replacement ____________', None, 'cooker',
           'Which stopped working in October.'),
          ('The applicant should attach a photograph and a ____________.',
           None, 'quotation',
           'For a replacement, if one can be obtained.'),
          ('Awards are made in kind because cash can reduce another '
           '____________.', None, 'payment',
           'Since an award in kind is not counted as income.'),
          ('Reference: HF____________', None, '4152',
           'To be written at the top of the review request.')]),
    dict(heading='A short talk: starting from different places',
         part='Part 2', task='A talk at a teacher training day',
         band='l2', qtype='Questions 17-20',
         script=[
          ('Speaker', 'I want to give you a number that changed how I teach, '
           'and then three ways of reading it, two of which I think are '
           'wrong.'),
          ('Speaker', 'In our county, a child in the bottom fifth of '
           'household income who scores in the top fifth at age seven has '
           'about a one in three chance of being in the top fifth of '
           'earnings at thirty. A child in the top fifth of income who '
           'scores in the bottom fifth at seven has about a one in two '
           'chance of ending up there.'),
          ('Speaker', 'So the bright poor child is outperformed by the '
           'struggling rich one, over twenty-three years, and that is not a '
           'statement about either child. The first reading, which I hear '
           'constantly in staffrooms, is that it shows schools do not '
           'matter. It does not show that. Both children went to schools, '
           'and the comparison tells you nothing about what the schools '
           'contributed.'),
          ('Speaker', 'The second reading is that it shows the bright poor '
           'child was not really bright, that the test at seven measured '
           'preparation rather than capacity. There is something in this, '
           'and it is much smaller than people want it to be: the pattern '
           'survives with later tests, with teacher assessments, and with '
           'measures taken at fourteen.'),
          ('Speaker', 'The reading I think is right is the dull one. What '
           'the rich family buys is not an advantage at any single point. It '
           'buys a sequence of recoveries. Every time something goes wrong — '
           'an illness, a bad year, a wrong subject choice, a first job that '
           'fails — there is a second chance, and over twenty-three years '
           'there are perhaps eight such moments.',),
          ('Speaker', 'That reframing has a practical consequence for you '
           'and it is the reason I am telling you. An intervention at one '
           'point produces a smaller effect than anybody expects, which is '
           'the finding that has disappointed thirty years of policy. '
           'Something that catches a child at the moment of each failure '
           'produces a much larger one, and almost nothing in our system is '
           'built that way.')],
         items=[
          ('A low-income child scoring in the top fifth at seven has what '
           'chance of top-fifth earnings at thirty?',
           ['One in two', 'One in three', 'One in five',
            'One in ten'], 1,
           'Against one in two for a high-income child scoring in the '
           'bottom fifth.'),
          ('The speaker rejects the reading that schools do not matter '
           'because', ['schools are well funded', 'the comparison says '
            'nothing about what schools contributed',
            'the data is old', 'both children were tested'], 1,
           'Both children attended schools.'),
          ('The claim that early tests measure preparation rather than '
           'capacity is', ['entirely right', 'partly right but smaller '
            'than people want', 'entirely wrong', 'untested'], 1,
           'The pattern survives with later tests and teacher '
           'assessments.'),
          ('The speaker says what a wealthy family buys is',
           ['a better school', 'a sequence of recoveries',
            'higher test scores', 'more tutoring'], 1,
           'Perhaps eight such moments across twenty-three years.')])],
   speak=dict(
    part='Part 1', focus='Help people can get where you live',
    intro=('Two or three sentences each. A specific scheme beats a general '
           'statement about support.'),
    qs=['Is there help available for people in difficulty where you live?',
        'Do people know about it?',
        'Should such help come from the government or from charities?',
        'Is it easy to apply for things in your country?'],
    shape=[('answer', 'There is a council hardship fund that almost nobody '
            'has heard of.'),
           ('support', 'A neighbour got a washing machine through it last '
            'year.'),
           ('follow-up', 'She only found out because a nurse happened to '
            'mention it, which seems a poor distribution method.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Appealing a refused application for support',
         prompt=('An application you made for financial support has been '
                 'refused. Write a letter asking for the decision to be '
                 'reviewed. In your letter: identify the application; '
                 'explain why you believe the decision is wrong; say what '
                 'you would like to happen. Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing to request a review of the decision of 14 November '
          'refusing my application to the hardship fund, reference HF4152.',
          'The decision states that the need could reasonably have been met '
          'from another source. I believe this refers to my sister, whom I '
          'mentioned in the application as the person who has been lending '
          'me a hotplate since October. The decision appears to have applied '
          'the criterion without regard to her circumstances: she receives '
          'the same income as I do, has two dependent children and has '
          'already told me she cannot help further.',
          'I attach three items which were available in October and which I '
          'did not think to send: a photograph of the cooker with the fault, '
          'a written quotation of £268 for a replacement, and a letter from '
          'my sister confirming the position above. I accept that these '
          'should have accompanied the application.',
          'I would ask the panel to reconsider the application on the '
          'evidence now supplied. If an award is made I would be content to '
          'receive it in kind, and I would be grateful to know the outcome '
          'before the end of term, as the current arrangement involves my '
          'children eating at my sister’s house four evenings a week.',
          'Yours faithfully,',
          'N. Abara-Lindqvist'],
         notes=[
          'The letter quotes the decision’s own wording and then shows it '
          'rested on an assumption that was never checked. An appeal that '
          'attacks the reasoning of a decision is far stronger than one that '
          'disputes its outcome.',
          'The third paragraph concedes that the evidence should have been '
          'sent earlier. Appeals of this kind succeed mainly on new '
          'evidence, and conceding the omission costs nothing and removes '
          'the reader’s obvious objection.',
          'The final paragraph supplies a reason for urgency that is '
          'concrete and unstated until now. One such detail, offered without '
          'self-pity, does more than a paragraph of description.'],
         criterion=[('Quoting the decision’s own wording',
                     'Task Achievement'),
                    ('Conceding the omission that caused the refusal',
                     'Task Response'),
                    ('One concrete reason for urgency, without self-pity',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Appeal with evidence and reference to criteria',
    explain=('An appeal is read by somebody checking whether a criterion '
             'was applied correctly. These patterns name the criterion and '
             'then show what the decision assumed.'),
    examples=['The decision appears to have applied the threshold without '
              'regard to her circumstances.',
              'I accept that these should have accompanied the '
              'application.',
              'The decision states that the need could be met from another '
              'source.',
              'I would ask the panel to reconsider on the evidence now '
              'supplied.'],
    task='Rewrite each complaint as an appeal against the reasoning.',
    items=[('The decision was unfair.',
            'The decision appears to have treated a family member as an '
            'available source without establishing that she could help.'),
           ('I need the money.',
            'The need is immediate: the cooker has been unusable since '
            'October and the children eat elsewhere four evenings a week.'),
           ('They did not read my form.',
            'The criterion cited does not appear to take account of the '
            'circumstances set out at section 4 of the application.'),
           ('I am sending more evidence now.',
            'I attach three items that were available in October and which I '
            'did not think to send.'),
           ('Please change your mind.',
            'I would ask the panel to reconsider the application on the '
            'evidence now supplied.')]),
   vocab=[('means test', 'a check of income and savings before an award'),
          ('disregard', 'to leave something out of a calculation'),
          ('in kind', 'as goods or services rather than money'),
          ('award', 'a grant of help that has been decided'),
          ('immediacy', 'how urgently something is needed'),
          ('review body', 'a group that reconsiders a decision'),
          ('closure', 'ending a case without deciding it'),
          ('dependent', 'somebody who relies on another for support')],
   expr=[('The decision appears to have applied the threshold without '
          'regard to', 'attacks the reasoning rather than the outcome'),
         ('I accept that these should have accompanied the application',
          'concedes an omission and removes an objection'),
         ('the standard of evidence is lower than people think',
          'corrects a belief that causes refusals'),
         ('which some applicants experience as distrust',
          'acknowledges a reaction before explaining a rule')],
   trans=['furthermore', 'in this connection', 'I attach',
          'I would ask the panel'],
  ),

  dict(
   sub='Starting from different places',
   step=2,
   read=[
    dict(heading='Four people on the same opportunity',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 21-26',
         paras=[
          'A  Perpetua: We all got the same bursary and I want to be careful '
          'about what that did and did not do. It paid the fees. It did not '
          'pay for the fact that I worked nineteen hours a week and Dominic '
          'did not, and by the third year that difference was visible in '
          'everything except the fee account, which is the only place '
          'anybody was looking.',
          'B  Dominic: I had the same bursary and I am not going to pretend '
          'I was in the same position. What I had was not money, or not '
          'mainly money. It was that when the first placement went badly '
          'there was somebody to ring who had been through it, and I got a '
          'second placement within a fortnight. I did not notice that at the '
          'time and I notice it now.',
          'C  Ingrid: I have administered this scheme for eleven years and '
          'the thing I would change is the measurement. We report how many '
          'students receive the award and how many complete, and both '
          'numbers are good. Nobody asks what each of them had to do to '
          'complete, and that is where the whole of the difference lives.',
          'D  Haruki: I think the scheme worked and I think the objections '
          'to it are correct, and I do not experience that as a '
          'contradiction. Compared to no scheme, it was transformative for '
          'about forty people a year. Compared to the position of somebody '
          'whose parents could absorb a failure, it closed perhaps a third '
          'of the gap. Both of those are true and only one of them is in the '
          'annual report.'],
         items=[
          ('Which person identifies unpaid work as the hidden difference?',
           ['Perpetua', 'Dominic', 'Ingrid', 'Haruki'], 0,
           'Nineteen hours a week, invisible in the fee account.'),
          ('Which person describes an advantage they did not notice at the '
           'time?', ['Perpetua', 'Dominic', 'Ingrid', 'Haruki'], 1,
           'Somebody to ring when the first placement went badly.'),
          ('Which person criticises what the scheme measures?',
           ['Perpetua', 'Dominic', 'Ingrid', 'Haruki'], 2,
           'Receipt and completion, but not what completion cost.'),
          ('Which person holds two apparently opposed views at once?',
           ['Perpetua', 'Dominic', 'Ingrid', 'Haruki'], 3,
           'Transformative against no scheme; a third of the gap against '
           'wealth.'),
          ('Dominic believes the bursary was of no value.',
           ['Yes', 'No', 'Not Given'], 1,
           'He says what he had was not mainly money, which is not the '
           'same claim.',
           {0: 'Yes would need no value; he says what he had was not '
               'mainly money.', 2: 'Not Given is wrong because he says what helped him.'}),
          ('Ingrid believes the completion figures are inaccurate.',
           ['Yes', 'No', 'Not Given'], 1,
           'She calls both numbers good and objects to what they omit.',
           {0: 'Yes would need inaccuracy; she calls both numbers '
               'good.', 2: 'Not Given is wrong because she rates the figures.'})])],
   listen=[
    dict(heading='Two teachers disagree about fairness', part='Part 3',
         task='A staffroom conversation', band='l3',
         qtype='Questions 27-32',
         script=[
          ('Oriana', 'I am going to put the extra hours into the top set and '
           'I would like to say why before you object.'),
          ('Bartolomeu', 'I will object anyway, but go on.'),
          ('Oriana', 'Four of them are a grade off a university place that '
           'would change what their family does for a generation. The bottom '
           'set are three grades off anything, and the same hours move them '
           'from a four to a four.'),
          ('Bartolomeu', 'That is the strongest version of the argument and '
           'I want to separate two things inside it. You are claiming the '
           'return is higher. I accept the return is higher. You are also '
           'implying that the four students needed the hours, and I do not '
           'think they did.'),
          ('Oriana', 'Say more.'),
          ('Bartolomeu', 'Three of your four have a parent who can pay for '
           'tutoring and has. They will get the grade whether you stay late '
           'or not. Your hours will produce the grade for exactly one of '
           'them, which is a lower return than you are calculating, because '
           'you are counting the outcome rather than your contribution to '
           'it.'),
          ('Oriana', 'That is a better objection than the one I was '
           'expecting and I am not sure it settles it. One student is still '
           'one student.'),
          ('Bartolomeu', 'It is. And the comparison is not one student '
           'against nothing. It is one student against what the same hours '
           'do in the bottom set, which you have assessed as nothing on the '
           'basis of the grade boundary rather than on the basis of what '
           'happens to them afterwards.'),
          ('Oriana', 'Go on, because that is the part I have not thought '
           'about.'),
          ('Bartolomeu', 'A four and a five are the same to a university. '
           'They are not the same to an apprenticeship, they are not the '
           'same to a college course with an entry requirement, and two of '
           'those students are going to one of those. The grade boundary '
           'that makes your calculation obvious is a boundary in your '
           'subject, not in their lives.'),
          ('Oriana', 'Then I am measuring my contribution against a '
           'threshold that matters to me and not to them.'),
          ('Bartolomeu', 'You are, and so was I for about nine years. I '
           'would split the hours and I would tell you I am not confident '
           'about the ratio.'),
          ('Oriana', 'Split them how?'),
          ('Bartolomeu', 'Evenly, and keep a record of what happens to all '
           'of them for three years, because neither of us actually knows '
           'and this department has had this argument every autumn since I '
           'arrived.')],
         items=[
          ('Oriana proposes to give extra hours to',
           ['the bottom set', 'the top set', 'both equally',
            'students without tutors'], 1,
           'Where four students are a grade off a university place.'),
          ('Bartolomeu accepts that',
           ['the return is higher', 'the students need the hours',
            'grades do not matter', 'the bottom set cannot improve'], 0,
           'While separating that from the claim that they need them.'),
          ('His first objection is that three of the four',
           ['have already been tutored', 'are not able enough',
            'have left', 'do not want the hours'], 0,
           'So Oriana’s hours produce the grade for only one of them.'),
          ('He says Oriana is counting',
           ['the wrong students', 'the outcome rather than her '
            'contribution', 'the wrong subject', 'the hours wrongly'], 1,
           'Which makes the calculated return too high.'),
          ('His second objection concerns',
           ['the cost of tutoring', 'what a four and a five mean outside '
            'university entry', 'staff workload', 'the timetable'], 1,
           'A four and a five differ for apprenticeships and college '
           'courses.'),
          ('What do they agree to do?',
           ['Keep the hours in the top set', 'Split the hours evenly and '
            'track outcomes for three years', 'Ask the head',
            'Stop the extra hours'], 1,
           'Because neither of them actually knows.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Opportunity',
    intro=('Short answers, then the long turn. The explanation bullet is '
           'where a band 7 answer separates from a band 6.'),
    cue=('Describe an opportunity that came your way.',
         ['what it was', 'how it came about', 'what you did with it',
          'and explain how much difference it made']),
    qs=['Have you had opportunities that others did not?',
        'Do people in your country have equal chances?',
        'Now look at the card. You have one minute to make notes.',
        'What makes an opportunity useful to somebody?'],
    shape=[('answer', 'A placement at a firm where my aunt had worked '
            'twenty years earlier.'),
           ('support', 'She rang somebody; there was no advertisement and '
            'no application.'),
           ('follow-up', 'I did the work well and I am aware that is not '
            'the relevant part.'),
           ('support', 'What it actually gave me was a reference from a '
            'name people recognised.'),
           ('follow-up', 'Which mattered more than anything I did in the '
            'eight weeks, and I did not understand that until much '
            'later.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Equal opportunities or equal outcomes?',
         prompt=('Some people believe societies should aim to equalise '
                 'opportunities; others believe they should aim to equalise '
                 'outcomes. Discuss both views and give your own opinion. '
                 'Write at least 250 words.'),
         model=[
          'The two aims are usually presented as positions on a single '
          'scale, with the serious argument being about how far along it to '
          'go. They are not on one scale. Equal opportunity is a claim about '
          'the process by which people arrive at positions; equal outcome is '
          'a claim about the distribution of the positions themselves, and '
          'it is possible to achieve either completely while failing the '
          'other entirely.',
          'The case for prioritising opportunity is a case about desert and '
          'about information. If positions are allocated by capacity and '
          'effort rather than by birth, the allocation is defensible to the '
          'people who lose out, and the economy learns who is actually good '
          'at what, which a system distributing by inheritance cannot do. '
          'These are real goods and they are not available under any other '
          'arrangement.',
          'The case for attending to outcomes rests on a mechanism rather '
          'than on envy, and it is the stronger of the two for a reason '
          'rarely stated. Outcomes in one generation are the starting '
          'conditions of the next. A society with perfectly equal '
          'opportunity and very unequal outcomes produces, twenty-five years '
          'later, a society with unequal opportunity, because the children '
          'of the winners arrive with advantages the process cannot strip '
          'out. Equality of opportunity is therefore not stable at a high '
          'level of outcome inequality: it is a condition that has to be '
          'continuously rebuilt against the results of its own operation.',
          'That argument has a limit worth stating. It does not show that '
          'outcomes should be equal, only that the spread of outcomes '
          'constrains how much opportunity is achievable, which is a claim '
          'about a relationship rather than about a target.',
          'My own position follows from that relationship. The aim should be '
          'equality of opportunity, and achieving it requires compressing '
          'outcomes to the extent, and only to the extent, that outcome '
          'inequality is transmitted to the next generation. That makes '
          'inheritance, early childhood provision and the funding of schools '
          'the instruments that matter, and makes the gap between two '
          'salaries largely beside the point — which is close to the '
          'opposite of where public argument about inequality usually '
          'spends its energy.'],
         notes=[
          'The introduction refuses the shared framing: these are not two '
          'points on one scale. A Task 2 answer that corrects the structure '
          'of a question before answering it is doing the thing band 7 '
          'descriptors call a clear position supported throughout.',
          'Paragraph 3 supplies a mechanism — outcomes become next '
          'generation’s starting conditions — which converts a value '
          'disagreement into a factual relationship. Then paragraph 4 bounds '
          'it, refusing to claim more than the mechanism supports.',
          'The conclusion derives an instrument from the mechanism and names '
          'what it makes irrelevant. Saying what your position implies is '
          'unimportant is a strong close and very rarely attempted.'],
         criterion=[('Refusing the framing shared by both positions',
                     'Task Response'),
                    ('A mechanism that converts values into a relationship',
                     'Task Response'),
                    ('Naming what the position makes irrelevant',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Distinguishing two claims that share a word',
    explain=('Many arguments are conducted between two senses of one word. '
             'Separating them explicitly is often the entire contribution a '
             'good essay makes.'),
    examples=['Equal opportunity and equal outcome are not degrees of one '
              'thing.',
              'The first is a claim about process; the second about '
              'distribution.',
              'Fair in the sense of unbiased, not fair in the sense of '
              'equal.',
              'Both uses are legitimate and only one of them is in '
              'dispute.'],
    task='Rewrite each sentence so that the two senses are separated.',
    items=[('We should aim for a fair society.',
            'Fair can mean a process nobody is excluded from or a '
            'distribution nobody is far below; the two require different '
            'policies.'),
           ('Education should be equal.',
            'Equal provision and equal attainment are different aims, and '
            'the first is sometimes pursued at the cost of the second.'),
           ('They want equality.',
            'They want equality of treatment; their opponents are arguing '
            'about equality of result.'),
           ('That is not merit.',
            'Merit as demonstrated capacity and merit as deserved reward are '
            'distinct claims, and the second does not follow from the '
            'first.'),
           ('Everyone has the same chance.',
            'Everyone faces the same formal rules; the probability of '
            'success under those rules differs by a factor of three.')]),
   vocab=[('opportunity', 'the chance to compete for a position'),
          ('outcome', 'where people end up, not how they got there'),
          ('bursary', 'a grant of money to a student'),
          ('compensation', 'a transfer that offsets a disadvantage'),
          ('transmitted', 'passed on to the following generation'),
          ('compress', 'to reduce the spread between top and bottom'),
          ('entitlement to services', 'what a person may claim as of right'),
          ('just deserts', 'what somebody is held to have earned')],
   expr=[('Equal opportunity and equal outcome are not degrees of one '
          'thing', 'separates two senses of one word'),
         ('it buys a sequence of recoveries',
          'names an advantage that is invisible at any single point'),
         ('you are counting the outcome rather than your contribution to '
          'it', 'corrects what is being measured'),
         ('both of those are true and only one of them is in the annual '
          'report', 'contrasts what is known with what is recorded')],
   trans=['whereas', 'that said', 'the case for', 'that argument has a '
          'limit'],
  ),

  dict(
   sub='Measuring a gap',
   step=3,
   read=[
    dict(heading='Three measures of the same inequality',
         kind='Data article',
         task='Matching information and table completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_DEC, figure2=_GINI,
         paras=[
          'The two charts describe income inequality in the same country '
          'from different angles, and the second contains the problem this '
          'unit is about. The first shows how total income is divided '
          'between decile groups in two countries at two dates. The second '
          'shows three standard measures of the same distribution in one of '
          'those countries, each indexed so that 2003 equals 100.',
          'The decile chart is straightforward. In Aldoria the top tenth of '
          'households took 28 per cent of all income in 2003 and 34 per cent '
          'in 2023, while the bottom three deciles fell from 12 per cent to '
          '10. In Brevanne the same figures moved far less: the top decile '
          'from 21 to 23 per cent, the bottom three from 15 to 14.',
          'The second chart is where competent people start disagreeing. '
          'Across the same twenty years in Aldoria, the Gini rose by six '
          'per cent, the top-to-bottom decile ratio rose by thirty-eight '
          'per cent, and the share of households below sixty per cent of '
          'median income fell by six per cent.',
          'All three are correctly computed from the same data, and they '
          'point in three directions. Inequality rose a little, rose '
          'enormously, and fell. A commentator wishing to argue any of those '
          'three positions can do so honestly, by choosing a measure and not '
          'mentioning the others.',
          'The explanation is that each measure is sensitive to a different '
          'part of the distribution. The decile ratio compares the two ends '
          'and ignores everything between them, so it moves sharply when the '
          'top pulls away. The Gini weights the middle heavily, and the '
          'middle of this distribution barely moved. The relative poverty '
          'measure counts households below a fraction of the median, so it '
          'improves whenever the median falls relative to the top — which '
          'is to say, it can improve because the middle is losing ground.',
          'That last property is the single most misused statistic in the '
          'field. A fall in relative poverty is consistent with every '
          'household below the median becoming poorer, provided the median '
          'falls faster.',
          'None of this makes the measures useless or interchangeable. It '
          'makes the choice of measure a substantive claim about which part '
          'of a distribution matters, and it means that a report quoting one '
          'measure without saying what the others do is not reporting a '
          'finding. It is making an argument while appearing not to.'],
         items=[
          ('Which paragraph explains why the three measures diverge?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'Each is sensitive to a different part of the distribution.'),
          ('Which paragraph states the counter-intuitive property of the '
           'relative poverty measure?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 7'], 2,
           'It can improve while every household below the median gets '
           'poorer.'),
          ('Which paragraph says that choosing a measure is itself a '
           'claim?', ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 4'], 2,
           'A report quoting one measure alone is making an argument.'),
          ('Aldoria’s top decile share in 2023: ____________ per cent',
           None, '34', 'Paragraph 2, up from 28 per cent in 2003.'),
          ('The decile ratio rose by ____________ per cent over the '
           'period.', None, 'thirty-eight',
           'Paragraph 3, against six per cent for the Gini.'),
          ('The relative poverty measure improves whenever the '
           '____________ falls relative to the top.', None, 'median',
           'Paragraph 5, which is why it can improve as the middle loses '
           'ground.')])],
   listen=[
    dict(heading='An economist on inequality measures', part='Part 4',
         task='A lecture on measuring distributions', band='l4',
         qtype='Questions 39-44',
         figure=_GINI,
         script=[
          ('Economist', 'Three lines on this chart, three measures of one '
           'distribution, all computed correctly from the same data, and '
           'they go in three different directions. Everything I want to say '
           'today follows from that and none of it is technically '
           'difficult.'),
          ('Economist', 'Over twenty years the Gini rises by six per cent, '
           'the ratio of top decile to bottom decile rises by thirty-eight, '
           'and the share below sixty per cent of median income falls by '
           'six. Inequality rose slightly, rose enormously, and fell. Choose '
           'your headline.'),
          ('Economist', 'The reason is that each measure is listening to a '
           'different part of the distribution. The decile ratio hears only '
           'the two ends. The Gini is dominated by the middle, and this '
           'middle barely moved. The relative poverty line is a fraction of '
           'the median, which means it is a measure of the shape below the '
           'middle and not a measure of poverty at all in the sense most '
           'listeners assume.'),
          ('Economist', 'Take that last one slowly, because it produces the '
           'most misused number in my field. If the median falls faster than '
           'the bottom, relative poverty improves. Every household below the '
           'median can be getting poorer and the statistic can be getting '
           'better, and that is not a flaw in the measure, it is what the '
           'measure was built to say.'),
          ('Economist', 'So what should you do with three numbers that '
           'disagree? Not average them, which is the instinct and is '
           'meaningless. Ask which part of the distribution your question is '
           'about. If you are asking about destitution, you want an absolute '
           'line and none of these three is one. If you are asking about '
           'political power, you want the top end and the decile ratio is '
           'the only candidate here.'),
          ('Economist', 'And the general lesson, which applies far beyond '
           'this subject: when a body publishes one of these measures and '
           'not the others, it has made a substantive argument while '
           'appearing to report a fact. I would ask for all three as a '
           'matter of routine, and the reaction to that request tells you a '
           'great deal about what was intended.'),
          ('Economist', 'One last practical point, since several of you '
           'will end up writing these reports. Put all three measures in a '
           'table at the front, not one in the text and two in an annex, '
           'because an annex is where a number goes to be true without '
           'being read. If your organisation objects to the table, you '
           'have learned something about your organisation and you should '
           'write that down as well.')],
         items=[
          ('Over twenty years the decile ratio rose by',
           ['six per cent', 'thirty-eight per cent', 'ninety-four per '
            'cent', 'it fell'], 1,
           'While the Gini rose by six and relative poverty fell by six.'),
          ('The Gini is dominated by',
           ['the top end', 'the middle', 'the bottom end',
            'the extremes'], 1,
           'Which in this distribution barely moved.'),
          ('The relative poverty line is defined as a fraction of the',
           ['mean', 'median', 'top decile', 'minimum wage'], 1,
           'Making it a measure of the shape below the middle.'),
          ('Relative poverty can improve while',
           ['the top gets richer', 'every household below the median gets '
            'poorer', 'the population falls', 'prices rise'], 1,
           'Provided the median falls faster than the bottom.'),
          ('When three measures disagree, the economist advises',
           ['averaging them', 'asking which part of the distribution the '
            'question is about', 'using the oldest', 'using the Gini'], 1,
           'Averaging them he calls meaningless.'),
          ('Publishing one measure and not the others amounts to',
           ['a reporting error', 'a substantive argument presented as a '
            'fact', 'standard practice', 'a technical limitation'], 1,
           'Which is why he asks for all three as a matter of routine.')])],
   speak=dict(
    part='Part 3', focus='What a measure captures',
    intro=('Five or six sentences. Try once to say that a statistic can '
           'improve for a reason nobody would want.'),
    qs=['How should a country measure inequality?',
        'Can statistics about society be misleading without being wrong?',
        'Should governments publish all the measures they hold?',
        'Do people understand the figures they are given?'],
    shape=[('answer', 'It depends on which part of the distribution you are '
            'asking about.'),
           ('support', 'Three correct measures of one country moved in '
            'three directions over twenty years.'),
           ('follow-up', 'The one that fell is a fraction of the median.'),
           ('support', 'So it improves if the middle falls faster than the '
            'bottom.'),
           ('follow-up', 'Which means a statistic can get better while '
            'everybody below the middle gets poorer.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Income share by decile, two countries, two decades',
         prompt=('The chart below shows the share of total household income '
                 'taken by four decile groups in two countries, in 2003 and '
                 '2023. Summarise the information by selecting and reporting '
                 'the main features, and make comparisons where relevant. '
                 'Write at least 150 words.'),
         figure=_DEC,
         model=[
          'The bar chart compares how total household income was divided '
          'between four decile groups in Aldoria and Brevanne, in 2003 and '
          '2023. Overall, income is more evenly distributed in Brevanne than '
          'in Aldoria at both dates, and the gap between the two countries '
          'widened over the period because the change in Aldoria was '
          'considerably larger.',
          'Taking Aldoria first, the share of the top decile rose from 28 to '
          '34 per cent, a gain of six percentage points. Every other group '
          'lost ground: the bottom three deciles fell from 12 to 10 per '
          'cent, deciles 4 to 6 from 24 to 21, and deciles 7 to 9 from 36 to '
          '35.',
          'Brevanne moved in the same direction by much smaller amounts. Its '
          'top decile rose from 21 to 23 per cent and its bottom three '
          'deciles fell from 15 to 14, while deciles 7 to 9 were unchanged '
          'at 37 per cent and deciles 4 to 6 fell by a single point.',
          'The most striking comparison is at the top. Aldoria’s top decile '
          'took a third more of national income than Brevanne’s in 2003 and '
          'almost half as much again by 2023, while the two countries’ '
          'middle groups remained within two points of each other '
          'throughout.'],
         notes=[
          'The Overall statement makes a comparison between the countries '
          'rather than describing either, and states which changed more. On '
          'a two-country chart, the comparison is the main feature and '
          'describing each country in turn without one is the standard way '
          'to lose Task Achievement marks.',
          'Each country gets a paragraph in which the figures are given as '
          'movements rather than as levels, and the losing groups are '
          'reported as a set rather than individually. Grouping what behaves '
          'alike is the unit 29 lesson applied at this level.',
          'The final paragraph picks the one comparison worth making — the '
          'top decile — and uses proportions rather than points. Saying '
          '"a third more" and "half as much again" does work that '
          '"six points higher" cannot.'],
         criterion=[('An Overall statement that compares rather than '
                     'describes', 'Task Achievement'),
                    ('Reporting the losing groups as a set',
                     'Coherence and Cohesion'),
                    ('Proportional comparison at the point of greatest '
                     'difference', 'Lexical Resource')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Nominal clauses as subject and complement',
    explain=('A clause used as a subject lets you make the finding itself '
             'the thing you are describing. It is a marker of academic '
             'register and at band 7 it should appear two or three times in '
             'a Task 1 or Task 2 answer, not once.'),
    examples=['What the three measures share is their source data.',
              'That the Gini barely moved is the fact the other two '
              'conceal.',
              'By one measure the gap narrowed; by another it widened.',
              'Which measure is chosen is itself a claim about what '
              'matters.'],
    task='Rewrite each sentence so that a clause is the subject or '
         'complement.',
    items=[('The measures use the same data.',
            'What the three measures have in common is the data they are '
            'computed from.'),
           ('The middle did not change much, and this is important.',
            'That the middle barely moved is what the Gini is reporting and '
            'the decile ratio is not.'),
           ('People choose measures that suit them.',
            'Which measure a body publishes is itself an argument about '
            'which part of the distribution matters.'),
           ('Relative poverty fell for an odd reason.',
            'What produced the fall in relative poverty was a decline in the '
            'median rather than a gain at the bottom.'),
           ('The two countries differ most at the top.',
            'Where the two distributions differ most is at the top decile.')]),
   vocab=[('decile', 'one tenth of a population ranked in order'),
          ('Gini coefficient', 'a single-number summary of a distribution'),
          ('dispersion', 'how spread out a set of values is'),
          ('relative poverty', 'income below a fraction of the median'),
          ('middle value', 'the point with half the population either side'),
          ('indexed', 'expressed against a starting value of 100'),
          ('income spread', 'the distance between top and bottom incomes'),
          ('substantive', 'affecting the content rather than the form')],
   expr=[('By one measure the gap narrowed; by another it widened',
          'reports a genuine divergence between statistics'),
         ('choose your headline',
          'marks that a figure has been selected rather than found'),
         ('it is making an argument while appearing not to',
          'names a rhetorical move inside a statistic'),
         ('that is not a flaw in the measure, it is what the measure was '
          'built to say', 'defends a statistic against a misuse of it')],
   trans=['while', 'by contrast', 'taken together', 'all three'],
  ),

  dict(
   sub='Why mobility is slow',
   step=4,
   read=[
    dict(heading='Four generations and what moved',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'Studies of how far economic position passes from parent to child '
          'have been conducted for sixty years and produce a figure called '
          'the elasticity: the proportion of a parent’s advantage, relative '
          'to their society, that appears in the child. Across developed '
          'countries it runs between 0.2 and 0.6, which is a very wide range '
          'and is the first thing that complicates every policy argument '
          'built on it. A country at 0.2 and a country at 0.6 are not '
          'two versions of one situation; the second transmits three times '
          'as much advantage per generation, which compounds.',
          'The second complication is more interesting and was discovered by '
          'accident. Single-generation elasticities imply that advantage '
          'should wash out quickly: an elasticity of 0.3 means a family four '
          'generations above average returns almost to the mean within a '
          'century. When researchers acquired data spanning four and five '
          'generations, that prediction failed comprehensively. The '
          'failure was not marginal and was not a matter of a coefficient '
          'being slightly off. The decay observed was several times slower '
          'than the one implied.',
          'What the long-run data demonstrates instead is persistence of a '
          'quite different order. Measured across four generations, the '
          'correlation falls much more slowly than the single-generation '
          'figure predicts, and in several populations it does not fall to '
          'zero at all within the period observed. Rare surnames associated '
          'with elite status in the sixteenth century remain '
          'over-represented in universities and professions today, in '
          'countries that have had revolutions in between. Equivalent '
          'results have been obtained in China, Sweden and Chile, which '
          'between them cover most of the institutional variation anybody '
          'has proposed as an explanation.',
          'The reconciliation is that single-generation studies measure the '
          'wrong thing. Income in a specific year is a noisy indicator of a '
          'family’s underlying position, and noise attenuates a correlation. '
          'Correcting for it raises the implied elasticity substantially, '
          'and the surname studies, which average over many individuals and '
          'many years, are measuring something closer to the underlying '
          'quantity. The correction is not controversial and its size is: '
          'estimates of how much of the single-generation figure is '
          'attenuation range from a fifth to a half, and the choice between '
          'them changes every conclusion drawn.',
          'That underlying quantity is harder to name than income and is '
          'probably not one thing. Candidates include inherited wealth, '
          'networks, the schooling a family knows how to obtain, '
          'expectations formed early, and assortative partnering, which '
          'concentrates advantages that were previously distributed. The '
          'relative size of these is contested and the sum of them is '
          'not. It is also unlikely that the mixture is the same in every '
          'country, which means a policy that works on one component may '
          'be addressing the dominant channel in one place and a minor one '
          'in another.',
          'Policy conclusions from this literature have been drawn too '
          'quickly in both directions. One reading holds that since '
          'persistence is so high, intervention is futile, which does not '
          'follow: the elasticity measures what currently happens, not what '
          'would happen under a different arrangement, and it varies by a '
          'factor of three between countries with comparable economies. A '
          'quantity that varies that much across comparable places is '
          'evidence of something alterable, whatever its absolute level '
          'happens to be.',
          'The opposite reading holds that since Denmark achieves 0.2 and '
          'Britain 0.5, the Danish institutions could simply be adopted. '
          'That inference is weaker than it looks, because the mechanisms '
          'producing a low elasticity in one country include a compressed '
          'wage distribution, which is not an education policy, and a '
          'housing market whose geography differs in ways that no ministry '
          'chose. Transplanting one component of an arrangement whose '
          'parts interact is the standard way that a well-evidenced policy '
          'produces no measurable effect in its new home.',
          'What the data does support is narrower and still useful. The '
          'elasticity is lowest where early-years provision is universal '
          'rather than targeted, where school funding does not depend on '
          'local property values, and where the wage distribution is '
          'compressed. All three are policies, two of them are expensive, '
          'and the third is not ordinarily discussed as a mobility measure '
          'at all. The third is worth dwelling on, because it is the only '
          'one of the three that operates on adults and is therefore the '
          'only one whose effect does not have to wait a generation.',
          'There is a final observation that should discourage anybody '
          'expecting rapid change. The institutions associated with low '
          'persistence took between thirty and fifty years to produce the '
          'measured effect, because the outcome being measured is an adult '
          'income and the intervention happens in childhood. A government '
          'acting on this evidence is committing successors to a programme '
          'whose results will be attributed to somebody else, which is the '
          'most plausible explanation of why so few do.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['What the elasticity measures', 'Persistence over four '
            'generations', 'Why the two findings differ',
            'What the data supports'], 1,
           'Surnames over-represented today after revolutions in '
           'between.'),
          ('Choose the best heading for paragraph 4.',
           ['Persistence over four generations',
            'Why the two findings differ', 'The underlying quantity',
            'Two hasty policy readings'], 1,
           'Single-year income is noisy, and noise attenuates a '
           'correlation.'),
          ('Choose the best heading for paragraph 9.',
           ['What the data supports', 'Two hasty policy readings',
            'Why results take decades', 'The underlying quantity'], 2,
           'Thirty to fifty years, with results attributed to a '
           'successor.'),
          (
           'The writer believes high persistence shows intervention is '
           'futile.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 rejects that reading explicitly.',
           {0: 'Yes would need futility; paragraph 6 rejects that '
               'reading.', 2: 'Not Given is wrong because the inference is examined.'}),
          (
           'The writer believes Danish institutions could simply be '
           'adopted elsewhere.', ['Yes', 'No', 'Not Given'],
           1,
           'Paragraph 7 says the mechanisms include things that are '
           'not education policy.',
           {0: 'Yes would need portability; paragraph 7 says the '
               'mechanisms are not education policy.', 2: 'Not Given is wrong because transferability is '
               'discussed.'}),
          ('Single-generation studies understate persistence because '
           'single-year income is a ____________ indicator.', None,
           'noisy',
           'Paragraph 4, and noise attenuates the measured correlation.'),
          ('The elasticity is lowest where early-years provision is '
           '____________ rather than targeted.', None, 'universal',
           'Paragraph 8, along with two other conditions.'),
          ('Institutions associated with low persistence took between '
           'thirty and ____________ years to show an effect.', None,
           'fifty',
           'Paragraph 9, because the outcome measured is an adult '
           'income.')])],
   listen=[
    dict(heading='A lecture on intergenerational mobility', part='Part 4',
         task='A lecture on persistence across generations', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'I am going to give you a number, then a second '
           'number that contradicts it, and then spend the rest of the hour '
           'on why the contradiction is the interesting part rather than an '
           'embarrassment.'),
          ('Lecturer', 'First number: the intergenerational elasticity, '
           'parent to child, runs between about nought point two and nought '
           'point six across developed countries. Take nought point three. '
           'That implies advantage washes out fast — four generations and a '
           'family is essentially back at the average.'),
          ('Lecturer', 'Second number. When we got data spanning four and '
           'five generations, that prediction fell apart. Correlations '
           'decline far more slowly than the one-generation figure implies, '
           'and in some populations they do not reach zero at all. Rare '
           'surnames that were elite in the sixteenth century are still '
           'over-represented in professions today, in countries that have '
           'had revolutions in between.'),
          ('Lecturer', 'The resolution is measurement error and it is '
           'mundane. One year of income is a noisy signal of a family’s '
           'real position — somebody has a bad year, somebody retires early '
           '— and noise pushes a measured correlation towards zero. The '
           'surname studies average across many people and many decades, so '
           'they see more of the underlying thing and less of the noise.'),
          ('Lecturer', 'Now, what is the underlying thing? Not one thing. '
           'Wealth, networks, knowing how to work a school system, '
           'expectations formed at four, and partner selection, which '
           'gathers advantages that used to be spread across two families '
           'into one. The proportions are argued about. The total is not.'),
          ('Lecturer', 'And please resist both of the policy conclusions '
           'people reach from here. "Persistence is high so nothing works" '
           'does not follow, because the figure varies by a factor of three '
           'between similar economies. "Copy Denmark" does not follow '
           'either, because part of what produces the Danish number is a '
           'compressed wage distribution, which is not an education '
           'policy.'),
          ('Lecturer', 'What I will defend is narrower. Persistence is '
           'lowest where early-years provision is universal, where school '
           'funding is not tied to local property values, and where wages '
           'are compressed. And every one of those takes thirty to fifty '
           'years to show up in the statistic, because the outcome is an '
           'adult income. Any minister acting on this evidence is working '
           'for a successor, which tells you most of what you need to know '
           'about why it is not done.'),
          ('Lecturer', 'For your essays, one caution. Everything I have '
           'described is correlational. We cannot randomise childhoods, '
           'and the best designs available compare siblings, adoptees and '
           'policy changes that happened to fall on one birth year and not '
           'the next. Those designs are ingenious and they are not '
           'experiments, and anybody who tells you this literature '
           'establishes causation has not read its methods sections.')],
         items=[
          ('The intergenerational elasticity across developed countries '
           'runs between', ['0.1 and 0.3', '0.2 and 0.6', '0.5 and 0.9',
            '0.8 and 1.0'], 1,
           'A wide range that complicates every policy argument built on '
           'it.'),
          ('The long-run surname evidence shows correlations that',
           ['fall to zero quickly', 'decline far more slowly than '
            'predicted', 'rise over time', 'cannot be measured'], 1,
           'In some populations not reaching zero at all.'),
          ('The contradiction is resolved by',
           ['better data collection', 'measurement error in single-year '
            'income', 'different definitions', 'changes in tax law'], 1,
           'Noise pushes a measured correlation towards zero.'),
          ('Which does the lecturer include in the underlying quantity?',
           ['Only inherited wealth', 'Wealth, networks, school knowledge, '
            'early expectations and partner selection',
            'Schooling alone', 'Nothing measurable'], 1,
           'Whose proportions are argued about and whose total is not.'),
          ('He rejects "copy Denmark" because part of the Danish result '
           'comes from', ['its schools', 'a compressed wage distribution',
            'its population size', 'its tax rates'], 1,
           'Which is not an education policy.'),
          ('The policies he defends take how long to show in the '
           'statistic?', ['Five to ten years', 'Thirty to fifty years',
            'A century', 'One generation'], 1,
           'Because the outcome being measured is an adult income.')])],
   speak=dict(
    part='Part 3', focus='Getting on and where you started',
    intro=('Five or six sentences. Try once to say why a policy with good '
           'evidence behind it is not adopted.'),
    qs=['How much does family background affect success in your country?',
        'Can education close the gap?',
        'Why do governments find this hard to change?',
        'Is social mobility the right goal?'],
    shape=[('answer', 'More than the single-generation studies suggest.'),
           ('support', 'Measured across four generations, advantage decays '
            'far more slowly.'),
           ('follow-up', 'Partly because one year of income is a noisy '
            'measure of a family’s position.'),
           ('support', 'The policies with the best evidence take thirty to '
            'fifty years to show up.'),
           ('follow-up', 'So any government adopting them is working for a '
            'successor, which explains a good deal.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='The premise named under each main idea',
         prompt=('Should inheritance be taxed more heavily? Brainstorm ten '
                 'ideas, run the six tests, and write the premise under each '
                 'survivor. Do not write the essay yet.'),
         plan=('Inheritance should be taxed more heavily at the point of '
               'receipt rather than at death, because the case for taxing '
               'it rests on a premise about opportunity that only the '
               'receipt-based version actually serves',
               [('The opportunity argument depends on a premise about when '
                 'advantage is transmitted',
                 ['it assumes transmission happens at death',
                  'most of it happens decades earlier, through schooling '
                  'and housing']),
                ('The revenue argument depends on a premise about what is '
                 'reachable',
                 ['it assumes large estates can be taxed where they are',
                  'the largest are the most mobile, which inverts the '
                  'incidence'])]),
         notes=[
          'Both premises here are about timing and location, and both turn '
          'out to be false in the form the argument usually assumes. A '
          'premise test that kills your own best argument has done its job: '
          'what survives is a better version of the same position.',
          'The second premise is the kind that converts a moral argument '
          'into an administrative one. Where a tax falls depends on who can '
          'move, and an essay that notices this is doing something examiners '
          'at this level reward heavily.',
          'Note that the thesis keeps the policy and changes its design. By '
          'this point in the volume that should be a reflex: agree with the '
          'aim, attack the instrument, propose a better instrument.'],
         criterion=[('A premise test that revises your own position',
                     'Task Response'),
                    ('Converting a moral claim into an administrative one',
                     'Task Response')],
         instruct='  Produce the brainstorm, the six tests and the premise '
                  'under each survivor. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Attribution and evidentials across a text',
    explain=('In a long argument the reader must always know whose claim '
             'they are reading. At band 7, attribution is carried by the '
             'grammar rather than by repeated "according to".'),
    examples=['The correlation falls across four generations and does not '
              'vanish.',
              'One reading holds that intervention is futile; that does not '
              'follow.',
              'What the data supports is narrower than either camp '
              'claims.',
              'The proportions are argued about; the total is not.'],
    task='Rewrite each sentence so that whose claim it is becomes clear.',
    items=[('Intervention does not work.',
            'One reading of this literature holds that intervention is '
            'futile; the variation between similar economies tells against '
            'it.'),
           ('Denmark proves it can be done.',
            'The Danish figure is sometimes offered as a demonstration, '
            'though part of what produces it is a wage distribution rather '
            'than a school system.'),
           ('Family background matters most.',
            'The long-run studies find a persistence that single-generation '
            'figures understate, by an amount that is itself disputed.'),
           ('Everybody agrees about this.',
            'The proportions attributable to each mechanism are contested; '
            'that the total is large is not.'),
           ('The policies work.',
            'Three institutional features are associated with lower '
            'persistence, on evidence that is correlational and '
            'consistent.')]),
   vocab=[('persistence', 'how far advantage lasts across generations'),
          ('elasticity', 'the share of advantage that passes to a child'),
          ('birth year group', 'everybody born in the same period'),
          ('regression to the mean', 'the tendency to drift back towards '
           'average'),
          ('attenuate', 'to weaken a measured relationship'),
          ('assortative', 'partnering with somebody of similar position'),
          ('targeted', 'directed only at those who qualify'),
          ('universal', 'available to everybody regardless of need')],
   expr=[('The correlation falls across four generations and does not '
          'vanish', 'reports a decay that stops short of zero'),
         ('that does not follow',
          'rejects an inference without disputing the premise'),
         ('working for a successor',
          'names why a long-payoff policy is rarely adopted'),
         ('the proportions are argued about; the total is not',
          'separates what is settled from what is not')],
   trans=['consequently', 'which in turn', 'as a result',
          'what the data supports'],
  ),

  dict(
   sub='What mobility statistics cannot show',
   step=5,
   read=[
    dict(heading='Moving up in a room that is shrinking',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'Mobility statistics come in two kinds that are routinely quoted '
          'as though they were one, and almost every public argument about '
          'whether a society is becoming fairer turns out, on inspection, to '
          'be an argument between them. The distinction is between absolute '
          'and relative mobility, and it is not a technical refinement: the '
          'two can move in opposite directions for decades.',
          'Absolute mobility asks whether a person is better off than their '
          'parents were at the same age, in real terms. It depends almost '
          'wholly on economic growth and on how that growth is distributed, '
          'and in the three decades after 1945 it was close to universal in '
          'Western economies: roughly nine children in ten earned more than '
          'their parents had.',
          'Relative mobility asks something quite different: whether a '
          'person’s rank in their own generation is independent of their '
          'parents’ rank in theirs. It is a zero-sum quantity by '
          'construction. For somebody to move up a rank, somebody else must '
          'move down, and a society can become enormously richer without '
          'relative mobility changing at all.',
          'The two measures answer to different causes, which is why they '
          'diverge. Between 1980 and 2015 absolute mobility fell sharply in '
          'most high-income countries, from around 90 per cent to around 50 '
          'per cent of children out-earning their parents, driven by slower '
          'growth and by a larger share of it going to the top. Relative '
          'mobility over the same period was broadly flat.',
          'That combination produces the political experience of the period '
          'rather precisely. Nothing got less fair, in the sense the '
          'relative measure captures: the chance of a child from the bottom '
          'reaching the top did not fall. What changed is that the thing '
          'they were competing to reach stopped getting better, so the same '
          'rank delivered less than it had for their parents. A generation '
          'can therefore be wholly correct in reporting that something has '
          'gone wrong and wholly unable to point at the statistic that '
          'demonstrates it, because the statistic in use measures the other '
          'thing.',
          'This also disposes of an argument heard on both sides. Those who '
          'say that nothing has got worse are ordinarily citing the relative '
          'figure and are correct about it. Those who say that a generation '
          'has been betrayed are ordinarily describing the absolute figure '
          'and are also correct. The disagreement is not about facts and '
          'cannot be settled by producing more of them. This is worth saying '
          'to anybody who proposes a commission: the data already exists, is '
          'not in dispute, and is being used by both sides to answer '
          'different questions.',
          'There is a further property of relative mobility that deserves '
          'more attention than it gets. Because it is zero-sum, a policy '
          'that successfully raises mobility must move some people down, and '
          'the people it moves down are the children of those who currently '
          'hold advantageous positions. Every campaign for relative mobility '
          'is therefore, necessarily, a campaign to make some identifiable '
          'children worse off, and the reluctance of politicians to say this '
          'out loud is not merely cowardice: there is no formulation of it '
          'that sounds acceptable. The nearest anybody has come is to '
          'talk about expanding the top rather than redistributing it, '
          'which works only for those positions that can in fact be '
          'expanded.',
          'Absolute mobility carries no such difficulty, which is one reason '
          'it was the implicit goal of post-war policy everywhere without '
          'anybody having to defend it. A rising absolute measure requires '
          'growth that reaches the lower part of the distribution, and it '
          'makes nobody worse off in order to make anybody better off. '
          'That property is worth more politically than any amount of '
          'evidence, and it explains the shape of almost every successful '
          'social programme of the last century.',
          'The practical conclusion is that the two should be pursued by '
          'different means and reported separately, which almost no '
          'government does. Absolute mobility is a question about growth and '
          'its distribution; relative mobility is a question about '
          'selection, schooling and inheritance. A ministry with a single '
          'mobility target will meet it by whichever route is cheaper, and '
          'the cheaper route has consistently been to improve the relative '
          'figure at the margin among a small group, which produces '
          'excellent reports and no perceptible change.',
          'The deepest difficulty is left for last because nothing in the '
          'literature resolves it. Positional goods — a place at a selective '
          'university, a house in a specific catchment, a job with a fixed '
          'number of posts — cannot be expanded by effort or by policy '
          'without ceasing to be the thing that was wanted. Where what '
          'people are competing for is positional, everyone can rise '
          'relative to their parents and nobody relative to each other, and '
          'no quantity of equal opportunity changes the number of places in '
          'the room.'],
         items=[
          ('Which paragraph defines relative mobility?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 2,
           'Whether rank is independent of parents’ rank, which is '
           'zero-sum.'),
          ('Which paragraph explains why both sides of the public argument '
           'are right?', ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 1,
           'One cites the relative figure and one the absolute.'),
          ('Which paragraph discusses positional goods?',
           ['Paragraph 8', 'Paragraph 9', 'Paragraph 10',
            'Paragraph 7'], 2,
           'Places that cannot be expanded without ceasing to be what was '
           'wanted.'),
          ('The writer believes relative mobility fell after 1980.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 reports it as broadly flat over the period.',
           {0: 'Yes would need a fall; paragraph 4 reports it broadly '
               'flat.', 2: 'Not Given is wrong because the trend is given.'}),
          (
           'The writer believes politicians avoid discussing downward '
           'mobility purely out of cowardice.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 says there is no acceptable formulation of it.',
           {0: 'Yes would need cowardice alone; paragraph 7 says no '
               'acceptable formulation exists.', 2: 'Not Given is wrong because the silence is explained.'}),
          ('Absolute mobility fell from around 90 per cent to around '
           '____________ per cent between 1980 and 2015.', None, '50',
           'Paragraph 4, driven by slower growth and its distribution.'),
          ('Relative mobility is described as ____________ by '
           'construction.', None, 'zero-sum',
           'Paragraph 3: for one person to rise, another must fall.'),
          (
           'A ministry with a single mobility target will take the '
           '____________ route.', None, 'cheaper',
           'Paragraph 9: improving the relative figure among a small '
           'group.')])],
   listen=[
    dict(heading='Two sociologists disagree about mobility', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Professor Nakagawa-Oduya works on absolute mobility. '
           'Dr Villanueva-Bright works on relative mobility and '
           'selection.'),
          ('Villanueva-Bright', 'I will start by conceding the thing my '
           'side tends to bury. The relative figure has been flat for forty '
           'years, which means that on my own measure nothing has got worse, '
           'and I have watched colleagues avoid saying that in public '
           'because it is politically inconvenient.'),
          ('Nakagawa-Oduya', 'Then I will concede mine, which is that the '
           'absolute collapse I keep describing is not an injustice in any '
           'sense you would recognise. Nobody did it to anybody. Growth '
           'slowed and more of it went to the top, and the result is that '
           'half of a generation earns less than their parents did at the '
           'same age.'),
          ('Villanueva-Bright', 'And those two sentences together are the '
           'whole of the public argument, with each side holding one of '
           'them.'),
          ('Nakagawa-Oduya', 'They are. Which is why I think the figures '
           'should be published separately and never averaged, and why I '
           'object to a single mobility target more than I object to any '
           'particular policy.'),
          ('Villanueva-Bright', 'On that we agree completely, and I will '
           'add the part my own field finds hardest to say. Relative '
           'mobility is zero-sum. If I succeed, somebody’s child goes down. '
           'Not a statistical abstraction — an identifiable child, in a '
           'house I could drive to.'),
          ('Nakagawa-Oduya', 'Do you think that is why it never happens?'),
          ('Villanueva-Bright', 'I think it is most of why. There is no '
           'sentence a minister can say about it that sounds acceptable, and '
           'I have tried to write one for about nine years.'),
          ('Nakagawa-Oduya', 'Whereas absolute mobility needs no such '
           'sentence, which I would argue is the real reason it was the '
           'goal everywhere after the war without anybody defending it in '
           'print.'),
          ('Villanueva-Bright', 'Agreed, and here is where I would push '
           'back on you. You present absolute mobility as the easy one '
           'because nobody loses. That is true while the goods in question '
           'can be expanded. A great many of the things people are actually '
           'competing for cannot be. You cannot have more places at a '
           'selective university without it ceasing to be selective.'),
          ('Nakagawa-Oduya', 'That is the objection I have no answer to, and '
           'I would like it in the record that I have none.'),
          ('Villanueva-Bright', 'Then let me offer the only thing I have, '
           'which is not an answer. Some of what people compete for is '
           'positional and some of it is not. Health is not. Literacy is '
           'not. A dry house is not. The expandable goods are the ones '
           'worth putting money into, and we have spent thirty years '
           'arguing about the other kind because that is where the status '
           'is.'),
          ('Nakagawa-Oduya', 'That I can use, and I notice it is an '
           'argument for precisely the policies my side already wanted, '
           'which should make us both slightly suspicious of it.')],
         items=[
          ('Villanueva-Bright concedes that the relative figure has been',
           ['falling', 'flat for forty years', 'rising', 'unmeasurable'], 1,
           'Which she says colleagues avoid stating in public.'),
          ('Nakagawa-Oduya concedes that the absolute collapse',
           ['was deliberate', 'is not an injustice anybody committed',
            'is exaggerated', 'has been reversed'], 1,
           'Growth slowed and more of it went to the top.'),
          ('They agree that the two figures should be',
           ['averaged', 'published separately and never averaged',
            'replaced by one measure', 'withheld'], 1,
           'And both object to a single mobility target.'),
          ('Why does Villanueva-Bright say relative mobility is hard to '
           'campaign for?', ['It is expensive', 'Success means an '
            'identifiable child moves down', 'It cannot be measured',
            'Voters do not care'], 1,
           'Not a statistical abstraction, in a house she could drive to.'),
          ('Her objection to absolute mobility as the easy goal concerns',
           ['its cost', 'goods that cannot be expanded',
            'its measurement', 'its timescale'], 1,
           'A selective university cannot add places and stay '
           'selective.'),
          ('How does Nakagawa-Oduya respond to that objection?',
           ['He disputes it', 'He says he has no answer and wants that '
            'recorded', 'He changes the subject', 'He accepts it '
            'partially'], 1,
           'Which is where the exchange ends.')])],
   speak=dict(
    part='Part 3', focus='Fairness and the shape of a society',
    intro=('The hardest turn in the unit. Try once to say that a goal is '
           'zero-sum and what follows from that.'),
    qs=['Is your society fairer than it was a generation ago?',
        'Can everybody move up at once?',
        'Should governments aim at mobility or at living standards?',
        'What cannot be shared out more widely?'],
    shape=[('answer', 'It depends which of two measures you mean, and they '
            'have moved in opposite directions.'),
           ('support', 'The chance of a poor child reaching the top is about '
            'what it was in 1980.'),
           ('follow-up', 'What fell is the share of children who out-earn '
            'their parents.'),
           ('support', 'And relative mobility is zero-sum, so raising it '
            'moves identifiable children down.'),
           ('follow-up', 'Which is most of why no government has ever '
            'campaigned on it.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Is equality of opportunity enough?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say equality of opportunity is enough '
                 'and that unequal outcomes do not matter. To what extent do '
                 'you agree? Write at least 250 words.'),
         model=[
          'My position is that equality of opportunity is the right goal and '
          'that the claim about outcomes attached to it is false, and the '
          'two parts of that sentence are connected: outcomes matter '
          'precisely because opportunity is what we care about.',
          'The case for the proposition is genuinely strong and deserves '
          'better than the caricature it usually receives. If positions are '
          'allocated by capacity and effort, the allocation can be defended '
          'to those who lose, the economy discovers who is good at what, and '
          'the alternative — allocating by birth — has no defenders once it '
          'is stated plainly. Nothing in what follows disputes any of that.',
          'The objection is that outcomes in one generation are the starting '
          'conditions of the next, which makes the proposition '
          'self-undermining rather than merely incomplete. A society with '
          'perfect equality of opportunity and a very wide spread of '
          'outcomes produces, twenty-five years later, children arriving at '
          'the starting line with advantages no selection process can strip '
          'out: tutoring, housing, networks, and the capacity to absorb a '
          'failure that would end somebody else’s path. Opportunity is not a '
          'state that can be reached and held. It is continuously eroded by '
          'the distribution of outcomes it produces.',
          'The natural rebuttal is that this argues for taxing inheritance '
          'and funding schools rather than for equalising outcomes in '
          'general, and I accept it. The mechanism only licenses compressing '
          'outcomes to the extent that outcome inequality is actually '
          'transmitted, and transmission runs through specific channels that '
          'can be addressed directly. The gap between two salaries matters '
          'to this argument only through what it buys for the next '
          'generation.',
          'To the extent that I agree with the proposition, then, it is on '
          'the goal and not on the inference. Equality of opportunity is '
          'what a society should aim at; the belief that it can be secured '
          'while ignoring outcomes is the premise I would attack, and the '
          'policies it rules out — inheritance taxation, universal '
          'early-years provision, school funding detached from property '
          'values — are precisely the ones that evidence identifies as '
          'working.'],
         notes=[
          'The thesis is a single sentence containing both halves of the '
          'answer and the connection between them. At band 7 and above, a '
          'position that is interesting rather than merely clear is what '
          'separates an 8 from a 7.',
          'Paragraph 3 makes the proposition self-undermining rather than '
          'incomplete, which is a stronger objection and is the premise '
          'attack this volume teaches. Paragraph 4 then anticipates the '
          'rebuttal and concedes it, which bounds the claim.',
          'This is structure 9 — position, objection, rebuttal — with the '
          'rebuttal conceded rather than defeated, and the conclusion '
          'returning to the premise. Conceding a rebuttal and showing your '
          'position survives it is more convincing than winning every '
          'exchange.'],
         criterion=[('A thesis containing both halves and their connection',
                     'Task Response'),
                    ('Making the opposing claim self-undermining',
                     'Task Response'),
                    ('Conceding the rebuttal and bounding the claim',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Relative and absolute claims distinguished',
    explain=('A great many arguments collapse because a relative claim and '
             'an absolute one are stated in the same words. These patterns '
             'keep them apart.'),
    examples=['Everyone can rise relative to their parents and nobody '
              'relative to each other.',
              'The rank did not change; what the rank delivered did.',
              'Absolute mobility fell while relative mobility was flat.',
              'That is a claim about position, not about standard of '
              'living.'],
    task='Rewrite each sentence so that it is clear whether the claim is '
         'relative or absolute.',
    items=[('People are worse off than their parents.',
            'Half of this cohort earns less in real terms than their parents '
            'did at the same age, while their chances of reaching the top '
            'are unchanged.'),
           ('Society has become less fair.',
            'The relationship between parents’ rank and children’s rank is '
            'what it was in 1980; what has fallen is the absolute '
            'improvement between generations.'),
           ('More people go to university.',
            'A larger absolute number attend; the advantage conferred by '
            'attending depends on how many others do.'),
           ('Everybody can succeed.',
            'Everybody can be better off than their parents; not everybody '
            'can be in the top tenth.'),
           ('The policy raised mobility.',
            'The policy raised the share of children exceeding their '
            'parents’ income, without altering the rank ordering between '
            'families.')]),
   vocab=[('relative position', 'where somebody stands compared with '
           'others'),
          ('absolute gain', 'an improvement measured against a fixed '
           'standard'),
          ('zero-sum', 'where one person’s gain is another’s loss'),
          ('positional good', 'something valuable because others lack it'),
          ('catchment', 'the area a school admits from'),
          ('oversubscribed', 'having more applicants than places'),
          ('structural', 'arising from the arrangement rather than the '
           'people'),
          ('erode', 'to wear away gradually')],
   expr=[('Everyone can rise relative to their parents and nobody relative '
          'to each other', 'states the limit of a zero-sum measure'),
         ('the thing they were competing to reach stopped getting better',
          'explains an experience two statistics together produce'),
         ('there is no formulation of it that sounds acceptable',
          'explains a political silence without alleging cowardice'),
         ('I would like it in the record that I have none',
          'concedes an unanswerable objection')],
   trans=['admittedly', 'nevertheless', 'in short', 'to the extent that'],
  ),
 ],
 technique=dict(
  title='Two charts of one phenomenon that disagree',
  body=('Occasionally a Task 1 question gives you two visuals of the same '
        'subject that point in different directions, and the instinct — to '
        'decide which one is right, or to average them — is wrong on both '
        'counts. Neither is wrong; they are measuring different things and '
        'the question is testing whether you notice. Your Overall statement '
        'should say that the two disagree and name what each measures, which '
        'is the single hardest sentence in Task 1 and the one that most '
        'clearly separates a band 7 answer from a band 6.5 one. Then '
        'describe each in turn without reconciling them, and finish by '
        'stating the one thing both support, if there is one.'),
  panel=[('Do not average and do not choose',
          'Two correct measures that disagree are data. Picking one is a '
          'claim you were not asked to make.'),
         ('Name what each measures',
          'In the Overall statement. "Share of a total" and "ratio between '
          'two ends" are different questions.'),
         ('Describe separately, do not reconcile',
          'One paragraph each. Reconciliation is explanation and Task 1 does '
          'not reward it.'),
         ('Finish on what both support',
          'Often there is one statement consistent with both. That sentence '
          'is worth four of anything else.')],
  task='Take the two charts in cycle 3. Write the Overall statement naming '
       'what each measures, then the one claim both of them support.',
  qs=['What exactly does each chart measure?',
      'Where do they disagree, and by how much?',
      'Write the Overall statement in one sentence.',
      'What claim is consistent with both?',
      'What would a careless answer say that the data does not support?']),
 outlining=dict(
  title='Six tests, and the premise test added to them',
  body=('You have the six tests from Volume 3: true, relevant to this exact '
        'prompt, developable in four sentences, distinct from your other '
        'ideas, conceded by the other side, and carrying an example. Volume '
        '5 adds a seventh that is applied after the other six rather than '
        'alongside them, because it is expensive: under each survivor, write '
        'the one sentence that must be true for the idea to work. Run it '
        'last, on three or four ideas rather than on ten, and expect it to '
        'kill at least one of them. An idea that dies at the premise test '
        'was going to die in the essay, where it would have cost you a '
        'paragraph and the examiner’s confidence.'),
  frame=('Inheritance should be taxed more heavily at the point of receipt '
         'rather than at death, because the case for taxing it rests on a '
         'premise about opportunity that only the receipt-based version '
         'actually serves',
         [('The opportunity argument depends on a premise about when '
           'advantage is transmitted',
           ['it assumes transmission happens at death',
            'most of it happens decades earlier, through schooling and '
            'housing']),
          ('The revenue argument depends on a premise about what is '
           'reachable',
           ['it assumes large estates can be taxed where they are',
            'the largest are the most mobile, which inverts the '
            'incidence'])]),
  task='Run all seven tests on ten ideas for the cycle 4 prompt, applying '
       'the premise test only to what survives the first six, and record '
       'which ideas it killed.',
  qs=['How many ideas survived the first six tests?',
      'Which premise could you not write?',
      'Which premise turned out to be false?',
      'Did the premise test change your thesis, and how?',
      'Is your final thesis a position or a design?'],
  answers=['three or four from ten is normal and is a good outcome',
           'usually the idea that was a slogan about fairness',
           'the assumption that advantage is transmitted at death',
           'it should; if it did not, you applied it too gently',
           'at this level, a design beats a position almost every time']),
 candos=['I can read eligibility guidance for the word that makes a rule a '
         'presumption',
         'I can describe two charts of one subject that disagree',
         'I can explain why three correct measures move in three '
         'directions',
         'I can apply the premise test to what survives the other six',
         'I can keep a relative claim and an absolute claim apart'],
 tip=('When two measures of one thing disagree, do not average them and do '
      'not choose. Say what each measures, describe both, and finish on the '
      'one claim they both support.'),
)
