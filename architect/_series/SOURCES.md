# Keystone · sources

**English for AI-Enabled Software Architects · International Edition.** Six books, seventy-two
units, seventy-two separate source bodies. Nothing in this series reuses a figure or a source from
Wayfinder English, from the Clearline business series or from Foreign Service English.

## The rule this series is built on

Every reading text in every book quotes something real: a published standard, a recommendation, a
specification, a registry, a framework, a regulation. Three rules apply without exception.

1. **The text names its document, its edition or its date, and its publisher.** Not "the standard
   says" but "ISO 8601-1:2019, which replaced the 2004 edition". An edition is part of a citation,
   and a learner who cannot name one has not finished the sentence.
2. **The text prints what the document does not cover.** This is the harder half, and in this
   series it is the point. A standard that gives a code list gives no exchange rates. A
   recommendation that limits a number's length says nothing about which numbers are mobile. A
   framework that describes how to describe an architecture makes no judgment about whether the
   architecture is any good. Every reading text ends with that line, and every unit's honesty note
   repeats it.
3. **Every person, team, company, customer, system and incident is invented.** Meridian, the
   platform company in these books, does not exist. Neither do its staff, its services, its
   outages or its customers — Northwind Rail, Alba Health, Cobalt Freight, Verano Retail, Tarn
   Energy. Where a unit needs a failure, that failure is written from the shape of the standard
   being taught and not from any real incident at any real company.

**The series is vendor-neutral.** The sources are the published work of standards bodies and
open specification communities — ISO, IEC, IEEE, the ITU, the IETF, the W3C, IANA, the Unicode
Consortium, OASIS, NIST, OWASP and the Linux Foundation specification projects, together with
public regulations and openly published specifications such as Semantic Versioning, OpenAPI and
JSON Schema. No product, platform, cloud provider or model vendor is named anywhere in the six
books, and no learner finishes a unit knowing more about one company's tooling than about the
document underneath it.

**This is an independent teaching draft.** It is not published or endorsed by any standards body
and carries no official status. Where a document is quoted, it is quoted as published; where a
figure or a count is given, it carries the edition or the date of the page it came from.

---

# Keystone Foundation (Book 1) · A2

Twelve units, twelve source bodies. At this level the sources are deliberately **the agreements
underneath every interface**: how a date is written, what a time zone is, what a character is, how
a number behaves, what a currency code carries, how long a telephone number may be, who assigns a
country code, what the first digit of a status code means, what a version number promises, what
MUST means, how a language is identified, and who an architecture document is for.

Each one is a document an architect will quote in a meeting within a month of learning it. Each one
also hands the learner a sentence of the form *and that document does not cover …*, which is the
sentence this whole series is built to teach.

