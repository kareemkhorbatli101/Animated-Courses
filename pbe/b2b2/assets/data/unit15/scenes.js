/* Unit 15 — the acted dialogues. Every line is the book's own. */
PBE8.scene('u15-15-1', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'You drafted a reply in July. What happened to it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I read it the next morning and it said nothing that was not '
            + 'already in the application. It was four paragraphs of the same '
            + 'case in a more disappointed voice.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then you were right not to send it, and that is the whole of this unit.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It felt like doing nothing.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It was doing nothing, and doing nothing was correct. ⚠ A '
            + 'committee that has refused you on the material in front of it will '
            + 'refuse you again on the same material, faster, and with less '
            + 'patience. ⚠ The second refusal costs you something the first one '
            + 'did not.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What does it cost?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ The next question you ask them. ⚠ A file with two refusals in it '
            + 'is read differently from a file with one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And now there are two things.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Say them as facts, with dates.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The two export accounts went on to documentary credit from 1 '
            + 'October, so the sixty-day exposure is gone on both. And the '
            + 'October debtor days are forty-nine against fifty-eight in the '
            + 'application.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Both of those are checkable by somebody who has never spoken to '
            + 'you, which is what the committee is. ⚠ And both of them are the '
            + 'thing they actually asked about — not a thing we think is '
            + 'important.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is two enough?' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Two is better than six. ⚠ A letter with six changed facts in it '
            + 'is a letter that has gone looking — and a committee can tell the '
            + 'difference between what has changed and what has been assembled.' }
  ]
});

PBE8.scene('u15-15-1-pair', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I want to write to them again. The case was a good one.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What is in your letter that was not in the application?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That we still believe in it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'They know that. What has changed?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nothing yet.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So they read the same case a second time. What do they do?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Refuse it faster.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what does that cost?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The next thing I ask them.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is the one thing you cannot put a figure on, and it is the '
            + 'only thing you were going to spend.' }
  ]
});

PBE8.scene('u15-15-2', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have written: we understand that you had to be cautious on the '
            + 'figures available in June.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Read it again and listen for the word had.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…It says they were forced.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It says they were forced, which means they did not choose, which '
            + 'means they were not right. ⚠ You have excused them, and excusing '
            + 'somebody is not agreeing with them — it is agreeing with them '
            + 'while keeping something back.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is the test?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Could they read it aloud to the person who wrote the refusal, '
            + 'without wincing? ⚠ You had to be cautious fails that. You were '
            + 'right passes it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So: you were right to refuse on the figures you had.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Better. And there is a stronger form, and it is the one nobody writes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ And I would have refused them myself.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is a lot to say.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It is the whole letter, and it costs nothing, because it is '
            + 'true. ⚠ A collection period that goes 46, 51, 58 and is not '
            + 'explained is a series I would have refused, and so would you.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It feels like giving up the argument.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It is giving up an argument you lost in July and cannot win. ⚠ '
            + 'And what it buys is the only thing you need, which is that the '
            + 'reader starts the second paragraph without a defence prepared. '
            + 'Every sentence after a real concession is read differently from '
            + 'every sentence after a qualified one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And no however.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ No however, no that said, and no nevertheless. ⚠ A concession '
            + 'with a hinge word after it was not a concession, it was a run-up.' }
  ]
});

PBE8.scene('u15-15-2-pair', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'We understand that the Committee had to be cautious on the '
            + 'information available.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read it again with the stress on had.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'We understand that the Committee HAD to be cautious.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What does that say about whether they chose?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…That they did not.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And if they did not choose, were they right?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. They were forced.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So in one sentence you have excused them and told them they were not right.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I meant it as the opposite.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is why it is worth saying out loud before you send anything.' }
  ]
});

PBE8.scene('u15-15-3', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'What are we asking for?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The eight million. It is what we need.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then you are asking them to say they were wrong on 1 July. ⚠ A '
            + 'committee does not do that in four months. It can do it in two '
            + 'years, with a new chairman.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So what do we ask for?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Something they can grant without reversing anything. ⚠ What is '
            + 'the smallest amount that is worth having?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Four million would carry us to the end of March.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then ask for four, for the quarter to 31 March, reviewable in '
            + 'March on three months of figures. ⚠ Three parts, and the third is '
            + 'the one that makes it grantable.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Why does the review make it grantable?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Because it is not a decision about the facility, it is a '
            + 'decision about three months. ⚠ If the debtor days go back to '
            + 'fifty-eight in February, the thing lapses and nobody has to write '
            + 'a letter about it. A committee can say yes to something that '
            + 'undoes itself.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And it is half of what we asked for.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is half for a quarter, which is an eighth. ⚠ And it is the '
            + 'only ask on the table that they can answer with one word.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Does it look like a retreat?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Only if you apologise for it. ⚠ Write it as a decision: we are '
            + 'not asking you to reconsider the decision of 1 July. We are asking '
            + 'for four million for the quarter to 31 March. ⚠ The first sentence '
            + 'is what makes the second one small — and a small ask with a '
            + 'boundary round it is not a retreat, it is a different question.' }
  ]
});

