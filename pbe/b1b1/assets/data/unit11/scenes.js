/* Unit 11 — the acted dialogues. Every line is the book's own. */
PBE5.scene('u11-11-1', {
  set: 'showroom',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'You said to telephone the customer who has not paid since '
            + 'September. There are four.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Four?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Tarabishi, Haffar, the school and the man in Jaramana. I '
            + 'telephoned Tarabishi because he was first in the book.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I meant the one with the standing order.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Then that is two clauses and you gave me one. The customer who has '
            + 'not paid since September is four people. The customer with a '
            + 'standing order who has not paid since September is one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And I have had you telephone a man who owes us nothing.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'He was very pleasant about it. He thought we were chasing him for '
            + 'the September order he paid in cash and he has the receipt, which '
            + 'he read to me.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'May I. ⚠ A defining clause has one job: to cut a group down to the '
            + 'one you mean. If it leaves four, it has not finished, and you add '
            + 'clauses until one is left.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How do I know when it is enough?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Count what is left. Not does it sound clear — count. The '
            + 'customer who has not paid: four. The customer with a standing '
            + 'order who has not paid: one. ⚠ A defining clause is right when the '
            + 'count is one, and nothing else tells you.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And if there is genuinely more than one?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Then say so and name them. Four customers have not paid since '
            + 'September: … ⚠ A plural you have hidden inside a singular is the '
            + 'thing that sent Hala to the wrong telephone number.' }
  ]
});

PBE5.scene('u11-11-1-pair', {
  set: 'showroom',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'You said to find the invoice that was wrong. There are three.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Three?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Tarabishi 46,000 over, the school 8,000 under, and one with no '
            + 'reference at all. I pulled the school one because it was on top.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I meant the one priced from the old list.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then that is a clause and you gave me an adjective. ⚠ The wrong '
            + 'invoice is three. The invoice which was priced from the list of '
            + 'the 5th is one.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And I have had you pull the one that is 8,000 under, which nobody '
            + 'has complained about.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And which I have now queried with the school, who did not know.' }
  ]
});

PBE5.scene('u11-11-2', {
  set: 'showroom',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Your letter says our supplier who is in Aleppo has raised her price.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'She has.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'How many suppliers do we have?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nine.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'And how many are in Aleppo?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One. Ms Shamsi.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then with no commas you are telling the bank we have several '
            + 'suppliers and distinguishing one of them by being in Aleppo — '
            + 'which is true and is not what you meant. You meant Ms Shamsi, who '
            + 'is in Aleppo, has raised her price: the name identifies her and '
            + 'the clause adds something.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the commas mean the clause is not doing the identifying.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'The commas mean you have already identified her and are adding a '
            + 'fact. ⚠ And it matters here because the bank is reading this to '
            + 'understand our supply, and our supplier who is in Aleppo invites '
            + 'them to ask about the other eight.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which I would rather they did not, because two of them are the '
            + 'same company under two names.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Which you should tell them before they find it, but not in this '
            + 'letter and not by accident in a relative clause.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the rule is: name first, then add.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Name first, then add, and the adding goes between commas. ⚠ And if '
            + 'you cannot name, you are defining and not adding, and the commas '
            + 'have to come out.' }
  ]
});

PBE5.scene('u11-11-2-pair', {
  set: 'showroom',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Your letter says our site which opened in June has traded every week.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It has.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How many sites do we have?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And how many opened in June?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'One.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then with no commas you are distinguishing one site from others by '
            + 'its opening date, which tells the bank to ask how many we have and '
            + 'when each opened. You meant our second site, which opened on 8 '
            + 'June, has traded every week.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So the commas say I have already identified it.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Name first — or second site, which is a name of a kind — then add.' }
  ]
});

PBE5.scene('u11-11-3', {
  set: 'showroom',
  arr: 2,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'The policy covers stock held at the premises where the business is '
            + 'carried on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is both sites.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Both sites and nothing else. Where are the five hundred cartons?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'In the container. In the yard.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Is the yard a premises where the business is carried on?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…The yard is at the Mezzeh premises. The container is in the yard.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Then it probably is, and probably is doing a great deal of work in '
            + 'a sentence about five hundred cartons. ⚠ The clause makes the '
            + 'cover follow the place and not the goods, so every question about '
            + 'whether something is covered becomes a question about what counts '
            + 'as the premises.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the wrap at Ms Shamsi\'s, waiting for us?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Not covered by this clause at all, because it is not at a premises '
            + 'where our business is carried on. ⚠ Which nobody has ever thought '
            + 'about, because the clause reads as though it is about our stock '
            + 'and it is actually about our addresses.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is there a wording that follows the goods?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Stock whose property in the goods has passed to the insured, which '
            + 'follows the ownership wherever it is. ⚠ Whose relates by '
            + 'possession and where relates by place, and for stock in transit '
            + 'the difference is the whole policy.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I would never have read that clause twice.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Nobody does. ⚠ The relative pronoun is the smallest word in an '
            + 'insurance clause and it decides what the clause is about.' }
  ]
});

