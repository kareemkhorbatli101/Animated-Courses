# -*- coding: utf-8 -*-
"""Unit 31 — Microbes and Immunity. Volume 4."""
from content._g import gaps

_GT, _GA = gaps(
    'A vaccine does not fight an infection. It rehearses one. The material injected is '
    'recognis{ed} as foreign, the immune system mounts a response to it, and a record of that '
    'response is ret{ained}. When the real pathogen arrives the response is already '
    'availab{le}, which is why the illness is shorter or does not happ{en} at all. Nothing '
    'about the mechanism is myster{ious}; the difficulty has always been manufacture, '
    'storage and delivery rather than theory.')

_ET, _EA = gaps(
    'Antibiotic resistance is not caused by a body becoming used to a drug; it is caused by '
    'the bacteria changing. A population of bacteria is var{ied}, and if a drug kills almost '
    'all of it, the survivors are the ones that happened to be less suscept{ible}. They then '
    'reprod{uce}. This is selection operating in days rather than millennia, and it is the '
    'clearest demonstr{ation} of evolution available to anybody with a laboratory and a week. '
    'The practical consequences follow directly from the mechanism. A course of treatment '
    'stopped early leaves exactly the population most likely to be resist{ant}, which is why '
    'the instruction to finish the course is not bureaucr{atic} caution. Prescribing an '
    'antibiotic for a viral infection gives rise to resistance without any corresponding '
    'bene{fit}, because the virus is unaffec{ted} and only the bystanding bacteria are '
    'selected. Worse, resistance travels between species: a gene conferring it can be '
    'transferred horizont{ally} between organisms that are not closely rel{ated} at all.')

