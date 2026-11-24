# -*- coding: utf-8 -*-
"""Keystone Book 6 figure specs, Starting Point to Unit 3."""
import sys, os
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(
    os.path.abspath(__file__)))), "wayfinder", "_build"))
from figgen import *
S={}

# ---------------- Starting Point ----------------
S["f00-f1"]=lambda: f_realia(tbl("Six things you already have",
    "One example each from a governance note",
    ["What you have","An example"],
    [["Hedged attribution","<b>According to</b> its own framing, the framework is voluntary."],
     ["Commencement","The prohibitions <b>apply from</b> 2 February 2025."],
     ["The agent restored","<b>Hana Sato</b> maintains the register, monthly."],
     ["Guidance verbs","A model <b>should</b> be evaluated on deployment-period data."],
     ["Intended use","It <b>was not evaluated on</b> anything about individuals."],
     ["Reporting conditions","Recall 41 per cent <b>at a threshold of</b> 0.5."]],
    note="Six boxes. This book adds the English of the long document that somebody outside reads: "
    "which edition, what status, and who holds the other end."), 580)
S["f00-f2"]=lambda: f_realia(doc("Two questions about any citation", None,
    "<p><b>1 &nbsp;Which edition, and is it still current?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>A standard can be amended, confirmed, superseded or "
    "withdrawn. The number stays the same and the content does not. An edition year is part of the "
    "citation, not decoration.</span></p>"
    "<p><b>2 &nbsp;Who outside this building is going to read this sentence?</b><br>"
    "<span style='font-size:12px;color:#6b6861'>A procurement officer scoring you. A researcher who "
    "has found something. An auditor. A colleague in nine years. None of them can ask you what you "
    "meant.</span></p>",
    "An arrow at the foot points to one box: four of our standing answers cite documents that no "
    "longer exist in the form we cite them."), 600)
S["f00-f3"]=lambda: f_realia(tbl("Four kinds of status", None,
    ["Status","What it means for your citation"],
    [["<b>current</b>","the edition you are citing is the published one"],
     ["<b>confirmed</b>","reviewed and kept as it is &mdash; still current, with a new review date"],
     ["<b>superseded</b>","a newer edition exists; yours is the old text"],
     ["<b>withdrawn</b>","no longer published; citing it is citing nothing"]],
    note="The number does not change when the content does."), 580)
S["f00-f4"]=lambda: f_realia(tbl("Two readers, one sentence", None,
    ["Written for a colleague","Written for somebody outside"],
    [["We follow the secure development framework.",
      "We implement 9 of its 19 practices; the other 10 are listed."],
     ["Our components are documented.",
      "A machine-readable list, regenerated per build, with 14 unresolved entries."],
     ["That vulnerability does not affect us.",
      "Not affected, because the vulnerable function is never reached; reasoning below."]],
    note="An arrow at the foot points to one box: the second one cannot ask you anything."), 620)

# ---------------- Unit 1 · A List of Everything Inside ----------------
S["f01-f1"]=lambda: f_icons([("data","a machine-readable component list"),
    ("thread","a dependency tree"),("refnumber","a version string"),
    ("truck","a supplier name"),("barcode","a unique identifier"),
    ("clock","a timestamp"),("engine","a build pipeline"),
    ("magnifier","a binary analysed afterwards"),("handsup","an entry marked unknown"),
    ("form","a customer questionnaire")], cols=5)
