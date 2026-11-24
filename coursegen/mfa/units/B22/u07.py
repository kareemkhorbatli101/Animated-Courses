# -*- coding: utf-8 -*-
import figs

U = dict(
num=7, title='Preambular and Operative',
gram='inversion and fronting for emphasis',
ai='resolution language: preambular and operative',
strap='CEFR B2 · Grammar: inversion and fronting · AI: preambular and operative',
cando=['front a phrase for emphasis without breaking the sentence',
       'use inversion after negative and restrictive openings',
       'distinguish a preambular paragraph from an operative one and say why it matters',
       'see what a preambular paragraph can be used for later',
       'write a tasking that treats the two halves of a resolution differently'],
hero=('RECALLING, NOTING, WELCOMING',
      ['Fourteen preambular paragraphs went through without a comment.',
       'Two of them were quoted against the Ministry eleven months later.'],
      [(730, 'orange', 'long'), (1390, 'teal', 'short'),
       (2050, 'purple', 'long'), (2690, 'blue', 'short')]),
hero_cap='Multilateral Affairs, Geneva, the week a resolution was tabled.',

warm=['What is a preamble for?',
      'Can a paragraph that decides nothing still cost you something?',
      'Which part of a long document does your office read least carefully?'],
read=[
 'A resolution has two halves that behave differently. The preamble recalls, notes, welcomes '
 'and expresses concern; it decides nothing. The operative paragraphs decide, request, '
 'authorise and require a report. Negotiating effort goes almost entirely into the second '
 'half, and sensibly so.',
 'In March a resolution was tabled with fourteen preambular paragraphs and nine operative '
 'ones. Nadia Barakat’s delegation negotiated the nine for three weeks and accepted the '
 'fourteen in an afternoon, which is the normal proportion.',
 'Eleven months later two of the fourteen were quoted at the Ministry. A preambular paragraph '
 'recalling an earlier instrument had the effect of accepting, for the first time in a text '
 'the Ministry had co-sponsored, that the instrument applied to a category of case the '
 'Ministry had always said it did not cover.',
 'Nadia had used a comparison step to produce the first draft of the Ministry’s own '
 'preambular paragraphs, which it did well: the forms are conventional, the sources are '
 'public, and a preamble is the most formulaic text in the trade. What the step had not been '
 'asked, because she had not thought to ask it, was which of the fourteen recalled or noted '
 'anything the Ministry had not previously accepted in a text of its own.',
 'The practice now is that a preambular paragraph citing any instrument, resolution or report '
 'is checked against the Ministry’s record of what it has itself accepted, and the check '
 'takes nine minutes. Nadia says the thing she got wrong was not using the step. It was '
 'believing that a paragraph which decides nothing can cost nothing.'],
c_a=[('What do the two halves of a resolution do?', 'the preamble recalls and notes; the operative paragraphs decide and request'),
     ('How was the March resolution negotiated?', 'the nine operative paragraphs for three weeks, the fourteen preambular in an afternoon'),
     ('What happened eleven months later?', 'two of the fourteen were quoted at the Ministry'),
     ('What had the recalling paragraph done?', 'accepted that an instrument applied to a category the Ministry said it did not cover'),
     ('What had the step not been asked?', 'which paragraphs recalled anything the Ministry had not previously accepted'),
     ('How long does the new check take?', 'nine minutes')],
c_b=[('A preamble decides nothing.', 'T'),
     ('The proportion of effort was abnormal.', 'F'),
     ('The step drafted the preambular paragraphs badly.', 'F'),
     ('A preamble is the most formulaic text in the trade.', 'T'),
     ('Nadia blames the use of the step.', 'F'),
     ('The new check is against the Ministry’s own record of acceptances.', 'T')],
c_c=[('The preamble recalls, notes, welcomes and expresses ____________.', 'concern'),
     ('The operative paragraphs decide, request, authorise and require a ____________.', 'report'),
     ('For the first time in a text the Ministry had ____________.', 'co-sponsored'),
     ('A category of case the Ministry had always said it did not ____________.', 'cover'),
     ('The forms are conventional, the sources are ____________.', 'public'),
     ('A paragraph which decides nothing can ____________ nothing.', 'cost')],
c_d=[('A preambular paragraph can ( decide / concede ).', ['decide', 'concede'], 1),
     ('How many preambular paragraphs were there?', ['nine', 'fourteen', 'two', 'eleven'], 1),
     ('How long was spent on the operative half?', ['an afternoon', 'three weeks', 'nine minutes', 'eleven months'], 1),
     ('What is the new check against?', ['public sources', 'the Ministry’s own record of acceptances', 'the operative text', 'the sponsor’s list'], 1),
     ('What was Nadia’s error?', ['using the step', 'believing a non-deciding paragraph is free', 'drafting too fast', 'reading the annex'], 1)],
c_e=('Preambular or operative? Put each opening in the right column.',
     [('Recalling its resolution of 2019', 'preambular'),
      ('Decides to establish a working group', 'operative'),
      ('Noting with concern the situation', 'preambular'),
      ('Requests the Secretariat to report', 'operative'),
      ('Welcoming the efforts of the Parties', 'preambular'),
      ('Authorises the Committee to determine', 'operative')],
     ['preambular', 'operative']),

v_fig_title='THE PARTS OF A RESOLUTION',
v_fig=[('doc', 'a preambular paragraph'), ('key', 'an operative paragraph'), ('book', 'a chapeau'),
       ('people', 'a co-sponsor'), ('pin', 'a tabling'), ('clock', 'a follow-up mandate')],
v_fig_cap='Six words for the machinery of a text that decides things in public.',
vocab=[
 ('a resolution', 'a decision adopted by a body and expressed as a numbered text'),
 ('a preambular paragraph', 'an opening paragraph that recites and decides nothing'),
 ('an operative paragraph', 'a numbered paragraph that decides, requests or authorises'),
 ('a recalling clause', 'a preambular paragraph citing an earlier text'),
 ('a noting clause', 'a preambular paragraph acknowledging a fact or document'),
 ('a welcoming clause', 'a preambular paragraph expressing approval'),
 ('a decision paragraph', 'an operative paragraph beginning decides'),
 ('a request paragraph', 'an operative paragraph asking a body to act'),
 ('a reporting paragraph', 'an operative paragraph requiring a report by a date'),
 ('a sponsor', 'a delegation that puts a text forward'),
 ('a co-sponsor', 'a delegation that joins in putting a text forward'),
 ('a tabling', 'the formal act of putting a text before a body'),
 ('a proposed alteration', 'a change to a text formally put forward for decision'),
 ('a vote by consensus', 'adoption without a vote being taken'),
 ('a recorded vote', 'a vote in which each delegation’s position is entered'),
 ('an abstention', 'a decision neither to support nor to oppose'),
 ('an explanation of vote', 'a statement given to explain how a delegation voted'),
 ('a chapeau', 'the introductory words governing a list of sub-paragraphs'),
 ('an annex to a resolution', 'a text attached and adopted with the resolution'),
 ('a follow-up mandate', 'the instruction a resolution gives for further work')],
v_a=[('An opening paragraph that recites and decides nothing is a ____________.', 'preambular paragraph'),
     ('The introductory words governing a list of sub-paragraphs are a ____________.', 'chapeau'),
     ('A delegation that joins in putting a text forward is a ____________.', 'co-sponsor'),
     ('Adoption without a vote being taken is a ____________.', 'vote by consensus'),
     ('The instruction a resolution gives for further work is a ____________.', 'follow-up mandate'),
     ('A statement given to explain how a delegation voted is an ____________.', 'explanation of vote'),
     ('A preambular paragraph citing an earlier text is a ____________.', 'recalling clause'),
     ('The formal act of putting a text before a body is a ____________.', 'tabling')],
v_b=[('A resolution is a decision adopted by a body', 'and expressed as a numbered text.'),
     ('An operative paragraph is a numbered paragraph', 'that decides, requests or authorises.'),
     ('An abstention is a decision neither', 'to support nor to oppose.'),
     ('An annex to a resolution is a text attached', 'and adopted with the resolution.'),
     ('A reporting paragraph is an operative paragraph', 'requiring a report by a date.')],

g_title='Grammar: inversion and fronting for emphasis',
g_rule=['Fronting moves a phrase to the front for emphasis: In no case shall the fee be '
        'increased.',
        'After a negative or restrictive opening, the subject and auxiliary invert: Only then '
        'may the Committee decide.',
        'Not until and at no time also trigger inversion.',
        'Fronting is normal in resolution language and should not be overused elsewhere.'],
g_fig=('LOOSE',
       ['The fee shall not be increased in any case.',
        'The Committee may only decide then.',
        'The Parties will not meet until the report is received.',
        'The delegation did not at any time accept this.'],
       'PRECISE',
       ['In no case shall the fee be increased.',
        'Only then may the Committee decide.',
        'Not until the report is received shall the Parties meet.',
        'At no time did the delegation accept this.'],
       'four ordinary sentences with the emphasis buried',
       'four frontings, each with the inversion the opening requires'),
g_fig_cap='Fronting without inversion is the commonest error in formal drafting.',
g_a=[('In no case ____________ the fee be increased.', 'shall'),
     ('Only then ____________ the Committee decide.', 'may'),
     ('Not until the report is received ____________ the Parties meet.', 'shall'),
     ('At no time ____________ the delegation accept this.', 'did'),
     ('Under no circumstances ____________ access be refused.', 'shall'),
     ('Only after consultation ____________ a date be fixed.', 'may'),
     ('Nowhere in the text ____________ the word appear.', 'does'),
     ('Not only ____________ the preamble recite; it concedes.', 'does'),
     ('Rarely ____________ a preambular paragraph be negotiated.', 'does')],
g_b=[('After a negative opening, the subject and auxiliary ( invert / stay ).', ['invert', 'stay'], 0),
     ('In no case ____ the fee be increased.', ['the fee shall', 'shall', 'will the fee not', 'shall not'], 1),
     ('Only then ____ the Committee decide.', ['the Committee may', 'may', 'may not', 'can the Committee not'], 1),
     ('At no time ____ the delegation accept this.', ['the delegation did', 'did', 'has not', 'did not'], 1),
     ('Fronting is normal in', ['instructions', 'resolution language', 'telegrams', 'annexes'], 1),
     ('Which is correct?', ['In no case the fee shall be increased.', 'In no case shall the fee be increased.', 'In no case the fee shall not …', 'In no case is shall the fee …'], 1)],

d1=dict(title='Eleven months later',
        fig=(['Preambular paragraph six.', 'It decides nothing.'],
             ['And it recalls something.', 'Which we had never accepted.']),
        cap='Nadia Barakat and Samir Haddad, by telephone from Geneva.',
        lines=[('Samir', 'They have quoted preambular paragraph six of the March resolution at '
                         'us. Recalling the 2016 instrument and its applicability to transit '
                         'cases.'),
               ('Nadia', 'It decides nothing. It is a recalling clause.'),
               ('Samir', 'It decides nothing and it records that the Ministry, as a co-sponsor, '
                         'recalled the applicability of an instrument to a category of case we '
                         'have said for nine years it does not cover.'),
               ('Nadia', 'We negotiated the operative paragraphs for three weeks.'),
               ('Samir', 'And the preamble in an afternoon, which is what everybody does, '
                         'including me. The preamble is formulaic, it is public, it looks like '
                         'furniture.'),
               ('Nadia', 'I had the first draft of our own preambular paragraphs produced for '
                         'me. It did them well.'),
               ('Samir', 'I am sure it did. The forms are conventional and the sources are '
                         'public. What did you ask it?'),
               ('Nadia', 'To draft fourteen preambular paragraphs in the usual forms, citing the '
                         'relevant instruments.'),
               ('Samir', 'Relevant to the subject. Not relevant to what we have accepted.'),
               ('Nadia', 'Which is a different list, and nobody in Geneva holds it.'),
               ('Samir', 'We hold it here, and the check takes nine minutes against our own '
                         'record. Nine minutes, against three weeks on the operative half.'),
               ('Nadia', 'Then it goes in the standing instruction for every tabling, and I '
                         'would rather it came from me than from you.')],
        a=[('Which paragraph was quoted?', 'preambular paragraph six, recalling the 2016 instrument'),
           ('What did it record?', 'that the Ministry recalled the applicability of the instrument to a category it says is not covered'),
           ('How long was each half negotiated for?', 'three weeks for the operative half, an afternoon for the preamble'),
           ('What had Nadia asked for?', 'fourteen preambular paragraphs in the usual forms, citing the relevant instruments'),
           ('What does the check cost?', 'nine minutes against the Ministry’s own record')],
        b=[('It looks like ____________.', 'furniture'),
           ('The forms are conventional and the sources are ____________.', 'public'),
           ('Relevant to the subject. Not relevant to what we have ____________.', 'accepted'),
           ('Nine minutes, against three ____________ on the operative half.', 'weeks')]),
d2=dict(title='What a preamble is for',
        fig=(['It decides nothing.', 'And it is quoted for years.'],
             ['Then why accept any?', 'Because refusing them costs more.']),
        cap='Nadia and Dr Hana Mourad.',
        lines=[('Hana', 'If preambular paragraphs can be quoted against us, why does anybody '
                        'accept them quickly?'),
               ('Nadia', 'Because objecting to a recalling clause costs political capital that '
                         'nobody will spend on furniture. If I block a paragraph recalling a '
                         'resolution forty delegations support, I have spent a week and burned '
                         'goodwill I will need, and the paragraph goes in anyway.'),
               ('Hana', 'So the choice is not between accepting and refusing.'),
               ('Nadia', 'It is between accepting knowingly and accepting without noticing. The '
                         'nine-minute check does not change what I accept in most cases. It '
                         'changes whether I know that I am accepting it, and whether the '
                         'capital does.'),
               ('Hana', 'And when the check flags something you cannot afford to block?'),
               ('Nadia', 'Then I can seek instructions, or table an explanation of position, or '
                         'write one sentence in my report saying that paragraph six will be '
                         'quoted at us. Any of those three is worth more than silence, and the '
                         'third costs nothing.'),
               ('Hana', 'The third is the one that would have helped here.'),
               ('Nadia', 'One sentence in the report of March would have meant that when the '
                         'paragraph came back eleven months later the Ministry had a document '
                         'saying it had seen it coming. That is not nothing. It is the '
                         'difference between a concession and an oversight.'),
               ('Hana', 'And the cost of the whole change is nine minutes a tabling.'),
               ('Nadia', 'Nine minutes a tabling, and the habit of not treating fourteen '
                         'paragraphs as furniture, which is harder than the nine minutes.')],
        a=[('Why are preambular paragraphs accepted quickly?', 'because objecting costs political capital nobody will spend on furniture'),
           ('What is the real choice?', 'between accepting knowingly and accepting without noticing'),
           ('What three options follow a flag?', 'seek instructions, table an explanation of position, or record it in the report'),
           ('What would one sentence in the March report have achieved?', 'a document showing the Ministry had seen the paragraph coming'),
           ('What is harder than the nine minutes?', 'the habit of not treating fourteen paragraphs as furniture')],
        b=[('Nobody will spend on ____________.', 'furniture'),
           ('Accepting knowingly and accepting without ____________.', 'noticing'),
           ('The difference between a concession and an ____________.', 'oversight'),
           ('Nine minutes a ____________.', 'tabling')]),

speak=[('Front it',
        ['Student A: say six ordinary sentences about your work.',
         'Student B: front a phrase in each and invert where required.',
         'Say which ones sound natural and which sound like a resolution.']),
       ('Preamble or operative',
        ['Write three paragraphs about a decision your office has taken.',
         'Make one recite, one decide and one require a report.',
         'Your partner says which is which.']),
       ('Furniture',
        ['Name a part of a document your office reads quickly.',
         'Say what it could cost you.',
         'Say what a nine-minute check on it would look like.'])],

ext_title='A preambular paragraph decides nothing and records what a state has recalled, noted and welcomed',
ext_fig=figs.datatable('THE MARCH RESOLUTION, BY HALF',
                       ['', 'Preamble', 'Operative'],
                       [['paragraphs', '14', '9'],
                        ['negotiating time', 'an afternoon', '3 weeks'],
                        ['decides anything', 'no', 'yes'],
                        ['cites instruments', '11 of 14', '2 of 9'],
                        ['checked against the Ministry’s acceptances', '0 of 14', 'n/a'],
                        ['quoted at the Ministry since', '2', '0']]),
ext_fig_cap='Every figure in the preamble column is small except the last one.',
ext=[
 'Resolution language divides sharply. The preamble recalls, notes, welcomes, expresses '
 'concern and reaffirms; it decides nothing and creates no obligation. The operative '
 'paragraphs decide, request, authorise, urge and require a report by a date. Negotiating '
 'effort follows the division: weeks on the operative half, an afternoon on the preamble, and '
 'that allocation is correct in almost every respect.',
 'The preamble is also the most formulaic text in the trade, which makes it the clearest case '
 'in this field for assisted drafting. The forms are fixed, the instruments cited are public, '
 'and the conventions of each forum are documented. A first draft of fourteen preambular '
 'paragraphs in the correct forms, citing the right texts, is a matter of minutes and will '
 'usually need little correction.',
 'What the division of effort conceals is that a preambular paragraph is a record of what a '
 'state has recalled, noted or welcomed, and a co-sponsor has recalled whatever its preamble '
 'recalls. A clause recalling an instrument and its applicability to a category of case is '
 'not a decision and is evidence, in a text the state put its name to, that the state treated '
 'the instrument as applying there. Eleven months later that is quoted, and the answer that '
 'the paragraph decided nothing is true and does not help.',
 'The practice that closes this is cheap and specific: every preambular paragraph citing an '
 'instrument, resolution or report is checked against the ministry’s own record of what it '
 'has previously accepted, and the check runs in minutes because both the paragraph and the '
 'record are text. It does not change what a delegation accepts in most cases, because '
 'objecting to a recalling clause that forty delegations support costs capital nobody will '
 'spend on what looks like furniture.',
 'What it changes is whether the acceptance is knowing. A flagged paragraph can be met in '
 'three ways: instructions can be sought, an explanation of position can be tabled, or one '
 'sentence can be written in the delegation’s report saying that the paragraph will be quoted '
 'later. The third costs nothing and is the difference, when the quotation comes, between a '
 'concession the ministry decided to make and an oversight it has to explain.'],
dp1=('Resolution drafting',
     'Multilateral delegations in several foreign services adopted assisted drafting of '
     'preambular text in 2025 together with automated checking of cited instruments against '
     'their own records of accepted positions.',
     'Source: reported practice in multilateral delegations, 2025–2026.'),
e_a=[('What does a preamble do?', 'it recalls, notes, welcomes and reaffirms, and decides nothing'),
     ('Why is the preamble the clearest case for assisted drafting?', 'the forms are fixed, the instruments are public and the conventions are documented'),
     ('What does the division of effort conceal?', 'that a co-sponsor has recalled whatever its preamble recalls'),
     ('What is the check?', 'every cited instrument tested against the ministry’s record of what it has accepted'),
     ('What are the three responses to a flag?', 'seek instructions, table an explanation of position, or record it in the report')],
e_b=[('A preamble creates obligations.', 'F'),
     ('The allocation of effort is broadly correct.', 'T'),
     ('Objecting to a widely supported recalling clause is cheap.', 'F'),
     ('The check changes what is accepted in most cases.', 'F'),
     ('Recording a flag in the report costs nothing.', 'T'),
     ('"It decided nothing" answers the later quotation.', 'F')],

w_model=(
 'Purpose: draft the Ministry’s 14 preambular paragraphs and identify any that recall '
 'something the Ministry has not previously accepted, so that the delegation accepts them '
 'knowingly. Scope: the preambular paragraphs only; the 9 operative paragraphs are out of '
 'scope and are not to be drafted. Inputs: the forum’s drafting conventions, the instruments '
 'proposed for citation, and the Ministry’s record of accepted positions. Criteria: use the '
 'conventional opening forms of the forum; for each paragraph citing an instrument, '
 'resolution or report, state whether the Ministry has previously accepted that instrument’s '
 'application to the subject, giving the text in which it did so; where it has not, mark the '
 'paragraph and do not soften the citation; propose no operative language. Done: 14 drafted '
 'paragraphs with a citation check against each, within 1 hour. Fallback: where the '
 'Ministry’s record is silent on an instrument, mark the paragraph as not established rather '
 'than treating silence as acceptance.'),
w_fig=figs.spec_card('THE TASKING FOR PREAMBULAR TEXT',
                     [('Purpose', 'drafted, and flagged where nothing was accepted before'),
                      ('Scope', 'the preamble only; operative paragraphs excluded'),
                      ('Inputs', 'the forum’s conventions, the instruments, the acceptance record'),
                      ('Criteria', 'conventional forms; a citation check per paragraph; no softening'),
                      ('Done', '14 paragraphs with a check against each, within 1 hour'),
                      ('Fallback', 'record silent: not established, never acceptance')]),
w_fig_cap='Silence in the record is not acceptance, which is the clause that stops a flag disappearing.',
w_task='Write a tasking for a formulaic part of a document in your own work.',
w_steps=['Say what the delegation must be able to do knowingly.',
         'Limit the drafting to the formulaic half.',
         'Require a check against your own record of acceptances.',
         'Forbid softening a citation to avoid a flag.',
         'Say what silence in the record means.'],
w_bank=['Draft … and identify any that … , so that …',
        'Cover … ; … are out of scope and are not to be …',
        'Work from … , … and …',
        'Use … ; for each paragraph citing … , state whether … , giving … ; where it has not, … ; propose no …',
        'Where the record is silent … , mark … rather than treating …'],
w_check=['Is the check against the Ministry’s own acceptances?',
         'Is softening a citation forbidden?',
         'Is silence excluded as evidence of acceptance?',
         'Is operative drafting excluded?'],

t_title='Preambular and operative',
t_fig=figs.split('THE TWO HALVES',
                 'Preamble',
                 ['recalls, notes, welcomes',
                  'decides nothing',
                  'negotiated in an afternoon',
                  'records what the state recalled'],
                 'Operative',
                 ['decides, requests, authorises',
                  'creates obligations',
                  'negotiated for weeks',
                  'read by everybody, carefully']),
t_fig_cap='The left column is cheap to agree and is the half that comes back.',
t_body=[
 'The division is real and the allocation of effort that follows it is right. A preamble '
 'recalls, notes and welcomes, decides nothing and creates no obligation; the operative '
 'paragraphs decide and require. Weeks on the second half and an afternoon on the first is '
 'the correct proportion and nothing here argues against it.',
 'The preamble is also the most formulaic text in the trade, so take the assistance: fixed '
 'forms, public instruments, documented conventions, fourteen paragraphs drafted correctly in '
 'minutes. There is no argument for drafting recalling clauses by hand.',
 'But add the check the division of effort hides. A preambular paragraph is a record of what '
 'the state recalled, noted or welcomed, and a co-sponsor recalls whatever its preamble '
 'recalls. A clause reciting an instrument’s applicability to a category of case is evidence '
 'that the state treated it as applying there, and when it is quoted eleven months later the '
 'true answer that it decided nothing is of no use. Check every cited instrument against the '
 'Ministry’s own record of acceptances: nine minutes against three weeks on the operative '
 'half. In most cases the delegation will still accept, because blocking furniture costs '
 'capital nobody will spend. What changes is that one sentence goes into the report saying the '
 'paragraph will come back, which is the whole difference between a concession and an '
 'oversight.'],
t_say=[('Set the check: ', 'Every cited instrument tested against our record of acceptances.'),
       ('Refuse the inference: ', 'Record silent: not established, not acceptance.'),
       ('Record the flag: ', 'Paragraph 6 will be quoted at the Ministry; accepted knowingly.')],
t_bound=('A drafting step can produce conventional preambular text and can test a citation '
         'against a record. It cannot weigh what blocking a paragraph would cost in a room of '
         'forty delegations, and it cannot tell the Ministry whether to accept. Its whole '
         'contribution is that the acceptance becomes knowing, which is a change in the record '
         'rather than in the text.'),
t_a=[('Every cited instrument tested against our record of ____________.', 'acceptances'),
     ('Record silent: not established, not ____________.', 'acceptance'),
     ('Paragraph 6 will be quoted at the Ministry; accepted ____________.', 'knowingly'),
     ('A co-sponsor recalls whatever its preamble ____________.', 'recalls'),
     ('Nine minutes against three ____________ on the operative half.', 'weeks'),
     ('The whole difference between a concession and an ____________.', 'oversight')],
t_b_rubric='Rewrite each with the phrase fronted and the inversion the opening requires.',
t_b=[('The fee shall not be increased in any case.', 'in no case shall the fee be increased'),
     ('The Committee may only decide then.', 'only then may the Committee decide'),
     ('The Parties will not meet until the report is received.', 'not until the report is received shall the Parties meet'),
     ('The delegation did not at any time accept this.', 'at no time did the delegation accept this')],

case=dict(
 title='The Decision Room · Paragraph six, a year on',
 brief=[
  'Preambular paragraph six of the March resolution has been quoted at the Ministry by two '
  'delegations in support of applying the 2016 instrument to transit cases.',
  'The Ministry’s position for nine years has been that the instrument does not cover transit '
  'cases. It co-sponsored the March text.',
  'Nadia wants the Ministry to state its position plainly and accept that the paragraph was an '
  'oversight. Samir says an oversight admitted is a position weakened. Hana asks what the '
  'Ministry says the next time it co-sponsors a text with the same clause.'],
 exhibit=figs.datatable('PARAGRAPH SIX',
                        ['', 'Finding', 'Note'],
                        [['the Ministry’s stated position', 'not covered', 'since 2016'],
                         ['occasions it has stated this', '11', 'all on the record'],
                         ['texts co-sponsored reciting the contrary', '1', 'March resolution'],
                         ['delegations now quoting it', '2', '—'],
                         ['other co-sponsors of the March text', '38', '—'],
                         ['preambular paragraphs checked since', 'all', 'new practice']]),
 exhibit_cap='Eleven statements one way, one co-sponsored recital the other, and the recital is '
             'the one being quoted.',
 exhibit_note='The 2016 instrument has no provision determining its own scope; the question is '
              'one of practice.',
 voices=[('Nadia Barakat', 'Multilateral Affairs, Geneva',
          'Say it plainly. The Ministry’s position is unchanged, the recital was accepted '
          'without the check we now run, and here are the eleven occasions on which we have '
          'stated the position.'),
         ('Samir Haddad', 'Legal and Treaties',
          'Do not describe it as an oversight. A state that admits it co-sponsored a recital '
          'carelessly has told everybody that its co-sponsorship means nothing, which is worse '
          'for us than one awkward paragraph.'),
         ('Dr Hana Mourad', 'Policy Planning',
          'Whatever we say now, decide what we do next time. If the clause reappears and we '
          'co-sponsor again, the eleven occasions stop counting.')],
 steps=[('Find it', 'How many times has the Ministry stated the position?'),
        ('Compare it', 'What are the three positions?'),
        ('Infer it', 'Why does Samir object to the word oversight?'),
        ('Weigh it', 'A plain explanation against the value of co-sponsorship.'),
        ('Decide', 'What does the Ministry say, and what does it do next time?')],
 analysis=[('Find it. How many co-sponsored texts recite the contrary?', 'one, the March resolution'),
           ('Compare it. What does Nadia propose?', 'stating the position plainly with the eleven occasions'),
           ('Infer it. What is Samir’s concern?', 'that admitting carelessness devalues the Ministry’s co-sponsorship generally'),
           ('Weigh it. What does the 2016 instrument say about its own scope?', 'nothing; the question is one of practice'),
           ('Decide. What would you do?', 'answers vary; stating the practice without the word oversight preserves both')],
 decision='Write what the Ministry says and what it does at the next tabling.',
 decision_steps=['Say what is said about the Ministry’s position.',
                 'Say what is said, if anything, about paragraph six.',
                 'Say what the Ministry does if the clause reappears.',
                 'Say what is recorded for the next delegation.'],
 bank=['The Ministry states that …',
       'As to paragraph 6, the Ministry …',
       'If the clause reappears, the delegation is to …',
       'It is recorded for future delegations that …',
       'This is reviewed …'],
 outcome='The Ministry restated its position with the eleven references and said of paragraph '
         'six only that a recital does not determine the scope of an instrument, which is '
         'correct and was accepted by both delegations without further exchange. A standing '
         'instruction was added: where a preambular paragraph recites a matter on which the '
         'Ministry has a stated position to the contrary, the delegation is to seek '
         'instructions before co-sponsoring and to record the paragraph in its report whatever '
         'it then does. In the following year the clause reappeared twice; on both occasions the '
         'Ministry co-sponsored and recorded it, which Samir says is the right answer and the '
         'one he would have refused to write down a year earlier, because it looks like '
         'conceding in advance and is in fact the only way to concede knowingly.',
 outcome_q=[('What did the Ministry say about paragraph six?', 'only that a recital does not determine the scope of an instrument'),
            ('What does the standing instruction require?', 'seeking instructions before co-sponsoring and recording the paragraph whatever is done')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Draft the preamble',
 task=['This is the tasking Nadia used in March, which produced fourteen correct preambular '
       'paragraphs in the right forms.',
       'Two of them recited matters the Ministry has stated eleven times that it does not '
       'accept.'],
 draft=['Draft the preambular paragraphs for the resolution.',
        'Use the usual forms.',
        'Cite the relevant instruments.',
        'Keep it to the normal number.',
        'Follow the practice of the forum.',
        'Before the tabling.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and "relevant" is doing two jobs that are not the same job.',
 asked=['A citation check against the Ministry’s acceptances',
        'Flagged paragraphs left unsoftened',
        'Silence in the record treated as silence'],
 back=['14 correct paragraphs in the right forms',
       '2 reciting matters the Ministry rejects',
       'No check of any kind against our record'],
 gap='"The relevant instruments" means relevant to the subject and says nothing about relevant '
     'to what the Ministry has accepted, "the normal number" is not a number, "the practice of '
     'the forum" does not bound the citations, and nothing says what to do with a paragraph '
     'that recites a contrary position.',
 back_cap='Fourteen paragraphs that were right in form and twice wrong in the one way nobody '
          'was looking at.',
 back_note='Line three is the failure. Relevance to the subject is not relevance to the '
           'Ministry’s record, and only the second question would have caught paragraph six.',
 diagnosis=[('[1] "the preambular paragraphs" — for which text, and how many?', 'unscoped set'),
            ('[2] "the relevant instruments" — relevant to the subject or to our acceptances?', 'unscoped set'),
            ('[3] "the normal number" — and if the subject requires more?', 'missing condition'),
            ('[4] "follow the practice of the forum" — including where it cites what we reject?', 'unstated exception'),
            ('[5] nothing on contrary positions — cited anyway, or flagged?', 'unstated exception'),
            ('[6] "before the tabling" — and if the check cannot be completed in time?', 'missing condition')],
 rewrite='Rewrite the tasking so that every citation is checked against the Ministry’s own '
         'record.',
 scaffold=['What the delegation must be able to do knowingly',
           'The preamble only, and what is excluded',
           'The conventions, the instruments and the acceptance record',
           'Conventional forms; a check per citation with its text; flags unsoftened; no operative language',
           'The paragraphs, the checks and the time',
           'What a silent record means'],
 bank=['Draft … and identify any that … , so that …',
       'Cover … ; … are out of scope and are not to be …',
       'Work from … , … and …',
       'Use … ; for each paragraph citing … , state whether … , giving … ; where it has not, mark … and do not … ; propose no …',
       'Return … paragraphs with … , within …',
       'Where the record is silent … , mark … rather than …'],
 check=['Is relevance to the Ministry’s record required as well as to the subject?',
        'Is the number of paragraphs stated?',
        'Is a flagged paragraph required to stay unsoftened?',
        'Is silence in the record excluded as acceptance?'],
 model=['Draft the Ministry’s 14 preambular paragraphs and identify any that recall something the Ministry has not previously accepted, so that the delegation accepts them knowingly',
        'The preambular paragraphs only; the 9 operative paragraphs are out of scope and are not to be drafted',
        'The forum’s drafting conventions, the instruments proposed for citation, and the Ministry’s record of accepted positions',
        'Use the conventional opening forms of the forum; for each paragraph citing an instrument, resolution or report, state whether the Ministry has previously accepted that instrument’s application to the subject, giving the text in which it did so; where it has not, mark the paragraph and do not soften the citation; propose no operative language',
        '14 drafted paragraphs with a citation check against each, within 1 hour',
        'Where the Ministry’s record is silent on an instrument, mark the paragraph as not established rather than treating silence as acceptance'],
 cost='2 preambular paragraphs co-sponsored by the Ministry reciting a position it has rejected '
      '11 times, 1 of which was quoted at it 11 months later by 2 delegations.'),

rev_fig=figs.split('FRONTING',
                   'Buried',
                   ['The fee shall not be increased in any case.',
                    'The Committee may only decide then.',
                    'The Parties will not meet until …',
                    'The delegation did not at any time …'],
                   'Fronted',
                   ['In no case shall the fee be increased.',
                    'Only then may the Committee decide.',
                    'Not until the report is received shall …',
                    'At no time did the delegation accept …']),
rev_fig_cap='Front the phrase, then invert subject and auxiliary.',
rev=dict(
 read=[('A preambular paragraph', ['decides', 'recites and decides nothing', 'authorises', 'requires a report'], 1),
       ('A co-sponsor recalls', ['nothing', 'whatever its preamble recalls', 'only operative text', 'the annex'], 1),
       ('The citation check takes', ['three weeks', 'nine minutes', 'a day', 'an afternoon'], 1),
       ('In the Decision Room, what was added as a standing instruction?', ['nothing', 'seek instructions and record the paragraph', 'never co-sponsor', 'block the clause'], 1)],
 listen_text='A clause reciting an instrument’s applicability to a category of case is '
             'evidence that the state treated it as applying there, and when it is quoted '
             'eleven months later the true answer that it decided nothing is of no use.',
 listen=[('A clause ____________ an instrument’s applicability.', 'reciting'),
         ('Evidence that the state treated it as ____________ there.', 'applying'),
         ('Quoted eleven ____________ later.', 'months'),
         ('The true answer that it decided nothing is of no ____________.', 'use')],
 speak=['Front three sentences from your work and invert where required.',
        'Say which part of a document your office treats as furniture.'],
 write='Write one line requiring a citation check against your own record.',
 vocab=[('An opening paragraph that recites and decides nothing is a ____________.', 'preambular paragraph'),
        ('The introductory words governing a list of sub-paragraphs are a ____________.', 'chapeau'),
        ('Adoption without a vote being taken is a ____________.', 'vote by consensus'),
        ('The instruction a resolution gives for further work is a ____________.', 'follow-up mandate'),
        ('A preambular paragraph citing an earlier text is a ____________.', 'recalling clause')],
 gram=[('In no case ____________ the fee be increased.', 'shall'),
       ('Only then ____________ the Committee decide.', 'may'),
       ('Not until the report is received ____________ the Parties meet.', 'shall'),
       ('At no time ____________ the delegation accept this.', 'did'),
       ('Under no circumstances ____________ access be refused.', 'shall')]),

found=['Find a recital in a document your office has signed and ask what it concedes.',
       'Check one citation against your own record of positions.',
       'Write one sentence for a report flagging a paragraph that will come back.',
       'Front and invert three sentences in your next formal draft.'],
end_line='A paragraph that decides nothing can still be quoted for years.',
end_next='Next: The Exact Word',
)
