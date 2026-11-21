/* Unit 16 — the acted dialogues. Every line is the book's own. */
PBE4.scene('u16-16-1', {
  set: 'archive',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Abu Yasser, what is this book? It is full and the last date is 2019.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'That is the order book. We used to write every order in it by '
            + 'hand, twice — once in the left column when it was taken, once in '
            + 'the right when it went out.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why twice?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Because the two columns had to match at the end of the day. If '
            + 'they did not, something was still in the warehouse that a customer '
            + 'was expecting. It took eleven minutes a day and it never failed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And now?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Now the screen does it, and it does fail, about once a month, and '
            + 'nobody notices until the customer telephones.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Do you miss it?' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'I do not miss writing in the rain with a pen that would not work. '
            + 'I miss the eleven minutes. We did not use to leave at the end of '
            + 'the day without knowing.' }
  ]
});

PBE4.scene('u16-16-1-pair', {
  set: 'archive',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Abu Yasser, what is this drawer? It is full of cards and the last '
            + 'one is 2018.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is the card index. We used to keep a card for every customer, '
            + 'with every order written on the back.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Why on the back?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Because you could see a man\'s whole history in one hand. It took '
            + 'thirty seconds and it was never down.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And now?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Now it is on the screen, and it is faster, and nobody looks at the '
            + 'history at all because it is three clicks away instead of in your '
            + 'hand.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Do you miss it?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I do not miss the handwriting. I miss the hand. We didn\'t use to '
            + 'telephone a customer without knowing what he bought last year.' }
  ]
});

PBE4.scene('u16-16-2', {
  set: 'archive',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'For the history page — how many people were here when you started?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Four. My uncle, a driver, a boy who swept and me. We have grown to nineteen.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the customers?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'We had about forty regular accounts. We have about two hundred and '
            + 'ten now. But the warehouse has not changed at all — the same four '
            + 'walls my uncle rented in 1998, and we have filled them twice over.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nineteen people and two hundred and ten customers. That is growth.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Write it down carefully. Grown is a good word and it has hidden '
            + 'two bad years inside it. We were twenty-three in 2010 and eleven '
            + 'in 2014. Nineteen is not a straight line from four; it is the '
            + 'highest we have been since the year we were twenty-three.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Should I put that in?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Put it in. Anybody who was here will know whether you did.' }
  ]
});

PBE4.scene('u16-16-2-pair', {
  set: 'archive',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'For the history page — how many were here when you started?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Two. We have grown to fourteen.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the machines?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'We had one. We have four now. But the building has not changed at all.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is growth.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Write it carefully. Grown hides two bad years. We were nine in '
            + '2012 and three in 2016. Fourteen is not a line from two; it is the '
            + 'highest since 2011.' }
  ]
});

PBE4.scene('u16-16-3', {
  set: 'archive',
  arr: 2,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'It is not as quiet as it used to be. When I started there were six '
            + 'of us on this floor and you could hear the clock.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is that bad?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'It is not as easy to concentrate. But the work is not as slow as '
            + 'it was either. An invoice used to take me twenty minutes and now '
            + 'it takes four.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Five times faster.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Five times faster, and I do about four times as many. So I am not '
            + 'five times less busy; I am slightly more busy and a great deal '
            + 'less tired, which nobody would have predicted.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the mistakes?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'About the same. That is the honest answer and it is not the one '
            + 'people expect. The screen does not make fewer mistakes than I did '
            + '— it makes the same number, faster, and it makes them in a '
            + 'straight line so they are easier to find.' }
  ]
});

PBE4.scene('u16-16-3-pair', {
  set: 'archive',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Is it easier?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is not as hard as it used to be. When I started there were four '
            + 'hundred lines and you found them by memory.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is that bad?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is not as personal. But finding stock is not as slow as it was '
            + 'either. A line used to take four minutes to find and now it takes '
            + 'thirty seconds.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Eight times faster.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Eight times faster, and we carry twice as much. So I am not eight '
            + 'times less busy; I walk about the same distance and I think less, '
            + 'which I am not sure is an improvement.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the wrong picks?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'About the same. The screen is only as right as what was typed into it.' }
  ]
});

PBE4.scene('u16-16-4', {
  set: 'archive',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'For the history: our list prices have not moved since the '
            + 'fourteenth of March.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Since March. Can I write "since March"?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Write the fourteenth. In six months somebody will ask whether a '
            + 'quotation from the tenth was at the old price, and March will not '
            + 'answer it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The fourteenth of March. And the supplier prices?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'Those have moved four times in the same period. We have held ours '
            + 'for seven months, which is why the margin is thinner than it looks '
            + 'on the page.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the last time we put prices up across the whole list?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: 'November 2019. It is more than six years since we did that. We '
            + 'have changed single lines since — twenty or thirty of them — but '
            + 'not the list.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is a sentence worth writing carefully.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: 'Everything about a date is worth writing carefully. A wrong month '
            + 'in a history is an argument in two years.' }
  ]
});

PBE4.scene('u16-16-4-pair', {
  set: 'archive',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'For the history: the yard rent has not changed since the first of '
            + 'February 2023.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Since 2023. Can I write "since 2023"?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Write the first of February. In two years somebody will ask what '
            + 'we paid in January that year, and "2023" will not answer it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The first of February 2023. And rents on the road?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Those have risen three times in the same period. We have paid the '
            + 'same for three years, which is why the yard looks cheap and is not '
            + 'a bargain — it is a landlord who has not got round to it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the last time he raised it?' },
    { who: 'a', cam: { shot: 'close' },
      en: '2023, by fifteen per cent. It is three years since he did that.' }
  ]
});

