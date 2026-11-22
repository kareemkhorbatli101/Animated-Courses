/* Unit 17 — the acted dialogues. Every line is the book's own. */
PBE8.scene('u17-17-1', {
  set: 'readingroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'I have summarised the bundle. Twenty-two paragraphs, one for each document.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then you have indexed it, which is useful, and you have not summarised it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is the difference?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ An index is organised by document. A summary is organised by '
            + 'question. ⚠ Nobody decides anything by document.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Who is actually going to read the bundle?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Me, because I am paid to, and the arbitrator, in the parts the '
            + 'parties take her to. Mr Ayoub will read two pages. The committee '
            + 'at the bank will read half a page if we ever have to tell them.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And in five years?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ In five years somebody in your office will read your summary and '
            + 'the bundle will be in a box in a store. ⚠ Which is the reader who '
            + 'matters most and the one nobody writes for.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So how long?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Two pages, and the length is a decision rather than a '
            + 'constraint. ⚠ Say so at the top: this summary is written to be '
            + 'acted on without the bundle.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if somebody needs the detail?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then every load-bearing sentence carries a page number and they '
            + 'go and look. ⚠ What a summary must survive is being read by '
            + 'somebody who has no access to the original at all — and the test '
            + 'is not whether it is accurate. It is whether a decision taken on '
            + 'it alone would be the same decision.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Twenty-two paragraphs is accurate.' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ It is accurate and it is unusable, and unusable is worse — '
            + 'because an inaccurate summary gets corrected and an unusable one '
            + 'gets ignored, and nobody ever says so.' }
  ]
});

PBE8.scene('u17-17-1-pair', {
  set: 'readingroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Twenty-two paragraphs, one for each document.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'What question does it answer?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'All of them.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Name one and show me where the answer is.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Was the condition known to us? …It is in paragraph nine and partly '
            + 'in paragraph fourteen.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So a reader with that question has to read twenty-two paragraphs '
            + 'to find two.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'They could use the headings.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'The headings are document numbers.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then it is organised by the file and not by the decision.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Which is an index, and an index is useful. It is not what anybody '
            + 'asked you for.' }
  ]
});

PBE8.scene('u17-17-2', {
  set: 'readingroom',
  arr: 1,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'How much space for each document?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Wrong question. ⚠ How much space for each of the things that '
            + 'could change the outcome.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Three documents could.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then those three get a page between them and the other nineteen '
            + 'get a line each. ⚠ And the ratio is itself the finding — a reader '
            + 'who sees three paragraphs and nineteen lines has been told the '
            + 'shape of the case before reading a word of it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is the test?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ If this document did not exist, would the answer change? ⚠ Yes '
            + 'means a paragraph. No means a line.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Nineteen of them are correct and relevant.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Correct and relevant and of no consequence, which is the '
            + 'commonest condition of a document in a bundle. ⚠ Relevance is what '
            + 'gets a thing into a bundle. Consequence is what gets it a '
            + 'paragraph.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then why list the nineteen at all?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Because a reader told that nineteen documents do not matter '
            + 'wants to see that somebody read them. ⚠ Nineteen lines cost half a '
            + 'page and they are the cheapest credibility in the summary.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if I am wrong about one of the nineteen?' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ Then it is on the list with a page number and the reader finds '
            + 'it, which is the whole reason for the list. ⚠ A document left out '
            + 'entirely is a document you have decided about in private. A '
            + 'document on a one-line list is a document you have decided about '
            + 'in public, and somebody can correct you in a morning.' }
  ]
});

PBE8.scene('u17-17-2-pair', {
  set: 'readingroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Schedule 19 should have a paragraph. The petty cash reconciliation '
            + 'is relevant.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'If schedule 19 did not exist, would the answer change?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'The answer to what?' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'To any of the four questions your summary is organised around.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…No.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is it relevant?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Yes. It is part of the audit.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So it is relevant and of no consequence.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which is not a thing I had a word for.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'It is the commonest condition of a document in any file, and it gets a line.' }
  ]
});

