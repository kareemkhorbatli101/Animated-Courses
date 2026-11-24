# -*- coding: utf-8 -*-
import figs

U = dict(
num=3, title='The Note Verbale',
gram='the passive, present, in formulaic correspondence',
ai='drafting formulaic correspondence to a fixed convention',
strap='CEFR B1 · Grammar: the passive, present · AI: formulaic correspondence',
cando=['form the present passive correctly and use it where the actor is the Ministry',
       'write the opening and closing formulas of a third-person note',
       'keep a note verbale in the third person throughout',
       'say what a formulaic text may and may not be asked to contain',
       'notice when a correct form carries a commitment nobody authorised'],
hero=('ELEVEN NOTES BEFORE LUNCH',
      ['Every one of them was in the correct form.',
       'One of them agreed to something the Ministry had not decided.'],
      [(720, 'purple', 'short'), (1380, 'orange', 'long'),
       (2040, 'teal', 'short'), (2700, 'blue', 'long')]),
hero_cap='The outgoing tray, Wednesday, before anybody had read the third note.',

warm=['Which letters in your work follow a fixed form of words?',
      'What is the advantage of a form that never changes?',
      'What can hide inside a correct form?'],
read=[
 'A note verbale is the ordinary currency of relations between a ministry and an embassy, and '
 'its form has barely changed in a century. It is written in the third person throughout, so '
 'that neither side says I or you. It opens with compliments and closes with assurances of '
 'highest consideration, and between those two formulas it says one thing, briefly.',
 'The form is strict for a reason. A note verbale is not a letter between two people but a '
 'communication between two states, and the officials who sign nothing are not the point of '
 'it. Because the form is fixed, an experienced reader can see the substance at once, and '
 'because the form is fixed, a departure from it is itself a signal.',
 'In April the Ministry began drafting routine notes with a system trained on its own '
 'outgoing correspondence. The results were immediately good. Eleven notes were produced in '
 'one morning, all in the correct form, all with the right reference numbers, and all in a '
 'register that Tarek Zayed described as indistinguishable from the department’s own.',
 'The third note concerned a request from the Verenian embassy to open a cultural centre. The '
 'Ministry had not yet taken a view, and the instruction to the drafter said to acknowledge '
 'the request. The note that came back acknowledged the request and added that the Ministry '
 'would be pleased to assist with the necessary arrangements.',
 'Every word of that sentence appears in dozens of notes the Ministry has sent before, which '
 'is exactly why it appeared. The system had learnt what an acknowledgement usually looks '
 'like here, and in this house an acknowledgement is usually warm. The note was correct, '
 'conventional, and a commitment nobody had authorised.'],
c_a=[('In which person is a note verbale written?', 'the third person throughout'),
     ('What does a note verbale open and close with?', 'compliments, and assurances of highest consideration'),
     ('Why is the form strict?', 'because it is a communication between states, not between two people'),
     ('How many notes were produced in one morning?', 'eleven'),
     ('What did the third note add?', 'that the Ministry would be pleased to assist with the arrangements'),
     ('Why did that sentence appear?', 'because the system had learnt that an acknowledgement here is usually warm')],
c_b=[('A note verbale uses I and you.', 'F'),
     ('The form has changed greatly in the last century.', 'F'),
     ('A departure from the form is itself a signal.', 'T'),
     ('The eleven notes were in the wrong register.', 'F'),
     ('The Ministry had decided its view on the cultural centre.', 'F'),
     ('The added sentence was unusual in the Ministry’s correspondence.', 'F')],
c_c=[('It is written in the third person ____________.', 'throughout'),
     ('A communication between two ____________.', 'states'),
     ('All with the right ____________ numbers.', 'reference'),
     ('The instruction said to ____________ the request.', 'acknowledge'),
     ('In this house an acknowledgement is usually ____________.', 'warm'),
     ('A commitment nobody had ____________.', 'authorised')],
c_d=[('The note was in the ( wrong / correct ) form, and that was the difficulty.', ['wrong', 'correct'], 1),
     ('What had the Ministry not yet done?', ['replied', 'taken a view', 'received the request', 'filed the note'], 1),
     ('Where did the extra sentence come from?', ['an invention', 'the Ministry’s own past notes', 'the embassy', 'the Minister'], 1),
     ('Tarek described the register as', ['foreign', 'indistinguishable from the department’s own', 'too casual', 'too formal'], 1),
     ('A departure from the fixed form is', ['a mistake only', 'itself a signal', 'forbidden', 'invisible'], 1)],
c_e=('Active or passive? Put each sentence in the right column.',
     [('The note is sent by the Ministry.', 'passive'),
      ('The Ministry sends the note.', 'active'),
      ('The request is acknowledged.', 'passive'),
      ('The Ministry acknowledges the request.', 'active'),
      ('Notes are numbered on dispatch.', 'passive'),
      ('Protocol numbers the notes.', 'active')],
     ['passive', 'active']),

v_fig_title='THE SHAPE OF A FORMAL NOTE',
v_fig=[('envelope', 'a third-person note'), ('seal', 'a seal'), ('doc', 'an enclosure'),
       ('book', 'a closing formula'), ('flag', 'a letter of credence'), ('scale', 'precedence')],
v_fig_cap='Six words for a form of words that has outlasted most of the states that use it.',
vocab=[
 ('compliments', 'the formal greeting that opens a third-person note'),
 ('the honour', 'the formulaic phrase by which a ministry states what it is doing'),
 ('assurances of its highest consideration', 'the fixed closing of a note verbale'),
 ('a third-person note', 'correspondence in which neither side writes I or you'),
 ('a first-person note', 'a signed letter from one named official to another'),
 ('a démarche', 'a formal approach making a government’s position known'),
 ('a non-paper', 'an unsigned text circulated without being attributed to anybody'),
 ('a letter of credence', 'the document by which an ambassador is accredited'),
 ('an opening formula', 'the fixed words with which a note begins'),
 ('a closing formula', 'the fixed words with which a note ends'),
 ('an addressee', 'the person or body a document is sent to'),
 ('a reference number', 'the number by which a document is cited afterwards'),
 ('to acknowledge', 'to confirm in writing that something has been received'),
 ('a seal', 'the impression that shows a document is official'),
 ('a courtesy', 'a form of politeness that custom requires'),
 ('formulaic', 'following a fixed form of words'),
 ('to accredit', 'to send somebody formally as a representative to a state'),
 ('precedence', 'the order in which states or officials rank on an occasion'),
 ('a dispatch', 'an official written report sent from a post to the ministry'),
 ('an enclosure', 'a document sent inside another document')],
v_a=[('The formal greeting that opens a third-person note is ____________.', 'compliments'),
     ('An unsigned text circulated without attribution is a ____________.', 'non-paper'),
     ('The document by which an ambassador is accredited is a ____________.', 'letter of credence'),
     ('The number by which a document is cited afterwards is its ____________.', 'reference number'),
     ('The order in which states rank on an occasion is ____________.', 'precedence'),
     ('An official written report from a post to the ministry is a ____________.', 'dispatch'),
     ('A document sent inside another document is an ____________.', 'enclosure'),
     ('A formal approach making a government’s position known is a ____________.', 'démarche')],
v_b=[('A third-person note is correspondence in which', 'neither side writes I or you.'),
     ('To acknowledge is to confirm in writing', 'that something has been received.'),
     ('A courtesy is a form of politeness', 'that custom requires.'),
     ('Formulaic means following', 'a fixed form of words.'),
     ('To accredit is to send somebody formally', 'as a representative to a state.')],

g_title='Grammar: the passive, present',
g_rule=['Form the present passive with am, is or are plus the past participle.',
        'Use it where the actor is obvious, unimportant, or deliberately not named.',
        'Formal correspondence uses it constantly: the request is acknowledged.',
        'Add by only when the actor matters: the note is signed by the Head of Mission.'],
g_fig=('LOOSE',
       ['The note is send today.',
        'The request has acknowledged.',
        'Notes are number on dispatch.',
        'The file is kept by us in the registry.'],
       'PRECISE',
       ['The note is sent today.',
        'The request is acknowledged.',
        'Notes are numbered on dispatch.',
        'The file is kept in the registry.'],
       'three malformed passives and one unnecessary actor',
       'three correct, and one with the actor removed'),
g_fig_cap='The passive is not evasion in this trade; it is how a state speaks rather than a person.',
g_a=[('The note ____________ (send) to the embassy today.', 'is sent'),
     ('The request ____________ (acknowledge) in paragraph one.', 'is acknowledged'),
     ('Notes ____________ (number) on dispatch.', 'are numbered'),
     ('The file ____________ (keep) in the registry.', 'is kept'),
     ('Letters of credence ____________ (present) to the Head of State.', 'are presented'),
     ('The programme ____________ (agree) between the two protocol offices.', 'is agreed'),
     ('Enclosures ____________ (list) at the foot of the note.', 'are listed'),
     ('The reference number ____________ (give) by the registry.', 'is given'),
     ('Non-papers ____________ (not/sign) and ____________ (not/attribute).', 'are not signed / are not attributed')],
g_b=[('Formal correspondence uses the passive ( constantly / rarely ).', ['constantly', 'rarely'], 0),
     ('The note ____ to the embassy today.', ['is send', 'is sent', 'are sent', 'is sending'], 1),
     ('Notes ____ on dispatch.', ['are number', 'are numbered', 'is numbered', 'are numbering'], 1),
     ('Add "by" only when', ['the verb is long', 'the actor matters', 'the note is formal', 'the tense is present'], 1),
     ('The request ____ in paragraph one.', ['has acknowledged', 'is acknowledged', 'acknowledges', 'is acknowledge'], 1),
     ('Non-papers ____ signed.', ['are not', 'is not', 'do not', 'does not'], 0)],

d1=dict(title='Correct, and not authorised',
        fig=(['It is in the right form.', 'It is in perfect form.'],
             ['Then what is wrong?', 'We have agreed to something.']),
        cap='Tarek Zayed and Lina, over the outgoing tray.',
        lines=[('Tarek', 'Note three. Read the last sentence to me.'),
               ('Lina', 'The Ministry would be pleased to assist with the necessary '
                        'arrangements.'),
               ('Tarek', 'That sentence is in two hundred of our notes. It is perfectly formed and '
                         'perfectly ordinary.'),
               ('Lina', 'And the instruction was to acknowledge the request.'),
               ('Tarek', 'The instruction was to acknowledge. The note acknowledges, and then it '
                         'offers to help. We have not decided whether we will help.'),
               ('Lina', 'The system did not invent the sentence.'),
               ('Tarek', 'It did not invent anything. It learnt from us. In this house an '
                         'acknowledgement is usually warm, so a warm sentence is what an '
                         'acknowledgement looks like.'),
               ('Lina', 'So the form carried a commitment in it.'),
               ('Tarek', 'The form carried our own habit in it, and our habit is to be warm. That '
                         'is a good habit and it is not a decision.'),
               ('Lina', 'How do I stop it happening again?'),
               ('Tarek', 'Say what the note may contain, not only what it is about. Acknowledge '
                         'receipt and say nothing about the substance.'),
               ('Lina', 'That is one more line in the instruction.')],
        a=[('What does the last sentence of note three say?', 'that the Ministry would be pleased to assist'),
           ('How common is that sentence?', 'it appears in about two hundred of the Ministry’s notes'),
           ('What was the instruction?', 'to acknowledge the request'),
           ('Where did the warm sentence come from?', 'from the Ministry’s own habit, learnt from its correspondence'),
           ('What does Tarek advise?', 'saying what the note may contain, not only what it is about')],
        b=[('It is perfectly formed and perfectly ____________.', 'ordinary'),
           ('We have not decided whether we will ____________.', 'help'),
           ('The form carried our own ____________ in it.', 'habit'),
           ('That is one more line in the ____________.', 'instruction')]),
d2=dict(title='Why the form never changes',
        fig=(['Why not modernise it?', 'Because then it would mean something.'],
             ['Meaning is good.', 'Not from a form. From the content.']),
        cap='Lina and Samir Haddad, in the legal corridor.',
        lines=[('Lina', 'Why has nobody modernised the note verbale? Nobody writes like this '
                        'anywhere else.'),
               ('Samir', 'Because the form is empty on purpose, and an empty form is useful.'),
               ('Lina', 'Explain that.'),
               ('Samir', 'If every note opens the same way, the opening tells you nothing, so you '
                         'read the middle. The middle is the message.'),
               ('Lina', 'And if we modernised it?'),
               ('Samir', 'Then warmth would be a choice, and every reader would weigh it. Was this '
                         'note warmer than the last one? What does that mean? You would spend your '
                         'morning reading greetings.'),
               ('Lina', 'So the fixed form protects the content.'),
               ('Samir', 'It protects the content and it makes a departure visible. A note that '
                         'drops the compliments has said something very loud without a single '
                         'word of complaint.'),
               ('Lina', 'Has that happened?'),
               ('Samir', 'Twice in my career. Both times everybody understood immediately, and '
                         'both times nothing had been written that could be quoted.'),
               ('Lina', 'Then the system must never improve the formula.'),
               ('Samir', 'Never. It may produce the formula and it may not vary it, and that '
                         'instruction has to be written down, because varying things is what it '
                         'is good at.')],
        a=[('Why is the form empty on purpose?', 'so that the opening tells you nothing and you read the middle'),
           ('What would happen if the form were modernised?', 'warmth would become a choice and every reader would weigh it'),
           ('What does the fixed form make visible?', 'a departure from it'),
           ('How often has Samir seen the compliments dropped?', 'twice in his career'),
           ('What must the system never do?', 'vary the formula')],
        b=[('An empty form is ____________.', 'useful'),
           ('The middle is the ____________.', 'message'),
           ('You would spend your morning reading ____________.', 'greetings'),
           ('Nothing had been written that could be ____________.', 'quoted')]),

speak=[('Say it correctly',
        ['Student A: say six sentences about your office in the active voice.',
         'Student B: put each one into the present passive.',
         'Find the one that is better in the active, and say why.']),
       ('Spoken tasking',
        ['Choose a routine letter your office sends.',
         'Say aloud what it is about and what it may contain.',
         'Your partner asks what it must not contain.']),
       ('The empty form',
        ['In pairs, name a fixed form of words used in your work.',
         'Say what a departure from it would signal.',
         'Find the form where a departure would signal nothing at all.'])],

ext_title='A fixed form is empty on purpose, and a system trained on your habits will fill it with your habits',
ext_fig=figs.note_card('THE THIRD NOTE, AS IT WENT OUT',
   'The Ministry of Foreign Affairs presents its compliments',
   ['The Ministry of Foreign Affairs presents its compliments to the Embassy of Verenia and '
    'has the honour to refer to the Embassy’s note No. 114 of 3 March concerning the '
    'proposed cultural centre.',
    'The Ministry has the honour to acknowledge receipt of the Embassy’s note. The Ministry '
    'would be pleased to assist with the necessary arrangements.',
    'The Ministry avails itself of this opportunity to renew to the Embassy the assurances of '
    'its highest consideration.'],
   'Paragraph two, second sentence. Correct, conventional, and not authorised.'),
ext_fig_cap='Everything here is right except one sentence, and that sentence is the most ordinary one.',
ext=[
 'Formulaic correspondence is the easiest work in a ministry to give to a system and the '
 'easiest to get wrong, and both facts have the same cause. The form is fixed, the register '
 'is consistent, and there are thousands of past examples in the Ministry’s own files. A '
 'system trained on that material will produce notes that an experienced officer cannot '
 'distinguish from the department’s own.',
 'That is a real saving, and it should be taken. A desk officer who writes eleven routine '
 'notes a week is spending several hours on a form of words that has not changed since before '
 'they were born. The form exists precisely so that nobody has to think about it, which makes '
 'it exactly the right thing to automate.',
 'The danger lies in the gap between form and substance. A system learns what the Ministry’s '
 'notes look like, and what they look like includes the Ministry’s habits. If '
 'acknowledgements here are usually warm, a warm sentence is part of what an acknowledgement '
 'is, and it will appear without anybody choosing it. Nothing is invented, and a commitment '
 'arrives anyway.',
 'The remedy is to instruct on content and not only on subject. An instruction that says '
 'acknowledge the request names the subject. An instruction that says acknowledge receipt and '
 'say nothing on the substance names the content, and the second kind cannot produce the '
 'third note. Writing the second kind takes one extra line.',
 'There is a second rule, and it matters more than it sounds. The system may produce the '
 'formula and may never vary it. The opening and closing of a third-person note are empty on '
 'purpose, so that a reader goes straight to the middle; a system that improves them has '
 'turned an empty form into a message, and departures from the form are a signal the service '
 'relies on.'],
dp1=('Where ministries began',
     'Services that have deployed these systems report routine correspondence and '
     'translation among the first and least contested applications, with substantive policy '
     'drafting held back deliberately.',
     'Source: reported practice in several foreign ministries, 2025–2026.'),
e_a=[('Why is formulaic correspondence easy to automate?', 'the form is fixed, the register is consistent, and there are thousands of past examples'),
     ('What is the saving?', 'several hours a week spent on a form of words that never changes'),
     ('Where does the danger lie?', 'in the gap between form and substance'),
     ('What is the remedy?', 'instructing on content and not only on subject'),
     ('What is the second rule?', 'the system may produce the formula and may never vary it')],
e_b=[('A trained system produces notes that look unusual.', 'F'),
     ('The form exists so that nobody has to think about it.', 'T'),
     ('A system learns the Ministry’s habits as well as its form.', 'T'),
     ('"Acknowledge the request" names the content.', 'F'),
     ('Varying the formula is an improvement.', 'F'),
     ('Departures from the form are a signal.', 'T')],

w_model=(
 'Purpose: acknowledge the Verenian embassy’s note No. 114 of 3 March without taking any '
 'position on the proposal in it. Scope: receipt only; the substance of the cultural centre '
 'is out of scope and is with Legal. Inputs: the embassy’s note No. 114 and the Ministry’s '
 'standing form for acknowledgements. Criteria: 3 paragraphs; the opening and closing '
 'formulas exactly as they stand in the standing form, with no variation; paragraph 2 to '
 'state receipt and nothing else; no offer, no undertaking and no expression of willingness. '
 'Done: 1 note verbale with a reference number, for clearance by Protocol the same day. '
 'Fallback: where the standing form has no wording for a case of this kind, leave the '
 'paragraph blank and refer it to Protocol rather than composing new wording.'),
w_fig=figs.spec_card('THE TASKING FOR A ROUTINE NOTE',
                     [('Purpose', 'acknowledge note No. 114 without taking a position'),
                      ('Scope', 'receipt only; the substance is with Legal'),
                      ('Inputs', 'the embassy’s note and the standing form'),
                      ('Criteria', 'formulas unvaried; paragraph 2 states receipt and nothing else'),
                      ('Done', '1 note with a reference number, cleared by Protocol today'),
                      ('Fallback', 'no standing wording: leave blank, refer to Protocol')]),
w_fig_cap='The criteria line names the content. That is the line the first instruction did not have.',
w_task='Write a tasking for a routine letter your own office sends.',
w_steps=['Say what the letter is about, and what position it takes.',
         'Say what is out of scope and who holds it.',
         'Name the standing form it must follow.',
         'Say what each paragraph may contain, and what it may not.',
         'Say what to do where no standing wording exists.'],
w_bank=['Acknowledge … without …',
        'Cover … only; … is out of scope and is with …',
        'Work from … and the standing form for …',
        'Use the formulas exactly as … ; paragraph … to state … and nothing else.',
        'Where the standing form has no wording … , … rather than composing …'],
w_check=['Does it say what position the letter takes, including none?',
         'Is the standing form named?',
         'Does it say what a paragraph may not contain?',
         'Is composing new wording forbidden without clearance?'],

t_title='Drafting formulaic correspondence to a fixed convention',
t_fig=figs.split('TWO INSTRUCTIONS FOR ONE NOTE',
                 'Names the subject',
                 ['acknowledge the request',
                  'reply to their note',
                  'respond on the cultural centre',
                  'deal with note No. 114'],
                 'Names the content',
                 ['state receipt and nothing else',
                  'confirm the dates; take no position',
                  'refer the matter to Legal, no offer',
                  'acknowledge; no undertaking of any kind']),
t_fig_cap='The left-hand column permits the warm sentence. The right-hand column does not.',
t_body=[
 'Give routine correspondence to a system, because this is where the saving is largest and '
 'the risk is easiest to control. The form is fixed, the register is consistent and the '
 'Ministry has thousands of its own examples, so what comes back will read exactly like the '
 'department. Several hours a week go back to the desk officer, and nobody misses the work.',
 'Then instruct on content, not only on subject. The sentence that caused the difficulty was '
 'not invented: it was the Ministry’s own habit arriving uninvited, because in this house an '
 'acknowledgement is usually warm. An instruction that says state receipt and nothing else '
 'cannot produce it, and that instruction is one line longer than the one that can.',
 'And protect the formula absolutely. The opening and the closing of a third-person note are '
 'empty by design, so that a reader goes straight to the substance, and a departure from them '
 'is a signal the service uses deliberately and rarely. A system that improves the formula has '
 'begun speaking in a register the Ministry reserves for saying something serious without '
 'words.'],
t_say=[('Name the position: ', 'Acknowledge receipt and take no position.'),
       ('Name the content: ', 'Paragraph two states receipt and nothing else.'),
       ('Protect the form: ', 'Use the formulas exactly; do not vary them.')],
t_bound=('A system can produce the form, the register and the reference number. It cannot '
         'know what the Ministry has decided, it cannot tell a habit from a policy, and it '
         'will produce the same confident note whether the matter is settled or still with '
         'Legal. The form is safe to delegate. The position never is.'),
t_a=[('Acknowledge receipt and take no ____________.', 'position'),
     ('Paragraph two states receipt and nothing ____________.', 'else'),
     ('Use the formulas exactly; do not ____________ them.', 'vary'),
     ('The Ministry’s own habit arriving ____________.', 'uninvited'),
     ('The opening and closing are empty by ____________.', 'design'),
     ('It cannot tell a habit from a ____________.', 'policy')],
t_b_rubric='Rewrite each instruction so that it names the content.',
t_b=[('Acknowledge the request.', 'state receipt in paragraph two and say nothing on the substance'),
     ('Reply to their note.', 'confirm the dates in paragraph two; take no position on the venue'),
     ('Respond on the cultural centre.', 'refer the matter to Legal and make no offer of assistance'),
     ('Be helpful in the reply.', 'acknowledge receipt; give no undertaking of any kind')],

case=dict(
 title='The Decision Room · The sentence that was already there',
 brief=[
  'The warm sentence was removed before note three went out, because Tarek Zayed reads the '
  'outgoing tray. Lina then searched the outgoing file for the same sentence in notes the '
  'Ministry had already sent.',
  'It appears 214 times in four years, almost always correctly. In nine of those, the '
  'Ministry had not at that point taken a view on the matter it offered to assist with. Six '
  'of the nine were later agreed anyway. Two were refused. One is still open.',
  'Karim Dalati argues that the nine show a long-standing drafting habit, not a new problem. '
  'Tarek argues that a habit a person follows nine times in four years is different from a '
  'habit a system will follow every time.'],
 exhibit=figs.datatable('"WOULD BE PLEASED TO ASSIST", FOUR YEARS',
                        ['', 'Count', 'Note'],
                        [['times the sentence appears', '214', 'four years of outgoing notes'],
                         ['sent before a view was taken', '9', '—'],
                         ['later agreed anyway', '6', 'no consequence'],
                         ['later refused', '2', 'one awkward exchange'],
                         ['still open', '1', 'the cultural centre'],
                         ['drafted by a system', '1', 'note three, stopped']]),
 exhibit_cap='Nine human errors in four years, and one machine error in one morning.',
 exhibit_note='The nine were found by text search and the context of each was read; the figure '
              'is as reliable as the search terms.',
 voices=[('Karim Dalati', 'Information Security and Records',
          'Nine in four years is a drafting habit this department has had for a long time. '
          'Blaming the system for a sentence we wrote two hundred times is not analysis.'),
         ('Tarek Zayed', 'Protocol',
          'Nine in four years is one every five months, and each one was a tired officer at '
          'six in the evening. A system does it at the same rate on every note it drafts, '
          'eleven times before lunch.'),
         ('Samir Haddad', 'Legal and Treaties',
          'Both of you are counting. The two refusals are the only cases that cost anything, '
          'and in both of them the embassy quoted our sentence back to us. That is what the '
          'sentence is worth: it is quotable.')],
 steps=[('Find it', 'How often does the sentence appear, and how often prematurely?'),
        ('Compare it', 'What happened to the nine?'),
        ('Infer it', 'Why does Tarek say rate matters more than count?'),
        ('Weigh it', 'A long-standing habit against a change in its frequency.'),
        ('Decide', 'What rule, if any, is written?')],
 analysis=[('Find it. How many of the 214 were premature?', 'nine'),
           ('Compare it. What happened to those nine?', 'six were agreed anyway, two refused, one still open'),
           ('Infer it. What is Tarek’s point about rate?', 'that a habit a person has occasionally, a system has every time'),
           ('Weigh it. Why does Samir say the sentence matters?', 'because in both refusals the embassy quoted it back'),
           ('Decide. What would you write down?', 'answers vary; a rule about undertakings is defensible whoever is drafting')],
 decision='Write the Ministry’s rule on undertakings in routine correspondence.',
 decision_steps=['Say what a routine acknowledgement may never contain.',
                 'Say who may add an expression of willingness, and on what authority.',
                 'Say whether the rule applies to human and system drafters alike.',
                 'Say how an outgoing note is checked against the rule.'],
 bank=['A routine acknowledgement may never …',
       'An expression of willingness may be added only by …',
       'The rule applies to …',
       'Outgoing notes are checked by …',
       'This is reviewed …'],
 outcome='The Ministry wrote one line into the drafting handbook: no outgoing note may offer '
         'assistance, express willingness or welcome a proposal unless the instruction says so '
         'in those words. It applies to every drafter. In the first six months the line was '
         'invoked eleven times, nine of them against notes drafted by people. Karim notes that '
         'this supports his reading rather than Tarek’s; Tarek agrees, and says the rule was '
         'still worth writing and that he would not have thought to write it without the '
         'machine draft.',
 outcome_q=[('How many times was the rule invoked, and against whom?', 'eleven times, nine of them against notes drafted by people'),
            ('What does Tarek concede, and what does he maintain?', 'that the figures support Karim, and that the machine draft is why anybody wrote the rule')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Acknowledge their note',
 task=['This is the tasking that produced note three, typed into the drafting system in about '
       'twenty seconds on a Wednesday morning.',
       'It is a perfectly normal instruction, of the kind given a hundred times a week in '
       'every ministry, and it has no content in it at all.'],
 draft=['Acknowledge the Verenian note on the cultural centre.',
        'Use our usual form.',
        'Keep it short and courteous.',
        'Reference their note properly.',
        'Make sure it reads like us.',
        'Out today if possible.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines about the subject and the style, and not one about the content.',
 asked=['Receipt stated, no position taken',
        'The standing formulas, unvaried',
        'Nothing on the substance'],
 back=['A correct note in the house form',
       'Receipt acknowledged in paragraph 2',
       'An offer of assistance nobody authorised'],
 gap='"Acknowledge" names the subject but not what the note may contain, "our usual form" is '
     'not a named form, "short and courteous" is a style instruction, and "make sure it reads '
     'like us" is an instruction to reproduce the Ministry’s habits, which is where the '
     'offer came from.',
 back_cap='A note nobody could fault, carrying a sentence nobody had decided to send.',
 back_note='Instruction five is the one that produced the problem. Reading like the Ministry '
           'means including what the Ministry usually includes.',
 diagnosis=[('[1] "acknowledge the note" — and how much else may it say?', 'unbounded quantity'),
            ('[2] "our usual form" — which form, as it stands where?', 'unscoped set'),
            ('[3] "short and courteous" — how short, and courteous how?', 'unbounded quantity'),
            ('[4] "reference their note properly" — by number, date or both?', 'unstated criterion'),
            ('[5] "make sure it reads like us" — including our habits?', 'unstated criterion'),
            ('[6] "out today if possible" — cleared by whom before it goes?', 'unscoped set')],
 rewrite='Rewrite the tasking so that it says what the note may contain and what it may not.',
 scaffold=['What the note does, and what position it takes',
           'Which part of the matter is covered and who holds the rest',
           'The incoming note and the standing form to work from',
           'What each paragraph may contain, and what is forbidden',
           'What comes back, with what number, cleared by whom',
           'What to do where the standing form has no wording'],
 bank=['Acknowledge … without taking any position on …',
       'Cover … only; … is out of scope and is with …',
       'Work from … and the standing form for …',
       'Produce … paragraphs; use the formulas exactly … ; paragraph … to state … ; no offer, no …',
       'Return 1 note with … , for clearance by …',
       'Where the standing form has no wording … , … rather than …'],
 check=['Does it state what position the note takes?',
        'Is the standing form named rather than called usual?',
        'Are offers and undertakings expressly forbidden?',
        'Is composing new wording referred upward?'],
 model=['Acknowledge the Verenian embassy’s note No. 114 of 3 March without taking any position on the proposal in it',
        'Receipt only; the substance of the cultural centre is out of scope and is with Legal',
        'The embassy’s note No. 114 and the Ministry’s standing form for acknowledgements',
        '3 paragraphs; the opening and closing formulas exactly as they stand in the standing form, with no variation; paragraph 2 to state receipt and nothing else; no offer, no undertaking and no expression of willingness',
        '1 note verbale with a reference number, for clearance by Protocol the same day',
        'Where the standing form has no wording for a case of this kind, leave the paragraph blank and refer it to Protocol rather than composing new wording'],
 cost='1 note stopped in the outgoing tray, a search of 4 years of correspondence, and 2 '
      'earlier notes found that had been quoted back at the Ministry by an embassy.'),

rev_fig=figs.split('THE PRESENT PASSIVE',
                   'Wrong',
                   ['The note is send today.',
                    'The request has acknowledged.',
                    'Notes are number on dispatch.',
                    'Non-papers is not signed.'],
                   'Right',
                   ['The note is sent today.',
                    'The request is acknowledged.',
                    'Notes are numbered on dispatch.',
                    'Non-papers are not signed.']),
rev_fig_cap='Four passives, and the commonest error in each.',
rev=dict(
 read=[('A note verbale is written in', ['the first person', 'the third person', 'the second person', 'any person'], 1),
       ('The opening and closing formulas are', ['decorative', 'empty on purpose', 'confidential', 'optional'], 1),
       ('The warm sentence came from', ['an invention', 'the Ministry’s own habit', 'the embassy', 'Legal'], 1),
       ('In the Decision Room, how many premature offers were found in four years?', ['two', 'nine', 'two hundred', 'none'], 1)],
 listen_text='Give routine correspondence to a system, because the form is fixed and the '
             'Ministry has thousands of its own examples. Then instruct on content, not only '
             'on subject, because the sentence that causes trouble is usually your own habit '
             'arriving uninvited. And protect the formula absolutely, because a departure from '
             'it is a signal the service uses deliberately.',
 listen=[('The form is fixed and the Ministry has thousands of its own ____________.', 'examples'),
         ('Instruct on ____________, not only on subject.', 'content'),
         ('Your own habit arriving ____________.', 'uninvited'),
         ('A departure from it is a ____________.', 'signal')],
 speak=['Name a routine letter your office sends and say what it may never contain.',
        'Say who may add an offer of assistance to it.'],
 write='Write one instruction that names the content of a routine letter.',
 vocab=[('The formal greeting that opens a third-person note is ____________.', 'compliments'),
        ('An unsigned text circulated without attribution is a ____________.', 'non-paper'),
        ('The document by which an ambassador is accredited is a ____________.', 'letter of credence'),
        ('The order in which states rank on an occasion is ____________.', 'precedence'),
        ('A document sent inside another document is an ____________.', 'enclosure')],
 gram=[('The note ____________ (send) to the embassy today.', 'is sent'),
       ('The request ____________ (acknowledge) in paragraph one.', 'is acknowledged'),
       ('Notes ____________ (number) on dispatch.', 'are numbered'),
       ('The file ____________ (keep) in the registry.', 'is kept'),
       ('Enclosures ____________ (list) at the foot of the note.', 'are listed')]),

found=['Find a fixed form of words in your office and read it closely.',
       'Say what a departure from it would signal.',
       'Write one instruction that names content as well as subject.',
       'Search your outgoing file for a sentence that offers something.'],
end_line='The form carried our own habit in it, and our habit is not a decision.',
end_next='Next: A First Draft, Not a Translation',
)
