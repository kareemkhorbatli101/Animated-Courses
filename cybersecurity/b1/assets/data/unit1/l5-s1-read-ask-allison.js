(function () {
  /* The column, written once and reused by 1D, 1E and 1F so the
     line numbers can never drift apart. */
  var L = [
    null,
    'I used the same password for everything.',
    'Last week somebody got into my email and',
    'read my messages. I changed one password,',
    'but I have forty accounts and I can\'t',
    'remember forty passwords. What should I do?',
    'No need to worry. Change that password',
    'today and get a password manager. It\'s an',
    'app that stores and protects your passwords,',
    'and it makes a different one for every site.',
    'Then turn on two-factor authentication.',
    'It\'s easy. You can do it!',
    'I need to research cyber career choices. I',
    'want to search for jobs online, but I don\'t',
    'have access to the Internet. What should I do?',
    'There\'s no need to worry. Most libraries have',
    'computers. Get a library card—it\'s free—and',
    'you can be online in no time. The librarians',
    'are very helpful. They even let you sign up for',
    'computer time in advance so you don\'t wait in line.',
    'My son is in high school. His online safety',
    'homework is very difficult. I try to help him,',
    'but sometimes it\'s over my head¹. Please help.',
    'PS. I dislike computers. Please don\'t tell me to use one!',
    'Don\'t worry! Your library can help. Many',
    'libraries have free homework help centres and',
    'free family guides about staying safe online.',
    'Go to the library with your son and ask a',
    'librarian for advice. Anyone can do it!',
    'I got an email that said my account would',
    'close today, so I clicked the link and typed',
    'my password. Now I\'m worried.',
    'You are not alone, and it\'s not too late.',
    'Change your password now and turn on',
    'two-factor authentication. Report the message',
    'to your company. Then run your updates and',
    'back up your files. The library has free guides',
    'about this too, and they open on Saturday.',
    'It\'s easy, and you can do it!'
  ];
  function ln(a, b) {
    var out = '';
    for (var i = a; i <= b; i++) out += '<span class="ln" data-n="' + i + '">' + L[i] + '</span>';
    return out;
  }
  var COLUMN =
    '<div class="paper-head"><span class="ttl">ASK ALLISON</span><span style="font-size:13px;opacity:.9">your cyber questions answered</span></div>' +
    '<div class="paper-body"><div class="paper-col">' +
    '<div class="letter"><b>Dear Allison,</b>' + ln(1, 5) + '<div class="sig">—Locked Out</div></div>' +
    '<div class="letter reply"><b>Dear Locked Out,</b>' + ln(6, 11) + '</div>' +
    '<div class="letter"><b>Dear Allison,</b>' + ln(12, 14) + '<div class="sig">—Looking in Laredo</div></div>' +
    '<div class="letter reply"><b>Dear Laredo,</b>' + ln(15, 19) + '</div>' +
    '<div class="letter"><b>Dear Allison,</b>' + ln(20, 23) + '<div class="sig">—Frustrated Father</div></div>' +
    '<div class="letter reply"><b>Dear Frustrated,</b>' + ln(24, 28) + '</div>' +
    '<div class="letter"><b>Dear Allison,</b>' + ln(29, 31) + '<div class="sig">—Phished Once</div></div>' +
    '<div class="letter reply"><b>Dear Phished Once,</b>' + ln(32, 38) + '</div>' +
    '</div><div style="font-size:12.5px;color:var(--text-2);margin-top:10px">¹over (my) head: too difficult to understand</div></div>';

  CSB1.page('u1-l5-s1', {
    book: { page: 14, section: 1, lesson: 'Lesson 5 · Reading', title: 'Read — Ask Allison' },
    objective: 'Identify free cybersecurity learning resources',
    prev: 'l4-s6-discuss', prevLabel: 'Discuss',
    next: 'l5-s2-word-study-dis', nextLabel: 'Word study: dis-',
    cards: [
      {
        id: 'c1a', ref: '1A', bookRef: 'p.14 · 1A', type: 'discuss',
        title: 'Talk about the questions',
        instruction: 'Talk about the questions with your classmates. The first one is about where you live, so only you can answer it. The second has a defensible answer — choose it.',
        visual: {
          art: 'resource-map',
          caption: 'Four kinds of free help that exist in most places. Allison sends three of her four letter-writers to one of them.'
        },
        minWords: 5,
        questions: [
          { q: 'What free cybersecurity resources are available in your community?', placeholder: 'Think about places, people and websites…' },
          {
            q: 'Which of these is the best first stop for someone who wants to learn to stay safe online — and nothing else?',
            evidence: 'think about cost, about who it is open to, and about whether somebody is there to ask.',
            options: [
              { t: 'Your employer\'s awareness training.', ok: false, why: 'Useful and often free — but only if you have a job that provides it, so it is not open to everyone.' },
              { t: 'The public library: free, open to everyone, has computers, and a librarian you can actually ask a question.', ok: true, why: 'Right — and it is exactly where Allison sends three of her four readers. Free, no enrolment, and a person to ask.' },
              { t: 'A university degree in cybersecurity.', ok: false, why: 'Four years and a diploma or GED to get in. Far too much for somebody who only wants to stay safe online.' },
              { t: 'A penetration-testing bootcamp.', ok: false, why: 'A bootcamp teaches one professional skill fast. It is for a career, not for personal safety.' }
            ]
          }
        ],
        ideas: ['public library computers', 'free government family guides', 'community college short courses',
          'a librarian', 'free vendor training tiers', 'a local cyber meet-up', 'your employer\'s awareness training',
          'free online practice labs', 'the help desk at work'],
        coach: {
          title: 'Check your own answer to question 1',
          /* ON, but for SPECIFICITY, not for truth. The card asks the learner to name real
             places near them, and a model cannot know whether a library on a particular street
             exists - the rule against asserting anything about a named place is in the shared
             system prompt. What it can judge, and what the card is actually teaching, is the
             difference between naming a thing and gesturing at a category. */
          task: 'An answer to the reading question "where could someone get free help?". Judge '
            + 'one thing: does it NAME specific places or people, or does it gesture at '
            + 'categories ("some places", "the internet")? You have no way of knowing whether '
            + 'a place the learner names is real, open or free - never say or imply anything '
            + 'about that. Comment on the naming and the language only.',
          taught:'Free learning resources: libraries, librarians, community colleges, meet-ups, government guides, practice labs, workplace training.',
          criteria: [
            { t: 'I named at least two real places or people, not categories.', auto: 'mentions', keys: ['library', 'librarian', 'college', 'school', 'centre', 'center', 'meet-up', 'meetup', 'club', 'work', 'employer', 'online', 'website', 'lab'], need: 2, fail: 'Name them — "the library on Grant Street", "my employer\'s training" — rather than "there are some things".' },
            { t: 'At least one of them is free and open to anyone.', self: true },
            { t: 'I could tell a classmate how to get to one of them.', self: true }
          ]
        }
      },
      {
        id: 'c1b', ref: '1B', bookRef: 'p.14 · 1B', type: 'study',
        title: 'Read the definitions',
        instruction: 'Read the definitions of two words you will meet in the column. Both are now in your glossary — tap any underlined word anywhere in the unit to see it again.',
        visual: [
          { spot: 'backup', caption: 'back up (v) — make a copy so you cannot lose it' },
          { spot: 'password-manager', caption: 'password manager (n) — an app that stores and protects your passwords' }
        ],
        html: '<div class="note"><h4>back up <span style="font-weight:400;color:var(--text-2)">(v)</span></h4>' +
          'to make a copy of your files so you do not lose them<br>' +
          '<i style="color:var(--text-2)">Then run your updates and <b>back up</b> your files.</i></div>' +
          '<div class="note"><h4>password manager <span style="font-weight:400;color:var(--text-2)">(n)</span></h4>' +
          'an app that stores and protects your passwords<br>' +
          '<i style="color:var(--text-2)">Change that password today and get a <b>password manager</b>.</i></div>',
        playable: ['back up', 'password manager'],
        doneLabel: 'I have read the definitions'
      },
      {
        id: 'c1c', ref: '1C', bookRef: 'p.14 · 1C', type: 'mcq',
        title: 'Preview the reading',
        instruction: 'Preview the reading. Look at the title and the picture in the newspaper advice column below. <b>What can you guess about the column?</b> Circle the answer. The article itself is still hidden — guess from the title and picture only.',
        visual: {
          art: 'three-passes',
          caption: 'You are about to read this column three times. This is pass zero: before you read a word, decide what you want from it.'
        },
        notes: [{
          title: 'Reader\'s note — read with a purpose',
          warm: true,
          body: 'Before they read, good readers ask themselves: <b>What do I want from this article?</b>'
        }],
        options: [
          { t: 'Allison gives good advice.', ok: false, why: 'This is an opinion. A title and a picture cannot tell you whether the advice is good.' },
          { t: 'Allison only gives advice about passwords.', ok: false, why: 'The word "only" is too strong. Nothing in the title limits her to one subject.' },
          { t: 'Allison gives advice to her readers in the newspaper.', ok: true, why: 'Correct — the title "Ask Allison" and the newspaper masthead tell you this, and nothing more is needed.' }
        ]
      },
      {
        id: 'c1d', ref: '1D', bookRef: 'p.14 · 1D', type: 'scene',
        title: 'Read the advice column',
        instruction: 'Read the advice column. <b>What advice does Allison give her readers?</b> Press play to hear it read, with a different voice for each letter-writer.',
        scene: 'u1-ask-allison',
        passage: { style: '', speak: false, html: COLUMN },
        quiz: {
          type: 'quizset',
          items: [
            {
              q: 'In one sentence: what kind of advice does Allison give in all four replies?',
              evidence: 'look at what she offers in every reply — and at how she ends each one.',
              jump: { sel: '.reading' },
              options: [
                { t: 'She tells readers that the problem is their own fault.', ok: false, why: 'She goes out of her way not to: "No need to worry", "You are not alone, and it\'s not too late".' },
                { t: 'She gives technical instructions for configuring security software.', ok: false, why: 'She names a password manager, but she never explains how to set anything up. Her advice is about where to go and what to do next.' },
                { t: 'She tells readers that free help already exists nearby, and that they can do the thing themselves.', ok: true, why: 'Right — both halves matter. She points at free help, and she insists the reader is capable: "You can do it!"' },
                { t: 'She tells readers to pay a professional to fix it for them.', ok: false, why: 'The opposite. Nothing she recommends costs money, and she never sends anyone to a paid service.' }
              ]
            },
            {
              q: 'What does Allison tell "Locked Out" to get?',
              evidence: 'lines 6–11.',
              jump: { sel: '.reading' },
              display: 'drop',
              options: [
                { t: 'A password manager', ok: true, why: 'Right — and she tells him to change the password today as well. Two actions, one reply.' },
                { t: 'A new computer', ok: false, why: 'Nothing in her reply costs money. Read lines 6–11 again.' },
                { t: 'A library card', ok: false, why: 'The library comes up in three of her replies, but not in this one.' },
                { t: 'Two-factor authentication', ok: false, why: 'Good advice in general, but not what she names here.' }
              ]
            },
            {
              q: 'Where does Allison send three of the four readers?',
              evidence: 'lines 15, 24 and 36.',
              jump: { sel: '.reading' },
              display: 'drop',
              options: [
                { t: 'To a community college', ok: false, why: 'A pathway from Lesson 1, but not where Allison sends anyone.' },
                { t: 'To their employer', ok: false, why: 'She tells "Phished Once" to report the message to the company — that is reporting, not somewhere to go and learn.' },
                { t: 'To a bootcamp', ok: false, why: 'Far too big a step for the problems in these four letters.' },
                { t: 'To the library', ok: true, why: 'Right — three times out of four. It is free, it has computers, and the librarians help.' }
              ]
            }
          ]
        }
      },
      {
        id: 'c1e', ref: '1E', bookRef: 'p.15 · 1E', type: 'highlighter',
        title: 'Is Allison encouraging her readers?',
        instruction: 'Read the advice column again. <b>Is Allison encouraging her readers to succeed?</b> Click the words and phrases that support your answer. Six sentences carry the encouragement.',
        visual: {
          art: 'three-passes',
          caption: 'Third pass. You are no longer reading for facts — you are reading for the writer\'s attitude, which lives in how she opens and closes each reply.'
        },
        hintText: 'Click a sentence to underline it. There are six encouraging phrases across her four replies.',
        paras: [
          [
            { i: 0, t: '<b>Dear Locked Out:</b> No need to worry.' },
            { i: 1, t: 'Change that password today and get a password manager.' },
            { i: 2, t: 'It\'s easy. You can do it!' }
          ],
          [
            { i: 3, t: '<b>Dear Laredo:</b> There\'s no need to worry.' },
            { i: 4, t: 'Most libraries have computers.' },
            { i: 5, t: 'The librarians are very helpful.' }
          ],
          [
            { i: 6, t: '<b>Dear Frustrated:</b> Don\'t worry!' },
            { i: 7, t: 'Your library can help.' },
            { i: 8, t: 'Anyone can do it!' }
          ],
          [
            { i: 9, t: '<b>Dear Phished Once:</b> You are not alone, and it\'s not too late.' },
            { i: 10, t: 'Report the message to your company.' },
            { i: 11, t: 'It\'s easy, and you can do it!' }
          ]
        ],
        answers: [0, 2, 3, 6, 9, 11],
        questions: [
          {
            q: 'So — is Allison encouraging her readers to succeed? Choose the answer that matches what you underlined.',
            evidence: 'the first and last sentence of each of her four replies.',
            options: [
              { t: 'No — she sends them away to the library instead of helping.', ok: false, why: 'Sending somebody to free help nearby is the help. And she still tells them they can do it.' },
              { t: 'Yes — every reply starts by removing the fear ("No need to worry") and ends by telling the reader they can do it themselves.', ok: true, why: 'Right, and the pattern is the evidence: the encouragement is not scattered, it is at the start and the end of all four replies.' },
              { t: 'Yes — she says the problems are not serious.', ok: false, why: 'She never says that. "No need to worry" is about the reader\'s ability to fix it, not about the problem being small.' },
              { t: 'No — she tells them what they did wrong.', ok: false, why: 'Read her openings again. Not one of the four begins with blame.' }
            ]
          }
        ]
      },
      {
        id: 'c1f', ref: '1F', bookRef: 'p.15 · 1F', type: 'tristate',
        title: 'True, false or no information?',
        instruction: 'Mark each statement <b>T</b> (true), <b>F</b> (false) or <b>NI</b> (no information). For each true or false answer, write the line number where you found it. The first one is done for you.',
        visual: [
          { spot: 'library', caption: 'Three of her four replies send the reader here' },
          { spot: 'password-manager', caption: 'And the fourth one sends them here' }
        ],
        notes: [{ title: 'The column', body: COLUMN }],
        given: true,
        whyTitle: 'Where the column proves it — and where it says nothing at all',
        items: [
          {
            t: 'A password manager makes a different password for every site.', ans: 'T', line: 9, hint: 'read lines 7 to 9 again.',
            why: 'Line 9 says exactly that: "it makes a different one for every site". Done for you, so that you can see what counts as proof — a line you could point at, not a thing you happen to know.'
          },
          {
            t: 'Sometimes you can sign up for computer time at the library in advance.', ans: 'T', line: 19, hint: 'look at the end of Allison\'s reply to Laredo.',
            why: 'Line 19: "They even let you sign up for computer time in advance". Note "even" — she is offering it as a bonus, which is why it is easy to read past.'
          },
          {
            t: 'Library cards don\'t cost any money.', ans: 'T', line: 16, hint: 'Allison says it in a dash — "it\'s free".',
            why: 'Line 16 carries it inside a dash: "Get a library card—it\'s free—and". Information in an aside counts as much as information in a main clause.'
          },
          {
            t: 'You can go online at the library.', ans: 'T', line: 17, hint: 'look just after the library card.',
            why: 'Line 17: "you can be online in no time". The statement is a paraphrase rather than a quotation, which is normally where a true/false question hides its difficulty.'
          },
          {
            t: 'You can pay for help with homework at the library.', ans: 'F', line: 25, hint: 'the homework help centres are described with one important adjective.',
            why: 'False, not no-information: line 25 says the homework help centres are <b>free</b>. The column does not stay silent on the point — it says the opposite, and one adjective is doing all of it.'
          },
          {
            t: 'Libraries are open on Sunday.', ans: 'NI', line: 0, hint: 'the column names one day only — and it is not Sunday.',
            why: 'The only day named anywhere is Saturday, in line 38. Naming one day tells you nothing about another, so this is no information rather than false — the commonest mistake in this kind of exercise is to treat silence as a denial.'
          }
        ]
      }
    ]
  });
})();
