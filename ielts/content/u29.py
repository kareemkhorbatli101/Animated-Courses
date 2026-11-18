# -*- coding: utf-8 -*-
"""Unit 29 - Media and Trust. IELTS Volume 3, band 6.0."""

_SHARES = dict(kind='bar', teaches='data', title='Shares and read-throughs by story type',
               sub='per thousand people who saw the headline',
               cats=['Political\nclaim', 'Scandal', 'Research\nfinding',
                     'Local\nnews'],
               series=[('Shared', [84, 91, 12, 9]),
                       ('Read to the end', [11, 14, 46, 52])])

UNIT = dict(
 n=29, vol=3, level='B2', band='6.0',
 theme='Media and Trust',
 opener=(
   'A regulator’s complaints notice, four readers who trust four different '
   'things, and a two-series bar chart in which two of the four categories '
   'behave alike and the other two behave in the opposite way. The unit ends '
   'on the question platforms would rather you did not separate: whether '
   'removing a false story works, and who decides which story that is.'),

 field='media',
 unitmap={'kind': 'unitmap', 'teaches': 'navigation', 'n': 29, 'theme': 'Media and Trust', 'rows': [('Complaining about coverage', 'Matching features: the complaint and the clause it cites', 'Matching features · multiple choice · note completion · Part 1'), ('Who people believe', 'Yes/No/Not Given: the reporting verb that gives it away', 'Yes/No/Not Given · matching features · Part 2'), ('Where attention goes', 'Task 1: grouping categories that behave alike', 'Matching information · sentence completion · Task 1 Academic'), ('Why a false story travels', 'Matching headings: the paragraph that gives a mechanism', 'Matching headings · Yes/No/Not Given · Part 4'), ('Whether correction works', 'Task 2: hedging where the disagreement is real', 'Matching information · Yes/No/Not Given · Task 2')], 'note': 'Nine of the words in cycle 5 were first met in unit 23, where the subject was an epidemic: a cascade, a decay curve and a correction behave the same way whether they are made of viruses or of retweets, and that is why this unit sits where it does.'},
 sceneintro='Eight things from a newsroom and a complaints desk, and the words for them. Six are used in cycle 1 and five come back in cycle 4, where the subject is how a story spreads rather than how it is challenged.',
 scene={'kind': 'scene', 'teaches': 'activate', 'title': 'Unit 29 · a newsroom and a complaints desk', 'instr': 'Write the number of each thing beside its word. Two words in the bank are not in the picture.', 'cells': [('news', 'running order'), ('brief', 'editorial code'), ('clock', 'timecode'), ('envelope', 'complaint form'), ('people', 'complainant'), ('chart', 'reach'), ('note', 'correction'), ('laptop', 'moderation queue')], 'bank': ['running order', 'editorial code', 'timecode', 'complaint form', 'complainant', 'reach', 'correction', 'moderation queue', 'adjudication', 'lobby'], 'answers': ['running order', 'editorial code', 'timecode', 'complaint form', 'complainant', 'reach', 'correction', 'moderation queue'], 'note': 'Answers: 1 running order · 2 editorial code · 3 timecode · 4 complaint form · 5 complainant · 6 reach · 7 correction · 8 moderation queue. Not in the picture: adjudication, lobby.'},
 puzzle={'kind': 'puzzle', 'teaches': 'curiosity', 'title': 'How far does a correction travel?', 'question': 'The first bar is the original story. Which of the other four is the correction, and what does the gap tell you about what a correction can achieve?', 'bars': [('Original story', 100), ('Shares of original', 71), ('Correction published', 100), ('Shares of correction', 6), ('Saw both', 4)], 'mark': 3, 'ylab': 'indexed to the original story at 100', 'note': 'Cycle 5 is about this gap. Notice that the correction was published as prominently as the story: the difference is entirely in what readers did with it.'},
 cycles=[
  dict(
   sub='Complaining about coverage',
   step=1,
   notes=dict(
    serves='Matching features and multiple choice, Reading Parts 1-2; note completion in Listening Part 1',
    because='A complaint is judged against a written code, and a matching-features set about complaints gives you complainants and clauses: candidates match on subject and the set is built so that three complaints are about the same subject and cite different clauses',
    skill='Matching a complaint to the rule it actually relies on rather than the topic it is about',
    evidence='Unit 27 cycle 1 taught aiming an objection at the test being applied; this is the reading half of the same skill, which the audit found taught nowhere',
    watch='Learners will match complaint C to the accuracy clause because C says the figure was wrong. C relies on the correction clause: the figure was corrected too late. Expect it',
    time='75 minutes, or 55 without the free grammar production'),
   lead=dict(
    title='Wrong, or unfair, or late?',
    body='Almost every complaint about a news report is one of three things and the three are judged quite differently. The report was inaccurate, which is a question of fact. It was unfair to somebody, which is a question of treatment. Or it was corrected too slowly or too quietly, which is a question of remedy. A complainant who picks the wrong one loses on a technicality, and the documents in this cycle are what that looks like.',
    task='Answer these from your own experience of news. Three or four sentences each.',
    qs=[
        'Have you ever seen a report about something you knew about at first hand? How accurate was it?',
        'Is a report that is true in every fact capable of being unfair? How?',
        'If a newspaper corrects a front-page story on page nine, has it corrected it?',
        'Who should judge a complaint about a newspaper?',
       ]),
   vocabwork=dict(
    title='The language of a code and a complaint',
    body='Sixteen words from the documents a regulator produces. The register is the institutional one you have now met in six units, and the new part is the vocabulary of adjudication: upheld, not upheld, resolved, warranted. Those four words decide every complaint and they do not mean what a non-specialist expects.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'a complaint about coverage', 'sub': 'cycle 1 · the seventh institution in this book to write to you', 'branches': [('the grounds', ['accuracy', 'impartiality', 'privacy', 'fairness']), ('the evidence', ['timecode', 'transcript', 'running order', 'as broadcast']), ('the outcome', ['upheld', 'not upheld', 'resolved', 'partly upheld']), ('the remedy', ['correction', 'apology', 'due prominence', 'right of reply'])], 'note': 'Resolved is the outcome that confuses everybody: it means the publisher offered something and the complainant accepted it, so nothing was decided. A resolved complaint is not a complaint that was found to be right.'},
    figure2={'kind': 'family', 'teaches': 'word-formation', 'sub': 'cycle 1 · and one of these has no noun', 'rows': [(('com-plain', 2), ('com-plaint', 2), ('com-plain-ant', 2), '', ''), (('ad-ju-di-cate', 2), ('ad-ju-di-ca-tion', 4), '', '', ''), (('cor-rect', 2), ('cor-rec-tion', 2), '', ('cor-rect', 2), ('cor-rect-ly', 2)), ('', ('im-par-ti-al-i-ty', 4), '', ('im-par-tial', 2), ''), (('up-hold', 2), '', '', ('up-held', 2), '')], 'note': 'Complainant, not complainer: the first is the person making a formal complaint and the second is a judgement about their character. A gap will want the first.'},
    task='Complete each sentence with a word from this cycle, in the right form.',
    items=[
     ('The person making a formal complaint is the ____________.', None,
      'complainant'),
     ('A complaint found to be justified has been ____________.', None,
      'upheld'),
     ('A complaint settled by agreement is ____________.', None,
      'resolved'),
     ('A correction given the same visibility as the error has due ____________.', None,
      'prominence'),
     ('The requirement to treat sides even-handedly is ____________.', None,
      'impartiality'),
     ('The exact moment in a broadcast is the ____________.', None,
      'timecode'),
     ('The order items were broadcast in is the running ____________.', None,
      'order'),
     ('The chance to answer a criticism is the right of ____________.', None,
      'reply'),
    ]),
   builder=dict(
    skill='Matching features: the complaint and the clause',
    qkind='skill',
    explain='A matching-features set about complaints gives you complainants on one side and clauses, outcomes or grounds on the other, and the examiner has arranged it so that matching by subject fails. Three complaints will be about the same programme and rely on three different rules. The habit that works is to read each complaint for the word that names a rule rather than the word that names a subject. Accuracy complaints say wrong, incorrect, misstated. Fairness complaints say not given an opportunity, misrepresented, taken out of context. Privacy complaints say without consent, in a private place. Remedy complaints say too late, not prominent enough, buried. And the hardest: a complaint can be about an error and still rely on the remedy rule, because the error was admitted and the correction came three weeks later on page nine. Read for the sentence that says what the publisher should have done differently, because that sentence names the rule.',
    worked=[
      'COMPLAINT C: “The figure was wrong by a factor of ten. The paper accepted this within a day and corrected it three weeks later, at the foot of page nine, under a headline that did not mention the original story.”',
      'The subject is accuracy, and every word of the first sentence says so.',
      'But the publisher admitted the error at once. There is nothing left to decide about accuracy.',
      'What the complaint says should have been done differently is all in the second sentence: sooner, and with due prominence. The rule relied on is the correction rule, not the accuracy one.',
     ],
    figure={'kind': 'matrix', 'teaches': 'comparison', 'title': 'Four complaints, one programme', 'sub': 'cycle 1 · fill the blanks before the matching set', 'cols': ['A', 'B', 'C', 'D'], 'rows': ['What is the subject?', 'What should have been done differently?', 'Which rule does that name?', 'Is anything still disputed?'], 'cells': [['the figure', 'the interview', 'the figure', 'the photograph'], ['', 'given a chance to reply', 'corrected sooner', ''], ['', 'fairness', 'correction', ''], ['yes', '', 'no', '']], 'note': 'Six blanks. Notice that A and C have the same subject and different rules, which is the whole design of the set.'},
    task='For each complaint write the RULE it relies on.',
    items=[
     ('“The figure was wrong and remains uncorrected.”', None,
      'accuracy'),
     ('“I was not given an opportunity to respond.”', None,
      'fairness'),
     ('“It was admitted at once and corrected three weeks later.”', None,
      'correction'),
     ('“The photograph was taken inside my garden.”', None,
      'privacy'),
     ('“Both sides were given thirty seconds and one of them was the government.”', None,
      'impartiality'),
     ('“My words were used to say the opposite of what I meant.”', None,
      'fairness'),
    ],
    note='Items one and three are both about a wrong figure and rely on different rules, because in the third the error was admitted. What is still disputed decides the rule, and it is never in the first sentence.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 1 · six moves the questions make', 'pairs': [('the complaint was successful', 'the complaint was upheld', 'synonym'), ('they printed a correction', 'a correction was published', 'voice'), ('as visible as the original', 'with due prominence', 'reformulation'), ('they did not ask me', 'no opportunity to respond was offered', 'negation'), ('accuracy, fairness and privacy', 'the editorial code', 'hypernym'), ('the moment in the programme', 'the timecode', 'nominalisation')], 'note': 'The third is the one the remedy questions turn on, and due prominence is a term of art that sounds like ordinary English.'},
   ],
   advice='In matching features about complaints, read each complaint for the sentence saying what should have been done differently. That sentence names the rule, and the subject of the complaint - which is in the first line and is what the eye goes to - names nothing. Three complaints about one subject relying on three rules is the standard design.',
   debrief=dict(
    read=[
      'Complaint C is about a wrong figure and relies on the correction rule, because the error was admitted on day one. The disputed part is the remedy.',
      'Two complaints mention the interview and only one says anything about what should have happened instead.',
      'The Yes/No/Not Given statement about the regulator is one the passage reports from the publisher. The handover is three words.',
     ],
    listen=[
      'The officer gives a timecode and then a different one for the repeat broadcast. The notes say which.',
      'Question 12 asks for the outcome and three outcomes are named, two of them about other complaints.',
     ]),
   outside='Knowing which rule your complaint relies on is the difference between being answered and being filed, in any organisation at all. The subject of a grievance is almost never the thing it turns on.',
   recycled=[
      'evidence',
      'grounds',
      'representation',
      'code',
      'upheld',
      'criteria',
     ],
   read=[
    dict(preview=True,
         heading='Three words from an editorial code',
         kind='Glossary box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='Two hundred words before four hundred. These three decide every complaint in this cycle and none of them means what it appears to.',
         paras=[
          'Impartiality does not mean giving both sides equal time. It means giving each view the weight the evidence supports, which on most questions is not equal and on a few is overwhelming. A programme that gives thirty seconds each to a specialist and to somebody who disagrees with all of them has been even-handed and not impartial.',
          'Due prominence means a correction must be as visible as the error was. A front-page error corrected at the foot of page nine has been corrected and has not been corrected with due prominence, and the second half of that sentence is what the complaint will be about.',
          'Upheld means the regulator decided the complaint was justified. Not upheld means it decided the complaint was not. Resolved means neither: the publisher offered something, the complainant accepted it, and nothing was decided at all. Publishers report resolved complaints in the same sentence as not upheld ones, which is accurate and misleading at once.',
          'All three words sound like ordinary English and none of them is, which is why a complaint written in ordinary English usually loses.',
         ],
         items=[
          ('Impartiality means giving each view the weight the ____________ supports.',
           None, 'evidence',
           'Paragraph 1, with the specialist and the thirty seconds.'),
          ('A correction as visible as the error has due ____________.',
           None, 'prominence',
           'Paragraph 2: the front page against the foot of page nine.'),
          ('A complaint settled by agreement without a decision is ____________.',
           None, 'resolved',
           'Paragraph 3, which publishers report alongside not upheld ones.'),
         ]),
    dict(heading='How to complain about a programme',
         kind='Regulator notice',
         task='Multiple choice, matching features and sentence completion',
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
           ['ten working days', 'twenty working days', 'three months', 'a year'],
           1, 'Paragraph 2, counted from the broadcaster\u2019s reply.',
           {0: 'Shorter than the window paragraph 2 allows.', 2: 'Longer than the twenty working days given.', 3: 'Far longer than the deadline in paragraph 2.'}),
          ('Which of these will the regulator NOT consider?',
           ['Accuracy', 'Privacy', 'Whether a presenter is likeable', 'Fairness to a person featured'],
           2,
           'Paragraph 3 lists this among matters for the broadcaster.',
           {0: 'Accuracy is one of the rules the regulator applies.', 1: 'Privacy is among the rules most often engaged.', 3: 'Fairness to a person featured is a rule it considers.'}),
          ('Most upheld complaints concern',
           ['impartiality', 'accuracy', 'privacy', 'fairness'], 1,
           'Paragraph 5, because accuracy can be established.',
           {0: 'Impartiality has to be judged across a period of '
               'coverage.', 2: 'Privacy is among the rules but not the commonest '
               'finding.', 3: 'Fairness is a rule, but accuracy supplies most upheld '
               'cases.'}),
          ('Broadcasters must reply within ____________ working days.',
           None, 'twenty',
           'Paragraph 1, where about half of complaints are resolved.'),
          ('About one complaint in ____________ is upheld.', None,
           'forty', 'Paragraph 5, with findings published every '
           'fortnight.')]),
    dict(heading='What the code requires',
         kind='Summary of rules', task='Multiple choice and matching features',
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
           'A corrected error is not normally treated as a breach.',
           {1: 'Impartiality is assessed across a period rather than '
               'one programme.', 2: 'Fairness gives a right to respond to criticism.', 3: 'Privacy turns on whether an infringement is warranted.'}),
          (
           'Which rule is assessed across a period rather than one '
           'programme?',
           ['Accuracy', 'Impartiality', 'Fairness', 'Privacy'], 1,
           'Which the notice says complainants find hardest to accept.',
           {0: 'Accuracy turns on a single report and its correction.', 2: 'Fairness gives a right to respond to criticism.', 3: 'Privacy is judged on the particular infringement.'}),
          ('Which rule gives a right to respond to criticism?',
           ['Accuracy', 'Impartiality', 'Fairness', 'Privacy'], 2,
           'An appropriate and timely opportunity to respond.',
           {0: 'Accuracy decides whether the criticism is true.', 1: 'Impartiality is assessed across a period rather than '
               'one programme.', 3: 'Privacy concerns intrusion, not the right of reply.'}),
          (
           'Under which rule is the public interest weighed against '
           'the intrusion?',
           ['Accuracy', 'Impartiality', 'Fairness', 'Privacy'], 3,
           'Any infringement must be warranted.',
           {0: 'Accuracy concerns reporting, not intrusion.', 1: 'Impartiality is assessed across a period rather than '
               'one programme.', 2: 'Fairness gives a right to respond to criticism.'})])],
   listen=[
    dict(heading='Making a complaint', part='Part 1',
         task='A call to a broadcasting regulator · note completion', band='l1',
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
         task='A talk at a journalism school · sentence completion and matching', band='l2',
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
          (
           'The speaker says people decide what to believe by '
           'assessing whether a source ____________ being wrong.',
           None, 'admits',
           'Along with whether it treats them as a fool.'),
          (
           'Outlets publishing prominent corrections score '
           '____________ points higher.', None, 'twenty',
           'Even among readers who disagree with their politics.'),
          (
           'When a presenter over-explains, viewers ____________ the '
           'rest of the programme.', None, 'discount',
           'And it does not recover within the broadcast.'),
          ('Which finding does the speaker dislike?',
           ['Corrections help', 'Trust in individuals exceeds trust in institutions', 'Tone matters', 'Trust is falling'],
           1, 'And no institutional reputation closes the gap.',
           {0: 'The correction finding is the one he calls '
               'extraordinary.', 2: 'Tone is a finding he accepts without complaint.', 3: 'He reports trust moving between kinds of source, not '
               'falling.'})])],
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
    ref='L21',
    context=[
      'From the complaint in this cycle:',
      'I am writing under clause 1.4 of the code, which requires a significant inaccuracy to be corrected promptly and with due prominence. The figure was corrected on 3 June, twenty-two days after the paper accepted in writing that it was wrong, and the correction appeared at the foot of page nine. The original report was the front-page lead.',
     ],
    notice=[
     ('The complainant names a clause and quotes what it requires. Copy out the requirement.', None,
      'a significant inaccuracy to be corrected promptly and with due prominence'),
     ('Two facts are given to show the requirement was not met. What are they?', None,
      'twenty-two days, and the foot of page nine against a front-page lead'),
    ],
    noticetask='Answer both from the complaint above, which you read earlier in this cycle.',
    contrast='You met the shape of an objection in unit 26 and unit 27, and this is its strictest form. A complaint under a code does three things in order: it names the clause, it quotes what the clause requires, and it gives the facts showing the requirement was not met. Doing all three makes the complaint answerable only by disputing the facts, which is the position you want. Doing only the first is what most complaints do, and the reply then explains the clause back to you.',
    task2='Rewrite each complaint so that it names the requirement and gives the fact.',
    items2=[
     ('The correction was too late.', None,
      'Clause 1.4 requires prompt correction; the correction appeared twenty-two days after the error was accepted.'),
     ('They did not give me a chance to reply.', None,
      'Clause 2.1 requires an opportunity to respond; none was offered before publication.'),
     ('Correct: I am writing under the clause 1.4 of code.', None,
      'I am writing under clause 1.4 of the code.'),
     ('It was buried.', None,
      'The correction appeared at the foot of page nine; the original was the front-page lead.'),
    ],
    task3='Now write the complaint. Something you were told or read was wrong, unfair or badly corrected. Name the requirement, give two facts, and say what you are asking for. About eighty words.',
    items3=8,
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
   notes=dict(
    serves='Yes/No/Not Given and matching features, Reading Part 2; multiple choice in Listening Part 2',
    because='A passage about contested claims is full of reporting verbs, and the verb carries the writer’s view: claims, alleges and purports are rejections and shows, demonstrates and points out are endorsements, and a reader who ignores them cannot answer a single Yes/No/Not Given statement correctly',
    skill='Reading the reporting verb as the writer’s position',
    evidence='Unit 23 cycle 2 taught finding the handover phrase; this is the finer version, where the handover is one verb and the verb also tells you what the writer thinks of what was handed over',
    watch='Learners will treat "the paper claims" and "the paper shows" as the same construction. They are opposite judgements. Expect it',
    time='80 minutes, or 60 without the free grammar production'),
   lead=dict(
    title='Two people, thirty seconds each',
    body='Balance sounds like fairness and is sometimes the opposite of it: giving equal time to a view held by almost everybody who studies the question and a view held by almost nobody tells the audience something false about the state of the evidence, without a single untrue sentence being spoken. The argument in this cycle is about whether that is dishonesty, a format problem or an unavoidable cost, and the four sources differ mostly in one verb each.',
    task='Answer these before you read, and mark which source you expect to agree with.',
    qs=[
        'Should a broadcaster give equal time to both sides of every question?',
        'How would an audience know that one side has far more support than the other?',
        'Is it the broadcaster’s job to tell them, or the audience’s job to find out?',
        'What would you change about a format that gives thirty seconds each?',
       ]),
   vocabwork=dict(
    title='The vocabulary of a contested claim',
    body='Fourteen words. The first eight are reporting verbs and they are the most load-bearing vocabulary in this book, because each one commits the writer to a position without appearing to. The rest are the nouns of a dispute about coverage.',
    figure={'kind': 'cline', 'teaches': 'scale', 'title': 'What does the reporting verb commit you to?', 'sub': 'cycle 2 · from rejecting to endorsing', 'left': 'the writer rejects it', 'right': 'the writer endorses it', 'items': [('purports to show', 0.04), ('alleges', 0.14), ('claims', 0.28), ('maintains', 0.42), ('says', 0.54), ('notes', 0.64), ('points out', 0.82), ('demonstrates', 0.95)], 'note': 'Says and notes are the only two neutral verbs on this line. Everything to the left of them doubts and everything to the right agrees, and a writer who uses "claims" about a view they hold has told the reader otherwise.'},
    figure2={'kind': 'collocation', 'teaches': 'collocation', 'node': 'balance', 'sub': 'cycle 2', 'groups': [('adjective + balance', ['false balance', 'due balance', 'editorial balance', 'rough balance']), ('verb + balance', ['strike a balance', 'achieve balance', 'balance is required', 'balance was lacking']), ('balance + preposition', ['balance between views', 'balance in coverage', 'balance of evidence'])], 'note': 'The balance of evidence is a quite different thing from balance between views, and the whole argument of this cycle is that the second can destroy the first. Both phrases appear in the passage, four lines apart.'},
    task='Complete each sentence with a verb or phrase from this cycle.',
    items=[
     ('The neutral reporting verb nearest the middle: ____________.', None,
      'says'),
     ('The verb that distances the writer from the claim: ____________.', None,
      'claims'),
     ('The verb that concedes the point is true: ____________.', None,
      'points out'),
     ('Equal time for unequal evidence is ____________ balance.', None,
      'false'),
     ('The weight of all the studies together is the balance of ____________.', None,
      'evidence'),
     ('The verb used of a legal accusation not yet proved: ____________.', None,
      'alleges'),
     ('The strongest endorsement on the line: ____________.', None,
      'demonstrates'),
     ('To find a workable middle is to ____________ a balance.', None,
      'strike'),
    ]),
   builder=dict(
    skill='Yes/No/Not Given: the reporting verb is the answer',
    qkind='skill',
    explain='In a passage about a contested question, most sentences belong to somebody else, and the verb that hands them over also tells you what the writer thinks of them. That is two pieces of information in one word and candidates use neither. Three groups and they are not interchangeable. Rejecting verbs: claims, alleges, purports to show, would have us believe. A writer using one of these has told you the claim is doubted, so a statement repeating it is NO rather than YES. Neutral verbs: says, states, reports, notes. These hand over without judging, so a statement repeating the claim is about the source and not the writer - NOT GIVEN as a statement about the writer. Endorsing verbs: shows, demonstrates, points out, establishes. A writer using one of these has signed the claim, so a statement repeating it is YES even though the sentence belongs to somebody else. That third group is where the marks are, because the sentence is in another voice and the answer is the writer’s.',
    worked=[
      '“The editor claims that the format is neutral.” The verb rejects. A statement saying the writer thinks the format is neutral is NO.',
      '“The editor says the format is neutral.” The verb is neutral. The same statement is NOT GIVEN.',
      '“As the editor points out, the format allows thirty seconds.” The verb endorses. A statement saying the writer accepts that the format allows thirty seconds is YES.',
      'Three sentences, the same content, three different answers, and the only difference is one verb.',
     ],
    figure={'kind': 'decide', 'teaches': 'decision', 'title': 'Which group is the reporting verb in?', 'sub': 'cycle 2 · and the answer follows from it', 'nodes': [('Is the verb claims, alleges, purports or maintains?', 'the writer DOUBTS it - a statement repeating it is NO', 'go on'), ('Is the verb says, states, reports or notes?', 'the writer is NEUTRAL - about the writer, NOT GIVEN', 'go on'), ('Is the verb shows, demonstrates, points out or establishes?', 'the writer ENDORSES it - a statement repeating it is YES', 'there is no reporting verb: it is the writer’s own sentence')], 'note': 'This is the fifth check you have been given for this question type - voice, scope, describe-or-recommend, concession, and now the reporting verb - and between them they catch almost every statement that would otherwise pass the three tests.'},
    task='For each sentence write DOUBTS, NEUTRAL or ENDORSES.',
    items=[
     ('“The paper claims the figure is correct.”', None,
      'doubts'),
     ('“The paper shows the figure is correct.”', None,
      'endorses'),
     ('“The paper says the figure is correct.”', None,
      'neutral'),
     ('“As the regulator points out, the delay was unusual.”', None,
      'endorses'),
     ('“The broadcaster alleges that no complaint was received.”', None,
      'doubts'),
     ('“The study notes a fall in trust.”', None,
      'neutral'),
    ],
    note='Items one, two and three are the same claim with three verbs and three different answers. If you take nothing else from this cycle, take the habit of looking at the verb before you look at the content.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 2 · the Yes/No/Not Given set turns on these', 'pairs': [('equal time for unequal evidence', 'false balance', 'nominalisation'), ('the writer does not accept it', 'the claim is reported rather than endorsed', 'negation'), ('what most studies find', 'the balance of evidence', 'reformulation'), ('scientists, editors and viewers', 'the parties', 'hypernym'), ('the programme gave both sides time', 'time was allotted to each view', 'voice'), ('says it is true', 'claims that it is so', 'synonym')], 'note': 'The second is the whole cycle in one pair, and it is the pair the examiner builds three statements from.'},
   ],
   advice='In a passage full of other people’s views, look at the reporting verb before you look at the content. Claims and alleges mean the writer doubts it; shows and points out mean the writer agrees; says and notes mean the writer has not told you. Three of the eight statements in a typical set are decided by that one word and by nothing else.',
   debrief=dict(
    read=[
      'Statement 22 repeats a sentence introduced by "claims". The verb is the answer and the content is a distraction.',
      'Statement 25 repeats a sentence introduced by "as the regulator points out", which the writer has signed. It is YES even though the sentence belongs to the regulator.',
      'In the matching set two sources use "false balance" and only one of them means the technical sense.',
     ],
    listen=[
      'The editor concedes a presentation failure and denies an editorial one. The question asks which he accepts.',
      'He says "that is a different complaint and one I would support you on", which is an endorsement of a view he has just distinguished from the one being put to him.',
     ]),
   outside='Reporting verbs are how writers tell you what they think while appearing not to, and once you can see them you cannot stop seeing them. It is the single most useful thing in this book for reading a newspaper.',
   recycled=[
      'evidence',
      'impartiality',
      'balance',
      'reported',
      'claims',
      'code',
     ],
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
          (
           'Which person uses discomfort as a test of trustworthiness?',
           ['Severine', 'Dermot', 'Winnifred', 'Abimbola'], 0,
           'An outlet that has never cost her a comfortable belief is '
           'not reporting.',
           {1: 'Dermot follows individuals rather than publications.', 2: 'Winnifred judges by how corrections are published.', 3: 'Abimbola has decided to suspend judgement.'}),
          (
           'Which person follows individuals rather than publications?',
           ['Severine', 'Dermot', 'Winnifred', 'Abimbola'], 1,
           'He cancelled a nine-year subscription when a journalist '
           'moved.',
           {0: 'Severine uses discomfort as a test of trustworthiness.', 2: 'Winnifred judges by how corrections are published.', 3: 'Abimbola has decided to suspend judgement.'}),
          ('Which person judges by how corrections are published?',
           ['Severine', 'Dermot', 'Winnifred', 'Abimbola'], 2,
           'At the foot of the original article.',
           {0: 'Severine uses discomfort as a test of trustworthiness.', 1: 'Dermot follows individuals rather than publications.', 3: 'Abimbola has decided to suspend judgement.'}),
          ('Which person has decided to suspend judgement?',
           ['Severine', 'Dermot', 'Winnifred', 'Abimbola'], 3,
           'Holding things loosely and waiting a week.',
           {0: 'Severine uses discomfort as a test of trustworthiness.', 1: 'Dermot follows individuals rather than publications.', 2: 'Winnifred judges by how corrections are published.'}),
          ('Winnifred believes a trustworthy outlet makes no errors.',
           ['Yes', 'No', 'Not Given'], 1,
           'She says explicitly that nobody is free of errors.',
           {0: 'Yes would need error-free; she says nobody is.', 2: 'Not Given is wrong because she defines what she '
               'trusts.'}),
          ('Abimbola thinks other people are wrong to trust the news.',
           ['Yes', 'No', 'Not Given'], 2,
           'He describes his own position as rational; he says nothing '
           'about others.',
           {0: 'Yes would need a judgement of others; he describes '
               'only his own position.', 1: 'No would need him to endorse their trust, which he '
               'never does.'})])],
   listen=[
    dict(preview=True,
         heading='An editor and a researcher on balance',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='The Part 2 you are about to hear turns on one phrase. Ninety seconds on what it means to the two people using it.',
         script=[
          ('Researcher',
           'You put a climate scientist against a columnist and called it balance.'),
          ('Editor',
           'I put a scientist on because the subject was science and a columnist on because the row was political. That is not false balance, it is two different questions.'),
          ('Researcher',
           'The viewer does not see two questions. They see two people, one each side, thirty seconds each.'),
          ('Editor',
           'That I accept, and it is a presentation failure rather than an editorial one. Say what each is there for and the problem goes.'),
          ('Researcher',
           'Does it? There is still a format that cannot carry "ninety-seven per cent of the literature says one thing".'),
          ('Editor',
           'There is not a format that cannot carry it. There is a format that will not spare four minutes for it, which is a different complaint and one I would support you on.'),
          ('Researcher',
           'Then we agree about more than I expected.'),
          ('Editor',
           'We agree about the diagnosis. You think it is dishonesty and I think it is the clock, and that is not a small difference when you are deciding what to fix.'),
         ],
         items=[
          ('The editor says the scientist was there because the subject was ____________.',
           None, 'science',
           'His first answer, which also explains the columnist.'),
          ('He calls the problem a ____________ failure rather than an editorial one.',
           None, 'presentation',
           'His second turn, where he accepts the researcher’s point.'),
          ('He says the real constraint is the ____________.',
           None, 'clock',
           'His last turn, which names the disagreement precisely.'),
         ]),
    dict(heading='Two editors disagree about balance', part='Part 3',
         task='A conversation in a newsroom · sentence completion and multiple choice', band='l3',
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
          (
           'Fiadh objects to equal time because it states that two '
           'positions are equally ____________.', None,
           'supported',
           'A statement the newsroom would be making with its running '
           'order.'),
          ('Osvaldo\u2019s strongest argument is',
           ['the guidance requires it', 'the newsroom cannot be trusted to decide what is settled', 'viewers prefer it', 'it is cheaper'],
           1, 'A finding treated as settled was withdrawn in June.',
           {0: 'The guidance is what she reinterprets against him.', 2: 'Viewer preference is not his argument.', 3: 'Cost is not raised by either editor.'}),
          (
           'Fiadh proposes three minutes plus one describing the '
           '____________ of evidence.', None, 'weight',
           'Twelve studies against two that are smaller and funded '
           'differently.'),
          ('What does she say this gives the viewer?',
           ['A shorter item', 'The weight of the evidence rather than the number of speakers', 'More voices', 'A clearer presenter'],
           1, 'Which neither of their formats does.',
           {0: 'Her proposal is more work, not shorter.', 2: 'More voices is the two-and-two format.', 3: 'Presentation is not what her proposal changes.'}),
          ('What condition does Osvaldo attach?',
           ['A longer item', 'That somebody is given time to read the studies', 'A second presenter', 'A written apology'],
           1,
           'And not the producer at nine on the morning of broadcast.',
           {0: 'The item length is already settled at four minutes.', 2: 'No second presenter is proposed.', 3: 'No apology is involved in the exchange.'})])],
   speak=dict(
    part='Part 1 into Part 2', focus='Trust',
    longturn=[('The source I want to describe is the statistics office of my '
               'own country, whose website publishes the figures that most '
               'newspaper stories are eventually based on.'),
              ('I came across it almost by accident, chasing a figure in an '
               'article that did not look right, and I found that the original '
               'release said something noticeably more cautious than the '
               'headline that had been built on it.'),
              ('I use it for two things now. The first is checking a number '
               'before repeating it, which takes about four minutes and has '
               'stopped me being wrong in public several times. The second is '
               'reading the notes, which are the part nobody quotes and often '
               'the part that matters, because that is where they tell you '
               'what the figure does not cover.'),
              ('Why I trust it is not that I think it is never wrong. I trust '
               'it because it tells me how it could be wrong. Every release '
               'says what was measured, how many people were asked, what the '
               'margin of error is, and which previous figures have been '
               'revised. When it corrects itself, which it does, the '
               'correction is published in the same place as the original. '
               'That is a much better reason for trust than confidence, and I '
               'have come to be suspicious of any source that never has to '
               'revise anything.')],
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
    ref='L29',
    context=[
      'From the passage you have just read:',
      'The broadcaster claims that the format is neutral between views. The regulator, as it points out in its own guidance, has never held that equal time is what impartiality requires; and the research shows that audiences read equal time as equal support. Three sentences, three verbs, and the writer has taken a side in each without saying so.',
     ],
    notice=[
     ('Three reporting verbs appear. Copy them in order and say what each commits the writer to.', None,
      'claims - doubts; points out - endorses; shows - endorses'),
     ('Which of the three sentences is the writer least willing to stand behind?', None,
      'the first, the broadcaster’s'),
    ],
    noticetask='Answer both from the paragraph above, which you met earlier in this cycle.',
    contrast='Choosing a reporting verb is choosing a position, and learners choose by variety - looking for a different word each time - which is how an essay ends up doubting its own sources and endorsing its opponents. The three groups are worth memorising as groups. Doubting: claims, alleges, purports to show, would have us believe. Neutral: says, states, reports, notes, observes. Endorsing: shows, demonstrates, points out, establishes. Use neutral verbs for views you will discuss, endorsing ones for the evidence you rely on, and doubting ones only where you intend the doubt - because an examiner reads them exactly.',
    task2='Replace each verb so that it matches the stance named.',
    items2=[
     ('The study claims that trust has fallen. (you accept it)', None,
      'The study shows that trust has fallen.'),
     ('The paper shows that the format is neutral. (you reject it)', None,
      'The paper claims that the format is neutral.'),
     ('Correct: the editor said about the format.', None,
      'the editor spoke about the format'),
     ('Critics say the research is weak, and I agree. (concede in the verb)', None,
      'As critics point out, the research is weak.'),
    ],
    task3='Now write it. Take the argument in this cycle, report the broadcaster’s view, the regulator’s guidance and the research, and choose a verb for each that places you exactly where you mean to be. Eighty to a hundred words.',
    items3=10,
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
   notes=dict(
    serves='Matching information and sentence completion, Reading Parts 2-3; Task 1 Academic, a chart with many categories',
    because='A chart with eight or more categories cannot be described category by category in 170 words, and the band 6 answer tries, running out of room at the sixth and leaving the overview unwritten',
    skill='Grouping categories that behave alike, and describing the groups',
    evidence='Phase 4: in every chart in the series with more than six categories the band 9 model names two or three groups and the band 6.5 model names every category',
    watch='Learners will list all eight. Ask which three behave the same way and whether that could be one sentence',
    time='85 minutes, or 65 without the free grammar production'),
   lead=dict(
    title='Four ways of counting an audience',
    body='Reach, dwell time, read-through and amplification are four measurements of the same article and no two of them agree. The one quoted is always reach, because it is the biggest; the one that decides whether anybody understood anything is read-through, which is usually about fifteen per cent. You have asked the "of what?" question about a median, a share, an average, a self-sufficiency figure and a yield. This is the last time, and the subject is attention.',
    task='Answer these before you look at the chart.',
    qs=[
        'When did you last read a long article to the end? What made you?',
        'If one reader in five finishes, where should a writer put the qualification?',
        'Which measurement would you use if you were paying for advertising?',
        'Which would you use if you wanted people to understand something?',
       ]),
   vocabwork=dict(
    title='The vocabulary of attention',
    body='Twelve words. Four are the measurements, four are what happens to a story, and four are the shape of a chart - inverted, ratio, overcount, cluster - which is the group this cycle needs for Task 1.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'measuring attention', 'sub': 'cycle 3 · the last "of what?" in this volume', 'branches': [('the measures', ['reach', 'dwell time', 'read-through', 'amplification']), ('what happens', ['headline', 'inverted pyramid', 'scroll depth', 'bounce']), ('the shapes', ['cluster', 'ratio', 'inverted', 'overcount']), ('the problem', ['attention', 'salience', 'engagement', 'proxy'])], 'note': 'The inverted pyramid is the journalistic convention of putting the most important thing first and the qualifications last. It was designed for readers who stop early, and it guarantees that the readers who stop early miss the qualifications.'},
    figure2={'kind': 'family', 'teaches': 'word-formation', 'sub': 'cycle 3 · and two of these have no verb', 'rows': [(('am-pli-fy', 1), ('am-pli-fi-ca-tion', 4), '', '', ''), (('en-gage', 2), ('en-gage-ment', 2), '', ('en-gag-ing', 2), ''), ('', ('sa-li-ence', 1), '', ('sa-li-ent', 1), ''), (('meas-ure', 1), ('meas-ure-ment', 1), '', ('meas-ur-a-ble', 1), ''), (('cor-re-late', 1), ('cor-re-la-tion', 3), '', '', '')], 'note': 'Salient means standing out, and a salient fact is a noticeable one rather than an important one. The two come apart constantly and this unit is largely about what happens when they do.'},
    task='Complete each sentence with a word from this cycle, in the right form.',
    items=[
     ('How many people saw it at all is the ____________.', None,
      'reach'),
     ('The share who reached the end is the ____________.', None,
      'read-through'),
     ('Passing something on is ____________.', None,
      'amplification'),
     ('The adjective meaning standing out is ____________.', None,
      'salient'),
     ('A measure standing in for something you cannot measure is a ____________.', None,
      'proxy'),
     ('A group of categories behaving alike is a ____________.', None,
      'cluster'),
     ('Counting the same thing twice produces an ____________.', None,
      'overcount'),
     ('The noun from correlate is ____________.', None,
      'correlation'),
    ]),
   builder=dict(
    skill='Task 1: group the categories that behave alike',
    qkind='skill',
    explain='A chart with eight categories contains eight stories and 170 words will not carry them. The band 6 answer starts at the left and describes each, arriving at the sixth with thirty words left; the band 7 answer names two or three groups and describes the groups. Finding the groups takes about forty seconds and it is the whole of the skill. Look down the chart for categories that move together - that rose, or fell, or stayed flat, or sit at the same level - and give each group a name that says what it has in common rather than listing its members: the three news categories behaved alike, the two long-form categories moved the other way. Then name any category that fits no group, because the outlier is almost always the most interesting sentence available. Two groups and an outlier is a complete answer to almost any multi-category chart, and it is about seventy words shorter than the list.',
    worked=[
      'The chart: eight content categories by reach and by read-through.',
      'Looking for movement: news, sport and weather all have high reach and low read-through. Long reads, investigations and explainers all have the reverse. That is two groups of three.',
      'Naming them by what they share: “The three daily categories combine the highest reach with the lowest read-through, while the three long-form categories show the opposite pattern.”',
      'The outlier: “Recipes sit outside both groups, with high reach and the highest read-through on the chart.”',
      'Three sentences, eight categories, and every one accounted for.',
     ],
    figure={'kind': 'ladder', 'teaches': 'band-move', 'criterion': 'Task Achievement, on a many-category chart', 'sub': 'cycle 3 · the same chart, three bands', 'rungs': [('5.5', 'News has reach 88 and read-through 9. Sport has 81 and 11. Weather has 77 and 8. Long reads have 22 and 41...', ''), ('6.5', 'The news categories have high reach and low read-through, while long-form categories have lower reach and higher read-through.', 'two groups instead of eight categories'), ('7.5', 'The three daily categories combine the highest reach on the chart with the lowest read-through, a pattern exactly reversed in the long-form categories; recipes alone sit outside both.', 'the groups are named by what they share, the reversal is one word, and the outlier is given its sentence')], 'note': 'The third rung mentions one category by name out of eight, and tells you more about the chart than the first rung does with all eight.'},
    task='For each set of categories, write the one sentence that groups them.',
    items=[
     ('News, sport, weather: high reach, low read-through.', None,
      'the daily categories share high reach and low read-through'),
     ('Long reads, investigations, explainers: the reverse.', None,
      'the long-form categories show the opposite pattern'),
     ('Recipes: high on both.', None,
      'recipes alone sit outside both groups'),
     ('Four categories all flat across the period.', None,
      'four categories were essentially unchanged'),
     ('Two rose, four fell, two flat.', None,
      'most categories fell, two rose and two held steady'),
     ('All eight fell, one by much more.', None,
      'all eight declined, one far more sharply than the rest'),
    ],
    note='Not one of the six answers names more than one category, and three of them name none. Naming a category costs you words and buys you nothing unless the category is doing something the group is not.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 3 · what the questions do to the article', 'pairs': [('how many saw it', 'reach', 'nominalisation'), ('they passed it on', 'the story was amplified', 'voice'), ('most people stopped early', 'read-through was low', 'reformulation'), ('it did not hold their attention', 'dwell time was short', 'negation'), ('news, sport and weather', 'the daily categories', 'hypernym'), ('standing out rather than mattering', 'salience rather than importance', 'synonym')], 'note': 'The last is the distinction the whole unit turns on, and it arrives here as a vocabulary pair before it arrives in cycle 4 as an argument.'},
   ],
   advice='On a chart with more than six categories, spend forty seconds finding the groups before you write anything. Two groups and an outlier is a complete answer and leaves you room for an overview; a list of eight is not an answer and always runs out of words before it runs out of categories.',
   debrief=dict(
    read=[
      'The sentence-completion gap in question 37 wants the name of a group and the article gives it once, in a subordinate clause.',
      'Two paragraphs give read-through figures and only one explains them. Matching information wants the explanation.',
      'Question 39 uses "passed it on" and the article says "amplified". The bridge has the pair.',
     ],
    listen=[
      'The speaker gives reach for one category and read-through for another. The notes name the measure.',
      'In the note-completion task she groups three categories aloud and the gap wants the group name, not the members.',
     ]),
   outside='Grouping before describing is how anybody gets through a large table, a long list of applicants or a year of results. The alternative is a report that is complete, accurate and unreadable.',
   recycled=[
      'reach',
      'proxy',
      'evidence',
      'correlation',
      'salience',
      'read-through',
     ],
   read=[
    dict(preview=True,
         heading='Reach, and what it is not',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The chart in this cycle plots four quantities that all sound like audience. Two hundred words on why they differ.',
         paras=[
          'Reach is how many people saw the thing at all, even for a second. It is the largest number available and it is the one quoted in every press release, because scrolling past something counts.',
          'Dwell time is how long they stayed. Two articles with identical reach can have dwell times of four seconds and four minutes, which means one was read and the other was scrolled past, and no amount of reach distinguishes them.',
          'Read-through is the share who reached the end. It is the cruellest measure in journalism: on a typical long article it runs between ten and twenty per cent, which means four readers in five never saw the paragraph where the qualification was.',
          'Amplification is how many passed it on. It correlates with reach and barely at all with read-through, which is the single most consequential fact about how information moves: the decision to share is usually made before the decision to finish. Four measurements, then, of one article, and the one quoted in public is always the largest. Asking which of the four a number refers to is the same habit this book has asked of a median, a share and a yield, and it is the last time it will ask.',
         ],
         items=[
          ('How many people saw the thing at all is the ____________.',
           None, 'reach',
           'Paragraph 1: scrolling past something counts.'),
          ('How long they stayed is the ____________ time.',
           None, 'dwell',
           'Paragraph 2, where four seconds and four minutes share a reach.'),
          ('The share who reached the end is the ____________.',
           None, 'read-through',
           'Paragraph 3: between ten and twenty per cent on a long article.'),
         ]),
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
          (
           'Which paragraph explains what the two heavily shared '
           'categories have in common?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4', 'Paragraph 5'],
           1, 'The headline contains the whole of the claim.',
           {0: 'Paragraph 2 gives the four sets of figures.', 2: 'Paragraph 4 expresses the contrast as ratios.', 3: 'Paragraph 5 gives the two cautions.'}),
          ('Which paragraph gives the two cautions?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           2,
           'Inference from scrolling, and variation between outlets.',
           {0: 'Paragraph 3 explains what the two heavily shared '
               'categories have in common.', 1: 'Paragraph 4 expresses the contrast as ratios.', 3: 'Paragraph 6 states the consequence for news producers.'}),
          (
           'Which paragraph states the consequence for news producers?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 2'],
           2, 'Paid for the first pair and judged by the second.',
           {0: 'Paragraph 4 expresses the contrast as ratios.', 1: 'Paragraph 5 gives the two cautions.', 3: 'Paragraph 2 gives the four sets of figures.'}),
          ('Scandal: shared by ____________ per thousand', None, '91',
           'Paragraph 2, against 14 who read it to the end.'),
          ('Local news: read to the end by ____________ per thousand',
           None, '52', 'Paragraph 2, against 9 who shared it.'),
          ('A political claim is shared about ____________ times for every '
           'person who finishes it.', None, 'eight',
           'Paragraph 4, where local news reverses the ratio.')])],
   listen=[
    dict(heading='A researcher on sharing behaviour', part='Part 4',
         task='A talk on attention and sharing · note completion and multiple choice', band='l4',
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
          (
           'The researcher advises grouping them into two '
           '____________.', None, 'pairs',
           'Because two behave alike and two are their mirror image.'),
          (
           'Research findings are read to the end by ____________ per '
           'thousand.', None, '46',
           'Against twelve per thousand who share them.'),
          ('The explanation lies in the ____________.', None,
           'headline',
           'Because for some stories the headline is the whole '
           'content.'),
          (
           '"Read to the end" is inferred from scroll depth and '
           '____________ time.', None, 'dwell',
           'So it overcounts an open tab and undercounts a fast '
           'reader.'),
          ('An outlet is paid for what ____________.', None, 'travels',
           'And judged on the category almost nobody shares.'),
          ('Why does he reject the usual recommendation?',
           ['It is expensive', 'A shareable headline would have to contain the whole claim', 'Readers dislike it', 'It has been tried'],
           1,
           'And a finding that fits in seven words is usually not '
           'worth publishing.',
           {0: 'Cost is not his objection to better headlines.', 2: 'Reader dislike is not what he reports.', 3: 'He argues from the chart, not from past attempts.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Headlines and what follows them',
    intro=('The long turn first. A minute of notes, then one to two '
           'minutes, and the examiner closes it with a short question or '
           'two. Then the discussion: four or five sentences. Try once to '
           'group two things that behave alike.'),
    cue=('Describe a news story you followed closely.',
         ['what it was about',
          'where you followed it',
          'how long you followed it',
          'and explain why it interested you']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Did the reporting change over time?',
        'Would you trust the same source again?',
        'Do people read beyond the headline?',
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
    ref='L6',
    context=[
      'From the article in this cycle:',
      'The three daily categories - news, sport and weather - combine the highest reach on the chart with the lowest read-through, between eight and eleven per cent. The long-form categories show the pattern exactly reversed. Recipes alone sit outside both groups, with reach comparable to news and read-through of forty-four per cent.',
     ],
    notice=[
     ('The writer names three categories and then stops naming them. Where, and why?', None,
      'after the first group - the second group is named only by what it is'),
     ('How does the writer describe the second group in five words?', None,
      'show the pattern exactly reversed'),
    ],
    noticetask='Answer both from the paragraph above, which is from the passage you read earlier in this cycle.',
    contrast='Grouping needs two devices and both save a great deal of room. The first is the appositive - the three daily categories, news, sport and weather - which names the group and lists it once, after which you never list it again. The second is reversal: exactly reversed, the opposite pattern, the mirror image. Between them you can describe eight categories in three sentences. Note the punctuation: an appositive list takes dashes or commas on both sides, never one of each.',
    task2='Rewrite each using an appositive or a reversal.',
    items2=[
     ('News, sport and weather all have high reach.', None,
      'The three daily categories - news, sport and weather - all have high reach.'),
     ('Long reads have low reach and high read-through, the opposite of news.', None,
      'The long-form categories show the pattern exactly reversed.'),
     ('Correct: the three categories, news, sport and weather - are the highest.', None,
      'the three categories - news, sport and weather - are the highest'),
     ('Recipes do not fit either group.', None,
      'Recipes alone sit outside both groups.'),
    ],
    task3='Now write the body of a Task 1 answer from the chart in this cycle: name two groups with one appositive, describe the second by reversal, and give the outlier its own sentence. About sixty words.',
    items3=8,
    point='Grouping categories by shared behaviour',
    fix=dict(
     text=('The four categories can be grouped by behaviour. Television and '
           'radio both fell steadily, while online and social media rose. The '
           'first group, that lost about half of its audience, was the older '
           'media. The second group gained the audience which the first group '
           'lost, but the chart does not shows where each viewer went.'),
     faults=[('The first group, that lost about half of its audience,',
              'The first group, which lost about half of its audience,',
              'A clause between commas takes which.'),
             ('the chart does not shows',
              'the chart does not show',
              ('After does not the verb goes back to its plain form: does not '
               'show.')),
             (('The second group gained the audience which the first group '
               'lost'),
              ('The second group gained an audience of about the same size as '
               'the one the first group lost'),
              ('The chart cannot show that the same people moved, so the '
               'sentence claims more than the data allows.'))]),
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
   notes=dict(
    serves='Matching headings and Yes/No/Not Given, Reading Part 3, on a seven-hundred-word passage; multiple choice and short answer in Listening Part 4',
    because='A passage explaining why something happens contains mechanism paragraphs and cause paragraphs, and they are not the same: a cause says what produced it and a mechanism says by what route, and the headings for them are written to be confusable',
    skill='Recognising a mechanism paragraph - the one that shows the steps rather than naming the cause',
    evidence='Unit 23 cycle 4 taught several causes at once; this is the neighbouring distinction, and the audit found it taught nowhere in Volume 3',
    watch='Learners will give the mechanism heading to the paragraph naming the cause. The mechanism paragraph is the one with the word "so" in it three times. Expect it',
    time='90 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='A mechanism, not a villain',
    body='False stories travel further than true ones, and the finding is usually reported as evidence that somebody is behaving badly. The research says something colder and more useful: that a false story is not constrained by what happened, so it can be more surprising, and people share what surprises them. No step in that needs malice. Understanding it is the difference between a remedy that might work and one that cannot, which is why cycle 5 can be written at all.',
    task='Answer these before you read, and keep them for the unit review.',
    qs=[
        'Why do you think you share the things you share?',
        'Is a mechanism that needs nobody to behave badly easier or harder to fix?',
        'If the same mechanism spreads errors and suppresses corrections, what would you try?',
        'Who should be responsible for a system nobody designed to do this?',
       ]),
   vocabwork=dict(
    title='The vocabulary of how something spreads',
    body='Thirteen words, and nine of them you met in unit 23, where the subject was an epidemic. Cascade, decay, reproduction, tipping point: the mathematics of a rumour and the mathematics of an infection are the same mathematics, and that is not a metaphor.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'how a story spreads', 'sub': 'cycle 4 · nine of these are from unit 23', 'branches': [('the spread', ['cascade', 'reshare', 'reproduction', 'tipping point']), ('the decline', ['decay', 'half-life', 'saturation', 'burnout']), ('the driver', ['novelty', 'salience', 'surprise', 'affect']), ('the remedy', ['correction', 'prebunking', 'friction', 'labelling'])], 'note': 'Friction is anything that makes sharing slower - a prompt, a delay, a confirmation step - and it is the only remedy on this list that works on the mechanism rather than on the content. That is why cycle 5 ends where it does.'},
    figure2={'kind': 'family', 'teaches': 'word-formation', 'sub': 'cycle 4 · and one of these is irregular', 'rows': [(('cor-rect', 2), ('cor-rec-tion', 2), '', '', ''), (('a-mend', 2), ('a-mend-ment', 2), '', '', ''), (('re-tract', 2), ('re-trac-tion', 2), '', '', ''), ('', ('nov-el-ty', 1), '', ('nov-el', 1), ''), (('de-cay', 2), ('de-cay', 2), '', '', '')], 'note': 'Novel as an adjective means new and as a noun means a book, and the two are unrelated in meaning and identical in form. Context decides and the exam enjoys it.'},
    task='Complete each sentence with a word from this cycle, in the right form.',
    items=[
     ('A chain of resharing is a ____________.', None,
      'cascade'),
     ('The time a story takes to lose half its reach is its ____________.', None,
      'half-life'),
     ('Newness, as a driver of sharing, is ____________.', None,
      'novelty'),
     ('Anything that makes sharing slower is ____________.', None,
      'friction'),
     ('Warning people before they meet a false claim is ____________.', None,
      'prebunking'),
     ('The noun from retract is ____________.', None,
      'retraction'),
     ('The point past which a spread becomes self-sustaining is the ____________ point.', None,
      'tipping'),
     ('When nearly everybody has already seen it, the spread reaches ____________.', None,
      'saturation'),
    ]),
   builder=dict(
    skill='Matching headings: the mechanism paragraph',
    qkind='skill',
    explain='A passage explaining why something happens contains two kinds of paragraph that look identical and are not. A cause paragraph names what produced the outcome: the asymmetry is driven by novelty. A mechanism paragraph shows the route by which it does so, step by step: a false story is unconstrained, so it can be more surprising, so it is shared more, so it reaches further. The two have different headings and the headings are written to be confusable - "What drives the asymmetry" and "How the asymmetry arises". The tell is unmissable once you look for it: a mechanism paragraph is full of connectives of consequence. So, therefore, which means that, with the result that, and it follows. A cause paragraph has a noun and an assertion. Count the "so"s. Three or more and you are in the mechanism paragraph, whatever its subject, and it takes the heading that says how rather than the one that says what.',
    worked=[
      'Paragraph C: “The asymmetry is driven by novelty. Surprise, not ideology, predicts resharing in every dataset examined.” Two sentences, a noun and an assertion. This is the cause.',
      'Paragraph D: “A false story is not constrained by what happened, so its author may choose the most surprising version available; and since surprise predicts resharing, it is reshared more, with the result that it reaches further in the same time.” One sentence, three connectives of consequence. This is the mechanism.',
      'Heading “What drives the difference” belongs to C. Heading “The route from invention to reach” belongs to D.',
      'Both paragraphs are about novelty and resharing and only one of them shows the steps.',
     ],
    figure={'kind': 'skeleton', 'teaches': 'text-structure', 'title': 'Seven hundred words, and one mechanism', 'sub': 'cycle 4 · count the connectives before you read the headings', 'paras': [('A', 'context', 'The finding, and how it was reported'), ('B', 'definition', 'What a cascade is, and a half-life'), ('C', 'claim', 'Novelty, not ideology, drives it'), ('D', 'mechanism', 'Unconstrained, so surprising, so shared'), ('E', 'evidence', 'Twelve datasets, one asymmetry'), ('F', 'consequence', 'Why corrections cannot win on the same ground')], 'note': 'D is the only paragraph with three connectives of consequence in it, and it is the paragraph the hardest heading belongs to. F also has consequences in it and is about what follows for us rather than about how the thing works, which is the second-hardest distinction in this cycle.'},
    task='For each paragraph write CAUSE or MECHANISM, and the signal.',
    items=[
     ('“The asymmetry is driven by novelty.”', None,
      'cause, a noun and an assertion'),
     ('“It is unconstrained, so it can be more surprising, so it is shared more.”', None,
      'mechanism, three sos'),
     ('“Surprise predicts resharing in every dataset.”', None,
      'cause, an assertion'),
     ('“Since corrections are constrained, they are less surprising, which means they travel less far.”', None,
      'mechanism, since and which means'),
     ('“Twelve datasets show the same pattern.”', None,
      'cause, evidence for an assertion'),
     ('“The result is that the remedy is suppressed by the same force that spreads the error.”', None,
      'mechanism, the result is'),
    ],
    note='The three mechanism paragraphs all contain at least two connectives of consequence and the three cause paragraphs contain none. That is a reliable enough tell to use at speed, which is exactly what Part 3 needs.'),
   figures=[
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 4 · the Yes/No/Not Given set turns on these', 'pairs': [('nobody has to behave badly', 'the mechanism requires no malice', 'negation'), ('it spreads further', 'reach is greater', 'nominalisation'), ('made up stories', 'false claims', 'hypernym'), ('people pass on what surprises them', 'novelty predicts resharing', 'reformulation'), ('the platforms designed it', 'the system was designed to reward sharing', 'voice'), ('a twelfth as far', 'about eight per cent of the reach', 'synonym')], 'note': 'The first is the claim of the whole passage and the answer to two questions, and it is a negative, which is why it is hard to find by scanning.'},
   ],
   advice='In matching headings on an explanatory passage, count the connectives of consequence in each paragraph before you read the headings. Three or more and you are in the mechanism paragraph, which takes the heading saying how; none and you are in the cause paragraph, which takes the heading saying what. Both headings will mention the same nouns, on purpose.',
   debrief=dict(
    read=[
      'The heading about how the asymmetry arises belongs to D, which has three connectives of consequence, and not to C, which names the cause in one sentence.',
      'Statement 50 says the finding shows platforms are to blame. The passage says the mechanism requires no malice, which makes it NO and not NOT GIVEN.',
      'One statement repeats paragraph F as a description of how the thing works. F is about what follows for us, which is the second distinction in this cycle.',
     ],
    listen=[
      'Dr Lindqvist refuses the question in her first sentence and the refusal is the answer to question 54.',
      'She gives a fraction and then a percentage for the same quantity. The gap says which.',
     ]),
   outside='A mechanism is harder to produce than a villain and far more useful, because you can intervene in a mechanism. Most public explanation stops at the villain, which is why so little of it leads anywhere.',
   recycled=[
      'cascade',
      'evidence',
      'decay',
      'novelty',
      'correction',
      'tipping point',
     ],
   read=[
    dict(heading='Novelty, emotion and the speed of a rumour',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and sentence completion',
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
          'inattention, then the useful interventions act on the '
          'structure of distribution rather than on the virtue of '
          'individuals. They slow the resharing of unread links, '
          'attach the correction to the original item rather than '
          'publishing it separately, and decline to treat the number '
          'of shares as a measure of anything except itself.',
                ('There is a final consideration that complicates every '
                 'proposal of this kind. The features that spread a false '
                 'story are the same features that spread a true and urgent '
                 'one, which is why a platform cannot simply slow novelty '
                 'down. A flood warning is novel, emotive and simple, and it '
                 'needs to travel as fast as the mechanism allows. Any '
                 'intervention that acts on the form of a message rather than '
                 'on its truth will therefore slow the warnings too, and the '
                 'balance between those two costs is a judgement nobody has '
                 'yet defended in public.')],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['The role of automated accounts', 'Novelty', 'Emotional content', 'Simplicity'],
           0, 'Removing them leaves the difference almost unchanged.',
           {1: 'Novelty is paragraph 3, the explanation with most '
               'support.', 2: 'Emotional content is paragraph 4, on surprise and '
               'disgust.', 3: 'Simplicity is the heading for paragraph 5.'}),
          ('Choose the best heading for paragraph 5.',
           ['Novelty', 'Emotional content', 'Simplicity', 'The asymmetry in correction'],
           2, 'One cause, one villain and no qualifications.',
           {0: 'Novelty is paragraph 3, the explanation with most '
               'support.', 1: 'Emotional content is paragraph 4, on surprise and '
               'disgust.', 3: 'The asymmetry in correction is paragraph 6.'}),
          ('Choose the best heading for paragraph 7.',
           ['The asymmetry in correction', 'Why interventions on sharers disappoint', 'A change of target', 'Simplicity'],
           1,
           'Asking people to consider accuracy has a small, decaying '
           'effect.',
           {0: 'The asymmetry in correction is paragraph 6.', 2: 'The change of target is paragraph 8, the last but one.', 3: 'Simplicity is the heading for paragraph 5.'}),
          (
           'The writer believes automated accounts are the main cause.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 reports that removing them changes little.',
           {0: 'Yes would need them to dominate; paragraph 2 says '
               'removing them changes little.', 2: 'Not Given is wrong because their contribution is '
               'measured.'}),
          (
           'The writer believes nothing can be done about the problem.',
           ['Yes', 'No', 'Not Given'], 1,
           'The final paragraph proposes interventions on distribution '
           'instead.',
           {0: 'Yes would need resignation; the final paragraph '
               'proposes interventions.', 2: 'Not Given is wrong because remedies are named.'}),
          ('Corrections typically reach between a tenth and a ____________ '
           'of those who saw the original.', None, 'third',
           'Paragraph 6, because a correction is less novel and more '
           'complex.'),
          ('The writer says the properties that make a story worth passing '
           'on are correlated with the properties that make it '
           '____________.', None, 'false',
           'Paragraph 7, which is why intention is not the problem.')])],
   listen=[
    dict(preview=True,
         heading='A researcher on why novelty travels',
         part='Preview', task='Sentence completion',
         band='lpre', qtype='Questions P1-P3',
         why='The lecture you are about to hear gives a mechanism rather than a villain. Ninety seconds on what that means.',
         script=[
          ('Interviewer',
           'False stories spread faster. Whose fault is that?'),
          ('Dr Lindqvist',
           'That question assumes a culprit. The finding is about a mechanism, and the mechanism does not need anybody to be acting badly.'),
          ('Interviewer',
           'Give me the mechanism.'),
          ('Dr Lindqvist',
           'People share what is surprising. A false story is unconstrained by what actually happened, so on average it is more surprising than a true one. More surprising means more shared. That is the whole of it, and no step in it requires malice or even inattention.'),
          ('Interviewer',
           'So the platforms are not to blame.'),
          ('Dr Lindqvist',
           'The platforms built a system that rewards sharing, which turns a human tendency into a measurable rate. That is a decision and they made it. But if you removed every bad actor tomorrow the asymmetry would remain, because it comes from the difference between being constrained by the facts and not being.'),
          ('Interviewer',
           'And corrections?'),
          ('Dr Lindqvist',
           'A correction is constrained by the facts by definition, which is exactly why it is less surprising and travels a twelfth as far. The mechanism that spreads the error is the one that suppresses the remedy.'),
         ],
         items=[
          ('Dr Lindqvist says people share what is ____________.',
           None, 'surprising',
           'Her second answer, which is the whole mechanism.'),
          ('A false story is unconstrained by what actually ____________.',
           None, 'happened',
           'The same answer: that is why it is more surprising on average.'),
          ('A correction travels about a ____________ as far.',
           None, 'twelfth',
           'Her last turn, which is the finding cycle 5 is built on.'),
         ]),
    dict(heading='A lecture on misinformation', part='Part 4',
         task='A lecture on why false stories spread · short answer, sentence completion, multiple choice and matching', band='l4',
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
           None, 'four',
           'Automated accounts, novelty, emotion and simplicity.'),
          (
           'Removing automated accounts from the data ____________ '
           'changes the gap.', None, 'barely',
           'Because almost all sharing is done by ordinary accounts.'),
          ('Why does he call the novelty advantage structural?',
           ['It is measured precisely', 'A true story is limited by what happened and a false one by nothing', 'It applies to all platforms', 'It has been found twice'],
           1, 'Which is the mechanism with the most support.',
           {0: 'Precision of measurement is not why he calls it '
               'structural.', 2: 'Platform coverage is not the reason he gives.', 3: 'The number of replications is not his point here.'}),
          ('Which mechanism does he say almost nobody lists?',
           ['Automated accounts', 'Novelty', 'Emotion', 'Simplicity'],
           3, 'One cause, one villain, no qualifications.',
           {0: 'Automated accounts are the first mechanism, widely '
               'discussed.', 1: 'Novelty is the mechanism with the most support.', 2: 'Emotion is regularly listed, as his third mechanism.'}),
          (
           'A correction is necessarily more complex because it must '
           '____________ the claim before denying it.', None,
           'restate',
           'And necessarily less novel because the claim has been '
           'seen.'),
          ('What does he call the least promising use of money?',
           ['Fact-checking', 'Asking individuals to be more careful', 'Platform regulation', 'Media literacy in schools'],
           1,
           'Because the asymmetry is arithmetic rather than a failure '
           'of effort.',
           {0: 'Fact-checking is not what he singles out.', 2: 'Platform regulation is closer to what he recommends.', 3: 'Media literacy is not discussed in the lecture.'})])],
   speak=dict(
    part='Part 2 into Part 3', focus='Correcting what people believe',
    followup=[('You say corrections do not work. Why not?',
               ('They work less well than people assume, and the reason is '
                'that a correction is a second encounter with the claim. '
                'Repeating something to deny it makes it more familiar, and '
                'familiarity is most of what makes a statement feel true. '
                'Corrections that offer an alternative account do better than '
                'corrections that simply say no.')),
              ('Should people be taught how to check information?',
               ('Yes, and I would set the expectation lower than the usual '
                'proposals do. Teaching everybody to evaluate evidence is '
                'unrealistic; teaching them two habits is not. Look for who is '
                'saying it and look for a second source. That is most of the '
                'benefit, and it survives contact with a busy life.')),
              (('Whose responsibility is it to stop false information '
                'spreading?'),
               ('Mostly the platforms\', because they are the only party that '
                'can act at the speed it moves, and because their ranking '
                'decides what spreads. I am uncomfortable with that, since it '
                'makes a company the judge of truth, which is why I would '
                'regulate the process rather than the content: require them to '
                'publish how ranking works and to be auditable on it.'))],
    intro=('Work the card first: a minute of notes, the long turn, then '
           'the one or two questions that round it off. The discussion '
           'after that: four or five sentences. Try once to explain a '
           'mechanism rather than assign blame.'),
    cue=('Describe a rumour or a false story you heard.',
         ['what it claimed',
          'where you heard it',
          'how it spread',
          'and explain how you found out the truth']),
    qs=['Now look at the card. You have one minute to make notes.',
        'Was it ever corrected?',
        'Do people still repeat it?',
        'Why do false stories spread so easily?',
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
    ref='L9',
    context=[
      'From the passage you have just read:',
      'A false account is not constrained by what happened, so its author may select the most surprising version available; and since surprise is what predicts resharing, the false account is reshared more, with the result that it reaches further within the same period. Nothing in that chain requires anybody to be acting in bad faith, which is both the finding and the reason it is so often misreported.',
     ],
    notice=[
     ('Find the three connectives that carry the chain.', None,
      'so; since; with the result that'),
     ('What does the last sentence say the chain does NOT require?', None,
      'anybody acting in bad faith'),
    ],
    noticetask='Answer both from the paragraph above, which you met earlier in this cycle.',
    contrast='Giving a mechanism rather than a cause means writing a chain, and a chain needs connectives that carry consequence rather than merely addition. So, since, with the result that, which means that, and it follows that. The difference from a cause claim is visible in the grammar: a cause claim is a sentence with a noun in it (novelty drives the asymmetry) and a mechanism is a sentence with three clauses in it. And the move at the end - saying what the chain does not require - is what turns a mechanism into an argument, because it rules out the explanation everybody else is offering.',
    task2='Turn each cause claim into a mechanism with at least two connectives.',
    items2=[
     ('Novelty drives resharing.', None,
      'A novel claim is more surprising, so it is shared more, with the result that it reaches further.'),
     ('Corrections do not travel.', None,
      'A correction is constrained by the facts, so it is less surprising, which means it is reshared less.'),
     ('Correct: it is unconstrained, so it is surprising, and also it is shared.', None,
      'it is unconstrained, so it is more surprising, and therefore more shared'),
     ('Say what the chain does not require.', None,
      'Nothing in this requires anybody to be acting in bad faith.'),
    ],
    task3='Now write a mechanism. Take any finding from this unit - corrections travelling less far, read-through at fifteen per cent, equal time read as equal support - and write the chain with at least three connectives, ending with what it does not require. Eighty to a hundred words.',
    items3=10,
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
   notes=dict(
    serves='Matching information and Yes/No/Not Given, Reading Part 3; Task 2, to what extent do you agree',
    because='On a question where the evidence is genuinely mixed, band 6 essays either overclaim or refuse to take a position, and both are penalised: the third option - stating precisely how much the evidence supports - is never attempted because it has never been shown',
    skill='Writing a calibrated position: how much, on what evidence, and what would change it',
    evidence='Unit 28 cycle 5 taught attaching scope to a comparison; this is the same discipline applied to a claim where the evidence genuinely conflicts, which is the harder case and the last thing this book teaches',
    watch='Learners will write "the evidence is mixed, so it is hard to say". Ask them to say how much, and what result would change their mind',
    time='95 minutes, or 70 without the free grammar production'),
   lead=dict(
    title='A twelfth as far',
    body='This is the last cycle of the unit and the question is whether correcting a false story does any good. The evidence is genuinely mixed: corrections reduce belief in the thing corrected, reliably and by a measurable amount, and they travel a twelfth as far as the story, and in a minority of studies they appear to entrench the belief they were meant to remove. An honest answer has to hold all three of those at once, which is the hardest thing this book asks you to write.',
    task='Answer these before you read, and compare them with what you wrote at the start of cycle 1.',
    qs=[
        'Have you ever changed your mind because you saw a correction?',
        'If a correction reaches a twelfth as many people, has it worked?',
        'What would you want to know before deciding whether corrections are worth publishing?',
        'Has anything in this unit changed what you thought at the start of it? Which cycle did it?',
       ]),
   vocabwork=dict(
    title='The vocabulary of a mixed finding',
    body='The last set of the unit. Twelve words for saying exactly how much a body of evidence supports, which is the skill the whole volume has been building towards: you have met the parts of it in unit 21, unit 23, unit 24 and unit 28 and this is where they are used together.',
    figure={'kind': 'field', 'teaches': 'vocabulary', 'centre': 'how strong is the evidence?', 'sub': 'cycle 5 · the last vocabulary set of the first ten units', 'branches': [('the finding', ['effect size', 'null result', 'statistical power', 'confidence interval']), ('the body', ['replicated', 'mixed', 'consistent', 'preponderance']), ('the limits', ['underpowered', 'publication bias', 'file drawer', 'heterogeneity']), ('the verdict', ['on balance', 'the weight of evidence', 'not established', 'what would settle it'])], 'note': 'Publication bias is the tendency for studies finding nothing to go unpublished, so that the published record overstates every effect. It is the reason the phrase "the studies all agree" is weaker than it sounds.'},
    figure2={'kind': 'cline', 'teaches': 'scale', 'title': 'How much does the evidence support?', 'sub': 'cycle 5 · and you may use any of these in Task 2', 'left': 'nothing is established', 'right': 'beyond serious dispute', 'items': [('the evidence is silent', 0.03), ('the evidence is mixed', 0.18), ('the balance of evidence suggests', 0.4), ('the weight of evidence supports', 0.6), ('it is well established that', 0.8), ('beyond serious dispute', 0.96)], 'note': 'Only the second of these describes the correction literature honestly, and an essay that uses the fourth about it has overclaimed in three words. Choosing the right phrase on this line is most of Task Response on an evidence question.'},
    task='Complete each sentence with a word or phrase from this cycle.',
    items=[
     ('A trial that found no effect produced a ____________ result.', None,
      'null'),
     ('A trial too small to detect a real effect is ____________.', None,
      'underpowered'),
     ('Studies finding nothing going unpublished is publication ____________.', None,
      'bias'),
     ('The size of the difference found is the effect ____________.', None,
      'size'),
     ('The phrase for genuinely conflicting findings: the evidence is ____________.', None,
      'mixed'),
     ('A finding reproduced by another team has been ____________.', None,
      'replicated'),
     ('The range within which the true value probably lies is the ____________ interval.', None,
      'confidence'),
     ('Differences between studies that should have agreed are ____________.', None,
      'heterogeneity'),
    ]),
   builder=dict(
    skill='Task 2: a calibrated position',
    qkind='skill',
    explain='On a question where the evidence genuinely conflicts, there are three things you can write and only one of them earns a good Task Response. You can overclaim - corrections work, corrections do not work - which is punished because the essay asserts more than anything supports. You can refuse - the evidence is mixed, so it is difficult to say - which is punished harder, because the rubric asked for a position and received a description of your difficulty. Or you can calibrate, which almost nobody does and which is three sentences. State how much: corrections reliably reduce belief in the specific claim corrected, by an amount that is small and has been replicated. Say what remains unsupported: they have not been shown to reach the people who saw the original, and the backfire finding is not replicated. And say what would settle it: a trial that delivers corrections to the people who shared the original. That third sentence is what makes it a position rather than a shrug, and it is the one nobody writes.',
    worked=[
      'PROMPT: publishing corrections to false stories is a waste of effort. To what extent do you agree?',
      'Overclaiming: “Corrections clearly work and the claim is wrong.” More than the evidence supports.',
      'Refusing: “The evidence is mixed and it is hard to say.” A description of your difficulty, not a position.',
      'Calibrating, sentence one: “Corrections do reduce belief in the specific claim corrected; this is small, consistent and replicated.”',
      'Sentence two: “What has not been shown is that they reach the people who saw the original - they travel roughly a twelfth as far - and the backfire effect, widely cited, has failed to replicate.”',
      'Sentence three: “I would therefore agree that corrections as currently published are close to a waste of effort, and disagree that correction is; a trial delivering corrections to resharers would settle it.”',
     ],
    figure={'kind': 'ladder', 'teaches': 'band-move', 'criterion': 'Task Response, on contested evidence', 'sub': 'cycle 5 · three ways of handling a mixed finding', 'rungs': [('5.5', 'Some studies say corrections work and some say they do not, so it is a difficult question with no clear answer.', ''), ('6.5', 'The evidence is mixed: corrections reduce belief but reach far fewer people, so their overall value is limited.', 'a position, with a reason, instead of a description of the difficulty'), ('7.5', 'Corrections reliably reduce belief in the claim corrected, by a small and replicated margin; what is unsupported is that they reach the people who saw the original. I therefore agree about corrections as published and not about correction as such, and a trial delivering them to resharers would settle it.', 'the claim is calibrated, the gap is named, the position distinguishes two things, and the test is specified')], 'note': 'The third rung agrees with half the prompt and disagrees with the other half, which is allowed, is precise, and is what "to what extent" was asking for.'},
    task='For each sentence write OVERCLAIM, REFUSAL or CALIBRATED.',
    items=[
     ('“The evidence is mixed and it is hard to say.”', None,
      'refusal'),
     ('“Corrections clearly work.”', None,
      'overclaim'),
     ('“Corrections reduce belief by a small, replicated margin.”', None,
      'calibrated'),
     ('“Nobody knows whether corrections help.”', None,
      'overclaim'),
     ('“What is unsupported is that they reach the original audience.”', None,
      'calibrated'),
     ('“Both sides have a point and a balance is needed.”', None,
      'refusal'),
    ],
    note='Item four is the surprise: "nobody knows" sounds modest and is an overclaim, because something is known and the sentence denies it. Modesty about evidence is not the same as accuracy about it, and Task Response marks the second.'),
   figures=[
    {'kind': 'skeleton', 'teaches': 'text-structure', 'title': 'Six hundred words, six functions', 'sub': 'cycle 5 · the last passage of the first ten units', 'paras': [('A', 'context', 'The twelfth, and what it is usually taken to prove'), ('B', 'evidence', 'What corrections do to belief'), ('C', 'qualification', 'What they do not do to reach'), ('D', 'counter-claim', 'The backfire finding, and its replication record'), ('E', 'concession', 'Why publishing them is still required'), ('F', 'consequence', 'The trial that would settle it')], 'note': 'Four of these six paragraphs are the parts of a calibrated position, in the order you would write them. The passage is the model for the essay, which is why it is the last one in the unit.'},
    {'kind': 'bridge', 'teaches': 'paraphrase', 'sub': 'cycle 5 · the matching set turns on these', 'left': 'THE QUESTION SAYS', 'right': 'THE PASSAGE WROTE', 'pairs': [('a trial that found nothing', 'a null result', 'nominalisation'), ('other teams found the same', 'the finding replicated', 'voice'), ('too small to detect it', 'underpowered', 'synonym'), ('it has not been shown', 'the claim is not established', 'negation'), ('belief, reach and sharing', 'the measured outcomes', 'hypernym'), ('what would decide it', 'what would settle the question', 'reformulation')], 'note': 'The fourth is the whole discipline of this cycle in one pair: not shown is a statement about evidence and not about the world.'},
   ],
   advice='On a question where the evidence conflicts, do not write that the evidence is mixed and stop. Say what is established, say what is not, and say what would settle it. Agreeing with half the prompt and disagreeing with the other half is allowed and is usually the honest answer, and "to what extent" is an invitation to do exactly that.',
   debrief=dict(
    read=[
      'The matching-information question about the backfire finding sends you to D, which reports its replication record, and not to B, which has the belief figures.',
      'The statement that the passage finds corrections useless is NO: paragraph B says they reduce belief reliably. The passage distinguishes corrections as published from correction as such, which the statement does not.',
      'One statement presents paragraph E - that publishing is still required - as the writer’s main conclusion. It is a concession, and this is the sixth time this volume has set that trap.',
     ],
    listen=[
      'The speaker gives an effect size and then a confidence interval. The gap says which.',
      'She says one finding "has not replicated" and another "has been replicated four times". Both are about corrections and only one is the answer.',
     ]),
   outside='Saying how much you believe something, on what evidence, and what would change your mind is the whole of thinking carefully in public. It is rare, it is unmistakable when you see it, and it is the last thing this unit has to teach.',
   recycled=[
      'null result',
      'evidence',
      'replicated',
      'correction',
      'underpowered',
      'effect size',
      'on balance',
     ],
   read=[
    dict(preview=True,
         heading='What a null result is',
         kind='Explainer box', task='Sentence completion',
         band='pre', qtype='Questions P1-P3',
         why='The last passage of the unit is about a set of trials that mostly found nothing, and what that does and does not mean. Two hundred words.',
         paras=[
          'A null result is a trial that found no effect. It is not a failed trial and it is not evidence that there is no effect: it is evidence that any effect is smaller than this trial could have detected, which is a different and much weaker statement.',
          'How much weaker depends entirely on the size of the trial. A study of two hundred people that finds nothing has ruled out a large effect and said nothing about a small one. A study of twenty thousand that finds nothing has ruled out almost everything, and that is a real finding.',
          'The phrase to look for is statistical power, which is the probability that a trial would have detected an effect if one existed. A well-run trial states its power before it begins and reports a null result as informative; an underpowered trial reports the same result as inconclusive, which is the honest word.',
          'So "correction does not work" and "correction has not been shown to work in trials of this size" are different sentences, and the whole argument of this cycle lives between them.',
         ],
         items=[
          ('A null result shows that any effect is smaller than the trial could have ____________.',
           None, 'detected',
           'Paragraph 1: it is not evidence that there is no effect.'),
          ('How much a null result rules out depends on the ____________ of the trial.',
           None, 'size',
           'Paragraph 2, with the two hundred and the twenty thousand.'),
          ('The probability a trial would have detected an effect is its statistical ____________.',
           None, 'power',
           'Paragraph 3, which contrasts informative with inconclusive.'),
         ]),
    dict(heading='What happens after a story is corrected',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and sentence completion',
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
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'],
           1, 'Now understood as largely an artefact of small samples.',
           {0: 'Paragraph 1 says the question contains two questions.', 2: 'Paragraph 3 reports the modest, decaying effect.', 3: 'Paragraph 4 distinguishes efficacy from reach.'}),
          ('Which paragraph distinguishes efficacy from reach?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'],
           1,
           'Researchers quote one and critics quote the other, both '
           'correctly.',
           {0: 'Paragraph 3 reports the modest, decaying effect.', 2: 'Paragraph 5 explains how reach can be engineered.', 3: 'Paragraph 6 describes two opposite effects on trust.'}),
          ('Which paragraph describes two opposite effects on trust?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'],
           1, 'Trust in one outlet rises; trust in everything falls.',
           {0: 'Paragraph 5 explains how reach can be engineered.', 2: 'Paragraph 7 draws the implication from those effects.', 3: 'Paragraph 8 gives the three-sentence summary.'}),
          ('The writer believes corrections strengthen false beliefs.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 2 reports that the backfire finding did not '
           'reproduce.',
           {0: 'Yes would need the backfire effect; paragraph 2 says '
               'it did not reproduce.', 2: 'Not Given is wrong because the backfire claim is '
               'tested.'}),
          (
           'The writer believes the reach problem is technically '
           'unsolved.', ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 5 and the conclusion call it solved and mostly '
           'not implemented.',
           {0: 'Yes would need it unsolved; paragraph 5 calls it '
               'solved and unimplemented.', 2: 'Not Given is wrong because the technical state is '
               'stated.'}),
          ('Attaching a correction to the original item raises the '
           'proportion corrected to over ____________.', None, 'half',
           'Paragraph 5, from under a tenth.'),
          (
           'Nobody has measured the effect of living among many '
           '____________.', None, 'corrections',
           'The final paragraph, which calls it probably the most '
           'important question.')])],
   listen=[
    dict(heading='A platform officer and a researcher disagree',
         part='Part 4', task='A recorded exchange · multiple choice and sentence completion', band='l4',
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
           ['Platforms cannot act', 'The backfire effect is dead', 'Corrections never work', 'His data is small'],
           1,
           'A finding his side quoted for ten years that did not '
           'reproduce.',
           {0: 'He concedes a finding, not a view about platforms.', 2: 'He says corrections do reduce belief.', 3: 'The small samples were in the original backfire work.'}),
          (
           'Attaching a correction to the original item raises the '
           'proportion corrected to above ____________.',
           None, 'half',
           'Against under a tenth for a separate correction.'),
          ('Why has it not been rolled out everywhere?',
           ['It is expensive', 'Deciding what is false at scale cannot be staffed', 'Users object', 'It is untested'],
           1,
           'With every error in either direction becoming a story '
           'about the platform.',
           {0: 'She says the engineering is finished.', 2: 'User objection is not the obstacle she names.', 3: 'Their own experiments have tested it.'}),
          ('She says the binding objection is not free ____________.',
           None, 'expression',
           'Which she calls real but not the binding one.'),
          ('What does Ismailov propose instead?',
           ['More adjudicators', 'Adjudicating distribution rather than truth', 'Removing all claims', 'Labelling everything'],
           1, 'Declining to amplify an item nobody has opened.',
           {0: 'More adjudicators is what she says cannot be staffed.', 2: 'Removing claims is not what he proposes.', 3: 'Labelling everything would require adjudicating truth.'}),
          ('What does he add that is bad for his own field?',
           ['His sample was small', 'The effect of constant corrections on general trust is unstudied', 'Corrections are expensive', 'His funding is from a platform'],
           1, 'And probably the question that matters most.',
           {0: 'Small samples were the backfire problem, already '
               'conceded.', 2: 'Cost is the platform\u2019s difficulty, not his field\u2019s.', 3: 'No funding source is mentioned for his work.'})])],
   speak=dict(
    part='Part 3', focus='Who should decide what is true',
    sounds=[('Reporting verbs carry your own position in their stress. They '
             'CLAIMED, with weight on claimed, signals doubt that no adverb is '
             'needed for.'),
            ('Compare the study FOUND, the study SUGGESTS and the paper CLAIMS '
             'said flatly, then with stress. The stressed version commits you, '
             'and in Part 3 that is usually what you want.'),
            ('Practise the sequence of this unit: it was reported, then it was '
             'corrected, and the correction was not read. The second and third '
             'verbs take the stress.'),
            ('Be careful with the opposite effect. Heavy stress on a neutral '
             'reporting verb implies a doubt you may not intend, which is '
             'worse than saying nothing.'),
            ('Record yourself on why false stories spread. Listen to your '
             'reporting verbs and decide, for each one, whether the stress '
             'said what you meant.')],
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
         model65=[
                  'Some people say social media companies should '
                  'remove false information. I agree in limited cases, '
                  'but I think removal is the wrong main instrument.',
                  'There is a case for removing some material. Where '
                  'false information causes direct harm, such as a '
                  'false claim about a medicine, the cost of leaving '
                  'it up is high. Companies already remove other '
                  'categories of material, so this is not a new power.',
                  'But removal has problems. Deciding what is false is '
                  'often difficult and sometimes contested, and a '
                  'company that removes material becomes an editor of '
                  'public debate. Removal is also slow: a false story '
                  'usually reaches most of its audience in the first '
                  'hours.',
                  'I think the better instruments act on distribution '
                  'rather than on existence. Slowing the resharing of '
                  'articles nobody has opened, attaching corrections '
                  'to the original item rather than publishing them '
                  'separately, and not treating share counts as '
                  'evidence of value would reduce the reach of false '
                  'stories without anybody deciding what is true.',
                  ],
         gap65=[
                'It explains why speed makes removal a weak '
                'instrument, which is the reason the alternatives are '
                'better rather than merely safer.',
                'It reports what happened when automated accounts were '
                'removed, so the reader can see which cause has been '
                'tested.',
                'It says what the backfire research actually found '
                'after it failed to replicate.',
                ],
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
    ref='L30',
    context=[
      'From the passage you have just read:',
      'On the present evidence, corrections reduce belief in the claim corrected by a small margin that four independent teams have reproduced. What is not established is that they reach the people who saw the original; what is actively doubtful is the backfire effect, which has failed to replicate in every attempt since 2019. A trial delivering corrections to those who reshared the original would settle the first question in a season.',
     ],
    notice=[
     ('Find the three different levels of confidence the writer assigns.', None,
      'reproduced by four teams; not established; actively doubtful'),
     ('What does the last sentence add that none of the others does?', None,
      'what would settle it, and how quickly'),
    ],
    noticetask='Answer both from the paragraph above, which you met earlier in this cycle.',
    contrast='Hedging is not softening and this paragraph is the proof: every claim in it is hedged and none of them is weak. The three tools are quantity (by a small margin), confidence (on the present evidence, not established) and scope (in the claim corrected). One hedge per claim, and a second reads as evasion. And the move that distinguishes a calibrated position from a cautious one is the last sentence: naming what would settle the question turns a hedge into a prediction, which is the most persuasive thing you can do with an uncertain claim.',
    task2='Rewrite each so that it is hedged once, precisely.',
    items2=[
     ('Corrections work.', None,
      'On the present evidence, corrections reduce belief in the claim corrected.'),
     ('Correct: it may possibly perhaps reduce belief a little.', None,
      'it reduces belief by a small margin'),
     ('Nobody knows about the backfire effect.', None,
      'The backfire effect has failed to replicate since 2019.'),
     ('Say what would settle it.', None,
      'A trial delivering corrections to resharers would settle it.'),
    ],
    task3='Now write the calibrated position. Take the question of whether corrections are worth publishing, say what is established, what is not, and what would settle it. Eighty to a hundred words, one hedge per claim, and no sentence saying the evidence is mixed.',
    items3=10,
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