| Unit | Source | What the text prints |
|---|---|---|
| 1 | **ISO 8601-1:2019** and **ISO 8601-2:2019**, *Date and time — Representations for information interchange*, with **RFC 3339** | The **2019** two-part edition **replaced the 2004 edition**. Calendar, **ordinal** and **week** dates; **week 01 is the week containing 4 January**; the week **starts on Monday**; so **1 January 2027 falls in week 2026-W53** and the week-based year is not the calendar year. **RFC 3339 is a profile**, not the standard. *Not covered: which form you should choose.* |
| 2 | **The IANA Time Zone Database**, released as dated versions such as **2024a** and **2025b**; the **2022 resolution of the General Conference on Weights and Measures** | An **offset** is a number of hours and minutes; a **zone name** is a set of rules **that changes**. The database is **updated several times a year**, so a future local time has **a version as well as a value**. The **last leap second was added on 31 December 2016**, and the 2022 resolution provides for **ending the practice by 2035**. *Not covered: the decisions of governments, which the database only records.* |
| 3 | **The Unicode Standard**, version **15.1** (**September 2023**) and version **16.0** (**September 2024**) | **149,813** characters in 15.1 and **154,998** in 16.0 — the number **grows with each version**. The code space **U+0000 to U+10FFFF** is **1,114,112** positions. **UTF-8 uses one to four bytes** per code point. A byte is not a code point, and a code point is not what a reader calls a character. *Not covered: what length your field should be.* |
| 4 | **IEEE 754-2019**, *IEEE Standard for Floating-Point Arithmetic* | **2019** follows **2008**, which follows **1985**. **binary32**: 24 bits, about **6 to 9** decimal digits. **binary64**: 53 bits, about **15 to 17**. **`0.1 + 0.2` is not equal to `0.3`**. Two zeros, two infinities, and **NaN, which is not equal to itself**. *Not covered: that most languages give you binary floating point by default, although the standard also defines decimal formats.* |
| 5 | **ISO 4217**, *Codes for the representation of currencies*, **2015** edition, with the code list **maintained and published by its maintenance agency** | An **alpha** code of three letters, a **numeric** code of three digits, and the **minor digits** — **2** for most currencies, **0** for some, **3** for a few. So `1250` is three different amounts in EUR, JPY and KWD, one of them a thousand times another. Codes are **added and withdrawn**, so a system needs a **current** and a **historical** list. *Not covered: exchange rates and national cash-rounding practice.* |
| 6 | **ITU-T Recommendation E.164**, *The international public telecommunication numbering plan*, **November 2010** version | **At most fifteen digits**, country code included. A country code of **one to three digits**. **The plus sign is not a digit**: it stands for the international prefix, which differs by country. A number can begin with a zero, so the field is **text**. *Not covered: written presentation (that is E.123), extensions, whether a number is mobile, and national short codes.* |
| 7 | **ISO 3166-1**, *Codes for the representation of names of countries and their subdivisions — Part 1: Country codes*, **2020** edition, maintained by the **ISO 3166 Maintenance Agency** | **alpha-2**, **alpha-3** and **numeric** forms. Codes are **assigned**, **withdrawn** and then **reserved**; **UK** and **EU** are **exceptionally reserved**, and the code for the United Kingdom is **GB**. Subdivisions are **Part 2**; formerly used codes are **Part 3**. *Not covered: language, currency, tax rule, address format — and the standard decides nothing about what a country is.* |
| 8 | **RFC 9110**, *HTTP Semantics*, **June 2022** | It **replaced the 2014 specifications**, which replaced one from **1999**; **the five classes have not changed**. **1** informational, **2** successful, **3** redirection, **4** **client** error, **5** **server** error. A client **must understand the class** and **may treat an unrecognized code as the first code of that class**. The registry is **maintained by IANA**: codes **open**, classes **closed**. **401 means unauthenticated.** *Not covered: your error body format and your retry policy.* |
| 9 | **Semantic Versioning 2.0.0** | **MAJOR.MINOR.PATCH**: **incompatible**, **compatible addition**, **compatible fix**, with lower parts **reset to zero**. **0.y.z means the public interface is not to be considered stable and anything may change** — so 0.9.4 promises **nothing**. A **pre-release** has **lower precedence**; build information is **ignored**. The public interface **must be declared**. *Not covered: enforcement. The specification enforces nothing; the promise is kept by people.* |
| 10 | **RFC 2119**, **March 1997**, with **RFC 8174**, **May 2017** — together **BCP 14** | **MUST / REQUIRED / SHALL**, **MUST NOT**, **SHOULD / RECOMMENDED**, **SHOULD NOT**, **MAY / OPTIONAL**. **SHOULD** permits departure **where the full implications are understood and carefully weighed**. An **optional** item carries an **interoperation** obligation **on both sides**. The keywords are to be used **with care and sparingly**, **only where required for interoperation or to limit harmful behavior**. After 2017, **only the capitalized forms carry the meaning**. *Not covered: standards status, conformance testing, and which level your item should be.* |
| 11 | **BCP 47** — **RFC 5646**, **September 2009**, and **RFC 4647** — with the **IANA Language Subtag Registry** | Subtags in order: **language**, **script** (four letters), **region** (two letters or three digits). Conventional capitalization is a **convention**: tags are **compared without regard to case**. A longer tag is **more specific, not more correct**, and matching **removes subtags**: *en-GB* falls back to *en*. A browser sends **an ordered list of preferences**, and **their order decides**. *Not covered: currency, date format, translations — and the region subtag does not say where the reader is.* |
| 12 | **ISO/IEC/IEEE 42010:2022**, *Software, systems and enterprise — Architecture description*, **second edition** | It **replaced the 2011 edition**, which grew out of a document from **2000**. **Stakeholder**, **concern**, **architecture viewpoint**, **architecture view**. A description **identifies the stakeholders and their concerns**, and **each concern is framed by at least one viewpoint**. It provides for **decisions recorded with their rationale** and for **correspondences** between views. *Not covered: a viewpoint set, a notation, a tool, a template, a process — and whether your architecture is any good.* |

**Twelve honesty notes, printed in the units as well as here.**

- **Unit 1.** The format that exists to remove ambiguity has three ways to write one day, and the
  week-based year disagrees with the calendar year for a few days most years.
- **Unit 2.** The rules that convert a local time to an instant are a file that changes several
  times a year. A meeting booked for next November has an answer that is not yet known.
- **Unit 3.** The number of characters is not a fixed quantity: it grows with every version. A field
  length of twenty means nothing until somebody says twenty **of what**, and the three candidate
  answers differ by a factor of four.
- **Unit 4.** Arithmetic that a standard describes exactly still gives an answer that looks wrong to
  everyone who has not read it. Money is hard not because of the arithmetic but because the default
  type is the wrong one.
- **Unit 5.** The number of decimal places is a property of the currency, and the assumption that it
  is two is almost never written down as a decision. It arrives with the first currency a company
  supports and ends up in a template, a spreadsheet and a test fixture, with no author.
- **Unit 6.** The one rule the recommendation gives about length is an **upper limit**. Nearly every
  failure in this area comes from a team replacing it with an exact length taken from the numbers
  they could see, in one country, on one afternoon.
