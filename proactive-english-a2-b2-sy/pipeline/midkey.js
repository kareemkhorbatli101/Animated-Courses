// Proactive English A2 · Syria Edition · Book 1 · MID-BOOK TEST — Answer Key, audio scripts and marking
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, dlg, table, C } = L;
const out = [];
const sample = (paras) => box(null, paras, 'FFFFFF', C.navy);

out.push(h1('MID-BOOK TEST  ·  Answer Key, Audio Scripts and Marking'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition · Units 1–6_', { color: '7F7F7F' }));
out.push(box('For the teacher', [
  '**Before the test:** print one copy of the test for each student. **Do not** give out this key. Play each listening recording **twice**, with a 15-second pause between the two plays and 30 seconds at the end of each part.',
  '**If you have no recordings:** read the audio scripts in this key aloud, twice, at a slow natural speed. For Part 1, pause for 10 seconds after each conversation.',
  '**Timing:** Reading 30 min · Writing 20 min · Listening about 15 min · Speaking in pairs, about 5 minutes per pair (while the others do the Reading paper).',
  '**Total: 60 marks** – Reading 20 · Writing 15 · Listening 15 · Speaking 10.',
], C.grey, C.navy));

// READING
out.push(h2('PAPER 1 · READING  (20 marks – 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['Part 1 (6)', '1 B · 2 A · 3 A · 4 C · 5 B · 6 A'],
  ['Part 2 (5)', '7 A (Samira) · 8 B (Jamal) · 9 C (Hiba) · 10 B (Jamal) · 11 C (Hiba)'],
  ['Part 3 (5)', '12 B · 13 C · 14 A · 15 B · 16 C'],
  ['Part 4 (4)', '17 so · 18 off · 19 on · 20 on'],
], [1, 4]));
out.push(p('_Part 4 note: accept only these words. "so" (not "because"), "off" (not "down"), "on the left" (not "in"), "on Sunday" (not "in"/"at")._', { color: '595959' }));

// WRITING
out.push(pb());
out.push(h2('PAPER 2 · WRITING  (15 marks)'));
out.push(h3('Part 1 – message to the teacher (5 marks)'));
out.push(p('**Marking:** Content 3 (one mark for each of: reason for being late · arrival time · a question about the lesson) · Language 2 (0 = very hard to understand; 1 = mistakes but clear; 2 = good control of Unit 1–6 language). Under 25 words: maximum 3 marks.'));
out.push(p('**Sample answer (28 words):**'));
out.push(sample(['Dear Ms Huda, I\'m sorry, but I\'m late today because my bus is delayed. I think I\'ll arrive at a quarter past six. Are we doing the listening first? Tareq']));
out.push(h3('Part 2 – email to Anna (10 marks)'));
out.push(p('**Marking:** Content 5 (invitation 2 · what food 1 · how to travel 2) · Organisation 2 (greeting, order of ideas, ending) · Language 3 (range and accuracy of Unit 1–6 language: _Would you like to…?_, food words, transport, _It takes…_). Under 35 words: maximum 6 marks.'));
out.push(p('**Sample answer (62 words):**'));
out.push(sample([
  'Hi Anna,',
  'Would you like to come to my home for dinner on Thursday at seven? My mother and I are making fattoush and grilled chicken with rice, and my sister is making a milk pudding.',
  'From your hotel, take the Mezzeh service from the main street. It costs 2,000 and takes about twenty minutes. Get off at the big pharmacy and call me – I\'ll meet you there.',
  'Please tell me if there is any food you don\'t eat!',
  'See you on Thursday,',
  'Hiba',
]));
out.push(p('**A weaker answer that still passes (38 words) – 6/10:**'));
out.push(sample(['Hi Anna. Come to my house Thursday. We make fattoush and chicken. It is very good food. You take the service from your hotel, it is 2000 and take 20 minute. Get off at pharmacy. See you. Hiba']));
out.push(p('_Why 6: all three content points are there (5/5 content), but the organisation is thin (1/2 – no greeting line or proper ending) and there are tense, article and plural mistakes (0/3 → 1/3 as the message is still clear). Show students this answer and ask them to improve it._', { color: '595959' }));

// LISTENING
out.push(pb());
out.push(h2('PAPER 3 · LISTENING  (15 marks – 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['Part 1 (5)', '21 A · 22 B · 23 C · 24 B · 25 C'],
  ['Part 2 (5)', '26 third / 3rd · 27 two / 2 · 28 cooker · 29 900,000 · 30 four / 4'],
  ['Part 3 (5)', '31 A · 32 B · 33 B · 34 A · 35 C'],
], [1, 4]));
out.push(p('_Part 2 note: accept numbers written as figures or words. Accept "3rd floor" for 26 and "900000" or "900 thousand" for 29. Do not accept "cook" for 28._', { color: '595959' }));