PBE8.scene('u15-15-3-pair', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Four million for the quarter to 31 March, reviewable in March.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good. What else have you written?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That we appreciate even this may be more than the Committee feels '
            + 'able to consider.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What does that sentence invite?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A smaller counter-offer.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'From a committee that has not yet decided to offer anything at all.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And it says I do not believe my own ask.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which is the part they will act on. Take it out and change nothing else.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then the ask is the same four million.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The same four million, and a different document.' }
  ]
});

PBE8.scene('u15-15-4', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The last thing I need is the sentence that lets them say yes.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ What have you got?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We hope the Committee will now take a different view.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Take out now. ⚠ Now means at last, and at last is a reproach '
            + 'wearing a hopeful face.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then: we hope the Committee will take a different view.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That is still asking them to take a different view, which is '
            + 'asking them to have been wrong. ⚠ The formula has to make the new '
            + 'answer consistent with the old one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'How can a yes be consistent with a no?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Easily, if the facts are different. ⚠ A committee that refused a '
            + 'series ending at fifty-eight and grants a series ending at '
            + 'forty-nine has not changed its mind about anything — it has '
            + 'applied the same test to a different number. ⚠ Say that in the '
            + 'letter and you have given them the whole of their answer.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So: on the new information the Committee may reach a different '
            + 'conclusion, and nothing in it contradicts the decision of 1 July.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ That is the sentence. ⚠ And the second half is the half that '
            + 'does the work — the first half is only an invitation.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ It also happens to be true, which is why it will survive being '
            + 'read twice. ⚠ A formula that is merely tactful falls apart when '
            + 'somebody checks it; this one is a description of what they would '
            + 'actually be doing.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Should I say that we are not suggesting they were wrong?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ No. Never raise the thing you are trying not to say. ⚠ We are '
            + 'not suggesting the Committee was wrong puts the word wrong in a '
            + 'letter that did not contain it — and the reader will remember the '
            + 'word and not the denial.' }
  ]
});

PBE8.scene('u15-15-4-pair', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I have added that we are not suggesting the Committee was wrong in July.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'How many times does the word wrong appear in your letter without '
            + 'that sentence?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'None.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And with it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Once.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Who introduced it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I did.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And which will they remember, the word or the denial?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The word.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'So the sentence does the one thing you wrote it to prevent.' }
  ]
});

PBE8.scene('u15-15-5', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'bassel', cam: { shot: 'wide' },
      en: 'You were going to ask Mr Ayoub again about a second man on the Ghouta run.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ I am not. Nothing has changed since September. ⚠ The run is '
            + 'still Mondays and Wednesdays, it still takes forty cartons a time '
            + 'when the orders are heavy, and he refused on cost.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'The buffer went to ninety-five because of that run.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That is a fact and it is not a new one. It was true in August '
            + 'and I did not know it. ⚠ The thing that changed is what I know, '
            + 'not what is happening — and a committee, or a manager, is entitled '
            + 'to say that my knowing something later is not an event.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'So nothing happens.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ No. A note happens. ⚠ Four lines: what I was going to ask, what '
            + 'the refusal was and when, what has changed since, which is '
            + 'nothing, and the date I will look again.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Who reads a note like that?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Me, in March, when I have forgotten that I decided. ⚠ A decision '
            + 'not to act is the only kind that leaves no trace at all — so in '
            + 'March I will either think nobody ever raised it, or I will raise '
            + 'it again having forgotten why I did not.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ And if somebody else reads it?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Then it is better still, because it says the question was asked '
            + 'and answered rather than never considered. ⚠ A file with a decided '
            + 'not to in it is a different file from one with a gap.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Put the date in, then. Say March.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ 1 March, and the trigger: if the buffer goes under a hundred and '
            + 'twenty twice in a month, I write before March.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: '⚠ Then it is not really a decision not to write. It is a decision '
            + 'not to write yet.' },
    { who: 'nour', cam: { shot: 'close' },
      en: '⚠ Which is what most of them are, and nobody ever says so.' }
  ]
});

PBE8.scene('u15-15-5-pair', {
  set: 'writingdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'The buffer went to ninety-five because of the Ghouta run. That is new.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'When did it become true?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'In August.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And when did you learn it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The twenty-third of September.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Nine days after he refused you on cost.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So what changed between the fourteenth and the twenty-third?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…What I know.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'And is he entitled to say that is not an event?' }
  ]
});

