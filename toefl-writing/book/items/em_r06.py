# -*- coding: utf-8 -*-
"""Email practice: EM 023-024, 034-035, 046, 054."""
from _kit import em


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

em('EM 023', 'Apology and explanation',
   ('apologise to the person who was embarrassed, not the one who complained',
    'that-clause after apologise', 'overrun, cut short, agenda, chair',
    'apologising for something that happened in public'),
   'You arrived twenty minutes late to a seminar in which you were due to '
   'present first. The chair had to reorder the session and a visiting '
   'speaker lost ten minutes of their slot.',
   ['Apologise to the chair.', 'Say what happened.',
    'Address the person who actually lost out.'],
   'l.petrov@northgate.ac.uk', 'Thursday’s seminar — my apologies',
   P(['a.  Two people were affected. Which one is harder to write to, and '
      'why does the task direct you at both?',
      'b.  Your lateness was not entirely your fault. Does that help?'],
     ['a.  What does it mean for a session to overrun, and what is it to cut '
      'a speaker short?',
      'b.  Who chairs a seminar, and what do they actually do?'],
     ['Apologise in one sentence that names the person who lost the ten '
      'minutes.']),
   ['Dear Dr Petrov,',
    'I am sorry about Thursday. Arriving twenty minutes into a session I was '
    'opening was not acceptable, and I am sorry that it fell to you to '
    'rearrange the running order with no notice.',
    'The 8:40 from Elmfield was cancelled and the next one sat outside the '
    'station for fifteen minutes. I should have allowed more margin for a '
    'morning I was presenting in, and I did not.',
    'What I am most sorry about is that Dr Ferreira lost ten minutes of her '
    'slot because of it. If you think it would be appropriate, I would like '
    'to write to her as well — I did not want to do so without checking '
    'with you first, since she was your guest.',
    'It will not happen again.',
    'With apologies,', 'Omar Khalil'],
   F(['a.  The writer asks permission before apologising to the third '
      'party. Why not simply do it?',
      'b.  The train cancellation appears in the middle, briefly. What '
      'governs that placement?'],
     ['a.  "I am sorry that it fell to you to rearrange the running order" '
      '— what does the that-clause let the apology do?',
      'b.  "I should have allowed more margin ... and I did not." Why add '
      'the second clause when the first already concedes the point?']),
   ['Dear Dr Petrov, I am very sorry for arriving late on Thursday but '
    'unfortunately my train was cancelled and then the next one was also '
    'delayed, so there was really nothing I could do about it. I hope it did '
    'not cause too many problems for the session. Sorry again for the '
    'inconvenience.', 'Omar'],
   [('P1', [['a.  The visiting speaker. The task directs you at both because '
             'the chair absorbed the administrative cost and the guest '
             'absorbed the real one, and an apology that addresses only the '
             'person you report to is a political act rather than a moral '
             'one.'],
            ['b.  Barely. A cancelled train explains the twenty minutes; it '
             'does not explain presenting without margin. The explanation '
             'covers the delay and the apology has to cover the judgement.']]),
    ('P2', [['a.  To overrun is to go past the allotted time; to cut someone '
             'short is to end their contribution early. The second is what '
             'happened to Dr Ferreira.'],
            ['b.  The chair runs the session: introduces speakers, keeps '
             'time, manages questions. Reordering a session live is '
             'precisely their work, which is why it fell to Dr Petrov.']]),
    ('P3', [['Model: "What I am most sorry about is that Dr Ferreira lost '
             'ten minutes of her slot because of it."']]),
    ('F1', [['a.  Because she is the chair’s guest and an unprompted '
             'email from a student might be unwelcome, or might reopen '
             'something already smoothed over. Asking shows the writer is '
             'thinking about the relationships rather than about clearing '
             'his own conscience.'],
            ['b.  It is placed after the apology and before the part about '
             'Dr Ferreira, and kept to two sentences. Any earlier it reads '
             'as a defence; any longer and it becomes the subject of the '
             'email.']]),
    ('F2', [['a.  It lets the apology attach to a consequence rather than to '
             'an act. "I am sorry for being late" apologises for the thing '
             'the writer did; "I am sorry that it fell to you" apologises '
             'for what it cost the reader, which is what she actually '
             'experienced.'],
            ['b.  Because "I should have" names the obligation and "I did '
             'not" states the failure. Together they close off the reading '
             'in which the writer is merely observing a general principle '
             'about margins.']]),
    ('F3', [['1.  It is an excuse. "There was really nothing I could do '
             'about it" denies responsibility entirely, and the question of '
             'leaving margin on a presentation morning never arises.'],
            ['2.  Dr Ferreira is never mentioned. The third bullet fails, '
             'and the person who bore the actual cost is invisible.'],
            ['3.  "I hope it did not cause too many problems" invites the '
             'reader to minimise it, and "sorry for the inconvenience" is '
             'the formula of an automated service message.']])]),