- **Unit 7.** The most political file in a product is usually written in twenty minutes from memory.
  The standard protects you only if you take the list from the published source, keep the date of
  your copy, and can say both of those in one sentence to a customer who is upset.
- **Unit 8.** The protocol was designed so that a client written years ago keeps working when new
  codes appear — and a client written against a list of eleven codes throws that away. The design
  is sound; the failure is ours, every time.
- **Unit 9.** Nothing enforces a version number. The one pressure that reliably breaks the promise
  is a meeting in which a major version is said to look alarming.
- **Unit 10.** The strong word works because it is rare, and nothing stops an author from using it
  everywhere. A conformance section with thirty-one requirements has no requirements, because the
  reader cannot find the three that matter.
- **Unit 11.** Choosing a reader's language from their location fails for a minority everywhere and
  a majority nowhere, so it never appears in anybody's numbers. The better answer arrives with
  every request, unused.
- **Unit 12.** The standard is about the description and not the architecture. A clear description
  of a poor design is a clear description — and that is still worth having, because it lets
  somebody see what is wrong.

**Book 1 as built.** Starting Point and twelve units; 196 figures; 195 audio cues numbered `KS1-…`;
**267 pages**; `Keystone-Foundation-Book1.docx`.

---

# Keystone 1 (Book 2) · A2+ → B1

Twelve units, twelve source bodies. At this level the sources are **the promise between two
systems**: a description format, a validation vocabulary, a method that is neither safe nor
idempotent, a caching specification, the syntax of an address, an event envelope, a schema
resolution rule, a header that announces a shutdown, a token's seven optional claims, a naming
procedure, an error format, and two wire protocols that mean exactly the same thing.

The twelve traps are all one trap: somebody read a specification as a promise it never made. Every
reading text ends with the line the publisher wrote about its own limits.

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

**Book 2 as built.** Starting Point and twelve units; 196 figures; 195 audio cues numbered `KS2-…`;
**278 pages**; `Keystone-1-Book2.docx`.

---

# Keystone 2 (Book 3) · B1

Twelve units, twelve source bodies — and this is the book where the balance shifts: **six standards
and six papers or published research programs**. The sources are **the words and the numbers people
use to argue about whether a system is any good**, and half of them are not standards at all: a
queueing identity from 1961, a conference paper from 1967 and its answer from 1988, a theorem from
2002 and a trade-off added in 2012, a survey-based research program, and a method published as a
technical report in 2000.

Every number in this book has a denominator, and most of the arguments are about it: three nines of
what, over what period, measured where; a defect count per what; a severity score assuming which
exposure; a survey's top quartile defined by whose distribution, in which year.

