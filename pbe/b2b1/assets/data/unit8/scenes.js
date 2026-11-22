/* Unit 8 — the acted dialogues. Every line is the book's own. */
PBE7.scene('u8-8-1', {
  set: 'bankdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Turnover is 148 million. That is the first sentence.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Whose 148, over what, and compared with what?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Ours. Last year.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Which last year? Your year ends on the 31st of December and the '
            + 'bank\'s facility year runs to the end of June. ⚠ A committee '
            + 'reading last year will pick one, and it will not tell you which.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So: turnover was 148 million in the year to 31 December 2025.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Now the basis. Is that the same basis as the year before it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The same, except that 2023 has the Homs clearance in it — the '
            + 'store opened in 2019 and closed in 2021, and the stock came down '
            + 'in a fortnight.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then 2025 and 2024 are comparable and 2023 is not, and that '
            + 'sentence belongs in the paper and not in your head. ⚠ Every figure '
            + 'carries three things: its period, its basis, and where a reader '
            + 'can go and see it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The source is the audited accounts.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Page?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Page 4.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then write page 4. ⚠ A figure a reader can check in ten seconds '
            + 'is believed; a figure he has to hunt for is read as a figure you '
            + 'hoped he would not look up.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the 148 — I have used it twice, in two papers.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ Then go and look at both, because one of them says 148.2 and the '
            + 'other says 148, and the committee has both. ⚠ The same figure '
            + 'rounded two ways in two documents is read as two figures.' }
  ]
});

PBE7.scene('u8-8-1-pair', {
  set: 'bankdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Turnover was 148 million. I have it in the covering letter as well.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'As 148?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'As 148.2 in the letter. They are the same figure.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'They are the same figure and the committee has two documents.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody is going to read them side by side.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The committee reads them side by side. That is what a committee is.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then I will change the letter to 148.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Change both to the measured figure and decide the rounding once. '
            + '148.2 is what the accounts say.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if I had used 148 in three places?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then you change three places, and you write the rule down so there '
            + 'is never a fourth.' }
  ]
});

PBE7.scene('u8-8-2', {
  set: 'bankdesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have the three years of turnover, the three margins and the '
            + 'three debtor figures. Nine numbers.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ And a committee reading nine numbers in ninety seconds picks the '
            + 'two it happens to notice. ⚠ Usually the biggest and the worst.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what do I write?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ A direction and a rate. ⚠ Turnover rose from 112.4 million to '
            + '148.2 million over the three years, which is fifteen per cent a '
            + 'year compound. One sentence, and it has all three years in it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Seventeen per cent then thirteen. Why is the compound figure '
            + 'better than giving both?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Because seventeen then thirteen invites a reader to extrapolate '
            + 'the second one and he will write twelve in his own notes for next '
            + 'year. ⚠ Fifteen a year compound is what happened, and it is one '
            + 'number, and it cannot be read as a deceleration.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is a deceleration, though. Seventeen to thirteen.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It is two observations, and two observations are not a trend. ⚠ '
            + 'Say both if you want to — but say what they are: two years, not a '
            + 'direction. A deceleration needs four points and we have three.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And April? Sales were 9.4 against 11.8 in March.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ April is a blip and you say so, in the same sentence as the '
            + 'figure. ⚠ April was 9.4 million against a monthly average of 12.3, '
            + 'the plater having been out of service for eleven days. A figure '
            + 'with its cause attached stops being evidence of a decline.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I leave April out?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Then the committee finds it in the monthly schedule, which is '
            + 'attached, and it becomes the only month they look at. ⚠ A blip you '
            + 'name is one sentence; a blip they find is the whole meeting.' }
  ]
});

PBE7.scene('u8-8-2-pair', {
  set: 'bankdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I have left April out. It is one month and it is not representative.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is the monthly schedule attached?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes. Appendix 3.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then I am the committee. Twelve numbers, and one of them is 9.4 '
            + 'when the others are around 12. How long did that take me?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Seconds.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And now April is the only month I have an opinion about, and I '
            + 'have no explanation, and I am going to ask for one in a meeting.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So I put it in.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'One sentence, with the eleven days in it. 9.4 against an average '
            + 'of 12.3, the plater out of service for eleven days.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It draws attention to it.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It draws attention to it for one sentence instead of for twenty '
            + 'minutes, and the attention it draws is to a press and not to you.' }
  ]
});

