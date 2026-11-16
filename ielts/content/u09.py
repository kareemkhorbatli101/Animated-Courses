# -*- coding: utf-8 -*-
"""Unit 9 - Media and Communication. IELTS Volume 1, band 5.0."""

_CALL = dict(kind='device',
             title='How a mobile call is routed',
             sub='the parts of the network and the path a call takes '
                 'through them',
             parts=[('ph1', 0.02, 0.02, 0.24, 0.17, 'Caller’s phone'),
                    ('m1', 0.38, 0.02, 0.24, 0.17, 'Nearest mast'),
                    ('bs', 0.38, 0.29, 0.24, 0.17, 'Base station'),
                    ('sw', 0.74, 0.29, 0.24, 0.17, 'Switching centre'),
                    ('db', 0.74, 0.02, 0.24, 0.17, 'Subscriber '
                     'register'),
                    ('m2', 0.38, 0.56, 0.24, 0.17, 'Mast near '
                     'receiver'),
                    ('ph2', 0.02, 0.56, 0.24, 0.17, 'Receiver’s '
                     'phone'),
                    ('cab', 0.74, 0.83, 0.24, 0.17, 'Fixed cable '
                     'network')],
             flows=[('ph1', 'm1', 'radio signal'),
                    ('m1', 'bs', 'to the base station'),
                    ('bs', 'sw', 'over cable'),
                    ('sw', 'db', 'where is the receiver?'),
                    ('sw', 'm2', 'to the right mast'),
                    ('m2', 'ph2', 'radio signal'),
                    ('sw', 'cab', 'if it is a landline')])

