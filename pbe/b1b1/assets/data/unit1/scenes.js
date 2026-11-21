/* Unit 1 — the acted dialogues. Every line is the book's own. */
PBE5.scene('u1-1-1', {
  set: 'accountdesk',
  arr: 0,
  cast: {
    ayoub: { rig: 'm-50s-a', name: 'Mr Ayoub', voice: 'en-CA-LiamNeural', shirt: '#3f5668', shirt2: '#32454f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'ayoub', cam: { shot: 'wide' },
      en: 'You are telephoning a freight agent who has never heard of us. '
            + 'Ninety seconds. I am timing it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Good morning, my name is Nour Mansour and I am the administration '
            + 'coordinator at Sham Trading.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Stop. Administration coordinator of what? He has no idea whether '
            + 'that means you order the tea or you sign the contracts.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '…I handle the paperwork for both our sites — the Mezzeh warehouse '
            + 'and the Baghdad Street store.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Better. That is a job he can picture. Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I am calling because we are opening an account with a freight '
            + 'agent this month, and I am collecting three quotations.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Now the part everybody leaves out. What do you want from this call?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'A quotation?' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Then say so, and say by when. Otherwise he puts the telephone down '
            + 'with a pleasant feeling and no task.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I would like a quotation by Thursday, and I would like to know who '
            + 'I speak to after that.' },
    { who: 'ayoub', cam: { shot: 'mid' },
      en: 'Eighty-one seconds, and the last two sentences did the work. One '
            + 'more thing: you said I am covering Baghdad Street. Keep that for '
            + 'the temporary half of the job and keep I handle for the permanent '
            + 'half. The difference tells him whether to write your name down or '
            + 'the role.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if he asks how long I have been there?' },
    { who: 'ayoub', cam: { shot: 'close' },
      en: 'Answer it honestly and briefly. He is not asking for your history; '
            + 'he is deciding whether he will have to repeat himself in October.' }
  ]
});

PBE5.scene('u1-1-1-pair', {
  set: 'accountdesk',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Good morning, my name is Nour Mansour and I am the administration '
            + 'coordinator at Sham Trading.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Stop. Coordinator of what? They have no idea whether that means '
            + 'you count the petty cash or you move the money.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…I bank the takings from both our sites, every day.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Better. That is a job they can picture. Go on.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'I am calling because we opened a second store in June and the cash '
            + 'from it is still coming to the Mezzeh account.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Now the part everybody leaves out. What do you want from this call?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'An appointment this week, and the name of whoever opens accounts, '
            + 'so that I do not explain this twice.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Seventy seconds, and the last sentence did the work.' }
  ]
});

PBE5.scene('u1-1-2', {
  set: 'accountdesk',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    hala: { rig: 'f-30s-a', name: 'Hala', voice: 'en-US-MichelleNeural', shirt: '#4a7f6a', shirt2: '#3a6454',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Your three lines for the contact page. You have written: Hala '
            + 'Mourad, customer service, Mezzeh counter, eight until four.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'That is my job.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is your title and your hours. What passes through you?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Counter sales. Telephone orders. Complaints, mostly.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Good — that is the page. Now a harder one. Of those three, which '
            + 'would you be asked about if it went wrong?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'All of them?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Think about Thursday. The wrap order went out short. Who did Mr Ayoub ask?' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'Abu Yasser. Because it was picked wrong.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So you handle telephone orders and you are not answerable for what '
            + 'leaves the warehouse. Two different sentences, and a stranger '
            + 'needs both: I handle telephone orders; the picking is the '
            + 'warehouse.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'And complaints?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Complaints you are answerable for, which is why that line should '
            + 'say so. I am responsible for complaints — meaning if a complaint '
            + 'is still open in a fortnight, it is me somebody comes to.' },
    { who: 'hala', cam: { shot: 'mid' },
      en: 'There is one more. I cover the counter at Baghdad Street on Saturdays.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Then that is a dotted line, and it goes on the page too. A '
            + 'stranger who telephones on a Saturday and is told "she is at the '
            + 'other site" learns that we are disorganised. One line prevents it.' }
  ]
});

PBE5.scene('u1-1-2-pair', {
  set: 'accountdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'My three lines: Nadia Sayegh, accounts, Sunday to Thursday, eight '
            + 'until four.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'That is your title and your hours. What passes through you?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Invoices. The ledger. Payment queries, mostly.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good. Now — of those three, which would you be asked about if it went wrong?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'All of them. Everybody telephones me about payment.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Think about the Haffar account. Who did Mr Ayoub ask when it was '
            + 'four months late?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Bassel. Because chasing is sales.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'So you handle payment queries and you are not answerable for the '
            + 'money arriving. Two sentences, and the second one has been doing '
            + 'you harm for a year.' }
  ]
});