S["f01-f2"]=lambda: f_scene(920,420, people=[("hana",330,176,{"seated":True}),
     ("lucia",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,9,20))
S["f01-f3"]=lambda: f_icons([("truck","a supplier name"),("refnumber","a name and version"),
    ("barcode","a unique identifier"),("thread","a dependency relationship"),
    ("signature","the author of the data"),("clock","a timestamp")], cols=3)
S["f01-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The product","Where the list would come from","Build-time or after the fact",
     "What would be missing"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The part no tool can see:"), 640)
S["f01-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 51",
    "Platform team &middot; the component list &middot; page 1 of 1",
    "<p><b>The two formats.</b> SPDX, standardized as ISO/IEC 5962:2021, which specifies SPDX "
    "version 2.2.1; the project itself has since published later versions, so the ISO edition and "
    "the current project release are not the same document. And CycloneDX, published as ECMA-424, "
    "first edition, 2024. Both are machine-readable, and both are accepted by every customer who "
    "has asked us so far.</p>"
    + table_html(["Field","What it is"],
      [["supplier name","who provided the component"],
       ["component name","what it is called"],
       ["version","which version, exactly"],
       ["other unique identifiers","so that two tools agree which component this is"],
       ["dependency relationship","what depends on what"],
       ["author of the data","who produced this list"],
       ["timestamp","when it was produced"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>Where the value comes from.</b> "
    "It is not the format that determines whether a list is worth anything. It is how the list was "
    "generated. A list produced inside the build, from the resolved dependency graph, approaches "
    "completeness. A list produced by scanning a finished binary is an inference with a confident "
    "schema around it. Ours is build-time for nine services and binary analysis for two.</p>"
    "<p><b>What the list does not tell anybody.</b> What it does not tell you is whether a listed "
    "component's vulnerability affects you. That needs a separate format. What it also does not tell "
    "you is what your licensing obligations are. Nor does it describe anything that is not a "
    "software component: our models' training data is not in it.</p>"
    "<p><b>The fourteen entries we did not delete.</b> Fourteen components in the two "
    "binary-analysed services could not be identified to a version. Both formats allow an entry to "
    "record that it is unresolved. Fourteen declared unknowns are more useful than fourteen silent "
    "omissions.</p>",
    "Source: SPDX, standardized as ISO/IEC 5962:2021, which specifies SPDX version 2.2.1 &mdash; "
    "later project releases are not that edition; and CycloneDX, published as ECMA-424, first "
    "edition, 2024. Neither format states whether a vulnerability in a listed component affects a "
    "product, neither determines licensing obligations, neither covers a model's training data, and "
    "neither establishes how complete any particular list is."), 580)
S["f01-f6"]=lambda: f_realia(tbl("Word study","Cleft sentences",
    ["Form","What it moves to the front","Example"],
    [["What &hellip; is","the point you want read first",
      "<b>What the list does not tell you is</b> whether you are affected."],
     ["It is &hellip; that","the element that really decides",
      "<b>It is the generation method that</b> decides the value."],
     ["What &hellip; does not","the absence","<b>What it does not cover is</b> our training data."],
     ["All that &hellip; is","the smallness of something",
      "<b>All that the file proves is</b> that a component is present."],
     ["The thing that &hellip;","&nbsp;","&nbsp;"],
     ["The reason why &hellip; is","&nbsp;","&nbsp;"]]), 620)
S["f01-f7"]=lambda: f_chart([("build-time, from the resolved graph",9),
    ("binary analysis after the fact",2),("a hand-maintained list",0),
    ("none at all",0)], unit="of eleven services")
S["f01-f8"]=lambda: f_icons([("engine","a build emitting a file"),("magnifier","a binary scanned"),
    ("thread","a dependency arrow"),("handsup","an unresolved entry"),
    ("clock","a timestamp"),("data","a training set outside the boundary")], cols=3)
S["f01-f9"]=lambda: f_realia(tbl("Covering note &middot; component list",
    "Platform team &middot; for Northwind Rail procurement",
    ["Service group","Method","Components","Unresolved"],
    [["9 of 11","<b>build-time, resolved graph</b>","1,847","<b>0</b>"],
     ["2 of 11","<b>inferred by scanning the binary</b>","312","<b>14</b>"]],
    note="What this file does not tell you is whether a vulnerability in any listed component "
    "affects this product. All that the list establishes is which components are present. "
    "Fourteen declared unknowns."), 660)
S["f01-f10"]=lambda: f_scene(960,430, people=[("lucia",300,176,{"seated":True}),
     ("hana",385,172,{}),("tomas",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("form",385,196,0.24),
     ("essay",452,196,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,9,30))
S["f01-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Note A", None,
        "<p>A complete bill of materials is attached.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Note B", None,
        "<p>Both formats, with standard numbers and years.<br>"
        "Build-time for nine services; inferred for two, named.<br>"
        "Fourteen entries recorded as unresolved.<br>"
        "What the file does not tell you.<br>The training data is not in it.</p>"), w)[0:3],
    w=920, h=300)
S["f01-f12"]=lambda: f_realia(doc("Two covering notes", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 1</b><br>"
    "A complete bill of materials.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Note 2</b><br>"
    "The formats with numbers and years, the method per service, the unresolved count, and two "
    "sentences on what the file does not cover.</p>",
    "A file that parses cleanly and conceals fourteen omissions is worth less than one that parses "
    "cleanly and declares them."), 620)
S["f01-f13"]=lambda: f_realia(form("Covering-note planner",
    [("What is attached",""),("The formats, with numbers and years",""),
     ("How each list was produced",""),("The unresolved entries",""),
     ("What the file does not tell the reader",""),("What you are doing next, unasked","")]), 520)
S["f01-f14"]=lambda: f_scene(980,440,
    people=[("lucia",55,176,{}),("hana",115,176,{"seated":True}),("tomas",195,172,{}),
     ("mei",280,176,{"seated":True}),("chiamaka",360,172,{"seated":True}),
     ("priya",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("oksana",665,170,{}),("paula",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("nour",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("data",330,198,0.22),
     ("printer",430,196,0.3),("form",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,10,0))
S["f01-f15"]=lambda: f_chart([("yes, build-time",5),("yes, by scanning",4),("partly",6),
    ("no",4),("I do not know",3)])
S["f01-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("data",316,196,0.22),("form",384,196,0.24),
     ("essay",452,196,0.24),("note",520,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 2 · Not Affected, and Why ----------------
S["f02-f1"]=lambda: f_icons([("refnumber","a published identifier"),
    ("application","a product version"),("stamp","a status reading not affected"),
    ("quotemark","a reason beneath it"),("walkroute","a path never reached"),
    ("barrier","a component not present"),("padlock","a mitigation in place"),
    ("signature","a statement by an issuer"),("transfer","an assertion passed onwards"),
    ("magnifier","a claim checked rather than repeated")], cols=5)
S["f02-f2"]=lambda: f_scene(920,420, people=[("oksana",330,176,{"seated":True}),
     ("hana",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("essay",395,196,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,11,10))
S["f02-f3"]=lambda: f_icons([("barrier","component not present"),
    ("noentry","vulnerable code not present"),("walkroute","not in the execute path"),
    ("padlock","not controllable by an adversary"),("bandage","a mitigation already in place"),
    ("waitscreen","under investigation")], cols=3)
S["f02-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The claim","Who asserted it","How we worded it","Who would be asked"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The one we adopted without noticing:"), 640)
S["f02-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 52",
    "Platform team &middot; exploitability statements &middot; page 1 of 1",
    "<p><b>The format.</b> CSAF version 2.0, an OASIS Standard approved in November 2022, which "
    "carries a VEX profile for exchanging exploitability information. The status justification "
    "vocabulary was published separately, in a short document dated June 2022.</p>"
    + table_html(["Status","What it asserts"],
      [["<b>affected</b>","the vulnerability is exploitable in this product version"],
       ["<b>not affected</b>","it is not &mdash; and a justification is required"],
       ["<b>fixed</b>","it was, and a release addresses it"],
       ["<b>under investigation</b>","we do not yet know, and we are saying so"]])
    + table_html(["Justification for not affected","In plain terms"],
      [["component not present","the vulnerable component is not here at all"],
       ["vulnerable code not present","the component is here; that code is not"],
       ["<b>not in the execute path</b>","it is here and nothing ever calls it"],
       ["not controllable by an adversary","it runs, but no outside input reaches it"],
       ["inline mitigations exist","something already deployed blocks the problem"]])
    + "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>What a statement is.</b> It is "
    "an assertion by its issuer, in a standard envelope, verified by nobody. The format makes the "
    "assertion machine-readable and comparable. It does not make it true. That is why the "
    "justification matters more than the status: four of the five reasons fail in completely "
    "different ways.</p>"
    "<p><b>The supplier's claim, and how it left this building.</b> Our supplier asserted that their "
    "library was not affected. The first draft said the library is not affected, which adopts their "
    "assertion as ours. The version we sent attributes their claim and states our own confirmed "
    "finding separately. Two assertions, two owners, five extra words.</p>",
    "Source: CSAF version 2.0, an OASIS Standard approved November 2022, including its VEX profile; "
    "with the status justification vocabulary published in a working-group document dated June 2022. "
    "A statement in this format is an assertion by its issuer: the format provides no verification, "
    "does not express severity, does not replace remediation, and its justification vocabulary is a "
    "closed list."), 580)
S["f02-f6"]=lambda: f_realia(tbl("Word study","Layered attribution",
    ["Structure","Parties kept visible","Example"],
    [["X states that","two","<b>Our supplier states that</b> the library is not affected."],
     ["on X's account","two, compactly","<b>On the supplier's account</b>, the code is not present."],
     ["as asserted by X","two, formally","not affected, <b>as asserted by</b> the maintainer"],
     ["X states that Y warrants","three",
      "The supplier states that <b>its subcontractor warrants</b> the build."],
     ["we are told that","&nbsp;","&nbsp;"],
     ["we have confirmed that","&nbsp;","&nbsp;"]]), 620)
S["f02-f7"]=lambda: f_chart([("not affected: not in execute path",19),
    ("not affected: component absent",11),("fixed",7),("affected",2),
    ("under investigation",2)], unit="advisories")
S["f02-f8"]=lambda: f_icons([("barrier","a missing component"),("noentry","absent code"),
    ("walkroute","an unreachable function"),("padlock","an input that cannot reach it"),
    ("bandage","a deployed mitigation"),("waitscreen","under investigation")], cols=3)
S["f02-f9"]=lambda: f_realia(tbl("Statement sheet &middot; April quarter",
    "Platform team &middot; for Northwind Rail security",
    ["Advisory","Version","Status","Justification","Asserted by"],
    [["A-2291","4.2","not affected","not in the execute path","<b>us, confirmed</b>"],
     ["A-2307","4.2","not affected","component not present","<b>us, from the build list</b>"],
     ["A-2311","4.1","fixed","&mdash;","us"],
     ["A-2318","4.2","not affected","vulnerable code not present","<b>our supplier</b>"],
     ["A-2320","4.2","<b>under investigation</b>","<b>vocabulary does not fit</b>","us"],
     ["A-2325","4.2","affected","&mdash;","us"]],
    note="Two assertions, two owners. We would rather be visibly unfinished than precisely wrong."),
    700)
S["f02-f10"]=lambda: f_scene(960,430, people=[("oksana",300,176,{"seated":True}),
     ("hana",385,172,{}),("lucia",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("essay",385,196,0.24),
     ("note",452,194,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,11,30))
S["f02-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Letter A", None,
        "<p>The library is not affected by this advisory.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Letter B", None,
        "<p>Our supplier states the code is not in its build.<br>"
        "We have confirmed the function is unreachable.<br>"
        "Two assertions, two owners.<br>"
        "Describes the build dated 2 May; we reissue on release.</p>"), w)[0:3],
    w=920, h=300)
S["f02-f12"]=lambda: f_realia(doc("Two letters", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Letter 1</b><br>"
    "The library is not affected.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Letter 2</b><br>"
    "The supplier's claim attributed, our own finding stated separately, the build date, and a "
    "reissue condition.</p>",
    "An honest company's most likely false statement is somebody else's claim with the attribution "
    "worn off."), 620)
S["f02-f13"]=lambda: f_realia(form("Statement planner",
    [("The format, and what it does not do",""),("The statuses, with counts",""),
     ("One statement with two owners",""),("Why the wording matters",""),
     ("What is still under investigation",""),("The shelf life","")]), 520)
S["f02-f14"]=lambda: f_scene(980,440,
    people=[("oksana",55,176,{}),("hana",115,176,{"seated":True}),("lucia",195,172,{}),
     ("mei",280,176,{"seated":True}),("chiamaka",360,172,{"seated":True}),
     ("tomas",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("priya",665,170,{}),("paula",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("nour",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("essay",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,12,0))
S["f02-f15"]=lambda: f_chart([("a machine-readable statement",3),("a page of prose",6),
    ("an email",8),("nothing at all",4),("I do not know",3)])
S["f02-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",316,196,0.24),("note",386,194,0.24),
     ("stamp",452,198,0.2),("clipboard",518,194,0.24),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))

# ---------------- Unit 3 · No Implicit Trust ----------------
S["f03-f1"]=lambda: f_icons([("barrier","a request checked anyway"),
    ("key","a session for one resource"),("balance","a policy engine deciding"),
    ("signature","a credential issued"),("security","an enforcement point in the path"),
    ("thermometer","a device posture measured"),("idcard","an identity with attributes"),
    ("logsheet","a log collected"),("walkroute","an incremental migration"),
    ("board","a product with a slogan")], cols=5)
S["f03-f2"]=lambda: f_scene(920,420, people=[("oksana",330,176,{"seated":True}),
     ("hana",425,172,{})],
    props=[("desk",240,0,1.25),("computer",310,142,0.44),("clipboard",395,194,0.24),
     ("note",462,194,0.24),("lamp",190,140,0.42),("window",800,56,0.96)],
    clockat=(130,46,22,3,50))
S["f03-f3"]=lambda: f_icons([("data","all sources are resources"),
    ("padlock","secured regardless of location"),("key","per-session access"),
    ("balance","dynamic policy"),("thermometer","monitored posture"),
    ("logsheet","collected information")], cols=3)
S["f03-f4"]=lambda: f_realia(tbl("Team research", None,
    ["The thing trusted","Why it is trusted","What stopping would require",
     "What would break first"],
    [["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],
     ["&nbsp;","&nbsp;","&nbsp;","&nbsp;"],["&nbsp;","&nbsp;","&nbsp;","&nbsp;"]],
    note="The assumption that predates everybody here:"), 660)
S["f03-f5"]=lambda: f_realia(doc("Meridian &middot; architecture note 53",
    "Platform team &middot; access architecture &middot; page 1 of 1",
    "<p><b>The publication.</b> NIST Special Publication 800-207, Zero Trust Architecture, "
    "published August 2020. It is guidance. It describes an approach, several deployment variations, "
    "and the threats to the approach itself.</p>"
    + table_html(["#","Tenet, abbreviated"],
      [["1","All data sources and computing services are resources."],
       ["2","All communication is secured regardless of network location."],
       ["3","Access to an individual resource is granted on a per-session basis."],
       ["4","Access is determined by dynamic policy, including the observable state of client "
        "identity, application and requesting asset."],
       ["5","The enterprise monitors and measures the posture of all owned and associated assets."],
       ["6","Authentication and authorization are dynamic and strictly enforced before access."],
       ["7","The enterprise collects information about current state and uses it to improve "
        "posture."]])
    + "<p><b>The three components.</b> A policy engine, which makes the decision. A policy "
    "administrator, which issues or revokes the credential for a session. And a policy enforcement "
    "point, which sits in the path of the request.</p>"
    "<p style='border-left:3px solid #d9d4c9;padding-left:10px'><b>Unpacking the fourth tenet.</b> "
    "That sentence requires us to decide what counts as an identity, what counts as an application, "
    "what we can observe about a device, how often we refresh it, which attributes the policy uses, "
    "and who may change the policy. Six decisions, none of which a vendor can make for us, inside "
    "one noun phrase of fourteen words.</p>"
    "<p><b>What cannot be bought.</b> The publication says there is no single deployment plan and "
    "that migration is incremental. Products supply enforcement points and identity services. No "
    "product supplies the removal of our own implicit trust: four databases reachable from anything "
    "inside, one shared credential used by eleven jobs, and a reporting service that authenticates "
    "nothing because nothing outside could reach it in 2014.</p>",
    "Source: NIST Special Publication 800-207, Zero Trust Architecture, August 2020. It sets out "
    "seven tenets and a logical architecture of policy engine, policy administrator and policy "
    "enforcement point. It is guidance: it prescribes no products, states that there is no single "
    "deployment plan and that migration is incremental, and does not eliminate risk."), 580)
S["f03-f6"]=lambda: f_realia(tbl("Word study","Heavy noun phrases",
    ["The heavy noun phrase","What it contains"],
    [["the observable state of the requesting asset","what is observable &middot; how often &middot; who decides"],
     ["dynamic policy based on identity attributes","which attributes &middot; from where &middot; refreshed when"],
     ["per-session access to an individual resource","what a session is &middot; how long &middot; what a resource is"],
     ["the integrity and security posture of all owned and associated assets","&nbsp;"],
     ["strictly enforced authentication and authorization","&nbsp;"]],
    note="A phrase with nothing in it to refuse passes every review, which is how it reaches a "
    "budget line."), 620)
S["f03-f7"]=lambda: f_chart([("a verified identity per request",5),("a shared credential",3),
    ("the network location alone",4),("nothing at all",1),("unknown",2)], unit="systems")
S["f03-f8"]=lambda: f_icons([("barrier","checked despite coming from inside"),
    ("key","a session for one resource"),("balance","a decision being made"),
    ("signature","a credential issued"),("security","an enforcement point"),
    ("thermometer","a posture measured")], cols=3)
S["f03-f9"]=lambda: f_realia(tbl("Migration page &middot; one application first",
    "Platform team &middot; section 3.1",
    ["Application","What grants access today","What would grant it after","Who decides"],
    [["billing database","<b>network location</b>","a verified identity per request","platform team"],
     ["reporting service","<b>nothing at all</b>","an identity service","<b>nobody yet</b>"],
     ["scheduler","a shared credential, 11 jobs","per-job identities","<b>nobody yet</b>"],
     ["order service","a verified identity","unchanged","platform team"],
     ["admin console","network location","an identity plus posture","platform team"]],
    note="One application first, not the network. The publication itself says the migration is "
    "incremental."), 680)
S["f03-f10"]=lambda: f_scene(960,430, people=[("oksana",300,176,{"seated":True}),
     ("hana",385,172,{}),("lucia",460,176,{"seated":True})],
    props=[("table",230,0,1.2),("computer",300,142,0.44),("clipboard",385,194,0.24),
     ("note",452,194,0.24),("board",600,146,0.44),("window",830,56,0.9)],
    clockat=(120,44,22,4,0))
S["f03-f11"]=lambda: f_panels(
    lambda w,h: f_realia(doc("Paper A", None,
        "<p>Four pages of long noun phrases, and a budget line.</p>"), w)[0:3],
    lambda w,h: f_realia(doc("Paper B", None,
        "<p>What the document is: guidance, August 2020.<br>"
        "The principle, in one line.<br>"
        "Four databases, eleven jobs, one unauthenticated service.<br>"
        "One application, from June.</p>"), w)[0:3],
    w=920, h=300)
S["f03-f12"]=lambda: f_realia(doc("Two board papers", None,
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Paper 1</b><br>"
    "Four pages of long noun phrases and a budget line.</p>"
    "<p style='border:1px solid #d9d4c9;padding:9px'><b>Paper 2</b><br>"
    "Four sentences and a five-row table naming what grants access today.</p>",
    "A heavy noun phrase is a container. A container that is never opened anywhere in the document "
    "is a decision nobody has made."), 620)
S["f03-f13"]=lambda: f_realia(form("Board-paper planner",
    [("What the document is",""),("The principle, in one line",""),
     ("What it means here, specifically",""),("One phrase, unpacked",""),
     ("What you are asking for",""),("What it does not achieve","")]), 520)
S["f03-f14"]=lambda: f_scene(980,440,
    people=[("oksana",55,176,{}),("hana",115,176,{"seated":True}),("lucia",195,172,{}),
     ("mei",280,176,{"seated":True}),("tomas",360,172,{"seated":True}),
     ("adeel",435,176,{"seated":True}),("ines",520,170,{}),("grace",595,172,{}),
     ("chiamaka",665,170,{}),("paula",735,172,{}),("yusuf",805,170,{}),
     ("junseo",865,172,{}),("samira",920,170,{}),("nour",960,174,{})],
    props=[("desk",80,0,1.1),("board",150,90,0.7),("clipboard",330,198,0.24),
     ("printer",430,196,0.3),("note",500,198,0.24),("cafe",840,198,0.38),
     ("table",640,0,1.0)],
    clockat=(250,34,22,5,0))
S["f03-f15"]=lambda: f_chart([("databases",8),("internal services",6),("reporting tools",4),
    ("scheduled jobs",5),("nothing by location",1)])
S["f03-f16"]=lambda: f_scene(900,400,
    props=[("desk",250,0,1.4),("essay",316,196,0.24),("clipboard",386,194,0.24),
     ("note",452,194,0.24),("data",518,196,0.22),("lamp",180,140,0.42)],
    clockat=(120,46,22,6,0))
