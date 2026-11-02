CSB1.page('u1-l5-s2', {
  book: { page: 15, section: 2, lesson: 'Lesson 5 · Reading', title: 'Word study — the prefix dis-' },
  objective: 'Identify free cybersecurity learning resources',
  prev: 'l5-s1-read-ask-allison', prevLabel: 'Ask Allison',
  next: 'l5-s3-talk-it-over', nextLabel: 'Talk it over',
  cards: [
    {
      id: 'c2a', ref: '2A', bookRef: 'p.15 · 2A', type: 'choiceinline',
      title: 'Work out what dis- does, then use it',
      instruction: 'Finish the rule below. The chart and the seven sentences open underneath it.',
      visual: {
        art: 'prefix-machine',
        caption: '<b>dis-</b> flips the meaning of the word it is attached to. The red chute matters as much as the machine: four very common words look like they should take <b>dis-</b> and do not.'
      },
      ruleGate: {
        title: 'One prefix, one job',
        lead: 'Look at the pair in the machine above: <i>like → dislike</i>. Now finish the rule.',
        text: 'The prefix <b>dis-</b> means [[1]].<br>' +
          'So <i>Sam likes books but he </i><b>dis</b><i>likes computers</i> means he [[2]] computers.<br>' +
          'But not every word takes it: the opposite of <i>happy</i> is [[3]], not <i>dishappy</i>.',
        banks: {
          '1': ['not', 'again', 'very', 'before'],
          '2': ['does not like', 'likes very much', 'liked once', 'will like'],
          '3': ['unhappy', 'dishappy', 'inhappy', 'imhappy']
        },
        answers: { '1': 'not', '2': 'does not like', '3': 'unhappy' },
        after: 'Which words take <b>dis-</b> and which take something else is the job of the next exercise.'
      },
      morph: true,
      notes: [{
        title: 'The prefix dis-',
        warm: true,
        body: 'The prefix <b>dis-</b> means <i>not</i>. Add <b>dis-</b> to the beginning of some verbs and adjectives to change their meaning.<br>' +
          '<i>dis</i> + <i>like</i> = <b>dislike</b> &nbsp; — &nbsp; Sam <b>likes</b> books but he <b>dislikes</b> computers.' +
          '<div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 24px;margin-top:10px">' +
          '<div>organized — <b>dis</b>organized</div><div>agree — <b>dis</b>agree</div>' +
          '<div>order — <b>dis</b>order</div><div>able — <b>dis</b>able</div>' +
          '<div>obey — <b>dis</b>obey</div><div>satisfied — <b>dis</b>satisfied</div>' +
          '<div>respect — <b>dis</b>respect</div><div>arm — <b>dis</b>arm</div></div>'
      }],
      whyTitle: 'Each dis- word, and the one it is nearly',
      items: [
        {
          text: '1. A person who lies, or doesn\'t tell the truth, is {{dishonest|disorganized}}. A phishing email is written by someone like that.', answer: 0,
          why: 'Honest is about telling the truth, so dishonest is not telling it. Disorganized is about where your things are — a very tidy person can still lie.'
        },
        {
          text: '2. Jack and I have different opinions about the new password policy. We {{disobey|disagree}}.', answer: 1,
          why: 'To agree is to hold the same opinion, so to disagree is to hold a different one — which is exactly what the sentence says. Disobey is about breaking a rule, and nobody here has broken anything.'
        },
        {
          text: '3. My teammate can\'t keep his lab notes in order. He\'s very {{dissatisfied|disorganized}}.', answer: 1,
          why: 'Organized means in order, so disorganized is out of order. Dissatisfied means unhappy with something — he may well be, but that is not what "can\'t keep his notes in order" tells you.'
        },
        {
          text: '4. Mark and Bill share their passwords. They {{disobey|disable}} the security rules.', answer: 0,
          why: 'A rule is something you obey, so breaking one is to disobey it. Disable means to switch something off, and you cannot switch off a rule — only a setting.'
        },
        {
          text: '5. Mel {{disrespects|dislikes}} tests because he gets very nervous.', answer: 1,
          why: 'Nervousness is a feeling about the test, and the opposite of liking something is disliking it. Disrespect would mean he thinks tests are beneath him, which is close to the opposite of nervous.'
        },
        {
          text: '6. The malware was armed and ready to run, but the response team {{disarmed|disobeyed}} it quickly and no data was lost.', answer: 0,
          why: 'The sentence hands you the base word: the malware was <b>armed</b>, so the team <b>dis</b>armed it. Watch for that pattern — the right answer is often already in the sentence without its prefix.'
        },
        {
          text: '7. Parents can {{disable|disobey}} some Internet search content if their children are too young to see it.', answer: 0,
          why: 'Content is a setting, and settings are enabled or disabled. Only a person can disobey, and the sentence is about what the parents switch off, not what they refuse to do.'
        }
      ]
    },
    {
      id: 'c2a2', ref: '2A+', bookRef: 'p.15 · 2A', type: 'chipcols',
      title: 'The prefix machine',
      instruction: 'Not every word takes <b>dis-</b>. Drag each base word into <b>takes dis-</b> or <b>does not take dis-</b>. This is the Try again path for the chart above.',
      visual: {
        art: 'prefix-machine',
        caption: 'Four of the fourteen words below belong in the red chute. Say each one out loud with <b>dis-</b> in front of it — if it sounds impossible, it probably is.'
      },
      poolLabel: 'Drag each base word into the right box — or click it, then click a box.',
      cols: [{ label: 'takes dis-' }, { label: 'does NOT take dis-' }],
      pool: ['like', 'agree', 'obey', 'organized', 'respect', 'able', 'satisfied', 'arm', 'connect', 'honest', 'happy', 'possible', 'legal', 'secure'],
      answers: {
        'like': 0, 'agree': 0, 'obey': 0, 'organized': 0, 'respect': 0, 'able': 0, 'satisfied': 0, 'arm': 0, 'connect': 0, 'honest': 0,
        'happy': 1, 'possible': 1, 'legal': 1, 'secure': 1
      },
      okMsg: 'Right — "unhappy", "impossible", "illegal" and "insecure" use different prefixes.',
      whyTitle: 'Ten that take dis-, and four that look as though they should',
      why: {
        'like': 'dislike. The pair the chart is built on: like and dislike are opposites of exactly the same weight.',
        'agree': 'disagree. Very common in a workplace, and politer than it looks — "I disagree" is a normal thing to say in a meeting.',
        'obey': 'disobey. Note that it needs a person: a rule is disobeyed by somebody, never by itself.',
        'organized': 'disorganized. The base word already carries -ed; dis- goes on the front of the whole thing, not into the middle.',
        'respect': 'disrespect. Works as both verb and noun, which is unusual in this list.',
        'able': 'disable. Watch the meaning shift: disabled hardware is switched off, and that is not the same as being unable.',
        'satisfied': 'dissatisfied. Two s letters, because the base word already begins with one. The sound is a long ss.',
        'arm': 'disarm. Literally to take the weapons away, which is why it fits malware so well.',
        'connect': 'disconnect. The one in this list you will say most often at work, and nobody ever says "unconnect".',
        'honest': 'dishonest. A good test for the whole rule: say "unhonest" out loud and you can hear that it is wrong.',
        'happy': 'NOT dis-. It is <b>un</b>happy. There is no reason you could have worked out — this is simply which prefix the word took, and it has to be learned.',
        'possible': 'NOT dis-. It is <b>im</b>possible. Before p, b and m, the prefix in- becomes im- because that is easier to say: impossible, imbalance, immature.',
        'legal': 'NOT dis-. It is <b>il</b>legal. Before l, in- becomes il-: illegal, illogical, illiterate.',
        'secure': 'NOT dis-. It is <b>in</b>secure — and the plain in- form is the one all three of the others started as.'
      }
    },
    {
      id: 'c2b', ref: '2B', bookRef: 'p.15 · 2B', type: 'discuss',
      title: 'Take turns responding to each prompt',
      instruction: 'Work in a team. Take turns responding to each prompt. Use the underlined words. Record yourself if you like, then compare with a model answer.',
      visual: {
        art: 'badge-door',
        caption: 'Prompt 2 in one picture. He is being polite, and he is disobeying a security rule at the same time — which is exactly why this kind of thing happens.'
      },
      minWords: 10,
      coach: {
        title: 'Check your three answers',
        target: 'the prefix dis-: dislike, disobey, dishonest, disagree, disorganized, disrespect',
        minWords: 10,
        taught: [
          'The prefix dis- means not, and it flips the meaning of the word it joins: like → dislike, agree → disagree, obey → disobey, honest → dishonest.',
          'Four common words take a different prefix instead: unhappy, impossible, illegal, insecure.'
        ],
        source: {
          text: '1. Talk about a tool or an app you dislike and why you dislike it.\n2. Talk about a time you saw someone disobey a security rule.\n3. Is it ever okay to be dishonest online? When and why?',
          label: 'THE THREE PROMPTS the learner is answering'
        },
        task: 'Answer three spoken prompts in writing, each using the underlined dis- word: one about a tool you dislike, one about seeing someone disobey a security rule, and one about whether it is ever acceptable to be dishonest online.',
        example: '1. I dislike the old ticketing system because it logs me out every ten minutes, so people end up choosing weak passwords just to type them faster.\n2. Once I saw a colleague hold the door open for a visitor with no badge. He was being polite, but he disobeyed the rule, and the visitor walked into a restricted area.\n3. I think it is sometimes acceptable to give a false date of birth to a site that does not need it, because that protects your identity. It is never acceptable to be dishonest to a colleague about a mistake you made.',
        criteria: [
          { t: 'Uses at least two of the dis- words from this section.', auto: 'mentions', keys: ['dislike', 'disobey', 'dishonest', 'disagree', 'disorganized', 'disrespect', 'disable', 'dissatisfied'], need: 2, fail: 'The point of the exercise is the prefix. Use the underlined word in each answer.' },
          { t: 'Answer 1 gives a reason, not just a name.', auto: 'mentions', keys: ['because', 'since', 'so', 'it means', 'which makes'], need: 1, fail: 'Say *why* you dislike it: "I dislike… because…".' },
          { t: 'Answer 2 describes a real moment, with a place or a person in it.', auto: 'mentions', keys: ['once', 'one day', 'last', 'colleague', 'someone', 'door', 'badge', 'password', 'shared', 'left', 'saw'], need: 1, fail: 'Give the moment, not the rule: who, where, and what they actually did.' },
          { t: 'Answer 3 takes a position and says when.', auto: 'mentions', keys: ['never', 'sometimes', 'always', 'only when', 'it depends', 'i think'], need: 1, fail: 'Answer the "when" part — "sometimes, when…" or "never, because…".' },
          { t: 'At least 30 words in total.', auto: 'words', min: 30 },
          { t: 'All three answers are about something that really happened or that I really think.', self: true },
          { t: 'I said these out loud before I wrote them.', self: true }
        ]
      },
      questions: [
        {
          q: '1. Talk about a tool or an app you <u>dislike</u> and why you dislike it.',
          placeholder: 'I dislike… because…',
          model: 'I dislike the old ticketing system because it logs me out every ten minutes. I have to type my password again and again, and that makes people choose weak passwords.'
        },
        {
          q: '2. Talk about a time you saw someone <u>disobey</u> a security rule.',
          placeholder: 'Once I saw someone…',
          model: 'Once I saw a colleague hold the door open for a visitor with no badge. He was being polite, but he disobeyed the rule, and the visitor walked into a restricted area.'
        },
        {
          q: '3. Is it ever okay to be <u>dishonest</u> online? When and why?',
          placeholder: 'I think…',
          model: 'I think it is sometimes acceptable to give a false date of birth to a website that does not need it, because that protects your identity. It is never acceptable to be dishonest to a colleague about a mistake you made.'
        }
      ]
    }
  ]
});