em('EM 024', 'Apology and explanation',
   ('when you cannot repair it, say so and offer what you can',
    'conditional repair offer', 'irretrievable, back-up, overwrite, salvage',
    'apologising for something that cannot be undone'),
   'You overwrote a shared dataset that a colleague had spent a week '
   'cleaning. There is a back-up from four days ago, so three days of their '
   'work is gone.',
   ['Tell them what has happened.', 'Say what can and cannot be recovered.',
    'Offer a repair proportionate to the loss.'],
   'h.sorensen@northgate.ac.uk', 'The cleaned dataset — I have overwritten part of it',
   P(['a.  The worst thing you can do here is delay. Why?',
      'b.  What is the difference between apologising and reporting, and '
      'which does the first paragraph need to do?'],
     ['a.  What does it mean to overwrite a file, and what is salvage?',
      'b.  Distinguish irretrievable from irreversible.'],
     ['State the loss precisely in one sentence, with a number in it.']),
   ['Hi Hanne,',
    'I have overwritten the cleaned dataset and we have lost about three '
    'days of your work. I am very sorry.',
    'What happened is that I ran the import script against the shared folder '
    'rather than my own copy, and it wrote over master_clean.csv. There is a '
    'back-up from Sunday night, so everything up to the duplicate-removal '
    'stage is intact; what is gone is the manual recoding of the free-text '
    'fields and the Tuesday corrections.',
    'I have already restored Sunday’s version so nothing further is at '
    'risk, and I have moved my working copy out of the shared folder so it '
    'cannot happen again.',
    'On the recoding — I would like to redo it myself. If you can send '
    'me the rules you were applying, I will work through it this weekend and '
    'have it back to you Monday for checking. If you would rather do it '
    'yourself because the judgements are hard to hand over, I understand, '
    'and I will take over whatever else is on your list this week instead.',
    'I am sorry, Hanne. This was careless.',
    'Dan'],
   F(['a.  Two different repairs are offered. What determines which is '
      'appropriate, and why does the writer not simply choose?',
      'b.  Paragraph three is not an apology at all. What is it for?'],
     ['a.  "what is gone is the manual recoding ... and the Tuesday '
      'corrections" — why a wh-cleft?',
      'b.  "This was careless." Why end on three words?']),
   ['Hi Hanne, I am so sorry, something went wrong with the shared folder '
    'and I think some of your work on the dataset may have been lost. I am '
    'not sure exactly how it happened, maybe there was a sync problem. There '
    'is an older back-up somewhere I think. Let me know how bad it is and if '
    'there is anything I can do to help. Really sorry about this!', 'Dan'],
   [('P1', [['a.  Because every hour of delay is an hour she may spend '
             'building on something that no longer exists, and because a '
             'loss reported late looks concealed even when it was not.'],
            ['b.  It needs to do both, in that order: the fact first because '
             'she needs it operationally, the apology immediately after '
             'because she needs that too. Reporting without apologising is '
             'cold; apologising before reporting delays the thing she has to '
             'act on.']]),
    ('P2', [['a.  To overwrite is to replace a file’s contents, '
             'destroying what was there. Salvage is recovering what can '
             'still be used from what remains.'],
            ['b.  Irretrievable means it cannot be got back; irreversible '
             'means the action cannot be undone. The recoding is '
             'irretrievable; the overwrite was irreversible. Being precise '
             'about which is which is how you tell someone the real size of '
             'the loss.']]),
    ('P3', [['Model: "There is a back-up from Sunday night, so what is gone '
             'is the manual recoding and the Tuesday corrections — '
             'about three days."']]),
    ('F1', [['a.  Whether the recoding judgements can be transferred. Only '
             'Hanne knows that, and choosing for her would be the same '
             'overreach that caused the problem. Offering both and letting '
             'her pick is the respectful form.'],
            ['b.  Containment. It tells her the situation is now static and '
             'cannot get worse, which is the first thing anyone wants to '
             'know after a loss, and it reports a change already made rather '
             'than a promise.']]),
    ('F2', [['a.  Because the sentence is answering the question she is '
             'actually asking — what is gone? — and the cleft puts '
             'the answer in the stressed final position after the '
             'reassurance about what survived.'],
            ['b.  Because it is a judgement on himself, offered without '
             'qualification, at the point where the email has nothing left '
             'to ask for. Anything longer would start to sound like a bid '
             'for reassurance.']]),
    ('F3', [['1.  It is vague where precision is the entire kindness. '
             '"Some of your work may have been lost", "an older back-up '
             'somewhere I think" — she cannot plan her week from any '
             'of it, so the second bullet fails.'],
            ['2.  Responsibility is deflected. "Something went wrong", '
             '"maybe there was a sync problem" offers an agentless '
             'explanation for an action the writer took.'],
            ['3.  The repair is handed back: "Let me know ... if there is '
             'anything I can do to help" makes the injured party design the '
             'remedy. The third bullet fails.']])]),

