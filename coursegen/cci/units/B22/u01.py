# -*- coding: utf-8 -*-
import figs

U = dict(
num=1,
title='An International Tender and What Disqualifies You',
gram='impersonal and nominal style in formal submissions',
ai='a tender dossier reduced to the lines that disqualify you',
strap='CEFR B2 · Grammar: impersonal and nominal style in formal submissions · '
      'AI: a tender dossier reduced to the lines that disqualify you',
cando=['read a tender dossier for the lines that disqualify a bid',
       'tell a mandatory requirement from a desirable one',
       'write in the impersonal register a tender committee expects',
       'decide not to bid, and say so in two paragraphs',
       'write a six-line tasking for a disqualification review'],

hero=('SIX WEEKS OF WORK, REJECTED AT THE ENVELOPE',
      ['The price was the lowest.',
       'The bid bond expired four days early.'],
      [(960, 'teal', 'long'), (180, 'grey', 'short'), (300, 'blue', 'short')]),
hero_cap='A bid is read first for compliance and only afterwards for price.',

warm=['Has your company ever bid for public or institutional work abroad?',
      'Who reads the tender conditions before the technical work begins?',
      'What would disqualify your last quotation if it had been a tender?'],

cast_note='Dr Anna Lindqvist heads Aurora’s export desk, and this book is hers: six books after '
          'a first enquiry, the company now writes to the whole world at once.',

read=[
 'An international tender is not a quotation with more paperwork; it is a procedure in which the '
 'first reading of your bid is a compliance check performed by somebody who is not permitted to '
 'overlook anything, however small.',
 'That reader does not compare your price with anybody else’s. He establishes whether your '
 'submission may be opened at all, and a bid that fails on a formality is set aside before any '
 'technical merit is considered.',
 'The dossier therefore divides into two kinds of requirement, and the division is rarely '
 'signalled as clearly as it should be. A mandatory requirement is one whose absence disqualifies '
 'you; a desirable requirement is one whose absence costs you points.',
 'The sentences that disqualify are usually short, scattered and dull: the bid shall remain valid '
 'for ninety days; the tender guarantee shall be issued by a bank acceptable to the purchaser; '
 'alternative offers shall not be considered; all documents shall be in English.',
 'Aurora bids for the supply of laboratory instruments to a university consortium in three '
 'countries, and the dossier runs to one hundred and forty pages. Four of its sentences decide '
 'whether six weeks of work will be read.'],

dp1=('Compliance first', 'Public procurement practice commonly provides for an administrative '
     'compliance check before technical and financial evaluation, with non-compliant bids '
     'excluded from further consideration.',
     'Source: general public procurement guidance, 2025–2026.'),

c_a=[('What is the first reading of a bid?', 'a compliance check'),
     ('What does that reader not do?', 'compare your price with anybody else’s'),
     ('What happens to a bid that fails on a formality?', 'it is set aside before any technical merit is considered'),
     ('What does a mandatory requirement do if unmet?', 'it disqualifies you'),
     ('What does a desirable requirement do if unmet?', 'it costs you points'),
     ('How long is the dossier Aurora receives?', 'one hundred and forty pages')],

c_b=[('A tender is a quotation with more paperwork.', 'F'),
     ('The compliance reader may overlook small omissions.', 'F'),
     ('A non-compliant bid is still evaluated on price.', 'F'),
     ('Disqualifying sentences are usually long and prominent.', 'F'),
     ('A desirable requirement costs points if unmet.', 'T'),
     ('Four sentences can decide six weeks of work.', 'T')],

c_c=[('The bid ____________ remain valid for ninety days.', 'shall'),
     ('Alternative offers ____________ not be considered.', 'shall'),
     ('All documents ____________ be submitted in English.', 'shall'),
     ('The guarantee shall be issued by a bank ____________ to the purchaser.', 'acceptable'),
     ('Bids received after the deadline ____________ be rejected.', 'will'),
     ('The submission ____________ comprise two sealed envelopes.', 'shall')],

c_d=[('A mandatory requirement, if unmet, ( costs points / disqualifies ).', ['costs points', 'disqualifies'], 1),
     ('A desirable requirement, if unmet, ( disqualifies / costs points ).', ['disqualifies', 'costs points'], 1),
     ('Compliance is checked ( before / after ) technical evaluation.', ['before', 'after'], 0),
     ('A bid bond that expires too early is ( a formality / a disqualification ).',
      ['a formality', 'a disqualification'], 1),
     ('An alternative offer, where excluded, should be ( submitted anyway / omitted ).',
      ['submitted anyway', 'omitted'], 1)],

c_e=('Mandatory or desirable? Decide for each line of the dossier.',
     [('the bid shall remain valid for ninety days', 'mandatory'),
      ('experience of similar supplies is desirable', 'desirable'),
      ('all documents shall be in English', 'mandatory'),
      ('a local service presence would be welcomed', 'desirable'),
      ('the tender guarantee shall be issued by an acceptable bank', 'mandatory'),
      ('training in the purchaser’s premises is preferred', 'desirable')],
     ['mandatory', 'desirable']),

v_fig_title='SIX WORDS OF A TENDER',
v_fig=[('doc', 'a tender dossier'), ('scale', 'an eligibility criterion'), ('key', 'a bid bond'),
       ('box', 'a sealed bid'), ('chart', 'a compliance matrix'), ('people', 'an authorised representative')],
v_fig_cap='Six words for the procedure that reads your formalities before your price.',

vocab=[
 ('an invitation to tender', 'a formal request for sealed bids'),
 ('a tender dossier', 'the full set of documents issued to bidders'),
 ('an eligibility criterion', 'a condition a bidder must satisfy'),
 ('a disqualification', 'exclusion of a bid from evaluation'),
 ('a mandatory requirement', 'a requirement whose absence excludes the bid'),
 ('a desirable requirement', 'a requirement whose absence loses points'),
 ('a bid bond', 'security that a bidder will honour its bid'),
 ('a tender guarantee', 'a bank guarantee supporting a bid'),
 ('a bid validity period', 'how long a bid remains open for acceptance'),
 ('a sealed bid', 'a bid submitted closed and opened at a fixed time'),
 ('a submission deadline', 'the latest moment a bid may arrive'),
 ('a clarification question', 'a written question about the dossier'),
 ('an addendum to the dossier', 'an issued change to the tender documents'),
 ('a compliance matrix', 'a table showing where each requirement is met'),
 ('a technical envelope', 'the part of a bid describing what is offered'),
 ('a financial envelope', 'the part of a bid containing the prices'),
 ('an alternative offer', 'a second offer on different terms'),
 ('a variant bid', 'a bid differing from the specification as issued'),
 ('a signature of the authorised representative', 'signature by a person entitled to bind the bidder'),
 ('a certificate of good standing', 'official confirmation that a company is properly registered')]
,
v_a=[('A formal request for sealed bids is an invitation to ____________.', 'tender'),
     ('A condition a bidder must satisfy is an ____________ criterion.', 'eligibility'),
     ('Security that a bidder will honour its bid is a bid ____________.', 'bond'),
     ('How long a bid remains open for acceptance is a bid ____________ period.', 'validity'),
     ('An issued change to the tender documents is an ____________ to the dossier.', 'addendum'),
     ('A table showing where each requirement is met is a compliance ____________.', 'matrix'),
     ('The part of a bid containing the prices is the ____________ envelope.', 'financial'),
     ('Official confirmation that a company is properly registered is a certificate of good ____________.', 'standing')],

v_b=[('A disqualification is exclusion of a bid', 'from evaluation.'),
     ('A mandatory requirement is a requirement', 'whose absence excludes the bid.'),
     ('A clarification question is a written question', 'about the dossier.'),
     ('An alternative offer is a second offer', 'on different terms.'),
     ('A variant bid is a bid', 'differing from the specification as issued.')],

g_title='Grammar: impersonal and nominal style in formal submissions',
g_rule=['A tender submission is written impersonally, because the committee is reading an offer '
        'from a company rather than a letter from a person: the goods offered comply with clause '
        '4.2 of the specification, and delivery is offered within ninety days of order.',
        'The nominal style replaces verbs with nouns where the noun is the thing being evaluated: '
        'not “we will install the instruments and train your staff”, but “installation and '
        'training are included, as described at section 7”.',
        'Cross-reference is part of the register. Every claim points to where it is evidenced: as '
        'shown in annexe 3; the certificate is enclosed at tab 9. A claim with no reference costs '
        'the committee time and costs you points.',
        'Avoid the first person except where the dossier asks for an undertaking, where it is '
        'required and should be exact: the bidder undertakes to maintain the bid for ninety days '
        'from the date of opening.'],
g_fig=('LOOSE',
       ['We can definitely do the installation.',
        'Our training is excellent.',
        'We think delivery would be about three months.',
        'We are a well-known company in Portugal.'],
       'PRECISE',
       ['Installation is included and is described at section 7.',
        'Training is included: two days on site, for up to eight staff, as set out at section 7.3.',
        'Delivery is offered within ninety days of order, as stated at section 5.',
        'The bidder was incorporated in 1994 and the certificate of good standing is at tab 9.'],
       'four sentences from a letter',
       'the same four as a submission'),
g_fig_cap='Impersonal, nominal and cross-referenced: three habits a committee rewards.',

g_a=[('The goods offered ____________ with clause 4.2 of the specification.', 'comply'),
     ('Installation and training ____________ included, as described at section 7.', 'are'),
     ('Delivery ____________ offered within ninety days of order.', 'is'),
     ('The certificate ____________ enclosed at tab 9.', 'is'),
     ('The bidder ____________ to maintain the bid for ninety days.', 'undertakes'),
     ('Evidence of experience ____________ provided at annexe 3.', 'is'),
     ('The prices ____________ stated in euros, exclusive of duty.', 'are'),
     ('Two days of training ____________ provided on site.', 'are'),
     ('The specification ____________ met in full, with no deviation.', 'is')],

g_b=[('( Installation is included and is described at section 7 / We can definitely do the installation ) — impersonal.', ['Installation is included and is described at section 7', 'We can definitely do the installation'], 0),
     ('( Training is included: two days on site, for up to eight staff / Our training is excellent ) — evidenced.',
      ['Training is included: two days on site, for up to eight staff', 'Our training is excellent'], 0),
     ('( Delivery is offered within ninety days of order / We think delivery would be about three months ) — exact.',
      ['Delivery is offered within ninety days of order', 'We think delivery would be about three months'], 0),
     ('( The bidder was incorporated in 1994 / We are a well-known company ) — checkable.',
      ['The bidder was incorporated in 1994', 'We are a well-known company'], 0),
     ('( The certificate is enclosed at tab 9 / You will find the certificate somewhere in the file ) — referenced.',
      ['The certificate is enclosed at tab 9', 'You will find the certificate somewhere in the file'], 0),
     ('( The bidder undertakes to maintain the bid for ninety days / We will keep the price open a while ) — an undertaking.',
      ['The bidder undertakes to maintain the bid for ninety days', 'We will keep the price open a while'], 0)],

d1=dict(
 title='Four sentences in a hundred and forty pages',
 fig=(['The engineers began at page sixty.', 'The conditions were on page nine.'],
      ['Six weeks of specification.', 'Four sentences of procedure.']),
 cap='Dr Anna Lindqvist and Inês Moreira, Porto, Monday morning.',
 lines=[('Anna', 'Before anybody prices anything, I want the four sentences that can disqualify us.'),
        ('Inês', 'The specification is the hard part, surely.'),
        ('Anna', 'The specification is the part we are good at; it is also the part nobody reads if the envelope is wrong.'),
        ('Inês', 'What am I looking for?'),
        ('Anna', 'Every sentence with “shall” that is about us rather than about the instruments, and every date.'),
        ('Inês', 'I found three on a first pass: bid validity ninety days, guarantee from an acceptable bank, all documents in English.'),
        ('Anna', 'The fourth is usually the one about alternatives. Look for it.'),
        ('Inês', 'Here: alternative offers shall not be considered.'),
        ('Anna', 'Which means the clever second option our sales engineer wanted to attach would have excluded the whole bid.'),
        ('Inês', 'He will not enjoy hearing that.'),
        ('Anna', 'He will enjoy it more than losing on a formality. Build me a compliance matrix before anybody writes a word of technical text.'),
        ('Inês', 'And if a requirement is one we cannot meet at all?')],
 a=[('What does Anna want first?', 'the four sentences that can disqualify Aurora'),
    ('Why not start with the specification?', 'nobody reads it if the envelope is wrong'),
    ('What should Inês look for?', 'every “shall” about the bidder, and every date'),
    ('What is the fourth sentence?', 'alternative offers shall not be considered'),
    ('What must be built first?', 'a compliance matrix')],
 b=[('Every sentence with ____________ that is about us.', 'shall'),
    ('A compliance ____________.', 'matrix'),
    ('Losing on a ____________.', 'formality'),
    ('Alternative offers shall not be ____________.', 'considered')]),

d2=dict(
 title='The decision not to bid',
 fig=(['We can meet eleven of twelve.', 'The twelfth is mandatory.'],
      ['A bid would be honest work.', 'It would also be wasted.']),
 cap='Anna and Daniel Okonjo, later the same week.',
 lines=[('Daniel', 'We meet eleven of the twelve mandatory requirements. I want to bid and explain the twelfth.'),
        ('Anna', 'Explain it to whom? The compliance reader has no authority to accept an explanation.'),
        ('Daniel', 'Somebody must have discretion.'),
        ('Anna', 'In a procedure of this kind, discretion is the thing they are most careful to remove.'),
        ('Daniel', 'So we spend nothing and learn nothing.'),
        ('Anna', 'We spend an afternoon and learn a great deal: we write to the purchaser, say precisely why we are not bidding, and ask whether the requirement is open to review for future rounds.'),
        ('Daniel', 'That is a letter admitting we cannot do something.'),
        ('Anna', 'It is a letter showing we read their dossier properly, which is rarer than you think and is remembered.'),
        ('Daniel', 'And the twelfth requirement itself?'),
        ('Anna', 'A local service presence in all three countries. That is a question for a strategy meeting, not for a bid due in nine days.'),
        ('Daniel', 'We could promise it and build it afterwards.'),
        ('Anna', 'We could promise it and fail, and never be invited again. Which of those two risks is yours to take?')],
 unresolved=True,
 a=[('How many mandatory requirements can Aurora meet?', 'eleven of twelve'),
    ('Why can the explanation not help?', 'the compliance reader has no authority to accept one'),
    ('What does Anna propose instead?', 'writing to say precisely why Aurora is not bidding, and asking about future rounds'),
    ('What is the twelfth requirement?', 'a local service presence in all three countries'),
    ('Why not promise it?', 'promising and failing means never being invited again')],
 b=[('Discretion is the thing they are careful to ____________.', 'remove'),
    ('We read their dossier ____________.', 'properly'),
    ('A question for a ____________ meeting.', 'strategy'),
    ('Promise it and ____________.', 'fail')]),

speak=[('Mandatory or desirable?',
        ['Your partner reads a line from a dossier.',
         'You say which it is, and what happens if it is unmet.',
         'Six each, then swap.']),
       ('Say it impersonally',
        ['Your partner says a sentence in the first person.',
         'You rewrite it impersonally with a cross-reference.',
         'Six each, then swap.']),
       ('Not bidding',
        ['Your partner names the requirement you cannot meet.',
         'You decline the tender in three sentences without apologising.',
         'Four each, then swap.'])],

ext_title='Read the dossier for exclusions before you read it for work',
ext_fig=figs.datatable('WHAT DISQUALIFIES A BID',
                       ['Line in the dossier', 'Effect'],
                       [['bid validity shorter than required', 'excluded'],
                        ['guarantee from an unacceptable bank', 'excluded'],
                        ['a document in the wrong language', 'excluded'],
                        ['an alternative offer where forbidden', 'excluded'],
                        ['an unsigned form', 'excluded'],
                        ['weaker experience than a rival', 'points lost']]),
ext_fig_cap='Five exclusions and one disadvantage: only the last is about how good you are.',
ext=[
 'A tender dossier reduced to the lines that disqualify you is the most valuable half-hour of '
 'work in a bid, and it belongs at the beginning, before a single page of technical text has been '
 'drafted by anybody.',
 'Give it the whole dossier, every addendum issued since, and the forms to be returned. Ask for '
 'one list only: the provisions whose breach excludes the bid, each quoted with its clause '
 'number and page.',
 'Ask for each line to be classified as mandatory or desirable with the words that make it so, '
 'because “shall” and “must” carry a consequence that “should”, “preferably” and “it would be '
 'welcomed” do not.',
 'Ask for every date to be extracted into one table: submission deadline in local time, bid '
 'validity, guarantee validity, delivery period, and the date by which clarification questions '
 'must be asked. Dates disqualify more bids than specifications do.',
 'Ask it to flag the forms that require a signature by an authorised representative, and to say '
 'which documents must be originals rather than copies. Then have a second person check that '
 'list against the dossier by hand.',
 'What no system can decide is whether a requirement you cannot meet is worth building a capability '
 'for. It can tell you that you would be excluded today, which is the fact you need, and the '
 'decision that follows is a commercial one.'],

dp2=('Formal exclusion', 'Procurement guidance commonly treats late submission, missing '
     'guarantees, unsigned forms and prohibited variants as grounds for exclusion before '
     'evaluation, independently of the quality of the offer.',
     'Source: general public procurement guidance, 2025–2026.'),

e_a=[('When should the exclusion review happen?', 'at the beginning, before any technical drafting'),
     ('What three inputs are needed?', 'the dossier, every addendum and the forms to be returned'),
     ('What distinguishes mandatory wording?', '“shall” and “must” carry a consequence that “should” and “preferably” do not'),
     ('What should go into one table?', 'every date, including the deadline in local time'),
     ('What can no system decide?', 'whether to build a capability you lack')],
e_b=[('The exclusion review belongs at the end of a bid.', 'F'),
     ('Addenda must be included in the review.', 'T'),
     ('Dates disqualify more bids than specifications.', 'T'),
     ('A second person should check the list by hand.', 'T'),
     ('A system can decide whether to build a capability.', 'F'),
     ('“Preferably” carries the same consequence as “shall”.', 'F')],

w_model='Purpose: so that we know before Thursday whether this bid can be submitted at all, and '
        'on what conditions. Scope: the tender dossier of 2 November for the university consortium, '
        'together with addenda 1 and 2; the technical specification at pages 60 to 118 is not part '
        'of this review. Inputs: the dossier, both addenda, the eleven forms to be returned, and '
        'our certificate of good standing. Criteria: every provision whose breach excludes the bid, '
        'quoted with clause number and page; each classified mandatory or desirable with the word '
        'that makes it so; every date in one table in local time; and every form requiring an '
        'original or an authorised signature. Done: on my desk by Thursday 09.00, as two pages. '
        'Fallback: where a provision’s effect is unclear, it is listed as mandatory and flagged for '
        'a clarification question, never assumed to be desirable.',
w_fig=figs.spec_card('SIX LINES FOR AN EXCLUSION REVIEW',
                     [('Purpose', 'can this bid be submitted at all?'),
                      ('Scope', 'the dossier and both addenda, not the specification'),
                      ('Inputs', 'dossier, addenda, forms, good standing'),
                      ('Criteria', 'exclusions quoted, classified, dated, signed'),
                      ('Done', 'Thursday 09.00, two pages'),
                      ('Fallback', 'unclear? mandatory, and ask')]),
w_fig_cap='Six lines, and the sixth treats every doubt as a disqualifier until answered.',
w_task='Write a six-line tasking for an exclusion review of a tender dossier.',
w_steps=['Line 1: say what the review must settle, and by when.',
         'Line 2: say which documents, and which part is excluded.',
         'Line 3: say what you are giving it.',
         'Line 4: say what must be quoted, classified, tabled and flagged.',
         'Line 5: say when you need it and how long it should be.',
         'Line 6: say what happens where a provision is unclear.'],
w_bank=['Purpose: so that we know before … whether this bid can be submitted at all',
        'Scope: the tender dossier of … with addenda … ; the technical specification is not part of this review',
        'Inputs: the dossier, the addenda, the forms to be returned and our certificate of good standing',
        'Criteria: every provision whose breach excludes the bid, quoted with clause and page; classified mandatory or desirable with the word that makes it so; every date in one table in local time; every form requiring an original or an authorised signature',
        'Done: on my desk by … , as two pages',
        'Fallback: where a provision’s effect is unclear, it is listed as mandatory and flagged for a clarification question'],
w_check=['Is every exclusion quoted with its clause?',
         'Is each one classified by its own wording?',
         'Are all the dates in one table?',
         'Is an unclear provision treated as mandatory?'],

t_title='A tender dossier reduced to the lines that disqualify you',
t_fig=figs.split('A HUNDRED AND FORTY PAGES',
                 'It can extract',
                 ['every provision with shall or must',
                  'every date and deadline',
                  'the forms needing signature',
                  'the documents needing originals'],
                 'It must not decide',
                 ['whether to bid',
                  'whether a rule will be enforced',
                  'whether to promise a capability',
                  'that a doubtful line is harmless']),
t_fig_cap='It finds the exclusions. Whether to bid is a decision with a name on it.',
t_body=[
 'Give it the dossier, every addendum and the forms to be returned, and ask for one list: the '
 'provisions whose breach excludes the bid, each quoted with clause and page.',
 'A tender dossier reduced to the lines that disqualify you is worth little unless the dates come '
 'out as a separate table in local time, so ask for that table by name.',
 'Then ask for anything doubtful to be listed as mandatory and flagged for a clarification '
 'question, and have a person check the list against the dossier by hand before anybody drafts.'],
t_say=[('Ask for one list: ', 'Every provision whose breach excludes the bid, quoted with clause and page.'),
       ('Ask for the dates apart: ', 'All deadlines in one table, in the purchaser’s local time.'),
       ('Doubt is mandatory: ', 'List anything unclear as mandatory and flag it for a question.')],
t_bound='It cannot tell you whether a purchaser will enforce a formality it has waived before, '
        'and it will not know that the consortium’s procurement officer retires in January.',
t_a=[('Give it the dossier and every ____________.', 'addendum'),
     ('Ask for one ____________ of exclusions.', 'list'),
     ('Each quoted with ____________ and page.', 'clause'),
     ('Dates in a separate ____________.', 'table'),
     ('In the purchaser’s ____________ time.', 'local'),
     ('Treat anything doubtful as ____________.', 'mandatory')],
t_b_rubric='Say what the review should report for each line.',
t_b=[('the bid shall remain valid for ninety days', 'mandatory: quote clause and page, and table the date'),
     ('experience of similar supplies is desirable', 'desirable: points only'),
     ('a line whose effect is unclear', 'mandatory, flagged for a clarification question'),
     ('a form requiring an original signature', 'flag it: original and authorised signatory')],

case=dict(
 title='The Decision Room · The lowest price, rejected unopened',
 brief=[
  'Aurora bids for a consortium supply contract and prices it keenly, cutting its margin to a '
  'point the board would accept only for a reference customer of this size.',
  'The tender guarantee its bank issues is valid for eighty-six days. The dossier requires a '
  'guarantee valid for the whole bid validity period of ninety days, and the difference is four '
  'days.',
  'The financial envelope is never opened. Aurora later learns its price was the lowest of the '
  'seven bids received, and the contract is awarded at eleven per cent above it.'],
 exhibit=figs.datatable('THE BID THAT WAS NOT READ',
                        ['Item', 'Position'],
                        [['dossier pages', '140'],
                         ['weeks of preparation', '6'],
                         ['guarantee validity, days', '86'],
                         ['validity required, days', '90'],
                         ['bids received', '7'],
                         ['award above Aurora’s price, %', '11']]),
 exhibit_cap='Four days of bank paper against eleven per cent of a contract.',
 exhibit_note='Nobody at Aurora was careless. The guarantee was ordered from the bank on the '
              'basis of the submission date rather than the opening date.',
 voices=[('Daniel Okonjo', 'export manager',
          'Four days. Any reasonable purchaser would have asked us to extend it.'),
         ('Dr Anna Lindqvist', 'head of the export desk',
          'A compliance reader who asks one bidder to fix something must ask all seven, and he knows it.'),
         ('Inês Moreira', 'export correspondent',
          'The dates were in the dossier on page nine. We built the matrix in week five.')],
 steps=[('Find it', 'What was wrong?'),
        ('Compare it', 'What the dossier required.'),
        ('Infer it', 'Why was it ordered wrongly?'),
        ('Weigh it', 'Six weeks against a half-hour review.'),
        ('Decide', 'What happens first in the next bid?')],
 analysis=[('Find it. What was wrong?', 'the guarantee was valid for eighty-six days'),
           ('Compare it. What was required?', 'ninety days, the full bid validity period'),
           ('Infer it. Why wrongly?', 'it was ordered from the submission date, not the opening date'),
           ('Weigh it. What was lost?', 'six weeks of work and the lowest-priced contract'),
           ('Decide. What comes first?', 'the exclusion review and the date table, in week one')],
 decision='Write the rule, in four lines.',
 decision_steps=['Say what is done before any technical drafting begins.',
                 'Say who checks the date table.',
                 'Say how guarantee validity is calculated.',
                 'Say what is done with a doubtful provision.'],
 bank=['No technical text is drafted until the exclusion review and the date table are complete.',
       'The date table is checked by a second person against the dossier by hand.',
       'Guarantee and bid validity are calculated from the date of opening, never from the date of submission, with five days added.',
       'Any provision whose effect is unclear is treated as mandatory and raised as a clarification question before the deadline for questions.'],
 outcome='Aurora adopts the rule and bids nine more times in two years, winning three. In the '
         'nine bids the exclusion review finds twenty-two mandatory provisions, four of which '
         'would have excluded the bid as originally planned, and the date table is corrected by '
         'the second reader on three occasions. No Aurora bid is rejected on a formality again.',
 outcome_q=[('How many further bids?', 'nine'),
            ('How many were won?', 'three'),
            ('How many provisions would have excluded a bid?', 'four'),
            ('How often did the second reader correct the dates?', 'three times'),
            ('How many bids were rejected on a formality?', 'none')],
 tags=['manager_wrong', 'sceptic_right']),

lab=dict(
 title='Brief Lab · Have a look at the tender and see if we can do it',
 task=['An export manager asked a correspondent to assess a tender dossier.',
       'This is the instruction as it was given, and what came back.'],
 draft=['Have a look at the tender and see if we can do it.',
        'The technical side mainly.',
        'Flag anything odd.',
        'It is a big one.',
        'Soon.',
        'Thanks.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six lines, and “the technical side mainly” sent the reader past page nine.',
 asked=['The technical side mainly', 'Flag anything odd', 'It is a big one'],
 back=['118 pages read', '0 exclusions listed', '1 date extracted'],
 gap='Nobody said that the exclusions and the dates were the point of the reading.',
 back_cap='A hundred and eighteen pages read, and the four sentences that mattered unread.',
 back_note='“Flag anything odd” leaves the reader to decide what odd means, and a dull '
           'procedural sentence never looks odd.',
 diagnosis=[('“flag anything odd”', 'unstated criterion'),
            ('“the technical side mainly”', 'unscoped set'),
            ('“see if we can do it”', 'unstated criterion'),
            ('“soon”', 'undefined done'),
            ('“have a look at the tender”', 'unscoped set'),
            ('“it is a big one”', 'undefined done')],
 rewrite='Rewrite it on the six lines so that the exclusions are found before anything else.',
 scaffold=['what the review must settle, and by when',
           'which documents, and which part is excluded',
           'what you are giving it',
           'what must be quoted, classified, tabled and flagged',
           'when you need it and how long it should be',
           'what happens where a provision is unclear'],
 bank=['Purpose: so that we know before Thursday whether this bid can be submitted at all, and on what conditions',
       'Scope: the tender dossier of 2 November for the university consortium, together with addenda 1 and 2; the technical specification at pages 60 to 118 is not part of this review',
       'Inputs: the dossier, both addenda, the eleven forms to be returned, and our certificate of good standing',
       'Criteria: every provision whose breach excludes the bid, quoted with clause number and page; each classified mandatory or desirable with the word that makes it so; every date in one table in local time; and every form requiring an original or an authorised signature',
       'Done: on my desk by Thursday 09.00, as two pages',
       'Fallback: where a provision’s effect is unclear, it is listed as mandatory and flagged for a clarification question, never assumed to be desirable'],
 check=['Are the exclusions quoted with clause and page?',
        'Is each classified by its own wording?',
        'Are the dates in one table in local time?',
        'Is a doubtful provision treated as mandatory?'],
 model=['so that we know before Thursday whether this bid can be submitted at all, and on what conditions',
        'the tender dossier of 2 November for the university consortium, together with addenda 1 and 2; the technical specification at pages 60 to 118 is not part of this review',
        'the dossier, both addenda, the eleven forms to be returned, and our certificate of good standing',
        'every provision whose breach excludes the bid, quoted with clause number and page; each classified mandatory or desirable with the word that makes it so; every date in one table in local time; and every form requiring an original or an authorised signature',
        'on my desk by Thursday 09.00, as two pages',
        'where a provision’s effect is unclear, it is listed as mandatory and flagged for a clarification question, never assumed to be desirable'],
 cost='118 pages read, 0 exclusions listed, 1 date extracted and 6 weeks spent on a bid that could not be opened.'),

lang=dict(
 title='The Money Conversation · Telling your own board the bid was never read',
 setting=[
  'Aurora’s lowest-priced bid was excluded because its tender guarantee was four days short, and '
  'the contract went to a rival eleven per cent above Aurora’s price.',
  'Anna must report this to a board that approved an unusually thin margin for the sake of the '
  'reference, and the report must neither minimise the error nor invite a search for somebody to '
  'blame.'],
 ladder=[('A bid excluded unopened', 'on four days of bank paper'),
         ('A margin the board approved', 'for a contract now lost'),
         ('Either spread the blame thinly', 'or name the failure and the fix')],
 cap='Six weeks, the lowest price of seven, and a guarantee dated from the wrong day.',
 turns=[('Turn 1 · The chairman', 'We were the cheapest and we were not even opened. How does that happen?'),
        ('Turn 2 · Anna', 'Because we ordered the guarantee from the submission date instead of the opening date, and I did not check it. That is mine.'),
        ('Turn 3 · The chairman', 'Somebody in the bank gave you that date.')],
 holds=['The bank gave us what we asked for, and we asked for the wrong period.',
        'The dossier states ninety days from opening on page nine, and we had read page nine.',
        'The exclusion review existed; it was done in week five, after the drafting rather than before it.',
        'From the next bid no technical text is drafted until that review and the date table are finished.',
        'A second reader checks the date table by hand, and the margin we approved is not the lesson here.',
        'The lesson is that a bid is read for compliance first, and we shall be ready for that reading.'],
 redline='Never let a formal exclusion be reported as bad luck, and never let the search for a '
         'person replace the change in the procedure.',
 score=['Named the error without spreading it.',
        'Resisted the offer to blame the bank.',
        'Showed that the information was already held.',
        'Changed the order of the work, not the people.',
        'Kept the margin question separate from the failure.'],
 a=[('Why was the bid excluded?', 'the guarantee was ordered from the wrong date'),
    ('Who does Anna say is responsible?', 'herself'),
    ('What does the dossier say on page nine?', 'ninety days from opening'),
    ('When was the exclusion review done?', 'in week five, after the drafting'),
    ('What changes for the next bid?', 'no technical text until the review and date table are finished'),
    ('What is the redline?', 'never report a formal exclusion as bad luck')]),

rev_fig=figs.split('BEFORE YOU DRAFT A BID',
                   'Find the exclusions',
                   ['every shall about the bidder',
                    'every must and shall not',
                    'forms needing signature',
                    'documents needing originals'],
                   'Table the dates',
                   ['submission, in local time',
                    'bid validity, from opening',
                    'guarantee validity',
                    'the last day for questions']),
rev_fig_cap='Two half-hours that decide whether six weeks will be read.',
rev=dict(
 read=[('What is the first reading of a bid?',
        ['a compliance check', 'a price comparison',
         'a technical evaluation', 'a reference check'], 0),
       ('What does an unmet mandatory requirement do?',
        ['it excludes the bid', 'it loses points',
         'it delays the award', 'it needs a letter'], 0),
       ('From what date is bid validity normally counted?',
        ['the date of opening', 'the date of submission',
         'the date of the dossier', 'the date of award'], 0),
       ('What should be done with an unclear provision?',
        ['treat it as mandatory and ask', 'treat it as desirable',
         'ignore it', 'mention it in the bid'], 0)],
 listen_text='Give it the dossier, every addendum and the forms. Ask for one list of provisions '
             'whose breach excludes the bid, quoted with clause and page, and for every date in a '
             'separate table in local time.',
 listen=[('Give it the dossier and every ____________.', 'addendum'),
         ('Ask for one ____________ of exclusions.', 'list'),
         ('Quoted with ____________ and page.', 'clause'),
         ('Dates in a separate ____________.', 'table')],
 speak=['Classify twelve dossier lines as mandatory or desirable.',
        'Then rewrite six first-person sentences impersonally with references.'],
 write='Write a six-line tasking for an exclusion review of a tender dossier.',
 vocab=[('A condition a bidder must satisfy is an ____________ criterion.', 'eligibility'),
        ('Security that a bidder will honour its bid is a bid ____________.', 'bond'),
        ('A table showing where each requirement is met is a compliance ____________.', 'matrix'),
        ('An issued change to the tender documents is an ____________ to the dossier.', 'addendum')],
 gram=[('The goods offered ____________ with clause 4.2.', 'comply'),
       ('Installation and training ____________ included.', 'are'),
       ('The bidder ____________ to maintain the bid for ninety days.', 'undertakes'),
       ('Evidence of experience ____________ provided at annexe 3.', 'is')]),

found=['Read a dossier for what excludes you before you read it for what it asks.',
       'Classify every requirement by its own wording, and table every date in local time.',
       'Write the submission impersonally, with a reference behind every claim.',
       'Where a provision is unclear, treat it as mandatory and ask the question in time.'],
end_line='A committee reads your formalities first because it must. Six weeks of good work waits behind four dull sentences.',
end_next='Next: A Proposal for a Reader With Twenty Minutes')
