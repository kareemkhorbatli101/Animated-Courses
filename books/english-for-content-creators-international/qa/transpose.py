#!/usr/bin/env python3
"""transpose.py — move the ten units of the Content Creators book from Syria to
ten other non-English-speaking countries.

Each unit has a generic layer (country name, adjective, three cities) and a list
of one-off substitutions for the business registry, the media regulator, the
national film body, the storytelling tradition and the cultural terms, none of
which can be renamed mechanically.  The one-offs run first so that a phrase
naming Syria is rewritten whole before the generic layer touches the words
inside it.  Appendix A and Appendix B are transposed section by section, so each
unit's answers and transcripts move with the unit they belong to.
"""
import re
import sys

ROOT = sys.argv[1] if len(sys.argv) > 1 else "english-for-content-creators-international/content"

# country, adjective, first city, second city, third city
C = {
 1:  ("Vietnam", "Vietnamese", "Hanoi", "Da Nang", "Can Tho"),
 2:  ("Türkiye", "Turkish", "İstanbul", "İzmir", "Bursa"),
 3:  ("Mexico", "Mexican", "Mexico City", "Guadalajara", "Monterrey"),
 4:  ("Morocco", "Moroccan", "Casablanca", "Agadir", "Meknès"),
 5:  ("Indonesia", "Indonesian", "Jakarta", "Surabaya", "Medan"),
 6:  ("Brazil", "Brazilian", "São Paulo", "Curitiba", "Recife"),
 7:  ("Egypt", "Egyptian", "Cairo", "Alexandria", "Damietta"),
 8:  ("Thailand", "Thai", "Bangkok", "Chiang Mai", "Hat Yai"),
 9:  ("Poland", "Polish", "Warsaw", "Poznań", "Gdańsk"),
 10: ("Kenya", "Kenyan", "Nairobi", "Mombasa", "Nakuru"),
}

# the registry a production company is entered in before it may trade
REG = {
 1:  "national business register",
 2:  "trade registry",
 3:  "commercial registry",
 4:  "commercial register",
 5:  "business register",
 6:  "commercial registry",
 7:  "commercial register",
 8:  "business register",
 9:  "National Court Register",
 10: "business register",
}

# the authority that licenses media work and approves filming permits
MOI = {
 1:  "Ministry of Information and Communications",
 2:  "Radio and Television Supreme Council",
 3:  "Federal Telecommunications Institute",
 4:  "High Authority for Audiovisual Communication",
 5:  "Ministry of Communication and Informatics",
 6:  "Ministry of Culture",
 7:  "Supreme Council for Media Regulation",
 8:  "Ministry of Culture",
 9:  "National Broadcasting Council",
 10: "Film Classification Board",
}

# the national film body that trained a generation of film-makers
CIN = {
 1:  "Cinema Department",
 2:  "Directorate General of Cinema",
 3:  "Mexican Film Institute",
 4:  "Moroccan Cinematographic Centre",
 5:  "Indonesian Film Board",
 6:  "National Film Agency",
 7:  "National Film Centre",
 8:  "Thai Film Office",
 9:  "Polish Film Institute",
 10: "Kenya Film Commission",
}

# the professional body that certifies a creator's standing
SYN = {
 1:  "artists' association",
 2:  "producers' union",
 3:  "film workers' union",
 4:  "artists' syndicate",
 5:  "artists' association",
 6:  "performers' union",
 7:  "artists' syndicate",
 8:  "film workers' association",
 9:  "filmmakers' association",
 10: "artists' guild",
}