em('EM 034', 'Decline and counter-offer',
   ('decline a date, not the relationship, and name the next one',
    'alternative-offer structures', 'clash, slot, pencil in, firm up',
    'declining a meeting with someone whose time is scarcer than yours'),
   'A potential dissertation supervisor has offered you a meeting on '
   'Wednesday at two. You have a compulsory field trip that day. She has '
   'said she is largely away after next week.',
   ['Decline the time.', 'Convey that you very much want the meeting.',
    'Give her something easy to say yes to.'],
   'f.okonkwo@northgate.ac.uk', 'Wednesday 2 p.m. — could we find another time?',
   P(['a.  The risk here is not offence but drift. What does that mean for '
      'the email?',
      'b.  Why is "I am free any time next week" a poor offer?'],
     ['a.  What does it mean to pencil something in, and to firm it up?',
      'b.  Why is "clash" better than "I am busy"?'],
     ['Offer alternatives in one sentence that requires only a yes.']),
   ['Dear Professor Okonkwo,',
    'Thank you — I would very much like to meet. Wednesday at two is '
    'the one slot I cannot do: it clashes with the compulsory Pembrokeshire '
    'field trip, which runs all day.',
    'I could do any of Monday, Tuesday or Thursday that week, at any hour '
    'you like. If it is easier, I am happy to take whatever is left in your '
    'diary — early, late or between other meetings — and I can '
    'come to you.',
    'Given that you are away after that, would it help if I sent the '
    'two-page outline ahead of the meeting, so we can start from something '
    'concrete rather than spending the first half hour on background?',
    'Thank you again.',
    'Yours sincerely,', 'Mira Halvorsen'],
   F(['a.  The writer offers to take awkward times. What does that signal, '
      'and what is the risk?',
      'b.  The final paragraph adds work for the writer. Why is that a good '
      'trade here?'],
     ['a.  "Wednesday at two is the one slot I cannot do" — what does '
      '"the one" do?',
      'b.  "would it help if I sent the two-page outline ahead" — why '
      'frame an offer as a question?']),
   ['Dear Professor Okonkwo, Thank you very much for your email and for '
    'offering to meet me. Unfortunately I am not available on Wednesday at 2 '
    'because I have a field trip on that day which is compulsory for my '
    'course. Could we perhaps find another time that is convenient for both '
    'of us? I am quite flexible so please let me know when you are free.',
    'Mira'],
   [('P1', [['a.  That the danger is the meeting quietly never happening. '
             'Every extra exchange is a chance for it to slip past her '
             'availability, so the email has to reduce the number of further '
             'emails to one.'],
            ['b.  Because it asks her to search her own diary and propose, '
             'which is work. Naming three days and offering to take any hour '
             'converts her task from scheduling to choosing.']]),
    ('P2', [['a.  To pencil in is to arrange provisionally; to firm up is to '
             'confirm. Useful when you need a slot held before details are '
             'settled.'],
            ['b.  Because "clash" names a conflict between two fixed '
             'commitments, which is a fact. "I am busy" describes your '
             'preferences and invites her to weigh them against hers.']]),
    ('P3', [['Model: "I could do any of Monday, Tuesday or Thursday that '
             'week, at any hour you like."']]),
    ('F1', [['a.  It signals that the meeting matters more to the writer '
             'than her convenience does, which is the correct hierarchy when '
             'you are asking a senior person for supervision. The risk is '
             'sounding desperate, which is avoided here because it is one '
             'clause rather than the theme of the email.'],
            ['b.  Because her constraint is time and the writer’s is '
             'not. Trading the writer’s preparation for the '
             'professor’s minutes is the whole logic of the '
             'relationship, and offering it now also demonstrates that the '
             'writer will be a low-maintenance student.']]),
    ('F2', [['a.  It marks the refusal as a single narrow exception rather '
             'than the first of several, which is exactly the reassurance a '
             'busy person needs before offering a second slot.'],
            ['b.  Because an unsolicited attachment is a demand on her '
             'attention. Asking makes it hers to accept, and the question '
             'also supplies the reason — saving half an hour — '
             'which makes yes the obvious answer.']]),
    ('F3', [['1.  No alternatives are offered. "Could we perhaps find '
             'another time" hands the scheduling back to the busier person, '
             'so the third bullet fails.'],
            ['2.  "I am quite flexible" claims flexibility without supplying '
             'any, and "convenient for both of us" introduces the writer’s '
             'convenience as a constraint when it is not one.'],
            ['3.  Her stated departure is never acknowledged, so the '
             'urgency that should shape the whole email is absent, and the '
             'enthusiasm the second bullet asks for never appears beyond a '
             'formula.']])]),