PBE8.scene('u15-15-6', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'The rule I was taught is six weeks before writing again.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Where does six weeks come from?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is long enough not to look impatient.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then it is a rule about how you look, and this letter is not '
            + 'about how you look. ⚠ An interval is not a length of time. It is a '
            + 'fact arriving — and six weeks is only how long a fact usually '
            + 'takes.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Ours took four months.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Because the fact is a month-end figure and there were four '
            + 'month-ends between July and the one that helped. ⚠ July, August '
            + 'and September were all intentions. October is the first month in '
            + 'which the thing we said we would do has been done and measured.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I say that.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ You say that, in one sentence, at the end. ⚠ And you do not '
            + 'apologise for it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Four months of silence is a long time to say nothing about.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ It is a long time and it was correct, and an apology would say '
            + 'it was not. ⚠ I am sorry for the delay tells a reader that the '
            + 'writer thinks they owed a letter in August — and if they owed one '
            + 'in August, why has it taken until November?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Whereas if it was correct.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: '⚠ Then there is nothing to apologise for and the sentence is an '
            + 'explanation instead. ⚠ I have written now because the October '
            + 'figure is the first month that is evidence rather than an '
            + 'intention. Nineteen words, and it does the work of a paragraph of '
            + 'regret.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if the interval had been bad? If I had just not got round to it?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: '⚠ Then say nothing about the interval at all, and never invent a '
            + 'reason. ⚠ A reader who is given a false explanation for four '
            + 'months of silence has been told something they can check — and the '
            + 'one thing worse than an unexplained silence is an explained one '
            + 'that is not true.' }
  ]
});

PBE8.scene('u15-15-6-pair', {
  set: 'writingdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.43, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I am sorry for the delay in coming back to you.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Did you owe them a letter earlier?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I suppose in August.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What could you have said in August?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That we intended to put the accounts on documentary credit.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which they had already read in the application.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So you owed them nothing in August. What were you waiting for?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A month-end figure.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Then the interval was the figure, and the apology was for '
            + 'something you did not do wrong.' }
  ]
});

PBE8.scene('u15-15-7', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ms Tannous has not ordered since April. Her agreed terms of 28 '
            + 'April ran twelve months from 1 May and we have not asked her to '
            + 'renew them. I am putting the account down as closed for the year.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ She telephoned in September.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'She what?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ About the fourth of the month. She asked what the bench price '
            + 'was and whether the Monday delivery still ran. ⚠ I told her and '
            + 'she said thank you and that was the whole call.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ Did you write it down?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ No. She did not place an order and there was nothing to write. ⚠ '
            + 'A call where nobody orders anything has nowhere to go — it is the '
            + 'same as the plater\'s shortfalls.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Hala, since April everybody in this company has been saying that '
            + 'she will not deal with us again after the letter.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ I know. I have heard Bassel say it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ And what did she actually say in April?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ She said she would need to think about it. ⚠ Nobody has ever '
            + 'said anything else, and nobody has asked her since.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ So there has never been a refusal.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ There has never been a refusal. There has been seven months of '
            + 'us assuming one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ And she asked for a price in September, which is the thing a '
            + 'person does when they are deciding whether to order.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ Or when they want to see whether you will treat them the same. ⚠ '
            + 'I gave her the same price as anybody else and I did not mention '
            + 'the letter, because mentioning it would have been about us.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ That was the right answer, and nobody told you to give it.' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ Nobody tells me anything about that account. ⚠ If you want to '
            + 'know whether she has refused us, the way to find out is to ask her '
            + '— and there is no letter in this unit that does the job of a '
            + 'telephone call.' }
  ]
});

PBE8.scene('u15-15-7-pair', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I am putting the Tannous account down as closed for the year.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'She telephoned in September.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What did she want?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'The bench price, and whether the Monday delivery still ran.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What did she actually say in April?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'That she would need to think about it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And who has asked her since?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Nobody.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So there has never been a refusal.' },
    { who: 'hala', cam: { shot: 'close' },
      en: 'There has been seven months of us assuming one.' }
  ]
});

PBE8.scene('u15-15-7-b', {
  set: 'writingdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.24, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.63, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Ms Tannous has not ordered since April, and her agreed terms of 28 '
            + 'April ran twelve months from 1 May. I am putting the account down '
            + 'as closed for the year.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ She telephoned in September. About the fourth of the month. She '
            + 'asked what the bench price was and whether the Monday delivery '
            + 'still ran.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Did you write it down?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ No. She did not place an order and there was nothing to write. A '
            + 'call where nobody orders anything has nowhere to go.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Since April everybody here has been saying she will not deal with '
            + 'us again after the letter. What did she actually say in April?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ She said she would need to think about it. ⚠ Nobody has ever '
            + 'said anything else, and nobody has asked her since.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So there has never been a refusal.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: '⚠ There has never been a refusal. There has been seven months of '
            + 'us assuming one. ⚠ I gave her the same price as anybody else and I '
            + 'did not mention the letter, because mentioning it would have been '
            + 'about us.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That was the right answer, and nobody told you to give it.' },
    { who: 'hala', cam: { shot: 'close' },
      en: '⚠ If you want to know whether she has refused us, the way to find '
            + 'out is to ask her. ⚠ There is no letter that does the job of a '
            + 'telephone call.' }
  ]
});
