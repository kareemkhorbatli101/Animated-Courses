// Proactive English — Series Bible (A2 Syria Edition)
const L = require('./lib');
const { p, h1, h2, h3, sp, box, table, bullet, C } = L;
const out = [];
out.push(h1('Proactive English — Series Bible'));
out.push(p('_Syria Edition · Version 1.1 · 17 October 2026 · Author: Mo (Mohamad Khorbatli)_', { color: '7F7F7F' }));
out.push(p('_Sections 1–6 are the A2 Syria Edition as first written. **Section 7 is the measured record across every level delivered so far** and supersedes any page or test estimate elsewhere in this document or in a level plan._', { color: '7F7F7F' }));

out.push(h2('1. Series roadmap'));
out.push(table(['Round', 'Level', 'Edition', 'Status'], [
  ['1', 'A2 (Books 1–2, 24 units)', 'Syria Edition', '**DELIVERED**'],
  ['2', 'B1 (Books 1–2, 24 units)', 'Syria Edition', '**DELIVERED**'],
  ['3', 'B2 Book 1 (Units 1–12)', 'Syria Edition', '**DELIVERED** · Book 2 planned, not written'],
  ['4', 'A2 (Books 1–2)', 'International Edition (same spine, new cast and setting)', 'Planned'],
  ['5', 'C1 → C2', 'Syria, then International, per level', 'Planned'],
  ['—', 'ESP strands', 'Same function/grammar spine, swapped scenarios and ESP lexis', 'Planned'],
], [1, 3, 4, 3]));

out.push(h2('2. Locked decisions'));
[
  '**Master plan:** A2 Master Curriculum Blueprint v2 (24 units × 7 cycles; cycle 7 = Review & Mediate).',
  '**Cycle:** 13 stages, 90 minutes = Lesson A Speaking (45) + Lesson B Writing (45): 1 Get ready · 2 Listen and read (+ Language box) · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read (+ Writer\'s box) · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · Homework (reply to partner).',
  '**Review & Mediate cycle:** 4R = mediation; Lesson B = A2 Key reading practice → guided email → A2 Key Writing Part 6 → 15-minute unit check → "I can" checklist.',
  '**Components:** Student\'s Book (audio scripts printed in the text, at the point of use – no appendix); Answer Key as a separate book. No teacher\'s notes.',
  '**Answer Key rule:** every task gets an answer or a full sample answer – including brainstorms, personalised speaking (sample conversation), reports, peer-review checklists, feedback slips, free writing and homework.',
  '**Format:** Word .docx delivered per unit; bound volumes later. Each turn delivers one bundle zip (bound book so far, combined answer key, every unit\'s files, handover, pipeline zip).',
].forEach(t => out.push(bullet(t)));

out.push(h2('3. Setting and cast (Syria Edition, Book 1)'));
out.push(p('**Setting:** Al-Yasmin Language Centre, Mezzeh, Damascus (Class 4B, Room 12, second floor; café on the ground floor). Secondary settings: City Gym (Karim at reception), workplaces, homes, Old Damascus, family homes in Homs, Aleppo and Latakia.'));
out.push(table(['Character', 'Age', 'From / lives', 'Job', 'Fixed facts (do not contradict)'], [
  ['Lina Haddad', '28', 'Damascus', 'accountant, small company in Mezzeh', 'brother Ziad (32, dentist, Shaalan clinic, married, daughter Jana 3); best friend at work Rana; manager Mr Khaled; cousin Sara (husband Fadi, son Karam 2); email lina.haddad@mail.sy; phone 0991 205 734'],
  ['Rami Khoury', '31', 'Homs; lives in Damascus', 'civil engineer', 'parents in Homs (father retired teacher, mother nurse); sister Hala (29, teacher, two sons); brothers Samer (26, bank, single) and Fadi (19, engineering student, Al-Baath University); not married; loves football (Fridays), hates cooking, likes Fairuz; shares a flat with Omar; likes old buildings/photography'],
  ['Maya Nasser', '24', 'Latakia; lives in Damascus', 'pharmacist (pharmacy in Lina\'s building)', 'family in Latakia; City Gym member (Mon & Wed evenings), loves swimming, likes novels, dislikes TV, hates getting up early (starts work at 8); 15 Al-Jalaa Street, Mezzeh; 0933 427 815; maya.nasser@mail.sy'],
  ['Omar Darwish', '35', 'Aleppo; lives in Damascus', 'IT technician, Rami\'s colleague', 'Rami\'s flatmate; loves cooking (kibbeh); watches football on TV; likes Fairuz; birthday 3 May; favourite place Citadel of Aleppo; 0944 318 260; omar.d@mail.sy'],
  ['Ms Huda Saleh', '—', 'Damascus', 'English teacher, Class 4B', 'Class Thursdays 5.30 pm (and other days), Room 12; runs Cooking in English club'],
  ['Karim', '—', 'Damascus', 'receptionist, City Gym', '—'],
], [1.3, 0.5, 1.4, 1.6, 4.5]));
out.push(p('**Recurring places:** Al-Yasmin English Club (Saturdays 11:00–12:30, café, free); Photography Club (Mondays 6–7.30 pm, Room 8, 5,000 SYP/month); Cooking in English (Wednesdays 4–6 pm, centre kitchen, free).'));

