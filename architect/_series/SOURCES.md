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