PBE8.scene('u17-17-3', {
  set: 'readingroom',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Our root-cause paper says that no occurrence was reported by any '
            + 'customer before March.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Read me the sentence.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The condition has been present since April 2023 and was '
            + 'identified in the course of this review; no occurrence was '
            + 'reported by any customer before March.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ So you have quoted the second half of a sentence whose first '
            + 'half is the claim against us.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The second half is true.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Every half-sentence anybody ever quoted was true. ⚠ The question '
            + 'is not whether it is accurate, it is who else has the document — '
            + 'and in an arbitration the other side has all of it and so does the '
            + 'arbitrator.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So they will quote the first half.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ They will quote the whole sentence, with your half-quotation '
            + 'underneath it, and that costs you more than the sentence ever '
            + 'could. ⚠ A party that has been caught shortening one quotation has '
            + 'every other quotation in its summary read twice.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Then I quote the whole thing.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ You quote the whole thing, and you say which half is against '
            + 'you, in your own words, before they do. ⚠ The rule is: a quotation '
            + 'that improves your side is a quotation you have not finished '
            + 'reading.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the test?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Would the other side quote it the same way? ⚠ If they would '
            + 'quote it longer, you have cut it. If they would quote it shorter, '
            + 'you have found something.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is a test I can apply without asking anybody.' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ Which is why it is the only one worth having. And it applies to '
            + 'your own documents hardest of all — ⚠ because the only quotations '
            + 'in this bundle that we can be caught shortening are ours.' }
  ]
});

PBE8.scene('u17-17-3-pair', {
  set: 'readingroom',
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
      en: 'I have applied the test to all four of their quotations and found '
            + 'nothing wrong.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Good. Now apply it to ours.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Ours are from our own documents.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Which documents does the other side have?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'All of them. It is a bundle.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So which quotations can we be caught shortening?' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Ours.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And where did you not look?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'At ours.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'The test does its work on your own file, which is the one you are '
            + 'not suspicious of.' }
  ]
});

PBE8.scene('u17-17-4', {
  set: 'readingroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'On 14 May I telephoned Mr Hamdan and he accepted that the pallet '
            + 'condition predated the agreement. It is in no document.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ On either side?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'On either side. I made the call and I did not note it.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then it goes in the summary, on the first page, and it goes in '
            + 'as a fact about the bundle.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It helps nobody. It is our best point and we cannot prove it.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ It is not a point at all. That is why it goes in. ⚠ A summary '
            + 'that lists what the bundle contains and not what it lacks tells '
            + 'the reader that the bundle is complete — and the one thing we know '
            + 'is that it is not.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Mr Ayoub will ask why we did not note it.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ He will, and the answer is in your sentence: the absence is '
            + 'ours. ⚠ Four words, and they stop the conversation you are '
            + 'dreading — because the only alternative is that he works it out '
            + 'and asks the question in a worse form.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Should I say what I remember of the call?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ In the summary, no. ⚠ A summary is about what the bundle says '
            + 'and does not say. What you remember is a separate document with '
            + 'your name on it, dated, and written before anybody has told you '
            + 'what would be convenient to remember.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Written today.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Written today, which is eight months late and is the earliest it '
            + 'can now be written. ⚠ And in the summary, one sentence: there is '
            + 'no record anywhere of the call, and the absence is ours.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And if the other side has a note of it?' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ Then your sentence is wrong and they will say so, and you will '
            + 'have been wrong about a fact rather than silent about one. ⚠ Those '
            + 'are completely different positions, and only one of them survives.' }
  ]
});

PBE8.scene('u17-17-4-pair', {
  set: 'readingroom',
  arr: 0,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'I am going to leave it out. It is our best point and we cannot prove it.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Is it a point?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It would be, if we had a note.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'You have not got a note, so what is it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'A gap.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Whose?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Ours. I made the call.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So it goes in, as a fact about the bundle, with four words saying '
            + 'whose it is.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'And Mr Ayoub will ask why I did not note it.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'He will ask it anyway. The four words decide whether he asks it kindly.' }
  ]
});

PBE8.scene('u17-17-5', {
  set: 'readingroom',
  arr: 1,
  cast: {
    nadia: { rig: 'f-30s-a', name: 'Nadia', voice: 'en-GB-LibbyNeural', shirt: '#8a5a7a', shirt2: '#6e4861',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nadia', cam: { shot: 'wide' },
      en: 'I have read your summary with the bundle shut, as you asked. Four '
            + 'sentences do not work.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Which?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ The ones that refer to a document instead of saying what it '
            + 'says. ⚠ The gate sheets support our position. I cannot use that. '
            + 'Supported how?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Each one carries a counted figure signed by name, and nine of the '
            + 'eleven match the order exactly.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then write that, and put the pages after it. ⚠ The test is: '
            + 'could I act on this sentence if the bundle were in a box in Homs?' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And the one I had wrong?' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Our credit note of 10 October, 58,000, is in the bundle at page '
            + '95. ⚠ I read that as a part payment of the claim.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is the marking credit. It has nothing to do with the pallets.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ I know that now because I asked you. ⚠ A reader who does not ask '
            + 'carries that mistake into a meeting, and 58,000 against 2.1 '
            + 'million looks exactly like a firm that has started paying.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is in the nineteen, with a line.' },
    { who: 'nadia', cam: { shot: 'mid' },
      en: '⚠ Then the line is in the wrong place. ⚠ A document that a reader '
            + 'will mis-read belongs on the first page, in a sentence that says '
            + 'what it is NOT — and the fact that it is of no consequence is '
            + 'exactly why nobody will check it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So consequence and misreadability are different questions.' },
    { who: 'nadia', cam: { shot: 'close' },
      en: '⚠ Completely different, and the second one has no section in your '
            + 'summary. ⚠ Proportion tells you what to put a paragraph on. '
            + 'Misreadability tells you what to put a sentence on whether it '
            + 'deserves one or not.' }
  ]
});

