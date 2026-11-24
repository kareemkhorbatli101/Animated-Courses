# -*- coding: utf-8 -*-
import figs

U = dict(
num=9, title='What We Recommend',
gram='expressing preference and recommendation',
ai='faster, cheaper or better: you must choose',
strap='CEFR B2 · Grammar: preference and recommendation · AI: faster, cheaper or better',
cando=['express a recommendation with the strength I actually intend',
       'use would rather, prefer, suggest and recommend with the right structures',
       'put a trade-off to a client as a choice rather than as a problem',
       'say what is given up when speed or price improves',
       'make a recommendation that names what it costs'],
hero=('THREE PRICES ON ONE SHEET OF PAPER',
      ['The same work, done three ways, at three prices.',
       'Every client asked which one Arclight recommended.'],
      [(840, 'purple', 'short'), (1580, 'teal', 'long'),
       (2240, 'grey', 'short'), (2760, 'orange', 'long')]),
hero_cap='Offering a choice does not remove the obligation to have a view.',

warm=['When a supplier offers you three options, what do you want them to say?',
      'What is the difference between "I would rather" and "I prefer"?',
      'What has your organisation given up in order to be faster or cheaper?'],
read=[
 'When Arclight’s unit costs fell, Ines put three options on one page for every client: the '
 'existing service at the existing price; a faster version at the same price with a higher '
 'error rate; and the existing speed at a lower price with a reduced check. The page was '
 'honest, clear and complete, and it did not work.',
 'Nine of the eleven clients asked the same question in the first week, in almost the same '
 'words: which one do you recommend? Two of them said, more sharply, that choosing was what '
 'they were paying Arclight to do. Offering the choice had been intended as candour and had '
 'been received as abdication.',
 'What Ines had not anticipated is that a client cannot evaluate the trade-off without '
 'knowing things only the supplier knows. Nora Lindqvist can say how much a late delivery '
 'note costs her. She cannot say what a two per cent error rate feels like in practice, '
 'because she has never seen a month of them.',
 'The second version of the page keeps the three options and adds a recommendation with a '
 'reason attached, in two sentences. For Nora: we recommend the existing service, because '
 'your own customers chase you about documents and the cheaper option removes the check '
 'that catches wrong amounts. For Samuel: we recommend the faster option, because you pay '
 'suppliers on a fixed day and lateness costs you more than a corrected figure does.',
 'Seven of the eleven took the recommendation. Three took a different option, two of them '
 'after a conversation in which they explained something about their business that Arclight '
 'had not known. One took the cheapest and said so cheerfully. Ines regards the three '
 'departures as the strongest evidence that the page is working.'],
c_a=[('What three options did Ines offer?', 'existing service and price; faster at the same price with a higher error rate; existing speed at a lower price with a reduced check'),
     ('What did nine clients ask?', 'which one Arclight recommended'),
     ('What had the offer been received as?', 'abdication rather than candour'),
     ('What can a client not evaluate?', 'what a two per cent error rate feels like in practice'),
     ('Why does Ines regard the three departures as a good sign?', 'because they show clients are engaging with the choice rather than deferring')],
c_b=[('The first page was unclear.', 'F'),
     ('Two clients said choosing was what they paid Arclight for.', 'T'),
     ('The second version removed the options.', 'F'),
     ('All eleven took the recommendation.', 'F'),
     ('Two clients explained something Arclight had not known.', 'T'),
     ('Nora was recommended the cheaper option.', 'F')],
c_c=[('The page was honest, clear and ____________.', 'complete'),
     ('Offering the choice had been intended as ____________.', 'candour'),
     ('She has never seen a ____________ of them.', 'month'),
     ('Adds a recommendation with a ____________ attached.', 'reason'),
     ('Lateness costs you more than a ____________ figure does.', 'corrected'),
     ('One took the cheapest and said so ____________.', 'cheerfully')],
c_d=[('The first page failed because it offered a choice without a ( price / view ).', ['price', 'view'], 1),
     ('A client cannot evaluate the trade-off because', ['they are busy', 'it requires knowledge only the supplier has', 'it is too technical', 'they do not care'], 1),
     ('Nora’s recommendation rests on', ['her size', 'her customers chasing her about documents', 'her location', 'her price'], 1),
     ('How many took a different option?', ['none', 'three', 'seven', 'nine'], 1),
     ('Ines regards the departures as evidence that', ['the page failed', 'the page is working', 'clients are confused', 'prices are wrong'], 1)],
c_e=('Which structure? Put each sentence in the right column.',
     [('I would rather we kept the check.', 'would rather + past'),
      ('I prefer keeping the check.', 'prefer + -ing'),
      ('We recommend that you keep the check.', 'recommend that + clause'),
      ('We suggest keeping the check.', 'suggest + -ing'),
      ('I would rather you kept the check.', 'would rather + past'),
      ('We recommend keeping the check.', 'recommend + -ing')],
     ['would rather + past', 'prefer + -ing', 'recommend that + clause',
      'suggest + -ing', 'recommend + -ing']),

v_fig_title='PUTTING A CHOICE TO SOMEBODY',
v_fig=[('scale', 'an appraisal'), ('doc', 'a recommendation'), ('coin', 'unit cost'),
       ('bulb', 'a concession'), ('chart', 'rank order'), ('bank', 'a quality bar')],
v_fig_cap='Six words for the page you put in front of somebody who has to decide.',
vocab=[
 ('recommendation', 'a stated view about what somebody should do, with a reason'),
 ('option', 'one of the courses available, set out so it can be compared'),
 ('alternative', 'a course offered instead of the one first proposed'),
 ('appraisal', 'a considered assessment of the merits of something'),
 ('advocate', 'to argue publicly in favour of a particular course'),
 ('counsel', 'to advise, with the weight of experience behind it'),
 ('steer', 'to guide somebody gently towards a particular choice'),
 ('endorsement', 'public support that puts your name behind something'),
 ('preference', 'the option you would take if the choice were yours'),
 ('inclination', 'a leaning towards something, short of a decision'),
 ('concession', 'something given up in order to reach agreement'),
 ('compromise', 'a settlement in which each side gives up something'),
 ('sacrifice', 'something of value given up for the sake of something else'),
 ('prioritise', 'to decide which thing comes first when not all can'),
 ('rank order', 'a list arranged from most to least preferred'),
 ('cost base', 'the total of what it costs you to provide a service'),
 ('unit cost', 'what it costs to produce one item of the work'),
 ('service promise', 'what a customer has been told they will receive'),
 ('quality bar', 'the standard below which work is not acceptable'),
 ('give and take', 'mutual concession, where each side yields something')],
v_a=[('What it costs to produce one item is the ____________.', 'unit cost'),
     ('The standard below which work is not acceptable is the ____________.', 'quality bar'),
     ('A leaning towards something, short of a decision, is an ____________.', 'inclination'),
     ('A list arranged from most to least preferred is a ____________.', 'rank order'),
     ('Something given up to reach agreement is a ____________.', 'concession'),
     ('What a customer has been told they will receive is the ____________.', 'service promise'),
     ('To guide somebody gently towards a choice is to ____________ them.', 'steer'),
     ('Public support that puts your name behind something is an ____________.', 'endorsement')],
v_b=[('An appraisal is a considered assessment', 'of the merits of something.'),
     ('To advocate is to argue publicly', 'in favour of a particular course.'),
     ('A compromise is a settlement in which', 'each side gives up something.'),
     ('The cost base is the total of what it costs you', 'to provide a service.'),
     ('To prioritise is to decide which thing comes first', 'when not all can.')],

g_title='Grammar: preference and recommendation',
g_rule=['Would rather takes a bare infinitive for yourself: I would rather keep the check.',
        'Would rather + somebody + past tense refers to another person: I would rather you kept it.',
        'Recommend and suggest take -ing or that + clause, never an object plus infinitive.',
        'Prefer takes -ing in general and to + infinitive in a specific comparison.'],
g_fig=('LOOSE',
       ['I would rather to keep the check.',
        'We recommend you to keep it.',
        'I suggest you to take the faster option.',
        'We prefer that you would keep it.'],
       'PRECISE',
       ['I would rather keep the check.',
        'We recommend that you keep it.',
        'I suggest taking the faster option.',
        'We would prefer you to keep it.'],
       'four of the commonest errors in advice',
       'four correct structures, same meanings'),
g_fig_cap='Advice is where English grammar causes most of its professional embarrassment.',
g_a=[('I would rather ____________ the check, on balance. (keep)', 'keep'),
     ('I would rather you ____________ the check. (keep)', 'kept'),
     ('We recommend that you ____________ the faster option. (take)', 'take'),
     ('We suggest ____________ the existing service. (keep)', 'keeping'),
     ('We would prefer you ____________ decide before Friday. (to)', 'to'),
     ('I prefer ____________ with the current arrangement. (stay)', 'staying'),
     ('She would rather we ____________ nothing until April. (do)', 'did'),
     ('They recommended ____________ the cheapest option. (avoid)', 'avoiding'),
     ('I would sooner ____________ it than explain it. (fix)', 'fix')],
g_b=[('I would rather ( keep / to keep ) the check.', ['keep', 'to keep'], 0),
     ('We recommend that you ____ the faster option.', ['to take', 'take', 'taking', 'takes'], 1),
     ('We suggest ____ the existing service.', ['you to keep', 'keeping', 'to keep', 'keep'], 1),
     ('I would rather you ____ the check.', ['keep', 'kept', 'to keep', 'keeping'], 1),
     ('We would prefer you ____ decide before Friday.', ['that', 'to', 'would', 'should to'], 1),
     ('They recommended ____ the cheapest option.', ['to avoid', 'avoiding', 'avoid', 'you avoid to'], 1)],

d1=dict(title='Which one do you recommend?',
        fig=(['Three options, clearly set out.', 'Nine clients asked the same thing.'],
             ['Which one do we recommend.', 'And we had not decided.']),
        cap='Ines and Victor, in the first week.',
        lines=[('Victor', 'Nine of eleven asked which one we recommend, and two of them were sharp about it.'),
               ('Ines', 'The page sets out all three honestly. I thought that was the respectful thing to do.'),
               ('Victor', 'It is respectful if the client can evaluate the trade-off. Can Nora?'),
               ('Ines', 'She can tell me what a late document costs her, to the hour.'),
               ('Victor', 'And what a two per cent error rate costs her?'),
               ('Ines', 'She has no idea, because she has never seen one. Nor would I, in her position.'),
               ('Victor', 'So we have offered a choice that requires information we have and she does not.'),
               ('Ines', 'Which makes the offer look open-handed and is actually a transfer of work she '
                        'cannot do.'),
               ('Victor', 'Two of them used the word abdication, which I thought was unfair until I '
                          'wrote down what they would need to know.'),
               ('Ines', 'How long is that list?'),
               ('Victor', 'Four things, three of which only we can know.'),
               ('Ines', 'Then the page has to carry a recommendation, and the recommendation has to '
                        'carry the three things.')],
        a=[('How many clients asked for a recommendation?', 'nine of eleven'),
           ('What can Nora evaluate?', 'what a late document costs her, to the hour'),
           ('What can she not evaluate?', 'what a two per cent error rate costs her, having never seen one'),
           ('What does Ines call the offer?', 'a transfer of work the client cannot do'),
           ('How many of the four things can only Arclight know?', 'three')],
        b=[('Two of them were ____________ about it.', 'sharp'),
           ('She has never ____________ one.', 'seen'),
           ('A transfer of work she cannot ____________.', 'do'),
           ('The recommendation has to carry the three ____________.', 'things')]),
d2=dict(title='The one who took the cheapest',
        fig=(['He took the cheapest.', 'Against our recommendation.'],
             ['Is that a failure?', 'It is the only proof it is a real choice.']),
        cap='Ines and Fatima, after the second round.',
        lines=[('Fatima', 'Seven took the recommendation, three did not, and one of the three took the '
                          'cheapest option straight away.'),
               ('Ines', 'Did he understand what the reduced check removes?'),
               ('Fatima', 'He explained it back to me more accurately than I had explained it to him. '
                          'He runs on a margin where four hundred euros a year matters and a wrong '
                          'figure costs him twenty minutes.'),
               ('Ines', 'Which is a position we could not have reached from here.'),
               ('Fatima', 'We could not. He knows what twenty minutes of his own time is worth and we '
                          'were guessing.'),
               ('Ines', 'So the recommendation was wrong for him.'),
               ('Fatima', 'The recommendation was right on the information we had, and his information '
                          'was better. Those are compatible and most people find that uncomfortable.'),
               ('Ines', 'I find it uncomfortable. I would rather have been right.'),
               ('Fatima', 'You would rather he had deferred to you, which is a different thing and the '
                          'thing the first page was accused of inviting.'),
               ('Ines', 'That is a sharper sentence than I wanted this afternoon.'),
               ('Fatima', 'Three departures out of eleven is the evidence that we are offering a choice '
                          'and not a formality. I would be worried if it were nought.')],
        a=[('How many took the recommendation?', 'seven of eleven'),
           ('Why did one client take the cheapest?', 'he runs on a thin margin and a wrong figure costs him twenty minutes'),
           ('Was the recommendation wrong?', 'it was right on the information Arclight had, and his information was better'),
           ('What does Fatima say Ines would rather have had?', 'deference'),
           ('Why would nought departures worry Fatima?', 'because it would mean the choice was a formality')],
        b=[('He explained it back to me more ____________ than I had explained it.', 'accurately'),
           ('He knows what twenty minutes of his own time is ____________.', 'worth'),
           ('Those are ____________ and most people find that uncomfortable.', 'compatible'),
           ('I would be worried if it were ____________.', 'nought')]),

speak=[('Say it correctly',
        ['Student A: give four recommendations using recommend, suggest, prefer and would rather.',
         'Student B: correct the structure of each without changing the meaning.',
         'Find the one where the correct structure changed the strength.']),
       ('Spoken specification: recommend with a reason',
        ['Choose a choice you could offer somebody at work.',
         'Brief aloud the options and your recommendation, with the reason attached.',
         'Your partner asks what they would need to know to disagree with you.']),
       ('What is given up?',
        ['In pairs, name three ways your work could be made faster or cheaper.',
         'For each, say exactly what would be given up.',
         'Find the one where nobody outside your organisation could see the cost.'])],

ext_title='A choice offered without a view is a transfer of work',
ext_fig=figs.datatable('THREE OPTIONS, AND WHAT EACH CLIENT CAN JUDGE',
                       ['What the choice turns on', 'Client knows?', 'Supplier knows?'],
                       [['cost of a late document', 'yes, exactly', 'roughly'],
                        ['cost of a wrong figure', 'yes, exactly', 'roughly'],
                        ['what 2% feels like in a month', 'no', 'yes'],
                        ['which check the cheap option removes', 'no', 'yes'],
                        ['how often that check fires', 'no', 'yes']]),
ext_fig_cap='Two rows the client owns, three the supplier owns, and a choice that needs all five.',
ext=[
 'Falling unit costs produce a genuine choice rather than a straightforward improvement, '
 'because the saving can be taken in three different currencies: as a lower price, as a '
 'faster turnaround, or as more checking at the same price and speed. These are mutually '
 'exclusive at the margin, and a supplier who pretends otherwise is simply deciding for the '
 'customer without telling them.',
 'The instinct to put the choice to the customer is correct and the common execution of it '
 'is not. Setting out three options without a recommendation looks like candour and lands as '
 'abdication, because the customer cannot evaluate the trade-off: most of the information '
 'the comparison requires sits on the supplier’s side of the relationship and has no way of '
 'crossing it.',
 'Specifically, a customer can price what a failure costs them, often to the hour, because '
 'they have lived through failures. They cannot price a difference in error rate, because '
 'they have never seen a month at either rate and have no basis for imagining one. Asking '
 'them to weigh the two is asking them to do arithmetic with one number missing.',
 'A recommendation fixes this provided it carries its reason, and the reason has to be about '
 'the customer rather than about the service. We recommend the faster option because you pay '
 'suppliers on a fixed day is a reason a client can agree or disagree with. We recommend the '
 'faster option because it suits most clients is not, and it returns the problem to them in '
 'a politer form.',
 'The last element is accepting that a real recommendation will sometimes be declined, and '
 'treating that as the arrangement working rather than failing. A client who takes a '
 'different option has usually supplied a fact you did not have, and a quarter of them doing '
 'so is a healthier sign than all of them deferring, which would mean the recommendation had '
 'become an instruction.'],
dp1=('Choice and decision deferral',
     'Research on consumer and business choice generally finds that offering options without '
     'guidance increases deferral and reduces satisfaction, while a reasoned recommendation '
     'alongside options increases both decision rates and confidence.',
     'Source: general decision-research literature, 2026. Effects vary with expertise.'),
e_a=[('What three currencies can a cost saving be taken in?', 'lower price, faster turnaround, or more checking'),
     ('Why does an unaccompanied set of options land as abdication?', 'because the customer cannot evaluate the trade-off'),
     ('What can a customer price exactly?', 'what a failure costs them, because they have lived through failures'),
     ('What must a recommendation’s reason be about?', 'the customer, not the service'),
     ('Why is some declining a healthy sign?', 'because universal acceptance would mean the recommendation had become an instruction')],
e_b=[('Lower price, faster turnaround and more checking can all be had at once.', 'F'),
     ('Putting the choice to the customer is the wrong instinct.', 'F'),
     ('Customers can price a difference in error rate.', 'F'),
     ('"It suits most clients" is a usable reason.', 'F'),
     ('A declined recommendation usually means the client supplied a fact you lacked.', 'T'),
     ('All clients accepting would be the ideal outcome.', 'F')],

w_model=(
 'Purpose: let each client choose how the saving is taken, without asking them to weigh '
 'something only we can see. Scope: the 11 active clients; prospective clients receive the '
 'standard service and no choice. Inputs: the unit cost analysis dated 4 May and each '
 'client’s own failure history. Criteria: present 3 options with price, turnaround and error '
 'rate for each; add 1 recommendation of no more than 2 sentences, whose reason refers to '
 'something about that client’s business; state which check the cheaper option removes and '
 'how often it has fired. Done: 11 pages, each with a recommendation and a named reason. '
 'Fallback: where we do not know enough about a client to give a client-specific reason, '
 'say so and recommend the existing service.'),
w_fig=figs.unitcost('THE SAME WORK, THREE WAYS',
                    [('Existing service', '4.00 EUR', '2.0%', '48 h'),
                     ('Cheaper, reduced check', '3.40 EUR', '3.6%', '48 h')],
                    'The third option trades the 48 hours down to 18 at the existing price and rate.'),
w_fig_cap='Three columns and three rows, and no row is better than the others in all of them.',
w_task='Write a three-option page with a recommendation for one customer.',
w_steps=['Set out the three options with the same three measures for each.',
         'Say what the cheaper option removes, specifically.',
         'Write a recommendation of two sentences, no more.',
         'Make the reason refer to something about that customer, not about most customers.',
         'Say what you would need to know to change your recommendation.'],
w_bank=['Option … : … price, … turnaround, … error rate.',
        'The cheaper option removes … , which fired … times last year.',
        'We recommend … , because you …',
        'We would change this if …',
        'Where we do not know enough, we …'],
w_check=['Does each option carry the same three measures?',
         'Does the recommendation give a reason about this customer?',
         'Have you said what the cheaper option actually removes?',
         'Have you said what would change your view?'],

t_title='Faster, cheaper or better: you must choose',
t_fig=figs.split('TWO REASONS',
                 'About the service — useless',
                 ['it suits most clients',
                  'it offers the best balance',
                  'it is our most popular option',
                  'it represents good value'],
                 'About this client — usable',
                 ['you pay suppliers on a fixed day',
                  'your own customers chase you about documents',
                  'a wrong figure costs you 20 minutes',
                  'you have no slack in week one']),
t_fig_cap='A client can disagree with the right-hand column, which is what makes it a recommendation.',
t_body=[
 'Offer the choice, because the saving is genuinely divisible and deciding silently is '
 'deciding for somebody else. But offer it with a view, because the comparison requires '
 'information that sits on your side of the relationship and the customer has no way of '
 'obtaining it. Candour without a recommendation is a transfer of work rather than a '
 'transfer of control.',
 'Write the reason about the customer rather than about the service, and make it a fact '
 'they could contradict. Because you pay suppliers on a fixed day invites them to say that '
 'they changed that in March. Because it suits most clients invites nothing and leaves them '
 'exactly where they were, which is being asked to choose with one number missing.',
 'Then expect to be declined, and record what you learn when you are. A client who takes a '
 'different option has almost always supplied a fact about their own business that you did '
 'not hold, and that fact is worth more than the sale of the option you preferred. If '
 'nobody ever departs from the recommendation, the page has stopped being a choice.'],
t_say=[('Give the view: ', 'We recommend the faster option, and here is why.'),
       ('Make it about them: ', 'Because you pay suppliers on a fixed day.'),
       ('Invite disagreement: ', 'We would change this if that is no longer true.')],
t_bound=('A recommendation rests on what you know about a customer, which is always less '
         'than they know. It can be right on the available information and wrong for the '
         'business, and the page will not distinguish those two cases; only the customer '
         'can, and only if they feel able to say so.'),
t_a=[('We recommend the faster option, and here is ____________.', 'why'),
     ('Because you pay suppliers on a fixed ____________.', 'day'),
     ('We would change this if that is no longer ____________.', 'true'),
     ('Candour without a recommendation is a transfer of ____________.', 'work'),
     ('Make it a fact they could ____________.', 'contradict'),
     ('If nobody ever departs from it, the page has stopped being a ____________.', 'choice')],
t_b_rubric='Rewrite each reason so that it is about this customer.',
t_b=[('It suits most clients.', 'your own customers chase you about documents within a day'),
     ('It offers the best balance.', 'a wrong figure costs you twenty minutes and lateness costs you a day'),
     ('It is our most popular option.', 'you have no slack in the first week of the month'),
     ('It represents good value.', 'four hundred euros a year is material at your margin')],

case=dict(
 title='Decision Clinic · The client who was right',
 brief=[
  'Arclight recommended the existing service to Nora Lindqvist, on the grounds that her own '
  'customers chase her about documents and the cheaper option removes the check that catches '
  'wrong amounts.',
  'She took the cheaper option. Four months later she reported that it had been the right '
  'choice for her, that she had caught both wrong amounts herself within a day, and that '
  'the saving had covered a part-time afternoon she needed.',
  'Ines wants to know whether the recommendation process is working, and Victor has '
  'discovered that in the four cases where clients departed from the recommendation, three '
  'of them now say the departure was correct.'],
 exhibit=figs.datatable('ELEVEN CLIENTS, FOUR MONTHS ON',
                        ['', 'Count', 'Still on that option', 'Say it was right'],
                        [['took the recommendation', '7', '7', '6'],
                         ['departed from it', '4', '4', '3'],
                         ['recommendation right in hindsight', '—', '—', '6 of 7'],
                         ['departure right in hindsight', '—', '—', '3 of 4'],
                         ['nobody changed option', '11', '11', '—']]),
 exhibit_cap='The departures look about as sound as the recommendations, on a small sample.',
 exhibit_note='Eleven clients over four months is a small sample and the judgements are the '
              'clients’ own, made about their own decisions.',
 voices=[('Ines Carvalho', 'managing director',
          'Three of four departures turned out well. That is either a sign that the page '
          'works or a sign that our recommendations are not worth much, and I cannot tell '
          'which from here.'),
         ('Victor Sandoval', 'operations and quality',
          'Six of seven recommendations also turned out well. Both numbers are good, which '
          'suggests clients and we are each right about the things we can see.'),
         ('Fatima Zahra', 'client manager',
          'In all four departures the client told us something we did not know. That is the '
          'finding. The page is not a sales instrument, it is the only mechanism we have for '
          'learning what their business is actually like.')],
 steps=[('Find it', 'How many departures, and how many turned out well?'),
        ('Compare it', 'What do the two success rates together suggest?'),
        ('Infer it', 'Why does Fatima call the page a learning mechanism?'),
        ('Weigh it', 'The value of a correct recommendation against what a departure reveals.'),
        ('Decide', 'What, if anything, changes about the process?')],
 analysis=[('Find it. How many of the four departures were judged right?', 'three'),
           ('Compare it. What does six of seven alongside three of four suggest?', 'that both parties are right about what each can see'),
           ('Infer it. What happened in all four departures?', 'the client supplied information Arclight did not hold'),
           ('Weigh it. What is the value of a departure?', 'a fact about the client’s business that would otherwise never arrive'),
           ('Decide. What would you add to the process?', 'recording what was learned in each departure, so the next recommendation is better')],
 decision='Write what Arclight does after a client departs from a recommendation.',
 decision_steps=['Say what is recorded, and by whom.',
                 'Say what question is asked of the client, and when.',
                 'Say how the next recommendation for that client uses it.',
                 'Say what would make you doubt the recommendations generally.'],
 bank=['When a client takes a different option, … records …',
       '… asks them … within …', 'The next recommendation for that client …',
       'We would doubt our recommendations if …',
       'This is reviewed after …'],
 outcome='Arclight now records, for every departure, the fact the client gave that changed '
         'the picture, and the next year’s recommendation quotes it back. In the second '
         'round, departures fell from four to two, both from clients whose circumstances had '
         'changed again. Ines had expected departures to fall and had regarded that as a '
         'measure of improvement; Fatima pointed out that it is equally consistent with '
         'clients learning that Arclight’s recommendations now contain their own reasoning '
         'and deferring to it, and that nobody has a way of separating the two.',
 outcome_q=[('Why did departures fall in the second round?', 'possibly because recommendations improved, possibly because clients deferred to their own reasoning quoted back'),
            ('Why can the two explanations not be separated?', 'because both predict the same fall, and nothing in the data distinguishes them')],
 tags=['manager_wrong']),

lab=dict(
 title='Brief Lab · Put the options to clients',
 task=['This is the brief that produced the first three-option page, written in an afternoon '
       'when the unit cost analysis came back and the saving was larger than anybody had '
       'expected.',
       'It is a brief about fairness, written by somebody who wanted to avoid deciding on a '
       'client’s behalf, and it produced nine clients asking to be decided for.'],
 draft=['Put together something showing clients the options now that our costs have fallen.',
        'Lay out the alternatives fairly and let them choose.',
        'Do not push them towards any particular one.',
        'Give them enough information to decide.',
        'Keep it reasonably short.',
        'Send it out to everybody.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='A brief whose central instruction is the one that caused the problem.',
 asked=['Three options on the same three measures',
        'A recommendation with a client-specific reason',
        'A statement of what the cheap option removes'],
 back=['Three options, no view',
       '9 clients asking to be told',
       '2 clients using the word abdication'],
 gap='"Do not push them towards any particular one" forbids the recommendation, "enough '
     'information to decide" is unmeasurable where the missing information cannot cross the '
     'relationship, and "everybody" includes clients about whom nothing specific is known.',
 back_cap='A page that was fair, complete and asked clients to do arithmetic with a number missing.',
 back_note='The instruction not to push was written to protect clients. It removed the only '
           'element that would have let them evaluate the choice.',
 diagnosis=[('[1] "the options" — how many, measured how?', 'unbounded quantity'),
            ('[2] "fairly" — fair by what test?', 'unstated criterion'),
            ('[3] "do not push them" — and if they ask what we think?', 'missing condition'),
            ('[4] "enough information to decide" — enough for whom?', 'unstated criterion'),
            ('[5] "reasonably short" — how short?', 'unbounded quantity'),
            ('[6] "send it to everybody" — including clients we know little about?', 'missing condition')],
 rewrite='Rewrite the brief so that the page carries a recommendation whose reason is about '
         'the individual client, and so that the cheaper option’s cost is stated.',
 scaffold=['Why a choice without a view transfers work rather than control',
           'Which clients receive it, and which do not',
           'The unit cost analysis and each client’s own failure history',
           'The three measures each option carries, and what the recommendation must contain',
           'How many pages come back, and what each one has on it',
           'What to do for a client about whom nothing specific is known'],
 bank=['Let each client choose … without asking them to weigh …',
       'Cover the … active clients; … receive …',
       'Work from … dated … and …',
       'Present … options with … , … and … ; add 1 recommendation of no more than … sentences whose reason refers to …',
       'Return … pages, each with …',
       'Where we do not know enough about a client, …'],
 check=['Does every option carry the same measures?',
        'Must the recommendation give a reason about that specific client?',
        'Is the cost of the cheaper option stated concretely?',
        'Is there a rule for clients you know little about?'],
 model=['Let each client choose how the saving is taken, without asking them to weigh something only we can see',
        'The 11 active clients; prospective clients receive the standard service and no choice',
        'The unit cost analysis dated 4 May and each client’s own failure history for the last 24 months',
        'Present 3 options, each with price, turnaround and error rate; add 1 recommendation of no more than 2 sentences whose reason refers to something about that client’s own business; state which check the cheaper option removes and how many times it fired last year',
        '11 pages, each carrying 3 options and 1 recommendation with a named client-specific reason, by 20 May',
        'Where we do not know enough about a client to give a client-specific reason, say so on the page and recommend the existing service'],
 cost='9 of 11 clients asking to be told what to do, 2 of them using the word abdication, '
      'and a second round of 11 pages 3 weeks later carrying what the first should have.'),

rev_fig=figs.split('ADVICE, CORRECTLY FORMED',
                   'Wrong structure',
                   ['I would rather to keep the check.',
                    'We recommend you to keep it.',
                    'I suggest you to take the faster one.',
                    'We prefer that you would keep it.'],
                   'Right structure',
                   ['I would rather keep the check.',
                    'We recommend that you keep it.',
                    'I suggest taking the faster one.',
                    'We would prefer you to keep it.']),
rev_fig_cap='Four structures that native speakers get wrong too, and that clients notice.',
rev=dict(
 read=[('Offering options without a view is received as', ['candour', 'abdication', 'generosity', 'efficiency'], 1),
       ('"We recommend" is followed by', ['you to keep', 'that you keep', 'you keeping', 'to you keep'], 1),
       ('A recommendation’s reason should be about', ['the service', 'this customer', 'the price', 'the market'], 1),
       ('In the Clinic, what is recorded after a departure?', ['nothing', 'the fact the client supplied', 'the price', 'a complaint'], 1)],
 listen_text='Offer the choice, because the saving is genuinely divisible and deciding '
             'silently is deciding for somebody else. But offer it with a view, because the '
             'comparison needs information that sits on your side of the relationship. Make '
             'the reason about that customer and make it a fact they could contradict. And '
             'expect to be declined, because a departure usually brings you a fact you did '
             'not hold.',
 listen=[('The saving is genuinely ____________.', 'divisible'),
         ('The comparison needs information that sits on your side of the ____________.', 'relationship'),
         ('Make it a fact they could ____________.', 'contradict'),
         ('A departure usually brings you a ____________ you did not hold.', 'fact')],
 speak=['Offer your partner three options for a task. They ask which you recommend and why.',
        'Make the reason about them. See whether they can disagree with it.'],
 write='Write a two-sentence recommendation whose reason is about one specific customer.',
 vocab=[('What it costs to produce one item is the ____________.', 'unit cost'),
        ('The standard below which work is not acceptable is the ____________.', 'quality bar'),
        ('A leaning towards something, short of a decision, is an ____________.', 'inclination'),
        ('Something given up to reach agreement is a ____________.', 'concession'),
        ('To guide somebody gently towards a choice is to ____________ them.', 'steer')],
 gram=[('I would rather ____________ the check, on balance.', 'keep'),
       ('I would rather you ____________ the check.', 'kept'),
       ('We recommend that you ____________ the faster option.', 'take'),
       ('We suggest ____________ the existing service.', 'keeping'),
       ('We would prefer you ____________ decide before Friday.', 'to')]),

found=['Write down what your organisation gives up in order to be faster or cheaper.',
       'Take a choice you offer customers and add a reason about them specifically.',
       'Find a recommendation at your work whose reason is about the service.',
       'Ask a customer who declined your advice what they knew that you did not.'],
end_line='It was right on the information we had, and his information was better.',
end_next='Next: Value, Not Volume',
)
