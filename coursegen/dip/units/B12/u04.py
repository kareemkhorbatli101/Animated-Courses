# -*- coding: utf-8 -*-
import figs

U = dict(
num=4,
title='An Evening in the Diaspora Hall',
gram='reporting verbs: claim, confirm, deny, explain',
ai='reaching a community in two languages',
strap='CEFR B1 · Grammar: reporting verbs: claim, confirm, deny, explain · '
      'AI: reaching a community in two languages',
cando=['report what others said with accurate reporting verbs',
       'describe how a mission communicates with a community abroad',
       'check a translated announcement before it is sent',
       'say why two language versions must be checked against each other',
       'write a six-line community announcement'],

hero=('ONE ANNOUNCEMENT, TWO LANGUAGES, THREE HUNDRED TELEPHONE CALLS',
      ['The English said that registration was available from June.',
       'The other version said that registration was required by June.'],
      [(720, 'purple', 'long'), (720, 'grey', 'short'), (720, 'teal', 'long')]),
hero_cap='A community hall on a Saturday evening, with more people than chairs.',

warm=['Who speaks for a community abroad, and who chose them?',
      'What is the difference between available and required?',
      'How would you check a translation of your own announcement?'],

read=[
 'About forty thousand nationals of our country live in the host state. Most arrived in two '
 'periods, twenty years apart, and the two groups do not always agree about anything, '
 'including who speaks for them.',
 'The Mission meets them through a dozen associations, three places of worship, two '
 'hometown societies and one very active mailing list. None of these bodies represents '
 'everybody, and treating any of them as the community is the first mistake a new officer '
 'makes.',
 'Communication happens in two languages. The older group reads our language comfortably. '
 'The younger generation, born here, often reads the host language far better. An '
 'announcement that exists in only one version reaches about half the people it concerns.',
 'In May the Mission announced a change in consular registration. The announcement was '
 'drafted in English, then produced in both languages with help, in four minutes. Both '
 'versions were fluent and neither contained an error of fact.',
 'The English said that registration would be available from June. The other version used '
 'a word that readers understood as required. Within two days the Mission had taken three '
 'hundred telephone calls from people who believed they had six weeks to act.'],

dp1=('Why versions are checked against each other', 'Communication practice commonly '
     'requires that parallel language versions of a public notice be compared clause by '
     'clause by a speaker of each language, because a difference in modality is rarely '
     'visible to a reader of only one version.',
     'Source: reported public communication practice, 2025–2026.'),

c_a=[('How many nationals live in the host state?', 'about forty thousand'),
     ('How do the two groups differ?', 'they arrived twenty years apart and do not always agree'),
     ('What is the first mistake a new officer makes?', 'treating one association as the community'),
     ('Who reads the host language better?', 'the younger generation, born there'),
     ('What did the English version say?', 'that registration would be available from June'),
     ('What did the other version say?', 'that it was required')],

c_b=[('All forty thousand arrived at the same time.', 'F'),
     ('One association represents everybody.', 'F'),
     ('An announcement in one language reaches about half.', 'T'),
     ('Both versions contained errors of fact.', 'F'),
     ('Three hundred people telephoned.', 'T'),
     ('Available and required mean the same.', 'F')],

c_c=[('The Mission ____________ that registration would be available from June.', 'explained'),
     ('The association ____________ that nobody had been told.', 'claimed'),
     ('The consul ____________ that the change was optional.', 'confirmed'),
     ('The Mission ____________ that it had set a deadline.', 'denied'),
     ('He ____________ that the two versions differed.', 'admitted'),
     ('She ____________ us that the hall would be full.', 'warned')],

c_d=[('Claim suggests the speaker ( may not be right / is certainly right ).', ['may not be right', 'is certainly right'], 0),
     ('Confirm suggests ( something already said is true / a new fact ).',
      ['something already said is true', 'a new fact'], 0),
     ('An announcement in one language reaches ( half the people / everybody ).',
      ['half the people', 'everybody'], 0),
     ('The difference between the versions was ( modality / a fact ).',
      ['modality', 'a fact'], 0),
     ('The two arrival groups ( do not always agree / always agree ).',
      ['do not always agree', 'always agree'], 0)],

c_e=('Which reporting verb? Put each sentence in the right column.',
     [('He said it was true, and he may be wrong.', 'claimed'),
      ('She said that what we had heard was correct.', 'confirmed'),
      ('He said that it had not happened.', 'denied'),
      ('She gave the reasons for the change.', 'explained'),
      ('He said it had happened and he was sorry.', 'admitted'),
      ('She told us what might go wrong.', 'warned')],
     ['claimed', 'confirmed', 'denied', 'explained', 'admitted', 'warned']),

v_fig_title='A COMMUNITY AND ITS CHANNELS',
v_fig=[('people', 'a community leader'), ('door', 'a community hall'), ('doc', 'a mailing list'),
       ('chart', 'a registration drive'), ('clock', 'a town meeting'), ('key', 'a consular outreach')],
v_fig_cap='Six words for the work of reaching forty thousand people who did not ask to be reached.',

vocab=[
 ('a diaspora', 'a population living outside the country it comes from'),
 ('a community hall', 'a building where a local group meets'),
 ('an association register', 'the official list of registered community organisations'),
 ('a volunteer', 'a person who gives time without payment'),
 ('a cultural evening', 'an event presenting music, food or literature of a country'),
 ('a mother tongue class', 'a class teaching children the language of their parents'),
 ('a second generation', 'the children of those who first arrived'),
 ('a remittance', 'money sent home by a person working abroad'),
 ('a community leader', 'a person recognised by part of a community as speaking for it'),
 ('a mailing list', 'the list of addresses to which announcements are sent'),
 ('a town meeting', 'an open meeting at which anybody present may speak'),
 ('a translation volunteer', 'a community member who translates without charge'),
 ('a consular outreach', 'a visit by consular staff to serve people away from the office'),
 ('a registration drive', 'an organised effort to get people to register'),
 ('a youth group', 'an organised group of young members of a community'),
 ('a women’s association', 'an organisation of women within a community'),
 ('a place of worship', 'a building used for religious observance'),
 ('a hometown association', 'a group of people from the same place at home'),
 ('an elder', 'an older member whose view carries weight in a community'),
 ('a grievance meeting', 'a meeting called to hear complaints')],

v_a=[('A population living outside its country of origin is a ____________.', 'diaspora'),
     ('Money sent home by a worker abroad is a ____________.', 'remittance'),
     ('An open meeting where anybody may speak is a ____________ meeting.', 'town'),
     ('A visit by consular staff away from the office is a consular ____________.', 'outreach'),
     ('A group of people from the same place at home is a ____________ association.', 'hometown'),
     ('A class teaching children their parents’ language is a ____________ tongue class.', 'mother'),
     ('An organised effort to get people registered is a registration ____________.', 'drive'),
     ('An older member whose view carries weight is an ____________.', 'elder')],

v_b=[('A community leader is a person recognised by part of a community', 'as speaking for it.'),
     ('A translation volunteer is a community member', 'who translates without charge.'),
     ('An association register is the official list', 'of registered community organisations.'),
     ('A second generation is the children', 'of those who first arrived.'),
     ('A grievance meeting is a meeting called', 'to hear complaints.')],

g_title='Grammar: reporting verbs: claim, confirm, deny, explain',
g_rule=['Reporting verbs carry judgement: said is neutral, claimed is not.',
        'claim = says it is true, and we do not vouch for it.',
        'confirm = says that something already stated is true. deny = says it is not so.',
        'explain, admit, warn, insist: each adds a different colour. Choose deliberately.'],
g_fig=('NEUTRAL, AND LESS USEFUL',
       ['He said nobody had been told.',
        'She said the change was optional.',
        'He said it had not happened.',
        'She said why the rule had changed.'],
       'ACCURATE',
       ['He claimed nobody had been told.',
        'She confirmed that the change was optional.',
        'He denied that it had happened.',
        'She explained why the rule had changed.'],
       'four reports that hide the writer’s judgement',
       'the same four, with the judgement visible'),
g_fig_cap='Choosing a reporting verb is taking a position. Take it on purpose.',

g_a=[('He ____________ that nobody had been told. (claim)', 'claimed'),
     ('She ____________ that the change was optional. (confirm)', 'confirmed'),
     ('The Mission ____________ that it had set a deadline. (deny)', 'denied'),
     ('She ____________ why the rule had changed. (explain)', 'explained'),
     ('He ____________ that the two versions differed. (admit)', 'admitted'),
     ('The association ____________ that the hall would be full. (warn)', 'warned'),
     ('They ____________ that the notice had been posted. (insist)', 'insisted'),
     ('He ____________ that he had not read the second version. (acknowledge)', 'acknowledged'),
     ('She ____________ that forty thousand people live here. (state)', 'stated')],

g_b=[('He ( confirmed / claimed ) nobody had been told — we are not sure.', ['confirmed', 'claimed'], 1),
     ('She ( confirmed / denied ) that the change was optional — it is.',
      ['confirmed', 'denied'], 0),
     ('He ( denied / admitted ) that it had happened — it had not.',
      ['denied', 'admitted'], 0),
     ('She ( explained / claimed ) why the rule had changed.',
      ['explained', 'claimed'], 0),
     ('He ( admitted / insisted ) the versions differed — he was sorry.',
      ['admitted', 'insisted'], 0),
     ('They ( insisted / explained ) the notice had been posted — repeatedly.',
      ['insisted', 'explained'], 0)],

d1=dict(
 title='Available, or required?',
 fig=(['Three hundred calls in two days.', 'About what?'],
      ['A deadline we never set.', 'In a version we never read.']),
 cap='Ziad Mikhail and Layla Sayegh, after the announcement went out.',
 lines=[('Layla', 'Three hundred calls in two days.'),
        ('Ziad', 'Saying what?'),
        ('Layla', 'Asking what happens if they miss the June deadline.'),
        ('Ziad', 'There is no deadline. Registration is available from June.'),
        ('Layla', 'In English. The other version says required.'),
        ('Ziad', 'That is one word.'),
        ('Layla', 'It is one word in a notice read by forty thousand people.'),
        ('Ziad', 'Who read the second version before it went out?'),
        ('Layla', 'Nobody who reads that language and also read the English.'),
        ('Ziad', 'So both versions were read, and never against each other.'),
        ('Layla', 'That is exactly what happened. It is the commonest failure there is.'),
        ('Ziad', 'Then the check is not reading. The check is comparing.')],
 a=[('How many calls came in two days?', 'three hundred'),
    ('What were people asking about?', 'a June deadline'),
    ('What does the English version say?', 'that registration is available from June'),
    ('What does the other version say?', 'required'),
    ('What is the check that was missing?', 'comparing the two versions against each other')],
 b=[('There is no ____________.', 'deadline'),
    ('It is one word in a notice read by forty ____________ people.', 'thousand'),
    ('Both versions were read, and never ____________ each other.', 'against'),
    ('The check is ____________.', 'comparing')]),

d2=dict(
 title='Two fluent versions, one meaning each',
 fig=(['Both versions are fluent.', 'And both are wrong?'],
      ['Neither is wrong.', 'They simply do not say the same thing.']),
 cap='Layla and Rim Haddad, comparing the two texts line by line.',
 lines=[('Rim', 'I have read both versions three times. Neither is wrong.'),
        ('Layla', 'Then why did three hundred people telephone?'),
        ('Rim', 'Because they do not say the same thing, and both are correct in themselves.'),
        ('Layla', 'The difference is one modal.'),
        ('Rim', 'Which in the second language is carried by a verb form, not by a word.'),
        ('Layla', 'So a translator reading only the second version would see nothing wrong.'),
        ('Rim', 'Nothing at all. It is a good sentence. It is the wrong sentence.'),
        ('Layla', 'Then the only check is a person who reads both and compares the clauses.'),
        ('Rim', 'Clause by clause, and specifically looking at obligation, permission and time.'),
        ('Layla', 'That takes twenty minutes for a notice of this length.'),
        ('Rim', 'Against three hundred telephone calls and two days.'),
        ('Layla', 'And when the second language is one that nobody at the Mission reads?')],
 unresolved=True,
 a=[('How often did Rim read both versions?', 'three times'),
    ('Is either version wrong?', 'no, neither is wrong in itself'),
    ('What carries the difference?', 'a verb form in the second language'),
    ('What must a checker look at specifically?', 'obligation, permission and time'),
    ('How long does the check take?', 'about twenty minutes')],
 b=[('They do not say the same ____________.', 'thing'),
    ('It is a good sentence. It is the ____________ sentence.', 'wrong'),
    ('Clause by ____________.', 'clause'),
    ('Obligation, permission and ____________.', 'time')]),

speak=[('Choose the verb',
        ['Report eight things people have told you, choosing the reporting verb carefully.',
         'Your partner says what each verb implies about your own view.',
         'Change four of them to a different verb and explain the shift.']),
       ('Two versions',
        ['Write one short announcement aloud, then say it differently.',
         'Your partner finds the difference in obligation or time.',
         'Agree a single version and say it once more.']),
       ('Who speaks for whom?',
        ['Name four groups you deal with and who speaks for each.',
         'Say who chose that person.',
         'Decide which group you would reach differently.'])],

ext_title='A community is not an organisation, and two fluent versions are not one announcement',
ext_fig=figs.datatable('REACHING FORTY THOUSAND PEOPLE',
                       ['Channel', 'Reaches', 'Who is missed'],
                       [['the mailing list', '4,100', 'anybody who never joined'],
                        ['the associations', 'about 9,000', 'the unaffiliated'],
                        ['places of worship', 'about 12,000', 'the non-observant'],
                        ['the local press', 'unknown', 'non-readers of that paper'],
                        ['word of mouth', 'most, eventually', 'the isolated'],
                        ['all channels together', 'perhaps 30,000', 'about 10,000']]),
ext_fig_cap='Six channels, none of which reaches everybody, and one group that no channel reaches at all.',
ext=[
 'A diaspora is not an organisation. It is forty thousand people who have in common a '
 'country and very little else. The associations, the hometown societies and the mailing '
 'lists are real and useful, and none of them speaks for everybody.',
 'Reaching people therefore means several channels at once, and accepting that the people '
 'hardest to reach are often the ones with most need of a consulate: the isolated, the '
 'elderly, the ones who never joined anything and the ones who stopped coming.',
 'It also means two languages. The first generation reads one; their children often read '
 'the other far better. A single-language notice is not a notice to half the community; it '
 'is an invitation to be told later that nobody was informed.',
 'Producing both versions is now quick and the quality is high. The risk is not bad '
 'translation. It is two good translations that do not say the same thing, because '
 'obligation, permission and time are carried differently in different languages.',
 'The check is not reading each version; both will read well. The check is comparing them '
 'clause by clause, with somebody who reads both, looking specifically for must, may, by '
 'and from. Twenty minutes, against three hundred telephone calls.'],

dp2=('Compare, do not just read', 'Translation quality practice commonly distinguishes '
     'reading a target text for fluency from comparing source and target for equivalence, '
     'and treats modality and time expressions as the categories most often shifted.',
     'Source: reported translation practice, 2025–2026.'),

e_a=[('What is a diaspora, in this reading?', 'forty thousand people with a country in common and little else'),
     ('Who is hardest to reach?', 'the isolated, the elderly and those who never joined anything'),
     ('Why are two languages needed?', 'the generations read different languages best'),
     ('What is the real translation risk?', 'two good versions that do not say the same thing'),
     ('What should a checker look for?', 'must, may, by and from')],
e_b=[('A diaspora is an organisation.', 'F'),
     ('One association can speak for everybody.', 'F'),
     ('The hardest to reach often need most.', 'T'),
     ('The risk is poor translation quality.', 'F'),
     ('Modality is often shifted in translation.', 'T'),
     ('Reading each version separately is enough.', 'F')],

w_model='Purpose: so that every national in the host state learns, in the language they read '
        'best, that registration is open and voluntary. Scope: the registration change of 1 '
        'June; passport procedures are unchanged and are not mentioned. Inputs: the '
        'instruction from the capital of 12 May. Criteria: 6 lines, in both languages, with '
        'the two versions compared clause by clause for obligation, permission and time. '
        'Done: both versions, compared and signed off, by 20 May. Fallback: where no '
        'comparer is available, only one language version is issued and the reason is '
        'recorded.',
w_fig=figs.spec_card('SIX LINES IN TWO LANGUAGES',
                     [('Purpose', 'everybody learns, in the language they read best'),
                      ('Scope', 'the registration change of 1 June'),
                      ('Inputs', 'the capital’s instruction of 12 May'),
                      ('Criteria', '6 lines, both versions compared clause by clause'),
                      ('Done', 'both versions signed off by 20 May'),
                      ('Fallback', 'no comparer: issue one version and record why')]),
w_fig_cap='The comparison is the deliverable. The translation is only the raw material.',
w_task='Write a six-line announcement for a community you serve.',
w_steps=['Line 1: what has changed, in one sentence.',
         'Line 2: who it applies to, and who it does not apply to.',
         'Line 3: whether it is required or available, using one unambiguous word.',
         'Line 4: the dates, written in full.',
         'Line 5: what a person must do, as a numbered action.',
         'Line 6: where to ask a question, with a name and a number.'],
w_bank=['From 1 June the Mission will offer … .',
        'This applies to … . It does not apply to … .',
        'Registration is voluntary. There is no deadline.',
        'The service opens on Monday 1 June 2026.',
        'If you have a question, telephone … , who answers in both languages.'],
w_check=['Does line 3 use one word, and the same word in both versions?',
         'Are the dates written in full, not in figures only?',
         'Does line 2 say who is not affected?',
         'Is a person named in line 6?'],

t_title='Reaching a community in two languages',
t_fig=figs.split('TWO VERSIONS OF A NOTICE',
                 'Produce both versions',
                 ['draft once, in one language',
                  'produce the second version at once',
                  'keep the sentence order identical',
                  'number the clauses in both'],
                 'Then compare them',
                 ['is obligation the same in both',
                  'is permission the same in both',
                  'are the dates and tenses the same',
                  'does anything appear in one and not the other']),
t_fig_cap='Producing is four minutes. Comparing is twenty, and it is the only part that protects you.',
t_body=[
 'Produce both versions together and keep the clause order identical. A notice written in '
 'the same order in both languages can be compared line by line in twenty minutes by '
 'somebody who reads both, which is the only check that works.',
 'Ask specifically for the modality to be preserved, and say which word you mean. If the '
 'notice says available, it must not become required. If it says may, it must not become '
 'must. State this in the instruction, because it is the thing most often lost.',
 'Then have a person compare the clauses, not read the translation. A good translation '
 'reads perfectly and may still say something else, and a reader of one version alone will '
 'never see it. Twenty minutes, every time, before anything is posted.'],
t_say=[('Fix the order: ', 'Keep the clause order identical in both versions.'),
       ('Protect the modality: ', 'Available must not become required anywhere.'),
       ('Compare, do not read: ', 'Rim, compare clause 3 in both and tell me if the obligation matches.')],
t_bound='A translation system produces a fluent target text, not a guarantee of equivalence, '
        'and it will not flag that an obligation has shifted. A reader of only one version '
        'has no way of noticing, because what they are reading is correct.',
t_a=[('Keep the clause ____________ identical.', 'order'),
     ('Available must not become ____________.', 'required'),
     ('Compare clause three and tell me if the ____________ matches.', 'obligation'),
     ('It produces a fluent ____________ text.', 'target'),
     ('It will not flag that an obligation has ____________.', 'shifted'),
     ('What they are reading is ____________.', 'correct')],
t_b_rubric='Say what must be checked in each pair of clauses.',
t_b=[('Registration is available from June.', 'obligation: available must not become required'),
     ('You may bring a copy.', 'permission: may must not become must'),
     ('The service opens on 1 June.', 'time: the date and the preposition must match'),
     ('This does not apply to children.', 'scope: the exclusion must appear in both versions')],

case=dict(
 title='The Decision Room · One word, three hundred telephone calls',
 brief=[
  'On 18 May the Mission issues a notice about consular registration in two languages. Both '
  'versions are produced in four minutes, both are fluent, and neither contains an error of '
  'fact. Each is read once, by a different person.',
  'The English version says that registration will be available from 1 June. The second '
  'version uses a construction that readers understand as required by 1 June. The '
  'difference is carried by a verb form rather than by a separate word.',
  'Within two days the Mission receives about three hundred telephone calls. Elderly '
  'callers in particular believe they must travel to the consulate before a deadline that '
  'does not exist. Two community associations issue their own clarifications, which differ '
  'from each other.'],
 exhibit=figs.datatable('THE TWO VERSIONS, CLAUSE BY CLAUSE',
                        ['Clause', 'Version A', 'Version B', 'Same?'],
                        [['what the service is', 'registration', 'registration', 'yes'],
                         ['who it applies to', 'all nationals', 'all nationals', 'yes'],
                         ['obligation', 'available', 'required', 'no'],
                         ['date', 'from 1 June', 'by 1 June', 'no'],
                         ['exclusions', 'none stated', 'none stated', 'yes'],
                         ['contact', 'given', 'given', 'yes']]),
 exhibit_cap='Four clauses match. The two that do not are obligation and time, which is the usual pair.',
 exhibit_note='Both versions were checked. Neither was compared with the other, which is a '
              'different activity and the only one that would have found this.',
 voices=[('Layla Sayegh', 'press and cultural officer',
          'Four minutes for both versions. By hand it was two days and we often did not bother.'),
         ('Rim Haddad', 'consular assistant',
          'And now we reach everybody, including the people we reach wrongly.'),
         ('Dr Suhair Kanaan', 'deputy head of mission',
          'The fault is not the translation. It is that we read two texts and compared none.')],
 steps=[('Find it', 'Which two clauses differed?'),
        ('Compare it', 'What did each version tell its readers to do?'),
        ('Infer it', 'Why did reading each version separately not catch it?'),
        ('Weigh it', 'Twenty minutes of comparison against three hundred calls.'),
        ('Decide', 'What must happen before a bilingual notice is issued?')],
 analysis=[('Find it. Which clauses differed?', 'obligation and time'),
           ('Compare it. What did version B tell readers?', 'that registration was required by 1 June'),
           ('Infer it. Why was it missed?', 'each version is correct read on its own'),
           ('Weigh it. What did it cost?', 'three hundred calls and two conflicting clarifications'),
           ('Decide. What must happen first?', 'a clause-by-clause comparison by somebody who reads both')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say how the two versions are produced.',
                 'Say what check is made, and by whom.',
                 'Say which categories are checked specifically.',
                 'Say what happens when no comparer is available.'],
 bank=['Both versions are produced together, with the clause order identical.',
       'A person who reads both compares them clause by clause before issue.',
       'Obligation, permission, dates and exclusions are checked specifically.',
       'Where nobody can compare, one version only is issued and the reason is recorded.'],
 outcome='The Mission issues a correction in both languages within forty-eight hours and '
         'telephones the two associations itself. From June every bilingual notice is '
         'produced with identical clause order and compared clause by clause by a person who '
         'reads both, looking first at obligation, permission, dates and exclusions. The '
         'comparison takes about twenty minutes and has caught two further shifts since.',
 outcome_q=[('How quickly was the correction issued?', 'within forty-eight hours'),
            ('Who else did the Mission telephone?', 'the two associations'),
            ('What is compared, and by whom?', 'clause by clause, by a person who reads both'),
            ('Which categories are checked first?', 'obligation, permission, dates and exclusions'),
            ('How many further shifts has it caught?', 'two')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Tell the community about the change',
 task=['The Mission had to inform forty thousand people of a change in registration.',
       'This is the instruction as it was given, and what went out.'],
 draft=['Tell the community about the change.',
        'Put it in both languages.',
        'Keep it clear and friendly.',
        'Use the usual channels.',
        'Make sure people understand what to do.',
        'Get it out quickly.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says who must act, by when, or how the versions are checked.',
 asked=['Both languages', 'The usual channels', 'People understand what to do'],
 back=['2 fluent versions', '1 shift in obligation', '300 telephone calls'],
 gap='Nobody said that the versions must be compared, or which words must not move.',
 back_cap='Two fluent versions, two different meanings, and three hundred telephone calls.',
 back_note='Make sure people understand what to do is the right objective and gives no '
           'instruction at all about how to find out whether they do.',
 diagnosis=[('“the community”', 'unscoped set'),
            ('“the usual channels”', 'unscoped set'),
            ('“clear and friendly”', 'unstated criterion'),
            ('“people understand what to do”', 'unstated criterion'),
            ('“put it in both languages”', 'missing condition'),
            ('“quickly”', 'missing condition')],
 rewrite='Rewrite it on the six lines so that the two versions cannot say different things.',
 scaffold=['why the announcement is being made and who must act',
           'which people it applies to and who is excluded',
           'which instruction it is drawn from',
           'how the two versions are produced and compared',
           'which channels are used and by when',
           'what to do when nobody can compare the versions'],
 bank=['Purpose: so that every national learns, in the language they read best, that …',
       'Scope: the change of … ; … procedures are unchanged and not mentioned',
       'Inputs: the instruction of … from the capital',
       'Criteria: … lines, identical clause order, compared clause by clause for obligation and time',
       'Done: both versions on … channels by … ',
       'Fallback: where nobody can compare, 1 version is issued and the reason recorded'],
 check=['Does it require a comparison, not just a translation?',
        'Are the categories to be checked named?',
        'Are the channels named?',
        'Does it say what is not changing?'],
 model=['so that every national learns, in the language they read best, that registration is voluntary',
        'the registration change of 1 June; passport procedures are unchanged and are not mentioned',
        'the instruction from the capital of 12 May',
        '6 lines, identical clause order in both versions, compared clause by clause for obligation, permission, dates and exclusions',
        'both versions on the 5 named channels by 20 May',
        'where nobody can compare the versions, 1 version only is issued and the reason recorded'],
 cost='1 shifted modal produced 300 telephone calls, 2 conflicting clarifications and 1 '
      'correction notice. The comparison that would have caught it takes 20 minutes.'),

feet=dict(
 title='On Your Feet · A hostile question at a community meeting',
 setting=[
  'You are at a community hall on a Saturday evening, standing at the front, explaining the '
  'registration change. A man in his fifties stands up and says that the Mission has never '
  'helped anybody in that hall and that nobody here believes a word of it.',
  'About a hundred and twenty people are watching. Some agree with him. Some are '
  'embarrassed. You cannot argue with him, you cannot ignore him, and you must not give a '
  'speech. You have about ninety seconds.'],
 ladder=[('You have never helped us', 'take the complaint seriously'),
         ('My brother waited eleven months', 'a specific case in a public room'),
         ('Tell them the truth for once', 'the turn aimed at the audience, not at you')],
 cap='Three turns in front of a hundred and twenty people, two of whom will repeat every word.',
 turns=[('Turn 1 · Man', 'The Mission has never helped anybody in this hall. Not one person.'),
        ('Turn 2 · Man', 'My brother waited eleven months for a document. Eleven months.'),
        ('Turn 3 · Man', 'Go on. Tell them the truth for once, in front of everybody.')],
 holds=['I am not going to tell you that is untrue, because I do not know your case.',
        'Eleven months is far too long, and I would want to know why.',
        'I cannot discuss your brother’s file in this room, and I would not want to.',
        'If you give me his reference after this meeting, I will find out what happened.',
        'What I can say in front of everybody is what the service is now and what it is not.',
        'And I will come back to this hall in three months and answer for whatever I find.'],
 redline='You must not discuss an individual case in public, you must not defend the Mission '
         'in general terms against a specific complaint, and you must not promise an '
         'outcome on a file you have not seen. Do not suggest that he is exaggerating.',
 score=['Did not deny the complaint without evidence.',
        'Named the delay as unacceptable without conceding fault on a file not seen.',
        'Refused to discuss the individual case in public, for the brother’s sake.',
        'Offered a concrete route after the meeting.',
        'Committed to returning, with a date.'],
 a=[('What do you not do with the complaint?', 'deny it without knowing the case'),
    ('How do you treat eleven months?', 'as far too long'),
    ('Why not discuss the file in the room?', 'for the brother’s sake and because it is confidential'),
    ('What do you offer after the meeting?', 'to find out what happened, given the reference'),
    ('What must you not promise?', 'an outcome on a file you have not seen'),
    ('What do you commit to?', 'returning to the hall in three months')]),

rev_fig=figs.split('A BILINGUAL NOTICE',
                   'What goes wrong',
                   ['available becomes required',
                    'from 1 June becomes by 1 June',
                    'may becomes must',
                    'an exclusion disappears'],
                   'What the check looks for',
                   ['obligation, in both versions',
                    'permission, in both versions',
                    'dates and prepositions',
                    'anything present in one only']),
rev_fig_cap='Four categories, checked clause by clause, in about twenty minutes.',
rev=dict(
 read=[('How many nationals live in the host state?',
        ['about forty thousand', 'about four thousand', 'three hundred', 'a million'], 0),
       ('What did the second version say?',
        ['that registration was required', 'that it was available',
         'that it was cancelled', 'nothing about registration'], 0),
       ('How long does a clause-by-clause comparison take?',
        ['about twenty minutes', 'two days', 'four minutes', 'an hour'], 0),
       ('Which categories are checked first?',
        ['obligation, permission, dates, exclusions', 'spelling', 'tone', 'length'], 0)],
 listen_text='Produce both versions together and keep the clause order identical. Ask for '
             'the modality to be preserved and say which word you mean. Then have a person '
             'compare the clauses, rather than read the translation.',
 listen=[('Keep the clause ____________ identical.', 'order'),
         ('Ask for the ____________ to be preserved.', 'modality'),
         ('Have a person ____________ the clauses.', 'compare'),
         ('Rather than ____________ the translation.', 'read')],
 speak=['Report eight statements using claim, confirm, deny and explain accurately.',
        'Then say one announcement two ways and let your partner find the shift.'],
 write='Write a six-line announcement for a community you serve.',
 vocab=[('A population living outside its country is a ____________.', 'diaspora'),
        ('Money sent home by a worker abroad is a ____________.', 'remittance'),
        ('A visit by consular staff away from the office is a consular ____________.', 'outreach'),
        ('An older member whose view carries weight is an ____________.', 'elder')],
 gram=[('He ____________ that nobody had been told. (claim)', 'claimed'),
       ('She ____________ that the change was optional. (confirm)', 'confirmed'),
       ('The Mission ____________ that it had set a deadline. (deny)', 'denied'),
       ('She ____________ why the rule had changed. (explain)', 'explained')]),

found=['Compare the two language versions of your next notice, clause by clause.',
       'List the channels your post uses and estimate who each one misses.',
       'Choose your reporting verbs deliberately in your next three reports.',
       'Find the people in your community who belong to no association at all.'],
end_line='Produce both versions together. Then compare the clauses, because reading them will not do it.',
end_next='Next: Universities and Scholarships')