PBE8.scene('u17-17-5-pair', {
  set: 'readingroom',
  arr: 1,
  cast: {
    a: { rig: 'm-20s-a', name: 'A', voice: 'en-US-AndrewNeural', shirt: '#3f6f8f', shirt2: '#315a74',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' },
    b: { rig: 'f-20s-b', name: 'B', voice: 'en-US-AvaNeural', shirt: '#a85270', shirt2: '#86415a',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'a', cam: { shot: 'wide' },
      en: 'Our credit note of 10 October, 58,000, is in the bundle at page 95.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So we have paid them 58,000.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'No. That is the marking credit from September.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'There is nothing in your sentence that says so.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is in the nineteen, with a line.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I have not read the nineteen. I have read page one.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Nobody would assume we had started paying.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'I did, ten seconds ago, and I know this file.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Then it belongs on page one.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'In a sentence that says what it is not.' }
  ]
});

PBE8.scene('u17-17-6', {
  set: 'readingroom',
  arr: 2,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    sayegh: { rig: 'm-50s-b', name: 'Mr Sayegh', voice: 'en-AU-WilliamMultilingualNeural', shirt: '#4a5e74', shirt2: '#3a4a5c',
      full: true, scale: 0.62, bottom: 30, at: [0.46, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Their case, in four lines: they allege that the condition was '
            + 'known to us, they assert that eleven consignments were affected, '
            + 'and they purport to rely on our own root-cause paper.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Three verdicts in one sentence. ⚠ Allege, assert and purport all '
            + 'mean and they are wrong.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'They are wrong about the eleven.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Then that goes in our answer, which is a different document. ⚠ A '
            + 'summary of the other side\'s case that contains the answer to it '
            + 'is not a summary, it is an argument with gaps in it — and the '
            + 'arbitrator will read it as one.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So I write the claim is.' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ The claim is that the condition was known from April 2023. The '
            + 'document relied on is our own root-cause paper of March. ⚠ Two '
            + 'sentences, no verdict, and the second one is the one that matters '
            + 'to us.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'And where do the answers go?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ In the answer, numbered against the claim. ⚠ The summary tells '
            + 'Mr Ayoub what is being said. The answer tells him what we say '
            + 'about it, and he needs the first one first — because a man who '
            + 'reads our answer before their claim never knows what the claim '
            + 'was.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'What is the test?' },
    { who: 'sayegh', cam: { shot: 'mid' },
      en: '⚠ Could Mr Hamdan read your summary of his case without '
            + 'complaining? ⚠ If he could, it is a summary. If he would say that '
            + 'is not what we are saying, it is our answer with their name on it.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'That is the recognition test from the Homs papers.' },
    { who: 'sayegh', cam: { shot: 'close' },
      en: '⚠ It is the same test and it is harder here, because in the Homs '
            + 'papers you wanted Bassel to recognise himself. ⚠ Here you do not '
            + 'want Mr Hamdan to recognise anything — and the test does not care '
            + 'what you want.' }
  ]
});

PBE8.scene('u17-17-6-pair', {
  set: 'readingroom',
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
      en: 'I have put our answers in with the claim. They are short and obvious.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'Read me your summary of their case without the answers.' },
    { who: 'a', cam: { shot: 'mid' },
      en: '…Then it is four lines instead of nine.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what does Mr Ayoub know about the claim from the nine?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'That it is wrong.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'And what is it?' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'It is in there, in the subordinate clauses.' },
    { who: 'b', cam: { shot: 'mid' },
      en: 'So he reconstructs it from your answer.' },
    { who: 'a', cam: { shot: 'mid' },
      en: 'Which is the one version nobody should be working from.' },
    { who: 'b', cam: { shot: 'close' },
      en: 'Including you, in the meeting, when they put it properly.' }
  ]
});

PBE8.scene('u17-17-7', {
  set: 'readingroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Attar, your audit note of 2024. We quote one sentence of it '
            + 'constantly. The gate sheet is the primary record.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ That is not a sentence I have ever written.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'It is on page four of your note.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Read it to me from the note.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The gate sheet is the primary record of what left the yard, and '
            + 'is not a record of condition.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then you have been quoting the first half of my sentence for two '
            + 'years, and the half you have been leaving off is the half I wrote '
            + 'it for.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Dallal Freres are relying on the half we quote.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Of course they are. You gave it to them. ⚠ It is in three of '
            + 'your own letters, and it is in the facility paper you sent the '
            + 'bank in June.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ It is in the arbitration bundle at page 177 in the short form, '
            + 'from our own letter of May.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then the claimant is quoting your quotation of me, and the '
            + 'arbitrator will read my note, which says the opposite about '
            + 'condition. ⚠ That is better for you than it sounds and worse than '
            + 'it should have been.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Will you write to them saying what the sentence says?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ No. ⚠ The note says what it says and it is in the bundle at page '
            + '177 in full as well. ⚠ If I write a letter now explaining my own '
            + 'sentence, I have become a witness in a dispute about a company I '
            + 'audit, and that is worth less to you than the note is.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the remedy is the note itself.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ The remedy is that somebody reads it. ⚠ In eleven years nobody '
            + 'in your office has read page four. You have all read a quotation '
            + 'of it, in each other\'s letters, which is how a half-sentence '
            + 'becomes a thing everybody knows.' }
  ]
});

