/* ============================================================
   Unit 1 — the section list behind the "Jump to…" control.

   One ordered row per page, in book order. `n` is the number of
   cards on that page, so the jump list can show how far through
   each section the learner is without loading its data file.

   Keep this in step with the prev/next chain: tools/check-nav.cjs
   fails the build if the order, the card counts or the files
   disagree with the pages themselves.
   ============================================================ */
CSB1.unitMap('unit1', [
  { id: 'u1-l1-s1', file: 'l1-s1-study-skills', page: 4, lesson: 'Lesson 1 · Vocabulary', label: '§1 Identify study skills', n: 4 },
  { id: 'u1-l1-s2', file: 'l1-s2-career-pathways', page: 5, lesson: 'Lesson 1 · Vocabulary', label: '§2 U.S. career pathways', n: 5 },

  { id: 'u1-l2-s1', file: 'l2-s1-prepare-to-write', page: 6, lesson: 'Lesson 2 · Writing', label: '§1 Prepare to write', n: 3 },
  { id: 'u1-l2-s2', file: 'l2-s2-plan-and-write', page: 7, lesson: 'Lesson 2 · Writing', label: '§2 Plan and write', n: 2 },
  { id: 'u1-l2-s3', file: 'l2-s3-feedback-revise', page: 7, lesson: 'Lesson 2 · Writing', label: '§3 Get feedback and revise', n: 4 },

  { id: 'u1-l3-s1', file: 'l3-s1-present-past-forms', page: 8, lesson: 'Lesson 3 · Grammar', label: '§1 Present and past verb forms', n: 4 },
  { id: 'u1-l3-s2', file: 'l3-s2-yesno-questions', page: 9, lesson: 'Lesson 3 · Grammar', label: '§2 Yes / no questions', n: 3 },
  { id: 'u1-l3-s3', file: 'l3-s3-listen-for-tenses', page: 10, lesson: 'Lesson 3 · Grammar', label: '§3 Listen for the tenses', n: 1 },
  { id: 'u1-l3-s4', file: 'l3-s4-use-verb-forms', page: 10, lesson: 'Lesson 3 · Grammar', label: '§4 Use the verb forms', n: 2 },

  { id: 'u1-l4-s1', file: 'l4-s1-career-talk', page: 11, lesson: 'Lesson 4 · Everyday Conversation', label: '§1 Talking about careers', n: 3 },
  { id: 'u1-l4-s2', file: 'l4-s2-pronunciation', page: 11, lesson: 'Lesson 4 · Everyday Conversation', label: '§2 Pronunciation — sh, ch, j', n: 3 },
  { id: 'u1-l4-s3', file: 'l4-s3-adjectives-adverbs', page: 12, lesson: 'Lesson 4 · Everyday Conversation', label: '§3 Adjectives and adverbs', n: 2 },
  { id: 'u1-l4-s4', file: 'l4-s4-conversation-skills', page: 12, lesson: 'Lesson 4 · Everyday Conversation', label: '§4 Conversation skills', n: 3 },
  { id: 'u1-l4-s5', file: 'l4-s5-listening-details', page: 13, lesson: 'Lesson 4 · Everyday Conversation', label: '§5 Listening for details', n: 3 },
  { id: 'u1-l4-s6', file: 'l4-s6-discuss', page: 13, lesson: 'Lesson 4 · Everyday Conversation', label: '§6 Discuss — job skills', n: 3 },

  { id: 'u1-l5-s1', file: 'l5-s1-read-ask-allison', page: 14, lesson: 'Lesson 5 · Reading', label: '§1 Read — Ask Allison', n: 6 },
  { id: 'u1-l5-s2', file: 'l5-s2-word-study-dis', page: 15, lesson: 'Lesson 5 · Reading', label: '§2 Word study — the prefix dis-', n: 3 },
  { id: 'u1-l5-s3', file: 'l5-s3-talk-it-over', page: 16, lesson: 'Lesson 5 · Reading', label: '§3 Talk it over — active learning', n: 4 },

  { id: 'u1-atwork-s1', file: 'atwork-s1-active-listening', page: 17, lesson: 'At Work', label: 'Show that you are listening', n: 4 },

  { id: 'u1-review-s1', file: 'review-s1-teamwork', page: 18, lesson: 'Review', label: 'Teamwork & language review', n: 6 },
  { id: 'u1-review-s2', file: 'review-s2-problem-solving', page: 19, lesson: 'Review', label: 'Problem solving — Teresa', n: 3 }
]);
