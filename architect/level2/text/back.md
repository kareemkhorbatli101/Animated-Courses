# Grammar reference

Every structure in this book, in unit order. The second column is the mistake it prevents, which is
the column worth reading twice.

## Starting Point · What an interface promises

| | |
|---|---|
| **Three promises** | what the fields are · what happens on failure · how long it will last |
| **The third is written in a date** | and it is the one teams never write |
| **The four questions** | the description or the service · what happens to a field you did not mention · safe, idempotent or neither · who is obliged, and by when |
| **The gap between the two sides** | one side knows what was meant; the other knows only what was written |

## Unit 1 · Present simple and present continuous

| | |
|---|---|
| **the service *returns* a list** | always true: the simple |
| **we *are adding* the operation** | this week, unfinished: the continuous |
| **the document *contains* nine paths** | a state verb takes no continuous |
| **the service answers / the description includes** | two phrases that cannot be confused, replacing *the API supports* |

## Unit 2 · Articles

| | |
|---|---|
| ***a* schema** on first mention, ***the* schema** after | the movement from *a* to *the* is how English marks what the reader has |
| **plural, no article, for a general rule** | *schemas do not forbid what they do not mention* |
| **uncountable, no article** | *validation proves shape, not meaning* |
| **nothing in a schema is implied** | the sentence that pays for this unit |

## Unit 3 · The present perfect

| | |
|---|---|
| **the change *has been applied*** | a past action with a result now |
| ***has been failing since* Tuesday** | a period reaching up to now |
| **we *sent* it at nine** | a named past time takes the past simple, always |
| **safe · idempotent · neither** | and a timeout tells you about the connection, not the server |

## Unit 4 · Modals of possibility

| | |
|---|---|
| **a cache *may* store it** | permission |
| **the copy *may* be an hour old** | a real possibility |
| ***must not* ≠ *may not* ≠ *might not*** | prohibition · refusal of permission · a possibility that something is not so |
| **silence permits a heuristic lifetime** | *we do not cache this* answers a different question |

## Unit 5 · Relative clauses

| | |
|---|---|
| **the part *that* is never sent** | defining: no commas, narrows the group |
| **the fragment, *which* is never sent,** | non-defining: commas, adds a fact |
| **never *that* in a non-defining clause** | and never commas around a defining one |
| **five parts, and one never arrives** | scheme · authority · path · query · fragment |

## Unit 6 · Reported speech

| | |
|---|---|
| **the specification *requires* producers *to*…** | a report names the obliged party; a quotation does not |
| ***say that*, *tell somebody that*** | never *say somebody* |
| **tense back one step** | *they said they were sending it* — reporting, not endorsing |
| **source + id, unique together** | and *at least once* means duplicates are normal |

## Unit 7 · The first conditional

| | |
|---|---|
| ***if* you *add* a field without a default, old records *will* fail** | present in the *if* half, never *will* |
| **zero for a rule, first for a prediction** | and *may* when you are less sure than *will* |
| ***unless* = *if not*** | and never with a second negative |
| **a default is a statement about absence** | zero, false, or genuinely unknown |

## Unit 8 · Future forms

| | |
|---|---|
| **we *are retiring* it on 30 June** | a dated arrangement: the continuous |
| **we *are going to* retire it** | a decision |
| **four integrations *will* break** | a prediction |
| **the new path *opens* on 1 April** | a published timetable: the present simple |

## Unit 9 · Gerunds and infinitives

| | |
|---|---|
| **avoid *accepting*** | habits and reactions take *-ing* |
| **decided *to reject*** | decisions and attempts take *to* |
| **without *verifying*** | after a preposition, always *-ing* |
| **we check the audience *to stop* reuse** | the infinitive of purpose — the most useful form in a review |

## Unit 10 · Compound nouns

| | |
|---|---|
| **the media type registration procedure** | the head noun is last; read it backwards |
| **two media type*s*** | only the last noun takes the plural |
| **a two-day review** | the describing noun stays singular |
| **register · registration · registered · registrant** | learn a word family in fours |

## Unit 11 · Linking words

| | |
|---|---|
| ***However*,** at the front of a new sentence | with a comma; *but* lives inside one sentence |
| ***Therefore*,** for a consequence | and *so* inside a sentence |
| ***Although*** with no *but* after it | the error that comes from pairing languages |
| **route on the type; read the detail** | and the detail is free to be rewritten |

## Unit 12 · Review