UNIT = dict(
    n=31, vol=4, level='B2',
    title='Microbes and Immunity',
    icons=['beaker', 'news', 'speech'],
    subs=['How a vaccine works', 'Resistance and misuse', 'Why outbreaks end'],
    grammar='Cause and mechanism',
    field='pathogen, immunity, resistance',
    opener_line='Volume 4 opens with the field where everyday language is least adequate. '
                'Immune, infectious, resistant and contagious are used loosely in '
                'conversation and precisely in science, and the gap between the two is where '
                'most public misunderstanding lives.',
    candos=[
        'I can describe a biological mechanism step by step without losing the thread.',
        'I can distinguish a cause from a correlation in my own writing.',
        'I can use owing to, as a result of, gives rise to and accounts for accurately.',
        'I can explain why a popular explanation is wrong without being dismissive.',
        'I can follow a talk that corrects a common misunderstanding.',
        'I can write an explanation a non-specialist can follow and a specialist would accept.',
    ],

    acad=[
        ('pathogen', 'an organism that causes disease'),
        ('immunity', 'the ability to resist a particular infection'),
        ('antibody', 'a protein made to match one invader'),
        ('antigen', 'the part of an invader that is recognised'),
        ('vaccine', 'a preparation that rehearses an immune response'),
        ('strain', 'one variant of an organism within a species'),
        ('virulence', 'how much harm an organism does'),
        ('resistance', 'the ability to survive something meant to kill you'),
        ('susceptible', 'able to be affected'),
        ('incubation', 'the delay between infection and symptoms'),
        ('reservoir', 'a population in which an organism persists'),
        ('inoculate', 'to introduce material in order to produce immunity'),
        ('attenuate', 'to weaken deliberately'),
        ('microbiome', 'the community of organisms living in or on a body'),
        ('commensal', 'living alongside without causing harm'),
        ('outbreak', 'a sudden local rise in cases'),
        ('epidemiology', 'the study of how disease moves through populations'),
        ('asymptomatic', 'infected without showing symptoms'),
    ],
    family=('immune', [
        ('immunity', 'noun', 'herd immunity falls when coverage drops'),
        ('immunise', 'verb', 'to immunise a whole cohort at once'),
        ('immunisation', 'noun', 'a national immunisation programme'),
    ]),
    collocs=[
        ('mount a response', 'to begin to react to an invader'),
        ('build up immunity', 'to acquire it gradually'),
        ('break out', 'to begin suddenly, of a disease'),
        ('die out', 'to disappear completely'),
        ('confer protection', 'to give protection to somebody'),
        ('at risk of', 'likely to suffer'),
        ('account for', 'to explain, or to make up a proportion of'),
        ('give rise to', 'to cause'),
        ('in the wake of', 'following, as a consequence of'),
        ('run its course', 'to continue until it finishes naturally'),
    ],
    stance=[
        ('is now well established', 'the finding is settled'),
        ('in the great majority of cases', 'nearly always, but not quite'),
        ('appears to be', 'the writer reports without asserting'),
        ('there is little doubt that', 'the writer is close to certain'),
        ('remains contested', 'specialists still disagree'),
    ],
    nuance=[
        ('infection / disease', 'the organism arrives / the person is ill'),
        ('immune / immunised', 'able to resist / made able by a vaccine'),
        ('outbreak / epidemic', 'local and short / wide and sustained'),
    ],
    vocab_talk=[
        'Explain how a vaccine works to somebody who has never been told.',
        'Why does finishing a course of antibiotics matter?',
        'What is the difference between being infected and being ill?',
        'Why might an outbreak stop before everyone has been infected?',
    ],
    again=['host', 'carrier', 'herd immunity', 'booster',
           'quarantine', 'case fatality rate', 'contact tracing', 'surveillance'],

    r1=dict(
        sub='How a vaccine works',
        skill=('Suffixes that mark a process or a state',
               ['Science writing turns verbs into processes: demonstrate becomes '
                'demonstration, select becomes selection.',
                'The -ible and -able endings mark capacity: susceptible, available.',
                'Decide whether the slot needs a process, a state or a capacity before you '
                'spell anything.']),
        guided_text=_GT, guided=_GA,
        guided_hint='recognis-- is recognised — the slot is a passive verb after is, so it '
                    'takes the past participle.',
        exam_text=_ET, exam=_EA,
    ),

    r2=dict(
        sub='Resistance and misuse',
        skill=('Reading a clinical policy against a request',
               ['A policy sets out when something may be done. A request tests whether the '
                'conditions are met.',
                'Find the operative word — may, must, only where, except — and ask what it '
                'rules out.',
                'A policy that allows an exception usually says who may authorise it.']),
        docs=[
            ('notice', 'University Health Centre · antimicrobial prescribing policy', [
                '# When an antibiotic will be prescribed',
                '* Where a bacterial infection is confirmed by test, or',
                '* Where the clinical picture makes a bacterial cause likely and delay would '
                'carry risk.',
                '# When one will not',
                '* For a sore throat, cough or cold of under seven days with no warning signs.',
                '* On patient request alone, or in advance of travel.',
                '# Exceptions',
                '* A delayed prescription may be issued, to be used only if symptoms worsen, '
                'at the clinician’s discretion.',
                '* Prophylaxis before travel requires a review by the Centre’s lead GP.',
            ], 'notice'),
            ('email', 'd.achterberg@health.uni.ac.uk', 'r.vasquez@student.uni.ac.uk',
             '14/02/2028', 'Your request for antibiotics before fieldwork', [
                 'Dear Ms Vasquez,',
                 '',
                 'Thank you for explaining the fieldwork, which does change the picture, and',
                 'for sending the itinerary.',
                 '',
                 'I cannot issue antibiotics for you to carry on the basis of the request',
                 'itself — the policy rules that out, and the reason is not caution about',
                 'you personally. A supply taken without a diagnosis is used, in the great',
                 'majority of cases, for something an antibiotic cannot touch.',
                 '',
                 'What I can do is two things. Prophylaxis before travel is permitted where',
                 'our lead GP reviews it, and six weeks at a remote site is exactly the',
                 'situation that review exists for. I have asked her to look at it.',
                 '',
                 'Separately, I will issue a delayed prescription for the period you are',
                 'away. You hold it, and you use it only if the specific symptoms on the',
                 'sheet appear. That is within my discretion and it does not need anyone',
                 'else.',
                 '',
                 'Dr Achterberg',
             ]),
        ],
        guided=[
            ('When will the Centre prescribe an antibiotic?',
             ('On request', 'Where a bacterial infection is confirmed or likely with risk in delay',
              'Before any travel', 'For any cough'), 1,
             'The two conditions are listed together and both concern a bacterial cause '
             'rather than the patient’s wishes.'),
            ('What is a delayed prescription?',
             ('One issued late', 'One held and used only if symptoms worsen',
              'One issued by the lead GP', 'One for travel only'), 1,
             'The notice defines it as held in reserve, and the email applies that definition '
             'to six weeks away.'),
            ('Who must review prophylaxis before travel?',
             ('Any clinician', 'The Centre’s lead GP', 'The patient', 'Nobody'), 1,
             'The policy names the lead GP, which is why the doctor can refer rather than '
             'simply refuse.'),
            ('What will the policy not accept on its own?',
             ('A positive test', 'A patient request', 'A clinical judgement', 'A travel plan'), 1,
             'On patient request alone is listed under when an antibiotic will not be '
             'prescribed.'),
        ],
        exam=[
            ('Why does the doctor refuse the original request?',
             ('He doubts the itinerary', 'The policy excludes prescribing on request alone',
              'He has no supply', 'The fieldwork is too short'), 1,
             'He says the policy rules it out and is careful to add that the reason is not '
             'personal caution.'),
            ('What reason does he give for the rule?',
             ('Cost', 'A supply held without a diagnosis is usually used for the wrong thing',
              'Storage conditions', 'Legal liability'), 1,
             'He generalises about how carried supplies are actually used rather than about '
             'this patient.'),
            ('What does the fieldwork change?',
             ('Nothing', 'It brings the request within the prophylaxis exception',
              'It removes the need for review', 'It makes a test unnecessary'), 1,
             'Six weeks at a remote site is the situation the exception exists for, which is '
             'why he refers it.'),
            ('What can the doctor do without consulting anybody?',
             ('Issue prophylaxis', 'Issue a delayed prescription',
              'Overrule the policy', 'Order a test abroad'), 1,
             'The notice puts the delayed prescription within the clinician’s discretion, and '
             'he says so explicitly.'),
            ('What condition attaches to the delayed prescription?',
             ('It expires in a week', 'It is used only if the listed symptoms appear',
              'It needs the lead GP', 'It must be collected abroad'), 1,
             'The point of the arrangement is that the supply exists but the decision to use '
             'it is tied to evidence.'),
            ('What is the doctor’s overall approach?',
             ('A flat refusal', 'Refusing the route requested and opening two permitted ones',
              'Granting the request', 'Delaying a decision'), 1,
             'He explains why one door is closed and then uses the exception and his own '
             'discretion instead.'),
            ('What does "it does not need anyone else" tell you?',
             ('The GP is unavailable', 'The delayed prescription is within his own authority',
              'The policy is being waived', 'The patient must decide'), 1,
             'It contrasts with the prophylaxis route, which the policy says requires a '
             'review by somebody more senior.'),
        ],
    ),

    r3=dict(
        sub='Why outbreaks end',
        title='Why an Outbreak Stops Before Everyone Has Had It',
        words=292,
        paras=[
            'The intuitive model of an epidemic is a fire that burns until it runs out of '
            'fuel, and it predicts that an outbreak ends when everybody has been infected. '
            'Almost no outbreak behaves this way. It is now well established that '
            'transmission falls away long before the susceptible population is exhausted, and '
            'the reason is arithmetic rather than biological: each case has to produce more '
            'than one further case for the outbreak to grow, and as the immune proportion '
            'rises, that average falls below one while most of the population has never been '
            'infected at all.',

            'That threshold appears to be reached earlier than the simplest calculation '
            'suggests, because people are not interchangeable. Transmission is concentrated '
            'in a minority who have many contacts, and they are infected first precisely '
            'because they have many contacts. By the time a tenth of a population has been '
            'infected, that tenth is not a random tenth; it is the part of the network doing '
            'most of the work. Removing it damages the '
            'network out of proportion to its size, and in the great majority of cases that '
            'is what produces the early turn which puzzles people watching the daily '
            'figures.',

            'There is little doubt that the effect is real, and its size remains contested, '
            'which matters more than it sounds. If the threshold is low, an outbreak '
            'subsides early and waiting is defensible. If it is '
            'high, waiting means an enormous number of infections before anything slows '
            'down, and the difference is not one of opinion about values but a quantity '
            'nobody can measure until afterwards. This is the position epidemiology is '
            'routinely in: the mechanism is understood, the direction is agreed, and the '
            'number that would settle the argument arrives too late to be useful.',
        ],
        skill=('Reading a passage that corrects an intuition',
               ['These passages open with the wrong model, stated fairly, and then dismantle '
                'it.',
                'The correction is usually mechanical: here is what actually has to be true '
                'for the thing to grow.',
                'The last paragraph often concedes that a quantity is unknown. That '
                'concession is the point, not a weakness.']),
        guided=[
            ('What does the intuitive model predict?',
             ('That outbreaks never end', 'That an outbreak ends when everybody is infected',
              'That immunity is permanent', 'That transmission is random'), 1,
             'The fire-and-fuel image is stated first precisely so that the passage can show '
             'it is wrong.'),
            ('Why does transmission fall away early?',
             ('The pathogen weakens', 'Each case stops producing more than one further case',
              'People recover faster', 'Testing improves'), 1,
             'The author calls the reason arithmetic: the average falls below one while most '
             'people are still uninfected.'),
            ('Why are the first people infected not a random sample?',
             ('They are younger', 'They have many contacts, which is why they were infected first',
              'They are tested more', 'They live closer together'), 1,
             'Being highly connected both causes early infection and makes that person '
             'important to transmission.'),
            ('The word "susceptible" in the first paragraph means',
             ('already immune', 'able to be infected', 'symptomatic', 'infectious'), 1,
             'It is contrasted with those already immune, so it describes people the '
             'infection can still reach.'),
        ],
        exam=[
            ('What is the effect of removing the highly connected minority?',
             ('Nothing measurable', 'The network is damaged out of proportion to the number removed',
              'Transmission becomes random', 'Immunity is lost'), 1,
             'That disproportion is the whole argument of the second paragraph.'),
            ('What does the author say remains contested?',
             ('Whether the effect exists', 'The size of the effect',
              'Whether immunity works', 'The definition of an outbreak'), 1,
             'The existence is given as near-certain and the magnitude as unsettled, and the '
             'distinction is deliberate.'),
            ('Why does the size of the effect matter so much?',
             ('It changes the biology', 'It decides whether a policy of waiting is defensible',
              'It affects vaccine design', 'It changes the definition of immunity'), 1,
             'A low threshold makes waiting reasonable and a high one makes it very costly, '
             'which is a policy difference, not a value difference.'),
            ('What does the author mean by "not a difference of opinion about values"?',
             ('The disagreement is political', 'The disagreement is about a measurable quantity',
              'Values do not matter here', 'Nobody disagrees'), 1,
             'The point is that the two sides want the same thing and differ about a number.'),
            ('What is the "uncomfortable position" described at the end?',
             ('The mechanism is unknown',
              'The mechanism is understood but the decisive number arrives too late',
              'The data are falsified', 'Policy ignores science'), 1,
             'Understood mechanism, agreed direction, and a number that is only available '
             'afterwards is the position named.'),
            ('Which would most weaken the second paragraph?',
             ('Evidence that vaccines work',
              'Evidence that contacts are distributed evenly across a population',
              'Evidence that immunity fades', 'Evidence that outbreaks recur'), 1,
             'The argument depends entirely on transmission being concentrated in a '
             'minority.'),
            ('All of the following are stated EXCEPT:',
             ('Transmission falls before the susceptible population is exhausted',
              'Highly connected people are infected early',
              'The threshold is reached earlier than the simplest calculation suggests',
              'The threshold can be measured in advance'), 3,
             'The final paragraph says the opposite: the number arrives too late to be '
             'useful.'),
            ('What is the author’s attitude to epidemiology?',
             ('Dismissive', 'Sympathetic about a real limit rather than a failing',
              'Uncritical', 'Hostile to modelling'), 1,
             'The limit is presented as structural — the number exists but arrives late — not '
             'as carelessness.'),
            ('Why does the author open with the wrong model?',
             ('To pad the passage', 'Because the correction only makes sense against it',
              'Because it is still believed by scientists', 'To criticise the public'), 1,
             'The arithmetic argument in the first paragraph is a direct reply to the fire '
             'image, so the image has to come first.'),
        ],
    ),

    l1=dict(
        sub='How a vaccine works',
        caption='Two students after an immunology lecture',
        skill=('Hearing an explanation checked by a question',
               ['One speaker explains and the other tests the explanation with a case.',
                'The items usually come from the answer to that case, not from the original '
                'explanation.',
                'Listen for: but what about, so does that mean, then why does.']),
        warm=[
            ('Woman: So the vaccine contains the actual pathogen?',
             ('Sometimes, but weakened.', 'Yes, it does.',
              'About two doses.', 'In the fridge.'), 0,
             'A yes/no question about content, answered with the qualification that makes the '
             'answer accurate.'),
            ('Man: Why do I need a second dose?',
             ('The first one rarely builds enough.', 'Yes, you do.',
              'About three weeks later.', 'At the health centre.'), 0,
             'A why question wants the reason rather than confirmation or a time.'),
            ('Woman: Does being immune mean I cannot pass it on?',
             ('Not necessarily — those are different things.', 'Yes, it does.',
              'About a week.', 'Only after two doses.'), 0,
             'A does-it-mean question answered by separating two ideas the questioner has '
             'joined.'),
        ],
        script=[
            ('Man', 'So the vaccine contains the actual pathogen?'),
            ('Woman', 'Sometimes, but attenuated — weakened so that it cannot establish an '
                      'infection. Sometimes it is only a fragment. Sometimes it is just the '
                      'instructions for making the fragment.'),
            ('Man', 'And the body treats all three the same way?'),
            ('Woman', 'The body treats the antigen the same way. That is the whole trick. The '
                      'immune system does not ask where the antigen came from, so a fragment '
                      'with no organism attached provokes the same rehearsal.'),
            ('Man', 'Then why do I need a second dose?'),
            ('Woman', 'Because the first response is usually not strong enough to leave a '
                      'durable record. The second dose meets a system that already '
                      'recognises the antigen, and the response is both faster and larger.'),
            ('Man', 'Does being immune mean I cannot pass it on?'),
            ('Woman', 'No, and that is the one people get wrong most often. Immunity protects '
                      'you from disease. Whether it stops transmission is a separate question '
                      'with a separate answer for every vaccine.'),
            ('Man', 'That seems like something worth saying publicly.'),
            ('Woman', 'It is said constantly and it never lands, because the everyday word '
                      'immune means untouchable and the technical word does not.'),
        ],
        items=[
            ('What does an attenuated pathogen mean?',
             ('A dead one', 'A weakened one that cannot establish an infection',
              'A fragment', 'A set of instructions'), 1,
             'She defines it directly as weakened so that it cannot establish an infection.'),
            ('What does the body respond to?',
             ('The organism', 'The antigen', 'The dose', 'The injection site'), 1,
             'She says the immune system does not ask where the antigen came from, which is '
             'why a fragment works.'),
            ('Why is a second dose needed?',
             ('The first wears off', 'The first rarely leaves a durable record',
              'The dose is too small', 'To cover new strains'), 1,
             'The second dose meets a system that already recognises the antigen, so the '
             'response is faster and larger.'),
            ('What does immunity reliably protect against?',
             ('Transmission', 'Disease in the immune person',
              'All strains', 'Reinfection permanently'), 1,
             'She separates protection from disease from the question of passing it on.'),
            ('What does she say varies between vaccines?',
             ('The antigen', 'Whether transmission is blocked',
              'The number of doses', 'The storage temperature'), 1,
             'She calls it a separate question with a separate answer for every vaccine.'),
            ('Why does she think the point never lands?',
             ('It is rarely said', 'The everyday meaning of immune is stronger than the technical one',
              'People do not listen', 'The evidence is weak'), 1,
             'She says it is said constantly, so the obstacle is the word rather than the '
             'communication.'),
            ('What is the man doing in the conversation?',
             ('Explaining', 'Testing the explanation with the next obvious case',
              'Disagreeing', 'Revising for an exam'), 1,
             'Each of his turns pushes the explanation into a case it has not yet covered.'),
        ],
    ),

    l2=dict(
        sub='Resistance and misuse',
        caption='A health centre briefing to new students',
        poster=['Health Centre · registration this week',
                'Antibiotics: not for colds',
                'Finish any course you are given'],
        skill=('Hearing a correction of a popular belief',
               ['A speaker correcting a belief states it first, fairly, then says why it is '
                'wrong.',
                'Listen for: the usual explanation is, people think, that is not what '
                'happens.',
                'The item will test the correct mechanism, not the belief.']),
        warm=[
            ('Man: Does my body get used to antibiotics?',
             ('No — the bacteria change, not you.', 'Yes, over time.',
              'About five days.', 'At the pharmacy.'), 0,
             'A does-my-body question answered by relocating the change to where it actually '
             'happens.'),
            ('Woman: What if I feel better after three days?',
             ('Finish the course anyway.', 'Then stop.',
              'About seven days.', 'Yes, you will.'), 0,
             'A what-if question wants the instruction and the reason behind it.'),
            ('Man: Can resistance spread between different bacteria?',
             ('Yes, the gene can transfer directly.', 'No, never.',
              'About two species.', 'In hospitals.'), 0,
             'A can-it question answered with the mechanism that makes the answer yes.'),
        ],
        script=[
            ('Woman', 'I want to spend five minutes on antibiotics, because the explanation '
                      'most of you are carrying is wrong in a way that changes behaviour. The '
                      'usual explanation is that your body gets used to a drug, the way it '
                      'gets used to caffeine. That is not what happens. Your body is not '
                      'involved. The bacteria are a population, they vary, and when you take '
                      'a drug that kills most of them the ones left are the ones that '
                      'happened to survive it. They then reproduce, and you have selected for '
                      'resistance. That is why we are tedious about finishing a course. Stop '
                      'on day three because you feel better and you have killed the '
                      'susceptible bacteria and left the resistant ones a clear field — the '
                      'exact opposite of what you intended. It also explains why we will not '
                      'give you an antibiotic for a cold. The virus is untouched, so there is '
                      'no benefit at all, and the bacteria you are carrying harmlessly get '
                      'selected anyway. All cost, no benefit. And one last thing, because it '
                      'is the part that makes this a collective problem rather than a '
                      'personal one: a resistance gene can transfer directly between '
                      'organisms that are not even closely related. The resistance you select '
                      'does not stay in your body or in your species.'),
        ],
        items=[
            ('What is the belief the speaker corrects?',
             ('That antibiotics are harmful', 'That the body gets used to the drug',
              'That colds are bacterial', 'That courses are too long'), 1,
             'She states it with the caffeine comparison and then says the body is not '
             'involved.'),
            ('What actually produces resistance?',
             ('Tolerance in the patient', 'Selection within a varying bacterial population',
              'Weak drugs', 'Short courses only'), 1,
             'The survivors reproduce, which is selection rather than habituation.'),
            ('What happens if a course is stopped early?',
             ('Nothing', 'The susceptible bacteria are gone and the resistant ones have a clear field',
              'The drug becomes toxic', 'The infection returns unchanged'), 1,
             'She calls it the exact opposite of what the patient intended.'),
            ('Why is an antibiotic useless for a cold?',
             ('The dose is wrong', 'The virus is untouched, so there is no benefit',
              'Colds are too short', 'It would be too expensive'), 1,
             'All cost, no benefit is her summary, because only bystanding bacteria are '
             'selected.'),
            ('What makes resistance a collective problem?',
             ('Hospitals', 'A resistance gene can transfer between unrelated organisms',
              'Travel', 'Prescribing rates'), 1,
             'She says the resistance you select does not stay in your body or your species.'),
            ('Why does she say the wrong explanation matters?',
             ('It is unscientific', 'It changes behaviour',
              'It is old', 'It confuses doctors'), 1,
             'That is her stated reason for spending five minutes on it at all.'),
        ],
    ),

    l3=dict(
        sub='Why outbreaks end',
        caption='A lecture on epidemic thresholds',
        board=['Fire-and-fuel model: wrong',
               'Growth needs R above one',
               'High-contact people infected first',
               'Threshold size: unmeasurable in advance'],
        skill=('Following a talk built on one number',
               ['When a lecture turns on a single quantity, every item will be about what '
                'happens above and below it.',
                'Listen for the two scenarios the speaker lays out.',
                'The speaker’s own view is usually about what we cannot know, not about '
                'which scenario is true.']),
        warm=[
            ('Man: Does an epidemic stop when everyone has had it?',
             ('No — well before that, in fact.', 'Yes, eventually.',
              'About six months.', 'It depends on the vaccine.'), 0,
             'A does-it question answered with a correction and an intensifier rather than '
             'agreement.'),
            ('Woman: What has to be true for an outbreak to grow?',
             ('Each case must cause more than one more.', 'Yes, it must grow.',
              'About two weeks.', 'A new strain.'), 0,
             'A what-has-to-be-true question wants the condition stated as a condition.'),
            ('Man: Can we measure the threshold in advance?',
             ('Unfortunately not, only afterwards.', 'Yes, routinely.',
              'About twenty per cent.', 'With better data.'), 0,
             'A can-we question answered with the limit and when the number does arrive.'),
        ],
        script=[
            ('Man', 'The model most people carry is a fire. It burns until it runs out of '
                    'fuel, and on that model an epidemic ends when everybody has had it. '
                    'Almost no epidemic has ever behaved like that, and the reason is '
                    'arithmetic. For an outbreak to grow, each case has to produce more than '
                    'one further case on average. As the immune proportion rises, that '
                    'average falls, and it crosses one while the large majority of people '
                    'have never been infected. So the outbreak subsides with most of the fuel '
                    'untouched. Now, the interesting part. The simple version of that '
                    'calculation treats everybody as interchangeable, and they are not. A '
                    'minority of people have very many contacts and they do most of the '
                    'transmitting — and they are infected early, precisely because they have '
                    'many contacts. So the first ten per cent to be infected is not a random '
                    'ten per cent. It is the part of the network doing most of the work, and '
                    'taking it out of circulation damages transmission far more than its size '
                    'suggests. There is little doubt that this is real. How large it is '
                    'remains contested, and I want to be honest that the disagreement is not '
                    'ideological. If the threshold is low, an outbreak subsides early and '
                    'patience is defensible. If it is high, patience costs an enormous number '
                    'of infections. The two camps want the same outcome and differ about a '
                    'number — and it is a number we can only establish after the event, which '
                    'is the permanent predicament of my field.'),
        ],
        items=[
            ('What is wrong with the fire model?',
             ('It is too complicated', 'It predicts an end only when everyone is infected',
              'It ignores vaccines', 'It assumes immunity fades'), 1,
             'He says almost no epidemic has behaved like that and gives the arithmetic '
             'reason.'),
            ('What has to be true for an outbreak to grow?',
             ('Immunity must fall', 'Each case must produce more than one further case',
              'The pathogen must mutate', 'Contact must be random'), 1,
             'That average crossing one is the mechanism the whole talk rests on.'),
            ('Why is the first tenth infected not a random tenth?',
             ('Testing is uneven', 'High-contact people are infected early',
              'Younger people are infected first', 'Cities are infected first'), 1,
             'Having many contacts both causes early infection and makes the person important '
             'to transmission.'),
            ('What does removing that group do?',
             ('Little', 'Damages transmission more than its size suggests',
              'Ends the outbreak entirely', 'Raises the threshold'), 1,
             'He calls it taking the part of the network doing most of the work out of '
             'circulation.'),
            ('What does the speaker say about the disagreement?',
             ('It is ideological', 'It is about a number, and both camps want the same outcome',
              'It has been settled', 'It is about definitions'), 1,
             'He is explicit that it is not ideological, which is why he calls it a '
             'predicament rather than a dispute.'),
            ('What is the "permanent predicament" of his field?',
             ('Poor funding', 'The decisive number is only available after the event',
              'Public mistrust', 'Weak models'), 1,
             'The mechanism is clear and the quantity that would settle policy arrives too '
             'late.'),
            ('What does "with most of the fuel untouched" mean?',
             ('The outbreak restarts', 'Most people were never infected',
              'Immunity was widespread', 'The fire model is correct'), 1,
             'It restates the arithmetic conclusion in the terms of the image he has just '
             'rejected.'),
        ],
    ),

    sp=[
        dict(
            sub='How a vaccine works',
            focus='explaining a mechanism in order',
            skill=('Sequencing an explanation out loud',
                   ['A mechanism is a sequence. Say the steps in order and mark them: first, '
                    'then, which means that.',
                    'Do not start with the conclusion. The listener cannot hold it until the '
                    'steps arrive.',
                    'Stress the verb in each step, because the verb is the step.']),
            repeat=[
                'The material is recognised as foreign.',
                'The immune system mounts a response.',
                'A record of that response is retained.',
                'When the real pathogen arrives, the response is already available.',
                'That is why the illness is shorter, or does not happen at all.',
                'A fragment with no organism attached provokes the same rehearsal.',
                'The immune system does not ask where the antigen came from, which is why instructions for making a fragment work as well as the fragment itself.',
            ],
            theme='health, prevention and what people believe',
            qs=[
                'Thanks for joining me. To begin, have you ever had to explain something '
                'medical to a member of your family?',
                'Many people are confident about health claims they have never checked. Why '
                'do you think that is?',
                'Now your opinion. Should basic immunology be taught in secondary school? Why '
                'or why not?',
                'A final question. If an explanation is correct but nobody understands it, '
                'whose problem is that?',
            ],
            model=[(2, 'Health is one of the few technical subjects everybody has personal '
                       'experience of, and experience feels like evidence. Nobody is '
                       'confident about metallurgy because nobody has a metallurgy anecdote.'),
                   (4, 'The explainer’s, mostly. If the words you are using mean something '
                       'else in ordinary speech, the failure is predictable and therefore '
                       'yours to fix.')],
            selfcheck=['I gave the steps in order.',
                       'I marked the sequence out loud.',
                       'I stressed the verb in each step.'],
        ),
        dict(
            sub='Resistance and misuse',
            focus='stating a cause without overstating it',
            skill=('Saying what causes what',
                   ['Owing to and as a result of are followed by a noun phrase; because is '
                    'followed by a clause.',
                    'Gives rise to is a cause; accounts for can be a cause or a proportion. '
                    'Keep them apart.',
                    'Slow down on the causal phrase. It is the load-bearing part of the '
                    'sentence.']),
            repeat=[
                'The bacteria change, not the patient.',
                'A population of bacteria varies.',
                'The survivors are the ones that happened to resist.',
                'Stopping early gives rise to resistance rather than preventing it.',
                'Owing to the mechanism, an antibiotic for a cold has cost and no benefit.',
                'Resistance genes can transfer between organisms that are not closely related.',
                'As a result of that transfer, the resistance one person selects does not stay in that person, or even in the species.',
            ],
            theme='medicine, instructions and collective consequences',
            qs=[
                'Thank you for your time. First, do you usually finish a course of medicine '
                'you have been given?',
                'People often stop when they feel better. Is that a failure of information or '
                'of something else?',
                'Now an opinion question. Should antibiotics be harder to obtain than they '
                'currently are? Why?',
                'One last question. How would you persuade somebody that a small private '
                'choice has a collective cost?',
            ],
            model=[(2, 'It is not information. Everyone has been told. It is that feeling '
                       'better is vivid and the future population of bacteria is abstract, '
                       'and the vivid thing wins.'),
                   (4, 'Not with statistics. I would use the one case where the collective '
                       'cost came back to the person who caused it, because that converts an '
                       'abstraction into a story.')],
            selfcheck=['I used owing to and as a result of with noun phrases.',
                       'I did not confuse gives rise to with accounts for.',
                       'I slowed down on the causal phrase.'],
        ),
        dict(
            sub='Why outbreaks end',
            focus='presenting two scenarios neutrally',
            skill=('Laying out a fork in the evidence',
                   ['When the answer depends on an unknown quantity, say so and give both '
                    'branches.',
                    'Give each branch the same shape: if it is low, then; if it is high, '
                    'then.',
                    'Say which you believe only after both branches are on the table.']),
            repeat=[
                'An outbreak subsides before the fuel runs out.',
                'Growth needs more than one further case per case.',
                'High-contact people are infected first.',
                'Removing them damages the network more than their number suggests.',
                'If the threshold is low, waiting is defensible.',
                'If it is high, waiting costs an enormous number of infections.',
                'The two positions want the same outcome and differ about a quantity that can only be established after the event.',
            ],
            theme='uncertainty, policy and acting without the number',
            qs=[
                'Thanks for taking part. To start, do you remember a time when experts '
                'disagreed about something that affected you?',
                'Does admitting uncertainty make experts more or less persuasive? Why?',
                'Now your opinion. Should a government act on a model it knows is uncertain, '
                'or wait for better evidence?',
                'And finally. Is there a way to explain a range of outcomes to the public '
                'that actually works?',
            ],
            model=[(2, 'Less persuasive in the short run and more trustworthy in the long '
                       'run, and institutions keep choosing the short run because that is '
                       'where the criticism arrives.'),
                   (3, 'It has to act, because waiting is also a decision and it is not a '
                       'neutral one. What it owes people is a clear statement of what would '
                       'change its mind.')],
            selfcheck=['I gave both branches the same shape.',
                       'I stated the unknown quantity clearly.',
                       'I gave my own view last.'],
        ),
    ],

    w1=dict(
        sub='Questions about mechanisms',
        skill=('Build a Sentence with a causal link',
               ['The two non-question items in this unit build causal sentences with owing '
                'to, as a result of or which is why.',
                'A tile reading owing to or as a result of is followed by a noun phrase, '
                'never by a subject and a verb.',
                'Which is why joins two clauses and cannot begin the sentence.']),
        guided=[
            ('My course finishes on Thursday but I feel fine already.',
             ['know', 'do', 'you', 'whether', 'I', 'can', 'stop', 'it', 'early'],
             'Do you know whether I can stop it early?'),
            ('The second dose is three weeks after the first.',
             ['to know', 'nobody', 'seems', 'why', 'the gap', 'that', 'is', 'long', 'exactly'],
             'Nobody seems to know exactly why the gap is that long.'),
            ('My tutor asked about the threshold calculation.',
             ['she', 'whether', 'to know', 'wanted', 'I', 'had', 'the paper', 'read', 'myself'],
             'She wanted to know whether I had read the paper myself.'),
        ],
        exam=[
            ('Immunity does not always stop transmission.',
             ['do', 'whether', 'know', 'you', 'that', 'is', 'every vaccine', 'of', 'true'],
             'Do you know whether that is true of every vaccine?'),
            ('The health centre refused the request.',
             ['explain', 'can', 'anybody', 'why', 'the policy', 'that', 'rules', 'to me', 'out'],
             'Can anybody explain to me why the policy rules that out?'),
            ('Resistance genes move between species.',
             ['know', 'does', 'anybody', 'how', 'a transfer', 'like', 'that', 'happens', 'actually'],
             'Does anybody know how a transfer like that actually happens?'),
            ('The threshold cannot be measured in advance.',
             ['us', 'told', 'nobody', 'when', 'the number', 'does', 'available', 'become', 'actually'],
             'Nobody told us when the number does actually become available.'),
            ('The delayed prescription is held in reserve.',
             ['told', 'she', 'me', 'what', 'symptoms', 'would', 'justify', 'it', 'using'],
             'She told me what symptoms would justify using it.'),
            ('Stopping a course early leaves the resistant bacteria.',
             ['owing to', 'that', 'selection', 'the course', 'has', 'to', 'be', 'finished', 'properly'],
             'Owing to that selection, the course has to be finished properly.'),
            ('High-contact people are infected first.',
             ['which', 'is', 'why', 'the first', 'cases', 'are', 'a random', 'not', 'sample'],
             'High-contact people are infected first, which is why the first cases are not a random sample.'),
        ],
    ),

    w2=dict(
        sub='Resistance and misuse',
        to='health@uni.ac.uk',
        date='21/02/2028',
        subject='Fieldwork supply — the delayed prescription, and one question',
        scenario=[
            'The health centre has refused to give you antibiotics to carry, offered to refer '
            'you for travel prophylaxis, and issued a delayed prescription instead. You are '
            'satisfied with that, but the fieldwork site is nine hours from a clinic and you '
            'want to know what the sheet of symptoms does not cover.',
            'Write an email to the health centre.',
        ],
        bullets=['Accept what has been offered and show you understood the reasoning.',
                 'Describe the constraint the policy was not written for.',
                 'Ask one answerable question rather than several.'],
        skill=('Asking about the gap in an arrangement',
               ['Accept the arrangement first. A question that arrives with a complaint is '
                'read as a complaint.',
                'Describe your constraint in facts, not in adjectives: nine hours, not '
                '"very remote".',
                'Ask one question. Three questions get one answer, usually to the easiest.']),
        model=[
            'Dear Dr Achterberg,',
            '',
            'Thank you — the delayed prescription is exactly what I needed, and I understand '
            'now why carrying a supply without a diagnosis is a different thing from carrying '
            'one with a trigger attached. I have also had the review appointment with your '
            'lead GP and the prophylaxis is sorted.',
            '',
            'One constraint I did not explain properly. The site is nine hours from the '
            'nearest clinic, and for two of the six weeks there is no vehicle on site at all. '
            'So the question of whether something has crossed a threshold has to be answered '
            'by me, at the time, with no possibility of being wrong twice.',
            '',
            'The symptom sheet is clear about the cases it lists. My question is about the '
            'case it does not: if I have two of the listed symptoms but neither has reached '
            'the severity described, should I treat that as a yes or wait?',
            '',
            'That is the only thing I am unsure about, and a one-line answer would do. I will '
            'write up whatever happens, if it is of any use to the Centre for the next '
            'student in this position.',
            '',
            'With thanks,',
            'Rosalía Vasquez',
        ],
        notes=['It accepts the arrangement and restates the reasoning in its own words, which '
               'shows the explanation landed.',
               'The constraint is given as facts — nine hours, two weeks, no vehicle — rather '
               'than as adjectives.',
               'One question is asked, and it is the question the sheet genuinely does not '
               'answer.',
               'The offer to write it up is small, costless and makes the writer easy to help '
               'again.'],
        bandpair=dict(
            mid=[
                'Dear Dr Achterberg,',
                'Thank you very much for the delayed prescription and for arranging the '
                'appointment with the lead GP. I really appreciate it and I understand the '
                'policy much better now.',
                'I should have explained before that the fieldwork site is extremely remote '
                'and it is very difficult to get to a clinic from there, especially as we do '
                'not always have a vehicle available. This makes the situation quite '
                'difficult for me and I am a bit worried about making the wrong decision '
                'while I am away.',
                'Could you tell me more about how I should use the symptom sheet? I would '
                'also like to know whether I should contact you if I am unsure, and what the '
                'best way to do that would be from the site. Any advice would be very '
                'helpful.',
                'Thank you again for all your help. Best wishes, Rosalía Vasquez',
            ],
            top=[
                'Dear Dr Achterberg,',
                'Thank you — the delayed prescription is exactly what I needed, and I '
                'understand now why carrying a supply without a diagnosis differs from '
                'carrying one with a trigger attached. The review with your lead GP is done '
                'and the prophylaxis is sorted.',
                'One constraint I did not explain properly. The site is nine hours from the '
                'nearest clinic and for two of the six weeks there is no vehicle on site. So '
                'whether something has crossed a threshold has to be answered by me, at the '
                'time, with no possibility of being wrong twice.',
                'The sheet is clear about the cases it lists. My question is about the one it '
                'does not: if I have two listed symptoms but neither has reached the severity '
                'described, is that a yes or a wait?',
                'A one-line answer would do. I will write up whatever happens if it is of use '
                'to the Centre. Rosalía Vasquez',
            ],
            diffs=[
                'It restates the reasoning behind the refusal in its own words, which proves '
                'comprehension instead of merely claiming it.',
                'It replaces adjectives with measurements: nine hours and two weeks without a '
                'vehicle, rather than extremely remote and quite difficult.',
                'It names the precise gap in the symptom sheet, so the reader can answer '
                'without asking what is meant.',
                'It asks one question instead of three, which is why it will get an answer to '
                'the one that matters.',
                'It offers something back and marks the cost of answering as one line, making '
                'the request easy to grant.',
            ],
        ),
    ),

    w3=dict(
        sub='Why outbreaks end',
        prof='Dr Okonjo',
        question='Epidemic models produce a threshold above which transmission subsides, but '
                 'the value of that threshold cannot be established until an outbreak is '
                 'over. Some argue that governments should therefore act early and '
                 'aggressively, since the cost of being wrong in that direction is lower. '
                 'Others argue that acting on an unmeasured quantity destroys public trust '
                 'and that restraint, clearly explained, is the better policy. Which is the '
                 'more defensible position, and why?',
        posts=[('Hélène', 'w',
                'Act early. The asymmetry is the whole argument: an unnecessary intervention '
                'costs weeks of disruption, and a late one costs lives that cannot be '
                'returned. When the two errors are that different in kind, you do not need '
                'the number to know which way to lean.'),
               ('Dmitri', 'm',
                'That reasoning has no stopping point. Every year, on Hélène’s logic, we '
                'should act on the worst plausible case, and after the third time nobody '
                'complies and the capacity to act at all is gone. Trust is not a soft '
                'consideration; it is the thing the intervention runs on.')],
        skill=('Answering an asymmetry argument',
               ['An argument from asymmetric costs is strong and usually incomplete, because '
                'it ignores what repetition does.',
                'The reply is not to deny the asymmetry but to show what else changes when '
                'you act on it repeatedly.',
                'Then propose the condition that keeps the asymmetry argument and limits '
                'it.']),
        starters=['Hélène’s asymmetry is real and it is not the whole calculation.',
                  'Dmitri is right that…, though his conclusion…',
                  'What is missing from both is…',
                  'The condition that holds both together is…'],
        model=[
            'Hélène’s asymmetry is real and it is not the whole calculation. An unnecessary '
            'intervention and a late one are indeed different in kind, and she is right that '
            'this is knowable without the threshold. What the argument leaves out is that the '
            'cost of the unnecessary intervention is not paid once. It is paid in the '
            'willingness of people to comply next time, which means the second-order cost '
            'lands precisely when the asymmetry argument next needs to be used.',
            'Dmitri is right about that mechanism and wrong about what follows from it. '
            'Trust is a resource and acting early spends it, but restraint also spends it, '
            'and more abruptly, if the outbreak then does what the models said it might. '
            'An institution that waited and was wrong does not retain its authority by '
            'having been cautious.',
            'What is missing from both posts is any account of what would be said in advance. '
            'The asymmetry argument is defensible when the institution states, before acting, '
            'what it expects, what it would accept as evidence that it over-reacted, and what '
            'it will do if that evidence arrives. An intervention announced with those three '
            'things spends far less trust than the same intervention announced as a certainty, '
            'because when it turns out to have been unnecessary the institution has already '
            'said so.',
            'So I would side with Hélène on the direction and with Dmitri on the constraint. '
            'Act early, and make the prediction falsifiable at the moment you act. That is the '
            'only version of her position that survives being used more than twice.',
        ],
        model_words=260,
    ),

    gram=dict(
        title='Cause and mechanism',
        headers=['Form', 'How it is used'],
        rows=[
            ('because + clause', 'because the virus is unaffected, there is no benefit'),
            ('owing to / due to + noun phrase', 'owing to that selection, the course must be finished'),
            ('as a result of + noun phrase', 'as a result of horizontal transfer, resistance spreads'),
            ('gives rise to', 'a transitive cause: early stopping gives rise to resistance'),
            ('accounts for', 'explains, or makes up a proportion of — two different meanings'),
            ('is attributable to', 'formal and cautious: the fall is attributable to coverage'),
            ('so that / such that', 'result rather than purpose when it follows a fact'),
        ],
        notes=[
            'Owing to, due to and as a result of are followed by a noun phrase. Owing to the '
            'virus is unaffected is wrong; because the virus is unaffected, or owing to the '
            'virus being unaffected, is right.',
            'Accounts for carries two meanings and English readers disambiguate by context: '
            'selection accounts for resistance is causal, while resistant strains account for '
            'a fifth of cases is proportional. Do not use it where either reading is '
            'possible.',
            'Is attributable to concedes that the attribution is a judgement. Causes does '
            'not. At B2 the difference is the difference between a claim you can defend and '
            'one you cannot.',
        ],
        watch='Do not write "the reason is because". The reason already states a cause, so '
              'because repeats it. Write the reason is that, or simply because.',
        ex=[
            ('Choose because, owing to or as a result of.',
             ['______ the virus is unaffected, there is no benefit.',
              '______ that selection, the resistant bacteria dominate.',
              '______ horizontal transfer, resistance crosses species.',
              '______ the first dose is weak, a second is needed.',
              '______ the patient’s travel plans, a review was required.',
              '______ nobody can measure the threshold, policy is contested.'],
             ['Because', 'Owing to', 'As a result of', 'Because', 'Owing to', 'Because']),
            ('Correct the causal error.',
             ['The reason is because the bacteria vary.',
              'Owing to the course was stopped early, resistance developed.',
              'Due to he felt better, he stopped taking it.',
              'The fall in cases causes to higher coverage.'],
             ['The reason is that the bacteria vary.',
              'Owing to the course being stopped early, resistance developed.',
              'Because he felt better, he stopped taking it.',
              'The fall in cases is attributable to higher coverage.']),
            ('Rewrite using gives rise to or is attributable to.',
             ['Stopping early causes resistance.',
              'The drop in cases was probably caused by immunity.',
              'Horizontal transfer causes resistance to spread between species.',
              'The early peak was probably caused by high-contact people being infected first.'],
             ['Stopping early gives rise to resistance.',
              'The drop in cases is attributable to immunity.',
              'Horizontal transfer gives rise to the spread of resistance between species.',
              'The early peak is attributable to high-contact people being infected first.']),
        ],
        bas='Two of the ten Build a Sentence items in this unit are causal rather than '
            'interrogative. A tile reading owing to or as a result of must be followed by a '
            'noun phrase, and which is why can never begin the sentence.',
    ),

    fault=dict(
        text='The reason resistance develops is because the bacteria vary. Owing to the '
             'course was stopped early, the resistant strain survived. Nobody knows whether '
             'did the patient finish it. The drop in cases causes to higher coverage. Being '
             'asymptomatic, the test was still positive.',
        faults=[
            ('The reason resistance develops is because',
             'The reason resistance develops is that',
             'The reason already names a cause, so because states the same thing twice.'),
            ('Owing to the course was stopped early',
             'Owing to the course being stopped early',
             'Owing to takes a noun phrase, not a subject and a finite verb.'),
            ('whether did the patient finish it', 'whether the patient finished it',
             'An embedded question keeps statement order and takes no auxiliary.'),
            ('The drop in cases causes to higher coverage',
             'The drop in cases is attributable to higher coverage',
             'Causes takes a direct object with no preposition, and the direction of cause '
             'here is backwards.'),
            ('Being asymptomatic, the test was still positive',
             'Being asymptomatic, the patient still tested positive',
             'The test was not asymptomatic; the participle needs the subject it describes.'),
        ],
    ),

    rev=dict(
        vocab=[
            ('an organism that causes disease', 'pathogen'),
            ('the part of an invader that is recognised', 'antigen'),
            ('how much harm an organism does', 'virulence'),
            ('able to be affected', 'susceptible'),
            ('the delay between infection and symptoms', 'incubation'),
            ('a population in which an organism persists', 'reservoir'),
            ('to weaken deliberately', 'attenuate'),
            ('living alongside without causing harm', 'commensal'),
            ('a sudden local rise in cases', 'outbreak'),
            ('the study of how disease moves through populations', 'epidemiology'),
            ('infected without showing symptoms', 'asymptomatic'),
            ('the community of organisms living in or on a body', 'microbiome'),
        ],
        gram=[
            ('______ the virus is unaffected, there is no benefit.', 'Because'),
            ('______ that selection, the course must be finished.', 'Owing to'),
            ('______ horizontal transfer, resistance crosses species.', 'As a result of'),
            ('The reason is ______ the bacteria vary.', 'that'),
            ('Stopping early ______ rise to resistance.', 'gives'),
            ('The fall is ______ to higher coverage.', 'attributable'),
            ('Selection ______ for the rise in resistant strains.', 'accounts'),
            ('______ to the remoteness of the site, a review was needed.', 'Owing'),
        ],
        mini=[
            ('Antibiotic resistance develops because',
             ('the body adapts to the drug', 'the bacterial population is selected',
              'doses are too small', 'drugs lose potency'), 1,
             'The survivors of a treatment reproduce, which is selection rather than '
             'habituation in the patient.'),
            ('An outbreak usually subsides when',
             ('everyone has been infected', 'each case produces fewer than one further case',
              'the pathogen weakens', 'testing increases'), 1,
             'That average crossing one is the arithmetic condition, and it happens while '
             'most people are uninfected.'),
            ('Being immune reliably means',
             ('you cannot transmit it', 'you are protected from the disease',
              'you have been vaccinated', 'you have had the infection'), 1,
             'Protection from disease and blocking transmission are separate questions with '
             'separate answers.'),
            ('Which sentence is correct?',
             ('Owing to the course was stopped, resistance developed.',
              'Owing to the course being stopped, resistance developed.',
              'Owing to that the course was stopped, resistance developed.',
              'Owing to stopped the course, resistance developed.'), 1,
             'Owing to must be followed by a noun phrase, and a gerund clause supplies one.'),
            ('"Is attributable to" rather than "is caused by" signals that the writer',
             ('is certain', 'treats the attribution as a judgement',
              'is quoting', 'disagrees'), 1,
             'It concedes that somebody has made an inference, which causes does not.'),
            ('The first people infected in an outbreak tend to be',
             ('a random sample', 'those with many contacts',
              'the youngest', 'the least healthy'), 1,
             'High contact rates cause both early infection and disproportionate importance '
             'to transmission.'),
        ],
    ),

    tip='Volume 4 starts here, and it assumes the three anchors from Volume 3: the embedded '
        'question, the passive reporting frame and the hedging scale. If any of them still '
        'needs thought, go back to Units 21, 26 and 29 before Unit 32. Everything from now '
        'on uses all three at once.',
)