em('EM 035', 'Decline and counter-offer',
   ('refuse a request that is not yours to grant, and route it',
    'negative politeness forms', 'remit, refer, defer to, in a position to',
    'declining because you lack the authority, not the will'),
   'A first-year has emailed you, as a student representative, asking you to '
   'get their late coursework accepted. You have no power to do this and it '
   'would be improper to try, but they are plainly distressed.',
   ['Decline clearly.', 'Explain why, without sounding bureaucratic.',
    'Route them to what will actually help.'],
   'j.adeyemi@northgate.ac.uk', 'Your coursework — what I can and cannot do',
   P(['a.  A clear no sent kindly is better than a vague maybe. Why, here '
      'especially?',
      'b.  What is the difference between "I cannot" and "I am not in a '
      'position to"?'],
     ['a.  What is a remit, and what does it mean to defer to someone?',
      'b.  What is mitigating circumstances, procedurally?'],
     ['Decline in one sentence that makes clear the limit is structural, not '
      'personal.']),
   ['Hi Joseph,',
    'I am sorry you are in this position, and I want to be straight with you '
    'rather than leave you hoping: getting late work accepted is not '
    'something a student rep can do, and it would not be right for me to '
    'try. Decisions on late submission sit with the module convenor and, '
    'above that, the exam board.',
    'What does exist is the mitigating circumstances process, and from what '
    'you have described it sounds as though you may well have grounds. It is '
    'a form plus evidence, it goes to the faculty office rather than to your '
    'tutor, and the deadline for this semester is 14 June — which '
    'matters, because that one is strict.',
    'What I can do is this. I am happy to read the form before you submit '
    'it, I can tell you what the panel usually wants to see, and if you '
    'would rather not deal with the faculty office alone I will come with '
    'you. I have been through it with two other people this year.',
    'Send me a draft whenever you like.',
    'Best,', 'Nadia'],
   F(['a.  The refusal is in the first paragraph and the help is in the '
      'third. Why not reverse them?',
      'b.  "I have been through it with two other people this year." What '
      'does this line do?'],
     ['a.  "it would not be right for me to try" — what does adding '
      'this to "I cannot" achieve?',
      'b.  "What I can do is this." Name the device and say why it is placed '
      'there.']),
   ['Hi Joseph, I am really sorry to hear about your situation, that sounds '
    'very stressful. Unfortunately as a student rep I do not have the power '
    'to change decisions about coursework deadlines, that is up to the '
    'teaching staff. Maybe you could try talking to your tutor and explain '
    'the circumstances, or there might be some kind of mitigating '
    'circumstances procedure you could look into. I hope it works out for '
    'you.', 'Nadia'],
   [('P1', [['a.  Because he is distressed and operating on a deadline. '
             'False hope costs him the days he needs for the process that '
             'can actually help, which is a far greater harm than '
             'disappointment now.'],
            ['b.  "I cannot" states incapacity; "I am not in a position to" '
             'attributes it to the role rather than the person. The second '
             'is gentler and more accurate here, because the limit is '
             'structural.']]),
    ('P2', [['a.  A remit is the scope of what you are authorised to deal '
             'with. To defer to someone is to leave a decision to them '
             'because it is properly theirs.'],
            ['b.  A formal process by which circumstances affecting '
             'performance are considered by a panel, usually with evidence '
             'and a deadline, and usually separate from the teaching staff.']]),
    ('P3', [['Model: "Getting late work accepted is not something a student '
             'rep can do, and it would not be right for me to try."']]),
    ('F1', [['a.  Because the refusal is the thing he must not misunderstand. '
             'Leading with help and burying the no produces a reader who '
             'skims, takes the warmth, and still believes you are fixing it.'],
            ['b.  It converts the offer from politeness into capability. '
             'Anyone can offer to come along; someone who has done it twice '
             'this year knows what the panel asks for, which is the thing he '
             'actually needs.']]),
    ('F2', [['a.  It removes the suspicion that the writer is declining out '
             'of reluctance. Saying the attempt would be improper makes the '
             'refusal principled rather than unwilling, and quietly explains '
             'why pressing her would be unfair.'],
            ['b.  A wh-cleft (family 8, structure 60), placed at the hinge '
             'between what is impossible and what is available. It announces '
             'a turn, so the reader stops processing the refusal and starts '
             'reading the offer.']]),
    ('F3', [['1.  The refusal is softened into vagueness and the route is '
             'guesswork: "maybe you could try", "there might be some kind of '
             'mitigating circumstances procedure you could look into". He is '
             'left to find it himself, under deadline.'],
            ['2.  The advice is partly wrong — it sends him to his '
             'tutor, when the process goes to the faculty office — and '
             'no deadline is given, which is the single most important fact.'],
            ['3.  "I hope it works out for you" closes without offering '
             'anything, so the third bullet fails; and there is a comma '
             'splice in the first sentence.']])]),

