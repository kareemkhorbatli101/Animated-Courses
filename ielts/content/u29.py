# -*- coding: utf-8 -*-
"""Unit 29 - Media and Trust. IELTS Volume 3, band 6.0."""

_SHARES = dict(kind='bar', title='Shares and read-throughs by story type',
               sub='per thousand people who saw the headline',
               cats=['Political\nclaim', 'Scandal', 'Research\nfinding',
                     'Local\nnews'],
               series=[('Shared', [84, 91, 12, 9]),
                       ('Read to the end', [11, 14, 46, 52])])

UNIT = dict(
 n=29, vol=3, level='B1+', band='6.0',
 theme='Media and Trust',
 opener=(
   'A regulator’s complaints notice, four readers who trust four different '
   'things, and a two-series bar chart in which two of the four categories '
   'behave alike and the other two behave in the opposite way. The unit ends '
   'on the question platforms would rather you did not separate: whether '
   'removing a false story works, and who decides which story that is.'),

 cycles=[
  dict(
   sub='Complaining about coverage',
   step=1,
   read=[
    dict(heading='How to complain about a programme',
         kind='Regulator notice',
         task='Flow-chart completion and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('A regulator’s notice is read for the ground, not the '
                'grievance',
                ['Regulators consider complaints only under named rules. '
                 'The notice lists them, usually in one paragraph.',
                 'Find that list first. A complaint that cannot be attached '
                 'to one of those rules is closed without being considered, '
                 'however justified it is.']),
         paras=[
          'Complain to the broadcaster first. We will not normally consider a '
          'complaint until the broadcaster has had the opportunity to reply, '
          'and broadcasters are required to respond within twenty working '
          'days. About half of all complaints are resolved at this stage.',
          'If you remain dissatisfied, complain to us within twenty working '
          'days of the broadcaster’s reply. You must say which rule you '
          'believe has been broken. The rules most often engaged are those on '
          'accuracy, on due impartiality in matters of political '
          'controversy, on fairness to a person featured, and on privacy.',
          'We consider whether the programme as broadcast breached the code. '
          'We do not consider whether a programme was biased in a general '
          'sense, whether a presenter is likeable, or whether you disagree '
          'with the editorial decision to cover a subject at all. These are '
          'matters for the broadcaster.',
          'Where a complaint is upheld, we publish our finding and may '
          'require the broadcaster to broadcast a correction. We cannot '
          'require an apology to an individual, and we cannot award '
          'compensation, which is the point at which most complainants tell '
          'us the process was not worth their time.',
          'Our findings are published every fortnight. Around one complaint '
          'in forty is upheld, and the great majority of those concern '
          'accuracy rather than impartiality, because accuracy can be '
          'established and impartiality has to be judged across a period of '
          'coverage rather than a single programme.'],
         items=[
          ('A complaint to the regulator must be made within',
           ['ten working days', 'twenty working days', 'three months',
            'a year'], 1,
           'Paragraph 2, counted from the broadcaster’s reply.'),
          ('Which of these will the regulator NOT consider?',
           ['Accuracy', 'Privacy', 'Whether a presenter is likeable',
            'Fairness to a person featured'], 2,
           'Paragraph 3 lists this among matters for the broadcaster.'),
          ('Most upheld complaints concern',
           ['impartiality', 'accuracy', 'privacy', 'fairness'], 1,
           'Paragraph 5, because accuracy can be established.'),
          ('Broadcasters must reply within ____________ working days.',
           None, 'twenty',
           'Paragraph 1, where about half of complaints are resolved.'),
          ('About one complaint in ____________ is upheld.', None,
           'forty', 'Paragraph 5, with findings published every '
           'fortnight.')]),
    dict(heading='What the code requires',
         kind='Summary of rules', task='Matching features',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'Accuracy requires that news, in whatever form, is reported with '
          'due accuracy. A factual error that is corrected promptly and '
          'prominently will not normally be treated as a breach of the code; '
          'the same error left uncorrected will be.',
          'Due impartiality applies to matters of political or industrial '
          'controversy and to matters relating to current public policy. '
          'Impartiality is assessed across a series or a period of coverage '
          'and not programme by programme, which is the part complainants '
          'find hardest to accept.',
          'Fairness concerns the treatment of people and organisations '
          'featured in a programme. It requires that a person facing '
          'significant criticism is given an appropriate and timely '
          'opportunity to respond. Whether the criticism is true is a '
          'question of accuracy and not of fairness.',
          'Privacy requires that any infringement be warranted. Filming in a '
          'public place is not an infringement in itself; filming a person in '
          'distress is capable of being one even in a public place, and the '
          'test is whether the public interest outweighs the intrusion.'],
         items=[
          ('Under which rule does a prompt correction matter?',
           ['Accuracy', 'Impartiality', 'Fairness', 'Privacy'], 0,
           'A corrected error is not normally treated as a breach.'),
          ('Which rule is assessed across a period rather than one '
           'programme?', ['Accuracy', 'Impartiality', 'Fairness',
            'Privacy'], 1,
           'Which the notice says complainants find hardest to accept.'),
          ('Which rule gives a right to respond to criticism?',
           ['Accuracy', 'Impartiality', 'Fairness', 'Privacy'], 2,
           'An appropriate and timely opportunity to respond.'),
          ('Under which rule is the public interest weighed against the '
           'intrusion?', ['Accuracy', 'Impartiality', 'Fairness',
            'Privacy'], 3,
           'Any infringement must be warranted.')])],
   listen=[
    dict(heading='Making a complaint', part='Part 1',
         task='A call to a broadcasting regulator', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Officer', 'Complaints team, Yusuf speaking.'),
          ('Caller', 'Hello. I want to complain about a programme that was '
           'completely one-sided.'),
          ('Officer', 'I can help with that, though I should warn you at the '
           'start that one-sided on its own is not something we can consider. '
           'Can you tell me the programme and the date?'),
          ('Caller', 'The Evening Report, the sixth of March.'),
          ('Officer', 'Have you complained to the broadcaster?'),
          ('Caller', 'I wrote three weeks ago and heard nothing.'),
          ('Officer', 'Then they still have time. Twenty working days, which '
           'from the sixth takes them to about the fourth of April. If '
           'nothing arrives, come back to me and we will treat the silence as '
           'a reply.'),
          ('Caller', 'And what should I say when I come back?'),
          ('Officer', 'Name the rule. If a figure in the programme was wrong, '
           'that is accuracy, and accuracy is the one that gets upheld. If '
           'you mean the coverage as a whole leaned one way, that is '
           'impartiality, and impartiality is judged across a period of '
           'coverage rather than one programme.'),
          ('Caller', 'There was a figure that was wrong, as it happens. They '
           'said forty per cent and the report says fourteen.'),
          ('Officer', 'Then lead with that and give me the timecode if you '
           'can, because a complaint with a timecode gets to an investigator '
           'and a complaint without one goes to a triage queue.'),
          ('Caller', 'About eleven minutes in.'),
          ('Officer', 'Eleven minutes. I will note that on the file now, '
           'under reference C-nine-four-seven-two.'),
          ('Caller', 'Will I get an apology?'),
          ('Officer', 'We cannot require one, and we cannot award '
           'compensation. What we can require is a correction on air, and '
           'that is the honest limit of what this process does.')],
         items=[
          ('Programme: The Evening Report, ____________ March', None, '6',
           'The date of the broadcast complained about.'),
          ('The broadcaster has ____________ working days to reply.', None,
           'twenty', 'Counted from 6 March, taking them to about 4 April.'),
          ('The rule to lead with: ____________', None, 'accuracy',
           'Because the programme gave 40 per cent where the report says '
           '14.'),
          ('Timecode: about ____________ minutes in', None, 'eleven',
           'Which gets the complaint to an investigator.'),
          ('Reference number: C____________', None, '9472',
           'Noted on the file during the call.')]),
    dict(heading='A short talk: who people believe', part='Part 2',
         task='A talk at a journalism school', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Speaker', 'I have surveyed trust in news for fourteen years, and '
           'the finding I want to give you is the one that took me longest to '
           'accept, because it contradicts how everybody in this room was '
           'trained.'),
          ('Speaker', 'People do not decide what to believe by assessing '
           'accuracy. Almost nobody has the means to assess accuracy on most '
           'subjects, including me, including you. What they assess is '
           'whether a source has ever admitted being wrong, and whether it '
           'treats them as a fool.'),
          ('Speaker', 'The first of those is measurable and it is '
           'extraordinary. Outlets that publish visible, prominent '
           'corrections score about twenty points higher on trust than '
           'outlets that correct quietly, even among readers who disagree '
           'with their politics. A correction is not an admission of '
           'weakness. It is the only evidence of honesty a reader can '
           'actually check.'),
          ('Speaker', 'The second one is about tone, and it is where '
           'broadcast loses most. When a presenter explains something a '
           'viewer already knows in the voice you would use to a child, that '
           'viewer discounts everything else in the programme. We can see it '
           'in the second-by-second figures and it does not recover within '
           'the broadcast.'),
          ('Speaker', 'Then there is the finding I dislike. Trust in '
           'individuals runs far ahead of trust in institutions, and it is '
           'rising. People believe a named person who has been consistent '
           'for three years over a title that has been consistent for a '
           'century, and no amount of institutional reputation closes that '
           'gap.'),
          ('Speaker', 'So if you want to be believed, my advice is '
           'unromantic. Put your name on it, correct things loudly, and never '
           'explain to your audience something they are likely to know. None '
           'of that is about accuracy, and all of it determines whether your '
           'accuracy is believed.')],
         items=[
          ('The speaker says people decide what to believe by assessing',
           ['accuracy', 'whether a source admits being wrong',
            'how famous a source is', 'how often they see it'], 1,
           'Along with whether it treats them as a fool.'),
          ('Outlets publishing prominent corrections score',
           ['five points higher', 'twenty points higher', 'the same',
            'lower'], 1,
           'Even among readers who disagree with their politics.'),
          ('What happens when a presenter over-explains?',
           ['Viewers switch off', 'Viewers discount the rest of the '
            'programme', 'Trust recovers later', 'Nothing measurable'], 1,
           'And it does not recover within the broadcast.'),
          ('Which finding does the speaker dislike?',
           ['Corrections help', 'Trust in individuals exceeds trust in '
            'institutions', 'Tone matters', 'Trust is falling'], 1,
           'And no institutional reputation closes the gap.')])],
   speak=dict(
    part='Part 1', focus='News you follow',
    intro=('Two or three sentences each. Naming an actual source is better '
           'than a general answer.'),
    qs=['How do you usually get news?',
        'Do you follow the news every day?',
        'Do you trust the news you read?',
        'Has the way you get news changed in the last few years?'],
    shape=[('answer', 'Mostly a radio bulletin in the morning.'),
           ('support', 'Ten minutes while I make coffee, which is about my '
            'limit.'),
           ('follow-up', 'I trust it more than what reaches me through my '
            'phone, probably because it cannot be chosen for me.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Complaining to a broadcaster about a report',
         prompt=('You believe a news report contained a serious error. Write '
                 'a letter to the broadcaster. In your letter: identify the '
                 'report; explain the error; say what you want done. Write '
                 'at least 150 words.'),
         model=[
          'Dear Sir or Madam,',
          'I am writing about an item in The Evening Report of 6 March, at '
          'approximately eleven minutes into the broadcast, and about a '
          'figure given in that item which I believe to be inaccurate.',
          'The presenter stated that forty per cent of applications had been '
          'refused. The figure in the published report, on page nine of the '
          'annual review, is fourteen per cent. Forty per cent appears '
          'nowhere in the document and I cannot find a source for it. The '
          'difference is not a matter of interpretation, since the two '
          'figures answer the same question in the same words.',
          'The report appears to breach the requirement of due accuracy in '
          'that the error went to the central claim of the item rather than '
          'to a detail within it, and the item was repeated in the later '
          'bulletin without amendment.',
          'I should be grateful if you would check the figure against the '
          'published report and, if you find as I have, broadcast a '
          'correction at a comparable point in a comparable programme. I '
          'would also be grateful to know the source of the forty per cent '
          'figure, since if it exists I shall withdraw this complaint '
          'without hesitation.',
          'Yours faithfully,',
          'A. Thorvaldsen-Mukherjee'],
         notes=[
          'The letter identifies the item by date and timecode in its first '
          'sentence. Broadcasters file complaints by programme, and one that '
          'arrives already located reaches an editor rather than a queue.',
          'The error is shown rather than asserted: the wrong figure, the '
          'right figure, the page it is on, and a sentence explaining why '
          'this is not interpretation. That last sentence pre-empts the '
          'standard reply.',
          'The final paragraph offers to withdraw the complaint if the figure '
          'turns out to exist. Offering a way for you to be wrong makes the '
          'rest of the letter far harder to dismiss.'],
         criterion=[('Locating the item by date and timecode',
                     'Task Achievement'),
                    ('Showing the error rather than asserting it',
                     'Task Response'),
                    ('Offering a way for yourself to be wrong',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Grounds and evidence in a complaint',
    explain=('A complaint is assessed against a rule. Naming the rule and '
             'then saying in what respect it was broken is the standard '
             'formal structure, and the phrase "in that" does the work.'),
    examples=['The report appears to breach the requirement of due accuracy '
              'in that the figure given was wrong by a factor of three.',
              'The item was repeated without amendment.',
              'The difference is not a matter of interpretation.',
              'I shall withdraw this complaint without hesitation.'],
    task='Rewrite each complaint so that it names the rule and the '
         'respect.',
    items=[('The programme was inaccurate.',
            'The item appears to breach the accuracy requirement in that it '
            'gave forty per cent where the published figure is fourteen.'),
           ('They were unfair to him.',
            'The programme appears to breach the fairness requirement in that '
            'no opportunity to respond was offered before broadcast.'),
           ('It was biased.',
            'The coverage over the fortnight appears to lack due '
            'impartiality in that no contrary view was presented in any of '
            'the six items.'),
           ('They invaded her privacy.',
            'The filming appears to breach the privacy rule in that the '
            'person was in evident distress and was identifiable.'),
           ('They never corrected it.',
            'The error remains uncorrected eleven days after it was drawn to '
            'the broadcaster’s attention.')]),
   vocab=[('code', 'a set of rules a broadcaster must follow'),
          ('impartiality', 'not favouring one side of a controversy'),
          ('accuracy', 'correctness of the facts reported'),
          ('upheld', 'decided in the complainant’s favour'),
          ('complainant', 'the person making a complaint'),
          ('timecode', 'the time at which something occurs in a recording'),
          ('warranted', 'justified by a sufficient reason'),
          ('triage', 'sorting cases by urgency or type')],
   expr=[('appears to breach the requirement of due accuracy in that',
          'names a rule and the respect in which it was broken'),
         ('is not a matter of interpretation',
          'rules out the standard defence'),
         ('I shall withdraw this complaint without hesitation',
          'offers a way for yourself to be wrong'),
         ('the honest limit of what this process does',
          'states what a procedure cannot deliver')],
   trans=['furthermore', 'in this connection', 'in that', 'I should be '
          'grateful'],
  ),

  dict(
   sub='Who people believe',
   step=2,
   read=[
    dict(heading='Four readers on who they trust',
         kind='Four short texts',
         task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  Severine: I trust whichever outlet has most recently told me '
          'something I did not want to hear. That is the whole of my method '
          'and I recommend it. An outlet that has never cost me a comfortable '
          'belief is not reporting; it is agreeing with me professionally.',
          'B  Dermot: I trust people and not titles. There are four '
          'journalists whose work I follow and I have no loyalty at all to '
          'the papers they happen to write for. When one of them moved, I '
          'moved, and I cancelled a subscription I had held for nine '
          'years.',
          'C  Winnifred: What I look for is corrections. Not the absence of '
          'errors, because nobody is free of errors, but whether the '
          'corrections are easy to find. The outlet I read prints them at the '
          'foot of the original article, which took me a while to notice and '
          'settled the matter.',
          'D  Abimbola: I have given up on the question and I think giving up '
          'was rational. I cannot verify most of what I am told, I know that '
          'my sense of who sounds credible is unreliable, and so I hold '
          'nearly everything loosely and wait a week. The cost is that I am '
          'always slightly behind, and I have decided that is a price worth '
          'paying.'],
         items=[
          ('Which person uses discomfort as a test of trustworthiness?',
           ['Severine', 'Dermot', 'Winnifred', 'Abimbola'], 0,
           'An outlet that has never cost her a comfortable belief is not '
           'reporting.'),
          ('Which person follows individuals rather than publications?',
           ['Severine', 'Dermot', 'Winnifred', 'Abimbola'], 1,
           'He cancelled a nine-year subscription when a journalist moved.'),
          ('Which person judges by how corrections are published?',
           ['Severine', 'Dermot', 'Winnifred', 'Abimbola'], 2,
           'At the foot of the original article.'),
          ('Which person has decided to suspend judgement?',
           ['Severine', 'Dermot', 'Winnifred', 'Abimbola'], 3,
           'Holding things loosely and waiting a week.'),
          ('Winnifred believes a trustworthy outlet makes no errors.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says explicitly that nobody is free of errors.'),
          ('Abimbola thinks other people are wrong to trust the news.',
           ['Yes', 'No', 'Not Given'], 2,
           'He describes his own position as rational; he says nothing about '
           'others.')])],
   listen=[
    dict(heading='Two editors disagree about balance', part='Part 3',
         task='A conversation in a newsroom', band='l3',
         qtype='Questions 25-29',
         script=[
          ('Fiadh', 'We have four minutes on the water story and I want to '
           'give all four to the researcher.'),
          ('Osvaldo', 'And I want two and two, which is what the guidance '
           'says.'),
          ('Fiadh', 'The guidance says due impartiality. Due is the word '
           'everybody drops. Two minutes each between a measurement and '
           'somebody who doubts the measurement is not balance; it is a '
           'statement that the two are equally supported, and we would be '
           'making that statement with our running order.'),
          ('Osvaldo', 'I accept the principle and I will tell you where it '
           'goes wrong in practice. Who decides which claims are settled? '
           'Last year this newsroom treated a question as settled and the '
           'finding was withdrawn in June.'),
          ('Fiadh', 'That is the strongest version of your argument and I '
           'had not expected it today.'),
          ('Osvaldo', 'It is also why I keep asking for two and two. Not '
           'because I think the sceptic is right. Because I do not trust us '
           'to make the call, and the two-and-two rule protects us from '
           'ourselves.'),
          ('Fiadh', 'Then let me offer a third thing. We give the researcher '
           'three minutes and we spend the fourth saying what the dispute '
           'actually is: that twelve studies find one thing, two find '
           'another, and the two are smaller and funded differently.'),
          ('Osvaldo', 'That is more work than either of our positions.'),
          ('Fiadh', 'It is considerably more work and it is the only version '
           'that is true. It also gives the viewer the one thing neither of '
           'our formats does, which is the weight of the evidence rather '
           'than the number of speakers.'),
          ('Osvaldo', 'I will take it, with one condition. If we are going '
           'to describe the weight of the evidence, somebody has to read the '
           'studies, and it cannot be the producer at nine on the morning '
           'of.'),
          ('Fiadh', 'Agreed, and I will put that in writing, because it is '
           'the bit that always quietly stops happening by the third '
           'week.')],
         items=[
          ('Fiadh objects to equal time because',
           ['it is too long', 'it states that two positions are equally '
            'supported', 'the researcher is better', 'the guidance is '
            'old'], 1,
           'A statement the newsroom would be making with its running '
           'order.'),
          ('Osvaldo’s strongest argument is',
           ['the guidance requires it', 'the newsroom cannot be trusted to '
            'decide what is settled', 'viewers prefer it',
            'it is cheaper'], 1,
           'A finding treated as settled was withdrawn in June.'),
          ('What does Fiadh propose instead?',
           ['Two and two', 'Four minutes to the researcher',
            'Three minutes plus one describing the weight of evidence',
            'Dropping the story'], 2,
           'Twelve studies against two that are smaller and funded '
           'differently.'),
          ('What does she say this gives the viewer?',
           ['A shorter item', 'The weight of the evidence rather than the '
            'number of speakers', 'More voices', 'A clearer presenter'], 1,
           'Which neither of their formats does.'),
          ('What condition does Osvaldo attach?',
           ['A longer item', 'That somebody is given time to read the '
            'studies', 'A second presenter', 'A written apology'], 1,
           'And not the producer at nine on the morning of broadcast.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Trust',
    intro=('Short answers, then the long turn. Four bullets in order, and '
           'make the explanation the longest part.'),
    cue=('Describe a source of information you trust.',
         ['what it is', 'how you came across it', 'what you use it for',
          'and explain why you trust it']),
    qs=['Do you trust what you read online?',
        'Do people in your country trust the news?',
        'Now look at the card. You have one minute to make notes.',
        'Is it possible to know what is true?'],
    shape=[('answer', 'A weekly newsletter written by one economist.'),
           ('support', 'A colleague forwarded one about four years ago.'),
           ('follow-up', 'I use it mainly to understand numbers I see '
            'elsewhere.'),
           ('support', 'And I trust it because she publishes what she got '
            'wrong at the top.'),
           ('follow-up', 'Which is the only test of honesty I can actually '
            'apply.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should broadcasters give equal time to both sides?',
         prompt=('Some people believe broadcasters should always give equal '
                 'time to both sides of an argument. What are the advantages '
                 'of this, and do you think it is the right approach? Write '
                 'at least 250 words.'),
         model=[
          'The advantages of a rule requiring equal time are real and they '
          'are mostly advantages of having a rule at all, which is a '
          'distinction worth keeping in view.',
          'A fixed allocation is simple to apply, visible to the audience, '
          'and resistant to pressure. An editor who can point to a rule is '
          'harder to lobby than one exercising judgement, and the rule also '
          'protects a newsroom from its own mistakes: a question treated as '
          'settled is sometimes reopened, and a format that always carries '
          'the minority view will carry it on the occasions when the minority '
          'turns out to be right.',
          'Against that, equal time communicates something the broadcaster '
          'may not intend. Two minutes each between a measurement and '
          'somebody who disputes it tells a viewer that the two are equally '
          'supported, and where twelve studies find one result and two find '
          'another, that is a false description conveyed by the running order '
          'rather than by anything said.',
          'I therefore think equal time is the wrong approach while the '
          'problem it addresses is a genuine one. The resolution is to report '
          'the weight of the evidence explicitly: not two speakers, nor one, '
          'but a sentence saying how many studies point which way, how large '
          'they are and who paid for them. That is harder than either '
          'format, which is the real reason it is rare.',
          'It also keeps what is valuable in the equal-time rule. The '
          'minority position is still described, so a newsroom that turns out '
          'to be wrong has not suppressed the view that was right; it has '
          'simply not pretended the evidence was evenly divided when it was '
          'not.'],
         notes=[
          'The first paragraph separates the advantages of this rule from the '
          'advantages of having any rule. That distinction is the essay’s '
          'best idea and it arrives in one sentence.',
          'Paragraph 2 gives the opposing case its strongest form, which here '
          'is self-protection: a rule shields a newsroom from its own '
          'errors. This is the third unit in which improving the opposing '
          'case comes before answering it, and it is deliberate.',
          'The last paragraph shows that the proposed answer keeps what was '
          'valuable in the rejected one. Reassuring the reader that nothing '
          'good is lost is a strong way to finish a prompt of this shape.'],
         criterion=[('Separating this rule from the value of having a rule',
                     'Task Response'),
                    ('The opposing case in its strongest form',
                     'Task Response'),
                    ('Showing the answer keeps what was valuable',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Reported stance: saying what somebody claims',
    explain=('Reporting a position without endorsing it needs verbs that '
             'mark the stance. The verb you choose tells the reader where you '
             'stand, so choose it deliberately.'),
    examples=['Equal time between a claim and its refutation is not '
              'balance.',
              'He maintains that the measurement is disputed.',
              'She concedes the point and relocates the question.',
              'Twelve studies find one result; two find another.'],
    task='Rewrite each sentence using a verb that marks the stance exactly.',
    items=[('He said the figures were wrong.',
            'He maintains that the figures are wrong, without having '
            'produced an alternative.'),
           ('She agreed with the criticism.',
            'She concedes the criticism and argues that it applies to the '
            'format rather than to the finding.'),
           ('They say it is settled.',
            'They treat the question as settled, which twelve of the fourteen '
            'studies support.'),
           ('He disagreed.',
            'He accepts the principle and disputes whether the newsroom can '
            'apply it reliably.'),
           ('Both sides have a point.',
            'Each position identifies a real risk, and the two risks are not '
            'of the same size.')]),
   vocab=[('false balance', 'treating unequal evidence as equal'),
          ('credibility', 'the quality of being believable'),
          ('source', 'where a piece of information came from'),
          ('running order', 'the sequence of items in a programme'),
          ('due', 'appropriate to the subject, not simply equal'),
          ('refutation', 'a demonstration that a claim is false'),
          ('lobby', 'to press a decision-maker for an outcome'),
          ('suppress', 'to prevent something from being heard')],
   expr=[('Due is the word everybody drops',
          'recovers a qualifier that changes a rule'),
         ('the two-and-two rule protects us from ourselves',
          'defends a rule by the error it prevents'),
         ('the weight of the evidence rather than the number of speakers',
          'replaces one measure with a better one'),
         ('the bit that always quietly stops happening by the third week',
          'predicts the failure of a commitment')],
   trans=['whereas', 'that said', 'against that', 'it also'],
  ),

  dict(
   sub='Where attention goes',
   step=3,
   read=[
    dict(heading='What gets shared and what gets read',
         kind='Data article',
         task='Matching information and sentence completion',
         band='gt_work', qtype='Questions 30-35',
         figure=_SHARES,
         paras=[
          'The chart shows two measures for four kinds of story, both '
          'expressed per thousand people who saw the headline: how many '
          'shared it, and how many read it to the end. The two measures are '
          'almost unrelated, and the pattern is the point.',
          'Political claims and scandals behave alike. Both are shared '
          'heavily — 84 and 91 per thousand — and read to the end rarely, at '
          '11 and 14. Research findings and local news behave in the opposite '
          'way: shared by 12 and 9 per thousand, read to the end by 46 and '
          '52.',
          'Grouping the four into those two pairs is more informative than '
          'ranking them. What the first pair have in common is that the '
          'headline contains the whole of the claim, so sharing requires no '
          'reading. What the second pair share is that the headline is an '
          'announcement and the content is the substance.',
          'The ratios make the point sharply. A political claim is shared '
          'about eight times for every person who finishes it; local news is '
          'read to the end about six times for every person who shares it. '
          'Those are not differences of degree.',
          'Two cautions belong with figures of this kind. The first is that '
          '"read to the end" is inferred from how far a page is scrolled and '
          'how long it is open, which is an approximation that will '
          'overcount somebody who left a tab open. The second is that these '
          'are averages across many outlets, and the variation between '
          'outlets within a category is larger than the gap between the two '
          'pairs.',
          'The practical consequence is uncomfortable for anybody producing '
          'news. The stories that travel are the ones nobody reads, and the '
          'stories that are read travel to almost nobody. An outlet funded by '
          'attention is therefore paid for the first pair and judged by the '
          'second, which is a reasonable description of the last fifteen '
          'years.'],
         items=[
          ('Which paragraph explains what the two heavily shared categories '
           'have in common?', ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'The headline contains the whole of the claim.'),
          ('Which paragraph gives the two cautions?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'Inference from scrolling, and variation between outlets.'),
          ('Which paragraph states the consequence for news producers?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6',
            'Paragraph 2'], 2,
           'Paid for the first pair and judged by the second.'),
          ('Scandal: shared by ____________ per thousand', None, '91',
           'Paragraph 2, against 14 who read it to the end.'),
          ('Local news: read to the end by ____________ per thousand',
           None, '52', 'Paragraph 2, against 9 who shared it.'),
          ('A political claim is shared about ____________ times for every '
           'person who finishes it.', None, 'eight',
           'Paragraph 4, where local news reverses the ratio.')])],
   listen=[
    dict(heading='A researcher on sharing behaviour', part='Part 4',
         task='A talk on attention and sharing', band='l4',
         qtype='Questions 36-41',
         figure=_SHARES,
         script=[
          ('Researcher', 'Four categories, two measures, and I want you to '
           'resist the instinct to rank them. The useful move with this chart '
           'is to group, because two of these four behave alike and the other '
           'two behave as their mirror image.'),
          ('Researcher', 'Political claims: eighty-four shares per thousand '
           'who saw the headline, eleven who read to the end. Scandal: '
           'ninety-one and fourteen. Those two are the same animal. Research '
           'findings: twelve shares, forty-six read through. Local news: nine '
           'and fifty-two. Also the same animal as each other, and the '
           'opposite of the first pair.'),
          ('Researcher', 'The explanation is in the headline rather than in '
           'the reader. For a political claim or a scandal the headline is '
           'the whole content: once you have read seven words you know '
           'everything you would get from the article, and you can share it '
           'without dishonesty. For research and local news the headline is '
           'an announcement and everything that matters is below it.'),
          ('Researcher', 'Two cautions, because I would rather you heard them '
           'from me. "Read to the end" is inferred from scroll depth and '
           'dwell time, so it overcounts anybody who left a tab open and '
           'undercounts a fast reader. And these are averages across many '
           'outlets; within any one of these categories the spread between '
           'outlets is wider than the gap between my two pairs.'),
          ('Researcher', 'Now the consequence, which I think is the real '
           'finding. Advertising pays for attention, and attention is '
           'measured by what travels. So an outlet is paid for the category '
           'nobody finishes and judged, by its own staff and by people like '
           'me, on the category almost nobody shares.'),
          ('Researcher', 'And the usual recommendation — write better '
           'headlines for research — does not survive the chart. A headline '
           'good enough to be shared for a research finding would have to '
           'contain the whole claim, and a research finding whose whole claim '
           'fits in seven words is usually one I would not publish.'),
          ('Researcher', 'What does follow from the chart is a change of '
           'target. If the sharing figure measures how much of a story sits '
           'in its headline, then it is not a measure of quality or of '
           'reach, and an organisation paid on it is being paid for the '
           'shape of its sentences. I would stop reporting it to editors '
           'weekly, which is the only recommendation here anybody can act '
           'on by Monday.')],
         items=[
          ('The researcher advises',
           ['ranking the four categories', 'grouping them into two pairs',
            'ignoring two of them', 'collecting more data'], 1,
           'Because two behave alike and two are their mirror image.'),
          ('Research findings are read to the end by',
           ['12 per thousand', '46 per thousand', '52 per thousand',
            '91 per thousand'], 1,
           'Against twelve per thousand who share them.'),
          ('The explanation lies in',
           ['the reader', 'the headline', 'the platform', 'the time of '
            'day'], 1,
           'Because for some stories the headline is the whole content.'),
          ('"Read to the end" is inferred from',
           ['surveys', 'scroll depth and dwell time', 'comments',
            'subscriptions'], 1,
           'So it overcounts an open tab and undercounts a fast reader.'),
          ('An outlet is paid for',
           ['what is read', 'what travels', 'what is corrected',
            'what is local'], 1,
           'And judged on the category almost nobody shares.'),
          ('Why does he reject the usual recommendation?',
           ['It is expensive', 'A shareable headline would have to contain '
            'the whole claim', 'Readers dislike it',
            'It has been tried'], 1,
           'And a finding that fits in seven words is usually not worth '
           'publishing.')])],
   speak=dict(
    part='Part 3', focus='Headlines and what follows them',
    intro=('Four or five sentences. Try once to group two things that behave '
           'alike.'),
    qs=['Do people read beyond the headline?',
        'Why do some stories spread much further than others?',
        'Should news organisations care how often a story is shared?',
        'Is local news important?'],
    shape=[('answer', 'It depends entirely on the kind of story.'),
           ('support', 'Political claims and scandals behave identically: '
            'shared a lot, finished rarely.'),
           ('follow-up', 'Research and local news are the exact '
            'reverse.'),
           ('support', 'The reason is whether the headline is the whole '
            'claim.'),
           ('follow-up', 'Which means it is a fact about headlines rather '
            'than about readers.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Shares and read-throughs for four story types',
         prompt=('The chart below shows how often four types of story were '
                 'shared and how often they were read to the end, per '
                 'thousand people who saw the headline. Summarise the '
                 'information by selecting and reporting the main features, '
                 'and make comparisons where relevant. Write at least 150 '
                 'words.'),
         figure=_SHARES,
         model=[
          'The bar chart compares two measures for four types of story: the '
          'number of people per thousand who shared it, and the number who '
          'read it to the end. Overall, the four types fall into two clear '
          'pairs which behave in opposite ways, with political claims and '
          'scandals shared frequently but rarely finished, and research '
          'findings and local news finished frequently but rarely shared.',
          'Political claims and scandals are almost identical on both '
          'measures. They are shared by 84 and 91 people per thousand '
          'respectively, the two highest figures on the chart, while being '
          'read to the end by only 11 and 14, the two lowest.',
          'Research findings and local news reverse the pattern equally '
          'closely. They are shared by only 12 and 9 people per thousand, '
          'while being read to the end by 46 and 52, which are the highest '
          'read-through figures shown.',
          'The contrast between the pairs is best expressed as a ratio. A '
          'political claim is shared roughly eight times for every person who '
          'finishes it, whereas local news is finished almost six times for '
          'every person who shares it — a reversal of nearly fifty times '
          'between the two extremes.'],
         notes=[
          'The Overall statement names the grouping rather than the highest '
          'bar. On a two-series chart where categories pair up, the pairing '
          'is the main feature and ranking the bars misses it entirely.',
          'One paragraph per pair, with both measures inside each paragraph. '
          'Organising by pair rather than by series is what keeps this answer '
          'to four paragraphs instead of eight sentences of numbers.',
          'The ratio comparison at the end does something no absolute figure '
          'can: it shows that the two pairs are not merely different but '
          'inverted. Reach for a ratio whenever two series cross.'],
         criterion=[('An Overall statement naming the grouping',
                     'Task Achievement'),
                    ('One paragraph per pair, both measures inside',
                     'Coherence and Cohesion'),
                    ('A ratio showing the reversal', 'Lexical Resource')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Grouping categories by shared behaviour',
    explain=('When categories pair up, you need language that says so before '
             'you give any numbers. These patterns group first and quantify '
             'afterwards.'),
    examples=['Two categories behave alike and the other two are '
              'opposites.',
              'Political claims and scandals are almost identical on both '
              'measures.',
              'Research findings and local news reverse the pattern equally '
              'closely.',
              'The four fall into two pairs rather than a ranking.'],
    task='Rewrite each sentence so that it groups before it quantifies.',
    items=[('Scandal is shared by 91 and political claims by 84.',
            'Scandals and political claims behave almost identically, at 91 '
            'and 84 shares per thousand.'),
           ('Research is read by 46 and local news by 52.',
            'Research findings and local news form the second pair, read to '
            'the end by 46 and 52 per thousand.'),
           ('Political claims are shared most.',
            'The two most-shared categories are also the two least often '
            'finished.'),
           ('The figures are very different.',
            'The four categories fall into two pairs whose behaviour is '
            'inverted rather than merely different.'),
           ('Local news is read a lot and shared little.',
            'Local news belongs with research findings: high read-through, '
            'low sharing.')]),
   vocab=[('read-through', 'the share of readers who finish an article'),
          ('headline', 'the title of a news item'),
          ('amplification', 'the spreading of content by many sharers'),
          ('dwell time', 'how long a page stays open'),
          ('inverted', 'reversed in direction'),
          ('ratio', 'one quantity expressed in terms of another'),
          ('overcount', 'to record more than actually occurred'),
          ('attention', 'the resource an advertiser is buying')],
   expr=[('resist the instinct to rank them',
          'redirects a reader from ranking to grouping'),
         ('those two are the same animal',
          'asserts that two categories behave as one'),
         ('paid for the category nobody finishes',
          'states a misalignment of incentives'),
         ('does not survive the chart',
          'rejects a recommendation on the evidence shown')],
   trans=['while', 'by contrast', 'taken together', 'the explanation'],
  ),

  dict(
   sub='Why a false story travels',
   step=4,
   read=[
    dict(heading='Novelty, emotion and the speed of a rumour',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 42-48',
         paras=[
          'False stories travel faster and further than true ones, and the '
          'finding is robust enough that the interesting question is no '
          'longer whether it happens but which mechanism produces it. The '
          'candidate explanations have different consequences, which is why '
          'the distinction matters more than it appears to.',
          'The first and least interesting explanation is that automated '
          'accounts do it. This has been tested repeatedly and the effect is '
          'small. Removing identified automated accounts from the data leaves '
          'the difference in spread between true and false stories almost '
          'unchanged, because the great majority of the sharing is done by '
          'ordinary people with ordinary accounts.',
          'The second explanation is novelty, and it has the most support. '
          'False stories are, on average, more novel than true ones, in the '
          'precise sense that they are less similar to what the sharer has '
          'recently seen. Novelty is independently known to drive sharing, '
          'and false stories have an advantage here that is structural rather '
          'than accidental: a true story is constrained by what happened, and '
          'a false one is constrained by nothing. That asymmetry does not '
          'depend on anybody intending it, which is part of why it has '
          'proved so hard to legislate against.',
          'The third is emotional content. False stories elicit more '
          'surprise and disgust; true ones elicit more sadness and '
          'anticipation. Surprise and disgust are both strongly associated '
          'with sharing, and this is probably a partial mechanism for the '
          'novelty effect rather than an alternative to it. The two are '
          'hard to separate experimentally, because a surprising story is '
          'usually a novel one and nobody has found a way to vary one '
          'while holding the other constant.',
          'A fourth explanation is rarely offered and is probably '
          'substantial: false stories are often simpler. A story '
          'unconstrained by evidence can have one cause, one villain and no '
          'qualifications, while the true account of the same event usually '
          'has three causes and a sentence beginning "although". '
          'Shareability and simplicity are closely linked, and simplicity is '
          'precisely what accuracy costs. A reporter who adds the second '
          'cause and the qualification has written a better article and a '
          'less shareable one, and both of those are measured by somebody '
          'in the building.',
          'The asymmetry in correction follows from the same analysis and is '
          'worse than most people expect. A correction is, by construction, '
          'less novel than the claim it corrects, since the reader has '
          'already seen the claim. It is also more complex, since it must '
          'restate the claim before denying it. It therefore travels through '
          'a smaller network than the claim did, typically reaching between a '
          'tenth and a third of those who saw the original. The figure is '
          'remarkably stable across platforms and across subjects, which '
          'suggests it is a property of networks rather than of any '
          'particular design.',
          'This is why interventions aimed at the sharer have had '
          'disappointing results. Asking people to consider accuracy before '
          'sharing produces a measurable effect, and the effect is small and '
          'decays within days. The mechanism is not a failure of intention; '
          'it is that the properties which make a story worth passing on are '
          'systematically correlated with the properties that make it '
          'false. That is a far less comfortable finding than a story '
          'about carelessness, because carelessness can be addressed by '
          'telling people to be careful.',
          'What follows is not despair but a change of target. If the '
          'mechanism is novelty and simplicity rather than malice or '
          'inattention, then the useful interventions act on the structure of '
          'distribution rather than on the virtue of individuals: slowing '
          'the resharing of unread links, attaching the correction to the '
          'original item rather than publishing it separately, and declining '
          'to treat the number of shares as a measure of anything except '
          'itself.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['The role of automated accounts', 'Novelty',
            'Emotional content', 'Simplicity'], 0,
           'Removing them leaves the difference almost unchanged.'),
          ('Choose the best heading for paragraph 5.',
           ['Novelty', 'Emotional content', 'Simplicity',
            'The asymmetry in correction'], 2,
           'One cause, one villain and no qualifications.'),
          ('Choose the best heading for paragraph 7.',
           ['The asymmetry in correction',
            'Why interventions on sharers disappoint',
            'A change of target', 'Simplicity'], 1,
           'Asking people to consider accuracy has a small, decaying '
           'effect.'),
          ('The writer believes automated accounts are the main cause.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 reports that removing them changes little.'),
          ('The writer believes nothing can be done about the problem.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph proposes interventions on distribution '
           'instead.'),
          ('Corrections typically reach between a tenth and a ____________ '
           'of those who saw the original.', None, 'third',
           'Paragraph 6, because a correction is less novel and more '
           'complex.'),
          ('The writer says the properties that make a story worth passing '
           'on are correlated with the properties that make it '
           '____________.', None, 'false',
           'Paragraph 7, which is why intention is not the problem.')])],
   listen=[
    dict(heading='A lecture on misinformation', part='Part 4',
         task='A lecture on why false stories spread', band='l4',
         qtype='Questions 49-54',
         script=[
          ('Lecturer', 'That false stories spread faster than true ones is '
           'settled. I am not going to spend time on it. What I want to do is '
           'go through the four candidate mechanisms, because which one is '
           'right determines what you should do, and three of the four point '
           'somewhere different from where the money currently goes.'),
          ('Lecturer', 'Mechanism one, automated accounts. Tested, and the '
           'answer is that it is small. Take the identified automated '
           'accounts out of the dataset and the gap between true and false '
           'spread barely moves, because almost all of the sharing is done by '
           'people like us with accounts like ours.'),
          ('Lecturer', 'Mechanism two, novelty, and this has the most '
           'support. A false story is on average less similar to what you '
           'have recently seen, and novelty drives sharing on its own. Notice '
           'that this advantage is structural: a true story is limited by what '
           'happened and a false story is limited by nothing at all.'),
          ('Lecturer', 'Mechanism three, emotion. False stories produce more '
           'surprise and disgust; true ones produce more sadness and '
           'anticipation. Surprise and disgust both drive sharing. I would '
           'treat this as part of how novelty works rather than as a rival '
           'to it.'),
          ('Lecturer', 'Mechanism four, which almost nobody lists and which I '
           'think is large: false stories are simpler. One cause, one '
           'villain, no qualifications. The true version of the same event '
           'has three causes and a sentence beginning with "although". '
           'Simplicity is shareable, and simplicity is exactly what accuracy '
           'costs you.'),
          ('Lecturer', 'Now put those together and look at corrections. A '
           'correction is necessarily less novel than the claim, because you '
           'have already seen the claim, and necessarily more complex, '
           'because it has to restate the claim before denying it. So it '
           'travels through a smaller network: between a tenth and a third of '
           'the original audience. That is not a failure of effort. It is '
           'arithmetic, and it is why I think asking individuals to be more '
           'careful is the least promising thing we currently spend money '
           'on.'),
          ('Lecturer', 'One last point, and it is the one I would put in an '
           'examination. If the mechanism is novelty and simplicity rather '
           'than malice, then nothing about this problem requires anybody '
           'to be acting in bad faith, and an explanation that needs no '
           'villain is both more likely to be right and much harder to '
           'campaign about.')],
         items=[
          ('How many candidate mechanisms does the lecturer discuss?',
           ['Two', 'Three', 'Four', 'Five'], 2,
           'Automated accounts, novelty, emotion and simplicity.'),
          ('Removing automated accounts from the data',
           ['closes the gap', 'barely changes the gap', 'reverses the gap',
            'has not been tried'], 1,
           'Because almost all sharing is done by ordinary accounts.'),
          ('Why does he call the novelty advantage structural?',
           ['It is measured precisely', 'A true story is limited by what '
            'happened and a false one by nothing',
            'It applies to all platforms', 'It has been found twice'], 1,
           'Which is the mechanism with the most support.'),
          ('Which mechanism does he say almost nobody lists?',
           ['Automated accounts', 'Novelty', 'Emotion', 'Simplicity'], 3,
           'One cause, one villain, no qualifications.'),
          ('A correction is necessarily more complex because',
           ['it is longer', 'it must restate the claim before denying it',
            'it cites sources', 'it is written by lawyers'], 1,
           'And necessarily less novel because the claim has been seen.'),
          ('What does he call the least promising use of money?',
           ['Fact-checking', 'Asking individuals to be more careful',
            'Platform regulation', 'Media literacy in schools'], 1,
           'Because the asymmetry is arithmetic rather than a failure of '
           'effort.')])],
   speak=dict(
    part='Part 3', focus='Correcting what people believe',
    intro=('Four or five sentences. Try once to explain a mechanism rather '
           'than assign blame.'),
    qs=['Why do false stories spread so easily?',
        'Do corrections work?',
        'Should people be taught how to check information?',
        'Whose responsibility is it to stop false information?'],
    shape=[('answer', 'Mainly because a false story can be simpler than a '
            'true one.'),
           ('support', 'One cause and one villain, where the truth has '
            'three causes.'),
           ('follow-up', 'And a correction has to restate the claim before '
            'denying it.'),
           ('support', 'So it is longer and less surprising than what it '
            'corrects.'),
           ('follow-up', 'Which is arithmetic rather than anybody’s '
            'laziness.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Developable ideas that answer the question',
         prompt=('Should platforms be responsible for what users post? '
                 'Brainstorm, keep only ideas that are both developable and '
                 'answers to this exact question, and outline. Do not write '
                 'the essay yet.'),
         plan=('Platforms should be responsible for how they distribute '
               'content rather than for whether each item is true, because '
               'distribution is what they choose and truth is not',
               [('Responsibility for truth requires an adjudication nobody '
                 'can staff',
                 ['millions of items and no agreed test for most of them',
                  'errors in both directions are inevitable and '
                  'consequential']),
                ('Responsibility for distribution is enforceable because '
                 'the choices are the platform’s own',
                 ['ranking and resharing are design decisions',
                  'attaching corrections to the original item is a '
                  'mechanism, not a judgement'])]),
         notes=[
          'The hard part of this prompt is that most good ideas about '
          'misinformation are not answers to it. "Corrections travel badly" '
          'is true, developable and about readers rather than platform '
          'responsibility, so it belongs in a supporting sentence and not as '
          'a main point.',
          'Test every surviving idea against the exact words: responsible, '
          'platforms, what users post. An idea that does not touch all three '
          'is answering an adjacent question.',
          'The thesis splits responsibility into two kinds, which is the move '
          'that makes the essay arguable. Splitting the key term of a prompt '
          'is worth looking for every time.'],
         criterion=[('Keeping only ideas that answer the exact question',
                     'Task Response'),
                    ('Splitting the key term of the prompt',
                     'Task Response')],
         instruct='  Produce the brainstorm, the rejections and the outline. '
                  'You will write it in cycle 5.',
         lines=12)],
   gram=dict(
    point='Mechanism and evidence together',
    explain=('A strong explanatory sentence gives the mechanism and the '
             'evidence for it in one move. These patterns do that without '
             'becoming two sentences.'),
    examples=['Corrections travel through a smaller network than the claim '
              'did, typically reaching a tenth to a third of the '
              'audience.',
              'Removing automated accounts leaves the gap almost unchanged, '
              'which is why the explanation is not automation.',
              'A false story is limited by nothing, which is why its novelty '
              'advantage is structural.',
              'Surprise drives sharing, and false stories produce more of '
              'it.'],
    task='Rewrite each pair so that mechanism and evidence appear together.',
    items=[('False stories are novel. Novelty drives sharing.',
            'False stories are more novel than true ones, and novelty is '
            'independently known to drive sharing.'),
           ('Corrections do not spread. They restate the claim.',
            'A correction must restate the claim before denying it, which '
            'makes it longer and less novel, and it reaches a third of the '
            'original audience at best.'),
           ('Automation is not the cause. The data shows this.',
            'Removing identified automated accounts barely changes the gap, '
            'which rules out automation as the main mechanism.'),
           ('Simple stories spread. True stories are complex.',
            'Simplicity drives sharing, and accuracy costs simplicity, which '
            'is why the true version spreads less.'),
           ('Asking people to think does not work well. The effect fades.',
            'Prompting people to consider accuracy produces a small effect '
            'that decays within days, which suggests the problem is not '
            'intention.')]),
   vocab=[('novelty', 'how unlike what has been seen before'),
          ('salience', 'how much something stands out'),
          ('cascade', 'a chain of sharing through a network'),
          ('correction', 'a published statement putting an error right'),
          ('imbalance', 'an unequal relation between two directions'),
          ('decay', 'to weaken gradually over time'),
          ('prompt', 'a message designed to change a behaviour'),
          ('resharing', 'passing on something already shared')],
   expr=[('the interesting question is no longer whether it happens',
          'moves a settled question aside'),
         ('a true story is constrained by what happened',
          'explains an advantage structurally'),
         ('simplicity is precisely what accuracy costs',
          'names a trade-off in six words'),
         ('not despair but a change of target',
          'turns a negative finding into a direction')],
   trans=['consequently', 'which in turn', 'as a result', 'what follows'],
  ),

  dict(
   sub='Whether correction works',
   step=5,
   read=[
    dict(heading='What happens after a story is corrected',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 55-61',
         paras=[
          'The question whether correcting a false story works has been '
          'answered in opposite directions twice in fifteen years, which is '
          'usually a sign that the question contains two questions. It does, '
          'and separating them resolves most of the apparent '
          'contradiction. It also explains why both camps can quote '
          'evidence honestly and arrive in opposite places.',
          'The first wave of research produced the backfire effect: '
          'corrections were reported to strengthen the original belief among '
          'people committed to it. The finding was influential, widely '
          'reported and is now understood to have been largely an artefact of '
          'small samples and unusual stimuli. Attempts to reproduce it at '
          'scale find that corrections, on average, reduce belief in the '
          'false claim. The reversal of a famous finding is worth noting '
          'for its own sake: the original was not fraudulent, merely '
          'small, and it shaped a decade of practice before anybody tried '
          'it at scale.',
          'That is the good news and it is narrower than it sounds. '
          'Corrections reduce belief, and they do so by amounts that are '
          'modest, decay over weeks, and are smaller for claims that fit a '
          'person’s existing commitments. A correction is an effective '
          'instrument with a short half-life. Anybody designing a '
          'correction policy on the assumption that a belief corrected '
          'once stays corrected is designing for a world that has not been '
          'measured.',
          'The second question is reach, and it is where the real problem '
          'lies. A correction that works on everybody who sees it is '
          'ineffective if a tenth of the original audience sees it. This '
          'distinction between efficacy and reach is routinely collapsed in '
          'public argument, with researchers quoting efficacy figures and '
          'critics quoting reach figures, both correctly. Almost every '
          'unproductive exchange on this subject can be traced to that '
          'single collapse of two questions into one.',
          'Reach can be engineered, and here the evidence is encouraging in a '
          'way the efficacy literature is not. Attaching a correction to the '
          'original item, so that anybody arriving at the false story later '
          'encounters it, raises the proportion corrected from under a tenth '
          'to over half in the platform experiments that have been published. '
          'This is a design decision rather than a persuasion problem, '
          'and it is the only part of this literature where the available '
          'improvement is large and the obstacle is not scientific.',
          'The third and least studied question is what a correction does to '
          'trust. Readers who encounter many corrections from one outlet '
          'report higher trust in it, which is the opposite of what editors '
          'fear and is consistent across the survey work. Readers who '
          'encounter many corrections of claims in general report lower trust '
          'in everything, including in the corrections. Both effects appear '
          'to be real and they operate at different levels, which is a '
          'combination that almost no survey instrument is designed to '
          'detect.',
          'This last pair has an uncomfortable implication that is seldom '
          'drawn. An information environment full of visible corrections is '
          'healthier at the level of the individual outlet and more corrosive '
          'at the level of the system, and no intervention yet proposed '
          'separates the two. The outlet that corrects loudly earns trust '
          'partly by contributing to a general impression that nothing can '
          'be relied on. Nobody involved is behaving badly and the '
          'outcome is still worse than if none of them had.',
          'The honest summary is therefore three sentences rather than one. '
          'Corrections work, modestly and temporarily, on those who see '
          'them. Making them seen is a solved engineering problem that is '
          'mostly not implemented. And the effect of living among many '
          'corrections is a question nobody has designed a study large enough '
          'to answer, although it is probably the one that matters most.'],
         items=[
          ('Which paragraph discusses the backfire effect?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'Now understood as largely an artefact of small samples.'),
          ('Which paragraph distinguishes efficacy from reach?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 1,
           'Researchers quote one and critics quote the other, both '
           'correctly.'),
          ('Which paragraph describes two opposite effects on trust?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7',
            'Paragraph 8'], 1,
           'Trust in one outlet rises; trust in everything falls.'),
          ('The writer believes corrections strengthen false beliefs.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 reports that the backfire finding did not '
           'reproduce.'),
          ('The writer believes the reach problem is technically unsolved.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5 and the conclusion call it solved and mostly not '
           'implemented.'),
          ('Attaching a correction to the original item raises the '
           'proportion corrected to over ____________.', None, 'half',
           'Paragraph 5, from under a tenth.'),
          ('What does the writer say nobody has designed a study large '
           'enough to answer?', None,
           'the effect of living among many corrections',
           'The final paragraph, which calls it probably the most important '
           'question.')])],
   listen=[
    dict(heading='A platform officer and a researcher disagree',
         part='Part 4', task='A recorded exchange', band='l4',
         qtype='Questions 62-67',
         script=[
          ('Chair', 'Ms Delacroix-Oyediran leads trust and safety at a large '
           'platform. Dr Ismailov studies corrections.'),
          ('Ismailov', 'I want to start by giving away my strongest card, '
           'because the argument is more useful without it. The backfire '
           'effect is dead. Corrections do not strengthen false beliefs. My '
           'side quoted that finding for ten years and it did not '
           'reproduce.'),
          ('Delacroix-Oyediran', 'I am grateful, and I will match it. '
           'Attaching a correction to the original item works. Our own '
           'experiments put the proportion corrected above half, against '
           'under a tenth for a separate correction. That is a design '
           'decision and we have not rolled it out everywhere.'),
          ('Ismailov', 'Why not?'),
          ('Delacroix-Oyediran', 'Because it requires deciding what is false '
           'at a scale of millions of items a day, and every error in either '
           'direction becomes a story about us. The engineering is finished. '
           'The adjudication is the part nobody can staff.'),
          ('Ismailov', 'That is a better objection than the one I usually '
           'hear from your industry, which is about free expression.'),
          ('Delacroix-Oyediran', 'The free expression argument is real and it '
           'is not the binding one. The binding one is that I would need '
           'eleven thousand trained adjudicators and I have fourteen hundred '
           'people and a model that is right about eighty-five per cent of '
           'the time on claims of this kind.'),
          ('Ismailov', 'Then may I offer the move I think resolves it? Do not '
           'adjudicate truth. Adjudicate distribution. You do not have to '
           'decide whether an item is false to decline to amplify an item '
           'nobody has opened. That is a decision about your own ranking, it '
           'is yours to make, and it does not require you to be a court.'),
          ('Delacroix-Oyediran', 'That is the first proposal in four years '
           'that I could implement without a new department, and I notice I '
           'am going to have to explain internally why we have not.'),
          ('Ismailov', 'I will write it up with you, and I will include the '
           'part that is bad for my own field: the effect of living among '
           'constant corrections on general trust is unstudied, and it is '
           'probably the question that matters most.'),
          ('Delacroix-Oyediran', 'Put a number in it. I can get a '
           'proposal through my own leadership with a number and I cannot '
           'get one through with a principle, which is the single most '
           'useful thing I know about my own company.'),
          ('Ismailov', 'Then the number is under a tenth against over a '
           'half, and I will put it in the first sentence.')],
         items=[
          ('What does Ismailov concede at the start?',
           ['Platforms cannot act', 'The backfire effect is dead',
            'Corrections never work', 'His data is small'], 1,
           'A finding his side quoted for ten years that did not '
           'reproduce.'),
          ('Attaching a correction to the original item raises the '
           'proportion corrected to',
           ['under a tenth', 'about a quarter', 'above half',
            'almost all'], 2,
           'Against under a tenth for a separate correction.'),
          ('Why has it not been rolled out everywhere?',
           ['It is expensive', 'Deciding what is false at scale cannot be '
            'staffed', 'Users object', 'It is untested'], 1,
           'With every error in either direction becoming a story about the '
           'platform.'),
          ('She says the binding objection is not',
           ['cost', 'free expression', 'accuracy', 'speed'], 1,
           'Which she calls real but not the binding one.'),
          ('What does Ismailov propose instead?',
           ['More adjudicators', 'Adjudicating distribution rather than '
            'truth', 'Removing all claims', 'Labelling everything'], 1,
           'Declining to amplify an item nobody has opened.'),
          ('What does he add that is bad for his own field?',
           ['His sample was small', 'The effect of constant corrections on '
            'general trust is unstudied', 'Corrections are expensive',
            'His funding is from a platform'], 1,
           'And probably the question that matters most.')])],
   speak=dict(
    part='Part 3', focus='Who should decide what is true',
    intro=('The hardest turn in the unit. Try once to separate whether '
           'something works from whether anybody can do it.'),
    qs=['Should social media companies remove false information?',
        'Who should decide what counts as false?',
        'Is it better to remove something or to label it?',
        'What would you change about how information spreads?'],
    shape=[('answer', 'Removing it works and deciding what to remove is the '
            'hard part.'),
           ('support', 'Attaching a correction to the original raises the '
            'proportion corrected to over half.'),
           ('follow-up', 'So the engineering is finished.'),
           ('support', 'What is missing is anybody able to judge millions of '
            'items a day.'),
           ('follow-up', 'Which is why I would regulate how things are '
            'spread rather than whether they are true.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should companies remove false information?',
         prompt=('Write the essay you planned in cycle 4, adapted to this '
                 'prompt. Some people say social media companies should '
                 'remove false information. Discuss both views and give your '
                 'own opinion. Write at least 250 words.'),
         model=[
          'The two positions in this argument are answering different '
          'questions — whether removal works, and whether anybody can decide '
          'what to remove — and both are right about their own. The '
          'resolution lies in a third option neither of them states.',
          'The case for removal rests on evidence that is stronger than it '
          'was. Corrections do reduce belief in a false claim, the earlier '
          'finding that they strengthened it has not survived replication, '
          'and attaching a correction to the original item raises the '
          'proportion of the audience reached from under a tenth to above '
          'half. As engineering, this is a solved problem.',
          'The case against is not really about free expression, although '
          'that is how it is usually argued. It is about adjudication. A '
          'large platform handles millions of items a day, has no agreed test '
          'for the truth of most of them, and makes errors in both '
          'directions that become news. Requiring a company to rule on truth '
          'at that scale is requiring it to build a court it cannot staff, '
          'and the errors would fall unpredictably.',
          'My own position is that platforms should be made responsible for '
          'distribution rather than for truth. A platform does not need to '
          'decide whether an item is false in order to decline to amplify '
          'something nobody has opened, to slow the resharing of an unread '
          'link, or to attach an existing correction to the item it '
          'corrects. Each of those is a decision about the platform’s own '
          'design, which it is already making and already accountable for.',
          'That reframing keeps what is valuable in both positions. It uses '
          'the evidence that corrections work, and it avoids asking a company '
          'to be a tribunal. It also leaves the question I would most want '
          'answered untouched: what living among constant corrections does to '
          'trust in general, which nobody has yet studied at the necessary '
          'scale.'],
         notes=[
          'The introduction says the two sides answer different questions and '
          'promises a third option. That is structure 3, and announcing it in '
          'the first sentence is what keeps the essay from reading as a '
          'fence-sitting answer.',
          'Paragraph 3 refuses the free-expression framing and supplies the '
          'better objection, with a number. The same move has appeared in '
          'four units now, which is deliberate: by this volume it should be '
          'automatic.',
          'The conclusion names a question it is leaving open. Admitting what '
          'your own resolution does not solve is a mark of a band 7 or above '
          'answer and costs two sentences.'],
         criterion=[('Announcing a third option in the introduction',
                     'Task Response'),
                    ('Refusing a weak framing and supplying a better '
                     'objection', 'Task Response'),
                    ('Naming what the resolution leaves unsolved',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=18)],
   gram=dict(
    point='Hedging under genuine disagreement',
    explain=('Where evidence is mixed, a claim has to carry its own '
             'confidence. Hedge the part that is uncertain and state the part '
             'that is not, in the same sentence.'),
    examples=['Removing it works and deciding what to remove is the hard '
              'part.',
              'Corrections reduce belief, modestly and temporarily.',
              'Both effects appear to be real and they operate at different '
              'levels.',
              'This is probably the question that matters most, and it is '
              'unstudied.'],
    task='Rewrite each claim so that the certain and uncertain parts are '
         'marked differently.',
    items=[('Corrections work.',
            'Corrections reliably reduce belief in a false claim, by amounts '
            'that are modest and appear to decay within weeks.'),
           ('The backfire effect is false.',
            'The backfire effect has not reproduced at scale, which makes it '
            'unlikely to be a general phenomenon.'),
           ('Platforms could fix this.',
            'The distribution problem is solvable by design; the '
            'adjudication problem probably is not.'),
           ('Constant corrections damage trust.',
            'Many corrections appear to raise trust in the correcting outlet '
            'and may lower trust in general, and the second effect is '
            'unmeasured.'),
           ('Labelling is better than removal.',
            'Labelling reaches more people than a separate correction; '
            'whether it is preferable to removal has not been tested '
            'directly.')]),
   vocab=[('moderation', 'deciding what content is allowed'),
          ('overreach', 'acting beyond a proper limit'),
          ('chilling effect', 'discouraging lawful speech by the threat of '
           'action'),
          ('adjudication', 'deciding a disputed question formally'),
          ('efficacy', 'how well something works on those it reaches'),
          ('reach', 'how many people are reached'),
          ('reproduce', 'to obtain the same result in a new study'),
          ('artefact', 'a result produced by the method rather than the '
           'world')],
   expr=[('I want to start by giving away my strongest card',
          'concedes in order to improve an argument'),
         ('the engineering is finished; the adjudication is the part nobody '
          'can staff', 'splits a problem into a solved and an unsolved '
          'half'),
         ('do not adjudicate truth, adjudicate distribution',
          'relocates a responsibility'),
         ('the part that is bad for my own field',
          'volunteers evidence against yourself')],
   trans=['admittedly', 'and yet', 'on balance', 'that reframing'],
  ),
 ],
 technique=dict(
  title='Grouping categories that behave alike in a two-series chart',
  body=('A bar chart with two series and four or more categories looks like '
        'an invitation to rank, and ranking is almost always the wrong '
        'answer. What the chart is usually built to show is that the '
        'categories fall into groups: two behave one way, two behave the '
        'other, or three cluster and one is an outlier. Finding the grouping '
        'takes about twenty seconds — look across both series and ask which '
        'categories are high on the same one — and it changes everything '
        'afterwards, because your Overall statement names the grouping, your '
        'paragraphs follow the groups, and your comparison is between groups '
        'rather than between bars.'),
  panel=[('Read across both series',
          'Which categories are high on the same series and low on the '
          'same? Those belong together.'),
         ('Name the grouping in the Overall',
          '"The four fall into two pairs that behave in opposite ways" is a '
          'main feature. "X is highest" is not.'),
         ('One paragraph per group',
          'Both measures inside each paragraph, so the pattern stays '
          'visible.'),
         ('Compare with a ratio',
          'Where two series cross, a ratio shows the reversal that absolute '
          'figures hide.')],
  task='Take the chart in cycle 3. Write the grouping, the Overall '
       'statement, and one ratio comparison between the two groups.',
  qs=['Which categories are high on the first series?',
      'Which are high on the second?',
      'What is the grouping, in one sentence?',
      'Is there an outlier that fits neither group?',
      'Write one ratio that shows the reversal.']),
 outlining=dict(
  title='Essay to outline on a model that hides its plan',
  body=('Earlier in this volume you reduced a passage to its outline. This '
        'is the harder version: take a model essay whose structure is not '
        'announced — no "firstly", no "in conclusion" — and recover the plan '
        'anyway. Work backwards from the function of each paragraph rather '
        'than from its signposts. Ask of each one: is this a concession, a '
        'main point, a support, a reframing, or a limit? A well-built essay '
        'has exactly one of some of those and never two reframings. When you '
        'have labelled every paragraph by function, you have the plan, and '
        'you will notice that it is shorter and more repetitive than the '
        'essay — which is what a plan is supposed to be.'),
  frame=('Platforms should be responsible for how they distribute content '
         'rather than for whether each item is true, because distribution is '
         'what they choose and truth is not',
         [('Responsibility for truth requires an adjudication nobody can '
           'staff',
           ['millions of items a day with no agreed test for most',
            'errors in both directions are inevitable and consequential']),
          ('Responsibility for distribution is enforceable because the '
           'choices are the platform’s own',
           ['ranking and resharing are design decisions',
            'attaching corrections to the original is a mechanism, not a '
            'judgement'])]),
  task='Take the cycle 5 model essay. Label every paragraph by function, '
       'then write the plan it must have come from in under seventy words.',
  qs=['Which paragraph is the concession?',
      'Which is the reframing, and is there more than one?',
      'Which sentences are supports rather than points?',
      'How many words is your recovered plan?'],
  answers=['the third, which refuses the free-expression framing',
           'the fourth, and there should never be two',
           'every sentence containing a number is a support',
           'about sixty, from five hundred words of essay']),
 candos=['I can find the named rules a regulator will actually consider',
         'I can group categories that behave alike in a two-series chart',
         'I can explain why a correction travels less far than the claim',
         'I can keep only the brainstormed ideas that answer the exact '
         'question',
         'I can separate whether something works from whether anybody can '
         'do it'],
 tip=('On a two-series bar chart, spend twenty seconds asking which '
      'categories group together before you write anything. The grouping is '
      'the main feature; the ranking almost never is.'),
)