# ---------------------------------------------------------------------------
# The two academic cycles, added by the Volumes 3-6 work.
#
# Unit 31 opens Volume 4 with its two academic cycles. Cycle 4 derives
# the herd immunity threshold from a single condition - whether the
# average number of further infections per case stands above or below
# one - and shows why an epidemic ends with a large susceptible
# population remaining. Cycle 5 attacks the homogeneity assumption
# inside that calculation: a city average above the threshold can
# conceal a clustered subgroup far below it, which is the shape of
# almost every measles outbreak of the last twenty years, so the
# quantity worth publishing is the lowest coverage in any group that
# mixes mainly with itself.
# ---------------------------------------------------------------------------
UNIT['fieldwords'] = [('epidemic', 'a disease spreading quickly through a population'),
 ('transmission', 'the passing of an infection from one person to another'),
 ('vaccination', 'the giving of a vaccine to produce immunity'),
 ('inoculation', 'the older word for the same procedure'),
 ('contagious', 'passed on by contact between people'),
 ('prevalence', 'the share of a population that has something'),
 ('homogeneous', 'the same throughout, with no internal differences'),
 ('clustered', 'grouped together rather than spread evenly'),
 ('subgroup', 'a smaller group inside a larger one'),
 ('saturation', 'the point at which no more can be taken up'),
 ('decline', 'a steady fall in a number'),
 ('assumption', 'something a model takes to be true without testing it')]