| Unit | Source | What the text prints |
|---|---|---|
| 1 | **ISO/IEC 25010:2023**, *SQuaRE — Product quality model*, **second edition**, November 2023 | **Nine characteristics** and their sub-characteristics; the renaming of **usability** as **interaction capability** and of **portability** as **flexibility**; the addition of **safety**; and the positions of **availability** (under reliability) and **scalability** (under flexibility). *Not covered: measures, targets, thresholds, priorities — and quality in use, which is a separate model.* |
| 2 | **ITU-T Recommendation E.800**, *Definitions of terms related to quality of service*, **September 2008** version | The definitions of **availability** (at a given instant, or within a given time interval) and **reliability** (for a given time interval, under given conditions), and the clause that availability **assumes external resources are provided**. With the arithmetic: three nines is about **8¾ hours a year**, **43 minutes a month**, **10 minutes a week**. *Not covered: any target, any measuring point, and what counts as an outage for your service.* |
| 3 | **John D. C. Little**, *A Proof for the Queuing Formula: L = λW*, **Operations Research**, **1961** | The identity relating the long-run average **number in a stationary system**, the **arrival rate** and the **time in system**, with **no assumption** about arrival or service distributions or service discipline. Worked both ways: 30 ÷ 200 is a **latency measured without timing anything**. *Not covered: percentiles, variance, why W is what it is — and it does not apply at all past capacity, where no steady state exists.* |
| 4 | **Gene M. Amdahl**, AFIPS conference proceedings, **1967**; **John L. Gustafson**, *Reevaluating Amdahl's Law*, **Communications of the ACM**, **1988** | The **ceiling** imposed by the sequential fraction of a **fixed-size** problem: one twentieth sequential gives **twenty times**, and sixteen workers give **about nine**. And the later observation that in practice the **problem grows with the machine**, giving near-linear **scaled speed-up**. *Not covered by either: coordination overhead, cost, and where the sequential part is.* |
| 5 | The **2000** conjecture; **Gilbert and Lynch**, *Brewer's conjecture…*, **ACM SIGACT News**, **2002**; **Abadi**, *Consistency Tradeoffs…*, **IEEE Computer**, **2012** | The formal definitions — **linearizable** consistency, **availability as a response to every request at a non-failing node**, **partition tolerance** as the loss of arbitrarily many messages — and the impossibility result. **A partition is an event, not a choice.** Plus the **latency-against-consistency** trade-off that applies on every normal request. *Not covered: which choice is right, any quantity, and conflict resolution.* |
| 6 | **Forsgren, Humble and Kim**, *Accelerate*, **2018**, and the annual **State of DevOps** reports from **2014** onwards | The **four delivery measures** — deployment frequency, lead time, change failure rate, time to restore — and the finding that **speed and stability are not opposed**; with performance groups derived by **cluster analysis of each year's survey responses**. *Not covered: causation. The data is **self-reported**, the respondents **self-selected**, the band boundaries **move between years**, and the measures describe a delivery system rather than any individual.* |
| 7 | **ISO/IEC 5055:2021**, *Automated source code quality measures* | Four measures — **reliability, security, performance efficiency, maintainability** — each a **count of occurrences** of a specified list of **weaknesses** drawn from a public enumeration, computed **automatically** from source code, and including weaknesses that **span several components**. *Not covered: functional correctness, design quality, anything not in source form, and the severity of any weakness in your deployment.* |
| 8 | **CVSS version 4.0**, published **November 2023**, succeeding version 3.1 of 2019 | The **base, threat, environmental and supplemental** metric groups; the 0.0–10.0 scale and the five bands; the statement that the **base score represents severity** and is to be supplemented; and the supplemental group's **informational status**, which **changes no number**. *Not covered: exposure, reachability, asset value, remediation capacity — and the score is **not a probability**.* |
| 9 | **ISO/IEC 27001:2022**, published **October 2022**, replacing the 2013 edition | **93 controls in four themes** — 37 organizational, 8 people, 14 physical, 34 technological — against **114 in fourteen clauses** before; and the requirement to produce a **statement of applicability** justifying **every inclusion and exclusion**, Annex A being a **reference set**. *Not covered: any product. Certification covers a **management system within a scope the organization defines**, permits justified exclusions, and guarantees no outcome.* |
| 10 | **WCAG 2.2**, **W3C Recommendation**, **5 October 2023** | Four principles — **perceivable, operable, understandable, robust** — thirteen guidelines, and success criteria at levels **A, AA, AAA**; **nine new criteria** in 2.2 and one removed; and the requirement that conformance be claimed for a **full page** and for **every page in a process**. *Not covered: every user need — the guidelines say so — and level AAA is **not recommended** as a general policy for entire sites.* |
| 11 | **ISO/IEC 25012:2008**, *SQuaRE — Data quality model* | **Fifteen characteristics** grouped as **inherent** (accuracy, completeness, consistency, credibility, currentness), **system-dependent** (availability, portability, recoverability) or **both**; and the distinction that decides **who can fix a problem**. *Not covered: thresholds, measures (a separate standard), priorities, and any improvement method.* |
| 12 | **Bass, Clements and Kazman**, *Software Architecture in Practice*; the **ATAM** technical report, **Software Engineering Institute**, **2000** | The **six-part scenario** — source, stimulus, environment, artifact, response, response measure — and an evaluation whose outputs are **risks, non-risks, sensitivity points and tradeoff points**, with scenarios ranked by **stakeholders** in a utility tree. *Not covered: a score, a pass or fail, and any prioritization on the architect's behalf.* |

**Twelve honesty notes, printed in the units as well as here.**

- **Unit 1.** Nine words instead of one make the argument possible; printing *owner unknown* beside a
  target is what makes it happen. One figure had kept an engineer on call for four years for a
  contract that no longer existed.
- **Unit 2.** The average was honest and told one customer nothing about their own year. An annual
  commitment permits nearly nine hours in one go, and almost nobody in the building knew that.
- **Unit 3.** Nobody was short of data; they were short of one multiplication and the confidence to
  do it in a meeting.
- **Unit 4.** A month was spent optimizing for *sooner* when the business needed *more*. The
  arithmetic was never the hard part; the question was.
- **Unit 5.** Both settings were right and unchosen, which is not the same as right. Nine minutes of
  partition got a review; eleven million reads a day got none.
- **Unit 6.** One number out of a set of four was requested, and exactly that was delivered. The
  failure rate was the line nobody asked for and the only one worth a meeting.
- **Unit 7.** Every published figure was correct and every sentence built on it was too broad. The
  scope was in the standard and not in the report, which is where it was needed.
- **Unit 8.** Sorting by score needs no evidence and no courage, and it put a nine in dead code ahead
  of a six on the front door.
- **Unit 9.** A yes-or-no question was asked and a yes was filed. The document answered a more useful
  question, in a line nobody read.
- **Unit 10.** The audit found it and the summary lost it, which is what summaries do to exceptions.
  Forty minutes of somebody completing the task with a keyboard would have found it before a customer
  did.
