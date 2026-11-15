/* ============================================================
   Unit 1 coverage manifest.

   Every exercise in EAM Book 1 Unit 1, with the screen and card that implements it.
   gates/eam_coverage.py FAILS if anything here is unimplemented, and fails if any exercise in
   the book's own extraction is missing from this list.

   THIS IS THE INSTRUMENT THAT WAS MISSING. The first version of this course shipped with six
   of twenty-one screens blank and a suite that returned 10/10, because nothing compared what
   was built against what the book contains. A manifest is how "parity with the book" stops
   being a claim.

   status:
     full     the book's exercise, done as the book sets it
     adapted  changed, because the page cannot do what the book asks — every adapted row
              carries a note saying what changed and why, and an inClass note saying what a
              teacher with a real room should do instead
     bonus    not in the book; added here, and marked so it is never mistaken for the book
   ============================================================ */
EAM.coverage('unit1', [

  /* ---------------------------------------------------------------- Warm Up */
  { ref: 'WU · Car Words and Meanings', page: 's01-warm-up', id: 'u1-s01', card: 'c1',
    status: 'adapted',
    note: 'The book prints the five words in Column A and their meanings in Column B. Here the '
      + 'words are DRAWINGS and the meanings are the chips, so the learner reads the English '
      + 'definition and finds the thing it describes rather than matching two columns of text. '
      + 'Same five pairs, same spare meaning left in the pool.' },
  { ref: 'WU · In the Service Department', page: 's01-warm-up', id: 'u1-s01', card: 'c2',
    status: 'full' },
  { ref: 'WU · Reading About the Service Department', page: 's01-warm-up', id: 'u1-s01',
    card: 'c3+c4', status: 'adapted',
    note: 'One book exercise, two cards: the text is a study card and the two multiple-choice '
      + 'questions are a quizset beside it. The quizset component has no passage field, and a '
      + 'question whose text is not on the screen is unanswerable.' },

  /* ---------------------------------------------------------------- Part 1 */
  { ref: '1 · Car and Service Terms', page: 's02-vocabulary', id: 'u1-s02', card: 'c1',
    status: 'adapted',
    note: 'As the Warm Up matching card: the seven words are drawn and the meanings are the '
      + 'chips. The worked example (mechanic) is shown worked, as the book shows it.' },
  { ref: '1 · People and Places in the Department', page: 's02-vocabulary', id: 'u1-s02',
    card: 'c2', status: 'adapted',
    note: 'The book prints a three-column table to complete. The extraction kept only the '
      + 'worked row and lost the three empty ones; the rows here are rebuilt from the book\'s '
      + 'OWN ANSWER KEY, which had been bound to the Pronunciation exercise two places earlier '
      + 'because Pronunciation has no answer of its own. Rendered as a real table whose cells '
      + 'are gaps, so every cell is marked — the `fields` component only counts filled boxes '
      + 'and would have turned a marked exercise into an unmarked one.',
    inClass: 'The book\'s table is fine on paper. Use it, then use this to check.' },
  { ref: '1 · Parts of a Car', page: 's02-vocabulary', id: 'u1-s02', card: 'c3',
    status: 'adapted',
    note: 'The book matches five written words to five descriptions. Here the five parts are '
      + 'drawings and the descriptions are the chips, so the learner reads the English and '
      + 'finds the thing. Same five pairs, same spare description left in the pool.' },
  { ref: '1 · Pronunciation', page: 's03-pronunciation', id: 'u1-s03', card: 'c1+c2',
    status: 'adapted',
    note: 'The book says "listen and practise" and prints six words divided into syllables '
      + 'with the stress in capitals. Listening and repeating cannot be marked, so the six are '
      + 'a study card to hear, and a second card sorts them by WHICH SYLLABLE carries the '
      + 'stress — the same judgement the book is teaching, and one a page can check. Two more '
      + 'words (workshop, advisor) are added to the sort so each column has more than one '
      + 'member.',
    inClass: 'Do the book\'s drill aloud first — it is a speaking exercise and this is not.' },
  { ref: '1 · Cars and Service — Multiple Choice', page: 's04-check', id: 'u1-s04', card: 'c1',
    status: 'full' },
  { ref: '1 · Vocabulary Fill-in', page: 's04-check', id: 'u1-s04', card: 'c2', status: 'full' },
  { ref: '1 · Write About Cars (short)', page: 's04-check', id: 'u1-s04', card: 'c3',
    status: 'adapted',
    note: 'The book prints "Model — read this first:" and no model. The model on this card is '
      + 'authored, and is labelled as one way of doing it rather than the answer.' },

  /* ---------------------------------------------------------------- Part 2 */
  { ref: '2 · Notice', page: 's05-grammar-notice', id: 'u1-s05', card: 'c1',
    status: 'adapted',
    note: 'The book says "underline the verbs. Which are routines, and which are happening '
      + 'now?" Underlining on paper is selecting on a page: the learner clicks the two lines '
      + 'about this moment, then answers two questions about what those two have in common. '
      + 'The discovery is the same and it can now be marked.' },
  { ref: '2 · Grammar Focus Box', page: 's05-grammar-notice', id: 'u1-s05', card: 'c2',
    status: 'full',
    note: 'The focus box word for word, with the two figures the rest of Part 2 refers to.' },
  { ref: '2 · Controlled Practice', page: 's06-grammar-practice', id: 'u1-s06', card: 'c1',
    status: 'full' },
  { ref: '2 · Simple or Continuous?', page: 's06-grammar-practice', id: 'u1-s06', card: 'c2',
    status: 'adapted',
    note: 'The book prints "(watches / is watching)" inside each sentence. Here the four '
      + 'sentences sort into the two tenses, which is the same decision made visible four '
      + 'times at once instead of four separate times.' },
  { ref: '2 · Correct the Sentence', page: 's07-grammar-review', id: 'u1-s07', card: 'c1',
    status: 'full',
    note: 'Both steps the book asks for: choose the repair, then write the whole sentence.' },
  { ref: '2 · Freer Practice', page: 's07-grammar-review', id: 'u1-s07', card: 'c2',
    status: 'adapted',
    note: 'The book gives the task and no model; the model and the four tutor criteria are '
      + 'authored.' },
  { ref: '2 · Grammar Review', page: 's07-grammar-review', id: 'u1-s07', card: 'c3',
    status: 'full' },

  /* ---------------------------------------------------------------- Part 3 */
  { ref: '3 · A Mechanic Talks About His Work', page: 's08-listening-1', id: 'u1-s08',
    card: 'c1+c2', status: 'adapted',
    note: 'The recording is a study card with its lines NUMBERED, because the True / False / '
      + 'Not Given card asks which line proves each answer and that question needs numbers. '
      + 'The three statements and their answers are the book\'s.' },
  { ref: '3 · At Reception', page: 's09-listening-2', id: 'u1-s09', card: 'c1+c2',
    status: 'adapted',
    note: 'Dialogue as a study card, three short answers beside it. The four phrases the Part '
      + '4 role play reuses are marked in bold in the dialogue.' },
  { ref: '3 · A Day at Cham Motors', page: 's10-listening-3', id: 'u1-s10', card: 'c1+c2',
    status: 'adapted',
    note: 'Briefing as a study card; the matching card draws the five faces instead of '
      + 'printing the names. Same five people, same spare action.' },

  /* ---------------------------------------------------------------- Part 4 */
  { ref: '4 · Discussing Cars and Work', page: 's11-speaking-model', id: 'u1-s11', card: 'c1',
    status: 'adapted',
    note: 'The book says "work with a partner". A learner alone has none, so each question '
      + 'carries a seeded answer from somebody at Cham Motors, written out and labelled as one '
      + 'person\'s answer. The learner writes theirs first; the seeded ones open afterwards.',
    inClass: 'Run the book\'s pair version first. These make a good second round, and a good '
      + 'model for learners who froze.' },
  { ref: '4 · Reception Role Play', page: 's12-role-play', id: 'u1-s12', card: 'c1',
    status: 'adapted',
    note: 'Both role cards are the book\'s. The partner\'s four lines are written out so the '
      + 'learner can run it alone, and the criteria are on the card BEFORE they speak.',
    inClass: 'In pairs, exactly as the book sets it, then swap. The stretch task is the book\'s '
      + 'own.' },
  { ref: '4 · Mini-Presentation', page: 's12-role-play', id: 'u1-s12', card: 'c2',
    status: 'adapted',
    note: 'The book gives one line of task and nothing else. The stems, the worked example and '
      + 'the five criteria are authored. THIS EXERCISE WAS ON THE WRONG SCREEN until the part '
      + 'was mapped by title: Part 4 holds three exercises in unit 1 and four in every other '
      + 'unit, so positional mapping put the mini-presentation on the screen called "Role play" '
      + 'and the role play on the screen called "Speaking, model".' },

  /* ---------------------------------------------------------------- Part 5 */
  { ref: '5 · What Is a Service Department?', page: 's13-reading-text', id: 'u1-s13',
    card: 'c1+c2', status: 'adapted',
    note: 'Text as a study card with the book\'s inline glossary; the three multiple-choice '
      + 'questions beside it. The book\'s own worked example (question 0) is quoted in the '
      + 'instruction.' },
  { ref: '5 · Vocabulary in Context', page: 's14-reading-comprehension', id: 'u1-s14',
    card: 'c1', status: 'adapted', note: 'Drawn rather than written, as the other matching '
      + 'cards. Four words from the text, one spare meaning.' },
  { ref: '5 · Cars in Syria', page: 's14-reading-comprehension', id: 'u1-s14', card: 'c2+c3',
    status: 'adapted',
    note: 'Text as a study card with its glossary; the three True / False statements beside '
      + 'it, asking which paragraph proves each one.' },

  /* ---------------------------------------------------------------- Part 6 */
  { ref: '6 · Describe Your Job or a Car', page: 's15-writing-model', id: 'u1-s15', card: 'c1',
    status: 'adapted',
    note: 'The book\'s plan, word bank and checklist are kept as written. The MODEL is '
      + 'authored — the book prints the label "Model — read this first:" and no model. The two '
      + 'checklist rows that can be checked mechanically (word count, both tenses) are checked.' },
  { ref: '6 · Why Good Servicing Matters', page: 's15-writing-model', id: 'u1-s15', card: 'c2',
    status: 'adapted',
    note: 'The book\'s task, word bank and four-row checklist are kept word for word. The '
      + 'MODEL is authored, because the book prints the label "Model — read this first:" with '
      + 'no model under it, and it is labelled as one answer among several since the task asks '
      + 'for reasons rather than facts.' },
  { ref: '6 · A Note to the Mechanic', page: 's15-writing-model', id: 'u1-s15', card: 'c3',
    status: 'adapted',
    note: 'The book\'s plan ("Dear ___, Here is ___. It needs ___…") and its checklist are '
      + 'kept. The model is authored, and is written to demonstrate the one thing the task is '
      + 'really teaching: report what the customer SAID, and leave the diagnosis to the '
      + 'workshop.' },
  { ref: '6 · Reflection — A Car in My Family', page: 's15-writing-model', id: 'u1-s15',
    card: 'c4', status: 'adapted',
    note: 'The book\'s three-row checklist is kept. The model is authored. The task itself is '
      + 'unchanged and deliberately has no right answer — it is the only piece in the unit '
      + 'that is purely personal.' },

  /* ---------------------------------------------------------------- Part 7 */
  { ref: '7A · Phrase Bank', page: 's16-management-file-dialogue', id: 'u1-s16', card: 'c1',
    status: 'full',
    note: 'A two-column matching task, as the book sets it. Its key says `pairs`; an earlier '
      + 'version of the type map read the length of its quoted sentences instead and made it a '
      + 'gap-fill.' },
  { ref: '7B · Manager Dialogue', page: 's16-management-file-dialogue', id: 'u1-s16',
    card: 'c2+c3', status: 'adapted',
    note: 'Dialogue as a study card, three short answers beside it. The book prints both '
      + 'together under one heading.' },
  { ref: '7C · Controlled Practice — First-Day Checklist', page: 's17-management-file-practice',
    id: 'u1-s17', card: 'c1', status: 'full',
    note: 'An ordering task. The book puts the instruction — "Put a manager\'s first-day steps '
      + 'in order. Number them 1–5." — in the prose and not the title, and a title-only type '
      + 'rule made it a short answer.' },
  { ref: '7D · Role-Play — Briefing the Apprentice', page: 's17-management-file-practice',
    id: 'u1-s17', card: 'c2', status: 'adapted',
    note: 'Both cards are the book\'s; the apprentice\'s four lines are written out so it can '
      + 'be run alone. The stretch task is the book\'s own.',
    inClass: 'In pairs, foreman and apprentice, then swap.' },
  { ref: '7E · Supervisory Writing (50–80 words)', page: 's17-management-file-practice',
    id: 'u1-s17', card: 'c3', status: 'adapted',
    note: 'The book\'s task and its four-row checklist are kept. The model is authored, and it '
      + 'puts the safety rule near the END on purpose: a welcome note that opens with a rule '
      + 'reads as a warning, which is the judgement this task is really about.' },

  /* ---------------------------------------------------------------- Part 8 */
  { ref: '8 · Global Case Study — A Small Garage Grows', page: 's18-global-case-study',
    id: 'u1-s18', card: 'c1+c2', status: 'adapted',
    note: 'THE CASE TEXT IS AUTHORED FROM ITS OWN ANSWER KEY. The extraction found the three '
      + 'questions and the book\'s answers but no text. Every fact in the case is one the key '
      + 'asserts — Sami, honest work at a fair price, check every car carefully, and the three '
      + 'things he still says — so the text makes exactly those answers true and no others.' },
  { ref: '8 · Vocabulary in Context', page: 's18-global-case-study', id: 'u1-s18', card: 'c3',
    status: 'adapted',
    note: 'The book matches four written words to five meanings. Here the four are drawings '
      + 'and the meanings are the chips. Three of the four — garage, repair, safe — are things '
      + 'or states that can be drawn; `honest` is drawn as the act it names, an invoice that '
      + 'matches the work done.' },
  { ref: '8 · Discussion', page: 's18-global-case-study', id: 'u1-s18', card: 'c4',
    status: 'adapted',
    note: 'The book says "talk with a partner" and supplies three frames. The frames are kept '
      + 'and the task becomes written, with a seeded set of answers to compare against.',
    inClass: 'Talk it, in pairs or as a class, using the book\'s three frames.' },

  /* ---------------------------------------------------------------- Part 9 */
  { ref: '9 · Local Case Study — Syria in Focus', page: 's19-local-case-study', id: 'u1-s19',
    card: 'c1+c2', status: 'adapted',
    note: 'As Part 8: the case text is authored from the book\'s own answer key — little '
      + 'money, expensive rent, one rented bay, good second-hand tools, honest work and clear '
      + 'explanations. Lina is the technician the learner already met in §10.' },
  { ref: '9 · Decision Task', page: 's19-local-case-study', id: 'u1-s19', card: 'c3',
    status: 'adapted',
    note: 'The book\'s three choices, answer frame and phrase bank are kept. A short passage '
      + 'of facts is added so the decision can be argued from evidence rather than from '
      + 'preference; the model answer is authored and says plainly that a good case exists for '
      + 'more than one choice.' },

  /* ---------------------------------------------------------------- Part 10 */
  { ref: '10 · Spiral Review', page: 's20-spiral-review', id: 'u1-s20', card: 'c1',
    status: 'full' },
  { ref: '10 · Spiral Review — recall drill', page: 's20-spiral-review', id: 'u1-s20',
    card: 'c2', status: 'bonus',
    note: 'Not in the book. Three questions that give the MEANING and ask for the word, '
      + 'because recognising a word in a sentence is easier than producing it and the book\'s '
      + 'review only tests the first.' },
  { ref: '10 · Can-Do', page: 's21-can-do-glossary', id: 'u1-s21', card: 'c1',
    status: 'adapted',
    note: 'The five statements are the book\'s, word for word. Each tick is verified against '
      + 'the learner\'s own recorded work — screens finished, marks scored, words used in '
      + 'their own writing — instead of being an opinion they give about themselves.' },
  { ref: '10 · Glossary', page: 's21-can-do-glossary', id: 'u1-s21', card: 'c2',
    status: 'adapted',
    note: 'The book prints the ten words as a list to read. Here they are a spoken-word drill '
      + 'over the ten drawings, scored, and the source of the reinforcement deck. Every word '
      + 'appears in an earlier card of this unit, so the deck is never a word\'s first '
      + 'encounter.' }
]);