UNIT['r4'] = {'sub': 'Why outbreaks end',
 'title': 'The Epidemic That Stops Without Reaching Everybody',
 'words': 313,
 'skill': ('Reading a quantitative claim stated in words',
           ['The central number is a ratio, and the whole argument turns on whether it is '
            'above or below one.',
            'Follow what happens to that ratio as the share of immune people rises. The '
            'mechanism is in that sentence.',
            'A question about the threshold wants the condition, not the percentage.']),
 'paras': ['An epidemic does not continue until every person has been infected, and the '
           'reason is arithmetical rather than biological. What governs the course of an '
           'outbreak is the average number of further infections each infected person '
           'produces, and an epidemic grows only while that number stands above one. Every '
           'person who becomes immune, whether by infection or by vaccination, removes one '
           'of the opportunities for transmission that the next infected person would '
           'otherwise have had. The number therefore falls as the epidemic proceeds. When it '
           'crosses one the outbreak begins to shrink of its own accord, and the proportion '
           'of the population still susceptible at that moment can be very large.',
           'The threshold at which this happens follows from a single quantity, the number '
           'of infections a case would produce in a population with no immunity at all. '
           'Where that quantity is three, each case must lose two thirds of its '
           'opportunities before the epidemic turns, so immunity in two thirds of the '
           'population is therefore sufficient, and a third of the population need never be '
           'infected. Where it is twelve, as in measles, the requirement rises to about '
           'ninety-two per cent, which is why a disease this contagious is the one that '
           'returns first when vaccination rates slip. The arithmetic also explains a '
           'pattern that puzzles people: a decline in cases is not evidence that the last '
           'infections have been prevented, only that the ratio has crossed its threshold.',
           'Two practical consequences follow. The first is that an immunisation programme '
           'does not have to reach everybody to protect everybody, which is the whole '
           'justification for a public campaign rather than a private decision. The second '
           'is less comfortable, and it is the subject of the next passage: the threshold is '
           'calculated for a population treated as a single homogeneous pool, and the figure '
           'quoted in public is the figure for that pool.'],
 'guided': [('What governs the course of an outbreak, by this account?',
             ('The total number infected',
              'The average number of further infections each case produces',
              'The prevalence of immunity at the start',
              'The length of the illness'),
             1,
             'An epidemic grows only while that average stands above one.'),
            ('What does each immune person remove?',
             ('A case of the disease',
              'An opportunity for transmission',
              'A percentage point of prevalence',
              'A vaccination'),
             1,
             'Each one removes an opportunity the next infected person would otherwise have '
             'had.'),
            ('What happens when the ratio crosses one?',
             ('Everybody has been infected',
              'The outbreak begins to shrink of its own accord',
              'Vaccination becomes unnecessary',
              'The disease becomes contagious'),
             1,
             'The outbreak shrinks from that point, with many people still susceptible.')],
 'exam': [('If a case would produce three infections in a population with no immunity, what '
           'share must be immune?',
           ('A third', 'Two thirds', 'Ninety-two per cent', 'All of it'),
           1,
           'Each case must lose two thirds of its opportunities, so immunity in two thirds '
           'is sufficient.'),
          ('Why is measles the disease that returns first?',
           ('It is the most dangerous',
            'Its threshold is about ninety-two per cent, so a small slip matters',
            'Vaccination against it is newest',
            'It has no vaccine'),
           1,
           'A requirement that high leaves almost no margin when vaccination rates slip.'),
          ('What does a decline in cases NOT show, according to the passage?',
           ('That the ratio has crossed its threshold',
            'That the last infections have been prevented',
            'That the epidemic is shrinking',
            'That immunity has risen'),
           1,
           'The decline shows the threshold has been crossed, not that the remaining '
           'infections were prevented.'),
          ('What is the justification for a public campaign rather than a private decision?',
           ('Vaccination is cheaper in bulk',
            'A programme need not reach everybody to protect everybody',
            'Private decisions are unlawful',
            'Prevalence cannot be measured privately'),
           1,
           'The protection produced by the threshold is not something an individual can buy '
           'for themselves.'),
          ('The word accord in paragraph 1 is closest in meaning to',
           ('agreement', 'its own motion', 'arrangement', 'measurement'),
           1,
           'Of its own accord means without anything further being done to it.')]}