- **Unit 11.** Fifteen names fixed nothing by themselves. They separated four problems that had been
  one word, and three of them turned out to be small.
- **Unit 12.** The conflict was two years old and invisible because two requirements were never on one
  page. The method produced the argument; two people in a room produced the answer.

**Book 3 as built.** Starting Point and twelve units; 196 figures; 195 audio cues numbered `KS3-…`;
**277 pages**; `Keystone-2-Book3.docx`.


# Keystone 3 (Book 4) · B1+

Twelve units, twelve source bodies, and a third kind of document joins the shelf: **five standards,
four published papers or experience reports, and three published methods or models**. An architect
reads all three kinds in a working week and they do not carry the same authority, so this book makes
the difference explicit. A standard has an edition and a date. A paper has authors, a venue and a
year. A method has one author, an opinion and, usually, a sentence admitting it.

Every unit in this book ends in the same place: a page somebody will read when everybody who wrote it
has left. The language is for that reader.

Twelve source bodies carry the twelve reading texts, one per unit, and the Starting Point carries
none. **Five are standards, four are published papers or experience reports, and three are published
methods or models** — the mixture this book is built on, because an architect reads all three kinds in
a week and they do not carry the same authority. Each reading text names the document, its edition,
date or venue, and the limits its own authors state. No source appears in any other book of this
series or in its three sister series, and no figure is used twice. The series note is in `SOURCES.md`.

| Unit | Source | What the text prints |
|---|---|---|
| 1 | **Michael Nygard**, *Documenting Architecture Decisions*, a blog post of **November 2011** | The form: a **short record per decision**, with **title, status, context, decision, consequences**, and the rule that a record is **superseded rather than edited**. *Not covered: what to decide, how to decide, which decisions are worth a record, and any process for approving one. It is one engineer's proposal, published informally, and its authority is entirely that people found it useful.* |
| 2 | **Melvin E. Conway**, *How Do Committees Invent?*, ***Datamation***, **April 1968** | The observation that a design **mirrors the communication structure** of the organization that produced it, and the author's own framing of it as a consequence of **how the work is divided**. *Not covered: the organization chart, which is a drawing of one possible structure and not the structure. The paper offers no remedy, no measurement, and no claim that reorganizing produces a better design.* |
| 3 | **The Twelve-Factor App**, **Adam Wiggins**, first published **2011** | Three of the twelve factors read closely — **configuration in the environment**, **strict separation of build and run**, and **disposable processes** — in the method's own imperative voice. *Not covered: the method is **opinionated and dated by design**. It assumes a particular deployment model, says so, and three of its instructions are **assumptions rather than rules** once that model changes. A departure is not a defect.* |
| 4 | **The C4 model**, **Simon Brown**, published **from 2011 onwards** | Four levels — **context, container, component, code** — each a separate diagram for a separate audience; and the requirement that every diagram carry a **title, a key and a date**. The word **container** is flagged as overloaded and must be defined on the page. *Not covered: a notation. The model is deliberately notation-independent, prescribes no tool, and says nothing about which diagrams are worth keeping.* |
| 5 | **ISO/IEC/IEEE 29148:2018**, *Requirements engineering* | Nine characteristics of a well-formed requirement — including **unambiguous**, **singular**, **feasible**, **traceable** and, above all, **verifiable** — and characteristics of a requirement **set**, including **completeness** and **consistency**. *Not covered: how to elicit a requirement, how to prioritize, how to write a verification, and what to do about a need that is real and not yet verifiable.* |
| 6 | **The fallacies of distributed computing**, attributed to **L. Peter Deutsch** around **1994**, with later additions associated with **James Gosling**; circulated and extended by others since | Eight assumptions that fail — the network is reliable, latency is zero, bandwidth is infinite, the network is secure, the topology does not change, there is one administrator, transport cost is zero, the network is homogeneous. *Not covered: anything. **It is a list, not a theory**, its **attribution is uncertain**, it was never published as a paper, and the eighth item was added later by somebody else.* |
| 7 | **Hector Garcia-Molina** and **Kenneth Salem**, *Sagas*, **ACM SIGMOD**, **1987** | A long transaction as a **sequence of steps**, each with a **compensating transaction**; recovery by running compensations **backward** or completing **forward**. **Compensation is not rollback**: it is a new action, written by you, which can itself fail, and some steps have no compensation at all. *Not covered: steps that cannot be compensated — an email sent, money moved to a third party — beyond the advice to order them last; and the paper assumes compensations exist.* |
| 8 | **Michael J. Fischer**, **Nancy A. Lynch** and **Michael S. Paterson**, *Impossibility of Distributed Consensus with One Faulty Process*, ***Journal of the ACM***, **1985** | The result: in an **asynchronous** model with **one** faulty process, **no deterministic protocol** guarantees both **agreement** and **termination**. What is lost is **liveness**, not safety: **it stops; it does not lie**. *Not covered: practice. The model assumes **no bound on message delay**, which is stronger than most real networks, and the result says nothing about randomized protocols, failure detectors, or how long real systems actually take.* |
| 9 | **Ward Cunningham**, *The WyCash Portfolio Management System*, an experience report at **OOPSLA 1992**, and his **later public correction** | The original metaphor — shipping to learn, then **consolidating** what you learned — and the author's own statement decades later that he was **never in favor of writing code poorly**. **The metaphor has no principal, no rate, no schedule and no creditor**, and the four sentences that replace it: what we did, what we now know, what reshaping costs, who pays until then. *Not covered: any quantity. **There is no interest rate**, no way to compute a balance, and the metaphor was a way of explaining a decision to non-programmers rather than a measurement.* |
| 10 | **ISO/IEC/IEEE 15288**, *System life cycle processes*, in the edition of **2023**; the **2015** edition defined **thirty** processes | Four process groups — **agreement**, **organizational project-enabling**, **technical management**, **technical** — with examples from each; **tailoring** as an expectation; and conformance claimed against a **declared and tailored process set**, not against the whole. *Not covered: a life cycle model, an order of processes, any documents (it names **outcomes**), and how to perform any process — those are methods.* |
| 11 | **The Apache License, Version 2.0**, **January 2004**, **Section 4**; and short **license identifiers** from a published license list | The four conditions on redistribution: **a copy of the license** to recipients; **prominent notices on modified files**; **retention of copyright, patent, trademark and attribution notices** except those not pertaining to the derivative work; and **a readable copy of the attribution notices in any NOTICE file**. Plus what a short identifier is: **a label, not a license text, and not a determination** — some are deprecated in favor of clearer ones. *Not covered: what counts as distribution in any given arrangement. **Nothing in the unit is legal advice**, and the unit asks one question rather than answering it.* |
| 12 | **ISO/IEC/IEEE 42020**, *Architecture processes*, in the edition held, dated **2019** | Six architecture processes — **governance, management, conceptualization, evaluation, elaboration and enablement** — and the observation that **enablement** is the one most often absent, because it has no natural owner and its absence looks like several teams being slow. *Not covered: an order, a document set, or **how** to perform any process. Like its life cycle companion it expects **tailoring** and prescribes no method, and it will not tell you which process you are missing.* |

