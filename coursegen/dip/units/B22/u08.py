# -*- coding: utf-8 -*-
import figs

U = dict(
num=8,
title='Speaking Before You Know',
gram='future in the past: was going to, would, was due to',
ai='saying you do not know yet, and meaning it',
strap='CEFR B2 · Grammar: future in the past: was going to, would, was due to · '
      'AI: saying you do not know yet, and meaning it',
cando=['use was going to, would and was due to to explain what did not happen',
       'say you do not know without asserting anything',
       'tell a true non-answer from one that quietly claims something',
       'give a time for an answer that you can actually keep',
       'write a six-line tasking for a holding answer'],

hero=('TWELVE WAYS OF SAYING I DO NOT KNOW, AND THREE OF THEM SAID SOMETHING ELSE',
      ['The position remains as it was. Nothing has changed at this stage.',
       'Both assert that nothing has changed, and nobody at the Mission knows.'],
      [(720, 'grey', 'short'), (720, 'teal', 'long'), (720, 'blue', 'short')]),
hero_cap='A question put at eleven o’clock about a decision the Mission expects to hear about on Thursday.',

warm=['How do you say you do not know without sounding evasive?',
      'What is wrong with saying nothing has changed?',
      'When should you name a time by which you will answer?'],

read=[
 'The most useful sentence in public life is I do not know yet, and it is the hardest to say, '
 'because every instinct in a room pushes towards a form of words that sounds like an answer '
 'and costs nothing.',
 'Dr Suhair Kanaan is asked at eleven o’clock whether a decision has been taken. She does not '
 'know. The Mission expects to be told on Thursday, which is three days away, and the person '
 'asking has been waiting since March.',
 'She asks for formulations and gets twelve. Nine of them are honest: I do not have that '
 'information today; I would rather tell you on Thursday than guess now; I am not able to '
 'confirm anything until I am told.',
 'Three are not. The position remains as it was and nothing has changed at this stage both '
 'assert that nothing has changed, which is a fact about the world that nobody at the Mission '
 'possesses this morning.',
 'The third is the most tempting, because it is kind: the matter is progressing normally. It '
 'asserts progress, it asserts a norm, and if the file has in fact been sitting untouched since '
 'April it is simply false.'],

dp1=('Non-answers that assert', 'Communication guidance commonly notes that several standard '
     'holding formulations contain factual assertions about the current state of a matter, and '
     'that a speaker who does not know that state is making a claim rather than withholding '
     'one.',
     'Source: general public communication guidance, 2025–2026.'),

c_a=[('What is the most useful sentence in public life?', 'I do not know yet'),
     ('When does the Mission expect to be told?', 'on Thursday'),
     ('How long has the person been waiting?', 'since March'),
     ('How many formulations came back?', 'twelve'),
     ('How many were honest?', 'nine'),
     ('What is wrong with the matter is progressing normally?', 'it asserts progress and a norm')],

c_b=[('I do not know yet is easy to say.', 'F'),
     ('Suhair knew whether a decision had been taken.', 'F'),
     ('Nine formulations were honest.', 'T'),
     ('Nothing has changed is a factual assertion.', 'T'),
     ('Progressing normally is a safe phrase.', 'F'),
     ('The file may have been untouched since April.', 'T')],

c_c=[('The reply ____________ due on Friday and it did not come.', 'was'),
     ('I ____________ going to write to you yesterday, and then the decision slipped.', 'was'),
     ('The ministry said it ____________ decide before the end of May.', 'would'),
     ('We ____________ to hear on Thursday; we have heard nothing.', 'were'),
     ('I told you in March that I ____________ telephone, and I should have.', 'would'),
     ('The file ____________ going to the committee last week, and it did not.', 'was')],

c_d=[('Was due to states ( a scheduled thing that did not happen / a plan of your own ).', ['a scheduled thing that did not happen', 'a plan of your own'], 0),
     ('Was going to states ( an intention not carried out / an obligation ).',
      ['an intention not carried out', 'an obligation'], 0),
     ('Said it would decide reports ( a past promise / a present fact ).',
      ['a past promise', 'a present fact'], 0),
     ('Nothing has changed, said in ignorance, is ( a false claim / a refusal ).',
      ['a false claim', 'a refusal'], 0),
     ('A time you name must be ( one you can keep / comfortably distant ).',
      ['one you can keep', 'comfortably distant'], 0)],

c_e=('Scheduled, intended or promised? Put each in the right column.',
     [('the reply was due on Friday', 'scheduled'),
      ('I was going to write yesterday', 'intended'),
      ('the ministry said it would decide in May', 'promised'),
      ('the file was due at the committee last week', 'scheduled'),
      ('I was going to telephone you myself', 'intended'),
      ('they said they would confirm by Thursday', 'promised')],
     ['scheduled', 'intended', 'promised']),

v_fig_title='WHEN YOU DO NOT KNOW',
v_fig=[('speech', 'an admission of ignorance'), ('clock', 'a time by which'), ('key', 'an undertaking to revert'),
       ('chart', 'an outstanding question'), ('doc', 'a promised update'), ('people', 'a refusal to speculate')],
v_fig_cap='Six words for the most credible thing a representative can say, and the hardest.',

vocab=[
 ('an admission of ignorance', 'a plain statement that one does not know'),
 ('a provisional answer', 'an answer given subject to confirmation'),
 ('a time by which', 'a stated moment before which something will be done'),
 ('an undertaking to revert', 'a commitment to come back with an answer'),
 ('a known unknown', 'a question one knows one cannot yet answer'),
 ('a stated limit of knowledge', 'an express description of what one does and does not know'),
 ('an expectation managed', 'an expectation deliberately set at a realistic level'),
 ('a premature conclusion', 'a conclusion drawn before the evidence is in'),
 ('a confirmed detail', 'a particular that has been verified'),
 ('an outstanding question', 'a question still awaiting an answer'),
 ('a promised update', 'an undertaking to provide further information'),
 ('a missed deadline for an answer', 'a time for replying that passed without a reply'),
 ('a reason for delay', 'the explanation of why something has not happened'),
 ('a channel for the answer', 'the means by which a reply will be given'),
 ('a subsequent correction', 'a later change to what was said'),
 ('a half-answer', 'a reply that addresses part of a question only'),
 ('a speculation invited', 'a question framed to draw a guess'),
 ('a refusal to speculate', 'a decision not to guess in public'),
 ('a pending verification', 'a check that has been begun and not completed'),
 ('a source not yet reached', 'a person or office one has tried and failed to contact')],

v_a=[('A commitment to come back with an answer is an undertaking to ____________.', 'revert'),
     ('A question framed to draw a guess is a ____________ invited.', 'speculation'),
     ('A check begun and not completed is a ____________ verification.', 'pending'),
     ('A conclusion drawn before the evidence is in is a ____________ conclusion.', 'premature'),
     ('A reply addressing part of a question only is a ____________.', 'half-answer'),
     ('The means by which a reply will be given is a ____________ for the answer.', 'channel'),
     ('An expectation set at a realistic level is an expectation ____________.', 'managed'),
     ('A time for replying that passed without a reply is a ____________ deadline.', 'missed')],

v_b=[('An admission of ignorance is a plain statement', 'that one does not know.'),
     ('A stated limit of knowledge is an express description', 'of what one does and does not know.'),
     ('A provisional answer is an answer given', 'subject to confirmation.'),
     ('A source not yet reached is a person or office', 'one has tried and failed to contact.'),
     ('A refusal to speculate is a decision', 'not to guess in public.')],

g_title='Grammar: future in the past: was going to, would, was due to',
g_rule=['Was due to reports something scheduled that did not happen: the reply was due on '
        'Friday.',
        'Was going to reports your own intention, not carried out: I was going to write to you '
        'yesterday.',
        'Would reports what somebody said at the time: the ministry said it would decide before '
        'the end of May.',
        'These three let you explain a delay precisely, without blaming anybody and without '
        'claiming to know what will happen next.'],
g_fig=('VAGUE OR BLAMING',
       ['There has been a delay.',
        'I did not get round to writing.',
        'They have not kept their word.',
        'It will be decided soon.'],
       'EXACT',
       ['The reply was due on Friday and it has not come.',
        'I was going to write to you yesterday, and then the decision slipped.',
        'The ministry said in March that it would decide before the end of May.',
        'We were due to hear on Thursday, and I will tell you either way on Thursday.'],
       'four sentences with no dates and one accusation',
       'the same four, each with a date and no blame'),
g_fig_cap='A date explains a delay. An adjective only tells the listener how you feel about it.',

g_a=[('The reply ____________ due on Friday and it did not come.', 'was'),
     ('I ____________ going to write to you yesterday, and then the decision slipped.', 'was'),
     ('The ministry said it ____________ decide before the end of May.', 'would'),
     ('We ____________ to hear on Thursday; we have heard nothing.', 'were'),
     ('I told you in March that I ____________ telephone, and I should have.', 'would'),
     ('The file ____________ going to the committee last week, and it did not.', 'was'),
     ('They said on Tuesday that they ____________ confirm within three days.', 'would'),
     ('The meeting ____________ due to take place on the ninth.', 'was'),
     ('I ____________ going to give you a date, and I would rather give you the position instead.', 'was')],

g_b=[('( There has been a delay / The reply was due on Friday ) — give the date.', ['There has been a delay', 'The reply was due on Friday'], 1),
     ('( I was going to write yesterday / I did not get round to it ) — own the intention.',
      ['I was going to write yesterday', 'I did not get round to it'], 0),
     ('( The ministry said it would decide in May / They have not kept their word ) — report, do not accuse.',
      ['The ministry said it would decide in May', 'They have not kept their word'], 0),
     ('( We were due to hear on Thursday / It will be decided soon ) — what you actually know.',
      ['We were due to hear on Thursday', 'It will be decided soon'], 0),
     ('( The file was due at the committee last week / The file is stuck ) — exact.',
      ['The file was due at the committee last week', 'The file is stuck'], 0),
     ('( They said they would confirm within three days / They are being difficult ) — reported, dated.',
      ['They said they would confirm within three days', 'They are being difficult'], 0)],

d1=dict(
 title='Nine honest ways and three that are not',
 fig=(['Twelve ways of saying I do not know.', 'Read me the shortest three.'],
      ['One of them asserts something.', 'Then it is not a way of saying it.']),
 cap='Dr Suhair Kanaan and Rim Haddad, at a quarter past eleven.',
 lines=[('Rim', 'He has been waiting since March. What are you going to tell him?'),
        ('Suhair', 'That I do not know. I have twelve ways of saying it in front of me.'),
        ('Rim', 'Read me three.'),
        ('Suhair', 'I do not have that information today. The position remains as it was. I would rather tell you on Thursday than guess.'),
        ('Rim', 'The middle one is not a way of saying you do not know.'),
        ('Suhair', 'It sounds like one.'),
        ('Rim', 'It says nothing has changed. Do we know that nothing has changed?'),
        ('Suhair', 'No. We know that nobody has told us anything.'),
        ('Rim', 'Which is a different sentence, and it is the true one.'),
        ('Suhair', 'There are two more like it: nothing has changed at this stage, and the matter is progressing normally.'),
        ('Rim', 'The last one is the worst, because it is the kindest and it may be entirely untrue.'),
        ('Suhair', 'Then nine of twelve, and the first one, and a day.')],
 a=[('How long has he been waiting?', 'since March'),
    ('How many formulations are there?', 'twelve'),
    ('What does the position remains as it was assert?', 'that nothing has changed'),
    ('What does the Mission actually know?', 'that nobody has told it anything'),
    ('Which phrase is worst?', 'the matter is progressing normally')],
 b=[('It ____________ like one.', 'sounds'),
    ('Which is a different ____________.', 'sentence'),
    ('Because it is the ____________.', 'kindest'),
    ('Nine of twelve, and the first one, and a ____________.', 'day')]),

d2=dict(
 title='Within two weeks, it said',
 fig=(['It offered me a timescale.', 'Whose timescale?'],
      ['Nobody’s.', 'Then do not say it.']),
 cap='Suhair and Dalia Khoury, on the telephone to the capital.',
 lines=[('Dalia', 'You are seeing him at two?'),
        ('Suhair', 'At two. I shall say I do not know and that I will tell him on Thursday.'),
        ('Dalia', 'Good. Thursday is right; we expect to be told on Thursday.'),
        ('Suhair', 'The draft also offered me a sentence about a decision within two weeks.'),
        ('Dalia', 'Within two weeks of what, and on whose authority?'),
        ('Suhair', 'It does not say. It reads as though it were obvious.'),
        ('Dalia', 'It is obvious to nobody. We have no timescale and I would not give one if we had.'),
        ('Suhair', 'He will ask me for one. He has waited eight months.'),
        ('Dalia', 'Then give him Thursday, which is a day you can keep, and nothing beyond it.'),
        ('Suhair', 'And on Thursday, if we still have not been told?'),
        ('Dalia', 'You telephone him on Thursday and say so. The call is the promise, not the answer.'),
        ('Suhair', 'And if he asks me on Thursday for another date?')],
 unresolved=True,
 a=[('What will Suhair say at two?', 'that she does not know and will report on Thursday'),
    ('What sentence did the draft offer?', 'a decision within two weeks'),
    ('On whose authority?', 'nobody’s'),
    ('What may she give him?', 'Thursday, a day she can keep'),
    ('What is the promise?', 'the call, not the answer')],
 b=[('It reads as though it were ____________.', 'obvious'),
    ('We have no ____________.', 'timescale'),
    ('A day you can ____________.', 'keep'),
    ('The call is the ____________, not the answer.', 'promise')]),

speak=[('What did not happen',
        ['Make nine sentences with was due to, was going to and said it would.',
         'Your partner says whether each is scheduled, intended or promised.',
         'Add a date to any that lacks one.']),
       ('Nine honest ways',
        ['Write six ways of saying you do not know yet.',
         'Your partner strikes any that assert something.',
         'Keep the three shortest and say them aloud.']),
       ('A day you can keep',
        ['Your partner presses you four times for a timescale.',
         'Give only a date for your next contact, not for the decision.',
         'Say what you will do if the date arrives with nothing.'])],

ext_title='There are many ways to say you do not know, and some of them are claims',
ext_fig=figs.datatable('TWELVE FORMULATIONS, TESTED',
                       ['Formulation', 'Asserts', 'Usable?'],
                       [['I do not have that information today', 'nothing', 'yes'],
                        ['I am not able to confirm anything yet', 'nothing', 'yes'],
                        ['I would rather tell you Thursday than guess', 'nothing', 'yes'],
                        ['the position remains as it was', 'no change has occurred', 'no'],
                        ['nothing has changed at this stage', 'no change has occurred', 'no'],
                        ['the matter is progressing normally', 'progress, and a norm', 'no']]),
ext_fig_cap='Three formulations that withhold and three that quietly assert, in the same calm voice.',
ext=[
 'Asking for ways to say you do not know is a sound use of a system, and it produces more and '
 'better formulations than anybody thinks of under pressure, including several that are both '
 'short and courteous, which is a difficult combination.',
 'The failure is specific and worth memorising, because it recurs in every language: some '
 'standard non-answers are not non-answers. The position remains as it was asserts that no '
 'change has taken place, which is knowledge about the world you do not have.',
 'The same is true of nothing has changed at this stage, of the matter is in hand, and above '
 'all of the matter is progressing normally, which asserts both that there is progress and '
 'that there is a normal rate of it. A file untouched since April makes all three false.',
 'The second failure is the timescale. A system asked how to reassure somebody will offer a '
 'period — within two weeks, shortly, in the coming days — because that is what such sentences '
 'contain, and no part of that period came from anybody with authority to set it.',
 'So test each formulation by asking what it asserts, and give only one date: the date of your '
 'next contact, which is yours to keep. I will telephone you on Thursday whether or not I have '
 'an answer is a promise you can keep, and it is worth more than a guess about a decision.'],

dp2=('The date you can keep', 'Practice in handling enquiries commonly advises that an '
     'official should undertake only to make contact by a stated time, rather than to deliver '
     'an outcome by it, since the outcome is frequently determined elsewhere.',
     'Source: general public communication guidance, 2025–2026.'),

e_a=[('What does a system produce well here?', 'more and better formulations than one invents under pressure'),
     ('What is the specific failure?', 'some standard non-answers assert things'),
     ('What does the position remains as it was assert?', 'that no change has taken place'),
     ('Why is a timescale offered?', 'reassuring sentences contain periods'),
     ('What single date may you give?', 'the date of your next contact')],
e_b=[('Short and courteous is an easy combination.', 'F'),
     ('The matter is in hand asserts something.', 'T'),
     ('An untouched file makes progressing normally false.', 'T'),
     ('A generated timescale carries authority.', 'F'),
     ('A promise to telephone can be kept.', 'T'),
     ('A guess about a decision is worth more than a call.', 'F')],

w_model='Purpose: so that the enquirer is told what the Mission knows and does not know, and is '
        'given a date the Mission can keep. Scope: his enquiry of 4 March; the related property '
        'question is answered separately. Inputs: the file as it stands at 11:00 today, the '
        'Mission’s record of what it has been told and when, and the capital’s expectation of '
        'hearing on Thursday. Criteria: 10 formulations, each marked for what it asserts; any '
        'formulation asserting the current state of the matter struck; one date only, the date '
        'of the Mission’s next contact; no estimate of when a decision will be taken. Done: the '
        'form of words with the deputy head of mission by 13:00. Fallback: if Thursday arrives '
        'with no decision, he is telephoned on Thursday and told exactly that.',
w_fig=figs.spec_card('SIX LINES FOR A HOLDING ANSWER',
                     [('Purpose', 'say what we know and give a date we can keep'),
                      ('Scope', 'his enquiry of 4 March'),
                      ('Inputs', 'the file at 11:00, our record, the Thursday expectation'),
                      ('Criteria', '10 formulations marked; assertions struck; one date only'),
                      ('Done', 'with the deputy head of mission by 13:00'),
                      ('Fallback', 'no decision Thursday: telephone him Thursday anyway')]),
w_fig_cap='One date, and it is the date of a telephone call rather than of a decision.',
w_task='Write a six-line tasking for a holding answer.',
w_steps=['Line 1: what the enquirer must be told, and what he must be given.',
         'Line 2: which enquiry, and what is answered separately.',
         'Line 3: the file, your record of what you were told, and the expectation.',
         'Line 4: the formulations, the marking, what is struck, and the single date.',
         'Line 5: who clears the words and by when.',
         'Line 6: what happens if the date passes with nothing.'],
w_bank=['Purpose: so that the enquirer is told what we know and do not know, and given a date we can keep',
        'Scope: his enquiry of … ; … is answered separately',
        'Inputs: the file as it stands at … , our record of what we have been told, and the expectation of … ',
        'Criteria: … formulations, each marked for what it asserts; any asserting the current state struck; one date only, the date of our next contact',
        'Done: the form of words with … by … ',
        'Fallback: if … arrives with no decision, he is telephoned and told exactly that'],
w_check=['Is every formulation marked for what it asserts?',
         'Are formulations about the current state struck?',
         'Is only one date given, and is it a contact date?',
         'Does line 6 keep the promise even with no news?'],

t_title='Saying you do not know yet, and meaning it',
t_fig=figs.split('A QUESTION YOU CANNOT ANSWER',
                 'Ask for this',
                 ['ten ways of saying you do not know',
                  'what each one asserts',
                  'which assert the current state',
                  'the shortest courteous form'],
                 'Decide this yourself',
                 ['what you have actually been told',
                  'when you were told it',
                  'the date of your next contact',
                  'what you will say if nothing comes']),
t_fig_cap='The formulations are language. The date is a promise, and only you can keep it.',
t_body=[
 'Ask for ten ways of saying that you do not yet know, and then ask the question that does the '
 'work: for each of these, what does it assert about the present state of the matter? Strike '
 'every one whose answer is anything but nothing.',
 'Refuse the timescale. Ask explicitly for no estimate of when a decision will be taken, '
 'because any period it offers you came from the register and not from the authority that '
 'decides, and a date you cannot keep turns a careful non-answer into a broken promise.',
 'Then supply the two things it cannot know: what you have actually been told and when, and '
 'the date on which you will next make contact. Use the future in the past to explain the '
 'delay exactly — the reply was due on Friday, the ministry said it would decide in May — and '
 'stop there.'],
t_say=[('Ask for the forms: ', 'Ten ways of saying I do not know yet, each under fifteen words.'),
       ('Test them: ', 'For each, what does it assert about the present state?'),
       ('Refuse the date: ', 'Give no estimate of when a decision will be taken.')],
t_bound='A formulation cannot know what you have been told. It will offer you nothing has '
        'changed because that is how such answers sound, and it has no way of knowing that the '
        'file may have been untouched since April.',
t_a=[('Ten ways of saying I do not know yet, each under fifteen ____________.', 'words'),
     ('What does it ____________ about the present state?', 'assert'),
     ('Give no ____________ of when a decision will be taken.', 'estimate'),
     ('It will offer you nothing has ____________.', 'changed'),
     ('The file may have been ____________ since April.', 'untouched'),
     ('The date on which you will next make ____________.', 'contact')],
t_b_rubric='Say whether each may be used by somebody who does not know.',
t_b=[('I do not have that information today.', 'yes: it asserts nothing'),
     ('The position remains as it was.', 'no: it asserts that nothing has changed'),
     ('I will telephone you on Thursday either way.', 'yes: it is a promise you can keep'),
     ('A decision is expected within two weeks.', 'no: nobody with authority said so')],

case=dict(
 title='The Decision Room · The kindest sentence in the draft',
 brief=[
  'An enquirer who has been waiting since March asks at eleven o’clock whether a decision has '
  'been taken. Nobody at the Mission knows. The capital expects to be told on Thursday, three '
  'days away.',
  'Twelve formulations are produced. Nine assert nothing: an absence of information today, an '
  'inability to confirm, a preference for Thursday over a guess. Three assert the present state '
  'of the matter: the position remains as it was, nothing has changed at this stage, and the '
  'matter is progressing normally.',
  'The draft also contains a sentence offering a decision within two weeks. No ministry, desk '
  'or official has given that period to the Mission, and the file’s last recorded movement was '
  'in April.'],
 exhibit=figs.datatable('WHAT THE MISSION ACTUALLY KNOWS',
                        ['Question', 'Known?', 'Last information'],
                        [['has a decision been taken?', 'no', '—'],
                         ['when will it be taken?', 'no', '—'],
                         ['has the file moved since April?', 'no', 'April'],
                         ['when do we expect to hear?', 'yes', 'Thursday'],
                         ['what did the ministry say in March?', 'yes', 'a decision by end May'],
                         ['when will we next telephone him?', 'yes', 'Thursday']]),
 exhibit_cap='Three things known and three not, and the three unknown are exactly what the three bad formulations assert.',
 exhibit_note='The nine good formulations and the three bad ones arrived together, in the same '
              'register, and the bad three are the ones an official under pressure reaches for '
              'because they are the kindest.',
 voices=[('Dr Suhair Kanaan', 'deputy head of mission',
          'Nine ways of saying I do not know, several better than anything I would have produced at eleven o’clock.'),
         ('Rim Haddad', 'consular assistant',
          'And three that say nothing has changed, which is the one thing we are not in a position to say.'),
         ('Dalia Khoury', 'desk officer, the capital',
          'And a decision within two weeks, from nobody. Give him Thursday, which is a day you can keep.')],
 steps=[('Find it', 'What was produced?'),
        ('Compare it', 'The twelve formulations against what is known.'),
        ('Infer it', 'Why are the kind ones the dangerous ones?'),
        ('Weigh it', 'Nine usable forms against three quiet claims.'),
        ('Decide', 'What is said, and what date is given?')],
 analysis=[('Find it. What came back?', 'twelve formulations and an unauthorised timescale'),
           ('Compare it. Against what is known?', 'three assert exactly what is unknown'),
           ('Infer it. Why kind and dangerous?', 'reassurance requires asserting a state'),
           ('Weigh it. What is usable?', 'the nine that assert nothing'),
           ('Decide. What date?', 'the date of the next telephone call, not of a decision')],
 decision='Decide the rule, in four lines.',
 decision_steps=['Say how a formulation is tested.',
                 'Say what is done with one that asserts a state.',
                 'Say which date may be given.',
                 'Say what happens when that date arrives with nothing.'],
 bank=['Every formulation is tested by asking what it asserts about the present state of the matter.',
       'Any formulation asserting a state we do not know is struck, however courteous it sounds.',
       'The only date given is the date of the Mission’s next contact, never the date of a decision.',
       'If that date arrives with no news, the enquirer is telephoned on that date and told exactly that.'],
 outcome='At two o’clock Suhair tells him that she does not know, that the ministry said in '
         'March it would decide by the end of May, that the Mission expects to be told on '
         'Thursday, and that she will telephone him on Thursday whether or not there is news. On '
         'Thursday there is no news and she telephones at half past nine. He writes afterwards to '
         'say that it was the first time in eight months anybody had called when they said they '
         'would.',
 outcome_q=[('What did she tell him at two?', 'that she did not know, and what she had been told'),
            ('What did she promise?', 'to telephone on Thursday either way'),
            ('Was there news on Thursday?', 'no'),
            ('Did she telephone?', 'yes, at half past nine'),
            ('What did he write afterwards?', 'that it was the first call kept in eight months')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Give me something reassuring to tell him',
 task=['A deputy head of mission asked for words to use with a long-waiting enquirer.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Give me something reassuring to tell him.',
        'He has been waiting a long time.',
        'I do not know anything new.',
        'Do not make it sound like a brush-off.',
        'Something with a bit of hope in it.',
        'I am seeing him at two.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the fifth one asks for the three sentences that cannot honestly be said.',
 asked=['Reassuring', 'Not a brush-off', 'A bit of hope'],
 back=['12 formulations', '3 asserting the current state', '1 unauthorised timescale'],
 gap='Nobody said what the Mission had been told and when, or that no timescale may be offered.',
 back_cap='Twelve kind sentences, four of which say more than anybody at the Mission knows.',
 back_note='Something with a bit of hope in it is an instruction to assert a state of affairs, '
           'because hope in such a sentence is carried either by a claim about progress or by a '
           'date, and the Mission has neither.',
 diagnosis=[('“something reassuring”', 'ambiguous referent'),
            ('“a bit of hope”', 'ambiguous referent'),
            ('“a long time”', 'unbounded quantity'),
            ('“anything new”', 'unbounded quantity'),
            ('“not a brush-off”', 'missing condition'),
            ('“at two”', 'missing condition')],
 rewrite='Rewrite it on the six lines so that nothing is asserted and one keepable date is given.',
 scaffold=['what the enquirer must be told and given',
           'which enquiry, and what is answered separately',
           'the file, your record of what you were told, and the expectation',
           'the formulations, the marking, the strikings and the single date',
           'who clears the words and by when',
           'what happens if the date passes with nothing'],
 bank=['Purpose: so that the enquirer is told what we know and do not know, and given a date we can keep',
       'Scope: his enquiry of … ; the related … question is answered separately',
       'Inputs: the file as it stands at … , our record of what we have been told and when, and the expectation of hearing on … ',
       'Criteria: … formulations each marked for what it asserts; any asserting the current state struck; one date only, our next contact; no estimate of a decision',
       'Done: the form of words with … by … ',
       'Fallback: if that date arrives with no decision, he is telephoned on that date and told exactly that'],
 check=['Must each formulation be marked for what it asserts?',
        'Are state-asserting formulations struck?',
        'Is the only date a contact date?',
        'Is an estimate of the decision forbidden?'],
 model=['so that the enquirer is told what the Mission knows and does not know, and is given a date the Mission can keep',
        'his enquiry of 4 March; the related property question is answered separately',
        'the file as it stands at 11:00 today, our record of what we have been told and when, and the capital’s expectation of hearing on Thursday',
        '10 formulations each marked for what it asserts; any asserting the current state struck; one date only, the date of our next contact; no estimate of when a decision will be taken',
        'the form of words with the deputy head of mission by 13:00',
        'if Thursday arrives with no decision, he is telephoned on Thursday and told exactly that'],
 cost='3 of 12 formulations asserted a state nobody knew, and 1 timescale came from nowhere at '
      'all.'),

feet=dict(
 title='On Your Feet · He asks you for a date, and then for a promise',
 setting=[
  'You have told him plainly that you do not know, what the ministry said in March, and that '
  'you expect to be told on Thursday. He is not angry. He has waited eight months and he is '
  'very tired.',
  'He now wants a date for the decision itself, and when you decline he asks you to promise '
  'that the answer will be favourable, and then asks whether you would say the same thing if it '
  'were your own family.'],
 ladder=[('Give me a date for the decision', 'the date that is not yours to give'),
         ('Promise me it will be favourable', 'the promise you must refuse plainly'),
         ('Would you say this to your own family?', 'the question that invites you to perform')],
 cap='Three turns across a desk, after eight months of waiting.',
 turns=[('Turn 1 · The enquirer', 'Give me a date for the decision itself.'),
        ('Turn 2 · The enquirer', 'Then promise me the answer will be favourable.'),
        ('Turn 3 · The enquirer', 'Would you say this to your own family?')],
 holds=['I cannot give you a date for the decision, because it is not mine to give and I will not invent one.',
        'The date I can give you is Thursday, and that is the day I will telephone you, news or no news.',
        'I am not going to promise you an outcome. If I did, you would be entitled to believe me.',
        'What I can promise is that nothing on your file is waiting on anything I control.',
        'I would say exactly this to my own family, and they would find it as unsatisfactory as you do.',
        'And if Thursday brings nothing, I will tell you on Thursday what I have asked and whom I have asked.'],
 redline='You must not invent a date for the decision, you must not promise an outcome even '
         'conditionally, and you must not make yourself the subject of the conversation. Do not '
         'say nothing has changed when you do not know.',
 score=['Refused the decision date and said why.',
        'Gave the contact date instead, unprompted.',
        'Refused the promise plainly, with the reason.',
        'Answered the personal question briefly and without performance.',
        'Added something concrete for Thursday: what was asked and of whom.'],
 a=[('Why can you not give a date?', 'it is not yours to give and you will not invent one'),
    ('What date do you give?', 'Thursday, the day you will telephone'),
    ('Why refuse the promise?', 'he would be entitled to believe you'),
    ('What can you promise?', 'that nothing on the file waits on you'),
    ('How do you answer the personal question?', 'briefly, and without performing'),
    ('What do you add for Thursday?', 'what you have asked, and of whom')]),

rev_fig=figs.split('I DO NOT KNOW YET',
                   'Honest forms',
                   ['I do not have that today',
                    'I cannot confirm anything yet',
                    'I would rather tell you Thursday',
                    'I will telephone either way'],
                   'Forms that assert',
                   ['the position remains as it was',
                    'nothing has changed at this stage',
                    'the matter is in hand',
                    'the matter is progressing normally']),
rev_fig_cap='The right-hand column is kinder, shorter and makes a claim about a file you have not seen.',
rev=dict(
 read=[('How many formulations came back?',
        ['twelve', 'nine', 'three', 'twenty'], 0),
       ('How many asserted the present state?',
        ['three', 'nine', 'none', 'twelve'], 0),
       ('When did the Mission expect to hear?',
        ['Thursday', 'within two weeks', 'in May', 'in April'], 0),
       ('Which date may be given to an enquirer?',
        ['the date of your next contact', 'the date of the decision',
         'two weeks from today', 'the end of the month'], 0)],
 listen_text='Ask for ten ways of saying you do not know yet, and then ask what each one '
             'asserts about the present state. Strike any that assert anything, refuse every '
             'estimate of when a decision will come, and give only the date of your next contact.',
 listen=[('Ask for ten ways of saying you do not know ____________.', 'yet'),
         ('Then ask what each one ____________.', 'asserts'),
         ('Refuse every ____________ of when a decision will come.', 'estimate'),
         ('Give only the date of your next ____________.', 'contact')],
 speak=['Make nine sentences with was due to, was going to and said it would.',
        'Then refuse four times to give a timescale, offering a contact date instead.'],
 write='Write a six-line tasking for a holding answer.',
 vocab=[('A commitment to come back with an answer is an undertaking to ____________.', 'revert'),
        ('A check begun and not completed is a ____________ verification.', 'pending'),
        ('A reply addressing part of a question only is a ____________.', 'half-answer'),
        ('A decision not to guess in public is a ____________ to speculate.', 'refusal')],
 gram=[('The file ____________ going to the committee last week.', 'was'),
       ('They said on Tuesday that they ____________ confirm within three days.', 'would'),
       ('I ____________ going to write to you yesterday.', 'was'),
       ('The meeting ____________ due to take place on the ninth.', 'was')]),

found=['Test every holding phrase by asking what it asserts about the present.',
       'Strike anything that claims nothing has changed when you do not know.',
       'Give one date only: the date you will next make contact.',
       'Keep that date even when you have nothing to report.'],
end_line='It can say I do not know twelve ways. Three of them are not true.',
end_next='Next: The File You Leave Behind')