UNIT['r5'] = {'sub': 'Why outbreaks end',
 'title': 'One Number for a Population That Is Not One Population',
 'words': 315,
 'skill': ('Reading an objection to an assumption inside a model',
           ['The writer accepts the arithmetic and attacks one assumption it rests on. Find '
            'the assumption in the first two sentences.',
            'A worked example follows. Note what the two subgroups have in common and what '
            'they do not.',
            'A question about the recommendation wants what should be published, not what '
            'should be believed.']),
 'paras': ['The threshold calculation is sound and one of its assumptions is false '
           'everywhere. It treats the population as homogeneous, meaning that any infected '
           'person is as likely to meet any other person, and human populations are nothing '
           'of the kind. The assumption of homogeneous mixing is not a small simplification, '
           'since the derivation of the threshold depends on it entirely. Contact is '
           'clustered by household, by school, by occupation and by conviction, and '
           'clustering does not merely add noise to the result: it changes what the result '
           'means.',
           'Take a city of a million people in which vaccination has reached seventy per '
           'cent, comfortably above a threshold of two thirds. Suppose that coverage is not '
           'spread evenly but divides into two subgroups: a large one at eighty per cent and '
           'a small one of fifty thousand at twenty per cent, which is roughly what happens '
           'wherever a community has convictions of its own about vaccination. The city '
           'average is above the threshold and the small subgroup is far below it, and since '
           'its members meet each other far more often than they meet anybody else, the '
           'arithmetic inside that subgroup is the arithmetic of an unprotected population. '
           'Transmission there can run its full course while the published figure for the '
           'city stays reassuring, and this is not a hypothetical pattern. It is the pattern '
           'of almost every measles outbreak of the last twenty years.',
           'The recommendation is about publication rather than about belief. A single '
           'coverage figure for a large area is close to useless for the purpose it is '
           'normally put to, because the quantity that matters is the lowest figure in any '
           'group that mixes mainly with itself. Agencies that publish the average and not '
           'the distribution are not misreporting anything, and they are reporting the '
           'number least likely to predict the next outbreak, because concentration and not '
           'prevalence is what starts one.'],
 'guided': [('Which assumption does the writer attack?',
             ('That immunity lasts',
              'That the population is homogeneous',
              'That vaccination works',
              'That the threshold can be calculated'),
             1,
             'It treats the population as homogeneous, and human populations are nothing of '
             'the kind.'),
            ('What does clustering do to the result?',
             ('Adds noise to it',
              'Changes what it means',
              'Makes it slightly too high',
              'Has no effect'),
             1,
             'The writer is explicit that it does not merely add noise.'),
            ('In the example, what is the city average?',
             ('Fifty per cent', 'Seventy per cent', 'Eighty per cent', 'Twenty per cent'),
             1,
             'Vaccination has reached seventy per cent across the city.')],
 'exam': [('Why does the small subgroup behave like an unprotected population?',
           ('Its coverage is zero',
            'Its members meet each other far more often than they meet anybody else',
            'It is too small to measure',
            'It has no access to vaccination'),
           1,
           'Because contact is concentrated inside it, the arithmetic that applies is its '
           'own.'),
          ('What does the passage say about this pattern?',
           ('It is hypothetical',
            'It is the pattern of almost every measles outbreak of the last twenty years',
            'It has never been observed',
            'It applies only to cities'),
           1,
           'The writer explicitly denies that the case is hypothetical.'),
          ('Which quantity does the passage say actually matters?',
           ('The city average',
            'The lowest figure in any group that mixes mainly with itself',
            'The national average',
            'The total number vaccinated'),
           1,
           'That is the figure the threshold argument needs, and not the mean.'),
          ('What does the passage say about agencies that publish the average?',
           ('They are misreporting',
            'They are not misreporting, and are reporting the least predictive number',
            'They should publish nothing',
            'They are acting unlawfully'),
           1,
           'The criticism is careful: the number is accurate and close to useless.'),
          ('What is the recommendation about?',
           ('Belief', 'Publication', 'Compulsory vaccination', 'Measuring prevalence'),
           1,
           'It is about publication rather than about belief, as the paragraph opens by '
           'saying.')]}