**Twelve honesty notes, printed in the units as well as here.**

- **Unit 1.** The record that mattered was the one nobody had written: a decision taken in a corridor,
  defended for four years by people who had each inherited it from somebody else.
- **Unit 2.** The four services were not a design. They were a reporting line, drawn in software, and
  the reorganization that would have changed them was the one decision nobody had the authority to
  propose.
- **Unit 3.** Three of the twelve instructions were assumptions, said so in the original text, and had
  been quoted as rules in two internal documents by people who had read neither.
- **Unit 4.** Four diagrams, one of them undated, and the undated one was the one everybody used.
  Three lines of heading would have made the other three usable.
- **Unit 5.** Eleven of nineteen requirements were unverifiable, and every one of them had been
  approved. The open-questions list was two lines long and had not existed at all.
- **Unit 6.** The assumption was not that the network was reliable. It was that somebody else had
  already thought about it, which is the ninth fallacy and the only one that is nobody's fault in
  particular.
- **Unit 7.** The step that could not be undone was an email, and it went out before the payment that
  justified it. Reordering two lines would have cost an afternoon.
- **Unit 8.** Four weeks were spent configuring a timeout to remove an uncertainty that a 1985 proof
  says cannot be removed. The proof was eight pages and nobody had read it.
- **Unit 9.** The metaphor won the argument and then was used, for two years, to justify exactly what
  its author had said he was never in favor of.
- **Unit 10.** Two whole processes were missing, and they were found by reading a list in an afternoon
  rather than by anything going wrong. Four teams kept their own copy of one customer list, and three
  of the copies disagreed.
- **Unit 11.** Forty-one components, eleven license files, and no file marked as changed. Nobody
  decided that, and three people had already asked the wrong question and waited three weeks for the
  reply.
- **Unit 12.** Five of six processes performed well. The missing one was the least rewarding, had no
  owner, and its absence looked like four teams being slow — which is what it was read as for a year.

**Book 4 as built.** Starting Point and twelve units; 196 figures; 195 audio cues numbered `KS4-…`; **283 pages**; `Keystone-3-Book4.docx`.


# Keystone 4 (Book 5) · B2

Twelve units, twelve source bodies, and the organizing idea is no longer the subject matter but the
**kind of authority** each document carries. Two voluntary documents that can require nothing. Two
legal instruments, one of which applies in stages on four separate dates. Five standards-body
documents of three different statuses — a certifiable management system standard, guidance that says
*should*, a technical report that is informative, and a technical specification that is not a full
standard. And three research proposals with no standing at all, two of which are used everywhere.

An architect who treats those four kinds as interchangeable promises the wrong things to the wrong
people. Every unit in this book begins by finding the sentence in which a document describes its own
status, and every unit ends with a page somebody else will be asked to defend in public.