PBE5.scene('u1-1-3', {
  set: 'accountdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    jaber: { rig: 'm-50s-a', name: 'Mr Jaber', voice: 'en-US-BrianMultilingualNeural', shirt: '#6b5a3f', shirt2: '#554831',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Four things before we place anything, if I may. Who do I speak to '
            + 'about a collection once it has been booked?' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'Me, or Samira on the desk if I am out. Never the driver — he will '
            + 'agree to anything.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you, that is useful already. Second: what notice do you need '
            + 'for a collection?' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'By four o\'clock the day before. After four it becomes a favour '
            + 'rather than a booking.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Third: how do you want the booking — telephone, or in writing?' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'In writing, please. Telephone bookings are the ones that go wrong '
            + 'and then it is your word against mine.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Fourth: who signs for the goods at your end, and does that person '
            + 'check the count?' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'The driver signs. He does not check the count and he will tell you he has.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is worth knowing. And one more, which is the one I really '
            + 'wanted to ask. With a new customer like us, what goes wrong most '
            + 'often in the first two months?' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'Addresses. Nine times out of ten. Somebody gives us the office '
            + 'address and the goods are at the warehouse, or the other way '
            + 'round, and we charge for a failed collection and the customer is '
            + 'furious.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'We have two sites.' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'Then put the site on the booking, in capitals, every time, and you '
            + 'will never hear from me about it. I tell everybody that and about '
            + 'a third of them do it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Is there anything else you wish customers asked you?' },
    { who: 'jaber', cam: { shot: 'close' },
      en: 'That, mostly. You would be surprised how few people ask what goes '
            + 'wrong. They ask the price four times and the address never.' }
  ]
});

PBE5.scene('u1-1-3-pair', {
  set: 'accountdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Four things before we place anything, if I may. Who do I speak to '
            + 'about a proof once it is sent?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Me, or my son if I am at the machine. Not the boy on the counter.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Second: what notice do you need for a run of labels?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Two working days from approval. From approval, not from the order.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Third: how do you want the approval — telephone, or in writing?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'In writing, with the date on it. Nobody ever does it and then they '
            + 'argue about the colour.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Fourth: who signs for the finished run, and does that person check it?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Whoever collects. They do not check. They look at the top one.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And one more. With a new customer like us, what goes wrong most '
            + 'often in the first two months?' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Colour. Approved by telephone, then disputed. Nine times out of ten.' }
  ]
});

PBE5.scene('u1-1-4', {
  set: 'accountdesk',
  arr: 0,
  cast: {
    jaber: { rig: 'm-50s-a', name: 'Mr Jaber', voice: 'en-US-BrianMultilingualNeural', shirt: '#6b5a3f', shirt2: '#554831',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    bassel: { rig: 'm-20s-b', name: 'Bassel', voice: 'en-IE-ConnorNeural', shirt: '#4a7f5a', shirt2: '#3a6447',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'jaber', cam: { shot: 'wide' },
      en: 'So if I have a query about a collection, I telephone — who?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Hala. Or Nour. Or if it is about the count, Abu Yasser. If it is '
            + 'Saturday, Nour again, unless it is the Baghdad Street one, then '
            + 'Hala.' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'I have written four names and I am no further on.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'They are the right four names.' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'They are. And in a year two of them will be doing something else '
            + 'and I will still be telephoning them. Tell me the jobs.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'A collection query goes to whoever is on the counter. A count '
            + 'query goes to the warehouse. Anything about the account goes to '
            + 'the coordinator.' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'That I can keep. Now give me the names as well, so I know who to '
            + 'ask for today.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'Counter is Hala. Warehouse is Abu Yasser. Coordinator is Nour.' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'Good. Both, always — the role so the page lasts, the name so I do '
            + 'not have to say whoever is on the counter to a human being.' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'And Nour covers the counter on Saturdays.' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'Then the role is whoever is on the counter and on Saturday that '
            + 'happens to be her. You see how much simpler that is than four '
            + 'names and an exception?' },
    { who: 'bassel', cam: { shot: 'mid' },
      en: 'My page says ask Hala.' },
    { who: 'jaber', cam: { shot: 'close' },
      en: 'Your page will be wrong the first week she is on holiday, and I '
            + 'will think you are disorganised when in fact you are only out of '
            + 'date.' }
  ]
});

PBE5.scene('u1-1-4-pair', {
  set: 'accountdesk',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'So if I have a query about an invoice, I telephone — who?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Me. Everything comes to me.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I have written one name and I am worse off than with four. What '
            + 'happens the week you are away?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It waits.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'For a customer that is the same as nobody deals with it. Tell me the jobs.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…There is only one job. I am the office.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Then write that, and write what happens in August: the office — '
            + 'one person — and in her absence anything urgent goes to the owner '
            + 'on his mobile. That is two lines and it is true.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'He will not thank me for putting his mobile on a page.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'He will not thank you for the alternative either, which is a '
            + 'customer who telephoned for a fortnight and then stopped.' }
  ]
});