out.push(h2('4. Style sheet'));
[
  '**Spelling:** British English (colour, centre, favourite). Currency: SYP / "pounds" in speech. Times: 5.30 pm in text, "half past five" in speech. Dates: 3 May.',
  '**Names and places:** Syrian names and real Syrian cities/landmarks; no real living public figures in dialogue except cultural references (e.g., Fairuz songs) used neutrally.',
  '**Culture:** family, Eid, hospitality, food (kibbeh, fattoush, maamoul, shakriyeh); no alcohol, dating or party-drinking; same-gender pairing option always available; privacy option ("you can invent details") for personal data and family tasks.',
  '**Contractions** in dialogue and informal writing; full forms in grammar tables alongside contractions.',
  '**Phrases ahead of grammar** (e.g., _Have you seen…?_, _I\'ll…_) are allowed only as fixed chunks and flagged "learn as a phrase".',
  '**Audio scripts:** printed in the Student\'s Book at the point of use, labelled 🔊 Track U.N. Discrimination and test tracks print the script labelled "read after listening / after the check".',
  '**Word counts:** guided ≥25 (Book 1) / ≥35 (Book 2); free writing 35–60 (Book 1) / 60–100 (Book 2); model texts 45–100 (Book 1) / 100–180 (Book 2).',
  '**Track numbering:** Unit 1 uses Tracks 1.1–1.15; numbering continues per unit (2.1…).',
  '**File naming:** PE-A2-B1-SY_Unit01_StudentsBook.docx · PE-A2-B1-SY_Unit01_AnswerKey.docx (B1 = Book 1; B2 = Book 2).',
].forEach(t => out.push(bullet(t)));

out.push(h2('5. Peer-review checklists (fixed progression)'));
out.push(table(['Units 1–6', 'Units 7–12', 'Units 13–18', 'Units 19–24'], [
  ['Capitals & full stops · be in every sentence · he/she + -s · all parts present', '+ past tense · greeting & ending · a/an/the', '+ linkers · all 3 content points (A2 Key W6) · paragraphs', '+ tense consistency · ≥35 words (W7) · one extra detail'],
  ['Feedback: English stems; Arabic talk allowed', 'English stems; Arabic talk U7–9 only', 'English + phrase bank', 'English, free'],
], [1, 1, 1, 1]));

