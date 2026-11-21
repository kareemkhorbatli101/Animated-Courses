/* Unit 11 — the acted dialogues. Every line is the book's own. */
PBE3.scene('u11-11-1', {
  set: 'hotel',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'hold', hold: 'key' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'read', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Bassel, the Aleppo trip. I need the plan before I reserve anything.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'I\'m going to leave Sunday at six and get there about midday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two nights or three?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Two. Sunday afternoon I\'m going to see Ms Shamsi — that\'s the '
            + 'wrap price and the new boxes. Monday I\'m going to do the three '
            + 'shops in the old city, and in the afternoon the two new ones on '
            + 'the Idlib road.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Five customers in one day.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Five is a lot. If the morning is slow I\'m going to drop the '
            + 'second new one and telephone instead.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And Tuesday?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Tuesday I\'m going to leave early and be back here by three, '
            + 'because Mr Ayoub wants the figures the same day.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What aren\'t you going to do?' },
    { who: 'bassel', cam: { shot: 'close' },
      en: 'I\'m not going to see the Jabr brothers. They owe us since '
            + 'February and I\'m not going to sit in their office drinking tea '
            + 'about it. That\'s a telephone call from Nadia, not a visit from '
            + 'me.' }
  ]
});

PBE3.scene('u11-11-1-pair', {
  set: 'hotel',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'hold', hold: 'key' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'read', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Palmyra. I need the plan before I reserve the bus.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I\'m going to leave Friday at six and get there about eleven.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Two nights or three?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Two. Friday we\'re going to settle in and do nothing. Saturday '
            + 'we\'re going to be at the site at seven, and we\'re going to be '
            + 'out of it by eleven.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Eleven? That\'s short.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Eleven is when it stops being short and starts being dangerous. If '
            + 'anybody is tired I\'m going to take them back early.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'What aren\'t you going to do?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'I\'m not going to do the museum in the afternoon. It\'s forty '
            + 'minutes of looking and three hours of heat — that\'s a different '
            + 'trip, not a longer day.' }
  ]
});

PBE3.scene('u11-11-2', {
  set: 'hotel',
  arr: 1,
  cast: {
    hotel_desk: { rig: 'f-30s-a', name: 'Reception', voice: 'en-GB-MaisieNeural', shirt: '#6f5a8a', shirt2: '#57466e',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'hold', hold: 'key' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'read', hold: 'slip' }
  },
  lines: [
    { who: 'hotel_desk', cam: { shot: 'wide' },
      en: 'Hotel Barron Street, good afternoon.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Good afternoon. I\'d like to reserve a single room for two nights, '
            + 'please — Sunday the twenty-first and Monday the twenty-second.' },
    { who: 'hotel_desk', cam: { shot: 'mid' },
      en: 'Two nights, checking out Tuesday morning. In which name?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Bassel Nassif. N-A-S-S-I-F. It\'s a company reservation — Sham '
            + 'Trading, Damascus.' },
    { who: 'hotel_desk', cam: { shot: 'mid' },
      en: 'We have a single at thirty-five thousand a night.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is breakfast included?' },
    { who: 'hotel_desk', cam: { shot: 'mid' },
      en: 'Breakfast is included. Wi-Fi as well.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you. Two things. He arrives about midday — can you hold the '
            + 'room until eight in the evening if he\'s late?' },
    { who: 'hotel_desk', cam: { shot: 'mid' },
      en: 'Until eight, yes. Write it on the reservation.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And a quiet room, if you have one. Not on the street side — he has '
            + 'an early start on Tuesday.' },
    { who: 'hotel_desk', cam: { shot: 'mid' },
      en: 'I can give you the fourth floor, at the back.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'The fourth floor at the back. So: Bassel Nassif, two nights, the '
            + 'twenty-first and twenty-second, single, thirty-five thousand, '
            + 'breakfast included, held until eight, quiet side. Could you send '
            + 'me that by message?' }
  ]
});