PBE4.scene('u16-16-5', {
  set: 'archive',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Describe this place in 1998. I want to put it in the history.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'There was one room, this room, with four desks and one telephone '
            + 'on the wall. There was a warehouse behind it with a dirt floor. '
            + 'There were no racks; everything was in piles and you remembered '
            + 'where.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And orders?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'There was no telephone in most of the shops we sold to. Customers '
            + 'came in person, on a Sunday, and ordered for the fortnight. If a '
            + 'man did not come, you did not know whether he was ill or had gone '
            + 'to somebody else.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What was on the wall? There is a mark where something was.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'A map of the city with pins in it. One pin for every customer. My '
            + 'uncle put a pin in on the day a man first ordered, and he never '
            + 'took one out, even when they stopped. There were forty-one pins '
            + 'and about thirty-two customers when he died.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why did he never take them out?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'He said a customer who has stopped is a customer you can visit.' }
  ]
});

PBE4.scene('u16-16-5-pair', {
  set: 'archive',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Describe this place in 2005. I want to put it in the history.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'There was one bench, two machines and a dirt yard. There was no '
            + 'sign on the door. There were no customers who had not been sent by '
            + 'somebody.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And orders?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'There was no telephone for the first two years. People came and '
            + 'waited. If a man did not come back, you never knew whether the '
            + 'work had been bad or his money had run out.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'What was on the wall? There is a nail.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Every receipt from the first year is on that nail. My father put '
            + 'them there and he never took one off, even the ones that were '
            + 'never paid.' }
  ]
});

PBE4.scene('u16-16-6', {
  set: 'archive',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    abu_yasser: { rig: 'm-50s-a', name: 'Abu Yasser', voice: 'en-US-ChristopherNeural', shirt: '#6b6256', shirt2: '#564e44',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Why do we still write the stock in a book when it is on the screen?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Because of one week in 2016. The system was down for nine days — '
            + 'not slow, down. We had no list of what was in this building, and '
            + 'for nine days we sold what we could see.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the book?' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'There was no book then. We started it the week the system came '
            + 'back, because we had spent nine days guessing, so we decided never '
            + 'to be in a building we could not describe.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nobody has ever told me that.' },
    { who: 'abu_yasser', cam: { shot: 'mid' },
      en: 'Nobody has ever asked. That is how a rule dies: not because it '
            + 'stops working, but because the reason stops being told and then it '
            + 'is just a thing an old man does.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then I am writing it down.' },
    { who: 'abu_yasser', cam: { shot: 'close' },
      en: 'Write the nine days. The rule is not interesting. The nine days '
            + 'are what makes anybody keep it.' }
  ]
});

PBE4.scene('u16-16-6-pair', {
  set: 'archive',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.44, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Why do two people sign for every collection?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Because of a load in March 2021. It left with one signature and '
            + 'was never traced — one point eight million, eleven days of '
            + 'argument, and we lost the customer at the end of it.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the second signature?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'There was none before that. We started it the following week, '
            + 'because nobody could say who had handed the goods over, so we '
            + 'decided never again to have a collection that one person could '
            + 'describe alone.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody has ever told me that.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Nobody has ever asked. That is how a rule dies: the reason stops '
            + 'being told and the rule looks like distrust.' }
  ]
});

PBE4.scene('u16-16-7', {
  set: 'archive',
  arr: 0,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'Nour, this history you have written. Is it for customers? It reads '
            + 'like something for a wall.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Read the page of reasons. Would you put that on a wall?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '"Because of nine days in June 2016 when the system was down and we '
            + 'sold what we could see." No. You would not put that in front of a '
            + 'customer.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is for you. It is for the person who starts here in four years '
            + 'and is told to write the stock in a book and thinks it is an old '
            + 'man being an old man.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'In my first week I asked three people why prices are read back on '
            + 'the telephone and got three different answers.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the true answer is that nobody knows. It is on the page, in '
            + 'those words. That is the part I argued about for a week.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Why argue? It is the only honest line in it.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Because a history that says "nobody knows" four times is not a '
            + 'history, it is a shrug. Once is honest. The rest have to be found '
            + 'before the people who have them go.' }
  ]
});

PBE4.scene('u16-16-7-pair', {
  set: 'archive',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.65, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'You cannot write that. We make mistakes on page one of a handbook '
            + 'makes us look bad.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Would you put the handbook in front of a customer?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'No. It is for staff.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then it is not an advertisement and it does not have to read like '
            + 'one. Look at the second sentence: so that the same mistake is not '
            + 'made twice by two different people. That is what the page is for. '
            + 'A handbook that says we never make mistakes is one nobody writes '
            + 'anything in.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And the part about not knowing why a rule exists?' },
    { who: 'a', cam: { shot: 'close' },
      en: 'That is the only line that will still be true in ten years.' }
  ]
});

PBE4.scene('u16-16-7-b', {
  set: 'archive',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.23, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'There was one room — this room — with four desks and one telephone '
            + 'fixed to the wall. There was no second line, so a call that came '
            + 'while somebody was speaking simply did not arrive.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Behind it there was a warehouse with a dirt floor. There were no '
            + 'racks at all; everything was in piles.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'On the wall there was a map of Damascus with a pin for every '
            + 'customer. There were forty-one pins when my uncle died.' }
  ]
});