out.push(h2('6. Core lexis by unit — Book 1 (frozen core; ESP strands swap only the ESP set)'));
out.push(table(['Unit', 'Core lexis (new, productive)'], [
  ['1 Meeting People', 'hello, hi, nice to meet you, name, surname, first name, age, from, city, country, nationality (Syrian, Lebanese, Jordanian, Egyptian, Iraqi), job, engineer, accountant, pharmacist, teacher, student, IT technician, nurse, driver, friend, colleague, classmate, neighbour, manager, family, mother, father, parents, brother, sister, son, daughter, husband, wife, uncle, aunt, cousin, grandmother, grandfather, married, children, phone number, email, address, spell, form, join, club, free time, cooking, swimming, reading, drawing, shopping, love, like, don\'t mind, hate, repeat, mean, understand, louder, slowly, workbook, notice, bring, free (= no cost)'],
  ['2 Daily Life', 'get up, have breakfast, go to work, start, finish, leave, arrive, have lunch, come home, go to bed, morning, afternoon, evening, every day, usually, always, often, sometimes, never, once, twice, a week, weekday, weekend, Monday–Sunday, o\'clock, half past, quarter to/past, open, close, timetable, chores, wash, clean, tidy, these days, at the moment, work from home'],
  ['3 Home & Neighbourhood', 'flat, house, room, kitchen, bedroom, bathroom, living room, balcony, sofa, table, chair, bed, cupboard, fridge, next to, under, between, opposite, behind, in front of, near, bakery, pharmacy, mosque, church, school, park, bank, supermarket, street, go straight on, turn left/right, corner, traffic lights, round, square, plastic, metal, wood, guest, welcome'],
  ['4 Food & Eating Out', 'bread, rice, chicken, meat, fish, vegetables, fruit, salad, cheese, eggs, olives, tea, coffee, juice, water, menu, order, waiter, bill, kilo, bottle, packet, can, piece, a lot of, much, many, some, any, recipe, cut, mix, cook, fry, boil, first, then, after that, finally, delicious, invite, dinner, lunch'],
  ['5 Shopping & Money', 'shirt, trousers, dress, jacket, shoes, scarf, size, small, medium, large, price, cheap, expensive, pay, cash, card, receipt, change, post office, parcel, send, return, doesn\'t work, broken, too, enough, wear, colour words, the best, the cheapest, mine, yours, his, hers'],
  ['6 Getting Around', 'bus, minibus (service), taxi, train, car, on foot, ticket, single, return, station, stop, platform, timetable, late, on time, How long, How far, kilometre, minute, journey, because, to + purpose, Let\'s, Why don\'t we, Shall we, sign, no parking, entrance, exit, must, mustn\'t'],
  ['7 Free Time & Arrangements', 'hobby, club, can, good at, could, concert, match, film, exhibition, What are you doing on…?, meet, arrange, How about…?, make it, I\'d love to, another time, prefer, I\'d rather, what\'s on, start, ticket'],
  ['8 The Past', 'yesterday, last week/weekend/year, ago, went, saw, had, did, met, visited, stayed, was/were, born, moved, married, graduated, first, then, after that, in the end, really?, That\'s great!, I\'m sorry to hear that'],
  ['9 Work & Study', 'duty, responsible for, check, prepare, meeting, report, office, boss, rule, must, have to, don\'t have to, permission, Is it OK if…?, skill, experience, use a computer, take a message, call back, email, attach, thanks in advance'],
  ['10 Health', 'head, back, stomach, throat, tooth, headache, stomach ache, sore throat, cold, fever, cough, hurt, should, rest, medicine, tablet, pharmacy, appointment, clinic, doctor, twice a day, after meals, healthy, sleep, exercise, enough, Get well soon'],
  ['11 Travel & Holidays', 'holiday, trip, going to, hotel, single/double room, reservation, night, check in/out, Wi-Fi, breakfast included, weather, sunny, rainy, cloudy, windy, hot, cold, beach, mountains, sightseeing, recommend, You should visit'],
  ['12 Celebrations & Customs', 'Eid, wedding, birthday, graduation, Ramadan, celebrate, relatives, visit, sweets, present, give, wrap, Congratulations!, Happy birthday!, Eid Mubarak!, custom, polite, It\'s polite to…, apologise, sorry I\'m late, That\'s OK, wonderful'],
], [1.3, 6]));
out.push(p('_Book 2 lexis lists are fixed when Book 2 production starts (Units 13–24), following the Blueprint v2 topics._', { color: '595959' }));