out.push(h3('🔊 Track MT-1 · Audio script (Listening Part 1)'));
out.push(dlg(null, [
  ['**21**  Man', 'You\'re not eating anything!'],
  ['        Woman', 'I had a big breakfast – bread, cheese and some olives. I never drink coffee in the morning, only tea.'],
  ['**22**  Woman', 'Do you drive to the office?'],
  ['        Man', 'I\'ve got a car, but I leave it at home. There\'s no parking in the centre, so I take the service. It\'s cheaper too.'],
  ['**23**  Customer', 'What time do you close today?'],
  ['        Assistant', 'Usually at eight, but on Thursday we stay open until nine because it\'s our busiest day.'],
  ['**24**  Clerk', 'Where are you travelling to?'],
  ['        Woman', 'Homs, please. A return. How much is it?'],
  ['        Clerk', 'A single is twenty thousand and a return is thirty-five.'],
  ['**25**  Assistant', 'What exactly is the problem with the shoes?'],
  ['        Man', 'They fit well and the colour is fine, but look – there\'s a hole in the left one. I bought them last week!'],
]));
out.push(h3('🔊 Track MT-2 · Audio script (Listening Part 2)'));
out.push(dlg(null, [
  ['Woman', 'Hello, I\'m calling about the flat in Baramkeh. Can you tell me about it?'],
  ['Owner', 'Of course. It\'s on the third floor – I\'m sorry, there isn\'t a lift.'],
  ['Woman', 'That\'s OK. How many bedrooms are there?'],
  ['Owner', 'There are two bedrooms, a living room and a kitchen. In the kitchen there\'s a fridge and a cooker, but there isn\'t a washing machine. There\'s a laundry next to the building.'],
  ['Woman', 'And is there a balcony?'],
  ['Owner', 'Yes, a small one, with some plants.'],
  ['Woman', 'How much is the rent?'],
  ['Owner', 'Nine hundred thousand a month, and water is included.'],
  ['Woman', 'Can I see it tomorrow?'],
  ['Owner', 'Yes, but please call after four o\'clock – I work in the morning.'],
  ['Woman', 'After four. Thank you very much!'],
]));
out.push(h3('🔊 Track MT-3 · Audio script (Listening Part 3)'));
out.push(dlg(null, [
  ['Tareq', 'My name\'s Tareq and I work in a bank in Baramkeh. I live in Jaramana, and my journey is the hardest part of my day! It\'s only nine kilometres, but in the morning it takes me more than an hour. I leave home at seven and I arrive at about ten past eight.', ],
  ['', 'I have a car, but I never drive to the bank. There\'s no parking near it, and I don\'t want to spend twenty minutes looking for a space every morning. So I take two services and I walk for about ten minutes.'],
  ['', 'Some people hate the service, but I like it. I always take a book with me, so I read for half an hour. That\'s the only time in the day when nobody asks me questions!'],
  ['', 'On Fridays I don\'t work. My wife and I take the children to the park near our house, and in the afternoon we visit my parents. Well – usually. Sometimes I sleep!'],
]));