ONE_OFF = {
 1: [
  ("Syria has a long tradition of printing, broadcasting and storytelling. A production company is entered in the commercial register before it may trade, the Ministry of Information licenses media work and approves filming permits, and the General Establishment for Cinema and the Artists' Syndicate set the professional rules.",
   "Vietnam has a long tradition of printing, broadcasting and storytelling. A production company is entered in the national business register before it may trade, the Ministry of Information and Communications licenses media work and approves filming permits, and the Cinema Department and the artists' association set the professional rules."),
  ("Many studios in Syria belong to family firms. Some serve drama producers, where the studio writes the scripts, keeps the footage and manages the schedule. Others serve shops, clinics, schools and trading houses, where every advertisement needs an official approval. Since the conflict, much content work has gone into rebuilding archives that were lost and keeping contact with audiences abroad.",
   "Many studios in Vietnam belong to family firms. Some serve drama producers, where the studio writes the scripts, keeps the footage and manages the schedule. Others serve shops, clinics, schools and trading houses, where every advertisement needs an official approval. As the market has grown, much content work has gone into organising archives that were never indexed and reaching audiences abroad."),
  ("Content staff in Syria often face challenges including interrupted power, equipment that is hard to repair, and an internet connection too slow to upload a finished film. Despite these obstacles, they remain committed to publishing every piece and rebuilding confidence in Syrian production.",
   "Content staff in Vietnam often face challenges including crowded premises, humidity that damages equipment, and an internet connection too slow to upload a finished film. Despite these obstacles, they remain committed to publishing every piece and building confidence in Vietnamese production."),
  ("a media company in Damascus called Yasmine Studio", "a media company in Hanoi called Sông Hồng Studio"),
  ("1. Yasmine Studio |", "1. Sông Hồng Studio |"),
  ("Syria has a long media history. Damascus and Aleppo had printing presses and newspapers from the nineteenth century, and the hakawati told stories in the coffee houses for four hundred years. Formal regulation began with the Ministry of Information, which licenses every firm that publishes, and with the General Establishment for Cinema that trained a generation of film-makers.",
   "Vietnam has a long media history. Hanoi and Hội An had printing houses and newspapers from the nineteenth century, and the water-puppet masters told stories in the villages for four hundred years. Formal regulation began with the Ministry of Information and Communications, which licenses every firm that publishes, and with the Cinema Department that trained a generation of film-makers."),
  ("1. What told stories in Syrian coffee houses for four hundred years?",
   "1. What told stories in Vietnamese villages for four hundred years?"),
  ("1. The hakawati told stories in the coffee houses for four hundred years.",
   "1. The water-puppet masters told stories in the villages for four hundred years."),
  ("The hakawati told stories in Syrian coffee houses to a pattern that was kept for centuries.",
   "The water-puppet masters told stories in Vietnamese villages to a pattern kept for centuries."),
  ("a) | Mastery of a trade is honoured, and a hakawati's clear voice and well-kept tale are remembered",
   "a) | Mastery of a trade is honoured, and a storyteller's clear voice and well-kept tale are remembered"),
  ("In Syria, Damascus and Aleppo had printing presses and newspapers from the nineteenth century, and the commercial register now records every company that trades.",
   "In Vietnam, Hanoi and Hội An had printing houses and newspapers from the nineteenth century, and the business register now records every company that trades."),
  ("After the conflict, content staff have had to rebuild archives that were damaged or lost. They recover footage, obtain duplicate licences, retrain editors, and persuade old clients that the studio still delivers on time.",
   "As the market has grown, content staff have had to rebuild archives that were scattered or incomplete. They recover footage, obtain duplicate licences, retrain editors, and persuade old clients that the studio still delivers on time."),
  ("Archive managers work to keep masters safe despite interrupted power and old buildings. Purchasing officers travel long distances to obtain one spare lens.",
   "Archive managers work to keep masters safe despite humidity and crowded buildings. Purchasing officers travel long distances to obtain one spare lens."),
  ("The work of content staff is challenging. They operate with scarce equipment and often without reliable power. But they remain committed to publishing every piece and rebuilding confidence in Syrian production.",
   "The work of content staff is challenging. They operate with thin margins and often in crowded premises. But they remain committed to publishing every piece and building confidence in Vietnamese production."),
  ("Today, many kinds of content work are carried out in Syria. Some staff run the production of small family studios. Others work with international broadcasters and brands. Together they address critical needs in employment, archiving, storytelling and the reconstruction of footage that was lost.",
   "Today, many kinds of content work are carried out in Vietnam. Some staff run the production of small family studios. Others work with international broadcasters and brands. Together they address critical needs in employment, archiving, storytelling and the indexing of footage that was never ordered."),
 ],
 2: [
  ("The content sector in Syria has changed significantly in response to the need to reconstruct archives that were lost or damaged. Large broadcasters, ministries, clinics and small family studios all employ content staff. These staff serve both their own clients and audiences abroad. Working in Syria's studios requires persistence because power, equipment and spare parts are all uncertain.",
   "The content sector in Türkiye has changed significantly in response to the need to serve audiences in many countries at once. Large broadcasters, ministries, clinics and small family studios all employ content staff. These staff serve both their own clients and audiences abroad. Working in Türkiye's studios requires persistence because deadlines, approvals and currency terms are all uncertain."),
  ("In neighboring countries like Lebanon and Jordan, studios employ staff who make content for both local use and export distribution. The work is challenging but essential. These organisations demonstrate how dedicated professionals keep working in hard times. Syrian content staff are known in the region for their resourcefulness and persistence.",
   "In neighboring countries like Bulgaria and Georgia, studios employ staff who make content for both local use and export distribution. The work is challenging but essential. These organisations demonstrate how dedicated professionals keep working in hard times. Turkish content staff are known in the region for their resourcefulness and persistence."),
  ("Many Syrian professionals who studied abroad chose to return to run studios at home. They sacrifice higher salaries in wealthy countries to tell stories from their own towns.",
   "Many Turkish professionals who studied abroad chose to return to run studios at home. They sacrifice higher salaries in wealthy countries to tell stories from their own towns."),
 ],
 3: [
  ("Syria has a long media tradition and also a demanding compliance situation. A company must be entered in the commercial register before it may trade, and the Ministry of Information and the General Establishment for Cinema set the rules on permits, filming and distribution. Foreign platforms add their own requirements on top, so a studio may need a certificate from the Artists' Syndicate, a certified translation, and a buyer's own release forms at the same time. Compliance is complicated by archives lost during the conflict, licences that expire at different times, and the cost of professional advice.",
   "Mexico has a long media tradition and also a demanding compliance situation. A company must be entered in the commercial registry before it may trade, and the Federal Telecommunications Institute and the Mexican Film Institute set the rules on permits, filming and distribution. Foreign platforms add their own requirements on top, so a studio may need a certificate from the film workers' union, a certified translation, and a buyer's own release forms at the same time. Compliance is complicated by archives held in several registries at once, licences that expire at different times, and the cost of professional advice."),
  ("2. What is the scale of Syria's missing-paperwork problem?", "2. What is the scale of Mexico's missing-paperwork problem?"),
  ("Syria licenses studios through the Ministry of Information and registers every production with the authorities.",
   "Mexico licenses studios through the Federal Telecommunications Institute and registers every production with the authorities."),
 ],
 4: [
  ("Process knowledge means understanding how the work is actually done and paid for. Content staff in Syria must understand generator fuel, equipment repair, certified subtitling, and the real cost of bandwidth under difficult conditions.",
   "Process knowledge means understanding how the work is actually done and paid for. Content staff in Morocco must understand electricity charges, equipment repair, certified subtitling, and the real cost of bandwidth between cities."),
  ("Syrian content teams demonstrate exceptional judgement, skill, and commitment despite extreme difficulties. They work with prices that can change between the quotation and the delivery, re-pricing in stages and recording every assumption. They keep accounts through power cuts, writing by hand and entering the figures later.",
   "Moroccan content teams demonstrate exceptional judgement, skill, and commitment despite real difficulties. They work with prices that can change between the quotation and the delivery, re-pricing in stages and recording every assumption. They keep accounts through long seasonal peaks, writing by hand and entering the figures later."),
  ("Syrian content staff understand local costs deeply. They know memory card prices, generator fuel, repair charges and the real cost of certified subtitling as these behave in local circumstances.",
   "Moroccan content staff understand local costs deeply. They know memory card prices, electricity charges, repair costs and the real cost of certified subtitling as these behave in local circumstances."),
  ("Many have rebuilt their own archives yet continue reporting honestly.", "Many have rebuilt their own catalogues yet continue reporting honestly."),
 ],
 5: [
  ("Syrian studios face unique challenges in planning and management. Interrupted power, difficulty importing spare parts, and equipment that cannot easily be repaired create real obstacles. Despite these difficulties, Syrian and international staff successfully run the production of drama, documentary, advertising and online work.",
   "Indonesian studios face unique challenges in planning and management. Distance between islands, difficulty importing spare parts, and equipment that cannot easily be repaired create real obstacles. Despite these difficulties, Indonesian and international staff successfully run the production of drama, documentary, advertising and online work."),
  ("Good assessment in Syria includes understanding power interruptions and the fairness that lets every section be judged by the same rules.",
   "Good assessment in Indonesia includes understanding shipping times between islands and the fairness that lets every section be judged by the same rules."),
  ("They consider timing—not starting a long render before a known power cut.",
   "They consider timing—not starting a long render before a known holiday week."),
  ("Durable studios in Syria build local capacity. Outside support will eventually end. Successful organisations train Syrian staff, use methods that can be run with locally available tools, and document so that staff turnover does not lose the knowledge.",
   "Durable studios in Indonesia build local capacity. Outside support will eventually end. Successful organisations train Indonesian staff, use methods that can be run with locally available tools, and document so that staff turnover does not lose the knowledge."),
  ("Successful production in Syria adapts to local values and working practices. Syrian culture values the family, respect for elders, religious faith, personal honour, and craft mastery.",
   "Successful production in Indonesia adapts to local values and working practices. Indonesian culture values the family, respect for elders, religious faith, social harmony, and craft mastery."),
  ("In Syria, electricity sometimes becomes unavailable because of generation shortages, network difficulties, or sudden fuel price rises. This happened midway through a year when the power for an edit suite could not be obtained.",
   "In Indonesia, equipment sometimes becomes unavailable because of import restrictions, shipping difficulties, or sudden price rises. This happened midway through a year when the parts for an edit suite could not be obtained."),
  ("Power shortages are common—electricity may be unavailable or fail at a very different hour.",
   "Supply shortages are common—equipment may be unavailable or arrive at a very different price."),
  ("Challenge: Power Shortages During the Year", "Challenge: Supply Shortages During the Year"),
  ("2. When Power Fails:", "2. When Supplies Fail:"),
  ("3. Learning and Improvement: I would analyse why the power failed—generation shortage? network? price?",
   "3. Learning and Improvement: I would analyse why the supply failed—import restriction? shipping? price?"),
 ],
 6: [
  ("Syrian commercial culture has deep traditions of trust, reputation and long relationships that align strongly with partnership approaches in production.",
   "Brazilian commercial culture has deep traditions of trust, reputation and long relationships that align strongly with partnership approaches in production."),
  ("The concept of \"karama\" or dignity is central to Syrian culture. Karama means being treated with respect and keeping personal honour. Partnership approaches honour karama by explaining a delay with a reason rather than simply failing to deliver. A broken promise without explanation damages karama, and a collaborator who feels slighted will not answer you again. Genuine partnership respects karama and fits commercial values.",
   "The idea of \"respeito\" or respect is central to Brazilian culture. Respeito means being treated as a person and keeping personal standing. Partnership approaches honour respeito by explaining a delay with a reason rather than simply failing to deliver. A broken promise without explanation damages respeito, and a collaborator who feels slighted will not answer you again. Genuine partnership respects respeito and fits commercial values."),
  ("Syrian trade values the long relationship over the single job.", "Brazilian trade values the long relationship over the single job."),
  ("This means a Syrian collaborator responds strongly to being treated as a long-term partner",
   "This means a Brazilian collaborator responds strongly to being treated as a long-term partner"),
  ("Islamic teachings about honest dealing strengthen the partnership orientation. Islam teaches that a seller must not conceal a defect and must describe goods truthfully.",
   "Church and community teaching about honest dealing strengthens the partnership orientation. The tradition holds that a seller must not conceal a defect and must describe goods truthfully."),
  ("Syrian hospitality shapes how a negotiation is conducted. A visiting collaborator is welcomed and offered coffee. However, a guest is expected to respect the host's standards.",
   "Brazilian hospitality shapes how a negotiation is conducted. A visiting collaborator is welcomed and offered coffee. However, a guest is expected to respect the host's standards."),
  ("1. What does karama mean and how does partnership honour this value?",
   "1. What does respeito mean and how does partnership honour this value?"),
  ("2. How do Islamic teachings support working with clients and collaborators?",
   "2. How does community teaching support working with clients and collaborators?"),
  ("@EX Part 7: Syrian Values of Cooperation and Production", "@EX Part 7: Brazilian Values of Cooperation and Production"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values of Cooperation and Production",
   "@ANSHEAD Exercise 38: Part 7: Brazilian Values of Cooperation and Production"),
  ("@INSTR Read about how Syrian cultural values support studio partnerships and answer questions.",
   "@INSTR Read about how Brazilian cultural values support studio partnerships and answer questions."),
  ("Syrian Cultural Values Supporting Collaboration", "Brazilian Cultural Values Supporting Collaboration"),
  ("Islamic teaching that a trader must not conceal a fault and must describe the goods truthfully supports terms that ask a collaborator to disclose a problem rather than hide it until it is found.",
   "Community teaching that a trader must not conceal a fault and must describe the goods truthfully supports terms that ask a collaborator to disclose a problem rather than hide it until it is found."),
  ("1. Karama means dignity and standing in the studio, and partnership respects it by explaining every delay with a reason",
   "1. Respeito means respect and standing in the studio, and partnership respects it by explaining every delay with a reason"),
  ("Between: Yasmine Studio and the Midan Collaborators' Association",
   "Between: Paulista Studio and the Centro Collaborators' Association"),
  ("   Yasmine Studio:", "   Paulista Studio:"),
  ("   Midan Collaborators' Association:", "   Centro Collaborators' Association:"),
  ("   - 2 members from Yasmine Studio", "   - 2 members from Paulista Studio"),
  ("Successful cross-functional teams in Syria share scarce resources.", "Successful cross-functional teams in Brazil share scarce resources."),
  ("The Syrian context especially needs this collaborative approach.", "The Brazilian context especially needs this collaborative approach."),
 ],
 7: [
  ("In Syria, direct relationships have become vital for keeping contact when the connection is unreliable.",
   "In Egypt, direct relationships have become vital for keeping contact when a platform changes its rules."),
  ("Syria's service challenges stem from infrastructure and cost. Power is interrupted, connections fail, prices move between quotation and purchase, and equipment is hard to repair.",
   "Egypt's service challenges stem from scale and cost. Pages are crowded, connections are slow, prices move between quotation and purchase, and equipment is hard to repair."),
  ("Syrian traditions provide a strong foundation supporting integrated community work and replies.",
   "Egyptian traditions provide a strong foundation supporting integrated community work and replies."),
  ("The idea of \"amanah\" or trust held on behalf of others is central to Syrian practice.",
   "The idea of \"amanah\" or trust held on behalf of others is central to Egyptian practice."),
  ("Service in Syrian tradition is a moral obligation, not only a commercial calculation.",
   "Service in Egyptian tradition is a moral obligation, not only a commercial calculation."),
  ("Syrian teaching emphasizes hospitality as a shared responsibility.", "Egyptian teaching emphasizes hospitality as a shared responsibility."),
  ("Syrian craft ethics require high standards. Master hakawatis and senior writers are trusted figures accountable to their colleagues and to the family name in the credits.",
   "Egyptian craft ethics require high standards. Master storytellers and senior writers are trusted figures accountable to their colleagues and to the family name in the credits."),
  ("Syrian Values Supporting Service and Hospitality", "Egyptian Values Supporting Service and Hospitality"),
  ("Studio: A trading firm outside Homs", "Studio: A trading firm outside Damietta"),
 ],
 8: [
  ("@EX Part 7: Syrian Values - Hisba and Honest Measure", "@EX Part 7: Thai Values - Honest Measure"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values - Hisba and Honest Measure",
   "@ANSHEAD Exercise 38: Part 7: Thai Values - Honest Measure"),
  ("@INSTR Discuss Syrian traditions of market oversight in content reporting.",
   "@INSTR Discuss Thai traditions of market oversight in content reporting."),
  ("1. In Syrian markets, the muhtasib checked weights and scales and answered to all. How does this connect to honest counting and reporting?",
   "1. In Thai markets, the royal inspector checked weights and scales and answered to all. How does this connect to honest counting and reporting?"),
  ("@EX Part 7: Syrian Values - Insaf in Using Findings", "@EX Part 7: Thai Values - Yutitham in Using Findings"),
  ("@ANSHEAD Exercise 39: Part 7: Syrian Values - Insaf in Using Findings",
   "@ANSHEAD Exercise 39: Part 7: Thai Values - Yutitham in Using Findings"),
  ("@INSTR Connect Syrian principles of fairness to the fair use of report findings.",
   "@INSTR Connect Thai principles of fairness to the fair use of report findings."),
  ("1. Insaf means giving each person their due. How should this guide the way a studio reports and acts on its results?",
   "1. Yutitham means giving each person their due. How should this guide the way a studio reports and acts on its results?"),
  ("Hisba means oversight exercised on behalf of everyone, as the muhtasib checked the weights and scales in the market.",
   "Sujarit means honesty owed to everyone, as the royal inspector checked the weights and scales in the market."),
  ("Insaf requires examining whether every part of the studio was treated fairly.",
   "Yutitham requires examining whether every part of the studio was treated fairly."),
  ("Studios pursuing insaf should ensure findings do not blame editors for a variance",
   "Studios pursuing yutitham should ensure findings do not blame editors for a variance"),
  ("Insaf means using figures not to punish but to improve.", "Yutitham means using figures not to punish but to improve."),
  ("Studios embracing hisba view reporting not as a burden", "Studios embracing sujarit view reporting not as a burden"),
  ("Studios committed to insaf view reporting as a fairness tool", "Studios committed to yutitham view reporting as a fairness tool"),
  ("A reporting system embodies this principle by providing transparent evidence of what was promised and delivered.",
   "A reporting system embodies sujarit by providing transparent evidence of what was promised and delivered."),
  ("Justice demands that reports examine whether the editors shared in a good year, whether collaborators were paid on the agreed terms, and whether small clients received the same service as large ones.",
   "Justice asks whether the editors shared in a good year, whether collaborators were paid on the agreed terms, and whether small clients were served like large ones."),
 ],
 9: [
  ("@EX Part 7: Syrian Values - Growth with Intention", "@EX Part 7: Polish Values - Growth with Intention"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values - Growth with Intention",
   "@ANSHEAD Exercise 38: Part 7: Polish Values - Growth with Intention"),
  ("@INSTR Connect Syrian community concepts with the growth of a studio.",
   "@INSTR Connect Polish community concepts with the growth of a studio."),
  ("1. In Syrian tradition, \"ta'awun\" means working together so all who share a task benefit. How does this concept relate to growing a studio?",
   "1. In Polish tradition, \"spółdzielczość\" means working together so all who share a task benefit. How does this relate to growing a studio?"),
  ("@EX Part 7: Syrian Values - Stewardship", "@EX Part 7: Polish Values - Stewardship"),
  ("@ANSHEAD Exercise 39: Part 7: Syrian Values - Stewardship", "@ANSHEAD Exercise 39: Part 7: Polish Values - Stewardship"),
  ("@INSTR Discuss Syrian stewardship concepts in lasting production.",
   "@INSTR Discuss Polish stewardship concepts in lasting production."),
  ("1. \"Waqf\" in Syrian usage means something set aside so its benefit continues for generations. How does this principle relate to building a studio that outlives its founder?",
   "1. \"Dziedzictwo\" in Polish usage means something handed on so its benefit continues for generations. How does this relate to building a studio that outlives its founder?"),
  ("Ta'awun suggests that growth should be intentional, purposeful, and rooted in serving the people who will run the studio.",
   "Spółdzielczość suggests growth be intentional, purposeful, and rooted in serving the people who will run the studio."),
  ("In Syrian usage, waqf makes people stewards responsible for something set aside so its benefit continues. Owners holding this understanding recognize they are temporary stewards of a studio and of the livelihoods it supports.",
   "In Polish usage, dziedzictwo makes people stewards responsible for something handed on so its benefit continues. Owners holding this view recognize they are temporary stewards of a studio and the livelihoods it supports."),
 ],
 10: [
  ("@EX Part 7: Syrian Values - Consultation", "@EX Part 7: Kenyan Values - Consultation"),
  ("@ANSHEAD Exercise 38: Part 7: Syrian Values - Consultation", "@ANSHEAD Exercise 38: Part 7: Kenyan Values - Consultation"),
  ("@INSTR Connect Syrian consultation principles to joint creative work.",
   "@INSTR Connect Kenyan consultation principles to joint creative work."),
  ("1. In Syrian practice, shura means matters are settled by consultation among those affected. How does this relate to associations and change led by the studios themselves?",
   "1. In Kenyan practice, a baraza means matters are settled by consultation among those affected. How does this relate to associations and change led by the studios themselves?"),
  ("@EX Part 7: Syrian Values - Justice", "@EX Part 7: Kenyan Values - Justice"),
  ("@ANSHEAD Exercise 39: Part 7: Syrian Values - Justice", "@ANSHEAD Exercise 39: Part 7: Kenyan Values - Justice"),
  ("1. In Syrian civic tradition, adl means removing unfair treatment and securing each person's due. How does this principle relate to advocacy aimed at changing the rules?",
   "1. In Kenyan civic tradition, haki means removing unfair treatment and securing each person's right. How does this principle relate to advocacy aimed at changing the rules?"),
  ("Shura means that leaders must consult widely before making decisions", "A baraza means that leaders must consult widely before making decisions"),
  ("Shura acknowledges that diverse perspectives improve decisions.", "A baraza acknowledges that diverse perspectives improve decisions."),
  ("Adl-centred advocacy goes beyond issuing individual permits", "Haki-centred advocacy goes beyond issuing individual permits"),
  ("Adl-guided associations recognize that a failing production climate is not inevitable",
   "Haki-guided associations recognize that a failing production climate is not inevitable"),
  ("Pursuing adl means managers align with the smallest producers and the staff",
   "Pursuing haki means managers align with the smallest producers and the staff"),
  ("Pursuing adl may create conflict", "Pursuing haki may create conflict"),
  ("Associations committed to adl view advocacy", "Associations committed to haki view advocacy"),
  ("Advocacy is slower than production and far less certain, but its reach is much wider and its effects last long after one file is approved.",
   "Advocacy is slower and far less certain, but its reach is much wider and its effects last long after one file is approved."),
  ("For a filming-permit campaign, that includes clerks at the ministry, the licensing director, the producers, the banks, the Ministry of Information, foreign investors, and the chambers of commerce.",
   "For a filming-permit campaign, that includes clerks at the office, the licensing director, the producers, the banks, the Ministry of Information, foreign investors, and the chambers of commerce."),
 ],
}