PBE7.scene('u8-8-3', {
  set: 'bankdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The Beirut account grew three hundred per cent in 2025.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ From what to what?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Two customers to six.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Then it grew two hundred per cent, or it trebled, or it is three '
            + 'times what it was. ⚠ Three hundred per cent growth from two is '
            + 'eight. And a committee of bankers will see that in two seconds and '
            + 'spend the next twenty minutes on arithmetic instead of on Beirut.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then: it trebled.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Better, and I would not write it at all. ⚠ From two customers to '
            + 'six. Four words, no percentage, and nobody can argue with it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It sounds smaller.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ It is smaller. It is four customers. ⚠ A percentage off a small '
            + 'base is arithmetic dressed as a result, and the reader who '
            + 'undresses it trusts nothing else on the page.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the margin? I have written that it fell 1.6 per cent.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ It fell 1.6 percentage points. ⚠ A fall of 1.6 per cent from '
            + '21.4 would be 21.1, which is not what happened. The thing that '
            + 'fell is itself a percentage, so the movement is in points.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Does anybody really read it that closely?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ A bank does. A bank\'s entire trade is the difference between a '
            + 'rate and a movement in a rate. ⚠ It is the one mistake they will '
            + 'not forgive, because they cannot tell whether you do not know or '
            + 'you are hoping.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And nine per cent of sales — I have used that for the Ghouta run, '
            + 'which has gone out on Mondays and Wednesdays since 1 March.' },
    { who: 'bassel', cam: { shot: 'close' },
      en: '⚠ Nine per cent of which sales? ⚠ Nine per cent of turnover is '
            + '13.3 million; nine per cent of cartons is a different number and a '
            + 'different argument. Name the hundred, every time.' }
  ]
});

PBE7.scene('u8-8-3-pair', {
  set: 'bankdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The Ghouta run is nine per cent of sales. It is in the standing '
            + 'presentation.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nine per cent of which sales?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Of sales. Of turnover.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Where did the nine come from?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It was calculated in 2023. From the run sheets.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The run sheets are in cartons.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…So it is nine per cent of cartons.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And on turnover?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Six point two, because the run carries the cheaper lines.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'So for two years the presentation has overstated the run by about '
            + 'a half, and nobody did anything wrong at any point.' }
  ]
});

PBE7.scene('u8-8-4', {
  set: 'bankdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The three-year rate is fifteen per cent. If I take the Homs '
            + 'clearance out of the base year it is eighteen.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ So the honest figure is the better one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is why I was going to leave it as fifteen. It looks less '
            + 'like arranging the numbers.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ It is arranging the numbers. ⚠ You have found a one-off in the '
            + 'base year and decided not to mention it because mentioning it '
            + 'helps you. That is a decision about presentation and not about '
            + 'arithmetic.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I give eighteen, somebody will say I have stripped out the '
            + 'inconvenient year.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then give both, and say which is which. ⚠ Fifteen per cent a '
            + 'year; excluding the clearance of the Homs stock in the base year, '
            + 'eighteen. Nineteen words and there is nothing left to allege.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is the test? Anything can be called a one-off.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Two questions. Did it happen for a reason that has gone, and '
            + 'will it not happen again? ⚠ The Homs store closed; its stock was '
            + 'cleared once; there is no Homs store. That is a one-off.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the plater in April?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ The plater is nine years old and it has broken twice. ⚠ That is '
            + 'not a one-off, it is a frequency — and a frequency stripped out of '
            + 'a figure is the commonest dishonest adjustment there is.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So April stays in.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ April stays in the figure and gets a sentence. ⚠ It is a blip, '
            + 'which is a thing you explain, and not a one-off, which is a thing '
            + 'you remove. And the difference between those two words is about '
            + 'four million.' }
  ]
});

PBE7.scene('u8-8-4-pair', {
  set: 'bankdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I want to take the February van failure out. It is one Monday in '
            + 'three years.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How often do you hire a van?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nine or ten times a year.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And how often has a hired van not arrived?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Twice. February, and once in 2023.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So it happens about once in fifteen hires. That is a rate.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is a very low rate.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is a low rate and it is still a rate, and a rate stripped out '
            + 'of a figure is an adjustment that assumes the thing will never '
            + 'happen again. Will it never happen again?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. We will hire a van next month.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then it stays in, and it gets a sentence. The sentence is cheaper '
            + 'than the argument you would have about the adjustment.' }
  ]
});

