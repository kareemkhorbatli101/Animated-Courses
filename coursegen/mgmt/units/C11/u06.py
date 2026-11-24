# -*- coding: utf-8 -*-
import figs

U = dict(
num=6, title='Turning Processes Into Nouns',
gram='nominalisation',
ai='standardise before you automate',
strap='CEFR C1 · Grammar: nominalisation · AI: standardise before you automate',
cando=['form nominalisations accurately and use them to compress information',
       'recognise when a nominalisation has removed the person responsible',
       'explain why automating an unstandardised process multiplies it',
       'count the variants of a process before proposing to change it',
       'state which variations are real and which are merely inherited'],
hero=('FORTY-ONE WAYS OF DOING ONE THING',
      ['The intake process, we called it, as though there were one.',
       'There were forty-one, and we automated all of them.'],
      [(800, 'orange', 'short'), (1480, 'teal', 'long'),
       (2160, 'grey', 'short'), (2820, 'blue', 'long')]),
hero_cap='A noun can hide a hundred different things and usually does.',

warm=['How many different ways does your organisation do its most common process?',
      'Who decided each of those ways, and when?',
      'Which of the variations exists for a reason that still applies?'],
read=[
 'The phrase the intake process appears eleven times in Arclight’s handbook, and its '
 'consistent use of the singular concealed a fact that only became visible when Jonas Riedel '
 'tried to build something that performed it: the firm operated forty-one distinct intake '
 'routes, differing in the order of steps, the documents required, the person who signed and '
 'the point at which a client was told the work had begun.',
 'The discovery came late because every variant worked. Each had been introduced by somebody '
 'competent in response to a real client requirement, and each had then been inherited by the '
 'next person to handle that client, without the original requirement being re-examined. '
 'Twenty-nine of the forty-one differences could not be traced to any current reason at all; '
 'eleven were genuine client obligations; one was a regulatory requirement nobody had known '
 'about.',
 'The first automation attempt proceeded on the assumption stated in the handbook and failed '
 'in the way such attempts characteristically fail: it did not break, it multiplied. Jonas '
 'built the standard route, encountered the variants one at a time as clients came through, '
 'and by the eleventh week was maintaining fourteen configured exceptions, each of which was '
 'individually justified and collectively unmanageable.',
 'The abandonment of that attempt, which cost nine weeks, was followed by an exercise nobody '
 'had wanted to do: the documentation of all forty-one routes, the identification of which '
 'differences were obligations and which were inheritances, and the retirement of the '
 'twenty-nine that had no present justification. The exercise took five months and was, in '
 'Jonas’s words, the whole of the project.',
 'What the episode left behind, besides a working system, was a sentence Ines Carvalho now '
 'uses in every project review, and it is deliberately unsophisticated: automation of a '
 'process is the fixing of a process, so find out how many processes you have first. She '
 'notes that the handbook’s singular noun had been doing the damage for four years before '
 'anybody tried to act on it.'],
c_a=[('How many intake routes did the firm actually operate?', 'forty-one'),
     ('How many of the differences had no current reason?', 'twenty-nine'),
     ('How did the first automation attempt fail?', 'it did not break; it multiplied into fourteen configured exceptions'),
     ('How long did the standardisation exercise take?', 'five months'),
     ('What does Ines now say in every project review?', 'that automating a process fixes it, so find out how many processes you have first')],
c_b=[('The variants existed because people were careless.', 'F'),
     ('Eleven of the differences were genuine client obligations.', 'T'),
     ('The first attempt broke down immediately.', 'F'),
     ('Jonas was maintaining fourteen exceptions by week eleven.', 'T'),
     ('The standardisation exercise was something people wanted to do.', 'F'),
     ('The handbook’s singular noun was accurate.', 'F')],
c_c=[('Its consistent use of the ____________ concealed a fact.', 'singular'),
     ('Each had been inherited by the next person to ____________ that client.', 'handle'),
     ('It did not break, it ____________.', 'multiplied'),
     ('The ____________ of that attempt cost nine weeks.', 'abandonment'),
     ('The ____________ of the twenty-nine that had no present justification.', 'retirement'),
     ('The handbook’s singular noun had been doing the ____________ for four years.', 'damage')],
c_d=[('The first attempt failed by ( multiplying / breaking ).', ['multiplying', 'breaking'], 0),
     ('How many differences were regulatory?', ['eleven', 'one', 'twenty-nine', 'none'], 1),
     ('The variants were introduced by', ['careless staff', 'competent people answering real requirements', 'clients', 'the handbook'], 1),
     ('The standardisation exercise was, in Jonas’s words,', ['a distraction', 'the whole of the project', 'unnecessary', 'a failure'], 1),
     ('What had been doing the damage for four years?', ['the system', 'the handbook’s singular noun', 'the clients', 'the regulator'], 1)],
c_e=('Verb or nominalisation? Put each pair in the right column.',
     [('We abandoned the attempt.', 'verb'),
      ('The abandonment of the attempt', 'nominalisation'),
      ('We retired twenty-nine routes.', 'verb'),
      ('The retirement of twenty-nine routes', 'nominalisation'),
      ('Somebody decided this in 2022.', 'verb'),
      ('The decision was taken in 2022.', 'nominalisation')],
     ['verb', 'nominalisation']),

v_fig_title='VARIATION, AND WHAT TO DO WITH IT',
v_fig=[('doc', 'a template'), ('scale', 'a tolerance'), ('chart', 'dispersion'),
       ('bulb', 'a convention'), ('bank', 'a baseline'), ('key', 'elbow room')],
v_fig_cap='Six words for the difference between a process and the forty-one things people do.',
vocab=[
 ('standardisation', 'the act of making many ways of doing something into one'),
 ('dispersion', 'the extent to which instances of the same thing differ'),
 ('a variant', 'one of several versions of the same thing in use'),
 ('to harmonise', 'to bring differing practices into agreement'),
 ('a deviation', 'a departure from the stated way of doing something'),
 ('a template', 'a fixed form that each instance is produced from'),
 ('a baseline', 'the agreed starting state against which change is measured'),
 ('conformance', 'the degree to which practice matches what is stated'),
 ('a tolerance', 'the amount of permitted variation, stated as a limit'),
 ('creep', 'the slow movement of practice away from what was agreed'),
 ('an outlier', 'an instance so unlike the others that it distorts the picture'),
 ('a norm', 'what is usually done, whether or not anybody decided it'),
 ('uniformity', 'the state of every instance being the same'),
 ('to rationalise', 'to reduce a number of things to a defensible smaller number'),
 ('consolidation', 'the bringing together of scattered things into one'),
 ('proliferation', 'an uncontrolled increase in the number of versions'),
 ('a taxonomy', 'an agreed scheme of categories and their names'),
 ('a convention', 'a practice followed because it is followed, not because it is required'),
 ('elbow room', 'the freedom of a person to decide within stated limits'),
 ('exception handling', 'the stated arrangements for cases the standard does not cover')],
v_a=[('An uncontrolled increase in the number of versions is ____________.', 'proliferation'),
     ('The amount of permitted variation, stated as a limit, is a ____________.', 'tolerance'),
     ('The slow movement of practice away from what was agreed is ____________.', 'creep'),
     ('A practice followed because it is followed is a ____________.', 'convention'),
     ('An agreed scheme of categories and their names is a ____________.', 'taxonomy'),
     ('To reduce a number of things to a defensible smaller number is to ____________.', 'rationalise'),
     ('The stated arrangements for cases the standard does not cover are ____________.', 'exception handling'),
     ('The degree to which practice matches what is stated is ____________.', 'conformance')],
v_b=[('Standardisation is the act of making', 'many ways of doing something into one.'),
     ('A baseline is the agreed starting state', 'against which change is measured.'),
     ('An outlier is an instance so unlike the others', 'that it distorts the picture.'),
     ('Elbow room is the freedom of a person', 'to decide within stated limits.'),
     ('A norm is what is usually done,', 'whether or not anybody decided it.')],

g_title='Grammar: nominalisation',
g_rule=['A nominalisation turns a verb or adjective into a noun: abandon → abandonment.',
        'It compresses information, which makes formal writing shorter and denser.',
        'It also removes the subject, so the person who acted can disappear entirely.',
        'Use it to compress what is agreed; never to conceal who did or must do something.'],
g_fig=('LOOSE',
       ['A decision was taken to abandon it.',
        'The implementation of standardisation is required.',
        'There was a failure of conformance.',
        'The retirement of the routes has occurred.'],
       'PRECISE',
       ['Jonas and I abandoned it on 4 March.',
        'Jonas must standardise the 41 routes by June.',
        'Four teams did not follow the stated route.',
        'Jonas retired 29 routes in May.'],
       'four nominalisations with nobody in them',
       'four sentences naming who, what and when'),
g_fig_cap='Nominalisation is a tool for compression and the commonest device for evading ownership.',
g_a=[('We abandoned it. → the ____________ of the attempt', 'abandonment'),
     ('We retired the routes. → the ____________ of the routes', 'retirement'),
     ('They standardised it. → the ____________ of the process', 'standardisation'),
     ('It proliferated. → the ____________ of variants', 'proliferation'),
     ('We implemented it. → the ____________ of the system', 'implementation'),
     ('They conformed. → ____________ with the stated route', 'conformance'),
     ('She decided. → the ____________ taken in March', 'decision'),
     ('We identified them. → the ____________ of the obligations', 'identification'),
     ('They consolidated them. → the ____________ of the routes', 'consolidation')],
g_b=[('Nominalisation compresses information and can remove the ( object / subject ).', ['object', 'subject'], 1),
     ('We abandoned it → the ____ of the attempt', ['abandoning', 'abandonment', 'abandonation', 'abandon'], 1),
     ('They standardised it → the ____ of the process', ['standardising', 'standardisation', 'standard', 'standardness'], 1),
     ('Which version names the actor?', ['A decision was taken.', 'Jonas decided on 4 March.', 'There was a decision.', 'The decision occurred.'], 1),
     ('We identified them → the ____ of the obligations', ['identifying', 'identification', 'identity', 'identifiance'], 1),
     ('Use nominalisation to compress what is ____.', ['disputed', 'agreed', 'unknown', 'delegated'], 1)],

d1=dict(title='The intake process, singular',
        fig=(['The handbook says the intake process.', 'Eleven times.'],
             ['And how many are there?', 'Forty-one.']),
        cap='Jonas and Ines, in week eleven of the first attempt.',
        lines=[('Jonas', 'I am maintaining fourteen configured exceptions and a new one arrived this '
                         'morning. I would like to stop.'),
               ('Ines', 'Stop and do what?'),
               ('Jonas', 'Count. The handbook says the intake process, singular, eleven times. I think '
                         'there are about forty.'),
               ('Ines', 'Forty variations of a process we describe in two pages.'),
               ('Jonas', 'Forty-one, as it turns out, and every one of them was introduced by somebody '
                         'sensible for a reason that was good at the time.'),
               ('Ines', 'And the reasons now?'),
               ('Jonas', 'Twenty-nine of them I cannot trace to anything at all. Eleven are real '
                         'client obligations. One is a regulatory requirement that nobody currently '
                         'working here knew about, which I found by asking why a form existed.'),
               ('Ines', 'That last one is worth the nine weeks on its own.'),
               ('Jonas', 'It is, and it is also the argument against what I am about to propose, '
                         'because if one of the twenty-nine untraceable ones turns out to be like it, '
                         'we will retire something that matters.'),
               ('Ines', 'What would protect us?'),
               ('Jonas', 'Asking the client why, in each of the twenty-nine cases, before retiring '
                         'anything. It adds five weeks and I think it is not optional.'),
               ('Ines', 'Then it is not optional. And write the sentence down for the project review, '
                        'because I want to use it: automating a process fixes it, so count your '
                        'processes first.')],
        a=[('How many exceptions was Jonas maintaining?', 'fourteen, with a new one that morning'),
           ('How many times does the handbook say the intake process?', 'eleven, always singular'),
           ('How was the regulatory requirement found?', 'by asking why a form existed'),
           ('What is the argument against retiring the twenty-nine?', 'that one of them may matter in the way the regulatory one did'),
           ('What protection does Jonas propose?', 'asking the client why in each of the twenty-nine cases first')],
        b=[('I am maintaining fourteen configured ____________.', 'exceptions'),
           ('Introduced by somebody sensible for a reason that was good at the ____________.', 'time'),
           ('It adds five weeks and I think it is not ____________.', 'optional'),
           ('Count your processes ____________.', 'first')]),
d2=dict(title='Who retires a route?',
        fig=(['The retirement of twenty-nine routes.', 'Retired by whom?'],
             ['It says the retirement.', 'That is my point.']),
        cap='Marta and Jonas, over the draft plan.',
        lines=[('Marta', 'Your plan says the retirement of twenty-nine routes will be completed by '
                         'June. Retired by whom?'),
               ('Jonas', 'By me and the two client managers.'),
               ('Marta', 'Then write that. The sentence as drafted has no person in it, and in eleven '
                         'months somebody will ask who authorised retiring a client’s route and the '
                         'answer will be a noun.'),
               ('Jonas', 'The whole plan is written like that. It is how plans are written.'),
               ('Marta', 'It is how plans are written and it is why I spend a quarter of my time '
                         'reconstructing who decided things. The identification of obligations, the '
                         'consolidation of templates, the implementation of the new route. Nobody '
                         'identifies, consolidates or implements anything.'),
               ('Jonas', 'Some of those are genuinely collective.'),
               ('Marta', 'Then name the collective and the person who signs for it. I am not asking '
                         'you to write badly, I am asking you to put a subject in the sentences where '
                         'a human being has to act.'),
               ('Jonas', 'And where nobody has to act?'),
               ('Marta', 'Then the nominalisation is correct and I have no objection. The '
                         'standardisation of the intake process is a thing that will have happened. '
                         'The retirement of a route is something a person does to a client.'),
               ('Jonas', 'That is a usable distinction. I will go through the plan and put names '
                         'against every verb that is currently a noun.'),
               ('Marta', 'How many do you expect?'),
               ('Jonas', 'On a first reading, about thirty, and I expect to disagree with myself '
                         'about nine of them.')],
        a=[('What does Marta object to in the plan?', 'that the sentence has no person in it'),
           ('What does she spend a quarter of her time doing?', 'reconstructing who decided things'),
           ('What is she not asking for?', 'that Jonas write badly'),
           ('When is a nominalisation acceptable, in her view?', 'where no person has to act'),
           ('What will Jonas do?', 'put names against every verb that is currently a noun, about thirty of them')],
        b=[('The sentence as drafted has no ____________ in it.', 'person'),
           ('Nobody identifies, consolidates or ____________ anything.', 'implements'),
           ('Name the collective and the person who ____________ for it.', 'signs'),
           ('Something a person does to a ____________.', 'client')]),

speak=[('Say it correctly',
        ['Student A: read six nominalised sentences from a real document at your work.',
         'Student B: rewrite each with a subject, a verb and a date.',
         'Find the one where the nominalisation was correct and should stay.']),
       ('Spoken specification: count the variants',
        ['Choose a process your organisation describes in the singular.',
         'Brief aloud how many versions of it actually exist, and why each one started.',
         'Your partner asks which variations you would retire and what protects you.']),
       ('Put the person back',
        ['In pairs, take a plan or a policy you both know.',
         'Find three sentences where a verb has become a noun and nobody is responsible.',
         'Find the one where nobody could now say who was supposed to act.'])],

ext_title='Automating an unstandardised process does not fix the variation; it hardens it',
ext_fig=figs.datatable('FORTY-ONE ROUTES, EXAMINED',
                       ['Reason for the difference', 'Count', 'Action'],
                       [['no traceable reason', '29', 'ask the client, then retire'],
                        ['client contractual obligation', '11', 'keep, record the clause'],
                        ['regulatory requirement', '1', 'keep, document and train'],
                        ['total routes before', '41', '—'],
                        ['routes after the exercise', '12', '—'],
                        ['configured exceptions needed', '14 → 1', '—']]),
ext_fig_cap='Twelve routes rather than one, because eleven of the differences were real.',
ext=[
 'The instruction to standardise before automating is repeated so often that it has become '
 'inert, and the reason it is worth restating precisely is that the failure it predicts does '
 'not look like a failure. A system built for a process that in fact exists in forty '
 'versions does not collapse; it accommodates. Each accommodation is small, justified and '
 'documented, and the aggregate is a configuration nobody can hold in their head and nobody '
 'can safely change.',
 'The variation itself is almost never evidence of carelessness, which is why counting it is '
 'the diagnostic step rather than deploring it. Each variant was typically introduced by a '
 'competent person in response to a real requirement and then inherited by successors who '
 'had no occasion to re-examine the requirement. The result is a population of local optima, '
 'all defensible at birth and most of them orphaned, and the only way to tell which is which '
 'is to ask.',
 'That asking is where the exercise becomes uncomfortable and where its value sits. Of the '
 'differences a firm cannot account for, most will indeed turn out to be inherited habit; '
 'but the same investigation routinely surfaces one or two that exist for reasons nobody '
 'currently employed remembers, including regulatory ones, and a standardisation that '
 'retires those without asking has converted an untidy process into a liability. The '
 'protection is procedural: ask the client, or the regulator, before retiring any variation '
 'whose cause is unknown.',
 'Nominalisation plays a surprisingly large part in how the problem persists. A handbook that '
 'says the intake process asserts a singular where a plural exists, and asserts it in a form '
 'that cannot be questioned, because a noun carries no count. The same grammar then obscures '
 'the remedy: the retirement of twenty-nine routes names no actor, so nobody is assigned, and '
 'the plan reads as complete while being unexecutable.',
 'The practical sequence is therefore to count, classify, ask and only then build; and to '
 'write the resulting plan with people in the sentences. The counting is cheap, the '
 'classification is tedious, the asking is slow, and the building is the part everybody wants '
 'to start with. A firm that reverses the order pays for all four stages anyway, in a worse '
 'currency and after having told its clients a date.'],
dp1=('Process variation and system implementation',
     'Implementation studies generally report that unexamined process variation is a leading '
     'cause of cost overrun in business-system projects, and that configuration counts grow '
     'faster than linearly with the number of unretired variants.',
     'Source: general implementation-research literature, 2026. Figures vary by scale.'),
e_a=[('What does a system built for an unstandardised process do?', 'it accommodates rather than collapsing'),
     ('Why is the variation usually not carelessness?', 'each variant answered a real requirement and was then inherited unexamined'),
     ('What risk does retiring unexplained variations carry?', 'retiring one that exists for a reason nobody remembers, including regulatory ones'),
     ('How does nominalisation help the problem persist?', 'a noun carries no count, so a singular assertion cannot be questioned'),
     ('What is the practical sequence?', 'count, classify, ask, then build, with people in the sentences')],
e_b=[('Systems built on unstandardised processes usually collapse visibly.', 'F'),
     ('Process variants are typically introduced carelessly.', 'F'),
     ('Every unexplained variation can safely be retired.', 'F'),
     ('A noun carries no count.', 'T'),
     ('Counting the variants is expensive.', 'F'),
     ('Reversing the order avoids paying for the early stages.', 'F')],

w_model=(
 'Purpose: reduce the 41 intake routes to the smallest number that keeps every obligation, '
 'before any part of intake is built. Scope: intake from first contact to first piece of '
 'work issued; the checking process is out of scope. Inputs: the 41 documented routes, the '
 '230 client contracts, and the regulatory schedule dated 9 January. Criteria: classify each '
 'of the 41 differences as contractual, regulatory or untraced, quoting the clause for every '
 'contractual one; for each of the untraced differences, ask the client in writing why it '
 'exists and record the answer; retire a difference only where the client has answered and '
 'the answer discloses no obligation. Done: 1 route map of no more than 15 routes, 41 '
 'classification lines each naming a person, and 1 list of differences retained because the '
 'client did not answer. Fallback: where a client does not answer within 21 days, retain the '
 'difference and record it as unanswered rather than treating silence as consent.'),
w_fig=figs.spec_card('STANDARDISE FIRST, IN SIX LINES',
                     [('Purpose', 'reduce 41 intake routes to the fewest that keep every obligation'),
                      ('Scope', 'first contact to first work issued; checking excluded'),
                      ('Inputs', '41 routes, 230 contracts, regulatory schedule of 9 January'),
                      ('Criteria', 'classify all 41, quote clauses, ask the client, retire only on an answer'),
                      ('Done', 'route map of 15 or fewer, 41 named lines, 1 unanswered list'),
                      ('Fallback', 'no answer in 21 days: retain and record, never treat silence as consent')]),
w_fig_cap='The fallback row is the one that prevents a tidy process becoming a liability.',
w_task='Write a standardisation specification for a process in your own organisation.',
w_steps=['Count the variants and say how the count was obtained.',
         'Classify every difference into obligation, regulation or untraced.',
         'Require the clause to be quoted for every obligation claimed.',
         'Require the client or owner to be asked before anything is retired.',
         'Say what happens when nobody answers, and forbid treating silence as consent.'],
w_bank=['Reduce the … routes to the smallest number that … , before …',
        'Cover … from … to … ; … is out of scope.',
        'Work from the … documented routes, the … contracts, and … dated …',
        'Classify each difference as … , … or … , quoting … ; retire a difference only where …',
        'Where … does not answer within … days, … rather than treating silence as consent.'],
w_check=['Is the variant count stated with its method?',
         'Must a clause be quoted for every claimed obligation?',
         'Is asking before retiring made mandatory?',
         'Is silence explicitly excluded as consent?'],

t_title='Standardise before you automate',
t_fig=figs.split('TWO ORDERS OF WORK',
                 'Build first — the variation hardens',
                 ['build the standard route',
                  'meet variant 1 in week 3',
                  '14 configured exceptions by week 11',
                  'abandon, then standardise anyway'],
                 'Standardise first — the build is small',
                 ['count: 41 routes',
                  'classify: 29 untraced, 12 real',
                  'ask, then retire the 29',
                  'build 12 routes, 1 exception']),
t_fig_cap='The same five months of work in both columns, and only one of them in the right order.',
t_body=[
 'Count before you build, and count by inspection rather than by asking how many there '
 'should be. Take the process your handbook describes in the singular, find every instance of '
 'it performed in the last quarter, and establish how many genuinely different routes exist. '
 'The number will be larger than anybody expects, and the gap between the number and the '
 'handbook is the size of the problem you were about to automate.',
 'Then classify every difference rather than deploring it. Some differences are contractual '
 'and you can quote the clause; some are regulatory and somebody must be found who knows; '
 'and most are inherited, introduced for a reason that has lapsed and carried forward by '
 'people who had no occasion to ask. Only the last group can be retired, and only after '
 'asking the client or owner why it exists, because that question is what finds the '
 'regulatory one hiding among the habits.',
 'Finally, write the standardisation plan with people in its sentences. The retirement of '
 'twenty-nine routes will be completed by June assigns the work to nobody, and in a year the '
 'question of who authorised a change to a client’s route will be answered by a noun. '
 'Nominalisation is the right tool for compressing what is settled and the wrong tool for '
 'describing what somebody must do, and that distinction is worth half an hour with a pen on '
 'any plan you are about to approve.'],
t_say=[('Count it: ', 'How many different routes did we actually run last quarter?'),
       ('Classify it: ', 'Contractual, regulatory, or inherited? Quote the clause.'),
       ('Name the actor: ', 'Retired by whom, and signed by whom?')],
t_bound=('Counting and classifying variants tells you what exists and why. It cannot tell you '
         'whether a variation that no longer has a cause once had a good one that will '
         'reassert itself, and it cannot find an obligation nobody now employed remembers '
         'unless somebody thinks to ask the right outside party.'),
t_a=[('How many different ____________ did we actually run last quarter?', 'routes'),
     ('Contractual, regulatory, or ____________?', 'inherited'),
     ('Retired by whom, and ____________ by whom?', 'signed'),
     ('The gap between the number and the handbook is the size of the ____________.', 'problem'),
     ('Only the last group can be ____________.', 'retired'),
     ('The wrong tool for describing what somebody must ____________.', 'do')],
t_b_rubric='Rewrite each nominalised sentence with a subject, a verb and a date.',
t_b=[('The retirement of twenty-nine routes will be completed by June.', 'Jonas and the two client managers will retire twenty-nine routes by 30 June'),
     ('A decision was taken to abandon the first attempt.', 'Jonas and Ines abandoned the first attempt on 4 March'),
     ('The identification of obligations is in progress.', 'Marta is quoting the clause for each of the eleven obligations by 18 April'),
     ('There was a failure of conformance in four teams.', 'four teams did not follow the stated route in the first quarter')],

case=dict(
 title='Decision Clinic · The twenty-ninth route',
 brief=[
  'Arclight asked all twenty-nine clients whose intake differences could not be traced why '
  'the difference existed. Twenty-six answered; twenty-four said they did not know and were '
  'content for the difference to go, and two identified a contractual clause that had been '
  'missed.',
  'Three clients did not answer within twenty-one days. The brief requires that their '
  'differences be retained and recorded as unanswered. Retaining three differences means '
  'retaining three configured exceptions, which Jonas estimates at eleven person-days a year '
  'of maintenance indefinitely.',
  'Thomas Reed proposes retiring the three anyway, on the grounds that twenty-four of '
  'twenty-six answers were do not know. Marta Olsen proposes retaining them. Jonas has '
  'proposed a third route that neither of them likes.'],
 exhibit=figs.datatable('TWENTY-NINE UNTRACED DIFFERENCES',
                        ['', 'Count', 'Outcome'],
                        [['client said they did not know', '24', 'retired'],
                         ['client found a contract clause', '2', 'retained, clause quoted'],
                         ['client did not answer in 21 days', '3', 'retained as unanswered'],
                         ['cost of retaining 3 exceptions', '11 person-days a year', '—'],
                         ['differences found to matter, as a share', '2 of 26', '—']]),
 exhibit_cap='Two of twenty-six mattered, which is both a small proportion and not a negligible one.',
 exhibit_note='The three non-answering clients are among the firm’s smaller accounts and two '
              'have changed contact person in the last year.',
 voices=[('Thomas Reed', 'service delivery',
          'Twenty-four of twenty-six said they did not know. The prior probability that one '
          'of the remaining three matters is about eight per cent, and we are paying eleven '
          'person-days a year forever to insure against it.'),
         ('Marta Olsen', 'risk and liability',
          'Two of twenty-six did matter, and one of those was a clause we had missed in our '
          'own contract. The rule says silence is not consent. If we break it on the first '
          'occasion it costs us something, it was never a rule.'),
         ('Jonas Riedel', 'systems and workflows',
          'Retain the three but stop paying eleven days for them. Handle them manually, '
          'outside the system, as three named exceptions on a list with a review date. That '
          'is not elegant and it is two person-days a year rather than eleven.')],
 steps=[('Find it', 'What did the twenty-nine clients say?'),
        ('Compare it', 'What does retaining three exceptions cost?'),
        ('Infer it', 'Why does Marta treat this as a test of the rule itself?'),
        ('Weigh it', 'Eleven person-days a year against an eight per cent chance of a missed obligation.'),
        ('Decide', 'What happens to the three?')],
 analysis=[('Find it. How many said they did not know?', 'twenty-four of twenty-six'),
           ('Compare it. What does retention cost in the system?', 'eleven person-days a year indefinitely'),
           ('Infer it. What is Marta’s argument about rules?', 'that a rule broken the first time it costs something was never a rule'),
           ('Weigh it. What is Thomas’s probability argument?', 'about eight per cent that one of the three matters'),
           ('Decide. What would you do?', 'answers vary; Jonas’s route keeps the rule and reduces the cost by nine days')],
 decision='Write what Arclight does about the three unanswered differences.',
 decision_steps=['Say whether the three are retained, and how they are handled.',
                 'Say what the cost of that handling is, in person-days.',
                 'Say what happens when a client finally answers.',
                 'Say what, if anything, changes in the silence-is-not-consent rule.'],
 bank=['The … differences are …',
       'They are handled by … , at a cost of …',
       'When a client answers, …',
       'The rule …',
       'This is reviewed on …'],
 outcome='Arclight took Jonas’s route: the three differences were retained, handled manually '
         'from a named list with a six-month review, at about two person-days a year. Four '
         'months later one of the three clients answered, having changed contact person twice, '
         'and identified a reporting obligation imposed by their own auditor that Arclight had '
         'never been told about. Marta regards this as decisive. Thomas accepts that he was '
         'wrong on this occasion and continues to argue that a rule which would have cost '
         'eleven days a year was still the wrong rule, and that Jonas’s compromise is what '
         'made it survivable rather than the rule being right.',
 outcome_q=[('What did the client eventually disclose?', 'a reporting obligation imposed by their own auditor'),
            ('What does Thomas still maintain?', 'that the rule was survivable only because of Jonas’s cheaper handling, not because it was right')],
 tags=['sceptic_right']),

lab=dict(
 title='Brief Lab · Tidy up the intake process',
 task=['This is the brief that launched the first, abandoned automation attempt, written when '
       'everybody still believed there was one intake process.',
       'Its first four words contain the error, and nothing later in the brief corrects it.'],
 draft=['Automate the intake process end to end.',
        'Follow the handbook, which is up to date.',
        'Handle the occasional special case by configuration.',
        'Tidy up any inconsistencies you come across.',
        'Get it live for the new quarter.',
        'Keep the client-facing steps unchanged.'],
 marks={0: 1, 1: 2, 2: 3, 3: 4, 4: 5, 5: 6},
 draft_cap='Six instructions written in the singular about forty-one things.',
 asked=['A count of the routes actually in use',
        'A classification of every difference',
        'A build covering only the retained routes'],
 back=['1 standard route built',
       '14 configured exceptions by week 11',
       '9 weeks spent, nothing live'],
 gap='"The intake process" asserts a singular that does not exist, "the occasional special '
     'case" sets no number, "tidy up any inconsistencies" authorises silent retirement of '
     'obligations, and "get it live for the new quarter" fixes a date before the size of the '
     'work is known.',
 back_cap='Nine weeks, fourteen exceptions, nothing live, and the real work still to do.',
 back_note='"Tidy up any inconsistencies you come across" would have authorised retiring the '
           'regulatory requirement, which Jonas found only because he asked why a form existed.',
 diagnosis=[('[1] "the intake process" — one process, or how many?', 'unbounded quantity'),
            ('[2] "the handbook, which is up to date" — up to date against what?', 'undefined done'),
            ('[3] "the occasional special case" — how many is occasional?', 'unbounded quantity'),
            ('[4] "tidy up any inconsistencies" — including obligations?', 'unstated exception'),
            ('[5] "get it live for the new quarter" — live meaning what, covering which routes?', 'undefined done'),
            ('[6] "keep client-facing steps unchanged" — and where a step is the inconsistency?', 'unstated exception')],
 rewrite='Rewrite the brief so that the routes are counted and classified before anything is '
         'built, and so that nothing is retired on silence.',
 scaffold=['What must be reduced, and before what',
           'Which part of the process is covered and which is not',
           'The routes, contracts and schedules it is built from',
           'How each difference is classified, what must be quoted, and when a retirement is permitted',
           'What comes back: how many routes, how many lines, and what list',
           'What to do when a client does not answer'],
 bank=['Reduce the … routes to … , before …',
       'Cover … from … to … ; … is out of scope.',
       'Work from the … routes, the … contracts, and … dated …',
       'Classify each difference as … , … or … , quoting … for every … ; retire only where …',
       'Return 1 route map of no more than … , … classification lines each naming … , and …',
       'Where a client does not answer within … days, … rather than …'],
 check=['Does the brief require a count before any build?',
        'Must every claimed obligation quote its clause?',
        'Is retirement conditional on an actual answer?',
        'Is a maximum number of final routes stated?'],
 model=['Reduce the 41 intake routes to the smallest number that keeps every obligation, before any part of intake is built',
        'Intake from first contact to first piece of work issued; the checking process is out of scope',
        'The 41 documented routes, the 230 client contracts, and the regulatory schedule dated 9 January',
        'Classify each of the 41 differences as contractual, regulatory or untraced, quoting the clause for every contractual one; ask the client in writing why each untraced difference exists; retire a difference only where the client has answered and the answer discloses no obligation',
        '1 route map of no more than 15 routes, 41 classification lines each naming a person, and 1 list of differences retained because the client did not answer, by 30 September',
        'Where a client does not answer within 21 days, retain the difference and record it as unanswered rather than treating silence as consent'],
 cost='9 weeks of build abandoned, 14 configured exceptions written and discarded, a quarterly '
      'date given to 230 clients and missed, and the 5-month exercise done afterwards anyway.'),

rev_fig=figs.split('NOMINALISATION',
                   'Compressing what is settled — fine',
                   ['the standardisation of intake',
                    'the proliferation of variants',
                    'the consolidation of templates',
                    'conformance with the stated route'],
                   'Hiding who must act — not fine',
                   ['the retirement of 29 routes',
                    'a decision was taken',
                    'the identification of obligations',
                    'there was a failure of conformance']),
rev_fig_cap='The same grammar, used well on the left and used to disappear on the right.',
rev=dict(
 read=[('A system built for an unstandardised process will usually', ['collapse', 'accommodate', 'refuse the work', 'speed up'], 1),
       ('Process variants are usually', ['careless', 'local optima that were defensible at birth', 'illegal', 'deliberate'], 1),
       ('Before retiring an unexplained difference you should', ['retire it quickly', 'ask the client or owner', 'document it only', 'raise the price'], 1),
       ('In the Clinic, what did the late-answering client disclose?', ['nothing', 'an auditor’s reporting obligation', 'a price change', 'a complaint'], 1)],
 listen_text='Count before you build, and count by inspection rather than by asking how many '
             'there should be. Then classify every difference rather than deploring it, '
             'because only the inherited ones can be retired and only after asking why they '
             'exist. And write the plan with people in its sentences, because a noun carries '
             'no count and assigns no work.',
 listen=[('Count by ____________ rather than by asking how many there should be.', 'inspection'),
         ('Classify every difference rather than ____________ it.', 'deploring'),
         ('Only after asking why they ____________.', 'exist'),
         ('A noun carries no ____________ and assigns no work.', 'count')],
 speak=['Name a process your organisation describes in the singular and guess how many exist.',
        'Say how you would find out, and what you would ask before retiring anything.'],
 write='Rewrite one nominalised sentence from your own documents with a subject and a date.',
 vocab=[('An uncontrolled increase in the number of versions is ____________.', 'proliferation'),
        ('The slow movement of practice away from what was agreed is ____________.', 'creep'),
        ('A practice followed because it is followed is a ____________.', 'convention'),
        ('The amount of permitted variation, stated as a limit, is a ____________.', 'tolerance'),
        ('To reduce things to a defensible smaller number is to ____________.', 'rationalise')],
 gram=[('We abandoned it. → the ____________ of the attempt', 'abandonment'),
       ('They standardised it. → the ____________ of the process', 'standardisation'),
       ('It proliferated. → the ____________ of variants', 'proliferation'),
       ('We identified them. → the ____________ of the obligations', 'identification'),
       ('They consolidated them. → the ____________ of the routes', 'consolidation')]),

found=['Count how many versions of one process your organisation actually runs.',
       'Classify three of the differences as contractual, regulatory or inherited.',
       'Ask one client or owner why a difference exists.',
       'Find three nominalisations in your own plans and put a name against each.'],
end_line='Automating a process fixes it, so count your processes first.',
end_next='Next: Long Descriptions, Short Sentences',
)