PBE5.scene('u1-1-5', {
  set: 'accountdesk',
  arr: 1,
  cast: {
    customer: { rig: 'f-30s-a', name: 'Customer', voice: 'en-GB-SoniaNeural', shirt: '#4f7fa8', shirt2: '#3f6686',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'customer', cam: { shot: 'wide' },
      en: 'I have been passed to four people about one invoice. The last one '
            + 'said it was not her department and put me back to the switchboard.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I am sorry. That should not have happened, and it is not going to '
            + 'happen again on this call.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'So is it your department?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'No. Invoices are accounts, and that is Nadia. That is the first '
            + 'part of my answer and it is the useless part.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The second part is the name: Nadia Sayegh, accounts, and she is '
            + 'here until four. The third part is what I am going to do: I am '
            + 'going to take the invoice number from you, put it in front of her '
            + 'myself, and telephone you back before twelve whether she has found '
            + 'it or not.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Can you not simply put me through?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'I could, and if she is on another call you are back at the '
            + 'switchboard and we have made it five people. I would rather take '
            + 'two minutes now and ring you once.' },
    { who: 'customer', cam: { shot: 'mid' },
      en: 'Nobody has offered to telephone me back.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then that is the fault, not the department. Invoice number?' },
    { who: 'customer', cam: { shot: 'mid' },
      en: '3318.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Thank you. And if I have not telephoned you by twelve, telephone '
            + 'me and say "Nour, you said twelve" — I would rather be embarrassed '
            + 'than have you waiting.' }
  ]
});

PBE5.scene('u1-1-5-pair', {
  set: 'accountdesk',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'There is a skip outside your door and it has been there a week. It '
            + 'is blocking the pavement.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I am sorry. That should not have happened, and it is not going to '
            + 'happen again on this call.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So is it yours?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'No. It is not ours and it is not the municipality\'s; it belongs '
            + 'to the builders doing the flat above. That is the first part of my '
            + 'answer and it is the useless part.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The second part is the name: the foreman is Mr Shaheen and he is '
            + 'on site mornings. The third is what I am going to do: I am going '
            + 'to speak to him myself this morning and telephone you before two '
            + 'to say what he said.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is not really your job.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is my pavement for eleven hours a day, and you have telephoned '
            + 'the only door that is open.' }
  ]
});

PBE5.scene('u1-1-6', {
  set: 'accountdesk',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    jaber: { rig: 'm-50s-a', name: 'Mr Jaber', voice: 'en-US-BrianMultilingualNeural', shirt: '#6b5a3f', shirt2: '#554831',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Good morning — Nour Mansour, Sham Trading. I am telephoning to '
            + 'confirm Thursday\'s collection from Mezzeh.' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'Thursday, Mezzeh, booked. Eleven o\'clock.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Eleven. Thank you. So eleven is the booked time, not the window.' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'It is the booked time. The window is eleven to one, if I am honest with you.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is useful, and I would rather know. Is the window the same '
            + 'for the afternoon runs?' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'Afternoons are worse. Two to five, and in Ramadan it is anybody\'s guess.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then we will book mornings. And while I have you — what time do '
            + 'you need a change by, if Thursday stops working?' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'Four o\'clock the day before. I know I told you that, but people '
            + 'forget it and then ring me at eight in the morning.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You did tell me, and I have it written down. I am checking it '
            + 'because I am about to put it on a card on the wall and I would '
            + 'rather not put a wrong time on a wall.' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'Four o\'clock. And put my mobile on the card as well — the office '
            + 'line rings in an empty room after five.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you. That is the thing I did not know I needed.' },
    { who: 'jaber', cam: { shot: 'close' },
      en: 'Most people find out at half past five on a Wednesday.' }
  ]
});