PBE5.scene('u11-11-3-pair', {
  set: 'showroom',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The guarantee covers goods whose fault appears within twelve months.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is a twelve-month guarantee.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Twelve months from when?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'From the sale. Obviously.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The clause does not say the sale. It says the fault appears within '
            + 'twelve months — ⚠ of appearing, which is a circle.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '…So a fault appearing in month eleven on something we sold in 2021 '
            + 'is covered.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'By that clause, yes. And the intended wording is goods whose date '
            + 'of sale is within twelve months.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Has anybody claimed on it?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Once, and we honoured it and thought we were being generous. ⚠ We '
            + 'were complying.' }
  ]
});

PBE5.scene('u11-11-4', {
  set: 'showroom',
  arr: 0,
  cast: {
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'attar', cam: { shot: 'wide' },
      en: 'Your terms say we will replace any item, which is faulty on delivery.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the guarantee.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Read it without the clause.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We will replace any item.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'That is what it promises. The clause is between commas, so it is '
            + 'an addition — and what it adds is the information that every item '
            + 'is faulty on delivery, which is an odd thing to tell a customer.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is meant to be any item which is faulty on delivery. Only the '
            + 'faulty ones.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Then the comma comes out, and the test is four seconds. ⚠ Read the '
            + 'sentence without the clause. If it still says what you meant, the '
            + 'clause is an addition and keeps its commas. If it now says '
            + 'something larger than you meant, the clause was defining and the '
            + 'commas come out.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How long has that been in our terms?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'Since September, and it has been sent to about thirty customers.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Has anybody relied on it?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'No, because nobody reads terms, which is the only reason this '
            + 'conversation is cheap. ⚠ And I want to say one thing about whoever '
            + 'typed it: they did not make a mistake about commas. They typed '
            + 'what they would have said, and in speech there is a small pause '
            + 'there, and the pause is right. The page is what is unforgiving.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I typed it.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ I know. And in six years of this work I have found that comma '
            + 'eleven times, and ten of them were in documents written by careful '
            + 'people.' }
  ]
});

PBE5.scene('u11-11-4-pair', {
  set: 'showroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'It says our second site, which opened in June, trades six days a week.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read it without the clause.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Our second site trades six days a week.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '⚠ Does it still say what you meant?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes. Exactly.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then the commas stay.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I was going to take them out.' },
    { who: 'b', cam: { shot: 'close' },
      en: '⚠ Everybody is, by now. The test has two answers and we have only '
            + 'been using one of them.' }
  ]
});

PBE5.scene('u11-11-5', {
  set: 'showroom',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'Your letter says the invoice was raised from the order carries no '
            + 'quotation reference.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It does carry no reference. That is the point of the sentence.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Read it to me again slowly.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The invoice was raised from the order carries no quotation '
            + 'reference. …There are two verbs.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Two verbs and one subject, so one of them has nothing to belong '
            + 'to. You meant the invoice which was raised from the order.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And I left out which because I have been leaving out which all week.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'You have been leaving it out where it is the object: the invoice I '
            + 'queried, the order he placed, the price we quoted. ⚠ Those are '
            + 'fine and they are how people speak. But where the relative is the '
            + 'subject of its own clause, it cannot go — the invoice which was '
            + 'raised has nothing left to do the raising if you remove it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How do I tell which is which?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Look at what comes straight after the noun. If it is a person or '
            + 'a thing — the invoice I queried — the relative was the object and '
            + 'can go. If it is a verb — the invoice was raised — the relative '
            + 'was the subject and must stay.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the sentence as it stands?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Means nothing at all, which is the good news. ⚠ A missing subject '
            + 'relative produces a sentence nobody can read, so somebody queries '
            + 'it. A missing comma produces a sentence everybody can read that '
            + 'means the opposite — and that is the one that costs money.' }
  ]
});

PBE5.scene('u11-11-5-pair', {
  set: 'showroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The price we quoted holds for fourteen days.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nothing wrong with that.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The order he placed is on the Thursday run.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nothing wrong with that either. Object relative, left out, correct.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The man I telephoned has the receipt.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Also correct. ⚠ Three out of three and I was about to put which '
            + 'into all of them.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Because we have spent an hour finding things wrong, ⚠ and the test '
            + 'for a sentence is not whether I have just learned a rule about it.' }
  ]
});

