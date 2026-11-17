# -*- coding: utf-8 -*-
"""Unit 37 - Value and Authenticity in Art. IELTS Volume 4, band 6.5."""

_CAT = dict(kind='bar', title='Sales by category',
            sub='share of total value, two years compared', ylab='% of value',
            cats=['Post-war &\ncontemporary', 'Modern', 'Old masters',
                  'Impressionist', 'Other'],
            series=[('Year 1', [38, 24, 14, 18, 6]),
                    ('Year 5', [52, 21, 9, 13, 5])])

_BAND = dict(kind='bar', title='Sales by price band',
             sub='share of lots and share of value', ylab='%',
             cats=['Under\n$50k', '$50k–$1m', '$1m–$10m', 'Over\n$10m'],
             series=[('Share of lots', [86, 11, 2.6, 0.4]),
                     ('Share of value', [9, 21, 29, 41])])

UNIT = dict(
 n=37, vol=4, level='B2', band='6.5',
 theme='Value and Authenticity in Art',
 opener=(
   'A loan agreement, four buyers, two charts, a forgery admired for forty '
   'years, and finally two canvases that are identical in every respect an '
   'instrument can measure. The unit asks a question that sounds abstract and '
   'turns out to be entirely practical: when we say a painting is valuable, '
   'what exactly are we saying is valuable?'),

 cycles=[
  dict(
   sub='Lending a work',
   step=1,
   read=[
    dict(heading='Lending to an exhibition: conditions',
         kind='Loan agreement summary',
         task='Matching features and short answer',
         band='gt_short', qtype='Questions 1-5',
         skill=('Reading an agreement for what it obliges you to do',
                ['An agreement has two kinds of sentence: what the other '
                 'party will do, and what you must do. Questions come '
                 'overwhelmingly from the second kind.',
                 'On a first pass, mark every must, shall and is required to. '
                 'Those sentences are where the answers live.']),
         paras=[
          'The borrower undertakes to insure the work for the agreed value '
          'from the moment it leaves the lender’s premises until the moment '
          'it is returned to them. This is known as nail-to-nail cover and it '
          'is not satisfied by insurance that begins on arrival at the '
          'exhibition.',
          'The lender must supply a condition report prepared within the '
          'previous three months. Where no such report exists the borrower '
          'will arrange for one at its own expense, but the lender remains '
          'responsible for disclosing any known structural weakness, previous '
          'restoration or sensitivity to light or humidity.',
          'The work will be displayed at between 18 and 22 degrees and between '
          '45 and 60 per cent relative humidity, and light levels will not '
          'exceed 150 lux for oil paintings or 50 lux for works on paper. '
          'These figures are not negotiable and a venue unable to meet them '
          'will not be supplied.',
          'Where the agreed value exceeds one million, the work will travel '
          'accompanied by a courier nominated by the lender, at the '
          'borrower’s expense. The courier supervises packing, travels with '
          'the crate, and must be present at unpacking and at the opening of '
          'the crate after acclimatisation, which takes a minimum of '
          'twenty-four hours.'],
         items=[
          ('Insurance must run from',
           ['arrival at the venue', 'the lender’s premises',
            'the date of the agreement', 'the opening of the exhibition'], 1,
           'Nail-to-nail cover, which paragraph 1 says is not satisfied by '
           'cover beginning on arrival.'),
          ('Who pays for a condition report where none exists?',
           ['The lender', 'The borrower', 'The insurer', 'It is shared'], 1,
           'Paragraph 2, though the lender still must disclose known '
           'weaknesses.'),
          ('Light levels for works on paper must not exceed ____________ '
           'lux.', None, '50',
           'Paragraph 3, against 150 lux for oil paintings.'),
          ('A courier is required where the value exceeds ____________.',
           None, 'one million',
           'Paragraph 4, and the cost falls on the borrower.'),
          ('Acclimatisation takes a minimum of ____________ hours.', None,
           'twenty-four',
           'Paragraph 4: the crate is opened only after that period, with '
           'the courier present.')]),
    dict(heading='Insurance and transport',
         kind='Procedure notice', task='Flow-chart completion',
         band='gt_short', qtype='Questions 6-9',
         paras=[
          'Begin with a valuation. Where the work has not been valued in the '
          'past two years, an independent valuation must be obtained before '
          'any insurance is arranged, since cover at an outdated figure is '
          'the commonest cause of dispute following damage.',
          'The borrower then issues a certificate of insurance naming the '
          'lender as the insured party. The lender should check three things '
          'on it: the agreed value, the dates, and whether the policy excludes '
          'damage occurring during installation, which many standard policies '
          'do.',
          'Packing is arranged next. A fine art shipper builds a crate to the '
          'dimensions of the work with its frame, and the crate is sealed in '
          'the presence of the courier where one has been appointed. Nothing '
          'is opened in transit.',
          'Transport is booked as a shared or a dedicated load. A shared '
          'load is substantially cheaper and involves other works and other '
          'stops; a dedicated load travels directly and is normally required '
          'where a courier has been appointed.',
          'On arrival the crate is left sealed for the acclimatisation period '
          'before being opened, and a second condition report is prepared '
          'immediately on unpacking. Any discrepancy between the two reports '
          'must be notified within forty-eight hours; a claim notified later '
          'than that may be refused on that ground alone.'],
         items=[
          ('Obtain an independent ____________ if the work has not been '
           'valued recently.', None, 'valuation',
           'Paragraph 1: cover at an outdated figure is the commonest cause '
           'of dispute.'),
          ('Check whether the policy excludes damage during ____________.',
           None, 'installation',
           'Paragraph 2, which many standard policies do exclude.'),
          ('The crate is sealed in the presence of the ____________.', None,
           'courier', 'Paragraph 3, where one has been appointed.'),
          ('A discrepancy must be notified within ____________ hours.', None,
           'forty-eight',
           'Paragraph 4: a later claim may be refused on that ground '
           'alone.')])],
   listen=[
    dict(heading='Arranging a loan', part='Part 1',
         task='A call between a gallery and a private lender', band='l1',
         qtype='Questions 10-14',
         script=[
          ('Registrar', 'Good morning, this is Esperanza Villalobos from the '
           'registrar’s office at the Thornleigh Gallery.'),
          ('Lender', 'Yes, you wrote to me about the two drawings.'),
          ('Registrar', 'I did. Can I confirm the agreed value for insurance? '
           'We have them at two hundred and forty thousand for the pair.'),
          ('Lender', 'That was the 2021 valuation. I had them looked at again '
           'in March and the figure is now three hundred and ten.'),
          ('Registrar', 'Three hundred and ten thousand. Thank you, that is '
           'exactly why I ask. We would have insured at the old figure and you '
           'would have discovered the gap at the worst possible moment.'),
          ('Lender', 'Do they need a courier?'),
          ('Registrar', 'Not at that value, no. Our threshold is one million. '
           'But they are works on paper, so there are two things I should '
           'raise. The first is light. We display works on paper at fifty lux '
           'and that is a condition of the loan, not a preference.'),
          ('Lender', 'That is lower than my own house, I suspect.'),
          ('Registrar', 'Almost certainly, and it is why they have survived. '
           'The second is the condition report. Do you have one from the last '
           'three months?'),
          ('Lender', 'I have one from 2019.'),
          ('Registrar', 'Then we will arrange a new one and we will pay for '
           'it. What I do need from you is disclosure of anything you know: '
           'previous restoration, a tear, any time they have been exposed to '
           'damp. That obligation stays with you even when we commission the '
           'report.'),
          ('Lender', 'One of them was relined in the nineteen-eighties.'),
          ('Registrar', 'Then I will note that now, and it will go in the '
           'file instead of being discovered by a conservator in six '
           'weeks.')],
         items=[
          ('Updated value for the pair: £____________', None, '310,000',
           'Revalued in March, replacing the 2021 figure of 240,000.'),
          ('A courier is required above £____________.', None, '1 million',
           'The gallery threshold, which these works are below.'),
          ('Works on paper are displayed at ____________ lux.', None, '50',
           'Stated as a condition of the loan, not a preference.'),
          ('A condition report must be from the last ____________ months.',
           None, 'three',
           'The lender’s report is from 2019, so the gallery will commission '
           'a new one.'),
          ('The lender discloses that one work was ____________ in the '
           '1980s.', None, 'relined',
           'Which the registrar notes immediately instead of leaving it to be '
           'found later.')]),
    dict(heading='A short talk: what a registrar worries about', part='Part 2',
         task='A briefing to new museum staff', band='l2',
         qtype='Questions 15-18',
         script=[
          ('Registrar', 'I look after objects that belong to other people, '
           'and almost everything that goes wrong in my job goes wrong in one '
           'of four places. I am going to name them in order of how often, '
           'which is not the order you would guess.'),
          ('Registrar', 'Fourth, and rarest, is transport. Everybody fears '
           'the lorry. Fine art shippers are extremely good and in eleven '
           'years I have had one incident in transit, which was a delay, with nothing broken. The lorry is where the anxiety goes because it is '
           'the part you can picture.'),
          ('Registrar', 'Third is display conditions, and that is mostly a failure of nerve; the equipment is rarely at fault. A curator wants a work '
           'in a particular room, the room has a window, and somebody persuades '
           'themselves that a blind will do. The numbers in the agreement are '
           'not aspirations.'),
          ('Registrar', 'Second is insurance, and specifically the gap '
           'between an agreed value and a current value. If a lender had the '
           'work valued four years ago and it has tripled, and we insure at '
           'the old figure, then nothing is wrong until something is wrong, at '
           'which point it is catastrophic and entirely our fault.'),
          ('Registrar', 'Before I get to the first, one general remark about '
           'all three. None of them is an accident. Each is a place where '
           'somebody made a judgement under time pressure with incomplete '
           'information, and the fix in every case is a checklist, which no amount of care replaces. I say that because new staff tend to assume the '
           'solution is vigilance, and vigilance is the one resource that '
           'reliably runs out at four o’clock on an installation day.'),
          ('Registrar', 'And first, by a wide margin, is the condition report. '
           'A loan without a recent report is an argument waiting to happen, '
           'because every object has small damages and nobody can afterwards '
           'prove when they occurred. Three quarters of the disputes I have '
           'seen in this sector come down to two reports that do not agree, or '
           'to one report that does not exist.')],
         items=[
          ('Which does the registrar say causes the most problems?',
           ['Transport', 'Display conditions', 'Insurance',
            'Condition reports'], 3,
           'First by a wide margin, and three quarters of disputes come down '
           'to it.'),
          ('What does she say about transport?',
           ['It is the biggest risk', 'It is where anxiety goes but not '
            'incidents', 'It is uninsurable', 'It is improving'], 1,
           'One incident in eleven years, and that a delay with nothing broken.'),
          ('Failures of display conditions are mostly',
           ['equipment failures', 'a failure of nerve', 'budget decisions',
            'the lender’s fault'], 1,
           'A curator wants a particular room and somebody decides a blind '
           'will do.'),
          ('The insurance problem she describes is',
           ['underinsurance at an outdated value', 'excluded perils',
            'late payment', 'disputed ownership'], 0,
           'Nothing is wrong until something is wrong, at which point it is '
           'catastrophic.')])],
   speak=dict(
    part='Part 1', focus='Objects people value',
    intro=('Two or three sentences. Everyday possessions are a perfectly '
           'good answer here; the examiner is not asking about art.'),
    qs=['Do you own anything that you would never sell?',
        'Are there museums or galleries where you live?',
        'Do you think people value old things more than new ones?',
        'Would you lend something valuable to an exhibition?'],
    shape=[('answer', 'My grandmother’s sewing box, which is worth almost '
            'nothing.'),
           ('support', 'It still has her pins in it, and her handwriting '
            'inside the lid.'),
           ('follow-up', 'So it is the only object I own that could not be '
            'replaced.')]),
   write=[
    dict(task='Task 1', fork='GT',
         heading='Lending an object to an exhibition',
         prompt=('A local gallery has asked to borrow something you own for '
                 'an exhibition. Write a letter to the gallery. In your '
                 'letter: agree to lend the object and describe it; ask about '
                 'the arrangements for its safety; state one condition you '
                 'would want. Write at least 150 words.'),
         model=[
          'Dear Ms Villalobos,',
          'Thank you for your letter of 2 October. I am very happy to lend the '
          'two drawings for the spring exhibition. They are a pair of chalk '
          'studies by Hersent, each about forty by thirty centimetres, framed '
          'in their original gilt frames and valued in March at three hundred '
          'and ten thousand pounds for the pair.',
          'Before I confirm, I would be grateful for some detail about the '
          'arrangements for their safety. Could you tell me at what value they '
          'will be insured and whether the cover runs from the moment they leave this house, as against from their arrival with you? I would '
          'also like to know the light level at which works on paper are '
          'displayed in the gallery, and who will prepare the condition report.',
          'There is one condition I would want to make. Neither drawing has '
          'been framed open to daylight in fifty years, and I would not want '
          'them hung in a room with an uncovered window, whatever blinds are '
          'fitted. If that cannot be guaranteed I would rather lend only the '
          'larger of the two.',
          'I look forward to hearing from you.',
          'Yours sincerely,',
          'T. Brightmore'],
         notes=[
          'Bullet two is answered as three specific questions instead of a '
          'general request for reassurance. Specific questions also show '
          'control of the topic, which lifts Lexical Resource without any '
          'unusual vocabulary.',
          'The condition in the third paragraph is stated with a consequence '
          'attached — otherwise I would lend only one. A condition with no '
          'consequence is a preference, and the reader will treat it as '
          'one.',
          'The description in paragraph one is compact: artist, medium, size, '
          'frame, value. Five facts in a sentence and a half, which leaves the '
          'words for the bullets that are harder.'],
         criterion=[('Specific questions in place of a general request',
                     'Task Achievement'),
                    ('A condition stated with its consequence',
                     'Task Achievement'),
                    ('Compact description leaving room for the harder '
                     'bullets', 'Coherence and Cohesion')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Asking for information politely but precisely',
    explain=('Indirect questions are the standard register for a formal '
             'request, and the trap is word order: once the question is '
             'embedded, it stops being a question in form.'),
    examples=['Could you tell me at what value they will be insured?',
              'I would like to know who will prepare the condition report.',
              'I should be grateful if you could confirm when cover begins.',
              'May I ask whether the policy excludes damage during '
              'installation?'],
    task='Rewrite each direct question as an indirect one.',
    items=[('When does the insurance start?',
            'Could you tell me when the insurance starts?'),
           ('Who is paying for the report?',
            'I would like to know who will be paying for the report.'),
           ('Is there a courier?',
            'Could you confirm whether a courier will accompany the work?'),
           ('How much light will there be?',
            'I should be grateful if you could tell me what light level the '
            'works will be displayed at.'),
           ('Will they be in a room with a window?',
            'May I ask whether they will be hung in a room with an '
            'uncovered window?')]),
   vocab=[('agreed value', 'the figure a work is insured for'),
          ('condition report', 'a dated record of an object’s physical '
           'state'),
          ('courier', 'a person who accompanies a work in transit'),
          ('acclimatisation', 'letting an object adjust to a new environment'),
          ('relined', 'given a new backing canvas'),
          ('restoration', 'work done to repair or stabilise an object'),
          ('lux', 'a unit of light falling on a surface'),
          ('undertaking', 'a binding promise to do something')],
   expr=[('I am very happy to lend', 'agrees warmly before the conditions'),
         ('Before I confirm, I would be grateful for',
          'makes agreement conditional without refusing'),
         ('There is one condition I would want to make',
          'announces a condition so it cannot be missed'),
         ('If that cannot be guaranteed I would rather',
          'attaches a consequence to a condition')],
   trans=['before I confirm', 'I would also', 'whatever', 'if'],
  ),

  dict(
   sub='What people pay for',
   step=2,
   read=[
    dict(heading='Four buyers on why they bought',
         kind='Four short texts', task='Matching features and Yes/No/Not Given',
         band='gt_short', qtype='Questions 19-24',
         paras=[
          'A  Casimir: I bought it because I wanted to look at it, and I have '
          'been told since that I overpaid by a factor of three. I do not '
          'really understand the complaint. I was not buying an asset and I '
          'have had eleven years of looking at it, which at that price is '
          'about nine pounds a day.',
          'B  Thandiwe: I will be honest about this because people are not. I '
          'bought it as a position. The artist had three museum shows '
          'scheduled and a dealer who controls supply carefully, and the '
          'reasons I bought were the reasons you would buy anything whose '
          'price you expect to rise. Whether I like it is a question I have '
          'genuinely not asked myself.',
          'C  Ignatius: What I was buying, although it took me some years to '
          'see it, was membership. The purchase came with dinners, with a '
          'dealer who takes my calls and with a particular kind of '
          'conversation at parties. If the painting had come without any of '
          'that I would have paid a good deal less for it.',
          'D  Bernadette: I buy from people I have met, almost always young, '
          'almost always cheap. Several of them are now worth considerably '
          'more than I paid and I have not sold one, which my accountant finds '
          'exasperating. Selling would end the relationship, and the '
          'relationship is the thing I was actually buying.'],
         items=[
          ('Which person bought with an expectation of financial gain?',
           ['Casimir', 'Thandiwe', 'Ignatius', 'Bernadette'], 1,
           'She describes buying a position and lists the supply-side '
           'reasons.'),
          ('Which person says they were buying social access?',
           ['Casimir', 'Thandiwe', 'Ignatius', 'Bernadette'], 2,
           'Dinners, a dealer who takes his calls, a kind of conversation at '
           'parties.'),
          ('Which person calculates the value as a daily cost of pleasure?',
           ['Casimir', 'Thandiwe', 'Ignatius', 'Bernadette'], 0,
           'Eleven years of looking at it, about nine pounds a day.'),
          ('Which person values the relationship with the maker above the '
           'object?', ['Casimir', 'Thandiwe', 'Ignatius', 'Bernadette'], 3,
           'Selling would end the relationship, which is what she was buying.'),
          ('Thandiwe regrets her purchase.',
           ['Yes', 'No', 'Not Given'], 2,
           'She says she has not asked herself whether she likes it, '
           'which is not a statement about regret.',
           {0: 'Yes would need regret; she says she has not asked '
               'herself the question.', 1: 'No would need satisfaction, which she also does not '
               'claim.'}),
          (
           'Bernadette has made a profit by selling works she bought '
           'early.', ['Yes', 'No', 'Not Given'], 1,
           'She says she has not sold one, to her accountant\u2019s '
           'exasperation.',
           {0: 'Yes would need a sale; she says she has not sold one.', 2: 'Not Given is wrong because her selling is addressed.'})])],
   listen=[
    dict(heading='A short talk: what people pay for', part='Part 2',
         task='A talk at a collectors’ evening', band='l2',
         qtype='Questions 25-28',
         script=[
          ('Speaker', 'I am going to suggest that when somebody buys a work '
           'of art they are buying four things at once, and that almost every '
           'argument about the art market comes from confusing them.'),
          ('Speaker', 'The first is the object. The canvas, the paint, the '
           'thing on the wall. This is the only one of the four that is '
           'actually transferred, and for most works it is a strikingly small '
           'part of the price.'),
          ('Speaker', 'The second is the attribution. Not the object but the '
           'claim about who made it, which can be separated from the object '
           'and sometimes is, usually painfully. The same canvas moves between '
           'three hundred pounds and three million depending entirely on a '
           'sentence that nobody can see.'),
          ('Speaker', 'The third is the position. The expectation that the '
           'price will rise, which behaves exactly like any other asset and '
           'responds to supply, to scheduled exhibitions and to what the '
           'dealer does with the waiting list. People are coy about this and '
           'it is a substantial fraction of the market.'),
          ('Speaker', 'The fourth is the membership: access, invitations, a '
           'standing in a particular room. This one never appears on an '
           'invoice and is, in my view, the most reliably underestimated of '
           'the four.'),
          ('Speaker', 'Before I come to why this matters, notice how '
           'differently the four behave when you try to sell. The object is '
           'yours and transfers with the work. The attribution is held by '
           'other people and can be withdrawn by them without consulting you. '
           'The position depends on a market existing on the day you choose. '
           'And the membership does not transfer at all: it stays with you, '
           'which is why people who have sold everything often remain in the '
           'room.'),
          ('Speaker', 'Now, why does this matter beyond taxonomy? Because when '
           'a work is discovered to be a forgery, only the second of my four '
           'collapses. The object is unchanged. And the fact that the price '
           'collapses by ninety-nine per cent tells you how much of what you '
           'were buying was never the object at all.')],
         items=[
          ('What does the speaker say about the object itself?',
           ['It is most of the price', 'It is a small part of the price',
            'It is rarely transferred', 'It cannot be valued'], 1,
           'The only one of the four actually transferred, and strikingly '
           'small as a share.'),
          ('The attribution is described as',
           ['the condition of the work', 'a claim about who made it',
            'the dealer’s valuation', 'the exhibition record'], 1,
           'Which can be separated from the object, usually painfully.'),
          ('Which element does he say never appears on an invoice?',
           ['The object', 'The attribution', 'The position',
            'The membership'], 3,
           'Access, invitations and standing, which he calls the most '
           'underestimated.'),
          ('When a forgery is discovered, what collapses?',
           ['The object', 'The attribution only', 'All four elements',
            'The membership'], 1,
           'And the size of the price fall shows how little of the purchase '
           'was the object.')]),
    dict(heading='Two dealers disagree about pricing', part='Part 3',
         task='A conversation in a gallery back office', band='l3',
         qtype='Questions 29-33',
         script=[
          ('Fenella', 'I am not putting a price list on the wall. We have '
           'never done it and the reason we have never done it is sound.'),
          ('Osvaldo', 'Say the reason out loud, though, because when I say it '
           'out loud it sounds worse than when you imply it.'),
          ('Fenella', 'The reason is that different buyers get different '
           'prices, and that is not a scandal. A museum gets a discount '
           'because its acquisition puts the work in a public collection and '
           'raises everything else by the artist. A new collector gets a '
           'discount because we want them back.'),
          ('Osvaldo', 'And a collector who walked in off the street with money '
           'pays the most, which is a strange way to treat the only person '
           'behaving normally.'),
          ('Fenella', 'They are paying for immediacy. Everyone else waited or '
           'brought something other than money.'),
          ('Osvaldo', 'That is an answer and I think it is the right answer, '
           'and it is still true that the system is opaque in a way that '
           'benefits us specifically. I would like us to at least notice '
           'that.'),
          ('Fenella', 'Noted. What is your proposal, since you have clearly '
           'got one?'),
          ('Osvaldo', 'Publish a range. Not a price, a range, with the '
           'criteria that move you within it stated plainly. Museums at the '
           'bottom, immediate sales at the top, and the artist told what the '
           'range is.'),
          ('Fenella', 'A range has a problem you have not mentioned. The '
           'moment the bottom of it is public, every museum asks for the '
           'bottom, and the bottom was a number I could offer precisely '
           'because it was not a number anyone else could see.'),
          ('Osvaldo', 'That is true, and it is the strongest thing against '
           'my proposal. Although I would say the same of every price that '
           'has ever been published anywhere, and prices do get published, '
           'and sellers survive it.'),
          ('Fenella', 'Not in a market where supply is controlled by the '
           'seller. That is the difference.'),
          ('Fenella', 'The artist part is the part you actually care about.'),
          ('Osvaldo', 'Yes. Three of ours have no idea what their work sells '
           'for, and when they find out from an auction result it damages a '
           'relationship that took me nine years to build.'),
          ('Fenella', 'That I will agree to today. The wall price list I want '
           'to think about, and I notice you led with the thing I would '
           'refuse.')],
         items=[
          ('Why does Fenella say a museum receives a discount?',
           ['It buys in volume', 'Its purchase raises the artist’s other '
            'work', 'It pays promptly', 'It is a public body'], 1,
           'And it places the work in a public collection.'),
          ('Osvaldo objects that the highest price is paid by',
           ['museums', 'new collectors', 'a buyer who simply walks in',
            'other dealers'], 2,
           'Which he calls a strange way to treat the only person behaving '
           'normally.'),
          ('Fenella’s answer is that such a buyer is paying for',
           ['exclusivity', 'immediacy', 'condition', 'provenance'], 1,
           'Everyone else waited or brought something other than money.'),
          ('What does Osvaldo propose?',
           ['A fixed price list', 'A published range with its criteria',
            'An auction', 'No change'], 1,
           'Museums at the bottom, immediate sales at the top.'),
          ('What does Fenella agree to immediately?',
           ['The wall price list', 'Telling the artists the range',
            'Discounting for museums', 'Nothing'], 1,
           'She also notices that Osvaldo led with the part she would '
           'refuse.')])],
   speak=dict(
    part='Part 1 into Part 2', focus='Value',
    longturn=[('The thing I want to describe is a cookery notebook, a hardback '
               'exercise book filled in by hand, which is worth nothing and '
               'which I would not sell.'),
              ('I got it when my father cleared his mother\'s house. Nobody '
               'else wanted it, because the handwriting is difficult and half '
               'the entries are only a list of quantities with no method at '
               'all.'),
              ('I keep it in a drawer in the kitchen and I use it perhaps four '
               'times a year, mostly for two things, and I have never copied '
               'it out, which I know is foolish.'),
              ('Why it is valuable to me is partly the obvious reason and '
               'mostly a different one. The obvious reason is that it is her '
               'handwriting and she is dead. The other reason is that it is a '
               'record of how somebody cooked when the quantities had to be '
               'worked out from what there was. Several entries have been '
               'corrected twice, in different pens, over what must be twenty '
               'years, so you can see a recipe being improved by somebody who '
               'never thought of herself as doing anything of the kind. A '
               'printed book gives you the final version. This gives you the '
               'argument, and I have not found that anywhere else, which is '
               'why a thing with no market value is the one object in the flat '
               'I would carry out of a fire.')],
    intro=('Short answers, then the long turn. Depth over breadth: one object '
           'developed is worth more than four mentioned.'),
    cue=('Describe something valuable to you that is not expensive.',
         ['what it is', 'how you got it',
          'how you use or keep it',
          'and explain why it is valuable to you']),
    qs=['Do you think price and value are the same thing?',
        'Is there anything you have kept for a long time?',
        'Now look at the card. You have one minute to make notes.',
        'Do people in your country spend money on art?'],
    shape=[('answer', 'A fountain pen my father used at work.'),
           ('support', 'He gave it to me when he retired, without ceremony.'),
           ('follow-up', 'I use it almost every day, which I think he '
            'intended.'),
           ('support', 'It is worth perhaps thirty pounds.'),
           ('follow-up', 'And it is the one object I would go back into a '
            'burning house for, which tells you the two scales are '
            'unrelated.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Is art worth what people pay for it?',
         prompt=('Some people believe the prices paid for works of art are '
                 'absurd and that the money would be better spent elsewhere. '
                 'To what extent do you agree or disagree? Write at least 250 '
                 'words.'),
         model=[
          'The objection to high art prices is usually made as though the '
          'money disappeared into the painting. It does not: it moves from one '
          'person to another, and most of what makes the objection feel '
          'compelling is a confusion about what is actually being purchased.',
          'There is a version of the complaint I accept. A substantial share '
          'of the top of the market is not about art at all. Works are bought '
          'as positions, held in storage in free ports, and sold without ever '
          'having been looked at by anybody. That activity uses the vocabulary '
          'of culture to conduct a financial trade, and it produces nothing '
          'that the objection’s critics would recognise as value.',
          'But the general form of the argument proves far too much. The money '
          'paid for a painting does not vanish; it is transferred to a seller '
          'who then spends it, and the social consequence is no worse than any '
          'other transfer of the same size. If the objection is that wealth is '
          'concentrated enough to permit such purchases, that is an argument '
          'about wealth and would be identical if the buyers spent it on '
          'yachts.',
          'There is also a practical defence that is rarely made. The market '
          'supports the income of living artists, the existence of galleries '
          'in which the rest of us see work for nothing, and the conservation '
          'of objects that would otherwise decay. These are real public '
          'benefits funded by private vanity, which is an untidy arrangement '
          'but not an absurd one.',
          'My own position is that the prices are not absurd and the market '
          'that produces them is partly so. What I would change is not what '
          'people pay but what the payment conceals: free port storage, '
          'undisclosed guarantees, sales between parties with an interest in '
          'the price. Those are specific practices and they are reformable, '
          'which an objection to high prices in general is not.'],
         notes=[
          'Structure 11 — agree in some circumstances, disagree in others — '
          'and notice the agreement comes first. Conceding early buys you the '
          'reader’s trust for the disagreement that follows.',
          'Paragraph 3 uses a proves-too-much move: the argument, if sound, '
          'would convict any large purchase. Showing that an objection has no '
          'stopping point is one of the strongest things you can do in a '
          'Task 2 essay.',
          'The conclusion converts a general disagreement into three specific '
          'reforms. A position the reader could act on is always stronger than '
          'a position they can only agree with.'],
         criterion=[('Conceding the strong version of the objection first',
                     'Task Response'),
                    ('Showing an objection proves too much',
                     'Task Response'),
                    ('A conclusion of reformable specifics',
                     'Coherence and Cohesion')],
         instruct='  Write at least 250 words in about 40 minutes.',
         lines=18)],
   gram=dict(
    point='Conceding a version of the opposing case',
    explain=('An essay that concedes nothing reads as unconsidered. The move '
             'is not to concede the argument but to concede a version of it, '
             'named precisely, and then show that the general form does not '
             'follow.'),
    examples=['There is a version of the complaint I accept.',
              'The objection holds for the top of the market, which is a small part of it.',
              'That is true of some purchases and is being offered as true of '
              'all.',
              'I agree with the premise; it is the inference I resist.'],
    task='Concede a version of each claim, then limit it.',
    items=[('Art prices are absurd.',
            'Some prices at the very top are absurd; most of the market is '
            'ordinary.'),
           ('Collectors do not care about art.',
            'Some buy purely as an investment; it does not follow that none '
            'care.'),
           ('The art market is corrupt.',
            'Specific practices are opaque, which is not the same as the '
            'market being corrupt throughout.'),
           ('The money would be better spent on hospitals.',
            'That is true of almost any private purchase, which is why it is an argument about wealth, under which art happens to fall.'),
           ('Nobody looks at these paintings.',
            'Works held in storage are indeed not looked at, and most sold '
            'works are hung somewhere.')]),
   vocab=[('attribution', 'the claim about who made a work'),
          ('position', 'a holding bought in expectation of a price rise'),
          ('free port', 'a storage facility where goods are untaxed in '
           'transit'),
          ('guarantee', 'a promise of a minimum price at auction'),
          ('opaque', 'not open to inspection'),
          ('consignor', 'the person who puts a work up for sale'),
          ('acquisition', 'a purchase made by a collection'),
          ('speculative', 'done in the hope of a gain in value')],
   expr=[('I will be honest about this because people are not',
          'signals an unusually frank answer'),
         ('That is an answer and I think it is the right answer, and it is '
          'still true that', 'accepts a point without dropping an objection'),
         ('I notice you led with the thing I would refuse',
          'names a negotiating tactic'),
         ('proves far too much', 'rejects an argument by its reach')],
   trans=['there is a version', 'but', 'there is also', 'what I would '
          'change'],
  ),

  dict(
   sub='The market in numbers',
   step=3,
   read=[
    dict(heading='Sales by category and by price band',
         kind='Data article',
         task='Matching information and table completion',
         band='gt_work', qtype='Questions 34-39',
         figure=_CAT,
         paras=[
          'The two charts opposite divide the same market in two different '
          'ways, and the pairing is deliberate: neither answers the question '
          'the other raises. The first divides sales by category of work, '
          'comparing two years five apart. The second divides the same total '
          'by price band, showing both the share of lots sold and the share '
          'of value they account for.',
          'By category, the movement over the five years is concentrated in '
          'one place. Post-war and contemporary rises from 38 to 52 per cent '
          'of value, a gain of fourteen points, while every other category '
          'falls: old masters from 14 to 9, impressionist from 18 to 13, '
          'modern from 24 to 21 and other from 6 to 5. The rise in one '
          'category is almost exactly the sum of the falls in the rest.',
          'By price band, the striking feature is the divergence between '
          'volume and value. Lots under fifty thousand account for 86 per cent '
          'of everything sold and 9 per cent of what is spent. Lots above ten '
          'million are four in every thousand and account for 41 per cent of '
          'the money.',
          'A further feature of the second chart deserves attention. The two '
          'middle bands behave quite differently from one another. The fifty '
          'thousand to one million band takes 21 per cent of value from 11 per '
          'cent of lots, which is a ratio of roughly two to one; the one to '
          'ten million band takes 29 per cent of value from 2.6 per cent of '
          'lots, a ratio of more than eleven to one. The concentration does '
          'not rise smoothly across the bands. It accelerates.',
          'Read together, the two charts suggest something neither shows '
          'alone. If almost half the value sits in a few hundred transactions, '
          'then a shift in category share of fourteen points need not reflect '
          'any change in what thousands of ordinary buyers are doing. It may '
          'record the preferences of a very small number of people, and the '
          'category chart, which looks like a statement about taste, may be a '
          'statement about perhaps two hundred individuals.'],
         items=[
          ('Which category gained share over the five years?',
           ['Modern', 'Old masters', 'Post-war and contemporary',
            'Impressionist'], 2,
           'From 38 to 52 per cent, a gain of fourteen points.'),
          ('Which paragraph explains that the two charts together say more '
           'than either alone?',
           ['Paragraph 1', 'Paragraph 2', 'Paragraph 3', 'Paragraph 4'], 3,
           'A shift in category share may record the preferences of very few '
           'people.'),
          ('Old masters fell from 14 per cent to ____________ per cent.',
           None, '9', 'Paragraph 2, one of four categories that declined.'),
          ('Lots under fifty thousand are ____________ per cent of lots '
           'sold.', None, '86',
           'Paragraph 3, against 9 per cent of value.'),
          ('Lots above ten million account for ____________ per cent of '
           'value.', None, '41',
           'Paragraph 3, from four lots in every thousand.'),
          ('The writer suggests the category chart may really describe the '
           'taste of about ____________ individuals.', None, 'two hundred',
           'The last sentence of paragraph 4, which is the point of pairing '
           'the charts.')])],
   listen=[
    dict(heading='An analyst on the art market', part='Part 4',
         task='A lecture on reading market data', band='l4',
         qtype='Questions 40-45',
         figure=_BAND,
         script=[
          ('Analyst', 'Every year I publish a report and every year the same '
           'chart is reproduced with the same wrong sentence underneath it, so '
           'I am going to spend this lecture on how to read my own data '
           'properly.'),
          ('Analyst', 'Start with category. Post-war and contemporary has '
           'gone from thirty-eight per cent of value to fifty-two in five '
           'years. Everything else has fallen. The sentence that follows in '
           'the newspapers is that taste has shifted towards contemporary '
           'art, and I want to show you why that sentence is not supported by '
           'my own chart.'),
          ('Analyst', 'Now look at the second chart, by price band. Lots under '
           'fifty thousand pounds are eighty-six per cent of everything sold '
           'and nine per cent of the money. Lots over ten million are four in '
           'a thousand and forty-one per cent of the money. The market by '
           'volume and the market by value are, essentially, two different '
           'markets that share a name.'),
          ('Analyst', 'Put the two together. My category chart is weighted by '
           'value. So a fourteen-point move in that chart can be produced '
           'without a single ordinary buyer changing their behaviour. If two '
           'hundred people at the top buy contemporary instead of '
           'impressionist, the chart moves fourteen points and taste, in any '
           'ordinary sense, has not shifted at all.'),
          ('Analyst', 'Let me show you how large the effect is, because '
           'people nod at the principle and then underestimate the '
           'magnitude. Suppose total sales are sixty billion. Forty-one per '
           'cent of that is around twenty-five billion, spread across roughly '
           'four hundred lots. If a hundred of those lots move from one '
           'category to another, you have shifted something like six billion, '
           'which is ten per cent of the entire market, from a hundred '
           'decisions taken by perhaps sixty people.'),
          ('Analyst', 'And those sixty people are not a random sample of '
           'buyers. They are advised by a small number of the same advisers, '
           'they read the same three publications, and several of them buy at '
           'the same four fairs. Whatever is being measured at the top of this '
           'market, it is not independent choices being aggregated. It is '
           'something closer to one correlated choice being counted sixty '
           'times.'),
          ('Analyst', 'I should be fair to the newspapers. There is a version '
           'of the claim my data does support, which is that taste among the '
           'very wealthiest buyers has shifted. That is a real finding and it '
           'is interesting. It is simply not the finding that gets printed.'),
          ('Analyst', 'The general lesson applies far beyond this market. '
           'Whenever a chart is weighted by value, money or size, ask who is '
           'heavy in it. A figure weighted by value is a figure about the '
           'people who hold the value, and it will describe a small population '
           'while appearing to describe everybody.')],
         items=[
          ('What does the analyst say about the sentence printed under his '
           'chart?',
           ['It is approximately right', 'It is not supported by his chart',
            'It uses the wrong year', 'It confuses two categories'], 1,
           'He devotes the lecture to showing why.'),
          ('Lots over ten million are what share of lots sold?',
           ['Four in a hundred', 'Four in a thousand', 'Nine per cent',
            'Forty-one per cent'], 1,
           'And forty-one per cent of the money.'),
          ('He describes the market by volume and by value as',
           ['the same market', 'two different markets sharing a name',
            'converging', 'equally sized'], 1,
           'Which is the key to reading the category chart.'),
          ('A fourteen-point move in the category chart could be produced '
           'by', ['a change among ordinary buyers', 'about two hundred '
            'people at the top', 'a change in exchange rates',
            'a reclassification'], 1,
           'Without any ordinary buyer changing behaviour.'),
          ('Which version of the claim does he say his data supports?',
           ['Taste has shifted generally',
            'Taste among the wealthiest buyers has shifted',
            'Volumes have fallen', 'Prices have risen'], 1,
           'He calls it a real and interesting finding that does not get '
           'printed.'),
          ('His general lesson is that a chart weighted by value describes',
           ['everybody', 'the people who hold the value', 'the median buyer',
            'the long run'], 1,
           'A small population while appearing to describe everybody.')])],
   speak=dict(
    part='Part 3', focus='Art as an investment',
    intro=('Four or five sentences. Where a question invites a number, say '
           'what the number would have to be weighted by.'),
    qs=['Should works of art be treated as investments?',
        'Does it matter who owns a famous painting?',
        'Should governments stop important works leaving the country?',
        'Is it possible to measure the value of art?'],
    shape=[('answer', 'People will treat them as investments whatever we '
            'think.'),
           ('support', 'The question is whether that use crowds out the '
            'other one.'),
           ('follow-up', 'A painting in a free port is doing no cultural work '
            'at all.'),
           ('support', 'Whereas the same painting lent to a museum is.'),
           ('follow-up', 'So I would tax the storage, leaving the purchase alone.')]),
   write=[
    dict(task='Task 1', fork='A',
         heading='Two charts of one market',
         prompt=('The charts below show sales in one art market by category '
                 'and by price band. Summarise the information by selecting '
                 'and reporting the main features, and make comparisons where '
                 'relevant. Write at least 150 words.'),
         figure=_BAND,
         model=[
          'The two bar charts describe the same art market divided in two '
          'ways: by category of work over two years five apart, and by price '
          'band in a single year. Overall, the category data show value '
          'moving decisively towards post-war and contemporary work, while the '
          'price band data show value concentrated in a very small number of '
          'the most expensive sales.',
          'Turning to category first, post-war and contemporary rose from 38 '
          'to 52 per cent of total value, a gain of fourteen percentage '
          'points. Every other category declined over the same period: modern '
          'from 24 to 21 per cent, impressionist from 18 to 13, old masters '
          'from 14 to 9 and the remaining works from 6 to 5. The gain in the '
          'leading category therefore came at the expense of all four of the '
          'others.',
          'The price band chart reveals a very different distribution. Lots '
          'selling for under fifty thousand made up 86 per cent of all lots '
          'but only 9 per cent of total value, while lots above ten million '
          'accounted for just 0.4 per cent of lots and as much as 41 per cent '
          'of value. The two intermediate bands lay between these extremes, '
          'with the one to ten million band taking 29 per cent of value from '
          '2.6 per cent of lots.',
          'Taken together, the charts show that almost half of all value is '
          'generated by fewer than one sale in two hundred.'],
         notes=[
          'Two charts, two different structuring dimensions. Each gets its own '
          'paragraph, structured on its own dimension, and the final sentence '
          'is the only place where they are combined. Trying to interleave '
          'them produces an answer nobody can follow.',
          'In the second paragraph the categories are taken in descending '
          'order of their final share, with the direction of change stated '
          'once for the group. That is grouping by behaviour: four categories '
          'that all fell, reported as a set.',
          'The last line is a comparison the task asks for and neither chart '
          'states. It is one sentence and it is the difference between a '
          'competent answer and a good one.'],
         criterion=[('One paragraph per chart, each on its own dimension',
                     'Coherence and Cohesion'),
                    ('Grouping the four falling categories',
                     'Coherence and Cohesion'),
                    ('A combining sentence neither chart states alone',
                     'Task Achievement')],
         instruct='  Write at least 150 words in about 20 minutes.',
         lines=14)],
   gram=dict(
    point='Contrasting share of number with share of value',
    explain=('Whenever a chart gives both a count and a value, the sentence '
             'that earns marks contrasts the two in one breath. These are the '
             'structures that do it.'),
    examples=['Lots under fifty thousand made up 86 per cent of lots but only '
              '9 per cent of value.',
              'Just 0.4 per cent of sales accounted for 41 per cent of the '
              'money.',
              'The band took 29 per cent of value from 2.6 per cent of '
              'lots.',
              'Almost half of all value was generated by fewer than one sale '
              'in two hundred.'],
    task='Combine each pair into one sentence contrasting number with '
         'value.',
    items=[('86% of lots. 9% of value.',
            'Lots in this band were 86 per cent of the total sold but only 9 '
            'per cent of value.'),
           ('0.4% of lots. 41% of value.',
            'Just 0.4 per cent of lots accounted for 41 per cent of all '
            'value.'),
           ('2.6% of lots. 29% of value.',
            'The band produced 29 per cent of value from only 2.6 per cent of '
            'lots.'),
           ('11% of lots. 21% of value.',
            'This band took roughly twice as large a share of value as of '
            'lots.'),
           ('Few sales. Most of the money.',
            'A very small number of sales generated the majority of the '
            'value.')]),
   vocab=[('lot', 'a single item or group offered for sale'),
          ('hammer price', 'the price at which bidding ends'),
          ('premium', 'a charge added to the hammer price'),
          ('weighted', 'counted in proportion to size or value'),
          ('divergence', 'two measures moving apart'),
          ('volume', 'the number of transactions'),
          ('secondary market', 'resale of works already sold once'),
          ('concentration', 'a large share held by a few')],
   expr=[('divided in two ways', 'introduces a two-chart task'),
         ('turning to category first', 'signposts the structuring choice'),
         ('but only', 'drives a contrast within one sentence'),
         ('taken together, the charts show',
          'reserves the combining claim for the end')],
   trans=['turning to', 'while', 'taken together', 'therefore'],
  ),

  dict(
   sub='When a forgery is discovered',
   step=4,
   read=[
    dict(heading='The painting that was admired for forty years',
         kind='Academic passage',
         task='Matching headings, Yes/No/Not Given and summary completion',
         band='acad', qtype='Questions 46-52',
         paras=[
          'In 1971 a gallery acquired a small panel attributed to a '
          'fifteenth-century workshop. It hung for four decades, appeared in '
          'nine books, was the subject of two doctoral theses and was '
          'described by one historian as the most moving object in the '
          'collection. In 2013 analysis of the ground layer found a pigment '
          'not manufactured before 1920, and within a week the panel had been '
          'moved to the study collection and removed from display.',
          'The case is used in teaching for an obvious reason and is '
          'interesting for a less obvious one. The obvious lesson concerns '
          'method: connoisseurship, the trained judgement of an experienced '
          'eye, failed for forty years and a laboratory test settled the '
          'matter in an afternoon. The conclusion usually drawn is that the '
          'eye should give way to the instrument.',
          'That conclusion is too quick. Scientific analysis answers a narrow '
          'question extremely well: it can establish that a material was not '
          'available at the claimed date. It cannot establish the converse. A '
          'forger working entirely in period materials, which is laborious but '
          'not difficult, produces an object that no instrument can refute, '
          'and such objects exist in collections now.',
          'Nor was connoisseurship simply wrong here, and reading the '
          'earlier literature something interesting emerges: three '
          'specialists recorded doubts, in print, in 1974, 1988 and '
          '2004. None used the word forgery. All three noted that the '
          'panel was unusually satisfying, that it resolved '
          'iconographic puzzles more neatly than contemporary works '
          'typically do, and that this was worth further study.',
          'What failed, therefore, was not perception but the mechanism for '
          'acting on perception. A doubt expressed as an unusual quality does '
          'not generate an investigation; a doubt expressed as an accusation '
          'ends a career if it is wrong. The institutional cost of raising the '
          'question was borne entirely by the person raising it, and the '
          'benefit, if any, accrued to the gallery.',
          'This is a general pattern, visible well beyond art history. '
          'Wherever expert judgement is distributed across individuals with no '
          'mechanism for pooling doubt, the field can hold a great deal of '
          'quiet scepticism and act on none of it. The information existed in '
          'the literature from 1974. What did not exist was any process by '
          'which three mild reservations, twelve years apart, became one '
          'question.',
          'The gallery’s own response is worth examining, because it was '
          'swift and it was never explained. Within a week the panel was in '
          'the study collection; no public statement was made beyond a line on '
          'the website; and the nine books in which it appears have not been '
          'corrected, since nobody has the standing or the budget to correct '
          'them. The record in the literature remains, for most purposes, '
          'what it was in 2012.',
          'Something similar is true of the two theses. Both were examined, '
          'passed and shelved, and both contain arguments that depend on the '
          'panel being of its claimed date. Neither has been withdrawn, '
          'because there is no mechanism for withdrawing a thesis, and the '
          'scholars concerned have built careers on work that is now partly '
          'unsupported through no fault of their own. The institutional '
          'machinery for making a claim is considerably more developed than '
          'the machinery for unmaking one.',
          'This asymmetry is worth naming because it feeds back into the '
          'original failure. If retraction were cheap and routine, raising a '
          'doubt would be cheap too. It is precisely because a doubt, once '
          'confirmed, imposes uncosted damage on colleagues and institutions '
          'that the doubt is phrased as an observation about unusual quality, which commits nobody.',
          'There is a final turn worth noticing: the panel is the same '
          'object it was in 2012. The pleasure it gave, the puzzles it '
          'resolved, the descriptions written about it \u2014 none of these '
          'has been shown to be mistaken, and the historian who called '
          'it the most moving object in the collection has not '
          'retracted that and says she sees no reason to.',
          'Whether she is right depends on a question the analysis cannot '
          'touch: whether what we value in such an object is a property of the '
          'thing in front of us or of the story attached to it. The pigment '
          'settled the date. It did not settle that, and the speed with which '
          'the panel came off the wall suggests the institution had decided '
          'the answer without noticing it was a question.'],
         items=[
          ('Choose the best heading for paragraph 3.',
           ['What the laboratory can and cannot show',
            'The failure of the expert eye', 'How doubts were recorded',
            'Why the panel still matters'], 0,
           'Analysis can show a material was unavailable, not that a work is '
           'genuine.'),
          ('Choose the best heading for paragraph 5.',
           ['What the laboratory can and cannot show',
            'Why doubts were never acted on',
            'A pattern beyond art history', 'The historian’s position'], 1,
           'The cost of raising the question fell on the person raising '
           'it.'),
          ('Choose the best heading for paragraph 6.',
           ['Why doubts were never acted on',
            'A pattern beyond art history', 'The historian’s position',
            'What the pigment settled'], 1,
           'Distributed expert judgement with no mechanism for pooling '
           'doubt.'),
          (
           'The writer believes connoisseurship should be replaced by '
           'scientific analysis.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 3 calls that conclusion too quick and gives the '
           'limits of analysis.',
           {0: 'Yes would need replacement; paragraph 3 gives the '
               'limits of analysis.', 2: 'Not Given is wrong because the relationship between '
               'the two is argued.'}),
          ('The writer believes the gallery acted dishonestly.',
           ['Yes', 'No', 'Not Given'], 2,
           'Nothing addresses the gallery\u2019s honesty; the criticism is '
           'of speed and of an unexamined assumption.',
           {0: 'Yes would need dishonesty; the criticism is of speed '
               'and an unexamined assumption.', 1: 'No would need a defence of the gallery, which is not '
               'offered.'}),
          ('Doubts were recorded in print in 1974, 1988 and ____________.',
           None, '2004',
           'Paragraph 4, by three specialists, none of whom used the word '
           'forgery.'),
          ('The pigment found in the ground layer was not manufactured '
           'before ____________.', None, '1920',
           'Paragraph 1, which settled the question in an afternoon.')])],
   listen=[
    dict(heading='A lecture on connoisseurship and science', part='Part 4',
         task='A lecture on two ways of knowing', band='l4',
         qtype='Questions 53-58',
         script=[
          ('Lecturer', 'The story you have all read for today is usually told '
           'as a victory of science over expertise. I am going to argue that '
           'it is a story about institutions, and that the science and the '
           'expertise both performed about as well as they can.'),
          ('Lecturer', 'The facts first. Acquired 1971, hung for forty years, '
           'nine books, two theses. In 2013 a ground layer pigment turns up '
           'that was not made before 1920, and the panel is off the wall '
           'inside a week. Science one, connoisseurship nil, as the headlines '
           'had it.'),
          ('Lecturer', 'Here is my first objection. Analysis is extremely '
           'powerful in one direction and silent in the other. It can tell you '
           'a material did not exist at the claimed date. It cannot tell you a '
           'work is genuine. A forger using only period materials — tedious, '
           'entirely possible — produces something no instrument will catch, '
           'and I am confident there are such objects in major collections '
           'today.'),
          ('Lecturer', 'My second objection is the interesting one. Go back '
           'through the literature. Three specialists put doubts in print: '
           '1974, 1988, 2004. None said forgery. All three said, in various '
           'careful ways, that the panel was unusually satisfying — that it '
           'solved problems more tidily than fifteenth-century pictures '
           'normally do.'),
          ('Lecturer', 'So the perception worked. Three trained people saw '
           'something and said so. What did not exist was any mechanism that '
           'turns three mild reservations, spread over thirty years, into one '
           'question somebody is paid to answer. And the incentives ran the '
           'wrong way: the person who says forgery and is wrong has ended '
           'their career, while the gallery takes the benefit if they are '
           'right.'),
          ('Lecturer', 'One more piece of the machinery, because it explains '
           'why the doubts stayed mild. Making a claim in this field is '
           'cheap: write the article, get it published. Unmaking one is '
           'expensive and in several respects impossible. Nine books still '
           'carry this panel. Two theses depend on its date and neither can '
           'be withdrawn, because there is no procedure for withdrawing a '
           'thesis. If correction is costly, then doubt is costly, and people '
           'price that in before they open their mouths.'),
          ('Lecturer', 'This generalises, which is why I set it. Any field '
           'where judgement sits in individual heads and there is no cheap way '
           'to pool doubt will carry a great deal of unexpressed scepticism '
           'indefinitely. The fix is not better eyes or better instruments. It '
           'is a register where somebody can write I am not sure about this '
           'without it being an accusation.')],
         items=[
          ('How does the lecturer characterise the usual telling of the '
           'story?',
           ['A victory of science over expertise', 'A scandal',
            'An accident', 'A failure of management'], 0,
           'He then argues it is a story about institutions.'),
          ('What does he say analysis cannot do?',
           ['Date a pigment', 'Show that a work is genuine',
            'Examine a ground layer', 'Work on panels'], 1,
           'It is powerful in one direction and silent in the other.'),
          ('How many specialists recorded doubts in print?',
           ['One', 'Two', 'Three', 'Nine'], 2,
           'In 1974, 1988 and 2004, none using the word forgery.'),
          ('What did those specialists say about the panel?',
           ['It was poorly painted', 'It was unusually satisfying',
            'It was wrongly attributed', 'It was overcleaned'], 1,
           'It solved problems more tidily than pictures of its date '
           'normally do.'),
          ('What does he say was missing?',
           ['Better instruments', 'A mechanism for pooling doubt',
            'Funding', 'Access to the panel'], 1,
           'Three mild reservations over thirty years never became one '
           'question.'),
          ('His proposed fix is',
           ['more scientific testing', 'a register for recording uncertainty',
            'fewer acquisitions', 'external review'], 1,
           'Somewhere to write that you are not sure without it being an '
           'accusation.')])],
   speak=dict(
    part='Part 3', focus='What changes when the author changes',
    followup=[(('You would display the forgery. Does it matter who painted a '
                'picture you enjoy?'),
               ('For the enjoyment, apparently not, since people who loved a '
                'painting on Monday do not stop seeing the same colours on '
                'Tuesday. For the judgement, yes, because attribution is how a '
                'work is placed in an argument about what followed it, and a '
                'wrong attribution corrupts the history rather than the '
                'pleasure.')),
              ('Why do you think people react so strongly to forgeries?',
               ('Because the loss is social rather than aesthetic. A forgery '
                'exposed makes everybody who admired it feel that their taste '
                'was borrowed, and it embarrasses the experts whose authority '
                'rests on being able to tell. The painting has not changed; '
                'the audience\'s position has.')),
              ('Can an expert\'s judgement be trusted without evidence?',
               ('As a starting point, not as a conclusion. Trained '
                'connoisseurs do spot things no instrument finds, and they '
                'have also authenticated a long series of fakes with complete '
                'confidence. So I would treat the eye as a reason to '
                'investigate and never as the finding itself.'))],
    intro=('Four or five sentences. Try once to separate what you believe '
           'from what you can defend.'),
    qs=['Should a museum display a work known to be a forgery?',
        'Does it matter who painted a picture you enjoy?',
        'Why do you think people react so strongly to forgeries?',
        'Can an expert’s judgement be trusted without evidence?'],
    shape=[('answer', 'I think it should, with the whole story on the '
            'label.'),
           ('support', 'The object is unchanged and the story is now more '
            'interesting.'),
           ('follow-up', 'A forgery that fooled everyone teaches more than a '
            'minor genuine work.'),
           ('support', 'The honest difficulty is that people feel cheated.'),
           ('follow-up', 'And I cannot entirely explain why, which suggests '
            'the feeling is doing real work.')]),
   write=[
    dict(task='Task 2 · planning', fork=None, wband='model',
         heading='Outline, essay, outline again',
         prompt=('Should museums display works known to be forgeries? Build '
                 'the outline below. Then write the essay. Then, without '
                 'looking at your outline, outline what you actually wrote '
                 'and compare the two.'),
         plan=('Yes, displayed as what they are, because the deception is '
               'itself the exhibit',
               [('The object has not changed and its interest has increased',
                 ['the qualities people admired are still present',
                  'the history of the deception is a subject in itself']),
                ('Removal teaches the wrong lesson about how knowledge '
                 'works',
                 ['it conceals that the field was fooled, and for how long',
                  'a visible error is the only form of correction the public '
                  'ever sees'])]),
         model=[
          'Compare your two outlines and answer these four questions in '
          'writing.',
          'Did every main idea in your plan survive into the essay, and in '
          'the same order? A main idea that quietly became a sentence in '
          'another paragraph is the commonest way an essay loses its '
          'structure.',
          'Did any new idea appear in the essay that was not in the plan? If '
          'it is good, your brainstorm was incomplete; if it is a digression, '
          'you were writing without the plan in front of you.',
          'Did any support end up under the wrong main idea? This is the '
          'single most frequent structural fault at band 6.5 and it is '
          'invisible from inside the paragraph.',
          'Could a reader who saw only your essay reconstruct your plan? If '
          'not, your topic sentences are doing too little work.',
          'Were your two main ideas roughly equal in length? Count the '
          'sentences. A plan of two equal ideas that becomes an essay of nine '
          'sentences and four has stopped being the plan you tested, whatever '
          'the paragraph headings still say.',
          'Finally, write one sentence saying what you would change about '
          'your planning, not about your writing. The point of this exercise '
          'is to improve the twelve minutes before you start, which is where '
          'almost all of the structural marks are decided.'],
         notes=[
          'The point of outlining the essay afterwards is that you cannot see '
          'your own structure while writing, only your sentences. The second '
          'outline shows you what you actually built.',
          'Most candidates discover the same thing the first time: one main '
          'idea has two paragraphs and another has half of one. That is a '
          'balance fault, and it is a Coherence and Cohesion fault, where candidates expect a Task Response one.',
          'Do this exercise three times in this volume and you will stop '
          'needing it, which is the point of the exercises in this series '
          'generally.'],
         criterion=[('Each main idea surviving into its own paragraph',
                     'Coherence and Cohesion'),
                    ('Supports sitting under the right main idea',
                     'Coherence and Cohesion')],
         instruct='  Outline, write, outline again, then answer the four '
                  'questions.',
         lines=14)],
   gram=dict(
    point='Describing what evidence can and cannot establish',
    explain=('Writing about proof requires a vocabulary for the shape of an '
             'inference. These patterns say which direction a piece of '
             'evidence runs in, which is usually the whole argument.'),
    examples=['Analysis can establish that a material was unavailable; it '
              'cannot establish the converse.',
              'The test is powerful in one direction and silent in the '
              'other.',
              'Absence of a modern pigment is not evidence of authenticity.',
              'What failed was not perception but the mechanism for acting on '
              'it.'],
    task='State what each piece of evidence does and does not establish.',
    items=[('A modern pigment was found.',
            'This establishes that the work is not of the claimed date; it '
            'says nothing about who made it.'),
           ('No modern materials were found.',
            'This is consistent with authenticity and does not demonstrate '
            'it, since a forger may use period materials.'),
           ('Three experts had doubts.',
            'This shows the doubts existed; it does not show they were acted '
            'on or could have been.'),
           ('The style matches the workshop.',
            'A stylistic match supports the attribution without settling '
            'it.'),
           ('The provenance is documented from 1890.',
            'The documentation establishes the chain from 1890 and leaves the '
            'period before it open.')]),
   vocab=[('connoisseurship', 'judgement of authorship by trained '
           'observation'),
          ('pigment', 'the coloured substance in paint'),
          ('ground layer', 'the preparation beneath the paint'),
          ('panel', 'a painting on a wooden support'),
          ('iconographic', 'relating to the subjects and symbols in art'),
          ('retract', 'to withdraw a statement'),
          ('scepticism', 'doubt about a claim'),
          ('converse', 'the reverse of a statement')],
   expr=[('The conclusion usually drawn is', 'reports a reading you will '
          'question'),
         ('That conclusion is too quick', 'rejects a reasonable inference '
          'without rejecting its premise'),
         ('What failed, therefore, was not X but Y',
          'relocates a failure precisely'),
         ('There is a final turn worth noticing',
          'signals that the argument is about to change level')],
   trans=['nor', 'therefore', 'what did not exist', 'whether'],
  ),

  dict(
   sub='Whether authenticity is about the object',
   step=5,
   read=[
    dict(heading='Two identical canvases and one difference',
         kind='Academic passage',
         task='Matching information, Yes/No/Not Given and short answer',
         band='acad', qtype='Questions 59-65',
         paras=[
          'Consider a thought experiment that has become standard in '
          'the philosophy of art and is more useful than most: two '
          'canvases hang side by side. They are indistinguishable: the '
          'same pigments in the same quantities, the same craquelure, '
          'the same weave, identical under every instrument. One was '
          'painted by Vermeer in 1660; the other was painted last year '
          'by a forger of extraordinary ability.',
          'Almost everybody says the first is worth more, and most people find '
          'the judgement obvious. The interesting question is what it is a '
          'judgement about, since by stipulation there is no difference in '
          'what either canvas looks like, and the difference between them '
          'cannot in principle be seen.',
          'One answer is that the difference is historical. What we value is '
          'not the appearance but the causal chain: this surface was touched '
          'by that hand in that year. On this view a painting is less like a '
          'poem and more like a relic, and the aesthetic experience is partly '
          'an experience of contact. The account explains the intensity of '
          'people’s reaction to forgery, which is not the reaction of '
          'somebody who has been shown an inferior picture but of somebody who '
          'has been lied to.',
          'A second answer is that the difference is in what the '
          'object achieved: Vermeer\u2019s canvas solved problems that had '
          'not been solved. The forger\u2019s canvas solved the problem of '
          'copying a solution, which is difficult but different in '
          'kind. On this view we are valuing an act, and the object is '
          'the record of that act, standing in for what is valued.',
          'A third answer denies that the question is about the object at all. '
          'What differs, on this account, is the institution: one canvas is '
          'embedded in a practice of scholarship, display and exchange that '
          'has treated it as a Vermeer for three centuries, and the other is '
          'not. Value is a social fact attached to the object, and asking what '
          'in the object grounds it is a category error.',
          'Each account predicts something testable, and here the thought '
          'experiment earns its keep. The historical account predicts that '
          'discovering a forgery should feel like a betrayal, which it does. '
          'The achievement account predicts that a forgery whose maker is '
          'known and admired might retain value, which happens: works by '
          'celebrated forgers sell for substantial sums under their own '
          'names. The institutional account predicts that value should track scholarly consensus, which moves without any discovery, which is harder to '
          'test but broadly matches the behaviour of prices during disputed '
          'attributions.',
          'The accounts are not exclusive and the most defensible position '
          'probably uses all three, in different proportions for different '
          'objects. What is not defensible is the common position that the '
          'difference is simply obvious, since that position has no answer to '
          'the only hard question here, which is what exactly is being '
          'compared.',
          'It is worth pressing on the thought experiment itself before '
          'accepting what it is taken to show. The premise — identical under '
          'every instrument — is not a condition that has ever obtained, and '
          'conservators are entitled to object that it asks them to assume '
          'away their entire discipline. New techniques routinely find '
          'differences that nobody had thought to look for, so that any pair '
          'of canvases indistinguishable today may be trivially '
          'distinguishable in twenty years.',
          'That objection is practical, not philosophical, and the '
          'standard reply is that the experiment concerns what we would say '
          'if the condition held. But the objection has more force than the '
          'reply allows. If the only access we have to the historical fact is '
          'through its traces, then a position that separates the fact from '
          'all possible traces may not describe anything a practice could '
          'act on. The philosopher can hold the two apart; it is less clear '
          'that a museum can.',
          'The practical consequence falls on museums. A label saying this '
          'work is now attributed to a follower is reporting a change in the '
          'second and third of these, while the visitor standing in front of '
          'it experiences the first. Institutions move the object to storage '
          'because the attribution has changed; visitors are confused because '
          'the thing they were looking at has not.'],
         items=[
          ('Which paragraph describes value as a social fact?',
           ['Paragraph 3', 'Paragraph 4', 'Paragraph 5', 'Paragraph 6'], 2,
           'Paragraph 5: the institutional account, on which asking what in '
           'the object grounds value is a category error.'),
          ('Which paragraph tests the accounts against observed behaviour?',
           ['Paragraph 4', 'Paragraph 5', 'Paragraph 6', 'Paragraph 7'], 2,
           'Paragraph 6: betrayal, named forgers selling under their own '
           'names, and prices during disputed attributions.'),
          ('Which paragraph applies the argument to museum practice?',
           ['Paragraph 5', 'Paragraph 6', 'Paragraph 7', 'Paragraph 8'], 3,
           'Paragraph 8: institutions respond to attribution, visitors to the '
           'object.'),
          (
           'The writer believes one of the three accounts is correct '
           'and the others wrong.',
           ['Yes', 'No', 'Not Given'], 1,
           'Paragraph 7 says the accounts are not exclusive and the '
           'best position uses all three.',
           {0: 'Yes would need exclusivity; paragraph 7 says the best '
               'position uses all three.', 2: 'Not Given is wrong because the accounts are compared.'}),
          (
           'The writer believes museums should never move a '
           'reattributed work to storage.',
           ['Yes', 'No', 'Not Given'], 2,
           'He describes the mismatch without saying what museums '
           'should do.',
           {0: 'Yes would need a rule; he describes the mismatch '
               'without prescribing.', 1: 'No would need him to endorse moving them, which he '
               'does not.'}),
          ('On the historical account, a painting is compared to a '
           '____________.', None, 'relic',
           'Paragraph 3, where the aesthetic experience is partly an '
           'experience of contact.'),
          (
           'It is not defensible to say the difference is '
           '____________.', None, 'obvious',
           'Paragraph 7: it has no answer to the question of what is '
           'being compared.')])],
   listen=[
    dict(heading='A philosopher and a conservator disagree', part='Part 4',
         task='A recorded discussion', band='l4',
         qtype='Questions 66-71',
         script=[
          ('Chair', 'Professor Achterberg works on aesthetics; Ms '
           'Nwachukwu-Reid is head of conservation at a national museum.'),
          ('Achterberg', 'I want to put the two-canvases case to you, because '
           'I think conservators answer it differently from everybody else. '
           'Identical canvases, one genuine, one a modern forgery, no '
           'instrument can tell them apart. Is one worth more?'),
          ('Nwachukwu-Reid', 'Yes, obviously, and I should say that I think '
           'your thought experiment contains a false premise that does most of '
           'the work.'),
          ('Achterberg', 'Go on.'),
          ('Nwachukwu-Reid', 'Indistinguishable under every instrument is not '
           'a condition anybody has met or will. I spend my working life '
           'finding differences that nobody expected to find, with techniques '
           'that did not exist when the object was last examined. Your premise '
           'asks me to assume away the entire history of my field.'),
          ('Achterberg', 'As a practical matter I cannot argue with that, and it does not '
           'touch the philosophical point. I am asking what we would say if '
           'they were identical, in order to find out what our judgement is '
           'about.'),
          ('Nwachukwu-Reid', 'And my answer is that the question changes when '
           'you remove the possibility of evidence. If no fact could ever '
           'distinguish them, I am no longer sure I know what the word genuine '
           'is doing.'),
          ('Achterberg', 'Which is itself a position, and an interesting one. '
           'You are saying the historical fact matters only because it leaves '
           'traces.'),
          ('Nwachukwu-Reid', 'I think I am saying something slightly '
           'different. The traces are what I have access to, so for me the '
           'history and the evidence of it are not separable. A philosopher '
           'can separate them. I am not sure a practice can.'),
          ('Achterberg', 'Let me test that with a case where the evidence '
           'arrived late. A panel hangs for forty years, everybody is '
           'satisfied, and then a pigment test settles it in an afternoon. On '
           'your account, what was true in 2012?'),
          ('Nwachukwu-Reid', 'It was a forgery in 2012. I have no difficulty '
           'with that at all. What I resist is the further claim that it was '
           'therefore worth nothing in 2012, which is what the institution '
           'acted on and which does not follow from anything the test '
           'showed.'),
          ('Achterberg', 'Then we may agree more than I expected, because '
           'that is my own position stated in your vocabulary.'),
          ('Achterberg', 'Let me ask the museum question, then. A work is '
           'reattributed. The object is unchanged. Why does it come off the '
           'wall?'),
          ('Nwachukwu-Reid', 'Because the label would be wrong, and we have '
           'no practice of displaying objects whose label we cannot write. '
           'That is an honest answer and it is not a good one, and it is the '
           'thing about my profession I would most like to change.')],
         items=[
          ('What does the conservator say about the thought experiment?',
           ['It is well constructed', 'Its premise does most of the work',
            'It is irrelevant to museums', 'It has been settled'], 1,
           'She calls indistinguishable under every instrument a false '
           'premise.'),
          ('Her objection rests on',
           ['the cost of analysis', 'techniques that did not previously '
            'exist', 'museum policy', 'the quality of forgeries'], 1,
           'She finds unexpected differences with methods that are new since '
           'the last examination.'),
          ('Achterberg says his question is intended to reveal',
           ['what forgers can do', 'what our judgement is about',
            'how museums decide', 'whether instruments are reliable'], 1,
           'He concedes her practical point and separates it from the '
           'philosophical one.'),
          ('The conservator says that without possible evidence',
           ['the works are equal', 'she is unsure what genuine means',
            'the forgery is better', 'the question is easy'], 1,
           'Which Achterberg identifies as itself a position.'),
          ('She distinguishes her position from his by saying that',
           ['history does not matter', 'history and its traces are '
            'inseparable in practice', 'evidence is always available',
            'philosophers are wrong'], 1,
           'A philosopher can separate them; she is unsure a practice can.'),
          ('Why does she say a reattributed work comes off the wall?',
           ['It loses value', 'The label would be wrong',
            'Visitors complain', 'It needs conservation'], 1,
           'She calls this an honest answer, while refusing to call it a good one.')])],
   speak=dict(
    part='Part 3', focus='Originals and copies',
    sounds=[('Words from French and Italian keep irregular stress in English: '
             'conNOISseur, proVEnance, forGEry, aesTHEtic. There is no rule; '
             'there is only knowing.'),
            ('Say each of those four inside a sentence from this unit until it '
             'is automatic, because hesitating before a word you know is worse '
             'than choosing a simpler one.'),
            ('Authenticity and authentic shift the stress between forms, and '
             'so do analysis and analytical. Practise the pair rather than the '
             'word.'),
            ('Where you are unsure of a long word\'s stress, you have two '
             'honest options: use it with the stress you believe, or use a '
             'shorter one. Guessing audibly is the third and the worst.'),
            ('Record ninety seconds on forgery. Note every word you slowed '
             'down for, and decide whether you know its stress or merely hope '
             'you do.')],
    intro=('The hardest turn in the unit. Try once to say what would have to '
           'be true for you to change your view.'),
    qs=['Is an original always better than a perfect copy?',
        'Would you pay more to see an original than a reproduction?',
        'What is lost when a copy replaces an original?',
        'Does this apply to music and books in the same way?'],
    shape=[('answer', 'For paintings yes, and I notice it is not true for '
            'books.'),
           ('support', 'A novel in any edition is the same novel.'),
           ('follow-up', 'Which suggests the painting case is about the object itself.'),
           ('support', 'So what I value must be contact with the actual '
            'surface.'),
           ('follow-up', 'If I found I could not tell, in a blind test, I '
            'would have to revise that.')]),
   write=[
    dict(task='Task 2', fork=None, wband='essay',
         heading='Should museums display works known to be forgeries?',
         prompt=('Some people believe museums should remove works discovered '
                 'to be forgeries. Others think such works should remain on '
                 'display. Discuss both views and give your own opinion. '
                 'Write at least 250 words.'),
         model=[
          'When a painting admired for decades is discovered to be a modern '
          'forgery, it is almost always removed from display within days. I '
          'want to argue that this reflex is a mistake, and that what is '
          'removed is usually the most instructive object in the room.',
          'The case for removal is not frivolous. A museum’s authority rests '
          'on the reliability of what it says, and a gallery of fifteenth-'
          'century painting containing a work from 1950 is making a false '
          'statement about the period, whatever a label may add. There is also '
          'a question of space: wall is finite, and a forgery occupies room '
          'that a genuine work could use.',
          'Both of these, however, assume the work would be displayed as what '
          'it pretended to be. Displayed as what it is, the objection '
          'reverses. The panel is now evidence about something a museum rarely '
          'exhibits: how a field reaches a judgement, how long it can be '
          'wrong, and what the doubts looked like before anybody acted on '
          'them. In the case discussed in this unit, three specialists '
          'recorded reservations in print across thirty years and no mechanism '
          'existed to turn them into a question. That is a more useful thing '
          'for a visitor to learn than another minor panel.',
          'There is a further argument that I think is decisive. The public '
          'sees the outcomes of expertise and almost never sees its '
          'corrections. Removing the evidence of a long error, and replacing '
          'it quietly, teaches that experts are not wrong — a lesson that is '
          'false and that damages trust far more when it eventually '
          'collapses.',
          'My own position is therefore that such works should stay, '
          'relabelled in full: the attribution, the date of the discovery, the '
          'recorded doubts and what was done about them. A museum that can '
          'exhibit its own forty-year mistake is making a stronger claim to '
          'authority than one that cannot, not a weaker one.'],
         notes=[
          'Structure 2: two views, one of them yours, with the opposing case '
          'given properly first. Notice that the rebuttal does not deny the '
          'objection but changes a condition — displayed as what it is — under '
          'which the objection no longer holds.',
          'The essay draws on the unit’s passage for a concrete case. One '
          'specific example, used precisely, outperforms three generic ones, '
          'and examiners read invented statistics as filler.',
          'The last sentence inverts the opponent’s own criterion: authority. '
          'Taking the value your opponent appeals to and showing it supports '
          'you is the strongest ending available in a discussion essay.'],
         model65=[
                  'Some people believe museums should remove works '
                  'discovered to be forgeries. I think most should '
                  'stay, with the label changed.',
                  'The argument for removal is that a museum exists to '
                  'show what it says it is showing. A visitor who '
                  'looks at a painting believing it to be four hundred '
                  'years old has been misled, and a museum that keeps '
                  'it risks its reputation.',
                  'But the object has not changed. If a work was '
                  'admired for a century, the admiration was real, and '
                  'the skill in the painting is still there. Forgeries '
                  'also teach something no genuine work can: how '
                  'judgement is formed, and how it fails.',
                  'I think a museum should display such works '
                  'honestly, in a room that explains what was '
                  'believed, by whom and for how long. That is more '
                  'useful to a visitor than quietly moving the '
                  'painting to storage, which teaches nothing and '
                  'hides a mistake the museum made in public.',
                  ],
         gap65=[
                'It uses the two-canvases thought experiment to locate '
                'exactly what changes when attribution changes, '
                'instead of saying the object is unchanged.',
                'It shows that the three accounts of value are not '
                'exclusive and that the best position uses all three.',
                'It reports what the earlier specialists wrote and '
                'when, which makes the failure of judgement specific.',
                ],
         criterion=[('Rebutting by changing a condition, not by denying',
                     'Task Response'),
                    ('One concrete case used precisely', 'Lexical Resource'),
                    ('Turning the opponent’s own criterion',
                     'Task Response')],
         instruct='  Write at least 250 words in 40 minutes, from your '
                  'outline.',
         lines=20)],
   gram=dict(
    point='Changing the condition instead of denying the claim',
    explain=('The most economical rebuttal accepts an objection entirely and '
             'then alters the circumstance under which it was made. It is '
             'shorter than a denial and much harder to answer.'),
    examples=['Both objections assume the work would be displayed as what it '
              'pretended to be.',
              'Displayed as what it is, the objection reverses.',
              'That is true of an unlabelled work; a label removes the difficulty.',
              'The difficulty disappears once the condition is changed.'],
    task='Rebut each objection by changing a condition instead of denying '
         'it.',
    items=[('A forgery misleads the public.',
            'It misleads only if it is labelled as genuine; labelled '
            'honestly, it informs.'),
           ('It takes wall space from genuine works.',
            'That holds where wall space is the binding constraint, which in '
            'most collections it is not.'),
           ('It damages the museum’s authority.',
            'Concealing the error damages authority; exhibiting it '
            'demonstrates the opposite.'),
           ('Visitors come to see masterpieces.',
            'Visitors come to understand what they are looking at, which this '
            'object serves unusually well.'),
           ('The attribution was wrong, so the work is worthless.',
            'The attribution was wrong, which makes it worthless as a '
            'Vermeer and valuable as evidence.')]),
   vocab=[('indistinguishable', 'impossible to tell apart'),
          ('craquelure', 'the fine network of cracks in aged paint'),
          ('stipulation', 'a condition assumed for the sake of argument'),
          ('category error', 'asking a question of the wrong kind of thing'),
          ('reattribute', 'to assign a work to a different maker'),
          ('aesthetic', 'relating to the experience of beauty'),
          ('consensus', 'general agreement among those qualified to judge'),
          ('premise', 'a statement an argument assumes')],
   expr=[('by stipulation', 'marks something assumed, not argued'),
         ('the thought experiment earns its keep',
          'justifies an abstract device by what it predicts'),
         ('which is itself a position, and an interesting one',
          'treats a reluctance as a claim'),
         ('that is an honest answer and it is not a good one',
          'separates sincerity from adequacy')],
   trans=['one answer', 'a second answer', 'a third answer',
          'the practical consequence'],
  ),
 ],
 technique=dict(
  title='Two charts, two structuring dimensions, one story',
  body=('When Task 1 gives you two visuals, the commonest failure is to try '
        'to weave them together. Do not. Each chart has its own structuring '
        'dimension and gets its own paragraph built on that dimension: this '
        'one by category, that one by price band. The Overall statement names '
        'what each shows, and exactly one sentence — at the end — says what '
        'the two say together. That sentence is where the marks are, because '
        'it is the comparison neither chart makes on its own.'),
  panel=[('Two paragraphs, two dimensions', 'Structure each chart on its own '
          'terms. A reader should be able to cover one paragraph and still '
          'understand the other.'),
         ('Overall covers both', 'The Overall statement names the main '
          'feature of each visual, not of one.'),
         ('One combining sentence', 'Reserve the cross-chart claim for the '
          'end. Scattering it through the body makes both paragraphs '
          'harder.'),
         ('No causal claim', 'Two charts of the same market still do not show '
          'that one causes the other. Say together, not because.')],
  task='Using the two charts in cycle 3, write the four parts: an Overall '
       'covering both, a structuring dimension for each, and your combining '
       'sentence.',
  qs=['What is the main feature of the category chart?',
      'What is the main feature of the price band chart?',
      'Write an Overall statement that covers both.',
      'Write the one sentence that says what they show together.',
      'Which causal sentence are you tempted to write, and why must you '
      'not?']),
 outlining=dict(
  title='Outline to essay, essay back to outline',
  body=('You cannot see the structure of your own essay while you are writing '
        'it; you can only see sentences. The exercise that fixes this is to '
        'outline before, write, and then outline what you actually wrote, '
        'without looking at the first outline. The gap between the two is '
        'your structural weakness, and it is almost always the same one, '
        'which is why it is worth finding once.'),
  frame=('Forgeries should stay on display, relabelled in full',
         [('Displayed as what it is, the object becomes evidence about '
           'judgement',
           ['how long the field was wrong, and what the doubts looked like',
            'more instructive than another minor genuine work']),
          ('The public never sees expertise correcting itself',
           ['quiet removal teaches that experts are not wrong',
            'that lesson is false and damages trust when it collapses'])]),
  task='Outline, write, and outline again. Then answer the four questions in '
       'the cycle 4 writing task about the gap between your two outlines.',
  qs=['Did every main idea survive into its own paragraph?',
      'Did a new idea appear that was not planned?',
      'Did any support end up under the wrong main idea?',
      'Could a reader reconstruct your plan from your topic sentences?'],
  answers=['if one became a sentence elsewhere, that is a balance fault',
           'a good one means the brainstorm was short; a weak one means you '
           'wrote without the plan',
           'the commonest fault at this band, and invisible from inside the '
           'paragraph',
           'if not, the topic sentences are doing too little work']),
 candos=['I can give each of two charts its own structuring dimension',
         'I can write the one sentence that combines two visuals',
         'I can say what a piece of evidence cannot establish',
         'I can rebut by changing a condition instead of denying a claim',
         'I can outline my own essay afterwards and find the gap'],
 tip=('With two visuals, count your paragraphs before you start: Overall, '
      'chart one, chart two. If you are tempted to write a fourth, it is '
      'probably the combining sentence, and it belongs at the end of the '
      'third.'),
)