UNIT['l4'] = {'sub': 'Why outbreaks end',
 'caption': 'A lecture on the threshold and why it is not a percentage to memorise',
 'board': ['Ratio above one: epidemic grows',
           'Ratio below one: epidemic shrinks',
           'Each immune person removes a chance',
           'Threshold follows from the starting number'],
 'skill': ('A lecture that replaces a remembered figure with a condition',
           ['The lecturer is impatient with the memorised percentage and wants the condition '
            'behind it, so note the condition.',
            'He works two numbers through the same arithmetic. Keep the pair straight.',
            'A question about the examination wants what he says he will not accept.']),
 'warm': [('Woman: When does an epidemic shrink?',
           ('When the ratio falls below one.',
            'When everybody is immune.',
            'Yes, it shrinks.',
            'Two thirds.'),
           0,
           'That is the condition the whole lecture is built on.'),
          ('Woman: Where does the threshold come from?',
           ('From the number of infections a case makes with no immunity.',
            'From the size of the population.',
            'Yes, it comes from somewhere.',
            'From the vaccination rate.'),
           0,
           'The threshold is derived from that starting quantity, not learnt separately.'),
          ('Woman: What will he not accept in the examination?',
           ('A percentage with no reasoning.',
            'A diagram.',
            'Yes, he accepts it.',
            'About ninety-two per cent.'),
           0,
           'He wants the condition and the derivation, not a remembered figure.')],
 'script': [('Man',
             'Many of you arrived knowing that herd immunity is about ninety-five per cent, '
             'and I would like you to forget that, because it is a number without an '
             'argument attached and it is wrong for most diseases. Here is what to hold '
             'instead. Take the average number of further infections one infected person '
             'produces. While that average is above one the epidemic grows, and the moment '
             'it falls below one the epidemic shrinks. That is the whole mechanism, and '
             'everything else is arithmetic. Write that down, because it is the only thing '
             'in this lecture you cannot derive. Now, why does the average fall? Because '
             'every immune person in the population is one fewer opportunity for '
             'transmission, so the average drops as immunity accumulates, whether that '
             'immunity came from infection or from vaccination. Which gives you the '
             'threshold immediately. If a case would produce three infections in a '
             'population with no immunity, it has to lose two thirds of them, so two thirds '
             'immunity is enough and a third of the population is never infected at all. If '
             'it would produce twelve, as measles does, you need about ninety-two per cent, '
             'and that is where your remembered figure comes from: it is the measles figure, '
             'wearing a disguise. In the examination I will not accept a percentage on its '
             'own. I want the starting number and the arithmetic that takes you from it to '
             'the threshold, because a student who has the reasoning can do any disease and '
             'a student who has the number can do one.')],
 'items': [('What does the lecturer ask the class to forget?',
            ('The mechanism of transmission',
             'That herd immunity is about ninety-five per cent',
             'The measles figure',
             'The definition of an epidemic'),
            1,
            'He calls it a number without an argument attached, and wrong for most '
            'diseases.'),
           ('What does he say is the whole mechanism?',
            ('Vaccination coverage',
             'Whether the average number of further infections is above or below one',
             'The size of the population',
             'The length of the illness'),
            1,
            'Above one it grows, below one it shrinks, and everything else is arithmetic.'),
           ('Why does the average fall as an epidemic proceeds?',
            ('People become more careful',
             'Each immune person is one fewer opportunity for transmission',
             'The disease weakens',
             'Vaccination becomes compulsory'),
            1,
            'Immunity removes opportunities, whether it came from infection or vaccination.'),
           ('Where does he say the remembered figure comes from?',
            ('An old textbook',
             'It is the measles figure in disguise',
             'A public campaign',
             'An average of all diseases'),
            1,
            'Measles needs about ninety-two per cent, and that is the source of the '
            'ninety-five.'),
           ('Why does he want the reasoning rather than the number?',
            ('Numbers are easy to forget',
             'A student with the reasoning can do any disease',
             'The number is secret',
             'Percentages are not examinable'),
            1,
            'That is the contrast he ends on: any disease against one.')]}