em('EM 046', 'Inquiry and information seeking',
   ('ask the question whose answer you cannot look up',
    'could you confirm whether', 'accredited, provisional, conditional, recognised',
    'enquiring where the answer affects a decision with a deadline'),
   'You have been offered a place on a professional training course and need '
   'to know whether it is recognised by the regulator in your home country. '
   'The provider says "internationally recognised", which means nothing.',
   ['Say what you have been told and why it is not enough.',
    'Ask the precise question.',
    'Say why you need to know by when.'],
   'admissions@caldwellinstitute.org', 'Recognition status — Diploma in Clinical Audiology',
   P(['a.  "Internationally recognised" is a marketing phrase. How do you '
      'say so without accusing them of marketing?',
      'b.  What makes a question about recognition answerable?'],
     ['a.  Distinguish accredited, recognised and approved.',
      'b.  What is a regulator, and why does recognition depend on the '
      'destination rather than the provider?'],
     ['Ask the question in a form that cannot be answered with a brochure '
      'phrase.']),
   ['Dear Admissions,',
    'Thank you for the offer of a place on the Diploma in Clinical '
    'Audiology. Before I accept I need to check one thing about recognition, '
    'and I could not find it on the website.',
    'The prospectus describes the diploma as internationally recognised. '
    'What I need to establish is narrower: whether it is accepted by the '
    'Jordanian Higher Health Council for registration as a practising '
    'audiologist. Could you confirm whether the diploma currently appears on '
    'their list of approved qualifications, or whether any graduate has '
    'registered with them on the strength of it?',
    'If the answer is no, or if it is not something you track, I would be '
    'grateful to know that too — I can then ask the Council directly '
    'rather than assume.',
    'I have been asked to confirm my place by 30 April, so I would be very '
    'glad of an answer before then if that is possible.',
    'Thank you very much.',
    'Yours sincerely,', 'Rania Haddad'],
   F(['a.  Two versions of the question are asked. Why does the second one '
      'matter?',
      'b.  The writer offers to go elsewhere. What does that achieve?'],
     ['a.  "What I need to establish is narrower" — what does this do '
      'to the prospectus claim without contradicting it?',
      'b.  "or if it is not something you track" — why offer this '
      'escape?']),
   ['Dear Sir/Madam, I have received an offer for the Diploma in Clinical '
    'Audiology and before accepting I would like to know if this diploma is '
    'recognised internationally and if I will be able to work with it in my '
    'country after finishing the course. Your website says it is recognised '
    'but it does not give details. Please send me more information about '
    'this as soon as possible because I have to decide soon.', 'Rania'],
   [('P1', [['a.  By treating it as true but insufficiently specific for '
             'your purpose. "The prospectus describes it as internationally '
             'recognised; what I need to establish is narrower" accepts '
             'their claim and moves past it.'],
            ['b.  Naming the specific body and the specific use. Recognition '
             'is always recognition by someone for something, and a question '
             'that omits either can be answered truthfully and uselessly.']]),
    ('P2', [['a.  Accredited: assessed against a standard by an accrediting '
             'body. Recognised: accepted by a particular authority for a '
             'particular purpose. Approved: on a named list. They are not '
             'interchangeable and providers often rely on the confusion.'],
            ['b.  The body that controls who may practise. Recognition '
             'depends on the destination because the regulator in your '
             'country decides what it accepts — the provider cannot '
             'confer it.']]),
    ('P3', [['Model: "Could you confirm whether the diploma currently '
             'appears on the Council’s list of approved '
             'qualifications?"']]),
    ('F1', [['a.  Because the first may be answered "we are not on their '
             'list but that does not mean it is not accepted", which leaves '
             'her nowhere. Asking whether any graduate has actually '
             'registered converts an institutional question into a factual '
             'one that has a yes or a no.'],
            ['b.  It removes the incentive to bluff. An institution that '
             'does not know the answer can now say so without losing face, '
             'which is far more useful to her than a confident vagueness.']]),
    ('F2', [['a.  It reframes the gap as a difference of scope rather than '
             'as a falsehood. The prospectus can be entirely true and still '
             'not answer her question, and saying it that way keeps the '
             'exchange cooperative.'],
            ['b.  Because providers often genuinely do not track foreign '
             'regulatory status, and pretending otherwise is the easiest '
             'path for whoever replies. Offering the honest answer as '
             'acceptable is what makes it likely.']]),
    ('F3', [['1.  The question is as vague as the claim it is querying. '
             '"Recognised internationally" and "work with it in my country" '
             'name no regulator, so any answer will be as empty as the '
             'prospectus.'],
            ['2.  "Please send me more information" asks for documents '
             'rather than a fact, which invites a brochure.'],
            ['3.  The deadline is "soon" rather than 30 April, so it cannot '
             'be prioritised; and "it does not give details" is a complaint '
             'where a specific request was needed.']])]),