PBE8.scene('u17-17-7-pair', {
  set: 'readingroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'We quote one sentence of your note constantly. The gate sheet is '
            + 'the primary record.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'That is not a sentence I have ever written. Read it to me from the note.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'The gate sheet is the primary record of what left the yard, and is '
            + 'not a record of condition.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'The half you leave off is the half I wrote it for.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Dallal are relying on the half we quote.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'You gave it to them. It is in three of your own letters.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Will you write and explain it?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: 'No. That makes me a witness about a company I audit.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the remedy is the note.' },
    { who: 'attar', cam: { shot: 'close' },
      en: 'The remedy is that somebody reads page four.' }
  ]
});

PBE8.scene('u17-17-7-b', {
  set: 'readingroom',
  arr: 0,
  cast: {
    nour: { rig: 'f-20s-a', name: 'Nour', voice: 'en-US-AriaNeural', shirt: '#b8527a', shirt2: '#95415f',
      full: true, scale: 0.62, bottom: 30, at: [0.20, 0.62],
      pose: 'rest' },
    attar: { rig: 'm-50s-b', name: 'Mr Attar', voice: 'en-US-AndrewMultilingualNeural', shirt: '#4a5a74', shirt2: '#3a4a60',
      full: true, scale: 0.62, bottom: 30, at: [0.70, 0.62],
      pose: 'rest' }
  },
  lines: [
    { who: 'nour', cam: { shot: 'wide' },
      en: 'Mr Attar, your audit note of 2024. We quote one sentence of it '
            + 'constantly. The gate sheet is the primary record.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ That is not a sentence I have ever written. Read it to me from the note.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: '⚠ The gate sheet is the primary record of what left the yard, and '
            + 'is not a record of condition.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Then you have been quoting the first half of my sentence for two '
            + 'years, and the half you have been leaving off is the half I wrote '
            + 'it for.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Dallal Freres are relying on the half we quote.' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ Of course they are. You gave it to them. It is in three of your '
            + 'own letters and in the facility paper you sent the bank in June.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'Will you write to them saying what the sentence says?' },
    { who: 'attar', cam: { shot: 'mid' },
      en: '⚠ No. The note says what it says and it is in the bundle at page '
            + '177 in full. ⚠ If I write a letter now explaining my own sentence, '
            + 'I have become a witness in a dispute about a company I audit, and '
            + 'that is worth less to you than the note is.' },
    { who: 'nour', cam: { shot: 'mid' },
      en: 'So the remedy is the note itself.' },
    { who: 'attar', cam: { shot: 'close' },
      en: '⚠ The remedy is that somebody reads it. In eleven years nobody in '
            + 'your office has read page four — you have all read a quotation of '
            + 'it, in each other\'s letters.' }
  ]
});