UNIT['l5'] = {'sub': 'Why outbreaks end',
 'caption': 'A short talk on an average that hides the number that matters',
 'board': ['City: 70% — above threshold',
           'Large group: 80%',
           'Small group: 20%',
           'Publish the lowest, not the mean'],
 'skill': ('A talk that criticises a statistic without disputing it',
           ['The speaker agrees the published figure is accurate. Note what she says is '
            'wrong with it anyway.',
            'The two subgroups carry the argument. Hold their sizes and their coverage.',
            'A question about her conclusion wants what she would publish.']),
 'warm': [('Man: Is the city figure wrong?',
           ('No, it is accurate and useless.',
            'Yes, it is miscounted.',
            'Yes, it is wrong.',
            'Seventy per cent.'),
           0,
           'Her whole point is that accuracy is not the problem.'),
          ('Man: Which number would she publish?',
           ('The lowest in any group that mixes with itself.',
            'The national average.',
            'Yes, she would publish one.',
            'Eighty per cent.'),
           0,
           'That is the quantity the threshold argument actually needs.'),
          ('Man: Why does the small group matter so much?',
           ('Because its members mostly meet each other.',
            'Because it is growing.',
            'Yes, it matters.',
            'Fifty thousand.'),
           0,
           'Concentrated contact means the subgroup has its own arithmetic.')],
 'script': [('Woman',
             'I want to show you how a true number can be the least useful number available. '
             'A city of a million, vaccination coverage seventy per cent, threshold two '
             'thirds. On paper the city is safe. And I mean that literally: on paper, in a '
             'table, in a press release, and nowhere else. Now break the seventy apart, '
             'because nobody is vaccinated on average. Suppose nine hundred and fifty '
             'thousand people sit at eighty per cent and fifty thousand sit at twenty, which '
             'is what you find wherever a community has its own reasons for refusing, and '
             'those reasons are shared, which is exactly why the low coverage is '
             'concentrated rather than scattered. The city average is unchanged and the '
             'fifty thousand are an unprotected population, because they go to the same '
             'schools and the same meetings and they mostly meet each other. An epidemic can '
             'run its entire course inside that subgroup while the city figure stays '
             'reassuring, and if you look at the measles outbreaks of the last twenty years, '
             'almost every one of them has this shape. So here is my complaint, and notice '
             'that it is not that anybody is lying. The average is correctly calculated and '
             'correctly published, and the quantity that predicts an outbreak is the lowest '
             'coverage in any group that mixes mainly with itself. Publish that instead, or '
             'publish both, and accept that the map will look worse than the headline did. '
             'That is a trade I would make every time.')],
 'items': [('What does the speaker want to show?',
            ('That the figure is miscalculated',
             'That a true number can be the least useful number available',
             'That vaccination does not work',
             'That cities are unsafe'),
            1,
            'She opens with exactly that claim and spends the talk on it.'),
           ('Why is the low coverage concentrated rather than scattered?',
            ('Because of where clinics are',
             'Because the reasons for refusing are shared',
             'Because of income',
             'She does not say'),
            1,
            'Shared reasons produce a cluster, which is the step her argument needs.'),
           ('What does she say about the measles outbreaks of the last twenty years?',
            ('They had no pattern',
             'Almost every one has this shape',
             'They occurred in unvaccinated countries',
             'They were too small to study'),
            1,
            'She uses them as evidence that the pattern is not hypothetical.'),
           ('What is her complaint NOT?',
            ('That the average predicts badly',
             'That anybody is lying',
             'That the distribution is unpublished',
             'That the headline is reassuring'),
            1,
            'She says explicitly that the average is correctly calculated and correctly '
            'published.'),
           ('What does she accept about her own recommendation?',
            ('It is expensive',
             'The map will look worse than the headline did',
             'It cannot be calculated',
             'It will be unpopular with clinicians'),
            1,
            'That is the cost she names at the end.')]}