Twelve source bodies carry the twelve reading texts, one per unit, and the Starting Point carries
none. They divide into **four kinds of authority**, which is the organizing idea of the book: **two
voluntary frameworks or profiles**, **two legal instruments**, **five International Standards or
standards-body documents of three different statuses**, and **three research proposals or papers**.
Each reading text names the document, its number or author, its date, and the limits its own authors
state. No source appears in any other book of this series or in its three sister series, and no
figure is used twice. The series note is in `SOURCES.md`.

| Unit | Source | What the text prints |
|---|---|---|
| 1 | **AI Risk Management Framework 1.0**, National Institute of Standards and Technology, released **January 2023**, with a companion **playbook** | Four core functions — **govern, map, measure, manage** — and the characteristics associated with trustworthiness, including **valid and reliable, safe, secure and resilient, accountable and transparent, explainable, privacy-enhanced, and fair with harmful bias managed**. *Not covered: it is **voluntary**, **non-sector-specific** and **use-case agnostic**; its authors state it is **not a checklist and not a compliance mechanism**; it creates **no obligation**, and it states that the characteristics involve **trade-offs** rather than being independently maximizable. The phrase "we comply with it" has no application.* |
| 2 | **Regulation (EU) 2024/1689** on artificial intelligence, published in the Official Journal **July 2024**, in force **1 August 2024** | The distinction between **entry into force** and **application**, and the four dates in the text: **2 February 2025** (general provisions and prohibited practices); **2 August 2025** (general-purpose AI models, governance, notifying authorities, most penalties); **2 August 2026** (the general body); **2 August 2027** (high-risk systems that are safety components of products covered by listed Union legislation). Plus the **provider / deployer** distinction. *Not covered: it does not classify any particular system — that follows from its annexes and other product legislation applied to your facts; it provides no technical specification, and **supporting harmonized standards were still being developed**. **Nothing in the unit is legal advice** and the position may change.* |
| 3 | **ISO/IEC 42001:2023**, *Artificial intelligence — Management system* | A **certifiable** management system standard, with the familiar clause structure: **context, leadership, planning, support, operation, performance evaluation, improvement**; annex **controls** whose applicability the organization determines. *Not covered: a certificate states that an accredited body examined the **management system** within a **scope the organization declared**. **No model is assessed, measured or certified**, and the certificate makes no statement about any model's accuracy, fairness or safety. Two organizations with very different models can hold it equally validly.* |
| 4 | **ISO/IEC 23894:2023**, *Artificial intelligence — Guidance on risk management* | The structure borrowed from general risk management — **principles, framework, process** — with the six-stage process from **establishing the context** through **identification, analysis, evaluation** and **treatment** to **monitoring and review**; and annexes of **objectives** and **AI-specific risk sources**. *Not covered: it is **guidance**. It uses **should**, **can** and **may**, not **shall**; **no certification exists against it**; it does not determine what level of risk is acceptable — the standard is explicit that this is the organization's own decision.* |
| 5 | **Model Cards for Model Reporting**, **Mitchell and colleagues**, ACM conference on fairness, accountability and transparency, **2019** | Nine proposed sections — model details, **intended use**, **out-of-scope use**, factors, metrics with **decision thresholds**, evaluation data, training data, **disaggregated** quantitative analyses, and ethical considerations and caveats. *Not covered: it is **a research proposal**. There is **no standard, no required format and no verification mechanism**; nobody checks a model card; and the **disaggregated reporting it recommends depends on group labels** that may be unavailable or unlawful to collect — a limitation the authors acknowledge and do not solve.* |
| 6 | **Datasheets for Datasets**, **Gebru and colleagues**, first circulated **2018**, published in **Communications of the ACM, 2021** | Seven groups of **questions**: motivation, composition, collection process, preprocessing and labeling, uses, distribution, maintenance — including **who funded it**, **how the data was acquired**, and **what it should not be used for**. *Not covered: a research proposal, not a standard; no required format and no verification. The authors note the questions should be **adapted**, and it **cannot recover information that was never recorded** — which is most of what an existing dataset needs from it.* |
| 7 | **ISO/IEC 22989:2022**, *Artificial intelligence — Concepts and terminology* | Definitions of the terms the field argues with — **AI system**, **model**, **autonomy**, **transparency**, **explainability**, **bias** as a systematic difference — and the stages of an **AI system life cycle**. *Not covered: it contains **no requirements** and nothing to conform to; it **prescribes no measurements**; and its definitions are **stipulative** — they hold for the purposes of documents that adopt them and **govern nobody's ordinary usage**, including a customer's.* |
| 8 | **ISO/IEC TR 24028:2020**, *Artificial intelligence — Overview of trustworthiness in artificial intelligence* | Approaches to establishing trust, including transparency, explainability and **controllability**; engineering **pitfalls**; and **threats** with their mitigations — adversarial inputs, **data poisoning**, **model stealing**, information leakage. *Not covered: **TR** means **technical report** — **informative**, with **no requirements and nothing to certify against**. It **does not rank the mitigations**, does not establish that any of them works, and is a **2020 snapshot** of a field that moves quickly.* |
| 9 | **Article 22 of Regulation (EU) 2016/679**, the general data protection regulation, applicable since **2018** | The right **not to be subject to a decision based solely on automated processing**, including profiling, **producing legal effects or similarly significantly affecting** the person; the three exceptions — **contractual necessity**, **authorization by law with safeguards**, **explicit consent**; and, for the first and third, **suitable measures including at least** the right to **human intervention**, to **express a point of view**, and to **contest the decision**. *Not covered: whether any given processing is **solely** automated, or whether an effect is **similarly significant**, is a legal determination on the facts. **Nothing in the unit is legal advice**, and a reply is not an intervention.* |
| 10 | **ISO/IEC 25059:2023**, *SQuaRE — Quality model for AI systems* | An **extension** of the SQuaRE product quality model with AI-specific characteristics: **functional adaptability**, **robustness**, **user controllability**, **intervenability** and **transparency**. *Not covered: like the model it extends, it supplies **vocabulary only** — **no measures, no targets, no thresholds**, and **no guidance on which characteristics should be prioritized** for any system. The priority order is a judgment the organization makes and should record.* |
| 11 | **ISO/IEC TS 4213:2022**, *Artificial intelligence — Assessment of machine learning classification performance* | What must travel with a figure: the **dataset** and its **period**, the **split**, the **threshold**, the **metric** and the fact that it was chosen, the **breakdown**, and the **baseline**. With the worked case: **98.1 per cent accuracy against a majority-class baseline of 98.5 per cent**, and the honest sentence — **recall 41 per cent at a threshold of 0.5 on 4,200 held-out cases**. *Not covered: a **technical specification**, not a full International Standard, and subject to review. It does **not choose the metric**, sets **no acceptable level**, and addresses **classification only** — not regression, ranking or generation.* |
| 12 | **NIST AI 600-1**, *Generative Artificial Intelligence Profile*, released **July 2024** as a companion to the framework in Unit 1 | Twelve risks **novel to or exacerbated by** generative systems, including **confabulation**, **information integrity**, **data privacy**, **environmental impacts**, **harmful bias and homogenization**, **human-AI configuration**, **intellectual property**, and **value chain and component integration**, with **suggested actions** aligned to the framework's functions. *Not covered: **voluntary**; its actions are **suggested, not required**; it states that its list is **not exhaustive**; and it **does not prioritize** any risk for any organization.* |