| | |
|---|---|
| **the wire format changed; the meaning did not** | which is why documentation survived two new versions |
| **field names in lower case** | the one line of two protocol documents that costs an afternoon |
| **which document does this change?** | meaning in the interface document, arrangements in operations |
| **the second list is the longer one** | what you do not promise is what builds trust |

# Audio index

195 tracks, numbered `KS2-unit-track`. Three in the Starting Point and sixteen in each of the twelve
units, always in the same positions.

| Position | What the track is | Printed? |
|---|---|---|
| 01 | Gist listening, Lesson 1 scene | No |
| 02 | Listen and repeat, vocabulary set 1 | Yes |
| 03 | Model exchange, Lesson 1 | Yes |
| 04 | Listen and check, vocabulary set 2 | Yes |
| 05 | The reading text, read aloud | Yes |
| 06 | Grammar context dialogue | Yes |
| 07 | Grammar: listen and repeat | Yes |
| 08 | Lesson 4 gist listening with note completion | No |
| 09 | Clear English model | Yes |
| 10 | Clear English discrimination, eight items | No |
| 11 | Focused listening, three extracts | No |
| 12 | The model dialogue | Yes |
| 13 | Mini-chart, listen and repeat | Yes |
| 14 | Lesson 5 follow-up listening | No |
| 15 | Second speaker, detail selection | No |
| 16 | *Think It Through* case | Yes |

Three features of the recording at this level. The Lesson 4 dialogues run at the speed of a real
review, with one speaker interrupting and the other finishing the sentence anyway. The eight-item
discrimination tracks give each value once, so the learner has to hold it. And two speakers in this
book — Yara Haddad and Anders Lind — are customers rather than colleagues, recorded with the
slightly more formal register that a supplier hears.

# The British layer

This book is written in American English, and the series carries a switchable British layer: a fixed
list of words is respelled at build time. The list lives with the series rather than in this book.

What the layer does not touch:

1. **A quoted specification keeps its own spelling.** Every document quoted in this book is quoted
   as published. Correcting a published document inside a quotation is an alteration.
2. **A field name, a keyword and an identifier are never respelled.** `no-store`, `max-age`,
   `application/problem+json`, `source`, `id`, `exp` and `aud` are the same in both variants, and
   field names stay in lower case for the reason Unit 12 gives.
3. **A document number keeps its published form.** RFC 3986, RFC 9111, RFC 9457, BCP 13 and BCP 14
   are citations, not words.
4. **A media type is never reformatted.** A prefix, a subtype and a suffix are a name, and a name is
   compared without regard to case but never rewritten.
5. **The two tables of a contract keep their order.** What we promise, then what we do not. Reversed,
   the page reads as marketing.

# Word list

Twelve units, sixteen core items each, plus the words glossed in each reading text — 192 items. The
full alphabetical list, with phonemic transcription, is in the Teacher's Book.

| Unit | Core vocabulary |
|---|---|
| **1** | a description · a document · a path · an operation · a method · a field · a type · a response · an example · a server · a component · to reference · to reuse · to generate · a version · valid |
| **2** | a schema · a property · a type · to validate · validation · valid · invalid · required · optional · an extra field · an assertion · an annotation · a dialect · a reference · a draft · strict |
| **3** | to replace · to update · a change · an instruction · a patch document · safe · idempotent · a retry · to retry · a version marker · a conditional request · atomic · partial · a conflict · a format · to apply |
| **4** | a cache · to cache · to store · to reuse · fresh · stale · an age · a lifetime · a directive · a shared cache · a private cache · to revalidate · a validator · heuristic · an intermediary · a policy |
| **5** | an address · a scheme · an authority · a host · a port · a path · a segment · a query · a fragment · reserved · unreserved · to encode · to normalize · to compare · case-insensitive · a false positive |
| **6** | an event · an envelope · a producer · a consumer · an attribute · a source · a type · an identifier · a timestamp · a duplicate · to deduplicate · delivery · order · a binding · at-least-once · a subject |
| **7** | a writer · a reader · a record · a default value · an alias · to resolve · resolution · to promote · missing · present · an error · to ignore · compatible · a backfill · history · a boundary |
| **8** | to announce · an announcement · a notice period · to deprecate · to withdraw · to retire · to migrate · a migration · a replacement · to expect · an expectation · to oblige · informational · a signal · a link relation · unresponsive |
| **9** | a token · a claim · an issuer · a subject · an audience · an expiry · a signature · to sign · to verify · to decode · to expire · skew · optional · registered · a principal · a numeric date |
| **10** | a media type · a subtype · a label · a registry · to register · a registration · registered · unregistered · a suffix · a parameter · a tree · a prefix · a procedure · a template · conformant · to parse |
| **11** | a problem type · an occurrence · a title · a detail · a status · an identifier · an extension · a taxonomy · to identify · to explain · to route · to dereference · human-readable · machine-readable · advisory · prose |
| **12** | a protocol · a version · semantics · a wire format · a frame · a stream · to multiplex · a connection · compression · a field name · lower case · malformed · a transport · to negotiate · unchanged · deployment |