PBE7.scene('u8-8-5', {
  set: 'bankdesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The forecast says we expect 173.6 million next year.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Point six. Where did the point six come from?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'From the model. Fifteen per cent on 148.2 and then the Beirut '
            + 'accounts added.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ So the point six is arithmetic on a guess. ⚠ A decimal place on '
            + 'a forecast tells a banker that we do not know the difference '
            + 'between a measurement and a guess — which is the one thing about '
            + 'us he is actually assessing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then: about 170.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ About 170. And the 148.2 stays as 148.2, because that one is '
            + 'measured and audited. ⚠ Precision is a claim about method, and the '
            + 'claim has to be true.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So actuals precise and forecasts round.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Actuals to the nearest hundred thousand, which is one decimal in '
            + 'millions, and the same rounding in every document. ⚠ Forecasts to '
            + 'the nearest ten million, with about in front. Write both rules at '
            + 'the top of the appendix so nobody has to guess what we meant.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the facility itself. Forty million.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Forty million exactly, with no about and no approximately. ⚠ It '
            + 'is not an estimate, it is a request. A man asking for about forty '
            + 'million is a man who has not decided what he needs, and the '
            + 'committee will decide for him.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the debtor days? 58.1.' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ 58. A tenth of a day is eight hours and nobody measures '
            + 'receivables to eight hours. ⚠ The decimal does not make it more '
            + 'accurate, it makes the reader wonder what else we have dressed up.' }
  ]
});

PBE7.scene('u8-8-5-pair', {
  set: 'bankdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'We expect 3,297 cartons next year.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Where did the 297 come from?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Five per cent on this year\'s 3,140.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And which part of that is measured?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The 3,140. The five per cent is the three-year rate.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is a rate from the past applied to the future. So what is the 297?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Arithmetic on a guess.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Say it again.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'About 3,300.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is shorter, true, and the only version a reader can do '
            + 'nothing with except believe.' }
  ]
});

PBE7.scene('u8-8-6', {
  set: 'bankdesk',
  arr: 2,
  cast: {
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'hala', cam: { shot: 'wide' },
      en: 'Your first sentence says turnover of 148.2 million. What does the '
            + 'committee already have in front of it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The audited accounts.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ And three years of your bank statement, because the account is with them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…Which shows what came in. Lodgements.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ 138.4 million last year. ⚠ So the committee has a figure that is '
            + '9.8 million below yours, from its own records, and you have not '
            + 'mentioned it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They are different things. Sales are not receipts.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ You know that and I know that, and the committee knows it too — '
            + 'and it will still want the 9.8 explained, because that is its job. '
            + '⚠ The question is whether it reads your explanation or writes its '
            + 'own.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I give the bridge.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Two lines. Receivables rose 5.3 million over the year — so that '
            + 'much of the sales has not been paid yet. ⚠ And 4.5 million of the '
            + 'Beirut customers pay into the Beirut account, which is not with '
            + 'you. 5.3 and 4.5 is 9.8.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It adds exactly.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Then say so: the difference is accounted for in full. ⚠ A bridge '
            + 'that adds up exactly is the strongest four lines in any paper of '
            + 'figures, because it proves two separate records agree.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the Beirut account — do I want to raise that with them?' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ They can see 4.5 million that is not arriving. ⚠ A difference '
            + 'the reader finds first is a question about you; a difference you '
            + 'hand him with its arithmetic is a demonstration that you read your '
            + 'own statements.' }
  ]
});

PBE7.scene('u8-8-6-pair', {
  set: 'bankdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.45, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I would rather not put the Beirut account in the paper.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What can they see on their own statement?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The sweeps. They come in weekly as transfers from Beirut.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So they can see money arriving from an account they do not hold.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes. And they can see that it is not arriving as lodgements.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which means the 4.5 million is on their statement twice, once as a '
            + 'sweep and once as a hole.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Put like that it sounds worse than it is.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is not worse than it is. It is four days of Lebanese clearing '
            + 'and it is swept weekly. The only question is whether they read '
            + 'that from you or work it out from their own records.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And if they work it out?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then the next question is not about Beirut.' }
  ]
});