UNIT['w4'] = {'sub': 'Why outbreaks end',
 'skill': ('Cause and mechanism: because, so that, which is why',
           ['A mechanism sentence says what the cause does, not only that it causes: each '
            'immune person removes an opportunity, so the average falls.',
            'Which is why attaches a consequence to a whole clause, and takes a comma before '
            'it.',
            'Keep the chain in order. Cause, what it does, result.']),
 'guided': [('You want to give the mechanism behind the fall.',
             ['each immune',
              'person',
              'removes',
              'an opportunity',
              'so',
              'the',
              'average',
              'number',
              'of',
              'infections',
              'falls'],
             'Each immune person removes an opportunity, so the average number of infections '
             'falls.'),
            ('You want to attach a consequence to the whole claim.',
             ['measles',
              'needs',
              'ninety-two',
              'per cent',
              'which is why',
              'it',
              'returns',
              'first',
              'when',
              'coverage',
              'slips'],
             'Measles needs ninety-two per cent, which is why it returns first when coverage '
             'slips.'),
            ('You want to state a cause with because.',
             ['the subgroup',
              'behaves',
              'as',
              'an unprotected',
              'population',
              'because',
              'its members',
              'mostly',
              'meet',
              'each other'],
             'The subgroup behaves as an unprotected population because its members mostly '
             'meet each other.')],
 'exam': [('You want to give a mechanism and a result.',
           ['immunity',
            'removes',
            'opportunities',
            'for',
            'transmission',
            'so',
            'the epidemic',
            'shrinks',
            'before',
            'everybody',
            'is infected'],
           'Immunity removes opportunities for transmission, so the epidemic shrinks before '
           'everybody is infected.'),
          ('You want to attach a consequence to a whole clause.',
           ['contact',
            'is',
            'clustered',
            'which is why',
            'an average',
            'predicts',
            'an outbreak',
            'so',
            'badly',
            'in',
            'practice'],
           'Contact is clustered, which is why an average predicts an outbreak so badly in '
           'practice.'),
          ('You want a purpose rather than a cause.',
           ['coverage',
            'is',
            'published',
            'so that',
            'agencies',
            'can',
            'compare',
            'one',
            'city',
            'with',
            'another'],
           'Coverage is published so that agencies can compare one city with another.'),
          ('You want to state the cause of the decline.',
           ['cases',
            'declined',
            'because',
            'the ratio',
            'had',
            'crossed',
            'its threshold',
            'and not',
            'because',
            'infections',
            'stopped'],
           'Cases declined because the ratio had crossed its threshold, and not because '
           'infections stopped.'),
          ('You want to give a mechanism for the saturation.',
           ['the ratio',
            'keeps',
            'falling',
            'so',
            'the outbreak',
            'ends',
            'while',
            'many',
            'people',
            'remain',
            'susceptible'],
           'The ratio keeps falling, so the outbreak ends while many people remain '
           'susceptible.')]}
UNIT['w5'] = {'sub': 'Why outbreaks end',
 'prof': 'Dr Iwasaki',
 'question': 'A health agency publishes one vaccination coverage figure for each city. A '
             'researcher argues it should publish coverage by small district instead, which '
             'would show some districts far below the threshold. The agency replies that '
             'district figures are noisy and would alarm people. Who is right?',
 'posts': [('Priya',
            'w',
            'The researcher. A number that cannot predict the thing it is collected to '
            'predict is not worth publishing, and alarming people about a real risk is '
            'called informing them.'),
           ('Tomas',
            'm',
            'The agency has a point that nobody here is taking seriously. District figures '
            'with small populations move by ten points on a handful of births, and a map '
            'that lights up at random will be used to attack the programme by people who '
            'want it stopped.')],
 'skill': ('A question where both sides are partly right',
           ['Priya argues from what the statistic is for; Tomas from what a noisy statistic '
            'does once it is public.',
            'The second passage gives you the reason the average fails, and it does not say '
            'the remedy is costless.',
            'A strong answer separates the unit of publication from the question of noise, '
            'because those are two different problems.']),
 'starters': ['Tomas is right that…, although that is an argument for… and not for…',
              'The distinction worth drawing is between… and…',
              'What the second passage actually requires is…',
              'So the agency should…, which meets…'],
 'model': ['Tomas is right about the noise and wrong that it settles anything, because '
           'small-area variation is an argument for a better estimate and not for a worse '
           'question. A district figure based on four hundred children is unstable, which is '
           'a reason to pool three years of births or to publish a range, and none of that '
           'returns us to the city average, which is the only option his objection actually '
           'defends.',
           'Priya has the stronger case and states it too simply. The second passage does '
           'not say that the average is wrong; it says the quantity that predicts an '
           'outbreak is the lowest coverage in any group that mixes mainly with itself, and '
           'a district is only a rough proxy for such a group, since a school or a '
           'congregation can draw from four districts at once.',
           'So the agency should publish by district with the uncertainty attached, keep the '
           'city figure beside it, and say in one line what each is for. What it gives up is '
           'the simplicity of one headline number, and that cost is real, because a map with '
           'error bars will be misread by somebody. A map with error bars is still a map, '
           'and the alternative is a headline with no map at all. It is smaller than the '
           'cost of publishing, year after year, the one number least likely to tell anybody '
           'where the next epidemic will start.'],
 'model_words': 236}
UNIT['sp'] = list(UNIT['sp']) + [{'sub': 'Why outbreaks end',
  'focus': 'giving a mechanism rather than a correlation',
  'skill': ('Each immune person removes an opportunity, so the average falls',
            ['Say what the cause does before you say what follows. The middle step is the '
             'mechanism.',
             'Keep the stress on the verb in the middle clause, because that is the step a '
             'listener needs.',
             'A short pause before so marks the result as separate.']),
  'repeat': ['The average number of infections falls.',
             'Each immune person removes an opportunity.',
             'Immunity removes opportunities, so the epidemic shrinks.',
             'The ratio crossed one, so cases began to fall.',
             'A third of the population is never infected at all.',
             'Measles needs ninety-two per cent, which is why it returns first.',
             'Contact is clustered by household and by school, which is why an average '
             'predicts an outbreak so badly.'],
  'theme': 'explaining why something stopped',
  'qs': ['Tell me about something that stopped before you expected it to. Why did it stop?',
         'Some people say that if a problem is getting smaller it has been solved. How far '
         'would you agree?',
         'How would you explain to a friend why not everybody has to be vaccinated?',
         'Finally, describe a number you have seen quoted that you think is misleading.'],
  'model': [(2,
             'I would want to separate two things there. Getting smaller can mean the cause '
             'has gone, or it can mean one condition has tipped and the cause is untouched, '
             'and only the first of those is a solution.'),
            (3,
             'I would say that every immune person is one fewer route the infection can '
             'take, so once enough routes are closed the thing cannot keep going, even '
             'though plenty of people could still catch it.')],
  'selfcheck': ['I gave the middle step and not only the result',
                'I paused before so',
                'I used at least two of the unit’s field words']},
 {'sub': 'Why outbreaks end',
  'focus': 'criticising a number without saying it is wrong',
  'skill': ('The figure is accurate, and it is the wrong figure',
            ['Concede the accuracy in full and at normal speed. Hurrying it sounds like '
             'sarcasm.',
             'Then name the quantity you would want instead. The criticism is a replacement, '
             'not a denial.',
             'Avoid rising intonation on the concession: it turns the agreement into a '
             'question.']),
  'repeat': ['The average is correctly calculated.',
             'Nobody is lying about it.',
             'Publish the distribution, or publish both.',
             'It is accurate and it is close to useless.',
             'A true number can be the least useful number available.',
             'The quantity that matters is the lowest figure in any group.',
             'The map will look worse than the headline did, and that is the price of '
             'knowing where the next outbreak starts.'],
  'theme': 'a statistic that is true and unhelpful',
  'qs': ['Tell me about a statistic you were given that was true and did not help. What was '
         'missing?',
         'Some people think an average always tells you what you need to know. What do you '
         'think?',
         'Should an organisation publish a figure that might alarm people?',
         'Finally, describe a time when knowing more made a decision harder.'],
  'model': [(2,
             'Almost never, in my experience, and the reason is that an average answers a '
             'question about the whole and most decisions are about a part. If the parts '
             'differ a lot, the mean describes nobody in the group.'),
            (3,
             'I think it should, with the uncertainty attached and a line saying what the '
             'figure is for. Withholding it to prevent alarm assumes people cannot be told '
             'things, and that assumption does more damage over time.')],
  'selfcheck': ['I conceded the accuracy at full length',
                'I named the number I would want instead',
                'I kept the concession on a falling tone']}]
