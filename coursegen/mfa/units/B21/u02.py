# -*- coding: utf-8 -*-
import figs

U = dict(
num=2, title='Before It Enters the Brief',
gram='attribution: according to, on the basis of, citing',
ai='verifying a claim before it enters a brief',
strap='CEFR B2 · Grammar: attribution · AI: verification before entry',
cando=['attribute a claim with according to, on the basis of and citing',
       'distinguish two independent sources from two reports of one source',
       'trace a claim back through the chain of reporting to its origin',
       'decide what must be done before a claim may enter a brief',
       'write a verification rule that survives a busy afternoon'],
hero=('TWO SOURCES, ONE SOURCE',
      ['Two agencies reported it independently, four hours apart.',
       'Both were reading the same Oristani evening bulletin.'],
      [(730, 'teal', 'long'), (1390, 'orange', 'short'),
       (2050, 'blue', 'long'), (2690, 'purple', 'short')]),
hero_cap='Policy Planning, tracing a claim backwards on a Friday afternoon.',

warm=['How many sources does a claim need before you would put it in writing?',
      'How would you tell whether two reports are really independent?',
      'What is the most confident wrong thing you have been told at work?'],
read=[
 'In March the Ministry’s morning brief carried a sentence that Oristan had moved two '
 'battalions towards its northern border. The sentence was attributed, as the rules require, '
 'to two independent sources: a regional wire agency and a foreign broadsheet, four hours '
 'apart.',
 'Dr Hana Mourad had written the two-source rule herself in January. A claim with one source '
 'is reported as a claim; a claim with two independent sources may be stated. The rule was '
 'short, it was understood, and it was followed.',
 'On the Friday the Oristani ambassador asked the Ministry where the report had come from. '
 'Tracing it took an afternoon. The broadsheet cited the wire agency. The wire agency cited '
 'an Oristani evening bulletin of the previous day. The bulletin cited an unnamed official. '
 'No other trace of the movement existed anywhere.',
 'What the Ministry had was not two sources. It was one source and two reports of it, which '
 'is a different thing and looks identical in a footnote. A chain of three steps had become '
 'two independent confirmations by the simple process of each step not naming where it got '
 'the claim.',
 'Hana rewrote the rule in April. Two sources count as independent only where neither can be '
 'traced to the other and neither can be traced to a common origin; and where the chain '
 'cannot be traced at all, the claim is reported as a claim whatever the number of outlets '
 'carrying it. She says the first version of the rule was not wrong in principle. It was '
 'written as though counting were the hard part.'],
c_a=[('What did the March brief state?', 'that Oristan had moved two battalions towards its northern border'),
     ('How was it attributed?', 'to two independent sources, a wire agency and a foreign broadsheet'),
     ('What did Hana’s January rule say?', 'one source is reported as a claim; two independent sources may be stated'),
     ('What did tracing reveal?', 'the broadsheet cited the agency, the agency cited an Oristani bulletin, the bulletin an unnamed official'),
     ('What did the Ministry actually have?', 'one source and two reports of it'),
     ('What does the April rule add?', 'that neither source may be traceable to the other or to a common origin')],
c_b=[('The two reports appeared four hours apart.', 'T'),
     ('Hana wrote the original two-source rule.', 'T'),
     ('The broadsheet had its own source.', 'F'),
     ('Another trace of the movement existed.', 'F'),
     ('The April rule counts outlets rather than origins.', 'F'),
     ('Hana says the January rule was wrong in principle.', 'F')],
c_c=[('The sentence was ____________, as the rules require.', 'attributed'),
     ('The bulletin cited an ____________ official.', 'unnamed'),
     ('One source and two ____________ of it.', 'reports'),
     ('A chain of three ____________ had become two independent confirmations.', 'steps'),
     ('Neither can be traced to a common ____________.', 'origin'),
     ('It was written as though ____________ were the hard part.', 'counting')],
c_d=[('The Ministry had ( one source twice / two sources ).', ['one source twice', 'two sources'], 0),
     ('How long did tracing the claim take?', ['ten minutes', 'an afternoon', 'a week', 'four hours'], 1),
     ('Who asked where the report came from?', ['the Minister', 'the Oristani ambassador', 'the agency', 'Hana'], 1),
     ('What does the April rule require?', ['three sources', 'that the chain be traceable and separate', 'more outlets', 'faster checking'], 1),
     ('What does Hana say the January rule assumed?', ['too much time', 'that counting was the hard part', 'bad faith', 'too few sources'], 1)],
c_e=('Independent sources or one source reported twice? Put each in the right column.',
     [('two agencies, each citing the same bulletin', 'one source'),
      ('a gazette notice and a customs figure', 'independent'),
      ('a broadsheet citing a wire agency', 'one source'),
      ('dated imagery and a port authority limit', 'independent'),
      ('two outlets both citing an unnamed official', 'one source'),
      ('a parliamentary record and a court listing', 'independent')],
     ['independent', 'one source']),

v_fig_title='TRACING A CLAIM BACKWARDS',
v_fig=[('doc', 'a chain of reporting'), ('bulb', 'a circular report'), ('key', 'a named source'),
       ('shield', 'an authenticated document'), ('pin', 'a retraction'), ('book', 'a correction notice')],
v_fig_cap='Six words for the apparatus of finding out where a claim began.',
vocab=[
 ('attribution', 'the naming of where a statement comes from'),
 ('to attribute', 'to name the source a statement comes from'),
 ('a single source', 'one origin, however many outlets carry it'),
 ('an independent source', 'an origin that does not depend on another already counted'),
 ('a chain of reporting', 'the series of steps by which a claim reached you'),
 ('a circular report', 'a claim that returns to you as confirmation of itself'),
 ('a translation error', 'a change of meaning introduced in rendering a text'),
 ('a misquotation', 'words given as somebody’s that are not what they said'),
 ('a retraction', 'a published withdrawal of an earlier report'),
 ('a correction notice', 'a published statement that an earlier report was wrong'),
 ('an anonymous source', 'an origin whose identity is withheld by the reporter'),
 ('a named source', 'an origin identified by name and position'),
 ('a leaked document', 'a document made public without its holder’s authority'),
 ('an authenticated document', 'a document shown by some means to be what it claims'),
 ('a forgery', 'a document made to pass as another’s'),
 ('a watermark', 'a mark in paper or image used to show origin'),
 ('a letterhead', 'the printed heading identifying the sender of a letter'),
 ('a counter-signature', 'a second signature confirming the first'),
 ('a signature block', 'the lines giving the name and office of a signatory'),
 ('a dated stamp', 'an impression recording when a document was received')],
v_a=[('A claim that returns to you as confirmation of itself is a ____________.', 'circular report'),
     ('An origin that does not depend on another already counted is an ____________.', 'independent source'),
     ('The series of steps by which a claim reached you is a ____________.', 'chain of reporting'),
     ('A published withdrawal of an earlier report is a ____________.', 'retraction'),
     ('A document made to pass as another’s is a ____________.', 'forgery'),
     ('A second signature confirming the first is a ____________.', 'counter-signature'),
     ('An impression recording when a document was received is a ____________.', 'dated stamp'),
     ('Words given as somebody’s that are not what they said are a ____________.', 'misquotation')],
v_b=[('Attribution is the naming of where', 'a statement comes from.'),
     ('A single source is one origin,', 'however many outlets carry it.'),
     ('An anonymous source is an origin', 'whose identity is withheld by the reporter.'),
     ('An authenticated document is a document shown', 'by some means to be what it claims.'),
     ('A signature block is the lines giving', 'the name and office of a signatory.')],

g_title='Grammar: attribution',
g_rule=['According to X introduces a claim and does not endorse it.',
        'On the basis of X introduces the evidence the writer himself relies on.',
        'Citing X marks what the source itself rested on: the agency, citing a bulletin.',
        'Attribute at the point of the claim, not in a footnote at the end.'],
g_fig=('LOOSE',
       ['Oristan has moved two battalions.',
        'Reports say troops have moved.',
        'It is widely reported that the border is reinforced.',
        'Sources confirm the movement.'],
       'PRECISE',
       ['According to a regional wire agency of 12 March, Oristan has moved two battalions.',
        'On the basis of dated imagery of 14 March, no new deployment is visible.',
        'A foreign broadsheet, citing that agency, repeated the claim on 13 March.',
        'No source independent of the 11 March bulletin has been found.'],
       'four claims with the origin removed',
       'four claims, each with its origin and date'),
g_fig_cap='Confirm is the most dangerous verb in a brief; it hides how many origins there were.',
g_a=[('____________ to a wire agency of 12 March, two battalions have moved.', 'According'),
     ('On the ____________ of dated imagery, no deployment is visible.', 'basis'),
     ('A broadsheet, ____________ that agency, repeated the claim.', 'citing'),
     ('No source ____________ of the bulletin has been found.', 'independent'),
     ('____________ to the official gazette, the tender was published in April.', 'According'),
     ('The bulletin, ____________ an unnamed official, gave no document.', 'citing'),
     ('On the basis ____________ the port’s published limits, 14 metres exceeds requirement.', 'of'),
     ('The claim is ____________ to a single origin.', 'traceable'),
     ('Two outlets ____________ the same bulletin are one source.', 'citing')],
g_b=[('According to ( endorses / does not endorse ) a claim.', ['endorses', 'does not endorse'], 1),
     ('____ to a wire agency, two battalions have moved.', ['On the basis', 'According', 'Citing', 'Following'], 1),
     ('____ the basis of dated imagery, nothing is visible.', ['In', 'On', 'At', 'By'], 1),
     ('Which marks what the source itself rested on?', ['according to', 'citing', 'on the basis of', 'reportedly'], 1),
     ('Attribution belongs', ['in a footnote', 'at the point of the claim', 'in the annex', 'in the title'], 1),
     ('Which verb hides the number of origins?', ['cites', 'confirm', 'reports', 'states'], 1)],

d1=dict(title='Where did it come from?',
        fig=(['Two independent sources.', 'Both reading the same bulletin.'],
             ['Then we had one.', 'And we stated it as fact.']),
        cap='Dr Hana Mourad and Karim Dalati, late on the Friday.',
        lines=[('Karim', 'I have traced the battalion sentence. The broadsheet cites the wire '
                         'agency. The agency cites an Oristani evening bulletin of the eleventh. '
                         'The bulletin cites an unnamed official.'),
               ('Hana', 'And beyond the bulletin?'),
               ('Karim', 'Nothing. No imagery, no road closures, no notice, no second origin of '
                         'any kind. One unnamed official, three steps back.'),
               ('Hana', 'My rule said two independent sources. We had two outlets.'),
               ('Karim', 'Which your rule did not distinguish, and I did not notice either when '
                         'I read it in January.'),
               ('Hana', 'I wrote it in forty minutes because the alternative was no rule, and I '
                        'was pleased with how short it was.'),
               ('Karim', 'The shortness is why it was followed. A page of criteria would have '
                         'been ignored and we would have had the same sentence with no rule at '
                         'all.'),
               ('Hana', 'That is generous and it does not change the position. A brief of this '
                        'Ministry stated as fact that a neighbour had moved two battalions, on '
                        'the word of one person nobody can name.'),
               ('Karim', 'The ambassador asked politely, which tells you they know it is not '
                         'true.'),
               ('Hana', 'Or that it is true and they are surprised we know. Both are possible '
                        'and neither is the point. We did not have the evidence we said we had.'),
               ('Karim', 'So the rule needs one more clause.'),
               ('Hana', 'It needs one more clause and it has to stay short enough to be used on '
                        'a Thursday afternoon, which is the only time it ever matters.')],
        a=[('How many steps back does the claim go?', 'three, to an unnamed official'),
           ('What else was found?', 'nothing: no imagery, closures, notice or second origin'),
           ('What did the January rule fail to distinguish?', 'two outlets from two independent sources'),
           ('Why does Karim defend the short rule?', 'because a page of criteria would have been ignored'),
           ('What does Hana say the real position is?', 'that the Ministry did not have the evidence it said it had')],
        b=[('One unnamed official, three steps ____________.', 'back'),
           ('We had two ____________.', 'outlets'),
           ('The ____________ is why it was followed.', 'shortness'),
           ('Short enough to be used on a ____________ afternoon.', 'Thursday')]),
d2=dict(title='One more clause',
        fig=(['Add traceability.', 'And when nothing can be traced?'],
             ['Then it is a claim.', 'However many outlets carry it.']),
        cap='Hana and Samir Haddad, drafting the April rule.',
        lines=[('Samir', 'Your new clause says two sources count as independent only where '
                         'neither traces to the other or to a common origin.'),
               ('Hana', 'And where the chain cannot be traced at all, the claim is reported as a '
                        'claim.'),
               ('Samir', 'That second half will be the one that bites, because most chains '
                         'cannot be traced in the time available.'),
               ('Hana', 'Then most things will be reported as claims, which is what they are.'),
               ('Samir', 'The Minister’s office will say the brief has become a list of things '
                         'people are saying.'),
               ('Hana', 'Some weeks it will be. I would rather hand up a list of claims '
                        'correctly labelled than four statements, one of which is an unnamed '
                        'official in a neighbouring capital.'),
               ('Samir', 'I agree with the rule and I want to flag what it does not reach. A '
                         'claim can be traceable to two genuinely separate origins and still be '
                         'false, if somebody has placed it with both.'),
               ('Hana', 'Deliberately, you mean.'),
               ('Samir', 'Deliberately. Two independent outlets, two separate officials, one '
                         'instruction behind both. Your rule counts that as verified and I '
                         'cannot think of a clause that catches it.'),
               ('Hana', 'Nor can I. The only thing I can think of is noticing when a convenient '
                        'claim arrives twice in a week, and that is judgement rather than a '
                        'rule.'),
               ('Samir', 'Then let us write the rule we can write and record in the minute that '
                         'it does not reach placed material, so that nobody in four years '
                         'believes it does.'),
               ('Hana', 'Agreed, and I am uncomfortable signing a rule with a known hole in it.')],
        a=[('What does the new clause require?', 'that neither source traces to the other or to a common origin'),
           ('What happens where the chain cannot be traced?', 'the claim is reported as a claim'),
           ('What does Samir say the rule cannot reach?', 'a claim placed deliberately with two separate origins'),
           ('What does Hana offer instead?', 'noticing when a convenient claim arrives twice in a week, which is judgement'),
           ('How is the gap handled?', 'it is recorded in the minute so nobody later believes the rule covers it')],
        b=[('Reported as a ____________.', 'claim'),
           ('One ____________ behind both.', 'instruction'),
           ('That is ____________ rather than a rule.', 'judgement'),
           ('A rule with a known ____________ in it.', 'hole')],
        unresolved=True),

speak=[('Attribute it',
        ['Student A: make six claims about your field.',
         'Student B: ask for the origin of each.',
         'Rewrite each with according to, on the basis of or citing.']),
       ('Trace it back',
        ['Take a report you read this week.',
         'Say what it cites, and what that cites.',
         'Say how many origins you actually have.']),
       ('Two or one',
        ['In pairs, invent two reports of one event.',
         'Decide whether they are independent and say why.',
         'Say what would make you certain either way.'])],

ext_title='Counting sources is easy; establishing that they are independent is the work',
ext_fig=figs.datatable('THE BATTALION CLAIM, TRACED',
                       ['Step', 'Carried by', 'Cites'],
                       [['4', 'the Ministry’s morning brief', 'two independent sources'],
                        ['3', 'a foreign broadsheet, 13 March', 'the wire agency'],
                        ['2', 'a regional wire agency, 12 March', 'an Oristani bulletin'],
                        ['1', 'an Oristani evening bulletin, 11 March', 'an unnamed official'],
                        ['0', 'the unnamed official', '—'],
                        ['—', 'any other trace', 'none found']]),
ext_fig_cap='Four steps, one origin, and at step four it is described as two.',
ext=[
 'Every analytical unit has a rule about how many sources a claim needs before it may be '
 'stated rather than reported. The rules are short, they are followed, and they are almost '
 'all written as though the difficulty were counting. It is not. The difficulty is '
 'establishing that what you have counted are separate origins.',
 'The mechanism by which a chain becomes a confirmation is entirely ordinary and involves no '
 'bad faith at any step. An evening bulletin carries a claim from an official it does not '
 'name. A wire agency reports the bulletin, naming it. A foreign newspaper reports the '
 'agency, naming it. An analyst reads the newspaper and the agency, four hours apart, and has '
 'what looks exactly like two reports. Nothing in either document says that one is the other '
 'at a remove, because each has attributed honestly to the step immediately behind it.',
 'Verification capability has changed what is possible here, and this is one of the places '
 'where the gain is largest. Tracing a claim backwards through published material used to '
 'take an afternoon of telephone calls and often failed; it can now be done in minutes '
 'across languages, which means the question "does this reduce to one origin?" can actually '
 'be asked of every claim rather than of the ones somebody found suspicious.',
 'What follows is a two-part rule rather than a number. Two sources count as independent only '
 'where neither can be traced to the other and neither can be traced to a common origin. And '
 'where the chain cannot be traced at all, the claim is reported as a claim, whatever the '
 'number of outlets carrying it. The second half is harder to live with than the first, '
 'because it means a brief will often carry claims where the office would prefer statements.',
 'One gap remains and honest units record it. Two genuinely separate origins can both carry a '
 'claim that is false, where somebody has placed it with each of them. No counting rule '
 'reaches that. What reaches it is an analyst noticing that a convenient claim has arrived '
 'twice in a week, which is judgement, and judgement is not improved by pretending the rule '
 'covers it.'],
dp1=('Verification practice',
     'Analytical units in several foreign services tightened source-independence requirements '
     'in 2025 after automated tracing showed that a substantial share of multiply-reported '
     'claims reduced to a single origin.',
     'Source: reported practice in diplomatic verification, 2025–2026.'),
e_a=[('What do most source rules assume is difficult?', 'counting, rather than establishing independence'),
     ('How does a chain become a confirmation?', 'each step attributes honestly to the step behind it, so nothing shows the reduction'),
     ('What has verification capability changed?', 'tracing backwards across languages now takes minutes rather than an afternoon'),
     ('What is the two-part rule?', 'independence requires no trace to each other or a common origin; an untraceable chain is a claim'),
     ('What gap remains?', 'a claim placed deliberately with two genuinely separate origins')],
e_b=[('The difficulty in source rules is counting.', 'F'),
     ('A chain becomes a confirmation through bad faith.', 'F'),
     ('Tracing can now be done across languages in minutes.', 'T'),
     ('The second half of the rule is the easier to live with.', 'F'),
     ('A counting rule catches placed material.', 'F'),
     ('Honest units record the remaining gap.', 'T')],

w_model=(
 'Purpose: establish whether the claim that Oristan has moved 2 battalions reduces to a single '
 'origin, so that the brief can state it or report it correctly. Scope: every published '
 'carrier of the claim from 10 to 14 March in any language; commentary that does not itself '
 'carry the claim is out of scope. Inputs: the 2 reports held, and published material '
 'traceable from them. Criteria: for each carrier give its date and what it cites; set out the '
 'chain in order to its earliest identifiable origin; state whether any 2 carriers are '
 'independent of each other and of a common origin; do not treat an unnamed official as an '
 'origin that can be counted. Done: 1 chain of attribution, 1 page, with a stated finding of '
 'single or multiple origin, within 3 hours. Fallback: where the chain cannot be traced to an '
 'origin, say so and report the claim as a claim whatever the number of carriers.'),
w_fig=figs.spec_card('THE TASKING FOR A VERIFICATION',
                     [('Purpose', 'does the claim reduce to a single origin?'),
                      ('Scope', 'every carrier, 10–14 March, any language; commentary excluded'),
                      ('Inputs', 'the 2 reports held and material traceable from them'),
                      ('Criteria', 'date and citation per carrier; the chain in order; independence stated'),
                      ('Done', '1 chain, 1 page, with a finding, within 3 hours'),
                      ('Fallback', 'untraceable: report as a claim, whatever the carriers')]),
w_fig_cap='An unnamed official is not an origin that can be counted. That clause does most of the work.',
w_task='Write a verification tasking for a claim in your own work.',
w_steps=['Say what the verification is for.',
         'Bound the carriers by date and language.',
         'Require the chain in order to its earliest origin.',
         'Require a statement on independence.',
         'Say what happens when the chain runs out.'],
w_bank=['Establish whether … reduces to … so that …',
        'Cover … ; … is out of scope.',
        'Work from … and …',
        'For each carrier give … ; set out … ; state whether … ; do not treat … as …',
        'Where the chain cannot be traced … , say so and …'],
w_check=['Is the question single or multiple origin, not true or false?',
         'Are carriers bounded by date and language?',
         'Is independence required as a statement?',
         'Is an untraceable chain handled?'],

t_title='Verification before entry',
t_fig=figs.split('WHAT COUNTS',
                 'Two sources',
                 ['two origins, neither citing the other',
                  'neither tracing to a common third',
                  'each able to be wrong separately',
                  'may be stated in the brief'],
                 'One source twice',
                 ['two outlets, one bulletin',
                  'a chain each step of which cites honestly',
                  'wrong together or not at all',
                  'reported as a claim']),
t_fig_cap='The two columns look identical in a footnote, which is the whole problem.',
t_body=[
 'Every unit has a rule on how many sources a claim needs, and almost every such rule is '
 'written as though counting were the hard part. It is not. A bulletin carries a claim from '
 'an official it does not name; an agency reports the bulletin; a newspaper reports the '
 'agency; and an analyst reading the last two, four hours apart, has what looks exactly like '
 'two reports. Every step attributed honestly to the step behind it, and the chain became a '
 'confirmation with nobody acting in bad faith.',
 'This is where verification capability earns its place, because the question that matters, '
 'does this reduce to one origin, can now be asked of every claim rather than of the ones '
 'that happened to look odd. Tracing backwards across languages takes minutes. Before, it '
 'took an afternoon of telephone calls and usually failed, which is why the rule got written '
 'as a number.',
 'So write it in two parts. Two sources count as independent only where neither traces to the '
 'other and neither traces to a common origin; and where the chain cannot be traced at all, '
 'the claim is reported as a claim whatever the number of outlets carrying it. Expect the '
 'second half to be unpopular, because it means handing up a list of things people are saying '
 'in a week when the office wanted findings. And record what the rule does not reach: a claim '
 'placed deliberately with two separate origins passes it, and only an analyst noticing a '
 'convenient coincidence will catch that.'],
t_say=[('Ask the real question: ', 'Does this reduce to a single origin?'),
       ('Refuse the false count: ', 'An unnamed official is not a countable origin.'),
       ('Report honestly: ', 'Untraceable chain: reported as a claim, 6 outlets notwithstanding.')],
t_bound=('Tracing shows how a claim travelled, not whether it is true. Two genuinely separate '
         'origins can both have been given the claim on purpose, and no counting rule reaches '
         'that. The method can establish reduction to one origin; it cannot establish '
         'independence of intention.'),
t_a=[('Does this reduce to a single ____________?', 'origin'),
     ('An unnamed official is not a countable ____________.', 'origin'),
     ('Untraceable chain: reported as a ____________.', 'claim'),
     ('Every step attributed ____________ to the step behind it.', 'honestly'),
     ('Tracing backwards across languages takes ____________.', 'minutes'),
     ('It cannot establish independence of ____________.', 'intention')],
t_b_rubric='Rewrite each sentence so that the origin and its date are attributed at the claim.',
t_b=[('Oristan has moved two battalions.', 'according to an Oristani evening bulletin of 11 March, citing an unnamed official, two battalions have moved'),
     ('Reports confirm the movement.', 'two outlets carry the claim, both traceable to the bulletin of 11 March'),
     ('It is widely reported that the border is reinforced.', 'no source independent of the 11 March bulletin reports reinforcement'),
     ('Imagery shows nothing unusual.', 'on the basis of dated imagery of 14 March, no new deployment is visible')],

case=dict(
 title='The Decision Room · What to tell the ambassador',
 brief=[
  'The Oristani ambassador has asked, politely and in writing, on what basis the Ministry’s '
  'brief stated that Oristan had moved two battalions. The brief was internal; its wording '
  'reached him.',
  'The claim reduces to one unnamed official in an Oristani bulletin. No other trace exists, '
  'and imagery of 14 March shows no new deployment.',
  'Lina Khalil wants a short reply saying the Ministry was relying on published reporting. '
  'Samir Haddad wants the reply to state that the Ministry has since established the reporting '
  'reduces to a single origin. Hana is deciding what the Ministry admits.'],
 exhibit=figs.datatable('WHAT THE MINISTRY NOW HOLDS',
                        ['', 'Finding', 'Note'],
                        [['carriers of the claim', '2', 'both traceable to the bulletin'],
                         ['independent origins', '1', 'an unnamed official'],
                         ['corroborating traces found', '0', 'imagery, notices, closures'],
                         ['imagery of 14 March', 'no new deployment', 'two passes'],
                         ['the brief’s wording', 'stated as fact', '—'],
                         ['how the wording reached the ambassador', 'not established', '—']]),
 exhibit_cap='One origin, no corroboration, imagery against it, and the brief stated it as fact.',
 exhibit_note='The brief was distributed to 34 recipients, including 2 posts abroad.',
 voices=[('Lina Khalil', 'Bilateral Affairs',
          'Reply short. We were relying on published reporting. Anything longer invites a '
          'second letter and puts our internal process in his file.'),
         ('Samir Haddad', 'Legal and Treaties',
          'Say that we have established the reporting reduces to a single origin. It costs us '
          'something and it is the only reply that is true, and he will check.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'The second reply also tells him we now trace chains, which he will find '
          'interesting. I am not sure that is a cost. I am sure the first reply is one we '
          'would not want read aloud.')],
 steps=[('Find it', 'How many independent origins are there?'),
        ('Compare it', 'What do the two proposed replies say?'),
        ('Infer it', 'Why does Lina want the reply short?'),
        ('Weigh it', 'Admitting a method against admitting an error.'),
        ('Decide', 'What goes in the reply?')],
 analysis=[('Find it. What does imagery of 14 March show?', 'no new deployment, on two passes'),
           ('Compare it. What does Samir’s reply state?', 'that the reporting reduces to a single origin'),
           ('Infer it. What is Lina’s concern?', 'that a longer reply invites a second letter and exposes internal process'),
           ('Weigh it. How many recipients had the brief?', 'thirty-four, including two posts abroad'),
           ('Decide. What would you do?', 'answers vary; the truthful reply is also the one that cannot be quoted against the Ministry')],
 decision='Write the reply to the ambassador.',
 decision_steps=['Say what the Ministry states about its basis.',
                 'Say whether the single origin is mentioned.',
                 'Say what, if anything, is said about the imagery.',
                 'Say what is recorded internally about the error.'],
 bank=['The Ministry’s brief of … rested on …',
       'The Ministry has since established that …',
       'No further trace …',
       'The wording has been …',
       'The rule on … has been …'],
 outcome='The reply said that the brief had rested on two published carriers, that the '
         'Ministry had since established both traced to a single origin, and that the wording '
         'had been corrected on the file. The ambassador replied in four lines thanking the '
         'Ministry and adding that his own capital had been trying to find the origin of the '
         'same report. Lina, who had argued for the short reply, says she had been protecting '
         'the Ministry from a conversation that turned out to be the most useful exchange of '
         'the quarter, and that she would make the same argument again in a case where the '
         'other side had not asked politely.',
 outcome_q=[('What did the reply state?', 'two carriers, one origin, and that the wording had been corrected'),
            ('What does Lina say she got wrong?', 'that she was protecting the Ministry from a useful exchange')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · The two-source rule as written',
 task=['This is the rule Dr Mourad issued in January, in the form in which it was circulated '
       'and followed.',
       'It permitted a single unnamed official to enter the morning brief as established fact.'],
 draft=['A claim with one source is reported as a claim.',
        'A claim with two independent sources may be stated.',
        'Use reputable outlets.',
        'Check for corrections before use.',
        'Attribute in the usual way.',
        'Senior staff may vary this.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and the second one does not say what independent means.',
 asked=['Independence defined by traceability',
        'An untraceable chain reported as a claim',
        'A test for what counts as an origin'],
 back=['Two outlets counted as two sources',
       'A chain of three steps read as confirmation',
       'An unnamed official stated as fact'],
 gap='"Two independent sources" does not define independence, "reputable outlets" is not a '
     'test of origin, "attribute in the usual way" does not say at the claim, and "senior '
     'staff may vary this" names no limit on the variation.',
 back_cap='A rule that was short, understood, followed, and insufficient at exactly one point.',
 back_note='Line two is the failure. Independence was left to the reader, and two honest '
           'attributions in a chain look identical to two origins.',
 diagnosis=[('[1] "one source" — one outlet, or one origin?', 'ambiguous referent'),
            ('[2] "two independent sources" — independent by what test?', 'unstated criterion'),
            ('[3] "reputable outlets" — reputable judged how?', 'unstated criterion'),
            ('[4] "check for corrections" — corrections to which document in the chain?', 'ambiguous referent'),
            ('[5] "senior staff may vary this" — vary it how far, and recorded where?', 'unstated exception'),
            ('[6] nothing on an untraceable chain — what then?', 'unstated exception')],
 rewrite='Rewrite the rule so that independence is defined and an untraceable chain is '
         'handled.',
 scaffold=['What the rule is for',
           'Which claims and which carriers it covers',
           'What may be relied on in tracing',
           'The definition of independence, what is not an origin, and the finding required',
           'What the output is and by when',
           'What happens when the chain cannot be traced'],
 bank=['Establish whether … reduces to … so that …',
       'Cover … ; … is out of scope.',
       'Work from … and …',
       'For each carrier give … ; set out the chain … ; state whether … ; do not treat …',
       'Return 1 … , within …',
       'Where the chain cannot be traced … , … whatever …'],
 check=['Is independence defined by traceability?',
        'Is an unnamed official excluded as a countable origin?',
        'Is an untraceable chain reported as a claim?',
        'Is the variation power bounded and recorded?'],
 model=['Establish whether the claim that Oristan has moved 2 battalions reduces to a single origin, so that the brief can state it or report it correctly',
        'Every published carrier of the claim from 10 to 14 March in any language; commentary that does not itself carry the claim is out of scope',
        'The 2 reports held, and published material traceable from them',
        'For each carrier give its date and what it cites; set out the chain in order to its earliest identifiable origin; state whether any 2 carriers are independent of each other and of a common origin; do not treat an unnamed official as an origin that can be counted',
        '1 chain of attribution, 1 page, with a stated finding of single or multiple origin, within 3 hours',
        'Where the chain cannot be traced to an origin, say so and report the claim as a claim whatever the number of carriers'],
 cost='1 morning brief to 34 recipients stating as fact a neighbour’s troop movement that '
      'reduced to 1 unnamed official, and 1 letter from that neighbour’s ambassador.'),

rev_fig=figs.split('ATTRIBUTION',
                   'Removed',
                   ['Oristan has moved two battalions.',
                    'Reports say troops have moved.',
                    'It is widely reported.',
                    'Sources confirm the movement.'],
                   'Attributed',
                   ['According to a bulletin of 11 March …',
                    'A broadsheet, citing that agency …',
                    'No source independent of the bulletin …',
                    'On the basis of imagery of 14 March …']),
rev_fig_cap='According to; on the basis of; citing. Never confirm.',
rev=dict(
 read=[('The hard part of a source rule is', ['counting', 'establishing independence', 'writing it', 'enforcing it'], 1),
       ('A chain becomes a confirmation because', ['somebody lies', 'each step attributes to the step behind it', 'outlets are unreliable', 'dates differ'], 1),
       ('Where the chain cannot be traced, the claim is', ['dropped', 'reported as a claim', 'stated', 'given two sources'], 1),
       ('In the Decision Room, what did the reply state?', ['nothing', 'two carriers, one origin', 'that imagery disproved it', 'that the brief was correct'], 1)],
 listen_text='A bulletin carries a claim from an official it does not name; an agency reports '
             'the bulletin; a newspaper reports the agency; and an analyst reading the last '
             'two has what looks exactly like two reports. Every step attributed honestly to '
             'the step behind it.',
 listen=[('An official it does not ____________.', 'name'),
         ('A newspaper reports the ____________.', 'agency'),
         ('What looks exactly like two ____________.', 'reports'),
         ('Attributed ____________ to the step behind it.', 'honestly')],
 speak=['Trace a claim you read this week back as far as you can.',
        'Say whether two reports you have seen were independent, and how you know.'],
 write='Write one sentence attributing a claim at the point it is made.',
 vocab=[('A claim that returns to you as confirmation of itself is a ____________.', 'circular report'),
        ('An origin that does not depend on another already counted is an ____________.', 'independent source'),
        ('The series of steps by which a claim reached you is a ____________.', 'chain of reporting'),
        ('A document made to pass as another’s is a ____________.', 'forgery'),
        ('A published withdrawal of an earlier report is a ____________.', 'retraction')],
 gram=[('____________ to a wire agency of 12 March, two battalions have moved.', 'According'),
       ('On the ____________ of dated imagery, no deployment is visible.', 'basis'),
       ('A broadsheet, ____________ that agency, repeated the claim.', 'citing'),
       ('No source ____________ of the bulletin has been found.', 'independent'),
       ('Two outlets ____________ the same bulletin are one source.', 'citing')]),

found=['Trace one claim in today’s reporting back to its earliest named origin.',
       'Write your own definition of two independent sources.',
       'Find one claim your office has stated that reduces to a single origin.',
       'Attribute three claims at the point they are made rather than in a footnote.'],
end_line='Two outlets are not two sources, and the footnote cannot tell you which you have.',
end_next='Next: Confident and Wrong',
)