PBE3.scene('u11-11-2-pair', {
  set: 'hotel',
  arr: 1,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'hold', hold: 'key' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'read', hold: 'slip' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Hotel Al-Bahr, good afternoon.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Good afternoon. I\'d like to reserve a single room for two nights, '
            + 'please — Thursday the eighth and Friday the ninth.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Two nights. In which name?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Rasha Hamdan, H-A-M-D-A-N. It\'s a company reservation — Hamdan Stores.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'We have a single at forty thousand a night.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is breakfast included?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Breakfast is eight thousand extra.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then without breakfast, thank you. Two things. I arrive late — can '
            + 'you hold the room until six? And a room away from the sea side, if '
            + 'you have one; I hear it\'s noisy in summer.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Until six, and I can give you the back. The Wi-Fi is only in the '
            + 'lobby, I should say.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Good to know. So: Rasha Hamdan, two nights, the eighth and ninth, '
            + 'single, forty thousand, no breakfast, held until six, back of the '
            + 'building. Could you send me that by message?' }
  ]
});

PBE3.scene('u11-11-3', {
  set: 'hotel',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'hold', hold: 'key' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'read', hold: 'slip' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Bassel, I\'ve looked at the weather for Sunday. It\'s going to '
            + 'rain all day in the north.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Rain I can drive in.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It isn\'t only rain. It\'s going to be very cold at night — two or '
            + 'three degrees — and it\'s foggy on that road when it\'s cold and '
            + 'wet.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The fog is the problem, not the rain.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That\'s what I thought.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Then I\'m going to leave at five, not six. The fog lifts at about '
            + 'nine; if I\'m past Hama by then I\'m in it for two hours instead '
            + 'of four.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'In the dark?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'In the dark on an empty road is better than at nine on a full one '
            + 'in fog. And I\'m going to take the big coat — the hotel is old and '
            + 'the heating in those buildings is a decoration.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I\'ll tell Ms Shamsi you may be late for half past two.' },
    { who: 'bassel', cam: { shot: 'close' },
      en: 'Tell her I may be late. Don\'t tell her I will be — she\'ll go out.' }
  ]
});

PBE3.scene('u11-11-3-pair', {
  set: 'hotel',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'hold', hold: 'key' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'read', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I\'ve looked at the weather for Saturday. It\'s going to be '
            + 'thirty-eight degrees.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Heat we can manage. There is shade.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It isn\'t only the heat. It\'s going to be windy in the evening — '
            + 'thirty or forty kilometres an hour from about six.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The wind is the problem, not the heat.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That\'s what I thought.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then we\'re going to move the tables under the trees, not into the '
            + 'open. The trees break the wind and give shade all afternoon.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And the lights?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The lights come down. A string of lights in that wind is a fire, '
            + 'and nobody looks at the lights anyway.' }
  ]
});

PBE3.scene('u11-11-4', {
  set: 'hotel',
  arr: 0,
  cast: {
    hotel_desk: { rig: 'f-30s-a', name: 'Reception', voice: 'en-GB-MaisieNeural', shirt: '#6f5a8a', shirt2: '#57466e',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'hold', hold: 'key' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'read', hold: 'slip' }
  },
  lines: [
    { who: 'hotel_desk', cam: { shot: 'wide' },
      en: 'Mr Nassif. Room 412, fourth floor, at the back as requested.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Thank you. A few questions. Is breakfast included?' },
    { who: 'hotel_desk', cam: { shot: 'mid' },
      en: 'Included. Six thirty to ten, ground floor.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Six thirty — good. Is there Wi-Fi in the room, or only downstairs?' },
    { who: 'hotel_desk', cam: { shot: 'mid' },
      en: 'In the room. The password is on the card.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Is there hot water all day?' },
    { who: 'hotel_desk', cam: { shot: 'mid' },
      en: 'All day, but it is better in the morning than at eleven at night.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'That is an honest answer and I will remember it. Is parking included?' },
    { who: 'hotel_desk', cam: { shot: 'mid' },
      en: 'The car park is full until Tuesday. There is a paid one behind the '
            + 'building — four thousand a night.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Is it safe?' },
    { who: 'hotel_desk', cam: { shot: 'mid' },
      en: 'It is. But if you leave at five, the man with the key is not there '
            + 'before six. Park in the street in front; it is under the camera '
            + 'and I am at this desk all night.' },
    { who: 'bassel', cam: { shot: 'close' },
      en: 'That is the most useful thing anybody has told me today.' }
  ]
});

PBE3.scene('u11-11-4-pair', {
  set: 'hotel',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'hold', hold: 'key' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'read', hold: 'slip' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'Flat 6, third floor. Here are the keys.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thank you. A few questions. Is water included?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Water is included.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is the electricity included, or do I pay it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You pay the electricity, and the gas.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is there internet, or do I arrange my own?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Your own.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Is the water on all day?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'All day, but the pump is off between one and four.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is an honest answer. Does the cleaner come every week?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Once a week, Mondays. But she does the stairs, not inside the flat '
            + '— people think it is both.' }
  ]
});

