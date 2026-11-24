# -*- coding: utf-8 -*-
import figs

U = dict(
num=10,
title='The Day After: Who Did You Meet?',
gram='reported speech with say and tell',
ai='the record of who you met, and why it is worth keeping',
strap='CEFR A2 · Grammar: reported speech with say and tell · '
      'AI: the record of who you met, and why it is worth keeping',
cando=['report what somebody said using say and tell',
       'write a contact record that another officer can use',
       'explain why a contact in one person’s telephone is not a Mission contact',
       'say what should never be written in a record about a person',
       'write five lines of contact records after an event'],

hero=('THREE YEARS OF CONTACTS, AND ALL OF THEM IN ONE TELEPHONE',
      ['He told me he knew everybody, and he did.',
       'He said he would write it all down, and then his posting ended.'],
      [(720, 'blue', 'short'), (720, 'grey', 'short'), (720, 'teal', 'long')]),
hero_cap='An empty desk in the commercial section on the first Monday after a handover.',

warm=['Where do the contacts of your organisation actually live?',
      'What happens when the person who knows everybody leaves?',
      'What should never be written down about a person you have met?'],

read=[
 'An officer leaves a post after three or four years. On the last Friday the desk is '
 'cleared, the pass is returned, and everything that officer knew about who matters in the '
 'city leaves with them unless it was written down.',
 'Most of it is not written down. It lives in a telephone, in a memory, and in the habit of '
 'knowing which of two brothers to call. The successor arrives and begins again, and the '
 'city notices that the Mission has started again.',
 'A contact record is four lines. Who they are. Where we met them and when. What they can '
 'actually do. What was last promised or asked. Four lines, kept in one place, and the '
 'Mission has a memory instead of a series of individuals.',
 'Nour keeps her own notes and asks a system to turn them into records. It does this well: '
 'it reads two lines of rough notes and produces a clean, consistent entry with the name, '
 'the body, the date and the next step.',
 'It will also write whatever she wrote. If her note says that a man seemed unreliable, the '
 'record will say so in clean official English, in a file that his colleagues might one day '
 'read. The system improves the grammar of a judgement it cannot weigh.'],

dp1=('Why contact records are institutional', 'Services commonly require that contacts made '
     'in an official capacity be recorded in a system belonging to the service rather than '
     'in personal devices, so that a relationship survives the departure of the officer who '
     'began it.',
     'Source: reported practice in diplomatic administration, 2025–2026.'),

c_a=[('What happens on the last Friday of a posting?', 'the desk is cleared and the pass returned'),
     ('Where does most of the knowledge live?', 'in a telephone and in a memory'),
     ('What are the four lines of a contact record?', 'who they are, where and when, what they can do, what was promised'),
     ('What does the system do well?', 'turn rough notes into clean, consistent entries'),
     ('What will it also write?', 'whatever she wrote, including a judgement'),
     ('Who might read the file one day?', 'the person’s colleagues')],

c_b=[('Everything an officer knows is written down.', 'F'),
     ('A successor usually begins again.', 'T'),
     ('A contact record is four lines.', 'T'),
     ('The system invents the judgements.', 'F'),
     ('A record may be read by others later.', 'T'),
     ('The city does not notice a change of officer.', 'F')],

c_c=[('He ____________ me that he knew everybody.', 'told'),
     ('She ____________ that the meeting had gone well.', 'said'),
     ('He ____________ us he would write it down.', 'told'),
     ('They ____________ nothing about the date.', 'said'),
     ('She ____________ me to keep a record.', 'told'),
     ('He ____________ that he had met her twice.', 'said')],

c_d=[('Tell is followed by ( a person / that, directly ).', ['a person', 'that, directly'], 0),
     ('A contact in one telephone is ( a personal contact / a Mission contact ).',
      ['a personal contact', 'a Mission contact'], 0),
     ('A record should contain ( what they can do / what you think of them ).',
      ['what they can do', 'what you think of them'], 0),
     ('The system improves ( the grammar of a judgement / the judgement itself ).',
      ['the grammar of a judgement', 'the judgement itself'], 0),
     ('A record exists so that ( the Mission remembers / the officer is praised ).',
      ['the Mission remembers', 'the officer is praised'], 0)],

c_e=('Say or tell? Put each sentence in the right column.',
     [('He told me he knew everybody.', 'tell + person'),
      ('She said the meeting went well.', 'say + that'),
      ('They told us to keep records.', 'tell + person'),
      ('He said nothing about the date.', 'say + that'),
      ('She told him the truth.', 'tell + person'),
      ('He said he would write it down.', 'say + that')],
     ['say + that', 'tell + person']),

v_fig_title='THE MEMORY OF A MISSION',
v_fig=[('doc', 'a contact record'), ('people', 'a successor'), ('chart', 'institutional memory'),
       ('clock', 'a last contact date'), ('key', 'a retention period'), ('map', 'a tag')],
v_fig_cap='Six words for the difference between a Mission and a series of individuals.',

vocab=[
 ('a contact record', 'the written entry describing a person the Mission deals with'),
 ('a card file', 'a set of records kept in order, one card for each subject'),
 ('an entry', 'one record in a file or a list'),
 ('a next step', 'the action agreed or intended after a meeting'),
 ('institutional memory', 'what an organisation knows independently of any one person'),
 ('a successor', 'the officer who takes over a post from another'),
 ('consent', 'a person’s agreement that something may be done with their details'),
 ('a retention period', 'the length of time a record may be kept'),
 ('personal data', 'information that identifies a living person'),
 ('a legitimate purpose', 'a proper official reason for holding information'),
 ('a shared drive', 'a storage space that several officers may use'),
 ('a merge', 'the joining of two records about the same person'),
 ('a tag', 'a short label added to a record so that it can be found'),
 ('a search', 'the act of looking through records for something'),
 ('a last contact date', 'the date on which a person was last spoken to'),
 ('an owner', 'the officer responsible for keeping one record current'),
 ('a call note', 'the short written account of a telephone conversation'),
 ('an accuracy check', 'the act of confirming that a record is still correct'),
 ('a deletion', 'the removal of a record'),
 ('a dormant contact', 'a contact with whom there has been no exchange for a long time')],

v_a=[('The written entry describing a person is a contact ____________.', 'record'),
     ('What an organisation knows independently of any person is institutional ____________.', 'memory'),
     ('The officer who takes over a post is a ____________.', 'successor'),
     ('The length of time a record may be kept is a ____________ period.', 'retention'),
     ('The officer responsible for keeping a record current is the ____________.', 'owner'),
     ('A contact with no exchange for a long time is a ____________ contact.', 'dormant'),
     ('The joining of two records about one person is a ____________.', 'merge'),
     ('A short label added so a record can be found is a ____________.', 'tag')],

v_b=[('Consent is a person’s agreement that something may be done', 'with their details.'),
     ('A legitimate purpose is a proper official reason', 'for holding information.'),
     ('A call note is the short written account', 'of a telephone conversation.'),
     ('An accuracy check is the act of confirming', 'that a record is still correct.'),
     ('Personal data is information that identifies', 'a living person.')],

g_title='Grammar: reported speech with say and tell',
g_rule=['tell needs a person: He told me that … She told us to …',
        'say does not take a person directly: He said that … (not He said me)',
        'In reported speech the tense usually moves back: I know → he said he knew.',
        'tell + object + to + verb reports an instruction: She told him to write it down.'],
g_fig=('WRONG',
       ['He said me that he knew everybody.',
        'She told that the meeting went well.',
        'He said to write it down.',
        'They told to us the date.'],
       'RIGHT',
       ['He told me that he knew everybody.',
        'She said that the meeting went well.',
        'He told me to write it down.',
        'They told us the date.'],
       'four reports with say and tell exchanged',
       'the same four, each with the right verb'),
g_fig_cap='Tell takes a person. Say takes a that-clause. They are not interchangeable.',

g_a=[('He ____________ me that he knew everybody.', 'told'),
     ('She ____________ that the meeting had gone well.', 'said'),
     ('They ____________ us the date on Monday.', 'told'),
     ('He ____________ nothing about the agreement.', 'said'),
     ('She ____________ him to keep a record.', 'told'),
     ('He ____________ that he would write it down.', 'said'),
     ('The director ____________ us that he was leaving.', 'told'),
     ('Nobody ____________ anything about the change.', 'said'),
     ('Rim ____________ me which town it was.', 'told')],

g_b=[('He ( said me / told me ) that he knew everybody.', ['said me', 'told me'], 1),
     ('She ( said / told ) that the meeting went well.', ['said', 'told'], 0),
     ('They ( told us / said us ) the date.', ['told us', 'said us'], 0),
     ('She ( told him to / said him to ) keep a record.', ['told him to', 'said him to'], 0),
     ('He ( said / told ) nothing about it.', ['said', 'told'], 0),
     ('Rim ( told me / said me ) which town.', ['told me', 'said me'], 0)],

d1=dict(
 title='He said he would write it down',
 fig=(['He knew everybody in that ministry.', 'And now?'],
      ['Now we know nobody.', 'He said he would write it down.']),
 cap='Dr Suhair Kanaan and Nour, on the Monday after a handover.',
 lines=[('Dr Kanaan', 'Ziad’s predecessor knew everybody in the licensing department.'),
        ('Nour', 'And now?'),
        ('Dr Kanaan', 'Now we know nobody. We are starting again, in year four.'),
        ('Nour', 'Did he leave notes?'),
        ('Dr Kanaan', 'He told me he would write it all down in his last month.'),
        ('Nour', 'And he did not?'),
        ('Dr Kanaan', 'He wrote twelve lines. He had three years of contacts.'),
        ('Nour', 'Where were they?'),
        ('Dr Kanaan', 'In his telephone, which went home with him, as telephones do.'),
        ('Nour', 'So the Mission never had them at all.'),
        ('Dr Kanaan', 'The Mission had a man who had them. That is not the same thing.'),
        ('Nour', 'Four lines a person, as we go along.')],
 a=[('Who knew everybody in the licensing department?', 'Ziad’s predecessor'),
    ('What did he tell Dr Kanaan?', 'that he would write it all down'),
    ('How many lines did he leave?', 'twelve'),
    ('Where were the contacts?', 'in his telephone'),
    ('What does Nour propose?', 'four lines a person, as they go along')],
 b=[('He ____________ me he would write it down.', 'told'),
    ('We are starting ____________ , in year four.', 'again'),
    ('In his ____________ , which went home with him.', 'telephone'),
    ('That is not the ____________ thing.', 'same')]),

d2=dict(
 title='It wrote my opinion in better English',
 fig=(['My note said he seemed unreliable.', 'And the record?'],
      ['The record says it beautifully.', 'In a file his colleagues may read.']),
 cap='Nour and Layla Sayegh, reviewing a month of contact records.',
 lines=[('Layla', 'This record says that the official appeared unreliable.'),
        ('Nour', 'That is what my note said.'),
        ('Layla', 'Your note was three words on a telephone at midnight.'),
        ('Nour', 'And the record is a sentence in official English.'),
        ('Layla', 'In a file that may be read by six people, and in four years by your successor.'),
        ('Nour', 'It did not invent it. I wrote it.'),
        ('Layla', 'No. It gave your midnight guess the voice of a judgement.'),
        ('Nour', 'So what should the record say?'),
        ('Layla', 'What happened. He arrived late and did not bring the paper he promised.'),
        ('Nour', 'That is a fact, and the reader can judge it themselves.'),
        ('Layla', 'And when the fact itself is damaging to somebody who has done nothing wrong?')],
 unresolved=True,
 a=[('What does the record say?', 'that the official appeared unreliable'),
    ('What was the original note?', 'three words on a telephone at midnight'),
    ('Who may read the file?', 'six people, and a successor in four years'),
    ('What did the system do to the guess?', 'gave it the voice of a judgement'),
    ('What should the record say instead?', 'what happened: he arrived late without the paper')],
 b=[('It gave your midnight guess the ____________ of a judgement.', 'voice'),
    ('He arrived ____________ and did not bring the paper.', 'late'),
    ('The reader can ____________ it themselves.', 'judge'),
    ('That is a ____________ .', 'fact')]),

speak=[('Say and tell',
        ['Report eight things colleagues have said to you this week.',
         'Four with said and four with told.',
         'Your partner corrects any that use the wrong verb.']),
       ('Four lines a person',
        ['Describe four people you deal with at work, in four lines each.',
         'Line four must be what was last promised or asked.',
         'Your partner says which record they could act on.']),
       ('Fact or judgement',
        ['Say six things about people you have met.',
         'Your partner sorts them into facts and judgements.',
         'Rewrite each judgement as the fact that produced it.'])],

ext_title='A relationship that lives in one telephone is not a relationship the Mission has',
ext_fig=figs.datatable('THREE YEARS, ONE HANDOVER',
                       ['What existed', 'Where it was', 'Survived the handover?'],
                       [['200 contacts', 'a personal telephone', 'no'],
                        ['who to call in licensing', 'memory', 'no'],
                        ['12 lines of handover notes', 'the registry', 'yes'],
                        ['4 formal reports', 'the registry', 'yes'],
                        ['a 2-year approach to the foundation', 'memory', 'no'],
                        ['the Mission’s own contact file', 'it did not exist', '—']]),
ext_fig_cap='Two rows survived. The rows that mattered most were the ones in a person.',
ext=[
 'A mission has two kinds of knowledge. The first is written: reports, instructions, files. '
 'The second is personal: who answers the telephone, which brother to ask, who owes whom a '
 'favour. The second kind is more useful and it leaves the building every three years.',
 'A contact record is the cheapest fix in diplomacy. Four lines per person, written the day '
 'you meet them. Who they are. Where and when you met. What they can actually do. What was '
 'last promised or asked, by whom, and when.',
 'Turning rough notes into clean records is exactly the kind of work a system does well. '
 'Give it two scruffy lines and it returns a consistent entry with the name, the body, the '
 'date and the next step, in the same shape every time.',
 'But it will dress a judgement as neatly as a fact. If your note says somebody seemed '
 'unreliable, the record will say it in careful official English, in a file that other '
 'people will read for years. The system improved the sentence, not the evidence.',
 'So write facts, not verdicts. He arrived late and did not bring the paper. She answered '
 'the same day. A reader four years from now can weigh those. Nobody can weigh your opinion '
 'of a stranger formed at midnight on a Thursday.'],

dp2=('Records are read by people you did not expect', 'Records guidance commonly reminds '
     'officers that entries about individuals may be disclosed, inherited or read by '
     'colleagues years later, and should therefore record observable facts rather than '
     'personal assessments of character.',
     'Source: reported records practice, 2025–2026.'),

e_a=[('What are the two kinds of knowledge?', 'the written kind and the personal kind'),
     ('Which kind leaves the building?', 'the personal kind'),
     ('What are the four lines?', 'who, where and when, what they can do, what was last promised'),
     ('What does a system do well here?', 'turn rough notes into consistent entries'),
     ('What should a record contain?', 'facts, not verdicts')],
e_b=[('Written knowledge leaves with an officer.', 'F'),
     ('A contact record is cheap to keep.', 'T'),
     ('A system can weigh a judgement.', 'F'),
     ('Records may be read years later.', 'T'),
     ('He arrived late is a fact.', 'T'),
     ('Seemed unreliable is a fact.', 'F')],

w_model='Purpose: so that the Mission still knows these people when I am posted elsewhere. '
        'Scope: the 12 guests I spoke to at the reception of 17 March; people I did not '
        'speak to are not recorded. Inputs: my own notes of that evening. Criteria: 4 lines '
        'each: name and body, where and when we met, what they can actually decide, and '
        'what was last promised or asked. Done: 12 records in the Mission contact file, by '
        '20 March. Fallback: where I have only an impression and no fact, I record the fact '
        'that we met and nothing else.',
w_fig=figs.spec_card('FOUR LINES THAT OUTLIVE A POSTING',
                     [('Purpose', 'the Mission still knows them after I leave'),
                      ('Scope', 'the 12 guests I actually spoke to'),
                      ('Inputs', 'my own notes of that evening'),
                      ('Criteria', 'name and body, where and when, what they decide, last promise'),
                      ('Done', '12 records in the contact file by 20 March'),
                      ('Fallback', 'only an impression: record the meeting and nothing else')]),
w_fig_cap='The fallback line is what keeps a file honest for four years.',
w_task='Write five contact records of four lines each.',
w_steps=['Line 1: the name, the body and the exact role.',
         'Line 2: where and when you met, in one clause.',
         'Line 3: what that person can actually decide or arrange.',
         'Line 4: what was last promised or asked, by whom and when.',
         'Write facts in every line, and no assessment of character.'],
w_bank=['… , … , Licensing Section.',
        'Met at the national day reception, 17 March.',
        'Can approve a site licence up to … without reference upwards.',
        'I undertook to send … by … .',
        'Last contact: … .'],
w_check=['Is the role exact rather than approximate?',
         'Does line 3 say what they can decide, not who they know?',
         'Does line 4 name a person and a date?',
         'Is there any sentence a reader could not check?'],

t_title='The record of who you met, and why it is worth keeping',
t_fig=figs.split('NOTES INTO RECORDS',
                 'Let the system do this',
                 ['turn 2 rough lines into a clean entry',
                  'keep every record in the same shape',
                  'add tags so a record can be found',
                  'list contacts with no exchange for a year'],
                 'Keep this to yourself',
                 ['any judgement of character',
                  'anything you were told in confidence',
                  'what you guessed at midnight',
                  'what you have not checked']),
t_fig_cap='The left column is formatting, which is free. The right column is what you put in.',
t_body=[
 'Write two rough lines about each person while you still remember. Then give those lines '
 'to the system and ask for a four-line record in a fixed shape. It will produce something '
 'consistent, findable and far better formatted than anything written at midnight.',
 'Ask it also for the dull but valuable things: a tag for each record, and a list of '
 'contacts the Mission has not spoken to for a year. That list is the single most useful '
 'page a commercial or political section can have, and nobody ever writes it by hand.',
 'What you must not delegate is the content. The system will render a guess as a judgement '
 'in clean official English. Write what happened, not what you concluded, because the '
 'reader in four years has your sentence and not your evening.'],
t_say=[('Give it the facts: ', 'Turn these two lines into a record: name, body, role, next step.'),
       ('Ask for the dull list: ', 'List every contact with no exchange for 12 months.'),
       ('Keep the verdicts out: ', 'Record what he did, not what I thought of him.')],
t_bound='A system turning notes into records cannot tell a fact from an impression, and it '
        'will give both the same official voice. It does not know who will read the file, '
        'or that the person described may one day read it themselves.',
t_a=[('Turn these two lines into a ____________.', 'record'),
     ('List every contact with no exchange for twelve ____________.', 'months'),
     ('Record what he did, not what I ____________ of him.', 'thought'),
     ('It cannot tell a fact from an ____________.', 'impression'),
     ('It does not know who will ____________ the file.', 'read'),
     ('The reader in four years has your ____________.', 'sentence')],
t_b_rubric='Say whether each line belongs in a record, and why.',
t_b=[('Can approve a licence up to a stated value.', 'yes: it is a checkable fact about their role'),
     ('Seemed unreliable and rather vague.', 'no: it is a judgement of character'),
     ('Arrived forty minutes late without the paper.', 'yes: it is what happened'),
     ('Told me in confidence about a colleague.', 'no: it was said in confidence')],

case=dict(
 title='The Decision Room · The telephone that went home',
 brief=[
  'An officer in the commercial section leaves after three years. He knew the licensing '
  'department well and had spent two years building an approach to a foundation that funds '
  'scholarships. His handover note is twelve lines long.',
  'His contacts were in his personal telephone. The Mission has four reports, twelve lines '
  'of notes and no record of a single conversation. His successor begins in March and is '
  'treated, politely, as a stranger.',
  'In June the foundation announces a scholarship partnership with another mission. Nobody '
  'at this Mission knows whether the approach had been close, because the only person who '
  'knew is now three thousand kilometres away and has not answered two emails.'],
 exhibit=figs.datatable('WHAT THE MISSION KEPT',
                        ['Knowledge', 'Where it lived', 'Available in March?'],
                        [['formal reports', 'the registry', 'yes'],
                         ['handover note', 'the registry', '12 lines'],
                         ['200 contacts', 'a personal telephone', 'no'],
                         ['the foundation approach', 'memory', 'no'],
                         ['who decides in licensing', 'memory', 'no'],
                         ['contact file', 'did not exist', 'no']]),
 exhibit_cap='Everything the Mission kept was formal. Everything it lost was the part that moved.',
 exhibit_note='Nobody did anything wrong. There was no contact file, so there was nowhere '
              'for any of it to go, and twelve lines of handover is what people write when '
              'there is no shape to write into.',
 voices=[('Dr Suhair Kanaan', 'deputy head of mission',
          'We asked a man to remember a city for three years and then we let him take it home.'),
         ('Nour Ajami', 'third secretary',
          'Four lines a person takes two minutes. Nobody is going to write twelve pages in a last week.'),
         ('Layla Sayegh', 'press and cultural officer',
          'And nothing about character. A file that judges people will be read by the people in it.')],
 steps=[('Find it', 'What did the Mission lose?'),
        ('Compare it', 'What survived the handover and what did not?'),
        ('Infer it', 'Why were the handover notes only twelve lines?'),
        ('Weigh it', 'Two minutes per contact against a two-year approach.'),
        ('Decide', 'What must a contact record contain, and what must it never contain?')],
 analysis=[('Find it. What was lost?', 'two hundred contacts and a two-year approach'),
           ('Compare it. What survived?', 'four formal reports and twelve lines'),
           ('Infer it. Why only twelve lines?', 'there was no file and no shape to write into'),
           ('Weigh it. What does a record cost?', 'about two minutes per person'),
           ('Decide. What must a record never contain?', 'a judgement of character')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say where contacts made officially are kept.',
                 'Say what a record must contain, line by line.',
                 'Say what a record must never contain.',
                 'Say what happens in the last month of a posting.'],
 bank=['Contacts made in an official capacity are kept in the Mission contact file.',
       'Each record is 4 lines: name and body, where and when, what they decide, last exchange.',
       'No record contains an assessment of character or anything said in confidence.',
       'In the last month of a posting, the officer reviews every record they own.'],
 outcome='The Mission opens a contact file in April. Each record is four lines and takes '
         'about two minutes. Records hold facts only, and nothing said in confidence. In '
         'the last month of a posting an officer reviews every record they own and names a '
         'successor for each. The foundation is approached again in October by somebody who '
         'can see, in four lines, exactly where the last conversation stopped.',
 outcome_q=[('When did the Mission open the file?', 'in April'),
            ('How long does a record take?', 'about two minutes'),
            ('What may a record not hold?', 'a judgement of character or anything said in confidence'),
            ('What happens in an officer’s last month?', 'they review every record they own'),
            ('When was the foundation approached again?', 'in October')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Keep a record of your contacts',
 task=['A head of mission asked the whole Mission to start recording its contacts.',
       'This is the instruction that went round, and what existed three months later.'],
 draft=['Keep a record of your contacts.',
        'Write down the useful ones.',
        'Include the main details.',
        'Note anything interesting about them.',
        'Keep it somewhere sensible.',
        'Do it regularly.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and not one of them says which contacts, which details, or where the file is.',
 asked=['A record of contacts', 'The main details', 'Somewhere sensible'],
 back=['4 separate files', '2 of them personal', '31 entries judging character'],
 gap='Nobody said which contacts, which fields, where the file lives, or what may not be written.',
 back_cap='Four files in four places, two of them on personal devices, and thirty-one verdicts about people.',
 back_note='Anything interesting was read as an invitation to record impressions, which is '
           'exactly what officers remember and exactly what a file should not hold.',
 diagnosis=[('“your contacts”', 'unscoped set'),
            ('“the useful ones”', 'unstated criterion'),
            ('“the main details”', 'ambiguous referent'),
            ('“anything interesting”', 'unstated criterion'),
            ('“somewhere sensible”', 'ambiguous referent'),
            ('“regularly”', 'unscoped set')],
 rewrite='Rewrite it on the six lines so that one file exists and contains only facts.',
 scaffold=['why the Mission keeps contacts at all',
           'which contacts are recorded and which are not',
           'what each record is drawn from',
           'the four lines, and what may never appear',
           'where the file lives and when records are written',
           'what to do when there is only an impression'],
 bank=['Purpose: so that the Mission keeps a relationship when an officer leaves',
       'Scope: people met in an official capacity; private acquaintances excluded',
       'Inputs: the officer’s own notes, written the same day',
       'Criteria: 4 lines: name and body, where and when, what they decide, last exchange',
       'Done: records in the Mission contact file within … of meeting',
       'Fallback: where there is only an impression, record the meeting and nothing more'],
 check=['Does it say which contacts are recorded?',
        'Are the four lines specified?',
        'Does it name one place for the file?',
        'Does it forbid assessments of character?'],
 model=['so that the Mission keeps a relationship when the officer who built it leaves',
        'people met in an official capacity; private acquaintances are excluded',
        'the officer’s own notes, written on the same day as the meeting',
        '4 lines: name and body, where and when, what they can decide, last exchange; no character assessment',
        'records in the Mission contact file within 3 working days of meeting',
        'where there is only an impression, record the meeting and nothing more'],
 cost='3 months produced 4 files, 2 of them personal, and 31 entries that could not be kept. '
      '1 file of 4-line records would have taken each officer about 20 minutes a month.'),

feet=dict(
 title='On Your Feet · Your successor asks who matters here',
 setting=[
  'It is your last fortnight. Your successor has arrived early and has one hour with you '
  'before you leave for the airport. She asks the only question that matters: who actually '
  'matters in this city, and why.',
  'You have four hundred contacts in your head and ninety minutes of goodwill in hers. You '
  'must not give her a list of names, you must not pass on your opinions of people, and you '
  'must not pretend the relationships are hers automatically. You have about ninety seconds '
  'to answer the first question well.'],
 ladder=[('Who matters?', 'give structure, not a list'),
         ('What about him?', 'the question that invites an opinion'),
         ('Will they take my call?', 'the turn where you must be honest about inheritance')],
 cap='Three turns, and everything you say will be repeated by somebody who was not there.',
 turns=[('Turn 1 · Successor', 'So — who actually matters here, and why?'),
        ('Turn 2 · Successor', 'And what should I know about the licensing director? Between us.'),
        ('Turn 3 · Successor', 'If I telephone them next month, will they take the call?')],
 holds=['Three people matter for your work, and I will tell you what each can decide.',
        'Everything I am going to say is in the contact file, so you can check it.',
        'I will tell you what he has done, and you will form your own view.',
        'I would rather not pass on an opinion you cannot test for yourself.',
        'They will take the call because of the Mission, not because of me.',
        'I will write to three of them this week and say that you are taking over.'],
 redline='You must not pass on a judgement of character that your successor cannot check, '
         'you must not repeat anything said to you in confidence, and you must not suggest '
         'that a relationship is personal to you in a way that makes her dependent on your '
         'goodwill after you have gone.',
 score=['Answered with structure — who decides what — rather than a list of names.',
        'Pointed to the written file as the source, not to memory.',
        'Gave facts about behaviour instead of verdicts about character.',
        'Was honest that goodwill transfers to the Mission, not automatically to her.',
        'Committed to a concrete handover act with a date.'],
 a=[('What should the first answer give?', 'structure: who can decide what'),
    ('Where should the detail live?', 'in the contact file'),
    ('What do you give instead of a verdict?', 'facts about what the person has done'),
    ('What must you not repeat?', 'anything said to you in confidence'),
    ('Why will they take her call?', 'because of the Mission'),
    ('What do you commit to doing?', 'writing to three contacts to introduce her')]),

rev_fig=figs.split('A CONTACT RECORD',
                   'A record nobody can use',
                   ['Useful man, knows everyone.',
                    'Met him somewhere in the spring.',
                    'Seemed unreliable.',
                    'Worth keeping in touch with.'],
                   'A record anybody can use',
                   ['Licensing Section; approves site licences.',
                    'Met at the national day, 17 March.',
                    'Arrived late, without the paper promised.',
                    'I undertook to send the note by 24 March.']),
rev_fig_cap='Every line on the right can be checked by somebody who was not there.',
rev=dict(
 read=[('How many lines was the handover note?', ['twelve', 'four', 'two hundred', 'none'], 0),
       ('Where were the contacts kept?',
        ['in a personal telephone', 'in the registry', 'in a card file', 'in a report'], 0),
       ('What must a record never contain?',
        ['a judgement of character', 'a date', 'a role', 'a next step'], 0),
       ('How long does a four-line record take?',
        ['about two minutes', 'an hour', 'a day', 'a week'], 0)],
 listen_text='Write two rough lines while you remember. Ask for a four-line record in a '
             'fixed shape. Ask also for the list of contacts with no exchange for a year. '
             'But write facts, not verdicts, because the reader in four years has your sentence.',
 listen=[('Write two rough lines while you ____________.', 'remember'),
         ('Ask for a four-line record in a fixed ____________.', 'shape'),
         ('Write facts, not ____________.', 'verdicts'),
         ('The reader in four years has your ____________.', 'sentence')],
 speak=['Report eight things colleagues told you this week, using said and told correctly.',
        'Your partner turns each report back into the original words.'],
 write='Write five contact records of four lines each.',
 vocab=[('The written entry describing a person is a contact ____________.', 'record'),
        ('The officer who takes over a post is a ____________.', 'successor'),
        ('A contact with no exchange for a long time is a ____________ contact.', 'dormant'),
        ('The officer responsible for a record is the ____________.', 'owner')],
 gram=[('The director ____________ us that he was leaving.', 'told'),
       ('She ____________ that the meeting went well.', 'said'),
       ('They ____________ us the date.', 'told'),
       ('He ____________ nothing about it.', 'said')]),

found=['Write four-line records for the ten people you deal with most, this week.',
       'Check each line and remove anything a reader could not verify.',
       'Ask for a list of your contacts with no exchange for a year, and act on three.',
       'In your last month at a post, review every record you own and name a successor.'],
end_line='Four lines a person, written as facts. That is how a Mission remembers a city.',
end_next='Book 3: The Work of the Mission')
