/* Unit 3 §10 — Writing.

   Built by tools/hosp_build_unit.py from the raised book. Every
   question, item, example and answer is the book's own. */
HSP.page('u3-s10', {
  book: { source: 'Hospitality A2–B1', ref: 'Unit 3 · Writing', part: '6',
          section: '10', lesson: 'Writing', title: 'Writing' },
  objective: 'By the end of Part 6 you can write a short confirmation message to a guest.',
  cards: [
    {
      id: 'c1',
      ref: 'Text',
      bookRef: 'Unit 3 · P6',
      type: 'study',
      title: 'Before you write',
      instruction: 'Read it, and listen as many times as you like.',
      passage: {
      title: 'Before you write',
      listenLabel: 'Listen to the whole text',
      paras: [{
          h: 'Dear Mr. Sayed, thank you for your booking. We are happy to confirm '
            + 'your reservation: a double room for two nights, from the 14th to the '
            + '16th of June. Check-in is from 2 p.m. Breakfast is included, from '
            + 'seven to ten. If you need anything before your arrival, please call '
            + 'us. We look forward to welcoming you. Kind regards, Lina — '
            + 'Reservations, Orient Rose Hotel.',
          say: 'Dear Mr. Sayed, thank you for your booking. We are happy to confirm '
            + 'your reservation: a double room for two nights, from the 14th to the '
            + '16th of June. Check-in is from 2 p.m. Breakfast is included, from '
            + 'seven to ten. If you need anything before your arrival, please call '
            + 'us. We look forward to welcoming you. Kind regards, Lina — '
            + 'Reservations, Orient Rose Hotel.',
          role: 'course'
        },
        {
          h: 'Dear Ms. Haddad, thank you for calling. Your table for four is booked '
            + 'for eight o\'clock this evening, by the window. We look forward to '
            + 'seeing you. Kind regards, Reception.',
          say: 'Dear Ms. Haddad, thank you for calling. Your table for four is booked '
            + 'for eight o\'clock this evening, by the window. We look forward to '
            + 'seeing you. Kind regards, Reception.',
          role: 'course'
        }]
    },
      doneLabel: 'I have read this'
    },
    {
      id: 'c2',
      ref: 'A',
      bookRef: 'Unit 3 · P6 A',
      type: 'discuss',
      title: 'Answer about the model',
      instruction: 'Answer about the model.',
      questions: [{
            q: 'What room type is the booking for?',
            model: 'A double room.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What dates is the reservation for?',
            model: 'From the 14th to the 16th of June.',
            minWords: 2,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          },
      {
            q: 'What time is check-in?',
            model: 'From 2 p.m.',
            minWords: 1,
            rows: 2,
            evidence: 'The answer is in the text or the figure above.'
          }],
      okMsg: 'Your answers are saved. Press “Show me” to put the book\'s answer '
        + 'beside your own.'
    },
    {
      id: 'c3',
      ref: 'B',
      bookRef: 'Unit 3 · P6 B',
      passage: {
        title: 'Read this first',
        listenLabel: 'Listen',
        paras: [{
            h: 'Plan: 1) thank the guest 2) confirm the details (room/table, dates or '
              + 'time) 3) give one useful piece of information 4) a warm closing',
            say: 'Plan: 1) thank the guest 2) confirm the details (room/table, dates or '
              + 'time) 3) give one useful piece of information 4) a warm closing',
            role: 'course'
          }]
      },
      type: 'writer',
      title: 'Now you write',
      instruction: 'Now you write. Write a short booking confirmation (40–60 words) for a '
  + 'guest. Use polite language.',
      minWords: 40,
      paras: [{
          label: 'Your answer',
          purpose: 'Write 40–60 words.'
        }]
    }
  ]
});