PBE3.scene('u11-11-5', {
  set: 'hotel',
  arr: 1,
  cast: {
    shamsi: { rig: 'f-30s-h', name: 'Ms Shamsi', voice: 'en-US-EmmaNeural', shirt: '#5a6f9a', shirt2: '#48587b',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'hold', hold: 'key' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'read', hold: 'slip' }
  },
  lines: [
    { who: 'shamsi', cam: { shot: 'wide' },
      en: 'My cousin is coming from Damascus on Thursday. She has one '
            + 'evening. What should she do?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'One evening. Then I\'d do one thing properly, not three things badly.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Which one thing?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'She should walk in the old city at about six — not at four, it\'s '
            + 'still hot, and not at eight, half the shops are shutting. Start at '
            + 'Bab Antakya and walk slowly. The walking is the thing; there is '
            + 'nothing to go and see at the end of it.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'And to eat?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'She should eat where the people who live there eat. Anywhere with '
            + 'a menu in three languages, she should walk past.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'That is a rule I will remember.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And one thing she shouldn\'t do: she shouldn\'t try to do the '
            + 'citadel as well. It deserves a morning, and she would be looking '
            + 'at her watch the whole time.' },
    { who: 'shamsi', cam: { shot: 'mid' },
      en: 'Better to come back.' },
    { who: 'bassel', cam: { shot: 'close' },
      en: 'Better to come back. Tell her: one evening, one place, walk slowly.' }
  ]
});

PBE3.scene('u11-11-5-pair', {
  set: 'hotel',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'hold', hold: 'key' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'read', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'A customer is coming from Aleppo. He has one evening and no car. '
            + 'What should he do?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'One evening. Then I\'d do one thing properly, not three badly.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which one thing?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'He should walk in Souq al-Hamidiyeh at about half past five — not '
            + 'at three, it\'s airless, and not at eight, the shutters are coming '
            + 'down. Go in from the Citadel end and come out at the Umayyad. The '
            + 'walking is the thing.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And to eat?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'He should eat in one of the small places behind the souq, where '
            + 'there is no menu at all and they tell you what there is. Anything '
            + 'with photographs of the food, he should walk past.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is a rule I will remember.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And one thing he shouldn\'t do: he shouldn\'t try to add the '
            + 'museum. It closes at four anyway, and he would spend the walk '
            + 'looking at his watch.' }
  ]
});

PBE3.scene('u11-11-6', {
  set: 'hotel',
  arr: 2,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'hold', hold: 'key' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'read', hold: 'slip' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'Nour, the car is at the garage until Thursday. Is there a bus to '
            + 'Homs on Tuesday?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'There are four. The first leaves at six and arrives at eight fifteen.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Six is before the garage opens — I can\'t leave the keys.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then the second. It leaves at half past seven and takes two and a '
            + 'half hours — it arrives at ten.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Two and a half? The first one takes two and a quarter.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The first is the direct one. The half past seven stops at Nabk.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Ten o\'clock is fine. My first customer opens at ten thirty.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And coming back: there\'s one at one and one at five. The one '
            + 'o\'clock gets in at quarter past three; the five o\'clock gets in '
            + 'at quarter past seven.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The one o\'clock. If I finish early I\'ll wait at the station '
            + 'rather than miss it — and if I don\'t finish, I take the five.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I\'ll write both on the sheet. Tickets at the station, or do they '
            + 'sell on the bus?' },
    { who: 'bassel', cam: { shot: 'close' },
      en: 'At the station, and on a Tuesday you don\'t have to come early.' }
  ]
});