PBE5.scene('u1-1-6-pair', {
  set: 'accountdesk',
  arr: 2,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Good morning — Nour Mansour, Sham Trading. I am telephoning to '
            + 'confirm the engineer on Tuesday morning.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Tuesday morning, yes. It is in the book.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Thank you. So Tuesday morning is the booking, not the arrival time.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'It is the booking. He could be with you at seven or at one. Seven, '
            + 'usually, if you are first.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That is useful. Is there a way of being first?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Ask for first call when you book. Nobody does, and then everybody '
            + 'complains about one o\'clock.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And while I have you — if he does not come at all, who do I telephone?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Him. Not us. I will give you his mobile; the office cannot find '
            + 'him any better than you can.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Thank you. That is the thing I did not know I needed.' }
  ]
});

PBE5.scene('u1-1-7', {
  set: 'accountdesk',
  arr: 0,
  cast: {
    fadi: { rig: 'm-30s-a', name: 'Fadi', voice: 'en-US-GuyNeural', shirt: '#8a4b2f', shirt2: '#6f3c25',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'fadi', cam: { shot: 'wide' },
      en: 'The new page for the freight people. I am not on it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'You are, but as a job rather than a name. Read the warehouse row.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: '"A question about a count or a quantity — the warehouse — Abu Yasser."' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the collection row above it says whoever is on the counter. '
            + 'You are not a route on this page because nothing from Jaber '
            + 'Freight should ever arrive at you first.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'It arrives at me constantly. Their drivers ask me where to back up '
            + 'and whether we have signed.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then that is a fault on the page and not a fault in your reading. '
            + 'What do you tell them?' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'I point at the yard and I say Abu Yasser has the sheet.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which is exactly right, and it should be a row: a driver at the '
            + 'gate with a question — the warehouse — Abu Yasser. Thank you; that '
            + 'is the page improved by somebody who uses it.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'And the names change. Hala is at Baghdad Street on Saturdays.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The middle column is the part that lasts — the role. The '
            + 'right-hand column is today\'s names and it is in pencil for that '
            + 'reason. In a year two of those names will be wrong and the middle '
            + 'column will still be true.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'So I am the warehouse on a Saturday.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On a Saturday you are the only person in the yard, which is a '
            + 'dotted line and belongs on the page. Write it on the sheet and I '
            + 'will put it on properly.' },
    { who: 'fadi', cam: { shot: 'mid' },
      en: 'Nobody has ever asked me to correct a page before.' },
    { who: 'nour', cam: { shot: 'close' },
      en: 'Nobody has ever had a page that was wrong in a way anybody could see.' }
  ]
});

PBE5.scene('u1-1-7-pair', {
  set: 'accountdesk',
  arr: 0,
  cast: {
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'b', cam: { shot: 'wide' },
      en: 'I am on this page for invoices. I am telephoned all day about '
            + 'chasing payment, which is not mine at all.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then the page has a route it should not have. Who is telephoning '
            + 'you — customers, or us?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Customers. They have my number from the invoice.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'So the invoice is the page, not this one. If your number is on '
            + 'every invoice, every payment conversation comes to you whatever '
            + 'any routing page says.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I had not thought of the invoice as a routing page.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is the one with the widest circulation in the company. What '
            + 'would you rather it said?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Queries on this invoice: accounts. Payment arrangements: sales, '
            + 'and a different number.' },
    { who: 'a', cam: { shot: 'close' },
      en: 'Then that is the correction, and it is to the invoice template, '
            + 'not to this sheet. I will take it to Mr Ayoub with your name on '
            + 'it.' }
  ]
});

PBE5.scene('u1-1-7-b', {
  set: 'accountdesk',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    jaber: { rig: 'm-50s-a', name: 'Mr Jaber', voice: 'en-US-BrianMultilingualNeural', shirt: '#6b5a3f', shirt2: '#554831',
      full: true, scale: 0.62, bottom: 30, at: [0.72, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Good morning — Nour Mansour, Sham Trading, at the Mezzeh office. I '
            + 'handle the paperwork for both our sites. Four questions before we '
            + 'place anything, if I may.' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'Go on.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Who do I speak to about a collection once it is booked, and who if '
            + 'you are out?' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'Me — Mr Jaber — or Samira on the desk if I am out. Never the '
            + 'driver; he will agree to anything.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Thank you. What notice do you need for a collection?' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'By four o\'clock the day before. After four it is a favour rather '
            + 'than a booking.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And who signs for the goods at your end?' },
    { who: 'jaber', cam: { shot: 'mid' },
      en: 'The driver signs. He does not check the count and he will tell you he has.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'One more. With a new customer like us, what goes wrong most often '
            + 'in the first two months?' },
    { who: 'jaber', cam: { shot: 'close' },
      en: 'Addresses — nine times out of ten. We are given the office and the '
            + 'goods are at the warehouse. Put the site in capitals on every '
            + 'booking and you will never hear from me about it.' }
  ]
});