UNIT = dict(
 n=9, vol=1, level='B1', band='5.0',
 theme='Media and Communication',
 opener=(
   'A library card, four people who keep in touch in four different '
   'ways, the journey a call takes between two phones, and then two '
   'passages about something you use all day without examining: '
   'whether the language you speak changes what you notice. The '
   'technique page is Matching Features, which candidates find slow '
   'for one avoidable reason.'),

 cycles=[
  dict(
   sub='Joining a library',
   step=1,
   read=[
    dict(heading='Marchfield Library: membership and borrowing',
         kind='Notice', task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-6',
         skill=('A library notice is read for the numbers',
                ['How many, how long, how much. Those three questions '
                 'cover almost every item set on a notice of this '
                 'kind.',
                 'The rule that differs between adults and children is '
                 'tested every time it appears.']),
         paras=[
          'Membership is free to anybody who lives, works or studies in the '
          'county. Bring proof of address dated within three months, and a '
          'card is issued at the counter in about ten minutes.',
          'Adults may borrow twelve items at a time and children six. Books '
          'are lent for three weeks and DVDs for one week, and items may be '
          'renewed twice unless another member has reserved them.',
          'Reservations cost 60p for adults and are free for children '
          'and for anybody over sixty-five. You will be notified by text '
          'or email when the item arrives and it is held for eight '
          'days.',
          'Overdue charges are 20p a day for adults, to a maximum of £8 per '
          'item. Children pay nothing, although borrowing stops until the '
          'item is returned.',
          'Computers may be used free for one hour a day, or two if nobody '
          'is waiting. Printing costs 10p a sheet in black and 40p in '
          'colour, paid at the counter.',
          'The library opens 09.00 to 17.30 on weekdays and 09.00 to 13.00 '
          'on Saturdays, and closes on Sundays. Wednesday closing is 19.00, '
          'the only evening opening.'],
         items=[
          ('How many items may a child borrow?', None, 'six',
           'Paragraph 2, against twelve for an adult.'),
          ('Items may be renewed ____________ times.', None, 'twice',
           'Paragraph 2, unless somebody has reserved them.'),
          ('Who pays nothing for reservations?',
           ['adults', 'children and the over-65s', 'students',
            'nobody'], 1,
           'Paragraph 3, where adults pay 60p.'),
          ('A reserved item is held for ____________ days.', None,
           'eight', 'Paragraph 3, after notification by text or '
           'email.'),
          ('The maximum overdue charge per item is £____________.',
           None, '8', 'Paragraph 4, at 20p a day for adults.'),
          ('On which evening is the library open until 19.00?', None,
           'Wednesday', 'Paragraph 6, the only evening opening.')]),
    dict(heading='Online resources from home',
         kind='Information page', task='Flow-chart completion',
         band='gt_short', qtype='Questions 7-10',
         paras=[
          'Go to the library website and choose "log in". Your username '
          'is the fourteen-digit number on the back of your card, '
          'without spaces, and your initial password is your date of '
          'birth in six figures.',
          'You will be asked to change the password at the first log-in. '
          'If you forget it afterwards, it can be reset only at the '
          'counter, because resetting by email is not available for '
          'library accounts.',
          'Once inside, you may borrow four e-books and four audiobooks '
          'at a time. These return themselves at the end of the loan '
          'period, so no overdue charge can arise and no renewal is '
          'possible.',
          'The newspaper archive and the language courses are also free '
          'from home. The archive covers 1854 to 2019 and the most '
          'recent five years are available only on the computers inside '
          'the building.'],
         items=[
          ('The username is the ____________-digit number on the '
           'card.', None, 'fourteen',
           'Paragraph 1, entered without spaces.'),
          ('A forgotten password can be reset only at the '
           '____________.', None, 'counter',
           'Paragraph 2: email resets are not available.'),
          ('Members may borrow ____________ e-books at a time.', None,
           'four', 'Paragraph 3, plus four audiobooks.'),
          ('The newspaper archive covers 1854 to ____________.', None,
           '2019', 'Paragraph 4, with recent years available in the '
           'building.')])],
   listen=[
    dict(heading='Joining and borrowing', part='Part 1',
         task='A conversation at a library counter', band='l1',
         qtype='Questions 11-16',
         script=[
          ('Librarian', 'Good morning. Can I help?'),
          ('Visitor', 'I would like to join. I have just moved to '
           'Marchfield.'),
          ('Librarian', 'Have you brought proof of address?'),
          ('Visitor', 'A bank statement from last month.'),
          ('Librarian', 'That is ideal. Name?'),
          ('Visitor', 'Benedikt Oyelaran-Haas. H-A-A-S.'),
          ('Librarian', 'Thank you. And your address here?'),
          ('Visitor', 'Flat two, nineteen Culverhay Road.'),
          ('Librarian', 'Your card number is printed on the back. '
           'Fourteen digits, no spaces, and you will need it to log in '
           'from home as well as in the building.'),
          ('Visitor', 'How many books can I take?'),
          ('Librarian', 'Twelve at a time, three weeks each, renewable '
           'twice unless somebody reserves them.'),
          ('Visitor', 'And what happens if I bring something back '
           'late?'),
          ('Librarian', 'Twenty pence a day, up to eight pounds an '
           'item.'),
          ('Visitor', 'Can I use the computers?'),
          ('Librarian', 'An hour a day free, two if nobody is waiting. '
           'Printing is at the counter, ten pence a sheet.'),
          ('Visitor', 'One more thing. I work until half past five.'),
          ('Librarian', 'Then Wednesday is your day. We are open until '
           'seven, and that is the only evening. Saturday morning as '
           'well, until one.'),
          ('Visitor', 'Wednesday evening. Thank you.')],
         items=[
          ('Surname: Oyelaran-____________', None, 'Haas',
           'Spelled out for the librarian at the counter.'),
          ('Address: Flat 2, ____________ Culverhay Road', None, '19',
           'Given to the librarian when joining.'),
          ('The card number has ____________ digits.', None,
           'fourteen', 'It is needed to log in from home as well.'),
          ('Books are lent for ____________ weeks.', None, 'three',
           'Twelve at a time, renewable twice.'),
          ('Printing costs ____________ pence a sheet in black.',
           None, 'ten', 'Paid at the counter rather than the '
           'machine.'),
          ('The library is open late on ____________.', None,
           'Wednesday', 'Until seven, the only evening in the week.')])],
   speak=dict(
    part='Part 1', focus='Reading and what you read',
    intro=('Two or three sentences each. Name what you actually read '
           'rather than what you intend to read.'),
    qs=['Do you read much?',
        'Do you prefer paper books or a screen?',
        'Did you use libraries as a child?',
        'What was the last thing you read for pleasure?'],
    shape=[('answer', 'Less than I would like and more than last '
            'year.'),
           ('support', 'Mostly on a screen, because I read on the '
            'train.'),
           ('follow-up', 'I use the library for the children rather '
            'than for myself, which I am slightly ashamed of.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Suggesting the library opens later',
         prompt=('You would like your local library to change its '
                 'opening hours. Write a letter to the library '
                 'manager. In your letter: say how you use the '
                 'library; explain why the current hours are '
                 'difficult; suggest a change. Write at least 150 '
                 'words.'),
         model=[
          'Dear Ms Delacroix,',
          'I have been a member of Marchfield Library since September '
          'and use it mainly for the children’s section and the '
          'computers, usually on Saturday mornings.',
          'I should like to suggest that one further evening opening '
          'would be of benefit to a considerable number of members. At '
          'present the library closes at 17.30 on four weekdays, and the '
          'only late opening is on Wednesday. Anybody who works until '
          'half past five outside the town, as many people here do, can '
          'therefore use the library on one evening a week or not at '
          'all.',
          'I appreciate that opening hours cost money and that the '
          'service has already been reduced twice. For that reason I am '
          'not suggesting longer hours overall. Would it be possible to '
          'close an hour earlier on Monday, when the building is '
          'noticeably quiet, and to open until 19.00 on Thursday '
          'instead?',
          'I should be glad to help collect the views of other members '
          'if that would be useful, and I would be happy to be told that '
          'this has already been considered.',
          'Yours sincerely,',
          'Benedikt Oyelaran-Haas'],
         notes=[
          'The suggestion costs nothing: an hour moved rather than an '
          'hour added. A proposal that recognises a budget is answered; '
          'one that ignores it is filed.',
          'The writer states how he uses the library before asking for '
          'anything, which establishes that the request comes from a '
          'member rather than from a campaigner.',
          'The last paragraph offers help and accepts in advance that '
          'the answer may be no. Both are small moves that make a reply '
          'likely.'],
         criterion=[('A suggestion that moves a cost rather than '
                     'adding one', 'Task Response'),
                    ('Establishing how you use the service first',
                     'Task Achievement'),
                    ('Offering help and allowing for a refusal',
                     'Task Response')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Suggestions and requests: it would be helpful if',
    explain=('A suggestion to an institution is softened by a '
             'conditional and strengthened by a reason.'),
    examples=['It would be helpful if the library opened later on one '
              'further evening.',
              'Would it be possible to close earlier on Monday '
              'instead?',
              'I should like to suggest that this would benefit a '
              'number of members.',
              'Perhaps the change could be tried for a term and then '
              'reviewed.'],
    task='Rewrite each demand as a suggestion.',
    items=[('Open later on Thursdays.',
            'It would be helpful if the library opened until 19.00 on '
            'Thursdays.'),
           ('Close early on Mondays instead.',
            'Would it be possible to close an hour earlier on Monday, '
            'when the building is quiet?'),
           ('People who work cannot come.',
            'I should like to suggest that the present hours exclude '
            'members who work outside the town.'),
           ('Try it and see.',
            'Perhaps the arrangement could be tried for one term and '
            'then reviewed.'),
           ('Ask the other members.',
            'I should be glad to help collect the views of other members '
            'if that would be useful.')]),
   vocab=[('loan', 'the period for which an item is borrowed'),
          ('renew', 'to extend a loan'),
          ('library card', 'the card that identifies a member'),
          ('proof of identity', 'a document showing who you are'),
          ('e-book', 'a book read on a screen'),
          ('archive', 'a store of old documents or newspapers'),
          ('counter', 'the desk where members are served'),
          ('late opening', 'staying open into the evening')],
   expr=[('I should like to suggest that it would be of benefit to',
          'the opening of a suggestion'),
         ('I appreciate that opening hours cost money',
          'shows you understand the constraint'),
         ('close an hour earlier on Monday instead',
          'proposes a change that costs nothing'),
         ('I would be happy to be told this has been considered',
          'allows the reader to say no')],
   trans=['furthermore', 'in addition', 'instead', 'for that reason'],
  ),

  dict(
   sub='Talking at a distance',
   step=2,
   read=[
    dict(heading='Four people on keeping in touch',
         kind='Four short texts',
         task='Matching features and True/False/Not Given',
         band='gt_short', qtype='Questions 17-22',
         paras=[
          'A  Perpetua: My mother and I speak every Sunday for forty '
          'minutes and we have done for eleven years. We have nothing '
          'in particular to say and that is the point. The weekly '
          'nothing is the relationship.',
          'B  Anselm: I am in four group chats and I have not had a '
          'conversation in any of them. Messages arrive, I react to '
          'them, nobody asks anybody a question. I left one for a month '
          'and nobody noticed, which told me something.',
          'C  Hyacinth: I write letters, two or three a month, to '
          'people who also write them. It is slower and it is not '
          'nostalgia. You say different things when the reply is a week '
          'away, because you are not expecting to be interrupted.',
          'D  Teodor: I call my brother when I am driving, which is the '
          'only time neither of us can do anything else. Twenty minutes, '
          'twice a week, and it works precisely because we are both '
          'trapped.'],
         items=[
          ('Which person values a conversation with no content?',
           ['Perpetua', 'Anselm', 'Hyacinth', 'Teodor'], 0,
           'The weekly nothing is the relationship.'),
          ('Which person tested whether they were missed?',
           ['Perpetua', 'Anselm', 'Hyacinth', 'Teodor'], 1,
           'He left a group chat for a month.'),
          ('Which person says the delay changes what is said?',
           ['Perpetua', 'Anselm', 'Hyacinth', 'Teodor'], 2,
           'You say different things when the reply is a week away.'),
          ('Which person relies on being unable to do anything else?',
           ['Perpetua', 'Anselm', 'Hyacinth', 'Teodor'], 3,
           'Calls while driving, when both are trapped.'),
          ('Hyacinth writes letters because she misses the past.',
           ['True', 'False', 'Not Given'], 1,
           'She says explicitly that it is not nostalgia.'),
          ('Anselm has rejoined the group chat he left.',
           ['True', 'False', 'Not Given'], 2,
           'He says he left it for a month; what happened next is not '
           'stated.')])],
   listen=[
    dict(heading='A short talk: talking at a distance', part='Part 2',
         task='A talk at an adult education class', band='l2',
         qtype='Questions 23-28',
         script=[
          ('Speaker', 'I want to describe what has actually changed '
           'about staying in touch, because the usual version — young '
           'people cannot talk any more — is not what the figures '
           'show.'),
          ('Speaker', 'What has collapsed is the telephone call between '
           'people who are not close. Calls to acquaintances, '
           'colleagues and shops are down by something like eighty per '
           'cent in twenty years, and nobody regrets most of them.'),
          ('Speaker', 'What has not changed much at all is the long '
           'conversation between two people who matter to each other. '
           'That still happens, it still happens by voice, and the '
           'average length has actually risen slightly.'),
          ('Speaker', 'So the picture is not less communication. It is a '
           'split: far more contact, and the same amount of '
           'conversation, with the middle of the range disappearing.'),
          ('Speaker', 'The thing that is genuinely new is what '
           'researchers call presence without conversation. You know '
           'where your friends are, what they ate, who they were with, '
           'and you have not spoken to them for a year. That '
           'combination did not exist before and we do not yet know '
           'what it does.'),
          ('Speaker', 'My practical suggestion is one sentence long. If '
           'you have not had a conversation with somebody for six '
           'months, knowing about them is not the same as knowing them, '
           'and the remedy is forty minutes on a Sunday rather than four '
           'hundred messages.')],
         items=[
          ('Calls to acquaintances and shops are down by about '
           '____________ per cent.', None, 'eighty',
           'A fall measured over about twenty years.'),
          ('The long conversation between two close people still '
           'happens by ____________.', None, 'voice',
           'And has risen slightly in average length.'),
          ('He describes the change as a ____________ rather than a '
           'decline.', None, 'split',
           'More contact, the same conversation.'),
          ('What is genuinely new is ____________ without '
           'conversation.', None, 'presence',
           'Knowing about somebody without speaking to them.'),
          ('His test is whether you have had a conversation in the '
           'last ____________ months.', None, 'six',
           'After which knowing about is not knowing.'),
          ('His remedy is forty minutes on a Sunday rather than four '
           'hundred', ['photographs', 'messages', 'emails',
            'minutes'], 1,
           'Which is the practical point of the talk.')]),
    dict(heading='Two friends on messaging and calling', part='Part 3',
         task='A discussion between two friends', band='l3',
         qtype='Questions 29-34',
         script=[
          ('Anselm', 'You never answer messages and you ring me at '
           'eleven at night.'),
          ('Hyacinth', 'Because a message takes four exchanges to say '
           'what one minute says.'),
          ('Anselm', 'And a call takes me away from whatever I happen '
           'to be doing at that exact moment.'),
          ('Hyacinth', 'Which is the honest version of the '
           'disagreement. You want contact that costs you nothing at '
           'the moment it arrives.'),
          ('Anselm', 'Yes, I suppose so. Is that really so '
           'unreasonable of me?'),
          ('Hyacinth', 'Not at all, and it changes what gets said. '
           'Nobody tells you anything difficult in a message, because '
           'they do not know when you will read it or what mood you will '
           'be in.'),
          ('Anselm', 'That is true and I had not noticed it. Everything '
           'serious I have been told this year was said out loud.'),
          ('Hyacinth', 'By telephone or in person?'),
          ('Anselm', 'Three in person and one by telephone, at eleven at '
           'night, by you.'),
          ('Hyacinth', 'So my unreasonable habit delivered the one piece '
           'of news you could not have been given any other way.'),
          ('Anselm', 'I am not conceding the eleven o’clock part.'),
          ('Hyacinth', 'I will accept ten. What I will not accept is '
           'four hundred messages a week from four groups where nobody '
           'has asked anybody a question since March.'),
          ('Anselm', 'That is a fair description of my group chats and I '
           'resent how accurate it is.')],
         items=[
          ('Hyacinth says a message takes ____________ exchanges to '
           'say what a minute says.', None, 'four',
           'Which is her reason for calling.'),
          ('Anselm wants contact that costs him nothing at the moment '
           'it ____________.', None, 'arrives',
           'Which she calls the honest version of the '
           'disagreement.'),
          ('She says nobody tells you anything ____________ in a '
           'message.', None, 'difficult',
           'Because they do not know when it will be read.'),
          ('Everything serious Anselm was told this year was said',
           ['in writing', 'out loud', 'at work', 'by email'], 1,
           'Three in person and one by telephone.'),
          ('She will accept ____________ o’clock instead of eleven.',
           None, 'ten', 'As a compromise on calling late.'),
          ('In his four group chats, nobody has asked a question since '
           '____________.', None, 'March',
           'Which he admits is an accurate description.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Keeping in touch',
    intro=('Short answers, then the long turn. Say how often, and then '
           'how.'),
    cue=('Describe somebody you keep in touch with at a distance.',
         ['who the person is', 'where they live',
          'how you keep in touch',
          'and explain why you keep in touch in that way']),
    qs=['How do you usually contact friends?',
        'Do you prefer messages or calls?',
        'Now look at the card. You have one minute to make notes.',
        'Is it easier to keep friendships now than in the past?'],
    shape=[('answer', 'My cousin, who moved to Canada six years '
            'ago.'),
           ('support', 'We speak for about half an hour every other '
            'Sunday.'),
           ('follow-up', 'Always a voice call, never messages, which '
            'was her rule rather than mine.'),
           ('support', 'She says messages tell you what somebody did '
            'and not how they are.'),
           ('follow-up', 'I thought that was sentimental and after six '
            'years I think she was simply right.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Has technology made people better or worse at '
                 'communicating?',
         prompt=('Some people believe technology has made people worse '
                 'at communicating. Discuss the advantages and '
                 'disadvantages and give your own opinion. Write at '
                 'least 250 words.'),
         model=[
          'Technology has made contact easier and conversation rarer, '
          'and most arguments about this subject fail because they use '
          'one word for both things. Once they are separated, the '
          'evidence is fairly clear and much less gloomy than the usual '
          'complaint.',
          'The advantages are large and are easy to forget because they '
          'arrived gradually. A person can now maintain a relationship '
          'with somebody on another continent at no cost, which within '
          'living memory required either money or a letter that took a '
          'fortnight. Families separated by work stay families, and '
          'people with unusual interests or rare illnesses find others '
          'like them, which was almost impossible before.',
          'The disadvantage is a change in the shape of contact rather '
          'than a loss of it. Telephone calls to people we are not close '
          'to have fallen by something like eighty per cent in twenty '
          'years, while long conversations between people who matter to '
          'each other have not declined at all. What has disappeared is '
          'the middle: the unplanned conversation with somebody we know '
          'slightly.',
          'There is also something genuinely new, which deserves more '
          'attention than it gets. It is now possible to know where '
          'somebody has been, what they ate and who they were with '
          'without having spoken to them for a year. That feels like '
          'closeness and does none of the work of closeness, and nobody '
          'had this problem before about 2008.',
          'In conclusion, I do not think people communicate worse. They '
          'communicate more and converse about the same amount, with '
          'the acquaintance in between quietly disappearing. The useful '
          'response is not to complain about telephones but to notice '
          'when knowing about somebody has replaced knowing them, and '
          'to telephone that person.'],
         notes=[
          'The thesis separates two words the question treats as one: '
          'contact and conversation. Nearly every strong essay on a '
          'vague topic begins by splitting a term like this.',
          'The fourth paragraph introduces something the prompt did not '
          'mention — presence without conversation — and dates it. An '
          'idea the question did not supply is the cheapest way to lift '
          'this kind of essay.',
          'The conclusion refuses the gloomy framing without dismissing '
          'the concern, and ends on an action. "Telephone that person" '
          'is a better last sentence than a restatement.'],
         criterion=[('Splitting a term the question ran together',
                     'Task Response'),
                    ('One idea the prompt did not supply',
                     'Task Response'),
                    ('A conclusion that ends on an action',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Present perfect for change in habits',
    explain=('A change that has happened over a period and still holds '
             'takes the present perfect, with the period named.'),
    examples=['Calls to acquaintances have fallen by about eighty per '
              'cent in twenty years.',
              'Long conversations have not declined at all.',
              'The middle of the range has quietly disappeared.',
              'We have spoken every Sunday for eleven years.'],
    task='Rewrite each sentence as a change over a stated period.',
    items=[('People do not ring shops now.',
            'Calls to shops and acquaintances have fallen by roughly '
            'eighty per cent over twenty years.'),
           ('Close friends still talk on the phone.',
            'Long conversations between close friends have not declined '
            'and have become slightly longer.'),
           ('We talk every Sunday. We started in 2014.',
            'We have spoken every Sunday for eleven years.'),
           ('Nobody has a casual chat with a neighbour any more.',
            'The unplanned conversation with somebody we know slightly '
            'has largely disappeared.'),
           ('I am in four group chats now.',
            'I have joined four group chats and have not had a '
            'conversation in any of them.')]),
   vocab=[('instant', 'arriving immediately'),
          ('group chat', 'a message conversation among several '
           'people'),
          ('presence', 'the sense of somebody being nearby or in '
           'touch'),
          ('voice call', 'a conversation by telephone'),
          ('voicemail', 'a recorded message left by telephone'),
          ('reply later', 'answering at a time that suits you'),
          ('face to face', 'in person rather than at a distance'),
          ('catch up', 'to exchange news after a period apart')],
   expr=[('it has made contact easier and conversation rarer',
          'the sentence this cycle turns on'),
         ('knowing about somebody is not knowing them',
          'states what presence without conversation lacks'),
         ('nobody tells you anything difficult in a message',
          'explains a difference between media'),
         ('the middle of the range disappearing',
          'describes a change in shape rather than size')],
   trans=['whereas', 'even so', 'by contrast', 'in practice'],
  ),

  dict(
   sub='How a message travels',
   step=3,
   read=[
    dict(heading='From your phone to theirs',
         kind='Process article',
         task='Flow-chart completion and diagram labelling',
         band='gt_work', qtype='Questions 35-40',
         figure=_CALL,
         paras=[
          'The diagram shows the parts of a mobile network and the path '
          'a call takes through them. The useful way to describe it is '
          'to name the parts first and the movement second, because the '
          'movement makes no sense until the parts have names.',
          'A phone does not talk to another phone. It talks to the '
          'nearest mast, over a radio signal that reaches between a few '
          'hundred metres in a city and several kilometres in open '
          'country. The mast passes everything to a base station, and '
          'from there the call travels by cable.',
          'The switching centre is the part people do not imagine. It '
          'asks a database, the subscriber register, where the receiving '
          'phone currently is, because the number tells you who somebody '
          'is and not where they are. The register is updated every time '
          'a phone moves between areas, whether a call is made or '
          'not.',
          'Once the receiver has been located, the switching centre '
          'routes the call to the mast nearest to that phone, and the '
          'last step is another radio signal. If the receiver is on a '
          'landline, the call leaves the mobile network entirely and '
          'joins the fixed cable network instead.',
          'Almost all of this is cable. The radio part is the first few '
          'hundred metres and the last few hundred metres, and '
          'everything between is wire or fibre, including the sections '
          'under the sea. The word "wireless" describes the ends of the '
          'journey rather than the journey.'],
         items=[
          ('Which paragraph explains why the parts should be named '
           'first?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 0,
           'The movement makes no sense until the parts have names.'),
          ('Which paragraph describes how the network finds the '
           'receiver?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 1,
           'The switching centre asks the subscriber register.'),
          ('Which paragraph corrects a common idea about the word '
           'wireless?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 3,
           'Almost all of the journey is cable.'),
          ('A phone talks to the nearest ____________ rather than to '
           'another phone.', None, 'mast',
           'Paragraph 2, over a radio signal.'),
          ('The ____________ register records where a phone '
           'currently is.', None, 'subscriber',
           'Paragraph 3, updated whenever a phone moves.'),
          ('If the receiver is on a landline, the call joins the fixed '
           '____________ network.', None, 'cable',
           'Paragraph 4, leaving the mobile network.')])],
   listen=[
    dict(heading='An engineer on the mobile network', part='Part 4',
         task='A lecture on how a call is routed', band='l4',
         qtype='Questions 41-46',
         figure=_CALL,
         script=[
          ('Engineer', 'Eight boxes on this diagram, and I am going to '
           'describe the parts before the path, because every '
           'explanation that goes the other way confuses people within '
           'about a minute.'),
          ('Engineer', 'Your phone speaks to a mast. Not to the other '
           'phone, ever. The radio link reaches a few hundred metres in '
           'a city, where masts are close together, and several '
           'kilometres in open country, where they are not.'),
          ('Engineer', 'The mast is wired to a base station, and from '
           'the base station onwards the call is on cable. That is the '
           'first thing people get wrong about the word wireless: the '
           'radio is the first few hundred metres and the last few '
           'hundred metres only.'),
          ('Engineer', 'Now the interesting box. The switching centre '
           'has to find the person you are calling, and a telephone '
           'number does not contain a location. So it asks the '
           'subscriber register, which is a database recording which '
           'area each phone is currently in, updated every time a phone '
           'crosses a boundary, whether it is being used or not.'),
          ('Engineer', 'Then the call is routed out to whichever mast '
           'is nearest that phone, and the last link is radio again. If '
           'the person you are calling is on a landline, the call leaves '
           'us altogether and goes onto the fixed network.'),
          ('Engineer', 'One more thing, which is the part I like. If '
           'you move during a call, your phone is handed from one mast '
           'to the next while you are speaking, and the handover takes '
           'under half a second. You have never noticed it, which is the '
           'whole achievement.')],
         items=[
          ('A phone speaks to a ____________ rather than to another '
           'phone.', None, 'mast',
           'Over a radio link of a few hundred metres to several '
           'kilometres.'),
          ('From the base station onwards, the call travels on '
           '____________.', None, 'cable',
           'Which accounts for most of the journey.'),
          ('A telephone number does not contain a ____________.',
           None, 'location',
           'Which is why the register is needed.'),
          ('The subscriber register is updated whenever a phone '
           'crosses a ____________.', None, 'boundary',
           'Whether a call is being made or not.'),
          ('If the receiver is on a landline, the call goes onto the',
           ['radio network', 'fixed network', 'satellite link',
            'local mast'], 1,
           'Leaving the mobile network entirely.'),
          ('A handover between masts takes under half a '
           '____________.', None, 'second',
           'Which is why nobody notices it.')])],
   speak=dict(
    part='Part 3', focus='Infrastructure people never see',
    intro=('Three or four sentences. Describe how something works '
           'rather than whether you like it.'),
    qs=['Do people understand how the technology they use works?',
        'Does it matter whether they do?',
        'What happens when such systems fail?',
        'Should these things be taught at school?'],
    shape=[('answer', 'Almost nobody does, including me until '
            'recently.'),
           ('support', 'I assumed a mobile call travelled through the '
            'air the whole way.'),
           ('follow-up', 'In fact the radio part is the first few '
            'hundred metres and the last few hundred.'),
           ('support', 'Everything in between is cable, including '
            'under the sea.'),
           ('follow-up', 'It matters mainly when something breaks, '
            'because people blame the wrong part and demand the wrong '
            'repair.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='How a mobile call is routed',
         prompt=('The diagram below shows the parts of a mobile '
                 'telephone network and how a call travels through '
                 'them. Summarise the information by selecting and '
                 'reporting the main features. Write at least 150 '
                 'words.'),
         figure=_CALL,
         model=[
          'The diagram shows the components of a mobile telephone '
          'network and the route a call follows through them. Overall, '
          'a call passes through radio links only at its two ends, with '
          'the whole of the central journey carried on cable, and a '
          'separate database is consulted to establish where the '
          'receiving phone is.',
          'The network has eight components. At each end there is a '
          'telephone and a mast; behind the mast is a base station; and '
          'at the centre are a switching centre and a subscriber '
          'register. A fixed cable network is also connected to the '
          'switching centre.',
          'A call begins as a radio signal from the caller’s phone to '
          'the nearest mast, which passes it to a base station. From '
          'there the call is carried by cable to the switching centre, '
          'which consults the subscriber register in order to find the '
          'area in which the receiving phone is located.',
          'The switching centre then routes the call to the mast '
          'serving that area, and a final radio signal carries it to the '
          'receiver’s phone. Where the receiver is using a landline, '
          'the call is instead passed to the fixed cable network.'],
         notes=[
          'The Overall statement says what is distinctive about the '
          'system — radio at the ends, cable in the middle, a database '
          'consulted — rather than counting boxes.',
          'The components are named in their own paragraph before any '
          'movement is described. On a device diagram this order is the '
          'structure the task is testing.',
          'The conditional ending — where the receiver is on a landline '
          '— is reported separately, because it is an alternative path '
          'rather than a stage in the main one.'],
         criterion=[('An Overall naming what is distinctive',
                     'Task Achievement'),
                    ('Components before movement',
                     'Coherence and Cohesion'),
                    ('The alternative path reported separately',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Passive with a technical system',
    explain=('A technical description uses the passive and names the '
             'component that acts, not a person.'),
    examples=['The call is carried by cable to the switching centre.',
              'The subscriber register is consulted to locate the '
              'receiver.',
              'The call is handed from one mast to the next as the '
              'caller moves.',
              'Where the receiver is on a landline, the call is passed '
              'to the fixed network.'],
    task='Rewrite each sentence in the passive, naming the component.',
    items=[('The mast sends it to the base station.',
            'The signal is passed from the mast to the base station.'),
           ('The switching centre looks up where the phone is.',
            'The subscriber register is consulted to establish where the '
            'receiving phone is.'),
           ('The network moves the call between masts as you drive.',
            'The call is handed from one mast to the next as the caller '
            'moves.'),
           ('Cables carry the call most of the way.',
            'The call is carried on cable for the whole of the central '
            'part of its journey.'),
           ('They update the register when a phone moves.',
            'The register is updated whenever a phone crosses into '
            'another area.')]),
   vocab=[('mast', 'a tall structure carrying radio equipment'),
          ('base station', 'the equipment serving one or more masts'),
          ('switching centre', 'the point where calls are directed'),
          ('packet', 'a small block of data sent over a network'),
          ('routed', 'sent by a particular path'),
          ('signal strength', 'how strong a radio link is'),
          ('fixed line', 'a telephone connected by cable'),
          ('passed between masts', 'moved from one mast to another '
           'during a call')],
   expr=[('the call is handed from one mast to the next as',
          'describes movement during a call'),
         ('a number tells you who somebody is and not where they are',
          'explains why a database is needed'),
         ('the radio part is the first and last few hundred metres',
          'corrects a common assumption'),
         ('you have never noticed it, which is the whole achievement',
          'describes successful engineering')],
   trans=['first', 'at this point', 'finally', 'in either case'],
  ),

  dict(
   sub='What a language carries',
   step=3,
   read=[
    dict(heading='Words a language has and another does not',
         kind='Academic passage',
         task='Matching headings, True/False/Not Given and summary '
              'completion',
         band='acad', qtype='Questions 47-54',
         paras=[
          'Every language contains words that another language cannot match '
          'with a single word of its own, and lists of these circulate '
          'endlessly online with a confident claim attached to them: that '
          'speakers of the language in question experience something the '
          'rest of us cannot reach. The lists themselves are perfectly '
          'accurate and the claim does not follow from them at all, and '
          'seeing exactly why is one of the most useful exercises available '
          'in reading evidence.',
          'The first thing to notice, and the thing the lists quietly depend '
          'on your not noticing, is that a missing word is not the same as a '
          'missing idea. English has no single word of its own for the '
          'German Schadenfreude, and English speakers have always understood '
          'pleasure at another person’s misfortune perfectly well, which is '
          'precisely why they borrowed the word rather than being puzzled by '
          'what it meant. A language with no single word for something '
          'describes it in four words instead, and the speakers of that '
          'language are not thereby prevented from having the idea.',
          'What a single word genuinely does change is cost. An idea that '
          'takes one word is cheaper to use than an idea that takes a whole '
          'sentence, so it is used more often, appears in more arguments, '
          'and arrives in the mind faster when something has to be said '
          'quickly and without preparation. Over a lifetime that difference '
          'in cost accumulates into a difference in what gets discussed at '
          'all. That is a real effect and it operates on frequency rather '
          'than on capability, which is a far smaller claim than the lists '
          'make and a much better supported one.',
          'Translation shows the same thing from the other direction. A word '
          'can be translated accurately without the sense surviving the '
          'journey, because words carry register, history and the company '
          'they usually keep, none of which crosses with the definition. The '
          'usual example is that two words naming the same object may be '
          'polite in one language and faintly insulting in the other, and no '
          'dictionary entry conveys that difference to a learner who has not '
          'been told.',
          'What follows is modest and worth holding. Languages differ in '
          'what they make easy rather than in what they make possible, and '
          'that difference matters most in exactly the situations where '
          'effort is scarce: quick speech, translation under time pressure, '
          'and arguments conducted at speed in front of other people.'],
         items=[
          ('Choose the best heading for paragraph 2.',
           ['Lists of untranslatable words',
            'A missing word is not a missing idea',
            'The cost of an idea', 'What translation loses'], 1,
           'Schadenfreude, understood and then borrowed.'),
          ('Choose the best heading for paragraph 3.',
           ['Frequency rather than capability',
            'Why lists circulate', 'Register and history',
            'Speed and effort'], 0,
           'One word is cheaper to use, so it is used more.'),
          ('Choose the best heading for paragraph 4.',
           ['Borrowed words', 'What a dictionary cannot convey',
            'A modest conclusion', 'Four words instead of one'], 1,
           'Register, history and the company a word keeps.'),
          ('English speakers could not understand Schadenfreude before '
           'borrowing the word.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 2 says they understood it perfectly well.'),
          ('The writer believes lists of untranslatable words are '
           'inaccurate.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 1 says the lists are accurate.'),
          ('The writer believes some languages are better for '
           'philosophy.', ['True', 'False', 'Not Given'], 2,
           'No comparison between languages of that kind is made.'),
          ('An idea expressed in one word is ____________ to use '
           'than one that needs a sentence.', None, 'cheaper',
           'Paragraph 3, so it is used more often.'),
          ('Languages differ in what they make ____________, not in '
           'what they make possible.', None, 'easy',
           'The final paragraph, which is the modest conclusion.')])],
   listen=[
    dict(heading='A lecture on translation and meaning', part='Part 4',
         task='A lecture on what translation loses', band='l4',
         qtype='Questions 55-60',
         script=[
          ('Lecturer', 'I am going to talk about what is lost in '
           'translation, and I want to narrow the question first, '
           'because it is usually asked so broadly that it cannot be '
           'answered.'),
          ('Lecturer', 'Here is what is not lost: the content. Anything '
           'that can be said in one language can be said in another, '
           'given enough words. A language without a word for something '
           'simply uses four words instead, and nothing whatever is '
           'unsayable, which is the first thing to get straight.'),
          ('Lecturer', 'What is lost is three things, and they are '
           'worth separating. Register first: whether a word is formal, '
           'affectionate, rude or childish. Dictionaries record meaning '
           'and rarely record register, and that is where most '
           'translation accidents happen.'),
          ('Lecturer', 'Second, the company a word keeps. In English, '
           '"slim" and "skinny" describe exactly the same shape and '
           'carry opposite judgements, and no dictionary in either '
           'direction will tell you that. A learner finds out by being '
           'laughed at.'),
          ('Lecturer', 'Third, and most interesting, the cost. A word is '
           'cheaper than a sentence, so what a language has a word for '
           'gets said more often. That is not about what people can '
           'think; it is about what they bother to say, which is a '
           'smaller claim and far better supported.'),
          ('Lecturer', 'So the conclusion I want you to leave with is '
           'this. A word can be translated without the sense surviving '
           'the journey, and a culture can still be read accurately in '
           'translation, provided the reader understands that the '
           'register and the cost have been quietly stripped out along '
           'the way.')],
         items=[
          ('He says what is not lost in translation is the '
           '____________.', None, 'content',
           'Because anything can be said with enough words.'),
          ('The first thing lost is ____________: whether a word is '
           'formal, rude or affectionate.', None, 'register',
           'Which dictionaries rarely record.'),
          ('"Slim" and "skinny" describe the same shape and carry '
           'opposite ____________.', None, 'judgements',
           'Which no dictionary in either direction conveys.'),
          ('The third loss is the ____________ of expressing an '
           'idea.', None, 'cost',
           'Because a word is cheaper than a sentence.'),
          ('He says that is a claim about what people bother to '
           '____________ rather than what they can think.', None,
           'say', 'Which he calls far better supported.'),
          ('A culture can be read accurately in translation provided '
           'the reader knows what has been', ['added', 'stripped '
            'out', 'invented', 'repeated'], 1,
           'Namely the register and the cost of saying it.')])],
   speak=dict(
    part='Part 3', focus='Translation and what gets lost',
    intro=('Four sentences. Give an example if you have one in any '
           'language you know.'),
    qs=['Is it possible to translate everything?',
        'What is lost when a book is translated?',
        'Should everybody learn a second language?',
        'Do people behave differently in a second language?'],
    shape=[('answer', 'The content, yes; the way it lands, not '
            'always.'),
           ('support', 'A word can be translated without the sense '
            'surviving.'),
           ('follow-up', 'Slim and skinny mean the same shape and '
            'carry opposite judgements.'),
           ('support', 'Dictionaries record meaning and almost never '
            'record that.'),
           ('follow-up', 'So a translator has to choose which of the '
            'two to lose, and the reader never knows a choice was '
            'made.')]),
   write=[
    dict(task='Task 2 · planning', fork=None,
         heading='Planning: should children learn a second language '
                 'from five?',
         prompt=('Should children begin learning a second language at '
                 'five? Brainstorm nine ideas, keep those of roughly '
                 'equal weight, and write the plan. Twelve minutes.'),
         plan=('Children should begin a second language at five, '
               'because the advantages that depend on age cannot be '
               'obtained later, although the common argument about '
               'intelligence is not one of them',
               [('Some gains are available only early',
                 ['pronunciation reaches a native range only if '
                  'started young',
                  'early learners show less anxiety about speaking '
                  'badly']),
                ('The usual arguments are weaker than the good ones',
                 ['claims about general intelligence rest on studies '
                  'that have not repeated well',
                  'the strongest case is practical rather than '
                  'cognitive'])]),
         notes=[
          'This page is about weight. "It is useful for holidays" and '
          '"it may change how a child thinks" are not comparable claims, '
          'and putting them side by side as two paragraphs makes the '
          'essay look unbalanced.',
          'The thesis gives away a popular argument in its final clause. '
          'Discarding a weak argument on your own side is read as '
          'confidence, and it protects you from an examiner who knows '
          'the evidence.',
          'Two headings is enough for 250 words when each carries two '
          'supports. Three thin headings score lower than two developed '
          'ones.'],
         criterion=[('Main ideas of roughly equal weight',
                     'Task Response'),
                    ('A weak argument on your own side discarded',
                     'Task Response')],
         instruct='  Twelve minutes, timed. You write this essay in cycle '
                  '5.',
         lines=12)],
   gram=dict(
    point='Reporting claims at a distance: is said to',
    explain=('A claim you are reporting rather than endorsing needs a '
             'phrase that marks the distance and names whose claim it '
             'is.'),
    examples=['Speakers of the language are said to experience '
              'something others cannot.',
              'The claim is widely repeated and does not follow from '
              'the evidence.',
              'It is often asserted that language determines thought.',
              'According to the lecturer, register is where most '
              'accidents happen.'],
    task='Rewrite each claim so that it is reported rather than '
         'asserted.',
    items=[('Language changes how people think.',
            'It is often claimed that the language a person speaks '
            'changes how they think.'),
           ('Some words cannot be translated.',
            'Certain words are said to be untranslatable, although they '
            'can be explained in a sentence.'),
           ('Bilingual children are cleverer.',
            'Bilingual children are sometimes said to be more '
            'intelligent, though the studies have not repeated well.'),
           ('Dictionaries are unreliable.',
            'Dictionaries are reported to record meaning accurately and '
            'register poorly.'),
           ('Early learners speak better.',
            'Early learners are generally found to reach a wider range of '
            'pronunciation than later ones.')]),
   vocab=[('word for word', 'translated directly'),
          ('untranslatable', 'having no single-word equivalent'),
          ('formality', 'how formal or informal an expression is'),
          ('what a word hints at', 'the feelings it brings with '
           'it'),
          ('borrowed word', 'a word taken from another language'),
          ('plain meaning', 'what a word refers to, without '
           'colouring'),
          ('turn of phrase', 'a particular way of saying something'),
          ('fluent', 'able to speak easily and accurately')],
   expr=[('a word can be translated without the sense surviving',
          'the sentence this cycle turns on'),
         ('a missing word is not a missing idea',
          'corrects the usual claim'),
         ('languages differ in what they make easy',
          'states the modest version of a famous claim'),
         ('the company a word keeps',
          'names what dictionaries leave out')],
   trans=['in principle', 'in practice', 'more importantly', 'that '
          'said'],
  ),

  dict(
   sub='Whether a language shapes thought',
   step=4,
   read=[
    dict(heading='A famous claim and what survived of it',
         kind='Academic passage',
         task='Matching information, True/False/Not Given and short '
              'answer',
         band='acad', qtype='Questions 61-68',
         paras=[
          'In the middle of the twentieth century it was widely argued that '
          'the language a person speaks determines what that person is able '
          'to think. The claim was stated boldly, illustrated with examples '
          'that later turned out to be factually wrong, and abandoned by '
          'most serious researchers within about a generation of being '
          'proposed. What happened next is considerably more interesting '
          'than the collapse itself, and it is rarely described outside the '
          'research literature.',
          'The strong version of the claim said that an idea for which your '
          'language has no words is simply unavailable to you. It was tested '
          'directly, and it failed. Speakers of languages with only two '
          'colour words distinguish exactly the same colours as everybody '
          'else when they are asked to sort coloured chips into groups, and '
          'people routinely understand ideas for which their language has no '
          'word at all, which is how words come to be borrowed between '
          'languages in the first place.',
          'A weaker version of the same idea was then proposed, and that one '
          'has held up surprisingly well under testing. It says that a '
          'language makes certain distinctions obligatory rather than '
          'optional, and that distinctions which are obligatory get noticed '
          'and remembered. If a language requires a speaker to mark whether '
          'they saw an event or were told about it, speakers of that '
          'language are measurably better at remembering where their '
          'information came from.',
          'The clearest evidence comes from languages that use compass '
          'directions where English uses left and right. Speakers of those '
          'languages, asked to point north inside an unfamiliar building, do '
          'so accurately, and English speakers do not. The skill is real, it '
          'is substantial, and it appears to be the product of having to '
          'supply a compass direction in every ordinary sentence about where '
          'anything is.',
          'What the weak version does not claim is that these speakers '
          'perceive space differently in some deep sense. They have '
          'practised something daily since childhood because their '
          'grammar required it. That is an ordinary explanation and it '
          'accounts for the evidence without needing anything '
          'mysterious.',
          'The lesson for a reader of research is more useful than the '
          'finding itself. A bold claim collapsed, a modest claim survived, '
          'and the popular version in circulation is still the bold one, '
          'because it is more interesting. Checking which version of a claim '
          'the evidence actually supports is a habit worth more than most of '
          'what is taught about evaluating sources, and it costs about a '
          'minute.'],
         items=[
          ('Which paragraph describes the test that the strong claim '
           'failed?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3',
            'Paragraph 4'], 1,
           'Colour sorting and borrowed words.'),
          ('Which paragraph gives the clearest evidence for the weak '
           'version?',
           ['Paragraph 2', 'Paragraph 3', 'Paragraph 4',
            'Paragraph 5'], 2,
           'Pointing north inside an unfamiliar building.'),
          ('Which paragraph explains the skill in ordinary terms?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5',
            'Paragraph 6'], 2,
           'Daily practice required by the grammar.'),
          ('The strong version of the claim was supported by '
           'experiment.', ['True', 'False', 'Not Given'], 1,
           'Paragraph 2 says it was tested and failed.'),
          ('Speakers of languages using compass directions can point '
           'north indoors.', ['True', 'False', 'Not Given'], 0,
           'Paragraph 4 states this about compass-direction languages.'),
          ('The writer believes the weak version will also be '
           'abandoned.', ['True', 'False', 'Not Given'], 2,
           'No prediction of that kind is made.'),
          ('What does the weak version say a language makes '
           'obligatory?', None, 'certain distinctions',
           'Paragraph 3, and obligatory distinctions get noticed.'),
          ('The popular version still in circulation is the '
           '____________ one.', None, 'bold',
           'The final paragraph, because it is more interesting.')])],
   listen=[
    dict(heading='Two linguists disagree', part='Part 4',
         task='A recorded discussion', band='l4',
         qtype='Questions 69-74',
         script=[
          ('Chair', 'Professor Achterberg works on language and memory. '
           'Dr Oyinlola-Reyes is a critic of that research. Each begins '
           'with the strongest point against their own position.'),
          ('Achterberg', 'Mine is that my findings are small and are '
           'reported as though they were large. A difference of eight '
           'per cent in a memory task becomes "your language changes '
           'your mind" by the time it reaches a newspaper, and I have '
           'not always corrected that as loudly as I should.'),
          ('Oyinlola-Reyes', 'And mine is that I attack the strong '
           'version, which nobody serious has defended since about '
           'nineteen seventy. It is easier to knock down and it is not '
           'what my colleagues actually claim.'),
          ('Chair', 'Thank you both. So after those two admissions, '
           'where does the real disagreement between you lie?'),
          ('Oyinlola-Reyes', 'On what the compass-direction studies '
           'show. He thinks the grammar produces the skill. I think '
           'people who live in open country navigate by landmarks and '
           'the grammar follows the landscape rather than causing '
           'anything.'),
          ('Achterberg', 'Which is a serious objection, and the honest '
           'answer is that both explanations may be true at the same '
           'time, with the grammar and the landscape reinforcing one '
           'another.'),
          ('Oyinlola-Reyes', 'There is one test that would separate '
           'them. Speakers who grew up in cities, with the same '
           'grammar.'),
          ('Achterberg', 'There are about four hundred such speakers and '
           'nobody has studied them properly. It is the obvious study '
           'and it has not been done because it is expensive and '
           'unglamorous.'),
          ('Oyinlola-Reyes', 'Then we agree about what should happen '
           'next, which is considerably more than either of us expected '
           'when we came in this morning.')],
         items=[
          ('He admits a difference of ____________ per cent is '
           'reported as a transformed mind.', None, 'eight',
           'By the time it reaches a newspaper.'),
          ('She admits she attacks the ____________ version, which '
           'nobody has defended since about 1970.', None, 'strong',
           'Because it is easier to knock down.'),
          ('She argues the grammar follows the ____________ rather '
           'than causing the skill.', None, 'landscape',
           'Because people in open country navigate by landmarks.'),
          ('He replies that both explanations may be true at',
           ['different times', 'once', 'different ages', 'a '
            'distance'], 1,
           'Which he calls the honest answer.'),
          ('The test that would separate them involves speakers who '
           'grew up in ____________.', None, 'cities',
           'Speakers with the same grammar but a city childhood.'),
          ('About ____________ such speakers exist and have not been '
           'studied.', None, 'four hundred',
           'Because the study is expensive and unglamorous.')])],
   speak=dict(
    part='Part 3', focus='Language and the way people see things',
    intro=('Four or five sentences. Separate a strong claim from a '
           'weak one.'),
    qs=['Does the language you speak change how you think?',
        'Is it an advantage to grow up with two languages?',
        'Can you judge a claim like this without being a '
        'researcher?',
        'Why do strong claims spread further than careful ones?'],
    shape=[('answer', 'The strong version did not survive; a weaker '
            'one did.'),
           ('support', 'Having no word for something does not stop '
            'anybody understanding it.'),
           ('follow-up', 'What does seem true is that distinctions a '
            'language forces you to make get noticed.'),
           ('support', 'Speakers whose language uses compass '
            'directions can point north indoors.'),
           ('follow-up', 'Which is practice rather than a different '
            'mind, and the ordinary explanation is usually the right '
            'one.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Does learning another language change how you '
                 'think?',
         prompt=('Some people say that learning another language '
                 'changes the way you think. To what extent do you '
                 'agree? Write at least 250 words.'),
         model=[
          'The claim that language changes thought is true in a modest '
          'version and false in the version most people mean by it. '
          'Separating the two is not a quibble: the strong claim has '
          'been tested and rejected, while the weak one is supported by '
          'good evidence and is far more interesting than it sounds.',
          'The strong claim is that an idea your language has no word '
          'for is unavailable to you. This was argued seriously in the '
          'middle of the last century and does not survive testing. '
          'People understand ideas their language lacks a word for, '
          'which is precisely how words come to be borrowed between '
          'languages, and speakers of languages with very few colour '
          'terms sort colours exactly as everybody else does.',
          'The weak claim is different. It says that what a language '
          'forces you to specify, you get into the habit of noticing. '
          'Where a grammar requires a speaker to say whether they '
          'witnessed an event or were told about it, those speakers '
          'remember the source of their information better. Where a '
          'language uses compass directions instead of left and right, '
          'its speakers can point north inside an unfamiliar building, '
          'and English speakers cannot.',
          'The obvious objection is that this is practice rather than '
          'thought. Somebody who has had to supply a direction in every '
          'sentence since childhood will be good at directions, and no '
          'deep difference in perception is needed to explain it. I '
          'think that objection is correct and that it does not defeat '
          'the claim: a habit practised daily for twenty years because '
          'your grammar demanded it is a real difference in what you '
          'notice, whatever we call it.',
          'In conclusion, learning another language changes what you '
          'find easy to say and, through that, what you routinely '
          'notice. It does not give you thoughts that were previously '
          'unavailable, and the popular version of this claim survives '
          'mainly because it is the more exciting of the two.'],
         notes=[
          'Structure 9: a position, an objection, a rebuttal. The '
          'rebuttal concedes that the objection is correct and then '
          'shows it does not reach the conclusion, which is a stronger '
          'move than denying it.',
          'Both versions of the claim are stated precisely before either '
          'is judged. On a topic where a popular claim and a researched '
          'claim differ, naming both is most of the work.',
          'The last sentence explains why the wrong version is the '
          'famous one. Accounting for a misconception, rather than '
          'merely correcting it, is a mark of control.'],
         criterion=[('Two versions of the claim stated precisely',
                     'Task Response'),
                    ('A rebuttal that concedes and then limits',
                     'Task Response'),
                    ('Accounting for why the wrong version spread',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'plan.',
         lines=18)],
   gram=dict(
    point='Evaluating evidence: the study showed, the study did not '
          'show',
    explain=('Reporting research accurately means saying what was '
             'measured, not what it suggests.'),
    examples=['The study showed an eight per cent difference in a '
              'memory task.',
              'It did not show that speakers perceive space '
              'differently.',
              'The strong version did not survive; a weaker one did.',
              'What was measured was accuracy in pointing, not '
              'perception.'],
    task='Rewrite each overstatement as what the study actually '
         'showed.',
    items=[('The study proved language changes your mind.',
            'The study showed a small difference in a memory task '
            'between speakers of two languages.'),
           ('They see space differently.',
            'They point north more accurately indoors, which is a '
            'difference in a measured skill.'),
           ('Having no word means you cannot understand it.',
            'Speakers routinely understand ideas their language has no '
            'single word for.'),
           ('Bilingual people think better.',
            'Studies claiming general advantages for bilingual speakers '
            'have often failed to repeat.'),
           ('Grammar causes the skill.',
            'The skill may follow from the grammar, from the landscape, '
            'or from both, and the study separating them has not been '
            'done.')]),
   vocab=[('strong version', 'the boldest form of a claim'),
          ('weak version', 'a more limited form of the same claim'),
          ('replicate', 'to repeat a study and get the same result'),
          ('what was measured', 'the actual quantity recorded'),
          ('obligatory', 'required by the grammar'),
          ('habit of noticing', 'what a person routinely attends to'),
          ('ordinary explanation', 'an account needing nothing '
           'unusual'),
          ('in circulation', 'being repeated among the public')],
   expr=[('the strong version did not survive; a weaker one did',
          'the sentence this unit ends on'),
         ('what a language forces you to specify, you notice',
          'states the weak claim in nine words'),
         ('that is practice rather than perception',
          'offers the ordinary explanation'),
         ('it survives because it is the more exciting of the two',
          'accounts for a misconception')],
   trans=['admittedly', 'nevertheless', 'in short', 'on balance'],
  ),
 ],
 technique=dict(
  title='Matching Features: understand the claim, let the name wait',
  body=('Matching Features gives you a list of statements and a list of '
        'names — researchers, places, companies, four residents of a '
        'street — and asks which name goes with which statement. '
        'Candidates find it slow, and nearly always for the same '
        'avoidable reason: they read a statement, then hunt through the '
        'passage for a name, then read around that name, then go back '
        'to the statement. That is three journeys for one mark. Do it '
        'the other way. Read the statement until you understand the '
        'claim it makes, in your own words, and deliberately ignore the '
        'names while you do it. Then read the passage once, and each '
        'time a name appears, ask which of your claims that person is '
        'making. You are matching from the passage to the list rather '
        'than from the list to the passage, which is one journey '
        'instead of three. Two warnings. The names are not in passage '
        'order and the instructions will often say a name may be used '
        'more than once, so do not stop when you have used each one. '
        'And the commonest trap is a passage in which one person '
        'mentions another person’s view in order to disagree with it; '
        'the claim belongs to whoever holds it, not to whoever said the '
        'words.'),
  panel=[('Understand the claim first',
          'In your own words, with the names ignored.'),
         ('Then read the passage once',
          'At each name, ask which claim this is.'),
         ('Match passage to list',
          'One journey instead of three.'),
         ('Watch the reported view',
          'A person quoting somebody else is not making that '
          'claim.')],
  task='Do the four Matching Features items in cycle 2 by understanding '
       'all four statements before you look at any name.',
  qs=['Did you understand each claim before reading the passage?',
      'How many times did you read the passage in total?',
      'Did you check whether a name could be used twice?',
      'Did any text mention a view in order to reject it?',
      'Which took longer: understanding, or searching?']),
 outlining=dict(
  title='Essay to outline on a published model, then judge the plan',
  body=('Until now you have reconstructed outlines in order to learn '
        'the shape. This page asks you to do something harder: '
        'reconstruct one and then say what is wrong with it. Take the '
        'cycle 5 model essay, write out the plan it must have had, and '
        'then judge that plan against the six tests from unit 1. You '
        'will find at least one thing to criticise, because every real '
        'essay contains a compromise. Perhaps one body paragraph is '
        'carrying two ideas because there was no room for a third '
        'paragraph. Perhaps a support is an assertion rather than a '
        'fact. Perhaps the concession in the fourth paragraph is doing '
        'the work the introduction should have done. Finding these is '
        'not disrespect to the model; it is the point. A student who '
        'can see the joins in a good essay is reading like a writer '
        'rather than a reader, and that is the last thing this volume '
        'has to teach before the timed papers.'),
  frame=('Children should begin a second language at five, because the '
         'advantages that depend on age cannot be obtained later, '
         'although the common argument about intelligence is not one '
         'of them',
         [('Some gains are available only early',
           ['pronunciation reaches a native range only if started '
            'young',
            'early learners show less anxiety about speaking badly']),
          ('The usual arguments are weaker than the good ones',
           ['claims about general intelligence rest on studies that '
            'have not repeated well',
            'the strongest case is practical rather than cognitive'])]),
  task='Reconstruct the plan behind the cycle 5 model essay and judge '
       'it against the six tests, naming at least one weakness.',
  qs=['What is the thesis, in one sentence?',
      'Does any body paragraph carry two ideas?',
      'Is every support a fact rather than an assertion?',
      'Where did the writer compromise, and why?',
      'What would you change if you were writing it?'],
  answers=['usually the last sentence of the first paragraph',
           'in a five-paragraph essay, frequently the third',
           'in a good essay, about three quarters are',
           'usually because of the word count',
           'that question is the whole exercise']),
 candos=['I can read a library notice for its numbers',
         'I can write a suggestion that moves a cost rather than '
         'adding one',
         'I can describe a system by naming its parts before its '
         'movement',
         'I can do Matching Features in one pass through a passage',
         'I can tell a strong version of a claim from a weak one'],
 tip=('On Matching Features, understand all the statements before you '
      'look for any name. Matching from the passage to the list is one '
      'journey; matching from the list to the passage is three.'),
)