HITS = {}


def institutions(text, n):
    """Rewrite the registry, the media regulator, the film body and the guild."""
    text = text.replace("Ministry of Information", MOI[n])
    text = text.replace("General Establishment for Cinema", CIN[n])
    text = text.replace("Artists' Syndicate", SYN[n][0].upper() + SYN[n][1:])
    text = text.replace("commercial register", REG[n])
    text = text.replace("Commercial register", REG[n][0].upper() + REG[n][1:])
    return text


def generic(text, n):
    country, adj, c1, c2, c3 = C[n]
    text = re.sub(r"\bSyrians\b", f"{adj}s", text)
    text = re.sub(r"\bSyrian\b", adj, text)
    text = re.sub(r"\bSyria's\b", f"{country}'s", text)
    text = re.sub(r"\bSYRIA\b", country.upper(), text)
    text = re.sub(r"\bSyria\b", country, text)
    text = re.sub(r"\bDamascus\b", c1, text)
    text = re.sub(r"\bAleppo\b", c2, text)
    text = re.sub(r"\bHoms\b", c3, text)
    return text


def apply_unit(text, n):
    for old, new in ONE_OFF.get(n, []):
        if old in text:
            HITS[(n, old)] = HITS.get((n, old), 0) + 1
            text = text.replace(old, new)
    text = institutions(text, n)
    return generic(text, n)


for n in range(1, 11):
    p = f"{ROOT}/unit-{n:02d}.txt"
    s = open(p, encoding="utf-8").read()
    open(p, "w", encoding="utf-8").write(apply_unit(s, n))

for name in ("appendix-a.txt", "appendix-b.txt"):
    p = f"{ROOT}/{name}"
    lines = open(p, encoding="utf-8").read().split("\n")
    unit = 0
    for i, l in enumerate(lines):
        m = re.match(r"@H2 Unit (\d+)\b", l)
        if m:
            unit = int(m.group(1))
        mt = re.match(r"@TRACK \S+ Track (\d+)\.", l)
        if mt:
            unit = int(mt.group(1))
        if unit:
            lines[i] = apply_unit(l, unit)
    open(p, "w", encoding="utf-8").write("\n".join(lines))

missed = [(n, o) for n in ONE_OFF for o, _ in ONE_OFF[n] if (n, o) not in HITS]
print("transposed ten units to", ", ".join(C[n][0] for n in range(1, 11)))
print(f"{sum(HITS.values())} one-off substitution(s) applied; {len(missed)} unmatched")
for n, o in missed:
    print(f"  unit {n}: {o[:90]!r}")