PBE3.scene('u11-11-6-pair', {
  set: 'hotel',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'hold', hold: 'key' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.47, 0.62],
      pose: 'read', hold: 'slip' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I\'m going on Thursday. Is there a train in the morning?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'There are two. The first leaves at eight and arrives at half past eleven.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Eight is too early — I can\'t get there before half past seven.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then the second. It leaves at a quarter past nine and takes four '
            + 'and a half hours — it arrives at a quarter to two.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Four and a half? The first one takes three and a half.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The first is direct. The quarter past nine stops twice.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A quarter to two is still all right.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And coming back: six in the morning or four in the afternoon, nothing else.' }
  ]
});

PBE3.scene('u11-11-7', {
  set: 'hotel',
  arr: 0,
  cast: {
    hala_counter: { rig: 'f-20s-b', name: 'Hala', voice: 'en-CA-ClaraNeural', shirt: '#a8763f', shirt2: '#866032',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'hold', hold: 'key' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'read', hold: 'slip' }
  },
  lines: [
    { who: 'hala_counter', cam: { shot: 'wide' },
      en: 'Nour, you\'ve written me two pages and I\'ve read them three '
            + 'times. Can you just tell me?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I can. The two pages are for when you\'re there. Now I\'ll tell '
            + 'you the four things.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'Four. Good.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One: the bus is the 07.30, you arrive at ten, and the hotel holds '
            + 'your room until eight at night, so nothing can go wrong with the '
            + 'arriving.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'Two?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two: breakfast is included, Wi-Fi is included, parking isn\'t — '
            + 'but you haven\'t got a car, so forget parking.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'Three?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three: the per diem. Sixty thousand a day for food. It isn\'t '
            + 'money you have to account for and it isn\'t money you have to '
            + 'spend — if you eat for twenty, the rest is yours. That\'s what '
            + '"per diem" means, and nobody ever explains it.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'Nobody ever explained it to me.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And four, the only one you can get wrong: every receipt except '
            + 'food, in one envelope as you get them. Nadia wants them by Friday.' },
    { who: 'hala_counter', cam: { shot: 'mid' },
      en: 'One envelope, by Friday.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Everything else on those two pages is so that you don\'t have to '
            + 'telephone me — not so that you have to read it.' }
  ]
});

PBE3.scene('u11-11-7-b', {
  set: 'hotel',
  arr: 0,
  cast: {
    hotel_desk: { rig: 'f-30s-a', name: 'Reception', voice: 'en-GB-MaisieNeural', shirt: '#6f5a8a', shirt2: '#57466e',
      full: true, scale: 0.62, bottom: 30, at: [0.22, 0.62],
      pose: 'hold', hold: 'key' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'read', hold: 'slip' }
  },
  lines: [
    { who: 'hotel_desk', cam: { shot: 'wide' },
      en: 'Hotel Barron Street, good afternoon.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Good afternoon. I\'d like to reserve a single room for two nights, '
            + 'please — Sunday the twenty-first and Monday the twenty-second.' },
    { who: 'hotel_desk', cam: { shot: 'mid' },
      en: 'In which name?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Bassel Nassif, N-A-S-S-I-F. A company reservation.' },
    { who: 'hotel_desk', cam: { shot: 'mid' },
      en: 'A single is thirty-five thousand a night.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is breakfast included?' },
    { who: 'hotel_desk', cam: { shot: 'mid' },
      en: 'Breakfast and Wi-Fi.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Can you hold the room until eight in the evening? He arrives about '
            + 'midday but the road is long.' },
    { who: 'hotel_desk', cam: { shot: 'close' },
      en: 'Until eight. I\'ll write it on the reservation.' }
  ]
});