out.push(h2('7. Measured record — the as-built figures, by level'));
out.push(p('**Every figure in this section was measured in a rendered PDF of a delivered file.** Where a level plan carries a projection that disagrees with a figure here, **the figure here is the one to use**, and the projection is to be treated as a method at fault rather than as a target to build to.'));
out.push(table(['Level and book', 'Student\'s Book, per unit', 'Answer Key, per unit', 'Bound SB', 'Bound AK'], [
  ['A2 Book 1 (Units 1–12)', '31 (x.7 takes 5–6 pages; 1 + 6×4 + 6)', '17–22', '—', '—'],
  ['A2 Book 2 (Units 13–24)', '31–33', '18–22', '394', '270'],
  ['B1 Book 1 (Units 1–12)', '**35–38**', '**22–30**', '461', '317'],
  ['B1 Book 2 (Units 13–24)', '**38–40**', '**29–31**', '489', '381'],
  ['B2 Book 1 (Units 1–12)', '**46–48**', '**29–34**', '584', '395'],
], [1.9, 2.4, 1.5, 0.9, 0.9], { headFill: C.navy }));
out.push(p('⚠ **Hold the band, do not aim at its midpoint.** A unit built to the middle of its band has been padded or trimmed against its own content, and both show.'));
out.push(table(['Level and book', 'Mid-Book Test + key', 'End-of-Book Test + key', 'Marks', 'Paper split'], [
  ['A2 Books 1 and 2', '8 + 6', '9 + 8', '60 / 100', '30 · 30 · 20 · 20'],
  ['B1 Books 1 and 2', '9 + 7 · 9 + 8', '**12 + 8** · **12 + 9**', '60 / 100', '30 · 30 · 20 · 20'],
  ['B2 Book 1', '10 + 8', '**14 + 10**', '60 / 100', '**40 · 25 · 25 · 10**'],
], [1.9, 1.7, 1.9, 1.1, 1.5], { headFill: C.navy }));
[
  '⚠ **Two corrections carried in from B1, which are the reason this section exists.** The B1 plan estimated both end tests at **10–11 pages**; the delivered tests are **12**, with keys of 8 and 9. And the B1 plan carried no measured page bands at all; the delivered ones are in the table above.',
  '⚠ **One correction carried in from B2.** The B2 plan projected the End-of-Book Test at 14–15 pages with a key of 11–12, and projected the paper split as 30·30·20·20. The delivered test is **14 with a key of 10**, and the split follows **Cambridge B2 First\'s own weighting, 40·25·25·10**, so that a candidate\'s percentage is comparable with a real result.',
  '**A test page is denser than a unit page**, because it carries more boxed material and less prose. This is why every projection built from unit density has over-estimated test length at every level, and it is the single reason to prefer a measurement to an estimate in this series.',
  '**The paper split is not a house constant.** It follows the examination the level is anchored to — A2 Key and B1 Preliminary at 30·30·20·20, B2 First at 40·25·25·10 — and C1 Advanced will have its own. **Read the examination\'s own weighting before writing a test.**',
].forEach(t => out.push(bullet(t)));
out.push(p('**Word counts and house figures, by level.** A2: guided ≥25 / ≥35 · free 35–60 / 60–100 · models 45–100 / 100–180. B1: guided ≥50 / ≥60 · free 100–140 / 140–180 · models 180–260 / 250–350 · dialogues 11–14 / 14–18 turns. **B2 Book 1: free 180–220 · models 350–480 · dialogues 16–20 turns · 4R reports 335–460 · writer\'s boxes 180–250 · 3R listener tasks 35–78 · 7R shares 55–88.**'));
out.push(p('**Answer-key length tracks the `NOTE()` count** at every level. House range **7–10**; B1 Book 2 and the whole of B2 Book 1 were built at exactly **10**. Count in the **source**, never in the PDF, because a PDF sweep also matches the _Notes:_ lines inside answer commentary.'));
out.push(p('⚠ **`lines(N)` prints one rule, not N.** Consecutive identically-bordered empty paragraphs merge in the renderer, so a ruled writing block renders as white space with a **single** rule at its foot. `lib.js` is frozen and byte-identical across the A2, B1 and B2 trees, so this is the as-built behaviour of the whole series and must not be changed at one level. **A ruled writing block therefore reads as a blank page to any text-based page sweep** — read the page before it prints before trimming anything.'));

L.build(out, process.argv[2], 'Proactive English · Series Bible · Syria Edition');
