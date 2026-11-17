# -*- coding: utf-8 -*-
"""Unit 41 - Expertise and Public Trust. IELTS Volume 5, band 7.0."""

_FORE = dict(kind='line',
             title='Forecast and outturn, 2014 to 2023',
             sub='annual growth in demand, per cent, with the forecast range',
             ylab='',
             x=['2014', '2016', '2018', '2020', '2022', '2023'],
             series=[('Forecast, upper', [4.1, 4.4, 4.0, 3.6, 4.2, 4.5]),
                     ('Forecast, central', [2.6, 2.8, 2.5, 2.1, 2.7, 2.9]),
                     ('Forecast, lower', [1.1, 1.2, 1.0, 0.6, 1.2, 1.3]),
                     ('Outturn', [3.8, 1.5, 2.4, -3.2, 4.0, 1.4])])

UNIT = dict(
 n=41, vol=5, level='B2+/C1', band='7.0',
 theme='Expertise and Public Trust',
 opener=(
   'Volume 5 opens where Volume 4 ended and raises two things at once: the '
   'passages run to eight paragraphs and 870 words, and the objection in '
   'cycle 5 stops attacking conclusions and starts attacking premises. The '
   'unit asks what a confidence range is actually claiming, why two '
   'specialists reading one dataset reach opposite conclusions, and what '
   'happened in the places that published their scientific advice in full.'),

 cycles=[
  dict(
   sub='Consulting the public',
   step=1,
   read=[
    dict(heading='Prescribed consultation — how it works',
         kind='Official guidance',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('Official guidance is read for the two tests it applies',
                ['Guidance of this kind almost always contains a test of '
                 'admissibility (will this response be considered at all) '
                 'and a test of weight (how much will it count).',
                 'Mark them separately on the first pass. Candidates lose '
                 'marks here by reading a sentence about weight as though it '
                 'were a sentence about admissibility.']),
         paras=[
          'A consultation is required by law before certain decisions. It '
          'is not a vote: the authority is not obliged to adopt the course '
          'most respondents prefer. It is obliged to consider every '
          'response arriving in time and to show how the responses affected '
          'the decision.',
          'Two separate questions arise about any response. The first is '
          'whether it is considered at all, which depends only on arriving '
          'before the closing time and identifying the proposal. The second '
          'is what weight it carries, which depends on whether it raises a '
          'matter the authority may take into account.',
          'Matters the authority may take into account are set out in the '
          'relevant policy and are described there as material '
          'considerations. Traffic, drainage, noise, loss of daylight and '
          'the effect on a listed building are material. The identity of the '
          'applicant, the effect on the value of a neighbouring property and '
          'the number of people objecting are not.',
          'A response raising only immaterial matters is recorded, '
          'acknowledged and given no weight, and nobody writes to say so. '
          'This is the commonest reason respondents feel ignored, and the '
          'guidance is explicit that they were not.',
          'Weight is also affected by evidence. An assertion that the '
          'junction is dangerous carries less weight than the same assertion '
          'accompanied by the collision record, and a submission that '
          'identifies the specific paragraph of the policy it relies on is '
          'handled by an officer rather than by a summarising clerk.',
          'All responses are published, with names, after the consultation '
          'closes. Addresses and signatures are removed. A respondent may ask '
          'for their name to be withheld, and the authority may refuse that '
          'request where the response makes an allegation about a named '
          'person.'],
         items=[
          ('Whether a response is considered at all depends on',
           ['its length', 'arriving in time and identifying the proposal',
            'the evidence it carries', 'the number of signatories'], 1,
           'Paragraph 2, which separates admissibility from weight.'),
          ('Which of these is a material consideration?',
           ['The identity of the applicant', 'Loss of daylight',
            'The effect on property values', 'How many people object'], 1,
           'Paragraph 3 lists the other three as immaterial.'),
          ('A response raising only immaterial matters will be',
           ['returned', 'recorded and given no weight', 'destroyed',
            'counted as a vote'], 1,
           'Paragraph 4, and the respondent is not normally told.'),
          ('An assertion carries more weight when it is accompanied by '
           '____________.', None, 'evidence',
           'Paragraph 5, where the collision record is the example given.'),
          ('A submission identifying the relevant ____________ of the policy '
           'is handled by an officer.', None, 'paragraph',
           'Paragraph 5, rather than by a summarising clerk.'),
          ('A request to withhold a name may be refused where the response '
           'makes an ____________ about a named person.', None,
           'allegation',
           'Paragraph 6, which otherwise removes addresses and '
           'signatures.')]),
    dict(heading='What a consultation response must contain',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Identify the proposal by its reference, which begins with the '
          'letters LP and is printed at the head of every consultation '
          'document. A response that names the site but not the reference is '
          'admissible and will reach the right file about four days later '
          'than one that names both.',
          'State your respondent type: individual, business, community group '
          'or statutory body. This does not alter the weight your response '
          'carries, which surprises people, but it does determine which '
          'summary table your response is counted in, and those tables are '
          'what the committee reads first.',
          'Set out each point separately, with the policy paragraph it '
          'relates to at the head of it. A single continuous letter covering '
          'six points will be summarised as one point by whoever is building '
          'the schedule, and five of your six will disappear at that step '
          'rather than at the decision.',
          'Attach evidence as separate numbered documents and refer to them '
          'by number in the text, since an attachment nobody has been told '
          'to look for is an attachment nobody opens. Send the whole '
          'response to the address on the front page before the closing '
          'time, which is five o’clock on the stated day and not '
          'midnight.'],
         items=[
          ('Give the proposal reference, which begins with the letters '
           '____________.', None, 'LP',
           'Paragraph 1, printed at the head of every consultation '
           'document.'),
          ('State your respondent ____________.', None, 'type',
           'Paragraph 2: this determines which summary table counts you.'),
          ('Head each point with the policy ____________ it relates to.',
           None, 'paragraph',
           'Paragraph 3, or the points will be merged into one.'),
          ('Attach evidence as separate ____________ documents.', None,
           'numbered',
           'Paragraph 4, referred to by number in the text.')])],
   listen=[
    dict(heading='Submitting a consultation response', part='Part 1',
         task='A call to a planning policy team', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Officer', 'Policy team, Aurelio speaking.'),
          ('Caller', 'Hello. I want to respond to the consultation on the '
           'eastern expansion and I would rather do it properly than '
           'loudly.'),
          ('Officer', 'That is a better opening than most. Do you have the '
           'reference?'),
          ('Caller', 'LP two-two-four-seven.'),
          ('Officer', 'That is the right one. And your respondent type? '
           'Individual, business, community group or a statutory body.'),
          ('Caller', 'Community group. We are the Fellgate allotment '
           'association, about ninety members.'),
          ('Officer', 'Community group, noted. I should say the type does '
           'not change the weight your response carries. It changes which '
           'summary table you are counted in, and the committee reads the '
           'tables before it reads anything else.'),
          ('Caller', 'So ninety members does not count for more than one '
           'person?'),
          ('Officer', 'Not in itself, no. Numbers are not a material '
           'consideration. What a group can do that an individual usually '
           'cannot is produce evidence, and evidence is where the weight '
           'actually is.'),
          ('Caller', 'We have twelve years of flooding photographs with '
           'dates on them.'),
          ('Officer', 'Then lead with those, number them, and refer to them '
           'by number in your text. That is a stronger response than ninety '
           'signatures, and I would say it is stronger than any letter I '
           'have read this month.'),
          ('Caller', 'What about the loss of the allotments themselves?'),
          ('Officer', 'Loss of open space is material. Loss of amenity to '
           'your members is material. Whether the developer is a decent firm '
           'is not, and I mention it because it appears in about a third of '
           'what we receive.'),
          ('Caller', 'When does it close?'),
          ('Officer', 'Five o’clock on the fourteenth of March. Not '
           'midnight, which catches two or three people every single time.'),
          ('Caller', 'And is it published?'),
          ('Officer', 'With your name and the group’s name, yes. Addresses '
           'and signatures come out. If you would rather not be named you '
           'can ask, and I will tell you now that I can only agree if the '
           'response does not accuse anybody of anything.'),
          ('Caller', 'It accuses nobody. It is photographs of water.'),
          ('Officer', 'Then you will have no difficulty. Send it to the '
           'address on the front page, not to me, because mine goes into a '
           'different system and I would have to forward it.')],
         items=[
          ('Reference: LP____________', None, '2247',
           'Which the officer confirms is the eastern expansion.'),
          ('Respondent type: ____________ group', None, 'community',
           'The Fellgate allotment association, about ninety members.'),
          ('Respondent type determines which summary ____________ counts '
           'the response.', None, 'table',
           'Which the committee reads before anything else.'),
          ('Evidence offered: twelve years of dated ____________', None,
           'photographs',
           'Of flooding, which the officer calls stronger than ninety '
           'signatures.'),
          ('Closing time: five o’clock on ____________ March', None, '14',
           'Not midnight, which the officer says catches people every '
           'time.'),
          ('A name may be withheld unless the response ____________ '
           'somebody.', None, 'accuses',
           'Which is the one ground the officer gives for refusing.')]),
    dict(heading='A short talk: who people listen to', part='Part 2',
         task='A talk at a science communication course', band='l2',
         qtype='Questions 17-20',
         script=[
          ('Speaker', 'I have spent eleven years measuring whose advice '
           'people take, and I want to give you the finding that reorganised '
           'my own thinking, because it is not the one in the textbooks you '
           'were given.'),
          ('Speaker', 'People do not evaluate expertise. They cannot: '
           'evaluating a claim about ventilation or about interest rates '
           'requires the training the expert has and the listener does not. '
           'What they evaluate instead is a proxy, and the proxy they use is '
           'remarkably consistent across countries and across subjects.'),
          ('Speaker', 'The proxy is whether the speaker has visibly lost '
           'something by saying what they said. An adviser who recommends a '
           'measure that costs their own industry money is believed. An '
           'adviser who recommends the thing their employer sells is '
           'discounted, even when the recommendation is correct, and even by '
           'people who agree with it.'),
          ('Speaker', 'That gives you the most useful operational rule I '
           'know. Declare the interest before you make the claim, not after '
           'it. The same disclosure, moved from the end of a statement to '
           'the beginning, raises how far people trust the statement by '
           'about fifteen points. Moved to the end, it reads as something '
           'you were caught at.'),
          ('Speaker', 'Second finding, and this is the uncomfortable one. '
           'Trust in institutions and trust in individuals have come apart '
           'and are moving in opposite directions. People report declining '
           'confidence in medicine as an institution and rising confidence '
           'in their own doctor, and the gap has widened in every year we '
           'have measured it.'),
          ('Speaker', 'That matters practically, because the institution is '
           'what issues the guidance and the individual is what people '
           'actually listen to. A campaign fronted by an institution persuades '
           'fewer people than the identical campaign fronted by a named '
           'practitioner, by a margin large enough that I would change any '
           'communication plan built the other way round.')],
         items=[
          ('The speaker says people cannot evaluate expertise because',
           ['they are not interested', 'doing so requires the expert’s own '
            'training', 'the information is hidden',
            'experts disagree'], 1,
           'So they use a proxy instead, consistent across countries.'),
          ('The proxy people use is whether the speaker',
           ['is famous', 'has visibly lost something by saying it',
            'speaks simply', 'is quoted often'], 1,
           'An adviser recommending what their employer sells is '
           'discounted.'),
          ('Moving a declaration of interest to the beginning raises trust '
           'by about', ['five points', 'fifteen points', 'thirty points',
            'no measurable amount'], 1,
           'While at the end it reads as something you were caught at.'),
          ('Trust in institutions and trust in individuals are',
           ['both rising', 'both falling', 'moving in opposite directions',
            'unchanged'], 2,
           'With the gap widening in every year measured.')])],
   speak=dict(
    part='Part 1', focus='Decisions that affect where you live',
    intro=('Two or three sentences each. At this level the examiner is '
           'listening for natural phrasing, not for length.'),
    qs=['Have there been any changes near your home recently?',
        'Do people where you live get consulted about such things?',
        'Would you take part in a consultation?',
        'Who do you think should make these decisions?'],
    shape=[('answer', 'They are widening the road at the end of our '
            'street.'),
           ('support', 'There was a consultation and I meant to respond and '
            'did not.'),
           ('follow-up', 'Which rather undermines my right to complain '
            'about it now.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Responding to a consultation you disagree with',
         prompt=('Your local authority is consulting on a proposal you '
                 'oppose. Write a letter responding to the consultation. In '
                 'your letter: identify the proposal; set out your '
                 'objection; say what you would like the authority to do. '
                 'Write at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing in response to the consultation on the eastern '
          'expansion, reference LP2247, on behalf of the Fellgate Allotment '
          'Association. My response addresses the process as well as the '
          'proposal itself, and I set the two out separately below.',
          'On substance, my objection concerns surface water drainage under '
          'Policy EN6. The site drains onto the allotment land to its south, '
          'and the association holds dated photographs of standing water on '
          'that land in eleven of the last twelve winters. These are attached '
          'as documents 1 to 12. The drainage assessment accompanying the '
          'application models the river and does not model this '
          'watercourse, which is the mechanism our evidence records.',
          'On process, the consultation documents were placed on deposit at '
          'the library on 3 February, four days after the period opened, and '
          'the plan showing the southern boundary was not among them until '
          '19 February. I do not suggest this was deliberate, and it has '
          'left respondents in this part of the area with twenty-three days '
          'rather than six weeks.',
          'I would ask the authority to require a drainage assessment '
          'covering the southern watercourse before the application is '
          'determined, and to extend the consultation period for the '
          'affected area by the number of days lost. I am content for this '
          'response to be published in full, including my name.',
          'Yours faithfully,',
          'E. Mbonu-Castellane'],
         notes=[
          'The second sentence announces the two-part structure and the '
          'letter then keeps it. Separating process from substance is '
          'standard practice in a formal objection, and an authority that '
          'can see both will answer both.',
          'The substantive objection names a policy, a mechanism and twelve '
          'numbered documents, and then identifies exactly what the '
          'applicant’s own assessment left out. That last move is worth more '
          'than any amount of disagreement with its conclusions.',
          'The process objection explicitly declines to allege bad faith. At '
          'band 7 the examiner is reading for control of tone as much as of '
          'grammar, and a sentence that forgoes an easy accusation '
          'demonstrates both.'],
         criterion=[('Separating process from substance and keeping it',
                     'Coherence and Cohesion'),
                    ('Identifying what the other side’s evidence omits',
                     'Task Achievement'),
                    ('Declining an available accusation', 'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Objection on grounds of process and of substance',
    explain=('A formal objection is far stronger when it says which kind of '
             'objection it is making. These patterns mark the distinction and '
             'keep the two from contaminating each other.'),
    examples=['My response addresses the process as well as the proposal '
              'itself.',
              'On substance, my objection concerns drainage under Policy '
              'EN6.',
              'On process, the documents were placed on deposit four days '
              'late.',
              'I do not suggest this was deliberate.'],
    task='Rewrite each objection so that it names which ground it rests on.',
    items=[('This proposal is wrong.',
            'On substance, the proposal conflicts with Policy EN6 on surface '
            'water drainage.'),
           ('We did not get enough time.',
            'On process, the southern boundary plan was not available until '
            'nineteen days into a six-week period.'),
           ('They are trying to push it through.',
            'I do not suggest bad faith; I record that respondents in this '
            'area had twenty-three days rather than forty-two.'),
           ('The drainage report is useless.',
            'The drainage assessment models the river and does not model the '
            'southern watercourse, which is the mechanism in question.'),
           ('You should reject it.',
            'I would ask the authority to require a further assessment before '
            'the application is determined.')]),
   vocab=[('prescribed', 'laid down by a rule or a statute'),
          ('material consideration', 'a matter a decision-maker may lawfully '
           'take into account'),
          ('submission', 'a formal response sent in to a process'),
          ('admissible', 'eligible to be considered at all'),
          ('on deposit', 'available for public inspection'),
          ('determine', 'to decide an application formally'),
          ('collation', 'the gathering of responses into one ordered list'),
          ('allegation', 'an accusation that has not been proved')],
   expr=[('My response addresses the process as well as the proposal itself',
          'announces a two-part objection'),
         ('I do not suggest this was deliberate',
          'forgoes an accusation and gains credit for it'),
         ('numbers are not a material consideration',
          'states what a decision may not rest on'),
         ('which is the mechanism our evidence records',
          'ties evidence to the process it demonstrates')],
   trans=['furthermore', 'in this connection', 'on substance', 'on process'],
  ),

  dict(
   sub='Who people listen to',
   step=2,
   read=[
    dict(heading='Four people on whose advice they took',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 21-26',
         paras=[
          'A  Teodora: I took the advice of the surveyor who told me not to '
          'buy the house, and the reason I took it is that he was being paid '
          'by me and the sale falling through cost him a repeat client. I '
          'have no idea whether he was right about the roof. I know what it '
          'cost him to say it, and at some point that became my whole method '
          'of assessing anybody.',
          'B  Ignatius: I ignored every official warning about the hill road '
          'in winter and I took my neighbour’s word for it the moment she '
          'said the same thing. That is indefensible if you think about it '
          'for four seconds, and I have thought about it for a year and I '
          'would do it again, because she drives it and the agency does '
          'not.',
          'C  Rosamund: What persuaded me was being told the limits. The '
          'consultant said the operation improves this and does nothing for '
          'that, and might make the third thing worse, and I had seen six '
          'specialists who all said it would help. The one who told me what '
          'it would not do is the one I believed.',
          'D  Casimiro: I follow a particular economist and I am aware this '
          'is a slightly ridiculous way to understand a subject. In my '
          'defence, she publishes her forecasting record every January, '
          'including the years she was badly wrong, and I do not know of an '
          'institution that does the same. I would switch allegiance '
          'tomorrow to anybody who kept that habit better.'],
         items=[
          ('Which person judged by what the advice cost the adviser?',
           ['Teodora', 'Ignatius', 'Rosamund', 'Casimiro'], 0,
           'The sale falling through cost the surveyor a repeat client.'),
          ('Which person preferred direct experience to official warning?',
           ['Teodora', 'Ignatius', 'Rosamund', 'Casimiro'], 1,
           'His neighbour drives the hill road and the agency does not.'),
          ('Which person was persuaded by being told what would not work?',
           ['Teodora', 'Ignatius', 'Rosamund', 'Casimiro'], 2,
           'After six specialists who all said the operation would help.'),
          ('Which person follows an individual because of a published '
           'record?', ['Teodora', 'Ignatius', 'Rosamund', 'Casimiro'], 3,
           'Including the years that record shows going badly wrong.'),
          (
           'Teodora is confident the surveyor\u2019s judgement was correct.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says explicitly that she has no idea whether he was '
           'right.',
           {0: 'Yes would need confidence; she says she has no idea '
               'whether he was right.', 2: 'Not Given is wrong because she says how sure she is.'}),
          ('Ignatius regrets ignoring the official warnings.',
           ['Yes', 'No', 'Not Given'], 1,
           'He calls it indefensible and says he would do it again.',
           {0: 'Yes would need regret; he says he would do it again.', 2: 'Not Given is wrong because he judges his own decision.'})])],
   listen=[
    dict(heading='Two advisers disagree about communicating risk',
         part='Part 3', task='A conversation between two advisers',
         band='l3', qtype='Questions 27-32',
         script=[
          ('Soraya', 'The press office wants one number and I am going to '
           'give them one.'),
          ('Dmitri', 'And I think that is the decision we will be asked '
           'about in two years.'),
          ('Soraya', 'Say why, because I have heard the principled version '
           'and it has not moved me.'),
          ('Dmitri', 'Then I will skip the principled version. If you give '
           'them two point seven and the outturn is one point four, you have '
           'been wrong. If you give them a range of one to four and the '
           'outturn is one point four, you have been right, and the '
           'difference between those two sentences is your standing in every '
           'future argument.'),
          ('Soraya', 'That is more practical than I expected and I still '
           'think you are wrong about how it lands. A range is reported as '
           'its midpoint. Every time. They will print two point five and '
           'attribute it to us, and we will have lost the number and kept '
           'the blame.'),
          ('Dmitri', 'That has certainly happened. Can I offer the version I '
           'have seen work?'),
          ('Soraya', 'Please.'),
          ('Dmitri', 'Give the range and give one sentence saying what '
           'would have to be true for each end of it. The upper end assumes '
           'the port reopens by June. The lower end assumes it does not. '
           'Then the number has a condition attached to it and a journalist '
           'has something to write that is not a midpoint.'),
          ('Soraya', 'That is genuinely better and I want to record my '
           'objection to it anyway, which is that it takes forty seconds and '
           'we are given twenty.'),
          ('Dmitri', 'Then we are arguing about the broadcast format and not '
           'about the statistics, which is a more honest place for this '
           'argument to be.'),
          ('Soraya', 'It is. And on the format I would lose, because the '
           'format is not ours.'),
          ('Dmitri', 'It is partly ours. We decide what goes in the written '
           'release, and the written release is what the specialist '
           'correspondents actually use. Put the conditions there in full, '
           'give the broadcast its twenty seconds, and stop treating those '
           'as the same product.'),
          ('Soraya', 'I will take that, and I am going to put your name on '
           'it as well as mine, because if the range is misreported I would '
           'rather we were both standing there.'),
          ('Dmitri', 'That is the first time anybody in this building has '
           'offered me that, and I notice it makes me more careful rather '
           'than less.')],
         items=[
          ('What does the press office want?',
           ['A range', 'One number', 'No comment', 'A written release'], 1,
           'Which Soraya has decided to provide.'),
          ('Dmitri’s practical argument is that a range',
           ['is easier to produce', 'protects your standing in future '
            'arguments', 'is required by law', 'is shorter'], 1,
           'Because an outturn inside the range does not make you wrong.'),
          ('Soraya’s objection is that a range',
           ['is dishonest', 'is reported as its midpoint',
            'cannot be calculated', 'is too wide'], 1,
           'Leaving them with the blame and without the number.'),
          ('What does Dmitri propose?',
           ['A single number after all', 'A range plus what would have to '
            'be true at each end', 'No forecast', 'A longer broadcast'], 1,
           'So the number has a condition attached to it.'),
          ('Soraya’s remaining objection concerns',
           ['accuracy', 'the time the format allows', 'cost',
            'her colleagues'], 1,
           'Forty seconds of explanation against twenty available.'),
          ('What do they agree about the written release?',
           ['It should match the broadcast', 'It should carry the '
            'conditions in full', 'It should be dropped',
            'It should be shorter'], 1,
           'Because specialist correspondents use it rather than the '
           'broadcast.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Advice',
    longturn=[('The advice I want to talk about came from a structural '
               'engineer, about a crack in the back wall of a house I was '
               'buying.'),
              ('He was engaged by me rather than by the seller or the lender, '
               'which turned out to matter more than his qualifications did, '
               'and he had thirty years of exactly this kind of inspection '
               'behind him.'),
              ('What he said was that the crack was almost certainly '
               'historical, that it had been filled once before and had not '
               'moved since, and that the house was sound. He also said, which '
               'nobody else did, that he could not be certain without opening '
               'the wall, and that in his judgement the cost of doing so was '
               'not warranted by the risk.'),
              ('What I decided was to accept it, buy the house, and keep his '
               'report. I did ask for a reduction, which I got, and the '
               'reduction was roughly what opening the wall would have cost.'),
              ('Why I trusted it is a combination of three things, and '
               'expertise is only one of them. The first is that he was paid '
               'by me and his fee did not depend on the outcome, so he had '
               'nothing to gain from either answer. The second is that he told '
               'me what he did not know, in writing, and quantified it. The '
               'third is that his conclusion was inconvenient for him: a '
               'cautious engineer recommends further investigation, because '
               'that is where the liability goes, and he took the opposite '
               'view and signed his name to it. Nine years later the crack has '
               'not moved, which proves nothing about his method and does make '
               'me glad I paid his invoice without complaining about it.')],
    intro=('Short answers, then the long turn. At band 7 the fourth bullet '
           'should be the longest part of the two minutes.'),
    cue=('Describe advice from an expert that you followed or ignored.',
         ['what the advice was', 'who gave it to you',
          'what you decided to do',
          'and explain why you trusted or did not trust it']),
    qs=['Do you usually ask for advice before a big decision?',
        'Are people in your country trusting of professionals?',
        'Now look at the card. You have one minute to make notes.',
        'Is it reasonable to distrust experts?'],
    shape=[('answer', 'A surveyor told me not to buy a flat I had already '
            'decided on.'),
           ('support', 'He was being paid by me and the sale collapsing cost '
            'him the repeat business.'),
           ('follow-up', 'I had no way of judging the roof itself.'),
           ('support', 'What I could judge was what the advice cost him to '
            'give.'),
           ('follow-up', 'Which is not expertise, but it is the only test '
            'available to somebody in my position.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should governments always follow expert advice?',
         prompt=('Some people believe governments should always follow the '
                 'advice of experts. To what extent do you agree? Write at '
                 'least 250 words.'),
         model=[
          'The case for always following expert advice is usually stated as '
          'a case about competence, and it is better stated as a case about '
          'incentives: ministers face an election and specialists face their '
          'colleagues, and the second is a slower and more exacting '
          'discipline than the first. Even so, I do not think the word '
          '"always" survives examination, and the reason is not the one '
          'critics of expertise usually give.',
          'The strongest version of the case deserves stating. Technical '
          'questions have technical answers, the cost of getting them wrong '
          'is borne by people who did not take the decision, and a government '
          'that overrides its advisers is almost always doing so for reasons '
          'of presentation. The record of such overrides is poor and is '
          'documented.',
          'The difficulty is that almost no real decision is purely '
          'technical. An adviser can establish that a measure would reduce '
          'infections by a given proportion; whether that reduction is worth '
          'its cost in closed businesses and interrupted education is a '
          'question about which losses a society will accept, and no amount '
          'of specialist training confers authority over that. Asking '
          'advisers to settle it does not make the decision more rigorous. It '
          'transfers an unavoidably political judgement to people who were '
          'not chosen for it and cannot be removed for it.',
          'There is also a quieter problem. Advice given on the understanding '
          'that it will be followed is different advice. Specialists who know '
          'their recommendation becomes policy begin, quite reasonably, to '
          'anticipate what is deliverable, and the advice arrives already '
          'contaminated by the political judgement it was supposed to '
          'inform.',
          'My own position is therefore that governments should be required '
          'to follow expert advice on matters of fact and required to decide '
          'for themselves on matters of value, and required to say in public '
          'which of the two they are doing. That last requirement does the '
          'real work: most of the damage in this area has been done by '
          'political choices presented as technical conclusions, and by '
          'technical conclusions presented as political choices.'],
         notes=[
          'The introduction improves the case it is about to reject, '
          'restating it as an argument about incentives rather than '
          'competence. At band 7 and above, an essay that cannot state the '
          'opposing case better than its advocates do is unlikely to look '
          'authoritative.',
          'Paragraph 4 is the one that lifts this answer. The observation '
          'that advice given to be followed is different advice is a '
          'mechanism, not an opinion, and it arrives after the obvious '
          'objection has already been made.',
          'The conclusion divides the question by type rather than splitting '
          'the difference, and the final sentence names the failure the '
          'division prevents. Ending on what your proposal fixes is stronger '
          'than ending on the proposal.'],
         criterion=[('Stating the opposing case better than its advocates do',
                     'Task Response'),
                    ('An original mechanism, not a further opinion',
                     'Task Response'),
                    ('Dividing the question rather than splitting the '
                     'difference', 'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Reported stance: saying what somebody is committed to',
    explain=('At band 7 the reporting verb carries the argument. Each of '
             'these commits the subject to a different degree, and choosing '
             'the wrong one misreports a source.'),
    examples=['Trust is extended to institutions and withdrawn from '
              'individuals.',
              'She maintains the figure; he accepts it and disputes its '
              'relevance.',
              'They concede the mechanism and deny that it applies here.',
              'He stops short of claiming the effect is causal.'],
    task='Rewrite each sentence with a verb that reports the stance '
         'exactly.',
    items=[('He said the policy failed.',
            'He maintains that the policy failed, on figures he has not yet '
            'published.'),
           ('She agreed but still objected.',
            'She concedes the finding and objects that it was obtained under '
            'conditions nobody will meet.'),
           ('They were not sure it caused it.',
            'They stop short of claiming causation, reporting an association '
            'of a stated size.'),
           ('He changed his mind.',
            'He withdraws the earlier estimate and gives his reasons for '
            'doing so.'),
           ('Both sides disagree.',
            'The two sides agree about the measurement and differ about what '
            'it is evidence of.')]),
   vocab=[('standing', 'the respect a person or body commands'),
          ('independence', 'freedom from an interest in the outcome'),
          ('conflict of interest', 'a stake that may bias a judgement'),
          ('track record', 'what somebody has got right and wrong before'),
          ('declaration', 'an open statement of an interest held'),
          ('downweight', 'to treat as counting for less'),
          ('practitioner', 'somebody who does the work rather than '
           'administers it'),
          ('allegiance', 'the loyalty somebody gives to a source')],
   expr=[('I know what it cost him to say it',
          'uses the cost of advice as a test of it'),
         ('Trust is extended to institutions and withdrawn from individuals',
          'states a divergence in one clause'),
         ('a slower and more exacting discipline',
          'compares two accountability mechanisms'),
         ('advice given on the understanding that it will be followed is '
          'different advice', 'names a mechanism rather than an opinion')],
   trans=['whereas', 'that said', 'even so', 'the strongest version'],
  ),

  dict(
   sub='How confident is confident',
   step=3,
   read=[
    dict(heading='What a confidence range means and does not',
         kind='Data article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 33-38',
         figure=_FORE,
         paras=[
          'The chart shows ten years of forecasts for annual growth in '
          'demand, published each year before the year began, alongside what '
          'actually happened. Three forecast lines are drawn: the central '
          'estimate and the upper and lower bounds of the range the '
          'forecasters published with it. The fourth line is the outturn.',
          'Read as most readers read it, the chart shows a forecasting '
          'operation that failed. The central line and the outturn are '
          'different in every year, sometimes substantially: 2.6 against '
          '3.8 in 2014, 2.8 against 1.5 in 2016, and 2.7 against 4.0 in '
          '2022.',
          'Read against what the forecasters actually claimed, the record is '
          'different. The published range was between 1.1 and 4.1 in 2014, '
          'and the outturn of 3.8 fell inside it. The same is true in 2016, '
          'in 2018, in 2022 and in 2023. In five of the six years shown, the '
          'outturn landed within the range the forecast specified.',
          'The exception is 2020, and it is worth being precise about it. The '
          'forecast range ran from 0.6 to 3.6 and demand fell by 3.2 per '
          'cent. That is not a near miss; it is a failure of the whole '
          'range, and no amount of explanation about the circumstances turns '
          'it into a success.',
          'The distinction being drawn here is between a forecast and a '
          'point forecast. A forecast that publishes a range is claiming '
          'that the outturn will fall inside it with a stated frequency — '
          'conventionally about four years in five. Judged on that claim, '
          'five correct out of six is close to exactly the advertised '
          'performance.',
          'The difficulty is that almost nobody judges it on that claim. The '
          'central line is quoted, compared with the outturn and found '
          'wrong, and the range is omitted from the reporting entirely. '
          'Forecasters are then accused of a failure they did not commit, '
          'while the one genuine failure, in 2020, is excused by the same '
          'commentators on grounds of circumstance.',
          'There is a tempting response to this and it is the wrong one. '
          'Widening the range makes a forecast harder to falsify and less '
          'useful, and a range running from minus four to plus eight would '
          'have survived every year on this chart while telling a reader '
          'nothing they did not already know. The honest measure of a '
          'forecasting operation is the width of its ranges together with '
          'the proportion of outturns inside them, and only ever both.'],
         items=[
          ('Which paragraph gives the naive reading of the chart?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'The central line differs from the outturn in every year shown.'),
          ('Which paragraph explains what a published range claims?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'That the outturn falls inside it about four years in five.'),
          ('Which paragraph rejects the tempting response?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 4'], 2,
           'A range from minus four to plus eight would survive and tell a '
           'reader nothing.'),
          ('In ____________ of the six years shown, the outturn fell inside '
           'the range.', None, 'five',
           'Paragraph 3: 2014, 2016, 2018, 2022 and 2023.'),
          ('The one genuine failure is the year ____________.', None,
           '2020',
           'Paragraph 4, where demand fell by 3.2 against a lower bound of '
           '0.6.'),
          ('The honest measure combines the proportion inside the range with '
           'its ____________.', None, 'width',
           'Paragraph 7, which says the two must always be given '
           'together.')])],
   listen=[
    dict(heading='A statistician on uncertainty', part='Part 4',
         task='A lecture on forecasts and ranges', band='l4',
         qtype='Questions 39-44',
         figure=_FORE,
         script=[
          ('Lecturer', 'I am going to defend a group of people nobody '
           'defends, which is forecasters, and then I am going to criticise '
           'them for something quite different from what they are usually '
           'criticised for. The chart in front of you lets me do both.'),
          ('Lecturer', 'Four lines. The central estimate, an upper bound, a '
           'lower bound, and what actually happened. Look at the central '
           'line against the outturn and you have the standard newspaper '
           'story: wrong in 2014, wrong in 2016, wrong in 2022, wrong every '
           'year. That reading is accurate and it is answering a question '
           'nobody asked.'),
          ('Lecturer', 'Because the forecast was never the central line. The '
           'forecast was the range, and the claim attached to a range is a '
           'claim about frequency: the outturn will land inside this about '
           'four years in five. On this chart it landed inside in five of '
           'the six years shown, which is almost exactly what was '
           'advertised. By the standard the forecasters set themselves, that '
           'is a good decade.'),
          ('Lecturer', 'Now 2020, and I want to be harder about this than my '
           'profession usually is. The range ran from nought point six to '
           'three point six and demand fell by three point two. That is not '
           'a miss at the edge; the entire range was wrong, and the '
           'explanation that nobody could have foreseen the circumstances is '
           'true and is not a defence. The range is supposed to contain the '
           'years nobody foresaw. That is what it is for.'),
          ('Lecturer', 'So here is my criticism, and it is not the one you '
           'will read anywhere. The response to a year like 2020 inside the '
           'profession is to widen the ranges, and a widened range is a '
           'forecast that cannot fail and cannot inform. If I tell you growth '
           'will be between minus four and plus eight I will be right every '
           'year of my career and I will have told you nothing whatever.'),
          ('Lecturer', 'Which gives you the rule I would like you to leave '
           'with, and it is the one thing in this lecture that is '
           'examinable. Never assess a forecasting record on accuracy alone. '
           'Assess it on two numbers together: how often the outturn fell '
           'inside the range, and how wide the range was. Either number by '
           'itself can be made to look excellent by somebody who is doing '
           'badly.'),
          ('Lecturer', 'And if you ever have to present one of these '
           'yourself, give the range and give one sentence saying what '
           'would have to be true at each end of it. A number with a '
           'condition attached is much harder to misquote than a number '
           'without one, and it is the only version of this I have seen '
           'survive contact with a headline.')],
         items=[
          ('The lecturer says the standard newspaper reading is',
           ['inaccurate', 'accurate but answering a question nobody asked',
            'deliberately unfair', 'statistically illiterate'], 1,
           'Comparing the central line with the outturn year by year.'),
          ('The claim attached to a published range is a claim about',
           ['accuracy', 'frequency', 'causation', 'precision'], 1,
           'That the outturn lands inside it about four years in five.'),
          ('In how many of the six years did the outturn fall inside the '
           'range?', ['Three', 'Four', 'Five', 'Six'], 2,
           'Which the lecturer says is almost exactly what was advertised.'),
          ('About 2020 the lecturer says the usual explanation is',
           ['false', 'true and not a defence', 'irrelevant',
            'the right one'], 1,
           'Because the range exists to contain the years nobody foresaw.'),
          ('What does he criticise his own profession for?',
           ['Publishing too often', 'Widening ranges after a failure',
            'Refusing to publish ranges', 'Using the wrong models'], 1,
           'Since a widened range cannot fail and cannot inform.'),
          ('The rule he gives is to assess a record on',
           ['accuracy alone', 'how often the outturn fell inside the range '
            'and how wide it was', 'the central estimate',
            'the longest run of successes'], 1,
           'Because either number alone can be made to flatter.')])],
   speak=dict(
    part='Part 3', focus='Communicating uncertainty',
    intro=('Five or six sentences at this level, with a concession '
           'somewhere in the middle.'),
    qs=['Why do people distrust forecasts?',
        'Should experts give a single figure or a range?',
        'How should uncertainty be reported in the news?',
        'Does admitting uncertainty make people trust you less?'],
    shape=[('answer', 'Largely because the number quoted is not the number '
            'that was claimed.'),
           ('support', 'A forecast with a range claims the outturn lands '
            'inside it four years in five.'),
           ('follow-up', 'What gets reported is the midpoint, compared with '
            'the outcome and found wrong.'),
           ('support', 'I accept that a range is harder to report in twenty '
            'seconds.'),
           ('follow-up', 'Which makes it an argument about broadcast format '
            'rather than about statistics.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Forecast and outturn across ten years, with ranges',
         prompt=('The graph below shows annual forecasts of growth in '
                 'demand, with the upper and lower bounds of each forecast, '
                 'and the figure actually recorded. Summarise the '
                 'information by selecting and reporting the main features, '
                 'and make comparisons where relevant. Write at least 150 '
                 'words.'),
         figure=_FORE,
         model=[
          'The line graph compares annual forecasts of demand growth with the '
          'figures subsequently recorded, over the period 2014 to 2023. '
          'Three of the four lines describe the forecast — a central '
          'estimate and an upper and lower bound — while the fourth gives '
          'the outturn. Overall, the outturn differs from the central '
          'estimate in every year shown but falls within the forecast range '
          'in all years except 2020.',
          'The forecast itself is strikingly stable. The central estimate '
          'moves only between 2.1 and 2.9 per cent across the decade, and the '
          'range around it is of a consistent width, running roughly three '
          'percentage points from bound to bound in every year.',
          'The outturn, by contrast, is highly variable. It opens at 3.8 per '
          'cent in 2014, falls to 1.5 in 2016, recovers to 2.4 in 2018, and '
          'then collapses to minus 3.2 in 2020 before rising to 4.0 in 2022 '
          'and falling again to 1.4 in 2023.',
          'The relationship between the two is the main feature. In 2014, '
          '2016, 2018, 2022 and 2023 the outturn lies inside the published '
          'bounds, in some years close to one edge of them. Only in 2020 does '
          'it fall outside the range altogether, and it does so by a wide '
          'margin, nearly four percentage points below the lower bound.'],
         notes=[
          'The Overall statement reports the relationship between the lines '
          'rather than the behaviour of any one of them. On a chart with '
          'bounds, whether the outturn falls inside them is the main feature '
          'and almost every candidate describes four lines separately '
          'instead.',
          'Paragraph 2 reports the stability of the forecast, which is a '
          'finding, and gives the width of the range. On a banded chart the '
          'width is data and leaving it out is an omission.',
          'The exception gets its own sentences and is quantified — nearly '
          'four points below the lower bound. Naming an exception precisely '
          'is worth more at band 7 than listing three further values.'],
         criterion=[('An Overall statement about the relationship between '
                     'the lines', 'Task Achievement'),
                    ('Reporting the width of the range as data',
                     'Task Achievement'),
                    ('Quantifying the exception rather than listing values',
                     'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Modal stacking and graded commitment',
    explain=('English grades confidence by stacking a modal with an adverb '
             'and a hedging verb. At band 7 the examiner is looking for '
             'control of the whole range, not for the cautious end of it.'),
    examples=['The central line was wrong and the range was not.',
              'It may well be that the model is sound and the inputs were '
              'not.',
              'The figure would appear to be an artefact of the revision.',
              'That could conceivably hold, although nothing here shows it '
              'does.'],
    task='Rewrite each claim at the degree of confidence stated in '
         'brackets.',
    items=[('The model is wrong. (low confidence)',
            'It may be that the model is wrong, though nothing in these '
            'figures establishes it.'),
           ('The forecast failed. (precise)',
            'The range failed in one year of six; the central estimate '
            'differed from the outturn in all six.'),
           ('This caused that. (hedged)',
            'This would appear to have contributed, by an amount the data '
            'does not separate.'),
           ('They were right. (qualified)',
            'They were right by the standard they set themselves, which is '
            'not the standard they were judged by.'),
           ('Nothing can be concluded. (too strong)',
            'Little can be concluded about magnitude, although the direction '
            'is consistent across all six years.')]),
   vocab=[('outturn', 'what actually happened, against a forecast'),
          ('central estimate', 'the single most likely figure in a range'),
          ('bound', 'the upper or lower edge of a range'),
          ('point forecast', 'a forecast given as one number'),
          ('projection', 'a figure produced by carrying assumptions '
           'forward'),
          ('scenario', 'one assumed set of conditions among several'),
          ('sensitivity', 'how much a result changes when an input does'),
          ('refutable', 'capable of being shown to be false')],
   expr=[('the central line was wrong and the range was not',
          'separates two claims a chart makes'),
         ('answering a question nobody asked',
          'dismisses an accurate but irrelevant reading'),
         ('true and is not a defence',
          'accepts a fact and refuses its use'),
         ('cannot fail and cannot inform',
          'names the cost of an unfalsifiable claim')],
   trans=['while', 'by contrast', 'taken together', 'read against'],
  ),

  dict(
   sub='Why experts disagree',
   step=4,
   read=[
    dict(heading='Same evidence, different priors',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 45-52',
         paras=[
          'Public disagreement between specialists is routinely attributed '
          'to the three hypotheses that demand the least thought: that one '
          'party is incompetent, that one party is corrupt, or that the '
          'evidence is insufficient and a greater quantity of it would '
          'settle the matter. All three are occasionally true. None of them '
          'accounts for the majority of the disagreements that actually '
          'arise, which occur between competent investigators with no '
          'financial interest, examining an identical and adequate dataset. '
          'It is worth being explicit about the magnitude of that category. '
          'Surveys of contested questions in medicine and economics find '
          'that the disputants typically cite overlapping literatures and '
          'concur on the methodological quality of the studies they both '
          'cite.',
          'The mechanism that does account for them is unglamorous and is '
          'well understood inside the disciplines where it operates. Two '
          'researchers bring different prior expectations to a piece of '
          'evidence, and a given observation moves each of them from where '
          'they started. Where the starting points are far apart, the same '
          'observation leaves them still far apart, and in some cases leaves '
          'them further apart than before. That last possibility is the '
          'one people find hardest to accept, and it follows from the '
          'arithmetic rather than from anybody behaving badly: a result '
          'that is surprising under one set of expectations and ordinary '
          'under another will be given different weight by each reader, '
          'correctly.',
          'Those prior expectations are not prejudices. They are the '
          'accumulated weight of everything the investigator has previously '
          'read, undertaken and failed to replicate, and they constitute the '
          'reason a specialist is worth consulting at all. An investigator '
          'with no priors would be shifted to any conclusion whatever by the '
          'most recent study encountered, which describes the predicament '
          'rather than a remedy for it. The point can be put more sharply. A '
          'discipline is, among other things, a stock of priors held in '
          'common and revised slowly, and somebody who has not acquired that '
          'stock is not an impartial observer of the discipline but a '
          'stranger to it.',
          'The consequence is that agreement about data is wholly compatible '
          'with disagreement about what the data demonstrates. Two '
          'epidemiologists may accept the same estimate of transmission and '
          'disagree about whether it supports closing schools, because one '
          'brings a strong prior that behavioural responses offset '
          'restrictions and the other does not. Neither is misreading the '
          'number. The same structure appears wherever a decision depends on '
          'how a system will respond to being changed, which is most '
          'questions a government actually faces. Transport modelling, '
          'taxation and antibiotic policy all produce disagreements of '
          'exactly this shape.',
          'This is why the common demand to "follow the evidence" so '
          'frequently fails to resolve anything. Evidence does not arrive '
          'with an instruction attached. It changes the probability of '
          'competing explanations, and how much it changes them depends on '
          'what else the reader believes about the world — which is exactly '
          'what the disputants disagree about. The phrase is not useless; it '
          'rules out positions no evidence supports. It simply cannot do the '
          'work it is ordinarily asked to do, which is to decide between two '
          'positions that the evidence is compatible with.',
          'It also explains a pattern that otherwise looks like bad faith: '
          'the tendency of specialists to require more evidence for claims '
          'they find surprising. This is sometimes denounced as closed '
          'mindedness and it is in fact the correct procedure, since a '
          'surprising claim is one that conflicts with a great deal of '
          'existing evidence, and overturning that body of work reasonably '
          'requires more than one study. The failure mode is quantitative, '
          'not qualitative: the demand becomes unreasonable only when no '
          'amount of evidence would suffice. Distinguishing the two in '
          'practice is harder than it sounds, and the only reliable test is '
          'to ask in advance what result would be accepted as decisive, '
          'before that result is known.',
          'There are two practical consequences for anybody obliged to rely '
          'on expert advice. The first is that soliciting consensus where '
          'the disagreement concerns priors will yield a statement so weak '
          'that it misleads. A consensus document both epidemiologists could '
          'endorse would state that transmission is estimated at a given '
          'rate and nothing whatever about schools, which is the sole '
          'portion the reader required. Documents of this kind are not '
          'dishonest; they are the predictable output of a procedure '
          'instructed to manufacture agreement where none exists, and they '
          'are subsequently quoted as though the silence on schools '
          'constituted a judgement about schools.',
          'The second is more useful. If you ask the disputants what '
          'observation would move them, you learn something a consensus '
          'statement cannot tell you. Specialists who can name the finding '
          'that would change their position are disagreeing about evidence '
          'and will converge as it arrives. Specialists who cannot are '
          'disagreeing about something else, and no quantity of further '
          'research is going to help, which is a finding worth having before '
          'commissioning any. The question has the further merit of being '
          'answerable in a sentence by anybody who has thought about their '
          'own position, and of being very difficult to answer plausibly by '
          'anybody who has not.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['The easy explanations', 'Different starting points',
            'Why priors are not prejudices',
            'Agreement about data, disagreement about meaning'], 1,
           'Two researchers moved from where each of them started.'),
          ('Choose the best heading for paragraph 6.',
           ['Why "follow the evidence" fails',
            'Requiring more evidence for surprising claims',
            'The limits of consensus', 'A better question'], 1,
           'Which the passage says is the correct procedure, within '
           'limits.'),
          ('Choose the best heading for paragraph 8.',
           ['The limits of consensus', 'A better question to ask',
            'Different starting points', 'The easy explanations'], 1,
           'Asking what observation would move each disputant.'),
          (
           'The writer believes most expert disagreement is caused by '
           'corruption or incompetence.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 1 says those explanations account for a minority '
           'of cases.',
           {0: 'Yes would need those causes to dominate; paragraph 1 '
               'makes them a minority.', 2: 'Not Given is wrong because the causes are apportioned.'}),
          (
           'The writer believes requiring more evidence for surprising '
           'claims is always closed mindedness.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 6 calls it the correct procedure and locates the '
           'failure as quantitative.',
           {0: 'Yes would need it to be closed mindedness; paragraph 6 '
               'calls it correct procedure.', 2: 'Not Given is wrong because the practice is judged.'}),
          ('A researcher with no priors would be moved by the most recent '
           '____________ they encountered.', None, 'study',
           'Paragraph 3, which is why priors are what make a specialist '
           'useful.'),
          ('A consensus document both epidemiologists could sign would omit '
           'the part about ____________.', None, 'schools',
           'Paragraph 7, which is the only part the reader needed.'),
          ('Specialists who can name the finding that would change their '
           'position are disagreeing about ____________.', None, 'evidence',
           'Paragraph 8, and will converge as it arrives.')])],
   listen=[
    dict(heading='A lecture on expert disagreement', part='Part 4',
         task='A lecture on why specialists differ', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'When two specialists disagree in public, the '
           'audience reaches for one of three explanations: one of them is '
           'stupid, one of them is bought, or the evidence is not in yet. I '
           'want to spend this hour on the large category that none of those '
           'covers, which is competent honest people with adequate data '
           'reaching opposite conclusions.'),
          ('Lecturer', 'The mechanism is starting points. Each of us brings '
           'a set of prior expectations to a new study — everything we have '
           'read, everything we have run ourselves, everything we tried to '
           'replicate and could not. A new result moves each of us from '
           'wherever we were standing. If we were standing a long way apart, '
           'the same result leaves us a long way apart.'),
          ('Lecturer', 'And before anybody objects: those priors are not '
           'bias. They are the entire reason you consult a specialist. '
           'Somebody with no priors would be swung to any position at all by '
           'the last paper they read, which is not open-mindedness, it is '
           'the absence of a field.'),
          ('Lecturer', 'So you get the situation that confuses journalists '
           'most. Both of my colleagues accept the same transmission '
           'estimate. One concludes that schools should close and the other '
           'concludes they should not, and neither of them has misread the '
           'number. They differ on how much behaviour offsets restriction, '
           'which is a prior, and the transmission estimate does not speak to '
           'it.'),
          ('Lecturer', 'This is also why "follow the evidence" is not the '
           'instruction people think it is. Evidence does not come with a '
           'conclusion attached. It shifts the odds between explanations, and '
           'how far it shifts them depends on what you already believed — '
           'which is the thing under dispute.'),
          ('Lecturer', 'Now the practical part, and it is the only part I '
           'would ask you to remember. Do not ask disagreeing specialists for '
           'a consensus. You will get a statement so weak it misleads. Ask '
           'each of them what observation would change their mind. The ones '
           'who can answer are arguing about evidence and will converge. The '
           'ones who cannot are arguing about something else, and funding '
           'another study will not help, which is worth knowing before you '
           'fund one.'),
          ('Lecturer', 'I will add the caveat my own field owes you. We are '
           'not good at saying in advance what would change our minds, and '
           'when I have asked colleagues the question in writing the '
           'answers have been noticeably worse than the answers I get in a '
           'corridor. Make it a condition of the commission rather than a '
           'polite enquiry afterwards, and you will get the corridor '
           'answer.')],
         items=[
          ('The lecturer is interested in disagreements where',
           ['one party is corrupt', 'competent honest people with adequate '
            'data differ', 'the evidence is missing', 'the data is wrong'], 1,
           'The large category the three usual explanations do not cover.'),
          ('Priors are described as',
           ['bias to be removed', 'the reason you consult a specialist',
            'a statistical error', 'irrelevant to conclusions'], 1,
           'Everything read, run and failed to replicate.'),
          ('Somebody with no priors would be',
           ['perfectly objective', 'swung by the last paper they read',
            'unable to publish', 'the ideal adviser'], 1,
           'Which the lecturer calls the absence of a field.'),
          ('The two colleagues differ about',
           ['the transmission estimate', 'how much behaviour offsets '
            'restriction', 'the quality of the data', 'the definition of a '
            'case'], 1,
           'While accepting the same transmission estimate.'),
          ('"Follow the evidence" fails because evidence',
           ['is usually wrong', 'does not come with a conclusion attached',
            'arrives too late', 'is contested'], 1,
           'It shifts the odds, by an amount depending on prior belief.'),
          ('He advises asking each specialist',
           ['for a consensus statement', 'what observation would change '
            'their mind', 'for their funding sources',
            'to publish their data'], 1,
           'Because those who cannot answer are arguing about something '
           'else.')])],
   speak=dict(
    part='Part 3', focus='Disagreement among specialists',
    followup=[(('You say experts disagree legitimately. Should the public be '
                'shown that disagreement?'),
               ('Yes, and shown it in a form that distinguishes the kinds. '
                'Disagreement about what the data say is different from '
                'disagreement about what to do, and lumping them together '
                'produces the impression that nothing is known, which is the '
                'opposite of what honest disclosure should achieve.')),
              ('How can a non-specialist decide whom to believe?',
               ('Not by evaluating the science, which is not available to '
                'them, but by looking at the things that are: who is paying, '
                'whether the person has changed their mind when the evidence '
                'moved, and whether they state what would prove them wrong. '
                'Those three are visible from outside and they correlate '
                'reasonably well with reliability.')),
              ('Is more research always the answer?',
               ('No, and more research is the most comfortable recommendation '
                'a committee can make, which is why it appears so often. Where '
                'the remaining uncertainty would not change the decision, '
                'further study is a way of deferring it, and the deferral has '
                'a cost that nobody is asked to carry.')),
              ('So what should an expert say when they genuinely do not know?',
               ('That, in those words, and then what they would do in the '
                'questioner\'s position, because the second part is what was '
                'actually being asked. Refusing to answer at all reads as '
                'evasion, and a bare probability leaves the listener with the '
                'whole decision and none of the expertise.'))],
    intro=('Five or six sentences. Try once to say that two people agree '
           'about the data and differ about what it shows.'),
    qs=['Why do experts in the same field disagree?',
        'Should the public be shown that disagreement?',
        'How can a non-specialist decide whom to believe?',
        'Is more research always the answer?'],
    shape=[('answer', 'Usually because they bring different starting points '
            'to the same study.'),
           ('support', 'They agree about the measurement and differ about '
            'what it is evidence of.'),
           ('follow-up', 'I accept that some disagreements really are about '
            'competence or interest.'),
           ('support', 'But the common case is two careful people with '
            'different priors.'),
           ('follow-up', 'Which is why asking what would change their mind '
            'is more useful than asking for consensus.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Name the premise each idea rests on',
         prompt=('Should scientific advice to government be published in '
                 'full? Brainstorm ten ideas, run the six tests, and under '
                 'every surviving idea write the premise it depends on. Do '
                 'not write the essay yet.'),
         plan=('Publication should be required of the advice and of the '
               'reasoning behind it, but after the decision rather than '
               'before it, because the case for publication rests on '
               'accountability and the case against rests on candour, and '
               'only the timing can serve both',
               [('The accountability argument depends on a premise about '
                 'what readers do with documents',
                 ['it assumes the advice will be read as a whole',
                  'in practice it is quarried for quotable fragments']),
                ('The candour argument depends on a premise about how '
                 'advisers behave when observed',
                 ['it assumes advisers write differently when published',
                  'this is measurable and has been measured'])]),
         notes=[
          'The premise test is the new tool in this volume and it is the one '
          'that separates band 7 from band 6.5. Under every idea you keep, '
          'write the sentence that must be true for the idea to work. If you '
          'cannot write it, you do not yet understand your own argument.',
          'The payoff is in the essay. An argument whose premise you have '
          'named can be attacked at the premise, which is the strongest kind '
          'of objection and the structure cycle 5 teaches.',
          'Notice that both premises above are empirical: what readers do, '
          'and how advisers behave. Premises of that kind can be tested '
          'against evidence, and an essay that spots one is doing something '
          'most candidates never attempt.'],
         criterion=[('Naming the premise under each surviving idea',
                     'Task Response'),
                    ('Identifying premises that can be tested',
                     'Task Response')],
         instruct='  Produce the brainstorm, the tests, and the premise '
                  'under each survivor. You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Metadiscourse and the shape of an argument',
    explain=('Metadiscourse is language about your own argument. At band 7 '
             'it is what makes a long answer readable; used heavily it reads '
             'as padding, so two or three instances in an essay is the '
             'right dose.'),
    examples=['They agree about the data and disagree about what it is '
              'evidence of.',
              'The mechanism that does account for them is unglamorous.',
              'There are two practical consequences, and the second is the '
              'useful one.',
              'That is a finding worth having before commissioning any '
              'research.'],
    task='Rewrite each sentence so that it signals what kind of move it is '
         'making.',
    items=[('Experts often disagree.',
            'The disagreements worth explaining are the ones the usual three '
            'hypotheses do not cover.'),
           ('Here is another point.',
            'There are two practical consequences, and the second is the '
            'more useful.'),
           ('I disagree with that.',
            'My objection is to the premise rather than to the conclusion '
            'drawn from it.'),
           ('This is important.',
            'This is the step on which the rest of the argument depends.'),
           ('Let me explain.',
            'The mechanism is well understood inside the field and almost '
            'never stated outside it.')]),
   vocab=[('prior', 'what somebody believed before seeing the evidence'),
          ('weight of evidence', 'the combined force of everything known'),
          ('interpretation', 'what a body of evidence is taken to show'),
          ('judgement', 'a conclusion reached where rules do not decide'),
          ('common position', 'a statement a group can collectively sign'),
          ('offset', 'to cancel part of an effect'),
          ('closed mindedness', 'refusal to be moved by any evidence'),
          ('epistemic', 'to do with knowledge and how it is justified')],
   expr=[('They agree about the data and disagree about what it is evidence '
          'of', 'separates measurement from meaning'),
         ('evidence does not arrive with an instruction attached',
          'denies that data settles a dispute by itself'),
         ('the absence of a field',
          'names what having no priors would amount to'),
         ('what observation would move them',
          'the question that distinguishes two kinds of disagreement')],
   trans=['consequently', 'which in turn', 'as a result',
          'there are two practical consequences'],
  ),

  dict(
   sub='Whether transparency builds trust',
   step=5,
   read=[
    dict(heading='What happened when the advice was published',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-66',
         paras=[
          'Between 2015 and 2022 a sufficient number of governments moved '
          'from publishing summaries of scientific advice to publishing the '
          'advice in full, including minutes and dissenting views, for the '
          'effects to be studied rather than argued about. The results do '
          'not support either of the positions that were taken before the '
          'change, and the reason they do not is instructive about both. '
          'The studies are imperfect, as any before-and-after comparison '
          'across countries must be, but they point in one direction '
          'consistently enough that the burden now sits with anybody '
          'asserting the opposite.',
          'The case for full publication rested on a premise about '
          'trust: that people withhold it from processes they cannot '
          'see, and that showing the working would therefore restore '
          'it. The case against rested on a premise about candour: '
          'that advisers write differently when they expect to be '
          'read, and that publication would degrade the advice itself. '
          'Both premises are empirical and both have now been tested. '
          'That is worth pausing on, because both sides argued as '
          'though their premise were a matter of principle. Neither '
          'is: each is a claim about how people behave, of the kind '
          'that can be checked by observing them.',
          'The trust premise did not survive. Measured before and after '
          'publication in nine jurisdictions, general trust in scientific '
          'advice to government moved by amounts indistinguishable from '
          'noise, and in the two cases where it moved detectably it moved '
          'down. The people who distrusted the process did not read the '
          'minutes, and the people who read the minutes already trusted the '
          'process. Nor is this a story about inattention. Minutes of '
          'advisory committees are long, technical and written for '
          'colleagues, and the proportion of any population able to extract '
          'a usable conclusion from one unassisted is small and is not '
          'distributed in the way the argument for publication assumed.',
          'The candour premise fared better and is more complicated than its '
          'advocates expected. Advisory papers written after publication '
          'began are measurably different: they are longer, they contain '
          'more qualifications, and dissent within committees is recorded '
          'less frequently in the minutes and more frequently in private '
          'correspondence that is not published. The advice did not become '
          'less honest. It became less legible, and the disagreement moved '
          'somewhere the publication rules do not reach. The last of those '
          'changes is the serious one. A committee whose disagreements are '
          'recorded in the minutes leaves a usable account of how a question '
          'looked while it was open; one whose disagreements move into '
          'private email leaves a tidier record of a debate that did not '
          'happen there.',
          'What did change, and was predicted by almost nobody, is the '
          'structure of public argument. Before publication, a '
          'minister could characterise the advice and critics could '
          'only dispute the characterisation; after publication, '
          'critics could quote. The volume of public disagreement rose '
          'sharply, the quality of it rose as well, and both sides of '
          'every dispute acquired the ability to produce a sentence '
          'from the record supporting their position. Specialist '
          'correspondents in particular became markedly harder to '
          'brief, which several press offices reported as a '
          'deterioration and which is better described as the system '
          'working.',
          'That last capability deserves attention, because it cuts in a '
          'direction neither camp anticipated. A full record of a '
          'deliberation contains, by its nature, the moment when somebody '
          'raised a possibility that was then rejected for good reasons. '
          'Quoted alone, that moment reads as a suppressed warning. Several '
          'documented controversies consist wholly of a correctly rejected '
          'option being presented as evidence of concealment. No remedy for '
          'this has been found that does not damage something more '
          'significant, since the obvious one — ceasing to record options '
          'that are rejected — destroys the only evidence that the committee '
          'considered anything at all.',
          'The honest summary is that publication changed what could be '
          'quoted rather than what was believed, and that this is neither '
          'the success its advocates claimed nor the catastrophe its '
          'opponents predicted. It raised the quality of informed criticism '
          'and supplied raw material for uninformed criticism, in '
          'proportions that differ by country and that nobody has yet '
          'explained. The national differences are large enough to matter '
          'and do not correlate with the obvious candidates: neither the '
          'extent of publication, nor the level of trust before it, nor the '
          'size of the press corps predicts which pattern a country '
          'develops.',
          'There is one finding on which the evidence is unambiguous, and it '
          'concerns timing rather than extent. Publication after a decision '
          'produces none of the candour effects and all of the '
          'accountability ones: advisers write as they always wrote, because '
          'the writing is done before anybody knows what will be quoted, and '
          'the record remains available to anybody assessing the decision '
          'afterwards. The jurisdictions that adopted this arrangement show '
          'the stable advice of the closed systems and the auditable record '
          'of the open ones, and the fact that this was discovered by '
          'accident rather than designed is the least satisfying part of the '
          'literature.'],
         items=[
          ('Which paragraph states the two premises being tested?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'A premise about trust and a premise about candour.'),
          ('Which paragraph reports the change in advisory writing?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 1,
           'Longer papers, more qualifications, dissent moved to private '
           'correspondence.'),
          ('Which paragraph describes a correctly rejected option being '
           'read as concealment?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 1,
           'The moment a possibility was raised and rejected for good '
           'reasons.'),
          ('The writer believes publication raised public trust.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3: movements were indistinguishable from noise, '
           'and downward where detectable.',
           {0: 'Yes would need a rise; paragraph 3 finds noise or a '
               'fall.', 2: 'Not Given is wrong because trust was measured.'}),
          ('The writer believes published advice became less honest.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 4 says it became less legible, not less honest.',
           {0: 'Yes would need dishonesty; paragraph 4 says it became '
               'less legible.', 2: 'Not Given is wrong because the change in the advice is '
               'characterised.'}),
          ('After publication, dissent was recorded more often in private '
           '____________.', None, 'correspondence',
           'Paragraph 4, where the publication rules do not reach.'),
          ('Before publication, critics could only dispute the minister’s '
           '____________.', None, 'characterisation',
           'Paragraph 5, whereas afterwards they could quote.'),
          (
           'Which arrangement produces the accountability effects '
           'without the candour cost?', None,
           'publication afterwards',
           'Paragraph 8, which the writer says was discovered by '
           'accident.')])],
   listen=[
    dict(heading='A scientist and a minister disagree', part='Part 4',
         task='A recorded exchange', band='l4', qtype='Questions 67-72',
         script=[
          ('Chair', 'Professor Oyelaran-Whitlock chaired the advisory '
           'committee. Ms Dahlberg-Iqbal was the minister responsible.'),
          ('Dahlberg-Iqbal', 'I will begin by conceding the thing I spent '
           'two years refusing to concede. Publication did not damage the '
           'advice. I predicted it would and the papers say it did not, and I '
           'have read the papers.'),
          ('Oyelaran-Whitlock', 'Then I will match that, because the '
           'concession I owe you is larger. Publication did not build trust '
           'either. That was my argument, I made it in public repeatedly, and '
           'in nine jurisdictions the measured movement is indistinguishable '
           'from nothing.'),
          ('Dahlberg-Iqbal', 'So we were both wrong about the thing we were '
           'arguing about.'),
          ('Oyelaran-Whitlock', 'We were both wrong, and what actually '
           'happened is a third thing neither of us raised. Publication '
           'changed what could be quoted. Before it, you characterised our '
           'advice and your critics argued with your characterisation. After '
           'it, everybody could quote the record.'),
          ('Dahlberg-Iqbal', 'Which I experienced as the worst part of the '
           'job, and I want to be precise about why. It was not the '
           'criticism. It was that every rejected option in our minutes '
           'became a suppressed warning. We considered closing the ports and '
           'rejected it for reasons recorded on the same page, and that '
           'paragraph has been quoted at me on television four times without '
           'the reasons.'),
          ('Oyelaran-Whitlock', 'And I have to accept that is a real cost of '
           'the thing I campaigned for. What I would not accept is the '
           'remedy you proposed, which was to stop minuting rejected '
           'options. That protects you and it destroys the only record of '
           'whether we thought about anything.'),
          ('Dahlberg-Iqbal', 'I withdrew that proposal and I withdrew it '
           'because of that argument.'),
          ('Oyelaran-Whitlock', 'Then let me put the thing I now think is '
           'right, which neither of us thought three years ago. Publish '
           'everything, after the decision. Advisers write before they know '
           'what will be quoted, so the candour you worried about is '
           'protected. The record survives for anybody judging the decision '
           'afterwards, so the accountability I wanted is protected.'),
          ('Dahlberg-Iqbal', 'My objection to that is that it looks like '
           'concealment at exactly the moment people care.'),
          ('Oyelaran-Whitlock', 'It does, and I have no answer to it beyond '
           'saying that every other arrangement we have tried has been '
           'worse on something that matters more. That is a weak defence '
           'and it is the honest one.'),
          ('Dahlberg-Iqbal', 'Would you say that in a committee room, with '
           'the weak defence left in?'),
          ('Oyelaran-Whitlock', 'I would, and I would rather be the person '
           'who said it than the person who claimed the arrangement was '
           'obviously right. We have both watched what happens to people '
           'who oversell these things, and it happens about two years '
           'later.')],
         items=[
          ('What does the minister concede at the start?',
           ['The advice was wrong', 'Publication did not damage the advice',
            'She misled the public', 'The committee was right about '
            'trust'], 1,
           'A prediction she made and the papers did not support.'),
          ('What does the professor concede in return?',
           ['The advice was poor', 'Publication did not build trust',
            'The data was weak', 'Ministers should decide'], 1,
           'Measured movement indistinguishable from nothing in nine '
           'jurisdictions.'),
          ('What did publication actually change?',
           ['What was believed', 'What could be quoted',
            'How advice was written', 'Who was consulted'], 1,
           'Critics could quote the record instead of disputing a '
           'characterisation.'),
          ('The minister’s specific complaint concerns',
           ['the volume of criticism', 'rejected options read as suppressed '
            'warnings', 'the cost of publication', 'delays'], 1,
           'The ports example, quoted without the recorded reasons.'),
          ('Which remedy did the professor refuse?',
           ['Publishing later', 'Ceasing to minute rejected options',
            'Publishing summaries only', 'Anonymising advisers'], 1,
           'Because it destroys the record of whether anything was '
           'considered.'),
          ('What arrangement does the professor now favour?',
           ['No publication', 'Publishing everything after the decision',
            'Publishing summaries', 'Publishing only dissent'], 1,
           'Which he defends as less bad than the alternatives rather than '
           'as good.')])],
   speak=dict(
    part='Part 3', focus='Openness and its effects',
    sounds=[('Uncertainty has a sound as well as a vocabulary, and the two '
             'must agree. Probably, said firmly, is a statement; probably, '
             'said with a rising wobble, invites the examiner to doubt '
             'everything around it.'),
            ('Practise the scale of this unit at a single steady pitch: '
             'certainly, very likely, probably, possibly, conceivably. The '
             'word carries the hedge; the voice should not add one.'),
            ('The phrase on the evidence we have is one chunk, stressed once, '
             'on evidence. Said word by word it occupies two seconds you '
             'cannot spare.'),
            ('Where you concede and then disagree, the pitch does the work: '
             'high and open on that may be true, dropping sharply on but it '
             'does not follow.'),
            ('Record ninety seconds on communicating uncertainty. Listen for a '
             'sentence where your voice undercut a hedge you had already '
             'placed in the words.')],
    intro=('The hardest turn in the unit. Try once to say that a change had '
           'an effect nobody on either side predicted.'),
    qs=['Does publishing official documents increase public trust?',
        'Should advisers be named in published advice?',
        'What are the risks of total openness?',
        'Who benefits most when records are published?'],
    shape=[('answer', 'The measured effect on trust is close to nothing.'),
           ('support', 'The people who distrusted the process did not read '
            'the minutes.'),
           ('follow-up', 'And the people who read them already trusted it.'),
           ('support', 'What publication changed was what could be '
            'quoted.'),
           ('follow-up', 'Which helped informed critics and supplied '
            'material to uninformed ones, in proportions nobody has '
            'explained.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Does publishing scientific advice increase trust?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say that publishing scientific advice '
                 'to government in full increases public trust. To what '
                 'extent do you agree? Write at least 250 words.'),
         model=[
          'My disagreement with this claim is not about its conclusion but '
          'about the premise beneath it, which is that people withhold trust '
          'from processes they cannot see and will extend it once they can. '
          'That premise is empirical, it has now been tested in nine '
          'jurisdictions, and it is false.',
          'Where advice moved from summary publication to full publication, '
          'measured trust in scientific advice to government did not rise. '
          'It moved by amounts indistinguishable from noise and, in the two '
          'cases where the movement was detectable at all, it moved '
          'downwards. The explanation is not mysterious: the people who '
          'distrusted the process did not read the minutes, and the people '
          'who read the minutes were not the people whose trust was in '
          'question.',
          'I should concede that the opposing premise fared no better. The '
          'standard objection to publication was that advisers would write '
          'less candidly once observed, and the papers written after the '
          'change are not less honest. They are longer, more qualified and '
          'less legible, and committee dissent migrated into private '
          'correspondence rather than disappearing, which is a cost but not '
          'the one that was predicted.',
          'What publication did change was the structure of argument rather '
          'than the level of belief. Critics who previously could only '
          'dispute a minister’s characterisation of the advice could now '
          'quote it. This improved informed criticism considerably and '
          'supplied uninformed criticism with material, since a full record '
          'of any deliberation contains options that were raised and '
          'correctly rejected, and such a passage quoted without its reasons '
          'reads as a suppressed warning.',
          'To the extent that I agree with the proposition, then, it is on '
          'different grounds from those usually offered: publication is '
          'justified by accountability, which it demonstrably delivers, and '
          'not by trust, which it demonstrably does not. The arrangement that '
          'follows is publication in full after the decision rather than '
          'before it, which is the only version supported by the evidence on '
          'both premises, and which has the additional merit of being '
          'defensible without claiming more than has been shown.'],
         notes=[
          'The first sentence attacks the premise rather than the '
          'conclusion. This is the structure Volume 5 teaches and it is '
          'visible to an examiner in the opening line: the essay is not '
          'disagreeing about whether publication is good but about what the '
          'argument for it assumes.',
          'Paragraph 3 concedes that the opposing premise also failed, which '
          'costs the essay nothing and buys it authority. An answer that '
          'reports both sides losing reads as an assessment rather than a '
          'position.',
          'The conclusion agrees with the proposition on different grounds '
          'from those offered and then names the arrangement that follows. '
          '"To the extent that I agree, it is on different grounds" is a '
          'band 7-and-above move worth having ready.'],
         model65=[
                  'Some people say that publishing scientific advice '
                  'to government increases public trust. I think the '
                  'effect is smaller than expected, and not always in '
                  'the direction intended.',
                  'The argument for publication is clear. If advice is '
                  'secret, a minister can describe it as they wish and '
                  'critics can only dispute the description. '
                  'Publication lets anybody check what was actually '
                  'recommended, and it makes it harder to claim '
                  'support that was never given.',
                  'But the measured effects are disappointing. Where '
                  'advice has been published, surveys show movements '
                  'in trust that are small and sometimes downward. '
                  'Advice written for publication also becomes more '
                  'careful and harder to read, so the public gains a '
                  'document it cannot easily use.',
                  'I think advice should still be published, but for '
                  'accountability rather than for trust. It allows the '
                  'argument to be conducted on what was said, which is '
                  'valuable even if no survey shows a change. '
                  'Expecting it to raise trust sets a test that it '
                  'will fail.',
                  ],
         gap65=[
                'It separates legibility from honesty, which is what '
                'actually changed when advice began to be written for '
                'publication.',
                'It reports the direction and the size of the measured '
                'movement, so the reader can see why the expectation '
                'was wrong.',
                'It names the benefit that does survive the evidence '
                'and says who it is for.',
                ],
         criterion=[('Attacking the premise rather than the conclusion',
                     'Task Response'),
                    ('Conceding that the opposing premise also failed',
                     'Task Response'),
                    ('Agreeing on different grounds from those offered',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Attacking a premise rather than a conclusion',
    explain=('The strongest objection available is usually to the '
             'unstated assumption rather than to the stated claim. These '
             'patterns name a premise and then say what is wrong with it.'),
    examples=['My disagreement is not with the conclusion but with the '
              'premise beneath it.',
              'Publication did not change trust; it changed what could be '
              'quoted.',
              'The argument assumes the advice will be read as a whole, and '
              'it is quarried for fragments.',
              'That premise is empirical and it has now been tested.'],
    task='Rewrite each objection so that it attacks the premise.',
    items=[('Publishing advice does not help.',
            'The argument for publishing assumes that people who distrust a '
            'process will read its minutes, and they do not.'),
           ('That policy will not work.',
            'The policy rests on the assumption that the cost falls on the '
            'people who choose, and here it does not.'),
           ('I disagree with their conclusion.',
            'I accept the conclusion from their premises and dispute the '
            'second premise.'),
           ('The study is unconvincing.',
            'The study establishes an association and the argument requires '
            'a causal premise it does not supply.'),
           ('More transparency is not the answer.',
            'Transparency is being asked to produce trust, and the evidence '
            'shows it produces quotability instead.')]),
   vocab=[('transparency', 'making a process visible to outsiders'),
          ('selective quotation', 'quoting a fragment so as to mislead'),
          ('candour', 'willingness to say what you really think'),
          ('deliberative record', 'the minutes of how a decision was '
           'reached'),
          ('dissent', 'a recorded disagreement within a committee'),
          ('jurisdiction', 'a country or region with its own rules'),
          ('intelligible', 'able to be followed by a reader'),
          ('auditable', 'able to be checked by somebody outside')],
   expr=[('Publication did not change trust; it changed what could be '
          'quoted', 'replaces a claimed effect with the real one'),
         ('we were both wrong about the thing we were arguing about',
          'reports a symmetrical concession'),
         ('That is a weak defence and it is the honest one',
          'grades your own argument'),
         ('quarried for quotable fragments',
          'describes how documents are actually used')],
   trans=['admittedly', 'nevertheless', 'in short', 'to the extent that'],
  ),
 ],
 technique=dict(
  title='The loop at 870 words, eight paragraphs, under time',
  body=('Volume 5 passages run to eight paragraphs and 870 words, which is '
        'longer than anything the real paper sets, and the loop has to '
        'survive the change. Two things break at this length. The first is '
        'the orientation step: with eight paragraphs you cannot hold the '
        'shape in your head, so the loop now requires a four-word note '
        'beside each paragraph as you finish it, and those notes are what '
        'you search when a question sends you back. The second is question '
        'loading: thirteen questions is too many to keep in mind at once, so '
        'load them in the two groups the paper gives you — the ones that '
        'follow the text in order, and the ones that do not — and carry only '
        'the first group through the reading.'),
  panel=[('Four words per paragraph',
          'Written in the margin as you finish it. Not a summary: a label '
          'you can search.'),
         ('Load in two groups',
          'Ordered questions ride along with the reading. Out-of-order '
          'questions wait until the labels exist.'),
         ('Underline and keep going',
          'Unchanged from Volume 3. At this length, stopping to re-read a '
          'paragraph costs two questions.'),
         ('Budget 7 minutes a passage',
          'At 170 to 185 words a minute, 870 words is about five minutes of '
          'reading plus two of orienting.')],
  task='Take the passage in cycle 5. Read it under the loop, writing a '
       'four-word label beside each paragraph, then answer the five '
       'questions below without looking back at the text.',
  qs=['What are your eight labels, in order?',
      'Which two paragraphs were hardest to label, and why?',
      'How long did the reading take, and what is that in words a minute?',
      'Which questions did you answer from the labels alone?',
      'Which label turned out to be wrong when you checked it?']),
 outlining=dict(
  title='Name the premise under each main idea before you keep it',
  body=('Everything you brainstorm rests on something you have not said. '
        'The premise test makes you say it: under each idea you are '
        'considering, write the one sentence that must be true for the idea '
        'to work. Three things follow. Ideas whose premise you cannot write '
        'are not yet ideas and go. Ideas whose premise is obviously false go '
        'faster, and you have saved yourself a paragraph. And the ideas that '
        'survive arrive with their own best objection attached, because the '
        'premise is where an intelligent reader will attack — which means '
        'you can get there first, which is the whole of what cycle 5 '
        'teaches.'),
  frame=('Publication should be required of the advice and of the reasoning '
         'behind it, but after the decision rather than before it, because '
         'the case for publication rests on accountability and the case '
         'against rests on candour, and only the timing can serve both',
         [('The accountability argument depends on a premise about what '
           'readers do with documents',
           ['it assumes the advice will be read as a whole',
            'in practice it is quarried for quotable fragments']),
          ('The candour argument depends on a premise about how advisers '
           'behave when observed',
           ['it assumes advisers write differently when published',
            'this is measurable and has been measured'])]),
  task='Brainstorm ten ideas for the cycle 4 prompt and write the premise '
       'under each one. Mark any premise that is empirical, and say how it '
       'could be tested.',
  qs=['Which ideas had no premise you could write?',
      'Which premise is false, and how do you know?',
      'Which premises are empirical rather than evaluative?',
      'Where would an intelligent opponent attack first?',
      'Does your thesis depend on a premise you have stated?'],
  answers=['usually the ones that were slogans rather than arguments',
           'the trust premise, which has been measured in nine '
           'jurisdictions',
           'both of the surviving ones here: what readers do, how advisers '
           'write',
           'at the premise, which is why you should name it before they do',
           'it should; an unstated premise is the hole in a band 7 answer']),
 candos=['I can read an eight-paragraph passage under the loop with a label '
         'beside each paragraph',
         'I can say what a published range claims and what it does not',
         'I can explain how two specialists agree about data and differ '
         'about meaning',
         'I can name the premise under an idea before deciding to keep it',
         'I can attack a premise rather than a conclusion'],
 tip=('At this length, write four words beside each paragraph as you finish '
      'it. The labels cost ten seconds a paragraph and are the only thing '
      'that makes an out-of-order question answerable without rereading.'),
)
