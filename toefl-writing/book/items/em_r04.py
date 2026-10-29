# -*- coding: utf-8 -*-
"""Email practice: EM 042-046 (inquiry), EM 052-055 (recommendation)."""
from _kit import em

I = 'Inquiry and information seeking'
R = 'Recommendation and advice'


def P(a, b, c):
    return [('P1', 'Decode the task', a),
            ('P2', 'Prime the vocabulary', b),
            ('P3', 'Write it before you read it', c)]


def F(a, b):
    return [('F1', 'Take the answer apart', a),
            ('F2', 'Harvest the language', b),
            ('F3', 'Why this is a 5 and that is a 3',
             ['Name the three things that hold the version below at band 3.'])]


ITEMS = [

em('EM 042', I,
   ('ask the question that decides whether you apply at all, first',
    'whether ... or', 'deferral, conditional offer, defer, intake',
    'enquiring about something you may not go through with'),
   'You hold a conditional offer for a masters course starting in September '
   'but may need to defer a year for family reasons. You do not want to '
   'signal that you are wavering, and you need to know the rules before '
   'deciding.',
   ['Identify yourself and your offer.',
    'Ask what you need to know.',
    'Avoid committing yourself either way.'],
   'pgadmissions@northgate.ac.uk', 'Deferral policy — conditional offer, MSc Public Health',
   P(['a.  You may not defer at all. How does that change what you write?',
      'b.  Why is ordering the questions by consequence better than by '
      'topic?'],
     ['a.  Distinguish a conditional offer, an unconditional offer and a '
      'deferral.',
      'b.  What is an intake, and why might deferral depend on it?'],
     ['Ask about the deadline in a way that does not announce a decision.']),
   ['Dear Postgraduate Admissions,',
    'I hold a conditional offer for the MSc in Public Health beginning this '
    'September (applicant reference PG-61204). I am looking into the '
    'possibility of deferring to the following year and wanted to understand '
    'the position before deciding anything.',
    'Could you tell me, first, whether deferral is possible on a conditional '
    'offer or only once the conditions have been met? Second, what the latest '
    'date for requesting one would be. And third, whether a deferred place '
    'is held on the same conditions, or whether the offer is reassessed '
    'against the following year’s intake.',
    'I should say that I have not made a decision and may well take up the '
    'place this year; I would simply rather know the rules before I have to.',
    'Thank you very much for your help.',
    'Yours sincerely,', 'Amira Haddad'],
   F(['a.  Three questions are asked in one paragraph rather than numbered. '
      'Is that a mistake here?',
      'b.  Find the sentence that protects the writer, and say what it '
      'protects her from.'],
     ['a.  "whether deferral is possible on a conditional offer or only once '
      'the conditions have been met" — why "whether ... or" rather than '
      '"if"?',
      'b.  "before I have to" — what has been left out, and what does '
      'the ellipsis achieve?']),
   ['Dear Sir/Madam, I have an offer for the MSc Public Health in September '
    'but unfortunately because of some family problems I think I will not be '
    'able to come this year, so I would like to defer my place to next year. '
    'Could you please tell me the procedure for this and send me the '
    'necessary forms? I hope this will not be a problem.', 'Amira'],
   [('P1', [['a.  It makes the email an enquiry rather than a request. '
             'Announcing an intention you may not act on can get your place '
             'released, your file flagged, or a conversation started that '
             'you then have to walk back.'],
            ['b.  Because the first question may make the others irrelevant. '
             'If deferral is impossible on a conditional offer, the deadline '
             'and the conditions do not arise — and a reader who sees '
             'that structure answers more usefully.']]),
    ('P2', [['a.  A conditional offer depends on results still to come; an '
             'unconditional one does not; a deferral postpones entry to a '
             'later year, usually keeping the offer alive.'],
            ['b.  The cohort admitted in a given year. Deferral often '
             'depends on it because places are capped per intake, so a '
             'deferred student occupies a place in a year that may already '
             'be full.']]),
    ('P3', [['Model: "I wanted to understand the position before deciding '
             'anything." It establishes the enquiry as exploratory in the '
             'first sentence, before any question is asked.']]),
    ('F1', [['a.  No. The questions are short and sequentially dependent, '
             'and "first ... Second ... And third" marks them clearly '
             'enough to be answered in order. Numbering is for questions '
             'that are independent and longer; here it would look heavier '
             'than the enquiry warrants.'],
            ['b.  "I have not made a decision and may well take up the place '
             'this year". It protects her from the file being treated as a '
             'withdrawal, and from the slight disadvantage of being known to '
             'be wavering.']]),
    ('F2', [['a.  Because the alternatives are spelled out. "If" works when '
             'there is a yes and a no; "whether ... or" is the form that '
             'carries two named possibilities, and it makes the question '
             'precise enough to answer in a line.'],
            ['b.  "Before I have to decide". Leaving it out keeps the '
             'decision unspoken, which is the whole posture of the email '
             '— and it ends the paragraph lightly rather than on the '
             'word the writer is avoiding.']]),
    ('F3', [['1.  It announces a decision the writer has not made. "I think '
             'I will not be able to come this year" converts an enquiry into '
             'a withdrawal notice, which is exactly the risk the third '
             'bullet asked her to avoid.'],
            ['2.  No specific questions. "The procedure" leaves the three '
             'things she actually needs — eligibility on a conditional '
             'offer, the deadline, and whether conditions carry over '
             '— entirely unasked.'],
            ['3.  No applicant reference, "some family problems" discloses '
             'vaguely where nothing needed disclosing, and "I hope this will '
             'not be a problem" asks for reassurance rather than '
             'information.']])]),

em('EM 043', I,
   ('ask what you cannot find out, not what you have not looked for',
    'noun clause after wonder', 'accreditation, exemption, module credit, transfer',
    'enquiring across institutions'),
   'You want to know whether a statistics module you passed at another '
   'university exempts you from the equivalent here. The handbook says '
   '"exemptions may be available" and nothing else.',
   ['Say what you are asking about and why the handbook does not settle it.',
    'Give the information they will need.',
    'Ask one clear question.'],
   'ugoffice.psych@northgate.ac.uk', 'Possible exemption from PSY210 — prior statistics module',
   P(['a.  Quoting the handbook could look like criticism. How do you avoid '
      'that?',
      'b.  What will the office need from you before it can even consider '
      'this?'],
     ['a.  Distinguish exemption, credit transfer and accreditation of prior '
      'learning.',
      'b.  What is a syllabus, and why send one unprompted?'],
     ['Ask the single question that the whole email exists for.']),
   ['Dear Undergraduate Office,',
    'I am a second-year Psychology student and I took a statistics module at '
    'Leiden before transferring here last year. The handbook mentions that '
    'exemptions from PSY210 may be available but does not say how they are '
    'assessed, so I wanted to ask how to go about it.',
    'The module was Statistiek II, 7.5 ECTS, passed with 8.0, covering '
    'descriptive statistics, t-tests, ANOVA and simple regression in SPSS. I '
    'have attached the English syllabus and my transcript extract.',
    'Could you tell me who assesses an exemption request of this kind, and '
    'whether there is a form or deadline I should be working to?',
    'Thank you very much.',
    'Best wishes,', 'Lukas Brandt — 2207741'],
   F(['a.  The writer sends the syllabus without being asked. What does '
      'that save?',
      'b.  Why ask "who assesses" rather than "can I have an exemption"?'],
     ['a.  "I wanted to ask how to go about it" — what does "go about" '
      'mean, and why is it right here?',
      'b.  The handbook is quoted exactly. What does that precision do?']),
   ['Hello, I studied statistics in my previous university before coming to '
    'Northgate and I would like to know if I can be exempted from PSY210 '
    'because I have already learned all this material and it would be a '
    'waste of time to repeat it. The handbook says exemptions are available '
    'but it does not explain anything, which is not very helpful. Please let '
    'me know what I should do.', 'Lukas'],
   [('P1', [['a.  Quote it neutrally and attach your purpose to the gap '
             'rather than to the writing. "Mentions X but does not say how" '
             'reports a limit; "does not explain anything" is a complaint '
             'about the author.'],
            ['b.  Evidence of what the module contained and that you passed '
             'it — syllabus, credits, grade. Without those the office '
             'can only reply asking for them.']]),
    ('P2', [['a.  An exemption releases you from taking a module; credit '
             'transfer imports the credits themselves toward your degree; '
             'accreditation of prior learning is the broader process '
             'covering experience as well as study.'],
            ['b.  The document listing what was taught and assessed. Sending '
             'it unprompted is what lets somebody make a judgement rather '
             'than open a correspondence.']]),
    ('P3', [['Model: "Could you tell me who assesses an exemption request of '
             'this kind, and whether there is a form or deadline I should be '
             'working to?"']]),
    ('F1', [['a.  A full round trip, and probably two — the office '
             'would otherwise ask for the syllabus, then for the credits, '
             'then forward it to an academic. Supplying the evidence '
             'unprompted can turn a three-week process into a three-day one.'],
            ['b.  Because the office almost certainly cannot grant one; an '
             'academic does. Asking the reader a question they can answer '
             'gets a reply today; asking one they cannot gets forwarded or '
             'ignored.']]),
    ('F2', [['a.  "How to proceed with it" — idiomatic, slightly '
             'informal, and exactly right for asking about a process whose '
             'shape you do not yet know. It avoids implying there is an '
             'established route you have failed to find.'],
            ['b.  It shows the writer has read the handbook, which pre-empts '
             'the reply "please see the handbook" — the single most '
             'common response to enquiries of this kind.']]),
    ('F3', [['1.  It argues the case instead of asking the question. "I have '
             'already learned all this material and it would be a waste of '
             'time" asserts the conclusion the assessor is supposed to '
             'reach, on no evidence.'],
            ['2.  No evidence at all — no module name, credits, grade, '
             'syllabus or transcript — so the second bullet fails '
             'entirely and nothing can be assessed.'],
            ['3.  It criticises the handbook ("not very helpful") and closes '
             'with "please let me know what I should do", which asks the '
             'reader to design the process.']])]),

em('EM 044', I,
   ('one email, one decision',
    'parallel question structure', 'tenancy, guarantor, deposit scheme, break clause',
    'enquiring where the answer will cost you money'),
   'You are about to sign a tenancy for a student flat. Three things in the '
   'contract are unclear: whether a guarantor is required, how the deposit is '
   'protected, and whether there is a break clause if you take a placement '
   'year.',
   ['Say which property and that you intend to proceed.',
    'Ask the three questions.',
    'Make the reply easy.'],
   'lettings@brookfieldproperty.co.uk', '14b Carlisle Road — three questions before signing',
   P(['a.  The reader is a letting agent, not a university office. What '
      'changes?',
      'b.  Why say you intend to proceed?'],
     ['a.  What is a guarantor, and what is a break clause?',
      'b.  What is a deposit protection scheme, and why ask which one?'],
     ['Write the three questions in parallel grammatical form.']),
   ['Dear Brookfield Lettings,',
    'I am ready to go ahead with the tenancy at 14b Carlisle Road from 1 '
    'September and wanted to check three points in the agreement before '
    'signing.',
    '1. Is a UK-based guarantor required, or is the six-month advance option '
    'in clause 7 available instead?',
    '2. Which deposit protection scheme do you use, and when is the deposit '
    'registered?',
    '3. Is there a break clause if I take an industrial placement from '
    'January? Clause 12 mentions early termination but not on what terms.',
    'If it is simpler to answer by phone I am available most afternoons on '
    '07700 900412.',
    'Thank you.',
    'Best wishes,', 'Chloe Barnett'],
   F(['a.  Clause numbers are cited twice. What does that achieve with a '
      'commercial reader?',
      'b.  Why offer a phone call here, when the guide has generally '
      'preferred written answers?'],
     ['a.  All three questions begin with a verb and name a clause. What '
      'does the parallelism do?',
      'b.  "I am ready to go ahead" — why open with this rather than '
      'with the questions?']),
   ['Hi, I am interested in the flat at Carlisle Road but before I sign I '
    'have some questions. I am not sure about the guarantor thing, also '
    'about the deposit and what happens if I need to leave early because of '
    'my placement. Could you explain these things to me please? Also is the '
    'flat still available?', 'Chloe'],
   [('P1', [['a.  The register is commercial rather than institutional, and '
             'the reader is motivated by closing the let. Be brisk, be '
             'specific, and cite the contract — agents respond to '
             'clause numbers.'],
            ['b.  Because it tells the agent the email is worth answering '
             'properly. An enquiry from a committed tenant gets a different '
             'reply from one that reads as shopping around.']]),
    ('P2', [['a.  A guarantor is someone who undertakes to pay if you do '
             'not. A break clause allows either party to end the tenancy '
             'early on stated terms.'],
            ['b.  A government-approved scheme that holds the deposit so the '
             'landlord cannot simply withhold it. Asking which one is '
             'standard, and the answer is a fact an agent must give.']]),
    ('P3', [['Model: all three begin "Is ..." or "Which ..." and name the '
             'clause they refer to, so each can be answered in a line '
             'without re-reading the contract.']]),
    ('F1', [['a.  It signals you have read the agreement, which changes the '
             'reply from a sales answer to a contractual one and makes a '
             'vague response much harder to give.'],
            ['b.  Because an agent is commercially motivated to answer '
             'quickly and the questions are factual rather than contested. '
             'The written record matters for the contract, which you will '
             'have anyway; what you want here is speed before signing.']]),
    ('F2', [['a.  It makes them scannable and separately answerable, so the '
             'reply comes back as three answers rather than one paragraph '
             'addressing whichever the agent remembered.'],
            ['b.  Because it converts the email from a hurdle into the last '
             'step before a signature, which is the frame most likely to '
             'get a same-day reply.']]),
    ('F3', [['1.  The questions are not questions. "The guarantor thing" and '
             '"what happens if I need to leave early" name topics, not '
             'things that can be answered, and no clause is cited.'],
            ['2.  It undercuts itself. "I am interested" plus "is the flat '
             'still available" signals that the writer is early in the '
             'process, which invites a slower and vaguer reply.'],
            ['3.  "Could you explain these things to me please" asks for an '
             'explanation of a contract rather than three facts, which is '
             'both more work for the reader and less useful to the writer.']])]),

em('EM 045', I,
   ('ask about the exception, not the rule',
    'could you confirm whether', 'invigilation, remote sitting, time zone, concession',
    'enquiring about something the policy does not cover'),
   'You will be abroad for a compulsory family matter during the resit '
   'period. You want to know whether remote sitting is ever permitted, and if '
   'so on what basis. The regulations are silent.',
   ['Explain the situation briefly.',
    'Ask whether the thing you want is possible at all.',
    'Say what you will do if it is not.'],
   'exams@northgate.ac.uk', 'Resit period — is remote sitting ever permitted?',
   P(['a.  The regulations are silent. What does that usually mean, and how '
      'should you ask?',
      'b.  Why state your fallback?'],
     ['a.  What is invigilation, and why does it make remote sitting hard?',
      'b.  What is a concession in an exams context?'],
     ['Ask whether something is possible without implying you expect it to '
      'be.']),
   ['Dear Exams Office,',
    'I am due to sit two resits in the August period. I will be abroad for '
    'part of August for a family matter that I cannot move, and I wanted to '
    'ask about the options before the timetable is published.',
    'Could you confirm whether remote sitting is ever permitted for resits, '
    'and if so what the basis would be — whether it requires an '
    'approved invigilation centre, or whether it is only available in '
    'specific documented circumstances? I realise it may simply not be '
    'offered, in which case I would rather know now.',
    'If it is not possible, I would plan to return for the papers and would '
    'just need the dates as early as you can give them, so that I can book '
    'flights at a sensible price.',
    'Thank you very much.',
    'Yours sincerely,', 'Daniyar Seitov — 2184412'],
   F(['a.  The fallback paragraph asks for something too. What, and why is '
      'it clever to put it there?',
      'b.  The writer offers the office an easy "no". Where, and why?'],
     ['a.  "Could you confirm whether ... and if so what the basis would '
      'be" — why does this get a better answer than "can I sit '
      'remotely"?',
      'b.  "a family matter that I cannot move" — how much is '
      'disclosed, and why that much?']),
   ['Dear Sir/Madam, I need to sit my resits in August but unfortunately I '
    'will be in my home country at that time for important family reasons. '
    'Therefore I would like to request permission to take the exams online '
    'from there. I hope you can arrange this for me as it would be very '
    'difficult and expensive for me to travel back just for two exams. Thank '
    'you in advance for your understanding.', 'Daniyar'],
   [('P1', [['a.  Usually that it is not routinely offered but may exist as '
             'a discretionary arrangement. So ask whether it is ever '
             'permitted and on what basis, rather than asking for it '
             '— the first is a question about policy, the second a '
             'request for an exception you have no grounds to claim yet.'],
            ['b.  Because it removes any suggestion that you are trying to '
             'avoid the exam, and it converts a possible "no" into a useful '
             'reply: if the answer is no, you still get the dates.']]),
    ('P2', [['a.  Supervision of candidates during an exam. It makes remote '
             'sitting hard because the institution must guarantee the '
             'conditions, which usually means an approved centre rather than '
             'a laptop at home.'],
            ['b.  A discretionary allowance made outside the normal '
             'regulations, usually on documented grounds.']]),
    ('P3', [['Model: "Could you confirm whether remote sitting is ever '
             'permitted for resits, and if so what the basis would be?"']]),
    ('F1', [['a.  The dates, as early as possible. It is clever because it '
             'is attached to the worst outcome, so granting it costs the '
             'office nothing and feels like a concession — and it is '
             'the thing that actually saves the writer money.'],
            ['b.  "I realise it may simply not be offered, in which case I '
             'would rather know now." A reader who can see that a refusal '
             'will not cause a fight replies faster and more frankly.']]),
    ('F2', [['a.  Because it asks two linked questions, neither of which '
             'requires the office to make a decision about the writer. "Can '
             'I sit remotely" is an application; this is an enquiry, and '
             'enquiries get answered by whoever opens the email.'],
            ['b.  The minimum: that it is family, that it is in August, and '
             'that it is immovable. Those are the three properties that '
             'matter. More would invite a judgement about whether the reason '
             'is good enough, which is not a conversation worth starting.']]),
    ('F3', [['1.  It requests rather than enquires, and does so without any '
             'grounds — no documentation is offered and no basis in the '
             'regulations is identified.'],
            ['2.  The reason given is cost and inconvenience, which is the '
             'one argument an exams office cannot act on. The real '
             'constraint, an immovable family matter, is softened into '
             '"important family reasons".'],
            ['3.  No fallback, so a "no" ends the correspondence with the '
             'writer no better off; and "Thank you in advance for your '
             'understanding" thanks them for agreeing before they have.']])]),

em('EM 052', R,
   ('recommend against the obvious choice and say why',
    'if I were you', 'placement, intake, cohort, well regarded',
    'advising someone whose situation differs from yours'),
   'A friend has two placement offers: a large consultancy with a structured '
   'scheme and a small research charity where the work is more interesting '
   'but the supervision is informal. They want to go into academia.',
   ['Recommend one.', 'Explain the trade-off against their goal.',
    'Leave the decision with them.'],
   'r.ahmadi@northgate.ac.uk', 'Those two placements — my two pennyworth',
   P(['a.  Your friend wants academia. How does that change which offer is '
      'better?',
      'b.  Why is the larger, more prestigious offer not automatically the '
      'right advice?'],
     ['a.  What does "well regarded" mean, and well regarded by whom?',
      'b.  Distinguish a structured scheme from informal supervision in what '
      'each actually gives you.'],
     ['Recommend in one sentence that refers to their goal rather than the '
      'employers.']),
   ['Hi Reza,',
    'If I were you I would take the charity, and the reason is the academia '
    'plan rather than anything about the two organisations.',
    'The consultancy scheme is the better-run of the two and you would come '
    'out with a line on your CV that everyone recognises. But what a '
    'doctoral application wants to see is evidence you can run a piece of '
    'work and write it up — and a structured scheme gives you rotations '
    'and a final presentation, not an output with your name on it. The '
    'charity is disorganised, which is a real cost, but the published '
    'briefings come out under the researcher’s name, and you would have '
    'one by September.',
    'The thing I would check before deciding is whether anyone there will '
    'actually read your drafts. Informal supervision is fine if someone '
    'competent is paying attention and useless if not — so I would ask '
    'them directly who you would report to and how often.',
    'That said, if you are less sure about academia than you were in '
    'January, the consultancy is the safer place to be undecided, and I '
    'would not think any worse of that.',
    'Dan'],
   F(['a.  The recommendation is hedged at the end by a condition. Does '
      'that weaken it?',
      'b.  The writer names a concrete thing to check before deciding. Why '
      'is that more useful than the recommendation itself?'],
     ['a.  "If I were you I would take the charity" — why the unreal '
      'conditional for advice you actually mean?',
      'b.  "which is a real cost" — what is conceded, and what does '
      'conceding it buy?']),
   ['Hi Reza, I think you should definitely take the consultancy, it is a '
    'much bigger name and everybody knows it, and the training programme is '
    'excellent so you will learn a lot of useful skills. The charity sounds '
    'interesting but it is very small and nobody will know it on your CV, '
    'and if the supervision is informal you might not learn anything '
    'properly. Trust me, go for the consultancy, you will not regret it.',
    'Dan'],
   [('P1', [['a.  It changes the criterion from prestige to evidence of '
             'independent research. An application to a doctoral programme '
             'is read by academics looking for outputs, not by recruiters '
             'looking for brands.'],
            ['b.  Because "better offer" is meaningless without an end. The '
             'consultancy is better for most purposes and worse for this '
             'one, which is exactly the kind of judgement advice exists to '
             'make.']]),
    ('P2', [['a.  Respected by a particular community. The consultancy is '
             'well regarded by employers; the charity may be well regarded '
             'by the researchers who will read the application. Always ask '
             'by whom.'],
            ['b.  A structured scheme gives training, breadth and a '
             'recognised name. Informal supervision gives ownership of real '
             'work — or nothing at all, depending entirely on the '
             'person supervising.']]),
    ('P3', [['Model: "If I were you I would take the charity, and the reason '
             'is the academia plan rather than anything about the two '
             'organisations."']]),
    ('F1', [['a.  No — it strengthens it, because it names the one '
             'premise the advice depends on. Advice that states its own '
             'conditions is advice the recipient can actually use; advice '
             'that does not is a guess presented as certainty.'],
            ['b.  Because the recommendation turns on a fact the writer does '
             'not have. Whether informal supervision is a cost or a disaster '
             'depends on who is reading the drafts, and only Reza can find '
             'that out.']]),
    ('F2', [['a.  Because the decision is not the writer’s to make. '
             '"Take the charity" is an instruction; "if I were you I would" '
             'offers a view from a position the speaker explicitly does not '
             'occupy, which leaves the choice where it belongs.'],
            ['b.  That the charity is disorganised — the strongest '
             'point against the recommendation being made. Conceding it '
             'first means the reader does not have to raise it, and makes '
             'everything else more credible.']]),
    ('F3', [['1.  It recommends against the stated goal without noticing '
             'there is one. Academia is never mentioned, so the second '
             'bullet — the trade-off against their plan — is '
             'entirely unaddressed.'],
            ['2.  It forecloses the decision. "Definitely", "Trust me", '
             '"you will not regret it" leave Reza nowhere to disagree.'],
            ['3.  Language: three comma splices, and "nobody will know it on '
             'your CV" asserts something about an audience the writer has '
             'not identified.']])]),

em('EM 053', R,
   ('say what you do not know, and the advice becomes usable',
    'hedged generalisation', 'intensive, immersion, plateau, conversational',
    'advising on something you have only partly experienced'),
   'A classmate asks whether an expensive four-week intensive language course '
   'abroad is worth it. You did a similar course two years ago in a different '
   'country and had a mixed experience.',
   ['Give a view.', 'Be clear about the limits of your experience.',
    'Give them something concrete to check.'],
   'm.novak@northgate.ac.uk', 'That summer intensive — what I’d check first',
   P(['a.  Your experience was in a different country two years ago. Does '
      'that disqualify you?',
      'b.  What is the difference between advice and a review here?'],
     ['a.  What does it mean to plateau in language learning?',
      'b.  Distinguish immersion from an intensive course.'],
     ['Give a recommendation in one sentence that names its own limits.']),
   ['Hi Marta,',
    'Worth it, I think, but with one condition that made most of the '
    'difference for me — and my experience is two years old and in '
    'Portugal rather than Spain, so treat it accordingly.',
    'The teaching on these courses tends to be competent and similar '
    'everywhere; four hours a day of grammar will move you whoever is '
    'delivering it. What varied enormously was the afternoons. My first two '
    'weeks were with a group of English speakers and I plateaued almost '
    'immediately, because we all defaulted to English the moment class '
    'ended. The second fortnight I moved to a homestay and it was a '
    'different course entirely.',
    'So the thing I would check is not the school but the accommodation and '
    'the nationality mix. Ask them what proportion of students are from '
    'English-speaking countries, and whether homestay is available rather '
    'than the shared flats. If they will not tell you the mix, that is '
    'usually an answer in itself.',
    'Happy to send you the materials I still have, if useful.',
    'Dan'],
   F(['a.  The writer discounts his own evidence in the first sentence. '
      'Why does that make the advice more useful rather than less?',
      'b.  The concrete check is about accommodation, not teaching. What '
      'reasoning gets there?'],
     ['a.  "tends to be competent and similar everywhere" — what does '
      '"tends to" protect against?',
      'b.  "that is usually an answer in itself" — what is being '
      'implied, and why not say it directly?']),
   ['Hi Marta, I did a course like this two years ago and honestly it was not '
    'great, the classes were boring and I did not improve very much, so I '
    'would not spend so much money on it if I were you. You can learn the '
    'same things from apps and online tutors for a fraction of the price. '
    'But everyone is different so maybe for you it will be better, you never '
    'know.', 'Dan'],
   [('P1', [['a.  No — but it limits what your experience is evidence '
             'for. It is good evidence about what varies between such '
             'courses and poor evidence about this particular school, and '
             'saying so is what lets your friend weigh it.'],
            ['b.  A review reports what happened to you. Advice identifies '
             'which features of your experience will generalise to theirs '
             '— which requires separating the course from the '
             'circumstances.']]),
    ('P2', [['a.  To stop improving despite continued study, usually because '
             'the difficulty of the input has stopped rising.'],
            ['b.  An intensive course is many hours of formal teaching; '
             'immersion is living in the language outside class. The second '
             'is what the model identifies as the real variable.']]),
    ('P3', [['Model: "Worth it, I think, but with one condition — and '
             'my experience is two years old and in a different country, so '
             'treat it accordingly."']]),
    ('F1', [['a.  Because it tells Marta how much weight to put on each '
             'part. Advice offered as certain has to be either accepted or '
             'rejected whole; advice that marks its own reliability can be '
             'used selectively, which is how people actually make decisions.'],
            ['b.  From separating the constant from the variable. If the '
             'teaching is similar everywhere, it cannot explain why one '
             'course works and another does not — so the explanation '
             'has to be in what differed, which was the afternoons.']]),
    ('F2', [['a.  Against the counterexample. Somebody will have had a '
             'brilliant or a terrible teacher, and an unhedged claim dies on '
             'that case. "Tends to" claims a central tendency, which is '
             'what the writer actually observed.'],
            ['b.  That a school unwilling to disclose its nationality mix '
             'probably has a bad one. Saying it directly would be an '
             'accusation about a school he has no knowledge of; the '
             'indirect form passes the inference to Marta, who can test it.']]),
    ('F3', [['1.  It generalises from one bad experience without '
             'distinguishing what was the course from what was the '
             'circumstances — so the second bullet fails.'],
            ['2.  The alternative offered (apps and online tutors) addresses '
             'a different goal, and no concrete thing to check is given, so '
             'the third bullet fails.'],
            ['3.  It then withdraws the advice entirely: "everyone is '
             'different so maybe for you it will be better, you never know" '
             'leaves Marta with nothing. There are also two comma splices.']])]),
]
