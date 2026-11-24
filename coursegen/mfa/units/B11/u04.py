# -*- coding: utf-8 -*-
import figs

U = dict(
num=4, title='A First Draft, Not a Translation',
gram='articles: a, the and zero',
ai='machine translation as a first draft, not a translation',
strap='CEFR B1 · Grammar: articles · AI: a first draft, not a translation',
cando=['choose between a, the and no article correctly',
       'explain how an article changes what a sentence commits you to',
       'use a machine translation as a first draft and say so',
       'say which documents may never go out on a machine rendering',
       'name what a reviser is checking that a system cannot check'],
hero=('ONE WORD, AND IT WAS NOT A WORD',
      ['The Verenian text has no articles at all.',
       'The English draft chose one, and it chose the wrong one.'],
      [(730, 'orange', 'long'), (1390, 'blue', 'short'),
       (2050, 'teal', 'long'), (2690, 'purple', 'short')]),
hero_cap='Documentation, on the afternoon the draft came back from clearance.',

warm=['Does your first language use articles in the way English does?',
      'What is the difference between a committee and the committee?',
      'Which documents in your work must never be sent in a rough version?'],
read=[
 'Omar Nasri has translated Verenian correspondence for twenty-two years, and he is now the '
 'reviser rather than the translator. The drafts arrive from a system and he reads them '
 'against the source. He says the work has changed completely and his job has not changed at '
 'all.',
 'Verenian, like many languages, has no definite or indefinite article. A noun stands on its '
 'own, and whether it means one of several or the particular one is carried by the sentence '
 'around it, or by nothing at all. English cannot do this. English forces the writer to '
 'choose, on every single noun, and the choice is a commitment.',
 'In May a Verenian note proposed what the English draft called the establishment of the '
 'joint working group. Omar stopped at the second the. The Verenian text could equally mean a '
 'joint working group, which would be a new body to be set up, or the joint working group, '
 'which would be the one that already exists under the 2019 agreement.',
 'The difference is not a shade of meaning. If it is the existing group, Verenia is proposing '
 'to reopen a body with an agreed mandate and a chairman. If it is a new group, Verenia is '
 'proposing something that would have to be negotiated from the beginning. Those are two '
 'different diplomatic positions and the Verenian word is the same in both.',
 'The system had not guessed carelessly. It had chosen the reading that is more common in the '
 'Ministry’s files, which is the existing group, because that group is mentioned far more '
 'often. Omar sent the note back to the embassy’s own English text, asked which was meant, '
 'and was told it was the new one.'],
c_a=[('What is Omar Nasri’s role now?', 'reviser rather than translator'),
     ('What does Verenian lack?', 'definite and indefinite articles'),
     ('What does English force a writer to do?', 'choose an article on every noun'),
     ('What are the two possible readings?', 'a new joint working group, or the existing one from the 2019 agreement'),
     ('Why did the system choose "the"?', 'because the existing group is mentioned far more often in the files'),
     ('Which did Verenia mean?', 'the new one')],
c_b=[('Omar has worked on Verenian for twenty-two years.', 'T'),
     ('Verenian marks the difference with an article.', 'F'),
     ('The two readings mean roughly the same thing.', 'F'),
     ('The system guessed carelessly.', 'F'),
     ('The existing group has an agreed mandate.', 'T'),
     ('Omar decided the question himself.', 'F')],
c_c=[('He reads the drafts against the ____________.', 'source'),
     ('A noun stands on its ____________.', 'own'),
     ('The choice is a ____________.', 'commitment'),
     ('A body with an agreed ____________ and a chairman.', 'mandate'),
     ('It had chosen the reading that is more ____________ in the files.', 'common'),
     ('He asked which was ____________.', 'meant')],
c_d=[('The system chose the ( commoner / newer ) reading.', ['commoner', 'newer'], 0),
     ('What would the existing group bring with it?', ['nothing', 'an agreed mandate and a chairman', 'a new chairman', 'a new mandate'], 1),
     ('How did Omar settle the question?', ['by reading more files', 'by asking the embassy', 'by choosing himself', 'by consulting Legal'], 1),
     ('English differs from Verenian because it', ['has more words', 'forces a choice on every noun', 'is older', 'is shorter'], 1),
     ('The difference between the readings is', ['a shade of meaning', 'two diplomatic positions', 'a spelling question', 'a style question'], 1)],
c_e=('a, the or no article? Put each phrase in the right column.',
     [('We propose ____ new working group.', 'a'),
      ('We refer to ____ group set up in 2019.', 'the'),
      ('____ diplomacy depends on exact words.', 'no article'),
      ('He is ____ reviser in this department.', 'the'),
      ('They have appointed ____ chairman.', 'a'),
      ('____ translation is never finished.', 'no article')],
     ['a', 'the', 'no article']),

v_fig_title='FROM ONE LANGUAGE INTO ANOTHER',
v_fig=[('book', 'a source text'), ('doc', 'a target text'), ('key', 'a term of art'),
       ('scale', 'fidelity'), ('bulb', 'a false friend'), ('seal', 'the authentic text')],
v_fig_cap='Six words for the distance between what was written and what you send on.',
vocab=[
 ('a source text', 'the text you are translating from'),
 ('a target text', 'the text you are producing in the other language'),
 ('a rendering', 'one particular version of a text in another language'),
 ('a working translation', 'a version good enough to understand by, but not to rely on'),
 ('a certified translation', 'a version formally attested to be faithful'),
 ('a false friend', 'a word that looks the same in two languages and is not'),
 ('a back-translation', 'a translation of the translation, used as a check'),
 ('a term of art', 'a word with a settled technical meaning in a profession'),
 ('an equivalent', 'the word in the other language that does the same work'),
 ('ambiguity', 'the property of being open to more than one reading'),
 ('to paraphrase', 'to say the same thing in different words'),
 ('literal', 'following the words of the original exactly'),
 ('idiomatic', 'natural in the other language rather than word for word'),
 ('a nuance', 'a small difference of meaning that still matters'),
 ('a glossary', 'an agreed list of terms and how they are to be rendered'),
 ('a reviser', 'the person who checks a translation against its source'),
 ('to proofread', 'to read a final text for errors before it goes out'),
 ('fidelity', 'the degree to which a translation keeps the sense of the original'),
 ('a discrepancy', 'a difference between two versions that should agree'),
 ('the authentic text', 'the version of a treaty that governs if versions differ')],
v_a=[('The text you are translating from is the ____________.', 'source text'),
     ('A version good enough to understand by is a ____________.', 'working translation'),
     ('A word that looks the same in two languages and is not is a ____________.', 'false friend'),
     ('A translation of the translation, used as a check, is a ____________.', 'back-translation'),
     ('An agreed list of terms and how to render them is a ____________.', 'glossary'),
     ('The person who checks a translation against its source is the ____________.', 'reviser'),
     ('The version of a treaty that governs if versions differ is ____________.', 'the authentic text'),
     ('A difference between two versions that should agree is a ____________.', 'discrepancy')],
v_b=[('A term of art is a word with a settled', 'technical meaning in a profession.'),
     ('Literal means following the words', 'of the original exactly.'),
     ('Idiomatic means natural in the other language', 'rather than word for word.'),
     ('Fidelity is the degree to which a translation', 'keeps the sense of the original.'),
     ('A certified translation is a version', 'formally attested to be faithful.')],

g_title='Grammar: articles',
g_rule=['Use a or an when the thing is one of several, or new to the reader.',
        'Use the when the reader can tell which particular one you mean.',
        'Use no article for general ideas and for most uncountable nouns.',
        'In diplomatic text the article is a commitment: a group is not the group.'],
g_fig=('LOOSE',
       ['We propose the establishment of the working group.',
        'He is reviser in this department.',
        'The diplomacy depends on exact words.',
        'They have appointed the chairman, name to follow.'],
       'PRECISE',
       ['We propose the establishment of a working group.',
        'He is the reviser in this department.',
        'Diplomacy depends on exact words.',
        'They have appointed a chairman, name to follow.'],
       'two articles that commit, and two that are simply wrong',
       'four that say what the writer actually means'),
g_fig_cap='Nowhere else in English grammar does one letter change a negotiating position.',
g_a=[('We propose the establishment of ____________ new working group.', 'a'),
     ('We refer to ____________ group established in 2019.', 'the'),
     ('____________ diplomacy depends on exact words.', '—'),
     ('He is ____________ reviser in this department.', 'the'),
     ('They have appointed ____________ chairman, whose name will follow.', 'a'),
     ('____________ translation of the note is attached.', 'A'),
     ('The Ministry has received ____________ note of 3 March.', 'the'),
     ('____________ fidelity to the source is the first requirement.', '—'),
     ('There is ____________ discrepancy between the two versions.', 'a')],
g_b=[('An article in a diplomatic text is a ( courtesy / commitment ).', ['courtesy', 'commitment'], 1),
     ('We propose the establishment of ____ new working group.', ['the', 'a', '—', 'an'], 1),
     ('____ diplomacy depends on exact words.', ['The', '—', 'A', 'An'], 1),
     ('We refer to ____ group established in 2019.', ['a', 'the', '—', 'an'], 1),
     ('He is ____ reviser in this department.', ['a', 'the', '—', 'an'], 1),
     ('Which sentence creates a new body?', ['We propose the working group.', 'We propose a working group.', 'We propose working group.', 'We propose the group.'], 1)],

d1=dict(title='Which group?',
        fig=(['It says the working group.', 'Their text says neither.'],
             ['Then who chose?', 'The draft chose. We did not.']),
        cap='Omar Nasri and Lina, over the May note.',
        lines=[('Omar', 'Paragraph two. The establishment of the joint working group.'),
               ('Lina', 'That is the group from the 2019 agreement.'),
               ('Omar', 'Is it? Read their text.'),
               ('Lina', 'I cannot read Verenian.'),
               ('Omar', 'Then I will tell you what it says. It says joint working group, with no '
                        'article, because Verenian has none.'),
               ('Lina', 'So it could be either.'),
               ('Omar', 'It could be either, and the two are very different. The existing group '
                        'has a mandate and a chairman. A new one has neither and would have to be '
                        'negotiated.'),
               ('Lina', 'Why did the draft say the?'),
               ('Omar', 'Because our files mention that group forty times and a new group never. '
                        'It picked the commoner reading, which is a reasonable guess.'),
               ('Lina', 'And a guess is not a translation.'),
               ('Omar', 'A guess is a first draft. The word translation means somebody has taken '
                        'responsibility for the choices, and nobody had.'),
               ('Lina', 'So we ask the embassy.'),
               ('Omar', 'We ask the embassy, in writing, and we keep the answer with the file.')],
        a=[('What does the Verenian text say?', 'joint working group, with no article'),
           ('Why can it mean either?', 'because Verenian has no articles'),
           ('What does the existing group have?', 'a mandate and a chairman'),
           ('Why did the draft choose "the"?', 'because the Ministry’s files mention that group forty times'),
           ('What does the word translation mean, for Omar?', 'that somebody has taken responsibility for the choices')],
        b=[('It says joint working group, with no ____________.', 'article'),
           ('It picked the commoner ____________.', 'reading'),
           ('A guess is a first ____________.', 'draft'),
           ('We keep the ____________ with the file.', 'answer')]),
d2=dict(title='Twenty-two years of this',
        fig=(['Has your job changed?', 'Completely.'],
             ['And the work itself?', 'Not by one minute.']),
        cap='Lina and Omar, at the end of the day.',
        lines=[('Lina', 'Does the system make your work easier or harder?'),
               ('Omar', 'Easier, and that is not the interesting answer. It gives me in two '
                        'minutes what used to take me an afternoon.'),
               ('Lina', 'Then what is the interesting answer?'),
               ('Omar', 'That the hard part was never the typing. The hard part is knowing which '
                        'of two readings a writer meant, and that is still mine.'),
               ('Lina', 'So nothing has changed.'),
               ('Omar', 'Everything has changed. I used to meet the difficulty while I worked, '
                        'word by word. Now I meet a finished text that has already decided, and I '
                        'have to go looking for the decisions.'),
               ('Lina', 'Is that harder?'),
               ('Omar', 'It is harder, and it is a different kind of tired. A smooth text does not '
                        'show you where it struggled.'),
               ('Lina', 'How do you find the places?'),
               ('Omar', 'Experience, mostly. I know where Verenian and English do not fit, and I '
                        'go there first. Articles, tenses, the word for shall.'),
               ('Lina', 'And somebody with two years instead of twenty-two?'),
               ('Omar', 'Will not know where to look, and the text will look perfect to them. I '
                        'have said this in three meetings and nobody has an answer, including me.')],
        unresolved=True,
        a=[('How much time does the system save Omar?', 'an afternoon becomes two minutes'),
           ('What was never the hard part?', 'the typing'),
           ('What has changed about how he meets difficulty?', 'he now meets a finished text that has already decided'),
           ('Where does he look first?', 'articles, tenses and the word for shall'),
           ('What is the unanswered problem?', 'that a junior reviser will not know where to look and the text will look perfect')],
        b=[('It gives me in two minutes what used to take an ____________.', 'afternoon'),
           ('I have to go looking for the ____________.', 'decisions'),
           ('A smooth text does not show you where it ____________.', 'struggled'),
           ('The text will look ____________ to them.', 'perfect')]),

speak=[('Say it correctly',
        ['Student A: say six sentences about bodies and meetings, with articles.',
         'Student B: say what each article commits the speaker to.',
         'Find the sentence where changing the article changes the position.']),
       ('Spoken tasking',
        ['Choose a document in your work that is translated.',
         'Say aloud what the translation is for, and what may be relied on.',
         'Your partner asks who takes responsibility for the choices in it.']),
       ('Where the languages do not fit',
        ['In pairs, name three places where English and your language do not match.',
         'Say what a machine draft is likely to do at each one.',
         'Find the one you would check first in any draft.'])],

ext_title='A machine rendering is a first draft, and calling it a translation moves the responsibility to nobody',
ext_fig=figs.datatable('WHERE A VERENIAN TEXT AND AN ENGLISH TEXT DO NOT FIT',
                       ['In the source', 'What English forces', 'What a draft tends to do'],
                       [['no article on nouns', 'a, the or nothing', 'pick the commoner one'],
                        ['one word for shall and will', 'obligation or prediction', 'pick obligation'],
                        ['no number on some nouns', 'singular or plural', 'pick singular'],
                        ['formal and plain forms alike', 'register must be chosen', 'match our house style'],
                        ['titles in one form', 'full protocol title', 'use the nearest title']]),
ext_fig_cap='Five choices the source does not make, made silently and plausibly five times.',
ext=[
 'Translation systems have become very good, and in a foreign ministry they do two things '
 'that are genuinely valuable. They let an officer read an incoming document in minutes '
 'instead of waiting a day for the queue, and they give a professional reviser a draft to '
 'work from instead of a blank page. Published accounts of ministries deploying them put '
 'translation among the earliest and least contested uses.',
 'What they produce, however, is a rendering and not a translation, and the distinction is '
 'not pedantic. Every language forces choices that another language does not make. English '
 'forces an article on almost every noun; many languages have none. English separates '
 'obligation from prediction; some languages use one word for both. The source simply does '
 'not contain the answer.',
 'Faced with a choice the source does not settle, a system chooses the likelier option, and '
 'likelier usually means commoner in the material it has seen. If a ministry’s files mention '
 'one particular working group forty times and a hypothetical new one never, the draft will '
 'say the working group. That is a sensible guess and it is still a guess.',
 'The consequence is that a smooth rendering hides its own difficulties. A human translator '
 'meets each hard choice while working and can mark it, query it or footnote it. A finished '
 'draft arrives with every choice already made and no record of which ones were hard, so the '
 'reviser must go looking for them.',
 'The practice that follows is simple to state. Use the rendering to understand, never to '
 'rely on. Send nothing out on a machine draft that creates an obligation. And where the two '
 'languages are known not to fit, check those places first and ask the other side in writing '
 'when the source will not settle the matter.'],
dp1=('Translation in diplomatic services',
     'Foreign ministries deploying these systems have reported multilingual translation and '
     'transcription among the first capabilities put into service, with professional revision '
     'retained rather than removed.',
     'Source: reported practice in several foreign ministries and in UN language services, 2025–2026.'),
e_a=[('What two valuable things do translation systems do?', 'let an officer read quickly, and give a reviser a draft instead of a blank page'),
     ('Why is a rendering not a translation?', 'because every language forces choices another language does not make'),
     ('What does a system do with an unsettled choice?', 'it chooses the likelier option, which means commoner in what it has seen'),
     ('Why does a smooth rendering hide its difficulties?', 'because every choice arrives already made, with no record of which were hard'),
     ('What are the three practices?', 'use it to understand not to rely on; send nothing out that creates an obligation; check the known mismatches first')],
e_b=[('Translation was among the earliest ministry uses.', 'T'),
     ('A rendering and a translation are the same thing.', 'F'),
     ('A system marks the choices it found difficult.', 'F'),
     ('"Likelier" usually means commoner in the material seen.', 'T'),
     ('A machine draft may be sent out if it creates an obligation.', 'F'),
     ('Professional revision has been removed where these systems were deployed.', 'F')],

w_model=(
 'Purpose: produce a working English version of the Verenian note of 9 May so that the desk '
 'can act, while the authoritative version is settled. Scope: the note of 9 May and its 1 '
 'enclosure; earlier correspondence is out of scope. Inputs: the Verenian original, the '
 'Ministry’s glossary of 40 standing terms, and the 2019 agreement. Criteria: mark every '
 'noun where the source carries no article and the English version has had to choose, and '
 'give both readings in a footnote; mark every use of shall where the source does not '
 'distinguish obligation from prediction; head the document WORKING TRANSLATION — NOT FOR '
 'RELIANCE. Done: 1 English version with 1 footnote per marked choice, within 1 working day. '
 'Fallback: where a choice would create or remove an obligation, do not choose: leave the '
 'term in the source language and ask the embassy in writing.'),
w_fig=figs.spec_card('THE TASKING FOR A WORKING VERSION',
                     [('Purpose', 'a working English version so the desk can act'),
                      ('Scope', 'the note of 9 May and 1 enclosure'),
                      ('Inputs', 'the original, the 40-term glossary, the 2019 agreement'),
                      ('Criteria', 'mark every forced choice; footnote both readings; head it WORKING'),
                      ('Done', '1 version, 1 footnote per marked choice, within 1 day'),
                      ('Fallback', 'an obligation at stake: do not choose, ask in writing')]),
w_fig_cap='The fallback line is what separates a working version from a position taken by accident.',
w_task='Write a tasking for a working translation in your own work.',
w_steps=['Say what the version is for, and what it is not for.',
         'Name the document and what is out of scope.',
         'Name the glossary and the governing text to work from.',
         'Require every forced choice to be marked and footnoted.',
         'Say what to do where a choice would create an obligation.'],
w_bank=['Produce a working English version of … so that …',
        'Cover … ; … is out of scope.',
        'Work from … , the glossary of … and …',
        'Mark every … where the source … and give both readings in …',
        'Where a choice would create or remove an obligation, … rather than …'],
w_check=['Is the version headed so nobody can rely on it by mistake?',
         'Must forced choices be marked, not silently made?',
         'Is the glossary named?',
         'Is choosing forbidden where an obligation is at stake?'],

t_title='Machine translation as a first draft, not a translation',
t_fig=figs.split('WHAT THE SOURCE SETTLES',
                 'Settled by the source',
                 ['the facts stated',
                  'the dates and figures',
                  'the names and titles given',
                  'the order of the paragraphs'],
                 'Not settled — English forces a choice',
                 ['a group, the group, or groups',
                  'shall as duty or as future',
                  'singular or plural',
                  'formal register or plain']),
t_fig_cap='The right-hand column is where a rendering becomes a position.',
t_body=[
 'Use these systems for incoming material without hesitation. Reading a foreign note in two '
 'minutes rather than waiting a day for the queue is a real gain, and a reviser given a draft '
 'works faster than a reviser given a blank page. This is one of the places where the saving '
 'is obvious and the risk is manageable.',
 'But never let the word translation be used for what comes back. A translation is a text '
 'somebody has taken responsibility for; a rendering is a text in which every difficult '
 'choice has been made by nobody. Head the document WORKING TRANSLATION, and make the heading '
 'a rule rather than a courtesy, because a document that leaves your desk without it will be '
 'quoted as though it were authoritative.',
 'Then go to the places where your two languages are known not to fit, because those are '
 'where the silent choices are. Articles, if your language has none. Obligation against '
 'prediction, if one word does both. Number, register, titles. Check those first, mark each '
 'choice, and where a choice would create or remove an obligation, do not make it at all: ask '
 'the other side in writing and keep the answer on the file.'],
t_say=[('Name what it is: ', 'This is a working translation, not for reliance.'),
       ('Mark the choice: ', 'The source has no article here; both readings are possible.'),
       ('Refuse the choice: ', 'We have asked the embassy which is meant.')],
t_bound=('A rendering tells you what a document says where the two languages agree. It '
         'cannot tell you what the writer meant where they do not agree, it does not know '
         'which of its choices were difficult, and it reads equally fluently whether it was '
         'certain or guessing. Fluency is not evidence of fidelity.'),
t_a=[('This is a working translation, not for ____________.', 'reliance'),
     ('The source has no ____________ here; both readings are possible.', 'article'),
     ('We have asked the embassy which is ____________.', 'meant'),
     ('A translation is a text somebody has taken ____________ for.', 'responsibility'),
     ('Go to the places where your two languages do not ____________.', 'fit'),
     ('Fluency is not evidence of ____________.', 'fidelity')],
t_b_rubric='Rewrite each sentence so that the choice is marked rather than made.',
t_b=[('We propose the establishment of the joint working group.', 'the source has no article: a new group or the 2019 group, both possible'),
     ('The parties shall meet in September.', 'the source does not separate duty from future: shall or will, both possible'),
     ('The delegation will include the adviser.', 'the source does not mark number: adviser or advisers, both possible'),
     ('Attached is the translation of their note.', 'attached is a working translation of their note, not for reliance')],

case=dict(
 title='The Decision Room · The version that was quoted',
 brief=[
  'A working English version of a Verenian note was circulated inside the Ministry in '
  'February. It carried no heading saying it was a working version, because the heading rule '
  'did not yet exist.',
  'In June a submission to the Minister quoted that version, including a sentence containing '
  'the article problem. The submission says Verenia proposed reopening the existing working '
  'group. Verenia had proposed creating a new one.',
  'The submission has been signed and filed. It has not been shared outside the Ministry, and '
  'the Minister has not yet acted on it. Omar found the error while preparing a glossary.'],
 exhibit=figs.datatable('THE FEBRUARY VERSION, AND WHERE IT WENT',
                        ['', 'Figure', 'Note'],
                        [['circulated inside the Ministry', 'yes', 'no heading'],
                         ['forced choices in the text', '6', 'none marked'],
                         ['choices later found wrong', '1', 'the article in paragraph 2'],
                         ['documents quoting it since', '4', '1 of them to the Minister'],
                         ['shared outside the Ministry', 'no', '—'],
                         ['Minister has acted on it', 'not yet', '—']]),
 exhibit_cap='One wrong choice in six, repeated through four documents, none of them marked as uncertain.',
 exhibit_note='The other five forced choices were checked against the source and were correct.',
 voices=[('Omar Nasri', 'Translation and Documentation',
          'Withdraw the submission and reissue it. The Minister is one meeting away from '
          'saying something to the Verenian Foreign Minister that is not true.'),
         ('Lina Khalil', 'desk officer, Bilateral Affairs',
          'Correct the substance in a one-line note to the private office. Withdrawing a '
          'signed submission over one article makes the Ministry look as though it cannot '
          'read.'),
         ('Samir Haddad', 'Legal and Treaties',
          'It is not one article. Reopening an existing body and creating a new one are '
          'different undertakings with different legal consequences, and the submission '
          'recommends a course that fits only one of them.')],
 steps=[('Find it', 'What did the February version get wrong?'),
        ('Compare it', 'How far has the error travelled?'),
        ('Infer it', 'Why does Samir say it is not one article?'),
        ('Weigh it', 'The appearance of withdrawing against the risk of the Minister acting.'),
        ('Decide', 'What happens to the submission?')],
 analysis=[('Find it. How many forced choices were in the text?', 'six, of which one was wrong'),
           ('Compare it. How many documents quote it?', 'four, one of them a submission to the Minister'),
           ('Infer it. What is Samir’s point?', 'that reopening a body and creating one are different undertakings'),
           ('Weigh it. What is Lina weighing?', 'how the Ministry looks against the chance the Minister acts on it'),
           ('Decide. What would you do?', 'answers vary; the test is whether the recommendation survives the correction')],
 decision='Write what the Ministry does about the submission and the February version.',
 decision_steps=['Say what happens to the signed submission.',
                 'Say what is done to the February version on the file.',
                 'Say what is checked in the other three documents.',
                 'Say what rule is written about working versions.'],
 bank=['The submission is …',
       'The February version is …',
       'The other … documents are …',
       'From now on a working version must …',
       'This is reviewed …'],
 outcome='The submission was withdrawn and reissued four days later with the correction, and '
         'the Minister had not in the meantime raised the matter. Every working version now '
         'carries a heading and a line at the foot listing the choices the English has had to '
         'make. Lina, who argued against withdrawal, drafted the heading rule and says she '
         'still thinks the withdrawal itself was unnecessary and that she would rather lose '
         'that argument than the other one.',
 outcome_q=[('What happened to the submission?', 'it was withdrawn and reissued four days later with the correction'),
            ('What does every working version now carry?', 'a heading and a list at the foot of the choices the English had to make')],
 tags=[]),

lab=dict(
 title='Brief Lab · Translate their note',
 task=['This is the tasking that produced the February version, sent to the documentation '
       'room by electronic mail at four in the afternoon.',
       'It asked for a translation, which is not what anybody wanted and not what any system '
       'can produce.'],
 draft=['Translate the Verenian note for the file.',
        'Standard quality is fine.',
        'Keep the diplomatic tone.',
        'Flag anything unclear.',
        'Use the usual terms.',
        'Back by close of play.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the first word of them is the one that caused the trouble.',
 asked=['A working version, headed as such',
        'Every forced choice marked and footnoted',
        'Obligations referred rather than chosen'],
 back=['A fluent English text, unheaded',
       '6 forced choices, none marked',
       'Circulated and quoted four times'],
 gap='"Translate" asks for a text somebody is responsible for, "standard quality" states no '
     'test, "the diplomatic tone" is a style instruction, "flag anything unclear" leaves the '
     'reader to notice what is unclear, and "the usual terms" names no glossary.',
 back_cap='A good English text that had made six decisions and recorded none of them.',
 back_note='"Flag anything unclear" cannot work, because a forced choice does not feel '
           'unclear once it has been made. The draft read perfectly.',
 diagnosis=[('[1] "translate" — a working version, or one to rely on?', 'undefined done'),
            ('[2] "standard quality" — measured against what?', 'unstated criterion'),
            ('[3] "keep the diplomatic tone" — whose register, by what test?', 'unstated criterion'),
            ('[4] "flag anything unclear" — unclear to whom, found how?', 'unscoped set'),
            ('[5] "use the usual terms" — which glossary, of what date?', 'unscoped set'),
            ('[6] "by close of play" — finished meaning checked, or produced?', 'undefined done')],
 rewrite='Rewrite the tasking so that it asks for a working version with every forced choice '
         'marked.',
 scaffold=['What the version is for, and what it is not for',
           'Which document and enclosure are covered',
           'The original, the glossary and the governing agreement',
           'What must be marked, what must be footnoted, and how the document is headed',
           'What comes back, with how many footnotes, by when',
           'What to do where a choice would create an obligation'],
 bank=['Produce a working English version of … so that … while …',
       'Cover … and its … ; … is out of scope.',
       'Work from … , the glossary of … standing terms, and …',
       'Mark every noun where … ; mark every use of … ; head the document …',
       'Return 1 version with 1 footnote per … , within …',
       'Where a choice would create or remove an obligation, … and ask …'],
 check=['Does it say working version rather than translation?',
        'Must the document carry a heading saying it is not for reliance?',
        'Must every forced choice be marked?',
        'Is choosing forbidden where an obligation is at stake?'],
 model=['Produce a working English version of the Verenian note of 9 May so that the desk can act, while the authoritative version is settled',
        'The note of 9 May and its 1 enclosure; earlier correspondence is out of scope',
        'The Verenian original, the Ministry’s glossary of 40 standing terms, and the 2019 agreement',
        'Mark every noun where the source carries no article and the English has had to choose, giving both readings in a footnote; mark every use of shall where the source does not distinguish obligation from prediction; head the document WORKING TRANSLATION — NOT FOR RELIANCE',
        '1 English version with 1 footnote per marked choice, within 1 working day',
        'Where a choice would create or remove an obligation, do not choose: leave the term in the source language and ask the embassy in writing'],
 cost='1 unheaded version quoted in 4 documents, 1 submission to the Minister withdrawn and '
      'reissued, and 4 months before anybody read the source text again.'),

rev_fig=figs.split('ARTICLES',
                   'Wrong',
                   ['We propose the establishment of the group.',
                    'He is reviser in this department.',
                    'The diplomacy depends on exact words.',
                    'They appointed the chairman, name to follow.'],
                   'Right',
                   ['We propose the establishment of a group.',
                    'He is the reviser in this department.',
                    'Diplomacy depends on exact words.',
                    'They appointed a chairman, name to follow.']),
rev_fig_cap='Four articles, and in the first pair the difference is a negotiating position.',
rev=dict(
 read=[('A machine rendering is best described as', ['a translation', 'a first draft', 'an authentic text', 'a glossary'], 1),
       ('Where the source does not settle a choice, a system', ['stops', 'picks the commoner reading', 'asks', 'marks it'], 1),
       ('A smooth rendering hides', ['the facts', 'its own difficulties', 'the dates', 'the register'], 1),
       ('In the Decision Room, how many forced choices were wrong?', ['six', 'one', 'four', 'none'], 1)],
 listen_text='Use these systems for incoming material without hesitation, because reading a '
             'foreign note in two minutes is a real gain. But never let the word translation '
             'be used for what comes back, because a translation is a text somebody has taken '
             'responsibility for. Then go to the places where your two languages are known not '
             'to fit.',
 listen=[('Reading a foreign note in two ____________.', 'minutes'),
         ('Never let the word ____________ be used for what comes back.', 'translation'),
         ('A text somebody has taken ____________ for.', 'responsibility'),
         ('Where your two languages are known not to ____________.', 'fit')],
 speak=['Name two places where English and your language do not fit.',
        'Say what a machine draft is likely to do at each one.'],
 write='Write one footnote marking a choice the English has had to make.',
 vocab=[('The text you are translating from is the ____________.', 'source text'),
        ('A word that looks the same in two languages and is not is a ____________.', 'false friend'),
        ('An agreed list of terms and how to render them is a ____________.', 'glossary'),
        ('The person who checks a translation against its source is the ____________.', 'reviser'),
        ('The version of a treaty that governs if versions differ is ____________.', 'the authentic text')],
 gram=[('We propose the establishment of ____________ new working group.', 'a'),
       ('We refer to ____________ group established in 2019.', 'the'),
       ('____________ diplomacy depends on exact words.', '—'),
       ('He is ____________ reviser in this department.', 'the'),
       ('There is ____________ discrepancy between the two versions.', 'a')]),

found=['Find one noun in a translated text where English had to choose an article.',
       'Ask who took responsibility for that choice.',
       'Head your next working version so nobody can rely on it by mistake.',
       'List the three places your two languages do not fit.'],
end_line='A guess is a first draft. Translation means somebody has taken responsibility.',
end_next='Next: Names, Dates and Figures',
)