PBE5.scene('u11-11-6', {
  set: 'showroom',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'A customer who holds a written quotation, which is valid for '
            + 'fourteen days, is entitled to the quoted price on any order, which '
            + 'is placed within that period.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'So a written quotation lasts fourteen days and the price holds.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Read it again.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '…any order, which is placed within that period. With commas. So it '
            + 'is every order, and the clause is just telling me they are all '
            + 'placed within the period, which is not true.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which means the paragraph entitles a customer with a quotation to '
            + 'the quoted price on any order at all, for ever.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And the first time I heard it, it sounded completely normal.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the problem with a paragraph of terms. ⚠ Four relative '
            + 'clauses in one sentence and the reader hears the one they expect.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'What is the rule?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ One clause per sentence in a paragraph of terms. Not because '
            + 'long sentences are bad, but because the test in 11.4 only works on '
            + 'one clause at a time, and nobody applies it four times in a '
            + 'sentence they are reading at speed.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And this paragraph as four sentences?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'A written quotation is valid for fourteen days from its date. A '
            + 'customer who holds a written quotation is entitled to the quoted '
            + 'price. The entitlement applies to any order which is placed within '
            + 'the fourteen days. Thereafter the current list applies.' },
    { who: 'hala', cam: { shot: 'close' },
      en: 'That I could act on at the counter without reading it twice. ⚠ And '
            + 'I have just realised I have been honouring quotations for about a '
            + 'month on the basis of the version I heard.' }
  ]
});

PBE5.scene('u11-11-6-pair', {
  set: 'showroom',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Goods which are returned in their original packaging, which must '
            + 'be unopened, will be credited in full on any return, which is made '
            + 'within fourteen days.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So returns in the original packaging get a full credit within fourteen days.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Read it again.' },
    { who: 'b', cam: { shot: 'mid' },
      en: '…on any return, which is made within fourteen days. With commas. '
            + 'So it is any return, and the clause merely remarks that they are '
            + 'all within fourteen days.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And which must be unopened is also between commas.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So the packaging condition is a remark too. ⚠ As written, every '
            + 'return is credited in full, whatever its packaging and whenever it '
            + 'is made.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'How would you write it?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Three sentences. Goods must be returned in their original, '
            + 'unopened packaging. A return must be made within fourteen days. A '
            + 'return which meets both conditions is credited in full.' }
  ]
});

PBE5.scene('u11-11-7', {
  set: 'showroom',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'If I am applying clause 12 at the counter, I need the page before it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The definitions?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Every condition is made of the words on that page. Clause 12 says '
            + 'a valid written quotation, and whether somebody has one is decided '
            + 'on page one and not in clause 12.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Page one says "written quotation" means a quotation issued on our '
            + 'quotation form and signed by an authorised signatory.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Then about half of what I have been treating as quotations are '
            + 'not. I write prices on the back of an order pad about four times a '
            + 'week.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…So do I.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And when somebody brings one of those back, I honour it, because '
            + 'it has my handwriting on it and the price on it. Under page one it '
            + 'is not a quotation at all and I have no authority to honour it — '
            + 'and I have been honouring them for two years.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You have been doing the right thing by the customer and the wrong '
            + 'thing by the document.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Which means one of the two is wrong, and I do not think it is '
            + 'me. Either the definition should include a written price on any of '
            + 'our paper, or we should stop writing prices on order pads — and '
            + 'the second one is not going to happen, because a customer standing '
            + 'at the counter wants a number on something.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the definition is wrong and the practice is right.' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ And the definition has been wrong since 2019, and the only '
            + 'reason nobody has found it is that nobody at a counter has ever '
            + 'read page one.' }
  ]
});

PBE5.scene('u11-11-7-pair', {
  set: 'showroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Page one says "working day" means a day on which our office is open.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The office is shut on Saturdays. I work the counter.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So a Saturday is not a working day.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then the fourteen-day price hold is longer than anybody thinks, '
            + 'because Saturdays do not count — and the three-day claim window is '
            + 'longer too, which is in the customer\'s favour.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the other way?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Anything we promise within two working days takes longer than the '
            + 'customer expects, and I have been counting Saturdays as working '
            + 'days at the counter for four years because I am there.' },
    { who: 'a', cam: { shot: 'close' },
      en: '⚠ So the same definition is in our favour on claims and against us '
            + 'on promises, and nobody has ever applied it either way.' }
  ]
});

PBE5.scene('u11-11-7-b', {
  set: 'showroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.68, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Page one says "written quotation" means a quotation issued on our '
            + 'quotation form and signed by an authorised signatory.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Then about half of what I treat as quotations are not. I write '
            + 'prices on the back of an order pad about four times a week, and '
            + 'when somebody brings one back I honour it.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Under page one it is not a quotation at all and I have no '
            + 'authority to honour it. I have been doing it for two years.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'So one of the two is wrong and I do not think it is me. Either the '
            + 'definition should include a written price on any of our paper, or '
            + 'we stop writing prices on order pads — and the second will not '
            + 'happen.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'So the definition has been wrong since 2019, and nobody at a '
            + 'counter has ever read page one.' }
  ]
});