# Sources

Twelve source bodies carry the twelve reading texts, one per unit, and the Starting Point carries
none. Every one is a published specification, named with its number or version and its date, and
every reading text prints what the document says it does **not** do. No source appears in any other
book of this series or in its three sister series, and no figure is used twice. The series note is
in `SOURCES.md`.

| Unit | Source | What the text prints |
|---|---|---|
| 1 | **The OpenAPI Specification, version 3.1.0**, released **February 2021** | The top-level fields of a description document, including **optional paths** and the **webhooks** field; the **alignment of its schema rules with the 2020-12 schema specification**; and the field declaring a schema dialect. **A valid document can describe an interface that has never existed.** *Not covered: implementing, testing, enforcing, versioning or generating anything.* |
| 2 | **JSON Schema: A Media Type for Describing JSON Documents**, the **2020-12** draft of **December 2020**, with its validation companion | **Assertion** and **annotation** keywords; the rule that **properties a schema does not describe are unconstrained and therefore permitted**; the **independence of required from properties**; and **format as an annotation by default**, with assertion behavior in a separate vocabulary. **It is an expired Internet draft, not a standard.** *Not covered: whether the data is correct, what the sender meant, or anything about fields you did not mention.* |
| 3 | **RFC 5789**, *PATCH Method for HTTP*, **March 2010** | The method is **neither safe nor idempotent**; the set of changes **must be applied atomically**; a request **can be made idempotent** with a **conditional request**; and the response header announcing accepted patch formats. *Not covered: any patch document format at all — the specification defines none.* |
| 4 | **RFC 9111**, *HTTP Caching*, **June 2022**, replacing the 2014 specification | **Freshness lifetime** and **age**; **max-age**, **no-store**, **no-cache** and **private**; and the permission for a cache to **assign a heuristic expiration time when no explicit expiration is present**. **no-store forbids keeping; no-cache forbids reuse without checking.** *Not covered: which lifetime your service should choose, and any way to clear a cache you do not own.* |
| 5 | **RFC 3986**, *Uniform Resource Identifier (URI): Generic Syntax*, **January 2005** | The **five components**; **scheme and host compared without regard to case**; the **fragment separated before dereference**, so it never reaches the server; **unreserved and reserved characters** and **percent-encoding**; and the **ladder of comparison methods**, with the stated preference for **false negatives over false positives**. *Not covered: what an address means, and whether two addresses identify one thing.* |
| 6 | **The CloudEvents specification, version 1.0.2**, published by its working group under the **Cloud Native Computing Foundation** | **Four required attributes** and four optional ones; and the requirement that a producer make **source and id unique together for each distinct event**, with the consequence that a consumer **may treat a repeated pair as a duplicate**. *Not covered: the transport, delivery, ordering, the data format, type meanings and authorization — bindings and formats are separate documents.* |
| 7 | **The Apache Avro specification**, *Schema Resolution*, as published with the project's releases | The **writer's** and **reader's** schemas; a field only the writer has is **ignored**; a reader's field the writer did not write takes the reader's **default**, and **where there is no default an error is signalled**; enumerated-symbol resolution; **field aliases**; and the permitted **widenings**. *Not covered: whether your change is safe for your users, schema versioning, and compatibility checking.* |
| 8 | **RFC 8594**, *The Sunset HTTP Response Header Field*, **May 2019**, an **Informational** document | A header carrying a **date at which the resource is expected to become unresponsive**, and a registered **link relation** to further information. **The absence of the header carries no information.** *Not covered: any obligation at all, what happens afterwards, the reason, a migration, or any notice period.* |
| 9 | **RFC 7519**, *JSON Web Token*, **May 2015** | **Seven registered claim names**, and the statement that use of **each is optional**; the requirement **not to accept a token on or after its expiration time**, with a **small** allowance for clock skew; the requirement that a party processing a token **identify itself in the audience claim or reject the token**; and **numeric dates in seconds** since 1970 in universal time. *Not covered: what a claim entitles anybody to do, the signature and algorithms (separate documents), and any secrecy — the claims are **encoded, not encrypted**.* |
| 10 | **RFC 6838**, *Media Type Specifications and Registration Procedures*, **January 2013**, a **Best Current Practice** | Type, subtype and parameters, compared **without regard to case**; the **standards**, **vendor**, **personal** and **unregistered** trees with their prefixes; **structured syntax suffixes** and their own registry; and the registration **template and review procedure**. *Not covered: whether the content is valid, whether an implementation conforms, what the fields mean, and format versioning.* |
| 11 | **RFC 9457**, *Problem Details for HTTP APIs*, **July 2023**, replacing RFC 7807 of March 2016 | The **type**, **title**, **status**, **detail** and **instance** members and their audiences; the guidance that **consumers should not parse the detail**; the **type as an identifier that need not be dereferenced**; the **advisory** status member; extension members; and the **registry for problem types**. *Not covered: your error taxonomy, which status code to use, how many problems to report, and any wording.* |
| 12 | **RFC 9113**, *HTTP/2*, and **RFC 9114**, *HTTP/3*, both **June 2022** | **Binary framing**, **stream multiplexing**, **field compression**, the **transport change** in the newer version, and the requirement that **field names be lower case**, a message with an upper-case name being **malformed**. **Both documents define message expression only.** *Not covered: the semantics of methods, status codes, header fields, caching and content — all defined elsewhere.* |