PBE7.scene('u8-8-7', {
  set: 'bankdesk',
  arr: 0,
  cast: {
    haddad: { rig: 'm-50s-a', name: 'Mr Haddad', voice: 'en-HK-SamNeural', shirt: '#5d5342', shirt2: '#4a4235',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'haddad', cam: { shot: 'wide' },
      en: 'The paper is the best one I have had from anybody this year. One '
            + 'question. The debtor days are 58 at December. What are they today?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Sixty-one.' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ You did not have to think about that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I calculated it on Tuesday, because it was the question I would '
            + 'have asked. Sixty-one at the end of April, on the same basis as '
            + 'the paper — closing receivables over the trailing twelve months\' '
            + 'sales.' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ And it is worse than the figure in your application.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Three days worse. ⚠ The two export accounts invoice in April and '
            + 'pay in June, so April and May are always the worst two months of '
            + 'our year — and April last year was sixty and April the year before '
            + 'was fifty-four.' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ So there is a seasonal pattern in it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ There is, and it is not in the paper, because three Aprils is '
            + 'three points and I did not want to call it a pattern on three. ⚠ '
            + 'The three figures are at appendix 2, page 2, and the committee can '
            + 'call it what it likes.' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ I could have worked the sixty-one out myself from the aged list '
            + 'you attached.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You could.' },
    { who: 'haddad', cam: { shot: 'close' },
      en: '⚠ Which is why I asked. ⚠ I was not finding out what your debtor '
            + 'days are, I was finding out whether you would tell me the worse '
            + 'number on a telephone without a pause. The committee meets on '
            + 'Thursday.' }
  ]
});

PBE7.scene('u8-8-7-pair', {
  set: 'bankdesk',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    lina: { rig: 'f-20s-b', name: 'Lina', voice: 'en-NZ-MollyNeural', shirt: '#8a5f7a', shirt2: '#6e4b61',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'The paper is good. What is the cost a carton this month?' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Fifty-two piastres.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'You did not look that up.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'I calculated it on Sunday. On the same basis as the paper, '
            + 'including hired vans.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'And the paper says forty-nine.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Three piastres worse. Two hired vans in April, and April last year '
            + 'was fifty-three and the year before fifty.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'So April is always bad.' },
    { who: 'lina', cam: { shot: 'mid' },
      en: 'Three Aprils is three points. I would not call it a pattern on '
            + 'three, but the three figures are at appendix 1, page 2.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'You are not going to tell me what to think about them.' },
    { who: 'lina', cam: { shot: 'close' },
      en: 'No. You have the same three numbers I have.' }
  ]
});

PBE7.scene('u8-8-7-b', {
  set: 'bankdesk',
  arr: 0,
  cast: {
    haddad: { rig: 'm-50s-a', name: 'Mr Haddad', voice: 'en-HK-SamNeural', shirt: '#5d5342', shirt2: '#4a4235',
      full: true, scale: 0.62, bottom: 30, at: [0.19, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.73, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'haddad', cam: { shot: 'wide' },
      en: 'The paper is the best one I have had from anybody this year. One '
            + 'question. The debtor days are 58 at December. What are they today?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Sixty-one.' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ You did not have to think about that.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I calculated it on Tuesday, because it was the question I would '
            + 'have asked. Sixty-one at the end of April, on the same basis as '
            + 'the paper.' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ And it is worse than the figure in your application.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Three days worse. ⚠ The two export accounts invoice in April and '
            + 'pay in June, so April and May are always the worst two months of '
            + 'our year — and April last year was sixty and April the year before '
            + 'was fifty-four.' },
    { who: 'haddad', cam: { shot: 'mid' },
      en: '⚠ So why is that not in the paper?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Because three Aprils is three points, and I did not want to call '
            + 'it a pattern on three. ⚠ The three figures are at appendix 2, page '
            + '2, and the committee can call it what it likes.' },
    { who: 'haddad', cam: { shot: 'close' },
      en: '⚠ I could have worked the sixty-one out myself from the aged list '
            + 'you attached. ⚠ Which is why I asked. I was not finding out what '
            + 'your debtor days are — ⚠ I was finding out whether you would tell '
            + 'me the worse number on a telephone without a pause.' }
  ]
});