**Twelve honesty notes, printed in the units as well as here.**

- **Unit 1.** Two customer answers said *yes* to a question that cannot be answered, and one of those
  customers now has a slide claiming its suppliers are framework-compliant. The sentence on the slide
  came from an email written in under a minute.
- **Unit 2.** One sentence — *in force, so we are non-compliant* — produced four months of
  remediation for obligations eighteen months away, while the one-week classification task that
  decides which obligations ever apply stayed undone.
- **Unit 3.** Two requirements had sat approved in a handbook for a year. Nobody refused them; a
  passive sentence can be approved by a room in which nobody thinks it is about them.
- **Unit 4.** Four rules said *shall*; one was checked. Rewriting three of them as recommendations
  with a route for reporting a departure produced four departures in a month, where the previous
  wording had produced none.
- **Unit 5.** A model evaluated on one region and one freight type was used in weekly staffing
  decisions for four months, by a team that had read the first two sections of a page that said only
  what the model does.
- **Unit 6.** Three weeks and four interviews on one dataset produced forty-one answers and nine that
  do not exist. Thirty-one of the forty-one came from people and six from documents.
- **Unit 7.** Two teams used one word in two senses, agreed with each other for forty minutes, and
  built correctly to different specifications. The company's eleven-page glossary is correct and
  unopened.
- **Unit 8.** Three of four internal claims were stronger than the evidence, and all three
  over-claims were internal. The effect was not that anybody was fooled; it was that no work was
  done.
- **Unit 9.** Three customers disputed an automated decision in two years. All three received a
  courteous reply within a day from three different people, none of whom could change the outcome.
- **Unit 10.** Three weeks of argument between two senior engineers ended in forty minutes, over an
  accuracy difference of 0.7 minutes that neither of them had ever said out loud as a number.
- **Unit 11.** A correctly computed figure of 98.1 per cent supported a rollout. The baseline — what
  answering *no* to everything scores — is 98.5 per cent, and computing it took four minutes.
- **Unit 12.** A fluent, confident, well-formatted generated summary containing an invented figure
  was quoted in a board paper, because it sounded finished. Four risks were missing from a register
  that had been described as complete.

**Book 5 as built.** Starting Point and twelve units; 196 figures; 195 audio cues numbered `KS5-…`; **296 pages**; `Keystone-4-Book5.docx`.
