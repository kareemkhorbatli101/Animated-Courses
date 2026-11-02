CSB1.page('u1-l2-s3', {
  book: { page: 7, section: 3, lesson: 'Lesson 2 · Writing', title: 'Get feedback and revise' },
  objective: 'Write a paragraph describing your feelings on the first day in the security lab',
  prev: 'l2-s2-plan-and-write', prevLabel: 'Plan and write',
  next: 'l3-s1-present-past-forms', nextLabel: 'Lesson 3 · Verb forms',
  cards: [
    {
      id: 'c3a', ref: '3A', bookRef: 'p.7 · 3A', type: 'checklistlive',
      title: 'Use the editing checklist',
      instruction: 'Use the editing checklist to edit your writing. Check (✓) the true sentences. Each tick is checked against the draft you wrote in §2 — you have to earn it.',
      visual: {
        art: 'editing-desk',
        caption: 'Editing is a separate job from writing. Read your own draft looking for one thing at a time, exactly as the list below does.'
      },
      fromPage: 'u1-l2-s2', fromCard: 'c2b',
      items: [
        {
          t: 'I described a life challenge.', verify: function (draft, U) {
            var ok = U.mentions(draft, ['hard', 'difficult', 'nervous', 'afraid', 'worried', 'challenge', 'could not', 'couldn\'t'], 1);
            return { ok: ok, msg: ok ? 'Found words about a challenge.' : 'The checker could not find words such as hard, difficult, nervous or challenge.' };
          }
        },
        {
          t: 'I wrote about the ways I overcame the challenge.', verify: function (draft, U) {
            var ok = U.mentions(draft, ['overcame', 'overcome', 'helped', 'practised', 'practiced', 'asked', 'tried', 'decided', 'started'], 1);
            return { ok: ok, msg: ok ? 'Found how you got through it.' : 'Say what you actually did: I overcame this by…, someone helped me…, I asked…' };
          }
        },
        {
          t: 'I shared what I learned from my life lesson.', verify: function (draft, U) {
            var ok = U.mentions(draft, ['learned', 'learnt', 'lesson', 'now i', 'next time', 'i know'], 1);
            return { ok: ok, msg: ok ? 'Found your life lesson.' : 'Add a sentence beginning "After this experience I learned that…"' };
          }
        },
        {
          t: 'I used the past tense.', verify: function (draft, U) {
            var pv = U.pastVerbs(draft);
            return { ok: pv.length >= 3, msg: pv.length >= 3 ? 'Found ' + pv.length + ' past-tense verbs: ' + pv.slice(0, 8).join(', ') : 'Only ' + pv.length + ' past-tense verbs found. A narrative needs more.', highlight: pv };
          }
        }
      ]
    },
    {
      id: 'c3b', ref: '3B', bookRef: 'p.7 · 3B', type: 'peerreview',
      title: 'Exchange journal entries',
      instruction: 'Exchange journal entries with a partner. Read your partner\'s work below. <b>1.</b> Click a sentence you find interesting and comment on it. <b>2.</b> Ask your partner a question about their life lesson.',
      sub: 'Working alone? A classmate\'s entry is supplied — the task is identical.',
      visual: {
        art: 'night-desk',
        caption: 'Idris wrote about his first week on a help desk. Read his entry below before you comment on it.'
      },
      coach: {
        title: 'Check your feedback before your partner reads it',
        target: 'questions in the simple past and present; polite comment language',
        taught: [
          'Comment language: "Our challenges are similar." / "I like your last sentence." / "I had the same problem when I started."',
          'A question about a life lesson asks about what the writer does *now*, not only about what happened.'
        ],
        source: {
          text: 'Thursday, September 13 — by Idris\n\nMy first week on the help desk was harder than the course. People called when they were angry, and I had to listen and type at the same time. I was afraid I would not understand the caller and would have to ask twice.\n\nMy team leader sat next to me for two days. She told me to say "Let me check that for you" when I needed a second. That one sentence changed everything. After a week I was answering calls alone, and I even wrote my first incident report.\n\nI learned that asking for a moment is not the same as not knowing. Now I say it every day and nobody minds.',
          label: 'THE PARTNER\'S JOURNAL ENTRY the learner is responding to'
        },
        task: 'Comment on one sentence you found interesting in your partner\'s entry, then ask your partner one question about their life lesson.',
        example: 'I like your last sentence, because "asking for a moment is not the same as not knowing" is true in my job too. I had the same problem when I started, but nobody told me a sentence to use. Do you still say it when the caller is angry, or only when you need to read the screen?',
        criteria: [
          { t: 'The comment points at something actually in the partner\'s entry.', auto: 'mentions', keys: ['sentence', 'last', 'help desk', 'team leader', 'caller', 'angry', 'moment', 'report', 'week', 'check that'], need: 1, fail: 'Quote or name the part you mean — "I like your last sentence", "your team leader…".' },
          { t: 'The comment is polite and specific, not just "good job".', auto: 'words', min: 12 },
          { t: 'There is a real question, ending in a question mark.', auto: 'has', rx: '\\?', pass: 'Found a question.', fail: 'Add a question. A comment on its own is not feedback.' },
          { t: 'The question is about the life lesson, not about spelling.', self: true },
          { t: 'I would be happy to receive this feedback myself.', self: true }
        ]
      },
      partner: {
        title: 'Thursday, September 13 — by Idris',
        paras: [
          'My first week on the help desk was harder than the course. People called when they were angry, and I had to listen and type at the same time. I was afraid I would not understand the caller and would have to ask twice.',
          'My team leader sat next to me for two days. She told me to say "Let me check that for you" when I needed a second. That one sentence changed everything. After a week I was answering calls alone, and I even wrote my first incident report.',
          'I learned that asking for a moment is not the same as not knowing. Now I say it every day and nobody minds.'
        ]
      },
      stems1: [
        'Our challenges are similar.',
        'Your shift pattern sounds difficult!',
        'I like your last sentence. It made me think.',
        'I had the same problem when I started.'
      ],
      stems2: [
        'Do you still find the calls difficult?',
        'Did your team leader help you again later?',
        'What do you say now when you do not understand?',
        'Are you writing incident reports every week now?'
      ]
    },
    {
      id: 'c3c', ref: '3C', bookRef: 'p.7 · 3C', type: 'revise',
      title: 'Revise your writing',
      instruction: 'Use the checklist and your partner\'s feedback to revise your writing. Your draft is loaded below — change at least one thing, then see what changed.',
      visual: {
        art: 'revision-ribbon',
        caption: 'A revision is not a tidy-up. Something in the text has to be different afterwards, and you should be able to say what and why.'
      },
      fromPage: 'u1-l2-s2', fromCard: 'c2b',
      coach: {
        title: 'Check your revision',
        target: 'simple past and past continuous',
        minWords: 80,
        taught: [
          'The editing checklist from 3A: a challenge, how you overcame it, the lesson, and the past tense.',
          'Your partner\'s comment and question from 3B.'
        ],
        source: {
          passage: 'c1a',
          page: 'u1-l2-s1',
          label: 'THE MODEL JOURNAL ENTRY the learner is working from (1A)'
        },
        task: 'Revise your three-paragraph journal entry using the editing checklist and your partner\'s feedback. The version below is the revised one.',
        parts: [
          'Paragraph 1 — the challenge. Paragraph 2 — how you overcame it. Paragraph 3 — the lesson.',
          'This is the second draft, so judge it as a revision: is it clearer than a first attempt would be?'
        ],
        example: [
          'What a real revision looks like. First draft:',
          '"My team leader helped me. She told me what to say. After that it was easier and I was happy."',
          'Revised:',
          '"My team leader sat beside me for the first two shifts. She told me to say “Let me check that for you” whenever I needed a second to think, and while I was saying it I was reading the screen. After a week I was taking calls on my own."',
          'Three things changed: the help became specific, the advice became a quotable sentence, and a past continuous verb arrived. Nothing was merely tidied.'
        ],
        exampleNote: 'Your revision does not have to be this big — but it does have to be a change you can name.',
        criteria: [
          { t: 'All three paragraph jobs are still done.', auto: 'mentions', keys: ['learned', 'learnt', 'lesson', 'next time', 'now i'], need: 1, fail: 'The lesson has gone missing in the revision — paragraph 3 still needs it.' },
          { t: 'Still at least 80 words.', auto: 'words', min: 80 },
          { t: 'Still consistently past tense.', auto: 'past', need: 4 },
          { t: 'I changed at least one thing, and I can say what.', self: true },
          { t: 'I used something from my partner\'s question or comment.', self: true },
          { t: 'The revised version reads more clearly out loud than the first one.', self: true }
        ]
      }
    },
    {
      id: 'cty', ref: 'TY', bookRef: 'p.7 · Test yourself', type: 'picker',
      title: 'Test yourself',
      instruction: 'Complete the two sentences below from the lists, then say in your own words what you will do about it. Your answers are saved for your teacher.',
      visual: {
        art: 'narrative-arc',
        caption: 'What this lesson taught, in three boxes. Which of them can you now do on your own?'
      },
      frame: 'After this writing lesson, I can [[can]].<br>I need more help with [[help]].',
      banks: {
        can: {
          label: 'What I can do now…',
          items: [
            'write a three-paragraph narrative with one main idea in each paragraph',
            'describe a challenge and say why it felt difficult',
            'say how I overcame a challenge, and who helped',
            'state a life lesson as something generally true',
            'use the simple past and past continuous together',
            'edit my own writing against a checklist',
            'give a classmate a useful comment and a real question'
          ]
        },
        help: {
          label: 'What I still need help with…',
          items: [
            'the past continuous',
            'choosing the right past tense',
            'linking words (because, after, while, so)',
            'spelling',
            'keeping one main idea in each paragraph',
            'writing enough words',
            'starting the first sentence'
          ]
        }
      },
      answers: {},
      hintText: 'There is no wrong answer here — pick the two that are honestly true for you.',
      why: {
        q: 'What will you do about the thing you need help with, and when?',
        placeholder: 'Before the next lesson I will…',
        minWords: 8,
        model: 'Before the next lesson I will go back to §3 of Lesson 3 and redo the past-continuous exercise, and I will write two sentences with "while" in my notebook on Thursday evening.'
      },
      coach: {
        title: 'Is this an honest self-assessment?',
        ai: false,
        taught: 'The three paragraph jobs, the past tenses, and the editing checklist from this lesson.',
        criteria: [
          { t: 'The plan names a specific thing to do, not "practise more".', auto: 'words', min: 8 },
          { t: 'The plan names when — a day, an evening, or "before the next lesson".', auto: 'mentions', keys: ['before', 'tonight', 'tomorrow', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday', 'evening', 'morning', 'weekend', 'this week', 'next lesson'], need: 1, fail: 'Add when you will do it. A plan with no day does not happen.' },
          { t: 'The two things I picked are honestly true of me, not the ones that look best.', self: true },
          { t: 'I could show this to my teacher without changing it.', self: true }
        ]
      }
    }
  ]
});
