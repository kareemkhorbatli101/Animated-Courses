/* ============================================================
   Unit 1 §11 — Part 4, Speaking: the model.

   The book says "Work with a partner. Ask and answer these questions." A learner on their
   own has no partner, so the card supplies one: each question carries a seeded answer from
   somebody in the department, written out, and labelled as one person's answer rather than
   the answer. The learner writes or says their own first and then compares.

   That is the `adapted` pattern the coverage manifest records, and the in-class note says
   what a teacher with a real room should do instead — run it from the book, and use these
   as the second round.
   ============================================================ */
EAM.page('u1-s11', {
  book: { source: 'EAM B1', ref: 'Unit 1 · Part 4 · Speaking', part: '4', section: '11',
          lesson: 'Part 4 · Speaking', title: 'Talking about cars and work' },
  objective: 'Answer three questions about cars and the jobs in a service department',
  video: 'u01v11',
  prev: 's10-listening-3', prevLabel: 'A day at Cham Motors',
  next: 's12-role-play', nextLabel: 'Role play, and your own talk',
  cards: [
    {
      id: 'c1', covers: ['Part 4'], ref: '4A', bookRef: 'Unit 1 · Part 4 · Discuss',
      type: 'discuss',
      title: 'Three questions to ask and answer',
      instruction: 'The book does these with a partner. On your own, answer each one in a '
        + 'sentence or two — <b>say it aloud first, then write it</b>. Somebody from Cham '
        + 'Motors has answered each question too; their answers open once you have written '
        + 'yours.',
      picture: 'workshop-floor',
      minWords: 10,
      questions: [
        { q: '1. What car does your family have? Describe it.',
          placeholder: 'We have a… It is… It has…' },
        { q: '2. Do you like working on cars? Why, or why not?',
          placeholder: 'I like… because… / I do not like… because…' },
        { q: '3. What jobs are there in a service department?',
          placeholder: 'There is a… and a… A mechanic…' }
      ],
      ideas: ['We have a…', 'It is old / new / small', 'It has a strong engine',
              'I like… because…', 'A mechanic repairs cars', 'A service advisor writes job cards',
              'A manager runs the department', 'A technician finds faults'],
      okMsg: 'Good. Now open the answers below and compare — not to mark yourself, but to see '
        + 'which words they used that you did not.',
      coach: {
        title: 'Before you move on',
        target: 'the present simple, describing and giving reasons',
        minWords: 10,
        taught: [
          'The parts of a car: engine, battery, radiator, bonnet, boot, wheel, door, windscreen.',
          'The people: mechanic, service advisor, manager, diagnostic technician.',
          'The present simple for what is generally true, with -s after he, she or it.'
        ],
        task: 'Answer three questions: what car your family has, whether you like working on '
          + 'cars and why, and what jobs there are in a service department.',
        parts: [
          'Question 1 — name the car and two things about it.',
          'Question 2 — an opinion AND a reason, joined with "because".',
          'Question 3 — at least three jobs, each with what the person does.'
        ],
        example: [
          'My family has an old Kia. It is small, and it has a strong engine, but the tyres '
            + 'are worn.',
          'I like working on cars because I like to find out why something does not work. It '
            + 'is better than sitting in an office all day.',
          'There is a mechanic, who repairs and services the cars. There is a service advisor '
            + 'at reception, who talks to the customers and writes the job cards. There is a '
            + 'manager in the office, and in a big garage there is a technician who finds '
            + 'faults with a computer.'
        ],
        exampleNote: 'One learner’s answers, written out. Question 1 will be different for '
          + 'everybody; question 3 should look much like this.',
        criteria: [
          { t: 'Question 2 gives a reason, not only an opinion.', auto: 'mentions',
            keys: ['because', 'so ', 'as i', 'since'], need: 1,
            fail: 'Add "because…". "I like it" on its own is not an answer to "why".' },
          { t: 'Question 3 names at least three jobs.', auto: 'mentions',
            keys: ['mechanic', 'advisor', 'manager', 'technician', 'receptionist', 'apprentice'],
            need: 3,
            fail: 'Name the jobs themselves — mechanic, service advisor, manager, technician.' },
          { t: 'Each job is said to DO something, not just named.' },
          { t: 'Present simple throughout: this is what is generally true.' }
        ]
      }
    }
  ]
});