em('EM 054', 'Recommendation and advice',
   ('recommend by naming the condition under which you would advise the '
    'opposite',
    'worth + gerund', 'placement, deferral, momentum, opportunity cost',
    'advising on a decision with no reversible option'),
   'A friend has been offered a year-long placement that would delay their '
   'graduation by a year. They are torn. You think they should take it but '
   'you know two people who regretted it.',
   ['Give your view.', 'Name the real cost honestly.',
    'Tell them what would change your advice.'],
   'a.lindqvist@northgate.ac.uk', 'The placement year — what I’d weigh',
   P(['a.  You know of two people who regretted it. Should you mention '
      'them?',
      'b.  Why does naming what would change your advice make the advice '
      'stronger?'],
     ['a.  What is opportunity cost, and what is momentum in this context?',
      'b.  What does "worth doing" claim that "a good idea" does not?'],
     ['Give the recommendation and its condition in one sentence.']),
   ['Hi Anders,',
    'I would take it, but the case is not as one-sided as people usually '
    'make it sound, so here is what I would actually weigh.',
    'The real cost is not the year. It is that you come back to a cohort you '
    'do not know, into a final year everyone else has momentum in, and the '
    'two people I know who regretted it both said the same thing — not '
    'that the placement was bad, but that returning was harder than they '
    'expected and the dissertation suffered for it.',
    'Against that, a year of real work before a final year tends to change '
    'what you can do with the degree rather than just what is on the CV. It '
    'is worth doing if the placement is somewhere you would genuinely '
    'consider working, because then it is a year of deciding rather than a '
    'year of deferring.',
    'So the thing that would flip my advice is whether this placement is in '
    'the area you actually want. If it is a good company in a field you are '
    'lukewarm about, I would not do it — you would be buying a year of '
    'information you do not need at the price of a harder final year.',
    'Dan'],
   F(['a.  The writer leads with a recommendation and then spends most of '
      'the email on the case against. Why does that not undermine it?',
      'b.  The regret of two people is reported precisely rather than '
      'generally. What does the precision buy?'],
     ['a.  "a year of deciding rather than a year of deferring" — what '
      'does the parallel do?',
      'b.  "It is worth doing if ..." — why "worth doing" rather than '
      '"you should do it"?']),
   ['Hi Anders, You should definitely take the placement, it is a great '
    'opportunity and you will get so much experience which employers really '
    'value these days. One year is nothing in the long run and you will '
    'never regret getting real work experience. I know a couple of people '
    'who found it a bit hard coming back but I think that is normal and you '
    'would be fine. Go for it, you will not regret it!', 'Dan'],
   [('P1', [['a.  Yes — and specifically. Suppressing the '
             'counter-evidence to make the advice cleaner is how advice '
             'becomes useless. Reporting what they regretted, which was the '
             'return rather than the placement, is more useful than either '
             'hiding it or letting it stand as a vague warning.'],
            ['b.  Because it hands your friend the criterion instead of the '
             'conclusion. They know things about their own position that you '
             'do not, and advice that states its own condition can be '
             'applied by someone with better information than you have.']]),
    ('P2', [['a.  Opportunity cost is what you give up by choosing one '
             'option — here, a year. Momentum is the accumulated '
             'working rhythm and cohort familiarity that make a final year '
             'easier, and losing it is the hidden cost.'],
            ['b.  "Worth doing" asserts that the benefit exceeds the cost, '
             'which invites the question of what the cost is. "A good idea" '
             'is an endorsement with no structure.']]),
    ('P3', [['Model: "I would take it, provided the placement is somewhere '
             'you would genuinely consider working — otherwise the '
             'harder final year buys you nothing."']]),
    ('F1', [['a.  Because the recommendation is conditional and the case '
             'against is the material from which the condition is built. The '
             'email is not arguing with itself; it is showing the reader how '
             'the judgement was reached, which is what lets them reach their '
             'own.'],
            ['b.  It converts a vague warning into a specific risk with a '
             'location. "Some people regret it" is unusable; "returning was '
             'harder than expected and the dissertation suffered" tells '
             'Anders exactly what to plan against, and is actionable rather '
             'than merely discouraging.']]),
    ('F2', [['a.  It sets two readings of the same year side by side in '
             'matched grammar, so the difference between them lands as a '
             'single distinction rather than as two claims. It is also the '
             'condition of the whole recommendation, compressed into six '
             'words.'],
            ['b.  Because "you should" issues an instruction, while "worth '
             'doing if" states a conditional judgement the reader can test '
             'against facts only they have. The gerund also keeps the '
             'sentence about the action rather than about the person.']]),
    ('F3', [['1.  No real cost is named. "A bit hard coming back" is '
             'mentioned and immediately dismissed as normal, so the second '
             'bullet fails and the one piece of evidence the writer has is '
             'wasted.'],
            ['2.  The advice is unconditional and forecloses the decision: '
             '"definitely", "you will never regret", "you would be fine", '
             '"Go for it". The third bullet is not addressed at all.'],
            ['3.  "One year is nothing in the long run" is exactly the '
             'reassurance that turns out to be false for the people who '
             'regret it, and there are two comma splices.']])]),
]