// SPEAKING
out.push(pb());
out.push(h2('PAPER 4 · SPEAKING  (10 marks)'));
out.push(p('**How to run it:** take two students at a time. Part 1: ask each student three or four questions from the list (about 2 minutes). Part 2: give the task, then **let the pair talk** – don\'t interrupt (about 2 minutes). Mark with the grid in the test paper.'));
out.push(h3('Part 1 – sample answers (what a good A2 answer sounds like)'));
out.push(dlg(null, [
  ['Teacher', 'Where do you live? Tell me about your neighbourhood.'],
  ['Student', 'I live in Jaramana, in the east of Damascus. It\'s a busy area with a lot of shops. There\'s a big bakery on my street and a park near my building, but the traffic is terrible in the evening.'],
  ['Teacher', 'How do you come to this class?'],
  ['Student', 'I take a service from the main street. It costs two thousand and it takes about half an hour, but in the morning it can take fifty minutes. Then I walk for five minutes.'],
  ['Teacher', 'Tell me about your family.'],
  ['Student', 'I\'ve got a big family. My parents live in Homs and I\'ve got two brothers and one sister. My sister is a teacher and she\'s got two children. I visit them every month.'],
]));
out.push(p('_Note the pattern: **answer + one extra detail**. A student who only says "Jaramana" or "By service" cannot get more than 2–3 marks for communication._', { color: '595959' }));
out.push(h3('Part 2 – sample conversation (two students)'));
out.push(dlg(null, [
  ['A', 'So, my friend is coming for one day. Shall we take him to the Old City?'],
  ['B', 'Good idea. How about going in the morning? It\'s too hot at two o\'clock.'],
  ['A', 'OK, let\'s meet at nine. Why don\'t we take a service? It\'s cheaper than a taxi.'],
  ['B', 'Hmm, I\'m not sure. Three people with bags… a taxi is faster and it isn\'t very expensive.'],
  ['A', 'That\'s true. A taxi, then. And after the Old City, how about lunch at Beit Al-Yasmin? The fattoush there is the best in Damascus.'],
  ['B', 'Perfect. Then we can walk to the museum because it\'s near the restaurant.'],
  ['A', 'So: a taxi at nine, the Old City, lunch at Beit Al-Yasmin, then the museum. Deal?'],
  ['B', 'Deal!'],
]));
out.push(p('**This pair would score 9–10:** different suggestion forms (_Shall we…? How about…? Why don\'t we…?_), a polite disagreement with a reason, comparatives and superlatives, and a clear decision at the end.'));

// RESULTS
out.push(h2('Marking summary and what to do next'));
out.push(table(['Paper', 'Marks', 'What it tests (Units 1–6)'], [
  ['Reading', '20', 'signs and messages (U2, U5, U6), people profiles (U2, U5), a longer personal text (U3), an open cloze (U6)'],
  ['Writing', '15', 'a short message (U1, U6) and an email with an invitation + travel instructions (U4, U6)'],
  ['Listening', '15', 'short conversations (U1–U5), completing notes about a flat (U3), a longer talk about a journey (U6)'],
  ['Speaking', '10', 'personal information and routines (U1, U2, U3, U6) and making suggestions together (U6)'],
], [1, 0.6, 4]));
out.push(sp());
out.push(box('What to do after the test', [
  '**42–60 (70%+):** ready for Unit 7. Give back the papers and go through only the questions that more than half the class got wrong.',
  '**30–41:** ready for Unit 7, but spend one lesson on the weakest paper first. Most common weak areas at this point: the present continuous vs present simple (U2, U4), comparatives (U5), and _too / not … enough_ (U5).',
  '**Under 30:** do a review week before Unit 7. Use the "I can…" lists from Units 1–6: the student ticks 😐 items, then you re-teach those cycles\' Language boxes and re-run their Stage 4 personalised tasks.',
  '**For every student:** put the Writing papers in their portfolio with the Unit 1–6 free-writing texts. Progress in writing is the clearest evidence of progress at A2.',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Mid-Book Test · Answer Key');