**Twelve honesty notes, printed in the units as well as here.**

- **Unit 1.** A reader cannot check your documentation against anything except your documentation.
  Everything a stranger trusts about you, they trust because you published it.
- **Unit 2.** *We validate* is true and much narrower than it sounds. The defaults made the decision,
  and defaults are written by people who are not in the room.
- **Unit 3.** Three teams each did the reasonable thing — a sensible library default, a correct
  retry, an interface that never said a version marker was needed — and a customer's credit limit was
  wrong for six days.
- **Unit 4.** *We do not cache that* answers what your service does. The question was what your
  response permits, and the two have different owners.
- **Unit 5.** Almost everybody learns this syntax from examples, and examples teach you what works
  rather than what is true. One sentence published in 2005 defeated a careful engineer for a year.
- **Unit 6.** *At least once* is a precise promise read optimistically everywhere. It says duplicates
  are normal and that handling them is the reader's job.
- **Unit 7.** The team that makes the change and the team that suffers from it are rarely the same
  team, and the gap is measured in weeks. A test that reads yesterday is the only mechanism that
  closes it.
- **Unit 8.** A process written to be completed is satisfied by sending something rather than by
  anybody receiving it. Silence counted as consent for five weeks.
- **Unit 9.** The checks that break your laptop on the first day get written. The checks that only
  fail in production do not, and the audience check is the clearest example in this book.
- **Unit 10.** Nobody chose badly: each company chose the best word, which is how collisions happen
  in a shared space. The prefix exists so that the best word is available to everybody at once.
- **Unit 11.** Give a client only prose and your sentences become part of your interface — and then
  you cannot improve your own product. The cheapest field on the page was the one support thanked
  them for.
- **Unit 12.** Two protocol versions deliberately changed nothing about meaning. That restraint is
  why the world's interface documentation survived both, and the same discipline is available inside
  one company.

# Closing

You began this book able to describe an interface. You end it able to say what it does **not**
promise: that a description proves nothing about a running service; that a schema permits what it
does not mention; that a method applied twice happens twice; that silence lets a stranger choose a
lifetime; that one part of an address never arrives; that an envelope guarantees no delivery and no
order; that a field without a default breaks history; that a date in a header obliges nobody; that
seven claims are all optional; that a name guarantees nothing; that an error's wording is not an
interface unless you made it one; and that a new protocol version changes the wire and not the
meaning.

Twelve specifications, and one habit: read the document, find the sentence about the default, and
write down which half of the promise is yours.

Four sentences to take with you.

From Unit 1: **is that the description or the service?**

From Unit 2: **what happens to a field you did not mention?**

From Unit 3: **is that safe, or idempotent, or neither?**

From Unit 8: **who is obliged by this, and by when?**

And from Unit 12, which is where this book ends: **the expensive failures come from promises nobody
wrote down, and the cheap wins come from information you already have and were not sending — so
write the second list, the one that says what you do not promise, because that is the page people
trust.**

Quality, measurement and the arithmetic of a system that has to stay up, in Book 3.
